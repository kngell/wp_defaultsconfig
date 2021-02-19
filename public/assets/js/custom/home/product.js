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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2hvbWUvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJyZXNwb25zaXZlIiwiaXRlbXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJQaHBQbHVnaW4iLCJlbGVtZW50IiwiaW5pdCIsInByb3RvdHlwZSIsInNldHVwVmFyaWFibGVzIiwic2V0dXBFdmVudHMiLCJiYW5uZXIiLCJmaW5kIiwicHJvZHVjdCIsInRvcFNhbGUiLCJxdHkiLCJwaHBQbHVnaW4iLCJvd2xDYXJvdXNlbCIsImxvb3AiLCJuYXYiLCJkb3RzIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInZhbCIsImkiLCJvbGR2YWwiLCIkIiwiZm4iLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7O0FDVkEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCLEtBQUc7QUFDREMsU0FBSyxFQUFFO0FBRE4sR0FEYztBQUlqQixPQUFLO0FBQ0hBLFNBQUssRUFBRTtBQURKLEdBSlk7QUFPakIsUUFBTTtBQUNKQSxTQUFLLEVBQUU7QUFESDtBQVBXLENBQW5CO0FBV0E7QUFDQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN4RCxXQUFTQyxTQUFULENBQW1CQyxPQUFuQixFQUE0QjtBQUMxQixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMO0FBQ0Q7O0FBQ0RGLFdBQVMsQ0FBQ0csU0FBVixDQUFvQkQsSUFBcEIsR0FBMkIsWUFBWTtBQUNyQyxTQUFLRSxjQUFMO0FBQ0EsU0FBS0MsV0FBTDtBQUNELEdBSEQ7O0FBSUFMLFdBQVMsQ0FBQ0csU0FBVixDQUFvQkMsY0FBcEIsR0FBcUMsWUFBWTtBQUMvQyxTQUFLRSxNQUFMLEdBQWMsS0FBS0wsT0FBTCxDQUFhTSxJQUFiLENBQWtCLGNBQWxCLENBQWQ7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS1AsT0FBTCxDQUFhTSxJQUFiLENBQWtCLFVBQWxCLENBQWY7QUFDQSxTQUFLRSxPQUFMLEdBQWUsS0FBS1IsT0FBTCxDQUFhTSxJQUFiLENBQWtCLFdBQWxCLENBQWY7QUFDQSxTQUFLRyxHQUFMLEdBQVcsS0FBS1QsT0FBTCxDQUFhTSxJQUFiLENBQWtCLE1BQWxCLENBQVg7QUFDRCxHQUxEOztBQU1BUCxXQUFTLENBQUNHLFNBQVYsQ0FBb0JFLFdBQXBCLEdBQWtDLFlBQVk7QUFDNUMsUUFBSU0sU0FBUyxHQUFHLElBQWhCLENBRDRDLENBRzVDO0FBQ0E7QUFDQTtBQUNBOztBQUNBQSxhQUFTLENBQUNGLE9BQVYsQ0FBa0JGLElBQWxCLENBQXVCLGVBQXZCLEVBQXdDSyxXQUF4QyxDQUFvRDtBQUNsREMsVUFBSSxFQUFFLElBRDRDO0FBRWxEQyxTQUFHLEVBQUUsSUFGNkM7QUFHbERDLFVBQUksRUFBRSxLQUg0QztBQUlsRG5CLGdCQUFVLEVBQUVBO0FBSnNDLEtBQXBELEVBUDRDLENBYTVDO0FBQ0E7QUFDQTs7QUFDQWUsYUFBUyxDQUFDRCxHQUFWLENBQWNNLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsU0FBMUIsRUFBcUMsVUFBVUMsQ0FBVixFQUFhO0FBQ2hEQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFJQyxLQUFLLEdBQUdSLFNBQVMsQ0FBQ0QsR0FBVixDQUFjSCxJQUFkLENBQW1CLE9BQW5CLENBQVo7O0FBQ0EsVUFBSVksS0FBSyxDQUFDQyxHQUFOLE1BQWUsQ0FBZixJQUFvQkQsS0FBSyxDQUFDQyxHQUFOLE1BQWUsQ0FBdkMsRUFBMEM7QUFDeENELGFBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQVVDLENBQVYsRUFBYUMsTUFBYixFQUFxQjtBQUM3QixpQkFBTyxFQUFFQSxNQUFUO0FBQ0QsU0FGRDtBQUdELE9BSkQsTUFJTyxDQUNOO0FBQ0YsS0FURDtBQVVBWCxhQUFTLENBQUNELEdBQVYsQ0FBY00sRUFBZCxDQUFpQixPQUFqQixFQUEwQixXQUExQixFQUF1QyxVQUFVQyxDQUFWLEVBQWE7QUFDbERBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQUlDLEtBQUssR0FBR1IsU0FBUyxDQUFDRCxHQUFWLENBQWNILElBQWQsQ0FBbUIsT0FBbkIsQ0FBWjs7QUFDQSxVQUFJWSxLQUFLLENBQUNDLEdBQU4sS0FBYyxDQUFkLElBQW1CRCxLQUFLLENBQUNDLEdBQU4sTUFBZSxFQUF0QyxFQUEwQztBQUN4Q0QsYUFBSyxDQUFDQyxHQUFOLENBQVUsVUFBVUMsQ0FBVixFQUFhQyxNQUFiLEVBQXFCO0FBQzdCLGlCQUFPLEVBQUVBLE1BQVQ7QUFDRCxTQUZEO0FBR0QsT0FKRCxNQUlPLENBQ047QUFDRixLQVREO0FBVUQsR0FwQ0Q7O0FBc0NBQyxHQUFDLENBQUNDLEVBQUYsQ0FBS2IsU0FBTCxHQUFpQixVQUFVYyxPQUFWLEVBQW1CO0FBQ2xDLFFBQUl6QixTQUFKLENBQWMsSUFBZDtBQUNBLFdBQU8sSUFBUDtBQUNELEdBSEQ7O0FBSUF1QixHQUFDLENBQUMsWUFBRCxDQUFELENBQWdCWixTQUFoQjtBQUNELENBMURELEUiLCJmaWxlIjoianMvY3VzdG9tL2hvbWUvcHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJjb25zdCByZXNwb25zaXZlID0ge1xyXG4gIDA6IHtcclxuICAgIGl0ZW1zOiAxLFxyXG4gIH0sXHJcbiAgNjAwOiB7XHJcbiAgICBpdGVtczogMyxcclxuICB9LFxyXG4gIDEwMDA6IHtcclxuICAgIGl0ZW1zOiA1LFxyXG4gIH0sXHJcbn07XHJcbmltcG9ydCB7IGdldF92aXNpdG9yc19kYXRhLCBzZW5kX3Zpc2l0b3JzX2RhdGEgfSBmcm9tIFwiY29yZWpzL3Zpc2l0b3JzXCI7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBmdW5jdGlvbiBQaHBQbHVnaW4oZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuICBQaHBQbHVnaW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldHVwVmFyaWFibGVzKCk7XHJcbiAgICB0aGlzLnNldHVwRXZlbnRzKCk7XHJcbiAgfTtcclxuICBQaHBQbHVnaW4ucHJvdG90eXBlLnNldHVwVmFyaWFibGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5iYW5uZXIgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNiYW5uZXItYXJlYVwiKTtcclxuICAgIHRoaXMucHJvZHVjdCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3Byb2R1Y3RcIik7XHJcbiAgICB0aGlzLnRvcFNhbGUgPSB0aGlzLmVsZW1lbnQuZmluZChcIiN0b3Atc2FsZVwiKTtcclxuICAgIHRoaXMucXR5ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjcXR5XCIpO1xyXG4gIH07XHJcbiAgUGhwUGx1Z2luLnByb3RvdHlwZS5zZXR1cEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwaHBQbHVnaW4gPSB0aGlzO1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vT3dsIGNhcm91c2VsXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL1RvcCBzYWxlc1xyXG4gICAgcGhwUGx1Z2luLnRvcFNhbGUuZmluZChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBuYXY6IHRydWUsXHJcbiAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICByZXNwb25zaXZlOiByZXNwb25zaXZlLFxyXG4gICAgfSk7XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL1F0eSBzZWN0aW9uXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwaHBQbHVnaW4ucXR5Lm9uKFwiY2xpY2tcIiwgXCIucXR5LXVwXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbGV0IGlucHV0ID0gcGhwUGx1Z2luLnF0eS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgIGlmIChpbnB1dC52YWwoKSA+PSAxICYmIGlucHV0LnZhbCgpIDw9IDkpIHtcclxuICAgICAgICBpbnB1dC52YWwoZnVuY3Rpb24gKGksIG9sZHZhbCkge1xyXG4gICAgICAgICAgcmV0dXJuICsrb2xkdmFsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHBocFBsdWdpbi5xdHkub24oXCJjbGlja1wiLCBcIi5xdHktZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBpbnB1dCA9IHBocFBsdWdpbi5xdHkuZmluZChcImlucHV0XCIpO1xyXG4gICAgICBpZiAoaW5wdXQudmFsKCkgPiAxICYmIGlucHV0LnZhbCgpIDw9IDEwKSB7XHJcbiAgICAgICAgaW5wdXQudmFsKGZ1bmN0aW9uIChpLCBvbGR2YWwpIHtcclxuICAgICAgICAgIHJldHVybiAtLW9sZHZhbDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJC5mbi5waHBQbHVnaW4gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgbmV3IFBocFBsdWdpbih0aGlzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcbiAgJChcIiNtYWluLXNpdGVcIikucGhwUGx1Z2luKCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9