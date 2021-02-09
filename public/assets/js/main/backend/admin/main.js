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
return (self["webpackChunkkngell"] = self["webpackChunkkngell"] || []).push([["js/main/backend/admin/main"],{

/***/ "./src/assets/js/main/backend/admin/main.js":
/*!**************************************************!*\
  !*** ./src/assets/js/main/backend/admin/main.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var plugins_adminlte_adminlte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! plugins/adminlte/adminlte */ "./src/assets/plugins/adminlte/adminlte.js");
/* harmony import */ var plugins_adminlte_adminlte__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(plugins_adminlte_adminlte__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var plugins_adminlte_demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! plugins/adminlte/demo */ "./src/assets/plugins/adminlte/demo.js");
/* harmony import */ var plugins_adminlte_demo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(plugins_adminlte_demo__WEBPACK_IMPORTED_MODULE_1__);
//Admin lte
 //Demo



/***/ }),

/***/ "./src/assets/plugins/adminlte/adminlte.js":
/*!*************************************************!*\
  !*** ./src/assets/plugins/adminlte/adminlte.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/*!
 * AdminLTE v3.1.0-rc (https://adminlte.io)
 * Copyright 2014-2020 Colorlib <https://colorlib.com>
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")) :
  0;
}(this, (function (exports, $) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  /**
   * --------------------------------------------
   * AdminLTE CardRefresh.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME = 'CardRefresh';
  var DATA_KEY = 'lte.cardrefresh';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var EVENT_LOADED = "loaded" + EVENT_KEY;
  var EVENT_OVERLAY_ADDED = "overlay.added" + EVENT_KEY;
  var EVENT_OVERLAY_REMOVED = "overlay.removed" + EVENT_KEY;
  var CLASS_NAME_CARD = 'card';
  var SELECTOR_CARD = "." + CLASS_NAME_CARD;
  var SELECTOR_DATA_REFRESH = '[data-card-widget="card-refresh"]';
  var Default = {
    source: '',
    sourceSelector: '',
    params: {},
    trigger: SELECTOR_DATA_REFRESH,
    content: '.card-body',
    loadInContent: true,
    loadOnInit: true,
    responseType: '',
    overlayTemplate: '<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',
    onLoadStart: function onLoadStart() {},
    onLoadDone: function onLoadDone(response) {
      return response;
    }
  };

  var CardRefresh = /*#__PURE__*/function () {
    function CardRefresh(element, settings) {
      this._element = element;
      this._parent = element.parents(SELECTOR_CARD).first();
      this._settings = $__default['default'].extend({}, Default, settings);
      this._overlay = $__default['default'](this._settings.overlayTemplate);

      if (element.hasClass(CLASS_NAME_CARD)) {
        this._parent = element;
      }

      if (this._settings.source === '') {
        throw new Error('Source url was not defined. Please specify a url in your CardRefresh source option.');
      }
    }

    var _proto = CardRefresh.prototype;

    _proto.load = function load() {
      var _this = this;

      this._addOverlay();

      this._settings.onLoadStart.call($__default['default'](this));

      $__default['default'].get(this._settings.source, this._settings.params, function (response) {
        if (_this._settings.loadInContent) {
          if (_this._settings.sourceSelector !== '') {
            response = $__default['default'](response).find(_this._settings.sourceSelector).html();
          }

          _this._parent.find(_this._settings.content).html(response);
        }

        _this._settings.onLoadDone.call($__default['default'](_this), response);

        _this._removeOverlay();
      }, this._settings.responseType !== '' && this._settings.responseType);
      $__default['default'](this._element).trigger($__default['default'].Event(EVENT_LOADED));
    };

    _proto._addOverlay = function _addOverlay() {
      this._parent.append(this._overlay);

      $__default['default'](this._element).trigger($__default['default'].Event(EVENT_OVERLAY_ADDED));
    };

    _proto._removeOverlay = function _removeOverlay() {
      this._parent.find(this._overlay).remove();

      $__default['default'](this._element).trigger($__default['default'].Event(EVENT_OVERLAY_REMOVED));
    } // Private
    ;

    _proto._init = function _init() {
      var _this2 = this;

      $__default['default'](this).find(this._settings.trigger).on('click', function () {
        _this2.load();
      });

      if (this._settings.loadOnInit) {
        this.load();
      }
    } // Static
    ;

    CardRefresh._jQueryInterface = function _jQueryInterface(config) {
      var data = $__default['default'](this).data(DATA_KEY);

      var _options = $__default['default'].extend({}, Default, $__default['default'](this).data());

      if (!data) {
        data = new CardRefresh($__default['default'](this), _options);
        $__default['default'](this).data(DATA_KEY, typeof config === 'string' ? data : config);
      }

      if (typeof config === 'string' && config.match(/load/)) {
        data[config]();
      } else {
        data._init($__default['default'](this));
      }
    };

    return CardRefresh;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](document).on('click', SELECTOR_DATA_REFRESH, function (event) {
    if (event) {
      event.preventDefault();
    }

    CardRefresh._jQueryInterface.call($__default['default'](this), 'load');
  });
  $__default['default'](function () {
    $__default['default'](SELECTOR_DATA_REFRESH).each(function () {
      CardRefresh._jQueryInterface.call($__default['default'](this));
    });
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME] = CardRefresh._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = CardRefresh;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return CardRefresh._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE CardWidget.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$1 = 'CardWidget';
  var DATA_KEY$1 = 'lte.cardwidget';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var JQUERY_NO_CONFLICT$1 = $__default['default'].fn[NAME$1];
  var EVENT_EXPANDED = "expanded" + EVENT_KEY$1;
  var EVENT_COLLAPSED = "collapsed" + EVENT_KEY$1;
  var EVENT_MAXIMIZED = "maximized" + EVENT_KEY$1;
  var EVENT_MINIMIZED = "minimized" + EVENT_KEY$1;
  var EVENT_REMOVED = "removed" + EVENT_KEY$1;
  var CLASS_NAME_CARD$1 = 'card';
  var CLASS_NAME_COLLAPSED = 'collapsed-card';
  var CLASS_NAME_COLLAPSING = 'collapsing-card';
  var CLASS_NAME_EXPANDING = 'expanding-card';
  var CLASS_NAME_WAS_COLLAPSED = 'was-collapsed';
  var CLASS_NAME_MAXIMIZED = 'maximized-card';
  var SELECTOR_DATA_REMOVE = '[data-card-widget="remove"]';
  var SELECTOR_DATA_COLLAPSE = '[data-card-widget="collapse"]';
  var SELECTOR_DATA_MAXIMIZE = '[data-card-widget="maximize"]';
  var SELECTOR_CARD$1 = "." + CLASS_NAME_CARD$1;
  var SELECTOR_CARD_HEADER = '.card-header';
  var SELECTOR_CARD_BODY = '.card-body';
  var SELECTOR_CARD_FOOTER = '.card-footer';
  var Default$1 = {
    animationSpeed: 'normal',
    collapseTrigger: SELECTOR_DATA_COLLAPSE,
    removeTrigger: SELECTOR_DATA_REMOVE,
    maximizeTrigger: SELECTOR_DATA_MAXIMIZE,
    collapseIcon: 'fa-minus',
    expandIcon: 'fa-plus',
    maximizeIcon: 'fa-expand',
    minimizeIcon: 'fa-compress'
  };

  var CardWidget = /*#__PURE__*/function () {
    function CardWidget(element, settings) {
      this._element = element;
      this._parent = element.parents(SELECTOR_CARD$1).first();

      if (element.hasClass(CLASS_NAME_CARD$1)) {
        this._parent = element;
      }

      this._settings = $__default['default'].extend({}, Default$1, settings);
    }

    var _proto = CardWidget.prototype;

    _proto.collapse = function collapse() {
      var _this = this;

      this._parent.addClass(CLASS_NAME_COLLAPSING).children(SELECTOR_CARD_BODY + ", " + SELECTOR_CARD_FOOTER).slideUp(this._settings.animationSpeed, function () {
        _this._parent.addClass(CLASS_NAME_COLLAPSED).removeClass(CLASS_NAME_COLLAPSING);
      });

      this._parent.find("> " + SELECTOR_CARD_HEADER + " " + this._settings.collapseTrigger + " ." + this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon);

      this._element.trigger($__default['default'].Event(EVENT_COLLAPSED), this._parent);
    };

    _proto.expand = function expand() {
      var _this2 = this;

      this._parent.addClass(CLASS_NAME_EXPANDING).children(SELECTOR_CARD_BODY + ", " + SELECTOR_CARD_FOOTER).slideDown(this._settings.animationSpeed, function () {
        _this2._parent.removeClass(CLASS_NAME_COLLAPSED).removeClass(CLASS_NAME_EXPANDING);
      });

      this._parent.find("> " + SELECTOR_CARD_HEADER + " " + this._settings.collapseTrigger + " ." + this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon);

      this._element.trigger($__default['default'].Event(EVENT_EXPANDED), this._parent);
    };

    _proto.remove = function remove() {
      this._parent.slideUp();

      this._element.trigger($__default['default'].Event(EVENT_REMOVED), this._parent);
    };

    _proto.toggle = function toggle() {
      if (this._parent.hasClass(CLASS_NAME_COLLAPSED)) {
        this.expand();
        return;
      }

      this.collapse();
    };

    _proto.maximize = function maximize() {
      this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon);

      this._parent.css({
        height: this._parent.height(),
        width: this._parent.width(),
        transition: 'all .15s'
      }).delay(150).queue(function () {
        var $element = $__default['default'](this);
        $element.addClass(CLASS_NAME_MAXIMIZED);
        $__default['default']('html').addClass(CLASS_NAME_MAXIMIZED);

        if ($element.hasClass(CLASS_NAME_COLLAPSED)) {
          $element.addClass(CLASS_NAME_WAS_COLLAPSED);
        }

        $element.dequeue();
      });

      this._element.trigger($__default['default'].Event(EVENT_MAXIMIZED), this._parent);
    };

    _proto.minimize = function minimize() {
      this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon);

      this._parent.css('cssText', "height: " + this._parent[0].style.height + " !important; width: " + this._parent[0].style.width + " !important; transition: all .15s;").delay(10).queue(function () {
        var $element = $__default['default'](this);
        $element.removeClass(CLASS_NAME_MAXIMIZED);
        $__default['default']('html').removeClass(CLASS_NAME_MAXIMIZED);
        $element.css({
          height: 'inherit',
          width: 'inherit'
        });

        if ($element.hasClass(CLASS_NAME_WAS_COLLAPSED)) {
          $element.removeClass(CLASS_NAME_WAS_COLLAPSED);
        }

        $element.dequeue();
      });

      this._element.trigger($__default['default'].Event(EVENT_MINIMIZED), this._parent);
    };

    _proto.toggleMaximize = function toggleMaximize() {
      if (this._parent.hasClass(CLASS_NAME_MAXIMIZED)) {
        this.minimize();
        return;
      }

      this.maximize();
    } // Private
    ;

    _proto._init = function _init(card) {
      var _this3 = this;

      this._parent = card;
      $__default['default'](this).find(this._settings.collapseTrigger).click(function () {
        _this3.toggle();
      });
      $__default['default'](this).find(this._settings.maximizeTrigger).click(function () {
        _this3.toggleMaximize();
      });
      $__default['default'](this).find(this._settings.removeTrigger).click(function () {
        _this3.remove();
      });
    } // Static
    ;

    CardWidget._jQueryInterface = function _jQueryInterface(config) {
      var data = $__default['default'](this).data(DATA_KEY$1);

      var _options = $__default['default'].extend({}, Default$1, $__default['default'](this).data());

      if (!data) {
        data = new CardWidget($__default['default'](this), _options);
        $__default['default'](this).data(DATA_KEY$1, typeof config === 'string' ? data : config);
      }

      if (typeof config === 'string' && config.match(/collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/)) {
        data[config]();
      } else if (typeof config === 'object') {
        data._init($__default['default'](this));
      }
    };

    return CardWidget;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](document).on('click', SELECTOR_DATA_COLLAPSE, function (event) {
    if (event) {
      event.preventDefault();
    }

    CardWidget._jQueryInterface.call($__default['default'](this), 'toggle');
  });
  $__default['default'](document).on('click', SELECTOR_DATA_REMOVE, function (event) {
    if (event) {
      event.preventDefault();
    }

    CardWidget._jQueryInterface.call($__default['default'](this), 'remove');
  });
  $__default['default'](document).on('click', SELECTOR_DATA_MAXIMIZE, function (event) {
    if (event) {
      event.preventDefault();
    }

    CardWidget._jQueryInterface.call($__default['default'](this), 'toggleMaximize');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$1] = CardWidget._jQueryInterface;
  $__default['default'].fn[NAME$1].Constructor = CardWidget;

  $__default['default'].fn[NAME$1].noConflict = function () {
    $__default['default'].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return CardWidget._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE ControlSidebar.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$2 = 'ControlSidebar';
  var DATA_KEY$2 = 'lte.controlsidebar';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var JQUERY_NO_CONFLICT$2 = $__default['default'].fn[NAME$2];
  var EVENT_COLLAPSED$1 = "collapsed" + EVENT_KEY$2;
  var EVENT_EXPANDED$1 = "expanded" + EVENT_KEY$2;
  var SELECTOR_CONTROL_SIDEBAR = '.control-sidebar';
  var SELECTOR_CONTROL_SIDEBAR_CONTENT = '.control-sidebar-content';
  var SELECTOR_DATA_TOGGLE = '[data-widget="control-sidebar"]';
  var SELECTOR_HEADER = '.main-header';
  var SELECTOR_FOOTER = '.main-footer';
  var CLASS_NAME_CONTROL_SIDEBAR_ANIMATE = 'control-sidebar-animate';
  var CLASS_NAME_CONTROL_SIDEBAR_OPEN = 'control-sidebar-open';
  var CLASS_NAME_CONTROL_SIDEBAR_SLIDE = 'control-sidebar-slide-open';
  var CLASS_NAME_LAYOUT_FIXED = 'layout-fixed';
  var CLASS_NAME_NAVBAR_FIXED = 'layout-navbar-fixed';
  var CLASS_NAME_NAVBAR_SM_FIXED = 'layout-sm-navbar-fixed';
  var CLASS_NAME_NAVBAR_MD_FIXED = 'layout-md-navbar-fixed';
  var CLASS_NAME_NAVBAR_LG_FIXED = 'layout-lg-navbar-fixed';
  var CLASS_NAME_NAVBAR_XL_FIXED = 'layout-xl-navbar-fixed';
  var CLASS_NAME_FOOTER_FIXED = 'layout-footer-fixed';
  var CLASS_NAME_FOOTER_SM_FIXED = 'layout-sm-footer-fixed';
  var CLASS_NAME_FOOTER_MD_FIXED = 'layout-md-footer-fixed';
  var CLASS_NAME_FOOTER_LG_FIXED = 'layout-lg-footer-fixed';
  var CLASS_NAME_FOOTER_XL_FIXED = 'layout-xl-footer-fixed';
  var Default$2 = {
    controlsidebarSlide: true,
    scrollbarTheme: 'os-theme-light',
    scrollbarAutoHide: 'l'
  };
  /**
   * Class Definition
   * ====================================================
   */

  var ControlSidebar = /*#__PURE__*/function () {
    function ControlSidebar(element, config) {
      this._element = element;
      this._config = config;

      this._init();
    } // Public


    var _proto = ControlSidebar.prototype;

    _proto.collapse = function collapse() {
      var $body = $__default['default']('body');
      var $html = $__default['default']('html'); // Show the control sidebar

      if (this._config.controlsidebarSlide) {
        $html.addClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
        $body.removeClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE).delay(300).queue(function () {
          $__default['default'](SELECTOR_CONTROL_SIDEBAR).hide();
          $html.removeClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
          $__default['default'](this).dequeue();
        });
      } else {
        $body.removeClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN);
      }

      $__default['default'](this._element).trigger($__default['default'].Event(EVENT_COLLAPSED$1));
    };

    _proto.show = function show() {
      var $body = $__default['default']('body');
      var $html = $__default['default']('html'); // Collapse the control sidebar

      if (this._config.controlsidebarSlide) {
        $html.addClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
        $__default['default'](SELECTOR_CONTROL_SIDEBAR).show().delay(10).queue(function () {
          $body.addClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE).delay(300).queue(function () {
            $html.removeClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
            $__default['default'](this).dequeue();
          });
          $__default['default'](this).dequeue();
        });
      } else {
        $body.addClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN);
      }

      this._fixHeight();

      this._fixScrollHeight();

      $__default['default'](this._element).trigger($__default['default'].Event(EVENT_EXPANDED$1));
    };

    _proto.toggle = function toggle() {
      var $body = $__default['default']('body');
      var shouldClose = $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE);

      if (shouldClose) {
        // Close the control sidebar
        this.collapse();
      } else {
        // Open the control sidebar
        this.show();
      }
    } // Private
    ;

    _proto._init = function _init() {
      var _this = this;

      this._fixHeight();

      this._fixScrollHeight();

      $__default['default'](window).resize(function () {
        _this._fixHeight();

        _this._fixScrollHeight();
      });
      $__default['default'](window).scroll(function () {
        var $body = $__default['default']('body');
        var shouldFixHeight = $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE);

        if (shouldFixHeight) {
          _this._fixScrollHeight();
        }
      });
    };

    _proto._fixScrollHeight = function _fixScrollHeight() {
      var $body = $__default['default']('body');

      if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED)) {
        return;
      }

      var heights = {
        scroll: $__default['default'](document).height(),
        window: $__default['default'](window).height(),
        header: $__default['default'](SELECTOR_HEADER).outerHeight(),
        footer: $__default['default'](SELECTOR_FOOTER).outerHeight()
      };
      var positions = {
        bottom: Math.abs(heights.window + $__default['default'](window).scrollTop() - heights.scroll),
        top: $__default['default'](window).scrollTop()
      };
      var navbarFixed = ($body.hasClass(CLASS_NAME_NAVBAR_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_SM_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_MD_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_LG_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_XL_FIXED)) && $__default['default'](SELECTOR_HEADER).css('position') === 'fixed';
      var footerFixed = ($body.hasClass(CLASS_NAME_FOOTER_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_SM_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_MD_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_LG_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_XL_FIXED)) && $__default['default'](SELECTOR_FOOTER).css('position') === 'fixed';
      var $controlSidebar = $__default['default'](SELECTOR_CONTROL_SIDEBAR);
      var $controlsidebarContent = $__default['default'](SELECTOR_CONTROL_SIDEBAR + ", " + SELECTOR_CONTROL_SIDEBAR + " " + SELECTOR_CONTROL_SIDEBAR_CONTENT);

      if (positions.top === 0 && positions.bottom === 0) {
        $controlSidebar.css({
          bottom: heights.footer,
          top: heights.header
        });
        $controlsidebarContent.css('height', heights.window - (heights.header + heights.footer));
      } else if (positions.bottom <= heights.footer) {
        if (footerFixed === false) {
          var top = heights.header - positions.top;
          $controlSidebar.css('bottom', heights.footer - positions.bottom).css('top', top >= 0 ? top : 0);
          $controlsidebarContent.css('height', heights.window - (heights.footer - positions.bottom));
        } else {
          $controlSidebar.css('bottom', heights.footer);
        }
      } else if (positions.top <= heights.header) {
        if (navbarFixed === false) {
          $controlSidebar.css('top', heights.header - positions.top);
          $controlsidebarContent.css('height', heights.window - (heights.header - positions.top));
        } else {
          $controlSidebar.css('top', heights.header);
        }
      } else if (navbarFixed === false) {
        $controlSidebar.css('top', 0);
        $controlsidebarContent.css('height', heights.window);
      } else {
        $controlSidebar.css('top', heights.header);
      }
    };

    _proto._fixHeight = function _fixHeight() {
      var $body = $__default['default']('body');

      if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED)) {
        return;
      }

      var heights = {
        window: $__default['default'](window).height(),
        header: $__default['default'](SELECTOR_HEADER).outerHeight(),
        footer: $__default['default'](SELECTOR_FOOTER).outerHeight()
      };
      var sidebarHeight = heights.window - heights.header;

      if ($body.hasClass(CLASS_NAME_FOOTER_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_SM_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_MD_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_LG_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_XL_FIXED)) {
        if ($__default['default'](SELECTOR_FOOTER).css('position') === 'fixed') {
          sidebarHeight = heights.window - heights.header - heights.footer;
        }
      }

      var $controlSidebar = $__default['default'](SELECTOR_CONTROL_SIDEBAR + " " + SELECTOR_CONTROL_SIDEBAR_CONTENT);
      $controlSidebar.css('height', sidebarHeight);

      if (typeof $__default['default'].fn.overlayScrollbars !== 'undefined') {
        $controlSidebar.overlayScrollbars({
          className: this._config.scrollbarTheme,
          sizeAutoCapable: true,
          scrollbars: {
            autoHide: this._config.scrollbarAutoHide,
            clickScrolling: true
          }
        });
      }
    } // Static
    ;

    ControlSidebar._jQueryInterface = function _jQueryInterface(operation) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$2);

        var _options = $__default['default'].extend({}, Default$2, $__default['default'](this).data());

        if (!data) {
          data = new ControlSidebar(this, _options);
          $__default['default'](this).data(DATA_KEY$2, data);
        }

        if (data[operation] === 'undefined') {
          throw new Error(operation + " is not a function");
        }

        data[operation]();
      });
    };

    return ControlSidebar;
  }();
  /**
   *
   * Data Api implementation
   * ====================================================
   */


  $__default['default'](document).on('click', SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault();

    ControlSidebar._jQueryInterface.call($__default['default'](this), 'toggle');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$2] = ControlSidebar._jQueryInterface;
  $__default['default'].fn[NAME$2].Constructor = ControlSidebar;

  $__default['default'].fn[NAME$2].noConflict = function () {
    $__default['default'].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return ControlSidebar._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE DirectChat.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$3 = 'DirectChat';
  var DATA_KEY$3 = 'lte.directchat';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var JQUERY_NO_CONFLICT$3 = $__default['default'].fn[NAME$3];
  var EVENT_TOGGLED = "toggled" + EVENT_KEY$3;
  var SELECTOR_DATA_TOGGLE$1 = '[data-widget="chat-pane-toggle"]';
  var SELECTOR_DIRECT_CHAT = '.direct-chat';
  var CLASS_NAME_DIRECT_CHAT_OPEN = 'direct-chat-contacts-open';
  /**
   * Class Definition
   * ====================================================
   */

  var DirectChat = /*#__PURE__*/function () {
    function DirectChat(element) {
      this._element = element;
    }

    var _proto = DirectChat.prototype;

    _proto.toggle = function toggle() {
      $__default['default'](this._element).parents(SELECTOR_DIRECT_CHAT).first().toggleClass(CLASS_NAME_DIRECT_CHAT_OPEN);
      $__default['default'](this._element).trigger($__default['default'].Event(EVENT_TOGGLED));
    } // Static
    ;

    DirectChat._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$3);

        if (!data) {
          data = new DirectChat($__default['default'](this));
          $__default['default'](this).data(DATA_KEY$3, data);
        }

        data[config]();
      });
    };

    return DirectChat;
  }();
  /**
   *
   * Data Api implementation
   * ====================================================
   */


  $__default['default'](document).on('click', SELECTOR_DATA_TOGGLE$1, function (event) {
    if (event) {
      event.preventDefault();
    }

    DirectChat._jQueryInterface.call($__default['default'](this), 'toggle');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$3] = DirectChat._jQueryInterface;
  $__default['default'].fn[NAME$3].Constructor = DirectChat;

  $__default['default'].fn[NAME$3].noConflict = function () {
    $__default['default'].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return DirectChat._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE Dropdown.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$4 = 'Dropdown';
  var DATA_KEY$4 = 'lte.dropdown';
  var JQUERY_NO_CONFLICT$4 = $__default['default'].fn[NAME$4];
  var SELECTOR_NAVBAR = '.navbar';
  var SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
  var SELECTOR_DROPDOWN_MENU_ACTIVE = '.dropdown-menu.show';
  var SELECTOR_DROPDOWN_TOGGLE = '[data-toggle="dropdown"]';
  var CLASS_NAME_DROPDOWN_RIGHT = 'dropdown-menu-right';
  var CLASS_NAME_DROPDOWN_SUBMENU = 'dropdown-submenu'; // TODO: this is unused; should be removed along with the extend?

  var Default$3 = {};
  /**
   * Class Definition
   * ====================================================
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._config = config;
      this._element = element;
    } // Public


    var _proto = Dropdown.prototype;

    _proto.toggleSubmenu = function toggleSubmenu() {
      this._element.siblings().show().toggleClass('show');

      if (!this._element.next().hasClass('show')) {
        this._element.parents(SELECTOR_DROPDOWN_MENU).first().find('.show').removeClass('show').hide();
      }

      this._element.parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function () {
        $__default['default']('.dropdown-submenu .show').removeClass('show').hide();
      });
    };

    _proto.fixPosition = function fixPosition() {
      var $element = $__default['default'](SELECTOR_DROPDOWN_MENU_ACTIVE);

      if ($element.length === 0) {
        return;
      }

      if ($element.hasClass(CLASS_NAME_DROPDOWN_RIGHT)) {
        $element.css({
          left: 'inherit',
          right: 0
        });
      } else {
        $element.css({
          left: 0,
          right: 'inherit'
        });
      }

      var offset = $element.offset();
      var width = $element.width();
      var visiblePart = $__default['default'](window).width() - offset.left;

      if (offset.left < 0) {
        $element.css({
          left: 'inherit',
          right: offset.left - 5
        });
      } else if (visiblePart < width) {
        $element.css({
          left: 'inherit',
          right: 0
        });
      }
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$4);

        var _config = $__default['default'].extend({}, Default$3, $__default['default'](this).data());

        if (!data) {
          data = new Dropdown($__default['default'](this), _config);
          $__default['default'](this).data(DATA_KEY$4, data);
        }

        if (config === 'toggleSubmenu' || config === 'fixPosition') {
          data[config]();
        }
      });
    };

    return Dropdown;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](SELECTOR_DROPDOWN_MENU + " " + SELECTOR_DROPDOWN_TOGGLE).on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($__default['default'](this), 'toggleSubmenu');
  });
  $__default['default'](SELECTOR_NAVBAR + " " + SELECTOR_DROPDOWN_TOGGLE).on('click', function (event) {
    event.preventDefault();

    if ($__default['default'](event.target).parent().hasClass(CLASS_NAME_DROPDOWN_SUBMENU)) {
      return;
    }

    setTimeout(function () {
      Dropdown._jQueryInterface.call($__default['default'](this), 'fixPosition');
    }, 1);
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$4] = Dropdown._jQueryInterface;
  $__default['default'].fn[NAME$4].Constructor = Dropdown;

  $__default['default'].fn[NAME$4].noConflict = function () {
    $__default['default'].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE ExpandableTable.js
   * License MIT
   * --------------------------------------------
   */
  /**
    * Constants
    * ====================================================
    */

  var NAME$5 = 'ExpandableTable';
  var DATA_KEY$5 = 'lte.expandableTable';
  var EVENT_KEY$4 = "." + DATA_KEY$5;
  var JQUERY_NO_CONFLICT$5 = $__default['default'].fn[NAME$5];
  var EVENT_EXPANDED$2 = "expanded" + EVENT_KEY$4;
  var EVENT_COLLAPSED$2 = "collapsed" + EVENT_KEY$4;
  var SELECTOR_TABLE = '.expandable-table';
  var SELECTOR_DATA_TOGGLE$2 = '[data-widget="expandable-table"]';
  var SELECTOR_ARIA_ATTR = 'aria-expanded';
  /**
    * Class Definition
    * ====================================================
    */

  var ExpandableTable = /*#__PURE__*/function () {
    function ExpandableTable(element, options) {
      this._options = options;
      this._element = element;
    } // Public


    var _proto = ExpandableTable.prototype;

    _proto.init = function init() {
      $__default['default'](SELECTOR_DATA_TOGGLE$2).each(function (_, $header) {
        var $type = $__default['default']($header).attr(SELECTOR_ARIA_ATTR);
        var $body = $__default['default']($header).next().children().first().children();

        if ($type === 'true') {
          $body.show();
        } else if ($type === 'false') {
          $body.hide();
          $body.parent().parent().addClass('d-none');
        }
      });
    };

    _proto.toggleRow = function toggleRow() {
      var $element = this._element;
      var time = 500;
      var $type = $element.attr(SELECTOR_ARIA_ATTR);
      var $body = $element.next().children().first().children();
      $body.stop();

      if ($type === 'true') {
        $body.slideUp(time, function () {
          $element.next().addClass('d-none');
        });
        $element.attr(SELECTOR_ARIA_ATTR, 'false');
        $element.trigger($__default['default'].Event(EVENT_COLLAPSED$2));
      } else if ($type === 'false') {
        $element.next().removeClass('d-none');
        $body.slideDown(time);
        $element.attr(SELECTOR_ARIA_ATTR, 'true');
        $element.trigger($__default['default'].Event(EVENT_EXPANDED$2));
      }
    } // Static
    ;

    ExpandableTable._jQueryInterface = function _jQueryInterface(operation) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$5);

        if (!data) {
          data = new ExpandableTable($__default['default'](this));
          $__default['default'](this).data(DATA_KEY$5, data);
        }

        if (typeof operation === 'string' && operation.match(/init|toggleRow/)) {
          data[operation]();
        }
      });
    };

    return ExpandableTable;
  }();
  /**
    * Data API
    * ====================================================
    */


  $__default['default'](SELECTOR_TABLE).ready(function () {
    ExpandableTable._jQueryInterface.call($__default['default'](this), 'init');
  });
  $__default['default'](document).on('click', SELECTOR_DATA_TOGGLE$2, function () {
    ExpandableTable._jQueryInterface.call($__default['default'](this), 'toggleRow');
  });
  /**
    * jQuery API
    * ====================================================
    */

  $__default['default'].fn[NAME$5] = ExpandableTable._jQueryInterface;
  $__default['default'].fn[NAME$5].Constructor = ExpandableTable;

  $__default['default'].fn[NAME$5].noConflict = function () {
    $__default['default'].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return ExpandableTable._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE Fullscreen.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$6 = 'Fullscreen';
  var DATA_KEY$6 = 'lte.fullscreen';
  var JQUERY_NO_CONFLICT$6 = $__default['default'].fn[NAME$6];
  var SELECTOR_DATA_WIDGET = '[data-widget="fullscreen"]';
  var SELECTOR_ICON = SELECTOR_DATA_WIDGET + " i";
  var Default$4 = {
    minimizeIcon: 'fa-compress-arrows-alt',
    maximizeIcon: 'fa-expand-arrows-alt'
  };
  /**
   * Class Definition
   * ====================================================
   */

  var Fullscreen = /*#__PURE__*/function () {
    function Fullscreen(_element, _options) {
      this.element = _element;
      this.options = $__default['default'].extend({}, Default$4, _options);
    } // Public


    var _proto = Fullscreen.prototype;

    _proto.toggle = function toggle() {
      if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        this.windowed();
      } else {
        this.fullscreen();
      }
    };

    _proto.fullscreen = function fullscreen() {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }

      $__default['default'](SELECTOR_ICON).removeClass(this.options.maximizeIcon).addClass(this.options.minimizeIcon);
    };

    _proto.windowed = function windowed() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }

      $__default['default'](SELECTOR_ICON).removeClass(this.options.minimizeIcon).addClass(this.options.maximizeIcon);
    } // Static
    ;

    Fullscreen._jQueryInterface = function _jQueryInterface(config) {
      var data = $__default['default'](this).data(DATA_KEY$6);

      if (!data) {
        data = $__default['default'](this).data();
      }

      var _options = $__default['default'].extend({}, Default$4, typeof config === 'object' ? config : data);

      var plugin = new Fullscreen($__default['default'](this), _options);
      $__default['default'](this).data(DATA_KEY$6, typeof config === 'object' ? config : data);

      if (typeof config === 'string' && config.match(/toggle|fullscreen|windowed/)) {
        plugin[config]();
      } else {
        plugin.init();
      }
    };

    return Fullscreen;
  }();
  /**
    * Data API
    * ====================================================
    */


  $__default['default'](document).on('click', SELECTOR_DATA_WIDGET, function () {
    Fullscreen._jQueryInterface.call($__default['default'](this), 'toggle');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$6] = Fullscreen._jQueryInterface;
  $__default['default'].fn[NAME$6].Constructor = Fullscreen;

  $__default['default'].fn[NAME$6].noConflict = function () {
    $__default['default'].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Fullscreen._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE IFrame.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$7 = 'IFrame';
  var DATA_KEY$7 = 'lte.iframe';
  var JQUERY_NO_CONFLICT$7 = $__default['default'].fn[NAME$7];
  var SELECTOR_DATA_TOGGLE$3 = '[data-widget="iframe"]';
  var SELECTOR_DATA_TOGGLE_CLOSE = '[data-widget="iframe-close"]';
  var SELECTOR_DATA_TOGGLE_SCROLL_LEFT = '[data-widget="iframe-scrollleft"]';
  var SELECTOR_DATA_TOGGLE_SCROLL_RIGHT = '[data-widget="iframe-scrollright"]';
  var SELECTOR_DATA_TOGGLE_FULLSCREEN = '[data-widget="iframe-fullscreen"]';
  var SELECTOR_CONTENT_WRAPPER = '.content-wrapper';
  var SELECTOR_CONTENT_IFRAME = SELECTOR_CONTENT_WRAPPER + " iframe";
  var SELECTOR_TAB_NAV = SELECTOR_DATA_TOGGLE$3 + ".iframe-mode .nav";
  var SELECTOR_TAB_NAVBAR_NAV = SELECTOR_DATA_TOGGLE$3 + ".iframe-mode .navbar-nav";
  var SELECTOR_TAB_NAVBAR_NAV_ITEM = SELECTOR_TAB_NAVBAR_NAV + " .nav-item";
  var SELECTOR_TAB_CONTENT = SELECTOR_DATA_TOGGLE$3 + ".iframe-mode .tab-content";
  var SELECTOR_TAB_EMPTY = SELECTOR_TAB_CONTENT + " .tab-empty";
  var SELECTOR_TAB_LOADING = SELECTOR_TAB_CONTENT + " .tab-loading";
  var SELECTOR_SIDEBAR_MENU_ITEM = '.main-sidebar .nav-item > a.nav-link';
  var SELECTOR_HEADER_MENU_ITEM = '.main-header .nav-item a.nav-link';
  var SELECTOR_HEADER_DROPDOWN_ITEM = '.main-header a.dropdown-item';
  var CLASS_NAME_IFRAME_MODE = 'iframe-mode';
  var CLASS_NAME_FULLSCREEN_MODE = 'iframe-mode-fullscreen';
  var Default$5 = {
    onTabClick: function onTabClick(item) {
      return item;
    },
    onTabChanged: function onTabChanged(item) {
      return item;
    },
    onTabCreated: function onTabCreated(item) {
      return item;
    },
    autoIframeMode: true,
    autoItemActive: true,
    autoShowNewTab: true,
    loadingScreen: true,
    useNavbarItems: true,
    scrollOffset: 40,
    scrollBehaviorSwap: false,
    iconMaximize: 'fa-expand',
    iconMinimize: 'fa-compress'
  };
  /**
   * Class Definition
   * ====================================================
   */

  var IFrame = /*#__PURE__*/function () {
    function IFrame(element, config) {
      this._config = config;
      this._element = element;

      this._init();
    } // Public


    var _proto = IFrame.prototype;

    _proto.onTabClick = function onTabClick(item) {
      this._config.onTabClick(item);
    };

    _proto.onTabChanged = function onTabChanged(item) {
      this._config.onTabChanged(item);
    };

    _proto.onTabCreated = function onTabCreated(item) {
      this._config.onTabCreated(item);
    };

    _proto.createTab = function createTab(title, link, uniqueName, autoOpen) {
      var _this = this;

      var tabId = "panel-" + uniqueName + "-" + Math.floor(Math.random() * 1000);
      var navId = "tab-" + uniqueName + "-" + Math.floor(Math.random() * 1000);
      var newNavItem = "<li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" data-toggle=\"row\" id=\"" + navId + "\" href=\"#" + tabId + "\" role=\"tab\" aria-controls=\"" + tabId + "\" aria-selected=\"false\">" + title + "</a></li>";
      $__default['default'](SELECTOR_TAB_NAVBAR_NAV).append(newNavItem);
      var newTabItem = "<div class=\"tab-pane fade\" id=\"" + tabId + "\" role=\"tabpanel\" aria-labelledby=\"" + navId + "\"><iframe src=\"" + link + "\"></iframe></div>";
      $__default['default'](SELECTOR_TAB_CONTENT).append(newTabItem);

      if (autoOpen) {
        if (this._config.loadingScreen) {
          var $loadingScreen = $__default['default'](SELECTOR_TAB_LOADING);
          $loadingScreen.fadeIn();
          $__default['default'](tabId + " iframe").ready(function () {
            if (typeof _this._config.loadingScreen === 'number') {
              _this.switchTab("#" + navId, _this._config.loadingScreen);

              setTimeout(function () {
                $loadingScreen.fadeOut();
              }, _this._config.loadingScreen);
            } else {
              _this.switchTab("#" + navId, _this._config.loadingScreen);

              $loadingScreen.fadeOut();
            }
          });
        } else {
          this.switchTab("#" + navId);
        }
      }

      this.onTabCreated($__default['default']("#" + navId));
    };

    _proto.openTabSidebar = function openTabSidebar(item, autoOpen) {
      if (autoOpen === void 0) {
        autoOpen = this._config.autoShowNewTab;
      }

      var $item = $__default['default'](item).clone();

      if ($item.attr('href') === undefined) {
        $item = $__default['default'](item).parent('a').clone();
      }

      $item.find('.right').remove();
      var title = $item.find('p').text();

      if (title === '') {
        title = $item.text();
      }

      var link = $item.attr('href');

      if (link === '#' || link === '' || link === undefined) {
        return;
      }

      this.createTab(title, link, link.replace('.html', '').replace('./', '').replaceAll('/', '-'), autoOpen);
    };

    _proto.switchTab = function switchTab(item) {
      var $item = $__default['default'](item);
      var tabId = $item.attr('href');
      $__default['default'](SELECTOR_TAB_EMPTY).hide();
      $__default['default'](SELECTOR_TAB_NAVBAR_NAV + " .active").tab('dispose').removeClass('active');

      this._fixHeight();

      $item.tab('show');
      $item.parents('li').addClass('active');
      this.onTabChanged($item);

      if (this._config.autoItemActive) {
        this._setItemActive($__default['default'](tabId + " iframe").attr('src'));
      }
    };

    _proto.removeActiveTab = function removeActiveTab() {
      var $navItem = $__default['default'](SELECTOR_TAB_NAVBAR_NAV_ITEM + ".active");
      var $navItemParent = $navItem.parent();
      var navItemIndex = $navItem.index();
      $navItem.remove();
      $__default['default']('.tab-pane.active').remove();

      if ($__default['default'](SELECTOR_TAB_CONTENT).children().length == $__default['default'](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).length) {
        $__default['default'](SELECTOR_TAB_EMPTY).show();
      } else {
        var prevNavItemIndex = navItemIndex - 1;
        this.switchTab($navItemParent.children().eq(prevNavItemIndex).find('a'));
      }
    };

    _proto.toggleFullscreen = function toggleFullscreen() {
      if ($__default['default']('body').hasClass(CLASS_NAME_FULLSCREEN_MODE)) {
        $__default['default'](SELECTOR_DATA_TOGGLE_FULLSCREEN + " i").removeClass(this._config.iconMinimize).addClass(this._config.iconMaximize);
        $__default['default']('body').removeClass(CLASS_NAME_FULLSCREEN_MODE);
        $__default['default'](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).height('auto');
        $__default['default'](SELECTOR_CONTENT_WRAPPER).height('auto');
        $__default['default'](SELECTOR_CONTENT_IFRAME).height('auto');
      } else {
        $__default['default'](SELECTOR_DATA_TOGGLE_FULLSCREEN + " i").removeClass(this._config.iconMaximize).addClass(this._config.iconMinimize);
        $__default['default']('body').addClass(CLASS_NAME_FULLSCREEN_MODE);
      }

      $__default['default'](window).trigger('resize');

      this._fixHeight(true);
    } // Private
    ;

    _proto._init = function _init() {
      if (window.frameElement && this._config.autoIframeMode) {
        $__default['default']('body').addClass(CLASS_NAME_IFRAME_MODE);
      } else if ($__default['default'](SELECTOR_CONTENT_WRAPPER).hasClass(CLASS_NAME_IFRAME_MODE)) {
        this._setupListeners();

        this._fixHeight(true);
      }
    };

    _proto._navScroll = function _navScroll(offset) {
      var leftPos = $__default['default'](SELECTOR_TAB_NAVBAR_NAV).scrollLeft();
      $__default['default'](SELECTOR_TAB_NAVBAR_NAV).animate({
        scrollLeft: leftPos + offset
      }, 250, 'linear');
    };

    _proto._setupListeners = function _setupListeners() {
      var _this2 = this;

      $__default['default'](window).on('resize', function () {
        setTimeout(function () {
          _this2._fixHeight();
        }, 1);
      });
      $__default['default'](document).on('click', SELECTOR_SIDEBAR_MENU_ITEM, function (e) {
        e.preventDefault();

        _this2.openTabSidebar(e.target);
      });

      if (this._config.useNavbarItems) {
        $__default['default'](document).on('click', SELECTOR_HEADER_MENU_ITEM + ", " + SELECTOR_HEADER_DROPDOWN_ITEM, function (e) {
          e.preventDefault();

          _this2.openTabSidebar(e.target);
        });
      }

      $__default['default'](document).on('click', SELECTOR_TAB_NAVBAR_NAV_ITEM, function (e) {
        e.preventDefault();

        _this2.onTabClick(e.target);

        _this2.switchTab(e.target);
      });
      $__default['default'](document).on('click', SELECTOR_DATA_TOGGLE_CLOSE, function (e) {
        e.preventDefault();

        _this2.removeActiveTab();
      });
      $__default['default'](document).on('click', SELECTOR_DATA_TOGGLE_FULLSCREEN, function (e) {
        e.preventDefault();

        _this2.toggleFullscreen();
      });
      var mousedown = false;
      var mousedownInterval = null;
      $__default['default'](document).on('mousedown', SELECTOR_DATA_TOGGLE_SCROLL_LEFT, function (e) {
        e.preventDefault();
        clearInterval(mousedownInterval);
        var scrollOffset = _this2._config.scrollOffset;

        if (!_this2._config.scrollBehaviorSwap) {
          scrollOffset = -scrollOffset;
        }

        mousedown = true;

        _this2._navScroll(scrollOffset);

        mousedownInterval = setInterval(function () {
          _this2._navScroll(scrollOffset);
        }, 250);
      });
      $__default['default'](document).on('mousedown', SELECTOR_DATA_TOGGLE_SCROLL_RIGHT, function (e) {
        e.preventDefault();
        clearInterval(mousedownInterval);
        var scrollOffset = _this2._config.scrollOffset;

        if (_this2._config.scrollBehaviorSwap) {
          scrollOffset = -scrollOffset;
        }

        mousedown = true;

        _this2._navScroll(scrollOffset);

        mousedownInterval = setInterval(function () {
          _this2._navScroll(scrollOffset);
        }, 250);
      });
      $__default['default'](document).on('mouseup', function () {
        if (mousedown) {
          mousedown = false;
          clearInterval(mousedownInterval);
          mousedownInterval = null;
        }
      });
    };

    _proto._setItemActive = function _setItemActive(href) {
      $__default['default'](SELECTOR_SIDEBAR_MENU_ITEM + ", " + SELECTOR_HEADER_DROPDOWN_ITEM).removeClass('active');
      $__default['default'](SELECTOR_HEADER_MENU_ITEM).parent().removeClass('active');
      var $headerMenuItem = $__default['default'](SELECTOR_HEADER_MENU_ITEM + "[href$=\"" + href + "\"]");
      var $headerDropdownItem = $__default['default'](SELECTOR_HEADER_DROPDOWN_ITEM + "[href$=\"" + href + "\"]");
      var $sidebarMenuItem = $__default['default'](SELECTOR_SIDEBAR_MENU_ITEM + "[href$=\"" + href + "\"]");
      $headerMenuItem.each(function (i, e) {
        $__default['default'](e).parent().addClass('active');
      });
      $headerDropdownItem.each(function (i, e) {
        $__default['default'](e).addClass('active');
      });
      $sidebarMenuItem.each(function (i, e) {
        $__default['default'](e).addClass('active');
        $__default['default'](e).parents('.nav-treeview').prevAll('.nav-link').addClass('active');
      });
    };

    _proto._fixHeight = function _fixHeight(tabEmpty) {
      if (tabEmpty === void 0) {
        tabEmpty = false;
      }

      if ($__default['default']('body').hasClass(CLASS_NAME_FULLSCREEN_MODE)) {
        var windowHeight = $__default['default'](window).height();
        $__default['default'](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).height(windowHeight);
        $__default['default'](SELECTOR_CONTENT_WRAPPER).height(windowHeight);
        $__default['default'](SELECTOR_CONTENT_IFRAME).height(windowHeight);
      } else {
        var contentWrapperHeight = parseFloat($__default['default'](SELECTOR_CONTENT_WRAPPER).css('min-height'));
        var navbarHeight = $__default['default'](SELECTOR_TAB_NAV).outerHeight();

        if (tabEmpty == true) {
          setTimeout(function () {
            $__default['default'](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).height(contentWrapperHeight - navbarHeight);
          }, 50);
        } else {
          $__default['default'](SELECTOR_CONTENT_IFRAME).height(contentWrapperHeight - navbarHeight);
        }
      }
    } // Static
    ;

    IFrame._jQueryInterface = function _jQueryInterface(operation) {
      var data = $__default['default'](this).data(DATA_KEY$7);

      var _options = $__default['default'].extend({}, Default$5, $__default['default'](this).data());

      if (!data) {
        data = new IFrame(this, _options);
        $__default['default'](this).data(DATA_KEY$7, data);
      }

      if (typeof operation === 'string' && operation.match(/createTab|openTabSidebar|switchTab|removeActiveTab/)) {
        var _data;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        (_data = data)[operation].apply(_data, args);
      }
    };

    return IFrame;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](window).on('load', function () {
    IFrame._jQueryInterface.call($__default['default'](SELECTOR_DATA_TOGGLE$3));
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$7] = IFrame._jQueryInterface;
  $__default['default'].fn[NAME$7].Constructor = IFrame;

  $__default['default'].fn[NAME$7].noConflict = function () {
    $__default['default'].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return IFrame._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE Layout.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$8 = 'Layout';
  var DATA_KEY$8 = 'lte.layout';
  var JQUERY_NO_CONFLICT$8 = $__default['default'].fn[NAME$8];
  var SELECTOR_HEADER$1 = '.main-header';
  var SELECTOR_MAIN_SIDEBAR = '.main-sidebar';
  var SELECTOR_SIDEBAR = '.main-sidebar .sidebar';
  var SELECTOR_CONTENT = '.content-wrapper';
  var SELECTOR_CONTROL_SIDEBAR_CONTENT$1 = '.control-sidebar-content';
  var SELECTOR_CONTROL_SIDEBAR_BTN = '[data-widget="control-sidebar"]';
  var SELECTOR_FOOTER$1 = '.main-footer';
  var SELECTOR_PUSHMENU_BTN = '[data-widget="pushmenu"]';
  var SELECTOR_LOGIN_BOX = '.login-box';
  var SELECTOR_REGISTER_BOX = '.register-box';
  var CLASS_NAME_SIDEBAR_FOCUSED = 'sidebar-focused';
  var CLASS_NAME_LAYOUT_FIXED$1 = 'layout-fixed';
  var CLASS_NAME_CONTROL_SIDEBAR_SLIDE_OPEN = 'control-sidebar-slide-open';
  var CLASS_NAME_CONTROL_SIDEBAR_OPEN$1 = 'control-sidebar-open';
  var CLASS_NAME_LAYOUT_TOP_NAV = 'layout-top-nav';
  var Default$6 = {
    scrollbarTheme: 'os-theme-light',
    scrollbarAutoHide: 'l',
    panelAutoHeight: true,
    panelAutoHeightMode: 'min-height',
    loginRegisterAutoHeight: true
  };
  /**
   * Class Definition
   * ====================================================
   */

  var Layout = /*#__PURE__*/function () {
    function Layout(element, config) {
      this._config = config;
      this._element = element;

      this._init();
    } // Public


    var _proto = Layout.prototype;

    _proto.fixLayoutHeight = function fixLayoutHeight(extra) {
      if (extra === void 0) {
        extra = null;
      }

      var $body = $__default['default']('body');
      var controlSidebar = 0;

      if ($body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE_OPEN) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1) || extra === 'control_sidebar') {
        controlSidebar = $__default['default'](SELECTOR_CONTROL_SIDEBAR_CONTENT$1).height();
      }

      var heights = {
        window: $__default['default'](window).height(),
        header: $__default['default'](SELECTOR_HEADER$1).length !== 0 ? $__default['default'](SELECTOR_HEADER$1).outerHeight() : 0,
        footer: $__default['default'](SELECTOR_FOOTER$1).length !== 0 ? $__default['default'](SELECTOR_FOOTER$1).outerHeight() : 0,
        sidebar: $__default['default'](SELECTOR_SIDEBAR).length !== 0 ? $__default['default'](SELECTOR_SIDEBAR).height() : 0,
        controlSidebar: controlSidebar
      };

      var max = this._max(heights);

      var offset = this._config.panelAutoHeight;

      if (offset === true) {
        offset = 0;
      }

      var $contentSelector = $__default['default'](SELECTOR_CONTENT);

      if (offset !== false) {
        if (max === heights.controlSidebar) {
          if ($body.hasClass(CLASS_NAME_LAYOUT_TOP_NAV)) {
            $contentSelector.css(this._config.panelAutoHeightMode, max + offset + heights.header + heights.footer);
          } else {
            $contentSelector.css(this._config.panelAutoHeightMode, max + offset);
          }
        } else if (max === heights.window) {
          $contentSelector.css(this._config.panelAutoHeightMode, max + offset - heights.header - heights.footer);
        } else {
          $contentSelector.css(this._config.panelAutoHeightMode, max + offset - heights.header);
        }

        if (this._isFooterFixed()) {
          $contentSelector.css(this._config.panelAutoHeightMode, parseFloat($contentSelector.css(this._config.panelAutoHeightMode)) + heights.footer);
        }
      }

      if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED$1)) {
        return;
      }

      if (offset !== false) {
        $contentSelector.css(this._config.panelAutoHeightMode, max + offset - heights.header - heights.footer);
      }

      if (typeof $__default['default'].fn.overlayScrollbars !== 'undefined') {
        $__default['default'](SELECTOR_SIDEBAR).overlayScrollbars({
          className: this._config.scrollbarTheme,
          sizeAutoCapable: true,
          scrollbars: {
            autoHide: this._config.scrollbarAutoHide,
            clickScrolling: true
          }
        });
      }
    };

    _proto.fixLoginRegisterHeight = function fixLoginRegisterHeight() {
      var $body = $__default['default']('body');
      var $selector = $__default['default'](SELECTOR_LOGIN_BOX + ", " + SELECTOR_REGISTER_BOX);

      if ($selector.length === 0) {
        $body.css('height', 'auto');
        $__default['default']('html').css('height', 'auto');
      } else {
        var boxHeight = $selector.height();

        if ($body.css(this._config.panelAutoHeightMode) !== boxHeight) {
          $body.css(this._config.panelAutoHeightMode, boxHeight);
        }
      }
    } // Private
    ;

    _proto._init = function _init() {
      var _this = this;

      // Activate layout height watcher
      this.fixLayoutHeight();

      if (this._config.loginRegisterAutoHeight === true) {
        this.fixLoginRegisterHeight();
      } else if (this._config.loginRegisterAutoHeight === parseInt(this._config.loginRegisterAutoHeight, 10)) {
        setInterval(this.fixLoginRegisterHeight, this._config.loginRegisterAutoHeight);
      }

      $__default['default'](SELECTOR_SIDEBAR).on('collapsed.lte.treeview expanded.lte.treeview', function () {
        _this.fixLayoutHeight();
      });
      $__default['default'](SELECTOR_PUSHMENU_BTN).on('collapsed.lte.pushmenu shown.lte.pushmenu', function () {
        _this.fixLayoutHeight();
      });
      $__default['default'](SELECTOR_CONTROL_SIDEBAR_BTN).on('collapsed.lte.controlsidebar', function () {
        _this.fixLayoutHeight();
      }).on('expanded.lte.controlsidebar', function () {
        _this.fixLayoutHeight('control_sidebar');
      });
      $__default['default'](window).resize(function () {
        _this.fixLayoutHeight();
      });
      $__default['default'](document).ready(function () {
        _this.fixLayoutHeight();
      });
      setTimeout(function () {
        $__default['default']('body.hold-transition').removeClass('hold-transition');
      }, 50);
    };

    _proto._max = function _max(numbers) {
      // Calculate the maximum number in a list
      var max = 0;
      Object.keys(numbers).forEach(function (key) {
        if (numbers[key] > max) {
          max = numbers[key];
        }
      });
      return max;
    };

    _proto._isFooterFixed = function _isFooterFixed() {
      return $__default['default'](SELECTOR_FOOTER$1).css('position') === 'fixed';
    } // Static
    ;

    Layout._jQueryInterface = function _jQueryInterface(config) {
      if (config === void 0) {
        config = '';
      }

      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$8);

        var _options = $__default['default'].extend({}, Default$6, $__default['default'](this).data());

        if (!data) {
          data = new Layout($__default['default'](this), _options);
          $__default['default'](this).data(DATA_KEY$8, data);
        }

        if (config === 'init' || config === '') {
          data._init();
        } else if (config === 'fixLayoutHeight' || config === 'fixLoginRegisterHeight') {
          data[config]();
        }
      });
    };

    return Layout;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](window).on('load', function () {
    Layout._jQueryInterface.call($__default['default']('body'));
  });
  $__default['default'](SELECTOR_SIDEBAR + " a").on('focusin', function () {
    $__default['default'](SELECTOR_MAIN_SIDEBAR).addClass(CLASS_NAME_SIDEBAR_FOCUSED);
  });
  $__default['default'](SELECTOR_SIDEBAR + " a").on('focusout', function () {
    $__default['default'](SELECTOR_MAIN_SIDEBAR).removeClass(CLASS_NAME_SIDEBAR_FOCUSED);
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$8] = Layout._jQueryInterface;
  $__default['default'].fn[NAME$8].Constructor = Layout;

  $__default['default'].fn[NAME$8].noConflict = function () {
    $__default['default'].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return Layout._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE PushMenu.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$9 = 'PushMenu';
  var DATA_KEY$9 = 'lte.pushmenu';
  var EVENT_KEY$5 = "." + DATA_KEY$9;
  var JQUERY_NO_CONFLICT$9 = $__default['default'].fn[NAME$9];
  var EVENT_COLLAPSED$3 = "collapsed" + EVENT_KEY$5;
  var EVENT_SHOWN = "shown" + EVENT_KEY$5;
  var SELECTOR_TOGGLE_BUTTON = '[data-widget="pushmenu"]';
  var SELECTOR_BODY = 'body';
  var SELECTOR_OVERLAY = '#sidebar-overlay';
  var SELECTOR_WRAPPER = '.wrapper';
  var CLASS_NAME_COLLAPSED$1 = 'sidebar-collapse';
  var CLASS_NAME_OPEN = 'sidebar-open';
  var CLASS_NAME_IS_OPENING = 'sidebar-is-opening';
  var CLASS_NAME_CLOSED = 'sidebar-closed';
  var Default$7 = {
    autoCollapseSize: 992,
    enableRemember: false,
    noTransitionAfterReload: true
  };
  /**
   * Class Definition
   * ====================================================
   */

  var PushMenu = /*#__PURE__*/function () {
    function PushMenu(element, options) {
      this._element = element;
      this._options = $__default['default'].extend({}, Default$7, options);

      if ($__default['default'](SELECTOR_OVERLAY).length === 0) {
        this._addOverlay();
      }

      this._init();
    } // Public


    var _proto = PushMenu.prototype;

    _proto.expand = function expand() {
      var $bodySelector = $__default['default'](SELECTOR_BODY);

      if (this._options.autoCollapseSize) {
        if ($__default['default'](window).width() <= this._options.autoCollapseSize) {
          $bodySelector.addClass(CLASS_NAME_OPEN);
        }
      }

      $bodySelector.addClass(CLASS_NAME_IS_OPENING).removeClass(CLASS_NAME_COLLAPSED$1 + " " + CLASS_NAME_CLOSED).delay(50).queue(function () {
        $bodySelector.removeClass(CLASS_NAME_IS_OPENING);
        $__default['default'](this).dequeue();
      });

      if (this._options.enableRemember) {
        localStorage.setItem("remember" + EVENT_KEY$5, CLASS_NAME_OPEN);
      }

      $__default['default'](this._element).trigger($__default['default'].Event(EVENT_SHOWN));
    };

    _proto.collapse = function collapse() {
      var $bodySelector = $__default['default'](SELECTOR_BODY);

      if (this._options.autoCollapseSize) {
        if ($__default['default'](window).width() <= this._options.autoCollapseSize) {
          $bodySelector.removeClass(CLASS_NAME_OPEN).addClass(CLASS_NAME_CLOSED);
        }
      }

      $bodySelector.addClass(CLASS_NAME_COLLAPSED$1);

      if (this._options.enableRemember) {
        localStorage.setItem("remember" + EVENT_KEY$5, CLASS_NAME_COLLAPSED$1);
      }

      $__default['default'](this._element).trigger($__default['default'].Event(EVENT_COLLAPSED$3));
    };

    _proto.toggle = function toggle() {
      if ($__default['default'](SELECTOR_BODY).hasClass(CLASS_NAME_COLLAPSED$1)) {
        this.expand();
      } else {
        this.collapse();
      }
    };

    _proto.autoCollapse = function autoCollapse(resize) {
      if (resize === void 0) {
        resize = false;
      }

      if (!this._options.autoCollapseSize) {
        return;
      }

      var $bodySelector = $__default['default'](SELECTOR_BODY);

      if ($__default['default'](window).width() <= this._options.autoCollapseSize) {
        if (!$bodySelector.hasClass(CLASS_NAME_OPEN)) {
          this.collapse();
        }
      } else if (resize === true) {
        if ($bodySelector.hasClass(CLASS_NAME_OPEN)) {
          $bodySelector.removeClass(CLASS_NAME_OPEN);
        } else if ($bodySelector.hasClass(CLASS_NAME_CLOSED)) {
          this.expand();
        }
      }
    };

    _proto.remember = function remember() {
      if (!this._options.enableRemember) {
        return;
      }

      var $body = $__default['default']('body');
      var toggleState = localStorage.getItem("remember" + EVENT_KEY$5);

      if (toggleState === CLASS_NAME_COLLAPSED$1) {
        if (this._options.noTransitionAfterReload) {
          $body.addClass('hold-transition').addClass(CLASS_NAME_COLLAPSED$1).delay(50).queue(function () {
            $__default['default'](this).removeClass('hold-transition');
            $__default['default'](this).dequeue();
          });
        } else {
          $body.addClass(CLASS_NAME_COLLAPSED$1);
        }
      } else if (this._options.noTransitionAfterReload) {
        $body.addClass('hold-transition').removeClass(CLASS_NAME_COLLAPSED$1).delay(50).queue(function () {
          $__default['default'](this).removeClass('hold-transition');
          $__default['default'](this).dequeue();
        });
      } else {
        $body.removeClass(CLASS_NAME_COLLAPSED$1);
      }
    } // Private
    ;

    _proto._init = function _init() {
      var _this = this;

      this.remember();
      this.autoCollapse();
      $__default['default'](window).resize(function () {
        _this.autoCollapse(true);
      });
    };

    _proto._addOverlay = function _addOverlay() {
      var _this2 = this;

      var overlay = $__default['default']('<div />', {
        id: 'sidebar-overlay'
      });
      overlay.on('click', function () {
        _this2.collapse();
      });
      $__default['default'](SELECTOR_WRAPPER).append(overlay);
    } // Static
    ;

    PushMenu._jQueryInterface = function _jQueryInterface(operation) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$9);

        var _options = $__default['default'].extend({}, Default$7, $__default['default'](this).data());

        if (!data) {
          data = new PushMenu(this, _options);
          $__default['default'](this).data(DATA_KEY$9, data);
        }

        if (typeof operation === 'string' && operation.match(/collapse|expand|toggle/)) {
          data[operation]();
        }
      });
    };

    return PushMenu;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](document).on('click', SELECTOR_TOGGLE_BUTTON, function (event) {
    event.preventDefault();
    var button = event.currentTarget;

    if ($__default['default'](button).data('widget') !== 'pushmenu') {
      button = $__default['default'](button).closest(SELECTOR_TOGGLE_BUTTON);
    }

    PushMenu._jQueryInterface.call($__default['default'](button), 'toggle');
  });
  $__default['default'](window).on('load', function () {
    PushMenu._jQueryInterface.call($__default['default'](SELECTOR_TOGGLE_BUTTON));
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$9] = PushMenu._jQueryInterface;
  $__default['default'].fn[NAME$9].Constructor = PushMenu;

  $__default['default'].fn[NAME$9].noConflict = function () {
    $__default['default'].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return PushMenu._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE SidebarSearch.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$a = 'SidebarSearch';
  var DATA_KEY$a = 'lte.sidebar-search';
  var JQUERY_NO_CONFLICT$a = $__default['default'].fn[NAME$a];
  var CLASS_NAME_OPEN$1 = 'sidebar-search-open';
  var CLASS_NAME_ICON_SEARCH = 'fa-search';
  var CLASS_NAME_ICON_CLOSE = 'fa-times';
  var CLASS_NAME_HEADER = 'nav-header';
  var CLASS_NAME_SEARCH_RESULTS = 'sidebar-search-results';
  var CLASS_NAME_LIST_GROUP = 'list-group';
  var SELECTOR_DATA_WIDGET$1 = '[data-widget="sidebar-search"]';
  var SELECTOR_SIDEBAR$1 = '.main-sidebar .nav-sidebar';
  var SELECTOR_NAV_LINK = '.nav-link';
  var SELECTOR_NAV_TREEVIEW = '.nav-treeview';
  var SELECTOR_SEARCH_INPUT = SELECTOR_DATA_WIDGET$1 + " .form-control";
  var SELECTOR_SEARCH_BUTTON = SELECTOR_DATA_WIDGET$1 + " .btn";
  var SELECTOR_SEARCH_ICON = SELECTOR_SEARCH_BUTTON + " i";
  var SELECTOR_SEARCH_LIST_GROUP = "." + CLASS_NAME_LIST_GROUP;
  var SELECTOR_SEARCH_RESULTS = "." + CLASS_NAME_SEARCH_RESULTS;
  var SELECTOR_SEARCH_RESULTS_GROUP = SELECTOR_SEARCH_RESULTS + " ." + CLASS_NAME_LIST_GROUP;
  var Default$8 = {
    arrowSign: '->',
    minLength: 3,
    maxResults: 7,
    highlightName: true,
    highlightPath: false,
    highlightClass: 'text-light',
    notFoundText: 'No element found!'
  };
  var SearchItems = [];
  /**
   * Class Definition
   * ====================================================
   */

  var SidebarSearch = /*#__PURE__*/function () {
    function SidebarSearch(_element, _options) {
      this.element = _element;
      this.options = $__default['default'].extend({}, Default$8, _options);
      this.items = [];
    } // Public


    var _proto = SidebarSearch.prototype;

    _proto.init = function init() {
      var _this = this;

      if ($__default['default'](SELECTOR_DATA_WIDGET$1).length == 0) {
        return;
      }

      if ($__default['default'](SELECTOR_DATA_WIDGET$1).next(SELECTOR_SEARCH_RESULTS).length == 0) {
        $__default['default'](SELECTOR_DATA_WIDGET$1).after($__default['default']('<div />', {
          class: CLASS_NAME_SEARCH_RESULTS
        }));
      }

      if ($__default['default'](SELECTOR_SEARCH_RESULTS).children(SELECTOR_SEARCH_LIST_GROUP).length == 0) {
        $__default['default'](SELECTOR_SEARCH_RESULTS).append($__default['default']('<div />', {
          class: CLASS_NAME_LIST_GROUP
        }));
      }

      this._addNotFound();

      $__default['default'](SELECTOR_SIDEBAR$1).children().each(function (i, child) {
        _this._parseItem(child);
      });
    };

    _proto.search = function search() {
      var _this2 = this;

      var searchValue = $__default['default'](SELECTOR_SEARCH_INPUT).val().toLowerCase();

      if (searchValue.length < this.options.minLength) {
        $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).empty();

        this._addNotFound();

        this.close();
        return;
      }

      var searchResults = SearchItems.filter(function (item) {
        return item.name.toLowerCase().includes(searchValue);
      });
      var endResults = $__default['default'](searchResults.slice(0, this.options.maxResults));
      $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).empty();

      if (endResults.length === 0) {
        this._addNotFound();
      } else {
        endResults.each(function (i, result) {
          $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).append(_this2._renderItem(result.name, result.link, result.path));
        });
      }

      this.open();
    };

    _proto.open = function open() {
      $__default['default'](SELECTOR_DATA_WIDGET$1).parent().addClass(CLASS_NAME_OPEN$1);
      $__default['default'](SELECTOR_SEARCH_ICON).removeClass(CLASS_NAME_ICON_SEARCH).addClass(CLASS_NAME_ICON_CLOSE);
    };

    _proto.close = function close() {
      $__default['default'](SELECTOR_DATA_WIDGET$1).parent().removeClass(CLASS_NAME_OPEN$1);
      $__default['default'](SELECTOR_SEARCH_ICON).removeClass(CLASS_NAME_ICON_CLOSE).addClass(CLASS_NAME_ICON_SEARCH);
    };

    _proto.toggle = function toggle() {
      if ($__default['default'](SELECTOR_DATA_WIDGET$1).parent().hasClass(CLASS_NAME_OPEN$1)) {
        this.close();
      } else {
        this.open();
      }
    } // Private
    ;

    _proto._parseItem = function _parseItem(item, path) {
      var _this3 = this;

      if (path === void 0) {
        path = [];
      }

      if ($__default['default'](item).hasClass(CLASS_NAME_HEADER)) {
        return;
      }

      var itemObject = {};
      var navLink = $__default['default'](item).clone().find("> " + SELECTOR_NAV_LINK);
      var navTreeview = $__default['default'](item).clone().find("> " + SELECTOR_NAV_TREEVIEW);
      var link = navLink.attr('href');
      var name = navLink.find('p').children().remove().end().text();
      itemObject.name = this._trimText(name);
      itemObject.link = link;
      itemObject.path = path;

      if (navTreeview.length === 0) {
        SearchItems.push(itemObject);
      } else {
        var newPath = itemObject.path.concat([itemObject.name]);
        navTreeview.children().each(function (i, child) {
          _this3._parseItem(child, newPath);
        });
      }
    };

    _proto._trimText = function _trimText(text) {
      return $.trim(text.replace(/(\r\n|\n|\r)/gm, ' '));
    };

    _proto._renderItem = function _renderItem(name, link, path) {
      var _this4 = this;

      path = path.join(" " + this.options.arrowSign + " ");

      if (this.options.highlightName || this.options.highlightPath) {
        var searchValue = $__default['default'](SELECTOR_SEARCH_INPUT).val().toLowerCase();
        var regExp = new RegExp(searchValue, 'gi');

        if (this.options.highlightName) {
          name = name.replace(regExp, function (str) {
            return "<b class=\"" + _this4.options.highlightClass + "\">" + str + "</b>";
          });
        }

        if (this.options.highlightPath) {
          path = path.replace(regExp, function (str) {
            return "<b class=\"" + _this4.options.highlightClass + "\">" + str + "</b>";
          });
        }
      }

      return "<a href=\"" + link + "\" class=\"list-group-item\">\n        <div class=\"search-title\">\n          " + name + "\n        </div>\n        <div class=\"search-path\">\n          " + path + "\n        </div>\n      </a>";
    };

    _proto._addNotFound = function _addNotFound() {
      $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).append(this._renderItem(this.options.notFoundText, '#', []));
    } // Static
    ;

    SidebarSearch._jQueryInterface = function _jQueryInterface(config) {
      var data = $__default['default'](this).data(DATA_KEY$a);

      if (!data) {
        data = $__default['default'](this).data();
      }

      var _options = $__default['default'].extend({}, Default$8, typeof config === 'object' ? config : data);

      var plugin = new SidebarSearch($__default['default'](this), _options);
      $__default['default'](this).data(DATA_KEY$a, typeof config === 'object' ? config : data);

      if (typeof config === 'string' && config.match(/init|toggle|close|open|search/)) {
        plugin[config]();
      } else {
        plugin.init();
      }
    };

    return SidebarSearch;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](document).on('click', SELECTOR_SEARCH_BUTTON, function (event) {
    event.preventDefault();

    SidebarSearch._jQueryInterface.call($__default['default'](SELECTOR_DATA_WIDGET$1), 'toggle');
  });
  $__default['default'](document).on('keyup', SELECTOR_SEARCH_INPUT, function (event) {
    if (event.keyCode == 38) {
      event.preventDefault();
      $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).children().last().focus();
      return;
    }

    if (event.keyCode == 40) {
      event.preventDefault();
      $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).children().first().focus();
      return;
    }

    var timer = 0;
    clearTimeout(timer);
    timer = setTimeout(function () {
      SidebarSearch._jQueryInterface.call($__default['default'](SELECTOR_DATA_WIDGET$1), 'search');
    }, 100);
  });
  $__default['default'](document).on('keydown', SELECTOR_SEARCH_RESULTS_GROUP, function (event) {
    var $focused = $__default['default'](':focus');

    if (event.keyCode == 38) {
      event.preventDefault();

      if ($focused.is(':first-child')) {
        $focused.siblings().last().focus();
      } else {
        $focused.prev().focus();
      }
    }

    if (event.keyCode == 40) {
      event.preventDefault();

      if ($focused.is(':last-child')) {
        $focused.siblings().first().focus();
      } else {
        $focused.next().focus();
      }
    }
  });
  $__default['default'](window).on('load', function () {
    SidebarSearch._jQueryInterface.call($__default['default'](SELECTOR_DATA_WIDGET$1), 'init');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$a] = SidebarSearch._jQueryInterface;
  $__default['default'].fn[NAME$a].Constructor = SidebarSearch;

  $__default['default'].fn[NAME$a].noConflict = function () {
    $__default['default'].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return SidebarSearch._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE Toasts.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$b = 'Toasts';
  var DATA_KEY$b = 'lte.toasts';
  var EVENT_KEY$6 = "." + DATA_KEY$b;
  var JQUERY_NO_CONFLICT$b = $__default['default'].fn[NAME$b];
  var EVENT_INIT = "init" + EVENT_KEY$6;
  var EVENT_CREATED = "created" + EVENT_KEY$6;
  var EVENT_REMOVED$1 = "removed" + EVENT_KEY$6;
  var SELECTOR_CONTAINER_TOP_RIGHT = '#toastsContainerTopRight';
  var SELECTOR_CONTAINER_TOP_LEFT = '#toastsContainerTopLeft';
  var SELECTOR_CONTAINER_BOTTOM_RIGHT = '#toastsContainerBottomRight';
  var SELECTOR_CONTAINER_BOTTOM_LEFT = '#toastsContainerBottomLeft';
  var CLASS_NAME_TOP_RIGHT = 'toasts-top-right';
  var CLASS_NAME_TOP_LEFT = 'toasts-top-left';
  var CLASS_NAME_BOTTOM_RIGHT = 'toasts-bottom-right';
  var CLASS_NAME_BOTTOM_LEFT = 'toasts-bottom-left';
  var POSITION_TOP_RIGHT = 'topRight';
  var POSITION_TOP_LEFT = 'topLeft';
  var POSITION_BOTTOM_RIGHT = 'bottomRight';
  var POSITION_BOTTOM_LEFT = 'bottomLeft';
  var Default$9 = {
    position: POSITION_TOP_RIGHT,
    fixed: true,
    autohide: false,
    autoremove: true,
    delay: 1000,
    fade: true,
    icon: null,
    image: null,
    imageAlt: null,
    imageHeight: '25px',
    title: null,
    subtitle: null,
    close: true,
    body: null,
    class: null
  };
  /**
   * Class Definition
   * ====================================================
   */

  var Toasts = /*#__PURE__*/function () {
    function Toasts(element, config) {
      this._config = config;

      this._prepareContainer();

      $__default['default']('body').trigger($__default['default'].Event(EVENT_INIT));
    } // Public


    var _proto = Toasts.prototype;

    _proto.create = function create() {
      var toast = $__default['default']('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');
      toast.data('autohide', this._config.autohide);
      toast.data('animation', this._config.fade);

      if (this._config.class) {
        toast.addClass(this._config.class);
      }

      if (this._config.delay && this._config.delay != 500) {
        toast.data('delay', this._config.delay);
      }

      var toastHeader = $__default['default']('<div class="toast-header">');

      if (this._config.image != null) {
        var toastImage = $__default['default']('<img />').addClass('rounded mr-2').attr('src', this._config.image).attr('alt', this._config.imageAlt);

        if (this._config.imageHeight != null) {
          toastImage.height(this._config.imageHeight).width('auto');
        }

        toastHeader.append(toastImage);
      }

      if (this._config.icon != null) {
        toastHeader.append($__default['default']('<i />').addClass('mr-2').addClass(this._config.icon));
      }

      if (this._config.title != null) {
        toastHeader.append($__default['default']('<strong />').addClass('mr-auto').html(this._config.title));
      }

      if (this._config.subtitle != null) {
        toastHeader.append($__default['default']('<small />').html(this._config.subtitle));
      }

      if (this._config.close == true) {
        var toastClose = $__default['default']('<button data-dismiss="toast" />').attr('type', 'button').addClass('ml-2 mb-1 close').attr('aria-label', 'Close').append('<span aria-hidden="true">&times;</span>');

        if (this._config.title == null) {
          toastClose.toggleClass('ml-2 ml-auto');
        }

        toastHeader.append(toastClose);
      }

      toast.append(toastHeader);

      if (this._config.body != null) {
        toast.append($__default['default']('<div class="toast-body" />').html(this._config.body));
      }

      $__default['default'](this._getContainerId()).prepend(toast);
      var $body = $__default['default']('body');
      $body.trigger($__default['default'].Event(EVENT_CREATED));
      toast.toast('show');

      if (this._config.autoremove) {
        toast.on('hidden.bs.toast', function () {
          $__default['default'](this).delay(200).remove();
          $body.trigger($__default['default'].Event(EVENT_REMOVED$1));
        });
      }
    } // Static
    ;

    _proto._getContainerId = function _getContainerId() {
      if (this._config.position == POSITION_TOP_RIGHT) {
        return SELECTOR_CONTAINER_TOP_RIGHT;
      }

      if (this._config.position == POSITION_TOP_LEFT) {
        return SELECTOR_CONTAINER_TOP_LEFT;
      }

      if (this._config.position == POSITION_BOTTOM_RIGHT) {
        return SELECTOR_CONTAINER_BOTTOM_RIGHT;
      }

      if (this._config.position == POSITION_BOTTOM_LEFT) {
        return SELECTOR_CONTAINER_BOTTOM_LEFT;
      }
    };

    _proto._prepareContainer = function _prepareContainer() {
      if ($__default['default'](this._getContainerId()).length === 0) {
        var container = $__default['default']('<div />').attr('id', this._getContainerId().replace('#', ''));

        if (this._config.position == POSITION_TOP_RIGHT) {
          container.addClass(CLASS_NAME_TOP_RIGHT);
        } else if (this._config.position == POSITION_TOP_LEFT) {
          container.addClass(CLASS_NAME_TOP_LEFT);
        } else if (this._config.position == POSITION_BOTTOM_RIGHT) {
          container.addClass(CLASS_NAME_BOTTOM_RIGHT);
        } else if (this._config.position == POSITION_BOTTOM_LEFT) {
          container.addClass(CLASS_NAME_BOTTOM_LEFT);
        }

        $__default['default']('body').append(container);
      }

      if (this._config.fixed) {
        $__default['default'](this._getContainerId()).addClass('fixed');
      } else {
        $__default['default'](this._getContainerId()).removeClass('fixed');
      }
    } // Static
    ;

    Toasts._jQueryInterface = function _jQueryInterface(option, config) {
      return this.each(function () {
        var _options = $__default['default'].extend({}, Default$9, config);

        var toast = new Toasts($__default['default'](this), _options);

        if (option === 'create') {
          toast[option]();
        }
      });
    };

    return Toasts;
  }();
  /**
   * jQuery API
   * ====================================================
   */


  $__default['default'].fn[NAME$b] = Toasts._jQueryInterface;
  $__default['default'].fn[NAME$b].Constructor = Toasts;

  $__default['default'].fn[NAME$b].noConflict = function () {
    $__default['default'].fn[NAME$b] = JQUERY_NO_CONFLICT$b;
    return Toasts._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE TodoList.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$c = 'TodoList';
  var DATA_KEY$c = 'lte.todolist';
  var JQUERY_NO_CONFLICT$c = $__default['default'].fn[NAME$c];
  var SELECTOR_DATA_TOGGLE$4 = '[data-widget="todo-list"]';
  var CLASS_NAME_TODO_LIST_DONE = 'done';
  var Default$a = {
    onCheck: function onCheck(item) {
      return item;
    },
    onUnCheck: function onUnCheck(item) {
      return item;
    }
  };
  /**
   * Class Definition
   * ====================================================
   */

  var TodoList = /*#__PURE__*/function () {
    function TodoList(element, config) {
      this._config = config;
      this._element = element;

      this._init();
    } // Public


    var _proto = TodoList.prototype;

    _proto.toggle = function toggle(item) {
      item.parents('li').toggleClass(CLASS_NAME_TODO_LIST_DONE);

      if (!$__default['default'](item).prop('checked')) {
        this.unCheck($__default['default'](item));
        return;
      }

      this.check(item);
    };

    _proto.check = function check(item) {
      this._config.onCheck.call(item);
    };

    _proto.unCheck = function unCheck(item) {
      this._config.onUnCheck.call(item);
    } // Private
    ;

    _proto._init = function _init() {
      var _this = this;

      var $toggleSelector = this._element;
      $toggleSelector.find('input:checkbox:checked').parents('li').toggleClass(CLASS_NAME_TODO_LIST_DONE);
      $toggleSelector.on('change', 'input:checkbox', function (event) {
        _this.toggle($__default['default'](event.target));
      });
    } // Static
    ;

    TodoList._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$c);

        if (!data) {
          data = $__default['default'](this).data();
        }

        var _options = $__default['default'].extend({}, Default$a, typeof config === 'object' ? config : data);

        var plugin = new TodoList($__default['default'](this), _options);
        $__default['default'](this).data(DATA_KEY$c, typeof config === 'object' ? config : data);

        if (config === 'init') {
          plugin[config]();
        }
      });
    };

    return TodoList;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](window).on('load', function () {
    TodoList._jQueryInterface.call($__default['default'](SELECTOR_DATA_TOGGLE$4));
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$c] = TodoList._jQueryInterface;
  $__default['default'].fn[NAME$c].Constructor = TodoList;

  $__default['default'].fn[NAME$c].noConflict = function () {
    $__default['default'].fn[NAME$c] = JQUERY_NO_CONFLICT$c;
    return TodoList._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE Treeview.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$d = 'Treeview';
  var DATA_KEY$d = 'lte.treeview';
  var EVENT_KEY$7 = "." + DATA_KEY$d;
  var JQUERY_NO_CONFLICT$d = $__default['default'].fn[NAME$d];
  var EVENT_EXPANDED$3 = "expanded" + EVENT_KEY$7;
  var EVENT_COLLAPSED$4 = "collapsed" + EVENT_KEY$7;
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$7;
  var SELECTOR_LI = '.nav-item';
  var SELECTOR_LINK = '.nav-link';
  var SELECTOR_TREEVIEW_MENU = '.nav-treeview';
  var SELECTOR_OPEN = '.menu-open';
  var SELECTOR_DATA_WIDGET$2 = '[data-widget="treeview"]';
  var CLASS_NAME_OPEN$2 = 'menu-open';
  var CLASS_NAME_IS_OPENING$1 = 'menu-is-opening';
  var CLASS_NAME_SIDEBAR_COLLAPSED = 'sidebar-collapse';
  var Default$b = {
    trigger: SELECTOR_DATA_WIDGET$2 + " " + SELECTOR_LINK,
    animationSpeed: 300,
    accordion: true,
    expandSidebar: false,
    sidebarButtonSelector: '[data-widget="pushmenu"]'
  };
  /**
   * Class Definition
   * ====================================================
   */

  var Treeview = /*#__PURE__*/function () {
    function Treeview(element, config) {
      this._config = config;
      this._element = element;
    } // Public


    var _proto = Treeview.prototype;

    _proto.init = function init() {
      $__default['default']("" + SELECTOR_LI + SELECTOR_OPEN + " " + SELECTOR_TREEVIEW_MENU).css('display', 'block');

      this._setupListeners();
    };

    _proto.expand = function expand(treeviewMenu, parentLi) {
      var _this = this;

      var expandedEvent = $__default['default'].Event(EVENT_EXPANDED$3);

      if (this._config.accordion) {
        var openMenuLi = parentLi.siblings(SELECTOR_OPEN).first();
        var openTreeview = openMenuLi.find(SELECTOR_TREEVIEW_MENU).first();
        this.collapse(openTreeview, openMenuLi);
      }

      parentLi.addClass(CLASS_NAME_IS_OPENING$1);
      treeviewMenu.stop().slideDown(this._config.animationSpeed, function () {
        parentLi.addClass(CLASS_NAME_OPEN$2);
        $__default['default'](_this._element).trigger(expandedEvent);
      });

      if (this._config.expandSidebar) {
        this._expandSidebar();
      }
    };

    _proto.collapse = function collapse(treeviewMenu, parentLi) {
      var _this2 = this;

      var collapsedEvent = $__default['default'].Event(EVENT_COLLAPSED$4);
      parentLi.removeClass(CLASS_NAME_IS_OPENING$1 + " " + CLASS_NAME_OPEN$2);
      treeviewMenu.stop().slideUp(this._config.animationSpeed, function () {
        $__default['default'](_this2._element).trigger(collapsedEvent);
        treeviewMenu.find(SELECTOR_OPEN + " > " + SELECTOR_TREEVIEW_MENU).slideUp();
        treeviewMenu.find(SELECTOR_OPEN).removeClass(CLASS_NAME_OPEN$2);
      });
    };

    _proto.toggle = function toggle(event) {
      var $relativeTarget = $__default['default'](event.currentTarget);
      var $parent = $relativeTarget.parent();
      var treeviewMenu = $parent.find("> " + SELECTOR_TREEVIEW_MENU);

      if (!treeviewMenu.is(SELECTOR_TREEVIEW_MENU)) {
        if (!$parent.is(SELECTOR_LI)) {
          treeviewMenu = $parent.parent().find("> " + SELECTOR_TREEVIEW_MENU);
        }

        if (!treeviewMenu.is(SELECTOR_TREEVIEW_MENU)) {
          return;
        }
      }

      event.preventDefault();
      var parentLi = $relativeTarget.parents(SELECTOR_LI).first();
      var isOpen = parentLi.hasClass(CLASS_NAME_OPEN$2);

      if (isOpen) {
        this.collapse($__default['default'](treeviewMenu), parentLi);
      } else {
        this.expand($__default['default'](treeviewMenu), parentLi);
      }
    } // Private
    ;

    _proto._setupListeners = function _setupListeners() {
      var _this3 = this;

      var elementId = this._element.attr('id') !== undefined ? "#" + this._element.attr('id') : '';
      $__default['default'](document).on('click', "" + elementId + this._config.trigger, function (event) {
        _this3.toggle(event);
      });
    };

    _proto._expandSidebar = function _expandSidebar() {
      if ($__default['default']('body').hasClass(CLASS_NAME_SIDEBAR_COLLAPSED)) {
        $__default['default'](this._config.sidebarButtonSelector).PushMenu('expand');
      }
    } // Static
    ;

    Treeview._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$d);

        var _options = $__default['default'].extend({}, Default$b, $__default['default'](this).data());

        if (!data) {
          data = new Treeview($__default['default'](this), _options);
          $__default['default'](this).data(DATA_KEY$d, data);
        }

        if (config === 'init') {
          data[config]();
        }
      });
    };

    return Treeview;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
    $__default['default'](SELECTOR_DATA_WIDGET$2).each(function () {
      Treeview._jQueryInterface.call($__default['default'](this), 'init');
    });
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$d] = Treeview._jQueryInterface;
  $__default['default'].fn[NAME$d].Constructor = Treeview;

  $__default['default'].fn[NAME$d].noConflict = function () {
    $__default['default'].fn[NAME$d] = JQUERY_NO_CONFLICT$d;
    return Treeview._jQueryInterface;
  };

  exports.CardRefresh = CardRefresh;
  exports.CardWidget = CardWidget;
  exports.ControlSidebar = ControlSidebar;
  exports.DirectChat = DirectChat;
  exports.Dropdown = Dropdown;
  exports.ExpandableTable = ExpandableTable;
  exports.Fullscreen = Fullscreen;
  exports.IFrame = IFrame;
  exports.Layout = Layout;
  exports.PushMenu = PushMenu;
  exports.SidebarSearch = SidebarSearch;
  exports.Toasts = Toasts;
  exports.TodoList = TodoList;
  exports.Treeview = Treeview;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=adminlte.js.map


