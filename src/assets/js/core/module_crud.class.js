import {
  displayAllItems,
  select2AjaxParams,
  Add,
  Call_controller,
  editForm,
  Delete,
} from "corejs/form_crud";
import { add_inputs_errors, error, inputsArray } from "./inputErrManager";
import { AVATAR } from "corejs/config";
import {
  removeInvalidInput,
  reset_invalid_input,
} from "corejs/inputErrManager";
import Swal from "sweetalert2";
export default class Cruds {
  constructor(data) {
    this.table = data.table;
    this.wrapper = data.wrapper;
    this.form = data.form;
    this.modal = data.modal;
    this.select = data.select_tag;
  }

  //=======================================================================
  //Display All Plugins
  //=======================================================================
  _displayAll = (params) => {
    let wrapper = this.wrapper;
    var data = {
      url: "forms/showAll",
      table: this.table,
      user: "admin",
      data_type: "values",
    };
    displayAllItems(data, manageR);
    function manageR(response) {
      if (response.result == "success") {
        wrapper.find("#showAll").html(response.msg);
        if (params.datatable) _loadDatatables();
      } else {
        wrapper.find("#alertErr").html(response.msg);
      }
    }
    async function _loadDatatables() {
      const DataTable = await import(
        /* webpackChunkName: "datatables" */ "datatables.net"
      );
      $("table").DataTable({
        order: [0, "desc"],
      });
    }
  };

  //=======================================================================
  //Select2 Ajax method
  //=======================================================================
  _select2 = (params) => {
    let select = this.form.find(this.select).select2({
      placeholder: "---" + params.placeholder + "---",
      maximumInputLength: 20,
      tags: true,
      tokenSeparators: [",", " "],
      allowClear: true,
      ajax: select2AjaxParams({
        url: "forms/showDetails",
        table: params.tbl_options != "" ? params.tbl_options : "",
        data_type: "select2",
      }),
    });

    return select;
  };
  //=======================================================================
  //Add or update table
  //=======================================================================
  //Set add btn

  _set_addBtn = () => {
    let wrapper = this.wrapper;
    let form = this.form;
    wrapper.find("#addNew").on("click", function () {
      form.find("#operation").val("add");
    });
  };
  //add or update
  _add_update = (params) => {
    let plugin = this;
    plugin.form.on("submit", function (e) {
      e.preventDefault();
      plugin.form.find("#submitBtn").val("Please wait...");
      var data = {
        url:
          plugin.form.find("#operation").val() === "add"
            ? "forms/Add"
            : "forms/update",
        frm: plugin.form,
        frm_name: params.frm_name,
        table: plugin.table,
        select2: plugin.select
          ? JSON.stringify(Object.values($(plugin.select).select2("data")))
          : "",
      };
      switch (plugin.form.find("#operation").val()) {
        case "add":
          Add(data, manageR);
          break;
        case "update":
          Call_controller(data, manageR);
          break;
      }
      function manageR(response) {
        plugin.form.find("#submitBtn").val("Submit");
        var rdata = {
          frm: plugin.form,
          alertid: plugin.form.find("#alertErr"),
          modal: params.modal,
          swal: params.swal,
          datatable: params.datatable,
        };
        plugin._manage_add_update_response(response, rdata);
      }
    });
  };
  _manage_add_update_response = (response, data) => {
    switch (response.result) {
      case "error-field":
        add_inputs_errors(inputsArray(data.frm), error(data.frm, response.msg));
        break;
      case "success":
        data.frm.trigger("reset");
        data.modal ? data.modal.modal("hide") : "";
        if (data.swal) {
          Swal.fire("Success!", response.msg, "success").then(() => {
            data.datatable == true
              ? plugin._displayAll({ datatable: data.datatable })
              : "";
          });
        }
        if (data.prepend) {
          data.nested.prepend(response.msg);
        } else {
          if (data.prepend === false) {
            data.nested.before(response.msg);
            data.nested.hide();
          }
        }
        if (data.display) data.display();
        break;
      default:
        data.alertid.html(response.msg);
        data.frm.trigger("reset");
        break;
    }
  };
  //=======================================================================
  //Edit form
  //=======================================================================
  _get_Edit_id = (selector) => {
    let table = this.table;
    let result;
    switch (table) {
      case "users":
        result = selector
          .parents(".action")
          .children(".delete_user")
          .find("input[name='userID']")
          .val();
        break;

      default:
        result = selector.attr("id");
        break;
    }
    return result;
  };

