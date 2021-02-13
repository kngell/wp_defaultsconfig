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
return (self["webpackChunkkngell"] = self["webpackChunkkngell"] || []).push([["js/custom/home/home"],{

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

/***/ "./src/assets/js/custom/home/index.js":
/*!********************************************!*\
  !*** ./src/assets/js/custom/home/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var corejs_visitors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! corejs/visitors */ "./src/assets/js/core/visitors.js");

document.addEventListener("DOMContentLoaded", function () {
  var visitor = (0,corejs_visitors__WEBPACK_IMPORTED_MODULE_0__.get_visitors_data)().then(function (data) {
    console.log(data);
  });
});

/***/ })

},
0,[["./src/assets/js/custom/home/index.js","commons/frontend/commonVendor","js/librairies/frontlib"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL3Zpc2l0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2hvbWUvaW5kZXguanMiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJpc0lFIiwidXNlckFnZW50IiwibmF2aWdhdG9yIiwidGVzdCIsImdldF92aXNpdG9yc19kYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJkYXRhIiwiaXAiLCIkIiwidmFsIiwic2VuZF92aXNpdG9yc19kYXRhIiwibWFuYWdlUiIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJ0YWJsZSIsImNvb2tpZXMiLCJkb25lIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsImVycm9yIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidmlzaXRvciIsInRoZW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7OztBQ1ZPLElBQU1BLFFBQVEsR0FBRyxvQkFBakI7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ3hCLE1BQUlDLFNBQVMsR0FBR0MsU0FBUyxDQUFDRCxTQUExQjtBQUNBLFNBQU8sZUFBZUUsSUFBZixDQUFvQkYsU0FBcEIsQ0FBUDtBQUNELENBSE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7QUFDQTtBQUNPLElBQU1HLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNyQyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsUUFBSUMsSUFBSSxHQUFHO0FBQ1RDLFFBQUUsRUFBRUMsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkMsR0FBakI7QUFESyxLQUFYOztBQUdBLFFBQUlILElBQUosRUFBVTtBQUNSRixhQUFPLENBQUNFLElBQUQsQ0FBUDtBQUNELEtBRkQsTUFFT0QsTUFBTSxDQUFDLFNBQUQsQ0FBTjtBQUNSLEdBUE0sQ0FBUDtBQVFELENBVE07QUFXQSxJQUFNSyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNKLElBQUQsRUFBT0ssT0FBUCxFQUFtQjtBQUNuREgsR0FBQyxDQUFDSSxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFaEIsNkNBQVEsR0FBR1MsSUFBSSxDQUFDTyxHQURoQjtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdMUixRQUFJLEVBQUU7QUFDSlMsV0FBSyxFQUFFVCxJQUFJLENBQUNTLEtBRFI7QUFFSlIsUUFBRSxFQUFFRCxJQUFJLENBQUNDLEVBQUwsR0FBVUQsSUFBSSxDQUFDQyxFQUFmLEdBQW9CLEVBRnBCO0FBR0pTLGFBQU8sRUFBRVYsSUFBSSxDQUFDVSxPQUFMLEdBQWVWLElBQUksQ0FBQ1UsT0FBcEIsR0FBOEI7QUFIbkM7QUFIRCxHQUFQLEVBU0dDLElBVEgsQ0FTUSxVQUFDQyxRQUFELEVBQWM7QUFDbEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0FQLFdBQU8sQ0FBQ08sUUFBRCxDQUFQO0FBQ0QsR0FaSCxFQWFHRyxJQWJILENBYVEsVUFBQ0MsS0FBRCxFQUFXO0FBQ2ZILFdBQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaO0FBQ0QsR0FmSDtBQWdCRCxDQWpCTSxDOzs7Ozs7Ozs7Ozs7O0FDYlA7QUFDQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRCxNQUFJQyxPQUFPLEdBQUd2QixrRUFBaUIsR0FBR3dCLElBQXBCLENBQXlCLFVBQUNwQixJQUFELEVBQVU7QUFDL0NhLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZCxJQUFaO0FBQ0QsR0FGYSxDQUFkO0FBR0QsQ0FKRCxFIiwiZmlsZSI6ImpzL2N1c3RvbS9ob21lL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gXCIva25nZWxsX2Vjb21tZXJjZS9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0lFID0gKCkgPT4ge1xyXG4gIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gIHJldHVybiAvTVNJRXxUcmlkZW50Ly50ZXN0KHVzZXJBZ2VudCk7XHJcbn07XHJcbiIsIi8vR2V0IHZpc2l0b3JzIERhdGFcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuZXhwb3J0IGNvbnN0IGdldF92aXNpdG9yc19kYXRhID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgaXA6ICQoXCIjaXBfYWRkcmVzc1wiKS52YWwoKSxcclxuICAgIH07XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgfSBlbHNlIHJlamVjdChcIm5vIGRhdGFcIik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZF92aXNpdG9yc19kYXRhID0gKGRhdGEsIG1hbmFnZVIpID0+IHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgIGlwOiBkYXRhLmlwID8gZGF0YS5pcCA6IFwiXCIsXHJcbiAgICAgIGNvb2tpZXM6IGRhdGEuY29va2llcyA/IGRhdGEuY29va2llcyA6IFwiXCIsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBtYW5hZ2VSKHJlc3BvbnNlKTtcclxuICAgIH0pXHJcbiAgICAuZmFpbCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGdldF92aXNpdG9yc19kYXRhIH0gZnJvbSBcImNvcmVqcy92aXNpdG9yc1wiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgbGV0IHZpc2l0b3IgPSBnZXRfdmlzaXRvcnNfZGF0YSgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==