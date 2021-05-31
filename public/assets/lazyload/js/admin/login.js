(self["webpackChunkkngell"] = self["webpackChunkkngell"] || []).push([["login"],{

/***/ "./src/assets/js/core/form_crud.js":
/*!*****************************************!*\
  !*** ./src/assets/js/core/form_crud.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAllDetails": function() { return /* binding */ displayAllDetails; },
/* harmony export */   "editForm": function() { return /* binding */ editForm; },
/* harmony export */   "displayAllItems": function() { return /* binding */ displayAllItems; },
/* harmony export */   "Add": function() { return /* binding */ Add; },
/* harmony export */   "Call_controller": function() { return /* binding */ Call_controller; },
/* harmony export */   "Delete": function() { return /* binding */ Delete; },
/* harmony export */   "displayMultisellect": function() { return /* binding */ displayMultisellect; },
/* harmony export */   "addCategorrie": function() { return /* binding */ addCategorrie; },
/* harmony export */   "select2AjaxParams": function() { return /* binding */ select2AjaxParams; },
/* harmony export */   "Call": function() { return /* binding */ Call; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./config */ "./src/assets/js/core/config.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 //display all details

function displayAllDetails(data, gestion) {
  var form_data = new FormData();
  form_data.append("isIE", (0,_config__WEBPACK_IMPORTED_MODULE_14__.isIE)());
  $.each(data, function (key, val) {
    form_data.append(key, val);
  });
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_14__.BASE_URL + data.url,
    method: "POST",
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    success: function success(response) {
      gestion(response, data.params ? data.params : "");
    }
  });
} //edit data

function editForm(data, gestion) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_14__.BASE_URL + data.url,
    method: "post",
    data: data.formData,
    success: function success(response) {
      gestion(response, data.params ? data.params : "");
    }
  });
} //display all Items

function displayAllItems(data, gestion) {
  var form_data = new FormData();
  form_data.append("isIE", (0,_config__WEBPACK_IMPORTED_MODULE_14__.isIE)());
  $.each(data, function (key, val) {
    form_data.append(key, val);
  });
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_14__.BASE_URL + data.url,
    method: "POST",
    contentType: false,
    processData: false,
    data: form_data,
    success: function success(response) {
      gestion(response, data.params ? data.params : "");
    }
  });
} //add Item

function Add(data, gestion) {
  var formData = new FormData(data.frm[0]);
  formData.append("isIE", (0,_config__WEBPACK_IMPORTED_MODULE_14__.isIE)());
  $.each(data, function (key, val) {
    if (_typeof(val) === "object") {
      for (var _i = 0, _Object$entries = Object.entries(val); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            k = _Object$entries$_i[0],
            v = _Object$entries$_i[1];

        formData.append(k, JSON.stringify(v));
      }
    } else if (val instanceof Array) {
      for (var i = 0; i < val.length; i++) {
        formData.append(val[i].name, data.files[i]);
      }
    } else {
      formData.append(key, val);
    }
  });
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_14__.BASE_URL + data.url,
    method: "post",
    data: formData,
    cache: false,
    processData: false,
    contentType: false,
    success: function success(response) {
      gestion(response, data.params ? data.params : "");
    }
  });
} //update

function Call_controller(data, gestion) {
  var formData = new FormData(data.frm[0]);
  formData.append("frm_name", data.frm_name);
  formData.append("isIE", (0,_config__WEBPACK_IMPORTED_MODULE_14__.isIE)());
  $.each(data, function (key, val) {
    if (_typeof(val) === "object") {
      for (var _i2 = 0, _Object$entries2 = Object.entries(val); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            k = _Object$entries2$_i[0],
            v = _Object$entries2$_i[1];

        formData.append(k, JSON.stringify(v));
      }
    } else if (val instanceof Array) {
      for (var i = 0; i < val.length; i++) {
        formData.append(val[i].name, data.files[i]);
      }
    } else {
      formData.append(key, val);
    }
  });
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_14__.BASE_URL + data.url,
    method: "POST",
    processData: false,
    contentType: false,
    dataType: "json",
    data: formData,
    success: function success(response) {
      gestion(response, data.params ? data.params : "");
    },
    error: function error(request, status, _error) {
      console.log(request.responseText, _error);
    }
  });
} //delete

function Delete(data, displayItem) {
  checkBeforeDelete(data).then(function (result) {
    if (result.value) {
      $.ajax({
        url: _config__WEBPACK_IMPORTED_MODULE_14__.BASE_URL + data.url,
        method: "post",
        data: data.serverData,
        success: function success(response) {
          displayItem(response, data.params ? data.params : "");
        }
      });
    }
  });
} //function check before delete

function checkBeforeDelete(data) {
  return new Promise(function (resolve, reject) {
    if (!data.url_check) {
      var html = function html() {
        var htw = document.createElement("div");

        if (data.swal_message) {
          return htw.innerHTML = data.swal_message;
        } else {
          return htw.innerHTML = "<p>You won't be able to revert this!</p>";
        }
      };

      data.swal.fire({
        title: "Are you sure?",
        showCancelButton: true,
        html: html(),
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: data.swal_button ? data.swal_button : "Delete!"
      }).then(function (result) {
        resolve(result);
      });
    } else {
      console.log(data);
      $.ajax({
        url: _config__WEBPACK_IMPORTED_MODULE_14__.BASE_URL + data.url_check,
        method: "post",
        data: data.serverData
      }).done(function (response) {
        data.swal.fire({
          title: "Are you sure?",
          showCancelButton: true,
          html: "<p>You won't be able to revert this!</p>" + response.msg,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Delete!"
        }).then(function (result) {
          resolve(result);
        });
      }).fail(function (error) {
        reject(error);
      });
    }
  });
}

