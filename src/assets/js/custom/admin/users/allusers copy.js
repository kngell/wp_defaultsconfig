import Swal from "sweetalert2";
import { readurl } from "corejs/profile_img";
import {
  Call_controller,
  ManageResponse,
  select2AjaxParams,
  editForm,
} from "corejs/form_crud";
import {
  removeInvalidInput,
  reset_invalid_input,
} from "corejs/inputErrManager";
import { AVATAR } from "corejs/config";

class Allusers {
  constructor(element) {
    this.element = element;
  }
  init = () => {
    this.setupVariables();
    this.setupEvents();
  };
  setupVariables = () => {
    this.wrapper = this.element.find("#users");
    this.modalbox = this.element.find("#modal-box");
    this.modalform = this.element.find("#modal-box #add-user-frm");
  };
  setupEvents = () => {
    var phpPlugin = this;

    // Upload profile form-text font-size
    var fontSize = phpPlugin.modalbox.find(".upload-box").width() * 0.16 * 0.9;
    phpPlugin.modalbox.find(".form-text").css("font-size", fontSize);
    //=======================================================================
    //Select user Role
    //=======================================================================
    let select = phpPlugin.modalform.find(".select_user_role").select2({
      placeholder: "--- Please select user permission ---",
      maximumInputLength: 20,
      tags: true,
      tokenSeparators: [",", " "],
      allowClear: true,
      ajax: select2AjaxParams({
        url: "forms/showDetails",
        table: "groups",
        data_type: "select2",
      }),
    });

    //=======================================================================
    //Edit user
    //=======================================================================
    phpPlugin.wrapper
      .find(".action .edit-user")
      .on("click", ".editBtn", function (e) {
        e.preventDefault();
        phpPlugin.modalbox.find("#operation").val("update");
        var data = {
          url: "forms/edit",
          formData:
            phpPlugin.modalbox
              .find("#add-user-frm input[type=hidden]")
              .serialize() +
            "&" +
            $.param({
              id: $(this)
                .parents(".action")
                .children(".delete_user")
                .find("input[name='userID']")
                .val(),
              table: "users",
              frm_name: "add-user-frm",
              table_options: "groups",
            }),
        };
        editForm(data, manageR);
        function manageR(response) {
          if (response.result === "success") {
            phpPlugin.modalform.find("#userID").val(response.msg.items.userID);
            phpPlugin.modalform
              .find("#date_enreg")
              .val(response.msg.items.date_enreg);
            phpPlugin.modalform
              .find("#updateAt")
              .val(response.msg.items.updateAt);
            phpPlugin.modalform
              .find("#deleted")
              .val(response.msg.items.deleted);
            phpPlugin.modalform
              .find("#firstName")
              .val(response.msg.items.firstName);
            phpPlugin.modalform
              .find("#lastName")
              .val(response.msg.items.lastName);
            phpPlugin.modalform
              .find("#userName")
              .val(response.msg.items.userName);
            phpPlugin.modalform.find("#email").val(response.msg.items.email);
            phpPlugin.modalform.find("#phone").val(response.msg.items.phone);
            if (response.msg.items.profileImage)
              phpPlugin.modalbox
                .find(".upload-box .img")
                .attr("src", response.msg.items.profileImage);
            //Select 2 set selected
            $(response.msg.selectedOptions[0]).each(function () {
              if (!$(select).find("option[value='" + this.id + "']").length) {
                $(select).append(new Option(this.text, this.id, false, false));
                $(select).val(response.msg.selectedOptions[1]);
                $(select).trigger("change");
              }
            });
          } else {
            phpPlugin.modalform.find("#alertErr").html(response.msg);
          }
        }
      });

    //=======================================================================
    //Delete User
    //=======================================================================
    phpPlugin.wrapper.on("submit", ".delete_user", function (e) {
      e.preventDefault();
      var data = {
        url: "forms/delete",
        id: $(this).find("input[name=userID]").val(),
        table: "users",
        frm: $(this),
        params: $(this),
        frm_Name: "#delete_user" + $(this).find("input[name=userID]").val(),
      };
      Swal.fire({
        title: "Delete User?",
        showCancelButton: true,
        html: "<p>Really want to delete it? You can restore later!</p>",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete!",
      }).then((result) => {
        if (result.isConfirmed) {
          Call_controller(data, manageR);
          function manageR(response, elmt) {
            if (response.result == "success") {
              elmt.parents(".card.bg-light").parent().remove();
            } else {
            }
          }
        }
      });
    });
    //=======================================================================
    //Restore User
    //=======================================================================
    phpPlugin.wrapper.on("submit", ".restore_user", function (e) {
      e.preventDefault();
      var data = {
        url: "forms/delete",
        id: $(this).find("input[name=userID]").val(),
        table: "users",
        frm: $(this),
        params: $(this),
        frm_Name: "#delete_user" + $(this).find("input[name=userID]").val(),
        method: "restore_User",
      };
      Swal.fire({
        title: "Restore User?",
        showCancelButton: true,
        html: "<p>Really want to Restore it? You can delete later!</p>",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Restore!",
      }).then((result) => {
        if (result.isConfirmed) {
          Call_controller(data, manageR);
          function manageR(response, elmt) {
            if (response.result == "success") {
              elmt.parents(".card.bg-light").parent().remove();
            } else {
            }
          }
        }
      });
    });
    //=======================================================================
    //Add or update user
    //=======================================================================
    //Read upload profile
    phpPlugin.modalbox
      .find('.upload-box input[type="file"]')
      .on("change", function () {
        readurl(
          this,
          phpPlugin.modalbox.find(".upload-box .img"),
          phpPlugin.modalbox.find(".upload-box .camera-icon")
        );
      });
    //Add user
    phpPlugin.modalform.on("submit", function (e) {
      e.preventDefault();
      phpPlugin.modalform.find("#submitBtn").val("Please wait...");
      var data = {
        url:
          phpPlugin.modalform.find("#operation").val() === "add"
            ? "forms/Add"
            : "forms/update",
        frm: phpPlugin.modalform,
        frm_name: "add-user-frm",
        table: "users",
        select2: JSON.stringify(Object.values($("#acl").select2("data"))),
      };
      switch (phpPlugin.modalform.find("#operation").val()) {
        case "add":
          Add(data, manageR);
          break;
        case "update":
          Call_controller(data, manageR);
          break;
      }
      function manageR(response) {
        phpPlugin.modalform.find("#submitBtn").val("Submit");
        var rdata = {
          frm: phpPlugin.modalform,
          alertid: phpPlugin.modalform.find("#alertErr"),
          modalbox: phpPlugin.modalbox,
          swal: Swal,
        };
        ManageResponse(response, rdata);
      }
    });
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
      phpPlugin.modalform.find(".select_user_role").empty();
      phpPlugin.modalbox.find(".upload-box .img").attr("src", AVATAR);
    });
  };
}
document.addEventListener("DOMContentLoaded", () => {
  new Allusers($(".page-container")).init();
});
