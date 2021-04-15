import {
  displayAllItems,
  select2AjaxParams,
  Add,
  Call_controller,
  editForm,
  Delete,
} from "corejs/form_crud";

import { AVATAR, IMG } from "corejs/config";
import input from "corejs/inputErrManager";
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
      var table = $("table").DataTable({
        order: [0, "desc"],
        pagingType: "full_numbers",
        columnDefs: [
          {
            targets: [0],
            orderData: [0, 1],
          },
          {
            targets: [1],
            orderData: [1, 0],
          },
          {
            targets: [4],
            orderData: [4, 0],
          },
        ],
        stateSave: true,
      });
    }
  };

  //=======================================================================
  //Select2 Ajax method
  //=======================================================================
  _select2 = (params) => {
    let select = this.modal.find(this.select).select2({
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
  //get selected categories
  _get_selected_categories = (selector) => {
    if (selector) {
      return selector
        .map(function (i, cat) {
          if ($(this).is(":checked")) {
            return $(this).val();
          }
        })
        .get();
    } else {
      return "";
    }
  };
  //add or update
  _add_update = (params) => {
    let plugin = this;
    plugin.form.on("submit", function (e) {
      e.preventDefault();
      console.log(params.dropzone);
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
        categorie: plugin._get_selected_categories(params.categorie),
        select2: plugin.select
          ? JSON.stringify(Object.values($(plugin.select).select2("data")))
          : "",
      };
      switch (plugin.form.find("#operation").val()) {
        case "add":
          if (params.hasOwnProperty("dropzone")) {
            Add({ ...data, ...{ files: params.dropzone.files } }, manageR);
          } else {
            console.log("ici");
            Add(data, manageR);
          }
          break;
        case "update":
          if (params.hasOwnProperty("dropzone")) {
            Call_controller(
              { ...data, ...{ files: params.dropzone.files } },
              manageR
            );
          } else {
            Call_controller(data, manageR);
          }
          break;
      }
      function manageR(response) {
        plugin.form.find("#submitBtn").val("Submit");
        switch (response.result) {
          case "error-field":
            input.error(plugin.modal, response.msg);
            break;
          case "success":
            plugin.form.trigger("reset");
            plugin.modal ? plugin.modal.modal("hide") : "";
            if (params.swal) {
              Swal.fire("Success!", response.msg, "success").then(() => {
                if (params.datatable == true) {
                  plugin._displayAll({ datatable: params.datatable });
                } else {
                  location.reload();
                }
              });
            }
            if (params.prepend) {
              params.nested.prepend(response.msg);
            } else {
              if (params.prepend === false) {
                params.nested.before(response.msg);
                params.nested.hide();
              }
            }
            break;
          default:
            plugin.form.find("#alertErr").html(response.msg);
            plugin.form.trigger("reset");
            break;
        }
      }
    });
  };

  //=======================================================================
  //Get Id section
  //=======================================================================
  // Get edit id
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

  _get_delete_data = (selector, params) => {
    let table = this.table;
    let result;
    let id;
    switch (table) {
      case "users":
        id = selector.parent().find("input[name=userID]").val();
        break;
      default:
        id = selector.attr("id");
        break;
    }
    if (params["dataType"] && params.dataType != "frm") {
      result = {
        id: id,
        table: table,
        method: params.method != "" ? params.method : "",
      };
    } else {
      result =
        selector.parents("form").find("input[type=hidden]").serialize() +
        "&" +
        $.param({
          id: id,
          table: table,
          frm_name: selector.parents("form").attr("id"),
          method: params.method != "" ? params.method : "",
        });
    }
    return result;
  };

  //=======================================================================
  //Edit form
  //=======================================================================
  _edit = (params) => {
    let plugin = this;
    plugin.wrapper.on("click", ".editBtn", function (e) {
      e.preventDefault();
      e.stopPropagation();
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
            tbl_options: params.hasOwnProperty("tbl_options")
              ? params.tbl_options
              : plugin.table,
            frm_name: params.frm_name,
          }),
        params: params.std_fields,
      };
      editForm(data, manageR);
      function manageR(response, std_fields) {
        if (response.result === "success") {
          $(std_fields).each(function (i, field) {
            switch (true) {
              case $("#" + this).is($(plugin.select)):
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
                break;
              case this == "p_media" && plugin.table == "products":
                var dz = params.dropzone;
                console.log(dz.files);
                $(dz.element).find(".message").hide();
                dz.files = [];
                $.each(response.msg.items[field], function (key, value) {
                  let gallery_item = dz._createGallery(value);
                  dz._createFile(value)
                    .then((file) => {
                      dz.files.push(file);
                      dz._createExtraDiv(file, gallery_item);
                    })
                    .catch(function (error) {
                      console.log(
                        "Il y a eu un problème avec l'opération fetch: " +
                          error.message
                      );
                    });
                  dz.element.find(".gallery").append(gallery_item);
                  dz.element.on("click", ".gallery_item", (e) => {
                    e.stopPropagation();
                  });
                });
                dz._removeFiles();
                break;
              case this == "profileImage" && plugin.table == "users":
                plugin.modal
                  .find(".upload-box .img")
                  .attr("src", IMG + response.msg.items[field]);
                break;
              default:
                if ($("#" + this).is(":checkbox")) {
                  if (response.msg.items[field] == "on") {
                    $("#" + this).prop("checked", true);
                  }
                } else {
                  $("#" + this).val(response.msg.items[field]);
                }
                break;
            }
          });
          if (response.msg.selectedOptions.length > 0) {
            if (params.hasOwnProperty("categorieElement")) {
              response.msg.selectedOptions[1].forEach((cat) => {
                params.categorieElement
                  .find("input[value='" + cat + "']")
                  .prop("checked", true);
              });
            }
          }
        } else {
          plugin.form.find("#alertErr").html(response.msg);
        }
      }
    });
  };

  //=======================================================================
  //Delete
  //=======================================================================

  _delete = (params) => {
    let plugin = this;
    plugin.wrapper.on("click", ".deleteBtn", function (e) {
      e.preventDefault();
      var data = {
        url: "forms/delete",
        url_check: params.url_check != "" ? params.url_check : "",
        swal: params.hasOwnProperty("swal") && params.swal ? Swal : false,
        serverData: plugin._get_delete_data($(this), params),
      };
      Delete(data, manageR);
      function manageR(response) {
        if (response.result === "success") {
          if (params.hasOwnProperty("swal") && params.swal) {
            Swal.fire("Deleted!", response.msg, "success").then(() => {
              if (params.hasOwnProperty("datatable") && params.datatable) {
                plugin._displayAll({ datatable: params.datatable });
              } else {
                location.reload();
              }
            });
          }
        } else {
          plugin.form.find("#alertErr").html(response.msg);
        }
      }
    });
  };

  //=======================================================================
  //Delete
  //=======================================================================

  _restore = (params) => {
    let plugin = this;
    plugin.wrapper.on("submit", params.resto_class, function (e) {
      e.preventDefault();
      console.log($(this).parent());
      var data = {
        url: "forms/delete",
        swal: Swal,
        swal_button: params.swal_button,
        swal_message: params.swal_message,
        serverData: plugin._get_delete_data($(this), params),
      };
      Delete(data, manageR);
      function manageR(response) {
        if (response.result === "success") {
          if (params.swal) {
            Swal.fire("Deleted!", response.msg, "success").then(() => {
              if (params.datatable == true) {
                plugin._displayAll({ datatable: params.datatable });
              } else {
                location.reload();
              }
            });
          }
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
    let modal = this.modal;
    let select = data.select ? data.select : this.select;
    //remove invalid input on input focus
    input.removeInvalidInput(modal);
    //clean form on hide
    modal.on("hide.bs.modal", function () {
      if (modal.find(".is-invalid").length != 0) {
        input.reset_invalid_input(modal);
      }
      modal.find("#new-product-frm")[0].reset();
      // modal.find("input textarea").val("reset");
      select != "" ? modal.find(select).empty() : "";
      select != "" ? modal.find(select).trigger("input") : "";
      data.upload_img ? modal.find(data.upload_img).attr("src", AVATAR) : "";
      modal.find("input[type='checkbox']").empty();
      if (data.hasOwnProperty("dropzone")) {
        $(data.dropzone.element)
          .find(".gallery-wrapper .gallery_item")
          .remove();
        $(data.dropzone.element).find(".message").show();
      }
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