  _edit = (params) => {
    let plugin = this;
    plugin.wrapper.on("click", ".editBtn", function (e) {
      e.preventDefault();
      plugin.modal.find("#operation").val("update");
      var data = {
        url: "forms/edit",
        formData:
          plugin.modal
            .find("#" + params.frm_name + " input[type=hidden]")
            .serialize() +
          "&" +
          $.param({
            id: plugin._get_Edit_id($(this), plugin.table),
            table: plugin.table,
            frm_name: params.frm_name,
            table_options:
              params.tbl_option != "" ? params.tbl_option : plugin.table,
          }),
        params: params.std_fields,
      };
      editForm(data, manageR);
      function manageR(response, std_fields) {
        if (response.result === "success") {
          $(std_fields).each(function (i, field) {
            if ($("#" + this).is($(plugin.select))) {
              $(response.msg.selectedOptions[0]).each(function () {
                if (
                  !$(plugin.select).find("option[value='" + this.id + "']")
                    .length
                ) {
                  $(plugin.select).append(
                    new Option(this.text, this.id, false, false)
                  );
                  $(plugin.select).val(response.msg.selectedOptions[1]);
                  $(plugin.select).trigger("change");
                }
              });
            } else {
              //Profile Image Make a function later
              if (field == "profileImage" && plugin.table == "users") {
                plugin.modal
                  .find(".upload-box .img")
                  .attr("src", response.msg.items[field]);
              } else {
                $("#" + this).val(response.msg.items[field]);
              }
            }
          });
        } else {
          plugin.form.find("#alertErr").html(response.msg);
        }
      }
    });
  };

  //=======================================================================
  //Delete User
  //=======================================================================
  _delete = (params) => {
    let plugin = this;
    plugin.wrapper.on("click", ".deleteBtn", function (e) {
      e.preventDefault();
      var data = {
        url: "forms/delete",
        url_check: "forms/checkdelete",
        id: $(this).attr("id"),
        table: plugin.table,
        swal: Swal,
      };
      Delete(data, manageR);
      function manageR(response) {
        if (response.result === "success") {
          console.log(response);
          params.swal
            ? Swal.fire("Deleted!", response.msg, "success").then(() => {
                plugin._displayAll({ datatable: params.datatable });
              })
            : "";
        } else {
          plugin.form.find("#alertErr").html(response.msg);
        }
      }
    });
  };

  //=======================================================================
  //clean form
  //=======================================================================
  _clean_form = (data = {}) => {
    let form = this.form;
    let modal = this.modal;
    let select = data.select ? data.select : this.select;
    //remove invalid input on input focus
    removeInvalidInput(form);
    //clean form on hide
    modal.on("hide.bs.modal", function () {
      if (form.find(".is-invalid").length != 0) {
        reset_invalid_input(form);
      }
      form.trigger("reset");
      select != "" ? form.find(select).empty() : "";
      select != "" ? form.find(select).trigger("input") : "";
      data.upload_img ? modal.find(data.upload_img).attr("src", AVATAR) : "";
    });
  };
  // =======================================================================
  // Active/desactive plugin
  // =======================================================================
  _active_inactive_elmt = (params) => {
    let wrapper = this.wrapper;
    let form = this.form;
    wrapper.on("click", ".activateBtn", function (e) {
      e.preventDefault();
      var data = {
        url: "tables/update",
        table: params.table,
        frm: form,
        id: $(this).attr("id"),
        method: "updateStatus",
        params: $(this),
      };
      Call_controller(data, Response);
      function Response(response, elmt) {
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
  };
}
