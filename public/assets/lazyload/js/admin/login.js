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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./config */ "./src/assets/js/core/config.js");
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
    url: _config__WEBPACK_IMPORTED_MODULE_15__.BASE_URL + data.url,
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
    url: _config__WEBPACK_IMPORTED_MODULE_15__.BASE_URL + data.url,
    method: "post",
    data: data.formData,
    success: function success(response) {
      gestion(response, data.params ? data.params : "");
    }
  });
} //display all Items

function displayAllItems(data, gestion) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_15__.BASE_URL + data.url,
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
    url: _config__WEBPACK_IMPORTED_MODULE_15__.BASE_URL + data.url,
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
  formData.append("isIE", (0,_config__WEBPACK_IMPORTED_MODULE_15__.isIE)());
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
    url: _config__WEBPACK_IMPORTED_MODULE_15__.BASE_URL + data.url,
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
        url: _config__WEBPACK_IMPORTED_MODULE_15__.BASE_URL + data.url,
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
        url: _config__WEBPACK_IMPORTED_MODULE_15__.BASE_URL + data.url_check,
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
    url: _config__WEBPACK_IMPORTED_MODULE_15__.BASE_URL + "forms/fillMultiselect",
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
      url: _config__WEBPACK_IMPORTED_MODULE_15__.BASE_URL + "forms/addcategorie",
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
    url: _config__WEBPACK_IMPORTED_MODULE_15__.BASE_URL + _data.url,
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
    url: _config__WEBPACK_IMPORTED_MODULE_15__.BASE_URL + data.url,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvZm9ybV9jcnVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9pbnB1dEVyck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2xvZ2luX3JlZ2lzdGVyLmNsYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9wcm9maWxlX2ltZy5qcyJdLCJuYW1lcyI6WyJkaXNwbGF5QWxsRGV0YWlscyIsImRhdGEiLCJnZXN0aW9uIiwiJCIsImFqYXgiLCJ1cmwiLCJCQVNFX1VSTCIsIm1ldGhvZCIsInRhYmxlIiwiaWQiLCJ1c2VyIiwic2Vzc2lvbl9pZCIsImRhdGFfdHlwZSIsInJldHVybl9tb2RlIiwidG9rZW4iLCJmcm1fbmFtZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInBhcmFtcyIsImVkaXRGb3JtIiwiZm9ybURhdGEiLCJkaXNwbGF5QWxsSXRlbXMiLCJzdGFydCIsIm1heCIsInF1ZXJ5IiwicGFnZSIsInBhZ2luYXRpb24iLCJBZGQiLCJGb3JtRGF0YSIsImZybSIsImFwcGVuZCIsIm5vdGlmaWNhdGlvbiIsImhhc093blByb3BlcnR5Iiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwiaW1hZ2VVcmxzQXJ5Iiwic2VsZWN0MiIsImNhdGVnb3JpZSIsImkiLCJmaWxlcyIsImxlbmd0aCIsIm5hbWUiLCJlYWNoIiwia2V5IiwidmFsIiwiY29uc29sZSIsImxvZyIsImNhY2hlIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsIkNhbGxfY29udHJvbGxlciIsImlzSUUiLCJ1cmxfZGF0YSIsImFjdGlvbiIsImZyZWVkYXRhIiwidXNlcl9pZCIsIk9iamVjdCIsImVudHJpZXMiLCJ2YWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0Ymxfb3B0aW9ucyIsImRhdGFUeXBlIiwiRGVsZXRlIiwiZGlzcGxheUl0ZW0iLCJjaGVja0JlZm9yZURlbGV0ZSIsInRoZW4iLCJyZXN1bHQiLCJzZXJ2ZXJEYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cmxfY2hlY2siLCJodG1sIiwiaHR3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3dhbF9tZXNzYWdlIiwiaW5uZXJIVE1MIiwic3dhbCIsImZpcmUiLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0Iiwic3dhbF9idXR0b24iLCJkb25lIiwibXNnIiwiZmFpbCIsImVycm9yIiwiZGlzcGxheU11bHRpc2VsbGVjdCIsImRpc3BsYXlJRCIsImFsZXJ0SUQiLCJhZGRDYXRlZ29ycmllIiwiY2F0RmllbGQiLCJjYXQiLCJxdWVyeVNlbGVjdG9yIiwiYWxlcnQiLCJzZWxlY3QyQWpheFBhcmFtcyIsInR5cGUiLCJkZWxheSIsInNlYXJjaFRlcm0iLCJ0ZXJtIiwicGFyZW50SUQiLCJwcm9jZXNzUmVzdWx0cyIsInJlc3VsdHMiLCJtYXAiLCJvYmoiLCJ0ZXh0IiwiQ2FsbCIsImR0IiwiSW5wdXRfTWFuYWdlciIsImZvcm0iLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJJbnB1dEVyciIsImFyckVyciIsImlucHV0IiwiYWRkQ2xhc3MiLCJwYXJlbnQiLCJjaGlsZHJlbiIsInB1c2giLCJNeWZvcm0iLCJvbiIsIkxvZ2luX0FuZF9SZWdpc3RlciIsImVsZW1lbnQiLCJfc2V0dXBWYXJpYWJsZXMiLCJfc2V0dXBFdmVudHMiLCJsb2dib3giLCJsb2dpbmZybSIsInJlZ2JveCIsInJlZ2ZybSIsImZvcmdvdGJveCIsImZvcmdvdGZybSIsInBocExSIiwidHJpZ2dlciIsImVtYWlsIiwiYXR0ciIsInJlbWVtYmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaW5wdXREYXRhIiwiZ2VzdGlvblIiLCJpbWciLCJyZW1vdmUiLCJyZWFkdXJsIiwiTWFuYWdlTG9naW5SZXNwb25zZSIsIm1vZGFsIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJNUmVzcG9uc2UiLCJsb2dvdXQiLCJGQiIsImNsb3Nlc3QiLCJsb2FkIiwiaHJlZiIsIl9pbml0IiwiaWNvbiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0YXJnZXQiLCJjc3MiLCJkaXNwbGF5IiwicmVhZEFzRGF0YVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNPLFNBQVNBLGlCQUFULENBQTJCQyxJQUEzQixFQUFpQ0MsT0FBakMsRUFBMEM7QUFDL0NDLEdBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsOENBQVEsR0FBR0wsSUFBSSxDQUFDSSxHQURoQjtBQUVMRSxVQUFNLEVBQUUsTUFGSDtBQUdMTixRQUFJLEVBQUU7QUFDSk8sV0FBSyxFQUFFUCxJQUFJLENBQUNPLEtBRFI7QUFFSkMsUUFBRSxFQUFFUixJQUFJLENBQUNRLEVBRkw7QUFHSkMsVUFBSSxFQUFFVCxJQUFJLENBQUNTLElBQUwsR0FBWVQsSUFBSSxDQUFDUyxJQUFqQixHQUF3QixFQUgxQjtBQUlKQyxnQkFBVSxFQUFFVixJQUFJLENBQUNVLFVBQUwsR0FBa0JWLElBQUksQ0FBQ1UsVUFBdkIsR0FBb0MsRUFKNUM7QUFLSkMsZUFBUyxFQUFFWCxJQUFJLENBQUNXLFNBQUwsR0FBaUJYLElBQUksQ0FBQ1csU0FBdEIsR0FBa0MsRUFMekM7QUFNSkMsaUJBQVcsRUFBRVosSUFBSSxDQUFDWSxXQUFMLEdBQW1CWixJQUFJLENBQUNZLFdBQXhCLEdBQXNDLEVBTi9DO0FBT0pDLFdBQUssRUFBRWIsSUFBSSxDQUFDYSxLQUFMLEdBQWFiLElBQUksQ0FBQ2EsS0FBbEIsR0FBMEIsRUFQN0I7QUFRSkMsY0FBUSxFQUFFZCxJQUFJLENBQUNjLFFBQUws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RUFBc0I7QUFDM0MsTUFBSTFDLEtBQUssQ0FBQy9FLEtBQU4sSUFBZStFLEtBQUssQ0FBQy9FLEtBQU4sQ0FBWSxDQUFaLENBQW5CLEVBQW1DO0FBQ2pDLFFBQUkwSCxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFiOztBQUNBRCxVQUFNLENBQUNFLE1BQVAsR0FBZ0IsVUFBVXZCLENBQVYsRUFBYTtBQUMzQkssU0FBRyxDQUFDUCxJQUFKLENBQVMsS0FBVCxFQUFnQkUsQ0FBQyxDQUFDd0IsTUFBRixDQUFTakcsTUFBekI7QUFDQTZGLFVBQUksQ0FBQ0ssR0FBTCxDQUFTO0FBQ1BDLGVBQU8sRUFBRTtBQURGLE9BQVQ7QUFHRCxLQUxEOztBQU1BTCxVQUFNLENBQUNNLGFBQVAsQ0FBcUJqRCxLQUFLLENBQUMvRSxLQUFOLENBQVksQ0FBWixDQUFyQjtBQUNEO0FBQ0YsQ0FYTSxDIiwiZmlsZSI6Imxhenlsb2FkL2pzL2FkbWluL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyYW0gfSBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCB7IEJBU0VfVVJMLCBpc0lFIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG4vL2Rpc3BsYXkgYWxsIGRldGFpbHNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxEZXRhaWxzKGRhdGEsIGdlc3Rpb24pIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICB1c2VyOiBkYXRhLnVzZXIgPyBkYXRhLnVzZXIgOiBcIlwiLFxyXG4gICAgICBzZXNzaW9uX2lkOiBkYXRhLnNlc3Npb25faWQgPyBkYXRhLnNlc3Npb25faWQgOiBcIlwiLFxyXG4gICAgICBkYXRhX3R5cGU6IGRhdGEuZGF0YV90eXBlID8gZGF0YS5kYXRhX3R5cGUgOiBcIlwiLFxyXG4gICAgICByZXR1cm5fbW9kZTogZGF0YS5yZXR1cm5fbW9kZSA/IGRhdGEucmV0dXJuX21vZGUgOiBcIlwiLFxyXG4gICAgICB0b2tlbjogZGF0YS50b2tlbiA/IGRhdGEudG9rZW4gOiBcIlwiLFxyXG4gICAgICBmcm1fbmFtZTogZGF0YS5mcm1fbmFtZSA/IGRhdGEuZnJtX25hbWUgOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbi8vZWRpdCBkYXRhXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0Rm9ybShkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLmZvcm1EYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vZGlzcGxheSBhbGwgSXRlbXNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxJdGVtcyhkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCAhPSBcIlwiID8gZGF0YS5pZCA6IFwiXCIsXHJcbiAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICBtYXg6IGRhdGEubWF4ICE9IFwiXCIgPyBkYXRhLm1heCA6IFwiXCIsXHJcbiAgICAgIHVzZXI6IGRhdGEudXNlciAhPSBcIlwiID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgcXVlcnk6IGRhdGEucXVlcnkgIT0gXCJcIiA/IGRhdGEucXVlcnkgOiBcIlwiLFxyXG4gICAgICBwYWdlOiBkYXRhLnBhZ2UgIT0gXCJcIiA/IGRhdGEucGFnZSA6IFwiXCIsXHJcbiAgICAgIHBhZ2luYXRpb246IGRhdGEucGFnaW5hdGlvbiAhPSBcIlwiID8gZGF0YS5wYWdpbmF0aW9uIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuLy9hZGQgSXRlbVxyXG5leHBvcnQgZnVuY3Rpb24gQWRkKGRhdGEsIGdlc3Rpb24pIHtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZGF0YS5mcm1bMF0pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcInRhYmxlXCIsIGRhdGEudGFibGUpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcIm5vdGlmaWNhdGlvblwiLCBkYXRhLm5vdGlmaWNhdGlvbik7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwiZnJtX25hbWVcIiwgZGF0YS5mcm1fbmFtZSk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJzdGFydF9kYXRlXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwic3RhcnRfZGF0ZVwiLCBkYXRhLnN0YXJ0X2RhdGUpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiZW5kX2RhdGVcIikpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJlbmRfZGF0ZVwiLCBkYXRhLmVuZF9kYXRlKTtcclxuICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImltYWdlVXJsc0FyeVwiKSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlVXJsc0FyeVwiLCBkYXRhLmltYWdlVXJsc0FyeSk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJzZWxlY3QyXCIpKSBmb3JtRGF0YS5hcHBlbmQoXCJzZWxlY3QyXCIsIGRhdGEuc2VsZWN0Mik7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJjYXRlZ29yaWVcIikpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJjdXN0b21fY2F0ZWdvcmllXCIsIGRhdGEuY2F0ZWdvcmllKTtcclxuICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImZpbGVzXCIpKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKGRhdGEuZmlsZXNbaV0ubmFtZSwgZGF0YS5maWxlc1tpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwic2VsZWN0MlwiKSkge1xyXG4gICAgJChkYXRhLnNlbGVjdDIpLmVhY2goZnVuY3Rpb24gKGtleSwgdmFsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCB2YWwpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICBjYWNoZTogZmFsc2UsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL3VwZGF0ZVxyXG5leHBvcnQgZnVuY3Rpb24gQ2FsbF9jb250cm9sbGVyKGRhdGEsIGdlc3Rpb24pIHtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZGF0YS5mcm1bMF0pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImZybV9uYW1lXCIsIGRhdGEuZnJtX25hbWUpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImlzSUVcIiwgaXNJRSgpKTtcclxuICBpZiAoZGF0YS50YWJsZSkgZm9ybURhdGEuYXBwZW5kKFwidGFibGVcIiwgZGF0YS50YWJsZSk7XHJcbiAgaWYgKGRhdGEubm90aWZpY2F0aW9uKSBmb3JtRGF0YS5hcHBlbmQoXCJub3RpZmljYXRpb25cIiwgZGF0YS5ub3RpZmljYXRpb24pO1xyXG4gIGlmIChkYXRhLnVybF9kYXRhKSBmb3JtRGF0YS5hcHBlbmQoXCJ1cmxfZGF0YVwiLCBkYXRhLnVybF9kYXRhKTtcclxuICBpZiAoZGF0YS5hY3Rpb24pIGZvcm1EYXRhLmFwcGVuZChcImFjdGlvblwiLCBkYXRhLmFjdGlvbik7XHJcbiAgaWYgKGRhdGEuaW1hZ2VVcmxzQXJ5KSBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVVybHNBcnlcIiwgZGF0YS5pbWFnZVVybHNBcnkpO1xyXG4gIGlmIChkYXRhLmZyZWVkYXRhKSBmb3JtRGF0YS5hcHBlbmQoXCJmcmVlZGF0YVwiLCBkYXRhLmZyZWVkYXRhKTtcclxuICBpZiAoZGF0YS5zdGFydF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJzdGFydF9kYXRlXCIsIGRhdGEuc3RhcnRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuZW5kX2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcImVuZF9kYXRlXCIsIGRhdGEuZW5kX2RhdGUpO1xyXG4gIGlmIChkYXRhLmlkKSBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBkYXRhLmlkKTtcclxuICBpZiAoZGF0YS51c2VyX2lkKSBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBkYXRhLnVzZXJfaWQpO1xyXG4gIGlmIChkYXRhLm1ldGhvZCkgZm9ybURhdGEuYXBwZW5kKFwibWV0aG9kXCIsIGRhdGEubWV0aG9kKTtcclxuICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcInNlbGVjdDJcIikpIHtcclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEuc2VsZWN0MikpIHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJjYXRlZ29yaWVcIikpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJjdXN0b21fY2F0ZWdvcmllXCIsIGRhdGEuY2F0ZWdvcmllKTtcclxuICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcInRibF9vcHRpb25zXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwidGJsX29wdGlvbnNcIiwgZGF0YS50Ymxfb3B0aW9ucyk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJmaWxlc1wiKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChkYXRhLmZpbGVzW2ldLm5hbWUsIGRhdGEuZmlsZXNbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vZGVsZXRlXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGUoZGF0YSwgZGlzcGxheUl0ZW0pIHtcclxuICBjaGVja0JlZm9yZURlbGV0ZShkYXRhKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBkYXRhOiBkYXRhLnNlcnZlckRhdGEsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBkaXNwbGF5SXRlbShyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbi8vZnVuY3Rpb24gY2hlY2sgYmVmb3JlIGRlbGV0ZVxyXG5mdW5jdGlvbiBjaGVja0JlZm9yZURlbGV0ZShkYXRhKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGlmICghZGF0YS51cmxfY2hlY2spIHtcclxuICAgICAgY29uc3QgaHRtbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBodHcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGlmIChkYXRhLnN3YWxfbWVzc2FnZSkge1xyXG4gICAgICAgICAgcmV0dXJuIChodHcuaW5uZXJIVE1MID0gZGF0YS5zd2FsX21lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gKGh0dy5pbm5lckhUTUwgPSBcIjxwPllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzITwvcD5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBkYXRhLnN3YWxcclxuICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgaHRtbDogaHRtbCgpLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBkYXRhLnN3YWxfYnV0dG9uID8gZGF0YS5zd2FsX2J1dHRvbiA6IFwiRGVsZXRlIVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsX2NoZWNrLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YTogZGF0YS5zZXJ2ZXJEYXRhLFxyXG4gICAgICB9KVxyXG4gICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgZGF0YS5zd2FsXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBodG1sOiBcIjxwPllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzITwvcD5cIiArIHJlc3BvbnNlLm1zZyxcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJEZWxldGUhXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZhaWwoKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TXVsdGlzZWxsZWN0KGRhdGEpIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIFwiZm9ybXMvZmlsbE11bHRpc2VsZWN0XCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICBkYXRhLmRpc3BsYXlJRC5hcHBlbmQocmVzcG9uc2UubXNnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhLmFsZXJ0SUQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2F0ZWdvcnJpZShjYXRGaWVsZCwgYWxlcnRJRCkge1xyXG4gIGxldCBjYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhdEZpZWxkKTtcclxuICBpZiAoY2F0LnZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICBhbGVydChcIkxlIGNoYW1wcyBjYXTDqWdvcmllIGVzdCB2aWRlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IEJBU0VfVVJMICsgXCJmb3Jtcy9hZGRjYXRlZ29yaWVcIixcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNhdGVnb3JpZTogY2F0LnZhbHVlLFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UgIT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICQoYWxlcnRJRCkuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3QyQWpheFBhcmFtcyhkYXRhKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgZGVsYXk6IDI1MCxcclxuICAgIGRhdGE6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZWFyY2hUZXJtOiBwYXJhbXMudGVybSwgLy8gc2VhcmNoIHRlcm1cclxuICAgICAgICB0YWJsZTogZGF0YS50YWJsZSAhPSBcIlwiID8gZGF0YS50YWJsZSA6IFwiXCIsXHJcbiAgICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSAhPSBcIlwiID8gZGF0YS5kYXRhX3R5cGUgOiBcIlwiLFxyXG4gICAgICAgIHBhcmVudElEOiBkYXRhLnBhcmVudElEICE9IFwiXCIgPyBkYXRhLnBhcmVudElEIDogXCJcIixcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcmVzdWx0czogJC5tYXAocmVzcG9uc2UubXNnLCBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaWQgIT0gMCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBvYmouaWQsIHRleHQ6IG9iai50ZXh0IH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IG9iai5pZCwgdGV4dDogb2JqLnRleHQgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNhY2hlOiB0cnVlLFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENhbGwoZGF0YSkge1xyXG4gIGxldCBkdCA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEucGFyYW1zKSkge1xyXG4gICAgZHQuYXBwZW5kKGtleSwgdmFsdWUpO1xyXG4gIH1cclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgIGRhdGE6IGR0LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7fSxcclxuICB9KTtcclxufVxyXG4iLCJjbGFzcyBJbnB1dF9NYW5hZ2VyIHtcclxuICByZXNldF9pbnZhbGlkX2lucHV0ID0gKGZvcm0pID0+IHtcclxuICAgIGZvcm0uZmluZChcIi5pcy1pbnZhbGlkXCIpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgIGZvcm0uZmluZChcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwoXCJcIik7XHJcbiAgfTtcclxuICAvL3JlbW92ZSBpbnZhbGlkIGlucHV0IG9uIGZvY3VzXHJcbiAgcmVtb3ZlSW52YWxpZElucHV0KE15Zm9ybSkge1xyXG4gICAgTXlmb3JtLm9uKFwiZm9jdXNcIiwgXCJpbnB1dCx0ZXh0YXJlYSwgLmNrLCAubm90ZS1lZGl0b3JcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwoXCJcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZXJyb3IgPSAoZm9ybSwgSW5wdXRFcnIpID0+IHtcclxuICAgIHZhciBhcnJFcnIgPSBbXTtcclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKElucHV0RXJyKSkge1xyXG4gICAgICB2YXIgaW5wdXQgPSBmb3JtLmZpbmQoXCIjXCIgKyBrZXkpLmFkZENsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICAgaW5wdXQucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKHZhbHVlKTtcclxuICAgICAgYXJyRXJyLnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJFcnI7XHJcbiAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgSW5wdXRfTWFuYWdlcigpO1xyXG4iLCJpbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCJjb3JlanMvY29uZmlnXCI7XHJcbmltcG9ydCB7IEFkZCwgQ2FsbF9jb250cm9sbGVyIH0gZnJvbSBcImNvcmVqcy9mb3JtX2NydWRcIjtcclxuaW1wb3J0IGlucHV0IGZyb20gXCJjb3JlanMvaW5wdXRFcnJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHJlYWR1cmwgfSBmcm9tIFwiY29yZWpzL3Byb2ZpbGVfaW1nXCI7XHJcbmNsYXNzIExvZ2luX0FuZF9SZWdpc3RlciB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcbiAgX2luaXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9zZXR1cFZhcmlhYmxlcygpO1xyXG4gICAgdGhpcy5fc2V0dXBFdmVudHMoKTtcclxuICB9O1xyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvL1NldHVwIHZhcmlhYmxlc1xyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBfc2V0dXBWYXJpYWJsZXMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmxvZ2JveCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2xvZ2luLWJveFwiKTtcclxuICAgIHRoaXMubG9naW5mcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNsb2dpbi1mcm1cIik7XHJcbiAgICB0aGlzLnJlZ2JveCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3JlZ2lzdGVyLWJveFwiKTtcclxuICAgIHRoaXMucmVnZnJtID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjcmVnaXN0ZXItZnJtXCIpO1xyXG4gICAgdGhpcy5mb3Jnb3Rib3ggPSB0aGlzLmVsZW1lbnQuZmluZChcIiNmb3Jnb3QtYm94XCIpO1xyXG4gICAgdGhpcy5mb3Jnb3Rmcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNmb3Jnb3QtZnJtXCIpO1xyXG4gIH07XHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vU2V0dXAgZXZlbnRzXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIF9zZXR1cEV2ZW50cyA9ICgpID0+IHtcclxuICAgIHZhciBwaHBMUiA9IHRoaXM7XHJcbiAgICAvL3JlZnJlc2ggbG9naW4gJiByZWdpc3RlciBmcm0gb24gaGlkZSBhbmQgc2hvd1xyXG4gICAgcGhwTFIubG9nYm94Lm9uKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChwaHBMUi5sb2dpbmZybS5maW5kKFwiLmlzLWludmFsaWRcIikubGVuZ3RoICE9IDApIHtcclxuICAgICAgICBpbnB1dC5yZXNldF9pbnZhbGlkX2lucHV0KHBocExSLmxvZ2luZnJtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL1Jlc2V0IHJlZ2lzdGVyIGZvcm0gaW52YWxpZCBpbnB1dCBvbiBoaWRlIG1vZGFsXHJcbiAgICBwaHBMUi5yZWdib3gub24oXCJoaWRlLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHBocExSLnJlZ2ZybS5maW5kKFwiLmlzLWludmFsaWRcIikubGVuZ3RoICE9IDApIHtcclxuICAgICAgICBpbnB1dC5yZXNldF9pbnZhbGlkX2lucHV0KHBocExSLnJlZ2ZybSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9SZXNldCByZWdpc3RlciBmb3JtIG9uIHNob3duXHJcbiAgICBwaHBMUi5yZWdib3gub24oXCJzaG93LmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcGhwTFIucmVnZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgcGhwTFIucmVnZnJtLmZpbmQoXCIjcmVnQWxlcnRcIikuaHRtbChcIlwiKTtcclxuICAgIH0pO1xyXG4gICAgLy9yZW1vdmUgaW52YWxpZCBpbnB1dCBvbiBmb2N1cyByZWdpc3RlclxyXG4gICAgcGhwTFIucmVnZnJtLm9uKFwiZm9jdXNcIiwgXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxuICAgIH0pO1xyXG4gICAgLy9yZW1vdmUgaW52YWxpZCBpbnB1dCBvbiBmb2N1cyBsb2dpblxyXG4gICAgcGhwTFIubG9naW5mcm0ub24oXCJmb2N1c1wiLCBcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG4gICAgfSk7XHJcbiAgICAvL3Jlc2V0IGZvcmdvdCBwYXNzd29yZCBmcm1cclxuICAgIHBocExSLmZvcmdvdGJveC5vbihcImhpZGUuYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBwaHBMUi5mb3Jnb3Rmcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgfSk7XHJcbiAgICAvL0ZpbGwgaW4gbG9naW4gZnJvbSBjb29raWVzIG9uIHNob253XHJcbiAgICBwaHBMUi5sb2dib3gub24oXCJzaG93bi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIFwiYXV0aC9yZW1lbWJlcl9jaGVja1wiLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2VtYWlsXCIpLnZhbChyZXNwb25zZS5tc2cuZW1haWwpO1xyXG4gICAgICAgICAgICBwaHBMUi5sb2dpbmZybVxyXG4gICAgICAgICAgICAgIC5maW5kKFwiI2N1c3RvbUNoZWNrXCIpXHJcbiAgICAgICAgICAgICAgLmF0dHIoXCJjaGVja2VkXCIsIHJlc3BvbnNlLm1zZy5yZW1lbWJlcik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2VtYWlsXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNwYXNzd29yZFwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vUmVnaXN0ZXIgZm9ybVxyXG4gICAgcGhwTFIucmVnZnJtLm9uKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgcGhwTFIucmVnZnJtLmZpbmQoXCIjcmVnaXN0ZXItYnRuXCIpLnZhbChcIlBsZWFzZSB3YWl0Li4uXCIpO1xyXG4gICAgICB2YXIgaW5wdXREYXRhID0ge1xyXG4gICAgICAgIHVybDogXCJhdXRoL2FqYXhSZWdpc3RlclwiLFxyXG4gICAgICAgIGZybTogcGhwTFIucmVnZnJtLFxyXG4gICAgICAgIHRhYmxlOiBcImF1dGhcIixcclxuICAgICAgICBub3RpZmljYXRpb246IFwiYWRtaW5cIixcclxuICAgICAgICBmcm1fbmFtZTogXCJyZWdpc3Rlci1mcm1cIixcclxuICAgICAgfTtcclxuICAgICAgQWRkKGlucHV0RGF0YSwgZ2VzdGlvblIpO1xyXG4gICAgICBmdW5jdGlvbiBnZXN0aW9uUihyZXNwb25zZSkge1xyXG4gICAgICAgIHBocExSLnJlZ2ZybS5maW5kKFwiI3JlZ2lzdGVyLWJ0blwiKS52YWwoXCJFbnJlZ2lzdHJlclwiKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBwaHBMUi5yZWdib3hcclxuICAgICAgICAgICAgLmZpbmQoXCIudXBsb2FkLXByb2ZpbGUtaW1hZ2UgLmltZ1wiKVxyXG4gICAgICAgICAgICAuYXR0cihcInNyY1wiLCByZXNwb25zZS5pbWcgPyByZXNwb25zZS5pbWcgOiBcIlwiKTtcclxuICAgICAgICAgIHBocExSLnJlZ2ZybS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgICAgICBwaHBMUi5yZWdib3guZmluZChcIi5pbnB1dC1ncm91cFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgIHBocExSLnJlZ2ZybS5maW5kKFwiI3JlZ0FsZXJ0XCIpLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcImVycm9yLWZpZWxkXCIpIHtcclxuICAgICAgICAgICAgaW5wdXQuZXJyb3IocGhwTFIubG9naW5mcm0sIHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2xvZ2luQWxlcnRcIikuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL3JlYWQgcHJvZmlsZSBpbWFnZSBvbiBjaGFuZ2VcclxuICAgIHBocExSLnJlZ2JveFxyXG4gICAgICAuZmluZCgnLnVwbG9hZC1wcm9maWxlLWltYWdlIGlucHV0W3R5cGU9XCJmaWxlXCJdJylcclxuICAgICAgLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZWFkdXJsKFxyXG4gICAgICAgICAgdGhpcyxcclxuICAgICAgICAgIHBocExSLnJlZ2JveC5maW5kKFwiLnVwbG9hZC1wcm9maWxlLWltYWdlIC5pbWdcIiksXHJcbiAgICAgICAgICBwaHBMUi5yZWdib3guZmluZChcIi51cGxvYWQtcHJvZmlsZS1pbWFnZSAuY2FtZXJhLWljb25cIilcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIC8vTG9naW4gZm9ybVxyXG4gICAgcGhwTFIubG9naW5mcm0ub24oXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2xvZ2luLWJ0blwiKS52YWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgdXJsOiBcImF1dGgvYWpheExvZ2luXCIsXHJcbiAgICAgICAgZnJtOiBwaHBMUi5sb2dpbmZybSxcclxuICAgICAgICBmcm1fbmFtZTogXCJsb2dpbi1mcm1cIixcclxuICAgICAgfTtcclxuICAgICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIE1hbmFnZUxvZ2luUmVzcG9uc2UpO1xyXG4gICAgICAvL21hbmFnZSBsb2dpbiBSZXNwb25zZVxyXG4gICAgICBmdW5jdGlvbiBNYW5hZ2VMb2dpblJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbi1idG5cIikudmFsKFwiTG9naW5cIik7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgcGhwTFIubG9naW5mcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICAgICAgcGhwTFIubG9nYm94Lm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcImVycm9yLWZpZWxkXCIpIHtcclxuICAgICAgICAgICAgaW5wdXQuZXJyb3IocGhwTFIubG9naW5mcm0sIHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2xvZ2luQWxlcnRcIikuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL0ZvcmdvdCBwYXNzd29yZCByZXF1ZXN0XHJcbiAgICBwaHBMUi5mb3Jnb3Rmcm0ub24oXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBwaHBMUi5mb3Jnb3Rmcm0uZmluZChcIiNmb3Jnb3QtYnRuXCIpLnZhbChcIlBsZWFzZSB3YWl0Li4uXCIpO1xyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB1cmw6IFwiYXV0aC9mb3Jnb3RcIixcclxuICAgICAgICBmcm06IHBocExSLmZvcmdvdGZybSxcclxuICAgICAgICBmcm1fbmFtZTogXCJmb3Jnb3QtZnJtXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBNUmVzcG9uc2UpO1xyXG4gICAgICBmdW5jdGlvbiBNUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgICAgICBwaHBMUi5mb3Jnb3Rmcm0uZmluZChcIiNmb3Jnb3QtYnRuXCIpLnZhbChcIlJlc2V0IHBhc3N3b3JkXCIpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIHBocExSLmZvcmdvdGZybS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgICAgICBwaHBMUi5mb3Jnb3Rmcm0uZmluZChcIiNyZWdBbGVydFwiKS5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJlcnJvci1maWVsZFwiKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmVycm9yKHBocExSLmxvZ2luZnJtLCByZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbkFsZXJ0XCIpLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9sb2dvdXRcclxuICAgIHZhciBsb2dvdXQgPSAkKFwiYTpjb250YWlucygnTG9nb3V0JylcIik7XHJcbiAgICAkKGxvZ291dCkub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgRkIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBGQi5sb2dvdXQoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgLy8gbG9nZ2VkIG91dFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIFwiYXV0aC9sb2dvdXRcIixcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICBsb2dvdXQuY2xvc2VzdChcImRpdlwiKS5sb2FkKGxvY2F0aW9uLmhyZWYgKyBcIiAuY29ubmVjdFwiKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm1zZyA9PSBcInJlZGlyZWN0XCIpIHtcclxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IEJBU0VfVVJMO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBMb2dpbl9BbmRfUmVnaXN0ZXIoJChcIiNMb2dpbi1SZWdpc3Rlci1TeXN0ZW1cIikpLl9pbml0KCk7XHJcbiIsImV4cG9ydCBjb25zdCByZWFkdXJsID0gKGlucHV0LCBpbWcsIGljb24pID0+IHtcclxuICBpZiAoaW5wdXQuZmlsZXMgJiYgaW5wdXQuZmlsZXNbMF0pIHtcclxuICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGltZy5hdHRyKFwic3JjXCIsIGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgIGljb24uY3NzKHtcclxuICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXQuZmlsZXNbMF0pO1xyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==