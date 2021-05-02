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
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var corejs_crud_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! corejs/crud_interface */ "./src/assets/js/core/crud_interface.js");
/* harmony import */ var corejs_select2_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! corejs/select2_manager */ "./src/assets/js/core/select2_manager.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");






var AllCategories = function AllCategories(element) {
  var _this = this;

  (0,_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AllCategories);

  (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "_init", function () {
    _this._setupVariables();

    _this._setupEvents();
  });

  (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "_setupVariables", function () {
    var _context, _context2, _context3;

    _this.wrapper = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context = _this.element).call(_context, ".card");
    _this.modalbox = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = _this.element).call(_context2, "#modal-box");
    _this.modalform = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = _this.element).call(_context3, "#modal-box #Categorie-frm");
  });

  (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "_setupEvents", function () {
    var _context4;

    var phpPlugin = _this; //inti crud

    var cruds = new corejs_crud_interface__WEBPACK_IMPORTED_MODULE_3__.default({
      table: "categories",
      wrapper: phpPlugin.wrapper,
      form: phpPlugin.modalform,
      modal: phpPlugin.modalbox,
      select_tag: "#parentID"
    }); //display All items

    cruds._displayAll({
      datatable: true
    }); //Select2 ajax


    new corejs_select2_manager__WEBPACK_IMPORTED_MODULE_4__.default()._init({
      element: _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context4 = phpPlugin.modalform).call(_context4, "#parentID"),
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
0,[["./src/assets/js/custom/admin/products/categories.js","commons/backend/admin/commonVendor","commons/backend/admin/commonCustomModules","js/librairies/adminlib"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2FkbWluL3Byb2R1Y3RzL2NhdGVnb3JpZXMuanMiXSwibmFtZXMiOlsiQWxsQ2F0ZWdvcmllcyIsImVsZW1lbnQiLCJfc2V0dXBWYXJpYWJsZXMiLCJfc2V0dXBFdmVudHMiLCJ3cmFwcGVyIiwibW9kYWxib3giLCJtb2RhbGZvcm0iLCJwaHBQbHVnaW4iLCJjcnVkcyIsIkNydWRzIiwidGFibGUiLCJmb3JtIiwibW9kYWwiLCJzZWxlY3RfdGFnIiwiX2Rpc3BsYXlBbGwiLCJkYXRhdGFibGUiLCJzZWxlY3QyIiwiX2luaXQiLCJ0Ymxfb3B0aW9ucyIsInBsYWNlaG9sZGVyIiwiX3NldF9hZGRCdG4iLCJfYWRkX3VwZGF0ZSIsImZybV9uYW1lIiwic3dhbCIsIl9lZGl0Iiwic3RkX2ZpZWxkcyIsIl9jbGVhbl9mb3JtIiwiX2RlbGV0ZSIsInVybF9jaGVjayIsIl9hY3RpdmVfaW5hY3RpdmVfZWxtdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIiQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7O0lBQ01BLGEsR0FDSix1QkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUFBOztBQUFBLHdHQU1iLFlBQU07QUFDWixTQUFJLENBQUNDLGVBQUw7O0FBQ0EsU0FBSSxDQUFDQyxZQUFMO0FBQ0QsR0FUb0I7O0FBQUEsa0hBYUgsWUFBTTtBQUFBOztBQUN0QixTQUFJLENBQUNDLE9BQUwsR0FBZSwyR0FBSSxDQUFDSCxPQUFMLGlCQUFrQixPQUFsQixDQUFmO0FBQ0EsU0FBSSxDQUFDSSxRQUFMLEdBQWdCLDRHQUFJLENBQUNKLE9BQUwsa0JBQWtCLFlBQWxCLENBQWhCO0FBQ0EsU0FBSSxDQUFDSyxTQUFMLEdBQWlCLDRHQUFJLENBQUNMLE9BQUwsa0JBQWtCLDJCQUFsQixDQUFqQjtBQUNELEdBakJvQjs7QUFBQSwrR0FxQk4sWUFBTTtBQUFBOztBQUNuQixRQUFJTSxTQUFTLEdBQUcsS0FBaEIsQ0FEbUIsQ0FFbkI7O0FBQ0EsUUFBSUMsS0FBSyxHQUFHLElBQUlDLDBEQUFKLENBQVU7QUFDcEJDLFdBQUssRUFBRSxZQURhO0FBRXBCTixhQUFPLEVBQUVHLFNBQVMsQ0FBQ0gsT0FGQztBQUdwQk8sVUFBSSxFQUFFSixTQUFTLENBQUNELFNBSEk7QUFJcEJNLFdBQUssRUFBRUwsU0FBUyxDQUFDRixRQUpHO0FBS3BCUSxnQkFBVSxFQUFFO0FBTFEsS0FBVixDQUFaLENBSG1CLENBVW5COztBQUNBTCxTQUFLLENBQUNNLFdBQU4sQ0FBa0I7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FBbEIsRUFYbUIsQ0FZbkI7OztBQUNBLFFBQUlDLDJEQUFKLEdBQWNDLEtBQWQsQ0FBb0I7QUFDbEJoQixhQUFPLEVBQUUsdUdBQUFNLFNBQVMsQ0FBQ0QsU0FBVixrQkFBeUIsV0FBekIsQ0FEUztBQUVsQlksaUJBQVcsRUFBRSxZQUZLO0FBR2xCQyxpQkFBVyxFQUFFO0FBSEssS0FBcEIsRUFibUIsQ0FrQm5COzs7QUFDQVgsU0FBSyxDQUFDWSxXQUFOLEdBbkJtQixDQW9CbkI7OztBQUVBWixTQUFLLENBQUNhLFdBQU4sQ0FBa0I7QUFDaEJDLGNBQVEsRUFBRSxlQURNO0FBRWhCUCxlQUFTLEVBQUUsSUFGSztBQUdoQlEsVUFBSSxFQUFFLElBSFU7QUFJaEJYLFdBQUssRUFBRTtBQUpTLEtBQWxCLEVBdEJtQixDQTRCbkI7OztBQUNBSixTQUFLLENBQUNnQixLQUFOLENBQVk7QUFDVkYsY0FBUSxFQUFFLGVBREE7QUFFVkosaUJBQVcsRUFBRSxZQUZIO0FBR1ZPLGdCQUFVLEVBQUUsQ0FDVixPQURVLEVBRVYsWUFGVSxFQUdWLFVBSFUsRUFJVixRQUpVLEVBS1YsV0FMVSxFQU1WLGFBTlUsRUFPVixVQVBVO0FBSEYsS0FBWixFQTdCbUIsQ0EwQ25COzs7QUFDQWpCLFNBQUssQ0FBQ2tCLFdBQU4sR0EzQ21CLENBNENuQjs7O0FBQ0FsQixTQUFLLENBQUNtQixPQUFOLENBQWM7QUFDWkosVUFBSSxFQUFFLElBRE07QUFFWlIsZUFBUyxFQUFFLElBRkM7QUFHWmEsZUFBUyxFQUFFO0FBSEMsS0FBZCxFQTdDbUIsQ0FrRG5COzs7QUFDQXBCLFNBQUssQ0FBQ3FCLHFCQUFOLENBQTRCO0FBQUVuQixXQUFLLEVBQUU7QUFBVCxLQUE1QjtBQUNELEdBekVvQjs7QUFDbkIsT0FBS1QsT0FBTCxHQUFlQSxPQUFmO0FBQ0QsQyxDQUNEO0FBQ0E7QUFDQTs7O0FBc0VGNkIsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRCxNQUFJL0IsYUFBSixDQUFrQmdDLENBQUMsQ0FBQyxpQkFBRCxDQUFuQixFQUF3Q2YsS0FBeEM7QUFDRCxDQUZELEUiLCJmaWxlIjoianMvY3VzdG9tL2FkbWluL3Byb2R1Y3RzL2NhdGVnb3JpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiaW1wb3J0IENydWRzIGZyb20gXCJjb3JlanMvY3J1ZF9pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHNlbGVjdDIgZnJvbSBcImNvcmVqcy9zZWxlY3QyX21hbmFnZXJcIjtcclxuY2xhc3MgQWxsQ2F0ZWdvcmllcyB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vSW5pdFxyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBfaW5pdCA9ICgpID0+IHtcclxuICAgIHRoaXMuX3NldHVwVmFyaWFibGVzKCk7XHJcbiAgICB0aGlzLl9zZXR1cEV2ZW50cygpO1xyXG4gIH07XHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vU2V0dXAgdmFyaWFibGVzXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIF9zZXR1cFZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgIHRoaXMud3JhcHBlciA9IHRoaXMuZWxlbWVudC5maW5kKFwiLmNhcmRcIik7XHJcbiAgICB0aGlzLm1vZGFsYm94ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjbW9kYWwtYm94XCIpO1xyXG4gICAgdGhpcy5tb2RhbGZvcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNtb2RhbC1ib3ggI0NhdGVnb3JpZS1mcm1cIik7XHJcbiAgfTtcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy9TZXR1cCBldmVudHNcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgX3NldHVwRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgdmFyIHBocFBsdWdpbiA9IHRoaXM7XHJcbiAgICAvL2ludGkgY3J1ZFxyXG4gICAgbGV0IGNydWRzID0gbmV3IENydWRzKHtcclxuICAgICAgdGFibGU6IFwiY2F0ZWdvcmllc1wiLFxyXG4gICAgICB3cmFwcGVyOiBwaHBQbHVnaW4ud3JhcHBlcixcclxuICAgICAgZm9ybTogcGhwUGx1Z2luLm1vZGFsZm9ybSxcclxuICAgICAgbW9kYWw6IHBocFBsdWdpbi5tb2RhbGJveCxcclxuICAgICAgc2VsZWN0X3RhZzogXCIjcGFyZW50SURcIixcclxuICAgIH0pO1xyXG4gICAgLy9kaXNwbGF5IEFsbCBpdGVtc1xyXG4gICAgY3J1ZHMuX2Rpc3BsYXlBbGwoeyBkYXRhdGFibGU6IHRydWUgfSk7XHJcbiAgICAvL1NlbGVjdDIgYWpheFxyXG4gICAgbmV3IHNlbGVjdDIoKS5faW5pdCh7XHJcbiAgICAgIGVsZW1lbnQ6IHBocFBsdWdpbi5tb2RhbGZvcm0uZmluZChcIiNwYXJlbnRJRFwiKSxcclxuICAgICAgdGJsX29wdGlvbnM6IFwiY2F0ZWdvcmllc1wiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJQbGVhc2Ugc2VsZWN0IGEgY2F0ZWdvcmllXCIsXHJcbiAgICB9KTtcclxuICAgIC8vc2V0IGNyZWF0ZS9hZGQgZnVuY3Rpb25cclxuICAgIGNydWRzLl9zZXRfYWRkQnRuKCk7XHJcbiAgICAvL0FkZCBvciB1cGRhdGVcclxuXHJcbiAgICBjcnVkcy5fYWRkX3VwZGF0ZSh7XHJcbiAgICAgIGZybV9uYW1lOiBcIkNhdGVnb3JpZS1mcm1cIixcclxuICAgICAgZGF0YXRhYmxlOiB0cnVlLFxyXG4gICAgICBzd2FsOiB0cnVlLFxyXG4gICAgICBtb2RhbDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgLy9lZGl0XHJcbiAgICBjcnVkcy5fZWRpdCh7XHJcbiAgICAgIGZybV9uYW1lOiBcIkNhdGVnb3JpZS1mcm1cIixcclxuICAgICAgdGJsX29wdGlvbnM6IFwiY2F0ZWdvcmllc1wiLFxyXG4gICAgICBzdGRfZmllbGRzOiBbXHJcbiAgICAgICAgXCJjYXRJRFwiLFxyXG4gICAgICAgIFwiZGF0ZV9lbnJlZ1wiLFxyXG4gICAgICAgIFwidXBkYXRlQXRcIixcclxuICAgICAgICBcInN0YXR1c1wiLFxyXG4gICAgICAgIFwiY2F0ZWdvcmllXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiLFxyXG4gICAgICAgIFwicGFyZW50SURcIixcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gICAgLy9jbGVhbiBmb3JtXHJcbiAgICBjcnVkcy5fY2xlYW5fZm9ybSgpO1xyXG4gICAgLy9kZWxldGUgaXRlbXNcclxuICAgIGNydWRzLl9kZWxldGUoe1xyXG4gICAgICBzd2FsOiB0cnVlLFxyXG4gICAgICBkYXRhdGFibGU6IHRydWUsXHJcbiAgICAgIHVybF9jaGVjazogXCJmb3Jtcy9jaGVja2RlbGV0ZVwiLFxyXG4gICAgfSk7XHJcbiAgICAvL0FjdGl2YXRlIGl0ZW1cclxuICAgIGNydWRzLl9hY3RpdmVfaW5hY3RpdmVfZWxtdCh7IHRhYmxlOiBcImNhdGVnb3JpZXNcIiB9KTtcclxuICB9O1xyXG59XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBuZXcgQWxsQ2F0ZWdvcmllcygkKFwiLnBhZ2UtY29udGFpbmVyXCIpKS5faW5pdCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==