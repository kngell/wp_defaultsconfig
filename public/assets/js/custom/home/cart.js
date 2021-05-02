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
return (self["webpackChunkkngell"] = self["webpackChunkkngell"] || []).push([["js/custom/home/cart"],{

/***/ "./src/assets/js/core/config.js":
/*!**************************************!*\
  !*** ./src/assets/js/core/config.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": function() { return /* binding */ BASE_URL; },
/* harmony export */   "AVATAR": function() { return /* binding */ AVATAR; },
/* harmony export */   "IMG": function() { return /* binding */ IMG; },
/* harmony export */   "isIE": function() { return /* binding */ isIE; }
/* harmony export */ });
var BASE_URL = /kngell_ecommerce/;
var AVATAR = BASE_URL + "public/assets/img/users/avatar.png";
var IMG = BASE_URL + "public/assets/img/";
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ "./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/assets/js/core/config.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

//Get visitors Data

var get_visitors_data = function get_visitors_data() {
  return new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default())(function (resolve, reject) {
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
    url: _config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + data.url,
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

/***/ }),

/***/ "./src/assets/js/custom/home/cart.js":
/*!*******************************************!*\
  !*** ./src/assets/js/custom/home/cart.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/parse-float */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-float.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! corejs/form_crud */ "./src/assets/js/core/form_crud.js");
/* harmony import */ var corejs_visitors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! corejs/visitors */ "./src/assets/js/core/visitors.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



var responsive = {
  0: {
    items: 1
  },
  600: {
    items: 3
  },
  1000: {
    items: 5
  }
};


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
    var _context, _context2, _context3, _context4, _context5, _context6, _context7, _context8, _context9;

    this.wrapper = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context = this.element).call(_context, "#main-site");
    this.count_items = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = this.element).call(_context2, ".cart_nb_elt");
    this.cart = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context3 = this.element).call(_context3, "#cart");
    this.banner = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context4 = this.element).call(_context4, "#banner-area");
    this.newPhone = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context5 = this.element).call(_context5, "#new-phones");
    this.cart_items = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context6 = this.element).call(_context6, "#cart_items");
    this.wishlist = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context7 = this.element).call(_context7, "#wishlist");
    this.wishlist_items = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context8 = this.element).call(_context8, "#wishlist-items");
    this.subTotal = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context9 = this.element).call(_context9, "#sub_total");
  };

  PhpPlugin.prototype.setupEvents = function () {
    var _context10;

    var phpPlugin = this; //=======================================================================
    //Currency format
    //=======================================================================

    var currency = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR"
    }); //=======================================================================
    //Owl carousel
    //=======================================================================
    //new phones

    _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context10 = phpPlugin.newPhone).call(_context10, ".owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      responsive: responsive
    }); //=======================================================================
    //Qty section
    //=======================================================================


    phpPlugin.cart_items.on("click", ".qty-up", function (e) {
      var _context11, _context12;

      var input = $(this).next(); //change price using ajax

      var data = {
        table: "product",
        id: _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context11 = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context12 = $(this).parents(".qty")).call(_context12, "form")).call(_context11, "input[name=item_id]").val(),
        user: "guest",
        url: "forms/showDetails",
        data_type: "values",
        return_mode: "details",
        params: $(this)
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.displayAllDetails)(data, display_product);

      function display_product(response, elt) {
        if (input.val() >= 1 && input.val() <= 9) {
          input.val(function (i, oldval) {
            return ++oldval;
          });

          if (response.result == "success") {
            var _context13, _context14;

            // 1- Increase price of the product
            var qty = _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(elt.next().val());

            _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context13 = elt.parents(".qty").parent().next()).call(_context13, ".product_price").html(function () {
              return currency.format(_babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(response.msg.item_price * qty));
            }); // 2- Set subtotal price


            _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context14 = phpPlugin.subTotal).call(_context14, "#deal-price").html(function (i, deal_price) {
              var reg = /\s/g; // /[^\d]+/g;

              return currency.format(_babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(response.msg.item_price) + _babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(deal_price.replace(reg, function () {
                return "";
              }).replace("&nbsp;€", "")));
            });
          }
        }
      } //closing Ajax call

    });
    phpPlugin.cart_items.on("click", ".qty-down", function (e) {
      var _context15, _context16;

      e.preventDefault();
      var input = $(this).prev(); //change price using ajax

      var data = {
        table: "product",
        id: _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context15 = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context16 = $(this).parents(".qty")).call(_context16, "form")).call(_context15, "input[name=item_id]").val(),
        user: "guest",
        url: "forms/showDetails",
        data_type: "values",
        return_mode: "details",
        params: $(this)
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.displayAllDetails)(data, display_product);

      function display_product(response, elt) {
        if (input.val() > 1 && input.val() <= 10) {
          input.val(function (i, oldval) {
            return --oldval;
          });

          if (response.result == "success") {
            var _context17, _context18;

            // 1- Increase price of the product
            var qty = _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(elt.prev().val());

            _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context17 = elt.parents(".qty").parent().next()).call(_context17, ".product_price").html(function () {
              return currency.format(_babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(response.msg.item_price * qty));
            }); // 2- Set subtotal price


            _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context18 = phpPlugin.subTotal).call(_context18, "#deal-price").html(function (i, deal_price) {
              var reg = /\s/g; // /[^\d]+/g;

              return currency.format(_babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(deal_price.replace(reg, function () {
                return "";
              }).replace("&nbsp;€", "")) - _babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(response.msg.item_price));
            });
          }
        }
      } //closing

    }); //=======================================================================
    //Delete cart
    //=======================================================================

    phpPlugin.wrapper.on("click", "#cart_items .deleteBtn", function (e) {
      e.preventDefault();
      $(this).html("Please wait...");
      var data = {
        url: "guests/delete",
        id: $(this).attr("id"),
        table: "cart",
        method: "delete_cart",
        frm: $(this).parent(),
        params: $(this)
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Call_controller)(data, manageResponse);

      function manageResponse(response, elt) {
        if (response.result == "success") {
          var _context19, _context20, _context21;

          refresh_deal_price(elt);
          elt.parents(".row").first().remove();
          phpPlugin.count_items.html(function () {
            return _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(phpPlugin.count_items.html()) - 1;
          });

          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context19 = phpPlugin.cart).call(_context19, ".cart_nb_elt").html(function (i, nb_items) {
            return nb_items - 1;
          });

          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context20 = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context21 = phpPlugin.newPhone).call(_context21, ".add_to_cart_frm input[value='" + elt.parent().children(":first").val() + "']").parent()).call(_context20, "button[type=submit]").removeClass("btn-success").addClass("btn-warning").html("Add to Cart");

          if (phpPlugin.cart_items.children().length == 0) {
            phpPlugin.cart_items.html(response.msg != 1 ? response.msg : "");
          }
        }
      }
    }); //=======================================================================
    //Save for later
    //=======================================================================

    phpPlugin.wrapper.on("click", "#cart_items .qty button[type=button]", function (e) {
      var _context22;

      var data = {
        url: "guests/toggleWishlistAndcCart",
        frm: $(this).prev(),
        frm_name: "delete-cart-item-frm" + _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context22 = $(this).prev()).call(_context22, "input[type=hidden]").val(),
        table: "wishlist",
        params: $(this),
        method: "save_For_Later"
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Call_controller)(data, manageResponse);

      function manageResponse(response, elt) {
        if (response.result == "success") {
          var _context23, _context24, _context25, _context26;

          console.log(response);
          phpPlugin.wishlist_items.append(function () {
            return response.msg[0][0];
          });

          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context23 = phpPlugin.cart).call(_context23, ".product_price").html(function (i, p_price) {
            return currency.format(_babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(p_price));
          });

          if (phpPlugin.wishlist.is(":hidden")) {
            phpPlugin.wishlist.show().fadeIn().delay(500);
          }

          refresh_deal_price(elt);
          elt.parents(".row").first().remove();
          phpPlugin.count_items.html(function (i, nb_item) {
            return _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(nb_item - 1);
          });

          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context24 = phpPlugin.cart).call(_context24, ".cart_nb_elt").html(function (i, nb_item) {
            return _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(nb_item - 1);
          });

          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context25 = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context26 = phpPlugin.newPhone).call(_context26, ".add_to_cart_frm input[value='" + elt.prev().children(":first").val() + "']").parent()).call(_context25, "button[type=submit]").removeClass("btn-success").addClass("btn-warning").html("Add to Cart");

          if (phpPlugin.cart_items.children().length == 0) {
            phpPlugin.cart_items.html(response.msg[1] != 1 ? response.msg[1] : "");
          }
        }
      }
    });

    function refresh_deal_price(elt) {
      var _context27;

      _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context27 = elt.parents("#cart_items").next()).call(_context27, "#deal-price").html(function (i, d_price) {
        var _context28;

        var reg = /\s/g;

        var p_price = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context28 = elt.parents(".row").first().last()).call(_context28, ".product_price").html();

        return currency.format(_babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(d_price.replace(reg, function () {
          return "";
        }).replace("&nbsp;€", "")) - _babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(p_price.replace(reg, function () {
          return "";
        }).replace("&nbsp;€", "")));
      });
    } //=======================================================================
    //Delete whishlist items
    //=======================================================================


    phpPlugin.wrapper.on("click", "#wishlist-items .deleteBtn", function (e) {
      e.preventDefault();
      $(this).html("Please wait...");
      var data = {
        url: "guests/delete",
        id: $(this).attr("id"),
        table: "wishlist",
        method: "delete_cart",
        frm: $(this).parent(),
        params: $(this)
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Call_controller)(data, manageResponse);

      function manageResponse(response, elt) {
        if (response.result == "success") {
          var _context29, _context30;

          elt.parents(".row").first().remove();

          if (phpPlugin.wishlist_items.children().length == 0) {
            phpPlugin.wishlist.hide();
          }

          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context29 = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context30 = phpPlugin.newPhone).call(_context30, ".add_to_cart_frm input[value='" + elt.parent().children(":first").val() + "']").parent()).call(_context29, "button[type=submit]").removeClass("btn-success").addClass("btn-warning").html("Add to Cart");
        }
      }
    }); //=======================================================================
    //Add to cart from whishlist
    //=======================================================================

    phpPlugin.wrapper.on("click", "#wishlist-items .qty button[type=button]", function (e) {
      var _context31;

      var data = {
        url: "guests/toggleWishlistAndcCart",
        frm: $(this).prev(),
        frm_name: "delete-cart-item-frm" + _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context31 = $(this).prev()).call(_context31, "input[type=hidden]").val(),
        table: "cart",
        params: $(this),
        method: "add_To_Cart"
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Call_controller)(data, manageResponse);

      function manageResponse(response, elt) {
        if (response.result == "success") {
          var _context32, _context34, _context35, _context36, _context37, _context38;

          //check if cart is empty
          if (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context32 = phpPlugin.cart_items).call(_context32, "#empty-cart").length != 0) {
            var _context33;

            _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context33 = phpPlugin.cart_items).call(_context33, "#empty-cart").remove();
          } //append cart


          phpPlugin.cart_items.append(function () {
            return response.msg[0];
          }); // format product price

          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context34 = phpPlugin.wrapper).call(_context34, ".product_price").html(function (i, p_price) {
            return currency.format(_babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(p_price));
          }); //refresh deal price


          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context35 = phpPlugin.wrapper).call(_context35, "#deal-price").html(function (i, d_price) {
            var reg = /\s/g;
            return currency.format(_babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(d_price.replace(reg, function () {
              return "";
            }).replace("&nbsp;€", "")) + _babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(response.msg[1]));
          }); //refresh nb items in the cart


          phpPlugin.count_items.html(function (i, nb_item) {
            return _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(nb_item) + 1;
          });

          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context36 = phpPlugin.wrapper).call(_context36, ".cart_nb_elt").html(function (i, nb_item) {
            return _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(nb_item) + 1;
          });

          elt.parents(".row").first().remove();

          if (phpPlugin.wishlist_items.children().length == 0) {
            phpPlugin.wishlist.hide();
          }

          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context37 = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context38 = phpPlugin.newPhone).call(_context38, ".add_to_cart_frm input[value='" + elt.prev().children(":first").val() + "']").parent()).call(_context37, "button[type=submit]").removeClass("btn-warning").addClass("btn-success").html("Add to Cart");
        }
      }
    });
  };

  $.fn.phpPlugin = function (options) {
    new PhpPlugin(this);
    return this;
  };

  $("#body").phpPlugin();
});

