(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["kngell"] = factory();
	else
		root["kngell"] = factory();
})(self, function() {
return (self["webpackChunkkngell"] = self["webpackChunkkngell"] || []).push([["js/custom/home/cart"],{

/***/ "./src/assets/js/custom/home/cart.js":
/*!*******************************************!*\
  !*** ./src/assets/js/custom/home/cart.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var corejs_form_crud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! corejs/form_crud */ "./src/assets/js/core/form_crud.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var responsive = {
  0: {
    items: 1
  },
  600: {
    items: 3
  },
  1000: {
    items: 5
  }
};


var Cart = function Cart(element) {
  var _this = this;

  _classCallCheck(this, Cart);

  _defineProperty(this, "_init", function () {
    _this._setupVariables();

    _this._setupEvents();
  });

  _defineProperty(this, "_setupVariables", function () {
    _this.wrapper = _this.element.find("#main-site");
    _this.header = _this.element.find("#header");
    _this.cart = _this.element.find("#cart");
    _this.banner = _this.element.find("#banner-area");
    _this.newPhone = _this.element.find("#new-phones");
    _this.cart_items = _this.element.find("#cart_items");
    _this.wishlist = _this.element.find("#wishlist");
    _this.wishlist_items = _this.element.find("#wishlist-items");
    _this.subTotal = _this.element.find("#sub_total");
  });

  _defineProperty(this, "_setupEvents", function () {
    var phpPlugin = _this; //=======================================================================
    //Currency format
    //=======================================================================

    var currency = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR"
    }); //=======================================================================
    //Display user cart items
    //=======================================================================

    display__user_cart();

    function display__user_cart() {
      var data = {
        table: "cart",
        user: "guest",
        url: "forms/showDetails",
        data_type: "template"
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_7__.displayAllDetails)(data, display_cart);

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
              return phpPlugin.cart_items.html(response.msg[1]).fadeIn().delay(500);
            });
            phpPlugin.subTotal.fadeOut(100, function () {
              return phpPlugin.subTotal.html(response.msg[2]).fadeIn().delay(500); // display Cart items
            });

            if (response.msg[3]) {
              phpPlugin.wishlist_items.html(function () {
                return response.msg[3]; // display wishlist
              });
              phpPlugin.wishlist.show().fadeIn().delay(500);
            }

            setTimeout(function () {
              phpPlugin.subTotal.find("#deal-price").html(function (i, d_price) {
                return currency.format(parseFloat(d_price));
              });
              phpPlugin.wrapper.find(".product_price").html(function (i, p_price) {
                return currency.format(parseFloat(p_price));
              });
            }, 200);
          }
        }
      }
    } //=======================================================================
    //Owl carousel
    //=======================================================================
    //new phones


    phpPlugin.newPhone.find(".owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      responsive: responsive
    }); //=======================================================================
    //Qty section
    //=======================================================================

    phpPlugin.cart_items.on("click", ".qty-up", function (e) {
      var input = $(this).next(); //change price using ajax

      var data = {
        table: "product",
        id: $(this).parents(".qty").find("form").find("input[name=item_id]").val(),
        user: "guest",
        url: "forms/showDetails",
        data_type: "values",
        return_mode: "details",
        params: $(this)
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_7__.displayAllDetails)(data, display_product);

      function display_product(response, elt) {
        if (input.val() >= 1 && input.val() <= 9) {
          input.val(function (i, oldval) {
            return ++oldval;
          });

          if (response.result == "success") {
            // 1- Increase price of the product
            var qty = parseInt(elt.next().val());
            elt.parents(".qty").parent().next().find(".product_price").html(function () {
              return currency.format(parseFloat(response.msg.item_price * qty));
            }); // 2- Set subtotal price

            phpPlugin.subTotal.find("#deal-price").html(function (i, deal_price) {
              var reg = /\s/g; // /[^\d]+/g;

              return currency.format(parseFloat(response.msg.item_price) + parseFloat(deal_price.replace(reg, function () {
                return "";
              }).replace("&nbsp;€", "")));
            });
          }
        }
      } //closing Ajax call

    });
    phpPlugin.cart_items.on("click", ".qty-down", function (e) {
      e.preventDefault();
      var input = $(this).prev(); //change price using ajax

      var data = {
        table: "product",
        id: $(this).parents(".qty").find("form").find("input[name=item_id]").val(),
        user: "guest",
        url: "forms/showDetails",
        data_type: "values",
        return_mode: "details",
        params: $(this)
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_7__.displayAllDetails)(data, display_product);

      function display_product(response, elt) {
        if (input.val() > 1 && input.val() <= 10) {
          input.val(function (i, oldval) {
            return --oldval;
          });

          if (response.result == "success") {
            // 1- Increase price of the product
            var qty = parseInt(elt.prev().val());
            elt.parents(".qty").parent().next().find(".product_price").html(function () {
              return currency.format(parseFloat(response.msg.item_price * qty));
            }); // 2- Set subtotal price

            phpPlugin.subTotal.find("#deal-price").html(function (i, deal_price) {
              var reg = /\s/g; // /[^\d]+/g;

              return currency.format(parseFloat(deal_price.replace(reg, function () {
                return "";
              }).replace("&nbsp;€", "")) - parseFloat(response.msg.item_price));
            });
          }
        }
      } //closing

    }); //=======================================================================
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
        params: $(this)
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_7__.Call_controller)(data, manageResponse);

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
          phpPlugin.newPhone.find(".add_to_cart_frm input[value='" + elt.parent().children(":first").val() + "']").parent().find("button[type=submit]").removeClass("btn-success").addClass("btn-warning").html("Add to Cart");

          if (phpPlugin.cart_items.children().length == 0) {
            phpPlugin.cart_items.html(response.msg != 1 ? response.msg : "");
          }
        }
      }
    }); //=======================================================================
    //Save for later
    //=======================================================================

    phpPlugin.wrapper.on("click", "#cart_items .qty button[type=button]", function (e) {
      var data = {
        url: "guests/toggleWishlistAndcCart",
        frm: $(this).prev(),
        frm_name: "delete-cart-item-frm" + $(this).prev().find("input[type=hidden]").val(),
        table: "wishlist",
        params: $(this),
        method: "save_For_Later"
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_7__.Call_controller)(data, manageResponse);

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
          phpPlugin.newPhone.find(".add_to_cart_frm input[value='" + elt.prev().children(":first").val() + "']").parent().find("button[type=submit]").removeClass("btn-success").addClass("btn-warning").html("Add to Cart");

          if (phpPlugin.cart_items.children().length == 0) {
            phpPlugin.cart_items.html(response.msg[1] != 1 ? response.msg[1] : "");
          }
        }
      }
    });

    function refresh_deal_price(elt) {
      elt.parents("#cart_items").next().find("#deal-price").html(function (i, d_price) {
        var reg = /\s/g;
        var p_price = elt.parents(".row").first().last().find(".product_price").html();
        return currency.format(parseFloat(d_price.replace(reg, function () {
          return "";
        }).replace("&nbsp;€", "")) - parseFloat(p_price.replace(reg, function () {
          return "";
        }).replace("&nbsp;€", "")));
      });
    } //=======================================================================
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
        params: $(this)
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_7__.Call_controller)(data, manageResponse);

      function manageResponse(response, elt) {
        if (response.result == "success") {
          elt.parents(".row").first().remove();

          if (phpPlugin.wishlist_items.children().length == 0) {
            phpPlugin.wishlist.hide();
          }

          phpPlugin.newPhone.find(".add_to_cart_frm input[value='" + elt.parent().children(":first").val() + "']").parent().find("button[type=submit]").removeClass("btn-success").addClass("btn-warning").html("Add to Cart");
        }
      }
    }); //=======================================================================
    //Add to cart from whishlist
    //=======================================================================

    phpPlugin.wrapper.on("click", "#wishlist-items .qty button[type=button]", function (e) {
      var data = {
        url: "guests/toggleWishlistAndcCart",
        frm: $(this).prev(),
        frm_name: "delete-cart-item-frm" + $(this).prev().find("input[type=hidden]").val(),
        table: "cart",
        params: $(this),
        method: "add_To_Cart"
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_7__.Call_controller)(data, manageResponse);

      function manageResponse(response, elt) {
        if (response.result == "success") {
          //check if cart is empty
          if (phpPlugin.cart_items.find("#empty-cart").length != 0) {
            phpPlugin.cart_items.find("#empty-cart").remove();
          } //append cart


          phpPlugin.cart_items.append(function () {
            return response.msg[0];
          }); // format product price

          phpPlugin.wrapper.find(".product_price").html(function (i, p_price) {
            return currency.format(parseFloat(p_price));
          }); //refresh deal price

          phpPlugin.wrapper.find("#deal-price").html(function (i, d_price) {
            var reg = /\s/g;
            return currency.format(parseFloat(d_price.replace(reg, function () {
              return "";
            }).replace("&nbsp;€", "")) + parseFloat(response.msg[1]));
          }); //refresh nb items in the cart

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

          phpPlugin.newPhone.find(".add_to_cart_frm input[value='" + elt.prev().children(":first").val() + "']").parent().find("button[type=submit]").removeClass("btn-warning").addClass("btn-success").html("Add to Cart");
        }
      }
    });
  });

  this.element = element;
};

