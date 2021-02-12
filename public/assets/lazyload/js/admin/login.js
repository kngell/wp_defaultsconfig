(self["webpackChunkkngell"] = self["webpackChunkkngell"] || []).push([["login"],{

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
      console.log(response.msg);

      if (data.login) {
        data.loginbox.modal("hide");
        window.location.reload();
      }

      if (data.swal) {
        data.modalbox.modal("hide");
        data.swal.fire({
          title: response.msg,
          type: "success"
        });
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
  if (data.url_check) {
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
  }
} //function check before delete

function checkBeforeDelete(data) {
  return new Promise(function (resolve, reject) {
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
        type: "warning",
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
      reset_invalid_input(phpLR.loginfrm);
    }
  }); //Reset register form invalid input on hide modal

  phpLR.regbox.on("hide.bs.modal", function () {
    if (phpLR.regfrm.find(".is-invalid").length != 0) {
      reset_invalid_input(phpLR.regfrm);
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

  phpLR.logbox.on("show.bs.modal", function () {
    $.ajax({
      url: corejs_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + "users/logincookies",
      method: "post",
      success: function success(response) {
        if (response.result === "success") {
          phpLR.loginfrm.find("#email").val(response.msg);
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
      url: "users/ajaxRegister",
      frm: phpLR.regfrm,
      table: "users",
      notification: "admin",
      frm_name: "register-frm"
    };
    (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_2__.Add)(inputData, gestionR);

    function gestionR(response) {
      phpLR.regfrm.find("#register-btn").val("Enregistrer");
      var outputData = {
        frm: phpLR.regfrm,
        swal: false,
        alertid: phpLR.regfrm.find("#regAlert"),
        display: false,
        imgarea: phpLR.regbox.find(".upload-profile-image .img"),
        imgvalue: "/kngell/public/assets/img/register/profile/beard.png",
        alertsuccess: true
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_2__.ManageResponse)(response, outputData);
    }
  }); //read profile image on change

  phpLR.regbox.find('.upload-profile-image input[type="file"]').on("change", function () {
    readurl(this, phpLR.regbox.find(".upload-profile-image .img"), phpLR.regbox.find(".upload-profile-image .camera-icon"));
  }); //Login form

  phpLR.loginfrm.on("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();
    phpLR.loginfrm.find("#login-btn").val("Please wait...");
    var data = {
      url: "users/ajaxLogin",
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
        url: "users/fblogin",
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
      url: "users/forgot",
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
  }); //----------------------Ajax logout from elsewhere

  var logout = $("a:contains('Logout')");
  $(logout).on("click", function () {
    if (typeof FB !== "undefined") {
      FB.logout().then(function (response) {// logged out
      });
    }

    $.ajax({
      url: corejs_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + "users/logout",
      method: "post",
      success: function success(response) {
        if (response === "success") {
          logout.closest("div").load(location.href + " .connect");
        }
      }
    });
  });
};

$.fn.phpLR = function (options) {
  new PhpLR(this);
  return this;
};

$("#Login-Register-System").phpLR();

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9mb3JtX2NydWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2lucHV0RXJyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvbG9ncmVnLmpzIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwiaXNJRSIsInVzZXJBZ2VudCIsIm5hdmlnYXRvciIsInRlc3QiLCJkaXNwbGF5QWxsRGV0YWlscyIsImRhdGEiLCJnZXN0aW9uIiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJ0YWJsZSIsImlkIiwidXNlciIsInNlc3Npb25faWQiLCJkYXRhX3R5cGUiLCJyZXR1cm5fbW9kZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInBhcmFtcyIsImVkaXRGb3JtIiwiZm9ybURhdGEiLCJkaXNwbGF5QWxsSXRlbXMiLCJzdGFydCIsIm1heCIsInF1ZXJ5IiwicGFnZSIsInBhZ2luYXRpb24iLCJyZXN1bHQiLCJkaXNwbGF5aWQiLCJodG1sIiwibXNnIiwiZGF0YXRhYmxlIiwibG9hZERhdGF0YWJsZXMiLCJEYXRhVGFibGUiLCJvcmRlciIsIkFkZCIsIkZvcm1EYXRhIiwiZnJtIiwiYXBwZW5kIiwibm90aWZpY2F0aW9uIiwiZnJtX25hbWUiLCJzdGFydF9kYXRlIiwiZW5kX2RhdGUiLCJpbWFnZVVybHNBcnkiLCJjYWNoZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJDYWxsX2NvbnRyb2xsZXIiLCJ1cmxfZGF0YSIsImFjdGlvbiIsImZyZWVkYXRhIiwidXNlcl9pZCIsIk1hbmFnZVJlc3BvbnNlIiwiYWRkX2lucHV0c19lcnJvcnMiLCJpbnB1dHNBcnJheSIsImVycm9yIiwidHJpZ2dlciIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbiIsImxvZ2luYm94IiwibW9kYWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInN3YWwiLCJtb2RhbGJveCIsImZpcmUiLCJ0aXRsZSIsInR5cGUiLCJhbGVydHN1Y2Nlc3MiLCJhbGVydGlkIiwiaGFzT3duUHJvcGVydHkiLCJpbWdhcmVhIiwiYXR0ciIsImltZ3ZhbHVlIiwicHJlcGVuZCIsIm5lc3RlZCIsImJlZm9yZSIsImhpZGUiLCJkaXNwbGF5IiwiRGVsZXRlIiwiZGlzcGxheUl0ZW0iLCJ1cmxfY2hlY2siLCJjaGVja0JlZm9yZURlbGV0ZSIsInRoZW4iLCJ2YWx1ZSIsImFsZXJ0SUQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImRvbmUiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImZhaWwiLCJkaXNwbGF5TXVsdGlzZWxsZWN0IiwiZGlzcGxheUlEIiwiYWRkQ2F0ZWdvcnJpZSIsImNhdEZpZWxkIiwiY2F0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwiYWxlcnQiLCJjYXRlZ29yaWUiLCJJbnB1dEFyciIsImFyckVyciIsImZvckVhY2giLCJpbnB1dCIsImluZGV4T2YiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpbm5lckhUTUwiLCJyZXNldF9pbnZhbGlkX2lucHV0IiwiZm9ybSIsImZpbmQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZUludmFsaWRJbnB1dCIsIk15Zm9ybSIsIm9uIiwicGFyZW50IiwiY2hpbGRyZW4iLCJJbnB1dEVyciIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJhZGRDbGFzcyIsInB1c2giLCJhcnIiLCJlYWNoIiwiaW5wdXRzQXJyIiwidG9BcnJheSIsIlBocExSIiwiZWxlbWVudCIsImluaXQiLCJwcm90b3R5cGUiLCJzZXR1cFZhcmlhYmxlcyIsInNldHVwRXZlbnRzIiwibG9nYm94IiwibG9naW5mcm0iLCJyZWdib3giLCJyZWdmcm0iLCJmb3Jnb3Rib3giLCJmb3Jnb3Rmcm0iLCJwaHBMUiIsInZhbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImlucHV0RGF0YSIsImdlc3Rpb25SIiwib3V0cHV0RGF0YSIsInJlYWR1cmwiLCJNYW5hZ2VMb2dpblJlc3BvbnNlIiwicmRhdGEiLCJidG4iLCJ0ZXh0QnRuIiwiRmJSZXNwb25zZSIsIkZCIiwiZmFjZWJvb2tsb2dpbiIsInJlc3AiLCJGYWNlYm9vayIsImxvYWQiLCJhcHBJZCIsImFwcElEIiwiZ2V0TG9naW5TdGF0dXMiLCJzdGF0dXMiLCJnZXRGYlVzZXJEYXRhIiwiZmJMb2dpbiIsInNjb3BlIiwicmV0dXJuX3Njb3BlcyIsImdldEVsZW1lbnRCeUlkIiwiYXBpIiwiZmllbGRzIiwiSlNPTiIsInN0cmluZ2lmeSIsIk1SZXNwb25zZSIsImxvZ291dCIsImNsb3Nlc3QiLCJocmVmIiwiZm4iLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxvQkFBakI7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ3hCLE1BQUlDLFNBQVMsR0FBR0MsU0FBUyxDQUFDRCxTQUExQjtBQUNBLFNBQU8sZUFBZUUsSUFBZixDQUFvQkYsU0FBcEIsQ0FBUDtBQUNELENBSE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0NBR0E7O0FBQ08sU0FBU0csaUJBQVQsQ0FBMkJDLElBQTNCLEVBQWlDQyxPQUFqQyxFQUEwQztBQUMvQ0MsR0FBQyxDQUFDQyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFViw2Q0FBUSxHQUFHTSxJQUFJLENBQUNJLEdBRGhCO0FBRUxDLFVBQU0sRUFBRSxNQUZIO0FBR0xMLFFBQUksRUFBRTtBQUNKTSxXQUFLLEVBQUVOLElBQUksQ0FBQ00sS0FEUjtBQUVKQyxRQUFFLEVBQUVQLElBQUksQ0FBQ08sRUFGTDtBQUdK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SCxJQUFULEdBQWdCLFdBQTNDO0FBQ0Q7QUFDRjtBQVBJLEtBQVA7QUFTRCxHQWZEO0FBZ0JELENBeE5EOztBQXlOQWhMLENBQUMsQ0FBQ2lMLEVBQUYsQ0FBS3BDLEtBQUwsR0FBYSxVQUFVcUMsT0FBVixFQUFtQjtBQUM5QixNQUFJakQsS0FBSixDQUFVLElBQVY7QUFDQSxTQUFPLElBQVA7QUFDRCxDQUhEOztBQUlBakksQ0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEI2SSxLQUE1QixHIiwiZmlsZSI6Imxhenlsb2FkL2pzL2FkbWluL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gXCIva25nZWxsX2Vjb21tZXJjZS9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0lFID0gKCkgPT4ge1xyXG4gIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gIHJldHVybiAvTVNJRXxUcmlkZW50Ly50ZXN0KHVzZXJBZ2VudCk7XHJcbn07XHJcbiIsImltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IGFkZF9pbnB1dHNfZXJyb3JzLCBlcnJvciwgaW5wdXRzQXJyYXkgfSBmcm9tIFwiLi9pbnB1dEVyck1hbmFnZXJcIjtcclxuXHJcbi8vZGlzcGxheSBhbGwgZGV0YWlsc1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFsbERldGFpbHMoZGF0YSwgZ2VzdGlvbikge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgIHVzZXI6IGRhdGEudXNlciA/IGRhdGEudXNlciA6IFwiXCIsXHJcbiAgICAgIHNlc3Npb25faWQ6IGRhdGEuc2Vzc2lvbl9pZCA/IGRhdGEuc2Vzc2lvbl9pZCA6IFwiXCIsXHJcbiAgICAgIGRhdGFfdHlwZTogZGF0YS5kYXRhX3R5cGUgPyBkYXRhLmRhdGFfdHlwZSA6IFwiXCIsXHJcbiAgICAgIHJldHVybl9tb2RlOiBkYXRhLnJldHVybl9tb2RlID8gZGF0YS5yZXR1cm5fbW9kZSA6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuLy9lZGl0IGRhdGFcclxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRGb3JtKGRhdGEsIGdlc3Rpb24pIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEuZm9ybURhdGEsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG4vL2Rpc3BsYXkgYWxsIEl0ZW1zXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsSXRlbXMoZGF0YSkge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgaWQ6IGRhdGEuaWQgIT0gXCJcIiA/IGRhdGEuaWQgOiBcIlwiLFxyXG4gICAgICBzdGFydDogMCxcclxuICAgICAgbWF4OiBkYXRhLm1heCAhPSBcIlwiID8gZGF0YS5tYXggOiBcIlwiLFxyXG4gICAgICB1c2VyOiBkYXRhLnVzZXIgIT0gXCJcIiA/IGRhdGEudXNlciA6IFwiXCIsXHJcbiAgICAgIHF1ZXJ5OiBkYXRhLnF1ZXJ5ICE9IFwiXCIgPyBkYXRhLnF1ZXJ5IDogXCJcIixcclxuICAgICAgcGFnZTogZGF0YS5wYWdlICE9IFwiXCIgPyBkYXRhLnBhZ2UgOiBcIlwiLFxyXG4gICAgICBwYWdpbmF0aW9uOiBkYXRhLnBhZ2luYXRpb24gIT0gXCJcIiA/IGRhdGEucGFnaW5hdGlvbiA6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAvLyBkZWJ1Z2dlcjtcclxuICAgICAgICBpZiAoZGF0YS50YWJsZSA9PT0gXCJjb21tZW50c1wiKSB7XHJcbiAgICAgICAgICBkYXRhLmRpc3BsYXlpZC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRhdGEuZGlzcGxheWlkLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIGlmIChkYXRhLmRhdGF0YWJsZSkgbG9hZERhdGF0YWJsZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChkYXRhLmRpc3BsYXlpZCkuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWREYXRhdGFibGVzKCkge1xyXG4gIGNvbnN0IERhdGFUYWJsZSA9IGF3YWl0IGltcG9ydChcclxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZGF0YXRhYmxlc1wiICovIFwiZGF0YXRhYmxlcy5uZXRcIlxyXG4gICk7XHJcbiAgJChcInRhYmxlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICBvcmRlcjogWzAsIFwiZGVzY1wiXSxcclxuICB9KTtcclxufVxyXG4vL2FkZCBJdGVtXHJcbmV4cG9ydCBmdW5jdGlvbiBBZGQoZGF0YSwgZ2VzdGlvbikge1xyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkYXRhLmZybVswXSk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwidGFibGVcIiwgZGF0YS50YWJsZSk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwibm90aWZpY2F0aW9uXCIsIGRhdGEubm90aWZpY2F0aW9uKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJmcm1fbmFtZVwiLCBkYXRhLmZybV9uYW1lKTtcclxuICBpZiAoZGF0YS5zdGFydF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJzdGFydF9kYXRlXCIsIGRhdGEuc3RhcnRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuZW5kX2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcImVuZF9kYXRlXCIsIGRhdGEuZW5kX2RhdGUpO1xyXG4gIGlmIChkYXRhLmltYWdlVXJsc0FyeSkgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VVcmxzQXJ5XCIsIGRhdGEuaW1hZ2VVcmxzQXJ5KTtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuLy91cGRhdGVcclxuZXhwb3J0IGZ1bmN0aW9uIENhbGxfY29udHJvbGxlcihkYXRhLCBnZXN0aW9uKSB7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEuZnJtWzBdKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJmcm1fbmFtZVwiLCBkYXRhLmZybV9uYW1lKTtcclxuICBpZiAoZGF0YS50YWJsZSkgZm9ybURhdGEuYXBwZW5kKFwidGFibGVcIiwgZGF0YS50YWJsZSk7XHJcbiAgaWYgKGRhdGEubm90aWZpY2F0aW9uKSBmb3JtRGF0YS5hcHBlbmQoXCJub3RpZmljYXRpb25cIiwgZGF0YS5ub3RpZmljYXRpb24pO1xyXG4gIGlmIChkYXRhLnVybF9kYXRhKSBmb3JtRGF0YS5hcHBlbmQoXCJ1cmxfZGF0YVwiLCBkYXRhLnVybF9kYXRhKTtcclxuICBpZiAoZGF0YS5hY3Rpb24pIGZvcm1EYXRhLmFwcGVuZChcImFjdGlvblwiLCBkYXRhLmFjdGlvbik7XHJcbiAgaWYgKGRhdGEuaW1hZ2VVcmxzQXJ5KSBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVVybHNBcnlcIiwgZGF0YS5pbWFnZVVybHNBcnkpO1xyXG4gIGlmIChkYXRhLmZyZWVkYXRhKSBmb3JtRGF0YS5hcHBlbmQoXCJmcmVlZGF0YVwiLCBkYXRhLmZyZWVkYXRhKTtcclxuICBpZiAoZGF0YS5zdGFydF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJzdGFydF9kYXRlXCIsIGRhdGEuc3RhcnRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuZW5kX2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcImVuZF9kYXRlXCIsIGRhdGEuZW5kX2RhdGUpO1xyXG4gIGlmIChkYXRhLmlkKSBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBkYXRhLmlkKTtcclxuICBpZiAoZGF0YS51c2VyX2lkKSBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBkYXRhLnVzZXJfaWQpO1xyXG4gIGlmIChkYXRhLm1ldGhvZCkgZm9ybURhdGEuYXBwZW5kKFwibWV0aG9kXCIsIGRhdGEubWV0aG9kKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuLy9NYW5hZ2UgaXRlbSBhZGRlZC91cGRhdGVkXHJcbmV4cG9ydCBmdW5jdGlvbiBNYW5hZ2VSZXNwb25zZShyZXNwb25zZSwgZGF0YSkge1xyXG4gIHN3aXRjaCAocmVzcG9uc2UucmVzdWx0KSB7XHJcbiAgICBjYXNlIFwiZXJyb3ItZmllbGRcIjpcclxuICAgICAgYWRkX2lucHV0c19lcnJvcnMoaW5wdXRzQXJyYXkoZGF0YS5mcm0pLCBlcnJvcihkYXRhLmZybSwgcmVzcG9uc2UubXNnKSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcInN1Y2Nlc3NcIjpcclxuICAgICAgZGF0YS5mcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5tc2cpO1xyXG4gICAgICBpZiAoZGF0YS5sb2dpbikge1xyXG4gICAgICAgIGRhdGEubG9naW5ib3gubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YS5zd2FsKSB7XHJcbiAgICAgICAgZGF0YS5tb2RhbGJveC5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgZGF0YS5zd2FsLmZpcmUoe1xyXG4gICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLm1zZyxcclxuICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChkYXRhLmFsZXJ0c3VjY2VzcykgZGF0YS5hbGVydGlkLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImltZ2FyZWFcIikpIHtcclxuICAgICAgICBkYXRhLmltZ2FyZWEuYXR0cihcInNyY1wiLCBkYXRhLmltZ3ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YS5wcmVwZW5kKSB7XHJcbiAgICAgICAgZGF0YS5uZXN0ZWQucHJlcGVuZChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChkYXRhLnByZXBlbmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBkYXRhLm5lc3RlZC5iZWZvcmUocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIGRhdGEubmVzdGVkLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGEuZGlzcGxheSkgZGF0YS5kaXNwbGF5KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImVycm9yXCI6XHJcbiAgICAgIGRhdGEuYWxlcnRpZC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIGRhdGEuZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59XHJcblxyXG4vL2RlbGV0ZVxyXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlKGRhdGEsIGRpc3BsYXlJdGVtKSB7XHJcbiAgaWYgKGRhdGEudXJsX2NoZWNrKSB7XHJcbiAgICBjaGVja0JlZm9yZURlbGV0ZShkYXRhKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbjogZGF0YS5ub3RpZmljYXRpb24sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgICAgZGF0YS5zd2FsLmZpcmUoXCJEZWxldGVkIVwiLCByZXNwb25zZS5tc2csIFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICBkaXNwbGF5SXRlbSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGRhdGEuYWxlcnRJRC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4vL2Z1bmN0aW9uIGNoZWNrIGJlZm9yZSBkZWxldGVcclxuXHJcbmZ1bmN0aW9uIGNoZWNrQmVmb3JlRGVsZXRlKGRhdGEpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsX2NoZWNrLFxyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgICAgbm90aWZpY2F0aW9uOiBkYXRhLm5vdGlmaWNhdGlvbixcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGRhdGEuc3dhbFxyXG4gICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBodG1sOiBcIjxwPllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzITwvcD5cIiArIHJlc3BvbnNlLm1zZyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJEZWxldGUhXCIsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmZhaWwoKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNdWx0aXNlbGxlY3QoZGF0YSkge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgXCJmb3Jtcy9maWxsTXVsdGlzZWxlY3RcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIGRhdGEuZGlzcGxheUlELmFwcGVuZChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGEuYWxlcnRJRC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDYXRlZ29ycmllKGNhdEZpZWxkLCBhbGVydElEKSB7XHJcbiAgbGV0IGNhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2F0RmllbGQpO1xyXG4gIGlmIChjYXQudmFsdWUubGVuZ3RoID09IDApIHtcclxuICAgIGFsZXJ0KFwiTGUgY2hhbXBzIGNhdMOpZ29yaWUgZXN0IHZpZGVcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogQkFTRV9VUkwgKyBcImZvcm1zL2FkZGNhdGVnb3JpZVwiLFxyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgY2F0ZWdvcmllOiBjYXQudmFsdWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZSAhPSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgJChhbGVydElEKS5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFkZF9pbnB1dHNfZXJyb3JzID0gKElucHV0QXJyLCBhcnJFcnIpID0+IHtcclxuICBJbnB1dEFyci5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgaWYgKGFyckVyci5pbmRleE9mKGlucHV0LmlkKSA9PSAtMSkge1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICAgaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRfaW52YWxpZF9pbnB1dCA9IChmb3JtKSA9PiB7XHJcbiAgZm9ybS5maW5kKFwiLmlzLWludmFsaWRcIikucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gIGZvcm0uZmluZChcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwoXCJcIik7XHJcbn07XHJcblxyXG4vL3JlbW92ZSBpbnZhbGlkIGlucHV0IG9uIGZvY3VzXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJbnZhbGlkSW5wdXQoTXlmb3JtKSB7XHJcbiAgTXlmb3JtLm9uKFwiZm9jdXNcIiwgXCJpbnB1dCx0ZXh0YXJlYSwgLmNrLCAubm90ZS1lZGl0b3JcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVycm9yID0gKGZvcm0sIElucHV0RXJyKSA9PiB7XHJcbiAgdmFyIGFyckVyciA9IFtdO1xyXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKElucHV0RXJyKSkge1xyXG4gICAgdmFyIGlucHV0ID0gZm9ybS5maW5kKFwiI1wiICsga2V5KS5hZGRDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICBpbnB1dC5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwodmFsdWUpO1xyXG4gICAgYXJyRXJyLnB1c2goa2V5KTtcclxuICB9XHJcbiAgcmV0dXJuIGFyckVycjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnB1dHNBcnJheSA9IChmb3JtKSA9PiB7XHJcbiAgdmFyIGFyciA9IFtdO1xyXG4gIGZvcm0uZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpbnB1dHNBcnIgPSAkKHRoaXMpLmZpbmQoXCI6aW5wdXRcIikudG9BcnJheSgpO1xyXG4gICAgaW5wdXRzQXJyLmZvckVhY2goZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBbXCJzdWJtaXRcIiwgXCJoaWRkZW5cIiwgXCJjaGVja2JveFwiLCBcImJ1dHRvblwiLCBcImZpbGVcIl0uaW5kZXhPZihcclxuICAgICAgICAgIGlucHV0LnR5cGVcclxuICAgICAgICApID09IC0xICYmXHJcbiAgICAgICAgaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nXHJcbiAgICAgICkge1xyXG4gICAgICAgIGFyci5wdXNoKGlucHV0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGFycjtcclxufTtcclxuIiwiaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiY29yZWpzL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBZGQsIENhbGxfY29udHJvbGxlciwgTWFuYWdlUmVzcG9uc2UgfSBmcm9tIFwiY29yZWpzL2Zvcm1fY3J1ZFwiO1xyXG5mdW5jdGlvbiBQaHBMUihlbGVtZW50KSB7XHJcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB0aGlzLmluaXQoKTtcclxufVxyXG5QaHBMUi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICB0aGlzLnNldHVwVmFyaWFibGVzKCk7XHJcbiAgdGhpcy5zZXR1cEV2ZW50cygpO1xyXG59O1xyXG4vL1BIUCBMUiBzZXR1cCBWYXJpYWJsZXNcclxuUGhwTFIucHJvdG90eXBlLnNldHVwVmFyaWFibGVzID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMubG9nYm94ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjbG9naW4tYm94XCIpO1xyXG4gIHRoaXMubG9naW5mcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNsb2dpbi1mcm1cIik7XHJcbiAgdGhpcy5yZWdib3ggPSB0aGlzLmVsZW1lbnQuZmluZChcIiNyZWdpc3Rlci1ib3hcIik7XHJcbiAgdGhpcy5yZWdmcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNyZWdpc3Rlci1mcm1cIik7XHJcbiAgdGhpcy5mb3Jnb3Rib3ggPSB0aGlzLmVsZW1lbnQuZmluZChcIiNmb3Jnb3QtYm94XCIpO1xyXG4gIHRoaXMuZm9yZ290ZnJtID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjZm9yZ290LWZybVwiKTtcclxufTtcclxuLy9QSFAgTFIgc2V0dXAgRXZlbnRzXHJcblBocExSLnByb3RvdHlwZS5zZXR1cEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgcGhwTFIgPSB0aGlzO1xyXG5cclxuICAvL3JlZnJlc2ggbG9naW4gJiByZWdpc3RlciBmcm0gb24gaGlkZSBhbmQgc2hvd1xyXG4gIHBocExSLmxvZ2JveC5vbihcImhpZGUuYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHBocExSLmxvZ2luZnJtLmZpbmQoXCIuaXMtaW52YWxpZFwiKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICByZXNldF9pbnZhbGlkX2lucHV0KHBocExSLmxvZ2luZnJtKTtcclxuICAgIH1cclxuICB9KTtcclxuICAvL1Jlc2V0IHJlZ2lzdGVyIGZvcm0gaW52YWxpZCBpbnB1dCBvbiBoaWRlIG1vZGFsXHJcbiAgcGhwTFIucmVnYm94Lm9uKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAocGhwTFIucmVnZnJtLmZpbmQoXCIuaXMtaW52YWxpZFwiKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICByZXNldF9pbnZhbGlkX2lucHV0KHBocExSLnJlZ2ZybSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy9SZXNldCByZWdpc3RlciBmb3JtIG9uIHNob3duXHJcbiAgcGhwTFIucmVnYm94Lm9uKFwic2hvdy5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwaHBMUi5yZWdmcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgcGhwTFIucmVnZnJtLmZpbmQoXCIjcmVnQWxlcnRcIikuaHRtbChcIlwiKTtcclxuICB9KTtcclxuICAvL3JlbW92ZSBpbnZhbGlkIGlucHV0IG9uIGZvY3VzIHJlZ2lzdGVyXHJcbiAgcGhwTFIucmVnZnJtLm9uKFwiZm9jdXNcIiwgXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG4gIH0pO1xyXG4gIC8vcmVtb3ZlIGludmFsaWQgaW5wdXQgb24gZm9jdXMgbG9naW5cclxuICBwaHBMUi5sb2dpbmZybS5vbihcImZvY3VzXCIsIFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxuICB9KTtcclxuICAvL3Jlc2V0IGZvcmdvdCBwYXNzd29yZCBmcm1cclxuICBwaHBMUi5mb3Jnb3Rib3gub24oXCJoaWRlLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBocExSLmZvcmdvdGZybS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgfSk7XHJcbiAgLy9GaWxsIGluIGxvZ2luIGZyb20gY29va2llcyBvbiBzaG9ud1xyXG4gIHBocExSLmxvZ2JveC5vbihcInNob3cuYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIFwidXNlcnMvbG9naW5jb29raWVzXCIsXHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2VtYWlsXCIpLnZhbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2VtYWlsXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjcGFzc3dvcmRcIikudmFsKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIC8vUmVnaXN0ZXIgZm9ybVxyXG4gIHBocExSLnJlZ2ZybS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHBocExSLnJlZ2ZybS5maW5kKFwiI3JlZ2lzdGVyLWJ0blwiKS52YWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgIHZhciBpbnB1dERhdGEgPSB7XHJcbiAgICAgIHVybDogXCJ1c2Vycy9hamF4UmVnaXN0ZXJcIixcclxuICAgICAgZnJtOiBwaHBMUi5yZWdmcm0sXHJcbiAgICAgIHRhYmxlOiBcInVzZXJzXCIsXHJcbiAgICAgIG5vdGlmaWNhdGlvbjogXCJhZG1pblwiLFxyXG4gICAgICBmcm1fbmFtZTogXCJyZWdpc3Rlci1mcm1cIixcclxuICAgIH07XHJcbiAgICBBZGQoaW5wdXREYXRhLCBnZXN0aW9uUik7XHJcbiAgICBmdW5jdGlvbiBnZXN0aW9uUihyZXNwb25zZSkge1xyXG4gICAgICBwaHBMUi5yZWdmcm0uZmluZChcIiNyZWdpc3Rlci1idG5cIikudmFsKFwiRW5yZWdpc3RyZXJcIik7XHJcbiAgICAgIHZhciBvdXRwdXREYXRhID0ge1xyXG4gICAgICAgIGZybTogcGhwTFIucmVnZnJtLFxyXG4gICAgICAgIHN3YWw6IGZhbHNlLFxyXG4gICAgICAgIGFsZXJ0aWQ6IHBocExSLnJlZ2ZybS5maW5kKFwiI3JlZ0FsZXJ0XCIpLFxyXG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgIGltZ2FyZWE6IHBocExSLnJlZ2JveC5maW5kKFwiLnVwbG9hZC1wcm9maWxlLWltYWdlIC5pbWdcIiksXHJcbiAgICAgICAgaW1ndmFsdWU6IFwiL2tuZ2VsbC9wdWJsaWMvYXNzZXRzL2ltZy9yZWdpc3Rlci9wcm9maWxlL2JlYXJkLnBuZ1wiLFxyXG4gICAgICAgIGFsZXJ0c3VjY2VzczogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgICAgTWFuYWdlUmVzcG9uc2UocmVzcG9uc2UsIG91dHB1dERhdGEpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvL3JlYWQgcHJvZmlsZSBpbWFnZSBvbiBjaGFuZ2VcclxuICBwaHBMUi5yZWdib3hcclxuICAgIC5maW5kKCcudXBsb2FkLXByb2ZpbGUtaW1hZ2UgaW5wdXRbdHlwZT1cImZpbGVcIl0nKVxyXG4gICAgLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmVhZHVybChcclxuICAgICAgICB0aGlzLFxyXG4gICAgICAgIHBocExSLnJlZ2JveC5maW5kKFwiLnVwbG9hZC1wcm9maWxlLWltYWdlIC5pbWdcIiksXHJcbiAgICAgICAgcGhwTFIucmVnYm94LmZpbmQoXCIudXBsb2FkLXByb2ZpbGUtaW1hZ2UgLmNhbWVyYS1pY29uXCIpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAvL0xvZ2luIGZvcm1cclxuICBwaHBMUi5sb2dpbmZybS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjbG9naW4tYnRuXCIpLnZhbChcIlBsZWFzZSB3YWl0Li4uXCIpO1xyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgIHVybDogXCJ1c2Vycy9hamF4TG9naW5cIixcclxuICAgICAgZnJtOiBwaHBMUi5sb2dpbmZybSxcclxuICAgICAgZnJtX25hbWU6IFwibG9naW4tZnJtXCIsXHJcbiAgICB9O1xyXG4gICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIE1hbmFnZUxvZ2luUmVzcG9uc2UpO1xyXG4gICAgLy9tYW5hZ2UgbG9naW4gUmVzcG9uc2VcclxuICAgIGZ1bmN0aW9uIE1hbmFnZUxvZ2luUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbi1idG5cIikudmFsKFwiTG9naW5cIik7XHJcbiAgICAgIHZhciByZGF0YSA9IHtcclxuICAgICAgICBmcm06IHBocExSLmxvZ2luZnJtLFxyXG4gICAgICAgIGJ0bjogcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbi1idG5cIiksXHJcbiAgICAgICAgdGV4dEJ0bjogXCJTaWduIEluXCIsXHJcbiAgICAgICAgYWxlcnRpZDogcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbkFsZXJ0XCIpLFxyXG4gICAgICAgIGxvZ2luYm94OiBwaHBMUi5sb2dib3gsXHJcbiAgICAgICAgbG9naW46IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICAgIE1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCByZGF0YSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vbG9naW4gd2l0aCBGYWNlYm9va1xyXG5cclxuICBwaHBMUi5sb2dib3guZmluZChcIiNmYmxpbmtcIikub24oXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbi1idG5cIikudmFsKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgZnJtOiBwaHBMUi5sb2dpbmZybSxcclxuICAgICAgdXJsOiBcImd1ZXN0cy9mYkxvZ2luXCIsXHJcbiAgICAgIGZybV9uYW1lOiBcImxvZ2luLWZybVwiLFxyXG4gICAgfTtcclxuICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBGYlJlc3BvbnNlKTtcclxuICAgIGZ1bmN0aW9uIEZiUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIEZCID0gZmFjZWJvb2tsb2dpbihyZXNwb25zZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbkFsZXJ0XCIpLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vZmFjZWJvb2sgbG9naW5cclxuICBmdW5jdGlvbiBmYWNlYm9va2xvZ2luKHJlc3ApIHtcclxuICAgIEZhY2Vib29rLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgRmFjZWJvb2suaW5pdCh7XHJcbiAgICAgICAgYXBwSWQ6IHJlc3AubXNnLmFwcElELFxyXG4gICAgICB9KTtcclxuICAgICAgRmFjZWJvb2suZ2V0TG9naW5TdGF0dXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IFwiY29ubmVjdGVkXCIpIHtcclxuICAgICAgICAgIGdldEZiVXNlckRhdGEoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmJMb2dpbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBGYWNlYm9vaztcclxuICB9XHJcblxyXG4gIC8vIEZhY2Vib29rIGxvZ2luIHdpdGggSmF2YVNjcmlwdCBTREtcclxuICBmdW5jdGlvbiBmYkxvZ2luKCkge1xyXG4gICAgRkIubG9naW4oe1xyXG4gICAgICBzY29wZTogXCJlbWFpbFwiLFxyXG4gICAgICByZXR1cm5fc2NvcGVzOiB0cnVlLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIikge1xyXG4gICAgICAgIGdldEZiVXNlckRhdGEoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luQWxlcnRcIikuaW5uZXJIVE1MID1cclxuICAgICAgICAgIFwiVXNlciBjYW5jZWxsZWQgbG9naW4gb3IgZGlkIG5vdCBmdWxseSBhdXRob3JpemUuXCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyAvLyBGZXRjaCB0aGUgdXNlciBwcm9maWxlIGRhdGEgZnJvbSBmYWNlYm9va1xyXG4gIGZ1bmN0aW9uIGdldEZiVXNlckRhdGEoKSB7XHJcbiAgICBGQi5hcGkoXCIvbWVcIiwgXCJnZXRcIiwge1xyXG4gICAgICBmaWVsZHM6IFwiaWQsZmlyc3RfbmFtZSxsYXN0X25hbWUsZW1haWwsbGluayxnZW5kZXIsbG9jYWxlLHBpY3R1cmVcIixcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIGZybTogcGhwTFIubG9naW5mcm0sXHJcbiAgICAgICAgZnJtX25hbWU6IFwibG9naW4tZnJtXCIsXHJcbiAgICAgICAgdXJsOiBcInVzZXJzL2ZibG9naW5cIixcclxuICAgICAgICBmcmVlZGF0YTogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpLFxyXG4gICAgICB9O1xyXG4gICAgICBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgTWFuYWdlTG9naW5SZXNwb25zZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy9Gb3Jnb3QgcGFzc3dvcmQgcmVxdWVzdFxyXG4gIHBocExSLmZvcmdvdGZybS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHBocExSLmZvcmdvdGZybS5maW5kKFwiI2ZvcmdvdC1idG5cIikudmFsKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgdXJsOiBcInVzZXJzL2ZvcmdvdFwiLFxyXG4gICAgICBmcm06IHBocExSLmZvcmdvdGZybSxcclxuICAgICAgZnJtX25hbWU6IFwiZm9yZ290LWZybVwiLFxyXG4gICAgfTtcclxuICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBNUmVzcG9uc2UpO1xyXG4gICAgZnVuY3Rpb24gTVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICAgIHZhciByZGF0YSA9IHtcclxuICAgICAgICBmcm06IHBocExSLmZvcmdvdGZybSxcclxuICAgICAgICBhbGVydGlkOiBwaHBMUi5mb3Jnb3Rmcm0uZmluZChcIiNmb3Jnb3RBbGVydFwiKSxcclxuICAgICAgICBhbGVydHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICAgIE1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCByZGF0YSk7XHJcbiAgICAgIHBocExSLmZvcmdvdGZybS5maW5kKFwiI2ZvcmdvdC1idG5cIikudmFsKFwiUmVzZXQgcGFzc3dvcmRcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQWpheCBsb2dvdXQgZnJvbSBlbHNld2hlcmVcclxuICB2YXIgbG9nb3V0ID0gJChcImE6Y29udGFpbnMoJ0xvZ291dCcpXCIpO1xyXG4gICQobG9nb3V0KS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgRkIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgRkIubG9nb3V0KCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAvLyBsb2dnZWQgb3V0XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIFwidXNlcnMvbG9nb3V0XCIsXHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZSA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIGxvZ291dC5jbG9zZXN0KFwiZGl2XCIpLmxvYWQobG9jYXRpb24uaHJlZiArIFwiIC5jb25uZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG4kLmZuLnBocExSID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICBuZXcgUGhwTFIodGhpcyk7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcbiQoXCIjTG9naW4tUmVnaXN0ZXItU3lzdGVtXCIpLnBocExSKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=