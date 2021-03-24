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
/* harmony export */   "isIE": function() { return /* binding */ isIE; }
/* harmony export */ });
var BASE_URL = /kngell_ecommerce/;
var AVATAR = BASE_URL + "public/assets/img/users/avatar.png";
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
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/assets/js/core/config.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



 //display all details

function displayAllDetails(data, gestion) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + data.url,
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
    url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + data.url,
    method: "post",
    data: data.formData,
    success: function success(response) {
      gestion(response, data.params ? data.params : "");
    }
  });
} //display all Items

function displayAllItems(data, gestion) {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + data.url,
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
  if (data.start_date) formData.append("start_date", data.start_date);
  if (data.end_date) formData.append("end_date", data.end_date);
  if (data.imageUrlsAry) formData.append("imageUrlsAry", data.imageUrlsAry);
  if (data.select2) formData.append("select2", data.select2);
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + data.url,
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
    url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + data.url,
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
        url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + data.url,
        method: "post",
        data: {
          id: data.id,
          table: data.table,
          notification: data.notification
        },
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
      console.log(data);
      $.ajax({
        url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + data.url_check,
        method: "post",
        data: {
          id: data.id,
          table: data.table
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
    url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + "forms/fillMultiselect",
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
      url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + "forms/addcategorie",
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
    url: _config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL + _data.url,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb3JlL2Zvcm1fY3J1ZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvcmUvdmlzaXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jdXN0b20vaG9tZS9jYXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LXN1YnN0aXR1dGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1zdGlja3ktaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnJlcGxhY2UuanMiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJBVkFUQVIiLCJpc0lFIiwidXNlckFnZW50IiwibmF2aWdhdG9yIiwidGVzdCIsImRpc3BsYXlBbGxEZXRhaWxzIiwiZGF0YSIsImdlc3Rpb24iLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsInRhYmxlIiwiaWQiLCJ1c2VyIiwic2Vzc2lvbl9pZCIsImRhdGFfdHlwZSIsInJldHVybl9tb2RlIiwidG9rZW4iLCJmcm1fbmFtZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInBhcmFtcyIsImVkaXRGb3JtIiwiZm9ybURhdGEiLCJkaXNwbGF5QWxsSXRlbXMiLCJzdGFydCIsIm1heCIsInF1ZXJ5IiwicGFnZSIsInBhZ2luYXRpb24iLCJBZGQiLCJGb3JtRGF0YSIsImZybSIsImFwcGVuZCIsIm5vdGlmaWNhdGlvbiIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsImltYWdlVXJsc0FyeSIsInNlbGVjdDIiLCJjYWNoZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJDYWxsX2NvbnRyb2xsZXIiLCJ1cmxfZGF0YSIsImFjdGlvbiIsImZyZWVkYXRhIiwidXNlcl9pZCIsIkRlbGV0ZSIsImRpc3BsYXlJdGVtIiwiY2hlY2tCZWZvcmVEZWxldGUiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVybF9jaGVjayIsInN3YWwiLCJmaXJlIiwidGl0bGUiLCJzaG93Q2FuY2VsQnV0dG9uIiwiaHRtbCIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjb25zb2xlIiwibG9nIiwiZG9uZSIsIm1zZyIsImZhaWwiLCJlcnJvciIsImRpc3BsYXlNdWx0aXNlbGxlY3QiLCJkaXNwbGF5SUQiLCJhbGVydElEIiwiYWRkQ2F0ZWdvcnJpZSIsImNhdEZpZWxkIiwiY2F0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwiYWxlcnQiLCJjYXRlZ29yaWUiLCJzZWxlY3QyQWpheFBhcmFtcyIsInR5cGUiLCJkYXRhVHlwZSIsImRlbGF5Iiwic2VhcmNoVGVybSIsInRlcm0iLCJwcm9jZXNzUmVzdWx0cyIsInJlc3VsdHMiLCJtYXAiLCJvYmoiLCJ0ZXh0IiwiZ2V0X3Zpc2l0b3JzX2RhdGEiLCJpcCIsInZhbCIsInNlbmRfdmlzaXRvcnNfZGF0YSIsIm1hbmFnZVIiLCJjb29raWVzIiwicmVzcG9uc2l2ZSIsIml0ZW1zIiwiYWRkRXZlbnRMaXN0ZW5lciIsIlBocFBsdWdpbiIsImVsZW1lbnQiLCJpbml0IiwicHJvdG90eXBlIiwic2V0dXBWYXJpYWJsZXMiLCJzZXR1cEV2ZW50cyIsIndyYXBwZXIiLCJmaW5kIiwiY291bnRfaXRlbXMiLCJjYXJ0IiwiYmFubmVyIiwibmV3UGhvbmUiLCJjYXJ0X2l0ZW1zIiwid2lzaGxpc3QiLCJ3aXNobGlzdF9pdGVtcyIsInN1YlRvdGFsIiwicGhwUGx1Z2luIiwiY3VycmVuY3kiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJvd2xDYXJvdXNlbCIsImxvb3AiLCJuYXYiLCJkb3RzIiwib24iLCJlIiwiaW5wdXQiLCJuZXh0IiwicGFyZW50cyIsImRpc3BsYXlfcHJvZHVjdCIsImVsdCIsImkiLCJvbGR2YWwiLCJxdHkiLCJwYXJzZUludCIsInBhcmVudCIsImZvcm1hdCIsInBhcnNlRmxvYXQiLCJpdGVtX3ByaWNlIiwiZGVhbF9wcmljZSIsInJlZyIsInJlcGxhY2UiLCJwcmV2ZW50RGVmYXVsdCIsInByZXYiLCJhdHRyIiwibWFuYWdlUmVzcG9uc2UiLCJyZWZyZXNoX2RlYWxfcHJpY2UiLCJmaXJzdCIsInJlbW92ZSIsIm5iX2l0ZW1zIiwiY2hpbGRyZW4iLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwicF9wcmljZSIsImlzIiwic2hvdyIsImZhZGVJbiIsIm5iX2l0ZW0iLCJkX3ByaWNlIiwibGFzdCIsImhpZGUiLCJmbiIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixvQkFBb0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoianMvY3VzdG9tL2hvbWUvY2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJleHBvcnQgY29uc3QgQkFTRV9VUkwgPSAva25nZWxsX2Vjb21tZXJjZS87XHJcbmV4cG9ydCBjb25zdCBBVkFUQVIgPSBCQVNFX1VSTCArIFwicHVibGljL2Fzc2V0cy9pbWcvdXNlcnMvYXZhdGFyLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzSUUgPSAoKSA9PiB7XHJcbiAgdmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgcmV0dXJuIC9NU0lFfFRyaWRlbnQvLnRlc3QodXNlckFnZW50KTtcclxufTtcclxuIiwiaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbi8vZGlzcGxheSBhbGwgZGV0YWlsc1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFsbERldGFpbHMoZGF0YSwgZ2VzdGlvbikge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgIHVzZXI6IGRhdGEudXNlciA/IGRhdGEudXNlciA6IFwiXCIsXHJcbiAgICAgIHNlc3Npb25faWQ6IGRhdGEuc2Vzc2lvbl9pZCA/IGRhdGEuc2Vzc2lvbl9pZCA6IFwiXCIsXHJcbiAgICAgIGRhdGFfdHlwZTogZGF0YS5kYXRhX3R5cGUgPyBkYXRhLmRhdGFfdHlwZSA6IFwiXCIsXHJcbiAgICAgIHJldHVybl9tb2RlOiBkYXRhLnJldHVybl9tb2RlID8gZGF0YS5yZXR1cm5fbW9kZSA6IFwiXCIsXHJcbiAgICAgIHRva2VuOiBkYXRhLnRva2VuID8gZGF0YS50b2tlbiA6IFwiXCIsXHJcbiAgICAgIGZybV9uYW1lOiBkYXRhLmZybV9uYW1lID8gZGF0YS5mcm1fbmFtZSA6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGdlc3Rpb24ocmVzcG9uc2UsIGRhdGEucGFyYW1zID8gZGF0YS5wYXJhbXMgOiBcIlwiKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuLy9lZGl0IGRhdGFcclxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRGb3JtKGRhdGEsIGdlc3Rpb24pIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEuZm9ybURhdGEsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuLy9kaXNwbGF5IGFsbCBJdGVtc1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFsbEl0ZW1zKGRhdGEsIGdlc3Rpb24pIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBCQVNFX1VSTCArIGRhdGEudXJsLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgIGlkOiBkYXRhLmlkICE9IFwiXCIgPyBkYXRhLmlkIDogXCJcIixcclxuICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgIG1heDogZGF0YS5tYXggIT0gXCJcIiA/IGRhdGEubWF4IDogXCJcIixcclxuICAgICAgdXNlcjogZGF0YS51c2VyICE9IFwiXCIgPyBkYXRhLnVzZXIgOiBcIlwiLFxyXG4gICAgICBxdWVyeTogZGF0YS5xdWVyeSAhPSBcIlwiID8gZGF0YS5xdWVyeSA6IFwiXCIsXHJcbiAgICAgIHBhZ2U6IGRhdGEucGFnZSAhPSBcIlwiID8gZGF0YS5wYWdlIDogXCJcIixcclxuICAgICAgcGFnaW5hdGlvbjogZGF0YS5wYWdpbmF0aW9uICE9IFwiXCIgPyBkYXRhLnBhZ2luYXRpb24gOiBcIlwiLFxyXG4gICAgICBkYXRhX3R5cGU6IGRhdGEuZGF0YV90eXBlID8gZGF0YS5kYXRhX3R5cGUgOiBcIlwiLFxyXG4gICAgICByZXR1cm5fbW9kZTogZGF0YS5yZXR1cm5fbW9kZSA/IGRhdGEucmV0dXJuX21vZGUgOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG4vL2FkZCBJdGVtXHJcbmV4cG9ydCBmdW5jdGlvbiBBZGQoZGF0YSwgZ2VzdGlvbikge1xyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkYXRhLmZybVswXSk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwidGFibGVcIiwgZGF0YS50YWJsZSk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwibm90aWZpY2F0aW9uXCIsIGRhdGEubm90aWZpY2F0aW9uKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJmcm1fbmFtZVwiLCBkYXRhLmZybV9uYW1lKTtcclxuICBpZiAoZGF0YS5zdGFydF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJzdGFydF9kYXRlXCIsIGRhdGEuc3RhcnRfZGF0ZSk7XHJcbiAgaWYgKGRhdGEuZW5kX2RhdGUpIGZvcm1EYXRhLmFwcGVuZChcImVuZF9kYXRlXCIsIGRhdGEuZW5kX2RhdGUpO1xyXG4gIGlmIChkYXRhLmltYWdlVXJsc0FyeSkgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VVcmxzQXJ5XCIsIGRhdGEuaW1hZ2VVcmxzQXJ5KTtcclxuICBpZiAoZGF0YS5zZWxlY3QyKSBmb3JtRGF0YS5hcHBlbmQoXCJzZWxlY3QyXCIsIGRhdGEuc2VsZWN0Mik7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIGNhY2hlOiBmYWxzZSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBnZXN0aW9uKHJlc3BvbnNlLCBkYXRhLnBhcmFtcyA/IGRhdGEucGFyYW1zIDogXCJcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbi8vdXBkYXRlXHJcbmV4cG9ydCBmdW5jdGlvbiBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgZ2VzdGlvbikge1xyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkYXRhLmZybVswXSk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwiZnJtX25hbWVcIiwgZGF0YS5mcm1fbmFtZSk7XHJcbiAgaWYgKGRhdGEudGFibGUpIGZvcm1EYXRhLmFwcGVuZChcInRhYmxlXCIsIGRhdGEudGFibGUpO1xyXG4gIGlmIChkYXRhLm5vdGlmaWNhdGlvbikgZm9ybURhdGEuYXBwZW5kKFwibm90aWZpY2F0aW9uXCIsIGRhdGEubm90aWZpY2F0aW9uKTtcclxuICBpZiAoZGF0YS51cmxfZGF0YSkgZm9ybURhdGEuYXBwZW5kKFwidXJsX2RhdGFcIiwgZGF0YS51cmxfZGF0YSk7XHJcbiAgaWYgKGRhdGEuYWN0aW9uKSBmb3JtRGF0YS5hcHBlbmQoXCJhY3Rpb25cIiwgZGF0YS5hY3Rpb24pO1xyXG4gIGlmIChkYXRhLmltYWdlVXJsc0FyeSkgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VVcmxzQXJ5XCIsIGRhdGEuaW1hZ2VVcmxzQXJ5KTtcclxuICBpZiAoZGF0YS5mcmVlZGF0YSkgZm9ybURhdGEuYXBwZW5kKFwiZnJlZWRhdGFcIiwgZGF0YS5mcmVlZGF0YSk7XHJcbiAgaWYgKGRhdGEuc3RhcnRfZGF0ZSkgZm9ybURhdGEuYXBwZW5kKFwic3RhcnRfZGF0ZVwiLCBkYXRhLnN0YXJ0X2RhdGUpO1xyXG4gIGlmIChkYXRhLmVuZF9kYXRlKSBmb3JtRGF0YS5hcHBlbmQoXCJlbmRfZGF0ZVwiLCBkYXRhLmVuZF9kYXRlKTtcclxuICBpZiAoZGF0YS5pZCkgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgZGF0YS5pZCk7XHJcbiAgaWYgKGRhdGEudXNlcl9pZCkgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgZGF0YS51c2VyX2lkKTtcclxuICBpZiAoZGF0YS5tZXRob2QpIGZvcm1EYXRhLmFwcGVuZChcIm1ldGhvZFwiLCBkYXRhLm1ldGhvZCk7XHJcbiAgaWYgKGRhdGEuc2VsZWN0MikgZm9ybURhdGEuYXBwZW5kKFwic2VsZWN0MlwiLCBkYXRhLnNlbGVjdDIpO1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgZ2VzdGlvbihyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuLy9kZWxldGVcclxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZShkYXRhLCBkaXNwbGF5SXRlbSkge1xyXG4gIGNoZWNrQmVmb3JlRGVsZXRlKGRhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybCxcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgICAgICBub3RpZmljYXRpb246IGRhdGEubm90aWZpY2F0aW9uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBkaXNwbGF5SXRlbShyZXNwb25zZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFwiXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbi8vZnVuY3Rpb24gY2hlY2sgYmVmb3JlIGRlbGV0ZVxyXG5mdW5jdGlvbiBjaGVja0JlZm9yZURlbGV0ZShkYXRhKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGlmICghZGF0YS51cmxfY2hlY2spIHtcclxuICAgICAgZGF0YS5zd2FsXHJcbiAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgIGh0bWw6IFwiPHA+WW91IHdvbid0IGJlIGFibGUgdG8gcmV2ZXJ0IHRoaXMhPC9wPlwiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkRlbGV0ZSFcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogQkFTRV9VUkwgKyBkYXRhLnVybF9jaGVjayxcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGRhdGEuc3dhbFxyXG4gICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgaHRtbDogXCI8cD5Zb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyE8L3A+XCIgKyByZXNwb25zZS5tc2csXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiRGVsZXRlIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU11bHRpc2VsbGVjdChkYXRhKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogQkFTRV9VUkwgKyBcImZvcm1zL2ZpbGxNdWx0aXNlbGVjdFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGFibGU6IGRhdGEudGFibGUsXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgZGF0YS5kaXNwbGF5SUQuYXBwZW5kKHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YS5hbGVydElELmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhdGVnb3JyaWUoY2F0RmllbGQsIGFsZXJ0SUQpIHtcclxuICBsZXQgY2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXRGaWVsZCk7XHJcbiAgaWYgKGNhdC52YWx1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgYWxlcnQoXCJMZSBjaGFtcHMgY2F0w6lnb3JpZSBlc3QgdmlkZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBCQVNFX1VSTCArIFwiZm9ybXMvYWRkY2F0ZWdvcmllXCIsXHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjYXRlZ29yaWU6IGNhdC52YWx1ZSxcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlICE9IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAkKGFsZXJ0SUQpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0MkFqYXhQYXJhbXMoZGF0YSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICB0eXBlOiBcInBvc3RcIixcclxuICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgIGRlbGF5OiAyNTAsXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VhcmNoVGVybTogcGFyYW1zLnRlcm0sIC8vIHNlYXJjaCB0ZXJtXHJcbiAgICAgICAgdGFibGU6IGRhdGEudGFibGUgIT0gXCJcIiA/IGRhdGEudGFibGUgOiBcIlwiLFxyXG4gICAgICAgIGRhdGFfdHlwZTogZGF0YS5kYXRhX3R5cGUgIT0gXCJcIiA/IGRhdGEuZGF0YV90eXBlIDogXCJcIixcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcmVzdWx0czogJC5tYXAocmVzcG9uc2UubXNnLCBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaWQgIT0gMCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBvYmouaWQsIHRleHQ6IG9iai50ZXh0IH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IG9iai5pZCwgdGV4dDogb2JqLnRleHQgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNhY2hlOiB0cnVlLFxyXG4gIH07XHJcbn1cclxuIiwiLy9HZXQgdmlzaXRvcnMgRGF0YVxyXG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5leHBvcnQgY29uc3QgZ2V0X3Zpc2l0b3JzX2RhdGEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICBpcDogJChcIiNpcF9hZGRyZXNzXCIpLnZhbCgpLFxyXG4gICAgfTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICB9IGVsc2UgcmVqZWN0KFwibm8gZGF0YVwiKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kX3Zpc2l0b3JzX2RhdGEgPSAoZGF0YSwgbWFuYWdlUikgPT4ge1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IEJBU0VfVVJMICsgZGF0YS51cmwsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0YWJsZTogZGF0YS50YWJsZSxcclxuICAgICAgaXA6IGRhdGEuaXAgPyBkYXRhLmlwIDogXCJcIixcclxuICAgICAgY29va2llczogZGF0YS5jb29raWVzID8gZGF0YS5jb29raWVzIDogXCJcIixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBtYW5hZ2VSKHJlc3BvbnNlKTtcclxuICAgIH0pXHJcbiAgICAuZmFpbCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsImNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgMDoge1xyXG4gICAgaXRlbXM6IDEsXHJcbiAgfSxcclxuICA2MDA6IHtcclxuICAgIGl0ZW1zOiAzLFxyXG4gIH0sXHJcbiAgMTAwMDoge1xyXG4gICAgaXRlbXM6IDUsXHJcbiAgfSxcclxufTtcclxuaW1wb3J0IHsgZGlzcGxheUFsbERldGFpbHMsIENhbGxfY29udHJvbGxlciB9IGZyb20gXCJjb3JlanMvZm9ybV9jcnVkXCI7XHJcbmltcG9ydCB7IGdldF92aXNpdG9yc19kYXRhLCBzZW5kX3Zpc2l0b3JzX2RhdGEgfSBmcm9tIFwiY29yZWpzL3Zpc2l0b3JzXCI7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBmdW5jdGlvbiBQaHBQbHVnaW4oZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuICBQaHBQbHVnaW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldHVwVmFyaWFibGVzKCk7XHJcbiAgICB0aGlzLnNldHVwRXZlbnRzKCk7XHJcbiAgfTtcclxuICBQaHBQbHVnaW4ucHJvdG90eXBlLnNldHVwVmFyaWFibGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy53cmFwcGVyID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjbWFpbi1zaXRlXCIpO1xyXG4gICAgdGhpcy5jb3VudF9pdGVtcyA9IHRoaXMuZWxlbWVudC5maW5kKFwiLmNhcnRfbmJfZWx0XCIpO1xyXG4gICAgdGhpcy5jYXJ0ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjY2FydFwiKTtcclxuICAgIHRoaXMuYmFubmVyID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjYmFubmVyLWFyZWFcIik7XHJcbiAgICB0aGlzLm5ld1Bob25lID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjbmV3LXBob25lc1wiKTtcclxuICAgIHRoaXMuY2FydF9pdGVtcyA9IHRoaXMuZWxlbWVudC5maW5kKFwiI2NhcnRfaXRlbXNcIik7XHJcbiAgICB0aGlzLndpc2hsaXN0ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjd2lzaGxpc3RcIik7XHJcbiAgICB0aGlzLndpc2hsaXN0X2l0ZW1zID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjd2lzaGxpc3QtaXRlbXNcIik7XHJcbiAgICB0aGlzLnN1YlRvdGFsID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjc3ViX3RvdGFsXCIpO1xyXG4gIH07XHJcbiAgUGhwUGx1Z2luLnByb3RvdHlwZS5zZXR1cEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwaHBQbHVnaW4gPSB0aGlzO1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vQ3VycmVuY3kgZm9ybWF0XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBsZXQgY3VycmVuY3kgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJmci1GUlwiLCB7XHJcbiAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXHJcbiAgICAgIGN1cnJlbmN5OiBcIkVVUlwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9Pd2wgY2Fyb3VzZWxcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vbmV3IHBob25lc1xyXG4gICAgcGhwUGx1Z2luLm5ld1Bob25lLmZpbmQoXCIub3dsLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgcmVzcG9uc2l2ZTogcmVzcG9uc2l2ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vUXR5IHNlY3Rpb25cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHBocFBsdWdpbi5jYXJ0X2l0ZW1zLm9uKFwiY2xpY2tcIiwgXCIucXR5LXVwXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGxldCBpbnB1dCA9ICQodGhpcykubmV4dCgpO1xyXG4gICAgICAvL2NoYW5nZSBwcmljZSB1c2luZyBhamF4XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHRhYmxlOiBcInByb2R1Y3RcIixcclxuICAgICAgICBpZDogJCh0aGlzKVxyXG4gICAgICAgICAgLnBhcmVudHMoXCIucXR5XCIpXHJcbiAgICAgICAgICAuZmluZChcImZvcm1cIilcclxuICAgICAgICAgIC5maW5kKFwiaW5wdXRbbmFtZT1pdGVtX2lkXVwiKVxyXG4gICAgICAgICAgLnZhbCgpLFxyXG4gICAgICAgIHVzZXI6IFwiZ3Vlc3RcIixcclxuICAgICAgICB1cmw6IFwiZm9ybXMvc2hvd0RldGFpbHNcIixcclxuICAgICAgICBkYXRhX3R5cGU6IFwidmFsdWVzXCIsXHJcbiAgICAgICAgcmV0dXJuX21vZGU6IFwiZGV0YWlsc1wiLFxyXG4gICAgICAgIHBhcmFtczogJCh0aGlzKSxcclxuICAgICAgfTtcclxuICAgICAgZGlzcGxheUFsbERldGFpbHMoZGF0YSwgZGlzcGxheV9wcm9kdWN0KTtcclxuICAgICAgZnVuY3Rpb24gZGlzcGxheV9wcm9kdWN0KHJlc3BvbnNlLCBlbHQpIHtcclxuICAgICAgICBpZiAoaW5wdXQudmFsKCkgPj0gMSAmJiBpbnB1dC52YWwoKSA8PSA5KSB7XHJcbiAgICAgICAgICBpbnB1dC52YWwoZnVuY3Rpb24gKGksIG9sZHZhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKytvbGR2YWw7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgLy8gMS0gSW5jcmVhc2UgcHJpY2Ugb2YgdGhlIHByb2R1Y3RcclxuICAgICAgICAgICAgbGV0IHF0eSA9IHBhcnNlSW50KGVsdC5uZXh0KCkudmFsKCkpO1xyXG4gICAgICAgICAgICBlbHRcclxuICAgICAgICAgICAgICAucGFyZW50cyhcIi5xdHlcIilcclxuICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAubmV4dCgpXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCIucHJvZHVjdF9wcmljZVwiKVxyXG4gICAgICAgICAgICAgIC5odG1sKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQoXHJcbiAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocmVzcG9uc2UubXNnLml0ZW1fcHJpY2UgKiBxdHkpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAyLSBTZXQgc3VidG90YWwgcHJpY2VcclxuICAgICAgICAgICAgcGhwUGx1Z2luLnN1YlRvdGFsXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCIjZGVhbC1wcmljZVwiKVxyXG4gICAgICAgICAgICAgIC5odG1sKGZ1bmN0aW9uIChpLCBkZWFsX3ByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVnID0gL1xccy9nOyAvLyAvW15cXGRdKy9nO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LmZvcm1hdChcclxuICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChyZXNwb25zZS5tc2cuaXRlbV9wcmljZSkgK1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWFsX3ByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIiZuYnNwO+KCrFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IC8vY2xvc2luZyBBamF4IGNhbGxcclxuICAgIH0pO1xyXG5cclxuICAgIHBocFBsdWdpbi5jYXJ0X2l0ZW1zLm9uKFwiY2xpY2tcIiwgXCIucXR5LWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBsZXQgaW5wdXQgPSAkKHRoaXMpLnByZXYoKTtcclxuICAgICAgLy9jaGFuZ2UgcHJpY2UgdXNpbmcgYWpheFxyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB0YWJsZTogXCJwcm9kdWN0XCIsXHJcbiAgICAgICAgaWQ6ICQodGhpcylcclxuICAgICAgICAgIC5wYXJlbnRzKFwiLnF0eVwiKVxyXG4gICAgICAgICAgLmZpbmQoXCJmb3JtXCIpXHJcbiAgICAgICAgICAuZmluZChcImlucHV0W25hbWU9aXRlbV9pZF1cIilcclxuICAgICAgICAgIC52YWwoKSxcclxuICAgICAgICB1c2VyOiBcImd1ZXN0XCIsXHJcbiAgICAgICAgdXJsOiBcImZvcm1zL3Nob3dEZXRhaWxzXCIsXHJcbiAgICAgICAgZGF0YV90eXBlOiBcInZhbHVlc1wiLFxyXG4gICAgICAgIHJldHVybl9tb2RlOiBcImRldGFpbHNcIixcclxuICAgICAgICBwYXJhbXM6ICQodGhpcyksXHJcbiAgICAgIH07XHJcbiAgICAgIGRpc3BsYXlBbGxEZXRhaWxzKGRhdGEsIGRpc3BsYXlfcHJvZHVjdCk7XHJcbiAgICAgIGZ1bmN0aW9uIGRpc3BsYXlfcHJvZHVjdChyZXNwb25zZSwgZWx0KSB7XHJcbiAgICAgICAgaWYgKGlucHV0LnZhbCgpID4gMSAmJiBpbnB1dC52YWwoKSA8PSAxMCkge1xyXG4gICAgICAgICAgaW5wdXQudmFsKGZ1bmN0aW9uIChpLCBvbGR2YWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0tb2xkdmFsO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIC8vIDEtIEluY3JlYXNlIHByaWNlIG9mIHRoZSBwcm9kdWN0XHJcbiAgICAgICAgICAgIGxldCBxdHkgPSBwYXJzZUludChlbHQucHJldigpLnZhbCgpKTtcclxuICAgICAgICAgICAgZWx0XHJcbiAgICAgICAgICAgICAgLnBhcmVudHMoXCIucXR5XCIpXHJcbiAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgLm5leHQoKVxyXG4gICAgICAgICAgICAgIC5maW5kKFwiLnByb2R1Y3RfcHJpY2VcIilcclxuICAgICAgICAgICAgICAuaHRtbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuZm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHJlc3BvbnNlLm1zZy5pdGVtX3ByaWNlICogcXR5KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gMi0gU2V0IHN1YnRvdGFsIHByaWNlXHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5zdWJUb3RhbFxyXG4gICAgICAgICAgICAgIC5maW5kKFwiI2RlYWwtcHJpY2VcIilcclxuICAgICAgICAgICAgICAuaHRtbChmdW5jdGlvbiAoaSwgZGVhbF9wcmljZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlZyA9IC9cXHMvZzsgLy8gL1teXFxkXSsvZztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5mb3JtYXQoXHJcbiAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgZGVhbF9wcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJm5ic3A74oKsXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICkgLSBwYXJzZUZsb2F0KHJlc3BvbnNlLm1zZy5pdGVtX3ByaWNlKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gLy9jbG9zaW5nXHJcbiAgICB9KTtcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vRGVsZXRlIGNhcnRcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHBocFBsdWdpbi53cmFwcGVyLm9uKFwiY2xpY2tcIiwgXCIjY2FydF9pdGVtcyAuZGVsZXRlQnRuXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgJCh0aGlzKS5odG1sKFwiUGxlYXNlIHdhaXQuLi5cIik7XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHVybDogXCJndWVzdHMvZGVsZXRlXCIsXHJcbiAgICAgICAgaWQ6ICQodGhpcykuYXR0cihcImlkXCIpLFxyXG4gICAgICAgIHRhYmxlOiBcImNhcnRcIixcclxuICAgICAgICBtZXRob2Q6IFwiZGVsZXRlX2NhcnRcIixcclxuICAgICAgICBmcm06ICQodGhpcykucGFyZW50KCksXHJcbiAgICAgICAgcGFyYW1zOiAkKHRoaXMpLFxyXG4gICAgICB9O1xyXG4gICAgICBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgbWFuYWdlUmVzcG9uc2UpO1xyXG4gICAgICBmdW5jdGlvbiBtYW5hZ2VSZXNwb25zZShyZXNwb25zZSwgZWx0KSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgcmVmcmVzaF9kZWFsX3ByaWNlKGVsdCk7XHJcbiAgICAgICAgICBlbHQucGFyZW50cyhcIi5yb3dcIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICAgIHBocFBsdWdpbi5jb3VudF9pdGVtcy5odG1sKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHBocFBsdWdpbi5jb3VudF9pdGVtcy5odG1sKCkpIC0gMTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcGhwUGx1Z2luLmNhcnQuZmluZChcIi5jYXJ0X25iX2VsdFwiKS5odG1sKGZ1bmN0aW9uIChpLCBuYl9pdGVtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmJfaXRlbXMgLSAxO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBwaHBQbHVnaW4ubmV3UGhvbmVcclxuICAgICAgICAgICAgLmZpbmQoXHJcbiAgICAgICAgICAgICAgXCIuYWRkX3RvX2NhcnRfZnJtIGlucHV0W3ZhbHVlPSdcIiArXHJcbiAgICAgICAgICAgICAgICBlbHQucGFyZW50KCkuY2hpbGRyZW4oXCI6Zmlyc3RcIikudmFsKCkgK1xyXG4gICAgICAgICAgICAgICAgXCInXVwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgIC5maW5kKFwiYnV0dG9uW3R5cGU9c3VibWl0XVwiKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4tc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJidG4td2FybmluZ1wiKVxyXG4gICAgICAgICAgICAuaHRtbChcIkFkZCB0byBDYXJ0XCIpO1xyXG4gICAgICAgICAgaWYgKHBocFBsdWdpbi5jYXJ0X2l0ZW1zLmNoaWxkcmVuKCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcGhwUGx1Z2luLmNhcnRfaXRlbXMuaHRtbChyZXNwb25zZS5tc2cgIT0gMSA/IHJlc3BvbnNlLm1zZyA6IFwiXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL1NhdmUgZm9yIGxhdGVyXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwaHBQbHVnaW4ud3JhcHBlci5vbihcclxuICAgICAgXCJjbGlja1wiLFxyXG4gICAgICBcIiNjYXJ0X2l0ZW1zIC5xdHkgYnV0dG9uW3R5cGU9YnV0dG9uXVwiLFxyXG4gICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgdXJsOiBcImd1ZXN0cy90b2dnbGVXaXNobGlzdEFuZGNDYXJ0XCIsXHJcbiAgICAgICAgICBmcm06ICQodGhpcykucHJldigpLFxyXG4gICAgICAgICAgZnJtX25hbWU6XHJcbiAgICAgICAgICAgIFwiZGVsZXRlLWNhcnQtaXRlbS1mcm1cIiArXHJcbiAgICAgICAgICAgICQodGhpcykucHJldigpLmZpbmQoXCJpbnB1dFt0eXBlPWhpZGRlbl1cIikudmFsKCksXHJcbiAgICAgICAgICB0YWJsZTogXCJ3aXNobGlzdFwiLFxyXG4gICAgICAgICAgcGFyYW1zOiAkKHRoaXMpLFxyXG4gICAgICAgICAgbWV0aG9kOiBcInNhdmVfRm9yX0xhdGVyXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgbWFuYWdlUmVzcG9uc2UpO1xyXG4gICAgICAgIGZ1bmN0aW9uIG1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCBlbHQpIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBwaHBQbHVnaW4ud2lzaGxpc3RfaXRlbXMuYXBwZW5kKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UubXNnWzBdWzBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcGhwUGx1Z2luLmNhcnQuZmluZChcIi5wcm9kdWN0X3ByaWNlXCIpLmh0bWwoZnVuY3Rpb24gKGksIHBfcHJpY2UpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuZm9ybWF0KHBhcnNlRmxvYXQocF9wcmljZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHBocFBsdWdpbi53aXNobGlzdC5pcyhcIjpoaWRkZW5cIikpIHtcclxuICAgICAgICAgICAgICBwaHBQbHVnaW4ud2lzaGxpc3Quc2hvdygpLmZhZGVJbigpLmRlbGF5KDUwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVmcmVzaF9kZWFsX3ByaWNlKGVsdCk7XHJcbiAgICAgICAgICAgIGVsdC5wYXJlbnRzKFwiLnJvd1wiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBwaHBQbHVnaW4uY291bnRfaXRlbXMuaHRtbChmdW5jdGlvbiAoaSwgbmJfaXRlbSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChuYl9pdGVtIC0gMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwaHBQbHVnaW4uY2FydC5maW5kKFwiLmNhcnRfbmJfZWx0XCIpLmh0bWwoZnVuY3Rpb24gKGksIG5iX2l0ZW0pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQobmJfaXRlbSAtIDEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcGhwUGx1Z2luLm5ld1Bob25lXHJcbiAgICAgICAgICAgICAgLmZpbmQoXHJcbiAgICAgICAgICAgICAgICBcIi5hZGRfdG9fY2FydF9mcm0gaW5wdXRbdmFsdWU9J1wiICtcclxuICAgICAgICAgICAgICAgICAgZWx0LnByZXYoKS5jaGlsZHJlbihcIjpmaXJzdFwiKS52YWwoKSArXHJcbiAgICAgICAgICAgICAgICAgIFwiJ11cIlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAuZmluZChcImJ1dHRvblt0eXBlPXN1Ym1pdF1cIilcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4tc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhcImJ0bi13YXJuaW5nXCIpXHJcbiAgICAgICAgICAgICAgLmh0bWwoXCJBZGQgdG8gQ2FydFwiKTtcclxuICAgICAgICAgICAgaWYgKHBocFBsdWdpbi5jYXJ0X2l0ZW1zLmNoaWxkcmVuKCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICBwaHBQbHVnaW4uY2FydF9pdGVtcy5odG1sKFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UubXNnWzFdICE9IDEgPyByZXNwb25zZS5tc2dbMV0gOiBcIlwiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGZ1bmN0aW9uIHJlZnJlc2hfZGVhbF9wcmljZShlbHQpIHtcclxuICAgICAgZWx0XHJcbiAgICAgICAgLnBhcmVudHMoXCIjY2FydF9pdGVtc1wiKVxyXG4gICAgICAgIC5uZXh0KClcclxuICAgICAgICAuZmluZChcIiNkZWFsLXByaWNlXCIpXHJcbiAgICAgICAgLmh0bWwoZnVuY3Rpb24gKGksIGRfcHJpY2UpIHtcclxuICAgICAgICAgIGxldCByZWcgPSAvXFxzL2c7XHJcbiAgICAgICAgICBsZXQgcF9wcmljZSA9IGVsdFxyXG4gICAgICAgICAgICAucGFyZW50cyhcIi5yb3dcIilcclxuICAgICAgICAgICAgLmZpcnN0KClcclxuICAgICAgICAgICAgLmxhc3QoKVxyXG4gICAgICAgICAgICAuZmluZChcIi5wcm9kdWN0X3ByaWNlXCIpXHJcbiAgICAgICAgICAgIC5odG1sKCk7XHJcbiAgICAgICAgICByZXR1cm4gY3VycmVuY3kuZm9ybWF0KFxyXG4gICAgICAgICAgICBwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgIGRfcHJpY2VcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZShcIiZuYnNwO+KCrFwiLCBcIlwiKVxyXG4gICAgICAgICAgICApIC1cclxuICAgICAgICAgICAgICBwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgcF9wcmljZVxyXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZShyZWcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCImbmJzcDvigqxcIiwgXCJcIilcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9EZWxldGUgd2hpc2hsaXN0IGl0ZW1zXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwaHBQbHVnaW4ud3JhcHBlci5vbihcImNsaWNrXCIsIFwiI3dpc2hsaXN0LWl0ZW1zIC5kZWxldGVCdG5cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAkKHRoaXMpLmh0bWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgdXJsOiBcImd1ZXN0cy9kZWxldGVcIixcclxuICAgICAgICBpZDogJCh0aGlzKS5hdHRyKFwiaWRcIiksXHJcbiAgICAgICAgdGFibGU6IFwid2lzaGxpc3RcIixcclxuICAgICAgICBtZXRob2Q6IFwiZGVsZXRlX2NhcnRcIixcclxuICAgICAgICBmcm06ICQodGhpcykucGFyZW50KCksXHJcbiAgICAgICAgcGFyYW1zOiAkKHRoaXMpLFxyXG4gICAgICB9O1xyXG4gICAgICBDYWxsX2NvbnRyb2xsZXIoZGF0YSwgbWFuYWdlUmVzcG9uc2UpO1xyXG4gICAgICBmdW5jdGlvbiBtYW5hZ2VSZXNwb25zZShyZXNwb25zZSwgZWx0KSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgZWx0LnBhcmVudHMoXCIucm93XCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICBpZiAocGhwUGx1Z2luLndpc2hsaXN0X2l0ZW1zLmNoaWxkcmVuKCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcGhwUGx1Z2luLndpc2hsaXN0LmhpZGUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHBocFBsdWdpbi5uZXdQaG9uZVxyXG4gICAgICAgICAgICAuZmluZChcclxuICAgICAgICAgICAgICBcIi5hZGRfdG9fY2FydF9mcm0gaW5wdXRbdmFsdWU9J1wiICtcclxuICAgICAgICAgICAgICAgIGVsdC5wYXJlbnQoKS5jaGlsZHJlbihcIjpmaXJzdFwiKS52YWwoKSArXHJcbiAgICAgICAgICAgICAgICBcIiddXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgLmZpbmQoXCJidXR0b25bdHlwZT1zdWJtaXRdXCIpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcImJ0bi13YXJuaW5nXCIpXHJcbiAgICAgICAgICAgIC5odG1sKFwiQWRkIHRvIENhcnRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vQWRkIHRvIGNhcnQgZnJvbSB3aGlzaGxpc3RcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHBocFBsdWdpbi53cmFwcGVyLm9uKFxyXG4gICAgICBcImNsaWNrXCIsXHJcbiAgICAgIFwiI3dpc2hsaXN0LWl0ZW1zIC5xdHkgYnV0dG9uW3R5cGU9YnV0dG9uXVwiLFxyXG4gICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgdXJsOiBcImd1ZXN0cy90b2dnbGVXaXNobGlzdEFuZGNDYXJ0XCIsXHJcbiAgICAgICAgICBmcm06ICQodGhpcykucHJldigpLFxyXG4gICAgICAgICAgZnJtX25hbWU6XHJcbiAgICAgICAgICAgIFwiZGVsZXRlLWNhcnQtaXRlbS1mcm1cIiArXHJcbiAgICAgICAgICAgICQodGhpcykucHJldigpLmZpbmQoXCJpbnB1dFt0eXBlPWhpZGRlbl1cIikudmFsKCksXHJcbiAgICAgICAgICB0YWJsZTogXCJjYXJ0XCIsXHJcbiAgICAgICAgICBwYXJhbXM6ICQodGhpcyksXHJcbiAgICAgICAgICBtZXRob2Q6IFwiYWRkX1RvX0NhcnRcIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIENhbGxfY29udHJvbGxlcihkYXRhLCBtYW5hZ2VSZXNwb25zZSk7XHJcbiAgICAgICAgZnVuY3Rpb24gbWFuYWdlUmVzcG9uc2UocmVzcG9uc2UsIGVsdCkge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICAvL2NoZWNrIGlmIGNhcnQgaXMgZW1wdHlcclxuICAgICAgICAgICAgaWYgKHBocFBsdWdpbi5jYXJ0X2l0ZW1zLmZpbmQoXCIjZW1wdHktY2FydFwiKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgIHBocFBsdWdpbi5jYXJ0X2l0ZW1zLmZpbmQoXCIjZW1wdHktY2FydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2FwcGVuZCBjYXJ0XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5jYXJ0X2l0ZW1zLmFwcGVuZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLm1zZ1swXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGZvcm1hdCBwcm9kdWN0IHByaWNlXHJcbiAgICAgICAgICAgIHBocFBsdWdpbi53cmFwcGVyXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCIucHJvZHVjdF9wcmljZVwiKVxyXG4gICAgICAgICAgICAgIC5odG1sKGZ1bmN0aW9uIChpLCBwX3ByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuZm9ybWF0KHBhcnNlRmxvYXQocF9wcmljZSkpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL3JlZnJlc2ggZGVhbCBwcmljZVxyXG4gICAgICAgICAgICBwaHBQbHVnaW4ud3JhcHBlci5maW5kKFwiI2RlYWwtcHJpY2VcIikuaHRtbChmdW5jdGlvbiAoaSwgZF9wcmljZSkge1xyXG4gICAgICAgICAgICAgIGxldCByZWcgPSAvXFxzL2c7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LmZvcm1hdChcclxuICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgICAgIGRfcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShyZWcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCImbmJzcDvigqxcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICkgKyBwYXJzZUZsb2F0KHJlc3BvbnNlLm1zZ1sxXSlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9yZWZyZXNoIG5iIGl0ZW1zIGluIHRoZSBjYXJ0XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi5jb3VudF9pdGVtcy5odG1sKGZ1bmN0aW9uIChpLCBuYl9pdGVtKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG5iX2l0ZW0pICsgMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHBocFBsdWdpbi53cmFwcGVyLmZpbmQoXCIuY2FydF9uYl9lbHRcIikuaHRtbChmdW5jdGlvbiAoaSwgbmJfaXRlbSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChuYl9pdGVtKSArIDE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBlbHQucGFyZW50cyhcIi5yb3dcIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgaWYgKHBocFBsdWdpbi53aXNobGlzdF9pdGVtcy5jaGlsZHJlbigpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgcGhwUGx1Z2luLndpc2hsaXN0LmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwaHBQbHVnaW4ubmV3UGhvbmVcclxuICAgICAgICAgICAgICAuZmluZChcclxuICAgICAgICAgICAgICAgIFwiLmFkZF90b19jYXJ0X2ZybSBpbnB1dFt2YWx1ZT0nXCIgK1xyXG4gICAgICAgICAgICAgICAgICBlbHQucHJldigpLmNoaWxkcmVuKFwiOmZpcnN0XCIpLnZhbCgpICtcclxuICAgICAgICAgICAgICAgICAgXCInXVwiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgIC5maW5kKFwiYnV0dG9uW3R5cGU9c3VibWl0XVwiKVxyXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi13YXJuaW5nXCIpXHJcbiAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYnRuLXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICAuaHRtbChcIkFkZCB0byBDYXJ0XCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAkLmZuLnBocFBsdWdpbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICBuZXcgUGhwUGx1Z2luKHRoaXMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuICAkKFwiI2JvZHlcIikucGhwUGx1Z2luKCk7XHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2hhckF0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUnKS5jaGFyQXQ7XG5cbi8vIGBBZHZhbmNlU3RyaW5nSW5kZXhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFMsIGluZGV4LCB1bmljb2RlKSB7XG4gIHJldHVybiBpbmRleCArICh1bmljb2RlID8gY2hhckF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIG1vdmVkIHRvIGVudHJ5IHBvaW50c1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5yZWdleHAuZXhlYycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG52YXIgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyAjcmVwbGFjZSBuZWVkcyBidWlsdC1pbiBzdXBwb3J0IGZvciBuYW1lZCBncm91cHMuXG4gIC8vICNtYXRjaCB3b3JrcyBmaW5lIGJlY2F1c2UgaXQganVzdCByZXR1cm4gdGhlIGV4ZWMgcmVzdWx0cywgZXZlbiBpZiBpdCBoYXNcbiAgLy8gYSBcImdyb3BzXCIgcHJvcGVydHkuXG4gIHZhciByZSA9IC8uLztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0Lmdyb3VwcyA9IHsgYTogJzcnIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcmV0dXJuICcnLnJlcGxhY2UocmUsICckPGE+JykgIT09ICc3Jztcbn0pO1xuXG4vLyBJRSA8PSAxMSByZXBsYWNlcyAkMCB3aXRoIHRoZSB3aG9sZSBtYXRjaCwgYXMgaWYgaXQgd2FzICQmXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MDI0NjY2L2dldHRpbmctaWUtdG8tcmVwbGFjZS1hLXJlZ2V4LXdpdGgtdGhlLWxpdGVyYWwtc3RyaW5nLTBcbnZhciBSRVBMQUNFX0tFRVBTXyQwID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICdhJy5yZXBsYWNlKC8uLywgJyQwJykgPT09ICckMCc7XG59KSgpO1xuXG52YXIgUkVQTEFDRSA9IHdlbGxLbm93blN5bWJvbCgncmVwbGFjZScpO1xuLy8gU2FmYXJpIDw9IDEzLjAuMyg/KSBzdWJzdGl0dXRlcyBudGggY2FwdHVyZSB3aGVyZSBuPm0gd2l0aCBhbiBlbXB0eSBzdHJpbmdcbnZhciBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA9IChmdW5jdGlvbiAoKSB7XG4gIGlmICgvLi9bUkVQTEFDRV0pIHtcbiAgICByZXR1cm4gLy4vW1JFUExBQ0VdKCdhJywgJyQwJykgPT09ICcnO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn0pKCk7XG5cbi8vIENocm9tZSA1MSBoYXMgYSBidWdneSBcInNwbGl0XCIgaW1wbGVtZW50YXRpb24gd2hlbiBSZWdFeHAjZXhlYyAhPT0gbmF0aXZlRXhlY1xuLy8gV2VleCBKUyBoYXMgZnJvemVuIGJ1aWx0LWluIHByb3RvdHlwZXMsIHNvIHVzZSB0cnkgLyBjYXRjaCB3cmFwcGVyXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby1lbXB0eS1ncm91cCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICB2YXIgcmUgPSAvKD86KS87XG4gIHZhciBvcmlnaW5hbEV4ZWMgPSByZS5leGVjO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3JpZ2luYWxFeGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIHZhciByZXN1bHQgPSAnYWInLnNwbGl0KHJlKTtcbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggIT09IDIgfHwgcmVzdWx0WzBdICE9PSAnYScgfHwgcmVzdWx0WzFdICE9PSAnYic7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMsIHNoYW0pIHtcbiAgdmFyIFNZTUJPTCA9IHdlbGxLbm93blN5bWJvbChLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuXG4gICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgLy8gV2UgY2FuJ3QgdXNlIHJlYWwgcmVnZXggaGVyZSBzaW5jZSBpdCBjYXVzZXMgZGVvcHRpbWl6YXRpb25cbiAgICAgIC8vIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uIGluIFY4XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzA2XG4gICAgICByZSA9IHt9O1xuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgICAgcmUuZmxhZ3MgPSAnJztcbiAgICAgIHJlW1NZTUJPTF0gPSAvLi9bU1lNQk9MXTtcbiAgICB9XG5cbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyBleGVjQ2FsbGVkID0gdHJ1ZTsgcmV0dXJuIG51bGw7IH07XG5cbiAgICByZVtTWU1CT0xdKCcnKTtcbiAgICByZXR1cm4gIWV4ZWNDYWxsZWQ7XG4gIH0pO1xuXG4gIGlmIChcbiAgICAhREVMRUdBVEVTX1RPX1NZTUJPTCB8fFxuICAgICFERUxFR0FURVNfVE9fRVhFQyB8fFxuICAgIChLRVkgPT09ICdyZXBsYWNlJyAmJiAhKFxuICAgICAgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgJiZcbiAgICAgIFJFUExBQ0VfS0VFUFNfJDAgJiZcbiAgICAgICFSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRVxuICAgICkpIHx8XG4gICAgKEtFWSA9PT0gJ3NwbGl0JyAmJiAhU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDKVxuICApIHtcbiAgICB2YXIgbmF0aXZlUmVnRXhwTWV0aG9kID0gLy4vW1NZTUJPTF07XG4gICAgdmFyIG1ldGhvZHMgPSBleGVjKFNZTUJPTCwgJydbS0VZXSwgZnVuY3Rpb24gKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICBpZiAocmVnZXhwLmV4ZWMgPT09IHJlZ2V4cEV4ZWMpIHtcbiAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgLy8gcG9seWZpbGxlZCBmdW5jdGlvbiksIGxlYXNpbmcgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZVJlZ0V4cE1ldGhvZC5jYWxsKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVNZXRob2QuY2FsbChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlIH07XG4gICAgfSwge1xuICAgICAgUkVQTEFDRV9LRUVQU18kMDogUkVQTEFDRV9LRUVQU18kMCxcbiAgICAgIFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFOiBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRVxuICAgIH0pO1xuICAgIHZhciBzdHJpbmdNZXRob2QgPSBtZXRob2RzWzBdO1xuICAgIHZhciByZWdleE1ldGhvZCA9IG1ldGhvZHNbMV07XG5cbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmluZ01ldGhvZCk7XG4gICAgcmVkZWZpbmUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByZWdleE1ldGhvZC5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJlZ2V4TWV0aG9kLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cblxuICBpZiAoc2hhbSkgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KFJlZ0V4cC5wcm90b3R5cGVbU1lNQk9MXSwgJ3NoYW0nLCB0cnVlKTtcbn07XG4iLCJ2YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgcmVwbGFjZSA9ICcnLnJlcGxhY2U7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFMgPSAvXFwkKFskJidgXXxcXGR7MSwyfXw8W14+XSo+KS9nO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEID0gL1xcJChbJCYnYF18XFxkezEsMn0pL2c7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0c3Vic3RpdHV0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtYXRjaGVkLCBzdHIsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZW1lbnQpIHtcbiAgdmFyIHRhaWxQb3MgPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICB2YXIgbSA9IGNhcHR1cmVzLmxlbmd0aDtcbiAgdmFyIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRDtcbiAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIG5hbWVkQ2FwdHVyZXMgPSB0b09iamVjdChuYW1lZENhcHR1cmVzKTtcbiAgICBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFM7XG4gIH1cbiAgcmV0dXJuIHJlcGxhY2UuY2FsbChyZXBsYWNlbWVudCwgc3ltYm9scywgZnVuY3Rpb24gKG1hdGNoLCBjaCkge1xuICAgIHZhciBjYXB0dXJlO1xuICAgIHN3aXRjaCAoY2guY2hhckF0KDApKSB7XG4gICAgICBjYXNlICckJzogcmV0dXJuICckJztcbiAgICAgIGNhc2UgJyYnOiByZXR1cm4gbWF0Y2hlZDtcbiAgICAgIGNhc2UgJ2AnOiByZXR1cm4gc3RyLnNsaWNlKDAsIHBvc2l0aW9uKTtcbiAgICAgIGNhc2UgXCInXCI6IHJldHVybiBzdHIuc2xpY2UodGFpbFBvcyk7XG4gICAgICBjYXNlICc8JzpcbiAgICAgICAgY2FwdHVyZSA9IG5hbWVkQ2FwdHVyZXNbY2guc2xpY2UoMSwgLTEpXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OiAvLyBcXGRcXGQ/XG4gICAgICAgIHZhciBuID0gK2NoO1xuICAgICAgICBpZiAobiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICBpZiAobiA+IG0pIHtcbiAgICAgICAgICB2YXIgZiA9IGZsb29yKG4gLyAxMCk7XG4gICAgICAgICAgaWYgKGYgPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICBpZiAoZiA8PSBtKSByZXR1cm4gY2FwdHVyZXNbZiAtIDFdID09PSB1bmRlZmluZWQgPyBjaC5jaGFyQXQoMSkgOiBjYXB0dXJlc1tmIC0gMV0gKyBjaC5jaGFyQXQoMSk7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG4gICAgICAgIGNhcHR1cmUgPSBjYXB0dXJlc1tuIC0gMV07XG4gICAgfVxuICAgIHJldHVybiBjYXB0dXJlID09PSB1bmRlZmluZWQgPyAnJyA6IGNhcHR1cmU7XG4gIH0pO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9jbGFzc29mLXJhdycpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL3JlZ2V4cC1leGVjJyk7XG5cbi8vIGBSZWdFeHBFeGVjYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwZXhlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUiwgUykge1xuICB2YXIgZXhlYyA9IFIuZXhlYztcbiAgaWYgKHR5cGVvZiBleGVjID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHJlc3VsdCA9IGV4ZWMuY2FsbChSLCBTKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpZiAoY2xhc3NvZihSKSAhPT0gJ1JlZ0V4cCcpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCNleGVjIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXInKTtcbiAgfVxuXG4gIHJldHVybiByZWdleHBFeGVjLmNhbGwoUiwgUyk7XG59O1xuXG4iLCIndXNlIHN0cmljdCc7XG52YXIgcmVnZXhwRmxhZ3MgPSByZXF1aXJlKCcuL3JlZ2V4cC1mbGFncycpO1xudmFyIHN0aWNreUhlbHBlcnMgPSByZXF1aXJlKCcuL3JlZ2V4cC1zdGlja3ktaGVscGVycycpO1xuXG52YXIgbmF0aXZlRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbi8vIFRoaXMgYWx3YXlzIHJlZmVycyB0byB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLCBiZWNhdXNlIHRoZVxuLy8gU3RyaW5nI3JlcGxhY2UgcG9seWZpbGwgdXNlcyAuL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMsXG4vLyB3aGljaCBsb2FkcyB0aGlzIGZpbGUgYmVmb3JlIHBhdGNoaW5nIHRoZSBtZXRob2QuXG52YXIgbmF0aXZlUmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcblxudmFyIHBhdGNoZWRFeGVjID0gbmF0aXZlRXhlYztcblxudmFyIFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciByZTEgPSAvYS87XG4gIHZhciByZTIgPSAvYiovZztcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMSwgJ2EnKTtcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMiwgJ2EnKTtcbiAgcmV0dXJuIHJlMS5sYXN0SW5kZXggIT09IDAgfHwgcmUyLmxhc3RJbmRleCAhPT0gMDtcbn0pKCk7XG5cbnZhciBVTlNVUFBPUlRFRF9ZID0gc3RpY2t5SGVscGVycy5VTlNVUFBPUlRFRF9ZIHx8IHN0aWNreUhlbHBlcnMuQlJPS0VOX0NBUkVUO1xuXG4vLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cCwgY29waWVkIGZyb20gZXM1LXNoaW0ncyBTdHJpbmcjc3BsaXQgcGF0Y2guXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVnZXhwL25vLWFzc2VydGlvbi1jYXB0dXJpbmctZ3JvdXAsIHJlZ2V4cC9uby1lbXB0eS1ncm91cCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQgfHwgVU5TVVBQT1JURURfWTtcblxuaWYgKFBBVENIKSB7XG4gIHBhdGNoZWRFeGVjID0gZnVuY3Rpb24gZXhlYyhzdHIpIHtcbiAgICB2YXIgcmUgPSB0aGlzO1xuICAgIHZhciBsYXN0SW5kZXgsIHJlQ29weSwgbWF0Y2gsIGk7XG4gICAgdmFyIHN0aWNreSA9IFVOU1VQUE9SVEVEX1kgJiYgcmUuc3RpY2t5O1xuICAgIHZhciBmbGFncyA9IHJlZ2V4cEZsYWdzLmNhbGwocmUpO1xuICAgIHZhciBzb3VyY2UgPSByZS5zb3VyY2U7XG4gICAgdmFyIGNoYXJzQWRkZWQgPSAwO1xuICAgIHZhciBzdHJDb3B5ID0gc3RyO1xuXG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgZmxhZ3MgPSBmbGFncy5yZXBsYWNlKCd5JywgJycpO1xuICAgICAgaWYgKGZsYWdzLmluZGV4T2YoJ2cnKSA9PT0gLTEpIHtcbiAgICAgICAgZmxhZ3MgKz0gJ2cnO1xuICAgICAgfVxuXG4gICAgICBzdHJDb3B5ID0gU3RyaW5nKHN0cikuc2xpY2UocmUubGFzdEluZGV4KTtcbiAgICAgIC8vIFN1cHBvcnQgYW5jaG9yZWQgc3RpY2t5IGJlaGF2aW9yLlxuICAgICAgaWYgKHJlLmxhc3RJbmRleCA+IDAgJiYgKCFyZS5tdWx0aWxpbmUgfHwgcmUubXVsdGlsaW5lICYmIHN0cltyZS5sYXN0SW5kZXggLSAxXSAhPT0gJ1xcbicpKSB7XG4gICAgICAgIHNvdXJjZSA9ICcoPzogJyArIHNvdXJjZSArICcpJztcbiAgICAgICAgc3RyQ29weSA9ICcgJyArIHN0ckNvcHk7XG4gICAgICAgIGNoYXJzQWRkZWQrKztcbiAgICAgIH1cbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBzdHIgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14oPzonICsgc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgfVxuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlLmxhc3RJbmRleDtcblxuICAgIG1hdGNoID0gbmF0aXZlRXhlYy5jYWxsKHN0aWNreSA/IHJlQ29weSA6IHJlLCBzdHJDb3B5KTtcblxuICAgIGlmIChzdGlja3kpIHtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBtYXRjaC5pbnB1dCA9IG1hdGNoLmlucHV0LnNsaWNlKGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaC5pbmRleCA9IHJlLmxhc3RJbmRleDtcbiAgICAgICAgcmUubGFzdEluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgIH0gZWxzZSByZS5sYXN0SW5kZXggPSAwO1xuICAgIH0gZWxzZSBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZS5sYXN0SW5kZXggPSByZS5nbG9iYWwgPyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCA6IGxhc3RJbmRleDtcbiAgICB9XG4gICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAgIC8vIGZvciBOUENHLCBsaWtlIElFOC4gTk9URTogVGhpcyBkb2Vzbicgd29yayBmb3IgLyguPyk/L1xuICAgICAgbmF0aXZlUmVwbGFjZS5jYWxsKG1hdGNoWzBdLCByZUNvcHksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hlZEV4ZWM7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLmZsYWdzYCBnZXR0ZXIgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0LXJlZ2V4cC5wcm90b3R5cGUuZmxhZ3Ncbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICBpZiAodGhhdC5kb3RBbGwpIHJlc3VsdCArPSAncyc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vZmFpbHMnKTtcblxuLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCdhJywgJ3knKSAtPiAvYS95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3IsXG4vLyBzbyB3ZSB1c2UgYW4gaW50ZXJtZWRpYXRlIGZ1bmN0aW9uLlxuZnVuY3Rpb24gUkUocywgZikge1xuICByZXR1cm4gUmVnRXhwKHMsIGYpO1xufVxuXG5leHBvcnRzLlVOU1VQUE9SVEVEX1kgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgnYScsICd5JykgLT4gL2EveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG4gIHZhciByZSA9IFJFKCdhJywgJ3knKTtcbiAgcmUubGFzdEluZGV4ID0gMjtcbiAgcmV0dXJuIHJlLmV4ZWMoJ2FiY2QnKSAhPSBudWxsO1xufSk7XG5cbmV4cG9ydHMuQlJPS0VOX0NBUkVUID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03NzM2ODdcbiAgdmFyIHJlID0gUkUoJ15yJywgJ2d5Jyk7XG4gIHJlLmxhc3RJbmRleCA9IDI7XG4gIHJldHVybiByZS5leGVjKCdzdHInKSAhPSBudWxsO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBleGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLmV4ZWNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLmV4ZWNcbiQoeyB0YXJnZXQ6ICdSZWdFeHAnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAvLi8uZXhlYyAhPT0gZXhlYyB9LCB7XG4gIGV4ZWM6IGV4ZWNcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgZ2V0U3Vic3RpdHV0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1zdWJzdGl0dXRpb24nKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxudmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xuXG4vLyBAQHJlcGxhY2UgbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKFJFUExBQ0UsIG5hdGl2ZVJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSwgcmVhc29uKSB7XG4gIHZhciBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA9IHJlYXNvbi5SRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRTtcbiAgdmFyIFJFUExBQ0VfS0VFUFNfJDAgPSByZWFzb24uUkVQTEFDRV9LRUVQU18kMDtcbiAgdmFyIFVOU0FGRV9TVUJTVElUVVRFID0gUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgPyAnJCcgOiAnJDAnO1xuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUucmVwbGFjZWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGxhY2VcbiAgICBmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciByZXBsYWNlciA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgICAgcmV0dXJuIHJlcGxhY2VyICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyByZXBsYWNlci5jYWxsKHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG4gICAgICAgIDogbmF0aXZlUmVwbGFjZS5jYWxsKFN0cmluZyhPKSwgc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEByZXBsYWNlXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICBpZiAoXG4gICAgICAgICghUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgJiYgUkVQTEFDRV9LRUVQU18kMCkgfHxcbiAgICAgICAgKHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdzdHJpbmcnICYmIHJlcGxhY2VWYWx1ZS5pbmRleE9mKFVOU0FGRV9TVUJTVElUVVRFKSA9PT0gLTEpXG4gICAgICApIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVSZXBsYWNlLCByZWdleHAsIHRoaXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuXG4gICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSB0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgaWYgKCFmdW5jdGlvbmFsUmVwbGFjZSkgcmVwbGFjZVZhbHVlID0gU3RyaW5nKHJlcGxhY2VWYWx1ZSk7XG5cbiAgICAgIHZhciBnbG9iYWwgPSByeC5nbG9iYWw7XG4gICAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBicmVhaztcblxuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgaWYgKCFnbG9iYWwpIGJyZWFrO1xuXG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWNjdW11bGF0ZWRSZXN1bHQgPSAnJztcbiAgICAgIHZhciBuZXh0U291cmNlUG9zaXRpb24gPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbaV07XG5cbiAgICAgICAgdmFyIG1hdGNoZWQgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4KG1pbih0b0ludGVnZXIocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgdmFyIGNhcHR1cmVzID0gW107XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAvLyBidXQgZm9yIHNvbWUgcmVhc29uIGBuYXRpdmVTbGljZS5jYWxsKHJlc3VsdCwgMSwgcmVzdWx0Lmxlbmd0aClgIChjYWxsZWQgaW5cbiAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykgY2FwdHVyZXMucHVzaChtYXliZVRvU3RyaW5nKHJlc3VsdFtqXSkpO1xuICAgICAgICB2YXIgbmFtZWRDYXB0dXJlcyA9IHJlc3VsdC5ncm91cHM7XG4gICAgICAgIGlmIChmdW5jdGlvbmFsUmVwbGFjZSkge1xuICAgICAgICAgIHZhciByZXBsYWNlckFyZ3MgPSBbbWF0Y2hlZF0uY29uY2F0KGNhcHR1cmVzLCBwb3NpdGlvbiwgUyk7XG4gICAgICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkgcmVwbGFjZXJBcmdzLnB1c2gobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VWYWx1ZS5hcHBseSh1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIFMsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPj0gbmV4dFNvdXJjZVBvc2l0aW9uKSB7XG4gICAgICAgICAgYWNjdW11bGF0ZWRSZXN1bHQgKz0gUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24sIHBvc2l0aW9uKSArIHJlcGxhY2VtZW50O1xuICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1bXVsYXRlZFJlc3VsdCArIFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICB9XG4gIF07XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=