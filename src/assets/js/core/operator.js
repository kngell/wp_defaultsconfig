export default class Operator {
  constructor(op = "user_cart") {
    this.operation = op;
  }
  //=======================================================================
  //Operator
  //=======================================================================
  _op = (op) => {
    this.operation = op;
  };
  //=======================================================================
  //Currency
  //=======================================================================
  _currency = () =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    });
  //=======================================================================
  //Eval
  //=======================================================================
  _eval = (param1, param2, qty = 0, old_price = 0, actual_price = 0) => {
    switch (this.operation) {
      case "+":
        return param1 + param2;
      case "-":
        return Math.abs(param1 - param2);
      case "*":
        return param1 * param2;
      case "/":
        return param1 / param2;
      case "<":
        return param1 < param2;
      case ">":
        return param1 > param2;
      case "user_cart":
        return actual_price - old_price + param1 * qty;
    }
  };
  //=======================================================================
  //Wait setimmeout
  //=======================================================================
  _wait = (callback, delay) => {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(callback, delay);
    };
  };
  //=======================================================================
  //Format money
  //=======================================================================
  _format_money = (data = {}) => {
    const wrapper = data.wrapper;
    const fields = data.fields;
    const plugin = this;
    $.each(fields, function (key, value) {
      wrapper.find(value).html(function (i, amount) {
        return plugin
          ._currency()
          .format(parseFloat(amount.match(/[0-9]+/g)[0]));
      });
    });
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
