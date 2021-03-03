import { Call_controller } from "corejs/form_crud";
import Swal from "sweetalert2";
document.addEventListener("DOMContentLoaded", () => {
  function PhpPlugin(element) {
    this.element = element;
    this.init();
  }
  PhpPlugin.prototype.init = function () {
    this.setupVariables();
    this.setupEvents();
  };
  PhpPlugin.prototype.setupVariables = function () {
    this.wrapper = this.element.find("#users");
  };
  PhpPlugin.prototype.setupEvents = function () {
    var phpPlugin = this;
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
              // elmt
              //   .find(".deleteBtn")
              //   .removeClass("text-danger")
              //   .addClass("text-secondary");
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
              // elmt
              //   .find(".restoreBtn")
              //   .removeClass("text-secondary")
              //   .addClass("text-danger");
              elmt.parents(".card.bg-light").parent().remove();
            } else {
            }
          }
        }
      });
    });
  };

  $.fn.phpPlugin = function (options) {
    new PhpPlugin(this);
    return this;
  };
  $(".content").phpPlugin();
});
