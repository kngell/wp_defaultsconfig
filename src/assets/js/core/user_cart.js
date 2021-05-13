import { displayAllDetails } from "corejs/form_crud";

export default class User_cart {
  constructor(wrapper, header) {
    this.wrapper = wrapper;
    this.header = header;
  }
  //=======================================================================
  //Currency
  //=======================================================================
  _currency = () =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    });

  //=======================================================================
  //Display user cart items
  //=======================================================================
  _display_cart = () => {
    let plugin = this;
    var data = {
      table: "cart",
      user: "guest",
      url: "forms/showDetails",
      data_type: "template",
    };
    displayAllDetails(data, display_cart);
    function display_cart(response) {
      if (response.result == "success") {
        plugin.wrapper.find(".cart_nb_elt").html(function () {
          return response.msg[0];
        });
        if (response.msg[1]) {
          plugin.wrapper.find("#cart_items").fadeOut(100, function () {
            return plugin.wrapper
              .find("#cart_items")
              .html(response.msg[1])
              .fadeIn()
              .delay(500);
          });
        }
        if (plugin.wrapper.find("#cart_items").length) {
          plugin.header.find(".cart_nb_elt").html(function () {
            return response.msg[0];
          });

          plugin.wrapper.find("#sub_total").fadeOut(100, function () {
            return plugin.wrapper
              .find("#sub_total")
              .html(response.msg[2])
              .fadeIn()
              .delay(500); // display Cart items
          });
        }
        if (response.msg[3]) {
          plugin.wrapper.find("#wishlist-items").html(function () {
            return response.msg[3]; // display wishlist
          });
          plugin.wrapper.find("#wishlist").show().fadeIn().delay(500);
        }
        setTimeout(function () {
          plugin.wrapper.find("#deal-price").html(function (i, d_price) {
            return plugin
              ._currency()
              .format(parseFloat(d_price.match(/[0-9]+/g)[0]));
          });
          plugin.wrapper.find(".product_price").html(function (i, p_price) {
            return plugin
              ._currency()
              .format(parseFloat(p_price.match(/[0-9]+/g)[0]));
          });
        }, 200);
      }
    }
  };
  //=======================================================================
  //Parse number
  //=======================================================================
  /**
   * Parse a localized number to a float.
   * @param {string} stringNumber - the localized number
   * @param {string} locale - [optional] the locale that the number is represented in. Omit this parameter to use the current locale.
   */
  _parseLocaleNumber = (stringNumber, locale) => {
    var thousandSeparator = Intl.NumberFormat(locale)
      .format(11111)
      .replace(/\p{Number}/gu, "");
    var decimalSeparator = Intl.NumberFormat(locale)
      .format(1.1)
      .replace(/\p{Number}/gu, "");

    return parseFloat(
      stringNumber
        .replace(new RegExp("\\" + thousandSeparator, "g"), "")
        .replace(new RegExp("\\" + decimalSeparator), ".")
    );
  };
}
