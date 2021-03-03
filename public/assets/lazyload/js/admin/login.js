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
            data.swal ? data.swal.fire("Deleted!", response.msg, "success") : "";
            displayItem(data.params ? data.params : "");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvZm9ybV9jcnVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9pbnB1dEVyck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2xvZ3JlZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvcHJvZmlsZV9pbWcuanMiXSwibmFtZXMiOlsiZGlzcGxheUFsbERldGFpbHMiLCJkYXRhIiwiZ2VzdGlvbiIsIiQiLCJhamF4IiwidXJsIiwiQkFTRV9VUkwiLCJtZXRob2QiLCJ0YWJsZSIsImlkIiwidXNlciIsInNlc3Npb25faWQiLCJkYXRhX3R5cGUiLCJyZXR1cm5fbW9kZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInBhcmFtcyIsImVkaXRGb3JtIiwiZm9ybURhdGEiLCJkaXNwbGF5QWxsSXRlbXMiLCJzdGFydCIsIm1heCIsInF1ZXJ5IiwicGFnZSIsInBhZ2luYXRpb24iLCJyZXN1bHQiLCJkaXNwbGF5aWQiLCJodG1sIiwibXNnIiwiZGF0YXRhYmxlIiwibG9hZERhdGF0YWJsZXMiLCJEYXRhVGFibGUiLCJvcmRlciIsIkFkZCIsIkZvcm1EYXRhIiwiZnJtIiwiYXBwZW5kIiwibm90aWZpY2F0aW9uIiwiZnJtX25hbWUiLCJzdGFydF9kYXRlIiwiZW5kX2RhdGUiLCJpbWFnZVVybHNBcnkiLCJjYWNoZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJDYWxsX2NvbnRyb2xsZXIiLCJ1cmxfZGF0YSIsImFjdGlvbiIsImZyZWVkYXRhIiwidXNlcl9pZCIsIk1hbmFnZVJlc3BvbnNlIiwiYWRkX2lucHV0c19lcnJvcnMiLCJpbnB1dHNBcnJheSIsImVycm9yIiwidHJpZ2dlciIsImxvZ2luIiwibG9naW5ib3giLCJtb2RhbCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic3dhbCIsIm1vZGFsYm94IiwiZmlyZSIsImFsZXJ0c3VjY2VzcyIsImFsZXJ0aWQiLCJoYXNPd25Qcm9wZXJ0eSIsImltZ2FyZWEiLCJhdHRyIiwiaW1ndmFsdWUiLCJwcmVwZW5kIiwibmVzdGVkIiwiYmVmb3JlIiwiaGlkZSIsImRpc3BsYXkiLCJEZWxldGUiLCJkaXNwbGF5SXRlbSIsImNoZWNrQmVmb3JlRGVsZXRlIiwidGhlbiIsInZhbHVlIiwiYWxlcnRJRCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidXJsX2NoZWNrIiwidGl0bGUiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImRvbmUiLCJmYWlsIiwiZGlzcGxheU11bHRpc2VsbGVjdCIsImRpc3BsYXlJRCIsImFkZENhdGVnb3JyaWUiLCJjYXRGaWVsZCIsImNhdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxlbmd0aCIsImFsZXJ0IiwiY2F0ZWdvcmllIiwiSW5wdXRBcnIiLCJhcnJFcnIiLCJmb3JFYWNoIiwiaW5wdXQiLCJpbmRleE9mIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaW5uZXJIVE1MIiwicmVzZXRfaW52YWxpZF9pbnB1dCIsImZvcm0iLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVJbnZhbGlkSW5wdXQiLCJNeWZvcm0iLCJvbiIsInBhcmVudCIsImNoaWxkcmVuIiwiSW5wdXRFcnIiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwiYWRkQ2xhc3MiLCJwdXNoIiwiYXJyIiwiZWFjaCIsImlucHV0c0FyciIsInRvQXJyYXkiLCJ0eXBlIiwiUGhwTFIiLCJlbGVtZW50IiwiaW5pdCIsInByb3RvdHlwZSIsInNldHVwVmFyaWFibGVzIiwic2V0dXBFdmVudHMiLCJsb2dib3giLCJsb2dpbmZybSIsInJlZ2JveCIsInJlZ2ZybSIsImZvcmdvdGJveCIsImZvcmdvdGZybSIsInBocExSIiwidmFsIiwiZW1haWwiLCJyZW1lbWJlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImlucHV0RGF0YSIsImdlc3Rpb25SIiwiY29uc29sZSIsImxvZyIsIm91dHB1dERhdGEiLCJpbWciLCJyZWFkdXJsIiwiTWFuYWdlTG9naW5SZXNwb25zZSIsInJkYXRhIiwiYnRuIiwidGV4dEJ0biIsIkZiUmVzcG9uc2UiLCJGQiIsImZhY2Vib29rbG9naW4iLCJyZXNwIiwiRmFjZWJvb2siLCJsb2FkIiwiYXBwSWQiLCJhcHBJRCIsImdldExvZ2luU3RhdHVzIiwic3RhdHVzIiwiZ2V0RmJVc2VyRGF0YSIsImZiTG9naW4iLCJzY29wZSIsInJldHVybl9zY29wZXMiLCJnZXRFbGVtZW50QnlJZCIsImFwaSIsImZpZWxkcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJNUmVzcG9uc2UiLCJsb2dvdXQiLCJjbG9zZXN0IiwiaHJlZiIsImZuIiwib3B0aW9ucyIsImljb24iLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0YXJnZXQiLCJjc3MiLCJyZWFkQXNEYXRhVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ08sU0FBU0EsaUJBQVQsQ0FBMkJDLElBQTNCLEVBQWlDQyxPQUFqQyxFQUEwQztBQUMvQ0MsR0FBQyxDQUFDQyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyw2Q0FBUSxHQUFHTCxJQUFJLENBQUNJLEdBRGhCO0FBRUxFLFVBQU0sRUFBRSxNQUZIO0FBR0xOLFFBQUksRUFBRTtBQUNKTyxXQUFLLEVBQUVQLElBQUksQ0FBQ08sS0FEUjtBQUVKQyxRQUFFLEVBQUVSLElBQUksQ0FBQ1EsRUFGTDtBQUdKQyxVQUFJLEVBQUVULElBQUksQ0FBQ1MsSUFBTCxHQUFZVCxJQUFJLENBQUNTLElBQWpCLEdBQXdCLEVBSDFCO0FBSUpDLGdCQUFVLEVBQUVWLElBQUksQ0FBQ1UsVUFBTCxHQUFr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QyxDQUFDLHdCQUFELENBQUQsQ0FBNEI0SSxLQUE1QixHOzs7Ozs7Ozs7Ozs7Ozs7QUM3UE8sSUFBTWEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ25ELEtBQUQsRUFBUWtELEdBQVIsRUFBYStCLElBQWIsRUFBc0I7QUFDM0MsTUFBSWpGLEtBQUssQ0FBQ2tGLEtBQU4sSUFBZWxGLEtBQUssQ0FBQ2tGLEtBQU4sQ0FBWSxDQUFaLENBQW5CLEVBQW1DO0FBQ2pDLFFBQUlDLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWI7O0FBQ0FELFVBQU0sQ0FBQ0UsTUFBUCxHQUFnQixVQUFVM0MsQ0FBVixFQUFhO0FBQzNCUSxTQUFHLENBQUN2RixJQUFKLENBQVMsS0FBVCxFQUFnQitFLENBQUMsQ0FBQzRDLE1BQUYsQ0FBU3RLLE1BQXpCO0FBQ0FpSyxVQUFJLENBQUNNLEdBQUwsQ0FBUztBQUNQdEgsZUFBTyxFQUFFO0FBREYsT0FBVDtBQUdELEtBTEQ7O0FBTUFrSCxVQUFNLENBQUNLLGFBQVAsQ0FBcUJ4RixLQUFLLENBQUNrRixLQUFOLENBQVksQ0FBWixDQUFyQjtBQUNEO0FBQ0YsQ0FYTSxDIiwiZmlsZSI6Imxhenlsb2FkL2pzL2FkbWluL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgYWRkX2lucHV0c19lcnJvcnMsIGVycm9yLCBpbnB1dHNBcnJheSB9IGZyb20gXCIuL2lucHV0RXJyTWFuYWdlclwiO1xyXG5cclxuLy9kaXNwbGF5IGFsbCBkZXRhaWxzXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsRGV0YWlscyhkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgdXNlcjogZGF0YS51c2VyID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgc2Vzc2lvbl9pZDogZGF0YS5zZXNzaW9uX2lkID8gZGF0YS5zZXNzaW9uX2lkIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL2VkaXQgZGF0YVxyXG5leHBvcnQgZnVuY3Rpb24gZWRpdEZvcm0oZGF0YSwgZ2VzdGlvbikge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YS5mb3JtRGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vZGlzcGxheSBhbGwgSXRlbXNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxJdGVtcyhkYXRhKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCAhPSBcIlwiID8gZGF0YS5pZCA6IFwiXCIsXHJcbiAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICBtYXg6IGRhdGEubWF4ICE9IFwiXCIgPyBkYXRhLm1heCA6IFwiXCIsXHJcbiAgICAgIHVzZXI6IGRhdGEudXNlciAhPSBcIlwiID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgcXVlcnk6IGRhdGEucXVlcnkgIT0gXCJcIiA/IGRhdGEucXVlcnkgOiBcIlwiLFxyXG4gICAgICBwYWdlOiBkYXRhLnBhZ2UgIT0gXCJcIiA/IGRhdGEucGFnZSA6IFwiXCIsXHJcbiAgICAgIHBhZ2luYXRpb246IGRhdGEucGFnaW5hdGlvbiAhPSBcIlwiID8gZGF0YS5wYWdpbmF0aW9uIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICAgIGlmIChkYXRhLnRhYmxlID09PSBcImNvbW1lbnRzXCIpIHtcclxuICAgICAgICAgIGRhdGEuZGlzcGxheWlkLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGF0YS5kaXNwbGF5aWQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgaWYgKGRhdGEuZGF0YXRhYmxlKSBsb2FkRGF0YXRhYmxlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKGRhdGEuZGlzcGxheWlkKS5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gbG9hZERhdGF0YWJsZXMoKSB7XHJcbiAgY29uc3QgRGF0YVRhYmxlID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJkYXRhdGFibGVzXCIgKi8gXCJkYXRhdGFibGVzLm5ldFwiXHJcbiAgKTtcclxuICAkKFwidGFibGVcIikuRGF0YVRhYmxlKHtcclxuICAgIG9yZGVyOiBbMCwgXCJkZXNjXCJdLFxyXG4gIH0pO1xyXG59XHJcbi8vYWRkIEl0ZW1cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZChkYXRhLCBnZXN0aW9uKSB7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEuZnJtWzBdKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJ0YWJsZVwiLCBkYXRhLnRhYmxlKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJub3RpZmljYXRpb25cIiwgZGF0YS5ub3RpZmljYXRpb24pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImZybV9uYW1lXCIsIGRhdGEuZnJtX25hbWUpO1xyXG4gIGlmIChkYXRhLnN0YXJ0X2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcInN0YXJ0X2RhdGVcIiwgZGF0YS5zdGFydF9kYXRlKTtcclxuICBpZiAoZGF0YS5lbmRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwiZW5kX2RhdGVcIiwgZGF0YS5lbmRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuaW1hZ2VVcmxzQXJ5KSBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVVybHNBcnlcIiwgZGF0YS5pbWFnZVVybHNBcnkpO1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICBjYWNoZTogZmFsc2UsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL3VwZGF0ZVxyXG5leHBvcnQgZnVuY3Rpb24gQ2FsbF9jb250cm9sbGVyKGRhdGEsIGdlc3Rpb24pIHtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZGF0YS5mcm1bMF0pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImZybV9uYW1lXCIsIGRhdGEuZnJtX25hbWUpO1xyXG4gIGlmIChkYXRhLnRhYmxlKSBmb3JtRGF0YS5hcHBlbmQoXCJ0YWJsZVwiLCBkYXRhLnRhYmxlKTtcclxuICBpZiAoZGF0YS5ub3RpZmljYXRpb24pIGZvcm1EYXRhLmFwcGVuZChcIm5vdGlmaWNhdGlvblwiLCBkYXRhLm5vdGlmaWNhdGlvbik7XHJcbiAgaWYgKGRhdGEudXJsX2RhdGEpIGZvcm1EYXRhLmFwcGVuZChcInVybF9kYXRhXCIsIGRhdGEudXJsX2RhdGEpO1xyXG4gIGlmIChkYXRhLmFjdGlvbikgZm9ybURhdGEuYXBwZW5kKFwiYWN0aW9uXCIsIGRhdGEuYWN0aW9uKTtcclxuICBpZiAoZGF0YS5pbWFnZVVybHNBcnkpIGZvcm1EYXRhLmFwcGVuZChcImltYWdlVXJsc0FyeVwiLCBkYXRhLmltYWdlVXJsc0FyeSk7XHJcbiAgaWYgKGRhdGEuZnJlZWRhdGEpIGZvcm1EYXRhLmFwcGVuZChcImZyZWVkYXRhXCIsIGRhdGEuZnJlZWRhdGEpO1xyXG4gIGlmIChkYXRhLnN0YXJ0X2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcInN0YXJ0X2RhdGVcIiwgZGF0YS5zdGFydF9kYXRlKTtcclxuICBpZiAoZGF0YS5lbmRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwiZW5kX2RhdGVcIiwgZGF0YS5lbmRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuaWQpIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGRhdGEuaWQpO1xyXG4gIGlmIChkYXRhLnVzZXJfaWQpIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGRhdGEudXNlcl9pZCk7XHJcbiAgaWYgKGRhdGEubWV0aG9kKSBmb3JtRGF0YS5hcHBlbmQoXCJtZXRob2RcIiwgZGF0YS5tZXRob2QpO1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL01hbmFnZSBpdGVtIGFkZGVkL3VwZGF0ZWRcclxuZXhwb3J0IGZ1bmN0aW9uIE1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCBkYXRhKSB7XHJcbiAgc3dpdGNoIChyZXNwb25zZS5yZXN1bHQpIHtcclxuICAgIGNhc2UgXCJlcnJvci1maWVsZFwiOlxyXG4gICAgICBhZGRfaW5wdXRzX2Vycm9ycyhpbnB1dHNBcnJheShkYXRhLmZybSksIGVycm9yKGRhdGEuZnJtLCByZXNwb25zZS5tc2cpKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwic3VjY2Vzc1wiOlxyXG4gICAgICBkYXRhLmZybS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgIGlmIChkYXRhLmxvZ2luKSB7XHJcbiAgICAgICAgZGF0YS5sb2dpbmJveC5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhLnN3YWwpIHtcclxuICAgICAgICBkYXRhLm1vZGFsYm94Lm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICBkYXRhLnN3YWwuZmlyZShcIlN1Y2Nlc3MhXCIsIHJlc3BvbnNlLm1zZywgXCJzdWNjZXNzXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChkYXRhLmFsZXJ0c3VjY2VzcykgZGF0YS5hbGVydGlkLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImltZ2FyZWFcIikpIHtcclxuICAgICAgICBkYXRhLmltZ2FyZWEuYXR0cihcInNyY1wiLCBkYXRhLmltZ3ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YS5wcmVwZW5kKSB7XHJcbiAgICAgICAgZGF0YS5uZXN0ZWQucHJlcGVuZChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChkYXRhLnByZXBlbmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBkYXRhLm5lc3RlZC5iZWZvcmUocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIGRhdGEubmVzdGVkLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGEuZGlzcGxheSkgZGF0YS5kaXNwbGF5KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImVycm9yXCI6XHJcbiAgICAgIGRhdGEuYWxlcnRpZC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIGRhdGEuZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59XHJcblxyXG4vL2RlbGV0ZVxyXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlKGRhdGEsIGRpc3BsYXlJdGVtKSB7XHJcbiAgY2hlY2tCZWZvcmVEZWxldGUoZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgICAgIG5vdGlmaWNhdGlvbjogZGF0YS5ub3RpZmljYXRpb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIGRhdGEuc3dhbFxyXG4gICAgICAgICAgICAgID8gZGF0YS5zd2FsLmZpcmUoXCJEZWxldGVkIVwiLCByZXNwb25zZS5tc2csIFwic3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgIDogXCJcIjtcclxuICAgICAgICAgICAgZGlzcGxheUl0ZW0oZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YS5hbGVydElELmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4vL2Z1bmN0aW9uIGNoZWNrIGJlZm9yZSBkZWxldGVcclxuZnVuY3Rpb24gY2hlY2tCZWZvcmVEZWxldGUoZGF0YSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBpZiAoIWRhdGEudXJsX2NoZWNrKSB7XHJcbiAgICAgIGRhdGEuc3dhbFxyXG4gICAgICAgIC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcclxuICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICBodG1sOiBcIjxwPllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzITwvcD5cIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJEZWxldGUhXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybF9jaGVjayxcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgICAgICBub3RpZmljYXRpb246IGRhdGEubm90aWZpY2F0aW9uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBkYXRhLnN3YWxcclxuICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGh0bWw6IFwiPHA+WW91IHdvbid0IGJlIGFibGUgdG8gcmV2ZXJ0IHRoaXMhPC9wPlwiICsgcmVzcG9uc2UubXNnLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXHJcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkRlbGV0ZSFcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmFpbCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNdWx0aXNlbGxlY3QoZGF0YSkge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgXCJmb3Jtcy9maWxsTXVsdGlzZWxlY3RcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIGRhdGEuZGlzcGxheUlELmFwcGVuZChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGEuYWxlcnRJRC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDYXRlZ29ycmllKGNhdEZpZWxkLCBhbGVydElEKSB7XHJcbiAgbGV0IGNhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2F0RmllbGQpO1xyXG4gIGlmIChjYXQudmFsdWUubGVuZ3RoID09IDApIHtcclxuICAgIGFsZXJ0KFwiTGUgY2hhbXBzIGNhdMOpZ29yaWUgZXN0IHZpZGVcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogQkFTRV9VUkwgKyBcImZvcm1zL2FkZGNhdGVnb3JpZVwiLFxyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgY2F0ZWdvcmllOiBjYXQudmFsdWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZSAhPSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgJChhbGVydElEKS5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFkZF9pbnB1dHNfZXJyb3JzID0gKElucHV0QXJyLCBhcnJFcnIpID0+IHtcclxuICBJbnB1dEFyci5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgaWYgKGFyckVyci5pbmRleE9mKGlucHV0LmlkKSA9PSAtMSkge1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICAgaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRfaW52YWxpZF9pbnB1dCA9IChmb3JtKSA9PiB7XHJcbiAgZm9ybS5maW5kKFwiLmlzLWludmFsaWRcIikucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gIGZvcm0uZmluZChcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwoXCJcIik7XHJcbn07XHJcblxyXG4vL3JlbW92ZSBpbnZhbGlkIGlucHV0IG9uIGZvY3VzXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJbnZhbGlkSW5wdXQoTXlmb3JtKSB7XHJcbiAgTXlmb3JtLm9uKFwiZm9jdXNcIiwgXCJpbnB1dCx0ZXh0YXJlYSwgLmNrLCAubm90ZS1lZGl0b3JcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVycm9yID0gKGZvcm0sIElucHV0RXJyKSA9PiB7XHJcbiAgdmFyIGFyckVyciA9IFtdO1xyXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKElucHV0RXJyKSkge1xyXG4gICAgdmFyIGlucHV0ID0gZm9ybS5maW5kKFwiI1wiICsga2V5KS5hZGRDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICBpbnB1dC5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwodmFsdWUpO1xyXG4gICAgYXJyRXJyLnB1c2goa2V5KTtcclxuICB9XHJcbiAgcmV0dXJuIGFyckVycjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnB1dHNBcnJheSA9IChmb3JtKSA9PiB7XHJcbiAgdmFyIGFyciA9IFtdO1xyXG4gIGZvcm0uZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpbnB1dHNBcnIgPSAkKHRoaXMpLmZpbmQoXCI6aW5wdXRcIikudG9BcnJheSgpO1xyXG4gICAgaW5wdXRzQXJyLmZvckVhY2goZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBbXCJzdWJtaXRcIiwgXCJoaWRkZW5cIiwgXCJjaGVja2JveFwiLCBcImJ1dHRvblwiLCBcImZpbGVcIl0uaW5kZXhPZihcclxuICAgICAgICAgIGlucHV0LnR5cGVcclxuICAgICAgICApID09IC0xICYmXHJcbiAgICAgICAgaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nXHJcbiAgICAgICkge1xyXG4gICAgICAgIGFyci5wdXNoKGlucHV0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGFycjtcclxufTtcclxuIiwiaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiY29yZWpzL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBZGQsIENhbGxfY29udHJvbGxlciwgTWFuYWdlUmVzcG9uc2UgfSBmcm9tIFwiY29yZWpzL2Zvcm1fY3J1ZFwiO1xyXG5pbXBvcnQgeyByZXNldF9pbnZhbGlkX2lucHV0IH0gZnJvbSBcImNvcmVqcy9pbnB1dEVyck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgcmVhZHVybCB9IGZyb20gXCJjb3JlanMvcHJvZmlsZV9pbWdcIjtcclxuZnVuY3Rpb24gUGhwTFIoZWxlbWVudCkge1xyXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgdGhpcy5pbml0KCk7XHJcbn1cclxuUGhwTFIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5zZXR1cFZhcmlhYmxlcygpO1xyXG4gIHRoaXMuc2V0dXBFdmVudHMoKTtcclxufTtcclxuLy9QSFAgTFIgc2V0dXAgVmFyaWFibGVzXHJcblBocExSLnByb3RvdHlwZS5zZXR1cFZhcmlhYmxlcyA9IGZ1bmN0aW9uICgpIHtcclxuICB0aGlzLmxvZ2JveCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2xvZ2luLWJveFwiKTtcclxuICB0aGlzLmxvZ2luZnJtID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjbG9naW4tZnJtXCIpO1xyXG4gIHRoaXMucmVnYm94ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjcmVnaXN0ZXItYm94XCIpO1xyXG4gIHRoaXMucmVnZnJtID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjcmVnaXN0ZXItZnJtXCIpO1xyXG4gIHRoaXMuZm9yZ290Ym94ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjZm9yZ290LWJveFwiKTtcclxuICB0aGlzLmZvcmdvdGZybSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2ZvcmdvdC1mcm1cIik7XHJcbn07XHJcbi8vUEhQIExSIHNldHVwIEV2ZW50c1xyXG5QaHBMUi5wcm90b3R5cGUuc2V0dXBFdmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHBocExSID0gdGhpcztcclxuXHJcbiAgLy9yZWZyZXNoIGxvZ2luICYgcmVnaXN0ZXIgZnJtIG9uIGhpZGUgYW5kIHNob3dcclxuICBwaHBMUi5sb2dib3gub24oXCJoaWRlLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChwaHBMUi5sb2dpbmZybS5maW5kKFwiLmlzLWludmFsaWRcIikubGVuZ3RoICE9IDApIHtcclxuICAgICAgcmVzZXRfaW52YWxpZF9pbnB1dChwaHBMUi5sb2dpbmZybSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy9SZXNldCByZWdpc3RlciBmb3JtIGludmFsaWQgaW5wdXQgb24gaGlkZSBtb2RhbFxyXG4gIHBocExSLnJlZ2JveC5vbihcImhpZGUuYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHBocExSLnJlZ2ZybS5maW5kKFwiLmlzLWludmFsaWRcIikubGVuZ3RoICE9IDApIHtcclxuICAgICAgcmVzZXRfaW52YWxpZF9pbnB1dChwaHBMUi5yZWdmcm0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vUmVzZXQgcmVnaXN0ZXIgZm9ybSBvbiBzaG93blxyXG4gIHBocExSLnJlZ2JveC5vbihcInNob3cuYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgcGhwTFIucmVnZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgIHBocExSLnJlZ2ZybS5maW5kKFwiI3JlZ0FsZXJ0XCIpLmh0bWwoXCJcIik7XHJcbiAgfSk7XHJcbiAgLy9yZW1vdmUgaW52YWxpZCBpbnB1dCBvbiBmb2N1cyByZWdpc3RlclxyXG4gIHBocExSLnJlZ2ZybS5vbihcImZvY3VzXCIsIFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxuICB9KTtcclxuICAvL3JlbW92ZSBpbnZhbGlkIGlucHV0IG9uIGZvY3VzIGxvZ2luXHJcbiAgcGhwTFIubG9naW5mcm0ub24oXCJmb2N1c1wiLCBcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwoXCJcIik7XHJcbiAgfSk7XHJcbiAgLy9yZXNldCBmb3Jnb3QgcGFzc3dvcmQgZnJtXHJcbiAgcGhwTFIuZm9yZ290Ym94Lm9uKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwaHBMUi5mb3Jnb3Rmcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gIH0pO1xyXG4gIC8vRmlsbCBpbiBsb2dpbiBmcm9tIGNvb2tpZXMgb24gc2hvbndcclxuICBwaHBMUi5sb2dib3gub24oXCJzaG93bi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IEJBU0VfVVJMICsgXCJhdXRoL3JlbWVtYmVyX2NoZWNrXCIsXHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2VtYWlsXCIpLnZhbChyZXNwb25zZS5tc2cuZW1haWwpO1xyXG4gICAgICAgICAgcGhwTFIubG9naW5mcm1cclxuICAgICAgICAgICAgLmZpbmQoXCIjY3VzdG9tQ2hlY2tcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJjaGVja2VkXCIsIHJlc3BvbnNlLm1zZy5yZW1lbWJlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjZW1haWxcIikudmFsKFwiXCIpO1xyXG4gICAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNwYXNzd29yZFwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgLy9SZWdpc3RlciBmb3JtXHJcbiAgcGhwTFIucmVnZnJtLm9uKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgcGhwTFIucmVnZnJtLmZpbmQoXCIjcmVnaXN0ZXItYnRuXCIpLnZhbChcIlBsZWFzZSB3YWl0Li4uXCIpO1xyXG4gICAgdmFyIGlucHV0RGF0YSA9IHtcclxuICAgICAgdXJsOiBcImF1dGgvYWpheFJlZ2lzdGVyXCIsXHJcbiAgICAgIGZybTogcGhwTFIucmVnZnJtLFxyXG4gICAgICB0YWJsZTogXCJhdXRoXCIsXHJcbiAgICAgIG5vdGlmaWNhdGlvbjogXCJhZG1pblwiLFxyXG4gICAgICBmcm1fbmFtZTogXCJyZWdpc3Rlci1mcm1cIixcclxuICAgIH07XHJcbiAgICBBZGQoaW5wdXREYXRhLCBnZXN0aW9uUik7XHJcbiAgICBmdW5jdGlvbiBnZXN0aW9uUihyZXNwb25zZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIHBocExSLnJlZ2ZybS5maW5kKFwiI3JlZ2lzdGVyLWJ0blwiKS52YWwoXCJFbnJlZ2lzdHJlclwiKTtcclxuICAgICAgdmFyIG91dHB1dERhdGEgPSB7XHJcbiAgICAgICAgZnJtOiBwaHBMUi5yZWdmcm0sXHJcbiAgICAgICAgc3dhbDogZmFsc2UsXHJcbiAgICAgICAgYWxlcnRpZDogcGhwTFIucmVnZnJtLmZpbmQoXCIjcmVnQWxlcnRcIiksXHJcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgaW1nYXJlYTogcGhwTFIucmVnYm94LmZpbmQoXCIudXBsb2FkLXByb2ZpbGUtaW1hZ2UgLmltZ1wiKSxcclxuICAgICAgICBpbWd2YWx1ZTogcmVzcG9uc2UuaW1nID8gcmVzcG9uc2UuaW1nIDogXCJcIixcclxuICAgICAgICBhbGVydHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICAgIE1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCBvdXRwdXREYXRhKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy9yZWFkIHByb2ZpbGUgaW1hZ2Ugb24gY2hhbmdlXHJcbiAgcGhwTFIucmVnYm94XHJcbiAgICAuZmluZCgnLnVwbG9hZC1wcm9maWxlLWltYWdlIGlucHV0W3R5cGU9XCJmaWxlXCJdJylcclxuICAgIC5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJlYWR1cmwoXHJcbiAgICAgICAgdGhpcyxcclxuICAgICAgICBwaHBMUi5yZWdib3guZmluZChcIi51cGxvYWQtcHJvZmlsZS1pbWFnZSAuaW1nXCIpLFxyXG4gICAgICAgIHBocExSLnJlZ2JveC5maW5kKFwiLnVwbG9hZC1wcm9maWxlLWltYWdlIC5jYW1lcmEtaWNvblwiKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgLy9Mb2dpbiBmb3JtXHJcblxyXG4gIHBocExSLmxvZ2luZnJtLm9uKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbi1idG5cIikudmFsKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgdXJsOiBcImF1dGgvYWpheExvZ2luXCIsXHJcbiAgICAgIGZybTogcGhwTFIubG9naW5mcm0sXHJcbiAgICAgIGZybV9uYW1lOiBcImxvZ2luLWZybVwiLFxyXG4gICAgfTtcclxuICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBNYW5hZ2VMb2dpblJlc3BvbnNlKTtcclxuICAgIC8vbWFuYWdlIGxvZ2luIFJlc3BvbnNlXHJcbiAgICBmdW5jdGlvbiBNYW5hZ2VMb2dpblJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjbG9naW4tYnRuXCIpLnZhbChcIkxvZ2luXCIpO1xyXG4gICAgICB2YXIgcmRhdGEgPSB7XHJcbiAgICAgICAgZnJtOiBwaHBMUi5sb2dpbmZybSxcclxuICAgICAgICBidG46IHBocExSLmxvZ2luZnJtLmZpbmQoXCIjbG9naW4tYnRuXCIpLFxyXG4gICAgICAgIHRleHRCdG46IFwiU2lnbiBJblwiLFxyXG4gICAgICAgIGFsZXJ0aWQ6IHBocExSLmxvZ2luZnJtLmZpbmQoXCIjbG9naW5BbGVydFwiKSxcclxuICAgICAgICBsb2dpbmJveDogcGhwTFIubG9nYm94LFxyXG4gICAgICAgIGxvZ2luOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgICBNYW5hZ2VSZXNwb25zZShyZXNwb25zZSwgcmRhdGEpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvL2xvZ2luIHdpdGggRmFjZWJvb2tcclxuICBwaHBMUi5sb2dib3guZmluZChcIiNmYmxpbmtcIikub24oXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbi1idG5cIikudmFsKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgZnJtOiBwaHBMUi5sb2dpbmZybSxcclxuICAgICAgdXJsOiBcImd1ZXN0cy9mYkxvZ2luXCIsXHJcbiAgICAgIGZybV9uYW1lOiBcImxvZ2luLWZybVwiLFxyXG4gICAgfTtcclxuICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBGYlJlc3BvbnNlKTtcclxuICAgIGZ1bmN0aW9uIEZiUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIEZCID0gZmFjZWJvb2tsb2dpbihyZXNwb25zZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbkFsZXJ0XCIpLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vZmFjZWJvb2sgbG9naW5cclxuICBmdW5jdGlvbiBmYWNlYm9va2xvZ2luKHJlc3ApIHtcclxuICAgIEZhY2Vib29rLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgRmFjZWJvb2suaW5pdCh7XHJcbiAgICAgICAgYXBwSWQ6IHJlc3AubXNnLmFwcElELFxyXG4gICAgICB9KTtcclxuICAgICAgRmFjZWJvb2suZ2V0TG9naW5TdGF0dXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IFwiY29ubmVjdGVkXCIpIHtcclxuICAgICAgICAgIGdldEZiVXNlckRhdGEoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmJMb2dpbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBGYWNlYm9vaztcclxuICB9XHJcblxyXG4gIC8vIEZhY2Vib29rIGxvZ2luIHdpdGggSmF2YVNjcmlwdCBTREtcclxuICBmdW5jdGlvbiBmYkxvZ2luKCkge1xyXG4gICAgRkIubG9naW4oe1xyXG4gICAgICBzY29wZTogXCJlbWFpbFwiLFxyXG4gICAgICByZXR1cm5fc2NvcGVzOiB0cnVlLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIikge1xyXG4gICAgICAgIGdldEZiVXNlckRhdGEoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luQWxlcnRcIikuaW5uZXJIVE1MID1cclxuICAgICAgICAgIFwiVXNlciBjYW5jZWxsZWQgbG9naW4gb3IgZGlkIG5vdCBmdWxseSBhdXRob3JpemUuXCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyAvLyBGZXRjaCB0aGUgdXNlciBwcm9maWxlIGRhdGEgZnJvbSBmYWNlYm9va1xyXG4gIGZ1bmN0aW9uIGdldEZiVXNlckRhdGEoKSB7XHJcbiAgICBGQi5hcGkoXCIvbWVcIiwgXCJnZXRcIiwge1xyXG4gICAgICBmaWVsZHM6IFwiaWQsZmlyc3RfbmFtZSxsYXN0X25hbWUsZW1haWwsbGluayxnZW5kZXIsbG9jYWxlLHBpY3R1cmVcIixcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIGZybTogcGhwTFIubG9naW5mcm0sXHJcbiAgICAgICAgZnJtX25hbWU6IFwibG9naW4tZnJtXCIsXHJcbiAgICAgICAgdXJsOiBcImF1dGgvZmJsb2dpblwiLFxyXG4gICAgICAgIGZyZWVkYXRhOiBKU09OLnN0cmluZ2lmeShyZXNwb25zZSksXHJcbiAgICAgIH07XHJcbiAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBNYW5hZ2VMb2dpblJlc3BvbnNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAvL0ZvcmdvdCBwYXNzd29yZCByZXF1ZXN0XHJcbiAgcGhwTFIuZm9yZ290ZnJtLm9uKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgcGhwTFIuZm9yZ290ZnJtLmZpbmQoXCIjZm9yZ290LWJ0blwiKS52YWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICB1cmw6IFwiYXV0aC9mb3Jnb3RcIixcclxuICAgICAgZnJtOiBwaHBMUi5mb3Jnb3Rmcm0sXHJcbiAgICAgIGZybV9uYW1lOiBcImZvcmdvdC1mcm1cIixcclxuICAgIH07XHJcbiAgICBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgTVJlc3BvbnNlKTtcclxuICAgIGZ1bmN0aW9uIE1SZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgICB2YXIgcmRhdGEgPSB7XHJcbiAgICAgICAgZnJtOiBwaHBMUi5mb3Jnb3Rmcm0sXHJcbiAgICAgICAgYWxlcnRpZDogcGhwTFIuZm9yZ290ZnJtLmZpbmQoXCIjZm9yZ290QWxlcnRcIiksXHJcbiAgICAgICAgYWxlcnRzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgICBNYW5hZ2VSZXNwb25zZShyZXNwb25zZSwgcmRhdGEpO1xyXG4gICAgICBwaHBMUi5mb3Jnb3Rmcm0uZmluZChcIiNmb3Jnb3QtYnRuXCIpLnZhbChcIlJlc2V0IHBhc3N3b3JkXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vbG9nb3V0XHJcbiAgdmFyIGxvZ291dCA9ICQoXCJhOmNvbnRhaW5zKCdMb2dvdXQnKVwiKTtcclxuXHJcbiAgJChsb2dvdXQpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBGQiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBGQi5sb2dvdXQoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vIGxvZ2dlZCBvdXRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IEJBU0VfVVJMICsgXCJhdXRoL2xvZ291dFwiLFxyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgbG9nb3V0LmNsb3Nlc3QoXCJkaXZcIikubG9hZChsb2NhdGlvbi5ocmVmICsgXCIgLmNvbm5lY3RcIik7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UubXNnID09IFwicmVkaXJlY3RcIikge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IEJBU0VfVVJMO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFqYXggbG9nb3V0IGZyb20gZWxzZXdoZXJlXHJcbn07XHJcbiQuZm4ucGhwTFIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gIG5ldyBQaHBMUih0aGlzKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuJChcIiNMb2dpbi1SZWdpc3Rlci1TeXN0ZW1cIikucGhwTFIoKTtcclxuIiwiZXhwb3J0IGNvbnN0IHJlYWR1cmwgPSAoaW5wdXQsIGltZywgaWNvbikgPT4ge1xyXG4gIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xyXG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaW1nLmF0dHIoXCJzcmNcIiwgZS50YXJnZXQucmVzdWx0KTtcclxuICAgICAgaWNvbi5jc3Moe1xyXG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbnB1dC5maWxlc1swXSk7XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9