/***/ }),

/***/ "./src/assets/plugins/adminlte/demo.js":
/*!*********************************************!*\
  !*** ./src/assets/plugins/adminlte/demo.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */

/* eslint-disable camelcase */

(function ($) {
  'use strict'

  var $sidebar = $('.control-sidebar')
  var $container = $('<div />', {
    class: 'p-3 control-sidebar-content'
  })

  $sidebar.append($container)

  var navbar_dark_skins = [
    'navbar-primary',
    'navbar-secondary',
    'navbar-info',
    'navbar-success',
    'navbar-danger',
    'navbar-indigo',
    'navbar-purple',
    'navbar-pink',
    'navbar-navy',
    'navbar-lightblue',
    'navbar-teal',
    'navbar-cyan',
    'navbar-dark',
    'navbar-gray-dark',
    'navbar-gray'
  ]

  var navbar_light_skins = [
    'navbar-light',
    'navbar-warning',
    'navbar-white',
    'navbar-orange'
  ]

  $container.append(
    '<h5>Customize AdminLTE</h5><hr class="mb-2"/>'
  )

  var $no_border_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('border-bottom-0'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('border-bottom-0')
    } else {
      $('.main-header').removeClass('border-bottom-0')
    }
  })
  var $no_border_container = $('<div />', { class: 'mb-1' }).append($no_border_checkbox).append('<span>No Navbar border</span>')
  $container.append($no_border_container)

  var $text_sm_body_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('text-sm'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('text-sm')
    } else {
      $('body').removeClass('text-sm')
    }
  })
  var $text_sm_body_container = $('<div />', { class: 'mb-1' }).append($text_sm_body_checkbox).append('<span>Body small text</span>')
  $container.append($text_sm_body_container)

  var $text_sm_header_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('text-sm'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('text-sm')
    } else {
      $('.main-header').removeClass('text-sm')
    }
  })
  var $text_sm_header_container = $('<div />', { class: 'mb-1' }).append($text_sm_header_checkbox).append('<span>Navbar small text</span>')
  $container.append($text_sm_header_container)

  var $text_sm_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('text-sm'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('text-sm')
    } else {
      $('.nav-sidebar').removeClass('text-sm')
    }
  })
  var $text_sm_sidebar_container = $('<div />', { class: 'mb-1' }).append($text_sm_sidebar_checkbox).append('<span>Sidebar nav small text</span>')
  $container.append($text_sm_sidebar_container)

  var $text_sm_footer_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-footer').hasClass('text-sm'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-footer').addClass('text-sm')
    } else {
      $('.main-footer').removeClass('text-sm')
    }
  })
  var $text_sm_footer_container = $('<div />', { class: 'mb-1' }).append($text_sm_footer_checkbox).append('<span>Footer small text</span>')
  $container.append($text_sm_footer_container)

  var $flat_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-flat'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-flat')
    } else {
      $('.nav-sidebar').removeClass('nav-flat')
    }
  })
  var $flat_sidebar_container = $('<div />', { class: 'mb-1' }).append($flat_sidebar_checkbox).append('<span>Sidebar nav flat style</span>')
  $container.append($flat_sidebar_container)

  var $legacy_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-legacy'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-legacy')
    } else {
      $('.nav-sidebar').removeClass('nav-legacy')
    }
  })
  var $legacy_sidebar_container = $('<div />', { class: 'mb-1' }).append($legacy_sidebar_checkbox).append('<span>Sidebar nav legacy style</span>')
  $container.append($legacy_sidebar_container)

  var $compact_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-compact'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-compact')
    } else {
      $('.nav-sidebar').removeClass('nav-compact')
    }
  })
  var $compact_sidebar_container = $('<div />', { class: 'mb-1' }).append($compact_sidebar_checkbox).append('<span>Sidebar nav compact</span>')
  $container.append($compact_sidebar_container)

  var $child_indent_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-child-indent'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-child-indent')
    } else {
      $('.nav-sidebar').removeClass('nav-child-indent')
    }
  })
  var $child_indent_sidebar_container = $('<div />', { class: 'mb-1' }).append($child_indent_sidebar_checkbox).append('<span>Sidebar nav child indent</span>')
  $container.append($child_indent_sidebar_container)

  var $child_hide_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-collapse-hide-child'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-collapse-hide-child')
    } else {
      $('.nav-sidebar').removeClass('nav-collapse-hide-child')
    }
  })
  var $child_hide_sidebar_container = $('<div />', { class: 'mb-1' }).append($child_hide_sidebar_checkbox).append('<span>Sidebar nav child hide on collapse</span>')
  $container.append($child_hide_sidebar_container)

  var $no_expand_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-sidebar').hasClass('sidebar-no-expand'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-sidebar').addClass('sidebar-no-expand')
    } else {
      $('.main-sidebar').removeClass('sidebar-no-expand')
    }
  })
  var $no_expand_sidebar_container = $('<div />', { class: 'mb-1' }).append($no_expand_sidebar_checkbox).append('<span>Main Sidebar disable hover/focus auto expand</span>')
  $container.append($no_expand_sidebar_container)

  var $text_sm_brand_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.brand-link').hasClass('text-sm'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.brand-link').addClass('text-sm')
    } else {
      $('.brand-link').removeClass('text-sm')
    }
  })
  var $text_sm_brand_container = $('<div />', { class: 'mb-1' }).append($text_sm_brand_checkbox).append('<span>Brand small text</span>')
  $container.append($text_sm_brand_container)

  var $dark_mode_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('dark-mode'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('dark-mode')
    } else {
      $('body').removeClass('dark-mode')
    }
  })
  var $dark_mode_container = $('<div />', { class: 'mb-4' }).append($dark_mode_checkbox).append('<span>Dark Mode</span>')
  $container.append($dark_mode_container)

  $container.append('<h6>Navbar Variants</h6>')

  var $navbar_variants = $('<div />', {
    class: 'd-flex'
  })
  var navbar_all_colors = navbar_dark_skins.concat(navbar_light_skins)
  var $navbar_variants_colors = createSkinBlock(navbar_all_colors, function () {
    var color = $(this).data('color')
    var $main_header = $('.main-header')
    $main_header.removeClass('navbar-dark').removeClass('navbar-light')
    navbar_all_colors.forEach(function (color) {
      $main_header.removeClass(color)
    })

    if (navbar_dark_skins.indexOf(color) > -1) {
      $main_header.addClass('navbar-dark')
    } else {
      $main_header.addClass('navbar-light')
    }

    $main_header.addClass(color)
  })

  $navbar_variants.append($navbar_variants_colors)

  $container.append($navbar_variants)

  var sidebar_colors = [
    'bg-primary',
    'bg-warning',
    'bg-info',
    'bg-danger',
    'bg-success',
    'bg-indigo',
    'bg-lightblue',
    'bg-navy',
    'bg-purple',
    'bg-fuchsia',
    'bg-pink',
    'bg-maroon',
    'bg-orange',
    'bg-lime',
    'bg-teal',
    'bg-olive'
  ]

  var accent_colors = [
    'accent-primary',
    'accent-warning',
    'accent-info',
    'accent-danger',
    'accent-success',
    'accent-indigo',
    'accent-lightblue',
    'accent-navy',
    'accent-purple',
    'accent-fuchsia',
    'accent-pink',
    'accent-maroon',
    'accent-orange',
    'accent-lime',
    'accent-teal',
    'accent-olive'
  ]

  var sidebar_skins = [
    'sidebar-dark-primary',
    'sidebar-dark-warning',
    'sidebar-dark-info',
    'sidebar-dark-danger',
    'sidebar-dark-success',
    'sidebar-dark-indigo',
    'sidebar-dark-lightblue',
    'sidebar-dark-navy',
    'sidebar-dark-purple',
    'sidebar-dark-fuchsia',
    'sidebar-dark-pink',
    'sidebar-dark-maroon',
    'sidebar-dark-orange',
    'sidebar-dark-lime',
    'sidebar-dark-teal',
    'sidebar-dark-olive',
    'sidebar-light-primary',
    'sidebar-light-warning',
    'sidebar-light-info',
    'sidebar-light-danger',
    'sidebar-light-success',
    'sidebar-light-indigo',
    'sidebar-light-lightblue',
    'sidebar-light-navy',
    'sidebar-light-purple',
    'sidebar-light-fuchsia',
    'sidebar-light-pink',
    'sidebar-light-maroon',
    'sidebar-light-orange',
    'sidebar-light-lime',
    'sidebar-light-teal',
    'sidebar-light-olive'
  ]

  $container.append('<h6>Accent Color Variants</h6>')
  var $accent_variants = $('<div />', {
    class: 'd-flex'
  })
  $container.append($accent_variants)
  $container.append(createSkinBlock(accent_colors, function () {
    var color = $(this).data('color')
    var accent_class = color
    var $body = $('body')
    accent_colors.forEach(function (skin) {
      $body.removeClass(skin)
    })

    $body.addClass(accent_class)
  }))

  $container.append('<h6>Dark Sidebar Variants</h6>')
  var $sidebar_variants_dark = $('<div />', {
    class: 'd-flex'
  })
  $container.append($sidebar_variants_dark)
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color = $(this).data('color')
    var sidebar_class = 'sidebar-dark-' + color.replace('bg-', '')
    var $sidebar = $('.main-sidebar')
    sidebar_skins.forEach(function (skin) {
      $sidebar.removeClass(skin)
    })

    $sidebar.addClass(sidebar_class)
  }))

  $container.append('<h6>Light Sidebar Variants</h6>')
  var $sidebar_variants_light = $('<div />', {
    class: 'd-flex'
  })
  $container.append($sidebar_variants_light)
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color = $(this).data('color')
    var sidebar_class = 'sidebar-light-' + color.replace('bg-', '')
    var $sidebar = $('.main-sidebar')
    sidebar_skins.forEach(function (skin) {
      $sidebar.removeClass(skin)
    })

    $sidebar.addClass(sidebar_class)
  }))

  var logo_skins = navbar_all_colors
  $container.append('<h6>Brand Logo Variants</h6>')
  var $logo_variants = $('<div />', {
    class: 'd-flex'
  })
  $container.append($logo_variants)
  var $clear_btn = $('<a />', {
    href: '#'
  }).text('clear').on('click', function (e) {
    e.preventDefault()
    var $logo = $('.brand-link')
    logo_skins.forEach(function (skin) {
      $logo.removeClass(skin)
    })
  })
  $container.append(createSkinBlock(logo_skins, function () {
    var color = $(this).data('color')
    var $logo = $('.brand-link')
    logo_skins.forEach(function (skin) {
      $logo.removeClass(skin)
    })
    $logo.addClass(color)
  }).append($clear_btn))

  function createSkinBlock(colors, callback) {
    var $block = $('<div />', {
      class: 'd-flex flex-wrap mb-3'
    })

    colors.forEach(function (color) {
      var $color = $('<div />', {
        class: (typeof color === 'object' ? color.join(' ') : color).replace('navbar-', 'bg-').replace('accent-', 'bg-') + ' elevation-2'
      })

      $block.append($color)

      $color.data('color', color)

      $color.css({
        width: '40px',
        height: '20px',
        borderRadius: '25px',
        marginRight: 10,
        marginBottom: 10,
        opacity: 0.8,
        cursor: 'pointer'
      })

      $color.hover(function () {
        $(this).css({ opacity: 1 }).removeClass('elevation-2').addClass('elevation-4')
      }, function () {
        $(this).css({ opacity: 0.8 }).removeClass('elevation-4').addClass('elevation-2')
      })

      if (callback) {
        $color.on('click', callback)
      }
    })

    return $block
  }

  $('.product-image-thumb').on('click', function () {
    var image_element = $(this).find('img')
    $('.product-image').prop('src', $(image_element).attr('src'))
    $('.product-image-thumb.active').removeClass('active')
    $(this).addClass('active')
  })
})(jQuery)