document.addEventListener("DOMContentLoaded", function () {
  new Cart($("#body"))._init();
});

/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === RegExp.prototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-substitution.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var shared = __webpack_require__(/*! ./shared */ "./node_modules/core-js/internals/shared.js");

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
// eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "./node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "./node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["commons/frontend/commonVendor","commons/frontend/commonCustomModules"], function() { return __webpack_exec__("./src/assets/js/custom/home/cart.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2hvbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1zdWJzdGl0dXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZXhlYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtc3RpY2t5LWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZXhlYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5yZXBsYWNlLmpzIl0sIm5hbWVzIjpbInJlc3BvbnNpdmUiLCJpdGVtcyIsIkNhcnQiLCJlbGVtZW50IiwiX3NldHVwVmFyaWFibGVzIiwiX3NldHVwRXZlbnRzIiwid3JhcHBlciIsImZpbmQiLCJoZWFkZXIiLCJjYXJ0IiwiYmFubmVyIiwibmV3UGhvbmUiLCJjYXJ0X2l0ZW1zIiwid2lzaGxpc3QiLCJ3aXNobGlzdF9pdGVtcyIsInN1YlRvdGFsIiwicGhwUGx1Z2luIiwiY3VycmVuY3kiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJkaXNwbGF5X191c2VyX2NhcnQiLCJkYXRhIiwidGFibGUiLCJ1c2VyIiwidXJsIiwiZGF0YV90eXBlIiwiZGlzcGxheUFsbERldGFpbHMiLCJkaXNwbGF5X2NhcnQiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJodG1sIiwibXNnIiwibGVuZ3RoIiwiZmFkZU91dCIsImZhZGVJbiIsImRlbGF5Iiwic2hvdyIsInNldFRpbWVvdXQiLCJpIiwiZF9wcmljZSIsImZvcm1hdCIsInBhcnNlRmxvYXQiLCJwX3ByaWNlIiwib3dsQ2Fyb3VzZWwiLCJsb29wIiwibmF2IiwiZG90cyIsIm9uIiwiZSIsImlucHV0IiwiJCIsIm5leHQiLCJpZCIsInBhcmVudHMiLCJ2YWwiLCJyZXR1cm5fbW9kZSIsInBhcmFtcyIsImRpc3BsYXlfcHJvZHVjdCIsImVsdCIsIm9sZHZhbCIsInF0eSIsInBhcnNlSW50IiwicGFyZW50IiwiaXRlbV9wcmljZSIsImRlYWxfcHJpY2UiLCJyZWciLCJyZXBsYWNlIiwicHJldmVudERlZmF1bHQiLCJwcmV2IiwiYXR0ciIsIm1ldGhvZCIsImZybSIsIkNhbGxfY29udHJvbGxlciIsIm1hbmFnZVJlc3BvbnNlIiwicmVmcmVzaF9kZWFsX3ByaWNlIiwiZmlyc3QiLCJyZW1vdmUiLCJjb3VudF9pdGVtcyIsIm5iX2l0ZW1zIiwiY2hpbGRyZW4iLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZnJtX25hbWUiLCJhcHBlbmQiLCJpcyIsIm5iX2l0ZW0iLCJsYXN0IiwiaGlkZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9pbml0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QzdGLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLHlCQUF5QixtQkFBTyxDQUFDLG1HQUFtQztBQUNwRSxzQkFBc0IsbUJBQU8sQ0FBQywyRkFBK0I7QUFDN0QsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DOztBQUU1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImpzL2N1c3RvbS9ob21lL2NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICAwOiB7XHJcbiAgICBpdGVtczogMSxcclxuICB9LFxyXG4gIDYwMDoge1xyXG4gICAgaXRlbXM6IDMsXHJcbiAgfSxcclxuICAxMDAwOiB7XHJcbiAgICBpdGVtczogNSxcclxuICB9LFxyXG59O1xyXG5pbXBvcnQgeyBkaXNwbGF5QWxsRGV0YWlscywgQ2FsbF9jb250cm9sbGVyIH0gZnJvbSBcImNvcmVqcy9mb3JtX2NydWRcIjtcclxuY2xhc3MgQ2FydCB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcbiAgX2luaXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9zZXR1cFZhcmlhYmxlcygpO1xyXG4gICAgdGhpcy5fc2V0dXBFdmVudHMoKTtcclxuICB9O1xyXG4gIF9zZXR1cFZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgIHRoaXMud3JhcHBlciA9IHRoaXMuZWxlbWVudC5maW5kKFwiI21haW4tc2l0ZVwiKTtcclxuICAgIHRoaXMuaGVhZGVyID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjaGVhZGVyXCIpO1xyXG4gICAgdGhpcy5jYXJ0ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjY2FydFwiKTtcclxuICAgIHRoaXMuYmFubmVyID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjYmFubmVyLWFyZWFcIik7XHJcbiAgICB0aGlzLm5ld1Bob25lID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjbmV3LXBob25lc1wiKTtcclxuICAgIHRoaXMuY2FydF9pdGVtcyA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2NhcnRfaXRlbXNcIik7XHJcbiAgICB0aGlzLndpc2hsaXN0ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjd2lzaGxpc3RcIik7XHJcbiAgICB0aGlzLndpc2hsaXN0X2l0ZW1zID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjd2lzaGxpc3QtaXRlbXNcIik7XHJcbiAgICB0aGlzLnN1YlRvdGFsID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjc3ViX3RvdGFsXCIpO1xyXG4gIH07XHJcbiAgX3NldHVwRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgdmFyIHBocFBsdWdpbiA9IHRoaXM7XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9DdXJyZW5jeSBmb3JtYXRcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGxldCBjdXJyZW5jeSA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChcImZyLUZSXCIsIHtcclxuICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgICAgY3VycmVuY3k6IFwiRVVSXCIsXHJcbiAgICB9KTtcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vRGlzcGxheSB1c2VyIGNhcnQgaXRlbXNcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGRpc3BsYXlfX3VzZXJfY2FydCgpO1xyXG4gICAgZnVuY3Rpb24gZGlzcGxheV9fdXNlcl9jYXJ0KCkge1xyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB0YWJsZTogXCJjYXJ0XCIsXHJcbiAgICAgICAgdXNlcjogXCJndWVzdFwiLFxyXG4gICAgICAgIHVybDogXCJmb3Jtcy9zaG93RGV0YWlsc1wiLFxyXG4gICAgICAgIGRhdGFfdHlwZTogXCJ0ZW1wbGF0ZVwiLFxyXG4gICAgICB9O1xyXG4gICAgICBkaXNwbGF5QWxsRGV0YWlscyhkYXRhLCBkaXNwbGF5X2NhcnQpO1xyXG4gICAgICBmdW5jdGlvbiBkaXNwbGF5X2NhcnQocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgcGhwUGx1Z2luLmhlYWRlci5maW5kKFwiLmNhcnRfbmJfZWx0XCIpLmh0bWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UubXNnWzBdO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAocGhwUGx1Z2luLmNhcnRfaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5oZWFkZXIuZmluZChcIi5jYXJ0X25iX2VsdFwiKS5odG1sKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UubXNnWzBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcGhwUGx1Z2luLmNhcnRfaXRlbXMuZmFkZU91dCgxMDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5tc2dbMV0pO1xyXG4gICAgICAgICAgICAgIHJldHVybiBwaHBQbHVnaW4uY2FydF9pdGVtc1xyXG4gICAgICAgICAgICAgICAgLmh0bWwocmVzcG9uc2UubXNnWzFdKVxyXG4gICAgICAgICAgICAgICAgLmZhZGVJbigpXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoNTAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5zdWJUb3RhbC5mYWRlT3V0KDEwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBwaHBQbHVnaW4uc3ViVG90YWxcclxuICAgICAgICAgICAgICAgIC5odG1sKHJlc3BvbnNlLm1zZ1syXSlcclxuICAgICAgICAgICAgICAgIC5mYWRlSW4oKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDUwMCk7IC8vIGRpc3BsYXkgQ2FydCBpdGVtc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm1zZ1szXSkge1xyXG4gICAgICAgICAgICAgIHBocFBsdWdpbi53aXNobGlzdF9pdGVtcy5odG1sKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5tc2dbM107IC8vIGRpc3BsYXkgd2lzaGxpc3RcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBwaHBQbHVnaW4ud2lzaGxpc3Quc2hvdygpLmZhZGVJbigpLmRlbGF5KDUwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgcGhwUGx1Z2luLnN1YlRvdGFsXHJcbiAgICAgICAgICAgICAgICAuZmluZChcIiNkZWFsLXByaWNlXCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChmdW5jdGlvbiAoaSwgZF9wcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuZm9ybWF0KHBhcnNlRmxvYXQoZF9wcmljZSkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgcGhwUGx1Z2luLndyYXBwZXJcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiLnByb2R1Y3RfcHJpY2VcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKGZ1bmN0aW9uIChpLCBwX3ByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQocGFyc2VGbG9hdChwX3ByaWNlKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL093bCBjYXJvdXNlbFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9uZXcgcGhvbmVzXHJcbiAgICBwaHBQbHVnaW4ubmV3UGhvbmUuZmluZChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICByZXNwb25zaXZlOiByZXNwb25zaXZlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9RdHkgc2VjdGlvblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLmNhcnRfaXRlbXMub24oXCJjbGlja1wiLCBcIi5xdHktdXBcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgbGV0IGlucHV0ID0gJCh0aGlzKS5uZXh0KCk7XHJcbiAgICAgIC8vY2hhbmdlIHByaWNlIHVzaW5nIGFqYXhcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgdGFibGU6IFwicHJvZHVjdFwiLFxyXG4gICAgICAgIGlkOiAkKHRoaXMpXHJcbiAgICAgICAgICAucGFyZW50cyhcIi5xdHlcIilcclxuICAgICAgICAgIC5maW5kKFwiZm9ybVwiKVxyXG4gICAgICAgICAgLmZpbmQoXCJpbnB1dFtuYW1lPWl0ZW1faWRdXCIpXHJcbiAgICAgICAgICAudmFsKCksXHJcbiAgICAgICAgdXNlcjogXCJndWVzdFwiLFxyXG4gICAgICAgIHVybDogXCJmb3Jtcy9zaG93RGV0YWlsc1wiLFxyXG4gICAgICAgIGRhdGFfdHlwZTogXCJ2YWx1ZXNcIixcclxuICAgICAgICByZXR1cm5fbW9kZTogXCJkZXRhaWxzXCIsXHJcbiAgICAgICAgcGFyYW1zOiAkKHRoaXMpLFxyXG4gICAgICB9O1xyXG4gICAgICBkaXNwbGF5QWxsRGV0YWlscyhkYXRhLCBkaXNwbGF5X3Byb2R1Y3QpO1xyXG4gICAgICBmdW5jdGlvbiBkaXNwbGF5X3Byb2R1Y3QocmVzcG9uc2UsIGVsdCkge1xyXG4gICAgICAgIGlmIChpbnB1dC52YWwoKSA+PSAxICYmIGlucHV0LnZhbCgpIDw9IDkpIHtcclxuICAgICAgICAgIGlucHV0LnZhbChmdW5jdGlvbiAoaSwgb2xkdmFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiArK29sZHZhbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICAvLyAxLSBJbmNyZWFzZSBwcmljZSBvZiB0aGUgcHJvZHVjdFxyXG4gICAgICAgICAgICBsZXQgcXR5ID0gcGFyc2VJbnQoZWx0Lm5leHQoKS52YWwoKSk7XHJcbiAgICAgICAgICAgIGVsdFxyXG4gICAgICAgICAgICAgIC5wYXJlbnRzKFwiLnF0eVwiKVxyXG4gICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgIC5uZXh0KClcclxuICAgICAgICAgICAgICAuZmluZChcIi5wcm9kdWN0X3ByaWNlXCIpXHJcbiAgICAgICAgICAgICAgLmh0bWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LmZvcm1hdChcclxuICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChyZXNwb25zZS5tc2cuaXRlbV9wcmljZSAqIHF0eSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIDItIFNldCBzdWJ0b3RhbCBwcmljZVxyXG4gICAgICAgICAgICBwaHBQbHVnaW4uc3ViVG90YWxcclxuICAgICAgICAgICAgICAuZmluZChcIiNkZWFsLXByaWNlXCIpXHJcbiAgICAgICAgICAgICAgLmh0bWwoZnVuY3Rpb24gKGksIGRlYWxfcHJpY2UpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZWcgPSAvXFxzL2c7IC8vIC9bXlxcZF0rL2c7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuZm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHJlc3BvbnNlLm1zZy5pdGVtX3ByaWNlKSArXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgICAgIGRlYWxfcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJm5ic3A74oKsXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gLy9jbG9zaW5nIEFqYXggY2FsbFxyXG4gICAgfSk7XHJcblxyXG4gICAgcGhwUGx1Z2luLmNhcnRfaXRlbXMub24oXCJjbGlja1wiLCBcIi5xdHktZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBpbnB1dCA9ICQodGhpcykucHJldigpO1xyXG4gICAgICAvL2NoYW5nZSBwcmljZSB1c2luZyBhamF4XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHRhYmxlOiBcInByb2R1Y3RcIixcclxuICAgICAgICBpZDogJCh0aGlzKVxyXG4gICAgICAgICAgLnBhcmVudHMoXCIucXR5XCIpXHJcbiAgICAgICAgICAuZmluZChcImZvcm1cIilcclxuICAgICAgICAgIC5maW5kKFwiaW5wdXRbbmFtZT1pdGVtX2lkXVwiKVxyXG4gICAgICAgICAgLnZhbCgpLFxyXG4gICAgICAgIHVzZXI6IFwiZ3Vlc3RcIixcclxuICAgICAgICB1cmw6IFwiZm9ybXMvc2hvd0RldGFpbHNcIixcclxuICAgICAgICBkYXRhX3R5cGU6IFwidmFsdWVzXCIsXHJcbiAgICAgICAgcmV0dXJuX21vZGU6IFwiZGV0YWlsc1wiLFxyXG4gICAgICAgIHBhcmFtczogJCh0aGlzKSxcclxuICAgICAgfTtcclxuICAgICAgZGlzcGxheUFsbERldGFpbHMoZGF0YSwgZGlzcGxheV9wcm9kdWN0KTtcclxuICAgICAgZnVuY3Rpb24gZGlzcGxheV9wcm9kdWN0KHJlc3BvbnNlLCBlbHQpIHtcclxuICAgICAgICBpZiAoaW5wdXQudmFsKCkgPiAxICYmIGlucHV0LnZhbCgpIDw9IDEwKSB7XHJcbiAgICAgICAgICBpbnB1dC52YWwoZnVuY3Rpb24gKGksIG9sZHZhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLS1vbGR2YWw7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgLy8gMS0gSW5jcmVhc2UgcHJpY2Ugb2YgdGhlIHByb2R1Y3RcclxuICAgICAgICAgICAgbGV0IHF0eSA9IHBhcnNlSW50KGVsdC5wcmV2KCkudmFsKCkpO1xyXG4gICAgICAgICAgICBlbHRcclxuICAgICAgICAgICAgICAucGFyZW50cyhcIi5xdHlcIilcclxuICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAubmV4dCgpXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCIucHJvZHVjdF9wcmljZVwiKVxyXG4gICAgICAgICAgICAgIC5odG1sKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQoXHJcbiAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocmVzcG9uc2UubXNnLml0ZW1fcHJpY2UgKiBxdHkpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAyLSBTZXQgc3VidG90YWwgcHJpY2VcclxuICAgICAgICAgICAgcGhwUGx1Z2luLnN1YlRvdGFsXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCIjZGVhbC1wcmljZVwiKVxyXG4gICAgICAgICAgICAgIC5odG1sKGZ1bmN0aW9uIChpLCBkZWFsX3ByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVnID0gL1xccy9nOyAvLyAvW15cXGRdKy9nO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LmZvcm1hdChcclxuICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgICBkZWFsX3ByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShyZWcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCImbmJzcDvigqxcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgKSAtIHBhcnNlRmxvYXQocmVzcG9uc2UubXNnLml0ZW1fcHJpY2UpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSAvL2Nsb3NpbmdcclxuICAgIH0pO1xyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9EZWxldGUgY2FydFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLndyYXBwZXIub24oXCJjbGlja1wiLCBcIiNjYXJ0X2l0ZW1zIC5kZWxldGVCdG5cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAkKHRoaXMpLmh0bWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgdXJsOiBcImd1ZXN0cy9kZWxldGVcIixcclxuICAgICAgICBpZDogJCh0aGlzKS5hdHRyKFwiaWRcIiksXHJcbiAgICAgICAgdGFibGU6IFwiY2FydFwiLFxyXG4gICAgICAgIG1ldGhvZDogXCJkZWxldGVfY2FydFwiLFxyXG4gICAgICAgIGZybTogJCh0aGlzKS5wYXJlbnQoKSxcclxuICAgICAgICBwYXJhbXM6ICQodGhpcyksXHJcbiAgICAgIH07XHJcbiAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBtYW5hZ2VSZXNwb25zZSk7XHJcbiAgICAgIGZ1bmN0aW9uIG1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCBlbHQpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICByZWZyZXNoX2RlYWxfcHJpY2UoZWx0KTtcclxuICAgICAgICAgIGVsdC5wYXJlbnRzKFwiLnJvd1wiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgcGhwUGx1Z2luLmNvdW50X2l0ZW1zLmh0bWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQocGhwUGx1Z2luLmNvdW50X2l0ZW1zLmh0bWwoKSkgLSAxO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBwaHBQbHVnaW4uY2FydC5maW5kKFwiLmNhcnRfbmJfZWx0XCIpLmh0bWwoZnVuY3Rpb24gKGksIG5iX2l0ZW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuYl9pdGVtcyAtIDE7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHBocFBsdWdpbi5uZXdQaG9uZVxyXG4gICAgICAgICAgICAuZmluZChcclxuICAgICAgICAgICAgICBcIi5hZGRfdG9fY2FydF9mcm0gaW5wdXRbdmFsdWU9J1wiICtcclxuICAgICAgICAgICAgICAgIGVsdC5wYXJlbnQoKS5jaGlsZHJlbihcIjpmaXJzdFwiKS52YWwoKSArXHJcbiAgICAgICAgICAgICAgICBcIiddXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgLmZpbmQoXCJidXR0b25bdHlwZT1zdWJtaXRdXCIpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcImJ0bi13YXJuaW5nXCIpXHJcbiAgICAgICAgICAgIC5odG1sKFwiQWRkIHRvIENhcnRcIik7XHJcbiAgICAgICAgICBpZiAocGhwUGx1Z2luLmNhcnRfaXRlbXMuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBwaHBQbHVnaW4uY2FydF9pdGVtcy5odG1sKHJlc3BvbnNlLm1zZyAhPSAxID8gcmVzcG9uc2UubXNnIDogXCJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vU2F2ZSBmb3IgbGF0ZXJcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHBocFBsdWdpbi53cmFwcGVyLm9uKFxyXG4gICAgICBcImNsaWNrXCIsXHJcbiAgICAgIFwiI2NhcnRfaXRlbXMgLnF0eSBidXR0b25bdHlwZT1idXR0b25dXCIsXHJcbiAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICB1cmw6IFwiZ3Vlc3RzL3RvZ2dsZVdpc2hsaXN0QW5kY0NhcnRcIixcclxuICAgICAgICAgIGZybTogJCh0aGlzKS5wcmV2KCksXHJcbiAgICAgICAgICBmcm1fbmFtZTpcclxuICAgICAgICAgICAgXCJkZWxldGUtY2FydC1pdGVtLWZybVwiICtcclxuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KCkuZmluZChcImlucHV0W3R5cGU9aGlkZGVuXVwiKS52YWwoKSxcclxuICAgICAgICAgIHRhYmxlOiBcIndpc2hsaXN0XCIsXHJcbiAgICAgICAgICBwYXJhbXM6ICQodGhpcyksXHJcbiAgICAgICAgICBtZXRob2Q6IFwic2F2ZV9Gb3JfTGF0ZXJcIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBtYW5hZ2VSZXNwb25zZSk7XHJcbiAgICAgICAgZnVuY3Rpb24gbWFuYWdlUmVzcG9uc2UocmVzcG9uc2UsIGVsdCkge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi53aXNobGlzdF9pdGVtcy5hcHBlbmQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5tc2dbMF1bMF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwaHBQbHVnaW4uY2FydC5maW5kKFwiLnByb2R1Y3RfcHJpY2VcIikuaHRtbChmdW5jdGlvbiAoaSwgcF9wcmljZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQocGFyc2VGbG9hdChwX3ByaWNlKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocGhwUGx1Z2luLndpc2hsaXN0LmlzKFwiOmhpZGRlblwiKSkge1xyXG4gICAgICAgICAgICAgIHBocFBsdWdpbi53aXNobGlzdC5zaG93KCkuZmFkZUluKCkuZGVsYXkoNTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWZyZXNoX2RlYWxfcHJpY2UoZWx0KTtcclxuICAgICAgICAgICAgZWx0LnBhcmVudHMoXCIucm93XCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5jb3VudF9pdGVtcy5odG1sKGZ1bmN0aW9uIChpLCBuYl9pdGVtKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG5iX2l0ZW0gLSAxKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5jYXJ0LmZpbmQoXCIuY2FydF9uYl9lbHRcIikuaHRtbChmdW5jdGlvbiAoaSwgbmJfaXRlbSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChuYl9pdGVtIC0gMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwaHBQbHVnaW4ubmV3UGhvbmVcclxuICAgICAgICAgICAgICAuZmluZChcclxuICAgICAgICAgICAgICAgIFwiLmFkZF90b19jYXJ0X2ZybSBpbnB1dFt2YWx1ZT0nXCIgK1xyXG4gICAgICAgICAgICAgICAgICBlbHQucHJldigpLmNoaWxkcmVuKFwiOmZpcnN0XCIpLnZhbCgpICtcclxuICAgICAgICAgICAgICAgICAgXCInXVwiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgIC5maW5kKFwiYnV0dG9uW3R5cGU9c3VibWl0XVwiKVxyXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYnRuLXdhcm5pbmdcIilcclxuICAgICAgICAgICAgICAuaHRtbChcIkFkZCB0byBDYXJ0XCIpO1xyXG4gICAgICAgICAgICBpZiAocGhwUGx1Z2luLmNhcnRfaXRlbXMuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgIHBocFBsdWdpbi5jYXJ0X2l0ZW1zLmh0bWwoXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5tc2dbMV0gIT0gMSA/IHJlc3BvbnNlLm1zZ1sxXSA6IFwiXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgZnVuY3Rpb24gcmVmcmVzaF9kZWFsX3ByaWNlKGVsdCkge1xyXG4gICAgICBlbHRcclxuICAgICAgICAucGFyZW50cyhcIiNjYXJ0X2l0ZW1zXCIpXHJcbiAgICAgICAgLm5leHQoKVxyXG4gICAgICAgIC5maW5kKFwiI2RlYWwtcHJpY2VcIilcclxuICAgICAgICAuaHRtbChmdW5jdGlvbiAoaSwgZF9wcmljZSkge1xyXG4gICAgICAgICAgbGV0IHJlZyA9IC9cXHMvZztcclxuICAgICAgICAgIGxldCBwX3ByaWNlID0gZWx0XHJcbiAgICAgICAgICAgIC5wYXJlbnRzKFwiLnJvd1wiKVxyXG4gICAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgICAubGFzdCgpXHJcbiAgICAgICAgICAgIC5maW5kKFwiLnByb2R1Y3RfcHJpY2VcIilcclxuICAgICAgICAgICAgLmh0bWwoKTtcclxuICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQoXHJcbiAgICAgICAgICAgIHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgZF9wcmljZVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJm5ic3A74oKsXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICkgLVxyXG4gICAgICAgICAgICAgIHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgICBwX3ByaWNlXHJcbiAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZShcIiZuYnNwO+KCrFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL0RlbGV0ZSB3aGlzaGxpc3QgaXRlbXNcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHBocFBsdWdpbi53cmFwcGVyLm9uKFwiY2xpY2tcIiwgXCIjd2lzaGxpc3QtaXRlbXMgLmRlbGV0ZUJ0blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQodGhpcykuaHRtbChcIlBsZWFzZSB3YWl0Li4uXCIpO1xyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB1cmw6IFwiZ3Vlc3RzL2RlbGV0ZVwiLFxyXG4gICAgICAgIGlkOiAkKHRoaXMpLmF0dHIoXCJpZFwiKSxcclxuICAgICAgICB0YWJsZTogXCJ3aXNobGlzdFwiLFxyXG4gICAgICAgIG1ldGhvZDogXCJkZWxldGVfY2FydFwiLFxyXG4gICAgICAgIGZybTogJCh0aGlzKS5wYXJlbnQoKSxcclxuICAgICAgICBwYXJhbXM6ICQodGhpcyksXHJcbiAgICAgIH07XHJcbiAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBtYW5hZ2VSZXNwb25zZSk7XHJcbiAgICAgIGZ1bmN0aW9uIG1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCBlbHQpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBlbHQucGFyZW50cyhcIi5yb3dcIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICAgIGlmIChwaHBQbHVnaW4ud2lzaGxpc3RfaXRlbXMuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBwaHBQbHVnaW4ud2lzaGxpc3QuaGlkZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcGhwUGx1Z2luLm5ld1Bob25lXHJcbiAgICAgICAgICAgIC5maW5kKFxyXG4gICAgICAgICAgICAgIFwiLmFkZF90b19jYXJ0X2ZybSBpbnB1dFt2YWx1ZT0nXCIgK1xyXG4gICAgICAgICAgICAgICAgZWx0LnBhcmVudCgpLmNoaWxkcmVuKFwiOmZpcnN0XCIpLnZhbCgpICtcclxuICAgICAgICAgICAgICAgIFwiJ11cIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAuZmluZChcImJ1dHRvblt0eXBlPXN1Ym1pdF1cIilcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwiYnRuLXdhcm5pbmdcIilcclxuICAgICAgICAgICAgLmh0bWwoXCJBZGQgdG8gQ2FydFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9BZGQgdG8gY2FydCBmcm9tIHdoaXNobGlzdFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLndyYXBwZXIub24oXHJcbiAgICAgIFwiY2xpY2tcIixcclxuICAgICAgXCIjd2lzaGxpc3QtaXRlbXMgLnF0eSBidXR0b25bdHlwZT1idXR0b25dXCIsXHJcbiAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICB1cmw6IFwiZ3Vlc3RzL3RvZ2dsZVdpc2hsaXN0QW5kY0NhcnRcIixcclxuICAgICAgICAgIGZybTogJCh0aGlzKS5wcmV2KCksXHJcbiAgICAgICAgICBmcm1fbmFtZTpcclxuICAgICAgICAgICAgXCJkZWxldGUtY2FydC1pdGVtLWZybVwiICtcclxuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KCkuZmluZChcImlucHV0W3R5cGU9aGlkZGVuXVwiKS52YWwoKSxcclxuICAgICAgICAgIHRhYmxlOiBcImNhcnRcIixcclxuICAgICAgICAgIHBhcmFtczogJCh0aGlzKSxcclxuICAgICAgICAgIG1ldGhvZDogXCJhZGRfVG9fQ2FydFwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIG1hbmFnZVJlc3BvbnNlKTtcclxuICAgICAgICBmdW5jdGlvbiBtYW5hZ2VSZXNwb25zZShyZXNwb25zZSwgZWx0KSB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgY2FydCBpcyBlbXB0eVxyXG4gICAgICAgICAgICBpZiAocGhwUGx1Z2luLmNhcnRfaXRlbXMuZmluZChcIiNlbXB0eS1jYXJ0XCIpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgcGhwUGx1Z2luLmNhcnRfaXRlbXMuZmluZChcIiNlbXB0eS1jYXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vYXBwZW5kIGNhcnRcclxuICAgICAgICAgICAgcGhwUGx1Z2luLmNhcnRfaXRlbXMuYXBwZW5kKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UubXNnWzBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gZm9ybWF0IHByb2R1Y3QgcHJpY2VcclxuICAgICAgICAgICAgcGhwUGx1Z2luLndyYXBwZXJcclxuICAgICAgICAgICAgICAuZmluZChcIi5wcm9kdWN0X3ByaWNlXCIpXHJcbiAgICAgICAgICAgICAgLmh0bWwoZnVuY3Rpb24gKGksIHBfcHJpY2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQocGFyc2VGbG9hdChwX3ByaWNlKSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vcmVmcmVzaCBkZWFsIHByaWNlXHJcbiAgICAgICAgICAgIHBocFBsdWdpbi53cmFwcGVyLmZpbmQoXCIjZGVhbC1wcmljZVwiKS5odG1sKGZ1bmN0aW9uIChpLCBkX3ByaWNlKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHJlZyA9IC9cXHMvZztcclxuICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuZm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgZF9wcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIiZuYnNwO+KCrFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgKSArIHBhcnNlRmxvYXQocmVzcG9uc2UubXNnWzFdKVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL3JlZnJlc2ggbmIgaXRlbXMgaW4gdGhlIGNhcnRcclxuICAgICAgICAgICAgcGhwUGx1Z2luLmNvdW50X2l0ZW1zLmh0bWwoZnVuY3Rpb24gKGksIG5iX2l0ZW0pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQobmJfaXRlbSkgKyAxO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcGhwUGx1Z2luLndyYXBwZXIuZmluZChcIi5jYXJ0X25iX2VsdFwiKS5odG1sKGZ1bmN0aW9uIChpLCBuYl9pdGVtKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG5iX2l0ZW0pICsgMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGVsdC5wYXJlbnRzKFwiLnJvd1wiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBpZiAocGhwUGx1Z2luLndpc2hsaXN0X2l0ZW1zLmNoaWxkcmVuKCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICBwaHBQbHVnaW4ud2lzaGxpc3QuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5uZXdQaG9uZVxyXG4gICAgICAgICAgICAgIC5maW5kKFxyXG4gICAgICAgICAgICAgICAgXCIuYWRkX3RvX2NhcnRfZnJtIGlucHV0W3ZhbHVlPSdcIiArXHJcbiAgICAgICAgICAgICAgICAgIGVsdC5wcmV2KCkuY2hpbGRyZW4oXCI6Zmlyc3RcIikudmFsKCkgK1xyXG4gICAgICAgICAgICAgICAgICBcIiddXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCJidXR0b25bdHlwZT1zdWJtaXRdXCIpXHJcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXdhcm5pbmdcIilcclxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJidG4tc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgIC5odG1sKFwiQWRkIHRvIENhcnRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIG5ldyBDYXJ0KCQoXCIjYm9keVwiKSkuX2luaXQoKTtcclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjaGFyQXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZScpLmNoYXJBdDtcblxuLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUywgaW5kZXgsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIGluZGV4ICsgKHVuaWNvZGUgPyBjaGFyQXQoUywgaW5kZXgpLmxlbmd0aCA6IDEpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3MgbW92ZWQgdG8gZW50cnkgcG9pbnRzXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxudmFyIFJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gI3JlcGxhY2UgbmVlZHMgYnVpbHQtaW4gc3VwcG9ydCBmb3IgbmFtZWQgZ3JvdXBzLlxuICAvLyAjbWF0Y2ggd29ya3MgZmluZSBiZWNhdXNlIGl0IGp1c3QgcmV0dXJuIHRoZSBleGVjIHJlc3VsdHMsIGV2ZW4gaWYgaXQgaGFzXG4gIC8vIGEgXCJncm9wc1wiIHByb3BlcnR5LlxuICB2YXIgcmUgPSAvLi87XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHJlc3VsdC5ncm91cHMgPSB7IGE6ICc3JyB9O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHJldHVybiAnJy5yZXBsYWNlKHJlLCAnJDxhPicpICE9PSAnNyc7XG59KTtcblxuLy8gSUUgPD0gMTEgcmVwbGFjZXMgJDAgd2l0aCB0aGUgd2hvbGUgbWF0Y2gsIGFzIGlmIGl0IHdhcyAkJlxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjAyNDY2Ni9nZXR0aW5nLWllLXRvLXJlcGxhY2UtYS1yZWdleC13aXRoLXRoZS1saXRlcmFsLXN0cmluZy0wXG52YXIgUkVQTEFDRV9LRUVQU18kMCA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvcHJlZmVyLWVzY2FwZS1yZXBsYWNlbWVudC1kb2xsYXItY2hhciAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gJ2EnLnJlcGxhY2UoLy4vLCAnJDAnKSA9PT0gJyQwJztcbn0pKCk7XG5cbnZhciBSRVBMQUNFID0gd2VsbEtub3duU3ltYm9sKCdyZXBsYWNlJyk7XG4vLyBTYWZhcmkgPD0gMTMuMC4zKD8pIHN1YnN0aXR1dGVzIG50aCBjYXB0dXJlIHdoZXJlIG4+bSB3aXRoIGFuIGVtcHR5IHN0cmluZ1xudmFyIFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFID0gKGZ1bmN0aW9uICgpIHtcbiAgaWYgKC8uL1tSRVBMQUNFXSkge1xuICAgIHJldHVybiAvLi9bUkVQTEFDRV0oJ2EnLCAnJDAnKSA9PT0gJyc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSkoKTtcblxuLy8gQ2hyb21lIDUxIGhhcyBhIGJ1Z2d5IFwic3BsaXRcIiBpbXBsZW1lbnRhdGlvbiB3aGVuIFJlZ0V4cCNleGVjICE9PSBuYXRpdmVFeGVjXG4vLyBXZWV4IEpTIGhhcyBmcm96ZW4gYnVpbHQtaW4gcHJvdG90eXBlcywgc28gdXNlIHRyeSAvIGNhdGNoIHdyYXBwZXJcbnZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVnZXhwL25vLWVtcHR5LWdyb3VwIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHZhciByZSA9IC8oPzopLztcbiAgdmFyIG9yaWdpbmFsRXhlYyA9IHJlLmV4ZWM7XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcmlnaW5hbEV4ZWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgdmFyIHJlc3VsdCA9ICdhYicuc3BsaXQocmUpO1xuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCAhPT0gMiB8fCByZXN1bHRbMF0gIT09ICdhJyB8fCByZXN1bHRbMV0gIT09ICdiJztcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGxlbmd0aCwgZXhlYywgc2hhbSkge1xuICB2YXIgU1lNQk9MID0gd2VsbEtub3duU3ltYm9sKEtFWSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19TWU1CT0wgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN0cmluZyBtZXRob2RzIGNhbGwgc3ltYm9sLW5hbWVkIFJlZ0VwIG1ldGhvZHNcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19FWEVDID0gREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG5cbiAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XG4gICAgICAvLyBXZSBjYW4ndCB1c2UgcmVhbCByZWdleCBoZXJlIHNpbmNlIGl0IGNhdXNlcyBkZW9wdGltaXphdGlvblxuICAgICAgLy8gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb24gaW4gVjhcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMDZcbiAgICAgIHJlID0ge307XG4gICAgICAvLyBSZWdFeHBbQEBzcGxpdF0gZG9lc24ndCBjYWxsIHRoZSByZWdleCdzIGV4ZWMgbWV0aG9kLCBidXQgZmlyc3QgY3JlYXRlc1xuICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgcmUuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgIHJlLmNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmU7IH07XG4gICAgICByZS5mbGFncyA9ICcnO1xuICAgICAgcmVbU1lNQk9MXSA9IC8uL1tTWU1CT0xdO1xuICAgIH1cblxuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcblxuICAgIHJlW1NZTUJPTF0oJycpO1xuICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgfSk7XG5cbiAgaWYgKFxuICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgKEtFWSA9PT0gJ3JlcGxhY2UnICYmICEoXG4gICAgICBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyAmJlxuICAgICAgUkVQTEFDRV9LRUVQU18kMCAmJlxuICAgICAgIVJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFXG4gICAgKSkgfHxcbiAgICAoS0VZID09PSAnc3BsaXQnICYmICFTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMpXG4gICkge1xuICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICB2YXIgbWV0aG9kcyA9IGV4ZWMoU1lNQk9MLCAnJ1tLRVldLCBmdW5jdGlvbiAobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgIGlmIChyZWdleHAuZXhlYyA9PT0gUmVnRXhwLnByb3RvdHlwZS5leGVjKSB7XG4gICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgIC8vIFRoZSBuYXRpdmUgU3RyaW5nIG1ldGhvZCBhbHJlYWR5IGRlbGVnYXRlcyB0byBAQG1ldGhvZCAodGhpc1xuICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVSZWdFeHBNZXRob2QuY2FsbChyZWdleHAsIHN0ciwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlTWV0aG9kLmNhbGwoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICB9XG4gICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgIH0sIHtcbiAgICAgIFJFUExBQ0VfS0VFUFNfJDA6IFJFUExBQ0VfS0VFUFNfJDAsXG4gICAgICBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRTogUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkVcbiAgICB9KTtcbiAgICB2YXIgc3RyaW5nTWV0aG9kID0gbWV0aG9kc1swXTtcbiAgICB2YXIgcmVnZXhNZXRob2QgPSBtZXRob2RzWzFdO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJpbmdNZXRob2QpO1xuICAgIHJlZGVmaW5lKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcmVnZXhNZXRob2QuY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByZWdleE1ldGhvZC5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG5cbiAgaWYgKHNoYW0pIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShSZWdFeHAucHJvdG90eXBlW1NZTUJPTF0sICdzaGFtJywgdHJ1ZSk7XG59O1xuIiwidmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIHJlcGxhY2UgPSAnJy5yZXBsYWNlO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTID0gL1xcJChbJCYnYF18XFxkezEsMn18PFtePl0qPikvZztcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRCA9IC9cXCQoWyQmJ2BdfFxcZHsxLDJ9KS9nO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldHN1YnN0aXR1dGlvblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWF0Y2hlZCwgc3RyLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VtZW50KSB7XG4gIHZhciB0YWlsUG9zID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgdmFyIG0gPSBjYXB0dXJlcy5sZW5ndGg7XG4gIHZhciBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQ7XG4gIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBuYW1lZENhcHR1cmVzID0gdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTO1xuICB9XG4gIHJldHVybiByZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICB2YXIgY2FwdHVyZTtcbiAgICBzd2l0Y2ggKGNoLmNoYXJBdCgwKSkge1xuICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICBjYXNlICcmJzogcmV0dXJuIG1hdGNoZWQ7XG4gICAgICBjYXNlICdgJzogcmV0dXJuIHN0ci5zbGljZSgwLCBwb3NpdGlvbik7XG4gICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgY2FzZSAnPCc6XG4gICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW2NoLnNsaWNlKDEsIC0xKV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDogLy8gXFxkXFxkP1xuICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgdmFyIGYgPSBmbG9vcihuIC8gMTApO1xuICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgaWYgKGYgPD0gbSkgcmV0dXJuIGNhcHR1cmVzW2YgLSAxXSA9PT0gdW5kZWZpbmVkID8gY2guY2hhckF0KDEpIDogY2FwdHVyZXNbZiAtIDFdICsgY2guY2hhckF0KDEpO1xuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuICAgICAgICBjYXB0dXJlID0gY2FwdHVyZXNbbiAtIDFdO1xuICAgIH1cbiAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICB9KTtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vY2xhc3NvZi1yYXcnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9yZWdleHAtZXhlYycpO1xuXG4vLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciByZXN1bHQgPSBleGVjLmNhbGwoUiwgUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gIH1cblxuICByZXR1cm4gcmVnZXhwRXhlYy5jYWxsKFIsIFMpO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9yZWdleHAtZmxhZ3MnKTtcbnZhciBzdGlja3lIZWxwZXJzID0gcmVxdWlyZSgnLi9yZWdleHAtc3RpY2t5LWhlbHBlcnMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL3NoYXJlZCcpO1xuXG52YXIgbmF0aXZlRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbnZhciBuYXRpdmVSZXBsYWNlID0gc2hhcmVkKCduYXRpdmUtc3RyaW5nLXJlcGxhY2UnLCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UpO1xuXG52YXIgcGF0Y2hlZEV4ZWMgPSBuYXRpdmVFeGVjO1xuXG52YXIgVVBEQVRFU19MQVNUX0lOREVYX1dST05HID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlMSA9IC9hLztcbiAgdmFyIHJlMiA9IC9iKi9nO1xuICBuYXRpdmVFeGVjLmNhbGwocmUxLCAnYScpO1xuICBuYXRpdmVFeGVjLmNhbGwocmUyLCAnYScpO1xuICByZXR1cm4gcmUxLmxhc3RJbmRleCAhPT0gMCB8fCByZTIubGFzdEluZGV4ICE9PSAwO1xufSkoKTtcblxudmFyIFVOU1VQUE9SVEVEX1kgPSBzdGlja3lIZWxwZXJzLlVOU1VQUE9SVEVEX1kgfHwgc3RpY2t5SGVscGVycy5CUk9LRU5fQ0FSRVQ7XG5cbi8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwLCBjb3BpZWQgZnJvbSBlczUtc2hpbSdzIFN0cmluZyNzcGxpdCBwYXRjaC5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tYXNzZXJ0aW9uLWNhcHR1cmluZy1ncm91cCwgcmVnZXhwL25vLWVtcHR5LWdyb3VwLCByZWdleHAvbm8tbGF6eS1lbmRzIC0tIHRlc3RpbmdcbnZhciBOUENHX0lOQ0xVREVEID0gLygpPz8vLmV4ZWMoJycpWzFdICE9PSB1bmRlZmluZWQ7XG5cbnZhciBQQVRDSCA9IFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyB8fCBOUENHX0lOQ0xVREVEIHx8IFVOU1VQUE9SVEVEX1k7XG5cbmlmIChQQVRDSCkge1xuICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgdmFyIHJlID0gdGhpcztcbiAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuICAgIHZhciBzdGlja3kgPSBVTlNVUFBPUlRFRF9ZICYmIHJlLnN0aWNreTtcbiAgICB2YXIgZmxhZ3MgPSByZWdleHBGbGFncy5jYWxsKHJlKTtcbiAgICB2YXIgc291cmNlID0gcmUuc291cmNlO1xuICAgIHZhciBjaGFyc0FkZGVkID0gMDtcbiAgICB2YXIgc3RyQ29weSA9IHN0cjtcblxuICAgIGlmIChzdGlja3kpIHtcbiAgICAgIGZsYWdzID0gZmxhZ3MucmVwbGFjZSgneScsICcnKTtcbiAgICAgIGlmIChmbGFncy5pbmRleE9mKCdnJykgPT09IC0xKSB7XG4gICAgICAgIGZsYWdzICs9ICdnJztcbiAgICAgIH1cblxuICAgICAgc3RyQ29weSA9IFN0cmluZyhzdHIpLnNsaWNlKHJlLmxhc3RJbmRleCk7XG4gICAgICAvLyBTdXBwb3J0IGFuY2hvcmVkIHN0aWNreSBiZWhhdmlvci5cbiAgICAgIGlmIChyZS5sYXN0SW5kZXggPiAwICYmICghcmUubXVsdGlsaW5lIHx8IHJlLm11bHRpbGluZSAmJiBzdHJbcmUubGFzdEluZGV4IC0gMV0gIT09ICdcXG4nKSkge1xuICAgICAgICBzb3VyY2UgPSAnKD86ICcgKyBzb3VyY2UgKyAnKSc7XG4gICAgICAgIHN0ckNvcHkgPSAnICcgKyBzdHJDb3B5O1xuICAgICAgICBjaGFyc0FkZGVkKys7XG4gICAgICB9XG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgc3RyIHNsaWNpbmcsIHRvXG4gICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICByZUNvcHkgPSBuZXcgUmVnRXhwKCdeKD86JyArIHNvdXJjZSArICcpJywgZmxhZ3MpO1xuICAgIH1cblxuICAgIGlmIChOUENHX0lOQ0xVREVEKSB7XG4gICAgICByZUNvcHkgPSBuZXcgUmVnRXhwKCdeJyArIHNvdXJjZSArICckKD8hXFxcXHMpJywgZmxhZ3MpO1xuICAgIH1cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HKSBsYXN0SW5kZXggPSByZS5sYXN0SW5kZXg7XG5cbiAgICBtYXRjaCA9IG5hdGl2ZUV4ZWMuY2FsbChzdGlja3kgPyByZUNvcHkgOiByZSwgc3RyQ29weSk7XG5cbiAgICBpZiAoc3RpY2t5KSB7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbWF0Y2guaW5wdXQgPSBtYXRjaC5pbnB1dC5zbGljZShjaGFyc0FkZGVkKTtcbiAgICAgICAgbWF0Y2hbMF0gPSBtYXRjaFswXS5zbGljZShjaGFyc0FkZGVkKTtcbiAgICAgICAgbWF0Y2guaW5kZXggPSByZS5sYXN0SW5kZXg7XG4gICAgICAgIHJlLmxhc3RJbmRleCArPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICB9IGVsc2UgcmUubGFzdEluZGV4ID0gMDtcbiAgICB9IGVsc2UgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyAmJiBtYXRjaCkge1xuICAgICAgcmUubGFzdEluZGV4ID0gcmUuZ2xvYmFsID8gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggOiBsYXN0SW5kZXg7XG4gICAgfVxuICAgIGlmIChOUENHX0lOQ0xVREVEICYmIG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgXG4gICAgICAvLyBmb3IgTlBDRywgbGlrZSBJRTguIE5PVEU6IFRoaXMgZG9lc24nIHdvcmsgZm9yIC8oLj8pPy9cbiAgICAgIG5hdGl2ZVJlcGxhY2UuY2FsbChtYXRjaFswXSwgcmVDb3B5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoZWRFeGVjO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS5mbGFnc2AgZ2V0dGVyIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAucHJvdG90eXBlLmZsYWdzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQuZG90QWxsKSByZXN1bHQgKz0gJ3MnO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL2ZhaWxzJyk7XG5cbi8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgnYScsICd5JykgLT4gL2EveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yLFxuLy8gc28gd2UgdXNlIGFuIGludGVybWVkaWF0ZSBmdW5jdGlvbi5cbmZ1bmN0aW9uIFJFKHMsIGYpIHtcbiAgcmV0dXJuIFJlZ0V4cChzLCBmKTtcbn1cblxuZXhwb3J0cy5VTlNVUFBPUlRFRF9ZID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ2EnLCAneScpIC0+IC9hL3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxuICB2YXIgcmUgPSBSRSgnYScsICd5Jyk7XG4gIHJlLmxhc3RJbmRleCA9IDI7XG4gIHJldHVybiByZS5leGVjKCdhYmNkJykgIT0gbnVsbDtcbn0pO1xuXG5leHBvcnRzLkJST0tFTl9DQVJFVCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzczNjg3XG4gIHZhciByZSA9IFJFKCdecicsICdneScpO1xuICByZS5sYXN0SW5kZXggPSAyO1xuICByZXR1cm4gcmUuZXhlYygnc3RyJykgIT0gbnVsbDtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS5leGVjYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS5leGVjXG4kKHsgdGFyZ2V0OiAnUmVnRXhwJywgcHJvdG86IHRydWUsIGZvcmNlZDogLy4vLmV4ZWMgIT09IGV4ZWMgfSwge1xuICBleGVjOiBleGVjXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIGdldFN1YnN0aXR1dGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtc3Vic3RpdHV0aW9uJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbnZhciBtYXliZVRvU3RyaW5nID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gaXQgOiBTdHJpbmcoaXQpO1xufTtcblxuLy8gQEByZXBsYWNlIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygncmVwbGFjZScsIDIsIGZ1bmN0aW9uIChSRVBMQUNFLCBuYXRpdmVSZXBsYWNlLCBtYXliZUNhbGxOYXRpdmUsIHJlYXNvbikge1xuICB2YXIgUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgPSByZWFzb24uUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkU7XG4gIHZhciBSRVBMQUNFX0tFRVBTXyQwID0gcmVhc29uLlJFUExBQ0VfS0VFUFNfJDA7XG4gIHZhciBVTlNBRkVfU1VCU1RJVFVURSA9IFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFID8gJyQnIDogJyQwJztcblxuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlXG4gICAgZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgcmVwbGFjZXIgPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICAgIHJldHVybiByZXBsYWNlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gcmVwbGFjZXIuY2FsbChzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKVxuICAgICAgICA6IG5hdGl2ZVJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAcmVwbGFjZVxuICAgIGZ1bmN0aW9uIChyZWdleHAsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgaWYgKFxuICAgICAgICAoIVJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFICYmIFJFUExBQ0VfS0VFUFNfJDApIHx8XG4gICAgICAgICh0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnc3RyaW5nJyAmJiByZXBsYWNlVmFsdWUuaW5kZXhPZihVTlNBRkVfU1VCU1RJVFVURSkgPT09IC0xKVxuICAgICAgKSB7XG4gICAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlUmVwbGFjZSwgcmVnZXhwLCB0aGlzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcblxuICAgICAgdmFyIGZ1bmN0aW9uYWxSZXBsYWNlID0gdHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGlmICghZnVuY3Rpb25hbFJlcGxhY2UpIHJlcGxhY2VWYWx1ZSA9IFN0cmluZyhyZXBsYWNlVmFsdWUpO1xuXG4gICAgICB2YXIgZ2xvYmFsID0gcnguZ2xvYmFsO1xuICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgYnJlYWs7XG5cbiAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIGlmICghZ2xvYmFsKSBicmVhaztcblxuICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFjY3VtdWxhdGVkUmVzdWx0ID0gJyc7XG4gICAgICB2YXIgbmV4dFNvdXJjZVBvc2l0aW9uID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHRzW2ldO1xuXG4gICAgICAgIHZhciBtYXRjaGVkID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IG1heChtaW4odG9JbnRlZ2VyKHJlc3VsdC5pbmRleCksIFMubGVuZ3RoKSwgMCk7XG4gICAgICAgIHZhciBjYXB0dXJlcyA9IFtdO1xuICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGVxdWl2YWxlbnQgdG9cbiAgICAgICAgLy8gICBjYXB0dXJlcyA9IHJlc3VsdC5zbGljZSgxKS5tYXAobWF5YmVUb1N0cmluZylcbiAgICAgICAgLy8gYnV0IGZvciBzb21lIHJlYXNvbiBgbmF0aXZlU2xpY2UuY2FsbChyZXN1bHQsIDEsIHJlc3VsdC5sZW5ndGgpYCAoY2FsbGVkIGluXG4gICAgICAgIC8vIHRoZSBzbGljZSBwb2x5ZmlsbCB3aGVuIHNsaWNpbmcgbmF0aXZlIGFycmF5cykgXCJkb2Vzbid0IHdvcmtcIiBpbiBzYWZhcmkgOSBhbmRcbiAgICAgICAgLy8gY2F1c2VzIGEgY3Jhc2ggKGh0dHBzOi8vcGFzdGViaW4uY29tL04yMVF6ZVFBKSB3aGVuIHRyeWluZyB0byBkZWJ1ZyBpdC5cbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCByZXN1bHQubGVuZ3RoOyBqKyspIGNhcHR1cmVzLnB1c2gobWF5YmVUb1N0cmluZyhyZXN1bHRbal0pKTtcbiAgICAgICAgdmFyIG5hbWVkQ2FwdHVyZXMgPSByZXN1bHQuZ3JvdXBzO1xuICAgICAgICBpZiAoZnVuY3Rpb25hbFJlcGxhY2UpIHtcbiAgICAgICAgICB2YXIgcmVwbGFjZXJBcmdzID0gW21hdGNoZWRdLmNvbmNhdChjYXB0dXJlcywgcG9zaXRpb24sIFMpO1xuICAgICAgICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHJlcGxhY2VyQXJncy5wdXNoKG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgICAgIHZhciByZXBsYWNlbWVudCA9IFN0cmluZyhyZXBsYWNlVmFsdWUuYXBwbHkodW5kZWZpbmVkLCByZXBsYWNlckFyZ3MpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXBsYWNlbWVudCA9IGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBTLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uID49IG5leHRTb3VyY2VQb3NpdGlvbikge1xuICAgICAgICAgIGFjY3VtdWxhdGVkUmVzdWx0ICs9IFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uLCBwb3NpdGlvbikgKyByZXBsYWNlbWVudDtcbiAgICAgICAgICBuZXh0U291cmNlUG9zaXRpb24gPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjdW11bGF0ZWRSZXN1bHQgKyBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbik7XG4gICAgfVxuICBdO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9