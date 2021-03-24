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
/* harmony export */   "select2AjaxParams": function() { return /* binding */ select2AjaxParams; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/assets/js/core/config.js");
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

/***/ "./src/assets/js/core/logreg.js":
/*!**************************************!*\
  !*** ./src/assets/js/core/logreg.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var corejs_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! corejs/config */ "./src/assets/js/core/config.js");
/* harmony import */ var corejs_form_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! corejs/form_crud */ "./src/assets/js/core/form_crud.js");
/* harmony import */ var corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! corejs/inputErrManager */ "./src/assets/js/core/inputErrManager.js");
/* harmony import */ var corejs_profile_img__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! corejs/profile_img */ "./src/assets/js/core/profile_img.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");






function PhpLR(element) {
  this.element = element;
  this.init();
}

PhpLR.prototype.init = function () {
  this.setupVariables();
  this.setupEvents();
}; //PHP LR setup Variables


PhpLR.prototype.setupVariables = function () {
  this.logbox = this.element.find("#login-box");
  this.loginfrm = this.element.find("#login-frm");
  this.regbox = this.element.find("#register-box");
  this.regfrm = this.element.find("#register-frm");
  this.forgotbox = this.element.find("#forgot-box");
  this.forgotfrm = this.element.find("#forgot-frm");
}; //PHP LR setup Events


PhpLR.prototype.setupEvents = function () {
  var phpLR = this; //refresh login & register frm on hide and show

  phpLR.logbox.on("hide.bs.modal", function () {
    if (phpLR.loginfrm.find(".is-invalid").length != 0) {
      (0,corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_3__.reset_invalid_input)(phpLR.loginfrm);
    }
  }); //Reset register form invalid input on hide modal

  phpLR.regbox.on("hide.bs.modal", function () {
    if (phpLR.regfrm.find(".is-invalid").length != 0) {
      (0,corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_3__.reset_invalid_input)(phpLR.regfrm);
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
      url: corejs_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + "auth/remember_check",
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
    (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_2__.Add)(inputData, gestionR);

    function gestionR(response) {
      console.log(response);
      phpLR.regfrm.find("#register-btn").val("Enregistrer");
      var outputData = {
        frm: phpLR.regfrm,
        swal: false,
        alertid: phpLR.regfrm.find("#regAlert"),
        display: false,
        imgarea: phpLR.regbox.find(".upload-profile-image .img"),
        imgvalue: response.img ? response.img : "",
        alertsuccess: true
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_2__.ManageResponse)(response, outputData);
    }
  }); //read profile image on change

  phpLR.regbox.find('.upload-profile-image input[type="file"]').on("change", function () {
    (0,corejs_profile_img__WEBPACK_IMPORTED_MODULE_4__.readurl)(this, phpLR.regbox.find(".upload-profile-image .img"), phpLR.regbox.find(".upload-profile-image .camera-icon"));
  }); //Login form

  phpLR.loginfrm.on("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();
    phpLR.loginfrm.find("#login-btn").val("Please wait...");
    var data = {
      url: "auth/ajaxLogin",
      frm: phpLR.loginfrm,
      frm_name: "login-frm"
    };
    (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_2__.Call_controller)(data, ManageLoginResponse); //manage login Response

    function ManageLoginResponse(response) {
      phpLR.loginfrm.find("#login-btn").val("Login");
      var rdata = {
        frm: phpLR.loginfrm,
        btn: phpLR.loginfrm.find("#login-btn"),
        textBtn: "Sign In",
        alertid: phpLR.loginfrm.find("#loginAlert"),
        loginbox: phpLR.logbox,
        login: true
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_2__.ManageResponse)(response, rdata);
    }
  }); //login with Facebook

  phpLR.logbox.find("#fblink").on("click", function (e) {
    e.preventDefault();
    phpLR.loginfrm.find("#login-btn").val("Please wait...");
    var data = {
      frm: phpLR.loginfrm,
      url: "guests/fbLogin",
      frm_name: "login-frm"
    };
    (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_2__.Call_controller)(data, FbResponse);

    function FbResponse(response) {
      if (response.result == "success") {
        FB = facebooklogin(response);
      } else {
        phpLR.loginfrm.find("#loginAlert").html(response.msg);
      }
    }
  }); //facebook login

  function facebooklogin(resp) {
    Facebook.load().then(function () {
      Facebook.init({
        appId: resp.msg.appID
      });
      Facebook.getLoginStatus().then(function (response) {
        if (response.status === "connected") {
          getFbUserData();
        } else {
          fbLogin();
        }
      });
    });
    return Facebook;
  } // Facebook login with JavaScript SDK


  function fbLogin() {
    FB.login({
      scope: "email",
      return_scopes: true
    }).then(function (response) {
      if (response.status === "connected") {
        getFbUserData();
      } else {
        document.getElementById("loginAlert").innerHTML = "User cancelled login or did not fully authorize.";
      }
    });
  } // // Fetch the user profile data from facebook


  function getFbUserData() {
    FB.api("/me", "get", {
      fields: "id,first_name,last_name,email,link,gender,locale,picture"
    }).then(function (response) {
      var data = {
        frm: phpLR.loginfrm,
        frm_name: "login-frm",
        url: "auth/fblogin",
        freedata: JSON.stringify(response)
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_2__.Call_controller)(data, ManageLoginResponse);
    });
  } //Forgot password request


  phpLR.forgotfrm.on("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();
    phpLR.forgotfrm.find("#forgot-btn").val("Please wait...");
    var data = {
      url: "auth/forgot",
      frm: phpLR.forgotfrm,
      frm_name: "forgot-frm"
    };
    (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_2__.Call_controller)(data, MResponse);

    function MResponse(response) {
      var rdata = {
        frm: phpLR.forgotfrm,
        alertid: phpLR.forgotfrm.find("#forgotAlert"),
        alertsuccess: true
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_2__.ManageResponse)(response, rdata);
      phpLR.forgotfrm.find("#forgot-btn").val("Reset password");
    }
  }); //logout

  var logout = $("a:contains('Logout')");
  $(logout).on("click", function () {
    if (typeof FB !== "undefined") {
      FB.logout().then(function (response) {// logged out
      });
    }

    $.ajax({
      url: corejs_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + "auth/logout",
      method: "post",
      success: function success(response) {
        console.log(response);

        if (response.result == "success") {
          logout.closest("div").load(location.href + " .connect");

          if (response.msg == "redirect") {
            window.location.href = corejs_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL;
          }
        }
      }
    });
  }); //----------------------Ajax logout from elsewhere
};