function displayMultisellect(data) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_14__.BASE_URL + "forms/fillMultiselect",
    method: "post",
    data: {
      table: data.table
    },
    success: function success(response) {
      if (response.result === "success") {
        data.displayID.append(response.msg);
      } else {
        data.alertID.html(response.msg);
      }
    }
  });
}
function addCategorrie(catField, alertID) {
  var cat = document.querySelector(catField);

  if (cat.value.length == 0) {
    alert("Le champs catégorie est vide");
  } else {
    $.ajax({
      url: _config__WEBPACK_IMPORTED_MODULE_14__.BASE_URL + "forms/addcategorie",
      method: "post",
      data: {
        categorie: cat.value
      },
      success: function success(response) {
        if (response != "success") {
          $(alertID).html(response);
        }
      }
    });
  }
}
function select2AjaxParams(_data) {
  return {
    url: _config__WEBPACK_IMPORTED_MODULE_14__.BASE_URL + _data.url,
    type: "post",
    dataType: "json",
    delay: 250,
    data: function data(params) {
      return {
        searchTerm: params.term,
        // search term
        table: _data.table != "" ? _data.table : "",
        data_type: _data.data_type != "" ? _data.data_type : "",
        parentID: _data.parentID != "" ? _data.parentID : ""
      };
    },
    processResults: function processResults(response) {
      if (response.result == "success") {
        return {
          results: $.map(response.msg, function (obj) {
            if (obj.id != 0) {
              return {
                id: obj.id,
                text: obj.text
              };
            } else {
              return {
                id: obj.id,
                text: obj.text
              };
            }
          })
        };
      }
    },
    cache: true
  };
}
function Call(data) {
  var dt = new FormData();

  for (var _i3 = 0, _Object$entries3 = Object.entries(data.params); _i3 < _Object$entries3.length; _i3++) {
    var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
        key = _Object$entries3$_i[0],
        value = _Object$entries3$_i[1];

    dt.append(key, value);
  }

  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_14__.BASE_URL + data.url,
    method: "POST",
    processData: false,
    contentType: false,
    dataType: "json",
    data: dt,
    success: function success(response) {}
  });
}

/***/ }),

/***/ "./src/assets/js/core/inputErrManager.js":
/*!***********************************************!*\
  !*** ./src/assets/js/core/inputErrManager.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Input_Manager = /*#__PURE__*/function () {
  function Input_Manager() {
    _classCallCheck(this, Input_Manager);

    _defineProperty(this, "reset_invalid_input", function (form) {
      form.find(".is-invalid").removeClass("is-invalid");
      form.find("div.invalid-feedback").html("");
    });

    _defineProperty(this, "error", function (form, InputErr) {
      var arrErr = [];

      for (var _i = 0, _Object$entries = Object.entries(InputErr); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        var input = form.find("#" + key).addClass("is-invalid");
        input.parent().children("div.invalid-feedback").html(value);
        arrErr.push(key);
      }

      return arrErr;
    });
  }

  _createClass(Input_Manager, [{
    key: "removeInvalidInput",
    value: //remove invalid input on focus
    function removeInvalidInput(Myform) {
      Myform.on("focus", "input,textarea, .ck, .note-editor", function () {
        $(this).removeClass("is-invalid");
        $(this).parent().children("div.invalid-feedback").html("");
      });
    }
  }]);

  return Input_Manager;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Input_Manager());

/***/ }),

/***/ "./src/assets/js/core/login_register.class.js":
/*!****************************************************!*\
  !*** ./src/assets/js/core/login_register.class.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var corejs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! corejs/config */ "./src/assets/js/core/config.js");
