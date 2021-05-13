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
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var corejs_form_crud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! corejs/form_crud */ "./src/assets/js/core/form_crud.js");
/* harmony import */ var corejs_user_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! corejs/user_cart */ "./src/assets/js/core/user_cart.js");
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
  });

  _defineProperty(this, "_setupEvents", function () {
    var phpPlugin = _this; //=======================================================================
    //Display user cart items
    //=======================================================================

    var display = new corejs_user_cart__WEBPACK_IMPORTED_MODULE_8__.default(phpPlugin.wrapper, phpPlugin.header);

    display._display_cart(); //=======================================================================
    //Owl carousel
    //=======================================================================
    //new phones


    phpPlugin.wrapper.find("#new-phones").find(".owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      responsive: responsive
    }); //=======================================================================
    //Refresh deal price
    //=======================================================================

    function refresh_deal_price(elt) {
      elt.parents("#cart_items").next().find("#deal-price").html(function (i, d_price) {
        var p_price = parseFloat(display._parseLocaleNumber(elt.parents(".row").first().last().find(".product_price").html(), "de"));

        if (d_price.startsWith("EUR")) {
          d_price = parseFloat(d_price.match(/[0-9]+/g)[0]);
        } else {
          d_price = parseFloat(display._parseLocaleNumber(d_price, "de"));
        }

        console.log(d_price, " ", p_price);
        return display._currency().format(d_price - p_price);
      });
    } //=======================================================================
    //Qty section
    //=======================================================================


    phpPlugin.wrapper.find("#cart_items").on("click", ".qty-up", function (e) {
      var input = $(this).next();
      var item_id = $(this).parents(".qty").find("form").find("input[name=item_id]").val(); //change price using ajax

      var data = {
        table: "products",
        id: item_id,
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
            (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_7__.Call)({
              url: "guests/call",
              params: {
                qty_up: "ok",
                item_id: item_id,
                qty: parseInt(oldval) + 1,
                method: "update_cart",
                table: "cart"
              }
            });
            return ++oldval;
          });

          if (response.result == "success") {
            // 1- Increase price of the product
            var qty = parseInt(elt.next().val());
            elt.parents(".qty").parent().next().find(".product_price").html(function () {
              return display._currency().format(parseFloat(response.msg.p_regular_price * qty));
            }); // 2- Set subtotal price

            phpPlugin.wrapper.find("#deal-price").html(function (i, deal_price) {
              return display._currency().format(parseFloat(response.msg.p_regular_price) + display._parseLocaleNumber(deal_price, "de"));
            });
          }
        }
      } //closing Ajax call

    }); // Qty down

    phpPlugin.wrapper.find("#cart_items").on("click", ".qty-down", function (e) {
      e.preventDefault();
      var input = $(this).prev();
      var item_id = $(this).parents(".qty").find("form").find("input[name=item_id]").val(); //change price using ajax

      var data = {
        table: "products",
        id: item_id,
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
            (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_7__.Call)({
              url: "guests/call",
              params: {
                qty_up: "ok",
                item_id: item_id,
                qty: parseInt(oldval) - 1,
                method: "update_cart",
                table: "cart"
              }
            });
            return --oldval;
          });

          if (response.result == "success") {
            // 1- Increase price of the product
            var qty = parseInt(elt.prev().val());
            elt.parents(".qty").parent().next().find(".product_price").html(function () {
              return display._currency().format(parseFloat(response.msg.p_regular_price * qty));
            }); // 2- Set subtotal price

            phpPlugin.wrapper.find("#deal-price").html(function (i, deal_price) {
              return display._currency().format(display._parseLocaleNumber(deal_price, "de") - parseFloat(response.msg.p_regular_price));
            });
          }
        }
      } //closing

    }); //=======================================================================
    //Delete cart or wisjlist
    //=======================================================================

    phpPlugin.wrapper.on("click", "#cart_items .deleteBtn, #wishlist-items .deleteBtn", function (e) {
      e.preventDefault();
      $(this).html("Please wait...");
      var wishlist = false;
      var remove_btn = "btn-success";

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
        params: $(this)
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_7__.Call_controller)(data, manageResponse);

      function manageResponse(response, elt) {
        if (response.result == "success") {
          refresh_deal_price(elt);
          elt.parents(".row").first().remove();

          if (phpPlugin.wrapper.find("#wishlist-items").children().length == 0) {
            phpPlugin.wrapper.find("#wishlist").hide();
          }

          if (!wishlist) {
            phpPlugin.header.find(".cart_nb_elt").html(function () {
              return parseInt(phpPlugin.header.find(".cart_nb_elt").html()) - 1;
            });
            phpPlugin.wrapper.find(".cart_nb_elt").html(function (i, nb_items) {
              return nb_items - 1;
            });
          }

          phpPlugin.wrapper.find("#new-phones").find(".add_to_cart_frm input[value='" + elt.parent().children(":first").val() + "']").parent().find("button[type=submit]").removeClass(remove_btn).addClass("btn-warning").html("Add to Cart");

          if (phpPlugin.wrapper.find("#cart_items").children().length == 0) {
            phpPlugin.wrapper.find("#cart_items").html(response.msg != 1 ? response.msg : "");
          }
        }
      }
    }); //=======================================================================
    //Save for later / Or Add to cart from wishlist
    //=======================================================================

    phpPlugin.wrapper.on("click", "#cart_items .qty button[type=button], #wishlist-items .qty button[type=button]", function (e) {
      e.preventDefault();
      var method = "";
      var msg = "";
      var btn_bg = "";

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
        frm_name: "delete-cart-item-frm" + $(this).prev().find("input[type=hidden]").val(),
        table: "cart",
        params: $(this),
        method: method
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_7__.Call_controller)(data, manageResponse);

      function manageResponse(response, elt) {
        if (response.result == "success") {
          display._display_cart();

          if (method == "add_To_Cart") {
            elt.parents(".row").first().remove();

            if (phpPlugin.wrapper.find("#wishlist-items").children().length == 0) {
              phpPlugin.wrapper.find("#wishlist").hide();
            }
          }

          console.log(btn_bg);
          phpPlugin.wrapper.find("#new-phones").find(".add_to_cart_frm input[value='" + elt.prev().children(":first").val() + "']").parent().find("button[type=submit]").removeClass("btn-info").addClass(btn_bg).html(msg);
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

/***/ "./node_modules/core-js/modules/es.string.starts-with.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var $startsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2hvbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zdGFydHMtd2l0aC5qcyJdLCJuYW1lcyI6WyJyZXNwb25zaXZlIiwiaXRlbXMiLCJDYXJ0IiwiZWxlbWVudCIsIl9zZXR1cFZhcmlhYmxlcyIsIl9zZXR1cEV2ZW50cyIsIndyYXBwZXIiLCJmaW5kIiwiaGVhZGVyIiwicGhwUGx1Z2luIiwiZGlzcGxheSIsInVzZXJfY2FydCIsIl9kaXNwbGF5X2NhcnQiLCJvd2xDYXJvdXNlbCIsImxvb3AiLCJuYXYiLCJkb3RzIiwicmVmcmVzaF9kZWFsX3ByaWNlIiwiZWx0IiwicGFyZW50cyIsIm5leHQiLCJodG1sIiwiaSIsImRfcHJpY2UiLCJwX3ByaWNlIiwicGFyc2VGbG9hdCIsIl9wYXJzZUxvY2FsZU51bWJlciIsImZpcnN0IiwibGFzdCIsInN0YXJ0c1dpdGgiLCJtYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJfY3VycmVuY3kiLCJmb3JtYXQiLCJvbiIsImUiLCJpbnB1dCIsIiQiLCJpdGVtX2lkIiwidmFsIiwiZGF0YSIsInRhYmxlIiwiaWQiLCJ1c2VyIiwidXJsIiwiZGF0YV90eXBlIiwicmV0dXJuX21vZGUiLCJwYXJhbXMiLCJkaXNwbGF5QWxsRGV0YWlscyIsImRpc3BsYXlfcHJvZHVjdCIsInJlc3BvbnNlIiwib2xkdmFsIiwiQ2FsbCIsInF0eV91cCIsInF0eSIsInBhcnNlSW50IiwibWV0aG9kIiwicmVzdWx0IiwicGFyZW50IiwibXNnIiwicF9yZWd1bGFyX3ByaWNlIiwiZGVhbF9wcmljZSIsInByZXZlbnREZWZhdWx0IiwicHJldiIsIndpc2hsaXN0IiwicmVtb3ZlX2J0biIsImxlbmd0aCIsImF0dHIiLCJmcm0iLCJDYWxsX2NvbnRyb2xsZXIiLCJtYW5hZ2VSZXNwb25zZSIsInJlbW92ZSIsImNoaWxkcmVuIiwiaGlkZSIsIm5iX2l0ZW1zIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImJ0bl9iZyIsImZybV9uYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2luaXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSxJQUFNQSxVQUFVLEdBQUc7QUFDakIsS0FBRztBQUNEQyxTQUFLLEVBQUU7QUFETixHQURjO0FBSWpCLE9BQUs7QUFDSEEsU0FBSyxFQUFFO0FBREosR0FKWTtBQU9qQixRQUFNO0FBQ0pBLFNBQUssRUFBRTtBQURIO0FBUFcsQ0FBbkI7QUFXQTtBQUNBOztJQUNNQyxJLEdBQ0osY0FBWUMsT0FBWixFQUFxQjtBQUFBOztBQUFBOztBQUFBLGlDQUdiLFlBQU07QUFDWixTQUFJLENBQUNDLGVBQUw7O0FBQ0EsU0FBSSxDQUFDQyxZQUFMO0FBQ0QsR0FOb0I7O0FBQUEsMkNBT0gsWUFBTTtBQUN0QixTQUFJLENBQUNDLE9BQUwsR0FBZSxLQUFJLENBQUNILE9BQUwsQ0FBYUksSUFBYixDQUFrQixZQUFsQixDQUFmO0FBQ0EsU0FBSSxDQUFDQyxNQUFMLEdBQWMsS0FBSSxDQUFDTCxPQUFMLENBQWFJLElBQWIsQ0FBa0IsU0FBbEIsQ0FBZDtBQUNELEdBVm9COztBQUFBLHdDQVdOLFlBQU07QUFDbkIsUUFBSUUsU0FBUyxHQUFHLEtBQWhCLENBRG1CLENBR25CO0FBQ0E7QUFDQTs7QUFDQSxRQUFJQyxPQUFPLEdBQUcsSUFBSUMscURBQUosQ0FBY0YsU0FBUyxDQUFDSCxPQUF4QixFQUFpQ0csU0FBUyxDQUFDRCxNQUEzQyxDQUFkOztBQUNBRSxXQUFPLENBQUNFLGFBQVIsR0FQbUIsQ0FRbkI7QUFDQTtBQUNBO0FBQ0E7OztBQUNBSCxhQUFTLENBQUNILE9BQVYsQ0FBa0JDLElBQWxCLENBQXVCLGFBQXZCLEVBQXNDQSxJQUF0QyxDQUEyQyxlQUEzQyxFQUE0RE0sV0FBNUQsQ0FBd0U7QUFDdEVDLFVBQUksRUFBRSxJQURnRTtBQUV0RUMsU0FBRyxFQUFFLEtBRmlFO0FBR3RFQyxVQUFJLEVBQUUsSUFIZ0U7QUFJdEVoQixnQkFBVSxFQUFFQTtBQUowRCxLQUF4RSxFQVptQixDQWtCbkI7QUFDQTtBQUNBOztBQUNBLGFBQVNpQixrQkFBVCxDQUE0QkMsR0FBNUIsRUFBaUM7QUFDL0JBLFNBQUcsQ0FDQUMsT0FESCxDQUNXLGFBRFgsRUFFR0MsSUFGSCxHQUdHYixJQUhILENBR1EsYUFIUixFQUlHYyxJQUpILENBSVEsVUFBVUMsQ0FBVixFQUFhQyxPQUFiLEVBQXNCO0FBQzFCLFlBQUlDLE9BQU8sR0FBR0MsVUFBVSxDQUN0QmYsT0FBTyxDQUFDZ0Isa0JBQVIsQ0FDRVIsR0FBRyxDQUFDQyxPQUFKLENBQVksTUFBWixFQUFvQlEsS0FBcEIsR0FBNEJDLElBQTVCLEdBQW1DckIsSUFBbkMsQ0FBd0MsZ0JBQXhDLEVBQTBEYyxJQUExRCxFQURGLEVBRUUsSUFGRixDQURzQixDQUF4Qjs7QUFNQSxZQUFJRSxPQUFPLENBQUNNLFVBQVIsQ0FBbUIsS0FBbkIsQ0FBSixFQUErQjtBQUM3Qk4saUJBQU8sR0FBR0UsVUFBVSxDQUFDRixPQUFPLENBQUNPLEtBQVIsQ0FBYyxTQUFkLEVBQXlCLENBQXpCLENBQUQsQ0FBcEI7QUFDRCxTQUZELE1BRU87QUFDTFAsaUJBQU8sR0FBR0UsVUFBVSxDQUFDZixPQUFPLENBQUNnQixrQkFBUixDQUEyQkgsT0FBM0IsRUFBb0MsSUFBcEMsQ0FBRCxDQUFwQjtBQUNEOztBQUNEUSxlQUFPLENBQUNDLEdBQVIsQ0FBWVQsT0FBWixFQUFxQixHQUFyQixFQUEwQkMsT0FBMUI7QUFDQSxlQUFPZCxPQUFPLENBQUN1QixTQUFSLEdBQW9CQyxNQUFwQixDQUEyQlgsT0FBTyxHQUFHQyxPQUFyQyxDQUFQO0FBQ0QsT0FsQkg7QUFtQkQsS0F6Q2tCLENBMENuQjtBQUNBO0FBQ0E7OztBQUNBZixhQUFTLENBQUNILE9BQVYsQ0FBa0JDLElBQWxCLENBQXVCLGFBQXZCLEVBQXNDNEIsRUFBdEMsQ0FBeUMsT0FBekMsRUFBa0QsU0FBbEQsRUFBNkQsVUFBVUMsQ0FBVixFQUFhO0FBQ3hFLFVBQUlDLEtBQUssR0FBR0MsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbEIsSUFBUixFQUFaO0FBQ0EsVUFBSW1CLE9BQU8sR0FBR0QsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUNYbkIsT0FEVyxDQUNILE1BREcsRUFFWFosSUFGVyxDQUVOLE1BRk0sRUFHWEEsSUFIVyxDQUdOLHFCQUhNLEVBSVhpQyxHQUpXLEVBQWQsQ0FGd0UsQ0FPeEU7O0FBQ0EsVUFBSUMsSUFBSSxHQUFHO0FBQ1RDLGFBQUssRUFBRSxVQURFO0FBRVRDLFVBQUUsRUFBRUosT0FGSztBQUdUSyxZQUFJLEVBQUUsT0FIRztBQUlUQyxXQUFHLEVBQUUsbUJBSkk7QUFLVEMsaUJBQVMsRUFBRSxRQUxGO0FBTVRDLG1CQUFXLEVBQUUsU0FOSjtBQU9UQyxjQUFNLEVBQUVWLENBQUMsQ0FBQyxJQUFEO0FBUEEsT0FBWDtBQVNBVyx5RUFBaUIsQ0FBQ1IsSUFBRCxFQUFPUyxlQUFQLENBQWpCOztBQUNBLGVBQVNBLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DakMsR0FBbkMsRUFBd0M7QUFDdEMsWUFBSW1CLEtBQUssQ0FBQ0csR0FBTixNQUFlLENBQWYsSUFBb0JILEtBQUssQ0FBQ0csR0FBTixNQUFlLENBQXZDLEVBQTBDO0FBQ3hDSCxlQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFVbEIsQ0FBVixFQUFhOEIsTUFBYixFQUFxQjtBQUM3QkMsa0VBQUksQ0FBQztBQUNIUixpQkFBRyxFQUFFLGFBREY7QUFFSEcsb0JBQU0sRUFBRTtBQUNOTSxzQkFBTSxFQUFFLElBREY7QUFFTmYsdUJBQU8sRUFBRUEsT0FGSDtBQUdOZ0IsbUJBQUcsRUFBRUMsUUFBUSxDQUFDSixNQUFELENBQVIsR0FBbUIsQ0FIbEI7QUFJTkssc0JBQU0sRUFBRSxhQUpGO0FBS05mLHFCQUFLLEVBQUU7QUFMRDtBQUZMLGFBQUQsQ0FBSjtBQVVBLG1CQUFPLEVBQUVVLE1BQVQ7QUFDRCxXQVpEOztBQWFBLGNBQUlELFFBQVEsQ0FBQ08sTUFBVCxJQUFtQixTQUF2QixFQUFrQztBQUNoQztBQUNBLGdCQUFJSCxHQUFHLEdBQUdDLFFBQVEsQ0FBQ3RDLEdBQUcsQ0FBQ0UsSUFBSixHQUFXb0IsR0FBWCxFQUFELENBQWxCO0FBQ0F0QixlQUFHLENBQ0FDLE9BREgsQ0FDVyxNQURYLEVBRUd3QyxNQUZILEdBR0d2QyxJQUhILEdBSUdiLElBSkgsQ0FJUSxnQkFKUixFQUtHYyxJQUxILENBS1EsWUFBWTtBQUNoQixxQkFBT1gsT0FBTyxDQUNYdUIsU0FESSxHQUVKQyxNQUZJLENBRUdULFVBQVUsQ0FBQzBCLFFBQVEsQ0FBQ1MsR0FBVCxDQUFhQyxlQUFiLEdBQStCTixHQUFoQyxDQUZiLENBQVA7QUFHRCxhQVRILEVBSGdDLENBYWhDOztBQUNBOUMscUJBQVMsQ0FBQ0gsT0FBVixDQUNHQyxJQURILENBQ1EsYUFEUixFQUVHYyxJQUZILENBRVEsVUFBVUMsQ0FBVixFQUFhd0MsVUFBYixFQUF5QjtBQUM3QixxQkFBT3BELE9BQU8sQ0FDWHVCLFNBREksR0FFSkMsTUFGSSxDQUdIVCxVQUFVLENBQUMwQixRQUFRLENBQUNTLEdBQVQsQ0FBYUMsZUFBZCxDQUFWLEdBQ0VuRCxPQUFPLENBQUNnQixrQkFBUixDQUEyQm9DLFVBQTNCLEVBQXVDLElBQXZDLENBSkMsQ0FBUDtBQU1ELGFBVEg7QUFVRDtBQUNGO0FBQ0YsT0EzRHVFLENBMkR0RTs7QUFDSCxLQTVERCxFQTdDbUIsQ0EwR25COztBQUNBckQsYUFBUyxDQUFDSCxPQUFWLENBQ0dDLElBREgsQ0FDUSxhQURSLEVBRUc0QixFQUZILENBRU0sT0FGTixFQUVlLFdBRmYsRUFFNEIsVUFBVUMsQ0FBVixFQUFhO0FBQ3JDQSxPQUFDLENBQUMyQixjQUFGO0FBQ0EsVUFBSTFCLEtBQUssR0FBR0MsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMEIsSUFBUixFQUFaO0FBQ0EsVUFBSXpCLE9BQU8sR0FBR0QsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUNYbkIsT0FEVyxDQUNILE1BREcsRUFFWFosSUFGVyxDQUVOLE1BRk0sRUFHWEEsSUFIVyxDQUdOLHFCQUhNLEVBSVhpQyxHQUpXLEVBQWQsQ0FIcUMsQ0FRckM7O0FBQ0EsVUFBSUMsSUFBSSxHQUFHO0FBQ1RDLGFBQUssRUFBRSxVQURFO0FBRVRDLFVBQUUsRUFBRUosT0FGSztBQUdUSyxZQUFJLEVBQUUsT0FIRztBQUlUQyxXQUFHLEVBQUUsbUJBSkk7QUFLVEMsaUJBQVMsRUFBRSxRQUxGO0FBTVRDLG1CQUFXLEVBQUUsU0FOSjtBQU9UQyxjQUFNLEVBQUVWLENBQUMsQ0FBQyxJQUFEO0FBUEEsT0FBWDtBQVNBVyx5RUFBaUIsQ0FBQ1IsSUFBRCxFQUFPUyxlQUFQLENBQWpCOztBQUNBLGVBQVNBLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DakMsR0FBbkMsRUFBd0M7QUFDdEMsWUFBSW1CLEtBQUssQ0FBQ0csR0FBTixLQUFjLENBQWQsSUFBbUJILEtBQUssQ0FBQ0csR0FBTixNQUFlLEVBQXRDLEVBQTBDO0FBQ3hDSCxlQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFVbEIsQ0FBVixFQUFhOEIsTUFBYixFQUFxQjtBQUM3QkMsa0VBQUksQ0FBQztBQUNIUixpQkFBRyxFQUFFLGFBREY7QUFFSEcsb0JBQU0sRUFBRTtBQUNOTSxzQkFBTSxFQUFFLElBREY7QUFFTmYsdUJBQU8sRUFBRUEsT0FGSDtBQUdOZ0IsbUJBQUcsRUFBRUMsUUFBUSxDQUFDSixNQUFELENBQVIsR0FBbUIsQ0FIbEI7QUFJTkssc0JBQU0sRUFBRSxhQUpGO0FBS05mLHFCQUFLLEVBQUU7QUFMRDtBQUZMLGFBQUQsQ0FBSjtBQVVBLG1CQUFPLEVBQUVVLE1BQVQ7QUFDRCxXQVpEOztBQWFBLGNBQUlELFFBQVEsQ0FBQ08sTUFBVCxJQUFtQixTQUF2QixFQUFrQztBQUNoQztBQUNBLGdCQUFJSCxHQUFHLEdBQUdDLFFBQVEsQ0FBQ3RDLEdBQUcsQ0FBQzhDLElBQUosR0FBV3hCLEdBQVgsRUFBRCxDQUFsQjtBQUNBdEIsZUFBRyxDQUNBQyxPQURILENBQ1csTUFEWCxFQUVHd0MsTUFGSCxHQUdHdkMsSUFISCxHQUlHYixJQUpILENBSVEsZ0JBSlIsRUFLR2MsSUFMSCxDQUtRLFlBQVk7QUFDaEIscUJBQU9YLE9BQU8sQ0FDWHVCLFNBREksR0FFSkMsTUFGSSxDQUVHVCxVQUFVLENBQUMwQixRQUFRLENBQUNTLEdBQVQsQ0FBYUMsZUFBYixHQUErQk4sR0FBaEMsQ0FGYixDQUFQO0FBR0QsYUFUSCxFQUhnQyxDQWFoQzs7QUFDQTlDLHFCQUFTLENBQUNILE9BQVYsQ0FDR0MsSUFESCxDQUNRLGFBRFIsRUFFR2MsSUFGSCxDQUVRLFVBQVVDLENBQVYsRUFBYXdDLFVBQWIsRUFBeUI7QUFDN0IscUJBQU9wRCxPQUFPLENBQ1h1QixTQURJLEdBRUpDLE1BRkksQ0FHSHhCLE9BQU8sQ0FBQ2dCLGtCQUFSLENBQTJCb0MsVUFBM0IsRUFBdUMsSUFBdkMsSUFDRXJDLFVBQVUsQ0FBQzBCLFFBQVEsQ0FBQ1MsR0FBVCxDQUFhQyxlQUFkLENBSlQsQ0FBUDtBQU1ELGFBVEg7QUFVRDtBQUNGO0FBQ0YsT0E1RG9DLENBNERuQzs7QUFDSCxLQS9ESCxFQTNHbUIsQ0EyS25CO0FBQ0E7QUFDQTs7QUFDQXBELGFBQVMsQ0FBQ0gsT0FBVixDQUFrQjZCLEVBQWxCLENBQ0UsT0FERixFQUVFLG9EQUZGLEVBR0UsVUFBVUMsQ0FBVixFQUFhO0FBQ1hBLE9BQUMsQ0FBQzJCLGNBQUY7QUFDQXpCLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWpCLElBQVIsQ0FBYSxnQkFBYjtBQUNBLFVBQUk0QyxRQUFRLEdBQUcsS0FBZjtBQUNBLFVBQUlDLFVBQVUsR0FBRyxhQUFqQjs7QUFDQSxVQUFJNUIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbkIsT0FBUixDQUFnQixXQUFoQixFQUE2QmdELE1BQTdCLElBQXVDLENBQTNDLEVBQThDO0FBQzVDRixnQkFBUSxHQUFHLElBQVg7QUFDQUMsa0JBQVUsR0FBRyxVQUFiO0FBQ0Q7O0FBQ0QsVUFBSXpCLElBQUksR0FBRztBQUNUSSxXQUFHLEVBQUUsZUFESTtBQUVURixVQUFFLEVBQUVMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUThCLElBQVIsQ0FBYSxJQUFiLENBRks7QUFHVDFCLGFBQUssRUFBRSxNQUhFO0FBSVRlLGNBQU0sRUFBRSxhQUpDO0FBS1RZLFdBQUcsRUFBRS9CLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFCLE1BQVIsRUFMSTtBQU1UWCxjQUFNLEVBQUVWLENBQUMsQ0FBQyxJQUFEO0FBTkEsT0FBWDtBQVFBZ0MsdUVBQWUsQ0FBQzdCLElBQUQsRUFBTzhCLGNBQVAsQ0FBZjs7QUFDQSxlQUFTQSxjQUFULENBQXdCcEIsUUFBeEIsRUFBa0NqQyxHQUFsQyxFQUF1QztBQUNyQyxZQUFJaUMsUUFBUSxDQUFDTyxNQUFULElBQW1CLFNBQXZCLEVBQWtDO0FBQ2hDekMsNEJBQWtCLENBQUNDLEdBQUQsQ0FBbEI7QUFDQUEsYUFBRyxDQUFDQyxPQUFKLENBQVksTUFBWixFQUFvQlEsS0FBcEIsR0FBNEI2QyxNQUE1Qjs7QUFDQSxjQUNFL0QsU0FBUyxDQUFDSCxPQUFWLENBQWtCQyxJQUFsQixDQUF1QixpQkFBdkIsRUFBMENrRSxRQUExQyxHQUFxRE4sTUFBckQsSUFBK0QsQ0FEakUsRUFFRTtBQUNBMUQscUJBQVMsQ0FBQ0gsT0FBVixDQUFrQkMsSUFBbEIsQ0FBdUIsV0FBdkIsRUFBb0NtRSxJQUFwQztBQUNEOztBQUNELGNBQUksQ0FBQ1QsUUFBTCxFQUFlO0FBQ2J4RCxxQkFBUyxDQUFDRCxNQUFWLENBQWlCRCxJQUFqQixDQUFzQixjQUF0QixFQUFzQ2MsSUFBdEMsQ0FBMkMsWUFBWTtBQUNyRCxxQkFDRW1DLFFBQVEsQ0FBQy9DLFNBQVMsQ0FBQ0QsTUFBVixDQUFpQkQsSUFBakIsQ0FBc0IsY0FBdEIsRUFBc0NjLElBQXRDLEVBQUQsQ0FBUixHQUF5RCxDQUQzRDtBQUdELGFBSkQ7QUFLQVoscUJBQVMsQ0FBQ0gsT0FBVixDQUNHQyxJQURILENBQ1EsY0FEUixFQUVHYyxJQUZILENBRVEsVUFBVUMsQ0FBVixFQUFhcUQsUUFBYixFQUF1QjtBQUMzQixxQkFBT0EsUUFBUSxHQUFHLENBQWxCO0FBQ0QsYUFKSDtBQUtEOztBQUNEbEUsbUJBQVMsQ0FBQ0gsT0FBVixDQUNHQyxJQURILENBQ1EsYUFEUixFQUVHQSxJQUZILENBR0ksbUNBQ0VXLEdBQUcsQ0FBQ3lDLE1BQUosR0FBYWMsUUFBYixDQUFzQixRQUF0QixFQUFnQ2pDLEdBQWhDLEVBREYsR0FFRSxJQUxOLEVBT0dtQixNQVBILEdBUUdwRCxJQVJILENBUVEscUJBUlIsRUFTR3FFLFdBVEgsQ0FTZVYsVUFUZixFQVVHVyxRQVZILENBVVksYUFWWixFQVdHeEQsSUFYSCxDQVdRLGFBWFI7O0FBWUEsY0FBSVosU0FBUyxDQUFDSCxPQUFWLENBQWtCQyxJQUFsQixDQUF1QixhQUF2QixFQUFzQ2tFLFFBQXRDLEdBQWlETixNQUFqRCxJQUEyRCxDQUEvRCxFQUFrRTtBQUNoRTFELHFCQUFTLENBQUNILE9BQVYsQ0FDR0MsSUFESCxDQUNRLGFBRFIsRUFFR2MsSUFGSCxDQUVROEIsUUFBUSxDQUFDUyxHQUFULElBQWdCLENBQWhCLEdBQW9CVCxRQUFRLENBQUNTLEdBQTdCLEdBQW1DLEVBRjNDO0FBR0Q7QUFDRjtBQUNGO0FBQ0YsS0E3REgsRUE5S21CLENBOE9uQjtBQUNBO0FBQ0E7O0FBQ0FuRCxhQUFTLENBQUNILE9BQVYsQ0FBa0I2QixFQUFsQixDQUNFLE9BREYsRUFFRSxnRkFGRixFQUdFLFVBQVVDLENBQVYsRUFBYTtBQUNYQSxPQUFDLENBQUMyQixjQUFGO0FBQ0EsVUFBSU4sTUFBTSxHQUFHLEVBQWI7QUFDQSxVQUFJRyxHQUFHLEdBQUcsRUFBVjtBQUNBLFVBQUlrQixNQUFNLEdBQUcsRUFBYjs7QUFDQSxVQUFJeEMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbkIsT0FBUixDQUFnQixPQUFoQixFQUF5QmdELE1BQTdCLEVBQXFDO0FBQ25DVixjQUFNLEdBQUcsZ0JBQVQ7QUFDQUcsV0FBRyxHQUFHLGFBQU47QUFDQWtCLGNBQU0sR0FBRyxVQUFUO0FBQ0QsT0FKRCxNQUlPO0FBQ0wsWUFBSXhDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW5CLE9BQVIsQ0FBZ0IsV0FBaEIsRUFBNkJnRCxNQUFqQyxFQUF5QztBQUN2Q1YsZ0JBQU0sR0FBRyxhQUFUO0FBQ0FHLGFBQUcsR0FBRyxhQUFOO0FBQ0FrQixnQkFBTSxHQUFHLGFBQVQ7QUFDRDtBQUNGOztBQUNEeEMsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRakIsSUFBUixDQUFhLGlCQUFiO0FBQ0EsVUFBSW9CLElBQUksR0FBRztBQUNUSSxXQUFHLEVBQUUsK0JBREk7QUFFVHdCLFdBQUcsRUFBRS9CLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTBCLElBQVIsRUFGSTtBQUdUZSxnQkFBUSxFQUNOLHlCQUNBekMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMEIsSUFBUixHQUFlekQsSUFBZixDQUFvQixvQkFBcEIsRUFBMENpQyxHQUExQyxFQUxPO0FBTVRFLGFBQUssRUFBRSxNQU5FO0FBT1RNLGNBQU0sRUFBRVYsQ0FBQyxDQUFDLElBQUQsQ0FQQTtBQVFUbUIsY0FBTSxFQUFFQTtBQVJDLE9BQVg7QUFVQWEsdUVBQWUsQ0FBQzdCLElBQUQsRUFBTzhCLGNBQVAsQ0FBZjs7QUFDQSxlQUFTQSxjQUFULENBQXdCcEIsUUFBeEIsRUFBa0NqQyxHQUFsQyxFQUF1QztBQUNyQyxZQUFJaUMsUUFBUSxDQUFDTyxNQUFULElBQW1CLFNBQXZCLEVBQWtDO0FBQ2hDaEQsaUJBQU8sQ0FBQ0UsYUFBUjs7QUFDQSxjQUFJNkMsTUFBTSxJQUFJLGFBQWQsRUFBNkI7QUFDM0J2QyxlQUFHLENBQUNDLE9BQUosQ0FBWSxNQUFaLEVBQW9CUSxLQUFwQixHQUE0QjZDLE1BQTVCOztBQUNBLGdCQUNFL0QsU0FBUyxDQUFDSCxPQUFWLENBQWtCQyxJQUFsQixDQUF1QixpQkFBdkIsRUFBMENrRSxRQUExQyxHQUFxRE4sTUFBckQsSUFBK0QsQ0FEakUsRUFFRTtBQUNBMUQsdUJBQVMsQ0FBQ0gsT0FBVixDQUFrQkMsSUFBbEIsQ0FBdUIsV0FBdkIsRUFBb0NtRSxJQUFwQztBQUNEO0FBQ0Y7O0FBQ0QzQyxpQkFBTyxDQUFDQyxHQUFSLENBQVk4QyxNQUFaO0FBQ0FyRSxtQkFBUyxDQUFDSCxPQUFWLENBQ0dDLElBREgsQ0FDUSxhQURSLEVBRUdBLElBRkgsQ0FHSSxtQ0FDRVcsR0FBRyxDQUFDOEMsSUFBSixHQUFXUyxRQUFYLENBQW9CLFFBQXBCLEVBQThCakMsR0FBOUIsRUFERixHQUVFLElBTE4sRUFPR21CLE1BUEgsR0FRR3BELElBUkgsQ0FRUSxxQkFSUixFQVNHcUUsV0FUSCxDQVNlLFVBVGYsRUFVR0MsUUFWSCxDQVVZQyxNQVZaLEVBV0d6RCxJQVhILENBV1F1QyxHQVhSO0FBWUQ7QUFDRjtBQUNGLEtBekRIO0FBMkRELEdBdlRvQjs7QUFDbkIsT0FBS3pELE9BQUwsR0FBZUEsT0FBZjtBQUNELEM7O0FBdVRINkUsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN4RCxNQUFJL0UsSUFBSixDQUFTb0MsQ0FBQyxDQUFDLE9BQUQsQ0FBVixFQUFxQjRDLEtBQXJCO0FBQ0QsQ0FGRCxFOzs7Ozs7Ozs7OztBQ3ZVYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsK0JBQStCLHNKQUE0RDtBQUMzRixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGlCQUFpQixtQkFBTyxDQUFDLG1GQUEyQjtBQUNwRCw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDNUUsMkJBQTJCLG1CQUFPLENBQUMseUdBQXNDO0FBQ3pFLGNBQWMsbUJBQU8sQ0FBQyx5RUFBc0I7O0FBRTVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsR0FBRyx1RkFBdUY7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJqcy9jdXN0b20vaG9tZS9jYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgMDoge1xyXG4gICAgaXRlbXM6IDEsXHJcbiAgfSxcclxuICA2MDA6IHtcclxuICAgIGl0ZW1zOiAzLFxyXG4gIH0sXHJcbiAgMTAwMDoge1xyXG4gICAgaXRlbXM6IDUsXHJcbiAgfSxcclxufTtcclxuaW1wb3J0IHsgQ2FsbF9jb250cm9sbGVyLCBkaXNwbGF5QWxsRGV0YWlscywgQ2FsbCB9IGZyb20gXCJjb3JlanMvZm9ybV9jcnVkXCI7XHJcbmltcG9ydCB1c2VyX2NhcnQgZnJvbSBcImNvcmVqcy91c2VyX2NhcnRcIjtcclxuY2xhc3MgQ2FydCB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcbiAgX2luaXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9zZXR1cFZhcmlhYmxlcygpO1xyXG4gICAgdGhpcy5fc2V0dXBFdmVudHMoKTtcclxuICB9O1xyXG4gIF9zZXR1cFZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgIHRoaXMud3JhcHBlciA9IHRoaXMuZWxlbWVudC5maW5kKFwiI21haW4tc2l0ZVwiKTtcclxuICAgIHRoaXMuaGVhZGVyID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjaGVhZGVyXCIpO1xyXG4gIH07XHJcbiAgX3NldHVwRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgdmFyIHBocFBsdWdpbiA9IHRoaXM7XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9EaXNwbGF5IHVzZXIgY2FydCBpdGVtc1xyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbGV0IGRpc3BsYXkgPSBuZXcgdXNlcl9jYXJ0KHBocFBsdWdpbi53cmFwcGVyLCBwaHBQbHVnaW4uaGVhZGVyKTtcclxuICAgIGRpc3BsYXkuX2Rpc3BsYXlfY2FydCgpO1xyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9Pd2wgY2Fyb3VzZWxcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vbmV3IHBob25lc1xyXG4gICAgcGhwUGx1Z2luLndyYXBwZXIuZmluZChcIiNuZXctcGhvbmVzXCIpLmZpbmQoXCIub3dsLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgcmVzcG9uc2l2ZTogcmVzcG9uc2l2ZSxcclxuICAgIH0pO1xyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9SZWZyZXNoIGRlYWwgcHJpY2VcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGZ1bmN0aW9uIHJlZnJlc2hfZGVhbF9wcmljZShlbHQpIHtcclxuICAgICAgZWx0XHJcbiAgICAgICAgLnBhcmVudHMoXCIjY2FydF9pdGVtc1wiKVxyXG4gICAgICAgIC5uZXh0KClcclxuICAgICAgICAuZmluZChcIiNkZWFsLXByaWNlXCIpXHJcbiAgICAgICAgLmh0bWwoZnVuY3Rpb24gKGksIGRfcHJpY2UpIHtcclxuICAgICAgICAgIGxldCBwX3ByaWNlID0gcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgZGlzcGxheS5fcGFyc2VMb2NhbGVOdW1iZXIoXHJcbiAgICAgICAgICAgICAgZWx0LnBhcmVudHMoXCIucm93XCIpLmZpcnN0KCkubGFzdCgpLmZpbmQoXCIucHJvZHVjdF9wcmljZVwiKS5odG1sKCksXHJcbiAgICAgICAgICAgICAgXCJkZVwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAoZF9wcmljZS5zdGFydHNXaXRoKFwiRVVSXCIpKSB7XHJcbiAgICAgICAgICAgIGRfcHJpY2UgPSBwYXJzZUZsb2F0KGRfcHJpY2UubWF0Y2goL1swLTldKy9nKVswXSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkX3ByaWNlID0gcGFyc2VGbG9hdChkaXNwbGF5Ll9wYXJzZUxvY2FsZU51bWJlcihkX3ByaWNlLCBcImRlXCIpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRfcHJpY2UsIFwiIFwiLCBwX3ByaWNlKTtcclxuICAgICAgICAgIHJldHVybiBkaXNwbGF5Ll9jdXJyZW5jeSgpLmZvcm1hdChkX3ByaWNlIC0gcF9wcmljZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL1F0eSBzZWN0aW9uXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwaHBQbHVnaW4ud3JhcHBlci5maW5kKFwiI2NhcnRfaXRlbXNcIikub24oXCJjbGlja1wiLCBcIi5xdHktdXBcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgbGV0IGlucHV0ID0gJCh0aGlzKS5uZXh0KCk7XHJcbiAgICAgIGxldCBpdGVtX2lkID0gJCh0aGlzKVxyXG4gICAgICAgIC5wYXJlbnRzKFwiLnF0eVwiKVxyXG4gICAgICAgIC5maW5kKFwiZm9ybVwiKVxyXG4gICAgICAgIC5maW5kKFwiaW5wdXRbbmFtZT1pdGVtX2lkXVwiKVxyXG4gICAgICAgIC52YWwoKTtcclxuICAgICAgLy9jaGFuZ2UgcHJpY2UgdXNpbmcgYWpheFxyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB0YWJsZTogXCJwcm9kdWN0c1wiLFxyXG4gICAgICAgIGlkOiBpdGVtX2lkLFxyXG4gICAgICAgIHVzZXI6IFwiZ3Vlc3RcIixcclxuICAgICAgICB1cmw6IFwiZm9ybXMvc2hvd0RldGFpbHNcIixcclxuICAgICAgICBkYXRhX3R5cGU6IFwidmFsdWVzXCIsXHJcbiAgICAgICAgcmV0dXJuX21vZGU6IFwiZGV0YWlsc1wiLFxyXG4gICAgICAgIHBhcmFtczogJCh0aGlzKSxcclxuICAgICAgfTtcclxuICAgICAgZGlzcGxheUFsbERldGFpbHMoZGF0YSwgZGlzcGxheV9wcm9kdWN0KTtcclxuICAgICAgZnVuY3Rpb24gZGlzcGxheV9wcm9kdWN0KHJlc3BvbnNlLCBlbHQpIHtcclxuICAgICAgICBpZiAoaW5wdXQudmFsKCkgPj0gMSAmJiBpbnB1dC52YWwoKSA8PSA5KSB7XHJcbiAgICAgICAgICBpbnB1dC52YWwoZnVuY3Rpb24gKGksIG9sZHZhbCkge1xyXG4gICAgICAgICAgICBDYWxsKHtcclxuICAgICAgICAgICAgICB1cmw6IFwiZ3Vlc3RzL2NhbGxcIixcclxuICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIHF0eV91cDogXCJva1wiLFxyXG4gICAgICAgICAgICAgICAgaXRlbV9pZDogaXRlbV9pZCxcclxuICAgICAgICAgICAgICAgIHF0eTogcGFyc2VJbnQob2xkdmFsKSArIDEsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwidXBkYXRlX2NhcnRcIixcclxuICAgICAgICAgICAgICAgIHRhYmxlOiBcImNhcnRcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuICsrb2xkdmFsO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIC8vIDEtIEluY3JlYXNlIHByaWNlIG9mIHRoZSBwcm9kdWN0XHJcbiAgICAgICAgICAgIGxldCBxdHkgPSBwYXJzZUludChlbHQubmV4dCgpLnZhbCgpKTtcclxuICAgICAgICAgICAgZWx0XHJcbiAgICAgICAgICAgICAgLnBhcmVudHMoXCIucXR5XCIpXHJcbiAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgLm5leHQoKVxyXG4gICAgICAgICAgICAgIC5maW5kKFwiLnByb2R1Y3RfcHJpY2VcIilcclxuICAgICAgICAgICAgICAuaHRtbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlzcGxheVxyXG4gICAgICAgICAgICAgICAgICAuX2N1cnJlbmN5KClcclxuICAgICAgICAgICAgICAgICAgLmZvcm1hdChwYXJzZUZsb2F0KHJlc3BvbnNlLm1zZy5wX3JlZ3VsYXJfcHJpY2UgKiBxdHkpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gMi0gU2V0IHN1YnRvdGFsIHByaWNlXHJcbiAgICAgICAgICAgIHBocFBsdWdpbi53cmFwcGVyXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCIjZGVhbC1wcmljZVwiKVxyXG4gICAgICAgICAgICAgIC5odG1sKGZ1bmN0aW9uIChpLCBkZWFsX3ByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlzcGxheVxyXG4gICAgICAgICAgICAgICAgICAuX2N1cnJlbmN5KClcclxuICAgICAgICAgICAgICAgICAgLmZvcm1hdChcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHJlc3BvbnNlLm1zZy5wX3JlZ3VsYXJfcHJpY2UpICtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkuX3BhcnNlTG9jYWxlTnVtYmVyKGRlYWxfcHJpY2UsIFwiZGVcIilcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gLy9jbG9zaW5nIEFqYXggY2FsbFxyXG4gICAgfSk7XHJcbiAgICAvLyBRdHkgZG93blxyXG4gICAgcGhwUGx1Z2luLndyYXBwZXJcclxuICAgICAgLmZpbmQoXCIjY2FydF9pdGVtc1wiKVxyXG4gICAgICAub24oXCJjbGlja1wiLCBcIi5xdHktZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgaW5wdXQgPSAkKHRoaXMpLnByZXYoKTtcclxuICAgICAgICBsZXQgaXRlbV9pZCA9ICQodGhpcylcclxuICAgICAgICAgIC5wYXJlbnRzKFwiLnF0eVwiKVxyXG4gICAgICAgICAgLmZpbmQoXCJmb3JtXCIpXHJcbiAgICAgICAgICAuZmluZChcImlucHV0W25hbWU9aXRlbV9pZF1cIilcclxuICAgICAgICAgIC52YWwoKTtcclxuICAgICAgICAvL2NoYW5nZSBwcmljZSB1c2luZyBhamF4XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICB0YWJsZTogXCJwcm9kdWN0c1wiLFxyXG4gICAgICAgICAgaWQ6IGl0ZW1faWQsXHJcbiAgICAgICAgICB1c2VyOiBcImd1ZXN0XCIsXHJcbiAgICAgICAgICB1cmw6IFwiZm9ybXMvc2hvd0RldGFpbHNcIixcclxuICAgICAgICAgIGRhdGFfdHlwZTogXCJ2YWx1ZXNcIixcclxuICAgICAgICAgIHJldHVybl9tb2RlOiBcImRldGFpbHNcIixcclxuICAgICAgICAgIHBhcmFtczogJCh0aGlzKSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRpc3BsYXlBbGxEZXRhaWxzKGRhdGEsIGRpc3BsYXlfcHJvZHVjdCk7XHJcbiAgICAgICAgZnVuY3Rpb24gZGlzcGxheV9wcm9kdWN0KHJlc3BvbnNlLCBlbHQpIHtcclxuICAgICAgICAgIGlmIChpbnB1dC52YWwoKSA+IDEgJiYgaW5wdXQudmFsKCkgPD0gMTApIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsKGZ1bmN0aW9uIChpLCBvbGR2YWwpIHtcclxuICAgICAgICAgICAgICBDYWxsKHtcclxuICAgICAgICAgICAgICAgIHVybDogXCJndWVzdHMvY2FsbFwiLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgIHF0eV91cDogXCJva1wiLFxyXG4gICAgICAgICAgICAgICAgICBpdGVtX2lkOiBpdGVtX2lkLFxyXG4gICAgICAgICAgICAgICAgICBxdHk6IHBhcnNlSW50KG9sZHZhbCkgLSAxLFxyXG4gICAgICAgICAgICAgICAgICBtZXRob2Q6IFwidXBkYXRlX2NhcnRcIixcclxuICAgICAgICAgICAgICAgICAgdGFibGU6IFwiY2FydFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICByZXR1cm4gLS1vbGR2YWw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgICAgLy8gMS0gSW5jcmVhc2UgcHJpY2Ugb2YgdGhlIHByb2R1Y3RcclxuICAgICAgICAgICAgICBsZXQgcXR5ID0gcGFyc2VJbnQoZWx0LnByZXYoKS52YWwoKSk7XHJcbiAgICAgICAgICAgICAgZWx0XHJcbiAgICAgICAgICAgICAgICAucGFyZW50cyhcIi5xdHlcIilcclxuICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgICAgLm5leHQoKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIucHJvZHVjdF9wcmljZVwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gZGlzcGxheVxyXG4gICAgICAgICAgICAgICAgICAgIC5fY3VycmVuY3koKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JtYXQocGFyc2VGbG9hdChyZXNwb25zZS5tc2cucF9yZWd1bGFyX3ByaWNlICogcXR5KSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAvLyAyLSBTZXQgc3VidG90YWwgcHJpY2VcclxuICAgICAgICAgICAgICBwaHBQbHVnaW4ud3JhcHBlclxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIjZGVhbC1wcmljZVwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoZnVuY3Rpb24gKGksIGRlYWxfcHJpY2UpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BsYXlcclxuICAgICAgICAgICAgICAgICAgICAuX2N1cnJlbmN5KClcclxuICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5fcGFyc2VMb2NhbGVOdW1iZXIoZGVhbF9wcmljZSwgXCJkZVwiKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocmVzcG9uc2UubXNnLnBfcmVndWxhcl9wcmljZSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IC8vY2xvc2luZ1xyXG4gICAgICB9KTtcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vRGVsZXRlIGNhcnQgb3Igd2lzamxpc3RcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHBocFBsdWdpbi53cmFwcGVyLm9uKFxyXG4gICAgICBcImNsaWNrXCIsXHJcbiAgICAgIFwiI2NhcnRfaXRlbXMgLmRlbGV0ZUJ0biwgI3dpc2hsaXN0LWl0ZW1zIC5kZWxldGVCdG5cIixcclxuICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5odG1sKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICAgICAgbGV0IHdpc2hsaXN0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHJlbW92ZV9idG4gPSBcImJ0bi1zdWNjZXNzXCI7XHJcbiAgICAgICAgaWYgKCQodGhpcykucGFyZW50cyhcIiN3aXNobGlzdFwiKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgd2lzaGxpc3QgPSB0cnVlO1xyXG4gICAgICAgICAgcmVtb3ZlX2J0biA9IFwiYnRuLWluZm9cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICB1cmw6IFwiZ3Vlc3RzL2RlbGV0ZVwiLFxyXG4gICAgICAgICAgaWQ6ICQodGhpcykuYXR0cihcImlkXCIpLFxyXG4gICAgICAgICAgdGFibGU6IFwiY2FydFwiLFxyXG4gICAgICAgICAgbWV0aG9kOiBcImRlbGV0ZV9jYXJ0XCIsXHJcbiAgICAgICAgICBmcm06ICQodGhpcykucGFyZW50KCksXHJcbiAgICAgICAgICBwYXJhbXM6ICQodGhpcyksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgbWFuYWdlUmVzcG9uc2UpO1xyXG4gICAgICAgIGZ1bmN0aW9uIG1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCBlbHQpIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgcmVmcmVzaF9kZWFsX3ByaWNlKGVsdCk7XHJcbiAgICAgICAgICAgIGVsdC5wYXJlbnRzKFwiLnJvd1wiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgcGhwUGx1Z2luLndyYXBwZXIuZmluZChcIiN3aXNobGlzdC1pdGVtc1wiKS5jaGlsZHJlbigpLmxlbmd0aCA9PSAwXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHBocFBsdWdpbi53cmFwcGVyLmZpbmQoXCIjd2lzaGxpc3RcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghd2lzaGxpc3QpIHtcclxuICAgICAgICAgICAgICBwaHBQbHVnaW4uaGVhZGVyLmZpbmQoXCIuY2FydF9uYl9lbHRcIikuaHRtbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICBwYXJzZUludChwaHBQbHVnaW4uaGVhZGVyLmZpbmQoXCIuY2FydF9uYl9lbHRcIikuaHRtbCgpKSAtIDFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgcGhwUGx1Z2luLndyYXBwZXJcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiLmNhcnRfbmJfZWx0XCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChmdW5jdGlvbiAoaSwgbmJfaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG5iX2l0ZW1zIC0gMTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi53cmFwcGVyXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCIjbmV3LXBob25lc1wiKVxyXG4gICAgICAgICAgICAgIC5maW5kKFxyXG4gICAgICAgICAgICAgICAgXCIuYWRkX3RvX2NhcnRfZnJtIGlucHV0W3ZhbHVlPSdcIiArXHJcbiAgICAgICAgICAgICAgICAgIGVsdC5wYXJlbnQoKS5jaGlsZHJlbihcIjpmaXJzdFwiKS52YWwoKSArXHJcbiAgICAgICAgICAgICAgICAgIFwiJ11cIlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAuZmluZChcImJ1dHRvblt0eXBlPXN1Ym1pdF1cIilcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MocmVtb3ZlX2J0bilcclxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJidG4td2FybmluZ1wiKVxyXG4gICAgICAgICAgICAgIC5odG1sKFwiQWRkIHRvIENhcnRcIik7XHJcbiAgICAgICAgICAgIGlmIChwaHBQbHVnaW4ud3JhcHBlci5maW5kKFwiI2NhcnRfaXRlbXNcIikuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgIHBocFBsdWdpbi53cmFwcGVyXHJcbiAgICAgICAgICAgICAgICAuZmluZChcIiNjYXJ0X2l0ZW1zXCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChyZXNwb25zZS5tc2cgIT0gMSA/IHJlc3BvbnNlLm1zZyA6IFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vU2F2ZSBmb3IgbGF0ZXIgLyBPciBBZGQgdG8gY2FydCBmcm9tIHdpc2hsaXN0XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwaHBQbHVnaW4ud3JhcHBlci5vbihcclxuICAgICAgXCJjbGlja1wiLFxyXG4gICAgICBcIiNjYXJ0X2l0ZW1zIC5xdHkgYnV0dG9uW3R5cGU9YnV0dG9uXSwgI3dpc2hsaXN0LWl0ZW1zIC5xdHkgYnV0dG9uW3R5cGU9YnV0dG9uXVwiLFxyXG4gICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbWV0aG9kID0gXCJcIjtcclxuICAgICAgICBsZXQgbXNnID0gXCJcIjtcclxuICAgICAgICBsZXQgYnRuX2JnID0gXCJcIjtcclxuICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnRzKFwiI2NhcnRcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICBtZXRob2QgPSBcInNhdmVfRm9yX0xhdGVyXCI7XHJcbiAgICAgICAgICBtc2cgPSBcIkluIHdoaXNsaXN0XCI7XHJcbiAgICAgICAgICBidG5fYmcgPSBcImJ0bi1pbmZvXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudHMoXCIjd2lzaGxpc3RcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG1ldGhvZCA9IFwiYWRkX1RvX0NhcnRcIjtcclxuICAgICAgICAgICAgbXNnID0gXCJJbiB0aGUgY2FydFwiO1xyXG4gICAgICAgICAgICBidG5fYmcgPSBcImJ0bi1zdWNjZXNzXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQodGhpcykuaHRtbChcIlBsZWFzZSB3YWl0Li4uLlwiKTtcclxuICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgIHVybDogXCJndWVzdHMvdG9nZ2xlV2lzaGxpc3RBbmRjQ2FydFwiLFxyXG4gICAgICAgICAgZnJtOiAkKHRoaXMpLnByZXYoKSxcclxuICAgICAgICAgIGZybV9uYW1lOlxyXG4gICAgICAgICAgICBcImRlbGV0ZS1jYXJ0LWl0ZW0tZnJtXCIgK1xyXG4gICAgICAgICAgICAkKHRoaXMpLnByZXYoKS5maW5kKFwiaW5wdXRbdHlwZT1oaWRkZW5dXCIpLnZhbCgpLFxyXG4gICAgICAgICAgdGFibGU6IFwiY2FydFwiLFxyXG4gICAgICAgICAgcGFyYW1zOiAkKHRoaXMpLFxyXG4gICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgbWFuYWdlUmVzcG9uc2UpO1xyXG4gICAgICAgIGZ1bmN0aW9uIG1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCBlbHQpIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgZGlzcGxheS5fZGlzcGxheV9jYXJ0KCk7XHJcbiAgICAgICAgICAgIGlmIChtZXRob2QgPT0gXCJhZGRfVG9fQ2FydFwiKSB7XHJcbiAgICAgICAgICAgICAgZWx0LnBhcmVudHMoXCIucm93XCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgcGhwUGx1Z2luLndyYXBwZXIuZmluZChcIiN3aXNobGlzdC1pdGVtc1wiKS5jaGlsZHJlbigpLmxlbmd0aCA9PSAwXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBwaHBQbHVnaW4ud3JhcHBlci5maW5kKFwiI3dpc2hsaXN0XCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYnRuX2JnKTtcclxuICAgICAgICAgICAgcGhwUGx1Z2luLndyYXBwZXJcclxuICAgICAgICAgICAgICAuZmluZChcIiNuZXctcGhvbmVzXCIpXHJcbiAgICAgICAgICAgICAgLmZpbmQoXHJcbiAgICAgICAgICAgICAgICBcIi5hZGRfdG9fY2FydF9mcm0gaW5wdXRbdmFsdWU9J1wiICtcclxuICAgICAgICAgICAgICAgICAgZWx0LnByZXYoKS5jaGlsZHJlbihcIjpmaXJzdFwiKS52YWwoKSArXHJcbiAgICAgICAgICAgICAgICAgIFwiJ11cIlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAuZmluZChcImJ1dHRvblt0eXBlPXN1Ym1pdF1cIilcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4taW5mb1wiKVxyXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhidG5fYmcpXHJcbiAgICAgICAgICAgICAgLmh0bWwobXNnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfTtcclxufVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgbmV3IENhcnQoJChcIiNib2R5XCIpKS5faW5pdCgpO1xyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIG5vdEFSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbm90LWEtcmVnZXhwJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBjb3JyZWN0SXNSZWdFeHBMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYycpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tc3RyaW5nLXByb3RvdHlwZS1zdGFydHN3aXRoIC0tIHNhZmVcbnZhciAkc3RhcnRzV2l0aCA9ICcnLnN0YXJ0c1dpdGg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbnZhciBDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyA9IGNvcnJlY3RJc1JlZ0V4cExvZ2ljKCdzdGFydHNXaXRoJyk7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9wdWxsLzcwMlxudmFyIE1ETl9QT0xZRklMTF9CVUcgPSAhSVNfUFVSRSAmJiAhQ09SUkVDVF9JU19SRUdFWFBfTE9HSUMgJiYgISFmdW5jdGlvbiAoKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFN0cmluZy5wcm90b3R5cGUsICdzdGFydHNXaXRoJyk7XG4gIHJldHVybiBkZXNjcmlwdG9yICYmICFkZXNjcmlwdG9yLndyaXRhYmxlO1xufSgpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zdGFydHN3aXRoXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogIU1ETl9QT0xZRklMTF9CVUcgJiYgIUNPUlJFQ1RfSVNfUkVHRVhQX0xPR0lDIH0sIHtcbiAgc3RhcnRzV2l0aDogZnVuY3Rpb24gc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcgLyogLCBwb3NpdGlvbiA9IDAgKi8pIHtcbiAgICB2YXIgdGhhdCA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgICBub3RBUmVnRXhwKHNlYXJjaFN0cmluZyk7XG4gICAgdmFyIGluZGV4ID0gdG9MZW5ndGgobWluKGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCB0aGF0Lmxlbmd0aCkpO1xuICAgIHZhciBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gJHN0YXJ0c1dpdGhcbiAgICAgID8gJHN0YXJ0c1dpdGguY2FsbCh0aGF0LCBzZWFyY2gsIGluZGV4KVxuICAgICAgOiB0aGF0LnNsaWNlKGluZGV4LCBpbmRleCArIHNlYXJjaC5sZW5ndGgpID09PSBzZWFyY2g7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==