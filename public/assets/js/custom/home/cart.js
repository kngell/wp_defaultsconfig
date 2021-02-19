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
          console.log(response);
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
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2hvbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1zdWJzdGl0dXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZXhlYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtc3RpY2t5LWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZXhlYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5yZXBsYWNlLmpzIl0sIm5hbWVzIjpbInJlc3BvbnNpdmUiLCJpdGVtcyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIlBocFBsdWdpbiIsImVsZW1lbnQiLCJpbml0IiwicHJvdG90eXBlIiwic2V0dXBWYXJpYWJsZXMiLCJzZXR1cEV2ZW50cyIsIndyYXBwZXIiLCJmaW5kIiwiY291bnRfaXRlbXMiLCJjYXJ0IiwiYmFubmVyIiwibmV3UGhvbmUiLCJjYXJ0X2l0ZW1zIiwid2lzaGxpc3QiLCJ3aXNobGlzdF9pdGVtcyIsInN1YlRvdGFsIiwicGhwUGx1Z2luIiwiY3VycmVuY3kiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJvd2xDYXJvdXNlbCIsImxvb3AiLCJuYXYiLCJkb3RzIiwib24iLCJlIiwiaW5wdXQiLCIkIiwibmV4dCIsImRhdGEiLCJ0YWJsZSIsImlkIiwicGFyZW50cyIsInZhbCIsInVzZXIiLCJ1cmwiLCJkYXRhX3R5cGUiLCJyZXR1cm5fbW9kZSIsInBhcmFtcyIsImRpc3BsYXlBbGxEZXRhaWxzIiwiZGlzcGxheV9wcm9kdWN0IiwicmVzcG9uc2UiLCJlbHQiLCJpIiwib2xkdmFsIiwicmVzdWx0IiwicXR5IiwicGFyc2VJbnQiLCJwYXJlbnQiLCJodG1sIiwiZm9ybWF0IiwicGFyc2VGbG9hdCIsIm1zZyIsIml0ZW1fcHJpY2UiLCJkZWFsX3ByaWNlIiwicmVnIiwicmVwbGFjZSIsInByZXZlbnREZWZhdWx0IiwicHJldiIsImF0dHIiLCJtZXRob2QiLCJmcm0iLCJDYWxsX2NvbnRyb2xsZXIiLCJtYW5hZ2VSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJyZWZyZXNoX2RlYWxfcHJpY2UiLCJmaXJzdCIsInJlbW92ZSIsIm5iX2l0ZW1zIiwiY2hpbGRyZW4iLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwibGVuZ3RoIiwiZnJtX25hbWUiLCJhcHBlbmQiLCJwX3ByaWNlIiwiaXMiLCJzaG93IiwiZmFkZUluIiwiZGVsYXkiLCJuYl9pdGVtIiwiZF9wcmljZSIsImxhc3QiLCJoaWRlIiwiZm4iLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLElBQU1BLFVBQVUsR0FBRztBQUNqQixLQUFHO0FBQ0RDLFNBQUssRUFB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LDJEQUEyRDtBQUM5RDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1JZO0FBQ2Isb0NBQW9DLG1CQUFPLENBQUMsK0hBQWlEO0FBQzdGLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLHlCQUF5QixtQkFBTyxDQUFDLG1HQUFtQztBQUNwRSxzQkFBc0IsbUJBQU8sQ0FBQywyRkFBK0I7QUFDN0QsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DOztBQUU1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImpzL2N1c3RvbS9ob21lL2NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICAwOiB7XHJcbiAgICBpdGVtczogMSxcclxuICB9LFxyXG4gIDYwMDoge1xyXG4gICAgaXRlbXM6IDMsXHJcbiAgfSxcclxuICAxMDAwOiB7XHJcbiAgICBpdGVtczogNSxcclxuICB9LFxyXG59O1xyXG5pbXBvcnQgeyBkaXNwbGF5QWxsRGV0YWlscywgQ2FsbF9jb250cm9sbGVyIH0gZnJvbSBcImNvcmVqcy9mb3JtX2NydWRcIjtcclxuaW1wb3J0IHsgZ2V0X3Zpc2l0b3JzX2RhdGEsIHNlbmRfdmlzaXRvcnNfZGF0YSB9IGZyb20gXCJjb3JlanMvdmlzaXRvcnNcIjtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGZ1bmN0aW9uIFBocFBsdWdpbihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG4gIFBocFBsdWdpbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0dXBWYXJpYWJsZXMoKTtcclxuICAgIHRoaXMuc2V0dXBFdmVudHMoKTtcclxuICB9O1xyXG4gIFBocFBsdWdpbi5wcm90b3R5cGUuc2V0dXBWYXJpYWJsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLndyYXBwZXIgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNtYWluLXNpdGVcIik7XHJcbiAgICB0aGlzLmNvdW50X2l0ZW1zID0gdGhpcy5lbGVtZW50LmZpbmQoXCIuY2FydF9uYl9lbHRcIik7XHJcbiAgICB0aGlzLmNhcnQgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNjYXJ0XCIpO1xyXG4gICAgdGhpcy5iYW5uZXIgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNiYW5uZXItYXJlYVwiKTtcclxuICAgIHRoaXMubmV3UGhvbmUgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNuZXctcGhvbmVzXCIpO1xyXG4gICAgdGhpcy5jYXJ0X2l0ZW1zID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjY2FydF9pdGVtc1wiKTtcclxuICAgIHRoaXMud2lzaGxpc3QgPSB0aGlzLmVsZW1lbnQuZmluZChcIiN3aXNobGlzdFwiKTtcclxuICAgIHRoaXMud2lzaGxpc3RfaXRlbXMgPSB0aGlzLmVsZW1lbnQuZmluZChcIiN3aXNobGlzdC1pdGVtc1wiKTtcclxuICAgIHRoaXMuc3ViVG90YWwgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNzdWJfdG90YWxcIik7XHJcbiAgfTtcclxuICBQaHBQbHVnaW4ucHJvdG90eXBlLnNldHVwRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHBocFBsdWdpbiA9IHRoaXM7XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9DdXJyZW5jeSBmb3JtYXRcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGxldCBjdXJyZW5jeSA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChcImZyLUZSXCIsIHtcclxuICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgICAgY3VycmVuY3k6IFwiRVVSXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL093bCBjYXJvdXNlbFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9uZXcgcGhvbmVzXHJcbiAgICBwaHBQbHVnaW4ubmV3UGhvbmUuZmluZChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICByZXNwb25zaXZlOiByZXNwb25zaXZlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9RdHkgc2VjdGlvblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLmNhcnRfaXRlbXMub24oXCJjbGlja1wiLCBcIi5xdHktdXBcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgbGV0IGlucHV0ID0gJCh0aGlzKS5uZXh0KCk7XHJcbiAgICAgIC8vY2hhbmdlIHByaWNlIHVzaW5nIGFqYXhcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgdGFibGU6IFwicHJvZHVjdFwiLFxyXG4gICAgICAgIGlkOiAkKHRoaXMpXHJcbiAgICAgICAgICAucGFyZW50cyhcIi5xdHlcIilcclxuICAgICAgICAgIC5maW5kKFwiZm9ybVwiKVxyXG4gICAgICAgICAgLmZpbmQoXCJpbnB1dFtuYW1lPWl0ZW1faWRdXCIpXHJcbiAgICAgICAgICAudmFsKCksXHJcbiAgICAgICAgdXNlcjogXCJndWVzdFwiLFxyXG4gICAgICAgIHVybDogXCJmb3Jtcy9zaG93RGV0YWlsc1wiLFxyXG4gICAgICAgIGRhdGFfdHlwZTogXCJ2YWx1ZXNcIixcclxuICAgICAgICByZXR1cm5fbW9kZTogXCJkZXRhaWxzXCIsXHJcbiAgICAgICAgcGFyYW1zOiAkKHRoaXMpLFxyXG4gICAgICB9O1xyXG4gICAgICBkaXNwbGF5QWxsRGV0YWlscyhkYXRhLCBkaXNwbGF5X3Byb2R1Y3QpO1xyXG4gICAgICBmdW5jdGlvbiBkaXNwbGF5X3Byb2R1Y3QocmVzcG9uc2UsIGVsdCkge1xyXG4gICAgICAgIGlmIChpbnB1dC52YWwoKSA+PSAxICYmIGlucHV0LnZhbCgpIDw9IDkpIHtcclxuICAgICAgICAgIGlucHV0LnZhbChmdW5jdGlvbiAoaSwgb2xkdmFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiArK29sZHZhbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICAvLyAxLSBJbmNyZWFzZSBwcmljZSBvZiB0aGUgcHJvZHVjdFxyXG4gICAgICAgICAgICBsZXQgcXR5ID0gcGFyc2VJbnQoZWx0Lm5leHQoKS52YWwoKSk7XHJcbiAgICAgICAgICAgIGVsdFxyXG4gICAgICAgICAgICAgIC5wYXJlbnRzKFwiLnF0eVwiKVxyXG4gICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgIC5uZXh0KClcclxuICAgICAgICAgICAgICAuZmluZChcIi5wcm9kdWN0X3ByaWNlXCIpXHJcbiAgICAgICAgICAgICAgLmh0bWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LmZvcm1hdChcclxuICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChyZXNwb25zZS5tc2cuaXRlbV9wcmljZSAqIHF0eSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIDItIFNldCBzdWJ0b3RhbCBwcmljZVxyXG4gICAgICAgICAgICBwaHBQbHVnaW4uc3ViVG90YWxcclxuICAgICAgICAgICAgICAuZmluZChcIiNkZWFsLXByaWNlXCIpXHJcbiAgICAgICAgICAgICAgLmh0bWwoZnVuY3Rpb24gKGksIGRlYWxfcHJpY2UpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZWcgPSAvXFxzL2c7IC8vIC9bXlxcZF0rL2c7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuZm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHJlc3BvbnNlLm1zZy5pdGVtX3ByaWNlKSArXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgICAgIGRlYWxfcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJm5ic3A74oKsXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gLy9jbG9zaW5nIEFqYXggY2FsbFxyXG4gICAgfSk7XHJcblxyXG4gICAgcGhwUGx1Z2luLmNhcnRfaXRlbXMub24oXCJjbGlja1wiLCBcIi5xdHktZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBpbnB1dCA9ICQodGhpcykucHJldigpO1xyXG4gICAgICAvL2NoYW5nZSBwcmljZSB1c2luZyBhamF4XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHRhYmxlOiBcInByb2R1Y3RcIixcclxuICAgICAgICBpZDogJCh0aGlzKVxyXG4gICAgICAgICAgLnBhcmVudHMoXCIucXR5XCIpXHJcbiAgICAgICAgICAuZmluZChcImZvcm1cIilcclxuICAgICAgICAgIC5maW5kKFwiaW5wdXRbbmFtZT1pdGVtX2lkXVwiKVxyXG4gICAgICAgICAgLnZhbCgpLFxyXG4gICAgICAgIHVzZXI6IFwiZ3Vlc3RcIixcclxuICAgICAgICB1cmw6IFwiZm9ybXMvc2hvd0RldGFpbHNcIixcclxuICAgICAgICBkYXRhX3R5cGU6IFwidmFsdWVzXCIsXHJcbiAgICAgICAgcmV0dXJuX21vZGU6IFwiZGV0YWlsc1wiLFxyXG4gICAgICAgIHBhcmFtczogJCh0aGlzKSxcclxuICAgICAgfTtcclxuICAgICAgZGlzcGxheUFsbERldGFpbHMoZGF0YSwgZGlzcGxheV9wcm9kdWN0KTtcclxuICAgICAgZnVuY3Rpb24gZGlzcGxheV9wcm9kdWN0KHJlc3BvbnNlLCBlbHQpIHtcclxuICAgICAgICBpZiAoaW5wdXQudmFsKCkgPiAxICYmIGlucHV0LnZhbCgpIDw9IDEwKSB7XHJcbiAgICAgICAgICBpbnB1dC52YWwoZnVuY3Rpb24gKGksIG9sZHZhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLS1vbGR2YWw7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgLy8gMS0gSW5jcmVhc2UgcHJpY2Ugb2YgdGhlIHByb2R1Y3RcclxuICAgICAgICAgICAgbGV0IHF0eSA9IHBhcnNlSW50KGVsdC5wcmV2KCkudmFsKCkpO1xyXG4gICAgICAgICAgICBlbHRcclxuICAgICAgICAgICAgICAucGFyZW50cyhcIi5xdHlcIilcclxuICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAubmV4dCgpXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCIucHJvZHVjdF9wcmljZVwiKVxyXG4gICAgICAgICAgICAgIC5odG1sKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQoXHJcbiAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocmVzcG9uc2UubXNnLml0ZW1fcHJpY2UgKiBxdHkpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAyLSBTZXQgc3VidG90YWwgcHJpY2VcclxuICAgICAgICAgICAgcGhwUGx1Z2luLnN1YlRvdGFsXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCIjZGVhbC1wcmljZVwiKVxyXG4gICAgICAgICAgICAgIC5odG1sKGZ1bmN0aW9uIChpLCBkZWFsX3ByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVnID0gL1xccy9nOyAvLyAvW15cXGRdKy9nO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LmZvcm1hdChcclxuICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgICBkZWFsX3ByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShyZWcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCImbmJzcDvigqxcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgKSAtIHBhcnNlRmxvYXQocmVzcG9uc2UubXNnLml0ZW1fcHJpY2UpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSAvL2Nsb3NpbmdcclxuICAgIH0pO1xyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9EZWxldGUgY2FydFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLndyYXBwZXIub24oXCJjbGlja1wiLCBcIiNjYXJ0X2l0ZW1zIC5kZWxldGVCdG5cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAkKHRoaXMpLmh0bWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgdXJsOiBcImd1ZXN0cy9kZWxldGVcIixcclxuICAgICAgICBpZDogJCh0aGlzKS5hdHRyKFwiaWRcIiksXHJcbiAgICAgICAgdGFibGU6IFwiY2FydFwiLFxyXG4gICAgICAgIG1ldGhvZDogXCJkZWxldGVfY2FydFwiLFxyXG4gICAgICAgIGZybTogJCh0aGlzKS5wYXJlbnQoKSxcclxuICAgICAgICBwYXJhbXM6ICQodGhpcyksXHJcbiAgICAgIH07XHJcbiAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBtYW5hZ2VSZXNwb25zZSk7XHJcbiAgICAgIGZ1bmN0aW9uIG1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCBlbHQpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICByZWZyZXNoX2RlYWxfcHJpY2UoZWx0KTtcclxuICAgICAgICAgIGVsdC5wYXJlbnRzKFwiLnJvd1wiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgcGhwUGx1Z2luLmNvdW50X2l0ZW1zLmh0bWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQocGhwUGx1Z2luLmNvdW50X2l0ZW1zLmh0bWwoKSkgLSAxO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBwaHBQbHVnaW4uY2FydC5maW5kKFwiLmNhcnRfbmJfZWx0XCIpLmh0bWwoZnVuY3Rpb24gKGksIG5iX2l0ZW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuYl9pdGVtcyAtIDE7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHBocFBsdWdpbi5uZXdQaG9uZVxyXG4gICAgICAgICAgICAuZmluZChcclxuICAgICAgICAgICAgICBcIi5hZGRfdG9fY2FydF9mcm0gaW5wdXRbdmFsdWU9J1wiICtcclxuICAgICAgICAgICAgICAgIGVsdC5wYXJlbnQoKS5jaGlsZHJlbihcIjpmaXJzdFwiKS52YWwoKSArXHJcbiAgICAgICAgICAgICAgICBcIiddXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgLmZpbmQoXCJidXR0b25bdHlwZT1zdWJtaXRdXCIpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcImJ0bi13YXJuaW5nXCIpXHJcbiAgICAgICAgICAgIC5odG1sKFwiQWRkIHRvIENhcnRcIik7XHJcbiAgICAgICAgICBpZiAocGhwUGx1Z2luLmNhcnRfaXRlbXMuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBwaHBQbHVnaW4uY2FydF9pdGVtcy5odG1sKHJlc3BvbnNlLm1zZyAhPSAxID8gcmVzcG9uc2UubXNnIDogXCJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vU2F2ZSBmb3IgbGF0ZXJcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHBocFBsdWdpbi53cmFwcGVyLm9uKFxyXG4gICAgICBcImNsaWNrXCIsXHJcbiAgICAgIFwiI2NhcnRfaXRlbXMgLnF0eSBidXR0b25bdHlwZT1idXR0b25dXCIsXHJcbiAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICB1cmw6IFwiZ3Vlc3RzL3RvZ2dsZVdpc2hsaXN0QW5kY0NhcnRcIixcclxuICAgICAgICAgIGZybTogJCh0aGlzKS5wcmV2KCksXHJcbiAgICAgICAgICBmcm1fbmFtZTpcclxuICAgICAgICAgICAgXCJkZWxldGUtY2FydC1pdGVtLWZybVwiICtcclxuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KCkuZmluZChcImlucHV0W3R5cGU9aGlkZGVuXVwiKS52YWwoKSxcclxuICAgICAgICAgIHRhYmxlOiBcIndpc2hsaXN0XCIsXHJcbiAgICAgICAgICBwYXJhbXM6ICQodGhpcyksXHJcbiAgICAgICAgICBtZXRob2Q6IFwic2F2ZV9Gb3JfTGF0ZXJcIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBtYW5hZ2VSZXNwb25zZSk7XHJcbiAgICAgICAgZnVuY3Rpb24gbWFuYWdlUmVzcG9uc2UocmVzcG9uc2UsIGVsdCkge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi53aXNobGlzdF9pdGVtcy5hcHBlbmQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5tc2dbMF1bMF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwaHBQbHVnaW4uY2FydC5maW5kKFwiLnByb2R1Y3RfcHJpY2VcIikuaHRtbChmdW5jdGlvbiAoaSwgcF9wcmljZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQocGFyc2VGbG9hdChwX3ByaWNlKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocGhwUGx1Z2luLndpc2hsaXN0LmlzKFwiOmhpZGRlblwiKSkge1xyXG4gICAgICAgICAgICAgIHBocFBsdWdpbi53aXNobGlzdC5zaG93KCkuZmFkZUluKCkuZGVsYXkoNTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWZyZXNoX2RlYWxfcHJpY2UoZWx0KTtcclxuICAgICAgICAgICAgZWx0LnBhcmVudHMoXCIucm93XCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5jb3VudF9pdGVtcy5odG1sKGZ1bmN0aW9uIChpLCBuYl9pdGVtKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG5iX2l0ZW0gLSAxKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5jYXJ0LmZpbmQoXCIuY2FydF9uYl9lbHRcIikuaHRtbChmdW5jdGlvbiAoaSwgbmJfaXRlbSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChuYl9pdGVtIC0gMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwaHBQbHVnaW4ubmV3UGhvbmVcclxuICAgICAgICAgICAgICAuZmluZChcclxuICAgICAgICAgICAgICAgIFwiLmFkZF90b19jYXJ0X2ZybSBpbnB1dFt2YWx1ZT0nXCIgK1xyXG4gICAgICAgICAgICAgICAgICBlbHQucHJldigpLmNoaWxkcmVuKFwiOmZpcnN0XCIpLnZhbCgpICtcclxuICAgICAgICAgICAgICAgICAgXCInXVwiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgIC5maW5kKFwiYnV0dG9uW3R5cGU9c3VibWl0XVwiKVxyXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYnRuLXdhcm5pbmdcIilcclxuICAgICAgICAgICAgICAuaHRtbChcIkFkZCB0byBDYXJ0XCIpO1xyXG4gICAgICAgICAgICBpZiAocGhwUGx1Z2luLmNhcnRfaXRlbXMuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgIHBocFBsdWdpbi5jYXJ0X2l0ZW1zLmh0bWwoXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5tc2dbMV0gIT0gMSA/IHJlc3BvbnNlLm1zZ1sxXSA6IFwiXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgZnVuY3Rpb24gcmVmcmVzaF9kZWFsX3ByaWNlKGVsdCkge1xyXG4gICAgICBlbHRcclxuICAgICAgICAucGFyZW50cyhcIiNjYXJ0X2l0ZW1zXCIpXHJcbiAgICAgICAgLm5leHQoKVxyXG4gICAgICAgIC5maW5kKFwiI2RlYWwtcHJpY2VcIilcclxuICAgICAgICAuaHRtbChmdW5jdGlvbiAoaSwgZF9wcmljZSkge1xyXG4gICAgICAgICAgbGV0IHJlZyA9IC9cXHMvZztcclxuICAgICAgICAgIGxldCBwX3ByaWNlID0gZWx0XHJcbiAgICAgICAgICAgIC5wYXJlbnRzKFwiLnJvd1wiKVxyXG4gICAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgICAubGFzdCgpXHJcbiAgICAgICAgICAgIC5maW5kKFwiLnByb2R1Y3RfcHJpY2VcIilcclxuICAgICAgICAgICAgLmh0bWwoKTtcclxuICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQoXHJcbiAgICAgICAgICAgIHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgZF9wcmljZVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJm5ic3A74oKsXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICkgLVxyXG4gICAgICAgICAgICAgIHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgICBwX3ByaWNlXHJcbiAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZShcIiZuYnNwO+KCrFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL0RlbGV0ZSB3aGlzaGxpc3QgaXRlbXNcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHBocFBsdWdpbi53cmFwcGVyLm9uKFwiY2xpY2tcIiwgXCIjd2lzaGxpc3QtaXRlbXMgLmRlbGV0ZUJ0blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQodGhpcykuaHRtbChcIlBsZWFzZSB3YWl0Li4uXCIpO1xyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB1cmw6IFwiZ3Vlc3RzL2RlbGV0ZVwiLFxyXG4gICAgICAgIGlkOiAkKHRoaXMpLmF0dHIoXCJpZFwiKSxcclxuICAgICAgICB0YWJsZTogXCJ3aXNobGlzdFwiLFxyXG4gICAgICAgIG1ldGhvZDogXCJkZWxldGVfY2FydFwiLFxyXG4gICAgICAgIGZybTogJCh0aGlzKS5wYXJlbnQoKSxcclxuICAgICAgICBwYXJhbXM6ICQodGhpcyksXHJcbiAgICAgIH07XHJcbiAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBtYW5hZ2VSZXNwb25zZSk7XHJcbiAgICAgIGZ1bmN0aW9uIG1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCBlbHQpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBlbHQucGFyZW50cyhcIi5yb3dcIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICAgIGlmIChwaHBQbHVnaW4ud2lzaGxpc3RfaXRlbXMuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBwaHBQbHVnaW4ud2lzaGxpc3QuaGlkZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcGhwUGx1Z2luLm5ld1Bob25lXHJcbiAgICAgICAgICAgIC5maW5kKFxyXG4gICAgICAgICAgICAgIFwiLmFkZF90b19jYXJ0X2ZybSBpbnB1dFt2YWx1ZT0nXCIgK1xyXG4gICAgICAgICAgICAgICAgZWx0LnBhcmVudCgpLmNoaWxkcmVuKFwiOmZpcnN0XCIpLnZhbCgpICtcclxuICAgICAgICAgICAgICAgIFwiJ11cIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAuZmluZChcImJ1dHRvblt0eXBlPXN1Ym1pdF1cIilcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwiYnRuLXdhcm5pbmdcIilcclxuICAgICAgICAgICAgLmh0bWwoXCJBZGQgdG8gQ2FydFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9BZGQgdG8gY2FydCBmcm9tIHdoaXNobGlzdFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLndyYXBwZXIub24oXHJcbiAgICAgIFwiY2xpY2tcIixcclxuICAgICAgXCIjd2lzaGxpc3QtaXRlbXMgLnF0eSBidXR0b25bdHlwZT1idXR0b25dXCIsXHJcbiAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICB1cmw6IFwiZ3Vlc3RzL3RvZ2dsZVdpc2hsaXN0QW5kY0NhcnRcIixcclxuICAgICAgICAgIGZybTogJCh0aGlzKS5wcmV2KCksXHJcbiAgICAgICAgICBmcm1fbmFtZTpcclxuICAgICAgICAgICAgXCJkZWxldGUtY2FydC1pdGVtLWZybVwiICtcclxuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KCkuZmluZChcImlucHV0W3R5cGU9aGlkZGVuXVwiKS52YWwoKSxcclxuICAgICAgICAgIHRhYmxlOiBcImNhcnRcIixcclxuICAgICAgICAgIHBhcmFtczogJCh0aGlzKSxcclxuICAgICAgICAgIG1ldGhvZDogXCJhZGRfVG9fQ2FydFwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIG1hbmFnZVJlc3BvbnNlKTtcclxuICAgICAgICBmdW5jdGlvbiBtYW5hZ2VSZXNwb25zZShyZXNwb25zZSwgZWx0KSB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgY2FydCBpcyBlbXB0eVxyXG4gICAgICAgICAgICBpZiAocGhwUGx1Z2luLmNhcnRfaXRlbXMuZmluZChcIiNlbXB0eS1jYXJ0XCIpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgcGhwUGx1Z2luLmNhcnRfaXRlbXMuZmluZChcIiNlbXB0eS1jYXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vYXBwZW5kIGNhcnRcclxuICAgICAgICAgICAgcGhwUGx1Z2luLmNhcnRfaXRlbXMuYXBwZW5kKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UubXNnWzBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gZm9ybWF0IHByb2R1Y3QgcHJpY2VcclxuICAgICAgICAgICAgcGhwUGx1Z2luLndyYXBwZXJcclxuICAgICAgICAgICAgICAuZmluZChcIi5wcm9kdWN0X3ByaWNlXCIpXHJcbiAgICAgICAgICAgICAgLmh0bWwoZnVuY3Rpb24gKGksIHBfcHJpY2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQocGFyc2VGbG9hdChwX3ByaWNlKSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vcmVmcmVzaCBkZWFsIHByaWNlXHJcbiAgICAgICAgICAgIHBocFBsdWdpbi53cmFwcGVyLmZpbmQoXCIjZGVhbC1wcmljZVwiKS5odG1sKGZ1bmN0aW9uIChpLCBkX3ByaWNlKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHJlZyA9IC9cXHMvZztcclxuICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuZm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgZF9wcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIiZuYnNwO+KCrFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgKSArIHBhcnNlRmxvYXQocmVzcG9uc2UubXNnWzFdKVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL3JlZnJlc2ggbmIgaXRlbXMgaW4gdGhlIGNhcnRcclxuICAgICAgICAgICAgcGhwUGx1Z2luLmNvdW50X2l0ZW1zLmh0bWwoZnVuY3Rpb24gKGksIG5iX2l0ZW0pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQobmJfaXRlbSkgKyAxO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcGhwUGx1Z2luLndyYXBwZXIuZmluZChcIi5jYXJ0X25iX2VsdFwiKS5odG1sKGZ1bmN0aW9uIChpLCBuYl9pdGVtKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG5iX2l0ZW0pICsgMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGVsdC5wYXJlbnRzKFwiLnJvd1wiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBpZiAocGhwUGx1Z2luLndpc2hsaXN0X2l0ZW1zLmNoaWxkcmVuKCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICBwaHBQbHVnaW4ud2lzaGxpc3QuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5uZXdQaG9uZVxyXG4gICAgICAgICAgICAgIC5maW5kKFxyXG4gICAgICAgICAgICAgICAgXCIuYWRkX3RvX2NhcnRfZnJtIGlucHV0W3ZhbHVlPSdcIiArXHJcbiAgICAgICAgICAgICAgICAgIGVsdC5wcmV2KCkuY2hpbGRyZW4oXCI6Zmlyc3RcIikudmFsKCkgK1xyXG4gICAgICAgICAgICAgICAgICBcIiddXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCJidXR0b25bdHlwZT1zdWJtaXRdXCIpXHJcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXdhcm5pbmdcIilcclxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJidG4tc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgIC5odG1sKFwiQWRkIHRvIENhcnRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gICQuZm4ucGhwUGx1Z2luID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIG5ldyBQaHBQbHVnaW4odGhpcyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG4gICQoXCIjYm9keVwiKS5waHBQbHVnaW4oKTtcclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjaGFyQXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZScpLmNoYXJBdDtcblxuLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUywgaW5kZXgsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIGluZGV4ICsgKHVuaWNvZGUgPyBjaGFyQXQoUywgaW5kZXgpLmxlbmd0aCA6IDEpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3MgbW92ZWQgdG8gZW50cnkgcG9pbnRzXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgLy8gI21hdGNoIHdvcmtzIGZpbmUgYmVjYXVzZSBpdCBqdXN0IHJldHVybiB0aGUgZXhlYyByZXN1bHRzLCBldmVuIGlmIGl0IGhhc1xuICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgdmFyIHJlID0gLy4vO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xufSk7XG5cbi8vIElFIDw9IDExIHJlcGxhY2VzICQwIHdpdGggdGhlIHdob2xlIG1hdGNoLCBhcyBpZiBpdCB3YXMgJCZcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYwMjQ2NjYvZ2V0dGluZy1pZS10by1yZXBsYWNlLWEtcmVnZXgtd2l0aC10aGUtbGl0ZXJhbC1zdHJpbmctMFxudmFyIFJFUExBQ0VfS0VFUFNfJDAgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ2EnLnJlcGxhY2UoLy4vLCAnJDAnKSA9PT0gJyQwJztcbn0pKCk7XG5cbnZhciBSRVBMQUNFID0gd2VsbEtub3duU3ltYm9sKCdyZXBsYWNlJyk7XG4vLyBTYWZhcmkgPD0gMTMuMC4zKD8pIHN1YnN0aXR1dGVzIG50aCBjYXB0dXJlIHdoZXJlIG4+bSB3aXRoIGFuIGVtcHR5IHN0cmluZ1xudmFyIFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFID0gKGZ1bmN0aW9uICgpIHtcbiAgaWYgKC8uL1tSRVBMQUNFXSkge1xuICAgIHJldHVybiAvLi9bUkVQTEFDRV0oJ2EnLCAnJDAnKSA9PT0gJyc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSkoKTtcblxuLy8gQ2hyb21lIDUxIGhhcyBhIGJ1Z2d5IFwic3BsaXRcIiBpbXBsZW1lbnRhdGlvbiB3aGVuIFJlZ0V4cCNleGVjICE9PSBuYXRpdmVFeGVjXG4vLyBXZWV4IEpTIGhhcyBmcm96ZW4gYnVpbHQtaW4gcHJvdG90eXBlcywgc28gdXNlIHRyeSAvIGNhdGNoIHdyYXBwZXJcbnZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUgPSAvKD86KS87XG4gIHZhciBvcmlnaW5hbEV4ZWMgPSByZS5leGVjO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3JpZ2luYWxFeGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIHZhciByZXN1bHQgPSAnYWInLnNwbGl0KHJlKTtcbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggIT09IDIgfHwgcmVzdWx0WzBdICE9PSAnYScgfHwgcmVzdWx0WzFdICE9PSAnYic7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMsIHNoYW0pIHtcbiAgdmFyIFNZTUJPTCA9IHdlbGxLbm93blN5bWJvbChLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuXG4gICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgLy8gV2UgY2FuJ3QgdXNlIHJlYWwgcmVnZXggaGVyZSBzaW5jZSBpdCBjYXVzZXMgZGVvcHRpbWl6YXRpb25cbiAgICAgIC8vIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uIGluIFY4XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzA2XG4gICAgICByZSA9IHt9O1xuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgICAgcmUuZmxhZ3MgPSAnJztcbiAgICAgIHJlW1NZTUJPTF0gPSAvLi9bU1lNQk9MXTtcbiAgICB9XG5cbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyBleGVjQ2FsbGVkID0gdHJ1ZTsgcmV0dXJuIG51bGw7IH07XG5cbiAgICByZVtTWU1CT0xdKCcnKTtcbiAgICByZXR1cm4gIWV4ZWNDYWxsZWQ7XG4gIH0pO1xuXG4gIGlmIChcbiAgICAhREVMRUdBVEVTX1RPX1NZTUJPTCB8fFxuICAgICFERUxFR0FURVNfVE9fRVhFQyB8fFxuICAgIChLRVkgPT09ICdyZXBsYWNlJyAmJiAhKFxuICAgICAgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgJiZcbiAgICAgIFJFUExBQ0VfS0VFUFNfJDAgJiZcbiAgICAgICFSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRVxuICAgICkpIHx8XG4gICAgKEtFWSA9PT0gJ3NwbGl0JyAmJiAhU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDKVxuICApIHtcbiAgICB2YXIgbmF0aXZlUmVnRXhwTWV0aG9kID0gLy4vW1NZTUJPTF07XG4gICAgdmFyIG1ldGhvZHMgPSBleGVjKFNZTUJPTCwgJydbS0VZXSwgZnVuY3Rpb24gKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICBpZiAocmVnZXhwLmV4ZWMgPT09IHJlZ2V4cEV4ZWMpIHtcbiAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgLy8gcG9seWZpbGxlZCBmdW5jdGlvbiksIGxlYXNpbmcgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZVJlZ0V4cE1ldGhvZC5jYWxsKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVNZXRob2QuY2FsbChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlIH07XG4gICAgfSwge1xuICAgICAgUkVQTEFDRV9LRUVQU18kMDogUkVQTEFDRV9LRUVQU18kMCxcbiAgICAgIFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFOiBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRVxuICAgIH0pO1xuICAgIHZhciBzdHJpbmdNZXRob2QgPSBtZXRob2RzWzBdO1xuICAgIHZhciByZWdleE1ldGhvZCA9IG1ldGhvZHNbMV07XG5cbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmluZ01ldGhvZCk7XG4gICAgcmVkZWZpbmUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByZWdleE1ldGhvZC5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJlZ2V4TWV0aG9kLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cblxuICBpZiAoc2hhbSkgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KFJlZ0V4cC5wcm90b3R5cGVbU1lNQk9MXSwgJ3NoYW0nLCB0cnVlKTtcbn07XG4iLCJ2YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgcmVwbGFjZSA9ICcnLnJlcGxhY2U7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFMgPSAvXFwkKFskJidgXXxcXGRcXGQ/fDxbXj5dKj4pL2c7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQgPSAvXFwkKFskJidgXXxcXGRcXGQ/KS9nO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldHN1YnN0aXR1dGlvblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWF0Y2hlZCwgc3RyLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VtZW50KSB7XG4gIHZhciB0YWlsUG9zID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgdmFyIG0gPSBjYXB0dXJlcy5sZW5ndGg7XG4gIHZhciBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQ7XG4gIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBuYW1lZENhcHR1cmVzID0gdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTO1xuICB9XG4gIHJldHVybiByZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICB2YXIgY2FwdHVyZTtcbiAgICBzd2l0Y2ggKGNoLmNoYXJBdCgwKSkge1xuICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICBjYXNlICcmJzogcmV0dXJuIG1hdGNoZWQ7XG4gICAgICBjYXNlICdgJzogcmV0dXJuIHN0ci5zbGljZSgwLCBwb3NpdGlvbik7XG4gICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgY2FzZSAnPCc6XG4gICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW2NoLnNsaWNlKDEsIC0xKV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDogLy8gXFxkXFxkP1xuICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgdmFyIGYgPSBmbG9vcihuIC8gMTApO1xuICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgaWYgKGYgPD0gbSkgcmV0dXJuIGNhcHR1cmVzW2YgLSAxXSA9PT0gdW5kZWZpbmVkID8gY2guY2hhckF0KDEpIDogY2FwdHVyZXNbZiAtIDFdICsgY2guY2hhckF0KDEpO1xuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuICAgICAgICBjYXB0dXJlID0gY2FwdHVyZXNbbiAtIDFdO1xuICAgIH1cbiAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICB9KTtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vY2xhc3NvZi1yYXcnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9yZWdleHAtZXhlYycpO1xuXG4vLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciByZXN1bHQgPSBleGVjLmNhbGwoUiwgUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gIH1cblxuICByZXR1cm4gcmVnZXhwRXhlYy5jYWxsKFIsIFMpO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9yZWdleHAtZmxhZ3MnKTtcbnZhciBzdGlja3lIZWxwZXJzID0gcmVxdWlyZSgnLi9yZWdleHAtc3RpY2t5LWhlbHBlcnMnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvO1xuICB2YXIgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTEubGFzdEluZGV4ICE9PSAwIHx8IHJlMi5sYXN0SW5kZXggIT09IDA7XG59KSgpO1xuXG52YXIgVU5TVVBQT1JURURfWSA9IHN0aWNreUhlbHBlcnMuVU5TVVBQT1JURURfWSB8fCBzdGlja3lIZWxwZXJzLkJST0tFTl9DQVJFVDtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQgfHwgVU5TVVBQT1JURURfWTtcblxuaWYgKFBBVENIKSB7XG4gIHBhdGNoZWRFeGVjID0gZnVuY3Rpb24gZXhlYyhzdHIpIHtcbiAgICB2YXIgcmUgPSB0aGlzO1xuICAgIHZhciBsYXN0SW5kZXgsIHJlQ29weSwgbWF0Y2gsIGk7XG4gICAgdmFyIHN0aWNreSA9IFVOU1VQUE9SVEVEX1kgJiYgcmUuc3RpY2t5O1xuICAgIHZhciBmbGFncyA9IHJlZ2V4cEZsYWdzLmNhbGwocmUpO1xuICAgIHZhciBzb3VyY2UgPSByZS5zb3VyY2U7XG4gICAgdmFyIGNoYXJzQWRkZWQgPSAwO1xuICAgIHZhciBzdHJDb3B5ID0gc3RyO1xuXG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgZmxhZ3MgPSBmbGFncy5yZXBsYWNlKCd5JywgJycpO1xuICAgICAgaWYgKGZsYWdzLmluZGV4T2YoJ2cnKSA9PT0gLTEpIHtcbiAgICAgICAgZmxhZ3MgKz0gJ2cnO1xuICAgICAgfVxuXG4gICAgICBzdHJDb3B5ID0gU3RyaW5nKHN0cikuc2xpY2UocmUubGFzdEluZGV4KTtcbiAgICAgIC8vIFN1cHBvcnQgYW5jaG9yZWQgc3RpY2t5IGJlaGF2aW9yLlxuICAgICAgaWYgKHJlLmxhc3RJbmRleCA+IDAgJiYgKCFyZS5tdWx0aWxpbmUgfHwgcmUubXVsdGlsaW5lICYmIHN0cltyZS5sYXN0SW5kZXggLSAxXSAhPT0gJ1xcbicpKSB7XG4gICAgICAgIHNvdXJjZSA9ICcoPzogJyArIHNvdXJjZSArICcpJztcbiAgICAgICAgc3RyQ29weSA9ICcgJyArIHN0ckNvcHk7XG4gICAgICAgIGNoYXJzQWRkZWQrKztcbiAgICAgIH1cbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBzdHIgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14oPzonICsgc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgfVxuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlLmxhc3RJbmRleDtcblxuICAgIG1hdGNoID0gbmF0aXZlRXhlYy5jYWxsKHN0aWNreSA/IHJlQ29weSA6IHJlLCBzdHJDb3B5KTtcblxuICAgIGlmIChzdGlja3kpIHtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBtYXRjaC5pbnB1dCA9IG1hdGNoLmlucHV0LnNsaWNlKGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaC5pbmRleCA9IHJlLmxhc3RJbmRleDtcbiAgICAgICAgcmUubGFzdEluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgIH0gZWxzZSByZS5sYXN0SW5kZXggPSAwO1xuICAgIH0gZWxzZSBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZS5sYXN0SW5kZXggPSByZS5nbG9iYWwgPyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCA6IGxhc3RJbmRleDtcbiAgICB9XG4gICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAgIC8vIGZvciBOUENHLCBsaWtlIElFOC4gTk9URTogVGhpcyBkb2Vzbicgd29yayBmb3IgLyguPyk/L1xuICAgICAgbmF0aXZlUmVwbGFjZS5jYWxsKG1hdGNoWzBdLCByZUNvcHksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hlZEV4ZWM7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLmZsYWdzYCBnZXR0ZXIgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0LXJlZ2V4cC5wcm90b3R5cGUuZmxhZ3Ncbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICBpZiAodGhhdC5kb3RBbGwpIHJlc3VsdCArPSAncyc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vZmFpbHMnKTtcblxuLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCdhJywgJ3knKSAtPiAvYS95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3IsXG4vLyBzbyB3ZSB1c2UgYW4gaW50ZXJtZWRpYXRlIGZ1bmN0aW9uLlxuZnVuY3Rpb24gUkUocywgZikge1xuICByZXR1cm4gUmVnRXhwKHMsIGYpO1xufVxuXG5leHBvcnRzLlVOU1VQUE9SVEVEX1kgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgnYScsICd5JykgLT4gL2EveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG4gIHZhciByZSA9IFJFKCdhJywgJ3knKTtcbiAgcmUubGFzdEluZGV4ID0gMjtcbiAgcmV0dXJuIHJlLmV4ZWMoJ2FiY2QnKSAhPSBudWxsO1xufSk7XG5cbmV4cG9ydHMuQlJPS0VOX0NBUkVUID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03NzM2ODdcbiAgdmFyIHJlID0gUkUoJ15yJywgJ2d5Jyk7XG4gIHJlLmxhc3RJbmRleCA9IDI7XG4gIHJldHVybiByZS5leGVjKCdzdHInKSAhPSBudWxsO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBleGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLmV4ZWNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLmV4ZWNcbiQoeyB0YXJnZXQ6ICdSZWdFeHAnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAvLi8uZXhlYyAhPT0gZXhlYyB9LCB7XG4gIGV4ZWM6IGV4ZWNcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgZ2V0U3Vic3RpdHV0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1zdWJzdGl0dXRpb24nKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxudmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xuXG4vLyBAQHJlcGxhY2UgbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKFJFUExBQ0UsIG5hdGl2ZVJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSwgcmVhc29uKSB7XG4gIHZhciBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA9IHJlYXNvbi5SRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRTtcbiAgdmFyIFJFUExBQ0VfS0VFUFNfJDAgPSByZWFzb24uUkVQTEFDRV9LRUVQU18kMDtcbiAgdmFyIFVOU0FGRV9TVUJTVElUVVRFID0gUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgPyAnJCcgOiAnJDAnO1xuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUucmVwbGFjZWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGxhY2VcbiAgICBmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciByZXBsYWNlciA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgICAgcmV0dXJuIHJlcGxhY2VyICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyByZXBsYWNlci5jYWxsKHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG4gICAgICAgIDogbmF0aXZlUmVwbGFjZS5jYWxsKFN0cmluZyhPKSwgc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEByZXBsYWNlXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICBpZiAoXG4gICAgICAgICghUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgJiYgUkVQTEFDRV9LRUVQU18kMCkgfHxcbiAgICAgICAgKHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdzdHJpbmcnICYmIHJlcGxhY2VWYWx1ZS5pbmRleE9mKFVOU0FGRV9TVUJTVElUVVRFKSA9PT0gLTEpXG4gICAgICApIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVSZXBsYWNlLCByZWdleHAsIHRoaXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuXG4gICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSB0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgaWYgKCFmdW5jdGlvbmFsUmVwbGFjZSkgcmVwbGFjZVZhbHVlID0gU3RyaW5nKHJlcGxhY2VWYWx1ZSk7XG5cbiAgICAgIHZhciBnbG9iYWwgPSByeC5nbG9iYWw7XG4gICAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBicmVhaztcblxuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgaWYgKCFnbG9iYWwpIGJyZWFrO1xuXG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWNjdW11bGF0ZWRSZXN1bHQgPSAnJztcbiAgICAgIHZhciBuZXh0U291cmNlUG9zaXRpb24gPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbaV07XG5cbiAgICAgICAgdmFyIG1hdGNoZWQgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4KG1pbih0b0ludGVnZXIocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgdmFyIGNhcHR1cmVzID0gW107XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAvLyBidXQgZm9yIHNvbWUgcmVhc29uIGBuYXRpdmVTbGljZS5jYWxsKHJlc3VsdCwgMSwgcmVzdWx0Lmxlbmd0aClgIChjYWxsZWQgaW5cbiAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykgY2FwdHVyZXMucHVzaChtYXliZVRvU3RyaW5nKHJlc3VsdFtqXSkpO1xuICAgICAgICB2YXIgbmFtZWRDYXB0dXJlcyA9IHJlc3VsdC5ncm91cHM7XG4gICAgICAgIGlmIChmdW5jdGlvbmFsUmVwbGFjZSkge1xuICAgICAgICAgIHZhciByZXBsYWNlckFyZ3MgPSBbbWF0Y2hlZF0uY29uY2F0KGNhcHR1cmVzLCBwb3NpdGlvbiwgUyk7XG4gICAgICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkgcmVwbGFjZXJBcmdzLnB1c2gobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VWYWx1ZS5hcHBseSh1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIFMsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPj0gbmV4dFNvdXJjZVBvc2l0aW9uKSB7XG4gICAgICAgICAgYWNjdW11bGF0ZWRSZXN1bHQgKz0gUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24sIHBvc2l0aW9uKSArIHJlcGxhY2VtZW50O1xuICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1bXVsYXRlZFJlc3VsdCArIFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICB9XG4gIF07XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=