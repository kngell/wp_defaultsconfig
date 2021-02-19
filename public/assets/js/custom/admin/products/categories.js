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

/***/ "./src/assets/js/core/config.js":
/*!**************************************!*\
  !*** ./src/assets/js/core/config.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": function() { return /* binding */ BASE_URL; },
/* harmony export */   "isIE": function() { return /* binding */ isIE; }
/* harmony export */ });
var BASE_URL = "/kngell_ecommerce/";
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
/* harmony export */   "addCategorrie": function() { return /* binding */ addCategorrie; }
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./src/assets/js/core/config.js");
/* harmony import */ var _inputErrManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inputErrManager */ "./src/assets/js/core/inputErrManager.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







 //display all details

function displayAllDetails(data, gestion) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_6__.BASE_URL + data.url,
    method: "post",
    data: {
      table: data.table,
      id: data.id,
      user: data.user ? data.user : "",
      session_id: data.session_id ? data.session_id : "",
      data_type: data.data_type ? data.data_type : "",
      return_mode: data.return_mode ? data.return_mode : ""
    },
    success: function success(response) {
      gestion(response, data.params ? data.params : "");
    }
  });
} //edit data

function editForm(data, gestion) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_6__.BASE_URL + data.url,
    method: "post",
    data: data.formData,
    success: function success(response) {
      gestion(response);
    }
  });
} //display all Items

function displayAllItems(data) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_6__.BASE_URL + data.url,
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
      if (response.result == "success") {
        // debugger;
        if (data.table === "comments") {
          data.displayid.html(response.msg);
        } else {
          data.displayid.html(response.msg);
          if (data.datatable) loadDatatables();
        }
      } else {
        $(data.displayid).html(response.msg);
      }
    }
  });
}

function loadDatatables() {
  return _loadDatatables.apply(this, arguments);
} //add Item


