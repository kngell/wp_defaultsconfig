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
/* harmony export */   "addCategorrie": function() { return /* binding */ addCategorrie; },
/* harmony export */   "select2AjaxParams": function() { return /* binding */ select2AjaxParams; }
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config */ "./src/assets/js/core/config.js");
/* harmony import */ var _inputErrManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inputErrManager */ "./src/assets/js/core/inputErrManager.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








 //display all details

function displayAllDetails(data, gestion) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_7__.BASE_URL + data.url,
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
    url: _config__WEBPACK_IMPORTED_MODULE_7__.BASE_URL + data.url,
    method: "post",
    data: data.formData,
    success: function success(response) {
      gestion(response);
    }
  });
} //display all Items

function displayAllItems(data) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_7__.BASE_URL + data.url,
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
    url: _config__WEBPACK_IMPORTED_MODULE_7__.BASE_URL + data.url,
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
    url: _config__WEBPACK_IMPORTED_MODULE_7__.BASE_URL + data.url,
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
      (0,_inputErrManager__WEBPACK_IMPORTED_MODULE_8__.add_inputs_errors)((0,_inputErrManager__WEBPACK_IMPORTED_MODULE_8__.inputsArray)(data.frm), (0,_inputErrManager__WEBPACK_IMPORTED_MODULE_8__.error)(data.frm, response.msg));
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
        url: _config__WEBPACK_IMPORTED_MODULE_7__.BASE_URL + data.url,
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
        url: _config__WEBPACK_IMPORTED_MODULE_7__.BASE_URL + data.url_check,
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
    url: _config__WEBPACK_IMPORTED_MODULE_7__.BASE_URL + "forms/fillMultiselect",
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
      url: _config__WEBPACK_IMPORTED_MODULE_7__.BASE_URL + "forms/addcategorie",
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
    url: _config__WEBPACK_IMPORTED_MODULE_7__.BASE_URL + _data.url,
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
        // var data = $.map(response.msg, function (obj) {
        //   obj.id = obj.id || obj.text; // replace pk with your identifier
        //   return obj;
        // });
        // //console.log(data);
        return {
          results: $.map(response.msg, function (obj) {
            if (obj.id != 0) {
              console.log(obj);
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
        }; // return {
        //   results: data,
        // };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9mb3JtX2NydWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2lucHV0RXJyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvdmlzaXRvcnMuanMiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJpc0lFIiwidXNlckFnZW50IiwibmF2aWdhdG9yIiwidGVzdCIsImRpc3BsYXlBbGxEZXRhaWxzIiwiZGF0YSIsImdlc3Rpb24iLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsInRhYmxlIiwiaWQiLCJ1c2VyIiwic2Vzc2lvbl9pZCIsImRhdGFfdHlwZSIsInJldHVybl9tb2RlIiwidG9rZW4iLCJmcm1fbmFtZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInBhcmFtcyIsImVkaXRGb3JtIiwiZm9ybURhdGEiLCJkaXNwbGF5QWxsSXRlbXMiLCJzdGFydCIsIm1heCIsInF1ZXJ5IiwicGFnZSIsInBhZ2luYXRpb24iLCJyZXN1bHQiLCJkaXNwbGF5aWQiLCJodG1sIiwibXNnIiwiZGF0YXRhYmxlIiwibG9hZERhdGF0YWJsZXMiLCJEYXRhVGFibGUiLCJvcmRlciIsIkFkZCIsIkZvcm1EYXRhIiwiZnJtIiwiYXBwZW5kIiwibm90aWZpY2F0aW9uIiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwiaW1hZ2VVcmxzQXJ5IiwiY2FjaGUiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwiQ2FsbF9jb250cm9sbGVyIiwidXJsX2RhdGEiLCJhY3Rpb24iLCJmcmVlZGF0YSIsInVzZXJfaWQiLCJzZWxlY3QyIiwiTWFuYWdlUmVzcG9uc2UiLCJhZGRfaW5wdXRzX2Vycm9ycyIsImlucHV0c0FycmF5IiwiZXJyb3IiLCJ0cmlnZ2VyIiwibG9naW4iLCJsb2dpbmJveCIsIm1vZGFsIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJzd2FsIiwibW9kYWxib3giLCJmaXJlIiwiYWxlcnRzdWNjZXNzIiwiYWxlcnRpZCIsImhhc093blByb3BlcnR5IiwiaW1nYXJlYSIsImF0dHIiLCJpbWd2YWx1ZSIsInByZXBlbmQiLCJuZXN0ZWQiLCJiZWZvcmUiLCJoaWRlIiwiZGlzcGxheSIsIkRlbGV0ZSIsImRpc3BsYXlJdGVtIiwiY2hlY2tCZWZvcmVEZWxldGUiLCJ0aGVuIiwidmFsdWUiLCJhbGVydElEIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cmxfY2hlY2siLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiZG9uZSIsImZhaWwiLCJkaXNwbGF5TXVsdGlzZWxsZWN0IiwiZGlzcGxheUlEIiwiYWRkQ2F0ZWdvcnJpZSIsImNhdEZpZWxkIiwiY2F0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwiYWxlcnQiLCJjYXRlZ29yaWUiLCJzZWxlY3QyQWpheFBhcmFtcyIsInR5cGUiLCJkYXRhVHlwZSIsImRlbGF5Iiwic2VhcmNoVGVybSIsInRlcm0iLCJwcm9jZXNzUmVzdWx0cyIsInJlc3VsdHMiLCJtYXAiLCJvYmoiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsIklucHV0QXJyIiwiYXJyRXJyIiwiZm9yRWFjaCIsImlucHV0IiwiaW5kZXhPZiIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm5leHRFbGVtZW50U2libGluZyIsImlubmVySFRNTCIsInJlc2V0X2ludmFsaWRfaW5wdXQiLCJmb3JtIiwiZmluZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlSW52YWxpZElucHV0IiwiTXlmb3JtIiwib24iLCJwYXJlbnQiLCJjaGlsZHJlbiIsIklucHV0RXJyIiwiT2JqZWN0IiwiZW50cmllcyIsImtleSIsImFkZENsYXNzIiwicHVzaCIsImFyciIsImVhY2giLCJpbnB1dHNBcnIiLCJ0b0FycmF5IiwiZ2V0X3Zpc2l0b3JzX2RhdGEiLCJpcCIsInZhbCIsInNlbmRfdmlzaXRvcnNfZGF0YSIsIm1hbmFnZVIiLCJjb29raWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxvQkFBakI7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ3hCLE1BQUlDLFNBQVMsR0FBR0MsU0FBUyxDQUFDRCxTQUExQjtBQUNBLFNBQU8sZUFBZUUsSUFBZixDQUFvQkYsU0FBcEIsQ0FBUDtBQUNELENBSE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtDQUdBOztBQUNPLFNBQVNHLGlCQUFULENBQTJCQyxJQUEzQixFQUFpQ0MsT0FBakMsRUFBMEM7QUFDL0NDLEdBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRVYsNkNBQVEsR0FBR00sSUFBSSxDQUFDSSxHQURoQjtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdMTCxRQUFJLEVBQUU7QUFDSk0sV0FBSyxFQUFFTixJQUFJLENBQUNNLEtBRFI7QUFFSkMsUUFBRSxFQUFFUCxJQUFJLENBQUNPLEVBRkw7QUFHSkMsVUFBSSxFQUFFUixJQUFJLENBQUNRLElBQUwsR0FBWVIsSUFBSSxDQUFDUSxJQUFqQixHQUF3QixFQUgxQjtBQUlKQyxnQkFBVSxFQUFFVCxJQUFJLENBQUNTLFVBQUwsR0FBa0JULElBQUksQ0FBQ1MsVUFBdkIsR0FBb0MsRUFKNUM7QUFLSkMsZUFBUyxFQUFFVixJQUFJLENBQUNVLFNBQUwsR0FBaUJWLElBQUksQ0FBQ1UsU0FBdEIsR0FBa0MsRUFMekM7QUFNSkMsaUJBQVcsRUFBRVgsSUFBSSxDQUFDVyxXQUFMLEdBQW1CWCxJQUFJLENBQUNXLFdBQXhCLEdBQXNDLEVBTi9DO0FBT0pDLFdBQUssRUFBRVosSUFBSSxDQUFDWSxLQUFMLEdBQWFaLElBQUksQ0FBQ1ksS0FBbEIsR0FBMEIsRUFQN0I7QUFRSkMsY0FBUSxFQUFFYixJQUFJLENBQUNhLFFBQUwsR0FBZ0JiLElBQUksQ0FBQ2EsUUFBckIsR0FBZ0M7QUFSdEMsS0FIRDtBQWFMQyxXQUFPLEVBQUUsaUJBQVVDLFFBQVYsRUFBb0I7QUFDM0JkLGFBQU8sQ0FBQ2MsUUFBRCxFQUFXZixJQUFJLENBQUNnQixNQUFMLEdBQWNoQixJQUFJLENBQUNnQixNQUFuQixHQUE0QixFQUF2QyxDQUFQO0FBQ0Q7QUFmSSxHQUFQO0FBaUJELEMsQ0FDRDs7QUFDTyxTQUFTQyxRQUFULENBQWtCakIsSUFBbEIsRUFBd0JDLE9BQXhCLEVBQWlDO0FBQ3RDQyxHQUFDLENBQUNDLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVWLDZDQUFRLEdBQUdNLElBQUksQ0FBQ0ksR0FEaEI7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTEwsUUFBSSxFQUFFQSxJQUFJLENBQUNrQixRQUhOO0FBSUxKLFdBQU8sRUFBRSxpQkFBVUMsUUFBVixFQUFvQjtBQUMzQmQsYUFBTyxDQUFDYyxRQUFELENBQVA7QUFDRDtBQU5JLEdBQVA7QUFRRCxDLENBRUQ7O0FBQ08sU0FBU0ksZUFBVCxDQUF5Qm5CLElBQXpCLEVBQStCO0FBQ3BDRSxHQUFDLENBQUNDLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVWLDZDQUFRLEdBQUdNLElBQUksQ0FBQ0ksR0FEaEI7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTEwsUUFBSSxFQUFFO0FBQ0pNLFdBQUssRUFBRU4sSUFBSSxDQUFDTSxLQURSO0FBRUpDLFFBQUUsRUFBRVAsSUFBSSxDQUFDTyxFQUFMLElBQVcsRUFBWCxHQUFnQlAsSUFBSSxDQUFDTyxFQUFyQixHQUEwQixFQUYxQjtBQUdKYSxXQUFLLEVBQUUsQ0FISDtBQUlKQyxTQUFHLEVBQUVyQixJQUFJLENBQUNxQixHQUFMLElBQVksRUFBWixHQUFpQnJCLElBQUksQ0FBQ3FCLEdBQXRCLEdBQTRCLEVBSjdCO0FBS0piLFVBQUksRUFBRVIsSUFBSSxDQUFDUSxJQUFMLElBQWEsRUFBYixHQUFrQlIsSUFBSSxDQUFDUSxJQUF2QixHQUE4QixFQUxoQztBQU1KYyxXQUFLLEVBQUV0QixJQUFJLENBQUNzQixLQUFMLElBQWMsRUFBZCxHQUFtQnRCLElBQUksQ0FBQ3NCLEtBQXhCLEdBQWdDLEVBTm5DO0FBT0pDLFVBQUksRUFBRXZCLElBQUksQ0FBQ3VCLElBQUwsSUFBYSxFQUFiLEdBQWtCdkIsSUFBSSxDQUFDdUIsSUFBdkIsR0FBOEIsRUFQaEM7QUFRSkMsZ0JBQVUsRUFBRXhCLElBQUksQ0FBQ3dCLFVBQUwsSUFBbUIsRUFBbkIsR0FBd0J4QixJQUFJLENBQUN3QixVQUE3QixHQUEwQyxFQVJsRDtBQVNKZCxlQUFTLEVBQUVWLElBQUksQ0FBQ1UsU0FBTCxHQUFpQlYsSUFBSSxDQUFDVSxTQUF0QixHQUFrQyxFQVR6QztBQVVKQyxpQkFBVyxFQUFFWCxJQUFJLENBQUNXLFdBQUwsR0FBbUJYLElBQUksQ0FBQ1csV0FBeEIsR0FBc0M7QUFWL0MsS0FIRDtBQWVMRyxXQUFPLEVBQUUsaUJBQVVDLFFBQVYsRUFBb0I7QUFDM0IsVUFBSUEsUUFBUSxDQUFDVSxNQUFULElBQW1CLFNBQXZCLEVBQWtDO0FBQ2hDO0FBQ0EsWUFBSXpCLElBQUksQ0FBQ00sS0FBTCxLQUFlLFVBQW5CLEVBQStCO0FBQzdCTixjQUFJLENBQUMwQixTQUFMLENBQWVDLElBQWYsQ0FBb0JaLFFBQVEsQ0FBQ2EsR0FBN0I7QUFDRCxTQUZELE1BRU87QUFDTDVCLGNBQUksQ0FBQzBCLFNBQUwsQ0FBZUMsSUFBZixDQUFvQlosUUFBUSxDQUFDYSxHQUE3QjtBQUNBLGNBQUk1QixJQUFJLENBQUM2QixTQUFULEVBQW9CQyxjQUFjO0FBQ25DO0FBQ0YsT0FSRCxNQVFPO0FBQ0w1QixTQUFDLENBQUNGLElBQUksQ0FBQzBCLFNBQU4sQ0FBRCxDQUFrQkMsSUFBbEIsQ0FBdUJaLFFBQVEsQ0FBQ2EsR0FBaEM7QUFDRDtBQUNGO0FBM0JJLEdBQVA7QUE2QkQ7O1NBQ2NFLGM7O0VBUWY7Ozs7NEVBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDMEIseU1BRDFCOztBQUFBO0FBQ1FDLHFCQURSO0FBSUU3QixhQUFDLENBQUMsT0FBRCxDQUFELENBQVc2QixTQUFYLENBQXFCO0FBQ25CQyxtQkFBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLE1BQUo7QUFEWSxhQUFyQjs7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBU08sU0FBU0MsR0FBVCxDQUFhakMsSUFBYixFQUFtQkMsT0FBbkIsRUFBNEI7QUFDakMsTUFBSWlCLFFBQVEsR0FBRyxJQUFJZ0IsUUFBSixDQUFhbEMsSUFBSSxDQUFDbUMsR0FBTCxDQUFTLENBQVQsQ0FBYixDQUFmO0FBQ0FqQixVQUFRLENBQUNrQixNQUFULENBQWdCLE9BQWhCLEVBQXlCcEMsSUFBSSxDQUFDTSxLQUE5QjtBQUNBWSxVQUFRLENBQUNrQixNQUFULENBQWdCLGNBQWhCLEVBQWdDcEMsSUFBSSxDQUFDcUMsWUFBckM7QUFDQW5CLFVBQVEsQ0FBQ2tCLE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEJwQyxJQUFJLENBQUNhLFFBQWpDO0FBQ0EsTUFBSWIsSUFBSSxDQUFDc0MsVUFBVCxFQUFxQnBCLFFBQVEsQ0FBQ2tCLE1BQVQsQ0FBZ0IsWUFBaEIsRUFBOEJwQyxJQUFJLENBQUNzQyxVQUFuQztBQUNyQixNQUFJdEMsSUFBSSxDQUFDdUMsUUFBVCxFQUFtQnJCLFFBQVEsQ0FBQ2tCLE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEJwQyxJQUFJLENBQUN1QyxRQUFqQztBQUNuQixNQUFJdkMsSUFBSSxDQUFDd0MsWUFBVCxFQUF1QnRCLFFBQVEsQ0FBQ2tCLE1BQVQsQ0FBZ0IsY0FBaEIsRUFBZ0NwQyxJQUFJLENBQUN3QyxZQUFyQztBQUN2QnRDLEdBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRVYsNkNBQVEsR0FBR00sSUFBSSxDQUFDSSxHQURoQjtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdMTCxRQUFJLEVBQUVrQixRQUhEO0FBSUx1QixTQUFLLEVBQUUsS0FKRjtBQUtMQyxlQUFXLEVBQUUsS0FMUjtBQU1MQyxlQUFXLEVBQUUsS0FOUjtBQU9MN0IsV0FBTyxFQUFFLGlCQUFVQyxRQUFWLEVBQW9CO0FBQzNCZCxhQUFPLENBQUNjLFFBQUQsRUFBV2YsSUFBSSxDQUFDZ0IsTUFBTCxHQUFjaEIsSUFBSSxDQUFDZ0IsTUFBbkIsR0FBNEIsRUFBdkMsQ0FBUDtBQUNEO0FBVEksR0FBUDtBQVdELEMsQ0FDRDs7QUFDTyxTQUFTNEIsZUFBVCxDQUF5QjVDLElBQXpCLEVBQStCQyxPQUEvQixFQUF3QztBQUM3QyxNQUFJaUIsUUFBUSxHQUFHLElBQUlnQixRQUFKLENBQWFsQyxJQUFJLENBQUNtQyxHQUFMLENBQVMsQ0FBVCxDQUFiLENBQWY7QUFDQWpCLFVBQVEsQ0FBQ2tCLE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEJwQyxJQUFJLENBQUNhLFFBQWpDO0FBQ0EsTUFBSWIsSUFBSSxDQUFDTSxLQUFULEVBQWdCWSxRQUFRLENBQUNrQixNQUFULENBQWdCLE9BQWhCLEVBQXlCcEMsSUFBSSxDQUFDTSxLQUE5QjtBQUNoQixNQUFJTixJQUFJLENBQUNxQyxZQUFULEVBQXVCbkIsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixjQUFoQixFQUFnQ3BDLElBQUksQ0FBQ3FDLFlBQXJDO0FBQ3ZCLE1BQUlyQyxJQUFJLENBQUM2QyxRQUFULEVBQW1CM0IsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixVQUFoQixFQUE0QnBDLElBQUksQ0FBQzZDLFFBQWpDO0FBQ25CLE1BQUk3QyxJQUFJLENBQUM4QyxNQUFULEVBQWlCNUIsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixRQUFoQixFQUEwQnBDLElBQUksQ0FBQzhDLE1BQS9CO0FBQ2pCLE1BQUk5QyxJQUFJLENBQUN3QyxZQUFULEVBQXVCdEIsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixjQUFoQixFQUFnQ3BDLElBQUksQ0FBQ3dDLFlBQXJDO0FBQ3ZCLE1BQUl4QyxJQUFJLENBQUMrQyxRQUFULEVBQW1CN0IsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixVQUFoQixFQUE0QnBDLElBQUksQ0FBQytDLFFBQWpDO0FBQ25CLE1BQUkvQyxJQUFJLENBQUNzQyxVQUFULEVBQXFCcEIsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixZQUFoQixFQUE4QnBDLElBQUksQ0FBQ3NDLFVBQW5DO0FBQ3JCLE1BQUl0QyxJQUFJLENBQUN1QyxRQUFULEVBQW1CckIsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixVQUFoQixFQUE0QnBDLElBQUksQ0FBQ3VDLFFBQWpDO0FBQ25CLE1BQUl2QyxJQUFJLENBQUNPLEVBQVQsRUFBYVcsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixJQUFoQixFQUFzQnBDLElBQUksQ0FBQ08sRUFBM0I7QUFDYixNQUFJUCxJQUFJLENBQUNnRCxPQUFULEVBQWtCOUIsUUFBUSxDQUFDa0IsTUFBVCxDQUFnQixJQUFoQixFQUFzQnBDLElBQUksQ0FBQ2dELE9BQTNCO0FBQ2xCLE1BQUloRCxJQUFJLENBQUNLLE1BQVQsRUFBaUJhLFFBQVEsQ0FBQ2tCLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEJwQyxJQUFJLENBQUNLLE1BQS9CO0FBQ2pCLE1BQUlMLElBQUksQ0FBQ2lELE9BQVQsRUFBa0IvQixRQUFRLENBQUNrQixNQUFULENBQWdCLFNBQWhCLEVBQTJCcEMsSUFBSSxDQUFDaUQsT0FBaEM7QUFDbEIvQyxHQUFDLENBQUNDLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVWLDZDQUFRLEdBQUdNLElBQUksQ0FBQ0ksR0FEaEI7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTHFDLGVBQVcsRUFBRSxLQUhSO0FBSUxDLGVBQVcsRUFBRSxLQUpSO0FBS0wzQyxRQUFJLEVBQUVrQixRQUxEO0FBTUxKLFdBQU8sRUFBRSxpQkFBVUMsUUFBVixFQUFvQjtBQUMzQmQsYUFBTyxDQUFDYyxRQUFELEVBQVdmLElBQUksQ0FBQ2dCLE1BQUwsR0FBY2hCLElBQUksQ0FBQ2dCLE1BQW5CLEdBQTRCLEVBQXZDLENBQVA7QUFDRDtBQVJJLEdBQVA7QUFVRCxDLENBQ0Q7O0FBQ08sU0FBU2tDLGNBQVQsQ0FBd0JuQyxRQUF4QixFQUFrQ2YsSUFBbEMsRUFBd0M7QUFDN0MsVUFBUWUsUUFBUSxDQUFDVSxNQUFqQjtBQUNFLFNBQUssYUFBTDtBQUNFMEIseUVBQWlCLENBQUNDLDZEQUFXLENBQUNwRCxJQUFJLENBQUNtQyxHQUFOLENBQVosRUFBd0JrQix1REFBSyxDQUFDckQsSUFBSSxDQUFDbUMsR0FBTixFQUFXcEIsUUFBUSxDQUFDYSxHQUFwQixDQUE3QixDQUFqQjtBQUNBOztBQUNGLFNBQUssU0FBTDtBQUNFNUIsVUFBSSxDQUFDbUMsR0FBTCxDQUFTbUIsT0FBVCxDQUFpQixPQUFqQjs7QUFDQSxVQUFJdEQsSUFBSSxDQUFDdUQsS0FBVCxFQUFnQjtBQUNkdkQsWUFBSSxDQUFDd0QsUUFBTCxDQUFjQyxLQUFkLENBQW9CLE1BQXBCO0FBQ0FDLGNBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7QUFDRDs7QUFDRCxVQUFJNUQsSUFBSSxDQUFDNkQsSUFBVCxFQUFlO0FBQ2I3RCxZQUFJLENBQUM4RCxRQUFMLENBQWNMLEtBQWQsQ0FBb0IsTUFBcEI7QUFDQXpELFlBQUksQ0FBQzZELElBQUwsQ0FBVUUsSUFBVixDQUFlLFVBQWYsRUFBMkJoRCxRQUFRLENBQUNhLEdBQXBDLEVBQXlDLFNBQXpDO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsWUFBSTVCLElBQUksQ0FBQ2dFLFlBQVQsRUFBdUJoRSxJQUFJLENBQUNpRSxPQUFMLENBQWF0QyxJQUFiLENBQWtCWixRQUFRLENBQUNhLEdBQTNCO0FBQ3hCOztBQUNELFVBQUk1QixJQUFJLENBQUNrRSxjQUFMLENBQW9CLFNBQXBCLENBQUosRUFBb0M7QUFDbENsRSxZQUFJLENBQUNtRSxPQUFMLENBQWFDLElBQWIsQ0FBa0IsS0FBbEIsRUFBeUJwRSxJQUFJLENBQUNxRSxRQUE5QjtBQUNEOztBQUNELFVBQUlyRSxJQUFJLENBQUNzRSxPQUFULEVBQWtCO0FBQ2hCdEUsWUFBSSxDQUFDdUUsTUFBTCxDQUFZRCxPQUFaLENBQW9CdkQsUUFBUSxDQUFDYSxHQUE3QjtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUk1QixJQUFJLENBQUNzRSxPQUFMLEtBQWlCLEtBQXJCLEVBQTRCO0FBQzFCdEUsY0FBSSxDQUFDdUUsTUFBTCxDQUFZQyxNQUFaLENBQW1CekQsUUFBUSxDQUFDYSxHQUE1QjtBQUNBNUIsY0FBSSxDQUFDdUUsTUFBTCxDQUFZRSxJQUFaO0FBQ0Q7QUFDRjs7QUFDRCxVQUFJekUsSUFBSSxDQUFDMEUsT0FBVCxFQUFrQjFFLElBQUksQ0FBQzBFLE9BQUw7QUFDbEI7O0FBQ0YsU0FBSyxPQUFMO0FBQ0UxRSxVQUFJLENBQUNpRSxPQUFMLENBQWF0QyxJQUFiLENBQWtCWixRQUFRLENBQUNhLEdBQTNCO0FBQ0E1QixVQUFJLENBQUNtQyxHQUFMLENBQVNtQixPQUFULENBQWlCLE9BQWpCO0FBQ0E7QUFoQ0o7QUFrQ0QsQyxDQUVEOztBQUNPLFNBQVNxQixNQUFULENBQWdCM0UsSUFBaEIsRUFBc0I0RSxXQUF0QixFQUFtQztBQUN4Q0MsbUJBQWlCLENBQUM3RSxJQUFELENBQWpCLENBQXdCOEUsSUFBeEIsQ0FBNkIsVUFBQ3JELE1BQUQsRUFBWTtBQUN2QyxRQUFJQSxNQUFNLENBQUNzRCxLQUFYLEVBQWtCO0FBQ2hCN0UsT0FBQyxDQUFDQyxJQUFGLENBQU87QUFDTEMsV0FBRyxFQUFFViw2Q0FBUSxHQUFHTSxJQUFJLENBQUNJLEdBRGhCO0FBRUxDLGNBQU0sRUFBRSxNQUZIO0FBR0xMLFlBQUksRUFBRTtBQUNKTyxZQUFFLEVBQUVQLElBQUksQ0FBQ08sRUFETDtBQUVKRCxlQUFLLEVBQUVOLElBQUksQ0FBQ00sS0FGUjtBQUdKK0Isc0JBQVksRUFBRXJDLElBQUksQ0FBQ3FDO0FBSGYsU0FIRDtBQVFMdkIsZUFBTyxFQUFFLGlCQUFVQyxRQUFWLEVBQW9CO0FBQzNCLGNBQUlBLFFBQVEsQ0FBQ1UsTUFBVCxLQUFvQixTQUF4QixFQUFtQztBQUNqQ3pCLGdCQUFJLENBQUM2RCxJQUFMLEdBQ0k3RCxJQUFJLENBQUM2RCxJQUFMLENBQVVFLElBQVYsQ0FBZSxVQUFmLEVBQTJCaEQsUUFBUSxDQUFDYSxHQUFwQyxFQUF5QyxTQUF6QyxDQURKLEdBRUksRUFGSjtBQUdBZ0QsdUJBQVcsQ0FBQzVFLElBQUksQ0FBQ2dCLE1BQUwsR0FBY2hCLElBQUksQ0FBQ2dCLE1BQW5CLEdBQTRCLEVBQTdCLENBQVg7QUFDRCxXQUxELE1BS087QUFDTGhCLGdCQUFJLENBQUNnRixPQUFMLENBQWFyRCxJQUFiLENBQWtCWixRQUFRLENBQUNhLEdBQTNCO0FBQ0Q7QUFDRjtBQWpCSSxPQUFQO0FBbUJEO0FBQ0YsR0F0QkQ7QUF1QkQsQyxDQUNEOztBQUNBLFNBQVNpRCxpQkFBVCxDQUEyQjdFLElBQTNCLEVBQWlDO0FBQy9CLFNBQU8sSUFBSWlGLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsUUFBSSxDQUFDbkYsSUFBSSxDQUFDb0YsU0FBVixFQUFxQjtBQUNuQnBGLFVBQUksQ0FBQzZELElBQUwsQ0FDR0UsSUFESCxDQUNRO0FBQ0pzQixhQUFLLEVBQUUsZUFESDtBQUVKQyx3QkFBZ0IsRUFBRSxJQUZkO0FBR0ozRCxZQUFJLEVBQUUsMENBSEY7QUFJSjRELDBCQUFrQixFQUFFLFNBSmhCO0FBS0pDLHlCQUFpQixFQUFFLE1BTGY7QUFNSkMseUJBQWlCLEVBQUU7QUFOZixPQURSLEVBU0dYLElBVEgsQ0FTUSxVQUFDckQsTUFBRCxFQUFZO0FBQ2hCeUQsZUFBTyxDQUFDekQsTUFBRCxDQUFQO0FBQ0QsT0FYSDtBQVlELEtBYkQsTUFhTztBQUNMdkIsT0FBQyxDQUFDQyxJQUFGLENBQU87QUFDTEMsV0FBRyxFQUFFViw2Q0FBUSxHQUFHTSxJQUFJLENBQUNvRixTQURoQjtBQUVML0UsY0FBTSxFQUFFLE1BRkg7QUFHTEwsWUFBSSxFQUFFO0FBQ0pPLFlBQUUsRUFBRVAsSUFBSSxDQUFDTyxFQURMO0FBRUpELGVBQUssRUFBRU4sSUFBSSxDQUFDTSxLQUZSO0FBR0orQixzQkFBWSxFQUFFckMsSUFBSSxDQUFDcUM7QUFIZjtBQUhELE9BQVAsRUFTR3FELElBVEgsQ0FTUSxVQUFDM0UsUUFBRCxFQUFjO0FBQ2xCZixZQUFJLENBQUM2RCxJQUFMLENBQ0dFLElBREgsQ0FDUTtBQUNKc0IsZUFBSyxFQUFFLGVBREg7QUFFSkMsMEJBQWdCLEVBQUUsSUFGZDtBQUdKM0QsY0FBSSxFQUFFLDZDQUE2Q1osUUFBUSxDQUFDYSxHQUh4RDtBQUlKMkQsNEJBQWtCLEVBQUUsU0FKaEI7QUFLSkMsMkJBQWlCLEVBQUUsTUFMZjtBQU1KQywyQkFBaUIsRUFBRTtBQU5mLFNBRFIsRUFTR1gsSUFUSCxDQVNRLFVBQUNyRCxNQUFELEVBQVk7QUFDaEJ5RCxpQkFBTyxDQUFDekQsTUFBRCxDQUFQO0FBQ0QsU0FYSDtBQVlELE9BdEJILEVBdUJHa0UsSUF2QkgsQ0F1QlEsVUFBQ3RDLEtBQUQsRUFBVztBQUNmOEIsY0FBTSxDQUFDOUIsS0FBRCxDQUFOO0FBQ0QsT0F6Qkg7QUEwQkQ7QUFDRixHQTFDTSxDQUFQO0FBMkNEOztBQUNNLFNBQVN1QyxtQkFBVCxDQUE2QjVGLElBQTdCLEVBQW1DO0FBQ3hDRSxHQUFDLENBQUNDLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVWLDZDQUFRLEdBQUcsdUJBRFg7QUFFTFcsVUFBTSxFQUFFLE1BRkg7QUFHTEwsUUFBSSxFQUFFO0FBQ0pNLFdBQUssRUFBRU4sSUFBSSxDQUFDTTtBQURSLEtBSEQ7QUFNTFEsV0FBTyxFQUFFLGlCQUFVQyxRQUFWLEVBQW9CO0FBQzNCLFVBQUlBLFFBQVEsQ0FBQ1UsTUFBVCxLQUFvQixTQUF4QixFQUFtQztBQUNqQ3pCLFlBQUksQ0FBQzZGLFNBQUwsQ0FBZXpELE1BQWYsQ0FBc0JyQixRQUFRLENBQUNhLEdBQS9CO0FBQ0QsT0FGRCxNQUVPO0FBQ0w1QixZQUFJLENBQUNnRixPQUFMLENBQWFyRCxJQUFiLENBQWtCWixRQUFRLENBQUNhLEdBQTNCO0FBQ0Q7QUFDRjtBQVpJLEdBQVA7QUFjRDtBQUVNLFNBQVNrRSxhQUFULENBQXVCQyxRQUF2QixFQUFpQ2YsT0FBakMsRUFBMEM7QUFDL0MsTUFBSWdCLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCSCxRQUF2QixDQUFWOztBQUNBLE1BQUlDLEdBQUcsQ0FBQ2pCLEtBQUosQ0FBVW9CLE1BQVYsSUFBb0IsQ0FBeEIsRUFBMkI7QUFDekJDLFNBQUssQ0FBQyw4QkFBRCxDQUFMO0FBQ0QsR0FGRCxNQUVPO0FBQ0xsRyxLQUFDLENBQUNDLElBQUYsQ0FBTztBQUNMQyxTQUFHLEVBQUVWLDZDQUFRLEdBQUcsb0JBRFg7QUFFTFcsWUFBTSxFQUFFLE1BRkg7QUFHTEwsVUFBSSxFQUFFO0FBQ0pxRyxpQkFBUyxFQUFFTCxHQUFHLENBQUNqQjtBQURYLE9BSEQ7QUFNTGpFLGFBQU8sRUFBRSxpQkFBVUMsUUFBVixFQUFvQjtBQUMzQixZQUFJQSxRQUFRLElBQUksU0FBaEIsRUFBMkI7QUFDekJiLFdBQUMsQ0FBQzhFLE9BQUQsQ0FBRCxDQUFXckQsSUFBWCxDQUFnQlosUUFBaEI7QUFDRDtBQUNGO0FBVkksS0FBUDtBQVlEO0FBQ0Y7QUFDTSxTQUFTdUYsaUJBQVQsQ0FBMkJ0RyxLQUEzQixFQUFpQztBQUN0QyxTQUFPO0FBQ0xJLE9BQUcsRUFBRVYsNkNBQVEsR0FBR00sS0FBSSxDQUFDSSxHQURoQjtBQUVMbUcsUUFBSSxFQUFFLE1BRkQ7QUFHTEMsWUFBUSxFQUFFLE1BSEw7QUFJTEMsU0FBSyxFQUFFLEdBSkY7QUFLTHpHLFFBQUksRUFBRSxjQUFVZ0IsTUFBVixFQUFrQjtBQUN0QixhQUFPO0FBQ0wwRixrQkFBVSxFQUFFMUYsTUFBTSxDQUFDMkYsSUFEZDtBQUNvQjtBQUN6QnJHLGFBQUssRUFBRU4sS0FBSSxDQUFDTSxLQUFMLElBQWMsRUFBZCxHQUFtQk4sS0FBSSxDQUFDTSxLQUF4QixHQUFnQyxFQUZsQztBQUdMSSxpQkFBUyxFQUFFVixLQUFJLENBQUNVLFNBQUwsSUFBa0IsRUFBbEIsR0FBdUJWLEtBQUksQ0FBQ1UsU0FBNUIsR0FBd0M7QUFIOUMsT0FBUDtBQUtELEtBWEk7QUFZTGtHLGtCQUFjLEVBQUUsd0JBQVU3RixRQUFWLEVBQW9CO0FBQ2xDLFVBQUlBLFFBQVEsQ0FBQ1UsTUFBVCxJQUFtQixTQUF2QixFQUFrQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsZUFBTztBQUNMb0YsaUJBQU8sRUFBRTNHLENBQUMsQ0FBQzRHLEdBQUYsQ0FBTS9GLFFBQVEsQ0FBQ2EsR0FBZixFQUFvQixVQUFVbUYsR0FBVixFQUFlO0FBQzFDLGdCQUFJQSxHQUFHLENBQUN4RyxFQUFKLElBQVUsQ0FBZCxFQUFpQjtBQUNmeUcscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0EscUJBQU87QUFBRXhHLGtCQUFFLEVBQUV3RyxHQUFHLENBQUN4RyxFQUFWO0FBQWMyRyxvQkFBSSxFQUFFSCxHQUFHLENBQUNHO0FBQXhCLGVBQVA7QUFDRCxhQUhELE1BR087QUFDTCxxQkFBTztBQUFFM0csa0JBQUUsRUFBRXdHLEdBQUcsQ0FBQ3hHLEVBQVY7QUFBYzJHLG9CQUFJLEVBQUVILEdBQUcsQ0FBQ0c7QUFBeEIsZUFBUDtBQUNEO0FBQ0YsV0FQUTtBQURKLFNBQVAsQ0FQZ0MsQ0FrQmhDO0FBQ0E7QUFDQTtBQUNEO0FBQ0YsS0FuQ0k7QUFvQ0x6RSxTQUFLLEVBQUU7QUFwQ0YsR0FBUDtBQXNDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BUTSxJQUFNVSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNnRSxRQUFELEVBQVdDLE1BQVgsRUFBc0I7QUFDckRELFVBQVEsQ0FBQ0UsT0FBVCxDQUFpQixVQUFDQyxLQUFELEVBQVc7QUFDMUIsUUFBSUYsTUFBTSxDQUFDRyxPQUFQLENBQWVELEtBQUssQ0FBQy9HLEVBQXJCLEtBQTRCLENBQUMsQ0FBakMsRUFBb0M7QUFDbEMrRyxXQUFLLENBQUNFLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCLFlBQXZCO0FBQ0FILFdBQUssQ0FBQ0ksa0JBQU4sQ0FBeUJDLFNBQXpCLEdBQXFDLEVBQXJDO0FBQ0Q7QUFDRixHQUxEO0FBTUQsQ0FQTTtBQVNBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQzNDQSxNQUFJLENBQUNDLElBQUwsQ0FBVSxhQUFWLEVBQXlCQyxXQUF6QixDQUFxQyxZQUFyQztBQUNBRixNQUFJLENBQUNDLElBQUwsQ0FBVSxzQkFBVixFQUFrQ25HLElBQWxDLENBQXVDLEVBQXZDO0FBQ0QsQ0FITSxDLENBS1A7O0FBQ08sU0FBU3FHLGtCQUFULENBQTRCQyxNQUE1QixFQUFvQztBQUN6Q0EsUUFBTSxDQUFDQyxFQUFQLENBQVUsT0FBVixFQUFtQixtQ0FBbkIsRUFBd0QsWUFBWTtBQUNsRWhJLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTZILFdBQVIsQ0FBb0IsWUFBcEI7QUFDQTdILEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWlJLE1BQVIsR0FBaUJDLFFBQWpCLENBQTBCLHNCQUExQixFQUFrRHpHLElBQWxELENBQXVELEVBQXZEO0FBQ0QsR0FIRDtBQUlEO0FBRU0sSUFBTTBCLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUN3RSxJQUFELEVBQU9RLFFBQVAsRUFBb0I7QUFDdkMsTUFBSWpCLE1BQU0sR0FBRyxFQUFiOztBQUNBLHFDQUEyQmtCLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRixRQUFmLENBQTNCLHFDQUFxRDtBQUFBO0FBQUEsUUFBekNHLEdBQXlDO0FBQUEsUUFBcEN6RCxLQUFvQzs7QUFDbkQsUUFBSXVDLEtBQUssR0FBR08sSUFBSSxDQUFDQyxJQUFMLENBQVUsTUFBTVUsR0FBaEIsRUFBcUJDLFFBQXJCLENBQThCLFlBQTlCLENBQVo7QUFDQW5CLFNBQUssQ0FBQ2EsTUFBTixHQUFlQyxRQUFmLENBQXdCLHNCQUF4QixFQUFnRHpHLElBQWhELENBQXFEb0QsS0FBckQ7QUFDQXFDLFVBQU0sQ0FBQ3NCLElBQVAsQ0FBWUYsR0FBWjtBQUNEOztBQUNELFNBQU9wQixNQUFQO0FBQ0QsQ0FSTTtBQVVBLElBQU1oRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDeUUsSUFBRCxFQUFVO0FBQ25DLE1BQUljLEdBQUcsR0FBRyxFQUFWO0FBQ0FkLE1BQUksQ0FBQ2UsSUFBTCxDQUFVLFlBQVk7QUFDcEIsUUFBTUMsU0FBUyxHQUFHM0ksQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEgsSUFBUixDQUFhLFFBQWIsRUFBdUJnQixPQUF2QixFQUFsQjtBQUNBRCxhQUFTLENBQUN4QixPQUFWLENBQWtCLFVBQVVDLEtBQVYsRUFBaUI7QUFDakMsVUFDRSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFVBQXJCLEVBQWlDLFFBQWpDLEVBQTJDLE1BQTNDLEVBQW1EQyxPQUFuRCxDQUNFRCxLQUFLLENBQUNmLElBRFIsS0FFSyxDQUFDLENBRk4sSUFHQWUsS0FBSyxDQUFDSSxrQkFKUixFQUtFO0FBQ0FpQixXQUFHLENBQUNELElBQUosQ0FBU3BCLEtBQVQ7QUFDRDtBQUNGLEtBVEQ7QUFVRCxHQVpEO0FBYUEsU0FBT3FCLEdBQVA7QUFDRCxDQWhCTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ1A7QUFDQTtBQUNPLElBQU1JLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNyQyxTQUFPLElBQUk5RCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLFFBQUluRixJQUFJLEdBQUc7QUFDVGdKLFFBQUUsRUFBRTlJLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIrSSxHQUFqQjtBQURLLEtBQVg7O0FBR0EsUUFBSWpKLElBQUosRUFBVTtBQUNSa0YsYUFBTyxDQUFDbEYsSUFBRCxDQUFQO0FBQ0QsS0FGRCxNQUVPbUYsTUFBTSxDQUFDLFNBQUQsQ0FBTjtBQUNSLEdBUE0sQ0FBUDtBQVFELENBVE07QUFXQSxJQUFNK0Qsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDbEosSUFBRCxFQUFPbUosT0FBUCxFQUFtQjtBQUNuRGpKLEdBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRVYsNkNBQVEsR0FBR00sSUFBSSxDQUFDSSxHQURoQjtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdMTCxRQUFJLEVBQUU7QUFDSk0sV0FBSyxFQUFFTixJQUFJLENBQUNNLEtBRFI7QUFFSjBJLFFBQUUsRUFBRWhKLElBQUksQ0FBQ2dKLEVBQUwsR0FBVWhKLElBQUksQ0FBQ2dKLEVBQWYsR0FBb0IsRUFGcEI7QUFHSkksYUFBTyxFQUFFcEosSUFBSSxDQUFDb0osT0FBTCxHQUFlcEosSUFBSSxDQUFDb0osT0FBcEIsR0FBOEI7QUFIbkM7QUFIRCxHQUFQLEVBU0cxRCxJQVRILENBU1EsVUFBQzNFLFFBQUQsRUFBYztBQUNsQm9JLFdBQU8sQ0FBQ3BJLFFBQUQsQ0FBUDtBQUNELEdBWEgsRUFZRzRFLElBWkgsQ0FZUSxVQUFDdEMsS0FBRCxFQUFXO0FBQ2YyRCxXQUFPLENBQUNDLEdBQVIsQ0FBWTVELEtBQVo7QUFDRCxHQWRIO0FBZUQsQ0FoQk0sQyIsImZpbGUiOiJjb21tb25zL2Zyb250ZW5kL2NvbW1vbkN1c3RvbU1vZHVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQkFTRV9VUkwgPSBcIi9rbmdlbGxfZWNvbW1lcmNlL1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzSUUgPSAoKSA9PiB7XHJcbiAgdmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgcmV0dXJuIC9NU0lFfFRyaWRlbnQvLnRlc3QodXNlckFnZW50KTtcclxufTtcclxuIiwiaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgYWRkX2lucHV0c19lcnJvcnMsIGVycm9yLCBpbnB1dHNBcnJheSB9IGZyb20gXCIuL2lucHV0RXJyTWFuYWdlclwiO1xyXG5cclxuLy9kaXNwbGF5IGFsbCBkZXRhaWxzXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsRGV0YWlscyhkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgdXNlcjogZGF0YS51c2VyID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgc2Vzc2lvbl9pZDogZGF0YS5zZXNzaW9uX2lkID8gZGF0YS5zZXNzaW9uX2lkIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgICAgdG9rZW46IGRhdGEudG9rZW4gPyBkYXRhLnRva2VuIDogXCJcIixcclxuICAgICAgZnJtX25hbWU6IGRhdGEuZnJtX25hbWUgPyBkYXRhLmZybV9uYW1lIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL2VkaXQgZGF0YVxyXG5leHBvcnQgZnVuY3Rpb24gZWRpdEZvcm0oZGF0YSwgZ2VzdGlvbikge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YS5mb3JtRGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vZGlzcGxheSBhbGwgSXRlbXNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxJdGVtcyhkYXRhKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCAhPSBcIlwiID8gZGF0YS5pZCA6IFwiXCIsXHJcbiAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICBtYXg6IGRhdGEubWF4ICE9IFwiXCIgPyBkYXRhLm1heCA6IFwiXCIsXHJcbiAgICAgIHVzZXI6IGRhdGEudXNlciAhPSBcIlwiID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgcXVlcnk6IGRhdGEucXVlcnkgIT0gXCJcIiA/IGRhdGEucXVlcnkgOiBcIlwiLFxyXG4gICAgICBwYWdlOiBkYXRhLnBhZ2UgIT0gXCJcIiA/IGRhdGEucGFnZSA6IFwiXCIsXHJcbiAgICAgIHBhZ2luYXRpb246IGRhdGEucGFnaW5hdGlvbiAhPSBcIlwiID8gZGF0YS5wYWdpbmF0aW9uIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICAgIGlmIChkYXRhLnRhYmxlID09PSBcImNvbW1lbnRzXCIpIHtcclxuICAgICAgICAgIGRhdGEuZGlzcGxheWlkLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGF0YS5kaXNwbGF5aWQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgaWYgKGRhdGEuZGF0YXRhYmxlKSBsb2FkRGF0YXRhYmxlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKGRhdGEuZGlzcGxheWlkKS5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gbG9hZERhdGF0YWJsZXMoKSB7XHJcbiAgY29uc3QgRGF0YVRhYmxlID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJkYXRhdGFibGVzXCIgKi8gXCJkYXRhdGFibGVzLm5ldFwiXHJcbiAgKTtcclxuICAkKFwidGFibGVcIikuRGF0YVRhYmxlKHtcclxuICAgIG9yZGVyOiBbMCwgXCJkZXNjXCJdLFxyXG4gIH0pO1xyXG59XHJcbi8vYWRkIEl0ZW1cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZChkYXRhLCBnZXN0aW9uKSB7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEuZnJtWzBdKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJ0YWJsZVwiLCBkYXRhLnRhYmxlKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJub3RpZmljYXRpb25cIiwgZGF0YS5ub3RpZmljYXRpb24pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImZybV9uYW1lXCIsIGRhdGEuZnJtX25hbWUpO1xyXG4gIGlmIChkYXRhLnN0YXJ0X2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcInN0YXJ0X2RhdGVcIiwgZGF0YS5zdGFydF9kYXRlKTtcclxuICBpZiAoZGF0YS5lbmRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwiZW5kX2RhdGVcIiwgZGF0YS5lbmRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuaW1hZ2VVcmxzQXJ5KSBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVVybHNBcnlcIiwgZGF0YS5pbWFnZVVybHNBcnkpO1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICBjYWNoZTogZmFsc2UsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL3VwZGF0ZVxyXG5leHBvcnQgZnVuY3Rpb24gQ2FsbF9jb250cm9sbGVyKGRhdGEsIGdlc3Rpb24pIHtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZGF0YS5mcm1bMF0pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImZybV9uYW1lXCIsIGRhdGEuZnJtX25hbWUpO1xyXG4gIGlmIChkYXRhLnRhYmxlKSBmb3JtRGF0YS5hcHBlbmQoXCJ0YWJsZVwiLCBkYXRhLnRhYmxlKTtcclxuICBpZiAoZGF0YS5ub3RpZmljYXRpb24pIGZvcm1EYXRhLmFwcGVuZChcIm5vdGlmaWNhdGlvblwiLCBkYXRhLm5vdGlmaWNhdGlvbik7XHJcbiAgaWYgKGRhdGEudXJsX2RhdGEpIGZvcm1EYXRhLmFwcGVuZChcInVybF9kYXRhXCIsIGRhdGEudXJsX2RhdGEpO1xyXG4gIGlmIChkYXRhLmFjdGlvbikgZm9ybURhdGEuYXBwZW5kKFwiYWN0aW9uXCIsIGRhdGEuYWN0aW9uKTtcclxuICBpZiAoZGF0YS5pbWFnZVVybHNBcnkpIGZvcm1EYXRhLmFwcGVuZChcImltYWdlVXJsc0FyeVwiLCBkYXRhLmltYWdlVXJsc0FyeSk7XHJcbiAgaWYgKGRhdGEuZnJlZWRhdGEpIGZvcm1EYXRhLmFwcGVuZChcImZyZWVkYXRhXCIsIGRhdGEuZnJlZWRhdGEpO1xyXG4gIGlmIChkYXRhLnN0YXJ0X2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcInN0YXJ0X2RhdGVcIiwgZGF0YS5zdGFydF9kYXRlKTtcclxuICBpZiAoZGF0YS5lbmRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwiZW5kX2RhdGVcIiwgZGF0YS5lbmRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuaWQpIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGRhdGEuaWQpO1xyXG4gIGlmIChkYXRhLnVzZXJfaWQpIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGRhdGEudXNlcl9pZCk7XHJcbiAgaWYgKGRhdGEubWV0aG9kKSBmb3JtRGF0YS5hcHBlbmQoXCJtZXRob2RcIiwgZGF0YS5tZXRob2QpO1xyXG4gIGlmIChkYXRhLnNlbGVjdDIpIGZvcm1EYXRhLmFwcGVuZChcInNlbGVjdDJcIiwgZGF0YS5zZWxlY3QyKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuLy9NYW5hZ2UgaXRlbSBhZGRlZC91cGRhdGVkXHJcbmV4cG9ydCBmdW5jdGlvbiBNYW5hZ2VSZXNwb25zZShyZXNwb25zZSwgZGF0YSkge1xyXG4gIHN3aXRjaCAocmVzcG9uc2UucmVzdWx0KSB7XHJcbiAgICBjYXNlIFwiZXJyb3ItZmllbGRcIjpcclxuICAgICAgYWRkX2lucHV0c19lcnJvcnMoaW5wdXRzQXJyYXkoZGF0YS5mcm0pLCBlcnJvcihkYXRhLmZybSwgcmVzcG9uc2UubXNnKSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcInN1Y2Nlc3NcIjpcclxuICAgICAgZGF0YS5mcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICBpZiAoZGF0YS5sb2dpbikge1xyXG4gICAgICAgIGRhdGEubG9naW5ib3gubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YS5zd2FsKSB7XHJcbiAgICAgICAgZGF0YS5tb2RhbGJveC5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgZGF0YS5zd2FsLmZpcmUoXCJTdWNjZXNzIVwiLCByZXNwb25zZS5tc2csIFwic3VjY2Vzc1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZGF0YS5hbGVydHN1Y2Nlc3MpIGRhdGEuYWxlcnRpZC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJpbWdhcmVhXCIpKSB7XHJcbiAgICAgICAgZGF0YS5pbWdhcmVhLmF0dHIoXCJzcmNcIiwgZGF0YS5pbWd2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGEucHJlcGVuZCkge1xyXG4gICAgICAgIGRhdGEubmVzdGVkLnByZXBlbmQocmVzcG9uc2UubXNnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZGF0YS5wcmVwZW5kID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgZGF0YS5uZXN0ZWQuYmVmb3JlKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgICBkYXRhLm5lc3RlZC5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhLmRpc3BsYXkpIGRhdGEuZGlzcGxheSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJlcnJvclwiOlxyXG4gICAgICBkYXRhLmFsZXJ0aWQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICBkYXRhLmZybS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufVxyXG5cclxuLy9kZWxldGVcclxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZShkYXRhLCBkaXNwbGF5SXRlbSkge1xyXG4gIGNoZWNrQmVmb3JlRGVsZXRlKGRhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgICAgICBub3RpZmljYXRpb246IGRhdGEubm90aWZpY2F0aW9uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICBkYXRhLnN3YWxcclxuICAgICAgICAgICAgICA/IGRhdGEuc3dhbC5maXJlKFwiRGVsZXRlZCFcIiwgcmVzcG9uc2UubXNnLCBcInN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICA6IFwiXCI7XHJcbiAgICAgICAgICAgIGRpc3BsYXlJdGVtKGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGEuYWxlcnRJRC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuLy9mdW5jdGlvbiBjaGVjayBiZWZvcmUgZGVsZXRlXHJcbmZ1bmN0aW9uIGNoZWNrQmVmb3JlRGVsZXRlKGRhdGEpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgaWYgKCFkYXRhLnVybF9jaGVjaykge1xyXG4gICAgICBkYXRhLnN3YWxcclxuICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgaHRtbDogXCI8cD5Zb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyE8L3A+XCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiRGVsZXRlIVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmxfY2hlY2ssXHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICAgICAgbm90aWZpY2F0aW9uOiBkYXRhLm5vdGlmaWNhdGlvbixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgZGF0YS5zd2FsXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBodG1sOiBcIjxwPllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzITwvcD5cIiArIHJlc3BvbnNlLm1zZyxcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJEZWxldGUhXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZhaWwoKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TXVsdGlzZWxsZWN0KGRhdGEpIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIFwiZm9ybXMvZmlsbE11bHRpc2VsZWN0XCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICBkYXRhLmRpc3BsYXlJRC5hcHBlbmQocmVzcG9uc2UubXNnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhLmFsZXJ0SUQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2F0ZWdvcnJpZShjYXRGaWVsZCwgYWxlcnRJRCkge1xyXG4gIGxldCBjYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhdEZpZWxkKTtcclxuICBpZiAoY2F0LnZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICBhbGVydChcIkxlIGNoYW1wcyBjYXTDqWdvcmllIGVzdCB2aWRlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IEJBU0VfVVJMICsgXCJmb3Jtcy9hZGRjYXRlZ29yaWVcIixcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNhdGVnb3JpZTogY2F0LnZhbHVlLFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UgIT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICQoYWxlcnRJRCkuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3QyQWpheFBhcmFtcyhkYXRhKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgZGVsYXk6IDI1MCxcclxuICAgIGRhdGE6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZWFyY2hUZXJtOiBwYXJhbXMudGVybSwgLy8gc2VhcmNoIHRlcm1cclxuICAgICAgICB0YWJsZTogZGF0YS50YWJsZSAhPSBcIlwiID8gZGF0YS50YWJsZSA6IFwiXCIsXHJcbiAgICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSAhPSBcIlwiID8gZGF0YS5kYXRhX3R5cGUgOiBcIlwiLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIC8vIHZhciBkYXRhID0gJC5tYXAocmVzcG9uc2UubXNnLCBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgLy8gICBvYmouaWQgPSBvYmouaWQgfHwgb2JqLnRleHQ7IC8vIHJlcGxhY2UgcGsgd2l0aCB5b3VyIGlkZW50aWZpZXJcclxuICAgICAgICAvLyAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHJlc3VsdHM6ICQubWFwKHJlc3BvbnNlLm1zZywgZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICBpZiAob2JqLmlkICE9IDApIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmopO1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBvYmouaWQsIHRleHQ6IG9iai50ZXh0IH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IG9iai5pZCwgdGV4dDogb2JqLnRleHQgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAvLyAgIHJlc3VsdHM6IGRhdGEsXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNhY2hlOiB0cnVlLFxyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFkZF9pbnB1dHNfZXJyb3JzID0gKElucHV0QXJyLCBhcnJFcnIpID0+IHtcclxuICBJbnB1dEFyci5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgaWYgKGFyckVyci5pbmRleE9mKGlucHV0LmlkKSA9PSAtMSkge1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICAgaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRfaW52YWxpZF9pbnB1dCA9IChmb3JtKSA9PiB7XHJcbiAgZm9ybS5maW5kKFwiLmlzLWludmFsaWRcIikucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gIGZvcm0uZmluZChcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwoXCJcIik7XHJcbn07XHJcblxyXG4vL3JlbW92ZSBpbnZhbGlkIGlucHV0IG9uIGZvY3VzXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJbnZhbGlkSW5wdXQoTXlmb3JtKSB7XHJcbiAgTXlmb3JtLm9uKFwiZm9jdXNcIiwgXCJpbnB1dCx0ZXh0YXJlYSwgLmNrLCAubm90ZS1lZGl0b3JcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKFwiZGl2LmludmFsaWQtZmVlZGJhY2tcIikuaHRtbChcIlwiKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVycm9yID0gKGZvcm0sIElucHV0RXJyKSA9PiB7XHJcbiAgdmFyIGFyckVyciA9IFtdO1xyXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKElucHV0RXJyKSkge1xyXG4gICAgdmFyIGlucHV0ID0gZm9ybS5maW5kKFwiI1wiICsga2V5KS5hZGRDbGFzcyhcImlzLWludmFsaWRcIik7XHJcbiAgICBpbnB1dC5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwodmFsdWUpO1xyXG4gICAgYXJyRXJyLnB1c2goa2V5KTtcclxuICB9XHJcbiAgcmV0dXJuIGFyckVycjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnB1dHNBcnJheSA9IChmb3JtKSA9PiB7XHJcbiAgdmFyIGFyciA9IFtdO1xyXG4gIGZvcm0uZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpbnB1dHNBcnIgPSAkKHRoaXMpLmZpbmQoXCI6aW5wdXRcIikudG9BcnJheSgpO1xyXG4gICAgaW5wdXRzQXJyLmZvckVhY2goZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBbXCJzdWJtaXRcIiwgXCJoaWRkZW5cIiwgXCJjaGVja2JveFwiLCBcImJ1dHRvblwiLCBcImZpbGVcIl0uaW5kZXhPZihcclxuICAgICAgICAgIGlucHV0LnR5cGVcclxuICAgICAgICApID09IC0xICYmXHJcbiAgICAgICAgaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nXHJcbiAgICAgICkge1xyXG4gICAgICAgIGFyci5wdXNoKGlucHV0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGFycjtcclxufTtcclxuIiwiLy9HZXQgdmlzaXRvcnMgRGF0YVxyXG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5leHBvcnQgY29uc3QgZ2V0X3Zpc2l0b3JzX2RhdGEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICBpcDogJChcIiNpcF9hZGRyZXNzXCIpLnZhbCgpLFxyXG4gICAgfTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICB9IGVsc2UgcmVqZWN0KFwibm8gZGF0YVwiKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kX3Zpc2l0b3JzX2RhdGEgPSAoZGF0YSwgbWFuYWdlUikgPT4ge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgaXA6IGRhdGEuaXAgPyBkYXRhLmlwIDogXCJcIixcclxuICAgICAgY29va2llczogZGF0YS5jb29raWVzID8gZGF0YS5jb29raWVzIDogXCJcIixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBtYW5hZ2VSKHJlc3BvbnNlKTtcclxuICAgIH0pXHJcbiAgICAuZmFpbCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=