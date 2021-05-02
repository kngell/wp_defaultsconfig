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

/***/ "./src/assets/js/custom/admin/login.js":
/*!*********************************************!*\
  !*** ./src/assets/js/custom/admin/login.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var corejs_visitors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! corejs/visitors */ "./src/assets/js/core/visitors.js");



document.addEventListener("DOMContentLoaded", function () {
  //=======================================================================
  //Import login system
  //=======================================================================
  (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var login;
    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all(/*! import() | login */[__webpack_require__.e("vendors-node_modules_babel_runtime-corejs3_core-js-stable_instance_find_js-node_modules_babel-6688e9"), __webpack_require__.e("login")]).then(__webpack_require__.bind(__webpack_require__, /*! corejs/login_register.class */ "./src/assets/js/core/login_register.class.js"));

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


  var visitor = (0,corejs_visitors__WEBPACK_IMPORTED_MODULE_2__.get_visitors_data)().then(function (visitors_data) {
    var data = {
      url: "visitors/track",
      table: "visitors",
      ip: visitors_data.ip
    };
    (0,corejs_visitors__WEBPACK_IMPORTED_MODULE_2__.send_visitors_data)(data, manageR);

    function manageR(response) {}
  });
});

/***/ })

},
0,[["./src/assets/js/custom/admin/login.js","commons/backend/admin/commonVendor","commons/backend/admin/commonCustomModules","js/librairies/adminlib"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS92aXNpdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2N1c3RvbS9hZG1pbi9sb2dpbi5qcyJdLCJuYW1lcyI6WyJnZXRfdmlzaXRvcnNfZGF0YSIsInJlc29sdmUiLCJyZWplY3QiLCJkYXRhIiwiaXAiLCIkIiwidmFsIiwic2VuZF92aXNpdG9yc19kYXRhIiwibWFuYWdlUiIsImFqYXgiLCJ1cmwiLCJCQVNFX1VSTCIsIm1ldGhvZCIsInRhYmxlIiwiY29va2llcyIsImRvbmUiLCJyZXNwb25zZSIsImZhaWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2dpbiIsInZpc2l0b3IiLCJ0aGVuIiwidmlzaXRvcnNfZGF0YSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ08sSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQ3JDLFNBQU8sSUFBSSx1RkFBUSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsUUFBSUMsSUFBSSxHQUFHO0FBQ1RDLFFBQUUsRUFBRUMsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkMsR0FBakI7QUFESyxLQUFYOztBQUdBLFFBQUlILElBQUosRUFBVTtBQUNSRixhQUFPLENBQUNFLElBQUQsQ0FBUDtBQUNELEtBRkQsTUFFT0QsTUFBTSxDQUFDLFNBQUQsQ0FBTjtBQUNSLEdBUE0sQ0FBUDtBQVFELENBVE07QUFXQSxJQUFNSyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNKLElBQUQsRUFBT0ssT0FBUCxFQUFtQjtBQUNuREgsR0FBQyxDQUFDSSxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyw2Q0FBUSxHQUFHUixJQUFJLENBQUNPLEdBRGhCO0FBRUxFLFVBQU0sRUFBRSxNQUZIO0FBR0xULFFBQUksRUFBRTtBQUNKVSxXQUFLLEVBQUVWLElBQUksQ0FBQ1UsS0FEUjtBQUVKVCxRQUFFLEVBQUVELElBQUksQ0FBQ0MsRUFBTCxHQUFVRCxJQUFJLENBQUNDLEVBQWYsR0FBb0IsRUFGcEI7QUFHSlUsYUFBTyxFQUFFWCxJQUFJLENBQUNXLE9BQUwsR0FBZVgsSUFBSSxDQUFDVyxPQUFwQixHQUE4QjtBQUhuQztBQUhELEdBQVAsRUFTR0MsSUFUSCxDQVNRLFVBQUNDLFFBQUQsRUFBYztBQUNsQlIsV0FBTyxDQUFDUSxRQUFELENBQVA7QUFDRCxHQVhILEVBWUdDLElBWkgsQ0FZUSxVQUFDQyxLQUFELEVBQVc7QUFDZkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxHQWRIO0FBZUQsQ0FoQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYlA7QUFDQUcsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSx3TEFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNxQiwwVUFEckI7O0FBQUE7QUFDT0MsaUJBRFA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxLQUprRCxDQVNsRDtBQUNBO0FBQ0E7OztBQUNBLE1BQUlDLE9BQU8sR0FBR3hCLGtFQUFpQixHQUFHeUIsSUFBcEIsQ0FBeUIsVUFBQ0MsYUFBRCxFQUFtQjtBQUN4RCxRQUFJdkIsSUFBSSxHQUFHO0FBQ1RPLFNBQUcsRUFBRSxnQkFESTtBQUVURyxXQUFLLEVBQUUsVUFGRTtBQUdUVCxRQUFFLEVBQUVzQixhQUFhLENBQUN0QjtBQUhULEtBQVg7QUFLQUcsdUVBQWtCLENBQUNKLElBQUQsRUFBT0ssT0FBUCxDQUFsQjs7QUFDQSxhQUFTQSxPQUFULENBQWlCUSxRQUFqQixFQUEyQixDQUFFO0FBQzlCLEdBUmEsQ0FBZDtBQVNELENBckJELEUiLCJmaWxlIjoianMvY3VzdG9tL2FkbWluL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIi8vR2V0IHZpc2l0b3JzIERhdGFcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuZXhwb3J0IGNvbnN0IGdldF92aXNpdG9yc19kYXRhID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgaXA6ICQoXCIjaXBfYWRkcmVzc1wiKS52YWwoKSxcclxuICAgIH07XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgfSBlbHNlIHJlamVjdChcIm5vIGRhdGFcIik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZF92aXNpdG9yc19kYXRhID0gKGRhdGEsIG1hbmFnZVIpID0+IHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgIGlwOiBkYXRhLmlwID8gZGF0YS5pcCA6IFwiXCIsXHJcbiAgICAgIGNvb2tpZXM6IGRhdGEuY29va2llcyA/IGRhdGEuY29va2llcyA6IFwiXCIsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgbWFuYWdlUihyZXNwb25zZSk7XHJcbiAgICB9KVxyXG4gICAgLmZhaWwoKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBnZXRfdmlzaXRvcnNfZGF0YSwgc2VuZF92aXNpdG9yc19kYXRhIH0gZnJvbSBcImNvcmVqcy92aXNpdG9yc1wiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vSW1wb3J0IGxvZ2luIHN5c3RlbVxyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbG9naW4gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwibG9naW5cIiAqLyBcImNvcmVqcy9sb2dpbl9yZWdpc3Rlci5jbGFzc1wiXHJcbiAgICApO1xyXG4gIH0pKCk7XHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vR2V0IHZpc2l0b3JzIElQIEFkcmVzc3NcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgbGV0IHZpc2l0b3IgPSBnZXRfdmlzaXRvcnNfZGF0YSgpLnRoZW4oKHZpc2l0b3JzX2RhdGEpID0+IHtcclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICB1cmw6IFwidmlzaXRvcnMvdHJhY2tcIixcclxuICAgICAgdGFibGU6IFwidmlzaXRvcnNcIixcclxuICAgICAgaXA6IHZpc2l0b3JzX2RhdGEuaXAsXHJcbiAgICB9O1xyXG4gICAgc2VuZF92aXNpdG9yc19kYXRhKGRhdGEsIG1hbmFnZVIpO1xyXG4gICAgZnVuY3Rpb24gbWFuYWdlUihyZXNwb25zZSkge31cclxuICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=