/***/ })

},
0,[["./src/assets/js/main/backend/admin/main.js","js/librairies/adminlib"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvbWFpbi9iYWNrZW5kL2FkbWluL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wbHVnaW5zL2FkbWlubHRlL2FkbWlubHRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGx1Z2lucy9hZG1pbmx0ZS9kZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7OztBQ1ZBO0NBRUE7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBNEQsb0JBQW9CLG1CQUFPLENBQUMsb0RBQVE7QUFDbEcsRUFBRSxDQUN3SDtBQUMxSCxDQUFDLCtCQUErQjs7QUFFaEMsc0NBQXNDLDREQUE0RCxnQkFBZ0I7O0FBRWxIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0Q7QUFDdEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJGQUEyRix1REFBdUQsc0JBQXNCO0FBQ3hLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELHlCQUF5Qjs7QUFFaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BELEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOEZBQThGLGFBQWE7QUFDM0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5TUFBeU07O0FBRXpNO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNEQUFzRDs7QUFFdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxjQUFjOztBQUU5RCxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7OztBQ3ByRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsMkNBQTJDLGdCQUFnQjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCw4Q0FBOEMsZ0JBQWdCO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILGdEQUFnRCxnQkFBZ0I7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsaURBQWlELGdCQUFnQjtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCxnREFBZ0QsZ0JBQWdCO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILDhDQUE4QyxnQkFBZ0I7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsZ0RBQWdELGdCQUFnQjtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCxpREFBaUQsZ0JBQWdCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILHNEQUFzRCxnQkFBZ0I7QUFDdEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsb0RBQW9ELGdCQUFnQjtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCxtREFBbUQsZ0JBQWdCO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILCtDQUErQyxnQkFBZ0I7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsMkNBQTJDLGdCQUFnQjtBQUMzRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQyxPQUFPO0FBQ1AscUJBQXFCLGVBQWU7QUFDcEMsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEVBQUUsTUFBTSIsImZpbGUiOiJqcy9tYWluL2JhY2tlbmQvYWRtaW4vbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvL0FkbWluIGx0ZVxyXG5pbXBvcnQgXCJwbHVnaW5zL2FkbWlubHRlL2FkbWlubHRlXCI7XHJcbi8vRGVtb1xyXG5pbXBvcnQgXCJwbHVnaW5zL2FkbWlubHRlL2RlbW9cIjtcclxuIiwiLyohXG4gKiBBZG1pbkxURSB2My4xLjAtcmMgKGh0dHBzOi8vYWRtaW5sdGUuaW8pXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDIwIENvbG9ybGliIDxodHRwczovL2NvbG9ybGliLmNvbT5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL0NvbG9ybGliSFEvQWRtaW5MVEUvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdqcXVlcnknKSkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJywgJ2pxdWVyeSddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLmFkbWlubHRlID0ge30sIGdsb2JhbC5qUXVlcnkpKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzLCAkKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxuICB2YXIgJF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koJCk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIENhcmRSZWZyZXNoLmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgdmFyIE5BTUUgPSAnQ2FyZFJlZnJlc2gnO1xuICB2YXIgREFUQV9LRVkgPSAnbHRlLmNhcmRyZWZyZXNoJztcbiAgdmFyIEVWRU5UX0tFWSA9IFwiLlwiICsgREFUQV9LRVk7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRV07XG4gIHZhciBFVkVOVF9MT0FERUQgPSBcImxvYWRlZFwiICsgRVZFTlRfS0VZO1xuICB2YXIgRVZFTlRfT1ZFUkxBWV9BRERFRCA9IFwib3ZlcmxheS5hZGRlZFwiICsgRVZFTlRfS0VZO1xuICB2YXIgRVZFTlRfT1ZFUkxBWV9SRU1PVkVEID0gXCJvdmVybGF5LnJlbW92ZWRcIiArIEVWRU5UX0tFWTtcbiAgdmFyIENMQVNTX05BTUVfQ0FSRCA9ICdjYXJkJztcbiAgdmFyIFNFTEVDVE9SX0NBUkQgPSBcIi5cIiArIENMQVNTX05BTUVfQ0FSRDtcbiAgdmFyIFNFTEVDVE9SX0RBVEFfUkVGUkVTSCA9ICdbZGF0YS1jYXJkLXdpZGdldD1cImNhcmQtcmVmcmVzaFwiXSc7XG4gIHZhciBEZWZhdWx0ID0ge1xuICAgIHNvdXJjZTogJycsXG4gICAgc291cmNlU2VsZWN0b3I6ICcnLFxuICAgIHBhcmFtczoge30sXG4gICAgdHJpZ2dlcjogU0VMRUNUT1JfREFUQV9SRUZSRVNILFxuICAgIGNvbnRlbnQ6ICcuY2FyZC1ib2R5JyxcbiAgICBsb2FkSW5Db250ZW50OiB0cnVlLFxuICAgIGxvYWRPbkluaXQ6IHRydWUsXG4gICAgcmVzcG9uc2VUeXBlOiAnJyxcbiAgICBvdmVybGF5VGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjxpIGNsYXNzPVwiZmFzIGZhLTJ4IGZhLXN5bmMtYWx0IGZhLXNwaW5cIj48L2k+PC9kaXY+JyxcbiAgICBvbkxvYWRTdGFydDogZnVuY3Rpb24gb25Mb2FkU3RhcnQoKSB7fSxcbiAgICBvbkxvYWREb25lOiBmdW5jdGlvbiBvbkxvYWREb25lKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICB9O1xuXG4gIHZhciBDYXJkUmVmcmVzaCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FyZFJlZnJlc2goZWxlbWVudCwgc2V0dGluZ3MpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5fcGFyZW50ID0gZWxlbWVudC5wYXJlbnRzKFNFTEVDVE9SX0NBUkQpLmZpcnN0KCk7XG4gICAgICB0aGlzLl9zZXR0aW5ncyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5leHRlbmQoe30sIERlZmF1bHQsIHNldHRpbmdzKTtcbiAgICAgIHRoaXMuX292ZXJsYXkgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fc2V0dGluZ3Mub3ZlcmxheVRlbXBsYXRlKTtcblxuICAgICAgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DQVJEKSkge1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fc2V0dGluZ3Muc291cmNlID09PSAnJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvdXJjZSB1cmwgd2FzIG5vdCBkZWZpbmVkLiBQbGVhc2Ugc3BlY2lmeSBhIHVybCBpbiB5b3VyIENhcmRSZWZyZXNoIHNvdXJjZSBvcHRpb24uJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9wcm90byA9IENhcmRSZWZyZXNoLnByb3RvdHlwZTtcblxuICAgIF9wcm90by5sb2FkID0gZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX2FkZE92ZXJsYXkoKTtcblxuICAgICAgdGhpcy5fc2V0dGluZ3Mub25Mb2FkU3RhcnQuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykpO1xuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10uZ2V0KHRoaXMuX3NldHRpbmdzLnNvdXJjZSwgdGhpcy5fc2V0dGluZ3MucGFyYW1zLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKF90aGlzLl9zZXR0aW5ncy5sb2FkSW5Db250ZW50KSB7XG4gICAgICAgICAgaWYgKF90aGlzLl9zZXR0aW5ncy5zb3VyY2VTZWxlY3RvciAhPT0gJycpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHJlc3BvbnNlKS5maW5kKF90aGlzLl9zZXR0aW5ncy5zb3VyY2VTZWxlY3RvcikuaHRtbCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLl9wYXJlbnQuZmluZChfdGhpcy5fc2V0dGluZ3MuY29udGVudCkuaHRtbChyZXNwb25zZSk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5fc2V0dGluZ3Mub25Mb2FkRG9uZS5jYWxsKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShfdGhpcyksIHJlc3BvbnNlKTtcblxuICAgICAgICBfdGhpcy5fcmVtb3ZlT3ZlcmxheSgpO1xuICAgICAgfSwgdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VUeXBlICE9PSAnJyAmJiB0aGlzLl9zZXR0aW5ncy5yZXNwb25zZVR5cGUpO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX0xPQURFRCkpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2FkZE92ZXJsYXkgPSBmdW5jdGlvbiBfYWRkT3ZlcmxheSgpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5hcHBlbmQodGhpcy5fb3ZlcmxheSk7XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5FdmVudChFVkVOVF9PVkVSTEFZX0FEREVEKSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fcmVtb3ZlT3ZlcmxheSA9IGZ1bmN0aW9uIF9yZW1vdmVPdmVybGF5KCkge1xuICAgICAgdGhpcy5fcGFyZW50LmZpbmQodGhpcy5fb3ZlcmxheSkucmVtb3ZlKCk7XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5FdmVudChFVkVOVF9PVkVSTEFZX1JFTU9WRUQpKTtcbiAgICB9IC8vIFByaXZhdGVcbiAgICA7XG5cbiAgICBfcHJvdG8uX2luaXQgPSBmdW5jdGlvbiBfaW5pdCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZmluZCh0aGlzLl9zZXR0aW5ncy50cmlnZ2VyKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5sb2FkKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmxvYWRPbkluaXQpIHtcbiAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICB9XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHZhciBkYXRhID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICB2YXIgX29wdGlvbnMgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZXh0ZW5kKHt9LCBEZWZhdWx0LCAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YSgpKTtcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQ2FyZFJlZnJlc2goJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLCBfb3B0aW9ucyk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZLCB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGRhdGEgOiBjb25maWcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgJiYgY29uZmlnLm1hdGNoKC9sb2FkLykpIHtcbiAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhLl9pbml0KCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBDYXJkUmVmcmVzaDtcbiAgfSgpO1xuICAvKipcbiAgICogRGF0YSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfREFUQV9SRUZSRVNILCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgQ2FyZFJlZnJlc2guX2pRdWVyeUludGVyZmFjZS5jYWxsKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKSwgJ2xvYWQnKTtcbiAgfSk7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0RBVEFfUkVGUkVTSCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpKTtcbiAgICB9KTtcbiAgfSk7XG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUVdID0gQ2FyZFJlZnJlc2guX2pRdWVyeUludGVyZmFjZTtcbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ2FyZFJlZnJlc2g7XG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgIHJldHVybiBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBBZG1pbkxURSBDYXJkV2lkZ2V0LmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgdmFyIE5BTUUkMSA9ICdDYXJkV2lkZ2V0JztcbiAgdmFyIERBVEFfS0VZJDEgPSAnbHRlLmNhcmR3aWRnZXQnO1xuICB2YXIgRVZFTlRfS0VZJDEgPSBcIi5cIiArIERBVEFfS0VZJDE7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkMSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDFdO1xuICB2YXIgRVZFTlRfRVhQQU5ERUQgPSBcImV4cGFuZGVkXCIgKyBFVkVOVF9LRVkkMTtcbiAgdmFyIEVWRU5UX0NPTExBUFNFRCA9IFwiY29sbGFwc2VkXCIgKyBFVkVOVF9LRVkkMTtcbiAgdmFyIEVWRU5UX01BWElNSVpFRCA9IFwibWF4aW1pemVkXCIgKyBFVkVOVF9LRVkkMTtcbiAgdmFyIEVWRU5UX01JTklNSVpFRCA9IFwibWluaW1pemVkXCIgKyBFVkVOVF9LRVkkMTtcbiAgdmFyIEVWRU5UX1JFTU9WRUQgPSBcInJlbW92ZWRcIiArIEVWRU5UX0tFWSQxO1xuICB2YXIgQ0xBU1NfTkFNRV9DQVJEJDEgPSAnY2FyZCc7XG4gIHZhciBDTEFTU19OQU1FX0NPTExBUFNFRCA9ICdjb2xsYXBzZWQtY2FyZCc7XG4gIHZhciBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZy1jYXJkJztcbiAgdmFyIENMQVNTX05BTUVfRVhQQU5ESU5HID0gJ2V4cGFuZGluZy1jYXJkJztcbiAgdmFyIENMQVNTX05BTUVfV0FTX0NPTExBUFNFRCA9ICd3YXMtY29sbGFwc2VkJztcbiAgdmFyIENMQVNTX05BTUVfTUFYSU1JWkVEID0gJ21heGltaXplZC1jYXJkJztcbiAgdmFyIFNFTEVDVE9SX0RBVEFfUkVNT1ZFID0gJ1tkYXRhLWNhcmQtd2lkZ2V0PVwicmVtb3ZlXCJdJztcbiAgdmFyIFNFTEVDVE9SX0RBVEFfQ09MTEFQU0UgPSAnW2RhdGEtY2FyZC13aWRnZXQ9XCJjb2xsYXBzZVwiXSc7XG4gIHZhciBTRUxFQ1RPUl9EQVRBX01BWElNSVpFID0gJ1tkYXRhLWNhcmQtd2lkZ2V0PVwibWF4aW1pemVcIl0nO1xuICB2YXIgU0VMRUNUT1JfQ0FSRCQxID0gXCIuXCIgKyBDTEFTU19OQU1FX0NBUkQkMTtcbiAgdmFyIFNFTEVDVE9SX0NBUkRfSEVBREVSID0gJy5jYXJkLWhlYWRlcic7XG4gIHZhciBTRUxFQ1RPUl9DQVJEX0JPRFkgPSAnLmNhcmQtYm9keSc7XG4gIHZhciBTRUxFQ1RPUl9DQVJEX0ZPT1RFUiA9ICcuY2FyZC1mb290ZXInO1xuICB2YXIgRGVmYXVsdCQxID0ge1xuICAgIGFuaW1hdGlvblNwZWVkOiAnbm9ybWFsJyxcbiAgICBjb2xsYXBzZVRyaWdnZXI6IFNFTEVDVE9SX0RBVEFfQ09MTEFQU0UsXG4gICAgcmVtb3ZlVHJpZ2dlcjogU0VMRUNUT1JfREFUQV9SRU1PVkUsXG4gICAgbWF4aW1pemVUcmlnZ2VyOiBTRUxFQ1RPUl9EQVRBX01BWElNSVpFLFxuICAgIGNvbGxhcHNlSWNvbjogJ2ZhLW1pbnVzJyxcbiAgICBleHBhbmRJY29uOiAnZmEtcGx1cycsXG4gICAgbWF4aW1pemVJY29uOiAnZmEtZXhwYW5kJyxcbiAgICBtaW5pbWl6ZUljb246ICdmYS1jb21wcmVzcydcbiAgfTtcblxuICB2YXIgQ2FyZFdpZGdldCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FyZFdpZGdldChlbGVtZW50LCBzZXR0aW5ncykge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50LnBhcmVudHMoU0VMRUNUT1JfQ0FSRCQxKS5maXJzdCgpO1xuXG4gICAgICBpZiAoZWxlbWVudC5oYXNDbGFzcyhDTEFTU19OQU1FX0NBUkQkMSkpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2V0dGluZ3MgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZXh0ZW5kKHt9LCBEZWZhdWx0JDEsIHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICB2YXIgX3Byb3RvID0gQ2FyZFdpZGdldC5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8uY29sbGFwc2UgPSBmdW5jdGlvbiBjb2xsYXBzZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX3BhcmVudC5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNJTkcpLmNoaWxkcmVuKFNFTEVDVE9SX0NBUkRfQk9EWSArIFwiLCBcIiArIFNFTEVDVE9SX0NBUkRfRk9PVEVSKS5zbGlkZVVwKHRoaXMuX3NldHRpbmdzLmFuaW1hdGlvblNwZWVkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLl9wYXJlbnQuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fcGFyZW50LmZpbmQoXCI+IFwiICsgU0VMRUNUT1JfQ0FSRF9IRUFERVIgKyBcIiBcIiArIHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlVHJpZ2dlciArIFwiIC5cIiArIHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlSWNvbikuYWRkQ2xhc3ModGhpcy5fc2V0dGluZ3MuZXhwYW5kSWNvbikucmVtb3ZlQ2xhc3ModGhpcy5fc2V0dGluZ3MuY29sbGFwc2VJY29uKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC50cmlnZ2VyKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5FdmVudChFVkVOVF9DT0xMQVBTRUQpLCB0aGlzLl9wYXJlbnQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZXhwYW5kID0gZnVuY3Rpb24gZXhwYW5kKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX3BhcmVudC5hZGRDbGFzcyhDTEFTU19OQU1FX0VYUEFORElORykuY2hpbGRyZW4oU0VMRUNUT1JfQ0FSRF9CT0RZICsgXCIsIFwiICsgU0VMRUNUT1JfQ0FSRF9GT09URVIpLnNsaWRlRG93bih0aGlzLl9zZXR0aW5ncy5hbmltYXRpb25TcGVlZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuX3BhcmVudC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFRCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9FWFBBTkRJTkcpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3BhcmVudC5maW5kKFwiPiBcIiArIFNFTEVDVE9SX0NBUkRfSEVBREVSICsgXCIgXCIgKyB0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZVRyaWdnZXIgKyBcIiAuXCIgKyB0aGlzLl9zZXR0aW5ncy5leHBhbmRJY29uKS5hZGRDbGFzcyh0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZUljb24pLnJlbW92ZUNsYXNzKHRoaXMuX3NldHRpbmdzLmV4cGFuZEljb24pO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX0VYUEFOREVEKSwgdGhpcy5fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5zbGlkZVVwKCk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQudHJpZ2dlcigkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfUkVNT1ZFRCksIHRoaXMuX3BhcmVudCk7XG4gICAgfTtcblxuICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICBpZiAodGhpcy5fcGFyZW50Lmhhc0NsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKSkge1xuICAgICAgICB0aGlzLmV4cGFuZCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29sbGFwc2UoKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLm1heGltaXplID0gZnVuY3Rpb24gbWF4aW1pemUoKSB7XG4gICAgICB0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9zZXR0aW5ncy5tYXhpbWl6ZVRyaWdnZXIgKyBcIiAuXCIgKyB0aGlzLl9zZXR0aW5ncy5tYXhpbWl6ZUljb24pLmFkZENsYXNzKHRoaXMuX3NldHRpbmdzLm1pbmltaXplSWNvbikucmVtb3ZlQ2xhc3ModGhpcy5fc2V0dGluZ3MubWF4aW1pemVJY29uKTtcblxuICAgICAgdGhpcy5fcGFyZW50LmNzcyh7XG4gICAgICAgIGhlaWdodDogdGhpcy5fcGFyZW50LmhlaWdodCgpLFxuICAgICAgICB3aWR0aDogdGhpcy5fcGFyZW50LndpZHRoKCksXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgLjE1cydcbiAgICAgIH0pLmRlbGF5KDE1MCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGVsZW1lbnQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyk7XG4gICAgICAgICRlbGVtZW50LmFkZENsYXNzKENMQVNTX05BTUVfTUFYSU1JWkVEKTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdodG1sJykuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9NQVhJTUlaRUQpO1xuXG4gICAgICAgIGlmICgkZWxlbWVudC5oYXNDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFRCkpIHtcbiAgICAgICAgICAkZWxlbWVudC5hZGRDbGFzcyhDTEFTU19OQU1FX1dBU19DT0xMQVBTRUQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsZW1lbnQuZGVxdWV1ZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQudHJpZ2dlcigkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfTUFYSU1JWkVEKSwgdGhpcy5fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLm1pbmltaXplID0gZnVuY3Rpb24gbWluaW1pemUoKSB7XG4gICAgICB0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9zZXR0aW5ncy5tYXhpbWl6ZVRyaWdnZXIgKyBcIiAuXCIgKyB0aGlzLl9zZXR0aW5ncy5taW5pbWl6ZUljb24pLmFkZENsYXNzKHRoaXMuX3NldHRpbmdzLm1heGltaXplSWNvbikucmVtb3ZlQ2xhc3ModGhpcy5fc2V0dGluZ3MubWluaW1pemVJY29uKTtcblxuICAgICAgdGhpcy5fcGFyZW50LmNzcygnY3NzVGV4dCcsIFwiaGVpZ2h0OiBcIiArIHRoaXMuX3BhcmVudFswXS5zdHlsZS5oZWlnaHQgKyBcIiAhaW1wb3J0YW50OyB3aWR0aDogXCIgKyB0aGlzLl9wYXJlbnRbMF0uc3R5bGUud2lkdGggKyBcIiAhaW1wb3J0YW50OyB0cmFuc2l0aW9uOiBhbGwgLjE1cztcIikuZGVsYXkoMTApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRlbGVtZW50ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpO1xuICAgICAgICAkZWxlbWVudC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX01BWElNSVpFRCk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnaHRtbCcpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfTUFYSU1JWkVEKTtcbiAgICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgICB3aWR0aDogJ2luaGVyaXQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgkZWxlbWVudC5oYXNDbGFzcyhDTEFTU19OQU1FX1dBU19DT0xMQVBTRUQpKSB7XG4gICAgICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9XQVNfQ09MTEFQU0VEKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRlbGVtZW50LmRlcXVldWUoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX01JTklNSVpFRCksIHRoaXMuX3BhcmVudCk7XG4gICAgfTtcblxuICAgIF9wcm90by50b2dnbGVNYXhpbWl6ZSA9IGZ1bmN0aW9uIHRvZ2dsZU1heGltaXplKCkge1xuICAgICAgaWYgKHRoaXMuX3BhcmVudC5oYXNDbGFzcyhDTEFTU19OQU1FX01BWElNSVpFRCkpIHtcbiAgICAgICAgdGhpcy5taW5pbWl6ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWF4aW1pemUoKTtcbiAgICB9IC8vIFByaXZhdGVcbiAgICA7XG5cbiAgICBfcHJvdG8uX2luaXQgPSBmdW5jdGlvbiBfaW5pdChjYXJkKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdGhpcy5fcGFyZW50ID0gY2FyZDtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5maW5kKHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlVHJpZ2dlcikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMudG9nZ2xlKCk7XG4gICAgICB9KTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5maW5kKHRoaXMuX3NldHRpbmdzLm1heGltaXplVHJpZ2dlcikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMudG9nZ2xlTWF4aW1pemUoKTtcbiAgICAgIH0pO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmZpbmQodGhpcy5fc2V0dGluZ3MucmVtb3ZlVHJpZ2dlcikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIENhcmRXaWRnZXQuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICB2YXIgZGF0YSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJDEpO1xuXG4gICAgICB2YXIgX29wdGlvbnMgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZXh0ZW5kKHt9LCBEZWZhdWx0JDEsICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKCkpO1xuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBDYXJkV2lkZ2V0KCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKSwgX29wdGlvbnMpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSQxLCB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGRhdGEgOiBjb25maWcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgJiYgY29uZmlnLm1hdGNoKC9jb2xsYXBzZXxleHBhbmR8cmVtb3ZlfHRvZ2dsZXxtYXhpbWl6ZXxtaW5pbWl6ZXx0b2dnbGVNYXhpbWl6ZS8pKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICBkYXRhLl9pbml0KCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBDYXJkV2lkZ2V0O1xuICB9KCk7XG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vbignY2xpY2snLCBTRUxFQ1RPUl9EQVRBX0NPTExBUFNFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgQ2FyZFdpZGdldC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLCAndG9nZ2xlJyk7XG4gIH0pO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0RBVEFfUkVNT1ZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgQ2FyZFdpZGdldC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLCAncmVtb3ZlJyk7XG4gIH0pO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0RBVEFfTUFYSU1JWkUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBDYXJkV2lkZ2V0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyksICd0b2dnbGVNYXhpbWl6ZScpO1xuICB9KTtcbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQxXSA9IENhcmRXaWRnZXQuX2pRdWVyeUludGVyZmFjZTtcbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkMV0uQ29uc3RydWN0b3IgPSBDYXJkV2lkZ2V0O1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDFdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkMV0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkMTtcbiAgICByZXR1cm4gQ2FyZFdpZGdldC5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBBZG1pbkxURSBDb250cm9sU2lkZWJhci5qc1xuICAgKiBMaWNlbnNlIE1JVFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIHZhciBOQU1FJDIgPSAnQ29udHJvbFNpZGViYXInO1xuICB2YXIgREFUQV9LRVkkMiA9ICdsdGUuY29udHJvbHNpZGViYXInO1xuICB2YXIgRVZFTlRfS0VZJDIgPSBcIi5cIiArIERBVEFfS0VZJDI7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkMiA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDJdO1xuICB2YXIgRVZFTlRfQ09MTEFQU0VEJDEgPSBcImNvbGxhcHNlZFwiICsgRVZFTlRfS0VZJDI7XG4gIHZhciBFVkVOVF9FWFBBTkRFRCQxID0gXCJleHBhbmRlZFwiICsgRVZFTlRfS0VZJDI7XG4gIHZhciBTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVIgPSAnLmNvbnRyb2wtc2lkZWJhcic7XG4gIHZhciBTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJfQ09OVEVOVCA9ICcuY29udHJvbC1zaWRlYmFyLWNvbnRlbnQnO1xuICB2YXIgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtd2lkZ2V0PVwiY29udHJvbC1zaWRlYmFyXCJdJztcbiAgdmFyIFNFTEVDVE9SX0hFQURFUiA9ICcubWFpbi1oZWFkZXInO1xuICB2YXIgU0VMRUNUT1JfRk9PVEVSID0gJy5tYWluLWZvb3Rlcic7XG4gIHZhciBDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9BTklNQVRFID0gJ2NvbnRyb2wtc2lkZWJhci1hbmltYXRlJztcbiAgdmFyIENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX09QRU4gPSAnY29udHJvbC1zaWRlYmFyLW9wZW4nO1xuICB2YXIgQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfU0xJREUgPSAnY29udHJvbC1zaWRlYmFyLXNsaWRlLW9wZW4nO1xuICB2YXIgQ0xBU1NfTkFNRV9MQVlPVVRfRklYRUQgPSAnbGF5b3V0LWZpeGVkJztcbiAgdmFyIENMQVNTX05BTUVfTkFWQkFSX0ZJWEVEID0gJ2xheW91dC1uYXZiYXItZml4ZWQnO1xuICB2YXIgQ0xBU1NfTkFNRV9OQVZCQVJfU01fRklYRUQgPSAnbGF5b3V0LXNtLW5hdmJhci1maXhlZCc7XG4gIHZhciBDTEFTU19OQU1FX05BVkJBUl9NRF9GSVhFRCA9ICdsYXlvdXQtbWQtbmF2YmFyLWZpeGVkJztcbiAgdmFyIENMQVNTX05BTUVfTkFWQkFSX0xHX0ZJWEVEID0gJ2xheW91dC1sZy1uYXZiYXItZml4ZWQnO1xuICB2YXIgQ0xBU1NfTkFNRV9OQVZCQVJfWExfRklYRUQgPSAnbGF5b3V0LXhsLW5hdmJhci1maXhlZCc7XG4gIHZhciBDTEFTU19OQU1FX0ZPT1RFUl9GSVhFRCA9ICdsYXlvdXQtZm9vdGVyLWZpeGVkJztcbiAgdmFyIENMQVNTX05BTUVfRk9PVEVSX1NNX0ZJWEVEID0gJ2xheW91dC1zbS1mb290ZXItZml4ZWQnO1xuICB2YXIgQ0xBU1NfTkFNRV9GT09URVJfTURfRklYRUQgPSAnbGF5b3V0LW1kLWZvb3Rlci1maXhlZCc7XG4gIHZhciBDTEFTU19OQU1FX0ZPT1RFUl9MR19GSVhFRCA9ICdsYXlvdXQtbGctZm9vdGVyLWZpeGVkJztcbiAgdmFyIENMQVNTX05BTUVfRk9PVEVSX1hMX0ZJWEVEID0gJ2xheW91dC14bC1mb290ZXItZml4ZWQnO1xuICB2YXIgRGVmYXVsdCQyID0ge1xuICAgIGNvbnRyb2xzaWRlYmFyU2xpZGU6IHRydWUsXG4gICAgc2Nyb2xsYmFyVGhlbWU6ICdvcy10aGVtZS1saWdodCcsXG4gICAgc2Nyb2xsYmFyQXV0b0hpZGU6ICdsJ1xuICB9O1xuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIHZhciBDb250cm9sU2lkZWJhciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29udHJvbFNpZGViYXIoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH0gLy8gUHVibGljXG5cblxuICAgIHZhciBfcHJvdG8gPSBDb250cm9sU2lkZWJhci5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8uY29sbGFwc2UgPSBmdW5jdGlvbiBjb2xsYXBzZSgpIHtcbiAgICAgIHZhciAkYm9keSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnYm9keScpO1xuICAgICAgdmFyICRodG1sID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdodG1sJyk7IC8vIFNob3cgdGhlIGNvbnRyb2wgc2lkZWJhclxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmNvbnRyb2xzaWRlYmFyU2xpZGUpIHtcbiAgICAgICAgJGh0bWwuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfQU5JTUFURSk7XG4gICAgICAgICRib2R5LnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX1NMSURFKS5kZWxheSgzMDApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfQ09OVFJPTF9TSURFQkFSKS5oaWRlKCk7XG4gICAgICAgICAgJGh0bWwucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfQU5JTUFURSk7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRlcXVldWUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkYm9keS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9PUEVOKTtcbiAgICAgIH1cblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX0NPTExBUFNFRCQxKSk7XG4gICAgfTtcblxuICAgIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgIHZhciAkYm9keSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnYm9keScpO1xuICAgICAgdmFyICRodG1sID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdodG1sJyk7IC8vIENvbGxhcHNlIHRoZSBjb250cm9sIHNpZGViYXJcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5jb250cm9sc2lkZWJhclNsaWRlKSB7XG4gICAgICAgICRodG1sLmFkZENsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX0FOSU1BVEUpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfQ09OVFJPTF9TSURFQkFSKS5zaG93KCkuZGVsYXkoMTApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkYm9keS5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9TTElERSkuZGVsYXkoMzAwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkaHRtbC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9BTklNQVRFKTtcbiAgICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kZXF1ZXVlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRlcXVldWUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkYm9keS5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9PUEVOKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZml4SGVpZ2h0KCk7XG5cbiAgICAgIHRoaXMuX2ZpeFNjcm9sbEhlaWdodCgpO1xuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkudHJpZ2dlcigkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfRVhQQU5ERUQkMSkpO1xuICAgIH07XG5cbiAgICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgdmFyICRib2R5ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdib2R5Jyk7XG4gICAgICB2YXIgc2hvdWxkQ2xvc2UgPSAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9PUEVOKSB8fCAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9TTElERSk7XG5cbiAgICAgIGlmIChzaG91bGRDbG9zZSkge1xuICAgICAgICAvLyBDbG9zZSB0aGUgY29udHJvbCBzaWRlYmFyXG4gICAgICAgIHRoaXMuY29sbGFwc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE9wZW4gdGhlIGNvbnRyb2wgc2lkZWJhclxuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9IC8vIFByaXZhdGVcbiAgICA7XG5cbiAgICBfcHJvdG8uX2luaXQgPSBmdW5jdGlvbiBfaW5pdCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX2ZpeEhlaWdodCgpO1xuXG4gICAgICB0aGlzLl9maXhTY3JvbGxIZWlnaHQoKTtcblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuX2ZpeEhlaWdodCgpO1xuXG4gICAgICAgIF90aGlzLl9maXhTY3JvbGxIZWlnaHQoKTtcbiAgICAgIH0pO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRib2R5ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdib2R5Jyk7XG4gICAgICAgIHZhciBzaG91bGRGaXhIZWlnaHQgPSAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9PUEVOKSB8fCAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9TTElERSk7XG5cbiAgICAgICAgaWYgKHNob3VsZEZpeEhlaWdodCkge1xuICAgICAgICAgIF90aGlzLl9maXhTY3JvbGxIZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fZml4U2Nyb2xsSGVpZ2h0ID0gZnVuY3Rpb24gX2ZpeFNjcm9sbEhlaWdodCgpIHtcbiAgICAgIHZhciAkYm9keSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnYm9keScpO1xuXG4gICAgICBpZiAoISRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfTEFZT1VUX0ZJWEVEKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBoZWlnaHRzID0ge1xuICAgICAgICBzY3JvbGw6ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudCkuaGVpZ2h0KCksXG4gICAgICAgIHdpbmRvdzogJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykuaGVpZ2h0KCksXG4gICAgICAgIGhlYWRlcjogJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0hFQURFUikub3V0ZXJIZWlnaHQoKSxcbiAgICAgICAgZm9vdGVyOiAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfRk9PVEVSKS5vdXRlckhlaWdodCgpXG4gICAgICB9O1xuICAgICAgdmFyIHBvc2l0aW9ucyA9IHtcbiAgICAgICAgYm90dG9tOiBNYXRoLmFicyhoZWlnaHRzLndpbmRvdyArICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh3aW5kb3cpLnNjcm9sbFRvcCgpIC0gaGVpZ2h0cy5zY3JvbGwpLFxuICAgICAgICB0b3A6ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh3aW5kb3cpLnNjcm9sbFRvcCgpXG4gICAgICB9O1xuICAgICAgdmFyIG5hdmJhckZpeGVkID0gKCRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfTkFWQkFSX0ZJWEVEKSB8fCAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX05BVkJBUl9TTV9GSVhFRCkgfHwgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9OQVZCQVJfTURfRklYRUQpIHx8ICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfTkFWQkFSX0xHX0ZJWEVEKSB8fCAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX05BVkJBUl9YTF9GSVhFRCkpICYmICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9IRUFERVIpLmNzcygncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJztcbiAgICAgIHZhciBmb290ZXJGaXhlZCA9ICgkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZPT1RFUl9GSVhFRCkgfHwgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfU01fRklYRUQpIHx8ICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfRk9PVEVSX01EX0ZJWEVEKSB8fCAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZPT1RFUl9MR19GSVhFRCkgfHwgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfWExfRklYRUQpKSAmJiAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfRk9PVEVSKS5jc3MoJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCc7XG4gICAgICB2YXIgJGNvbnRyb2xTaWRlYmFyID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUik7XG4gICAgICB2YXIgJGNvbnRyb2xzaWRlYmFyQ29udGVudCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVIgKyBcIiwgXCIgKyBTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVIgKyBcIiBcIiArIFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUl9DT05URU5UKTtcblxuICAgICAgaWYgKHBvc2l0aW9ucy50b3AgPT09IDAgJiYgcG9zaXRpb25zLmJvdHRvbSA9PT0gMCkge1xuICAgICAgICAkY29udHJvbFNpZGViYXIuY3NzKHtcbiAgICAgICAgICBib3R0b206IGhlaWdodHMuZm9vdGVyLFxuICAgICAgICAgIHRvcDogaGVpZ2h0cy5oZWFkZXJcbiAgICAgICAgfSk7XG4gICAgICAgICRjb250cm9sc2lkZWJhckNvbnRlbnQuY3NzKCdoZWlnaHQnLCBoZWlnaHRzLndpbmRvdyAtIChoZWlnaHRzLmhlYWRlciArIGhlaWdodHMuZm9vdGVyKSk7XG4gICAgICB9IGVsc2UgaWYgKHBvc2l0aW9ucy5ib3R0b20gPD0gaGVpZ2h0cy5mb290ZXIpIHtcbiAgICAgICAgaWYgKGZvb3RlckZpeGVkID09PSBmYWxzZSkge1xuICAgICAgICAgIHZhciB0b3AgPSBoZWlnaHRzLmhlYWRlciAtIHBvc2l0aW9ucy50b3A7XG4gICAgICAgICAgJGNvbnRyb2xTaWRlYmFyLmNzcygnYm90dG9tJywgaGVpZ2h0cy5mb290ZXIgLSBwb3NpdGlvbnMuYm90dG9tKS5jc3MoJ3RvcCcsIHRvcCA+PSAwID8gdG9wIDogMCk7XG4gICAgICAgICAgJGNvbnRyb2xzaWRlYmFyQ29udGVudC5jc3MoJ2hlaWdodCcsIGhlaWdodHMud2luZG93IC0gKGhlaWdodHMuZm9vdGVyIC0gcG9zaXRpb25zLmJvdHRvbSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRjb250cm9sU2lkZWJhci5jc3MoJ2JvdHRvbScsIGhlaWdodHMuZm9vdGVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbnMudG9wIDw9IGhlaWdodHMuaGVhZGVyKSB7XG4gICAgICAgIGlmIChuYXZiYXJGaXhlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAkY29udHJvbFNpZGViYXIuY3NzKCd0b3AnLCBoZWlnaHRzLmhlYWRlciAtIHBvc2l0aW9ucy50b3ApO1xuICAgICAgICAgICRjb250cm9sc2lkZWJhckNvbnRlbnQuY3NzKCdoZWlnaHQnLCBoZWlnaHRzLndpbmRvdyAtIChoZWlnaHRzLmhlYWRlciAtIHBvc2l0aW9ucy50b3ApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkY29udHJvbFNpZGViYXIuY3NzKCd0b3AnLCBoZWlnaHRzLmhlYWRlcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobmF2YmFyRml4ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICRjb250cm9sU2lkZWJhci5jc3MoJ3RvcCcsIDApO1xuICAgICAgICAkY29udHJvbHNpZGViYXJDb250ZW50LmNzcygnaGVpZ2h0JywgaGVpZ2h0cy53aW5kb3cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGNvbnRyb2xTaWRlYmFyLmNzcygndG9wJywgaGVpZ2h0cy5oZWFkZXIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2ZpeEhlaWdodCA9IGZ1bmN0aW9uIF9maXhIZWlnaHQoKSB7XG4gICAgICB2YXIgJGJvZHkgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oJ2JvZHknKTtcblxuICAgICAgaWYgKCEkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0xBWU9VVF9GSVhFRCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGVpZ2h0cyA9IHtcbiAgICAgICAgd2luZG93OiAkX19kZWZhdWx0WydkZWZhdWx0J10od2luZG93KS5oZWlnaHQoKSxcbiAgICAgICAgaGVhZGVyOiAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfSEVBREVSKS5vdXRlckhlaWdodCgpLFxuICAgICAgICBmb290ZXI6ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9GT09URVIpLm91dGVySGVpZ2h0KClcbiAgICAgIH07XG4gICAgICB2YXIgc2lkZWJhckhlaWdodCA9IGhlaWdodHMud2luZG93IC0gaGVpZ2h0cy5oZWFkZXI7XG5cbiAgICAgIGlmICgkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZPT1RFUl9GSVhFRCkgfHwgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfU01fRklYRUQpIHx8ICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfRk9PVEVSX01EX0ZJWEVEKSB8fCAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZPT1RFUl9MR19GSVhFRCkgfHwgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfWExfRklYRUQpKSB7XG4gICAgICAgIGlmICgkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfRk9PVEVSKS5jc3MoJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICBzaWRlYmFySGVpZ2h0ID0gaGVpZ2h0cy53aW5kb3cgLSBoZWlnaHRzLmhlYWRlciAtIGhlaWdodHMuZm9vdGVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciAkY29udHJvbFNpZGViYXIgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfQ09OVFJPTF9TSURFQkFSICsgXCIgXCIgKyBTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJfQ09OVEVOVCk7XG4gICAgICAkY29udHJvbFNpZGViYXIuY3NzKCdoZWlnaHQnLCBzaWRlYmFySGVpZ2h0KTtcblxuICAgICAgaWYgKHR5cGVvZiAkX19kZWZhdWx0WydkZWZhdWx0J10uZm4ub3ZlcmxheVNjcm9sbGJhcnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICRjb250cm9sU2lkZWJhci5vdmVybGF5U2Nyb2xsYmFycyh7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLl9jb25maWcuc2Nyb2xsYmFyVGhlbWUsXG4gICAgICAgICAgc2l6ZUF1dG9DYXBhYmxlOiB0cnVlLFxuICAgICAgICAgIHNjcm9sbGJhcnM6IHtcbiAgICAgICAgICAgIGF1dG9IaWRlOiB0aGlzLl9jb25maWcuc2Nyb2xsYmFyQXV0b0hpZGUsXG4gICAgICAgICAgICBjbGlja1Njcm9sbGluZzogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBDb250cm9sU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShvcGVyYXRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJDIpO1xuXG4gICAgICAgIHZhciBfb3B0aW9ucyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5leHRlbmQoe30sIERlZmF1bHQkMiwgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoKSk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBDb250cm9sU2lkZWJhcih0aGlzLCBfb3B0aW9ucyk7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVkkMiwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YVtvcGVyYXRpb25dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihvcGVyYXRpb24gKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbb3BlcmF0aW9uXSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBDb250cm9sU2lkZWJhcjtcbiAgfSgpO1xuICAvKipcbiAgICpcbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBDb250cm9sU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLCAndG9nZ2xlJyk7XG4gIH0pO1xuICAvKipcbiAgICogalF1ZXJ5IEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDJdID0gQ29udHJvbFNpZGViYXIuX2pRdWVyeUludGVyZmFjZTtcbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkMl0uQ29uc3RydWN0b3IgPSBDb250cm9sU2lkZWJhcjtcblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQyXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDJdID0gSlFVRVJZX05PX0NPTkZMSUNUJDI7XG4gICAgcmV0dXJuIENvbnRyb2xTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIERpcmVjdENoYXQuanNcbiAgICogTGljZW5zZSBNSVRcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICB2YXIgTkFNRSQzID0gJ0RpcmVjdENoYXQnO1xuICB2YXIgREFUQV9LRVkkMyA9ICdsdGUuZGlyZWN0Y2hhdCc7XG4gIHZhciBFVkVOVF9LRVkkMyA9IFwiLlwiICsgREFUQV9LRVkkMztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQzID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkM107XG4gIHZhciBFVkVOVF9UT0dHTEVEID0gXCJ0b2dnbGVkXCIgKyBFVkVOVF9LRVkkMztcbiAgdmFyIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDEgPSAnW2RhdGEtd2lkZ2V0PVwiY2hhdC1wYW5lLXRvZ2dsZVwiXSc7XG4gIHZhciBTRUxFQ1RPUl9ESVJFQ1RfQ0hBVCA9ICcuZGlyZWN0LWNoYXQnO1xuICB2YXIgQ0xBU1NfTkFNRV9ESVJFQ1RfQ0hBVF9PUEVOID0gJ2RpcmVjdC1jaGF0LWNvbnRhY3RzLW9wZW4nO1xuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIHZhciBEaXJlY3RDaGF0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaXJlY3RDaGF0KGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIHZhciBfcHJvdG8gPSBEaXJlY3RDaGF0LnByb3RvdHlwZTtcblxuICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkucGFyZW50cyhTRUxFQ1RPUl9ESVJFQ1RfQ0hBVCkuZmlyc3QoKS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0RJUkVDVF9DSEFUX09QRU4pO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX1RPR0dMRUQpKTtcbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIERpcmVjdENoYXQuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSQzKTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IERpcmVjdENoYXQoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpKTtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSQzLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBEaXJlY3RDaGF0O1xuICB9KCk7XG4gIC8qKlxuICAgKlxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vbignY2xpY2snLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQxLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgRGlyZWN0Q2hhdC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLCAndG9nZ2xlJyk7XG4gIH0pO1xuICAvKipcbiAgICogalF1ZXJ5IEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDNdID0gRGlyZWN0Q2hhdC5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQzXS5Db25zdHJ1Y3RvciA9IERpcmVjdENoYXQ7XG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkM10ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQzXSA9IEpRVUVSWV9OT19DT05GTElDVCQzO1xuICAgIHJldHVybiBEaXJlY3RDaGF0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIERyb3Bkb3duLmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgdmFyIE5BTUUkNCA9ICdEcm9wZG93bic7XG4gIHZhciBEQVRBX0tFWSQ0ID0gJ2x0ZS5kcm9wZG93bic7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkNCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDRdO1xuICB2YXIgU0VMRUNUT1JfTkFWQkFSID0gJy5uYXZiYXInO1xuICB2YXIgU0VMRUNUT1JfRFJPUERPV05fTUVOVSA9ICcuZHJvcGRvd24tbWVudSc7XG4gIHZhciBTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VX0FDVElWRSA9ICcuZHJvcGRvd24tbWVudS5zaG93JztcbiAgdmFyIFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXSc7XG4gIHZhciBDTEFTU19OQU1FX0RST1BET1dOX1JJR0hUID0gJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnO1xuICB2YXIgQ0xBU1NfTkFNRV9EUk9QRE9XTl9TVUJNRU5VID0gJ2Ryb3Bkb3duLXN1Ym1lbnUnOyAvLyBUT0RPOiB0aGlzIGlzIHVudXNlZDsgc2hvdWxkIGJlIHJlbW92ZWQgYWxvbmcgd2l0aCB0aGUgZXh0ZW5kP1xuXG4gIHZhciBEZWZhdWx0JDMgPSB7fTtcbiAgLyoqXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICB2YXIgRHJvcGRvd24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERyb3Bkb3duKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfSAvLyBQdWJsaWNcblxuXG4gICAgdmFyIF9wcm90byA9IERyb3Bkb3duLnByb3RvdHlwZTtcblxuICAgIF9wcm90by50b2dnbGVTdWJtZW51ID0gZnVuY3Rpb24gdG9nZ2xlU3VibWVudSgpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2libGluZ3MoKS5zaG93KCkudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcblxuICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm5leHQoKS5oYXNDbGFzcygnc2hvdycpKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50cyhTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VKS5maXJzdCgpLmZpbmQoJy5zaG93JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKS5oaWRlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50cygnbGkubmF2LWl0ZW0uZHJvcGRvd24uc2hvdycpLm9uKCdoaWRkZW4uYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnLmRyb3Bkb3duLXN1Ym1lbnUgLnNob3cnKS5yZW1vdmVDbGFzcygnc2hvdycpLmhpZGUoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZml4UG9zaXRpb24gPSBmdW5jdGlvbiBmaXhQb3NpdGlvbigpIHtcbiAgICAgIHZhciAkZWxlbWVudCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VX0FDVElWRSk7XG5cbiAgICAgIGlmICgkZWxlbWVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoJGVsZW1lbnQuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9EUk9QRE9XTl9SSUdIVCkpIHtcbiAgICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgICBsZWZ0OiAnaW5oZXJpdCcsXG4gICAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZWxlbWVudC5jc3Moe1xuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgcmlnaHQ6ICdpbmhlcml0J1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIG9mZnNldCA9ICRlbGVtZW50Lm9mZnNldCgpO1xuICAgICAgdmFyIHdpZHRoID0gJGVsZW1lbnQud2lkdGgoKTtcbiAgICAgIHZhciB2aXNpYmxlUGFydCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh3aW5kb3cpLndpZHRoKCkgLSBvZmZzZXQubGVmdDtcblxuICAgICAgaWYgKG9mZnNldC5sZWZ0IDwgMCkge1xuICAgICAgICAkZWxlbWVudC5jc3Moe1xuICAgICAgICAgIGxlZnQ6ICdpbmhlcml0JyxcbiAgICAgICAgICByaWdodDogb2Zmc2V0LmxlZnQgLSA1XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh2aXNpYmxlUGFydCA8IHdpZHRoKSB7XG4gICAgICAgICRlbGVtZW50LmNzcyh7XG4gICAgICAgICAgbGVmdDogJ2luaGVyaXQnLFxuICAgICAgICAgIHJpZ2h0OiAwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSQ0KTtcblxuICAgICAgICB2YXIgX2NvbmZpZyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5leHRlbmQoe30sIERlZmF1bHQkMywgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoKSk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBEcm9wZG93bigkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyksIF9jb25maWcpO1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJDQsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZVN1Ym1lbnUnIHx8IGNvbmZpZyA9PT0gJ2ZpeFBvc2l0aW9uJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERyb3Bkb3duO1xuICB9KCk7XG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0RST1BET1dOX01FTlUgKyBcIiBcIiArIFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyksICd0b2dnbGVTdWJtZW51Jyk7XG4gIH0pO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfTkFWQkFSICsgXCIgXCIgKyBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKGV2ZW50LnRhcmdldCkucGFyZW50KCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9EUk9QRE9XTl9TVUJNRU5VKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZS5jYWxsKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKSwgJ2ZpeFBvc2l0aW9uJyk7XG4gICAgfSwgMSk7XG4gIH0pO1xuICAvKipcbiAgICogalF1ZXJ5IEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDRdID0gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZTtcbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkNF0uQ29uc3RydWN0b3IgPSBEcm9wZG93bjtcblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ0XS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDRdID0gSlFVRVJZX05PX0NPTkZMSUNUJDQ7XG4gICAgcmV0dXJuIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIEV4cGFuZGFibGVUYWJsZS5qc1xuICAgKiBMaWNlbnNlIE1JVFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgLyoqXG4gICAgKiBDb25zdGFudHNcbiAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqL1xuXG4gIHZhciBOQU1FJDUgPSAnRXhwYW5kYWJsZVRhYmxlJztcbiAgdmFyIERBVEFfS0VZJDUgPSAnbHRlLmV4cGFuZGFibGVUYWJsZSc7XG4gIHZhciBFVkVOVF9LRVkkNCA9IFwiLlwiICsgREFUQV9LRVkkNTtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQ1ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkNV07XG4gIHZhciBFVkVOVF9FWFBBTkRFRCQyID0gXCJleHBhbmRlZFwiICsgRVZFTlRfS0VZJDQ7XG4gIHZhciBFVkVOVF9DT0xMQVBTRUQkMiA9IFwiY29sbGFwc2VkXCIgKyBFVkVOVF9LRVkkNDtcbiAgdmFyIFNFTEVDVE9SX1RBQkxFID0gJy5leHBhbmRhYmxlLXRhYmxlJztcbiAgdmFyIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDIgPSAnW2RhdGEtd2lkZ2V0PVwiZXhwYW5kYWJsZS10YWJsZVwiXSc7XG4gIHZhciBTRUxFQ1RPUl9BUklBX0FUVFIgPSAnYXJpYS1leHBhbmRlZCc7XG4gIC8qKlxuICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICovXG5cbiAgdmFyIEV4cGFuZGFibGVUYWJsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXhwYW5kYWJsZVRhYmxlKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfSAvLyBQdWJsaWNcblxuXG4gICAgdmFyIF9wcm90byA9IEV4cGFuZGFibGVUYWJsZS5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfREFUQV9UT0dHTEUkMikuZWFjaChmdW5jdGlvbiAoXywgJGhlYWRlcikge1xuICAgICAgICB2YXIgJHR5cGUgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oJGhlYWRlcikuYXR0cihTRUxFQ1RPUl9BUklBX0FUVFIpO1xuICAgICAgICB2YXIgJGJvZHkgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oJGhlYWRlcikubmV4dCgpLmNoaWxkcmVuKCkuZmlyc3QoKS5jaGlsZHJlbigpO1xuXG4gICAgICAgIGlmICgkdHlwZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgJGJvZHkuc2hvdygpO1xuICAgICAgICB9IGVsc2UgaWYgKCR0eXBlID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgJGJvZHkuaGlkZSgpO1xuICAgICAgICAgICRib2R5LnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by50b2dnbGVSb3cgPSBmdW5jdGlvbiB0b2dnbGVSb3coKSB7XG4gICAgICB2YXIgJGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgICAgdmFyIHRpbWUgPSA1MDA7XG4gICAgICB2YXIgJHR5cGUgPSAkZWxlbWVudC5hdHRyKFNFTEVDVE9SX0FSSUFfQVRUUik7XG4gICAgICB2YXIgJGJvZHkgPSAkZWxlbWVudC5uZXh0KCkuY2hpbGRyZW4oKS5maXJzdCgpLmNoaWxkcmVuKCk7XG4gICAgICAkYm9keS5zdG9wKCk7XG5cbiAgICAgIGlmICgkdHlwZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICRib2R5LnNsaWRlVXAodGltZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICRlbGVtZW50Lm5leHQoKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAkZWxlbWVudC5hdHRyKFNFTEVDVE9SX0FSSUFfQVRUUiwgJ2ZhbHNlJyk7XG4gICAgICAgICRlbGVtZW50LnRyaWdnZXIoJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX0NPTExBUFNFRCQyKSk7XG4gICAgICB9IGVsc2UgaWYgKCR0eXBlID09PSAnZmFsc2UnKSB7XG4gICAgICAgICRlbGVtZW50Lm5leHQoKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICRib2R5LnNsaWRlRG93bih0aW1lKTtcbiAgICAgICAgJGVsZW1lbnQuYXR0cihTRUxFQ1RPUl9BUklBX0FUVFIsICd0cnVlJyk7XG4gICAgICAgICRlbGVtZW50LnRyaWdnZXIoJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX0VYUEFOREVEJDIpKTtcbiAgICAgIH1cbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIEV4cGFuZGFibGVUYWJsZS5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShvcGVyYXRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJDUpO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgRXhwYW5kYWJsZVRhYmxlKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKSk7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVkkNSwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIG9wZXJhdGlvbiA9PT0gJ3N0cmluZycgJiYgb3BlcmF0aW9uLm1hdGNoKC9pbml0fHRvZ2dsZVJvdy8pKSB7XG4gICAgICAgICAgZGF0YVtvcGVyYXRpb25dKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gRXhwYW5kYWJsZVRhYmxlO1xuICB9KCk7XG4gIC8qKlxuICAgICogRGF0YSBBUElcbiAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqL1xuXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1RBQkxFKS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgRXhwYW5kYWJsZVRhYmxlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyksICdpbml0Jyk7XG4gIH0pO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDIsIGZ1bmN0aW9uICgpIHtcbiAgICBFeHBhbmRhYmxlVGFibGUuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKSwgJ3RvZ2dsZVJvdycpO1xuICB9KTtcbiAgLyoqXG4gICAgKiBqUXVlcnkgQVBJXG4gICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKi9cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ1XSA9IEV4cGFuZGFibGVUYWJsZS5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ1XS5Db25zdHJ1Y3RvciA9IEV4cGFuZGFibGVUYWJsZTtcblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ1XS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDVdID0gSlFVRVJZX05PX0NPTkZMSUNUJDU7XG4gICAgcmV0dXJuIEV4cGFuZGFibGVUYWJsZS5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBBZG1pbkxURSBGdWxsc2NyZWVuLmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgdmFyIE5BTUUkNiA9ICdGdWxsc2NyZWVuJztcbiAgdmFyIERBVEFfS0VZJDYgPSAnbHRlLmZ1bGxzY3JlZW4nO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDYgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ2XTtcbiAgdmFyIFNFTEVDVE9SX0RBVEFfV0lER0VUID0gJ1tkYXRhLXdpZGdldD1cImZ1bGxzY3JlZW5cIl0nO1xuICB2YXIgU0VMRUNUT1JfSUNPTiA9IFNFTEVDVE9SX0RBVEFfV0lER0VUICsgXCIgaVwiO1xuICB2YXIgRGVmYXVsdCQ0ID0ge1xuICAgIG1pbmltaXplSWNvbjogJ2ZhLWNvbXByZXNzLWFycm93cy1hbHQnLFxuICAgIG1heGltaXplSWNvbjogJ2ZhLWV4cGFuZC1hcnJvd3MtYWx0J1xuICB9O1xuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIHZhciBGdWxsc2NyZWVuID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGdWxsc2NyZWVuKF9lbGVtZW50LCBfb3B0aW9ucykge1xuICAgICAgdGhpcy5lbGVtZW50ID0gX2VsZW1lbnQ7XG4gICAgICB0aGlzLm9wdGlvbnMgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZXh0ZW5kKHt9LCBEZWZhdWx0JDQsIF9vcHRpb25zKTtcbiAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICB2YXIgX3Byb3RvID0gRnVsbHNjcmVlbi5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgaWYgKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50IHx8IGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50IHx8IGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50IHx8IGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy53aW5kb3dlZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mdWxsc2NyZWVuKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5mdWxsc2NyZWVuID0gZnVuY3Rpb24gZnVsbHNjcmVlbigpIHtcbiAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH1cblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0lDT04pLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5tYXhpbWl6ZUljb24pLmFkZENsYXNzKHRoaXMub3B0aW9ucy5taW5pbWl6ZUljb24pO1xuICAgIH07XG5cbiAgICBfcHJvdG8ud2luZG93ZWQgPSBmdW5jdGlvbiB3aW5kb3dlZCgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbikge1xuICAgICAgICBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH1cblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0lDT04pLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5taW5pbWl6ZUljb24pLmFkZENsYXNzKHRoaXMub3B0aW9ucy5tYXhpbWl6ZUljb24pO1xuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgRnVsbHNjcmVlbi5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHZhciBkYXRhID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVkkNik7XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIF9vcHRpb25zID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmV4dGVuZCh7fSwgRGVmYXVsdCQ0LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IGRhdGEpO1xuXG4gICAgICB2YXIgcGx1Z2luID0gbmV3IEZ1bGxzY3JlZW4oJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLCBfb3B0aW9ucyk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSQ2LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IGRhdGEpO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgJiYgY29uZmlnLm1hdGNoKC90b2dnbGV8ZnVsbHNjcmVlbnx3aW5kb3dlZC8pKSB7XG4gICAgICAgIHBsdWdpbltjb25maWddKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbHVnaW4uaW5pdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gRnVsbHNjcmVlbjtcbiAgfSgpO1xuICAvKipcbiAgICAqIERhdGEgQVBJXG4gICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKi9cblxuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfREFUQV9XSURHRVQsIGZ1bmN0aW9uICgpIHtcbiAgICBGdWxsc2NyZWVuLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyksICd0b2dnbGUnKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkNl0gPSBGdWxsc2NyZWVuLl9qUXVlcnlJbnRlcmZhY2U7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDZdLkNvbnN0cnVjdG9yID0gRnVsbHNjcmVlbjtcblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ2XS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDZdID0gSlFVRVJZX05PX0NPTkZMSUNUJDY7XG4gICAgcmV0dXJuIEZ1bGxzY3JlZW4uX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQWRtaW5MVEUgSUZyYW1lLmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgdmFyIE5BTUUkNyA9ICdJRnJhbWUnO1xuICB2YXIgREFUQV9LRVkkNyA9ICdsdGUuaWZyYW1lJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQ3ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkN107XG4gIHZhciBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzID0gJ1tkYXRhLXdpZGdldD1cImlmcmFtZVwiXSc7XG4gIHZhciBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9DTE9TRSA9ICdbZGF0YS13aWRnZXQ9XCJpZnJhbWUtY2xvc2VcIl0nO1xuICB2YXIgU0VMRUNUT1JfREFUQV9UT0dHTEVfU0NST0xMX0xFRlQgPSAnW2RhdGEtd2lkZ2V0PVwiaWZyYW1lLXNjcm9sbGxlZnRcIl0nO1xuICB2YXIgU0VMRUNUT1JfREFUQV9UT0dHTEVfU0NST0xMX1JJR0hUID0gJ1tkYXRhLXdpZGdldD1cImlmcmFtZS1zY3JvbGxyaWdodFwiXSc7XG4gIHZhciBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9GVUxMU0NSRUVOID0gJ1tkYXRhLXdpZGdldD1cImlmcmFtZS1mdWxsc2NyZWVuXCJdJztcbiAgdmFyIFNFTEVDVE9SX0NPTlRFTlRfV1JBUFBFUiA9ICcuY29udGVudC13cmFwcGVyJztcbiAgdmFyIFNFTEVDVE9SX0NPTlRFTlRfSUZSQU1FID0gU0VMRUNUT1JfQ09OVEVOVF9XUkFQUEVSICsgXCIgaWZyYW1lXCI7XG4gIHZhciBTRUxFQ1RPUl9UQUJfTkFWID0gU0VMRUNUT1JfREFUQV9UT0dHTEUkMyArIFwiLmlmcmFtZS1tb2RlIC5uYXZcIjtcbiAgdmFyIFNFTEVDVE9SX1RBQl9OQVZCQVJfTkFWID0gU0VMRUNUT1JfREFUQV9UT0dHTEUkMyArIFwiLmlmcmFtZS1tb2RlIC5uYXZiYXItbmF2XCI7XG4gIHZhciBTRUxFQ1RPUl9UQUJfTkFWQkFSX05BVl9JVEVNID0gU0VMRUNUT1JfVEFCX05BVkJBUl9OQVYgKyBcIiAubmF2LWl0ZW1cIjtcbiAgdmFyIFNFTEVDVE9SX1RBQl9DT05URU5UID0gU0VMRUNUT1JfREFUQV9UT0dHTEUkMyArIFwiLmlmcmFtZS1tb2RlIC50YWItY29udGVudFwiO1xuICB2YXIgU0VMRUNUT1JfVEFCX0VNUFRZID0gU0VMRUNUT1JfVEFCX0NPTlRFTlQgKyBcIiAudGFiLWVtcHR5XCI7XG4gIHZhciBTRUxFQ1RPUl9UQUJfTE9BRElORyA9IFNFTEVDVE9SX1RBQl9DT05URU5UICsgXCIgLnRhYi1sb2FkaW5nXCI7XG4gIHZhciBTRUxFQ1RPUl9TSURFQkFSX01FTlVfSVRFTSA9ICcubWFpbi1zaWRlYmFyIC5uYXYtaXRlbSA+IGEubmF2LWxpbmsnO1xuICB2YXIgU0VMRUNUT1JfSEVBREVSX01FTlVfSVRFTSA9ICcubWFpbi1oZWFkZXIgLm5hdi1pdGVtIGEubmF2LWxpbmsnO1xuICB2YXIgU0VMRUNUT1JfSEVBREVSX0RST1BET1dOX0lURU0gPSAnLm1haW4taGVhZGVyIGEuZHJvcGRvd24taXRlbSc7XG4gIHZhciBDTEFTU19OQU1FX0lGUkFNRV9NT0RFID0gJ2lmcmFtZS1tb2RlJztcbiAgdmFyIENMQVNTX05BTUVfRlVMTFNDUkVFTl9NT0RFID0gJ2lmcmFtZS1tb2RlLWZ1bGxzY3JlZW4nO1xuICB2YXIgRGVmYXVsdCQ1ID0ge1xuICAgIG9uVGFiQ2xpY2s6IGZ1bmN0aW9uIG9uVGFiQ2xpY2soaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSxcbiAgICBvblRhYkNoYW5nZWQ6IGZ1bmN0aW9uIG9uVGFiQ2hhbmdlZChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9LFxuICAgIG9uVGFiQ3JlYXRlZDogZnVuY3Rpb24gb25UYWJDcmVhdGVkKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0sXG4gICAgYXV0b0lmcmFtZU1vZGU6IHRydWUsXG4gICAgYXV0b0l0ZW1BY3RpdmU6IHRydWUsXG4gICAgYXV0b1Nob3dOZXdUYWI6IHRydWUsXG4gICAgbG9hZGluZ1NjcmVlbjogdHJ1ZSxcbiAgICB1c2VOYXZiYXJJdGVtczogdHJ1ZSxcbiAgICBzY3JvbGxPZmZzZXQ6IDQwLFxuICAgIHNjcm9sbEJlaGF2aW9yU3dhcDogZmFsc2UsXG4gICAgaWNvbk1heGltaXplOiAnZmEtZXhwYW5kJyxcbiAgICBpY29uTWluaW1pemU6ICdmYS1jb21wcmVzcydcbiAgfTtcbiAgLyoqXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICB2YXIgSUZyYW1lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJRnJhbWUoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH0gLy8gUHVibGljXG5cblxuICAgIHZhciBfcHJvdG8gPSBJRnJhbWUucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvLm9uVGFiQ2xpY2sgPSBmdW5jdGlvbiBvblRhYkNsaWNrKGl0ZW0pIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5vblRhYkNsaWNrKGl0ZW0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8ub25UYWJDaGFuZ2VkID0gZnVuY3Rpb24gb25UYWJDaGFuZ2VkKGl0ZW0pIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5vblRhYkNoYW5nZWQoaXRlbSk7XG4gICAgfTtcblxuICAgIF9wcm90by5vblRhYkNyZWF0ZWQgPSBmdW5jdGlvbiBvblRhYkNyZWF0ZWQoaXRlbSkge1xuICAgICAgdGhpcy5fY29uZmlnLm9uVGFiQ3JlYXRlZChpdGVtKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmNyZWF0ZVRhYiA9IGZ1bmN0aW9uIGNyZWF0ZVRhYih0aXRsZSwgbGluaywgdW5pcXVlTmFtZSwgYXV0b09wZW4pIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciB0YWJJZCA9IFwicGFuZWwtXCIgKyB1bmlxdWVOYW1lICsgXCItXCIgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgICAgIHZhciBuYXZJZCA9IFwidGFiLVwiICsgdW5pcXVlTmFtZSArIFwiLVwiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG4gICAgICB2YXIgbmV3TmF2SXRlbSA9IFwiPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCIgcm9sZT1cXFwicHJlc2VudGF0aW9uXFxcIj48YSBjbGFzcz1cXFwibmF2LWxpbmtcXFwiIGRhdGEtdG9nZ2xlPVxcXCJyb3dcXFwiIGlkPVxcXCJcIiArIG5hdklkICsgXCJcXFwiIGhyZWY9XFxcIiNcIiArIHRhYklkICsgXCJcXFwiIHJvbGU9XFxcInRhYlxcXCIgYXJpYS1jb250cm9scz1cXFwiXCIgKyB0YWJJZCArIFwiXFxcIiBhcmlhLXNlbGVjdGVkPVxcXCJmYWxzZVxcXCI+XCIgKyB0aXRsZSArIFwiPC9hPjwvbGk+XCI7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfVEFCX05BVkJBUl9OQVYpLmFwcGVuZChuZXdOYXZJdGVtKTtcbiAgICAgIHZhciBuZXdUYWJJdGVtID0gXCI8ZGl2IGNsYXNzPVxcXCJ0YWItcGFuZSBmYWRlXFxcIiBpZD1cXFwiXCIgKyB0YWJJZCArIFwiXFxcIiByb2xlPVxcXCJ0YWJwYW5lbFxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJcIiArIG5hdklkICsgXCJcXFwiPjxpZnJhbWUgc3JjPVxcXCJcIiArIGxpbmsgKyBcIlxcXCI+PC9pZnJhbWU+PC9kaXY+XCI7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfVEFCX0NPTlRFTlQpLmFwcGVuZChuZXdUYWJJdGVtKTtcblxuICAgICAgaWYgKGF1dG9PcGVuKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcubG9hZGluZ1NjcmVlbikge1xuICAgICAgICAgIHZhciAkbG9hZGluZ1NjcmVlbiA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9UQUJfTE9BRElORyk7XG4gICAgICAgICAgJGxvYWRpbmdTY3JlZW4uZmFkZUluKCk7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRhYklkICsgXCIgaWZyYW1lXCIpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMuX2NvbmZpZy5sb2FkaW5nU2NyZWVuID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICBfdGhpcy5zd2l0Y2hUYWIoXCIjXCIgKyBuYXZJZCwgX3RoaXMuX2NvbmZpZy5sb2FkaW5nU2NyZWVuKTtcblxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkbG9hZGluZ1NjcmVlbi5mYWRlT3V0KCk7XG4gICAgICAgICAgICAgIH0sIF90aGlzLl9jb25maWcubG9hZGluZ1NjcmVlbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfdGhpcy5zd2l0Y2hUYWIoXCIjXCIgKyBuYXZJZCwgX3RoaXMuX2NvbmZpZy5sb2FkaW5nU2NyZWVuKTtcblxuICAgICAgICAgICAgICAkbG9hZGluZ1NjcmVlbi5mYWRlT3V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zd2l0Y2hUYWIoXCIjXCIgKyBuYXZJZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5vblRhYkNyZWF0ZWQoJF9fZGVmYXVsdFsnZGVmYXVsdCddKFwiI1wiICsgbmF2SWQpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLm9wZW5UYWJTaWRlYmFyID0gZnVuY3Rpb24gb3BlblRhYlNpZGViYXIoaXRlbSwgYXV0b09wZW4pIHtcbiAgICAgIGlmIChhdXRvT3BlbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGF1dG9PcGVuID0gdGhpcy5fY29uZmlnLmF1dG9TaG93TmV3VGFiO1xuICAgICAgfVxuXG4gICAgICB2YXIgJGl0ZW0gPSAkX19kZWZhdWx0WydkZWZhdWx0J10oaXRlbSkuY2xvbmUoKTtcblxuICAgICAgaWYgKCRpdGVtLmF0dHIoJ2hyZWYnKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICRpdGVtID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKGl0ZW0pLnBhcmVudCgnYScpLmNsb25lKCk7XG4gICAgICB9XG5cbiAgICAgICRpdGVtLmZpbmQoJy5yaWdodCcpLnJlbW92ZSgpO1xuICAgICAgdmFyIHRpdGxlID0gJGl0ZW0uZmluZCgncCcpLnRleHQoKTtcblxuICAgICAgaWYgKHRpdGxlID09PSAnJykge1xuICAgICAgICB0aXRsZSA9ICRpdGVtLnRleHQoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxpbmsgPSAkaXRlbS5hdHRyKCdocmVmJyk7XG5cbiAgICAgIGlmIChsaW5rID09PSAnIycgfHwgbGluayA9PT0gJycgfHwgbGluayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jcmVhdGVUYWIodGl0bGUsIGxpbmssIGxpbmsucmVwbGFjZSgnLmh0bWwnLCAnJykucmVwbGFjZSgnLi8nLCAnJykucmVwbGFjZUFsbCgnLycsICctJyksIGF1dG9PcGVuKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnN3aXRjaFRhYiA9IGZ1bmN0aW9uIHN3aXRjaFRhYihpdGVtKSB7XG4gICAgICB2YXIgJGl0ZW0gPSAkX19kZWZhdWx0WydkZWZhdWx0J10oaXRlbSk7XG4gICAgICB2YXIgdGFiSWQgPSAkaXRlbS5hdHRyKCdocmVmJyk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfVEFCX0VNUFRZKS5oaWRlKCk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfVEFCX05BVkJBUl9OQVYgKyBcIiAuYWN0aXZlXCIpLnRhYignZGlzcG9zZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgdGhpcy5fZml4SGVpZ2h0KCk7XG5cbiAgICAgICRpdGVtLnRhYignc2hvdycpO1xuICAgICAgJGl0ZW0ucGFyZW50cygnbGknKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB0aGlzLm9uVGFiQ2hhbmdlZCgkaXRlbSk7XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYXV0b0l0ZW1BY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fc2V0SXRlbUFjdGl2ZSgkX19kZWZhdWx0WydkZWZhdWx0J10odGFiSWQgKyBcIiBpZnJhbWVcIikuYXR0cignc3JjJykpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8ucmVtb3ZlQWN0aXZlVGFiID0gZnVuY3Rpb24gcmVtb3ZlQWN0aXZlVGFiKCkge1xuICAgICAgdmFyICRuYXZJdGVtID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1RBQl9OQVZCQVJfTkFWX0lURU0gKyBcIi5hY3RpdmVcIik7XG4gICAgICB2YXIgJG5hdkl0ZW1QYXJlbnQgPSAkbmF2SXRlbS5wYXJlbnQoKTtcbiAgICAgIHZhciBuYXZJdGVtSW5kZXggPSAkbmF2SXRlbS5pbmRleCgpO1xuICAgICAgJG5hdkl0ZW0ucmVtb3ZlKCk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oJy50YWItcGFuZS5hY3RpdmUnKS5yZW1vdmUoKTtcblxuICAgICAgaWYgKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9UQUJfQ09OVEVOVCkuY2hpbGRyZW4oKS5sZW5ndGggPT0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1RBQl9FTVBUWSArIFwiLCBcIiArIFNFTEVDVE9SX1RBQl9MT0FESU5HKS5sZW5ndGgpIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1RBQl9FTVBUWSkuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHByZXZOYXZJdGVtSW5kZXggPSBuYXZJdGVtSW5kZXggLSAxO1xuICAgICAgICB0aGlzLnN3aXRjaFRhYigkbmF2SXRlbVBhcmVudC5jaGlsZHJlbigpLmVxKHByZXZOYXZJdGVtSW5kZXgpLmZpbmQoJ2EnKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by50b2dnbGVGdWxsc2NyZWVuID0gZnVuY3Rpb24gdG9nZ2xlRnVsbHNjcmVlbigpIHtcbiAgICAgIGlmICgkX19kZWZhdWx0WydkZWZhdWx0J10oJ2JvZHknKS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZVTExTQ1JFRU5fTU9ERSkpIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0RBVEFfVE9HR0xFX0ZVTExTQ1JFRU4gKyBcIiBpXCIpLnJlbW92ZUNsYXNzKHRoaXMuX2NvbmZpZy5pY29uTWluaW1pemUpLmFkZENsYXNzKHRoaXMuX2NvbmZpZy5pY29uTWF4aW1pemUpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oJ2JvZHknKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0ZVTExTQ1JFRU5fTU9ERSk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9UQUJfRU1QVFkgKyBcIiwgXCIgKyBTRUxFQ1RPUl9UQUJfTE9BRElORykuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9DT05URU5UX1dSQVBQRVIpLmhlaWdodCgnYXV0bycpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfQ09OVEVOVF9JRlJBTUUpLmhlaWdodCgnYXV0bycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0RBVEFfVE9HR0xFX0ZVTExTQ1JFRU4gKyBcIiBpXCIpLnJlbW92ZUNsYXNzKHRoaXMuX2NvbmZpZy5pY29uTWF4aW1pemUpLmFkZENsYXNzKHRoaXMuX2NvbmZpZy5pY29uTWluaW1pemUpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oJ2JvZHknKS5hZGRDbGFzcyhDTEFTU19OQU1FX0ZVTExTQ1JFRU5fTU9ERSk7XG4gICAgICB9XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuXG4gICAgICB0aGlzLl9maXhIZWlnaHQodHJ1ZSk7XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9pbml0ID0gZnVuY3Rpb24gX2luaXQoKSB7XG4gICAgICBpZiAod2luZG93LmZyYW1lRWxlbWVudCAmJiB0aGlzLl9jb25maWcuYXV0b0lmcmFtZU1vZGUpIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdib2R5JykuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9JRlJBTUVfTU9ERSk7XG4gICAgICB9IGVsc2UgaWYgKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9DT05URU5UX1dSQVBQRVIpLmhhc0NsYXNzKENMQVNTX05BTUVfSUZSQU1FX01PREUpKSB7XG4gICAgICAgIHRoaXMuX3NldHVwTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgdGhpcy5fZml4SGVpZ2h0KHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX25hdlNjcm9sbCA9IGZ1bmN0aW9uIF9uYXZTY3JvbGwob2Zmc2V0KSB7XG4gICAgICB2YXIgbGVmdFBvcyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9UQUJfTkFWQkFSX05BVikuc2Nyb2xsTGVmdCgpO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1RBQl9OQVZCQVJfTkFWKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsTGVmdDogbGVmdFBvcyArIG9mZnNldFxuICAgICAgfSwgMjUwLCAnbGluZWFyJyk7XG4gICAgfTtcblxuICAgIF9wcm90by5fc2V0dXBMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfc2V0dXBMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLl9maXhIZWlnaHQoKTtcbiAgICAgICAgfSwgMSk7XG4gICAgICB9KTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfU0lERUJBUl9NRU5VX0lURU0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBfdGhpczIub3BlblRhYlNpZGViYXIoZS50YXJnZXQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcudXNlTmF2YmFySXRlbXMpIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vbignY2xpY2snLCBTRUxFQ1RPUl9IRUFERVJfTUVOVV9JVEVNICsgXCIsIFwiICsgU0VMRUNUT1JfSEVBREVSX0RST1BET1dOX0lURU0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgX3RoaXMyLm9wZW5UYWJTaWRlYmFyKGUudGFyZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfVEFCX05BVkJBUl9OQVZfSVRFTSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIF90aGlzMi5vblRhYkNsaWNrKGUudGFyZ2V0KTtcblxuICAgICAgICBfdGhpczIuc3dpdGNoVGFiKGUudGFyZ2V0KTtcbiAgICAgIH0pO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vbignY2xpY2snLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9DTE9TRSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIF90aGlzMi5yZW1vdmVBY3RpdmVUYWIoKTtcbiAgICAgIH0pO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vbignY2xpY2snLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9GVUxMU0NSRUVOLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgX3RoaXMyLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIG1vdXNlZG93biA9IGZhbHNlO1xuICAgICAgdmFyIG1vdXNlZG93bkludGVydmFsID0gbnVsbDtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudCkub24oJ21vdXNlZG93bicsIFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NDUk9MTF9MRUZULCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwobW91c2Vkb3duSW50ZXJ2YWwpO1xuICAgICAgICB2YXIgc2Nyb2xsT2Zmc2V0ID0gX3RoaXMyLl9jb25maWcuc2Nyb2xsT2Zmc2V0O1xuXG4gICAgICAgIGlmICghX3RoaXMyLl9jb25maWcuc2Nyb2xsQmVoYXZpb3JTd2FwKSB7XG4gICAgICAgICAgc2Nyb2xsT2Zmc2V0ID0gLXNjcm9sbE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vdXNlZG93biA9IHRydWU7XG5cbiAgICAgICAgX3RoaXMyLl9uYXZTY3JvbGwoc2Nyb2xsT2Zmc2V0KTtcblxuICAgICAgICBtb3VzZWRvd25JbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX25hdlNjcm9sbChzY3JvbGxPZmZzZXQpO1xuICAgICAgICB9LCAyNTApO1xuICAgICAgfSk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9uKCdtb3VzZWRvd24nLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TQ1JPTExfUklHSFQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChtb3VzZWRvd25JbnRlcnZhbCk7XG4gICAgICAgIHZhciBzY3JvbGxPZmZzZXQgPSBfdGhpczIuX2NvbmZpZy5zY3JvbGxPZmZzZXQ7XG5cbiAgICAgICAgaWYgKF90aGlzMi5fY29uZmlnLnNjcm9sbEJlaGF2aW9yU3dhcCkge1xuICAgICAgICAgIHNjcm9sbE9mZnNldCA9IC1zY3JvbGxPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBtb3VzZWRvd24gPSB0cnVlO1xuXG4gICAgICAgIF90aGlzMi5fbmF2U2Nyb2xsKHNjcm9sbE9mZnNldCk7XG5cbiAgICAgICAgbW91c2Vkb3duSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLl9uYXZTY3JvbGwoc2Nyb2xsT2Zmc2V0KTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICAgIH0pO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vbignbW91c2V1cCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG1vdXNlZG93bikge1xuICAgICAgICAgIG1vdXNlZG93biA9IGZhbHNlO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwobW91c2Vkb3duSW50ZXJ2YWwpO1xuICAgICAgICAgIG1vdXNlZG93bkludGVydmFsID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fc2V0SXRlbUFjdGl2ZSA9IGZ1bmN0aW9uIF9zZXRJdGVtQWN0aXZlKGhyZWYpIHtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9TSURFQkFSX01FTlVfSVRFTSArIFwiLCBcIiArIFNFTEVDVE9SX0hFQURFUl9EUk9QRE9XTl9JVEVNKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfSEVBREVSX01FTlVfSVRFTSkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgdmFyICRoZWFkZXJNZW51SXRlbSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9IRUFERVJfTUVOVV9JVEVNICsgXCJbaHJlZiQ9XFxcIlwiICsgaHJlZiArIFwiXFxcIl1cIik7XG4gICAgICB2YXIgJGhlYWRlckRyb3Bkb3duSXRlbSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9IRUFERVJfRFJPUERPV05fSVRFTSArIFwiW2hyZWYkPVxcXCJcIiArIGhyZWYgKyBcIlxcXCJdXCIpO1xuICAgICAgdmFyICRzaWRlYmFyTWVudUl0ZW0gPSAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfU0lERUJBUl9NRU5VX0lURU0gKyBcIltocmVmJD1cXFwiXCIgKyBocmVmICsgXCJcXFwiXVwiKTtcbiAgICAgICRoZWFkZXJNZW51SXRlbS5lYWNoKGZ1bmN0aW9uIChpLCBlKSB7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShlKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgICRoZWFkZXJEcm9wZG93bkl0ZW0uZWFjaChmdW5jdGlvbiAoaSwgZSkge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oZSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgICAkc2lkZWJhck1lbnVJdGVtLmVhY2goZnVuY3Rpb24gKGksIGUpIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGUpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGUpLnBhcmVudHMoJy5uYXYtdHJlZXZpZXcnKS5wcmV2QWxsKCcubmF2LWxpbmsnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9maXhIZWlnaHQgPSBmdW5jdGlvbiBfZml4SGVpZ2h0KHRhYkVtcHR5KSB7XG4gICAgICBpZiAodGFiRW1wdHkgPT09IHZvaWQgMCkge1xuICAgICAgICB0YWJFbXB0eSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdib2R5JykuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GVUxMU0NSRUVOX01PREUpKSB7XG4gICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10od2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1RBQl9FTVBUWSArIFwiLCBcIiArIFNFTEVDVE9SX1RBQl9MT0FESU5HKS5oZWlnaHQod2luZG93SGVpZ2h0KTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0NPTlRFTlRfV1JBUFBFUikuaGVpZ2h0KHdpbmRvd0hlaWdodCk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9DT05URU5UX0lGUkFNRSkuaGVpZ2h0KHdpbmRvd0hlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY29udGVudFdyYXBwZXJIZWlnaHQgPSBwYXJzZUZsb2F0KCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9DT05URU5UX1dSQVBQRVIpLmNzcygnbWluLWhlaWdodCcpKTtcbiAgICAgICAgdmFyIG5hdmJhckhlaWdodCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9UQUJfTkFWKS5vdXRlckhlaWdodCgpO1xuXG4gICAgICAgIGlmICh0YWJFbXB0eSA9PSB0cnVlKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfVEFCX0VNUFRZICsgXCIsIFwiICsgU0VMRUNUT1JfVEFCX0xPQURJTkcpLmhlaWdodChjb250ZW50V3JhcHBlckhlaWdodCAtIG5hdmJhckhlaWdodCk7XG4gICAgICAgICAgfSwgNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9DT05URU5UX0lGUkFNRSkuaGVpZ2h0KGNvbnRlbnRXcmFwcGVySGVpZ2h0IC0gbmF2YmFySGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgSUZyYW1lLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKG9wZXJhdGlvbikge1xuICAgICAgdmFyIGRhdGEgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSQ3KTtcblxuICAgICAgdmFyIF9vcHRpb25zID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmV4dGVuZCh7fSwgRGVmYXVsdCQ1LCAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YSgpKTtcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgSUZyYW1lKHRoaXMsIF9vcHRpb25zKTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVkkNywgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3BlcmF0aW9uID09PSAnc3RyaW5nJyAmJiBvcGVyYXRpb24ubWF0Y2goL2NyZWF0ZVRhYnxvcGVuVGFiU2lkZWJhcnxzd2l0Y2hUYWJ8cmVtb3ZlQWN0aXZlVGFiLykpIHtcbiAgICAgICAgdmFyIF9kYXRhO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIChfZGF0YSA9IGRhdGEpW29wZXJhdGlvbl0uYXBwbHkoX2RhdGEsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gSUZyYW1lO1xuICB9KCk7XG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgSUZyYW1lLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfREFUQV9UT0dHTEUkMykpO1xuICB9KTtcbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ3XSA9IElGcmFtZS5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ3XS5Db25zdHJ1Y3RvciA9IElGcmFtZTtcblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ3XS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDddID0gSlFVRVJZX05PX0NPTkZMSUNUJDc7XG4gICAgcmV0dXJuIElGcmFtZS5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBBZG1pbkxURSBMYXlvdXQuanNcbiAgICogTGljZW5zZSBNSVRcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICB2YXIgTkFNRSQ4ID0gJ0xheW91dCc7XG4gIHZhciBEQVRBX0tFWSQ4ID0gJ2x0ZS5sYXlvdXQnO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDggPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ4XTtcbiAgdmFyIFNFTEVDVE9SX0hFQURFUiQxID0gJy5tYWluLWhlYWRlcic7XG4gIHZhciBTRUxFQ1RPUl9NQUlOX1NJREVCQVIgPSAnLm1haW4tc2lkZWJhcic7XG4gIHZhciBTRUxFQ1RPUl9TSURFQkFSID0gJy5tYWluLXNpZGViYXIgLnNpZGViYXInO1xuICB2YXIgU0VMRUNUT1JfQ09OVEVOVCA9ICcuY29udGVudC13cmFwcGVyJztcbiAgdmFyIFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUl9DT05URU5UJDEgPSAnLmNvbnRyb2wtc2lkZWJhci1jb250ZW50JztcbiAgdmFyIFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUl9CVE4gPSAnW2RhdGEtd2lkZ2V0PVwiY29udHJvbC1zaWRlYmFyXCJdJztcbiAgdmFyIFNFTEVDVE9SX0ZPT1RFUiQxID0gJy5tYWluLWZvb3Rlcic7XG4gIHZhciBTRUxFQ1RPUl9QVVNITUVOVV9CVE4gPSAnW2RhdGEtd2lkZ2V0PVwicHVzaG1lbnVcIl0nO1xuICB2YXIgU0VMRUNUT1JfTE9HSU5fQk9YID0gJy5sb2dpbi1ib3gnO1xuICB2YXIgU0VMRUNUT1JfUkVHSVNURVJfQk9YID0gJy5yZWdpc3Rlci1ib3gnO1xuICB2YXIgQ0xBU1NfTkFNRV9TSURFQkFSX0ZPQ1VTRUQgPSAnc2lkZWJhci1mb2N1c2VkJztcbiAgdmFyIENMQVNTX05BTUVfTEFZT1VUX0ZJWEVEJDEgPSAnbGF5b3V0LWZpeGVkJztcbiAgdmFyIENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX1NMSURFX09QRU4gPSAnY29udHJvbC1zaWRlYmFyLXNsaWRlLW9wZW4nO1xuICB2YXIgQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfT1BFTiQxID0gJ2NvbnRyb2wtc2lkZWJhci1vcGVuJztcbiAgdmFyIENMQVNTX05BTUVfTEFZT1VUX1RPUF9OQVYgPSAnbGF5b3V0LXRvcC1uYXYnO1xuICB2YXIgRGVmYXVsdCQ2ID0ge1xuICAgIHNjcm9sbGJhclRoZW1lOiAnb3MtdGhlbWUtbGlnaHQnLFxuICAgIHNjcm9sbGJhckF1dG9IaWRlOiAnbCcsXG4gICAgcGFuZWxBdXRvSGVpZ2h0OiB0cnVlLFxuICAgIHBhbmVsQXV0b0hlaWdodE1vZGU6ICdtaW4taGVpZ2h0JyxcbiAgICBsb2dpblJlZ2lzdGVyQXV0b0hlaWdodDogdHJ1ZVxuICB9O1xuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIHZhciBMYXlvdXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExheW91dChlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICB0aGlzLl9pbml0KCk7XG4gICAgfSAvLyBQdWJsaWNcblxuXG4gICAgdmFyIF9wcm90byA9IExheW91dC5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8uZml4TGF5b3V0SGVpZ2h0ID0gZnVuY3Rpb24gZml4TGF5b3V0SGVpZ2h0KGV4dHJhKSB7XG4gICAgICBpZiAoZXh0cmEgPT09IHZvaWQgMCkge1xuICAgICAgICBleHRyYSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciAkYm9keSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnYm9keScpO1xuICAgICAgdmFyIGNvbnRyb2xTaWRlYmFyID0gMDtcblxuICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX1NMSURFX09QRU4pIHx8ICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX09QRU4kMSkgfHwgZXh0cmEgPT09ICdjb250cm9sX3NpZGViYXInKSB7XG4gICAgICAgIGNvbnRyb2xTaWRlYmFyID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUl9DT05URU5UJDEpLmhlaWdodCgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGVpZ2h0cyA9IHtcbiAgICAgICAgd2luZG93OiAkX19kZWZhdWx0WydkZWZhdWx0J10od2luZG93KS5oZWlnaHQoKSxcbiAgICAgICAgaGVhZGVyOiAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfSEVBREVSJDEpLmxlbmd0aCAhPT0gMCA/ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9IRUFERVIkMSkub3V0ZXJIZWlnaHQoKSA6IDAsXG4gICAgICAgIGZvb3RlcjogJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0ZPT1RFUiQxKS5sZW5ndGggIT09IDAgPyAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfRk9PVEVSJDEpLm91dGVySGVpZ2h0KCkgOiAwLFxuICAgICAgICBzaWRlYmFyOiAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfU0lERUJBUikubGVuZ3RoICE9PSAwID8gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1NJREVCQVIpLmhlaWdodCgpIDogMCxcbiAgICAgICAgY29udHJvbFNpZGViYXI6IGNvbnRyb2xTaWRlYmFyXG4gICAgICB9O1xuXG4gICAgICB2YXIgbWF4ID0gdGhpcy5fbWF4KGhlaWdodHMpO1xuXG4gICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5fY29uZmlnLnBhbmVsQXV0b0hlaWdodDtcblxuICAgICAgaWYgKG9mZnNldCA9PT0gdHJ1ZSkge1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgJGNvbnRlbnRTZWxlY3RvciA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9DT05URU5UKTtcblxuICAgICAgaWYgKG9mZnNldCAhPT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKG1heCA9PT0gaGVpZ2h0cy5jb250cm9sU2lkZWJhcikge1xuICAgICAgICAgIGlmICgkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0xBWU9VVF9UT1BfTkFWKSkge1xuICAgICAgICAgICAgJGNvbnRlbnRTZWxlY3Rvci5jc3ModGhpcy5fY29uZmlnLnBhbmVsQXV0b0hlaWdodE1vZGUsIG1heCArIG9mZnNldCArIGhlaWdodHMuaGVhZGVyICsgaGVpZ2h0cy5mb290ZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkY29udGVudFNlbGVjdG9yLmNzcyh0aGlzLl9jb25maWcucGFuZWxBdXRvSGVpZ2h0TW9kZSwgbWF4ICsgb2Zmc2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobWF4ID09PSBoZWlnaHRzLndpbmRvdykge1xuICAgICAgICAgICRjb250ZW50U2VsZWN0b3IuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlLCBtYXggKyBvZmZzZXQgLSBoZWlnaHRzLmhlYWRlciAtIGhlaWdodHMuZm9vdGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkY29udGVudFNlbGVjdG9yLmNzcyh0aGlzLl9jb25maWcucGFuZWxBdXRvSGVpZ2h0TW9kZSwgbWF4ICsgb2Zmc2V0IC0gaGVpZ2h0cy5oZWFkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzRm9vdGVyRml4ZWQoKSkge1xuICAgICAgICAgICRjb250ZW50U2VsZWN0b3IuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlLCBwYXJzZUZsb2F0KCRjb250ZW50U2VsZWN0b3IuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlKSkgKyBoZWlnaHRzLmZvb3Rlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCEkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0xBWU9VVF9GSVhFRCQxKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChvZmZzZXQgIT09IGZhbHNlKSB7XG4gICAgICAgICRjb250ZW50U2VsZWN0b3IuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlLCBtYXggKyBvZmZzZXQgLSBoZWlnaHRzLmhlYWRlciAtIGhlaWdodHMuZm9vdGVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiAkX19kZWZhdWx0WydkZWZhdWx0J10uZm4ub3ZlcmxheVNjcm9sbGJhcnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9TSURFQkFSKS5vdmVybGF5U2Nyb2xsYmFycyh7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLl9jb25maWcuc2Nyb2xsYmFyVGhlbWUsXG4gICAgICAgICAgc2l6ZUF1dG9DYXBhYmxlOiB0cnVlLFxuICAgICAgICAgIHNjcm9sbGJhcnM6IHtcbiAgICAgICAgICAgIGF1dG9IaWRlOiB0aGlzLl9jb25maWcuc2Nyb2xsYmFyQXV0b0hpZGUsXG4gICAgICAgICAgICBjbGlja1Njcm9sbGluZzogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5maXhMb2dpblJlZ2lzdGVySGVpZ2h0ID0gZnVuY3Rpb24gZml4TG9naW5SZWdpc3RlckhlaWdodCgpIHtcbiAgICAgIHZhciAkYm9keSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnYm9keScpO1xuICAgICAgdmFyICRzZWxlY3RvciA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9MT0dJTl9CT1ggKyBcIiwgXCIgKyBTRUxFQ1RPUl9SRUdJU1RFUl9CT1gpO1xuXG4gICAgICBpZiAoJHNlbGVjdG9yLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAkYm9keS5jc3MoJ2hlaWdodCcsICdhdXRvJyk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnaHRtbCcpLmNzcygnaGVpZ2h0JywgJ2F1dG8nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBib3hIZWlnaHQgPSAkc2VsZWN0b3IuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKCRib2R5LmNzcyh0aGlzLl9jb25maWcucGFuZWxBdXRvSGVpZ2h0TW9kZSkgIT09IGJveEhlaWdodCkge1xuICAgICAgICAgICRib2R5LmNzcyh0aGlzLl9jb25maWcucGFuZWxBdXRvSGVpZ2h0TW9kZSwgYm94SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5faW5pdCA9IGZ1bmN0aW9uIF9pbml0KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgLy8gQWN0aXZhdGUgbGF5b3V0IGhlaWdodCB3YXRjaGVyXG4gICAgICB0aGlzLmZpeExheW91dEhlaWdodCgpO1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmxvZ2luUmVnaXN0ZXJBdXRvSGVpZ2h0ID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuZml4TG9naW5SZWdpc3RlckhlaWdodCgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcubG9naW5SZWdpc3RlckF1dG9IZWlnaHQgPT09IHBhcnNlSW50KHRoaXMuX2NvbmZpZy5sb2dpblJlZ2lzdGVyQXV0b0hlaWdodCwgMTApKSB7XG4gICAgICAgIHNldEludGVydmFsKHRoaXMuZml4TG9naW5SZWdpc3RlckhlaWdodCwgdGhpcy5fY29uZmlnLmxvZ2luUmVnaXN0ZXJBdXRvSGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1NJREVCQVIpLm9uKCdjb2xsYXBzZWQubHRlLnRyZWV2aWV3IGV4cGFuZGVkLmx0ZS50cmVldmlldycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuZml4TGF5b3V0SGVpZ2h0KCk7XG4gICAgICB9KTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9QVVNITUVOVV9CVE4pLm9uKCdjb2xsYXBzZWQubHRlLnB1c2htZW51IHNob3duLmx0ZS5wdXNobWVudScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuZml4TGF5b3V0SGVpZ2h0KCk7XG4gICAgICB9KTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJfQlROKS5vbignY29sbGFwc2VkLmx0ZS5jb250cm9sc2lkZWJhcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuZml4TGF5b3V0SGVpZ2h0KCk7XG4gICAgICB9KS5vbignZXhwYW5kZWQubHRlLmNvbnRyb2xzaWRlYmFyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5maXhMYXlvdXRIZWlnaHQoJ2NvbnRyb2xfc2lkZWJhcicpO1xuICAgICAgfSk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10od2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5maXhMYXlvdXRIZWlnaHQoKTtcbiAgICAgIH0pO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmZpeExheW91dEhlaWdodCgpO1xuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdib2R5LmhvbGQtdHJhbnNpdGlvbicpLnJlbW92ZUNsYXNzKCdob2xkLXRyYW5zaXRpb24nKTtcbiAgICAgIH0sIDUwKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9tYXggPSBmdW5jdGlvbiBfbWF4KG51bWJlcnMpIHtcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbWF4aW11bSBudW1iZXIgaW4gYSBsaXN0XG4gICAgICB2YXIgbWF4ID0gMDtcbiAgICAgIE9iamVjdC5rZXlzKG51bWJlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAobnVtYmVyc1trZXldID4gbWF4KSB7XG4gICAgICAgICAgbWF4ID0gbnVtYmVyc1trZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtYXg7XG4gICAgfTtcblxuICAgIF9wcm90by5faXNGb290ZXJGaXhlZCA9IGZ1bmN0aW9uIF9pc0Zvb3RlckZpeGVkKCkge1xuICAgICAgcmV0dXJuICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9GT09URVIkMSkuY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnO1xuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgTGF5b3V0Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbmZpZyA9ICcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSQ4KTtcblxuICAgICAgICB2YXIgX29wdGlvbnMgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZXh0ZW5kKHt9LCBEZWZhdWx0JDYsICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKCkpO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgTGF5b3V0KCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKSwgX29wdGlvbnMpO1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJDgsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ2luaXQnIHx8IGNvbmZpZyA9PT0gJycpIHtcbiAgICAgICAgICBkYXRhLl9pbml0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnID09PSAnZml4TGF5b3V0SGVpZ2h0JyB8fCBjb25maWcgPT09ICdmaXhMb2dpblJlZ2lzdGVySGVpZ2h0Jykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIExheW91dDtcbiAgfSgpO1xuICAvKipcbiAgICogRGF0YSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIExheW91dC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdib2R5JykpO1xuICB9KTtcbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1NJREVCQVIgKyBcIiBhXCIpLm9uKCdmb2N1c2luJywgZnVuY3Rpb24gKCkge1xuICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9NQUlOX1NJREVCQVIpLmFkZENsYXNzKENMQVNTX05BTUVfU0lERUJBUl9GT0NVU0VEKTtcbiAgfSk7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9TSURFQkFSICsgXCIgYVwiKS5vbignZm9jdXNvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX01BSU5fU0lERUJBUikucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9TSURFQkFSX0ZPQ1VTRUQpO1xuICB9KTtcbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ4XSA9IExheW91dC5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ4XS5Db25zdHJ1Y3RvciA9IExheW91dDtcblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ4XS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDhdID0gSlFVRVJZX05PX0NPTkZMSUNUJDg7XG4gICAgcmV0dXJuIExheW91dC5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBBZG1pbkxURSBQdXNoTWVudS5qc1xuICAgKiBMaWNlbnNlIE1JVFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIHZhciBOQU1FJDkgPSAnUHVzaE1lbnUnO1xuICB2YXIgREFUQV9LRVkkOSA9ICdsdGUucHVzaG1lbnUnO1xuICB2YXIgRVZFTlRfS0VZJDUgPSBcIi5cIiArIERBVEFfS0VZJDk7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkOSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDldO1xuICB2YXIgRVZFTlRfQ09MTEFQU0VEJDMgPSBcImNvbGxhcHNlZFwiICsgRVZFTlRfS0VZJDU7XG4gIHZhciBFVkVOVF9TSE9XTiA9IFwic2hvd25cIiArIEVWRU5UX0tFWSQ1O1xuICB2YXIgU0VMRUNUT1JfVE9HR0xFX0JVVFRPTiA9ICdbZGF0YS13aWRnZXQ9XCJwdXNobWVudVwiXSc7XG4gIHZhciBTRUxFQ1RPUl9CT0RZID0gJ2JvZHknO1xuICB2YXIgU0VMRUNUT1JfT1ZFUkxBWSA9ICcjc2lkZWJhci1vdmVybGF5JztcbiAgdmFyIFNFTEVDVE9SX1dSQVBQRVIgPSAnLndyYXBwZXInO1xuICB2YXIgQ0xBU1NfTkFNRV9DT0xMQVBTRUQkMSA9ICdzaWRlYmFyLWNvbGxhcHNlJztcbiAgdmFyIENMQVNTX05BTUVfT1BFTiA9ICdzaWRlYmFyLW9wZW4nO1xuICB2YXIgQ0xBU1NfTkFNRV9JU19PUEVOSU5HID0gJ3NpZGViYXItaXMtb3BlbmluZyc7XG4gIHZhciBDTEFTU19OQU1FX0NMT1NFRCA9ICdzaWRlYmFyLWNsb3NlZCc7XG4gIHZhciBEZWZhdWx0JDcgPSB7XG4gICAgYXV0b0NvbGxhcHNlU2l6ZTogOTkyLFxuICAgIGVuYWJsZVJlbWVtYmVyOiBmYWxzZSxcbiAgICBub1RyYW5zaXRpb25BZnRlclJlbG9hZDogdHJ1ZVxuICB9O1xuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIHZhciBQdXNoTWVudSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHVzaE1lbnUoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9vcHRpb25zID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmV4dGVuZCh7fSwgRGVmYXVsdCQ3LCBvcHRpb25zKTtcblxuICAgICAgaWYgKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9PVkVSTEFZKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5fYWRkT3ZlcmxheSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pbml0KCk7XG4gICAgfSAvLyBQdWJsaWNcblxuXG4gICAgdmFyIF9wcm90byA9IFB1c2hNZW51LnByb3RvdHlwZTtcblxuICAgIF9wcm90by5leHBhbmQgPSBmdW5jdGlvbiBleHBhbmQoKSB7XG4gICAgICB2YXIgJGJvZHlTZWxlY3RvciA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9CT0RZKTtcblxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZSkge1xuICAgICAgICBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykud2lkdGgoKSA8PSB0aGlzLl9vcHRpb25zLmF1dG9Db2xsYXBzZVNpemUpIHtcbiAgICAgICAgICAkYm9keVNlbGVjdG9yLmFkZENsYXNzKENMQVNTX05BTUVfT1BFTik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJGJvZHlTZWxlY3Rvci5hZGRDbGFzcyhDTEFTU19OQU1FX0lTX09QRU5JTkcpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEJDEgKyBcIiBcIiArIENMQVNTX05BTUVfQ0xPU0VEKS5kZWxheSg1MCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAkYm9keVNlbGVjdG9yLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfSVNfT1BFTklORyk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kZXF1ZXVlKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuZW5hYmxlUmVtZW1iZXIpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZW1lbWJlclwiICsgRVZFTlRfS0VZJDUsIENMQVNTX05BTUVfT1BFTik7XG4gICAgICB9XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5FdmVudChFVkVOVF9TSE9XTikpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29sbGFwc2UgPSBmdW5jdGlvbiBjb2xsYXBzZSgpIHtcbiAgICAgIHZhciAkYm9keVNlbGVjdG9yID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0JPRFkpO1xuXG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICAgIGlmICgkX19kZWZhdWx0WydkZWZhdWx0J10od2luZG93KS53aWR0aCgpIDw9IHRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZSkge1xuICAgICAgICAgICRib2R5U2VsZWN0b3IucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9PUEVOKS5hZGRDbGFzcyhDTEFTU19OQU1FX0NMT1NFRCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJGJvZHlTZWxlY3Rvci5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFRCQxKTtcblxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuZW5hYmxlUmVtZW1iZXIpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZW1lbWJlclwiICsgRVZFTlRfS0VZJDUsIENMQVNTX05BTUVfQ09MTEFQU0VEJDEpO1xuICAgICAgfVxuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkudHJpZ2dlcigkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfQ09MTEFQU0VEJDMpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgIGlmICgkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfQk9EWSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQkMSkpIHtcbiAgICAgICAgdGhpcy5leHBhbmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmF1dG9Db2xsYXBzZSA9IGZ1bmN0aW9uIGF1dG9Db2xsYXBzZShyZXNpemUpIHtcbiAgICAgIGlmIChyZXNpemUgPT09IHZvaWQgMCkge1xuICAgICAgICByZXNpemUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLmF1dG9Db2xsYXBzZVNpemUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgJGJvZHlTZWxlY3RvciA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9CT0RZKTtcblxuICAgICAgaWYgKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh3aW5kb3cpLndpZHRoKCkgPD0gdGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICAgIGlmICghJGJvZHlTZWxlY3Rvci5oYXNDbGFzcyhDTEFTU19OQU1FX09QRU4pKSB7XG4gICAgICAgICAgdGhpcy5jb2xsYXBzZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlc2l6ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoJGJvZHlTZWxlY3Rvci5oYXNDbGFzcyhDTEFTU19OQU1FX09QRU4pKSB7XG4gICAgICAgICAgJGJvZHlTZWxlY3Rvci5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX09QRU4pO1xuICAgICAgICB9IGVsc2UgaWYgKCRib2R5U2VsZWN0b3IuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DTE9TRUQpKSB7XG4gICAgICAgICAgdGhpcy5leHBhbmQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8ucmVtZW1iZXIgPSBmdW5jdGlvbiByZW1lbWJlcigpIHtcbiAgICAgIGlmICghdGhpcy5fb3B0aW9ucy5lbmFibGVSZW1lbWJlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciAkYm9keSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnYm9keScpO1xuICAgICAgdmFyIHRvZ2dsZVN0YXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZW1lbWJlclwiICsgRVZFTlRfS0VZJDUpO1xuXG4gICAgICBpZiAodG9nZ2xlU3RhdGUgPT09IENMQVNTX05BTUVfQ09MTEFQU0VEJDEpIHtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMubm9UcmFuc2l0aW9uQWZ0ZXJSZWxvYWQpIHtcbiAgICAgICAgICAkYm9keS5hZGRDbGFzcygnaG9sZC10cmFuc2l0aW9uJykuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQkMSkuZGVsYXkoNTApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5yZW1vdmVDbGFzcygnaG9sZC10cmFuc2l0aW9uJyk7XG4gICAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGVxdWV1ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRib2R5LmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEJDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX29wdGlvbnMubm9UcmFuc2l0aW9uQWZ0ZXJSZWxvYWQpIHtcbiAgICAgICAgJGJvZHkuYWRkQ2xhc3MoJ2hvbGQtdHJhbnNpdGlvbicpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEJDEpLmRlbGF5KDUwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLnJlbW92ZUNsYXNzKCdob2xkLXRyYW5zaXRpb24nKTtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGVxdWV1ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRib2R5LnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEJDEpO1xuICAgICAgfVxuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5faW5pdCA9IGZ1bmN0aW9uIF9pbml0KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5yZW1lbWJlcigpO1xuICAgICAgdGhpcy5hdXRvQ29sbGFwc2UoKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmF1dG9Db2xsYXBzZSh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2FkZE92ZXJsYXkgPSBmdW5jdGlvbiBfYWRkT3ZlcmxheSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgb3ZlcmxheSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnPGRpdiAvPicsIHtcbiAgICAgICAgaWQ6ICdzaWRlYmFyLW92ZXJsYXknXG4gICAgICB9KTtcbiAgICAgIG92ZXJsYXkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuY29sbGFwc2UoKTtcbiAgICAgIH0pO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1dSQVBQRVIpLmFwcGVuZChvdmVybGF5KTtcbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIFB1c2hNZW51Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKG9wZXJhdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVkkOSk7XG5cbiAgICAgICAgdmFyIF9vcHRpb25zID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmV4dGVuZCh7fSwgRGVmYXVsdCQ3LCAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YSgpKTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFB1c2hNZW51KHRoaXMsIF9vcHRpb25zKTtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSQ5LCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb3BlcmF0aW9uID09PSAnc3RyaW5nJyAmJiBvcGVyYXRpb24ubWF0Y2goL2NvbGxhcHNlfGV4cGFuZHx0b2dnbGUvKSkge1xuICAgICAgICAgIGRhdGFbb3BlcmF0aW9uXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFB1c2hNZW51O1xuICB9KCk7XG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vbignY2xpY2snLCBTRUxFQ1RPUl9UT0dHTEVfQlVUVE9OLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgaWYgKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShidXR0b24pLmRhdGEoJ3dpZGdldCcpICE9PSAncHVzaG1lbnUnKSB7XG4gICAgICBidXR0b24gPSAkX19kZWZhdWx0WydkZWZhdWx0J10oYnV0dG9uKS5jbG9zZXN0KFNFTEVDVE9SX1RPR0dMRV9CVVRUT04pO1xuICAgIH1cblxuICAgIFB1c2hNZW51Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10oYnV0dG9uKSwgJ3RvZ2dsZScpO1xuICB9KTtcbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgUHVzaE1lbnUuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9UT0dHTEVfQlVUVE9OKSk7XG4gIH0pO1xuICAvKipcbiAgICogalF1ZXJ5IEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDldID0gUHVzaE1lbnUuX2pRdWVyeUludGVyZmFjZTtcbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkOV0uQ29uc3RydWN0b3IgPSBQdXNoTWVudTtcblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ5XS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDldID0gSlFVRVJZX05PX0NPTkZMSUNUJDk7XG4gICAgcmV0dXJuIFB1c2hNZW51Ll9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIFNpZGViYXJTZWFyY2guanNcbiAgICogTGljZW5zZSBNSVRcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICB2YXIgTkFNRSRhID0gJ1NpZGViYXJTZWFyY2gnO1xuICB2YXIgREFUQV9LRVkkYSA9ICdsdGUuc2lkZWJhci1zZWFyY2gnO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJGEgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSRhXTtcbiAgdmFyIENMQVNTX05BTUVfT1BFTiQxID0gJ3NpZGViYXItc2VhcmNoLW9wZW4nO1xuICB2YXIgQ0xBU1NfTkFNRV9JQ09OX1NFQVJDSCA9ICdmYS1zZWFyY2gnO1xuICB2YXIgQ0xBU1NfTkFNRV9JQ09OX0NMT1NFID0gJ2ZhLXRpbWVzJztcbiAgdmFyIENMQVNTX05BTUVfSEVBREVSID0gJ25hdi1oZWFkZXInO1xuICB2YXIgQ0xBU1NfTkFNRV9TRUFSQ0hfUkVTVUxUUyA9ICdzaWRlYmFyLXNlYXJjaC1yZXN1bHRzJztcbiAgdmFyIENMQVNTX05BTUVfTElTVF9HUk9VUCA9ICdsaXN0LWdyb3VwJztcbiAgdmFyIFNFTEVDVE9SX0RBVEFfV0lER0VUJDEgPSAnW2RhdGEtd2lkZ2V0PVwic2lkZWJhci1zZWFyY2hcIl0nO1xuICB2YXIgU0VMRUNUT1JfU0lERUJBUiQxID0gJy5tYWluLXNpZGViYXIgLm5hdi1zaWRlYmFyJztcbiAgdmFyIFNFTEVDVE9SX05BVl9MSU5LID0gJy5uYXYtbGluayc7XG4gIHZhciBTRUxFQ1RPUl9OQVZfVFJFRVZJRVcgPSAnLm5hdi10cmVldmlldyc7XG4gIHZhciBTRUxFQ1RPUl9TRUFSQ0hfSU5QVVQgPSBTRUxFQ1RPUl9EQVRBX1dJREdFVCQxICsgXCIgLmZvcm0tY29udHJvbFwiO1xuICB2YXIgU0VMRUNUT1JfU0VBUkNIX0JVVFRPTiA9IFNFTEVDVE9SX0RBVEFfV0lER0VUJDEgKyBcIiAuYnRuXCI7XG4gIHZhciBTRUxFQ1RPUl9TRUFSQ0hfSUNPTiA9IFNFTEVDVE9SX1NFQVJDSF9CVVRUT04gKyBcIiBpXCI7XG4gIHZhciBTRUxFQ1RPUl9TRUFSQ0hfTElTVF9HUk9VUCA9IFwiLlwiICsgQ0xBU1NfTkFNRV9MSVNUX0dST1VQO1xuICB2YXIgU0VMRUNUT1JfU0VBUkNIX1JFU1VMVFMgPSBcIi5cIiArIENMQVNTX05BTUVfU0VBUkNIX1JFU1VMVFM7XG4gIHZhciBTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUU19HUk9VUCA9IFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTICsgXCIgLlwiICsgQ0xBU1NfTkFNRV9MSVNUX0dST1VQO1xuICB2YXIgRGVmYXVsdCQ4ID0ge1xuICAgIGFycm93U2lnbjogJy0+JyxcbiAgICBtaW5MZW5ndGg6IDMsXG4gICAgbWF4UmVzdWx0czogNyxcbiAgICBoaWdobGlnaHROYW1lOiB0cnVlLFxuICAgIGhpZ2hsaWdodFBhdGg6IGZhbHNlLFxuICAgIGhpZ2hsaWdodENsYXNzOiAndGV4dC1saWdodCcsXG4gICAgbm90Rm91bmRUZXh0OiAnTm8gZWxlbWVudCBmb3VuZCEnXG4gIH07XG4gIHZhciBTZWFyY2hJdGVtcyA9IFtdO1xuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIHZhciBTaWRlYmFyU2VhcmNoID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTaWRlYmFyU2VhcmNoKF9lbGVtZW50LCBfb3B0aW9ucykge1xuICAgICAgdGhpcy5lbGVtZW50ID0gX2VsZW1lbnQ7XG4gICAgICB0aGlzLm9wdGlvbnMgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZXh0ZW5kKHt9LCBEZWZhdWx0JDgsIF9vcHRpb25zKTtcbiAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICB2YXIgX3Byb3RvID0gU2lkZWJhclNlYXJjaC5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0RBVEFfV0lER0VUJDEpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9EQVRBX1dJREdFVCQxKS5uZXh0KFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfREFUQV9XSURHRVQkMSkuYWZ0ZXIoJF9fZGVmYXVsdFsnZGVmYXVsdCddKCc8ZGl2IC8+Jywge1xuICAgICAgICAgIGNsYXNzOiBDTEFTU19OQU1FX1NFQVJDSF9SRVNVTFRTXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUUykuY2hpbGRyZW4oU0VMRUNUT1JfU0VBUkNIX0xJU1RfR1JPVVApLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUUykuYXBwZW5kKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnPGRpdiAvPicsIHtcbiAgICAgICAgICBjbGFzczogQ0xBU1NfTkFNRV9MSVNUX0dST1VQXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYWRkTm90Rm91bmQoKTtcblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1NJREVCQVIkMSkuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uIChpLCBjaGlsZCkge1xuICAgICAgICBfdGhpcy5fcGFyc2VJdGVtKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2VhcmNoID0gZnVuY3Rpb24gc2VhcmNoKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBzZWFyY2hWYWx1ZSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9TRUFSQ0hfSU5QVVQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGlmIChzZWFyY2hWYWx1ZS5sZW5ndGggPCB0aGlzLm9wdGlvbnMubWluTGVuZ3RoKSB7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUU19HUk9VUCkuZW1wdHkoKTtcblxuICAgICAgICB0aGlzLl9hZGROb3RGb3VuZCgpO1xuXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VhcmNoUmVzdWx0cyA9IFNlYXJjaEl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUpO1xuICAgICAgfSk7XG4gICAgICB2YXIgZW5kUmVzdWx0cyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShzZWFyY2hSZXN1bHRzLnNsaWNlKDAsIHRoaXMub3B0aW9ucy5tYXhSZXN1bHRzKSk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfU0VBUkNIX1JFU1VMVFNfR1JPVVApLmVtcHR5KCk7XG5cbiAgICAgIGlmIChlbmRSZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9hZGROb3RGb3VuZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kUmVzdWx0cy5lYWNoKGZ1bmN0aW9uIChpLCByZXN1bHQpIHtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfU0VBUkNIX1JFU1VMVFNfR1JPVVApLmFwcGVuZChfdGhpczIuX3JlbmRlckl0ZW0ocmVzdWx0Lm5hbWUsIHJlc3VsdC5saW5rLCByZXN1bHQucGF0aCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfTtcblxuICAgIF9wcm90by5vcGVuID0gZnVuY3Rpb24gb3BlbigpIHtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9EQVRBX1dJREdFVCQxKS5wYXJlbnQoKS5hZGRDbGFzcyhDTEFTU19OQU1FX09QRU4kMSk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfU0VBUkNIX0lDT04pLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfSUNPTl9TRUFSQ0gpLmFkZENsYXNzKENMQVNTX05BTUVfSUNPTl9DTE9TRSk7XG4gICAgfTtcblxuICAgIF9wcm90by5jbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0RBVEFfV0lER0VUJDEpLnBhcmVudCgpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfT1BFTiQxKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9TRUFSQ0hfSUNPTikucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9JQ09OX0NMT1NFKS5hZGRDbGFzcyhDTEFTU19OQU1FX0lDT05fU0VBUkNIKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgIGlmICgkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfREFUQV9XSURHRVQkMSkucGFyZW50KCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9PUEVOJDEpKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfVxuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fcGFyc2VJdGVtID0gZnVuY3Rpb24gX3BhcnNlSXRlbShpdGVtLCBwYXRoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKHBhdGggPT09IHZvaWQgMCkge1xuICAgICAgICBwYXRoID0gW107XG4gICAgICB9XG5cbiAgICAgIGlmICgkX19kZWZhdWx0WydkZWZhdWx0J10oaXRlbSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9IRUFERVIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZW1PYmplY3QgPSB7fTtcbiAgICAgIHZhciBuYXZMaW5rID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKGl0ZW0pLmNsb25lKCkuZmluZChcIj4gXCIgKyBTRUxFQ1RPUl9OQVZfTElOSyk7XG4gICAgICB2YXIgbmF2VHJlZXZpZXcgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oaXRlbSkuY2xvbmUoKS5maW5kKFwiPiBcIiArIFNFTEVDVE9SX05BVl9UUkVFVklFVyk7XG4gICAgICB2YXIgbGluayA9IG5hdkxpbmsuYXR0cignaHJlZicpO1xuICAgICAgdmFyIG5hbWUgPSBuYXZMaW5rLmZpbmQoJ3AnKS5jaGlsZHJlbigpLnJlbW92ZSgpLmVuZCgpLnRleHQoKTtcbiAgICAgIGl0ZW1PYmplY3QubmFtZSA9IHRoaXMuX3RyaW1UZXh0KG5hbWUpO1xuICAgICAgaXRlbU9iamVjdC5saW5rID0gbGluaztcbiAgICAgIGl0ZW1PYmplY3QucGF0aCA9IHBhdGg7XG5cbiAgICAgIGlmIChuYXZUcmVldmlldy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgU2VhcmNoSXRlbXMucHVzaChpdGVtT2JqZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBuZXdQYXRoID0gaXRlbU9iamVjdC5wYXRoLmNvbmNhdChbaXRlbU9iamVjdC5uYW1lXSk7XG4gICAgICAgIG5hdlRyZWV2aWV3LmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbiAoaSwgY2hpbGQpIHtcbiAgICAgICAgICBfdGhpczMuX3BhcnNlSXRlbShjaGlsZCwgbmV3UGF0aCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX3RyaW1UZXh0ID0gZnVuY3Rpb24gX3RyaW1UZXh0KHRleHQpIHtcbiAgICAgIHJldHVybiAkLnRyaW0odGV4dC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCAnICcpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9yZW5kZXJJdGVtID0gZnVuY3Rpb24gX3JlbmRlckl0ZW0obmFtZSwgbGluaywgcGF0aCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHBhdGggPSBwYXRoLmpvaW4oXCIgXCIgKyB0aGlzLm9wdGlvbnMuYXJyb3dTaWduICsgXCIgXCIpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmhpZ2hsaWdodE5hbWUgfHwgdGhpcy5vcHRpb25zLmhpZ2hsaWdodFBhdGgpIHtcbiAgICAgICAgdmFyIHNlYXJjaFZhbHVlID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1NFQVJDSF9JTlBVVCkudmFsKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIHJlZ0V4cCA9IG5ldyBSZWdFeHAoc2VhcmNoVmFsdWUsICdnaScpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0TmFtZSkge1xuICAgICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UocmVnRXhwLCBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gXCI8YiBjbGFzcz1cXFwiXCIgKyBfdGhpczQub3B0aW9ucy5oaWdobGlnaHRDbGFzcyArIFwiXFxcIj5cIiArIHN0ciArIFwiPC9iPlwiO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oaWdobGlnaHRQYXRoKSB7XG4gICAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZShyZWdFeHAsIGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIjxiIGNsYXNzPVxcXCJcIiArIF90aGlzNC5vcHRpb25zLmhpZ2hsaWdodENsYXNzICsgXCJcXFwiPlwiICsgc3RyICsgXCI8L2I+XCI7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwiPGEgaHJlZj1cXFwiXCIgKyBsaW5rICsgXCJcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLXRpdGxlXFxcIj5cXG4gICAgICAgICAgXCIgKyBuYW1lICsgXCJcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLXBhdGhcXFwiPlxcbiAgICAgICAgICBcIiArIHBhdGggKyBcIlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9hPlwiO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2FkZE5vdEZvdW5kID0gZnVuY3Rpb24gX2FkZE5vdEZvdW5kKCkge1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTX0dST1VQKS5hcHBlbmQodGhpcy5fcmVuZGVySXRlbSh0aGlzLm9wdGlvbnMubm90Rm91bmRUZXh0LCAnIycsIFtdKSk7XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBTaWRlYmFyU2VhcmNoLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgdmFyIGRhdGEgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSRhKTtcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgX29wdGlvbnMgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZXh0ZW5kKHt9LCBEZWZhdWx0JDgsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogZGF0YSk7XG5cbiAgICAgIHZhciBwbHVnaW4gPSBuZXcgU2lkZWJhclNlYXJjaCgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyksIF9vcHRpb25zKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJGEsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogZGF0YSk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiBjb25maWcubWF0Y2goL2luaXR8dG9nZ2xlfGNsb3NlfG9wZW58c2VhcmNoLykpIHtcbiAgICAgICAgcGx1Z2luW2NvbmZpZ10oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsdWdpbi5pbml0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBTaWRlYmFyU2VhcmNoO1xuICB9KCk7XG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vbignY2xpY2snLCBTRUxFQ1RPUl9TRUFSQ0hfQlVUVE9OLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgU2lkZWJhclNlYXJjaC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0RBVEFfV0lER0VUJDEpLCAndG9nZ2xlJyk7XG4gIH0pO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9uKCdrZXl1cCcsIFNFTEVDVE9SX1NFQVJDSF9JTlBVVCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMzgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfU0VBUkNIX1JFU1VMVFNfR1JPVVApLmNoaWxkcmVuKCkubGFzdCgpLmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gNDApIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfU0VBUkNIX1JFU1VMVFNfR1JPVVApLmNoaWxkcmVuKCkuZmlyc3QoKS5mb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0aW1lciA9IDA7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgU2lkZWJhclNlYXJjaC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0RBVEFfV0lER0VUJDEpLCAnc2VhcmNoJyk7XG4gICAgfSwgMTAwKTtcbiAgfSk7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudCkub24oJ2tleWRvd24nLCBTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUU19HUk9VUCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyICRmb2N1c2VkID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKCc6Zm9jdXMnKTtcblxuICAgIGlmIChldmVudC5rZXlDb2RlID09IDM4KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoJGZvY3VzZWQuaXMoJzpmaXJzdC1jaGlsZCcpKSB7XG4gICAgICAgICRmb2N1c2VkLnNpYmxpbmdzKCkubGFzdCgpLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZm9jdXNlZC5wcmV2KCkuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA0MCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKCRmb2N1c2VkLmlzKCc6bGFzdC1jaGlsZCcpKSB7XG4gICAgICAgICRmb2N1c2VkLnNpYmxpbmdzKCkuZmlyc3QoKS5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGZvY3VzZWQubmV4dCgpLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgU2lkZWJhclNlYXJjaC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0RBVEFfV0lER0VUJDEpLCAnaW5pdCcpO1xuICB9KTtcbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSRhXSA9IFNpZGViYXJTZWFyY2guX2pRdWVyeUludGVyZmFjZTtcbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkYV0uQ29uc3RydWN0b3IgPSBTaWRlYmFyU2VhcmNoO1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJGFdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkYV0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkYTtcbiAgICByZXR1cm4gU2lkZWJhclNlYXJjaC5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBBZG1pbkxURSBUb2FzdHMuanNcbiAgICogTGljZW5zZSBNSVRcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICB2YXIgTkFNRSRiID0gJ1RvYXN0cyc7XG4gIHZhciBEQVRBX0tFWSRiID0gJ2x0ZS50b2FzdHMnO1xuICB2YXIgRVZFTlRfS0VZJDYgPSBcIi5cIiArIERBVEFfS0VZJGI7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkYiA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJGJdO1xuICB2YXIgRVZFTlRfSU5JVCA9IFwiaW5pdFwiICsgRVZFTlRfS0VZJDY7XG4gIHZhciBFVkVOVF9DUkVBVEVEID0gXCJjcmVhdGVkXCIgKyBFVkVOVF9LRVkkNjtcbiAgdmFyIEVWRU5UX1JFTU9WRUQkMSA9IFwicmVtb3ZlZFwiICsgRVZFTlRfS0VZJDY7XG4gIHZhciBTRUxFQ1RPUl9DT05UQUlORVJfVE9QX1JJR0hUID0gJyN0b2FzdHNDb250YWluZXJUb3BSaWdodCc7XG4gIHZhciBTRUxFQ1RPUl9DT05UQUlORVJfVE9QX0xFRlQgPSAnI3RvYXN0c0NvbnRhaW5lclRvcExlZnQnO1xuICB2YXIgU0VMRUNUT1JfQ09OVEFJTkVSX0JPVFRPTV9SSUdIVCA9ICcjdG9hc3RzQ29udGFpbmVyQm90dG9tUmlnaHQnO1xuICB2YXIgU0VMRUNUT1JfQ09OVEFJTkVSX0JPVFRPTV9MRUZUID0gJyN0b2FzdHNDb250YWluZXJCb3R0b21MZWZ0JztcbiAgdmFyIENMQVNTX05BTUVfVE9QX1JJR0hUID0gJ3RvYXN0cy10b3AtcmlnaHQnO1xuICB2YXIgQ0xBU1NfTkFNRV9UT1BfTEVGVCA9ICd0b2FzdHMtdG9wLWxlZnQnO1xuICB2YXIgQ0xBU1NfTkFNRV9CT1RUT01fUklHSFQgPSAndG9hc3RzLWJvdHRvbS1yaWdodCc7XG4gIHZhciBDTEFTU19OQU1FX0JPVFRPTV9MRUZUID0gJ3RvYXN0cy1ib3R0b20tbGVmdCc7XG4gIHZhciBQT1NJVElPTl9UT1BfUklHSFQgPSAndG9wUmlnaHQnO1xuICB2YXIgUE9TSVRJT05fVE9QX0xFRlQgPSAndG9wTGVmdCc7XG4gIHZhciBQT1NJVElPTl9CT1RUT01fUklHSFQgPSAnYm90dG9tUmlnaHQnO1xuICB2YXIgUE9TSVRJT05fQk9UVE9NX0xFRlQgPSAnYm90dG9tTGVmdCc7XG4gIHZhciBEZWZhdWx0JDkgPSB7XG4gICAgcG9zaXRpb246IFBPU0lUSU9OX1RPUF9SSUdIVCxcbiAgICBmaXhlZDogdHJ1ZSxcbiAgICBhdXRvaGlkZTogZmFsc2UsXG4gICAgYXV0b3JlbW92ZTogdHJ1ZSxcbiAgICBkZWxheTogMTAwMCxcbiAgICBmYWRlOiB0cnVlLFxuICAgIGljb246IG51bGwsXG4gICAgaW1hZ2U6IG51bGwsXG4gICAgaW1hZ2VBbHQ6IG51bGwsXG4gICAgaW1hZ2VIZWlnaHQ6ICcyNXB4JyxcbiAgICB0aXRsZTogbnVsbCxcbiAgICBzdWJ0aXRsZTogbnVsbCxcbiAgICBjbG9zZTogdHJ1ZSxcbiAgICBib2R5OiBudWxsLFxuICAgIGNsYXNzOiBudWxsXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgdmFyIFRvYXN0cyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVG9hc3RzKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgICB0aGlzLl9wcmVwYXJlQ29udGFpbmVyKCk7XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnYm9keScpLnRyaWdnZXIoJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX0lOSVQpKTtcbiAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICB2YXIgX3Byb3RvID0gVG9hc3RzLnByb3RvdHlwZTtcblxuICAgIF9wcm90by5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgdG9hc3QgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oJzxkaXYgY2xhc3M9XCJ0b2FzdFwiIHJvbGU9XCJhbGVydFwiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiLz4nKTtcbiAgICAgIHRvYXN0LmRhdGEoJ2F1dG9oaWRlJywgdGhpcy5fY29uZmlnLmF1dG9oaWRlKTtcbiAgICAgIHRvYXN0LmRhdGEoJ2FuaW1hdGlvbicsIHRoaXMuX2NvbmZpZy5mYWRlKTtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5jbGFzcykge1xuICAgICAgICB0b2FzdC5hZGRDbGFzcyh0aGlzLl9jb25maWcuY2xhc3MpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmRlbGF5ICYmIHRoaXMuX2NvbmZpZy5kZWxheSAhPSA1MDApIHtcbiAgICAgICAgdG9hc3QuZGF0YSgnZGVsYXknLCB0aGlzLl9jb25maWcuZGVsYXkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdG9hc3RIZWFkZXIgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oJzxkaXYgY2xhc3M9XCJ0b2FzdC1oZWFkZXJcIj4nKTtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pbWFnZSAhPSBudWxsKSB7XG4gICAgICAgIHZhciB0b2FzdEltYWdlID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKCc8aW1nIC8+JykuYWRkQ2xhc3MoJ3JvdW5kZWQgbXItMicpLmF0dHIoJ3NyYycsIHRoaXMuX2NvbmZpZy5pbWFnZSkuYXR0cignYWx0JywgdGhpcy5fY29uZmlnLmltYWdlQWx0KTtcblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmltYWdlSGVpZ2h0ICE9IG51bGwpIHtcbiAgICAgICAgICB0b2FzdEltYWdlLmhlaWdodCh0aGlzLl9jb25maWcuaW1hZ2VIZWlnaHQpLndpZHRoKCdhdXRvJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0b2FzdEhlYWRlci5hcHBlbmQodG9hc3RJbWFnZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuaWNvbiAhPSBudWxsKSB7XG4gICAgICAgIHRvYXN0SGVhZGVyLmFwcGVuZCgkX19kZWZhdWx0WydkZWZhdWx0J10oJzxpIC8+JykuYWRkQ2xhc3MoJ21yLTInKS5hZGRDbGFzcyh0aGlzLl9jb25maWcuaWNvbikpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRpdGxlICE9IG51bGwpIHtcbiAgICAgICAgdG9hc3RIZWFkZXIuYXBwZW5kKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnPHN0cm9uZyAvPicpLmFkZENsYXNzKCdtci1hdXRvJykuaHRtbCh0aGlzLl9jb25maWcudGl0bGUpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5zdWJ0aXRsZSAhPSBudWxsKSB7XG4gICAgICAgIHRvYXN0SGVhZGVyLmFwcGVuZCgkX19kZWZhdWx0WydkZWZhdWx0J10oJzxzbWFsbCAvPicpLmh0bWwodGhpcy5fY29uZmlnLnN1YnRpdGxlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuY2xvc2UgPT0gdHJ1ZSkge1xuICAgICAgICB2YXIgdG9hc3RDbG9zZSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnPGJ1dHRvbiBkYXRhLWRpc21pc3M9XCJ0b2FzdFwiIC8+JykuYXR0cigndHlwZScsICdidXR0b24nKS5hZGRDbGFzcygnbWwtMiBtYi0xIGNsb3NlJykuYXR0cignYXJpYS1sYWJlbCcsICdDbG9zZScpLmFwcGVuZCgnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj4nKTtcblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnRpdGxlID09IG51bGwpIHtcbiAgICAgICAgICB0b2FzdENsb3NlLnRvZ2dsZUNsYXNzKCdtbC0yIG1sLWF1dG8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvYXN0SGVhZGVyLmFwcGVuZCh0b2FzdENsb3NlKTtcbiAgICAgIH1cblxuICAgICAgdG9hc3QuYXBwZW5kKHRvYXN0SGVhZGVyKTtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5ib2R5ICE9IG51bGwpIHtcbiAgICAgICAgdG9hc3QuYXBwZW5kKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnPGRpdiBjbGFzcz1cInRvYXN0LWJvZHlcIiAvPicpLmh0bWwodGhpcy5fY29uZmlnLmJvZHkpKTtcbiAgICAgIH1cblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLnByZXBlbmQodG9hc3QpO1xuICAgICAgdmFyICRib2R5ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdib2R5Jyk7XG4gICAgICAkYm9keS50cmlnZ2VyKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5FdmVudChFVkVOVF9DUkVBVEVEKSk7XG4gICAgICB0b2FzdC50b2FzdCgnc2hvdycpO1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9yZW1vdmUpIHtcbiAgICAgICAgdG9hc3Qub24oJ2hpZGRlbi5icy50b2FzdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGVsYXkoMjAwKS5yZW1vdmUoKTtcbiAgICAgICAgICAkYm9keS50cmlnZ2VyKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5FdmVudChFVkVOVF9SRU1PVkVEJDEpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBfcHJvdG8uX2dldENvbnRhaW5lcklkID0gZnVuY3Rpb24gX2dldENvbnRhaW5lcklkKCkge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQT1NJVElPTl9UT1BfUklHSFQpIHtcbiAgICAgICAgcmV0dXJuIFNFTEVDVE9SX0NPTlRBSU5FUl9UT1BfUklHSFQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUE9TSVRJT05fVE9QX0xFRlQpIHtcbiAgICAgICAgcmV0dXJuIFNFTEVDVE9SX0NPTlRBSU5FUl9UT1BfTEVGVDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQT1NJVElPTl9CT1RUT01fUklHSFQpIHtcbiAgICAgICAgcmV0dXJuIFNFTEVDVE9SX0NPTlRBSU5FUl9CT1RUT01fUklHSFQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUE9TSVRJT05fQk9UVE9NX0xFRlQpIHtcbiAgICAgICAgcmV0dXJuIFNFTEVDVE9SX0NPTlRBSU5FUl9CT1RUT01fTEVGVDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9wcmVwYXJlQ29udGFpbmVyID0gZnVuY3Rpb24gX3ByZXBhcmVDb250YWluZXIoKSB7XG4gICAgICBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKCc8ZGl2IC8+JykuYXR0cignaWQnLCB0aGlzLl9nZXRDb250YWluZXJJZCgpLnJlcGxhY2UoJyMnLCAnJykpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUE9TSVRJT05fVE9QX1JJR0hUKSB7XG4gICAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKENMQVNTX05BTUVfVE9QX1JJR0hUKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUE9TSVRJT05fVE9QX0xFRlQpIHtcbiAgICAgICAgICBjb250YWluZXIuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9UT1BfTEVGVCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBPU0lUSU9OX0JPVFRPTV9SSUdIVCkge1xuICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhDTEFTU19OQU1FX0JPVFRPTV9SSUdIVCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBPU0lUSU9OX0JPVFRPTV9MRUZUKSB7XG4gICAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKENMQVNTX05BTUVfQk9UVE9NX0xFRlQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdib2R5JykuYXBwZW5kKGNvbnRhaW5lcik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuZml4ZWQpIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgfVxuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgVG9hc3RzLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKG9wdGlvbiwgY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9vcHRpb25zID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmV4dGVuZCh7fSwgRGVmYXVsdCQ5LCBjb25maWcpO1xuXG4gICAgICAgIHZhciB0b2FzdCA9IG5ldyBUb2FzdHMoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLCBfb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gJ2NyZWF0ZScpIHtcbiAgICAgICAgICB0b2FzdFtvcHRpb25dKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gVG9hc3RzO1xuICB9KCk7XG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSRiXSA9IFRvYXN0cy5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSRiXS5Db25zdHJ1Y3RvciA9IFRvYXN0cztcblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSRiXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJGJdID0gSlFVRVJZX05PX0NPTkZMSUNUJGI7XG4gICAgcmV0dXJuIFRvYXN0cy5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBBZG1pbkxURSBUb2RvTGlzdC5qc1xuICAgKiBMaWNlbnNlIE1JVFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIHZhciBOQU1FJGMgPSAnVG9kb0xpc3QnO1xuICB2YXIgREFUQV9LRVkkYyA9ICdsdGUudG9kb2xpc3QnO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJGMgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSRjXTtcbiAgdmFyIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQgPSAnW2RhdGEtd2lkZ2V0PVwidG9kby1saXN0XCJdJztcbiAgdmFyIENMQVNTX05BTUVfVE9ET19MSVNUX0RPTkUgPSAnZG9uZSc7XG4gIHZhciBEZWZhdWx0JGEgPSB7XG4gICAgb25DaGVjazogZnVuY3Rpb24gb25DaGVjayhpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9LFxuICAgIG9uVW5DaGVjazogZnVuY3Rpb24gb25VbkNoZWNrKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICB2YXIgVG9kb0xpc3QgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRvZG9MaXN0KGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICB2YXIgX3Byb3RvID0gVG9kb0xpc3QucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShpdGVtKSB7XG4gICAgICBpdGVtLnBhcmVudHMoJ2xpJykudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9UT0RPX0xJU1RfRE9ORSk7XG5cbiAgICAgIGlmICghJF9fZGVmYXVsdFsnZGVmYXVsdCddKGl0ZW0pLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICB0aGlzLnVuQ2hlY2soJF9fZGVmYXVsdFsnZGVmYXVsdCddKGl0ZW0pKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNoZWNrKGl0ZW0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhpdGVtKSB7XG4gICAgICB0aGlzLl9jb25maWcub25DaGVjay5jYWxsKGl0ZW0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8udW5DaGVjayA9IGZ1bmN0aW9uIHVuQ2hlY2soaXRlbSkge1xuICAgICAgdGhpcy5fY29uZmlnLm9uVW5DaGVjay5jYWxsKGl0ZW0pO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5faW5pdCA9IGZ1bmN0aW9uIF9pbml0KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyICR0b2dnbGVTZWxlY3RvciA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgICAkdG9nZ2xlU2VsZWN0b3IuZmluZCgnaW5wdXQ6Y2hlY2tib3g6Y2hlY2tlZCcpLnBhcmVudHMoJ2xpJykudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9UT0RPX0xJU1RfRE9ORSk7XG4gICAgICAkdG9nZ2xlU2VsZWN0b3Iub24oJ2NoYW5nZScsICdpbnB1dDpjaGVja2JveCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpcy50b2dnbGUoJF9fZGVmYXVsdFsnZGVmYXVsdCddKGV2ZW50LnRhcmdldCkpO1xuICAgICAgfSk7XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBUb2RvTGlzdC5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJGMpO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9vcHRpb25zID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmV4dGVuZCh7fSwgRGVmYXVsdCRhLCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IGRhdGEpO1xuXG4gICAgICAgIHZhciBwbHVnaW4gPSBuZXcgVG9kb0xpc3QoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLCBfb3B0aW9ucyk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJGMsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogZGF0YSk7XG5cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ2luaXQnKSB7XG4gICAgICAgICAgcGx1Z2luW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBUb2RvTGlzdDtcbiAgfSgpO1xuICAvKipcbiAgICogRGF0YSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIFRvZG9MaXN0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfREFUQV9UT0dHTEUkNCkpO1xuICB9KTtcbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSRjXSA9IFRvZG9MaXN0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJGNdLkNvbnN0cnVjdG9yID0gVG9kb0xpc3Q7XG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkY10ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSRjXSA9IEpRVUVSWV9OT19DT05GTElDVCRjO1xuICAgIHJldHVybiBUb2RvTGlzdC5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBBZG1pbkxURSBUcmVldmlldy5qc1xuICAgKiBMaWNlbnNlIE1JVFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIHZhciBOQU1FJGQgPSAnVHJlZXZpZXcnO1xuICB2YXIgREFUQV9LRVkkZCA9ICdsdGUudHJlZXZpZXcnO1xuICB2YXIgRVZFTlRfS0VZJDcgPSBcIi5cIiArIERBVEFfS0VZJGQ7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkZCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJGRdO1xuICB2YXIgRVZFTlRfRVhQQU5ERUQkMyA9IFwiZXhwYW5kZWRcIiArIEVWRU5UX0tFWSQ3O1xuICB2YXIgRVZFTlRfQ09MTEFQU0VEJDQgPSBcImNvbGxhcHNlZFwiICsgRVZFTlRfS0VZJDc7XG4gIHZhciBFVkVOVF9MT0FEX0RBVEFfQVBJID0gXCJsb2FkXCIgKyBFVkVOVF9LRVkkNztcbiAgdmFyIFNFTEVDVE9SX0xJID0gJy5uYXYtaXRlbSc7XG4gIHZhciBTRUxFQ1RPUl9MSU5LID0gJy5uYXYtbGluayc7XG4gIHZhciBTRUxFQ1RPUl9UUkVFVklFV19NRU5VID0gJy5uYXYtdHJlZXZpZXcnO1xuICB2YXIgU0VMRUNUT1JfT1BFTiA9ICcubWVudS1vcGVuJztcbiAgdmFyIFNFTEVDVE9SX0RBVEFfV0lER0VUJDIgPSAnW2RhdGEtd2lkZ2V0PVwidHJlZXZpZXdcIl0nO1xuICB2YXIgQ0xBU1NfTkFNRV9PUEVOJDIgPSAnbWVudS1vcGVuJztcbiAgdmFyIENMQVNTX05BTUVfSVNfT1BFTklORyQxID0gJ21lbnUtaXMtb3BlbmluZyc7XG4gIHZhciBDTEFTU19OQU1FX1NJREVCQVJfQ09MTEFQU0VEID0gJ3NpZGViYXItY29sbGFwc2UnO1xuICB2YXIgRGVmYXVsdCRiID0ge1xuICAgIHRyaWdnZXI6IFNFTEVDVE9SX0RBVEFfV0lER0VUJDIgKyBcIiBcIiArIFNFTEVDVE9SX0xJTkssXG4gICAgYW5pbWF0aW9uU3BlZWQ6IDMwMCxcbiAgICBhY2NvcmRpb246IHRydWUsXG4gICAgZXhwYW5kU2lkZWJhcjogZmFsc2UsXG4gICAgc2lkZWJhckJ1dHRvblNlbGVjdG9yOiAnW2RhdGEtd2lkZ2V0PVwicHVzaG1lbnVcIl0nXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgdmFyIFRyZWV2aWV3ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmVldmlldyhlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIH0gLy8gUHVibGljXG5cblxuICAgIHZhciBfcHJvdG8gPSBUcmVldmlldy5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oXCJcIiArIFNFTEVDVE9SX0xJICsgU0VMRUNUT1JfT1BFTiArIFwiIFwiICsgU0VMRUNUT1JfVFJFRVZJRVdfTUVOVSkuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICAgIHRoaXMuX3NldHVwTGlzdGVuZXJzKCk7XG4gICAgfTtcblxuICAgIF9wcm90by5leHBhbmQgPSBmdW5jdGlvbiBleHBhbmQodHJlZXZpZXdNZW51LCBwYXJlbnRMaSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGV4cGFuZGVkRXZlbnQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfRVhQQU5ERUQkMyk7XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYWNjb3JkaW9uKSB7XG4gICAgICAgIHZhciBvcGVuTWVudUxpID0gcGFyZW50TGkuc2libGluZ3MoU0VMRUNUT1JfT1BFTikuZmlyc3QoKTtcbiAgICAgICAgdmFyIG9wZW5UcmVldmlldyA9IG9wZW5NZW51TGkuZmluZChTRUxFQ1RPUl9UUkVFVklFV19NRU5VKS5maXJzdCgpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlKG9wZW5UcmVldmlldywgb3Blbk1lbnVMaSk7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudExpLmFkZENsYXNzKENMQVNTX05BTUVfSVNfT1BFTklORyQxKTtcbiAgICAgIHRyZWV2aWV3TWVudS5zdG9wKCkuc2xpZGVEb3duKHRoaXMuX2NvbmZpZy5hbmltYXRpb25TcGVlZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBwYXJlbnRMaS5hZGRDbGFzcyhDTEFTU19OQU1FX09QRU4kMik7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShfdGhpcy5fZWxlbWVudCkudHJpZ2dlcihleHBhbmRlZEV2ZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmV4cGFuZFNpZGViYXIpIHtcbiAgICAgICAgdGhpcy5fZXhwYW5kU2lkZWJhcigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uY29sbGFwc2UgPSBmdW5jdGlvbiBjb2xsYXBzZSh0cmVldmlld01lbnUsIHBhcmVudExpKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGNvbGxhcHNlZEV2ZW50ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX0NPTExBUFNFRCQ0KTtcbiAgICAgIHBhcmVudExpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfSVNfT1BFTklORyQxICsgXCIgXCIgKyBDTEFTU19OQU1FX09QRU4kMik7XG4gICAgICB0cmVldmlld01lbnUuc3RvcCgpLnNsaWRlVXAodGhpcy5fY29uZmlnLmFuaW1hdGlvblNwZWVkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShfdGhpczIuX2VsZW1lbnQpLnRyaWdnZXIoY29sbGFwc2VkRXZlbnQpO1xuICAgICAgICB0cmVldmlld01lbnUuZmluZChTRUxFQ1RPUl9PUEVOICsgXCIgPiBcIiArIFNFTEVDVE9SX1RSRUVWSUVXX01FTlUpLnNsaWRlVXAoKTtcbiAgICAgICAgdHJlZXZpZXdNZW51LmZpbmQoU0VMRUNUT1JfT1BFTikucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9PUEVOJDIpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZXZlbnQpIHtcbiAgICAgIHZhciAkcmVsYXRpdmVUYXJnZXQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICB2YXIgJHBhcmVudCA9ICRyZWxhdGl2ZVRhcmdldC5wYXJlbnQoKTtcbiAgICAgIHZhciB0cmVldmlld01lbnUgPSAkcGFyZW50LmZpbmQoXCI+IFwiICsgU0VMRUNUT1JfVFJFRVZJRVdfTUVOVSk7XG5cbiAgICAgIGlmICghdHJlZXZpZXdNZW51LmlzKFNFTEVDVE9SX1RSRUVWSUVXX01FTlUpKSB7XG4gICAgICAgIGlmICghJHBhcmVudC5pcyhTRUxFQ1RPUl9MSSkpIHtcbiAgICAgICAgICB0cmVldmlld01lbnUgPSAkcGFyZW50LnBhcmVudCgpLmZpbmQoXCI+IFwiICsgU0VMRUNUT1JfVFJFRVZJRVdfTUVOVSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRyZWV2aWV3TWVudS5pcyhTRUxFQ1RPUl9UUkVFVklFV19NRU5VKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIHBhcmVudExpID0gJHJlbGF0aXZlVGFyZ2V0LnBhcmVudHMoU0VMRUNUT1JfTEkpLmZpcnN0KCk7XG4gICAgICB2YXIgaXNPcGVuID0gcGFyZW50TGkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9PUEVOJDIpO1xuXG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2UoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRyZWV2aWV3TWVudSksIHBhcmVudExpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZXhwYW5kKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0cmVldmlld01lbnUpLCBwYXJlbnRMaSk7XG4gICAgICB9XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9zZXR1cExpc3RlbmVycyA9IGZ1bmN0aW9uIF9zZXR1cExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgZWxlbWVudElkID0gdGhpcy5fZWxlbWVudC5hdHRyKCdpZCcpICE9PSB1bmRlZmluZWQgPyBcIiNcIiArIHRoaXMuX2VsZW1lbnQuYXR0cignaWQnKSA6ICcnO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vbignY2xpY2snLCBcIlwiICsgZWxlbWVudElkICsgdGhpcy5fY29uZmlnLnRyaWdnZXIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpczMudG9nZ2xlKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2V4cGFuZFNpZGViYXIgPSBmdW5jdGlvbiBfZXhwYW5kU2lkZWJhcigpIHtcbiAgICAgIGlmICgkX19kZWZhdWx0WydkZWZhdWx0J10oJ2JvZHknKS5oYXNDbGFzcyhDTEFTU19OQU1FX1NJREVCQVJfQ09MTEFQU0VEKSkge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fY29uZmlnLnNpZGViYXJCdXR0b25TZWxlY3RvcikuUHVzaE1lbnUoJ2V4cGFuZCcpO1xuICAgICAgfVxuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgVHJlZXZpZXcuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSRkKTtcblxuICAgICAgICB2YXIgX29wdGlvbnMgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZXh0ZW5kKHt9LCBEZWZhdWx0JGIsICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKCkpO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgVHJlZXZpZXcoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLCBfb3B0aW9ucyk7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVkkZCwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnID09PSAnaW5pdCcpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBUcmVldmlldztcbiAgfSgpO1xuICAvKipcbiAgICogRGF0YSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh3aW5kb3cpLm9uKEVWRU5UX0xPQURfREFUQV9BUEksIGZ1bmN0aW9uICgpIHtcbiAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfREFUQV9XSURHRVQkMikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBUcmVldmlldy5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLCAnaW5pdCcpO1xuICAgIH0pO1xuICB9KTtcbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSRkXSA9IFRyZWV2aWV3Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJGRdLkNvbnN0cnVjdG9yID0gVHJlZXZpZXc7XG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkZF0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSRkXSA9IEpRVUVSWV9OT19DT05GTElDVCRkO1xuICAgIHJldHVybiBUcmVldmlldy5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIGV4cG9ydHMuQ2FyZFJlZnJlc2ggPSBDYXJkUmVmcmVzaDtcbiAgZXhwb3J0cy5DYXJkV2lkZ2V0ID0gQ2FyZFdpZGdldDtcbiAgZXhwb3J0cy5Db250cm9sU2lkZWJhciA9IENvbnRyb2xTaWRlYmFyO1xuICBleHBvcnRzLkRpcmVjdENoYXQgPSBEaXJlY3RDaGF0O1xuICBleHBvcnRzLkRyb3Bkb3duID0gRHJvcGRvd247XG4gIGV4cG9ydHMuRXhwYW5kYWJsZVRhYmxlID0gRXhwYW5kYWJsZVRhYmxlO1xuICBleHBvcnRzLkZ1bGxzY3JlZW4gPSBGdWxsc2NyZWVuO1xuICBleHBvcnRzLklGcmFtZSA9IElGcmFtZTtcbiAgZXhwb3J0cy5MYXlvdXQgPSBMYXlvdXQ7XG4gIGV4cG9ydHMuUHVzaE1lbnUgPSBQdXNoTWVudTtcbiAgZXhwb3J0cy5TaWRlYmFyU2VhcmNoID0gU2lkZWJhclNlYXJjaDtcbiAgZXhwb3J0cy5Ub2FzdHMgPSBUb2FzdHM7XG4gIGV4cG9ydHMuVG9kb0xpc3QgPSBUb2RvTGlzdDtcbiAgZXhwb3J0cy5UcmVldmlldyA9IFRyZWV2aWV3O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZG1pbmx0ZS5qcy5tYXBcbiIsIi8qKlxuICogQWRtaW5MVEUgRGVtbyBNZW51XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFlvdSBzaG91bGQgbm90IHVzZSB0aGlzIGZpbGUgaW4gcHJvZHVjdGlvbi5cbiAqIFRoaXMgZmlsZSBpcyBmb3IgZGVtbyBwdXJwb3NlcyBvbmx5LlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuXG4oZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgdmFyICRzaWRlYmFyID0gJCgnLmNvbnRyb2wtc2lkZWJhcicpXG4gIHZhciAkY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHtcbiAgICBjbGFzczogJ3AtMyBjb250cm9sLXNpZGViYXItY29udGVudCdcbiAgfSlcblxuICAkc2lkZWJhci5hcHBlbmQoJGNvbnRhaW5lcilcblxuICB2YXIgbmF2YmFyX2Rhcmtfc2tpbnMgPSBbXG4gICAgJ25hdmJhci1wcmltYXJ5JyxcbiAgICAnbmF2YmFyLXNlY29uZGFyeScsXG4gICAgJ25hdmJhci1pbmZvJyxcbiAgICAnbmF2YmFyLXN1Y2Nlc3MnLFxuICAgICduYXZiYXItZGFuZ2VyJyxcbiAgICAnbmF2YmFyLWluZGlnbycsXG4gICAgJ25hdmJhci1wdXJwbGUnLFxuICAgICduYXZiYXItcGluaycsXG4gICAgJ25hdmJhci1uYXZ5JyxcbiAgICAnbmF2YmFyLWxpZ2h0Ymx1ZScsXG4gICAgJ25hdmJhci10ZWFsJyxcbiAgICAnbmF2YmFyLWN5YW4nLFxuICAgICduYXZiYXItZGFyaycsXG4gICAgJ25hdmJhci1ncmF5LWRhcmsnLFxuICAgICduYXZiYXItZ3JheSdcbiAgXVxuXG4gIHZhciBuYXZiYXJfbGlnaHRfc2tpbnMgPSBbXG4gICAgJ25hdmJhci1saWdodCcsXG4gICAgJ25hdmJhci13YXJuaW5nJyxcbiAgICAnbmF2YmFyLXdoaXRlJyxcbiAgICAnbmF2YmFyLW9yYW5nZSdcbiAgXVxuXG4gICRjb250YWluZXIuYXBwZW5kKFxuICAgICc8aDU+Q3VzdG9taXplIEFkbWluTFRFPC9oNT48aHIgY2xhc3M9XCJtYi0yXCIvPidcbiAgKVxuXG4gIHZhciAkbm9fYm9yZGVyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnLm1haW4taGVhZGVyJykuaGFzQ2xhc3MoJ2JvcmRlci1ib3R0b20tMCcpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5hZGRDbGFzcygnYm9yZGVyLWJvdHRvbS0wJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2JvcmRlci1ib3R0b20tMCcpXG4gICAgfVxuICB9KVxuICB2YXIgJG5vX2JvcmRlcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkbm9fYm9yZGVyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPk5vIE5hdmJhciBib3JkZXI8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJG5vX2JvcmRlcl9jb250YWluZXIpXG5cbiAgdmFyICR0ZXh0X3NtX2JvZHlfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCdib2R5JykuaGFzQ2xhc3MoJ3RleHQtc20nKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCd0ZXh0LXNtJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCd0ZXh0LXNtJylcbiAgICB9XG4gIH0pXG4gIHZhciAkdGV4dF9zbV9ib2R5X2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCR0ZXh0X3NtX2JvZHlfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+Qm9keSBzbWFsbCB0ZXh0PC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCR0ZXh0X3NtX2JvZHlfY29udGFpbmVyKVxuXG4gIHZhciAkdGV4dF9zbV9oZWFkZXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCcubWFpbi1oZWFkZXInKS5oYXNDbGFzcygndGV4dC1zbScpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5hZGRDbGFzcygndGV4dC1zbScpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5tYWluLWhlYWRlcicpLnJlbW92ZUNsYXNzKCd0ZXh0LXNtJylcbiAgICB9XG4gIH0pXG4gIHZhciAkdGV4dF9zbV9oZWFkZXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJHRleHRfc21faGVhZGVyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPk5hdmJhciBzbWFsbCB0ZXh0PC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCR0ZXh0X3NtX2hlYWRlcl9jb250YWluZXIpXG5cbiAgdmFyICR0ZXh0X3NtX3NpZGViYXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCcubmF2LXNpZGViYXInKS5oYXNDbGFzcygndGV4dC1zbScpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5hZGRDbGFzcygndGV4dC1zbScpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLnJlbW92ZUNsYXNzKCd0ZXh0LXNtJylcbiAgICB9XG4gIH0pXG4gIHZhciAkdGV4dF9zbV9zaWRlYmFyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCR0ZXh0X3NtX3NpZGViYXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+U2lkZWJhciBuYXYgc21hbGwgdGV4dDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkdGV4dF9zbV9zaWRlYmFyX2NvbnRhaW5lcilcblxuICB2YXIgJHRleHRfc21fZm9vdGVyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnLm1haW4tZm9vdGVyJykuaGFzQ2xhc3MoJ3RleHQtc20nKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm1haW4tZm9vdGVyJykuYWRkQ2xhc3MoJ3RleHQtc20nKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWFpbi1mb290ZXInKS5yZW1vdmVDbGFzcygndGV4dC1zbScpXG4gICAgfVxuICB9KVxuICB2YXIgJHRleHRfc21fZm9vdGVyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCR0ZXh0X3NtX2Zvb3Rlcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5Gb290ZXIgc21hbGwgdGV4dDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkdGV4dF9zbV9mb290ZXJfY29udGFpbmVyKVxuXG4gIHZhciAkZmxhdF9zaWRlYmFyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnLm5hdi1zaWRlYmFyJykuaGFzQ2xhc3MoJ25hdi1mbGF0JyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLmFkZENsYXNzKCduYXYtZmxhdCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLnJlbW92ZUNsYXNzKCduYXYtZmxhdCcpXG4gICAgfVxuICB9KVxuICB2YXIgJGZsYXRfc2lkZWJhcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkZmxhdF9zaWRlYmFyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPlNpZGViYXIgbmF2IGZsYXQgc3R5bGU8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJGZsYXRfc2lkZWJhcl9jb250YWluZXIpXG5cbiAgdmFyICRsZWdhY3lfc2lkZWJhcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5uYXYtc2lkZWJhcicpLmhhc0NsYXNzKCduYXYtbGVnYWN5JyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLmFkZENsYXNzKCduYXYtbGVnYWN5JylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ25hdi1sZWdhY3knKVxuICAgIH1cbiAgfSlcbiAgdmFyICRsZWdhY3lfc2lkZWJhcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkbGVnYWN5X3NpZGViYXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+U2lkZWJhciBuYXYgbGVnYWN5IHN0eWxlPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRsZWdhY3lfc2lkZWJhcl9jb250YWluZXIpXG5cbiAgdmFyICRjb21wYWN0X3NpZGViYXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCcubmF2LXNpZGViYXInKS5oYXNDbGFzcygnbmF2LWNvbXBhY3QnKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykuYWRkQ2xhc3MoJ25hdi1jb21wYWN0JylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ25hdi1jb21wYWN0JylcbiAgICB9XG4gIH0pXG4gIHZhciAkY29tcGFjdF9zaWRlYmFyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCRjb21wYWN0X3NpZGViYXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+U2lkZWJhciBuYXYgY29tcGFjdDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkY29tcGFjdF9zaWRlYmFyX2NvbnRhaW5lcilcblxuICB2YXIgJGNoaWxkX2luZGVudF9zaWRlYmFyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnLm5hdi1zaWRlYmFyJykuaGFzQ2xhc3MoJ25hdi1jaGlsZC1pbmRlbnQnKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykuYWRkQ2xhc3MoJ25hdi1jaGlsZC1pbmRlbnQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5yZW1vdmVDbGFzcygnbmF2LWNoaWxkLWluZGVudCcpXG4gICAgfVxuICB9KVxuICB2YXIgJGNoaWxkX2luZGVudF9zaWRlYmFyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCRjaGlsZF9pbmRlbnRfc2lkZWJhcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5TaWRlYmFyIG5hdiBjaGlsZCBpbmRlbnQ8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJGNoaWxkX2luZGVudF9zaWRlYmFyX2NvbnRhaW5lcilcblxuICB2YXIgJGNoaWxkX2hpZGVfc2lkZWJhcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5uYXYtc2lkZWJhcicpLmhhc0NsYXNzKCduYXYtY29sbGFwc2UtaGlkZS1jaGlsZCcpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5hZGRDbGFzcygnbmF2LWNvbGxhcHNlLWhpZGUtY2hpbGQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5yZW1vdmVDbGFzcygnbmF2LWNvbGxhcHNlLWhpZGUtY2hpbGQnKVxuICAgIH1cbiAgfSlcbiAgdmFyICRjaGlsZF9oaWRlX3NpZGViYXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJGNoaWxkX2hpZGVfc2lkZWJhcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5TaWRlYmFyIG5hdiBjaGlsZCBoaWRlIG9uIGNvbGxhcHNlPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRjaGlsZF9oaWRlX3NpZGViYXJfY29udGFpbmVyKVxuXG4gIHZhciAkbm9fZXhwYW5kX3NpZGViYXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCcubWFpbi1zaWRlYmFyJykuaGFzQ2xhc3MoJ3NpZGViYXItbm8tZXhwYW5kJyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5tYWluLXNpZGViYXInKS5hZGRDbGFzcygnc2lkZWJhci1uby1leHBhbmQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWFpbi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ3NpZGViYXItbm8tZXhwYW5kJylcbiAgICB9XG4gIH0pXG4gIHZhciAkbm9fZXhwYW5kX3NpZGViYXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJG5vX2V4cGFuZF9zaWRlYmFyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPk1haW4gU2lkZWJhciBkaXNhYmxlIGhvdmVyL2ZvY3VzIGF1dG8gZXhwYW5kPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRub19leHBhbmRfc2lkZWJhcl9jb250YWluZXIpXG5cbiAgdmFyICR0ZXh0X3NtX2JyYW5kX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnLmJyYW5kLWxpbmsnKS5oYXNDbGFzcygndGV4dC1zbScpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcuYnJhbmQtbGluaycpLmFkZENsYXNzKCd0ZXh0LXNtJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLmJyYW5kLWxpbmsnKS5yZW1vdmVDbGFzcygndGV4dC1zbScpXG4gICAgfVxuICB9KVxuICB2YXIgJHRleHRfc21fYnJhbmRfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJHRleHRfc21fYnJhbmRfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+QnJhbmQgc21hbGwgdGV4dDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkdGV4dF9zbV9icmFuZF9jb250YWluZXIpXG5cbiAgdmFyICRkYXJrX21vZGVfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCdib2R5JykuaGFzQ2xhc3MoJ2RhcmstbW9kZScpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2RhcmstbW9kZScpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnZGFyay1tb2RlJylcbiAgICB9XG4gIH0pXG4gIHZhciAkZGFya19tb2RlX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItNCcgfSkuYXBwZW5kKCRkYXJrX21vZGVfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+RGFyayBNb2RlPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRkYXJrX21vZGVfY29udGFpbmVyKVxuXG4gICRjb250YWluZXIuYXBwZW5kKCc8aDY+TmF2YmFyIFZhcmlhbnRzPC9oNj4nKVxuXG4gIHZhciAkbmF2YmFyX3ZhcmlhbnRzID0gJCgnPGRpdiAvPicsIHtcbiAgICBjbGFzczogJ2QtZmxleCdcbiAgfSlcbiAgdmFyIG5hdmJhcl9hbGxfY29sb3JzID0gbmF2YmFyX2Rhcmtfc2tpbnMuY29uY2F0KG5hdmJhcl9saWdodF9za2lucylcbiAgdmFyICRuYXZiYXJfdmFyaWFudHNfY29sb3JzID0gY3JlYXRlU2tpbkJsb2NrKG5hdmJhcl9hbGxfY29sb3JzLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yID0gJCh0aGlzKS5kYXRhKCdjb2xvcicpXG4gICAgdmFyICRtYWluX2hlYWRlciA9ICQoJy5tYWluLWhlYWRlcicpXG4gICAgJG1haW5faGVhZGVyLnJlbW92ZUNsYXNzKCduYXZiYXItZGFyaycpLnJlbW92ZUNsYXNzKCduYXZiYXItbGlnaHQnKVxuICAgIG5hdmJhcl9hbGxfY29sb3JzLmZvckVhY2goZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICAkbWFpbl9oZWFkZXIucmVtb3ZlQ2xhc3MoY29sb3IpXG4gICAgfSlcblxuICAgIGlmIChuYXZiYXJfZGFya19za2lucy5pbmRleE9mKGNvbG9yKSA+IC0xKSB7XG4gICAgICAkbWFpbl9oZWFkZXIuYWRkQ2xhc3MoJ25hdmJhci1kYXJrJylcbiAgICB9IGVsc2Uge1xuICAgICAgJG1haW5faGVhZGVyLmFkZENsYXNzKCduYXZiYXItbGlnaHQnKVxuICAgIH1cblxuICAgICRtYWluX2hlYWRlci5hZGRDbGFzcyhjb2xvcilcbiAgfSlcblxuICAkbmF2YmFyX3ZhcmlhbnRzLmFwcGVuZCgkbmF2YmFyX3ZhcmlhbnRzX2NvbG9ycylcblxuICAkY29udGFpbmVyLmFwcGVuZCgkbmF2YmFyX3ZhcmlhbnRzKVxuXG4gIHZhciBzaWRlYmFyX2NvbG9ycyA9IFtcbiAgICAnYmctcHJpbWFyeScsXG4gICAgJ2JnLXdhcm5pbmcnLFxuICAgICdiZy1pbmZvJyxcbiAgICAnYmctZGFuZ2VyJyxcbiAgICAnYmctc3VjY2VzcycsXG4gICAgJ2JnLWluZGlnbycsXG4gICAgJ2JnLWxpZ2h0Ymx1ZScsXG4gICAgJ2JnLW5hdnknLFxuICAgICdiZy1wdXJwbGUnLFxuICAgICdiZy1mdWNoc2lhJyxcbiAgICAnYmctcGluaycsXG4gICAgJ2JnLW1hcm9vbicsXG4gICAgJ2JnLW9yYW5nZScsXG4gICAgJ2JnLWxpbWUnLFxuICAgICdiZy10ZWFsJyxcbiAgICAnYmctb2xpdmUnXG4gIF1cblxuICB2YXIgYWNjZW50X2NvbG9ycyA9IFtcbiAgICAnYWNjZW50LXByaW1hcnknLFxuICAgICdhY2NlbnQtd2FybmluZycsXG4gICAgJ2FjY2VudC1pbmZvJyxcbiAgICAnYWNjZW50LWRhbmdlcicsXG4gICAgJ2FjY2VudC1zdWNjZXNzJyxcbiAgICAnYWNjZW50LWluZGlnbycsXG4gICAgJ2FjY2VudC1saWdodGJsdWUnLFxuICAgICdhY2NlbnQtbmF2eScsXG4gICAgJ2FjY2VudC1wdXJwbGUnLFxuICAgICdhY2NlbnQtZnVjaHNpYScsXG4gICAgJ2FjY2VudC1waW5rJyxcbiAgICAnYWNjZW50LW1hcm9vbicsXG4gICAgJ2FjY2VudC1vcmFuZ2UnLFxuICAgICdhY2NlbnQtbGltZScsXG4gICAgJ2FjY2VudC10ZWFsJyxcbiAgICAnYWNjZW50LW9saXZlJ1xuICBdXG5cbiAgdmFyIHNpZGViYXJfc2tpbnMgPSBbXG4gICAgJ3NpZGViYXItZGFyay1wcmltYXJ5JyxcbiAgICAnc2lkZWJhci1kYXJrLXdhcm5pbmcnLFxuICAgICdzaWRlYmFyLWRhcmstaW5mbycsXG4gICAgJ3NpZGViYXItZGFyay1kYW5nZXInLFxuICAgICdzaWRlYmFyLWRhcmstc3VjY2VzcycsXG4gICAgJ3NpZGViYXItZGFyay1pbmRpZ28nLFxuICAgICdzaWRlYmFyLWRhcmstbGlnaHRibHVlJyxcbiAgICAnc2lkZWJhci1kYXJrLW5hdnknLFxuICAgICdzaWRlYmFyLWRhcmstcHVycGxlJyxcbiAgICAnc2lkZWJhci1kYXJrLWZ1Y2hzaWEnLFxuICAgICdzaWRlYmFyLWRhcmstcGluaycsXG4gICAgJ3NpZGViYXItZGFyay1tYXJvb24nLFxuICAgICdzaWRlYmFyLWRhcmstb3JhbmdlJyxcbiAgICAnc2lkZWJhci1kYXJrLWxpbWUnLFxuICAgICdzaWRlYmFyLWRhcmstdGVhbCcsXG4gICAgJ3NpZGViYXItZGFyay1vbGl2ZScsXG4gICAgJ3NpZGViYXItbGlnaHQtcHJpbWFyeScsXG4gICAgJ3NpZGViYXItbGlnaHQtd2FybmluZycsXG4gICAgJ3NpZGViYXItbGlnaHQtaW5mbycsXG4gICAgJ3NpZGViYXItbGlnaHQtZGFuZ2VyJyxcbiAgICAnc2lkZWJhci1saWdodC1zdWNjZXNzJyxcbiAgICAnc2lkZWJhci1saWdodC1pbmRpZ28nLFxuICAgICdzaWRlYmFyLWxpZ2h0LWxpZ2h0Ymx1ZScsXG4gICAgJ3NpZGViYXItbGlnaHQtbmF2eScsXG4gICAgJ3NpZGViYXItbGlnaHQtcHVycGxlJyxcbiAgICAnc2lkZWJhci1saWdodC1mdWNoc2lhJyxcbiAgICAnc2lkZWJhci1saWdodC1waW5rJyxcbiAgICAnc2lkZWJhci1saWdodC1tYXJvb24nLFxuICAgICdzaWRlYmFyLWxpZ2h0LW9yYW5nZScsXG4gICAgJ3NpZGViYXItbGlnaHQtbGltZScsXG4gICAgJ3NpZGViYXItbGlnaHQtdGVhbCcsXG4gICAgJ3NpZGViYXItbGlnaHQtb2xpdmUnXG4gIF1cblxuICAkY29udGFpbmVyLmFwcGVuZCgnPGg2PkFjY2VudCBDb2xvciBWYXJpYW50czwvaDY+JylcbiAgdmFyICRhY2NlbnRfdmFyaWFudHMgPSAkKCc8ZGl2IC8+Jywge1xuICAgIGNsYXNzOiAnZC1mbGV4J1xuICB9KVxuICAkY29udGFpbmVyLmFwcGVuZCgkYWNjZW50X3ZhcmlhbnRzKVxuICAkY29udGFpbmVyLmFwcGVuZChjcmVhdGVTa2luQmxvY2soYWNjZW50X2NvbG9ycywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb2xvciA9ICQodGhpcykuZGF0YSgnY29sb3InKVxuICAgIHZhciBhY2NlbnRfY2xhc3MgPSBjb2xvclxuICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKVxuICAgIGFjY2VudF9jb2xvcnMuZm9yRWFjaChmdW5jdGlvbiAoc2tpbikge1xuICAgICAgJGJvZHkucmVtb3ZlQ2xhc3Moc2tpbilcbiAgICB9KVxuXG4gICAgJGJvZHkuYWRkQ2xhc3MoYWNjZW50X2NsYXNzKVxuICB9KSlcblxuICAkY29udGFpbmVyLmFwcGVuZCgnPGg2PkRhcmsgU2lkZWJhciBWYXJpYW50czwvaDY+JylcbiAgdmFyICRzaWRlYmFyX3ZhcmlhbnRzX2RhcmsgPSAkKCc8ZGl2IC8+Jywge1xuICAgIGNsYXNzOiAnZC1mbGV4J1xuICB9KVxuICAkY29udGFpbmVyLmFwcGVuZCgkc2lkZWJhcl92YXJpYW50c19kYXJrKVxuICAkY29udGFpbmVyLmFwcGVuZChjcmVhdGVTa2luQmxvY2soc2lkZWJhcl9jb2xvcnMsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcbiAgICB2YXIgc2lkZWJhcl9jbGFzcyA9ICdzaWRlYmFyLWRhcmstJyArIGNvbG9yLnJlcGxhY2UoJ2JnLScsICcnKVxuICAgIHZhciAkc2lkZWJhciA9ICQoJy5tYWluLXNpZGViYXInKVxuICAgIHNpZGViYXJfc2tpbnMuZm9yRWFjaChmdW5jdGlvbiAoc2tpbikge1xuICAgICAgJHNpZGViYXIucmVtb3ZlQ2xhc3Moc2tpbilcbiAgICB9KVxuXG4gICAgJHNpZGViYXIuYWRkQ2xhc3Moc2lkZWJhcl9jbGFzcylcbiAgfSkpXG5cbiAgJGNvbnRhaW5lci5hcHBlbmQoJzxoNj5MaWdodCBTaWRlYmFyIFZhcmlhbnRzPC9oNj4nKVxuICB2YXIgJHNpZGViYXJfdmFyaWFudHNfbGlnaHQgPSAkKCc8ZGl2IC8+Jywge1xuICAgIGNsYXNzOiAnZC1mbGV4J1xuICB9KVxuICAkY29udGFpbmVyLmFwcGVuZCgkc2lkZWJhcl92YXJpYW50c19saWdodClcbiAgJGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlU2tpbkJsb2NrKHNpZGViYXJfY29sb3JzLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yID0gJCh0aGlzKS5kYXRhKCdjb2xvcicpXG4gICAgdmFyIHNpZGViYXJfY2xhc3MgPSAnc2lkZWJhci1saWdodC0nICsgY29sb3IucmVwbGFjZSgnYmctJywgJycpXG4gICAgdmFyICRzaWRlYmFyID0gJCgnLm1haW4tc2lkZWJhcicpXG4gICAgc2lkZWJhcl9za2lucy5mb3JFYWNoKGZ1bmN0aW9uIChza2luKSB7XG4gICAgICAkc2lkZWJhci5yZW1vdmVDbGFzcyhza2luKVxuICAgIH0pXG5cbiAgICAkc2lkZWJhci5hZGRDbGFzcyhzaWRlYmFyX2NsYXNzKVxuICB9KSlcblxuICB2YXIgbG9nb19za2lucyA9IG5hdmJhcl9hbGxfY29sb3JzXG4gICRjb250YWluZXIuYXBwZW5kKCc8aDY+QnJhbmQgTG9nbyBWYXJpYW50czwvaDY+JylcbiAgdmFyICRsb2dvX3ZhcmlhbnRzID0gJCgnPGRpdiAvPicsIHtcbiAgICBjbGFzczogJ2QtZmxleCdcbiAgfSlcbiAgJGNvbnRhaW5lci5hcHBlbmQoJGxvZ29fdmFyaWFudHMpXG4gIHZhciAkY2xlYXJfYnRuID0gJCgnPGEgLz4nLCB7XG4gICAgaHJlZjogJyMnXG4gIH0pLnRleHQoJ2NsZWFyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB2YXIgJGxvZ28gPSAkKCcuYnJhbmQtbGluaycpXG4gICAgbG9nb19za2lucy5mb3JFYWNoKGZ1bmN0aW9uIChza2luKSB7XG4gICAgICAkbG9nby5yZW1vdmVDbGFzcyhza2luKVxuICAgIH0pXG4gIH0pXG4gICRjb250YWluZXIuYXBwZW5kKGNyZWF0ZVNraW5CbG9jayhsb2dvX3NraW5zLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yID0gJCh0aGlzKS5kYXRhKCdjb2xvcicpXG4gICAgdmFyICRsb2dvID0gJCgnLmJyYW5kLWxpbmsnKVxuICAgIGxvZ29fc2tpbnMuZm9yRWFjaChmdW5jdGlvbiAoc2tpbikge1xuICAgICAgJGxvZ28ucmVtb3ZlQ2xhc3Moc2tpbilcbiAgICB9KVxuICAgICRsb2dvLmFkZENsYXNzKGNvbG9yKVxuICB9KS5hcHBlbmQoJGNsZWFyX2J0bikpXG5cbiAgZnVuY3Rpb24gY3JlYXRlU2tpbkJsb2NrKGNvbG9ycywgY2FsbGJhY2spIHtcbiAgICB2YXIgJGJsb2NrID0gJCgnPGRpdiAvPicsIHtcbiAgICAgIGNsYXNzOiAnZC1mbGV4IGZsZXgtd3JhcCBtYi0zJ1xuICAgIH0pXG5cbiAgICBjb2xvcnMuZm9yRWFjaChmdW5jdGlvbiAoY29sb3IpIHtcbiAgICAgIHZhciAkY29sb3IgPSAkKCc8ZGl2IC8+Jywge1xuICAgICAgICBjbGFzczogKHR5cGVvZiBjb2xvciA9PT0gJ29iamVjdCcgPyBjb2xvci5qb2luKCcgJykgOiBjb2xvcikucmVwbGFjZSgnbmF2YmFyLScsICdiZy0nKS5yZXBsYWNlKCdhY2NlbnQtJywgJ2JnLScpICsgJyBlbGV2YXRpb24tMidcbiAgICAgIH0pXG5cbiAgICAgICRibG9jay5hcHBlbmQoJGNvbG9yKVxuXG4gICAgICAkY29sb3IuZGF0YSgnY29sb3InLCBjb2xvcilcblxuICAgICAgJGNvbG9yLmNzcyh7XG4gICAgICAgIHdpZHRoOiAnNDBweCcsXG4gICAgICAgIGhlaWdodDogJzIwcHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcyNXB4JyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDEwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgICAgICBvcGFjaXR5OiAwLjgsXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICB9KVxuXG4gICAgICAkY29sb3IuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNzcyh7IG9wYWNpdHk6IDEgfSkucmVtb3ZlQ2xhc3MoJ2VsZXZhdGlvbi0yJykuYWRkQ2xhc3MoJ2VsZXZhdGlvbi00JylcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jc3MoeyBvcGFjaXR5OiAwLjggfSkucmVtb3ZlQ2xhc3MoJ2VsZXZhdGlvbi00JykuYWRkQ2xhc3MoJ2VsZXZhdGlvbi0yJylcbiAgICAgIH0pXG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAkY29sb3Iub24oJ2NsaWNrJywgY2FsbGJhY2spXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAkYmxvY2tcbiAgfVxuXG4gICQoJy5wcm9kdWN0LWltYWdlLXRodW1iJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbWFnZV9lbGVtZW50ID0gJCh0aGlzKS5maW5kKCdpbWcnKVxuICAgICQoJy5wcm9kdWN0LWltYWdlJykucHJvcCgnc3JjJywgJChpbWFnZV9lbGVtZW50KS5hdHRyKCdzcmMnKSlcbiAgICAkKCcucHJvZHVjdC1pbWFnZS10aHVtYi5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKVxuICB9KVxufSkoalF1ZXJ5KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==