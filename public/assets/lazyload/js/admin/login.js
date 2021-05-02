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
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/entries */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ "./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./src/assets/js/core/config.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





 //display all details

function displayAllDetails(data, gestion) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_5__.BASE_URL + data.url,
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
    url: _config__WEBPACK_IMPORTED_MODULE_5__.BASE_URL + data.url,
    method: "post",
    data: data.formData,
    success: function success(response) {
      gestion(response, data.params ? data.params : "");
    }
  });
} //display all Items

function displayAllItems(data, gestion) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_5__.BASE_URL + data.url,
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
    url: _config__WEBPACK_IMPORTED_MODULE_5__.BASE_URL + data.url,
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
  formData.append("isIE", (0,_config__WEBPACK_IMPORTED_MODULE_5__.isIE)());
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
    for (var _i = 0, _Object$entries = _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(data.select2); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      formData.append(key, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(value));
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
    url: _config__WEBPACK_IMPORTED_MODULE_5__.BASE_URL + data.url,
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
        url: _config__WEBPACK_IMPORTED_MODULE_5__.BASE_URL + data.url,
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
  return new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_3___default())(function (resolve, reject) {
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
        url: _config__WEBPACK_IMPORTED_MODULE_5__.BASE_URL + data.url_check,
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
    url: _config__WEBPACK_IMPORTED_MODULE_5__.BASE_URL + "forms/fillMultiselect",
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
      url: _config__WEBPACK_IMPORTED_MODULE_5__.BASE_URL + "forms/addcategorie",
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
    url: _config__WEBPACK_IMPORTED_MODULE_5__.BASE_URL + _data.url,
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
          results: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default()($).call($, response.msg, function (obj) {
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
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/entries */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_5__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");







var Input_Manager = /*#__PURE__*/function () {
  function Input_Manager() {
    (0,_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Input_Manager);

    (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "reset_invalid_input", function (form) {
      _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(form).call(form, ".is-invalid").removeClass("is-invalid");

      _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(form).call(form, "div.invalid-feedback").html("");
    });

    (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "error", function (form, InputErr) {
      var arrErr = [];

      for (var _i = 0, _Object$entries = _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_5___default()(InputErr); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        var input = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(form).call(form, "#" + key).addClass("is-invalid");

        input.parent().children("div.invalid-feedback").html(value);
        arrErr.push(key);
      }

      return arrErr;
    });
  }

  (0,_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Input_Manager, [{
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
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var corejs_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! corejs/config */ "./src/assets/js/core/config.js");
/* harmony import */ var corejs_form_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! corejs/form_crud */ "./src/assets/js/core/form_crud.js");
/* harmony import */ var corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! corejs/inputErrManager */ "./src/assets/js/core/inputErrManager.js");
/* harmony import */ var corejs_profile_img__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! corejs/profile_img */ "./src/assets/js/core/profile_img.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");








var Login_And_Register = function Login_And_Register(element) {
  var _this = this;

  (0,_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Login_And_Register);

  (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "_init", function () {
    _this._setupVariables();

    _this._setupEvents();
  });

  (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "_setupVariables", function () {
    var _context, _context2, _context3, _context4, _context5, _context6;

    _this.logbox = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context = _this.element).call(_context, "#login-box");
    _this.loginfrm = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = _this.element).call(_context2, "#login-frm");
    _this.regbox = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = _this.element).call(_context3, "#register-box");
    _this.regfrm = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context4 = _this.element).call(_context4, "#register-frm");
    _this.forgotbox = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context5 = _this.element).call(_context5, "#forgot-box");
    _this.forgotfrm = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context6 = _this.element).call(_context6, "#forgot-frm");
  });

  (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "_setupEvents", function () {
    var _context20;

    var phpLR = _this; //refresh login & register frm on hide and show

    phpLR.logbox.on("hide.bs.modal", function () {
      var _context7;

      if (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context7 = phpLR.loginfrm).call(_context7, ".is-invalid").length != 0) {
        corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_5__.default.reset_invalid_input(phpLR.loginfrm);
      }
    }); //Reset register form invalid input on hide modal

    phpLR.regbox.on("hide.bs.modal", function () {
      var _context8;

      if (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context8 = phpLR.regfrm).call(_context8, ".is-invalid").length != 0) {
        corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_5__.default.reset_invalid_input(phpLR.regfrm);
      }
    }); //Reset register form on shown

    phpLR.regbox.on("show.bs.modal", function () {
      var _context9;

      phpLR.regfrm.trigger("reset");

      _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context9 = phpLR.regfrm).call(_context9, "#regAlert").html("");
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
        url: corejs_config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + "auth/remember_check",
        method: "post",
        success: function success(response) {
          if (response.result === "success") {
            var _context10, _context11;

            _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context10 = phpLR.loginfrm).call(_context10, "#email").val(response.msg.email);

            _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context11 = phpLR.loginfrm).call(_context11, "#customCheck").attr("checked", response.msg.remember);
          } else {
            var _context12, _context13;

            _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context12 = phpLR.loginfrm).call(_context12, "#email").val("");

            _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context13 = phpLR.loginfrm).call(_context13, "#password").val("");
          }
        }
      });
    }); //Register form

    phpLR.regfrm.on("submit", function (e) {
      var _context14;

      e.preventDefault();
      e.stopPropagation();

      _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context14 = phpLR.regfrm).call(_context14, "#register-btn").val("Please wait...");

      var inputData = {
        url: "auth/ajaxRegister",
        frm: phpLR.regfrm,
        table: "auth",
        notification: "admin",
        frm_name: "register-frm"
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_4__.Add)(inputData, gestionR);

      function gestionR(response) {
        var _context15;

        _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context15 = phpLR.regfrm).call(_context15, "#register-btn").val("Enregistrer");

        if (response.result == "success") {
          var _context16, _context17, _context18;

          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context16 = phpLR.regbox).call(_context16, ".upload-profile-image .img").attr("src", response.img ? response.img : "");

          phpLR.regfrm.trigger("reset");

          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context17 = phpLR.regbox).call(_context17, ".input-group").remove();

          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context18 = phpLR.regfrm).call(_context18, "#regAlert").html(response.msg);
        } else {
          if (response.result == "error-field") {
            corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_5__.default.error(phpLR.loginfrm, response.msg);
          } else {
            var _context19;

            _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context19 = phpLR.loginfrm).call(_context19, "#loginAlert").html(response.msg);
          }
        }
      }
    }); //read profile image on change

    _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context20 = phpLR.regbox).call(_context20, '.upload-profile-image input[type="file"]').on("change", function () {
      var _context21, _context22;

      (0,corejs_profile_img__WEBPACK_IMPORTED_MODULE_6__.readurl)(this, _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context21 = phpLR.regbox).call(_context21, ".upload-profile-image .img"), _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context22 = phpLR.regbox).call(_context22, ".upload-profile-image .camera-icon"));
    }); //Login form


    phpLR.loginfrm.on("submit", function (e) {
      var _context23;

      e.preventDefault();

      _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context23 = phpLR.loginfrm).call(_context23, "#login-btn").val("Please wait...");

      var data = {
        url: "auth/ajaxLogin",
        frm: phpLR.loginfrm,
        frm_name: "login-frm"
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_4__.Call_controller)(data, ManageLoginResponse); //manage login Response

      function ManageLoginResponse(response) {
        var _context24;

        _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context24 = phpLR.loginfrm).call(_context24, "#login-btn").val("Login");

        if (response.result == "success") {
          phpLR.loginfrm.trigger("reset");
          phpLR.logbox.modal("hide");
          window.location.reload();
        } else {
          if (response.result == "error-field") {
            corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_5__.default.error(phpLR.loginfrm, response.msg);
          } else {
            var _context25;

            _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context25 = phpLR.loginfrm).call(_context25, "#loginAlert").html(response.msg);
          }
        }
      }
    }); //Forgot password request

    phpLR.forgotfrm.on("submit", function (e) {
      var _context26;

      e.preventDefault();

      _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context26 = phpLR.forgotfrm).call(_context26, "#forgot-btn").val("Please wait...");

      var data = {
        url: "auth/forgot",
        frm: phpLR.forgotfrm,
        frm_name: "forgot-frm"
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_4__.Call_controller)(data, MResponse);

      function MResponse(response) {
        var _context27;

        _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context27 = phpLR.forgotfrm).call(_context27, "#forgot-btn").val("Reset password");

        if (response.result == "success") {
          var _context28;

          phpLR.forgotfrm.trigger("reset");

          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context28 = phpLR.forgotfrm).call(_context28, "#regAlert").html(response.msg);
        } else {
          if (response.result == "error-field") {
            corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_5__.default.error(phpLR.loginfrm, response.msg);
          } else {
            var _context29;

            _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context29 = phpLR.loginfrm).call(_context29, "#loginAlert").html(response.msg);
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
        url: corejs_config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + "auth/logout",
        method: "post",
        success: function success(response) {
          if (response.result == "success") {
            logout.closest("div").load(location.href + " .connect");

            if (response.msg == "redirect") {
              window.location.href = corejs_config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvZm9ybV9jcnVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9pbnB1dEVyck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2xvZ2luX3JlZ2lzdGVyLmNsYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9wcm9maWxlX2ltZy5qcyJdLCJuYW1lcyI6WyJkaXNwbGF5QWxsRGV0YWlscyIsImRhdGEiLCJnZXN0aW9uIiwiJCIsImFqYXgiLCJ1cmwiLCJCQVNFX1VSTCIsIm1ldGhvZCIsInRhYmxlIiwiaWQiLCJ1c2VyIiwic2Vzc2lvbl9pZCIsImRhdGFfdHlwZSIsInJldHVybl9tb2RlIiwidG9rZW4iLCJmcm1fbmFtZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInBhcmFtcyIsImVkaXRGb3JtIiwiZm9ybURhdGEiLCJkaXNwbGF5QWxsSXRlbXMiLCJzdGFydCIsIm1heCIsInF1ZXJ5IiwicGFnZSIsInBhZ2luYXRpb24iLCJBZGQiLCJGb3JtRGF0YSIsImZybSIsImFwcGVuZCIsIm5vdGlmaWNhdGlvbiIsImhhc093blByb3BlcnR5Iiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwiaW1hZ2VVcmxzQXJ5Iiwic2VsZWN0MiIsImNhdGVnb3JpZSIsImkiLCJmaWxlcyIsImxlbmd0aCIsIm5hbWUiLCJlYWNoIiwia2V5IiwidmFsIiwiY29uc29sZSIsImxvZyIsImNhY2hlIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsIkNhbGxfY29udHJvbGxlciIsImlzSUUiLCJ1cmxfZGF0YSIsImFjdGlvbiIsImZyZWVkYXRhIiwidXNlcl9pZCIsInZhbHVlIiwidGJsX29wdGlvbnMiLCJkYXRhVHlwZSIsIkRlbGV0ZSIsImRpc3BsYXlJdGVtIiwiY2hlY2tCZWZvcmVEZWxldGUiLCJ0aGVuIiwicmVzdWx0Iiwic2VydmVyRGF0YSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cmxfY2hlY2siLCJodG1sIiwiaHR3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3dhbF9tZXNzYWdlIiwiaW5uZXJIVE1MIiwic3dhbCIsImZpcmUiLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0Iiwic3dhbF9idXR0b24iLCJkb25lIiwibXNnIiwiZmFpbCIsImVycm9yIiwiZGlzcGxheU11bHRpc2VsbGVjdCIsImRpc3BsYXlJRCIsImFsZXJ0SUQiLCJhZGRDYXRlZ29ycmllIiwiY2F0RmllbGQiLCJjYXQiLCJxdWVyeVNlbGVjdG9yIiwiYWxlcnQiLCJzZWxlY3QyQWpheFBhcmFtcyIsInR5cGUiLCJkZWxheSIsInNlYXJjaFRlcm0iLCJ0ZXJtIiwicGFyZW50SUQiLCJwcm9jZXNzUmVzdWx0cyIsInJlc3VsdHMiLCJvYmoiLCJ0ZXh0IiwiSW5wdXRfTWFuYWdlciIsImZvcm0iLCJyZW1vdmVDbGFzcyIsIklucHV0RXJyIiwiYXJyRXJyIiwiaW5wdXQiLCJhZGRDbGFzcyIsInBhcmVudCIsImNoaWxkcmVuIiwicHVzaCIsIk15Zm9ybSIsIm9uIiwiTG9naW5fQW5kX1JlZ2lzdGVyIiwiZWxlbWVudCIsIl9zZXR1cFZhcmlhYmxlcyIsIl9zZXR1cEV2ZW50cyIsImxvZ2JveCIsImxvZ2luZnJtIiwicmVnYm94IiwicmVnZnJtIiwiZm9yZ290Ym94IiwiZm9yZ290ZnJtIiwicGhwTFIiLCJ0cmlnZ2VyIiwiZW1haWwiLCJhdHRyIiwicmVtZW1iZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbnB1dERhdGEiLCJnZXN0aW9uUiIsImltZyIsInJlbW92ZSIsInJlYWR1cmwiLCJNYW5hZ2VMb2dpblJlc3BvbnNlIiwibW9kYWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIk1SZXNwb25zZSIsImxvZ291dCIsIkZCIiwiY2xvc2VzdCIsImxvYWQiLCJocmVmIiwiX2luaXQiLCJpY29uIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInRhcmdldCIsImNzcyIsImRpc3BsYXkiLCJyZWFkQXNEYXRhVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ08sU0FBU0EsaUJBQVQsQ0FBMkJDLElBQTNCLEVBQWlDQyxPQUFqQyxFQUEwQztBQUMvQ0MsR0FBQyxDQUFDQyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyw2Q0FBUSxHQUFHTCxJQUFJLENBQUNJLEdBRGhCO0FBRUxFLFVBQU0sRUFBRSxNQUZIO0FBR0xOLFFBQUksRUFBRTtBQUNKTyxXQUFLLEVBQUVQLElBQUksQ0FBQ08sS0FEUjtBQUVKQyxRQUFFLEVBQUVSLElBQUksQ0FBQ1EsRUFGTDtBQUdKQyxVQUFJLEVBQUVULElBQUksQ0FBQ1MsSUFBTCxHQUFZVCxJQUFJLENBQUNTLElBQWpCLEdBQXdCLEVBSDFCO0FBSUpDLGdCQUFVLEVBQUVWLElBQUksQ0FBQ1UsVUFBTCxHQUFrQlYsSUFBSSxDQUFDVSxVQUF2QixHQUFvQyxFQUo1QztBQUtKQyxlQUFTLEVBQUVYLElBQUksQ0FBQ1csU0FBTCxHQUFpQlgsSUFBSSxDQUFDVyxTQUF0QixHQUFrQyxFQUx6QztBQU1KQyxpQkFBVyxFQUFFWixJQUFJLENBQUNZLFdBQUwsR0FBbUJaLElBQUksQ0FBQ1ksV0FBeEIsR0FBc0MsRUFOL0M7QUFPSkMsV0FBSyxFQUFFYixJQUFJLENBQUNhLEtBQUwsR0FBYWIsSUFBSSxDQUFDYSxLQUFsQixHQUEwQixFQVA3QjtBQVFKQyxjQUFRLEVBQUVkLElBQUksQ0FBQ2MsUUFBTCxHQUFnQmQsSUFBSSxDQUFDYyxRQUFyQixHQUFnQztBQVJ0QyxLQUhEO0FBYUxDLFdBQU8sRUFBRSxpQkFBVUMsUUFBVixFQUFvQjtBQUMzQmYsYUFBTyxDQUFDZSxRQUFELEVBQVdoQixJQUFJLENBQUNpQixNQUFM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T0FBSytHLE9BQUwsR0FBZUEsT0FBZjtBQUNELEM7O0FBd0xILCtEQUFlLElBQUlELGtCQUFKLENBQXVCakgsQ0FBQyxDQUFDLHdCQUFELENBQXhCLEVBQW9EbUosS0FBcEQsRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7QUMvTE8sSUFBTVosT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQzdCLEtBQUQsRUFBUTJCLEdBQVIsRUFBYWUsSUFBYixFQUFzQjtBQUMzQyxNQUFJMUMsS0FBSyxDQUFDdEUsS0FBTixJQUFlc0UsS0FBSyxDQUFDdEUsS0FBTixDQUFZLENBQVosQ0FBbkIsRUFBbUM7QUFDakMsUUFBSWlILE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWI7O0FBQ0FELFVBQU0sQ0FBQ0UsTUFBUCxHQUFnQixVQUFVdkIsQ0FBVixFQUFhO0FBQzNCSyxTQUFHLENBQUNQLElBQUosQ0FBUyxLQUFULEVBQWdCRSxDQUFDLENBQUN3QixNQUFGLENBQVM1RixNQUF6QjtBQUNBd0YsVUFBSSxDQUFDSyxHQUFMLENBQVM7QUFDUEMsZUFBTyxFQUFFO0FBREYsT0FBVDtBQUdELEtBTEQ7O0FBTUFMLFVBQU0sQ0FBQ00sYUFBUCxDQUFxQmpELEtBQUssQ0FBQ3RFLEtBQU4sQ0FBWSxDQUFaLENBQXJCO0FBQ0Q7QUFDRixDQVhNLEMiLCJmaWxlIjoibGF6eWxvYWQvanMvYWRtaW4vbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCQVNFX1VSTCwgaXNJRSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuLy9kaXNwbGF5IGFsbCBkZXRhaWxzXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsRGV0YWlscyhkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgdXNlcjogZGF0YS51c2VyID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgc2Vzc2lvbl9pZDogZGF0YS5zZXNzaW9uX2lkID8gZGF0YS5zZXNzaW9uX2lkIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgICAgdG9rZW46IGRhdGEudG9rZW4gPyBkYXRhLnRva2VuIDogXCJcIixcclxuICAgICAgZnJtX25hbWU6IGRhdGEuZnJtX25hbWUgPyBkYXRhLmZybV9uYW1lIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL2VkaXQgZGF0YVxyXG5leHBvcnQgZnVuY3Rpb24gZWRpdEZvcm0oZGF0YSwgZ2VzdGlvbikge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YS5mb3JtRGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG4vL2Rpc3BsYXkgYWxsIEl0ZW1zXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsSXRlbXMoZGF0YSwgZ2VzdGlvbikge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgaWQ6IGRhdGEuaWQgIT0gXCJcIiA/IGRhdGEuaWQgOiBcIlwiLFxyXG4gICAgICBzdGFydDogMCxcclxuICAgICAgbWF4OiBkYXRhLm1heCAhPSBcIlwiID8gZGF0YS5tYXggOiBcIlwiLFxyXG4gICAgICB1c2VyOiBkYXRhLnVzZXIgIT0gXCJcIiA/IGRhdGEudXNlciA6IFwiXCIsXHJcbiAgICAgIHF1ZXJ5OiBkYXRhLnF1ZXJ5ICE9IFwiXCIgPyBkYXRhLnF1ZXJ5IDogXCJcIixcclxuICAgICAgcGFnZTogZGF0YS5wYWdlICE9IFwiXCIgPyBkYXRhLnBhZ2UgOiBcIlwiLFxyXG4gICAgICBwYWdpbmF0aW9uOiBkYXRhLnBhZ2luYXRpb24gIT0gXCJcIiA/IGRhdGEucGFnaW5hdGlvbiA6IFwiXCIsXHJcbiAgICAgIGRhdGFfdHlwZTogZGF0YS5kYXRhX3R5cGUgPyBkYXRhLmRhdGFfdHlwZSA6IFwiXCIsXHJcbiAgICAgIHJldHVybl9tb2RlOiBkYXRhLnJldHVybl9tb2RlID8gZGF0YS5yZXR1cm5fbW9kZSA6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vYWRkIEl0ZW1cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZChkYXRhLCBnZXN0aW9uKSB7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEuZnJtWzBdKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJ0YWJsZVwiLCBkYXRhLnRhYmxlKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJub3RpZmljYXRpb25cIiwgZGF0YS5ub3RpZmljYXRpb24pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImZybV9uYW1lXCIsIGRhdGEuZnJtX25hbWUpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwic3RhcnRfZGF0ZVwiKSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcInN0YXJ0X2RhdGVcIiwgZGF0YS5zdGFydF9kYXRlKTtcclxuICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImVuZF9kYXRlXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZW5kX2RhdGVcIiwgZGF0YS5lbmRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJpbWFnZVVybHNBcnlcIikpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVVybHNBcnlcIiwgZGF0YS5pbWFnZVVybHNBcnkpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwic2VsZWN0MlwiKSkgZm9ybURhdGEuYXBwZW5kKFwic2VsZWN0MlwiLCBkYXRhLnNlbGVjdDIpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiY2F0ZWdvcmllXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY3VzdG9tX2NhdGVnb3JpZVwiLCBkYXRhLmNhdGVnb3JpZSk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJmaWxlc1wiKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChkYXRhLmZpbGVzW2ldLm5hbWUsIGRhdGEuZmlsZXNbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcInNlbGVjdDJcIikpIHtcclxuICAgICQoZGF0YS5zZWxlY3QyKS5lYWNoKGZ1bmN0aW9uIChrZXksIHZhbCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuLy91cGRhdGVcclxuZXhwb3J0IGZ1bmN0aW9uIENhbGxfY29udHJvbGxlcihkYXRhLCBnZXN0aW9uKSB7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEuZnJtWzBdKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJmcm1fbmFtZVwiLCBkYXRhLmZybV9uYW1lKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJpc0lFXCIsIGlzSUUoKSk7XHJcbiAgaWYgKGRhdGEudGFibGUpIGZvcm1EYXRhLmFwcGVuZChcInRhYmxlXCIsIGRhdGEudGFibGUpO1xyXG4gIGlmIChkYXRhLm5vdGlmaWNhdGlvbikgZm9ybURhdGEuYXBwZW5kKFwibm90aWZpY2F0aW9uXCIsIGRhdGEubm90aWZpY2F0aW9uKTtcclxuICBpZiAoZGF0YS51cmxfZGF0YSkgZm9ybURhdGEuYXBwZW5kKFwidXJsX2RhdGFcIiwgZGF0YS51cmxfZGF0YSk7XHJcbiAgaWYgKGRhdGEuYWN0aW9uKSBmb3JtRGF0YS5hcHBlbmQoXCJhY3Rpb25cIiwgZGF0YS5hY3Rpb24pO1xyXG4gIGlmIChkYXRhLmltYWdlVXJsc0FyeSkgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VVcmxzQXJ5XCIsIGRhdGEuaW1hZ2VVcmxzQXJ5KTtcclxuICBpZiAoZGF0YS5mcmVlZGF0YSkgZm9ybURhdGEuYXBwZW5kKFwiZnJlZWRhdGFcIiwgZGF0YS5mcmVlZGF0YSk7XHJcbiAgaWYgKGRhdGEuc3RhcnRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwic3RhcnRfZGF0ZVwiLCBkYXRhLnN0YXJ0X2RhdGUpO1xyXG4gIGlmIChkYXRhLmVuZF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJlbmRfZGF0ZVwiLCBkYXRhLmVuZF9kYXRlKTtcclxuICBpZiAoZGF0YS5pZCkgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgZGF0YS5pZCk7XHJcbiAgaWYgKGRhdGEudXNlcl9pZCkgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgZGF0YS51c2VyX2lkKTtcclxuICBpZiAoZGF0YS5tZXRob2QpIGZvcm1EYXRhLmFwcGVuZChcIm1ldGhvZFwiLCBkYXRhLm1ldGhvZCk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJzZWxlY3QyXCIpKSB7XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhLnNlbGVjdDIpKSB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiY2F0ZWdvcmllXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY3VzdG9tX2NhdGVnb3JpZVwiLCBkYXRhLmNhdGVnb3JpZSk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJ0Ymxfb3B0aW9uc1wiKSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcInRibF9vcHRpb25zXCIsIGRhdGEudGJsX29wdGlvbnMpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiZmlsZXNcIikpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoZGF0YS5maWxlc1tpXS5uYW1lLCBkYXRhLmZpbGVzW2ldKTtcclxuICAgIH1cclxuICB9XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG4vL2RlbGV0ZVxyXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlKGRhdGEsIGRpc3BsYXlJdGVtKSB7XHJcbiAgY2hlY2tCZWZvcmVEZWxldGUoZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YTogZGF0YS5zZXJ2ZXJEYXRhLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgZGlzcGxheUl0ZW0ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4vL2Z1bmN0aW9uIGNoZWNrIGJlZm9yZSBkZWxldGVcclxuZnVuY3Rpb24gY2hlY2tCZWZvcmVEZWxldGUoZGF0YSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBpZiAoIWRhdGEudXJsX2NoZWNrKSB7XHJcbiAgICAgIGNvbnN0IGh0bWwgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaHR3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpZiAoZGF0YS5zd2FsX21lc3NhZ2UpIHtcclxuICAgICAgICAgIHJldHVybiAoaHR3LmlubmVySFRNTCA9IGRhdGEuc3dhbF9tZXNzYWdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIChodHcuaW5uZXJIVE1MID0gXCI8cD5Zb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyE8L3A+XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgZGF0YS5zd2FsXHJcbiAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgIGh0bWw6IGh0bWwoKSxcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogZGF0YS5zd2FsX2J1dHRvbiA/IGRhdGEuc3dhbF9idXR0b24gOiBcIkRlbGV0ZSFcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybF9jaGVjayxcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGRhdGE6IGRhdGEuc2VydmVyRGF0YSxcclxuICAgICAgfSlcclxuICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGRhdGEuc3dhbFxyXG4gICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgaHRtbDogXCI8cD5Zb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyE8L3A+XCIgKyByZXNwb25zZS5tc2csXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiRGVsZXRlIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU11bHRpc2VsbGVjdChkYXRhKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBcImZvcm1zL2ZpbGxNdWx0aXNlbGVjdFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgZGF0YS5kaXNwbGF5SUQuYXBwZW5kKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YS5hbGVydElELmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhdGVnb3JyaWUoY2F0RmllbGQsIGFsZXJ0SUQpIHtcclxuICBsZXQgY2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXRGaWVsZCk7XHJcbiAgaWYgKGNhdC52YWx1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgYWxlcnQoXCJMZSBjaGFtcHMgY2F0w6lnb3JpZSBlc3QgdmlkZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIFwiZm9ybXMvYWRkY2F0ZWdvcmllXCIsXHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjYXRlZ29yaWU6IGNhdC52YWx1ZSxcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlICE9IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAkKGFsZXJ0SUQpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0MkFqYXhQYXJhbXMoZGF0YSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICB0eXBlOiBcInBvc3RcIixcclxuICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgIGRlbGF5OiAyNTAsXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VhcmNoVGVybTogcGFyYW1zLnRlcm0sIC8vIHNlYXJjaCB0ZXJtXHJcbiAgICAgICAgdGFibGU6IGRhdGEudGFibGUgIT0gXCJcIiA/IGRhdGEudGFibGUgOiBcIlwiLFxyXG4gICAgICAgIGRhdGFfdHlwZTogZGF0YS5kYXRhX3R5cGUgIT0gXCJcIiA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgICBwYXJlbnRJRDogZGF0YS5wYXJlbnRJRCAhPSBcIlwiID8gZGF0YS5wYXJlbnRJRCA6IFwiXCIsXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgcHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHJlc3VsdHM6ICQubWFwKHJlc3BvbnNlLm1zZywgZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICBpZiAob2JqLmlkICE9IDApIHtcclxuICAgICAgICAgICAgICByZXR1cm4geyBpZDogb2JqLmlkLCB0ZXh0OiBvYmoudGV4dCB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBvYmouaWQsIHRleHQ6IG9iai50ZXh0IH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjYWNoZTogdHJ1ZSxcclxuICB9O1xyXG59XHJcbiIsImNsYXNzIElucHV0X01hbmFnZXIge1xyXG4gIHJlc2V0X2ludmFsaWRfaW5wdXQgPSAoZm9ybSkgPT4ge1xyXG4gICAgZm9ybS5maW5kKFwiLmlzLWludmFsaWRcIikucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgZm9ybS5maW5kKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxuICB9O1xyXG4gIC8vcmVtb3ZlIGludmFsaWQgaW5wdXQgb24gZm9jdXNcclxuICByZW1vdmVJbnZhbGlkSW5wdXQoTXlmb3JtKSB7XHJcbiAgICBNeWZvcm0ub24oXCJmb2N1c1wiLCBcImlucHV0LHRleHRhcmVhLCAuY2ssIC5ub3RlLWVkaXRvclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBlcnJvciA9IChmb3JtLCBJbnB1dEVycikgPT4ge1xyXG4gICAgdmFyIGFyckVyciA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoSW5wdXRFcnIpKSB7XHJcbiAgICAgIHZhciBpbnB1dCA9IGZvcm0uZmluZChcIiNcIiArIGtleSkuYWRkQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgICBpbnB1dC5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwodmFsdWUpO1xyXG4gICAgICBhcnJFcnIucHVzaChrZXkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyckVycjtcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBJbnB1dF9NYW5hZ2VyKCk7XHJcbiIsImltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcImNvcmVqcy9jb25maWdcIjtcclxuaW1wb3J0IHsgQWRkLCBDYWxsX2NvbnRyb2xsZXIgfSBmcm9tIFwiY29yZWpzL2Zvcm1fY3J1ZFwiO1xyXG5pbXBvcnQgaW5wdXQgZnJvbSBcImNvcmVqcy9pbnB1dEVyck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgcmVhZHVybCB9IGZyb20gXCJjb3JlanMvcHJvZmlsZV9pbWdcIjtcclxuY2xhc3MgTG9naW5fQW5kX1JlZ2lzdGVyIHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuICBfaW5pdCA9ICgpID0+IHtcclxuICAgIHRoaXMuX3NldHVwVmFyaWFibGVzKCk7XHJcbiAgICB0aGlzLl9zZXR1cEV2ZW50cygpO1xyXG4gIH07XHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vU2V0dXAgdmFyaWFibGVzXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIF9zZXR1cFZhcmlhYmxlcyA9ICgpID0+IHtcclxuICAgIHRoaXMubG9nYm94ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjbG9naW4tYm94XCIpO1xyXG4gICAgdGhpcy5sb2dpbmZybSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2xvZ2luLWZybVwiKTtcclxuICAgIHRoaXMucmVnYm94ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjcmVnaXN0ZXItYm94XCIpO1xyXG4gICAgdGhpcy5yZWdmcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNyZWdpc3Rlci1mcm1cIik7XHJcbiAgICB0aGlzLmZvcmdvdGJveCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2ZvcmdvdC1ib3hcIik7XHJcbiAgICB0aGlzLmZvcmdvdGZybSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2ZvcmdvdC1mcm1cIik7XHJcbiAgfTtcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy9TZXR1cCBldmVudHNcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgX3NldHVwRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgdmFyIHBocExSID0gdGhpcztcclxuICAgIC8vcmVmcmVzaCBsb2dpbiAmIHJlZ2lzdGVyIGZybSBvbiBoaWRlIGFuZCBzaG93XHJcbiAgICBwaHBMUi5sb2dib3gub24oXCJoaWRlLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHBocExSLmxvZ2luZnJtLmZpbmQoXCIuaXMtaW52YWxpZFwiKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIGlucHV0LnJlc2V0X2ludmFsaWRfaW5wdXQocGhwTFIubG9naW5mcm0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vUmVzZXQgcmVnaXN0ZXIgZm9ybSBpbnZhbGlkIGlucHV0IG9uIGhpZGUgbW9kYWxcclxuICAgIHBocExSLnJlZ2JveC5vbihcImhpZGUuYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAocGhwTFIucmVnZnJtLmZpbmQoXCIuaXMtaW52YWxpZFwiKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIGlucHV0LnJlc2V0X2ludmFsaWRfaW5wdXQocGhwTFIucmVnZnJtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL1Jlc2V0IHJlZ2lzdGVyIGZvcm0gb24gc2hvd25cclxuICAgIHBocExSLnJlZ2JveC5vbihcInNob3cuYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBwaHBMUi5yZWdmcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICBwaHBMUi5yZWdmcm0uZmluZChcIiNyZWdBbGVydFwiKS5odG1sKFwiXCIpO1xyXG4gICAgfSk7XHJcbiAgICAvL3JlbW92ZSBpbnZhbGlkIGlucHV0IG9uIGZvY3VzIHJlZ2lzdGVyXHJcbiAgICBwaHBMUi5yZWdmcm0ub24oXCJmb2N1c1wiLCBcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG4gICAgfSk7XHJcbiAgICAvL3JlbW92ZSBpbnZhbGlkIGlucHV0IG9uIGZvY3VzIGxvZ2luXHJcbiAgICBwaHBMUi5sb2dpbmZybS5vbihcImZvY3VzXCIsIFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwoXCJcIik7XHJcbiAgICB9KTtcclxuICAgIC8vcmVzZXQgZm9yZ290IHBhc3N3b3JkIGZybVxyXG4gICAgcGhwTFIuZm9yZ290Ym94Lm9uKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHBocExSLmZvcmdvdGZybS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICB9KTtcclxuICAgIC8vRmlsbCBpbiBsb2dpbiBmcm9tIGNvb2tpZXMgb24gc2hvbndcclxuICAgIHBocExSLmxvZ2JveC5vbihcInNob3duLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IEJBU0VfVVJMICsgXCJhdXRoL3JlbWVtYmVyX2NoZWNrXCIsXHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjZW1haWxcIikudmFsKHJlc3BvbnNlLm1zZy5lbWFpbCk7XHJcbiAgICAgICAgICAgIHBocExSLmxvZ2luZnJtXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCIjY3VzdG9tQ2hlY2tcIilcclxuICAgICAgICAgICAgICAuYXR0cihcImNoZWNrZWRcIiwgcmVzcG9uc2UubXNnLnJlbWVtYmVyKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjZW1haWxcIikudmFsKFwiXCIpO1xyXG4gICAgICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI3Bhc3N3b3JkXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy9SZWdpc3RlciBmb3JtXHJcbiAgICBwaHBMUi5yZWdmcm0ub24oXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBwaHBMUi5yZWdmcm0uZmluZChcIiNyZWdpc3Rlci1idG5cIikudmFsKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICAgIHZhciBpbnB1dERhdGEgPSB7XHJcbiAgICAgICAgdXJsOiBcImF1dGgvYWpheFJlZ2lzdGVyXCIsXHJcbiAgICAgICAgZnJtOiBwaHBMUi5yZWdmcm0sXHJcbiAgICAgICAgdGFibGU6IFwiYXV0aFwiLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbjogXCJhZG1pblwiLFxyXG4gICAgICAgIGZybV9uYW1lOiBcInJlZ2lzdGVyLWZybVwiLFxyXG4gICAgICB9O1xyXG4gICAgICBBZGQoaW5wdXREYXRhLCBnZXN0aW9uUik7XHJcbiAgICAgIGZ1bmN0aW9uIGdlc3Rpb25SKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcGhwTFIucmVnZnJtLmZpbmQoXCIjcmVnaXN0ZXItYnRuXCIpLnZhbChcIkVucmVnaXN0cmVyXCIpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIHBocExSLnJlZ2JveFxyXG4gICAgICAgICAgICAuZmluZChcIi51cGxvYWQtcHJvZmlsZS1pbWFnZSAuaW1nXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3JjXCIsIHJlc3BvbnNlLmltZyA/IHJlc3BvbnNlLmltZyA6IFwiXCIpO1xyXG4gICAgICAgICAgcGhwTFIucmVnZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgICAgIHBocExSLnJlZ2JveC5maW5kKFwiLmlucHV0LWdyb3VwXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgcGhwTFIucmVnZnJtLmZpbmQoXCIjcmVnQWxlcnRcIikuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwiZXJyb3ItZmllbGRcIikge1xyXG4gICAgICAgICAgICBpbnB1dC5lcnJvcihwaHBMUi5sb2dpbmZybSwgcmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjbG9naW5BbGVydFwiKS5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vcmVhZCBwcm9maWxlIGltYWdlIG9uIGNoYW5nZVxyXG4gICAgcGhwTFIucmVnYm94XHJcbiAgICAgIC5maW5kKCcudXBsb2FkLXByb2ZpbGUtaW1hZ2UgaW5wdXRbdHlwZT1cImZpbGVcIl0nKVxyXG4gICAgICAub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlYWR1cmwoXHJcbiAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgcGhwTFIucmVnYm94LmZpbmQoXCIudXBsb2FkLXByb2ZpbGUtaW1hZ2UgLmltZ1wiKSxcclxuICAgICAgICAgIHBocExSLnJlZ2JveC5maW5kKFwiLnVwbG9hZC1wcm9maWxlLWltYWdlIC5jYW1lcmEtaWNvblwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgLy9Mb2dpbiBmb3JtXHJcbiAgICBwaHBMUi5sb2dpbmZybS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjbG9naW4tYnRuXCIpLnZhbChcIlBsZWFzZSB3YWl0Li4uXCIpO1xyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB1cmw6IFwiYXV0aC9hamF4TG9naW5cIixcclxuICAgICAgICBmcm06IHBocExSLmxvZ2luZnJtLFxyXG4gICAgICAgIGZybV9uYW1lOiBcImxvZ2luLWZybVwiLFxyXG4gICAgICB9O1xyXG4gICAgICBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgTWFuYWdlTG9naW5SZXNwb25zZSk7XHJcbiAgICAgIC8vbWFuYWdlIGxvZ2luIFJlc3BvbnNlXHJcbiAgICAgIGZ1bmN0aW9uIE1hbmFnZUxvZ2luUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2xvZ2luLWJ0blwiKS52YWwoXCJMb2dpblwiKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBwaHBMUi5sb2dpbmZybS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgICAgICBwaHBMUi5sb2dib3gubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwiZXJyb3ItZmllbGRcIikge1xyXG4gICAgICAgICAgICBpbnB1dC5lcnJvcihwaHBMUi5sb2dpbmZybSwgcmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjbG9naW5BbGVydFwiKS5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vRm9yZ290IHBhc3N3b3JkIHJlcXVlc3RcclxuICAgIHBocExSLmZvcmdvdGZybS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHBocExSLmZvcmdvdGZybS5maW5kKFwiI2ZvcmdvdC1idG5cIikudmFsKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHVybDogXCJhdXRoL2ZvcmdvdFwiLFxyXG4gICAgICAgIGZybTogcGhwTFIuZm9yZ290ZnJtLFxyXG4gICAgICAgIGZybV9uYW1lOiBcImZvcmdvdC1mcm1cIixcclxuICAgICAgfTtcclxuICAgICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIE1SZXNwb25zZSk7XHJcbiAgICAgIGZ1bmN0aW9uIE1SZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgICAgIHBocExSLmZvcmdvdGZybS5maW5kKFwiI2ZvcmdvdC1idG5cIikudmFsKFwiUmVzZXQgcGFzc3dvcmRcIik7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgcGhwTFIuZm9yZ290ZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgICAgIHBocExSLmZvcmdvdGZybS5maW5kKFwiI3JlZ0FsZXJ0XCIpLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcImVycm9yLWZpZWxkXCIpIHtcclxuICAgICAgICAgICAgaW5wdXQuZXJyb3IocGhwTFIubG9naW5mcm0sIHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2xvZ2luQWxlcnRcIikuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL2xvZ291dFxyXG4gICAgdmFyIGxvZ291dCA9ICQoXCJhOmNvbnRhaW5zKCdMb2dvdXQnKVwiKTtcclxuICAgICQobG9nb3V0KS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHR5cGVvZiBGQiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIEZCLmxvZ291dCgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAvLyBsb2dnZWQgb3V0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IEJBU0VfVVJMICsgXCJhdXRoL2xvZ291dFwiLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIGxvZ291dC5jbG9zZXN0KFwiZGl2XCIpLmxvYWQobG9jYXRpb24uaHJlZiArIFwiIC5jb25uZWN0XCIpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UubXNnID09IFwicmVkaXJlY3RcIikge1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gQkFTRV9VUkw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExvZ2luX0FuZF9SZWdpc3RlcigkKFwiI0xvZ2luLVJlZ2lzdGVyLVN5c3RlbVwiKSkuX2luaXQoKTtcclxuIiwiZXhwb3J0IGNvbnN0IHJlYWR1cmwgPSAoaW5wdXQsIGltZywgaWNvbikgPT4ge1xyXG4gIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xyXG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaW1nLmF0dHIoXCJzcmNcIiwgZS50YXJnZXQucmVzdWx0KTtcclxuICAgICAgaWNvbi5jc3Moe1xyXG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbnB1dC5maWxlc1swXSk7XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9