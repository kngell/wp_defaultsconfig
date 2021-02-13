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
        id: 1,
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
    //=======================================================================
    //Delete cart
    //=======================================================================
    function refresh_deal_price(elt) {
      elt
        .parents("#cart_items")
        .next()
        .find("#deal-price")
        .html(function (i, d_price) {
          let reg = /\s/g;
          let p_price = elt
            .parents(".row")
            .first()
            .last()
            .find(".product_price")
            .html();
          return currency.format(
            parseFloat(
              d_price
                .replace(reg, function () {
                  return "";
                })
                .replace("&nbsp;€", "")
            ) -
              parseFloat(
                p_price
                  .replace(reg, function () {
                    return "";
                  })
                  .replace("&nbsp;€", "")
              )
          );
        });
    }
    phpPlugin.wrapper.on("click", "#cart_items .deleteBtn", function (e) {
      e.preventDefault();
      $(this).html("Please wait...");
      var data = {
        url: "guests/delete",
        id: $(this).attr("id"),
        table: "cart",
        user_id: 1,
        frm: $(this).parent(),
        params: $(this),
      };
      Call_controller(data, manageResponse);
      function manageResponse(response, elt) {
        if (response.result == "success") {
          refresh_deal_price(elt);
          elt.parents(".row").first().remove();
          phpPlugin.count_items.html(function () {
            return parseInt(phpPlugin.count_items.html()) - 1;
          });
          phpPlugin.wrapper.find(".cart_nb_elt").html(function (i, nb_items) {
            return nb_items - 1;
          });
          phpPlugin.newPhone
            .find(
              ".add_to_cart_frm input[value='" +
                elt.parent().children(":first").val() +
                "']"
            )
            .parent()
            .find("button[type=submit]")
            .removeClass("btn-success")
            .addClass("btn-warning")
            .html("Add to Cart");
          if (phpPlugin.cart_items.children().length == 0) {
            phpPlugin.cart_items.html(response.msg);
          }
        }
      }
    });
    //=======================================================================
    //Save for later
    //=======================================================================
    phpPlugin.wrapper.on(
      "click",
      "#cart_items .qty button[type=button]",
      function (e) {
        var data = {
          url: "guests/toggleWishlistAndcCart",
          frm: $(this).prev(),
          frm_name:
            "delete-cart-item-frm" +
            $(this).prev().find("input[type=hidden]").val(),
          table: "wishlist",
          params: $(this),
          method: "save_For_Later",
        };
        Call_controller(data, manageResponse);
        function manageResponse(response, elt) {
          if (response.result == "success") {
            console.log(response);
            phpPlugin.wishlist_items.append(function () {
              return response.msg[0][0];
            });
            phpPlugin.wrapper
              .find(".product_price")
              .html(function (i, p_price) {
                return currency.format(parseFloat(p_price));
              });
            if (phpPlugin.wishlist.is(":hidden")) {
              phpPlugin.wishlist.show().fadeIn().delay(500);
            }
            refresh_deal_price(elt);
            elt.parents(".row").first().remove();
            phpPlugin.count_items.html(function (i, nb_item) {
              return parseInt(nb_item - 1);
            });
            phpPlugin.wrapper.find(".cart_nb_elt").html(function (i, nb_item) {
              return parseInt(nb_item - 1);
            });
            phpPlugin.newPhone
              .find(
                ".add_to_cart_frm input[value='" +
                  elt.prev().children(":first").val() +
                  "']"
              )
              .parent()
              .find("button[type=submit]")
              .removeClass("btn-success")
              .addClass("btn-warning")
              .html("Add to Cart");
            if (phpPlugin.cart_items.children().length == 0) {
              phpPlugin.cart_items.html(response.msg[1]);
            }
          }
        }
      }
    );
    //=======================================================================
    //Add to cart from whishlist
    //=======================================================================
    phpPlugin.wrapper.on(
      "click",
      "#wishlist-items .qty button[type=button]",
      function (e) {
        var data = {
          url: "guests/toggleWishlistAndcCart",
          frm: $(this).prev(),
          frm_name:
            "delete-cart-item-frm" +
            $(this).prev().find("input[type=hidden]").val(),
          table: "cart",
          params: $(this),
          method: "add_To_Cart",
        };
        Call_controller(data, manageResponse);
        function manageResponse(response, elt) {
          if (response.result == "success") {
            //check if cart is empty
            if (phpPlugin.cart_items.find("#empty-cart").length != 0) {
              phpPlugin.cart_items.find("#empty-cart").remove();
            }
            //append cart
            phpPlugin.cart_items.append(function () {
              return response.msg[0];
            });
            // format product price
            phpPlugin.wrapper
              .find(".product_price")
              .html(function (i, p_price) {
                return currency.format(parseFloat(p_price));
              });
            //refresh deal price
            phpPlugin.wrapper.find("#deal-price").html(function (i, d_price) {
              let reg = /\s/g;
              return currency.format(
                parseFloat(
                  d_price
                    .replace(reg, function () {
                      return "";
                    })
                    .replace("&nbsp;€", "")
                ) + parseFloat(response.msg[1])
              );
            });
            //refresh nb items in the cart
            phpPlugin.count_items.html(function (i, nb_item) {
              return parseInt(nb_item) + 1;
            });
            phpPlugin.wrapper.find(".cart_nb_elt").html(function (i, nb_item) {
              return parseInt(nb_item) + 1;
            });
            elt.parents(".row").first().remove();
            if (phpPlugin.wishlist_items.children().length == 0) {
              phpPlugin.wishlist.hide();
            }
            phpPlugin.newPhone
              .find(
                ".add_to_cart_frm input[value='" +
                  elt.prev().children(":first").val() +
                  "']"
              )
              .parent()
              .find("button[type=submit]")
              .removeClass("btn-warning")
              .addClass("btn-success")
              .html("Add to Cart");
          }
        }
      }
    );
    //=======================================================================
    //Delete whishlist items
    //=======================================================================
    phpPlugin.wrapper.on("click", "#wishlist-items .deleteBtn", function (e) {
      e.preventDefault();
      $(this).html("Please wait...");
      var data = {
        url: "guests/delete",
        id: $(this).attr("id"),
        table: "wishlist",
        user_id: 1,
        frm: $(this).parent(),
        params: $(this),
      };
      Call_controller(data, manageResponse);
      function manageResponse(response, elt) {
        if (response.result == "success") {
          elt.parents(".row").first().remove();
          if (phpPlugin.wishlist_items.children().length == 0) {
            phpPlugin.wishlist.hide();
          }
          phpPlugin.newPhone
            .find(
              ".add_to_cart_frm input[value='" +
                elt.parent().children(":first").val() +
                "']"
            )
            .parent()
            .find("button[type=submit]")
            .removeClass("btn-success")
            .addClass("btn-warning")
            .html("Add to Cart");
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
