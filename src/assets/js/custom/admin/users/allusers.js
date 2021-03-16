import Swal from "sweetalert2";
import { readurl } from "corejs/profile_img";
import { Call_controller, ManageResponse } from "corejs/form_crud";
import {
  removeInvalidInput,
  reset_invalid_input,
} from "corejs/inputErrManager";

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
    //Select user Role
    //=======================================================================
    let select = phpPlugin.modalbox
      .find(".select2")
      .select2({
        placeholder: "User rôle",
        tags: true,
        tokenSeparators: [",", " "],
      })
      .on("change", function () {
        let change = $(this).find('[data-select2-tag="true"]:last-of-type');
        console.log(change.val());
      });
    //=======================================================================
    //Add new user
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
      var data = {
        url: "forms/Add",
        frm: phpPlugin.modalform,
        frm_name: "add-user-frm",
        table: "users",
        select2: JSON.stringify(Object.values($("#acl").select2("data"))),
      };
      Call_controller(data, manageR);
      function manageR(response) {
        var rdata = {
          frm: phpPlugin.modalform,
          swal: Swal,
          modalbox: phpPlugin.modalbox,
          alertid: phpPlugin.modalform.find("#alertErr"),
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
      phpPlugin.modalform.find("#parentID").empty();
    });
  };
}
document.addEventListener("DOMContentLoaded", () => {
  new Allusers($(".page-container")).init();
});
