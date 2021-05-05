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
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
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

var Product = function Product(element) {
  var _this = this;

  _classCallCheck(this, Product);

  _defineProperty(this, "_init", function () {
    _this._setupVariables();

    _this._setupEvents();
  });

  _defineProperty(this, "_setupVariables", function () {
    _this.banner = _this.element.find("#banner-area");
    _this.product = _this.element.find("#product");
    _this.topSale = _this.element.find("#top-sale");
    _this.qty = _this.element.find("#qty");
  });

  _defineProperty(this, "_setupEvents", function () {
    var phpPlugin = _this; //=======================================================================
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
  });

  this.element = element;
};

document.addEventListener("DOMContentLoaded", function () {
  new Product($("#main-site"))._init();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["commons/frontend/commonVendor"], function() { return __webpack_exec__("./src/assets/js/custom/home/product.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2hvbWUvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJyZXNwb25zaXZlIiwiaXRlbXMiLCJQcm9kdWN0IiwiZWxlbWVudCIsIl9zZXR1cFZhcmlhYmxlcyIsIl9zZXR1cEV2ZW50cyIsImJhbm5lciIsImZpbmQiLCJwcm9kdWN0IiwidG9wU2FsZSIsInF0eSIsInBocFBsdWdpbiIsIm93bENhcm91c2VsIiwibG9vcCIsIm5hdiIsImRvdHMiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidmFsIiwiaSIsIm9sZHZhbCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIiQiLCJfaW5pdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLElBQU1BLFVBQVUsR0FBRztBQUNqQixLQUFHO0FBQ0RDLFNBQUssRUFBRTtBQUROLEdBRGM7QUFJakIsT0FBSztBQUNIQSxTQUFLLEVBQUU7QUFESixHQUpZO0FBT2pCLFFBQU07QUFDSkEsU0FBSyxFQUFFO0FBREg7QUFQVyxDQUFuQjs7SUFXTUMsTyxHQUNKLGlCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQUE7O0FBQUEsaUNBR2IsWUFBTTtBQUNaLFNBQUksQ0FBQ0MsZUFBTDs7QUFDQSxTQUFJLENBQUNDLFlBQUw7QUFDRCxHQU5vQjs7QUFBQSwyQ0FPSCxZQUFNO0FBQ3RCLFNBQUksQ0FBQ0MsTUFBTCxHQUFjLEtBQUksQ0FBQ0gsT0FBTCxDQUFhSSxJQUFiLENBQWtCLGNBQWxCLENBQWQ7QUFDQSxTQUFJLENBQUNDLE9BQUwsR0FBZSxLQUFJLENBQUNMLE9BQUwsQ0FBYUksSUFBYixDQUFrQixVQUFsQixDQUFmO0FBQ0EsU0FBSSxDQUFDRSxPQUFMLEdBQWUsS0FBSSxDQUFDTixPQUFMLENBQWFJLElBQWIsQ0FBa0IsV0FBbEIsQ0FBZjtBQUNBLFNBQUksQ0FBQ0csR0FBTCxHQUFXLEtBQUksQ0FBQ1AsT0FBTCxDQUFhSSxJQUFiLENBQWtCLE1BQWxCLENBQVg7QUFDRCxHQVpvQjs7QUFBQSx3Q0FhTixZQUFNO0FBQ25CLFFBQUlJLFNBQVMsR0FBRyxLQUFoQixDQURtQixDQUduQjtBQUNBO0FBQ0E7QUFDQTs7QUFDQUEsYUFBUyxDQUFDRixPQUFWLENBQWtCRixJQUFsQixDQUF1QixlQUF2QixFQUF3Q0ssV0FBeEMsQ0FBb0Q7QUFDbERDLFVBQUksRUFBRSxJQUQ0QztBQUVsREMsU0FBRyxFQUFFLElBRjZDO0FBR2xEQyxVQUFJLEVBQUUsS0FINEM7QUFJbERmLGdCQUFVLEVBQUVBO0FBSnNDLEtBQXBELEVBUG1CLENBYW5CO0FBQ0E7QUFDQTs7QUFDQVcsYUFBUyxDQUFDRCxHQUFWLENBQWNNLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsU0FBMUIsRUFBcUMsVUFBVUMsQ0FBVixFQUFhO0FBQ2hEQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFJQyxLQUFLLEdBQUdSLFNBQVMsQ0FBQ0QsR0FBVixDQUFjSCxJQUFkLENBQW1CLE9BQW5CLENBQVo7O0FBQ0EsVUFBSVksS0FBSyxDQUFDQyxHQUFOLE1BQWUsQ0FBZixJQUFvQkQsS0FBSyxDQUFDQyxHQUFOLE1BQWUsQ0FBdkMsRUFBMEM7QUFDeENELGFBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQVVDLENBQVYsRUFBYUMsTUFBYixFQUFxQjtBQUM3QixpQkFBTyxFQUFFQSxNQUFUO0FBQ0QsU0FGRDtBQUdELE9BSkQsTUFJTyxDQUNOO0FBQ0YsS0FURDtBQVVBWCxhQUFTLENBQUNELEdBQVYsQ0FBY00sRUFBZCxDQUFpQixPQUFqQixFQUEwQixXQUExQixFQUF1QyxVQUFVQyxDQUFWLEVBQWE7QUFDbERBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQUlDLEtBQUssR0FBR1IsU0FBUyxDQUFDRCxHQUFWLENBQWNILElBQWQsQ0FBbUIsT0FBbkIsQ0FBWjs7QUFDQSxVQUFJWSxLQUFLLENBQUNDLEdBQU4sS0FBYyxDQUFkLElBQW1CRCxLQUFLLENBQUNDLEdBQU4sTUFBZSxFQUF0QyxFQUEwQztBQUN4Q0QsYUFBSyxDQUFDQyxHQUFOLENBQVUsVUFBVUMsQ0FBVixFQUFhQyxNQUFiLEVBQXFCO0FBQzdCLGlCQUFPLEVBQUVBLE1BQVQ7QUFDRCxTQUZEO0FBR0QsT0FKRCxNQUlPLENBQ047QUFDRixLQVREO0FBVUQsR0FqRG9COztBQUNuQixPQUFLbkIsT0FBTCxHQUFlQSxPQUFmO0FBQ0QsQzs7QUFpREhvQixRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3hELE1BQUl0QixPQUFKLENBQVl1QixDQUFDLENBQUMsWUFBRCxDQUFiLEVBQTZCQyxLQUE3QjtBQUNELENBRkQsRSIsImZpbGUiOiJqcy9jdXN0b20vaG9tZS9wcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgMDoge1xyXG4gICAgaXRlbXM6IDEsXHJcbiAgfSxcclxuICA2MDA6IHtcclxuICAgIGl0ZW1zOiAzLFxyXG4gIH0sXHJcbiAgMTAwMDoge1xyXG4gICAgaXRlbXM6IDUsXHJcbiAgfSxcclxufTtcclxuY2xhc3MgUHJvZHVjdCB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcbiAgX2luaXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9zZXR1cFZhcmlhYmxlcygpO1xyXG4gICAgdGhpcy5fc2V0dXBFdmVudHMoKTtcclxuICB9O1xyXG4gIF9zZXR1cFZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgIHRoaXMuYmFubmVyID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjYmFubmVyLWFyZWFcIik7XHJcbiAgICB0aGlzLnByb2R1Y3QgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNwcm9kdWN0XCIpO1xyXG4gICAgdGhpcy50b3BTYWxlID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjdG9wLXNhbGVcIik7XHJcbiAgICB0aGlzLnF0eSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3F0eVwiKTtcclxuICB9O1xyXG4gIF9zZXR1cEV2ZW50cyA9ICgpID0+IHtcclxuICAgIHZhciBwaHBQbHVnaW4gPSB0aGlzO1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vT3dsIGNhcm91c2VsXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL1RvcCBzYWxlc1xyXG4gICAgcGhwUGx1Z2luLnRvcFNhbGUuZmluZChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBuYXY6IHRydWUsXHJcbiAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICByZXNwb25zaXZlOiByZXNwb25zaXZlLFxyXG4gICAgfSk7XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL1F0eSBzZWN0aW9uXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwaHBQbHVnaW4ucXR5Lm9uKFwiY2xpY2tcIiwgXCIucXR5LXVwXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbGV0IGlucHV0ID0gcGhwUGx1Z2luLnF0eS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgIGlmIChpbnB1dC52YWwoKSA+PSAxICYmIGlucHV0LnZhbCgpIDw9IDkpIHtcclxuICAgICAgICBpbnB1dC52YWwoZnVuY3Rpb24gKGksIG9sZHZhbCkge1xyXG4gICAgICAgICAgcmV0dXJuICsrb2xkdmFsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHBocFBsdWdpbi5xdHkub24oXCJjbGlja1wiLCBcIi5xdHktZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBpbnB1dCA9IHBocFBsdWdpbi5xdHkuZmluZChcImlucHV0XCIpO1xyXG4gICAgICBpZiAoaW5wdXQudmFsKCkgPiAxICYmIGlucHV0LnZhbCgpIDw9IDEwKSB7XHJcbiAgICAgICAgaW5wdXQudmFsKGZ1bmN0aW9uIChpLCBvbGR2YWwpIHtcclxuICAgICAgICAgIHJldHVybiAtLW9sZHZhbDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgbmV3IFByb2R1Y3QoJChcIiNtYWluLXNpdGVcIikpLl9pbml0KCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9