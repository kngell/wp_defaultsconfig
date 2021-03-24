(self["webpackChunkkngell"] = self["webpackChunkkngell"] || []).push([["commons/frontend/commonCustomModules"],{

/***/ "./src/assets/js/core/config.js":
/*!**************************************!*\
  !*** ./src/assets/js/core/config.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": function() { return /* binding */ BASE_URL; },
/* harmony export */   "AVATAR": function() { return /* binding */ AVATAR; },
/* harmony export */   "isIE": function() { return /* binding */ isIE; }
/* harmony export */ });
var BASE_URL = /kngell_ecommerce/;
var AVATAR = BASE_URL + "public/assets/img/users/avatar.png";
var isIE = function isIE() {
  var userAgent = navigator.userAgent;
  return /MSIE|Trident/.test(userAgent);
};

/***/ }),

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
/* harmony export */   "ManageResponse": function() { return /* binding */ ManageResponse; },
/* harmony export */   "Delete": function() { return /* binding */ Delete; },
/* harmony export */   "displayMultisellect": function() { return /* binding */ displayMultisellect; },
/* harmony export */   "addCategorrie": function() { return /* binding */ addCategorrie; },
/* harmony export */   "select2AjaxParams": function() { return /* binding */ select2AjaxParams; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/assets/js/core/config.js");
/* harmony import */ var _inputErrManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputErrManager */ "./src/assets/js/core/inputErrManager.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




 //display all details

function displayAllDetails(data, gestion) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + data.url,
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
    url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + data.url,
    method: "post",
    data: data.formData,
    success: function success(response) {
      gestion(response, data.params ? data.params : "");
    }
  });
} //display all Items

function displayAllItems(data, gestion) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + data.url,
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
  if (data.start_date) formData.append("start_date", data.start_date);
  if (data.end_date) formData.append("end_date", data.end_date);
  if (data.imageUrlsAry) formData.append("imageUrlsAry", data.imageUrlsAry);
  if (data.select2) formData.append("select2", data.select2);
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + data.url,
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
  if (data.select2) formData.append("select2", data.select2);
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + data.url,
    method: "post",
    processData: false,
    contentType: false,
    data: formData,
    success: function success(response) {
      gestion(response, data.params ? data.params : "");
    }
  });
} //Manage item added/updated

function ManageResponse(response, data) {
  switch (response.result) {
    case "error-field":
      (0,_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.add_inputs_errors)((0,_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.inputsArray)(data.frm), (0,_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.error)(data.frm, response.msg));
      break;

    case "success":
      data.frm.trigger("reset");

      if (data.login) {
        data.loginbox.modal("hide");
        window.location.reload();
      }

      if (data.hasOwnProperty("imgarea")) {
        data.imgarea.attr("src", data.imgvalue);
      }

      if (data.prepend) {
        data.nested.prepend(response.msg);
      } else {
        if (data.prepend === false) {
          data.nested.before(response.msg);
          data.nested.hide();
        }
      }

      if (data.display) data.display();
      break;

    case "error":
      data.alertid.html(response.msg);
      data.frm.trigger("reset");
      break;
  }
} //delete

