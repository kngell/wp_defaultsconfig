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

/***/ "./src/assets/js/core/config.js":
/*!**************************************!*\
  !*** ./src/assets/js/core/config.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": function() { return /* binding */ BASE_URL; },
/* harmony export */   "isIE": function() { return /* binding */ isIE; }
/* harmony export */ });
var BASE_URL = "/kngell_ecommerce/";
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
    console.log(response);
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
            return Promise.all(/*! import() | login */[__webpack_require__.e("vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-3681fe"), __webpack_require__.e("login")]).then(__webpack_require__.bind(__webpack_require__, /*! corejs/logreg */ "./src/assets/js/core/logreg.js"));

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

    function manageR(response) {
      console.log(response);
    }
  });
});

/***/ })

},
0,[["./src/assets/js/custom/admin/login.js","commons/backend/admin/commonVendor","js/librairies/adminlib"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL3Zpc2l0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2FkbWluL2xvZ2luLmpzIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwiaXNJRSIsInVzZXJBZ2VudCIsIm5hdmlnYXRvciIsInRlc3QiLCJnZXRfdmlzaXRvcnNfZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZGF0YSIsImlwIiwiJCIsInZhbCIsInNlbmRfdmlzaXRvcnNfZGF0YSIsIm1hbmFnZVIiLCJhamF4IiwidXJsIiwibWV0aG9kIiwidGFibGUiLCJjb29raWVzIiwiZG9uZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImZhaWwiLCJlcnJvciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvZ2luIiwidmlzaXRvciIsInRoZW4iLCJ2aXNpdG9yc19kYXRhIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7QUNWTyxJQUFNQSxRQUFRLEdBQUcsb0JBQWpCO0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUN4QixNQUFJQyxTQUFTLEdBQUdDLFNBQVMsQ0FBQ0QsU0FBMUI7QUFDQSxTQUFPLGVBQWVFLElBQWYsQ0FBb0JGLFNBQXBCLENBQVA7QUFDRCxDQUhNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQ0E7QUFDTyxJQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDckMsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLFFBQUlDLElBQUksR0FBRztBQUNUQyxRQUFFLEVBQUVDLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJDLEdBQWpCO0FBREssS0FBWDs7QUFHQSxRQUFJSCxJQUFKLEVBQVU7QUFDUkYsYUFBTyxDQUFDRSxJQUFELENBQVA7QUFDRCxLQUZELE1BRU9ELE1BQU0sQ0FBQyxTQUFELENBQU47QUFDUixHQVBNLENBQVA7QUFRRCxDQVRNO0FBV0EsSUFBTUssa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDSixJQUFELEVBQU9LLE9BQVAsRUFBbUI7QUFDbkRILEdBQUMsQ0FBQ0ksSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRWhCLDZDQUFRLEdBQUdTLElBQUksQ0FBQ08sR0FEaEI7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTFIsUUFBSSxFQUFFO0FBQ0pTLFdBQUssRUFBRVQsSUFBSSxDQUFDUyxLQURSO0FBRUpSLFFBQUUsRUFBRUQsSUFBSSxDQUFDQyxFQUFMLEdBQVVELElBQUksQ0FBQ0MsRUFBZixHQUFvQixFQUZwQjtBQUdKUyxhQUFPLEVBQUVWLElBQUksQ0FBQ1UsT0FBTCxHQUFlVixJQUFJLENBQUNVLE9BQXBCLEdBQThCO0FBSG5DO0FBSEQsR0FBUCxFQVNHQyxJQVRILENBU1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBUCxXQUFPLENBQUNPLFFBQUQsQ0FBUDtBQUNELEdBWkgsRUFhR0csSUFiSCxDQWFRLFVBQUNDLEtBQUQsRUFBVztBQUNmSCxXQUFPLENBQUNDLEdBQVIsQ0FBWUUsS0FBWjtBQUNELEdBZkg7QUFnQkQsQ0FqQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYlA7QUFDQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSwwREFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNxQiw4U0FEckI7O0FBQUE7QUFDT0MsaUJBRFA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxLQUprRCxDQU9sRDtBQUNBO0FBQ0E7OztBQUNBLE1BQUlDLE9BQU8sR0FBR3hCLGtFQUFpQixHQUFHeUIsSUFBcEIsQ0FBeUIsVUFBQ0MsYUFBRCxFQUFtQjtBQUN4RCxRQUFJdEIsSUFBSSxHQUFHO0FBQ1RPLFNBQUcsRUFBRSxnQkFESTtBQUVURSxXQUFLLEVBQUUsVUFGRTtBQUdUUixRQUFFLEVBQUVxQixhQUFhLENBQUNyQjtBQUhULEtBQVg7QUFLQUcsdUVBQWtCLENBQUNKLElBQUQsRUFBT0ssT0FBUCxDQUFsQjs7QUFDQSxhQUFTQSxPQUFULENBQWlCTyxRQUFqQixFQUEyQjtBQUN6QkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDRDtBQUNGLEdBVmEsQ0FBZDtBQVdELENBckJELEUiLCJmaWxlIjoianMvY3VzdG9tL2FkbWluL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IFwiL2tuZ2VsbF9lY29tbWVyY2UvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaXNJRSA9ICgpID0+IHtcclxuICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICByZXR1cm4gL01TSUV8VHJpZGVudC8udGVzdCh1c2VyQWdlbnQpO1xyXG59O1xyXG4iLCIvL0dldCB2aXNpdG9ycyBEYXRhXHJcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmV4cG9ydCBjb25zdCBnZXRfdmlzaXRvcnNfZGF0YSA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIGlwOiAkKFwiI2lwX2FkZHJlc3NcIikudmFsKCksXHJcbiAgICB9O1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgIH0gZWxzZSByZWplY3QoXCJubyBkYXRhXCIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRfdmlzaXRvcnNfZGF0YSA9IChkYXRhLCBtYW5hZ2VSKSA9PiB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpcDogZGF0YS5pcCA/IGRhdGEuaXAgOiBcIlwiLFxyXG4gICAgICBjb29raWVzOiBkYXRhLmNvb2tpZXMgPyBkYXRhLmNvb2tpZXMgOiBcIlwiLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgbWFuYWdlUihyZXNwb25zZSk7XHJcbiAgICB9KVxyXG4gICAgLmZhaWwoKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBnZXRfdmlzaXRvcnNfZGF0YSwgc2VuZF92aXNpdG9yc19kYXRhIH0gZnJvbSBcImNvcmVqcy92aXNpdG9yc1wiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vSW1wb3J0IGxvZ2luIHN5c3RlbVxyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbG9naW4gPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJsb2dpblwiICovIFwiY29yZWpzL2xvZ3JlZ1wiKTtcclxuICB9KSgpO1xyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvL0dldCB2aXNpdG9ycyBJUCBBZHJlc3NzXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGxldCB2aXNpdG9yID0gZ2V0X3Zpc2l0b3JzX2RhdGEoKS50aGVuKCh2aXNpdG9yc19kYXRhKSA9PiB7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgdXJsOiBcInZpc2l0b3JzL3RyYWNrXCIsXHJcbiAgICAgIHRhYmxlOiBcInZpc2l0b3JzXCIsXHJcbiAgICAgIGlwOiB2aXNpdG9yc19kYXRhLmlwLFxyXG4gICAgfTtcclxuICAgIHNlbmRfdmlzaXRvcnNfZGF0YShkYXRhLCBtYW5hZ2VSKTtcclxuICAgIGZ1bmN0aW9uIG1hbmFnZVIocmVzcG9uc2UpIHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==