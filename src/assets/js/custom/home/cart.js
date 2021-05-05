const responsive = {
  0: {
    items: 1,
  },
  600: {
    items: 3,
  },
  1000: {
    items: 5,
  },
};
import { displayAllDetails, Call_controller } from "corejs/form_crud";
class Cart {
  constructor(element) {
    this.element = element;
  }
  _init = () => {
    this._setupVariables();
    this._setupEvents();
  };
  _setupVariables = () => {
    this.wrapper = this.element.find("#main-site");
    this.header = this.element.find("#header");
    this.cart = this.element.find("#cart");
    this.banner = this.element.find("#banner-area");
    this.newPhone = this.element.find("#new-phones");
    this.cart_items = this.element.find("#cart_items");
    this.wishlist = this.element.find("#wishlist");
    this.wishlist_items = this.element.find("#wishlist-items");
    this.subTotal = this.element.find("#sub_total");
  };
  _setupEvents = () => {
    var phpPlugin = this;

    //=======================================================================
    //Currency format
    //=======================================================================
    let currency = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    });
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
        console.log(response);
        if (response.result == "success") {
          phpPlugin.header.find(".cart_nb_elt").html(function () {
            return response.msg[0];
          });
          if (phpPlugin.cart_items.length) {
            phpPlugin.header.find(".cart_nb_elt").html(function () {
              return response.msg[0];
            });
            phpPlugin.cart_items.fadeOut(100, function () {
              console.log(response.msg[1]);
              return phpPlugin.cart_items
                .html(response.msg[1])
                .fadeIn()
                .delay(500);
            });
            phpPlugin.subTotal.fadeOut(100, function () {
              return phpPlugin.subTotal
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
              phpPlugin.subTotal
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

    //=======================================================================
    //Owl carousel
    //=======================================================================
    //new phones
    phpPlugin.newPhone.find(".owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      responsive: responsive,
    });

    //=======================================================================
    //Qty section
    //=======================================================================
    phpPlugin.cart_items.on("click", ".qty-up", function (e) {
      let input = $(this).next();
      //change price using ajax
      var data = {
        table: "product",
        id: $(this)
          .parents(".qty")
          .find("form")
          .find("input[name=item_id]")
          .val(),
        user: "guest",
        url: "forms/showDetails",
        data_type: "values",
        return_mode: "details",
        params: $(this),
      };
      displayAllDetails(data, display_product);
      function display_product(response, elt) {
        if (input.val() >= 1 && input.val() <= 9) {
          input.val(function (i, oldval) {
            return ++oldval;
          });
          if (response.result == "success") {
            // 1- Increase price of the product
            let qty = parseInt(elt.next().val());
            elt
              .parents(".qty")
              .parent()
              .next()
              .find(".product_price")
              .html(function () {
                return currency.format(
                  parseFloat(response.msg.item_price * qty)
                );
              });
            // 2- Set subtotal price
            phpPlugin.subTotal
              .find("#deal-price")
              .html(function (i, deal_price) {
                let reg = /\s/g; // /[^\d]+/g;
                return currency.format(
                  parseFloat(response.msg.item_price) +
                    parseFloat(
                      deal_price
                        .replace(reg, function () {
                          return "";
                        })
                        .replace("&nbsp;€", "")
                    )
                );
              });
          }
        }
      } //closing Ajax call
    });

    phpPlugin.cart_items.on("click", ".qty-down", function (e) {
      e.preventDefault();
      let input = $(this).prev();
      //change price using ajax
      var data = {
        table: "product",
        id: $(this)
          .parents(".qty")
          .find("form")
          .find("input[name=item_id]")
          .val(),
        user: "guest",
        url: "forms/showDetails",
        data_type: "values",
        return_mode: "details",
        params: $(this),
      };
      displayAllDetails(data, display_product);
      function display_product(response, elt) {
        if (input.val() > 1 && input.val() <= 10) {
          input.val(function (i, oldval) {
            return --oldval;
          });
          if (response.result == "success") {
            // 1- Increase price of the product
            let qty = parseInt(elt.prev().val());
            elt
              .parents(".qty")
              .parent()
              .next()
              .find(".product_price")
              .html(function () {
                return currency.format(
                  parseFloat(response.msg.item_price * qty)
                );
              });
            // 2- Set subtotal price
            phpPlugin.subTotal
              .find("#deal-price")
              .html(function (i, deal_price) {
                let reg = /\s/g; // /[^\d]+/g;
                return currency.format(
                  parseFloat(
                    deal_price
                      .replace(reg, function () {
                        return "";
                      })
                      .replace("&nbsp;€", "")
                  ) - parseFloat(response.msg.item_price)
                );
              });
          }
        }
      } //closing
    });
    //=======================================================================
    //Delete cart
    //=======================================================================
    phpPlugin.wrapper.on("click", "#cart_items .deleteBtn", function (e) {
      e.preventDefault();
      $(this).html("Please wait...");
      var data = {
        url: "guests/delete",
        id: $(this).attr("id"),
        table: "cart",
        method: "delete_cart",
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
          phpPlugin.cart.find(".cart_nb_elt").html(function (i, nb_items) {
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
            phpPlugin.cart_items.html(response.msg != 1 ? response.msg : "");
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
            phpPlugin.cart.find(".product_price").html(function (i, p_price) {
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
            phpPlugin.cart.find(".cart_nb_elt").html(function (i, nb_item) {
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
              phpPlugin.cart_items.html(
                response.msg[1] != 1 ? response.msg[1] : ""
              );
            }
          }
        }
      }
    );
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
        method: "delete_cart",
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
  };
}
document.addEventListener("DOMContentLoaded", function () {
  new Cart($("#body"))._init();
});
