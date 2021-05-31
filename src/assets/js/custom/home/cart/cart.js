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
import { Call_controller, displayAllDetails, Call } from "corejs/form_crud";
import user_cart from "corejs/user_cart";
import OP from "corejs/operator";
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
  };
  _setupEvents = () => {
    var phpPlugin = this;

    //=======================================================================
    //Display user cart items
    //=======================================================================
    let display = new user_cart(phpPlugin.wrapper, phpPlugin.header);
    display._display_cart();
    const operation = new OP();
    //=======================================================================
    //Owl carousel
    //=======================================================================
    //new phones
    phpPlugin.wrapper.find("#new-phones").find(".owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      responsive: responsive,
    });
    //=======================================================================
    //Refresh deal price
    //=======================================================================
    function refresh_deal_price(elt) {
      elt
        .parents("#cart_items")
        .next()
        .find("#deal-price")
        .html(function (i, d_price) {
          let p_price = parseFloat(
            operation._parseLocaleNumber(
              elt.parents(".row").first().last().find(".product_price").html(),
              "de"
            )
          );
          if (d_price.startsWith("EUR")) {
            d_price = parseFloat(d_price.match(/[0-9]+/g)[0]);
          } else {
            d_price = parseFloat(operation._parseLocaleNumber(d_price, "de"));
          }
          return operation._currency().format(d_price - p_price);
        });
    }
    //=======================================================================
    //Qty section
    //=======================================================================

    function get_product(item_id, params, qty) {
      let review_price = true;
      if (review_price) {
        var data = {
          table: "cart",
          id: item_id,
          user: "guest",
          url: "forms/showDetails",
          data_type: "values",
          model_method: "update_UserCartPrice",
          params: params,
          qty: qty,
        };
        displayAllDetails(data, display_product);
        function display_product(response, elt) {
          if (response.result == "success") {
            elt
              .parents(".cart-qty")
              .parent()
              .next()
              .find(".product_price")
              .html(function () {
                return operation
                  ._currency()
                  .format(parseFloat(response.msg[0].p_regular_price * qty));
              });
            // 2- update subtotal price
            phpPlugin.wrapper
              .find("#deal-price")
              .html(function (i, deal_price) {
                return operation
                  ._currency()
                  .format(
                    operation._parseLocaleNumber(deal_price, "de") -
                      (parseInt(response.msg[2]) - qty) *
                        parseFloat(response.msg[0].p_regular_price)
                  );
              });
            // update Taxes
            $.each(response.msg[1], function (key, val) {
              $("." + key + " .value").html(function (i, tax) {
                const old_tax = parseInt(val[0]);
                //update TTC
                phpPlugin.wrapper
                  .find("#total-price")
                  .html(function (i, t_price) {
                    const old_price = operation._parseLocaleNumber(
                      t_price,
                      "de"
                    );
                    const old_tax = operation._parseLocaleNumber(tax, "de");
                    return operation
                      ._currency()
                      .format(
                        old_price -
                          old_tax +
                          val[0] -
                          (parseInt(response.msg[2]) - qty) *
                            parseFloat(response.msg[0].p_regular_price)
                      );
                  });

                return operation._currency().format(val[0]);
              });
            });
          }
        }
      }
    }
    // Qty up
    phpPlugin.wrapper.find("#cart_items").on("click", ".qty-up", function (e) {
      const input = $(this).next();
      const item_id = $(this)
        .parents(".cart-qty")
        .find("form")
        .find("input[name=item_id]")
        .val();
      input.val(function (i, oldval) {
        return !isNaN(oldval) ? ++oldval : oldval;
      });
      operation._wait(get_product(item_id, $(this), input.val()), 2000);
    });
    // Qty down
    phpPlugin.wrapper
      .find("#cart_items")
      .on("click", ".qty-down", function (e) {
        e.preventDefault();
        const input = $(this).prev();
        const item_id = $(this)
          .parents(".cart-qty")
          .find("form")
          .find("input[name=item_id]")
          .val();
        input.val(function (i, oldval) {
          return !isNaN(oldval) ? --oldval : oldval;
        });
        operation._wait(get_product(item_id, $(this), input.val()), 2000);
      });
    // Qty dManual add

    phpPlugin.wrapper
      .find("#cart_items")
      .on("input", ".qty_input", function (e) {
        e.preventDefault();
        const item_id = $(this)
          .parents(".cart-qty")
          .find("form")
          .find("input[name=item_id]")
          .val();
        const input = $(this);
        operation._wait(get_product(item_id, $(this), input.val()), 2000);
      });
    //=======================================================================
    //Delete cart or wisjlist
    //=======================================================================
    phpPlugin.wrapper.on(
      "click",
      "#cart_items .deleteBtn, #wishlist-items .deleteBtn",
      function (e) {
        e.preventDefault();
        $(this).html("Please wait...");
        let wishlist = false;
        let remove_btn = "btn-success";
        if ($(this).parents("#wishlist").length != 0) {
          wishlist = true;
          remove_btn = "btn-info";
        }
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
            if (
              phpPlugin.wrapper.find("#wishlist-items").children().length == 0
            ) {
              phpPlugin.wrapper.find("#wishlist").hide();
            }
            if (!wishlist) {
              phpPlugin.header.find(".cart_nb_elt").html(function () {
                return (
                  parseInt(phpPlugin.header.find(".cart_nb_elt").html()) - 1
                );
              });
              phpPlugin.wrapper
                .find(".cart_nb_elt")
                .html(function (i, nb_items) {
                  return nb_items - 1;
                });
            }
            phpPlugin.wrapper
              .find("#new-phones")
              .find(
                ".add_to_cart_frm input[value='" +
                  elt.parent().children(":first").val() +
                  "']"
              )
              .parent()
              .find("button[type=submit]")
              .removeClass(remove_btn)
              .addClass("btn-warning")
              .html("Add to Cart");
            if (phpPlugin.wrapper.find("#cart_items").children().length == 0) {
              phpPlugin.wrapper
                .find("#cart_items")
                .html(response.msg != 1 ? response.msg : "");
            }
          }
        }
      }
    );

    //=======================================================================
    //Save for later / Or Add to cart from wishlist
    //=======================================================================
    phpPlugin.wrapper.on(
      "click",
      "#cart_items .cart-qty button[type=button], #wishlist-items .cart-qty button[type=button]",
      function (e) {
        e.preventDefault();
        let method = "";
        let msg = "";
        let btn_bg = "";
        if ($(this).parents("#cart").length) {
          method = "save_For_Later";
          msg = "In whislist";
          btn_bg = "btn-info";
        } else {
          if ($(this).parents("#wishlist").length) {
            method = "add_To_Cart";
            msg = "In the cart";
            btn_bg = "btn-success";
          }
        }
        $(this).html("Wait...");
        var data = {
          url: "guests/toggleWishlistAndcCart",
          frm: $(this).prev(),
          frm_name:
            "delete-cart-item-frm" +
            $(this).prev().find("input[type=hidden]").val(),
          table: "cart",
          params: $(this),
          method: method,
        };
        Call_controller(data, manageResponse);
        function manageResponse(response, elt) {
          if (response.result == "success") {
            display._display_cart();
            if (method == "add_To_Cart") {
              elt.parents(".row").first().remove();
              if (
                phpPlugin.wrapper.find("#wishlist-items").children().length == 0
              ) {
                phpPlugin.wrapper.find("#wishlist").hide();
              }
            }
            phpPlugin.wrapper
              .find("#new-phones")
              .find(
                ".add_to_cart_frm input[value='" +
                  elt.prev().children(":first").val() +
                  "']"
              )
              .parent()
              .find("button[type=submit]")
              .removeClass("btn-info")
              .addClass(btn_bg)
              .html(msg);
          }
        }
      }
    );
  };
}
document.addEventListener("DOMContentLoaded", function () {
  new Cart($("#body"))._init();
});