function Delete(data, displayItem) {
  checkBeforeDelete(data).then(function (result) {
    if (result.value) {
      $.ajax({
        url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + data.url,
        method: "post",
        data: {
          id: data.id,
          table: data.table,
          notification: data.notification
        },
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
      data.swal.fire({
        title: "Are you sure?",
        showCancelButton: true,
        html: "<p>You won't be able to revert this!</p>",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete!"
      }).then(function (result) {
        resolve(result);
      });
    } else {
      console.log(data);
      $.ajax({
        url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + data.url_check,
        method: "post",
        data: {
          id: data.id,
          table: data.table
        }
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
    url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + "forms/fillMultiselect",
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
      url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + "forms/addcategorie",
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
    url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + _data.url,
    type: "post",
    dataType: "json",
    delay: 250,
    data: function data(params) {
      return {
        searchTerm: params.term,
        // search term
        table: _data.table != "" ? _data.table : "",
        data_type: _data.data_type != "" ? _data.data_type : ""
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

/***/ }),

/***/ "./src/assets/js/core/inputErrManager.js":
/*!***********************************************!*\
  !*** ./src/assets/js/core/inputErrManager.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add_inputs_errors": function() { return /* binding */ add_inputs_errors; },
/* harmony export */   "reset_invalid_input": function() { return /* binding */ reset_invalid_input; },
/* harmony export */   "removeInvalidInput": function() { return /* binding */ removeInvalidInput; },
/* harmony export */   "error": function() { return /* binding */ error; },
/* harmony export */   "inputsArray": function() { return /* binding */ inputsArray; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var add_inputs_errors = function add_inputs_errors(InputArr, arrErr) {
  InputArr.forEach(function (input) {
    if (arrErr.indexOf(input.id) == -1) {
      input.classList.remove("is-invalid");
      input.nextElementSibling.innerHTML = "";
    }
  });
};
var reset_invalid_input = function reset_invalid_input(form) {
  form.find(".is-invalid").removeClass("is-invalid");
  form.find("div.invalid-feedback").html("");
}; //remove invalid input on focus

function removeInvalidInput(Myform) {
  Myform.on("focus", "input,textarea, .ck, .note-editor", function () {
    $(this).removeClass("is-invalid");
    $(this).parent().children("div.invalid-feedback").html("");
  });
}
var error = function error(form, InputErr) {
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
};
var inputsArray = function inputsArray(form) {
  var arr = [];
  form.each(function () {
    var inputsArr = $(this).find(":input").toArray();
    inputsArr.forEach(function (input) {
      if (["submit", "hidden", "checkbox", "button", "file"].indexOf(input.type) == -1 && input.nextElementSibling) {
        arr.push(input);
      }
    });
  });
  return arr;
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
    manageR(response);
  }).fail(function (error) {
    console.log(error);
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9mb3JtX2NydWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2lucHV0RXJyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvdmlzaXRvcnMuanMiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJBVkFUQVIiLCJpc0lFIiwidXNlckFnZW50IiwibmF2aWdhdG9yIiwidGVzdCIsImRpc3BsYXlBbGxEZXRhaWxzIiwiZGF0YSIsImdlc3Rpb24iLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsInRhYmxlIiwiaWQiLCJ1c2VyIiwic2Vzc2lvbl9pZCIsImRhdGFfdHlwZSIsInJldHVybl9tb2RlIiwidG9rZW4iLCJmcm1fbmFtZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInBhcmFtcyIsImVkaXRGb3JtIiwiZm9ybURhdGEiLCJkaXNwbGF5QWxsSXRlbXMiLCJzdGFydCIsIm1heCIsInF1ZXJ5IiwicGFnZSIsInBhZ2luYXRpb24iLCJBZGQiLCJGb3JtRGF0YSIsImZybSIsImFwcGVuZCIsIm5vdGlmaWNhdGlvbiIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsImltYWdlVXJsc0FyeSIsInNlbGVjdDIiLCJjYWNoZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJDYWxsX2NvbnRyb2xsZXIiLCJ1cmxfZGF0YSIsImFjdGlvbiIsImZyZWVkYXRhIiwidXNlcl9pZCIsIk1hbmFnZVJlc3BvbnNlIiwicmVzdWx0IiwiYWRkX2lucHV0c19lcnJvcnMiLCJpbnB1dHNBcnJheSIsImVycm9yIiwibXNnIiwidHJpZ2dlciIsImxvZ2luIiwibG9naW5ib3giLCJtb2RhbCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFzT3duUHJvcGVydHkiLCJpbWdhcmVhIiwiYXR0ciIsImltZ3ZhbHVlIiwicHJlcGVuZCIsIm5lc3RlZCIsImJlZm9yZSIsImhpZGUiLCJkaXNwbGF5IiwiYWxlcnRpZCIsImh0bWwiLCJEZWxldGUiLCJkaXNwbGF5SXRlbSIsImNoZWNrQmVmb3JlRGVsZXRlIiwidGhlbiIsInZhbHVlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cmxfY2hlY2siLCJzd2FsIiwiZmlyZSIsInRpdGxlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjb25zb2xlIiwibG9nIiwiZG9uZSIsImZhaWwiLCJkaXNwbGF5TXVsdGlzZWxsZWN0IiwiZGlzcGxheUlEIiwiYWxlcnRJRCIsImFkZENhdGVnb3JyaWUiLCJjYXRGaWVsZCIsImNhdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxlbmd0aCIsImFsZXJ0IiwiY2F0ZWdvcmllIiwic2VsZWN0MkFqYXhQYXJhbXMiLCJ0eXBlIiwiZGF0YVR5cGUiLCJkZWxheSIsInNlYXJjaFRlcm0iLCJ0ZXJtIiwicHJvY2Vzc1Jlc3VsdHMiLCJyZXN1bHRzIiwibWFwIiwib2JqIiwidGV4dCIsIklucHV0QXJyIiwiYXJyRXJyIiwiZm9yRWFjaCIsImlucHV0IiwiaW5kZXhPZiIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm5leHRFbGVtZW50U2libGluZyIsImlubmVySFRNTCIsInJlc2V0X2ludmFsaWRfaW5wdXQiLCJmb3JtIiwiZmluZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlSW52YWxpZElucHV0IiwiTXlmb3JtIiwib24iLCJwYXJlbnQiLCJjaGlsZHJlbiIsIklucHV0RXJyIiwiT2JqZWN0IiwiZW50cmllcyIsImtleSIsImFkZENsYXNzIiwicHVzaCIsImFyciIsImVhY2giLCJpbnB1dHNBcnIiLCJ0b0FycmF5IiwiZ2V0X3Zpc2l0b3JzX2RhdGEiLCJpcCIsInZhbCIsInNlbmRfdmlzaXRvcnNfZGF0YSIsIm1h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TSxXQUFLLEVBQUVOLElBQUksQ0FBQ00sS0FEUjtBQUVKbUksUUFBRSxFQUFFekksSUFBSSxDQUFDeUksRUFBTCxHQUFVekksSUFBSSxDQUFDeUksRUFBZixHQUFvQixFQUZwQjtBQUdKSSxhQUFPLEVBQUU3SSxJQUFJLENBQUM2SSxPQUFMLEdBQWU3SSxJQUFJLENBQUM2SSxPQUFwQixHQUE4QjtBQUhuQztBQUhELEdBQVAsRUFTR3pELElBVEgsQ0FTUSxVQUFDckUsUUFBRCxFQUFjO0FBQ2xCNkgsV0FBTyxDQUFDN0gsUUFBRCxDQUFQO0FBQ0QsR0FYSCxFQVlHc0UsSUFaSCxDQVlRLFVBQUN2QyxLQUFELEVBQVc7QUFDZm9DLFdBQU8sQ0FBQ0MsR0FBUixDQUFZckMsS0FBWjtBQUNELEdBZEg7QUFlRCxDQWhCTSxDIiwiZmlsZSI6ImNvbW1vbnMvZnJvbnRlbmQvY29tbW9uQ3VzdG9tTW9kdWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IC9rbmdlbGxfZWNvbW1lcmNlLztcclxuZXhwb3J0IGNvbnN0IEFWQVRBUiA9IEJBU0VfVVJMICsgXCJwdWJsaWMvYXNzZXRzL2ltZy91c2Vycy9hdmF0YXIucG5nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaXNJRSA9ICgpID0+IHtcclxuICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICByZXR1cm4gL01TSUV8VHJpZGVudC8udGVzdCh1c2VyQWdlbnQpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBhZGRfaW5wdXRzX2Vycm9ycywgZXJyb3IsIGlucHV0c0FycmF5IH0gZnJvbSBcIi4vaW5wdXRFcnJNYW5hZ2VyXCI7XHJcblxyXG4vL2Rpc3BsYXkgYWxsIGRldGFpbHNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxEZXRhaWxzKGRhdGEsIGdlc3Rpb24pIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICB1c2VyOiBkYXRhLnVzZXIgPyBkYXRhLnVzZXIgOiBcIlwiLFxyXG4gICAgICBzZXNzaW9uX2lkOiBkYXRhLnNlc3Npb25faWQgPyBkYXRhLnNlc3Npb25faWQgOiBcIlwiLFxyXG4gICAgICBkYXRhX3R5cGU6IGRhdGEuZGF0YV90eXBlID8gZGF0YS5kYXRhX3R5cGUgOiBcIlwiLFxyXG4gICAgICByZXR1cm5fbW9kZTogZGF0YS5yZXR1cm5fbW9kZSA/IGRhdGEucmV0dXJuX21vZGUgOiBcIlwiLFxyXG4gICAgICB0b2tlbjogZGF0YS50b2tlbiA/IGRhdGEudG9rZW4gOiBcIlwiLFxyXG4gICAgICBmcm1fbmFtZTogZGF0YS5mcm1fbmFtZSA/IGRhdGEuZnJtX25hbWUgOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbi8vZWRpdCBkYXRhXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0Rm9ybShkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLmZvcm1EYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vZGlzcGxheSBhbGwgSXRlbXNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxJdGVtcyhkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCAhPSBcIlwiID8gZGF0YS5pZCA6IFwiXCIsXHJcbiAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICBtYXg6IGRhdGEubWF4ICE9IFwiXCIgPyBkYXRhLm1heCA6IFwiXCIsXHJcbiAgICAgIHVzZXI6IGRhdGEudXNlciAhPSBcIlwiID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgcXVlcnk6IGRhdGEucXVlcnkgIT0gXCJcIiA/IGRhdGEucXVlcnkgOiBcIlwiLFxyXG4gICAgICBwYWdlOiBkYXRhLnBhZ2UgIT0gXCJcIiA/IGRhdGEucGFnZSA6IFwiXCIsXHJcbiAgICAgIHBhZ2luYXRpb246IGRhdGEucGFnaW5hdGlvbiAhPSBcIlwiID8gZGF0YS5wYWdpbmF0aW9uIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuLy9hZGQgSXRlbVxyXG5leHBvcnQgZnVuY3Rpb24gQWRkKGRhdGEsIGdlc3Rpb24pIHtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZGF0YS5mcm1bMF0pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcInRhYmxlXCIsIGRhdGEudGFibGUpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcIm5vdGlmaWNhdGlvblwiLCBkYXRhLm5vdGlmaWNhdGlvbik7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwiZnJtX25hbWVcIiwgZGF0YS5mcm1fbmFtZSk7XHJcbiAgaWYgKGRhdGEuc3RhcnRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwic3RhcnRfZGF0ZVwiLCBkYXRhLnN0YXJ0X2RhdGUpO1xyXG4gIGlmIChkYXRhLmVuZF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJlbmRfZGF0ZVwiLCBkYXRhLmVuZF9kYXRlKTtcclxuICBpZiAoZGF0YS5pbWFnZVVybHNBcnkpIGZvcm1EYXRhLmFwcGVuZChcImltYWdlVXJsc0FyeVwiLCBkYXRhLmltYWdlVXJsc0FyeSk7XHJcbiAgaWYgKGRhdGEuc2VsZWN0MikgZm9ybURhdGEuYXBwZW5kKFwic2VsZWN0MlwiLCBkYXRhLnNlbGVjdDIpO1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICBjYWNoZTogZmFsc2UsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL3VwZGF0ZVxyXG5leHBvcnQgZnVuY3Rpb24gQ2FsbF9jb250cm9sbGVyKGRhdGEsIGdlc3Rpb24pIHtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZGF0YS5mcm1bMF0pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImZybV9uYW1lXCIsIGRhdGEuZnJtX25hbWUpO1xyXG4gIGlmIChkYXRhLnRhYmxlKSBmb3JtRGF0YS5hcHBlbmQoXCJ0YWJsZVwiLCBkYXRhLnRhYmxlKTtcclxuICBpZiAoZGF0YS5ub3RpZmljYXRpb24pIGZvcm1EYXRhLmFwcGVuZChcIm5vdGlmaWNhdGlvblwiLCBkYXRhLm5vdGlmaWNhdGlvbik7XHJcbiAgaWYgKGRhdGEudXJsX2RhdGEpIGZvcm1EYXRhLmFwcGVuZChcInVybF9kYXRhXCIsIGRhdGEudXJsX2RhdGEpO1xyXG4gIGlmIChkYXRhLmFjdGlvbikgZm9ybURhdGEuYXBwZW5kKFwiYWN0aW9uXCIsIGRhdGEuYWN0aW9uKTtcclxuICBpZiAoZGF0YS5pbWFnZVVybHNBcnkpIGZvcm1EYXRhLmFwcGVuZChcImltYWdlVXJsc0FyeVwiLCBkYXRhLmltYWdlVXJsc0FyeSk7XHJcbiAgaWYgKGRhdGEuZnJlZWRhdGEpIGZvcm1EYXRhLmFwcGVuZChcImZyZWVkYXRhXCIsIGRhdGEuZnJlZWRhdGEpO1xyXG4gIGlmIChkYXRhLnN0YXJ0X2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcInN0YXJ0X2RhdGVcIiwgZGF0YS5zdGFydF9kYXRlKTtcclxuICBpZiAoZGF0YS5lbmRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwiZW5kX2RhdGVcIiwgZGF0YS5lbmRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuaWQpIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGRhdGEuaWQpO1xyXG4gIGlmIChkYXRhLnVzZXJfaWQpIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGRhdGEudXNlcl9pZCk7XHJcbiAgaWYgKGRhdGEubWV0aG9kKSBmb3JtRGF0YS5hcHBlbmQoXCJtZXRob2RcIiwgZGF0YS5tZXRob2QpO1xyXG4gIGlmIChkYXRhLnNlbGVjdDIpIGZvcm1EYXRhLmFwcGVuZChcInNlbGVjdDJcIiwgZGF0YS5zZWxlY3QyKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuLy9NYW5hZ2UgaXRlbSBhZGRlZC91cGRhdGVkXHJcbmV4cG9ydCBmdW5jdGlvbiBNYW5hZ2VSZXNwb25zZShyZXNwb25zZSwgZGF0YSkge1xyXG4gIHN3aXRjaCAocmVzcG9uc2UucmVzdWx0KSB7XHJcbiAgICBjYXNlIFwiZXJyb3ItZmllbGRcIjpcclxuICAgICAgYWRkX2lucHV0c19lcnJvcnMoaW5wdXRzQXJyYXkoZGF0YS5mcm0pLCBlcnJvcihkYXRhLmZybSwgcmVzcG9uc2UubXNnKSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcInN1Y2Nlc3NcIjpcclxuICAgICAgZGF0YS5mcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICBpZiAoZGF0YS5sb2dpbikge1xyXG4gICAgICAgIGRhdGEubG9naW5ib3gubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImltZ2FyZWFcIikpIHtcclxuICAgICAgICBkYXRhLmltZ2FyZWEuYXR0cihcInNyY1wiLCBkYXRhLmltZ3ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YS5wcmVwZW5kKSB7XHJcbiAgICAgICAgZGF0YS5uZXN0ZWQucHJlcGVuZChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChkYXRhLnByZXBlbmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBkYXRhLm5lc3RlZC5iZWZvcmUocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIGRhdGEubmVzdGVkLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGEuZGlzcGxheSkgZGF0YS5kaXNwbGF5KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImVycm9yXCI6XHJcbiAgICAgIGRhdGEuYWxlcnRpZC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIGRhdGEuZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59XHJcblxyXG4vL2RlbGV0ZVxyXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlKGRhdGEsIGRpc3BsYXlJdGVtKSB7XHJcbiAgY2hlY2tCZWZvcmVEZWxldGUoZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgICAgIG5vdGlmaWNhdGlvbjogZGF0YS5ub3RpZmljYXRpb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGRpc3BsYXlJdGVtKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuLy9mdW5jdGlvbiBjaGVjayBiZWZvcmUgZGVsZXRlXHJcbmZ1bmN0aW9uIGNoZWNrQmVmb3JlRGVsZXRlKGRhdGEpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgaWYgKCFkYXRhLnVybF9jaGVjaykge1xyXG4gICAgICBkYXRhLnN3YWxcclxuICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgaHRtbDogXCI8cD5Zb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyE8L3A+XCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiRGVsZXRlIVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsX2NoZWNrLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgZGF0YS5zd2FsXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBodG1sOiBcIjxwPllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzITwvcD5cIiArIHJlc3BvbnNlLm1zZyxcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJEZWxldGUhXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZhaWwoKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TXVsdGlzZWxsZWN0KGRhdGEpIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIFwiZm9ybXMvZmlsbE11bHRpc2VsZWN0XCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICBkYXRhLmRpc3BsYXlJRC5hcHBlbmQocmVzcG9uc2UubXNnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhLmFsZXJ0SUQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2F0ZWdvcnJpZShjYXRGaWVsZCwgYWxlcnRJRCkge1xyXG4gIGxldCBjYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhdEZpZWxkKTtcclxuICBpZiAoY2F0LnZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICBhbGVydChcIkxlIGNoYW1wcyBjYXTDqWdvcmllIGVzdCB2aWRlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IEJBU0VfVVJMICsgXCJmb3Jtcy9hZGRjYXRlZ29yaWVcIixcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNhdGVnb3JpZTogY2F0LnZhbHVlLFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UgIT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICQoYWxlcnRJRCkuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3QyQWpheFBhcmFtcyhkYXRhKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgZGVsYXk6IDI1MCxcclxuICAgIGRhdGE6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZWFyY2hUZXJtOiBwYXJhbXMudGVybSwgLy8gc2VhcmNoIHRlcm1cclxuICAgICAgICB0YWJsZTogZGF0YS50YWJsZSAhPSBcIlwiID8gZGF0YS50YWJsZSA6IFwiXCIsXHJcbiAgICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSAhPSBcIlwiID8gZGF0YS5kYXRhX3R5cGUgOiBcIlwiLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICByZXN1bHRzOiAkLm1hcChyZXNwb25zZS5tc2csIGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5pZCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IG9iai5pZCwgdGV4dDogb2JqLnRleHQgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4geyBpZDogb2JqLmlkLCB0ZXh0OiBvYmoudGV4dCB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2FjaGU6IHRydWUsXHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgYWRkX2lucHV0c19lcnJvcnMgPSAoSW5wdXRBcnIsIGFyckVycikgPT4ge1xyXG4gIElucHV0QXJyLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICBpZiAoYXJyRXJyLmluZGV4T2YoaW5wdXQuaWQpID09IC0xKSB7XHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgICBpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXNldF9pbnZhbGlkX2lucHV0ID0gKGZvcm0pID0+IHtcclxuICBmb3JtLmZpbmQoXCIuaXMtaW52YWxpZFwiKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgZm9ybS5maW5kKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxufTtcclxuXHJcbi8vcmVtb3ZlIGludmFsaWQgaW5wdXQgb24gZm9jdXNcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUludmFsaWRJbnB1dChNeWZvcm0pIHtcclxuICBNeWZvcm0ub24oXCJmb2N1c1wiLCBcImlucHV0LHRleHRhcmVhLCAuY2ssIC5ub3RlLWVkaXRvclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3IgPSAoZm9ybSwgSW5wdXRFcnIpID0+IHtcclxuICB2YXIgYXJyRXJyID0gW107XHJcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoSW5wdXRFcnIpKSB7XHJcbiAgICB2YXIgaW5wdXQgPSBmb3JtLmZpbmQoXCIjXCIgKyBrZXkpLmFkZENsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuXHJcbiAgICBpbnB1dC5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwodmFsdWUpO1xyXG4gICAgYXJyRXJyLnB1c2goa2V5KTtcclxuICB9XHJcbiAgcmV0dXJuIGFyckVycjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnB1dHNBcnJheSA9IChmb3JtKSA9PiB7XHJcbiAgdmFyIGFyciA9IFtdO1xyXG4gIGZvcm0uZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpbnB1dHNBcnIgPSAkKHRoaXMpLmZpbmQoXCI6aW5wdXRcIikudG9BcnJheSgpO1xyXG4gICAgaW5wdXRzQXJyLmZvckVhY2goZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBbXCJzdWJtaXRcIiwgXCJoaWRkZW5cIiwgXCJjaGVja2JveFwiLCBcImJ1dHRvblwiLCBcImZpbGVcIl0uaW5kZXhPZihcclxuICAgICAgICAgIGlucHV0LnR5cGVcclxuICAgICAgICApID09IC0xICYmXHJcbiAgICAgICAgaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nXHJcbiAgICAgICkge1xyXG4gICAgICAgIGFyci5wdXNoKGlucHV0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGFycjtcclxufTtcclxuIiwiLy9HZXQgdmlzaXRvcnMgRGF0YVxyXG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5leHBvcnQgY29uc3QgZ2V0X3Zpc2l0b3JzX2RhdGEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICBpcDogJChcIiNpcF9hZGRyZXNzXCIpLnZhbCgpLFxyXG4gICAgfTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICB9IGVsc2UgcmVqZWN0KFwibm8gZGF0YVwiKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kX3Zpc2l0b3JzX2RhdGEgPSAoZGF0YSwgbWFuYWdlUikgPT4ge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgaXA6IGRhdGEuaXAgPyBkYXRhLmlwIDogXCJcIixcclxuICAgICAgY29va2llczogZGF0YS5jb29raWVzID8gZGF0YS5jb29raWVzIDogXCJcIixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBtYW5hZ2VSKHJlc3BvbnNlKTtcclxuICAgIH0pXHJcbiAgICAuZmFpbCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=