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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2FkbWluL3Byb2R1Y3RzL2NhdGVnb3JpZXMuanMiXSwibmFtZXMiOlsiQWxsQ2F0ZWdvcmllcyIsImVsZW1lbnQiLCJfc2V0dXBWYXJpYWJsZXMiLCJfc2V0dXBFdmVudHMiLCJ3cmFwcGVyIiwiZmluZCIsIm1vZGFsYm94IiwibW9kYWxmb3JtIiwicGhwUGx1Z2luIiwiY3J1ZHMiLCJDcnVkcyIsInRhYmxlIiwiZm9ybSIsIm1vZGFsIiwic2VsZWN0X3RhZyIsIl9kaXNwbGF5QWxsIiwiZGF0YXRhYmxlIiwic2VsZWN0MiIsIl9pbml0IiwidGJsX29wdGlvbnMiLCJwbGFjZWhvbGRlciIsIl9zZXRfYWRkQnRuIiwiX2FkZF91cGRhdGUiLCJmcm1fbmFtZSIsInN3YWwiLCJfZWRpdCIsInN0ZF9maWVsZHMiLCJfY2xlYW5fZm9ybSIsIl9kZWxldGUiLCJ1cmxfY2hlY2siLCJfYWN0aXZlX2luYWN0aXZlX2VsbXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCIkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBOztJQUNNQSxhLEdBQ0osdUJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFBQTs7QUFBQSxpQ0FNYixZQUFNO0FBQ1osU0FBSSxDQUFDQyxlQUFMOztBQUNBLFNBQUksQ0FBQ0MsWUFBTDtBQUNELEdBVG9COztBQUFBLDJDQWFILFlBQU07QUFDdEIsU0FBSSxDQUFDQyxPQUFMLEdBQWUsS0FBSSxDQUFDSCxPQUFMLENBQWFJLElBQWIsQ0FBa0IsT0FBbEIsQ0FBZjtBQUNBLFNBQUksQ0FBQ0MsUUFBTCxHQUFnQixLQUFJLENBQUNMLE9BQUwsQ0FBYUksSUFBYixDQUFrQixZQUFsQixDQUFoQjtBQUNBLFNBQUksQ0FBQ0UsU0FBTCxHQUFpQixLQUFJLENBQUNOLE9BQUwsQ0FBYUksSUFBYixDQUFrQiwyQkFBbEIsQ0FBakI7QUFDRCxHQWpCb0I7O0FBQUEsd0NBcUJOLFlBQU07QUFDbkIsUUFBSUcsU0FBUyxHQUFHLEtBQWhCLENBRG1CLENBRW5COztBQUNBLFFBQUlDLEtBQUssR0FBRyxJQUFJQywwREFBSixDQUFVO0FBQ3BCQyxXQUFLLEVBQUUsWUFEYTtBQUVwQlAsYUFBTyxFQUFFSSxTQUFTLENBQUNKLE9BRkM7QUFHcEJRLFVBQUksRUFBRUosU0FBUyxDQUFDRCxTQUhJO0FBSXBCTSxXQUFLLEVBQUVMLFNBQVMsQ0FBQ0YsUUFKRztBQUtwQlEsZ0JBQVUsRUFBRTtBQUxRLEtBQVYsQ0FBWixDQUhtQixDQVVuQjs7QUFDQUwsU0FBSyxDQUFDTSxXQUFOLENBQWtCO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQWxCLEVBWG1CLENBWW5COzs7QUFDQSxRQUFJQywyREFBSixHQUFjQyxLQUFkLENBQW9CO0FBQ2xCakIsYUFBTyxFQUFFTyxTQUFTLENBQUNELFNBQVYsQ0FBb0JGLElBQXBCLENBQXlCLFdBQXpCLENBRFM7QUFFbEJjLGlCQUFXLEVBQUUsWUFGSztBQUdsQkMsaUJBQVcsRUFBRTtBQUhLLEtBQXBCLEVBYm1CLENBa0JuQjs7O0FBQ0FYLFNBQUssQ0FBQ1ksV0FBTixHQW5CbUIsQ0FvQm5COzs7QUFFQVosU0FBSyxDQUFDYSxXQUFOLENBQWtCO0FBQ2hCQyxjQUFRLEVBQUUsZUFETTtBQUVoQlAsZUFBUyxFQUFFLElBRks7QUFHaEJRLFVBQUksRUFBRSxJQUhVO0FBSWhCWCxXQUFLLEVBQUU7QUFKUyxLQUFsQixFQXRCbUIsQ0E0Qm5COzs7QUFDQUosU0FBSyxDQUFDZ0IsS0FBTixDQUFZO0FBQ1ZGLGNBQVEsRUFBRSxlQURBO0FBRVZKLGlCQUFXLEVBQUUsWUFGSDtBQUdWTyxnQkFBVSxFQUFFLENBQ1YsT0FEVSxFQUVWLFlBRlUsRUFHVixVQUhVLEVBSVYsUUFKVSxFQUtWLFdBTFUsRUFNVixhQU5VLEVBT1YsVUFQVTtBQUhGLEtBQVosRUE3Qm1CLENBMENuQjs7O0FBQ0FqQixTQUFLLENBQUNrQixXQUFOLEdBM0NtQixDQTRDbkI7OztBQUNBbEIsU0FBSyxDQUFDbUIsT0FBTixDQUFjO0FBQ1pKLFVBQUksRUFBRSxJQURNO0FBRVpSLGVBQVMsRUFBRSxJQUZDO0FBR1phLGVBQVMsRUFBRTtBQUhDLEtBQWQsRUE3Q21CLENBa0RuQjs7O0FBQ0FwQixTQUFLLENBQUNxQixxQkFBTixDQUE0QjtBQUFFbkIsV0FBSyxFQUFFO0FBQVQsS0FBNUI7QUFDRCxHQXpFb0I7O0FBQ25CLE9BQUtWLE9BQUwsR0FBZUEsT0FBZjtBQUNELEMsQ0FDRDtBQUNBO0FBQ0E7OztBQXNFRjhCLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQsTUFBSWhDLGFBQUosQ0FBa0JpQyxDQUFDLENBQUMsaUJBQUQsQ0FBbkIsRUFBd0NmLEtBQXhDO0FBQ0QsQ0FGRCxFIiwiZmlsZSI6ImpzL2N1c3RvbS9hZG1pbi9wcm9kdWN0cy9jYXRlZ29yaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImltcG9ydCBDcnVkcyBmcm9tIFwiY29yZWpzL2NydWRfaW50ZXJmYWNlXCI7XHJcbmltcG9ydCBzZWxlY3QyIGZyb20gXCJjb3JlanMvc2VsZWN0Ml9tYW5hZ2VyXCI7XHJcbmNsYXNzIEFsbENhdGVnb3JpZXMge1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvL0luaXRcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgX2luaXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9zZXR1cFZhcmlhYmxlcygpO1xyXG4gICAgdGhpcy5fc2V0dXBFdmVudHMoKTtcclxuICB9O1xyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvL1NldHVwIHZhcmlhYmxlc1xyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBfc2V0dXBWYXJpYWJsZXMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLndyYXBwZXIgPSB0aGlzLmVsZW1lbnQuZmluZChcIi5jYXJkXCIpO1xyXG4gICAgdGhpcy5tb2RhbGJveCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI21vZGFsLWJveFwiKTtcclxuICAgIHRoaXMubW9kYWxmb3JtID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjbW9kYWwtYm94ICNDYXRlZ29yaWUtZnJtXCIpO1xyXG4gIH07XHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vU2V0dXAgZXZlbnRzXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIF9zZXR1cEV2ZW50cyA9ICgpID0+IHtcclxuICAgIHZhciBwaHBQbHVnaW4gPSB0aGlzO1xyXG4gICAgLy9pbnRpIGNydWRcclxuICAgIGxldCBjcnVkcyA9IG5ldyBDcnVkcyh7XHJcbiAgICAgIHRhYmxlOiBcImNhdGVnb3JpZXNcIixcclxuICAgICAgd3JhcHBlcjogcGhwUGx1Z2luLndyYXBwZXIsXHJcbiAgICAgIGZvcm06IHBocFBsdWdpbi5tb2RhbGZvcm0sXHJcbiAgICAgIG1vZGFsOiBwaHBQbHVnaW4ubW9kYWxib3gsXHJcbiAgICAgIHNlbGVjdF90YWc6IFwiI3BhcmVudElEXCIsXHJcbiAgICB9KTtcclxuICAgIC8vZGlzcGxheSBBbGwgaXRlbXNcclxuICAgIGNydWRzLl9kaXNwbGF5QWxsKHsgZGF0YXRhYmxlOiB0cnVlIH0pO1xyXG4gICAgLy9TZWxlY3QyIGFqYXhcclxuICAgIG5ldyBzZWxlY3QyKCkuX2luaXQoe1xyXG4gICAgICBlbGVtZW50OiBwaHBQbHVnaW4ubW9kYWxmb3JtLmZpbmQoXCIjcGFyZW50SURcIiksXHJcbiAgICAgIHRibF9vcHRpb25zOiBcImNhdGVnb3JpZXNcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiUGxlYXNlIHNlbGVjdCBhIGNhdGVnb3JpZVwiLFxyXG4gICAgfSk7XHJcbiAgICAvL3NldCBjcmVhdGUvYWRkIGZ1bmN0aW9uXHJcbiAgICBjcnVkcy5fc2V0X2FkZEJ0bigpO1xyXG4gICAgLy9BZGQgb3IgdXBkYXRlXHJcblxyXG4gICAgY3J1ZHMuX2FkZF91cGRhdGUoe1xyXG4gICAgICBmcm1fbmFtZTogXCJDYXRlZ29yaWUtZnJtXCIsXHJcbiAgICAgIGRhdGF0YWJsZTogdHJ1ZSxcclxuICAgICAgc3dhbDogdHJ1ZSxcclxuICAgICAgbW9kYWw6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIC8vZWRpdFxyXG4gICAgY3J1ZHMuX2VkaXQoe1xyXG4gICAgICBmcm1fbmFtZTogXCJDYXRlZ29yaWUtZnJtXCIsXHJcbiAgICAgIHRibF9vcHRpb25zOiBcImNhdGVnb3JpZXNcIixcclxuICAgICAgc3RkX2ZpZWxkczogW1xyXG4gICAgICAgIFwiY2F0SURcIixcclxuICAgICAgICBcImRhdGVfZW5yZWdcIixcclxuICAgICAgICBcInVwZGF0ZUF0XCIsXHJcbiAgICAgICAgXCJzdGF0dXNcIixcclxuICAgICAgICBcImNhdGVnb3JpZVwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIixcclxuICAgICAgICBcInBhcmVudElEXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICAgIC8vY2xlYW4gZm9ybVxyXG4gICAgY3J1ZHMuX2NsZWFuX2Zvcm0oKTtcclxuICAgIC8vZGVsZXRlIGl0ZW1zXHJcbiAgICBjcnVkcy5fZGVsZXRlKHtcclxuICAgICAgc3dhbDogdHJ1ZSxcclxuICAgICAgZGF0YXRhYmxlOiB0cnVlLFxyXG4gICAgICB1cmxfY2hlY2s6IFwiZm9ybXMvY2hlY2tkZWxldGVcIixcclxuICAgIH0pO1xyXG4gICAgLy9BY3RpdmF0ZSBpdGVtXHJcbiAgICBjcnVkcy5fYWN0aXZlX2luYWN0aXZlX2VsbXQoeyB0YWJsZTogXCJjYXRlZ29yaWVzXCIgfSk7XHJcbiAgfTtcclxufVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgbmV3IEFsbENhdGVnb3JpZXMoJChcIi5wYWdlLWNvbnRhaW5lclwiKSkuX2luaXQoKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=