/***/ })

},
0,[["./src/assets/js/custom/home/cart.js","commons/frontend/commonVendor","js/librairies/frontlib"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2Zvcm1fY3J1ZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvdmlzaXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jdXN0b20vaG9tZS9jYXJ0LmpzIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwiQVZBVEFSIiwiSU1HIiwiaXNJRSIsInVzZXJBZ2VudCIsIm5hdmlnYXRvciIsInRlc3QiLCJkaXNwbGF5QWxsRGV0YWlscyIsImRhdGEiLCJnZXN0aW9uIiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJ0YWJsZSIsImlkIiwidXNlciIsInNlc3Npb25faWQiLCJkYXRhX3R5cGUiLCJyZXR1cm5fbW9kZSIsInRva2VuIiwiZnJtX25hbWUiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJwYXJhbXMiLCJlZGl0Rm9ybSIsImZvcm1EYXRhIiwiZGlzcGxheUFsbEl0ZW1zIiwic3RhcnQiLCJtYXgiLCJxdWVyeSIsInBhZ2UiLCJwYWdpbmF0aW9uIiwiQWRkIiwiRm9ybURhdGEiLCJmcm0iLCJhcHBlbmQiLCJub3RpZmljYXRpb24iLCJoYXNPd25Qcm9wZXJ0eSIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsImltYWdlVXJsc0FyeSIsInNlbGVjdDIiLCJjYXRlZ29yaWUiLCJpIiwiZmlsZXMiLCJsZW5ndGgiLCJuYW1lIiwiZWFjaCIsImtleSIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJjYWNoZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJDYWxsX2NvbnRyb2xsZXIiLCJ1cmxfZGF0YSIsImFjdGlvbiIsImZyZWVkYXRhIiwidXNlcl9pZCIsInZhbHVlIiwidGJsX29wdGlvbnMiLCJkYXRhVHlwZSIsIkRlbGV0ZSIsImRpc3BsYXlJdGVtIiwiY2hlY2tCZWZvcmVEZWxldGUiLCJ0aGVuIiwicmVzdWx0Iiwic2VydmVyRGF0YSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cmxfY2hlY2siLCJodG1sIiwiaHR3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3dhbF9tZXNzYWdlIiwiaW5uZXJIVE1MIiwic3dhbCIsImZpcmUiLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0Iiwic3dhbF9idXR0b24iLCJkb25lIiwibXNnIiwiZmFpbCIsImVycm9yIiwiZGlzcGxheU11bHRpc2VsbGVjdCIsImRpc3BsYXlJRCIsImFsZXJ0SUQiLCJhZGRDYXRlZ29ycmllIiwiY2F0RmllbGQiLCJjYXQiLCJxdWVyeVNlbGVjdG9yIiwiYWxlcnQiLCJzZWxlY3QyQWpheFBhcmFtcyIsInR5cGUiLCJkZWxheSIsInNlYXJjaFRlcm0iLCJ0ZXJtIiwicGFyZW50SUQiLCJwcm9jZXNzUmVzdWx0cyIsInJlc3VsdHMiLCJvYmoiLCJ0ZXh0IiwiZ2V0X3Zpc2l0b3JzX2RhdGEiLCJpcCIsInNlbmRfdmlzaXRvcnNfZGF0YSIsIm1hbmFnZVIiLCJjb29raWVzIiwicmVzcG9uc2l2ZSIsIml0ZW1zIiwiYWRkRXZlbnRMaXN0ZW5lciIsIlBocFBsdWdpbiIsImVsZW1lbnQiLCJpbml0IiwicHJvdG90eXBlIiwic2V0dXBWYXJpYWJsZXMiLCJzZXR1cEV2ZW50cyIsIndyYXBwZXIiLCJjb3VudF9pdGVtcyIsImNhcnQiLCJiYW5uZXIiLCJuZXdQaG9uZSIsImNhcnRfaXRlbXMiLCJ3aXNobGlzdCIsIndpc2hsaXN0X2l0ZW1zIiwic3ViVG90YWwiLCJwaHBQbHVnaW4iLCJjdXJyZW5jeSIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsIm93bENhcm91c2VsIiwibG9vcCIsIm5hdiIsImRvdHMiLCJvbiIsImUiLCJpbnB1dCIsIm5leHQiLCJwYXJlbnRzIiwiZGlzcGxheV9wcm9kdWN0IiwiZWx0Iiwib2xkdmFsIiwicXR5IiwicGFyZW50IiwiZm9ybWF0IiwiaXRlbV9wcmljZSIsImRlYWxfcHJpY2UiLCJyZWciLCJyZXBsYWNlIiwicHJldmVudERlZmF1bHQiLCJwcmV2IiwiYXR0ciIsIm1hbmFnZVJlc3BvbnNlIiwicmVmcmVzaF9kZWFsX3ByaWNlIiwiZmlyc3QiLCJyZW1vdmUiLCJuYl9pdGVtcyIsImNoaWxkcmVuIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInBfcHJpY2UiLCJpcyIsInNob3ciLCJmYWRlSW4iLCJuYl9pdGVtIiwiZF9wcmljZSIsImxhc3QiLCJoaWRlIiwiZm4iLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZPLElBQU1BLFFBQVEsR0FBRyxrQkFBakI7QUFDQSxJQUFNQyxNQUFNLEdBQUdELFFBQVEsR0FBRyxvQ0FBMUI7QUFDQSxJQUFNRSxHQUFHLEdBQUdGLFFBQVEsR0FBRyxvQkFBdkI7QUFFQSxJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ3hCLE1BQUlDLFNBQVMsR0FBR0MsU0FBUyxDQUFDRCxTQUExQjtBQUNBLFNBQU8sZUFBZUUsSUFBZixDQUFvQkYsU0FBcEIsQ0FBUDtBQUNELENBSE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDRlA7O0FBQ08sU0FBU0csaUJBQVQsQ0FBMkJDLElBQTNCLEVBQWlDQyxPQUFqQyxFQUEwQztBQUMvQ0MsR0FBQyxDQUFDQyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFWiw2Q0FBUSxHQUFHUSxJQUFJLENBQUNJLEdBRGhCO0FBRUxDLFVBQU0sRUFBRSxNQUZIO0FBR0xMLFFBQUksRUFBRTtBQUNKTSxXQUFLLEVBQUVOLElBQUksQ0FBQ00sS0FEUjtBQUVK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cy9jdXN0b20vaG9tZS9jYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IC9rbmdlbGxfZWNvbW1lcmNlLztcclxuZXhwb3J0IGNvbnN0IEFWQVRBUiA9IEJBU0VfVVJMICsgXCJwdWJsaWMvYXNzZXRzL2ltZy91c2Vycy9hdmF0YXIucG5nXCI7XHJcbmV4cG9ydCBjb25zdCBJTUcgPSBCQVNFX1VSTCArIFwicHVibGljL2Fzc2V0cy9pbWcvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaXNJRSA9ICgpID0+IHtcclxuICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICByZXR1cm4gL01TSUV8VHJpZGVudC8udGVzdCh1c2VyQWdlbnQpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBCQVNFX1VSTCwgaXNJRSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuLy9kaXNwbGF5IGFsbCBkZXRhaWxzXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsRGV0YWlscyhkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgdXNlcjogZGF0YS51c2VyID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgc2Vzc2lvbl9pZDogZGF0YS5zZXNzaW9uX2lkID8gZGF0YS5zZXNzaW9uX2lkIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgICAgdG9rZW46IGRhdGEudG9rZW4gPyBkYXRhLnRva2VuIDogXCJcIixcclxuICAgICAgZnJtX25hbWU6IGRhdGEuZnJtX25hbWUgPyBkYXRhLmZybV9uYW1lIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4vL2VkaXQgZGF0YVxyXG5leHBvcnQgZnVuY3Rpb24gZWRpdEZvcm0oZGF0YSwgZ2VzdGlvbikge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YS5mb3JtRGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG4vL2Rpc3BsYXkgYWxsIEl0ZW1zXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsSXRlbXMoZGF0YSwgZ2VzdGlvbikge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgaWQ6IGRhdGEuaWQgIT0gXCJcIiA/IGRhdGEuaWQgOiBcIlwiLFxyXG4gICAgICBzdGFydDogMCxcclxuICAgICAgbWF4OiBkYXRhLm1heCAhPSBcIlwiID8gZGF0YS5tYXggOiBcIlwiLFxyXG4gICAgICB1c2VyOiBkYXRhLnVzZXIgIT0gXCJcIiA/IGRhdGEudXNlciA6IFwiXCIsXHJcbiAgICAgIHF1ZXJ5OiBkYXRhLnF1ZXJ5ICE9IFwiXCIgPyBkYXRhLnF1ZXJ5IDogXCJcIixcclxuICAgICAgcGFnZTogZGF0YS5wYWdlICE9IFwiXCIgPyBkYXRhLnBhZ2UgOiBcIlwiLFxyXG4gICAgICBwYWdpbmF0aW9uOiBkYXRhLnBhZ2luYXRpb24gIT0gXCJcIiA/IGRhdGEucGFnaW5hdGlvbiA6IFwiXCIsXHJcbiAgICAgIGRhdGFfdHlwZTogZGF0YS5kYXRhX3R5cGUgPyBkYXRhLmRhdGFfdHlwZSA6IFwiXCIsXHJcbiAgICAgIHJldHVybl9tb2RlOiBkYXRhLnJldHVybl9tb2RlID8gZGF0YS5yZXR1cm5fbW9kZSA6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vYWRkIEl0ZW1cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZChkYXRhLCBnZXN0aW9uKSB7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEuZnJtWzBdKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJ0YWJsZVwiLCBkYXRhLnRhYmxlKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJub3RpZmljYXRpb25cIiwgZGF0YS5ub3RpZmljYXRpb24pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImZybV9uYW1lXCIsIGRhdGEuZnJtX25hbWUpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwic3RhcnRfZGF0ZVwiKSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcInN0YXJ0X2RhdGVcIiwgZGF0YS5zdGFydF9kYXRlKTtcclxuICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImVuZF9kYXRlXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZW5kX2RhdGVcIiwgZGF0YS5lbmRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJpbWFnZVVybHNBcnlcIikpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVVybHNBcnlcIiwgZGF0YS5pbWFnZVVybHNBcnkpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwic2VsZWN0MlwiKSkgZm9ybURhdGEuYXBwZW5kKFwic2VsZWN0MlwiLCBkYXRhLnNlbGVjdDIpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiY2F0ZWdvcmllXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY3VzdG9tX2NhdGVnb3JpZVwiLCBkYXRhLmNhdGVnb3JpZSk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJmaWxlc1wiKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChkYXRhLmZpbGVzW2ldLm5hbWUsIGRhdGEuZmlsZXNbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcInNlbGVjdDJcIikpIHtcclxuICAgICQoZGF0YS5zZWxlY3QyKS5lYWNoKGZ1bmN0aW9uIChrZXksIHZhbCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuLy91cGRhdGVcclxuZXhwb3J0IGZ1bmN0aW9uIENhbGxfY29udHJvbGxlcihkYXRhLCBnZXN0aW9uKSB7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEuZnJtWzBdKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJmcm1fbmFtZVwiLCBkYXRhLmZybV9uYW1lKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJpc0lFXCIsIGlzSUUoKSk7XHJcbiAgaWYgKGRhdGEudGFibGUpIGZvcm1EYXRhLmFwcGVuZChcInRhYmxlXCIsIGRhdGEudGFibGUpO1xyXG4gIGlmIChkYXRhLm5vdGlmaWNhdGlvbikgZm9ybURhdGEuYXBwZW5kKFwibm90aWZpY2F0aW9uXCIsIGRhdGEubm90aWZpY2F0aW9uKTtcclxuICBpZiAoZGF0YS51cmxfZGF0YSkgZm9ybURhdGEuYXBwZW5kKFwidXJsX2RhdGFcIiwgZGF0YS51cmxfZGF0YSk7XHJcbiAgaWYgKGRhdGEuYWN0aW9uKSBmb3JtRGF0YS5hcHBlbmQoXCJhY3Rpb25cIiwgZGF0YS5hY3Rpb24pO1xyXG4gIGlmIChkYXRhLmltYWdlVXJsc0FyeSkgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VVcmxzQXJ5XCIsIGRhdGEuaW1hZ2VVcmxzQXJ5KTtcclxuICBpZiAoZGF0YS5mcmVlZGF0YSkgZm9ybURhdGEuYXBwZW5kKFwiZnJlZWRhdGFcIiwgZGF0YS5mcmVlZGF0YSk7XHJcbiAgaWYgKGRhdGEuc3RhcnRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwic3RhcnRfZGF0ZVwiLCBkYXRhLnN0YXJ0X2RhdGUpO1xyXG4gIGlmIChkYXRhLmVuZF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJlbmRfZGF0ZVwiLCBkYXRhLmVuZF9kYXRlKTtcclxuICBpZiAoZGF0YS5pZCkgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgZGF0YS5pZCk7XHJcbiAgaWYgKGRhdGEudXNlcl9pZCkgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgZGF0YS51c2VyX2lkKTtcclxuICBpZiAoZGF0YS5tZXRob2QpIGZvcm1EYXRhLmFwcGVuZChcIm1ldGhvZFwiLCBkYXRhLm1ldGhvZCk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJzZWxlY3QyXCIpKSB7XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhLnNlbGVjdDIpKSB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiY2F0ZWdvcmllXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY3VzdG9tX2NhdGVnb3JpZVwiLCBkYXRhLmNhdGVnb3JpZSk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJ0Ymxfb3B0aW9uc1wiKSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcInRibF9vcHRpb25zXCIsIGRhdGEudGJsX29wdGlvbnMpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiZmlsZXNcIikpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoZGF0YS5maWxlc1tpXS5uYW1lLCBkYXRhLmZpbGVzW2ldKTtcclxuICAgIH1cclxuICB9XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG4vL2RlbGV0ZVxyXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlKGRhdGEsIGRpc3BsYXlJdGVtKSB7XHJcbiAgY2hlY2tCZWZvcmVEZWxldGUoZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YTogZGF0YS5zZXJ2ZXJEYXRhLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgZGlzcGxheUl0ZW0ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4vL2Z1bmN0aW9uIGNoZWNrIGJlZm9yZSBkZWxldGVcclxuZnVuY3Rpb24gY2hlY2tCZWZvcmVEZWxldGUoZGF0YSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBpZiAoIWRhdGEudXJsX2NoZWNrKSB7XHJcbiAgICAgIGNvbnN0IGh0bWwgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaHR3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpZiAoZGF0YS5zd2FsX21lc3NhZ2UpIHtcclxuICAgICAgICAgIHJldHVybiAoaHR3LmlubmVySFRNTCA9IGRhdGEuc3dhbF9tZXNzYWdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIChodHcuaW5uZXJIVE1MID0gXCI8cD5Zb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyE8L3A+XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgZGF0YS5zd2FsXHJcbiAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgIGh0bWw6IGh0bWwoKSxcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogZGF0YS5zd2FsX2J1dHRvbiA/IGRhdGEuc3dhbF9idXR0b24gOiBcIkRlbGV0ZSFcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybF9jaGVjayxcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGRhdGE6IGRhdGEuc2VydmVyRGF0YSxcclxuICAgICAgfSlcclxuICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGRhdGEuc3dhbFxyXG4gICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgaHRtbDogXCI8cD5Zb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyE8L3A+XCIgKyByZXNwb25zZS5tc2csXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiRGVsZXRlIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU11bHRpc2VsbGVjdChkYXRhKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBcImZvcm1zL2ZpbGxNdWx0aXNlbGVjdFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgZGF0YS5kaXNwbGF5SUQuYXBwZW5kKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YS5hbGVydElELmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhdGVnb3JyaWUoY2F0RmllbGQsIGFsZXJ0SUQpIHtcclxuICBsZXQgY2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXRGaWVsZCk7XHJcbiAgaWYgKGNhdC52YWx1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgYWxlcnQoXCJMZSBjaGFtcHMgY2F0w6lnb3JpZSBlc3QgdmlkZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIFwiZm9ybXMvYWRkY2F0ZWdvcmllXCIsXHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjYXRlZ29yaWU6IGNhdC52YWx1ZSxcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlICE9IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAkKGFsZXJ0SUQpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0MkFqYXhQYXJhbXMoZGF0YSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICB0eXBlOiBcInBvc3RcIixcclxuICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgIGRlbGF5OiAyNTAsXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VhcmNoVGVybTogcGFyYW1zLnRlcm0sIC8vIHNlYXJjaCB0ZXJtXHJcbiAgICAgICAgdGFibGU6IGRhdGEudGFibGUgIT0gXCJcIiA/IGRhdGEudGFibGUgOiBcIlwiLFxyXG4gICAgICAgIGRhdGFfdHlwZTogZGF0YS5kYXRhX3R5cGUgIT0gXCJcIiA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgICBwYXJlbnRJRDogZGF0YS5wYXJlbnRJRCAhPSBcIlwiID8gZGF0YS5wYXJlbnRJRCA6IFwiXCIsXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgcHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHJlc3VsdHM6ICQubWFwKHJlc3BvbnNlLm1zZywgZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICBpZiAob2JqLmlkICE9IDApIHtcclxuICAgICAgICAgICAgICByZXR1cm4geyBpZDogb2JqLmlkLCB0ZXh0OiBvYmoudGV4dCB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBvYmouaWQsIHRleHQ6IG9iai50ZXh0IH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjYWNoZTogdHJ1ZSxcclxuICB9O1xyXG59XHJcbiIsIi8vR2V0IHZpc2l0b3JzIERhdGFcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuZXhwb3J0IGNvbnN0IGdldF92aXNpdG9yc19kYXRhID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgaXA6ICQoXCIjaXBfYWRkcmVzc1wiKS52YWwoKSxcclxuICAgIH07XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgfSBlbHNlIHJlamVjdChcIm5vIGRhdGFcIik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZF92aXNpdG9yc19kYXRhID0gKGRhdGEsIG1hbmFnZVIpID0+IHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgIGlwOiBkYXRhLmlwID8gZGF0YS5pcCA6IFwiXCIsXHJcbiAgICAgIGNvb2tpZXM6IGRhdGEuY29va2llcyA/IGRhdGEuY29va2llcyA6IFwiXCIsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgbWFuYWdlUihyZXNwb25zZSk7XHJcbiAgICB9KVxyXG4gICAgLmZhaWwoKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJjb25zdCByZXNwb25zaXZlID0ge1xyXG4gIDA6IHtcclxuICAgIGl0ZW1zOiAxLFxyXG4gIH0sXHJcbiAgNjAwOiB7XHJcbiAgICBpdGVtczogMyxcclxuICB9LFxyXG4gIDEwMDA6IHtcclxuICAgIGl0ZW1zOiA1LFxyXG4gIH0sXHJcbn07XHJcbmltcG9ydCB7IGRpc3BsYXlBbGxEZXRhaWxzLCBDYWxsX2NvbnRyb2xsZXIgfSBmcm9tIFwiY29yZWpzL2Zvcm1fY3J1ZFwiO1xyXG5pbXBvcnQgeyBnZXRfdmlzaXRvcnNfZGF0YSwgc2VuZF92aXNpdG9yc19kYXRhIH0gZnJvbSBcImNvcmVqcy92aXNpdG9yc1wiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgZnVuY3Rpb24gUGhwUGx1Z2luKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcbiAgUGhwUGx1Z2luLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zZXR1cFZhcmlhYmxlcygpO1xyXG4gICAgdGhpcy5zZXR1cEV2ZW50cygpO1xyXG4gIH07XHJcbiAgUGhwUGx1Z2luLnByb3RvdHlwZS5zZXR1cFZhcmlhYmxlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMud3JhcHBlciA9IHRoaXMuZWxlbWVudC5maW5kKFwiI21haW4tc2l0ZVwiKTtcclxuICAgIHRoaXMuY291bnRfaXRlbXMgPSB0aGlzLmVsZW1lbnQuZmluZChcIi5jYXJ0X25iX2VsdFwiKTtcclxuICAgIHRoaXMuY2FydCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2NhcnRcIik7XHJcbiAgICB0aGlzLmJhbm5lciA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2Jhbm5lci1hcmVhXCIpO1xyXG4gICAgdGhpcy5uZXdQaG9uZSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI25ldy1waG9uZXNcIik7XHJcbiAgICB0aGlzLmNhcnRfaXRlbXMgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNjYXJ0X2l0ZW1zXCIpO1xyXG4gICAgdGhpcy53aXNobGlzdCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3dpc2hsaXN0XCIpO1xyXG4gICAgdGhpcy53aXNobGlzdF9pdGVtcyA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3dpc2hsaXN0LWl0ZW1zXCIpO1xyXG4gICAgdGhpcy5zdWJUb3RhbCA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3N1Yl90b3RhbFwiKTtcclxuICB9O1xyXG4gIFBocFBsdWdpbi5wcm90b3R5cGUuc2V0dXBFdmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcGhwUGx1Z2luID0gdGhpcztcclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL0N1cnJlbmN5IGZvcm1hdFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbGV0IGN1cnJlbmN5ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZnItRlJcIiwge1xyXG4gICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG4gICAgICBjdXJyZW5jeTogXCJFVVJcIixcclxuICAgIH0pO1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vT3dsIGNhcm91c2VsXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL25ldyBwaG9uZXNcclxuICAgIHBocFBsdWdpbi5uZXdQaG9uZS5maW5kKFwiLm93bC1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmUsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL1F0eSBzZWN0aW9uXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwaHBQbHVnaW4uY2FydF9pdGVtcy5vbihcImNsaWNrXCIsIFwiLnF0eS11cFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBsZXQgaW5wdXQgPSAkKHRoaXMpLm5leHQoKTtcclxuICAgICAgLy9jaGFuZ2UgcHJpY2UgdXNpbmcgYWpheFxyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB0YWJsZTogXCJwcm9kdWN0XCIsXHJcbiAgICAgICAgaWQ6ICQodGhpcylcclxuICAgICAgICAgIC5wYXJlbnRzKFwiLnF0eVwiKVxyXG4gICAgICAgICAgLmZpbmQoXCJmb3JtXCIpXHJcbiAgICAgICAgICAuZmluZChcImlucHV0W25hbWU9aXRlbV9pZF1cIilcclxuICAgICAgICAgIC52YWwoKSxcclxuICAgICAgICB1c2VyOiBcImd1ZXN0XCIsXHJcbiAgICAgICAgdXJsOiBcImZvcm1zL3Nob3dEZXRhaWxzXCIsXHJcbiAgICAgICAgZGF0YV90eXBlOiBcInZhbHVlc1wiLFxyXG4gICAgICAgIHJldHVybl9tb2RlOiBcImRldGFpbHNcIixcclxuICAgICAgICBwYXJhbXM6ICQodGhpcyksXHJcbiAgICAgIH07XHJcbiAgICAgIGRpc3BsYXlBbGxEZXRhaWxzKGRhdGEsIGRpc3BsYXlfcHJvZHVjdCk7XHJcbiAgICAgIGZ1bmN0aW9uIGRpc3BsYXlfcHJvZHVjdChyZXNwb25zZSwgZWx0KSB7XHJcbiAgICAgICAgaWYgKGlucHV0LnZhbCgpID49IDEgJiYgaW5wdXQudmFsKCkgPD0gOSkge1xyXG4gICAgICAgICAgaW5wdXQudmFsKGZ1bmN0aW9uIChpLCBvbGR2YWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuICsrb2xkdmFsO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIC8vIDEtIEluY3JlYXNlIHByaWNlIG9mIHRoZSBwcm9kdWN0XHJcbiAgICAgICAgICAgIGxldCBxdHkgPSBwYXJzZUludChlbHQubmV4dCgpLnZhbCgpKTtcclxuICAgICAgICAgICAgZWx0XHJcbiAgICAgICAgICAgICAgLnBhcmVudHMoXCIucXR5XCIpXHJcbiAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgLm5leHQoKVxyXG4gICAgICAgICAgICAgIC5maW5kKFwiLnByb2R1Y3RfcHJpY2VcIilcclxuICAgICAgICAgICAgICAuaHRtbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuZm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHJlc3BvbnNlLm1zZy5pdGVtX3ByaWNlICogcXR5KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gMi0gU2V0IHN1YnRvdGFsIHByaWNlXHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5zdWJUb3RhbFxyXG4gICAgICAgICAgICAgIC5maW5kKFwiI2RlYWwtcHJpY2VcIilcclxuICAgICAgICAgICAgICAuaHRtbChmdW5jdGlvbiAoaSwgZGVhbF9wcmljZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlZyA9IC9cXHMvZzsgLy8gL1teXFxkXSsvZztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQoXHJcbiAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocmVzcG9uc2UubXNnLml0ZW1fcHJpY2UpICtcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVhbF9wcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShyZWcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCImbmJzcDvigqxcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSAvL2Nsb3NpbmcgQWpheCBjYWxsXHJcbiAgICB9KTtcclxuXHJcbiAgICBwaHBQbHVnaW4uY2FydF9pdGVtcy5vbihcImNsaWNrXCIsIFwiLnF0eS1kb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbGV0IGlucHV0ID0gJCh0aGlzKS5wcmV2KCk7XHJcbiAgICAgIC8vY2hhbmdlIHByaWNlIHVzaW5nIGFqYXhcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgdGFibGU6IFwicHJvZHVjdFwiLFxyXG4gICAgICAgIGlkOiAkKHRoaXMpXHJcbiAgICAgICAgICAucGFyZW50cyhcIi5xdHlcIilcclxuICAgICAgICAgIC5maW5kKFwiZm9ybVwiKVxyXG4gICAgICAgICAgLmZpbmQoXCJpbnB1dFtuYW1lPWl0ZW1faWRdXCIpXHJcbiAgICAgICAgICAudmFsKCksXHJcbiAgICAgICAgdXNlcjogXCJndWVzdFwiLFxyXG4gICAgICAgIHVybDogXCJmb3Jtcy9zaG93RGV0YWlsc1wiLFxyXG4gICAgICAgIGRhdGFfdHlwZTogXCJ2YWx1ZXNcIixcclxuICAgICAgICByZXR1cm5fbW9kZTogXCJkZXRhaWxzXCIsXHJcbiAgICAgICAgcGFyYW1zOiAkKHRoaXMpLFxyXG4gICAgICB9O1xyXG4gICAgICBkaXNwbGF5QWxsRGV0YWlscyhkYXRhLCBkaXNwbGF5X3Byb2R1Y3QpO1xyXG4gICAgICBmdW5jdGlvbiBkaXNwbGF5X3Byb2R1Y3QocmVzcG9uc2UsIGVsdCkge1xyXG4gICAgICAgIGlmIChpbnB1dC52YWwoKSA+IDEgJiYgaW5wdXQudmFsKCkgPD0gMTApIHtcclxuICAgICAgICAgIGlucHV0LnZhbChmdW5jdGlvbiAoaSwgb2xkdmFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtLW9sZHZhbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICAvLyAxLSBJbmNyZWFzZSBwcmljZSBvZiB0aGUgcHJvZHVjdFxyXG4gICAgICAgICAgICBsZXQgcXR5ID0gcGFyc2VJbnQoZWx0LnByZXYoKS52YWwoKSk7XHJcbiAgICAgICAgICAgIGVsdFxyXG4gICAgICAgICAgICAgIC5wYXJlbnRzKFwiLnF0eVwiKVxyXG4gICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgIC5uZXh0KClcclxuICAgICAgICAgICAgICAuZmluZChcIi5wcm9kdWN0X3ByaWNlXCIpXHJcbiAgICAgICAgICAgICAgLmh0bWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LmZvcm1hdChcclxuICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChyZXNwb25zZS5tc2cuaXRlbV9wcmljZSAqIHF0eSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIDItIFNldCBzdWJ0b3RhbCBwcmljZVxyXG4gICAgICAgICAgICBwaHBQbHVnaW4uc3ViVG90YWxcclxuICAgICAgICAgICAgICAuZmluZChcIiNkZWFsLXByaWNlXCIpXHJcbiAgICAgICAgICAgICAgLmh0bWwoZnVuY3Rpb24gKGksIGRlYWxfcHJpY2UpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZWcgPSAvXFxzL2c7IC8vIC9bXlxcZF0rL2c7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuZm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIGRlYWxfcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIiZuYnNwO+KCrFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICApIC0gcGFyc2VGbG9hdChyZXNwb25zZS5tc2cuaXRlbV9wcmljZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IC8vY2xvc2luZ1xyXG4gICAgfSk7XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL0RlbGV0ZSBjYXJ0XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwaHBQbHVnaW4ud3JhcHBlci5vbihcImNsaWNrXCIsIFwiI2NhcnRfaXRlbXMgLmRlbGV0ZUJ0blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQodGhpcykuaHRtbChcIlBsZWFzZSB3YWl0Li4uXCIpO1xyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB1cmw6IFwiZ3Vlc3RzL2RlbGV0ZVwiLFxyXG4gICAgICAgIGlkOiAkKHRoaXMpLmF0dHIoXCJpZFwiKSxcclxuICAgICAgICB0YWJsZTogXCJjYXJ0XCIsXHJcbiAgICAgICAgbWV0aG9kOiBcImRlbGV0ZV9jYXJ0XCIsXHJcbiAgICAgICAgZnJtOiAkKHRoaXMpLnBhcmVudCgpLFxyXG4gICAgICAgIHBhcmFtczogJCh0aGlzKSxcclxuICAgICAgfTtcclxuICAgICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIG1hbmFnZVJlc3BvbnNlKTtcclxuICAgICAgZnVuY3Rpb24gbWFuYWdlUmVzcG9uc2UocmVzcG9uc2UsIGVsdCkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIHJlZnJlc2hfZGVhbF9wcmljZShlbHQpO1xyXG4gICAgICAgICAgZWx0LnBhcmVudHMoXCIucm93XCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICBwaHBQbHVnaW4uY291bnRfaXRlbXMuaHRtbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChwaHBQbHVnaW4uY291bnRfaXRlbXMuaHRtbCgpKSAtIDE7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHBocFBsdWdpbi5jYXJ0LmZpbmQoXCIuY2FydF9uYl9lbHRcIikuaHRtbChmdW5jdGlvbiAoaSwgbmJfaXRlbXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5iX2l0ZW1zIC0gMTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcGhwUGx1Z2luLm5ld1Bob25lXHJcbiAgICAgICAgICAgIC5maW5kKFxyXG4gICAgICAgICAgICAgIFwiLmFkZF90b19jYXJ0X2ZybSBpbnB1dFt2YWx1ZT0nXCIgK1xyXG4gICAgICAgICAgICAgICAgZWx0LnBhcmVudCgpLmNoaWxkcmVuKFwiOmZpcnN0XCIpLnZhbCgpICtcclxuICAgICAgICAgICAgICAgIFwiJ11cIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAuZmluZChcImJ1dHRvblt0eXBlPXN1Ym1pdF1cIilcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwiYnRuLXdhcm5pbmdcIilcclxuICAgICAgICAgICAgLmh0bWwoXCJBZGQgdG8gQ2FydFwiKTtcclxuICAgICAgICAgIGlmIChwaHBQbHVnaW4uY2FydF9pdGVtcy5jaGlsZHJlbigpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5jYXJ0X2l0ZW1zLmh0bWwocmVzcG9uc2UubXNnICE9IDEgPyByZXNwb25zZS5tc2cgOiBcIlwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9TYXZlIGZvciBsYXRlclxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLndyYXBwZXIub24oXHJcbiAgICAgIFwiY2xpY2tcIixcclxuICAgICAgXCIjY2FydF9pdGVtcyAucXR5IGJ1dHRvblt0eXBlPWJ1dHRvbl1cIixcclxuICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgIHVybDogXCJndWVzdHMvdG9nZ2xlV2lzaGxpc3RBbmRjQ2FydFwiLFxyXG4gICAgICAgICAgZnJtOiAkKHRoaXMpLnByZXYoKSxcclxuICAgICAgICAgIGZybV9uYW1lOlxyXG4gICAgICAgICAgICBcImRlbGV0ZS1jYXJ0LWl0ZW0tZnJtXCIgK1xyXG4gICAgICAgICAgICAkKHRoaXMpLnByZXYoKS5maW5kKFwiaW5wdXRbdHlwZT1oaWRkZW5dXCIpLnZhbCgpLFxyXG4gICAgICAgICAgdGFibGU6IFwid2lzaGxpc3RcIixcclxuICAgICAgICAgIHBhcmFtczogJCh0aGlzKSxcclxuICAgICAgICAgIG1ldGhvZDogXCJzYXZlX0Zvcl9MYXRlclwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIG1hbmFnZVJlc3BvbnNlKTtcclxuICAgICAgICBmdW5jdGlvbiBtYW5hZ2VSZXNwb25zZShyZXNwb25zZSwgZWx0KSB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgcGhwUGx1Z2luLndpc2hsaXN0X2l0ZW1zLmFwcGVuZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLm1zZ1swXVswXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5jYXJ0LmZpbmQoXCIucHJvZHVjdF9wcmljZVwiKS5odG1sKGZ1bmN0aW9uIChpLCBwX3ByaWNlKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LmZvcm1hdChwYXJzZUZsb2F0KHBfcHJpY2UpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChwaHBQbHVnaW4ud2lzaGxpc3QuaXMoXCI6aGlkZGVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgcGhwUGx1Z2luLndpc2hsaXN0LnNob3coKS5mYWRlSW4oKS5kZWxheSg1MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlZnJlc2hfZGVhbF9wcmljZShlbHQpO1xyXG4gICAgICAgICAgICBlbHQucGFyZW50cyhcIi5yb3dcIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgcGhwUGx1Z2luLmNvdW50X2l0ZW1zLmh0bWwoZnVuY3Rpb24gKGksIG5iX2l0ZW0pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQobmJfaXRlbSAtIDEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcGhwUGx1Z2luLmNhcnQuZmluZChcIi5jYXJ0X25iX2VsdFwiKS5odG1sKGZ1bmN0aW9uIChpLCBuYl9pdGVtKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG5iX2l0ZW0gLSAxKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5uZXdQaG9uZVxyXG4gICAgICAgICAgICAgIC5maW5kKFxyXG4gICAgICAgICAgICAgICAgXCIuYWRkX3RvX2NhcnRfZnJtIGlucHV0W3ZhbHVlPSdcIiArXHJcbiAgICAgICAgICAgICAgICAgIGVsdC5wcmV2KCkuY2hpbGRyZW4oXCI6Zmlyc3RcIikudmFsKCkgK1xyXG4gICAgICAgICAgICAgICAgICBcIiddXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCJidXR0b25bdHlwZT1zdWJtaXRdXCIpXHJcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJidG4td2FybmluZ1wiKVxyXG4gICAgICAgICAgICAgIC5odG1sKFwiQWRkIHRvIENhcnRcIik7XHJcbiAgICAgICAgICAgIGlmIChwaHBQbHVnaW4uY2FydF9pdGVtcy5jaGlsZHJlbigpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgcGhwUGx1Z2luLmNhcnRfaXRlbXMuaHRtbChcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLm1zZ1sxXSAhPSAxID8gcmVzcG9uc2UubXNnWzFdIDogXCJcIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBmdW5jdGlvbiByZWZyZXNoX2RlYWxfcHJpY2UoZWx0KSB7XHJcbiAgICAgIGVsdFxyXG4gICAgICAgIC5wYXJlbnRzKFwiI2NhcnRfaXRlbXNcIilcclxuICAgICAgICAubmV4dCgpXHJcbiAgICAgICAgLmZpbmQoXCIjZGVhbC1wcmljZVwiKVxyXG4gICAgICAgIC5odG1sKGZ1bmN0aW9uIChpLCBkX3ByaWNlKSB7XHJcbiAgICAgICAgICBsZXQgcmVnID0gL1xccy9nO1xyXG4gICAgICAgICAgbGV0IHBfcHJpY2UgPSBlbHRcclxuICAgICAgICAgICAgLnBhcmVudHMoXCIucm93XCIpXHJcbiAgICAgICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgICAgIC5sYXN0KClcclxuICAgICAgICAgICAgLmZpbmQoXCIucHJvZHVjdF9wcmljZVwiKVxyXG4gICAgICAgICAgICAuaHRtbCgpO1xyXG4gICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LmZvcm1hdChcclxuICAgICAgICAgICAgcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICBkX3ByaWNlXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZShyZWcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoXCImbmJzcDvigqxcIiwgXCJcIilcclxuICAgICAgICAgICAgKSAtXHJcbiAgICAgICAgICAgICAgcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgIHBfcHJpY2VcclxuICAgICAgICAgICAgICAgICAgLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJm5ic3A74oKsXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vRGVsZXRlIHdoaXNobGlzdCBpdGVtc1xyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLndyYXBwZXIub24oXCJjbGlja1wiLCBcIiN3aXNobGlzdC1pdGVtcyAuZGVsZXRlQnRuXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgJCh0aGlzKS5odG1sKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHVybDogXCJndWVzdHMvZGVsZXRlXCIsXHJcbiAgICAgICAgaWQ6ICQodGhpcykuYXR0cihcImlkXCIpLFxyXG4gICAgICAgIHRhYmxlOiBcIndpc2hsaXN0XCIsXHJcbiAgICAgICAgbWV0aG9kOiBcImRlbGV0ZV9jYXJ0XCIsXHJcbiAgICAgICAgZnJtOiAkKHRoaXMpLnBhcmVudCgpLFxyXG4gICAgICAgIHBhcmFtczogJCh0aGlzKSxcclxuICAgICAgfTtcclxuICAgICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIG1hbmFnZVJlc3BvbnNlKTtcclxuICAgICAgZnVuY3Rpb24gbWFuYWdlUmVzcG9uc2UocmVzcG9uc2UsIGVsdCkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgIGVsdC5wYXJlbnRzKFwiLnJvd1wiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgaWYgKHBocFBsdWdpbi53aXNobGlzdF9pdGVtcy5jaGlsZHJlbigpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi53aXNobGlzdC5oaWRlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwaHBQbHVnaW4ubmV3UGhvbmVcclxuICAgICAgICAgICAgLmZpbmQoXHJcbiAgICAgICAgICAgICAgXCIuYWRkX3RvX2NhcnRfZnJtIGlucHV0W3ZhbHVlPSdcIiArXHJcbiAgICAgICAgICAgICAgICBlbHQucGFyZW50KCkuY2hpbGRyZW4oXCI6Zmlyc3RcIikudmFsKCkgK1xyXG4gICAgICAgICAgICAgICAgXCInXVwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgIC5maW5kKFwiYnV0dG9uW3R5cGU9c3VibWl0XVwiKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4tc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJidG4td2FybmluZ1wiKVxyXG4gICAgICAgICAgICAuaHRtbChcIkFkZCB0byBDYXJ0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL0FkZCB0byBjYXJ0IGZyb20gd2hpc2hsaXN0XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwaHBQbHVnaW4ud3JhcHBlci5vbihcclxuICAgICAgXCJjbGlja1wiLFxyXG4gICAgICBcIiN3aXNobGlzdC1pdGVtcyAucXR5IGJ1dHRvblt0eXBlPWJ1dHRvbl1cIixcclxuICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgIHVybDogXCJndWVzdHMvdG9nZ2xlV2lzaGxpc3RBbmRjQ2FydFwiLFxyXG4gICAgICAgICAgZnJtOiAkKHRoaXMpLnByZXYoKSxcclxuICAgICAgICAgIGZybV9uYW1lOlxyXG4gICAgICAgICAgICBcImRlbGV0ZS1jYXJ0LWl0ZW0tZnJtXCIgK1xyXG4gICAgICAgICAgICAkKHRoaXMpLnByZXYoKS5maW5kKFwiaW5wdXRbdHlwZT1oaWRkZW5dXCIpLnZhbCgpLFxyXG4gICAgICAgICAgdGFibGU6IFwiY2FydFwiLFxyXG4gICAgICAgICAgcGFyYW1zOiAkKHRoaXMpLFxyXG4gICAgICAgICAgbWV0aG9kOiBcImFkZF9Ub19DYXJ0XCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgbWFuYWdlUmVzcG9uc2UpO1xyXG4gICAgICAgIGZ1bmN0aW9uIG1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCBlbHQpIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgLy9jaGVjayBpZiBjYXJ0IGlzIGVtcHR5XHJcbiAgICAgICAgICAgIGlmIChwaHBQbHVnaW4uY2FydF9pdGVtcy5maW5kKFwiI2VtcHR5LWNhcnRcIikubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICBwaHBQbHVnaW4uY2FydF9pdGVtcy5maW5kKFwiI2VtcHR5LWNhcnRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9hcHBlbmQgY2FydFxyXG4gICAgICAgICAgICBwaHBQbHVnaW4uY2FydF9pdGVtcy5hcHBlbmQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5tc2dbMF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBmb3JtYXQgcHJvZHVjdCBwcmljZVxyXG4gICAgICAgICAgICBwaHBQbHVnaW4ud3JhcHBlclxyXG4gICAgICAgICAgICAgIC5maW5kKFwiLnByb2R1Y3RfcHJpY2VcIilcclxuICAgICAgICAgICAgICAuaHRtbChmdW5jdGlvbiAoaSwgcF9wcmljZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LmZvcm1hdChwYXJzZUZsb2F0KHBfcHJpY2UpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9yZWZyZXNoIGRlYWwgcHJpY2VcclxuICAgICAgICAgICAgcGhwUGx1Z2luLndyYXBwZXIuZmluZChcIiNkZWFsLXByaWNlXCIpLmh0bWwoZnVuY3Rpb24gKGksIGRfcHJpY2UpIHtcclxuICAgICAgICAgICAgICBsZXQgcmVnID0gL1xccy9nO1xyXG4gICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQoXHJcbiAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgICBkX3ByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJm5ic3A74oKsXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICApICsgcGFyc2VGbG9hdChyZXNwb25zZS5tc2dbMV0pXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vcmVmcmVzaCBuYiBpdGVtcyBpbiB0aGUgY2FydFxyXG4gICAgICAgICAgICBwaHBQbHVnaW4uY291bnRfaXRlbXMuaHRtbChmdW5jdGlvbiAoaSwgbmJfaXRlbSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChuYl9pdGVtKSArIDE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwaHBQbHVnaW4ud3JhcHBlci5maW5kKFwiLmNhcnRfbmJfZWx0XCIpLmh0bWwoZnVuY3Rpb24gKGksIG5iX2l0ZW0pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQobmJfaXRlbSkgKyAxO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZWx0LnBhcmVudHMoXCIucm93XCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGlmIChwaHBQbHVnaW4ud2lzaGxpc3RfaXRlbXMuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgIHBocFBsdWdpbi53aXNobGlzdC5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGhwUGx1Z2luLm5ld1Bob25lXHJcbiAgICAgICAgICAgICAgLmZpbmQoXHJcbiAgICAgICAgICAgICAgICBcIi5hZGRfdG9fY2FydF9mcm0gaW5wdXRbdmFsdWU9J1wiICtcclxuICAgICAgICAgICAgICAgICAgZWx0LnByZXYoKS5jaGlsZHJlbihcIjpmaXJzdFwiKS52YWwoKSArXHJcbiAgICAgICAgICAgICAgICAgIFwiJ11cIlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAuZmluZChcImJ1dHRvblt0eXBlPXN1Ym1pdF1cIilcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4td2FybmluZ1wiKVxyXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgLmh0bWwoXCJBZGQgdG8gQ2FydFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgJC5mbi5waHBQbHVnaW4gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgbmV3IFBocFBsdWdpbih0aGlzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcbiAgJChcIiNib2R5XCIpLnBocFBsdWdpbigpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==