function _loadDatatables() {
  _loadDatatables = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var DataTable;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __webpack_require__.e(/*! import() | datatables */ "datatables").then(__webpack_require__.t.bind(__webpack_require__, /*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js", 23));

          case 2:
            DataTable = _context.sent;
            $("table").DataTable({
              order: [0, "desc"]
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadDatatables.apply(this, arguments);
}

function Add(data, gestion) {
  var formData = new FormData(data.frm[0]);
  formData.append("table", data.table);
  formData.append("notification", data.notification);
  formData.append("frm_name", data.frm_name);
  if (data.start_date) formData.append("start_date", data.start_date);
  if (data.end_date) formData.append("end_date", data.end_date);
  if (data.imageUrlsAry) formData.append("imageUrlsAry", data.imageUrlsAry);
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_6__.BASE_URL + data.url,
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
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_6__.BASE_URL + data.url,
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
      (0,_inputErrManager__WEBPACK_IMPORTED_MODULE_7__.add_inputs_errors)((0,_inputErrManager__WEBPACK_IMPORTED_MODULE_7__.inputsArray)(data.frm), (0,_inputErrManager__WEBPACK_IMPORTED_MODULE_7__.error)(data.frm, response.msg));
      break;

    case "success":
      data.frm.trigger("reset");

      if (data.login) {
        data.loginbox.modal("hide");
        window.location.reload();
      }

      if (data.swal) {
        data.modalbox.modal("hide");
        data.swal.fire("Success!", response.msg, "success");
      } else {
        if (data.alertsuccess) data.alertid.html(response.msg);
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
        url: _config__WEBPACK_IMPORTED_MODULE_6__.BASE_URL + data.url,
        method: "post",
        data: {
          id: data.id,
          table: data.table,
          notification: data.notification
        },
        success: function success(response) {
          if (response.result === "success") {
            data.swal.fire("Deleted!", response.msg, "success");
            displayItem();
          } else {
            data.alertID.html(response.msg);
          }
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
      $.ajax({
        url: _config__WEBPACK_IMPORTED_MODULE_6__.BASE_URL + data.url_check,
        method: "post",
        data: {
          id: data.id,
          table: data.table,
          notification: data.notification
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
    url: _config__WEBPACK_IMPORTED_MODULE_6__.BASE_URL + "forms/fillMultiselect",
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
      url: _config__WEBPACK_IMPORTED_MODULE_6__.BASE_URL + "forms/addcategorie",
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

/***/ "./src/assets/js/custom/admin/products/categories.js":
/*!***********************************************************!*\
  !*** ./src/assets/js/custom/admin/products/categories.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! corejs/form_crud */ "./src/assets/js/core/form_crud.js");
/* harmony import */ var corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! corejs/inputErrManager */ "./src/assets/js/core/inputErrManager.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");






document.addEventListener("DOMContentLoaded", function () {
  function PhpPlugin(element) {
    this.element = element;
    this.init();
  }

  PhpPlugin.prototype.init = function () {
    this.setupVariables();
    this.setupEvents();
  };

  PhpPlugin.prototype.setupVariables = function () {
    this.wrapper = this.element.find(".card");
    this.Pluginfrm = this.element.find("#Categorie-frm");
    this.PluginModal = this.element.find("#modal-box");
  };

  PhpPlugin.prototype.setupEvents = function () {
    var phpPlugin = this; //=======================================================================
    //Display All Plugins
    //=======================================================================

    displayAll();

    function displayAll() {
      var data = {
        url: "forms/showAll",
        table: "categories",
        user: "admin",
        datatable: true,
        displayid: phpPlugin.wrapper.find("#showAll"),
        data_type: "values"
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.displayAllItems)(data);
    } //=======================================================================
    //clean form
    //=======================================================================
    //remove invalid input on input focus


    (0,corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.removeInvalidInput)(phpPlugin.Pluginfrm); //clean form on hide

    phpPlugin.PluginModal.on("hide.bs.modal", function () {
      if (phpPlugin.Pluginfrm.find(".is-invalid").length != 0) {
        (0,corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.reset_invalid_input)(phpPlugin.Pluginfrm);
      }

      phpPlugin.Pluginfrm.trigger("reset");
      phpPlugin.Pluginfrm.find("#parentID").empty();
    }); //set create/add function

    phpPlugin.wrapper.find("#addNew").on("click", function () {
      phpPlugin.Pluginfrm.find("#operation").val("add");
      var data = {
        displayID: phpPlugin.Pluginfrm.find("#parentID"),
        alertID: phpPlugin.Pluginfrm.find("#alertErr"),
        table: "categories"
      };
      var root = "<option Desabled selected class='desabled' value = '0'>Categorie Parent</option>";
      phpPlugin.Pluginfrm.find("#parentID").append(root);
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.displayMultisellect)(data);
    }); // =======================================================================
    // Add or Update Plugin
    // =======================================================================

    phpPlugin.Pluginfrm.on("submit", function (e) {
      e.preventDefault();
      e.stopPropagation();
      phpPlugin.Pluginfrm.find("#PluginBtn").val("Please wait...");
      var data = {
        url: phpPlugin.Pluginfrm.find("#operation").val() === "add" ? "forms/Add" : "forms/update",
        frm: phpPlugin.Pluginfrm,
        frm_name: "Categorie-frm",
        table: "categories",
        notification: "admin"
      };

      switch (phpPlugin.Pluginfrm.find("#operation").val()) {
        case "add":
          (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Add)(data, Response);
          break;

        case "update":
          (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Call_controller)(data, Response);
          break;
      }

      function Response(response) {
        phpPlugin.Pluginfrm.find("#PluginBtn").val("Valider");
        var rdata = {
          frm: phpPlugin.Pluginfrm,
          swal: (sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default()),
          modalbox: phpPlugin.PluginModal,
          alertid: phpPlugin.Pluginfrm.find("#alertErr"),
          display: displayAll
        };
        (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.ManageResponse)(response, rdata);
      }
    }); //=======================================================================
    //Edit Plugin
    //=======================================================================

    phpPlugin.wrapper.on("click", ".editBtn", function (e) {
      e.preventDefault();
      phpPlugin.Pluginfrm.find("#operation").val("update");
      var data = {
        url: "forms/edit",
        formData: phpPlugin.PluginModal.find("#Categorie-frm input[type=hidden]").serialize() + "&" + $.param({
          id: $(this).attr("id"),
          table: "categories",
          frm_name: "Categorie-frm"
        })
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.editForm)(data, manageR);

      function manageR(response) {
        if (response.result === "success") {
          phpPlugin.Pluginfrm.find("#catID").val(response.msg.items.catID);
          phpPlugin.Pluginfrm.find("#date_enreg").val(response.msg.items.date_enreg);
          phpPlugin.Pluginfrm.find("#updateAt").val(response.msg.items.updateAt);
          phpPlugin.Pluginfrm.find("#status").val(response.msg.items.status);
          phpPlugin.Pluginfrm.find("#categorie").val(response.msg.items.categorie);
          phpPlugin.Pluginfrm.find("#description").val(response.msg.items.description);
        } else {
          phpPlugin.Pluginfrm.find("#alertErr").html(response.msg);
        }

        var data = {
          displayID: phpPlugin.Pluginfrm.find("#parentID"),
          alertID: phpPlugin.Pluginfrm.find("#alertErr"),
          table: "categories"
        };
        var root = "<option Desabled selected class='desabled' value = '0'>Selectionnez la categorie</option>";
        phpPlugin.Pluginfrm.find("#parentID").append(root);
        (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.displayMultisellect)(data);
      }
    }); // =======================================================================
    // Active/desactive plugin
    // =======================================================================

    phpPlugin.wrapper.on("click", ".activateBtn", function (e) {
      e.preventDefault();
      var data = {
        url: "tables/update",
        table: "categories",
        frm: phpPlugin.Pluginfrm,
        id: $(this).attr("id"),
        method: "categorieStatus",
        params: $(this)
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Call_controller)(data, Response);

      function Response(response, elmt) {
        console.log(response);

        if (response.result == "success") {
          response.msg == "green" ? elmt.attr("title", "Deactivate Category") : elmt.attr("title", "Activate Category");
          elmt.children().first().attr("style", "color:" + response.msg);
        }
      }
    }); // =======================================================================
    // Delete Plugin
    // =======================================================================

    phpPlugin.wrapper.on("click", ".deleteBtn", function (e) {
      e.preventDefault();
      var data = {
        url: "forms/delete",
        url_check: "forms/checkdelete",
        id: $(this).attr("id"),
        table: "categories",
        notification: "admin",
        swal: (sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default()),
        alertID: phpPlugin.wrapper.find("#globalErr")
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Delete)(data, displayAll);
    });
  };

  $.fn.phpPlugin = function (options) {
    new PhpPlugin(this);
    return this;
  };

  $(".content").phpPlugin();
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-array.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var propertyIsEnumerable = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.is-array.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.entries.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.entries.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $entries = __webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").entries;

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.js ***!
  \******************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v10.15.2
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcons = function getIcons() {
    var popup = getPopup();
    return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
  };
  var getIcon = function getIcon() {
    var visibleIcon = getIcons().filter(function (icon) {
      return icon.style.display !== 'none';
    });
    return visibleIcon.length ? visibleIcon[0] : null;
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getDenyButton = function getDenyButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  };
  var getInputLabel = function getInputLabel() {
    return elementByClass(swalClasses['input-label']);
  };
  var getLoader = function getLoader() {
    return elementBySelector(".".concat(swalClasses.loader));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.display = 'none';
  };
  var setStyle = function setStyle(parent, selector, property, value) {
    var el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  var allButtonsAreHidden = function allButtonsAreHidden() {
    return !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  };
  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var loader = getLoader();
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      actions.insertBefore(cancelButton, loader);
      actions.insertBefore(denyButton, loader);
      actions.insertBefore(confirmButton, loader);
    } // Loader


    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };

  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var setInputLabel = function setInputLabel(input, prependTo, params) {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      var label = document.createElement('label');
      var labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      addClass(label, params.customClass.inputLabel);
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    setInputLabel(rangeInput, range, params);
    return range;
  };

  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };

  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    var getPadding = function getPadding(el) {
      return parseInt(window.getComputedStyle(el).paddingLeft) + parseInt(window.getComputedStyle(el).paddingRight);
    };

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + getPadding(getPopup()) + getPadding(getContent());

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block'); // Content as plain text
    } else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block'); // No content
    } else {
      hide(htmlContainer);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon && getIcon()) {
      applyStyles(getIcon(), params);
      return;
    }

    hideAllIcons();

    if (!params.icon) {
      return;
    }

    if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
      var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
      show(icon); // Custom or default content

      setContent(icon, params);
      applyStyles(icon, params); // Animate icon

      addClass(icon, params.showClass.icon);
    } else {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
    }
  };

  var hideAllIcons = function hideAllIcons() {
    var icons = getIcons();

    for (var i = 0; i < icons.length; i++) {
      hide(icons[i]);
    }
  };

  var applyStyles = function applyStyles(icon, params) {
    // Icon color
    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  var setColor = function setColor(icon, params) {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (var _i = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i < _arr.length; _i++) {
      var sel = _arr[_i];
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText);

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var container = getContainer();
    var popup = getPopup(); // Width

    if (params.toast) {
      // #2170
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    } // Classes


    addClasses(popup, params);
  };

  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    } else if (typeof params.onRender === 'function') {
      params.onRender(getPopup()); // @deprecated
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Deny' button
   */

  var clickDeny = function clickDeny() {
    return getDenyButton() && getDenyButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      var _super = _createSuper(MixinSwal);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _super.apply(this, arguments);
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params, prevMixinParams) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, _extends({}, prevMixinParams, mixinParams));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  var showLoading = function showLoading(buttonToReplace) {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
    show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement() {
    return new Promise(function (resolve) {
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      /* istanbul ignore if */

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var bodyClickListenerAdded = false;
  var clickHandlers = {};
  function bindClickHandler() {
    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  var bodyClickListener = function bodyClickListener(event) {
    // 1. using .parentNode instead of event.path because of better support by old browsers https://stackoverflow.com/a/39245638
    // 2. using .parentNode instead of .parentElement because of IE11 + SVG https://stackoverflow.com/a/36270354
    for (var el = event.target; el && el !== document; el = el.parentNode) {
      for (var attr in clickHandlers) {
        var template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template: template
          });
          return;
        }
      }
    }
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    willOpen: undefined,
    didOpen: undefined,
    onRender: undefined,
    didRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    willClose: undefined,
    didClose: undefined,
    onDestroy: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass',
    onBeforeOpen: 'willOpen',
    onOpen: 'didOpen',
    onRender: 'didRender',
    onClose: 'willClose',
    onAfterClose: 'didClose',
    onDestroy: 'didDestroy'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getIcons: getIcons,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      var bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = shouldPreventTouchMove(e);
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
    var target = event.target;
    var container = getContainer();

    if (isStylys(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    !(isScrollable(getContent()) && // #1944
    getContent().contains(target))) {
      return true;
    }

    return false;
  };

  var isStylys = function isStylys(event) {
    // #1786
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  var isZoom = function isZoom(event) {
    // #1891
    return event.touches && event.touches.length > 1;
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, isToast$$1, didClose) {
    if (isToast$$1) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement().then(function () {
        return triggerDidCloseAndDispose(instance, didClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    resolveValue = prepareResolveValue(resolveValue);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

    swalPromiseResolve(resolveValue);
  }

  var prepareResolveValue = function prepareResolveValue(resolveValue) {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return _extends({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose,
        willClose = innerParams.willClose,
        didClose = innerParams.didClose;
    runDidClose(popup, willClose, onClose);

    if (animationIsSupported) {
      animatePopup(instance, popup, container, didClose || onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, isToast(), didClose || onAfterClose);
    }
  };

  var runDidClose = function runDidClose(popup, willClose, onClose) {
    if (willClose !== null && typeof willClose === 'function') {
      willClose(popup);
    } else if (onClose !== null && typeof onClose === 'function') {
      onClose(popup); // @deprecated
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, didClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
    setTimeout(function () {
      if (typeof didClose === 'function') {
        didClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    var params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  var getTemplateParams = function getTemplateParams(params) {
    var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }

    var templateContent = template.content || template; // IE11

    showWarningsForElements(templateContent);

    var result = _extends(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));

    return result;
  };

  var getSwalParams = function getSwalParams(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach(function (param) {
      showWarningsForAttributes(param, ['name', 'value']);
      var paramName = param.getAttribute('name');
      var value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        value = false;
      }

      if (_typeof(defaultParams[paramName]) === 'object') {
        value = JSON.parse(value);
      }

      result[paramName] = value;
    });
    return result;
  };

  var getSwalButtons = function getSwalButtons(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach(function (button) {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      var type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  var getSwalImage = function getSwalImage(templateContent) {
    var result = {};
    var image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };

  var getSwalIcon = function getSwalIcon(templateContent) {
    var result = {};
    var icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };

  var getSwalInput = function getSwalInput(templateContent) {
    var result = {};
    var input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }

    var inputOptions = templateContent.querySelectorAll('swal-input-option');

    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach(function (option) {
        showWarningsForAttributes(option, ['value']);
        var optionValue = option.getAttribute('value');
        var optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };

  var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
    var result = {};

    for (var i in paramNames) {
      var paramName = paramNames[i];
      var tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML;
      }
    }

    return result;
  };

  var showWarningsForElements = function showWarningsForElements(template) {
    var allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(template.querySelectorAll('*')).forEach(function (el) {
      if (el.parentNode !== template) {
        // can't use template.children because of IE11
        return;
      }

      var tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };

  var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
    toArray(el.attributes).forEach(function (attribute) {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  var SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    } else if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup); // @deprecated
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(function () {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    runDidOpen(popup, params);
    removeClass(container, swalClasses['no-transition']);
  };

  var runDidOpen = function runDidOpen(popup, params) {
    if (typeof params.didOpen === 'function') {
      setTimeout(function () {
        return params.didOpen(popup);
      });
    } else if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      }); // @deprecated
    }
  };

  var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    IEfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup);
    setTimeout(function () {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);

      var renderOption = function renderOption(parent, optionLabel, optionValue) {
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          var optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(function (o) {
            return renderOption(optgroup, o[1], o[0]);
          });
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  var isSelected = function isSelected(optionValue, inputValue) {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'confirm');
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleDenyButtonClick = function handleDenyButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'deny');
    } else {
      deny(instance, innerParams, false);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, innerParams, type
  /* type is either 'confirm' or 'deny' */
  ) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, innerParams, inputValue);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, innerParams, inputValue);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var handleInputValidator = function handleInputValidator(instance, innerParams, inputValue) {
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else {
        confirm(instance, innerParams, inputValue);
      }
    });
  };

  var deny = function deny(instance, innerParams, value) {
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      var preDenyPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
      });
      preDenyPromise.then(function (preDenyValue) {
        if (preDenyValue === false) {
          instance.hideLoading();
        } else {
          instance.closePopup({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      });
    } else {
      instance.closePopup({
        isDenied: true,
        value: value
      });
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      isConfirmed: true,
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeysNextButton = ['ArrowRight', 'ArrowDown', 'Right', 'Down' // IE11
  ];
  var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp', 'Left', 'Up' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).indexOf(e.key) !== -1) {
      handleArrows(e.key); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows(key) {
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();

    if (!([confirmButton, denyButton, cancelButton].indexOf(document.activeElement) !== -1)) {
      return;
    }

    var sibling = arrowKeysNextButton.indexOf(key) !== -1 ? 'nextElementSibling' : 'previousElementSibling';
    var buttonToFocus = document.activeElement[sibling];

    if (buttonToFocus) {
      buttonToFocus.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    showWarningsForParams(_extends({}, mixinParams, userParams));

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams, mixinParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams, mixinParams) {
    var templateParams = getTemplateParams(userParams);

    var showClass = _extends({}, defaultParams.showClass, mixinParams.showClass, templateParams.showClass, userParams.showClass);

    var hideClass = _extends({}, defaultParams.hideClass, mixinParams.hideClass, templateParams.hideClass, userParams.hideClass);

    var params = _extends({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131


    params.showClass = showClass;
    params.hideClass = hideClass; // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          isDismissed: true,
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.denyButton.onclick = function () {
        return handleDenyButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);

      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
        addClass(document.body, swalClasses['toast-column']);
      } else {
        removeClass(document.body, swalClasses['toast-column']);
      }

      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout && globalState$$1.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };

  var focusButton = function focusButton(domCache, innerParams) {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
      }
    });

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    runDidDestroy(innerParams);
    disposeSwal(this);
  }

  var runDidDestroy = function runDidDestroy(innerParams) {
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    } else if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy(); // @deprecated
    }
  };

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance;

  var SweetAlert = /*#__PURE__*/function () {
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);

      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      } // Check for the existence of Promise


      if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
      }

      currentInstance = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      var promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    _createClass(SweetAlert, [{
      key: "then",
      value: function then(onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var promise = privateProps.promise.get(this);
        return promise["finally"](onFinally);
      }
    }]);

    return SweetAlert;
  }(); // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '10.15.2';

  var Swal = SweetAlert;
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}


/***/ })

},
0,[["./src/assets/js/custom/admin/products/categories.js","commons/backend/admin/commonVendor","js/librairies/adminlib"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2Zvcm1fY3J1ZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvaW5wdXRFcnJNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2FkbWluL3Byb2R1Y3RzL2NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy1leHRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC13cmFwcGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZW50cmllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuanMiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJpc0lFIiwidXNlckFnZW50IiwibmF2aWdhdG9yIiwidGVzdCIsImRpc3BsYXlBbGxEZXRhaWxzIiwiZGF0YSIsImdlc3Rpb24iLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsInRhYmxlIiwiaWQiLCJ1c2VyIiwic2Vzc2lvbl9pZCIsImRhdGFfdHlwZSIsInJldHVybl9tb2RlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwicGFyYW1zIiwiZWRpdEZvcm0iLCJmb3JtRGF0YSIsImRpc3BsYXlBbGxJdGVtcyIsInN0YXJ0IiwibWF4IiwicXVlcnkiLCJwYWdlIiwicGFnaW5hdGlvbiIsInJlc3VsdCIsImRpc3BsYXlpZCIsImh0bWwiLCJtc2ciLCJkYXRhdGFibGUiLCJsb2FkRGF0YXRhYmxlcyIsIkRhdGFUYWJsZSIsIm9yZGVyIiwiQWRkIiwiRm9ybURhdGEiLCJmcm0iLCJhcHBlbmQiLCJub3RpZmljYXRpb24iLCJmcm1fbmFtZSIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsImltYWdlVXJsc0FyeSIsImNhY2hlIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsIkNhbGxfY29udHJvbGxlciIsInVybF9kYXRhIiwiYWN0aW9uIiwiZnJlZWRhdGEiLCJ1c2VyX2lkIiwiTWFuYWdlUmVzcG9uc2UiLCJhZGRfaW5wdXRzX2Vycm9ycyIsImlucHV0c0FycmF5IiwiZXJyb3IiLCJ0cmlnZ2VyIiwibG9naW4iLCJsb2dpbmJveCIsIm1vZGFsIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJzd2FsIiwibW9kYWxib3giLCJmaXJlIiwiYWxlcnRzdWNjZXNzIiwiYWxlcnRpZCIsImhhc093blByb3BlcnR5IiwiaW1nYXJlYSIsImF0dHIiLCJpbWd2YWx1ZSIsInByZXBlbmQiLCJuZXN0ZWQiLCJiZWZvcmUiLCJoaWRlIiwiZGlzcGxheSIsIkRlbGV0ZSIsImRpc3BsYXlJdGVtIiwiY2hlY2tCZWZvcmVEZWxldGUiLCJ0aGVuIiwidmFsdWUiLCJhbGVydElEIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cmxfY2hlY2siLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiZG9uZSIsImZhaWwiLCJkaXNwbGF5TXVsdGlzZWxsZWN0IiwiZGlzcGxheUlEIiwiYWRkQ2F0ZWdvcnJpZSIsImNhdEZpZWxkIiwiY2F0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwiYWxlcnQiLCJjYXRlZ29yaWUiLCJJbnB1dEFyciIsImFyckVyciIsImZvckVhY2giLCJpbnB1dCIsImluZGV4T2YiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpbm5lckhUTUwiLCJyZXNldF9pbnZhbGlkX2lucHV0IiwiZm9ybSIsImZpbmQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZUludmFsaWRJbnB1dCIsIk15Zm9ybSIsIm9uIiwicGFyZW50IiwiY2hpbGRyZW4iLCJJbnB1dEVyciIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJhZGRDbGFzcyIsInB1c2giLCJhcnIiLCJlYWNoIiwiaW5wdXRzQXJyIiwidG9BcnJheSIsInR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwiUGhwUGx1Z2luIiwiZWxlbWVudCIsImluaXQiLCJwcm90b3R5cGUiLCJzZXR1cFZhcmlhYmxlcyIsInNldHVwRXZlbnRzIiwid3JhcHBlciIsIlBsdWdpbmZybSIsIlBsdWdpbk1vZGFsIiwicGhwUGx1Z2luIiwiZGlzcGxheUFsbCIsImVtcHR5IiwidmFsIiwicm9vdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIlJlc3BvbnNlIiwicmRhdGEiLCJTd2FsIiwic2VyaWFsaXplIiwicGFyYW0iLCJtYW5hZ2VSIiwiaXRlbXMiLCJjYXRJRCIsImRhdGVfZW5yZWciLCJ1cGRhdGVBdCIsInN0YXR1cyIsImRlc2NyaXB0aW9uIiwiZWxtdCIsImNvbnNvbGUiLCJsb2ciLCJmaXJzdCIsImZuIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7O0FDVk8sSUFBTUEsUUFBUSxHQUFHLG9CQUFqQjtBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDeEIsTUFBSUMsU0FBUyxHQUFHQyxTQUFTLENBQUNELFNBQTFCO0FBQ0EsU0FBTyxlQUFlRSxJQUFmLENBQW9CRixTQUFwQixDQUFQO0FBQ0QsQ0FITSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7Q0FHQTs7QUFDTyxTQUFTRyxpQkFBVCxDQUEyQkMsSUFBM0IsRUFBaUNDLE9BQWpDLEVBQTBDO0FBQy9DQyxHQUFDLENBQUNDLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVWLDZDQUFRLEdBQUdNLElBQUksQ0FBQ0ksR0FEaEI7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTEwsUUFBSSxFQUFFO0FBQ0pNLFdBQUssRUFBRU4sSUFBSSxDQUFDTSxLQURSO0FBRUpDLFFBQUUsRUFBRVAsSUFBSSxDQUFDTyxFQUZMO0FBR0pDLFVBQUks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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsS0FBSztBQUNMLGtDQUFrQztBQUNsQyxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7O0FBRXpDO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTCxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRFQUE0RTs7QUFFNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0VBQXNFOztBQUV0RSx3RkFBd0Y7QUFDeEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDOztBQUU1QyxxREFBcUQ7O0FBRXJEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTs7QUFFaEUsdURBQXVEOztBQUV2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsbUJBQW1CLDZCQUE2QjtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkRBQTZEOztBQUU3RDtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLEtBQUs7QUFDTDtBQUNBLG1DQUFtQztBQUNuQyxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZEOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCLHNDQUFzQzs7QUFFdEM7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJJQUEySSxrQkFBa0I7QUFDN0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjs7QUFFcEI7QUFDQSwrQ0FBK0M7O0FBRS9DO0FBQ0EsNkRBQTZEOztBQUU3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7O0FBRTdCLCtDQUErQzs7QUFFL0MsMENBQTBDOztBQUUxQyxpQ0FBaUM7O0FBRWpDLGtDQUFrQzs7QUFFbEMsa0NBQWtDOztBQUVsQztBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSzs7O0FBR0wsMERBQTBEOztBQUUxRDtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBLDZEQUE2RDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLG1CQUFtQjtBQUN4QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLDZEQUE2RCxLQUFLO0FBQ2xFLEtBQUs7QUFDTDtBQUNBO0FBQ0Esd0RBQXdELE1BQU0sUUFBUSxLQUFLO0FBQzNFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOzs7QUFHQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVEQUF1RDs7QUFFdkQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPLEVBQUU7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDOztBQUU5QztBQUNBLEtBQUssc0JBQXNCOztBQUUzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEseUVBQXlFLGFBQWE7QUFDdEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUcsR0FBRzs7O0FBR04sa0RBQWtEOzs7QUFHbEQsc0NBQXNDOzs7QUFHdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxDQUFDO0FBQ0QscURBQXFELEVBQUUsU0FBUyxHQUFHLGVBQWUsR0FBRyxTQUFTLEdBQUcsZUFBZSIsImZpbGUiOiJqcy9jdXN0b20vYWRtaW4vcHJvZHVjdHMvY2F0ZWdvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJleHBvcnQgY29uc3QgQkFTRV9VUkwgPSBcIi9rbmdlbGxfZWNvbW1lcmNlL1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzSUUgPSAoKSA9PiB7XHJcbiAgdmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgcmV0dXJuIC9NU0lFfFRyaWRlbnQvLnRlc3QodXNlckFnZW50KTtcclxufTtcclxuIiwiaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgYWRkX2lucHV0c19lcnJvcnMsIGVycm9yLCBpbnB1dHNBcnJheSB9IGZyb20gXCIuL2lucHV0RXJyTWFuYWdlclwiO1xyXG5cclxuLy9kaXNwbGF5IGFsbCBkZXRhaWxzXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsRGV0YWlscyhkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgdXNlcjogZGF0YS51c2VyID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgc2Vzc2lvbl9pZDogZGF0YS5zZXNzaW9uX2lkID8gZGF0YS5zZXNzaW9uX2lkIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL2VkaXQgZGF0YVxyXG5leHBvcnQgZnVuY3Rpb24gZWRpdEZvcm0oZGF0YSwgZ2VzdGlvbikge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YS5mb3JtRGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vZGlzcGxheSBhbGwgSXRlbXNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxJdGVtcyhkYXRhKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCAhPSBcIlwiID8gZGF0YS5pZCA6IFwiXCIsXHJcbiAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICBtYXg6IGRhdGEubWF4ICE9IFwiXCIgPyBkYXRhLm1heCA6IFwiXCIsXHJcbiAgICAgIHVzZXI6IGRhdGEudXNlciAhPSBcIlwiID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgcXVlcnk6IGRhdGEucXVlcnkgIT0gXCJcIiA/IGRhdGEucXVlcnkgOiBcIlwiLFxyXG4gICAgICBwYWdlOiBkYXRhLnBhZ2UgIT0gXCJcIiA/IGRhdGEucGFnZSA6IFwiXCIsXHJcbiAgICAgIHBhZ2luYXRpb246IGRhdGEucGFnaW5hdGlvbiAhPSBcIlwiID8gZGF0YS5wYWdpbmF0aW9uIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICAgIGlmIChkYXRhLnRhYmxlID09PSBcImNvbW1lbnRzXCIpIHtcclxuICAgICAgICAgIGRhdGEuZGlzcGxheWlkLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGF0YS5kaXNwbGF5aWQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgaWYgKGRhdGEuZGF0YXRhYmxlKSBsb2FkRGF0YXRhYmxlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKGRhdGEuZGlzcGxheWlkKS5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gbG9hZERhdGF0YWJsZXMoKSB7XHJcbiAgY29uc3QgRGF0YVRhYmxlID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJkYXRhdGFibGVzXCIgKi8gXCJkYXRhdGFibGVzLm5ldFwiXHJcbiAgKTtcclxuICAkKFwidGFibGVcIikuRGF0YVRhYmxlKHtcclxuICAgIG9yZGVyOiBbMCwgXCJkZXNjXCJdLFxyXG4gIH0pO1xyXG59XHJcbi8vYWRkIEl0ZW1cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZChkYXRhLCBnZXN0aW9uKSB7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEuZnJtWzBdKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJ0YWJsZVwiLCBkYXRhLnRhYmxlKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJub3RpZmljYXRpb25cIiwgZGF0YS5ub3RpZmljYXRpb24pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImZybV9uYW1lXCIsIGRhdGEuZnJtX25hbWUpO1xyXG4gIGlmIChkYXRhLnN0YXJ0X2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcInN0YXJ0X2RhdGVcIiwgZGF0YS5zdGFydF9kYXRlKTtcclxuICBpZiAoZGF0YS5lbmRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwiZW5kX2RhdGVcIiwgZGF0YS5lbmRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuaW1hZ2VVcmxzQXJ5KSBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVVybHNBcnlcIiwgZGF0YS5pbWFnZVVybHNBcnkpO1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICBjYWNoZTogZmFsc2UsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL3VwZGF0ZVxyXG5leHBvcnQgZnVuY3Rpb24gQ2FsbF9jb250cm9sbGVyKGRhdGEsIGdlc3Rpb24pIHtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZGF0YS5mcm1bMF0pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImZybV9uYW1lXCIsIGRhdGEuZnJtX25hbWUpO1xyXG4gIGlmIChkYXRhLnRhYmxlKSBmb3JtRGF0YS5hcHBlbmQoXCJ0YWJsZVwiLCBkYXRhLnRhYmxlKTtcclxuICBpZiAoZGF0YS5ub3RpZmljYXRpb24pIGZvcm1EYXRhLmFwcGVuZChcIm5vdGlmaWNhdGlvblwiLCBkYXRhLm5vdGlmaWNhdGlvbik7XHJcbiAgaWYgKGRhdGEudXJsX2RhdGEpIGZvcm1EYXRhLmFwcGVuZChcInVybF9kYXRhXCIsIGRhdGEudXJsX2RhdGEpO1xyXG4gIGlmIChkYXRhLmFjdGlvbikgZm9ybURhdGEuYXBwZW5kKFwiYWN0aW9uXCIsIGRhdGEuYWN0aW9uKTtcclxuICBpZiAoZGF0YS5pbWFnZVVybHNBcnkpIGZvcm1EYXRhLmFwcGVuZChcImltYWdlVXJsc0FyeVwiLCBkYXRhLmltYWdlVXJsc0FyeSk7XHJcbiAgaWYgKGRhdGEuZnJlZWRhdGEpIGZvcm1EYXRhLmFwcGVuZChcImZyZWVkYXRhXCIsIGRhdGEuZnJlZWRhdGEpO1xyXG4gIGlmIChkYXRhLnN0YXJ0X2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcInN0YXJ0X2RhdGVcIiwgZGF0YS5zdGFydF9kYXRlKTtcclxuICBpZiAoZGF0YS5lbmRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwiZW5kX2RhdGVcIiwgZGF0YS5lbmRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuaWQpIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGRhdGEuaWQpO1xyXG4gIGlmIChkYXRhLnVzZXJfaWQpIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGRhdGEudXNlcl9pZCk7XHJcbiAgaWYgKGRhdGEubWV0aG9kKSBmb3JtRGF0YS5hcHBlbmQoXCJtZXRob2RcIiwgZGF0YS5tZXRob2QpO1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL01hbmFnZSBpdGVtIGFkZGVkL3VwZGF0ZWRcclxuZXhwb3J0IGZ1bmN0aW9uIE1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCBkYXRhKSB7XHJcbiAgc3dpdGNoIChyZXNwb25zZS5yZXN1bHQpIHtcclxuICAgIGNhc2UgXCJlcnJvci1maWVsZFwiOlxyXG4gICAgICBhZGRfaW5wdXRzX2Vycm9ycyhpbnB1dHNBcnJheShkYXRhLmZybSksIGVycm9yKGRhdGEuZnJtLCByZXNwb25zZS5tc2cpKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwic3VjY2Vzc1wiOlxyXG4gICAgICBkYXRhLmZybS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgIGlmIChkYXRhLmxvZ2luKSB7XHJcbiAgICAgICAgZGF0YS5sb2dpbmJveC5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhLnN3YWwpIHtcclxuICAgICAgICBkYXRhLm1vZGFsYm94Lm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICBkYXRhLnN3YWwuZmlyZShcIlN1Y2Nlc3MhXCIsIHJlc3BvbnNlLm1zZywgXCJzdWNjZXNzXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChkYXRhLmFsZXJ0c3VjY2VzcykgZGF0YS5hbGVydGlkLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImltZ2FyZWFcIikpIHtcclxuICAgICAgICBkYXRhLmltZ2FyZWEuYXR0cihcInNyY1wiLCBkYXRhLmltZ3ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YS5wcmVwZW5kKSB7XHJcbiAgICAgICAgZGF0YS5uZXN0ZWQucHJlcGVuZChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChkYXRhLnByZXBlbmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBkYXRhLm5lc3RlZC5iZWZvcmUocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIGRhdGEubmVzdGVkLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGEuZGlzcGxheSkgZGF0YS5kaXNwbGF5KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImVycm9yXCI6XHJcbiAgICAgIGRhdGEuYWxlcnRpZC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIGRhdGEuZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59XHJcblxyXG4vL2RlbGV0ZVxyXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlKGRhdGEsIGRpc3BsYXlJdGVtKSB7XHJcbiAgY2hlY2tCZWZvcmVEZWxldGUoZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgICAgIG5vdGlmaWNhdGlvbjogZGF0YS5ub3RpZmljYXRpb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIGRhdGEuc3dhbC5maXJlKFwiRGVsZXRlZCFcIiwgcmVzcG9uc2UubXNnLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIGRpc3BsYXlJdGVtKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhLmFsZXJ0SUQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbi8vZnVuY3Rpb24gY2hlY2sgYmVmb3JlIGRlbGV0ZVxyXG5mdW5jdGlvbiBjaGVja0JlZm9yZURlbGV0ZShkYXRhKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGlmICghZGF0YS51cmxfY2hlY2spIHtcclxuICAgICAgZGF0YS5zd2FsXHJcbiAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgIGh0bWw6IFwiPHA+WW91IHdvbid0IGJlIGFibGUgdG8gcmV2ZXJ0IHRoaXMhPC9wPlwiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkRlbGV0ZSFcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsX2NoZWNrLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgICAgIG5vdGlmaWNhdGlvbjogZGF0YS5ub3RpZmljYXRpb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGRhdGEuc3dhbFxyXG4gICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgaHRtbDogXCI8cD5Zb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyE8L3A+XCIgKyByZXNwb25zZS5tc2csXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiRGVsZXRlIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU11bHRpc2VsbGVjdChkYXRhKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBcImZvcm1zL2ZpbGxNdWx0aXNlbGVjdFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgZGF0YS5kaXNwbGF5SUQuYXBwZW5kKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YS5hbGVydElELmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhdGVnb3JyaWUoY2F0RmllbGQsIGFsZXJ0SUQpIHtcclxuICBsZXQgY2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXRGaWVsZCk7XHJcbiAgaWYgKGNhdC52YWx1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgYWxlcnQoXCJMZSBjaGFtcHMgY2F0w6lnb3JpZSBlc3QgdmlkZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIFwiZm9ybXMvYWRkY2F0ZWdvcmllXCIsXHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjYXRlZ29yaWU6IGNhdC52YWx1ZSxcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlICE9IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAkKGFsZXJ0SUQpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgYWRkX2lucHV0c19lcnJvcnMgPSAoSW5wdXRBcnIsIGFyckVycikgPT4ge1xyXG4gIElucHV0QXJyLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICBpZiAoYXJyRXJyLmluZGV4T2YoaW5wdXQuaWQpID09IC0xKSB7XHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgICBpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXNldF9pbnZhbGlkX2lucHV0ID0gKGZvcm0pID0+IHtcclxuICBmb3JtLmZpbmQoXCIuaXMtaW52YWxpZFwiKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgZm9ybS5maW5kKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxufTtcclxuXHJcbi8vcmVtb3ZlIGludmFsaWQgaW5wdXQgb24gZm9jdXNcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUludmFsaWRJbnB1dChNeWZvcm0pIHtcclxuICBNeWZvcm0ub24oXCJmb2N1c1wiLCBcImlucHV0LHRleHRhcmVhLCAuY2ssIC5ub3RlLWVkaXRvclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3IgPSAoZm9ybSwgSW5wdXRFcnIpID0+IHtcclxuICB2YXIgYXJyRXJyID0gW107XHJcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoSW5wdXRFcnIpKSB7XHJcbiAgICB2YXIgaW5wdXQgPSBmb3JtLmZpbmQoXCIjXCIgKyBrZXkpLmFkZENsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgIGlucHV0LnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbCh2YWx1ZSk7XHJcbiAgICBhcnJFcnIucHVzaChrZXkpO1xyXG4gIH1cclxuICByZXR1cm4gYXJyRXJyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlucHV0c0FycmF5ID0gKGZvcm0pID0+IHtcclxuICB2YXIgYXJyID0gW107XHJcbiAgZm9ybS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGlucHV0c0FyciA9ICQodGhpcykuZmluZChcIjppbnB1dFwiKS50b0FycmF5KCk7XHJcbiAgICBpbnB1dHNBcnIuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIFtcInN1Ym1pdFwiLCBcImhpZGRlblwiLCBcImNoZWNrYm94XCIsIFwiYnV0dG9uXCIsIFwiZmlsZVwiXS5pbmRleE9mKFxyXG4gICAgICAgICAgaW5wdXQudHlwZVxyXG4gICAgICAgICkgPT0gLTEgJiZcclxuICAgICAgICBpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgICAgKSB7XHJcbiAgICAgICAgYXJyLnB1c2goaW5wdXQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gYXJyO1xyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIEFkZCxcclxuICBkaXNwbGF5QWxsSXRlbXMsXHJcbiAgTWFuYWdlUmVzcG9uc2UsXHJcbiAgQ2FsbF9jb250cm9sbGVyLFxyXG4gIGVkaXRGb3JtLFxyXG4gIERlbGV0ZSxcclxuICBkaXNwbGF5TXVsdGlzZWxsZWN0LFxyXG59IGZyb20gXCJjb3JlanMvZm9ybV9jcnVkXCI7XHJcbmltcG9ydCB7XHJcbiAgcmVtb3ZlSW52YWxpZElucHV0LFxyXG4gIHJlc2V0X2ludmFsaWRfaW5wdXQsXHJcbn0gZnJvbSBcImNvcmVqcy9pbnB1dEVyck1hbmFnZXJcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuanNcIjtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGZ1bmN0aW9uIFBocFBsdWdpbihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG4gIFBocFBsdWdpbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0dXBWYXJpYWJsZXMoKTtcclxuICAgIHRoaXMuc2V0dXBFdmVudHMoKTtcclxuICB9O1xyXG4gIFBocFBsdWdpbi5wcm90b3R5cGUuc2V0dXBWYXJpYWJsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLndyYXBwZXIgPSB0aGlzLmVsZW1lbnQuZmluZChcIi5jYXJkXCIpO1xyXG4gICAgdGhpcy5QbHVnaW5mcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNDYXRlZ29yaWUtZnJtXCIpO1xyXG4gICAgdGhpcy5QbHVnaW5Nb2RhbCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI21vZGFsLWJveFwiKTtcclxuICB9O1xyXG5cclxuICBQaHBQbHVnaW4ucHJvdG90eXBlLnNldHVwRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHBocFBsdWdpbiA9IHRoaXM7XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9EaXNwbGF5IEFsbCBQbHVnaW5zXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBkaXNwbGF5QWxsKCk7XHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5QWxsKCkge1xyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB1cmw6IFwiZm9ybXMvc2hvd0FsbFwiLFxyXG4gICAgICAgIHRhYmxlOiBcImNhdGVnb3JpZXNcIixcclxuICAgICAgICB1c2VyOiBcImFkbWluXCIsXHJcbiAgICAgICAgZGF0YXRhYmxlOiB0cnVlLFxyXG4gICAgICAgIGRpc3BsYXlpZDogcGhwUGx1Z2luLndyYXBwZXIuZmluZChcIiNzaG93QWxsXCIpLFxyXG4gICAgICAgIGRhdGFfdHlwZTogXCJ2YWx1ZXNcIixcclxuICAgICAgfTtcclxuICAgICAgZGlzcGxheUFsbEl0ZW1zKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vY2xlYW4gZm9ybVxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9yZW1vdmUgaW52YWxpZCBpbnB1dCBvbiBpbnB1dCBmb2N1c1xyXG4gICAgcmVtb3ZlSW52YWxpZElucHV0KHBocFBsdWdpbi5QbHVnaW5mcm0pO1xyXG4gICAgLy9jbGVhbiBmb3JtIG9uIGhpZGVcclxuICAgIHBocFBsdWdpbi5QbHVnaW5Nb2RhbC5vbihcImhpZGUuYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAocGhwUGx1Z2luLlBsdWdpbmZybS5maW5kKFwiLmlzLWludmFsaWRcIikubGVuZ3RoICE9IDApIHtcclxuICAgICAgICByZXNldF9pbnZhbGlkX2lucHV0KHBocFBsdWdpbi5QbHVnaW5mcm0pO1xyXG4gICAgICB9XHJcbiAgICAgIHBocFBsdWdpbi5QbHVnaW5mcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICBwaHBQbHVnaW4uUGx1Z2luZnJtLmZpbmQoXCIjcGFyZW50SURcIikuZW1wdHkoKTtcclxuICAgIH0pO1xyXG4gICAgLy9zZXQgY3JlYXRlL2FkZCBmdW5jdGlvblxyXG4gICAgcGhwUGx1Z2luLndyYXBwZXIuZmluZChcIiNhZGROZXdcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHBocFBsdWdpbi5QbHVnaW5mcm0uZmluZChcIiNvcGVyYXRpb25cIikudmFsKFwiYWRkXCIpO1xyXG4gICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICBkaXNwbGF5SUQ6IHBocFBsdWdpbi5QbHVnaW5mcm0uZmluZChcIiNwYXJlbnRJRFwiKSxcclxuICAgICAgICBhbGVydElEOiBwaHBQbHVnaW4uUGx1Z2luZnJtLmZpbmQoXCIjYWxlcnRFcnJcIiksXHJcbiAgICAgICAgdGFibGU6IFwiY2F0ZWdvcmllc1wiLFxyXG4gICAgICB9O1xyXG4gICAgICB2YXIgcm9vdCA9XHJcbiAgICAgICAgXCI8b3B0aW9uIERlc2FibGVkIHNlbGVjdGVkIGNsYXNzPSdkZXNhYmxlZCcgdmFsdWUgPSAnMCc+Q2F0ZWdvcmllIFBhcmVudDwvb3B0aW9uPlwiO1xyXG4gICAgICBwaHBQbHVnaW4uUGx1Z2luZnJtLmZpbmQoXCIjcGFyZW50SURcIikuYXBwZW5kKHJvb3QpO1xyXG4gICAgICBkaXNwbGF5TXVsdGlzZWxsZWN0KGRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEFkZCBvciBVcGRhdGUgUGx1Z2luXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLlBsdWdpbmZybS5vbihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHBocFBsdWdpbi5QbHVnaW5mcm0uZmluZChcIiNQbHVnaW5CdG5cIikudmFsKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHVybDpcclxuICAgICAgICAgIHBocFBsdWdpbi5QbHVnaW5mcm0uZmluZChcIiNvcGVyYXRpb25cIikudmFsKCkgPT09IFwiYWRkXCJcclxuICAgICAgICAgICAgPyBcImZvcm1zL0FkZFwiXHJcbiAgICAgICAgICAgIDogXCJmb3Jtcy91cGRhdGVcIixcclxuICAgICAgICBmcm06IHBocFBsdWdpbi5QbHVnaW5mcm0sXHJcbiAgICAgICAgZnJtX25hbWU6IFwiQ2F0ZWdvcmllLWZybVwiLFxyXG4gICAgICAgIHRhYmxlOiBcImNhdGVnb3JpZXNcIixcclxuICAgICAgICBub3RpZmljYXRpb246IFwiYWRtaW5cIixcclxuICAgICAgfTtcclxuICAgICAgc3dpdGNoIChwaHBQbHVnaW4uUGx1Z2luZnJtLmZpbmQoXCIjb3BlcmF0aW9uXCIpLnZhbCgpKSB7XHJcbiAgICAgICAgY2FzZSBcImFkZFwiOlxyXG4gICAgICAgICAgQWRkKGRhdGEsIFJlc3BvbnNlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ1cGRhdGVcIjpcclxuICAgICAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBSZXNwb25zZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBmdW5jdGlvbiBSZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgICAgIHBocFBsdWdpbi5QbHVnaW5mcm0uZmluZChcIiNQbHVnaW5CdG5cIikudmFsKFwiVmFsaWRlclwiKTtcclxuICAgICAgICB2YXIgcmRhdGEgPSB7XHJcbiAgICAgICAgICBmcm06IHBocFBsdWdpbi5QbHVnaW5mcm0sXHJcbiAgICAgICAgICBzd2FsOiBTd2FsLFxyXG4gICAgICAgICAgbW9kYWxib3g6IHBocFBsdWdpbi5QbHVnaW5Nb2RhbCxcclxuICAgICAgICAgIGFsZXJ0aWQ6IHBocFBsdWdpbi5QbHVnaW5mcm0uZmluZChcIiNhbGVydEVyclwiKSxcclxuICAgICAgICAgIGRpc3BsYXk6IGRpc3BsYXlBbGwsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBNYW5hZ2VSZXNwb25zZShyZXNwb25zZSwgcmRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vRWRpdCBQbHVnaW5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHBocFBsdWdpbi53cmFwcGVyLm9uKFwiY2xpY2tcIiwgXCIuZWRpdEJ0blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHBocFBsdWdpbi5QbHVnaW5mcm0uZmluZChcIiNvcGVyYXRpb25cIikudmFsKFwidXBkYXRlXCIpO1xyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB1cmw6IFwiZm9ybXMvZWRpdFwiLFxyXG4gICAgICAgIGZvcm1EYXRhOlxyXG4gICAgICAgICAgcGhwUGx1Z2luLlBsdWdpbk1vZGFsLmZpbmQoXHJcbiAgICAgICAgICAgIFwiI0NhdGVnb3JpZS1mcm0gaW5wdXRbdHlwZT1oaWRkZW5dXCJcclxuICAgICAgICAgICkuc2VyaWFsaXplKCkgK1xyXG4gICAgICAgICAgXCImXCIgK1xyXG4gICAgICAgICAgJC5wYXJhbSh7XHJcbiAgICAgICAgICAgIGlkOiAkKHRoaXMpLmF0dHIoXCJpZFwiKSxcclxuICAgICAgICAgICAgdGFibGU6IFwiY2F0ZWdvcmllc1wiLFxyXG4gICAgICAgICAgICBmcm1fbmFtZTogXCJDYXRlZ29yaWUtZnJtXCIsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgICAgZWRpdEZvcm0oZGF0YSwgbWFuYWdlUik7XHJcbiAgICAgIGZ1bmN0aW9uIG1hbmFnZVIocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgcGhwUGx1Z2luLlBsdWdpbmZybS5maW5kKFwiI2NhdElEXCIpLnZhbChyZXNwb25zZS5tc2cuaXRlbXMuY2F0SUQpO1xyXG4gICAgICAgICAgcGhwUGx1Z2luLlBsdWdpbmZybS5maW5kKFwiI2RhdGVfZW5yZWdcIikudmFsKFxyXG4gICAgICAgICAgICByZXNwb25zZS5tc2cuaXRlbXMuZGF0ZV9lbnJlZ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHBocFBsdWdpbi5QbHVnaW5mcm0uZmluZChcIiN1cGRhdGVBdFwiKS52YWwoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLm1zZy5pdGVtcy51cGRhdGVBdFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHBocFBsdWdpbi5QbHVnaW5mcm0uZmluZChcIiNzdGF0dXNcIikudmFsKHJlc3BvbnNlLm1zZy5pdGVtcy5zdGF0dXMpO1xyXG4gICAgICAgICAgcGhwUGx1Z2luLlBsdWdpbmZybS5maW5kKFwiI2NhdGVnb3JpZVwiKS52YWwoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLm1zZy5pdGVtcy5jYXRlZ29yaWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBwaHBQbHVnaW4uUGx1Z2luZnJtLmZpbmQoXCIjZGVzY3JpcHRpb25cIikudmFsKFxyXG4gICAgICAgICAgICByZXNwb25zZS5tc2cuaXRlbXMuZGVzY3JpcHRpb25cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBocFBsdWdpbi5QbHVnaW5mcm0uZmluZChcIiNhbGVydEVyclwiKS5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgZGlzcGxheUlEOiBwaHBQbHVnaW4uUGx1Z2luZnJtLmZpbmQoXCIjcGFyZW50SURcIiksXHJcbiAgICAgICAgICBhbGVydElEOiBwaHBQbHVnaW4uUGx1Z2luZnJtLmZpbmQoXCIjYWxlcnRFcnJcIiksXHJcbiAgICAgICAgICB0YWJsZTogXCJjYXRlZ29yaWVzXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgcm9vdCA9XHJcbiAgICAgICAgICBcIjxvcHRpb24gRGVzYWJsZWQgc2VsZWN0ZWQgY2xhc3M9J2Rlc2FibGVkJyB2YWx1ZSA9ICcwJz5TZWxlY3Rpb25uZXogbGEgY2F0ZWdvcmllPC9vcHRpb24+XCI7XHJcbiAgICAgICAgcGhwUGx1Z2luLlBsdWdpbmZybS5maW5kKFwiI3BhcmVudElEXCIpLmFwcGVuZChyb290KTtcclxuICAgICAgICBkaXNwbGF5TXVsdGlzZWxsZWN0KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBBY3RpdmUvZGVzYWN0aXZlIHBsdWdpblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHBocFBsdWdpbi53cmFwcGVyLm9uKFwiY2xpY2tcIiwgXCIuYWN0aXZhdGVCdG5cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB1cmw6IFwidGFibGVzL3VwZGF0ZVwiLFxyXG4gICAgICAgIHRhYmxlOiBcImNhdGVnb3JpZXNcIixcclxuICAgICAgICBmcm06IHBocFBsdWdpbi5QbHVnaW5mcm0sXHJcbiAgICAgICAgaWQ6ICQodGhpcykuYXR0cihcImlkXCIpLFxyXG4gICAgICAgIG1ldGhvZDogXCJjYXRlZ29yaWVTdGF0dXNcIixcclxuICAgICAgICBwYXJhbXM6ICQodGhpcyksXHJcbiAgICAgIH07XHJcbiAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBSZXNwb25zZSk7XHJcbiAgICAgIGZ1bmN0aW9uIFJlc3BvbnNlKHJlc3BvbnNlLCBlbG10KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIHJlc3BvbnNlLm1zZyA9PSBcImdyZWVuXCJcclxuICAgICAgICAgICAgPyBlbG10LmF0dHIoXCJ0aXRsZVwiLCBcIkRlYWN0aXZhdGUgQ2F0ZWdvcnlcIilcclxuICAgICAgICAgICAgOiBlbG10LmF0dHIoXCJ0aXRsZVwiLCBcIkFjdGl2YXRlIENhdGVnb3J5XCIpO1xyXG4gICAgICAgICAgZWxtdFxyXG4gICAgICAgICAgICAuY2hpbGRyZW4oKVxyXG4gICAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgICAuYXR0cihcInN0eWxlXCIsIFwiY29sb3I6XCIgKyByZXNwb25zZS5tc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gRGVsZXRlIFBsdWdpblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHBocFBsdWdpbi53cmFwcGVyLm9uKFwiY2xpY2tcIiwgXCIuZGVsZXRlQnRuXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgdXJsOiBcImZvcm1zL2RlbGV0ZVwiLFxyXG4gICAgICAgIHVybF9jaGVjazogXCJmb3Jtcy9jaGVja2RlbGV0ZVwiLFxyXG4gICAgICAgIGlkOiAkKHRoaXMpLmF0dHIoXCJpZFwiKSxcclxuICAgICAgICB0YWJsZTogXCJjYXRlZ29yaWVzXCIsXHJcbiAgICAgICAgbm90aWZpY2F0aW9uOiBcImFkbWluXCIsXHJcbiAgICAgICAgc3dhbDogU3dhbCxcclxuICAgICAgICBhbGVydElEOiBwaHBQbHVnaW4ud3JhcHBlci5maW5kKFwiI2dsb2JhbEVyclwiKSxcclxuICAgICAgfTtcclxuICAgICAgRGVsZXRlKGRhdGEsIGRpc3BsYXlBbGwpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICAkLmZuLnBocFBsdWdpbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICBuZXcgUGhwUGx1Z2luKHRoaXMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuICAkKFwiLmNvbnRlbnRcIikucGhwUGx1Z2luKCk7XHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAoIVNUUklDVF9NRVRIT0QgfHwgIVVTRVNfVE9fTEVOR1RIKSA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbn0gOiBbXS5mb3JFYWNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIG1hcGZuID0gYXJndW1lbnRzTGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBnZXRJdGVyYXRvck1ldGhvZChPKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvciwgbmV4dCwgdmFsdWU7XG4gIGlmIChtYXBwaW5nKSBtYXBmbiA9IGJpbmQobWFwZm4sIGFyZ3VtZW50c0xlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAvLyBpZiB0aGUgdGFyZ2V0IGlzIG5vdCBpdGVyYWJsZSBvciBpdCdzIGFuIGFycmF5IHdpdGggdGhlIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2UgYSBzaW1wbGUgY2FzZVxuICBpZiAoaXRlcmF0b3JNZXRob2QgIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlcmF0b3JNZXRob2QpKSkge1xuICAgIGl0ZXJhdG9yID0gaXRlcmF0b3JNZXRob2QuY2FsbChPKTtcbiAgICBuZXh0ID0gaXRlcmF0b3IubmV4dDtcbiAgICByZXN1bHQgPSBuZXcgQygpO1xuICAgIGZvciAoOyEoc3RlcCA9IG5leHQuY2FsbChpdGVyYXRvcikpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgIHZhbHVlID0gbWFwcGluZyA/IGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWU7XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICByZXN1bHQgPSBuZXcgQyhsZW5ndGgpO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF07XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5cbnZhciBwdXNoID0gW10ucHVzaDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGZvckVhY2gsIG1hcCwgZmlsdGVyLCBzb21lLCBldmVyeSwgZmluZCwgZmluZEluZGV4LCBmaWx0ZXJPdXQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgSVNfRklMVEVSX09VVCA9IFRZUEUgPT0gNztcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQsIHNwZWNpZmljQ3JlYXRlKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJbmRleGVkT2JqZWN0KE8pO1xuICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGNyZWF0ZSA9IHNwZWNpZmljQ3JlYXRlIHx8IGFycmF5U3BlY2llc0NyZWF0ZTtcbiAgICB2YXIgdGFyZ2V0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSIHx8IElTX0ZJTFRFUl9PVVQgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkO1xuICAgIHZhciB2YWx1ZSwgcmVzdWx0O1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsdWUgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlc3VsdCA9IGJvdW5kRnVuY3Rpb24odmFsdWUsIGluZGV4LCBPKTtcbiAgICAgIGlmIChUWVBFKSB7XG4gICAgICAgIGlmIChJU19NQVApIHRhcmdldFtpbmRleF0gPSByZXN1bHQ7IC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXN1bHQpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsdWU7ICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiBwdXNoLmNhbGwodGFyZ2V0LCB2YWx1ZSk7IC8vIGZpbHRlclxuICAgICAgICB9IGVsc2Ugc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSA0OiByZXR1cm4gZmFsc2U7ICAgICAgICAgICAgIC8vIGV2ZXJ5XG4gICAgICAgICAgY2FzZSA3OiBwdXNoLmNhbGwodGFyZ2V0LCB2YWx1ZSk7IC8vIGZpbHRlck91dFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiB0YXJnZXQ7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuICBmb3JFYWNoOiBjcmVhdGVNZXRob2QoMCksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4gIG1hcDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuICBmaWx0ZXI6IGNyZWF0ZU1ldGhvZCgyKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5zb21lYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc29tZVxuICBzb21lOiBjcmVhdGVNZXRob2QoMyksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZXZlcnlgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5ldmVyeVxuICBldmVyeTogY3JlYXRlTWV0aG9kKDQpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4gIGZpbmQ6IGNyZWF0ZU1ldGhvZCg1KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhcbiAgZmluZEluZGV4OiBjcmVhdGVNZXRob2QoNiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyT3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtYXJyYXktZmlsdGVyaW5nXG4gIGZpbHRlck91dDogY3JlYXRlTWV0aG9kKDcpXG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBjYWNoZSA9IHt9O1xuXG52YXIgdGhyb3dlciA9IGZ1bmN0aW9uIChpdCkgeyB0aHJvdyBpdDsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIG9wdGlvbnMpIHtcbiAgaWYgKGhhcyhjYWNoZSwgTUVUSE9EX05BTUUpKSByZXR1cm4gY2FjaGVbTUVUSE9EX05BTUVdO1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgdmFyIEFDQ0VTU09SUyA9IGhhcyhvcHRpb25zLCAnQUNDRVNTT1JTJykgPyBvcHRpb25zLkFDQ0VTU09SUyA6IGZhbHNlO1xuICB2YXIgYXJndW1lbnQwID0gaGFzKG9wdGlvbnMsIDApID8gb3B0aW9uc1swXSA6IHRocm93ZXI7XG4gIHZhciBhcmd1bWVudDEgPSBoYXMob3B0aW9ucywgMSkgPyBvcHRpb25zWzFdIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiBjYWNoZVtNRVRIT0RfTkFNRV0gPSAhIW1ldGhvZCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIGlmIChBQ0NFU1NPUlMgJiYgIURFU0NSSVBUT1JTKSByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgTyA9IHsgbGVuZ3RoOiAtMSB9O1xuXG4gICAgaWYgKEFDQ0VTU09SUykgZGVmaW5lUHJvcGVydHkoTywgMSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IHRocm93ZXIgfSk7XG4gICAgZWxzZSBPWzFdID0gMTtcblxuICAgIG1ldGhvZC5jYWxsKE8sIGFyZ3VtZW50MCwgYXJndW1lbnQxKTtcbiAgfSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWxBcnJheSwgbGVuZ3RoKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbEFycmF5KSkge1xuICAgIEMgPSBvcmlnaW5hbEFycmF5LmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBlbHNlIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIG5ldyAoQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDKShsZW5ndGggPT09IDAgPyAwIDogbGVuZ3RoKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBFTlRSSUVTKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEVOVFJJRVMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1ByaW1pdGl2ZShrZXkpO1xuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbn07XG4iLCJ2YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wtd3JhcHBlZCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FKSB7XG4gIHZhciBTeW1ib2wgPSBwYXRoLlN5bWJvbCB8fCAocGF0aC5TeW1ib2wgPSB7fSk7XG4gIGlmICghaGFzKFN5bWJvbCwgTkFNRSkpIGRlZmluZVByb3BlcnR5KFN5bWJvbCwgTkFNRSwge1xuICAgIHZhbHVlOiB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlLmYoTkFNRSlcbiAgfSk7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsInZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJykuZjtcblxudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyhpdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJ1xuICAgID8gZ2V0V2luZG93TmFtZXMoaXQpXG4gICAgOiBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKHRvSW5kZXhlZE9iamVjdChpdCkpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpLmY7XG5cbi8vIGBPYmplY3QueyBlbnRyaWVzLCB2YWx1ZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUT19FTlRSSUVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChpdCk7XG4gICAgdmFyIGtleXMgPSBvYmplY3RLZXlzKE8pO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIHtcbiAgICAgIGtleSA9IGtleXNbaSsrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChPLCBrZXkpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFRPX0VOVFJJRVMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgT2JqZWN0LmVudHJpZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5lbnRyaWVzXG4gIGVudHJpZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYE9iamVjdC52YWx1ZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC52YWx1ZXNcbiAgdmFsdWVzOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG5leHBvcnRzLmYgPSB3ZWxsS25vd25TeW1ib2w7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBGSU5EID0gJ2ZpbmQnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoRklORCk7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZnJvbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mcm9tJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xuXG52YXIgSU5DT1JSRUNUX0lURVJBVElPTiA9ICFjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gIEFycmF5LmZyb20oaXRlcmFibGUpO1xufSk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxuJCh7IHRhcmdldDogJ0FycmF5Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJTkNPUlJFQ1RfSVRFUkFUSU9OIH0sIHtcbiAgZnJvbTogZnJvbVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBuYXRpdmVJbmRleE9mID0gW10uaW5kZXhPZjtcblxudmFyIE5FR0FUSVZFX1pFUk8gPSAhIW5hdGl2ZUluZGV4T2YgJiYgMSAvIFsxXS5pbmRleE9mKDEsIC0wKSA8IDA7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2luZGV4T2YnKTtcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdpbmRleE9mJywgeyBBQ0NFU1NPUlM6IHRydWUsIDE6IDAgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBORUdBVElWRV9aRVJPIHx8ICFTVFJJQ1RfTUVUSE9EIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG4vLyBgQXJyYXkuaXNBcnJheWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LmlzYXJyYXlcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHN0YXQ6IHRydWUgfSwge1xuICBpc0FycmF5OiBpc0FycmF5XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnc2xpY2UnKTtcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdzbGljZScsIHsgQUNDRVNTT1JTOiB0cnVlLCAwOiAwLCAxOiAyIH0pO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIG5hdGl2ZVNsaWNlID0gW10uc2xpY2U7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuc2xpY2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc2xpY2Vcbi8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5ncyBhbmQgRE9NIG9iamVjdHNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgayA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuZ3RoKTtcbiAgICB2YXIgZmluID0gdG9BYnNvbHV0ZUluZGV4KGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogZW5kLCBsZW5ndGgpO1xuICAgIC8vIGlubGluZSBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBmb3IgdXNhZ2UgbmF0aXZlIGBBcnJheSNzbGljZWAgd2hlcmUgaXQncyBwb3NzaWJsZVxuICAgIHZhciBDb25zdHJ1Y3RvciwgcmVzdWx0LCBuO1xuICAgIGlmIChpc0FycmF5KE8pKSB7XG4gICAgICBDb25zdHJ1Y3RvciA9IE8uY29uc3RydWN0b3I7XG4gICAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgICAgaWYgKHR5cGVvZiBDb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgaXNBcnJheShDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSkge1xuICAgICAgICBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoQ29uc3RydWN0b3IpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gQ29uc3RydWN0b3JbU1BFQ0lFU107XG4gICAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gbnVsbCkgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoQ29uc3RydWN0b3IgPT09IEFycmF5IHx8IENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZVNsaWNlLmNhbGwoTywgaywgZmluKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0ID0gbmV3IChDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDb25zdHJ1Y3RvcikobWF4KGZpbiAtIGssIDApKTtcbiAgICBmb3IgKG4gPSAwOyBrIDwgZmluOyBrKyssIG4rKykgaWYgKGsgaW4gTykgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBuLCBPW2tdKTtcbiAgICByZXN1bHQubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyA9IEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi1pbnN0YW5jZXMtbmFtZVxuaWYgKERFU0NSSVBUT1JTICYmICEoTkFNRSBpbiBGdW5jdGlvblByb3RvdHlwZSkpIHtcbiAgZGVmaW5lUHJvcGVydHkoRnVuY3Rpb25Qcm90b3R5cGUsIE5BTUUsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZy5jYWxsKHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRlbnRyaWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC10by1hcnJheScpLmVudHJpZXM7XG5cbi8vIGBPYmplY3QuZW50cmllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5lbnRyaWVzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSB9LCB7XG4gIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoTykge1xuICAgIHJldHVybiAkZW50cmllcyhPKTtcbiAgfVxufSk7XG4iLCIvLyBgU3ltYm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvbmAgZ2V0dGVyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUuZGVzY3JpcHRpb25cbid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xuXG52YXIgTmF0aXZlU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcblxuaWYgKERFU0NSSVBUT1JTICYmIHR5cGVvZiBOYXRpdmVTeW1ib2wgPT0gJ2Z1bmN0aW9uJyAmJiAoISgnZGVzY3JpcHRpb24nIGluIE5hdGl2ZVN5bWJvbC5wcm90b3R5cGUpIHx8XG4gIC8vIFNhZmFyaSAxMiBidWdcbiAgTmF0aXZlU3ltYm9sKCkuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZFxuKSkge1xuICB2YXIgRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlID0ge307XG4gIC8vIHdyYXAgU3ltYm9sIGNvbnN0cnVjdG9yIGZvciBjb3JyZWN0IHdvcmsgd2l0aCB1bmRlZmluZWQgZGVzY3JpcHRpb25cbiAgdmFyIFN5bWJvbFdyYXBwZXIgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBTdHJpbmcoYXJndW1lbnRzWzBdKTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcyBpbnN0YW5jZW9mIFN5bWJvbFdyYXBwZXJcbiAgICAgID8gbmV3IE5hdGl2ZVN5bWJvbChkZXNjcmlwdGlvbilcbiAgICAgIC8vIGluIEVkZ2UgMTMsIFN0cmluZyhTeW1ib2wodW5kZWZpbmVkKSkgPT09ICdTeW1ib2wodW5kZWZpbmVkKSdcbiAgICAgIDogZGVzY3JpcHRpb24gPT09IHVuZGVmaW5lZCA/IE5hdGl2ZVN5bWJvbCgpIDogTmF0aXZlU3ltYm9sKGRlc2NyaXB0aW9uKTtcbiAgICBpZiAoZGVzY3JpcHRpb24gPT09ICcnKSBFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmVbcmVzdWx0XSA9IHRydWU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhTeW1ib2xXcmFwcGVyLCBOYXRpdmVTeW1ib2wpO1xuICB2YXIgc3ltYm9sUHJvdG90eXBlID0gU3ltYm9sV3JhcHBlci5wcm90b3R5cGUgPSBOYXRpdmVTeW1ib2wucHJvdG90eXBlO1xuICBzeW1ib2xQcm90b3R5cGUuY29uc3RydWN0b3IgPSBTeW1ib2xXcmFwcGVyO1xuXG4gIHZhciBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyIG5hdGl2ZSA9IFN0cmluZyhOYXRpdmVTeW1ib2woJ3Rlc3QnKSkgPT0gJ1N5bWJvbCh0ZXN0KSc7XG4gIHZhciByZWdleHAgPSAvXlN5bWJvbFxcKCguKilcXClbXildKyQvO1xuICBkZWZpbmVQcm9wZXJ0eShzeW1ib2xQcm90b3R5cGUsICdkZXNjcmlwdGlvbicsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHZhciBzeW1ib2wgPSBpc09iamVjdCh0aGlzKSA/IHRoaXMudmFsdWVPZigpIDogdGhpcztcbiAgICAgIHZhciBzdHJpbmcgPSBzeW1ib2xUb1N0cmluZy5jYWxsKHN5bWJvbCk7XG4gICAgICBpZiAoaGFzKEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZSwgc3ltYm9sKSkgcmV0dXJuICcnO1xuICAgICAgdmFyIGRlc2MgPSBuYXRpdmUgPyBzdHJpbmcuc2xpY2UoNywgLTEpIDogc3RyaW5nLnJlcGxhY2UocmVnZXhwLCAnJDEnKTtcbiAgICAgIHJldHVybiBkZXNjID09PSAnJyA/IHVuZGVmaW5lZCA6IGRlc2M7XG4gICAgfVxuICB9KTtcblxuICAkKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuICAgIFN5bWJvbDogU3ltYm9sV3JhcHBlclxuICB9KTtcbn1cbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wuaXRlcmF0b3JgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN5bWJvbC5pdGVyYXRvclxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBuYXRpdmVPYmplY3RDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLWV4dGVybmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC13cmFwcGVkJyk7XG52YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG5cbnZhciBISURERU4gPSBzaGFyZWRLZXkoJ2hpZGRlbicpO1xudmFyIFNZTUJPTCA9ICdTeW1ib2wnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKFNZTUJPTCk7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJHN0cmluZ2lmeSA9IGdldEJ1aWx0SW4oJ0pTT04nLCAnc3RyaW5naWZ5Jyk7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG52YXIgbmF0aXZlRGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwuZjtcbnZhciBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmY7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvdHlwZVN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzdHJpbmctdG8tc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgU3ltYm9sVG9TdHJpbmdSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXRvLXN0cmluZy1yZWdpc3RyeScpO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgVVNFX1NFVFRFUiA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RDcmVhdGUobmF0aXZlRGVmaW5lUHJvcGVydHkoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgdmFyIE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0UHJvdG90eXBlLCBQKTtcbiAgaWYgKE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IpIGRlbGV0ZSBPYmplY3RQcm90b3R5cGVbUF07XG4gIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICBpZiAoT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvciAmJiBPICE9PSBPYmplY3RQcm90b3R5cGUpIHtcbiAgICBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPYmplY3RQcm90b3R5cGUsIFAsIE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IpO1xuICB9XG59IDogbmF0aXZlRGVmaW5lUHJvcGVydHk7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZywgZGVzY3JpcHRpb24pIHtcbiAgdmFyIHN5bWJvbCA9IEFsbFN5bWJvbHNbdGFnXSA9IG5hdGl2ZU9iamVjdENyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzZXRJbnRlcm5hbFN0YXRlKHN5bWJvbCwge1xuICAgIHR5cGU6IFNZTUJPTCxcbiAgICB0YWc6IHRhZyxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cbiAgfSk7XG4gIGlmICghREVTQ1JJUFRPUlMpIHN5bWJvbC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICByZXR1cm4gc3ltYm9sO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChpdCkgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgaWYgKE8gPT09IE9iamVjdFByb3RvdHlwZSkgJGRlZmluZVByb3BlcnR5KE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIFAsIEF0dHJpYnV0ZXMpO1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFBdHRyaWJ1dGVzLmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKE8sIEhJRERFTikpIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIEhJRERFTiwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHt9KSk7XG4gICAgICBPW0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoTywgSElEREVOKSAmJiBPW0hJRERFTl1ba2V5XSkgT1tISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSBuYXRpdmVPYmplY3RDcmVhdGUoQXR0cmlidXRlcywgeyBlbnVtZXJhYmxlOiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2NyaXB0b3IoTywga2V5LCBBdHRyaWJ1dGVzKTtcbiAgfSByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkoTywga2V5LCBBdHRyaWJ1dGVzKTtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BlcnRpZXMgPSB0b0luZGV4ZWRPYmplY3QoUHJvcGVydGllcyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhwcm9wZXJ0aWVzKS5jb25jYXQoJGdldE93blByb3BlcnR5U3ltYm9scyhwcm9wZXJ0aWVzKSk7XG4gICRmb3JFYWNoKGtleXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIURFU0NSSVBUT1JTIHx8ICRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHByb3BlcnRpZXMsIGtleSkpICRkZWZpbmVQcm9wZXJ0eShPLCBrZXksIHByb3BlcnRpZXNba2V5XSk7XG4gIH0pO1xuICByZXR1cm4gTztcbn07XG5cbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IG5hdGl2ZU9iamVjdENyZWF0ZShPKSA6ICRkZWZpbmVQcm9wZXJ0aWVzKG5hdGl2ZU9iamVjdENyZWF0ZShPKSwgUHJvcGVydGllcyk7XG59O1xuXG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgUCA9IHRvUHJpbWl0aXZlKFYsIHRydWUpO1xuICB2YXIgZW51bWVyYWJsZSA9IG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGhpcywgUCk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90b3R5cGUgJiYgaGFzKEFsbFN5bWJvbHMsIFApICYmICFoYXMoT2JqZWN0UHJvdG90eXBlU3ltYm9scywgUCkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGVudW1lcmFibGUgfHwgIWhhcyh0aGlzLCBQKSB8fCAhaGFzKEFsbFN5bWJvbHMsIFApIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtQXSA/IGVudW1lcmFibGUgOiB0cnVlO1xufTtcblxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICB2YXIgaXQgPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90b3R5cGUgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPYmplY3RQcm90b3R5cGVTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBkZXNjcmlwdG9yID0gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xuICBpZiAoZGVzY3JpcHRvciAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSB7XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZGVzY3JpcHRvcjtcbn07XG5cbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICB2YXIgbmFtZXMgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKHRvSW5kZXhlZE9iamVjdChPKSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgJGZvckVhY2gobmFtZXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoaGlkZGVuS2V5cywga2V5KSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhPKSB7XG4gIHZhciBJU19PQkpFQ1RfUFJPVE9UWVBFID0gTyA9PT0gT2JqZWN0UHJvdG90eXBlO1xuICB2YXIgbmFtZXMgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKElTX09CSkVDVF9QUk9UT1RZUEUgPyBPYmplY3RQcm90b3R5cGVTeW1ib2xzIDogdG9JbmRleGVkT2JqZWN0KE8pKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICAkZm9yRWFjaChuYW1lcywgZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSAmJiAoIUlTX09CSkVDVF9QUk9UT1RZUEUgfHwgaGFzKE9iamVjdFByb3RvdHlwZSwga2V5KSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIGBTeW1ib2xgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN5bWJvbC1jb25zdHJ1Y3RvclxuaWYgKCFOQVRJVkVfU1lNQk9MKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9ICFhcmd1bWVudHMubGVuZ3RoIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogU3RyaW5nKGFyZ3VtZW50c1swXSk7XG4gICAgdmFyIHRhZyA9IHVpZChkZXNjcmlwdGlvbik7XG4gICAgdmFyIHNldHRlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvdHlwZSkgc2V0dGVyLmNhbGwoT2JqZWN0UHJvdG90eXBlU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjcmlwdG9yKHRoaXMsIHRhZywgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgVVNFX1NFVFRFUikgc2V0U3ltYm9sRGVzY3JpcHRvcihPYmplY3RQcm90b3R5cGUsIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogc2V0dGVyIH0pO1xuICAgIHJldHVybiB3cmFwKHRhZywgZGVzY3JpcHRpb24pO1xuICB9O1xuXG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGdldEludGVybmFsU3RhdGUodGhpcykudGFnO1xuICB9KTtcblxuICByZWRlZmluZSgkU3ltYm9sLCAnd2l0aG91dFNldHRlcicsIGZ1bmN0aW9uIChkZXNjcmlwdGlvbikge1xuICAgIHJldHVybiB3cmFwKHVpZChkZXNjcmlwdGlvbiksIGRlc2NyaXB0aW9uKTtcbiAgfSk7XG5cbiAgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZS5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3ZWxsS25vd25TeW1ib2wobmFtZSksIG5hbWUpO1xuICB9O1xuXG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLVN5bWJvbC1kZXNjcmlwdGlvblxuICAgIG5hdGl2ZURlZmluZVByb3BlcnR5KCRTeW1ib2xbUFJPVE9UWVBFXSwgJ2Rlc2NyaXB0aW9uJywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGdldEludGVybmFsU3RhdGUodGhpcykuZGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFJU19QVVJFKSB7XG4gICAgICByZWRlZmluZShPYmplY3RQcm90b3R5cGUsICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgeyB1bnNhZmU6IHRydWUgfSk7XG4gICAgfVxuICB9XG59XG5cbiQoeyBnbG9iYWw6IHRydWUsIHdyYXA6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wsIHNoYW06ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgU3ltYm9sOiAkU3ltYm9sXG59KTtcblxuJGZvckVhY2gob2JqZWN0S2V5cyhXZWxsS25vd25TeW1ib2xzU3RvcmUpLCBmdW5jdGlvbiAobmFtZSkge1xuICBkZWZpbmVXZWxsS25vd25TeW1ib2wobmFtZSk7XG59KTtcblxuJCh7IHRhcmdldDogU1lNQk9MLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgLy8gYFN5bWJvbC5mb3JgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN5bWJvbC5mb3JcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKGtleSk7XG4gICAgaWYgKGhhcyhTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5LCBzdHJpbmcpKSByZXR1cm4gU3RyaW5nVG9TeW1ib2xSZWdpc3RyeVtzdHJpbmddO1xuICAgIHZhciBzeW1ib2wgPSAkU3ltYm9sKHN0cmluZyk7XG4gICAgU3RyaW5nVG9TeW1ib2xSZWdpc3RyeVtzdHJpbmddID0gc3ltYm9sO1xuICAgIFN5bWJvbFRvU3RyaW5nUmVnaXN0cnlbc3ltYm9sXSA9IHN0cmluZztcbiAgICByZXR1cm4gc3ltYm9sO1xuICB9LFxuICAvLyBgU3ltYm9sLmtleUZvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLmtleWZvclxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCcpO1xuICAgIGlmIChoYXMoU3ltYm9sVG9TdHJpbmdSZWdpc3RyeSwgc3ltKSkgcmV0dXJuIFN5bWJvbFRvU3RyaW5nUmVnaXN0cnlbc3ltXTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IFVTRV9TRVRURVIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgVVNFX1NFVFRFUiA9IGZhbHNlOyB9XG59KTtcblxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIC8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yc1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Jcbn0pO1xuXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCB9LCB7XG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlzeW1ib2xzXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIENocm9tZSAzOCBhbmQgMzkgYE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNgIGZhaWxzIG9uIHByaW1pdGl2ZXNcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTM0NDNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IGZhaWxzKGZ1bmN0aW9uICgpIHsgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmYoMSk7IH0pIH0sIHtcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmYodG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG5cbi8vIGBKU09OLnN0cmluZ2lmeWAgbWV0aG9kIGJlaGF2aW9yIHdpdGggc3ltYm9sc1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1qc29uLnN0cmluZ2lmeVxuaWYgKCRzdHJpbmdpZnkpIHtcbiAgdmFyIEZPUkNFRF9KU09OX1NUUklOR0lGWSA9ICFOQVRJVkVfU1lNQk9MIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3ltYm9sID0gJFN5bWJvbCgpO1xuICAgIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gICAgcmV0dXJuICRzdHJpbmdpZnkoW3N5bWJvbF0pICE9ICdbbnVsbF0nXG4gICAgICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgICAgIHx8ICRzdHJpbmdpZnkoeyBhOiBzeW1ib2wgfSkgIT0gJ3t9J1xuICAgICAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgICAgIHx8ICRzdHJpbmdpZnkoT2JqZWN0KHN5bWJvbCkpICE9ICd7fSc7XG4gIH0pO1xuXG4gICQoeyB0YXJnZXQ6ICdKU09OJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRURfSlNPTl9TVFJJTkdJRlkgfSwge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0LCByZXBsYWNlciwgc3BhY2UpIHtcbiAgICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICAgIHZhciBpbmRleCA9IDE7XG4gICAgICB2YXIgJHJlcGxhY2VyO1xuICAgICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpbmRleCkgYXJncy5wdXNoKGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgICAkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgIH07XG4gICAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgICByZXR1cm4gJHN0cmluZ2lmeS5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUtQEB0b3ByaW1pdGl2ZVxuaWYgKCEkU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSkge1xuICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbn1cbi8vIGBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLUBAdG9zdHJpbmd0YWdcbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsIFNZTUJPTCk7XG5cbmhpZGRlbktleXNbSElEREVOXSA9IHRydWU7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdO1xuICB2YXIgQ29sbGVjdGlvblByb3RvdHlwZSA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgZm9yRWFjaCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcbiAgfVxufVxuIiwiLyohXG4qIHN3ZWV0YWxlcnQyIHYxMC4xNS4yXG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLlN3ZWV0YWxlcnQyID0gZmFjdG9yeSgpKTtcbn0odGhpcywgZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBfdHlwZW9mKG9iaik7XG4gIH1cblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgICB9O1xuICAgIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH1cblxuICBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgICAgby5fX3Byb3RvX18gPSBwO1xuICAgICAgcmV0dXJuIG87XG4gICAgfTtcblxuICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG4gIH1cblxuICBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgICB0cnkge1xuICAgICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICBpZiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgICAgaWYgKENsYXNzKSBfc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICAgIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICAgIHJldHVybiBjYWxsO1xuICAgIH1cblxuICAgIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHtcbiAgICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICAgIHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcbiAgICAgICAgICByZXN1bHQ7XG5cbiAgICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICAgIHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG5cbiAgICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgIG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICAgIF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgICB9IGVsc2Uge1xuICAgICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcblxuICAgICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbiAgfVxuXG4gIHZhciBjb25zb2xlUHJlZml4ID0gJ1N3ZWV0QWxlcnQyOic7XG4gIC8qKlxuICAgKiBGaWx0ZXIgdGhlIHVuaXF1ZSB2YWx1ZXMgaW50byBhIG5ldyBhcnJheVxuICAgKiBAcGFyYW0gYXJyXG4gICAqL1xuXG4gIHZhciB1bmlxdWVBcnJheSA9IGZ1bmN0aW9uIHVuaXF1ZUFycmF5KGFycikge1xuICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVzdWx0LmluZGV4T2YoYXJyW2ldKSA9PT0gLTEpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goYXJyW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICAvKipcbiAgICogQ2FwaXRhbGl6ZSB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgc3RyaW5nXG4gICAqIEBwYXJhbSBzdHJcbiAgICovXG5cbiAgdmFyIGNhcGl0YWxpemVGaXJzdExldHRlciA9IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICB9O1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXJyYXkgb2Ygb2JqZWN0IHZhbHVlcyAoT2JqZWN0LnZhbHVlcyBpc24ndCBzdXBwb3J0ZWQgaW4gSUUxMSlcbiAgICogQHBhcmFtIG9ialxuICAgKi9cblxuICB2YXIgb2JqZWN0VmFsdWVzID0gZnVuY3Rpb24gb2JqZWN0VmFsdWVzKG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gb2JqW2tleV07XG4gICAgfSk7XG4gIH07XG4gIC8qKlxuICAgKiBDb252ZXJ0IE5vZGVMaXN0IHRvIEFycmF5XG4gICAqIEBwYXJhbSBub2RlTGlzdFxuICAgKi9cblxuICB2YXIgdG9BcnJheSA9IGZ1bmN0aW9uIHRvQXJyYXkobm9kZUxpc3QpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZUxpc3QpO1xuICB9O1xuICAvKipcbiAgICogU3RhbmRhcmRpc2UgY29uc29sZSB3YXJuaW5nc1xuICAgKiBAcGFyYW0gbWVzc2FnZVxuICAgKi9cblxuICB2YXIgd2FybiA9IGZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICAgIGNvbnNvbGUud2FybihcIlwiLmNvbmNhdChjb25zb2xlUHJlZml4LCBcIiBcIikuY29uY2F0KF90eXBlb2YobWVzc2FnZSkgPT09ICdvYmplY3QnID8gbWVzc2FnZS5qb2luKCcgJykgOiBtZXNzYWdlKSk7XG4gIH07XG4gIC8qKlxuICAgKiBTdGFuZGFyZGlzZSBjb25zb2xlIGVycm9yc1xuICAgKiBAcGFyYW0gbWVzc2FnZVxuICAgKi9cblxuICB2YXIgZXJyb3IgPSBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlwiLmNvbmNhdChjb25zb2xlUHJlZml4LCBcIiBcIikuY29uY2F0KG1lc3NhZ2UpKTtcbiAgfTtcbiAgLyoqXG4gICAqIFByaXZhdGUgZ2xvYmFsIHN0YXRlIGZvciBgd2Fybk9uY2VgXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICogQHByaXZhdGVcbiAgICovXG5cbiAgdmFyIHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcyA9IFtdO1xuICAvKipcbiAgICogU2hvdyBhIGNvbnNvbGUgd2FybmluZywgYnV0IG9ubHkgaWYgaXQgaGFzbid0IGFscmVhZHkgYmVlbiBzaG93blxuICAgKiBAcGFyYW0gbWVzc2FnZVxuICAgKi9cblxuICB2YXIgd2Fybk9uY2UgPSBmdW5jdGlvbiB3YXJuT25jZShtZXNzYWdlKSB7XG4gICAgaWYgKCEocHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSkgIT09IC0xKSkge1xuICAgICAgcHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgICB3YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFNob3cgYSBvbmUtdGltZSBjb25zb2xlIHdhcm5pbmcgYWJvdXQgZGVwcmVjYXRlZCBwYXJhbXMvbWV0aG9kc1xuICAgKi9cblxuICB2YXIgd2FybkFib3V0RGVwcmVjYXRpb24gPSBmdW5jdGlvbiB3YXJuQWJvdXREZXByZWNhdGlvbihkZXByZWNhdGVkUGFyYW0sIHVzZUluc3RlYWQpIHtcbiAgICB3YXJuT25jZShcIlxcXCJcIi5jb25jYXQoZGVwcmVjYXRlZFBhcmFtLCBcIlxcXCIgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuIFBsZWFzZSB1c2UgXFxcIlwiKS5jb25jYXQodXNlSW5zdGVhZCwgXCJcXFwiIGluc3RlYWQuXCIpKTtcbiAgfTtcbiAgLyoqXG4gICAqIElmIGBhcmdgIGlzIGEgZnVuY3Rpb24sIGNhbGwgaXQgKHdpdGggbm8gYXJndW1lbnRzIG9yIGNvbnRleHQpIGFuZCByZXR1cm4gdGhlIHJlc3VsdC5cbiAgICogT3RoZXJ3aXNlLCBqdXN0IHBhc3MgdGhlIHZhbHVlIHRocm91Z2hcbiAgICogQHBhcmFtIGFyZ1xuICAgKi9cblxuICB2YXIgY2FsbElmRnVuY3Rpb24gPSBmdW5jdGlvbiBjYWxsSWZGdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJyA/IGFyZygpIDogYXJnO1xuICB9O1xuICB2YXIgaGFzVG9Qcm9taXNlRm4gPSBmdW5jdGlvbiBoYXNUb1Byb21pc2VGbihhcmcpIHtcbiAgICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcudG9Qcm9taXNlID09PSAnZnVuY3Rpb24nO1xuICB9O1xuICB2YXIgYXNQcm9taXNlID0gZnVuY3Rpb24gYXNQcm9taXNlKGFyZykge1xuICAgIHJldHVybiBoYXNUb1Byb21pc2VGbihhcmcpID8gYXJnLnRvUHJvbWlzZSgpIDogUHJvbWlzZS5yZXNvbHZlKGFyZyk7XG4gIH07XG4gIHZhciBpc1Byb21pc2UgPSBmdW5jdGlvbiBpc1Byb21pc2UoYXJnKSB7XG4gICAgcmV0dXJuIGFyZyAmJiBQcm9taXNlLnJlc29sdmUoYXJnKSA9PT0gYXJnO1xuICB9O1xuXG4gIHZhciBEaXNtaXNzUmVhc29uID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgY2FuY2VsOiAnY2FuY2VsJyxcbiAgICBiYWNrZHJvcDogJ2JhY2tkcm9wJyxcbiAgICBjbG9zZTogJ2Nsb3NlJyxcbiAgICBlc2M6ICdlc2MnLFxuICAgIHRpbWVyOiAndGltZXInXG4gIH0pO1xuXG4gIHZhciBpc0pxdWVyeUVsZW1lbnQgPSBmdW5jdGlvbiBpc0pxdWVyeUVsZW1lbnQoZWxlbSkge1xuICAgIHJldHVybiBfdHlwZW9mKGVsZW0pID09PSAnb2JqZWN0JyAmJiBlbGVtLmpxdWVyeTtcbiAgfTtcblxuICB2YXIgaXNFbGVtZW50ID0gZnVuY3Rpb24gaXNFbGVtZW50KGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbSBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgaXNKcXVlcnlFbGVtZW50KGVsZW0pO1xuICB9O1xuXG4gIHZhciBhcmdzVG9QYXJhbXMgPSBmdW5jdGlvbiBhcmdzVG9QYXJhbXMoYXJncykge1xuICAgIHZhciBwYXJhbXMgPSB7fTtcblxuICAgIGlmIChfdHlwZW9mKGFyZ3NbMF0pID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50KGFyZ3NbMF0pKSB7XG4gICAgICBfZXh0ZW5kcyhwYXJhbXMsIGFyZ3NbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBbJ3RpdGxlJywgJ2h0bWwnLCAnaWNvbiddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUsIGluZGV4KSB7XG4gICAgICAgIHZhciBhcmcgPSBhcmdzW2luZGV4XTtcblxuICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHwgaXNFbGVtZW50KGFyZykpIHtcbiAgICAgICAgICBwYXJhbXNbbmFtZV0gPSBhcmc7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBcIi5jb25jYXQobmFtZSwgXCIhIEV4cGVjdGVkIFxcXCJzdHJpbmdcXFwiIG9yIFxcXCJFbGVtZW50XFxcIiwgZ290IFwiKS5jb25jYXQoX3R5cGVvZihhcmcpKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH07XG5cbiAgdmFyIHN3YWxQcmVmaXggPSAnc3dhbDItJztcbiAgdmFyIHByZWZpeCA9IGZ1bmN0aW9uIHByZWZpeChpdGVtcykge1xuICAgIHZhciByZXN1bHQgPSB7fTtcblxuICAgIGZvciAodmFyIGkgaW4gaXRlbXMpIHtcbiAgICAgIHJlc3VsdFtpdGVtc1tpXV0gPSBzd2FsUHJlZml4ICsgaXRlbXNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgdmFyIHN3YWxDbGFzc2VzID0gcHJlZml4KFsnY29udGFpbmVyJywgJ3Nob3duJywgJ2hlaWdodC1hdXRvJywgJ2lvc2ZpeCcsICdwb3B1cCcsICdtb2RhbCcsICduby1iYWNrZHJvcCcsICduby10cmFuc2l0aW9uJywgJ3RvYXN0JywgJ3RvYXN0LXNob3duJywgJ3RvYXN0LWNvbHVtbicsICdzaG93JywgJ2hpZGUnLCAnY2xvc2UnLCAndGl0bGUnLCAnaGVhZGVyJywgJ2NvbnRlbnQnLCAnaHRtbC1jb250YWluZXInLCAnYWN0aW9ucycsICdjb25maXJtJywgJ2RlbnknLCAnY2FuY2VsJywgJ2Zvb3RlcicsICdpY29uJywgJ2ljb24tY29udGVudCcsICdpbWFnZScsICdpbnB1dCcsICdmaWxlJywgJ3JhbmdlJywgJ3NlbGVjdCcsICdyYWRpbycsICdjaGVja2JveCcsICdsYWJlbCcsICd0ZXh0YXJlYScsICdpbnB1dGVycm9yJywgJ2lucHV0LWxhYmVsJywgJ3ZhbGlkYXRpb24tbWVzc2FnZScsICdwcm9ncmVzcy1zdGVwcycsICdhY3RpdmUtcHJvZ3Jlc3Mtc3RlcCcsICdwcm9ncmVzcy1zdGVwJywgJ3Byb2dyZXNzLXN0ZXAtbGluZScsICdsb2FkZXInLCAnbG9hZGluZycsICdzdHlsZWQnLCAndG9wJywgJ3RvcC1zdGFydCcsICd0b3AtZW5kJywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCcsICdjZW50ZXInLCAnY2VudGVyLXN0YXJ0JywgJ2NlbnRlci1lbmQnLCAnY2VudGVyLWxlZnQnLCAnY2VudGVyLXJpZ2h0JywgJ2JvdHRvbScsICdib3R0b20tc3RhcnQnLCAnYm90dG9tLWVuZCcsICdib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAnZ3Jvdy1yb3cnLCAnZ3Jvdy1jb2x1bW4nLCAnZ3Jvdy1mdWxsc2NyZWVuJywgJ3J0bCcsICd0aW1lci1wcm9ncmVzcy1iYXInLCAndGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lcicsICdzY3JvbGxiYXItbWVhc3VyZScsICdpY29uLXN1Y2Nlc3MnLCAnaWNvbi13YXJuaW5nJywgJ2ljb24taW5mbycsICdpY29uLXF1ZXN0aW9uJywgJ2ljb24tZXJyb3InXSk7XG4gIHZhciBpY29uVHlwZXMgPSBwcmVmaXgoWydzdWNjZXNzJywgJ3dhcm5pbmcnLCAnaW5mbycsICdxdWVzdGlvbicsICdlcnJvciddKTtcblxuICB2YXIgZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gZ2V0Q29udGFpbmVyKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmNvbnRhaW5lcikpO1xuICB9O1xuICB2YXIgZWxlbWVudEJ5U2VsZWN0b3IgPSBmdW5jdGlvbiBlbGVtZW50QnlTZWxlY3RvcihzZWxlY3RvclN0cmluZykge1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICByZXR1cm4gY29udGFpbmVyID8gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JTdHJpbmcpIDogbnVsbDtcbiAgfTtcblxuICB2YXIgZWxlbWVudEJ5Q2xhc3MgPSBmdW5jdGlvbiBlbGVtZW50QnlDbGFzcyhjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KGNsYXNzTmFtZSkpO1xuICB9O1xuXG4gIHZhciBnZXRQb3B1cCA9IGZ1bmN0aW9uIGdldFBvcHVwKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5wb3B1cCk7XG4gIH07XG4gIHZhciBnZXRJY29ucyA9IGZ1bmN0aW9uIGdldEljb25zKCkge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgcmV0dXJuIHRvQXJyYXkocG9wdXAucXVlcnlTZWxlY3RvckFsbChcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuaWNvbikpKTtcbiAgfTtcbiAgdmFyIGdldEljb24gPSBmdW5jdGlvbiBnZXRJY29uKCkge1xuICAgIHZhciB2aXNpYmxlSWNvbiA9IGdldEljb25zKCkuZmlsdGVyKGZ1bmN0aW9uIChpY29uKSB7XG4gICAgICByZXR1cm4gaWNvbi5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZSc7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZpc2libGVJY29uLmxlbmd0aCA/IHZpc2libGVJY29uWzBdIDogbnVsbDtcbiAgfTtcbiAgdmFyIGdldFRpdGxlID0gZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLnRpdGxlKTtcbiAgfTtcbiAgdmFyIGdldENvbnRlbnQgPSBmdW5jdGlvbiBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jb250ZW50KTtcbiAgfTtcbiAgdmFyIGdldEh0bWxDb250YWluZXIgPSBmdW5jdGlvbiBnZXRIdG1sQ29udGFpbmVyKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1snaHRtbC1jb250YWluZXInXSk7XG4gIH07XG4gIHZhciBnZXRJbWFnZSA9IGZ1bmN0aW9uIGdldEltYWdlKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5pbWFnZSk7XG4gIH07XG4gIHZhciBnZXRQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NTdGVwcygpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXBzJ10pO1xuICB9O1xuICB2YXIgZ2V0VmFsaWRhdGlvbk1lc3NhZ2UgPSBmdW5jdGlvbiBnZXRWYWxpZGF0aW9uTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddKTtcbiAgfTtcbiAgdmFyIGdldENvbmZpcm1CdXR0b24gPSBmdW5jdGlvbiBnZXRDb25maXJtQnV0dG9uKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuYWN0aW9ucywgXCIgLlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29uZmlybSkpO1xuICB9O1xuICB2YXIgZ2V0RGVueUJ1dHRvbiA9IGZ1bmN0aW9uIGdldERlbnlCdXR0b24oKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5hY3Rpb25zLCBcIiAuXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5kZW55KSk7XG4gIH07XG4gIHZhciBnZXRJbnB1dExhYmVsID0gZnVuY3Rpb24gZ2V0SW5wdXRMYWJlbCgpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ2lucHV0LWxhYmVsJ10pO1xuICB9O1xuICB2YXIgZ2V0TG9hZGVyID0gZnVuY3Rpb24gZ2V0TG9hZGVyKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMubG9hZGVyKSk7XG4gIH07XG4gIHZhciBnZXRDYW5jZWxCdXR0b24gPSBmdW5jdGlvbiBnZXRDYW5jZWxCdXR0b24oKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5hY3Rpb25zLCBcIiAuXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jYW5jZWwpKTtcbiAgfTtcbiAgdmFyIGdldEFjdGlvbnMgPSBmdW5jdGlvbiBnZXRBY3Rpb25zKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5hY3Rpb25zKTtcbiAgfTtcbiAgdmFyIGdldEhlYWRlciA9IGZ1bmN0aW9uIGdldEhlYWRlcigpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuaGVhZGVyKTtcbiAgfTtcbiAgdmFyIGdldEZvb3RlciA9IGZ1bmN0aW9uIGdldEZvb3RlcigpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuZm9vdGVyKTtcbiAgfTtcbiAgdmFyIGdldFRpbWVyUHJvZ3Jlc3NCYXIgPSBmdW5jdGlvbiBnZXRUaW1lclByb2dyZXNzQmFyKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1sndGltZXItcHJvZ3Jlc3MtYmFyJ10pO1xuICB9O1xuICB2YXIgZ2V0Q2xvc2VCdXR0b24gPSBmdW5jdGlvbiBnZXRDbG9zZUJ1dHRvbigpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY2xvc2UpO1xuICB9OyAvLyBodHRwczovL2dpdGh1Yi5jb20vamt1cC9mb2N1c2FibGUvYmxvYi9tYXN0ZXIvaW5kZXguanNcblxuICB2YXIgZm9jdXNhYmxlID0gXCJcXG4gIGFbaHJlZl0sXFxuICBhcmVhW2hyZWZdLFxcbiAgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLFxcbiAgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSxcXG4gIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSxcXG4gIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksXFxuICBpZnJhbWUsXFxuICBvYmplY3QsXFxuICBlbWJlZCxcXG4gIFt0YWJpbmRleD1cXFwiMFxcXCJdLFxcbiAgW2NvbnRlbnRlZGl0YWJsZV0sXFxuICBhdWRpb1tjb250cm9sc10sXFxuICB2aWRlb1tjb250cm9sc10sXFxuICBzdW1tYXJ5XFxuXCI7XG4gIHZhciBnZXRGb2N1c2FibGVFbGVtZW50cyA9IGZ1bmN0aW9uIGdldEZvY3VzYWJsZUVsZW1lbnRzKCkge1xuICAgIHZhciBmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleCA9IHRvQXJyYXkoZ2V0UG9wdXAoKS5xdWVyeVNlbGVjdG9yQWxsKCdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSk6bm90KFt0YWJpbmRleD1cIjBcIl0pJykpIC8vIHNvcnQgYWNjb3JkaW5nIHRvIHRhYmluZGV4XG4gICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGEgPSBwYXJzZUludChhLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSk7XG4gICAgICBiID0gcGFyc2VJbnQoYi5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpO1xuXG4gICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9IGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gICAgdmFyIG90aGVyRm9jdXNhYmxlRWxlbWVudHMgPSB0b0FycmF5KGdldFBvcHVwKCkucXVlcnlTZWxlY3RvckFsbChmb2N1c2FibGUpKS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpICE9PSAnLTEnO1xuICAgIH0pO1xuICAgIHJldHVybiB1bmlxdWVBcnJheShmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleC5jb25jYXQob3RoZXJGb2N1c2FibGVFbGVtZW50cykpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiBpc1Zpc2libGUoZWwpO1xuICAgIH0pO1xuICB9O1xuICB2YXIgaXNNb2RhbCA9IGZ1bmN0aW9uIGlzTW9kYWwoKSB7XG4gICAgcmV0dXJuICFpc1RvYXN0KCkgJiYgIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKTtcbiAgfTtcbiAgdmFyIGlzVG9hc3QgPSBmdW5jdGlvbiBpc1RvYXN0KCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSk7XG4gIH07XG4gIHZhciBpc0xvYWRpbmcgPSBmdW5jdGlvbiBpc0xvYWRpbmcoKSB7XG4gICAgcmV0dXJuIGdldFBvcHVwKCkuaGFzQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgfTtcblxuICB2YXIgc3RhdGVzID0ge1xuICAgIHByZXZpb3VzQm9keVBhZGRpbmc6IG51bGxcbiAgfTtcbiAgdmFyIHNldElubmVySHRtbCA9IGZ1bmN0aW9uIHNldElubmVySHRtbChlbGVtLCBodG1sKSB7XG4gICAgLy8gIzE5MjZcbiAgICBlbGVtLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBpZiAoaHRtbCkge1xuICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgIHZhciBwYXJzZWQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuICAgICAgdG9BcnJheShwYXJzZWQucXVlcnlTZWxlY3RvcignaGVhZCcpLmNoaWxkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgICB0b0FycmF5KHBhcnNlZC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2hpbGROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIHZhciBoYXNDbGFzcyA9IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICAgIGlmICghY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzTGlzdCA9IGNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NMaXN0W2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgdmFyIHJlbW92ZUN1c3RvbUNsYXNzZXMgPSBmdW5jdGlvbiByZW1vdmVDdXN0b21DbGFzc2VzKGVsZW0sIHBhcmFtcykge1xuICAgIHRvQXJyYXkoZWxlbS5jbGFzc0xpc3QpLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgaWYgKCEob2JqZWN0VmFsdWVzKHN3YWxDbGFzc2VzKS5pbmRleE9mKGNsYXNzTmFtZSkgIT09IC0xKSAmJiAhKG9iamVjdFZhbHVlcyhpY29uVHlwZXMpLmluZGV4T2YoY2xhc3NOYW1lKSAhPT0gLTEpICYmICEob2JqZWN0VmFsdWVzKHBhcmFtcy5zaG93Q2xhc3MpLmluZGV4T2YoY2xhc3NOYW1lKSAhPT0gLTEpKSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBhcHBseUN1c3RvbUNsYXNzID0gZnVuY3Rpb24gYXBwbHlDdXN0b21DbGFzcyhlbGVtLCBwYXJhbXMsIGNsYXNzTmFtZSkge1xuICAgIHJlbW92ZUN1c3RvbUNsYXNzZXMoZWxlbSwgcGFyYW1zKTtcblxuICAgIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MgJiYgcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV0pIHtcbiAgICAgIGlmICh0eXBlb2YgcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV0gIT09ICdzdHJpbmcnICYmICFwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXS5mb3JFYWNoKSB7XG4gICAgICAgIHJldHVybiB3YXJuKFwiSW52YWxpZCB0eXBlIG9mIGN1c3RvbUNsYXNzLlwiLmNvbmNhdChjbGFzc05hbWUsIFwiISBFeHBlY3RlZCBzdHJpbmcgb3IgaXRlcmFibGUgb2JqZWN0LCBnb3QgXFxcIlwiKS5jb25jYXQoX3R5cGVvZihwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXSksIFwiXFxcIlwiKSk7XG4gICAgICB9XG5cbiAgICAgIGFkZENsYXNzKGVsZW0sIHBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdKTtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIGdldElucHV0KGNvbnRlbnQsIGlucHV0VHlwZSkge1xuICAgIGlmICghaW5wdXRUeXBlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGlucHV0VHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICByZXR1cm4gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzW2lucHV0VHlwZV0pO1xuXG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIHJldHVybiBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmNoZWNrYm94LCBcIiBpbnB1dFwiKSk7XG5cbiAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFkaW8sIFwiIGlucHV0OmNoZWNrZWRcIikpIHx8IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFkaW8sIFwiIGlucHV0OmZpcnN0LWNoaWxkXCIpKTtcblxuICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICByZXR1cm4gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCIgaW5wdXRcIikpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLmlucHV0KTtcbiAgICB9XG4gIH1cbiAgdmFyIGZvY3VzSW5wdXQgPSBmdW5jdGlvbiBmb2N1c0lucHV0KGlucHV0KSB7XG4gICAgaW5wdXQuZm9jdXMoKTsgLy8gcGxhY2UgY3Vyc29yIGF0IGVuZCBvZiB0ZXh0IGluIHRleHQgaW5wdXRcblxuICAgIGlmIChpbnB1dC50eXBlICE9PSAnZmlsZScpIHtcbiAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIzNDU5MTVcbiAgICAgIHZhciB2YWwgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICBpbnB1dC52YWx1ZSA9IHZhbDtcbiAgICB9XG4gIH07XG4gIHZhciB0b2dnbGVDbGFzcyA9IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0LCBjb25kaXRpb24pIHtcbiAgICBpZiAoIXRhcmdldCB8fCAhY2xhc3NMaXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjbGFzc0xpc3QgPSBjbGFzc0xpc3Quc3BsaXQoL1xccysvKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgfVxuXG4gICAgY2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgaWYgKHRhcmdldC5mb3JFYWNoKSB7XG4gICAgICAgIHRhcmdldC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgY29uZGl0aW9uID8gZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25kaXRpb24gPyB0YXJnZXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgdmFyIGFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QpIHtcbiAgICB0b2dnbGVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgdHJ1ZSk7XG4gIH07XG4gIHZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0KSB7XG4gICAgdG9nZ2xlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIGZhbHNlKTtcbiAgfTtcbiAgdmFyIGdldENoaWxkQnlDbGFzcyA9IGZ1bmN0aW9uIGdldENoaWxkQnlDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGhhc0NsYXNzKGVsZW0uY2hpbGROb2Rlc1tpXSwgY2xhc3NOYW1lKSkge1xuICAgICAgICByZXR1cm4gZWxlbS5jaGlsZE5vZGVzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgdmFyIGFwcGx5TnVtZXJpY2FsU3R5bGUgPSBmdW5jdGlvbiBhcHBseU51bWVyaWNhbFN0eWxlKGVsZW0sIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gXCJcIi5jb25jYXQocGFyc2VJbnQodmFsdWUpKSkge1xuICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlIHx8IHBhcnNlSW50KHZhbHVlKSA9PT0gMCkge1xuICAgICAgZWxlbS5zdHlsZVtwcm9wZXJ0eV0gPSB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gXCJcIi5jb25jYXQodmFsdWUsIFwicHhcIikgOiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gICAgfVxuICB9O1xuICB2YXIgc2hvdyA9IGZ1bmN0aW9uIHNob3coZWxlbSkge1xuICAgIHZhciBkaXNwbGF5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnZmxleCc7XG4gICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgfTtcbiAgdmFyIGhpZGUgPSBmdW5jdGlvbiBoaWRlKGVsZW0pIHtcbiAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG4gIHZhciBzZXRTdHlsZSA9IGZ1bmN0aW9uIHNldFN0eWxlKHBhcmVudCwgc2VsZWN0b3IsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIHZhciBlbCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIGlmIChlbCkge1xuICAgICAgZWwuc3R5bGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfVxuICB9O1xuICB2YXIgdG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGVsZW0sIGNvbmRpdGlvbiwgZGlzcGxheSkge1xuICAgIGNvbmRpdGlvbiA/IHNob3coZWxlbSwgZGlzcGxheSkgOiBoaWRlKGVsZW0pO1xuICB9OyAvLyBib3Jyb3dlZCBmcm9tIGpxdWVyeSAkKGVsZW0pLmlzKCc6dmlzaWJsZScpIGltcGxlbWVudGF0aW9uXG5cbiAgdmFyIGlzVmlzaWJsZSA9IGZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtKSB7XG4gICAgcmV0dXJuICEhKGVsZW0gJiYgKGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkpO1xuICB9O1xuICB2YXIgYWxsQnV0dG9uc0FyZUhpZGRlbiA9IGZ1bmN0aW9uIGFsbEJ1dHRvbnNBcmVIaWRkZW4oKSB7XG4gICAgcmV0dXJuICFpc1Zpc2libGUoZ2V0Q29uZmlybUJ1dHRvbigpKSAmJiAhaXNWaXNpYmxlKGdldERlbnlCdXR0b24oKSkgJiYgIWlzVmlzaWJsZShnZXRDYW5jZWxCdXR0b24oKSk7XG4gIH07XG4gIHZhciBpc1Njcm9sbGFibGUgPSBmdW5jdGlvbiBpc1Njcm9sbGFibGUoZWxlbSkge1xuICAgIHJldHVybiAhIShlbGVtLnNjcm9sbEhlaWdodCA+IGVsZW0uY2xpZW50SGVpZ2h0KTtcbiAgfTsgLy8gYm9ycm93ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDYzNTIxMTlcblxuICB2YXIgaGFzQ3NzQW5pbWF0aW9uID0gZnVuY3Rpb24gaGFzQ3NzQW5pbWF0aW9uKGVsZW0pIHtcbiAgICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcbiAgICB2YXIgYW5pbUR1cmF0aW9uID0gcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdhbmltYXRpb24tZHVyYXRpb24nKSB8fCAnMCcpO1xuICAgIHZhciB0cmFuc0R1cmF0aW9uID0gcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2l0aW9uLWR1cmF0aW9uJykgfHwgJzAnKTtcbiAgICByZXR1cm4gYW5pbUR1cmF0aW9uID4gMCB8fCB0cmFuc0R1cmF0aW9uID4gMDtcbiAgfTtcbiAgdmFyIGNvbnRhaW5zID0gZnVuY3Rpb24gY29udGFpbnMoaGF5c3RhY2ssIG5lZWRsZSkge1xuICAgIGlmICh0eXBlb2YgaGF5c3RhY2suY29udGFpbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBoYXlzdGFjay5jb250YWlucyhuZWVkbGUpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGFuaW1hdGVUaW1lclByb2dyZXNzQmFyID0gZnVuY3Rpb24gYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIodGltZXIpIHtcbiAgICB2YXIgcmVzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgIHZhciB0aW1lclByb2dyZXNzQmFyID0gZ2V0VGltZXJQcm9ncmVzc0JhcigpO1xuXG4gICAgaWYgKGlzVmlzaWJsZSh0aW1lclByb2dyZXNzQmFyKSkge1xuICAgICAgaWYgKHJlc2V0KSB7XG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUudHJhbnNpdGlvbiA9IFwid2lkdGggXCIuY29uY2F0KHRpbWVyIC8gMTAwMCwgXCJzIGxpbmVhclwiKTtcbiAgICAgICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9ICcwJSc7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9O1xuICB2YXIgc3RvcFRpbWVyUHJvZ3Jlc3NCYXIgPSBmdW5jdGlvbiBzdG9wVGltZXJQcm9ncmVzc0JhcigpIHtcbiAgICB2YXIgdGltZXJQcm9ncmVzc0JhciA9IGdldFRpbWVyUHJvZ3Jlc3NCYXIoKTtcbiAgICB2YXIgdGltZXJQcm9ncmVzc0JhcldpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGltZXJQcm9ncmVzc0Jhcikud2lkdGgpO1xuICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24nKTtcbiAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIHZhciB0aW1lclByb2dyZXNzQmFyRnVsbFdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGltZXJQcm9ncmVzc0Jhcikud2lkdGgpO1xuICAgIHZhciB0aW1lclByb2dyZXNzQmFyUGVyY2VudCA9IHBhcnNlSW50KHRpbWVyUHJvZ3Jlc3NCYXJXaWR0aCAvIHRpbWVyUHJvZ3Jlc3NCYXJGdWxsV2lkdGggKiAxMDApO1xuICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24nKTtcbiAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gXCJcIi5jb25jYXQodGltZXJQcm9ncmVzc0JhclBlcmNlbnQsIFwiJVwiKTtcbiAgfTtcblxuICAvLyBEZXRlY3QgTm9kZSBlbnZcbiAgdmFyIGlzTm9kZUVudiA9IGZ1bmN0aW9uIGlzTm9kZUVudigpIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJztcbiAgfTtcblxuICB2YXIgc3dlZXRIVE1MID0gXCJcXG4gPGRpdiBhcmlhLWxhYmVsbGVkYnk9XFxcIlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy50aXRsZSwgXCJcXFwiIGFyaWEtZGVzY3JpYmVkYnk9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29udGVudCwgXCJcXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnBvcHVwLCBcIlxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmhlYWRlciwgXCJcXFwiPlxcbiAgICAgPHVsIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwcyddLCBcIlxcXCI+PC91bD5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIgXCIpLmNvbmNhdChpY29uVHlwZXMuZXJyb3IsIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIgXCIpLmNvbmNhdChpY29uVHlwZXMucXVlc3Rpb24sIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIgXCIpLmNvbmNhdChpY29uVHlwZXMud2FybmluZywgXCJcXFwiPjwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIiBcIikuY29uY2F0KGljb25UeXBlcy5pbmZvLCBcIlxcXCI+PC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLnN1Y2Nlc3MsIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxpbWcgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaW1hZ2UsIFwiXFxcIiAvPlxcbiAgICAgPGgyIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnRpdGxlLCBcIlxcXCIgaWQ9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudGl0bGUsIFwiXFxcIj48L2gyPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNsb3NlLCBcIlxcXCI+PC9idXR0b24+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250ZW50LCBcIlxcXCI+XFxuICAgICA8ZGl2IGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNvbnRlbnQsIFwiXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1snaHRtbC1jb250YWluZXInXSwgXCJcXFwiPjwvZGl2PlxcbiAgICAgPGlucHV0IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmlucHV0LCBcIlxcXCIgLz5cXG4gICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5maWxlLCBcIlxcXCIgLz5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiXFxcIj5cXG4gICAgICAgPGlucHV0IHR5cGU9XFxcInJhbmdlXFxcIiAvPlxcbiAgICAgICA8b3V0cHV0Pjwvb3V0cHV0PlxcbiAgICAgPC9kaXY+XFxuICAgICA8c2VsZWN0IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnNlbGVjdCwgXCJcXFwiPjwvc2VsZWN0PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYWRpbywgXCJcXFwiPjwvZGl2PlxcbiAgICAgPGxhYmVsIGZvcj1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCJcXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNoZWNrYm94LCBcIlxcXCI+XFxuICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz5cXG4gICAgICAgPHNwYW4gY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMubGFiZWwsIFwiXFxcIj48L3NwYW4+XFxuICAgICA8L2xhYmVsPlxcbiAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnRleHRhcmVhLCBcIlxcXCI+PC90ZXh0YXJlYT5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddLCBcIlxcXCIgaWQ9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddLCBcIlxcXCI+PC9kaXY+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5hY3Rpb25zLCBcIlxcXCI+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmxvYWRlciwgXCJcXFwiPjwvZGl2PlxcbiAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNvbmZpcm0sIFwiXFxcIj48L2J1dHRvbj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5kZW55LCBcIlxcXCI+PC9idXR0b24+XFxuICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2FuY2VsLCBcIlxcXCI+PC9idXR0b24+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5mb290ZXIsIFwiXFxcIj48L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWyd0aW1lci1wcm9ncmVzcy1iYXItY29udGFpbmVyJ10sIFwiXFxcIj5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ3RpbWVyLXByb2dyZXNzLWJhciddLCBcIlxcXCI+PC9kaXY+XFxuICAgPC9kaXY+XFxuIDwvZGl2PlxcblwiKS5yZXBsYWNlKC8oXnxcXG4pXFxzKi9nLCAnJyk7XG5cbiAgdmFyIHJlc2V0T2xkQ29udGFpbmVyID0gZnVuY3Rpb24gcmVzZXRPbGRDb250YWluZXIoKSB7XG4gICAgdmFyIG9sZENvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuXG4gICAgaWYgKCFvbGRDb250YWluZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvbGRDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvbGRDb250YWluZXIpO1xuICAgIHJlbW92ZUNsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBbc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddLCBzd2FsQ2xhc3Nlc1snaGFzLWNvbHVtbiddXSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgdmFyIG9sZElucHV0VmFsOyAvLyBJRTExIHdvcmthcm91bmQsIHNlZSAjMTEwOSBmb3IgZGV0YWlsc1xuXG4gIHZhciByZXNldFZhbGlkYXRpb25NZXNzYWdlID0gZnVuY3Rpb24gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZShlKSB7XG4gICAgaWYgKFN3YWwuaXNWaXNpYmxlKCkgJiYgb2xkSW5wdXRWYWwgIT09IGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICBTd2FsLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcbiAgICB9XG5cbiAgICBvbGRJbnB1dFZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICB9O1xuXG4gIHZhciBhZGRJbnB1dENoYW5nZUxpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZElucHV0Q2hhbmdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xuICAgIHZhciBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gICAgdmFyIGZpbGUgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuZmlsZSk7XG4gICAgdmFyIHJhbmdlID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCIgaW5wdXRcIikpO1xuICAgIHZhciByYW5nZU91dHB1dCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiIG91dHB1dFwiKSk7XG4gICAgdmFyIHNlbGVjdCA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5zZWxlY3QpO1xuICAgIHZhciBjaGVja2JveCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiIGlucHV0XCIpKTtcbiAgICB2YXIgdGV4dGFyZWEgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMudGV4dGFyZWEpO1xuICAgIGlucHV0Lm9uaW5wdXQgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGZpbGUub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICAgIHNlbGVjdC5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgY2hlY2tib3gub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICAgIHRleHRhcmVhLm9uaW5wdXQgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuXG4gICAgcmFuZ2Uub25pbnB1dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXNldFZhbGlkYXRpb25NZXNzYWdlKGUpO1xuICAgICAgcmFuZ2VPdXRwdXQudmFsdWUgPSByYW5nZS52YWx1ZTtcbiAgICB9O1xuXG4gICAgcmFuZ2Uub25jaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZShlKTtcbiAgICAgIHJhbmdlLm5leHRTaWJsaW5nLnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICAgIHJldHVybiB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldDtcbiAgfTtcblxuICB2YXIgc2V0dXBBY2Nlc3NpYmlsaXR5ID0gZnVuY3Rpb24gc2V0dXBBY2Nlc3NpYmlsaXR5KHBhcmFtcykge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdyb2xlJywgcGFyYW1zLnRvYXN0ID8gJ2FsZXJ0JyA6ICdkaWFsb2cnKTtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsIHBhcmFtcy50b2FzdCA/ICdwb2xpdGUnIDogJ2Fzc2VydGl2ZScpO1xuXG4gICAgaWYgKCFwYXJhbXMudG9hc3QpIHtcbiAgICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsICd0cnVlJyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBzZXR1cFJUTCA9IGZ1bmN0aW9uIHNldHVwUlRMKHRhcmdldEVsZW1lbnQpIHtcbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0RWxlbWVudCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgICAgYWRkQ2xhc3MoZ2V0Q29udGFpbmVyKCksIHN3YWxDbGFzc2VzLnJ0bCk7XG4gICAgfVxuICB9O1xuICAvKlxuICAgKiBBZGQgbW9kYWwgKyBiYWNrZHJvcCB0byBET01cbiAgICovXG5cblxuICB2YXIgaW5pdCA9IGZ1bmN0aW9uIGluaXQocGFyYW1zKSB7XG4gICAgLy8gQ2xlYW4gdXAgdGhlIG9sZCBwb3B1cCBjb250YWluZXIgaWYgaXQgZXhpc3RzXG4gICAgdmFyIG9sZENvbnRhaW5lckV4aXN0ZWQgPSByZXNldE9sZENvbnRhaW5lcigpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuXG4gICAgaWYgKGlzTm9kZUVudigpKSB7XG4gICAgICBlcnJvcignU3dlZXRBbGVydDIgcmVxdWlyZXMgZG9jdW1lbnQgdG8gaW5pdGlhbGl6ZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuY29udGFpbmVyO1xuXG4gICAgaWYgKG9sZENvbnRhaW5lckV4aXN0ZWQpIHtcbiAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbJ25vLXRyYW5zaXRpb24nXSk7XG4gICAgfVxuXG4gICAgc2V0SW5uZXJIdG1sKGNvbnRhaW5lciwgc3dlZXRIVE1MKTtcbiAgICB2YXIgdGFyZ2V0RWxlbWVudCA9IGdldFRhcmdldChwYXJhbXMudGFyZ2V0KTtcbiAgICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgc2V0dXBBY2Nlc3NpYmlsaXR5KHBhcmFtcyk7XG4gICAgc2V0dXBSVEwodGFyZ2V0RWxlbWVudCk7XG4gICAgYWRkSW5wdXRDaGFuZ2VMaXN0ZW5lcnMoKTtcbiAgfTtcblxuICB2YXIgcGFyc2VIdG1sVG9Db250YWluZXIgPSBmdW5jdGlvbiBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbSwgdGFyZ2V0KSB7XG4gICAgLy8gRE9NIGVsZW1lbnRcbiAgICBpZiAocGFyYW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmFtKTsgLy8gT2JqZWN0XG4gICAgfSBlbHNlIGlmIChfdHlwZW9mKHBhcmFtKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGhhbmRsZU9iamVjdChwYXJhbSwgdGFyZ2V0KTsgLy8gUGxhaW4gc3RyaW5nXG4gICAgfSBlbHNlIGlmIChwYXJhbSkge1xuICAgICAgc2V0SW5uZXJIdG1sKHRhcmdldCwgcGFyYW0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlT2JqZWN0ID0gZnVuY3Rpb24gaGFuZGxlT2JqZWN0KHBhcmFtLCB0YXJnZXQpIHtcbiAgICAvLyBKUXVlcnkgZWxlbWVudChzKVxuICAgIGlmIChwYXJhbS5qcXVlcnkpIHtcbiAgICAgIGhhbmRsZUpxdWVyeUVsZW0odGFyZ2V0LCBwYXJhbSk7IC8vIEZvciBvdGhlciBvYmplY3RzIHVzZSB0aGVpciBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SW5uZXJIdG1sKHRhcmdldCwgcGFyYW0udG9TdHJpbmcoKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVKcXVlcnlFbGVtID0gZnVuY3Rpb24gaGFuZGxlSnF1ZXJ5RWxlbSh0YXJnZXQsIGVsZW0pIHtcbiAgICB0YXJnZXQudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmICgwIGluIGVsZW0pIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyAoaSBpbiBlbGVtKTsgaSsrKSB7XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChlbGVtW2ldLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChlbGVtLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBhbmltYXRpb25FbmRFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcmV2ZW50IHJ1biBpbiBOb2RlIGVudlxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGlzTm9kZUVudigpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciB0cmFuc0VuZEV2ZW50TmFtZXMgPSB7XG4gICAgICBXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCcsXG4gICAgICBhbmltYXRpb246ICdhbmltYXRpb25lbmQnXG4gICAgfTtcblxuICAgIGZvciAodmFyIGkgaW4gdHJhbnNFbmRFdmVudE5hbWVzKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRyYW5zRW5kRXZlbnROYW1lcywgaSkgJiYgdHlwZW9mIHRlc3RFbC5zdHlsZVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zRW5kRXZlbnROYW1lc1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0oKTtcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvanMvc3JjL21vZGFsLmpzXG5cbiAgdmFyIG1lYXN1cmVTY3JvbGxiYXIgPSBmdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKCkge1xuICAgIHZhciBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gc3dhbENsYXNzZXNbJ3Njcm9sbGJhci1tZWFzdXJlJ107XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICAgIHZhciBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xuICB9O1xuXG4gIHZhciByZW5kZXJBY3Rpb25zID0gZnVuY3Rpb24gcmVuZGVyQWN0aW9ucyhpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gICAgdmFyIGxvYWRlciA9IGdldExvYWRlcigpO1xuICAgIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIHZhciBkZW55QnV0dG9uID0gZ2V0RGVueUJ1dHRvbigpO1xuICAgIHZhciBjYW5jZWxCdXR0b24gPSBnZXRDYW5jZWxCdXR0b24oKTsgLy8gQWN0aW9ucyAoYnV0dG9ucykgd3JhcHBlclxuXG4gICAgaWYgKCFwYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24gJiYgIXBhcmFtcy5zaG93RGVueUJ1dHRvbiAmJiAhcGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICAgIGhpZGUoYWN0aW9ucyk7XG4gICAgfSAvLyBDdXN0b20gY2xhc3NcblxuXG4gICAgYXBwbHlDdXN0b21DbGFzcyhhY3Rpb25zLCBwYXJhbXMsICdhY3Rpb25zJyk7IC8vIFJlbmRlciBidXR0b25zXG5cbiAgICByZW5kZXJCdXR0b24oY29uZmlybUJ1dHRvbiwgJ2NvbmZpcm0nLCBwYXJhbXMpO1xuICAgIHJlbmRlckJ1dHRvbihkZW55QnV0dG9uLCAnZGVueScsIHBhcmFtcyk7XG4gICAgcmVuZGVyQnV0dG9uKGNhbmNlbEJ1dHRvbiwgJ2NhbmNlbCcsIHBhcmFtcyk7XG4gICAgaGFuZGxlQnV0dG9uc1N0eWxpbmcoY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBwYXJhbXMpO1xuXG4gICAgaWYgKHBhcmFtcy5yZXZlcnNlQnV0dG9ucykge1xuICAgICAgYWN0aW9ucy5pbnNlcnRCZWZvcmUoY2FuY2VsQnV0dG9uLCBsb2FkZXIpO1xuICAgICAgYWN0aW9ucy5pbnNlcnRCZWZvcmUoZGVueUJ1dHRvbiwgbG9hZGVyKTtcbiAgICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGNvbmZpcm1CdXR0b24sIGxvYWRlcik7XG4gICAgfSAvLyBMb2FkZXJcblxuXG4gICAgc2V0SW5uZXJIdG1sKGxvYWRlciwgcGFyYW1zLmxvYWRlckh0bWwpO1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MobG9hZGVyLCBwYXJhbXMsICdsb2FkZXInKTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVCdXR0b25zU3R5bGluZyhjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b24sIHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgICByZXR1cm4gcmVtb3ZlQ2xhc3MoW2NvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbl0sIHN3YWxDbGFzc2VzLnN0eWxlZCk7XG4gICAgfVxuXG4gICAgYWRkQ2xhc3MoW2NvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbl0sIHN3YWxDbGFzc2VzLnN0eWxlZCk7IC8vIEJ1dHRvbnMgYmFja2dyb3VuZCBjb2xvcnNcblxuICAgIGlmIChwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yKSB7XG4gICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5kZW55QnV0dG9uQ29sb3IpIHtcbiAgICAgIGRlbnlCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmRlbnlCdXR0b25Db2xvcjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yKSB7XG4gICAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckJ1dHRvbihidXR0b24sIGJ1dHRvblR5cGUsIHBhcmFtcykge1xuICAgIHRvZ2dsZShidXR0b24sIHBhcmFtc1tcInNob3dcIi5jb25jYXQoY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGJ1dHRvblR5cGUpLCBcIkJ1dHRvblwiKV0sICdpbmxpbmUtYmxvY2snKTtcbiAgICBzZXRJbm5lckh0bWwoYnV0dG9uLCBwYXJhbXNbXCJcIi5jb25jYXQoYnV0dG9uVHlwZSwgXCJCdXR0b25UZXh0XCIpXSk7IC8vIFNldCBjYXB0aW9uIHRleHRcblxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBwYXJhbXNbXCJcIi5jb25jYXQoYnV0dG9uVHlwZSwgXCJCdXR0b25BcmlhTGFiZWxcIildKTsgLy8gQVJJQSBsYWJlbFxuICAgIC8vIEFkZCBidXR0b25zIGN1c3RvbSBjbGFzc2VzXG5cbiAgICBidXR0b24uY2xhc3NOYW1lID0gc3dhbENsYXNzZXNbYnV0dG9uVHlwZV07XG4gICAgYXBwbHlDdXN0b21DbGFzcyhidXR0b24sIHBhcmFtcywgXCJcIi5jb25jYXQoYnV0dG9uVHlwZSwgXCJCdXR0b25cIikpO1xuICAgIGFkZENsYXNzKGJ1dHRvbiwgcGFyYW1zW1wiXCIuY29uY2F0KGJ1dHRvblR5cGUsIFwiQnV0dG9uQ2xhc3NcIildKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUJhY2tkcm9wUGFyYW0oY29udGFpbmVyLCBiYWNrZHJvcCkge1xuICAgIGlmICh0eXBlb2YgYmFja2Ryb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tkcm9wO1xuICAgIH0gZWxzZSBpZiAoIWJhY2tkcm9wKSB7XG4gICAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVBvc2l0aW9uUGFyYW0oY29udGFpbmVyLCBwb3NpdGlvbikge1xuICAgIGlmIChwb3NpdGlvbiBpbiBzd2FsQ2xhc3Nlcykge1xuICAgICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1twb3NpdGlvbl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKCdUaGUgXCJwb3NpdGlvblwiIHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJjZW50ZXJcIicpO1xuICAgICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlcy5jZW50ZXIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUdyb3dQYXJhbShjb250YWluZXIsIGdyb3cpIHtcbiAgICBpZiAoZ3JvdyAmJiB0eXBlb2YgZ3JvdyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBncm93Q2xhc3MgPSBcImdyb3ctXCIuY29uY2F0KGdyb3cpO1xuXG4gICAgICBpZiAoZ3Jvd0NsYXNzIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbZ3Jvd0NsYXNzXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHJlbmRlckNvbnRhaW5lciA9IGZ1bmN0aW9uIHJlbmRlckNvbnRhaW5lcihpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuXG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoYW5kbGVCYWNrZHJvcFBhcmFtKGNvbnRhaW5lciwgcGFyYW1zLmJhY2tkcm9wKTtcblxuICAgIGlmICghcGFyYW1zLmJhY2tkcm9wICYmIHBhcmFtcy5hbGxvd091dHNpZGVDbGljaykge1xuICAgICAgd2FybignXCJhbGxvd091dHNpZGVDbGlja1wiIHBhcmFtZXRlciByZXF1aXJlcyBgYmFja2Ryb3BgIHBhcmFtZXRlciB0byBiZSBzZXQgdG8gYHRydWVgJyk7XG4gICAgfVxuXG4gICAgaGFuZGxlUG9zaXRpb25QYXJhbShjb250YWluZXIsIHBhcmFtcy5wb3NpdGlvbik7XG4gICAgaGFuZGxlR3Jvd1BhcmFtKGNvbnRhaW5lciwgcGFyYW1zLmdyb3cpOyAvLyBDdXN0b20gY2xhc3NcblxuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoY29udGFpbmVyLCBwYXJhbXMsICdjb250YWluZXInKTsgLy8gU2V0IHF1ZXVlIHN0ZXAgYXR0cmlidXRlIGZvciBnZXRRdWV1ZVN0ZXAoKSBtZXRob2RcblxuICAgIHZhciBxdWV1ZVN0ZXAgPSBkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJyk7XG5cbiAgICBpZiAocXVldWVTdGVwKSB7XG4gICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXF1ZXVlLXN0ZXAnLCBxdWV1ZVN0ZXApO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBtb2R1bGUgY29udGFpbnRzIGBXZWFrTWFwYHMgZm9yIGVhY2ggZWZmZWN0aXZlbHktXCJwcml2YXRlICBwcm9wZXJ0eVwiIHRoYXQgYSBgU3dhbGAgaGFzLlxuICAgKiBGb3IgZXhhbXBsZSwgdG8gc2V0IHRoZSBwcml2YXRlIHByb3BlcnR5IFwiZm9vXCIgb2YgYHRoaXNgIHRvIFwiYmFyXCIsIHlvdSBjYW4gYHByaXZhdGVQcm9wcy5mb28uc2V0KHRoaXMsICdiYXInKWBcbiAgICogVGhpcyBpcyB0aGUgYXBwcm9hY2ggdGhhdCBCYWJlbCB3aWxsIHByb2JhYmx5IHRha2UgdG8gaW1wbGVtZW50IHByaXZhdGUgbWV0aG9kcy9maWVsZHNcbiAgICogICBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcml2YXRlLW1ldGhvZHNcbiAgICogICBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvcHVsbC83NTU1XG4gICAqIE9uY2Ugd2UgaGF2ZSB0aGUgY2hhbmdlcyBmcm9tIHRoYXQgUFIgaW4gQmFiZWwsIGFuZCBvdXIgY29yZSBjbGFzcyBmaXRzIHJlYXNvbmFibGUgaW4gKm9uZSBtb2R1bGUqXG4gICAqICAgdGhlbiB3ZSBjYW4gdXNlIHRoYXQgbGFuZ3VhZ2UgZmVhdHVyZS5cbiAgICovXG4gIHZhciBwcml2YXRlUHJvcHMgPSB7XG4gICAgcHJvbWlzZTogbmV3IFdlYWtNYXAoKSxcbiAgICBpbm5lclBhcmFtczogbmV3IFdlYWtNYXAoKSxcbiAgICBkb21DYWNoZTogbmV3IFdlYWtNYXAoKVxuICB9O1xuXG4gIHZhciBpbnB1dFR5cGVzID0gWydpbnB1dCcsICdmaWxlJywgJ3JhbmdlJywgJ3NlbGVjdCcsICdyYWRpbycsICdjaGVja2JveCcsICd0ZXh0YXJlYSddO1xuICB2YXIgcmVuZGVySW5wdXQgPSBmdW5jdGlvbiByZW5kZXJJbnB1dChpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG4gICAgdmFyIHJlcmVuZGVyID0gIWlubmVyUGFyYW1zIHx8IHBhcmFtcy5pbnB1dCAhPT0gaW5uZXJQYXJhbXMuaW5wdXQ7XG4gICAgaW5wdXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dFR5cGUpIHtcbiAgICAgIHZhciBpbnB1dENsYXNzID0gc3dhbENsYXNzZXNbaW5wdXRUeXBlXTtcbiAgICAgIHZhciBpbnB1dENvbnRhaW5lciA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBpbnB1dENsYXNzKTsgLy8gc2V0IGF0dHJpYnV0ZXNcblxuICAgICAgc2V0QXR0cmlidXRlcyhpbnB1dFR5cGUsIHBhcmFtcy5pbnB1dEF0dHJpYnV0ZXMpOyAvLyBzZXQgY2xhc3NcblxuICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NOYW1lID0gaW5wdXRDbGFzcztcblxuICAgICAgaWYgKHJlcmVuZGVyKSB7XG4gICAgICAgIGhpZGUoaW5wdXRDb250YWluZXIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtcy5pbnB1dCkge1xuICAgICAgaWYgKHJlcmVuZGVyKSB7XG4gICAgICAgIHNob3dJbnB1dChwYXJhbXMpO1xuICAgICAgfSAvLyBzZXQgY3VzdG9tIGNsYXNzXG5cblxuICAgICAgc2V0Q3VzdG9tQ2xhc3MocGFyYW1zKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNob3dJbnB1dCA9IGZ1bmN0aW9uIHNob3dJbnB1dChwYXJhbXMpIHtcbiAgICBpZiAoIXJlbmRlcklucHV0VHlwZVtwYXJhbXMuaW5wdXRdKSB7XG4gICAgICByZXR1cm4gZXJyb3IoXCJVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXQhIEV4cGVjdGVkIFxcXCJ0ZXh0XFxcIiwgXFxcImVtYWlsXFxcIiwgXFxcInBhc3N3b3JkXFxcIiwgXFxcIm51bWJlclxcXCIsIFxcXCJ0ZWxcXFwiLCBcXFwic2VsZWN0XFxcIiwgXFxcInJhZGlvXFxcIiwgXFxcImNoZWNrYm94XFxcIiwgXFxcInRleHRhcmVhXFxcIiwgXFxcImZpbGVcXFwiIG9yIFxcXCJ1cmxcXFwiLCBnb3QgXFxcIlwiLmNvbmNhdChwYXJhbXMuaW5wdXQsIFwiXFxcIlwiKSk7XG4gICAgfVxuXG4gICAgdmFyIGlucHV0Q29udGFpbmVyID0gZ2V0SW5wdXRDb250YWluZXIocGFyYW1zLmlucHV0KTtcbiAgICB2YXIgaW5wdXQgPSByZW5kZXJJbnB1dFR5cGVbcGFyYW1zLmlucHV0XShpbnB1dENvbnRhaW5lciwgcGFyYW1zKTtcbiAgICBzaG93KGlucHV0KTsgLy8gaW5wdXQgYXV0b2ZvY3VzXG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvY3VzSW5wdXQoaW5wdXQpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciByZW1vdmVBdHRyaWJ1dGVzID0gZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlcyhpbnB1dCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGF0dHJOYW1lID0gaW5wdXQuYXR0cmlidXRlc1tpXS5uYW1lO1xuXG4gICAgICBpZiAoIShbJ3R5cGUnLCAndmFsdWUnLCAnc3R5bGUnXS5pbmRleE9mKGF0dHJOYW1lKSAhPT0gLTEpKSB7XG4gICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBzZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhpbnB1dFR5cGUsIGlucHV0QXR0cmlidXRlcykge1xuICAgIHZhciBpbnB1dCA9IGdldElucHV0KGdldENvbnRlbnQoKSwgaW5wdXRUeXBlKTtcblxuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZW1vdmVBdHRyaWJ1dGVzKGlucHV0KTtcblxuICAgIGZvciAodmFyIGF0dHIgaW4gaW5wdXRBdHRyaWJ1dGVzKSB7XG4gICAgICAvLyBEbyBub3Qgc2V0IGEgcGxhY2Vob2xkZXIgZm9yIDxpbnB1dCB0eXBlPVwicmFuZ2VcIj5cbiAgICAgIC8vIGl0J2xsIGNyYXNoIEVkZ2UsICMxMjk4XG4gICAgICBpZiAoaW5wdXRUeXBlID09PSAncmFuZ2UnICYmIGF0dHIgPT09ICdwbGFjZWhvbGRlcicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShhdHRyLCBpbnB1dEF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgc2V0Q3VzdG9tQ2xhc3MgPSBmdW5jdGlvbiBzZXRDdXN0b21DbGFzcyhwYXJhbXMpIHtcbiAgICB2YXIgaW5wdXRDb250YWluZXIgPSBnZXRJbnB1dENvbnRhaW5lcihwYXJhbXMuaW5wdXQpO1xuXG4gICAgaWYgKHBhcmFtcy5jdXN0b21DbGFzcykge1xuICAgICAgYWRkQ2xhc3MoaW5wdXRDb250YWluZXIsIHBhcmFtcy5jdXN0b21DbGFzcy5pbnB1dCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBzZXRJbnB1dFBsYWNlaG9sZGVyID0gZnVuY3Rpb24gc2V0SW5wdXRQbGFjZWhvbGRlcihpbnB1dCwgcGFyYW1zKSB7XG4gICAgaWYgKCFpbnB1dC5wbGFjZWhvbGRlciB8fCBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcikge1xuICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNldElucHV0TGFiZWwgPSBmdW5jdGlvbiBzZXRJbnB1dExhYmVsKGlucHV0LCBwcmVwZW5kVG8sIHBhcmFtcykge1xuICAgIGlmIChwYXJhbXMuaW5wdXRMYWJlbCkge1xuICAgICAgaW5wdXQuaWQgPSBzd2FsQ2xhc3Nlcy5pbnB1dDtcbiAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICB2YXIgbGFiZWxDbGFzcyA9IHN3YWxDbGFzc2VzWydpbnB1dC1sYWJlbCddO1xuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dC5pZCk7XG4gICAgICBsYWJlbC5jbGFzc05hbWUgPSBsYWJlbENsYXNzO1xuICAgICAgYWRkQ2xhc3MobGFiZWwsIHBhcmFtcy5jdXN0b21DbGFzcy5pbnB1dExhYmVsKTtcbiAgICAgIGxhYmVsLmlubmVyVGV4dCA9IHBhcmFtcy5pbnB1dExhYmVsO1xuICAgICAgcHJlcGVuZFRvLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBsYWJlbCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRJbnB1dENvbnRhaW5lciA9IGZ1bmN0aW9uIGdldElucHV0Q29udGFpbmVyKGlucHV0VHlwZSkge1xuICAgIHZhciBpbnB1dENsYXNzID0gc3dhbENsYXNzZXNbaW5wdXRUeXBlXSA/IHN3YWxDbGFzc2VzW2lucHV0VHlwZV0gOiBzd2FsQ2xhc3Nlcy5pbnB1dDtcbiAgICByZXR1cm4gZ2V0Q2hpbGRCeUNsYXNzKGdldENvbnRlbnQoKSwgaW5wdXRDbGFzcyk7XG4gIH07XG5cbiAgdmFyIHJlbmRlcklucHV0VHlwZSA9IHt9O1xuXG4gIHJlbmRlcklucHV0VHlwZS50ZXh0ID0gcmVuZGVySW5wdXRUeXBlLmVtYWlsID0gcmVuZGVySW5wdXRUeXBlLnBhc3N3b3JkID0gcmVuZGVySW5wdXRUeXBlLm51bWJlciA9IHJlbmRlcklucHV0VHlwZS50ZWwgPSByZW5kZXJJbnB1dFR5cGUudXJsID0gZnVuY3Rpb24gKGlucHV0LCBwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcy5pbnB1dFZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgcGFyYW1zLmlucHV0VmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICAgIH0gZWxzZSBpZiAoIWlzUHJvbWlzZShwYXJhbXMuaW5wdXRWYWx1ZSkpIHtcbiAgICAgIHdhcm4oXCJVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRWYWx1ZSEgRXhwZWN0ZWQgXFxcInN0cmluZ1xcXCIsIFxcXCJudW1iZXJcXFwiIG9yIFxcXCJQcm9taXNlXFxcIiwgZ290IFxcXCJcIi5jb25jYXQoX3R5cGVvZihwYXJhbXMuaW5wdXRWYWx1ZSksIFwiXFxcIlwiKSk7XG4gICAgfVxuXG4gICAgc2V0SW5wdXRMYWJlbChpbnB1dCwgaW5wdXQsIHBhcmFtcyk7XG4gICAgc2V0SW5wdXRQbGFjZWhvbGRlcihpbnB1dCwgcGFyYW1zKTtcbiAgICBpbnB1dC50eXBlID0gcGFyYW1zLmlucHV0O1xuICAgIHJldHVybiBpbnB1dDtcbiAgfTtcblxuICByZW5kZXJJbnB1dFR5cGUuZmlsZSA9IGZ1bmN0aW9uIChpbnB1dCwgcGFyYW1zKSB7XG4gICAgc2V0SW5wdXRMYWJlbChpbnB1dCwgaW5wdXQsIHBhcmFtcyk7XG4gICAgc2V0SW5wdXRQbGFjZWhvbGRlcihpbnB1dCwgcGFyYW1zKTtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH07XG5cbiAgcmVuZGVySW5wdXRUeXBlLnJhbmdlID0gZnVuY3Rpb24gKHJhbmdlLCBwYXJhbXMpIHtcbiAgICB2YXIgcmFuZ2VJbnB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgdmFyIHJhbmdlT3V0cHV0ID0gcmFuZ2UucXVlcnlTZWxlY3Rvcignb3V0cHV0Jyk7XG4gICAgcmFuZ2VJbnB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICAgIHJhbmdlSW5wdXQudHlwZSA9IHBhcmFtcy5pbnB1dDtcbiAgICByYW5nZU91dHB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICAgIHNldElucHV0TGFiZWwocmFuZ2VJbnB1dCwgcmFuZ2UsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIHJlbmRlcklucHV0VHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAoc2VsZWN0LCBwYXJhbXMpIHtcbiAgICBzZWxlY3QudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcikge1xuICAgICAgdmFyIHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBzZXRJbm5lckh0bWwocGxhY2Vob2xkZXIsIHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKTtcbiAgICAgIHBsYWNlaG9sZGVyLnZhbHVlID0gJyc7XG4gICAgICBwbGFjZWhvbGRlci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBwbGFjZWhvbGRlci5zZWxlY3RlZCA9IHRydWU7XG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuICAgIH1cblxuICAgIHNldElucHV0TGFiZWwoc2VsZWN0LCBzZWxlY3QsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHNlbGVjdDtcbiAgfTtcblxuICByZW5kZXJJbnB1dFR5cGUucmFkaW8gPSBmdW5jdGlvbiAocmFkaW8pIHtcbiAgICByYWRpby50ZXh0Q29udGVudCA9ICcnO1xuICAgIHJldHVybiByYWRpbztcbiAgfTtcblxuICByZW5kZXJJbnB1dFR5cGUuY2hlY2tib3ggPSBmdW5jdGlvbiAoY2hlY2tib3hDb250YWluZXIsIHBhcmFtcykge1xuICAgIHZhciBjaGVja2JveCA9IGdldElucHV0KGdldENvbnRlbnQoKSwgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3gudmFsdWUgPSAxO1xuICAgIGNoZWNrYm94LmlkID0gc3dhbENsYXNzZXMuY2hlY2tib3g7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IEJvb2xlYW4ocGFyYW1zLmlucHV0VmFsdWUpO1xuICAgIHZhciBsYWJlbCA9IGNoZWNrYm94Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICBzZXRJbm5lckh0bWwobGFiZWwsIHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKTtcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXI7XG4gIH07XG5cbiAgcmVuZGVySW5wdXRUeXBlLnRleHRhcmVhID0gZnVuY3Rpb24gKHRleHRhcmVhLCBwYXJhbXMpIHtcbiAgICB0ZXh0YXJlYS52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICAgIHNldElucHV0UGxhY2Vob2xkZXIodGV4dGFyZWEsIHBhcmFtcyk7XG4gICAgc2V0SW5wdXRMYWJlbCh0ZXh0YXJlYSwgdGV4dGFyZWEsIHBhcmFtcyk7XG5cbiAgICB2YXIgZ2V0UGFkZGluZyA9IGZ1bmN0aW9uIGdldFBhZGRpbmcoZWwpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkucGFkZGluZ0xlZnQpICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLnBhZGRpbmdSaWdodCk7XG4gICAgfTtcblxuICAgIGlmICgnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG4gICAgICAvLyAjMTY5OVxuICAgICAgdmFyIGluaXRpYWxQb3B1cFdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZ2V0UG9wdXAoKSkud2lkdGgpO1xuXG4gICAgICB2YXIgb3V0cHV0c2l6ZSA9IGZ1bmN0aW9uIG91dHB1dHNpemUoKSB7XG4gICAgICAgIHZhciBjb250ZW50V2lkdGggPSB0ZXh0YXJlYS5vZmZzZXRXaWR0aCArIGdldFBhZGRpbmcoZ2V0UG9wdXAoKSkgKyBnZXRQYWRkaW5nKGdldENvbnRlbnQoKSk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRXaWR0aCA+IGluaXRpYWxQb3B1cFdpZHRoKSB7XG4gICAgICAgICAgZ2V0UG9wdXAoKS5zdHlsZS53aWR0aCA9IFwiXCIuY29uY2F0KGNvbnRlbnRXaWR0aCwgXCJweFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnZXRQb3B1cCgpLnN0eWxlLndpZHRoID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIob3V0cHV0c2l6ZSkub2JzZXJ2ZSh0ZXh0YXJlYSwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHRhcmVhO1xuICB9O1xuXG4gIHZhciByZW5kZXJDb250ZW50ID0gZnVuY3Rpb24gcmVuZGVyQ29udGVudChpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIGh0bWxDb250YWluZXIgPSBnZXRIdG1sQ29udGFpbmVyKCk7XG4gICAgYXBwbHlDdXN0b21DbGFzcyhodG1sQ29udGFpbmVyLCBwYXJhbXMsICdodG1sQ29udGFpbmVyJyk7IC8vIENvbnRlbnQgYXMgSFRNTFxuXG4gICAgaWYgKHBhcmFtcy5odG1sKSB7XG4gICAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMuaHRtbCwgaHRtbENvbnRhaW5lcik7XG4gICAgICBzaG93KGh0bWxDb250YWluZXIsICdibG9jaycpOyAvLyBDb250ZW50IGFzIHBsYWluIHRleHRcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy50ZXh0KSB7XG4gICAgICBodG1sQ29udGFpbmVyLnRleHRDb250ZW50ID0gcGFyYW1zLnRleHQ7XG4gICAgICBzaG93KGh0bWxDb250YWluZXIsICdibG9jaycpOyAvLyBObyBjb250ZW50XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZGUoaHRtbENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmVuZGVySW5wdXQoaW5zdGFuY2UsIHBhcmFtcyk7IC8vIEN1c3RvbSBjbGFzc1xuXG4gICAgYXBwbHlDdXN0b21DbGFzcyhnZXRDb250ZW50KCksIHBhcmFtcywgJ2NvbnRlbnQnKTtcbiAgfTtcblxuICB2YXIgcmVuZGVyRm9vdGVyID0gZnVuY3Rpb24gcmVuZGVyRm9vdGVyKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgZm9vdGVyID0gZ2V0Rm9vdGVyKCk7XG4gICAgdG9nZ2xlKGZvb3RlciwgcGFyYW1zLmZvb3Rlcik7XG5cbiAgICBpZiAocGFyYW1zLmZvb3Rlcikge1xuICAgICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLmZvb3RlciwgZm9vdGVyKTtcbiAgICB9IC8vIEN1c3RvbSBjbGFzc1xuXG5cbiAgICBhcHBseUN1c3RvbUNsYXNzKGZvb3RlciwgcGFyYW1zLCAnZm9vdGVyJyk7XG4gIH07XG5cbiAgdmFyIHJlbmRlckNsb3NlQnV0dG9uID0gZnVuY3Rpb24gcmVuZGVyQ2xvc2VCdXR0b24oaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBjbG9zZUJ1dHRvbiA9IGdldENsb3NlQnV0dG9uKCk7XG4gICAgc2V0SW5uZXJIdG1sKGNsb3NlQnV0dG9uLCBwYXJhbXMuY2xvc2VCdXR0b25IdG1sKTsgLy8gQ3VzdG9tIGNsYXNzXG5cbiAgICBhcHBseUN1c3RvbUNsYXNzKGNsb3NlQnV0dG9uLCBwYXJhbXMsICdjbG9zZUJ1dHRvbicpO1xuICAgIHRvZ2dsZShjbG9zZUJ1dHRvbiwgcGFyYW1zLnNob3dDbG9zZUJ1dHRvbik7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNsb3NlQnV0dG9uQXJpYUxhYmVsKTtcbiAgfTtcblxuICB2YXIgcmVuZGVySWNvbiA9IGZ1bmN0aW9uIHJlbmRlckljb24oaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpOyAvLyBpZiB0aGUgZ2l2ZW4gaWNvbiBhbHJlYWR5IHJlbmRlcmVkLCBhcHBseSB0aGUgc3R5bGluZyB3aXRob3V0IHJlLXJlbmRlcmluZyB0aGUgaWNvblxuXG4gICAgaWYgKGlubmVyUGFyYW1zICYmIHBhcmFtcy5pY29uID09PSBpbm5lclBhcmFtcy5pY29uICYmIGdldEljb24oKSkge1xuICAgICAgYXBwbHlTdHlsZXMoZ2V0SWNvbigpLCBwYXJhbXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhpZGVBbGxJY29ucygpO1xuXG4gICAgaWYgKCFwYXJhbXMuaWNvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyhpY29uVHlwZXMpLmluZGV4T2YocGFyYW1zLmljb24pICE9PSAtMSkge1xuICAgICAgdmFyIGljb24gPSBlbGVtZW50QnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIuXCIpLmNvbmNhdChpY29uVHlwZXNbcGFyYW1zLmljb25dKSk7XG4gICAgICBzaG93KGljb24pOyAvLyBDdXN0b20gb3IgZGVmYXVsdCBjb250ZW50XG5cbiAgICAgIHNldENvbnRlbnQoaWNvbiwgcGFyYW1zKTtcbiAgICAgIGFwcGx5U3R5bGVzKGljb24sIHBhcmFtcyk7IC8vIEFuaW1hdGUgaWNvblxuXG4gICAgICBhZGRDbGFzcyhpY29uLCBwYXJhbXMuc2hvd0NsYXNzLmljb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcihcIlVua25vd24gaWNvbiEgRXhwZWN0ZWQgXFxcInN1Y2Nlc3NcXFwiLCBcXFwiZXJyb3JcXFwiLCBcXFwid2FybmluZ1xcXCIsIFxcXCJpbmZvXFxcIiBvciBcXFwicXVlc3Rpb25cXFwiLCBnb3QgXFxcIlwiLmNvbmNhdChwYXJhbXMuaWNvbiwgXCJcXFwiXCIpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhpZGVBbGxJY29ucyA9IGZ1bmN0aW9uIGhpZGVBbGxJY29ucygpIHtcbiAgICB2YXIgaWNvbnMgPSBnZXRJY29ucygpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpY29ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaGlkZShpY29uc1tpXSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBhcHBseVN0eWxlcyA9IGZ1bmN0aW9uIGFwcGx5U3R5bGVzKGljb24sIHBhcmFtcykge1xuICAgIC8vIEljb24gY29sb3JcbiAgICBzZXRDb2xvcihpY29uLCBwYXJhbXMpOyAvLyBTdWNjZXNzIGljb24gYmFja2dyb3VuZCBjb2xvclxuXG4gICAgYWRqdXN0U3VjY2Vzc0ljb25CYWNrZ291bmRDb2xvcigpOyAvLyBDdXN0b20gY2xhc3NcblxuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoaWNvbiwgcGFyYW1zLCAnaWNvbicpO1xuICB9OyAvLyBBZGp1c3Qgc3VjY2VzcyBpY29uIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggdGhlIHBvcHVwIGJhY2tncm91bmQgY29sb3JcblxuXG4gIHZhciBhZGp1c3RTdWNjZXNzSWNvbkJhY2tnb3VuZENvbG9yID0gZnVuY3Rpb24gYWRqdXN0U3VjY2Vzc0ljb25CYWNrZ291bmRDb2xvcigpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIHZhciBwb3B1cEJhY2tncm91bmRDb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBvcHVwKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgdmFyIHN1Y2Nlc3NJY29uUGFydHMgPSBwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV0sIC5zd2FsMi1zdWNjZXNzLWZpeCcpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWNjZXNzSWNvblBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdWNjZXNzSWNvblBhcnRzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBvcHVwQmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgfTtcblxuICB2YXIgc2V0Q29udGVudCA9IGZ1bmN0aW9uIHNldENvbnRlbnQoaWNvbiwgcGFyYW1zKSB7XG4gICAgaWNvbi50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgaWYgKHBhcmFtcy5pY29uSHRtbCkge1xuICAgICAgc2V0SW5uZXJIdG1sKGljb24sIGljb25Db250ZW50KHBhcmFtcy5pY29uSHRtbCkpO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmljb24gPT09ICdzdWNjZXNzJykge1xuICAgICAgc2V0SW5uZXJIdG1sKGljb24sIFwiXFxuICAgICAgPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLWxlZnRcXFwiPjwvZGl2PlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWxpbmUtdGlwXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ1xcXCI+PC9zcGFuPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtcmluZ1xcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtZml4XFxcIj48L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHRcXFwiPjwvZGl2PlxcbiAgICBcIik7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMuaWNvbiA9PT0gJ2Vycm9yJykge1xuICAgICAgc2V0SW5uZXJIdG1sKGljb24sIFwiXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFya1xcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3dhbDIteC1tYXJrLWxpbmUtbGVmdFxcXCI+PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFyay1saW5lLXJpZ2h0XFxcIj48L3NwYW4+XFxuICAgICAgPC9zcGFuPlxcbiAgICBcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBkZWZhdWx0SWNvbkh0bWwgPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnPycsXG4gICAgICAgIHdhcm5pbmc6ICchJyxcbiAgICAgICAgaW5mbzogJ2knXG4gICAgICB9O1xuICAgICAgc2V0SW5uZXJIdG1sKGljb24sIGljb25Db250ZW50KGRlZmF1bHRJY29uSHRtbFtwYXJhbXMuaWNvbl0pKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNldENvbG9yID0gZnVuY3Rpb24gc2V0Q29sb3IoaWNvbiwgcGFyYW1zKSB7XG4gICAgaWYgKCFwYXJhbXMuaWNvbkNvbG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWNvbi5zdHlsZS5jb2xvciA9IHBhcmFtcy5pY29uQ29sb3I7XG4gICAgaWNvbi5zdHlsZS5ib3JkZXJDb2xvciA9IHBhcmFtcy5pY29uQ29sb3I7XG5cbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hcnIgPSBbJy5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwJywgJy5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZycsICcuc3dhbDIteC1tYXJrLWxpbmUtbGVmdCcsICcuc3dhbDIteC1tYXJrLWxpbmUtcmlnaHQnXTsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIHNlbCA9IF9hcnJbX2ldO1xuICAgICAgc2V0U3R5bGUoaWNvbiwgc2VsLCAnYmFja2dyb3VuZENvbG9yJywgcGFyYW1zLmljb25Db2xvcik7XG4gICAgfVxuXG4gICAgc2V0U3R5bGUoaWNvbiwgJy5zd2FsMi1zdWNjZXNzLXJpbmcnLCAnYm9yZGVyQ29sb3InLCBwYXJhbXMuaWNvbkNvbG9yKTtcbiAgfTtcblxuICB2YXIgaWNvbkNvbnRlbnQgPSBmdW5jdGlvbiBpY29uQ29udGVudChjb250ZW50KSB7XG4gICAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiXCIuY29uY2F0KHN3YWxDbGFzc2VzWydpY29uLWNvbnRlbnQnXSwgXCJcXFwiPlwiKS5jb25jYXQoY29udGVudCwgXCI8L2Rpdj5cIik7XG4gIH07XG5cbiAgdmFyIHJlbmRlckltYWdlID0gZnVuY3Rpb24gcmVuZGVySW1hZ2UoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBpbWFnZSA9IGdldEltYWdlKCk7XG5cbiAgICBpZiAoIXBhcmFtcy5pbWFnZVVybCkge1xuICAgICAgcmV0dXJuIGhpZGUoaW1hZ2UpO1xuICAgIH1cblxuICAgIHNob3coaW1hZ2UsICcnKTsgLy8gU3JjLCBhbHRcblxuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgcGFyYW1zLmltYWdlVXJsKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHBhcmFtcy5pbWFnZUFsdCk7IC8vIFdpZHRoLCBoZWlnaHRcblxuICAgIGFwcGx5TnVtZXJpY2FsU3R5bGUoaW1hZ2UsICd3aWR0aCcsIHBhcmFtcy5pbWFnZVdpZHRoKTtcbiAgICBhcHBseU51bWVyaWNhbFN0eWxlKGltYWdlLCAnaGVpZ2h0JywgcGFyYW1zLmltYWdlSGVpZ2h0KTsgLy8gQ2xhc3NcblxuICAgIGltYWdlLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmltYWdlO1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoaW1hZ2UsIHBhcmFtcywgJ2ltYWdlJyk7XG4gIH07XG5cbiAgdmFyIGN1cnJlbnRTdGVwcyA9IFtdO1xuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGNoYWluaW5nIHN3ZWV0QWxlcnQgcG9wdXBzXG4gICAqL1xuXG4gIHZhciBxdWV1ZSA9IGZ1bmN0aW9uIHF1ZXVlKHN0ZXBzKSB7XG4gICAgdmFyIFN3YWwgPSB0aGlzO1xuICAgIGN1cnJlbnRTdGVwcyA9IHN0ZXBzO1xuXG4gICAgdmFyIHJlc2V0QW5kUmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc2V0QW5kUmVzb2x2ZShyZXNvbHZlLCB2YWx1ZSkge1xuICAgICAgY3VycmVudFN0ZXBzID0gW107XG4gICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgdmFyIHF1ZXVlUmVzdWx0ID0gW107XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAoZnVuY3Rpb24gc3RlcChpLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoaSA8IGN1cnJlbnRTdGVwcy5sZW5ndGgpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJywgaSk7XG4gICAgICAgICAgU3dhbC5maXJlKGN1cnJlbnRTdGVwc1tpXSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgcXVldWVSZXN1bHQucHVzaChyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICBzdGVwKGkgKyAxLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNldEFuZFJlc29sdmUocmVzb2x2ZSwge1xuICAgICAgICAgICAgICAgIGRpc21pc3M6IHJlc3VsdC5kaXNtaXNzXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc2V0QW5kUmVzb2x2ZShyZXNvbHZlLCB7XG4gICAgICAgICAgICB2YWx1ZTogcXVldWVSZXN1bHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSkoMCk7XG4gICAgfSk7XG4gIH07XG4gIC8qXG4gICAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgZ2V0dGluZyB0aGUgaW5kZXggb2YgY3VycmVudCBwb3B1cCBpbiBxdWV1ZVxuICAgKi9cblxuICB2YXIgZ2V0UXVldWVTdGVwID0gZnVuY3Rpb24gZ2V0UXVldWVTdGVwKCkge1xuICAgIHJldHVybiBnZXRDb250YWluZXIoKSAmJiBnZXRDb250YWluZXIoKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcXVldWUtc3RlcCcpO1xuICB9O1xuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGluc2VydGluZyBhIHBvcHVwIHRvIHRoZSBxdWV1ZVxuICAgKi9cblxuICB2YXIgaW5zZXJ0UXVldWVTdGVwID0gZnVuY3Rpb24gaW5zZXJ0UXVldWVTdGVwKHN0ZXAsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ICYmIGluZGV4IDwgY3VycmVudFN0ZXBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRTdGVwcy5zcGxpY2UoaW5kZXgsIDAsIHN0ZXApO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50U3RlcHMucHVzaChzdGVwKTtcbiAgfTtcbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIGZvciBkZWxldGluZyBhIHBvcHVwIGZyb20gdGhlIHF1ZXVlXG4gICAqL1xuXG4gIHZhciBkZWxldGVRdWV1ZVN0ZXAgPSBmdW5jdGlvbiBkZWxldGVRdWV1ZVN0ZXAoaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRTdGVwc1tpbmRleF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjdXJyZW50U3RlcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNyZWF0ZVN0ZXBFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlU3RlcEVsZW1lbnQoc3RlcCkge1xuICAgIHZhciBzdGVwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFkZENsYXNzKHN0ZXBFbCwgc3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXAnXSk7XG4gICAgc2V0SW5uZXJIdG1sKHN0ZXBFbCwgc3RlcCk7XG4gICAgcmV0dXJuIHN0ZXBFbDtcbiAgfTtcblxuICB2YXIgY3JlYXRlTGluZUVsZW1lbnQgPSBmdW5jdGlvbiBjcmVhdGVMaW5lRWxlbWVudChwYXJhbXMpIHtcbiAgICB2YXIgbGluZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhZGRDbGFzcyhsaW5lRWwsIHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwLWxpbmUnXSk7XG5cbiAgICBpZiAocGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZSkge1xuICAgICAgbGluZUVsLnN0eWxlLndpZHRoID0gcGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGluZUVsO1xuICB9O1xuXG4gIHZhciByZW5kZXJQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gcmVuZGVyUHJvZ3Jlc3NTdGVwcyhpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIHByb2dyZXNzU3RlcHNDb250YWluZXIgPSBnZXRQcm9ncmVzc1N0ZXBzKCk7XG5cbiAgICBpZiAoIXBhcmFtcy5wcm9ncmVzc1N0ZXBzIHx8IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGhpZGUocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgc2hvdyhwcm9ncmVzc1N0ZXBzQ29udGFpbmVyKTtcbiAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgdmFyIGN1cnJlbnRQcm9ncmVzc1N0ZXAgPSBwYXJzZUludChwYXJhbXMuY3VycmVudFByb2dyZXNzU3RlcCA9PT0gdW5kZWZpbmVkID8gZ2V0UXVldWVTdGVwKCkgOiBwYXJhbXMuY3VycmVudFByb2dyZXNzU3RlcCk7XG5cbiAgICBpZiAoY3VycmVudFByb2dyZXNzU3RlcCA+PSBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGgpIHtcbiAgICAgIHdhcm4oJ0ludmFsaWQgY3VycmVudFByb2dyZXNzU3RlcCBwYXJhbWV0ZXIsIGl0IHNob3VsZCBiZSBsZXNzIHRoYW4gcHJvZ3Jlc3NTdGVwcy5sZW5ndGggJyArICcoY3VycmVudFByb2dyZXNzU3RlcCBsaWtlIEpTIGFycmF5cyBzdGFydHMgZnJvbSAwKScpO1xuICAgIH1cblxuICAgIHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmZvckVhY2goZnVuY3Rpb24gKHN0ZXAsIGluZGV4KSB7XG4gICAgICB2YXIgc3RlcEVsID0gY3JlYXRlU3RlcEVsZW1lbnQoc3RlcCk7XG4gICAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0ZXBFbCk7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gY3VycmVudFByb2dyZXNzU3RlcCkge1xuICAgICAgICBhZGRDbGFzcyhzdGVwRWwsIHN3YWxDbGFzc2VzWydhY3RpdmUtcHJvZ3Jlc3Mtc3RlcCddKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ICE9PSBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHZhciBsaW5lRWwgPSBjcmVhdGVMaW5lRWxlbWVudChwYXJhbXMpO1xuICAgICAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmVFbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJlbmRlclRpdGxlID0gZnVuY3Rpb24gcmVuZGVyVGl0bGUoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciB0aXRsZSA9IGdldFRpdGxlKCk7XG4gICAgdG9nZ2xlKHRpdGxlLCBwYXJhbXMudGl0bGUgfHwgcGFyYW1zLnRpdGxlVGV4dCk7XG5cbiAgICBpZiAocGFyYW1zLnRpdGxlKSB7XG4gICAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMudGl0bGUsIHRpdGxlKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnRpdGxlVGV4dCkge1xuICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gcGFyYW1zLnRpdGxlVGV4dDtcbiAgICB9IC8vIEN1c3RvbSBjbGFzc1xuXG5cbiAgICBhcHBseUN1c3RvbUNsYXNzKHRpdGxlLCBwYXJhbXMsICd0aXRsZScpO1xuICB9O1xuXG4gIHZhciByZW5kZXJIZWFkZXIgPSBmdW5jdGlvbiByZW5kZXJIZWFkZXIoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBoZWFkZXIgPSBnZXRIZWFkZXIoKTsgLy8gQ3VzdG9tIGNsYXNzXG5cbiAgICBhcHBseUN1c3RvbUNsYXNzKGhlYWRlciwgcGFyYW1zLCAnaGVhZGVyJyk7IC8vIFByb2dyZXNzIHN0ZXBzXG5cbiAgICByZW5kZXJQcm9ncmVzc1N0ZXBzKGluc3RhbmNlLCBwYXJhbXMpOyAvLyBJY29uXG5cbiAgICByZW5kZXJJY29uKGluc3RhbmNlLCBwYXJhbXMpOyAvLyBJbWFnZVxuXG4gICAgcmVuZGVySW1hZ2UoaW5zdGFuY2UsIHBhcmFtcyk7IC8vIFRpdGxlXG5cbiAgICByZW5kZXJUaXRsZShpbnN0YW5jZSwgcGFyYW1zKTsgLy8gQ2xvc2UgYnV0dG9uXG5cbiAgICByZW5kZXJDbG9zZUJ1dHRvbihpbnN0YW5jZSwgcGFyYW1zKTtcbiAgfTtcblxuICB2YXIgcmVuZGVyUG9wdXAgPSBmdW5jdGlvbiByZW5kZXJQb3B1cChpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7IC8vIFdpZHRoXG5cbiAgICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgICAvLyAjMjE3MFxuICAgICAgYXBwbHlOdW1lcmljYWxTdHlsZShjb250YWluZXIsICd3aWR0aCcsIHBhcmFtcy53aWR0aCk7XG4gICAgICBwb3B1cC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwbHlOdW1lcmljYWxTdHlsZShwb3B1cCwgJ3dpZHRoJywgcGFyYW1zLndpZHRoKTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgYXBwbHlOdW1lcmljYWxTdHlsZShwb3B1cCwgJ3BhZGRpbmcnLCBwYXJhbXMucGFkZGluZyk7IC8vIEJhY2tncm91bmRcblxuICAgIGlmIChwYXJhbXMuYmFja2dyb3VuZCkge1xuICAgICAgcG9wdXAuc3R5bGUuYmFja2dyb3VuZCA9IHBhcmFtcy5iYWNrZ3JvdW5kO1xuICAgIH0gLy8gQ2xhc3Nlc1xuXG5cbiAgICBhZGRDbGFzc2VzKHBvcHVwLCBwYXJhbXMpO1xuICB9O1xuXG4gIHZhciBhZGRDbGFzc2VzID0gZnVuY3Rpb24gYWRkQ2xhc3Nlcyhwb3B1cCwgcGFyYW1zKSB7XG4gICAgLy8gRGVmYXVsdCBDbGFzcyArIHNob3dDbGFzcyB3aGVuIHVwZGF0aW5nIFN3YWwudXBkYXRlKHt9KVxuICAgIHBvcHVwLmNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHN3YWxDbGFzc2VzLnBvcHVwLCBcIiBcIikuY29uY2F0KGlzVmlzaWJsZShwb3B1cCkgPyBwYXJhbXMuc2hvd0NsYXNzLnBvcHVwIDogJycpO1xuXG4gICAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy50b2FzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5tb2RhbCk7XG4gICAgfSAvLyBDdXN0b20gY2xhc3NcblxuXG4gICAgYXBwbHlDdXN0b21DbGFzcyhwb3B1cCwgcGFyYW1zLCAncG9wdXAnKTtcblxuICAgIGlmICh0eXBlb2YgcGFyYW1zLmN1c3RvbUNsYXNzID09PSAnc3RyaW5nJykge1xuICAgICAgYWRkQ2xhc3MocG9wdXAsIHBhcmFtcy5jdXN0b21DbGFzcyk7XG4gICAgfSAvLyBJY29uIGNsYXNzICgjMTg0MilcblxuXG4gICAgaWYgKHBhcmFtcy5pY29uKSB7XG4gICAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXNbXCJpY29uLVwiLmNvbmNhdChwYXJhbXMuaWNvbildKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgcmVuZGVyUG9wdXAoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyQ29udGFpbmVyKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckhlYWRlcihpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJDb250ZW50KGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckFjdGlvbnMoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyRm9vdGVyKGluc3RhbmNlLCBwYXJhbXMpO1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuZGlkUmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwYXJhbXMuZGlkUmVuZGVyKGdldFBvcHVwKCkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtcy5vblJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGFyYW1zLm9uUmVuZGVyKGdldFBvcHVwKCkpOyAvLyBAZGVwcmVjYXRlZFxuICAgIH1cbiAgfTtcblxuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIFN3ZWV0QWxlcnQyIHBvcHVwIGlzIHNob3duXG4gICAqL1xuXG4gIHZhciBpc1Zpc2libGUkMSA9IGZ1bmN0aW9uIGlzVmlzaWJsZSQkMSgpIHtcbiAgICByZXR1cm4gaXNWaXNpYmxlKGdldFBvcHVwKCkpO1xuICB9O1xuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0NvbmZpcm0nIGJ1dHRvblxuICAgKi9cblxuICB2YXIgY2xpY2tDb25maXJtID0gZnVuY3Rpb24gY2xpY2tDb25maXJtKCkge1xuICAgIHJldHVybiBnZXRDb25maXJtQnV0dG9uKCkgJiYgZ2V0Q29uZmlybUJ1dHRvbigpLmNsaWNrKCk7XG4gIH07XG4gIC8qXG4gICAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnRGVueScgYnV0dG9uXG4gICAqL1xuXG4gIHZhciBjbGlja0RlbnkgPSBmdW5jdGlvbiBjbGlja0RlbnkoKSB7XG4gICAgcmV0dXJuIGdldERlbnlCdXR0b24oKSAmJiBnZXREZW55QnV0dG9uKCkuY2xpY2soKTtcbiAgfTtcbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDYW5jZWwnIGJ1dHRvblxuICAgKi9cblxuICB2YXIgY2xpY2tDYW5jZWwgPSBmdW5jdGlvbiBjbGlja0NhbmNlbCgpIHtcbiAgICByZXR1cm4gZ2V0Q2FuY2VsQnV0dG9uKCkgJiYgZ2V0Q2FuY2VsQnV0dG9uKCkuY2xpY2soKTtcbiAgfTtcblxuICBmdW5jdGlvbiBmaXJlKCkge1xuICAgIHZhciBTd2FsID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NvbnN0cnVjdChTd2FsLCBhcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGV4dGVuZGVkIHZlcnNpb24gb2YgYFN3YWxgIGNvbnRhaW5pbmcgYHBhcmFtc2AgYXMgZGVmYXVsdHMuXG4gICAqIFVzZWZ1bCBmb3IgcmV1c2luZyBTd2FsIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiBCZWZvcmU6XG4gICAqIGNvbnN0IHRleHRQcm9tcHRPcHRpb25zID0geyBpbnB1dDogJ3RleHQnLCBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlIH1cbiAgICogY29uc3Qge3ZhbHVlOiBmaXJzdE5hbWV9ID0gYXdhaXQgU3dhbC5maXJlKHsgLi4udGV4dFByb21wdE9wdGlvbnMsIHRpdGxlOiAnV2hhdCBpcyB5b3VyIGZpcnN0IG5hbWU/JyB9KVxuICAgKiBjb25zdCB7dmFsdWU6IGxhc3ROYW1lfSA9IGF3YWl0IFN3YWwuZmlyZSh7IC4uLnRleHRQcm9tcHRPcHRpb25zLCB0aXRsZTogJ1doYXQgaXMgeW91ciBsYXN0IG5hbWU/JyB9KVxuICAgKlxuICAgKiBBZnRlcjpcbiAgICogY29uc3QgVGV4dFByb21wdCA9IFN3YWwubWl4aW4oeyBpbnB1dDogJ3RleHQnLCBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlIH0pXG4gICAqIGNvbnN0IHt2YWx1ZTogZmlyc3ROYW1lfSA9IGF3YWl0IFRleHRQcm9tcHQoJ1doYXQgaXMgeW91ciBmaXJzdCBuYW1lPycpXG4gICAqIGNvbnN0IHt2YWx1ZTogbGFzdE5hbWV9ID0gYXdhaXQgVGV4dFByb21wdCgnV2hhdCBpcyB5b3VyIGxhc3QgbmFtZT8nKVxuICAgKlxuICAgKiBAcGFyYW0gbWl4aW5QYXJhbXNcbiAgICovXG4gIGZ1bmN0aW9uIG1peGluKG1peGluUGFyYW1zKSB7XG4gICAgdmFyIE1peGluU3dhbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX3RoaXMpIHtcbiAgICAgIF9pbmhlcml0cyhNaXhpblN3YWwsIF90aGlzKTtcblxuICAgICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNaXhpblN3YWwpO1xuXG4gICAgICBmdW5jdGlvbiBNaXhpblN3YWwoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNaXhpblN3YWwpO1xuXG4gICAgICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgX2NyZWF0ZUNsYXNzKE1peGluU3dhbCwgW3tcbiAgICAgICAga2V5OiBcIl9tYWluXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFpbihwYXJhbXMsIHByZXZNaXhpblBhcmFtcykge1xuICAgICAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNaXhpblN3YWwucHJvdG90eXBlKSwgXCJfbWFpblwiLCB0aGlzKS5jYWxsKHRoaXMsIHBhcmFtcywgX2V4dGVuZHMoe30sIHByZXZNaXhpblBhcmFtcywgbWl4aW5QYXJhbXMpKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gTWl4aW5Td2FsO1xuICAgIH0odGhpcyk7XG5cbiAgICByZXR1cm4gTWl4aW5Td2FsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIGxvYWRlciAoc3Bpbm5lciksIHRoaXMgaXMgdXNlZnVsIHdpdGggQUpBWCByZXF1ZXN0cy5cbiAgICogQnkgZGVmYXVsdCB0aGUgbG9hZGVyIGJlIHNob3duIGluc3RlYWQgb2YgdGhlIFwiQ29uZmlybVwiIGJ1dHRvbi5cbiAgICovXG5cbiAgdmFyIHNob3dMb2FkaW5nID0gZnVuY3Rpb24gc2hvd0xvYWRpbmcoYnV0dG9uVG9SZXBsYWNlKSB7XG4gICAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcblxuICAgIGlmICghcG9wdXApIHtcbiAgICAgIFN3YWwuZmlyZSgpO1xuICAgIH1cblxuICAgIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICB2YXIgYWN0aW9ucyA9IGdldEFjdGlvbnMoKTtcbiAgICB2YXIgbG9hZGVyID0gZ2V0TG9hZGVyKCk7XG5cbiAgICBpZiAoIWJ1dHRvblRvUmVwbGFjZSAmJiBpc1Zpc2libGUoZ2V0Q29uZmlybUJ1dHRvbigpKSkge1xuICAgICAgYnV0dG9uVG9SZXBsYWNlID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIH1cblxuICAgIHNob3coYWN0aW9ucyk7XG5cbiAgICBpZiAoYnV0dG9uVG9SZXBsYWNlKSB7XG4gICAgICBoaWRlKGJ1dHRvblRvUmVwbGFjZSk7XG4gICAgICBsb2FkZXIuc2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbi10by1yZXBsYWNlJywgYnV0dG9uVG9SZXBsYWNlLmNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgbG9hZGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxvYWRlciwgYnV0dG9uVG9SZXBsYWNlKTtcbiAgICBhZGRDbGFzcyhbcG9wdXAsIGFjdGlvbnNdLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKTtcbiAgICBzaG93KGxvYWRlcik7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnLCB0cnVlKTtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYnVzeScsIHRydWUpO1xuICAgIHBvcHVwLmZvY3VzKCk7XG4gIH07XG5cbiAgdmFyIFJFU1RPUkVfRk9DVVNfVElNRU9VVCA9IDEwMDtcblxuICB2YXIgZ2xvYmFsU3RhdGUgPSB7fTtcblxuICB2YXIgZm9jdXNQcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBmdW5jdGlvbiBmb2N1c1ByZXZpb3VzQWN0aXZlRWxlbWVudCgpIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50ICYmIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cykge1xuICAgICAgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgIH1cbiAgfTsgLy8gUmVzdG9yZSBwcmV2aW91cyBhY3RpdmUgKGZvY3VzZWQpIGVsZW1lbnRcblxuXG4gIHZhciByZXN0b3JlQWN0aXZlRWxlbWVudCA9IGZ1bmN0aW9uIHJlc3RvcmVBY3RpdmVFbGVtZW50KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgdmFyIHggPSB3aW5kb3cuc2Nyb2xsWDtcbiAgICAgIHZhciB5ID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBnbG9iYWxTdGF0ZS5yZXN0b3JlRm9jdXNUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvY3VzUHJldmlvdXNBY3RpdmVFbGVtZW50KCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIFJFU1RPUkVfRk9DVVNfVElNRU9VVCk7IC8vIGlzc3Vlcy85MDBcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cbiAgICAgIGlmICh0eXBlb2YgeCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIElFIGRvZXNuJ3QgaGF2ZSBzY3JvbGxYL3Njcm9sbFkgc3VwcG9ydFxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeCwgeSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzIHNldCwgcmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICAgKiBPdGhlcndpc2UsIHJldHVybnMgdW5kZWZpbmVkLlxuICAgKi9cblxuICB2YXIgZ2V0VGltZXJMZWZ0ID0gZnVuY3Rpb24gZ2V0VGltZXJMZWZ0KCkge1xuICAgIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0ICYmIGdsb2JhbFN0YXRlLnRpbWVvdXQuZ2V0VGltZXJMZWZ0KCk7XG4gIH07XG4gIC8qKlxuICAgKiBTdG9wIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gICAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gICAqL1xuXG4gIHZhciBzdG9wVGltZXIgPSBmdW5jdGlvbiBzdG9wVGltZXIoKSB7XG4gICAgaWYgKGdsb2JhbFN0YXRlLnRpbWVvdXQpIHtcbiAgICAgIHN0b3BUaW1lclByb2dyZXNzQmFyKCk7XG4gICAgICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dC5zdG9wKCk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogUmVzdW1lIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gICAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gICAqL1xuXG4gIHZhciByZXN1bWVUaW1lciA9IGZ1bmN0aW9uIHJlc3VtZVRpbWVyKCkge1xuICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgICB2YXIgcmVtYWluaW5nID0gZ2xvYmFsU3RhdGUudGltZW91dC5zdGFydCgpO1xuICAgICAgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIocmVtYWluaW5nKTtcbiAgICAgIHJldHVybiByZW1haW5pbmc7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogUmVzdW1lIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gICAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gICAqL1xuXG4gIHZhciB0b2dnbGVUaW1lciA9IGZ1bmN0aW9uIHRvZ2dsZVRpbWVyKCkge1xuICAgIHZhciB0aW1lciA9IGdsb2JhbFN0YXRlLnRpbWVvdXQ7XG4gICAgcmV0dXJuIHRpbWVyICYmICh0aW1lci5ydW5uaW5nID8gc3RvcFRpbWVyKCkgOiByZXN1bWVUaW1lcigpKTtcbiAgfTtcbiAgLyoqXG4gICAqIEluY3JlYXNlIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgYW4gdXBkYXRlZCB0aW1lci5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICovXG5cbiAgdmFyIGluY3JlYXNlVGltZXIgPSBmdW5jdGlvbiBpbmNyZWFzZVRpbWVyKG4pIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgICAgdmFyIHJlbWFpbmluZyA9IGdsb2JhbFN0YXRlLnRpbWVvdXQuaW5jcmVhc2Uobik7XG4gICAgICBhbmltYXRlVGltZXJQcm9ncmVzc0JhcihyZW1haW5pbmcsIHRydWUpO1xuICAgICAgcmV0dXJuIHJlbWFpbmluZztcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aW1lciBpcyBydW5uaW5nLiBSZXR1cm5zIHRydWUgaWYgdGltZXIgaXMgcnVubmluZ1xuICAgKiBvciBmYWxzZSBpZiB0aW1lciBpcyBwYXVzZWQgb3Igc3RvcHBlZC5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZFxuICAgKi9cblxuICB2YXIgaXNUaW1lclJ1bm5pbmcgPSBmdW5jdGlvbiBpc1RpbWVyUnVubmluZygpIHtcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LmlzUnVubmluZygpO1xuICB9O1xuXG4gIHZhciBib2R5Q2xpY2tMaXN0ZW5lckFkZGVkID0gZmFsc2U7XG4gIHZhciBjbGlja0hhbmRsZXJzID0ge307XG4gIGZ1bmN0aW9uIGJpbmRDbGlja0hhbmRsZXIoKSB7XG4gICAgdmFyIGF0dHIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdkYXRhLXN3YWwtdGVtcGxhdGUnO1xuICAgIGNsaWNrSGFuZGxlcnNbYXR0cl0gPSB0aGlzO1xuXG4gICAgaWYgKCFib2R5Q2xpY2tMaXN0ZW5lckFkZGVkKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm9keUNsaWNrTGlzdGVuZXIpO1xuICAgICAgYm9keUNsaWNrTGlzdGVuZXJBZGRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJvZHlDbGlja0xpc3RlbmVyID0gZnVuY3Rpb24gYm9keUNsaWNrTGlzdGVuZXIoZXZlbnQpIHtcbiAgICAvLyAxLiB1c2luZyAucGFyZW50Tm9kZSBpbnN0ZWFkIG9mIGV2ZW50LnBhdGggYmVjYXVzZSBvZiBiZXR0ZXIgc3VwcG9ydCBieSBvbGQgYnJvd3NlcnMgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5MjQ1NjM4XG4gICAgLy8gMi4gdXNpbmcgLnBhcmVudE5vZGUgaW5zdGVhZCBvZiAucGFyZW50RWxlbWVudCBiZWNhdXNlIG9mIElFMTEgKyBTVkcgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM2MjcwMzU0XG4gICAgZm9yICh2YXIgZWwgPSBldmVudC50YXJnZXQ7IGVsICYmIGVsICE9PSBkb2N1bWVudDsgZWwgPSBlbC5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKHZhciBhdHRyIGluIGNsaWNrSGFuZGxlcnMpIHtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gZWwuZ2V0QXR0cmlidXRlKGF0dHIpO1xuXG4gICAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICAgIGNsaWNrSGFuZGxlcnNbYXR0cl0uZmlyZSh7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRQYXJhbXMgPSB7XG4gICAgdGl0bGU6ICcnLFxuICAgIHRpdGxlVGV4dDogJycsXG4gICAgdGV4dDogJycsXG4gICAgaHRtbDogJycsXG4gICAgZm9vdGVyOiAnJyxcbiAgICBpY29uOiB1bmRlZmluZWQsXG4gICAgaWNvbkNvbG9yOiB1bmRlZmluZWQsXG4gICAgaWNvbkh0bWw6IHVuZGVmaW5lZCxcbiAgICB0ZW1wbGF0ZTogdW5kZWZpbmVkLFxuICAgIHRvYXN0OiBmYWxzZSxcbiAgICBhbmltYXRpb246IHRydWUsXG4gICAgc2hvd0NsYXNzOiB7XG4gICAgICBwb3B1cDogJ3N3YWwyLXNob3cnLFxuICAgICAgYmFja2Ryb3A6ICdzd2FsMi1iYWNrZHJvcC1zaG93JyxcbiAgICAgIGljb246ICdzd2FsMi1pY29uLXNob3cnXG4gICAgfSxcbiAgICBoaWRlQ2xhc3M6IHtcbiAgICAgIHBvcHVwOiAnc3dhbDItaGlkZScsXG4gICAgICBiYWNrZHJvcDogJ3N3YWwyLWJhY2tkcm9wLWhpZGUnLFxuICAgICAgaWNvbjogJ3N3YWwyLWljb24taGlkZSdcbiAgICB9LFxuICAgIGN1c3RvbUNsYXNzOiB7fSxcbiAgICB0YXJnZXQ6ICdib2R5JyxcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBoZWlnaHRBdXRvOiB0cnVlLFxuICAgIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgIGFsbG93RXNjYXBlS2V5OiB0cnVlLFxuICAgIGFsbG93RW50ZXJLZXk6IHRydWUsXG4gICAgc3RvcEtleWRvd25Qcm9wYWdhdGlvbjogdHJ1ZSxcbiAgICBrZXlkb3duTGlzdGVuZXJDYXB0dXJlOiBmYWxzZSxcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcbiAgICBzaG93RGVueUJ1dHRvbjogZmFsc2UsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gICAgcHJlQ29uZmlybTogdW5kZWZpbmVkLFxuICAgIHByZURlbnk6IHVuZGVmaW5lZCxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICBjb25maXJtQnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6IHVuZGVmaW5lZCxcbiAgICBkZW55QnV0dG9uVGV4dDogJ05vJyxcbiAgICBkZW55QnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgICBkZW55QnV0dG9uQ29sb3I6IHVuZGVmaW5lZCxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6ICcnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiB1bmRlZmluZWQsXG4gICAgYnV0dG9uc1N0eWxpbmc6IHRydWUsXG4gICAgcmV2ZXJzZUJ1dHRvbnM6IGZhbHNlLFxuICAgIGZvY3VzQ29uZmlybTogdHJ1ZSxcbiAgICBmb2N1c0Rlbnk6IGZhbHNlLFxuICAgIGZvY3VzQ2FuY2VsOiBmYWxzZSxcbiAgICBzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxuICAgIGNsb3NlQnV0dG9uSHRtbDogJyZ0aW1lczsnLFxuICAgIGNsb3NlQnV0dG9uQXJpYUxhYmVsOiAnQ2xvc2UgdGhpcyBkaWFsb2cnLFxuICAgIGxvYWRlckh0bWw6ICcnLFxuICAgIHNob3dMb2FkZXJPbkNvbmZpcm06IGZhbHNlLFxuICAgIHNob3dMb2FkZXJPbkRlbnk6IGZhbHNlLFxuICAgIGltYWdlVXJsOiB1bmRlZmluZWQsXG4gICAgaW1hZ2VXaWR0aDogdW5kZWZpbmVkLFxuICAgIGltYWdlSGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgaW1hZ2VBbHQ6ICcnLFxuICAgIHRpbWVyOiB1bmRlZmluZWQsXG4gICAgdGltZXJQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICBwYWRkaW5nOiB1bmRlZmluZWQsXG4gICAgYmFja2dyb3VuZDogdW5kZWZpbmVkLFxuICAgIGlucHV0OiB1bmRlZmluZWQsXG4gICAgaW5wdXRQbGFjZWhvbGRlcjogJycsXG4gICAgaW5wdXRMYWJlbDogJycsXG4gICAgaW5wdXRWYWx1ZTogJycsXG4gICAgaW5wdXRPcHRpb25zOiB7fSxcbiAgICBpbnB1dEF1dG9UcmltOiB0cnVlLFxuICAgIGlucHV0QXR0cmlidXRlczoge30sXG4gICAgaW5wdXRWYWxpZGF0b3I6IHVuZGVmaW5lZCxcbiAgICByZXR1cm5JbnB1dFZhbHVlT25EZW55OiBmYWxzZSxcbiAgICB2YWxpZGF0aW9uTWVzc2FnZTogdW5kZWZpbmVkLFxuICAgIGdyb3c6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICBwcm9ncmVzc1N0ZXBzOiBbXSxcbiAgICBjdXJyZW50UHJvZ3Jlc3NTdGVwOiB1bmRlZmluZWQsXG4gICAgcHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlOiB1bmRlZmluZWQsXG4gICAgb25CZWZvcmVPcGVuOiB1bmRlZmluZWQsXG4gICAgb25PcGVuOiB1bmRlZmluZWQsXG4gICAgd2lsbE9wZW46IHVuZGVmaW5lZCxcbiAgICBkaWRPcGVuOiB1bmRlZmluZWQsXG4gICAgb25SZW5kZXI6IHVuZGVmaW5lZCxcbiAgICBkaWRSZW5kZXI6IHVuZGVmaW5lZCxcbiAgICBvbkNsb3NlOiB1bmRlZmluZWQsXG4gICAgb25BZnRlckNsb3NlOiB1bmRlZmluZWQsXG4gICAgd2lsbENsb3NlOiB1bmRlZmluZWQsXG4gICAgZGlkQ2xvc2U6IHVuZGVmaW5lZCxcbiAgICBvbkRlc3Ryb3k6IHVuZGVmaW5lZCxcbiAgICBkaWREZXN0cm95OiB1bmRlZmluZWQsXG4gICAgc2Nyb2xsYmFyUGFkZGluZzogdHJ1ZVxuICB9O1xuICB2YXIgdXBkYXRhYmxlUGFyYW1zID0gWydhbGxvd0VzY2FwZUtleScsICdhbGxvd091dHNpZGVDbGljaycsICdiYWNrZ3JvdW5kJywgJ2J1dHRvbnNTdHlsaW5nJywgJ2NhbmNlbEJ1dHRvbkFyaWFMYWJlbCcsICdjYW5jZWxCdXR0b25Db2xvcicsICdjYW5jZWxCdXR0b25UZXh0JywgJ2Nsb3NlQnV0dG9uQXJpYUxhYmVsJywgJ2Nsb3NlQnV0dG9uSHRtbCcsICdjb25maXJtQnV0dG9uQXJpYUxhYmVsJywgJ2NvbmZpcm1CdXR0b25Db2xvcicsICdjb25maXJtQnV0dG9uVGV4dCcsICdjdXJyZW50UHJvZ3Jlc3NTdGVwJywgJ2N1c3RvbUNsYXNzJywgJ2RlbnlCdXR0b25BcmlhTGFiZWwnLCAnZGVueUJ1dHRvbkNvbG9yJywgJ2RlbnlCdXR0b25UZXh0JywgJ2RpZENsb3NlJywgJ2RpZERlc3Ryb3knLCAnZm9vdGVyJywgJ2hpZGVDbGFzcycsICdodG1sJywgJ2ljb24nLCAnaWNvbkNvbG9yJywgJ2ltYWdlQWx0JywgJ2ltYWdlSGVpZ2h0JywgJ2ltYWdlVXJsJywgJ2ltYWdlV2lkdGgnLCAnb25BZnRlckNsb3NlJywgJ29uQ2xvc2UnLCAnb25EZXN0cm95JywgJ3Byb2dyZXNzU3RlcHMnLCAncmV2ZXJzZUJ1dHRvbnMnLCAnc2hvd0NhbmNlbEJ1dHRvbicsICdzaG93Q2xvc2VCdXR0b24nLCAnc2hvd0NvbmZpcm1CdXR0b24nLCAnc2hvd0RlbnlCdXR0b24nLCAndGV4dCcsICd0aXRsZScsICd0aXRsZVRleHQnLCAnd2lsbENsb3NlJ107XG4gIHZhciBkZXByZWNhdGVkUGFyYW1zID0ge1xuICAgIGFuaW1hdGlvbjogJ3Nob3dDbGFzc1wiIGFuZCBcImhpZGVDbGFzcycsXG4gICAgb25CZWZvcmVPcGVuOiAnd2lsbE9wZW4nLFxuICAgIG9uT3BlbjogJ2RpZE9wZW4nLFxuICAgIG9uUmVuZGVyOiAnZGlkUmVuZGVyJyxcbiAgICBvbkNsb3NlOiAnd2lsbENsb3NlJyxcbiAgICBvbkFmdGVyQ2xvc2U6ICdkaWRDbG9zZScsXG4gICAgb25EZXN0cm95OiAnZGlkRGVzdHJveSdcbiAgfTtcbiAgdmFyIHRvYXN0SW5jb21wYXRpYmxlUGFyYW1zID0gWydhbGxvd091dHNpZGVDbGljaycsICdhbGxvd0VudGVyS2V5JywgJ2JhY2tkcm9wJywgJ2ZvY3VzQ29uZmlybScsICdmb2N1c0RlbnknLCAnZm9jdXNDYW5jZWwnLCAnaGVpZ2h0QXV0bycsICdrZXlkb3duTGlzdGVuZXJDYXB0dXJlJ107XG4gIC8qKlxuICAgKiBJcyB2YWxpZCBwYXJhbWV0ZXJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZVxuICAgKi9cblxuICB2YXIgaXNWYWxpZFBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzVmFsaWRQYXJhbWV0ZXIocGFyYW1OYW1lKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZWZhdWx0UGFyYW1zLCBwYXJhbU5hbWUpO1xuICB9O1xuICAvKipcbiAgICogSXMgdmFsaWQgcGFyYW1ldGVyIGZvciBTd2FsLnVwZGF0ZSgpIG1ldGhvZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lXG4gICAqL1xuXG4gIHZhciBpc1VwZGF0YWJsZVBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzVXBkYXRhYmxlUGFyYW1ldGVyKHBhcmFtTmFtZSkge1xuICAgIHJldHVybiB1cGRhdGFibGVQYXJhbXMuaW5kZXhPZihwYXJhbU5hbWUpICE9PSAtMTtcbiAgfTtcbiAgLyoqXG4gICAqIElzIGRlcHJlY2F0ZWQgcGFyYW1ldGVyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAgICovXG5cbiAgdmFyIGlzRGVwcmVjYXRlZFBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzRGVwcmVjYXRlZFBhcmFtZXRlcihwYXJhbU5hbWUpIHtcbiAgICByZXR1cm4gZGVwcmVjYXRlZFBhcmFtc1twYXJhbU5hbWVdO1xuICB9O1xuXG4gIHZhciBjaGVja0lmUGFyYW1Jc1ZhbGlkID0gZnVuY3Rpb24gY2hlY2tJZlBhcmFtSXNWYWxpZChwYXJhbSkge1xuICAgIGlmICghaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgIHdhcm4oXCJVbmtub3duIHBhcmFtZXRlciBcXFwiXCIuY29uY2F0KHBhcmFtLCBcIlxcXCJcIikpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY2hlY2tJZlRvYXN0UGFyYW1Jc1ZhbGlkID0gZnVuY3Rpb24gY2hlY2tJZlRvYXN0UGFyYW1Jc1ZhbGlkKHBhcmFtKSB7XG4gICAgaWYgKHRvYXN0SW5jb21wYXRpYmxlUGFyYW1zLmluZGV4T2YocGFyYW0pICE9PSAtMSkge1xuICAgICAgd2FybihcIlRoZSBwYXJhbWV0ZXIgXFxcIlwiLmNvbmNhdChwYXJhbSwgXCJcXFwiIGlzIGluY29tcGF0aWJsZSB3aXRoIHRvYXN0c1wiKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQgPSBmdW5jdGlvbiBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQocGFyYW0pIHtcbiAgICBpZiAoaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgd2FybkFib3V0RGVwcmVjYXRpb24ocGFyYW0sIGlzRGVwcmVjYXRlZFBhcmFtZXRlcihwYXJhbSkpO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFNob3cgcmVsZXZhbnQgd2FybmluZ3MgZm9yIGdpdmVuIHBhcmFtc1xuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zXG4gICAqL1xuXG5cbiAgdmFyIHNob3dXYXJuaW5nc0ZvclBhcmFtcyA9IGZ1bmN0aW9uIHNob3dXYXJuaW5nc0ZvclBhcmFtcyhwYXJhbXMpIHtcbiAgICBmb3IgKHZhciBwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICAgIGNoZWNrSWZQYXJhbUlzVmFsaWQocGFyYW0pO1xuXG4gICAgICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgICAgIGNoZWNrSWZUb2FzdFBhcmFtSXNWYWxpZChwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIGNoZWNrSWZQYXJhbUlzRGVwcmVjYXRlZChwYXJhbSk7XG4gICAgfVxuICB9O1xuXG5cblxuICB2YXIgc3RhdGljTWV0aG9kcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBpc1ZhbGlkUGFyYW1ldGVyOiBpc1ZhbGlkUGFyYW1ldGVyLFxuICAgIGlzVXBkYXRhYmxlUGFyYW1ldGVyOiBpc1VwZGF0YWJsZVBhcmFtZXRlcixcbiAgICBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXI6IGlzRGVwcmVjYXRlZFBhcmFtZXRlcixcbiAgICBhcmdzVG9QYXJhbXM6IGFyZ3NUb1BhcmFtcyxcbiAgICBpc1Zpc2libGU6IGlzVmlzaWJsZSQxLFxuICAgIGNsaWNrQ29uZmlybTogY2xpY2tDb25maXJtLFxuICAgIGNsaWNrRGVueTogY2xpY2tEZW55LFxuICAgIGNsaWNrQ2FuY2VsOiBjbGlja0NhbmNlbCxcbiAgICBnZXRDb250YWluZXI6IGdldENvbnRhaW5lcixcbiAgICBnZXRQb3B1cDogZ2V0UG9wdXAsXG4gICAgZ2V0VGl0bGU6IGdldFRpdGxlLFxuICAgIGdldENvbnRlbnQ6IGdldENvbnRlbnQsXG4gICAgZ2V0SHRtbENvbnRhaW5lcjogZ2V0SHRtbENvbnRhaW5lcixcbiAgICBnZXRJbWFnZTogZ2V0SW1hZ2UsXG4gICAgZ2V0SWNvbjogZ2V0SWNvbixcbiAgICBnZXRJY29uczogZ2V0SWNvbnMsXG4gICAgZ2V0SW5wdXRMYWJlbDogZ2V0SW5wdXRMYWJlbCxcbiAgICBnZXRDbG9zZUJ1dHRvbjogZ2V0Q2xvc2VCdXR0b24sXG4gICAgZ2V0QWN0aW9uczogZ2V0QWN0aW9ucyxcbiAgICBnZXRDb25maXJtQnV0dG9uOiBnZXRDb25maXJtQnV0dG9uLFxuICAgIGdldERlbnlCdXR0b246IGdldERlbnlCdXR0b24sXG4gICAgZ2V0Q2FuY2VsQnV0dG9uOiBnZXRDYW5jZWxCdXR0b24sXG4gICAgZ2V0TG9hZGVyOiBnZXRMb2FkZXIsXG4gICAgZ2V0SGVhZGVyOiBnZXRIZWFkZXIsXG4gICAgZ2V0Rm9vdGVyOiBnZXRGb290ZXIsXG4gICAgZ2V0VGltZXJQcm9ncmVzc0JhcjogZ2V0VGltZXJQcm9ncmVzc0JhcixcbiAgICBnZXRGb2N1c2FibGVFbGVtZW50czogZ2V0Rm9jdXNhYmxlRWxlbWVudHMsXG4gICAgZ2V0VmFsaWRhdGlvbk1lc3NhZ2U6IGdldFZhbGlkYXRpb25NZXNzYWdlLFxuICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxuICAgIGZpcmU6IGZpcmUsXG4gICAgbWl4aW46IG1peGluLFxuICAgIHF1ZXVlOiBxdWV1ZSxcbiAgICBnZXRRdWV1ZVN0ZXA6IGdldFF1ZXVlU3RlcCxcbiAgICBpbnNlcnRRdWV1ZVN0ZXA6IGluc2VydFF1ZXVlU3RlcCxcbiAgICBkZWxldGVRdWV1ZVN0ZXA6IGRlbGV0ZVF1ZXVlU3RlcCxcbiAgICBzaG93TG9hZGluZzogc2hvd0xvYWRpbmcsXG4gICAgZW5hYmxlTG9hZGluZzogc2hvd0xvYWRpbmcsXG4gICAgZ2V0VGltZXJMZWZ0OiBnZXRUaW1lckxlZnQsXG4gICAgc3RvcFRpbWVyOiBzdG9wVGltZXIsXG4gICAgcmVzdW1lVGltZXI6IHJlc3VtZVRpbWVyLFxuICAgIHRvZ2dsZVRpbWVyOiB0b2dnbGVUaW1lcixcbiAgICBpbmNyZWFzZVRpbWVyOiBpbmNyZWFzZVRpbWVyLFxuICAgIGlzVGltZXJSdW5uaW5nOiBpc1RpbWVyUnVubmluZyxcbiAgICBiaW5kQ2xpY2tIYW5kbGVyOiBiaW5kQ2xpY2tIYW5kbGVyXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBIaWRlcyBsb2FkZXIgYW5kIHNob3dzIGJhY2sgdGhlIGJ1dHRvbiB3aGljaCB3YXMgaGlkZGVuIGJ5IC5zaG93TG9hZGluZygpXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGhpZGVMb2FkaW5nKCkge1xuICAgIC8vIGRvIG5vdGhpbmcgaWYgcG9wdXAgaXMgY2xvc2VkXG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcblxuICAgIGlmICghaW5uZXJQYXJhbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICAgIGhpZGUoZG9tQ2FjaGUubG9hZGVyKTtcbiAgICB2YXIgYnV0dG9uVG9SZXBsYWNlID0gZG9tQ2FjaGUucG9wdXAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShkb21DYWNoZS5sb2FkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbi10by1yZXBsYWNlJykpO1xuXG4gICAgaWYgKGJ1dHRvblRvUmVwbGFjZS5sZW5ndGgpIHtcbiAgICAgIHNob3coYnV0dG9uVG9SZXBsYWNlWzBdLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgfSBlbHNlIGlmIChhbGxCdXR0b25zQXJlSGlkZGVuKCkpIHtcbiAgICAgIGhpZGUoZG9tQ2FjaGUuYWN0aW9ucyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2xhc3MoW2RvbUNhY2hlLnBvcHVwLCBkb21DYWNoZS5hY3Rpb25zXSwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gICAgZG9tQ2FjaGUucG9wdXAucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWJ1c3knKTtcbiAgICBkb21DYWNoZS5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBkb21DYWNoZS5kZW55QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbnB1dCQxKGluc3RhbmNlKSB7XG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSB8fCB0aGlzKTtcbiAgICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KGluc3RhbmNlIHx8IHRoaXMpO1xuXG4gICAgaWYgKCFkb21DYWNoZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldElucHV0KGRvbUNhY2hlLmNvbnRlbnQsIGlubmVyUGFyYW1zLmlucHV0KTtcbiAgfVxuXG4gIHZhciBmaXhTY3JvbGxiYXIgPSBmdW5jdGlvbiBmaXhTY3JvbGxiYXIoKSB7XG4gICAgLy8gZm9yIHF1ZXVlcywgZG8gbm90IGRvIHRoaXMgbW9yZSB0aGFuIG9uY2VcbiAgICBpZiAoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIGlmIHRoZSBib2R5IGhhcyBvdmVyZmxvd1xuXG5cbiAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgIC8vIGFkZCBwYWRkaW5nIHNvIHRoZSBjb250ZW50IGRvZXNuJ3Qgc2hpZnQgYWZ0ZXIgcmVtb3ZhbCBvZiBzY3JvbGxiYXJcbiAgICAgIHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIi5jb25jYXQoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgKyBtZWFzdXJlU2Nyb2xsYmFyKCksIFwicHhcIik7XG4gICAgfVxuICB9O1xuICB2YXIgdW5kb1Njcm9sbGJhciA9IGZ1bmN0aW9uIHVuZG9TY3JvbGxiYXIoKSB7XG4gICAgaWYgKHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCIuY29uY2F0KHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nLCBcInB4XCIpO1xuICAgICAgc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZmlsZSAqL1xuXG4gIHZhciBpT1NmaXggPSBmdW5jdGlvbiBpT1NmaXgoKSB7XG4gICAgdmFyIGlPUyA9IC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW0gfHwgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDE7XG5cbiAgICBpZiAoaU9TICYmICFoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IFwiXCIuY29uY2F0KG9mZnNldCAqIC0xLCBcInB4XCIpO1xuICAgICAgYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KTtcbiAgICAgIGxvY2tCb2R5U2Nyb2xsKCk7XG4gICAgICBhZGRCb3R0b21QYWRkaW5nRm9yVGFsbFBvcHVwcygpOyAvLyAjMTk0OFxuICAgIH1cbiAgfTtcblxuICB2YXIgYWRkQm90dG9tUGFkZGluZ0ZvclRhbGxQb3B1cHMgPSBmdW5jdGlvbiBhZGRCb3R0b21QYWRkaW5nRm9yVGFsbFBvcHVwcygpIHtcbiAgICB2YXIgc2FmYXJpID0gIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhDcmlPU3xGeGlPU3xFZGdpT1N8WWFCcm93c2VyfFVDQnJvd3NlcikvaSk7XG5cbiAgICBpZiAoc2FmYXJpKSB7XG4gICAgICB2YXIgYm90dG9tUGFuZWxIZWlnaHQgPSA0NDtcblxuICAgICAgaWYgKGdldFBvcHVwKCkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0IC0gYm90dG9tUGFuZWxIZWlnaHQpIHtcbiAgICAgICAgZ2V0Q29udGFpbmVyKCkuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiXCIuY29uY2F0KGJvdHRvbVBhbmVsSGVpZ2h0LCBcInB4XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgbG9ja0JvZHlTY3JvbGwgPSBmdW5jdGlvbiBsb2NrQm9keVNjcm9sbCgpIHtcbiAgICAvLyAjMTI0NlxuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICB2YXIgcHJldmVudFRvdWNoTW92ZTtcblxuICAgIGNvbnRhaW5lci5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcHJldmVudFRvdWNoTW92ZSA9IHNob3VsZFByZXZlbnRUb3VjaE1vdmUoZSk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAocHJldmVudFRvdWNoTW92ZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgc2hvdWxkUHJldmVudFRvdWNoTW92ZSA9IGZ1bmN0aW9uIHNob3VsZFByZXZlbnRUb3VjaE1vdmUoZXZlbnQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcblxuICAgIGlmIChpc1N0eWx5cyhldmVudCkgfHwgaXNab29tKGV2ZW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQgPT09IGNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFpc1Njcm9sbGFibGUoY29udGFpbmVyKSAmJiB0YXJnZXQudGFnTmFtZSAhPT0gJ0lOUFVUJyAmJiAvLyAjMTYwM1xuICAgICEoaXNTY3JvbGxhYmxlKGdldENvbnRlbnQoKSkgJiYgLy8gIzE5NDRcbiAgICBnZXRDb250ZW50KCkuY29udGFpbnModGFyZ2V0KSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICB2YXIgaXNTdHlseXMgPSBmdW5jdGlvbiBpc1N0eWx5cyhldmVudCkge1xuICAgIC8vICMxNzg2XG4gICAgcmV0dXJuIGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggJiYgZXZlbnQudG91Y2hlc1swXS50b3VjaFR5cGUgPT09ICdzdHlsdXMnO1xuICB9O1xuXG4gIHZhciBpc1pvb20gPSBmdW5jdGlvbiBpc1pvb20oZXZlbnQpIHtcbiAgICAvLyAjMTg5MVxuICAgIHJldHVybiBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMTtcbiAgfTtcblxuICB2YXIgdW5kb0lPU2ZpeCA9IGZ1bmN0aW9uIHVuZG9JT1NmaXgoKSB7XG4gICAgaWYgKGhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICAgIHZhciBvZmZzZXQgPSBwYXJzZUludChkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCwgMTApO1xuICAgICAgcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gJyc7XG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IG9mZnNldCAqIC0xO1xuICAgIH1cbiAgfTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZmlsZSAqL1xuXG4gIHZhciBpc0lFMTEgPSBmdW5jdGlvbiBpc0lFMTEoKSB7XG4gICAgcmV0dXJuICEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuICB9OyAvLyBGaXggSUUxMSBjZW50ZXJpbmcgc3dlZXRhbGVydDIvaXNzdWVzLzkzM1xuXG5cbiAgdmFyIGZpeFZlcnRpY2FsUG9zaXRpb25JRSA9IGZ1bmN0aW9uIGZpeFZlcnRpY2FsUG9zaXRpb25JRSgpIHtcbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBjb250YWluZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2FsaWduLWl0ZW1zJyk7XG5cbiAgICBpZiAocG9wdXAub2Zmc2V0VG9wIDwgMCkge1xuICAgICAgY29udGFpbmVyLnN0eWxlLmFsaWduSXRlbXMgPSAnZmxleC1zdGFydCc7XG4gICAgfVxuICB9O1xuXG4gIHZhciBJRWZpeCA9IGZ1bmN0aW9uIElFZml4KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBpc0lFMTEoKSkge1xuICAgICAgZml4VmVydGljYWxQb3NpdGlvbklFKCk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4VmVydGljYWxQb3NpdGlvbklFKTtcbiAgICB9XG4gIH07XG4gIHZhciB1bmRvSUVmaXggPSBmdW5jdGlvbiB1bmRvSUVmaXgoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGlzSUUxMSgpKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4VmVydGljYWxQb3NpdGlvbklFKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQWRkaW5nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRvIGVsZW1lbnRzIG91dHNpZGUgb2YgdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgZW5zdXJlcyB0aGF0XG4gIC8vIGVsZW1lbnRzIG5vdCB3aXRoaW4gdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgd2lsbCBub3QgYmUgc3VyZmFjZWQgaWYgYSB1c2VyIG9wZW5zIGEgc2NyZWVuXG4gIC8vIHJlYWRlcuKAmXMgbGlzdCBvZiBlbGVtZW50cyAoaGVhZGluZ3MsIGZvcm0gY29udHJvbHMsIGxhbmRtYXJrcywgZXRjLikgaW4gdGhlIGRvY3VtZW50LlxuXG4gIHZhciBzZXRBcmlhSGlkZGVuID0gZnVuY3Rpb24gc2V0QXJpYUhpZGRlbigpIHtcbiAgICB2YXIgYm9keUNoaWxkcmVuID0gdG9BcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAgICBib2R5Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGlmIChlbCA9PT0gZ2V0Q29udGFpbmVyKCkgfHwgY29udGFpbnMoZWwsIGdldENvbnRhaW5lcigpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJywgZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKTtcbiAgICAgIH1cblxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgfSk7XG4gIH07XG4gIHZhciB1bnNldEFyaWFIaWRkZW4gPSBmdW5jdGlvbiB1bnNldEFyaWFIaWRkZW4oKSB7XG4gICAgdmFyIGJvZHlDaGlsZHJlbiA9IHRvQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gICAgYm9keUNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpKTtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgbW9kdWxlIGNvbnRhaW50cyBgV2Vha01hcGBzIGZvciBlYWNoIGVmZmVjdGl2ZWx5LVwicHJpdmF0ZSAgcHJvcGVydHlcIiB0aGF0IGEgYFN3YWxgIGhhcy5cbiAgICogRm9yIGV4YW1wbGUsIHRvIHNldCB0aGUgcHJpdmF0ZSBwcm9wZXJ0eSBcImZvb1wiIG9mIGB0aGlzYCB0byBcImJhclwiLCB5b3UgY2FuIGBwcml2YXRlUHJvcHMuZm9vLnNldCh0aGlzLCAnYmFyJylgXG4gICAqIFRoaXMgaXMgdGhlIGFwcHJvYWNoIHRoYXQgQmFiZWwgd2lsbCBwcm9iYWJseSB0YWtlIHRvIGltcGxlbWVudCBwcml2YXRlIG1ldGhvZHMvZmllbGRzXG4gICAqICAgaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJpdmF0ZS1tZXRob2RzXG4gICAqICAgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL3B1bGwvNzU1NVxuICAgKiBPbmNlIHdlIGhhdmUgdGhlIGNoYW5nZXMgZnJvbSB0aGF0IFBSIGluIEJhYmVsLCBhbmQgb3VyIGNvcmUgY2xhc3MgZml0cyByZWFzb25hYmxlIGluICpvbmUgbW9kdWxlKlxuICAgKiAgIHRoZW4gd2UgY2FuIHVzZSB0aGF0IGxhbmd1YWdlIGZlYXR1cmUuXG4gICAqL1xuICB2YXIgcHJpdmF0ZU1ldGhvZHMgPSB7XG4gICAgc3dhbFByb21pc2VSZXNvbHZlOiBuZXcgV2Vha01hcCgpXG4gIH07XG5cbiAgLypcbiAgICogSW5zdGFuY2UgbWV0aG9kIHRvIGNsb3NlIHN3ZWV0QWxlcnRcbiAgICovXG5cbiAgZnVuY3Rpb24gcmVtb3ZlUG9wdXBBbmRSZXNldFN0YXRlKGluc3RhbmNlLCBjb250YWluZXIsIGlzVG9hc3QkJDEsIGRpZENsb3NlKSB7XG4gICAgaWYgKGlzVG9hc3QkJDEpIHtcbiAgICAgIHRyaWdnZXJEaWRDbG9zZUFuZERpc3Bvc2UoaW5zdGFuY2UsIGRpZENsb3NlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdG9yZUFjdGl2ZUVsZW1lbnQoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRyaWdnZXJEaWRDbG9zZUFuZERpc3Bvc2UoaW5zdGFuY2UsIGRpZENsb3NlKTtcbiAgICAgIH0pO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5lci5wYXJlbnROb2RlICYmICFkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJykpIHtcbiAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgaWYgKGlzTW9kYWwoKSkge1xuICAgICAgdW5kb1Njcm9sbGJhcigpO1xuICAgICAgdW5kb0lPU2ZpeCgpO1xuICAgICAgdW5kb0lFZml4KCk7XG4gICAgICB1bnNldEFyaWFIaWRkZW4oKTtcbiAgICB9XG5cbiAgICByZW1vdmVCb2R5Q2xhc3NlcygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQm9keUNsYXNzZXMoKSB7XG4gICAgcmVtb3ZlQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIFtzd2FsQ2xhc3Nlcy5zaG93biwgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10sIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSwgc3dhbENsYXNzZXNbJ3RvYXN0LWNvbHVtbiddXSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZShyZXNvbHZlVmFsdWUpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gICAgaWYgKCFwb3B1cCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlc29sdmVWYWx1ZSA9IHByZXBhcmVSZXNvbHZlVmFsdWUocmVzb2x2ZVZhbHVlKTtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuXG4gICAgaWYgKCFpbm5lclBhcmFtcyB8fCBoYXNDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLnBvcHVwKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzd2FsUHJvbWlzZVJlc29sdmUgPSBwcml2YXRlTWV0aG9kcy5zd2FsUHJvbWlzZVJlc29sdmUuZ2V0KHRoaXMpO1xuICAgIHJlbW92ZUNsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5zaG93Q2xhc3MucG9wdXApO1xuICAgIGFkZENsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApO1xuICAgIHZhciBiYWNrZHJvcCA9IGdldENvbnRhaW5lcigpO1xuICAgIHJlbW92ZUNsYXNzKGJhY2tkcm9wLCBpbm5lclBhcmFtcy5zaG93Q2xhc3MuYmFja2Ryb3ApO1xuICAgIGFkZENsYXNzKGJhY2tkcm9wLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MuYmFja2Ryb3ApO1xuICAgIGhhbmRsZVBvcHVwQW5pbWF0aW9uKHRoaXMsIHBvcHVwLCBpbm5lclBhcmFtcyk7IC8vIFJlc29sdmUgU3dhbCBwcm9taXNlXG5cbiAgICBzd2FsUHJvbWlzZVJlc29sdmUocmVzb2x2ZVZhbHVlKTtcbiAgfVxuXG4gIHZhciBwcmVwYXJlUmVzb2x2ZVZhbHVlID0gZnVuY3Rpb24gcHJlcGFyZVJlc29sdmVWYWx1ZShyZXNvbHZlVmFsdWUpIHtcbiAgICAvLyBXaGVuIHVzZXIgY2FsbHMgU3dhbC5jbG9zZSgpXG4gICAgaWYgKHR5cGVvZiByZXNvbHZlVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0NvbmZpcm1lZDogZmFsc2UsXG4gICAgICAgIGlzRGVuaWVkOiBmYWxzZSxcbiAgICAgICAgaXNEaXNtaXNzZWQ6IHRydWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGlzQ29uZmlybWVkOiBmYWxzZSxcbiAgICAgIGlzRGVuaWVkOiBmYWxzZSxcbiAgICAgIGlzRGlzbWlzc2VkOiBmYWxzZVxuICAgIH0sIHJlc29sdmVWYWx1ZSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZVBvcHVwQW5pbWF0aW9uID0gZnVuY3Rpb24gaGFuZGxlUG9wdXBBbmltYXRpb24oaW5zdGFuY2UsIHBvcHVwLCBpbm5lclBhcmFtcykge1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTsgLy8gSWYgYW5pbWF0aW9uIGlzIHN1cHBvcnRlZCwgYW5pbWF0ZVxuXG4gICAgdmFyIGFuaW1hdGlvbklzU3VwcG9ydGVkID0gYW5pbWF0aW9uRW5kRXZlbnQgJiYgaGFzQ3NzQW5pbWF0aW9uKHBvcHVwKTtcbiAgICB2YXIgb25DbG9zZSA9IGlubmVyUGFyYW1zLm9uQ2xvc2UsXG4gICAgICAgIG9uQWZ0ZXJDbG9zZSA9IGlubmVyUGFyYW1zLm9uQWZ0ZXJDbG9zZSxcbiAgICAgICAgd2lsbENsb3NlID0gaW5uZXJQYXJhbXMud2lsbENsb3NlLFxuICAgICAgICBkaWRDbG9zZSA9IGlubmVyUGFyYW1zLmRpZENsb3NlO1xuICAgIHJ1bkRpZENsb3NlKHBvcHVwLCB3aWxsQ2xvc2UsIG9uQ2xvc2UpO1xuXG4gICAgaWYgKGFuaW1hdGlvbklzU3VwcG9ydGVkKSB7XG4gICAgICBhbmltYXRlUG9wdXAoaW5zdGFuY2UsIHBvcHVwLCBjb250YWluZXIsIGRpZENsb3NlIHx8IG9uQWZ0ZXJDbG9zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgcmVtb3ZlIGltbWVkaWF0ZWx5XG4gICAgICByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoaW5zdGFuY2UsIGNvbnRhaW5lciwgaXNUb2FzdCgpLCBkaWRDbG9zZSB8fCBvbkFmdGVyQ2xvc2UpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcnVuRGlkQ2xvc2UgPSBmdW5jdGlvbiBydW5EaWRDbG9zZShwb3B1cCwgd2lsbENsb3NlLCBvbkNsb3NlKSB7XG4gICAgaWYgKHdpbGxDbG9zZSAhPT0gbnVsbCAmJiB0eXBlb2Ygd2lsbENsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB3aWxsQ2xvc2UocG9wdXApO1xuICAgIH0gZWxzZSBpZiAob25DbG9zZSAhPT0gbnVsbCAmJiB0eXBlb2Ygb25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb25DbG9zZShwb3B1cCk7IC8vIEBkZXByZWNhdGVkXG4gICAgfVxuICB9O1xuXG4gIHZhciBhbmltYXRlUG9wdXAgPSBmdW5jdGlvbiBhbmltYXRlUG9wdXAoaW5zdGFuY2UsIHBvcHVwLCBjb250YWluZXIsIGRpZENsb3NlKSB7XG4gICAgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrID0gcmVtb3ZlUG9wdXBBbmRSZXNldFN0YXRlLmJpbmQobnVsbCwgaW5zdGFuY2UsIGNvbnRhaW5lciwgaXNUb2FzdCgpLCBkaWRDbG9zZSk7XG4gICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gcG9wdXApIHtcbiAgICAgICAgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKCk7XG4gICAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2s7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHRyaWdnZXJEaWRDbG9zZUFuZERpc3Bvc2UgPSBmdW5jdGlvbiB0cmlnZ2VyRGlkQ2xvc2VBbmREaXNwb3NlKGluc3RhbmNlLCBkaWRDbG9zZSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHR5cGVvZiBkaWRDbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkaWRDbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICBpbnN0YW5jZS5fZGVzdHJveSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNldEJ1dHRvbnNEaXNhYmxlZChpbnN0YW5jZSwgYnV0dG9ucywgZGlzYWJsZWQpIHtcbiAgICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KGluc3RhbmNlKTtcbiAgICBidXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgZG9tQ2FjaGVbYnV0dG9uXS5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0SW5wdXREaXNhYmxlZChpbnB1dCwgZGlzYWJsZWQpIHtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIHZhciByYWRpb3NDb250YWluZXIgPSBpbnB1dC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICB2YXIgcmFkaW9zID0gcmFkaW9zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJhZGlvc1tpXS5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZUJ1dHRvbnMoKSB7XG4gICAgc2V0QnV0dG9uc0Rpc2FibGVkKHRoaXMsIFsnY29uZmlybUJ1dHRvbicsICdkZW55QnV0dG9uJywgJ2NhbmNlbEJ1dHRvbiddLCBmYWxzZSk7XG4gIH1cbiAgZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbnMoKSB7XG4gICAgc2V0QnV0dG9uc0Rpc2FibGVkKHRoaXMsIFsnY29uZmlybUJ1dHRvbicsICdkZW55QnV0dG9uJywgJ2NhbmNlbEJ1dHRvbiddLCB0cnVlKTtcbiAgfVxuICBmdW5jdGlvbiBlbmFibGVJbnB1dCgpIHtcbiAgICByZXR1cm4gc2V0SW5wdXREaXNhYmxlZCh0aGlzLmdldElucHV0KCksIGZhbHNlKTtcbiAgfVxuICBmdW5jdGlvbiBkaXNhYmxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHNldElucHV0RGlzYWJsZWQodGhpcy5nZXRJbnB1dCgpLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dWYWxpZGF0aW9uTWVzc2FnZShlcnJvcikge1xuICAgIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gICAgdmFyIHBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG4gICAgc2V0SW5uZXJIdG1sKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLCBlcnJvcik7XG4gICAgZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UuY2xhc3NOYW1lID0gc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddO1xuXG4gICAgaWYgKHBhcmFtcy5jdXN0b21DbGFzcyAmJiBwYXJhbXMuY3VzdG9tQ2xhc3MudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGFkZENsYXNzKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLCBwYXJhbXMuY3VzdG9tQ2xhc3MudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHNob3coZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIHZhciBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCB0cnVlKTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRCeScsIHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSk7XG4gICAgICBmb2N1c0lucHV0KGlucHV0KTtcbiAgICAgIGFkZENsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgICB9XG4gIH0gLy8gSGlkZSBibG9jayB3aXRoIHZhbGlkYXRpb24gbWVzc2FnZVxuXG4gIGZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMSgpIHtcbiAgICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuXG4gICAgaWYgKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICBoaWRlKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9XG5cbiAgICB2YXIgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG5cbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJyk7XG4gICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkQnknKTtcbiAgICAgIHJlbW92ZUNsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQcm9ncmVzc1N0ZXBzJDEoKSB7XG4gICAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICByZXR1cm4gZG9tQ2FjaGUucHJvZ3Jlc3NTdGVwcztcbiAgfVxuXG4gIHZhciBUaW1lciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGltZXIoY2FsbGJhY2ssIGRlbGF5KSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZXIpO1xuXG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICB0aGlzLnJlbWFpbmluZyA9IGRlbGF5O1xuICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRpbWVyLCBbe1xuICAgICAga2V5OiBcInN0YXJ0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIHRoaXMuaWQgPSBzZXRUaW1lb3V0KHRoaXMuY2FsbGJhY2ssIHRoaXMucmVtYWluaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3RvcFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5pZCk7XG4gICAgICAgICAgdGhpcy5yZW1haW5pbmcgLT0gbmV3IERhdGUoKSAtIHRoaXMuc3RhcnRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaW5jcmVhc2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbmNyZWFzZShuKSB7XG4gICAgICAgIHZhciBydW5uaW5nID0gdGhpcy5ydW5uaW5nO1xuXG4gICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbWFpbmluZyArPSBuO1xuXG4gICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRUaW1lckxlZnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUaW1lckxlZnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZW1haW5pbmc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzUnVubmluZ1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzUnVubmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVubmluZztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGltZXI7XG4gIH0oKTtcblxuICB2YXIgZGVmYXVsdElucHV0VmFsaWRhdG9ycyA9IHtcbiAgICBlbWFpbDogZnVuY3Rpb24gZW1haWwoc3RyaW5nLCB2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgcmV0dXJuIC9eW2EtekEtWjAtOS4rXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVowLTktXXsyLDI0fSQvLnRlc3Qoc3RyaW5nKSA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZXNvbHZlKHZhbGlkYXRpb25NZXNzYWdlIHx8ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnKTtcbiAgICB9LFxuICAgIHVybDogZnVuY3Rpb24gdXJsKHN0cmluZywgdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIC8vIHRha2VuIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4MDk0MzUgd2l0aCBhIHNtYWxsIGNoYW5nZSBmcm9tICMxMzA2IGFuZCAjMjAxM1xuICAgICAgcmV0dXJuIC9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsxLDI1Nn1cXC5bYS16XXsyLDYzfVxcYihbLWEtekEtWjAtOUA6JV8rLn4jPyYvPV0qKSQvLnRlc3Qoc3RyaW5nKSA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZXNvbHZlKHZhbGlkYXRpb25NZXNzYWdlIHx8ICdJbnZhbGlkIFVSTCcpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBzZXREZWZhdWx0SW5wdXRWYWxpZGF0b3JzKHBhcmFtcykge1xuICAgIC8vIFVzZSBkZWZhdWx0IGBpbnB1dFZhbGlkYXRvcmAgZm9yIHN1cHBvcnRlZCBpbnB1dCB0eXBlcyBpZiBub3QgcHJvdmlkZWRcbiAgICBpZiAoIXBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgICAgT2JqZWN0LmtleXMoZGVmYXVsdElucHV0VmFsaWRhdG9ycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChwYXJhbXMuaW5wdXQgPT09IGtleSkge1xuICAgICAgICAgIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9IGRlZmF1bHRJbnB1dFZhbGlkYXRvcnNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVDdXN0b21UYXJnZXRFbGVtZW50KHBhcmFtcykge1xuICAgIC8vIERldGVybWluZSBpZiB0aGUgY3VzdG9tIHRhcmdldCBlbGVtZW50IGlzIHZhbGlkXG4gICAgaWYgKCFwYXJhbXMudGFyZ2V0IHx8IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy50YXJnZXQuYXBwZW5kQ2hpbGQpIHtcbiAgICAgIHdhcm4oJ1RhcmdldCBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLCBkZWZhdWx0aW5nIHRvIFwiYm9keVwiJyk7XG4gICAgICBwYXJhbXMudGFyZ2V0ID0gJ2JvZHknO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2V0IHR5cGUsIHRleHQgYW5kIGFjdGlvbnMgb24gcG9wdXBcbiAgICpcbiAgICogQHBhcmFtIHBhcmFtc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG5cblxuICBmdW5jdGlvbiBzZXRQYXJhbWV0ZXJzKHBhcmFtcykge1xuICAgIHNldERlZmF1bHRJbnB1dFZhbGlkYXRvcnMocGFyYW1zKTsgLy8gc2hvd0xvYWRlck9uQ29uZmlybSAmJiBwcmVDb25maXJtXG5cbiAgICBpZiAocGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0gJiYgIXBhcmFtcy5wcmVDb25maXJtKSB7XG4gICAgICB3YXJuKCdzaG93TG9hZGVyT25Db25maXJtIGlzIHNldCB0byB0cnVlLCBidXQgcHJlQ29uZmlybSBpcyBub3QgZGVmaW5lZC5cXG4nICsgJ3Nob3dMb2FkZXJPbkNvbmZpcm0gc2hvdWxkIGJlIHVzZWQgdG9nZXRoZXIgd2l0aCBwcmVDb25maXJtLCBzZWUgdXNhZ2UgZXhhbXBsZTpcXG4nICsgJ2h0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvLyNhamF4LXJlcXVlc3QnKTtcbiAgICB9IC8vIHBhcmFtcy5hbmltYXRpb24gd2lsbCBiZSBhY3R1YWxseSB1c2VkIGluIHJlbmRlclBvcHVwLmpzXG4gICAgLy8gYnV0IGluIGNhc2Ugd2hlbiBwYXJhbXMuYW5pbWF0aW9uIGlzIGEgZnVuY3Rpb24sIHdlIG5lZWQgdG8gY2FsbCB0aGF0IGZ1bmN0aW9uXG4gICAgLy8gYmVmb3JlIHBvcHVwIChyZSlpbml0aWFsaXphdGlvbiwgc28gaXQnbGwgYmUgcG9zc2libGUgdG8gY2hlY2sgU3dhbC5pc1Zpc2libGUoKVxuICAgIC8vIGluc2lkZSB0aGUgcGFyYW1zLmFuaW1hdGlvbiBmdW5jdGlvblxuXG5cbiAgICBwYXJhbXMuYW5pbWF0aW9uID0gY2FsbElmRnVuY3Rpb24ocGFyYW1zLmFuaW1hdGlvbik7XG4gICAgdmFsaWRhdGVDdXN0b21UYXJnZXRFbGVtZW50KHBhcmFtcyk7IC8vIFJlcGxhY2UgbmV3bGluZXMgd2l0aCA8YnI+IGluIHRpdGxlXG5cbiAgICBpZiAodHlwZW9mIHBhcmFtcy50aXRsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmFtcy50aXRsZSA9IHBhcmFtcy50aXRsZS5zcGxpdCgnXFxuJykuam9pbignPGJyIC8+Jyk7XG4gICAgfVxuXG4gICAgaW5pdChwYXJhbXMpO1xuICB9XG5cbiAgdmFyIHN3YWxTdHJpbmdQYXJhbXMgPSBbJ3N3YWwtdGl0bGUnLCAnc3dhbC1odG1sJywgJ3N3YWwtZm9vdGVyJ107XG4gIHZhciBnZXRUZW1wbGF0ZVBhcmFtcyA9IGZ1bmN0aW9uIGdldFRlbXBsYXRlUGFyYW1zKHBhcmFtcykge1xuICAgIHZhciB0ZW1wbGF0ZSA9IHR5cGVvZiBwYXJhbXMudGVtcGxhdGUgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGVtcGxhdGUpIDogcGFyYW1zLnRlbXBsYXRlO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHZhciB0ZW1wbGF0ZUNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50IHx8IHRlbXBsYXRlOyAvLyBJRTExXG5cbiAgICBzaG93V2FybmluZ3NGb3JFbGVtZW50cyh0ZW1wbGF0ZUNvbnRlbnQpO1xuXG4gICAgdmFyIHJlc3VsdCA9IF9leHRlbmRzKGdldFN3YWxQYXJhbXModGVtcGxhdGVDb250ZW50KSwgZ2V0U3dhbEJ1dHRvbnModGVtcGxhdGVDb250ZW50KSwgZ2V0U3dhbEltYWdlKHRlbXBsYXRlQ29udGVudCksIGdldFN3YWxJY29uKHRlbXBsYXRlQ29udGVudCksIGdldFN3YWxJbnB1dCh0ZW1wbGF0ZUNvbnRlbnQpLCBnZXRTd2FsU3RyaW5nUGFyYW1zKHRlbXBsYXRlQ29udGVudCwgc3dhbFN0cmluZ1BhcmFtcykpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgZ2V0U3dhbFBhcmFtcyA9IGZ1bmN0aW9uIGdldFN3YWxQYXJhbXModGVtcGxhdGVDb250ZW50KSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHRvQXJyYXkodGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N3YWwtcGFyYW0nKSkuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMocGFyYW0sIFsnbmFtZScsICd2YWx1ZSddKTtcbiAgICAgIHZhciBwYXJhbU5hbWUgPSBwYXJhbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgIHZhciB2YWx1ZSA9IHBhcmFtLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcblxuICAgICAgaWYgKHR5cGVvZiBkZWZhdWx0UGFyYW1zW3BhcmFtTmFtZV0gPT09ICdib29sZWFuJyAmJiB2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3R5cGVvZihkZWZhdWx0UGFyYW1zW3BhcmFtTmFtZV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXN1bHRbcGFyYW1OYW1lXSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIGdldFN3YWxCdXR0b25zID0gZnVuY3Rpb24gZ2V0U3dhbEJ1dHRvbnModGVtcGxhdGVDb250ZW50KSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHRvQXJyYXkodGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N3YWwtYnV0dG9uJykpLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhidXR0b24sIFsndHlwZScsICdjb2xvcicsICdhcmlhLWxhYmVsJ10pO1xuICAgICAgdmFyIHR5cGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKCd0eXBlJyk7XG4gICAgICByZXN1bHRbXCJcIi5jb25jYXQodHlwZSwgXCJCdXR0b25UZXh0XCIpXSA9IGJ1dHRvbi5pbm5lckhUTUw7XG4gICAgICByZXN1bHRbXCJzaG93XCIuY29uY2F0KGNhcGl0YWxpemVGaXJzdExldHRlcih0eXBlKSwgXCJCdXR0b25cIildID0gdHJ1ZTtcblxuICAgICAgaWYgKGJ1dHRvbi5oYXNBdHRyaWJ1dGUoJ2NvbG9yJykpIHtcbiAgICAgICAgcmVzdWx0W1wiXCIuY29uY2F0KHR5cGUsIFwiQnV0dG9uQ29sb3JcIildID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJ1dHRvbi5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICByZXN1bHRbXCJcIi5jb25jYXQodHlwZSwgXCJCdXR0b25BcmlhTGFiZWxcIildID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIGdldFN3YWxJbWFnZSA9IGZ1bmN0aW9uIGdldFN3YWxJbWFnZSh0ZW1wbGF0ZUNvbnRlbnQpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGltYWdlID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3N3YWwtaW1hZ2UnKTtcblxuICAgIGlmIChpbWFnZSkge1xuICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhpbWFnZSwgWydzcmMnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ2FsdCddKTtcblxuICAgICAgaWYgKGltYWdlLmhhc0F0dHJpYnV0ZSgnc3JjJykpIHtcbiAgICAgICAgcmVzdWx0LmltYWdlVXJsID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGltYWdlLmhhc0F0dHJpYnV0ZSgnd2lkdGgnKSkge1xuICAgICAgICByZXN1bHQuaW1hZ2VXaWR0aCA9IGltYWdlLmdldEF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGltYWdlLmhhc0F0dHJpYnV0ZSgnaGVpZ2h0JykpIHtcbiAgICAgICAgcmVzdWx0LmltYWdlSGVpZ2h0ID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGltYWdlLmhhc0F0dHJpYnV0ZSgnYWx0JykpIHtcbiAgICAgICAgcmVzdWx0LmltYWdlQWx0ID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdhbHQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBnZXRTd2FsSWNvbiA9IGZ1bmN0aW9uIGdldFN3YWxJY29uKHRlbXBsYXRlQ29udGVudCkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIgaWNvbiA9IHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yKCdzd2FsLWljb24nKTtcblxuICAgIGlmIChpY29uKSB7XG4gICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKGljb24sIFsndHlwZScsICdjb2xvciddKTtcblxuICAgICAgaWYgKGljb24uaGFzQXR0cmlidXRlKCd0eXBlJykpIHtcbiAgICAgICAgcmVzdWx0Lmljb24gPSBpY29uLmdldEF0dHJpYnV0ZSgndHlwZScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaWNvbi5oYXNBdHRyaWJ1dGUoJ2NvbG9yJykpIHtcbiAgICAgICAgcmVzdWx0Lmljb25Db2xvciA9IGljb24uZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQuaWNvbkh0bWwgPSBpY29uLmlubmVySFRNTDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBnZXRTd2FsSW5wdXQgPSBmdW5jdGlvbiBnZXRTd2FsSW5wdXQodGVtcGxhdGVDb250ZW50KSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBpbnB1dCA9IHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yKCdzd2FsLWlucHV0Jyk7XG5cbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoaW5wdXQsIFsndHlwZScsICdsYWJlbCcsICdwbGFjZWhvbGRlcicsICd2YWx1ZSddKTtcbiAgICAgIHJlc3VsdC5pbnB1dCA9IGlucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpIHx8ICd0ZXh0JztcblxuICAgICAgaWYgKGlucHV0Lmhhc0F0dHJpYnV0ZSgnbGFiZWwnKSkge1xuICAgICAgICByZXN1bHQuaW5wdXRMYWJlbCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnbGFiZWwnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlucHV0Lmhhc0F0dHJpYnV0ZSgncGxhY2Vob2xkZXInKSkge1xuICAgICAgICByZXN1bHQuaW5wdXRQbGFjZWhvbGRlciA9IGlucHV0LmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlucHV0Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICByZXN1bHQuaW5wdXRWYWx1ZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaW5wdXRPcHRpb25zID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N3YWwtaW5wdXQtb3B0aW9uJyk7XG5cbiAgICBpZiAoaW5wdXRPcHRpb25zLmxlbmd0aCkge1xuICAgICAgcmVzdWx0LmlucHV0T3B0aW9ucyA9IHt9O1xuICAgICAgdG9BcnJheShpbnB1dE9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKG9wdGlvbiwgWyd2YWx1ZSddKTtcbiAgICAgICAgdmFyIG9wdGlvblZhbHVlID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgICAgdmFyIG9wdGlvbk5hbWUgPSBvcHRpb24uaW5uZXJIVE1MO1xuICAgICAgICByZXN1bHQuaW5wdXRPcHRpb25zW29wdGlvblZhbHVlXSA9IG9wdGlvbk5hbWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBnZXRTd2FsU3RyaW5nUGFyYW1zID0gZnVuY3Rpb24gZ2V0U3dhbFN0cmluZ1BhcmFtcyh0ZW1wbGF0ZUNvbnRlbnQsIHBhcmFtTmFtZXMpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICBmb3IgKHZhciBpIGluIHBhcmFtTmFtZXMpIHtcbiAgICAgIHZhciBwYXJhbU5hbWUgPSBwYXJhbU5hbWVzW2ldO1xuICAgICAgdmFyIHRhZyA9IHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yKHBhcmFtTmFtZSk7XG5cbiAgICAgIGlmICh0YWcpIHtcbiAgICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyh0YWcsIFtdKTtcbiAgICAgICAgcmVzdWx0W3BhcmFtTmFtZS5yZXBsYWNlKC9ec3dhbC0vLCAnJyldID0gdGFnLmlubmVySFRNTDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBzaG93V2FybmluZ3NGb3JFbGVtZW50cyA9IGZ1bmN0aW9uIHNob3dXYXJuaW5nc0ZvckVsZW1lbnRzKHRlbXBsYXRlKSB7XG4gICAgdmFyIGFsbG93ZWRFbGVtZW50cyA9IHN3YWxTdHJpbmdQYXJhbXMuY29uY2F0KFsnc3dhbC1wYXJhbScsICdzd2FsLWJ1dHRvbicsICdzd2FsLWltYWdlJywgJ3N3YWwtaWNvbicsICdzd2FsLWlucHV0JywgJ3N3YWwtaW5wdXQtb3B0aW9uJ10pO1xuICAgIHRvQXJyYXkodGVtcGxhdGUucXVlcnlTZWxlY3RvckFsbCgnKicpKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgaWYgKGVsLnBhcmVudE5vZGUgIT09IHRlbXBsYXRlKSB7XG4gICAgICAgIC8vIGNhbid0IHVzZSB0ZW1wbGF0ZS5jaGlsZHJlbiBiZWNhdXNlIG9mIElFMTFcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFnTmFtZSA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgaWYgKGFsbG93ZWRFbGVtZW50cy5pbmRleE9mKHRhZ05hbWUpID09PSAtMSkge1xuICAgICAgICB3YXJuKFwiVW5yZWNvZ25pemVkIGVsZW1lbnQgPFwiLmNvbmNhdCh0YWdOYW1lLCBcIj5cIikpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzID0gZnVuY3Rpb24gc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhlbCwgYWxsb3dlZEF0dHJpYnV0ZXMpIHtcbiAgICB0b0FycmF5KGVsLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVzLmluZGV4T2YoYXR0cmlidXRlLm5hbWUpID09PSAtMSkge1xuICAgICAgICB3YXJuKFtcIlVucmVjb2duaXplZCBhdHRyaWJ1dGUgXFxcIlwiLmNvbmNhdChhdHRyaWJ1dGUubmFtZSwgXCJcXFwiIG9uIDxcIikuY29uY2F0KGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSwgXCI+LlwiKSwgXCJcIi5jb25jYXQoYWxsb3dlZEF0dHJpYnV0ZXMubGVuZ3RoID8gXCJBbGxvd2VkIGF0dHJpYnV0ZXMgYXJlOiBcIi5jb25jYXQoYWxsb3dlZEF0dHJpYnV0ZXMuam9pbignLCAnKSkgOiAnVG8gc2V0IHRoZSB2YWx1ZSwgdXNlIEhUTUwgd2l0aGluIHRoZSBlbGVtZW50LicpXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIFNIT1dfQ0xBU1NfVElNRU9VVCA9IDEwO1xuICAvKipcbiAgICogT3BlbiBwb3B1cCwgYWRkIG5lY2Vzc2FyeSBjbGFzc2VzIGFuZCBzdHlsZXMsIGZpeCBzY3JvbGxiYXJcbiAgICpcbiAgICogQHBhcmFtIHBhcmFtc1xuICAgKi9cblxuICB2YXIgb3BlblBvcHVwID0gZnVuY3Rpb24gb3BlblBvcHVwKHBhcmFtcykge1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMud2lsbE9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBhcmFtcy53aWxsT3Blbihwb3B1cCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zLm9uQmVmb3JlT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGFyYW1zLm9uQmVmb3JlT3Blbihwb3B1cCk7IC8vIEBkZXByZWNhdGVkXG4gICAgfVxuXG4gICAgdmFyIGJvZHlTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcbiAgICB2YXIgaW5pdGlhbEJvZHlPdmVyZmxvdyA9IGJvZHlTdHlsZXMub3ZlcmZsb3dZO1xuICAgIGFkZENsYXNzZXMkMShjb250YWluZXIsIHBvcHVwLCBwYXJhbXMpOyAvLyBzY3JvbGxpbmcgaXMgJ2hpZGRlbicgdW50aWwgYW5pbWF0aW9uIGlzIGRvbmUsIGFmdGVyIHRoYXQgJ2F1dG8nXG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldFNjcm9sbGluZ1Zpc2liaWxpdHkoY29udGFpbmVyLCBwb3B1cCk7XG4gICAgfSwgU0hPV19DTEFTU19USU1FT1VUKTtcblxuICAgIGlmIChpc01vZGFsKCkpIHtcbiAgICAgIGZpeFNjcm9sbENvbnRhaW5lcihjb250YWluZXIsIHBhcmFtcy5zY3JvbGxiYXJQYWRkaW5nLCBpbml0aWFsQm9keU92ZXJmbG93KTtcbiAgICAgIHNldEFyaWFIaWRkZW4oKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVG9hc3QoKSAmJiAhZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50KSB7XG4gICAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHJ1bkRpZE9wZW4ocG9wdXAsIHBhcmFtcyk7XG4gICAgcmVtb3ZlQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1snbm8tdHJhbnNpdGlvbiddKTtcbiAgfTtcblxuICB2YXIgcnVuRGlkT3BlbiA9IGZ1bmN0aW9uIHJ1bkRpZE9wZW4ocG9wdXAsIHBhcmFtcykge1xuICAgIGlmICh0eXBlb2YgcGFyYW1zLmRpZE9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmRpZE9wZW4ocG9wdXApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zLm9uT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMub25PcGVuKHBvcHVwKTtcbiAgICAgIH0pOyAvLyBAZGVwcmVjYXRlZFxuICAgIH1cbiAgfTtcblxuICB2YXIgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCA9IGZ1bmN0aW9uIHN3YWxPcGVuQW5pbWF0aW9uRmluaXNoZWQoZXZlbnQpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gcG9wdXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCk7XG4gICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgfTtcblxuICB2YXIgc2V0U2Nyb2xsaW5nVmlzaWJpbGl0eSA9IGZ1bmN0aW9uIHNldFNjcm9sbGluZ1Zpc2liaWxpdHkoY29udGFpbmVyLCBwb3B1cCkge1xuICAgIGlmIChhbmltYXRpb25FbmRFdmVudCAmJiBoYXNDc3NBbmltYXRpb24ocG9wdXApKSB7XG4gICAgICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsT3BlbkFuaW1hdGlvbkZpbmlzaGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgICB9XG4gIH07XG5cbiAgdmFyIGZpeFNjcm9sbENvbnRhaW5lciA9IGZ1bmN0aW9uIGZpeFNjcm9sbENvbnRhaW5lcihjb250YWluZXIsIHNjcm9sbGJhclBhZGRpbmcsIGluaXRpYWxCb2R5T3ZlcmZsb3cpIHtcbiAgICBpT1NmaXgoKTtcbiAgICBJRWZpeCgpO1xuXG4gICAgaWYgKHNjcm9sbGJhclBhZGRpbmcgJiYgaW5pdGlhbEJvZHlPdmVyZmxvdyAhPT0gJ2hpZGRlbicpIHtcbiAgICAgIGZpeFNjcm9sbGJhcigpO1xuICAgIH0gLy8gc3dlZXRhbGVydDIvaXNzdWVzLzEyNDdcblxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gMDtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgYWRkQ2xhc3NlcyQxID0gZnVuY3Rpb24gYWRkQ2xhc3Nlcyhjb250YWluZXIsIHBvcHVwLCBwYXJhbXMpIHtcbiAgICBhZGRDbGFzcyhjb250YWluZXIsIHBhcmFtcy5zaG93Q2xhc3MuYmFja2Ryb3ApOyAvLyB0aGUgd29ya2Fyb3VuZCB3aXRoIHNldHRpbmcvdW5zZXR0aW5nIG9wYWNpdHkgaXMgbmVlZGVkIGZvciAjMjAxOSBhbmQgMjA1OVxuXG4gICAgcG9wdXAuc3R5bGUuc2V0UHJvcGVydHkoJ29wYWNpdHknLCAnMCcsICdpbXBvcnRhbnQnKTtcbiAgICBzaG93KHBvcHVwKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEFuaW1hdGUgcG9wdXAgcmlnaHQgYWZ0ZXIgc2hvd2luZyBpdFxuICAgICAgYWRkQ2xhc3MocG9wdXAsIHBhcmFtcy5zaG93Q2xhc3MucG9wdXApOyAvLyBhbmQgcmVtb3ZlIHRoZSBvcGFjaXR5IHdvcmthcm91bmRcblxuICAgICAgcG9wdXAuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ29wYWNpdHknKTtcbiAgICB9LCBTSE9XX0NMQVNTX1RJTUVPVVQpOyAvLyAxMG1zIGluIG9yZGVyIHRvIGZpeCAjMjA2MlxuXG4gICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzLnNob3duKTtcblxuICAgIGlmIChwYXJhbXMuaGVpZ2h0QXV0byAmJiBwYXJhbXMuYmFja2Ryb3AgJiYgIXBhcmFtcy50b2FzdCkge1xuICAgICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWydoZWlnaHQtYXV0byddKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUlucHV0T3B0aW9uc0FuZFZhbHVlID0gZnVuY3Rpb24gaGFuZGxlSW5wdXRPcHRpb25zQW5kVmFsdWUoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIGlmIChwYXJhbXMuaW5wdXQgPT09ICdzZWxlY3QnIHx8IHBhcmFtcy5pbnB1dCA9PT0gJ3JhZGlvJykge1xuICAgICAgaGFuZGxlSW5wdXRPcHRpb25zKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIH0gZWxzZSBpZiAoWyd0ZXh0JywgJ2VtYWlsJywgJ251bWJlcicsICd0ZWwnLCAndGV4dGFyZWEnXS5pbmRleE9mKHBhcmFtcy5pbnB1dCkgIT09IC0xICYmIChoYXNUb1Byb21pc2VGbihwYXJhbXMuaW5wdXRWYWx1ZSkgfHwgaXNQcm9taXNlKHBhcmFtcy5pbnB1dFZhbHVlKSkpIHtcbiAgICAgIGhhbmRsZUlucHV0VmFsdWUoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgfVxuICB9O1xuICB2YXIgZ2V0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGdldElucHV0VmFsdWUoaW5zdGFuY2UsIGlubmVyUGFyYW1zKSB7XG4gICAgdmFyIGlucHV0ID0gaW5zdGFuY2UuZ2V0SW5wdXQoKTtcblxuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN3aXRjaCAoaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgcmV0dXJuIGdldENoZWNrYm94VmFsdWUoaW5wdXQpO1xuXG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIHJldHVybiBnZXRSYWRpb1ZhbHVlKGlucHV0KTtcblxuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIHJldHVybiBnZXRGaWxlVmFsdWUoaW5wdXQpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gaW5uZXJQYXJhbXMuaW5wdXRBdXRvVHJpbSA/IGlucHV0LnZhbHVlLnRyaW0oKSA6IGlucHV0LnZhbHVlO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZ2V0Q2hlY2tib3hWYWx1ZSA9IGZ1bmN0aW9uIGdldENoZWNrYm94VmFsdWUoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQuY2hlY2tlZCA/IDEgOiAwO1xuICB9O1xuXG4gIHZhciBnZXRSYWRpb1ZhbHVlID0gZnVuY3Rpb24gZ2V0UmFkaW9WYWx1ZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5jaGVja2VkID8gaW5wdXQudmFsdWUgOiBudWxsO1xuICB9O1xuXG4gIHZhciBnZXRGaWxlVmFsdWUgPSBmdW5jdGlvbiBnZXRGaWxlVmFsdWUoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQuZmlsZXMubGVuZ3RoID8gaW5wdXQuZ2V0QXR0cmlidXRlKCdtdWx0aXBsZScpICE9PSBudWxsID8gaW5wdXQuZmlsZXMgOiBpbnB1dC5maWxlc1swXSA6IG51bGw7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUlucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIGhhbmRsZUlucHV0T3B0aW9ucyhpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XG5cbiAgICB2YXIgcHJvY2Vzc0lucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIHByb2Nlc3NJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgICByZXR1cm4gcG9wdWxhdGVJbnB1dE9wdGlvbnNbcGFyYW1zLmlucHV0XShjb250ZW50LCBmb3JtYXRJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSwgcGFyYW1zKTtcbiAgICB9O1xuXG4gICAgaWYgKGhhc1RvUHJvbWlzZUZuKHBhcmFtcy5pbnB1dE9wdGlvbnMpIHx8IGlzUHJvbWlzZShwYXJhbXMuaW5wdXRPcHRpb25zKSkge1xuICAgICAgc2hvd0xvYWRpbmcoZ2V0Q29uZmlybUJ1dHRvbigpKTtcbiAgICAgIGFzUHJvbWlzZShwYXJhbXMuaW5wdXRPcHRpb25zKS50aGVuKGZ1bmN0aW9uIChpbnB1dE9wdGlvbnMpIHtcbiAgICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgcHJvY2Vzc0lucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChfdHlwZW9mKHBhcmFtcy5pbnB1dE9wdGlvbnMpID09PSAnb2JqZWN0Jykge1xuICAgICAgcHJvY2Vzc0lucHV0T3B0aW9ucyhwYXJhbXMuaW5wdXRPcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3IoXCJVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRPcHRpb25zISBFeHBlY3RlZCBvYmplY3QsIE1hcCBvciBQcm9taXNlLCBnb3QgXCIuY29uY2F0KF90eXBlb2YocGFyYW1zLmlucHV0T3B0aW9ucykpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUlucHV0VmFsdWUgPSBmdW5jdGlvbiBoYW5kbGVJbnB1dFZhbHVlKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgaW5wdXQgPSBpbnN0YW5jZS5nZXRJbnB1dCgpO1xuICAgIGhpZGUoaW5wdXQpO1xuICAgIGFzUHJvbWlzZShwYXJhbXMuaW5wdXRWYWx1ZSkudGhlbihmdW5jdGlvbiAoaW5wdXRWYWx1ZSkge1xuICAgICAgaW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXQgPT09ICdudW1iZXInID8gcGFyc2VGbG9hdChpbnB1dFZhbHVlKSB8fCAwIDogXCJcIi5jb25jYXQoaW5wdXRWYWx1ZSk7XG4gICAgICBzaG93KGlucHV0KTtcbiAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpO1xuICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycikge1xuICAgICAgZXJyb3IoXCJFcnJvciBpbiBpbnB1dFZhbHVlIHByb21pc2U6IFwiLmNvbmNhdChlcnIpKTtcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICBzaG93KGlucHV0KTtcbiAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBwb3B1bGF0ZUlucHV0T3B0aW9ucyA9IHtcbiAgICBzZWxlY3Q6IGZ1bmN0aW9uIHNlbGVjdChjb250ZW50LCBpbnB1dE9wdGlvbnMsIHBhcmFtcykge1xuICAgICAgdmFyIHNlbGVjdCA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5zZWxlY3QpO1xuXG4gICAgICB2YXIgcmVuZGVyT3B0aW9uID0gZnVuY3Rpb24gcmVuZGVyT3B0aW9uKHBhcmVudCwgb3B0aW9uTGFiZWwsIG9wdGlvblZhbHVlKSB7XG4gICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XG4gICAgICAgIHNldElubmVySHRtbChvcHRpb24sIG9wdGlvbkxhYmVsKTtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gaXNTZWxlY3RlZChvcHRpb25WYWx1ZSwgcGFyYW1zLmlucHV0VmFsdWUpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH07XG5cbiAgICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dE9wdGlvbikge1xuICAgICAgICB2YXIgb3B0aW9uVmFsdWUgPSBpbnB1dE9wdGlvblswXTtcbiAgICAgICAgdmFyIG9wdGlvbkxhYmVsID0gaW5wdXRPcHRpb25bMV07IC8vIDxvcHRncm91cD4gc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw0MDEvaW50ZXJhY3QvZm9ybXMuaHRtbCNoLTE3LjZcbiAgICAgICAgLy8gXCIuLi5hbGwgT1BUR1JPVVAgZWxlbWVudHMgbXVzdCBiZSBzcGVjaWZpZWQgZGlyZWN0bHkgd2l0aGluIGEgU0VMRUNUIGVsZW1lbnQgKGkuZS4sIGdyb3VwcyBtYXkgbm90IGJlIG5lc3RlZCkuLi5cIlxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRoaXMgaXMgYSA8b3B0Z3JvdXA+XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9uTGFiZWwpKSB7XG4gICAgICAgICAgLy8gaWYgaXQgaXMgYW4gYXJyYXksIHRoZW4gaXQgaXMgYW4gPG9wdGdyb3VwPlxuICAgICAgICAgIHZhciBvcHRncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XG4gICAgICAgICAgb3B0Z3JvdXAubGFiZWwgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgICBvcHRncm91cC5kaXNhYmxlZCA9IGZhbHNlOyAvLyBub3QgY29uZmlndXJhYmxlIGZvciBub3dcblxuICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRncm91cCk7XG4gICAgICAgICAgb3B0aW9uTGFiZWwuZm9yRWFjaChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlck9wdGlvbihvcHRncm91cCwgb1sxXSwgb1swXSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2FzZSBvZiA8b3B0aW9uPlxuICAgICAgICAgIHJlbmRlck9wdGlvbihzZWxlY3QsIG9wdGlvbkxhYmVsLCBvcHRpb25WYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2VsZWN0LmZvY3VzKCk7XG4gICAgfSxcbiAgICByYWRpbzogZnVuY3Rpb24gcmFkaW8oY29udGVudCwgaW5wdXRPcHRpb25zLCBwYXJhbXMpIHtcbiAgICAgIHZhciByYWRpbyA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5yYWRpbyk7XG4gICAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRPcHRpb24pIHtcbiAgICAgICAgdmFyIHJhZGlvVmFsdWUgPSBpbnB1dE9wdGlvblswXTtcbiAgICAgICAgdmFyIHJhZGlvTGFiZWwgPSBpbnB1dE9wdGlvblsxXTtcbiAgICAgICAgdmFyIHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB2YXIgcmFkaW9MYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICByYWRpb0lucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgICAgICByYWRpb0lucHV0Lm5hbWUgPSBzd2FsQ2xhc3Nlcy5yYWRpbztcbiAgICAgICAgcmFkaW9JbnB1dC52YWx1ZSA9IHJhZGlvVmFsdWU7XG5cbiAgICAgICAgaWYgKGlzU2VsZWN0ZWQocmFkaW9WYWx1ZSwgcGFyYW1zLmlucHV0VmFsdWUpKSB7XG4gICAgICAgICAgcmFkaW9JbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc2V0SW5uZXJIdG1sKGxhYmVsLCByYWRpb0xhYmVsKTtcbiAgICAgICAgbGFiZWwuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMubGFiZWw7XG4gICAgICAgIHJhZGlvTGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xuICAgICAgICByYWRpb0xhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIHJhZGlvLmFwcGVuZENoaWxkKHJhZGlvTGFiZWxFbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHJhZGlvcyA9IHJhZGlvLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbiAgICAgIGlmIChyYWRpb3MubGVuZ3RoKSB7XG4gICAgICAgIHJhZGlvc1swXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIENvbnZlcnRzIGBpbnB1dE9wdGlvbnNgIGludG8gYW4gYXJyYXkgb2YgYFt2YWx1ZSwgbGFiZWxdYHNcbiAgICogQHBhcmFtIGlucHV0T3B0aW9uc1xuICAgKi9cblxuICB2YXIgZm9ybWF0SW5wdXRPcHRpb25zID0gZnVuY3Rpb24gZm9ybWF0SW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgIGlmICh0eXBlb2YgTWFwICE9PSAndW5kZWZpbmVkJyAmJiBpbnB1dE9wdGlvbnMgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZUZvcm1hdHRlZCA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChfdHlwZW9mKHZhbHVlRm9ybWF0dGVkKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyBjYXNlIG9mIDxvcHRncm91cD5cbiAgICAgICAgICB2YWx1ZUZvcm1hdHRlZCA9IGZvcm1hdElucHV0T3B0aW9ucyh2YWx1ZUZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaChba2V5LCB2YWx1ZUZvcm1hdHRlZF0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5rZXlzKGlucHV0T3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZUZvcm1hdHRlZCA9IGlucHV0T3B0aW9uc1trZXldO1xuXG4gICAgICAgIGlmIChfdHlwZW9mKHZhbHVlRm9ybWF0dGVkKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyBjYXNlIG9mIDxvcHRncm91cD5cbiAgICAgICAgICB2YWx1ZUZvcm1hdHRlZCA9IGZvcm1hdElucHV0T3B0aW9ucyh2YWx1ZUZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaChba2V5LCB2YWx1ZUZvcm1hdHRlZF0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgaXNTZWxlY3RlZCA9IGZ1bmN0aW9uIGlzU2VsZWN0ZWQob3B0aW9uVmFsdWUsIGlucHV0VmFsdWUpIHtcbiAgICByZXR1cm4gaW5wdXRWYWx1ZSAmJiBpbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IG9wdGlvblZhbHVlLnRvU3RyaW5nKCk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUNvbmZpcm1CdXR0b25DbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNvbmZpcm1CdXR0b25DbGljayhpbnN0YW5jZSwgaW5uZXJQYXJhbXMpIHtcbiAgICBpbnN0YW5jZS5kaXNhYmxlQnV0dG9ucygpO1xuXG4gICAgaWYgKGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICBoYW5kbGVDb25maXJtT3JEZW55V2l0aElucHV0KGluc3RhbmNlLCBpbm5lclBhcmFtcywgJ2NvbmZpcm0nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlybShpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIHRydWUpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGhhbmRsZURlbnlCdXR0b25DbGljayA9IGZ1bmN0aW9uIGhhbmRsZURlbnlCdXR0b25DbGljayhpbnN0YW5jZSwgaW5uZXJQYXJhbXMpIHtcbiAgICBpbnN0YW5jZS5kaXNhYmxlQnV0dG9ucygpO1xuXG4gICAgaWYgKGlubmVyUGFyYW1zLnJldHVybklucHV0VmFsdWVPbkRlbnkpIHtcbiAgICAgIGhhbmRsZUNvbmZpcm1PckRlbnlXaXRoSW5wdXQoaW5zdGFuY2UsIGlubmVyUGFyYW1zLCAnZGVueScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZW55KGluc3RhbmNlLCBpbm5lclBhcmFtcywgZmFsc2UpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2FuY2VsQnV0dG9uQ2xpY2soaW5zdGFuY2UsIGRpc21pc3NXaXRoKSB7XG4gICAgaW5zdGFuY2UuZGlzYWJsZUJ1dHRvbnMoKTtcbiAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmNhbmNlbCk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUNvbmZpcm1PckRlbnlXaXRoSW5wdXQgPSBmdW5jdGlvbiBoYW5kbGVDb25maXJtT3JEZW55V2l0aElucHV0KGluc3RhbmNlLCBpbm5lclBhcmFtcywgdHlwZVxuICAvKiB0eXBlIGlzIGVpdGhlciAnY29uZmlybScgb3IgJ2RlbnknICovXG4gICkge1xuICAgIHZhciBpbnB1dFZhbHVlID0gZ2V0SW5wdXRWYWx1ZShpbnN0YW5jZSwgaW5uZXJQYXJhbXMpO1xuXG4gICAgaWYgKGlubmVyUGFyYW1zLmlucHV0VmFsaWRhdG9yKSB7XG4gICAgICBoYW5kbGVJbnB1dFZhbGlkYXRvcihpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIGlucHV0VmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoIWluc3RhbmNlLmdldElucHV0KCkuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICBpbnN0YW5jZS5lbmFibGVCdXR0b25zKCk7XG4gICAgICBpbnN0YW5jZS5zaG93VmFsaWRhdGlvbk1lc3NhZ2UoaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RlbnknKSB7XG4gICAgICBkZW55KGluc3RhbmNlLCBpbm5lclBhcmFtcywgaW5wdXRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpcm0oaW5zdGFuY2UsIGlubmVyUGFyYW1zLCBpbnB1dFZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUlucHV0VmFsaWRhdG9yID0gZnVuY3Rpb24gaGFuZGxlSW5wdXRWYWxpZGF0b3IoaW5zdGFuY2UsIGlubmVyUGFyYW1zLCBpbnB1dFZhbHVlKSB7XG4gICAgaW5zdGFuY2UuZGlzYWJsZUlucHV0KCk7XG4gICAgdmFyIHZhbGlkYXRpb25Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXNQcm9taXNlKGlubmVyUGFyYW1zLmlucHV0VmFsaWRhdG9yKGlucHV0VmFsdWUsIGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKSk7XG4gICAgfSk7XG4gICAgdmFsaWRhdGlvblByb21pc2UudGhlbihmdW5jdGlvbiAodmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGluc3RhbmNlLmVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGluc3RhbmNlLmVuYWJsZUlucHV0KCk7XG5cbiAgICAgIGlmICh2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgICBpbnN0YW5jZS5zaG93VmFsaWRhdGlvbk1lc3NhZ2UodmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmlybShpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIGlucHV0VmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBkZW55ID0gZnVuY3Rpb24gZGVueShpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIHZhbHVlKSB7XG4gICAgaWYgKGlubmVyUGFyYW1zLnNob3dMb2FkZXJPbkRlbnkpIHtcbiAgICAgIHNob3dMb2FkaW5nKGdldERlbnlCdXR0b24oKSk7XG4gICAgfVxuXG4gICAgaWYgKGlubmVyUGFyYW1zLnByZURlbnkpIHtcbiAgICAgIHZhciBwcmVEZW55UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXNQcm9taXNlKGlubmVyUGFyYW1zLnByZURlbnkodmFsdWUsIGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKSk7XG4gICAgICB9KTtcbiAgICAgIHByZURlbnlQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHByZURlbnlWYWx1ZSkge1xuICAgICAgICBpZiAocHJlRGVueVZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5zdGFuY2UuY2xvc2VQb3B1cCh7XG4gICAgICAgICAgICBpc0RlbmllZDogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiB0eXBlb2YgcHJlRGVueVZhbHVlID09PSAndW5kZWZpbmVkJyA/IHZhbHVlIDogcHJlRGVueVZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5jbG9zZVBvcHVwKHtcbiAgICAgICAgaXNEZW5pZWQ6IHRydWUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBzdWNjZWVkV2l0aCA9IGZ1bmN0aW9uIHN1Y2NlZWRXaXRoKGluc3RhbmNlLCB2YWx1ZSkge1xuICAgIGluc3RhbmNlLmNsb3NlUG9wdXAoe1xuICAgICAgaXNDb25maXJtZWQ6IHRydWUsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgY29uZmlybSA9IGZ1bmN0aW9uIGNvbmZpcm0oaW5zdGFuY2UsIGlubmVyUGFyYW1zLCB2YWx1ZSkge1xuICAgIGlmIChpbm5lclBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtKSB7XG4gICAgICBzaG93TG9hZGluZygpOyAvLyBUT0RPOiBtYWtlIHNob3dMb2FkaW5nIGFuICppbnN0YW5jZSogbWV0aG9kXG4gICAgfVxuXG4gICAgaWYgKGlubmVyUGFyYW1zLnByZUNvbmZpcm0pIHtcbiAgICAgIGluc3RhbmNlLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcbiAgICAgIHZhciBwcmVDb25maXJtUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXNQcm9taXNlKGlubmVyUGFyYW1zLnByZUNvbmZpcm0odmFsdWUsIGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKSk7XG4gICAgICB9KTtcbiAgICAgIHByZUNvbmZpcm1Qcm9taXNlLnRoZW4oZnVuY3Rpb24gKHByZUNvbmZpcm1WYWx1ZSkge1xuICAgICAgICBpZiAoaXNWaXNpYmxlKGdldFZhbGlkYXRpb25NZXNzYWdlKCkpIHx8IHByZUNvbmZpcm1WYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1Y2NlZWRXaXRoKGluc3RhbmNlLCB0eXBlb2YgcHJlQ29uZmlybVZhbHVlID09PSAndW5kZWZpbmVkJyA/IHZhbHVlIDogcHJlQ29uZmlybVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Y2NlZWRXaXRoKGluc3RhbmNlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBhZGRLZXlkb3duSGFuZGxlciA9IGZ1bmN0aW9uIGFkZEtleWRvd25IYW5kbGVyKGluc3RhbmNlLCBnbG9iYWxTdGF0ZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKSB7XG4gICAgaWYgKGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQgJiYgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCkge1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFpbm5lclBhcmFtcy50b2FzdCkge1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4ga2V5ZG93bkhhbmRsZXIoaW5zdGFuY2UsIGUsIGRpc21pc3NXaXRoKTtcbiAgICAgIH07XG5cbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQgPSBpbm5lclBhcmFtcy5rZXlkb3duTGlzdGVuZXJDYXB0dXJlID8gd2luZG93IDogZ2V0UG9wdXAoKTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPSBpbm5lclBhcmFtcy5rZXlkb3duTGlzdGVuZXJDYXB0dXJlO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH07IC8vIEZvY3VzIGhhbmRsaW5nXG5cbiAgdmFyIHNldEZvY3VzID0gZnVuY3Rpb24gc2V0Rm9jdXMoaW5uZXJQYXJhbXMsIGluZGV4LCBpbmNyZW1lbnQpIHtcbiAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cygpOyAvLyBzZWFyY2ggZm9yIHZpc2libGUgZWxlbWVudHMgYW5kIHNlbGVjdCB0aGUgbmV4dCBwb3NzaWJsZSBtYXRjaFxuXG4gICAgaWYgKGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgaW5kZXggPSBpbmRleCArIGluY3JlbWVudDsgLy8gcm9sbG92ZXIgdG8gZmlyc3QgaXRlbVxuXG4gICAgICBpZiAoaW5kZXggPT09IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBpbmRleCA9IDA7IC8vIGdvIHRvIGxhc3QgaXRlbVxuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9jdXNhYmxlRWxlbWVudHNbaW5kZXhdLmZvY3VzKCk7XG4gICAgfSAvLyBubyB2aXNpYmxlIGZvY3VzYWJsZSBlbGVtZW50cywgZm9jdXMgdGhlIHBvcHVwXG5cblxuICAgIGdldFBvcHVwKCkuZm9jdXMoKTtcbiAgfTtcbiAgdmFyIGFycm93S2V5c05leHRCdXR0b24gPSBbJ0Fycm93UmlnaHQnLCAnQXJyb3dEb3duJywgJ1JpZ2h0JywgJ0Rvd24nIC8vIElFMTFcbiAgXTtcbiAgdmFyIGFycm93S2V5c1ByZXZpb3VzQnV0dG9uID0gWydBcnJvd0xlZnQnLCAnQXJyb3dVcCcsICdMZWZ0JywgJ1VwJyAvLyBJRTExXG4gIF07XG4gIHZhciBlc2NLZXlzID0gWydFc2NhcGUnLCAnRXNjJyAvLyBJRTExXG4gIF07XG5cbiAgdmFyIGtleWRvd25IYW5kbGVyID0gZnVuY3Rpb24ga2V5ZG93bkhhbmRsZXIoaW5zdGFuY2UsIGUsIGRpc21pc3NXaXRoKSB7XG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMuc3RvcEtleWRvd25Qcm9wYWdhdGlvbikge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IC8vIEVOVEVSXG5cblxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaGFuZGxlRW50ZXIoaW5zdGFuY2UsIGUsIGlubmVyUGFyYW1zKTsgLy8gVEFCXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ1RhYicpIHtcbiAgICAgIGhhbmRsZVRhYihlLCBpbm5lclBhcmFtcyk7IC8vIEFSUk9XUyAtIHN3aXRjaCBmb2N1cyBiZXR3ZWVuIGJ1dHRvbnNcbiAgICB9IGVsc2UgaWYgKFtdLmNvbmNhdChhcnJvd0tleXNOZXh0QnV0dG9uLCBhcnJvd0tleXNQcmV2aW91c0J1dHRvbikuaW5kZXhPZihlLmtleSkgIT09IC0xKSB7XG4gICAgICBoYW5kbGVBcnJvd3MoZS5rZXkpOyAvLyBFU0NcbiAgICB9IGVsc2UgaWYgKGVzY0tleXMuaW5kZXhPZihlLmtleSkgIT09IC0xKSB7XG4gICAgICBoYW5kbGVFc2MoZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUVudGVyID0gZnVuY3Rpb24gaGFuZGxlRW50ZXIoaW5zdGFuY2UsIGUsIGlubmVyUGFyYW1zKSB7XG4gICAgLy8gIzcyMCAjNzIxXG4gICAgaWYgKGUuaXNDb21wb3NpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQgJiYgaW5zdGFuY2UuZ2V0SW5wdXQoKSAmJiBlLnRhcmdldC5vdXRlckhUTUwgPT09IGluc3RhbmNlLmdldElucHV0KCkub3V0ZXJIVE1MKSB7XG4gICAgICBpZiAoWyd0ZXh0YXJlYScsICdmaWxlJ10uaW5kZXhPZihpbm5lclBhcmFtcy5pbnB1dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybjsgLy8gZG8gbm90IHN1Ym1pdFxuICAgICAgfVxuXG4gICAgICBjbGlja0NvbmZpcm0oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZVRhYiA9IGZ1bmN0aW9uIGhhbmRsZVRhYihlLCBpbm5lclBhcmFtcykge1xuICAgIHZhciB0YXJnZXRFbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKTtcbiAgICB2YXIgYnRuSW5kZXggPSAtMTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50ID09PSBmb2N1c2FibGVFbGVtZW50c1tpXSkge1xuICAgICAgICBidG5JbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZS5zaGlmdEtleSkge1xuICAgICAgLy8gQ3ljbGUgdG8gdGhlIG5leHQgYnV0dG9uXG4gICAgICBzZXRGb2N1cyhpbm5lclBhcmFtcywgYnRuSW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDeWNsZSB0byB0aGUgcHJldiBidXR0b25cbiAgICAgIHNldEZvY3VzKGlubmVyUGFyYW1zLCBidG5JbmRleCwgLTEpO1xuICAgIH1cblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVBcnJvd3MgPSBmdW5jdGlvbiBoYW5kbGVBcnJvd3Moa2V5KSB7XG4gICAgdmFyIGNvbmZpcm1CdXR0b24gPSBnZXRDb25maXJtQnV0dG9uKCk7XG4gICAgdmFyIGRlbnlCdXR0b24gPSBnZXREZW55QnV0dG9uKCk7XG4gICAgdmFyIGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpO1xuXG4gICAgaWYgKCEoW2NvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbl0uaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KSAhPT0gLTEpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNpYmxpbmcgPSBhcnJvd0tleXNOZXh0QnV0dG9uLmluZGV4T2Yoa2V5KSAhPT0gLTEgPyAnbmV4dEVsZW1lbnRTaWJsaW5nJyA6ICdwcmV2aW91c0VsZW1lbnRTaWJsaW5nJztcbiAgICB2YXIgYnV0dG9uVG9Gb2N1cyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRbc2libGluZ107XG5cbiAgICBpZiAoYnV0dG9uVG9Gb2N1cykge1xuICAgICAgYnV0dG9uVG9Gb2N1cy5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlRXNjID0gZnVuY3Rpb24gaGFuZGxlRXNjKGUsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCkge1xuICAgIGlmIChjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd0VzY2FwZUtleSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRpc21pc3NXaXRoKERpc21pc3NSZWFzb24uZXNjKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZVBvcHVwQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVQb3B1cENsaWNrKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpIHtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcblxuICAgIGlmIChpbm5lclBhcmFtcy50b2FzdCkge1xuICAgICAgaGFuZGxlVG9hc3RDbGljayhpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWdub3JlIGNsaWNrIGV2ZW50cyB0aGF0IGhhZCBtb3VzZWRvd24gb24gdGhlIHBvcHVwIGJ1dCBtb3VzZXVwIG9uIHRoZSBjb250YWluZXJcbiAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiB3aGVuIHRoZSB1c2VyIGRyYWdzIGEgc2xpZGVyXG4gICAgICBoYW5kbGVNb2RhbE1vdXNlZG93bihkb21DYWNoZSk7IC8vIElnbm9yZSBjbGljayBldmVudHMgdGhhdCBoYWQgbW91c2Vkb3duIG9uIHRoZSBjb250YWluZXIgYnV0IG1vdXNldXAgb24gdGhlIHBvcHVwXG5cbiAgICAgIGhhbmRsZUNvbnRhaW5lck1vdXNlZG93bihkb21DYWNoZSk7XG4gICAgICBoYW5kbGVNb2RhbENsaWNrKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlVG9hc3RDbGljayA9IGZ1bmN0aW9uIGhhbmRsZVRvYXN0Q2xpY2soaW5zdGFuY2UsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCkge1xuICAgIC8vIENsb3NpbmcgdG9hc3QgYnkgaW50ZXJuYWwgY2xpY2tcbiAgICBkb21DYWNoZS5wb3B1cC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG5cbiAgICAgIGlmIChpbm5lclBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbiB8fCBpbm5lclBhcmFtcy5zaG93RGVueUJ1dHRvbiB8fCBpbm5lclBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dDbG9zZUJ1dHRvbiB8fCBpbm5lclBhcmFtcy50aW1lciB8fCBpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGRpc21pc3NXaXRoKERpc21pc3NSZWFzb24uY2xvc2UpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGlnbm9yZU91dHNpZGVDbGljayA9IGZhbHNlO1xuXG4gIHZhciBoYW5kbGVNb2RhbE1vdXNlZG93biA9IGZ1bmN0aW9uIGhhbmRsZU1vZGFsTW91c2Vkb3duKGRvbUNhY2hlKSB7XG4gICAgZG9tQ2FjaGUucG9wdXAub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkb21DYWNoZS5jb250YWluZXIub25tb3VzZXVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2V1cCA9IHVuZGVmaW5lZDsgLy8gV2Ugb25seSBjaGVjayBpZiB0aGUgbW91c2V1cCB0YXJnZXQgaXMgdGhlIGNvbnRhaW5lciBiZWNhdXNlIHVzdWFsbHkgaXQgZG9lc24ndFxuICAgICAgICAvLyBoYXZlIGFueSBvdGhlciBkaXJlY3QgY2hpbGRyZW4gYXNpZGUgb2YgdGhlIHBvcHVwXG5cbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb21DYWNoZS5jb250YWluZXIpIHtcbiAgICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGhhbmRsZUNvbnRhaW5lck1vdXNlZG93biA9IGZ1bmN0aW9uIGhhbmRsZUNvbnRhaW5lck1vdXNlZG93bihkb21DYWNoZSkge1xuICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNlZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2V1cCA9IHVuZGVmaW5lZDsgLy8gV2UgYWxzbyBuZWVkIHRvIGNoZWNrIGlmIHRoZSBtb3VzZXVwIHRhcmdldCBpcyBhIGNoaWxkIG9mIHRoZSBwb3B1cFxuXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUucG9wdXAgfHwgZG9tQ2FjaGUucG9wdXAuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBoYW5kbGVNb2RhbENsaWNrID0gZnVuY3Rpb24gaGFuZGxlTW9kYWxDbGljayhpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKSB7XG4gICAgZG9tQ2FjaGUuY29udGFpbmVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG5cbiAgICAgIGlmIChpZ25vcmVPdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb21DYWNoZS5jb250YWluZXIgJiYgY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dPdXRzaWRlQ2xpY2spKSB7XG4gICAgICAgIGRpc21pc3NXaXRoKERpc21pc3NSZWFzb24uYmFja2Ryb3ApO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gX21haW4odXNlclBhcmFtcykge1xuICAgIHZhciBtaXhpblBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgc2hvd1dhcm5pbmdzRm9yUGFyYW1zKF9leHRlbmRzKHt9LCBtaXhpblBhcmFtcywgdXNlclBhcmFtcykpO1xuXG4gICAgaWYgKGdsb2JhbFN0YXRlLmN1cnJlbnRJbnN0YW5jZSkge1xuICAgICAgZ2xvYmFsU3RhdGUuY3VycmVudEluc3RhbmNlLl9kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgZ2xvYmFsU3RhdGUuY3VycmVudEluc3RhbmNlID0gdGhpcztcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcmVwYXJlUGFyYW1zKHVzZXJQYXJhbXMsIG1peGluUGFyYW1zKTtcbiAgICBzZXRQYXJhbWV0ZXJzKGlubmVyUGFyYW1zKTtcbiAgICBPYmplY3QuZnJlZXplKGlubmVyUGFyYW1zKTsgLy8gY2xlYXIgdGhlIHByZXZpb3VzIHRpbWVyXG5cbiAgICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgICAgZ2xvYmFsU3RhdGUudGltZW91dC5zdG9wKCk7XG4gICAgICBkZWxldGUgZ2xvYmFsU3RhdGUudGltZW91dDtcbiAgICB9IC8vIGNsZWFyIHRoZSByZXN0b3JlIGZvY3VzIHRpbWVvdXRcblxuXG4gICAgY2xlYXJUaW1lb3V0KGdsb2JhbFN0YXRlLnJlc3RvcmVGb2N1c1RpbWVvdXQpO1xuICAgIHZhciBkb21DYWNoZSA9IHBvcHVsYXRlRG9tQ2FjaGUodGhpcyk7XG4gICAgcmVuZGVyKHRoaXMsIGlubmVyUGFyYW1zKTtcbiAgICBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuc2V0KHRoaXMsIGlubmVyUGFyYW1zKTtcbiAgICByZXR1cm4gc3dhbFByb21pc2UodGhpcywgZG9tQ2FjaGUsIGlubmVyUGFyYW1zKTtcbiAgfVxuXG4gIHZhciBwcmVwYXJlUGFyYW1zID0gZnVuY3Rpb24gcHJlcGFyZVBhcmFtcyh1c2VyUGFyYW1zLCBtaXhpblBhcmFtcykge1xuICAgIHZhciB0ZW1wbGF0ZVBhcmFtcyA9IGdldFRlbXBsYXRlUGFyYW1zKHVzZXJQYXJhbXMpO1xuXG4gICAgdmFyIHNob3dDbGFzcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UGFyYW1zLnNob3dDbGFzcywgbWl4aW5QYXJhbXMuc2hvd0NsYXNzLCB0ZW1wbGF0ZVBhcmFtcy5zaG93Q2xhc3MsIHVzZXJQYXJhbXMuc2hvd0NsYXNzKTtcblxuICAgIHZhciBoaWRlQ2xhc3MgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFBhcmFtcy5oaWRlQ2xhc3MsIG1peGluUGFyYW1zLmhpZGVDbGFzcywgdGVtcGxhdGVQYXJhbXMuaGlkZUNsYXNzLCB1c2VyUGFyYW1zLmhpZGVDbGFzcyk7XG5cbiAgICB2YXIgcGFyYW1zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQYXJhbXMsIG1peGluUGFyYW1zLCB0ZW1wbGF0ZVBhcmFtcywgdXNlclBhcmFtcyk7IC8vIHByZWNlZGVuY2UgaXMgZGVzY3JpYmVkIGluICMyMTMxXG5cblxuICAgIHBhcmFtcy5zaG93Q2xhc3MgPSBzaG93Q2xhc3M7XG4gICAgcGFyYW1zLmhpZGVDbGFzcyA9IGhpZGVDbGFzczsgLy8gQGRlcHJlY2F0ZWRcblxuICAgIGlmICh1c2VyUGFyYW1zLmFuaW1hdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgIHBhcmFtcy5zaG93Q2xhc3MgPSB7XG4gICAgICAgIHBvcHVwOiAnc3dhbDItbm9hbmltYXRpb24nLFxuICAgICAgICBiYWNrZHJvcDogJ3N3YWwyLW5vYW5pbWF0aW9uJ1xuICAgICAgfTtcbiAgICAgIHBhcmFtcy5oaWRlQ2xhc3MgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9O1xuXG4gIHZhciBzd2FsUHJvbWlzZSA9IGZ1bmN0aW9uIHN3YWxQcm9taXNlKGluc3RhbmNlLCBkb21DYWNoZSwgaW5uZXJQYXJhbXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIC8vIGZ1bmN0aW9ucyB0byBoYW5kbGUgYWxsIGNsb3NpbmdzL2Rpc21pc3NhbHNcbiAgICAgIHZhciBkaXNtaXNzV2l0aCA9IGZ1bmN0aW9uIGRpc21pc3NXaXRoKGRpc21pc3MpIHtcbiAgICAgICAgaW5zdGFuY2UuY2xvc2VQb3B1cCh7XG4gICAgICAgICAgaXNEaXNtaXNzZWQ6IHRydWUsXG4gICAgICAgICAgZGlzbWlzczogZGlzbWlzc1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHByaXZhdGVNZXRob2RzLnN3YWxQcm9taXNlUmVzb2x2ZS5zZXQoaW5zdGFuY2UsIHJlc29sdmUpO1xuXG4gICAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVDb25maXJtQnV0dG9uQ2xpY2soaW5zdGFuY2UsIGlubmVyUGFyYW1zKTtcbiAgICAgIH07XG5cbiAgICAgIGRvbUNhY2hlLmRlbnlCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZURlbnlCdXR0b25DbGljayhpbnN0YW5jZSwgaW5uZXJQYXJhbXMpO1xuICAgICAgfTtcblxuICAgICAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVDYW5jZWxCdXR0b25DbGljayhpbnN0YW5jZSwgZGlzbWlzc1dpdGgpO1xuICAgICAgfTtcblxuICAgICAgZG9tQ2FjaGUuY2xvc2VCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGRpc21pc3NXaXRoKERpc21pc3NSZWFzb24uY2xvc2UpO1xuICAgICAgfTtcblxuICAgICAgaGFuZGxlUG9wdXBDbGljayhpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKTtcbiAgICAgIGFkZEtleWRvd25IYW5kbGVyKGluc3RhbmNlLCBnbG9iYWxTdGF0ZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKTtcblxuICAgICAgaWYgKGlubmVyUGFyYW1zLnRvYXN0ICYmIChpbm5lclBhcmFtcy5pbnB1dCB8fCBpbm5lclBhcmFtcy5mb290ZXIgfHwgaW5uZXJQYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKSkge1xuICAgICAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1sndG9hc3QtY29sdW1uJ10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXNbJ3RvYXN0LWNvbHVtbiddKTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlSW5wdXRPcHRpb25zQW5kVmFsdWUoaW5zdGFuY2UsIGlubmVyUGFyYW1zKTtcbiAgICAgIG9wZW5Qb3B1cChpbm5lclBhcmFtcyk7XG4gICAgICBzZXR1cFRpbWVyKGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpO1xuICAgICAgaW5pdEZvY3VzKGRvbUNhY2hlLCBpbm5lclBhcmFtcyk7IC8vIFNjcm9sbCBjb250YWluZXIgdG8gdG9wIG9uIG9wZW4gKCMxMjQ3LCAjMTk0NilcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHBvcHVsYXRlRG9tQ2FjaGUgPSBmdW5jdGlvbiBwb3B1bGF0ZURvbUNhY2hlKGluc3RhbmNlKSB7XG4gICAgdmFyIGRvbUNhY2hlID0ge1xuICAgICAgcG9wdXA6IGdldFBvcHVwKCksXG4gICAgICBjb250YWluZXI6IGdldENvbnRhaW5lcigpLFxuICAgICAgY29udGVudDogZ2V0Q29udGVudCgpLFxuICAgICAgYWN0aW9uczogZ2V0QWN0aW9ucygpLFxuICAgICAgY29uZmlybUJ1dHRvbjogZ2V0Q29uZmlybUJ1dHRvbigpLFxuICAgICAgZGVueUJ1dHRvbjogZ2V0RGVueUJ1dHRvbigpLFxuICAgICAgY2FuY2VsQnV0dG9uOiBnZXRDYW5jZWxCdXR0b24oKSxcbiAgICAgIGxvYWRlcjogZ2V0TG9hZGVyKCksXG4gICAgICBjbG9zZUJ1dHRvbjogZ2V0Q2xvc2VCdXR0b24oKSxcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlOiBnZXRWYWxpZGF0aW9uTWVzc2FnZSgpLFxuICAgICAgcHJvZ3Jlc3NTdGVwczogZ2V0UHJvZ3Jlc3NTdGVwcygpXG4gICAgfTtcbiAgICBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuc2V0KGluc3RhbmNlLCBkb21DYWNoZSk7XG4gICAgcmV0dXJuIGRvbUNhY2hlO1xuICB9O1xuXG4gIHZhciBzZXR1cFRpbWVyID0gZnVuY3Rpb24gc2V0dXBUaW1lcihnbG9iYWxTdGF0ZSQkMSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKSB7XG4gICAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXIgPSBnZXRUaW1lclByb2dyZXNzQmFyKCk7XG4gICAgaGlkZSh0aW1lclByb2dyZXNzQmFyKTtcblxuICAgIGlmIChpbm5lclBhcmFtcy50aW1lcikge1xuICAgICAgZ2xvYmFsU3RhdGUkJDEudGltZW91dCA9IG5ldyBUaW1lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc21pc3NXaXRoKCd0aW1lcicpO1xuICAgICAgICBkZWxldGUgZ2xvYmFsU3RhdGUkJDEudGltZW91dDtcbiAgICAgIH0sIGlubmVyUGFyYW1zLnRpbWVyKTtcblxuICAgICAgaWYgKGlubmVyUGFyYW1zLnRpbWVyUHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgc2hvdyh0aW1lclByb2dyZXNzQmFyKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGdsb2JhbFN0YXRlJCQxLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUkJDEudGltZW91dC5ydW5uaW5nKSB7XG4gICAgICAgICAgICAvLyB0aW1lciBjYW4gYmUgYWxyZWFkeSBzdG9wcGVkIG9yIHVuc2V0IGF0IHRoaXMgcG9pbnRcbiAgICAgICAgICAgIGFuaW1hdGVUaW1lclByb2dyZXNzQmFyKGlubmVyUGFyYW1zLnRpbWVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgaW5pdEZvY3VzID0gZnVuY3Rpb24gaW5pdEZvY3VzKGRvbUNhY2hlLCBpbm5lclBhcmFtcykge1xuICAgIGlmIChpbm5lclBhcmFtcy50b2FzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dFbnRlcktleSkpIHtcbiAgICAgIHJldHVybiBibHVyQWN0aXZlRWxlbWVudCgpO1xuICAgIH1cblxuICAgIGlmICghZm9jdXNCdXR0b24oZG9tQ2FjaGUsIGlubmVyUGFyYW1zKSkge1xuICAgICAgc2V0Rm9jdXMoaW5uZXJQYXJhbXMsIC0xLCAxKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGZvY3VzQnV0dG9uID0gZnVuY3Rpb24gZm9jdXNCdXR0b24oZG9tQ2FjaGUsIGlubmVyUGFyYW1zKSB7XG4gICAgaWYgKGlubmVyUGFyYW1zLmZvY3VzRGVueSAmJiBpc1Zpc2libGUoZG9tQ2FjaGUuZGVueUJ1dHRvbikpIHtcbiAgICAgIGRvbUNhY2hlLmRlbnlCdXR0b24uZm9jdXMoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpbm5lclBhcmFtcy5mb2N1c0NhbmNlbCAmJiBpc1Zpc2libGUoZG9tQ2FjaGUuY2FuY2VsQnV0dG9uKSkge1xuICAgICAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmZvY3VzKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMuZm9jdXNDb25maXJtICYmIGlzVmlzaWJsZShkb21DYWNoZS5jb25maXJtQnV0dG9uKSkge1xuICAgICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5mb2N1cygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHZhciBibHVyQWN0aXZlRWxlbWVudCA9IGZ1bmN0aW9uIGJsdXJBY3RpdmVFbGVtZW50KCkge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIHR5cGVvZiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlcyBwb3B1cCBwYXJhbWV0ZXJzLlxuICAgKi9cblxuICBmdW5jdGlvbiB1cGRhdGUocGFyYW1zKSB7XG4gICAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuXG4gICAgaWYgKCFwb3B1cCB8fCBoYXNDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLnBvcHVwKSkge1xuICAgICAgcmV0dXJuIHdhcm4oXCJZb3UncmUgdHJ5aW5nIHRvIHVwZGF0ZSB0aGUgY2xvc2VkIG9yIGNsb3NpbmcgcG9wdXAsIHRoYXQgd29uJ3Qgd29yay4gVXNlIHRoZSB1cGRhdGUoKSBtZXRob2QgaW4gcHJlQ29uZmlybSBwYXJhbWV0ZXIgb3Igc2hvdyBhIG5ldyBwb3B1cC5cIik7XG4gICAgfVxuXG4gICAgdmFyIHZhbGlkVXBkYXRhYmxlUGFyYW1zID0ge307IC8vIGFzc2lnbiB2YWxpZCBwYXJhbXMgZnJvbSBgcGFyYW1zYCB0byBgZGVmYXVsdHNgXG5cbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICBpZiAoU3dhbC5pc1VwZGF0YWJsZVBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgICAgdmFsaWRVcGRhdGFibGVQYXJhbXNbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oXCJJbnZhbGlkIHBhcmFtZXRlciB0byB1cGRhdGU6IFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIi4gVXBkYXRhYmxlIHBhcmFtcyBhcmUgbGlzdGVkIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9ibG9iL21hc3Rlci9zcmMvdXRpbHMvcGFyYW1zLmpzXFxuXFxuSWYgeW91IHRoaW5rIHRoaXMgcGFyYW1ldGVyIHNob3VsZCBiZSB1cGRhdGFibGUsIHJlcXVlc3QgaXQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy9uZXc/dGVtcGxhdGU9MDJfZmVhdHVyZV9yZXF1ZXN0Lm1kXCIpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1cGRhdGVkUGFyYW1zID0gX2V4dGVuZHMoe30sIGlubmVyUGFyYW1zLCB2YWxpZFVwZGF0YWJsZVBhcmFtcyk7XG5cbiAgICByZW5kZXIodGhpcywgdXBkYXRlZFBhcmFtcyk7XG4gICAgcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLnNldCh0aGlzLCB1cGRhdGVkUGFyYW1zKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgdmFsdWU6IF9leHRlbmRzKHt9LCB0aGlzLnBhcmFtcywgcGFyYW1zKSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfZGVzdHJveSgpIHtcbiAgICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG5cbiAgICBpZiAoIWlubmVyUGFyYW1zKSB7XG4gICAgICByZXR1cm47IC8vIFRoaXMgaW5zdGFuY2UgaGFzIGFscmVhZHkgYmVlbiBkZXN0cm95ZWRcbiAgICB9IC8vIENoZWNrIGlmIHRoZXJlIGlzIGFub3RoZXIgU3dhbCBjbG9zaW5nXG5cblxuICAgIGlmIChkb21DYWNoZS5wb3B1cCAmJiBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2spIHtcbiAgICAgIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaygpO1xuICAgICAgZGVsZXRlIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaztcbiAgICB9IC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgc3dhbCBkaXNwb3NhbCBkZWZlciB0aW1lclxuXG5cbiAgICBpZiAoZ2xvYmFsU3RhdGUuZGVmZXJEaXNwb3NhbFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZ2xvYmFsU3RhdGUuZGVmZXJEaXNwb3NhbFRpbWVyKTtcbiAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5kZWZlckRpc3Bvc2FsVGltZXI7XG4gICAgfVxuXG4gICAgcnVuRGlkRGVzdHJveShpbm5lclBhcmFtcyk7XG4gICAgZGlzcG9zZVN3YWwodGhpcyk7XG4gIH1cblxuICB2YXIgcnVuRGlkRGVzdHJveSA9IGZ1bmN0aW9uIHJ1bkRpZERlc3Ryb3koaW5uZXJQYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIGlubmVyUGFyYW1zLmRpZERlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlubmVyUGFyYW1zLmRpZERlc3Ryb3koKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbm5lclBhcmFtcy5vbkRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlubmVyUGFyYW1zLm9uRGVzdHJveSgpOyAvLyBAZGVwcmVjYXRlZFxuICAgIH1cbiAgfTtcblxuICB2YXIgZGlzcG9zZVN3YWwgPSBmdW5jdGlvbiBkaXNwb3NlU3dhbChpbnN0YW5jZSkge1xuICAgIC8vIFVuc2V0IHRoaXMucGFyYW1zIHNvIEdDIHdpbGwgZGlzcG9zZSBpdCAoIzE1NjkpXG4gICAgZGVsZXRlIGluc3RhbmNlLnBhcmFtczsgLy8gVW5zZXQgZ2xvYmFsU3RhdGUgcHJvcHMgc28gR0Mgd2lsbCBkaXNwb3NlIGdsb2JhbFN0YXRlICgjMTU2OSlcblxuICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlcjtcbiAgICBkZWxldGUgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldDsgLy8gVW5zZXQgV2Vha01hcHMgc28gR0Mgd2lsbCBiZSBhYmxlIHRvIGRpc3Bvc2UgdGhlbSAoIzE1NjkpXG5cbiAgICB1bnNldFdlYWtNYXBzKHByaXZhdGVQcm9wcyk7XG4gICAgdW5zZXRXZWFrTWFwcyhwcml2YXRlTWV0aG9kcyk7XG4gIH07XG5cbiAgdmFyIHVuc2V0V2Vha01hcHMgPSBmdW5jdGlvbiB1bnNldFdlYWtNYXBzKG9iaikge1xuICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICBvYmpbaV0gPSBuZXcgV2Vha01hcCgpO1xuICAgIH1cbiAgfTtcblxuXG5cbiAgdmFyIGluc3RhbmNlTWV0aG9kcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBoaWRlTG9hZGluZzogaGlkZUxvYWRpbmcsXG4gICAgZGlzYWJsZUxvYWRpbmc6IGhpZGVMb2FkaW5nLFxuICAgIGdldElucHV0OiBnZXRJbnB1dCQxLFxuICAgIGNsb3NlOiBjbG9zZSxcbiAgICBjbG9zZVBvcHVwOiBjbG9zZSxcbiAgICBjbG9zZU1vZGFsOiBjbG9zZSxcbiAgICBjbG9zZVRvYXN0OiBjbG9zZSxcbiAgICBlbmFibGVCdXR0b25zOiBlbmFibGVCdXR0b25zLFxuICAgIGRpc2FibGVCdXR0b25zOiBkaXNhYmxlQnV0dG9ucyxcbiAgICBlbmFibGVJbnB1dDogZW5hYmxlSW5wdXQsXG4gICAgZGlzYWJsZUlucHV0OiBkaXNhYmxlSW5wdXQsXG4gICAgc2hvd1ZhbGlkYXRpb25NZXNzYWdlOiBzaG93VmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTogcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxLFxuICAgIGdldFByb2dyZXNzU3RlcHM6IGdldFByb2dyZXNzU3RlcHMkMSxcbiAgICBfbWFpbjogX21haW4sXG4gICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgX2Rlc3Ryb3k6IF9kZXN0cm95XG4gIH0pO1xuXG4gIHZhciBjdXJyZW50SW5zdGFuY2U7XG5cbiAgdmFyIFN3ZWV0QWxlcnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN3ZWV0QWxlcnQoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3dlZXRBbGVydCk7XG5cbiAgICAgIC8vIFByZXZlbnQgcnVuIGluIE5vZGUgZW52XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBDaGVjayBmb3IgdGhlIGV4aXN0ZW5jZSBvZiBQcm9taXNlXG5cblxuICAgICAgaWYgKHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBlcnJvcignVGhpcyBwYWNrYWdlIHJlcXVpcmVzIGEgUHJvbWlzZSBsaWJyYXJ5LCBwbGVhc2UgaW5jbHVkZSBhIHNoaW0gdG8gZW5hYmxlIGl0IGluIHRoaXMgYnJvd3NlciAoU2VlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvd2lraS9NaWdyYXRpb24tZnJvbS1Td2VldEFsZXJ0LXRvLVN3ZWV0QWxlcnQyIzEtaWUtc3VwcG9ydCknKTtcbiAgICAgIH1cblxuICAgICAgY3VycmVudEluc3RhbmNlID0gdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBvdXRlclBhcmFtcyA9IE9iamVjdC5mcmVlemUodGhpcy5jb25zdHJ1Y3Rvci5hcmdzVG9QYXJhbXMoYXJncykpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB2YWx1ZTogb3V0ZXJQYXJhbXMsXG4gICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX21haW4odGhpcy5wYXJhbXMpO1xuXG4gICAgICBwcml2YXRlUHJvcHMucHJvbWlzZS5zZXQodGhpcywgcHJvbWlzZSk7XG4gICAgfSAvLyBgY2F0Y2hgIGNhbm5vdCBiZSB0aGUgbmFtZSBvZiBhIG1vZHVsZSBleHBvcnQsIHNvIHdlIGRlZmluZSBvdXIgdGhlbmFibGUgbWV0aG9kcyBoZXJlIGluc3RlYWRcblxuXG4gICAgX2NyZWF0ZUNsYXNzKFN3ZWV0QWxlcnQsIFt7XG4gICAgICBrZXk6IFwidGhlblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBwcml2YXRlUHJvcHMucHJvbWlzZS5nZXQodGhpcyk7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4ob25GdWxmaWxsZWQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJmaW5hbGx5XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpbmFsbHkob25GaW5hbGx5KSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gcHJpdmF0ZVByb3BzLnByb21pc2UuZ2V0KHRoaXMpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZVtcImZpbmFsbHlcIl0ob25GaW5hbGx5KTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3dlZXRBbGVydDtcbiAgfSgpOyAvLyBBc3NpZ24gaW5zdGFuY2UgbWV0aG9kcyBmcm9tIHNyYy9pbnN0YW5jZU1ldGhvZHMvKi5qcyB0byBwcm90b3R5cGVcblxuXG4gIF9leHRlbmRzKFN3ZWV0QWxlcnQucHJvdG90eXBlLCBpbnN0YW5jZU1ldGhvZHMpOyAvLyBBc3NpZ24gc3RhdGljIG1ldGhvZHMgZnJvbSBzcmMvc3RhdGljTWV0aG9kcy8qLmpzIHRvIGNvbnN0cnVjdG9yXG5cblxuICBfZXh0ZW5kcyhTd2VldEFsZXJ0LCBzdGF0aWNNZXRob2RzKTsgLy8gUHJveHkgdG8gaW5zdGFuY2UgbWV0aG9kcyB0byBjb25zdHJ1Y3RvciwgZm9yIG5vdywgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cblxuICBPYmplY3Qua2V5cyhpbnN0YW5jZU1ldGhvZHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIFN3ZWV0QWxlcnRba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjdXJyZW50SW5zdGFuY2UpIHtcbiAgICAgICAgdmFyIF9jdXJyZW50SW5zdGFuY2U7XG5cbiAgICAgICAgcmV0dXJuIChfY3VycmVudEluc3RhbmNlID0gY3VycmVudEluc3RhbmNlKVtrZXldLmFwcGx5KF9jdXJyZW50SW5zdGFuY2UsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG4gIFN3ZWV0QWxlcnQuRGlzbWlzc1JlYXNvbiA9IERpc21pc3NSZWFzb247XG4gIFN3ZWV0QWxlcnQudmVyc2lvbiA9ICcxMC4xNS4yJztcblxuICB2YXIgU3dhbCA9IFN3ZWV0QWxlcnQ7XG4gIFN3YWxbXCJkZWZhdWx0XCJdID0gU3dhbDtcblxuICByZXR1cm4gU3dhbDtcblxufSkpO1xuaWYgKHR5cGVvZiB0aGlzICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLlN3ZWV0YWxlcnQyKXsgIHRoaXMuc3dhbCA9IHRoaXMuc3dlZXRBbGVydCA9IHRoaXMuU3dhbCA9IHRoaXMuU3dlZXRBbGVydCA9IHRoaXMuU3dlZXRhbGVydDJ9XG4iXSwic291cmNlUm9vdCI6IiJ9