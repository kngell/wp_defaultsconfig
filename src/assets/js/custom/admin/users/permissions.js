import {
  Add,
  Call_controller,
  displayAllItems,
  ManageResponse,
  select2AjaxParams,
} from "corejs/form_crud";
import {
  removeInvalidInput,
  reset_invalid_input,
} from "corejs/inputErrManager";
import Swal from "sweetalert2";
class Permissions {
  constructor(element) {
    this.element = element;
  }
  init = () => {
    this.setupVariables();
    this.setupEvents();
  };
  setupVariables = () => {
    this.wrapper = this.element.find(".content .card");
    this.modalbox = this.element.find("#modal-box");
    this.modalform = this.element.find(
      "#modal-box #groups-and-permissions-frm"
    );
  };
  setupEvents = () => {
    var phpPlugin = this;

    //=======================================================================
    //Display All Plugins
    //=======================================================================
    displayAll();
    function displayAll() {
      var data = {
        url: "forms/showAll",
        table: "groups",
        user: "admin",
        datatable: true,
        displayid: phpPlugin.wrapper.find("#showAll"),
        data_type: "values",
      };
      displayAllItems(data);
    }
    //=======================================================================
    //clean form
    //=======================================================================
    //remove invalid input on input focus
    removeInvalidInput(phpPlugin.modalform);
    //clean form on hide
    phpPlugin.modalbox.on("hide.bs.modal", function () {
      if (phpPlugin.modalform.find(".is-invalid").length != 0) {
        reset_invalid_input(phpPlugin.modalform);
      }
      phpPlugin.modalform.trigger("reset");
      phpPlugin.modalform.find("#status").val(false);
    });
    // =======================================================================
    // Add or Update Plugin
    // =======================================================================
    //set create/add function
    phpPlugin.wrapper.find("#addNew").on("click", function () {
      phpPlugin.modalform.find("#operation").val("add");
    });
    //add or update
    phpPlugin.modalform.on("submit", (e) => {
      e.preventDefault();
      e.stopPropagation();
      phpPlugin.modalform.find("#submitBtn").val("Please wait...");
      var data = {
        url:
          phpPlugin.modalform.find("#operation").val() === "add"
            ? "forms/Add"
            : "forms/update",
        frm: phpPlugin.modalform,
        frm_name: "groups-and-permissions-frm",
        table: "groups",
        notification: "admin",
      };
      switch (phpPlugin.modalform.find("#operation").val()) {
        case "add":
          Add(data, Response);
          break;
        case "update":
          Call_controller(data, Response);
          break;
      }
      function Response(response) {
        phpPlugin.modalform.find("#submitBtn").val("Enregistrer");
        var rdata = {
          frm: phpPlugin.modalform,
          swal: Swal,
          modalbox: phpPlugin.modalbox,
          alertid: phpPlugin.modalform.find("#alertErr"),
          display: displayAll,
        };
        ManageResponse(response, rdata);
      }
    });
    console.log($(".select2"));
    // Select parents Group
    phpPlugin.modalform.find(".select_group").select2({
      placeholder: "--- Please select parent group ---",
      maximumInputLength: 20,
      ajax: select2AjaxParams({
        url: "forms/showDetails",
        table: "groups",
        data_type: "select2",
      }),
    });
  };
}
document.addEventListener("DOMContentLoaded", () => {
  new Permissions($(".page-content")).init();
});
