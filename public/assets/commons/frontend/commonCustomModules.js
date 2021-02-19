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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9mb3JtX2NydWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2lucHV0RXJyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvdmlzaXRvcnMuanMiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJpc0lFIiwidXNlckFnZW50IiwibmF2aWdhdG9yIiwidGVzdCIsImRpc3BsYXlBbGxEZXRhaWxzIiwiZGF0YSIsImdlc3Rpb24iLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsInRhYmxlIiwiaWQiLCJ1c2VyIiwic2Vzc2lvbl9pZCIsImRhdGFfdHlwZSIsInJldHVybl9tb2RlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwicGFyYW1zIiwiZWRpdEZvcm0iLCJmb3JtRGF0YSIsImRpc3BsYXlBbGxJdGVtcyIsInN0YXJ0IiwibWF4IiwicXVlcnkiLCJwYWdlIiwicGFnaW5hdGlvbiIsInJlc3VsdCIsImRpc3BsYXlpZCIsImh0bWwiLCJtc2ciLCJkYXRhdGFibGUiLCJsb2FkRGF0YXRhYmxlcyIsIkRhdGFUYWJsZSIsIm9yZGVyIiwiQWRkIiwiRm9ybURhdGEiLCJmcm0iLCJhcHBlbmQiLCJub3RpZmljYXRpb24iLCJmcm1fbmFtZSIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsImltYWdlVXJsc0FyeSIsImNhY2hlIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsIkNhbGxfY29udHJvbGxlciIsInVybF9kYXRhIiwiYWN0aW9uIiwiZnJlZWRhdGEiLCJ1c2VyX2lkIiwiTWFuYWdlUmVzcG9uc2UiLCJhZGRfaW5wdXRzX2Vycm9ycyIsImlucHV0c0FycmF5IiwiZXJyb3IiLCJ0cmlnZ2VyIiwibG9naW4iLCJsb2dpbmJveCIsIm1vZGFsIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJzd2FsIiwibW9kYWxib3giLCJmaXJlIiwiYWxlcnRzdWNjZXNzIiwiYWxlcnRpZCIsImhhc093blByb3BlcnR5IiwiaW1nYXJlYSIsImF0dHIiLCJpbWd2YWx1ZSIsInByZXBlbmQiLCJuZXN0ZWQiLCJiZWZvcmUiLCJoaWRlIiwiZGlzcGxheSIsIkRlbGV0ZSIsImRpc3BsYXlJdGVtIiwiY2hlY2tCZWZvcmVEZWxldGUiLCJ0aGVuIiwidmFsdWUiLCJhbGVydElEIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cmxfY2hlY2siLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiZG9uZSIsImZhaWwiLCJkaXNwbGF5TXVsdGlzZWxsZWN0IiwiZGlzcGxheUlEIiwiYWRkQ2F0ZWdvcnJpZSIsImNhdEZpZWxkIiwiY2F0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwiYWxlcnQiLCJjYXRlZ29yaWUiLCJJbnB1dEFyciIsImFyckVyciIsImZvckVhY2giLCJpbnB1dCIsImluZGV4T2YiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpbm5lckhUTUwiLCJyZXNldF9pbnZhbGlkX2lucHV0IiwiZm9ybSIsImZpbmQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZUludmFsaWRJbnB1dCIsIk15Zm9ybSIsIm9uIiwicGFyZW50IiwiY2hpbGRyZW4iLCJJbnB1dEVyciIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJhZGRDbGFzcyIsInB1c2giLCJhcnIiLCJlYWNoIiwiaW5wdXRzQXJyIiwidG9BcnJheSIsInR5cGUiLCJnZXRfdmlzaXRvcnNfZGF0YSIsImlwIiwidmFsIiwic2VuZF92aXNpdG9yc19kYXRhIiwibWFuYWdlUiIsImNvb2tpZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztB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QXBCQSxpQkFBb0IsR0FBTTtBQUNyQyxTQUFPLElBQUlsRCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLFFBQUlqRixJQUFJLEdBQUc7QUFDVGtJLFFBQUUsRUFBRWhJLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJpSSxHQUFqQjtBQURLLEtBQVg7O0FBR0EsUUFBSW5JLElBQUosRUFBVTtBQUNSZ0YsYUFBTyxDQUFDaEYsSUFBRCxDQUFQO0FBQ0QsS0FGRCxNQUVPaUYsTUFBTSxDQUFDLFNBQUQsQ0FBTjtBQUNSLEdBUE0sQ0FBUDtBQVFELENBVE07QUFXQSxJQUFNbUQsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDcEksSUFBRCxFQUFPcUksT0FBUCxFQUFtQjtBQUNuRG5JLEdBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRVYsNkNBQVEsR0FBR00sSUFBSSxDQUFDSSxHQURoQjtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdMTCxRQUFJLEVBQUU7QUFDSk0sV0FBSyxFQUFFTixJQUFJLENBQUNNLEtBRFI7QUFFSjRILFFBQUUsRUFBRWxJLElBQUksQ0FBQ2tJLEVBQUwsR0FBVWxJLElBQUksQ0FBQ2tJLEVBQWYsR0FBb0IsRUFGcEI7QUFHSkksYUFBTyxFQUFFdEksSUFBSSxDQUFDc0ksT0FBTCxHQUFldEksSUFBSSxDQUFDc0ksT0FBcEIsR0FBOEI7QUFIbkM7QUFIRCxHQUFQLEVBU0c5QyxJQVRILENBU1EsVUFBQzNFLFFBQUQsRUFBYztBQUNsQndILFdBQU8sQ0FBQ3hILFFBQUQsQ0FBUDtBQUNELEdBWEgsRUFZRzRFLElBWkgsQ0FZUSxVQUFDdEMsS0FBRCxFQUFXO0FBQ2ZvRixXQUFPLENBQUNDLEdBQVIsQ0FBWXJGLEtBQVo7QUFDRCxHQWRIO0FBZUQsQ0FoQk0sQyIsImZpbGUiOiJjb21tb25zL2Zyb250ZW5kL2NvbW1vbkN1c3RvbU1vZHVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQkFTRV9VUkwgPSBcIi9rbmdlbGxfZWNvbW1lcmNlL1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzSUUgPSAoKSA9PiB7XHJcbiAgdmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgcmV0dXJuIC9NU0lFfFRyaWRlbnQvLnRlc3QodXNlckFnZW50KTtcclxufTtcclxuIiwiaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgYWRkX2lucHV0c19lcnJvcnMsIGVycm9yLCBpbnB1dHNBcnJheSB9IGZyb20gXCIuL2lucHV0RXJyTWFuYWdlclwiO1xyXG5cclxuLy9kaXNwbGF5IGFsbCBkZXRhaWxzXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsRGV0YWlscyhkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgdXNlcjogZGF0YS51c2VyID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgc2Vzc2lvbl9pZDogZGF0YS5zZXNzaW9uX2lkID8gZGF0YS5zZXNzaW9uX2lkIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL2VkaXQgZGF0YVxyXG5leHBvcnQgZnVuY3Rpb24gZWRpdEZvcm0oZGF0YSwgZ2VzdGlvbikge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YS5mb3JtRGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vZGlzcGxheSBhbGwgSXRlbXNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxJdGVtcyhkYXRhKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCAhPSBcIlwiID8gZGF0YS5pZCA6IFwiXCIsXHJcbiAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICBtYXg6IGRhdGEubWF4ICE9IFwiXCIgPyBkYXRhLm1heCA6IFwiXCIsXHJcbiAgICAgIHVzZXI6IGRhdGEudXNlciAhPSBcIlwiID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgcXVlcnk6IGRhdGEucXVlcnkgIT0gXCJcIiA/IGRhdGEucXVlcnkgOiBcIlwiLFxyXG4gICAgICBwYWdlOiBkYXRhLnBhZ2UgIT0gXCJcIiA/IGRhdGEucGFnZSA6IFwiXCIsXHJcbiAgICAgIHBhZ2luYXRpb246IGRhdGEucGFnaW5hdGlvbiAhPSBcIlwiID8gZGF0YS5wYWdpbmF0aW9uIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICAgIGlmIChkYXRhLnRhYmxlID09PSBcImNvbW1lbnRzXCIpIHtcclxuICAgICAgICAgIGRhdGEuZGlzcGxheWlkLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGF0YS5kaXNwbGF5aWQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgaWYgKGRhdGEuZGF0YXRhYmxlKSBsb2FkRGF0YXRhYmxlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKGRhdGEuZGlzcGxheWlkKS5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gbG9hZERhdGF0YWJsZXMoKSB7XHJcbiAgY29uc3QgRGF0YVRhYmxlID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJkYXRhdGFibGVzXCIgKi8gXCJkYXRhdGFibGVzLm5ldFwiXHJcbiAgKTtcclxuICAkKFwidGFibGVcIikuRGF0YVRhYmxlKHtcclxuICAgIG9yZGVyOiBbMCwgXCJkZXNjXCJdLFxyXG4gIH0pO1xyXG59XHJcbi8vYWRkIEl0ZW1cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZChkYXRhLCBnZXN0aW9uKSB7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEuZnJtWzBdKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJ0YWJsZVwiLCBkYXRhLnRhYmxlKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJub3RpZmljYXRpb25cIiwgZGF0YS5ub3RpZmljYXRpb24pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImZybV9uYW1lXCIsIGRhdGEuZnJtX25hbWUpO1xyXG4gIGlmIChkYXRhLnN0YXJ0X2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcInN0YXJ0X2RhdGVcIiwgZGF0YS5zdGFydF9kYXRlKTtcclxuICBpZiAoZGF0YS5lbmRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwiZW5kX2RhdGVcIiwgZGF0YS5lbmRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuaW1hZ2VVcmxzQXJ5KSBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVVybHNBcnlcIiwgZGF0YS5pbWFnZVVybHNBcnkpO1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICBjYWNoZTogZmFsc2UsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL3VwZGF0ZVxyXG5leHBvcnQgZnVuY3Rpb24gQ2FsbF9jb250cm9sbGVyKGRhdGEsIGdlc3Rpb24pIHtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZGF0YS5mcm1bMF0pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImZybV9uYW1lXCIsIGRhdGEuZnJtX25hbWUpO1xyXG4gIGlmIChkYXRhLnRhYmxlKSBmb3JtRGF0YS5hcHBlbmQoXCJ0YWJsZVwiLCBkYXRhLnRhYmxlKTtcclxuICBpZiAoZGF0YS5ub3RpZmljYXRpb24pIGZvcm1EYXRhLmFwcGVuZChcIm5vdGlmaWNhdGlvblwiLCBkYXRhLm5vdGlmaWNhdGlvbik7XHJcbiAgaWYgKGRhdGEudXJsX2RhdGEpIGZvcm1EYXRhLmFwcGVuZChcInVybF9kYXRhXCIsIGRhdGEudXJsX2RhdGEpO1xyXG4gIGlmIChkYXRhLmFjdGlvbikgZm9ybURhdGEuYXBwZW5kKFwiYWN0aW9uXCIsIGRhdGEuYWN0aW9uKTtcclxuICBpZiAoZGF0YS5pbWFnZVVybHNBcnkpIGZvcm1EYXRhLmFwcGVuZChcImltYWdlVXJsc0FyeVwiLCBkYXRhLmltYWdlVXJsc0FyeSk7XHJcbiAgaWYgKGRhdGEuZnJlZWRhdGEpIGZvcm1EYXRhLmFwcGVuZChcImZyZWVkYXRhXCIsIGRhdGEuZnJlZWRhdGEpO1xyXG4gIGlmIChkYXRhLnN0YXJ0X2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcInN0YXJ0X2RhdGVcIiwgZGF0YS5zdGFydF9kYXRlKTtcclxuICBpZiAoZGF0YS5lbmRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwiZW5kX2RhdGVcIiwgZGF0YS5lbmRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuaWQpIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGRhdGEuaWQpO1xyXG4gIGlmIChkYXRhLnVzZXJfaWQpIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGRhdGEudXNlcl9pZCk7XHJcbiAgaWYgKGRhdGEubWV0aG9kKSBmb3JtRGF0YS5hcHBlbmQoXCJtZXRob2RcIiwgZGF0YS5tZXRob2QpO1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL01hbmFnZSBpdGVtIGFkZGVkL3VwZGF0ZWRcclxuZXhwb3J0IGZ1bmN0aW9uIE1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCBkYXRhKSB7XHJcbiAgc3dpdGNoIChyZXNwb25zZS5yZXN1bHQpIHtcclxuICAgIGNhc2UgXCJlcnJvci1maWVsZFwiOlxyXG4gICAgICBhZGRfaW5wdXRzX2Vycm9ycyhpbnB1dHNBcnJheShkYXRhLmZybSksIGVycm9yKGRhdGEuZnJtLCByZXNwb25zZS5tc2cpKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwic3VjY2Vzc1wiOlxyXG4gICAgICBkYXRhLmZybS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgIGlmIChkYXRhLmxvZ2luKSB7XHJcbiAgICAgICAgZGF0YS5sb2dpbmJveC5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhLnN3YWwpIHtcclxuICAgICAgICBkYXRhLm1vZGFsYm94Lm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICBkYXRhLnN3YWwuZmlyZShcIlN1Y2Nlc3MhXCIsIHJlc3BvbnNlLm1zZywgXCJzdWNjZXNzXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChkYXRhLmFsZXJ0c3VjY2VzcykgZGF0YS5hbGVydGlkLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImltZ2FyZWFcIikpIHtcclxuICAgICAgICBkYXRhLmltZ2FyZWEuYXR0cihcInNyY1wiLCBkYXRhLmltZ3ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YS5wcmVwZW5kKSB7XHJcbiAgICAgICAgZGF0YS5uZXN0ZWQucHJlcGVuZChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChkYXRhLnByZXBlbmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBkYXRhLm5lc3RlZC5iZWZvcmUocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIGRhdGEubmVzdGVkLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGEuZGlzcGxheSkgZGF0YS5kaXNwbGF5KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImVycm9yXCI6XHJcbiAgICAgIGRhdGEuYWxlcnRpZC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIGRhdGEuZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59XHJcblxyXG4vL2RlbGV0ZVxyXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlKGRhdGEsIGRpc3BsYXlJdGVtKSB7XHJcbiAgY2hlY2tCZWZvcmVEZWxldGUoZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgICAgIG5vdGlmaWNhdGlvbjogZGF0YS5ub3RpZmljYXRpb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIGRhdGEuc3dhbC5maXJlKFwiRGVsZXRlZCFcIiwgcmVzcG9uc2UubXNnLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIGRpc3BsYXlJdGVtKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhLmFsZXJ0SUQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbi8vZnVuY3Rpb24gY2hlY2sgYmVmb3JlIGRlbGV0ZVxyXG5mdW5jdGlvbiBjaGVja0JlZm9yZURlbGV0ZShkYXRhKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGlmICghZGF0YS51cmxfY2hlY2spIHtcclxuICAgICAgZGF0YS5zd2FsXHJcbiAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgIGh0bWw6IFwiPHA+WW91IHdvbid0IGJlIGFibGUgdG8gcmV2ZXJ0IHRoaXMhPC9wPlwiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkRlbGV0ZSFcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsX2NoZWNrLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgICAgIG5vdGlmaWNhdGlvbjogZGF0YS5ub3RpZmljYXRpb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGRhdGEuc3dhbFxyXG4gICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgaHRtbDogXCI8cD5Zb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyE8L3A+XCIgKyByZXNwb25zZS5tc2csXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiRGVsZXRlIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU11bHRpc2VsbGVjdChkYXRhKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBcImZvcm1zL2ZpbGxNdWx0aXNlbGVjdFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgZGF0YS5kaXNwbGF5SUQuYXBwZW5kKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YS5hbGVydElELmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhdGVnb3JyaWUoY2F0RmllbGQsIGFsZXJ0SUQpIHtcclxuICBsZXQgY2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXRGaWVsZCk7XHJcbiAgaWYgKGNhdC52YWx1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgYWxlcnQoXCJMZSBjaGFtcHMgY2F0w6lnb3JpZSBlc3QgdmlkZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIFwiZm9ybXMvYWRkY2F0ZWdvcmllXCIsXHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjYXRlZ29yaWU6IGNhdC52YWx1ZSxcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlICE9IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAkKGFsZXJ0SUQpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgYWRkX2lucHV0c19lcnJvcnMgPSAoSW5wdXRBcnIsIGFyckVycikgPT4ge1xyXG4gIElucHV0QXJyLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICBpZiAoYXJyRXJyLmluZGV4T2YoaW5wdXQuaWQpID09IC0xKSB7XHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgICBpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXNldF9pbnZhbGlkX2lucHV0ID0gKGZvcm0pID0+IHtcclxuICBmb3JtLmZpbmQoXCIuaXMtaW52YWxpZFwiKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgZm9ybS5maW5kKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxufTtcclxuXHJcbi8vcmVtb3ZlIGludmFsaWQgaW5wdXQgb24gZm9jdXNcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUludmFsaWRJbnB1dChNeWZvcm0pIHtcclxuICBNeWZvcm0ub24oXCJmb2N1c1wiLCBcImlucHV0LHRleHRhcmVhLCAuY2ssIC5ub3RlLWVkaXRvclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3IgPSAoZm9ybSwgSW5wdXRFcnIpID0+IHtcclxuICB2YXIgYXJyRXJyID0gW107XHJcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoSW5wdXRFcnIpKSB7XHJcbiAgICB2YXIgaW5wdXQgPSBmb3JtLmZpbmQoXCIjXCIgKyBrZXkpLmFkZENsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgIGlucHV0LnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbCh2YWx1ZSk7XHJcbiAgICBhcnJFcnIucHVzaChrZXkpO1xyXG4gIH1cclxuICByZXR1cm4gYXJyRXJyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlucHV0c0FycmF5ID0gKGZvcm0pID0+IHtcclxuICB2YXIgYXJyID0gW107XHJcbiAgZm9ybS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGlucHV0c0FyciA9ICQodGhpcykuZmluZChcIjppbnB1dFwiKS50b0FycmF5KCk7XHJcbiAgICBpbnB1dHNBcnIuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIFtcInN1Ym1pdFwiLCBcImhpZGRlblwiLCBcImNoZWNrYm94XCIsIFwiYnV0dG9uXCIsIFwiZmlsZVwiXS5pbmRleE9mKFxyXG4gICAgICAgICAgaW5wdXQudHlwZVxyXG4gICAgICAgICkgPT0gLTEgJiZcclxuICAgICAgICBpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgICAgKSB7XHJcbiAgICAgICAgYXJyLnB1c2goaW5wdXQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gYXJyO1xyXG59O1xyXG4iLCIvL0dldCB2aXNpdG9ycyBEYXRhXHJcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmV4cG9ydCBjb25zdCBnZXRfdmlzaXRvcnNfZGF0YSA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIGlwOiAkKFwiI2lwX2FkZHJlc3NcIikudmFsKCksXHJcbiAgICB9O1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgIH0gZWxzZSByZWplY3QoXCJubyBkYXRhXCIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRfdmlzaXRvcnNfZGF0YSA9IChkYXRhLCBtYW5hZ2VSKSA9PiB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpcDogZGF0YS5pcCA/IGRhdGEuaXAgOiBcIlwiLFxyXG4gICAgICBjb29raWVzOiBkYXRhLmNvb2tpZXMgPyBkYXRhLmNvb2tpZXMgOiBcIlwiLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIG1hbmFnZVIocmVzcG9uc2UpO1xyXG4gICAgfSlcclxuICAgIC5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==