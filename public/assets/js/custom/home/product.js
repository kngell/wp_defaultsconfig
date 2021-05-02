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
/* harmony export */   "IMG": function() { return /* binding */ IMG; },
/* harmony export */   "isIE": function() { return /* binding */ isIE; }
/* harmony export */ });
var BASE_URL = /kngell_ecommerce/;
var AVATAR = BASE_URL + "public/assets/img/users/avatar.png";
var IMG = BASE_URL + "public/assets/img/";
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ "./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/assets/js/core/config.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

//Get visitors Data

var get_visitors_data = function get_visitors_data() {
  return new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default())(function (resolve, reject) {
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
    url: _config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + data.url,
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
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
    var _context, _context2, _context3, _context4;

    this.banner = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context = this.element).call(_context, "#banner-area");
    this.product = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = this.element).call(_context2, "#product");
    this.topSale = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context3 = this.element).call(_context3, "#top-sale");
    this.qty = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context4 = this.element).call(_context4, "#qty");
  };

  PhpPlugin.prototype.setupEvents = function () {
    var _context5;

    var phpPlugin = this; //=======================================================================
    //Owl carousel
    //=======================================================================
    //Top sales

    _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context5 = phpPlugin.topSale).call(_context5, ".owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      responsive: responsive
    }); //=======================================================================
    //Qty section
    //=======================================================================


    phpPlugin.qty.on("click", ".qty-up", function (e) {
      var _context6;

      e.preventDefault();

      var input = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context6 = phpPlugin.qty).call(_context6, "input");

      if (input.val() >= 1 && input.val() <= 9) {
        input.val(function (i, oldval) {
          return ++oldval;
        });
      } else {}
    });
    phpPlugin.qty.on("click", ".qty-down", function (e) {
      var _context7;

      e.preventDefault();

      var input = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context7 = phpPlugin.qty).call(_context7, "input");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL3Zpc2l0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2hvbWUvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJCQVNFX1VSTCIsIkFWQVRBUiIsIklNRyIsImlzSUUiLCJ1c2VyQWdlbnQiLCJuYXZpZ2F0b3IiLCJ0ZXN0IiwiZ2V0X3Zpc2l0b3JzX2RhdGEiLCJyZXNvbHZlIiwicmVqZWN0IiwiZGF0YSIsImlwIiwiJCIsInZhbCIsInNlbmRfdmlzaXRvcnNfZGF0YSIsIm1hbmFnZVIiLCJhamF4IiwidXJsIiwibWV0aG9kIiwidGFibGUiLCJjb29raWVzIiwiZG9uZSIsInJlc3BvbnNlIiwiZmFpbCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNpdmUiLCJpdGVtcyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIlBocFBsdWdpbiIsImVsZW1lbnQiLCJpbml0IiwicHJvdG90eXBlIiwic2V0dXBWYXJpYWJsZXMiLCJzZXR1cEV2ZW50cyIsImJhbm5lciIsInByb2R1Y3QiLCJ0b3BTYWxlIiwicXR5IiwicGhwUGx1Z2luIiwib3dsQ2Fyb3VzZWwiLCJsb29wIiwibmF2IiwiZG90cyIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJpIiwib2xkdmFsIiwiZm4iLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZPLElBQU1BLFFBQVEsR0FBRyxrQkFBakI7QUFDQSxJQUFNQyxNQUFNLEdBQUdELFFBQVEsR0FBRyxvQ0FBMUI7QUFDQSxJQUFN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LENBQUN3QyxFQUFGLENBQUtYLFNBQUwsR0FBaUIsVUFBVVksT0FBVixFQUFtQjtBQUNsQyxRQUFJdEIsU0FBSixDQUFjLElBQWQ7QUFDQSxXQUFPLElBQVA7QUFDRCxHQUhEOztBQUlBbkIsR0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjZCLFNBQWhCO0FBQ0QsQ0ExREQsRSIsImZpbGUiOiJqcy9jdXN0b20vaG9tZS9wcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IC9rbmdlbGxfZWNvbW1lcmNlLztcclxuZXhwb3J0IGNvbnN0IEFWQVRBUiA9IEJBU0VfVVJMICsgXCJwdWJsaWMvYXNzZXRzL2ltZy91c2Vycy9hdmF0YXIucG5nXCI7XHJcbmV4cG9ydCBjb25zdCBJTUcgPSBCQVNFX1VSTCArIFwicHVibGljL2Fzc2V0cy9pbWcvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaXNJRSA9ICgpID0+IHtcclxuICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICByZXR1cm4gL01TSUV8VHJpZGVudC8udGVzdCh1c2VyQWdlbnQpO1xyXG59O1xyXG4iLCIvL0dldCB2aXNpdG9ycyBEYXRhXHJcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmV4cG9ydCBjb25zdCBnZXRfdmlzaXRvcnNfZGF0YSA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIGlwOiAkKFwiI2lwX2FkZHJlc3NcIikudmFsKCksXHJcbiAgICB9O1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgIH0gZWxzZSByZWplY3QoXCJubyBkYXRhXCIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRfdmlzaXRvcnNfZGF0YSA9IChkYXRhLCBtYW5hZ2VSKSA9PiB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpcDogZGF0YS5pcCA/IGRhdGEuaXAgOiBcIlwiLFxyXG4gICAgICBjb29raWVzOiBkYXRhLmNvb2tpZXMgPyBkYXRhLmNvb2tpZXMgOiBcIlwiLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIG1hbmFnZVIocmVzcG9uc2UpO1xyXG4gICAgfSlcclxuICAgIC5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxufTtcclxuIiwiY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICAwOiB7XHJcbiAgICBpdGVtczogMSxcclxuICB9LFxyXG4gIDYwMDoge1xyXG4gICAgaXRlbXM6IDMsXHJcbiAgfSxcclxuICAxMDAwOiB7XHJcbiAgICBpdGVtczogNSxcclxuICB9LFxyXG59O1xyXG5pbXBvcnQgeyBnZXRfdmlzaXRvcnNfZGF0YSwgc2VuZF92aXNpdG9yc19kYXRhIH0gZnJvbSBcImNvcmVqcy92aXNpdG9yc1wiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgZnVuY3Rpb24gUGhwUGx1Z2luKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcbiAgUGhwUGx1Z2luLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zZXR1cFZhcmlhYmxlcygpO1xyXG4gICAgdGhpcy5zZXR1cEV2ZW50cygpO1xyXG4gIH07XHJcbiAgUGhwUGx1Z2luLnByb3RvdHlwZS5zZXR1cFZhcmlhYmxlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuYmFubmVyID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjYmFubmVyLWFyZWFcIik7XHJcbiAgICB0aGlzLnByb2R1Y3QgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNwcm9kdWN0XCIpO1xyXG4gICAgdGhpcy50b3BTYWxlID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjdG9wLXNhbGVcIik7XHJcbiAgICB0aGlzLnF0eSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3F0eVwiKTtcclxuICB9O1xyXG4gIFBocFBsdWdpbi5wcm90b3R5cGUuc2V0dXBFdmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcGhwUGx1Z2luID0gdGhpcztcclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL093bCBjYXJvdXNlbFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9Ub3Agc2FsZXNcclxuICAgIHBocFBsdWdpbi50b3BTYWxlLmZpbmQoXCIub3dsLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgcmVzcG9uc2l2ZTogcmVzcG9uc2l2ZSxcclxuICAgIH0pO1xyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9RdHkgc2VjdGlvblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLnF0eS5vbihcImNsaWNrXCIsIFwiLnF0eS11cFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBpbnB1dCA9IHBocFBsdWdpbi5xdHkuZmluZChcImlucHV0XCIpO1xyXG4gICAgICBpZiAoaW5wdXQudmFsKCkgPj0gMSAmJiBpbnB1dC52YWwoKSA8PSA5KSB7XHJcbiAgICAgICAgaW5wdXQudmFsKGZ1bmN0aW9uIChpLCBvbGR2YWwpIHtcclxuICAgICAgICAgIHJldHVybiArK29sZHZhbDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBwaHBQbHVnaW4ucXR5Lm9uKFwiY2xpY2tcIiwgXCIucXR5LWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBsZXQgaW5wdXQgPSBwaHBQbHVnaW4ucXR5LmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgaWYgKGlucHV0LnZhbCgpID4gMSAmJiBpbnB1dC52YWwoKSA8PSAxMCkge1xyXG4gICAgICAgIGlucHV0LnZhbChmdW5jdGlvbiAoaSwgb2xkdmFsKSB7XHJcbiAgICAgICAgICByZXR1cm4gLS1vbGR2YWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICQuZm4ucGhwUGx1Z2luID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIG5ldyBQaHBQbHVnaW4odGhpcyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG4gICQoXCIjbWFpbi1zaXRlXCIpLnBocFBsdWdpbigpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==