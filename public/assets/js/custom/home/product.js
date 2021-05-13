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
    }); //Top sales

    phpPlugin.product.find(".owl-carousel").owlCarousel({
      autoWidth: true,
      margin: 5,
      loop: true,
      lazyLoad: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 3,
          nav: false
        },
        1000: {
          items: 5,
          nav: true,
          loop: false
        }
      }
    }); //=======================================================================
    //Resize image
    //=======================================================================

    (function () {
      if (!phpPlugin.product.find(".product-gallery").length) {
        phpPlugin.product.find(".product-image-box img").css("width", 522);
      } else {
        phpPlugin.product.find(".product-image-box img").css("width", 438);
      }
    })(); //=======================================================================
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2hvbWUvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJyZXNwb25zaXZlIiwiaXRlbXMiLCJQcm9kdWN0IiwiZWxlbWVudCIsIl9zZXR1cFZhcmlhYmxlcyIsIl9zZXR1cEV2ZW50cyIsImJhbm5lciIsImZpbmQiLCJwcm9kdWN0IiwidG9wU2FsZSIsInF0eSIsInBocFBsdWdpbiIsIm93bENhcm91c2VsIiwibG9vcCIsIm5hdiIsImRvdHMiLCJhdXRvV2lkdGgiLCJtYXJnaW4iLCJsYXp5TG9hZCIsImxlbmd0aCIsImNzcyIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWwiLCJpIiwib2xkdmFsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiJCIsIl9pbml0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLElBQU1BLFVBQVUsR0FBRztBQUNqQixLQUFHO0FBQ0RDLFNBQUssRUFBRTtBQUROLEdBRGM7QUFJakIsT0FBSztBQUNIQSxTQUFLLEVBQUU7QUFESixHQUpZO0FBT2pCLFFBQU07QUFDSkEsU0FBSyxFQUFFO0FBREg7QUFQVyxDQUFuQjs7SUFXTUMsTyxHQUNKLGlCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQUE7O0FBQUEsaUNBR2IsWUFBTTtBQUNaLFNBQUksQ0FBQ0MsZUFBTDs7QUFDQSxTQUFJLENBQUNDLFlBQUw7QUFDRCxHQU5vQjs7QUFBQSwyQ0FPSCxZQUFNO0FBQ3RCLFNBQUksQ0FBQ0MsTUFBTCxHQUFjLEtBQUksQ0FBQ0gsT0FBTCxDQUFhSSxJQUFiLENBQWtCLGNBQWxCLENBQWQ7QUFDQSxTQUFJLENBQUNDLE9BQUwsR0FBZSxL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QUNDLEdBQU4sQ0FBVSxVQUFVQyxDQUFWLEVBQWFDLE1BQWIsRUFBcUI7QUFDN0IsaUJBQU8sRUFBRUEsTUFBVDtBQUNELFNBRkQ7QUFHRCxPQUpELE1BSU8sQ0FDTjtBQUNGLEtBVEQ7QUFVRCxHQW5Gb0I7O0FBQ25CLE9BQUt4QixPQUFMLEdBQWVBLE9BQWY7QUFDRCxDOztBQW1GSHlCLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDeEQsTUFBSTNCLE9BQUosQ0FBWTRCLENBQUMsQ0FBQyxZQUFELENBQWIsRUFBNkJDLEtBQTdCO0FBQ0QsQ0FGRCxFIiwiZmlsZSI6ImpzL2N1c3RvbS9ob21lL3Byb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICAwOiB7XHJcbiAgICBpdGVtczogMSxcclxuICB9LFxyXG4gIDYwMDoge1xyXG4gICAgaXRlbXM6IDMsXHJcbiAgfSxcclxuICAxMDAwOiB7XHJcbiAgICBpdGVtczogNSxcclxuICB9LFxyXG59O1xyXG5jbGFzcyBQcm9kdWN0IHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuICBfaW5pdCA9ICgpID0+IHtcclxuICAgIHRoaXMuX3NldHVwVmFyaWFibGVzKCk7XHJcbiAgICB0aGlzLl9zZXR1cEV2ZW50cygpO1xyXG4gIH07XHJcbiAgX3NldHVwVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5iYW5uZXIgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNiYW5uZXItYXJlYVwiKTtcclxuICAgIHRoaXMucHJvZHVjdCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3Byb2R1Y3RcIik7XHJcbiAgICB0aGlzLnRvcFNhbGUgPSB0aGlzLmVsZW1lbnQuZmluZChcIiN0b3Atc2FsZVwiKTtcclxuICAgIHRoaXMucXR5ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjcXR5XCIpO1xyXG4gIH07XHJcbiAgX3NldHVwRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgdmFyIHBocFBsdWdpbiA9IHRoaXM7XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9Pd2wgY2Fyb3VzZWxcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vVG9wIHNhbGVzXHJcbiAgICBwaHBQbHVnaW4udG9wU2FsZS5maW5kKFwiLm93bC1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmUsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1RvcCBzYWxlc1xyXG4gICAgcGhwUGx1Z2luLnByb2R1Y3QuZmluZChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICBhdXRvV2lkdGg6IHRydWUsXHJcbiAgICAgIG1hcmdpbjogNSxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgbGF6eUxvYWQ6IHRydWUsXHJcbiAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDYwMDoge1xyXG4gICAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTAwMDoge1xyXG4gICAgICAgICAgaXRlbXM6IDUsXHJcbiAgICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL1Jlc2l6ZSBpbWFnZVxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgKCgpID0+IHtcclxuICAgICAgaWYgKCFwaHBQbHVnaW4ucHJvZHVjdC5maW5kKFwiLnByb2R1Y3QtZ2FsbGVyeVwiKS5sZW5ndGgpIHtcclxuICAgICAgICBwaHBQbHVnaW4ucHJvZHVjdC5maW5kKFwiLnByb2R1Y3QtaW1hZ2UtYm94IGltZ1wiKS5jc3MoXCJ3aWR0aFwiLCA1MjIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBocFBsdWdpbi5wcm9kdWN0LmZpbmQoXCIucHJvZHVjdC1pbWFnZS1ib3ggaW1nXCIpLmNzcyhcIndpZHRoXCIsIDQzOCk7XHJcbiAgICAgIH1cclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9RdHkgc2VjdGlvblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLnF0eS5vbihcImNsaWNrXCIsIFwiLnF0eS11cFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBpbnB1dCA9IHBocFBsdWdpbi5xdHkuZmluZChcImlucHV0XCIpO1xyXG4gICAgICBpZiAoaW5wdXQudmFsKCkgPj0gMSAmJiBpbnB1dC52YWwoKSA8PSA5KSB7XHJcbiAgICAgICAgaW5wdXQudmFsKGZ1bmN0aW9uIChpLCBvbGR2YWwpIHtcclxuICAgICAgICAgIHJldHVybiArK29sZHZhbDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBwaHBQbHVnaW4ucXR5Lm9uKFwiY2xpY2tcIiwgXCIucXR5LWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBsZXQgaW5wdXQgPSBwaHBQbHVnaW4ucXR5LmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgaWYgKGlucHV0LnZhbCgpID4gMSAmJiBpbnB1dC52YWwoKSA8PSAxMCkge1xyXG4gICAgICAgIGlucHV0LnZhbChmdW5jdGlvbiAoaSwgb2xkdmFsKSB7XHJcbiAgICAgICAgICByZXR1cm4gLS1vbGR2YWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIG5ldyBQcm9kdWN0KCQoXCIjbWFpbi1zaXRlXCIpKS5faW5pdCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==