/* harmony import */ var corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! corejs/form_crud */ "./src/assets/js/core/form_crud.js");
/* harmony import */ var corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! corejs/inputErrManager */ "./src/assets/js/core/inputErrManager.js");
/* harmony import */ var corejs_profile_img__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! corejs/profile_img */ "./src/assets/js/core/profile_img.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Login_And_Register = function Login_And_Register(element) {
  var _this = this;

  _classCallCheck(this, Login_And_Register);

  _defineProperty(this, "_init", function () {
    _this._setupVariables();

    _this._setupEvents();
  });

  _defineProperty(this, "_setupVariables", function () {
    _this.logbox = _this.element.find("#login-box");
    _this.loginfrm = _this.element.find("#login-frm");
    _this.regbox = _this.element.find("#register-box");
    _this.regfrm = _this.element.find("#register-frm");
    _this.forgotbox = _this.element.find("#forgot-box");
    _this.forgotfrm = _this.element.find("#forgot-frm");
    _this.bs_login_box = document.getElementById("login-box");
    _this.bs_register_box = document.getElementById("register-box");
    _this.bs_forgot_box = document.getElementById("forgot-box");
  });

  _defineProperty(this, "_setupEvents", function () {
    var phpLR = _this; //refresh login & register frm on hide and show

    phpLR.bs_login_box.addEventListener("hide.bs.modal", function () {
      phpLR.loginfrm.get(0).reset();

      if (phpLR.loginfrm.find(".is-invalid").length != 0) {
        corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.default.reset_invalid_input(phpLR.loginfrm);
      }
    }); //Reset register form invalid input on hide modal

    phpLR.bs_register_box.addEventListener("hide.bs.modal", function () {
      phpLR.regfrm.get(0).reset();

      if (phpLR.regfrm.find(".is-invalid").length != 0) {
        corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.default.reset_invalid_input(phpLR.regfrm);
      }
    }); //Reset register form on shown

    phpLR.bs_register_box.addEventListener("show.bs.modal", function () {
      phpLR.regfrm.get(0).reset();
      phpLR.regfrm.find("#regAlert").html("");
    }); //remove invalid input on focus register

    phpLR.regfrm.on("focus", "input", function () {
      $(this).removeClass("is-invalid");
      $(this).parent().children("div.invalid-feedback").html("");
    }); //remove invalid input on focus login

    phpLR.loginfrm.on("focus", "input", function () {
      $(this).removeClass("is-invalid");
      $(this).parent().children("div.invalid-feedback").html("");
    }); //reset forgot password frm

    phpLR.bs_forgot_box.addEventListener("hide.bs.modal", function () {
      phpLR.forgotfrm.get(0).reset();

      if (phpLR.forgotfrm.find(".is-invalid").length != 0) {
        corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.default.reset_invalid_input(phpLR.forgotfrm);
      }
    }); //remove forgot password frm

    phpLR.forgotfrm.on("focus", "input", function () {
      $(this).removeClass("is-invalid");
      $(this).parent().children("div.invalid-feedback").html("");
    }); //Register form

    phpLR.regfrm.on("submit", function (e) {
      e.preventDefault();
      e.stopPropagation();
      phpLR.regfrm.find("#register-btn").val("Please wait...");
      var inputData = {
        url: "auth/ajaxRegister",
        frm: phpLR.regfrm,
        table: "auth",
        notification: "admin"
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Add)(inputData, gestionR);

      function gestionR(response) {
        phpLR.regfrm.find("#register-btn").val("Enregistrer");

        if (response.result == "success") {
          phpLR.regbox.find(".upload-profile-image .img").attr("src", corejs_config__WEBPACK_IMPORTED_MODULE_2__.BASE_URL + "/public\\assets\\img\\users/avatar.png");
          phpLR.regfrm.get(0).reset();
          phpLR.regfrm.find("#regAlert").html(response.msg);
        } else {
          if (response.result == "error-field") {
            corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.default.error(phpLR.regfrm, response.msg);
          } else {
            phpLR.regfrm.find("#regAlert").html(response.msg);
          }
        }
      }
    }); //read profile image on change

    phpLR.regbox.find('.upload-profile-image input[type="file"]').on("change", function () {
      (0,corejs_profile_img__WEBPACK_IMPORTED_MODULE_5__.readurl)(this, phpLR.regbox.find(".upload-profile-image .img"), phpLR.regbox.find(".upload-profile-image .camera-icon"));
    }); //Login form

    phpLR.loginfrm.on("submit", function (e) {
      e.preventDefault();
      phpLR.loginfrm.find("#login-btn").val("Please wait...");
      var data = {
        url: "auth/ajaxLogin",
        frm: phpLR.loginfrm,
        frm_name: "login-frm"
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Call_controller)(data, ManageLoginResponse);

      function ManageLoginResponse(response) {
        phpLR.loginfrm.find("#login-btn").val("Login");

        if (response.result == "success") {
          phpLR.loginfrm.get(0).reset(); // phpLR.login_modal.hide();

          window.location.reload();
        } else {
          if (response.result == "error-field") {
            corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.default.error(phpLR.loginfrm, response.msg);
          } else {
            phpLR.loginfrm.find("#loginAlert").html(response.msg);
          }
        }
      }
    }); //Forgot password request

    phpLR.forgotfrm.on("submit", function (e) {
      e.preventDefault();
      phpLR.forgotfrm.find("#forgot-btn").val("Please wait...");
      var data = {
        url: "auth/forgotPassword",
        frm: phpLR.forgotfrm,
        frm_name: "forgot-frm"
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Call_controller)(data, MResponse);

      function MResponse(response) {
        phpLR.forgotfrm.find("#forgot-btn").val("Reset password");

        if (response.result == "success") {
          phpLR.forgotfrm.get(0).reset();
          phpLR.forgotfrm.find("#forgotAlert").html(response.msg);
        } else {
          if (response.result == "error-field") {
            corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.default.error(phpLR.forgotfrm, response.msg);
          } else {
            phpLR.forgotfrm.find("#forgotAlert").html(response.msg);
          }
        }
      }
    }); //logout

    var logout = $("a:contains('Logout')");
    $(logout).on("click", function () {
      if (typeof FB !== "undefined") {
        FB.logout().then(function (response) {// logged out
        });
      }

      $.ajax({
        url: corejs_config__WEBPACK_IMPORTED_MODULE_2__.BASE_URL + "auth/logout",
        method: "post",
        success: function success(response) {
          if (response.result == "success") {
            logout.closest("div").load(location.href + " .connect");

            if (response.msg == "redirect") {
              window.location.href = corejs_config__WEBPACK_IMPORTED_MODULE_2__.BASE_URL;
            }
          }
        }
      });
    });
  });

  this.element = element;
};

/* harmony default export */ __webpack_exports__["default"] = (new Login_And_Register($("#Login-Register-System"))._init());

/***/ }),

/***/ "./src/assets/js/core/profile_img.js":
/*!*******************************************!*\
  !*** ./src/assets/js/core/profile_img.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "readurl": function() { return /* binding */ readurl; }
