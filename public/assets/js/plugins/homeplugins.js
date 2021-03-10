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
return (self["webpackChunkkngell"] = self["webpackChunkkngell"] || []).push([["js/plugins/homeplugins"],{

/***/ "./src/assets/js/core/logregloader.js":
/*!********************************************!*\
  !*** ./src/assets/js/core/logregloader.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Logreg; }
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logreg = /*#__PURE__*/function () {
  function Logreg(editors) {
    _classCallCheck(this, Logreg);

    this.isLoad = false;
  }

  _createClass(Logreg, [{
    key: "check",
    value: function check() {
      return this.isLoad == true;
    }
  }, {
    key: "load",
    value: function () {
      var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this = this;

        var _yield$import, createEditor;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Promise.all(/*! import() | logAndReg */[__webpack_require__.e("vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-dfa918"), __webpack_require__.e("logAndReg")]).then(__webpack_require__.bind(__webpack_require__, /*! ./logreg */ "./src/assets/js/core/logreg.js"));

              case 2:
                _yield$import = _context2.sent;
                createEditor = _yield$import["default"];
                $.each(this.editors, /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(i, ed) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return createEditor(ed);

                          case 2:
                            _this.editor[ed] = _context.sent;

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                  };
                }());
                this.isLoad = true;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }]);

  return Logreg;
}();



/***/ }),

/***/ "./src/assets/js/plugins_entries/homeplugins.js":
/*!******************************************************!*\
  !*** ./src/assets/js/plugins_entries/homeplugins.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var corejs_visitors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! corejs/visitors */ "./src/assets/js/core/visitors.js");
/* harmony import */ var corejs_logregloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! corejs/logregloader */ "./src/assets/js/core/logregloader.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



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
    this.loginBtn = this.element.find("#login_btn");
    this.header = this.element.find("#header");
  };

  PhpPlugin.prototype.setupEvents = function () {
    var phpPlugin = this; //=======================================================================
    //Import login system
    //=======================================================================

    phpPlugin.header.on("click show.bs.dropdown", ".connect .connexion", function () {
      var loader = new corejs_logregloader__WEBPACK_IMPORTED_MODULE_2__.default();

      if (!loader.check()) {
        loader.load();
      }
    }); //=======================================================================
    //Get visitors IP Adresss
    //=======================================================================

    var visitor = (0,corejs_visitors__WEBPACK_IMPORTED_MODULE_1__.get_visitors_data)().then(function (visitors_data) {
      var data = {
        url: "visitors/track",
        table: "visitors",
        ip: visitors_data.ip
      };
      (0,corejs_visitors__WEBPACK_IMPORTED_MODULE_1__.send_visitors_data)(data, manageR);

      function manageR(response) {}
    });
  };

  $.fn.phpPlugin = function (options) {
    new PhpPlugin(this);
    return this;
  };

  $("#body").phpPlugin();
});

