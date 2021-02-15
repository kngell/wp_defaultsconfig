import { Add, displayAllDetails, Call_controller } from "corejs/form_crud";
import owlCarousel from "owl.carousel";
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
    this.wrapper = this.element.find("#main-site");
    this.count_items = this.element.find(".cart_nb_elt");
    this.cart_items = this.element.find("#cart_items");
    this.wishlist = this.element.find("#wishlist");
    this.wishlist_items = this.element.find("#wishlist-items");
    this.newPhone = this.element.find("#new-phones");
    this.sub_total = this.element.find("#sub_total");
  };
  PhpPlugin.prototype.setupEvents = function () {
    var phpPlugin = this;

    //=======================================================================
    //Display user cart items
    //=======================================================================
    display__user_cart();
    function display__user_cart() {
      var data = {
        table: "cart",
        user: "guest",
        url: "forms/showDetails",
        data_type: "template",
      };
      displayAllDetails(data, display_cart);
      function display_cart(response) {
        if (response.result == "success") {
          phpPlugin.count_items.html(function () {
            return response.msg[0];
          });
          if (phpPlugin.cart_items.length) {
            phpPlugin.wrapper.find(".cart_nb_elt").html(function () {
              return response.msg[0];
            });
            phpPlugin.cart_items.fadeOut(100, function () {
              return phpPlugin.cart_items
                .html(response.msg[1])
                .fadeIn()
                .delay(500);
            });

            phpPlugin.sub_total.fadeOut(100, function () {
              return phpPlugin.sub_total
                .html(response.msg[2])
                .fadeIn()
                .delay(500); // display Cart items
            });
            if (response.msg[3]) {
              phpPlugin.wishlist_items.html(function () {
                return response.msg[3]; // display wishlist
              });
              phpPlugin.wishlist.show().fadeIn().delay(500);
            }
            setTimeout(function () {
              phpPlugin.sub_total
                .find("#deal-price")
                .html(function (i, d_price) {
                  return currency.format(parseFloat(d_price));
                });
              phpPlugin.wrapper
                .find(".product_price")
                .html(function (i, p_price) {
                  return currency.format(parseFloat(p_price));
                });
            }, 200);
          }
        }
      }
    }
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

  $.fn.phpPlugin = function (options) {
    new PhpPlugin(this);
    return this;
  };
  $("#body").phpPlugin();
});
