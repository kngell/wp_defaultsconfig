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
    //Get Visitors Data
    //=======================================================================

    var visitor = (0,corejs_visitors__WEBPACK_IMPORTED_MODULE_1__.get_visitors_data)().then(function (visitors_data) {
      var data = {
        url: "visitors/track",
        table: "visitors",
        ip: visitors_data.ip
      };
      (0,corejs_visitors__WEBPACK_IMPORTED_MODULE_1__.send_visitors_data)(data, manageR);

      function manageR(response) {}
    }); //=======================================================================
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
0,[["./src/assets/js/custom/home/product.js","commons/frontend/commonVendor","commons/frontend/commonCustomModules","js/librairies/frontlib"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2hvbWUvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJyZXNwb25zaXZlIiwiaXRlbXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJQaHBQbHVnaW4iLCJlbGVtZW50IiwiaW5pdCIsInByb3RvdHlwZSIsInNldHVwVmFyaWFibGVzIiwic2V0dXBFdmVudHMiLCJiYW5uZXIiLCJmaW5kIiwicHJvZHVjdCIsInRvcFNhbGUiLCJxdHkiLCJwaHBQbHVnaW4iLCJ2aXNpdG9yIiwiZ2V0X3Zpc2l0b3JzX2RhdGEiLCJ0aGVuIiwidmlzaXRvcnNfZGF0YSIsImRhdGEiLCJ1cmwiLCJ0YWJsZSIsImlwIiwic2VuZF92aXNpdG9yc19kYXRhIiwibWFuYWdlUiIsInJlc3BvbnNlIiwib3dsQ2Fyb3VzZWwiLCJsb29wIiwibmF2IiwiZG90cyIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWwiLCJpIiwib2xkdmFsIiwiJCIsImZuIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLElBQU1BLFVBQVUsR0FBRztBQUNqQixLQUFHO0FBQ0RDLFNBQUssRUFBRTtBQUROLEdBRGM7QUFJakIsT0FBSztBQUNIQSxTQUFLLEVBQUU7QUFESixHQUpZO0FBT2pCLFFBQU07QUFDSkEsU0FBSyxFQUFFO0FBREg7QUFQVyxDQUFuQjtBQVdBO0FBQ0FDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDeEQsV0FBU0MsU0FBVCxDQUFtQkMsT0FBbkIsRUFBNEI7QUFDMUIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsSUFBTDtBQUNE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Q0FBYyxJQUFkO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FIRDs7QUFJQWtDLEdBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0J2QixTQUFoQjtBQUNELENBdkVELEUiLCJmaWxlIjoianMvY3VzdG9tL2hvbWUvcHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJjb25zdCByZXNwb25zaXZlID0ge1xyXG4gIDA6IHtcclxuICAgIGl0ZW1zOiAxLFxyXG4gIH0sXHJcbiAgNjAwOiB7XHJcbiAgICBpdGVtczogMyxcclxuICB9LFxyXG4gIDEwMDA6IHtcclxuICAgIGl0ZW1zOiA1LFxyXG4gIH0sXHJcbn07XHJcbmltcG9ydCB7IGdldF92aXNpdG9yc19kYXRhLCBzZW5kX3Zpc2l0b3JzX2RhdGEgfSBmcm9tIFwiY29yZWpzL3Zpc2l0b3JzXCI7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBmdW5jdGlvbiBQaHBQbHVnaW4oZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuICBQaHBQbHVnaW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldHVwVmFyaWFibGVzKCk7XHJcbiAgICB0aGlzLnNldHVwRXZlbnRzKCk7XHJcbiAgfTtcclxuICBQaHBQbHVnaW4ucHJvdG90eXBlLnNldHVwVmFyaWFibGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5iYW5uZXIgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNiYW5uZXItYXJlYVwiKTtcclxuICAgIHRoaXMucHJvZHVjdCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3Byb2R1Y3RcIik7XHJcbiAgICB0aGlzLnRvcFNhbGUgPSB0aGlzLmVsZW1lbnQuZmluZChcIiN0b3Atc2FsZVwiKTtcclxuICAgIHRoaXMucXR5ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjcXR5XCIpO1xyXG4gIH07XHJcbiAgUGhwUGx1Z2luLnByb3RvdHlwZS5zZXR1cEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwaHBQbHVnaW4gPSB0aGlzO1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vR2V0IFZpc2l0b3JzIERhdGFcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGxldCB2aXNpdG9yID0gZ2V0X3Zpc2l0b3JzX2RhdGEoKS50aGVuKCh2aXNpdG9yc19kYXRhKSA9PiB7XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHVybDogXCJ2aXNpdG9ycy90cmFja1wiLFxyXG4gICAgICAgIHRhYmxlOiBcInZpc2l0b3JzXCIsXHJcbiAgICAgICAgaXA6IHZpc2l0b3JzX2RhdGEuaXAsXHJcbiAgICAgIH07XHJcbiAgICAgIHNlbmRfdmlzaXRvcnNfZGF0YShkYXRhLCBtYW5hZ2VSKTtcclxuICAgICAgZnVuY3Rpb24gbWFuYWdlUihyZXNwb25zZSkge31cclxuICAgIH0pO1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vT3dsIGNhcm91c2VsXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL1RvcCBzYWxlc1xyXG4gICAgcGhwUGx1Z2luLnRvcFNhbGUuZmluZChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBuYXY6IHRydWUsXHJcbiAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICByZXNwb25zaXZlOiByZXNwb25zaXZlLFxyXG4gICAgfSk7XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL1F0eSBzZWN0aW9uXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwaHBQbHVnaW4ucXR5Lm9uKFwiY2xpY2tcIiwgXCIucXR5LXVwXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbGV0IGlucHV0ID0gcGhwUGx1Z2luLnF0eS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgIGlmIChpbnB1dC52YWwoKSA+PSAxICYmIGlucHV0LnZhbCgpIDw9IDkpIHtcclxuICAgICAgICBpbnB1dC52YWwoZnVuY3Rpb24gKGksIG9sZHZhbCkge1xyXG4gICAgICAgICAgcmV0dXJuICsrb2xkdmFsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHBocFBsdWdpbi5xdHkub24oXCJjbGlja1wiLCBcIi5xdHktZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBpbnB1dCA9IHBocFBsdWdpbi5xdHkuZmluZChcImlucHV0XCIpO1xyXG4gICAgICBpZiAoaW5wdXQudmFsKCkgPiAxICYmIGlucHV0LnZhbCgpIDw9IDEwKSB7XHJcbiAgICAgICAgaW5wdXQudmFsKGZ1bmN0aW9uIChpLCBvbGR2YWwpIHtcclxuICAgICAgICAgIHJldHVybiAtLW9sZHZhbDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJC5mbi5waHBQbHVnaW4gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgbmV3IFBocFBsdWdpbih0aGlzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcbiAgJChcIiNtYWluLXNpdGVcIikucGhwUGx1Z2luKCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9