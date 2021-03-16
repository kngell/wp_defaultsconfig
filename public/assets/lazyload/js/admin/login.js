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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvZm9ybV9jcnVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9pbnB1dEVyck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2xvZ3JlZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvcHJvZmlsZV9pbWcuanMiXSwibmFtZXMiOlsiZGlzcGxheUFsbERldGFpbHMiLCJkYXRhIiwiZ2VzdGlvbiIsIiQiLCJhamF4IiwidXJsIiwiQkFTRV9VUkwiLCJtZXRob2QiLCJ0YWJsZSIsImlkIiwidXNlciIsInNlc3Npb25faWQiLCJkYXRhX3R5cGUiLCJyZXR1cm5fbW9kZSIsInRva2VuIiwiZnJtX25hbWUiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJwYXJhbXMiLCJlZGl0Rm9ybSIsImZvcm1EYXRhIiwiZGlzcGxheUFsbEl0ZW1zIiwic3RhcnQiLCJtYXgiLCJxdWVyeSIsInBhZ2UiLCJwYWdpbmF0aW9uIiwicmVzdWx0IiwiZGlzcGxheWlkIiwiaHRtbCIsIm1zZyIsImRhdGF0YWJsZSIsImxvYWREYXRhdGFibGVzIiwiRGF0YVRhYmxlIiwib3JkZXIiLCJBZGQiLCJGb3JtRGF0YSIsImZybSIsImFwcGVuZCIsIm5vdGlmaWNhdGlvbiIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsImltYWdlVXJsc0FyeSIsImNhY2hlIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsIkNhbGxfY29udHJvbGxlciIsInVybF9kYXRhIiwiYWN0aW9uIiwiZnJlZWRhdGEiLCJ1c2VyX2lkIiwic2VsZWN0MiIsIk1hbmFnZVJlc3BvbnNlIiwiYWRkX2lucHV0c19lcnJvcnMiLCJpbnB1dHNBcnJheSIsImVycm9yIiwidHJpZ2dlciIsImxvZ2luIiwibG9naW5ib3giLCJtb2RhbCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic3dhbCIsIm1vZGFsYm94IiwiZmlyZSIsImFsZXJ0c3VjY2VzcyIsImFsZXJ0aWQiLCJoYXNPd25Qcm9wZXJ0eSIsImltZ2FyZWEiLCJhdHRyIiwiaW1ndmFsdWUiLCJwcmVwZW5kIiwibmVzdGVkIiwiYmVmb3JlIiwiaGlkZSIsImRpc3BsYXkiLCJEZWxldGUiLCJkaXNwbGF5SXRlbSIsImNoZWNrQmVmb3JlRGVsZXRlIiwidGhlbiIsInZhbHVlIiwiYWxlcnRJRCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidXJsX2NoZWNrIiwidGl0bGUiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImRvbmUiLCJmYWlsIiwiZGlzcGxheU11bHRpc2VsbGVjdCIsImRpc3BsYXlJRCIsImFkZENhdGVnb3JyaWUiLCJjYXRGaWVsZCIsImNhdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxlbmd0aCIsImFsZXJ0IiwiY2F0ZWdvcmllIiwic2VsZWN0MkFqYXhQYXJhbXMiLCJ0eXBlIiwiZGF0YVR5cGUiLCJkZWxheSIsInNlYXJjaFRlcm0iLCJ0ZXJtIiwicHJvY2Vzc1Jlc3VsdHMiLCJyZXN1bHRzIiwibWFwIiwib2JqIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJJbnB1dEFyciIsImFyckVyciIsImZvckVhY2giLCJpbnB1dCIsImluZGV4T2YiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpbm5lckhUTUwiLCJyZXNldF9pbnZhbGlkX2lucHV0IiwiZm9ybSIsImZpbmQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZUludmFsaWRJbnB1dCIsIk15Zm9ybSIsIm9uIiwicGFyZW50IiwiY2hpbGRyZW4iLCJJbnB1dEVyciIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJhZGRDbGFzcyIsInB1c2giLCJhcnIiLCJlYWNoIiwiaW5wdXRzQXJyIiwidG9BcnJheSIsIlBocExSIiwiZWxlbWVudCIsImluaXQiLCJwcm90b3R5cGUiLCJzZXR1cFZhcmlhYmxlcyIsInNldHVwRXZlbnRzIiwibG9nYm94IiwibG9naW5mcm0iLCJyZWdib3giLCJyZWdmcm0iLCJmb3Jnb3Rib3giLCJmb3Jnb3Rmcm0iLCJwaHBMUiIsInZhbCIsImVtYWlsIiwicmVtZW1iZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbnB1dERhdGEiLCJnZXN0aW9uUiIsIm91dHB1dERhdGEiLCJpbWciLCJyZWFkdXJsIiwiTWFuYWdlTG9naW5SZXNwb25zZSIsInJkYXRhIiwiYnRuIiwidGV4dEJ0biIsIkZiUmVzcG9uc2UiLCJGQiIsImZhY2Vib29rbG9naW4iLCJyZXNwIiwiRmFjZWJvb2siLCJsb2FkIiwiYXBwSWQiLCJhcHBJRCIsImdldExvZ2luU3RhdHVzIiwic3RhdHVzIiwiZ2V0RmJVc2VyRGF0YSIsImZiTG9naW4iLCJzY29wZSIsInJldHVybl9zY29wZXMiLCJnZXRFbGVtZW50QnlJZCIsImFwaSIsImZpZWxkcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJNUmVzcG9uc2UiLCJsb2dvdXQiLCJjbG9zZXN0IiwiaHJlZiIsImZuIiwib3B0aW9ucyIsImljb24iLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0YXJnZXQiLCJjc3MiLCJyZWFkQXNEYXRhVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNPLFNBQVNBLGlCQUFULENBQTJCQyxJQUEzQixFQUFpQ0MsT0FBakMsRUFBMEM7QUFDL0NDLEdBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsNkNBQVEsR0FBR0wsSUFBSSxDQUFDSSxHQURoQjtBQUVMRSxVQUFNLEVBQUUsTUFGSDtBQUdMTixRQUFJLEVBQUU7QUFDSk8sV0FBSyxFQUFFUCxJQUFJLENBQUNPLEtBRFI7QUFFSkMsUUFBRSxF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QU1BNEgsVUFBTSxDQUFDSyxhQUFQLENBQXFCckYsS0FBSyxDQUFDK0UsS0FBTixDQUFZLENBQVosQ0FBckI7QUFDRDtBQUNGLENBWE0sQyIsImZpbGUiOiJsYXp5bG9hZC9qcy9hZG1pbi9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IGFkZF9pbnB1dHNfZXJyb3JzLCBlcnJvciwgaW5wdXRzQXJyYXkgfSBmcm9tIFwiLi9pbnB1dEVyck1hbmFnZXJcIjtcclxuXHJcbi8vZGlzcGxheSBhbGwgZGV0YWlsc1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFsbERldGFpbHMoZGF0YSwgZ2VzdGlvbikge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgIHVzZXI6IGRhdGEudXNlciA/IGRhdGEudXNlciA6IFwiXCIsXHJcbiAgICAgIHNlc3Npb25faWQ6IGRhdGEuc2Vzc2lvbl9pZCA/IGRhdGEuc2Vzc2lvbl9pZCA6IFwiXCIsXHJcbiAgICAgIGRhdGFfdHlwZTogZGF0YS5kYXRhX3R5cGUgPyBkYXRhLmRhdGFfdHlwZSA6IFwiXCIsXHJcbiAgICAgIHJldHVybl9tb2RlOiBkYXRhLnJldHVybl9tb2RlID8gZGF0YS5yZXR1cm5fbW9kZSA6IFwiXCIsXHJcbiAgICAgIHRva2VuOiBkYXRhLnRva2VuID8gZGF0YS50b2tlbiA6IFwiXCIsXHJcbiAgICAgIGZybV9uYW1lOiBkYXRhLmZybV9uYW1lID8gZGF0YS5mcm1fbmFtZSA6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuLy9lZGl0IGRhdGFcclxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRGb3JtKGRhdGEsIGdlc3Rpb24pIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEuZm9ybURhdGEsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG4vL2Rpc3BsYXkgYWxsIEl0ZW1zXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsSXRlbXMoZGF0YSkge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgaWQ6IGRhdGEuaWQgIT0gXCJcIiA/IGRhdGEuaWQgOiBcIlwiLFxyXG4gICAgICBzdGFydDogMCxcclxuICAgICAgbWF4OiBkYXRhLm1heCAhPSBcIlwiID8gZGF0YS5tYXggOiBcIlwiLFxyXG4gICAgICB1c2VyOiBkYXRhLnVzZXIgIT0gXCJcIiA/IGRhdGEudXNlciA6IFwiXCIsXHJcbiAgICAgIHF1ZXJ5OiBkYXRhLnF1ZXJ5ICE9IFwiXCIgPyBkYXRhLnF1ZXJ5IDogXCJcIixcclxuICAgICAgcGFnZTogZGF0YS5wYWdlICE9IFwiXCIgPyBkYXRhLnBhZ2UgOiBcIlwiLFxyXG4gICAgICBwYWdpbmF0aW9uOiBkYXRhLnBhZ2luYXRpb24gIT0gXCJcIiA/IGRhdGEucGFnaW5hdGlvbiA6IFwiXCIsXHJcbiAgICAgIGRhdGFfdHlwZTogZGF0YS5kYXRhX3R5cGUgPyBkYXRhLmRhdGFfdHlwZSA6IFwiXCIsXHJcbiAgICAgIHJldHVybl9tb2RlOiBkYXRhLnJldHVybl9tb2RlID8gZGF0YS5yZXR1cm5fbW9kZSA6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAvLyBkZWJ1Z2dlcjtcclxuICAgICAgICBpZiAoZGF0YS50YWJsZSA9PT0gXCJjb21tZW50c1wiKSB7XHJcbiAgICAgICAgICBkYXRhLmRpc3BsYXlpZC5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRhdGEuZGlzcGxheWlkLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgIGlmIChkYXRhLmRhdGF0YWJsZSkgbG9hZERhdGF0YWJsZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChkYXRhLmRpc3BsYXlpZCkuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWREYXRhdGFibGVzKCkge1xyXG4gIGNvbnN0IERhdGFUYWJsZSA9IGF3YWl0IGltcG9ydChcclxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZGF0YXRhYmxlc1wiICovIFwiZGF0YXRhYmxlcy5uZXRcIlxyXG4gICk7XHJcbiAgJChcInRhYmxlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICBvcmRlcjogWzAsIFwiZGVzY1wiXSxcclxuICB9KTtcclxufVxyXG4vL2FkZCBJdGVtXHJcbmV4cG9ydCBmdW5jdGlvbiBBZGQoZGF0YSwgZ2VzdGlvbikge1xyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkYXRhLmZybVswXSk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwidGFibGVcIiwgZGF0YS50YWJsZSk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwibm90aWZpY2F0aW9uXCIsIGRhdGEubm90aWZpY2F0aW9uKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJmcm1fbmFtZVwiLCBkYXRhLmZybV9uYW1lKTtcclxuICBpZiAoZGF0YS5zdGFydF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJzdGFydF9kYXRlXCIsIGRhdGEuc3RhcnRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuZW5kX2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcImVuZF9kYXRlXCIsIGRhdGEuZW5kX2RhdGUpO1xyXG4gIGlmIChkYXRhLmltYWdlVXJsc0FyeSkgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VVcmxzQXJ5XCIsIGRhdGEuaW1hZ2VVcmxzQXJ5KTtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuLy91cGRhdGVcclxuZXhwb3J0IGZ1bmN0aW9uIENhbGxfY29udHJvbGxlcihkYXRhLCBnZXN0aW9uKSB7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEuZnJtWzBdKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJmcm1fbmFtZVwiLCBkYXRhLmZybV9uYW1lKTtcclxuICBpZiAoZGF0YS50YWJsZSkgZm9ybURhdGEuYXBwZW5kKFwidGFibGVcIiwgZGF0YS50YWJsZSk7XHJcbiAgaWYgKGRhdGEubm90aWZpY2F0aW9uKSBmb3JtRGF0YS5hcHBlbmQoXCJub3RpZmljYXRpb25cIiwgZGF0YS5ub3RpZmljYXRpb24pO1xyXG4gIGlmIChkYXRhLnVybF9kYXRhKSBmb3JtRGF0YS5hcHBlbmQoXCJ1cmxfZGF0YVwiLCBkYXRhLnVybF9kYXRhKTtcclxuICBpZiAoZGF0YS5hY3Rpb24pIGZvcm1EYXRhLmFwcGVuZChcImFjdGlvblwiLCBkYXRhLmFjdGlvbik7XHJcbiAgaWYgKGRhdGEuaW1hZ2VVcmxzQXJ5KSBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVVybHNBcnlcIiwgZGF0YS5pbWFnZVVybHNBcnkpO1xyXG4gIGlmIChkYXRhLmZyZWVkYXRhKSBmb3JtRGF0YS5hcHBlbmQoXCJmcmVlZGF0YVwiLCBkYXRhLmZyZWVkYXRhKTtcclxuICBpZiAoZGF0YS5zdGFydF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJzdGFydF9kYXRlXCIsIGRhdGEuc3RhcnRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuZW5kX2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcImVuZF9kYXRlXCIsIGRhdGEuZW5kX2RhdGUpO1xyXG4gIGlmIChkYXRhLmlkKSBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBkYXRhLmlkKTtcclxuICBpZiAoZGF0YS51c2VyX2lkKSBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBkYXRhLnVzZXJfaWQpO1xyXG4gIGlmIChkYXRhLm1ldGhvZCkgZm9ybURhdGEuYXBwZW5kKFwibWV0aG9kXCIsIGRhdGEubWV0aG9kKTtcclxuICBpZiAoZGF0YS5zZWxlY3QyKSBmb3JtRGF0YS5hcHBlbmQoXCJzZWxlY3QyXCIsIGRhdGEuc2VsZWN0Mik7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbi8vTWFuYWdlIGl0ZW0gYWRkZWQvdXBkYXRlZFxyXG5leHBvcnQgZnVuY3Rpb24gTWFuYWdlUmVzcG9uc2UocmVzcG9uc2UsIGRhdGEpIHtcclxuICBzd2l0Y2ggKHJlc3BvbnNlLnJlc3VsdCkge1xyXG4gICAgY2FzZSBcImVycm9yLWZpZWxkXCI6XHJcbiAgICAgIGFkZF9pbnB1dHNfZXJyb3JzKGlucHV0c0FycmF5KGRhdGEuZnJtKSwgZXJyb3IoZGF0YS5mcm0sIHJlc3BvbnNlLm1zZykpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJzdWNjZXNzXCI6XHJcbiAgICAgIGRhdGEuZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgaWYgKGRhdGEubG9naW4pIHtcclxuICAgICAgICBkYXRhLmxvZ2luYm94Lm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGEuc3dhbCkge1xyXG4gICAgICAgIGRhdGEubW9kYWxib3gubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgIGRhdGEuc3dhbC5maXJlKFwiU3VjY2VzcyFcIiwgcmVzcG9uc2UubXNnLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGRhdGEuYWxlcnRzdWNjZXNzKSBkYXRhLmFsZXJ0aWQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiaW1nYXJlYVwiKSkge1xyXG4gICAgICAgIGRhdGEuaW1nYXJlYS5hdHRyKFwic3JjXCIsIGRhdGEuaW1ndmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhLnByZXBlbmQpIHtcclxuICAgICAgICBkYXRhLm5lc3RlZC5wcmVwZW5kKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGRhdGEucHJlcGVuZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGRhdGEubmVzdGVkLmJlZm9yZShyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgZGF0YS5uZXN0ZWQuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YS5kaXNwbGF5KSBkYXRhLmRpc3BsYXkoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiZXJyb3JcIjpcclxuICAgICAgZGF0YS5hbGVydGlkLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgZGF0YS5mcm0udHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn1cclxuXHJcbi8vZGVsZXRlXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGUoZGF0YSwgZGlzcGxheUl0ZW0pIHtcclxuICBjaGVja0JlZm9yZURlbGV0ZShkYXRhKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICAgICAgbm90aWZpY2F0aW9uOiBkYXRhLm5vdGlmaWNhdGlvbixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgZGF0YS5zd2FsXHJcbiAgICAgICAgICAgICAgPyBkYXRhLnN3YWwuZmlyZShcIkRlbGV0ZWQhXCIsIHJlc3BvbnNlLm1zZywgXCJzdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgOiBcIlwiO1xyXG4gICAgICAgICAgICBkaXNwbGF5SXRlbShkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhLmFsZXJ0SUQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbi8vZnVuY3Rpb24gY2hlY2sgYmVmb3JlIGRlbGV0ZVxyXG5mdW5jdGlvbiBjaGVja0JlZm9yZURlbGV0ZShkYXRhKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGlmICghZGF0YS51cmxfY2hlY2spIHtcclxuICAgICAgZGF0YS5zd2FsXHJcbiAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgIGh0bWw6IFwiPHA+WW91IHdvbid0IGJlIGFibGUgdG8gcmV2ZXJ0IHRoaXMhPC9wPlwiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkRlbGV0ZSFcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsX2NoZWNrLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgICAgIG5vdGlmaWNhdGlvbjogZGF0YS5ub3RpZmljYXRpb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGRhdGEuc3dhbFxyXG4gICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgaHRtbDogXCI8cD5Zb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyE8L3A+XCIgKyByZXNwb25zZS5tc2csXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiRGVsZXRlIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU11bHRpc2VsbGVjdChkYXRhKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBcImZvcm1zL2ZpbGxNdWx0aXNlbGVjdFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgZGF0YS5kaXNwbGF5SUQuYXBwZW5kKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YS5hbGVydElELmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhdGVnb3JyaWUoY2F0RmllbGQsIGFsZXJ0SUQpIHtcclxuICBsZXQgY2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXRGaWVsZCk7XHJcbiAgaWYgKGNhdC52YWx1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgYWxlcnQoXCJMZSBjaGFtcHMgY2F0w6lnb3JpZSBlc3QgdmlkZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIFwiZm9ybXMvYWRkY2F0ZWdvcmllXCIsXHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjYXRlZ29yaWU6IGNhdC52YWx1ZSxcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlICE9IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAkKGFsZXJ0SUQpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0MkFqYXhQYXJhbXMoZGF0YSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICB0eXBlOiBcInBvc3RcIixcclxuICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgIGRlbGF5OiAyNTAsXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VhcmNoVGVybTogcGFyYW1zLnRlcm0sIC8vIHNlYXJjaCB0ZXJtXHJcbiAgICAgICAgdGFibGU6IGRhdGEudGFibGUgIT0gXCJcIiA/IGRhdGEudGFibGUgOiBcIlwiLFxyXG4gICAgICAgIGRhdGFfdHlwZTogZGF0YS5kYXRhX3R5cGUgIT0gXCJcIiA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAvLyB2YXIgZGF0YSA9ICQubWFwKHJlc3BvbnNlLm1zZywgZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIC8vICAgb2JqLmlkID0gb2JqLmlkIHx8IG9iai50ZXh0OyAvLyByZXBsYWNlIHBrIHdpdGggeW91ciBpZGVudGlmaWVyXHJcbiAgICAgICAgLy8gICByZXR1cm4gb2JqO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICByZXN1bHRzOiAkLm1hcChyZXNwb25zZS5tc2csIGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5pZCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cob2JqKTtcclxuICAgICAgICAgICAgICByZXR1cm4geyBpZDogb2JqLmlkLCB0ZXh0OiBvYmoudGV4dCB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBvYmouaWQsIHRleHQ6IG9iai50ZXh0IH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgLy8gICByZXN1bHRzOiBkYXRhLFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjYWNoZTogdHJ1ZSxcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBhZGRfaW5wdXRzX2Vycm9ycyA9IChJbnB1dEFyciwgYXJyRXJyKSA9PiB7XHJcbiAgSW5wdXRBcnIuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgIGlmIChhcnJFcnIuaW5kZXhPZihpbnB1dC5pZCkgPT0gLTEpIHtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWludmFsaWRcIik7XHJcbiAgICAgIGlucHV0Lm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0X2ludmFsaWRfaW5wdXQgPSAoZm9ybSkgPT4ge1xyXG4gIGZvcm0uZmluZChcIi5pcy1pbnZhbGlkXCIpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICBmb3JtLmZpbmQoXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG59O1xyXG5cclxuLy9yZW1vdmUgaW52YWxpZCBpbnB1dCBvbiBmb2N1c1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSW52YWxpZElucHV0KE15Zm9ybSkge1xyXG4gIE15Zm9ybS5vbihcImZvY3VzXCIsIFwiaW5wdXQsdGV4dGFyZWEsIC5jaywgLm5vdGUtZWRpdG9yXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwoXCJcIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlcnJvciA9IChmb3JtLCBJbnB1dEVycikgPT4ge1xyXG4gIHZhciBhcnJFcnIgPSBbXTtcclxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhJbnB1dEVycikpIHtcclxuICAgIHZhciBpbnB1dCA9IGZvcm0uZmluZChcIiNcIiArIGtleSkuYWRkQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgaW5wdXQucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKHZhbHVlKTtcclxuICAgIGFyckVyci5wdXNoKGtleSk7XHJcbiAgfVxyXG4gIHJldHVybiBhcnJFcnI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5wdXRzQXJyYXkgPSAoZm9ybSkgPT4ge1xyXG4gIHZhciBhcnIgPSBbXTtcclxuICBmb3JtLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaW5wdXRzQXJyID0gJCh0aGlzKS5maW5kKFwiOmlucHV0XCIpLnRvQXJyYXkoKTtcclxuICAgIGlucHV0c0Fyci5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgW1wic3VibWl0XCIsIFwiaGlkZGVuXCIsIFwiY2hlY2tib3hcIiwgXCJidXR0b25cIiwgXCJmaWxlXCJdLmluZGV4T2YoXHJcbiAgICAgICAgICBpbnB1dC50eXBlXHJcbiAgICAgICAgKSA9PSAtMSAmJlxyXG4gICAgICAgIGlucHV0Lm5leHRFbGVtZW50U2libGluZ1xyXG4gICAgICApIHtcclxuICAgICAgICBhcnIucHVzaChpbnB1dCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiBhcnI7XHJcbn07XHJcbiIsImltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcImNvcmVqcy9jb25maWdcIjtcclxuaW1wb3J0IHsgQWRkLCBDYWxsX2NvbnRyb2xsZXIsIE1hbmFnZVJlc3BvbnNlIH0gZnJvbSBcImNvcmVqcy9mb3JtX2NydWRcIjtcclxuaW1wb3J0IHsgcmVzZXRfaW52YWxpZF9pbnB1dCB9IGZyb20gXCJjb3JlanMvaW5wdXRFcnJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHJlYWR1cmwgfSBmcm9tIFwiY29yZWpzL3Byb2ZpbGVfaW1nXCI7XHJcbmZ1bmN0aW9uIFBocExSKGVsZW1lbnQpIHtcclxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIHRoaXMuaW5pdCgpO1xyXG59XHJcblBocExSLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuc2V0dXBWYXJpYWJsZXMoKTtcclxuICB0aGlzLnNldHVwRXZlbnRzKCk7XHJcbn07XHJcbi8vUEhQIExSIHNldHVwIFZhcmlhYmxlc1xyXG5QaHBMUi5wcm90b3R5cGUuc2V0dXBWYXJpYWJsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5sb2dib3ggPSB0aGlzLmVsZW1lbnQuZmluZChcIiNsb2dpbi1ib3hcIik7XHJcbiAgdGhpcy5sb2dpbmZybSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2xvZ2luLWZybVwiKTtcclxuICB0aGlzLnJlZ2JveCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3JlZ2lzdGVyLWJveFwiKTtcclxuICB0aGlzLnJlZ2ZybSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3JlZ2lzdGVyLWZybVwiKTtcclxuICB0aGlzLmZvcmdvdGJveCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2ZvcmdvdC1ib3hcIik7XHJcbiAgdGhpcy5mb3Jnb3Rmcm0gPSB0aGlzLmVsZW1lbnQuZmluZChcIiNmb3Jnb3QtZnJtXCIpO1xyXG59O1xyXG4vL1BIUCBMUiBzZXR1cCBFdmVudHNcclxuUGhwTFIucHJvdG90eXBlLnNldHVwRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciBwaHBMUiA9IHRoaXM7XHJcblxyXG4gIC8vcmVmcmVzaCBsb2dpbiAmIHJlZ2lzdGVyIGZybSBvbiBoaWRlIGFuZCBzaG93XHJcbiAgcGhwTFIubG9nYm94Lm9uKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAocGhwTFIubG9naW5mcm0uZmluZChcIi5pcy1pbnZhbGlkXCIpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIHJlc2V0X2ludmFsaWRfaW5wdXQocGhwTFIubG9naW5mcm0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vUmVzZXQgcmVnaXN0ZXIgZm9ybSBpbnZhbGlkIGlucHV0IG9uIGhpZGUgbW9kYWxcclxuICBwaHBMUi5yZWdib3gub24oXCJoaWRlLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChwaHBMUi5yZWdmcm0uZmluZChcIi5pcy1pbnZhbGlkXCIpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIHJlc2V0X2ludmFsaWRfaW5wdXQocGhwTFIucmVnZnJtKTtcclxuICAgIH1cclxuICB9KTtcclxuICAvL1Jlc2V0IHJlZ2lzdGVyIGZvcm0gb24gc2hvd25cclxuICBwaHBMUi5yZWdib3gub24oXCJzaG93LmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBocExSLnJlZ2ZybS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICBwaHBMUi5yZWdmcm0uZmluZChcIiNyZWdBbGVydFwiKS5odG1sKFwiXCIpO1xyXG4gIH0pO1xyXG4gIC8vcmVtb3ZlIGludmFsaWQgaW5wdXQgb24gZm9jdXMgcmVnaXN0ZXJcclxuICBwaHBMUi5yZWdmcm0ub24oXCJmb2N1c1wiLCBcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbihcImRpdi5pbnZhbGlkLWZlZWRiYWNrXCIpLmh0bWwoXCJcIik7XHJcbiAgfSk7XHJcbiAgLy9yZW1vdmUgaW52YWxpZCBpbnB1dCBvbiBmb2N1cyBsb2dpblxyXG4gIHBocExSLmxvZ2luZnJtLm9uKFwiZm9jdXNcIiwgXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcclxuICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJkaXYuaW52YWxpZC1mZWVkYmFja1wiKS5odG1sKFwiXCIpO1xyXG4gIH0pO1xyXG4gIC8vcmVzZXQgZm9yZ290IHBhc3N3b3JkIGZybVxyXG4gIHBocExSLmZvcmdvdGJveC5vbihcImhpZGUuYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgcGhwTFIuZm9yZ290ZnJtLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICB9KTtcclxuICAvL0ZpbGwgaW4gbG9naW4gZnJvbSBjb29raWVzIG9uIHNob253XHJcbiAgcGhwTFIubG9nYm94Lm9uKFwic2hvd24uYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIFwiYXV0aC9yZW1lbWJlcl9jaGVja1wiLFxyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgcGhwTFIubG9naW5mcm0uZmluZChcIiNlbWFpbFwiKS52YWwocmVzcG9uc2UubXNnLmVtYWlsKTtcclxuICAgICAgICAgIHBocExSLmxvZ2luZnJtXHJcbiAgICAgICAgICAgIC5maW5kKFwiI2N1c3RvbUNoZWNrXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY2hlY2tlZFwiLCByZXNwb25zZS5tc2cucmVtZW1iZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2VtYWlsXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjcGFzc3dvcmRcIikudmFsKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIC8vUmVnaXN0ZXIgZm9ybVxyXG4gIHBocExSLnJlZ2ZybS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHBocExSLnJlZ2ZybS5maW5kKFwiI3JlZ2lzdGVyLWJ0blwiKS52YWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgIHZhciBpbnB1dERhdGEgPSB7XHJcbiAgICAgIHVybDogXCJhdXRoL2FqYXhSZWdpc3RlclwiLFxyXG4gICAgICBmcm06IHBocExSLnJlZ2ZybSxcclxuICAgICAgdGFibGU6IFwiYXV0aFwiLFxyXG4gICAgICBub3RpZmljYXRpb246IFwiYWRtaW5cIixcclxuICAgICAgZnJtX25hbWU6IFwicmVnaXN0ZXItZnJtXCIsXHJcbiAgICB9O1xyXG4gICAgQWRkKGlucHV0RGF0YSwgZ2VzdGlvblIpO1xyXG4gICAgZnVuY3Rpb24gZ2VzdGlvblIocmVzcG9uc2UpIHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBwaHBMUi5yZWdmcm0uZmluZChcIiNyZWdpc3Rlci1idG5cIikudmFsKFwiRW5yZWdpc3RyZXJcIik7XHJcbiAgICAgIHZhciBvdXRwdXREYXRhID0ge1xyXG4gICAgICAgIGZybTogcGhwTFIucmVnZnJtLFxyXG4gICAgICAgIHN3YWw6IGZhbHNlLFxyXG4gICAgICAgIGFsZXJ0aWQ6IHBocExSLnJlZ2ZybS5maW5kKFwiI3JlZ0FsZXJ0XCIpLFxyXG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgIGltZ2FyZWE6IHBocExSLnJlZ2JveC5maW5kKFwiLnVwbG9hZC1wcm9maWxlLWltYWdlIC5pbWdcIiksXHJcbiAgICAgICAgaW1ndmFsdWU6IHJlc3BvbnNlLmltZyA/IHJlc3BvbnNlLmltZyA6IFwiXCIsXHJcbiAgICAgICAgYWxlcnRzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgICBNYW5hZ2VSZXNwb25zZShyZXNwb25zZSwgb3V0cHV0RGF0YSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vcmVhZCBwcm9maWxlIGltYWdlIG9uIGNoYW5nZVxyXG4gIHBocExSLnJlZ2JveFxyXG4gICAgLmZpbmQoJy51cGxvYWQtcHJvZmlsZS1pbWFnZSBpbnB1dFt0eXBlPVwiZmlsZVwiXScpXHJcbiAgICAub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICByZWFkdXJsKFxyXG4gICAgICAgIHRoaXMsXHJcbiAgICAgICAgcGhwTFIucmVnYm94LmZpbmQoXCIudXBsb2FkLXByb2ZpbGUtaW1hZ2UgLmltZ1wiKSxcclxuICAgICAgICBwaHBMUi5yZWdib3guZmluZChcIi51cGxvYWQtcHJvZmlsZS1pbWFnZSAuY2FtZXJhLWljb25cIilcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIC8vTG9naW4gZm9ybVxyXG5cclxuICBwaHBMUi5sb2dpbmZybS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjbG9naW4tYnRuXCIpLnZhbChcIlBsZWFzZSB3YWl0Li4uXCIpO1xyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgIHVybDogXCJhdXRoL2FqYXhMb2dpblwiLFxyXG4gICAgICBmcm06IHBocExSLmxvZ2luZnJtLFxyXG4gICAgICBmcm1fbmFtZTogXCJsb2dpbi1mcm1cIixcclxuICAgIH07XHJcbiAgICBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgTWFuYWdlTG9naW5SZXNwb25zZSk7XHJcbiAgICAvL21hbmFnZSBsb2dpbiBSZXNwb25zZVxyXG4gICAgZnVuY3Rpb24gTWFuYWdlTG9naW5SZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgICBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2xvZ2luLWJ0blwiKS52YWwoXCJMb2dpblwiKTtcclxuICAgICAgdmFyIHJkYXRhID0ge1xyXG4gICAgICAgIGZybTogcGhwTFIubG9naW5mcm0sXHJcbiAgICAgICAgYnRuOiBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2xvZ2luLWJ0blwiKSxcclxuICAgICAgICB0ZXh0QnRuOiBcIlNpZ24gSW5cIixcclxuICAgICAgICBhbGVydGlkOiBwaHBMUi5sb2dpbmZybS5maW5kKFwiI2xvZ2luQWxlcnRcIiksXHJcbiAgICAgICAgbG9naW5ib3g6IHBocExSLmxvZ2JveCxcclxuICAgICAgICBsb2dpbjogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgICAgTWFuYWdlUmVzcG9uc2UocmVzcG9uc2UsIHJkYXRhKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy9sb2dpbiB3aXRoIEZhY2Vib29rXHJcbiAgcGhwTFIubG9nYm94LmZpbmQoXCIjZmJsaW5rXCIpLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjbG9naW4tYnRuXCIpLnZhbChcIlBsZWFzZSB3YWl0Li4uXCIpO1xyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgIGZybTogcGhwTFIubG9naW5mcm0sXHJcbiAgICAgIHVybDogXCJndWVzdHMvZmJMb2dpblwiLFxyXG4gICAgICBmcm1fbmFtZTogXCJsb2dpbi1mcm1cIixcclxuICAgIH07XHJcbiAgICBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgRmJSZXNwb25zZSk7XHJcbiAgICBmdW5jdGlvbiBGYlJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICBGQiA9IGZhY2Vib29rbG9naW4ocmVzcG9uc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBocExSLmxvZ2luZnJtLmZpbmQoXCIjbG9naW5BbGVydFwiKS5odG1sKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICAvL2ZhY2Vib29rIGxvZ2luXHJcbiAgZnVuY3Rpb24gZmFjZWJvb2tsb2dpbihyZXNwKSB7XHJcbiAgICBGYWNlYm9vay5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIEZhY2Vib29rLmluaXQoe1xyXG4gICAgICAgIGFwcElkOiByZXNwLm1zZy5hcHBJRCxcclxuICAgICAgfSk7XHJcbiAgICAgIEZhY2Vib29rLmdldExvZ2luU3RhdHVzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSBcImNvbm5lY3RlZFwiKSB7XHJcbiAgICAgICAgICBnZXRGYlVzZXJEYXRhKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZiTG9naW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gRmFjZWJvb2s7XHJcbiAgfVxyXG5cclxuICAvLyBGYWNlYm9vayBsb2dpbiB3aXRoIEphdmFTY3JpcHQgU0RLXHJcbiAgZnVuY3Rpb24gZmJMb2dpbigpIHtcclxuICAgIEZCLmxvZ2luKHtcclxuICAgICAgc2NvcGU6IFwiZW1haWxcIixcclxuICAgICAgcmV0dXJuX3Njb3BlczogdHJ1ZSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IFwiY29ubmVjdGVkXCIpIHtcclxuICAgICAgICBnZXRGYlVzZXJEYXRhKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbkFsZXJ0XCIpLmlubmVySFRNTCA9XHJcbiAgICAgICAgICBcIlVzZXIgY2FuY2VsbGVkIGxvZ2luIG9yIGRpZCBub3QgZnVsbHkgYXV0aG9yaXplLlwiO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gLy8gRmV0Y2ggdGhlIHVzZXIgcHJvZmlsZSBkYXRhIGZyb20gZmFjZWJvb2tcclxuICBmdW5jdGlvbiBnZXRGYlVzZXJEYXRhKCkge1xyXG4gICAgRkIuYXBpKFwiL21lXCIsIFwiZ2V0XCIsIHtcclxuICAgICAgZmllbGRzOiBcImlkLGZpcnN0X25hbWUsbGFzdF9uYW1lLGVtYWlsLGxpbmssZ2VuZGVyLGxvY2FsZSxwaWN0dXJlXCIsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICBmcm06IHBocExSLmxvZ2luZnJtLFxyXG4gICAgICAgIGZybV9uYW1lOiBcImxvZ2luLWZybVwiLFxyXG4gICAgICAgIHVybDogXCJhdXRoL2ZibG9naW5cIixcclxuICAgICAgICBmcmVlZGF0YTogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpLFxyXG4gICAgICB9O1xyXG4gICAgICBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgTWFuYWdlTG9naW5SZXNwb25zZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy9Gb3Jnb3QgcGFzc3dvcmQgcmVxdWVzdFxyXG4gIHBocExSLmZvcmdvdGZybS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHBocExSLmZvcmdvdGZybS5maW5kKFwiI2ZvcmdvdC1idG5cIikudmFsKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgdXJsOiBcImF1dGgvZm9yZ290XCIsXHJcbiAgICAgIGZybTogcGhwTFIuZm9yZ290ZnJtLFxyXG4gICAgICBmcm1fbmFtZTogXCJmb3Jnb3QtZnJtXCIsXHJcbiAgICB9O1xyXG4gICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIE1SZXNwb25zZSk7XHJcbiAgICBmdW5jdGlvbiBNUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgICAgdmFyIHJkYXRhID0ge1xyXG4gICAgICAgIGZybTogcGhwTFIuZm9yZ290ZnJtLFxyXG4gICAgICAgIGFsZXJ0aWQ6IHBocExSLmZvcmdvdGZybS5maW5kKFwiI2ZvcmdvdEFsZXJ0XCIpLFxyXG4gICAgICAgIGFsZXJ0c3VjY2VzczogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgICAgTWFuYWdlUmVzcG9uc2UocmVzcG9uc2UsIHJkYXRhKTtcclxuICAgICAgcGhwTFIuZm9yZ290ZnJtLmZpbmQoXCIjZm9yZ290LWJ0blwiKS52YWwoXCJSZXNldCBwYXNzd29yZFwiKTtcclxuICAgIH1cclxuICB9KTtcclxuICAvL2xvZ291dFxyXG4gIHZhciBsb2dvdXQgPSAkKFwiYTpjb250YWlucygnTG9nb3V0JylcIik7XHJcblxyXG4gICQobG9nb3V0KS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgRkIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgRkIubG9nb3V0KCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAvLyBsb2dnZWQgb3V0XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIFwiYXV0aC9sb2dvdXRcIixcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIGxvZ291dC5jbG9zZXN0KFwiZGl2XCIpLmxvYWQobG9jYXRpb24uaHJlZiArIFwiIC5jb25uZWN0XCIpO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLm1zZyA9PSBcInJlZGlyZWN0XCIpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBCQVNFX1VSTDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BamF4IGxvZ291dCBmcm9tIGVsc2V3aGVyZVxyXG59O1xyXG4kLmZuLnBocExSID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICBuZXcgUGhwTFIodGhpcyk7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcbiQoXCIjTG9naW4tUmVnaXN0ZXItU3lzdGVtXCIpLnBocExSKCk7XHJcbiIsImV4cG9ydCBjb25zdCByZWFkdXJsID0gKGlucHV0LCBpbWcsIGljb24pID0+IHtcclxuICBpZiAoaW5wdXQuZmlsZXMgJiYgaW5wdXQuZmlsZXNbMF0pIHtcclxuICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGltZy5hdHRyKFwic3JjXCIsIGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgIGljb24uY3NzKHtcclxuICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXQuZmlsZXNbMF0pO1xyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==