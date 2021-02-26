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
return (self["webpackChunkkngell"] = self["webpackChunkkngell"] || []).push([["js/custom/admin/products/categories"],{

/***/ "./src/assets/js/custom/admin/products/categories.js":
/*!***********************************************************!*\
  !*** ./src/assets/js/custom/admin/products/categories.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! corejs/form_crud */ "./src/assets/js/core/form_crud.js");
/* harmony import */ var corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! corejs/inputErrManager */ "./src/assets/js/core/inputErrManager.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");






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
    this.wrapper = this.element.find(".card");
    this.Pluginfrm = this.element.find("#Categorie-frm");
    this.PluginModal = this.element.find("#modal-box");
  };

  PhpPlugin.prototype.setupEvents = function () {
    var phpPlugin = this; //=======================================================================
    //Display All Plugins
    //=======================================================================

    displayAll();

    function displayAll() {
      var data = {
        url: "forms/showAll",
        table: "categories",
        user: "admin",
        datatable: true,
        displayid: phpPlugin.wrapper.find("#showAll"),
        data_type: "values"
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.displayAllItems)(data);
    } //=======================================================================
    //clean form
    //=======================================================================
    //remove invalid input on input focus


    (0,corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.removeInvalidInput)(phpPlugin.Pluginfrm); //clean form on hide

    phpPlugin.PluginModal.on("hide.bs.modal", function () {
      if (phpPlugin.Pluginfrm.find(".is-invalid").length != 0) {
        (0,corejs_inputErrManager__WEBPACK_IMPORTED_MODULE_4__.reset_invalid_input)(phpPlugin.Pluginfrm);
      }

      phpPlugin.Pluginfrm.trigger("reset");
      phpPlugin.Pluginfrm.find("#parentID").empty();
    }); //set create/add function

    phpPlugin.wrapper.find("#addNew").on("click", function () {
      phpPlugin.Pluginfrm.find("#operation").val("add");
      var data = {
        displayID: phpPlugin.Pluginfrm.find("#parentID"),
        alertID: phpPlugin.Pluginfrm.find("#alertErr"),
        table: "categories"
      };
      var root = "<option Desabled selected class='desabled' value = '0'>Categorie Parent</option>";
      phpPlugin.Pluginfrm.find("#parentID").append(root);
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.displayMultisellect)(data);
    }); // =======================================================================
    // Add or Update Plugin
    // =======================================================================

    phpPlugin.Pluginfrm.on("submit", function (e) {
      e.preventDefault();
      e.stopPropagation();
      phpPlugin.Pluginfrm.find("#PluginBtn").val("Please wait...");
      var data = {
        url: phpPlugin.Pluginfrm.find("#operation").val() === "add" ? "forms/Add" : "forms/update",
        frm: phpPlugin.Pluginfrm,
        frm_name: "Categorie-frm",
        table: "categories",
        notification: "admin"
      };

      switch (phpPlugin.Pluginfrm.find("#operation").val()) {
        case "add":
          (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Add)(data, Response);
          break;

        case "update":
          (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Call_controller)(data, Response);
          break;
      }

      function Response(response) {
        phpPlugin.Pluginfrm.find("#PluginBtn").val("Valider");
        var rdata = {
          frm: phpPlugin.Pluginfrm,
          swal: (sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default()),
          modalbox: phpPlugin.PluginModal,
          alertid: phpPlugin.Pluginfrm.find("#alertErr"),
          display: displayAll
        };
        (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.ManageResponse)(response, rdata);
      }
    }); //=======================================================================
    //Edit Plugin
    //=======================================================================

    phpPlugin.wrapper.on("click", ".editBtn", function (e) {
      e.preventDefault();
      phpPlugin.Pluginfrm.find("#operation").val("update");
      var data = {
        url: "forms/edit",
        formData: phpPlugin.PluginModal.find("#Categorie-frm input[type=hidden]").serialize() + "&" + $.param({
          id: $(this).attr("id"),
          table: "categories",
          frm_name: "Categorie-frm"
        })
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.editForm)(data, manageR);

      function manageR(response) {
        if (response.result === "success") {
          phpPlugin.Pluginfrm.find("#catID").val(response.msg.items.catID);
          phpPlugin.Pluginfrm.find("#date_enreg").val(response.msg.items.date_enreg);
          phpPlugin.Pluginfrm.find("#updateAt").val(response.msg.items.updateAt);
          phpPlugin.Pluginfrm.find("#status").val(response.msg.items.status);
          phpPlugin.Pluginfrm.find("#categorie").val(response.msg.items.categorie);
          phpPlugin.Pluginfrm.find("#description").val(response.msg.items.description);
        } else {
          phpPlugin.Pluginfrm.find("#alertErr").html(response.msg);
        }

        var data = {
          displayID: phpPlugin.Pluginfrm.find("#parentID"),
          alertID: phpPlugin.Pluginfrm.find("#alertErr"),
          table: "categories"
        };
        var root = "<option Desabled selected class='desabled' value = '0'>Selectionnez la categorie</option>";
        phpPlugin.Pluginfrm.find("#parentID").append(root);
        (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.displayMultisellect)(data);
      }
    }); // =======================================================================
    // Active/desactive plugin
    // =======================================================================

    phpPlugin.wrapper.on("click", ".activateBtn", function (e) {
      e.preventDefault();
      var data = {
        url: "tables/update",
        table: "categories",
        frm: phpPlugin.Pluginfrm,
        id: $(this).attr("id"),
        method: "categorieStatus",
        params: $(this)
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Call_controller)(data, Response);

      function Response(response, elmt) {
        console.log(response);

        if (response.result == "success") {
          response.msg == "green" ? elmt.attr("title", "Deactivate Category") : elmt.attr("title", "Activate Category");
          elmt.children().first().attr("style", "color:" + response.msg);
        }
      }
    }); // =======================================================================
    // Delete Plugin
    // =======================================================================

    phpPlugin.wrapper.on("click", ".deleteBtn", function (e) {
      e.preventDefault();
      var data = {
        url: "forms/delete",
        url_check: "forms/checkdelete",
        id: $(this).attr("id"),
        table: "categories",
        notification: "admin",
        swal: (sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default()),
        alertID: phpPlugin.wrapper.find("#globalErr")
      };
      (0,corejs_form_crud__WEBPACK_IMPORTED_MODULE_3__.Delete)(data, displayAll);
    });
  };

  $.fn.phpPlugin = function (options) {
    new PhpPlugin(this);
    return this;
  };

  $(".content").phpPlugin();
});

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.js ***!
  \******************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v10.15.5
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcon = function getIcon() {
    return elementByClass(swalClasses.icon);
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getDenyButton = function getDenyButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  };
  var getInputLabel = function getInputLabel() {
    return elementByClass(swalClasses['input-label']);
  };
  var getLoader = function getLoader() {
    return elementBySelector(".".concat(swalClasses.loader));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.display = 'none';
  };
  var setStyle = function setStyle(parent, selector, property, value) {
    var el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  var allButtonsAreHidden = function allButtonsAreHidden() {
    return !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  };
  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var loader = getLoader();
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      actions.insertBefore(cancelButton, loader);
      actions.insertBefore(denyButton, loader);
      actions.insertBefore(confirmButton, loader);
    } // Loader


    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };

  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var setInputLabel = function setInputLabel(input, prependTo, params) {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      var label = document.createElement('label');
      var labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      addClass(label, params.customClass.inputLabel);
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    setInputLabel(rangeInput, range, params);
    return range;
  };

  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };

  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    var getPadding = function getPadding(el) {
      return parseInt(window.getComputedStyle(el).paddingLeft) + parseInt(window.getComputedStyle(el).paddingRight);
    };

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + getPadding(getPopup()) + getPadding(getContent());

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block'); // Content as plain text
    } else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block'); // No content
    } else {
      hide(htmlContainer);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance);
    var icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      return hide(icon);
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      return hide(icon);
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass.icon);
  };

  var applyStyles = function applyStyles(icon, params) {
    for (var iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }

    addClass(icon, iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  var setColor = function setColor(icon, params) {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (var _i = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i < _arr.length; _i++) {
      var sel = _arr[_i];
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText);

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var container = getContainer();
    var popup = getPopup(); // Width

    if (params.toast) {
      // #2170
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    } // Classes


    addClasses(popup, params);
  };

  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    } else if (typeof params.onRender === 'function') {
      params.onRender(getPopup()); // @deprecated
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Deny' button
   */

  var clickDeny = function clickDeny() {
    return getDenyButton() && getDenyButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      var _super = _createSuper(MixinSwal);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _super.apply(this, arguments);
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params, priorityMixinParams) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, _extends({}, mixinParams, priorityMixinParams));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  var showLoading = function showLoading(buttonToReplace) {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
    show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement() {
    return new Promise(function (resolve) {
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      /* istanbul ignore if */

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var bodyClickListenerAdded = false;
  var clickHandlers = {};
  function bindClickHandler() {
    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  var bodyClickListener = function bodyClickListener(event) {
    // 1. using .parentNode instead of event.path because of better support by old browsers https://stackoverflow.com/a/39245638
    // 2. using .parentNode instead of .parentElement because of IE11 + SVG https://stackoverflow.com/a/36270354
    for (var el = event.target; el && el !== document; el = el.parentNode) {
      for (var attr in clickHandlers) {
        var template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template: template
          });
          return;
        }
      }
    }
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    willOpen: undefined,
    didOpen: undefined,
    onRender: undefined,
    didRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    willClose: undefined,
    didClose: undefined,
    onDestroy: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass',
    onBeforeOpen: 'willOpen',
    onOpen: 'didOpen',
    onRender: 'didRender',
    onClose: 'willClose',
    onAfterClose: 'didClose',
    onDestroy: 'didDestroy'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      var bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = shouldPreventTouchMove(e);
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
    var target = event.target;
    var container = getContainer();

    if (isStylys(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    !(isScrollable(getContent()) && // #1944
    getContent().contains(target))) {
      return true;
    }

    return false;
  };

  var isStylys = function isStylys(event) {
    // #1786
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  var isZoom = function isZoom(event) {
    // #1891
    return event.touches && event.touches.length > 1;
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, isToast$$1, didClose) {
    if (isToast$$1) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement().then(function () {
        return triggerDidCloseAndDispose(instance, didClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    resolveValue = prepareResolveValue(resolveValue);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

    swalPromiseResolve(resolveValue);
  }

  var prepareResolveValue = function prepareResolveValue(resolveValue) {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return _extends({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose,
        willClose = innerParams.willClose,
        didClose = innerParams.didClose;
    runDidClose(popup, willClose, onClose);

    if (animationIsSupported) {
      animatePopup(instance, popup, container, didClose || onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, isToast(), didClose || onAfterClose);
    }
  };

  var runDidClose = function runDidClose(popup, willClose, onClose) {
    if (willClose !== null && typeof willClose === 'function') {
      willClose(popup);
    } else if (onClose !== null && typeof onClose === 'function') {
      onClose(popup); // @deprecated
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, didClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
    setTimeout(function () {
      if (typeof didClose === 'function') {
        didClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    var params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  var getTemplateParams = function getTemplateParams(params) {
    var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }

    var templateContent = template.content || template; // IE11

    showWarningsForElements(templateContent);

    var result = _extends(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));

    return result;
  };

  var getSwalParams = function getSwalParams(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach(function (param) {
      showWarningsForAttributes(param, ['name', 'value']);
      var paramName = param.getAttribute('name');
      var value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        value = false;
      }

      if (_typeof(defaultParams[paramName]) === 'object') {
        value = JSON.parse(value);
      }

      result[paramName] = value;
    });
    return result;
  };

  var getSwalButtons = function getSwalButtons(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach(function (button) {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      var type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  var getSwalImage = function getSwalImage(templateContent) {
    var result = {};
    var image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };

  var getSwalIcon = function getSwalIcon(templateContent) {
    var result = {};
    var icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };

  var getSwalInput = function getSwalInput(templateContent) {
    var result = {};
    var input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }

    var inputOptions = templateContent.querySelectorAll('swal-input-option');

    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach(function (option) {
        showWarningsForAttributes(option, ['value']);
        var optionValue = option.getAttribute('value');
        var optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };

  var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
    var result = {};

    for (var i in paramNames) {
      var paramName = paramNames[i];
      var tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML;
      }
    }

    return result;
  };

  var showWarningsForElements = function showWarningsForElements(template) {
    var allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(template.querySelectorAll('*')).forEach(function (el) {
      if (el.parentNode !== template) {
        // can't use template.children because of IE11
        return;
      }

      var tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };

  var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
    toArray(el.attributes).forEach(function (attribute) {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  var SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    } else if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup); // @deprecated
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(function () {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    runDidOpen(popup, params);
    removeClass(container, swalClasses['no-transition']);
  };

  var runDidOpen = function runDidOpen(popup, params) {
    if (typeof params.didOpen === 'function') {
      setTimeout(function () {
        return params.didOpen(popup);
      });
    } else if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      }); // @deprecated
    }
  };

  var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    IEfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup);
    setTimeout(function () {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);

      var renderOption = function renderOption(parent, optionLabel, optionValue) {
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          var optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(function (o) {
            return renderOption(optgroup, o[1], o[0]);
          });
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  var isSelected = function isSelected(optionValue, inputValue) {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'confirm');
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleDenyButtonClick = function handleDenyButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'deny');
    } else {
      deny(instance, innerParams, false);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, innerParams, type
  /* type is either 'confirm' or 'deny' */
  ) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, innerParams, inputValue);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, innerParams, inputValue);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var handleInputValidator = function handleInputValidator(instance, innerParams, inputValue) {
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else {
        confirm(instance, innerParams, inputValue);
      }
    });
  };

  var deny = function deny(instance, innerParams, value) {
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      var preDenyPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
      });
      preDenyPromise.then(function (preDenyValue) {
        if (preDenyValue === false) {
          instance.hideLoading();
        } else {
          instance.closePopup({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      });
    } else {
      instance.closePopup({
        isDenied: true,
        value: value
      });
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      isConfirmed: true,
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeysNextButton = ['ArrowRight', 'ArrowDown', 'Right', 'Down' // IE11
  ];
  var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp', 'Left', 'Up' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).indexOf(e.key) !== -1) {
      handleArrows(e.key); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows(key) {
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();

    if (!([confirmButton, denyButton, cancelButton].indexOf(document.activeElement) !== -1)) {
      return;
    }

    var sibling = arrowKeysNextButton.indexOf(key) !== -1 ? 'nextElementSibling' : 'previousElementSibling';
    var buttonToFocus = document.activeElement[sibling];

    if (buttonToFocus) {
      buttonToFocus.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    showWarningsForParams(_extends({}, mixinParams, userParams));

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams, mixinParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams, mixinParams) {
    var templateParams = getTemplateParams(userParams);

    var showClass = _extends({}, defaultParams.showClass, mixinParams.showClass, templateParams.showClass, userParams.showClass);

    var hideClass = _extends({}, defaultParams.hideClass, mixinParams.hideClass, templateParams.hideClass, userParams.hideClass);

    var params = _extends({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131


    params.showClass = showClass;
    params.hideClass = hideClass; // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          isDismissed: true,
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.denyButton.onclick = function () {
        return handleDenyButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);

      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
        addClass(document.body, swalClasses['toast-column']);
      } else {
        removeClass(document.body, swalClasses['toast-column']);
      }

      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout && globalState$$1.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };

  var focusButton = function focusButton(domCache, innerParams) {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
      }
    });

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    runDidDestroy(innerParams);
    disposeSwal(this);
  }

  var runDidDestroy = function runDidDestroy(innerParams) {
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    } else if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy(); // @deprecated
    }
  };

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance;

  var SweetAlert = /*#__PURE__*/function () {
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);

      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      } // Check for the existence of Promise


      if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
      }

      currentInstance = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      var promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    _createClass(SweetAlert, [{
      key: "then",
      value: function then(onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var promise = privateProps.promise.get(this);
        return promise["finally"](onFinally);
      }
    }]);

    return SweetAlert;
  }(); // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '10.15.5';

  var Swal = SweetAlert;
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}


/***/ })

},
0,[["./src/assets/js/custom/admin/products/categories.js","commons/backend/admin/commonVendor","commons/backend/admin/commonCustomModules","js/librairies/adminlib"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2FkbWluL3Byb2R1Y3RzL2NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiUGhwUGx1Z2luIiwiZWxlbWVudCIsImluaXQiLCJwcm90b3R5cGUiLCJzZXR1cFZhcmlhYmxlcyIsInNldHVwRXZlbnRzIiwid3JhcHBlciIsImZpbmQiLCJQbHVnaW5mcm0iLCJQbHVnaW5Nb2RhbCIsInBocFBsdWdpbiIsImRpc3BsYXlBbGwiLCJkYXRhIiwidXJsIiwidGFibGUiLCJ1c2VyIiwiZGF0YXRhYmxlIiwiZGlzcGxheWlkIiwiZGF0YV90eXBlIiwiZGlzcGxheUFsbEl0ZW1zIiwicmVtb3ZlSW52YWxpZElucHV0Iiwib24iLCJsZW5ndGgiLCJyZXNldF9pbnZhbGlkX2lucHV0IiwidHJpZ2dlciIsImVtcHR5IiwidmFsIiwiZGlzcGxheUlEIiwiYWxlcnRJRCIsInJvb3QiLCJhcHBlbmQiLCJkaXNwbGF5TXVsdGlzZWxsZWN0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZnJtIiwiZnJtX25hbWUiLCJub3RpZmljYXRpb24iLCJBZGQiLCJSZXNwb25zZSIsIkNhbGxfY29udHJvbGxlciIsInJlc3BvbnNlIiwicmRhdGEiLCJzd2FsIiwiU3dhbCIsIm1vZGFsYm94IiwiYWxlcnRpZCIsImRpc3BsYXkiLCJNYW5hZ2VSZXNwb25zZSIsImZvcm1EYXRhIiwic2VyaWFsaXplIiwiJCIsInBhcmFtIiwiaWQiLCJhdHRyIiwiZWRpdEZvcm0iLCJtYW5hZ2VSIiwicmVzdWx0IiwibXNnIiwiaXRlbXMiLCJjYXRJRCIsImRhdGVfZW5yZWciLCJ1cGRhdGVBdCIsInN0YXR1cyIsImNhdGVnb3JpZSIsImRlc2NyaXB0aW9uIiwiaHRtbCIsIm1ldGhvZCIsInBhcmFtcyIsImVsbXQiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRyZW4iLCJmaXJzdCIsInVybF9jaGVjayIsIkRlbGV0ZSIsImZuIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBU0E7QUFJQTtBQUNBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3hELFdBQVNDLFNBQVQsQ0FBbUJDLE9BQW5CLEVBQTRCO0FBQzFCLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUw7QUFDRDs7QUFDREYsV0FBUyxDQUFDRyxTQUFWLENBQW9CRCxJQUFwQixHQUEyQixZQUFZO0FBQ3JDLFNBQUtFLGNBQUw7QUFDQSxTQUFLQyxXQUFMO0FBQ0QsR0FIRDs7QUFJQUwsV0FBUyxDQUFDRyxTQUFWLENBQW9CQyxjQUFwQixHQUFxQyxZQUFZO0FBQy9DLFNBQUtFLE9BQUwsR0FBZSxLQUFLTCxPQUFMLENBQWFNLElBQWIsQ0FBa0IsT0FBbEIsQ0FBZjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBS1AsT0FBTCxDQUFhTSxJQUFiLENBQWtCLGdCQUFsQixDQUFqQjtBQUNBLFNBQUtFLFdBQUwsR0FBbUIsS0FBS1IsT0FBTCxDQUFhTSxJQUFiLENBQWtCLFlBQWxCLENBQW5CO0FBQ0QsR0FKRDs7QUFNQVAsV0FBUyxDQUFDRyxTQUFWLENBQW9CRSxXQUFwQixHQUFrQyxZQUFZO0FBQzVDLFFBQUlLLFNBQVMsR0FBRyxJQUFoQixDQUQ0QyxDQUc1QztBQUNBO0FBQ0E7O0FBQ0FDLGNBQVU7O0FBQ1YsYUFBU0EsVUFBVCxHQUFzQjtBQUNwQixVQUFJQyxJQUFJLEdBQUc7QUFDVEMsV0FBRyxFQUFFLGVBREk7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S0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLEtBQUs7QUFDTCxrQ0FBa0M7QUFDbEMsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGFBQWE7QUFDbEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDOztBQUV6QztBQUNBO0FBQ0EsS0FBSzs7O0FBR0wsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0RUFBNEU7O0FBRTVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNFQUFzRTs7QUFFdEUsd0ZBQXdGO0FBQ3hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0Qzs7QUFFNUMscURBQXFEOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7O0FBRWhFLHVEQUF1RDs7QUFFdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLG1CQUFtQiw2QkFBNkI7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZEQUE2RDs7QUFFN0Q7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxLQUFLO0FBQ0w7QUFDQSxtQ0FBbUM7QUFDbkMsS0FBSztBQUNMO0FBQ0E7O0FBRUEsa0NBQWtDOztBQUVsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsNkRBQTZELEtBQUs7QUFDbEUsS0FBSztBQUNMO0FBQ0E7QUFDQSx3REFBd0QsTUFBTSxRQUFRLEtBQUs7QUFDM0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7OztBQUdBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdURBQXVEOztBQUV2RDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxpQ0FBaUM7QUFDakM7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU8sRUFBRTtBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0EsS0FBSyxzQkFBc0I7O0FBRTNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBLGtCQUFrQjtBQUNsQixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSw0Q0FBNEM7QUFDNUMsS0FBSztBQUNMLGdDQUFnQztBQUNoQyxLQUFLO0FBQ0wsMEJBQTBCO0FBQzFCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQkFBK0I7O0FBRS9CLCtCQUErQjs7QUFFL0IsNEJBQTRCLDBEQUEwRDs7O0FBR3RGO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYixLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5RUFBeUUsYUFBYTtBQUN0RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRyxHQUFHOzs7QUFHTixrREFBa0Q7OztBQUdsRCxzQ0FBc0M7OztBQUd0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLENBQUM7QUFDRCxxREFBcUQsRUFBRSxTQUFTLEdBQUcsZUFBZSxHQUFHLFNBQVMsR0FBRyxlQUFlIiwiZmlsZSI6ImpzL2N1c3RvbS9hZG1pbi9wcm9kdWN0cy9jYXRlZ29yaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia25nZWxsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImltcG9ydCB7XHJcbiAgQWRkLFxyXG4gIGRpc3BsYXlBbGxJdGVtcyxcclxuICBNYW5hZ2VSZXNwb25zZSxcclxuICBDYWxsX2NvbnRyb2xsZXIsXHJcbiAgZWRpdEZvcm0sXHJcbiAgRGVsZXRlLFxyXG4gIGRpc3BsYXlNdWx0aXNlbGxlY3QsXHJcbn0gZnJvbSBcImNvcmVqcy9mb3JtX2NydWRcIjtcclxuaW1wb3J0IHtcclxuICByZW1vdmVJbnZhbGlkSW5wdXQsXHJcbiAgcmVzZXRfaW52YWxpZF9pbnB1dCxcclxufSBmcm9tIFwiY29yZWpzL2lucHV0RXJyTWFuYWdlclwiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDIvZGlzdC9zd2VldGFsZXJ0Mi5qc1wiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgZnVuY3Rpb24gUGhwUGx1Z2luKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcbiAgUGhwUGx1Z2luLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zZXR1cFZhcmlhYmxlcygpO1xyXG4gICAgdGhpcy5zZXR1cEV2ZW50cygpO1xyXG4gIH07XHJcbiAgUGhwUGx1Z2luLnByb3RvdHlwZS5zZXR1cFZhcmlhYmxlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMud3JhcHBlciA9IHRoaXMuZWxlbWVudC5maW5kKFwiLmNhcmRcIik7XHJcbiAgICB0aGlzLlBsdWdpbmZybSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI0NhdGVnb3JpZS1mcm1cIik7XHJcbiAgICB0aGlzLlBsdWdpbk1vZGFsID0gdGhpcy5lbGVtZW50LmZpbmQoXCIjbW9kYWwtYm94XCIpO1xyXG4gIH07XHJcblxyXG4gIFBocFBsdWdpbi5wcm90b3R5cGUuc2V0dXBFdmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcGhwUGx1Z2luID0gdGhpcztcclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL0Rpc3BsYXkgQWxsIFBsdWdpbnNcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGRpc3BsYXlBbGwoKTtcclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBbGwoKSB7XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHVybDogXCJmb3Jtcy9zaG93QWxsXCIsXHJcbiAgICAgICAgdGFibGU6IFwiY2F0ZWdvcmllc1wiLFxyXG4gICAgICAgIHVzZXI6IFwiYWRtaW5cIixcclxuICAgICAgICBkYXRhdGFibGU6IHRydWUsXHJcbiAgICAgICAgZGlzcGxheWlkOiBwaHBQbHVnaW4ud3JhcHBlci5maW5kKFwiI3Nob3dBbGxcIiksXHJcbiAgICAgICAgZGF0YV90eXBlOiBcInZhbHVlc1wiLFxyXG4gICAgICB9O1xyXG4gICAgICBkaXNwbGF5QWxsSXRlbXMoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9jbGVhbiBmb3JtXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL3JlbW92ZSBpbnZhbGlkIGlucHV0IG9uIGlucHV0IGZvY3VzXHJcbiAgICByZW1vdmVJbnZhbGlkSW5wdXQocGhwUGx1Z2luLlBsdWdpbmZybSk7XHJcbiAgICAvL2NsZWFuIGZvcm0gb24gaGlkZVxyXG4gICAgcGhwUGx1Z2luLlBsdWdpbk1vZGFsLm9uKFwiaGlkZS5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChwaHBQbHVnaW4uUGx1Z2luZnJtLmZpbmQoXCIuaXMtaW52YWxpZFwiKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIHJlc2V0X2ludmFsaWRfaW5wdXQocGhwUGx1Z2luLlBsdWdpbmZybSk7XHJcbiAgICAgIH1cclxuICAgICAgcGhwUGx1Z2luLlBsdWdpbmZybS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgIHBocFBsdWdpbi5QbHVnaW5mcm0uZmluZChcIiNwYXJlbnRJRFwiKS5lbXB0eSgpO1xyXG4gICAgfSk7XHJcbiAgICAvL3NldCBjcmVhdGUvYWRkIGZ1bmN0aW9uXHJcbiAgICBwaHBQbHVnaW4ud3JhcHBlci5maW5kKFwiI2FkZE5ld1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcGhwUGx1Z2luLlBsdWdpbmZybS5maW5kKFwiI29wZXJhdGlvblwiKS52YWwoXCJhZGRcIik7XHJcbiAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgIGRpc3BsYXlJRDogcGhwUGx1Z2luLlBsdWdpbmZybS5maW5kKFwiI3BhcmVudElEXCIpLFxyXG4gICAgICAgIGFsZXJ0SUQ6IHBocFBsdWdpbi5QbHVnaW5mcm0uZmluZChcIiNhbGVydEVyclwiKSxcclxuICAgICAgICB0YWJsZTogXCJjYXRlZ29yaWVzXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIHZhciByb290ID1cclxuICAgICAgICBcIjxvcHRpb24gRGVzYWJsZWQgc2VsZWN0ZWQgY2xhc3M9J2Rlc2FibGVkJyB2YWx1ZSA9ICcwJz5DYXRlZ29yaWUgUGFyZW50PC9vcHRpb24+XCI7XHJcbiAgICAgIHBocFBsdWdpbi5QbHVnaW5mcm0uZmluZChcIiNwYXJlbnRJRFwiKS5hcHBlbmQocm9vdCk7XHJcbiAgICAgIGRpc3BsYXlNdWx0aXNlbGxlY3QoZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQWRkIG9yIFVwZGF0ZSBQbHVnaW5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwaHBQbHVnaW4uUGx1Z2luZnJtLm9uKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgcGhwUGx1Z2luLlBsdWdpbmZybS5maW5kKFwiI1BsdWdpbkJ0blwiKS52YWwoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgdXJsOlxyXG4gICAgICAgICAgcGhwUGx1Z2luLlBsdWdpbmZybS5maW5kKFwiI29wZXJhdGlvblwiKS52YWwoKSA9PT0gXCJhZGRcIlxyXG4gICAgICAgICAgICA/IFwiZm9ybXMvQWRkXCJcclxuICAgICAgICAgICAgOiBcImZvcm1zL3VwZGF0ZVwiLFxyXG4gICAgICAgIGZybTogcGhwUGx1Z2luLlBsdWdpbmZybSxcclxuICAgICAgICBmcm1fbmFtZTogXCJDYXRlZ29yaWUtZnJtXCIsXHJcbiAgICAgICAgdGFibGU6IFwiY2F0ZWdvcmllc1wiLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbjogXCJhZG1pblwiLFxyXG4gICAgICB9O1xyXG4gICAgICBzd2l0Y2ggKHBocFBsdWdpbi5QbHVnaW5mcm0uZmluZChcIiNvcGVyYXRpb25cIikudmFsKCkpIHtcclxuICAgICAgICBjYXNlIFwiYWRkXCI6XHJcbiAgICAgICAgICBBZGQoZGF0YSwgUmVzcG9uc2UpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInVwZGF0ZVwiOlxyXG4gICAgICAgICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIFJlc3BvbnNlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIFJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcGhwUGx1Z2luLlBsdWdpbmZybS5maW5kKFwiI1BsdWdpbkJ0blwiKS52YWwoXCJWYWxpZGVyXCIpO1xyXG4gICAgICAgIHZhciByZGF0YSA9IHtcclxuICAgICAgICAgIGZybTogcGhwUGx1Z2luLlBsdWdpbmZybSxcclxuICAgICAgICAgIHN3YWw6IFN3YWwsXHJcbiAgICAgICAgICBtb2RhbGJveDogcGhwUGx1Z2luLlBsdWdpbk1vZGFsLFxyXG4gICAgICAgICAgYWxlcnRpZDogcGhwUGx1Z2luLlBsdWdpbmZybS5maW5kKFwiI2FsZXJ0RXJyXCIpLFxyXG4gICAgICAgICAgZGlzcGxheTogZGlzcGxheUFsbCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlLCByZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9FZGl0IFBsdWdpblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLndyYXBwZXIub24oXCJjbGlja1wiLCBcIi5lZGl0QnRuXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcGhwUGx1Z2luLlBsdWdpbmZybS5maW5kKFwiI29wZXJhdGlvblwiKS52YWwoXCJ1cGRhdGVcIik7XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHVybDogXCJmb3Jtcy9lZGl0XCIsXHJcbiAgICAgICAgZm9ybURhdGE6XHJcbiAgICAgICAgICBwaHBQbHVnaW4uUGx1Z2luTW9kYWwuZmluZChcclxuICAgICAgICAgICAgXCIjQ2F0ZWdvcmllLWZybSBpbnB1dFt0eXBlPWhpZGRlbl1cIlxyXG4gICAgICAgICAgKS5zZXJpYWxpemUoKSArXHJcbiAgICAgICAgICBcIiZcIiArXHJcbiAgICAgICAgICAkLnBhcmFtKHtcclxuICAgICAgICAgICAgaWQ6ICQodGhpcykuYXR0cihcImlkXCIpLFxyXG4gICAgICAgICAgICB0YWJsZTogXCJjYXRlZ29yaWVzXCIsXHJcbiAgICAgICAgICAgIGZybV9uYW1lOiBcIkNhdGVnb3JpZS1mcm1cIixcclxuICAgICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgICBlZGl0Rm9ybShkYXRhLCBtYW5hZ2VSKTtcclxuICAgICAgZnVuY3Rpb24gbWFuYWdlUihyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBwaHBQbHVnaW4uUGx1Z2luZnJtLmZpbmQoXCIjY2F0SURcIikudmFsKHJlc3BvbnNlLm1zZy5pdGVtcy5jYXRJRCk7XHJcbiAgICAgICAgICBwaHBQbHVnaW4uUGx1Z2luZnJtLmZpbmQoXCIjZGF0ZV9lbnJlZ1wiKS52YWwoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLm1zZy5pdGVtcy5kYXRlX2VucmVnXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcGhwUGx1Z2luLlBsdWdpbmZybS5maW5kKFwiI3VwZGF0ZUF0XCIpLnZhbChcclxuICAgICAgICAgICAgcmVzcG9uc2UubXNnLml0ZW1zLnVwZGF0ZUF0XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcGhwUGx1Z2luLlBsdWdpbmZybS5maW5kKFwiI3N0YXR1c1wiKS52YWwocmVzcG9uc2UubXNnLml0ZW1zLnN0YXR1cyk7XHJcbiAgICAgICAgICBwaHBQbHVnaW4uUGx1Z2luZnJtLmZpbmQoXCIjY2F0ZWdvcmllXCIpLnZhbChcclxuICAgICAgICAgICAgcmVzcG9uc2UubXNnLml0ZW1zLmNhdGVnb3JpZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHBocFBsdWdpbi5QbHVnaW5mcm0uZmluZChcIiNkZXNjcmlwdGlvblwiKS52YWwoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLm1zZy5pdGVtcy5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGhwUGx1Z2luLlBsdWdpbmZybS5maW5kKFwiI2FsZXJ0RXJyXCIpLmh0bWwocmVzcG9uc2UubXNnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICBkaXNwbGF5SUQ6IHBocFBsdWdpbi5QbHVnaW5mcm0uZmluZChcIiNwYXJlbnRJRFwiKSxcclxuICAgICAgICAgIGFsZXJ0SUQ6IHBocFBsdWdpbi5QbHVnaW5mcm0uZmluZChcIiNhbGVydEVyclwiKSxcclxuICAgICAgICAgIHRhYmxlOiBcImNhdGVnb3JpZXNcIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciByb290ID1cclxuICAgICAgICAgIFwiPG9wdGlvbiBEZXNhYmxlZCBzZWxlY3RlZCBjbGFzcz0nZGVzYWJsZWQnIHZhbHVlID0gJzAnPlNlbGVjdGlvbm5leiBsYSBjYXRlZ29yaWU8L29wdGlvbj5cIjtcclxuICAgICAgICBwaHBQbHVnaW4uUGx1Z2luZnJtLmZpbmQoXCIjcGFyZW50SURcIikuYXBwZW5kKHJvb3QpO1xyXG4gICAgICAgIGRpc3BsYXlNdWx0aXNlbGxlY3QoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEFjdGl2ZS9kZXNhY3RpdmUgcGx1Z2luXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLndyYXBwZXIub24oXCJjbGlja1wiLCBcIi5hY3RpdmF0ZUJ0blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHVybDogXCJ0YWJsZXMvdXBkYXRlXCIsXHJcbiAgICAgICAgdGFibGU6IFwiY2F0ZWdvcmllc1wiLFxyXG4gICAgICAgIGZybTogcGhwUGx1Z2luLlBsdWdpbmZybSxcclxuICAgICAgICBpZDogJCh0aGlzKS5hdHRyKFwiaWRcIiksXHJcbiAgICAgICAgbWV0aG9kOiBcImNhdGVnb3JpZVN0YXR1c1wiLFxyXG4gICAgICAgIHBhcmFtczogJCh0aGlzKSxcclxuICAgICAgfTtcclxuICAgICAgQ2FsbF9jb250cm9sbGVyKGRhdGEsIFJlc3BvbnNlKTtcclxuICAgICAgZnVuY3Rpb24gUmVzcG9uc2UocmVzcG9uc2UsIGVsbXQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgcmVzcG9uc2UubXNnID09IFwiZ3JlZW5cIlxyXG4gICAgICAgICAgICA/IGVsbXQuYXR0cihcInRpdGxlXCIsIFwiRGVhY3RpdmF0ZSBDYXRlZ29yeVwiKVxyXG4gICAgICAgICAgICA6IGVsbXQuYXR0cihcInRpdGxlXCIsIFwiQWN0aXZhdGUgQ2F0ZWdvcnlcIik7XHJcbiAgICAgICAgICBlbG10XHJcbiAgICAgICAgICAgIC5jaGlsZHJlbigpXHJcbiAgICAgICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3R5bGVcIiwgXCJjb2xvcjpcIiArIHJlc3BvbnNlLm1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBEZWxldGUgUGx1Z2luXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLndyYXBwZXIub24oXCJjbGlja1wiLCBcIi5kZWxldGVCdG5cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB1cmw6IFwiZm9ybXMvZGVsZXRlXCIsXHJcbiAgICAgICAgdXJsX2NoZWNrOiBcImZvcm1zL2NoZWNrZGVsZXRlXCIsXHJcbiAgICAgICAgaWQ6ICQodGhpcykuYXR0cihcImlkXCIpLFxyXG4gICAgICAgIHRhYmxlOiBcImNhdGVnb3JpZXNcIixcclxuICAgICAgICBub3RpZmljYXRpb246IFwiYWRtaW5cIixcclxuICAgICAgICBzd2FsOiBTd2FsLFxyXG4gICAgICAgIGFsZXJ0SUQ6IHBocFBsdWdpbi53cmFwcGVyLmZpbmQoXCIjZ2xvYmFsRXJyXCIpLFxyXG4gICAgICB9O1xyXG4gICAgICBEZWxldGUoZGF0YSwgZGlzcGxheUFsbCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gICQuZm4ucGhwUGx1Z2luID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIG5ldyBQaHBQbHVnaW4odGhpcyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG4gICQoXCIuY29udGVudFwiKS5waHBQbHVnaW4oKTtcclxufSk7XHJcbiIsIi8qIVxuKiBzd2VldGFsZXJ0MiB2MTAuMTUuNVxuKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4qL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5Td2VldGFsZXJ0MiA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3R5cGVvZihvYmopO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICAgIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gICAgfTtcbiAgICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xuICB9XG5cbiAgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICAgIG8uX19wcm90b19fID0gcDtcbiAgICAgIHJldHVybiBvO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xuICB9XG5cbiAgZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgaWYgKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgICAgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICAgIGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgICByZXR1cm4gY2FsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XG4gICAgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgICB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgICAgcmVzdWx0O1xuXG4gICAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgICB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgIHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgICBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgICBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICAgIHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG4gIH1cblxuICB2YXIgY29uc29sZVByZWZpeCA9ICdTd2VldEFsZXJ0MjonO1xuICAvKipcbiAgICogRmlsdGVyIHRoZSB1bmlxdWUgdmFsdWVzIGludG8gYSBuZXcgYXJyYXlcbiAgICogQHBhcmFtIGFyclxuICAgKi9cblxuICB2YXIgdW5pcXVlQXJyYXkgPSBmdW5jdGlvbiB1bmlxdWVBcnJheShhcnIpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlc3VsdC5pbmRleE9mKGFycltpXSkgPT09IC0xKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGFycltpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgLyoqXG4gICAqIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZ1xuICAgKiBAcGFyYW0gc3RyXG4gICAqL1xuXG4gIHZhciBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgfTtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFycmF5IG9mIG9iamVjdCB2YWx1ZXMgKE9iamVjdC52YWx1ZXMgaXNuJ3Qgc3VwcG9ydGVkIGluIElFMTEpXG4gICAqIEBwYXJhbSBvYmpcbiAgICovXG5cbiAgdmFyIG9iamVjdFZhbHVlcyA9IGZ1bmN0aW9uIG9iamVjdFZhbHVlcyhvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgIH0pO1xuICB9O1xuICAvKipcbiAgICogQ29udmVydCBOb2RlTGlzdCB0byBBcnJheVxuICAgKiBAcGFyYW0gbm9kZUxpc3RcbiAgICovXG5cbiAgdmFyIHRvQXJyYXkgPSBmdW5jdGlvbiB0b0FycmF5KG5vZGVMaXN0KSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGVMaXN0KTtcbiAgfTtcbiAgLyoqXG4gICAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgd2FybmluZ3NcbiAgICogQHBhcmFtIG1lc3NhZ2VcbiAgICovXG5cbiAgdmFyIHdhcm4gPSBmdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLndhcm4oXCJcIi5jb25jYXQoY29uc29sZVByZWZpeCwgXCIgXCIpLmNvbmNhdChfdHlwZW9mKG1lc3NhZ2UpID09PSAnb2JqZWN0JyA/IG1lc3NhZ2Uuam9pbignICcpIDogbWVzc2FnZSkpO1xuICB9O1xuICAvKipcbiAgICogU3RhbmRhcmRpc2UgY29uc29sZSBlcnJvcnNcbiAgICogQHBhcmFtIG1lc3NhZ2VcbiAgICovXG5cbiAgdmFyIGVycm9yID0gZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJcIi5jb25jYXQoY29uc29sZVByZWZpeCwgXCIgXCIpLmNvbmNhdChtZXNzYWdlKSk7XG4gIH07XG4gIC8qKlxuICAgKiBQcml2YXRlIGdsb2JhbCBzdGF0ZSBmb3IgYHdhcm5PbmNlYFxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG4gIHZhciBwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMgPSBbXTtcbiAgLyoqXG4gICAqIFNob3cgYSBjb25zb2xlIHdhcm5pbmcsIGJ1dCBvbmx5IGlmIGl0IGhhc24ndCBhbHJlYWR5IGJlZW4gc2hvd25cbiAgICogQHBhcmFtIG1lc3NhZ2VcbiAgICovXG5cbiAgdmFyIHdhcm5PbmNlID0gZnVuY3Rpb24gd2Fybk9uY2UobWVzc2FnZSkge1xuICAgIGlmICghKHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpICE9PSAtMSkpIHtcbiAgICAgIHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgd2FybihtZXNzYWdlKTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBTaG93IGEgb25lLXRpbWUgY29uc29sZSB3YXJuaW5nIGFib3V0IGRlcHJlY2F0ZWQgcGFyYW1zL21ldGhvZHNcbiAgICovXG5cbiAgdmFyIHdhcm5BYm91dERlcHJlY2F0aW9uID0gZnVuY3Rpb24gd2FybkFib3V0RGVwcmVjYXRpb24oZGVwcmVjYXRlZFBhcmFtLCB1c2VJbnN0ZWFkKSB7XG4gICAgd2Fybk9uY2UoXCJcXFwiXCIuY29uY2F0KGRlcHJlY2F0ZWRQYXJhbSwgXCJcXFwiIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLiBQbGVhc2UgdXNlIFxcXCJcIikuY29uY2F0KHVzZUluc3RlYWQsIFwiXFxcIiBpbnN0ZWFkLlwiKSk7XG4gIH07XG4gIC8qKlxuICAgKiBJZiBgYXJnYCBpcyBhIGZ1bmN0aW9uLCBjYWxsIGl0ICh3aXRoIG5vIGFyZ3VtZW50cyBvciBjb250ZXh0KSBhbmQgcmV0dXJuIHRoZSByZXN1bHQuXG4gICAqIE90aGVyd2lzZSwganVzdCBwYXNzIHRoZSB2YWx1ZSB0aHJvdWdoXG4gICAqIEBwYXJhbSBhcmdcbiAgICovXG5cbiAgdmFyIGNhbGxJZkZ1bmN0aW9uID0gZnVuY3Rpb24gY2FsbElmRnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicgPyBhcmcoKSA6IGFyZztcbiAgfTtcbiAgdmFyIGhhc1RvUHJvbWlzZUZuID0gZnVuY3Rpb24gaGFzVG9Qcm9taXNlRm4oYXJnKSB7XG4gICAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnLnRvUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJztcbiAgfTtcbiAgdmFyIGFzUHJvbWlzZSA9IGZ1bmN0aW9uIGFzUHJvbWlzZShhcmcpIHtcbiAgICByZXR1cm4gaGFzVG9Qcm9taXNlRm4oYXJnKSA/IGFyZy50b1Byb21pc2UoKSA6IFByb21pc2UucmVzb2x2ZShhcmcpO1xuICB9O1xuICB2YXIgaXNQcm9taXNlID0gZnVuY3Rpb24gaXNQcm9taXNlKGFyZykge1xuICAgIHJldHVybiBhcmcgJiYgUHJvbWlzZS5yZXNvbHZlKGFyZykgPT09IGFyZztcbiAgfTtcblxuICB2YXIgRGlzbWlzc1JlYXNvbiA9IE9iamVjdC5mcmVlemUoe1xuICAgIGNhbmNlbDogJ2NhbmNlbCcsXG4gICAgYmFja2Ryb3A6ICdiYWNrZHJvcCcsXG4gICAgY2xvc2U6ICdjbG9zZScsXG4gICAgZXNjOiAnZXNjJyxcbiAgICB0aW1lcjogJ3RpbWVyJ1xuICB9KTtcblxuICB2YXIgaXNKcXVlcnlFbGVtZW50ID0gZnVuY3Rpb24gaXNKcXVlcnlFbGVtZW50KGVsZW0pIHtcbiAgICByZXR1cm4gX3R5cGVvZihlbGVtKSA9PT0gJ29iamVjdCcgJiYgZWxlbS5qcXVlcnk7XG4gIH07XG5cbiAgdmFyIGlzRWxlbWVudCA9IGZ1bmN0aW9uIGlzRWxlbWVudChlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0gaW5zdGFuY2VvZiBFbGVtZW50IHx8IGlzSnF1ZXJ5RWxlbWVudChlbGVtKTtcbiAgfTtcblxuICB2YXIgYXJnc1RvUGFyYW1zID0gZnVuY3Rpb24gYXJnc1RvUGFyYW1zKGFyZ3MpIHtcbiAgICB2YXIgcGFyYW1zID0ge307XG5cbiAgICBpZiAoX3R5cGVvZihhcmdzWzBdKSA9PT0gJ29iamVjdCcgJiYgIWlzRWxlbWVudChhcmdzWzBdKSkge1xuICAgICAgX2V4dGVuZHMocGFyYW1zLCBhcmdzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgWyd0aXRsZScsICdodG1sJywgJ2ljb24nXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCBpbmRleCkge1xuICAgICAgICB2YXIgYXJnID0gYXJnc1tpbmRleF07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8IGlzRWxlbWVudChhcmcpKSB7XG4gICAgICAgICAgcGFyYW1zW25hbWVdID0gYXJnO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZXJyb3IoXCJVbmV4cGVjdGVkIHR5cGUgb2YgXCIuY29uY2F0KG5hbWUsIFwiISBFeHBlY3RlZCBcXFwic3RyaW5nXFxcIiBvciBcXFwiRWxlbWVudFxcXCIsIGdvdCBcIikuY29uY2F0KF90eXBlb2YoYXJnKSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9O1xuXG4gIHZhciBzd2FsUHJlZml4ID0gJ3N3YWwyLSc7XG4gIHZhciBwcmVmaXggPSBmdW5jdGlvbiBwcmVmaXgoaXRlbXMpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICBmb3IgKHZhciBpIGluIGl0ZW1zKSB7XG4gICAgICByZXN1bHRbaXRlbXNbaV1dID0gc3dhbFByZWZpeCArIGl0ZW1zW2ldO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHZhciBzd2FsQ2xhc3NlcyA9IHByZWZpeChbJ2NvbnRhaW5lcicsICdzaG93bicsICdoZWlnaHQtYXV0bycsICdpb3NmaXgnLCAncG9wdXAnLCAnbW9kYWwnLCAnbm8tYmFja2Ryb3AnLCAnbm8tdHJhbnNpdGlvbicsICd0b2FzdCcsICd0b2FzdC1zaG93bicsICd0b2FzdC1jb2x1bW4nLCAnc2hvdycsICdoaWRlJywgJ2Nsb3NlJywgJ3RpdGxlJywgJ2hlYWRlcicsICdjb250ZW50JywgJ2h0bWwtY29udGFpbmVyJywgJ2FjdGlvbnMnLCAnY29uZmlybScsICdkZW55JywgJ2NhbmNlbCcsICdmb290ZXInLCAnaWNvbicsICdpY29uLWNvbnRlbnQnLCAnaW1hZ2UnLCAnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAnbGFiZWwnLCAndGV4dGFyZWEnLCAnaW5wdXRlcnJvcicsICdpbnB1dC1sYWJlbCcsICd2YWxpZGF0aW9uLW1lc3NhZ2UnLCAncHJvZ3Jlc3Mtc3RlcHMnLCAnYWN0aXZlLXByb2dyZXNzLXN0ZXAnLCAncHJvZ3Jlc3Mtc3RlcCcsICdwcm9ncmVzcy1zdGVwLWxpbmUnLCAnbG9hZGVyJywgJ2xvYWRpbmcnLCAnc3R5bGVkJywgJ3RvcCcsICd0b3Atc3RhcnQnLCAndG9wLWVuZCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnLCAnY2VudGVyJywgJ2NlbnRlci1zdGFydCcsICdjZW50ZXItZW5kJywgJ2NlbnRlci1sZWZ0JywgJ2NlbnRlci1yaWdodCcsICdib3R0b20nLCAnYm90dG9tLXN0YXJ0JywgJ2JvdHRvbS1lbmQnLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ2dyb3ctcm93JywgJ2dyb3ctY29sdW1uJywgJ2dyb3ctZnVsbHNjcmVlbicsICdydGwnLCAndGltZXItcHJvZ3Jlc3MtYmFyJywgJ3RpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXInLCAnc2Nyb2xsYmFyLW1lYXN1cmUnLCAnaWNvbi1zdWNjZXNzJywgJ2ljb24td2FybmluZycsICdpY29uLWluZm8nLCAnaWNvbi1xdWVzdGlvbicsICdpY29uLWVycm9yJ10pO1xuICB2YXIgaWNvblR5cGVzID0gcHJlZml4KFsnc3VjY2VzcycsICd3YXJuaW5nJywgJ2luZm8nLCAncXVlc3Rpb24nLCAnZXJyb3InXSk7XG5cbiAgdmFyIGdldENvbnRhaW5lciA9IGZ1bmN0aW9uIGdldENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250YWluZXIpKTtcbiAgfTtcbiAgdmFyIGVsZW1lbnRCeVNlbGVjdG9yID0gZnVuY3Rpb24gZWxlbWVudEJ5U2VsZWN0b3Ioc2VsZWN0b3JTdHJpbmcpIHtcbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lciA/IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yU3RyaW5nKSA6IG51bGw7XG4gIH07XG5cbiAgdmFyIGVsZW1lbnRCeUNsYXNzID0gZnVuY3Rpb24gZWxlbWVudEJ5Q2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChjbGFzc05hbWUpKTtcbiAgfTtcblxuICB2YXIgZ2V0UG9wdXAgPSBmdW5jdGlvbiBnZXRQb3B1cCgpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMucG9wdXApO1xuICB9O1xuICB2YXIgZ2V0SWNvbiA9IGZ1bmN0aW9uIGdldEljb24oKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmljb24pO1xuICB9O1xuICB2YXIgZ2V0VGl0bGUgPSBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMudGl0bGUpO1xuICB9O1xuICB2YXIgZ2V0Q29udGVudCA9IGZ1bmN0aW9uIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNvbnRlbnQpO1xuICB9O1xuICB2YXIgZ2V0SHRtbENvbnRhaW5lciA9IGZ1bmN0aW9uIGdldEh0bWxDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWydodG1sLWNvbnRhaW5lciddKTtcbiAgfTtcbiAgdmFyIGdldEltYWdlID0gZnVuY3Rpb24gZ2V0SW1hZ2UoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmltYWdlKTtcbiAgfTtcbiAgdmFyIGdldFByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiBnZXRQcm9ncmVzc1N0ZXBzKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcHMnXSk7XG4gIH07XG4gIHZhciBnZXRWYWxpZGF0aW9uTWVzc2FnZSA9IGZ1bmN0aW9uIGdldFZhbGlkYXRpb25NZXNzYWdlKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10pO1xuICB9O1xuICB2YXIgZ2V0Q29uZmlybUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENvbmZpcm1CdXR0b24oKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5hY3Rpb25zLCBcIiAuXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb25maXJtKSk7XG4gIH07XG4gIHZhciBnZXREZW55QnV0dG9uID0gZnVuY3Rpb24gZ2V0RGVueUJ1dHRvbigpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmFjdGlvbnMsIFwiIC5cIikuY29uY2F0KHN3YWxDbGFzc2VzLmRlbnkpKTtcbiAgfTtcbiAgdmFyIGdldElucHV0TGFiZWwgPSBmdW5jdGlvbiBnZXRJbnB1dExhYmVsKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1snaW5wdXQtbGFiZWwnXSk7XG4gIH07XG4gIHZhciBnZXRMb2FkZXIgPSBmdW5jdGlvbiBnZXRMb2FkZXIoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5sb2FkZXIpKTtcbiAgfTtcbiAgdmFyIGdldENhbmNlbEJ1dHRvbiA9IGZ1bmN0aW9uIGdldENhbmNlbEJ1dHRvbigpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmFjdGlvbnMsIFwiIC5cIikuY29uY2F0KHN3YWxDbGFzc2VzLmNhbmNlbCkpO1xuICB9O1xuICB2YXIgZ2V0QWN0aW9ucyA9IGZ1bmN0aW9uIGdldEFjdGlvbnMoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmFjdGlvbnMpO1xuICB9O1xuICB2YXIgZ2V0SGVhZGVyID0gZnVuY3Rpb24gZ2V0SGVhZGVyKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5oZWFkZXIpO1xuICB9O1xuICB2YXIgZ2V0Rm9vdGVyID0gZnVuY3Rpb24gZ2V0Rm9vdGVyKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5mb290ZXIpO1xuICB9O1xuICB2YXIgZ2V0VGltZXJQcm9ncmVzc0JhciA9IGZ1bmN0aW9uIGdldFRpbWVyUHJvZ3Jlc3NCYXIoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWyd0aW1lci1wcm9ncmVzcy1iYXInXSk7XG4gIH07XG4gIHZhciBnZXRDbG9zZUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENsb3NlQnV0dG9uKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jbG9zZSk7XG4gIH07IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qa3VwL2ZvY3VzYWJsZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuXG4gIHZhciBmb2N1c2FibGUgPSBcIlxcbiAgYVtocmVmXSxcXG4gIGFyZWFbaHJlZl0sXFxuICBpbnB1dDpub3QoW2Rpc2FibGVkXSksXFxuICBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLFxcbiAgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLFxcbiAgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSxcXG4gIGlmcmFtZSxcXG4gIG9iamVjdCxcXG4gIGVtYmVkLFxcbiAgW3RhYmluZGV4PVxcXCIwXFxcIl0sXFxuICBbY29udGVudGVkaXRhYmxlXSxcXG4gIGF1ZGlvW2NvbnRyb2xzXSxcXG4gIHZpZGVvW2NvbnRyb2xzXSxcXG4gIHN1bW1hcnlcXG5cIjtcbiAgdmFyIGdldEZvY3VzYWJsZUVsZW1lbnRzID0gZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKSB7XG4gICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4ID0gdG9BcnJheShnZXRQb3B1cCgpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKTpub3QoW3RhYmluZGV4PVwiMFwiXSknKSkgLy8gc29ydCBhY2NvcmRpbmcgdG8gdGFiaW5kZXhcbiAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgYSA9IHBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcbiAgICAgIGIgPSBwYXJzZUludChiLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSk7XG5cbiAgICAgIGlmIChhID4gYikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICB2YXIgb3RoZXJGb2N1c2FibGVFbGVtZW50cyA9IHRvQXJyYXkoZ2V0UG9wdXAoKS5xdWVyeVNlbGVjdG9yQWxsKGZvY3VzYWJsZSkpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgIT09ICctMSc7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVuaXF1ZUFycmF5KGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4LmNvbmNhdChvdGhlckZvY3VzYWJsZUVsZW1lbnRzKSkuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIGlzVmlzaWJsZShlbCk7XG4gICAgfSk7XG4gIH07XG4gIHZhciBpc01vZGFsID0gZnVuY3Rpb24gaXNNb2RhbCgpIHtcbiAgICByZXR1cm4gIWlzVG9hc3QoKSAmJiAhZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10pO1xuICB9O1xuICB2YXIgaXNUb2FzdCA9IGZ1bmN0aW9uIGlzVG9hc3QoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbiAgfTtcbiAgdmFyIGlzTG9hZGluZyA9IGZ1bmN0aW9uIGlzTG9hZGluZygpIHtcbiAgICByZXR1cm4gZ2V0UG9wdXAoKS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICB9O1xuXG4gIHZhciBzdGF0ZXMgPSB7XG4gICAgcHJldmlvdXNCb2R5UGFkZGluZzogbnVsbFxuICB9O1xuICB2YXIgc2V0SW5uZXJIdG1sID0gZnVuY3Rpb24gc2V0SW5uZXJIdG1sKGVsZW0sIGh0bWwpIHtcbiAgICAvLyAjMTkyNlxuICAgIGVsZW0udGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChodG1sKSB7XG4gICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgdmFyIHBhcnNlZCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gICAgICB0b0FycmF5KHBhcnNlZC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuY2hpbGROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICB9KTtcbiAgICAgIHRvQXJyYXkocGFyc2VkLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jaGlsZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgdmFyIGhhc0NsYXNzID0gZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NMaXN0ID0gY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc0xpc3RbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICB2YXIgcmVtb3ZlQ3VzdG9tQ2xhc3NlcyA9IGZ1bmN0aW9uIHJlbW92ZUN1c3RvbUNsYXNzZXMoZWxlbSwgcGFyYW1zKSB7XG4gICAgdG9BcnJheShlbGVtLmNsYXNzTGlzdCkuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoIShvYmplY3RWYWx1ZXMoc3dhbENsYXNzZXMpLmluZGV4T2YoY2xhc3NOYW1lKSAhPT0gLTEpICYmICEob2JqZWN0VmFsdWVzKGljb25UeXBlcykuaW5kZXhPZihjbGFzc05hbWUpICE9PSAtMSkgJiYgIShvYmplY3RWYWx1ZXMocGFyYW1zLnNob3dDbGFzcykuaW5kZXhPZihjbGFzc05hbWUpICE9PSAtMSkpIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGFwcGx5Q3VzdG9tQ2xhc3MgPSBmdW5jdGlvbiBhcHBseUN1c3RvbUNsYXNzKGVsZW0sIHBhcmFtcywgY2xhc3NOYW1lKSB7XG4gICAgcmVtb3ZlQ3VzdG9tQ2xhc3NlcyhlbGVtLCBwYXJhbXMpO1xuXG4gICAgaWYgKHBhcmFtcy5jdXN0b21DbGFzcyAmJiBwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXSkge1xuICAgICAgaWYgKHR5cGVvZiBwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXSAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdLmZvckVhY2gpIHtcbiAgICAgICAgcmV0dXJuIHdhcm4oXCJJbnZhbGlkIHR5cGUgb2YgY3VzdG9tQ2xhc3MuXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIhIEV4cGVjdGVkIHN0cmluZyBvciBpdGVyYWJsZSBvYmplY3QsIGdvdCBcXFwiXCIpLmNvbmNhdChfdHlwZW9mKHBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdKSwgXCJcXFwiXCIpKTtcbiAgICAgIH1cblxuICAgICAgYWRkQ2xhc3MoZWxlbSwgcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV0pO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gZ2V0SW5wdXQoY29udGVudCwgaW5wdXRUeXBlKSB7XG4gICAgaWYgKCFpbnB1dFR5cGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN3aXRjaCAoaW5wdXRUeXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIHJldHVybiBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXNbaW5wdXRUeXBlXSk7XG5cbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiIGlucHV0XCIpKTtcblxuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICByZXR1cm4gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYWRpbywgXCIgaW5wdXQ6Y2hlY2tlZFwiKSkgfHwgY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYWRpbywgXCIgaW5wdXQ6Zmlyc3QtY2hpbGRcIikpO1xuXG4gICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgIHJldHVybiBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBpbnB1dFwiKSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICAgIH1cbiAgfVxuICB2YXIgZm9jdXNJbnB1dCA9IGZ1bmN0aW9uIGZvY3VzSW5wdXQoaW5wdXQpIHtcbiAgICBpbnB1dC5mb2N1cygpOyAvLyBwbGFjZSBjdXJzb3IgYXQgZW5kIG9mIHRleHQgaW4gdGV4dCBpbnB1dFxuXG4gICAgaWYgKGlucHV0LnR5cGUgIT09ICdmaWxlJykge1xuICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjM0NTkxNVxuICAgICAgdmFyIHZhbCA9IGlucHV0LnZhbHVlO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGlucHV0LnZhbHVlID0gdmFsO1xuICAgIH1cbiAgfTtcbiAgdmFyIHRvZ2dsZUNsYXNzID0gZnVuY3Rpb24gdG9nZ2xlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIGNvbmRpdGlvbikge1xuICAgIGlmICghdGFyZ2V0IHx8ICFjbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNsYXNzTGlzdCA9IGNsYXNzTGlzdC5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG5cbiAgICBjbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAodGFyZ2V0LmZvckVhY2gpIHtcbiAgICAgICAgdGFyZ2V0LmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICBjb25kaXRpb24gPyBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSA6IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmRpdGlvbiA/IHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICB2YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbiBhZGRDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCkge1xuICAgIHRvZ2dsZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0LCB0cnVlKTtcbiAgfTtcbiAgdmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QpIHtcbiAgICB0b2dnbGVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgZmFsc2UpO1xuICB9O1xuICB2YXIgZ2V0Q2hpbGRCeUNsYXNzID0gZnVuY3Rpb24gZ2V0Q2hpbGRCeUNsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaGFzQ2xhc3MoZWxlbS5jaGlsZE5vZGVzW2ldLCBjbGFzc05hbWUpKSB7XG4gICAgICAgIHJldHVybiBlbGVtLmNoaWxkTm9kZXNbaV07XG4gICAgICB9XG4gICAgfVxuICB9O1xuICB2YXIgYXBwbHlOdW1lcmljYWxTdHlsZSA9IGZ1bmN0aW9uIGFwcGx5TnVtZXJpY2FsU3R5bGUoZWxlbSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBcIlwiLmNvbmNhdChwYXJzZUludCh2YWx1ZSkpKSB7XG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgfHwgcGFyc2VJbnQodmFsdWUpID09PSAwKSB7XG4gICAgICBlbGVtLnN0eWxlW3Byb3BlcnR5XSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyBcIlwiLmNvbmNhdCh2YWx1ZSwgXCJweFwiKSA6IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3BlcnR5KTtcbiAgICB9XG4gIH07XG4gIHZhciBzaG93ID0gZnVuY3Rpb24gc2hvdyhlbGVtKSB7XG4gICAgdmFyIGRpc3BsYXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdmbGV4JztcbiAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICB9O1xuICB2YXIgaGlkZSA9IGZ1bmN0aW9uIGhpZGUoZWxlbSkge1xuICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcbiAgdmFyIHNldFN0eWxlID0gZnVuY3Rpb24gc2V0U3R5bGUocGFyZW50LCBzZWxlY3RvciwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgdmFyIGVsID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5zdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9XG4gIH07XG4gIHZhciB0b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZWxlbSwgY29uZGl0aW9uLCBkaXNwbGF5KSB7XG4gICAgY29uZGl0aW9uID8gc2hvdyhlbGVtLCBkaXNwbGF5KSA6IGhpZGUoZWxlbSk7XG4gIH07IC8vIGJvcnJvd2VkIGZyb20ganF1ZXJ5ICQoZWxlbSkuaXMoJzp2aXNpYmxlJykgaW1wbGVtZW50YXRpb25cblxuICB2YXIgaXNWaXNpYmxlID0gZnVuY3Rpb24gaXNWaXNpYmxlKGVsZW0pIHtcbiAgICByZXR1cm4gISEoZWxlbSAmJiAoZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSk7XG4gIH07XG4gIHZhciBhbGxCdXR0b25zQXJlSGlkZGVuID0gZnVuY3Rpb24gYWxsQnV0dG9uc0FyZUhpZGRlbigpIHtcbiAgICByZXR1cm4gIWlzVmlzaWJsZShnZXRDb25maXJtQnV0dG9uKCkpICYmICFpc1Zpc2libGUoZ2V0RGVueUJ1dHRvbigpKSAmJiAhaXNWaXNpYmxlKGdldENhbmNlbEJ1dHRvbigpKTtcbiAgfTtcbiAgdmFyIGlzU2Nyb2xsYWJsZSA9IGZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbGVtKSB7XG4gICAgcmV0dXJuICEhKGVsZW0uc2Nyb2xsSGVpZ2h0ID4gZWxlbS5jbGllbnRIZWlnaHQpO1xuICB9OyAvLyBib3Jyb3dlZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NjM1MjExOVxuXG4gIHZhciBoYXNDc3NBbmltYXRpb24gPSBmdW5jdGlvbiBoYXNDc3NBbmltYXRpb24oZWxlbSkge1xuICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICAgIHZhciBhbmltRHVyYXRpb24gPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2FuaW1hdGlvbi1kdXJhdGlvbicpIHx8ICcwJyk7XG4gICAgdmFyIHRyYW5zRHVyYXRpb24gPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zaXRpb24tZHVyYXRpb24nKSB8fCAnMCcpO1xuICAgIHJldHVybiBhbmltRHVyYXRpb24gPiAwIHx8IHRyYW5zRHVyYXRpb24gPiAwO1xuICB9O1xuICB2YXIgY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhoYXlzdGFjaywgbmVlZGxlKSB7XG4gICAgaWYgKHR5cGVvZiBoYXlzdGFjay5jb250YWlucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGhheXN0YWNrLmNvbnRhaW5zKG5lZWRsZSk7XG4gICAgfVxuICB9O1xuICB2YXIgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIgPSBmdW5jdGlvbiBhbmltYXRlVGltZXJQcm9ncmVzc0Jhcih0aW1lcikge1xuICAgIHZhciByZXNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXIgPSBnZXRUaW1lclByb2dyZXNzQmFyKCk7XG5cbiAgICBpZiAoaXNWaXNpYmxlKHRpbWVyUHJvZ3Jlc3NCYXIpKSB7XG4gICAgICBpZiAocmVzZXQpIHtcbiAgICAgICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS50cmFuc2l0aW9uID0gXCJ3aWR0aCBcIi5jb25jYXQodGltZXIgLyAxMDAwLCBcInMgbGluZWFyXCIpO1xuICAgICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJzAlJztcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH07XG4gIHZhciBzdG9wVGltZXJQcm9ncmVzc0JhciA9IGZ1bmN0aW9uIHN0b3BUaW1lclByb2dyZXNzQmFyKCkge1xuICAgIHZhciB0aW1lclByb2dyZXNzQmFyID0gZ2V0VGltZXJQcm9ncmVzc0JhcigpO1xuICAgIHZhciB0aW1lclByb2dyZXNzQmFyV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aW1lclByb2dyZXNzQmFyKS53aWR0aCk7XG4gICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbicpO1xuICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXJGdWxsV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aW1lclByb2dyZXNzQmFyKS53aWR0aCk7XG4gICAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXJQZXJjZW50ID0gcGFyc2VJbnQodGltZXJQcm9ncmVzc0JhcldpZHRoIC8gdGltZXJQcm9ncmVzc0JhckZ1bGxXaWR0aCAqIDEwMCk7XG4gICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbicpO1xuICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBcIlwiLmNvbmNhdCh0aW1lclByb2dyZXNzQmFyUGVyY2VudCwgXCIlXCIpO1xuICB9O1xuXG4gIC8vIERldGVjdCBOb2RlIGVudlxuICB2YXIgaXNOb2RlRW52ID0gZnVuY3Rpb24gaXNOb2RlRW52KCkge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnO1xuICB9O1xuXG4gIHZhciBzd2VldEhUTUwgPSBcIlxcbiA8ZGl2IGFyaWEtbGFiZWxsZWRieT1cXFwiXCIuY29uY2F0KHN3YWxDbGFzc2VzLnRpdGxlLCBcIlxcXCIgYXJpYS1kZXNjcmliZWRieT1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250ZW50LCBcIlxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucG9wdXAsIFwiXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaGVhZGVyLCBcIlxcXCI+XFxuICAgICA8dWwgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXBzJ10sIFwiXFxcIj48L3VsPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIlxcXCI+PC9kaXY+XFxuICAgICA8aW1nIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmltYWdlLCBcIlxcXCIgLz5cXG4gICAgIDxoMiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50aXRsZSwgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnRpdGxlLCBcIlxcXCI+PC9oMj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jbG9zZSwgXCJcXFwiPjwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29udGVudCwgXCJcXFwiPlxcbiAgICAgPGRpdiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250ZW50LCBcIlxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ2h0bWwtY29udGFpbmVyJ10sIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxpbnB1dCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pbnB1dCwgXCJcXFwiIC8+XFxuICAgICA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuZmlsZSwgXCJcXFwiIC8+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIlxcXCI+XFxuICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYW5nZVxcXCIgLz5cXG4gICAgICAgPG91dHB1dD48L291dHB1dD5cXG4gICAgIDwvZGl2PlxcbiAgICAgPHNlbGVjdCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5zZWxlY3QsIFwiXFxcIj48L3NlbGVjdD5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucmFkaW8sIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxsYWJlbCBmb3I9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCJcXFwiPlxcbiAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIC8+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmxhYmVsLCBcIlxcXCI+PC9zcGFuPlxcbiAgICAgPC9sYWJlbD5cXG4gICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50ZXh0YXJlYSwgXCJcXFwiPjwvdGV4dGFyZWE+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSwgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSwgXCJcXFwiPjwvZGl2PlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuYWN0aW9ucywgXCJcXFwiPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5sb2FkZXIsIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb25maXJtLCBcIlxcXCI+PC9idXR0b24+XFxuICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuZGVueSwgXCJcXFwiPjwvYnV0dG9uPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNhbmNlbCwgXCJcXFwiPjwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuZm9vdGVyLCBcIlxcXCI+PC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sndGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciddLCBcIlxcXCI+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWyd0aW1lci1wcm9ncmVzcy1iYXInXSwgXCJcXFwiPjwvZGl2PlxcbiAgIDwvZGl2PlxcbiA8L2Rpdj5cXG5cIikucmVwbGFjZSgvKF58XFxuKVxccyovZywgJycpO1xuXG4gIHZhciByZXNldE9sZENvbnRhaW5lciA9IGZ1bmN0aW9uIHJlc2V0T2xkQ29udGFpbmVyKCkge1xuICAgIHZhciBvbGRDb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcblxuICAgIGlmICghb2xkQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb2xkQ29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob2xkQ29udGFpbmVyKTtcbiAgICByZW1vdmVDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgW3N3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSwgc3dhbENsYXNzZXNbJ2hhcy1jb2x1bW4nXV0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHZhciBvbGRJbnB1dFZhbDsgLy8gSUUxMSB3b3JrYXJvdW5kLCBzZWUgIzExMDkgZm9yIGRldGFpbHNcblxuICB2YXIgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSA9IGZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoZSkge1xuICAgIGlmIChTd2FsLmlzVmlzaWJsZSgpICYmIG9sZElucHV0VmFsICE9PSBlLnRhcmdldC52YWx1ZSkge1xuICAgICAgU3dhbC5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG4gICAgfVxuXG4gICAgb2xkSW5wdXRWYWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgfTtcblxuICB2YXIgYWRkSW5wdXRDaGFuZ2VMaXN0ZW5lcnMgPSBmdW5jdGlvbiBhZGRJbnB1dENoYW5nZUxpc3RlbmVycygpIHtcbiAgICB2YXIgY29udGVudCA9IGdldENvbnRlbnQoKTtcbiAgICB2YXIgaW5wdXQgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICAgIHZhciBmaWxlID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLmZpbGUpO1xuICAgIHZhciByYW5nZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiIGlucHV0XCIpKTtcbiAgICB2YXIgcmFuZ2VPdXRwdXQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBvdXRwdXRcIikpO1xuICAgIHZhciBzZWxlY3QgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuc2VsZWN0KTtcbiAgICB2YXIgY2hlY2tib3ggPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmNoZWNrYm94LCBcIiBpbnB1dFwiKSk7XG4gICAgdmFyIHRleHRhcmVhID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLnRleHRhcmVhKTtcbiAgICBpbnB1dC5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICBmaWxlLm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICBzZWxlY3Qub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGNoZWNrYm94Lm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICB0ZXh0YXJlYS5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcblxuICAgIHJhbmdlLm9uaW5wdXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZShlKTtcbiAgICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gICAgfTtcblxuICAgIHJhbmdlLm9uY2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoZSk7XG4gICAgICByYW5nZS5uZXh0U2libGluZy52YWx1ZSA9IHJhbmdlLnZhbHVlO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gIH07XG5cbiAgdmFyIHNldHVwQWNjZXNzaWJpbGl0eSA9IGZ1bmN0aW9uIHNldHVwQWNjZXNzaWJpbGl0eShwYXJhbXMpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgncm9sZScsIHBhcmFtcy50b2FzdCA/ICdhbGVydCcgOiAnZGlhbG9nJyk7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCBwYXJhbXMudG9hc3QgPyAncG9saXRlJyA6ICdhc3NlcnRpdmUnKTtcblxuICAgIGlmICghcGFyYW1zLnRvYXN0KSB7XG4gICAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCAndHJ1ZScpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgc2V0dXBSVEwgPSBmdW5jdGlvbiBzZXR1cFJUTCh0YXJnZXRFbGVtZW50KSB7XG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldEVsZW1lbnQpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgIGFkZENsYXNzKGdldENvbnRhaW5lcigpLCBzd2FsQ2xhc3Nlcy5ydGwpO1xuICAgIH1cbiAgfTtcbiAgLypcbiAgICogQWRkIG1vZGFsICsgYmFja2Ryb3AgdG8gRE9NXG4gICAqL1xuXG5cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiBpbml0KHBhcmFtcykge1xuICAgIC8vIENsZWFuIHVwIHRoZSBvbGQgcG9wdXAgY29udGFpbmVyIGlmIGl0IGV4aXN0c1xuICAgIHZhciBvbGRDb250YWluZXJFeGlzdGVkID0gcmVzZXRPbGRDb250YWluZXIoKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuICAgIGlmIChpc05vZGVFbnYoKSkge1xuICAgICAgZXJyb3IoJ1N3ZWV0QWxlcnQyIHJlcXVpcmVzIGRvY3VtZW50IHRvIGluaXRpYWxpemUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmNvbnRhaW5lcjtcblxuICAgIGlmIChvbGRDb250YWluZXJFeGlzdGVkKSB7XG4gICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzWyduby10cmFuc2l0aW9uJ10pO1xuICAgIH1cblxuICAgIHNldElubmVySHRtbChjb250YWluZXIsIHN3ZWV0SFRNTCk7XG4gICAgdmFyIHRhcmdldEVsZW1lbnQgPSBnZXRUYXJnZXQocGFyYW1zLnRhcmdldCk7XG4gICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHNldHVwQWNjZXNzaWJpbGl0eShwYXJhbXMpO1xuICAgIHNldHVwUlRMKHRhcmdldEVsZW1lbnQpO1xuICAgIGFkZElucHV0Q2hhbmdlTGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgdmFyIHBhcnNlSHRtbFRvQ29udGFpbmVyID0gZnVuY3Rpb24gcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW0sIHRhcmdldCkge1xuICAgIC8vIERPTSBlbGVtZW50XG4gICAgaWYgKHBhcmFtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChwYXJhbSk7IC8vIE9iamVjdFxuICAgIH0gZWxzZSBpZiAoX3R5cGVvZihwYXJhbSkgPT09ICdvYmplY3QnKSB7XG4gICAgICBoYW5kbGVPYmplY3QocGFyYW0sIHRhcmdldCk7IC8vIFBsYWluIHN0cmluZ1xuICAgIH0gZWxzZSBpZiAocGFyYW0pIHtcbiAgICAgIHNldElubmVySHRtbCh0YXJnZXQsIHBhcmFtKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZU9iamVjdCA9IGZ1bmN0aW9uIGhhbmRsZU9iamVjdChwYXJhbSwgdGFyZ2V0KSB7XG4gICAgLy8gSlF1ZXJ5IGVsZW1lbnQocylcbiAgICBpZiAocGFyYW0uanF1ZXJ5KSB7XG4gICAgICBoYW5kbGVKcXVlcnlFbGVtKHRhcmdldCwgcGFyYW0pOyAvLyBGb3Igb3RoZXIgb2JqZWN0cyB1c2UgdGhlaXIgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElubmVySHRtbCh0YXJnZXQsIHBhcmFtLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlSnF1ZXJ5RWxlbSA9IGZ1bmN0aW9uIGhhbmRsZUpxdWVyeUVsZW0odGFyZ2V0LCBlbGVtKSB7XG4gICAgdGFyZ2V0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBpZiAoMCBpbiBlbGVtKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgKGkgaW4gZWxlbSk7IGkrKykge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbVtpXS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJldmVudCBydW4gaW4gTm9kZSBlbnZcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChpc05vZGVFbnYoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgdHJhbnNFbmRFdmVudE5hbWVzID0ge1xuICAgICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQnLFxuICAgICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJ1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpIGluIHRyYW5zRW5kRXZlbnROYW1lcykge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0cmFuc0VuZEV2ZW50TmFtZXMsIGkpICYmIHR5cGVvZiB0ZXN0RWwuc3R5bGVbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB0cmFuc0VuZEV2ZW50TmFtZXNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KCk7XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL2pzL3NyYy9tb2RhbC5qc1xuXG4gIHZhciBtZWFzdXJlU2Nyb2xsYmFyID0gZnVuY3Rpb24gbWVhc3VyZVNjcm9sbGJhcigpIHtcbiAgICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzWydzY3JvbGxiYXItbWVhc3VyZSddO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICB2YXIgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbiAgfTtcblxuICB2YXIgcmVuZGVyQWN0aW9ucyA9IGZ1bmN0aW9uIHJlbmRlckFjdGlvbnMoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICAgIHZhciBsb2FkZXIgPSBnZXRMb2FkZXIoKTtcbiAgICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgICB2YXIgZGVueUJ1dHRvbiA9IGdldERlbnlCdXR0b24oKTtcbiAgICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7IC8vIEFjdGlvbnMgKGJ1dHRvbnMpIHdyYXBwZXJcblxuICAgIGlmICghcGFyYW1zLnNob3dDb25maXJtQnV0dG9uICYmICFwYXJhbXMuc2hvd0RlbnlCdXR0b24gJiYgIXBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgICBoaWRlKGFjdGlvbnMpO1xuICAgIH0gLy8gQ3VzdG9tIGNsYXNzXG5cblxuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoYWN0aW9ucywgcGFyYW1zLCAnYWN0aW9ucycpOyAvLyBSZW5kZXIgYnV0dG9uc1xuXG4gICAgcmVuZGVyQnV0dG9uKGNvbmZpcm1CdXR0b24sICdjb25maXJtJywgcGFyYW1zKTtcbiAgICByZW5kZXJCdXR0b24oZGVueUJ1dHRvbiwgJ2RlbnknLCBwYXJhbXMpO1xuICAgIHJlbmRlckJ1dHRvbihjYW5jZWxCdXR0b24sICdjYW5jZWwnLCBwYXJhbXMpO1xuICAgIGhhbmRsZUJ1dHRvbnNTdHlsaW5nKGNvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbiwgcGFyYW1zKTtcblxuICAgIGlmIChwYXJhbXMucmV2ZXJzZUJ1dHRvbnMpIHtcbiAgICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGNhbmNlbEJ1dHRvbiwgbG9hZGVyKTtcbiAgICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGRlbnlCdXR0b24sIGxvYWRlcik7XG4gICAgICBhY3Rpb25zLmluc2VydEJlZm9yZShjb25maXJtQnV0dG9uLCBsb2FkZXIpO1xuICAgIH0gLy8gTG9hZGVyXG5cblxuICAgIHNldElubmVySHRtbChsb2FkZXIsIHBhcmFtcy5sb2FkZXJIdG1sKTtcbiAgICBhcHBseUN1c3RvbUNsYXNzKGxvYWRlciwgcGFyYW1zLCAnbG9hZGVyJyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlQnV0dG9uc1N0eWxpbmcoY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgICAgcmV0dXJuIHJlbW92ZUNsYXNzKFtjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpO1xuICAgIH1cblxuICAgIGFkZENsYXNzKFtjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpOyAvLyBCdXR0b25zIGJhY2tncm91bmQgY29sb3JzXG5cbiAgICBpZiAocGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcikge1xuICAgICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuZGVueUJ1dHRvbkNvbG9yKSB7XG4gICAgICBkZW55QnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5kZW55QnV0dG9uQ29sb3I7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcikge1xuICAgICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJCdXR0b24oYnV0dG9uLCBidXR0b25UeXBlLCBwYXJhbXMpIHtcbiAgICB0b2dnbGUoYnV0dG9uLCBwYXJhbXNbXCJzaG93XCIuY29uY2F0KGNhcGl0YWxpemVGaXJzdExldHRlcihidXR0b25UeXBlKSwgXCJCdXR0b25cIildLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgc2V0SW5uZXJIdG1sKGJ1dHRvbiwgcGFyYW1zW1wiXCIuY29uY2F0KGJ1dHRvblR5cGUsIFwiQnV0dG9uVGV4dFwiKV0pOyAvLyBTZXQgY2FwdGlvbiB0ZXh0XG5cbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zW1wiXCIuY29uY2F0KGJ1dHRvblR5cGUsIFwiQnV0dG9uQXJpYUxhYmVsXCIpXSk7IC8vIEFSSUEgbGFiZWxcbiAgICAvLyBBZGQgYnV0dG9ucyBjdXN0b20gY2xhc3Nlc1xuXG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzW2J1dHRvblR5cGVdO1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoYnV0dG9uLCBwYXJhbXMsIFwiXCIuY29uY2F0KGJ1dHRvblR5cGUsIFwiQnV0dG9uXCIpKTtcbiAgICBhZGRDbGFzcyhidXR0b24sIHBhcmFtc1tcIlwiLmNvbmNhdChidXR0b25UeXBlLCBcIkJ1dHRvbkNsYXNzXCIpXSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVCYWNrZHJvcFBhcmFtKGNvbnRhaW5lciwgYmFja2Ryb3ApIHtcbiAgICBpZiAodHlwZW9mIGJhY2tkcm9wID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQgPSBiYWNrZHJvcDtcbiAgICB9IGVsc2UgaWYgKCFiYWNrZHJvcCkge1xuICAgICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQb3NpdGlvblBhcmFtKGNvbnRhaW5lciwgcG9zaXRpb24pIHtcbiAgICBpZiAocG9zaXRpb24gaW4gc3dhbENsYXNzZXMpIHtcbiAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbcG9zaXRpb25dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2FybignVGhlIFwicG9zaXRpb25cIiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLCBkZWZhdWx0aW5nIHRvIFwiY2VudGVyXCInKTtcbiAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXMuY2VudGVyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVHcm93UGFyYW0oY29udGFpbmVyLCBncm93KSB7XG4gICAgaWYgKGdyb3cgJiYgdHlwZW9mIGdyb3cgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgZ3Jvd0NsYXNzID0gXCJncm93LVwiLmNvbmNhdChncm93KTtcblxuICAgICAgaWYgKGdyb3dDbGFzcyBpbiBzd2FsQ2xhc3Nlcykge1xuICAgICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW2dyb3dDbGFzc10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciByZW5kZXJDb250YWluZXIgPSBmdW5jdGlvbiByZW5kZXJDb250YWluZXIoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcblxuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFuZGxlQmFja2Ryb3BQYXJhbShjb250YWluZXIsIHBhcmFtcy5iYWNrZHJvcCk7XG5cbiAgICBpZiAoIXBhcmFtcy5iYWNrZHJvcCAmJiBwYXJhbXMuYWxsb3dPdXRzaWRlQ2xpY2spIHtcbiAgICAgIHdhcm4oJ1wiYWxsb3dPdXRzaWRlQ2xpY2tcIiBwYXJhbWV0ZXIgcmVxdWlyZXMgYGJhY2tkcm9wYCBwYXJhbWV0ZXIgdG8gYmUgc2V0IHRvIGB0cnVlYCcpO1xuICAgIH1cblxuICAgIGhhbmRsZVBvc2l0aW9uUGFyYW0oY29udGFpbmVyLCBwYXJhbXMucG9zaXRpb24pO1xuICAgIGhhbmRsZUdyb3dQYXJhbShjb250YWluZXIsIHBhcmFtcy5ncm93KTsgLy8gQ3VzdG9tIGNsYXNzXG5cbiAgICBhcHBseUN1c3RvbUNsYXNzKGNvbnRhaW5lciwgcGFyYW1zLCAnY29udGFpbmVyJyk7IC8vIFNldCBxdWV1ZSBzdGVwIGF0dHJpYnV0ZSBmb3IgZ2V0UXVldWVTdGVwKCkgbWV0aG9kXG5cbiAgICB2YXIgcXVldWVTdGVwID0gZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcpO1xuXG4gICAgaWYgKHF1ZXVlU3RlcCkge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1xdWV1ZS1zdGVwJywgcXVldWVTdGVwKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgbW9kdWxlIGNvbnRhaW50cyBgV2Vha01hcGBzIGZvciBlYWNoIGVmZmVjdGl2ZWx5LVwicHJpdmF0ZSAgcHJvcGVydHlcIiB0aGF0IGEgYFN3YWxgIGhhcy5cbiAgICogRm9yIGV4YW1wbGUsIHRvIHNldCB0aGUgcHJpdmF0ZSBwcm9wZXJ0eSBcImZvb1wiIG9mIGB0aGlzYCB0byBcImJhclwiLCB5b3UgY2FuIGBwcml2YXRlUHJvcHMuZm9vLnNldCh0aGlzLCAnYmFyJylgXG4gICAqIFRoaXMgaXMgdGhlIGFwcHJvYWNoIHRoYXQgQmFiZWwgd2lsbCBwcm9iYWJseSB0YWtlIHRvIGltcGxlbWVudCBwcml2YXRlIG1ldGhvZHMvZmllbGRzXG4gICAqICAgaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJpdmF0ZS1tZXRob2RzXG4gICAqICAgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL3B1bGwvNzU1NVxuICAgKiBPbmNlIHdlIGhhdmUgdGhlIGNoYW5nZXMgZnJvbSB0aGF0IFBSIGluIEJhYmVsLCBhbmQgb3VyIGNvcmUgY2xhc3MgZml0cyByZWFzb25hYmxlIGluICpvbmUgbW9kdWxlKlxuICAgKiAgIHRoZW4gd2UgY2FuIHVzZSB0aGF0IGxhbmd1YWdlIGZlYXR1cmUuXG4gICAqL1xuICB2YXIgcHJpdmF0ZVByb3BzID0ge1xuICAgIHByb21pc2U6IG5ldyBXZWFrTWFwKCksXG4gICAgaW5uZXJQYXJhbXM6IG5ldyBXZWFrTWFwKCksXG4gICAgZG9tQ2FjaGU6IG5ldyBXZWFrTWFwKClcbiAgfTtcblxuICB2YXIgaW5wdXRUeXBlcyA9IFsnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAndGV4dGFyZWEnXTtcbiAgdmFyIHJlbmRlcklucHV0ID0gZnVuY3Rpb24gcmVuZGVySW5wdXQoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICAgIHZhciByZXJlbmRlciA9ICFpbm5lclBhcmFtcyB8fCBwYXJhbXMuaW5wdXQgIT09IGlubmVyUGFyYW1zLmlucHV0O1xuICAgIGlucHV0VHlwZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRUeXBlKSB7XG4gICAgICB2YXIgaW5wdXRDbGFzcyA9IHN3YWxDbGFzc2VzW2lucHV0VHlwZV07XG4gICAgICB2YXIgaW5wdXRDb250YWluZXIgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgaW5wdXRDbGFzcyk7IC8vIHNldCBhdHRyaWJ1dGVzXG5cbiAgICAgIHNldEF0dHJpYnV0ZXMoaW5wdXRUeXBlLCBwYXJhbXMuaW5wdXRBdHRyaWJ1dGVzKTsgLy8gc2V0IGNsYXNzXG5cbiAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTmFtZSA9IGlucHV0Q2xhc3M7XG5cbiAgICAgIGlmIChyZXJlbmRlcikge1xuICAgICAgICBoaWRlKGlucHV0Q29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXJhbXMuaW5wdXQpIHtcbiAgICAgIGlmIChyZXJlbmRlcikge1xuICAgICAgICBzaG93SW5wdXQocGFyYW1zKTtcbiAgICAgIH0gLy8gc2V0IGN1c3RvbSBjbGFzc1xuXG5cbiAgICAgIHNldEN1c3RvbUNsYXNzKHBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBzaG93SW5wdXQgPSBmdW5jdGlvbiBzaG93SW5wdXQocGFyYW1zKSB7XG4gICAgaWYgKCFyZW5kZXJJbnB1dFR5cGVbcGFyYW1zLmlucHV0XSkge1xuICAgICAgcmV0dXJuIGVycm9yKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0ISBFeHBlY3RlZCBcXFwidGV4dFxcXCIsIFxcXCJlbWFpbFxcXCIsIFxcXCJwYXNzd29yZFxcXCIsIFxcXCJudW1iZXJcXFwiLCBcXFwidGVsXFxcIiwgXFxcInNlbGVjdFxcXCIsIFxcXCJyYWRpb1xcXCIsIFxcXCJjaGVja2JveFxcXCIsIFxcXCJ0ZXh0YXJlYVxcXCIsIFxcXCJmaWxlXFxcIiBvciBcXFwidXJsXFxcIiwgZ290IFxcXCJcIi5jb25jYXQocGFyYW1zLmlucHV0LCBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIHZhciBpbnB1dENvbnRhaW5lciA9IGdldElucHV0Q29udGFpbmVyKHBhcmFtcy5pbnB1dCk7XG4gICAgdmFyIGlucHV0ID0gcmVuZGVySW5wdXRUeXBlW3BhcmFtcy5pbnB1dF0oaW5wdXRDb250YWluZXIsIHBhcmFtcyk7XG4gICAgc2hvdyhpbnB1dCk7IC8vIGlucHV0IGF1dG9mb2N1c1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBmb2N1c0lucHV0KGlucHV0KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmVtb3ZlQXR0cmlidXRlcyA9IGZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZXMoaW5wdXQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBhdHRyTmFtZSA9IGlucHV0LmF0dHJpYnV0ZXNbaV0ubmFtZTtcblxuICAgICAgaWYgKCEoWyd0eXBlJywgJ3ZhbHVlJywgJ3N0eWxlJ10uaW5kZXhPZihhdHRyTmFtZSkgIT09IC0xKSkge1xuICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoaW5wdXRUeXBlLCBpbnB1dEF0dHJpYnV0ZXMpIHtcbiAgICB2YXIgaW5wdXQgPSBnZXRJbnB1dChnZXRDb250ZW50KCksIGlucHV0VHlwZSk7XG5cbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVtb3ZlQXR0cmlidXRlcyhpbnB1dCk7XG5cbiAgICBmb3IgKHZhciBhdHRyIGluIGlucHV0QXR0cmlidXRlcykge1xuICAgICAgLy8gRG8gbm90IHNldCBhIHBsYWNlaG9sZGVyIGZvciA8aW5wdXQgdHlwZT1cInJhbmdlXCI+XG4gICAgICAvLyBpdCdsbCBjcmFzaCBFZGdlLCAjMTI5OFxuICAgICAgaWYgKGlucHV0VHlwZSA9PT0gJ3JhbmdlJyAmJiBhdHRyID09PSAncGxhY2Vob2xkZXInKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYXR0ciwgaW5wdXRBdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNldEN1c3RvbUNsYXNzID0gZnVuY3Rpb24gc2V0Q3VzdG9tQ2xhc3MocGFyYW1zKSB7XG4gICAgdmFyIGlucHV0Q29udGFpbmVyID0gZ2V0SW5wdXRDb250YWluZXIocGFyYW1zLmlucHV0KTtcblxuICAgIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MpIHtcbiAgICAgIGFkZENsYXNzKGlucHV0Q29udGFpbmVyLCBwYXJhbXMuY3VzdG9tQ2xhc3MuaW5wdXQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgc2V0SW5wdXRQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcykge1xuICAgIGlmICghaW5wdXQucGxhY2Vob2xkZXIgfHwgcGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgfVxuICB9O1xuXG4gIHZhciBzZXRJbnB1dExhYmVsID0gZnVuY3Rpb24gc2V0SW5wdXRMYWJlbChpbnB1dCwgcHJlcGVuZFRvLCBwYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zLmlucHV0TGFiZWwpIHtcbiAgICAgIGlucHV0LmlkID0gc3dhbENsYXNzZXMuaW5wdXQ7XG4gICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgdmFyIGxhYmVsQ2xhc3MgPSBzd2FsQ2xhc3Nlc1snaW5wdXQtbGFiZWwnXTtcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXQuaWQpO1xuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gbGFiZWxDbGFzcztcbiAgICAgIGFkZENsYXNzKGxhYmVsLCBwYXJhbXMuY3VzdG9tQ2xhc3MuaW5wdXRMYWJlbCk7XG4gICAgICBsYWJlbC5pbm5lclRleHQgPSBwYXJhbXMuaW5wdXRMYWJlbDtcbiAgICAgIHByZXBlbmRUby5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgbGFiZWwpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZ2V0SW5wdXRDb250YWluZXIgPSBmdW5jdGlvbiBnZXRJbnB1dENvbnRhaW5lcihpbnB1dFR5cGUpIHtcbiAgICB2YXIgaW5wdXRDbGFzcyA9IHN3YWxDbGFzc2VzW2lucHV0VHlwZV0gPyBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVdIDogc3dhbENsYXNzZXMuaW5wdXQ7XG4gICAgcmV0dXJuIGdldENoaWxkQnlDbGFzcyhnZXRDb250ZW50KCksIGlucHV0Q2xhc3MpO1xuICB9O1xuXG4gIHZhciByZW5kZXJJbnB1dFR5cGUgPSB7fTtcblxuICByZW5kZXJJbnB1dFR5cGUudGV4dCA9IHJlbmRlcklucHV0VHlwZS5lbWFpbCA9IHJlbmRlcklucHV0VHlwZS5wYXNzd29yZCA9IHJlbmRlcklucHV0VHlwZS5udW1iZXIgPSByZW5kZXJJbnB1dFR5cGUudGVsID0gcmVuZGVySW5wdXRUeXBlLnVybCA9IGZ1bmN0aW9uIChpbnB1dCwgcGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuaW5wdXRWYWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHBhcmFtcy5pbnB1dFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgaW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKCFpc1Byb21pc2UocGFyYW1zLmlucHV0VmFsdWUpKSB7XG4gICAgICB3YXJuKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0VmFsdWUhIEV4cGVjdGVkIFxcXCJzdHJpbmdcXFwiLCBcXFwibnVtYmVyXFxcIiBvciBcXFwiUHJvbWlzZVxcXCIsIGdvdCBcXFwiXCIuY29uY2F0KF90eXBlb2YocGFyYW1zLmlucHV0VmFsdWUpLCBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIHNldElucHV0TGFiZWwoaW5wdXQsIGlucHV0LCBwYXJhbXMpO1xuICAgIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcyk7XG4gICAgaW5wdXQudHlwZSA9IHBhcmFtcy5pbnB1dDtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH07XG5cbiAgcmVuZGVySW5wdXRUeXBlLmZpbGUgPSBmdW5jdGlvbiAoaW5wdXQsIHBhcmFtcykge1xuICAgIHNldElucHV0TGFiZWwoaW5wdXQsIGlucHV0LCBwYXJhbXMpO1xuICAgIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcyk7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9O1xuXG4gIHJlbmRlcklucHV0VHlwZS5yYW5nZSA9IGZ1bmN0aW9uIChyYW5nZSwgcGFyYW1zKSB7XG4gICAgdmFyIHJhbmdlSW5wdXQgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIHZhciByYW5nZU91dHB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ291dHB1dCcpO1xuICAgIHJhbmdlSW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICByYW5nZUlucHV0LnR5cGUgPSBwYXJhbXMuaW5wdXQ7XG4gICAgcmFuZ2VPdXRwdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICBzZXRJbnB1dExhYmVsKHJhbmdlSW5wdXQsIHJhbmdlLCBwYXJhbXMpO1xuICAgIHJldHVybiByYW5nZTtcbiAgfTtcblxuICByZW5kZXJJbnB1dFR5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKHNlbGVjdCwgcGFyYW1zKSB7XG4gICAgc2VsZWN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBpZiAocGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICAgIHZhciBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgc2V0SW5uZXJIdG1sKHBsYWNlaG9sZGVyLCBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcik7XG4gICAgICBwbGFjZWhvbGRlci52YWx1ZSA9ICcnO1xuICAgICAgcGxhY2Vob2xkZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcGxhY2Vob2xkZXIuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcbiAgICB9XG5cbiAgICBzZXRJbnB1dExhYmVsKHNlbGVjdCwgc2VsZWN0LCBwYXJhbXMpO1xuICAgIHJldHVybiBzZWxlY3Q7XG4gIH07XG5cbiAgcmVuZGVySW5wdXRUeXBlLnJhZGlvID0gZnVuY3Rpb24gKHJhZGlvKSB7XG4gICAgcmFkaW8udGV4dENvbnRlbnQgPSAnJztcbiAgICByZXR1cm4gcmFkaW87XG4gIH07XG5cbiAgcmVuZGVySW5wdXRUeXBlLmNoZWNrYm94ID0gZnVuY3Rpb24gKGNoZWNrYm94Q29udGFpbmVyLCBwYXJhbXMpIHtcbiAgICB2YXIgY2hlY2tib3ggPSBnZXRJbnB1dChnZXRDb250ZW50KCksICdjaGVja2JveCcpO1xuICAgIGNoZWNrYm94LnZhbHVlID0gMTtcbiAgICBjaGVja2JveC5pZCA9IHN3YWxDbGFzc2VzLmNoZWNrYm94O1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBCb29sZWFuKHBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgICB2YXIgbGFiZWwgPSBjaGVja2JveENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgc2V0SW5uZXJIdG1sKGxhYmVsLCBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcik7XG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyO1xuICB9O1xuXG4gIHJlbmRlcklucHV0VHlwZS50ZXh0YXJlYSA9IGZ1bmN0aW9uICh0ZXh0YXJlYSwgcGFyYW1zKSB7XG4gICAgdGV4dGFyZWEudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICBzZXRJbnB1dFBsYWNlaG9sZGVyKHRleHRhcmVhLCBwYXJhbXMpO1xuICAgIHNldElucHV0TGFiZWwodGV4dGFyZWEsIHRleHRhcmVhLCBwYXJhbXMpO1xuXG4gICAgdmFyIGdldFBhZGRpbmcgPSBmdW5jdGlvbiBnZXRQYWRkaW5nKGVsKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLnBhZGRpbmdMZWZ0KSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5wYWRkaW5nUmlnaHQpO1xuICAgIH07XG5cbiAgICBpZiAoJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuICAgICAgLy8gIzE2OTlcbiAgICAgIHZhciBpbml0aWFsUG9wdXBXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGdldFBvcHVwKCkpLndpZHRoKTtcblxuICAgICAgdmFyIG91dHB1dHNpemUgPSBmdW5jdGlvbiBvdXRwdXRzaXplKCkge1xuICAgICAgICB2YXIgY29udGVudFdpZHRoID0gdGV4dGFyZWEub2Zmc2V0V2lkdGggKyBnZXRQYWRkaW5nKGdldFBvcHVwKCkpICsgZ2V0UGFkZGluZyhnZXRDb250ZW50KCkpO1xuXG4gICAgICAgIGlmIChjb250ZW50V2lkdGggPiBpbml0aWFsUG9wdXBXaWR0aCkge1xuICAgICAgICAgIGdldFBvcHVwKCkuc3R5bGUud2lkdGggPSBcIlwiLmNvbmNhdChjb250ZW50V2lkdGgsIFwicHhcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2V0UG9wdXAoKS5zdHlsZS53aWR0aCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKG91dHB1dHNpemUpLm9ic2VydmUodGV4dGFyZWEsIHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbJ3N0eWxlJ11cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0YXJlYTtcbiAgfTtcblxuICB2YXIgcmVuZGVyQ29udGVudCA9IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBodG1sQ29udGFpbmVyID0gZ2V0SHRtbENvbnRhaW5lcigpO1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoaHRtbENvbnRhaW5lciwgcGFyYW1zLCAnaHRtbENvbnRhaW5lcicpOyAvLyBDb250ZW50IGFzIEhUTUxcblxuICAgIGlmIChwYXJhbXMuaHRtbCkge1xuICAgICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLmh0bWwsIGh0bWxDb250YWluZXIpO1xuICAgICAgc2hvdyhodG1sQ29udGFpbmVyLCAnYmxvY2snKTsgLy8gQ29udGVudCBhcyBwbGFpbiB0ZXh0XG4gICAgfSBlbHNlIGlmIChwYXJhbXMudGV4dCkge1xuICAgICAgaHRtbENvbnRhaW5lci50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0O1xuICAgICAgc2hvdyhodG1sQ29udGFpbmVyLCAnYmxvY2snKTsgLy8gTm8gY29udGVudFxuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlKGh0bWxDb250YWluZXIpO1xuICAgIH1cblxuICAgIHJlbmRlcklucHV0KGluc3RhbmNlLCBwYXJhbXMpOyAvLyBDdXN0b20gY2xhc3NcblxuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoZ2V0Q29udGVudCgpLCBwYXJhbXMsICdjb250ZW50Jyk7XG4gIH07XG5cbiAgdmFyIHJlbmRlckZvb3RlciA9IGZ1bmN0aW9uIHJlbmRlckZvb3RlcihpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIGZvb3RlciA9IGdldEZvb3RlcigpO1xuICAgIHRvZ2dsZShmb290ZXIsIHBhcmFtcy5mb290ZXIpO1xuXG4gICAgaWYgKHBhcmFtcy5mb290ZXIpIHtcbiAgICAgIHBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtcy5mb290ZXIsIGZvb3Rlcik7XG4gICAgfSAvLyBDdXN0b20gY2xhc3NcblxuXG4gICAgYXBwbHlDdXN0b21DbGFzcyhmb290ZXIsIHBhcmFtcywgJ2Zvb3RlcicpO1xuICB9O1xuXG4gIHZhciByZW5kZXJDbG9zZUJ1dHRvbiA9IGZ1bmN0aW9uIHJlbmRlckNsb3NlQnV0dG9uKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgY2xvc2VCdXR0b24gPSBnZXRDbG9zZUJ1dHRvbigpO1xuICAgIHNldElubmVySHRtbChjbG9zZUJ1dHRvbiwgcGFyYW1zLmNsb3NlQnV0dG9uSHRtbCk7IC8vIEN1c3RvbSBjbGFzc1xuXG4gICAgYXBwbHlDdXN0b21DbGFzcyhjbG9zZUJ1dHRvbiwgcGFyYW1zLCAnY2xvc2VCdXR0b24nKTtcbiAgICB0b2dnbGUoY2xvc2VCdXR0b24sIHBhcmFtcy5zaG93Q2xvc2VCdXR0b24pO1xuICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jbG9zZUJ1dHRvbkFyaWFMYWJlbCk7XG4gIH07XG5cbiAgdmFyIHJlbmRlckljb24gPSBmdW5jdGlvbiByZW5kZXJJY29uKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcbiAgICB2YXIgaWNvbiA9IGdldEljb24oKTsgLy8gaWYgdGhlIGdpdmVuIGljb24gYWxyZWFkeSByZW5kZXJlZCwgYXBwbHkgdGhlIHN0eWxpbmcgd2l0aG91dCByZS1yZW5kZXJpbmcgdGhlIGljb25cblxuICAgIGlmIChpbm5lclBhcmFtcyAmJiBwYXJhbXMuaWNvbiA9PT0gaW5uZXJQYXJhbXMuaWNvbikge1xuICAgICAgLy8gQ3VzdG9tIG9yIGRlZmF1bHQgY29udGVudFxuICAgICAgc2V0Q29udGVudChpY29uLCBwYXJhbXMpO1xuICAgICAgYXBwbHlTdHlsZXMoaWNvbiwgcGFyYW1zKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXBhcmFtcy5pY29uICYmICFwYXJhbXMuaWNvbkh0bWwpIHtcbiAgICAgIHJldHVybiBoaWRlKGljb24pO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuaWNvbiAmJiBPYmplY3Qua2V5cyhpY29uVHlwZXMpLmluZGV4T2YocGFyYW1zLmljb24pID09PSAtMSkge1xuICAgICAgZXJyb3IoXCJVbmtub3duIGljb24hIEV4cGVjdGVkIFxcXCJzdWNjZXNzXFxcIiwgXFxcImVycm9yXFxcIiwgXFxcIndhcm5pbmdcXFwiLCBcXFwiaW5mb1xcXCIgb3IgXFxcInF1ZXN0aW9uXFxcIiwgZ290IFxcXCJcIi5jb25jYXQocGFyYW1zLmljb24sIFwiXFxcIlwiKSk7XG4gICAgICByZXR1cm4gaGlkZShpY29uKTtcbiAgICB9XG5cbiAgICBzaG93KGljb24pOyAvLyBDdXN0b20gb3IgZGVmYXVsdCBjb250ZW50XG5cbiAgICBzZXRDb250ZW50KGljb24sIHBhcmFtcyk7XG4gICAgYXBwbHlTdHlsZXMoaWNvbiwgcGFyYW1zKTsgLy8gQW5pbWF0ZSBpY29uXG5cbiAgICBhZGRDbGFzcyhpY29uLCBwYXJhbXMuc2hvd0NsYXNzLmljb24pO1xuICB9O1xuXG4gIHZhciBhcHBseVN0eWxlcyA9IGZ1bmN0aW9uIGFwcGx5U3R5bGVzKGljb24sIHBhcmFtcykge1xuICAgIGZvciAodmFyIGljb25UeXBlIGluIGljb25UeXBlcykge1xuICAgICAgaWYgKHBhcmFtcy5pY29uICE9PSBpY29uVHlwZSkge1xuICAgICAgICByZW1vdmVDbGFzcyhpY29uLCBpY29uVHlwZXNbaWNvblR5cGVdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDbGFzcyhpY29uLCBpY29uVHlwZXNbcGFyYW1zLmljb25dKTsgLy8gSWNvbiBjb2xvclxuXG4gICAgc2V0Q29sb3IoaWNvbiwgcGFyYW1zKTsgLy8gU3VjY2VzcyBpY29uIGJhY2tncm91bmQgY29sb3JcblxuICAgIGFkanVzdFN1Y2Nlc3NJY29uQmFja2dvdW5kQ29sb3IoKTsgLy8gQ3VzdG9tIGNsYXNzXG5cbiAgICBhcHBseUN1c3RvbUNsYXNzKGljb24sIHBhcmFtcywgJ2ljb24nKTtcbiAgfTsgLy8gQWRqdXN0IHN1Y2Nlc3MgaWNvbiBiYWNrZ3JvdW5kIGNvbG9yIHRvIG1hdGNoIHRoZSBwb3B1cCBiYWNrZ3JvdW5kIGNvbG9yXG5cblxuICB2YXIgYWRqdXN0U3VjY2Vzc0ljb25CYWNrZ291bmRDb2xvciA9IGZ1bmN0aW9uIGFkanVzdFN1Y2Nlc3NJY29uQmFja2dvdW5kQ29sb3IoKSB7XG4gICAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICB2YXIgcG9wdXBCYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwb3B1cCkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgIHZhciBzdWNjZXNzSWNvblBhcnRzID0gcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdLCAuc3dhbDItc3VjY2Vzcy1maXgnKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3VjY2Vzc0ljb25QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgc3VjY2Vzc0ljb25QYXJ0c1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwb3B1cEJhY2tncm91bmRDb2xvcjtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNldENvbnRlbnQgPSBmdW5jdGlvbiBzZXRDb250ZW50KGljb24sIHBhcmFtcykge1xuICAgIGljb24udGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChwYXJhbXMuaWNvbkh0bWwpIHtcbiAgICAgIHNldElubmVySHRtbChpY29uLCBpY29uQ29udGVudChwYXJhbXMuaWNvbkh0bWwpKTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5pY29uID09PSAnc3VjY2VzcycpIHtcbiAgICAgIHNldElubmVySHRtbChpY29uLCBcIlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1sZWZ0XFxcIj48L2Rpdj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1saW5lLXRpcFxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1saW5lLWxvbmdcXFwiPjwvc3Bhbj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLXJpbmdcXFwiPjwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWZpeFxcXCI+PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0XFxcIj48L2Rpdj5cXG4gICAgXCIpO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmljb24gPT09ICdlcnJvcicpIHtcbiAgICAgIHNldElubmVySHRtbChpY29uLCBcIlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJzd2FsMi14LW1hcmtcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFyay1saW5lLWxlZnRcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzd2FsMi14LW1hcmstbGluZS1yaWdodFxcXCI+PC9zcGFuPlxcbiAgICAgIDwvc3Bhbj5cXG4gICAgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZGVmYXVsdEljb25IdG1sID0ge1xuICAgICAgICBxdWVzdGlvbjogJz8nLFxuICAgICAgICB3YXJuaW5nOiAnIScsXG4gICAgICAgIGluZm86ICdpJ1xuICAgICAgfTtcbiAgICAgIHNldElubmVySHRtbChpY29uLCBpY29uQ29udGVudChkZWZhdWx0SWNvbkh0bWxbcGFyYW1zLmljb25dKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBzZXRDb2xvciA9IGZ1bmN0aW9uIHNldENvbG9yKGljb24sIHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zLmljb25Db2xvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGljb24uc3R5bGUuY29sb3IgPSBwYXJhbXMuaWNvbkNvbG9yO1xuICAgIGljb24uc3R5bGUuYm9yZGVyQ29sb3IgPSBwYXJhbXMuaWNvbkNvbG9yO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYXJyID0gWycuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCcsICcuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcnLCAnLnN3YWwyLXgtbWFyay1saW5lLWxlZnQnLCAnLnN3YWwyLXgtbWFyay1saW5lLXJpZ2h0J107IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBzZWwgPSBfYXJyW19pXTtcbiAgICAgIHNldFN0eWxlKGljb24sIHNlbCwgJ2JhY2tncm91bmRDb2xvcicsIHBhcmFtcy5pY29uQ29sb3IpO1xuICAgIH1cblxuICAgIHNldFN0eWxlKGljb24sICcuc3dhbDItc3VjY2Vzcy1yaW5nJywgJ2JvcmRlckNvbG9yJywgcGFyYW1zLmljb25Db2xvcik7XG4gIH07XG5cbiAgdmFyIGljb25Db250ZW50ID0gZnVuY3Rpb24gaWNvbkNvbnRlbnQoY29udGVudCkge1xuICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcIlwiLmNvbmNhdChzd2FsQ2xhc3Nlc1snaWNvbi1jb250ZW50J10sIFwiXFxcIj5cIikuY29uY2F0KGNvbnRlbnQsIFwiPC9kaXY+XCIpO1xuICB9O1xuXG4gIHZhciByZW5kZXJJbWFnZSA9IGZ1bmN0aW9uIHJlbmRlckltYWdlKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgaW1hZ2UgPSBnZXRJbWFnZSgpO1xuXG4gICAgaWYgKCFwYXJhbXMuaW1hZ2VVcmwpIHtcbiAgICAgIHJldHVybiBoaWRlKGltYWdlKTtcbiAgICB9XG5cbiAgICBzaG93KGltYWdlLCAnJyk7IC8vIFNyYywgYWx0XG5cbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBhcmFtcy5pbWFnZVVybCk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBwYXJhbXMuaW1hZ2VBbHQpOyAvLyBXaWR0aCwgaGVpZ2h0XG5cbiAgICBhcHBseU51bWVyaWNhbFN0eWxlKGltYWdlLCAnd2lkdGgnLCBwYXJhbXMuaW1hZ2VXaWR0aCk7XG4gICAgYXBwbHlOdW1lcmljYWxTdHlsZShpbWFnZSwgJ2hlaWdodCcsIHBhcmFtcy5pbWFnZUhlaWdodCk7IC8vIENsYXNzXG5cbiAgICBpbWFnZS5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5pbWFnZTtcbiAgICBhcHBseUN1c3RvbUNsYXNzKGltYWdlLCBwYXJhbXMsICdpbWFnZScpO1xuICB9O1xuXG4gIHZhciBjdXJyZW50U3RlcHMgPSBbXTtcbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIGZvciBjaGFpbmluZyBzd2VldEFsZXJ0IHBvcHVwc1xuICAgKi9cblxuICB2YXIgcXVldWUgPSBmdW5jdGlvbiBxdWV1ZShzdGVwcykge1xuICAgIHZhciBTd2FsID0gdGhpcztcbiAgICBjdXJyZW50U3RlcHMgPSBzdGVwcztcblxuICAgIHZhciByZXNldEFuZFJlc29sdmUgPSBmdW5jdGlvbiByZXNldEFuZFJlc29sdmUocmVzb2x2ZSwgdmFsdWUpIHtcbiAgICAgIGN1cnJlbnRTdGVwcyA9IFtdO1xuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfTtcblxuICAgIHZhciBxdWV1ZVJlc3VsdCA9IFtdO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgKGZ1bmN0aW9uIHN0ZXAoaSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGkgPCBjdXJyZW50U3RlcHMubGVuZ3RoKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcsIGkpO1xuICAgICAgICAgIFN3YWwuZmlyZShjdXJyZW50U3RlcHNbaV0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQudmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHF1ZXVlUmVzdWx0LnB1c2gocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgc3RlcChpICsgMSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzZXRBbmRSZXNvbHZlKHJlc29sdmUsIHtcbiAgICAgICAgICAgICAgICBkaXNtaXNzOiByZXN1bHQuZGlzbWlzc1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNldEFuZFJlc29sdmUocmVzb2x2ZSwge1xuICAgICAgICAgICAgdmFsdWU6IHF1ZXVlUmVzdWx0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pKDApO1xuICAgIH0pO1xuICB9O1xuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGdldHRpbmcgdGhlIGluZGV4IG9mIGN1cnJlbnQgcG9wdXAgaW4gcXVldWVcbiAgICovXG5cbiAgdmFyIGdldFF1ZXVlU3RlcCA9IGZ1bmN0aW9uIGdldFF1ZXVlU3RlcCgpIHtcbiAgICByZXR1cm4gZ2V0Q29udGFpbmVyKCkgJiYgZ2V0Q29udGFpbmVyKCkuZ2V0QXR0cmlidXRlKCdkYXRhLXF1ZXVlLXN0ZXAnKTtcbiAgfTtcbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIGZvciBpbnNlcnRpbmcgYSBwb3B1cCB0byB0aGUgcXVldWVcbiAgICovXG5cbiAgdmFyIGluc2VydFF1ZXVlU3RlcCA9IGZ1bmN0aW9uIGluc2VydFF1ZXVlU3RlcChzdGVwLCBpbmRleCkge1xuICAgIGlmIChpbmRleCAmJiBpbmRleCA8IGN1cnJlbnRTdGVwcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBjdXJyZW50U3RlcHMuc3BsaWNlKGluZGV4LCAwLCBzdGVwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudFN0ZXBzLnB1c2goc3RlcCk7XG4gIH07XG4gIC8qXG4gICAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgZGVsZXRpbmcgYSBwb3B1cCBmcm9tIHRoZSBxdWV1ZVxuICAgKi9cblxuICB2YXIgZGVsZXRlUXVldWVTdGVwID0gZnVuY3Rpb24gZGVsZXRlUXVldWVTdGVwKGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50U3RlcHNbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY3VycmVudFN0ZXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjcmVhdGVTdGVwRWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZVN0ZXBFbGVtZW50KHN0ZXApIHtcbiAgICB2YXIgc3RlcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhZGRDbGFzcyhzdGVwRWwsIHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwJ10pO1xuICAgIHNldElubmVySHRtbChzdGVwRWwsIHN0ZXApO1xuICAgIHJldHVybiBzdGVwRWw7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUxpbmVFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlTGluZUVsZW1lbnQocGFyYW1zKSB7XG4gICAgdmFyIGxpbmVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYWRkQ2xhc3MobGluZUVsLCBzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcC1saW5lJ10pO1xuXG4gICAgaWYgKHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2UpIHtcbiAgICAgIGxpbmVFbC5zdHlsZS53aWR0aCA9IHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVFbDtcbiAgfTtcblxuICB2YXIgcmVuZGVyUHJvZ3Jlc3NTdGVwcyA9IGZ1bmN0aW9uIHJlbmRlclByb2dyZXNzU3RlcHMoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyID0gZ2V0UHJvZ3Jlc3NTdGVwcygpO1xuXG4gICAgaWYgKCFwYXJhbXMucHJvZ3Jlc3NTdGVwcyB8fCBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBoaWRlKHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICAgIH1cblxuICAgIHNob3cocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgIHZhciBjdXJyZW50UHJvZ3Jlc3NTdGVwID0gcGFyc2VJbnQocGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXAgPT09IHVuZGVmaW5lZCA/IGdldFF1ZXVlU3RlcCgpIDogcGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXApO1xuXG4gICAgaWYgKGN1cnJlbnRQcm9ncmVzc1N0ZXAgPj0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoKSB7XG4gICAgICB3YXJuKCdJbnZhbGlkIGN1cnJlbnRQcm9ncmVzc1N0ZXAgcGFyYW1ldGVyLCBpdCBzaG91bGQgYmUgbGVzcyB0aGFuIHByb2dyZXNzU3RlcHMubGVuZ3RoICcgKyAnKGN1cnJlbnRQcm9ncmVzc1N0ZXAgbGlrZSBKUyBhcnJheXMgc3RhcnRzIGZyb20gMCknKTtcbiAgICB9XG5cbiAgICBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5mb3JFYWNoKGZ1bmN0aW9uIChzdGVwLCBpbmRleCkge1xuICAgICAgdmFyIHN0ZXBFbCA9IGNyZWF0ZVN0ZXBFbGVtZW50KHN0ZXApO1xuICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGVwRWwpO1xuXG4gICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRQcm9ncmVzc1N0ZXApIHtcbiAgICAgICAgYWRkQ2xhc3Moc3RlcEVsLCBzd2FsQ2xhc3Nlc1snYWN0aXZlLXByb2dyZXNzLXN0ZXAnXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCAhPT0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgICB2YXIgbGluZUVsID0gY3JlYXRlTGluZUVsZW1lbnQocGFyYW1zKTtcbiAgICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lRWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciByZW5kZXJUaXRsZSA9IGZ1bmN0aW9uIHJlbmRlclRpdGxlKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgdGl0bGUgPSBnZXRUaXRsZSgpO1xuICAgIHRvZ2dsZSh0aXRsZSwgcGFyYW1zLnRpdGxlIHx8IHBhcmFtcy50aXRsZVRleHQpO1xuXG4gICAgaWYgKHBhcmFtcy50aXRsZSkge1xuICAgICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLnRpdGxlLCB0aXRsZSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50aXRsZVRleHQpIHtcbiAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHBhcmFtcy50aXRsZVRleHQ7XG4gICAgfSAvLyBDdXN0b20gY2xhc3NcblxuXG4gICAgYXBwbHlDdXN0b21DbGFzcyh0aXRsZSwgcGFyYW1zLCAndGl0bGUnKTtcbiAgfTtcblxuICB2YXIgcmVuZGVySGVhZGVyID0gZnVuY3Rpb24gcmVuZGVySGVhZGVyKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgaGVhZGVyID0gZ2V0SGVhZGVyKCk7IC8vIEN1c3RvbSBjbGFzc1xuXG4gICAgYXBwbHlDdXN0b21DbGFzcyhoZWFkZXIsIHBhcmFtcywgJ2hlYWRlcicpOyAvLyBQcm9ncmVzcyBzdGVwc1xuXG4gICAgcmVuZGVyUHJvZ3Jlc3NTdGVwcyhpbnN0YW5jZSwgcGFyYW1zKTsgLy8gSWNvblxuXG4gICAgcmVuZGVySWNvbihpbnN0YW5jZSwgcGFyYW1zKTsgLy8gSW1hZ2VcblxuICAgIHJlbmRlckltYWdlKGluc3RhbmNlLCBwYXJhbXMpOyAvLyBUaXRsZVxuXG4gICAgcmVuZGVyVGl0bGUoaW5zdGFuY2UsIHBhcmFtcyk7IC8vIENsb3NlIGJ1dHRvblxuXG4gICAgcmVuZGVyQ2xvc2VCdXR0b24oaW5zdGFuY2UsIHBhcmFtcyk7XG4gIH07XG5cbiAgdmFyIHJlbmRlclBvcHVwID0gZnVuY3Rpb24gcmVuZGVyUG9wdXAoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpOyAvLyBXaWR0aFxuXG4gICAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgICAgLy8gIzIxNzBcbiAgICAgIGFwcGx5TnVtZXJpY2FsU3R5bGUoY29udGFpbmVyLCAnd2lkdGgnLCBwYXJhbXMud2lkdGgpO1xuICAgICAgcG9wdXAuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcGx5TnVtZXJpY2FsU3R5bGUocG9wdXAsICd3aWR0aCcsIHBhcmFtcy53aWR0aCk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIGFwcGx5TnVtZXJpY2FsU3R5bGUocG9wdXAsICdwYWRkaW5nJywgcGFyYW1zLnBhZGRpbmcpOyAvLyBCYWNrZ3JvdW5kXG5cbiAgICBpZiAocGFyYW1zLmJhY2tncm91bmQpIHtcbiAgICAgIHBvcHVwLnN0eWxlLmJhY2tncm91bmQgPSBwYXJhbXMuYmFja2dyb3VuZDtcbiAgICB9IC8vIENsYXNzZXNcblxuXG4gICAgYWRkQ2xhc3Nlcyhwb3B1cCwgcGFyYW1zKTtcbiAgfTtcblxuICB2YXIgYWRkQ2xhc3NlcyA9IGZ1bmN0aW9uIGFkZENsYXNzZXMocG9wdXAsIHBhcmFtcykge1xuICAgIC8vIERlZmF1bHQgQ2xhc3MgKyBzaG93Q2xhc3Mgd2hlbiB1cGRhdGluZyBTd2FsLnVwZGF0ZSh7fSlcbiAgICBwb3B1cC5jbGFzc05hbWUgPSBcIlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5wb3B1cCwgXCIgXCIpLmNvbmNhdChpc1Zpc2libGUocG9wdXApID8gcGFyYW1zLnNob3dDbGFzcy5wb3B1cCA6ICcnKTtcblxuICAgIGlmIChwYXJhbXMudG9hc3QpIHtcbiAgICAgIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSk7XG4gICAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMudG9hc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubW9kYWwpO1xuICAgIH0gLy8gQ3VzdG9tIGNsYXNzXG5cblxuICAgIGFwcGx5Q3VzdG9tQ2xhc3MocG9wdXAsIHBhcmFtcywgJ3BvcHVwJyk7XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtcy5jdXN0b21DbGFzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBwYXJhbXMuY3VzdG9tQ2xhc3MpO1xuICAgIH0gLy8gSWNvbiBjbGFzcyAoIzE4NDIpXG5cblxuICAgIGlmIChwYXJhbXMuaWNvbikge1xuICAgICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzW1wiaWNvbi1cIi5jb25jYXQocGFyYW1zLmljb24pXSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHJlbmRlclBvcHVwKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckNvbnRhaW5lcihpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJIZWFkZXIoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyQ29udGVudChpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJBY3Rpb25zKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckZvb3RlcihpbnN0YW5jZSwgcGFyYW1zKTtcblxuICAgIGlmICh0eXBlb2YgcGFyYW1zLmRpZFJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGFyYW1zLmRpZFJlbmRlcihnZXRQb3B1cCgpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMub25SZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBhcmFtcy5vblJlbmRlcihnZXRQb3B1cCgpKTsgLy8gQGRlcHJlY2F0ZWRcbiAgICB9XG4gIH07XG5cbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBTd2VldEFsZXJ0MiBwb3B1cCBpcyBzaG93blxuICAgKi9cblxuICB2YXIgaXNWaXNpYmxlJDEgPSBmdW5jdGlvbiBpc1Zpc2libGUkJDEoKSB7XG4gICAgcmV0dXJuIGlzVmlzaWJsZShnZXRQb3B1cCgpKTtcbiAgfTtcbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDb25maXJtJyBidXR0b25cbiAgICovXG5cbiAgdmFyIGNsaWNrQ29uZmlybSA9IGZ1bmN0aW9uIGNsaWNrQ29uZmlybSgpIHtcbiAgICByZXR1cm4gZ2V0Q29uZmlybUJ1dHRvbigpICYmIGdldENvbmZpcm1CdXR0b24oKS5jbGljaygpO1xuICB9O1xuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0RlbnknIGJ1dHRvblxuICAgKi9cblxuICB2YXIgY2xpY2tEZW55ID0gZnVuY3Rpb24gY2xpY2tEZW55KCkge1xuICAgIHJldHVybiBnZXREZW55QnV0dG9uKCkgJiYgZ2V0RGVueUJ1dHRvbigpLmNsaWNrKCk7XG4gIH07XG4gIC8qXG4gICAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ2FuY2VsJyBidXR0b25cbiAgICovXG5cbiAgdmFyIGNsaWNrQ2FuY2VsID0gZnVuY3Rpb24gY2xpY2tDYW5jZWwoKSB7XG4gICAgcmV0dXJuIGdldENhbmNlbEJ1dHRvbigpICYmIGdldENhbmNlbEJ1dHRvbigpLmNsaWNrKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZmlyZSgpIHtcbiAgICB2YXIgU3dhbCA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jb25zdHJ1Y3QoU3dhbCwgYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBleHRlbmRlZCB2ZXJzaW9uIG9mIGBTd2FsYCBjb250YWluaW5nIGBwYXJhbXNgIGFzIGRlZmF1bHRzLlxuICAgKiBVc2VmdWwgZm9yIHJldXNpbmcgU3dhbCBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogQmVmb3JlOlxuICAgKiBjb25zdCB0ZXh0UHJvbXB0T3B0aW9ucyA9IHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9XG4gICAqIGNvbnN0IHt2YWx1ZTogZmlyc3ROYW1lfSA9IGF3YWl0IFN3YWwuZmlyZSh7IC4uLnRleHRQcm9tcHRPcHRpb25zLCB0aXRsZTogJ1doYXQgaXMgeW91ciBmaXJzdCBuYW1lPycgfSlcbiAgICogY29uc3Qge3ZhbHVlOiBsYXN0TmFtZX0gPSBhd2FpdCBTd2FsLmZpcmUoeyAuLi50ZXh0UHJvbXB0T3B0aW9ucywgdGl0bGU6ICdXaGF0IGlzIHlvdXIgbGFzdCBuYW1lPycgfSlcbiAgICpcbiAgICogQWZ0ZXI6XG4gICAqIGNvbnN0IFRleHRQcm9tcHQgPSBTd2FsLm1peGluKHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9KVxuICAgKiBjb25zdCB7dmFsdWU6IGZpcnN0TmFtZX0gPSBhd2FpdCBUZXh0UHJvbXB0KCdXaGF0IGlzIHlvdXIgZmlyc3QgbmFtZT8nKVxuICAgKiBjb25zdCB7dmFsdWU6IGxhc3ROYW1lfSA9IGF3YWl0IFRleHRQcm9tcHQoJ1doYXQgaXMgeW91ciBsYXN0IG5hbWU/JylcbiAgICpcbiAgICogQHBhcmFtIG1peGluUGFyYW1zXG4gICAqL1xuICBmdW5jdGlvbiBtaXhpbihtaXhpblBhcmFtcykge1xuICAgIHZhciBNaXhpblN3YWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF90aGlzKSB7XG4gICAgICBfaW5oZXJpdHMoTWl4aW5Td2FsLCBfdGhpcyk7XG5cbiAgICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWl4aW5Td2FsKTtcblxuICAgICAgZnVuY3Rpb24gTWl4aW5Td2FsKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWl4aW5Td2FsKTtcblxuICAgICAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhNaXhpblN3YWwsIFt7XG4gICAgICAgIGtleTogXCJfbWFpblwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21haW4ocGFyYW1zLCBwcmlvcml0eU1peGluUGFyYW1zKSB7XG4gICAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1peGluU3dhbC5wcm90b3R5cGUpLCBcIl9tYWluXCIsIHRoaXMpLmNhbGwodGhpcywgcGFyYW1zLCBfZXh0ZW5kcyh7fSwgbWl4aW5QYXJhbXMsIHByaW9yaXR5TWl4aW5QYXJhbXMpKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gTWl4aW5Td2FsO1xuICAgIH0odGhpcyk7XG5cbiAgICByZXR1cm4gTWl4aW5Td2FsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIGxvYWRlciAoc3Bpbm5lciksIHRoaXMgaXMgdXNlZnVsIHdpdGggQUpBWCByZXF1ZXN0cy5cbiAgICogQnkgZGVmYXVsdCB0aGUgbG9hZGVyIGJlIHNob3duIGluc3RlYWQgb2YgdGhlIFwiQ29uZmlybVwiIGJ1dHRvbi5cbiAgICovXG5cbiAgdmFyIHNob3dMb2FkaW5nID0gZnVuY3Rpb24gc2hvd0xvYWRpbmcoYnV0dG9uVG9SZXBsYWNlKSB7XG4gICAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcblxuICAgIGlmICghcG9wdXApIHtcbiAgICAgIFN3YWwuZmlyZSgpO1xuICAgIH1cblxuICAgIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICB2YXIgYWN0aW9ucyA9IGdldEFjdGlvbnMoKTtcbiAgICB2YXIgbG9hZGVyID0gZ2V0TG9hZGVyKCk7XG5cbiAgICBpZiAoIWJ1dHRvblRvUmVwbGFjZSAmJiBpc1Zpc2libGUoZ2V0Q29uZmlybUJ1dHRvbigpKSkge1xuICAgICAgYnV0dG9uVG9SZXBsYWNlID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIH1cblxuICAgIHNob3coYWN0aW9ucyk7XG5cbiAgICBpZiAoYnV0dG9uVG9SZXBsYWNlKSB7XG4gICAgICBoaWRlKGJ1dHRvblRvUmVwbGFjZSk7XG4gICAgICBsb2FkZXIuc2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbi10by1yZXBsYWNlJywgYnV0dG9uVG9SZXBsYWNlLmNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgbG9hZGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxvYWRlciwgYnV0dG9uVG9SZXBsYWNlKTtcbiAgICBhZGRDbGFzcyhbcG9wdXAsIGFjdGlvbnNdLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKTtcbiAgICBzaG93KGxvYWRlcik7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnLCB0cnVlKTtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYnVzeScsIHRydWUpO1xuICAgIHBvcHVwLmZvY3VzKCk7XG4gIH07XG5cbiAgdmFyIFJFU1RPUkVfRk9DVVNfVElNRU9VVCA9IDEwMDtcblxuICB2YXIgZ2xvYmFsU3RhdGUgPSB7fTtcblxuICB2YXIgZm9jdXNQcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBmdW5jdGlvbiBmb2N1c1ByZXZpb3VzQWN0aXZlRWxlbWVudCgpIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50ICYmIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cykge1xuICAgICAgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgIH1cbiAgfTsgLy8gUmVzdG9yZSBwcmV2aW91cyBhY3RpdmUgKGZvY3VzZWQpIGVsZW1lbnRcblxuXG4gIHZhciByZXN0b3JlQWN0aXZlRWxlbWVudCA9IGZ1bmN0aW9uIHJlc3RvcmVBY3RpdmVFbGVtZW50KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgdmFyIHggPSB3aW5kb3cuc2Nyb2xsWDtcbiAgICAgIHZhciB5ID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBnbG9iYWxTdGF0ZS5yZXN0b3JlRm9jdXNUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvY3VzUHJldmlvdXNBY3RpdmVFbGVtZW50KCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIFJFU1RPUkVfRk9DVVNfVElNRU9VVCk7IC8vIGlzc3Vlcy85MDBcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cbiAgICAgIGlmICh0eXBlb2YgeCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIElFIGRvZXNuJ3QgaGF2ZSBzY3JvbGxYL3Njcm9sbFkgc3VwcG9ydFxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeCwgeSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzIHNldCwgcmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICAgKiBPdGhlcndpc2UsIHJldHVybnMgdW5kZWZpbmVkLlxuICAgKi9cblxuICB2YXIgZ2V0VGltZXJMZWZ0ID0gZnVuY3Rpb24gZ2V0VGltZXJMZWZ0KCkge1xuICAgIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0ICYmIGdsb2JhbFN0YXRlLnRpbWVvdXQuZ2V0VGltZXJMZWZ0KCk7XG4gIH07XG4gIC8qKlxuICAgKiBTdG9wIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gICAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gICAqL1xuXG4gIHZhciBzdG9wVGltZXIgPSBmdW5jdGlvbiBzdG9wVGltZXIoKSB7XG4gICAgaWYgKGdsb2JhbFN0YXRlLnRpbWVvdXQpIHtcbiAgICAgIHN0b3BUaW1lclByb2dyZXNzQmFyKCk7XG4gICAgICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dC5zdG9wKCk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogUmVzdW1lIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gICAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gICAqL1xuXG4gIHZhciByZXN1bWVUaW1lciA9IGZ1bmN0aW9uIHJlc3VtZVRpbWVyKCkge1xuICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgICB2YXIgcmVtYWluaW5nID0gZ2xvYmFsU3RhdGUudGltZW91dC5zdGFydCgpO1xuICAgICAgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIocmVtYWluaW5nKTtcbiAgICAgIHJldHVybiByZW1haW5pbmc7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogUmVzdW1lIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gICAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gICAqL1xuXG4gIHZhciB0b2dnbGVUaW1lciA9IGZ1bmN0aW9uIHRvZ2dsZVRpbWVyKCkge1xuICAgIHZhciB0aW1lciA9IGdsb2JhbFN0YXRlLnRpbWVvdXQ7XG4gICAgcmV0dXJuIHRpbWVyICYmICh0aW1lci5ydW5uaW5nID8gc3RvcFRpbWVyKCkgOiByZXN1bWVUaW1lcigpKTtcbiAgfTtcbiAgLyoqXG4gICAqIEluY3JlYXNlIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgYW4gdXBkYXRlZCB0aW1lci5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICovXG5cbiAgdmFyIGluY3JlYXNlVGltZXIgPSBmdW5jdGlvbiBpbmNyZWFzZVRpbWVyKG4pIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgICAgdmFyIHJlbWFpbmluZyA9IGdsb2JhbFN0YXRlLnRpbWVvdXQuaW5jcmVhc2Uobik7XG4gICAgICBhbmltYXRlVGltZXJQcm9ncmVzc0JhcihyZW1haW5pbmcsIHRydWUpO1xuICAgICAgcmV0dXJuIHJlbWFpbmluZztcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aW1lciBpcyBydW5uaW5nLiBSZXR1cm5zIHRydWUgaWYgdGltZXIgaXMgcnVubmluZ1xuICAgKiBvciBmYWxzZSBpZiB0aW1lciBpcyBwYXVzZWQgb3Igc3RvcHBlZC5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZFxuICAgKi9cblxuICB2YXIgaXNUaW1lclJ1bm5pbmcgPSBmdW5jdGlvbiBpc1RpbWVyUnVubmluZygpIHtcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LmlzUnVubmluZygpO1xuICB9O1xuXG4gIHZhciBib2R5Q2xpY2tMaXN0ZW5lckFkZGVkID0gZmFsc2U7XG4gIHZhciBjbGlja0hhbmRsZXJzID0ge307XG4gIGZ1bmN0aW9uIGJpbmRDbGlja0hhbmRsZXIoKSB7XG4gICAgdmFyIGF0dHIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdkYXRhLXN3YWwtdGVtcGxhdGUnO1xuICAgIGNsaWNrSGFuZGxlcnNbYXR0cl0gPSB0aGlzO1xuXG4gICAgaWYgKCFib2R5Q2xpY2tMaXN0ZW5lckFkZGVkKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm9keUNsaWNrTGlzdGVuZXIpO1xuICAgICAgYm9keUNsaWNrTGlzdGVuZXJBZGRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJvZHlDbGlja0xpc3RlbmVyID0gZnVuY3Rpb24gYm9keUNsaWNrTGlzdGVuZXIoZXZlbnQpIHtcbiAgICAvLyAxLiB1c2luZyAucGFyZW50Tm9kZSBpbnN0ZWFkIG9mIGV2ZW50LnBhdGggYmVjYXVzZSBvZiBiZXR0ZXIgc3VwcG9ydCBieSBvbGQgYnJvd3NlcnMgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5MjQ1NjM4XG4gICAgLy8gMi4gdXNpbmcgLnBhcmVudE5vZGUgaW5zdGVhZCBvZiAucGFyZW50RWxlbWVudCBiZWNhdXNlIG9mIElFMTEgKyBTVkcgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM2MjcwMzU0XG4gICAgZm9yICh2YXIgZWwgPSBldmVudC50YXJnZXQ7IGVsICYmIGVsICE9PSBkb2N1bWVudDsgZWwgPSBlbC5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKHZhciBhdHRyIGluIGNsaWNrSGFuZGxlcnMpIHtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gZWwuZ2V0QXR0cmlidXRlKGF0dHIpO1xuXG4gICAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICAgIGNsaWNrSGFuZGxlcnNbYXR0cl0uZmlyZSh7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRQYXJhbXMgPSB7XG4gICAgdGl0bGU6ICcnLFxuICAgIHRpdGxlVGV4dDogJycsXG4gICAgdGV4dDogJycsXG4gICAgaHRtbDogJycsXG4gICAgZm9vdGVyOiAnJyxcbiAgICBpY29uOiB1bmRlZmluZWQsXG4gICAgaWNvbkNvbG9yOiB1bmRlZmluZWQsXG4gICAgaWNvbkh0bWw6IHVuZGVmaW5lZCxcbiAgICB0ZW1wbGF0ZTogdW5kZWZpbmVkLFxuICAgIHRvYXN0OiBmYWxzZSxcbiAgICBhbmltYXRpb246IHRydWUsXG4gICAgc2hvd0NsYXNzOiB7XG4gICAgICBwb3B1cDogJ3N3YWwyLXNob3cnLFxuICAgICAgYmFja2Ryb3A6ICdzd2FsMi1iYWNrZHJvcC1zaG93JyxcbiAgICAgIGljb246ICdzd2FsMi1pY29uLXNob3cnXG4gICAgfSxcbiAgICBoaWRlQ2xhc3M6IHtcbiAgICAgIHBvcHVwOiAnc3dhbDItaGlkZScsXG4gICAgICBiYWNrZHJvcDogJ3N3YWwyLWJhY2tkcm9wLWhpZGUnLFxuICAgICAgaWNvbjogJ3N3YWwyLWljb24taGlkZSdcbiAgICB9LFxuICAgIGN1c3RvbUNsYXNzOiB7fSxcbiAgICB0YXJnZXQ6ICdib2R5JyxcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBoZWlnaHRBdXRvOiB0cnVlLFxuICAgIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgIGFsbG93RXNjYXBlS2V5OiB0cnVlLFxuICAgIGFsbG93RW50ZXJLZXk6IHRydWUsXG4gICAgc3RvcEtleWRvd25Qcm9wYWdhdGlvbjogdHJ1ZSxcbiAgICBrZXlkb3duTGlzdGVuZXJDYXB0dXJlOiBmYWxzZSxcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcbiAgICBzaG93RGVueUJ1dHRvbjogZmFsc2UsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gICAgcHJlQ29uZmlybTogdW5kZWZpbmVkLFxuICAgIHByZURlbnk6IHVuZGVmaW5lZCxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICBjb25maXJtQnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6IHVuZGVmaW5lZCxcbiAgICBkZW55QnV0dG9uVGV4dDogJ05vJyxcbiAgICBkZW55QnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgICBkZW55QnV0dG9uQ29sb3I6IHVuZGVmaW5lZCxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6ICcnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiB1bmRlZmluZWQsXG4gICAgYnV0dG9uc1N0eWxpbmc6IHRydWUsXG4gICAgcmV2ZXJzZUJ1dHRvbnM6IGZhbHNlLFxuICAgIGZvY3VzQ29uZmlybTogdHJ1ZSxcbiAgICBmb2N1c0Rlbnk6IGZhbHNlLFxuICAgIGZvY3VzQ2FuY2VsOiBmYWxzZSxcbiAgICBzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxuICAgIGNsb3NlQnV0dG9uSHRtbDogJyZ0aW1lczsnLFxuICAgIGNsb3NlQnV0dG9uQXJpYUxhYmVsOiAnQ2xvc2UgdGhpcyBkaWFsb2cnLFxuICAgIGxvYWRlckh0bWw6ICcnLFxuICAgIHNob3dMb2FkZXJPbkNvbmZpcm06IGZhbHNlLFxuICAgIHNob3dMb2FkZXJPbkRlbnk6IGZhbHNlLFxuICAgIGltYWdlVXJsOiB1bmRlZmluZWQsXG4gICAgaW1hZ2VXaWR0aDogdW5kZWZpbmVkLFxuICAgIGltYWdlSGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgaW1hZ2VBbHQ6ICcnLFxuICAgIHRpbWVyOiB1bmRlZmluZWQsXG4gICAgdGltZXJQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICBwYWRkaW5nOiB1bmRlZmluZWQsXG4gICAgYmFja2dyb3VuZDogdW5kZWZpbmVkLFxuICAgIGlucHV0OiB1bmRlZmluZWQsXG4gICAgaW5wdXRQbGFjZWhvbGRlcjogJycsXG4gICAgaW5wdXRMYWJlbDogJycsXG4gICAgaW5wdXRWYWx1ZTogJycsXG4gICAgaW5wdXRPcHRpb25zOiB7fSxcbiAgICBpbnB1dEF1dG9UcmltOiB0cnVlLFxuICAgIGlucHV0QXR0cmlidXRlczoge30sXG4gICAgaW5wdXRWYWxpZGF0b3I6IHVuZGVmaW5lZCxcbiAgICByZXR1cm5JbnB1dFZhbHVlT25EZW55OiBmYWxzZSxcbiAgICB2YWxpZGF0aW9uTWVzc2FnZTogdW5kZWZpbmVkLFxuICAgIGdyb3c6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICBwcm9ncmVzc1N0ZXBzOiBbXSxcbiAgICBjdXJyZW50UHJvZ3Jlc3NTdGVwOiB1bmRlZmluZWQsXG4gICAgcHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlOiB1bmRlZmluZWQsXG4gICAgb25CZWZvcmVPcGVuOiB1bmRlZmluZWQsXG4gICAgb25PcGVuOiB1bmRlZmluZWQsXG4gICAgd2lsbE9wZW46IHVuZGVmaW5lZCxcbiAgICBkaWRPcGVuOiB1bmRlZmluZWQsXG4gICAgb25SZW5kZXI6IHVuZGVmaW5lZCxcbiAgICBkaWRSZW5kZXI6IHVuZGVmaW5lZCxcbiAgICBvbkNsb3NlOiB1bmRlZmluZWQsXG4gICAgb25BZnRlckNsb3NlOiB1bmRlZmluZWQsXG4gICAgd2lsbENsb3NlOiB1bmRlZmluZWQsXG4gICAgZGlkQ2xvc2U6IHVuZGVmaW5lZCxcbiAgICBvbkRlc3Ryb3k6IHVuZGVmaW5lZCxcbiAgICBkaWREZXN0cm95OiB1bmRlZmluZWQsXG4gICAgc2Nyb2xsYmFyUGFkZGluZzogdHJ1ZVxuICB9O1xuICB2YXIgdXBkYXRhYmxlUGFyYW1zID0gWydhbGxvd0VzY2FwZUtleScsICdhbGxvd091dHNpZGVDbGljaycsICdiYWNrZ3JvdW5kJywgJ2J1dHRvbnNTdHlsaW5nJywgJ2NhbmNlbEJ1dHRvbkFyaWFMYWJlbCcsICdjYW5jZWxCdXR0b25Db2xvcicsICdjYW5jZWxCdXR0b25UZXh0JywgJ2Nsb3NlQnV0dG9uQXJpYUxhYmVsJywgJ2Nsb3NlQnV0dG9uSHRtbCcsICdjb25maXJtQnV0dG9uQXJpYUxhYmVsJywgJ2NvbmZpcm1CdXR0b25Db2xvcicsICdjb25maXJtQnV0dG9uVGV4dCcsICdjdXJyZW50UHJvZ3Jlc3NTdGVwJywgJ2N1c3RvbUNsYXNzJywgJ2RlbnlCdXR0b25BcmlhTGFiZWwnLCAnZGVueUJ1dHRvbkNvbG9yJywgJ2RlbnlCdXR0b25UZXh0JywgJ2RpZENsb3NlJywgJ2RpZERlc3Ryb3knLCAnZm9vdGVyJywgJ2hpZGVDbGFzcycsICdodG1sJywgJ2ljb24nLCAnaWNvbkNvbG9yJywgJ2ljb25IdG1sJywgJ2ltYWdlQWx0JywgJ2ltYWdlSGVpZ2h0JywgJ2ltYWdlVXJsJywgJ2ltYWdlV2lkdGgnLCAnb25BZnRlckNsb3NlJywgJ29uQ2xvc2UnLCAnb25EZXN0cm95JywgJ3Byb2dyZXNzU3RlcHMnLCAncmV2ZXJzZUJ1dHRvbnMnLCAnc2hvd0NhbmNlbEJ1dHRvbicsICdzaG93Q2xvc2VCdXR0b24nLCAnc2hvd0NvbmZpcm1CdXR0b24nLCAnc2hvd0RlbnlCdXR0b24nLCAndGV4dCcsICd0aXRsZScsICd0aXRsZVRleHQnLCAnd2lsbENsb3NlJ107XG4gIHZhciBkZXByZWNhdGVkUGFyYW1zID0ge1xuICAgIGFuaW1hdGlvbjogJ3Nob3dDbGFzc1wiIGFuZCBcImhpZGVDbGFzcycsXG4gICAgb25CZWZvcmVPcGVuOiAnd2lsbE9wZW4nLFxuICAgIG9uT3BlbjogJ2RpZE9wZW4nLFxuICAgIG9uUmVuZGVyOiAnZGlkUmVuZGVyJyxcbiAgICBvbkNsb3NlOiAnd2lsbENsb3NlJyxcbiAgICBvbkFmdGVyQ2xvc2U6ICdkaWRDbG9zZScsXG4gICAgb25EZXN0cm95OiAnZGlkRGVzdHJveSdcbiAgfTtcbiAgdmFyIHRvYXN0SW5jb21wYXRpYmxlUGFyYW1zID0gWydhbGxvd091dHNpZGVDbGljaycsICdhbGxvd0VudGVyS2V5JywgJ2JhY2tkcm9wJywgJ2ZvY3VzQ29uZmlybScsICdmb2N1c0RlbnknLCAnZm9jdXNDYW5jZWwnLCAnaGVpZ2h0QXV0bycsICdrZXlkb3duTGlzdGVuZXJDYXB0dXJlJ107XG4gIC8qKlxuICAgKiBJcyB2YWxpZCBwYXJhbWV0ZXJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZVxuICAgKi9cblxuICB2YXIgaXNWYWxpZFBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzVmFsaWRQYXJhbWV0ZXIocGFyYW1OYW1lKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZWZhdWx0UGFyYW1zLCBwYXJhbU5hbWUpO1xuICB9O1xuICAvKipcbiAgICogSXMgdmFsaWQgcGFyYW1ldGVyIGZvciBTd2FsLnVwZGF0ZSgpIG1ldGhvZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lXG4gICAqL1xuXG4gIHZhciBpc1VwZGF0YWJsZVBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzVXBkYXRhYmxlUGFyYW1ldGVyKHBhcmFtTmFtZSkge1xuICAgIHJldHVybiB1cGRhdGFibGVQYXJhbXMuaW5kZXhPZihwYXJhbU5hbWUpICE9PSAtMTtcbiAgfTtcbiAgLyoqXG4gICAqIElzIGRlcHJlY2F0ZWQgcGFyYW1ldGVyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAgICovXG5cbiAgdmFyIGlzRGVwcmVjYXRlZFBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzRGVwcmVjYXRlZFBhcmFtZXRlcihwYXJhbU5hbWUpIHtcbiAgICByZXR1cm4gZGVwcmVjYXRlZFBhcmFtc1twYXJhbU5hbWVdO1xuICB9O1xuXG4gIHZhciBjaGVja0lmUGFyYW1Jc1ZhbGlkID0gZnVuY3Rpb24gY2hlY2tJZlBhcmFtSXNWYWxpZChwYXJhbSkge1xuICAgIGlmICghaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgIHdhcm4oXCJVbmtub3duIHBhcmFtZXRlciBcXFwiXCIuY29uY2F0KHBhcmFtLCBcIlxcXCJcIikpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY2hlY2tJZlRvYXN0UGFyYW1Jc1ZhbGlkID0gZnVuY3Rpb24gY2hlY2tJZlRvYXN0UGFyYW1Jc1ZhbGlkKHBhcmFtKSB7XG4gICAgaWYgKHRvYXN0SW5jb21wYXRpYmxlUGFyYW1zLmluZGV4T2YocGFyYW0pICE9PSAtMSkge1xuICAgICAgd2FybihcIlRoZSBwYXJhbWV0ZXIgXFxcIlwiLmNvbmNhdChwYXJhbSwgXCJcXFwiIGlzIGluY29tcGF0aWJsZSB3aXRoIHRvYXN0c1wiKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQgPSBmdW5jdGlvbiBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQocGFyYW0pIHtcbiAgICBpZiAoaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgd2FybkFib3V0RGVwcmVjYXRpb24ocGFyYW0sIGlzRGVwcmVjYXRlZFBhcmFtZXRlcihwYXJhbSkpO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFNob3cgcmVsZXZhbnQgd2FybmluZ3MgZm9yIGdpdmVuIHBhcmFtc1xuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zXG4gICAqL1xuXG5cbiAgdmFyIHNob3dXYXJuaW5nc0ZvclBhcmFtcyA9IGZ1bmN0aW9uIHNob3dXYXJuaW5nc0ZvclBhcmFtcyhwYXJhbXMpIHtcbiAgICBmb3IgKHZhciBwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICAgIGNoZWNrSWZQYXJhbUlzVmFsaWQocGFyYW0pO1xuXG4gICAgICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgICAgIGNoZWNrSWZUb2FzdFBhcmFtSXNWYWxpZChwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIGNoZWNrSWZQYXJhbUlzRGVwcmVjYXRlZChwYXJhbSk7XG4gICAgfVxuICB9O1xuXG5cblxuICB2YXIgc3RhdGljTWV0aG9kcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBpc1ZhbGlkUGFyYW1ldGVyOiBpc1ZhbGlkUGFyYW1ldGVyLFxuICAgIGlzVXBkYXRhYmxlUGFyYW1ldGVyOiBpc1VwZGF0YWJsZVBhcmFtZXRlcixcbiAgICBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXI6IGlzRGVwcmVjYXRlZFBhcmFtZXRlcixcbiAgICBhcmdzVG9QYXJhbXM6IGFyZ3NUb1BhcmFtcyxcbiAgICBpc1Zpc2libGU6IGlzVmlzaWJsZSQxLFxuICAgIGNsaWNrQ29uZmlybTogY2xpY2tDb25maXJtLFxuICAgIGNsaWNrRGVueTogY2xpY2tEZW55LFxuICAgIGNsaWNrQ2FuY2VsOiBjbGlja0NhbmNlbCxcbiAgICBnZXRDb250YWluZXI6IGdldENvbnRhaW5lcixcbiAgICBnZXRQb3B1cDogZ2V0UG9wdXAsXG4gICAgZ2V0VGl0bGU6IGdldFRpdGxlLFxuICAgIGdldENvbnRlbnQ6IGdldENvbnRlbnQsXG4gICAgZ2V0SHRtbENvbnRhaW5lcjogZ2V0SHRtbENvbnRhaW5lcixcbiAgICBnZXRJbWFnZTogZ2V0SW1hZ2UsXG4gICAgZ2V0SWNvbjogZ2V0SWNvbixcbiAgICBnZXRJbnB1dExhYmVsOiBnZXRJbnB1dExhYmVsLFxuICAgIGdldENsb3NlQnV0dG9uOiBnZXRDbG9zZUJ1dHRvbixcbiAgICBnZXRBY3Rpb25zOiBnZXRBY3Rpb25zLFxuICAgIGdldENvbmZpcm1CdXR0b246IGdldENvbmZpcm1CdXR0b24sXG4gICAgZ2V0RGVueUJ1dHRvbjogZ2V0RGVueUJ1dHRvbixcbiAgICBnZXRDYW5jZWxCdXR0b246IGdldENhbmNlbEJ1dHRvbixcbiAgICBnZXRMb2FkZXI6IGdldExvYWRlcixcbiAgICBnZXRIZWFkZXI6IGdldEhlYWRlcixcbiAgICBnZXRGb290ZXI6IGdldEZvb3RlcixcbiAgICBnZXRUaW1lclByb2dyZXNzQmFyOiBnZXRUaW1lclByb2dyZXNzQmFyLFxuICAgIGdldEZvY3VzYWJsZUVsZW1lbnRzOiBnZXRGb2N1c2FibGVFbGVtZW50cyxcbiAgICBnZXRWYWxpZGF0aW9uTWVzc2FnZTogZ2V0VmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgaXNMb2FkaW5nOiBpc0xvYWRpbmcsXG4gICAgZmlyZTogZmlyZSxcbiAgICBtaXhpbjogbWl4aW4sXG4gICAgcXVldWU6IHF1ZXVlLFxuICAgIGdldFF1ZXVlU3RlcDogZ2V0UXVldWVTdGVwLFxuICAgIGluc2VydFF1ZXVlU3RlcDogaW5zZXJ0UXVldWVTdGVwLFxuICAgIGRlbGV0ZVF1ZXVlU3RlcDogZGVsZXRlUXVldWVTdGVwLFxuICAgIHNob3dMb2FkaW5nOiBzaG93TG9hZGluZyxcbiAgICBlbmFibGVMb2FkaW5nOiBzaG93TG9hZGluZyxcbiAgICBnZXRUaW1lckxlZnQ6IGdldFRpbWVyTGVmdCxcbiAgICBzdG9wVGltZXI6IHN0b3BUaW1lcixcbiAgICByZXN1bWVUaW1lcjogcmVzdW1lVGltZXIsXG4gICAgdG9nZ2xlVGltZXI6IHRvZ2dsZVRpbWVyLFxuICAgIGluY3JlYXNlVGltZXI6IGluY3JlYXNlVGltZXIsXG4gICAgaXNUaW1lclJ1bm5pbmc6IGlzVGltZXJSdW5uaW5nLFxuICAgIGJpbmRDbGlja0hhbmRsZXI6IGJpbmRDbGlja0hhbmRsZXJcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEhpZGVzIGxvYWRlciBhbmQgc2hvd3MgYmFjayB0aGUgYnV0dG9uIHdoaWNoIHdhcyBoaWRkZW4gYnkgLnNob3dMb2FkaW5nKClcbiAgICovXG5cbiAgZnVuY3Rpb24gaGlkZUxvYWRpbmcoKSB7XG4gICAgLy8gZG8gbm90aGluZyBpZiBwb3B1cCBpcyBjbG9zZWRcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuXG4gICAgaWYgKCFpbm5lclBhcmFtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gICAgaGlkZShkb21DYWNoZS5sb2FkZXIpO1xuICAgIHZhciBidXR0b25Ub1JlcGxhY2UgPSBkb21DYWNoZS5wb3B1cC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGRvbUNhY2hlLmxvYWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uLXRvLXJlcGxhY2UnKSk7XG5cbiAgICBpZiAoYnV0dG9uVG9SZXBsYWNlLmxlbmd0aCkge1xuICAgICAgc2hvdyhidXR0b25Ub1JlcGxhY2VbMF0sICdpbmxpbmUtYmxvY2snKTtcbiAgICB9IGVsc2UgaWYgKGFsbEJ1dHRvbnNBcmVIaWRkZW4oKSkge1xuICAgICAgaGlkZShkb21DYWNoZS5hY3Rpb25zKTtcbiAgICB9XG5cbiAgICByZW1vdmVDbGFzcyhbZG9tQ2FjaGUucG9wdXAsIGRvbUNhY2hlLmFjdGlvbnNdLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKTtcbiAgICBkb21DYWNoZS5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYnVzeScpO1xuICAgIGRvbUNhY2hlLnBvcHVwLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGRvbUNhY2hlLmRlbnlCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldElucHV0JDEoaW5zdGFuY2UpIHtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlIHx8IHRoaXMpO1xuICAgIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQoaW5zdGFuY2UgfHwgdGhpcyk7XG5cbiAgICBpZiAoIWRvbUNhY2hlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0SW5wdXQoZG9tQ2FjaGUuY29udGVudCwgaW5uZXJQYXJhbXMuaW5wdXQpO1xuICB9XG5cbiAgdmFyIGZpeFNjcm9sbGJhciA9IGZ1bmN0aW9uIGZpeFNjcm9sbGJhcigpIHtcbiAgICAvLyBmb3IgcXVldWVzLCBkbyBub3QgZG8gdGhpcyBtb3JlIHRoYW4gb25jZVxuICAgIGlmIChzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gaWYgdGhlIGJvZHkgaGFzIG92ZXJmbG93XG5cblxuICAgIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgLy8gYWRkIHBhZGRpbmcgc28gdGhlIGNvbnRlbnQgZG9lc24ndCBzaGlmdCBhZnRlciByZW1vdmFsIG9mIHNjcm9sbGJhclxuICAgICAgc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiLmNvbmNhdChzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyArIG1lYXN1cmVTY3JvbGxiYXIoKSwgXCJweFwiKTtcbiAgICB9XG4gIH07XG4gIHZhciB1bmRvU2Nyb2xsYmFyID0gZnVuY3Rpb24gdW5kb1Njcm9sbGJhcigpIHtcbiAgICBpZiAoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIi5jb25jYXQoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcsIFwicHhcIik7XG4gICAgICBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovXG5cbiAgdmFyIGlPU2ZpeCA9IGZ1bmN0aW9uIGlPU2ZpeCgpIHtcbiAgICB2YXIgaU9TID0gL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbSB8fCBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMTtcblxuICAgIGlmIChpT1MgJiYgIWhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICAgIHZhciBvZmZzZXQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gXCJcIi5jb25jYXQob2Zmc2V0ICogLTEsIFwicHhcIik7XG4gICAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICAgICAgbG9ja0JvZHlTY3JvbGwoKTtcbiAgICAgIGFkZEJvdHRvbVBhZGRpbmdGb3JUYWxsUG9wdXBzKCk7IC8vICMxOTQ4XG4gICAgfVxuICB9O1xuXG4gIHZhciBhZGRCb3R0b21QYWRkaW5nRm9yVGFsbFBvcHVwcyA9IGZ1bmN0aW9uIGFkZEJvdHRvbVBhZGRpbmdGb3JUYWxsUG9wdXBzKCkge1xuICAgIHZhciBzYWZhcmkgPSAhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKENyaU9TfEZ4aU9TfEVkZ2lPU3xZYUJyb3dzZXJ8VUNCcm93c2VyKS9pKTtcblxuICAgIGlmIChzYWZhcmkpIHtcbiAgICAgIHZhciBib3R0b21QYW5lbEhlaWdodCA9IDQ0O1xuXG4gICAgICBpZiAoZ2V0UG9wdXAoKS5zY3JvbGxIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQgLSBib3R0b21QYW5lbEhlaWdodCkge1xuICAgICAgICBnZXRDb250YWluZXIoKS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCJcIi5jb25jYXQoYm90dG9tUGFuZWxIZWlnaHQsIFwicHhcIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBsb2NrQm9keVNjcm9sbCA9IGZ1bmN0aW9uIGxvY2tCb2R5U2Nyb2xsKCkge1xuICAgIC8vICMxMjQ2XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIHZhciBwcmV2ZW50VG91Y2hNb3ZlO1xuXG4gICAgY29udGFpbmVyLm9udG91Y2hzdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBwcmV2ZW50VG91Y2hNb3ZlID0gc2hvdWxkUHJldmVudFRvdWNoTW92ZShlKTtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLm9udG91Y2htb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChwcmV2ZW50VG91Y2hNb3ZlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBzaG91bGRQcmV2ZW50VG91Y2hNb3ZlID0gZnVuY3Rpb24gc2hvdWxkUHJldmVudFRvdWNoTW92ZShldmVudCkge1xuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuXG4gICAgaWYgKGlzU3R5bHlzKGV2ZW50KSB8fCBpc1pvb20oZXZlbnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldCA9PT0gY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzU2Nyb2xsYWJsZShjb250YWluZXIpICYmIHRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnICYmIC8vICMxNjAzXG4gICAgIShpc1Njcm9sbGFibGUoZ2V0Q29udGVudCgpKSAmJiAvLyAjMTk0NFxuICAgIGdldENvbnRlbnQoKS5jb250YWlucyh0YXJnZXQpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHZhciBpc1N0eWx5cyA9IGZ1bmN0aW9uIGlzU3R5bHlzKGV2ZW50KSB7XG4gICAgLy8gIzE3ODZcbiAgICByZXR1cm4gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCAmJiBldmVudC50b3VjaGVzWzBdLnRvdWNoVHlwZSA9PT0gJ3N0eWx1cyc7XG4gIH07XG5cbiAgdmFyIGlzWm9vbSA9IGZ1bmN0aW9uIGlzWm9vbShldmVudCkge1xuICAgIC8vICMxODkxXG4gICAgcmV0dXJuIGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxO1xuICB9O1xuXG4gIHZhciB1bmRvSU9TZml4ID0gZnVuY3Rpb24gdW5kb0lPU2ZpeCgpIHtcbiAgICBpZiAoaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KSkge1xuICAgICAgdmFyIG9mZnNldCA9IHBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUudG9wLCAxMCk7XG4gICAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAnJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gb2Zmc2V0ICogLTE7XG4gICAgfVxuICB9O1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovXG5cbiAgdmFyIGlzSUUxMSA9IGZ1bmN0aW9uIGlzSUUxMSgpIHtcbiAgICByZXR1cm4gISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGU7XG4gIH07IC8vIEZpeCBJRTExIGNlbnRlcmluZyBzd2VldGFsZXJ0Mi9pc3N1ZXMvOTMzXG5cblxuICB2YXIgZml4VmVydGljYWxQb3NpdGlvbklFID0gZnVuY3Rpb24gZml4VmVydGljYWxQb3NpdGlvbklFKCkge1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYWxpZ24taXRlbXMnKTtcblxuICAgIGlmIChwb3B1cC5vZmZzZXRUb3AgPCAwKSB7XG4gICAgICBjb250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9ICdmbGV4LXN0YXJ0JztcbiAgICB9XG4gIH07XG5cbiAgdmFyIElFZml4ID0gZnVuY3Rpb24gSUVmaXgoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGlzSUUxMSgpKSB7XG4gICAgICBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUoKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUpO1xuICAgIH1cbiAgfTtcbiAgdmFyIHVuZG9JRWZpeCA9IGZ1bmN0aW9uIHVuZG9JRWZpeCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNJRTExKCkpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUpO1xuICAgIH1cbiAgfTtcblxuICAvLyBBZGRpbmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdG8gZWxlbWVudHMgb3V0c2lkZSBvZiB0aGUgYWN0aXZlIG1vZGFsIGRpYWxvZyBlbnN1cmVzIHRoYXRcbiAgLy8gZWxlbWVudHMgbm90IHdpdGhpbiB0aGUgYWN0aXZlIG1vZGFsIGRpYWxvZyB3aWxsIG5vdCBiZSBzdXJmYWNlZCBpZiBhIHVzZXIgb3BlbnMgYSBzY3JlZW5cbiAgLy8gcmVhZGVy4oCZcyBsaXN0IG9mIGVsZW1lbnRzIChoZWFkaW5ncywgZm9ybSBjb250cm9scywgbGFuZG1hcmtzLCBldGMuKSBpbiB0aGUgZG9jdW1lbnQuXG5cbiAgdmFyIHNldEFyaWFIaWRkZW4gPSBmdW5jdGlvbiBzZXRBcmlhSGlkZGVuKCkge1xuICAgIHZhciBib2R5Q2hpbGRyZW4gPSB0b0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICAgIGJvZHlDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgaWYgKGVsID09PSBnZXRDb250YWluZXIoKSB8fCBjb250YWlucyhlbCwgZ2V0Q29udGFpbmVyKCkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nLCBlbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpO1xuICAgICAgfVxuXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9KTtcbiAgfTtcbiAgdmFyIHVuc2V0QXJpYUhpZGRlbiA9IGZ1bmN0aW9uIHVuc2V0QXJpYUhpZGRlbigpIHtcbiAgICB2YXIgYm9keUNoaWxkcmVuID0gdG9BcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAgICBib2R5Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJykpO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBtb2R1bGUgY29udGFpbnRzIGBXZWFrTWFwYHMgZm9yIGVhY2ggZWZmZWN0aXZlbHktXCJwcml2YXRlICBwcm9wZXJ0eVwiIHRoYXQgYSBgU3dhbGAgaGFzLlxuICAgKiBGb3IgZXhhbXBsZSwgdG8gc2V0IHRoZSBwcml2YXRlIHByb3BlcnR5IFwiZm9vXCIgb2YgYHRoaXNgIHRvIFwiYmFyXCIsIHlvdSBjYW4gYHByaXZhdGVQcm9wcy5mb28uc2V0KHRoaXMsICdiYXInKWBcbiAgICogVGhpcyBpcyB0aGUgYXBwcm9hY2ggdGhhdCBCYWJlbCB3aWxsIHByb2JhYmx5IHRha2UgdG8gaW1wbGVtZW50IHByaXZhdGUgbWV0aG9kcy9maWVsZHNcbiAgICogICBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcml2YXRlLW1ldGhvZHNcbiAgICogICBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvcHVsbC83NTU1XG4gICAqIE9uY2Ugd2UgaGF2ZSB0aGUgY2hhbmdlcyBmcm9tIHRoYXQgUFIgaW4gQmFiZWwsIGFuZCBvdXIgY29yZSBjbGFzcyBmaXRzIHJlYXNvbmFibGUgaW4gKm9uZSBtb2R1bGUqXG4gICAqICAgdGhlbiB3ZSBjYW4gdXNlIHRoYXQgbGFuZ3VhZ2UgZmVhdHVyZS5cbiAgICovXG4gIHZhciBwcml2YXRlTWV0aG9kcyA9IHtcbiAgICBzd2FsUHJvbWlzZVJlc29sdmU6IG5ldyBXZWFrTWFwKClcbiAgfTtcblxuICAvKlxuICAgKiBJbnN0YW5jZSBtZXRob2QgdG8gY2xvc2Ugc3dlZXRBbGVydFxuICAgKi9cblxuICBmdW5jdGlvbiByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoaW5zdGFuY2UsIGNvbnRhaW5lciwgaXNUb2FzdCQkMSwgZGlkQ2xvc2UpIHtcbiAgICBpZiAoaXNUb2FzdCQkMSkge1xuICAgICAgdHJpZ2dlckRpZENsb3NlQW5kRGlzcG9zZShpbnN0YW5jZSwgZGlkQ2xvc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN0b3JlQWN0aXZlRWxlbWVudCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHJpZ2dlckRpZENsb3NlQW5kRGlzcG9zZShpbnN0YW5jZSwgZGlkQ2xvc2UpO1xuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwge1xuICAgICAgICBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVyLnBhcmVudE5vZGUgJiYgIWRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKSkge1xuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBpZiAoaXNNb2RhbCgpKSB7XG4gICAgICB1bmRvU2Nyb2xsYmFyKCk7XG4gICAgICB1bmRvSU9TZml4KCk7XG4gICAgICB1bmRvSUVmaXgoKTtcbiAgICAgIHVuc2V0QXJpYUhpZGRlbigpO1xuICAgIH1cblxuICAgIHJlbW92ZUJvZHlDbGFzc2VzKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVCb2R5Q2xhc3NlcygpIHtcbiAgICByZW1vdmVDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgW3N3YWxDbGFzc2VzLnNob3duLCBzd2FsQ2xhc3Nlc1snaGVpZ2h0LWF1dG8nXSwgc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddLCBzd2FsQ2xhc3Nlc1sndG9hc3QtY29sdW1uJ11dKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlKHJlc29sdmVWYWx1ZSkge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgICBpZiAoIXBvcHVwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVzb2x2ZVZhbHVlID0gcHJlcGFyZVJlc29sdmVWYWx1ZShyZXNvbHZlVmFsdWUpO1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG5cbiAgICBpZiAoIWlubmVyUGFyYW1zIHx8IGhhc0NsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHN3YWxQcm9taXNlUmVzb2x2ZSA9IHByaXZhdGVNZXRob2RzLnN3YWxQcm9taXNlUmVzb2x2ZS5nZXQodGhpcyk7XG4gICAgcmVtb3ZlQ2xhc3MocG9wdXAsIGlubmVyUGFyYW1zLnNob3dDbGFzcy5wb3B1cCk7XG4gICAgYWRkQ2xhc3MocG9wdXAsIGlubmVyUGFyYW1zLmhpZGVDbGFzcy5wb3B1cCk7XG4gICAgdmFyIGJhY2tkcm9wID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgcmVtb3ZlQ2xhc3MoYmFja2Ryb3AsIGlubmVyUGFyYW1zLnNob3dDbGFzcy5iYWNrZHJvcCk7XG4gICAgYWRkQ2xhc3MoYmFja2Ryb3AsIGlubmVyUGFyYW1zLmhpZGVDbGFzcy5iYWNrZHJvcCk7XG4gICAgaGFuZGxlUG9wdXBBbmltYXRpb24odGhpcywgcG9wdXAsIGlubmVyUGFyYW1zKTsgLy8gUmVzb2x2ZSBTd2FsIHByb21pc2VcblxuICAgIHN3YWxQcm9taXNlUmVzb2x2ZShyZXNvbHZlVmFsdWUpO1xuICB9XG5cbiAgdmFyIHByZXBhcmVSZXNvbHZlVmFsdWUgPSBmdW5jdGlvbiBwcmVwYXJlUmVzb2x2ZVZhbHVlKHJlc29sdmVWYWx1ZSkge1xuICAgIC8vIFdoZW4gdXNlciBjYWxscyBTd2FsLmNsb3NlKClcbiAgICBpZiAodHlwZW9mIHJlc29sdmVWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzQ29uZmlybWVkOiBmYWxzZSxcbiAgICAgICAgaXNEZW5pZWQ6IGZhbHNlLFxuICAgICAgICBpc0Rpc21pc3NlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgaXNDb25maXJtZWQ6IGZhbHNlLFxuICAgICAgaXNEZW5pZWQ6IGZhbHNlLFxuICAgICAgaXNEaXNtaXNzZWQ6IGZhbHNlXG4gICAgfSwgcmVzb2x2ZVZhbHVlKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlUG9wdXBBbmltYXRpb24gPSBmdW5jdGlvbiBoYW5kbGVQb3B1cEFuaW1hdGlvbihpbnN0YW5jZSwgcG9wdXAsIGlubmVyUGFyYW1zKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpOyAvLyBJZiBhbmltYXRpb24gaXMgc3VwcG9ydGVkLCBhbmltYXRlXG5cbiAgICB2YXIgYW5pbWF0aW9uSXNTdXBwb3J0ZWQgPSBhbmltYXRpb25FbmRFdmVudCAmJiBoYXNDc3NBbmltYXRpb24ocG9wdXApO1xuICAgIHZhciBvbkNsb3NlID0gaW5uZXJQYXJhbXMub25DbG9zZSxcbiAgICAgICAgb25BZnRlckNsb3NlID0gaW5uZXJQYXJhbXMub25BZnRlckNsb3NlLFxuICAgICAgICB3aWxsQ2xvc2UgPSBpbm5lclBhcmFtcy53aWxsQ2xvc2UsXG4gICAgICAgIGRpZENsb3NlID0gaW5uZXJQYXJhbXMuZGlkQ2xvc2U7XG4gICAgcnVuRGlkQ2xvc2UocG9wdXAsIHdpbGxDbG9zZSwgb25DbG9zZSk7XG5cbiAgICBpZiAoYW5pbWF0aW9uSXNTdXBwb3J0ZWQpIHtcbiAgICAgIGFuaW1hdGVQb3B1cChpbnN0YW5jZSwgcG9wdXAsIGNvbnRhaW5lciwgZGlkQ2xvc2UgfHwgb25BZnRlckNsb3NlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3RoZXJ3aXNlLCByZW1vdmUgaW1tZWRpYXRlbHlcbiAgICAgIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZShpbnN0YW5jZSwgY29udGFpbmVyLCBpc1RvYXN0KCksIGRpZENsb3NlIHx8IG9uQWZ0ZXJDbG9zZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBydW5EaWRDbG9zZSA9IGZ1bmN0aW9uIHJ1bkRpZENsb3NlKHBvcHVwLCB3aWxsQ2xvc2UsIG9uQ2xvc2UpIHtcbiAgICBpZiAod2lsbENsb3NlICE9PSBudWxsICYmIHR5cGVvZiB3aWxsQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHdpbGxDbG9zZShwb3B1cCk7XG4gICAgfSBlbHNlIGlmIChvbkNsb3NlICE9PSBudWxsICYmIHR5cGVvZiBvbkNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbkNsb3NlKHBvcHVwKTsgLy8gQGRlcHJlY2F0ZWRcbiAgICB9XG4gIH07XG5cbiAgdmFyIGFuaW1hdGVQb3B1cCA9IGZ1bmN0aW9uIGFuaW1hdGVQb3B1cChpbnN0YW5jZSwgcG9wdXAsIGNvbnRhaW5lciwgZGlkQ2xvc2UpIHtcbiAgICBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2sgPSByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUuYmluZChudWxsLCBpbnN0YW5jZSwgY29udGFpbmVyLCBpc1RvYXN0KCksIGRpZENsb3NlKTtcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBwb3B1cCkge1xuICAgICAgICBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2soKTtcbiAgICAgICAgZGVsZXRlIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgdHJpZ2dlckRpZENsb3NlQW5kRGlzcG9zZSA9IGZ1bmN0aW9uIHRyaWdnZXJEaWRDbG9zZUFuZERpc3Bvc2UoaW5zdGFuY2UsIGRpZENsb3NlKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodHlwZW9mIGRpZENsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRpZENsb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIGluc3RhbmNlLl9kZXN0cm95KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2V0QnV0dG9uc0Rpc2FibGVkKGluc3RhbmNlLCBidXR0b25zLCBkaXNhYmxlZCkge1xuICAgIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQoaW5zdGFuY2UpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICBkb21DYWNoZVtidXR0b25dLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJbnB1dERpc2FibGVkKGlucHV0LCBkaXNhYmxlZCkge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgdmFyIHJhZGlvc0NvbnRhaW5lciA9IGlucHV0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIHZhciByYWRpb3MgPSByYWRpb3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByYWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmFkaW9zW2ldLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlQnV0dG9ucygpIHtcbiAgICBzZXRCdXR0b25zRGlzYWJsZWQodGhpcywgWydjb25maXJtQnV0dG9uJywgJ2RlbnlCdXR0b24nLCAnY2FuY2VsQnV0dG9uJ10sIGZhbHNlKTtcbiAgfVxuICBmdW5jdGlvbiBkaXNhYmxlQnV0dG9ucygpIHtcbiAgICBzZXRCdXR0b25zRGlzYWJsZWQodGhpcywgWydjb25maXJtQnV0dG9uJywgJ2RlbnlCdXR0b24nLCAnY2FuY2VsQnV0dG9uJ10sIHRydWUpO1xuICB9XG4gIGZ1bmN0aW9uIGVuYWJsZUlucHV0KCkge1xuICAgIHJldHVybiBzZXRJbnB1dERpc2FibGVkKHRoaXMuZ2V0SW5wdXQoKSwgZmFsc2UpO1xuICB9XG4gIGZ1bmN0aW9uIGRpc2FibGVJbnB1dCgpIHtcbiAgICByZXR1cm4gc2V0SW5wdXREaXNhYmxlZCh0aGlzLmdldElucHV0KCksIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1ZhbGlkYXRpb25NZXNzYWdlKGVycm9yKSB7XG4gICAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICB2YXIgcGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgICBzZXRJbm5lckh0bWwoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UsIGVycm9yKTtcbiAgICBkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZS5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ107XG5cbiAgICBpZiAocGFyYW1zLmN1c3RvbUNsYXNzICYmIHBhcmFtcy5jdXN0b21DbGFzcy52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgYWRkQ2xhc3MoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UsIHBhcmFtcy5jdXN0b21DbGFzcy52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgc2hvdyhkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgdmFyIGlucHV0ID0gdGhpcy5nZXRJbnB1dCgpO1xuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIHRydWUpO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZEJ5Jywgc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddKTtcbiAgICAgIGZvY3VzSW5wdXQoaW5wdXQpO1xuICAgICAgYWRkQ2xhc3MoaW5wdXQsIHN3YWxDbGFzc2VzLmlucHV0ZXJyb3IpO1xuICAgIH1cbiAgfSAvLyBIaWRlIGJsb2NrIHdpdGggdmFsaWRhdGlvbiBtZXNzYWdlXG5cbiAgZnVuY3Rpb24gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxKCkge1xuICAgIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG5cbiAgICBpZiAoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGhpZGUoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHZhciBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWludmFsaWQnKTtcbiAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRCeScpO1xuICAgICAgcmVtb3ZlQ2xhc3MoaW5wdXQsIHN3YWxDbGFzc2VzLmlucHV0ZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFByb2dyZXNzU3RlcHMkMSgpIHtcbiAgICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICAgIHJldHVybiBkb21DYWNoZS5wcm9ncmVzc1N0ZXBzO1xuICB9XG5cbiAgdmFyIFRpbWVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaW1lcihjYWxsYmFjaywgZGVsYXkpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaW1lcik7XG5cbiAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgIHRoaXMucmVtYWluaW5nID0gZGVsYXk7XG4gICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGltZXIsIFt7XG4gICAgICBrZXk6IFwic3RhcnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgdGhpcy5pZCA9IHNldFRpbWVvdXQodGhpcy5jYWxsYmFjaywgdGhpcy5yZW1haW5pbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzdG9wXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmlkKTtcbiAgICAgICAgICB0aGlzLnJlbWFpbmluZyAtPSBuZXcgRGF0ZSgpIC0gdGhpcy5zdGFydGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpbmNyZWFzZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluY3JlYXNlKG4pIHtcbiAgICAgICAgdmFyIHJ1bm5pbmcgPSB0aGlzLnJ1bm5pbmc7XG5cbiAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVtYWluaW5nICs9IG47XG5cbiAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZW1haW5pbmc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFRpbWVyTGVmdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRpbWVyTGVmdCgpIHtcbiAgICAgICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNSdW5uaW5nXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUaW1lcjtcbiAgfSgpO1xuXG4gIHZhciBkZWZhdWx0SW5wdXRWYWxpZGF0b3JzID0ge1xuICAgIGVtYWlsOiBmdW5jdGlvbiBlbWFpbChzdHJpbmcsIHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICByZXR1cm4gL15bYS16QS1aMC05LitfLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWjAtOS1dezIsMjR9JC8udGVzdChzdHJpbmcpID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGlvbk1lc3NhZ2UgfHwgJ0ludmFsaWQgZW1haWwgYWRkcmVzcycpO1xuICAgIH0sXG4gICAgdXJsOiBmdW5jdGlvbiB1cmwoc3RyaW5nLCB2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgLy8gdGFrZW4gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzgwOTQzNSB3aXRoIGEgc21hbGwgY2hhbmdlIGZyb20gIzEzMDYgYW5kICMyMDEzXG4gICAgICByZXR1cm4gL15odHRwcz86XFwvXFwvKHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezEsMjU2fVxcLlthLXpdezIsNjN9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji89XSopJC8udGVzdChzdHJpbmcpID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGlvbk1lc3NhZ2UgfHwgJ0ludmFsaWQgVVJMJyk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHNldERlZmF1bHRJbnB1dFZhbGlkYXRvcnMocGFyYW1zKSB7XG4gICAgLy8gVXNlIGRlZmF1bHQgYGlucHV0VmFsaWRhdG9yYCBmb3Igc3VwcG9ydGVkIGlucHV0IHR5cGVzIGlmIG5vdCBwcm92aWRlZFxuICAgIGlmICghcGFyYW1zLmlucHV0VmFsaWRhdG9yKSB7XG4gICAgICBPYmplY3Qua2V5cyhkZWZhdWx0SW5wdXRWYWxpZGF0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5pbnB1dCA9PT0ga2V5KSB7XG4gICAgICAgICAgcGFyYW1zLmlucHV0VmFsaWRhdG9yID0gZGVmYXVsdElucHV0VmFsaWRhdG9yc1trZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZUN1c3RvbVRhcmdldEVsZW1lbnQocGFyYW1zKSB7XG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgaXMgdmFsaWRcbiAgICBpZiAoIXBhcmFtcy50YXJnZXQgfHwgdHlwZW9mIHBhcmFtcy50YXJnZXQgPT09ICdzdHJpbmcnICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy50YXJnZXQpIHx8IHR5cGVvZiBwYXJhbXMudGFyZ2V0ICE9PSAnc3RyaW5nJyAmJiAhcGFyYW1zLnRhcmdldC5hcHBlbmRDaGlsZCkge1xuICAgICAgd2FybignVGFyZ2V0IHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJib2R5XCInKTtcbiAgICAgIHBhcmFtcy50YXJnZXQgPSAnYm9keSc7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXQgdHlwZSwgdGV4dCBhbmQgYWN0aW9ucyBvbiBwb3B1cFxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHNldFBhcmFtZXRlcnMocGFyYW1zKSB7XG4gICAgc2V0RGVmYXVsdElucHV0VmFsaWRhdG9ycyhwYXJhbXMpOyAvLyBzaG93TG9hZGVyT25Db25maXJtICYmIHByZUNvbmZpcm1cblxuICAgIGlmIChwYXJhbXMuc2hvd0xvYWRlck9uQ29uZmlybSAmJiAhcGFyYW1zLnByZUNvbmZpcm0pIHtcbiAgICAgIHdhcm4oJ3Nob3dMb2FkZXJPbkNvbmZpcm0gaXMgc2V0IHRvIHRydWUsIGJ1dCBwcmVDb25maXJtIGlzIG5vdCBkZWZpbmVkLlxcbicgKyAnc2hvd0xvYWRlck9uQ29uZmlybSBzaG91bGQgYmUgdXNlZCB0b2dldGhlciB3aXRoIHByZUNvbmZpcm0sIHNlZSB1c2FnZSBleGFtcGxlOlxcbicgKyAnaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vI2FqYXgtcmVxdWVzdCcpO1xuICAgIH0gLy8gcGFyYW1zLmFuaW1hdGlvbiB3aWxsIGJlIGFjdHVhbGx5IHVzZWQgaW4gcmVuZGVyUG9wdXAuanNcbiAgICAvLyBidXQgaW4gY2FzZSB3aGVuIHBhcmFtcy5hbmltYXRpb24gaXMgYSBmdW5jdGlvbiwgd2UgbmVlZCB0byBjYWxsIHRoYXQgZnVuY3Rpb25cbiAgICAvLyBiZWZvcmUgcG9wdXAgKHJlKWluaXRpYWxpemF0aW9uLCBzbyBpdCdsbCBiZSBwb3NzaWJsZSB0byBjaGVjayBTd2FsLmlzVmlzaWJsZSgpXG4gICAgLy8gaW5zaWRlIHRoZSBwYXJhbXMuYW5pbWF0aW9uIGZ1bmN0aW9uXG5cblxuICAgIHBhcmFtcy5hbmltYXRpb24gPSBjYWxsSWZGdW5jdGlvbihwYXJhbXMuYW5pbWF0aW9uKTtcbiAgICB2YWxpZGF0ZUN1c3RvbVRhcmdldEVsZW1lbnQocGFyYW1zKTsgLy8gUmVwbGFjZSBuZXdsaW5lcyB3aXRoIDxicj4gaW4gdGl0bGVcblxuICAgIGlmICh0eXBlb2YgcGFyYW1zLnRpdGxlID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyYW1zLnRpdGxlID0gcGFyYW1zLnRpdGxlLnNwbGl0KCdcXG4nKS5qb2luKCc8YnIgLz4nKTtcbiAgICB9XG5cbiAgICBpbml0KHBhcmFtcyk7XG4gIH1cblxuICB2YXIgc3dhbFN0cmluZ1BhcmFtcyA9IFsnc3dhbC10aXRsZScsICdzd2FsLWh0bWwnLCAnc3dhbC1mb290ZXInXTtcbiAgdmFyIGdldFRlbXBsYXRlUGFyYW1zID0gZnVuY3Rpb24gZ2V0VGVtcGxhdGVQYXJhbXMocGFyYW1zKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gdHlwZW9mIHBhcmFtcy50ZW1wbGF0ZSA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy50ZW1wbGF0ZSkgOiBwYXJhbXMudGVtcGxhdGU7XG5cbiAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgdmFyIHRlbXBsYXRlQ29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQgfHwgdGVtcGxhdGU7IC8vIElFMTFcblxuICAgIHNob3dXYXJuaW5nc0ZvckVsZW1lbnRzKHRlbXBsYXRlQ29udGVudCk7XG5cbiAgICB2YXIgcmVzdWx0ID0gX2V4dGVuZHMoZ2V0U3dhbFBhcmFtcyh0ZW1wbGF0ZUNvbnRlbnQpLCBnZXRTd2FsQnV0dG9ucyh0ZW1wbGF0ZUNvbnRlbnQpLCBnZXRTd2FsSW1hZ2UodGVtcGxhdGVDb250ZW50KSwgZ2V0U3dhbEljb24odGVtcGxhdGVDb250ZW50KSwgZ2V0U3dhbElucHV0KHRlbXBsYXRlQ29udGVudCksIGdldFN3YWxTdHJpbmdQYXJhbXModGVtcGxhdGVDb250ZW50LCBzd2FsU3RyaW5nUGFyYW1zKSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBnZXRTd2FsUGFyYW1zID0gZnVuY3Rpb24gZ2V0U3dhbFBhcmFtcyh0ZW1wbGF0ZUNvbnRlbnQpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdG9BcnJheSh0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc3dhbC1wYXJhbScpKS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhwYXJhbSwgWyduYW1lJywgJ3ZhbHVlJ10pO1xuICAgICAgdmFyIHBhcmFtTmFtZSA9IHBhcmFtLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgdmFyIHZhbHVlID0gcGFyYW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuXG4gICAgICBpZiAodHlwZW9mIGRlZmF1bHRQYXJhbXNbcGFyYW1OYW1lXSA9PT0gJ2Jvb2xlYW4nICYmIHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdHlwZW9mKGRlZmF1bHRQYXJhbXNbcGFyYW1OYW1lXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdFtwYXJhbU5hbWVdID0gdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgZ2V0U3dhbEJ1dHRvbnMgPSBmdW5jdGlvbiBnZXRTd2FsQnV0dG9ucyh0ZW1wbGF0ZUNvbnRlbnQpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdG9BcnJheSh0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc3dhbC1idXR0b24nKSkuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKGJ1dHRvbiwgWyd0eXBlJywgJ2NvbG9yJywgJ2FyaWEtbGFiZWwnXSk7XG4gICAgICB2YXIgdHlwZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgICAgIHJlc3VsdFtcIlwiLmNvbmNhdCh0eXBlLCBcIkJ1dHRvblRleHRcIildID0gYnV0dG9uLmlubmVySFRNTDtcbiAgICAgIHJlc3VsdFtcInNob3dcIi5jb25jYXQoY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHR5cGUpLCBcIkJ1dHRvblwiKV0gPSB0cnVlO1xuXG4gICAgICBpZiAoYnV0dG9uLmhhc0F0dHJpYnV0ZSgnY29sb3InKSkge1xuICAgICAgICByZXN1bHRbXCJcIi5jb25jYXQodHlwZSwgXCJCdXR0b25Db2xvclwiKV0gPSBidXR0b24uZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYnV0dG9uLmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgIHJlc3VsdFtcIlwiLmNvbmNhdCh0eXBlLCBcIkJ1dHRvbkFyaWFMYWJlbFwiKV0gPSBidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgZ2V0U3dhbEltYWdlID0gZnVuY3Rpb24gZ2V0U3dhbEltYWdlKHRlbXBsYXRlQ29udGVudCkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIgaW1hZ2UgPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3Rvcignc3dhbC1pbWFnZScpO1xuXG4gICAgaWYgKGltYWdlKSB7XG4gICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKGltYWdlLCBbJ3NyYycsICd3aWR0aCcsICdoZWlnaHQnLCAnYWx0J10pO1xuXG4gICAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCdzcmMnKSkge1xuICAgICAgICByZXN1bHQuaW1hZ2VVcmwgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCd3aWR0aCcpKSB7XG4gICAgICAgIHJlc3VsdC5pbWFnZVdpZHRoID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCd3aWR0aCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCdoZWlnaHQnKSkge1xuICAgICAgICByZXN1bHQuaW1hZ2VIZWlnaHQgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCdhbHQnKSkge1xuICAgICAgICByZXN1bHQuaW1hZ2VBbHQgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2FsdCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIGdldFN3YWxJY29uID0gZnVuY3Rpb24gZ2V0U3dhbEljb24odGVtcGxhdGVDb250ZW50KSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBpY29uID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3N3YWwtaWNvbicpO1xuXG4gICAgaWYgKGljb24pIHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoaWNvbiwgWyd0eXBlJywgJ2NvbG9yJ10pO1xuXG4gICAgICBpZiAoaWNvbi5oYXNBdHRyaWJ1dGUoJ3R5cGUnKSkge1xuICAgICAgICByZXN1bHQuaWNvbiA9IGljb24uZ2V0QXR0cmlidXRlKCd0eXBlJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpY29uLmhhc0F0dHJpYnV0ZSgnY29sb3InKSkge1xuICAgICAgICByZXN1bHQuaWNvbkNvbG9yID0gaWNvbi5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5pY29uSHRtbCA9IGljb24uaW5uZXJIVE1MO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIGdldFN3YWxJbnB1dCA9IGZ1bmN0aW9uIGdldFN3YWxJbnB1dCh0ZW1wbGF0ZUNvbnRlbnQpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGlucHV0ID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3N3YWwtaW5wdXQnKTtcblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhpbnB1dCwgWyd0eXBlJywgJ2xhYmVsJywgJ3BsYWNlaG9sZGVyJywgJ3ZhbHVlJ10pO1xuICAgICAgcmVzdWx0LmlucHV0ID0gaW5wdXQuZ2V0QXR0cmlidXRlKCd0eXBlJykgfHwgJ3RleHQnO1xuXG4gICAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdsYWJlbCcpKSB7XG4gICAgICAgIHJlc3VsdC5pbnB1dExhYmVsID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdsYWJlbCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdwbGFjZWhvbGRlcicpKSB7XG4gICAgICAgIHJlc3VsdC5pbnB1dFBsYWNlaG9sZGVyID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgIHJlc3VsdC5pbnB1dFZhbHVlID0gaW5wdXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBpbnB1dE9wdGlvbnMgPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc3dhbC1pbnB1dC1vcHRpb24nKTtcblxuICAgIGlmIChpbnB1dE9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICByZXN1bHQuaW5wdXRPcHRpb25zID0ge307XG4gICAgICB0b0FycmF5KGlucHV0T3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMob3B0aW9uLCBbJ3ZhbHVlJ10pO1xuICAgICAgICB2YXIgb3B0aW9uVmFsdWUgPSBvcHRpb24uZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgICB2YXIgb3B0aW9uTmFtZSA9IG9wdGlvbi5pbm5lckhUTUw7XG4gICAgICAgIHJlc3VsdC5pbnB1dE9wdGlvbnNbb3B0aW9uVmFsdWVdID0gb3B0aW9uTmFtZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIGdldFN3YWxTdHJpbmdQYXJhbXMgPSBmdW5jdGlvbiBnZXRTd2FsU3RyaW5nUGFyYW1zKHRlbXBsYXRlQ29udGVudCwgcGFyYW1OYW1lcykge1xuICAgIHZhciByZXN1bHQgPSB7fTtcblxuICAgIGZvciAodmFyIGkgaW4gcGFyYW1OYW1lcykge1xuICAgICAgdmFyIHBhcmFtTmFtZSA9IHBhcmFtTmFtZXNbaV07XG4gICAgICB2YXIgdGFnID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1OYW1lKTtcblxuICAgICAgaWYgKHRhZykge1xuICAgICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKHRhZywgW10pO1xuICAgICAgICByZXN1bHRbcGFyYW1OYW1lLnJlcGxhY2UoL15zd2FsLS8sICcnKV0gPSB0YWcuaW5uZXJIVE1MO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIHNob3dXYXJuaW5nc0ZvckVsZW1lbnRzID0gZnVuY3Rpb24gc2hvd1dhcm5pbmdzRm9yRWxlbWVudHModGVtcGxhdGUpIHtcbiAgICB2YXIgYWxsb3dlZEVsZW1lbnRzID0gc3dhbFN0cmluZ1BhcmFtcy5jb25jYXQoWydzd2FsLXBhcmFtJywgJ3N3YWwtYnV0dG9uJywgJ3N3YWwtaW1hZ2UnLCAnc3dhbC1pY29uJywgJ3N3YWwtaW5wdXQnLCAnc3dhbC1pbnB1dC1vcHRpb24nXSk7XG4gICAgdG9BcnJheSh0ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBpZiAoZWwucGFyZW50Tm9kZSAhPT0gdGVtcGxhdGUpIHtcbiAgICAgICAgLy8gY2FuJ3QgdXNlIHRlbXBsYXRlLmNoaWxkcmVuIGJlY2F1c2Ugb2YgSUUxMVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWdOYW1lID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZiAoYWxsb3dlZEVsZW1lbnRzLmluZGV4T2YodGFnTmFtZSkgPT09IC0xKSB7XG4gICAgICAgIHdhcm4oXCJVbnJlY29nbml6ZWQgZWxlbWVudCA8XCIuY29uY2F0KHRhZ05hbWUsIFwiPlwiKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMgPSBmdW5jdGlvbiBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKGVsLCBhbGxvd2VkQXR0cmlidXRlcykge1xuICAgIHRvQXJyYXkoZWwuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICBpZiAoYWxsb3dlZEF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUubmFtZSkgPT09IC0xKSB7XG4gICAgICAgIHdhcm4oW1wiVW5yZWNvZ25pemVkIGF0dHJpYnV0ZSBcXFwiXCIuY29uY2F0KGF0dHJpYnV0ZS5uYW1lLCBcIlxcXCIgb24gPFwiKS5jb25jYXQoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpLCBcIj4uXCIpLCBcIlwiLmNvbmNhdChhbGxvd2VkQXR0cmlidXRlcy5sZW5ndGggPyBcIkFsbG93ZWQgYXR0cmlidXRlcyBhcmU6IFwiLmNvbmNhdChhbGxvd2VkQXR0cmlidXRlcy5qb2luKCcsICcpKSA6ICdUbyBzZXQgdGhlIHZhbHVlLCB1c2UgSFRNTCB3aXRoaW4gdGhlIGVsZW1lbnQuJyldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgU0hPV19DTEFTU19USU1FT1VUID0gMTA7XG4gIC8qKlxuICAgKiBPcGVuIHBvcHVwLCBhZGQgbmVjZXNzYXJ5IGNsYXNzZXMgYW5kIHN0eWxlcywgZml4IHNjcm9sbGJhclxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zXG4gICAqL1xuXG4gIHZhciBvcGVuUG9wdXAgPSBmdW5jdGlvbiBvcGVuUG9wdXAocGFyYW1zKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtcy53aWxsT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGFyYW1zLndpbGxPcGVuKHBvcHVwKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMub25CZWZvcmVPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwYXJhbXMub25CZWZvcmVPcGVuKHBvcHVwKTsgLy8gQGRlcHJlY2F0ZWRcbiAgICB9XG5cbiAgICB2YXIgYm9keVN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuICAgIHZhciBpbml0aWFsQm9keU92ZXJmbG93ID0gYm9keVN0eWxlcy5vdmVyZmxvd1k7XG4gICAgYWRkQ2xhc3NlcyQxKGNvbnRhaW5lciwgcG9wdXAsIHBhcmFtcyk7IC8vIHNjcm9sbGluZyBpcyAnaGlkZGVuJyB1bnRpbCBhbmltYXRpb24gaXMgZG9uZSwgYWZ0ZXIgdGhhdCAnYXV0bydcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2V0U2Nyb2xsaW5nVmlzaWJpbGl0eShjb250YWluZXIsIHBvcHVwKTtcbiAgICB9LCBTSE9XX0NMQVNTX1RJTUVPVVQpO1xuXG4gICAgaWYgKGlzTW9kYWwoKSkge1xuICAgICAgZml4U2Nyb2xsQ29udGFpbmVyKGNvbnRhaW5lciwgcGFyYW1zLnNjcm9sbGJhclBhZGRpbmcsIGluaXRpYWxCb2R5T3ZlcmZsb3cpO1xuICAgICAgc2V0QXJpYUhpZGRlbigpO1xuICAgIH1cblxuICAgIGlmICghaXNUb2FzdCgpICYmICFnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcnVuRGlkT3Blbihwb3B1cCwgcGFyYW1zKTtcbiAgICByZW1vdmVDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzWyduby10cmFuc2l0aW9uJ10pO1xuICB9O1xuXG4gIHZhciBydW5EaWRPcGVuID0gZnVuY3Rpb24gcnVuRGlkT3Blbihwb3B1cCwgcGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuZGlkT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuZGlkT3Blbihwb3B1cCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMub25PcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5vbk9wZW4ocG9wdXApO1xuICAgICAgfSk7IC8vIEBkZXByZWNhdGVkXG4gICAgfVxuICB9O1xuXG4gIHZhciBzd2FsT3BlbkFuaW1hdGlvbkZpbmlzaGVkID0gZnVuY3Rpb24gc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZChldmVudCkge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBwb3B1cCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsT3BlbkFuaW1hdGlvbkZpbmlzaGVkKTtcbiAgICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICB9O1xuXG4gIHZhciBzZXRTY3JvbGxpbmdWaXNpYmlsaXR5ID0gZnVuY3Rpb24gc2V0U2Nyb2xsaW5nVmlzaWJpbGl0eShjb250YWluZXIsIHBvcHVwKSB7XG4gICAgaWYgKGFuaW1hdGlvbkVuZEV2ZW50ICYmIGhhc0Nzc0FuaW1hdGlvbihwb3B1cCkpIHtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIHN3YWxPcGVuQW5pbWF0aW9uRmluaXNoZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZml4U2Nyb2xsQ29udGFpbmVyID0gZnVuY3Rpb24gZml4U2Nyb2xsQ29udGFpbmVyKGNvbnRhaW5lciwgc2Nyb2xsYmFyUGFkZGluZywgaW5pdGlhbEJvZHlPdmVyZmxvdykge1xuICAgIGlPU2ZpeCgpO1xuICAgIElFZml4KCk7XG5cbiAgICBpZiAoc2Nyb2xsYmFyUGFkZGluZyAmJiBpbml0aWFsQm9keU92ZXJmbG93ICE9PSAnaGlkZGVuJykge1xuICAgICAgZml4U2Nyb2xsYmFyKCk7XG4gICAgfSAvLyBzd2VldGFsZXJ0Mi9pc3N1ZXMvMTI0N1xuXG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBhZGRDbGFzc2VzJDEgPSBmdW5jdGlvbiBhZGRDbGFzc2VzKGNvbnRhaW5lciwgcG9wdXAsIHBhcmFtcykge1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgcGFyYW1zLnNob3dDbGFzcy5iYWNrZHJvcCk7IC8vIHRoZSB3b3JrYXJvdW5kIHdpdGggc2V0dGluZy91bnNldHRpbmcgb3BhY2l0eSBpcyBuZWVkZWQgZm9yICMyMDE5IGFuZCAyMDU5XG5cbiAgICBwb3B1cC5zdHlsZS5zZXRQcm9wZXJ0eSgnb3BhY2l0eScsICcwJywgJ2ltcG9ydGFudCcpO1xuICAgIHNob3cocG9wdXApO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQW5pbWF0ZSBwb3B1cCByaWdodCBhZnRlciBzaG93aW5nIGl0XG4gICAgICBhZGRDbGFzcyhwb3B1cCwgcGFyYW1zLnNob3dDbGFzcy5wb3B1cCk7IC8vIGFuZCByZW1vdmUgdGhlIG9wYWNpdHkgd29ya2Fyb3VuZFxuXG4gICAgICBwb3B1cC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3BhY2l0eScpO1xuICAgIH0sIFNIT1dfQ0xBU1NfVElNRU9VVCk7IC8vIDEwbXMgaW4gb3JkZXIgdG8gZml4ICMyMDYyXG5cbiAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXMuc2hvd24pO1xuXG4gICAgaWYgKHBhcmFtcy5oZWlnaHRBdXRvICYmIHBhcmFtcy5iYWNrZHJvcCAmJiAhcGFyYW1zLnRvYXN0KSB7XG4gICAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlSW5wdXRPcHRpb25zQW5kVmFsdWUgPSBmdW5jdGlvbiBoYW5kbGVJbnB1dE9wdGlvbnNBbmRWYWx1ZShpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcy5pbnB1dCA9PT0gJ3NlbGVjdCcgfHwgcGFyYW1zLmlucHV0ID09PSAncmFkaW8nKSB7XG4gICAgICBoYW5kbGVJbnB1dE9wdGlvbnMoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgfSBlbHNlIGlmIChbJ3RleHQnLCAnZW1haWwnLCAnbnVtYmVyJywgJ3RlbCcsICd0ZXh0YXJlYSddLmluZGV4T2YocGFyYW1zLmlucHV0KSAhPT0gLTEgJiYgKGhhc1RvUHJvbWlzZUZuKHBhcmFtcy5pbnB1dFZhbHVlKSB8fCBpc1Byb21pc2UocGFyYW1zLmlucHV0VmFsdWUpKSkge1xuICAgICAgaGFuZGxlSW5wdXRWYWx1ZShpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICB9XG4gIH07XG4gIHZhciBnZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShpbnN0YW5jZSwgaW5uZXJQYXJhbXMpIHtcbiAgICB2YXIgaW5wdXQgPSBpbnN0YW5jZS5nZXRJbnB1dCgpO1xuXG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc3dpdGNoIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICByZXR1cm4gZ2V0Q2hlY2tib3hWYWx1ZShpbnB1dCk7XG5cbiAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgcmV0dXJuIGdldFJhZGlvVmFsdWUoaW5wdXQpO1xuXG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgcmV0dXJuIGdldEZpbGVWYWx1ZShpbnB1dCk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBpbm5lclBhcmFtcy5pbnB1dEF1dG9UcmltID8gaW5wdXQudmFsdWUudHJpbSgpIDogaW5wdXQudmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRDaGVja2JveFZhbHVlID0gZnVuY3Rpb24gZ2V0Q2hlY2tib3hWYWx1ZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5jaGVja2VkID8gMSA6IDA7XG4gIH07XG5cbiAgdmFyIGdldFJhZGlvVmFsdWUgPSBmdW5jdGlvbiBnZXRSYWRpb1ZhbHVlKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LmNoZWNrZWQgPyBpbnB1dC52YWx1ZSA6IG51bGw7XG4gIH07XG5cbiAgdmFyIGdldEZpbGVWYWx1ZSA9IGZ1bmN0aW9uIGdldEZpbGVWYWx1ZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5maWxlcy5sZW5ndGggPyBpbnB1dC5nZXRBdHRyaWJ1dGUoJ211bHRpcGxlJykgIT09IG51bGwgPyBpbnB1dC5maWxlcyA6IGlucHV0LmZpbGVzWzBdIDogbnVsbDtcbiAgfTtcblxuICB2YXIgaGFuZGxlSW5wdXRPcHRpb25zID0gZnVuY3Rpb24gaGFuZGxlSW5wdXRPcHRpb25zKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgY29udGVudCA9IGdldENvbnRlbnQoKTtcblxuICAgIHZhciBwcm9jZXNzSW5wdXRPcHRpb25zID0gZnVuY3Rpb24gcHJvY2Vzc0lucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBwb3B1bGF0ZUlucHV0T3B0aW9uc1twYXJhbXMuaW5wdXRdKGNvbnRlbnQsIGZvcm1hdElucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpLCBwYXJhbXMpO1xuICAgIH07XG5cbiAgICBpZiAoaGFzVG9Qcm9taXNlRm4ocGFyYW1zLmlucHV0T3B0aW9ucykgfHwgaXNQcm9taXNlKHBhcmFtcy5pbnB1dE9wdGlvbnMpKSB7XG4gICAgICBzaG93TG9hZGluZyhnZXRDb25maXJtQnV0dG9uKCkpO1xuICAgICAgYXNQcm9taXNlKHBhcmFtcy5pbnB1dE9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGlucHV0T3B0aW9ucykge1xuICAgICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpO1xuICAgICAgICBwcm9jZXNzSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKF90eXBlb2YocGFyYW1zLmlucHV0T3B0aW9ucykgPT09ICdvYmplY3QnKSB7XG4gICAgICBwcm9jZXNzSW5wdXRPcHRpb25zKHBhcmFtcy5pbnB1dE9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dE9wdGlvbnMhIEV4cGVjdGVkIG9iamVjdCwgTWFwIG9yIFByb21pc2UsIGdvdCBcIi5jb25jYXQoX3R5cGVvZihwYXJhbXMuaW5wdXRPcHRpb25zKSkpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlSW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGhhbmRsZUlucHV0VmFsdWUoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBpbnB1dCA9IGluc3RhbmNlLmdldElucHV0KCk7XG4gICAgaGlkZShpbnB1dCk7XG4gICAgYXNQcm9taXNlKHBhcmFtcy5pbnB1dFZhbHVlKS50aGVuKGZ1bmN0aW9uIChpbnB1dFZhbHVlKSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dCA9PT0gJ251bWJlcicgPyBwYXJzZUZsb2F0KGlucHV0VmFsdWUpIHx8IDAgOiBcIlwiLmNvbmNhdChpbnB1dFZhbHVlKTtcbiAgICAgIHNob3coaW5wdXQpO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBlcnJvcihcIkVycm9yIGluIGlucHV0VmFsdWUgcHJvbWlzZTogXCIuY29uY2F0KGVycikpO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIHNob3coaW5wdXQpO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHBvcHVsYXRlSW5wdXRPcHRpb25zID0ge1xuICAgIHNlbGVjdDogZnVuY3Rpb24gc2VsZWN0KGNvbnRlbnQsIGlucHV0T3B0aW9ucywgcGFyYW1zKSB7XG4gICAgICB2YXIgc2VsZWN0ID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLnNlbGVjdCk7XG5cbiAgICAgIHZhciByZW5kZXJPcHRpb24gPSBmdW5jdGlvbiByZW5kZXJPcHRpb24ocGFyZW50LCBvcHRpb25MYWJlbCwgb3B0aW9uVmFsdWUpIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgc2V0SW5uZXJIdG1sKG9wdGlvbiwgb3B0aW9uTGFiZWwpO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBpc1NlbGVjdGVkKG9wdGlvblZhbHVlLCBwYXJhbXMuaW5wdXRWYWx1ZSk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfTtcblxuICAgICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGlucHV0T3B0aW9uKSB7XG4gICAgICAgIHZhciBvcHRpb25WYWx1ZSA9IGlucHV0T3B0aW9uWzBdO1xuICAgICAgICB2YXIgb3B0aW9uTGFiZWwgPSBpbnB1dE9wdGlvblsxXTsgLy8gPG9wdGdyb3VwPiBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDQwMS9pbnRlcmFjdC9mb3Jtcy5odG1sI2gtMTcuNlxuICAgICAgICAvLyBcIi4uLmFsbCBPUFRHUk9VUCBlbGVtZW50cyBtdXN0IGJlIHNwZWNpZmllZCBkaXJlY3RseSB3aXRoaW4gYSBTRUxFQ1QgZWxlbWVudCAoaS5lLiwgZ3JvdXBzIG1heSBub3QgYmUgbmVzdGVkKS4uLlwiXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhpcyBpcyBhIDxvcHRncm91cD5cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25MYWJlbCkpIHtcbiAgICAgICAgICAvLyBpZiBpdCBpcyBhbiBhcnJheSwgdGhlbiBpdCBpcyBhbiA8b3B0Z3JvdXA+XG4gICAgICAgICAgdmFyIG9wdGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcbiAgICAgICAgICBvcHRncm91cC5sYWJlbCA9IG9wdGlvblZhbHVlO1xuICAgICAgICAgIG9wdGdyb3VwLmRpc2FibGVkID0gZmFsc2U7IC8vIG5vdCBjb25maWd1cmFibGUgZm9yIG5vd1xuXG4gICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGdyb3VwKTtcbiAgICAgICAgICBvcHRpb25MYWJlbC5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyT3B0aW9uKG9wdGdyb3VwLCBvWzFdLCBvWzBdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjYXNlIG9mIDxvcHRpb24+XG4gICAgICAgICAgcmVuZGVyT3B0aW9uKHNlbGVjdCwgb3B0aW9uTGFiZWwsIG9wdGlvblZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZWxlY3QuZm9jdXMoKTtcbiAgICB9LFxuICAgIHJhZGlvOiBmdW5jdGlvbiByYWRpbyhjb250ZW50LCBpbnB1dE9wdGlvbnMsIHBhcmFtcykge1xuICAgICAgdmFyIHJhZGlvID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLnJhZGlvKTtcbiAgICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dE9wdGlvbikge1xuICAgICAgICB2YXIgcmFkaW9WYWx1ZSA9IGlucHV0T3B0aW9uWzBdO1xuICAgICAgICB2YXIgcmFkaW9MYWJlbCA9IGlucHV0T3B0aW9uWzFdO1xuICAgICAgICB2YXIgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHZhciByYWRpb0xhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHJhZGlvSW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgICAgIHJhZGlvSW5wdXQubmFtZSA9IHN3YWxDbGFzc2VzLnJhZGlvO1xuICAgICAgICByYWRpb0lucHV0LnZhbHVlID0gcmFkaW9WYWx1ZTtcblxuICAgICAgICBpZiAoaXNTZWxlY3RlZChyYWRpb1ZhbHVlLCBwYXJhbXMuaW5wdXRWYWx1ZSkpIHtcbiAgICAgICAgICByYWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzZXRJbm5lckh0bWwobGFiZWwsIHJhZGlvTGFiZWwpO1xuICAgICAgICBsYWJlbC5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5sYWJlbDtcbiAgICAgICAgcmFkaW9MYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQocmFkaW9JbnB1dCk7XG4gICAgICAgIHJhZGlvTGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgcmFkaW8uYXBwZW5kQ2hpbGQocmFkaW9MYWJlbEVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgICB2YXIgcmFkaW9zID0gcmFkaW8ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuICAgICAgaWYgKHJhZGlvcy5sZW5ndGgpIHtcbiAgICAgICAgcmFkaW9zWzBdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogQ29udmVydHMgYGlucHV0T3B0aW9uc2AgaW50byBhbiBhcnJheSBvZiBgW3ZhbHVlLCBsYWJlbF1gc1xuICAgKiBAcGFyYW0gaW5wdXRPcHRpb25zXG4gICAqL1xuXG4gIHZhciBmb3JtYXRJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBmb3JtYXRJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnICYmIGlucHV0T3B0aW9ucyBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlRm9ybWF0dGVkID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKF90eXBlb2YodmFsdWVGb3JtYXR0ZWQpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIGNhc2Ugb2YgPG9wdGdyb3VwPlxuICAgICAgICAgIHZhbHVlRm9ybWF0dGVkID0gZm9ybWF0SW5wdXRPcHRpb25zKHZhbHVlRm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKFtrZXksIHZhbHVlRm9ybWF0dGVkXSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmtleXMoaW5wdXRPcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlRm9ybWF0dGVkID0gaW5wdXRPcHRpb25zW2tleV07XG5cbiAgICAgICAgaWYgKF90eXBlb2YodmFsdWVGb3JtYXR0ZWQpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIGNhc2Ugb2YgPG9wdGdyb3VwPlxuICAgICAgICAgIHZhbHVlRm9ybWF0dGVkID0gZm9ybWF0SW5wdXRPcHRpb25zKHZhbHVlRm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKFtrZXksIHZhbHVlRm9ybWF0dGVkXSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBpc1NlbGVjdGVkID0gZnVuY3Rpb24gaXNTZWxlY3RlZChvcHRpb25WYWx1ZSwgaW5wdXRWYWx1ZSkge1xuICAgIHJldHVybiBpbnB1dFZhbHVlICYmIGlucHV0VmFsdWUudG9TdHJpbmcoKSA9PT0gb3B0aW9uVmFsdWUudG9TdHJpbmcoKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlQ29uZmlybUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ29uZmlybUJ1dHRvbkNsaWNrKGluc3RhbmNlLCBpbm5lclBhcmFtcykge1xuICAgIGluc3RhbmNlLmRpc2FibGVCdXR0b25zKCk7XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICAgIGhhbmRsZUNvbmZpcm1PckRlbnlXaXRoSW5wdXQoaW5zdGFuY2UsIGlubmVyUGFyYW1zLCAnY29uZmlybScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maXJtKGluc3RhbmNlLCBpbm5lclBhcmFtcywgdHJ1ZSk7XG4gICAgfVxuICB9O1xuICB2YXIgaGFuZGxlRGVueUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gaGFuZGxlRGVueUJ1dHRvbkNsaWNrKGluc3RhbmNlLCBpbm5lclBhcmFtcykge1xuICAgIGluc3RhbmNlLmRpc2FibGVCdXR0b25zKCk7XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMucmV0dXJuSW5wdXRWYWx1ZU9uRGVueSkge1xuICAgICAgaGFuZGxlQ29uZmlybU9yRGVueVdpdGhJbnB1dChpbnN0YW5jZSwgaW5uZXJQYXJhbXMsICdkZW55Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbnkoaW5zdGFuY2UsIGlubmVyUGFyYW1zLCBmYWxzZSk7XG4gICAgfVxuICB9O1xuICB2YXIgaGFuZGxlQ2FuY2VsQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDYW5jZWxCdXR0b25DbGljayhpbnN0YW5jZSwgZGlzbWlzc1dpdGgpIHtcbiAgICBpbnN0YW5jZS5kaXNhYmxlQnV0dG9ucygpO1xuICAgIGRpc21pc3NXaXRoKERpc21pc3NSZWFzb24uY2FuY2VsKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlQ29uZmlybU9yRGVueVdpdGhJbnB1dCA9IGZ1bmN0aW9uIGhhbmRsZUNvbmZpcm1PckRlbnlXaXRoSW5wdXQoaW5zdGFuY2UsIGlubmVyUGFyYW1zLCB0eXBlXG4gIC8qIHR5cGUgaXMgZWl0aGVyICdjb25maXJtJyBvciAnZGVueScgKi9cbiAgKSB7XG4gICAgdmFyIGlucHV0VmFsdWUgPSBnZXRJbnB1dFZhbHVlKGluc3RhbmNlLCBpbm5lclBhcmFtcyk7XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IpIHtcbiAgICAgIGhhbmRsZUlucHV0VmFsaWRhdG9yKGluc3RhbmNlLCBpbm5lclBhcmFtcywgaW5wdXRWYWx1ZSk7XG4gICAgfSBlbHNlIGlmICghaW5zdGFuY2UuZ2V0SW5wdXQoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIGluc3RhbmNlLmVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGluc3RhbmNlLnNob3dWYWxpZGF0aW9uTWVzc2FnZShpbm5lclBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGVueScpIHtcbiAgICAgIGRlbnkoaW5zdGFuY2UsIGlubmVyUGFyYW1zLCBpbnB1dFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlybShpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIGlucHV0VmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlSW5wdXRWYWxpZGF0b3IgPSBmdW5jdGlvbiBoYW5kbGVJbnB1dFZhbGlkYXRvcihpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIGlucHV0VmFsdWUpIHtcbiAgICBpbnN0YW5jZS5kaXNhYmxlSW5wdXQoKTtcbiAgICB2YXIgdmFsaWRhdGlvblByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhc1Byb21pc2UoaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IoaW5wdXRWYWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKTtcbiAgICB9KTtcbiAgICB2YWxpZGF0aW9uUHJvbWlzZS50aGVuKGZ1bmN0aW9uICh2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgaW5zdGFuY2UuZW5hYmxlQnV0dG9ucygpO1xuICAgICAgaW5zdGFuY2UuZW5hYmxlSW5wdXQoKTtcblxuICAgICAgaWYgKHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICAgIGluc3RhbmNlLnNob3dWYWxpZGF0aW9uTWVzc2FnZSh2YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maXJtKGluc3RhbmNlLCBpbm5lclBhcmFtcywgaW5wdXRWYWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGRlbnkgPSBmdW5jdGlvbiBkZW55KGluc3RhbmNlLCBpbm5lclBhcmFtcywgdmFsdWUpIHtcbiAgICBpZiAoaW5uZXJQYXJhbXMuc2hvd0xvYWRlck9uRGVueSkge1xuICAgICAgc2hvd0xvYWRpbmcoZ2V0RGVueUJ1dHRvbigpKTtcbiAgICB9XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMucHJlRGVueSkge1xuICAgICAgdmFyIHByZURlbnlQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhc1Byb21pc2UoaW5uZXJQYXJhbXMucHJlRGVueSh2YWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKTtcbiAgICAgIH0pO1xuICAgICAgcHJlRGVueVByb21pc2UudGhlbihmdW5jdGlvbiAocHJlRGVueVZhbHVlKSB7XG4gICAgICAgIGlmIChwcmVEZW55VmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnN0YW5jZS5jbG9zZVBvcHVwKHtcbiAgICAgICAgICAgIGlzRGVuaWVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IHR5cGVvZiBwcmVEZW55VmFsdWUgPT09ICd1bmRlZmluZWQnID8gdmFsdWUgOiBwcmVEZW55VmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLmNsb3NlUG9wdXAoe1xuICAgICAgICBpc0RlbmllZDogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHN1Y2NlZWRXaXRoID0gZnVuY3Rpb24gc3VjY2VlZFdpdGgoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgaW5zdGFuY2UuY2xvc2VQb3B1cCh7XG4gICAgICBpc0NvbmZpcm1lZDogdHJ1ZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBjb25maXJtID0gZnVuY3Rpb24gY29uZmlybShpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIHZhbHVlKSB7XG4gICAgaWYgKGlubmVyUGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0pIHtcbiAgICAgIHNob3dMb2FkaW5nKCk7IC8vIFRPRE86IG1ha2Ugc2hvd0xvYWRpbmcgYW4gKmluc3RhbmNlKiBtZXRob2RcbiAgICB9XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMucHJlQ29uZmlybSkge1xuICAgICAgaW5zdGFuY2UucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuICAgICAgdmFyIHByZUNvbmZpcm1Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhc1Byb21pc2UoaW5uZXJQYXJhbXMucHJlQ29uZmlybSh2YWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKTtcbiAgICAgIH0pO1xuICAgICAgcHJlQ29uZmlybVByb21pc2UudGhlbihmdW5jdGlvbiAocHJlQ29uZmlybVZhbHVlKSB7XG4gICAgICAgIGlmIChpc1Zpc2libGUoZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSkgfHwgcHJlQ29uZmlybVZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3VjY2VlZFdpdGgoaW5zdGFuY2UsIHR5cGVvZiBwcmVDb25maXJtVmFsdWUgPT09ICd1bmRlZmluZWQnID8gdmFsdWUgOiBwcmVDb25maXJtVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VjY2VlZFdpdGgoaW5zdGFuY2UsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGFkZEtleWRvd25IYW5kbGVyID0gZnVuY3Rpb24gYWRkS2V5ZG93bkhhbmRsZXIoaW5zdGFuY2UsIGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldCAmJiBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkKSB7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwge1xuICAgICAgICBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBrZXlkb3duSGFuZGxlcihpbnN0YW5jZSwgZSwgZGlzbWlzc1dpdGgpO1xuICAgICAgfTtcblxuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldCA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPyB3aW5kb3cgOiBnZXRQb3B1cCgpO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmU7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwge1xuICAgICAgICBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSB0cnVlO1xuICAgIH1cbiAgfTsgLy8gRm9jdXMgaGFuZGxpbmdcblxuICB2YXIgc2V0Rm9jdXMgPSBmdW5jdGlvbiBzZXRGb2N1cyhpbm5lclBhcmFtcywgaW5kZXgsIGluY3JlbWVudCkge1xuICAgIHZhciBmb2N1c2FibGVFbGVtZW50cyA9IGdldEZvY3VzYWJsZUVsZW1lbnRzKCk7IC8vIHNlYXJjaCBmb3IgdmlzaWJsZSBlbGVtZW50cyBhbmQgc2VsZWN0IHRoZSBuZXh0IHBvc3NpYmxlIG1hdGNoXG5cbiAgICBpZiAoZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICBpbmRleCA9IGluZGV4ICsgaW5jcmVtZW50OyAvLyByb2xsb3ZlciB0byBmaXJzdCBpdGVtXG5cbiAgICAgIGlmIChpbmRleCA9PT0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGluZGV4ID0gMDsgLy8gZ28gdG8gbGFzdCBpdGVtXG4gICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb2N1c2FibGVFbGVtZW50c1tpbmRleF0uZm9jdXMoKTtcbiAgICB9IC8vIG5vIHZpc2libGUgZm9jdXNhYmxlIGVsZW1lbnRzLCBmb2N1cyB0aGUgcG9wdXBcblxuXG4gICAgZ2V0UG9wdXAoKS5mb2N1cygpO1xuICB9O1xuICB2YXIgYXJyb3dLZXlzTmV4dEJ1dHRvbiA9IFsnQXJyb3dSaWdodCcsICdBcnJvd0Rvd24nLCAnUmlnaHQnLCAnRG93bicgLy8gSUUxMVxuICBdO1xuICB2YXIgYXJyb3dLZXlzUHJldmlvdXNCdXR0b24gPSBbJ0Fycm93TGVmdCcsICdBcnJvd1VwJywgJ0xlZnQnLCAnVXAnIC8vIElFMTFcbiAgXTtcbiAgdmFyIGVzY0tleXMgPSBbJ0VzY2FwZScsICdFc2MnIC8vIElFMTFcbiAgXTtcblxuICB2YXIga2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiBrZXlkb3duSGFuZGxlcihpbnN0YW5jZSwgZSwgZGlzbWlzc1dpdGgpIHtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcblxuICAgIGlmIChpbm5lclBhcmFtcy5zdG9wS2V5ZG93blByb3BhZ2F0aW9uKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gLy8gRU5URVJcblxuXG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBoYW5kbGVFbnRlcihpbnN0YW5jZSwgZSwgaW5uZXJQYXJhbXMpOyAvLyBUQUJcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnVGFiJykge1xuICAgICAgaGFuZGxlVGFiKGUsIGlubmVyUGFyYW1zKTsgLy8gQVJST1dTIC0gc3dpdGNoIGZvY3VzIGJldHdlZW4gYnV0dG9uc1xuICAgIH0gZWxzZSBpZiAoW10uY29uY2F0KGFycm93S2V5c05leHRCdXR0b24sIGFycm93S2V5c1ByZXZpb3VzQnV0dG9uKS5pbmRleE9mKGUua2V5KSAhPT0gLTEpIHtcbiAgICAgIGhhbmRsZUFycm93cyhlLmtleSk7IC8vIEVTQ1xuICAgIH0gZWxzZSBpZiAoZXNjS2V5cy5pbmRleE9mKGUua2V5KSAhPT0gLTEpIHtcbiAgICAgIGhhbmRsZUVzYyhlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcihpbnN0YW5jZSwgZSwgaW5uZXJQYXJhbXMpIHtcbiAgICAvLyAjNzIwICM3MjFcbiAgICBpZiAoZS5pc0NvbXBvc2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldCAmJiBpbnN0YW5jZS5nZXRJbnB1dCgpICYmIGUudGFyZ2V0Lm91dGVySFRNTCA9PT0gaW5zdGFuY2UuZ2V0SW5wdXQoKS5vdXRlckhUTUwpIHtcbiAgICAgIGlmIChbJ3RleHRhcmVhJywgJ2ZpbGUnXS5pbmRleE9mKGlubmVyUGFyYW1zLmlucHV0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuOyAvLyBkbyBub3Qgc3VibWl0XG4gICAgICB9XG5cbiAgICAgIGNsaWNrQ29uZmlybSgpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlVGFiID0gZnVuY3Rpb24gaGFuZGxlVGFiKGUsIGlubmVyUGFyYW1zKSB7XG4gICAgdmFyIHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cygpO1xuICAgIHZhciBidG5JbmRleCA9IC0xO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRhcmdldEVsZW1lbnQgPT09IGZvY3VzYWJsZUVsZW1lbnRzW2ldKSB7XG4gICAgICAgIGJ0bkluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFlLnNoaWZ0S2V5KSB7XG4gICAgICAvLyBDeWNsZSB0byB0aGUgbmV4dCBidXR0b25cbiAgICAgIHNldEZvY3VzKGlubmVyUGFyYW1zLCBidG5JbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEN5Y2xlIHRvIHRoZSBwcmV2IGJ1dHRvblxuICAgICAgc2V0Rm9jdXMoaW5uZXJQYXJhbXMsIGJ0bkluZGV4LCAtMSk7XG4gICAgfVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUFycm93cyA9IGZ1bmN0aW9uIGhhbmRsZUFycm93cyhrZXkpIHtcbiAgICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgICB2YXIgZGVueUJ1dHRvbiA9IGdldERlbnlCdXR0b24oKTtcbiAgICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG5cbiAgICBpZiAoIShbY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uXS5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpICE9PSAtMSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2libGluZyA9IGFycm93S2V5c05leHRCdXR0b24uaW5kZXhPZihrZXkpICE9PSAtMSA/ICduZXh0RWxlbWVudFNpYmxpbmcnIDogJ3ByZXZpb3VzRWxlbWVudFNpYmxpbmcnO1xuICAgIHZhciBidXR0b25Ub0ZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFtzaWJsaW5nXTtcblxuICAgIGlmIChidXR0b25Ub0ZvY3VzKSB7XG4gICAgICBidXR0b25Ub0ZvY3VzLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVFc2MgPSBmdW5jdGlvbiBoYW5kbGVFc2MoZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKSB7XG4gICAgaWYgKGNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93RXNjYXBlS2V5KSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5lc2MpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlUG9wdXBDbGljayA9IGZ1bmN0aW9uIGhhbmRsZVBvcHVwQ2xpY2soaW5zdGFuY2UsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCkge1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuXG4gICAgaWYgKGlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICBoYW5kbGVUb2FzdENsaWNrKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZ25vcmUgY2xpY2sgZXZlbnRzIHRoYXQgaGFkIG1vdXNlZG93biBvbiB0aGUgcG9wdXAgYnV0IG1vdXNldXAgb24gdGhlIGNvbnRhaW5lclxuICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIHdoZW4gdGhlIHVzZXIgZHJhZ3MgYSBzbGlkZXJcbiAgICAgIGhhbmRsZU1vZGFsTW91c2Vkb3duKGRvbUNhY2hlKTsgLy8gSWdub3JlIGNsaWNrIGV2ZW50cyB0aGF0IGhhZCBtb3VzZWRvd24gb24gdGhlIGNvbnRhaW5lciBidXQgbW91c2V1cCBvbiB0aGUgcG9wdXBcblxuICAgICAgaGFuZGxlQ29udGFpbmVyTW91c2Vkb3duKGRvbUNhY2hlKTtcbiAgICAgIGhhbmRsZU1vZGFsQ2xpY2soaW5zdGFuY2UsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVUb2FzdENsaWNrID0gZnVuY3Rpb24gaGFuZGxlVG9hc3RDbGljayhpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKSB7XG4gICAgLy8gQ2xvc2luZyB0b2FzdCBieSBpbnRlcm5hbCBjbGlja1xuICAgIGRvbUNhY2hlLnBvcHVwLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcblxuICAgICAgaWYgKGlubmVyUGFyYW1zLnNob3dDb25maXJtQnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dEZW55QnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dDYW5jZWxCdXR0b24gfHwgaW5uZXJQYXJhbXMuc2hvd0Nsb3NlQnV0dG9uIHx8IGlubmVyUGFyYW1zLnRpbWVyIHx8IGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7XG5cbiAgdmFyIGhhbmRsZU1vZGFsTW91c2Vkb3duID0gZnVuY3Rpb24gaGFuZGxlTW9kYWxNb3VzZWRvd24oZG9tQ2FjaGUpIHtcbiAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkb21DYWNoZS5jb250YWluZXIub25tb3VzZXVwID0gdW5kZWZpbmVkOyAvLyBXZSBvbmx5IGNoZWNrIGlmIHRoZSBtb3VzZXVwIHRhcmdldCBpcyB0aGUgY29udGFpbmVyIGJlY2F1c2UgdXN1YWxseSBpdCBkb2Vzbid0XG4gICAgICAgIC8vIGhhdmUgYW55IG90aGVyIGRpcmVjdCBjaGlsZHJlbiBhc2lkZSBvZiB0aGUgcG9wdXBcblxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLmNvbnRhaW5lcikge1xuICAgICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGFuZGxlQ29udGFpbmVyTW91c2Vkb3duID0gZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2Vkb3duKGRvbUNhY2hlKSB7XG4gICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9tQ2FjaGUucG9wdXAub25tb3VzZXVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZG9tQ2FjaGUucG9wdXAub25tb3VzZXVwID0gdW5kZWZpbmVkOyAvLyBXZSBhbHNvIG5lZWQgdG8gY2hlY2sgaWYgdGhlIG1vdXNldXAgdGFyZ2V0IGlzIGEgY2hpbGQgb2YgdGhlIHBvcHVwXG5cbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb21DYWNoZS5wb3B1cCB8fCBkb21DYWNoZS5wb3B1cC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGhhbmRsZU1vZGFsQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVNb2RhbENsaWNrKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpIHtcbiAgICBkb21DYWNoZS5jb250YWluZXIub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcblxuICAgICAgaWYgKGlnbm9yZU91dHNpZGVDbGljaykge1xuICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLmNvbnRhaW5lciAmJiBjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd091dHNpZGVDbGljaykpIHtcbiAgICAgICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5iYWNrZHJvcCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBfbWFpbih1c2VyUGFyYW1zKSB7XG4gICAgdmFyIG1peGluUGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBzaG93V2FybmluZ3NGb3JQYXJhbXMoX2V4dGVuZHMoe30sIG1peGluUGFyYW1zLCB1c2VyUGFyYW1zKSk7XG5cbiAgICBpZiAoZ2xvYmFsU3RhdGUuY3VycmVudEluc3RhbmNlKSB7XG4gICAgICBnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UuX2Rlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UgPSB0aGlzO1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByZXBhcmVQYXJhbXModXNlclBhcmFtcywgbWl4aW5QYXJhbXMpO1xuICAgIHNldFBhcmFtZXRlcnMoaW5uZXJQYXJhbXMpO1xuICAgIE9iamVjdC5mcmVlemUoaW5uZXJQYXJhbXMpOyAvLyBjbGVhciB0aGUgcHJldmlvdXMgdGltZXJcblxuICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgICBnbG9iYWxTdGF0ZS50aW1lb3V0LnN0b3AoKTtcbiAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS50aW1lb3V0O1xuICAgIH0gLy8gY2xlYXIgdGhlIHJlc3RvcmUgZm9jdXMgdGltZW91dFxuXG5cbiAgICBjbGVhclRpbWVvdXQoZ2xvYmFsU3RhdGUucmVzdG9yZUZvY3VzVGltZW91dCk7XG4gICAgdmFyIGRvbUNhY2hlID0gcG9wdWxhdGVEb21DYWNoZSh0aGlzKTtcbiAgICByZW5kZXIodGhpcywgaW5uZXJQYXJhbXMpO1xuICAgIHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5zZXQodGhpcywgaW5uZXJQYXJhbXMpO1xuICAgIHJldHVybiBzd2FsUHJvbWlzZSh0aGlzLCBkb21DYWNoZSwgaW5uZXJQYXJhbXMpO1xuICB9XG5cbiAgdmFyIHByZXBhcmVQYXJhbXMgPSBmdW5jdGlvbiBwcmVwYXJlUGFyYW1zKHVzZXJQYXJhbXMsIG1peGluUGFyYW1zKSB7XG4gICAgdmFyIHRlbXBsYXRlUGFyYW1zID0gZ2V0VGVtcGxhdGVQYXJhbXModXNlclBhcmFtcyk7XG5cbiAgICB2YXIgc2hvd0NsYXNzID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQYXJhbXMuc2hvd0NsYXNzLCBtaXhpblBhcmFtcy5zaG93Q2xhc3MsIHRlbXBsYXRlUGFyYW1zLnNob3dDbGFzcywgdXNlclBhcmFtcy5zaG93Q2xhc3MpO1xuXG4gICAgdmFyIGhpZGVDbGFzcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UGFyYW1zLmhpZGVDbGFzcywgbWl4aW5QYXJhbXMuaGlkZUNsYXNzLCB0ZW1wbGF0ZVBhcmFtcy5oaWRlQ2xhc3MsIHVzZXJQYXJhbXMuaGlkZUNsYXNzKTtcblxuICAgIHZhciBwYXJhbXMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFBhcmFtcywgbWl4aW5QYXJhbXMsIHRlbXBsYXRlUGFyYW1zLCB1c2VyUGFyYW1zKTsgLy8gcHJlY2VkZW5jZSBpcyBkZXNjcmliZWQgaW4gIzIxMzFcblxuXG4gICAgcGFyYW1zLnNob3dDbGFzcyA9IHNob3dDbGFzcztcbiAgICBwYXJhbXMuaGlkZUNsYXNzID0gaGlkZUNsYXNzOyAvLyBAZGVwcmVjYXRlZFxuXG4gICAgaWYgKHVzZXJQYXJhbXMuYW5pbWF0aW9uID09PSBmYWxzZSkge1xuICAgICAgcGFyYW1zLnNob3dDbGFzcyA9IHtcbiAgICAgICAgcG9wdXA6ICdzd2FsMi1ub2FuaW1hdGlvbicsXG4gICAgICAgIGJhY2tkcm9wOiAnc3dhbDItbm9hbmltYXRpb24nXG4gICAgICB9O1xuICAgICAgcGFyYW1zLmhpZGVDbGFzcyA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH07XG5cbiAgdmFyIHN3YWxQcm9taXNlID0gZnVuY3Rpb24gc3dhbFByb21pc2UoaW5zdGFuY2UsIGRvbUNhY2hlLCBpbm5lclBhcmFtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgLy8gZnVuY3Rpb25zIHRvIGhhbmRsZSBhbGwgY2xvc2luZ3MvZGlzbWlzc2Fsc1xuICAgICAgdmFyIGRpc21pc3NXaXRoID0gZnVuY3Rpb24gZGlzbWlzc1dpdGgoZGlzbWlzcykge1xuICAgICAgICBpbnN0YW5jZS5jbG9zZVBvcHVwKHtcbiAgICAgICAgICBpc0Rpc21pc3NlZDogdHJ1ZSxcbiAgICAgICAgICBkaXNtaXNzOiBkaXNtaXNzXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcHJpdmF0ZU1ldGhvZHMuc3dhbFByb21pc2VSZXNvbHZlLnNldChpbnN0YW5jZSwgcmVzb2x2ZSk7XG5cbiAgICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUNvbmZpcm1CdXR0b25DbGljayhpbnN0YW5jZSwgaW5uZXJQYXJhbXMpO1xuICAgICAgfTtcblxuICAgICAgZG9tQ2FjaGUuZGVueUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlRGVueUJ1dHRvbkNsaWNrKGluc3RhbmNlLCBpbm5lclBhcmFtcyk7XG4gICAgICB9O1xuXG4gICAgICBkb21DYWNoZS5jYW5jZWxCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrKGluc3RhbmNlLCBkaXNtaXNzV2l0aCk7XG4gICAgICB9O1xuXG4gICAgICBkb21DYWNoZS5jbG9zZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgICB9O1xuXG4gICAgICBoYW5kbGVQb3B1cENsaWNrKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpO1xuICAgICAgYWRkS2V5ZG93bkhhbmRsZXIoaW5zdGFuY2UsIGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpO1xuXG4gICAgICBpZiAoaW5uZXJQYXJhbXMudG9hc3QgJiYgKGlubmVyUGFyYW1zLmlucHV0IHx8IGlubmVyUGFyYW1zLmZvb3RlciB8fCBpbm5lclBhcmFtcy5zaG93Q2xvc2VCdXR0b24pKSB7XG4gICAgICAgIGFkZENsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzWyd0b2FzdC1jb2x1bW4nXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1sndG9hc3QtY29sdW1uJ10pO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVJbnB1dE9wdGlvbnNBbmRWYWx1ZShpbnN0YW5jZSwgaW5uZXJQYXJhbXMpO1xuICAgICAgb3BlblBvcHVwKGlubmVyUGFyYW1zKTtcbiAgICAgIHNldHVwVGltZXIoZ2xvYmFsU3RhdGUsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCk7XG4gICAgICBpbml0Rm9jdXMoZG9tQ2FjaGUsIGlubmVyUGFyYW1zKTsgLy8gU2Nyb2xsIGNvbnRhaW5lciB0byB0b3Agb24gb3BlbiAoIzEyNDcsICMxOTQ2KVxuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcG9wdWxhdGVEb21DYWNoZSA9IGZ1bmN0aW9uIHBvcHVsYXRlRG9tQ2FjaGUoaW5zdGFuY2UpIHtcbiAgICB2YXIgZG9tQ2FjaGUgPSB7XG4gICAgICBwb3B1cDogZ2V0UG9wdXAoKSxcbiAgICAgIGNvbnRhaW5lcjogZ2V0Q29udGFpbmVyKCksXG4gICAgICBjb250ZW50OiBnZXRDb250ZW50KCksXG4gICAgICBhY3Rpb25zOiBnZXRBY3Rpb25zKCksXG4gICAgICBjb25maXJtQnV0dG9uOiBnZXRDb25maXJtQnV0dG9uKCksXG4gICAgICBkZW55QnV0dG9uOiBnZXREZW55QnV0dG9uKCksXG4gICAgICBjYW5jZWxCdXR0b246IGdldENhbmNlbEJ1dHRvbigpLFxuICAgICAgbG9hZGVyOiBnZXRMb2FkZXIoKSxcbiAgICAgIGNsb3NlQnV0dG9uOiBnZXRDbG9zZUJ1dHRvbigpLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2U6IGdldFZhbGlkYXRpb25NZXNzYWdlKCksXG4gICAgICBwcm9ncmVzc1N0ZXBzOiBnZXRQcm9ncmVzc1N0ZXBzKClcbiAgICB9O1xuICAgIHByaXZhdGVQcm9wcy5kb21DYWNoZS5zZXQoaW5zdGFuY2UsIGRvbUNhY2hlKTtcbiAgICByZXR1cm4gZG9tQ2FjaGU7XG4gIH07XG5cbiAgdmFyIHNldHVwVGltZXIgPSBmdW5jdGlvbiBzZXR1cFRpbWVyKGdsb2JhbFN0YXRlJCQxLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpIHtcbiAgICB2YXIgdGltZXJQcm9ncmVzc0JhciA9IGdldFRpbWVyUHJvZ3Jlc3NCYXIoKTtcbiAgICBoaWRlKHRpbWVyUHJvZ3Jlc3NCYXIpO1xuXG4gICAgaWYgKGlubmVyUGFyYW1zLnRpbWVyKSB7XG4gICAgICBnbG9iYWxTdGF0ZSQkMS50aW1lb3V0ID0gbmV3IFRpbWVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlzbWlzc1dpdGgoJ3RpbWVyJyk7XG4gICAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZSQkMS50aW1lb3V0O1xuICAgICAgfSwgaW5uZXJQYXJhbXMudGltZXIpO1xuXG4gICAgICBpZiAoaW5uZXJQYXJhbXMudGltZXJQcm9ncmVzc0Jhcikge1xuICAgICAgICBzaG93KHRpbWVyUHJvZ3Jlc3NCYXIpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoZ2xvYmFsU3RhdGUkJDEudGltZW91dCAmJiBnbG9iYWxTdGF0ZSQkMS50aW1lb3V0LnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIC8vIHRpbWVyIGNhbiBiZSBhbHJlYWR5IHN0b3BwZWQgb3IgdW5zZXQgYXQgdGhpcyBwb2ludFxuICAgICAgICAgICAgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIoaW5uZXJQYXJhbXMudGltZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBpbml0Rm9jdXMgPSBmdW5jdGlvbiBpbml0Rm9jdXMoZG9tQ2FjaGUsIGlubmVyUGFyYW1zKSB7XG4gICAgaWYgKGlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd0VudGVyS2V5KSkge1xuICAgICAgcmV0dXJuIGJsdXJBY3RpdmVFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgaWYgKCFmb2N1c0J1dHRvbihkb21DYWNoZSwgaW5uZXJQYXJhbXMpKSB7XG4gICAgICBzZXRGb2N1cyhpbm5lclBhcmFtcywgLTEsIDEpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZm9jdXNCdXR0b24gPSBmdW5jdGlvbiBmb2N1c0J1dHRvbihkb21DYWNoZSwgaW5uZXJQYXJhbXMpIHtcbiAgICBpZiAoaW5uZXJQYXJhbXMuZm9jdXNEZW55ICYmIGlzVmlzaWJsZShkb21DYWNoZS5kZW55QnV0dG9uKSkge1xuICAgICAgZG9tQ2FjaGUuZGVueUJ1dHRvbi5mb2N1cygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlubmVyUGFyYW1zLmZvY3VzQ2FuY2VsICYmIGlzVmlzaWJsZShkb21DYWNoZS5jYW5jZWxCdXR0b24pKSB7XG4gICAgICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZm9jdXMoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpbm5lclBhcmFtcy5mb2N1c0NvbmZpcm0gJiYgaXNWaXNpYmxlKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pKSB7XG4gICAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmZvY3VzKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgdmFyIGJsdXJBY3RpdmVFbGVtZW50ID0gZnVuY3Rpb24gYmx1ckFjdGl2ZUVsZW1lbnQoKSB7XG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgdHlwZW9mIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1ciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHBvcHVwIHBhcmFtZXRlcnMuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZShwYXJhbXMpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG5cbiAgICBpZiAoIXBvcHVwIHx8IGhhc0NsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApKSB7XG4gICAgICByZXR1cm4gd2FybihcIllvdSdyZSB0cnlpbmcgdG8gdXBkYXRlIHRoZSBjbG9zZWQgb3IgY2xvc2luZyBwb3B1cCwgdGhhdCB3b24ndCB3b3JrLiBVc2UgdGhlIHVwZGF0ZSgpIG1ldGhvZCBpbiBwcmVDb25maXJtIHBhcmFtZXRlciBvciBzaG93IGEgbmV3IHBvcHVwLlwiKTtcbiAgICB9XG5cbiAgICB2YXIgdmFsaWRVcGRhdGFibGVQYXJhbXMgPSB7fTsgLy8gYXNzaWduIHZhbGlkIHBhcmFtcyBmcm9tIGBwYXJhbXNgIHRvIGBkZWZhdWx0c2BcblxuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgIGlmIChTd2FsLmlzVXBkYXRhYmxlUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgICB2YWxpZFVwZGF0YWJsZVBhcmFtc1twYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybihcIkludmFsaWQgcGFyYW1ldGVyIHRvIHVwZGF0ZTogXFxcIlwiLmNvbmNhdChwYXJhbSwgXCJcXFwiLiBVcGRhdGFibGUgcGFyYW1zIGFyZSBsaXN0ZWQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2Jsb2IvbWFzdGVyL3NyYy91dGlscy9wYXJhbXMuanNcXG5cXG5JZiB5b3UgdGhpbmsgdGhpcyBwYXJhbWV0ZXIgc2hvdWxkIGJlIHVwZGF0YWJsZSwgcmVxdWVzdCBpdCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzL25ldz90ZW1wbGF0ZT0wMl9mZWF0dXJlX3JlcXVlc3QubWRcIikpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVwZGF0ZWRQYXJhbXMgPSBfZXh0ZW5kcyh7fSwgaW5uZXJQYXJhbXMsIHZhbGlkVXBkYXRhYmxlUGFyYW1zKTtcblxuICAgIHJlbmRlcih0aGlzLCB1cGRhdGVkUGFyYW1zKTtcbiAgICBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuc2V0KHRoaXMsIHVwZGF0ZWRQYXJhbXMpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICB2YWx1ZTogX2V4dGVuZHMoe30sIHRoaXMucGFyYW1zLCBwYXJhbXMpLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZXN0cm95KCkge1xuICAgIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcblxuICAgIGlmICghaW5uZXJQYXJhbXMpIHtcbiAgICAgIHJldHVybjsgLy8gVGhpcyBpbnN0YW5jZSBoYXMgYWxyZWFkeSBiZWVuIGRlc3Ryb3llZFxuICAgIH0gLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYW5vdGhlciBTd2FsIGNsb3NpbmdcblxuXG4gICAgaWYgKGRvbUNhY2hlLnBvcHVwICYmIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaykge1xuICAgICAgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKCk7XG4gICAgICBkZWxldGUgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrO1xuICAgIH0gLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBzd2FsIGRpc3Bvc2FsIGRlZmVyIHRpbWVyXG5cblxuICAgIGlmIChnbG9iYWxTdGF0ZS5kZWZlckRpc3Bvc2FsVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dChnbG9iYWxTdGF0ZS5kZWZlckRpc3Bvc2FsVGltZXIpO1xuICAgICAgZGVsZXRlIGdsb2JhbFN0YXRlLmRlZmVyRGlzcG9zYWxUaW1lcjtcbiAgICB9XG5cbiAgICBydW5EaWREZXN0cm95KGlubmVyUGFyYW1zKTtcbiAgICBkaXNwb3NlU3dhbCh0aGlzKTtcbiAgfVxuXG4gIHZhciBydW5EaWREZXN0cm95ID0gZnVuY3Rpb24gcnVuRGlkRGVzdHJveShpbm5lclBhcmFtcykge1xuICAgIGlmICh0eXBlb2YgaW5uZXJQYXJhbXMuZGlkRGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaW5uZXJQYXJhbXMuZGlkRGVzdHJveSgpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGlubmVyUGFyYW1zLm9uRGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaW5uZXJQYXJhbXMub25EZXN0cm95KCk7IC8vIEBkZXByZWNhdGVkXG4gICAgfVxuICB9O1xuXG4gIHZhciBkaXNwb3NlU3dhbCA9IGZ1bmN0aW9uIGRpc3Bvc2VTd2FsKGluc3RhbmNlKSB7XG4gICAgLy8gVW5zZXQgdGhpcy5wYXJhbXMgc28gR0Mgd2lsbCBkaXNwb3NlIGl0ICgjMTU2OSlcbiAgICBkZWxldGUgaW5zdGFuY2UucGFyYW1zOyAvLyBVbnNldCBnbG9iYWxTdGF0ZSBwcm9wcyBzbyBHQyB3aWxsIGRpc3Bvc2UgZ2xvYmFsU3RhdGUgKCMxNTY5KVxuXG4gICAgZGVsZXRlIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyO1xuICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0OyAvLyBVbnNldCBXZWFrTWFwcyBzbyBHQyB3aWxsIGJlIGFibGUgdG8gZGlzcG9zZSB0aGVtICgjMTU2OSlcblxuICAgIHVuc2V0V2Vha01hcHMocHJpdmF0ZVByb3BzKTtcbiAgICB1bnNldFdlYWtNYXBzKHByaXZhdGVNZXRob2RzKTtcbiAgfTtcblxuICB2YXIgdW5zZXRXZWFrTWFwcyA9IGZ1bmN0aW9uIHVuc2V0V2Vha01hcHMob2JqKSB7XG4gICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgIG9ialtpXSA9IG5ldyBXZWFrTWFwKCk7XG4gICAgfVxuICB9O1xuXG5cblxuICB2YXIgaW5zdGFuY2VNZXRob2RzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIGhpZGVMb2FkaW5nOiBoaWRlTG9hZGluZyxcbiAgICBkaXNhYmxlTG9hZGluZzogaGlkZUxvYWRpbmcsXG4gICAgZ2V0SW5wdXQ6IGdldElucHV0JDEsXG4gICAgY2xvc2U6IGNsb3NlLFxuICAgIGNsb3NlUG9wdXA6IGNsb3NlLFxuICAgIGNsb3NlTW9kYWw6IGNsb3NlLFxuICAgIGNsb3NlVG9hc3Q6IGNsb3NlLFxuICAgIGVuYWJsZUJ1dHRvbnM6IGVuYWJsZUJ1dHRvbnMsXG4gICAgZGlzYWJsZUJ1dHRvbnM6IGRpc2FibGVCdXR0b25zLFxuICAgIGVuYWJsZUlucHV0OiBlbmFibGVJbnB1dCxcbiAgICBkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCxcbiAgICBzaG93VmFsaWRhdGlvbk1lc3NhZ2U6IHNob3dWYWxpZGF0aW9uTWVzc2FnZSxcbiAgICByZXNldFZhbGlkYXRpb25NZXNzYWdlOiByZXNldFZhbGlkYXRpb25NZXNzYWdlJDEsXG4gICAgZ2V0UHJvZ3Jlc3NTdGVwczogZ2V0UHJvZ3Jlc3NTdGVwcyQxLFxuICAgIF9tYWluOiBfbWFpbixcbiAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICBfZGVzdHJveTogX2Rlc3Ryb3lcbiAgfSk7XG5cbiAgdmFyIGN1cnJlbnRJbnN0YW5jZTtcblxuICB2YXIgU3dlZXRBbGVydCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3dlZXRBbGVydCgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTd2VldEFsZXJ0KTtcblxuICAgICAgLy8gUHJldmVudCBydW4gaW4gTm9kZSBlbnZcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIENoZWNrIGZvciB0aGUgZXhpc3RlbmNlIG9mIFByb21pc2VcblxuXG4gICAgICBpZiAodHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVycm9yKCdUaGlzIHBhY2thZ2UgcmVxdWlyZXMgYSBQcm9taXNlIGxpYnJhcnksIHBsZWFzZSBpbmNsdWRlIGEgc2hpbSB0byBlbmFibGUgaXQgaW4gdGhpcyBicm93c2VyIChTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi93aWtpL01pZ3JhdGlvbi1mcm9tLVN3ZWV0QWxlcnQtdG8tU3dlZXRBbGVydDIjMS1pZS1zdXBwb3J0KScpO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50SW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIG91dGVyUGFyYW1zID0gT2JqZWN0LmZyZWV6ZSh0aGlzLmNvbnN0cnVjdG9yLmFyZ3NUb1BhcmFtcyhhcmdzKSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHZhbHVlOiBvdXRlclBhcmFtcyxcbiAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhciBwcm9taXNlID0gdGhpcy5fbWFpbih0aGlzLnBhcmFtcyk7XG5cbiAgICAgIHByaXZhdGVQcm9wcy5wcm9taXNlLnNldCh0aGlzLCBwcm9taXNlKTtcbiAgICB9IC8vIGBjYXRjaGAgY2Fubm90IGJlIHRoZSBuYW1lIG9mIGEgbW9kdWxlIGV4cG9ydCwgc28gd2UgZGVmaW5lIG91ciB0aGVuYWJsZSBtZXRob2RzIGhlcmUgaW5zdGVhZFxuXG5cbiAgICBfY3JlYXRlQ2xhc3MoU3dlZXRBbGVydCwgW3tcbiAgICAgIGtleTogXCJ0aGVuXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHByaXZhdGVQcm9wcy5wcm9taXNlLmdldCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihvbkZ1bGZpbGxlZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImZpbmFsbHlcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluYWxseShvbkZpbmFsbHkpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBwcml2YXRlUHJvcHMucHJvbWlzZS5nZXQodGhpcyk7XG4gICAgICAgIHJldHVybiBwcm9taXNlW1wiZmluYWxseVwiXShvbkZpbmFsbHkpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTd2VldEFsZXJ0O1xuICB9KCk7IC8vIEFzc2lnbiBpbnN0YW5jZSBtZXRob2RzIGZyb20gc3JjL2luc3RhbmNlTWV0aG9kcy8qLmpzIHRvIHByb3RvdHlwZVxuXG5cbiAgX2V4dGVuZHMoU3dlZXRBbGVydC5wcm90b3R5cGUsIGluc3RhbmNlTWV0aG9kcyk7IC8vIEFzc2lnbiBzdGF0aWMgbWV0aG9kcyBmcm9tIHNyYy9zdGF0aWNNZXRob2RzLyouanMgdG8gY29uc3RydWN0b3JcblxuXG4gIF9leHRlbmRzKFN3ZWV0QWxlcnQsIHN0YXRpY01ldGhvZHMpOyAvLyBQcm94eSB0byBpbnN0YW5jZSBtZXRob2RzIHRvIGNvbnN0cnVjdG9yLCBmb3Igbm93LCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuXG4gIE9iamVjdC5rZXlzKGluc3RhbmNlTWV0aG9kcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgU3dlZXRBbGVydFtrZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGN1cnJlbnRJbnN0YW5jZSkge1xuICAgICAgICB2YXIgX2N1cnJlbnRJbnN0YW5jZTtcblxuICAgICAgICByZXR1cm4gKF9jdXJyZW50SW5zdGFuY2UgPSBjdXJyZW50SW5zdGFuY2UpW2tleV0uYXBwbHkoX2N1cnJlbnRJbnN0YW5jZSwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbiAgU3dlZXRBbGVydC5EaXNtaXNzUmVhc29uID0gRGlzbWlzc1JlYXNvbjtcbiAgU3dlZXRBbGVydC52ZXJzaW9uID0gJzEwLjE1LjUnO1xuXG4gIHZhciBTd2FsID0gU3dlZXRBbGVydDtcbiAgU3dhbFtcImRlZmF1bHRcIl0gPSBTd2FsO1xuXG4gIHJldHVybiBTd2FsO1xuXG59KSk7XG5pZiAodHlwZW9mIHRoaXMgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuU3dlZXRhbGVydDIpeyAgdGhpcy5zd2FsID0gdGhpcy5zd2VldEFsZXJ0ID0gdGhpcy5Td2FsID0gdGhpcy5Td2VldEFsZXJ0ID0gdGhpcy5Td2VldGFsZXJ0Mn1cbiJdLCJzb3VyY2VSb290IjoiIn0=