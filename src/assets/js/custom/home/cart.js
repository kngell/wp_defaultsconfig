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
            display._parseLocaleNumber(
              elt.parents(".row").first().last().find(".product_price").html(),
              "de"
            )
          );
          if (d_price.startsWith("EUR")) {
            d_price = parseFloat(d_price.match(/[0-9]+/g)[0]);
          } else {
            d_price = parseFloat(display._parseLocaleNumber(d_price, "de"));
          }
          console.log(d_price, " ", p_price);
          return display._currency().format(d_price - p_price);
        });
    }
    //=======================================================================
    //Qty section
    //=======================================================================
    phpPlugin.wrapper.find("#cart_items").on("click", ".qty-up", function (e) {
      let input = $(this).next();
      let item_id = $(this)
        .parents(".qty")
        .find("form")
        .find("input[name=item_id]")
        .val();
      //change price using ajax
      var data = {
        table: "products",
        id: item_id,
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
            Call({
              url: "guests/call",
              params: {
                qty_up: "ok",
                item_id: item_id,
                qty: parseInt(oldval) + 1,
                method: "update_cart",
                table: "cart",
              },
            });
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
                return display
                  ._currency()
                  .format(parseFloat(response.msg.p_regular_price * qty));
              });
            // 2- Set subtotal price
            phpPlugin.wrapper
              .find("#deal-price")
              .html(function (i, deal_price) {
                return display
                  ._currency()
                  .format(
                    parseFloat(response.msg.p_regular_price) +
                      display._parseLocaleNumber(deal_price, "de")
                  );
              });
          }
        }
      } //closing Ajax call
    });
    // Qty down
    phpPlugin.wrapper
      .find("#cart_items")
      .on("click", ".qty-down", function (e) {
        e.preventDefault();
        let input = $(this).prev();
        let item_id = $(this)
          .parents(".qty")
          .find("form")
          .find("input[name=item_id]")
          .val();
        //change price using ajax
        var data = {
          table: "products",
          id: item_id,
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
              Call({
                url: "guests/call",
                params: {
                  qty_up: "ok",
                  item_id: item_id,
                  qty: parseInt(oldval) - 1,
                  method: "update_cart",
                  table: "cart",
                },
              });
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
                  return display
                    ._currency()
                    .format(parseFloat(response.msg.p_regular_price * qty));
                });
              // 2- Set subtotal price
              phpPlugin.wrapper
                .find("#deal-price")
                .html(function (i, deal_price) {
                  return display
                    ._currency()
                    .format(
                      display._parseLocaleNumber(deal_price, "de") -
                        parseFloat(response.msg.p_regular_price)
                    );
                });
            }
          }
        } //closing
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
      "#cart_items .qty button[type=button], #wishlist-items .qty button[type=button]",
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
        $(this).html("Please wait....");
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
            console.log(btn_bg);
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
