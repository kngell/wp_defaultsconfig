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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/assets/js/core/config.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




 //display all details

function displayAllDetails(data, gestion) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + data.url,
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
    url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + data.url,
    method: "post",
    data: data.formData,
    success: function success(response) {
      gestion(response, data.params ? data.params : "");
    }
  });
} //display all Items

function displayAllItems(data, gestion) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + data.url,
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
  if (data.hasOwnProperty("categorie")) formData.append("categorie", data.categorie);

  if (data.hasOwnProperty("files")) {
    for (var i = 0; i < data.files.length; i++) {
      formData.append(data.files[i].name, data.files[i]);
    }
  }

  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + data.url,
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
  if (data.hasOwnProperty("categorie")) formData.append("categorie", data.categorie);
  if (data.hasOwnProperty("tbl_options")) formData.append("tbl_options", data.tbl_options);

  if (data.hasOwnProperty("files")) {
    for (var i = 0; i < data.files.length; i++) {
      formData.append(data.files[i].name, data.files[i]);
    }
  }

  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + data.url,
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
        url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + data.url,
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
        url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + data.url_check,
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
    url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + "forms/fillMultiselect",
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
      url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + "forms/addcategorie",
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
    url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + _data.url,
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

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
        if (response.result == "success") {
          phpLR.regbox.find(".upload-profile-image .img").attr("src", response.img ? response.img : "");
          phpLR.regfrm.trigger("reset");
          phpLR.regfrm.find("#regAlert").html(response.msg);
        } else {
          if (response.result == "error-field") {
            corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.default.error(phpLR.loginfrm, response.msg);
          } else {
            phpLR.loginfrm.find("#loginAlert").html(response.msg);
          }

          s;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvZm9ybV9jcnVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9pbnB1dEVyck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2xvZ2luX3JlZ2lzdGVyLmNsYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9wcm9maWxlX2ltZy5qcyJdLCJuYW1lcyI6WyJkaXNwbGF5QWxsRGV0YWlscyIsImRhdGEiLCJnZXN0aW9uIiwiJCIsImFqYXgiLCJ1cmwiLCJCQVNFX1VSTCIsIm1ldGhvZCIsInRhYmxlIiwiaWQiLCJ1c2VyIiwic2Vzc2lvbl9pZCIsImRhdGFfdHlwZSIsInJldHVybl9tb2RlIiwidG9rZW4iLCJmcm1fbmFtZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInBhcmFtcyIsImVkaXRGb3JtIiwiZm9ybURhdGEiLCJkaXNwbGF5QWxsSXRlbXMiLCJzdGFydCIsIm1heCIsInF1ZXJ5IiwicGFnZSIsInBhZ2luYXRpb24iLCJBZGQiLCJGb3JtRGF0YSIsImZybSIsImFwcGVuZCIsIm5vdGlmaWNhdGlvbiIsImhhc093blByb3BlcnR5Iiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwiaW1hZ2VVcmxzQXJ5Iiwic2VsZWN0MiIsImNhdGVnb3JpZSIsImkiLCJmaWxlcyIsImxlbmd0aCIsIm5hbWUiLCJjYWNoZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJDYWxsX2NvbnRyb2xsZXIiLCJ1cmxfZGF0YSIsImFjdGlvbiIsImZyZWVkYXRhIiwidXNlcl9pZCIsInRibF9vcHRpb25zIiwiRGVsZXRlIiwiZGlzcGxheUl0ZW0iLCJjaGVja0JlZm9yZURlbGV0ZSIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsInNlcnZlckRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVybF9jaGVjayIsImh0bWwiLCJodHciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzd2FsX21lc3NhZ2UiLCJpbm5lckhUTUwiLCJzd2FsIiwiZmlyZSIsInRpdGxlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJzd2FsX2J1dHRvbiIsImNvbnNvbGUiLCJsb2ciLCJkb25lIiwibXNnIiwiZmFpbCIsImVycm9yIiwiZGlzcGxheU11bHRpc2VsbGVjdCIsImRpc3BsYXlJRCIsImFsZXJ0SUQiLCJhZGRDYXRlZ29ycmllIiwiY2F0RmllbGQiLCJjYXQiLCJxdWVyeVNlbGVjdG9yIiwiYWxlcnQiLCJzZWxlY3QyQWpheFBhcmFtcyIsInR5cGUiLCJkYXRhVHlwZSIsImRlbGF5Iiwic2VhcmNoVGVybSIsInRlcm0iLCJwcm9jZXNzUmVzdWx0cyIsInJlc3VsdHMiLCJtYXAiLCJvYmoiLCJ0ZXh0IiwiSW5wdXRfTWFuYWdlciIsImZvcm0iLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJJbnB1dEVyciIsImFyckVyciIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJpbnB1dCIsImFkZENsYXNzIiwicGFyZW50IiwiY2hpbGRyZW4iLCJwdXNoIiwiTXlmb3JtIiwib24iLCJMb2dpbl9BbmRfUmVnaXN0ZXIiLCJlbGVtZW50IiwiX3NldHVwVmFyaWFibGVzIiwiX3NldHVwRXZlbnRzIiwibG9nYm94IiwibG9naW5mcm0iLCJyZWdib3giLCJyZWdmcm0iLCJmb3Jnb3Rib3giLCJmb3Jnb3Rmcm0iLCJwaHBMUiIsInRyaWdnZXIiLCJ2YWwiLCJlbWFpbCIsImF0dHIiLCJyZW1lbWJlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImlucHV0RGF0YSIsImdlc3Rpb25SIiwiaW1nIiwicyIsInJlYWR1cmwiLCJNYW5hZ2VMb2dpblJlc3BvbnNlIiwibW9kYWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIk1SZXNwb25zZSIsImxvZ291dCIsIkZCIiwiY2xvc2VzdCIsImxvYWQiLCJocmVmIiwiX2luaXQiLCJpY29uIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInRhcmdldCIsImNzcyIsImRpc3BsYXkiLCJyZWFkQXNEYXRhVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNPLFNBQVNBLGlCQUFULENBQTJCQyxJQUEzQixFQUFpQ0MsT0FBakMsRUFBMEM7QUFDL0NDLEdBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsNkNBQVEsR0FBR0wsSUFBSSxDQUFDSSxHQURoQjtBQUVMRSxVQUFNLEVBQUUsTUFGSDtBQUdMTixRQUFJLEVBQUU7QUFDSk8sV0FBSyxFQUFFUCxJQUFJLENBQUNPLEtBRFI7QUFFSkMsUUFBRSxFQUFFUixJQUFJLENBQUNRLEVBRkw7QUFHSkMsVUFBSSxFQUFFVCxJQUFJLENBQUNTLElBQUwsR0FBWVQsSUFBSSxDQUFDUyxJQUFqQixHQUF3QixFQUgxQjtBQUlKQyxnQkFBVSxFQUFFVixJQUFJLENBQUNVLFVBQUwsR0FBa0JWLElBQUksQ0FBQ1UsVUFBdkIsR0FBb0MsRUFKNUM7QUFLSkMsZUFBUyxFQUFFWCxJQUFJLENBQUNXLFNBQUwsR0FBaUJYLElBQUksQ0FBQ1csU0FBdEIsR0FBa0MsRUFMekM7QUFNSkMsaUJBQVcsRUFBRVosSUFBSSxDQUFDWSxXQUFMLEdBQW1CWixJQUFJLENBQUNZLFdBQXhCLEdBQXNDLEVBTi9DO0FBT0pDLFdBQUssRUFBRWIsSUFBSSxDQUFDYSxLQUFMLEdBQWFiLElBQUksQ0FBQ2EsS0FBbEIsR0FBMEIsRUFQN0I7QUFRSkMsY0FBUSxFQUFFZCxJQUFJLENBQUNjLFFBQUwsR0FBZ0JkLElBQUksQ0FBQ2MsUUFBckIsR0FBZ0M7QUFSdEMsS0FIRDtBQWFMQyxXQUFPLEVBQUUsaUJBQVVDLFFBQVYsRUFBb0I7QUFDM0JmLGFBQU8sQ0FBQ2UsUUFBRCxFQUFXaEIsSUFBSSxD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LENBWE0sQyIsImZpbGUiOiJsYXp5bG9hZC9qcy9hZG1pbi9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG4vL2Rpc3BsYXkgYWxsIGRldGFpbHNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxEZXRhaWxzKGRhdGEsIGdlc3Rpb24pIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICB1c2VyOiBkYXRhLnVzZXIgPyBkYXRhLnVzZXIgOiBcIlwiLFxyXG4gICAgICBzZXNzaW9uX2lkOiBkYXRhLnNlc3Npb25faWQgPyBkYXRhLnNlc3Npb25faWQgOiBcIlwiLFxyXG4gICAgICBkYXRhX3R5cGU6IGRhdGEuZGF0YV90eXBlID8gZGF0YS5kYXRhX3R5cGUgOiBcIlwiLFxyXG4gICAgICByZXR1cm5fbW9kZTogZGF0YS5yZXR1cm5fbW9kZSA/IGRhdGEucmV0dXJuX21vZGUgOiBcIlwiLFxyXG4gICAgICB0b2tlbjogZGF0YS50b2tlbiA/IGRhdGEudG9rZW4gOiBcIlwiLFxyXG4gICAgICBmcm1fbmFtZTogZGF0YS5mcm1fbmFtZSA/IGRhdGEuZnJtX25hbWUgOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbi8vZWRpdCBkYXRhXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0Rm9ybShkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLmZvcm1EYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vZGlzcGxheSBhbGwgSXRlbXNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxJdGVtcyhkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCAhPSBcIlwiID8gZGF0YS5pZCA6IFwiXCIsXHJcbiAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICBtYXg6IGRhdGEubWF4ICE9IFwiXCIgPyBkYXRhLm1heCA6IFwiXCIsXHJcbiAgICAgIHVzZXI6IGRhdGEudXNlciAhPSBcIlwiID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgcXVlcnk6IGRhdGEucXVlcnkgIT0gXCJcIiA/IGRhdGEucXVlcnkgOiBcIlwiLFxyXG4gICAgICBwYWdlOiBkYXRhLnBhZ2UgIT0gXCJcIiA/IGRhdGEucGFnZSA6IFwiXCIsXHJcbiAgICAgIHBhZ2luYXRpb246IGRhdGEucGFnaW5hdGlvbiAhPSBcIlwiID8gZGF0YS5wYWdpbmF0aW9uIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuLy9hZGQgSXRlbVxyXG5leHBvcnQgZnVuY3Rpb24gQWRkKGRhdGEsIGdlc3Rpb24pIHtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZGF0YS5mcm1bMF0pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcInRhYmxlXCIsIGRhdGEudGFibGUpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcIm5vdGlmaWNhdGlvblwiLCBkYXRhLm5vdGlmaWNhdGlvbik7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwiZnJtX25hbWVcIiwgZGF0YS5mcm1fbmFtZSk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJzdGFydF9kYXRlXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwic3RhcnRfZGF0ZVwiLCBkYXRhLnN0YXJ0X2RhdGUpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiZW5kX2RhdGVcIikpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJlbmRfZGF0ZVwiLCBkYXRhLmVuZF9kYXRlKTtcclxuICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImltYWdlVXJsc0FyeVwiKSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlVXJsc0FyeVwiLCBkYXRhLmltYWdlVXJsc0FyeSk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJzZWxlY3QyXCIpKSBmb3JtRGF0YS5hcHBlbmQoXCJzZWxlY3QyXCIsIGRhdGEuc2VsZWN0Mik7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJjYXRlZ29yaWVcIikpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJjYXRlZ29yaWVcIiwgZGF0YS5jYXRlZ29yaWUpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiZmlsZXNcIikpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoZGF0YS5maWxlc1tpXS5uYW1lLCBkYXRhLmZpbGVzW2ldKTtcclxuICAgIH1cclxuICB9XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIGNhY2hlOiBmYWxzZSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbi8vdXBkYXRlXHJcbmV4cG9ydCBmdW5jdGlvbiBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgZ2VzdGlvbikge1xyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkYXRhLmZybVswXSk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwiZnJtX25hbWVcIiwgZGF0YS5mcm1fbmFtZSk7XHJcbiAgaWYgKGRhdGEudGFibGUpIGZvcm1EYXRhLmFwcGVuZChcInRhYmxlXCIsIGRhdGEudGFibGUpO1xyXG4gIGlmIChkYXRhLm5vdGlmaWNhdGlvbikgZm9ybURhdGEuYXBwZW5kKFwibm90aWZpY2F0aW9uXCIsIGRhdGEubm90aWZpY2F0aW9uKTtcclxuICBpZiAoZGF0YS51cmxfZGF0YSkgZm9ybURhdGEuYXBwZW5kKFwidXJsX2RhdGFcIiwgZGF0YS51cmxfZGF0YSk7XHJcbiAgaWYgKGRhdGEuYWN0aW9uKSBmb3JtRGF0YS5hcHBlbmQoXCJhY3Rpb25cIiwgZGF0YS5hY3Rpb24pO1xyXG4gIGlmIChkYXRhLmltYWdlVXJsc0FyeSkgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VVcmxzQXJ5XCIsIGRhdGEuaW1hZ2VVcmxzQXJ5KTtcclxuICBpZiAoZGF0YS5mcmVlZGF0YSkgZm9ybURhdGEuYXBwZW5kKFwiZnJlZWRhdGFcIiwgZGF0YS5mcmVlZGF0YSk7XHJcbiAgaWYgKGRhdGEuc3RhcnRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwic3RhcnRfZGF0ZVwiLCBkYXRhLnN0YXJ0X2RhdGUpO1xyXG4gIGlmIChkYXRhLmVuZF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJlbmRfZGF0ZVwiLCBkYXRhLmVuZF9kYXRlKTtcclxuICBpZiAoZGF0YS5pZCkgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgZGF0YS5pZCk7XHJcbiAgaWYgKGRhdGEudXNlcl9pZCkgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgZGF0YS51c2VyX2lkKTtcclxuICBpZiAoZGF0YS5tZXRob2QpIGZvcm1EYXRhLmFwcGVuZChcIm1ldGhvZFwiLCBkYXRhLm1ldGhvZCk7XHJcbiAgaWYgKGRhdGEuc2VsZWN0MikgZm9ybURhdGEuYXBwZW5kKFwic2VsZWN0MlwiLCBkYXRhLnNlbGVjdDIpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiY2F0ZWdvcmllXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY2F0ZWdvcmllXCIsIGRhdGEuY2F0ZWdvcmllKTtcclxuICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcInRibF9vcHRpb25zXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwidGJsX29wdGlvbnNcIiwgZGF0YS50Ymxfb3B0aW9ucyk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJmaWxlc1wiKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChkYXRhLmZpbGVzW2ldLm5hbWUsIGRhdGEuZmlsZXNbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vZGVsZXRlXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGUoZGF0YSwgZGlzcGxheUl0ZW0pIHtcclxuICBjaGVja0JlZm9yZURlbGV0ZShkYXRhKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBkYXRhOiBkYXRhLnNlcnZlckRhdGEsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBkaXNwbGF5SXRlbShyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbi8vZnVuY3Rpb24gY2hlY2sgYmVmb3JlIGRlbGV0ZVxyXG5mdW5jdGlvbiBjaGVja0JlZm9yZURlbGV0ZShkYXRhKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGlmICghZGF0YS51cmxfY2hlY2spIHtcclxuICAgICAgY29uc3QgaHRtbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBodHcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGlmIChkYXRhLnN3YWxfbWVzc2FnZSkge1xyXG4gICAgICAgICAgcmV0dXJuIChodHcuaW5uZXJIVE1MID0gZGF0YS5zd2FsX21lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gKGh0dy5pbm5lckhUTUwgPSBcIjxwPllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzITwvcD5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBkYXRhLnN3YWxcclxuICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgaHRtbDogaHRtbCgpLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBkYXRhLnN3YWxfYnV0dG9uID8gZGF0YS5zd2FsX2J1dHRvbiA6IFwiRGVsZXRlIVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsX2NoZWNrLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YTogZGF0YS5zZXJ2ZXJEYXRhLFxyXG4gICAgICB9KVxyXG4gICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgZGF0YS5zd2FsXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBodG1sOiBcIjxwPllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzITwvcD5cIiArIHJlc3BvbnNlLm1zZyxcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJEZWxldGUhXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZhaWwoKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TXVsdGlzZWxsZWN0KGRhdGEpIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIFwiZm9ybXMvZmlsbE11bHRpc2VsZWN0XCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICBkYXRhLmRpc3BsYXlJRC5hcHBlbmQocmVzcG9uc2UubXNnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhLmFsZXJ0SUQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2F0ZWdvcnJpZShjYXRGaWVsZCwgYWxlcnRJRCkge1xyXG4gIGxldCBjYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhdEZpZWxkKTtcclxuICBpZiAoY2F0LnZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICBhbGVydChcIkxlIGNoYW1wcyBjYXTDqWdvcmllIGVzdCB2aWRlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IEJBU0VfVVJMICsgXCJmb3Jtcy9hZGRjYXRlZ29yaWVcIixcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNhdGVnb3JpZTogY2F0LnZhbHVlLFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UgIT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICQoYWxlcnRJRCkuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3QyQWpheFBhcmFtcyhkYXRhKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgZGVsYXk6IDI1MCxcclxuICAgIGRhdGE6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZWFyY2hUZXJtOiBwYXJhbXMudGVybSwgLy8gc2VhcmNoIHRlcm1cclxuICAgICAgICB0YWJsZTogZGF0YS50YWJsZSAhPSBcIlwiID8gZGF0YS50YWJsZSA6IFwiXCIsXHJcbiAgICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSAhPSBcIlwiID8gZGF0YS5kYXRhX3R5cGUgOiBcIlwiLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICByZXN1bHRzOiAkLm1hcChyZXNwb25zZS5tc2csIGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5pZCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IG9iai5pZCwgdGV4dDogb2JqLnRleHQgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4geyBpZDogb2JqLmlkLCB0ZXh0OiBvYmoudGV4dCB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2FjaGU6IHRydWUsXHJcbiAgfTtcclxufVxyXG4iLCJjbGFzcyBJbnB1dF9NYW5hZ2VyIHtcclxuICByZXNldF9pbnZhbGlkX2lucHV0ID0gKGZvcm0pID0+IHtcclxuICAgIGZvcm0uZmluZChcIi5pcy1pbnZhbGlkXCIpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgIGZvcm0uZmluZChcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwoXCJcIik7XHJcbiAgfTtcclxuICAvL3JlbW92ZSBpbnZhbGlkIGlucHV0IG9uIGZvY3VzXHJcbiAgcmVtb3ZlSW52YWxpZElucHV0KE15Zm9ybSkge1xyXG4gICAgTXlmb3JtLm9uKFwiZm9jdXNcIiwgXCJpbnB1dCx0ZXh0YXJlYSwgLmNrLCAubm90ZS1lZGl0b3JcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwoXCJcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZXJyb3IgPSAoZm9ybSwgSW5wdXRFcnIpID0+IHtcclxuICAgIHZhciBhcnJFcnIgPSBbXTtcclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKElucHV0RXJyKSkge1xyXG4gICAgICB2YXIgaW5wdXQgPSBmb3JtLmZpbmQoXCIjXCIgKyBrZXkpLmFkZENsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICAgaW5wdXQucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKHZhbHVlKTtcclxuICAgICAgYXJyRXJyLnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJFcnI7XHJcbiAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgSW5wdXRfTWFuYWdlcigpO1xyXG4iLCJpbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCJjb3JlanMvY29uZmlnXCI7XHJcbmltcG9ydCB7IEFkZCwgQ2FsbF9jb250cm9sbGVyIH0gZnJvbSBcImNvcmVqcy9mb3JtX2NydWRcIjtcclxuaW1wb3J0IGlucHV0IGZyb20gXCJjb3JlanMvaW5wdXRFcnJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHJlYWR1cmwgfSBmcm9tIFwiY29yZWpzL3Byb2ZpbGVfaW1nXCI7XHJcbmNsYXNzIExvZ2luX0FuZF9SZWdpc3RlciB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcbiAgX2luaXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9zZXR1cFZhcmlhYmxlcygpO1xyXG4gICAgdGhpcy5fc2V0dXBFdmVudHMoKTtcclxuICB9O1xyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvL1NldHVwIHZhcmlhYmxlc1xyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBfc2V0dXBWYXJpYWJsZXMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmxvZ2JveCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2xvZ2luLWJveFwiKTtcclxuICAgIHRoaXMubG9naW5mcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNsb2dpbi1mcm1cIik7XHJcbiAgICB0aGlzLnJlZ2JveCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3JlZ2lzdGVyLWJveFwiKTtcclxuICAgIHRoaXMucmVnZnJtID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjcmVnaXN0ZXItZnJtXCIpO1xyXG4gICAgdGhpcy5mb3Jnb3Rib3ggPSB0aGlzLmVsZW1lbnQuZmluZChcIiNmb3Jnb3QtYm94XCIpO1xyXG4gICAgdGhpcy5mb3Jnb3Rmcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNmb3Jnb3QtZnJtXCIpO1xyXG4gIH07XHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vU2V0dXAgZXZlbnRzXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIF9zZXR1cEV2ZW50cyA9ICgpID0+IHtcclxuICAgIHZhciBwaHBMUiA9IHRoaXM7XHJcbiAgICAvL3JlZnJlc2ggbG9naW4gJiByZWdpc3RlciBmcm0gb24gaGlkZSBhbmQgc2hvd1xyXG4gICAgcGhwTFIubG9nYm94Lm9uKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChwaHBMUi5sb2dpbmZybS5maW5kKFwiLmlzLWludmFsaWRcIikubGVuZ3RoICE9IDApIHtcclxuICAgICAgICBpbnB1dC5yZXNldF9pbnZhbGlkX2lucHV0KHBocExSLmxvZ2luZnJtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL1Jlc2V0IHJlZ2lzdGVyIGZvcm0gaW52YWxpZCBpbnB1dCBvbiBoaWRlIG1vZGFsXHJcbiAgICBwaHBMUi5yZWdib3gub24oXCJoaWRlLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHBocExSLnJlZ2ZybS5maW5kKFwiLmlzLWludmFsaWRcIikubGVuZ3RoICE9IDApIHtcclxuICAgICAgICBpbnB1dC5yZXNldF9pbnZhbGlkX2lucHV0KHBocExSLnJlZ2ZybSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9SZXNldCByZWdpc3RlciBmb3JtIG9uIHNob3duXHJcbiAgICBwaHBMUi5yZWdib3gub24oXCJzaG93LmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcGhwTFIucmVnZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgcGhwTFIucmVnZnJtLmZpbmQoXCIjcmVnQWxlcnRcIikuaHRtbChcIlwiKTtcclxuICAgIH0pO1xyXG4gICAgLy9yZW1vdmUgaW52YWxpZCBpbnB1dCBvbiBmb2N1cyByZWdpc3RlclxyXG4gICAgcGhwTFIucmVnZnJtLm9uKFwiZm9jdXNcIiwgXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxuICAgIH0pO1xyXG4gICAgLy9yZW1vdmUgaW52YWxpZCBpbnB1dCBvbiBmb2N1cyBsb2dpblxyXG4gICAgcGhwTFIubG9naW5mcm0ub24oXCJmb2N1c1wiLCBcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG4gICAgfSk7XHJcbiAgICAvL3Jlc2V0IGZvcmdvdCBwYXNzd29yZCBmcm1cclxuICAgIHBocExSLmZvcmdvdGJveC5vbihcImhpZGUuYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBwaHBMUi5mb3Jnb3Rmcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgfSk7XHJcbiAgICAvL0ZpbGwgaW4gbG9naW4gZnJvbSBjb29raWVzIG9uIHNob253XHJcbiAgICBwaHBMUi5sb2dib3gub24oXCJzaG93bi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIFwiYXV0aC9yZW1lbWJlcl9jaGVja1wiLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2VtYWlsXCIpLnZhbChyZXNwb25zZS5tc2cuZW1haWwpO1xyXG4gICAgICAgICAgICBwaHBMUi5sb2dpbmZybVxyXG4gICAgICAgICAgICAgIC5maW5kKFwiI2N1c3RvbUNoZWNrXCIpXHJcbiAgICAgICAgICAgICAgLmF0dHIoXCJjaGVja2VkXCIsIHJlc3BvbnNlLm1zZy5yZW1lbWJlcik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2VtYWlsXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNwYXNzd29yZFwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vUmVnaXN0ZXIgZm9ybVxyXG4gICAgcGhwTFIucmVnZnJtLm9uKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgcGhwTFIucmVnZnJtLmZpbmQoXCIjcmVnaXN0ZXItYnRuXCIpLnZhbChcIlBsZWFzZSB3YWl0Li4uXCIpO1xyXG4gICAgICB2YXIgaW5wdXREYXRhID0ge1xyXG4gICAgICAgIHVybDogXCJhdXRoL2FqYXhSZWdpc3RlclwiLFxyXG4gICAgICAgIGZybTogcGhwTFIucmVnZnJtLFxyXG4gICAgICAgIHRhYmxlOiBcImF1dGhcIixcclxuICAgICAgICBub3RpZmljYXRpb246IFwiYWRtaW5cIixcclxuICAgICAgICBmcm1fbmFtZTogXCJyZWdpc3Rlci1mcm1cIixcclxuICAgICAgfTtcclxuICAgICAgQWRkKGlucHV0RGF0YSwgZ2VzdGlvblIpO1xyXG4gICAgICBmdW5jdGlvbiBnZXN0aW9uUihyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIHBocExSLnJlZ2JveFxyXG4gICAgICAgICAgICAuZmluZChcIi51cGxvYWQtcHJvZmlsZS1pbWFnZSAuaW1nXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3JjXCIsIHJlc3BvbnNlLmltZyA/IHJlc3BvbnNlLmltZyA6IFwiXCIpO1xyXG4gICAgICAgICAgcGhwTFIucmVnZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgICAgIHBocExSLnJlZ2ZybS5maW5kKFwiI3JlZ0FsZXJ0XCIpLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcImVycm9yLWZpZWxkXCIpIHtcclxuICAgICAgICAgICAgaW5wdXQuZXJyb3IocGhwTFIubG9naW5mcm0sIHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2xvZ2luQWxlcnRcIikuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9yZWFkIHByb2ZpbGUgaW1hZ2Ugb24gY2hhbmdlXHJcbiAgICBwaHBMUi5yZWdib3hcclxuICAgICAgLmZpbmQoJy51cGxvYWQtcHJvZmlsZS1pbWFnZSBpbnB1dFt0eXBlPVwiZmlsZVwiXScpXHJcbiAgICAgIC5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVhZHVybChcclxuICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICBwaHBMUi5yZWdib3guZmluZChcIi51cGxvYWQtcHJvZmlsZS1pbWFnZSAuaW1nXCIpLFxyXG4gICAgICAgICAgcGhwTFIucmVnYm94LmZpbmQoXCIudXBsb2FkLXByb2ZpbGUtaW1hZ2UgLmNhbWVyYS1pY29uXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICAvL0xvZ2luIGZvcm1cclxuICAgIHBocExSLmxvZ2luZnJtLm9uKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbi1idG5cIikudmFsKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHVybDogXCJhdXRoL2FqYXhMb2dpblwiLFxyXG4gICAgICAgIGZybTogcGhwTFIubG9naW5mcm0sXHJcbiAgICAgICAgZnJtX25hbWU6IFwibG9naW4tZnJtXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBNYW5hZ2VMb2dpblJlc3BvbnNlKTtcclxuICAgICAgLy9tYW5hZ2UgbG9naW4gUmVzcG9uc2VcclxuICAgICAgZnVuY3Rpb24gTWFuYWdlTG9naW5SZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjbG9naW4tYnRuXCIpLnZhbChcIkxvZ2luXCIpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIHBocExSLmxvZ2luZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgICAgIHBocExSLmxvZ2JveC5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJlcnJvci1maWVsZFwiKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmVycm9yKHBocExSLmxvZ2luZnJtLCByZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbkFsZXJ0XCIpLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9Gb3Jnb3QgcGFzc3dvcmQgcmVxdWVzdFxyXG4gICAgcGhwTFIuZm9yZ290ZnJtLm9uKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcGhwTFIuZm9yZ290ZnJtLmZpbmQoXCIjZm9yZ290LWJ0blwiKS52YWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgdXJsOiBcImF1dGgvZm9yZ290XCIsXHJcbiAgICAgICAgZnJtOiBwaHBMUi5mb3Jnb3Rmcm0sXHJcbiAgICAgICAgZnJtX25hbWU6IFwiZm9yZ290LWZybVwiLFxyXG4gICAgICB9O1xyXG4gICAgICBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgTVJlc3BvbnNlKTtcclxuICAgICAgZnVuY3Rpb24gTVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcGhwTFIuZm9yZ290ZnJtLmZpbmQoXCIjZm9yZ290LWJ0blwiKS52YWwoXCJSZXNldCBwYXNzd29yZFwiKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBwaHBMUi5mb3Jnb3Rmcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICAgICAgcGhwTFIuZm9yZ290ZnJtLmZpbmQoXCIjcmVnQWxlcnRcIikuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwiZXJyb3ItZmllbGRcIikge1xyXG4gICAgICAgICAgICBpbnB1dC5lcnJvcihwaHBMUi5sb2dpbmZybSwgcmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjbG9naW5BbGVydFwiKS5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vbG9nb3V0XHJcbiAgICB2YXIgbG9nb3V0ID0gJChcImE6Y29udGFpbnMoJ0xvZ291dCcpXCIpO1xyXG4gICAgJChsb2dvdXQpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodHlwZW9mIEZCICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgRkIubG9nb3V0KCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIC8vIGxvZ2dlZCBvdXRcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogQkFTRV9VUkwgKyBcImF1dGgvbG9nb3V0XCIsXHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgbG9nb3V0LmNsb3Nlc3QoXCJkaXZcIikubG9hZChsb2NhdGlvbi5ocmVmICsgXCIgLmNvbm5lY3RcIik7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5tc2cgPT0gXCJyZWRpcmVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBCQVNFX1VSTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9naW5fQW5kX1JlZ2lzdGVyKCQoXCIjTG9naW4tUmVnaXN0ZXItU3lzdGVtXCIpKS5faW5pdCgpO1xyXG4iLCJleHBvcnQgY29uc3QgcmVhZHVybCA9IChpbnB1dCwgaW1nLCBpY29uKSA9PiB7XHJcbiAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpbWcuYXR0cihcInNyY1wiLCBlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICBpY29uLmNzcyh7XHJcbiAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcclxuICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=