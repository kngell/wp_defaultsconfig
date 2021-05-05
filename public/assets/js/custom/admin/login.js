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
return (self["webpackChunkkngell"] = self["webpackChunkkngell"] || []).push([["js/custom/admin/login"],{

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
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
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

/***/ "./src/assets/js/custom/admin/login.js":
/*!*********************************************!*\
  !*** ./src/assets/js/custom/admin/login.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var corejs_visitors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! corejs/visitors */ "./src/assets/js/core/visitors.js");








function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







document.addEventListener("DOMContentLoaded", function () {
  //=======================================================================
  //Import login system
  //=======================================================================
  _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var login;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all(/*! import() | login */[__webpack_require__.e("vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-2a0db2"), __webpack_require__.e("login")]).then(__webpack_require__.bind(__webpack_require__, /*! corejs/login_register.class */ "./src/assets/js/core/login_register.class.js"));

          case 2:
            login = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))(); //=======================================================================
  //Get visitors IP Adresss
  //=======================================================================


  var visitor = (0,corejs_visitors__WEBPACK_IMPORTED_MODULE_6__.get_visitors_data)().then(function (visitors_data) {
    var data = {
      url: "visitors/track",
      table: "visitors",
      ip: visitors_data.ip
    };
    (0,corejs_visitors__WEBPACK_IMPORTED_MODULE_6__.send_visitors_data)(data, manageR);

    function manageR(response) {}
  });
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["commons/backend/admin/commonVendor","commons/backend/admin/commonCustomModules"], function() { return __webpack_exec__("./src/assets/js/custom/admin/login.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS92aXNpdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2N1c3RvbS9hZG1pbi9sb2dpbi5qcyJdLCJuYW1lcyI6WyJnZXRfdmlzaXRvcnNfZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZGF0YSIsImlwIiwiJCIsInZhbCIsInNlbmRfdmlzaXRvcnNfZGF0YSIsIm1hbmFnZVIiLCJhamF4IiwidXJsIiwiQkFTRV9VUkwiLCJtZXRob2QiLCJ0YWJsZSIsImNvb2tpZXMiLCJkb25lIiwicmVzcG9uc2UiLCJmYWlsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibG9naW4iLCJ2aXNpdG9yIiwidGhlbiIsInZpc2l0b3JzX2RhdGEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ08sSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQ3JDLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxRQUFJQyxJQUFJLEdBQUc7QUFDVEMsUUFBRSxFQUFFQyxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCQyxHQUFqQjtBQURLLEtBQVg7O0FBR0EsUUFBSUgsSUFBSixFQUFVO0FBQ1JGLGFBQU8sQ0FBQ0UsSUFBRCxDQUFQO0FBQ0QsS0FGRCxNQUVPRCxNQUFNLENBQUMsU0FBRCxDQUFOO0FBQ1IsR0FQTSxDQUFQO0FBUUQsQ0FUTTtBQVdBLElBQU1LLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0osSUFBRCxFQUFPSyxPQUFQLEVBQW1CO0FBQ25ESCxHQUFDLENBQUNJLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVDLDZDQUFRLEdBQUdSLElBQUksQ0FBQ08sR0FEaEI7QUFFTEUsVUFBTSxFQUFFLE1BRkg7QUFHTFQsUUFBSSxFQUFFO0FBQ0pVLFdBQUssRUFBRVYsSUFBSSxDQUFDVSxLQURSO0FBRUpULFFBQUUsRUFBRUQsSUFBSSxDQUFDQyxFQUFMLEdBQVVELElBQUksQ0FBQ0MsRUFBZixHQUFvQixFQUZwQjtBQUdKVSxhQUFPLEVBQUVYLElBQUksQ0FBQ1csT0FBTCxHQUFlWCxJQUFJLENBQUNXLE9BQXBCLEdBQThCO0FBSG5DO0FBSEQsR0FBUCxFQVNHQyxJQVRILENBU1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCUixXQUFPLENBQUNRLFFBQUQsQ0FBUDtBQUNELEdBWEgsRUFZR0MsSUFaSCxDQVlRLFVBQUNDLEtBQUQsRUFBVztBQUNmQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNELEdBZEg7QUFlRCxDQWhCTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiUDtBQUNBRyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLDBEQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3FCLDBVQURyQjs7QUFBQTtBQUNPQyxpQkFEUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELEtBSmtELENBU2xEO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBSUMsT0FBTyxHQUFHekIsa0VBQWlCLEdBQUcwQixJQUFwQixDQUF5QixVQUFDQyxhQUFELEVBQW1CO0FBQ3hELFFBQUl2QixJQUFJLEdBQUc7QUFDVE8sU0FBRyxFQUFFLGdCQURJO0FBRVRHLFdBQUssRUFBRSxVQUZFO0FBR1RULFFBQUUsRUFBRXNCLGFBQWEsQ0FBQ3RCO0FBSFQsS0FBWDtBQUtBRyx1RUFBa0IsQ0FBQ0osSUFBRCxFQUFPSyxPQUFQLENBQWxCOztBQUNBLGFBQVNBLE9BQVQsQ0FBaUJRLFFBQWpCLEVBQTJCLENBQUU7QUFDOUIsR0FSYSxDQUFkO0FBU0QsQ0FyQkQsRSIsImZpbGUiOiJqcy9jdXN0b20vYWRtaW4vbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLy9HZXQgdmlzaXRvcnMgRGF0YVxyXG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5leHBvcnQgY29uc3QgZ2V0X3Zpc2l0b3JzX2RhdGEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICBpcDogJChcIiNpcF9hZGRyZXNzXCIpLnZhbCgpLFxyXG4gICAgfTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICB9IGVsc2UgcmVqZWN0KFwibm8gZGF0YVwiKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kX3Zpc2l0b3JzX2RhdGEgPSAoZGF0YSwgbWFuYWdlUikgPT4ge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgaXA6IGRhdGEuaXAgPyBkYXRhLmlwIDogXCJcIixcclxuICAgICAgY29va2llczogZGF0YS5jb29raWVzID8gZGF0YS5jb29raWVzIDogXCJcIixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBtYW5hZ2VSKHJlc3BvbnNlKTtcclxuICAgIH0pXHJcbiAgICAuZmFpbCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGdldF92aXNpdG9yc19kYXRhLCBzZW5kX3Zpc2l0b3JzX2RhdGEgfSBmcm9tIFwiY29yZWpzL3Zpc2l0b3JzXCI7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy9JbXBvcnQgbG9naW4gc3lzdGVtXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2dpbiA9IGF3YWl0IGltcG9ydChcclxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJsb2dpblwiICovIFwiY29yZWpzL2xvZ2luX3JlZ2lzdGVyLmNsYXNzXCJcclxuICAgICk7XHJcbiAgfSkoKTtcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy9HZXQgdmlzaXRvcnMgSVAgQWRyZXNzc1xyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBsZXQgdmlzaXRvciA9IGdldF92aXNpdG9yc19kYXRhKCkudGhlbigodmlzaXRvcnNfZGF0YSkgPT4ge1xyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgIHVybDogXCJ2aXNpdG9ycy90cmFja1wiLFxyXG4gICAgICB0YWJsZTogXCJ2aXNpdG9yc1wiLFxyXG4gICAgICBpcDogdmlzaXRvcnNfZGF0YS5pcCxcclxuICAgIH07XHJcbiAgICBzZW5kX3Zpc2l0b3JzX2RhdGEoZGF0YSwgbWFuYWdlUik7XHJcbiAgICBmdW5jdGlvbiBtYW5hZ2VSKHJlc3BvbnNlKSB7fVxyXG4gIH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==