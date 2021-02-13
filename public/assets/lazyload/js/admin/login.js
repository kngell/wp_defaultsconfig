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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvZm9ybV9jcnVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9pbnB1dEVyck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2xvZ3JlZy5qcyJdLCJuYW1lcyI6WyJkaXNwbGF5QWxsRGV0YWlscyIsImRhdGEiLCJnZXN0aW9uIiwiJCIsImFqYXgiLCJ1cmwiLCJCQVNFX1VSTCIsIm1ldGhvZCIsInRhYmxlIiwiaWQiLCJ1c2VyIiwic2Vzc2lvbl9pZCIsImRhdGFfdHlwZSIsInJldHVybl9tb2RlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwicGFyYW1zIiwiZWRpdEZvcm0iLCJmb3JtRGF0YSIsImRpc3BsYXlBbGxJdGVtcyIsInN0YXJ0IiwibWF4IiwicXVlcnkiLCJwYWdlIiwicGFnaW5hdGlvbiIsInJlc3VsdCIsImRpc3BsYXlpZCIsImh0bWwiLCJtc2ciLCJkYXRhdGFibGUiLCJsb2FkRGF0YXRhYmxlcyIsIkRhdGFUYWJsZSIsIm9yZGVyIiwiQWRkIiwiRm9ybURhdGEiLCJmcm0iLCJhcHBlbmQiLCJub3RpZmljYXRpb24iLCJmcm1fbmFtZSIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsImltYWdlVXJsc0FyeSIsImNhY2hlIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsIkNhbGxfY29udHJvbGxlciIsInVybF9kYXRhIiwiYWN0aW9uIiwiZnJlZWRhdGEiLCJ1c2VyX2lkIiwiTWFuYWdlUmVzcG9uc2UiLCJhZGRfaW5wdXRzX2Vycm9ycyIsImlucHV0c0FycmF5IiwiZXJyb3IiLCJ0cmlnZ2VyIiwibG9naW4iLCJsb2dpbmJveCIsIm1vZGFsIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJzd2FsIiwibW9kYWxib3giLCJmaXJlIiwiYWxlcnRzdWNjZXNzIiwiYWxlcnRpZCIsImhhc093blByb3BlcnR5IiwiaW1nYXJlYSIsImF0dHIiLCJpbWd2YWx1ZSIsInByZXBlbmQiLCJuZXN0ZWQiLCJiZWZvcmUiLCJoaWRlIiwiZGlzcGxheSIsIkRlbGV0ZSIsImRpc3BsYXlJdGVtIiwiY2hlY2tCZWZvcmVEZWxldGUiLCJ0aGVuIiwidmFsdWUiLCJhbGVydElEIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cmxfY2hlY2siLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiZG9uZSIsImZhaWwiLCJkaXNwbGF5TXVsdGlzZWxsZWN0IiwiZGlzcGxheUlEIiwiYWRkQ2F0ZWdvcnJpZSIsImNhdEZpZWxkIiwiY2F0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwiYWxlcnQiLCJjYXRlZ29yaWUiLCJJbnB1dEFyciIsImFyckVyciIsImZvckVhY2giLCJpbnB1dCIsImluZGV4T2YiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpbm5lckhUTUwiLCJyZXNldF9pbnZhbGlkX2lucHV0IiwiZm9ybSIsImZpbmQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZUludmFsaWRJbnB1dCIsIk15Zm9ybSIsIm9uIiwicGFyZW50IiwiY2hpbGRyZW4iLCJJbnB1dEVyciIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJhZGRDbGFzcyIsInB1c2giLCJhcnIiLCJlYWNoIiwiaW5wdXRzQXJyIiwidG9BcnJheSIsInR5cGUiLCJQaHBMUiIsImVsZW1lbnQiLCJpbml0IiwicHJvdG90eXBlIiwic2V0dXBWYXJpYWJsZXMiLCJzZXR1cEV2ZW50cyIsImxvZ2JveCIsImxvZ2luZnJtIiwicmVnYm94IiwicmVnZnJtIiwiZm9yZ290Ym94IiwiZm9yZ290ZnJtIiwicGhwTFIiLCJ2YWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbnB1dERhdGEiLCJnZXN0aW9uUiIsIm91dHB1dERhdGEiLCJyZWFkdXJsIiwiTWFuYWdlTG9naW5SZXNwb25zZSIsInJkYXRhIiwiYnRuIiwidGV4dEJ0biIsIkZiUmVzcG9uc2UiLCJGQiIsImZhY2Vib29rbG9naW4iLCJyZXNwIiwiRmFjZWJvb2siLCJsb2FkIiwiYXBwSWQiLCJhcHBJRCIsImdldExvZ2luU3RhdHVzIiwic3RhdHVzIiwiZ2V0RmJVc2VyRGF0YSIsImZiTG9naW4iLCJzY29wZSIsInJldHVybl9zY29wZXMiLCJnZXRFbGVtZW50QnlJZCIsImFwaSIsImZpZWxkcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJNUmVzcG9uc2UiLCJsb2dvdXQiLCJjbG9zZXN0IiwiaHJlZiIsImZuIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNPLFNBQVNBLGlCQUFULENBQTJCQyxJQUEzQixFQUFpQ0MsT0FBakMsRUFBMEM7QUFDL0NDLEdBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsNkNBQVEsR0FBR0wsSUFBSSxDQUFDSSxHQURoQjtBQUVMRSxVQUFNLEVBQUUsTUFGSDtBQUdMTixRQUFJLEVBQUU7QUFDSk8sV0FBSyxFQUFFUCxJQUFJLENBQUNPLEtBRFI7QUFFSkMsUUFBRSxFQUFFUixJQUFJLENBQUNRLEVBRkw7QUFHSkMsVUFBSSxFQUFFVCxJQUFJLENBQUNTLElBQUwsR0FBWVQsSUFBSSxDQUFDUyxJQUFqQixHQUF3QixFQUgxQjtBQUlKQyxnQkFBVSxFQUFFVixJQUFJLENBQUNVLFVBQUwsR0FBa0JWLElBQUksQ0FBQ1UsVUFBdkIsR0FBb0MsRUFKNUM7QUFLSkMsZUFBUyxFQUFFWCxJQUFJLENBQUNXLFNBQUwsR0FBaUJYLElBQUksQ0FBQ1csU0FBdEIsR0FBa0MsRUFMekM7QUFNSkMsaUJBQVcsRUFBRVosSUFBSSxDQUFDWSxXQUFMLEdBQW1CWixJQUFJLENBQUNZLFdBQXhCLEdBQXNDO0FB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QUNnTCxFQUFGLENBQUtwQyxLQUFMLEdBQWEsVUFBVXFDLE9BQVYsRUFBbUI7QUFDOUIsTUFBSWpELEtBQUosQ0FBVSxJQUFWO0FBQ0EsU0FBTyxJQUFQO0FBQ0QsQ0FIRDs7QUFJQWhJLENBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCNEksS0FBNUIsRyIsImZpbGUiOiJsYXp5bG9hZC9qcy9hZG1pbi9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IGFkZF9pbnB1dHNfZXJyb3JzLCBlcnJvciwgaW5wdXRzQXJyYXkgfSBmcm9tIFwiLi9pbnB1dEVyck1hbmFnZXJcIjtcclxuXHJcbi8vZGlzcGxheSBhbGwgZGV0YWlsc1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFsbERldGFpbHMoZGF0YSwgZ2VzdGlvbikge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgIHVzZXI6IGRhdGEudXNlciA/IGRhdGEudXNlciA6IFwiXCIsXHJcbiAgICAgIHNlc3Npb25faWQ6IGRhdGEuc2Vzc2lvbl9pZCA/IGRhdGEuc2Vzc2lvbl9pZCA6IFwiXCIsXHJcbiAgICAgIGRhdGFfdHlwZTogZGF0YS5kYXRhX3R5cGUgPyBkYXRhLmRhdGFfdHlwZSA6IFwiXCIsXHJcbiAgICAgIHJldHVybl9tb2RlOiBkYXRhLnJldHVybl9tb2RlID8gZGF0YS5yZXR1cm5fbW9kZSA6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuLy9lZGl0IGRhdGFcclxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRGb3JtKGRhdGEsIGdlc3Rpb24pIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEuZm9ybURhdGEsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG4vL2Rpc3BsYXkgYWxsIEl0ZW1zXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsSXRlbXMoZGF0YSkge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgaWQ6IGRhdGEuaWQgIT0gXCJcIiA/IGRhdGEuaWQgOiBcIlwiLFxyXG4gICAgICBzdGFydDogMCxcclxuICAgICAgbWF4OiBkYXRhLm1heCAhPSBcIlwiID8gZGF0YS5tYXggOiBcIlwiLFxyXG4gICAgICB1c2VyOiBkYXRhLnVzZXIgIT0gXCJcIiA/IGRhdGEudXNlciA6IFwiXCIsXHJcbiAgICAgIHF1ZXJ5OiBkYXRhLnF1ZXJ5ICE9IFwiXCIgPyBkYXRhLnF1ZXJ5IDogXCJcIixcclxuICAgICAgcGFnZTogZGF0YS5wYWdlICE9IFwiXCIgPyBkYXRhLnBhZ2UgOiBcIlwiLFxyXG4gICAgICBwYWdpbmF0aW9uOiBkYXRhLnBhZ2luYXRpb24gIT0gXCJcIiA/IGRhdGEucGFnaW5hdGlvbiA6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAvLyBkZWJ1Z2dlcjtcclxuICAgICAgICBpZiAoZGF0YS50YWJsZSA9PT0gXCJjb21tZW50c1wiKSB7XHJcbiAgICAgICAgICBkYXRhLmRpc3BsYXlpZC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRhdGEuZGlzcGxheWlkLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIGlmIChkYXRhLmRhdGF0YWJsZSkgbG9hZERhdGF0YWJsZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChkYXRhLmRpc3BsYXlpZCkuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWREYXRhdGFibGVzKCkge1xyXG4gIGNvbnN0IERhdGFUYWJsZSA9IGF3YWl0IGltcG9ydChcclxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZGF0YXRhYmxlc1wiICovIFwiZGF0YXRhYmxlcy5uZXRcIlxyXG4gICk7XHJcbiAgJChcInRhYmxlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICBvcmRlcjogWzAsIFwiZGVzY1wiXSxcclxuICB9KTtcclxufVxyXG4vL2FkZCBJdGVtXHJcbmV4cG9ydCBmdW5jdGlvbiBBZGQoZGF0YSwgZ2VzdGlvbikge1xyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkYXRhLmZybVswXSk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwidGFibGVcIiwgZGF0YS50YWJsZSk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwibm90aWZpY2F0aW9uXCIsIGRhdGEubm90aWZpY2F0aW9uKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJmcm1fbmFtZVwiLCBkYXRhLmZybV9uYW1lKTtcclxuICBpZiAoZGF0YS5zdGFydF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJzdGFydF9kYXRlXCIsIGRhdGEuc3RhcnRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuZW5kX2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcImVuZF9kYXRlXCIsIGRhdGEuZW5kX2RhdGUpO1xyXG4gIGlmIChkYXRhLmltYWdlVXJsc0FyeSkgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VVcmxzQXJ5XCIsIGRhdGEuaW1hZ2VVcmxzQXJ5KTtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuLy91cGRhdGVcclxuZXhwb3J0IGZ1bmN0aW9uIENhbGxfY29udHJvbGxlcihkYXRhLCBnZXN0aW9uKSB7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEuZnJtWzBdKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJmcm1fbmFtZVwiLCBkYXRhLmZybV9uYW1lKTtcclxuICBpZiAoZGF0YS50YWJsZSkgZm9ybURhdGEuYXBwZW5kKFwidGFibGVcIiwgZGF0YS50YWJsZSk7XHJcbiAgaWYgKGRhdGEubm90aWZpY2F0aW9uKSBmb3JtRGF0YS5hcHBlbmQoXCJub3RpZmljYXRpb25cIiwgZGF0YS5ub3RpZmljYXRpb24pO1xyXG4gIGlmIChkYXRhLnVybF9kYXRhKSBmb3JtRGF0YS5hcHBlbmQoXCJ1cmxfZGF0YVwiLCBkYXRhLnVybF9kYXRhKTtcclxuICBpZiAoZGF0YS5hY3Rpb24pIGZvcm1EYXRhLmFwcGVuZChcImFjdGlvblwiLCBkYXRhLmFjdGlvbik7XHJcbiAgaWYgKGRhdGEuaW1hZ2VVcmxzQXJ5KSBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVVybHNBcnlcIiwgZGF0YS5pbWFnZVVybHNBcnkpO1xyXG4gIGlmIChkYXRhLmZyZWVkYXRhKSBmb3JtRGF0YS5hcHBlbmQoXCJmcmVlZGF0YVwiLCBkYXRhLmZyZWVkYXRhKTtcclxuICBpZiAoZGF0YS5zdGFydF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJzdGFydF9kYXRlXCIsIGRhdGEuc3RhcnRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuZW5kX2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcImVuZF9kYXRlXCIsIGRhdGEuZW5kX2RhdGUpO1xyXG4gIGlmIChkYXRhLmlkKSBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBkYXRhLmlkKTtcclxuICBpZiAoZGF0YS51c2VyX2lkKSBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBkYXRhLnVzZXJfaWQpO1xyXG4gIGlmIChkYXRhLm1ldGhvZCkgZm9ybURhdGEuYXBwZW5kKFwibWV0aG9kXCIsIGRhdGEubWV0aG9kKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuLy9NYW5hZ2UgaXRlbSBhZGRlZC91cGRhdGVkXHJcbmV4cG9ydCBmdW5jdGlvbiBNYW5hZ2VSZXNwb25zZShyZXNwb25zZSwgZGF0YSkge1xyXG4gIHN3aXRjaCAocmVzcG9uc2UucmVzdWx0KSB7XHJcbiAgICBjYXNlIFwiZXJyb3ItZmllbGRcIjpcclxuICAgICAgYWRkX2lucHV0c19lcnJvcnMoaW5wdXRzQXJyYXkoZGF0YS5mcm0pLCBlcnJvcihkYXRhLmZybSwgcmVzcG9uc2UubXNnKSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcInN1Y2Nlc3NcIjpcclxuICAgICAgZGF0YS5mcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICBpZiAoZGF0YS5sb2dpbikge1xyXG4gICAgICAgIGRhdGEubG9naW5ib3gubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YS5zd2FsKSB7XHJcbiAgICAgICAgZGF0YS5tb2RhbGJveC5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgZGF0YS5zd2FsLmZpcmUoXCJTdWNjZXNzIVwiLCByZXNwb25zZS5tc2csIFwic3VjY2Vzc1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZGF0YS5hbGVydHN1Y2Nlc3MpIGRhdGEuYWxlcnRpZC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJpbWdhcmVhXCIpKSB7XHJcbiAgICAgICAgZGF0YS5pbWdhcmVhLmF0dHIoXCJzcmNcIiwgZGF0YS5pbWd2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGEucHJlcGVuZCkge1xyXG4gICAgICAgIGRhdGEubmVzdGVkLnByZXBlbmQocmVzcG9uc2UubXNnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZGF0YS5wcmVwZW5kID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgZGF0YS5uZXN0ZWQuYmVmb3JlKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgICBkYXRhLm5lc3RlZC5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhLmRpc3BsYXkpIGRhdGEuZGlzcGxheSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJlcnJvclwiOlxyXG4gICAgICBkYXRhLmFsZXJ0aWQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICBkYXRhLmZybS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufVxyXG5cclxuLy9kZWxldGVcclxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZShkYXRhLCBkaXNwbGF5SXRlbSkge1xyXG4gIGNoZWNrQmVmb3JlRGVsZXRlKGRhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgICAgICBub3RpZmljYXRpb246IGRhdGEubm90aWZpY2F0aW9uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICBkYXRhLnN3YWwuZmlyZShcIkRlbGV0ZWQhXCIsIHJlc3BvbnNlLm1zZywgXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICBkaXNwbGF5SXRlbSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YS5hbGVydElELmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4vL2Z1bmN0aW9uIGNoZWNrIGJlZm9yZSBkZWxldGVcclxuZnVuY3Rpb24gY2hlY2tCZWZvcmVEZWxldGUoZGF0YSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBpZiAoIWRhdGEudXJsX2NoZWNrKSB7XHJcbiAgICAgIGRhdGEuc3dhbFxyXG4gICAgICAgIC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcclxuICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICBodG1sOiBcIjxwPllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzITwvcD5cIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJEZWxldGUhXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybF9jaGVjayxcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgICAgICBub3RpZmljYXRpb246IGRhdGEubm90aWZpY2F0aW9uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBkYXRhLnN3YWxcclxuICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGh0bWw6IFwiPHA+WW91IHdvbid0IGJlIGFibGUgdG8gcmV2ZXJ0IHRoaXMhPC9wPlwiICsgcmVzcG9uc2UubXNnLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXHJcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkRlbGV0ZSFcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmFpbCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNdWx0aXNlbGxlY3QoZGF0YSkge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgXCJmb3Jtcy9maWxsTXVsdGlzZWxlY3RcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIGRhdGEuZGlzcGxheUlELmFwcGVuZChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGEuYWxlcnRJRC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDYXRlZ29ycmllKGNhdEZpZWxkLCBhbGVydElEKSB7XHJcbiAgbGV0IGNhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2F0RmllbGQpO1xyXG4gIGlmIChjYXQudmFsdWUubGVuZ3RoID09IDApIHtcclxuICAgIGFsZXJ0KFwiTGUgY2hhbXBzIGNhdMOpZ29yaWUgZXN0IHZpZGVcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogQkFTRV9VUkwgKyBcImZvcm1zL2FkZGNhdGVnb3JpZVwiLFxyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgY2F0ZWdvcmllOiBjYXQudmFsdWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZSAhPSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgJChhbGVydElEKS5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFkZF9pbnB1dHNfZXJyb3JzID0gKElucHV0QXJyLCBhcnJFcnIpID0+IHtcclxuICBJbnB1dEFyci5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgaWYgKGFyckVyci5pbmRleE9mKGlucHV0LmlkKSA9PSAtMSkge1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICAgaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRfaW52YWxpZF9pbnB1dCA9IChmb3JtKSA9PiB7XHJcbiAgZm9ybS5maW5kKFwiLmlzLWludmFsaWRcIikucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gIGZvcm0uZmluZChcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwoXCJcIik7XHJcbn07XHJcblxyXG4vL3JlbW92ZSBpbnZhbGlkIGlucHV0IG9uIGZvY3VzXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJbnZhbGlkSW5wdXQoTXlmb3JtKSB7XHJcbiAgTXlmb3JtLm9uKFwiZm9jdXNcIiwgXCJpbnB1dCx0ZXh0YXJlYSwgLmNrLCAubm90ZS1lZGl0b3JcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVycm9yID0gKGZvcm0sIElucHV0RXJyKSA9PiB7XHJcbiAgdmFyIGFyckVyciA9IFtdO1xyXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKElucHV0RXJyKSkge1xyXG4gICAgdmFyIGlucHV0ID0gZm9ybS5maW5kKFwiI1wiICsga2V5KS5hZGRDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICBpbnB1dC5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwodmFsdWUpO1xyXG4gICAgYXJyRXJyLnB1c2goa2V5KTtcclxuICB9XHJcbiAgcmV0dXJuIGFyckVycjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnB1dHNBcnJheSA9IChmb3JtKSA9PiB7XHJcbiAgdmFyIGFyciA9IFtdO1xyXG4gIGZvcm0uZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpbnB1dHNBcnIgPSAkKHRoaXMpLmZpbmQoXCI6aW5wdXRcIikudG9BcnJheSgpO1xyXG4gICAgaW5wdXRzQXJyLmZvckVhY2goZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBbXCJzdWJtaXRcIiwgXCJoaWRkZW5cIiwgXCJjaGVja2JveFwiLCBcImJ1dHRvblwiLCBcImZpbGVcIl0uaW5kZXhPZihcclxuICAgICAgICAgIGlucHV0LnR5cGVcclxuICAgICAgICApID09IC0xICYmXHJcbiAgICAgICAgaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nXHJcbiAgICAgICkge1xyXG4gICAgICAgIGFyci5wdXNoKGlucHV0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGFycjtcclxufTtcclxuIiwiaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiY29yZWpzL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBZGQsIENhbGxfY29udHJvbGxlciwgTWFuYWdlUmVzcG9uc2UgfSBmcm9tIFwiY29yZWpzL2Zvcm1fY3J1ZFwiO1xyXG5mdW5jdGlvbiBQaHBMUihlbGVtZW50KSB7XHJcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB0aGlzLmluaXQoKTtcclxufVxyXG5QaHBMUi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICB0aGlzLnNldHVwVmFyaWFibGVzKCk7XHJcbiAgdGhpcy5zZXR1cEV2ZW50cygpO1xyXG59O1xyXG4vL1BIUCBMUiBzZXR1cCBWYXJpYWJsZXNcclxuUGhwTFIucHJvdG90eXBlLnNldHVwVmFyaWFibGVzID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMubG9nYm94ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjbG9naW4tYm94XCIpO1xyXG4gIHRoaXMubG9naW5mcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNsb2dpbi1mcm1cIik7XHJcbiAgdGhpcy5yZWdib3ggPSB0aGlzLmVsZW1lbnQuZmluZChcIiNyZWdpc3Rlci1ib3hcIik7XHJcbiAgdGhpcy5yZWdmcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNyZWdpc3Rlci1mcm1cIik7XHJcbiAgdGhpcy5mb3Jnb3Rib3ggPSB0aGlzLmVsZW1lbnQuZmluZChcIiNmb3Jnb3QtYm94XCIpO1xyXG4gIHRoaXMuZm9yZ290ZnJtID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjZm9yZ290LWZybVwiKTtcclxufTtcclxuLy9QSFAgTFIgc2V0dXAgRXZlbnRzXHJcblBocExSLnByb3RvdHlwZS5zZXR1cEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgcGhwTFIgPSB0aGlzO1xyXG5cclxuICAvL3JlZnJlc2ggbG9naW4gJiByZWdpc3RlciBmcm0gb24gaGlkZSBhbmQgc2hvd1xyXG4gIHBocExSLmxvZ2JveC5vbihcImhpZGUuYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHBocExSLmxvZ2luZnJtLmZpbmQoXCIuaXMtaW52YWxpZFwiKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICByZXNldF9pbnZhbGlkX2lucHV0KHBocExSLmxvZ2luZnJtKTtcclxuICAgIH1cclxuICB9KTtcclxuICAvL1Jlc2V0IHJlZ2lzdGVyIGZvcm0gaW52YWxpZCBpbnB1dCBvbiBoaWRlIG1vZGFsXHJcbiAgcGhwTFIucmVnYm94Lm9uKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAocGhwTFIucmVnZnJtLmZpbmQoXCIuaXMtaW52YWxpZFwiKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICByZXNldF9pbnZhbGlkX2lucHV0KHBocExSLnJlZ2ZybSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy9SZXNldCByZWdpc3RlciBmb3JtIG9uIHNob3duXHJcbiAgcGhwTFIucmVnYm94Lm9uKFwic2hvdy5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwaHBMUi5yZWdmcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgcGhwTFIucmVnZnJtLmZpbmQoXCIjcmVnQWxlcnRcIikuaHRtbChcIlwiKTtcclxuICB9KTtcclxuICAvL3JlbW92ZSBpbnZhbGlkIGlucHV0IG9uIGZvY3VzIHJlZ2lzdGVyXHJcbiAgcGhwTFIucmVnZnJtLm9uKFwiZm9jdXNcIiwgXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG4gIH0pO1xyXG4gIC8vcmVtb3ZlIGludmFsaWQgaW5wdXQgb24gZm9jdXMgbG9naW5cclxuICBwaHBMUi5sb2dpbmZybS5vbihcImZvY3VzXCIsIFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxuICB9KTtcclxuICAvL3Jlc2V0IGZvcmdvdCBwYXNzd29yZCBmcm1cclxuICBwaHBMUi5mb3Jnb3Rib3gub24oXCJoaWRlLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBocExSLmZvcmdvdGZybS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgfSk7XHJcbiAgLy9GaWxsIGluIGxvZ2luIGZyb20gY29va2llcyBvbiBzaG9ud1xyXG4gIHBocExSLmxvZ2JveC5vbihcInNob3cuYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIFwidXNlcnMvbG9naW5jb29raWVzXCIsXHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2VtYWlsXCIpLnZhbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2VtYWlsXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjcGFzc3dvcmRcIikudmFsKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIC8vUmVnaXN0ZXIgZm9ybVxyXG4gIHBocExSLnJlZ2ZybS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHBocExSLnJlZ2ZybS5maW5kKFwiI3JlZ2lzdGVyLWJ0blwiKS52YWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgIHZhciBpbnB1dERhdGEgPSB7XHJcbiAgICAgIHVybDogXCJ1c2Vycy9hamF4UmVnaXN0ZXJcIixcclxuICAgICAgZnJtOiBwaHBMUi5yZWdmcm0sXHJcbiAgICAgIHRhYmxlOiBcInVzZXJzXCIsXHJcbiAgICAgIG5vdGlmaWNhdGlvbjogXCJhZG1pblwiLFxyXG4gICAgICBmcm1fbmFtZTogXCJyZWdpc3Rlci1mcm1cIixcclxuICAgIH07XHJcbiAgICBBZGQoaW5wdXREYXRhLCBnZXN0aW9uUik7XHJcbiAgICBmdW5jdGlvbiBnZXN0aW9uUihyZXNwb25zZSkge1xyXG4gICAgICBwaHBMUi5yZWdmcm0uZmluZChcIiNyZWdpc3Rlci1idG5cIikudmFsKFwiRW5yZWdpc3RyZXJcIik7XHJcbiAgICAgIHZhciBvdXRwdXREYXRhID0ge1xyXG4gICAgICAgIGZybTogcGhwTFIucmVnZnJtLFxyXG4gICAgICAgIHN3YWw6IGZhbHNlLFxyXG4gICAgICAgIGFsZXJ0aWQ6IHBocExSLnJlZ2ZybS5maW5kKFwiI3JlZ0FsZXJ0XCIpLFxyXG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgIGltZ2FyZWE6IHBocExSLnJlZ2JveC5maW5kKFwiLnVwbG9hZC1wcm9maWxlLWltYWdlIC5pbWdcIiksXHJcbiAgICAgICAgaW1ndmFsdWU6IFwiL2tuZ2VsbC9wdWJsaWMvYXNzZXRzL2ltZy9yZWdpc3Rlci9wcm9maWxlL2JlYXJkLnBuZ1wiLFxyXG4gICAgICAgIGFsZXJ0c3VjY2VzczogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgICAgTWFuYWdlUmVzcG9uc2UocmVzcG9uc2UsIG91dHB1dERhdGEpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvL3JlYWQgcHJvZmlsZSBpbWFnZSBvbiBjaGFuZ2VcclxuICBwaHBMUi5yZWdib3hcclxuICAgIC5maW5kKCcudXBsb2FkLXByb2ZpbGUtaW1hZ2UgaW5wdXRbdHlwZT1cImZpbGVcIl0nKVxyXG4gICAgLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmVhZHVybChcclxuICAgICAgICB0aGlzLFxyXG4gICAgICAgIHBocExSLnJlZ2JveC5maW5kKFwiLnVwbG9hZC1wcm9maWxlLWltYWdlIC5pbWdcIiksXHJcbiAgICAgICAgcGhwTFIucmVnYm94LmZpbmQoXCIudXBsb2FkLXByb2ZpbGUtaW1hZ2UgLmNhbWVyYS1pY29uXCIpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAvL0xvZ2luIGZvcm1cclxuICBwaHBMUi5sb2dpbmZybS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjbG9naW4tYnRuXCIpLnZhbChcIlBsZWFzZSB3YWl0Li4uXCIpO1xyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgIHVybDogXCJ1c2Vycy9hamF4TG9naW5cIixcclxuICAgICAgZnJtOiBwaHBMUi5sb2dpbmZybSxcclxuICAgICAgZnJtX25hbWU6IFwibG9naW4tZnJtXCIsXHJcbiAgICB9O1xyXG4gICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIE1hbmFnZUxvZ2luUmVzcG9uc2UpO1xyXG4gICAgLy9tYW5hZ2UgbG9naW4gUmVzcG9uc2VcclxuICAgIGZ1bmN0aW9uIE1hbmFnZUxvZ2luUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbi1idG5cIikudmFsKFwiTG9naW5cIik7XHJcbiAgICAgIHZhciByZGF0YSA9IHtcclxuICAgICAgICBmcm06IHBocExSLmxvZ2luZnJtLFxyXG4gICAgICAgIGJ0bjogcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbi1idG5cIiksXHJcbiAgICAgICAgdGV4dEJ0bjogXCJTaWduIEluXCIsXHJcbiAgICAgICAgYWxlcnRpZDogcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbkFsZXJ0XCIpLFxyXG4gICAgICAgIGxvZ2luYm94OiBwaHBMUi5sb2dib3gsXHJcbiAgICAgICAgbG9naW46IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICAgIE1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCByZGF0YSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vbG9naW4gd2l0aCBGYWNlYm9va1xyXG5cclxuICBwaHBMUi5sb2dib3guZmluZChcIiNmYmxpbmtcIikub24oXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbi1idG5cIikudmFsKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgZnJtOiBwaHBMUi5sb2dpbmZybSxcclxuICAgICAgdXJsOiBcImd1ZXN0cy9mYkxvZ2luXCIsXHJcbiAgICAgIGZybV9uYW1lOiBcImxvZ2luLWZybVwiLFxyXG4gICAgfTtcclxuICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBGYlJlc3BvbnNlKTtcclxuICAgIGZ1bmN0aW9uIEZiUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIEZCID0gZmFjZWJvb2tsb2dpbihyZXNwb25zZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNsb2dpbkFsZXJ0XCIpLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vZmFjZWJvb2sgbG9naW5cclxuICBmdW5jdGlvbiBmYWNlYm9va2xvZ2luKHJlc3ApIHtcclxuICAgIEZhY2Vib29rLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgRmFjZWJvb2suaW5pdCh7XHJcbiAgICAgICAgYXBwSWQ6IHJlc3AubXNnLmFwcElELFxyXG4gICAgICB9KTtcclxuICAgICAgRmFjZWJvb2suZ2V0TG9naW5TdGF0dXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IFwiY29ubmVjdGVkXCIpIHtcclxuICAgICAgICAgIGdldEZiVXNlckRhdGEoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmJMb2dpbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBGYWNlYm9vaztcclxuICB9XHJcblxyXG4gIC8vIEZhY2Vib29rIGxvZ2luIHdpdGggSmF2YVNjcmlwdCBTREtcclxuICBmdW5jdGlvbiBmYkxvZ2luKCkge1xyXG4gICAgRkIubG9naW4oe1xyXG4gICAgICBzY29wZTogXCJlbWFpbFwiLFxyXG4gICAgICByZXR1cm5fc2NvcGVzOiB0cnVlLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIikge1xyXG4gICAgICAgIGdldEZiVXNlckRhdGEoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luQWxlcnRcIikuaW5uZXJIVE1MID1cclxuICAgICAgICAgIFwiVXNlciBjYW5jZWxsZWQgbG9naW4gb3IgZGlkIG5vdCBmdWxseSBhdXRob3JpemUuXCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyAvLyBGZXRjaCB0aGUgdXNlciBwcm9maWxlIGRhdGEgZnJvbSBmYWNlYm9va1xyXG4gIGZ1bmN0aW9uIGdldEZiVXNlckRhdGEoKSB7XHJcbiAgICBGQi5hcGkoXCIvbWVcIiwgXCJnZXRcIiwge1xyXG4gICAgICBmaWVsZHM6IFwiaWQsZmlyc3RfbmFtZSxsYXN0X25hbWUsZW1haWwsbGluayxnZW5kZXIsbG9jYWxlLHBpY3R1cmVcIixcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIGZybTogcGhwTFIubG9naW5mcm0sXHJcbiAgICAgICAgZnJtX25hbWU6IFwibG9naW4tZnJtXCIsXHJcbiAgICAgICAgdXJsOiBcInVzZXJzL2ZibG9naW5cIixcclxuICAgICAgICBmcmVlZGF0YTogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpLFxyXG4gICAgICB9O1xyXG4gICAgICBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgTWFuYWdlTG9naW5SZXNwb25zZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy9Gb3Jnb3QgcGFzc3dvcmQgcmVxdWVzdFxyXG4gIHBocExSLmZvcmdvdGZybS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHBocExSLmZvcmdvdGZybS5maW5kKFwiI2ZvcmdvdC1idG5cIikudmFsKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgdXJsOiBcInVzZXJzL2ZvcmdvdFwiLFxyXG4gICAgICBmcm06IHBocExSLmZvcmdvdGZybSxcclxuICAgICAgZnJtX25hbWU6IFwiZm9yZ290LWZybVwiLFxyXG4gICAgfTtcclxuICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBNUmVzcG9uc2UpO1xyXG4gICAgZnVuY3Rpb24gTVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICAgIHZhciByZGF0YSA9IHtcclxuICAgICAgICBmcm06IHBocExSLmZvcmdvdGZybSxcclxuICAgICAgICBhbGVydGlkOiBwaHBMUi5mb3Jnb3Rmcm0uZmluZChcIiNmb3Jnb3RBbGVydFwiKSxcclxuICAgICAgICBhbGVydHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICAgIE1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCByZGF0YSk7XHJcbiAgICAgIHBocExSLmZvcmdvdGZybS5maW5kKFwiI2ZvcmdvdC1idG5cIikudmFsKFwiUmVzZXQgcGFzc3dvcmRcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQWpheCBsb2dvdXQgZnJvbSBlbHNld2hlcmVcclxuICB2YXIgbG9nb3V0ID0gJChcImE6Y29udGFpbnMoJ0xvZ291dCcpXCIpO1xyXG4gICQobG9nb3V0KS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgRkIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgRkIubG9nb3V0KCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAvLyBsb2dnZWQgb3V0XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIFwidXNlcnMvbG9nb3V0XCIsXHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZSA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIGxvZ291dC5jbG9zZXN0KFwiZGl2XCIpLmxvYWQobG9jYXRpb24uaHJlZiArIFwiIC5jb25uZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG4kLmZuLnBocExSID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICBuZXcgUGhwTFIodGhpcyk7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcbiQoXCIjTG9naW4tUmVnaXN0ZXItU3lzdGVtXCIpLnBocExSKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=