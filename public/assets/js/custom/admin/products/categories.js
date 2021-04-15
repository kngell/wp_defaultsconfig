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


    cruds._select2({
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
      tbl_option: "",
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
};

document.addEventListener("DOMContentLoaded", function () {
  new AllCategories($(".page-container"))._init();
});

/***/ })

},
0,[["./src/assets/js/custom/admin/products/categories.js","commons/backend/admin/commonVendor","commons/backend/admin/commonCustomModules","js/librairies/adminlib"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2FkbWluL3Byb2R1Y3RzL2NhdGVnb3JpZXMuanMiXSwibmFtZXMiOlsiQWxsQ2F0ZWdvcmllcyIsImVsZW1lbnQiLCJfc2V0dXBWYXJpYWJsZXMiLCJfc2V0dXBFdmVudHMiLCJ3cmFwcGVyIiwiZmluZCIsIm1vZGFsYm94IiwibW9kYWxmb3JtIiwicGhwUGx1Z2luIiwiY3J1ZHMiLCJDcnVkcyIsInRhYmxlIiwiZm9ybSIsIm1vZGFsIiwic2VsZWN0X3RhZyIsIl9kaXNwbGF5QWxsIiwiZGF0YXRhYmxlIiwiX3NlbGVjdDIiLCJ0Ymxfb3B0aW9ucyIsInBsYWNlaG9sZGVyIiwiX3NldF9hZGRCdG4iLCJfYWRkX3VwZGF0ZSIsImZybV9uYW1lIiwic3dhbCIsIl9lZGl0IiwidGJsX29wdGlvbiIsInN0ZF9maWVsZHMiLCJfY2xlYW5fZm9ybSIsIl9kZWxldGUiLCJ1cmxfY2hlY2siLCJfYWN0aXZlX2luYWN0aXZlX2VsbXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCIkIiwiX2luaXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOztJQUNNQSxhLEdBQ0osdUJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFBQTs7QUFBQSxpQ0FHYixZQUFNO0FBQ1osU0FBSSxDQUFDQyxlQUFMOztBQUNBLFNBQUksQ0FBQ0MsWUFBTDtBQUNELEdBTm9COztBQUFBLDJDQU9ILFlBQU07QUFDdEIsU0FBSSxDQUFDQyxPQUFMLEdBQWUsS0FBSSxDQUFDSCxPQUFMLENBQWFJLElBQWIsQ0FBa0IsT0FBbEIsQ0FBZjtBQUNBLFNBQUksQ0FBQ0MsUUFBTCxHQUFnQixLQUFJLENBQUNMLE9BQUwsQ0FBYUksSUFBYixDQUFrQixZQUFsQixDQUFoQjtBQUNBLFNBQUksQ0FBQ0UsU0FBTCxHQUFpQixLQUFJLENBQUNOLE9BQUwsQ0FBYUksSUFBYixDQUFrQiwyQkFBbEIsQ0FBakI7QUFDRCxHQVhvQjs7QUFBQSx3Q0FZTixZQUFNO0FBQ25CLFFBQUlHLFNBQVMsR0FBRyxLQUFoQixDQURtQixDQUVuQjs7QUFDQSxRQUFJQyxLQUFLLEdBQUcsSUFBSUMsMERBQUosQ0FBVTtBQUNwQkMsV0FBSyxFQUFFLFlBRGE7QUFFcEJQLGFBQU8sRUFBRUksU0FBUyxDQUFDSixPQUZDO0FBR3BCUSxVQUFJLEVBQUVKLFNBQVMsQ0FBQ0QsU0FISTtBQUlwQk0sV0FBSyxFQUFFTCxTQUFTLENBQUNGLFFBSkc7QUFLcEJRLGdCQUFVLEVBQUU7QUFMUSxLQUFWLENBQVosQ0FIbUIsQ0FVbkI7O0FBQ0FMLFNBQUssQ0FBQ00sV0FBTixDQUFrQjtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUFsQixFQVhtQixDQVluQjs7O0FBQ0FQLFNBQUssQ0FBQ1EsUUFBTixDQUFlO0FBQ2JDLGlCQUFXLEVBQUUsWUFEQTtBQUViQyxpQkFBVyxFQUFFO0FBRkEsS0FBZixFQWJtQixDQWlCbkI7OztBQUNBVixTQUFLLENBQUNXLFdBQU4sR0FsQm1CLENBbUJuQjs7O0FBRUFYLFNBQUssQ0FBQ1ksV0FBTixDQUFrQjtBQUNoQkMsY0FBUSxFQUFFLGVBRE07QUFFaEJOLGVBQVMsRUFBRSxJQUZLO0FBR2hCTyxVQUFJLEVBQUUsSUFIVTtBQUloQlYsV0FBSyxFQUFFO0FBSlMsS0FBbEIsRUFyQm1CLENBMkJuQjs7O0FBQ0FKLFNBQUssQ0FBQ2UsS0FBTixDQUFZO0FBQ1ZGLGNBQVEsRUFBRSxlQURBO0FBRVZHLGdCQUFVLEVBQUUsRUFGRjtBQUdWQyxnQkFBVSxFQUFFLENBQ1YsT0FEVSxFQUVWLFlBRlUsRUFHVixVQUhVLEVBSVYsUUFKVSxFQUtWLFdBTFUsRUFNVixhQU5VLEVBT1YsVUFQVTtBQUhGLEtBQVosRUE1Qm1CLENBeUNuQjs7O0FBQ0FqQixTQUFLLENBQUNrQixXQUFOLEdBMUNtQixDQTJDbkI7OztBQUNBbEIsU0FBSyxDQUFDbUIsT0FBTixDQUFjO0FBQ1pMLFVBQUksRUFBRSxJQURNO0FBRVpQLGVBQVMsRUFBRSxJQUZDO0FBR1phLGVBQVMsRUFBRTtBQUhDLEtBQWQsRUE1Q21CLENBaURuQjs7O0FBQ0FwQixTQUFLLENBQUNxQixxQkFBTixDQUE0QjtBQUFFbkIsV0FBSyxFQUFFO0FBQVQsS0FBNUI7QUFDRCxHQS9Eb0I7O0FBQ25CLE9BQUtWLE9BQUwsR0FBZUEsT0FBZjtBQUNELEM7O0FBK0RIOEIsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRCxNQUFJaEMsYUFBSixDQUFrQmlDLENBQUMsQ0FBQyxpQkFBRCxDQUFuQixFQUF3Q0MsS0FBeEM7QUFDRCxDQUZELEUiLCJmaWxlIjoianMvY3VzdG9tL2FkbWluL3Byb2R1Y3RzL2NhdGVnb3JpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiaW1wb3J0IENydWRzIGZyb20gXCJjb3JlanMvY3J1ZF9pbnRlcmZhY2VcIjtcclxuY2xhc3MgQWxsQ2F0ZWdvcmllcyB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcbiAgX2luaXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9zZXR1cFZhcmlhYmxlcygpO1xyXG4gICAgdGhpcy5fc2V0dXBFdmVudHMoKTtcclxuICB9O1xyXG4gIF9zZXR1cFZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgIHRoaXMud3JhcHBlciA9IHRoaXMuZWxlbWVudC5maW5kKFwiLmNhcmRcIik7XHJcbiAgICB0aGlzLm1vZGFsYm94ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjbW9kYWwtYm94XCIpO1xyXG4gICAgdGhpcy5tb2RhbGZvcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNtb2RhbC1ib3ggI0NhdGVnb3JpZS1mcm1cIik7XHJcbiAgfTtcclxuICBfc2V0dXBFdmVudHMgPSAoKSA9PiB7XHJcbiAgICB2YXIgcGhwUGx1Z2luID0gdGhpcztcclxuICAgIC8vaW50aSBjcnVkXHJcbiAgICBsZXQgY3J1ZHMgPSBuZXcgQ3J1ZHMoe1xyXG4gICAgICB0YWJsZTogXCJjYXRlZ29yaWVzXCIsXHJcbiAgICAgIHdyYXBwZXI6IHBocFBsdWdpbi53cmFwcGVyLFxyXG4gICAgICBmb3JtOiBwaHBQbHVnaW4ubW9kYWxmb3JtLFxyXG4gICAgICBtb2RhbDogcGhwUGx1Z2luLm1vZGFsYm94LFxyXG4gICAgICBzZWxlY3RfdGFnOiBcIiNwYXJlbnRJRFwiLFxyXG4gICAgfSk7XHJcbiAgICAvL2Rpc3BsYXkgQWxsIGl0ZW1zXHJcbiAgICBjcnVkcy5fZGlzcGxheUFsbCh7IGRhdGF0YWJsZTogdHJ1ZSB9KTtcclxuICAgIC8vU2VsZWN0MiBhamF4XHJcbiAgICBjcnVkcy5fc2VsZWN0Mih7XHJcbiAgICAgIHRibF9vcHRpb25zOiBcImNhdGVnb3JpZXNcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiUGxlYXNlIHNlbGVjdCBhIGNhdGVnb3JpZVwiLFxyXG4gICAgfSk7XHJcbiAgICAvL3NldCBjcmVhdGUvYWRkIGZ1bmN0aW9uXHJcbiAgICBjcnVkcy5fc2V0X2FkZEJ0bigpO1xyXG4gICAgLy9BZGQgb3IgdXBkYXRlXHJcblxyXG4gICAgY3J1ZHMuX2FkZF91cGRhdGUoe1xyXG4gICAgICBmcm1fbmFtZTogXCJDYXRlZ29yaWUtZnJtXCIsXHJcbiAgICAgIGRhdGF0YWJsZTogdHJ1ZSxcclxuICAgICAgc3dhbDogdHJ1ZSxcclxuICAgICAgbW9kYWw6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIC8vZWRpdFxyXG4gICAgY3J1ZHMuX2VkaXQoe1xyXG4gICAgICBmcm1fbmFtZTogXCJDYXRlZ29yaWUtZnJtXCIsXHJcbiAgICAgIHRibF9vcHRpb246IFwiXCIsXHJcbiAgICAgIHN0ZF9maWVsZHM6IFtcclxuICAgICAgICBcImNhdElEXCIsXHJcbiAgICAgICAgXCJkYXRlX2VucmVnXCIsXHJcbiAgICAgICAgXCJ1cGRhdGVBdFwiLFxyXG4gICAgICAgIFwic3RhdHVzXCIsXHJcbiAgICAgICAgXCJjYXRlZ29yaWVcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgXCJwYXJlbnRJRFwiLFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgICAvL2NsZWFuIGZvcm1cclxuICAgIGNydWRzLl9jbGVhbl9mb3JtKCk7XHJcbiAgICAvL2RlbGV0ZSBpdGVtc1xyXG4gICAgY3J1ZHMuX2RlbGV0ZSh7XHJcbiAgICAgIHN3YWw6IHRydWUsXHJcbiAgICAgIGRhdGF0YWJsZTogdHJ1ZSxcclxuICAgICAgdXJsX2NoZWNrOiBcImZvcm1zL2NoZWNrZGVsZXRlXCIsXHJcbiAgICB9KTtcclxuICAgIC8vQWN0aXZhdGUgaXRlbVxyXG4gICAgY3J1ZHMuX2FjdGl2ZV9pbmFjdGl2ZV9lbG10KHsgdGFibGU6IFwiY2F0ZWdvcmllc1wiIH0pO1xyXG4gIH07XHJcbn1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIG5ldyBBbGxDYXRlZ29yaWVzKCQoXCIucGFnZS1jb250YWluZXJcIikpLl9pbml0KCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9