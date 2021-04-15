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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/assets/js/core/config.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




 //display all details

function displayAllDetails(data, gestion) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + data.url,
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
    url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + data.url,
    method: "post",
    data: data.formData,
    success: function success(response) {
      gestion(response, data.params ? data.params : "");
    }
  });
} //display all Items

function displayAllItems(data, gestion) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + data.url,
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
  if (data.hasOwnProperty("categorie")) formData.append("categorie", data.categorie);

  if (data.hasOwnProperty("files")) {
    for (var i = 0; i < data.files.length; i++) {
      formData.append(data.files[i].name, data.files[i]);
    }
  }

  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + data.url,
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
  if (data.hasOwnProperty("categorie")) formData.append("categorie", data.categorie);
  if (data.hasOwnProperty("tbl_options")) formData.append("tbl_options", data.tbl_options);

  if (data.hasOwnProperty("files")) {
    for (var i = 0; i < data.files.length; i++) {
      formData.append(data.files[i].name, data.files[i]);
    }
  }

  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + data.url,
    method: "post",
    processData: false,
    contentType: false,
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
        url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + data.url,
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
  return new Promise(function (resolve, reject) {
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
        url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + data.url_check,
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
    url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + "forms/fillMultiselect",
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
      url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + "forms/addcategorie",
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
    url: _config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL + _data.url,
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
        return {
          results: $.map(response.msg, function (obj) {
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

/***/ }),

/***/ "./src/assets/js/custom/home/cart.js":
/*!*******************************************!*\
  !*** ./src/assets/js/custom/home/cart.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var corejs_form_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! corejs/form_crud */ "./src/assets/js/core/form_crud.js");
/* harmony import */ var corejs_visitors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! corejs/visitors */ "./src/assets/js/core/visitors.js");
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
    this.wrapper = this.element.find("#main-site");
    this.count_items = this.element.find(".cart_nb_elt");
    this.cart = this.element.find("#cart");
    this.banner = this.element.find("#banner-area");
    this.newPhone = this.element.find("#new-phones");
    this.cart_items = this.element.find("#cart_items");
    this.wishlist = this.element.find("#wishlist");
    this.wishlist_items = this.element.find("#wishlist-items");
    this.subTotal = this.element.find("#sub_total");
  };

  PhpPlugin.prototype.setupEvents = function () {
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

    phpPlugin.newPhone.find(".owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      responsive: responsive
    }); //=======================================================================
    //Qty section
    //=======================================================================

    phpPlugin.cart_items.on("click", ".qty-up", function (e) {
      var input = $(this).next(); //change price using ajax

      var data = {
        table: "product",
        id: $(this).parents(".qty").find("form").find("input[name=item_id]").val(),
        user: "guest",
        url: "forms/showDetails",
        data_type: "values",
        return_mode: "details",
        params: $(this)
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_5__.displayAllDetails)(data, display_product);

      function display_product(response, elt) {
        if (input.val() >= 1 && input.val() <= 9) {
          input.val(function (i, oldval) {
            return ++oldval;
          });

          if (response.result == "success") {
            // 1- Increase price of the product
            var qty = parseInt(elt.next().val());
            elt.parents(".qty").parent().next().find(".product_price").html(function () {
              return currency.format(parseFloat(response.msg.item_price * qty));
            }); // 2- Set subtotal price

            phpPlugin.subTotal.find("#deal-price").html(function (i, deal_price) {
              var reg = /\s/g; // /[^\d]+/g;

              return currency.format(parseFloat(response.msg.item_price) + parseFloat(deal_price.replace(reg, function () {
                return "";
              }).replace("&nbsp;€", "")));
            });
          }
        }
      } //closing Ajax call

    });
    phpPlugin.cart_items.on("click", ".qty-down", function (e) {
      e.preventDefault();
      var input = $(this).prev(); //change price using ajax

      var data = {
        table: "product",
        id: $(this).parents(".qty").find("form").find("input[name=item_id]").val(),
        user: "guest",
        url: "forms/showDetails",
        data_type: "values",
        return_mode: "details",
        params: $(this)
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_5__.displayAllDetails)(data, display_product);

      function display_product(response, elt) {
        if (input.val() > 1 && input.val() <= 10) {
          input.val(function (i, oldval) {
            return --oldval;
          });

          if (response.result == "success") {
            // 1- Increase price of the product
            var qty = parseInt(elt.prev().val());
            elt.parents(".qty").parent().next().find(".product_price").html(function () {
              return currency.format(parseFloat(response.msg.item_price * qty));
            }); // 2- Set subtotal price

            phpPlugin.subTotal.find("#deal-price").html(function (i, deal_price) {
              var reg = /\s/g; // /[^\d]+/g;

              return currency.format(parseFloat(deal_price.replace(reg, function () {
                return "";
              }).replace("&nbsp;€", "")) - parseFloat(response.msg.item_price));
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
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_5__.Call_controller)(data, manageResponse);

      function manageResponse(response, elt) {
        if (response.result == "success") {
          refresh_deal_price(elt);
          elt.parents(".row").first().remove();
          phpPlugin.count_items.html(function () {
            return parseInt(phpPlugin.count_items.html()) - 1;
          });
          phpPlugin.cart.find(".cart_nb_elt").html(function (i, nb_items) {
            return nb_items - 1;
          });
          phpPlugin.newPhone.find(".add_to_cart_frm input[value='" + elt.parent().children(":first").val() + "']").parent().find("button[type=submit]").removeClass("btn-success").addClass("btn-warning").html("Add to Cart");

          if (phpPlugin.cart_items.children().length == 0) {
            phpPlugin.cart_items.html(response.msg != 1 ? response.msg : "");
          }
        }
      }
    }); //=======================================================================
    //Save for later
    //=======================================================================

    phpPlugin.wrapper.on("click", "#cart_items .qty button[type=button]", function (e) {
      var data = {
        url: "guests/toggleWishlistAndcCart",
        frm: $(this).prev(),
        frm_name: "delete-cart-item-frm" + $(this).prev().find("input[type=hidden]").val(),
        table: "wishlist",
        params: $(this),
        method: "save_For_Later"
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_5__.Call_controller)(data, manageResponse);

      function manageResponse(response, elt) {
        if (response.result == "success") {
          console.log(response);
          phpPlugin.wishlist_items.append(function () {
            return response.msg[0][0];
          });
          phpPlugin.cart.find(".product_price").html(function (i, p_price) {
            return currency.format(parseFloat(p_price));
          });

          if (phpPlugin.wishlist.is(":hidden")) {
            phpPlugin.wishlist.show().fadeIn().delay(500);
          }

          refresh_deal_price(elt);
          elt.parents(".row").first().remove();
          phpPlugin.count_items.html(function (i, nb_item) {
            return parseInt(nb_item - 1);
          });
          phpPlugin.cart.find(".cart_nb_elt").html(function (i, nb_item) {
            return parseInt(nb_item - 1);
          });
          phpPlugin.newPhone.find(".add_to_cart_frm input[value='" + elt.prev().children(":first").val() + "']").parent().find("button[type=submit]").removeClass("btn-success").addClass("btn-warning").html("Add to Cart");

          if (phpPlugin.cart_items.children().length == 0) {
            phpPlugin.cart_items.html(response.msg[1] != 1 ? response.msg[1] : "");
          }
        }
      }
    });

    function refresh_deal_price(elt) {
      elt.parents("#cart_items").next().find("#deal-price").html(function (i, d_price) {
        var reg = /\s/g;
        var p_price = elt.parents(".row").first().last().find(".product_price").html();
        return currency.format(parseFloat(d_price.replace(reg, function () {
          return "";
        }).replace("&nbsp;€", "")) - parseFloat(p_price.replace(reg, function () {
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
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_5__.Call_controller)(data, manageResponse);

      function manageResponse(response, elt) {
        if (response.result == "success") {
          elt.parents(".row").first().remove();

          if (phpPlugin.wishlist_items.children().length == 0) {
            phpPlugin.wishlist.hide();
          }

          phpPlugin.newPhone.find(".add_to_cart_frm input[value='" + elt.parent().children(":first").val() + "']").parent().find("button[type=submit]").removeClass("btn-success").addClass("btn-warning").html("Add to Cart");
        }
      }
    }); //=======================================================================
    //Add to cart from whishlist
    //=======================================================================

    phpPlugin.wrapper.on("click", "#wishlist-items .qty button[type=button]", function (e) {
      var data = {
        url: "guests/toggleWishlistAndcCart",
        frm: $(this).prev(),
        frm_name: "delete-cart-item-frm" + $(this).prev().find("input[type=hidden]").val(),
        table: "cart",
        params: $(this),
        method: "add_To_Cart"
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_5__.Call_controller)(data, manageResponse);

      function manageResponse(response, elt) {
        if (response.result == "success") {
          //check if cart is empty
          if (phpPlugin.cart_items.find("#empty-cart").length != 0) {
            phpPlugin.cart_items.find("#empty-cart").remove();
          } //append cart


          phpPlugin.cart_items.append(function () {
            return response.msg[0];
          }); // format product price

          phpPlugin.wrapper.find(".product_price").html(function (i, p_price) {
            return currency.format(parseFloat(p_price));
          }); //refresh deal price

          phpPlugin.wrapper.find("#deal-price").html(function (i, d_price) {
            var reg = /\s/g;
            return currency.format(parseFloat(d_price.replace(reg, function () {
              return "";
            }).replace("&nbsp;€", "")) + parseFloat(response.msg[1]));
          }); //refresh nb items in the cart

          phpPlugin.count_items.html(function (i, nb_item) {
            return parseInt(nb_item) + 1;
          });
          phpPlugin.wrapper.find(".cart_nb_elt").html(function (i, nb_item) {
            return parseInt(nb_item) + 1;
          });
          elt.parents(".row").first().remove();

          if (phpPlugin.wishlist_items.children().length == 0) {
            phpPlugin.wishlist.hide();
          }

          phpPlugin.newPhone.find(".add_to_cart_frm input[value='" + elt.prev().children(":first").val() + "']").parent().find("button[type=submit]").removeClass("btn-warning").addClass("btn-success").html("Add to Cart");
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

/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-substitution.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
// eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "./node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "./node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});


/***/ })

},
0,[["./src/assets/js/custom/home/cart.js","commons/frontend/commonVendor","js/librairies/frontlib"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2Zvcm1fY3J1ZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvdmlzaXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jdXN0b20vaG9tZS9jYXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LXN1YnN0aXR1dGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1zdGlja3ktaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnJlcGxhY2UuanMiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJBVkFUQVIiLCJJTUciLCJpc0lFIiwidXNlckFnZW50IiwibmF2aWdhdG9yIiwidGVzdCIsImRpc3BsYXlBbGxEZXRhaWxzIiwiZGF0YSIsImdlc3Rpb24iLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsInRhYmxlIiwiaWQiLCJ1c2VyIiwic2Vzc2lvbl9pZCIsImRhdGFfdHlwZSIsInJldHVybl9tb2RlIiwidG9rZW4iLCJmcm1fbmFtZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInBhcmFtcyIsImVkaXRGb3JtIiwiZm9ybURhdGEiLCJkaXNwbGF5QWxsSXRlbXMiLCJzdGFydCIsIm1heCIsInF1ZXJ5IiwicGFnZSIsInBhZ2luYXRpb24iLCJBZGQiLCJGb3JtRGF0YSIsImZybSIsImFwcGVuZCIsIm5vdGlmaWNhdGlvbiIsImhhc093blByb3BlcnR5Iiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwiaW1hZ2VVcmxzQXJ5Iiwic2VsZWN0MiIsImNhdGVnb3JpZSIsImkiLCJmaWxlcyIsImxlbmd0aCIsIm5hbWUiLCJjYWNoZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJDYWxsX2NvbnRyb2xsZXIiLCJ1cmxfZGF0YSIsImFjdGlvbiIsImZyZWVkYXRhIiwidXNlcl9pZCIsInRibF9vcHRpb25zIiwiRGVsZXRlIiwiZGlzcGxheUl0ZW0iLCJjaGVja0JlZm9yZURlbGV0ZSIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsInNlcnZlckRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVybF9jaGVjayIsImh0bWwiLCJodHciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzd2FsX21lc3NhZ2UiLCJpbm5lckhUTUwiLCJzd2FsIiwiZmlyZSIsInRpdGxlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJzd2FsX2J1dHRvbiIsImNvbnNvbGUiLCJsb2ciLCJkb25lIiwibXNnIiwiZmFpbCIsImVycm9yIiwiZGlzcGxheU11bHRpc2VsbGVjdCIsImRpc3BsYXlJRCIsImFsZXJ0SUQiLCJhZGRDYXRlZ29ycmllIiwiY2F0RmllbGQiLCJjYXQiLCJxdWVyeVNlbGVjdG9yIiwiYWxlcnQiLCJzZWxlY3QyQWpheFBhcmFtcyIsInR5cGUiLCJkYXRhVHlwZSIsImRlbGF5Iiwic2VhcmNoVGVybSIsInRlcm0iLCJwcm9jZXNzUmVzdWx0cyIsInJlc3VsdHMiLCJtYXAiLCJvYmoiLCJ0ZXh0IiwiZ2V0X3Zpc2l0b3JzX2RhdGEiLCJpcCIsInZhbCIsInNlbmRfdmlzaXRvcnNfZGF0YSIsIm1hbmFnZVIiLCJjb29raWVzIiwicmVzcG9uc2l2ZSIsIml0ZW1zIiwiYWRkRXZlbnRMaXN0ZW5lciIsIlBocFBsdWdpbiIsImVsZW1lbnQiLCJpbml0IiwicHJvdG90eXBlIiwic2V0dXBWYXJpYWJsZXMiLCJzZXR1cEV2ZW50cyIsIndyYXBwZXIiLCJmaW5kIiwiY291bnRfaXRlbXMiLCJjYXJ0IiwiYmFubmVyIiwibmV3UGhvbmUiLCJjYXJ0X2l0ZW1zIiwid2lzaGxpc3QiLCJ3aXNobGlzdF9pdGVtcyIsInN1YlRvdGFsIiwicGhwUGx1Z2luIiwiY3VycmVuY3kiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJvd2xDYXJvdXNlbCIsImxvb3AiLCJuYXYiLCJkb3RzIiwib24iLCJlIiwiaW5wdXQiLCJuZXh0IiwicGFyZW50cyIsImRpc3BsYXlfcHJvZHVjdCIsImVsdCIsIm9sZHZhbCIsInF0eSIsInBhcnNlSW50IiwicGFyZW50IiwiZm9ybWF0IiwicGFyc2VGbG9hdCIsIml0ZW1fcHJpY2UiLCJkZWFsX3ByaWNlIiwicmVnIiwicmVwbGFjZSIsInByZXZlbnREZWZhdWx0IiwicHJldiIsImF0dHIiLCJtYW5hZ2VSZXNwb25zZSIsInJlZnJlc2hfZGVhbF9wcmljZSIsImZpcnN0IiwicmVtb3ZlIiwibmJfaXRlbXMiLCJjaGlsZHJlbiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJwX3ByaWNlIiwiaXMiLCJzaG93IiwiZmFkZUluIiwibmJfaXRlbSIsImRfcHJpY2UiLCJsYXN0IiwiaGlkZSIsImZuIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7QUNWTyxJQUFNQSxRQUFRLEdBQUcsa0JBQWpCO0FBQ0EsSUFBTUMsTUFBTSxHQUFHRCxRQUFRLEdBQUcsb0NBQTFCO0FBQ0EsSUFBTUUsR0FBRyxHQUFHRixRQUFRLEdBQUcsb0JBQXZCO0FBRUEsSUFBTUcsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUN4QixNQUFJQyxTQUFTLEdBQUdDLFNBQVMsQ0FBQ0QsU0FBMUI7QUFDQSxTQUFPLGVBQWVFLElBQWYsQ0FBb0JGLFNBQXBCLENBQVA7QUFDRCxDQUhNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NGUDs7QUFDTyxTQUFTRyxpQkFBVCxDQUEyQkMsSUFBM0IsRUFBaUNDLE9BQWpDLEVBQTBDO0FBQy9DQyxHQUFDLENBQUNDLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVaLDZDQUFRLEdBQUdRLElBQUksQ0FBQ0ksR0FEaEI7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTEwsUUFBSSxFQUFFO0FBQ0pNLFdBQUssRUFBRU4sSUFBSSxDQUFDTSxLQURSO0FBRUpDLFFBQUUsRUFBRVAsSUFBSSxDQUFDTyxFQUZMO0FBR0pDLFVBQUksRUFBRVIsSUFBSSxDQUFDUSxJQUFMLEdBQVlSLElBQUksQ0FBQ1EsSUFBakIsR0FBd0IsRUFIMUI7QUFJSkMsZ0JBQVUsRUFBRVQsSUFBSSxDQUFDUyxVQUFMLEdBQWtCVCxJQUFJLENBQUNTLFVBQXZCLEdBQW9DLEVBSjVDO0FBS0pDLGVBQVMsRUFBRVYsSUFBSSxDQUFDVSxTQUFMLEdBQWlCVixJQUFJLENBQUNVLFNBQXRCLEdBQWtDLEVBTHpDO0FBTUpDLGlCQUFXLEVBQUVYLElBQUksQ0FBQ1csV0FB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bUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLHlCQUF5QixtQkFBTyxDQUFDLG1HQUFtQztBQUNwRSxzQkFBc0IsbUJBQU8sQ0FBQywyRkFBK0I7QUFDN0QsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DOztBQUU1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImpzL2N1c3RvbS9ob21lL2NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gL2tuZ2VsbF9lY29tbWVyY2UvO1xyXG5leHBvcnQgY29uc3QgQVZBVEFSID0gQkFTRV9VUkwgKyBcInB1YmxpYy9hc3NldHMvaW1nL3VzZXJzL2F2YXRhci5wbmdcIjtcclxuZXhwb3J0IGNvbnN0IElNRyA9IEJBU0VfVVJMICsgXCJwdWJsaWMvYXNzZXRzL2ltZy9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0lFID0gKCkgPT4ge1xyXG4gIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gIHJldHVybiAvTVNJRXxUcmlkZW50Ly50ZXN0KHVzZXJBZ2VudCk7XHJcbn07XHJcbiIsImltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG4vL2Rpc3BsYXkgYWxsIGRldGFpbHNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxEZXRhaWxzKGRhdGEsIGdlc3Rpb24pIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICB1c2VyOiBkYXRhLnVzZXIgPyBkYXRhLnVzZXIgOiBcIlwiLFxyXG4gICAgICBzZXNzaW9uX2lkOiBkYXRhLnNlc3Npb25faWQgPyBkYXRhLnNlc3Npb25faWQgOiBcIlwiLFxyXG4gICAgICBkYXRhX3R5cGU6IGRhdGEuZGF0YV90eXBlID8gZGF0YS5kYXRhX3R5cGUgOiBcIlwiLFxyXG4gICAgICByZXR1cm5fbW9kZTogZGF0YS5yZXR1cm5fbW9kZSA/IGRhdGEucmV0dXJuX21vZGUgOiBcIlwiLFxyXG4gICAgICB0b2tlbjogZGF0YS50b2tlbiA/IGRhdGEudG9rZW4gOiBcIlwiLFxyXG4gICAgICBmcm1fbmFtZTogZGF0YS5mcm1fbmFtZSA/IGRhdGEuZnJtX25hbWUgOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbi8vZWRpdCBkYXRhXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0Rm9ybShkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLmZvcm1EYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vZGlzcGxheSBhbGwgSXRlbXNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxJdGVtcyhkYXRhLCBnZXN0aW9uKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpZDogZGF0YS5pZCAhPSBcIlwiID8gZGF0YS5pZCA6IFwiXCIsXHJcbiAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICBtYXg6IGRhdGEubWF4ICE9IFwiXCIgPyBkYXRhLm1heCA6IFwiXCIsXHJcbiAgICAgIHVzZXI6IGRhdGEudXNlciAhPSBcIlwiID8gZGF0YS51c2VyIDogXCJcIixcclxuICAgICAgcXVlcnk6IGRhdGEucXVlcnkgIT0gXCJcIiA/IGRhdGEucXVlcnkgOiBcIlwiLFxyXG4gICAgICBwYWdlOiBkYXRhLnBhZ2UgIT0gXCJcIiA/IGRhdGEucGFnZSA6IFwiXCIsXHJcbiAgICAgIHBhZ2luYXRpb246IGRhdGEucGFnaW5hdGlvbiAhPSBcIlwiID8gZGF0YS5wYWdpbmF0aW9uIDogXCJcIixcclxuICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgcmV0dXJuX21vZGU6IGRhdGEucmV0dXJuX21vZGUgPyBkYXRhLnJldHVybl9tb2RlIDogXCJcIixcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuLy9hZGQgSXRlbVxyXG5leHBvcnQgZnVuY3Rpb24gQWRkKGRhdGEsIGdlc3Rpb24pIHtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZGF0YS5mcm1bMF0pO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcInRhYmxlXCIsIGRhdGEudGFibGUpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcIm5vdGlmaWNhdGlvblwiLCBkYXRhLm5vdGlmaWNhdGlvbik7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwiZnJtX25hbWVcIiwgZGF0YS5mcm1fbmFtZSk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJzdGFydF9kYXRlXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwic3RhcnRfZGF0ZVwiLCBkYXRhLnN0YXJ0X2RhdGUpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiZW5kX2RhdGVcIikpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJlbmRfZGF0ZVwiLCBkYXRhLmVuZF9kYXRlKTtcclxuICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImltYWdlVXJsc0FyeVwiKSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlVXJsc0FyeVwiLCBkYXRhLmltYWdlVXJsc0FyeSk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJzZWxlY3QyXCIpKSBmb3JtRGF0YS5hcHBlbmQoXCJzZWxlY3QyXCIsIGRhdGEuc2VsZWN0Mik7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJjYXRlZ29yaWVcIikpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJjYXRlZ29yaWVcIiwgZGF0YS5jYXRlZ29yaWUpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiZmlsZXNcIikpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoZGF0YS5maWxlc1tpXS5uYW1lLCBkYXRhLmZpbGVzW2ldKTtcclxuICAgIH1cclxuICB9XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIGNhY2hlOiBmYWxzZSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbi8vdXBkYXRlXHJcbmV4cG9ydCBmdW5jdGlvbiBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgZ2VzdGlvbikge1xyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkYXRhLmZybVswXSk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwiZnJtX25hbWVcIiwgZGF0YS5mcm1fbmFtZSk7XHJcbiAgaWYgKGRhdGEudGFibGUpIGZvcm1EYXRhLmFwcGVuZChcInRhYmxlXCIsIGRhdGEudGFibGUpO1xyXG4gIGlmIChkYXRhLm5vdGlmaWNhdGlvbikgZm9ybURhdGEuYXBwZW5kKFwibm90aWZpY2F0aW9uXCIsIGRhdGEubm90aWZpY2F0aW9uKTtcclxuICBpZiAoZGF0YS51cmxfZGF0YSkgZm9ybURhdGEuYXBwZW5kKFwidXJsX2RhdGFcIiwgZGF0YS51cmxfZGF0YSk7XHJcbiAgaWYgKGRhdGEuYWN0aW9uKSBmb3JtRGF0YS5hcHBlbmQoXCJhY3Rpb25cIiwgZGF0YS5hY3Rpb24pO1xyXG4gIGlmIChkYXRhLmltYWdlVXJsc0FyeSkgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VVcmxzQXJ5XCIsIGRhdGEuaW1hZ2VVcmxzQXJ5KTtcclxuICBpZiAoZGF0YS5mcmVlZGF0YSkgZm9ybURhdGEuYXBwZW5kKFwiZnJlZWRhdGFcIiwgZGF0YS5mcmVlZGF0YSk7XHJcbiAgaWYgKGRhdGEuc3RhcnRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwic3RhcnRfZGF0ZVwiLCBkYXRhLnN0YXJ0X2RhdGUpO1xyXG4gIGlmIChkYXRhLmVuZF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJlbmRfZGF0ZVwiLCBkYXRhLmVuZF9kYXRlKTtcclxuICBpZiAoZGF0YS5pZCkgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgZGF0YS5pZCk7XHJcbiAgaWYgKGRhdGEudXNlcl9pZCkgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgZGF0YS51c2VyX2lkKTtcclxuICBpZiAoZGF0YS5tZXRob2QpIGZvcm1EYXRhLmFwcGVuZChcIm1ldGhvZFwiLCBkYXRhLm1ldGhvZCk7XHJcbiAgaWYgKGRhdGEuc2VsZWN0MikgZm9ybURhdGEuYXBwZW5kKFwic2VsZWN0MlwiLCBkYXRhLnNlbGVjdDIpO1xyXG4gIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiY2F0ZWdvcmllXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY2F0ZWdvcmllXCIsIGRhdGEuY2F0ZWdvcmllKTtcclxuICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcInRibF9vcHRpb25zXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwidGJsX29wdGlvbnNcIiwgZGF0YS50Ymxfb3B0aW9ucyk7XHJcbiAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJmaWxlc1wiKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChkYXRhLmZpbGVzW2ldLm5hbWUsIGRhdGEuZmlsZXNbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vZGVsZXRlXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGUoZGF0YSwgZGlzcGxheUl0ZW0pIHtcclxuICBjaGVja0JlZm9yZURlbGV0ZShkYXRhKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBkYXRhOiBkYXRhLnNlcnZlckRhdGEsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBkaXNwbGF5SXRlbShyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbi8vZnVuY3Rpb24gY2hlY2sgYmVmb3JlIGRlbGV0ZVxyXG5mdW5jdGlvbiBjaGVja0JlZm9yZURlbGV0ZShkYXRhKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGlmICghZGF0YS51cmxfY2hlY2spIHtcclxuICAgICAgY29uc3QgaHRtbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBodHcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGlmIChkYXRhLnN3YWxfbWVzc2FnZSkge1xyXG4gICAgICAgICAgcmV0dXJuIChodHcuaW5uZXJIVE1MID0gZGF0YS5zd2FsX21lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gKGh0dy5pbm5lckhUTUwgPSBcIjxwPllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzITwvcD5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBkYXRhLnN3YWxcclxuICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgaHRtbDogaHRtbCgpLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBkYXRhLnN3YWxfYnV0dG9uID8gZGF0YS5zd2FsX2J1dHRvbiA6IFwiRGVsZXRlIVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsX2NoZWNrLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YTogZGF0YS5zZXJ2ZXJEYXRhLFxyXG4gICAgICB9KVxyXG4gICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgZGF0YS5zd2FsXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBodG1sOiBcIjxwPllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzITwvcD5cIiArIHJlc3BvbnNlLm1zZyxcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJEZWxldGUhXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZhaWwoKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TXVsdGlzZWxsZWN0KGRhdGEpIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIFwiZm9ybXMvZmlsbE11bHRpc2VsZWN0XCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICBkYXRhLmRpc3BsYXlJRC5hcHBlbmQocmVzcG9uc2UubXNnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhLmFsZXJ0SUQuaHRtbChyZXNwb25zZS5tc2cpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2F0ZWdvcnJpZShjYXRGaWVsZCwgYWxlcnRJRCkge1xyXG4gIGxldCBjYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhdEZpZWxkKTtcclxuICBpZiAoY2F0LnZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICBhbGVydChcIkxlIGNoYW1wcyBjYXTDqWdvcmllIGVzdCB2aWRlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IEJBU0VfVVJMICsgXCJmb3Jtcy9hZGRjYXRlZ29yaWVcIixcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNhdGVnb3JpZTogY2F0LnZhbHVlLFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UgIT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICQoYWxlcnRJRCkuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3QyQWpheFBhcmFtcyhkYXRhKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgZGVsYXk6IDI1MCxcclxuICAgIGRhdGE6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZWFyY2hUZXJtOiBwYXJhbXMudGVybSwgLy8gc2VhcmNoIHRlcm1cclxuICAgICAgICB0YWJsZTogZGF0YS50YWJsZSAhPSBcIlwiID8gZGF0YS50YWJsZSA6IFwiXCIsXHJcbiAgICAgICAgZGF0YV90eXBlOiBkYXRhLmRhdGFfdHlwZSAhPSBcIlwiID8gZGF0YS5kYXRhX3R5cGUgOiBcIlwiLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICByZXN1bHRzOiAkLm1hcChyZXNwb25zZS5tc2csIGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5pZCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IG9iai5pZCwgdGV4dDogb2JqLnRleHQgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4geyBpZDogb2JqLmlkLCB0ZXh0OiBvYmoudGV4dCB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2FjaGU6IHRydWUsXHJcbiAgfTtcclxufVxyXG4iLCIvL0dldCB2aXNpdG9ycyBEYXRhXHJcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmV4cG9ydCBjb25zdCBnZXRfdmlzaXRvcnNfZGF0YSA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIGlwOiAkKFwiI2lwX2FkZHJlc3NcIikudmFsKCksXHJcbiAgICB9O1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgIH0gZWxzZSByZWplY3QoXCJubyBkYXRhXCIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRfdmlzaXRvcnNfZGF0YSA9IChkYXRhLCBtYW5hZ2VSKSA9PiB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRhYmxlOiBkYXRhLnRhYmxlLFxyXG4gICAgICBpcDogZGF0YS5pcCA/IGRhdGEuaXAgOiBcIlwiLFxyXG4gICAgICBjb29raWVzOiBkYXRhLmNvb2tpZXMgPyBkYXRhLmNvb2tpZXMgOiBcIlwiLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIG1hbmFnZVIocmVzcG9uc2UpO1xyXG4gICAgfSlcclxuICAgIC5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxufTtcclxuIiwiY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICAwOiB7XHJcbiAgICBpdGVtczogMSxcclxuICB9LFxyXG4gIDYwMDoge1xyXG4gICAgaXRlbXM6IDMsXHJcbiAgfSxcclxuICAxMDAwOiB7XHJcbiAgICBpdGVtczogNSxcclxuICB9LFxyXG59O1xyXG5pbXBvcnQgeyBkaXNwbGF5QWxsRGV0YWlscywgQ2FsbF9jb250cm9sbGVyIH0gZnJvbSBcImNvcmVqcy9mb3JtX2NydWRcIjtcclxuaW1wb3J0IHsgZ2V0X3Zpc2l0b3JzX2RhdGEsIHNlbmRfdmlzaXRvcnNfZGF0YSB9IGZyb20gXCJjb3JlanMvdmlzaXRvcnNcIjtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGZ1bmN0aW9uIFBocFBsdWdpbihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG4gIFBocFBsdWdpbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0dXBWYXJpYWJsZXMoKTtcclxuICAgIHRoaXMuc2V0dXBFdmVudHMoKTtcclxuICB9O1xyXG4gIFBocFBsdWdpbi5wcm90b3R5cGUuc2V0dXBWYXJpYWJsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLndyYXBwZXIgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNtYWluLXNpdGVcIik7XHJcbiAgICB0aGlzLmNvdW50X2l0ZW1zID0gdGhpcy5lbGVtZW50LmZpbmQoXCIuY2FydF9uYl9lbHRcIik7XHJcbiAgICB0aGlzLmNhcnQgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNjYXJ0XCIpO1xyXG4gICAgdGhpcy5iYW5uZXIgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNiYW5uZXItYXJlYVwiKTtcclxuICAgIHRoaXMubmV3UGhvbmUgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNuZXctcGhvbmVzXCIpO1xyXG4gICAgdGhpcy5jYXJ0X2l0ZW1zID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjY2FydF9pdGVtc1wiKTtcclxuICAgIHRoaXMud2lzaGxpc3QgPSB0aGlzLmVsZW1lbnQuZmluZChcIiN3aXNobGlzdFwiKTtcclxuICAgIHRoaXMud2lzaGxpc3RfaXRlbXMgPSB0aGlzLmVsZW1lbnQuZmluZChcIiN3aXNobGlzdC1pdGVtc1wiKTtcclxuICAgIHRoaXMuc3ViVG90YWwgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNzdWJfdG90YWxcIik7XHJcbiAgfTtcclxuICBQaHBQbHVnaW4ucHJvdG90eXBlLnNldHVwRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHBocFBsdWdpbiA9IHRoaXM7XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9DdXJyZW5jeSBmb3JtYXRcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGxldCBjdXJyZW5jeSA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChcImZyLUZSXCIsIHtcclxuICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgICAgY3VycmVuY3k6IFwiRVVSXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL093bCBjYXJvdXNlbFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9uZXcgcGhvbmVzXHJcbiAgICBwaHBQbHVnaW4ubmV3UGhvbmUuZmluZChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICByZXNwb25zaXZlOiByZXNwb25zaXZlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9RdHkgc2VjdGlvblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLmNhcnRfaXRlbXMub24oXCJjbGlja1wiLCBcIi5xdHktdXBcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgbGV0IGlucHV0ID0gJCh0aGlzKS5uZXh0KCk7XHJcbiAgICAgIC8vY2hhbmdlIHByaWNlIHVzaW5nIGFqYXhcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgdGFibGU6IFwicHJvZHVjdFwiLFxyXG4gICAgICAgIGlkOiAkKHRoaXMpXHJcbiAgICAgICAgICAucGFyZW50cyhcIi5xdHlcIilcclxuICAgICAgICAgIC5maW5kKFwiZm9ybVwiKVxyXG4gICAgICAgICAgLmZpbmQoXCJpbnB1dFtuYW1lPWl0ZW1faWRdXCIpXHJcbiAgICAgICAgICAudmFsKCksXHJcbiAgICAgICAgdXNlcjogXCJndWVzdFwiLFxyXG4gICAgICAgIHVybDogXCJmb3Jtcy9zaG93RGV0YWlsc1wiLFxyXG4gICAgICAgIGRhdGFfdHlwZTogXCJ2YWx1ZXNcIixcclxuICAgICAgICByZXR1cm5fbW9kZTogXCJkZXRhaWxzXCIsXHJcbiAgICAgICAgcGFyYW1zOiAkKHRoaXMpLFxyXG4gICAgICB9O1xyXG4gICAgICBkaXNwbGF5QWxsRGV0YWlscyhkYXRhLCBkaXNwbGF5X3Byb2R1Y3QpO1xyXG4gICAgICBmdW5jdGlvbiBkaXNwbGF5X3Byb2R1Y3QocmVzcG9uc2UsIGVsdCkge1xyXG4gICAgICAgIGlmIChpbnB1dC52YWwoKSA+PSAxICYmIGlucHV0LnZhbCgpIDw9IDkpIHtcclxuICAgICAgICAgIGlucHV0LnZhbChmdW5jdGlvbiAoaSwgb2xkdmFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiArK29sZHZhbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICAvLyAxLSBJbmNyZWFzZSBwcmljZSBvZiB0aGUgcHJvZHVjdFxyXG4gICAgICAgICAgICBsZXQgcXR5ID0gcGFyc2VJbnQoZWx0Lm5leHQoKS52YWwoKSk7XHJcbiAgICAgICAgICAgIGVsdFxyXG4gICAgICAgICAgICAgIC5wYXJlbnRzKFwiLnF0eVwiKVxyXG4gICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgIC5uZXh0KClcclxuICAgICAgICAgICAgICAuZmluZChcIi5wcm9kdWN0X3ByaWNlXCIpXHJcbiAgICAgICAgICAgICAgLmh0bWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LmZvcm1hdChcclxuICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChyZXNwb25zZS5tc2cuaXRlbV9wcmljZSAqIHF0eSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIDItIFNldCBzdWJ0b3RhbCBwcmljZVxyXG4gICAgICAgICAgICBwaHBQbHVnaW4uc3ViVG90YWxcclxuICAgICAgICAgICAgICAuZmluZChcIiNkZWFsLXByaWNlXCIpXHJcbiAgICAgICAgICAgICAgLmh0bWwoZnVuY3Rpb24gKGksIGRlYWxfcHJpY2UpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZWcgPSAvXFxzL2c7IC8vIC9bXlxcZF0rL2c7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuZm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHJlc3BvbnNlLm1zZy5pdGVtX3ByaWNlKSArXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgICAgIGRlYWxfcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJm5ic3A74oKsXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gLy9jbG9zaW5nIEFqYXggY2FsbFxyXG4gICAgfSk7XHJcblxyXG4gICAgcGhwUGx1Z2luLmNhcnRfaXRlbXMub24oXCJjbGlja1wiLCBcIi5xdHktZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBpbnB1dCA9ICQodGhpcykucHJldigpO1xyXG4gICAgICAvL2NoYW5nZSBwcmljZSB1c2luZyBhamF4XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHRhYmxlOiBcInByb2R1Y3RcIixcclxuICAgICAgICBpZDogJCh0aGlzKVxyXG4gICAgICAgICAgLnBhcmVudHMoXCIucXR5XCIpXHJcbiAgICAgICAgICAuZmluZChcImZvcm1cIilcclxuICAgICAgICAgIC5maW5kKFwiaW5wdXRbbmFtZT1pdGVtX2lkXVwiKVxyXG4gICAgICAgICAgLnZhbCgpLFxyXG4gICAgICAgIHVzZXI6IFwiZ3Vlc3RcIixcclxuICAgICAgICB1cmw6IFwiZm9ybXMvc2hvd0RldGFpbHNcIixcclxuICAgICAgICBkYXRhX3R5cGU6IFwidmFsdWVzXCIsXHJcbiAgICAgICAgcmV0dXJuX21vZGU6IFwiZGV0YWlsc1wiLFxyXG4gICAgICAgIHBhcmFtczogJCh0aGlzKSxcclxuICAgICAgfTtcclxuICAgICAgZGlzcGxheUFsbERldGFpbHMoZGF0YSwgZGlzcGxheV9wcm9kdWN0KTtcclxuICAgICAgZnVuY3Rpb24gZGlzcGxheV9wcm9kdWN0KHJlc3BvbnNlLCBlbHQpIHtcclxuICAgICAgICBpZiAoaW5wdXQudmFsKCkgPiAxICYmIGlucHV0LnZhbCgpIDw9IDEwKSB7XHJcbiAgICAgICAgICBpbnB1dC52YWwoZnVuY3Rpb24gKGksIG9sZHZhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLS1vbGR2YWw7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgLy8gMS0gSW5jcmVhc2UgcHJpY2Ugb2YgdGhlIHByb2R1Y3RcclxuICAgICAgICAgICAgbGV0IHF0eSA9IHBhcnNlSW50KGVsdC5wcmV2KCkudmFsKCkpO1xyXG4gICAgICAgICAgICBlbHRcclxuICAgICAgICAgICAgICAucGFyZW50cyhcIi5xdHlcIilcclxuICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAubmV4dCgpXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCIucHJvZHVjdF9wcmljZVwiKVxyXG4gICAgICAgICAgICAgIC5odG1sKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQoXHJcbiAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocmVzcG9uc2UubXNnLml0ZW1fcHJpY2UgKiBxdHkpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAyLSBTZXQgc3VidG90YWwgcHJpY2VcclxuICAgICAgICAgICAgcGhwUGx1Z2luLnN1YlRvdGFsXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCIjZGVhbC1wcmljZVwiKVxyXG4gICAgICAgICAgICAgIC5odG1sKGZ1bmN0aW9uIChpLCBkZWFsX3ByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVnID0gL1xccy9nOyAvLyAvW15cXGRdKy9nO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LmZvcm1hdChcclxuICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgICBkZWFsX3ByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShyZWcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCImbmJzcDvigqxcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgKSAtIHBhcnNlRmxvYXQocmVzcG9uc2UubXNnLml0ZW1fcHJpY2UpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSAvL2Nsb3NpbmdcclxuICAgIH0pO1xyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9EZWxldGUgY2FydFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLndyYXBwZXIub24oXCJjbGlja1wiLCBcIiNjYXJ0X2l0ZW1zIC5kZWxldGVCdG5cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAkKHRoaXMpLmh0bWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgdXJsOiBcImd1ZXN0cy9kZWxldGVcIixcclxuICAgICAgICBpZDogJCh0aGlzKS5hdHRyKFwiaWRcIiksXHJcbiAgICAgICAgdGFibGU6IFwiY2FydFwiLFxyXG4gICAgICAgIG1ldGhvZDogXCJkZWxldGVfY2FydFwiLFxyXG4gICAgICAgIGZybTogJCh0aGlzKS5wYXJlbnQoKSxcclxuICAgICAgICBwYXJhbXM6ICQodGhpcyksXHJcbiAgICAgIH07XHJcbiAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBtYW5hZ2VSZXNwb25zZSk7XHJcbiAgICAgIGZ1bmN0aW9uIG1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCBlbHQpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICByZWZyZXNoX2RlYWxfcHJpY2UoZWx0KTtcclxuICAgICAgICAgIGVsdC5wYXJlbnRzKFwiLnJvd1wiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgcGhwUGx1Z2luLmNvdW50X2l0ZW1zLmh0bWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQocGhwUGx1Z2luLmNvdW50X2l0ZW1zLmh0bWwoKSkgLSAxO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBwaHBQbHVnaW4uY2FydC5maW5kKFwiLmNhcnRfbmJfZWx0XCIpLmh0bWwoZnVuY3Rpb24gKGksIG5iX2l0ZW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuYl9pdGVtcyAtIDE7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHBocFBsdWdpbi5uZXdQaG9uZVxyXG4gICAgICAgICAgICAuZmluZChcclxuICAgICAgICAgICAgICBcIi5hZGRfdG9fY2FydF9mcm0gaW5wdXRbdmFsdWU9J1wiICtcclxuICAgICAgICAgICAgICAgIGVsdC5wYXJlbnQoKS5jaGlsZHJlbihcIjpmaXJzdFwiKS52YWwoKSArXHJcbiAgICAgICAgICAgICAgICBcIiddXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgLmZpbmQoXCJidXR0b25bdHlwZT1zdWJtaXRdXCIpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcImJ0bi13YXJuaW5nXCIpXHJcbiAgICAgICAgICAgIC5odG1sKFwiQWRkIHRvIENhcnRcIik7XHJcbiAgICAgICAgICBpZiAocGhwUGx1Z2luLmNhcnRfaXRlbXMuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBwaHBQbHVnaW4uY2FydF9pdGVtcy5odG1sKHJlc3BvbnNlLm1zZyAhPSAxID8gcmVzcG9uc2UubXNnIDogXCJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vU2F2ZSBmb3IgbGF0ZXJcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHBocFBsdWdpbi53cmFwcGVyLm9uKFxyXG4gICAgICBcImNsaWNrXCIsXHJcbiAgICAgIFwiI2NhcnRfaXRlbXMgLnF0eSBidXR0b25bdHlwZT1idXR0b25dXCIsXHJcbiAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICB1cmw6IFwiZ3Vlc3RzL3RvZ2dsZVdpc2hsaXN0QW5kY0NhcnRcIixcclxuICAgICAgICAgIGZybTogJCh0aGlzKS5wcmV2KCksXHJcbiAgICAgICAgICBmcm1fbmFtZTpcclxuICAgICAgICAgICAgXCJkZWxldGUtY2FydC1pdGVtLWZybVwiICtcclxuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KCkuZmluZChcImlucHV0W3R5cGU9aGlkZGVuXVwiKS52YWwoKSxcclxuICAgICAgICAgIHRhYmxlOiBcIndpc2hsaXN0XCIsXHJcbiAgICAgICAgICBwYXJhbXM6ICQodGhpcyksXHJcbiAgICAgICAgICBtZXRob2Q6IFwic2F2ZV9Gb3JfTGF0ZXJcIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBtYW5hZ2VSZXNwb25zZSk7XHJcbiAgICAgICAgZnVuY3Rpb24gbWFuYWdlUmVzcG9uc2UocmVzcG9uc2UsIGVsdCkge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi53aXNobGlzdF9pdGVtcy5hcHBlbmQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5tc2dbMF1bMF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwaHBQbHVnaW4uY2FydC5maW5kKFwiLnByb2R1Y3RfcHJpY2VcIikuaHRtbChmdW5jdGlvbiAoaSwgcF9wcmljZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQocGFyc2VGbG9hdChwX3ByaWNlKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocGhwUGx1Z2luLndpc2hsaXN0LmlzKFwiOmhpZGRlblwiKSkge1xyXG4gICAgICAgICAgICAgIHBocFBsdWdpbi53aXNobGlzdC5zaG93KCkuZmFkZUluKCkuZGVsYXkoNTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWZyZXNoX2RlYWxfcHJpY2UoZWx0KTtcclxuICAgICAgICAgICAgZWx0LnBhcmVudHMoXCIucm93XCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5jb3VudF9pdGVtcy5odG1sKGZ1bmN0aW9uIChpLCBuYl9pdGVtKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG5iX2l0ZW0gLSAxKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5jYXJ0LmZpbmQoXCIuY2FydF9uYl9lbHRcIikuaHRtbChmdW5jdGlvbiAoaSwgbmJfaXRlbSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChuYl9pdGVtIC0gMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwaHBQbHVnaW4ubmV3UGhvbmVcclxuICAgICAgICAgICAgICAuZmluZChcclxuICAgICAgICAgICAgICAgIFwiLmFkZF90b19jYXJ0X2ZybSBpbnB1dFt2YWx1ZT0nXCIgK1xyXG4gICAgICAgICAgICAgICAgICBlbHQucHJldigpLmNoaWxkcmVuKFwiOmZpcnN0XCIpLnZhbCgpICtcclxuICAgICAgICAgICAgICAgICAgXCInXVwiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgIC5maW5kKFwiYnV0dG9uW3R5cGU9c3VibWl0XVwiKVxyXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYnRuLXdhcm5pbmdcIilcclxuICAgICAgICAgICAgICAuaHRtbChcIkFkZCB0byBDYXJ0XCIpO1xyXG4gICAgICAgICAgICBpZiAocGhwUGx1Z2luLmNhcnRfaXRlbXMuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgIHBocFBsdWdpbi5jYXJ0X2l0ZW1zLmh0bWwoXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5tc2dbMV0gIT0gMSA/IHJlc3BvbnNlLm1zZ1sxXSA6IFwiXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgZnVuY3Rpb24gcmVmcmVzaF9kZWFsX3ByaWNlKGVsdCkge1xyXG4gICAgICBlbHRcclxuICAgICAgICAucGFyZW50cyhcIiNjYXJ0X2l0ZW1zXCIpXHJcbiAgICAgICAgLm5leHQoKVxyXG4gICAgICAgIC5maW5kKFwiI2RlYWwtcHJpY2VcIilcclxuICAgICAgICAuaHRtbChmdW5jdGlvbiAoaSwgZF9wcmljZSkge1xyXG4gICAgICAgICAgbGV0IHJlZyA9IC9cXHMvZztcclxuICAgICAgICAgIGxldCBwX3ByaWNlID0gZWx0XHJcbiAgICAgICAgICAgIC5wYXJlbnRzKFwiLnJvd1wiKVxyXG4gICAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgICAubGFzdCgpXHJcbiAgICAgICAgICAgIC5maW5kKFwiLnByb2R1Y3RfcHJpY2VcIilcclxuICAgICAgICAgICAgLmh0bWwoKTtcclxuICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQoXHJcbiAgICAgICAgICAgIHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgZF9wcmljZVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJm5ic3A74oKsXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICkgLVxyXG4gICAgICAgICAgICAgIHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgICBwX3ByaWNlXHJcbiAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZShcIiZuYnNwO+KCrFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL0RlbGV0ZSB3aGlzaGxpc3QgaXRlbXNcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHBocFBsdWdpbi53cmFwcGVyLm9uKFwiY2xpY2tcIiwgXCIjd2lzaGxpc3QtaXRlbXMgLmRlbGV0ZUJ0blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQodGhpcykuaHRtbChcIlBsZWFzZSB3YWl0Li4uXCIpO1xyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB1cmw6IFwiZ3Vlc3RzL2RlbGV0ZVwiLFxyXG4gICAgICAgIGlkOiAkKHRoaXMpLmF0dHIoXCJpZFwiKSxcclxuICAgICAgICB0YWJsZTogXCJ3aXNobGlzdFwiLFxyXG4gICAgICAgIG1ldGhvZDogXCJkZWxldGVfY2FydFwiLFxyXG4gICAgICAgIGZybTogJCh0aGlzKS5wYXJlbnQoKSxcclxuICAgICAgICBwYXJhbXM6ICQodGhpcyksXHJcbiAgICAgIH07XHJcbiAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBtYW5hZ2VSZXNwb25zZSk7XHJcbiAgICAgIGZ1bmN0aW9uIG1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCBlbHQpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBlbHQucGFyZW50cyhcIi5yb3dcIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICAgIGlmIChwaHBQbHVnaW4ud2lzaGxpc3RfaXRlbXMuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBwaHBQbHVnaW4ud2lzaGxpc3QuaGlkZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcGhwUGx1Z2luLm5ld1Bob25lXHJcbiAgICAgICAgICAgIC5maW5kKFxyXG4gICAgICAgICAgICAgIFwiLmFkZF90b19jYXJ0X2ZybSBpbnB1dFt2YWx1ZT0nXCIgK1xyXG4gICAgICAgICAgICAgICAgZWx0LnBhcmVudCgpLmNoaWxkcmVuKFwiOmZpcnN0XCIpLnZhbCgpICtcclxuICAgICAgICAgICAgICAgIFwiJ11cIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAuZmluZChcImJ1dHRvblt0eXBlPXN1Ym1pdF1cIilcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwiYnRuLXdhcm5pbmdcIilcclxuICAgICAgICAgICAgLmh0bWwoXCJBZGQgdG8gQ2FydFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9BZGQgdG8gY2FydCBmcm9tIHdoaXNobGlzdFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLndyYXBwZXIub24oXHJcbiAgICAgIFwiY2xpY2tcIixcclxuICAgICAgXCIjd2lzaGxpc3QtaXRlbXMgLnF0eSBidXR0b25bdHlwZT1idXR0b25dXCIsXHJcbiAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICB1cmw6IFwiZ3Vlc3RzL3RvZ2dsZVdpc2hsaXN0QW5kY0NhcnRcIixcclxuICAgICAgICAgIGZybTogJCh0aGlzKS5wcmV2KCksXHJcbiAgICAgICAgICBmcm1fbmFtZTpcclxuICAgICAgICAgICAgXCJkZWxldGUtY2FydC1pdGVtLWZybVwiICtcclxuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KCkuZmluZChcImlucHV0W3R5cGU9aGlkZGVuXVwiKS52YWwoKSxcclxuICAgICAgICAgIHRhYmxlOiBcImNhcnRcIixcclxuICAgICAgICAgIHBhcmFtczogJCh0aGlzKSxcclxuICAgICAgICAgIG1ldGhvZDogXCJhZGRfVG9fQ2FydFwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIG1hbmFnZVJlc3BvbnNlKTtcclxuICAgICAgICBmdW5jdGlvbiBtYW5hZ2VSZXNwb25zZShyZXNwb25zZSwgZWx0KSB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgY2FydCBpcyBlbXB0eVxyXG4gICAgICAgICAgICBpZiAocGhwUGx1Z2luLmNhcnRfaXRlbXMuZmluZChcIiNlbXB0eS1jYXJ0XCIpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgcGhwUGx1Z2luLmNhcnRfaXRlbXMuZmluZChcIiNlbXB0eS1jYXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vYXBwZW5kIGNhcnRcclxuICAgICAgICAgICAgcGhwUGx1Z2luLmNhcnRfaXRlbXMuYXBwZW5kKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UubXNnWzBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gZm9ybWF0IHByb2R1Y3QgcHJpY2VcclxuICAgICAgICAgICAgcGhwUGx1Z2luLndyYXBwZXJcclxuICAgICAgICAgICAgICAuZmluZChcIi5wcm9kdWN0X3ByaWNlXCIpXHJcbiAgICAgICAgICAgICAgLmh0bWwoZnVuY3Rpb24gKGksIHBfcHJpY2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQocGFyc2VGbG9hdChwX3ByaWNlKSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vcmVmcmVzaCBkZWFsIHByaWNlXHJcbiAgICAgICAgICAgIHBocFBsdWdpbi53cmFwcGVyLmZpbmQoXCIjZGVhbC1wcmljZVwiKS5odG1sKGZ1bmN0aW9uIChpLCBkX3ByaWNlKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHJlZyA9IC9cXHMvZztcclxuICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuZm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgZF9wcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIiZuYnNwO+KCrFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgKSArIHBhcnNlRmxvYXQocmVzcG9uc2UubXNnWzFdKVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL3JlZnJlc2ggbmIgaXRlbXMgaW4gdGhlIGNhcnRcclxuICAgICAgICAgICAgcGhwUGx1Z2luLmNvdW50X2l0ZW1zLmh0bWwoZnVuY3Rpb24gKGksIG5iX2l0ZW0pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQobmJfaXRlbSkgKyAxO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcGhwUGx1Z2luLndyYXBwZXIuZmluZChcIi5jYXJ0X25iX2VsdFwiKS5odG1sKGZ1bmN0aW9uIChpLCBuYl9pdGVtKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG5iX2l0ZW0pICsgMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGVsdC5wYXJlbnRzKFwiLnJvd1wiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBpZiAocGhwUGx1Z2luLndpc2hsaXN0X2l0ZW1zLmNoaWxkcmVuKCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICBwaHBQbHVnaW4ud2lzaGxpc3QuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5uZXdQaG9uZVxyXG4gICAgICAgICAgICAgIC5maW5kKFxyXG4gICAgICAgICAgICAgICAgXCIuYWRkX3RvX2NhcnRfZnJtIGlucHV0W3ZhbHVlPSdcIiArXHJcbiAgICAgICAgICAgICAgICAgIGVsdC5wcmV2KCkuY2hpbGRyZW4oXCI6Zmlyc3RcIikudmFsKCkgK1xyXG4gICAgICAgICAgICAgICAgICBcIiddXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCJidXR0b25bdHlwZT1zdWJtaXRdXCIpXHJcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXdhcm5pbmdcIilcclxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJidG4tc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgIC5odG1sKFwiQWRkIHRvIENhcnRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gICQuZm4ucGhwUGx1Z2luID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIG5ldyBQaHBQbHVnaW4odGhpcyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG4gICQoXCIjYm9keVwiKS5waHBQbHVnaW4oKTtcclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjaGFyQXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZScpLmNoYXJBdDtcblxuLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUywgaW5kZXgsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIGluZGV4ICsgKHVuaWNvZGUgPyBjaGFyQXQoUywgaW5kZXgpLmxlbmd0aCA6IDEpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3MgbW92ZWQgdG8gZW50cnkgcG9pbnRzXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgLy8gI21hdGNoIHdvcmtzIGZpbmUgYmVjYXVzZSBpdCBqdXN0IHJldHVybiB0aGUgZXhlYyByZXN1bHRzLCBldmVuIGlmIGl0IGhhc1xuICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgdmFyIHJlID0gLy4vO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xufSk7XG5cbi8vIElFIDw9IDExIHJlcGxhY2VzICQwIHdpdGggdGhlIHdob2xlIG1hdGNoLCBhcyBpZiBpdCB3YXMgJCZcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYwMjQ2NjYvZ2V0dGluZy1pZS10by1yZXBsYWNlLWEtcmVnZXgtd2l0aC10aGUtbGl0ZXJhbC1zdHJpbmctMFxudmFyIFJFUExBQ0VfS0VFUFNfJDAgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ2EnLnJlcGxhY2UoLy4vLCAnJDAnKSA9PT0gJyQwJztcbn0pKCk7XG5cbnZhciBSRVBMQUNFID0gd2VsbEtub3duU3ltYm9sKCdyZXBsYWNlJyk7XG4vLyBTYWZhcmkgPD0gMTMuMC4zKD8pIHN1YnN0aXR1dGVzIG50aCBjYXB0dXJlIHdoZXJlIG4+bSB3aXRoIGFuIGVtcHR5IHN0cmluZ1xudmFyIFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFID0gKGZ1bmN0aW9uICgpIHtcbiAgaWYgKC8uL1tSRVBMQUNFXSkge1xuICAgIHJldHVybiAvLi9bUkVQTEFDRV0oJ2EnLCAnJDAnKSA9PT0gJyc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSkoKTtcblxuLy8gQ2hyb21lIDUxIGhhcyBhIGJ1Z2d5IFwic3BsaXRcIiBpbXBsZW1lbnRhdGlvbiB3aGVuIFJlZ0V4cCNleGVjICE9PSBuYXRpdmVFeGVjXG4vLyBXZWV4IEpTIGhhcyBmcm96ZW4gYnVpbHQtaW4gcHJvdG90eXBlcywgc28gdXNlIHRyeSAvIGNhdGNoIHdyYXBwZXJcbnZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVnZXhwL25vLWVtcHR5LWdyb3VwIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHZhciByZSA9IC8oPzopLztcbiAgdmFyIG9yaWdpbmFsRXhlYyA9IHJlLmV4ZWM7XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcmlnaW5hbEV4ZWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgdmFyIHJlc3VsdCA9ICdhYicuc3BsaXQocmUpO1xuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCAhPT0gMiB8fCByZXN1bHRbMF0gIT09ICdhJyB8fCByZXN1bHRbMV0gIT09ICdiJztcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGxlbmd0aCwgZXhlYywgc2hhbSkge1xuICB2YXIgU1lNQk9MID0gd2VsbEtub3duU3ltYm9sKEtFWSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19TWU1CT0wgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN0cmluZyBtZXRob2RzIGNhbGwgc3ltYm9sLW5hbWVkIFJlZ0VwIG1ldGhvZHNcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19FWEVDID0gREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG5cbiAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XG4gICAgICAvLyBXZSBjYW4ndCB1c2UgcmVhbCByZWdleCBoZXJlIHNpbmNlIGl0IGNhdXNlcyBkZW9wdGltaXphdGlvblxuICAgICAgLy8gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb24gaW4gVjhcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMDZcbiAgICAgIHJlID0ge307XG4gICAgICAvLyBSZWdFeHBbQEBzcGxpdF0gZG9lc24ndCBjYWxsIHRoZSByZWdleCdzIGV4ZWMgbWV0aG9kLCBidXQgZmlyc3QgY3JlYXRlc1xuICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgcmUuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgIHJlLmNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmU7IH07XG4gICAgICByZS5mbGFncyA9ICcnO1xuICAgICAgcmVbU1lNQk9MXSA9IC8uL1tTWU1CT0xdO1xuICAgIH1cblxuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcblxuICAgIHJlW1NZTUJPTF0oJycpO1xuICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgfSk7XG5cbiAgaWYgKFxuICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgKEtFWSA9PT0gJ3JlcGxhY2UnICYmICEoXG4gICAgICBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyAmJlxuICAgICAgUkVQTEFDRV9LRUVQU18kMCAmJlxuICAgICAgIVJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFXG4gICAgKSkgfHxcbiAgICAoS0VZID09PSAnc3BsaXQnICYmICFTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMpXG4gICkge1xuICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICB2YXIgbWV0aG9kcyA9IGV4ZWMoU1lNQk9MLCAnJ1tLRVldLCBmdW5jdGlvbiAobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgIGlmIChyZWdleHAuZXhlYyA9PT0gcmVnZXhwRXhlYykge1xuICAgICAgICBpZiAoREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgLy8gV2UgYXZvaWQgaXQgYnkgZGlyZWN0bHkgY2FsbGluZyB0aGUgbmF0aXZlIEBAbWV0aG9kIG1ldGhvZC5cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlUmVnRXhwTWV0aG9kLmNhbGwocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZU1ldGhvZC5jYWxsKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICB9LCB7XG4gICAgICBSRVBMQUNFX0tFRVBTXyQwOiBSRVBMQUNFX0tFRVBTXyQwLFxuICAgICAgUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkU6IFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFXG4gICAgfSk7XG4gICAgdmFyIHN0cmluZ01ldGhvZCA9IG1ldGhvZHNbMF07XG4gICAgdmFyIHJlZ2V4TWV0aG9kID0gbWV0aG9kc1sxXTtcblxuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyaW5nTWV0aG9kKTtcbiAgICByZWRlZmluZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJlZ2V4TWV0aG9kLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcmVnZXhNZXRob2QuY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgKTtcbiAgfVxuXG4gIGlmIChzaGFtKSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoUmVnRXhwLnByb3RvdHlwZVtTWU1CT0xdLCAnc2hhbScsIHRydWUpO1xufTtcbiIsInZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciByZXBsYWNlID0gJycucmVwbGFjZTtcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MUyA9IC9cXCQoWyQmJ2BdfFxcZHsxLDJ9fDxbXj5dKj4pL2c7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQgPSAvXFwkKFskJidgXXxcXGR7MSwyfSkvZztcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRzdWJzdGl0dXRpb25cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuICB2YXIgdGFpbFBvcyA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gIHZhciBtID0gY2FwdHVyZXMubGVuZ3RoO1xuICB2YXIgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEO1xuICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbmFtZWRDYXB0dXJlcyA9IHRvT2JqZWN0KG5hbWVkQ2FwdHVyZXMpO1xuICAgIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MUztcbiAgfVxuICByZXR1cm4gcmVwbGFjZS5jYWxsKHJlcGxhY2VtZW50LCBzeW1ib2xzLCBmdW5jdGlvbiAobWF0Y2gsIGNoKSB7XG4gICAgdmFyIGNhcHR1cmU7XG4gICAgc3dpdGNoIChjaC5jaGFyQXQoMCkpIHtcbiAgICAgIGNhc2UgJyQnOiByZXR1cm4gJyQnO1xuICAgICAgY2FzZSAnJic6IHJldHVybiBtYXRjaGVkO1xuICAgICAgY2FzZSAnYCc6IHJldHVybiBzdHIuc2xpY2UoMCwgcG9zaXRpb24pO1xuICAgICAgY2FzZSBcIidcIjogcmV0dXJuIHN0ci5zbGljZSh0YWlsUG9zKTtcbiAgICAgIGNhc2UgJzwnOlxuICAgICAgICBjYXB0dXJlID0gbmFtZWRDYXB0dXJlc1tjaC5zbGljZSgxLCAtMSldO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6IC8vIFxcZFxcZD9cbiAgICAgICAgdmFyIG4gPSArY2g7XG4gICAgICAgIGlmIChuID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgIHZhciBmID0gZmxvb3IobiAvIDEwKTtcbiAgICAgICAgICBpZiAoZiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIGlmIChmIDw9IG0pIHJldHVybiBjYXB0dXJlc1tmIC0gMV0gPT09IHVuZGVmaW5lZCA/IGNoLmNoYXJBdCgxKSA6IGNhcHR1cmVzW2YgLSAxXSArIGNoLmNoYXJBdCgxKTtcbiAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgY2FwdHVyZSA9IGNhcHR1cmVzW24gLSAxXTtcbiAgICB9XG4gICAgcmV0dXJuIGNhcHR1cmUgPT09IHVuZGVmaW5lZCA/ICcnIDogY2FwdHVyZTtcbiAgfSk7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL2NsYXNzb2YtcmF3Jyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vcmVnZXhwLWV4ZWMnKTtcblxuLy8gYFJlZ0V4cEV4ZWNgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAodHlwZW9mIGV4ZWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgcmVzdWx0ID0gZXhlYy5jYWxsKFIsIFMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdSZWdFeHAgZXhlYyBtZXRob2QgcmV0dXJuZWQgc29tZXRoaW5nIG90aGVyIHRoYW4gYW4gT2JqZWN0IG9yIG51bGwnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmIChjbGFzc29mKFIpICE9PSAnUmVnRXhwJykge1xuICAgIHRocm93IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xuICB9XG5cbiAgcmV0dXJuIHJlZ2V4cEV4ZWMuY2FsbChSLCBTKTtcbn07XG5cbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWdleHBGbGFncyA9IHJlcXVpcmUoJy4vcmVnZXhwLWZsYWdzJyk7XG52YXIgc3RpY2t5SGVscGVycyA9IHJlcXVpcmUoJy4vcmVnZXhwLXN0aWNreS1oZWxwZXJzJyk7XG5cbnZhciBuYXRpdmVFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xuLy8gVGhpcyBhbHdheXMgcmVmZXJzIHRvIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24sIGJlY2F1c2UgdGhlXG4vLyBTdHJpbmcjcmVwbGFjZSBwb2x5ZmlsbCB1c2VzIC4vZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyxcbi8vIHdoaWNoIGxvYWRzIHRoaXMgZmlsZSBiZWZvcmUgcGF0Y2hpbmcgdGhlIG1ldGhvZC5cbnZhciBuYXRpdmVSZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xuXG52YXIgcGF0Y2hlZEV4ZWMgPSBuYXRpdmVFeGVjO1xuXG52YXIgVVBEQVRFU19MQVNUX0lOREVYX1dST05HID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlMSA9IC9hLztcbiAgdmFyIHJlMiA9IC9iKi9nO1xuICBuYXRpdmVFeGVjLmNhbGwocmUxLCAnYScpO1xuICBuYXRpdmVFeGVjLmNhbGwocmUyLCAnYScpO1xuICByZXR1cm4gcmUxLmxhc3RJbmRleCAhPT0gMCB8fCByZTIubGFzdEluZGV4ICE9PSAwO1xufSkoKTtcblxudmFyIFVOU1VQUE9SVEVEX1kgPSBzdGlja3lIZWxwZXJzLlVOU1VQUE9SVEVEX1kgfHwgc3RpY2t5SGVscGVycy5CUk9LRU5fQ0FSRVQ7XG5cbi8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwLCBjb3BpZWQgZnJvbSBlczUtc2hpbSdzIFN0cmluZyNzcGxpdCBwYXRjaC5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tYXNzZXJ0aW9uLWNhcHR1cmluZy1ncm91cCwgcmVnZXhwL25vLWVtcHR5LWdyb3VwIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG52YXIgTlBDR19JTkNMVURFRCA9IC8oKT8/Ly5leGVjKCcnKVsxXSAhPT0gdW5kZWZpbmVkO1xuXG52YXIgUEFUQ0ggPSBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgfHwgTlBDR19JTkNMVURFRCB8fCBVTlNVUFBPUlRFRF9ZO1xuXG5pZiAoUEFUQ0gpIHtcbiAgcGF0Y2hlZEV4ZWMgPSBmdW5jdGlvbiBleGVjKHN0cikge1xuICAgIHZhciByZSA9IHRoaXM7XG4gICAgdmFyIGxhc3RJbmRleCwgcmVDb3B5LCBtYXRjaCwgaTtcbiAgICB2YXIgc3RpY2t5ID0gVU5TVVBQT1JURURfWSAmJiByZS5zdGlja3k7XG4gICAgdmFyIGZsYWdzID0gcmVnZXhwRmxhZ3MuY2FsbChyZSk7XG4gICAgdmFyIHNvdXJjZSA9IHJlLnNvdXJjZTtcbiAgICB2YXIgY2hhcnNBZGRlZCA9IDA7XG4gICAgdmFyIHN0ckNvcHkgPSBzdHI7XG5cbiAgICBpZiAoc3RpY2t5KSB7XG4gICAgICBmbGFncyA9IGZsYWdzLnJlcGxhY2UoJ3knLCAnJyk7XG4gICAgICBpZiAoZmxhZ3MuaW5kZXhPZignZycpID09PSAtMSkge1xuICAgICAgICBmbGFncyArPSAnZyc7XG4gICAgICB9XG5cbiAgICAgIHN0ckNvcHkgPSBTdHJpbmcoc3RyKS5zbGljZShyZS5sYXN0SW5kZXgpO1xuICAgICAgLy8gU3VwcG9ydCBhbmNob3JlZCBzdGlja3kgYmVoYXZpb3IuXG4gICAgICBpZiAocmUubGFzdEluZGV4ID4gMCAmJiAoIXJlLm11bHRpbGluZSB8fCByZS5tdWx0aWxpbmUgJiYgc3RyW3JlLmxhc3RJbmRleCAtIDFdICE9PSAnXFxuJykpIHtcbiAgICAgICAgc291cmNlID0gJyg/OiAnICsgc291cmNlICsgJyknO1xuICAgICAgICBzdHJDb3B5ID0gJyAnICsgc3RyQ29weTtcbiAgICAgICAgY2hhcnNBZGRlZCsrO1xuICAgICAgfVxuICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIHN0ciBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXig/OicgKyBzb3VyY2UgKyAnKScsIGZsYWdzKTtcbiAgICB9XG5cbiAgICBpZiAoTlBDR19JTkNMVURFRCkge1xuICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXicgKyBzb3VyY2UgKyAnJCg/IVxcXFxzKScsIGZsYWdzKTtcbiAgICB9XG4gICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORykgbGFzdEluZGV4ID0gcmUubGFzdEluZGV4O1xuXG4gICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwoc3RpY2t5ID8gcmVDb3B5IDogcmUsIHN0ckNvcHkpO1xuXG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIG1hdGNoLmlucHV0ID0gbWF0Y2guaW5wdXQuc2xpY2UoY2hhcnNBZGRlZCk7XG4gICAgICAgIG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UoY2hhcnNBZGRlZCk7XG4gICAgICAgIG1hdGNoLmluZGV4ID0gcmUubGFzdEluZGV4O1xuICAgICAgICByZS5sYXN0SW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgfSBlbHNlIHJlLmxhc3RJbmRleCA9IDA7XG4gICAgfSBlbHNlIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgJiYgbWF0Y2gpIHtcbiAgICAgIHJlLmxhc3RJbmRleCA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgIH1cbiAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJyB3b3JrIGZvciAvKC4/KT8vXG4gICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaGVkRXhlYztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxuLy8gYFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NgIGdldHRlciBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXQtcmVnZXhwLnByb3RvdHlwZS5mbGFnc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LmRvdEFsbCkgcmVzdWx0ICs9ICdzJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9mYWlscycpO1xuXG4vLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ2EnLCAneScpIC0+IC9hL3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvcixcbi8vIHNvIHdlIHVzZSBhbiBpbnRlcm1lZGlhdGUgZnVuY3Rpb24uXG5mdW5jdGlvbiBSRShzLCBmKSB7XG4gIHJldHVybiBSZWdFeHAocywgZik7XG59XG5cbmV4cG9ydHMuVU5TVVBQT1JURURfWSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCdhJywgJ3knKSAtPiAvYS95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbiAgdmFyIHJlID0gUkUoJ2EnLCAneScpO1xuICByZS5sYXN0SW5kZXggPSAyO1xuICByZXR1cm4gcmUuZXhlYygnYWJjZCcpICE9IG51bGw7XG59KTtcblxuZXhwb3J0cy5CUk9LRU5fQ0FSRVQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTc3MzY4N1xuICB2YXIgcmUgPSBSRSgnXnInLCAnZ3knKTtcbiAgcmUubGFzdEluZGV4ID0gMjtcbiAgcmV0dXJuIHJlLmV4ZWMoJ3N0cicpICE9IG51bGw7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcblxuLy8gYFJlZ0V4cC5wcm90b3R5cGUuZXhlY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUuZXhlY1xuJCh7IHRhcmdldDogJ1JlZ0V4cCcsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IC8uLy5leGVjICE9PSBleGVjIH0sIHtcbiAgZXhlYzogZXhlY1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciBnZXRTdWJzdGl0dXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LXN1YnN0aXR1dGlvbicpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG52YXIgbWF5YmVUb1N0cmluZyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/IGl0IDogU3RyaW5nKGl0KTtcbn07XG5cbi8vIEBAcmVwbGFjZSBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3JlcGxhY2UnLCAyLCBmdW5jdGlvbiAoUkVQTEFDRSwgbmF0aXZlUmVwbGFjZSwgbWF5YmVDYWxsTmF0aXZlLCByZWFzb24pIHtcbiAgdmFyIFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFID0gcmVhc29uLlJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFO1xuICB2YXIgUkVQTEFDRV9LRUVQU18kMCA9IHJlYXNvbi5SRVBMQUNFX0tFRVBTXyQwO1xuICB2YXIgVU5TQUZFX1NVQlNUSVRVVEUgPSBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA/ICckJyA6ICckMCc7XG5cbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHJlcGxhY2VyID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgICByZXR1cm4gcmVwbGFjZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHJlcGxhY2VyLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgOiBuYXRpdmVSZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHJlcGxhY2VcbiAgICBmdW5jdGlvbiAocmVnZXhwLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgKCFSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSAmJiBSRVBMQUNFX0tFRVBTXyQwKSB8fFxuICAgICAgICAodHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gJ3N0cmluZycgJiYgcmVwbGFjZVZhbHVlLmluZGV4T2YoVU5TQUZFX1NVQlNUSVRVVEUpID09PSAtMSlcbiAgICAgICkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVJlcGxhY2UsIHJlZ2V4cCwgdGhpcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG5cbiAgICAgIHZhciBmdW5jdGlvbmFsUmVwbGFjZSA9IHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBpZiAoIWZ1bmN0aW9uYWxSZXBsYWNlKSByZXBsYWNlVmFsdWUgPSBTdHJpbmcocmVwbGFjZVZhbHVlKTtcblxuICAgICAgdmFyIGdsb2JhbCA9IHJ4Lmdsb2JhbDtcbiAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGJyZWFrO1xuXG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICBpZiAoIWdsb2JhbCkgYnJlYWs7XG5cbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhY2N1bXVsYXRlZFJlc3VsdCA9ICcnO1xuICAgICAgdmFyIG5leHRTb3VyY2VQb3NpdGlvbiA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0c1tpXTtcblxuICAgICAgICB2YXIgbWF0Y2hlZCA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBtYXgobWluKHRvSW50ZWdlcihyZXN1bHQuaW5kZXgpLCBTLmxlbmd0aCksIDApO1xuICAgICAgICB2YXIgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgLy8gTk9URTogVGhpcyBpcyBlcXVpdmFsZW50IHRvXG4gICAgICAgIC8vICAgY2FwdHVyZXMgPSByZXN1bHQuc2xpY2UoMSkubWFwKG1heWJlVG9TdHJpbmcpXG4gICAgICAgIC8vIGJ1dCBmb3Igc29tZSByZWFzb24gYG5hdGl2ZVNsaWNlLmNhbGwocmVzdWx0LCAxLCByZXN1bHQubGVuZ3RoKWAgKGNhbGxlZCBpblxuICAgICAgICAvLyB0aGUgc2xpY2UgcG9seWZpbGwgd2hlbiBzbGljaW5nIG5hdGl2ZSBhcnJheXMpIFwiZG9lc24ndCB3b3JrXCIgaW4gc2FmYXJpIDkgYW5kXG4gICAgICAgIC8vIGNhdXNlcyBhIGNyYXNoIChodHRwczovL3Bhc3RlYmluLmNvbS9OMjFRemVRQSkgd2hlbiB0cnlpbmcgdG8gZGVidWcgaXQuXG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSBjYXB0dXJlcy5wdXNoKG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgIHZhciBuYW1lZENhcHR1cmVzID0gcmVzdWx0Lmdyb3VwcztcbiAgICAgICAgaWYgKGZ1bmN0aW9uYWxSZXBsYWNlKSB7XG4gICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IFttYXRjaGVkXS5jb25jYXQoY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSByZXBsYWNlckFyZ3MucHVzaChuYW1lZENhcHR1cmVzKTtcbiAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBTdHJpbmcocmVwbGFjZVZhbHVlLmFwcGx5KHVuZGVmaW5lZCwgcmVwbGFjZXJBcmdzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgUywgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSBuZXh0U291cmNlUG9zaXRpb24pIHtcbiAgICAgICAgICBhY2N1bXVsYXRlZFJlc3VsdCArPSBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbiwgcG9zaXRpb24pICsgcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgbmV4dFNvdXJjZVBvc2l0aW9uID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkUmVzdWx0ICsgUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24pO1xuICAgIH1cbiAgXTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==