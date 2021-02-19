import { get_visitors_data, send_visitors_data } from "corejs/visitors";
import log_reg from "corejs/logregloader";

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
    this.loginBtn = this.element.find("#login_btn");
    this.header = this.element.find("#header");
  };
  PhpPlugin.prototype.setupEvents = function () {
    var phpPlugin = this;

    //=======================================================================
    //Import login system
    //=======================================================================
    phpPlugin.header.on(
      "click show.bs.dropdown",
      ".connect .connexion",
      function () {
        var loader = new log_reg();
        if (!loader.check()) {
          loader.load();
        }
      }
    );
    //=======================================================================
    //Get visitors IP Adresss
    //=======================================================================
    let visitor = get_visitors_data().then((visitors_data) => {
      var data = {
        url: "visitors/track",
        table: "visitors",
        ip: visitors_data.ip,
      };
      send_visitors_data(data, manageR);
      function manageR(response) {}
    });
  };

  $.fn.phpPlugin = function (options) {
    new PhpPlugin(this);
    return this;
  };
  $("#body").phpPlugin();
});
