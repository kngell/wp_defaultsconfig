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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
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















 //display all details

function displayAllDetails(data, gestion) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_14__.BASE_URL + data.url,
    method: "post",
    data: {
      table: data.table,
      id: data.id,
      user: data.user ? data.user : "",
      session_id: data.session_id ? data.session_id : "",
      data_type: data.data_type ? data.data_type : "",
      return_mode: data.return_mode ? data.return_mode : "",
      token: data.token ? data.token : "",
      frm_name: data.frm_name ? data.frm_name : ""
    },
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
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_14__.BASE_URL + data.url,
    method: "post",
    data: {
      table: data.table,
      id: data.id != "" ? data.id : "",
      start: 0,
      max: data.max != "" ? data.max : "",
      user: data.user != "" ? data.user : "",
      query: data.query != "" ? data.query : "",
      page: data.page != "" ? data.page : "",
      pagination: data.pagination != "" ? data.pagination : "",
      data_type: data.data_type ? data.data_type : "",
      return_mode: data.return_mode ? data.return_mode : ""
    },
    success: function success(response) {
      gestion(response, data.params ? data.params : "");
    }
  });
} //add Item

function Add(data, gestion) {
  var formData = new FormData(data.frm[0]);
  formData.append("table", data.table);
  formData.append("notification", data.notification);
  formData.append("frm_name", data.frm_name);
  if (data.hasOwnProperty("start_date")) formData.append("start_date", data.start_date);
  if (data.hasOwnProperty("end_date")) formData.append("end_date", data.end_date);
  if (data.hasOwnProperty("imageUrlsAry")) formData.append("imageUrlsAry", data.imageUrlsAry);
  if (data.hasOwnProperty("select2")) formData.append("select2", data.select2);
  if (data.hasOwnProperty("categorie")) formData.append("custom_categorie", data.categorie);

  if (data.hasOwnProperty("files")) {
    for (var i = 0; i < data.files.length; i++) {
      formData.append(data.files[i].name, data.files[i]);
    }
  }

  if (data.hasOwnProperty("select2")) {
    $(data.select2).each(function (key, val) {
      console.log(this);
      formData.append(key, val);
    });
  }

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
  if (data.table) formData.append("table", data.table);
  if (data.notification) formData.append("notification", data.notification);
  if (data.url_data) formData.append("url_data", data.url_data);
  if (data.action) formData.append("action", data.action);
  if (data.imageUrlsAry) formData.append("imageUrlsAry", data.imageUrlsAry);
  if (data.freedata) formData.append("freedata", data.freedata);
  if (data.start_date) formData.append("start_date", data.start_date);
  if (data.end_date) formData.append("end_date", data.end_date);
  if (data.id) formData.append("id", data.id);
  if (data.user_id) formData.append("id", data.user_id);
  if (data.method) formData.append("method", data.method);

  if (data.hasOwnProperty("select2")) {
    for (var _i = 0, _Object$entries = Object.entries(data.select2); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      formData.append(key, JSON.stringify(value));
    }
  }

  if (data.hasOwnProperty("categorie")) formData.append("custom_categorie", data.categorie);
  if (data.hasOwnProperty("tbl_options")) formData.append("tbl_options", data.tbl_options);

  if (data.hasOwnProperty("files")) {
    for (var i = 0; i < data.files.length; i++) {
      formData.append(data.files[i].name, data.files[i]);
    }
  }

  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_14__.BASE_URL + data.url,
    method: "POST",
    processData: false,
    contentType: false,
    dataType: "json",
    data: formData,
    success: function success(response) {
      gestion(response, data.params ? data.params : "");
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

  for (var _i2 = 0, _Object$entries2 = Object.entries(data.params); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        key = _Object$entries2$_i[0],
        value = _Object$entries2$_i[1];

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
  });

  _defineProperty(this, "_setupEvents", function () {
    var phpLR = _this; //refresh login & register frm on hide and show

    phpLR.logbox.on("hide.bs.modal", function () {
      if (phpLR.loginfrm.find(".is-invalid").length != 0) {
        corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.default.reset_invalid_input(phpLR.loginfrm);
      }
    }); //Reset register form invalid input on hide modal

    phpLR.regbox.on("hide.bs.modal", function () {
      if (phpLR.regfrm.find(".is-invalid").length != 0) {
        corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.default.reset_invalid_input(phpLR.regfrm);
      }
    }); //Reset register form on shown

    phpLR.regbox.on("show.bs.modal", function () {
      phpLR.regfrm.trigger("reset");
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

    phpLR.forgotbox.on("hide.bs.modal", function () {
      phpLR.forgotfrm.trigger("reset");
    }); //Fill in login from cookies on shonw

    phpLR.logbox.on("shown.bs.modal", function () {
      $.ajax({
        url: corejs_config__WEBPACK_IMPORTED_MODULE_2__.BASE_URL + "auth/remember_check",
        method: "post",
        success: function success(response) {
          if (response.result === "success") {
            phpLR.loginfrm.find("#email").val(response.msg.email);
            phpLR.loginfrm.find("#customCheck").attr("checked", response.msg.remember);
          } else {
            phpLR.loginfrm.find("#email").val("");
            phpLR.loginfrm.find("#password").val("");
          }
        }
      });
    }); //Register form

    phpLR.regfrm.on("submit", function (e) {
      e.preventDefault();
      e.stopPropagation();
      phpLR.regfrm.find("#register-btn").val("Please wait...");
      var inputData = {
        url: "auth/ajaxRegister",
        frm: phpLR.regfrm,
        table: "auth",
        notification: "admin",
        frm_name: "register-frm"
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Add)(inputData, gestionR);

      function gestionR(response) {
        phpLR.regfrm.find("#register-btn").val("Enregistrer");

        if (response.result == "success") {
          phpLR.regbox.find(".upload-profile-image .img").attr("src", response.img ? response.img : "");
          phpLR.regfrm.trigger("reset");
          phpLR.regbox.find(".input-group").remove();
          phpLR.regfrm.find("#regAlert").html(response.msg);
        } else {
          if (response.result == "error-field") {
            corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.default.error(phpLR.loginfrm, response.msg);
          } else {
            phpLR.loginfrm.find("#loginAlert").html(response.msg);
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
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Call_controller)(data, ManageLoginResponse); //manage login Response

      function ManageLoginResponse(response) {
        phpLR.loginfrm.find("#login-btn").val("Login");

        if (response.result == "success") {
          phpLR.loginfrm.trigger("reset");
          phpLR.logbox.modal("hide");
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
        url: "auth/forgot",
        frm: phpLR.forgotfrm,
        frm_name: "forgot-frm"
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Call_controller)(data, MResponse);

      function MResponse(response) {
        phpLR.forgotfrm.find("#forgot-btn").val("Reset password");

        if (response.result == "success") {
          phpLR.forgotfrm.trigger("reset");
          phpLR.forgotfrm.find("#regAlert").html(response.msg);
        } else {
          if (response.result == "error-field") {
            corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.default.error(phpLR.loginfrm, response.msg);
          } else {
            phpLR.loginfrm.find("#loginAlert").html(response.msg);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvZm9ybV9jcnVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9pbnB1dEVyck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2xvZ2luX3JlZ2lzdGVyLmNsYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9wcm9maWxlX2ltZy5qcyJdLCJuYW1lcyI6WyJkaXNwbGF5QWxsRGV0YWlscyIsImRhdGEiLCJnZXN0aW9uIiwiJCIsImFqYXgiLCJ1cmwiLCJCQVNFX1VSTCIsIm1ldGhvZCIsInRhYmxlIiwiaWQiLCJ1c2VyIiwic2Vzc2lvbl9pZCIsImRhdGFfdHlwZSIsInJldHVybl9tb2RlIiwidG9rZW4iLCJmcm1fbmFtZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInBhcmFtcyIsImVkaXRGb3JtIiwiZm9ybURhdGEiLCJkaXNwbGF5QWxsSXRlbXMiLCJzdGFydCIsIm1heCIsInF1ZXJ5IiwicGFnZSIsInBhZ2luYXRpb24iLCJBZGQiLCJGb3JtRGF0YSIsImZybSIsImFwcGVuZCIsIm5vdGlmaWNhdGlvbiIsImhhc093blByb3BlcnR5Iiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwiaW1hZ2VVcmxzQXJ5Iiwic2VsZWN0MiIsImNhdGVnb3JpZSIsImkiLCJmaWxlcyIsImxlbmd0aCIsIm5hbWUiLCJlYWNoIiwia2V5IiwidmFsIiwiY29uc29sZSIsImxvZyIsImNhY2hlIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsIkNhbGxfY29udHJvbGxlciIsImlzSUUiLCJ1cmxfZGF0YSIsImFjdGlvbiIsImZyZWVkYXRhIiwidXNlcl9pZCIsIk9iamVjdCIsImVudHJpZXMiLCJ2YWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0Ymxfb3B0aW9ucyIsImRhdGFUeXBlIiwiRGVsZXRlIiwiZGlzcGxheUl0ZW0iLCJjaGVja0JlZm9yZURlbGV0ZSIsInRoZW4iLCJyZXN1bHQiLCJzZXJ2ZXJEYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cmxfY2hlY2siLCJodG1sIiwiaHR3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3dhbF9tZXNzYWdlIiwiaW5uZXJIVE1MIiwic3dhbCIsImZpcmUiLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0Iiwic3dhbF9idXR0b24iLCJkb25lIiwibXNnIiwiZmFpbCIsImVycm9yIiwiZGlzcGxheU11bHRpc2VsbGVjdCIsImRpc3BsYXlJRCIsImFsZXJ0SUQiLCJhZGRDYXRlZ29ycmllIiwiY2F0RmllbGQiLCJjYXQiLCJxdWVyeVNlbGVjdG9yIiwiYWxlcnQiLCJzZWxlY3QyQWpheFBhcmFtcyIsInR5cGUiLCJkZWxheSIsInNlYXJjaFRlcm0iLCJ0ZXJtIiwicGFyZW50SUQiLCJwcm9jZXNzUmVzdWx0cyIsInJlc3VsdHMiLCJtYXAiLCJvYmoiLCJ0ZXh0IiwiQ2FsbCIsImR0IiwiSW5wdXRfTWFuYWdlciIsImZvcm0iLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJJbnB1dEVyciIsImFyckVyciIsImlucHV0IiwiYWRkQ2xhc3MiLCJwYXJlbnQiLCJjaGlsZHJlbiIsInB1c2giLCJNeWZvcm0iLCJvbiIsIkxvZ2luX0FuZF9SZWdpc3RlciIsImVsZW1lbnQiLCJfc2V0dXBWYXJpYWJsZXMiLCJfc2V0dXBFdmVudHMiLCJsb2dib3giLCJsb2dpbmZybSIsInJlZ2JveCIsInJlZ2ZybSIsImZvcmdvdGJveCIsImZvcmdvdGZybSIsInBocExSIiwidHJpZ2dlciIsImVtYWlsIiwiYXR0ciIsInJlbWVtYmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaW5wdXREYXRhIiwiZ2VzdGlvblIiLCJpbWciLCJyZW1vdmUiLCJyZWFkdXJsIiwiTWFuYWdlTG9naW5SZXNwb25zZSIsIm1vZGFsIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJNUmVzcG9uc2UiLCJsb2dvdXQiLCJGQiIsImNsb3Nlc3QiLCJsb2FkIiwiaHJlZiIsIl9pbml0IiwiaWNvbiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0YXJnZXQiLCJjc3MiLCJkaXNwbGF5IiwicmVhZEFzRGF0YVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ08sU0FBU0EsaUJBQVQsQ0FBMkJDLElBQTNCLEVBQWlDQyxPQUFqQyxFQUEwQztBQUMvQ0MsR0FBQyxDQUFDQyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyw4Q0FBUSxHQUFHTCxJQUFJLENBQUNJLEdBRGhCO0FBRUxFLFVBQU0sRUFBRSxNQUZIO0FBR0xOLFFBQUksRUFBRTtBQUNKTyxXQUFLLEVBQUVQLElBQUksQ0FBQ08sS0FEUjtBQUVKQyxRQUFFLEVBQUVSLElBQUksQ0FBQ1EsRUFGTDtBQUdKQyxVQUFJLEVBQUVULElBQUksQ0FBQ1MsSUFBTCxHQUFZVCxJQUFJLENBQUNTLElBQWpCLEdBQXdCLEVBSDFCO0FBSUpDLGdCQUFVLEVBQUVWLElBQUksQ0FBQ1UsVUFBTCxHQUFrQlYsSUFBSSxDQUFDVSxVQUF2QixHQUFvQyxFQUo1QztBQUtKQyxlQUFTLEVBQUVYLElBQUksQ0FBQ1csU0FBTCxHQUFpQlgsSUFBSSxDQUFDVyxTQUF0QixHQUFrQyxFQUx6QztBQU1KQyxpQkFBVyxFQUFFWixJQUFJLENBQUNZLFdBQUwsR0FBbUJaLElBQUksQ0FBQ1ksV0FBeEIsR0FBc0MsRUFOL0M7QUFPSkMsV0FBSyxFQUFFYixJQUFJLENBQUNhLEtBQUwsR0FBYWIsSUFBSSxDQUFDYSxLQUFsQixHQUEwQixFQVA3QjtBQVFKQyxjQUFRLEVBQUVkLElBQUksQ0FBQ2MsUUFBTCxHQUFnQmQsSUFBSSxDQUFDYyxRQUFyQixHQUFnQztBQVJ0QyxLQUhEO0FBYUxDLFdBQU8sRUFBRSxpQkFBVUMsUUFBVixFQUFvQjtBQUMzQmYsYUFBTyxDQUFDZSxRQUFELEVBQVdoQixJQUFJLENBQUNpQixNQUFMLEdBQWNqQixJQUFJLENBQUNpQixNQUFuQixHQUE0QixFQUF2QyxDQUFQO0FBQ0Q7QUFmSSxHQUFQO0FBaUJELEMsQ0FDRDs7QUFDTyxTQUFTQyxRQUFULENBQWtCbEIsSUFBbEIsRUFBd0JDLE9BQXhCLEVBQWlDO0FBQ3RDQyxHQUFDLENBQUNDLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVDLDhDQUFRLEdBQUdMLElBQUksQ0FBQ0ksR0FEaEI7QUFFTEUsVUFBTSxFQUFFLE1BRkg7QUFHTE4sUUFBSSxFQUFFQSxJQUFJLENBQUNtQixRQUhOO0FBSUxKLFdBQU8sRUFBRSxpQkFBVUMsUUFBVixFQUFvQjtBQUMzQmYsYUFBTyxDQUFDZSxRQUFELEVBQVdoQixJQUFJLENBQUNpQixNQUFMLEdBQWNqQixJQUFJLENBQUNpQixNQUFuQixHQUE0QixFQUF2QyxDQUFQO0FBQ0Q7QUFOSSxHQUFQO0FBUUQsQyxDQUVEOztBQUNPLFNBQVNHLGVBQVQsQ0FBeUJwQixJQUF6QixFQUErQkMsT0FBL0IsRUFBd0M7QUFDN0NDLEdBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsOENBQVEsR0FBR0wsSUFBSSxDQUFDSSxHQURoQjtBQUVMRSxVQUFNLEVBQUUsTUFGSDtBQUdMTixRQUFJLEVBQUU7QUFDSk8sV0FBSyxFQUFFUCxJQUFJLENBQUNPLEtBRFI7QUFFSkMsUUFBRSxFQUFFUixJQUFJLENBQUNRLEVBQUwsSUFBVyxFQUFYLEdBQWdCUixJQUFJLENBQUNRLEVBQXJCLEdBQTBCLEVBRjFCO0FBR0phLFdBQUssRUFBRSxDQUhIO0FBSUpDLFNBQUcsRUFBRXRCLElBQUksQ0FBQ3NCLEdBQUwsSUFBWSxFQUFaLEdBQWlCdEIsSUFBSSxDQUFDc0IsR0FBdEIsR0FBNEIsRUFKN0I7QUFLSmIsVUFBSSxFQUFFVCxJQUFJLENBQUNTLElBQUwsSUFBYSxFQUFiLEdBQWtCVCxJQUFJLENBQUNTLElBQXZCLEdBQThCLEVBTGhDO0FBTUpjLFdBQUssRUFBRXZCLElBQUksQ0FBQ3VCLEtBQUwsSUFBYyxFQUFkLEdBQW1CdkIsSUFBSSxDQUFDdUIsS0FBeEIsR0FBZ0MsRUFObkM7QUFPSkMsVUFBSSxFQUFFeEIsSUFBSSxDQUFDd0IsSUFBTCxJQUFhLEVBQWIsR0FBa0J4QixJQUFJLENBQUN3QixJQUF2QixHQUE4QixFQVBoQztBQVFKQyxnQkFBVSxFQUFFekIsSUFBSSxDQUFDeUIsVUFBTCxJQUFtQixFQUFuQixHQUF3QnpCLElBQUksQ0FBQ3lCLFVBQTdCLEdBQTBDLEVBUmxEO0FBU0pkLGVBQVMsRUFBRVgsSUFBSSxDQUFDVyxTQUFMLEdBQWlCWCxJQUFJLENBQUNXLFNBQXRCLEdBQWtDLEVBVHpDO0FBVUpDLGlCQUFXLEVBQUVaLElBQUksQ0FBQ1ksV0FBTCxHQUFtQlosSUFBSSxDQUFDWSxXQUF4QixHQUFzQztBQVYvQyxLQUhEO0FBZUxHLFdBQU8sRUFBRSxpQkFBVUMsUUFBVixFQUFvQjtBQUMzQmYsYUFBTyxDQUFDZSxRQUFELEVBQVdoQixJQUFJLENBQUNpQixNQUFMLEdBQWNqQixJQUFJLENBQUNpQixNQUFuQixHQUE0QixFQUF2QyxDQUFQO0FBQ0Q7QUFqQkksR0FBUDtBQW1CRCxDLENBRUQ7O0FBQ08sU0FBU1MsR0FBVCxDQUFhMUIsSUFBYixFQUFtQkMsT0FBbkIsRUFBNEI7QUFDakMsTUFBSWtCLFFBQVEsR0FBRyxJQUFJUSxRQUFKLENBQWEzQixJQUFJLENBQUM0QixHQUFMLENBQVMsQ0FBVCxDQUFiLENBQWY7QUFDQVQsVUFBUSxDQUFDVSxNQUFULENBQWdCLE9BQWhCLEVBQXlCN0IsSUFBSSxDQUFDTyxLQUE5QjtBQUNBWSxVQUFRLENBQUNVLE1BQVQsQ0FBZ0IsY0FBaEIsRUFBZ0M3QixJQUFJLENBQUM4QixZQUFyQztBQUNBWCxVQUFRLENBQUNVLE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEI3QixJQUFJLENBQUNjLFFBQWpDO0FBQ0EsTUFBSWQsSUFBSSxDQUFDK0IsY0FBTCxDQUFvQixZQUFwQixDQUFKLEVBQ0VaLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQixZQUFoQixFQUE4QjdCLElBQUksQ0FBQ2dDLFVBQW5DO0FBQ0YsTUFBSWhDLElBQUksQ0FBQytCLGNBQUwsQ0FBb0IsVUFBcEIsQ0FBSixFQUNFWixRQUFRLENBQUNVLE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEI3QixJQUFJLENBQUNpQyxRQUFqQztBQUNGLE1BQUlqQyxJQUFJLENBQUMrQixjQUFMLENBQW9CLGNBQXBCLENBQUosRUFDRVosUUFBUSxDQUFDVSxNQUFULENBQWdCLGNBQWhCLEVBQWdDN0IsSUFBSSxDQUFDa0MsWUFBckM7QUFDRixNQUFJbEMsSUFBSSxDQUFDK0IsY0FBTCxDQUFvQixTQUFwQixDQUFKLEVBQW9DWixRQUFRLENBQUNVLE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkI3QixJQUFJLENBQUNtQyxPQUFoQztBQUNwQyxNQUFJbkMsSUFBSSxDQUFDK0IsY0FBTCxDQUFvQixXQUFwQixDQUFKLEVBQ0VaLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQixrQkFBaEIsRUFBb0M3QixJQUFJLENBQUNvQyxTQUF6Qzs7QUFDRixNQUFJcEMsSUFBSSxDQUFDK0IsY0FBTCxDQUFvQixPQUFwQixDQUFKLEVBQWtDO0FBQ2hDLFNBQUssSUFBSU0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3JDLElBQUksQ0FBQ3NDLEtBQUwsQ0FBV0MsTUFBL0IsRUFBdUNGLENBQUMsRUFBeEMsRUFBNEM7QUFDMUNsQixjQUFRLENBQUNVLE1BQVQsQ0FBZ0I3QixJQUFJLENBQUNzQyxLQUFMLENBQVdELENBQVgsRUFBY0csSUFBOUIsRUFBb0N4QyxJQUFJLENBQUNzQyxLQUFMLENBQVdELENBQVgsQ0FBcEM7QUFDRDtBQUNGOztBQUNELE1BQUlyQyxJQUFJLENBQUMrQixjQUFMLENBQW9CLFNBQXBCLENBQUosRUFBb0M7QUFDbEM3QixLQUFDLENBQUNGLElBQUksQ0FBQ21DLE9BQU4sQ0FBRCxDQUFnQk0sSUFBaEIsQ0FBcUIsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ3ZDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0ExQixjQUFRLENBQUNVLE1BQVQsQ0FBZ0JhLEdBQWhCLEVBQXFCQyxHQUFyQjtBQUNELEtBSEQ7QUFJRDs7QUFDRHpDLEdBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsOENBQVEsR0FBR0wsSUFBSSxDQUFDSSxHQURoQjtBQUVMRSxVQUFNLEVBQUUsTUFGSDtBQUdMTixRQUFJLEVBQUVtQixRQUhEO0FBSUwyQixTQUFLLEVBQUUsS0FKRjtBQUtMQyxlQUFXLEVBQUUsS0FMUjtBQU1MQyxlQUFXLEVBQUUsS0FOUjtBQU9MakMsV0FBTyxFQUFFLGlCQUFVQyxRQUFWLEVBQW9CO0FBQzNCZixhQUFPLENBQUNlLFFBQUQsRUFBV2hCLElBQUksQ0FBQ2lCLE1BQUwsR0FBY2pCLElBQUksQ0FBQ2lCLE1BQW5CLEdBQTRCLEVBQXZDLENBQVA7QUFDRDtBQVRJLEdBQVA7QUFXRCxDLENBQ0Q7O0FBQ08sU0FBU2dDLGVBQVQsQ0FBeUJqRCxJQUF6QixFQUErQkMsT0FBL0IsRUFBd0M7QUFDN0MsTUFBSWtCLFFBQVEsR0FBRyxJQUFJUSxRQUFKLENBQWEzQixJQUFJLENBQUM0QixHQUFMLENBQVMsQ0FBVCxDQUFiLENBQWY7QUFDQVQsVUFBUSxDQUFDVSxNQUFULENBQWdCLFVBQWhCLEVBQTRCN0IsSUFBSSxDQUFDYyxRQUFqQztBQUNBSyxVQUFRLENBQUNVLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0JxQiw4Q0FBSSxFQUE1QjtBQUNBLE1BQUlsRCxJQUFJLENBQUNPLEtBQVQsRUFBZ0JZLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQixPQUFoQixFQUF5QjdCLElBQUksQ0FBQ08sS0FBOUI7QUFDaEIsTUFBSVAsSUFBSSxDQUFDOEIsWUFBVCxFQUF1QlgsUUFBUSxDQUFDVSxNQUFULENBQWdCLGNBQWhCLEVBQWdDN0IsSUFBSSxDQUFDOEIsWUFBckM7QUFDdkIsTUFBSTlCLElBQUksQ0FBQ21ELFFBQVQsRUFBbUJoQyxRQUFRLENBQUNVLE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEI3QixJQUFJLENBQUNtRCxRQUFqQztBQUNuQixNQUFJbkQsSUFBSSxDQUFDb0QsTUFBVCxFQUFpQmpDLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQixRQUFoQixFQUEwQjdCLElBQUksQ0FBQ29ELE1BQS9CO0FBQ2pCLE1BQUlwRCxJQUFJLENBQUNrQyxZQUFULEVBQXVCZixRQUFRLENBQUNVLE1BQVQsQ0FBZ0IsY0FBaEIsRUFBZ0M3QixJQUFJLENBQUNrQyxZQUFyQztBQUN2QixNQUFJbEMsSUFBSSxDQUFDcUQsUUFBVCxFQUFtQmxDLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQixVQUFoQixFQUE0QjdCLElBQUksQ0FBQ3FELFFBQWpDO0FBQ25CLE1BQUlyRCxJQUFJLENBQUNnQyxVQUFULEVBQXFCYixRQUFRLENBQUNVLE1BQVQsQ0FBZ0IsWUFBaEIsRUFBOEI3QixJQUFJLENBQUNnQyxVQUFuQztBQUNyQixNQUFJaEMsSUFBSSxDQUFDaUMsUUFBVCxFQUFtQmQsUUFBUSxDQUFDVSxNQUFULENBQWdCLFVBQWhCLEVBQTRCN0IsSUFBSSxDQUFDaUMsUUFBakM7QUFDbkIsTUFBSWpDLElBQUksQ0FBQ1EsRUFBVCxFQUFhVyxRQUFRLENBQUNVLE1BQVQsQ0FBZ0IsSUFBaEIsRUFBc0I3QixJQUFJLENBQUNRLEVBQTNCO0FBQ2IsTUFBSVIsSUFBSSxDQUFDc0QsT0FBVCxFQUFrQm5DLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQixJQUFoQixFQUFzQjdCLElBQUksQ0FBQ3NELE9BQTNCO0FBQ2xCLE1BQUl0RCxJQUFJLENBQUNNLE1BQVQsRUFBaUJhLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQixRQUFoQixFQUEwQjdCLElBQUksQ0FBQ00sTUFBL0I7O0FBQ2pCLE1BQUlOLElBQUksQ0FBQytCLGNBQUwsQ0FBb0IsU0FBcEIsQ0FBSixFQUFvQztBQUNsQyx1Q0FBMkJ3QixNQUFNLENBQUNDLE9BQVAsQ0FBZXhELElBQUksQ0FBQ21DLE9BQXBCLENBQTNCLHFDQUF5RDtBQUFwRDtBQUFBLFVBQU9PLEdBQVA7QUFBQSxVQUFZZSxLQUFaOztBQUNIdEMsY0FBUSxDQUFDVSxNQUFULENBQWdCYSxHQUFoQixFQUFxQmdCLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixLQUFmLENBQXJCO0FBQ0Q7QUFDRjs7QUFDRCxNQUFJekQsSUFBSSxDQUFDK0IsY0FBTCxDQUFvQixXQUFwQixDQUFKLEVBQ0VaLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQixrQkFBaEIsRUFBb0M3QixJQUFJLENBQUNvQyxTQUF6QztBQUNGLE1BQUlwQyxJQUFJLENBQUMrQixjQUFMLENBQW9CLGFBQXBCLENBQUosRUFDRVosUUFBUSxDQUFDVSxNQUFULENBQWdCLGFBQWhCLEVBQStCN0IsSUFBSSxDQUFDNEQsV0FBcEM7O0FBQ0YsTUFBSTVELElBQUksQ0FBQytCLGNBQUwsQ0FBb0IsT0FBcEIsQ0FBSixFQUFrQztBQUNoQyxTQUFLLElBQUlNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdyQyxJQUFJLENBQUNzQyxLQUFMLENBQVdDLE1BQS9CLEVBQXVDRixDQUFDLEVBQXhDLEVBQTRDO0FBQzFDbEIsY0FBUSxDQUFDVSxNQUFULENBQWdCN0IsSUFBSSxDQUFDc0MsS0FBTCxDQUFXRCxDQUFYLEVBQWNHLElBQTlCLEVBQW9DeEMsSUFBSSxDQUFDc0MsS0FBTCxDQUFXRCxDQUFYLENBQXBDO0FBQ0Q7QUFDRjs7QUFDRG5DLEdBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsOENBQVEsR0FBR0wsSUFBSSxDQUFDSSxHQURoQjtBQUVMRSxVQUFNLEVBQUUsTUFGSDtBQUdMeUMsZUFBVyxFQUFFLEtBSFI7QUFJTEMsZUFBVyxFQUFFLEtBSlI7QUFLTGEsWUFBUSxFQUFFLE1BTEw7QUFNTDdELFFBQUksRUFBRW1CLFFBTkQ7QUFPTEosV0FBTyxFQUFFLGlCQUFVQyxRQUFWLEVBQW9CO0FBQzNCZixhQUFPLENBQUNlLFFBQUQsRUFBV2hCLElBQUksQ0FBQ2lCLE1BQUwsR0FBY2pCLElBQUksQ0FBQ2lCLE1BQW5CLEdBQTRCLEVBQXZDLENBQVA7QUFDRDtBQVRJLEdBQVA7QUFXRCxDLENBRUQ7O0FBQ08sU0FBUzZDLE1BQVQsQ0FBZ0I5RCxJQUFoQixFQUFzQitELFdBQXRCLEVBQW1DO0FBQ3hDQyxtQkFBaUIsQ0FBQ2hFLElBQUQsQ0FBakIsQ0FBd0JpRSxJQUF4QixDQUE2QixVQUFDQyxNQUFELEVBQVk7QUFDdkMsUUFBSUEsTUFBTSxDQUFDVCxLQUFYLEVBQWtCO0FBQ2hCdkQsT0FBQyxDQUFDQyxJQUFGLENBQU87QUFDTEMsV0FBRyxFQUFFQyw4Q0FBUSxHQUFHTCxJQUFJLENBQUNJLEdBRGhCO0FBRUxFLGNBQU0sRUFBRSxNQUZIO0FBR0xOLFlBQUksRUFBRUEsSUFBSSxDQUFDbUUsVUFITjtBQUlMcEQsZUFBTyxFQUFFLGlCQUFVQyxRQUFWLEVBQW9CO0FBQzNCK0MscUJBQVcsQ0FBQy9DLFFBQUQsRUFBV2hCLElBQUksQ0FBQ2lCLE1BQUwsR0FBY2pCLElBQUksQ0FBQ2lCLE1BQW5CLEdBQTRCLEVBQXZDLENBQVg7QUFDRDtBQU5JLE9BQVA7QUFRRDtBQUNGLEdBWEQ7QUFZRCxDLENBQ0Q7O0FBQ0EsU0FBUytDLGlCQUFULENBQTJCaEUsSUFBM0IsRUFBaUM7QUFDL0IsU0FBTyxJQUFJb0UsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxRQUFJLENBQUN0RSxJQUFJLENBQUN1RSxTQUFWLEVBQXFCO0FBQ25CLFVBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakIsWUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjs7QUFDQSxZQUFJM0UsSUFBSSxDQUFDNEUsWUFBVCxFQUF1QjtBQUNyQixpQkFBUUgsR0FBRyxDQUFDSSxTQUFKLEdBQWdCN0UsSUFBSSxDQUFDNEUsWUFBN0I7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBUUgsR0FBRyxDQUFDSSxTQUFKLEdBQWdCLDBDQUF4QjtBQUNEO0FBQ0YsT0FQRDs7QUFRQTdFLFVBQUksQ0FBQzhFLElBQUwsQ0FDR0MsSUFESCxDQUNRO0FBQ0pDLGFBQUssRUFBRSxlQURIO0FBRUpDLHdCQUFnQixFQUFFLElBRmQ7QUFHSlQsWUFBSSxFQUFFQSxJQUFJLEVBSE47QUFJSlUsMEJBQWtCLEVBQUUsU0FKaEI7QUFLSkMseUJBQWlCLEVBQUUsTUFMZjtBQU1KQyx5QkFBaUIsRUFBRXBGLElBQUksQ0FBQ3FGLFdBQUwsR0FBbUJyRixJQUFJLENBQUNxRixXQUF4QixHQUFzQztBQU5yRCxPQURSLEVBU0dwQixJQVRILENBU1EsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCRyxlQUFPLENBQUNILE1BQUQsQ0FBUDtBQUNELE9BWEg7QUFZRCxLQXJCRCxNQXFCTztBQUNMdEIsYUFBTyxDQUFDQyxHQUFSLENBQVk3QyxJQUFaO0FBQ0FFLE9BQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLFdBQUcsRUFBRUMsOENBQVEsR0FBR0wsSUFBSSxDQUFDdUUsU0FEaEI7QUFFTGpFLGNBQU0sRUFBRSxNQUZIO0FBR0xOLFlBQUksRUFBRUEsSUFBSSxDQUFDbUU7QUFITixPQUFQLEVBS0dtQixJQUxILENBS1EsVUFBQ3RFLFFBQUQsRUFBYztBQUNsQmhCLFlBQUksQ0FBQzhFLElBQUwsQ0FDR0MsSUFESCxDQUNRO0FBQ0pDLGVBQUssRUFBRSxlQURIO0FBRUpDLDBCQUFnQixFQUFFLElBRmQ7QUFHSlQsY0FBSSxFQUFFLDZDQUE2Q3hELFFBQVEsQ0FBQ3VFLEdBSHhEO0FBSUpMLDRCQUFrQixFQUFFLFNBSmhCO0FBS0pDLDJCQUFpQixFQUFFLE1BTGY7QUFNSkMsMkJBQWlCLEVBQUU7QUFOZixTQURSLEVBU0duQixJQVRILENBU1EsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCRyxpQkFBTyxDQUFDSCxNQUFELENBQVA7QUFDRCxTQVhIO0FBWUQsT0FsQkgsRUFtQkdzQixJQW5CSCxDQW1CUSxVQUFDQyxLQUFELEVBQVc7QUFDZm5CLGNBQU0sQ0FBQ21CLEtBQUQsQ0FBTjtBQUNELE9BckJIO0FBc0JEO0FBQ0YsR0EvQ00sQ0FBUDtBQWdERDs7QUFDTSxTQUFTQyxtQkFBVCxDQUE2QjFGLElBQTdCLEVBQW1DO0FBQ3hDRSxHQUFDLENBQUNDLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVDLDhDQUFRLEdBQUcsdUJBRFg7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTE4sUUFBSSxFQUFFO0FBQ0pPLFdBQUssRUFBRVAsSUFBSSxDQUFDTztBQURSLEtBSEQ7QUFNTFEsV0FBTyxFQUFFLGlCQUFVQyxRQUFWLEVBQW9CO0FBQzNCLFVBQUlBLFFBQVEsQ0FBQ2tELE1BQVQsS0FBb0IsU0FBeEIsRUFBbUM7QUFDakNsRSxZQUFJLENBQUMyRixTQUFMLENBQWU5RCxNQUFmLENBQXNCYixRQUFRLENBQUN1RSxHQUEvQjtBQUNELE9BRkQsTUFFTztBQUNMdkYsWUFBSSxDQUFDNEYsT0FBTCxDQUFhcEIsSUFBYixDQUFrQnhELFFBQVEsQ0FBQ3VFLEdBQTNCO0FBQ0Q7QUFDRjtBQVpJLEdBQVA7QUFjRDtBQUVNLFNBQVNNLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQWlDRixPQUFqQyxFQUEwQztBQUMvQyxNQUFJRyxHQUFHLEdBQUdyQixRQUFRLENBQUNzQixhQUFULENBQXVCRixRQUF2QixDQUFWOztBQUNBLE1BQUlDLEdBQUcsQ0FBQ3RDLEtBQUosQ0FBVWxCLE1BQVYsSUFBb0IsQ0FBeEIsRUFBMkI7QUFDekIwRCxTQUFLLENBQUMsOEJBQUQsQ0FBTDtBQUNELEdBRkQsTUFFTztBQUNML0YsS0FBQyxDQUFDQyxJQUFGLENBQU87QUFDTEMsU0FBRyxFQUFFQyw4Q0FBUSxHQUFHLG9CQURYO0FBRUxDLFlBQU0sRUFBRSxNQUZIO0FBR0xOLFVBQUksRUFBRTtBQUNKb0MsaUJBQVMsRUFBRTJELEdBQUcsQ0FBQ3RDO0FBRFgsT0FIRDtBQU1MMUMsYUFBTyxFQUFFLGlCQUFVQyxRQUFWLEVBQW9CO0FBQzNCLFlBQUlBLFFBQVEsSUFBSSxTQUFoQixFQUEyQjtBQUN6QmQsV0FBQyxDQUFDMEYsT0FBRCxDQUFELENBQVdwQixJQUFYLENBQWdCeEQsUUFBaEI7QUFDRDtBQUNGO0FBVkksS0FBUDtBQVlEO0FBQ0Y7QUFDTSxTQUFTa0YsaUJBQVQsQ0FBMkJsRyxLQUEzQixFQUFpQztBQUN0QyxTQUFPO0FBQ0xJLE9BQUcsRUFBRUMsOENBQVEsR0FBR0wsS0FBSSxDQUFDSSxHQURoQjtBQUVMK0YsUUFBSSxFQUFFLE1BRkQ7QUFHTHRDLFlBQVEsRUFBRSxNQUhMO0FBSUx1QyxTQUFLLEVBQUUsR0FKRjtBQUtMcEcsUUFBSSxFQUFFLGNBQVVpQixNQUFWLEVBQWtCO0FBQ3RCLGFBQU87QUFDTG9GLGtCQUFVLEVBQUVwRixNQUFNLENBQUNxRixJQURkO0FBQ29CO0FBQ3pCL0YsYUFBSyxFQUFFUCxLQUFJLENBQUNPLEtBQUwsSUFBYyxFQUFkLEdBQW1CUCxLQUFJLENBQUNPLEtBQXhCLEdBQWdDLEVBRmxDO0FBR0xJLGlCQUFTLEVBQUVYLEtBQUksQ0FBQ1csU0FBTCxJQUFrQixFQUFsQixHQUF1QlgsS0FBSSxDQUFDVyxTQUE1QixHQUF3QyxFQUg5QztBQUlMNEYsZ0JBQVEsRUFBRXZHLEtBQUksQ0FBQ3VHLFFBQUwsSUFBaUIsRUFBakIsR0FBc0J2RyxLQUFJLENBQUN1RyxRQUEzQixHQUFzQztBQUozQyxPQUFQO0FBTUQsS0FaSTtBQWFMQyxrQkFBYyxFQUFFLHdCQUFVeEYsUUFBVixFQUFvQjtBQUNsQyxVQUFJQSxRQUFRLENBQUNrRCxNQUFULElBQW1CLFNBQXZCLEVBQWtDO0FBQ2hDLGVBQU87QUFDTHVDLGlCQUFPLEVBQUV2RyxDQUFDLENBQUN3RyxHQUFGLENBQU0xRixRQUFRLENBQUN1RSxHQUFmLEVBQW9CLFVBQVVvQixHQUFWLEVBQWU7QUFDMUMsZ0JBQUlBLEdBQUcsQ0FBQ25HLEVBQUosSUFBVSxDQUFkLEVBQWlCO0FBQ2YscUJBQU87QUFBRUEsa0JBQUUsRUFBRW1HLEdBQUcsQ0FBQ25HLEVBQVY7QUFBY29HLG9CQUFJLEVBQUVELEdBQUcsQ0FBQ0M7QUFBeEIsZUFBUDtBQUNELGFBRkQsTUFFTztBQUNMLHFCQUFPO0FBQUVwRyxrQkFBRSxFQUFFbUcsR0FBRyxDQUFDbkcsRUFBVjtBQUFjb0csb0JBQUksRUFBRUQsR0FBRyxDQUFDQztBQUF4QixlQUFQO0FBQ0Q7QUFDRixXQU5RO0FBREosU0FBUDtBQVNEO0FBQ0YsS0F6Qkk7QUEwQkw5RCxTQUFLLEVBQUU7QUExQkYsR0FBUDtBQTRCRDtBQUNNLFNBQVMrRCxJQUFULENBQWM3RyxJQUFkLEVBQW9CO0FBQ3pCLE1BQUk4RyxFQUFFLEdBQUcsSUFBSW5GLFFBQUosRUFBVDs7QUFDQSx1Q0FBMkI0QixNQUFNLENBQUNDLE9BQVAsQ0FBZXhELElBQUksQ0FBQ2lCLE1BQXBCLENBQTNCLHdDQUF3RDtBQUFuRDtBQUFBLFFBQU95QixHQUFQO0FBQUEsUUFBWWUsS0FBWjs7QUFDSHFELE1BQUUsQ0FBQ2pGLE1BQUgsQ0FBVWEsR0FBVixFQUFlZSxLQUFmO0FBQ0Q7O0FBQ0R2RCxHQUFDLENBQUNDLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVDLDhDQUFRLEdBQUdMLElBQUksQ0FBQ0ksR0FEaEI7QUFFTEUsVUFBTSxFQUFFLE1BRkg7QUFHTHlDLGVBQVcsRUFBRSxLQUhSO0FBSUxDLGVBQVcsRUFBRSxLQUpSO0FBS0xhLFlBQVEsRUFBRSxNQUxMO0FBTUw3RCxRQUFJLEVBQUU4RyxFQU5EO0FBT0wvRixXQUFPLEVBQUUsaUJBQVVDLFFBQVYsRUFBb0IsQ0FBRTtBQVAxQixHQUFQO0FBU0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzVSSytGLGE7Ozs7aURBQ2tCLFVBQUNDLElBQUQsRUFBVTtBQUM5QkEsVUFBSSxDQUFDQyxJQUFMLENBQVUsYUFBVixFQUF5QkMsV0FBekIsQ0FBcUMsWUFBckM7QUFDQUYsVUFBSSxDQUFDQyxJQUFMLENBQVUsc0JBQVYsRUFBa0N6QyxJQUFsQyxDQUF1QyxFQUF2QztBQUNELEs7O21DQVFPLFVBQUN3QyxJQUFELEVBQU9HLFFBQVAsRUFBb0I7QUFDMUIsVUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBQ0EseUNBQTJCN0QsTUFBTSxDQUFDQyxPQUFQLENBQWUyRCxRQUFmLENBQTNCLHFDQUFxRDtBQUFoRDtBQUFBLFlBQU96RSxHQUFQO0FBQUEsWUFBWWUsS0FBWjs7QUFDSCxZQUFJNEQsS0FBSyxHQUFHTCxJQUFJLENBQUNDLElBQUwsQ0FBVSxNQUFNdkUsR0FBaEIsRUFBcUI0RSxRQUFyQixDQUE4QixZQUE5QixDQUFaO0FBQ0FELGFBQUssQ0FBQ0UsTUFBTixHQUFlQyxRQUFmLENBQXdCLHNCQUF4QixFQUFnRGhELElBQWhELENBQXFEZixLQUFyRDtBQUNBMkQsY0FBTSxDQUFDSyxJQUFQLENBQVkvRSxHQUFaO0FBQ0Q7O0FBQ0QsYUFBTzBFLE1BQVA7QUFDRCxLOzs7OztXQWZEO0FBQ0EsZ0NBQW1CTSxNQUFuQixFQUEyQjtBQUN6QkEsWUFBTSxDQUFDQyxFQUFQLENBQVUsT0FBVixFQUFtQixtQ0FBbkIsRUFBd0QsWUFBWTtBQUNsRXpILFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdILFdBQVIsQ0FBb0IsWUFBcEI7QUFDQWhILFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFILE1BQVIsR0FBaUJDLFFBQWpCLENBQTBCLHNCQUExQixFQUFrRGhELElBQWxELENBQXVELEVBQXZEO0FBQ0QsT0FIRDtBQUlEOzs7Ozs7QUFXSCwrREFBZSxJQUFJdUMsYUFBSixFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7O0lBQ01hLGtCLEdBQ0osNEJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFBQTs7QUFBQSxpQ0FHYixZQUFNO0FBQ1osU0FBSSxDQUFDQyxlQUFMOztBQUNBLFNBQUksQ0FBQ0MsWUFBTDtBQUNELEdBTm9COztBQUFBLDJDQVVILFlBQU07QUFDdEIsU0FBSSxDQUFDQyxNQUFMLEdBQWMsS0FBSSxDQUFDSCxPQUFMLENBQWFaLElBQWIsQ0FBa0IsWUFBbEIsQ0FBZDtBQUNBLFNBQUksQ0FBQ2dCLFFBQUwsR0FBZ0IsS0FBSSxDQUFDSixPQUFMLENBQWFaLElBQWIsQ0FBa0IsWUFBbEIsQ0FBaEI7QUFDQSxTQUFJLENBQUNpQixNQUFMLEdBQWMsS0FBSSxDQUFDTCxPQUFMLENBQWFaLElBQWIsQ0FBa0IsZUFBbEIsQ0FBZDtBQUNBLFNBQUksQ0FBQ2tCLE1BQUwsR0FBYyxLQUFJLENBQUNOLE9BQUwsQ0FBYVosSUFBYixDQUFrQixlQUFsQixDQUFkO0FBQ0EsU0FBSSxDQUFDbUIsU0FBTCxHQUFpQixLQUFJLENBQUNQLE9BQUwsQ0FBYVosSUFBYixDQUFrQixhQUFsQixDQUFqQjtBQUNBLFNBQUksQ0FBQ29CLFNBQUwsR0FBaUIsS0FBSSxDQUFDUixPQUFMLENBQWFaLElBQWIsQ0FBa0IsYUFBbEIsQ0FBakI7QUFDRCxHQWpCb0I7O0FBQUEsd0NBcUJOLFlBQU07QUFDbkIsUUFBSXFCLEtBQUssR0FBRyxLQUFaLENBRG1CLENBRW5COztBQUNBQSxTQUFLLENBQUNOLE1BQU4sQ0FBYUwsRUFBYixDQUFnQixlQUFoQixFQUFpQyxZQUFZO0FBQzNDLFVBQUlXLEtBQUssQ0FBQ0wsUUFBTixDQUFlaEIsSUFBZixDQUFvQixhQUFwQixFQUFtQzFFLE1BQW5DLElBQTZDLENBQWpELEVBQW9EO0FBQ2xEOEUsdUZBQUEsQ0FBMEJpQixLQUFLLENBQUNMLFFBQWhDO0FBQ0Q7QUFDRixLQUpELEVBSG1CLENBUW5COztBQUNBSyxTQUFLLENBQUNKLE1BQU4sQ0FBYVAsRUFBYixDQUFnQixlQUFoQixFQUFpQyxZQUFZO0FBQzNDLFVBQUlXLEtBQUssQ0FBQ0gsTUFBTixDQUFhbEIsSUFBYixDQUFrQixhQUFsQixFQUFpQzFFLE1BQWpDLElBQTJDLENBQS9DLEVBQWtEO0FBQ2hEOEUsdUZBQUEsQ0FBMEJpQixLQUFLLENBQUNILE1BQWhDO0FBQ0Q7QUFDRixLQUpELEVBVG1CLENBY25COztBQUNBRyxTQUFLLENBQUNKLE1BQU4sQ0FBYVAsRUFBYixDQUFnQixlQUFoQixFQUFpQyxZQUFZO0FBQzNDVyxXQUFLLENBQUNILE1BQU4sQ0FBYUksT0FBYixDQUFxQixPQUFyQjtBQUNBRCxXQUFLLENBQUNILE1BQU4sQ0FBYWxCLElBQWIsQ0FBa0IsV0FBbEIsRUFBK0J6QyxJQUEvQixDQUFvQyxFQUFwQztBQUNELEtBSEQsRUFmbUIsQ0FtQm5COztBQUNBOEQsU0FBSyxDQUFDSCxNQUFOLENBQWFSLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsT0FBekIsRUFBa0MsWUFBWTtBQUM1Q3pILE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdILFdBQVIsQ0FBb0IsWUFBcEI7QUFDQWhILE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFILE1BQVIsR0FBaUJDLFFBQWpCLENBQTBCLHNCQUExQixFQUFrRGhELElBQWxELENBQXVELEVBQXZEO0FBQ0QsS0FIRCxFQXBCbUIsQ0F3Qm5COztBQUNBOEQsU0FBSyxDQUFDTCxRQUFOLENBQWVOLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsT0FBM0IsRUFBb0MsWUFBWTtBQUM5Q3pILE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdILFdBQVIsQ0FBb0IsWUFBcEI7QUFDQWhILE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFILE1BQVIsR0FBaUJDLFFBQWpCLENBQTBCLHNCQUExQixFQUFrRGhELElBQWxELENBQXVELEVBQXZEO0FBQ0QsS0FIRCxFQXpCbUIsQ0E2Qm5COztBQUNBOEQsU0FBSyxDQUFDRixTQUFOLENBQWdCVCxFQUFoQixDQUFtQixlQUFuQixFQUFvQyxZQUFZO0FBQzlDVyxXQUFLLENBQUNELFNBQU4sQ0FBZ0JFLE9BQWhCLENBQXdCLE9BQXhCO0FBQ0QsS0FGRCxFQTlCbUIsQ0FpQ25COztBQUNBRCxTQUFLLENBQUNOLE1BQU4sQ0FBYUwsRUFBYixDQUFnQixnQkFBaEIsRUFBa0MsWUFBWTtBQUM1Q3pILE9BQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLFdBQUcsRUFBRUMsbURBQVEsR0FBRyxxQkFEWDtBQUVMQyxjQUFNLEVBQUUsTUFGSDtBQUdMUyxlQUFPLEVBQUUsaUJBQVVDLFFBQVYsRUFBb0I7QUFDM0IsY0FBSUEsUUFBUSxDQUFDa0QsTUFBVCxLQUFvQixTQUF4QixFQUFtQztBQUNqQ29FLGlCQUFLLENBQUNMLFFBQU4sQ0FBZWhCLElBQWYsQ0FBb0IsUUFBcEIsRUFBOEJ0RSxHQUE5QixDQUFrQzNCLFFBQVEsQ0FBQ3VFLEdBQVQsQ0FBYWlELEtBQS9DO0FBQ0FGLGlCQUFLLENBQUNMLFFBQU4sQ0FDR2hCLElBREgsQ0FDUSxjQURSLEVBRUd3QixJQUZILENBRVEsU0FGUixFQUVtQnpILFFBQVEsQ0FBQ3VFLEdBQVQsQ0FBYW1ELFFBRmhDO0FBR0QsV0FMRCxNQUtPO0FBQ0xKLGlCQUFLLENBQUNMLFFBQU4sQ0FBZWhCLElBQWYsQ0FBb0IsUUFBcEIsRUFBOEJ0RSxHQUE5QixDQUFrQyxFQUFsQztBQUNBMkYsaUJBQUssQ0FBQ0wsUUFBTixDQUFlaEIsSUFBZixDQUFvQixXQUFwQixFQUFpQ3RFLEdBQWpDLENBQXFDLEVBQXJDO0FBQ0Q7QUFDRjtBQWJJLE9BQVA7QUFlRCxLQWhCRCxFQWxDbUIsQ0FtRG5COztBQUNBMkYsU0FBSyxDQUFDSCxNQUFOLENBQWFSLEVBQWIsQ0FBZ0IsUUFBaEIsRUFBMEIsVUFBVWdCLENBQVYsRUFBYTtBQUNyQ0EsT0FBQyxDQUFDQyxjQUFGO0FBQ0FELE9BQUMsQ0FBQ0UsZUFBRjtBQUNBUCxXQUFLLENBQUNILE1BQU4sQ0FBYWxCLElBQWIsQ0FBa0IsZUFBbEIsRUFBbUN0RSxHQUFuQyxDQUF1QyxnQkFBdkM7QUFDQSxVQUFJbUcsU0FBUyxHQUFHO0FBQ2QxSSxXQUFHLEVBQUUsbUJBRFM7QUFFZHdCLFdBQUcsRUFBRTBHLEtBQUssQ0FBQ0gsTUFGRztBQUdkNUgsYUFBSyxFQUFFLE1BSE87QUFJZHVCLG9CQUFZLEVBQUUsT0FKQTtBQUtkaEIsZ0JBQVEsRUFBRTtBQUxJLE9BQWhCO0FBT0FZLDJEQUFHLENBQUNvSCxTQUFELEVBQVlDLFFBQVosQ0FBSDs7QUFDQSxlQUFTQSxRQUFULENBQWtCL0gsUUFBbEIsRUFBNEI7QUFDMUJzSCxhQUFLLENBQUNILE1BQU4sQ0FBYWxCLElBQWIsQ0FBa0IsZUFBbEIsRUFBbUN0RSxHQUFuQyxDQUF1QyxhQUF2Qzs7QUFDQSxZQUFJM0IsUUFBUSxDQUFDa0QsTUFBVCxJQUFtQixTQUF2QixFQUFrQztBQUNoQ29FLGVBQUssQ0FBQ0osTUFBTixDQUNHakIsSUFESCxDQUNRLDRCQURSLEVBRUd3QixJQUZILENBRVEsS0FGUixFQUVlekgsUUFBUSxDQUFDZ0ksR0FBVCxHQUFlaEksUUFBUSxDQUFDZ0ksR0FBeEIsR0FBOEIsRUFGN0M7QUFHQVYsZUFBSyxDQUFDSCxNQUFOLENBQWFJLE9BQWIsQ0FBcUIsT0FBckI7QUFDQUQsZUFBSyxDQUFDSixNQUFOLENBQWFqQixJQUFiLENBQWtCLGNBQWxCLEVBQWtDZ0MsTUFBbEM7QUFDQVgsZUFBSyxDQUFDSCxNQUFOLENBQWFsQixJQUFiLENBQWtCLFdBQWxCLEVBQStCekMsSUFBL0IsQ0FBb0N4RCxRQUFRLENBQUN1RSxHQUE3QztBQUNELFNBUEQsTUFPTztBQUNMLGNBQUl2RSxRQUFRLENBQUNrRCxNQUFULElBQW1CLGFBQXZCLEVBQXNDO0FBQ3BDbUQsNkVBQUEsQ0FBWWlCLEtBQUssQ0FBQ0wsUUFBbEIsRUFBNEJqSCxRQUFRLENBQUN1RSxHQUFyQztBQUNELFdBRkQsTUFFTztBQUNMK0MsaUJBQUssQ0FBQ0wsUUFBTixDQUFlaEIsSUFBZixDQUFvQixhQUFwQixFQUFtQ3pDLElBQW5DLENBQXdDeEQsUUFBUSxDQUFDdUUsR0FBakQ7QUFDRDtBQUNGO0FBQ0Y7QUFDRixLQTdCRCxFQXBEbUIsQ0FrRm5COztBQUNBK0MsU0FBSyxDQUFDSixNQUFOLENBQ0dqQixJQURILENBQ1EsMENBRFIsRUFFR1UsRUFGSCxDQUVNLFFBRk4sRUFFZ0IsWUFBWTtBQUN4QnVCLGlFQUFPLENBQ0wsSUFESyxFQUVMWixLQUFLLENBQUNKLE1BQU4sQ0FBYWpCLElBQWIsQ0FBa0IsNEJBQWxCLENBRkssRUFHTHFCLEtBQUssQ0FBQ0osTUFBTixDQUFhakIsSUFBYixDQUFrQixvQ0FBbEIsQ0FISyxDQUFQO0FBS0QsS0FSSCxFQW5GbUIsQ0E0Rm5COztBQUNBcUIsU0FBSyxDQUFDTCxRQUFOLENBQWVOLEVBQWYsQ0FBa0IsUUFBbEIsRUFBNEIsVUFBVWdCLENBQVYsRUFBYTtBQUN2Q0EsT0FBQyxDQUFDQyxjQUFGO0FBQ0FOLFdBQUssQ0FBQ0wsUUFBTixDQUFlaEIsSUFBZixDQUFvQixZQUFwQixFQUFrQ3RFLEdBQWxDLENBQXNDLGdCQUF0QztBQUNBLFVBQUkzQyxJQUFJLEdBQUc7QUFDVEksV0FBRyxFQUFFLGdCQURJO0FBRVR3QixXQUFHLEVBQUUwRyxLQUFLLENBQUNMLFFBRkY7QUFHVG5ILGdCQUFRLEVBQUU7QUFIRCxPQUFYO0FBS0FtQyx1RUFBZSxDQUFDakQsSUFBRCxFQUFPbUosbUJBQVAsQ0FBZixDQVJ1QyxDQVN2Qzs7QUFDQSxlQUFTQSxtQkFBVCxDQUE2Qm5JLFFBQTdCLEVBQXVDO0FBQ3JDc0gsYUFBSyxDQUFDTCxRQUFOLENBQWVoQixJQUFmLENBQW9CLFlBQXBCLEVBQWtDdEUsR0FBbEMsQ0FBc0MsT0FBdEM7O0FBQ0EsWUFBSTNCLFFBQVEsQ0FBQ2tELE1BQVQsSUFBbUIsU0FBdkIsRUFBa0M7QUFDaENvRSxlQUFLLENBQUNMLFFBQU4sQ0FBZU0sT0FBZixDQUF1QixPQUF2QjtBQUNBRCxlQUFLLENBQUNOLE1BQU4sQ0FBYW9CLEtBQWIsQ0FBbUIsTUFBbkI7QUFDQUMsZ0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7QUFDRCxTQUpELE1BSU87QUFDTCxjQUFJdkksUUFBUSxDQUFDa0QsTUFBVCxJQUFtQixhQUF2QixFQUFzQztBQUNwQ21ELDZFQUFBLENBQVlpQixLQUFLLENBQUNMLFFBQWxCLEVBQTRCakgsUUFBUSxDQUFDdUUsR0FBckM7QUFDRCxXQUZELE1BRU87QUFDTCtDLGlCQUFLLENBQUNMLFFBQU4sQ0FBZWhCLElBQWYsQ0FBb0IsYUFBcEIsRUFBbUN6QyxJQUFuQyxDQUF3Q3hELFFBQVEsQ0FBQ3VFLEdBQWpEO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsS0F4QkQsRUE3Rm1CLENBc0huQjs7QUFDQStDLFNBQUssQ0FBQ0QsU0FBTixDQUFnQlYsRUFBaEIsQ0FBbUIsUUFBbkIsRUFBNkIsVUFBVWdCLENBQVYsRUFBYTtBQUN4Q0EsT0FBQyxDQUFDQyxjQUFGO0FBQ0FOLFdBQUssQ0FBQ0QsU0FBTixDQUFnQnBCLElBQWhCLENBQXFCLGFBQXJCLEVBQW9DdEUsR0FBcEMsQ0FBd0MsZ0JBQXhDO0FBQ0EsVUFBSTNDLElBQUksR0FBRztBQUNUSSxXQUFHLEVBQUUsYUFESTtBQUVUd0IsV0FBRyxFQUFFMEcsS0FBSyxDQUFDRCxTQUZGO0FBR1R2SCxnQkFBUSxFQUFFO0FBSEQsT0FBWDtBQUtBbUMsdUVBQWUsQ0FBQ2pELElBQUQsRUFBT3dKLFNBQVAsQ0FBZjs7QUFDQSxlQUFTQSxTQUFULENBQW1CeEksUUFBbkIsRUFBNkI7QUFDM0JzSCxhQUFLLENBQUNELFNBQU4sQ0FBZ0JwQixJQUFoQixDQUFxQixhQUFyQixFQUFvQ3RFLEdBQXBDLENBQXdDLGdCQUF4Qzs7QUFDQSxZQUFJM0IsUUFBUSxDQUFDa0QsTUFBVCxJQUFtQixTQUF2QixFQUFrQztBQUNoQ29FLGVBQUssQ0FBQ0QsU0FBTixDQUFnQkUsT0FBaEIsQ0FBd0IsT0FBeEI7QUFDQUQsZUFBSyxDQUFDRCxTQUFOLENBQWdCcEIsSUFBaEIsQ0FBcUIsV0FBckIsRUFBa0N6QyxJQUFsQyxDQUF1Q3hELFFBQVEsQ0FBQ3VFLEdBQWhEO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsY0FBSXZFLFFBQVEsQ0FBQ2tELE1BQVQsSUFBbUIsYUFBdkIsRUFBc0M7QUFDcENtRCw2RUFBQSxDQUFZaUIsS0FBSyxDQUFDTCxRQUFsQixFQUE0QmpILFFBQVEsQ0FBQ3VFLEdBQXJDO0FBQ0QsV0FGRCxNQUVPO0FBQ0wrQyxpQkFBSyxDQUFDTCxRQUFOLENBQWVoQixJQUFmLENBQW9CLGFBQXBCLEVBQW1DekMsSUFBbkMsQ0FBd0N4RCxRQUFRLENBQUN1RSxHQUFqRDtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEtBdEJELEVBdkhtQixDQThJbkI7O0FBQ0EsUUFBSWtFLE1BQU0sR0FBR3ZKLENBQUMsQ0FBQyxzQkFBRCxDQUFkO0FBQ0FBLEtBQUMsQ0FBQ3VKLE1BQUQsQ0FBRCxDQUFVOUIsRUFBVixDQUFhLE9BQWIsRUFBc0IsWUFBWTtBQUNoQyxVQUFJLE9BQU8rQixFQUFQLEtBQWMsV0FBbEIsRUFBK0I7QUFDN0JBLFVBQUUsQ0FBQ0QsTUFBSCxHQUFZeEYsSUFBWixDQUFpQixVQUFDakQsUUFBRCxFQUFjLENBQzdCO0FBQ0QsU0FGRDtBQUdEOztBQUNEZCxPQUFDLENBQUNDLElBQUYsQ0FBTztBQUNMQyxXQUFHLEVBQUVDLG1EQUFRLEdBQUcsYUFEWDtBQUVMQyxjQUFNLEVBQUUsTUFGSDtBQUdMUyxlQUFPLEVBQUUsaUJBQVVDLFFBQVYsRUFBb0I7QUFDM0IsY0FBSUEsUUFBUSxDQUFDa0QsTUFBVCxJQUFtQixTQUF2QixFQUFrQztBQUNoQ3VGLGtCQUFNLENBQUNFLE9BQVAsQ0FBZSxLQUFmLEVBQXNCQyxJQUF0QixDQUEyQk4sUUFBUSxDQUFDTyxJQUFULEdBQWdCLFdBQTNDOztBQUNBLGdCQUFJN0ksUUFBUSxDQUFDdUUsR0FBVCxJQUFnQixVQUFwQixFQUFnQztBQUM5QjhELG9CQUFNLENBQUNDLFFBQVAsQ0FBZ0JPLElBQWhCLEdBQXVCeEosbURBQXZCO0FBQ0Q7QUFDRjtBQUNGO0FBVkksT0FBUDtBQVlELEtBbEJEO0FBbUJELEdBeExvQjs7QUFDbkIsT0FBS3dILE9BQUwsR0FBZUEsT0FBZjtBQUNELEM7O0FBd0xILCtEQUFlLElBQUlELGtCQUFKLENBQXVCMUgsQ0FBQyxDQUFDLHdCQUFELENBQXhCLEVBQW9ENEosS0FBcEQsRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7QUMvTE8sSUFBTVosT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQzdCLEtBQUQsRUFBUTJCLEdBQVIsRUFBYWUsSUFBYixFQUFzQjtBQUMzQyxNQUFJMUMsS0FBSyxDQUFDL0UsS0FBTixJQUFlK0UsS0FBSyxDQUFDL0UsS0FBTixDQUFZLENBQVosQ0FBbkIsRUFBbUM7QUFDakMsUUFBSTBILE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWI7O0FBQ0FELFVBQU0sQ0FBQ0UsTUFBUCxHQUFnQixVQUFVdkIsQ0FBVixFQUFhO0FBQzNCSyxTQUFHLENBQUNQLElBQUosQ0FBUyxLQUFULEVBQWdCRSxDQUFDLENBQUN3QixNQUFGLENBQVNqRyxNQUF6QjtBQUNBNkYsVUFBSSxDQUFDSyxHQUFMLENBQVM7QUFDUEMsZUFBTyxFQUFFO0FBREYsT0FBVDtBQUdELEtBTEQ7O0FBTUFMLFVBQU0sQ0FBQ00sYUFBUCxDQUFxQmpELEtBQUssQ0FBQy9FLEtBQU4sQ0FBWSxDQUFaLENBQXJCO0FBQ0Q7QUFDRixDQVhNLEMiLCJmaWxlIjoibGF6eWxvYWQvanMvYWRtaW4vbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCQVNFX1VSTCwgaXNJRSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuLy9kaXNwbGF5IGFsbCBkZXRhaWxzXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsRGV0YWlscyhkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgdXNlcjogZGF0YS51c2VyID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgc2Vzc2lvbl9pZDogZGF0YS5zZXNzaW9uX2lkID8gZGF0YS5zZXNzaW9uX2lkIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgICAgdG9rZW46IGRhdGEudG9rZW4gPyBkYXRhLnRva2VuIDogXCJcIixcclxuICAgICAgZnJtX25hbWU6IGRhdGEuZnJtX25hbWUgPyBkYXRhLmZybV9uYW1lIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL2VkaXQgZGF0YVxyXG5leHBvcnQgZnVuY3Rpb24gZWRpdEZvcm0oZGF0YSwgZ2VzdGlvbikge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YS5mb3JtRGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG4vL2Rpc3BsYXkgYWxsIEl0ZW1zXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsSXRlbXMoZGF0YSwgZ2VzdGlvbikge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgaWQ6IGRhdGEuaWQgIT0gXCJcIiA/IGRhdGEuaWQgOiBcIlwiLFxyXG4gICAgICBzdGFydDogMCxcclxuICAgICAgbWF4OiBkYXRhLm1heCAhPSBcIlwiID8gZGF0YS5tYXggOiBcIlwiLFxyXG4gICAgICB1c2VyOiBkYXRhLnVzZXIgIT0gXCJcIiA/IGRhdGEudXNlciA6IFwiXCIsXHJcbiAgICAgIHF1ZXJ5OiBkYXRhLnF1ZXJ5ICE9IFwiXCIgPyBkYXRhLnF1ZXJ5IDogXCJcIixcclxuICAgICAgcGFnZTogZGF0YS5wYWdlICE9IFwiXCIgPyBkYXRhLnBhZ2UgOiBcIlwiLFxyXG4gICAgICBwYWdpbmF0aW9uOiBkYXRhLnBhZ2luYXRpb24gIT0gXCJcIiA/IGRhdGEucGFnaW5hdGlvbiA6IFwiXCIsXHJcbiAgICAgIGRhdGFfdHlwZTogZGF0YS5kYXRhX3R5cGUgPyBkYXRhLmRhdGFfdHlwZSA6IFwiXCIsXHJcbiAgICAgIHJldHVybl9tb2RlOiBkYXRhLnJldHVybl9tb2RlID8gZGF0YS5yZXR1cm5fbW9kZSA6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vYWRkIEl0ZW1cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZChkYXRhLCBnZXN0aW9uKSB7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEuZnJtWzBdKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJ0YWJsZVwiLCBkYXRhLnRhYmxlKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJub3RpZmljYXRpb25cIiwgZGF0YS5ub3RpZmljYXRpb24pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImZybV9uYW1lXCIsIGRhdGEuZnJtX25hbWUpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwic3RhcnRfZGF0ZVwiKSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcInN0YXJ0X2RhdGVcIiwgZGF0YS5zdGFydF9kYXRlKTtcclxuICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImVuZF9kYXRlXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZW5kX2RhdGVcIiwgZGF0YS5lbmRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJpbWFnZVVybHNBcnlcIikpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVVybHNBcnlcIiwgZGF0YS5pbWFnZVVybHNBcnkpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwic2VsZWN0MlwiKSkgZm9ybURhdGEuYXBwZW5kKFwic2VsZWN0MlwiLCBkYXRhLnNlbGVjdDIpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiY2F0ZWdvcmllXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY3VzdG9tX2NhdGVnb3JpZVwiLCBkYXRhLmNhdGVnb3JpZSk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJmaWxlc1wiKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChkYXRhLmZpbGVzW2ldLm5hbWUsIGRhdGEuZmlsZXNbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcInNlbGVjdDJcIikpIHtcclxuICAgICQoZGF0YS5zZWxlY3QyKS5lYWNoKGZ1bmN0aW9uIChrZXksIHZhbCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuLy91cGRhdGVcclxuZXhwb3J0IGZ1bmN0aW9uIENhbGxfY29udHJvbGxlcihkYXRhLCBnZXN0aW9uKSB7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEuZnJtWzBdKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJmcm1fbmFtZVwiLCBkYXRhLmZybV9uYW1lKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJpc0lFXCIsIGlzSUUoKSk7XHJcbiAgaWYgKGRhdGEudGFibGUpIGZvcm1EYXRhLmFwcGVuZChcInRhYmxlXCIsIGRhdGEudGFibGUpO1xyXG4gIGlmIChkYXRhLm5vdGlmaWNhdGlvbikgZm9ybURhdGEuYXBwZW5kKFwibm90aWZpY2F0aW9uXCIsIGRhdGEubm90aWZpY2F0aW9uKTtcclxuICBpZiAoZGF0YS51cmxfZGF0YSkgZm9ybURhdGEuYXBwZW5kKFwidXJsX2RhdGFcIiwgZGF0YS51cmxfZGF0YSk7XHJcbiAgaWYgKGRhdGEuYWN0aW9uKSBmb3JtRGF0YS5hcHBlbmQoXCJhY3Rpb25cIiwgZGF0YS5hY3Rpb24pO1xyXG4gIGlmIChkYXRhLmltYWdlVXJsc0FyeSkgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VVcmxzQXJ5XCIsIGRhdGEuaW1hZ2VVcmxzQXJ5KTtcclxuICBpZiAoZGF0YS5mcmVlZGF0YSkgZm9ybURhdGEuYXBwZW5kKFwiZnJlZWRhdGFcIiwgZGF0YS5mcmVlZGF0YSk7XHJcbiAgaWYgKGRhdGEuc3RhcnRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwic3RhcnRfZGF0ZVwiLCBkYXRhLnN0YXJ0X2RhdGUpO1xyXG4gIGlmIChkYXRhLmVuZF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJlbmRfZGF0ZVwiLCBkYXRhLmVuZF9kYXRlKTtcclxuICBpZiAoZGF0YS5pZCkgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgZGF0YS5pZCk7XHJcbiAgaWYgKGRhdGEudXNlcl9pZCkgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgZGF0YS51c2VyX2lkKTtcclxuICBpZiAoZGF0YS5tZXRob2QpIGZvcm1EYXRhLmFwcGVuZChcIm1ldGhvZFwiLCBkYXRhLm1ldGhvZCk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJzZWxlY3QyXCIpKSB7XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhLnNlbGVjdDIpKSB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiY2F0ZWdvcmllXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY3VzdG9tX2NhdGVnb3JpZVwiLCBkYXRhLmNhdGVnb3JpZSk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJ0Ymxfb3B0aW9uc1wiKSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcInRibF9vcHRpb25zXCIsIGRhdGEudGJsX29wdGlvbnMpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiZmlsZXNcIikpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoZGF0YS5maWxlc1tpXS5uYW1lLCBkYXRhLmZpbGVzW2ldKTtcclxuICAgIH1cclxuICB9XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG4vL2RlbGV0ZVxyXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlKGRhdGEsIGRpc3BsYXlJdGVtKSB7XHJcbiAgY2hlY2tCZWZvcmVEZWxldGUoZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YTogZGF0YS5zZXJ2ZXJEYXRhLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgZGlzcGxheUl0ZW0ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4vL2Z1bmN0aW9uIGNoZWNrIGJlZm9yZSBkZWxldGVcclxuZnVuY3Rpb24gY2hlY2tCZWZvcmVEZWxldGUoZGF0YSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBpZiAoIWRhdGEudXJsX2NoZWNrKSB7XHJcbiAgICAgIGNvbnN0IGh0bWwgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaHR3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpZiAoZGF0YS5zd2FsX21lc3NhZ2UpIHtcclxuICAgICAgICAgIHJldHVybiAoaHR3LmlubmVySFRNTCA9IGRhdGEuc3dhbF9tZXNzYWdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIChodHcuaW5uZXJIVE1MID0gXCI8cD5Zb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyE8L3A+XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgZGF0YS5zd2FsXHJcbiAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgIGh0bWw6IGh0bWwoKSxcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogZGF0YS5zd2FsX2J1dHRvbiA/IGRhdGEuc3dhbF9idXR0b24gOiBcIkRlbGV0ZSFcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybF9jaGVjayxcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGRhdGE6IGRhdGEuc2VydmVyRGF0YSxcclxuICAgICAgfSlcclxuICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGRhdGEuc3dhbFxyXG4gICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgaHRtbDogXCI8cD5Zb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyE8L3A+XCIgKyByZXNwb25zZS5tc2csXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiRGVsZXRlIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU11bHRpc2VsbGVjdChkYXRhKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBcImZvcm1zL2ZpbGxNdWx0aXNlbGVjdFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgZGF0YS5kaXNwbGF5SUQuYXBwZW5kKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YS5hbGVydElELmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhdGVnb3JyaWUoY2F0RmllbGQsIGFsZXJ0SUQpIHtcclxuICBsZXQgY2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXRGaWVsZCk7XHJcbiAgaWYgKGNhdC52YWx1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgYWxlcnQoXCJMZSBjaGFtcHMgY2F0w6lnb3JpZSBlc3QgdmlkZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIFwiZm9ybXMvYWRkY2F0ZWdvcmllXCIsXHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjYXRlZ29yaWU6IGNhdC52YWx1ZSxcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlICE9IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAkKGFsZXJ0SUQpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0MkFqYXhQYXJhbXMoZGF0YSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICB0eXBlOiBcInBvc3RcIixcclxuICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgIGRlbGF5OiAyNTAsXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VhcmNoVGVybTogcGFyYW1zLnRlcm0sIC8vIHNlYXJjaCB0ZXJtXHJcbiAgICAgICAgdGFibGU6IGRhdGEudGFibGUgIT0gXCJcIiA/IGRhdGEudGFibGUgOiBcIlwiLFxyXG4gICAgICAgIGRhdGFfdHlwZTogZGF0YS5kYXRhX3R5cGUgIT0gXCJcIiA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgICBwYXJlbnRJRDogZGF0YS5wYXJlbnRJRCAhPSBcIlwiID8gZGF0YS5wYXJlbnRJRCA6IFwiXCIsXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgcHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHJlc3VsdHM6ICQubWFwKHJlc3BvbnNlLm1zZywgZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICBpZiAob2JqLmlkICE9IDApIHtcclxuICAgICAgICAgICAgICByZXR1cm4geyBpZDogb2JqLmlkLCB0ZXh0OiBvYmoudGV4dCB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBvYmouaWQsIHRleHQ6IG9iai50ZXh0IH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjYWNoZTogdHJ1ZSxcclxuICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBDYWxsKGRhdGEpIHtcclxuICBsZXQgZHQgPSBuZXcgRm9ybURhdGEoKTtcclxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhLnBhcmFtcykpIHtcclxuICAgIGR0LmFwcGVuZChrZXksIHZhbHVlKTtcclxuICB9XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICBkYXRhOiBkdCxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge30sXHJcbiAgfSk7XHJcbn1cclxuIiwiY2xhc3MgSW5wdXRfTWFuYWdlciB7XHJcbiAgcmVzZXRfaW52YWxpZF9pbnB1dCA9IChmb3JtKSA9PiB7XHJcbiAgICBmb3JtLmZpbmQoXCIuaXMtaW52YWxpZFwiKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICBmb3JtLmZpbmQoXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG4gIH07XHJcbiAgLy9yZW1vdmUgaW52YWxpZCBpbnB1dCBvbiBmb2N1c1xyXG4gIHJlbW92ZUludmFsaWRJbnB1dChNeWZvcm0pIHtcclxuICAgIE15Zm9ybS5vbihcImZvY3VzXCIsIFwiaW5wdXQsdGV4dGFyZWEsIC5jaywgLm5vdGUtZWRpdG9yXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGVycm9yID0gKGZvcm0sIElucHV0RXJyKSA9PiB7XHJcbiAgICB2YXIgYXJyRXJyID0gW107XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhJbnB1dEVycikpIHtcclxuICAgICAgdmFyIGlucHV0ID0gZm9ybS5maW5kKFwiI1wiICsga2V5KS5hZGRDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICAgIGlucHV0LnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbCh2YWx1ZSk7XHJcbiAgICAgIGFyckVyci5wdXNoKGtleSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyRXJyO1xyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IElucHV0X01hbmFnZXIoKTtcclxuIiwiaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiY29yZWpzL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBZGQsIENhbGxfY29udHJvbGxlciB9IGZyb20gXCJjb3JlanMvZm9ybV9jcnVkXCI7XHJcbmltcG9ydCBpbnB1dCBmcm9tIFwiY29yZWpzL2lucHV0RXJyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyByZWFkdXJsIH0gZnJvbSBcImNvcmVqcy9wcm9maWxlX2ltZ1wiO1xyXG5jbGFzcyBMb2dpbl9BbmRfUmVnaXN0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG4gIF9pbml0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fc2V0dXBWYXJpYWJsZXMoKTtcclxuICAgIHRoaXMuX3NldHVwRXZlbnRzKCk7XHJcbiAgfTtcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy9TZXR1cCB2YXJpYWJsZXNcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgX3NldHVwVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5sb2dib3ggPSB0aGlzLmVsZW1lbnQuZmluZChcIiNsb2dpbi1ib3hcIik7XHJcbiAgICB0aGlzLmxvZ2luZnJtID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjbG9naW4tZnJtXCIpO1xyXG4gICAgdGhpcy5yZWdib3ggPSB0aGlzLmVsZW1lbnQuZmluZChcIiNyZWdpc3Rlci1ib3hcIik7XHJcbiAgICB0aGlzLnJlZ2ZybSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3JlZ2lzdGVyLWZybVwiKTtcclxuICAgIHRoaXMuZm9yZ290Ym94ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjZm9yZ290LWJveFwiKTtcclxuICAgIHRoaXMuZm9yZ290ZnJtID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjZm9yZ290LWZybVwiKTtcclxuICB9O1xyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvL1NldHVwIGV2ZW50c1xyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBfc2V0dXBFdmVudHMgPSAoKSA9PiB7XHJcbiAgICB2YXIgcGhwTFIgPSB0aGlzO1xyXG4gICAgLy9yZWZyZXNoIGxvZ2luICYgcmVnaXN0ZXIgZnJtIG9uIGhpZGUgYW5kIHNob3dcclxuICAgIHBocExSLmxvZ2JveC5vbihcImhpZGUuYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAocGhwTFIubG9naW5mcm0uZmluZChcIi5pcy1pbnZhbGlkXCIpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgaW5wdXQucmVzZXRfaW52YWxpZF9pbnB1dChwaHBMUi5sb2dpbmZybSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9SZXNldCByZWdpc3RlciBmb3JtIGludmFsaWQgaW5wdXQgb24gaGlkZSBtb2RhbFxyXG4gICAgcGhwTFIucmVnYm94Lm9uKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChwaHBMUi5yZWdmcm0uZmluZChcIi5pcy1pbnZhbGlkXCIpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgaW5wdXQucmVzZXRfaW52YWxpZF9pbnB1dChwaHBMUi5yZWdmcm0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vUmVzZXQgcmVnaXN0ZXIgZm9ybSBvbiBzaG93blxyXG4gICAgcGhwTFIucmVnYm94Lm9uKFwic2hvdy5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHBocExSLnJlZ2ZybS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgIHBocExSLnJlZ2ZybS5maW5kKFwiI3JlZ0FsZXJ0XCIpLmh0bWwoXCJcIik7XHJcbiAgICB9KTtcclxuICAgIC8vcmVtb3ZlIGludmFsaWQgaW5wdXQgb24gZm9jdXMgcmVnaXN0ZXJcclxuICAgIHBocExSLnJlZ2ZybS5vbihcImZvY3VzXCIsIFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwoXCJcIik7XHJcbiAgICB9KTtcclxuICAgIC8vcmVtb3ZlIGludmFsaWQgaW5wdXQgb24gZm9jdXMgbG9naW5cclxuICAgIHBocExSLmxvZ2luZnJtLm9uKFwiZm9jdXNcIiwgXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxuICAgIH0pO1xyXG4gICAgLy9yZXNldCBmb3Jnb3QgcGFzc3dvcmQgZnJtXHJcbiAgICBwaHBMUi5mb3Jnb3Rib3gub24oXCJoaWRlLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcGhwTFIuZm9yZ290ZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgIH0pO1xyXG4gICAgLy9GaWxsIGluIGxvZ2luIGZyb20gY29va2llcyBvbiBzaG9ud1xyXG4gICAgcGhwTFIubG9nYm94Lm9uKFwic2hvd24uYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogQkFTRV9VUkwgKyBcImF1dGgvcmVtZW1iZXJfY2hlY2tcIixcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNlbWFpbFwiKS52YWwocmVzcG9uc2UubXNnLmVtYWlsKTtcclxuICAgICAgICAgICAgcGhwTFIubG9naW5mcm1cclxuICAgICAgICAgICAgICAuZmluZChcIiNjdXN0b21DaGVja1wiKVxyXG4gICAgICAgICAgICAgIC5hdHRyKFwiY2hlY2tlZFwiLCByZXNwb25zZS5tc2cucmVtZW1iZXIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNlbWFpbFwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjcGFzc3dvcmRcIikudmFsKFwiXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvL1JlZ2lzdGVyIGZvcm1cclxuICAgIHBocExSLnJlZ2ZybS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHBocExSLnJlZ2ZybS5maW5kKFwiI3JlZ2lzdGVyLWJ0blwiKS52YWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgICAgdmFyIGlucHV0RGF0YSA9IHtcclxuICAgICAgICB1cmw6IFwiYXV0aC9hamF4UmVnaXN0ZXJcIixcclxuICAgICAgICBmcm06IHBocExSLnJlZ2ZybSxcclxuICAgICAgICB0YWJsZTogXCJhdXRoXCIsXHJcbiAgICAgICAgbm90aWZpY2F0aW9uOiBcImFkbWluXCIsXHJcbiAgICAgICAgZnJtX25hbWU6IFwicmVnaXN0ZXItZnJtXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIEFkZChpbnB1dERhdGEsIGdlc3Rpb25SKTtcclxuICAgICAgZnVuY3Rpb24gZ2VzdGlvblIocmVzcG9uc2UpIHtcclxuICAgICAgICBwaHBMUi5yZWdmcm0uZmluZChcIiNyZWdpc3Rlci1idG5cIikudmFsKFwiRW5yZWdpc3RyZXJcIik7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgcGhwTFIucmVnYm94XHJcbiAgICAgICAgICAgIC5maW5kKFwiLnVwbG9hZC1wcm9maWxlLWltYWdlIC5pbWdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJzcmNcIiwgcmVzcG9uc2UuaW1nID8gcmVzcG9uc2UuaW1nIDogXCJcIik7XHJcbiAgICAgICAgICBwaHBMUi5yZWdmcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICAgICAgcGhwTFIucmVnYm94LmZpbmQoXCIuaW5wdXQtZ3JvdXBcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICBwaHBMUi5yZWdmcm0uZmluZChcIiNyZWdBbGVydFwiKS5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJlcnJvci1maWVsZFwiKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmVycm9yKHBocExSLmxvZ2luZnJtLCByZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbkFsZXJ0XCIpLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9yZWFkIHByb2ZpbGUgaW1hZ2Ugb24gY2hhbmdlXHJcbiAgICBwaHBMUi5yZWdib3hcclxuICAgICAgLmZpbmQoJy51cGxvYWQtcHJvZmlsZS1pbWFnZSBpbnB1dFt0eXBlPVwiZmlsZVwiXScpXHJcbiAgICAgIC5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVhZHVybChcclxuICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICBwaHBMUi5yZWdib3guZmluZChcIi51cGxvYWQtcHJvZmlsZS1pbWFnZSAuaW1nXCIpLFxyXG4gICAgICAgICAgcGhwTFIucmVnYm94LmZpbmQoXCIudXBsb2FkLXByb2ZpbGUtaW1hZ2UgLmNhbWVyYS1pY29uXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICAvL0xvZ2luIGZvcm1cclxuICAgIHBocExSLmxvZ2luZnJtLm9uKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbi1idG5cIikudmFsKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHVybDogXCJhdXRoL2FqYXhMb2dpblwiLFxyXG4gICAgICAgIGZybTogcGhwTFIubG9naW5mcm0sXHJcbiAgICAgICAgZnJtX25hbWU6IFwibG9naW4tZnJtXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBNYW5hZ2VMb2dpblJlc3BvbnNlKTtcclxuICAgICAgLy9tYW5hZ2UgbG9naW4gUmVzcG9uc2VcclxuICAgICAgZnVuY3Rpb24gTWFuYWdlTG9naW5SZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjbG9naW4tYnRuXCIpLnZhbChcIkxvZ2luXCIpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIHBocExSLmxvZ2luZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgICAgIHBocExSLmxvZ2JveC5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJlcnJvci1maWVsZFwiKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmVycm9yKHBocExSLmxvZ2luZnJtLCByZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbkFsZXJ0XCIpLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9Gb3Jnb3QgcGFzc3dvcmQgcmVxdWVzdFxyXG4gICAgcGhwTFIuZm9yZ290ZnJtLm9uKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcGhwTFIuZm9yZ290ZnJtLmZpbmQoXCIjZm9yZ290LWJ0blwiKS52YWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgdXJsOiBcImF1dGgvZm9yZ290XCIsXHJcbiAgICAgICAgZnJtOiBwaHBMUi5mb3Jnb3Rmcm0sXHJcbiAgICAgICAgZnJtX25hbWU6IFwiZm9yZ290LWZybVwiLFxyXG4gICAgICB9O1xyXG4gICAgICBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgTVJlc3BvbnNlKTtcclxuICAgICAgZnVuY3Rpb24gTVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcGhwTFIuZm9yZ290ZnJtLmZpbmQoXCIjZm9yZ290LWJ0blwiKS52YWwoXCJSZXNldCBwYXNzd29yZFwiKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBwaHBMUi5mb3Jnb3Rmcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICAgICAgcGhwTFIuZm9yZ290ZnJtLmZpbmQoXCIjcmVnQWxlcnRcIikuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwiZXJyb3ItZmllbGRcIikge1xyXG4gICAgICAgICAgICBpbnB1dC5lcnJvcihwaHBMUi5sb2dpbmZybSwgcmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjbG9naW5BbGVydFwiKS5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vbG9nb3V0XHJcbiAgICB2YXIgbG9nb3V0ID0gJChcImE6Y29udGFpbnMoJ0xvZ291dCcpXCIpO1xyXG4gICAgJChsb2dvdXQpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodHlwZW9mIEZCICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgRkIubG9nb3V0KCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIC8vIGxvZ2dlZCBvdXRcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogQkFTRV9VUkwgKyBcImF1dGgvbG9nb3V0XCIsXHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgbG9nb3V0LmNsb3Nlc3QoXCJkaXZcIikubG9hZChsb2NhdGlvbi5ocmVmICsgXCIgLmNvbm5lY3RcIik7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5tc2cgPT0gXCJyZWRpcmVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBCQVNFX1VSTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9naW5fQW5kX1JlZ2lzdGVyKCQoXCIjTG9naW4tUmVnaXN0ZXItU3lzdGVtXCIpKS5faW5pdCgpO1xyXG4iLCJleHBvcnQgY29uc3QgcmVhZHVybCA9IChpbnB1dCwgaW1nLCBpY29uKSA9PiB7XHJcbiAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpbWcuYXR0cihcInNyY1wiLCBlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICBpY29uLmNzcyh7XHJcbiAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcclxuICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=