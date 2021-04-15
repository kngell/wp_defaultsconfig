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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL3Zpc2l0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2hvbWUvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJCQVNFX1VSTCIsIkFWQVRBUiIsIklNRyIsImlzSUUiLCJ1c2VyQWdlbnQiLCJuYXZpZ2F0b3IiLCJ0ZXN0IiwiZ2V0X3Zpc2l0b3JzX2RhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImRhdGEiLCJpcCIsIiQiLCJ2YWwiLCJzZW5kX3Zpc2l0b3JzX2RhdGEiLCJtYW5hZ2VSIiwiYWpheCIsInVybCIsIm1ldGhvZCIsInRhYmxlIiwiY29va2llcyIsImRvbmUiLCJyZXNwb25zZSIsImZhaWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zaXZlIiwiaXRlbXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJQaHBQbHVnaW4iLCJlbGVtZW50IiwiaW5pdCIsInByb3RvdHlwZSIsInNldHVwVmFyaWFibGVzIiwic2V0dXBFdmVudHMiLCJiYW5uZXIiLCJmaW5kIiwicHJvZHVjdCIsInRvcFNhbGUiLCJxdHkiLCJwaHBQbHVnaW4iLCJvd2xDYXJvdXNlbCIsImxvb3AiLCJuYXYiLCJkb3RzIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsImkiLCJvbGR2YWwiLCJmbiIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7O0FDVk8sSUFBTUEsUUFBUSxHQUFHLGtCQUFqQjtBQUNBLElBQU1DLE1BQU0sR0FBR0QsUUFBUSxHQUFHLG9DQUExQjtBQUNBLElBQU1FLEdBQUcsR0FBR0YsUUFBUSxHQUFHLG9CQUF2QjtBQUVBLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDeEIsTUFBSUMsU0FBUyxHQUFHQyxTQUFTLENBQUNELFNBQTFCO0FBQ0EsU0FBTyxlQUFlRSxJQUFmLENBQW9CRixTQUFwQixDQUFQO0FBQ0QsQ0FITSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKUDtBQUNBO0FBQ08sSUFBTUcsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQ3JDLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxRQUFJQyxJQUFJLEdBQUc7QUFDVEMsUUFBRSxFQUFFQyxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCQyxHQUFqQjtBQURLLEtBQVg7O0FBR0EsUUFBSUgsSUFBSixFQUFVO0FBQ1JGLGFBQU8sQ0FBQ0UsSUFBRCxDQUFQO0FBQ0QsS0FGRCxNQUVPRCxNQUFNLENBQUMsU0FBRCxDQUFOO0FBQ1IsR0FQTSxDQUFQO0FBUUQsQ0FUTTtBQVdBLElBQU1LLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0osSUFBRCxFQUFPSyxPQUFQLEVBQW1CO0FBQ25ESCxHQUFDLENBQUNJLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVsQiw2Q0FBUSxHQUFHVyxJQUFJLENBQUNPLEdBRGhCO0FBRUxDLFVBQU0sRUFBRSxNQUZIO0FBR0xSLFFBQUksRUFBRTtBQUNKUyxXQUFLLEVBQUVULElBQUksQ0FBQ1MsS0FEUjtBQUVKUixRQUFFLEVBQUVELElBQUksQ0FBQ0MsRUFBTCxHQUFVRCxJQUFJLENBQUNDLEVBQWYsR0FBb0IsRUFGcEI7QUFHSlMsYUFBTyxFQUFFVixJQUFJLENBQUNVLE9BQUwsR0FBZVYsSUFBSSxDQUFDVSxPQUFwQixHQUE4QjtBQUhuQztBQUhELEdBQVAsRUFTR0MsSUFUSCxDQVNRLFVBQUNDLFFBQUQsRUFBYztBQUNsQlAsV0FBTyxDQUFDTyxRQUFELENBQVA7QUFDRCxHQVhILEVBWUdDLElBWkgsQ0FZUSxVQUFDQyxLQUFELEVBQVc7QUFDZkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxHQWRIO0FBZUQsQ0FoQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiUCxJQUFNRyxVQUFVLEdBQUc7QUFDakIsS0FBRztBQUNEQyxTQUFLLEVBQUU7QUFETixHQURjO0FBSWpCLE9BQUs7QUFDSEEsU0FBSyxFQUFFO0FBREosR0FKWTtBQU9qQixRQUFNO0FBQ0pBLFNBQUssRUFBRTtBQURIO0FBUFcsQ0FBbkI7QUFXQTtBQUNBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3hELFdBQVNDLFNBQVQsQ0FBbUJDLE9BQW5CLEVBQTRCO0FBQzFCLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUw7QUFDRDs7QUFDREYsV0FBUyxDQUFDRyxTQUFWLENBQW9CRCxJQUFwQixHQUEyQixZQUFZO0FBQ3JDLFNBQUtFLGNBQUw7QUFDQSxTQUFLQyxXQUFMO0FBQ0QsR0FIRDs7QUFJQUwsV0FBUyxDQUFDRyxTQUFWLENBQW9CQyxjQUFwQixHQUFxQyxZQUFZO0FBQy9DLFNBQUtFLE1BQUwsR0FBYyxLQUFLTCxPQUFMLENBQWFNLElBQWIsQ0FBa0IsY0FBbEIsQ0FBZDtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFLUCxPQUFMLENBQWFNLElBQWIsQ0FBa0IsVUFBbEIsQ0FBZjtBQUNBLFNBQUtFLE9BQUwsR0FBZSxLQUFLUixPQUFMLENBQWFNLElBQWIsQ0FBa0IsV0FBbEIsQ0FBZjtBQUNBLFNBQUtHLEdBQUwsR0FBVyxLQUFLVCxPQUFMLENBQWFNLElBQWIsQ0FBa0IsTUFBbEIsQ0FBWDtBQUNELEdBTEQ7O0FBTUFQLFdBQVMsQ0FBQ0csU0FBVixDQUFvQkUsV0FBcEIsR0FBa0MsWUFBWTtBQUM1QyxRQUFJTSxTQUFTLEdBQUcsSUFBaEIsQ0FENEMsQ0FHNUM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FBLGFBQVMsQ0FBQ0YsT0FBVixDQUFrQkYsSUFBbEIsQ0FBdUIsZUFBdkIsRUFBd0NLLFdBQXhDLENBQW9EO0FBQ2xEQyxVQUFJLEVBQUUsSUFENEM7QUFFbERDLFNBQUcsRUFBRSxJQUY2QztBQUdsREMsVUFBSSxFQUFFLEtBSDRDO0FBSWxEbkIsZ0JBQVUsRUFBRUE7QUFKc0MsS0FBcEQsRUFQNEMsQ0FhNUM7QUFDQTtBQUNBOztBQUNBZSxhQUFTLENBQUNELEdBQVYsQ0FBY00sRUFBZCxDQUFpQixPQUFqQixFQUEwQixTQUExQixFQUFxQyxVQUFVQyxDQUFWLEVBQWE7QUFDaERBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQUlDLEtBQUssR0FBR1IsU0FBUyxDQUFDRCxHQUFWLENBQWNILElBQWQsQ0FBbUIsT0FBbkIsQ0FBWjs7QUFDQSxVQUFJWSxLQUFLLENBQUNyQyxHQUFOLE1BQWUsQ0FBZixJQUFvQnFDLEtBQUssQ0FBQ3JDLEdBQU4sTUFBZSxDQUF2QyxFQUEwQztBQUN4Q3FDLGFBQUssQ0FBQ3JDLEdBQU4sQ0FBVSxVQUFVc0MsQ0FBVixFQUFhQyxNQUFiLEVBQXFCO0FBQzdCLGlCQUFPLEVBQUVBLE1BQVQ7QUFDRCxTQUZEO0FBR0QsT0FKRCxNQUlPLENBQ047QUFDRixLQVREO0FBVUFWLGFBQVMsQ0FBQ0QsR0FBVixDQUFjTSxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFdBQTFCLEVBQXVDLFVBQVVDLENBQVYsRUFBYTtBQUNsREEsT0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBSUMsS0FBSyxHQUFHUixTQUFTLENBQUNELEdBQVYsQ0FBY0gsSUFBZCxDQUFtQixPQUFuQixDQUFaOztBQUNBLFVBQUlZLEtBQUssQ0FBQ3JDLEdBQU4sS0FBYyxDQUFkLElBQW1CcUMsS0FBSyxDQUFDckMsR0FBTixNQUFlLEVBQXRDLEVBQTBDO0FBQ3hDcUMsYUFBSyxDQUFDckMsR0FBTixDQUFVLFVBQVVzQyxDQUFWLEVBQWFDLE1BQWIsRUFBcUI7QUFDN0IsaUJBQU8sRUFBRUEsTUFBVDtBQUNELFNBRkQ7QUFHRCxPQUpELE1BSU8sQ0FDTjtBQUNGLEtBVEQ7QUFVRCxHQXBDRDs7QUFzQ0F4QyxHQUFDLENBQUN5QyxFQUFGLENBQUtYLFNBQUwsR0FBaUIsVUFBVVksT0FBVixFQUFtQjtBQUNsQyxRQUFJdkIsU0FBSixDQUFjLElBQWQ7QUFDQSxXQUFPLElBQVA7QUFDRCxHQUhEOztBQUlBbkIsR0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjhCLFNBQWhCO0FBQ0QsQ0ExREQsRSIsImZpbGUiOiJqcy9jdXN0b20vaG9tZS9wcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IC9rbmdlbGxfZWNvbW1lcmNlLztcclxuZXhwb3J0IGNvbnN0IEFWQVRBUiA9IEJBU0VfVVJMICsgXCJwdWJsaWMvYXNzZXRzL2ltZy91c2Vycy9hdmF0YXIucG5nXCI7XHJcbmV4cG9ydCBjb25zdCBJTUcgPSBCQVNFX1VSTCArIFwicHVibGljL2Fzc2V0cy9pbWcvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaXNJRSA9ICgpID0+IHtcclxuICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICByZXR1cm4gL01TSUV8VHJpZGVudC8udGVzdCh1c2VyQWdlbnQpO1xyXG59O1xyXG4iLCIvL0dldCB2aXNpdG9ycyBEYXRhXHJcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmV4cG9ydCBjb25zdCBnZXRfdmlzaXRvcnNfZGF0YSA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIGlwOiAkKFwiI2lwX2FkZHJlc3NcIikudmFsKCksXHJcbiAgICB9O1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgIH0gZWxzZSByZWplY3QoXCJubyBkYXRhXCIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRfdmlzaXRvcnNfZGF0YSA9IChkYXRhLCBtYW5hZ2VSKSA9PiB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpcDogZGF0YS5pcCA/IGRhdGEuaXAgOiBcIlwiLFxyXG4gICAgICBjb29raWVzOiBkYXRhLmNvb2tpZXMgPyBkYXRhLmNvb2tpZXMgOiBcIlwiLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIG1hbmFnZVIocmVzcG9uc2UpO1xyXG4gICAgfSlcclxuICAgIC5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxufTtcclxuIiwiY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICAwOiB7XHJcbiAgICBpdGVtczogMSxcclxuICB9LFxyXG4gIDYwMDoge1xyXG4gICAgaXRlbXM6IDMsXHJcbiAgfSxcclxuICAxMDAwOiB7XHJcbiAgICBpdGVtczogNSxcclxuICB9LFxyXG59O1xyXG5pbXBvcnQgeyBnZXRfdmlzaXRvcnNfZGF0YSwgc2VuZF92aXNpdG9yc19kYXRhIH0gZnJvbSBcImNvcmVqcy92aXNpdG9yc1wiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgZnVuY3Rpb24gUGhwUGx1Z2luKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcbiAgUGhwUGx1Z2luLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zZXR1cFZhcmlhYmxlcygpO1xyXG4gICAgdGhpcy5zZXR1cEV2ZW50cygpO1xyXG4gIH07XHJcbiAgUGhwUGx1Z2luLnByb3RvdHlwZS5zZXR1cFZhcmlhYmxlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuYmFubmVyID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjYmFubmVyLWFyZWFcIik7XHJcbiAgICB0aGlzLnByb2R1Y3QgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNwcm9kdWN0XCIpO1xyXG4gICAgdGhpcy50b3BTYWxlID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjdG9wLXNhbGVcIik7XHJcbiAgICB0aGlzLnF0eSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3F0eVwiKTtcclxuICB9O1xyXG4gIFBocFBsdWdpbi5wcm90b3R5cGUuc2V0dXBFdmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcGhwUGx1Z2luID0gdGhpcztcclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL093bCBjYXJvdXNlbFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9Ub3Agc2FsZXNcclxuICAgIHBocFBsdWdpbi50b3BTYWxlLmZpbmQoXCIub3dsLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgcmVzcG9uc2l2ZTogcmVzcG9uc2l2ZSxcclxuICAgIH0pO1xyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9RdHkgc2VjdGlvblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLnF0eS5vbihcImNsaWNrXCIsIFwiLnF0eS11cFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBpbnB1dCA9IHBocFBsdWdpbi5xdHkuZmluZChcImlucHV0XCIpO1xyXG4gICAgICBpZiAoaW5wdXQudmFsKCkgPj0gMSAmJiBpbnB1dC52YWwoKSA8PSA5KSB7XHJcbiAgICAgICAgaW5wdXQudmFsKGZ1bmN0aW9uIChpLCBvbGR2YWwpIHtcclxuICAgICAgICAgIHJldHVybiArK29sZHZhbDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBwaHBQbHVnaW4ucXR5Lm9uKFwiY2xpY2tcIiwgXCIucXR5LWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBsZXQgaW5wdXQgPSBwaHBQbHVnaW4ucXR5LmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgaWYgKGlucHV0LnZhbCgpID4gMSAmJiBpbnB1dC52YWwoKSA8PSAxMCkge1xyXG4gICAgICAgIGlucHV0LnZhbChmdW5jdGlvbiAoaSwgb2xkdmFsKSB7XHJcbiAgICAgICAgICByZXR1cm4gLS1vbGR2YWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICQuZm4ucGhwUGx1Z2luID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIG5ldyBQaHBQbHVnaW4odGhpcyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG4gICQoXCIjbWFpbi1zaXRlXCIpLnBocFBsdWdpbigpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==