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
      pagination: data.pagination != "" ? data.pagination : ""
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9mb3JtX2NydWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2lucHV0RXJyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvdmlzaXRvcnMuanMiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJpc0lFIiwidXNlckFnZW50IiwibmF2aWdhdG9yIiwidGVzdCIsImRpc3BsYXlBbGxEZXRhaWxzIiwiZGF0YSIsImdlc3Rpb24iLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsInRhYmxlIiwiaWQiLCJ1c2VyIiwic2Vzc2lvbl9pZCIsImRhdGFfdHlwZSIsInJldHVybl9tb2RlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwicGFyYW1zIiwiZWRpdEZvcm0iLCJmb3JtRGF0YSIsImRpc3BsYXlBbGxJdGVtcyIsInN0YXJ0IiwibWF4IiwicXVlcnkiLCJwYWdlIiwicGFnaW5hdGlvbiIsInJlc3VsdCIsImRpc3BsYXlpZCIsImh0bWwiLCJtc2ciLCJkYXRhdGFibGUiLCJsb2FkRGF0YXRhYmxlcyIsIkRhdGFUYWJsZSIsIm9yZGVyIiwiQWRkIiwiRm9ybURhdGEiLCJmcm0iLCJhcHBlbmQiLCJub3RpZmljYXRpb24iLCJmcm1fbmFtZSIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsImltYWdlVXJsc0FyeSIsImNhY2hlIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsIkNhbGxfY29udHJvbGxlciIsInVybF9kYXRhIiwiYWN0aW9uIiwiZnJlZWRhdGEiLCJ1c2VyX2lkIiwiTWFuYWdlUmVzcG9uc2UiLCJhZGRfaW5wdXRzX2Vycm9ycyIsImlucHV0c0FycmF5IiwiZXJyb3IiLCJ0cmlnZ2VyIiwibG9naW4iLCJsb2dpbmJveCIsIm1vZGFsIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJzd2FsIiwibW9kYWxib3giLCJmaXJlIiwiYWxlcnRzdWNjZXNzIiwiYWxlcnRpZCIsImhhc093blByb3BlcnR5IiwiaW1nYXJlYSIsImF0dHIiLCJpbWd2YWx1ZSIsInByZXBlbmQiLCJuZXN0ZWQiLCJiZWZvcmUiLCJoaWRlIiwiZGlzcGxheSIsIkRlbGV0ZSIsImRpc3BsYXlJdGVtIiwiY2hlY2tCZWZvcmVEZWxldGUiLCJ0aGVuIiwidmFsdWUiLCJhbGVydElEIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cmxfY2hlY2siLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiZG9uZSIsImZhaWwiLCJkaXNwbGF5TXVsdGlzZWxsZWN0IiwiZGlzcGxheUlEIiwiYWRkQ2F0ZWdvcnJpZSIsImNhdEZpZWxkIiwiY2F0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwiYWxlcnQiLCJjYXRlZ29yaWUiLCJJbnB1dEFyciIsImFyckVyciIsImZvckVhY2giLCJpbnB1dCIsImluZGV4T2YiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpbm5lckhUTUwiLCJyZXNldF9pbnZhbGlkX2lucHV0IiwiZm9ybSIsImZpbmQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZUludmFsaWRJbnB1dCIsIk15Zm9ybSIsIm9uIiwicGFyZW50IiwiY2hpbGRyZW4iLCJJbnB1dEVyciIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJhZGRDbGFzcyIsInB1c2giLCJhcnIiLCJlYWNoIiwiaW5wdXRzQXJyIiwidG9BcnJheSIsInR5cGUiLCJnZXRfdmlzaXRvcnNfZGF0YSIsImlwIiwidmFsIiwic2VuZF92aXNpdG9yc19kYXRhIiwibWFuYWdlUiIsImNvb2tpZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztB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QmlJLEdBQWpCO0FBREssS0FBWDs7QUFHQSxRQUFJbkksSUFBSixFQUFVO0FBQ1JnRixhQUFPLENBQUNoRixJQUFELENBQVA7QUFDRCxLQUZELE1BRU9pRixNQUFNLENBQUMsU0FBRCxDQUFOO0FBQ1IsR0FQTSxDQUFQO0FBUUQsQ0FUTTtBQVdBLElBQU1tRCxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNwSSxJQUFELEVBQU9xSSxPQUFQLEVBQW1CO0FBQ25EbkksR0FBQyxDQUFDQyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFViw2Q0FBUSxHQUFHTSxJQUFJLENBQUNJLEdBRGhCO0FBRUxDLFVBQU0sRUFBRSxNQUZIO0FBR0xMLFFBQUksRUFBRTtBQUNKTSxXQUFLLEVBQUVOLElBQUksQ0FBQ00sS0FEUjtBQUVKNEgsUUFBRSxFQUFFbEksSUFBSSxDQUFDa0ksRUFBTCxHQUFVbEksSUFBSSxDQUFDa0ksRUFBZixHQUFvQixFQUZwQjtBQUdKSSxhQUFPLEVBQUV0SSxJQUFJLENBQUNzSSxPQUFMLEdBQWV0SSxJQUFJLENBQUNzSSxPQUFwQixHQUE4QjtBQUhuQztBQUhELEdBQVAsRUFTRzlDLElBVEgsQ0FTUSxVQUFDM0UsUUFBRCxFQUFjO0FBQ2xCd0gsV0FBTyxDQUFDeEgsUUFBRCxDQUFQO0FBQ0QsR0FYSCxFQVlHNEUsSUFaSCxDQVlRLFVBQUN0QyxLQUFELEVBQVc7QUFDZm9GLFdBQU8sQ0FBQ0MsR0FBUixDQUFZckYsS0FBWjtBQUNELEdBZEg7QUFlRCxDQWhCTSxDIiwiZmlsZSI6ImNvbW1vbnMvZnJvbnRlbmQvY29tbW9uQ3VzdG9tTW9kdWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IFwiL2tuZ2VsbF9lY29tbWVyY2UvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaXNJRSA9ICgpID0+IHtcclxuICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICByZXR1cm4gL01TSUV8VHJpZGVudC8udGVzdCh1c2VyQWdlbnQpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBhZGRfaW5wdXRzX2Vycm9ycywgZXJyb3IsIGlucHV0c0FycmF5IH0gZnJvbSBcIi4vaW5wdXRFcnJNYW5hZ2VyXCI7XHJcblxyXG4vL2Rpc3BsYXkgYWxsIGRldGFpbHNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxEZXRhaWxzKGRhdGEsIGdlc3Rpb24pIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICB1c2VyOiBkYXRhLnVzZXIgPyBkYXRhLnVzZXIgOiBcIlwiLFxyXG4gICAgICBzZXNzaW9uX2lkOiBkYXRhLnNlc3Npb25faWQgPyBkYXRhLnNlc3Npb25faWQgOiBcIlwiLFxyXG4gICAgICBkYXRhX3R5cGU6IGRhdGEuZGF0YV90eXBlID8gZGF0YS5kYXRhX3R5cGUgOiBcIlwiLFxyXG4gICAgICByZXR1cm5fbW9kZTogZGF0YS5yZXR1cm5fbW9kZSA/IGRhdGEucmV0dXJuX21vZGUgOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbi8vZWRpdCBkYXRhXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0Rm9ybShkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLmZvcm1EYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuLy9kaXNwbGF5IGFsbCBJdGVtc1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFsbEl0ZW1zKGRhdGEpIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgIGlkOiBkYXRhLmlkICE9IFwiXCIgPyBkYXRhLmlkIDogXCJcIixcclxuICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgIG1heDogZGF0YS5tYXggIT0gXCJcIiA/IGRhdGEubWF4IDogXCJcIixcclxuICAgICAgdXNlcjogZGF0YS51c2VyICE9IFwiXCIgPyBkYXRhLnVzZXIgOiBcIlwiLFxyXG4gICAgICBxdWVyeTogZGF0YS5xdWVyeSAhPSBcIlwiID8gZGF0YS5xdWVyeSA6IFwiXCIsXHJcbiAgICAgIHBhZ2U6IGRhdGEucGFnZSAhPSBcIlwiID8gZGF0YS5wYWdlIDogXCJcIixcclxuICAgICAgcGFnaW5hdGlvbjogZGF0YS5wYWdpbmF0aW9uICE9IFwiXCIgPyBkYXRhLnBhZ2luYXRpb24gOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgLy8gZGVidWdnZXI7XHJcbiAgICAgICAgaWYgKGRhdGEudGFibGUgPT09IFwiY29tbWVudHNcIikge1xyXG4gICAgICAgICAgZGF0YS5kaXNwbGF5aWQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkYXRhLmRpc3BsYXlpZC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgICBpZiAoZGF0YS5kYXRhdGFibGUpIGxvYWREYXRhdGFibGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoZGF0YS5kaXNwbGF5aWQpLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBsb2FkRGF0YXRhYmxlcygpIHtcclxuICBjb25zdCBEYXRhVGFibGUgPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImRhdGF0YWJsZXNcIiAqLyBcImRhdGF0YWJsZXMubmV0XCJcclxuICApO1xyXG4gICQoXCJ0YWJsZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgb3JkZXI6IFswLCBcImRlc2NcIl0sXHJcbiAgfSk7XHJcbn1cclxuLy9hZGQgSXRlbVxyXG5leHBvcnQgZnVuY3Rpb24gQWRkKGRhdGEsIGdlc3Rpb24pIHtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZGF0YS5mcm1bMF0pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcInRhYmxlXCIsIGRhdGEudGFibGUpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcIm5vdGlmaWNhdGlvblwiLCBkYXRhLm5vdGlmaWNhdGlvbik7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwiZnJtX25hbWVcIiwgZGF0YS5mcm1fbmFtZSk7XHJcbiAgaWYgKGRhdGEuc3RhcnRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwic3RhcnRfZGF0ZVwiLCBkYXRhLnN0YXJ0X2RhdGUpO1xyXG4gIGlmIChkYXRhLmVuZF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJlbmRfZGF0ZVwiLCBkYXRhLmVuZF9kYXRlKTtcclxuICBpZiAoZGF0YS5pbWFnZVVybHNBcnkpIGZvcm1EYXRhLmFwcGVuZChcImltYWdlVXJsc0FyeVwiLCBkYXRhLmltYWdlVXJsc0FyeSk7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIGNhY2hlOiBmYWxzZSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbi8vdXBkYXRlXHJcbmV4cG9ydCBmdW5jdGlvbiBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgZ2VzdGlvbikge1xyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkYXRhLmZybVswXSk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwiZnJtX25hbWVcIiwgZGF0YS5mcm1fbmFtZSk7XHJcbiAgaWYgKGRhdGEudGFibGUpIGZvcm1EYXRhLmFwcGVuZChcInRhYmxlXCIsIGRhdGEudGFibGUpO1xyXG4gIGlmIChkYXRhLm5vdGlmaWNhdGlvbikgZm9ybURhdGEuYXBwZW5kKFwibm90aWZpY2F0aW9uXCIsIGRhdGEubm90aWZpY2F0aW9uKTtcclxuICBpZiAoZGF0YS51cmxfZGF0YSkgZm9ybURhdGEuYXBwZW5kKFwidXJsX2RhdGFcIiwgZGF0YS51cmxfZGF0YSk7XHJcbiAgaWYgKGRhdGEuYWN0aW9uKSBmb3JtRGF0YS5hcHBlbmQoXCJhY3Rpb25cIiwgZGF0YS5hY3Rpb24pO1xyXG4gIGlmIChkYXRhLmltYWdlVXJsc0FyeSkgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VVcmxzQXJ5XCIsIGRhdGEuaW1hZ2VVcmxzQXJ5KTtcclxuICBpZiAoZGF0YS5mcmVlZGF0YSkgZm9ybURhdGEuYXBwZW5kKFwiZnJlZWRhdGFcIiwgZGF0YS5mcmVlZGF0YSk7XHJcbiAgaWYgKGRhdGEuc3RhcnRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwic3RhcnRfZGF0ZVwiLCBkYXRhLnN0YXJ0X2RhdGUpO1xyXG4gIGlmIChkYXRhLmVuZF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJlbmRfZGF0ZVwiLCBkYXRhLmVuZF9kYXRlKTtcclxuICBpZiAoZGF0YS5pZCkgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgZGF0YS5pZCk7XHJcbiAgaWYgKGRhdGEudXNlcl9pZCkgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgZGF0YS51c2VyX2lkKTtcclxuICBpZiAoZGF0YS5tZXRob2QpIGZvcm1EYXRhLmFwcGVuZChcIm1ldGhvZFwiLCBkYXRhLm1ldGhvZCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbi8vTWFuYWdlIGl0ZW0gYWRkZWQvdXBkYXRlZFxyXG5leHBvcnQgZnVuY3Rpb24gTWFuYWdlUmVzcG9uc2UocmVzcG9uc2UsIGRhdGEpIHtcclxuICBzd2l0Y2ggKHJlc3BvbnNlLnJlc3VsdCkge1xyXG4gICAgY2FzZSBcImVycm9yLWZpZWxkXCI6XHJcbiAgICAgIGFkZF9pbnB1dHNfZXJyb3JzKGlucHV0c0FycmF5KGRhdGEuZnJtKSwgZXJyb3IoZGF0YS5mcm0sIHJlc3BvbnNlLm1zZykpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJzdWNjZXNzXCI6XHJcbiAgICAgIGRhdGEuZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgaWYgKGRhdGEubG9naW4pIHtcclxuICAgICAgICBkYXRhLmxvZ2luYm94Lm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGEuc3dhbCkge1xyXG4gICAgICAgIGRhdGEubW9kYWxib3gubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgIGRhdGEuc3dhbC5maXJlKFwiU3VjY2VzcyFcIiwgcmVzcG9uc2UubXNnLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGRhdGEuYWxlcnRzdWNjZXNzKSBkYXRhLmFsZXJ0aWQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiaW1nYXJlYVwiKSkge1xyXG4gICAgICAgIGRhdGEuaW1nYXJlYS5hdHRyKFwic3JjXCIsIGRhdGEuaW1ndmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhLnByZXBlbmQpIHtcclxuICAgICAgICBkYXRhLm5lc3RlZC5wcmVwZW5kKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGRhdGEucHJlcGVuZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGRhdGEubmVzdGVkLmJlZm9yZShyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgZGF0YS5uZXN0ZWQuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YS5kaXNwbGF5KSBkYXRhLmRpc3BsYXkoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiZXJyb3JcIjpcclxuICAgICAgZGF0YS5hbGVydGlkLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgZGF0YS5mcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn1cclxuXHJcbi8vZGVsZXRlXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGUoZGF0YSwgZGlzcGxheUl0ZW0pIHtcclxuICBjaGVja0JlZm9yZURlbGV0ZShkYXRhKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICAgICAgbm90aWZpY2F0aW9uOiBkYXRhLm5vdGlmaWNhdGlvbixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgZGF0YS5zd2FsLmZpcmUoXCJEZWxldGVkIVwiLCByZXNwb25zZS5tc2csIFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgZGlzcGxheUl0ZW0oKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGEuYWxlcnRJRC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuLy9mdW5jdGlvbiBjaGVjayBiZWZvcmUgZGVsZXRlXHJcbmZ1bmN0aW9uIGNoZWNrQmVmb3JlRGVsZXRlKGRhdGEpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgaWYgKCFkYXRhLnVybF9jaGVjaykge1xyXG4gICAgICBkYXRhLnN3YWxcclxuICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgaHRtbDogXCI8cD5Zb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyE8L3A+XCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiRGVsZXRlIVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmxfY2hlY2ssXHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICAgICAgbm90aWZpY2F0aW9uOiBkYXRhLm5vdGlmaWNhdGlvbixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgZGF0YS5zd2FsXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBodG1sOiBcIjxwPllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzITwvcD5cIiArIHJlc3BvbnNlLm1zZyxcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJEZWxldGUhXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZhaWwoKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TXVsdGlzZWxsZWN0KGRhdGEpIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIFwiZm9ybXMvZmlsbE11bHRpc2VsZWN0XCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICBkYXRhLmRpc3BsYXlJRC5hcHBlbmQocmVzcG9uc2UubXNnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhLmFsZXJ0SUQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2F0ZWdvcnJpZShjYXRGaWVsZCwgYWxlcnRJRCkge1xyXG4gIGxldCBjYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhdEZpZWxkKTtcclxuICBpZiAoY2F0LnZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICBhbGVydChcIkxlIGNoYW1wcyBjYXTDqWdvcmllIGVzdCB2aWRlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IEJBU0VfVVJMICsgXCJmb3Jtcy9hZGRjYXRlZ29yaWVcIixcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNhdGVnb3JpZTogY2F0LnZhbHVlLFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UgIT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICQoYWxlcnRJRCkuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBhZGRfaW5wdXRzX2Vycm9ycyA9IChJbnB1dEFyciwgYXJyRXJyKSA9PiB7XHJcbiAgSW5wdXRBcnIuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgIGlmIChhcnJFcnIuaW5kZXhPZihpbnB1dC5pZCkgPT0gLTEpIHtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWludmFsaWRcIik7XHJcbiAgICAgIGlucHV0Lm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0X2ludmFsaWRfaW5wdXQgPSAoZm9ybSkgPT4ge1xyXG4gIGZvcm0uZmluZChcIi5pcy1pbnZhbGlkXCIpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICBmb3JtLmZpbmQoXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG59O1xyXG5cclxuLy9yZW1vdmUgaW52YWxpZCBpbnB1dCBvbiBmb2N1c1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSW52YWxpZElucHV0KE15Zm9ybSkge1xyXG4gIE15Zm9ybS5vbihcImZvY3VzXCIsIFwiaW5wdXQsdGV4dGFyZWEsIC5jaywgLm5vdGUtZWRpdG9yXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwoXCJcIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlcnJvciA9IChmb3JtLCBJbnB1dEVycikgPT4ge1xyXG4gIHZhciBhcnJFcnIgPSBbXTtcclxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhJbnB1dEVycikpIHtcclxuICAgIHZhciBpbnB1dCA9IGZvcm0uZmluZChcIiNcIiArIGtleSkuYWRkQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgaW5wdXQucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKHZhbHVlKTtcclxuICAgIGFyckVyci5wdXNoKGtleSk7XHJcbiAgfVxyXG4gIHJldHVybiBhcnJFcnI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5wdXRzQXJyYXkgPSAoZm9ybSkgPT4ge1xyXG4gIHZhciBhcnIgPSBbXTtcclxuICBmb3JtLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaW5wdXRzQXJyID0gJCh0aGlzKS5maW5kKFwiOmlucHV0XCIpLnRvQXJyYXkoKTtcclxuICAgIGlucHV0c0Fyci5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgW1wic3VibWl0XCIsIFwiaGlkZGVuXCIsIFwiY2hlY2tib3hcIiwgXCJidXR0b25cIiwgXCJmaWxlXCJdLmluZGV4T2YoXHJcbiAgICAgICAgICBpbnB1dC50eXBlXHJcbiAgICAgICAgKSA9PSAtMSAmJlxyXG4gICAgICAgIGlucHV0Lm5leHRFbGVtZW50U2libGluZ1xyXG4gICAgICApIHtcclxuICAgICAgICBhcnIucHVzaChpbnB1dCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiBhcnI7XHJcbn07XHJcbiIsIi8vR2V0IHZpc2l0b3JzIERhdGFcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuZXhwb3J0IGNvbnN0IGdldF92aXNpdG9yc19kYXRhID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgaXA6ICQoXCIjaXBfYWRkcmVzc1wiKS52YWwoKSxcclxuICAgIH07XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgfSBlbHNlIHJlamVjdChcIm5vIGRhdGFcIik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZF92aXNpdG9yc19kYXRhID0gKGRhdGEsIG1hbmFnZVIpID0+IHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgIGlwOiBkYXRhLmlwID8gZGF0YS5pcCA6IFwiXCIsXHJcbiAgICAgIGNvb2tpZXM6IGRhdGEuY29va2llcyA/IGRhdGEuY29va2llcyA6IFwiXCIsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgbWFuYWdlUihyZXNwb25zZSk7XHJcbiAgICB9KVxyXG4gICAgLmZhaWwoKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9