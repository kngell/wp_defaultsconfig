import { Add, displayAllDetails } from "corejs/form_crud";
import owlCarousel from "owl.carousel";
import "select2";

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
    this.count_items = this.element.find(".cart_nb_elt");
    this.cart_items = this.element.find("#cart_items");
    this.wishlist = this.element.find("#wishlist");
    this.wishlist_items = this.element.find("#wishlist-items");
    this.newPhone = this.element.find("#new-phones");
    this.sub_total = this.element.find("#sub_total");
  };
  _setupEvents = () => {
    var phpPlugin = this;

    // Currency
    let currency = new Intl.NumberFormat("de-FR", {
      style: "currency",
      currency: "EUR",
    });
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
          if (phpPlugin.cart_items.find("#empty-cart").length != 0) {
            phpPlugin.cart_items.find("#empty-cart").remove();
          }
          if (phpPlugin.cart_items.length) {
            phpPlugin.cart_items.append(function () {
              return response.msg[0];
            });
            let total_price = currency.format(
              parseFloat(phpPlugin.wrapper.find("#deal-price").html()) +
                parseFloat(response.msg[1])
            );
            phpPlugin.wrapper.find("#deal-price").html(function () {
              return total_price;
            });
            let p_price = currency.format(
              phpPlugin.cart_items.find(".product_price").last().html()
            );
            phpPlugin.cart_items
              .find(".product_price")
              .last()
              .html(function () {
                return p_price;
              });
            phpPlugin.wrapper.find(".cart_nb_elt").html(function () {
              return (
                parseInt(phpPlugin.wrapper.find(".cart_nb_elt").html()) + 1
              );
            });
          }
          phpPlugin.count_items.html(function () {
            return parseInt(phpPlugin.count_items.html()) + 1;
          });
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
      }
    });
  };
}
document.addEventListener("DOMContentLoaded", function () {
  new Main($("#body"))._init();
});
