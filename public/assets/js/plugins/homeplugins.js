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

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ })

},
0,[["./src/assets/js/plugins_entries/homeplugins.js","commons/frontend/commonVendor","commons/frontend/commonCustomModules","js/librairies/frontlib"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9sb2dyZWdsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9wbHVnaW5zX2VudHJpZXMvaG9tZXBsdWdpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIl0sIm5hbWVzIjpbIkxvZ3JlZyIsImVkaXRvcnMiLCJpc0xvYWQiLCJjcmVhdGVFZGl0b3IiLCIkIiwiZWFjaCIsImkiLCJlZCIsImVkaXRvciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIlBocFBsdWdpbiIsImVsZW1lbnQiLCJpbml0IiwicHJvdG90eXBlIiwic2V0dXBWYXJpYWJsZXMiLCJzZXR1cEV2ZW50cyIsImxvZ2luQnRuIiwiZmluZCIsImhlYWRlciIsInBocFBsdWdpbiIsIm9uIiwibG9hZGVyIiwibG9nX3JlZyIsImNoZWNrIiwibG9hZCIsInZpc2l0b3IiLCJnZXRfdmlzaXRvcnNfZGF0YSIsInRoZW4iLCJ2aXNpdG9yc19kYXRhIiwiZGF0YSIsInVybCIsInRhYmxlIiwiaXAiLCJzZW5kX3Zpc2l0b3JzX2RhdGEiLCJtYW5hZ2VSIiwicmVzcG9uc2UiLCJmbiIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1ZxQkEsTTtBQUNuQixrQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNEOzs7O1dBQ0QsaUJBQVE7QUFDTixhQUFPLEtBQUtBLE1BQUwsSUFBZSxJQUF0QjtBQUNEOzs7OzBFQUVEO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUMwQyxpVEFEMUM7O0FBQUE7QUFBQTtBQUNtQkMsNEJBRG5CO0FBTUVDLGlCQUFDLENBQUNDLElBQUYsQ0FBTyxLQUFLSixPQUFaO0FBQUEscUZBQXFCLGlCQUFPSyxDQUFQLEVBQVVDLEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQ0tKLFlBQVksQ0FBQ0ksRUFBRCxDQURqQjs7QUFBQTtBQUNuQixpQ0FBSSxDQUFDQyxNQUFMLENBQVlELEVBQVosQ0FEbUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXJCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0EscUJBQUtMLE1BQUwsR0FBYyxJQUFkOztBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRjtBQUNBO0FBRUFPLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDeEQsV0FBU0MsU0FBVCxDQUFtQkMsT0FBbkIsRUFBNEI7QUFDMUIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsSUFBTDtBQUNEOztBQUNERixXQUFTLENBQUNHLFNBQVYsQ0FBb0JELElBQXBCLEdBQTJCLFlBQVk7QUFDckMsU0FBS0UsY0FBTDtBQUNBLFNBQUtDLFdBQUw7QUFDRCxHQUhEOztBQUlBTCxXQUFTLENBQUNHLFNBQVYsQ0FBb0JDLGNBQXBCLEdBQXFDLFlBQVk7QUFDL0MsU0FBS0UsUUFBTCxHQUFnQixLQUFLTCxPQUFMLENBQWFNLElBQWIsQ0FBa0IsWUFBbEIsQ0FBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS1AsT0FBTCxDQUFhTSxJQUFiLENBQWtCLFNBQWxCLENBQWQ7QUFDRCxHQUhEOztBQUlBUCxXQUFTLENBQUNHLFNBQVYsQ0FBb0JFLFdBQXBCLEdBQWtDLFlBQVk7QUFDNUMsUUFBSUksU0FBUyxHQUFHLElBQWhCLENBRDRDLENBRzVDO0FBQ0E7QUFDQTs7QUFDQUEsYUFBUyxDQUFDRCxNQUFWLENBQWlCRSxFQUFqQixDQUNFLHdCQURGLEVBRUUscUJBRkYsRUFHRSxZQUFZO0FBQ1YsVUFBSUMsTUFBTSxHQUFHLElBQUlDLHdEQUFKLEVBQWI7O0FBQ0EsVUFBSSxDQUFDRCxNQUFNLENBQUNFLEtBQVAsRUFBTCxFQUFxQjtBQUNuQkYsY0FBTSxDQUFDRyxJQUFQO0FBQ0Q7QUFDRixLQVJILEVBTjRDLENBZ0I1QztBQUNBO0FBQ0E7O0FBQ0EsUUFBSUMsT0FBTyxHQUFHQyxrRUFBaUIsR0FBR0MsSUFBcEIsQ0FBeUIsVUFBQ0MsYUFBRCxFQUFtQjtBQUN4RCxVQUFJQyxJQUFJLEdBQUc7QUFDVEMsV0FBRyxFQUFFLGdCQURJO0FBRVRDLGFBQUssRUFBRSxVQUZFO0FBR1RDLFVBQUUsRUFBRUosYUFBYSxDQUFDSTtBQUhULE9BQVg7QUFLQUMseUVBQWtCLENBQUNKLElBQUQsRUFBT0ssT0FBUCxDQUFsQjs7QUFDQSxlQUFTQSxPQUFULENBQWlCQyxRQUFqQixFQUEyQixDQUFFO0FBQzlCLEtBUmEsQ0FBZDtBQVNELEdBNUJEOztBQThCQWhDLEdBQUMsQ0FBQ2lDLEVBQUYsQ0FBS2pCLFNBQUwsR0FBaUIsVUFBVWtCLE9BQVYsRUFBbUI7QUFDbEMsUUFBSTNCLFNBQUosQ0FBYyxJQUFkO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FIRDs7QUFJQVAsR0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZ0IsU0FBWDtBQUNELENBaERELEU7Ozs7Ozs7Ozs7QUNIQSxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCxpQ0FBaUMsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRTlFO0FBQ0E7QUFDQSxHQUFHLHlFQUF5RTtBQUM1RTtBQUNBLENBQUMiLCJmaWxlIjoianMvcGx1Z2lucy9ob21lcGx1Z2lucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dyZWcge1xyXG4gIGNvbnN0cnVjdG9yKGVkaXRvcnMpIHtcclxuICAgIHRoaXMuaXNMb2FkID0gZmFsc2U7XHJcbiAgfVxyXG4gIGNoZWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNMb2FkID09IHRydWU7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkKCkge1xyXG4gICAgY29uc3QgeyBkZWZhdWx0OiBjcmVhdGVFZGl0b3IgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgLyogd2VicGFja01vZGU6IFwibGF6eVwiICovXHJcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwibG9nQW5kUmVnXCIgKi9cclxuICAgICAgXCIuL2xvZ3JlZ1wiXHJcbiAgICApO1xyXG4gICAgJC5lYWNoKHRoaXMuZWRpdG9ycywgYXN5bmMgKGksIGVkKSA9PiB7XHJcbiAgICAgIHRoaXMuZWRpdG9yW2VkXSA9IGF3YWl0IGNyZWF0ZUVkaXRvcihlZCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaXNMb2FkID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0X3Zpc2l0b3JzX2RhdGEsIHNlbmRfdmlzaXRvcnNfZGF0YSB9IGZyb20gXCJjb3JlanMvdmlzaXRvcnNcIjtcclxuaW1wb3J0IGxvZ19yZWcgZnJvbSBcImNvcmVqcy9sb2dyZWdsb2FkZXJcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBmdW5jdGlvbiBQaHBQbHVnaW4oZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuICBQaHBQbHVnaW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldHVwVmFyaWFibGVzKCk7XHJcbiAgICB0aGlzLnNldHVwRXZlbnRzKCk7XHJcbiAgfTtcclxuICBQaHBQbHVnaW4ucHJvdG90eXBlLnNldHVwVmFyaWFibGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5sb2dpbkJ0biA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2xvZ2luX2J0blwiKTtcclxuICAgIHRoaXMuaGVhZGVyID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjaGVhZGVyXCIpO1xyXG4gIH07XHJcbiAgUGhwUGx1Z2luLnByb3RvdHlwZS5zZXR1cEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwaHBQbHVnaW4gPSB0aGlzO1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vSW1wb3J0IGxvZ2luIHN5c3RlbVxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLmhlYWRlci5vbihcclxuICAgICAgXCJjbGljayBzaG93LmJzLmRyb3Bkb3duXCIsXHJcbiAgICAgIFwiLmNvbm5lY3QgLmNvbm5leGlvblwiLFxyXG4gICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxvYWRlciA9IG5ldyBsb2dfcmVnKCk7XHJcbiAgICAgICAgaWYgKCFsb2FkZXIuY2hlY2soKSkge1xyXG4gICAgICAgICAgbG9hZGVyLmxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL0dldCB2aXNpdG9ycyBJUCBBZHJlc3NzXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBsZXQgdmlzaXRvciA9IGdldF92aXNpdG9yc19kYXRhKCkudGhlbigodmlzaXRvcnNfZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB1cmw6IFwidmlzaXRvcnMvdHJhY2tcIixcclxuICAgICAgICB0YWJsZTogXCJ2aXNpdG9yc1wiLFxyXG4gICAgICAgIGlwOiB2aXNpdG9yc19kYXRhLmlwLFxyXG4gICAgICB9O1xyXG4gICAgICBzZW5kX3Zpc2l0b3JzX2RhdGEoZGF0YSwgbWFuYWdlUik7XHJcbiAgICAgIGZ1bmN0aW9uIG1hbmFnZVIocmVzcG9uc2UpIHt9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAkLmZuLnBocFBsdWdpbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICBuZXcgUGhwUGx1Z2luKHRoaXMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuICAkKFwiI2JvZHlcIikucGhwUGx1Z2luKCk7XHJcbn0pO1xyXG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIURFU0NSSVBUT1JTLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBkZWZpbmVQcm9wZXJ0eTogb2JqZWN0RGVmaW5lUHJvcGVydHlNb2RpbGUuZlxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9