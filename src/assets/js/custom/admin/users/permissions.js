import {
  Add,
  Call_controller,
  displayAllItems,
  ManageResponse,
  select2AjaxParams,
  editForm,
  Delete,
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
    this.wrapper = this.element.find("#content-box");
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
      phpPlugin.modalform.find(".select_group").empty();
    });

    //set create/add function
    phpPlugin.wrapper.find("#addNew").on("click", function () {
      phpPlugin.modalform.find("#operation").val("add");
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
          modalbox: phpPlugin.modalbox,
          alertid: phpPlugin.modalform.find("#alertErr"),
          modalbox: phpPlugin.modalbox,
          swal: Swal,
        };
        ManageResponse(response, rdata);
      }
    });
    // Select parents Group
    let select = phpPlugin.modalform.find(".select_group").select2({
      placeholder: "--- Please select parent group ---",
      maximumInputLength: 20,
      ajax: select2AjaxParams({
        url: "forms/showDetails",
        table: "groups",
        data_type: "select2",
      }),
    });

    //=======================================================================
    //Edit group
    //=======================================================================

    phpPlugin.wrapper.on("click", ".editBtn", function (e) {
      e.preventDefault();
      phpPlugin.modalform.find("#operation").val("update");
      var data = {
        url: "forms/edit",
        formData:
          phpPlugin.modalbox
            .find("#groups-and-permissions-frm input[type=hidden]")
            .serialize() +
          "&" +
          $.param({
            id: $(this).attr("id"),
            table: "groups",
            frm_name: "groups-and-permissions-frm",
            table_options: "groups",
          }),
      };
      editForm(data, manageR);
      function manageR(response) {
        console.log(response);
        if (response.result === "success") {
          phpPlugin.modalform.find("#grID").val(response.msg.items.grID);
          phpPlugin.modalform
            .find("#date_enreg")
            .val(response.msg.items.date_enreg);
          phpPlugin.modalform
            .find("#updateAt")
            .val(response.msg.items.updateAt);
          phpPlugin.modalform.find("#deleted").val(response.msg.items.deleted);
          phpPlugin.modalform.find("#name").val(response.msg.items.name);
          phpPlugin.modalform
            .find("#description")
            .val(response.msg.items.description);
          phpPlugin.modalform.find("#status").val(response.msg.items.status);
          //Select 2 set selected
          $(response.msg.selectedOptions[0]).each(function () {
            if (!$(select).find("option[value='" + this.id + "']").length) {
              $(select).append(new Option(this.text, this.id, true, true));
              $(select).val(response.msg.selectedOptions[1]).trigger("change");
            }
          });
        } else {
          phpPlugin.modalform.find("#alertErr").html(response.msg);
        }
      }
    });

    //=======================================================================
    //Delete Group
    //=======================================================================
    phpPlugin.wrapper.on("click", ".deleteBtn", function (e) {
      e.preventDefault();
      var data = {
        url: "forms/delete",
        url_check: "forms/checkdelete",
        id: $(this).attr("id"),
        table: "groups",
        notification: "admin",
        swal: Swal,
        alertID: phpPlugin.wrapper.find("#globalErr"),
      };
      Delete(data, displayAll);
    });
  };
}
document.addEventListener("DOMContentLoaded", () => {
  new Permissions($(".page-container")).init();
});
