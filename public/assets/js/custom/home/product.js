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
return (self["webpackChunkkngell"] = self["webpackChunkkngell"] || []).push([["js/custom/home/product"],{

/***/ "./src/assets/js/core/config.js":
/*!**************************************!*\
  !*** ./src/assets/js/core/config.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": function() { return /* binding */ BASE_URL; },
/* harmony export */   "AVATAR": function() { return /* binding */ AVATAR; },
/* harmony export */   "isIE": function() { return /* binding */ isIE; }
/* harmony export */ });
var BASE_URL = /kngell_ecommerce/;
var AVATAR = BASE_URL + "public/assets/img/users/avatar.png";
var isIE = function isIE() {
  var userAgent = navigator.userAgent;
  return /MSIE|Trident/.test(userAgent);
};

/***/ }),

/***/ "./src/assets/js/core/visitors.js":
/*!****************************************!*\
  !*** ./src/assets/js/core/visitors.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get_visitors_data": function() { return /* binding */ get_visitors_data; },
/* harmony export */   "send_visitors_data": function() { return /* binding */ send_visitors_data; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/assets/js/core/config.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


//Get visitors Data

var get_visitors_data = function get_visitors_data() {
  return new Promise(function (resolve, reject) {
    var data = {
      ip: $("#ip_address").val()
    };

    if (data) {
      resolve(data);
    } else reject("no data");
  });
};
var send_visitors_data = function send_visitors_data(data, manageR) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_2__.BASE_URL + data.url,
    method: "post",
    data: {
      table: data.table,
      ip: data.ip ? data.ip : "",
      cookies: data.cookies ? data.cookies : ""
    }
  }).done(function (response) {
    manageR(response);
  }).fail(function (error) {
    console.log(error);
  });
};

/***/ }),

/***/ "./src/assets/js/custom/home/product.js":
/*!**********************************************!*\
  !*** ./src/assets/js/custom/home/product.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var corejs_visitors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! corejs/visitors */ "./src/assets/js/core/visitors.js");
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
    this.banner = this.element.find("#banner-area");
    this.product = this.element.find("#product");
    this.topSale = this.element.find("#top-sale");
    this.qty = this.element.find("#qty");
  };

  PhpPlugin.prototype.setupEvents = function () {
    var phpPlugin = this; //=======================================================================
    //Owl carousel
    //=======================================================================
    //Top sales

    phpPlugin.topSale.find(".owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      responsive: responsive
    }); //=======================================================================
    //Qty section
    //=======================================================================

    phpPlugin.qty.on("click", ".qty-up", function (e) {
      e.preventDefault();
      var input = phpPlugin.qty.find("input");

      if (input.val() >= 1 && input.val() <= 9) {
        input.val(function (i, oldval) {
          return ++oldval;
        });
      } else {}
    });
    phpPlugin.qty.on("click", ".qty-down", function (e) {
      e.preventDefault();
      var input = phpPlugin.qty.find("input");

      if (input.val() > 1 && input.val() <= 10) {
        input.val(function (i, oldval) {
          return --oldval;
        });
      } else {}
    });
  };

  $.fn.phpPlugin = function (options) {
    new PhpPlugin(this);
    return this;
  };

  $("#main-site").phpPlugin();
});

