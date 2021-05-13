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
return (self["webpackChunkkngell"] = self["webpackChunkkngell"] || []).push([["js/custom/admin/products/categories"],{

/***/ "./src/assets/js/custom/admin/products/categories.js":
/*!***********************************************************!*\
  !*** ./src/assets/js/custom/admin/products/categories.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var corejs_crud_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! corejs/crud_interface */ "./src/assets/js/core/crud_interface.js");
/* harmony import */ var corejs_select2_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! corejs/select2_manager */ "./src/assets/js/core/select2_manager.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var AllCategories = function AllCategories(element) {
  var _this = this;

  _classCallCheck(this, AllCategories);

  _defineProperty(this, "_init", function () {
    _this._setupVariables();

    _this._setupEvents();
  });

  _defineProperty(this, "_setupVariables", function () {
    _this.wrapper = _this.element.find(".card");
    _this.modalbox = _this.element.find("#modal-box");
    _this.modalform = _this.element.find("#modal-box #Categorie-frm");
  });

  _defineProperty(this, "_setupEvents", function () {
    var phpPlugin = _this; //inti crud

    var cruds = new corejs_crud_interface__WEBPACK_IMPORTED_MODULE_2__.default({
      table: "categories",
      wrapper: phpPlugin.wrapper,
      form: phpPlugin.modalform,
      modal: phpPlugin.modalbox,
      select_tag: "#parentID"
    }); //display All items

    cruds._displayAll({
      datatable: true
    }); //Select2 ajax


    new corejs_select2_manager__WEBPACK_IMPORTED_MODULE_3__.default()._init({
      element: phpPlugin.modalform.find("#parentID"),
      tbl_options: "categories",
      placeholder: "Please select a categorie"
    }); //set create/add function


    cruds._set_addBtn(); //Add or update


    cruds._add_update({
      frm_name: "Categorie-frm",
      datatable: true,
      swal: true,
      modal: true
    }); //edit


    cruds._edit({
      frm_name: "Categorie-frm",
      tbl_options: "categories",
      std_fields: ["catID", "date_enreg", "updateAt", "status", "categorie", "description", "parentID"]
    }); //clean form


    cruds._clean_form(); //delete items


    cruds._delete({
      swal: true,
      datatable: true,
      url_check: "forms/checkdelete"
    }); //Activate item


    cruds._active_inactive_elmt({
      table: "categories"
    });
  });

  this.element = element;
} //=======================================================================
//Init
//=======================================================================
;

document.addEventListener("DOMContentLoaded", function () {
  new AllCategories($(".page-container"))._init();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["commons/backend/admin/commonVendor","commons/backend/admin/commonCustomModules"], function() { return __webpack_exec__("./src/assets/js/custom/admin/products/categories.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2FkbWluL3Byb2R1Y3RzL2NhdGVnb3JpZXMuanMiXSwibmFtZXMiOlsiQWxsQ2F0ZWdvcmllcyIsImVsZW1lbnQiLCJfc2V0dXBWYXJpYWJsZXMiLCJfc2V0dXBFdmVudHMiLCJ3cmFwcGVyIiwiZmluZCIsIm1vZGFsYm94IiwibW9kYWxmb3JtIiwicGhwUGx1Z2luIiwiY3J1ZHMiLCJDcnVkcyIsInRhYmxlIiwiZm9ybSIsIm1vZGFsIiwic2VsZWN0X3RhZyIsIl9kaXNwbGF5QWxsIiwiZGF0YXRhYmxlIiwic2VsZWN0MiIsIl9pbml0IiwidGJsX29wdGlvbnMiLCJwbGFjZWhvbGRlciIsIl9zZXRfYWRkQnRuIiwiX2FkZF91cGRhdGUiLCJmcm1fbmFtZSIsInN3YWwiLCJfZWRpdCIsInN0ZF9maWVsZHMiLCJfY2xlYW5fZm9ybSIsIl9kZWxldGUiLCJ1cmxfY2hlY2siLCJfYWN0aXZlX2luYWN0aXZlX2VsbXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCIkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7SUFDTUEsYSxHQUNKLHVCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQUE7O0FBQUEsaUNBTWIsWUFBTTtBQUNaLFNBQUksQ0FBQ0MsZUFBTDs7QUFDQSxTQUFJLENBQUNDLFlBQUw7QUFDRCxHQVRvQjs7QUFBQSwyQ0FhSCxZQUFNO0FBQ3RCLFNBQUksQ0FBQ0MsT0FBTCxHQUFlLEtBQUksQ0FBQ0gsT0FBTCxDQUFhSSxJQUFiLENBQWtCLE9BQWxCLENBQWY7QUFDQSxTQUFJLENBQUNDLFFBQUwsR0FBZ0IsS0FBSSxDQUFDTCxPQUFMLENBQWFJLElBQWIsQ0FBa0IsWUFBbEIsQ0FBaEI7QUFDQSxTQUFJLENBQUNFLFNBQUwsR0FBaUIsS0FBSSxDQUFDTixPQUFMLENBQWFJLElBQWIsQ0FBa0IsMkJBQWxCLENBQWpCO0FBQ0QsR0FqQm9COztBQUFBLHdDQXFCTixZQUFNO0FBQ25CLFFBQUlHLFNBQVMsR0FBRyxLQUFoQixDQURtQixDQUVuQjs7QUFDQSxRQUFJQyxLQUFLLEdBQUcsSUFBSUMsMERBQUosQ0FBVTtBQUNwQkMsV0FBSyxFQUFFLFlBRGE7QUFFcEJQLGFBQU8sRUFBRUksU0FBUyxDQUFDSixPQUZDO0FBR3BCUSxVQUFJLEVBQUVKLFNBQVMsQ0FBQ0QsU0FISTtBQUlwQk0sV0FBSyxFQUFFTCxTQUFTLENBQUNGLFFBSkc7QUFLcEJRLGdCQUFVLEVBQUU7QUFMUSxLQUFWLENBQVosQ0FIbUIsQ0FVbkI7O0FBQ0FMLFNBQUssQ0FBQ00sV0FBTixDQUFrQjtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUFsQixFQVhtQixDQVluQjs7O0FBQ0EsUUFBSUMsMkRBQUosR0FBY0MsS0FBZCxDQUFvQjtBQUNsQmpCLGFBQU8sRUFBRU8sU0FBUyxDQUFDRCxTQUFWLENBQW9CRixJQUFwQixDQUF5QixXQUF6QixDQURTO0FBRWxCYyxpQkFBVyxFQUFFLFlBRks7QUFHbEJDLGlCQUFXLEVBQUU7QUFISyxLQUFwQixFQWJtQixDQWtCbkI7OztBQUNBWCxTQUFLLENBQUNZLFdBQU4sR0FuQm1CLENBb0JuQjs7O0FBRUFaLFNBQUssQ0FBQ2EsV0FBTixDQUFrQjtBQUNoQkMsY0FBUSxFQUFFLGVBRE07QUFFaEJQLGVBQVMsRUFBRSxJQUZLO0FBR2hCUSxVQUFJLEVBQUUsSUFIVTtBQUloQlgsV0FBSyxFQUFFO0FBSlMsS0FBbEIsRUF0Qm1CLENBNEJuQjs7O0FBQ0FKLFNBQUssQ0FBQ2dCLEtBQU4sQ0FBWTtBQUNWRixjQUFRLEVBQUUsZUFEQTtBQUVWSixpQkFBVyxFQUFFLFlBRkg7QUFHVk8sZ0JBQVUsRUFBRSxDQUNWLE9BRFUsRUFFVixZQUZVLEVBR1YsVUFIVSxFQUlWLFFBSlUsRUFLVixXQUxVLEVBTVYsYUFOVSxFQU9WLFVBUFU7QUFIRixLQUFaLEVBN0JtQixDQTBDbkI7OztBQUNBakIsU0FBSyxDQUFDa0IsV0FBTixHQTNDbUIsQ0E0Q25COzs7QUFDQWxCLFNBQUssQ0FBQ21CLE9BQU4sQ0FBYztBQUNaSixVQUFJLEVBQUUsSUFETTtBQUVaUixlQUFTLEVBQUUsSUFGQztBQUdaYSxlQUFTLEVBQUU7QUFIQyxLQUFkLEVBN0NtQixDQWtEbkI7OztBQUNBcEIsU0FBSyxDQUFDcUIscUJBQU4sQ0FBNEI7QUFBRW5CLFdBQUssRUFBRTtBQUFULEtBQTVCO0FBQ0QsR0F6RW9COztBQUNuQixPQUFLVixPQUFMLEdBQWVBLE9BQWY7QUFDRCxDLENBQ0Q7QUFDQTtBQUNBOzs7QUFzRUY4QixRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xELE1BQUloQyxhQUFKLENBQWtCaUMsQ0FBQyxDQUFDLGlCQUFELENBQW5CLEVBQXdDZixLQUF4QztBQUNELENBRkQsRSIsImZpbGUiOiJqcy9jdXN0b20vYWRtaW4vcHJvZHVjdHMvY2F0ZWdvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJpbXBvcnQgQ3J1ZHMgZnJvbSBcImNvcmVqcy9jcnVkX2ludGVyZmFjZVwiO1xyXG5pbXBvcnQgc2VsZWN0MiBmcm9tIFwiY29yZWpzL3NlbGVjdDJfbWFuYWdlclwiO1xyXG5jbGFzcyBBbGxDYXRlZ29yaWVzIHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy9Jbml0XHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIF9pbml0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fc2V0dXBWYXJpYWJsZXMoKTtcclxuICAgIHRoaXMuX3NldHVwRXZlbnRzKCk7XHJcbiAgfTtcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy9TZXR1cCB2YXJpYWJsZXNcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgX3NldHVwVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gICAgdGhpcy53cmFwcGVyID0gdGhpcy5lbGVtZW50LmZpbmQoXCIuY2FyZFwiKTtcclxuICAgIHRoaXMubW9kYWxib3ggPSB0aGlzLmVsZW1lbnQuZmluZChcIiNtb2RhbC1ib3hcIik7XHJcbiAgICB0aGlzLm1vZGFsZm9ybSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI21vZGFsLWJveCAjQ2F0ZWdvcmllLWZybVwiKTtcclxuICB9O1xyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvL1NldHVwIGV2ZW50c1xyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBfc2V0dXBFdmVudHMgPSAoKSA9PiB7XHJcbiAgICB2YXIgcGhwUGx1Z2luID0gdGhpcztcclxuICAgIC8vaW50aSBjcnVkXHJcbiAgICBsZXQgY3J1ZHMgPSBuZXcgQ3J1ZHMoe1xyXG4gICAgICB0YWJsZTogXCJjYXRlZ29yaWVzXCIsXHJcbiAgICAgIHdyYXBwZXI6IHBocFBsdWdpbi53cmFwcGVyLFxyXG4gICAgICBmb3JtOiBwaHBQbHVnaW4ubW9kYWxmb3JtLFxyXG4gICAgICBtb2RhbDogcGhwUGx1Z2luLm1vZGFsYm94LFxyXG4gICAgICBzZWxlY3RfdGFnOiBcIiNwYXJlbnRJRFwiLFxyXG4gICAgfSk7XHJcbiAgICAvL2Rpc3BsYXkgQWxsIGl0ZW1zXHJcbiAgICBjcnVkcy5fZGlzcGxheUFsbCh7IGRhdGF0YWJsZTogdHJ1ZSB9KTtcclxuICAgIC8vU2VsZWN0MiBhamF4XHJcbiAgICBuZXcgc2VsZWN0MigpLl9pbml0KHtcclxuICAgICAgZWxlbWVudDogcGhwUGx1Z2luLm1vZGFsZm9ybS5maW5kKFwiI3BhcmVudElEXCIpLFxyXG4gICAgICB0Ymxfb3B0aW9uczogXCJjYXRlZ29yaWVzXCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlBsZWFzZSBzZWxlY3QgYSBjYXRlZ29yaWVcIixcclxuICAgIH0pO1xyXG4gICAgLy9zZXQgY3JlYXRlL2FkZCBmdW5jdGlvblxyXG4gICAgY3J1ZHMuX3NldF9hZGRCdG4oKTtcclxuICAgIC8vQWRkIG9yIHVwZGF0ZVxyXG5cclxuICAgIGNydWRzLl9hZGRfdXBkYXRlKHtcclxuICAgICAgZnJtX25hbWU6IFwiQ2F0ZWdvcmllLWZybVwiLFxyXG4gICAgICBkYXRhdGFibGU6IHRydWUsXHJcbiAgICAgIHN3YWw6IHRydWUsXHJcbiAgICAgIG1vZGFsOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICAvL2VkaXRcclxuICAgIGNydWRzLl9lZGl0KHtcclxuICAgICAgZnJtX25hbWU6IFwiQ2F0ZWdvcmllLWZybVwiLFxyXG4gICAgICB0Ymxfb3B0aW9uczogXCJjYXRlZ29yaWVzXCIsXHJcbiAgICAgIHN0ZF9maWVsZHM6IFtcclxuICAgICAgICBcImNhdElEXCIsXHJcbiAgICAgICAgXCJkYXRlX2VucmVnXCIsXHJcbiAgICAgICAgXCJ1cGRhdGVBdFwiLFxyXG4gICAgICAgIFwic3RhdHVzXCIsXHJcbiAgICAgICAgXCJjYXRlZ29yaWVcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgXCJwYXJlbnRJRFwiLFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgICAvL2NsZWFuIGZvcm1cclxuICAgIGNydWRzLl9jbGVhbl9mb3JtKCk7XHJcbiAgICAvL2RlbGV0ZSBpdGVtc1xyXG4gICAgY3J1ZHMuX2RlbGV0ZSh7XHJcbiAgICAgIHN3YWw6IHRydWUsXHJcbiAgICAgIGRhdGF0YWJsZTogdHJ1ZSxcclxuICAgICAgdXJsX2NoZWNrOiBcImZvcm1zL2NoZWNrZGVsZXRlXCIsXHJcbiAgICB9KTtcclxuICAgIC8vQWN0aXZhdGUgaXRlbVxyXG4gICAgY3J1ZHMuX2FjdGl2ZV9pbmFjdGl2ZV9lbG10KHsgdGFibGU6IFwiY2F0ZWdvcmllc1wiIH0pO1xyXG4gIH07XHJcbn1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIG5ldyBBbGxDYXRlZ29yaWVzKCQoXCIucGFnZS1jb250YWluZXJcIikpLl9pbml0KCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9