import { BASE_URL } from "corejs/config";
import { Add, Call_controller } from "corejs/form_crud";
import input from "corejs/inputErrManager";
import { readurl } from "corejs/profile_img";
class Login_And_Register {
  constructor(element) {
    this.element = element;
  }
  _init = () => {
    this._setupVariables();
    this._setupEvents();
  };
  //=======================================================================
  //Setup variables
  //=======================================================================
  _setupVariables = () => {
    this.logbox = this.element.find("#login-box");
    this.loginfrm = this.element.find("#login-frm");
    this.regbox = this.element.find("#register-box");
    this.regfrm = this.element.find("#register-frm");
    this.forgotbox = this.element.find("#forgot-box");
    this.forgotfrm = this.element.find("#forgot-frm");
  };
  //=======================================================================
  //Setup events
  //=======================================================================
  _setupEvents = () => {
    var phpLR = this;
    //refresh login & register frm on hide and show
    phpLR.logbox.on("hide.bs.modal", function () {
      if (phpLR.loginfrm.find(".is-invalid").length != 0) {
        input.reset_invalid_input(phpLR.loginfrm);
      }
    });
    //Reset register form invalid input on hide modal
    phpLR.regbox.on("hide.bs.modal", function () {
      if (phpLR.regfrm.find(".is-invalid").length != 0) {
        input.reset_invalid_input(phpLR.regfrm);
      }
    });
    //Reset register form on shown
    phpLR.regbox.on("show.bs.modal", function () {
      phpLR.regfrm.trigger("reset");
      phpLR.regfrm.find("#regAlert").html("");
    });
    //remove invalid input on focus register
    phpLR.regfrm.on("focus", "input", function () {
      $(this).removeClass("is-invalid");
      $(this).parent().children("div.invalid-feedback").html("");
    });
    //remove invalid input on focus login
    phpLR.loginfrm.on("focus", "input", function () {
      $(this).removeClass("is-invalid");
      $(this).parent().children("div.invalid-feedback").html("");
    });
    //reset forgot password frm
    phpLR.forgotbox.on("hide.bs.modal", function () {
      phpLR.forgotfrm.trigger("reset");
    });
    //Fill in login from cookies on shonw
    phpLR.logbox.on("shown.bs.modal", function () {
      $.ajax({
        url: BASE_URL + "auth/remember_check",
        method: "post",
        success: function (response) {
          if (response.result === "success") {
            phpLR.loginfrm.find("#email").val(response.msg.email);
            phpLR.loginfrm
              .find("#customCheck")
              .attr("checked", response.msg.remember);
          } else {
            phpLR.loginfrm.find("#email").val("");
            phpLR.loginfrm.find("#password").val("");
          }
        },
      });
    });
    //Register form
    phpLR.regfrm.on("submit", function (e) {
      e.preventDefault();
      e.stopPropagation();
      phpLR.regfrm.find("#register-btn").val("Please wait...");
      var inputData = {
        url: "auth/ajaxRegister",
        frm: phpLR.regfrm,
        table: "auth",
        notification: "admin",
        frm_name: "register-frm",
      };
      Add(inputData, gestionR);
      function gestionR(response) {
        phpLR.regfrm.find("#register-btn").val("Enregistrer");
        if (response.result == "success") {
          phpLR.regbox
            .find(".upload-profile-image .img")
            .attr("src", response.img ? response.img : "");
          phpLR.regfrm.trigger("reset");
          phpLR.regbox.find(".input-group").remove();
          phpLR.regfrm.find("#regAlert").html(response.msg);
        } else {
          if (response.result == "error-field") {
            input.error(phpLR.loginfrm, response.msg);
          } else {
            phpLR.loginfrm.find("#loginAlert").html(response.msg);
          }
        }
      }
    });
    //read profile image on change
    phpLR.regbox
      .find('.upload-profile-image input[type="file"]')
      .on("change", function () {
        readurl(
          this,
          phpLR.regbox.find(".upload-profile-image .img"),
          phpLR.regbox.find(".upload-profile-image .camera-icon")
        );
      });
    //Login form
    phpLR.loginfrm.on("submit", function (e) {
      e.preventDefault();
      phpLR.loginfrm.find("#login-btn").val("Please wait...");
      var data = {
        url: "auth/ajaxLogin",
        frm: phpLR.loginfrm,
        frm_name: "login-frm",
      };
      Call_controller(data, ManageLoginResponse);
      //manage login Response
      function ManageLoginResponse(response) {
        phpLR.loginfrm.find("#login-btn").val("Login");
        if (response.result == "success") {
          phpLR.loginfrm.trigger("reset");
          phpLR.logbox.modal("hide");
          window.location.reload();
        } else {
          if (response.result == "error-field") {
            input.error(phpLR.loginfrm, response.msg);
          } else {
            phpLR.loginfrm.find("#loginAlert").html(response.msg);
          }
        }
      }
    });
    //Forgot password request
    phpLR.forgotfrm.on("submit", function (e) {
      e.preventDefault();
      phpLR.forgotfrm.find("#forgot-btn").val("Please wait...");
      var data = {
        url: "auth/forgot",
        frm: phpLR.forgotfrm,
        frm_name: "forgot-frm",
      };
      Call_controller(data, MResponse);
      function MResponse(response) {
        phpLR.forgotfrm.find("#forgot-btn").val("Reset password");
        if (response.result == "success") {
          phpLR.forgotfrm.trigger("reset");
          phpLR.forgotfrm.find("#regAlert").html(response.msg);
        } else {
          if (response.result == "error-field") {
            input.error(phpLR.loginfrm, response.msg);
          } else {
            phpLR.loginfrm.find("#loginAlert").html(response.msg);
          }
        }
      }
    });
    //logout
    var logout = $("a:contains('Logout')");
    $(logout).on("click", function () {
      if (typeof FB !== "undefined") {
        FB.logout().then((response) => {
          // logged out
        });
      }
      $.ajax({
        url: BASE_URL + "auth/logout",
        method: "post",
        success: function (response) {
          if (response.result == "success") {
            logout.closest("div").load(location.href + " .connect");
            if (response.msg == "redirect") {
              window.location.href = BASE_URL;
            }
          }
        },
      });
    });
  };
}
export default new Login_And_Register($("#Login-Register-System"))._init();