/* harmony export */ });
var readurl = function readurl(input, img, icon) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      img.attr("src", e.target.result);
      icon.css({
        display: "none"
      });
    };

    reader.readAsDataURL(input.files[0]);
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvZm9ybV9jcnVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9pbnB1dEVyck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2xvZ2luX3JlZ2lzdGVyLmNsYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9wcm9maWxlX2ltZy5qcyJdLCJuYW1lcyI6WyJkaXNwbGF5QWxsRGV0YWlscyIsImRhdGEiLCJnZXN0aW9uIiwiZm9ybV9kYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJpc0lFIiwiJCIsImVhY2giLCJrZXkiLCJ2YWwiLCJhamF4IiwidXJsIiwiQkFTRV9VUkwiLCJtZXRob2QiLCJjYWNoZSIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJwYXJhbXMiLCJlZGl0Rm9ybSIsImZvcm1EYXRhIiwiZGlzcGxheUFsbEl0ZW1zIiwiQWRkIiwiZnJtIiwiT2JqZWN0IiwiZW50cmllcyIsImsiLCJ2IiwiSlNPTiIsInN0cmluZ2lmeSIsIkFycmF5IiwiaSIsImxlbmd0aCIsIm5hbWUiLCJmaWxlcyIsIkNhbGxfY29udHJvbGxlciIsImZybV9uYW1lIiwiZGF0YVR5cGUiLCJlcnJvciIsInJlcXVlc3QiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2VUZXh0IiwiRGVsZXRlIiwiZGlzcGxheUl0ZW0iLCJjaGVja0JlZm9yZURlbGV0ZSIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsInNlcnZlckRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVybF9jaGVjayIsImh0bWwiLCJodHciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzd2FsX21lc3NhZ2UiLCJpbm5lckhUTUwiLCJzd2FsIiwiZmlyZSIsInRpdGxlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJzd2FsX2J1dHRvbiIsImRvbmUiLCJtc2ciLCJmYWlsIiwiZGlzcGxheU11bHRpc2VsbGVjdCIsInRhYmxlIiwiZGlzcGxheUlEIiwiYWxlcnRJRCIsImFkZENhdGVnb3JyaWUiLCJjYXRGaWVsZCIsImNhdCIsInF1ZXJ5U2VsZWN0b3IiLCJhbGVydCIsImNhdGVnb3JpZSIsInNlbGVjdDJBamF4UGFyYW1zIiwidHlwZSIsImRlbGF5Iiwic2VhcmNoVGVybSIsInRlcm0iLCJkYXRhX3R5cGUiLCJwYXJlbnRJRCIsInByb2Nlc3NSZXN1bHRzIiwicmVzdWx0cyIsIm1hcCIsIm9iaiIsImlkIiwidGV4dCIsIkNhbGwiLCJkdCIsIklucHV0X01hbmFnZXIiLCJmb3JtIiwiZmluZCIsInJlbW92ZUNsYXNzIiwiSW5wdXRFcnIiLCJhcnJFcnIiLCJpbnB1dCIsImFkZENsYXNzIiwicGFyZW50IiwiY2hpbGRyZW4iLCJwdXNoIiwiTXlmb3JtIiwib24iLCJMb2dpbl9BbmRfUmVnaXN0ZXIiLCJlbGVtZW50IiwiX3NldHVwVmFyaWFibGVzIiwiX3NldHVwRXZlbnRzIiwibG9nYm94IiwibG9naW5mcm0iLCJyZWdib3giLCJyZWdmcm0iLCJmb3Jnb3Rib3giLCJmb3Jnb3Rmcm0iLCJic19sb2dpbl9ib3giLCJnZXRFbGVtZW50QnlJZCIsImJzX3JlZ2lzdGVyX2JveCIsImJzX2ZvcmdvdF9ib3giLCJwaHBMUiIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXQiLCJyZXNldCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImlucHV0RGF0YSIsIm5vdGlmaWNhdGlvbiIsImdlc3Rpb25SIiwiYXR0ciIsInJlYWR1cmwiLCJNYW5hZ2VMb2dpblJlc3BvbnNlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJNUmVzcG9uc2UiLCJsb2dvdXQiLCJGQiIsImNsb3Nlc3QiLCJsb2FkIiwiaHJlZiIsIl9pbml0IiwiaW1nIiwiaWNvbiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0YXJnZXQiLCJjc3MiLCJkaXNwbGF5IiwicmVhZEFzRGF0YVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ08sU0FBU0EsaUJBQVQsQ0FBMkJDLElBQTNCLEVBQWlDQyxPQUFqQyxFQUEwQztBQUMvQyxNQUFNQyxTQUFTLEdBQUcsSUFBSUMsUUFBSixFQUFsQjtBQUNBRCxXQUFTLENBQUNFLE1BQVYsQ0FBaUIsTUFBakIsRUFBeUJDLDhDQUFJLEVBQTdCO0FBQ0FDLEdBQUMsQ0FBQ0MsSUFBRixDQUFPUCxJQUFQLEVBQWEsVUFBVVEsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQy9CUCxhQUFTLENBQUNFLE1BQVYsQ0FBaUJJLEdBQWpCLEVBQXNCQyxHQUF0QjtBQUNELEdBRkQ7QUFHQUgsR0FBQyxDQUFDSSxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyw4Q0FBUSxHQUFHWixJQUFJLENBQUNXLEdBRGhCO0FBRUxFLFVBQU0sRUFBRSxNQUZIO0FBR0xDLFNBQUssRUFBRSxLQUhGO0FBSUxDLGVBQVcsRUFBRSxLQUpSO0FBS0xDLGVBQVcsRUFBRSxLQUxSO0FBTUxoQixRQUFJLEVBQUVFLFNBTkQ7QUFPTGUsV0FBTyxFQUFFLGlCQUFVQyxRQUFWLEVBQW9CO0FBQzNCakIsYUFBTyxDQUFDaUIsUUFBRCxFQUFXbEIsSUFBSSxDQUFDbUIsTUFBTCxHQUFjbkIsSUFBSSxDQUFDbUIsTUFBbkIsR0FBNEIsRUFBdkMsQ0FBUDtBQUNEO0FBVEksR0FBUDtBQVdELEMsQ0FDRDs7QUFDTyxTQUFTQyxRQUFULENBQWtCcEIsSUFBbEIsRUFBd0JDLE9BQXhCLEVBQWlDO0FBQ3RDSyxHQUFDLENBQUNJLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVDLDhDQUFR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LENBQTJCTixRQUFRLENBQUNPLElBQVQsR0FBZ0IsV0FBM0M7O0FBQ0EsZ0JBQUloSSxRQUFRLENBQUNxRCxHQUFULElBQWdCLFVBQXBCLEVBQWdDO0FBQzlCbUUsb0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQk8sSUFBaEIsR0FBdUJ0SSxtREFBdkI7QUFDRDtBQUNGO0FBQ0Y7QUFWSSxPQUFQO0FBWUQsS0FsQkQ7QUFtQkQsR0FqTG9COztBQUNuQixPQUFLb0csT0FBTCxHQUFlQSxPQUFmO0FBQ0QsQzs7QUFpTEgsK0RBQWUsSUFBSUQsa0JBQUosQ0FBdUJ6RyxDQUFDLENBQUMsd0JBQUQsQ0FBeEIsRUFBb0Q2SSxLQUFwRCxFQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztBQ3pMTyxJQUFNWCxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDaEMsS0FBRCxFQUFRNEMsR0FBUixFQUFhQyxJQUFiLEVBQXNCO0FBQzNDLE1BQUk3QyxLQUFLLENBQUNyRSxLQUFOLElBQWVxRSxLQUFLLENBQUNyRSxLQUFOLENBQVksQ0FBWixDQUFuQixFQUFtQztBQUNqQyxRQUFJbUgsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBYjs7QUFDQUQsVUFBTSxDQUFDRSxNQUFQLEdBQWdCLFVBQVV2QixDQUFWLEVBQWE7QUFDM0JtQixTQUFHLENBQUNiLElBQUosQ0FBUyxLQUFULEVBQWdCTixDQUFDLENBQUN3QixNQUFGLENBQVN4RyxNQUF6QjtBQUNBb0csVUFBSSxDQUFDSyxHQUFMLENBQVM7QUFDUEMsZUFBTyxFQUFFO0FBREYsT0FBVDtBQUdELEtBTEQ7O0FBTUFMLFVBQU0sQ0FBQ00sYUFBUCxDQUFxQnBELEtBQUssQ0FBQ3JFLEtBQU4sQ0FBWSxDQUFaLENBQXJCO0FBQ0Q7QUFDRixDQVhNLEMiLCJmaWxlIjoibGF6eWxvYWQvanMvYWRtaW4vbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCQVNFX1VSTCwgaXNJRSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuLy9kaXNwbGF5IGFsbCBkZXRhaWxzXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsRGV0YWlscyhkYXRhLCBnZXN0aW9uKSB7XHJcbiAgY29uc3QgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZm9ybV9kYXRhLmFwcGVuZChcImlzSUVcIiwgaXNJRSgpKTtcclxuICAkLmVhY2goZGF0YSwgZnVuY3Rpb24gKGtleSwgdmFsKSB7XHJcbiAgICBmb3JtX2RhdGEuYXBwZW5kKGtleSwgdmFsKTtcclxuICB9KTtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGNhY2hlOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGRhdGE6IGZvcm1fZGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbi8vZWRpdCBkYXRhXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0Rm9ybShkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLmZvcm1EYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vZGlzcGxheSBhbGwgSXRlbXNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxJdGVtcyhkYXRhLCBnZXN0aW9uKSB7XHJcbiAgY29uc3QgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZm9ybV9kYXRhLmFwcGVuZChcImlzSUVcIiwgaXNJRSgpKTtcclxuICAkLmVhY2goZGF0YSwgZnVuY3Rpb24gKGtleSwgdmFsKSB7XHJcbiAgICBmb3JtX2RhdGEuYXBwZW5kKGtleSwgdmFsKTtcclxuICB9KTtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGRhdGE6IGZvcm1fZGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG4vL2FkZCBJdGVtXHJcbmV4cG9ydCBmdW5jdGlvbiBBZGQoZGF0YSwgZ2VzdGlvbikge1xyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkYXRhLmZybVswXSk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwiaXNJRVwiLCBpc0lFKCkpO1xyXG4gICQuZWFjaChkYXRhLCBmdW5jdGlvbiAoa2V5LCB2YWwpIHtcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHZhbCkpIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoaywgSlNPTi5zdHJpbmdpZnkodikpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHZhbFtpXS5uYW1lLCBkYXRhLmZpbGVzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuLy91cGRhdGVcclxuZXhwb3J0IGZ1bmN0aW9uIENhbGxfY29udHJvbGxlcihkYXRhLCBnZXN0aW9uKSB7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEuZnJtWzBdKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJmcm1fbmFtZVwiLCBkYXRhLmZybV9uYW1lKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJpc0lFXCIsIGlzSUUoKSk7XHJcbiAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uIChrZXksIHZhbCkge1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXModmFsKSkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChrLCBKU09OLnN0cmluZ2lmeSh2KSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodmFsW2ldLm5hbWUsIGRhdGEuZmlsZXNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCB2YWwpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAocmVxdWVzdCwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LnJlc3BvbnNlVGV4dCwgZXJyb3IpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuLy9kZWxldGVcclxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZShkYXRhLCBkaXNwbGF5SXRlbSkge1xyXG4gIGNoZWNrQmVmb3JlRGVsZXRlKGRhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGRhdGE6IGRhdGEuc2VydmVyRGF0YSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGRpc3BsYXlJdGVtKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuLy9mdW5jdGlvbiBjaGVjayBiZWZvcmUgZGVsZXRlXHJcbmZ1bmN0aW9uIGNoZWNrQmVmb3JlRGVsZXRlKGRhdGEpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgaWYgKCFkYXRhLnVybF9jaGVjaykge1xyXG4gICAgICBjb25zdCBodG1sID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGh0dyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaWYgKGRhdGEuc3dhbF9tZXNzYWdlKSB7XHJcbiAgICAgICAgICByZXR1cm4gKGh0dy5pbm5lckhUTUwgPSBkYXRhLnN3YWxfbWVzc2FnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAoaHR3LmlubmVySFRNTCA9IFwiPHA+WW91IHdvbid0IGJlIGFibGUgdG8gcmV2ZXJ0IHRoaXMhPC9wPlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGRhdGEuc3dhbFxyXG4gICAgICAgIC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcclxuICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICBodG1sOiBodG1sKCksXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGRhdGEuc3dhbF9idXR0b24gPyBkYXRhLnN3YWxfYnV0dG9uIDogXCJEZWxldGUhXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmxfY2hlY2ssXHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBkYXRhOiBkYXRhLnNlcnZlckRhdGEsXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBkYXRhLnN3YWxcclxuICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGh0bWw6IFwiPHA+WW91IHdvbid0IGJlIGFibGUgdG8gcmV2ZXJ0IHRoaXMhPC9wPlwiICsgcmVzcG9uc2UubXNnLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXHJcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkRlbGV0ZSFcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmFpbCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNdWx0aXNlbGxlY3QoZGF0YSkge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgXCJmb3Jtcy9maWxsTXVsdGlzZWxlY3RcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIGRhdGEuZGlzcGxheUlELmFwcGVuZChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGEuYWxlcnRJRC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDYXRlZ29ycmllKGNhdEZpZWxkLCBhbGVydElEKSB7XHJcbiAgbGV0IGNhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2F0RmllbGQpO1xyXG4gIGlmIChjYXQudmFsdWUubGVuZ3RoID09IDApIHtcclxuICAgIGFsZXJ0KFwiTGUgY2hhbXBzIGNhdMOpZ29yaWUgZXN0IHZpZGVcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogQkFTRV9VUkwgKyBcImZvcm1zL2FkZGNhdGVnb3JpZVwiLFxyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgY2F0ZWdvcmllOiBjYXQudmFsdWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZSAhPSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgJChhbGVydElEKS5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdDJBamF4UGFyYW1zKGRhdGEpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICBkZWxheTogMjUwLFxyXG4gICAgZGF0YTogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNlYXJjaFRlcm06IHBhcmFtcy50ZXJtLCAvLyBzZWFyY2ggdGVybVxyXG4gICAgICAgIHRhYmxlOiBkYXRhLnRhYmxlICE9IFwiXCIgPyBkYXRhLnRhYmxlIDogXCJcIixcclxuICAgICAgICBkYXRhX3R5cGU6IGRhdGEuZGF0YV90eXBlICE9IFwiXCIgPyBkYXRhLmRhdGFfdHlwZSA6IFwiXCIsXHJcbiAgICAgICAgcGFyZW50SUQ6IGRhdGEucGFyZW50SUQgIT0gXCJcIiA/IGRhdGEucGFyZW50SUQgOiBcIlwiLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICByZXN1bHRzOiAkLm1hcChyZXNwb25zZS5tc2csIGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5pZCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IG9iai5pZCwgdGV4dDogb2JqLnRleHQgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4geyBpZDogb2JqLmlkLCB0ZXh0OiBvYmoudGV4dCB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2FjaGU6IHRydWUsXHJcbiAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQ2FsbChkYXRhKSB7XHJcbiAgbGV0IGR0ID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YS5wYXJhbXMpKSB7XHJcbiAgICBkdC5hcHBlbmQoa2V5LCB2YWx1ZSk7XHJcbiAgfVxyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgZGF0YTogZHQsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHt9LFxyXG4gIH0pO1xyXG59XHJcbiIsImNsYXNzIElucHV0X01hbmFnZXIge1xyXG4gIHJlc2V0X2ludmFsaWRfaW5wdXQgPSAoZm9ybSkgPT4ge1xyXG4gICAgZm9ybS5maW5kKFwiLmlzLWludmFsaWRcIikucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgZm9ybS5maW5kKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxuICB9O1xyXG4gIC8vcmVtb3ZlIGludmFsaWQgaW5wdXQgb24gZm9jdXNcclxuICByZW1vdmVJbnZhbGlkSW5wdXQoTXlmb3JtKSB7XHJcbiAgICBNeWZvcm0ub24oXCJmb2N1c1wiLCBcImlucHV0LHRleHRhcmVhLCAuY2ssIC5ub3RlLWVkaXRvclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBlcnJvciA9IChmb3JtLCBJbnB1dEVycikgPT4ge1xyXG4gICAgdmFyIGFyckVyciA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoSW5wdXRFcnIpKSB7XHJcbiAgICAgIHZhciBpbnB1dCA9IGZvcm0uZmluZChcIiNcIiArIGtleSkuYWRkQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgICBpbnB1dC5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwodmFsdWUpO1xyXG4gICAgICBhcnJFcnIucHVzaChrZXkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyckVycjtcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBJbnB1dF9NYW5hZ2VyKCk7XHJcbiIsImltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcImNvcmVqcy9jb25maWdcIjtcclxuaW1wb3J0IHsgQWRkLCBDYWxsX2NvbnRyb2xsZXIgfSBmcm9tIFwiY29yZWpzL2Zvcm1fY3J1ZFwiO1xyXG5pbXBvcnQgaW5wdXQgZnJvbSBcImNvcmVqcy9pbnB1dEVyck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgcmVhZHVybCB9IGZyb20gXCJjb3JlanMvcHJvZmlsZV9pbWdcIjtcclxuXHJcbmNsYXNzIExvZ2luX0FuZF9SZWdpc3RlciB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcbiAgX2luaXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9zZXR1cFZhcmlhYmxlcygpO1xyXG4gICAgdGhpcy5fc2V0dXBFdmVudHMoKTtcclxuICB9O1xyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvL1NldHVwIHZhcmlhYmxlc1xyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBfc2V0dXBWYXJpYWJsZXMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmxvZ2JveCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2xvZ2luLWJveFwiKTtcclxuICAgIHRoaXMubG9naW5mcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNsb2dpbi1mcm1cIik7XHJcbiAgICB0aGlzLnJlZ2JveCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3JlZ2lzdGVyLWJveFwiKTtcclxuICAgIHRoaXMucmVnZnJtID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjcmVnaXN0ZXItZnJtXCIpO1xyXG4gICAgdGhpcy5mb3Jnb3Rib3ggPSB0aGlzLmVsZW1lbnQuZmluZChcIiNmb3Jnb3QtYm94XCIpO1xyXG4gICAgdGhpcy5mb3Jnb3Rmcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNmb3Jnb3QtZnJtXCIpO1xyXG4gICAgdGhpcy5ic19sb2dpbl9ib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLWJveFwiKTtcclxuICAgIHRoaXMuYnNfcmVnaXN0ZXJfYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWdpc3Rlci1ib3hcIik7XHJcbiAgICB0aGlzLmJzX2ZvcmdvdF9ib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcmdvdC1ib3hcIik7XHJcbiAgfTtcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy9TZXR1cCBldmVudHNcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgX3NldHVwRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgdmFyIHBocExSID0gdGhpcztcclxuXHJcbiAgICAvL3JlZnJlc2ggbG9naW4gJiByZWdpc3RlciBmcm0gb24gaGlkZSBhbmQgc2hvd1xyXG4gICAgcGhwTFIuYnNfbG9naW5fYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJoaWRlLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcGhwTFIubG9naW5mcm0uZ2V0KDApLnJlc2V0KCk7XHJcbiAgICAgIGlmIChwaHBMUi5sb2dpbmZybS5maW5kKFwiLmlzLWludmFsaWRcIikubGVuZ3RoICE9IDApIHtcclxuICAgICAgICBpbnB1dC5yZXNldF9pbnZhbGlkX2lucHV0KHBocExSLmxvZ2luZnJtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL1Jlc2V0IHJlZ2lzdGVyIGZvcm0gaW52YWxpZCBpbnB1dCBvbiBoaWRlIG1vZGFsXHJcbiAgICBwaHBMUi5ic19yZWdpc3Rlcl9ib3guYWRkRXZlbnRMaXN0ZW5lcihcImhpZGUuYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBwaHBMUi5yZWdmcm0uZ2V0KDApLnJlc2V0KCk7XHJcbiAgICAgIGlmIChwaHBMUi5yZWdmcm0uZmluZChcIi5pcy1pbnZhbGlkXCIpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgaW5wdXQucmVzZXRfaW52YWxpZF9pbnB1dChwaHBMUi5yZWdmcm0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vUmVzZXQgcmVnaXN0ZXIgZm9ybSBvbiBzaG93blxyXG4gICAgcGhwTFIuYnNfcmVnaXN0ZXJfYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJzaG93LmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcGhwTFIucmVnZnJtLmdldCgwKS5yZXNldCgpO1xyXG4gICAgICBwaHBMUi5yZWdmcm0uZmluZChcIiNyZWdBbGVydFwiKS5odG1sKFwiXCIpO1xyXG4gICAgfSk7XHJcbiAgICAvL3JlbW92ZSBpbnZhbGlkIGlucHV0IG9uIGZvY3VzIHJlZ2lzdGVyXHJcbiAgICBwaHBMUi5yZWdmcm0ub24oXCJmb2N1c1wiLCBcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG4gICAgfSk7XHJcbiAgICAvL3JlbW92ZSBpbnZhbGlkIGlucHV0IG9uIGZvY3VzIGxvZ2luXHJcbiAgICBwaHBMUi5sb2dpbmZybS5vbihcImZvY3VzXCIsIFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwoXCJcIik7XHJcbiAgICB9KTtcclxuICAgIC8vcmVzZXQgZm9yZ290IHBhc3N3b3JkIGZybVxyXG4gICAgcGhwTFIuYnNfZm9yZ290X2JveC5hZGRFdmVudExpc3RlbmVyKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHBocExSLmZvcmdvdGZybS5nZXQoMCkucmVzZXQoKTtcclxuICAgICAgaWYgKHBocExSLmZvcmdvdGZybS5maW5kKFwiLmlzLWludmFsaWRcIikubGVuZ3RoICE9IDApIHtcclxuICAgICAgICBpbnB1dC5yZXNldF9pbnZhbGlkX2lucHV0KHBocExSLmZvcmdvdGZybSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9yZW1vdmUgZm9yZ290IHBhc3N3b3JkIGZybVxyXG4gICAgcGhwTFIuZm9yZ290ZnJtLm9uKFwiZm9jdXNcIiwgXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxuICAgIH0pO1xyXG4gICAgLy9SZWdpc3RlciBmb3JtXHJcbiAgICBwaHBMUi5yZWdmcm0ub24oXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBwaHBMUi5yZWdmcm0uZmluZChcIiNyZWdpc3Rlci1idG5cIikudmFsKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICAgIHZhciBpbnB1dERhdGEgPSB7XHJcbiAgICAgICAgdXJsOiBcImF1dGgvYWpheFJlZ2lzdGVyXCIsXHJcbiAgICAgICAgZnJtOiBwaHBMUi5yZWdmcm0sXHJcbiAgICAgICAgdGFibGU6IFwiYXV0aFwiLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbjogXCJhZG1pblwiLFxyXG4gICAgICB9O1xyXG4gICAgICBBZGQoaW5wdXREYXRhLCBnZXN0aW9uUik7XHJcbiAgICAgIGZ1bmN0aW9uIGdlc3Rpb25SKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcGhwTFIucmVnZnJtLmZpbmQoXCIjcmVnaXN0ZXItYnRuXCIpLnZhbChcIkVucmVnaXN0cmVyXCIpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIHBocExSLnJlZ2JveFxyXG4gICAgICAgICAgICAuZmluZChcIi51cGxvYWQtcHJvZmlsZS1pbWFnZSAuaW1nXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3JjXCIsIEJBU0VfVVJMICsgXCIvcHVibGljXFxcXGFzc2V0c1xcXFxpbWdcXFxcdXNlcnMvYXZhdGFyLnBuZ1wiKTtcclxuICAgICAgICAgIHBocExSLnJlZ2ZybS5nZXQoMCkucmVzZXQoKTtcclxuICAgICAgICAgIHBocExSLnJlZ2ZybS5maW5kKFwiI3JlZ0FsZXJ0XCIpLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcImVycm9yLWZpZWxkXCIpIHtcclxuICAgICAgICAgICAgaW5wdXQuZXJyb3IocGhwTFIucmVnZnJtLCByZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGhwTFIucmVnZnJtLmZpbmQoXCIjcmVnQWxlcnRcIikuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL3JlYWQgcHJvZmlsZSBpbWFnZSBvbiBjaGFuZ2VcclxuICAgIHBocExSLnJlZ2JveFxyXG4gICAgICAuZmluZCgnLnVwbG9hZC1wcm9maWxlLWltYWdlIGlucHV0W3R5cGU9XCJmaWxlXCJdJylcclxuICAgICAgLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZWFkdXJsKFxyXG4gICAgICAgICAgdGhpcyxcclxuICAgICAgICAgIHBocExSLnJlZ2JveC5maW5kKFwiLnVwbG9hZC1wcm9maWxlLWltYWdlIC5pbWdcIiksXHJcbiAgICAgICAgICBwaHBMUi5yZWdib3guZmluZChcIi51cGxvYWQtcHJvZmlsZS1pbWFnZSAuY2FtZXJhLWljb25cIilcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIC8vTG9naW4gZm9ybVxyXG4gICAgcGhwTFIubG9naW5mcm0ub24oXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2xvZ2luLWJ0blwiKS52YWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgdXJsOiBcImF1dGgvYWpheExvZ2luXCIsXHJcbiAgICAgICAgZnJtOiBwaHBMUi5sb2dpbmZybSxcclxuICAgICAgICBmcm1fbmFtZTogXCJsb2dpbi1mcm1cIixcclxuICAgICAgfTtcclxuICAgICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIE1hbmFnZUxvZ2luUmVzcG9uc2UpO1xyXG4gICAgICBmdW5jdGlvbiBNYW5hZ2VMb2dpblJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbi1idG5cIikudmFsKFwiTG9naW5cIik7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgcGhwTFIubG9naW5mcm0uZ2V0KDApLnJlc2V0KCk7XHJcbiAgICAgICAgICAvLyBwaHBMUi5sb2dpbl9tb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJlcnJvci1maWVsZFwiKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmVycm9yKHBocExSLmxvZ2luZnJtLCByZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbkFsZXJ0XCIpLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9Gb3Jnb3QgcGFzc3dvcmQgcmVxdWVzdFxyXG4gICAgcGhwTFIuZm9yZ290ZnJtLm9uKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcGhwTFIuZm9yZ290ZnJtLmZpbmQoXCIjZm9yZ290LWJ0blwiKS52YWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgdXJsOiBcImF1dGgvZm9yZ290UGFzc3dvcmRcIixcclxuICAgICAgICBmcm06IHBocExSLmZvcmdvdGZybSxcclxuICAgICAgICBmcm1fbmFtZTogXCJmb3Jnb3QtZnJtXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBNUmVzcG9uc2UpO1xyXG4gICAgICBmdW5jdGlvbiBNUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgICAgICBwaHBMUi5mb3Jnb3Rmcm0uZmluZChcIiNmb3Jnb3QtYnRuXCIpLnZhbChcIlJlc2V0IHBhc3N3b3JkXCIpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIHBocExSLmZvcmdvdGZybS5nZXQoMCkucmVzZXQoKTtcclxuICAgICAgICAgIHBocExSLmZvcmdvdGZybS5maW5kKFwiI2ZvcmdvdEFsZXJ0XCIpLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcImVycm9yLWZpZWxkXCIpIHtcclxuICAgICAgICAgICAgaW5wdXQuZXJyb3IocGhwTFIuZm9yZ290ZnJtLCByZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGhwTFIuZm9yZ290ZnJtLmZpbmQoXCIjZm9yZ290QWxlcnRcIikuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL2xvZ291dFxyXG4gICAgdmFyIGxvZ291dCA9ICQoXCJhOmNvbnRhaW5zKCdMb2dvdXQnKVwiKTtcclxuICAgICQobG9nb3V0KS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHR5cGVvZiBGQiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIEZCLmxvZ291dCgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAvLyBsb2dnZWQgb3V0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IEJBU0VfVVJMICsgXCJhdXRoL2xvZ291dFwiLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIGxvZ291dC5jbG9zZXN0KFwiZGl2XCIpLmxvYWQobG9jYXRpb24uaHJlZiArIFwiIC5jb25uZWN0XCIpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UubXNnID09IFwicmVkaXJlY3RcIikge1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gQkFTRV9VUkw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExvZ2luX0FuZF9SZWdpc3RlcigkKFwiI0xvZ2luLVJlZ2lzdGVyLVN5c3RlbVwiKSkuX2luaXQoKTtcclxuIiwiZXhwb3J0IGNvbnN0IHJlYWR1cmwgPSAoaW5wdXQsIGltZywgaWNvbikgPT4ge1xyXG4gIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xyXG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaW1nLmF0dHIoXCJzcmNcIiwgZS50YXJnZXQucmVzdWx0KTtcclxuICAgICAgaWNvbi5jc3Moe1xyXG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbnB1dC5maWxlc1swXSk7XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9