/***/ })

},
0,[["./src/assets/js/plugins_entries/homeplugins.js","commons/frontend/commonVendor","commons/frontend/commonCustomModules","js/librairies/frontlib"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9sb2dyZWdsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9wbHVnaW5zX2VudHJpZXMvaG9tZXBsdWdpbnMuanMiXSwibmFtZXMiOlsiTG9ncmVnIiwiZWRpdG9ycyIsImlzTG9hZCIsImNyZWF0ZUVkaXRvciIsIiQiLCJlYWNoIiwiaSIsImVkIiwiZWRpdG9yIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiUGhwUGx1Z2luIiwiZWxlbWVudCIsImluaXQiLCJwcm90b3R5cGUiLCJzZXR1cFZhcmlhYmxlcyIsInNldHVwRXZlbnRzIiwibG9naW5CdG4iLCJmaW5kIiwiaGVhZGVyIiwicGhwUGx1Z2luIiwib24iLCJsb2FkZXIiLCJsb2dfcmVnIiwiY2hlY2siLCJsb2FkIiwidmlzaXRvciIsImdldF92aXNpdG9yc19kYXRhIiwidGhlbiIsInZpc2l0b3JzX2RhdGEiLCJkYXRhIiwidXJsIiwidGFibGUiLCJpcCIsInNlbmRfdmlzaXRvcnNfZGF0YSIsIm1hbmFnZVIiLCJyZXNwb25zZSIsImZuIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDVnFCQSxNO0FBQ25CLGtCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0Q7Ozs7V0FDRCxpQkFBUTtBQUNOLGFBQU8sS0FBS0EsTUFBTCxJQUFlLElBQXRCO0FBQ0Q7Ozs7MEVBRUQ7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQzBDLGlUQUQxQzs7QUFBQTtBQUFBO0FBQ21CQyw0QkFEbkI7QUFNRUMsaUJBQUMsQ0FBQ0MsSUFBRixDQUFPLEtBQUtKLE9BQVo7QUFBQSxxRkFBcUIsaUJBQU9LLENBQVAsRUFBVUMsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FDS0osWUFBWSxDQUFDSSxFQUFELENBRGpCOztBQUFBO0FBQ25CLGlDQUFJLENBQUNDLE1BQUwsQ0FBWUQsRUFBWixDQURtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBckI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQSxxQkFBS0wsTUFBTCxHQUFjLElBQWQ7O0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JGO0FBQ0E7QUFFQU8sUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN4RCxXQUFTQyxTQUFULENBQW1CQyxPQUFuQixFQUE0QjtBQUMxQixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMO0FBQ0Q7O0FBQ0RGLFdBQVMsQ0FBQ0csU0FBVixDQUFvQkQsSUFBcEIsR0FBMkIsWUFBWTtBQUNyQyxTQUFLRSxjQUFMO0FBQ0EsU0FBS0MsV0FBTDtBQUNELEdBSEQ7O0FBSUFMLFdBQVMsQ0FBQ0csU0FBVixDQUFvQkMsY0FBcEIsR0FBcUMsWUFBWTtBQUMvQyxTQUFLRSxRQUFMLEdBQWdCLEtBQUtMLE9BQUwsQ0FBYU0sSUFBYixDQUFrQixZQUFsQixDQUFoQjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLUCxPQUFMLENBQWFNLElBQWIsQ0FBa0IsU0FBbEIsQ0FBZDtBQUNELEdBSEQ7O0FBSUFQLFdBQVMsQ0FBQ0csU0FBVixDQUFvQkUsV0FBcEIsR0FBa0MsWUFBWTtBQUM1QyxRQUFJSSxTQUFTLEdBQUcsSUFBaEIsQ0FENEMsQ0FHNUM7QUFDQTtBQUNBOztBQUNBQSxhQUFTLENBQUNELE1BQVYsQ0FBaUJFLEVBQWpCLENBQ0Usd0JBREYsRUFFRSxxQkFGRixFQUdFLFlBQVk7QUFDVixVQUFJQyxNQUFNLEdBQUcsSUFBSUMsd0RBQUosRUFBYjs7QUFDQSxVQUFJLENBQUNELE1BQU0sQ0FBQ0UsS0FBUCxFQUFMLEVBQXFCO0FBQ25CRixjQUFNLENBQUNHLElBQVA7QUFDRDtBQUNGLEtBUkgsRUFONEMsQ0FnQjVDO0FBQ0E7QUFDQTs7QUFDQSxRQUFJQyxPQUFPLEdBQUdDLGtFQUFpQixHQUFHQyxJQUFwQixDQUF5QixVQUFDQyxhQUFELEVBQW1CO0FBQ3hELFVBQUlDLElBQUksR0FBRztBQUNUQyxXQUFHLEVBQUUsZ0JBREk7QUFFVEMsYUFBSyxFQUFFLFVBRkU7QUFHVEMsVUFBRSxFQUFFSixhQUFhLENBQUNJO0FBSFQsT0FBWDtBQUtBQyx5RUFBa0IsQ0FBQ0osSUFBRCxFQUFPSyxPQUFQLENBQWxCOztBQUNBLGVBQVNBLE9BQVQsQ0FBaUJDLFFBQWpCLEVBQTJCLENBQUU7QUFDOUIsS0FSYSxDQUFkO0FBU0QsR0E1QkQ7O0FBOEJBaEMsR0FBQyxDQUFDaUMsRUFBRixDQUFLakIsU0FBTCxHQUFpQixVQUFVa0IsT0FBVixFQUFtQjtBQUNsQyxRQUFJM0IsU0FBSixDQUFjLElBQWQ7QUFDQSxXQUFPLElBQVA7QUFDRCxHQUhEOztBQUlBUCxHQUFDLENBQUMsT0FBRCxDQUFELENBQVdnQixTQUFYO0FBQ0QsQ0FoREQsRSIsImZpbGUiOiJqcy9wbHVnaW5zL2hvbWVwbHVnaW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ3JlZyB7XHJcbiAgY29uc3RydWN0b3IoZWRpdG9ycykge1xyXG4gICAgdGhpcy5pc0xvYWQgPSBmYWxzZTtcclxuICB9XHJcbiAgY2hlY2soKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0xvYWQgPT0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWQoKSB7XHJcbiAgICBjb25zdCB7IGRlZmF1bHQ6IGNyZWF0ZUVkaXRvciB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAvKiB3ZWJwYWNrTW9kZTogXCJsYXp5XCIgKi9cclxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJsb2dBbmRSZWdcIiAqL1xyXG4gICAgICBcIi4vbG9ncmVnXCJcclxuICAgICk7XHJcbiAgICAkLmVhY2godGhpcy5lZGl0b3JzLCBhc3luYyAoaSwgZWQpID0+IHtcclxuICAgICAgdGhpcy5lZGl0b3JbZWRdID0gYXdhaXQgY3JlYXRlRWRpdG9yKGVkKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pc0xvYWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnZXRfdmlzaXRvcnNfZGF0YSwgc2VuZF92aXNpdG9yc19kYXRhIH0gZnJvbSBcImNvcmVqcy92aXNpdG9yc1wiO1xyXG5pbXBvcnQgbG9nX3JlZyBmcm9tIFwiY29yZWpzL2xvZ3JlZ2xvYWRlclwiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGZ1bmN0aW9uIFBocFBsdWdpbihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG4gIFBocFBsdWdpbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0dXBWYXJpYWJsZXMoKTtcclxuICAgIHRoaXMuc2V0dXBFdmVudHMoKTtcclxuICB9O1xyXG4gIFBocFBsdWdpbi5wcm90b3R5cGUuc2V0dXBWYXJpYWJsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmxvZ2luQnRuID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjbG9naW5fYnRuXCIpO1xyXG4gICAgdGhpcy5oZWFkZXIgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNoZWFkZXJcIik7XHJcbiAgfTtcclxuICBQaHBQbHVnaW4ucHJvdG90eXBlLnNldHVwRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHBocFBsdWdpbiA9IHRoaXM7XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9JbXBvcnQgbG9naW4gc3lzdGVtXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwaHBQbHVnaW4uaGVhZGVyLm9uKFxyXG4gICAgICBcImNsaWNrIHNob3cuYnMuZHJvcGRvd25cIixcclxuICAgICAgXCIuY29ubmVjdCAuY29ubmV4aW9uXCIsXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbG9hZGVyID0gbmV3IGxvZ19yZWcoKTtcclxuICAgICAgICBpZiAoIWxvYWRlci5jaGVjaygpKSB7XHJcbiAgICAgICAgICBsb2FkZXIubG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vR2V0IHZpc2l0b3JzIElQIEFkcmVzc3NcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGxldCB2aXNpdG9yID0gZ2V0X3Zpc2l0b3JzX2RhdGEoKS50aGVuKCh2aXNpdG9yc19kYXRhKSA9PiB7XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHVybDogXCJ2aXNpdG9ycy90cmFja1wiLFxyXG4gICAgICAgIHRhYmxlOiBcInZpc2l0b3JzXCIsXHJcbiAgICAgICAgaXA6IHZpc2l0b3JzX2RhdGEuaXAsXHJcbiAgICAgIH07XHJcbiAgICAgIHNlbmRfdmlzaXRvcnNfZGF0YShkYXRhLCBtYW5hZ2VSKTtcclxuICAgICAgZnVuY3Rpb24gbWFuYWdlUihyZXNwb25zZSkge31cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICQuZm4ucGhwUGx1Z2luID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIG5ldyBQaHBQbHVnaW4odGhpcyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG4gICQoXCIjYm9keVwiKS5waHBQbHVnaW4oKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=