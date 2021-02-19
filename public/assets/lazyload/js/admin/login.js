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
/* harmony import */ var corejs_profile_img__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! corejs/profile_img */ "./src/assets/js/core/profile_img.js");
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

  phpLR.logbox.on("shown.bs.modal", function () {
    $.ajax({
      url: corejs_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + "auth/remember_check",
      method: "post",
      success: function success(response) {
        console.log(response);

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
    (0,corejs_profile_img__WEBPACK_IMPORTED_MODULE_3__.readurl)(this, phpLR.regbox.find(".upload-profile-image .img"), phpLR.regbox.find(".upload-profile-image .camera-icon"));
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
        if (response === "success") {
          logout.closest("div").load(location.href + " .connect");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvZm9ybV9jcnVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9pbnB1dEVyck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2xvZ3JlZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvcHJvZmlsZV9pbWcuanMiXSwibmFtZXMiOlsiZGlzcGxheUFsbERldGFpbHMiLCJkYXRhIiwiZ2VzdGlvbiIsIiQiLCJhamF4IiwidXJsIiwiQkFTRV9VUkwiLCJtZXRob2QiLCJ0YWJsZSIsImlkIiwidXNlciIsInNlc3Npb25faWQiLCJkYXRhX3R5cGUiLCJyZXR1cm5fbW9kZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInBhcmFtcyIsImVkaXRGb3JtIiwiZm9ybURhdGEiLCJkaXNwbGF5QWxsSXRlbXMiLCJzdGFydCIsIm1heCIsInF1ZXJ5IiwicGFnZSIsInBhZ2luYXRpb24iLCJyZXN1bHQiLCJkaXNwbGF5aWQiLCJodG1sIiwibXNnIiwiZGF0YXRhYmxlIiwibG9hZERhdGF0YWJsZXMiLCJEYXRhVGFibGUiLCJvcmRlciIsIkFkZCIsIkZvcm1EYXRhIiwiZnJtIiwiYXBwZW5kIiwibm90aWZpY2F0aW9uIiwiZnJtX25hbWUiLCJzdGFydF9kYXRlIiwiZW5kX2RhdGUiLCJpbWFnZVVybHNBcnkiLCJjYWNoZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJDYWxsX2NvbnRyb2xsZXIiLCJ1cmxfZGF0YSIsImFjdGlvbiIsImZyZWVkYXRhIiwidXNlcl9pZCIsIk1hbmFnZVJlc3BvbnNlIiwiYWRkX2lucHV0c19lcnJvcnMiLCJpbnB1dHNBcnJheSIsImVycm9yIiwidHJpZ2dlciIsImxvZ2luIiwibG9naW5ib3giLCJtb2RhbCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic3dhbCIsIm1vZGFsYm94IiwiZmlyZSIsImFsZXJ0c3VjY2VzcyIsImFsZXJ0aWQiLCJoYXNPd25Qcm9wZXJ0eSIsImltZ2FyZWEiLCJhdHRyIiwiaW1ndmFsdWUiLCJwcmVwZW5kIiwibmVzdGVkIiwiYmVmb3JlIiwiaGlkZSIsImRpc3BsYXkiLCJEZWxldGUiLCJkaXNwbGF5SXRlbSIsImNoZWNrQmVmb3JlRGVsZXRlIiwidGhlbiIsInZhbHVlIiwiYWxlcnRJRCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidXJsX2NoZWNrIiwidGl0bGUiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImRvbmUiLCJmYWlsIiwiZGlzcGxheU11bHRpc2VsbGVjdCIsImRpc3BsYXlJRCIsImFkZENhdGVnb3JyaWUiLCJjYXRGaWVsZCIsImNhdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxlbmd0aCIsImFsZXJ0IiwiY2F0ZWdvcmllIiwiSW5wdXRBcnIiLCJhcnJFcnIiLCJmb3JFYWNoIiwiaW5wdXQiLCJpbmRleE9mIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaW5uZXJIVE1MIiwicmVzZXRfaW52YWxpZF9pbnB1dCIsImZvcm0iLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVJbnZhbGlkSW5wdXQiLCJNeWZvcm0iLCJvbiIsInBhcmVudCIsImNoaWxkcmVuIiwiSW5wdXRFcnIiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwiYWRkQ2xhc3MiLCJwdXNoIiwiYXJyIiwiZWFjaCIsImlucHV0c0FyciIsInRvQXJyYXkiLCJ0eXBlIiwiUGhwTFIiLCJlbGVtZW50IiwiaW5pdCIsInByb3RvdHlwZSIsInNldHVwVmFyaWFibGVzIiwic2V0dXBFdmVudHMiLCJsb2dib3giLCJsb2dpbmZybSIsInJlZ2JveCIsInJlZ2ZybSIsImZvcmdvdGJveCIsImZvcmdvdGZybSIsInBocExSIiwiY29uc29sZSIsImxvZyIsInZhbCIsImVtYWlsIiwicmVtZW1iZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbnB1dERhdGEiLCJnZXN0aW9uUiIsIm91dHB1dERhdGEiLCJpbWciLCJyZWFkdXJsIiwiTWFuYWdlTG9naW5SZXNwb25zZSIsInJkYXRhIiwiYnRuIiwidGV4dEJ0biIsIkZiUmVzcG9uc2UiLCJGQiIsImZhY2Vib29rbG9naW4iLCJyZXNwIiwiRmFjZWJvb2siLCJsb2FkIiwiYXBwSWQiLCJhcHBJRCIsImdldExvZ2luU3RhdHVzIiwic3RhdHVzIiwiZ2V0RmJVc2VyRGF0YSIsImZiTG9naW4iLCJzY29wZSIsInJldHVybl9zY29wZXMiLCJnZXRFbGVtZW50QnlJZCIsImFwaSIsImZpZWxkcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJNUmVzcG9uc2UiLCJsb2dvdXQiLCJjbG9zZXN0IiwiaHJlZiIsImZuIiwib3B0aW9ucyIsImljb24iLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0YXJnZXQiLCJjc3MiLCJyZWFkQXNEYXRhVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ08sU0FBU0EsaUJBQVQsQ0FBMkJDLElBQTNCLEVBQWlDQyxPQUFqQyxFQUEwQztBQUMvQ0MsR0FBQyxDQUFDQyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyw2Q0FBUSxHQUFHTCxJQUFJLENBQUNJLEdBRGhCO0FBRUxFLFVBQU0sRUFBRSxNQUZIO0FBR0xOLFFBQUksRUFBRTtBQUNKTyxXQUFLLEVBQUVQLElBQUksQ0FBQ08sS0FEUjtBQUVKQyxRQUFFLEVBQUVSLElBQUksQ0FBQ1EsRUFGTDtBQUdKQyxVQUFJLEVBQUVULElBQUksQ0FBQ1MsSUFBTCxHQUFZVCxJQUFJLENBQUNTLElBQWpCLEdBQXdCLEVBSDFCO0FBSUpDLGdCQUFVLEVBQUVWLElBQUksQ0FBQ1UsVUFBTCxHQUFrQlYsSUFBSSxDQUFDVSxVQUF2QixHQUFvQyxFQUo1QztBQUtKQyxlQUFTLEVBQUVYLElBQUksQ0FBQ1csU0FBTCxHQUFpQlgsSUFBSSxDQUFDVyxTQUF0QixHQUFrQyxFQUx6QztBQU1KQyxpQkFBVyxFQUFFWixJQUFJLENBQUNZLFdBQUwsR0FBbUJaLElBQUksQ0FBQ1ksV0FBeEIsR0FBc0M7QUFOL0MsS0FIRDtBQVdMQyxXQUFPLEVBQUUsaUJBQVVDLFFBQVYsRUFBb0I7QUFDM0JiLGFBQU8sQ0FBQ2EsUUFBRCxFQUFXZCxJQUFJLENBQUNlLE1BQUwsR0FBY2YsSUFBSSxDQUFDZSxNQUFuQixHQUE0QixFQUF2QyxDQUFQO0FBQ0Q7QUFiSSxHQUFQO0FBZUQsQyxDQUNEOztBQUNPLFNBQVNDLFFBQVQsQ0FBa0JoQixJQUFsQixFQUF3QkMsT0FBeEIsRUFBaUM7QUFDdENDLEdBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsNkNBQVEsR0FBR0wsSUFBSSxDQUFDSSxHQURoQjtBQUVMRSxVQUFNLEVBQUUsTUFGSDtBQUdMTixRQUFJLEVBQUVBLElBQUksQ0FBQ2lCLFFBSE47QUFJTEosV0FBTyxFQUFFLGlCQUFVQyxRQUFWLEVBQW9CO0FBQzNCYixhQUFPLENBQUNhLFFBQUQsQ0FBUDtBQUNEO0FBTkksR0FBUDtBQVFELEMsQ0FFRDs7QUFDTyxTQUFTSSxlQUFULENBQXlCbEIsSUFBekIsRUFBK0I7QUFDcENFLEdBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsNkNBQVEsR0FBR0wsSUFBSSxDQUFDSSxHQURoQjtBQUVMRSxVQUFNLEVBQUUsTUFGSDtBQUdMTixRQUFJLEVBQUU7QUFDSk8sV0FBSyxFQUFFUCxJQUFJLENBQUNPLEtBRFI7QUFFSkMsUUFBRSxFQUFFUixJQUFJLENBQUNRLEVBQUwsSUFBVyxFQUFYLEdBQWdCUixJQUFJLENBQUNRLEVBQXJCLEdBQTBCLEVBRjFCO0FBR0pXLFdBQUssRUFBRSxDQUhIO0FBSUpDLFNBQUcsRUFBRXBCLElBQUksQ0FBQ29CLEdBQUwsSUFBWSxFQUFaLEdBQWlCcEIsSUFBSSxDQUFDb0IsR0FBdEIsR0FBNEIsRUFKN0I7QUFLSlgsVUFBSSxFQUFFVCxJQUFJLENBQUNTLElBQUwsSUFBYSxFQUFiLEdBQWtCVCxJQUFJLENBQUNTLElBQXZCLEdBQThCLEVBTGhDO0FBTUpZLFdBQUssRUFBRXJCLElBQUksQ0FBQ3FCLEtBQUwsSUFBYyxFQUFkLEdBQW1CckIsSUFBSSxDQUFDcUIsS0FBeEIsR0FBZ0MsRUFObkM7QUFPSkMsVUFBSSxFQUFFdEIsSUFBSSxDQUFDc0IsSUFBTCxJQUFhLEVBQWIsR0FBa0J0QixJQUFJLENBQUNzQixJQUF2QixHQUE4QixFQVBoQztBQVFKQyxnQkFBVSxFQUFFdkIsSUFBSSxDQUFDdUIsVUFBTCxJQUFtQixFQUFuQixHQUF3QnZCLElBQUksQ0FBQ3VCLFVBQTdCLEdBQTBDLEVBUmxEO0FBU0paLGVBQVMsRUFBRVgsSUFBSSxDQUFDVyxTQUFMLEdBQWlCWCxJQUFJLENBQUNXLFNBQXRCLEdBQWtDLEVBVHpDO0FBVUpDLGlCQUFXLEVBQUVaLElBQUksQ0FBQ1ksV0FBTCxHQUFtQlosSUFBSSxDQUFDWSxXQUF4QixHQUFzQztBQVYvQyxLQUhEO0FBZUxDLFdBQU8sRUFBRSxpQkFBVUMsUUFBVixFQUFvQjtBQUMzQixVQUFJQSxRQUFRLENBQUNVLE1BQVQsSUFBbUIsU0FBdkIsRUFBa0M7QUFDaEM7QUFDQSxZQUFJeEIsSUFBSSxDQUFDTyxLQUFMLEtBQWUsVUFBbkIsRUFBK0I7QUFDN0JQLGNBQUksQ0FBQ3lCLFNBQUwsQ0FBZUMsSUFBZixDQUFvQlosUUFBUSxDQUFDYSxHQUE3QjtBQUNELFNBRkQsTUFFTztBQUNMM0IsY0FBSSxDQUFDeUIsU0FBTCxDQUFlQyxJQUFmLENBQW9CWixRQUFRLENBQUNhLEdBQTdCO0FBQ0EsY0FBSTNCLElBQUksQ0FBQzRCLFNBQVQsRUFBb0JDLGNBQWM7QUFDbkM7QUFDRixPQVJELE1BUU87QUFDTDNCLFNBQUMsQ0FBQ0YsSUFBSSxDQUFDeUIsU0FBTixDQUFELENBQWtCQyxJQUFsQixDQUF1QlosUUFBUSxDQUFDYSxHQUFoQztBQUNEO0FBQ0Y7QUEzQkksR0FBUDtBQTZCRDs7U0FDY0UsYzs7RUFRZjs7Ozs0RUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUMwQix5TUFEMUI7O0FBQUE7QUFDUUMscUJBRFI7QUFJRTVCLGFBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVzRCLFNBQVgsQ0FBcUI7QUFDbkJDLG1CQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksTUFBSjtBQURZLGFBQXJCOztBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFTTyxTQUFTQyxHQUFULENBQWFoQyxJQUFiLEVBQW1CQyxPQUFuQixFQUE0QjtBQUNqQyxNQUFJZ0IsUUFBUSxHQUFHLElBQUlnQixRQUFKLENBQWFqQyxJQUFJLENBQUNrQyxHQUFMLENBQVMsQ0FBVCxDQUFiLENBQWY7QUFDQWpCLFVBQVEsQ0FBQ2tCLE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUJuQyxJQUFJLENBQUNPLEtBQTlCO0FBQ0FVLFVBQVEsQ0FBQ2tCLE1BQVQsQ0FBZ0IsY0FBaEIsRUFBZ0NuQyxJQUFJLENBQUNvQyxZQUFyQztBQUNBbkIsVUFBUSxDQUFDa0IsTUFBVCxDQUFnQixVQUFoQixFQUE0Qm5DLElBQUksQ0FBQ3FDLFFBQWpDO0FBQ0EsTUFBSXJDLElBQUksQ0FBQ3NDLFVBQVQsRUFBcUJyQixRQUFRLENBQUNrQixNQUFULENBQWdCLFlBQWhCLEVBQThCbkMsSUFBSSxDQUFDc0MsVUFBbkM7QUFDckIsTUFBSXRDLElBQUksQ0FBQ3VDLFFBQVQsRUFBbUJ0QixRQUFRLENBQUNrQixNQUFULENBQWdCLFVBQWhCLEVBQTRCbkMsSUFBSSxDQUFDdUMsUUFBakM7QUFDbkIsTUFBSXZDLElBQUksQ0FBQ3dDLFlBQVQsRUFBdUJ2QixRQUFRLENBQUNrQixNQUFULENBQWdCLGNBQWhCLEVBQWdDbkMsSUFBSSxDQUFDd0MsWUFBckM7QUFDdkJ0QyxHQUFDLENBQUNDLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVDLDZDQUFRLEdBQUdMLElBQUksQ0FBQ0ksR0FEaEI7QUFFTEUsVUFBTSxFQUFFLE1BRkg7QUFHTE4sUUFBSSxFQUFFaUIsUUFIRDtBQUlMd0IsU0FBSyxFQUFFLEtBSkY7QUFLTEMsZUFBVyxFQUFFLEtBTFI7QUFNTEMsZUFBVyxFQUFFLEtBTlI7QUFPTDlCLFdBQU8sRUFBRSxpQkFBVUMsUUFBVixFQUFvQjtBQUMzQmIsYUFBTyxDQUFDYSxRQUFELEVBQVdkLElBQUksQ0FBQ2UsTUFBTCxHQUFjZixJQUFJLENBQUNlLE1BQW5CLEdBQTRCLEVBQXZDLENBQVA7QUFDRDtBQVRJLEdBQVA7QUFXRCxDLENBQ0Q7O0FBQ08sU0FBUzZCLGVBQVQsQ0FBeUI1QyxJQUF6QixFQUErQkMsT0FBL0IsRUFBd0M7QUFDN0MsTUFBSWdCLFFBQVEsR0FBRyxJQUFJZ0IsUUFBSixDQUFhakMsSUFBSSxDQUFDa0MsR0FBTCxDQUFTLENBQVQsQ0FBYixDQUFmO0FBQ0FqQixVQUFRLENBQUNrQixNQUFULENBQWdCLFVBQWhCLEVBQTRCbkMsSUFBSSxDQUFDcUMsUUFBakM7QUFDQSxNQUFJckMsSUFBSSxDQUFDTyxLQUFULEVBQWdCVSxRQUFRLENBQUNrQixNQUFULENBQWdCLE9BQWhCLEVBQXlCbkMsSUFBSSxDQUFDTyxLQUE5QjtBQUNoQixNQUFJUCxJQUFJLENBQUNvQyxZQUFULEVBQXVCbkIsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixjQUFoQixFQUFnQ25DLElBQUksQ0FBQ29DLFlBQXJDO0FBQ3ZCLE1BQUlwQyxJQUFJLENBQUM2QyxRQUFULEVBQW1CNUIsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixVQUFoQixFQUE0Qm5DLElBQUksQ0FBQzZDLFFBQWpDO0FBQ25CLE1BQUk3QyxJQUFJLENBQUM4QyxNQUFULEVBQWlCN0IsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixRQUFoQixFQUEwQm5DLElBQUksQ0FBQzhDLE1BQS9CO0FBQ2pCLE1BQUk5QyxJQUFJLENBQUN3QyxZQUFULEVBQXVCdkIsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixjQUFoQixFQUFnQ25DLElBQUksQ0FBQ3dDLFlBQXJDO0FBQ3ZCLE1BQUl4QyxJQUFJLENBQUMrQyxRQUFULEVBQW1COUIsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixVQUFoQixFQUE0Qm5DLElBQUksQ0FBQytDLFFBQWpDO0FBQ25CLE1BQUkvQyxJQUFJLENBQUNzQyxVQUFULEVBQXFCckIsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixZQUFoQixFQUE4Qm5DLElBQUksQ0FBQ3NDLFVBQW5DO0FBQ3JCLE1BQUl0QyxJQUFJLENBQUN1QyxRQUFULEVBQW1CdEIsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixVQUFoQixFQUE0Qm5DLElBQUksQ0FBQ3VDLFFBQWpDO0FBQ25CLE1BQUl2QyxJQUFJLENBQUNRLEVBQVQsRUFBYVMsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixJQUFoQixFQUFzQm5DLElBQUksQ0FBQ1EsRUFBM0I7QUFDYixNQUFJUixJQUFJLENBQUNnRCxPQUFULEVBQWtCL0IsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixJQUFoQixFQUFzQm5DLElBQUksQ0FBQ2dELE9BQTNCO0FBQ2xCLE1BQUloRCxJQUFJLENBQUNNLE1BQVQsRUFBaUJXLFFBQVEsQ0FBQ2tCLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEJuQyxJQUFJLENBQUNNLE1BQS9CO0FBQ2pCSixHQUFDLENBQUNDLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVDLDZDQUFRLEdBQUdMLElBQUksQ0FBQ0ksR0FEaEI7QUFFTEUsVUFBTSxFQUFFLE1BRkg7QUFHTG9DLGVBQVcsRUFBRSxLQUhSO0FBSUxDLGVBQVcsRUFBRSxLQUpSO0FBS0wzQyxRQUFJLEVBQUVpQixRQUxEO0FBTUxKLFdBQU8sRUFBRSxpQkFBVUMsUUFBVixFQUFvQjtBQUMzQmIsYUFBTyxDQUFDYSxRQUFELEVBQVdkLElBQUksQ0FBQ2UsTUFBTCxHQUFjZixJQUFJLENBQUNlLE1BQW5CLEdBQTRCLEVBQXZDLENBQVA7QUFDRDtBQVJJLEdBQVA7QUFVRCxDLENBQ0Q7O0FBQ08sU0FBU2tDLGNBQVQsQ0FBd0JuQyxRQUF4QixFQUFrQ2QsSUFBbEMsRUFBd0M7QUFDN0MsVUFBUWMsUUFBUSxDQUFDVSxNQUFqQjtBQUNFLFNBQUssYUFBTDtBQUNFMEIseUVBQWlCLENBQUNDLDZEQUFXLENBQUNuRCxJQUFJLENBQUNrQyxHQUFOLENBQVosRUFBd0JrQix1REFBSyxDQUFDcEQsSUFBSSxDQUFDa0MsR0FBTixFQUFXcEIsUUFBUSxDQUFDYSxHQUFwQixDQUE3QixDQUFqQjtBQUNBOztBQUNGLFNBQUssU0FBTDtBQUNFM0IsVUFBSSxDQUFDa0MsR0FBTCxDQUFTbUIsT0FBVCxDQUFpQixPQUFqQjs7QUFDQSxVQUFJckQsSUFBSSxDQUFDc0QsS0FBVCxFQUFnQjtBQUNkdEQsWUFBSSxDQUFDdUQsUUFBTCxDQUFjQyxLQUFkLENBQW9CLE1BQXBCO0FBQ0FDLGNBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7QUFDRDs7QUFDRCxVQUFJM0QsSUFBSSxDQUFDNEQsSUFBVCxFQUFlO0FBQ2I1RCxZQUFJLENBQUM2RCxRQUFMLENBQWNMLEtBQWQsQ0FBb0IsTUFBcEI7QUFDQXhELFlBQUksQ0FBQzRELElBQUwsQ0FBVUUsSUFBVixDQUFlLFVBQWYsRUFBMkJoRCxRQUFRLENBQUNhLEdBQXBDLEVBQXlDLFNBQXpDO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsWUFBSTNCLElBQUksQ0FBQytELFlBQVQsRUFBdUIvRCxJQUFJLENBQUNnRSxPQUFMLENBQWF0QyxJQUFiLENBQWtCWixRQUFRLENBQUNhLEdBQTNCO0FBQ3hCOztBQUNELFVBQUkzQixJQUFJLENBQUNpRSxjQUFMLENBQW9CLFNBQXBCLENBQUosRUFBb0M7QUFDbENqRSxZQUFJLENBQUNrRSxPQUFMLENBQWFDLElBQWIsQ0FBa0IsS0FBbEIsRUFBeUJuRSxJQUFJLENBQUNvRSxRQUE5QjtBQUNEOztBQUNELFVBQUlwRSxJQUFJLENBQUNxRSxPQUFULEVBQWtCO0FBQ2hCckUsWUFBSSxDQUFDc0UsTUFBTCxDQUFZRCxPQUFaLENBQW9CdkQsUUFBUSxDQUFDYSxHQUE3QjtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUkzQixJQUFJLENBQUNxRSxPQUFMLEtBQWlCLEtBQXJCLEVBQTRCO0FBQzFCckUsY0FBSSxDQUFDc0UsTUFBTCxDQUFZQyxNQUFaLENBQW1CekQsUUFBUSxDQUFDYSxHQUE1QjtBQUNBM0IsY0FBSSxDQUFDc0UsTUFBTCxDQUFZRSxJQUFaO0FBQ0Q7QUFDRjs7QUFDRCxVQUFJeEUsSUFBSSxDQUFDeUUsT0FBVCxFQUFrQnpFLElBQUksQ0FBQ3lFLE9BQUw7QUFDbEI7O0FBQ0YsU0FBSyxPQUFMO0FBQ0V6RSxVQUFJLENBQUNnRSxPQUFMLENBQWF0QyxJQUFiLENBQWtCWixRQUFRLENBQUNhLEdBQTNCO0FBQ0EzQixVQUFJLENBQUNrQyxHQUFMLENBQVNtQixPQUFULENBQWlCLE9BQWpCO0FBQ0E7QUFoQ0o7QUFrQ0QsQyxDQUVEOztBQUNPLFNBQVNxQixNQUFULENBQWdCMUUsSUFBaEIsRUFBc0IyRSxXQUF0QixFQUFtQztBQUN4Q0MsbUJBQWlCLENBQUM1RSxJQUFELENBQWpCLENBQXdCNkUsSUFBeEIsQ0FBNkIsVUFBQ3JELE1BQUQsRUFBWTtBQUN2QyxRQUFJQSxNQUFNLENBQUNzRCxLQUFYLEVBQWtCO0FBQ2hCNUUsT0FBQyxDQUFDQyxJQUFGLENBQU87QUFDTEMsV0FBRyxFQUFFQyw2Q0FBUSxHQUFHTCxJQUFJLENBQUNJLEdBRGhCO0FBRUxFLGNBQU0sRUFBRSxNQUZIO0FBR0xOLFlBQUksRUFBRTtBQUNKUSxZQUFFLEVBQUVSLElBQUksQ0FBQ1EsRUFETDtBQUVKRCxlQUFLLEVBQUVQLElBQUksQ0FBQ08sS0FGUjtBQUdKNkIsc0JBQVksRUFBRXBDLElBQUksQ0FBQ29DO0FBSGYsU0FIRDtBQVFMdkIsZUFBTyxFQUFFLGlCQUFVQyxRQUFWLEVBQW9CO0FBQzNCLGNBQUlBLFFBQVEsQ0FBQ1UsTUFBVCxLQUFvQixTQUF4QixFQUFtQztBQUNqQ3hCLGdCQUFJLENBQUM0RCxJQUFMLENBQVVFLElBQVYsQ0FBZSxVQUFmLEVBQTJCaEQsUUFBUSxDQUFDYSxHQUFwQyxFQUF5QyxTQUF6QztBQUNBZ0QsdUJBQVc7QUFDWixXQUhELE1BR087QUFDTDNFLGdCQUFJLENBQUMrRSxPQUFMLENBQWFyRCxJQUFiLENBQWtCWixRQUFRLENBQUNhLEdBQTNCO0FBQ0Q7QUFDRjtBQWZJLE9BQVA7QUFpQkQ7QUFDRixHQXBCRDtBQXFCRCxDLENBQ0Q7O0FBQ0EsU0FBU2lELGlCQUFULENBQTJCNUUsSUFBM0IsRUFBaUM7QUFDL0IsU0FBTyxJQUFJZ0YsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxRQUFJLENBQUNsRixJQUFJLENBQUNtRixTQUFWLEVBQXFCO0FBQ25CbkYsVUFBSSxDQUFDNEQsSUFBTCxDQUNHRSxJQURILENBQ1E7QUFDSnNCLGFBQUssRUFBRSxlQURIO0FBRUpDLHdCQUFnQixFQUFFLElBRmQ7QUFHSjNELFlBQUksRUFBRSwwQ0FIRjtBQUlKNEQsMEJBQWtCLEVBQUUsU0FKaEI7QUFLSkMseUJBQWlCLEVBQUUsTUFMZjtBQU1KQyx5QkFBaUIsRUFBRTtBQU5mLE9BRFIsRUFTR1gsSUFUSCxDQVNRLFVBQUNyRCxNQUFELEVBQVk7QUFDaEJ5RCxlQUFPLENBQUN6RCxNQUFELENBQVA7QUFDRCxPQVhIO0FBWUQsS0FiRCxNQWFPO0FBQ0x0QixPQUFDLENBQUNDLElBQUYsQ0FBTztBQUNMQyxXQUFHLEVBQUVDLDZDQUFRLEdBQUdMLElBQUksQ0FBQ21GLFNBRGhCO0FBRUw3RSxjQUFNLEVBQUUsTUFGSDtBQUdMTixZQUFJLEVBQUU7QUFDSlEsWUFBRSxFQUFFUixJQUFJLENBQUNRLEVBREw7QUFFSkQsZUFBSyxFQUFFUCxJQUFJLENBQUNPLEtBRlI7QUFHSjZCLHNCQUFZLEVBQUVwQyxJQUFJLENBQUNvQztBQUhmO0FBSEQsT0FBUCxFQVNHcUQsSUFUSCxDQVNRLFVBQUMzRSxRQUFELEVBQWM7QUFDbEJkLFlBQUksQ0FBQzRELElBQUwsQ0FDR0UsSUFESCxDQUNRO0FBQ0pzQixlQUFLLEVBQUUsZUFESDtBQUVKQywwQkFBZ0IsRUFBRSxJQUZkO0FBR0ozRCxjQUFJLEVBQUUsNkNBQTZDWixRQUFRLENBQUNhLEdBSHhEO0FBSUoyRCw0QkFBa0IsRUFBRSxTQUpoQjtBQUtKQywyQkFBaUIsRUFBRSxNQUxmO0FBTUpDLDJCQUFpQixFQUFFO0FBTmYsU0FEUixFQVNHWCxJQVRILENBU1EsVUFBQ3JELE1BQUQsRUFBWTtBQUNoQnlELGlCQUFPLENBQUN6RCxNQUFELENBQVA7QUFDRCxTQVhIO0FBWUQsT0F0QkgsRUF1QkdrRSxJQXZCSCxDQXVCUSxVQUFDdEMsS0FBRCxFQUFXO0FBQ2Y4QixjQUFNLENBQUM5QixLQUFELENBQU47QUFDRCxPQXpCSDtBQTBCRDtBQUNGLEdBMUNNLENBQVA7QUEyQ0Q7O0FBQ00sU0FBU3VDLG1CQUFULENBQTZCM0YsSUFBN0IsRUFBbUM7QUFDeENFLEdBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsNkNBQVEsR0FBRyx1QkFEWDtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdMTixRQUFJLEVBQUU7QUFDSk8sV0FBSyxFQUFFUCxJQUFJLENBQUNPO0FBRFIsS0FIRDtBQU1MTSxXQUFPLEVBQUUsaUJBQVVDLFFBQVYsRUFBb0I7QUFDM0IsVUFBSUEsUUFBUSxDQUFDVSxNQUFULEtBQW9CLFNBQXhCLEVBQW1DO0FBQ2pDeEIsWUFBSSxDQUFDNEYsU0FBTCxDQUFlekQsTUFBZixDQUFzQnJCLFFBQVEsQ0FBQ2EsR0FBL0I7QUFDRCxPQUZELE1BRU87QUFDTDNCLFlBQUksQ0FBQytFLE9BQUwsQ0FBYXJELElBQWIsQ0FBa0JaLFFBQVEsQ0FBQ2EsR0FBM0I7QUFDRDtBQUNGO0FBWkksR0FBUDtBQWNEO0FBRU0sU0FBU2tFLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQWlDZixPQUFqQyxFQUEwQztBQUMvQyxNQUFJZ0IsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJILFFBQXZCLENBQVY7O0FBQ0EsTUFBSUMsR0FBRyxDQUFDakIsS0FBSixDQUFVb0IsTUFBVixJQUFvQixDQUF4QixFQUEyQjtBQUN6QkMsU0FBSyxDQUFDLDhCQUFELENBQUw7QUFDRCxHQUZELE1BRU87QUFDTGpHLEtBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLFNBQUcsRUFBRUMsNkNBQVEsR0FBRyxvQkFEWDtBQUVMQyxZQUFNLEVBQUUsTUFGSDtBQUdMTixVQUFJLEVBQUU7QUFDSm9HLGlCQUFTLEVBQUVMLEdBQUcsQ0FBQ2pCO0FBRFgsT0FIRDtBQU1MakUsYUFBTyxFQUFFLGlCQUFVQyxRQUFWLEVBQW9CO0FBQzNCLFlBQUlBLFFBQVEsSUFBSSxTQUFoQixFQUEyQjtBQUN6QlosV0FBQyxDQUFDNkUsT0FBRCxDQUFELENBQVdyRCxJQUFYLENBQWdCWixRQUFoQjtBQUNEO0FBQ0Y7QUFWSSxLQUFQO0FBWUQ7QUFDRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZRTSxJQUFNb0MsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDbUQsUUFBRCxFQUFXQyxNQUFYLEVBQXNCO0FBQ3JERCxVQUFRLENBQUNFLE9BQVQsQ0FBaUIsVUFBQ0MsS0FBRCxFQUFXO0FBQzFCLFFBQUlGLE1BQU0sQ0FBQ0csT0FBUCxDQUFlRCxLQUFLLENBQUNoRyxFQUFyQixLQUE0QixDQUFDLENBQWpDLEVBQW9DO0FBQ2xDZ0csV0FBSyxDQUFDRSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QixZQUF2QjtBQUNBSCxXQUFLLENBQUNJLGtCQUFOLENBQXlCQyxTQUF6QixHQUFxQyxFQUFyQztBQUNEO0FBQ0YsR0FMRDtBQU1ELENBUE07QUFTQSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLElBQUQsRUFBVTtBQUMzQ0EsTUFBSSxDQUFDQyxJQUFMLENBQVUsYUFBVixFQUF5QkMsV0FBekIsQ0FBcUMsWUFBckM7QUFDQUYsTUFBSSxDQUFDQyxJQUFMLENBQVUsc0JBQVYsRUFBa0N0RixJQUFsQyxDQUF1QyxFQUF2QztBQUNELENBSE0sQyxDQUtQOztBQUNPLFNBQVN3RixrQkFBVCxDQUE0QkMsTUFBNUIsRUFBb0M7QUFDekNBLFFBQU0sQ0FBQ0MsRUFBUCxDQUFVLE9BQVYsRUFBbUIsbUNBQW5CLEVBQXdELFlBQVk7QUFDbEVsSCxLQUFDLENBQUMsSUFBRCxDQUFELENBQVErRyxXQUFSLENBQW9CLFlBQXBCO0FBQ0EvRyxLQUFDLENBQUMsSUFBRCxDQUFELENBQVFtSCxNQUFSLEdBQWlCQyxRQUFqQixDQUEwQixzQkFBMUIsRUFBa0Q1RixJQUFsRCxDQUF1RCxFQUF2RDtBQUNELEdBSEQ7QUFJRDtBQUVNLElBQU0wQixLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDMkQsSUFBRCxFQUFPUSxRQUFQLEVBQW9CO0FBQ3ZDLE1BQUlqQixNQUFNLEdBQUcsRUFBYjs7QUFDQSxxQ0FBMkJrQixNQUFNLENBQUNDLE9BQVAsQ0FBZUYsUUFBZixDQUEzQixxQ0FBcUQ7QUFBQTtBQUFBLFFBQXpDRyxHQUF5QztBQUFBLFFBQXBDNUMsS0FBb0M7O0FBQ25ELFFBQUkwQixLQUFLLEdBQUdPLElBQUksQ0FBQ0MsSUFBTCxDQUFVLE1BQU1VLEdBQWhCLEVBQXFCQyxRQUFyQixDQUE4QixZQUE5QixDQUFaO0FBQ0FuQixTQUFLLENBQUNhLE1BQU4sR0FBZUMsUUFBZixDQUF3QixzQkFBeEIsRUFBZ0Q1RixJQUFoRCxDQUFxRG9ELEtBQXJEO0FBQ0F3QixVQUFNLENBQUNzQixJQUFQLENBQVlGLEdBQVo7QUFDRDs7QUFDRCxTQUFPcEIsTUFBUDtBQUNELENBUk07QUFVQSxJQUFNbkQsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQzRELElBQUQsRUFBVTtBQUNuQyxNQUFJYyxHQUFHLEdBQUcsRUFBVjtBQUNBZCxNQUFJLENBQUNlLElBQUwsQ0FBVSxZQUFZO0FBQ3BCLFFBQU1DLFNBQVMsR0FBRzdILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUThHLElBQVIsQ0FBYSxRQUFiLEVBQXVCZ0IsT0FBdkIsRUFBbEI7QUFDQUQsYUFBUyxDQUFDeEIsT0FBVixDQUFrQixVQUFVQyxLQUFWLEVBQWlCO0FBQ2pDLFVBQ0UsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixVQUFyQixFQUFpQyxRQUFqQyxFQUEyQyxNQUEzQyxFQUFtREMsT0FBbkQsQ0FDRUQsS0FBSyxDQUFDeUIsSUFEUixLQUVLLENBQUMsQ0FGTixJQUdBekIsS0FBSyxDQUFDSSxrQkFKUixFQUtFO0FBQ0FpQixXQUFHLENBQUNELElBQUosQ0FBU3BCLEtBQVQ7QUFDRDtBQUNGLEtBVEQ7QUFVRCxHQVpEO0FBYUEsU0FBT3FCLEdBQVA7QUFDRCxDQWhCTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENQO0FBQ0E7QUFDQTs7QUFDQSxTQUFTSyxLQUFULENBQWVDLE9BQWYsRUFBd0I7QUFDdEIsT0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS0MsSUFBTDtBQUNEOztBQUNERixLQUFLLENBQUNHLFNBQU4sQ0FBZ0JELElBQWhCLEdBQXVCLFlBQVk7QUFDakMsT0FBS0UsY0FBTDtBQUNBLE9BQUtDLFdBQUw7QUFDRCxDQUhELEMsQ0FJQTs7O0FBQ0FMLEtBQUssQ0FBQ0csU0FBTixDQUFnQkMsY0FBaEIsR0FBaUMsWUFBWTtBQUMzQyxPQUFLRSxNQUFMLEdBQWMsS0FBS0wsT0FBTCxDQUFhbkIsSUFBYixDQUFrQixZQUFsQixDQUFkO0FBQ0EsT0FBS3lCLFFBQUwsR0FBZ0IsS0FBS04sT0FBTCxDQUFhbkIsSUFBYixDQUFrQixZQUFsQixDQUFoQjtBQUNBLE9BQUswQixNQUFMLEdBQWMsS0FBS1AsT0FBTCxDQUFhbkIsSUFBYixDQUFrQixlQUFsQixDQUFkO0FBQ0EsT0FBSzJCLE1BQUwsR0FBYyxLQUFLUixPQUFMLENBQWFuQixJQUFiLENBQWtCLGVBQWxCLENBQWQ7QUFDQSxPQUFLNEIsU0FBTCxHQUFpQixLQUFLVCxPQUFMLENBQWFuQixJQUFiLENBQWtCLGFBQWxCLENBQWpCO0FBQ0EsT0FBSzZCLFNBQUwsR0FBaUIsS0FBS1YsT0FBTCxDQUFhbkIsSUFBYixDQUFrQixhQUFsQixDQUFqQjtBQUNELENBUEQsQyxDQVFBOzs7QUFDQWtCLEtBQUssQ0FBQ0csU0FBTixDQUFnQkUsV0FBaEIsR0FBOEIsWUFBWTtBQUN4QyxNQUFJTyxLQUFLLEdBQUcsSUFBWixDQUR3QyxDQUd4Qzs7QUFDQUEsT0FBSyxDQUFDTixNQUFOLENBQWFwQixFQUFiLENBQWdCLGVBQWhCLEVBQWlDLFlBQVk7QUFDM0MsUUFBSTBCLEtBQUssQ0FBQ0wsUUFBTixDQUFlekIsSUFBZixDQUFvQixhQUFwQixFQUFtQ2QsTUFBbkMsSUFBNkMsQ0FBakQsRUFBb0Q7QUFDbERZLHlCQUFtQixDQUFDZ0MsS0FBSyxDQUFDTCxRQUFQLENBQW5CO0FBQ0Q7QUFDRixHQUpELEVBSndDLENBU3hDOztBQUNBSyxPQUFLLENBQUNKLE1BQU4sQ0FBYXRCLEVBQWIsQ0FBZ0IsZUFBaEIsRUFBaUMsWUFBWTtBQUMzQyxRQUFJMEIsS0FBSyxDQUFDSCxNQUFOLENBQWEzQixJQUFiLENBQWtCLGFBQWxCLEVBQWlDZCxNQUFqQyxJQUEyQyxDQUEvQyxFQUFrRDtBQUNoRFkseUJBQW1CLENBQUNnQyxLQUFLLENBQUNILE1BQVAsQ0FBbkI7QUFDRDtBQUNGLEdBSkQsRUFWd0MsQ0FleEM7O0FBQ0FHLE9BQUssQ0FBQ0osTUFBTixDQUFhdEIsRUFBYixDQUFnQixlQUFoQixFQUFpQyxZQUFZO0FBQzNDMEIsU0FBSyxDQUFDSCxNQUFOLENBQWF0RixPQUFiLENBQXFCLE9BQXJCO0FBQ0F5RixTQUFLLENBQUNILE1BQU4sQ0FBYTNCLElBQWIsQ0FBa0IsV0FBbEIsRUFBK0J0RixJQUEvQixDQUFvQyxFQUFwQztBQUNELEdBSEQsRUFoQndDLENBb0J4Qzs7QUFDQW9ILE9BQUssQ0FBQ0gsTUFBTixDQUFhdkIsRUFBYixDQUFnQixPQUFoQixFQUF5QixPQUF6QixFQUFrQyxZQUFZO0FBQzVDbEgsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0csV0FBUixDQUFvQixZQUFwQjtBQUNBL0csS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUgsTUFBUixHQUFpQkMsUUFBakIsQ0FBMEIsc0JBQTFCLEVBQWtENUYsSUFBbEQsQ0FBdUQsRUFBdkQ7QUFDRCxHQUhELEVBckJ3QyxDQXlCeEM7O0FBQ0FvSCxPQUFLLENBQUNMLFFBQU4sQ0FBZXJCLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsT0FBM0IsRUFBb0MsWUFBWTtBQUM5Q2xILEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUStHLFdBQVIsQ0FBb0IsWUFBcEI7QUFDQS9HLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ILE1BQVIsR0FBaUJDLFFBQWpCLENBQTBCLHNCQUExQixFQUFrRDVGLElBQWxELENBQXVELEVBQXZEO0FBQ0QsR0FIRCxFQTFCd0MsQ0E4QnhDOztBQUNBb0gsT0FBSyxDQUFDRixTQUFOLENBQWdCeEIsRUFBaEIsQ0FBbUIsZUFBbkIsRUFBb0MsWUFBWTtBQUM5QzBCLFNBQUssQ0FBQ0QsU0FBTixDQUFnQnhGLE9BQWhCLENBQXdCLE9BQXhCO0FBQ0QsR0FGRCxFQS9Cd0MsQ0FrQ3hDOztBQUNBeUYsT0FBSyxDQUFDTixNQUFOLENBQWFwQixFQUFiLENBQWdCLGdCQUFoQixFQUFrQyxZQUFZO0FBQzVDbEgsS0FBQyxDQUFDQyxJQUFGLENBQU87QUFDTEMsU0FBRyxFQUFFQyxtREFBUSxHQUFHLHFCQURYO0FBRUxDLFlBQU0sRUFBRSxNQUZIO0FBR0xPLGFBQU8sRUFBRSxpQkFBVUMsUUFBVixFQUFvQjtBQUMzQmlJLGVBQU8sQ0FBQ0MsR0FBUixDQUFZbEksUUFBWjs7QUFDQSxZQUFJQSxRQUFRLENBQUNVLE1BQVQsS0FBb0IsU0FBeEIsRUFBbUM7QUFDakNzSCxlQUFLLENBQUNMLFFBQU4sQ0FBZXpCLElBQWYsQ0FBb0IsUUFBcEIsRUFBOEJpQyxHQUE5QixDQUFrQ25JLFFBQVEsQ0FBQ2EsR0FBVCxDQUFhdUgsS0FBL0M7QUFDQUosZUFBSyxDQUFDTCxRQUFOLENBQ0d6QixJQURILENBQ1EsY0FEUixFQUVHN0MsSUFGSCxDQUVRLFNBRlIsRUFFbUJyRCxRQUFRLENBQUNhLEdBQVQsQ0FBYXdILFFBRmhDO0FBR0QsU0FMRCxNQUtPO0FBQ0xMLGVBQUssQ0FBQ0wsUUFBTixDQUFlekIsSUFBZixDQUFvQixRQUFwQixFQUE4QmlDLEdBQTlCLENBQWtDLEVBQWxDO0FBQ0FILGVBQUssQ0FBQ0wsUUFBTixDQUFlekIsSUFBZixDQUFvQixXQUFwQixFQUFpQ2lDLEdBQWpDLENBQXFDLEVBQXJDO0FBQ0Q7QUFDRjtBQWRJLEtBQVA7QUFnQkQsR0FqQkQsRUFuQ3dDLENBcUR4Qzs7QUFDQUgsT0FBSyxDQUFDSCxNQUFOLENBQWF2QixFQUFiLENBQWdCLFFBQWhCLEVBQTBCLFVBQVVnQyxDQUFWLEVBQWE7QUFDckNBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBRCxLQUFDLENBQUNFLGVBQUY7QUFDQVIsU0FBSyxDQUFDSCxNQUFOLENBQWEzQixJQUFiLENBQWtCLGVBQWxCLEVBQW1DaUMsR0FBbkMsQ0FBdUMsZ0JBQXZDO0FBQ0EsUUFBSU0sU0FBUyxHQUFHO0FBQ2RuSixTQUFHLEVBQUUsbUJBRFM7QUFFZDhCLFNBQUcsRUFBRTRHLEtBQUssQ0FBQ0gsTUFGRztBQUdkcEksV0FBSyxFQUFFLE1BSE87QUFJZDZCLGtCQUFZLEVBQUUsT0FKQTtBQUtkQyxjQUFRLEVBQUU7QUFMSSxLQUFoQjtBQU9BTCx5REFBRyxDQUFDdUgsU0FBRCxFQUFZQyxRQUFaLENBQUg7O0FBQ0EsYUFBU0EsUUFBVCxDQUFrQjFJLFFBQWxCLEVBQTRCO0FBQzFCaUksYUFBTyxDQUFDQyxHQUFSLENBQVlsSSxRQUFaO0FBQ0FnSSxXQUFLLENBQUNILE1BQU4sQ0FBYTNCLElBQWIsQ0FBa0IsZUFBbEIsRUFBbUNpQyxHQUFuQyxDQUF1QyxhQUF2QztBQUNBLFVBQUlRLFVBQVUsR0FBRztBQUNmdkgsV0FBRyxFQUFFNEcsS0FBSyxDQUFDSCxNQURJO0FBRWYvRSxZQUFJLEVBQUUsS0FGUztBQUdmSSxlQUFPLEVBQUU4RSxLQUFLLENBQUNILE1BQU4sQ0FBYTNCLElBQWIsQ0FBa0IsV0FBbEIsQ0FITTtBQUlmdkMsZUFBTyxFQUFFLEtBSk07QUFLZlAsZUFBTyxFQUFFNEUsS0FBSyxDQUFDSixNQUFOLENBQWExQixJQUFiLENBQWtCLDRCQUFsQixDQUxNO0FBTWY1QyxnQkFBUSxFQUFFdEQsUUFBUSxDQUFDNEksR0FBVCxHQUFlNUksUUFBUSxDQUFDNEksR0FBeEIsR0FBOEIsRUFOekI7QUFPZjNGLG9CQUFZLEVBQUU7QUFQQyxPQUFqQjtBQVNBZCxzRUFBYyxDQUFDbkMsUUFBRCxFQUFXMkksVUFBWCxDQUFkO0FBQ0Q7QUFDRixHQTFCRCxFQXREd0MsQ0FrRnhDOztBQUNBWCxPQUFLLENBQUNKLE1BQU4sQ0FDRzFCLElBREgsQ0FDUSwwQ0FEUixFQUVHSSxFQUZILENBRU0sUUFGTixFQUVnQixZQUFZO0FBQ3hCdUMsK0RBQU8sQ0FDTCxJQURLLEVBRUxiLEtBQUssQ0FBQ0osTUFBTixDQUFhMUIsSUFBYixDQUFrQiw0QkFBbEIsQ0FGSyxFQUdMOEIsS0FBSyxDQUFDSixNQUFOLENBQWExQixJQUFiLENBQWtCLG9DQUFsQixDQUhLLENBQVA7QUFLRCxHQVJILEVBbkZ3QyxDQTRGeEM7O0FBRUE4QixPQUFLLENBQUNMLFFBQU4sQ0FBZXJCLEVBQWYsQ0FBa0IsUUFBbEIsRUFBNEIsVUFBVWdDLENBQVYsRUFBYTtBQUN2Q0EsS0FBQyxDQUFDQyxjQUFGO0FBQ0FELEtBQUMsQ0FBQ0UsZUFBRjtBQUNBUixTQUFLLENBQUNMLFFBQU4sQ0FBZXpCLElBQWYsQ0FBb0IsWUFBcEIsRUFBa0NpQyxHQUFsQyxDQUFzQyxnQkFBdEM7QUFDQSxRQUFJakosSUFBSSxHQUFHO0FBQ1RJLFNBQUcsRUFBRSxnQkFESTtBQUVUOEIsU0FBRyxFQUFFNEcsS0FBSyxDQUFDTCxRQUZGO0FBR1RwRyxjQUFRLEVBQUU7QUFIRCxLQUFYO0FBS0FPLHFFQUFlLENBQUM1QyxJQUFELEVBQU80SixtQkFBUCxDQUFmLENBVHVDLENBVXZDOztBQUNBLGFBQVNBLG1CQUFULENBQTZCOUksUUFBN0IsRUFBdUM7QUFDckNnSSxXQUFLLENBQUNMLFFBQU4sQ0FBZXpCLElBQWYsQ0FBb0IsWUFBcEIsRUFBa0NpQyxHQUFsQyxDQUFzQyxPQUF0QztBQUNBLFVBQUlZLEtBQUssR0FBRztBQUNWM0gsV0FBRyxFQUFFNEcsS0FBSyxDQUFDTCxRQUREO0FBRVZxQixXQUFHLEVBQUVoQixLQUFLLENBQUNMLFFBQU4sQ0FBZXpCLElBQWYsQ0FBb0IsWUFBcEIsQ0FGSztBQUdWK0MsZUFBTyxFQUFFLFNBSEM7QUFJVi9GLGVBQU8sRUFBRThFLEtBQUssQ0FBQ0wsUUFBTixDQUFlekIsSUFBZixDQUFvQixhQUFwQixDQUpDO0FBS1Z6RCxnQkFBUSxFQUFFdUYsS0FBSyxDQUFDTixNQUxOO0FBTVZsRixhQUFLLEVBQUU7QUFORyxPQUFaO0FBUUFMLHNFQUFjLENBQUNuQyxRQUFELEVBQVcrSSxLQUFYLENBQWQ7QUFDRDtBQUNGLEdBdkJELEVBOUZ3QyxDQXVIeEM7O0FBRUFmLE9BQUssQ0FBQ04sTUFBTixDQUFheEIsSUFBYixDQUFrQixTQUFsQixFQUE2QkksRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBQ2dDLENBQUQsRUFBTztBQUM5Q0EsS0FBQyxDQUFDQyxjQUFGO0FBQ0FQLFNBQUssQ0FBQ0wsUUFBTixDQUFlekIsSUFBZixDQUFvQixZQUFwQixFQUFrQ2lDLEdBQWxDLENBQXNDLGdCQUF0QztBQUNBLFFBQUlqSixJQUFJLEdBQUc7QUFDVGtDLFNBQUcsRUFBRTRHLEtBQUssQ0FBQ0wsUUFERjtBQUVUckksU0FBRyxFQUFFLGdCQUZJO0FBR1RpQyxjQUFRLEVBQUU7QUFIRCxLQUFYO0FBS0FPLHFFQUFlLENBQUM1QyxJQUFELEVBQU9nSyxVQUFQLENBQWY7O0FBQ0EsYUFBU0EsVUFBVCxDQUFvQmxKLFFBQXBCLEVBQThCO0FBQzVCLFVBQUlBLFFBQVEsQ0FBQ1UsTUFBVCxJQUFtQixTQUF2QixFQUFrQztBQUNoQ3lJLFVBQUUsR0FBR0MsYUFBYSxDQUFDcEosUUFBRCxDQUFsQjtBQUNELE9BRkQsTUFFTztBQUNMZ0ksYUFBSyxDQUFDTCxRQUFOLENBQWV6QixJQUFmLENBQW9CLGFBQXBCLEVBQW1DdEYsSUFBbkMsQ0FBd0NaLFFBQVEsQ0FBQ2EsR0FBakQ7QUFDRDtBQUNGO0FBQ0YsR0FoQkQsRUF6SHdDLENBMEl4Qzs7QUFDQSxXQUFTdUksYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkI7QUFDM0JDLFlBQVEsQ0FBQ0MsSUFBVCxHQUFnQnhGLElBQWhCLENBQXFCLFlBQU07QUFDekJ1RixjQUFRLENBQUNoQyxJQUFULENBQWM7QUFDWmtDLGFBQUssRUFBRUgsSUFBSSxDQUFDeEksR0FBTCxDQUFTNEk7QUFESixPQUFkO0FBR0FILGNBQVEsQ0FBQ0ksY0FBVCxHQUEwQjNGLElBQTFCLENBQStCLFVBQUMvRCxRQUFELEVBQWM7QUFDM0MsWUFBSUEsUUFBUSxDQUFDMkosTUFBVCxLQUFvQixXQUF4QixFQUFxQztBQUNuQ0MsdUJBQWE7QUFDZCxTQUZELE1BRU87QUFDTEMsaUJBQU87QUFDUjtBQUNGLE9BTkQ7QUFPRCxLQVhEO0FBWUEsV0FBT1AsUUFBUDtBQUNELEdBekp1QyxDQTJKeEM7OztBQUNBLFdBQVNPLE9BQVQsR0FBbUI7QUFDakJWLE1BQUUsQ0FBQzNHLEtBQUgsQ0FBUztBQUNQc0gsV0FBSyxFQUFFLE9BREE7QUFFUEMsbUJBQWEsRUFBRTtBQUZSLEtBQVQsRUFHR2hHLElBSEgsQ0FHUSxVQUFDL0QsUUFBRCxFQUFjO0FBQ3BCLFVBQUlBLFFBQVEsQ0FBQzJKLE1BQVQsS0FBb0IsV0FBeEIsRUFBcUM7QUFDbkNDLHFCQUFhO0FBQ2QsT0FGRCxNQUVPO0FBQ0wxRSxnQkFBUSxDQUFDOEUsY0FBVCxDQUF3QixZQUF4QixFQUFzQ2pFLFNBQXRDLEdBQ0Usa0RBREY7QUFFRDtBQUNGLEtBVkQ7QUFXRCxHQXhLdUMsQ0F5S3hDOzs7QUFDQSxXQUFTNkQsYUFBVCxHQUF5QjtBQUN2QlQsTUFBRSxDQUFDYyxHQUFILENBQU8sS0FBUCxFQUFjLEtBQWQsRUFBcUI7QUFDbkJDLFlBQU0sRUFBRTtBQURXLEtBQXJCLEVBRUduRyxJQUZILENBRVEsVUFBQy9ELFFBQUQsRUFBYztBQUNwQixVQUFJZCxJQUFJLEdBQUc7QUFDVGtDLFdBQUcsRUFBRTRHLEtBQUssQ0FBQ0wsUUFERjtBQUVUcEcsZ0JBQVEsRUFBRSxXQUZEO0FBR1RqQyxXQUFHLEVBQUUsY0FISTtBQUlUMkMsZ0JBQVEsRUFBRWtJLElBQUksQ0FBQ0MsU0FBTCxDQUFlcEssUUFBZjtBQUpELE9BQVg7QUFNQThCLHVFQUFlLENBQUM1QyxJQUFELEVBQU80SixtQkFBUCxDQUFmO0FBQ0QsS0FWRDtBQVdELEdBdEx1QyxDQXVMeEM7OztBQUNBZCxPQUFLLENBQUNELFNBQU4sQ0FBZ0J6QixFQUFoQixDQUFtQixRQUFuQixFQUE2QixVQUFVZ0MsQ0FBVixFQUFhO0FBQ3hDQSxLQUFDLENBQUNDLGNBQUY7QUFDQUQsS0FBQyxDQUFDRSxlQUFGO0FBQ0FSLFNBQUssQ0FBQ0QsU0FBTixDQUFnQjdCLElBQWhCLENBQXFCLGFBQXJCLEVBQW9DaUMsR0FBcEMsQ0FBd0MsZ0JBQXhDO0FBQ0EsUUFBSWpKLElBQUksR0FBRztBQUNUSSxTQUFHLEVBQUUsYUFESTtBQUVUOEIsU0FBRyxFQUFFNEcsS0FBSyxDQUFDRCxTQUZGO0FBR1R4RyxjQUFRLEVBQUU7QUFIRCxLQUFYO0FBS0FPLHFFQUFlLENBQUM1QyxJQUFELEVBQU9tTCxTQUFQLENBQWY7O0FBQ0EsYUFBU0EsU0FBVCxDQUFtQnJLLFFBQW5CLEVBQTZCO0FBQzNCLFVBQUkrSSxLQUFLLEdBQUc7QUFDVjNILFdBQUcsRUFBRTRHLEtBQUssQ0FBQ0QsU0FERDtBQUVWN0UsZUFBTyxFQUFFOEUsS0FBSyxDQUFDRCxTQUFOLENBQWdCN0IsSUFBaEIsQ0FBcUIsY0FBckIsQ0FGQztBQUdWakQsb0JBQVksRUFBRTtBQUhKLE9BQVo7QUFLQWQsc0VBQWMsQ0FBQ25DLFFBQUQsRUFBVytJLEtBQVgsQ0FBZDtBQUNBZixXQUFLLENBQUNELFNBQU4sQ0FBZ0I3QixJQUFoQixDQUFxQixhQUFyQixFQUFvQ2lDLEdBQXBDLENBQXdDLGdCQUF4QztBQUNEO0FBQ0YsR0FuQkQsRUF4THdDLENBNE14Qzs7QUFDQSxNQUFJbUMsTUFBTSxHQUFHbEwsQ0FBQyxDQUFDLHNCQUFELENBQWQ7QUFFQUEsR0FBQyxDQUFDa0wsTUFBRCxDQUFELENBQVVoRSxFQUFWLENBQWEsT0FBYixFQUFzQixZQUFZO0FBQ2hDLFFBQUksT0FBTzZDLEVBQVAsS0FBYyxXQUFsQixFQUErQjtBQUM3QkEsUUFBRSxDQUFDbUIsTUFBSCxHQUFZdkcsSUFBWixDQUFpQixVQUFDL0QsUUFBRCxFQUFjLENBQzdCO0FBQ0QsT0FGRDtBQUdEOztBQUNEWixLQUFDLENBQUNDLElBQUYsQ0FBTztBQUNMQyxTQUFHLEVBQUVDLG1EQUFRLEdBQUcsYUFEWDtBQUVMQyxZQUFNLEVBQUUsTUFGSDtBQUdMTyxhQUFPLEVBQUUsaUJBQVVDLFFBQVYsRUFBb0I7QUFDM0IsWUFBSUEsUUFBUSxLQUFLLFNBQWpCLEVBQTRCO0FBQzFCc0ssZ0JBQU0sQ0FBQ0MsT0FBUCxDQUFlLEtBQWYsRUFBc0JoQixJQUF0QixDQUEyQjNHLFFBQVEsQ0FBQzRILElBQVQsR0FBZ0IsV0FBM0M7QUFDRDtBQUNGO0FBUEksS0FBUDtBQVNELEdBZkQsRUEvTXdDLENBK054QztBQUNELENBaE9EOztBQWlPQXBMLENBQUMsQ0FBQ3FMLEVBQUYsQ0FBS3pDLEtBQUwsR0FBYSxVQUFVMEMsT0FBVixFQUFtQjtBQUM5QixNQUFJdEQsS0FBSixDQUFVLElBQVY7QUFDQSxTQUFPLElBQVA7QUFDRCxDQUhEOztBQUlBaEksQ0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEI0SSxLQUE1QixHOzs7Ozs7Ozs7Ozs7Ozs7QUMxUE8sSUFBTWEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ25ELEtBQUQsRUFBUWtELEdBQVIsRUFBYStCLElBQWIsRUFBc0I7QUFDM0MsTUFBSWpGLEtBQUssQ0FBQ2tGLEtBQU4sSUFBZWxGLEtBQUssQ0FBQ2tGLEtBQU4sQ0FBWSxDQUFaLENBQW5CLEVBQW1DO0FBQ2pDLFFBQUlDLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWI7O0FBQ0FELFVBQU0sQ0FBQ0UsTUFBUCxHQUFnQixVQUFVekMsQ0FBVixFQUFhO0FBQzNCTSxTQUFHLENBQUN2RixJQUFKLENBQVMsS0FBVCxFQUFnQmlGLENBQUMsQ0FBQzBDLE1BQUYsQ0FBU3RLLE1BQXpCO0FBQ0FpSyxVQUFJLENBQUNNLEdBQUwsQ0FBUztBQUNQdEgsZUFBTyxFQUFFO0FBREYsT0FBVDtBQUdELEtBTEQ7O0FBTUFrSCxVQUFNLENBQUNLLGFBQVAsQ0FBcUJ4RixLQUFLLENBQUNrRixLQUFOLENBQVksQ0FBWixDQUFyQjtBQUNEO0FBQ0YsQ0FYTSxDIiwiZmlsZSI6Imxhenlsb2FkL2pzL2FkbWluL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgYWRkX2lucHV0c19lcnJvcnMsIGVycm9yLCBpbnB1dHNBcnJheSB9IGZyb20gXCIuL2lucHV0RXJyTWFuYWdlclwiO1xyXG5cclxuLy9kaXNwbGF5IGFsbCBkZXRhaWxzXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsRGV0YWlscyhkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgdXNlcjogZGF0YS51c2VyID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgc2Vzc2lvbl9pZDogZGF0YS5zZXNzaW9uX2lkID8gZGF0YS5zZXNzaW9uX2lkIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL2VkaXQgZGF0YVxyXG5leHBvcnQgZnVuY3Rpb24gZWRpdEZvcm0oZGF0YSwgZ2VzdGlvbikge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YS5mb3JtRGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vZGlzcGxheSBhbGwgSXRlbXNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxJdGVtcyhkYXRhKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCAhPSBcIlwiID8gZGF0YS5pZCA6IFwiXCIsXHJcbiAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICBtYXg6IGRhdGEubWF4ICE9IFwiXCIgPyBkYXRhLm1heCA6IFwiXCIsXHJcbiAgICAgIHVzZXI6IGRhdGEudXNlciAhPSBcIlwiID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgcXVlcnk6IGRhdGEucXVlcnkgIT0gXCJcIiA/IGRhdGEucXVlcnkgOiBcIlwiLFxyXG4gICAgICBwYWdlOiBkYXRhLnBhZ2UgIT0gXCJcIiA/IGRhdGEucGFnZSA6IFwiXCIsXHJcbiAgICAgIHBhZ2luYXRpb246IGRhdGEucGFnaW5hdGlvbiAhPSBcIlwiID8gZGF0YS5wYWdpbmF0aW9uIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICAgIGlmIChkYXRhLnRhYmxlID09PSBcImNvbW1lbnRzXCIpIHtcclxuICAgICAgICAgIGRhdGEuZGlzcGxheWlkLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGF0YS5kaXNwbGF5aWQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgaWYgKGRhdGEuZGF0YXRhYmxlKSBsb2FkRGF0YXRhYmxlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKGRhdGEuZGlzcGxheWlkKS5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gbG9hZERhdGF0YWJsZXMoKSB7XHJcbiAgY29uc3QgRGF0YVRhYmxlID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJkYXRhdGFibGVzXCIgKi8gXCJkYXRhdGFibGVzLm5ldFwiXHJcbiAgKTtcclxuICAkKFwidGFibGVcIikuRGF0YVRhYmxlKHtcclxuICAgIG9yZGVyOiBbMCwgXCJkZXNjXCJdLFxyXG4gIH0pO1xyXG59XHJcbi8vYWRkIEl0ZW1cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZChkYXRhLCBnZXN0aW9uKSB7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEuZnJtWzBdKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJ0YWJsZVwiLCBkYXRhLnRhYmxlKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJub3RpZmljYXRpb25cIiwgZGF0YS5ub3RpZmljYXRpb24pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImZybV9uYW1lXCIsIGRhdGEuZnJtX25hbWUpO1xyXG4gIGlmIChkYXRhLnN0YXJ0X2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcInN0YXJ0X2RhdGVcIiwgZGF0YS5zdGFydF9kYXRlKTtcclxuICBpZiAoZGF0YS5lbmRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwiZW5kX2RhdGVcIiwgZGF0YS5lbmRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuaW1hZ2VVcmxzQXJ5KSBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVVybHNBcnlcIiwgZGF0YS5pbWFnZVVybHNBcnkpO1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICBjYWNoZTogZmFsc2UsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL3VwZGF0ZVxyXG5leHBvcnQgZnVuY3Rpb24gQ2FsbF9jb250cm9sbGVyKGRhdGEsIGdlc3Rpb24pIHtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZGF0YS5mcm1bMF0pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImZybV9uYW1lXCIsIGRhdGEuZnJtX25hbWUpO1xyXG4gIGlmIChkYXRhLnRhYmxlKSBmb3JtRGF0YS5hcHBlbmQoXCJ0YWJsZVwiLCBkYXRhLnRhYmxlKTtcclxuICBpZiAoZGF0YS5ub3RpZmljYXRpb24pIGZvcm1EYXRhLmFwcGVuZChcIm5vdGlmaWNhdGlvblwiLCBkYXRhLm5vdGlmaWNhdGlvbik7XHJcbiAgaWYgKGRhdGEudXJsX2RhdGEpIGZvcm1EYXRhLmFwcGVuZChcInVybF9kYXRhXCIsIGRhdGEudXJsX2RhdGEpO1xyXG4gIGlmIChkYXRhLmFjdGlvbikgZm9ybURhdGEuYXBwZW5kKFwiYWN0aW9uXCIsIGRhdGEuYWN0aW9uKTtcclxuICBpZiAoZGF0YS5pbWFnZVVybHNBcnkpIGZvcm1EYXRhLmFwcGVuZChcImltYWdlVXJsc0FyeVwiLCBkYXRhLmltYWdlVXJsc0FyeSk7XHJcbiAgaWYgKGRhdGEuZnJlZWRhdGEpIGZvcm1EYXRhLmFwcGVuZChcImZyZWVkYXRhXCIsIGRhdGEuZnJlZWRhdGEpO1xyXG4gIGlmIChkYXRhLnN0YXJ0X2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcInN0YXJ0X2RhdGVcIiwgZGF0YS5zdGFydF9kYXRlKTtcclxuICBpZiAoZGF0YS5lbmRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwiZW5kX2RhdGVcIiwgZGF0YS5lbmRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuaWQpIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGRhdGEuaWQpO1xyXG4gIGlmIChkYXRhLnVzZXJfaWQpIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGRhdGEudXNlcl9pZCk7XHJcbiAgaWYgKGRhdGEubWV0aG9kKSBmb3JtRGF0YS5hcHBlbmQoXCJtZXRob2RcIiwgZGF0YS5tZXRob2QpO1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL01hbmFnZSBpdGVtIGFkZGVkL3VwZGF0ZWRcclxuZXhwb3J0IGZ1bmN0aW9uIE1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCBkYXRhKSB7XHJcbiAgc3dpdGNoIChyZXNwb25zZS5yZXN1bHQpIHtcclxuICAgIGNhc2UgXCJlcnJvci1maWVsZFwiOlxyXG4gICAgICBhZGRfaW5wdXRzX2Vycm9ycyhpbnB1dHNBcnJheShkYXRhLmZybSksIGVycm9yKGRhdGEuZnJtLCByZXNwb25zZS5tc2cpKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwic3VjY2Vzc1wiOlxyXG4gICAgICBkYXRhLmZybS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgIGlmIChkYXRhLmxvZ2luKSB7XHJcbiAgICAgICAgZGF0YS5sb2dpbmJveC5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhLnN3YWwpIHtcclxuICAgICAgICBkYXRhLm1vZGFsYm94Lm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICBkYXRhLnN3YWwuZmlyZShcIlN1Y2Nlc3MhXCIsIHJlc3BvbnNlLm1zZywgXCJzdWNjZXNzXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChkYXRhLmFsZXJ0c3VjY2VzcykgZGF0YS5hbGVydGlkLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImltZ2FyZWFcIikpIHtcclxuICAgICAgICBkYXRhLmltZ2FyZWEuYXR0cihcInNyY1wiLCBkYXRhLmltZ3ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YS5wcmVwZW5kKSB7XHJcbiAgICAgICAgZGF0YS5uZXN0ZWQucHJlcGVuZChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChkYXRhLnByZXBlbmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBkYXRhLm5lc3RlZC5iZWZvcmUocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIGRhdGEubmVzdGVkLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGEuZGlzcGxheSkgZGF0YS5kaXNwbGF5KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImVycm9yXCI6XHJcbiAgICAgIGRhdGEuYWxlcnRpZC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIGRhdGEuZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59XHJcblxyXG4vL2RlbGV0ZVxyXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlKGRhdGEsIGRpc3BsYXlJdGVtKSB7XHJcbiAgY2hlY2tCZWZvcmVEZWxldGUoZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgICAgIG5vdGlmaWNhdGlvbjogZGF0YS5ub3RpZmljYXRpb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIGRhdGEuc3dhbC5maXJlKFwiRGVsZXRlZCFcIiwgcmVzcG9uc2UubXNnLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIGRpc3BsYXlJdGVtKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhLmFsZXJ0SUQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbi8vZnVuY3Rpb24gY2hlY2sgYmVmb3JlIGRlbGV0ZVxyXG5mdW5jdGlvbiBjaGVja0JlZm9yZURlbGV0ZShkYXRhKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGlmICghZGF0YS51cmxfY2hlY2spIHtcclxuICAgICAgZGF0YS5zd2FsXHJcbiAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgIGh0bWw6IFwiPHA+WW91IHdvbid0IGJlIGFibGUgdG8gcmV2ZXJ0IHRoaXMhPC9wPlwiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkRlbGV0ZSFcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsX2NoZWNrLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgICAgIG5vdGlmaWNhdGlvbjogZGF0YS5ub3RpZmljYXRpb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGRhdGEuc3dhbFxyXG4gICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgaHRtbDogXCI8cD5Zb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyE8L3A+XCIgKyByZXNwb25zZS5tc2csXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiRGVsZXRlIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU11bHRpc2VsbGVjdChkYXRhKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBcImZvcm1zL2ZpbGxNdWx0aXNlbGVjdFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgZGF0YS5kaXNwbGF5SUQuYXBwZW5kKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YS5hbGVydElELmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhdGVnb3JyaWUoY2F0RmllbGQsIGFsZXJ0SUQpIHtcclxuICBsZXQgY2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXRGaWVsZCk7XHJcbiAgaWYgKGNhdC52YWx1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgYWxlcnQoXCJMZSBjaGFtcHMgY2F0w6lnb3JpZSBlc3QgdmlkZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIFwiZm9ybXMvYWRkY2F0ZWdvcmllXCIsXHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjYXRlZ29yaWU6IGNhdC52YWx1ZSxcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlICE9IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAkKGFsZXJ0SUQpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgYWRkX2lucHV0c19lcnJvcnMgPSAoSW5wdXRBcnIsIGFyckVycikgPT4ge1xyXG4gIElucHV0QXJyLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICBpZiAoYXJyRXJyLmluZGV4T2YoaW5wdXQuaWQpID09IC0xKSB7XHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgICBpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXNldF9pbnZhbGlkX2lucHV0ID0gKGZvcm0pID0+IHtcclxuICBmb3JtLmZpbmQoXCIuaXMtaW52YWxpZFwiKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgZm9ybS5maW5kKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxufTtcclxuXHJcbi8vcmVtb3ZlIGludmFsaWQgaW5wdXQgb24gZm9jdXNcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUludmFsaWRJbnB1dChNeWZvcm0pIHtcclxuICBNeWZvcm0ub24oXCJmb2N1c1wiLCBcImlucHV0LHRleHRhcmVhLCAuY2ssIC5ub3RlLWVkaXRvclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3IgPSAoZm9ybSwgSW5wdXRFcnIpID0+IHtcclxuICB2YXIgYXJyRXJyID0gW107XHJcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoSW5wdXRFcnIpKSB7XHJcbiAgICB2YXIgaW5wdXQgPSBmb3JtLmZpbmQoXCIjXCIgKyBrZXkpLmFkZENsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgIGlucHV0LnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbCh2YWx1ZSk7XHJcbiAgICBhcnJFcnIucHVzaChrZXkpO1xyXG4gIH1cclxuICByZXR1cm4gYXJyRXJyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlucHV0c0FycmF5ID0gKGZvcm0pID0+IHtcclxuICB2YXIgYXJyID0gW107XHJcbiAgZm9ybS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGlucHV0c0FyciA9ICQodGhpcykuZmluZChcIjppbnB1dFwiKS50b0FycmF5KCk7XHJcbiAgICBpbnB1dHNBcnIuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIFtcInN1Ym1pdFwiLCBcImhpZGRlblwiLCBcImNoZWNrYm94XCIsIFwiYnV0dG9uXCIsIFwiZmlsZVwiXS5pbmRleE9mKFxyXG4gICAgICAgICAgaW5wdXQudHlwZVxyXG4gICAgICAgICkgPT0gLTEgJiZcclxuICAgICAgICBpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgICAgKSB7XHJcbiAgICAgICAgYXJyLnB1c2goaW5wdXQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gYXJyO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCJjb3JlanMvY29uZmlnXCI7XHJcbmltcG9ydCB7IEFkZCwgQ2FsbF9jb250cm9sbGVyLCBNYW5hZ2VSZXNwb25zZSB9IGZyb20gXCJjb3JlanMvZm9ybV9jcnVkXCI7XHJcbmltcG9ydCB7IHJlYWR1cmwgfSBmcm9tIFwiY29yZWpzL3Byb2ZpbGVfaW1nXCI7XHJcbmZ1bmN0aW9uIFBocExSKGVsZW1lbnQpIHtcclxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIHRoaXMuaW5pdCgpO1xyXG59XHJcblBocExSLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuc2V0dXBWYXJpYWJsZXMoKTtcclxuICB0aGlzLnNldHVwRXZlbnRzKCk7XHJcbn07XHJcbi8vUEhQIExSIHNldHVwIFZhcmlhYmxlc1xyXG5QaHBMUi5wcm90b3R5cGUuc2V0dXBWYXJpYWJsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5sb2dib3ggPSB0aGlzLmVsZW1lbnQuZmluZChcIiNsb2dpbi1ib3hcIik7XHJcbiAgdGhpcy5sb2dpbmZybSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2xvZ2luLWZybVwiKTtcclxuICB0aGlzLnJlZ2JveCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3JlZ2lzdGVyLWJveFwiKTtcclxuICB0aGlzLnJlZ2ZybSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3JlZ2lzdGVyLWZybVwiKTtcclxuICB0aGlzLmZvcmdvdGJveCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2ZvcmdvdC1ib3hcIik7XHJcbiAgdGhpcy5mb3Jnb3Rmcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNmb3Jnb3QtZnJtXCIpO1xyXG59O1xyXG4vL1BIUCBMUiBzZXR1cCBFdmVudHNcclxuUGhwTFIucHJvdG90eXBlLnNldHVwRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciBwaHBMUiA9IHRoaXM7XHJcblxyXG4gIC8vcmVmcmVzaCBsb2dpbiAmIHJlZ2lzdGVyIGZybSBvbiBoaWRlIGFuZCBzaG93XHJcbiAgcGhwTFIubG9nYm94Lm9uKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAocGhwTFIubG9naW5mcm0uZmluZChcIi5pcy1pbnZhbGlkXCIpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIHJlc2V0X2ludmFsaWRfaW5wdXQocGhwTFIubG9naW5mcm0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vUmVzZXQgcmVnaXN0ZXIgZm9ybSBpbnZhbGlkIGlucHV0IG9uIGhpZGUgbW9kYWxcclxuICBwaHBMUi5yZWdib3gub24oXCJoaWRlLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChwaHBMUi5yZWdmcm0uZmluZChcIi5pcy1pbnZhbGlkXCIpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIHJlc2V0X2ludmFsaWRfaW5wdXQocGhwTFIucmVnZnJtKTtcclxuICAgIH1cclxuICB9KTtcclxuICAvL1Jlc2V0IHJlZ2lzdGVyIGZvcm0gb24gc2hvd25cclxuICBwaHBMUi5yZWdib3gub24oXCJzaG93LmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBocExSLnJlZ2ZybS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICBwaHBMUi5yZWdmcm0uZmluZChcIiNyZWdBbGVydFwiKS5odG1sKFwiXCIpO1xyXG4gIH0pO1xyXG4gIC8vcmVtb3ZlIGludmFsaWQgaW5wdXQgb24gZm9jdXMgcmVnaXN0ZXJcclxuICBwaHBMUi5yZWdmcm0ub24oXCJmb2N1c1wiLCBcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwoXCJcIik7XHJcbiAgfSk7XHJcbiAgLy9yZW1vdmUgaW52YWxpZCBpbnB1dCBvbiBmb2N1cyBsb2dpblxyXG4gIHBocExSLmxvZ2luZnJtLm9uKFwiZm9jdXNcIiwgXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG4gIH0pO1xyXG4gIC8vcmVzZXQgZm9yZ290IHBhc3N3b3JkIGZybVxyXG4gIHBocExSLmZvcmdvdGJveC5vbihcImhpZGUuYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgcGhwTFIuZm9yZ290ZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICB9KTtcclxuICAvL0ZpbGwgaW4gbG9naW4gZnJvbSBjb29raWVzIG9uIHNob253XHJcbiAgcGhwTFIubG9nYm94Lm9uKFwic2hvd24uYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIFwiYXV0aC9yZW1lbWJlcl9jaGVja1wiLFxyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjZW1haWxcIikudmFsKHJlc3BvbnNlLm1zZy5lbWFpbCk7XHJcbiAgICAgICAgICBwaHBMUi5sb2dpbmZybVxyXG4gICAgICAgICAgICAuZmluZChcIiNjdXN0b21DaGVja1wiKVxyXG4gICAgICAgICAgICAuYXR0cihcImNoZWNrZWRcIiwgcmVzcG9uc2UubXNnLnJlbWVtYmVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNlbWFpbFwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI3Bhc3N3b3JkXCIpLnZhbChcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICAvL1JlZ2lzdGVyIGZvcm1cclxuICBwaHBMUi5yZWdmcm0ub24oXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBwaHBMUi5yZWdmcm0uZmluZChcIiNyZWdpc3Rlci1idG5cIikudmFsKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICB2YXIgaW5wdXREYXRhID0ge1xyXG4gICAgICB1cmw6IFwiYXV0aC9hamF4UmVnaXN0ZXJcIixcclxuICAgICAgZnJtOiBwaHBMUi5yZWdmcm0sXHJcbiAgICAgIHRhYmxlOiBcImF1dGhcIixcclxuICAgICAgbm90aWZpY2F0aW9uOiBcImFkbWluXCIsXHJcbiAgICAgIGZybV9uYW1lOiBcInJlZ2lzdGVyLWZybVwiLFxyXG4gICAgfTtcclxuICAgIEFkZChpbnB1dERhdGEsIGdlc3Rpb25SKTtcclxuICAgIGZ1bmN0aW9uIGdlc3Rpb25SKHJlc3BvbnNlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgcGhwTFIucmVnZnJtLmZpbmQoXCIjcmVnaXN0ZXItYnRuXCIpLnZhbChcIkVucmVnaXN0cmVyXCIpO1xyXG4gICAgICB2YXIgb3V0cHV0RGF0YSA9IHtcclxuICAgICAgICBmcm06IHBocExSLnJlZ2ZybSxcclxuICAgICAgICBzd2FsOiBmYWxzZSxcclxuICAgICAgICBhbGVydGlkOiBwaHBMUi5yZWdmcm0uZmluZChcIiNyZWdBbGVydFwiKSxcclxuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICBpbWdhcmVhOiBwaHBMUi5yZWdib3guZmluZChcIi51cGxvYWQtcHJvZmlsZS1pbWFnZSAuaW1nXCIpLFxyXG4gICAgICAgIGltZ3ZhbHVlOiByZXNwb25zZS5pbWcgPyByZXNwb25zZS5pbWcgOiBcIlwiLFxyXG4gICAgICAgIGFsZXJ0c3VjY2VzczogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgICAgTWFuYWdlUmVzcG9uc2UocmVzcG9uc2UsIG91dHB1dERhdGEpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvL3JlYWQgcHJvZmlsZSBpbWFnZSBvbiBjaGFuZ2VcclxuICBwaHBMUi5yZWdib3hcclxuICAgIC5maW5kKCcudXBsb2FkLXByb2ZpbGUtaW1hZ2UgaW5wdXRbdHlwZT1cImZpbGVcIl0nKVxyXG4gICAgLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmVhZHVybChcclxuICAgICAgICB0aGlzLFxyXG4gICAgICAgIHBocExSLnJlZ2JveC5maW5kKFwiLnVwbG9hZC1wcm9maWxlLWltYWdlIC5pbWdcIiksXHJcbiAgICAgICAgcGhwTFIucmVnYm94LmZpbmQoXCIudXBsb2FkLXByb2ZpbGUtaW1hZ2UgLmNhbWVyYS1pY29uXCIpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAvL0xvZ2luIGZvcm1cclxuXHJcbiAgcGhwTFIubG9naW5mcm0ub24oXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2xvZ2luLWJ0blwiKS52YWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICB1cmw6IFwiYXV0aC9hamF4TG9naW5cIixcclxuICAgICAgZnJtOiBwaHBMUi5sb2dpbmZybSxcclxuICAgICAgZnJtX25hbWU6IFwibG9naW4tZnJtXCIsXHJcbiAgICB9O1xyXG4gICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIE1hbmFnZUxvZ2luUmVzcG9uc2UpO1xyXG4gICAgLy9tYW5hZ2UgbG9naW4gUmVzcG9uc2VcclxuICAgIGZ1bmN0aW9uIE1hbmFnZUxvZ2luUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbi1idG5cIikudmFsKFwiTG9naW5cIik7XHJcbiAgICAgIHZhciByZGF0YSA9IHtcclxuICAgICAgICBmcm06IHBocExSLmxvZ2luZnJtLFxyXG4gICAgICAgIGJ0bjogcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbi1idG5cIiksXHJcbiAgICAgICAgdGV4dEJ0bjogXCJTaWduIEluXCIsXHJcbiAgICAgICAgYWxlcnRpZDogcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbkFsZXJ0XCIpLFxyXG4gICAgICAgIGxvZ2luYm94OiBwaHBMUi5sb2dib3gsXHJcbiAgICAgICAgbG9naW46IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICAgIE1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCByZGF0YSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vbG9naW4gd2l0aCBGYWNlYm9va1xyXG5cclxuICBwaHBMUi5sb2dib3guZmluZChcIiNmYmxpbmtcIikub24oXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbi1idG5cIikudmFsKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgZnJtOiBwaHBMUi5sb2dpbmZybSxcclxuICAgICAgdXJsOiBcImd1ZXN0cy9mYkxvZ2luXCIsXHJcbiAgICAgIGZybV9uYW1lOiBcImxvZ2luLWZybVwiLFxyXG4gICAgfTtcclxuICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBGYlJlc3BvbnNlKTtcclxuICAgIGZ1bmN0aW9uIEZiUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIEZCID0gZmFjZWJvb2tsb2dpbihyZXNwb25zZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbkFsZXJ0XCIpLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vZmFjZWJvb2sgbG9naW5cclxuICBmdW5jdGlvbiBmYWNlYm9va2xvZ2luKHJlc3ApIHtcclxuICAgIEZhY2Vib29rLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgRmFjZWJvb2suaW5pdCh7XHJcbiAgICAgICAgYXBwSWQ6IHJlc3AubXNnLmFwcElELFxyXG4gICAgICB9KTtcclxuICAgICAgRmFjZWJvb2suZ2V0TG9naW5TdGF0dXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IFwiY29ubmVjdGVkXCIpIHtcclxuICAgICAgICAgIGdldEZiVXNlckRhdGEoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmJMb2dpbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBGYWNlYm9vaztcclxuICB9XHJcblxyXG4gIC8vIEZhY2Vib29rIGxvZ2luIHdpdGggSmF2YVNjcmlwdCBTREtcclxuICBmdW5jdGlvbiBmYkxvZ2luKCkge1xyXG4gICAgRkIubG9naW4oe1xyXG4gICAgICBzY29wZTogXCJlbWFpbFwiLFxyXG4gICAgICByZXR1cm5fc2NvcGVzOiB0cnVlLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIikge1xyXG4gICAgICAgIGdldEZiVXNlckRhdGEoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luQWxlcnRcIikuaW5uZXJIVE1MID1cclxuICAgICAgICAgIFwiVXNlciBjYW5jZWxsZWQgbG9naW4gb3IgZGlkIG5vdCBmdWxseSBhdXRob3JpemUuXCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyAvLyBGZXRjaCB0aGUgdXNlciBwcm9maWxlIGRhdGEgZnJvbSBmYWNlYm9va1xyXG4gIGZ1bmN0aW9uIGdldEZiVXNlckRhdGEoKSB7XHJcbiAgICBGQi5hcGkoXCIvbWVcIiwgXCJnZXRcIiwge1xyXG4gICAgICBmaWVsZHM6IFwiaWQsZmlyc3RfbmFtZSxsYXN0X25hbWUsZW1haWwsbGluayxnZW5kZXIsbG9jYWxlLHBpY3R1cmVcIixcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIGZybTogcGhwTFIubG9naW5mcm0sXHJcbiAgICAgICAgZnJtX25hbWU6IFwibG9naW4tZnJtXCIsXHJcbiAgICAgICAgdXJsOiBcImF1dGgvZmJsb2dpblwiLFxyXG4gICAgICAgIGZyZWVkYXRhOiBKU09OLnN0cmluZ2lmeShyZXNwb25zZSksXHJcbiAgICAgIH07XHJcbiAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBNYW5hZ2VMb2dpblJlc3BvbnNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAvL0ZvcmdvdCBwYXNzd29yZCByZXF1ZXN0XHJcbiAgcGhwTFIuZm9yZ290ZnJtLm9uKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgcGhwTFIuZm9yZ290ZnJtLmZpbmQoXCIjZm9yZ290LWJ0blwiKS52YWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICB1cmw6IFwiYXV0aC9mb3Jnb3RcIixcclxuICAgICAgZnJtOiBwaHBMUi5mb3Jnb3Rmcm0sXHJcbiAgICAgIGZybV9uYW1lOiBcImZvcmdvdC1mcm1cIixcclxuICAgIH07XHJcbiAgICBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgTVJlc3BvbnNlKTtcclxuICAgIGZ1bmN0aW9uIE1SZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgICB2YXIgcmRhdGEgPSB7XHJcbiAgICAgICAgZnJtOiBwaHBMUi5mb3Jnb3Rmcm0sXHJcbiAgICAgICAgYWxlcnRpZDogcGhwTFIuZm9yZ290ZnJtLmZpbmQoXCIjZm9yZ290QWxlcnRcIiksXHJcbiAgICAgICAgYWxlcnRzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgICBNYW5hZ2VSZXNwb25zZShyZXNwb25zZSwgcmRhdGEpO1xyXG4gICAgICBwaHBMUi5mb3Jnb3Rmcm0uZmluZChcIiNmb3Jnb3QtYnRuXCIpLnZhbChcIlJlc2V0IHBhc3N3b3JkXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vbG9nb3V0XHJcbiAgdmFyIGxvZ291dCA9ICQoXCJhOmNvbnRhaW5zKCdMb2dvdXQnKVwiKTtcclxuXHJcbiAgJChsb2dvdXQpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBGQiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBGQi5sb2dvdXQoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vIGxvZ2dlZCBvdXRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IEJBU0VfVVJMICsgXCJhdXRoL2xvZ291dFwiLFxyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBsb2dvdXQuY2xvc2VzdChcImRpdlwiKS5sb2FkKGxvY2F0aW9uLmhyZWYgKyBcIiAuY29ubmVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BamF4IGxvZ291dCBmcm9tIGVsc2V3aGVyZVxyXG59O1xyXG4kLmZuLnBocExSID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICBuZXcgUGhwTFIodGhpcyk7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcbiQoXCIjTG9naW4tUmVnaXN0ZXItU3lzdGVtXCIpLnBocExSKCk7XHJcbiIsImV4cG9ydCBjb25zdCByZWFkdXJsID0gKGlucHV0LCBpbWcsIGljb24pID0+IHtcclxuICBpZiAoaW5wdXQuZmlsZXMgJiYgaW5wdXQuZmlsZXNbMF0pIHtcclxuICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGltZy5hdHRyKFwic3JjXCIsIGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgIGljb24uY3NzKHtcclxuICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXQuZmlsZXNbMF0pO1xyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==