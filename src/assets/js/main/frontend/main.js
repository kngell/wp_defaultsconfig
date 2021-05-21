import { Add } from "corejs/form_crud";
import owlCarousel from "owl.carousel";
import "select2";
import user_cart from "corejs/user_cart";
import favicon from "img/favicon.ico";
class Main {
  constructor(element) {
    this.element = element;
  }
  _init = () => {
    this._setupVariables();
    this._setupEvents();
  };
  _setupVariables = () => {
    this.header = this.element.find("#header");
    this.wrapper = this.element.find("#main-site");
  };
  _setupEvents = () => {
    var phpPlugin = this;

    // Currency
    let currency = new Intl.NumberFormat("de-FR", {
      style: "currency",
      currency: "EUR",
    });
    console.log(favicon);
    //=======================================================================
    //Add to cart
    //=======================================================================
    phpPlugin.wrapper.on("submit", ".add_to_cart_frm", function (e) {
      e.preventDefault();
      var data = {
        url: "guests/Add",
        frm: $(this),
        frm_name: "add_to_cart_frm" + $(this).find("input[type=hidden]").val(),
        table: "cart",
        params: $(this).find("button[type=submit]"),
      };
      Add(data, ManageR);
      function ManageR(response, button) {
        if (response.result == "success") {
          if (document.location.pathname != "/kngell_ecommerce/home/cart") {
            phpPlugin.header.find(".cart_nb_elt").html(function () {
              return (
                response.msg[0] +
                parseInt(phpPlugin.header.find(".cart_nb_elt").html())
              );
            });
          }
          if (response.msg[0] == 1) {
            button
              .removeClass("btn-warning")
              .addClass("btn-success")
              .html("In the cart");
          } else {
            button
              .removeClass("btn-warning")
              .addClass("btn-success")
              .html("In the cart");
          }
          if (document.location.pathname == "/kngell_ecommerce/home/cart") {
            new user_cart(phpPlugin.wrapper, phpPlugin.header)._display_cart();
          }
        }
      }
    });
  };
}
document.addEventListener("DOMContentLoaded", function () {
  new Main($("#body"))._init();
});