$.fn.phpLR = function (options) {
  new PhpLR(this);
  return this;
};

$("#Login-Register-System").phpLR();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvZm9ybV9jcnVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9pbnB1dEVyck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2xvZ3JlZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvcHJvZmlsZV9pbWcuanMiXSwibmFtZXMiOlsiZGlzcGxheUFsbERldGFpbHMiLCJkYXRhIiwiZ2VzdGlvbiIsIiQiLCJhamF4IiwidXJsIiwiQkFTRV9VUkwiLCJtZXRob2QiLCJ0YWJsZSIsImlkIiwidXNlciIsInNlc3Npb25faWQiLCJkYXRhX3R5cGUiLCJyZXR1cm5fbW9kZSIsInRva2VuIiwiZnJtX25hbWUiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJwYXJhbXMiLCJlZGl0Rm9ybSIsImZvcm1EYXRhIiwiZGlzcGxheUFsbEl0ZW1zIiwic3RhcnQiLCJtYXgiLCJxdWVyeSIsInBhZ2UiLCJwYWdpbmF0aW9uIiwiQWRkIiwiRm9ybURhdGEiLCJmcm0iLCJhcHBlbmQiLCJub3RpZmljYXRpb24iLCJzdGFydF9kYXRlIiwiZW5kX2RhdGUiLCJpbWFnZVVybHNBcnkiLCJzZWxlY3QyIiwiY2FjaGUiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwiQ2FsbF9jb250cm9sbGVyIiwidXJsX2RhdGEiLCJhY3Rpb24iLCJmcmVlZGF0YSIsInVzZXJfaWQiLCJEZWxldGUiLCJkaXNwbGF5SXRlbSIsImNoZWNrQmVmb3JlRGVsZXRlIiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cmxfY2hlY2siLCJzd2FsIiwiZmlyZSIsInRpdGxlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImh0bWwiLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY29uc29sZSIsImxvZyIsImRvbmUiLCJtc2ciLCJmYWlsIiwiZXJyb3IiLCJkaXNwbGF5TXVsdGlzZWxsZWN0IiwiZGlzcGxheUlEIiwiYWxlcnRJRCIsImFkZENhdGVnb3JyaWUiLCJjYXRGaWVsZCIsImNhdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxlbmd0aCIsImFsZXJ0IiwiY2F0ZWdvcmllIiwic2VsZWN0MkFqYXhQYXJhbXMiLCJ0eXBlIiwiZGF0YVR5cGUiLCJkZWxheSIsInNlYXJjaFRlcm0iLCJ0ZXJtIiwicHJvY2Vzc1Jlc3VsdHMiLCJyZXN1bHRzIiwibWFwIiwib2JqIiwidGV4dCIsImFkZF9pbnB1dHNfZXJyb3JzIiwiSW5wdXRBcnIiLCJhcnJFcnIiLCJmb3JFYWNoIiwiaW5wdXQiLCJpbmRleE9mIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaW5uZXJIVE1MIiwicmVzZXRfaW52YWxpZF9pbnB1dCIsImZvcm0iLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVJbnZhbGlkSW5wdXQiLCJNeWZvcm0iLCJvbiIsInBhcmVudCIsImNoaWxkcmVuIiwiSW5wdXRFcnIiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwiYWRkQ2xhc3MiLCJwdXNoIiwiaW5wdXRzQXJyYXkiLCJhcnIiLCJlYWNoIiwiaW5wdXRzQXJyIiwidG9BcnJheSIsIlBocExSIiwiZWxlbWVudCIsImluaXQiLCJwcm90b3R5cGUiLCJzZXR1cFZhcmlhYmxlcyIsInNldHVwRXZlbnRzIiwibG9nYm94IiwibG9naW5mcm0iLCJyZWdib3giLCJyZWdmcm0iLCJmb3Jnb3Rib3giLCJmb3Jnb3Rmcm0iLCJwaHBMUiIsInRyaWdnZXIiLCJ2YWwiLCJlbWFpbCIsImF0dHIiLCJyZW1lbWJlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImlucHV0RGF0YSIsImdlc3Rpb25SIiwib3V0cHV0RGF0YSIsImFsZXJ0aWQiLCJkaXNwbGF5IiwiaW1nYXJlYSIsImltZ3ZhbHVlIiwiaW1nIiwiYWxlcnRzdWNjZXNzIiwiTWFuYWdlUmVzcG9uc2UiLCJyZWFkdXJsIiwiTWFuYWdlTG9naW5SZXNwb25zZSIsInJkYXRhIiwiYnRuIiwidGV4dEJ0biIsImxvZ2luYm94IiwibG9naW4iLCJGYlJlc3BvbnNlIiwiRkIiLCJmYWNlYm9va2xvZ2luIiwicmVzcCIsIkZhY2Vib29rIiwibG9hZCIsImFwcElkIiwiYXBwSUQiLCJnZXRMb2dpblN0YXR1cyIsInN0YXR1cyIsImdldEZiVXNlckRhdGEiLCJmYkxvZ2luIiwic2NvcGUiLCJyZXR1cm5fc2NvcGVzIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcGkiLCJmaWVsZHMiLCJKU09OIiwic3RyaW5naWZ5IiwiTVJlc3BvbnNlIiwibG9nb3V0IiwiY2xvc2VzdCIsImxvY2F0aW9uIiwiaHJlZiIsIndpbmRvdyIsImZuIiwib3B0aW9ucyIsImljb24iLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0YXJnZXQiLCJjc3MiLCJyZWFkQXNEYXRhVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNPLFNBQVNBLGlCQUFULENBQTJCQyxJQUEzQixFQUFpQ0MsT0FBakMsRUFBMEM7QUFDL0NDLEdBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsNkNBQVEsR0FBR0wsSUFBSSxDQUFDSSxHQURoQjtBQUVMRSxVQUFNLEVBQUUsTUFGSDtBQUdMTixRQUFJLEVBQUU7QUFDSk8sV0FBSyxFQUFFUCxJQUFJLENBQUNPLEtBRFI7QUFFSkMsUUFBRSxFQUFFUixJQUFJLENBQUNRLEVBRkw7QUFHSkMsVUFBSSxFQUFFVCxJQUFJLENBQUNTLElBQUwsR0FBWVQsSUFBSSxDQUFDUyxJQUFqQixHQUF3QixFQUgxQjtBQUlKQyxnQkFBVSxFQUFFVixJQUFJLENBQUNVLFVBQUwsR0FBa0JWLElBQUksQ0FBQ1UsVUFBdkIsR0FBb0MsRUFKNUM7QUFLSkMs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QUFLbkQsS0FBTCxHQUFhLFVBQVVvRCxPQUFWLEVBQW1CO0FBQzlCLE1BQUloRSxLQUFKLENBQVUsSUFBVjtBQUNBLFNBQU8sSUFBUDtBQUNELENBSEQ7O0FBSUFySCxDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QmlJLEtBQTVCLEc7Ozs7Ozs7Ozs7Ozs7OztBQzdQTyxJQUFNbUIsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ3pELEtBQUQsRUFBUXNELEdBQVIsRUFBYXFDLElBQWIsRUFBc0I7QUFDM0MsTUFBSTNGLEtBQUssQ0FBQzRGLEtBQU4sSUFBZTVGLEtBQUssQ0FBQzRGLEtBQU4sQ0FBWSxDQUFaLENBQW5CLEVBQW1DO0FBQ2pDLFFBQUlDLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWI7O0FBQ0FELFVBQU0sQ0FBQ0UsTUFBUCxHQUFnQixVQUFVbkQsQ0FBVixFQUFhO0FBQzNCVSxTQUFHLENBQUNaLElBQUosQ0FBUyxLQUFULEVBQWdCRSxDQUFDLENBQUNvRCxNQUFGLENBQVM5SSxNQUF6QjtBQUNBeUksVUFBSSxDQUFDTSxHQUFMLENBQVM7QUFDUDlDLGVBQU8sRUFBRTtBQURGLE9BQVQ7QUFHRCxLQUxEOztBQU1BMEMsVUFBTSxDQUFDSyxhQUFQLENBQXFCbEcsS0FBSyxDQUFDNEYsS0FBTixDQUFZLENBQVosQ0FBckI7QUFDRDtBQUNGLENBWE0sQyIsImZpbGUiOiJsYXp5bG9hZC9qcy9hZG1pbi9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG4vL2Rpc3BsYXkgYWxsIGRldGFpbHNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxEZXRhaWxzKGRhdGEsIGdlc3Rpb24pIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICB1c2VyOiBkYXRhLnVzZXIgPyBkYXRhLnVzZXIgOiBcIlwiLFxyXG4gICAgICBzZXNzaW9uX2lkOiBkYXRhLnNlc3Npb25faWQgPyBkYXRhLnNlc3Npb25faWQgOiBcIlwiLFxyXG4gICAgICBkYXRhX3R5cGU6IGRhdGEuZGF0YV90eXBlID8gZGF0YS5kYXRhX3R5cGUgOiBcIlwiLFxyXG4gICAgICByZXR1cm5fbW9kZTogZGF0YS5yZXR1cm5fbW9kZSA/IGRhdGEucmV0dXJuX21vZGUgOiBcIlwiLFxyXG4gICAgICB0b2tlbjogZGF0YS50b2tlbiA/IGRhdGEudG9rZW4gOiBcIlwiLFxyXG4gICAgICBmcm1fbmFtZTogZGF0YS5mcm1fbmFtZSA/IGRhdGEuZnJtX25hbWUgOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbi8vZWRpdCBkYXRhXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0Rm9ybShkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLmZvcm1EYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vZGlzcGxheSBhbGwgSXRlbXNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxJdGVtcyhkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCAhPSBcIlwiID8gZGF0YS5pZCA6IFwiXCIsXHJcbiAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICBtYXg6IGRhdGEubWF4ICE9IFwiXCIgPyBkYXRhLm1heCA6IFwiXCIsXHJcbiAgICAgIHVzZXI6IGRhdGEudXNlciAhPSBcIlwiID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgcXVlcnk6IGRhdGEucXVlcnkgIT0gXCJcIiA/IGRhdGEucXVlcnkgOiBcIlwiLFxyXG4gICAgICBwYWdlOiBkYXRhLnBhZ2UgIT0gXCJcIiA/IGRhdGEucGFnZSA6IFwiXCIsXHJcbiAgICAgIHBhZ2luYXRpb246IGRhdGEucGFnaW5hdGlvbiAhPSBcIlwiID8gZGF0YS5wYWdpbmF0aW9uIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuLy9hZGQgSXRlbVxyXG5leHBvcnQgZnVuY3Rpb24gQWRkKGRhdGEsIGdlc3Rpb24pIHtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZGF0YS5mcm1bMF0pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcInRhYmxlXCIsIGRhdGEudGFibGUpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcIm5vdGlmaWNhdGlvblwiLCBkYXRhLm5vdGlmaWNhdGlvbik7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwiZnJtX25hbWVcIiwgZGF0YS5mcm1fbmFtZSk7XHJcbiAgaWYgKGRhdGEuc3RhcnRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwic3RhcnRfZGF0ZVwiLCBkYXRhLnN0YXJ0X2RhdGUpO1xyXG4gIGlmIChkYXRhLmVuZF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJlbmRfZGF0ZVwiLCBkYXRhLmVuZF9kYXRlKTtcclxuICBpZiAoZGF0YS5pbWFnZVVybHNBcnkpIGZvcm1EYXRhLmFwcGVuZChcImltYWdlVXJsc0FyeVwiLCBkYXRhLmltYWdlVXJsc0FyeSk7XHJcbiAgaWYgKGRhdGEuc2VsZWN0MikgZm9ybURhdGEuYXBwZW5kKFwic2VsZWN0MlwiLCBkYXRhLnNlbGVjdDIpO1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICBjYWNoZTogZmFsc2UsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL3VwZGF0ZVxyXG5leHBvcnQgZnVuY3Rpb24gQ2FsbF9jb250cm9sbGVyKGRhdGEsIGdlc3Rpb24pIHtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZGF0YS5mcm1bMF0pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImZybV9uYW1lXCIsIGRhdGEuZnJtX25hbWUpO1xyXG4gIGlmIChkYXRhLnRhYmxlKSBmb3JtRGF0YS5hcHBlbmQoXCJ0YWJsZVwiLCBkYXRhLnRhYmxlKTtcclxuICBpZiAoZGF0YS5ub3RpZmljYXRpb24pIGZvcm1EYXRhLmFwcGVuZChcIm5vdGlmaWNhdGlvblwiLCBkYXRhLm5vdGlmaWNhdGlvbik7XHJcbiAgaWYgKGRhdGEudXJsX2RhdGEpIGZvcm1EYXRhLmFwcGVuZChcInVybF9kYXRhXCIsIGRhdGEudXJsX2RhdGEpO1xyXG4gIGlmIChkYXRhLmFjdGlvbikgZm9ybURhdGEuYXBwZW5kKFwiYWN0aW9uXCIsIGRhdGEuYWN0aW9uKTtcclxuICBpZiAoZGF0YS5pbWFnZVVybHNBcnkpIGZvcm1EYXRhLmFwcGVuZChcImltYWdlVXJsc0FyeVwiLCBkYXRhLmltYWdlVXJsc0FyeSk7XHJcbiAgaWYgKGRhdGEuZnJlZWRhdGEpIGZvcm1EYXRhLmFwcGVuZChcImZyZWVkYXRhXCIsIGRhdGEuZnJlZWRhdGEpO1xyXG4gIGlmIChkYXRhLnN0YXJ0X2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcInN0YXJ0X2RhdGVcIiwgZGF0YS5zdGFydF9kYXRlKTtcclxuICBpZiAoZGF0YS5lbmRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwiZW5kX2RhdGVcIiwgZGF0YS5lbmRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuaWQpIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGRhdGEuaWQpO1xyXG4gIGlmIChkYXRhLnVzZXJfaWQpIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGRhdGEudXNlcl9pZCk7XHJcbiAgaWYgKGRhdGEubWV0aG9kKSBmb3JtRGF0YS5hcHBlbmQoXCJtZXRob2RcIiwgZGF0YS5tZXRob2QpO1xyXG4gIGlmIChkYXRhLnNlbGVjdDIpIGZvcm1EYXRhLmFwcGVuZChcInNlbGVjdDJcIiwgZGF0YS5zZWxlY3QyKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vZGVsZXRlXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGUoZGF0YSwgZGlzcGxheUl0ZW0pIHtcclxuICBjaGVja0JlZm9yZURlbGV0ZShkYXRhKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICAgICAgbm90aWZpY2F0aW9uOiBkYXRhLm5vdGlmaWNhdGlvbixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgZGlzcGxheUl0ZW0ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4vL2Z1bmN0aW9uIGNoZWNrIGJlZm9yZSBkZWxldGVcclxuZnVuY3Rpb24gY2hlY2tCZWZvcmVEZWxldGUoZGF0YSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBpZiAoIWRhdGEudXJsX2NoZWNrKSB7XHJcbiAgICAgIGRhdGEuc3dhbFxyXG4gICAgICAgIC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcclxuICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICBodG1sOiBcIjxwPllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzITwvcD5cIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJEZWxldGUhXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmxfY2hlY2ssXHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBkYXRhLnN3YWxcclxuICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGh0bWw6IFwiPHA+WW91IHdvbid0IGJlIGFibGUgdG8gcmV2ZXJ0IHRoaXMhPC9wPlwiICsgcmVzcG9uc2UubXNnLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXHJcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkRlbGV0ZSFcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmFpbCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNdWx0aXNlbGxlY3QoZGF0YSkge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgXCJmb3Jtcy9maWxsTXVsdGlzZWxlY3RcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIGRhdGEuZGlzcGxheUlELmFwcGVuZChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGEuYWxlcnRJRC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDYXRlZ29ycmllKGNhdEZpZWxkLCBhbGVydElEKSB7XHJcbiAgbGV0IGNhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2F0RmllbGQpO1xyXG4gIGlmIChjYXQudmFsdWUubGVuZ3RoID09IDApIHtcclxuICAgIGFsZXJ0KFwiTGUgY2hhbXBzIGNhdMOpZ29yaWUgZXN0IHZpZGVcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogQkFTRV9VUkwgKyBcImZvcm1zL2FkZGNhdGVnb3JpZVwiLFxyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgY2F0ZWdvcmllOiBjYXQudmFsdWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZSAhPSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgJChhbGVydElEKS5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdDJBamF4UGFyYW1zKGRhdGEpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICBkZWxheTogMjUwLFxyXG4gICAgZGF0YTogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNlYXJjaFRlcm06IHBhcmFtcy50ZXJtLCAvLyBzZWFyY2ggdGVybVxyXG4gICAgICAgIHRhYmxlOiBkYXRhLnRhYmxlICE9IFwiXCIgPyBkYXRhLnRhYmxlIDogXCJcIixcclxuICAgICAgICBkYXRhX3R5cGU6IGRhdGEuZGF0YV90eXBlICE9IFwiXCIgPyBkYXRhLmRhdGFfdHlwZSA6IFwiXCIsXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgcHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHJlc3VsdHM6ICQubWFwKHJlc3BvbnNlLm1zZywgZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICBpZiAob2JqLmlkICE9IDApIHtcclxuICAgICAgICAgICAgICByZXR1cm4geyBpZDogb2JqLmlkLCB0ZXh0OiBvYmoudGV4dCB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBvYmouaWQsIHRleHQ6IG9iai50ZXh0IH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjYWNoZTogdHJ1ZSxcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBhZGRfaW5wdXRzX2Vycm9ycyA9IChJbnB1dEFyciwgYXJyRXJyKSA9PiB7XHJcbiAgSW5wdXRBcnIuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgIGlmIChhcnJFcnIuaW5kZXhPZihpbnB1dC5pZCkgPT0gLTEpIHtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWludmFsaWRcIik7XHJcbiAgICAgIGlucHV0Lm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0X2ludmFsaWRfaW5wdXQgPSAoZm9ybSkgPT4ge1xyXG4gIGZvcm0uZmluZChcIi5pcy1pbnZhbGlkXCIpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICBmb3JtLmZpbmQoXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG59O1xyXG5cclxuLy9yZW1vdmUgaW52YWxpZCBpbnB1dCBvbiBmb2N1c1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSW52YWxpZElucHV0KE15Zm9ybSkge1xyXG4gIE15Zm9ybS5vbihcImZvY3VzXCIsIFwiaW5wdXQsdGV4dGFyZWEsIC5jaywgLm5vdGUtZWRpdG9yXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwoXCJcIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlcnJvciA9IChmb3JtLCBJbnB1dEVycikgPT4ge1xyXG4gIHZhciBhcnJFcnIgPSBbXTtcclxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhJbnB1dEVycikpIHtcclxuICAgIHZhciBpbnB1dCA9IGZvcm0uZmluZChcIiNcIiArIGtleSkuYWRkQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG5cclxuICAgIGlucHV0LnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbCh2YWx1ZSk7XHJcbiAgICBhcnJFcnIucHVzaChrZXkpO1xyXG4gIH1cclxuICByZXR1cm4gYXJyRXJyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlucHV0c0FycmF5ID0gKGZvcm0pID0+IHtcclxuICB2YXIgYXJyID0gW107XHJcbiAgZm9ybS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGlucHV0c0FyciA9ICQodGhpcykuZmluZChcIjppbnB1dFwiKS50b0FycmF5KCk7XHJcbiAgICBpbnB1dHNBcnIuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIFtcInN1Ym1pdFwiLCBcImhpZGRlblwiLCBcImNoZWNrYm94XCIsIFwiYnV0dG9uXCIsIFwiZmlsZVwiXS5pbmRleE9mKFxyXG4gICAgICAgICAgaW5wdXQudHlwZVxyXG4gICAgICAgICkgPT0gLTEgJiZcclxuICAgICAgICBpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgICAgKSB7XHJcbiAgICAgICAgYXJyLnB1c2goaW5wdXQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gYXJyO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCJjb3JlanMvY29uZmlnXCI7XHJcbmltcG9ydCB7IEFkZCwgQ2FsbF9jb250cm9sbGVyLCBNYW5hZ2VSZXNwb25zZSB9IGZyb20gXCJjb3JlanMvZm9ybV9jcnVkXCI7XHJcbmltcG9ydCB7IHJlc2V0X2ludmFsaWRfaW5wdXQgfSBmcm9tIFwiY29yZWpzL2lucHV0RXJyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyByZWFkdXJsIH0gZnJvbSBcImNvcmVqcy9wcm9maWxlX2ltZ1wiO1xyXG5mdW5jdGlvbiBQaHBMUihlbGVtZW50KSB7XHJcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB0aGlzLmluaXQoKTtcclxufVxyXG5QaHBMUi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICB0aGlzLnNldHVwVmFyaWFibGVzKCk7XHJcbiAgdGhpcy5zZXR1cEV2ZW50cygpO1xyXG59O1xyXG4vL1BIUCBMUiBzZXR1cCBWYXJpYWJsZXNcclxuUGhwTFIucHJvdG90eXBlLnNldHVwVmFyaWFibGVzID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMubG9nYm94ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjbG9naW4tYm94XCIpO1xyXG4gIHRoaXMubG9naW5mcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNsb2dpbi1mcm1cIik7XHJcbiAgdGhpcy5yZWdib3ggPSB0aGlzLmVsZW1lbnQuZmluZChcIiNyZWdpc3Rlci1ib3hcIik7XHJcbiAgdGhpcy5yZWdmcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNyZWdpc3Rlci1mcm1cIik7XHJcbiAgdGhpcy5mb3Jnb3Rib3ggPSB0aGlzLmVsZW1lbnQuZmluZChcIiNmb3Jnb3QtYm94XCIpO1xyXG4gIHRoaXMuZm9yZ290ZnJtID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjZm9yZ290LWZybVwiKTtcclxufTtcclxuLy9QSFAgTFIgc2V0dXAgRXZlbnRzXHJcblBocExSLnByb3RvdHlwZS5zZXR1cEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgcGhwTFIgPSB0aGlzO1xyXG5cclxuICAvL3JlZnJlc2ggbG9naW4gJiByZWdpc3RlciBmcm0gb24gaGlkZSBhbmQgc2hvd1xyXG4gIHBocExSLmxvZ2JveC5vbihcImhpZGUuYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHBocExSLmxvZ2luZnJtLmZpbmQoXCIuaXMtaW52YWxpZFwiKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICByZXNldF9pbnZhbGlkX2lucHV0KHBocExSLmxvZ2luZnJtKTtcclxuICAgIH1cclxuICB9KTtcclxuICAvL1Jlc2V0IHJlZ2lzdGVyIGZvcm0gaW52YWxpZCBpbnB1dCBvbiBoaWRlIG1vZGFsXHJcbiAgcGhwTFIucmVnYm94Lm9uKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAocGhwTFIucmVnZnJtLmZpbmQoXCIuaXMtaW52YWxpZFwiKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICByZXNldF9pbnZhbGlkX2lucHV0KHBocExSLnJlZ2ZybSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy9SZXNldCByZWdpc3RlciBmb3JtIG9uIHNob3duXHJcbiAgcGhwTFIucmVnYm94Lm9uKFwic2hvdy5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwaHBMUi5yZWdmcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgcGhwTFIucmVnZnJtLmZpbmQoXCIjcmVnQWxlcnRcIikuaHRtbChcIlwiKTtcclxuICB9KTtcclxuICAvL3JlbW92ZSBpbnZhbGlkIGlucHV0IG9uIGZvY3VzIHJlZ2lzdGVyXHJcbiAgcGhwTFIucmVnZnJtLm9uKFwiZm9jdXNcIiwgXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG4gIH0pO1xyXG4gIC8vcmVtb3ZlIGludmFsaWQgaW5wdXQgb24gZm9jdXMgbG9naW5cclxuICBwaHBMUi5sb2dpbmZybS5vbihcImZvY3VzXCIsIFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxuICB9KTtcclxuICAvL3Jlc2V0IGZvcmdvdCBwYXNzd29yZCBmcm1cclxuICBwaHBMUi5mb3Jnb3Rib3gub24oXCJoaWRlLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBocExSLmZvcmdvdGZybS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgfSk7XHJcbiAgLy9GaWxsIGluIGxvZ2luIGZyb20gY29va2llcyBvbiBzaG9ud1xyXG4gIHBocExSLmxvZ2JveC5vbihcInNob3duLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogQkFTRV9VUkwgKyBcImF1dGgvcmVtZW1iZXJfY2hlY2tcIixcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjZW1haWxcIikudmFsKHJlc3BvbnNlLm1zZy5lbWFpbCk7XHJcbiAgICAgICAgICBwaHBMUi5sb2dpbmZybVxyXG4gICAgICAgICAgICAuZmluZChcIiNjdXN0b21DaGVja1wiKVxyXG4gICAgICAgICAgICAuYXR0cihcImNoZWNrZWRcIiwgcmVzcG9uc2UubXNnLnJlbWVtYmVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNlbWFpbFwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI3Bhc3N3b3JkXCIpLnZhbChcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICAvL1JlZ2lzdGVyIGZvcm1cclxuICBwaHBMUi5yZWdmcm0ub24oXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBwaHBMUi5yZWdmcm0uZmluZChcIiNyZWdpc3Rlci1idG5cIikudmFsKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICB2YXIgaW5wdXREYXRhID0ge1xyXG4gICAgICB1cmw6IFwiYXV0aC9hamF4UmVnaXN0ZXJcIixcclxuICAgICAgZnJtOiBwaHBMUi5yZWdmcm0sXHJcbiAgICAgIHRhYmxlOiBcImF1dGhcIixcclxuICAgICAgbm90aWZpY2F0aW9uOiBcImFkbWluXCIsXHJcbiAgICAgIGZybV9uYW1lOiBcInJlZ2lzdGVyLWZybVwiLFxyXG4gICAgfTtcclxuICAgIEFkZChpbnB1dERhdGEsIGdlc3Rpb25SKTtcclxuICAgIGZ1bmN0aW9uIGdlc3Rpb25SKHJlc3BvbnNlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgcGhwTFIucmVnZnJtLmZpbmQoXCIjcmVnaXN0ZXItYnRuXCIpLnZhbChcIkVucmVnaXN0cmVyXCIpO1xyXG4gICAgICB2YXIgb3V0cHV0RGF0YSA9IHtcclxuICAgICAgICBmcm06IHBocExSLnJlZ2ZybSxcclxuICAgICAgICBzd2FsOiBmYWxzZSxcclxuICAgICAgICBhbGVydGlkOiBwaHBMUi5yZWdmcm0uZmluZChcIiNyZWdBbGVydFwiKSxcclxuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICBpbWdhcmVhOiBwaHBMUi5yZWdib3guZmluZChcIi51cGxvYWQtcHJvZmlsZS1pbWFnZSAuaW1nXCIpLFxyXG4gICAgICAgIGltZ3ZhbHVlOiByZXNwb25zZS5pbWcgPyByZXNwb25zZS5pbWcgOiBcIlwiLFxyXG4gICAgICAgIGFsZXJ0c3VjY2VzczogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgICAgTWFuYWdlUmVzcG9uc2UocmVzcG9uc2UsIG91dHB1dERhdGEpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvL3JlYWQgcHJvZmlsZSBpbWFnZSBvbiBjaGFuZ2VcclxuICBwaHBMUi5yZWdib3hcclxuICAgIC5maW5kKCcudXBsb2FkLXByb2ZpbGUtaW1hZ2UgaW5wdXRbdHlwZT1cImZpbGVcIl0nKVxyXG4gICAgLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmVhZHVybChcclxuICAgICAgICB0aGlzLFxyXG4gICAgICAgIHBocExSLnJlZ2JveC5maW5kKFwiLnVwbG9hZC1wcm9maWxlLWltYWdlIC5pbWdcIiksXHJcbiAgICAgICAgcGhwTFIucmVnYm94LmZpbmQoXCIudXBsb2FkLXByb2ZpbGUtaW1hZ2UgLmNhbWVyYS1pY29uXCIpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAvL0xvZ2luIGZvcm1cclxuXHJcbiAgcGhwTFIubG9naW5mcm0ub24oXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2xvZ2luLWJ0blwiKS52YWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICB1cmw6IFwiYXV0aC9hamF4TG9naW5cIixcclxuICAgICAgZnJtOiBwaHBMUi5sb2dpbmZybSxcclxuICAgICAgZnJtX25hbWU6IFwibG9naW4tZnJtXCIsXHJcbiAgICB9O1xyXG4gICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIE1hbmFnZUxvZ2luUmVzcG9uc2UpO1xyXG4gICAgLy9tYW5hZ2UgbG9naW4gUmVzcG9uc2VcclxuICAgIGZ1bmN0aW9uIE1hbmFnZUxvZ2luUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbi1idG5cIikudmFsKFwiTG9naW5cIik7XHJcbiAgICAgIHZhciByZGF0YSA9IHtcclxuICAgICAgICBmcm06IHBocExSLmxvZ2luZnJtLFxyXG4gICAgICAgIGJ0bjogcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbi1idG5cIiksXHJcbiAgICAgICAgdGV4dEJ0bjogXCJTaWduIEluXCIsXHJcbiAgICAgICAgYWxlcnRpZDogcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbkFsZXJ0XCIpLFxyXG4gICAgICAgIGxvZ2luYm94OiBwaHBMUi5sb2dib3gsXHJcbiAgICAgICAgbG9naW46IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICAgIE1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCByZGF0YSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vbG9naW4gd2l0aCBGYWNlYm9va1xyXG4gIHBocExSLmxvZ2JveC5maW5kKFwiI2ZibGlua1wiKS5vbihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2xvZ2luLWJ0blwiKS52YWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICBmcm06IHBocExSLmxvZ2luZnJtLFxyXG4gICAgICB1cmw6IFwiZ3Vlc3RzL2ZiTG9naW5cIixcclxuICAgICAgZnJtX25hbWU6IFwibG9naW4tZnJtXCIsXHJcbiAgICB9O1xyXG4gICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIEZiUmVzcG9uc2UpO1xyXG4gICAgZnVuY3Rpb24gRmJSZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgRkIgPSBmYWNlYm9va2xvZ2luKHJlc3BvbnNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2xvZ2luQWxlcnRcIikuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy9mYWNlYm9vayBsb2dpblxyXG4gIGZ1bmN0aW9uIGZhY2Vib29rbG9naW4ocmVzcCkge1xyXG4gICAgRmFjZWJvb2subG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBGYWNlYm9vay5pbml0KHtcclxuICAgICAgICBhcHBJZDogcmVzcC5tc2cuYXBwSUQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBGYWNlYm9vay5nZXRMb2dpblN0YXR1cygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIikge1xyXG4gICAgICAgICAgZ2V0RmJVc2VyRGF0YSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmYkxvZ2luKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEZhY2Vib29rO1xyXG4gIH1cclxuXHJcbiAgLy8gRmFjZWJvb2sgbG9naW4gd2l0aCBKYXZhU2NyaXB0IFNES1xyXG4gIGZ1bmN0aW9uIGZiTG9naW4oKSB7XHJcbiAgICBGQi5sb2dpbih7XHJcbiAgICAgIHNjb3BlOiBcImVtYWlsXCIsXHJcbiAgICAgIHJldHVybl9zY29wZXM6IHRydWUsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSBcImNvbm5lY3RlZFwiKSB7XHJcbiAgICAgICAgZ2V0RmJVc2VyRGF0YSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5BbGVydFwiKS5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgXCJVc2VyIGNhbmNlbGxlZCBsb2dpbiBvciBkaWQgbm90IGZ1bGx5IGF1dGhvcml6ZS5cIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIC8vIEZldGNoIHRoZSB1c2VyIHByb2ZpbGUgZGF0YSBmcm9tIGZhY2Vib29rXHJcbiAgZnVuY3Rpb24gZ2V0RmJVc2VyRGF0YSgpIHtcclxuICAgIEZCLmFwaShcIi9tZVwiLCBcImdldFwiLCB7XHJcbiAgICAgIGZpZWxkczogXCJpZCxmaXJzdF9uYW1lLGxhc3RfbmFtZSxlbWFpbCxsaW5rLGdlbmRlcixsb2NhbGUscGljdHVyZVwiLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgZnJtOiBwaHBMUi5sb2dpbmZybSxcclxuICAgICAgICBmcm1fbmFtZTogXCJsb2dpbi1mcm1cIixcclxuICAgICAgICB1cmw6IFwiYXV0aC9mYmxvZ2luXCIsXHJcbiAgICAgICAgZnJlZWRhdGE6IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSxcclxuICAgICAgfTtcclxuICAgICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIE1hbmFnZUxvZ2luUmVzcG9uc2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vRm9yZ290IHBhc3N3b3JkIHJlcXVlc3RcclxuICBwaHBMUi5mb3Jnb3Rmcm0ub24oXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBwaHBMUi5mb3Jnb3Rmcm0uZmluZChcIiNmb3Jnb3QtYnRuXCIpLnZhbChcIlBsZWFzZSB3YWl0Li4uXCIpO1xyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgIHVybDogXCJhdXRoL2ZvcmdvdFwiLFxyXG4gICAgICBmcm06IHBocExSLmZvcmdvdGZybSxcclxuICAgICAgZnJtX25hbWU6IFwiZm9yZ290LWZybVwiLFxyXG4gICAgfTtcclxuICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBNUmVzcG9uc2UpO1xyXG4gICAgZnVuY3Rpb24gTVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICAgIHZhciByZGF0YSA9IHtcclxuICAgICAgICBmcm06IHBocExSLmZvcmdvdGZybSxcclxuICAgICAgICBhbGVydGlkOiBwaHBMUi5mb3Jnb3Rmcm0uZmluZChcIiNmb3Jnb3RBbGVydFwiKSxcclxuICAgICAgICBhbGVydHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICAgIE1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCByZGF0YSk7XHJcbiAgICAgIHBocExSLmZvcmdvdGZybS5maW5kKFwiI2ZvcmdvdC1idG5cIikudmFsKFwiUmVzZXQgcGFzc3dvcmRcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy9sb2dvdXRcclxuICB2YXIgbG9nb3V0ID0gJChcImE6Y29udGFpbnMoJ0xvZ291dCcpXCIpO1xyXG5cclxuICAkKGxvZ291dCkub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIEZCICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIEZCLmxvZ291dCgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgLy8gbG9nZ2VkIG91dFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogQkFTRV9VUkwgKyBcImF1dGgvbG9nb3V0XCIsXHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBsb2dvdXQuY2xvc2VzdChcImRpdlwiKS5sb2FkKGxvY2F0aW9uLmhyZWYgKyBcIiAuY29ubmVjdFwiKTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5tc2cgPT0gXCJyZWRpcmVjdFwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gQkFTRV9VUkw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQWpheCBsb2dvdXQgZnJvbSBlbHNld2hlcmVcclxufTtcclxuJC5mbi5waHBMUiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgbmV3IFBocExSKHRoaXMpO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG4kKFwiI0xvZ2luLVJlZ2lzdGVyLVN5c3RlbVwiKS5waHBMUigpO1xyXG4iLCJleHBvcnQgY29uc3QgcmVhZHVybCA9IChpbnB1dCwgaW1nLCBpY29uKSA9PiB7XHJcbiAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpbWcuYXR0cihcInNyY1wiLCBlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICBpY29uLmNzcyh7XHJcbiAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcclxuICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=