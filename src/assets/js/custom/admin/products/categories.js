import {
  Add,
  displayAllItems,
  ManageResponse,
  Call_controller,
  editForm,
  Delete,
  displayMultisellect,
} from "corejs/form_crud";
import {
  removeInvalidInput,
  reset_invalid_input,
} from "corejs/inputErrManager";
import Swal from "sweetalert2/dist/sweetalert2.js";
document.addEventListener("DOMContentLoaded", function () {
  function PhpPlugin(element) {
    this.element = element;
    this.init();
  }
  PhpPlugin.prototype.init = function () {
    this.setupVariables();
    this.setupEvents();
  };
  PhpPlugin.prototype.setupVariables = function () {
    this.wrapper = this.element.find(".card");
    this.Pluginfrm = this.element.find("#Categorie-frm");
    this.PluginModal = this.element.find("#modal-box");
  };

  PhpPlugin.prototype.setupEvents = function () {
    var phpPlugin = this;

    //=======================================================================
    //Display All Plugins
    //=======================================================================
    displayAll();
    function displayAll() {
      var data = {
        url: "forms/showAll",
        table: "categories",
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
    removeInvalidInput(phpPlugin.Pluginfrm);
    //clean form on hide
    phpPlugin.PluginModal.on("hide.bs.modal", function () {
      if (phpPlugin.Pluginfrm.find(".is-invalid").length != 0) {
        reset_invalid_input(phpPlugin.Pluginfrm);
      }
      phpPlugin.Pluginfrm.trigger("reset");
      phpPlugin.Pluginfrm.find("#parentID").empty();
    });
    //set create/add function
    phpPlugin.wrapper.find("#addNew").on("click", function () {
      phpPlugin.Pluginfrm.find("#operation").val("add");
      let data = {
        displayID: phpPlugin.Pluginfrm.find("#parentID"),
        alertID: phpPlugin.Pluginfrm.find("#alertErr"),
        table: "categories",
      };
      var root =
        "<option Desabled selected class='desabled' value = '0'>Categorie Parent</option>";
      phpPlugin.Pluginfrm.find("#parentID").append(root);
      displayMultisellect(data);
    });

    // =======================================================================
    // Add or Update Plugin
    // =======================================================================
    phpPlugin.Pluginfrm.on("submit", (e) => {
      e.preventDefault();
      e.stopPropagation();
      phpPlugin.Pluginfrm.find("#PluginBtn").val("Please wait...");
      var data = {
        url:
          phpPlugin.Pluginfrm.find("#operation").val() === "add"
            ? "forms/Add"
            : "forms/update",
        frm: phpPlugin.Pluginfrm,
        frm_name: "Categorie-frm",
        table: "categories",
        notification: "admin",
      };
      switch (phpPlugin.Pluginfrm.find("#operation").val()) {
        case "add":
          Add(data, Response);
          break;
        case "update":
          Call_controller(data, Response);
          break;
      }
      function Response(response) {
        phpPlugin.Pluginfrm.find("#PluginBtn").val("Valider");
        var rdata = {
          frm: phpPlugin.Pluginfrm,
          swal: Swal,
          modalbox: phpPlugin.PluginModal,
          alertid: phpPlugin.Pluginfrm.find("#alertErr"),
          display: displayAll,
        };
        ManageResponse(response, rdata);
      }
    });
    //=======================================================================
    //Edit Plugin
    //=======================================================================
    phpPlugin.wrapper.on("click", ".editBtn", function (e) {
      e.preventDefault();
      phpPlugin.Pluginfrm.find("#operation").val("update");
      var data = {
        url: "forms/edit",
        formData:
          phpPlugin.PluginModal.find(
            "#Categorie-frm input[type=hidden]"
          ).serialize() +
          "&" +
          $.param({
            id: $(this).attr("id"),
            table: "categories",
            frm_name: "Categorie-frm",
          }),
      };
      editForm(data, manageR);
      function manageR(response) {
        if (response.result === "success") {
          phpPlugin.Pluginfrm.find("#catID").val(response.msg.items.catID);
          phpPlugin.Pluginfrm.find("#date_enreg").val(
            response.msg.items.date_enreg
          );
          phpPlugin.Pluginfrm.find("#updateAt").val(
            response.msg.items.updateAt
          );
          phpPlugin.Pluginfrm.find("#status").val(response.msg.items.status);
          phpPlugin.Pluginfrm.find("#categorie").val(
            response.msg.items.categorie
          );
          phpPlugin.Pluginfrm.find("#description").val(
            response.msg.items.description
          );
        } else {
          phpPlugin.Pluginfrm.find("#alertErr").html(response.msg);
        }
        let data = {
          displayID: phpPlugin.Pluginfrm.find("#parentID"),
          alertID: phpPlugin.Pluginfrm.find("#alertErr"),
          table: "categories",
        };
        var root =
          "<option Desabled selected class='desabled' value = '0'>Selectionnez la categorie</option>";
        phpPlugin.Pluginfrm.find("#parentID").append(root);
        displayMultisellect(data);
      }
    });
    // =======================================================================
    // Active/desactive plugin
    // =======================================================================
    phpPlugin.wrapper.on("click", ".activateBtn", function (e) {
      e.preventDefault();
      var data = {
        url: "tables/update",
        table: "categories",
        frm: phpPlugin.Pluginfrm,
        id: $(this).attr("id"),
        method: "categorieStatus",
        params: $(this),
      };
      Call_controller(data, Response);
      function Response(response, elmt) {
        console.log(response);
        if (response.result == "success") {
          response.msg == "green"
            ? elmt.attr("title", "Deactivate Category")
            : elmt.attr("title", "Activate Category");
          elmt
            .children()
            .first()
            .attr("style", "color:" + response.msg);
        }
      }
    });
    // =======================================================================
    // Delete Plugin
    // =======================================================================
    phpPlugin.wrapper.on("click", ".deleteBtn", function (e) {
      e.preventDefault();
      var data = {
        url: "forms/delete",
        url_check: "forms/checkdelete",
        id: $(this).attr("id"),
        table: "categories",
        notification: "admin",
        swal: Swal,
        alertID: phpPlugin.wrapper.find("#globalErr"),
      };
      Delete(data, displayAll);
    });
  };
  $.fn.phpPlugin = function (options) {
    new PhpPlugin(this);
    return this;
  };
  $(".content").phpPlugin();
});
