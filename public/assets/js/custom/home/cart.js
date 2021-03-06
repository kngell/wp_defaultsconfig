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
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var corejs_form_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! corejs/form_crud */ "./src/assets/js/core/form_crud.js");
/* harmony import */ var corejs_visitors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! corejs/visitors */ "./src/assets/js/core/visitors.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





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
    this.cart = this.element.find("#cart");
    this.banner = this.element.find("#banner-area");
    this.newPhone = this.element.find("#new-phones");
    this.cart_items = this.element.find("#cart_items");
    this.wishlist = this.element.find("#wishlist");
    this.wishlist_items = this.element.find("#wishlist-items");
    this.subTotal = this.element.find("#sub_total");
  };

  PhpPlugin.prototype.setupEvents = function () {
    var phpPlugin = this; //=======================================================================
    //Currency format
    //=======================================================================

    var currency = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR"
    }); //=======================================================================
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
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_5__.displayAllDetails)(data, display_product);

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
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_5__.displayAllDetails)(data, display_product);

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
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_5__.Call_controller)(data, manageResponse);

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
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_5__.Call_controller)(data, manageResponse);

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
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_5__.Call_controller)(data, manageResponse);

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
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_5__.Call_controller)(data, manageResponse);

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
  };

  $.fn.phpPlugin = function (options) {
    new PhpPlugin(this);
    return this;
  };

  $("#body").phpPlugin();
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
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
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
      if (regexp.exec === regexpExec) {
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

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

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
// eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
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
0,[["./src/assets/js/custom/home/cart.js","commons/frontend/commonVendor","commons/frontend/commonCustomModules","js/librairies/frontlib"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2hvbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1zdWJzdGl0dXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZXhlYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtc3RpY2t5LWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZXhlYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5yZXBsYWNlLmpzIl0sIm5hbWVzIjpbInJlc3BvbnNpdmUiLCJpdGVtcyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIlBocFBsdWdpbiIsImVsZW1lbnQiLCJpbml0IiwicHJvdG90eXBlIiwic2V0dXBWYXJpYWJsZXMiLCJzZXR1cEV2ZW50cyIsIndyYXBwZXIiLCJmaW5kIiwiY291bnRfaXRlbXMiLCJjYXJ0IiwiYmFubmVyIiwibmV3UGhvbmUiLCJjYXJ0X2l0ZW1zIiwid2lzaGxpc3QiLCJ3aXNobGlzdF9pdGVtcyIsInN1YlRvdGFsIiwicGhwUGx1Z2luIiwiY3VycmVuY3kiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJvd2xDYXJvdXNlbCIsImxvb3AiLCJuYXYiLCJkb3RzIiwib24iLCJlIiwiaW5wdXQiLCIkIiwibmV4dCIsImRhdGEiLCJ0YWJsZSIsImlkIiwicGFyZW50cyIsInZhbCIsInVzZXIiLCJ1cmwiLCJkYXRhX3R5cGUiLCJyZXR1cm5fbW9kZSIsInBhcmFtcyIsImRpc3BsYXlBbGxEZXRhaWxzIiwiZGlzcGxheV9wcm9kdWN0IiwicmVzcG9uc2UiLCJlbHQiLCJpIiwib2xkdmFsIiwicmVzdWx0IiwicXR5IiwicGFyc2VJbnQiLCJwYXJlbnQiLCJodG1sIiwiZm9ybWF0IiwicGFyc2VGbG9hdCIsIm1zZyIsIml0ZW1fcHJpY2UiLCJkZWFsX3ByaWNlIiwicmVnIiwicmVwbGFjZSIsInByZXZlbnREZWZhdWx0IiwicHJldiIsImF0dHIiLCJtZXRob2QiLCJmcm0iLCJDYWxsX2NvbnRyb2xsZXIiLCJtYW5hZ2VSZXNwb25zZSIsInJlZnJlc2hfZGVhbF9wcmljZSIsImZpcnN0IiwicmVtb3ZlIiwibmJfaXRlbXMiLCJjaGlsZHJlbiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJsZW5ndGgiLCJmcm1fbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJhcHBlbmQiLCJwX3ByaWNlIiwiaXMiLCJzaG93IiwiZmFkZUluIiwiZGVsYXkiLCJuYl9pdGVtIiwiZF9wcmljZSIsImxhc3QiLCJoaWRlIiwiZm4iLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLElBQU1BLFVBQVUsR0FBRztBQUNqQixLQUFHO0FBQ0RDLFNBQUssRUFB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MkRBQTJEO0FBQzlEO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDUlk7QUFDYixvQ0FBb0MsbUJBQU8sQ0FBQywrSEFBaUQ7QUFDN0YsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDNUUseUJBQXlCLG1CQUFPLENBQUMsbUdBQW1DO0FBQ3BFLHNCQUFzQixtQkFBTyxDQUFDLDJGQUErQjtBQUM3RCxpQkFBaUIsbUJBQU8sQ0FBQyxtR0FBbUM7O0FBRTVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixvQkFBb0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoianMvY3VzdG9tL2hvbWUvY2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJjb25zdCByZXNwb25zaXZlID0ge1xyXG4gIDA6IHtcclxuICAgIGl0ZW1zOiAxLFxyXG4gIH0sXHJcbiAgNjAwOiB7XHJcbiAgICBpdGVtczogMyxcclxuICB9LFxyXG4gIDEwMDA6IHtcclxuICAgIGl0ZW1zOiA1LFxyXG4gIH0sXHJcbn07XHJcbmltcG9ydCB7IGRpc3BsYXlBbGxEZXRhaWxzLCBDYWxsX2NvbnRyb2xsZXIgfSBmcm9tIFwiY29yZWpzL2Zvcm1fY3J1ZFwiO1xyXG5pbXBvcnQgeyBnZXRfdmlzaXRvcnNfZGF0YSwgc2VuZF92aXNpdG9yc19kYXRhIH0gZnJvbSBcImNvcmVqcy92aXNpdG9yc1wiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgZnVuY3Rpb24gUGhwUGx1Z2luKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcbiAgUGhwUGx1Z2luLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zZXR1cFZhcmlhYmxlcygpO1xyXG4gICAgdGhpcy5zZXR1cEV2ZW50cygpO1xyXG4gIH07XHJcbiAgUGhwUGx1Z2luLnByb3RvdHlwZS5zZXR1cFZhcmlhYmxlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMud3JhcHBlciA9IHRoaXMuZWxlbWVudC5maW5kKFwiI21haW4tc2l0ZVwiKTtcclxuICAgIHRoaXMuY291bnRfaXRlbXMgPSB0aGlzLmVsZW1lbnQuZmluZChcIi5jYXJ0X25iX2VsdFwiKTtcclxuICAgIHRoaXMuY2FydCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2NhcnRcIik7XHJcbiAgICB0aGlzLmJhbm5lciA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2Jhbm5lci1hcmVhXCIpO1xyXG4gICAgdGhpcy5uZXdQaG9uZSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI25ldy1waG9uZXNcIik7XHJcbiAgICB0aGlzLmNhcnRfaXRlbXMgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNjYXJ0X2l0ZW1zXCIpO1xyXG4gICAgdGhpcy53aXNobGlzdCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3dpc2hsaXN0XCIpO1xyXG4gICAgdGhpcy53aXNobGlzdF9pdGVtcyA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3dpc2hsaXN0LWl0ZW1zXCIpO1xyXG4gICAgdGhpcy5zdWJUb3RhbCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3N1Yl90b3RhbFwiKTtcclxuICB9O1xyXG4gIFBocFBsdWdpbi5wcm90b3R5cGUuc2V0dXBFdmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcGhwUGx1Z2luID0gdGhpcztcclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL0N1cnJlbmN5IGZvcm1hdFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbGV0IGN1cnJlbmN5ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZnItRlJcIiwge1xyXG4gICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG4gICAgICBjdXJyZW5jeTogXCJFVVJcIixcclxuICAgIH0pO1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vT3dsIGNhcm91c2VsXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL25ldyBwaG9uZXNcclxuICAgIHBocFBsdWdpbi5uZXdQaG9uZS5maW5kKFwiLm93bC1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmUsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL1F0eSBzZWN0aW9uXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwaHBQbHVnaW4uY2FydF9pdGVtcy5vbihcImNsaWNrXCIsIFwiLnF0eS11cFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBsZXQgaW5wdXQgPSAkKHRoaXMpLm5leHQoKTtcclxuICAgICAgLy9jaGFuZ2UgcHJpY2UgdXNpbmcgYWpheFxyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB0YWJsZTogXCJwcm9kdWN0XCIsXHJcbiAgICAgICAgaWQ6ICQodGhpcylcclxuICAgICAgICAgIC5wYXJlbnRzKFwiLnF0eVwiKVxyXG4gICAgICAgICAgLmZpbmQoXCJmb3JtXCIpXHJcbiAgICAgICAgICAuZmluZChcImlucHV0W25hbWU9aXRlbV9pZF1cIilcclxuICAgICAgICAgIC52YWwoKSxcclxuICAgICAgICB1c2VyOiBcImd1ZXN0XCIsXHJcbiAgICAgICAgdXJsOiBcImZvcm1zL3Nob3dEZXRhaWxzXCIsXHJcbiAgICAgICAgZGF0YV90eXBlOiBcInZhbHVlc1wiLFxyXG4gICAgICAgIHJldHVybl9tb2RlOiBcImRldGFpbHNcIixcclxuICAgICAgICBwYXJhbXM6ICQodGhpcyksXHJcbiAgICAgIH07XHJcbiAgICAgIGRpc3BsYXlBbGxEZXRhaWxzKGRhdGEsIGRpc3BsYXlfcHJvZHVjdCk7XHJcbiAgICAgIGZ1bmN0aW9uIGRpc3BsYXlfcHJvZHVjdChyZXNwb25zZSwgZWx0KSB7XHJcbiAgICAgICAgaWYgKGlucHV0LnZhbCgpID49IDEgJiYgaW5wdXQudmFsKCkgPD0gOSkge1xyXG4gICAgICAgICAgaW5wdXQudmFsKGZ1bmN0aW9uIChpLCBvbGR2YWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuICsrb2xkdmFsO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIC8vIDEtIEluY3JlYXNlIHByaWNlIG9mIHRoZSBwcm9kdWN0XHJcbiAgICAgICAgICAgIGxldCBxdHkgPSBwYXJzZUludChlbHQubmV4dCgpLnZhbCgpKTtcclxuICAgICAgICAgICAgZWx0XHJcbiAgICAgICAgICAgICAgLnBhcmVudHMoXCIucXR5XCIpXHJcbiAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgLm5leHQoKVxyXG4gICAgICAgICAgICAgIC5maW5kKFwiLnByb2R1Y3RfcHJpY2VcIilcclxuICAgICAgICAgICAgICAuaHRtbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuZm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHJlc3BvbnNlLm1zZy5pdGVtX3ByaWNlICogcXR5KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gMi0gU2V0IHN1YnRvdGFsIHByaWNlXHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5zdWJUb3RhbFxyXG4gICAgICAgICAgICAgIC5maW5kKFwiI2RlYWwtcHJpY2VcIilcclxuICAgICAgICAgICAgICAuaHRtbChmdW5jdGlvbiAoaSwgZGVhbF9wcmljZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlZyA9IC9cXHMvZzsgLy8gL1teXFxkXSsvZztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQoXHJcbiAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocmVzcG9uc2UubXNnLml0ZW1fcHJpY2UpICtcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVhbF9wcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShyZWcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCImbmJzcDvigqxcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSAvL2Nsb3NpbmcgQWpheCBjYWxsXHJcbiAgICB9KTtcclxuXHJcbiAgICBwaHBQbHVnaW4uY2FydF9pdGVtcy5vbihcImNsaWNrXCIsIFwiLnF0eS1kb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbGV0IGlucHV0ID0gJCh0aGlzKS5wcmV2KCk7XHJcbiAgICAgIC8vY2hhbmdlIHByaWNlIHVzaW5nIGFqYXhcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgdGFibGU6IFwicHJvZHVjdFwiLFxyXG4gICAgICAgIGlkOiAkKHRoaXMpXHJcbiAgICAgICAgICAucGFyZW50cyhcIi5xdHlcIilcclxuICAgICAgICAgIC5maW5kKFwiZm9ybVwiKVxyXG4gICAgICAgICAgLmZpbmQoXCJpbnB1dFtuYW1lPWl0ZW1faWRdXCIpXHJcbiAgICAgICAgICAudmFsKCksXHJcbiAgICAgICAgdXNlcjogXCJndWVzdFwiLFxyXG4gICAgICAgIHVybDogXCJmb3Jtcy9zaG93RGV0YWlsc1wiLFxyXG4gICAgICAgIGRhdGFfdHlwZTogXCJ2YWx1ZXNcIixcclxuICAgICAgICByZXR1cm5fbW9kZTogXCJkZXRhaWxzXCIsXHJcbiAgICAgICAgcGFyYW1zOiAkKHRoaXMpLFxyXG4gICAgICB9O1xyXG4gICAgICBkaXNwbGF5QWxsRGV0YWlscyhkYXRhLCBkaXNwbGF5X3Byb2R1Y3QpO1xyXG4gICAgICBmdW5jdGlvbiBkaXNwbGF5X3Byb2R1Y3QocmVzcG9uc2UsIGVsdCkge1xyXG4gICAgICAgIGlmIChpbnB1dC52YWwoKSA+IDEgJiYgaW5wdXQudmFsKCkgPD0gMTApIHtcclxuICAgICAgICAgIGlucHV0LnZhbChmdW5jdGlvbiAoaSwgb2xkdmFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtLW9sZHZhbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICAvLyAxLSBJbmNyZWFzZSBwcmljZSBvZiB0aGUgcHJvZHVjdFxyXG4gICAgICAgICAgICBsZXQgcXR5ID0gcGFyc2VJbnQoZWx0LnByZXYoKS52YWwoKSk7XHJcbiAgICAgICAgICAgIGVsdFxyXG4gICAgICAgICAgICAgIC5wYXJlbnRzKFwiLnF0eVwiKVxyXG4gICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgIC5uZXh0KClcclxuICAgICAgICAgICAgICAuZmluZChcIi5wcm9kdWN0X3ByaWNlXCIpXHJcbiAgICAgICAgICAgICAgLmh0bWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LmZvcm1hdChcclxuICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChyZXNwb25zZS5tc2cuaXRlbV9wcmljZSAqIHF0eSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIDItIFNldCBzdWJ0b3RhbCBwcmljZVxyXG4gICAgICAgICAgICBwaHBQbHVnaW4uc3ViVG90YWxcclxuICAgICAgICAgICAgICAuZmluZChcIiNkZWFsLXByaWNlXCIpXHJcbiAgICAgICAgICAgICAgLmh0bWwoZnVuY3Rpb24gKGksIGRlYWxfcHJpY2UpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZWcgPSAvXFxzL2c7IC8vIC9bXlxcZF0rL2c7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuZm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIGRlYWxfcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIiZuYnNwO+KCrFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICApIC0gcGFyc2VGbG9hdChyZXNwb25zZS5tc2cuaXRlbV9wcmljZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IC8vY2xvc2luZ1xyXG4gICAgfSk7XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL0RlbGV0ZSBjYXJ0XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwaHBQbHVnaW4ud3JhcHBlci5vbihcImNsaWNrXCIsIFwiI2NhcnRfaXRlbXMgLmRlbGV0ZUJ0blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQodGhpcykuaHRtbChcIlBsZWFzZSB3YWl0Li4uXCIpO1xyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB1cmw6IFwiZ3Vlc3RzL2RlbGV0ZVwiLFxyXG4gICAgICAgIGlkOiAkKHRoaXMpLmF0dHIoXCJpZFwiKSxcclxuICAgICAgICB0YWJsZTogXCJjYXJ0XCIsXHJcbiAgICAgICAgbWV0aG9kOiBcImRlbGV0ZV9jYXJ0XCIsXHJcbiAgICAgICAgZnJtOiAkKHRoaXMpLnBhcmVudCgpLFxyXG4gICAgICAgIHBhcmFtczogJCh0aGlzKSxcclxuICAgICAgfTtcclxuICAgICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIG1hbmFnZVJlc3BvbnNlKTtcclxuICAgICAgZnVuY3Rpb24gbWFuYWdlUmVzcG9uc2UocmVzcG9uc2UsIGVsdCkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIHJlZnJlc2hfZGVhbF9wcmljZShlbHQpO1xyXG4gICAgICAgICAgZWx0LnBhcmVudHMoXCIucm93XCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICBwaHBQbHVnaW4uY291bnRfaXRlbXMuaHRtbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChwaHBQbHVnaW4uY291bnRfaXRlbXMuaHRtbCgpKSAtIDE7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHBocFBsdWdpbi5jYXJ0LmZpbmQoXCIuY2FydF9uYl9lbHRcIikuaHRtbChmdW5jdGlvbiAoaSwgbmJfaXRlbXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5iX2l0ZW1zIC0gMTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcGhwUGx1Z2luLm5ld1Bob25lXHJcbiAgICAgICAgICAgIC5maW5kKFxyXG4gICAgICAgICAgICAgIFwiLmFkZF90b19jYXJ0X2ZybSBpbnB1dFt2YWx1ZT0nXCIgK1xyXG4gICAgICAgICAgICAgICAgZWx0LnBhcmVudCgpLmNoaWxkcmVuKFwiOmZpcnN0XCIpLnZhbCgpICtcclxuICAgICAgICAgICAgICAgIFwiJ11cIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAuZmluZChcImJ1dHRvblt0eXBlPXN1Ym1pdF1cIilcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwiYnRuLXdhcm5pbmdcIilcclxuICAgICAgICAgICAgLmh0bWwoXCJBZGQgdG8gQ2FydFwiKTtcclxuICAgICAgICAgIGlmIChwaHBQbHVnaW4uY2FydF9pdGVtcy5jaGlsZHJlbigpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5jYXJ0X2l0ZW1zLmh0bWwocmVzcG9uc2UubXNnICE9IDEgPyByZXNwb25zZS5tc2cgOiBcIlwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9TYXZlIGZvciBsYXRlclxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLndyYXBwZXIub24oXHJcbiAgICAgIFwiY2xpY2tcIixcclxuICAgICAgXCIjY2FydF9pdGVtcyAucXR5IGJ1dHRvblt0eXBlPWJ1dHRvbl1cIixcclxuICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgIHVybDogXCJndWVzdHMvdG9nZ2xlV2lzaGxpc3RBbmRjQ2FydFwiLFxyXG4gICAgICAgICAgZnJtOiAkKHRoaXMpLnByZXYoKSxcclxuICAgICAgICAgIGZybV9uYW1lOlxyXG4gICAgICAgICAgICBcImRlbGV0ZS1jYXJ0LWl0ZW0tZnJtXCIgK1xyXG4gICAgICAgICAgICAkKHRoaXMpLnByZXYoKS5maW5kKFwiaW5wdXRbdHlwZT1oaWRkZW5dXCIpLnZhbCgpLFxyXG4gICAgICAgICAgdGFibGU6IFwid2lzaGxpc3RcIixcclxuICAgICAgICAgIHBhcmFtczogJCh0aGlzKSxcclxuICAgICAgICAgIG1ldGhvZDogXCJzYXZlX0Zvcl9MYXRlclwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIG1hbmFnZVJlc3BvbnNlKTtcclxuICAgICAgICBmdW5jdGlvbiBtYW5hZ2VSZXNwb25zZShyZXNwb25zZSwgZWx0KSB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgcGhwUGx1Z2luLndpc2hsaXN0X2l0ZW1zLmFwcGVuZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLm1zZ1swXVswXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5jYXJ0LmZpbmQoXCIucHJvZHVjdF9wcmljZVwiKS5odG1sKGZ1bmN0aW9uIChpLCBwX3ByaWNlKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LmZvcm1hdChwYXJzZUZsb2F0KHBfcHJpY2UpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChwaHBQbHVnaW4ud2lzaGxpc3QuaXMoXCI6aGlkZGVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgcGhwUGx1Z2luLndpc2hsaXN0LnNob3coKS5mYWRlSW4oKS5kZWxheSg1MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlZnJlc2hfZGVhbF9wcmljZShlbHQpO1xyXG4gICAgICAgICAgICBlbHQucGFyZW50cyhcIi5yb3dcIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgcGhwUGx1Z2luLmNvdW50X2l0ZW1zLmh0bWwoZnVuY3Rpb24gKGksIG5iX2l0ZW0pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQobmJfaXRlbSAtIDEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcGhwUGx1Z2luLmNhcnQuZmluZChcIi5jYXJ0X25iX2VsdFwiKS5odG1sKGZ1bmN0aW9uIChpLCBuYl9pdGVtKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG5iX2l0ZW0gLSAxKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5uZXdQaG9uZVxyXG4gICAgICAgICAgICAgIC5maW5kKFxyXG4gICAgICAgICAgICAgICAgXCIuYWRkX3RvX2NhcnRfZnJtIGlucHV0W3ZhbHVlPSdcIiArXHJcbiAgICAgICAgICAgICAgICAgIGVsdC5wcmV2KCkuY2hpbGRyZW4oXCI6Zmlyc3RcIikudmFsKCkgK1xyXG4gICAgICAgICAgICAgICAgICBcIiddXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCJidXR0b25bdHlwZT1zdWJtaXRdXCIpXHJcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJidG4td2FybmluZ1wiKVxyXG4gICAgICAgICAgICAgIC5odG1sKFwiQWRkIHRvIENhcnRcIik7XHJcbiAgICAgICAgICAgIGlmIChwaHBQbHVnaW4uY2FydF9pdGVtcy5jaGlsZHJlbigpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgcGhwUGx1Z2luLmNhcnRfaXRlbXMuaHRtbChcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLm1zZ1sxXSAhPSAxID8gcmVzcG9uc2UubXNnWzFdIDogXCJcIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBmdW5jdGlvbiByZWZyZXNoX2RlYWxfcHJpY2UoZWx0KSB7XHJcbiAgICAgIGVsdFxyXG4gICAgICAgIC5wYXJlbnRzKFwiI2NhcnRfaXRlbXNcIilcclxuICAgICAgICAubmV4dCgpXHJcbiAgICAgICAgLmZpbmQoXCIjZGVhbC1wcmljZVwiKVxyXG4gICAgICAgIC5odG1sKGZ1bmN0aW9uIChpLCBkX3ByaWNlKSB7XHJcbiAgICAgICAgICBsZXQgcmVnID0gL1xccy9nO1xyXG4gICAgICAgICAgbGV0IHBfcHJpY2UgPSBlbHRcclxuICAgICAgICAgICAgLnBhcmVudHMoXCIucm93XCIpXHJcbiAgICAgICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgICAgIC5sYXN0KClcclxuICAgICAgICAgICAgLmZpbmQoXCIucHJvZHVjdF9wcmljZVwiKVxyXG4gICAgICAgICAgICAuaHRtbCgpO1xyXG4gICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LmZvcm1hdChcclxuICAgICAgICAgICAgcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICBkX3ByaWNlXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZShyZWcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoXCImbmJzcDvigqxcIiwgXCJcIilcclxuICAgICAgICAgICAgKSAtXHJcbiAgICAgICAgICAgICAgcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgIHBfcHJpY2VcclxuICAgICAgICAgICAgICAgICAgLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJm5ic3A74oKsXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vRGVsZXRlIHdoaXNobGlzdCBpdGVtc1xyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLndyYXBwZXIub24oXCJjbGlja1wiLCBcIiN3aXNobGlzdC1pdGVtcyAuZGVsZXRlQnRuXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgJCh0aGlzKS5odG1sKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHVybDogXCJndWVzdHMvZGVsZXRlXCIsXHJcbiAgICAgICAgaWQ6ICQodGhpcykuYXR0cihcImlkXCIpLFxyXG4gICAgICAgIHRhYmxlOiBcIndpc2hsaXN0XCIsXHJcbiAgICAgICAgbWV0aG9kOiBcImRlbGV0ZV9jYXJ0XCIsXHJcbiAgICAgICAgZnJtOiAkKHRoaXMpLnBhcmVudCgpLFxyXG4gICAgICAgIHBhcmFtczogJCh0aGlzKSxcclxuICAgICAgfTtcclxuICAgICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIG1hbmFnZVJlc3BvbnNlKTtcclxuICAgICAgZnVuY3Rpb24gbWFuYWdlUmVzcG9uc2UocmVzcG9uc2UsIGVsdCkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIGVsdC5wYXJlbnRzKFwiLnJvd1wiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgaWYgKHBocFBsdWdpbi53aXNobGlzdF9pdGVtcy5jaGlsZHJlbigpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi53aXNobGlzdC5oaWRlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwaHBQbHVnaW4ubmV3UGhvbmVcclxuICAgICAgICAgICAgLmZpbmQoXHJcbiAgICAgICAgICAgICAgXCIuYWRkX3RvX2NhcnRfZnJtIGlucHV0W3ZhbHVlPSdcIiArXHJcbiAgICAgICAgICAgICAgICBlbHQucGFyZW50KCkuY2hpbGRyZW4oXCI6Zmlyc3RcIikudmFsKCkgK1xyXG4gICAgICAgICAgICAgICAgXCInXVwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgIC5maW5kKFwiYnV0dG9uW3R5cGU9c3VibWl0XVwiKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4tc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJidG4td2FybmluZ1wiKVxyXG4gICAgICAgICAgICAuaHRtbChcIkFkZCB0byBDYXJ0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL0FkZCB0byBjYXJ0IGZyb20gd2hpc2hsaXN0XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwaHBQbHVnaW4ud3JhcHBlci5vbihcclxuICAgICAgXCJjbGlja1wiLFxyXG4gICAgICBcIiN3aXNobGlzdC1pdGVtcyAucXR5IGJ1dHRvblt0eXBlPWJ1dHRvbl1cIixcclxuICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgIHVybDogXCJndWVzdHMvdG9nZ2xlV2lzaGxpc3RBbmRjQ2FydFwiLFxyXG4gICAgICAgICAgZnJtOiAkKHRoaXMpLnByZXYoKSxcclxuICAgICAgICAgIGZybV9uYW1lOlxyXG4gICAgICAgICAgICBcImRlbGV0ZS1jYXJ0LWl0ZW0tZnJtXCIgK1xyXG4gICAgICAgICAgICAkKHRoaXMpLnByZXYoKS5maW5kKFwiaW5wdXRbdHlwZT1oaWRkZW5dXCIpLnZhbCgpLFxyXG4gICAgICAgICAgdGFibGU6IFwiY2FydFwiLFxyXG4gICAgICAgICAgcGFyYW1zOiAkKHRoaXMpLFxyXG4gICAgICAgICAgbWV0aG9kOiBcImFkZF9Ub19DYXJ0XCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgbWFuYWdlUmVzcG9uc2UpO1xyXG4gICAgICAgIGZ1bmN0aW9uIG1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCBlbHQpIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgLy9jaGVjayBpZiBjYXJ0IGlzIGVtcHR5XHJcbiAgICAgICAgICAgIGlmIChwaHBQbHVnaW4uY2FydF9pdGVtcy5maW5kKFwiI2VtcHR5LWNhcnRcIikubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICBwaHBQbHVnaW4uY2FydF9pdGVtcy5maW5kKFwiI2VtcHR5LWNhcnRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9hcHBlbmQgY2FydFxyXG4gICAgICAgICAgICBwaHBQbHVnaW4uY2FydF9pdGVtcy5hcHBlbmQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5tc2dbMF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBmb3JtYXQgcHJvZHVjdCBwcmljZVxyXG4gICAgICAgICAgICBwaHBQbHVnaW4ud3JhcHBlclxyXG4gICAgICAgICAgICAgIC5maW5kKFwiLnByb2R1Y3RfcHJpY2VcIilcclxuICAgICAgICAgICAgICAuaHRtbChmdW5jdGlvbiAoaSwgcF9wcmljZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LmZvcm1hdChwYXJzZUZsb2F0KHBfcHJpY2UpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9yZWZyZXNoIGRlYWwgcHJpY2VcclxuICAgICAgICAgICAgcGhwUGx1Z2luLndyYXBwZXIuZmluZChcIiNkZWFsLXByaWNlXCIpLmh0bWwoZnVuY3Rpb24gKGksIGRfcHJpY2UpIHtcclxuICAgICAgICAgICAgICBsZXQgcmVnID0gL1xccy9nO1xyXG4gICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQoXHJcbiAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgICBkX3ByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJm5ic3A74oKsXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICApICsgcGFyc2VGbG9hdChyZXNwb25zZS5tc2dbMV0pXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vcmVmcmVzaCBuYiBpdGVtcyBpbiB0aGUgY2FydFxyXG4gICAgICAgICAgICBwaHBQbHVnaW4uY291bnRfaXRlbXMuaHRtbChmdW5jdGlvbiAoaSwgbmJfaXRlbSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChuYl9pdGVtKSArIDE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwaHBQbHVnaW4ud3JhcHBlci5maW5kKFwiLmNhcnRfbmJfZWx0XCIpLmh0bWwoZnVuY3Rpb24gKGksIG5iX2l0ZW0pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQobmJfaXRlbSkgKyAxO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZWx0LnBhcmVudHMoXCIucm93XCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGlmIChwaHBQbHVnaW4ud2lzaGxpc3RfaXRlbXMuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgIHBocFBsdWdpbi53aXNobGlzdC5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGhwUGx1Z2luLm5ld1Bob25lXHJcbiAgICAgICAgICAgICAgLmZpbmQoXHJcbiAgICAgICAgICAgICAgICBcIi5hZGRfdG9fY2FydF9mcm0gaW5wdXRbdmFsdWU9J1wiICtcclxuICAgICAgICAgICAgICAgICAgZWx0LnByZXYoKS5jaGlsZHJlbihcIjpmaXJzdFwiKS52YWwoKSArXHJcbiAgICAgICAgICAgICAgICAgIFwiJ11cIlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAuZmluZChcImJ1dHRvblt0eXBlPXN1Ym1pdF1cIilcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4td2FybmluZ1wiKVxyXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgLmh0bWwoXCJBZGQgdG8gQ2FydFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgJC5mbi5waHBQbHVnaW4gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgbmV3IFBocFBsdWdpbih0aGlzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcbiAgJChcIiNib2R5XCIpLnBocFBsdWdpbigpO1xyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNoYXJBdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctbXVsdGlieXRlJykuY2hhckF0O1xuXG4vLyBgQWR2YW5jZVN0cmluZ0luZGV4YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYWR2YW5jZXN0cmluZ2luZGV4XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTLCBpbmRleCwgdW5pY29kZSkge1xuICByZXR1cm4gaW5kZXggKyAodW5pY29kZSA/IGNoYXJBdChTLCBpbmRleCkubGVuZ3RoIDogMSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyBtb3ZlZCB0byBlbnRyeSBwb2ludHNcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxudmFyIFJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gI3JlcGxhY2UgbmVlZHMgYnVpbHQtaW4gc3VwcG9ydCBmb3IgbmFtZWQgZ3JvdXBzLlxuICAvLyAjbWF0Y2ggd29ya3MgZmluZSBiZWNhdXNlIGl0IGp1c3QgcmV0dXJuIHRoZSBleGVjIHJlc3VsdHMsIGV2ZW4gaWYgaXQgaGFzXG4gIC8vIGEgXCJncm9wc1wiIHByb3BlcnR5LlxuICB2YXIgcmUgPSAvLi87XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHJlc3VsdC5ncm91cHMgPSB7IGE6ICc3JyB9O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHJldHVybiAnJy5yZXBsYWNlKHJlLCAnJDxhPicpICE9PSAnNyc7XG59KTtcblxuLy8gSUUgPD0gMTEgcmVwbGFjZXMgJDAgd2l0aCB0aGUgd2hvbGUgbWF0Y2gsIGFzIGlmIGl0IHdhcyAkJlxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjAyNDY2Ni9nZXR0aW5nLWllLXRvLXJlcGxhY2UtYS1yZWdleC13aXRoLXRoZS1saXRlcmFsLXN0cmluZy0wXG52YXIgUkVQTEFDRV9LRUVQU18kMCA9IChmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnYScucmVwbGFjZSgvLi8sICckMCcpID09PSAnJDAnO1xufSkoKTtcblxudmFyIFJFUExBQ0UgPSB3ZWxsS25vd25TeW1ib2woJ3JlcGxhY2UnKTtcbi8vIFNhZmFyaSA8PSAxMy4wLjMoPykgc3Vic3RpdHV0ZXMgbnRoIGNhcHR1cmUgd2hlcmUgbj5tIHdpdGggYW4gZW1wdHkgc3RyaW5nXG52YXIgUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgPSAoZnVuY3Rpb24gKCkge1xuICBpZiAoLy4vW1JFUExBQ0VdKSB7XG4gICAgcmV0dXJuIC8uL1tSRVBMQUNFXSgnYScsICckMCcpID09PSAnJztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KSgpO1xuXG4vLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbi8vIFdlZXggSlMgaGFzIGZyb3plbiBidWlsdC1pbiBwcm90b3R5cGVzLCBzbyB1c2UgdHJ5IC8gY2F0Y2ggd3JhcHBlclxudmFyIFNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tZW1wdHktZ3JvdXAgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgdmFyIHJlID0gLyg/OikvO1xuICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoICE9PSAyIHx8IHJlc3VsdFswXSAhPT0gJ2EnIHx8IHJlc3VsdFsxXSAhPT0gJ2InO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjLCBzaGFtKSB7XG4gIHZhciBTWU1CT0wgPSB3ZWxsS25vd25TeW1ib2woS0VZKTtcblxuICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KTtcblxuICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3ltYm9sLW5hbWVkIFJlZ0V4cCBtZXRob2RzIGNhbGwgLmV4ZWNcbiAgICB2YXIgZXhlY0NhbGxlZCA9IGZhbHNlO1xuICAgIHZhciByZSA9IC9hLztcblxuICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgIC8vIFdlIGNhbid0IHVzZSByZWFsIHJlZ2V4IGhlcmUgc2luY2UgaXQgY2F1c2VzIGRlb3B0aW1pemF0aW9uXG4gICAgICAvLyBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvbiBpbiBWOFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMwNlxuICAgICAgcmUgPSB7fTtcbiAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICAgIHJlLmZsYWdzID0gJyc7XG4gICAgICByZVtTWU1CT0xdID0gLy4vW1NZTUJPTF07XG4gICAgfVxuXG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuXG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KTtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICAoS0VZID09PSAncmVwbGFjZScgJiYgIShcbiAgICAgIFJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTICYmXG4gICAgICBSRVBMQUNFX0tFRVBTXyQwICYmXG4gICAgICAhUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkVcbiAgICApKSB8fFxuICAgIChLRVkgPT09ICdzcGxpdCcgJiYgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQylcbiAgKSB7XG4gICAgdmFyIG5hdGl2ZVJlZ0V4cE1ldGhvZCA9IC8uL1tTWU1CT0xdO1xuICAgIHZhciBtZXRob2RzID0gZXhlYyhTWU1CT0wsICcnW0tFWV0sIGZ1bmN0aW9uIChuYXRpdmVNZXRob2QsIHJlZ2V4cCwgc3RyLCBhcmcyLCBmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgaWYgKHJlZ2V4cC5leGVjID09PSByZWdleHBFeGVjKSB7XG4gICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgIC8vIFRoZSBuYXRpdmUgU3RyaW5nIG1ldGhvZCBhbHJlYWR5IGRlbGVnYXRlcyB0byBAQG1ldGhvZCAodGhpc1xuICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVSZWdFeHBNZXRob2QuY2FsbChyZWdleHAsIHN0ciwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlTWV0aG9kLmNhbGwoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICB9XG4gICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgIH0sIHtcbiAgICAgIFJFUExBQ0VfS0VFUFNfJDA6IFJFUExBQ0VfS0VFUFNfJDAsXG4gICAgICBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRTogUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkVcbiAgICB9KTtcbiAgICB2YXIgc3RyaW5nTWV0aG9kID0gbWV0aG9kc1swXTtcbiAgICB2YXIgcmVnZXhNZXRob2QgPSBtZXRob2RzWzFdO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJpbmdNZXRob2QpO1xuICAgIHJlZGVmaW5lKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcmVnZXhNZXRob2QuY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByZWdleE1ldGhvZC5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG5cbiAgaWYgKHNoYW0pIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShSZWdFeHAucHJvdG90eXBlW1NZTUJPTF0sICdzaGFtJywgdHJ1ZSk7XG59O1xuIiwidmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIHJlcGxhY2UgPSAnJy5yZXBsYWNlO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTID0gL1xcJChbJCYnYF18XFxkezEsMn18PFtePl0qPikvZztcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRCA9IC9cXCQoWyQmJ2BdfFxcZHsxLDJ9KS9nO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldHN1YnN0aXR1dGlvblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWF0Y2hlZCwgc3RyLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VtZW50KSB7XG4gIHZhciB0YWlsUG9zID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgdmFyIG0gPSBjYXB0dXJlcy5sZW5ndGg7XG4gIHZhciBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQ7XG4gIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBuYW1lZENhcHR1cmVzID0gdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTO1xuICB9XG4gIHJldHVybiByZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICB2YXIgY2FwdHVyZTtcbiAgICBzd2l0Y2ggKGNoLmNoYXJBdCgwKSkge1xuICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICBjYXNlICcmJzogcmV0dXJuIG1hdGNoZWQ7XG4gICAgICBjYXNlICdgJzogcmV0dXJuIHN0ci5zbGljZSgwLCBwb3NpdGlvbik7XG4gICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgY2FzZSAnPCc6XG4gICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW2NoLnNsaWNlKDEsIC0xKV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDogLy8gXFxkXFxkP1xuICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgdmFyIGYgPSBmbG9vcihuIC8gMTApO1xuICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgaWYgKGYgPD0gbSkgcmV0dXJuIGNhcHR1cmVzW2YgLSAxXSA9PT0gdW5kZWZpbmVkID8gY2guY2hhckF0KDEpIDogY2FwdHVyZXNbZiAtIDFdICsgY2guY2hhckF0KDEpO1xuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuICAgICAgICBjYXB0dXJlID0gY2FwdHVyZXNbbiAtIDFdO1xuICAgIH1cbiAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICB9KTtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vY2xhc3NvZi1yYXcnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9yZWdleHAtZXhlYycpO1xuXG4vLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciByZXN1bHQgPSBleGVjLmNhbGwoUiwgUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gIH1cblxuICByZXR1cm4gcmVnZXhwRXhlYy5jYWxsKFIsIFMpO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9yZWdleHAtZmxhZ3MnKTtcbnZhciBzdGlja3lIZWxwZXJzID0gcmVxdWlyZSgnLi9yZWdleHAtc3RpY2t5LWhlbHBlcnMnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvO1xuICB2YXIgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTEubGFzdEluZGV4ICE9PSAwIHx8IHJlMi5sYXN0SW5kZXggIT09IDA7XG59KSgpO1xuXG52YXIgVU5TVVBQT1JURURfWSA9IHN0aWNreUhlbHBlcnMuVU5TVVBQT1JURURfWSB8fCBzdGlja3lIZWxwZXJzLkJST0tFTl9DQVJFVDtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby1hc3NlcnRpb24tY2FwdHVyaW5nLWdyb3VwLCByZWdleHAvbm8tZW1wdHktZ3JvdXAgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbnZhciBOUENHX0lOQ0xVREVEID0gLygpPz8vLmV4ZWMoJycpWzFdICE9PSB1bmRlZmluZWQ7XG5cbnZhciBQQVRDSCA9IFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyB8fCBOUENHX0lOQ0xVREVEIHx8IFVOU1VQUE9SVEVEX1k7XG5cbmlmIChQQVRDSCkge1xuICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgdmFyIHJlID0gdGhpcztcbiAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuICAgIHZhciBzdGlja3kgPSBVTlNVUFBPUlRFRF9ZICYmIHJlLnN0aWNreTtcbiAgICB2YXIgZmxhZ3MgPSByZWdleHBGbGFncy5jYWxsKHJlKTtcbiAgICB2YXIgc291cmNlID0gcmUuc291cmNlO1xuICAgIHZhciBjaGFyc0FkZGVkID0gMDtcbiAgICB2YXIgc3RyQ29weSA9IHN0cjtcblxuICAgIGlmIChzdGlja3kpIHtcbiAgICAgIGZsYWdzID0gZmxhZ3MucmVwbGFjZSgneScsICcnKTtcbiAgICAgIGlmIChmbGFncy5pbmRleE9mKCdnJykgPT09IC0xKSB7XG4gICAgICAgIGZsYWdzICs9ICdnJztcbiAgICAgIH1cblxuICAgICAgc3RyQ29weSA9IFN0cmluZyhzdHIpLnNsaWNlKHJlLmxhc3RJbmRleCk7XG4gICAgICAvLyBTdXBwb3J0IGFuY2hvcmVkIHN0aWNreSBiZWhhdmlvci5cbiAgICAgIGlmIChyZS5sYXN0SW5kZXggPiAwICYmICghcmUubXVsdGlsaW5lIHx8IHJlLm11bHRpbGluZSAmJiBzdHJbcmUubGFzdEluZGV4IC0gMV0gIT09ICdcXG4nKSkge1xuICAgICAgICBzb3VyY2UgPSAnKD86ICcgKyBzb3VyY2UgKyAnKSc7XG4gICAgICAgIHN0ckNvcHkgPSAnICcgKyBzdHJDb3B5O1xuICAgICAgICBjaGFyc0FkZGVkKys7XG4gICAgICB9XG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgc3RyIHNsaWNpbmcsIHRvXG4gICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICByZUNvcHkgPSBuZXcgUmVnRXhwKCdeKD86JyArIHNvdXJjZSArICcpJywgZmxhZ3MpO1xuICAgIH1cblxuICAgIGlmIChOUENHX0lOQ0xVREVEKSB7XG4gICAgICByZUNvcHkgPSBuZXcgUmVnRXhwKCdeJyArIHNvdXJjZSArICckKD8hXFxcXHMpJywgZmxhZ3MpO1xuICAgIH1cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HKSBsYXN0SW5kZXggPSByZS5sYXN0SW5kZXg7XG5cbiAgICBtYXRjaCA9IG5hdGl2ZUV4ZWMuY2FsbChzdGlja3kgPyByZUNvcHkgOiByZSwgc3RyQ29weSk7XG5cbiAgICBpZiAoc3RpY2t5KSB7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbWF0Y2guaW5wdXQgPSBtYXRjaC5pbnB1dC5zbGljZShjaGFyc0FkZGVkKTtcbiAgICAgICAgbWF0Y2hbMF0gPSBtYXRjaFswXS5zbGljZShjaGFyc0FkZGVkKTtcbiAgICAgICAgbWF0Y2guaW5kZXggPSByZS5sYXN0SW5kZXg7XG4gICAgICAgIHJlLmxhc3RJbmRleCArPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICB9IGVsc2UgcmUubGFzdEluZGV4ID0gMDtcbiAgICB9IGVsc2UgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyAmJiBtYXRjaCkge1xuICAgICAgcmUubGFzdEluZGV4ID0gcmUuZ2xvYmFsID8gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggOiBsYXN0SW5kZXg7XG4gICAgfVxuICAgIGlmIChOUENHX0lOQ0xVREVEICYmIG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgXG4gICAgICAvLyBmb3IgTlBDRywgbGlrZSBJRTguIE5PVEU6IFRoaXMgZG9lc24nIHdvcmsgZm9yIC8oLj8pPy9cbiAgICAgIG5hdGl2ZVJlcGxhY2UuY2FsbChtYXRjaFswXSwgcmVDb3B5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoZWRFeGVjO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS5mbGFnc2AgZ2V0dGVyIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAucHJvdG90eXBlLmZsYWdzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQuZG90QWxsKSByZXN1bHQgKz0gJ3MnO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL2ZhaWxzJyk7XG5cbi8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgnYScsICd5JykgLT4gL2EveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yLFxuLy8gc28gd2UgdXNlIGFuIGludGVybWVkaWF0ZSBmdW5jdGlvbi5cbmZ1bmN0aW9uIFJFKHMsIGYpIHtcbiAgcmV0dXJuIFJlZ0V4cChzLCBmKTtcbn1cblxuZXhwb3J0cy5VTlNVUFBPUlRFRF9ZID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ2EnLCAneScpIC0+IC9hL3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxuICB2YXIgcmUgPSBSRSgnYScsICd5Jyk7XG4gIHJlLmxhc3RJbmRleCA9IDI7XG4gIHJldHVybiByZS5leGVjKCdhYmNkJykgIT0gbnVsbDtcbn0pO1xuXG5leHBvcnRzLkJST0tFTl9DQVJFVCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzczNjg3XG4gIHZhciByZSA9IFJFKCdecicsICdneScpO1xuICByZS5sYXN0SW5kZXggPSAyO1xuICByZXR1cm4gcmUuZXhlYygnc3RyJykgIT0gbnVsbDtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS5leGVjYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS5leGVjXG4kKHsgdGFyZ2V0OiAnUmVnRXhwJywgcHJvdG86IHRydWUsIGZvcmNlZDogLy4vLmV4ZWMgIT09IGV4ZWMgfSwge1xuICBleGVjOiBleGVjXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIGdldFN1YnN0aXR1dGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtc3Vic3RpdHV0aW9uJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbnZhciBtYXliZVRvU3RyaW5nID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gaXQgOiBTdHJpbmcoaXQpO1xufTtcblxuLy8gQEByZXBsYWNlIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygncmVwbGFjZScsIDIsIGZ1bmN0aW9uIChSRVBMQUNFLCBuYXRpdmVSZXBsYWNlLCBtYXliZUNhbGxOYXRpdmUsIHJlYXNvbikge1xuICB2YXIgUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgPSByZWFzb24uUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkU7XG4gIHZhciBSRVBMQUNFX0tFRVBTXyQwID0gcmVhc29uLlJFUExBQ0VfS0VFUFNfJDA7XG4gIHZhciBVTlNBRkVfU1VCU1RJVFVURSA9IFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFID8gJyQnIDogJyQwJztcblxuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlXG4gICAgZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgcmVwbGFjZXIgPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICAgIHJldHVybiByZXBsYWNlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gcmVwbGFjZXIuY2FsbChzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKVxuICAgICAgICA6IG5hdGl2ZVJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAcmVwbGFjZVxuICAgIGZ1bmN0aW9uIChyZWdleHAsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgaWYgKFxuICAgICAgICAoIVJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFICYmIFJFUExBQ0VfS0VFUFNfJDApIHx8XG4gICAgICAgICh0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnc3RyaW5nJyAmJiByZXBsYWNlVmFsdWUuaW5kZXhPZihVTlNBRkVfU1VCU1RJVFVURSkgPT09IC0xKVxuICAgICAgKSB7XG4gICAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlUmVwbGFjZSwgcmVnZXhwLCB0aGlzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcblxuICAgICAgdmFyIGZ1bmN0aW9uYWxSZXBsYWNlID0gdHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGlmICghZnVuY3Rpb25hbFJlcGxhY2UpIHJlcGxhY2VWYWx1ZSA9IFN0cmluZyhyZXBsYWNlVmFsdWUpO1xuXG4gICAgICB2YXIgZ2xvYmFsID0gcnguZ2xvYmFsO1xuICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgYnJlYWs7XG5cbiAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIGlmICghZ2xvYmFsKSBicmVhaztcblxuICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFjY3VtdWxhdGVkUmVzdWx0ID0gJyc7XG4gICAgICB2YXIgbmV4dFNvdXJjZVBvc2l0aW9uID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHRzW2ldO1xuXG4gICAgICAgIHZhciBtYXRjaGVkID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IG1heChtaW4odG9JbnRlZ2VyKHJlc3VsdC5pbmRleCksIFMubGVuZ3RoKSwgMCk7XG4gICAgICAgIHZhciBjYXB0dXJlcyA9IFtdO1xuICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGVxdWl2YWxlbnQgdG9cbiAgICAgICAgLy8gICBjYXB0dXJlcyA9IHJlc3VsdC5zbGljZSgxKS5tYXAobWF5YmVUb1N0cmluZylcbiAgICAgICAgLy8gYnV0IGZvciBzb21lIHJlYXNvbiBgbmF0aXZlU2xpY2UuY2FsbChyZXN1bHQsIDEsIHJlc3VsdC5sZW5ndGgpYCAoY2FsbGVkIGluXG4gICAgICAgIC8vIHRoZSBzbGljZSBwb2x5ZmlsbCB3aGVuIHNsaWNpbmcgbmF0aXZlIGFycmF5cykgXCJkb2Vzbid0IHdvcmtcIiBpbiBzYWZhcmkgOSBhbmRcbiAgICAgICAgLy8gY2F1c2VzIGEgY3Jhc2ggKGh0dHBzOi8vcGFzdGViaW4uY29tL04yMVF6ZVFBKSB3aGVuIHRyeWluZyB0byBkZWJ1ZyBpdC5cbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCByZXN1bHQubGVuZ3RoOyBqKyspIGNhcHR1cmVzLnB1c2gobWF5YmVUb1N0cmluZyhyZXN1bHRbal0pKTtcbiAgICAgICAgdmFyIG5hbWVkQ2FwdHVyZXMgPSByZXN1bHQuZ3JvdXBzO1xuICAgICAgICBpZiAoZnVuY3Rpb25hbFJlcGxhY2UpIHtcbiAgICAgICAgICB2YXIgcmVwbGFjZXJBcmdzID0gW21hdGNoZWRdLmNvbmNhdChjYXB0dXJlcywgcG9zaXRpb24sIFMpO1xuICAgICAgICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHJlcGxhY2VyQXJncy5wdXNoKG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgICAgIHZhciByZXBsYWNlbWVudCA9IFN0cmluZyhyZXBsYWNlVmFsdWUuYXBwbHkodW5kZWZpbmVkLCByZXBsYWNlckFyZ3MpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXBsYWNlbWVudCA9IGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBTLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uID49IG5leHRTb3VyY2VQb3NpdGlvbikge1xuICAgICAgICAgIGFjY3VtdWxhdGVkUmVzdWx0ICs9IFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uLCBwb3NpdGlvbikgKyByZXBsYWNlbWVudDtcbiAgICAgICAgICBuZXh0U291cmNlUG9zaXRpb24gPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjdW11bGF0ZWRSZXN1bHQgKyBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbik7XG4gICAgfVxuICBdO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9