/***/ })

},
0,[["./src/assets/js/custom/home/product.js","commons/frontend/commonVendor","js/librairies/frontlib"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL3Zpc2l0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2hvbWUvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJCQVNFX1VSTCIsIkFWQVRBUiIsImlzSUUiLCJ1c2VyQWdlbnQiLCJuYXZpZ2F0b3IiLCJ0ZXN0IiwiZ2V0X3Zpc2l0b3JzX2RhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImRhdGEiLCJpcCIsIiQiLCJ2YWwiLCJzZW5kX3Zpc2l0b3JzX2RhdGEiLCJtYW5hZ2VSIiwiYWpheCIsInVybCIsIm1ldGhvZCIsInRhYmxlIiwiY29va2llcyIsImRvbmUiLCJyZXNwb25zZSIsImZhaWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zaXZlIiwiaXRlbXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJQaHBQbHVnaW4iLCJlbGVtZW50IiwiaW5pdCIsInByb3RvdHlwZSIsInNldHVwVmFyaWFibGVzIiwic2V0dXBFdmVudHMiLCJiYW5uZXIiLCJmaW5kIiwicHJvZHVjdCIsInRvcFNhbGUiLCJxdHkiLCJwaHBQbHVnaW4iLCJvd2xDYXJvdXNlbCIsImxvb3AiLCJuYXYiLCJkb3RzIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsImkiLCJvbGR2YWwiLCJmbiIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7QUNWTyxJQUFNQSxRQUFRLEdBQUcsa0JBQWpCO0FBQ0EsSUFBTUMsTUFBTSxHQUFHRCxRQUFRLEdBQUcsb0NBQTFC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QUMsQ0FBQ3lDLEVBQUYsQ0FBS1gsU0FBTCxHQUFpQixVQUFVWSxPQUFWLEVBQW1CO0FBQ2xDLFFBQUl2QixTQUFKLENBQWMsSUFBZDtBQUNBLFdBQU8sSUFBUDtBQUNELEdBSEQ7O0FBSUFuQixHQUFDLENBQUMsWUFBRCxDQUFELENBQWdCOEIsU0FBaEI7QUFDRCxDQTFERCxFIiwiZmlsZSI6ImpzL2N1c3RvbS9ob21lL3Byb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gL2tuZ2VsbF9lY29tbWVyY2UvO1xyXG5leHBvcnQgY29uc3QgQVZBVEFSID0gQkFTRV9VUkwgKyBcInB1YmxpYy9hc3NldHMvaW1nL3VzZXJzL2F2YXRhci5wbmdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0lFID0gKCkgPT4ge1xyXG4gIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gIHJldHVybiAvTVNJRXxUcmlkZW50Ly50ZXN0KHVzZXJBZ2VudCk7XHJcbn07XHJcbiIsIi8vR2V0IHZpc2l0b3JzIERhdGFcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuZXhwb3J0IGNvbnN0IGdldF92aXNpdG9yc19kYXRhID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgaXA6ICQoXCIjaXBfYWRkcmVzc1wiKS52YWwoKSxcclxuICAgIH07XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgfSBlbHNlIHJlamVjdChcIm5vIGRhdGFcIik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZF92aXNpdG9yc19kYXRhID0gKGRhdGEsIG1hbmFnZVIpID0+IHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgIGlwOiBkYXRhLmlwID8gZGF0YS5pcCA6IFwiXCIsXHJcbiAgICAgIGNvb2tpZXM6IGRhdGEuY29va2llcyA/IGRhdGEuY29va2llcyA6IFwiXCIsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgbWFuYWdlUihyZXNwb25zZSk7XHJcbiAgICB9KVxyXG4gICAgLmZhaWwoKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJjb25zdCByZXNwb25zaXZlID0ge1xyXG4gIDA6IHtcclxuICAgIGl0ZW1zOiAxLFxyXG4gIH0sXHJcbiAgNjAwOiB7XHJcbiAgICBpdGVtczogMyxcclxuICB9LFxyXG4gIDEwMDA6IHtcclxuICAgIGl0ZW1zOiA1LFxyXG4gIH0sXHJcbn07XHJcbmltcG9ydCB7IGdldF92aXNpdG9yc19kYXRhLCBzZW5kX3Zpc2l0b3JzX2RhdGEgfSBmcm9tIFwiY29yZWpzL3Zpc2l0b3JzXCI7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBmdW5jdGlvbiBQaHBQbHVnaW4oZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuICBQaHBQbHVnaW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldHVwVmFyaWFibGVzKCk7XHJcbiAgICB0aGlzLnNldHVwRXZlbnRzKCk7XHJcbiAgfTtcclxuICBQaHBQbHVnaW4ucHJvdG90eXBlLnNldHVwVmFyaWFibGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5iYW5uZXIgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNiYW5uZXItYXJlYVwiKTtcclxuICAgIHRoaXMucHJvZHVjdCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3Byb2R1Y3RcIik7XHJcbiAgICB0aGlzLnRvcFNhbGUgPSB0aGlzLmVsZW1lbnQuZmluZChcIiN0b3Atc2FsZVwiKTtcclxuICAgIHRoaXMucXR5ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjcXR5XCIpO1xyXG4gIH07XHJcbiAgUGhwUGx1Z2luLnByb3RvdHlwZS5zZXR1cEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwaHBQbHVnaW4gPSB0aGlzO1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vT3dsIGNhcm91c2VsXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL1RvcCBzYWxlc1xyXG4gICAgcGhwUGx1Z2luLnRvcFNhbGUuZmluZChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBuYXY6IHRydWUsXHJcbiAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICByZXNwb25zaXZlOiByZXNwb25zaXZlLFxyXG4gICAgfSk7XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL1F0eSBzZWN0aW9uXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwaHBQbHVnaW4ucXR5Lm9uKFwiY2xpY2tcIiwgXCIucXR5LXVwXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbGV0IGlucHV0ID0gcGhwUGx1Z2luLnF0eS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgIGlmIChpbnB1dC52YWwoKSA+PSAxICYmIGlucHV0LnZhbCgpIDw9IDkpIHtcclxuICAgICAgICBpbnB1dC52YWwoZnVuY3Rpb24gKGksIG9sZHZhbCkge1xyXG4gICAgICAgICAgcmV0dXJuICsrb2xkdmFsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHBocFBsdWdpbi5xdHkub24oXCJjbGlja1wiLCBcIi5xdHktZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBpbnB1dCA9IHBocFBsdWdpbi5xdHkuZmluZChcImlucHV0XCIpO1xyXG4gICAgICBpZiAoaW5wdXQudmFsKCkgPiAxICYmIGlucHV0LnZhbCgpIDw9IDEwKSB7XHJcbiAgICAgICAgaW5wdXQudmFsKGZ1bmN0aW9uIChpLCBvbGR2YWwpIHtcclxuICAgICAgICAgIHJldHVybiAtLW9sZHZhbDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJC5mbi5waHBQbHVnaW4gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgbmV3IFBocFBsdWdpbih0aGlzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcbiAgJChcIiNtYWluLXNpdGVcIikucGhwUGx1Z2luKCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9