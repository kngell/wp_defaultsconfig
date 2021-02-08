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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvbWFpbi9iYWNrZW5kL2FkbWluL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wbHVnaW5zL2FkbWlubHRlL2FkbWlubHRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGx1Z2lucy9hZG1pbmx0ZS9kZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBNEQsb0JBQW9CLG1CQUFPLENBQUMsb0RBQVE7QUFDbEcsRUFBRSxDQUN3SDtBQUMxSCxDQUFDLCtCQUErQjs7QUFFaEMsc0NBQXNDLDREQUE0RCxnQkFBZ0I7O0FBRWxIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0Q7QUFDdEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJGQUEyRix1REFBdUQsc0JBQXNCO0FBQ3hLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELHlCQUF5Qjs7QUFFaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BELEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOEZBQThGLGFBQWE7QUFDM0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5TUFBeU07O0FBRXpNO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNEQUFzRDs7QUFFdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxjQUFjOztBQUU5RCxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7OztBQ3ByRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsMkNBQTJDLGdCQUFnQjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCw4Q0FBOEMsZ0JBQWdCO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILGdEQUFnRCxnQkFBZ0I7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsaURBQWlELGdCQUFnQjtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCxnREFBZ0QsZ0JBQWdCO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILDhDQUE4QyxnQkFBZ0I7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsZ0RBQWdELGdCQUFnQjtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCxpREFBaUQsZ0JBQWdCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILHNEQUFzRCxnQkFBZ0I7QUFDdEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsb0RBQW9ELGdCQUFnQjtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCxtREFBbUQsZ0JBQWdCO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILCtDQUErQyxnQkFBZ0I7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsMkNBQTJDLGdCQUFnQjtBQUMzRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQyxPQUFPO0FBQ1AscUJBQXFCLGVBQWU7QUFDcEMsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEVBQUUsTUFBTSIsImZpbGUiOiJqcy9tYWluL2JhY2tlbmQvYWRtaW4vbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJpbXBvcnQgXCJwbHVnaW5zL2FkbWlubHRlL2FkbWlubHRlXCI7XHJcbmltcG9ydCBcInBsdWdpbnMvYWRtaW5sdGUvZGVtb1wiO1xyXG4iLCIvKiFcbiAqIEFkbWluTFRFIHYzLjEuMC1yYyAoaHR0cHM6Ly9hZG1pbmx0ZS5pbylcbiAqIENvcHlyaWdodCAyMDE0LTIwMjAgQ29sb3JsaWIgPGh0dHBzOi8vY29sb3JsaWIuY29tPlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vQ29sb3JsaWJIUS9BZG1pbkxURS9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ2pxdWVyeScpKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnLCAnanF1ZXJ5J10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwuYWRtaW5sdGUgPSB7fSwgZ2xvYmFsLmpRdWVyeSkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMsICQpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdExlZ2FjeSAoZSkgeyByZXR1cm4gZSAmJiB0eXBlb2YgZSA9PT0gJ29iamVjdCcgJiYgJ2RlZmF1bHQnIGluIGUgPyBlIDogeyAnZGVmYXVsdCc6IGUgfTsgfVxuXG4gIHZhciAkX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeSgkKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQWRtaW5MVEUgQ2FyZFJlZnJlc2guanNcbiAgICogTGljZW5zZSBNSVRcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICB2YXIgTkFNRSA9ICdDYXJkUmVmcmVzaCc7XG4gIHZhciBEQVRBX0tFWSA9ICdsdGUuY2FyZHJlZnJlc2gnO1xuICB2YXIgRVZFTlRfS0VZID0gXCIuXCIgKyBEQVRBX0tFWTtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FXTtcbiAgdmFyIEVWRU5UX0xPQURFRCA9IFwibG9hZGVkXCIgKyBFVkVOVF9LRVk7XG4gIHZhciBFVkVOVF9PVkVSTEFZX0FEREVEID0gXCJvdmVybGF5LmFkZGVkXCIgKyBFVkVOVF9LRVk7XG4gIHZhciBFVkVOVF9PVkVSTEFZX1JFTU9WRUQgPSBcIm92ZXJsYXkucmVtb3ZlZFwiICsgRVZFTlRfS0VZO1xuICB2YXIgQ0xBU1NfTkFNRV9DQVJEID0gJ2NhcmQnO1xuICB2YXIgU0VMRUNUT1JfQ0FSRCA9IFwiLlwiICsgQ0xBU1NfTkFNRV9DQVJEO1xuICB2YXIgU0VMRUNUT1JfREFUQV9SRUZSRVNIID0gJ1tkYXRhLWNhcmQtd2lkZ2V0PVwiY2FyZC1yZWZyZXNoXCJdJztcbiAgdmFyIERlZmF1bHQgPSB7XG4gICAgc291cmNlOiAnJyxcbiAgICBzb3VyY2VTZWxlY3RvcjogJycsXG4gICAgcGFyYW1zOiB7fSxcbiAgICB0cmlnZ2VyOiBTRUxFQ1RPUl9EQVRBX1JFRlJFU0gsXG4gICAgY29udGVudDogJy5jYXJkLWJvZHknLFxuICAgIGxvYWRJbkNvbnRlbnQ6IHRydWUsXG4gICAgbG9hZE9uSW5pdDogdHJ1ZSxcbiAgICByZXNwb25zZVR5cGU6ICcnLFxuICAgIG92ZXJsYXlUZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PGkgY2xhc3M9XCJmYXMgZmEtMnggZmEtc3luYy1hbHQgZmEtc3BpblwiPjwvaT48L2Rpdj4nLFxuICAgIG9uTG9hZFN0YXJ0OiBmdW5jdGlvbiBvbkxvYWRTdGFydCgpIHt9LFxuICAgIG9uTG9hZERvbmU6IGZ1bmN0aW9uIG9uTG9hZERvbmUocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIENhcmRSZWZyZXNoID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYXJkUmVmcmVzaChlbGVtZW50LCBzZXR0aW5ncykge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50LnBhcmVudHMoU0VMRUNUT1JfQ0FSRCkuZmlyc3QoKTtcbiAgICAgIHRoaXMuX3NldHRpbmdzID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmV4dGVuZCh7fSwgRGVmYXVsdCwgc2V0dGluZ3MpO1xuICAgICAgdGhpcy5fb3ZlcmxheSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9zZXR0aW5ncy5vdmVybGF5VGVtcGxhdGUpO1xuXG4gICAgICBpZiAoZWxlbWVudC5oYXNDbGFzcyhDTEFTU19OQU1FX0NBUkQpKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zb3VyY2UgPT09ICcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU291cmNlIHVybCB3YXMgbm90IGRlZmluZWQuIFBsZWFzZSBzcGVjaWZ5IGEgdXJsIGluIHlvdXIgQ2FyZFJlZnJlc2ggc291cmNlIG9wdGlvbi4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX3Byb3RvID0gQ2FyZFJlZnJlc2gucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvLmxvYWQgPSBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5fYWRkT3ZlcmxheSgpO1xuXG4gICAgICB0aGlzLl9zZXR0aW5ncy5vbkxvYWRTdGFydC5jYWxsKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKSk7XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5nZXQodGhpcy5fc2V0dGluZ3Muc291cmNlLCB0aGlzLl9zZXR0aW5ncy5wYXJhbXMsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBpZiAoX3RoaXMuX3NldHRpbmdzLmxvYWRJbkNvbnRlbnQpIHtcbiAgICAgICAgICBpZiAoX3RoaXMuX3NldHRpbmdzLnNvdXJjZVNlbGVjdG9yICE9PSAnJykge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSAkX19kZWZhdWx0WydkZWZhdWx0J10ocmVzcG9uc2UpLmZpbmQoX3RoaXMuX3NldHRpbmdzLnNvdXJjZVNlbGVjdG9yKS5odG1sKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMuX3BhcmVudC5maW5kKF90aGlzLl9zZXR0aW5ncy5jb250ZW50KS5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLl9zZXR0aW5ncy5vbkxvYWREb25lLmNhbGwoJF9fZGVmYXVsdFsnZGVmYXVsdCddKF90aGlzKSwgcmVzcG9uc2UpO1xuXG4gICAgICAgIF90aGlzLl9yZW1vdmVPdmVybGF5KCk7XG4gICAgICB9LCB0aGlzLl9zZXR0aW5ncy5yZXNwb25zZVR5cGUgIT09ICcnICYmIHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlVHlwZSk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkudHJpZ2dlcigkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfTE9BREVEKSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fYWRkT3ZlcmxheSA9IGZ1bmN0aW9uIF9hZGRPdmVybGF5KCkge1xuICAgICAgdGhpcy5fcGFyZW50LmFwcGVuZCh0aGlzLl9vdmVybGF5KTtcblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX09WRVJMQVlfQURERUQpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9yZW1vdmVPdmVybGF5ID0gZnVuY3Rpb24gX3JlbW92ZU92ZXJsYXkoKSB7XG4gICAgICB0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9vdmVybGF5KS5yZW1vdmUoKTtcblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX09WRVJMQVlfUkVNT1ZFRCkpO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5faW5pdCA9IGZ1bmN0aW9uIF9pbml0KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5maW5kKHRoaXMuX3NldHRpbmdzLnRyaWdnZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLmxvYWQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5fc2V0dGluZ3MubG9hZE9uSW5pdCkge1xuICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgIH1cbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIENhcmRSZWZyZXNoLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgdmFyIGRhdGEgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgIHZhciBfb3B0aW9ucyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5leHRlbmQoe30sIERlZmF1bHQsICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKCkpO1xuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBDYXJkUmVmcmVzaCgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyksIF9vcHRpb25zKTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVksIHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnID8gZGF0YSA6IGNvbmZpZyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiBjb25maWcubWF0Y2goL2xvYWQvKSkge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEuX2luaXQoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIENhcmRSZWZyZXNoO1xuICB9KCk7XG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vbignY2xpY2snLCBTRUxFQ1RPUl9EQVRBX1JFRlJFU0gsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLCAnbG9hZCcpO1xuICB9KTtcbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGZ1bmN0aW9uICgpIHtcbiAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfREFUQV9SRUZSRVNIKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIENhcmRSZWZyZXNoLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykpO1xuICAgIH0pO1xuICB9KTtcbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRV0gPSBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBDYXJkUmVmcmVzaDtcblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgcmV0dXJuIENhcmRSZWZyZXNoLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIENhcmRXaWRnZXQuanNcbiAgICogTGljZW5zZSBNSVRcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICB2YXIgTkFNRSQxID0gJ0NhcmRXaWRnZXQnO1xuICB2YXIgREFUQV9LRVkkMSA9ICdsdGUuY2FyZHdpZGdldCc7XG4gIHZhciBFVkVOVF9LRVkkMSA9IFwiLlwiICsgREFUQV9LRVkkMTtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQxID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkMV07XG4gIHZhciBFVkVOVF9FWFBBTkRFRCA9IFwiZXhwYW5kZWRcIiArIEVWRU5UX0tFWSQxO1xuICB2YXIgRVZFTlRfQ09MTEFQU0VEID0gXCJjb2xsYXBzZWRcIiArIEVWRU5UX0tFWSQxO1xuICB2YXIgRVZFTlRfTUFYSU1JWkVEID0gXCJtYXhpbWl6ZWRcIiArIEVWRU5UX0tFWSQxO1xuICB2YXIgRVZFTlRfTUlOSU1JWkVEID0gXCJtaW5pbWl6ZWRcIiArIEVWRU5UX0tFWSQxO1xuICB2YXIgRVZFTlRfUkVNT1ZFRCA9IFwicmVtb3ZlZFwiICsgRVZFTlRfS0VZJDE7XG4gIHZhciBDTEFTU19OQU1FX0NBUkQkMSA9ICdjYXJkJztcbiAgdmFyIENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZC1jYXJkJztcbiAgdmFyIENMQVNTX05BTUVfQ09MTEFQU0lORyA9ICdjb2xsYXBzaW5nLWNhcmQnO1xuICB2YXIgQ0xBU1NfTkFNRV9FWFBBTkRJTkcgPSAnZXhwYW5kaW5nLWNhcmQnO1xuICB2YXIgQ0xBU1NfTkFNRV9XQVNfQ09MTEFQU0VEID0gJ3dhcy1jb2xsYXBzZWQnO1xuICB2YXIgQ0xBU1NfTkFNRV9NQVhJTUlaRUQgPSAnbWF4aW1pemVkLWNhcmQnO1xuICB2YXIgU0VMRUNUT1JfREFUQV9SRU1PVkUgPSAnW2RhdGEtY2FyZC13aWRnZXQ9XCJyZW1vdmVcIl0nO1xuICB2YXIgU0VMRUNUT1JfREFUQV9DT0xMQVBTRSA9ICdbZGF0YS1jYXJkLXdpZGdldD1cImNvbGxhcHNlXCJdJztcbiAgdmFyIFNFTEVDVE9SX0RBVEFfTUFYSU1JWkUgPSAnW2RhdGEtY2FyZC13aWRnZXQ9XCJtYXhpbWl6ZVwiXSc7XG4gIHZhciBTRUxFQ1RPUl9DQVJEJDEgPSBcIi5cIiArIENMQVNTX05BTUVfQ0FSRCQxO1xuICB2YXIgU0VMRUNUT1JfQ0FSRF9IRUFERVIgPSAnLmNhcmQtaGVhZGVyJztcbiAgdmFyIFNFTEVDVE9SX0NBUkRfQk9EWSA9ICcuY2FyZC1ib2R5JztcbiAgdmFyIFNFTEVDVE9SX0NBUkRfRk9PVEVSID0gJy5jYXJkLWZvb3Rlcic7XG4gIHZhciBEZWZhdWx0JDEgPSB7XG4gICAgYW5pbWF0aW9uU3BlZWQ6ICdub3JtYWwnLFxuICAgIGNvbGxhcHNlVHJpZ2dlcjogU0VMRUNUT1JfREFUQV9DT0xMQVBTRSxcbiAgICByZW1vdmVUcmlnZ2VyOiBTRUxFQ1RPUl9EQVRBX1JFTU9WRSxcbiAgICBtYXhpbWl6ZVRyaWdnZXI6IFNFTEVDVE9SX0RBVEFfTUFYSU1JWkUsXG4gICAgY29sbGFwc2VJY29uOiAnZmEtbWludXMnLFxuICAgIGV4cGFuZEljb246ICdmYS1wbHVzJyxcbiAgICBtYXhpbWl6ZUljb246ICdmYS1leHBhbmQnLFxuICAgIG1pbmltaXplSWNvbjogJ2ZhLWNvbXByZXNzJ1xuICB9O1xuXG4gIHZhciBDYXJkV2lkZ2V0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYXJkV2lkZ2V0KGVsZW1lbnQsIHNldHRpbmdzKSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnQucGFyZW50cyhTRUxFQ1RPUl9DQVJEJDEpLmZpcnN0KCk7XG5cbiAgICAgIGlmIChlbGVtZW50Lmhhc0NsYXNzKENMQVNTX05BTUVfQ0FSRCQxKSkge1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXR0aW5ncyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5leHRlbmQoe30sIERlZmF1bHQkMSwgc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIHZhciBfcHJvdG8gPSBDYXJkV2lkZ2V0LnByb3RvdHlwZTtcblxuICAgIF9wcm90by5jb2xsYXBzZSA9IGZ1bmN0aW9uIGNvbGxhcHNlKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5fcGFyZW50LmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORykuY2hpbGRyZW4oU0VMRUNUT1JfQ0FSRF9CT0RZICsgXCIsIFwiICsgU0VMRUNUT1JfQ0FSRF9GT09URVIpLnNsaWRlVXAodGhpcy5fc2V0dGluZ3MuYW5pbWF0aW9uU3BlZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuX3BhcmVudC5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFRCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9wYXJlbnQuZmluZChcIj4gXCIgKyBTRUxFQ1RPUl9DQVJEX0hFQURFUiArIFwiIFwiICsgdGhpcy5fc2V0dGluZ3MuY29sbGFwc2VUcmlnZ2VyICsgXCIgLlwiICsgdGhpcy5fc2V0dGluZ3MuY29sbGFwc2VJY29uKS5hZGRDbGFzcyh0aGlzLl9zZXR0aW5ncy5leHBhbmRJY29uKS5yZW1vdmVDbGFzcyh0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZUljb24pO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX0NPTExBUFNFRCksIHRoaXMuX3BhcmVudCk7XG4gICAgfTtcblxuICAgIF9wcm90by5leHBhbmQgPSBmdW5jdGlvbiBleHBhbmQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5fcGFyZW50LmFkZENsYXNzKENMQVNTX05BTUVfRVhQQU5ESU5HKS5jaGlsZHJlbihTRUxFQ1RPUl9DQVJEX0JPRFkgKyBcIiwgXCIgKyBTRUxFQ1RPUl9DQVJEX0ZPT1RFUikuc2xpZGVEb3duKHRoaXMuX3NldHRpbmdzLmFuaW1hdGlvblNwZWVkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5fcGFyZW50LnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0VYUEFORElORyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fcGFyZW50LmZpbmQoXCI+IFwiICsgU0VMRUNUT1JfQ0FSRF9IRUFERVIgKyBcIiBcIiArIHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlVHJpZ2dlciArIFwiIC5cIiArIHRoaXMuX3NldHRpbmdzLmV4cGFuZEljb24pLmFkZENsYXNzKHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlSWNvbikucmVtb3ZlQ2xhc3ModGhpcy5fc2V0dGluZ3MuZXhwYW5kSWNvbik7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQudHJpZ2dlcigkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfRVhQQU5ERUQpLCB0aGlzLl9wYXJlbnQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdGhpcy5fcGFyZW50LnNsaWRlVXAoKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC50cmlnZ2VyKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5FdmVudChFVkVOVF9SRU1PVkVEKSwgdGhpcy5fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgIGlmICh0aGlzLl9wYXJlbnQuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb2xsYXBzZSgpO1xuICAgIH07XG5cbiAgICBfcHJvdG8ubWF4aW1pemUgPSBmdW5jdGlvbiBtYXhpbWl6ZSgpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5maW5kKHRoaXMuX3NldHRpbmdzLm1heGltaXplVHJpZ2dlciArIFwiIC5cIiArIHRoaXMuX3NldHRpbmdzLm1heGltaXplSWNvbikuYWRkQ2xhc3ModGhpcy5fc2V0dGluZ3MubWluaW1pemVJY29uKS5yZW1vdmVDbGFzcyh0aGlzLl9zZXR0aW5ncy5tYXhpbWl6ZUljb24pO1xuXG4gICAgICB0aGlzLl9wYXJlbnQuY3NzKHtcbiAgICAgICAgaGVpZ2h0OiB0aGlzLl9wYXJlbnQuaGVpZ2h0KCksXG4gICAgICAgIHdpZHRoOiB0aGlzLl9wYXJlbnQud2lkdGgoKSxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAuMTVzJ1xuICAgICAgfSkuZGVsYXkoMTUwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkZWxlbWVudCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKTtcbiAgICAgICAgJGVsZW1lbnQuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9NQVhJTUlaRUQpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oJ2h0bWwnKS5hZGRDbGFzcyhDTEFTU19OQU1FX01BWElNSVpFRCk7XG5cbiAgICAgICAgaWYgKCRlbGVtZW50Lmhhc0NsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKSkge1xuICAgICAgICAgICRlbGVtZW50LmFkZENsYXNzKENMQVNTX05BTUVfV0FTX0NPTExBUFNFRCk7XG4gICAgICAgIH1cblxuICAgICAgICAkZWxlbWVudC5kZXF1ZXVlKCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fZWxlbWVudC50cmlnZ2VyKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5FdmVudChFVkVOVF9NQVhJTUlaRUQpLCB0aGlzLl9wYXJlbnQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8ubWluaW1pemUgPSBmdW5jdGlvbiBtaW5pbWl6ZSgpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5maW5kKHRoaXMuX3NldHRpbmdzLm1heGltaXplVHJpZ2dlciArIFwiIC5cIiArIHRoaXMuX3NldHRpbmdzLm1pbmltaXplSWNvbikuYWRkQ2xhc3ModGhpcy5fc2V0dGluZ3MubWF4aW1pemVJY29uKS5yZW1vdmVDbGFzcyh0aGlzLl9zZXR0aW5ncy5taW5pbWl6ZUljb24pO1xuXG4gICAgICB0aGlzLl9wYXJlbnQuY3NzKCdjc3NUZXh0JywgXCJoZWlnaHQ6IFwiICsgdGhpcy5fcGFyZW50WzBdLnN0eWxlLmhlaWdodCArIFwiICFpbXBvcnRhbnQ7IHdpZHRoOiBcIiArIHRoaXMuX3BhcmVudFswXS5zdHlsZS53aWR0aCArIFwiICFpbXBvcnRhbnQ7IHRyYW5zaXRpb246IGFsbCAuMTVzO1wiKS5kZWxheSgxMCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGVsZW1lbnQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyk7XG4gICAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKENMQVNTX05BTUVfTUFYSU1JWkVEKTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdodG1sJykucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9NQVhJTUlaRUQpO1xuICAgICAgICAkZWxlbWVudC5jc3Moe1xuICAgICAgICAgIGhlaWdodDogJ2luaGVyaXQnLFxuICAgICAgICAgIHdpZHRoOiAnaW5oZXJpdCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCRlbGVtZW50Lmhhc0NsYXNzKENMQVNTX05BTUVfV0FTX0NPTExBUFNFRCkpIHtcbiAgICAgICAgICAkZWxlbWVudC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX1dBU19DT0xMQVBTRUQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsZW1lbnQuZGVxdWV1ZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQudHJpZ2dlcigkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfTUlOSU1JWkVEKSwgdGhpcy5fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnRvZ2dsZU1heGltaXplID0gZnVuY3Rpb24gdG9nZ2xlTWF4aW1pemUoKSB7XG4gICAgICBpZiAodGhpcy5fcGFyZW50Lmhhc0NsYXNzKENMQVNTX05BTUVfTUFYSU1JWkVEKSkge1xuICAgICAgICB0aGlzLm1pbmltaXplKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXhpbWl6ZSgpO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5faW5pdCA9IGZ1bmN0aW9uIF9pbml0KGNhcmQpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9wYXJlbnQgPSBjYXJkO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmZpbmQodGhpcy5fc2V0dGluZ3MuY29sbGFwc2VUcmlnZ2VyKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy50b2dnbGUoKTtcbiAgICAgIH0pO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmZpbmQodGhpcy5fc2V0dGluZ3MubWF4aW1pemVUcmlnZ2VyKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy50b2dnbGVNYXhpbWl6ZSgpO1xuICAgICAgfSk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZmluZCh0aGlzLl9zZXR0aW5ncy5yZW1vdmVUcmlnZ2VyKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgQ2FyZFdpZGdldC5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHZhciBkYXRhID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVkkMSk7XG5cbiAgICAgIHZhciBfb3B0aW9ucyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5leHRlbmQoe30sIERlZmF1bHQkMSwgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoKSk7XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IENhcmRXaWRnZXQoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLCBfb3B0aW9ucyk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJDEsIHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnID8gZGF0YSA6IGNvbmZpZyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiBjb25maWcubWF0Y2goL2NvbGxhcHNlfGV4cGFuZHxyZW1vdmV8dG9nZ2xlfG1heGltaXplfG1pbmltaXplfHRvZ2dsZU1heGltaXplLykpIHtcbiAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGRhdGEuX2luaXQoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIENhcmRXaWRnZXQ7XG4gIH0oKTtcbiAgLyoqXG4gICAqIERhdGEgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0RBVEFfQ09MTEFQU0UsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBDYXJkV2lkZ2V0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyksICd0b2dnbGUnKTtcbiAgfSk7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfREFUQV9SRU1PVkUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBDYXJkV2lkZ2V0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyksICdyZW1vdmUnKTtcbiAgfSk7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfREFUQV9NQVhJTUlaRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIENhcmRXaWRnZXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKSwgJ3RvZ2dsZU1heGltaXplJyk7XG4gIH0pO1xuICAvKipcbiAgICogalF1ZXJ5IEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDFdID0gQ2FyZFdpZGdldC5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQxXS5Db25zdHJ1Y3RvciA9IENhcmRXaWRnZXQ7XG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkMV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQxXSA9IEpRVUVSWV9OT19DT05GTElDVCQxO1xuICAgIHJldHVybiBDYXJkV2lkZ2V0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIENvbnRyb2xTaWRlYmFyLmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgdmFyIE5BTUUkMiA9ICdDb250cm9sU2lkZWJhcic7XG4gIHZhciBEQVRBX0tFWSQyID0gJ2x0ZS5jb250cm9sc2lkZWJhcic7XG4gIHZhciBFVkVOVF9LRVkkMiA9IFwiLlwiICsgREFUQV9LRVkkMjtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQyID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkMl07XG4gIHZhciBFVkVOVF9DT0xMQVBTRUQkMSA9IFwiY29sbGFwc2VkXCIgKyBFVkVOVF9LRVkkMjtcbiAgdmFyIEVWRU5UX0VYUEFOREVEJDEgPSBcImV4cGFuZGVkXCIgKyBFVkVOVF9LRVkkMjtcbiAgdmFyIFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUiA9ICcuY29udHJvbC1zaWRlYmFyJztcbiAgdmFyIFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUl9DT05URU5UID0gJy5jb250cm9sLXNpZGViYXItY29udGVudCc7XG4gIHZhciBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS13aWRnZXQ9XCJjb250cm9sLXNpZGViYXJcIl0nO1xuICB2YXIgU0VMRUNUT1JfSEVBREVSID0gJy5tYWluLWhlYWRlcic7XG4gIHZhciBTRUxFQ1RPUl9GT09URVIgPSAnLm1haW4tZm9vdGVyJztcbiAgdmFyIENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX0FOSU1BVEUgPSAnY29udHJvbC1zaWRlYmFyLWFuaW1hdGUnO1xuICB2YXIgQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfT1BFTiA9ICdjb250cm9sLXNpZGViYXItb3Blbic7XG4gIHZhciBDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9TTElERSA9ICdjb250cm9sLXNpZGViYXItc2xpZGUtb3Blbic7XG4gIHZhciBDTEFTU19OQU1FX0xBWU9VVF9GSVhFRCA9ICdsYXlvdXQtZml4ZWQnO1xuICB2YXIgQ0xBU1NfTkFNRV9OQVZCQVJfRklYRUQgPSAnbGF5b3V0LW5hdmJhci1maXhlZCc7XG4gIHZhciBDTEFTU19OQU1FX05BVkJBUl9TTV9GSVhFRCA9ICdsYXlvdXQtc20tbmF2YmFyLWZpeGVkJztcbiAgdmFyIENMQVNTX05BTUVfTkFWQkFSX01EX0ZJWEVEID0gJ2xheW91dC1tZC1uYXZiYXItZml4ZWQnO1xuICB2YXIgQ0xBU1NfTkFNRV9OQVZCQVJfTEdfRklYRUQgPSAnbGF5b3V0LWxnLW5hdmJhci1maXhlZCc7XG4gIHZhciBDTEFTU19OQU1FX05BVkJBUl9YTF9GSVhFRCA9ICdsYXlvdXQteGwtbmF2YmFyLWZpeGVkJztcbiAgdmFyIENMQVNTX05BTUVfRk9PVEVSX0ZJWEVEID0gJ2xheW91dC1mb290ZXItZml4ZWQnO1xuICB2YXIgQ0xBU1NfTkFNRV9GT09URVJfU01fRklYRUQgPSAnbGF5b3V0LXNtLWZvb3Rlci1maXhlZCc7XG4gIHZhciBDTEFTU19OQU1FX0ZPT1RFUl9NRF9GSVhFRCA9ICdsYXlvdXQtbWQtZm9vdGVyLWZpeGVkJztcbiAgdmFyIENMQVNTX05BTUVfRk9PVEVSX0xHX0ZJWEVEID0gJ2xheW91dC1sZy1mb290ZXItZml4ZWQnO1xuICB2YXIgQ0xBU1NfTkFNRV9GT09URVJfWExfRklYRUQgPSAnbGF5b3V0LXhsLWZvb3Rlci1maXhlZCc7XG4gIHZhciBEZWZhdWx0JDIgPSB7XG4gICAgY29udHJvbHNpZGViYXJTbGlkZTogdHJ1ZSxcbiAgICBzY3JvbGxiYXJUaGVtZTogJ29zLXRoZW1lLWxpZ2h0JyxcbiAgICBzY3JvbGxiYXJBdXRvSGlkZTogJ2wnXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgdmFyIENvbnRyb2xTaWRlYmFyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb250cm9sU2lkZWJhcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgICB0aGlzLl9pbml0KCk7XG4gICAgfSAvLyBQdWJsaWNcblxuXG4gICAgdmFyIF9wcm90byA9IENvbnRyb2xTaWRlYmFyLnByb3RvdHlwZTtcblxuICAgIF9wcm90by5jb2xsYXBzZSA9IGZ1bmN0aW9uIGNvbGxhcHNlKCkge1xuICAgICAgdmFyICRib2R5ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdib2R5Jyk7XG4gICAgICB2YXIgJGh0bWwgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oJ2h0bWwnKTsgLy8gU2hvdyB0aGUgY29udHJvbCBzaWRlYmFyXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuY29udHJvbHNpZGViYXJTbGlkZSkge1xuICAgICAgICAkaHRtbC5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9BTklNQVRFKTtcbiAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfU0xJREUpLmRlbGF5KDMwMCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVIpLmhpZGUoKTtcbiAgICAgICAgICAkaHRtbC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9BTklNQVRFKTtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGVxdWV1ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRib2R5LnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX09QRU4pO1xuICAgICAgfVxuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkudHJpZ2dlcigkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfQ09MTEFQU0VEJDEpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgdmFyICRib2R5ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdib2R5Jyk7XG4gICAgICB2YXIgJGh0bWwgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oJ2h0bWwnKTsgLy8gQ29sbGFwc2UgdGhlIGNvbnRyb2wgc2lkZWJhclxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmNvbnRyb2xzaWRlYmFyU2xpZGUpIHtcbiAgICAgICAgJGh0bWwuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfQU5JTUFURSk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVIpLnNob3coKS5kZWxheSgxMCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICRib2R5LmFkZENsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX1NMSURFKS5kZWxheSgzMDApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRodG1sLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX0FOSU1BVEUpO1xuICAgICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRlcXVldWUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGVxdWV1ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRib2R5LmFkZENsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX09QRU4pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9maXhIZWlnaHQoKTtcblxuICAgICAgdGhpcy5fZml4U2Nyb2xsSGVpZ2h0KCk7XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5FdmVudChFVkVOVF9FWFBBTkRFRCQxKSk7XG4gICAgfTtcblxuICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICB2YXIgJGJvZHkgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oJ2JvZHknKTtcbiAgICAgIHZhciBzaG91bGRDbG9zZSA9ICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX09QRU4pIHx8ICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX1NMSURFKTtcblxuICAgICAgaWYgKHNob3VsZENsb3NlKSB7XG4gICAgICAgIC8vIENsb3NlIHRoZSBjb250cm9sIHNpZGViYXJcbiAgICAgICAgdGhpcy5jb2xsYXBzZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3BlbiB0aGUgY29udHJvbCBzaWRlYmFyXG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfVxuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5faW5pdCA9IGZ1bmN0aW9uIF9pbml0KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5fZml4SGVpZ2h0KCk7XG5cbiAgICAgIHRoaXMuX2ZpeFNjcm9sbEhlaWdodCgpO1xuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10od2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5fZml4SGVpZ2h0KCk7XG5cbiAgICAgICAgX3RoaXMuX2ZpeFNjcm9sbEhlaWdodCgpO1xuICAgICAgfSk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10od2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGJvZHkgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oJ2JvZHknKTtcbiAgICAgICAgdmFyIHNob3VsZEZpeEhlaWdodCA9ICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX09QRU4pIHx8ICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX1NMSURFKTtcblxuICAgICAgICBpZiAoc2hvdWxkRml4SGVpZ2h0KSB7XG4gICAgICAgICAgX3RoaXMuX2ZpeFNjcm9sbEhlaWdodCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9maXhTY3JvbGxIZWlnaHQgPSBmdW5jdGlvbiBfZml4U2Nyb2xsSGVpZ2h0KCkge1xuICAgICAgdmFyICRib2R5ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdib2R5Jyk7XG5cbiAgICAgIGlmICghJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9MQVlPVVRfRklYRUQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGhlaWdodHMgPSB7XG4gICAgICAgIHNjcm9sbDogJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5oZWlnaHQoKSxcbiAgICAgICAgd2luZG93OiAkX19kZWZhdWx0WydkZWZhdWx0J10od2luZG93KS5oZWlnaHQoKSxcbiAgICAgICAgaGVhZGVyOiAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfSEVBREVSKS5vdXRlckhlaWdodCgpLFxuICAgICAgICBmb290ZXI6ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9GT09URVIpLm91dGVySGVpZ2h0KClcbiAgICAgIH07XG4gICAgICB2YXIgcG9zaXRpb25zID0ge1xuICAgICAgICBib3R0b206IE1hdGguYWJzKGhlaWdodHMud2luZG93ICsgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykuc2Nyb2xsVG9wKCkgLSBoZWlnaHRzLnNjcm9sbCksXG4gICAgICAgIHRvcDogJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykuc2Nyb2xsVG9wKClcbiAgICAgIH07XG4gICAgICB2YXIgbmF2YmFyRml4ZWQgPSAoJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9OQVZCQVJfRklYRUQpIHx8ICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfTkFWQkFSX1NNX0ZJWEVEKSB8fCAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX05BVkJBUl9NRF9GSVhFRCkgfHwgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9OQVZCQVJfTEdfRklYRUQpIHx8ICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfTkFWQkFSX1hMX0ZJWEVEKSkgJiYgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0hFQURFUikuY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnO1xuICAgICAgdmFyIGZvb3RlckZpeGVkID0gKCRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfRk9PVEVSX0ZJWEVEKSB8fCAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZPT1RFUl9TTV9GSVhFRCkgfHwgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfTURfRklYRUQpIHx8ICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfRk9PVEVSX0xHX0ZJWEVEKSB8fCAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZPT1RFUl9YTF9GSVhFRCkpICYmICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9GT09URVIpLmNzcygncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJztcbiAgICAgIHZhciAkY29udHJvbFNpZGViYXIgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfQ09OVFJPTF9TSURFQkFSKTtcbiAgICAgIHZhciAkY29udHJvbHNpZGViYXJDb250ZW50ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUiArIFwiLCBcIiArIFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUiArIFwiIFwiICsgU0VMRUNUT1JfQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQpO1xuXG4gICAgICBpZiAocG9zaXRpb25zLnRvcCA9PT0gMCAmJiBwb3NpdGlvbnMuYm90dG9tID09PSAwKSB7XG4gICAgICAgICRjb250cm9sU2lkZWJhci5jc3Moe1xuICAgICAgICAgIGJvdHRvbTogaGVpZ2h0cy5mb290ZXIsXG4gICAgICAgICAgdG9wOiBoZWlnaHRzLmhlYWRlclxuICAgICAgICB9KTtcbiAgICAgICAgJGNvbnRyb2xzaWRlYmFyQ29udGVudC5jc3MoJ2hlaWdodCcsIGhlaWdodHMud2luZG93IC0gKGhlaWdodHMuaGVhZGVyICsgaGVpZ2h0cy5mb290ZXIpKTtcbiAgICAgIH0gZWxzZSBpZiAocG9zaXRpb25zLmJvdHRvbSA8PSBoZWlnaHRzLmZvb3Rlcikge1xuICAgICAgICBpZiAoZm9vdGVyRml4ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdmFyIHRvcCA9IGhlaWdodHMuaGVhZGVyIC0gcG9zaXRpb25zLnRvcDtcbiAgICAgICAgICAkY29udHJvbFNpZGViYXIuY3NzKCdib3R0b20nLCBoZWlnaHRzLmZvb3RlciAtIHBvc2l0aW9ucy5ib3R0b20pLmNzcygndG9wJywgdG9wID49IDAgPyB0b3AgOiAwKTtcbiAgICAgICAgICAkY29udHJvbHNpZGViYXJDb250ZW50LmNzcygnaGVpZ2h0JywgaGVpZ2h0cy53aW5kb3cgLSAoaGVpZ2h0cy5mb290ZXIgLSBwb3NpdGlvbnMuYm90dG9tKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGNvbnRyb2xTaWRlYmFyLmNzcygnYm90dG9tJywgaGVpZ2h0cy5mb290ZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBvc2l0aW9ucy50b3AgPD0gaGVpZ2h0cy5oZWFkZXIpIHtcbiAgICAgICAgaWYgKG5hdmJhckZpeGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICRjb250cm9sU2lkZWJhci5jc3MoJ3RvcCcsIGhlaWdodHMuaGVhZGVyIC0gcG9zaXRpb25zLnRvcCk7XG4gICAgICAgICAgJGNvbnRyb2xzaWRlYmFyQ29udGVudC5jc3MoJ2hlaWdodCcsIGhlaWdodHMud2luZG93IC0gKGhlaWdodHMuaGVhZGVyIC0gcG9zaXRpb25zLnRvcCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRjb250cm9sU2lkZWJhci5jc3MoJ3RvcCcsIGhlaWdodHMuaGVhZGVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChuYXZiYXJGaXhlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgJGNvbnRyb2xTaWRlYmFyLmNzcygndG9wJywgMCk7XG4gICAgICAgICRjb250cm9sc2lkZWJhckNvbnRlbnQuY3NzKCdoZWlnaHQnLCBoZWlnaHRzLndpbmRvdyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkY29udHJvbFNpZGViYXIuY3NzKCd0b3AnLCBoZWlnaHRzLmhlYWRlcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fZml4SGVpZ2h0ID0gZnVuY3Rpb24gX2ZpeEhlaWdodCgpIHtcbiAgICAgIHZhciAkYm9keSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnYm9keScpO1xuXG4gICAgICBpZiAoISRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfTEFZT1VUX0ZJWEVEKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBoZWlnaHRzID0ge1xuICAgICAgICB3aW5kb3c6ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh3aW5kb3cpLmhlaWdodCgpLFxuICAgICAgICBoZWFkZXI6ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9IRUFERVIpLm91dGVySGVpZ2h0KCksXG4gICAgICAgIGZvb3RlcjogJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0ZPT1RFUikub3V0ZXJIZWlnaHQoKVxuICAgICAgfTtcbiAgICAgIHZhciBzaWRlYmFySGVpZ2h0ID0gaGVpZ2h0cy53aW5kb3cgLSBoZWlnaHRzLmhlYWRlcjtcblxuICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfRk9PVEVSX0ZJWEVEKSB8fCAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZPT1RFUl9TTV9GSVhFRCkgfHwgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfTURfRklYRUQpIHx8ICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfRk9PVEVSX0xHX0ZJWEVEKSB8fCAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZPT1RFUl9YTF9GSVhFRCkpIHtcbiAgICAgICAgaWYgKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9GT09URVIpLmNzcygncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgIHNpZGViYXJIZWlnaHQgPSBoZWlnaHRzLndpbmRvdyAtIGhlaWdodHMuaGVhZGVyIC0gaGVpZ2h0cy5mb290ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyICRjb250cm9sU2lkZWJhciA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVIgKyBcIiBcIiArIFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUl9DT05URU5UKTtcbiAgICAgICRjb250cm9sU2lkZWJhci5jc3MoJ2hlaWdodCcsIHNpZGViYXJIZWlnaHQpO1xuXG4gICAgICBpZiAodHlwZW9mICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbi5vdmVybGF5U2Nyb2xsYmFycyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgJGNvbnRyb2xTaWRlYmFyLm92ZXJsYXlTY3JvbGxiYXJzKHtcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuX2NvbmZpZy5zY3JvbGxiYXJUaGVtZSxcbiAgICAgICAgICBzaXplQXV0b0NhcGFibGU6IHRydWUsXG4gICAgICAgICAgc2Nyb2xsYmFyczoge1xuICAgICAgICAgICAgYXV0b0hpZGU6IHRoaXMuX2NvbmZpZy5zY3JvbGxiYXJBdXRvSGlkZSxcbiAgICAgICAgICAgIGNsaWNrU2Nyb2xsaW5nOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIENvbnRyb2xTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKG9wZXJhdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVkkMik7XG5cbiAgICAgICAgdmFyIF9vcHRpb25zID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmV4dGVuZCh7fSwgRGVmYXVsdCQyLCAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YSgpKTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IENvbnRyb2xTaWRlYmFyKHRoaXMsIF9vcHRpb25zKTtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSQyLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhW29wZXJhdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG9wZXJhdGlvbiArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtvcGVyYXRpb25dKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENvbnRyb2xTaWRlYmFyO1xuICB9KCk7XG4gIC8qKlxuICAgKlxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vbignY2xpY2snLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIENvbnRyb2xTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyksICd0b2dnbGUnKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkMl0gPSBDb250cm9sU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQyXS5Db25zdHJ1Y3RvciA9IENvbnRyb2xTaWRlYmFyO1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDJdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkMl0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkMjtcbiAgICByZXR1cm4gQ29udHJvbFNpZGViYXIuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQWRtaW5MVEUgRGlyZWN0Q2hhdC5qc1xuICAgKiBMaWNlbnNlIE1JVFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIHZhciBOQU1FJDMgPSAnRGlyZWN0Q2hhdCc7XG4gIHZhciBEQVRBX0tFWSQzID0gJ2x0ZS5kaXJlY3RjaGF0JztcbiAgdmFyIEVWRU5UX0tFWSQzID0gXCIuXCIgKyBEQVRBX0tFWSQzO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDMgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQzXTtcbiAgdmFyIEVWRU5UX1RPR0dMRUQgPSBcInRvZ2dsZWRcIiArIEVWRU5UX0tFWSQzO1xuICB2YXIgU0VMRUNUT1JfREFUQV9UT0dHTEUkMSA9ICdbZGF0YS13aWRnZXQ9XCJjaGF0LXBhbmUtdG9nZ2xlXCJdJztcbiAgdmFyIFNFTEVDVE9SX0RJUkVDVF9DSEFUID0gJy5kaXJlY3QtY2hhdCc7XG4gIHZhciBDTEFTU19OQU1FX0RJUkVDVF9DSEFUX09QRU4gPSAnZGlyZWN0LWNoYXQtY29udGFjdHMtb3Blbic7XG4gIC8qKlxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgdmFyIERpcmVjdENoYXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERpcmVjdENoYXQoZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdmFyIF9wcm90byA9IERpcmVjdENoYXQucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS5wYXJlbnRzKFNFTEVDVE9SX0RJUkVDVF9DSEFUKS5maXJzdCgpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfRElSRUNUX0NIQVRfT1BFTik7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZWxlbWVudCkudHJpZ2dlcigkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfVE9HR0xFRCkpO1xuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgRGlyZWN0Q2hhdC5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJDMpO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgRGlyZWN0Q2hhdCgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykpO1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJDMsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERpcmVjdENoYXQ7XG4gIH0oKTtcbiAgLyoqXG4gICAqXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDEsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBEaXJlY3RDaGF0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyksICd0b2dnbGUnKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkM10gPSBEaXJlY3RDaGF0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDNdLkNvbnN0cnVjdG9yID0gRGlyZWN0Q2hhdDtcblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQzXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDNdID0gSlFVRVJZX05PX0NPTkZMSUNUJDM7XG4gICAgcmV0dXJuIERpcmVjdENoYXQuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQWRtaW5MVEUgRHJvcGRvd24uanNcbiAgICogTGljZW5zZSBNSVRcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICB2YXIgTkFNRSQ0ID0gJ0Ryb3Bkb3duJztcbiAgdmFyIERBVEFfS0VZJDQgPSAnbHRlLmRyb3Bkb3duJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQ0ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkNF07XG4gIHZhciBTRUxFQ1RPUl9OQVZCQVIgPSAnLm5hdmJhcic7XG4gIHZhciBTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VID0gJy5kcm9wZG93bi1tZW51JztcbiAgdmFyIFNFTEVDVE9SX0RST1BET1dOX01FTlVfQUNUSVZFID0gJy5kcm9wZG93bi1tZW51LnNob3cnO1xuICB2YXIgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJztcbiAgdmFyIENMQVNTX05BTUVfRFJPUERPV05fUklHSFQgPSAnZHJvcGRvd24tbWVudS1yaWdodCc7XG4gIHZhciBDTEFTU19OQU1FX0RST1BET1dOX1NVQk1FTlUgPSAnZHJvcGRvd24tc3VibWVudSc7IC8vIFRPRE86IHRoaXMgaXMgdW51c2VkOyBzaG91bGQgYmUgcmVtb3ZlZCBhbG9uZyB3aXRoIHRoZSBleHRlbmQ/XG5cbiAgdmFyIERlZmF1bHQkMyA9IHt9O1xuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIHZhciBEcm9wZG93biA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRHJvcGRvd24oZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICB2YXIgX3Byb3RvID0gRHJvcGRvd24ucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvLnRvZ2dsZVN1Ym1lbnUgPSBmdW5jdGlvbiB0b2dnbGVTdWJtZW51KCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zaWJsaW5ncygpLnNob3coKS50b2dnbGVDbGFzcygnc2hvdycpO1xuXG4gICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmV4dCgpLmhhc0NsYXNzKCdzaG93JykpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnRzKFNFTEVDVE9SX0RST1BET1dOX01FTlUpLmZpcnN0KCkuZmluZCgnLnNob3cnKS5yZW1vdmVDbGFzcygnc2hvdycpLmhpZGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnRzKCdsaS5uYXYtaXRlbS5kcm9wZG93bi5zaG93Jykub24oJ2hpZGRlbi5icy5kcm9wZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKCcuZHJvcGRvd24tc3VibWVudSAuc2hvdycpLnJlbW92ZUNsYXNzKCdzaG93JykuaGlkZSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5maXhQb3NpdGlvbiA9IGZ1bmN0aW9uIGZpeFBvc2l0aW9uKCkge1xuICAgICAgdmFyICRlbGVtZW50ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0RST1BET1dOX01FTlVfQUNUSVZFKTtcblxuICAgICAgaWYgKCRlbGVtZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICgkZWxlbWVudC5oYXNDbGFzcyhDTEFTU19OQU1FX0RST1BET1dOX1JJR0hUKSkge1xuICAgICAgICAkZWxlbWVudC5jc3Moe1xuICAgICAgICAgIGxlZnQ6ICdpbmhlcml0JyxcbiAgICAgICAgICByaWdodDogMFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlbGVtZW50LmNzcyh7XG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICByaWdodDogJ2luaGVyaXQnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgb2Zmc2V0ID0gJGVsZW1lbnQub2Zmc2V0KCk7XG4gICAgICB2YXIgd2lkdGggPSAkZWxlbWVudC53aWR0aCgpO1xuICAgICAgdmFyIHZpc2libGVQYXJ0ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykud2lkdGgoKSAtIG9mZnNldC5sZWZ0O1xuXG4gICAgICBpZiAob2Zmc2V0LmxlZnQgPCAwKSB7XG4gICAgICAgICRlbGVtZW50LmNzcyh7XG4gICAgICAgICAgbGVmdDogJ2luaGVyaXQnLFxuICAgICAgICAgIHJpZ2h0OiBvZmZzZXQubGVmdCAtIDVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHZpc2libGVQYXJ0IDwgd2lkdGgpIHtcbiAgICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgICBsZWZ0OiAnaW5oZXJpdCcsXG4gICAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJDQpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmV4dGVuZCh7fSwgRGVmYXVsdCQzLCAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YSgpKTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IERyb3Bkb3duKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKSwgX2NvbmZpZyk7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVkkNCwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlU3VibWVudScgfHwgY29uZmlnID09PSAnZml4UG9zaXRpb24nKSB7XG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gRHJvcGRvd247XG4gIH0oKTtcbiAgLyoqXG4gICAqIERhdGEgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfRFJPUERPV05fTUVOVSArIFwiIFwiICsgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZS5jYWxsKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKSwgJ3RvZ2dsZVN1Ym1lbnUnKTtcbiAgfSk7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9OQVZCQVIgKyBcIiBcIiArIFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICgkX19kZWZhdWx0WydkZWZhdWx0J10oZXZlbnQudGFyZ2V0KS5wYXJlbnQoKS5oYXNDbGFzcyhDTEFTU19OQU1FX0RST1BET1dOX1NVQk1FTlUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLCAnZml4UG9zaXRpb24nKTtcbiAgICB9LCAxKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkNF0gPSBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ0XS5Db25zdHJ1Y3RvciA9IERyb3Bkb3duO1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDRdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkNF0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkNDtcbiAgICByZXR1cm4gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQWRtaW5MVEUgRXhwYW5kYWJsZVRhYmxlLmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICAqIENvbnN0YW50c1xuICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICovXG5cbiAgdmFyIE5BTUUkNSA9ICdFeHBhbmRhYmxlVGFibGUnO1xuICB2YXIgREFUQV9LRVkkNSA9ICdsdGUuZXhwYW5kYWJsZVRhYmxlJztcbiAgdmFyIEVWRU5UX0tFWSQ0ID0gXCIuXCIgKyBEQVRBX0tFWSQ1O1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDUgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ1XTtcbiAgdmFyIEVWRU5UX0VYUEFOREVEJDIgPSBcImV4cGFuZGVkXCIgKyBFVkVOVF9LRVkkNDtcbiAgdmFyIEVWRU5UX0NPTExBUFNFRCQyID0gXCJjb2xsYXBzZWRcIiArIEVWRU5UX0tFWSQ0O1xuICB2YXIgU0VMRUNUT1JfVEFCTEUgPSAnLmV4cGFuZGFibGUtdGFibGUnO1xuICB2YXIgU0VMRUNUT1JfREFUQV9UT0dHTEUkMiA9ICdbZGF0YS13aWRnZXQ9XCJleHBhbmRhYmxlLXRhYmxlXCJdJztcbiAgdmFyIFNFTEVDVE9SX0FSSUFfQVRUUiA9ICdhcmlhLWV4cGFuZGVkJztcbiAgLyoqXG4gICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKi9cblxuICB2YXIgRXhwYW5kYWJsZVRhYmxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFeHBhbmRhYmxlVGFibGUoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICB2YXIgX3Byb3RvID0gRXhwYW5kYWJsZVRhYmxlLnByb3RvdHlwZTtcblxuICAgIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9EQVRBX1RPR0dMRSQyKS5lYWNoKGZ1bmN0aW9uIChfLCAkaGVhZGVyKSB7XG4gICAgICAgIHZhciAkdHlwZSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgkaGVhZGVyKS5hdHRyKFNFTEVDVE9SX0FSSUFfQVRUUik7XG4gICAgICAgIHZhciAkYm9keSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgkaGVhZGVyKS5uZXh0KCkuY2hpbGRyZW4oKS5maXJzdCgpLmNoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYgKCR0eXBlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAkYm9keS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoJHR5cGUgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAkYm9keS5oaWRlKCk7XG4gICAgICAgICAgJGJvZHkucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnRvZ2dsZVJvdyA9IGZ1bmN0aW9uIHRvZ2dsZVJvdygpIHtcbiAgICAgIHZhciAkZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgICB2YXIgdGltZSA9IDUwMDtcbiAgICAgIHZhciAkdHlwZSA9ICRlbGVtZW50LmF0dHIoU0VMRUNUT1JfQVJJQV9BVFRSKTtcbiAgICAgIHZhciAkYm9keSA9ICRlbGVtZW50Lm5leHQoKS5jaGlsZHJlbigpLmZpcnN0KCkuY2hpbGRyZW4oKTtcbiAgICAgICRib2R5LnN0b3AoKTtcblxuICAgICAgaWYgKCR0eXBlID09PSAndHJ1ZScpIHtcbiAgICAgICAgJGJvZHkuc2xpZGVVcCh0aW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJGVsZW1lbnQubmV4dCgpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgICRlbGVtZW50LmF0dHIoU0VMRUNUT1JfQVJJQV9BVFRSLCAnZmFsc2UnKTtcbiAgICAgICAgJGVsZW1lbnQudHJpZ2dlcigkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfQ09MTEFQU0VEJDIpKTtcbiAgICAgIH0gZWxzZSBpZiAoJHR5cGUgPT09ICdmYWxzZScpIHtcbiAgICAgICAgJGVsZW1lbnQubmV4dCgpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgJGJvZHkuc2xpZGVEb3duKHRpbWUpO1xuICAgICAgICAkZWxlbWVudC5hdHRyKFNFTEVDVE9SX0FSSUFfQVRUUiwgJ3RydWUnKTtcbiAgICAgICAgJGVsZW1lbnQudHJpZ2dlcigkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfRVhQQU5ERUQkMikpO1xuICAgICAgfVxuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgRXhwYW5kYWJsZVRhYmxlLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKG9wZXJhdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVkkNSk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBFeHBhbmRhYmxlVGFibGUoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpKTtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSQ1LCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb3BlcmF0aW9uID09PSAnc3RyaW5nJyAmJiBvcGVyYXRpb24ubWF0Y2goL2luaXR8dG9nZ2xlUm93LykpIHtcbiAgICAgICAgICBkYXRhW29wZXJhdGlvbl0oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBFeHBhbmRhYmxlVGFibGU7XG4gIH0oKTtcbiAgLyoqXG4gICAgKiBEYXRhIEFQSVxuICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICovXG5cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfVEFCTEUpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBFeHBhbmRhYmxlVGFibGUuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKSwgJ2luaXQnKTtcbiAgfSk7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfREFUQV9UT0dHTEUkMiwgZnVuY3Rpb24gKCkge1xuICAgIEV4cGFuZGFibGVUYWJsZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLCAndG9nZ2xlUm93Jyk7XG4gIH0pO1xuICAvKipcbiAgICAqIGpRdWVyeSBBUElcbiAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqL1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDVdID0gRXhwYW5kYWJsZVRhYmxlLl9qUXVlcnlJbnRlcmZhY2U7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDVdLkNvbnN0cnVjdG9yID0gRXhwYW5kYWJsZVRhYmxlO1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkNV0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkNTtcbiAgICByZXR1cm4gRXhwYW5kYWJsZVRhYmxlLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIEZ1bGxzY3JlZW4uanNcbiAgICogTGljZW5zZSBNSVRcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICB2YXIgTkFNRSQ2ID0gJ0Z1bGxzY3JlZW4nO1xuICB2YXIgREFUQV9LRVkkNiA9ICdsdGUuZnVsbHNjcmVlbic7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkNiA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDZdO1xuICB2YXIgU0VMRUNUT1JfREFUQV9XSURHRVQgPSAnW2RhdGEtd2lkZ2V0PVwiZnVsbHNjcmVlblwiXSc7XG4gIHZhciBTRUxFQ1RPUl9JQ09OID0gU0VMRUNUT1JfREFUQV9XSURHRVQgKyBcIiBpXCI7XG4gIHZhciBEZWZhdWx0JDQgPSB7XG4gICAgbWluaW1pemVJY29uOiAnZmEtY29tcHJlc3MtYXJyb3dzLWFsdCcsXG4gICAgbWF4aW1pemVJY29uOiAnZmEtZXhwYW5kLWFycm93cy1hbHQnXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgdmFyIEZ1bGxzY3JlZW4gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZ1bGxzY3JlZW4oX2VsZW1lbnQsIF9vcHRpb25zKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBfZWxlbWVudDtcbiAgICAgIHRoaXMub3B0aW9ucyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5leHRlbmQoe30sIERlZmF1bHQkNCwgX29wdGlvbnMpO1xuICAgIH0gLy8gUHVibGljXG5cblxuICAgIHZhciBfcHJvdG8gPSBGdWxsc2NyZWVuLnByb3RvdHlwZTtcblxuICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgfHwgZG9jdW1lbnQubW96RnVsbFNjcmVlbkVsZW1lbnQgfHwgZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQgfHwgZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgICB0aGlzLndpbmRvd2VkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmZ1bGxzY3JlZW4gPSBmdW5jdGlvbiBmdWxsc2NyZWVuKCkge1xuICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgfVxuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfSUNPTikucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm1heGltaXplSWNvbikuYWRkQ2xhc3ModGhpcy5vcHRpb25zLm1pbmltaXplSWNvbik7XG4gICAgfTtcblxuICAgIF9wcm90by53aW5kb3dlZCA9IGZ1bmN0aW9uIHdpbmRvd2VkKCkge1xuICAgICAgaWYgKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfVxuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfSUNPTikucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm1pbmltaXplSWNvbikuYWRkQ2xhc3ModGhpcy5vcHRpb25zLm1heGltaXplSWNvbik7XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBGdWxsc2NyZWVuLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgdmFyIGRhdGEgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSQ2KTtcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgX29wdGlvbnMgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZXh0ZW5kKHt9LCBEZWZhdWx0JDQsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogZGF0YSk7XG5cbiAgICAgIHZhciBwbHVnaW4gPSBuZXcgRnVsbHNjcmVlbigkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyksIF9vcHRpb25zKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJDYsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogZGF0YSk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiBjb25maWcubWF0Y2goL3RvZ2dsZXxmdWxsc2NyZWVufHdpbmRvd2VkLykpIHtcbiAgICAgICAgcGx1Z2luW2NvbmZpZ10oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsdWdpbi5pbml0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBGdWxsc2NyZWVuO1xuICB9KCk7XG4gIC8qKlxuICAgICogRGF0YSBBUElcbiAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqL1xuXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vbignY2xpY2snLCBTRUxFQ1RPUl9EQVRBX1dJREdFVCwgZnVuY3Rpb24gKCkge1xuICAgIEZ1bGxzY3JlZW4uX2pRdWVyeUludGVyZmFjZS5jYWxsKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKSwgJ3RvZ2dsZScpO1xuICB9KTtcbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ2XSA9IEZ1bGxzY3JlZW4uX2pRdWVyeUludGVyZmFjZTtcbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkNl0uQ29uc3RydWN0b3IgPSBGdWxsc2NyZWVuO1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDZdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkNl0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkNjtcbiAgICByZXR1cm4gRnVsbHNjcmVlbi5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBBZG1pbkxURSBJRnJhbWUuanNcbiAgICogTGljZW5zZSBNSVRcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICB2YXIgTkFNRSQ3ID0gJ0lGcmFtZSc7XG4gIHZhciBEQVRBX0tFWSQ3ID0gJ2x0ZS5pZnJhbWUnO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDcgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ3XTtcbiAgdmFyIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDMgPSAnW2RhdGEtd2lkZ2V0PVwiaWZyYW1lXCJdJztcbiAgdmFyIFNFTEVDVE9SX0RBVEFfVE9HR0xFX0NMT1NFID0gJ1tkYXRhLXdpZGdldD1cImlmcmFtZS1jbG9zZVwiXSc7XG4gIHZhciBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TQ1JPTExfTEVGVCA9ICdbZGF0YS13aWRnZXQ9XCJpZnJhbWUtc2Nyb2xsbGVmdFwiXSc7XG4gIHZhciBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TQ1JPTExfUklHSFQgPSAnW2RhdGEtd2lkZ2V0PVwiaWZyYW1lLXNjcm9sbHJpZ2h0XCJdJztcbiAgdmFyIFNFTEVDVE9SX0RBVEFfVE9HR0xFX0ZVTExTQ1JFRU4gPSAnW2RhdGEtd2lkZ2V0PVwiaWZyYW1lLWZ1bGxzY3JlZW5cIl0nO1xuICB2YXIgU0VMRUNUT1JfQ09OVEVOVF9XUkFQUEVSID0gJy5jb250ZW50LXdyYXBwZXInO1xuICB2YXIgU0VMRUNUT1JfQ09OVEVOVF9JRlJBTUUgPSBTRUxFQ1RPUl9DT05URU5UX1dSQVBQRVIgKyBcIiBpZnJhbWVcIjtcbiAgdmFyIFNFTEVDVE9SX1RBQl9OQVYgPSBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzICsgXCIuaWZyYW1lLW1vZGUgLm5hdlwiO1xuICB2YXIgU0VMRUNUT1JfVEFCX05BVkJBUl9OQVYgPSBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzICsgXCIuaWZyYW1lLW1vZGUgLm5hdmJhci1uYXZcIjtcbiAgdmFyIFNFTEVDVE9SX1RBQl9OQVZCQVJfTkFWX0lURU0gPSBTRUxFQ1RPUl9UQUJfTkFWQkFSX05BViArIFwiIC5uYXYtaXRlbVwiO1xuICB2YXIgU0VMRUNUT1JfVEFCX0NPTlRFTlQgPSBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzICsgXCIuaWZyYW1lLW1vZGUgLnRhYi1jb250ZW50XCI7XG4gIHZhciBTRUxFQ1RPUl9UQUJfRU1QVFkgPSBTRUxFQ1RPUl9UQUJfQ09OVEVOVCArIFwiIC50YWItZW1wdHlcIjtcbiAgdmFyIFNFTEVDVE9SX1RBQl9MT0FESU5HID0gU0VMRUNUT1JfVEFCX0NPTlRFTlQgKyBcIiAudGFiLWxvYWRpbmdcIjtcbiAgdmFyIFNFTEVDVE9SX1NJREVCQVJfTUVOVV9JVEVNID0gJy5tYWluLXNpZGViYXIgLm5hdi1pdGVtID4gYS5uYXYtbGluayc7XG4gIHZhciBTRUxFQ1RPUl9IRUFERVJfTUVOVV9JVEVNID0gJy5tYWluLWhlYWRlciAubmF2LWl0ZW0gYS5uYXYtbGluayc7XG4gIHZhciBTRUxFQ1RPUl9IRUFERVJfRFJPUERPV05fSVRFTSA9ICcubWFpbi1oZWFkZXIgYS5kcm9wZG93bi1pdGVtJztcbiAgdmFyIENMQVNTX05BTUVfSUZSQU1FX01PREUgPSAnaWZyYW1lLW1vZGUnO1xuICB2YXIgQ0xBU1NfTkFNRV9GVUxMU0NSRUVOX01PREUgPSAnaWZyYW1lLW1vZGUtZnVsbHNjcmVlbic7XG4gIHZhciBEZWZhdWx0JDUgPSB7XG4gICAgb25UYWJDbGljazogZnVuY3Rpb24gb25UYWJDbGljayhpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9LFxuICAgIG9uVGFiQ2hhbmdlZDogZnVuY3Rpb24gb25UYWJDaGFuZ2VkKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0sXG4gICAgb25UYWJDcmVhdGVkOiBmdW5jdGlvbiBvblRhYkNyZWF0ZWQoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSxcbiAgICBhdXRvSWZyYW1lTW9kZTogdHJ1ZSxcbiAgICBhdXRvSXRlbUFjdGl2ZTogdHJ1ZSxcbiAgICBhdXRvU2hvd05ld1RhYjogdHJ1ZSxcbiAgICBsb2FkaW5nU2NyZWVuOiB0cnVlLFxuICAgIHVzZU5hdmJhckl0ZW1zOiB0cnVlLFxuICAgIHNjcm9sbE9mZnNldDogNDAsXG4gICAgc2Nyb2xsQmVoYXZpb3JTd2FwOiBmYWxzZSxcbiAgICBpY29uTWF4aW1pemU6ICdmYS1leHBhbmQnLFxuICAgIGljb25NaW5pbWl6ZTogJ2ZhLWNvbXByZXNzJ1xuICB9O1xuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIHZhciBJRnJhbWUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIElGcmFtZShlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICB0aGlzLl9pbml0KCk7XG4gICAgfSAvLyBQdWJsaWNcblxuXG4gICAgdmFyIF9wcm90byA9IElGcmFtZS5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8ub25UYWJDbGljayA9IGZ1bmN0aW9uIG9uVGFiQ2xpY2soaXRlbSkge1xuICAgICAgdGhpcy5fY29uZmlnLm9uVGFiQ2xpY2soaXRlbSk7XG4gICAgfTtcblxuICAgIF9wcm90by5vblRhYkNoYW5nZWQgPSBmdW5jdGlvbiBvblRhYkNoYW5nZWQoaXRlbSkge1xuICAgICAgdGhpcy5fY29uZmlnLm9uVGFiQ2hhbmdlZChpdGVtKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLm9uVGFiQ3JlYXRlZCA9IGZ1bmN0aW9uIG9uVGFiQ3JlYXRlZChpdGVtKSB7XG4gICAgICB0aGlzLl9jb25maWcub25UYWJDcmVhdGVkKGl0ZW0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY3JlYXRlVGFiID0gZnVuY3Rpb24gY3JlYXRlVGFiKHRpdGxlLCBsaW5rLCB1bmlxdWVOYW1lLCBhdXRvT3Blbikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIHRhYklkID0gXCJwYW5lbC1cIiArIHVuaXF1ZU5hbWUgKyBcIi1cIiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgICAgdmFyIG5hdklkID0gXCJ0YWItXCIgKyB1bmlxdWVOYW1lICsgXCItXCIgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgICAgIHZhciBuZXdOYXZJdGVtID0gXCI8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIiByb2xlPVxcXCJwcmVzZW50YXRpb25cXFwiPjxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgZGF0YS10b2dnbGU9XFxcInJvd1xcXCIgaWQ9XFxcIlwiICsgbmF2SWQgKyBcIlxcXCIgaHJlZj1cXFwiI1wiICsgdGFiSWQgKyBcIlxcXCIgcm9sZT1cXFwidGFiXFxcIiBhcmlhLWNvbnRyb2xzPVxcXCJcIiArIHRhYklkICsgXCJcXFwiIGFyaWEtc2VsZWN0ZWQ9XFxcImZhbHNlXFxcIj5cIiArIHRpdGxlICsgXCI8L2E+PC9saT5cIjtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9UQUJfTkFWQkFSX05BVikuYXBwZW5kKG5ld05hdkl0ZW0pO1xuICAgICAgdmFyIG5ld1RhYkl0ZW0gPSBcIjxkaXYgY2xhc3M9XFxcInRhYi1wYW5lIGZhZGVcXFwiIGlkPVxcXCJcIiArIHRhYklkICsgXCJcXFwiIHJvbGU9XFxcInRhYnBhbmVsXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIlwiICsgbmF2SWQgKyBcIlxcXCI+PGlmcmFtZSBzcmM9XFxcIlwiICsgbGluayArIFwiXFxcIj48L2lmcmFtZT48L2Rpdj5cIjtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9UQUJfQ09OVEVOVCkuYXBwZW5kKG5ld1RhYkl0ZW0pO1xuXG4gICAgICBpZiAoYXV0b09wZW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5sb2FkaW5nU2NyZWVuKSB7XG4gICAgICAgICAgdmFyICRsb2FkaW5nU2NyZWVuID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1RBQl9MT0FESU5HKTtcbiAgICAgICAgICAkbG9hZGluZ1NjcmVlbi5mYWRlSW4oKTtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGFiSWQgKyBcIiBpZnJhbWVcIikucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5fY29uZmlnLmxvYWRpbmdTY3JlZW4gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgIF90aGlzLnN3aXRjaFRhYihcIiNcIiArIG5hdklkLCBfdGhpcy5fY29uZmlnLmxvYWRpbmdTY3JlZW4pO1xuXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRsb2FkaW5nU2NyZWVuLmZhZGVPdXQoKTtcbiAgICAgICAgICAgICAgfSwgX3RoaXMuX2NvbmZpZy5sb2FkaW5nU2NyZWVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF90aGlzLnN3aXRjaFRhYihcIiNcIiArIG5hdklkLCBfdGhpcy5fY29uZmlnLmxvYWRpbmdTY3JlZW4pO1xuXG4gICAgICAgICAgICAgICRsb2FkaW5nU2NyZWVuLmZhZGVPdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN3aXRjaFRhYihcIiNcIiArIG5hdklkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLm9uVGFiQ3JlYXRlZCgkX19kZWZhdWx0WydkZWZhdWx0J10oXCIjXCIgKyBuYXZJZCkpO1xuICAgIH07XG5cbiAgICBfcHJvdG8ub3BlblRhYlNpZGViYXIgPSBmdW5jdGlvbiBvcGVuVGFiU2lkZWJhcihpdGVtLCBhdXRvT3Blbikge1xuICAgICAgaWYgKGF1dG9PcGVuID09PSB2b2lkIDApIHtcbiAgICAgICAgYXV0b09wZW4gPSB0aGlzLl9jb25maWcuYXV0b1Nob3dOZXdUYWI7XG4gICAgICB9XG5cbiAgICAgIHZhciAkaXRlbSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShpdGVtKS5jbG9uZSgpO1xuXG4gICAgICBpZiAoJGl0ZW0uYXR0cignaHJlZicpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgJGl0ZW0gPSAkX19kZWZhdWx0WydkZWZhdWx0J10oaXRlbSkucGFyZW50KCdhJykuY2xvbmUoKTtcbiAgICAgIH1cblxuICAgICAgJGl0ZW0uZmluZCgnLnJpZ2h0JykucmVtb3ZlKCk7XG4gICAgICB2YXIgdGl0bGUgPSAkaXRlbS5maW5kKCdwJykudGV4dCgpO1xuXG4gICAgICBpZiAodGl0bGUgPT09ICcnKSB7XG4gICAgICAgIHRpdGxlID0gJGl0ZW0udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGluayA9ICRpdGVtLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgaWYgKGxpbmsgPT09ICcjJyB8fCBsaW5rID09PSAnJyB8fCBsaW5rID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNyZWF0ZVRhYih0aXRsZSwgbGluaywgbGluay5yZXBsYWNlKCcuaHRtbCcsICcnKS5yZXBsYWNlKCcuLycsICcnKS5yZXBsYWNlQWxsKCcvJywgJy0nKSwgYXV0b09wZW4pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc3dpdGNoVGFiID0gZnVuY3Rpb24gc3dpdGNoVGFiKGl0ZW0pIHtcbiAgICAgIHZhciAkaXRlbSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShpdGVtKTtcbiAgICAgIHZhciB0YWJJZCA9ICRpdGVtLmF0dHIoJ2hyZWYnKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9UQUJfRU1QVFkpLmhpZGUoKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9UQUJfTkFWQkFSX05BViArIFwiIC5hY3RpdmVcIikudGFiKCdkaXNwb3NlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICB0aGlzLl9maXhIZWlnaHQoKTtcblxuICAgICAgJGl0ZW0udGFiKCdzaG93Jyk7XG4gICAgICAkaXRlbS5wYXJlbnRzKCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIHRoaXMub25UYWJDaGFuZ2VkKCRpdGVtKTtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvSXRlbUFjdGl2ZSkge1xuICAgICAgICB0aGlzLl9zZXRJdGVtQWN0aXZlKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0YWJJZCArIFwiIGlmcmFtZVwiKS5hdHRyKCdzcmMnKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5yZW1vdmVBY3RpdmVUYWIgPSBmdW5jdGlvbiByZW1vdmVBY3RpdmVUYWIoKSB7XG4gICAgICB2YXIgJG5hdkl0ZW0gPSAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfVEFCX05BVkJBUl9OQVZfSVRFTSArIFwiLmFjdGl2ZVwiKTtcbiAgICAgIHZhciAkbmF2SXRlbVBhcmVudCA9ICRuYXZJdGVtLnBhcmVudCgpO1xuICAgICAgdmFyIG5hdkl0ZW1JbmRleCA9ICRuYXZJdGVtLmluZGV4KCk7XG4gICAgICAkbmF2SXRlbS5yZW1vdmUoKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnLnRhYi1wYW5lLmFjdGl2ZScpLnJlbW92ZSgpO1xuXG4gICAgICBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1RBQl9DT05URU5UKS5jaGlsZHJlbigpLmxlbmd0aCA9PSAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfVEFCX0VNUFRZICsgXCIsIFwiICsgU0VMRUNUT1JfVEFCX0xPQURJTkcpLmxlbmd0aCkge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfVEFCX0VNUFRZKS5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcHJldk5hdkl0ZW1JbmRleCA9IG5hdkl0ZW1JbmRleCAtIDE7XG4gICAgICAgIHRoaXMuc3dpdGNoVGFiKCRuYXZJdGVtUGFyZW50LmNoaWxkcmVuKCkuZXEocHJldk5hdkl0ZW1JbmRleCkuZmluZCgnYScpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLnRvZ2dsZUZ1bGxzY3JlZW4gPSBmdW5jdGlvbiB0b2dnbGVGdWxsc2NyZWVuKCkge1xuICAgICAgaWYgKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnYm9keScpLmhhc0NsYXNzKENMQVNTX05BTUVfRlVMTFNDUkVFTl9NT0RFKSkge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfREFUQV9UT0dHTEVfRlVMTFNDUkVFTiArIFwiIGlcIikucmVtb3ZlQ2xhc3ModGhpcy5fY29uZmlnLmljb25NaW5pbWl6ZSkuYWRkQ2xhc3ModGhpcy5fY29uZmlnLmljb25NYXhpbWl6ZSk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnYm9keScpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfRlVMTFNDUkVFTl9NT0RFKTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1RBQl9FTVBUWSArIFwiLCBcIiArIFNFTEVDVE9SX1RBQl9MT0FESU5HKS5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0NPTlRFTlRfV1JBUFBFUikuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9DT05URU5UX0lGUkFNRSkuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfREFUQV9UT0dHTEVfRlVMTFNDUkVFTiArIFwiIGlcIikucmVtb3ZlQ2xhc3ModGhpcy5fY29uZmlnLmljb25NYXhpbWl6ZSkuYWRkQ2xhc3ModGhpcy5fY29uZmlnLmljb25NaW5pbWl6ZSk7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnYm9keScpLmFkZENsYXNzKENMQVNTX05BTUVfRlVMTFNDUkVFTl9NT0RFKTtcbiAgICAgIH1cblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XG5cbiAgICAgIHRoaXMuX2ZpeEhlaWdodCh0cnVlKTtcbiAgICB9IC8vIFByaXZhdGVcbiAgICA7XG5cbiAgICBfcHJvdG8uX2luaXQgPSBmdW5jdGlvbiBfaW5pdCgpIHtcbiAgICAgIGlmICh3aW5kb3cuZnJhbWVFbGVtZW50ICYmIHRoaXMuX2NvbmZpZy5hdXRvSWZyYW1lTW9kZSkge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oJ2JvZHknKS5hZGRDbGFzcyhDTEFTU19OQU1FX0lGUkFNRV9NT0RFKTtcbiAgICAgIH0gZWxzZSBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0NPTlRFTlRfV1JBUFBFUikuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9JRlJBTUVfTU9ERSkpIHtcbiAgICAgICAgdGhpcy5fc2V0dXBMaXN0ZW5lcnMoKTtcblxuICAgICAgICB0aGlzLl9maXhIZWlnaHQodHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fbmF2U2Nyb2xsID0gZnVuY3Rpb24gX25hdlNjcm9sbChvZmZzZXQpIHtcbiAgICAgIHZhciBsZWZ0UG9zID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1RBQl9OQVZCQVJfTkFWKS5zY3JvbGxMZWZ0KCk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfVEFCX05BVkJBUl9OQVYpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxMZWZ0OiBsZWZ0UG9zICsgb2Zmc2V0XG4gICAgICB9LCAyNTAsICdsaW5lYXInKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zZXR1cExpc3RlbmVycyA9IGZ1bmN0aW9uIF9zZXR1cExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10od2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX2ZpeEhlaWdodCgpO1xuICAgICAgICB9LCAxKTtcbiAgICAgIH0pO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vbignY2xpY2snLCBTRUxFQ1RPUl9TSURFQkFSX01FTlVfSVRFTSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIF90aGlzMi5vcGVuVGFiU2lkZWJhcihlLnRhcmdldCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy51c2VOYXZiYXJJdGVtcykge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0hFQURFUl9NRU5VX0lURU0gKyBcIiwgXCIgKyBTRUxFQ1RPUl9IRUFERVJfRFJPUERPV05fSVRFTSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBfdGhpczIub3BlblRhYlNpZGViYXIoZS50YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vbignY2xpY2snLCBTRUxFQ1RPUl9UQUJfTkFWQkFSX05BVl9JVEVNLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgX3RoaXMyLm9uVGFiQ2xpY2soZS50YXJnZXQpO1xuXG4gICAgICAgIF90aGlzMi5zd2l0Y2hUYWIoZS50YXJnZXQpO1xuICAgICAgfSk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0RBVEFfVE9HR0xFX0NMT1NFLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgX3RoaXMyLnJlbW92ZUFjdGl2ZVRhYigpO1xuICAgICAgfSk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0RBVEFfVE9HR0xFX0ZVTExTQ1JFRU4sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBfdGhpczIudG9nZ2xlRnVsbHNjcmVlbigpO1xuICAgICAgfSk7XG4gICAgICB2YXIgbW91c2Vkb3duID0gZmFsc2U7XG4gICAgICB2YXIgbW91c2Vkb3duSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vbignbW91c2Vkb3duJywgU0VMRUNUT1JfREFUQV9UT0dHTEVfU0NST0xMX0xFRlQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChtb3VzZWRvd25JbnRlcnZhbCk7XG4gICAgICAgIHZhciBzY3JvbGxPZmZzZXQgPSBfdGhpczIuX2NvbmZpZy5zY3JvbGxPZmZzZXQ7XG5cbiAgICAgICAgaWYgKCFfdGhpczIuX2NvbmZpZy5zY3JvbGxCZWhhdmlvclN3YXApIHtcbiAgICAgICAgICBzY3JvbGxPZmZzZXQgPSAtc2Nyb2xsT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgbW91c2Vkb3duID0gdHJ1ZTtcblxuICAgICAgICBfdGhpczIuX25hdlNjcm9sbChzY3JvbGxPZmZzZXQpO1xuXG4gICAgICAgIG1vdXNlZG93bkludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5fbmF2U2Nyb2xsKHNjcm9sbE9mZnNldCk7XG4gICAgICAgIH0sIDI1MCk7XG4gICAgICB9KTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudCkub24oJ21vdXNlZG93bicsIFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NDUk9MTF9SSUdIVCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjbGVhckludGVydmFsKG1vdXNlZG93bkludGVydmFsKTtcbiAgICAgICAgdmFyIHNjcm9sbE9mZnNldCA9IF90aGlzMi5fY29uZmlnLnNjcm9sbE9mZnNldDtcblxuICAgICAgICBpZiAoX3RoaXMyLl9jb25maWcuc2Nyb2xsQmVoYXZpb3JTd2FwKSB7XG4gICAgICAgICAgc2Nyb2xsT2Zmc2V0ID0gLXNjcm9sbE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vdXNlZG93biA9IHRydWU7XG5cbiAgICAgICAgX3RoaXMyLl9uYXZTY3JvbGwoc2Nyb2xsT2Zmc2V0KTtcblxuICAgICAgICBtb3VzZWRvd25JbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX25hdlNjcm9sbChzY3JvbGxPZmZzZXQpO1xuICAgICAgICB9LCAyNTApO1xuICAgICAgfSk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9uKCdtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobW91c2Vkb3duKSB7XG4gICAgICAgICAgbW91c2Vkb3duID0gZmFsc2U7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChtb3VzZWRvd25JbnRlcnZhbCk7XG4gICAgICAgICAgbW91c2Vkb3duSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zZXRJdGVtQWN0aXZlID0gZnVuY3Rpb24gX3NldEl0ZW1BY3RpdmUoaHJlZikge1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1NJREVCQVJfTUVOVV9JVEVNICsgXCIsIFwiICsgU0VMRUNUT1JfSEVBREVSX0RST1BET1dOX0lURU0pLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9IRUFERVJfTUVOVV9JVEVNKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICB2YXIgJGhlYWRlck1lbnVJdGVtID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0hFQURFUl9NRU5VX0lURU0gKyBcIltocmVmJD1cXFwiXCIgKyBocmVmICsgXCJcXFwiXVwiKTtcbiAgICAgIHZhciAkaGVhZGVyRHJvcGRvd25JdGVtID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0hFQURFUl9EUk9QRE9XTl9JVEVNICsgXCJbaHJlZiQ9XFxcIlwiICsgaHJlZiArIFwiXFxcIl1cIik7XG4gICAgICB2YXIgJHNpZGViYXJNZW51SXRlbSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9TSURFQkFSX01FTlVfSVRFTSArIFwiW2hyZWYkPVxcXCJcIiArIGhyZWYgKyBcIlxcXCJdXCIpO1xuICAgICAgJGhlYWRlck1lbnVJdGVtLmVhY2goZnVuY3Rpb24gKGksIGUpIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGUpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgICAgJGhlYWRlckRyb3Bkb3duSXRlbS5lYWNoKGZ1bmN0aW9uIChpLCBlKSB7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShlKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgICRzaWRlYmFyTWVudUl0ZW0uZWFjaChmdW5jdGlvbiAoaSwgZSkge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oZSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oZSkucGFyZW50cygnLm5hdi10cmVldmlldycpLnByZXZBbGwoJy5uYXYtbGluaycpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2ZpeEhlaWdodCA9IGZ1bmN0aW9uIF9maXhIZWlnaHQodGFiRW1wdHkpIHtcbiAgICAgIGlmICh0YWJFbXB0eSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHRhYkVtcHR5ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICgkX19kZWZhdWx0WydkZWZhdWx0J10oJ2JvZHknKS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZVTExTQ1JFRU5fTU9ERSkpIHtcbiAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfVEFCX0VNUFRZICsgXCIsIFwiICsgU0VMRUNUT1JfVEFCX0xPQURJTkcpLmhlaWdodCh3aW5kb3dIZWlnaHQpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfQ09OVEVOVF9XUkFQUEVSKS5oZWlnaHQod2luZG93SGVpZ2h0KTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0NPTlRFTlRfSUZSQU1FKS5oZWlnaHQod2luZG93SGVpZ2h0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjb250ZW50V3JhcHBlckhlaWdodCA9IHBhcnNlRmxvYXQoJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0NPTlRFTlRfV1JBUFBFUikuY3NzKCdtaW4taGVpZ2h0JykpO1xuICAgICAgICB2YXIgbmF2YmFySGVpZ2h0ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1RBQl9OQVYpLm91dGVySGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKHRhYkVtcHR5ID09IHRydWUpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9UQUJfRU1QVFkgKyBcIiwgXCIgKyBTRUxFQ1RPUl9UQUJfTE9BRElORykuaGVpZ2h0KGNvbnRlbnRXcmFwcGVySGVpZ2h0IC0gbmF2YmFySGVpZ2h0KTtcbiAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0NPTlRFTlRfSUZSQU1FKS5oZWlnaHQoY29udGVudFdyYXBwZXJIZWlnaHQgLSBuYXZiYXJIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBJRnJhbWUuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2Uob3BlcmF0aW9uKSB7XG4gICAgICB2YXIgZGF0YSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJDcpO1xuXG4gICAgICB2YXIgX29wdGlvbnMgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZXh0ZW5kKHt9LCBEZWZhdWx0JDUsICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKCkpO1xuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBJRnJhbWUodGhpcywgX29wdGlvbnMpO1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSQ3LCBkYXRhKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcGVyYXRpb24gPT09ICdzdHJpbmcnICYmIG9wZXJhdGlvbi5tYXRjaCgvY3JlYXRlVGFifG9wZW5UYWJTaWRlYmFyfHN3aXRjaFRhYnxyZW1vdmVBY3RpdmVUYWIvKSkge1xuICAgICAgICB2YXIgX2RhdGE7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgKF9kYXRhID0gZGF0YSlbb3BlcmF0aW9uXS5hcHBseShfZGF0YSwgYXJncyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBJRnJhbWU7XG4gIH0oKTtcbiAgLyoqXG4gICAqIERhdGEgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10od2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBJRnJhbWUuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzKSk7XG4gIH0pO1xuICAvKipcbiAgICogalF1ZXJ5IEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDddID0gSUZyYW1lLl9qUXVlcnlJbnRlcmZhY2U7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDddLkNvbnN0cnVjdG9yID0gSUZyYW1lO1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDddLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkN10gPSBKUVVFUllfTk9fQ09ORkxJQ1QkNztcbiAgICByZXR1cm4gSUZyYW1lLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIExheW91dC5qc1xuICAgKiBMaWNlbnNlIE1JVFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIHZhciBOQU1FJDggPSAnTGF5b3V0JztcbiAgdmFyIERBVEFfS0VZJDggPSAnbHRlLmxheW91dCc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkOCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDhdO1xuICB2YXIgU0VMRUNUT1JfSEVBREVSJDEgPSAnLm1haW4taGVhZGVyJztcbiAgdmFyIFNFTEVDVE9SX01BSU5fU0lERUJBUiA9ICcubWFpbi1zaWRlYmFyJztcbiAgdmFyIFNFTEVDVE9SX1NJREVCQVIgPSAnLm1haW4tc2lkZWJhciAuc2lkZWJhcic7XG4gIHZhciBTRUxFQ1RPUl9DT05URU5UID0gJy5jb250ZW50LXdyYXBwZXInO1xuICB2YXIgU0VMRUNUT1JfQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQkMSA9ICcuY29udHJvbC1zaWRlYmFyLWNvbnRlbnQnO1xuICB2YXIgU0VMRUNUT1JfQ09OVFJPTF9TSURFQkFSX0JUTiA9ICdbZGF0YS13aWRnZXQ9XCJjb250cm9sLXNpZGViYXJcIl0nO1xuICB2YXIgU0VMRUNUT1JfRk9PVEVSJDEgPSAnLm1haW4tZm9vdGVyJztcbiAgdmFyIFNFTEVDVE9SX1BVU0hNRU5VX0JUTiA9ICdbZGF0YS13aWRnZXQ9XCJwdXNobWVudVwiXSc7XG4gIHZhciBTRUxFQ1RPUl9MT0dJTl9CT1ggPSAnLmxvZ2luLWJveCc7XG4gIHZhciBTRUxFQ1RPUl9SRUdJU1RFUl9CT1ggPSAnLnJlZ2lzdGVyLWJveCc7XG4gIHZhciBDTEFTU19OQU1FX1NJREVCQVJfRk9DVVNFRCA9ICdzaWRlYmFyLWZvY3VzZWQnO1xuICB2YXIgQ0xBU1NfTkFNRV9MQVlPVVRfRklYRUQkMSA9ICdsYXlvdXQtZml4ZWQnO1xuICB2YXIgQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfU0xJREVfT1BFTiA9ICdjb250cm9sLXNpZGViYXItc2xpZGUtb3Blbic7XG4gIHZhciBDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9PUEVOJDEgPSAnY29udHJvbC1zaWRlYmFyLW9wZW4nO1xuICB2YXIgQ0xBU1NfTkFNRV9MQVlPVVRfVE9QX05BViA9ICdsYXlvdXQtdG9wLW5hdic7XG4gIHZhciBEZWZhdWx0JDYgPSB7XG4gICAgc2Nyb2xsYmFyVGhlbWU6ICdvcy10aGVtZS1saWdodCcsXG4gICAgc2Nyb2xsYmFyQXV0b0hpZGU6ICdsJyxcbiAgICBwYW5lbEF1dG9IZWlnaHQ6IHRydWUsXG4gICAgcGFuZWxBdXRvSGVpZ2h0TW9kZTogJ21pbi1oZWlnaHQnLFxuICAgIGxvZ2luUmVnaXN0ZXJBdXRvSGVpZ2h0OiB0cnVlXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgdmFyIExheW91dCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGF5b3V0KGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICB2YXIgX3Byb3RvID0gTGF5b3V0LnByb3RvdHlwZTtcblxuICAgIF9wcm90by5maXhMYXlvdXRIZWlnaHQgPSBmdW5jdGlvbiBmaXhMYXlvdXRIZWlnaHQoZXh0cmEpIHtcbiAgICAgIGlmIChleHRyYSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGV4dHJhID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyICRib2R5ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdib2R5Jyk7XG4gICAgICB2YXIgY29udHJvbFNpZGViYXIgPSAwO1xuXG4gICAgICBpZiAoJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfU0xJREVfT1BFTikgfHwgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfT1BFTiQxKSB8fCBleHRyYSA9PT0gJ2NvbnRyb2xfc2lkZWJhcicpIHtcbiAgICAgICAgY29udHJvbFNpZGViYXIgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQkMSkuaGVpZ2h0KCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBoZWlnaHRzID0ge1xuICAgICAgICB3aW5kb3c6ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh3aW5kb3cpLmhlaWdodCgpLFxuICAgICAgICBoZWFkZXI6ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9IRUFERVIkMSkubGVuZ3RoICE9PSAwID8gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0hFQURFUiQxKS5vdXRlckhlaWdodCgpIDogMCxcbiAgICAgICAgZm9vdGVyOiAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfRk9PVEVSJDEpLmxlbmd0aCAhPT0gMCA/ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9GT09URVIkMSkub3V0ZXJIZWlnaHQoKSA6IDAsXG4gICAgICAgIHNpZGViYXI6ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9TSURFQkFSKS5sZW5ndGggIT09IDAgPyAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfU0lERUJBUikuaGVpZ2h0KCkgOiAwLFxuICAgICAgICBjb250cm9sU2lkZWJhcjogY29udHJvbFNpZGViYXJcbiAgICAgIH07XG5cbiAgICAgIHZhciBtYXggPSB0aGlzLl9tYXgoaGVpZ2h0cyk7XG5cbiAgICAgIHZhciBvZmZzZXQgPSB0aGlzLl9jb25maWcucGFuZWxBdXRvSGVpZ2h0O1xuXG4gICAgICBpZiAob2Zmc2V0ID09PSB0cnVlKSB7XG4gICAgICAgIG9mZnNldCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciAkY29udGVudFNlbGVjdG9yID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0NPTlRFTlQpO1xuXG4gICAgICBpZiAob2Zmc2V0ICE9PSBmYWxzZSkge1xuICAgICAgICBpZiAobWF4ID09PSBoZWlnaHRzLmNvbnRyb2xTaWRlYmFyKSB7XG4gICAgICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfTEFZT1VUX1RPUF9OQVYpKSB7XG4gICAgICAgICAgICAkY29udGVudFNlbGVjdG9yLmNzcyh0aGlzLl9jb25maWcucGFuZWxBdXRvSGVpZ2h0TW9kZSwgbWF4ICsgb2Zmc2V0ICsgaGVpZ2h0cy5oZWFkZXIgKyBoZWlnaHRzLmZvb3Rlcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRjb250ZW50U2VsZWN0b3IuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlLCBtYXggKyBvZmZzZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtYXggPT09IGhlaWdodHMud2luZG93KSB7XG4gICAgICAgICAgJGNvbnRlbnRTZWxlY3Rvci5jc3ModGhpcy5fY29uZmlnLnBhbmVsQXV0b0hlaWdodE1vZGUsIG1heCArIG9mZnNldCAtIGhlaWdodHMuaGVhZGVyIC0gaGVpZ2h0cy5mb290ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRjb250ZW50U2VsZWN0b3IuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlLCBtYXggKyBvZmZzZXQgLSBoZWlnaHRzLmhlYWRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5faXNGb290ZXJGaXhlZCgpKSB7XG4gICAgICAgICAgJGNvbnRlbnRTZWxlY3Rvci5jc3ModGhpcy5fY29uZmlnLnBhbmVsQXV0b0hlaWdodE1vZGUsIHBhcnNlRmxvYXQoJGNvbnRlbnRTZWxlY3Rvci5jc3ModGhpcy5fY29uZmlnLnBhbmVsQXV0b0hlaWdodE1vZGUpKSArIGhlaWdodHMuZm9vdGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoISRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfTEFZT1VUX0ZJWEVEJDEpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9mZnNldCAhPT0gZmFsc2UpIHtcbiAgICAgICAgJGNvbnRlbnRTZWxlY3Rvci5jc3ModGhpcy5fY29uZmlnLnBhbmVsQXV0b0hlaWdodE1vZGUsIG1heCArIG9mZnNldCAtIGhlaWdodHMuaGVhZGVyIC0gaGVpZ2h0cy5mb290ZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbi5vdmVybGF5U2Nyb2xsYmFycyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1NJREVCQVIpLm92ZXJsYXlTY3JvbGxiYXJzKHtcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuX2NvbmZpZy5zY3JvbGxiYXJUaGVtZSxcbiAgICAgICAgICBzaXplQXV0b0NhcGFibGU6IHRydWUsXG4gICAgICAgICAgc2Nyb2xsYmFyczoge1xuICAgICAgICAgICAgYXV0b0hpZGU6IHRoaXMuX2NvbmZpZy5zY3JvbGxiYXJBdXRvSGlkZSxcbiAgICAgICAgICAgIGNsaWNrU2Nyb2xsaW5nOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmZpeExvZ2luUmVnaXN0ZXJIZWlnaHQgPSBmdW5jdGlvbiBmaXhMb2dpblJlZ2lzdGVySGVpZ2h0KCkge1xuICAgICAgdmFyICRib2R5ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdib2R5Jyk7XG4gICAgICB2YXIgJHNlbGVjdG9yID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0xPR0lOX0JPWCArIFwiLCBcIiArIFNFTEVDVE9SX1JFR0lTVEVSX0JPWCk7XG5cbiAgICAgIGlmICgkc2VsZWN0b3IubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICRib2R5LmNzcygnaGVpZ2h0JywgJ2F1dG8nKTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdodG1sJykuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGJveEhlaWdodCA9ICRzZWxlY3Rvci5oZWlnaHQoKTtcblxuICAgICAgICBpZiAoJGJvZHkuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlKSAhPT0gYm94SGVpZ2h0KSB7XG4gICAgICAgICAgJGJvZHkuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlLCBib3hIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9pbml0ID0gZnVuY3Rpb24gX2luaXQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAvLyBBY3RpdmF0ZSBsYXlvdXQgaGVpZ2h0IHdhdGNoZXJcbiAgICAgIHRoaXMuZml4TGF5b3V0SGVpZ2h0KCk7XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcubG9naW5SZWdpc3RlckF1dG9IZWlnaHQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5maXhMb2dpblJlZ2lzdGVySGVpZ2h0KCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5sb2dpblJlZ2lzdGVyQXV0b0hlaWdodCA9PT0gcGFyc2VJbnQodGhpcy5fY29uZmlnLmxvZ2luUmVnaXN0ZXJBdXRvSGVpZ2h0LCAxMCkpIHtcbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5maXhMb2dpblJlZ2lzdGVySGVpZ2h0LCB0aGlzLl9jb25maWcubG9naW5SZWdpc3RlckF1dG9IZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfU0lERUJBUikub24oJ2NvbGxhcHNlZC5sdGUudHJlZXZpZXcgZXhwYW5kZWQubHRlLnRyZWV2aWV3JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5maXhMYXlvdXRIZWlnaHQoKTtcbiAgICAgIH0pO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1BVU0hNRU5VX0JUTikub24oJ2NvbGxhcHNlZC5sdGUucHVzaG1lbnUgc2hvd24ubHRlLnB1c2htZW51JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5maXhMYXlvdXRIZWlnaHQoKTtcbiAgICAgIH0pO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUl9CVE4pLm9uKCdjb2xsYXBzZWQubHRlLmNvbnRyb2xzaWRlYmFyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5maXhMYXlvdXRIZWlnaHQoKTtcbiAgICAgIH0pLm9uKCdleHBhbmRlZC5sdGUuY29udHJvbHNpZGViYXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmZpeExheW91dEhlaWdodCgnY29udHJvbF9zaWRlYmFyJyk7XG4gICAgICB9KTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmZpeExheW91dEhlaWdodCgpO1xuICAgICAgfSk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuZml4TGF5b3V0SGVpZ2h0KCk7XG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oJ2JvZHkuaG9sZC10cmFuc2l0aW9uJykucmVtb3ZlQ2xhc3MoJ2hvbGQtdHJhbnNpdGlvbicpO1xuICAgICAgfSwgNTApO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX21heCA9IGZ1bmN0aW9uIF9tYXgobnVtYmVycykge1xuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBtYXhpbXVtIG51bWJlciBpbiBhIGxpc3RcbiAgICAgIHZhciBtYXggPSAwO1xuICAgICAgT2JqZWN0LmtleXMobnVtYmVycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChudW1iZXJzW2tleV0gPiBtYXgpIHtcbiAgICAgICAgICBtYXggPSBudW1iZXJzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1heDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9pc0Zvb3RlckZpeGVkID0gZnVuY3Rpb24gX2lzRm9vdGVyRml4ZWQoKSB7XG4gICAgICByZXR1cm4gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0ZPT1RFUiQxKS5jc3MoJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCc7XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBMYXlvdXQuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHtcbiAgICAgICAgY29uZmlnID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJDgpO1xuXG4gICAgICAgIHZhciBfb3B0aW9ucyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5leHRlbmQoe30sIERlZmF1bHQkNiwgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoKSk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBMYXlvdXQoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLCBfb3B0aW9ucyk7XG4gICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVkkOCwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnID09PSAnaW5pdCcgfHwgY29uZmlnID09PSAnJykge1xuICAgICAgICAgIGRhdGEuX2luaXQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcgPT09ICdmaXhMYXlvdXRIZWlnaHQnIHx8IGNvbmZpZyA9PT0gJ2ZpeExvZ2luUmVnaXN0ZXJIZWlnaHQnKSB7XG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGF5b3V0O1xuICB9KCk7XG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgTGF5b3V0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10oJ2JvZHknKSk7XG4gIH0pO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfU0lERUJBUiArIFwiIGFcIikub24oJ2ZvY3VzaW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX01BSU5fU0lERUJBUikuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9TSURFQkFSX0ZPQ1VTRUQpO1xuICB9KTtcbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1NJREVCQVIgKyBcIiBhXCIpLm9uKCdmb2N1c291dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfTUFJTl9TSURFQkFSKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX1NJREVCQVJfRk9DVVNFRCk7XG4gIH0pO1xuICAvKipcbiAgICogalF1ZXJ5IEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDhdID0gTGF5b3V0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDhdLkNvbnN0cnVjdG9yID0gTGF5b3V0O1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDhdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkOF0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkODtcbiAgICByZXR1cm4gTGF5b3V0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIFB1c2hNZW51LmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgdmFyIE5BTUUkOSA9ICdQdXNoTWVudSc7XG4gIHZhciBEQVRBX0tFWSQ5ID0gJ2x0ZS5wdXNobWVudSc7XG4gIHZhciBFVkVOVF9LRVkkNSA9IFwiLlwiICsgREFUQV9LRVkkOTtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQ5ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkOV07XG4gIHZhciBFVkVOVF9DT0xMQVBTRUQkMyA9IFwiY29sbGFwc2VkXCIgKyBFVkVOVF9LRVkkNTtcbiAgdmFyIEVWRU5UX1NIT1dOID0gXCJzaG93blwiICsgRVZFTlRfS0VZJDU7XG4gIHZhciBTRUxFQ1RPUl9UT0dHTEVfQlVUVE9OID0gJ1tkYXRhLXdpZGdldD1cInB1c2htZW51XCJdJztcbiAgdmFyIFNFTEVDVE9SX0JPRFkgPSAnYm9keSc7XG4gIHZhciBTRUxFQ1RPUl9PVkVSTEFZID0gJyNzaWRlYmFyLW92ZXJsYXknO1xuICB2YXIgU0VMRUNUT1JfV1JBUFBFUiA9ICcud3JhcHBlcic7XG4gIHZhciBDTEFTU19OQU1FX0NPTExBUFNFRCQxID0gJ3NpZGViYXItY29sbGFwc2UnO1xuICB2YXIgQ0xBU1NfTkFNRV9PUEVOID0gJ3NpZGViYXItb3Blbic7XG4gIHZhciBDTEFTU19OQU1FX0lTX09QRU5JTkcgPSAnc2lkZWJhci1pcy1vcGVuaW5nJztcbiAgdmFyIENMQVNTX05BTUVfQ0xPU0VEID0gJ3NpZGViYXItY2xvc2VkJztcbiAgdmFyIERlZmF1bHQkNyA9IHtcbiAgICBhdXRvQ29sbGFwc2VTaXplOiA5OTIsXG4gICAgZW5hYmxlUmVtZW1iZXI6IGZhbHNlLFxuICAgIG5vVHJhbnNpdGlvbkFmdGVyUmVsb2FkOiB0cnVlXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgdmFyIFB1c2hNZW51ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQdXNoTWVudShlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZXh0ZW5kKHt9LCBEZWZhdWx0JDcsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX09WRVJMQVkpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9hZGRPdmVybGF5KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICB2YXIgX3Byb3RvID0gUHVzaE1lbnUucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvLmV4cGFuZCA9IGZ1bmN0aW9uIGV4cGFuZCgpIHtcbiAgICAgIHZhciAkYm9keVNlbGVjdG9yID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0JPRFkpO1xuXG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICAgIGlmICgkX19kZWZhdWx0WydkZWZhdWx0J10od2luZG93KS53aWR0aCgpIDw9IHRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZSkge1xuICAgICAgICAgICRib2R5U2VsZWN0b3IuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9PUEVOKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkYm9keVNlbGVjdG9yLmFkZENsYXNzKENMQVNTX05BTUVfSVNfT1BFTklORykucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQkMSArIFwiIFwiICsgQ0xBU1NfTkFNRV9DTE9TRUQpLmRlbGF5KDUwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICRib2R5U2VsZWN0b3IucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9JU19PUEVOSU5HKTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRlcXVldWUoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5lbmFibGVSZW1lbWJlcikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlbWVtYmVyXCIgKyBFVkVOVF9LRVkkNSwgQ0xBU1NfTkFNRV9PUEVOKTtcbiAgICAgIH1cblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX1NIT1dOKSk7XG4gICAgfTtcblxuICAgIF9wcm90by5jb2xsYXBzZSA9IGZ1bmN0aW9uIGNvbGxhcHNlKCkge1xuICAgICAgdmFyICRib2R5U2VsZWN0b3IgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfQk9EWSk7XG5cbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmF1dG9Db2xsYXBzZVNpemUpIHtcbiAgICAgICAgaWYgKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh3aW5kb3cpLndpZHRoKCkgPD0gdGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICAgICAgJGJvZHlTZWxlY3Rvci5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX09QRU4pLmFkZENsYXNzKENMQVNTX05BTUVfQ0xPU0VEKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkYm9keVNlbGVjdG9yLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEJDEpO1xuXG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5lbmFibGVSZW1lbWJlcikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlbWVtYmVyXCIgKyBFVkVOVF9LRVkkNSwgQ0xBU1NfTkFNRV9DT0xMQVBTRUQkMSk7XG4gICAgICB9XG5cbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5FdmVudChFVkVOVF9DT0xMQVBTRUQkMykpO1xuICAgIH07XG5cbiAgICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgaWYgKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9CT0RZKS5oYXNDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFRCQxKSkge1xuICAgICAgICB0aGlzLmV4cGFuZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uYXV0b0NvbGxhcHNlID0gZnVuY3Rpb24gYXV0b0NvbGxhcHNlKHJlc2l6ZSkge1xuICAgICAgaWYgKHJlc2l6ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJlc2l6ZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciAkYm9keVNlbGVjdG9yID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0JPRFkpO1xuXG4gICAgICBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykud2lkdGgoKSA8PSB0aGlzLl9vcHRpb25zLmF1dG9Db2xsYXBzZVNpemUpIHtcbiAgICAgICAgaWYgKCEkYm9keVNlbGVjdG9yLmhhc0NsYXNzKENMQVNTX05BTUVfT1BFTikpIHtcbiAgICAgICAgICB0aGlzLmNvbGxhcHNlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmVzaXplID09PSB0cnVlKSB7XG4gICAgICAgIGlmICgkYm9keVNlbGVjdG9yLmhhc0NsYXNzKENMQVNTX05BTUVfT1BFTikpIHtcbiAgICAgICAgICAkYm9keVNlbGVjdG9yLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfT1BFTik7XG4gICAgICAgIH0gZWxzZSBpZiAoJGJvZHlTZWxlY3Rvci5oYXNDbGFzcyhDTEFTU19OQU1FX0NMT1NFRCkpIHtcbiAgICAgICAgICB0aGlzLmV4cGFuZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5yZW1lbWJlciA9IGZ1bmN0aW9uIHJlbWVtYmVyKCkge1xuICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLmVuYWJsZVJlbWVtYmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyICRib2R5ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdib2R5Jyk7XG4gICAgICB2YXIgdG9nZ2xlU3RhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlbWVtYmVyXCIgKyBFVkVOVF9LRVkkNSk7XG5cbiAgICAgIGlmICh0b2dnbGVTdGF0ZSA9PT0gQ0xBU1NfTkFNRV9DT0xMQVBTRUQkMSkge1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5ub1RyYW5zaXRpb25BZnRlclJlbG9hZCkge1xuICAgICAgICAgICRib2R5LmFkZENsYXNzKCdob2xkLXRyYW5zaXRpb24nKS5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFRCQxKS5kZWxheSg1MCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLnJlbW92ZUNsYXNzKCdob2xkLXRyYW5zaXRpb24nKTtcbiAgICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kZXF1ZXVlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGJvZHkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQkMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fb3B0aW9ucy5ub1RyYW5zaXRpb25BZnRlclJlbG9hZCkge1xuICAgICAgICAkYm9keS5hZGRDbGFzcygnaG9sZC10cmFuc2l0aW9uJykucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQkMSkuZGVsYXkoNTApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykucmVtb3ZlQ2xhc3MoJ2hvbGQtdHJhbnNpdGlvbicpO1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kZXF1ZXVlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQkMSk7XG4gICAgICB9XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9pbml0ID0gZnVuY3Rpb24gX2luaXQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLnJlbWVtYmVyKCk7XG4gICAgICB0aGlzLmF1dG9Db2xsYXBzZSgpO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuYXV0b0NvbGxhcHNlKHRydWUpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fYWRkT3ZlcmxheSA9IGZ1bmN0aW9uIF9hZGRPdmVybGF5KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBvdmVybGF5ID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKCc8ZGl2IC8+Jywge1xuICAgICAgICBpZDogJ3NpZGViYXItb3ZlcmxheSdcbiAgICAgIH0pO1xuICAgICAgb3ZlcmxheS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5jb2xsYXBzZSgpO1xuICAgICAgfSk7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfV1JBUFBFUikuYXBwZW5kKG92ZXJsYXkpO1xuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgUHVzaE1lbnUuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2Uob3BlcmF0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSQ5KTtcblxuICAgICAgICB2YXIgX29wdGlvbnMgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZXh0ZW5kKHt9LCBEZWZhdWx0JDcsICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKCkpO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgUHVzaE1lbnUodGhpcywgX29wdGlvbnMpO1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJDksIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcGVyYXRpb24gPT09ICdzdHJpbmcnICYmIG9wZXJhdGlvbi5tYXRjaCgvY29sbGFwc2V8ZXhwYW5kfHRvZ2dsZS8pKSB7XG4gICAgICAgICAgZGF0YVtvcGVyYXRpb25dKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gUHVzaE1lbnU7XG4gIH0oKTtcbiAgLyoqXG4gICAqIERhdGEgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX1RPR0dMRV9CVVRUT04sIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKGJ1dHRvbikuZGF0YSgnd2lkZ2V0JykgIT09ICdwdXNobWVudScpIHtcbiAgICAgIGJ1dHRvbiA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShidXR0b24pLmNsb3Nlc3QoU0VMRUNUT1JfVE9HR0xFX0JVVFRPTik7XG4gICAgfVxuXG4gICAgUHVzaE1lbnUuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShidXR0b24pLCAndG9nZ2xlJyk7XG4gIH0pO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10od2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBQdXNoTWVudS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1RPR0dMRV9CVVRUT04pKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkOV0gPSBQdXNoTWVudS5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSQ5XS5Db25zdHJ1Y3RvciA9IFB1c2hNZW51O1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJDldLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkOV0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkOTtcbiAgICByZXR1cm4gUHVzaE1lbnUuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQWRtaW5MVEUgU2lkZWJhclNlYXJjaC5qc1xuICAgKiBMaWNlbnNlIE1JVFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIHZhciBOQU1FJGEgPSAnU2lkZWJhclNlYXJjaCc7XG4gIHZhciBEQVRBX0tFWSRhID0gJ2x0ZS5zaWRlYmFyLXNlYXJjaCc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkYSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJGFdO1xuICB2YXIgQ0xBU1NfTkFNRV9PUEVOJDEgPSAnc2lkZWJhci1zZWFyY2gtb3Blbic7XG4gIHZhciBDTEFTU19OQU1FX0lDT05fU0VBUkNIID0gJ2ZhLXNlYXJjaCc7XG4gIHZhciBDTEFTU19OQU1FX0lDT05fQ0xPU0UgPSAnZmEtdGltZXMnO1xuICB2YXIgQ0xBU1NfTkFNRV9IRUFERVIgPSAnbmF2LWhlYWRlcic7XG4gIHZhciBDTEFTU19OQU1FX1NFQVJDSF9SRVNVTFRTID0gJ3NpZGViYXItc2VhcmNoLXJlc3VsdHMnO1xuICB2YXIgQ0xBU1NfTkFNRV9MSVNUX0dST1VQID0gJ2xpc3QtZ3JvdXAnO1xuICB2YXIgU0VMRUNUT1JfREFUQV9XSURHRVQkMSA9ICdbZGF0YS13aWRnZXQ9XCJzaWRlYmFyLXNlYXJjaFwiXSc7XG4gIHZhciBTRUxFQ1RPUl9TSURFQkFSJDEgPSAnLm1haW4tc2lkZWJhciAubmF2LXNpZGViYXInO1xuICB2YXIgU0VMRUNUT1JfTkFWX0xJTksgPSAnLm5hdi1saW5rJztcbiAgdmFyIFNFTEVDVE9SX05BVl9UUkVFVklFVyA9ICcubmF2LXRyZWV2aWV3JztcbiAgdmFyIFNFTEVDVE9SX1NFQVJDSF9JTlBVVCA9IFNFTEVDVE9SX0RBVEFfV0lER0VUJDEgKyBcIiAuZm9ybS1jb250cm9sXCI7XG4gIHZhciBTRUxFQ1RPUl9TRUFSQ0hfQlVUVE9OID0gU0VMRUNUT1JfREFUQV9XSURHRVQkMSArIFwiIC5idG5cIjtcbiAgdmFyIFNFTEVDVE9SX1NFQVJDSF9JQ09OID0gU0VMRUNUT1JfU0VBUkNIX0JVVFRPTiArIFwiIGlcIjtcbiAgdmFyIFNFTEVDVE9SX1NFQVJDSF9MSVNUX0dST1VQID0gXCIuXCIgKyBDTEFTU19OQU1FX0xJU1RfR1JPVVA7XG4gIHZhciBTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUUyA9IFwiLlwiICsgQ0xBU1NfTkFNRV9TRUFSQ0hfUkVTVUxUUztcbiAgdmFyIFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTX0dST1VQID0gU0VMRUNUT1JfU0VBUkNIX1JFU1VMVFMgKyBcIiAuXCIgKyBDTEFTU19OQU1FX0xJU1RfR1JPVVA7XG4gIHZhciBEZWZhdWx0JDggPSB7XG4gICAgYXJyb3dTaWduOiAnLT4nLFxuICAgIG1pbkxlbmd0aDogMyxcbiAgICBtYXhSZXN1bHRzOiA3LFxuICAgIGhpZ2hsaWdodE5hbWU6IHRydWUsXG4gICAgaGlnaGxpZ2h0UGF0aDogZmFsc2UsXG4gICAgaGlnaGxpZ2h0Q2xhc3M6ICd0ZXh0LWxpZ2h0JyxcbiAgICBub3RGb3VuZFRleHQ6ICdObyBlbGVtZW50IGZvdW5kISdcbiAgfTtcbiAgdmFyIFNlYXJjaEl0ZW1zID0gW107XG4gIC8qKlxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgdmFyIFNpZGViYXJTZWFyY2ggPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNpZGViYXJTZWFyY2goX2VsZW1lbnQsIF9vcHRpb25zKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBfZWxlbWVudDtcbiAgICAgIHRoaXMub3B0aW9ucyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5leHRlbmQoe30sIERlZmF1bHQkOCwgX29wdGlvbnMpO1xuICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH0gLy8gUHVibGljXG5cblxuICAgIHZhciBfcHJvdG8gPSBTaWRlYmFyU2VhcmNoLnByb3RvdHlwZTtcblxuICAgIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICgkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfREFUQV9XSURHRVQkMSkubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0RBVEFfV0lER0VUJDEpLm5leHQoU0VMRUNUT1JfU0VBUkNIX1JFU1VMVFMpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9EQVRBX1dJREdFVCQxKS5hZnRlcigkX19kZWZhdWx0WydkZWZhdWx0J10oJzxkaXYgLz4nLCB7XG4gICAgICAgICAgY2xhc3M6IENMQVNTX05BTUVfU0VBUkNIX1JFU1VMVFNcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTKS5jaGlsZHJlbihTRUxFQ1RPUl9TRUFSQ0hfTElTVF9HUk9VUCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTKS5hcHBlbmQoJF9fZGVmYXVsdFsnZGVmYXVsdCddKCc8ZGl2IC8+Jywge1xuICAgICAgICAgIGNsYXNzOiBDTEFTU19OQU1FX0xJU1RfR1JPVVBcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hZGROb3RGb3VuZCgpO1xuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfU0lERUJBUiQxKS5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24gKGksIGNoaWxkKSB7XG4gICAgICAgIF90aGlzLl9wYXJzZUl0ZW0oY2hpbGQpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5zZWFyY2ggPSBmdW5jdGlvbiBzZWFyY2goKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHNlYXJjaFZhbHVlID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1NFQVJDSF9JTlBVVCkudmFsKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgaWYgKHNlYXJjaFZhbHVlLmxlbmd0aCA8IHRoaXMub3B0aW9ucy5taW5MZW5ndGgpIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTX0dST1VQKS5lbXB0eSgpO1xuXG4gICAgICAgIHRoaXMuX2FkZE5vdEZvdW5kKCk7XG5cbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzZWFyY2hSZXN1bHRzID0gU2VhcmNoSXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBlbmRSZXN1bHRzID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHNlYXJjaFJlc3VsdHMuc2xpY2UoMCwgdGhpcy5vcHRpb25zLm1heFJlc3VsdHMpKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUU19HUk9VUCkuZW1wdHkoKTtcblxuICAgICAgaWYgKGVuZFJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuX2FkZE5vdEZvdW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmRSZXN1bHRzLmVhY2goZnVuY3Rpb24gKGksIHJlc3VsdCkge1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUU19HUk9VUCkuYXBwZW5kKF90aGlzMi5fcmVuZGVySXRlbShyZXN1bHQubmFtZSwgcmVzdWx0LmxpbmssIHJlc3VsdC5wYXRoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLm9wZW4gPSBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX0RBVEFfV0lER0VUJDEpLnBhcmVudCgpLmFkZENsYXNzKENMQVNTX05BTUVfT1BFTiQxKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9TRUFSQ0hfSUNPTikucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9JQ09OX1NFQVJDSCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9JQ09OX0NMT1NFKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmNsb3NlID0gZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfREFUQV9XSURHRVQkMSkucGFyZW50KCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9PUEVOJDEpO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKFNFTEVDVE9SX1NFQVJDSF9JQ09OKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0lDT05fQ0xPU0UpLmFkZENsYXNzKENMQVNTX05BTUVfSUNPTl9TRUFSQ0gpO1xuICAgIH07XG5cbiAgICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgaWYgKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9EQVRBX1dJREdFVCQxKS5wYXJlbnQoKS5oYXNDbGFzcyhDTEFTU19OQU1FX09QRU4kMSkpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9wYXJzZUl0ZW0gPSBmdW5jdGlvbiBfcGFyc2VJdGVtKGl0ZW0sIHBhdGgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHBhdGggPSBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShpdGVtKS5oYXNDbGFzcyhDTEFTU19OQU1FX0hFQURFUikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXRlbU9iamVjdCA9IHt9O1xuICAgICAgdmFyIG5hdkxpbmsgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oaXRlbSkuY2xvbmUoKS5maW5kKFwiPiBcIiArIFNFTEVDVE9SX05BVl9MSU5LKTtcbiAgICAgIHZhciBuYXZUcmVldmlldyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShpdGVtKS5jbG9uZSgpLmZpbmQoXCI+IFwiICsgU0VMRUNUT1JfTkFWX1RSRUVWSUVXKTtcbiAgICAgIHZhciBsaW5rID0gbmF2TGluay5hdHRyKCdocmVmJyk7XG4gICAgICB2YXIgbmFtZSA9IG5hdkxpbmsuZmluZCgncCcpLmNoaWxkcmVuKCkucmVtb3ZlKCkuZW5kKCkudGV4dCgpO1xuICAgICAgaXRlbU9iamVjdC5uYW1lID0gdGhpcy5fdHJpbVRleHQobmFtZSk7XG4gICAgICBpdGVtT2JqZWN0LmxpbmsgPSBsaW5rO1xuICAgICAgaXRlbU9iamVjdC5wYXRoID0gcGF0aDtcblxuICAgICAgaWYgKG5hdlRyZWV2aWV3Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBTZWFyY2hJdGVtcy5wdXNoKGl0ZW1PYmplY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5ld1BhdGggPSBpdGVtT2JqZWN0LnBhdGguY29uY2F0KFtpdGVtT2JqZWN0Lm5hbWVdKTtcbiAgICAgICAgbmF2VHJlZXZpZXcuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uIChpLCBjaGlsZCkge1xuICAgICAgICAgIF90aGlzMy5fcGFyc2VJdGVtKGNoaWxkLCBuZXdQYXRoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fdHJpbVRleHQgPSBmdW5jdGlvbiBfdHJpbVRleHQodGV4dCkge1xuICAgICAgcmV0dXJuICQudHJpbSh0ZXh0LnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sICcgJykpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3JlbmRlckl0ZW0gPSBmdW5jdGlvbiBfcmVuZGVySXRlbShuYW1lLCBsaW5rLCBwYXRoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgcGF0aCA9IHBhdGguam9pbihcIiBcIiArIHRoaXMub3B0aW9ucy5hcnJvd1NpZ24gKyBcIiBcIik7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0TmFtZSB8fCB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0UGF0aCkge1xuICAgICAgICB2YXIgc2VhcmNoVmFsdWUgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfU0VBUkNIX0lOUFVUKS52YWwoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgcmVnRXhwID0gbmV3IFJlZ0V4cChzZWFyY2hWYWx1ZSwgJ2dpJyk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oaWdobGlnaHROYW1lKSB7XG4gICAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZShyZWdFeHAsIGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIjxiIGNsYXNzPVxcXCJcIiArIF90aGlzNC5vcHRpb25zLmhpZ2hsaWdodENsYXNzICsgXCJcXFwiPlwiICsgc3RyICsgXCI8L2I+XCI7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhpZ2hsaWdodFBhdGgpIHtcbiAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKHJlZ0V4cCwgZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgcmV0dXJuIFwiPGIgY2xhc3M9XFxcIlwiICsgX3RoaXM0Lm9wdGlvbnMuaGlnaGxpZ2h0Q2xhc3MgKyBcIlxcXCI+XCIgKyBzdHIgKyBcIjwvYj5cIjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCI8YSBocmVmPVxcXCJcIiArIGxpbmsgKyBcIlxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtdGl0bGVcXFwiPlxcbiAgICAgICAgICBcIiArIG5hbWUgKyBcIlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcGF0aFxcXCI+XFxuICAgICAgICAgIFwiICsgcGF0aCArIFwiXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2E+XCI7XG4gICAgfTtcblxuICAgIF9wcm90by5fYWRkTm90Rm91bmQgPSBmdW5jdGlvbiBfYWRkTm90Rm91bmQoKSB7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfU0VBUkNIX1JFU1VMVFNfR1JPVVApLmFwcGVuZCh0aGlzLl9yZW5kZXJJdGVtKHRoaXMub3B0aW9ucy5ub3RGb3VuZFRleHQsICcjJywgW10pKTtcbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIFNpZGViYXJTZWFyY2guX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICB2YXIgZGF0YSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJGEpO1xuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBfb3B0aW9ucyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5leHRlbmQoe30sIERlZmF1bHQkOCwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBkYXRhKTtcblxuICAgICAgdmFyIHBsdWdpbiA9IG5ldyBTaWRlYmFyU2VhcmNoKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKSwgX29wdGlvbnMpO1xuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVkkYSwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBkYXRhKTtcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIGNvbmZpZy5tYXRjaCgvaW5pdHx0b2dnbGV8Y2xvc2V8b3BlbnxzZWFyY2gvKSkge1xuICAgICAgICBwbHVnaW5bY29uZmlnXSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGx1Z2luLmluaXQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFNpZGViYXJTZWFyY2g7XG4gIH0oKTtcbiAgLyoqXG4gICAqIERhdGEgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX1NFQVJDSF9CVVRUT04sIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBTaWRlYmFyU2VhcmNoLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfREFUQV9XSURHRVQkMSksICd0b2dnbGUnKTtcbiAgfSk7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShkb2N1bWVudCkub24oJ2tleXVwJywgU0VMRUNUT1JfU0VBUkNIX0lOUFVULCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzOCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUU19HUk9VUCkuY2hpbGRyZW4oKS5sYXN0KCkuZm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA0MCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUU19HUk9VUCkuY2hpbGRyZW4oKS5maXJzdCgpLmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRpbWVyID0gMDtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBTaWRlYmFyU2VhcmNoLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfREFUQV9XSURHRVQkMSksICdzZWFyY2gnKTtcbiAgICB9LCAxMDApO1xuICB9KTtcbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKGRvY3VtZW50KS5vbigna2V5ZG93bicsIFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTX0dST1VQLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgJGZvY3VzZWQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oJzpmb2N1cycpO1xuXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMzgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICgkZm9jdXNlZC5pcygnOmZpcnN0LWNoaWxkJykpIHtcbiAgICAgICAgJGZvY3VzZWQuc2libGluZ3MoKS5sYXN0KCkuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRmb2N1c2VkLnByZXYoKS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChldmVudC5rZXlDb2RlID09IDQwKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoJGZvY3VzZWQuaXMoJzpsYXN0LWNoaWxkJykpIHtcbiAgICAgICAgJGZvY3VzZWQuc2libGluZ3MoKS5maXJzdCgpLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZm9jdXNlZC5uZXh0KCkuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10od2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBTaWRlYmFyU2VhcmNoLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10oU0VMRUNUT1JfREFUQV9XSURHRVQkMSksICdpbml0Jyk7XG4gIH0pO1xuICAvKipcbiAgICogalF1ZXJ5IEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJGFdID0gU2lkZWJhclNlYXJjaC5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSRhXS5Db25zdHJ1Y3RvciA9IFNpZGViYXJTZWFyY2g7XG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkYV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSRhXSA9IEpRVUVSWV9OT19DT05GTElDVCRhO1xuICAgIHJldHVybiBTaWRlYmFyU2VhcmNoLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIFRvYXN0cy5qc1xuICAgKiBMaWNlbnNlIE1JVFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIHZhciBOQU1FJGIgPSAnVG9hc3RzJztcbiAgdmFyIERBVEFfS0VZJGIgPSAnbHRlLnRvYXN0cyc7XG4gIHZhciBFVkVOVF9LRVkkNiA9IFwiLlwiICsgREFUQV9LRVkkYjtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCRiID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkYl07XG4gIHZhciBFVkVOVF9JTklUID0gXCJpbml0XCIgKyBFVkVOVF9LRVkkNjtcbiAgdmFyIEVWRU5UX0NSRUFURUQgPSBcImNyZWF0ZWRcIiArIEVWRU5UX0tFWSQ2O1xuICB2YXIgRVZFTlRfUkVNT1ZFRCQxID0gXCJyZW1vdmVkXCIgKyBFVkVOVF9LRVkkNjtcbiAgdmFyIFNFTEVDVE9SX0NPTlRBSU5FUl9UT1BfUklHSFQgPSAnI3RvYXN0c0NvbnRhaW5lclRvcFJpZ2h0JztcbiAgdmFyIFNFTEVDVE9SX0NPTlRBSU5FUl9UT1BfTEVGVCA9ICcjdG9hc3RzQ29udGFpbmVyVG9wTGVmdCc7XG4gIHZhciBTRUxFQ1RPUl9DT05UQUlORVJfQk9UVE9NX1JJR0hUID0gJyN0b2FzdHNDb250YWluZXJCb3R0b21SaWdodCc7XG4gIHZhciBTRUxFQ1RPUl9DT05UQUlORVJfQk9UVE9NX0xFRlQgPSAnI3RvYXN0c0NvbnRhaW5lckJvdHRvbUxlZnQnO1xuICB2YXIgQ0xBU1NfTkFNRV9UT1BfUklHSFQgPSAndG9hc3RzLXRvcC1yaWdodCc7XG4gIHZhciBDTEFTU19OQU1FX1RPUF9MRUZUID0gJ3RvYXN0cy10b3AtbGVmdCc7XG4gIHZhciBDTEFTU19OQU1FX0JPVFRPTV9SSUdIVCA9ICd0b2FzdHMtYm90dG9tLXJpZ2h0JztcbiAgdmFyIENMQVNTX05BTUVfQk9UVE9NX0xFRlQgPSAndG9hc3RzLWJvdHRvbS1sZWZ0JztcbiAgdmFyIFBPU0lUSU9OX1RPUF9SSUdIVCA9ICd0b3BSaWdodCc7XG4gIHZhciBQT1NJVElPTl9UT1BfTEVGVCA9ICd0b3BMZWZ0JztcbiAgdmFyIFBPU0lUSU9OX0JPVFRPTV9SSUdIVCA9ICdib3R0b21SaWdodCc7XG4gIHZhciBQT1NJVElPTl9CT1RUT01fTEVGVCA9ICdib3R0b21MZWZ0JztcbiAgdmFyIERlZmF1bHQkOSA9IHtcbiAgICBwb3NpdGlvbjogUE9TSVRJT05fVE9QX1JJR0hULFxuICAgIGZpeGVkOiB0cnVlLFxuICAgIGF1dG9oaWRlOiBmYWxzZSxcbiAgICBhdXRvcmVtb3ZlOiB0cnVlLFxuICAgIGRlbGF5OiAxMDAwLFxuICAgIGZhZGU6IHRydWUsXG4gICAgaWNvbjogbnVsbCxcbiAgICBpbWFnZTogbnVsbCxcbiAgICBpbWFnZUFsdDogbnVsbCxcbiAgICBpbWFnZUhlaWdodDogJzI1cHgnLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHN1YnRpdGxlOiBudWxsLFxuICAgIGNsb3NlOiB0cnVlLFxuICAgIGJvZHk6IG51bGwsXG4gICAgY2xhc3M6IG51bGxcbiAgfTtcbiAgLyoqXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICB2YXIgVG9hc3RzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUb2FzdHMoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICAgIHRoaXMuX3ByZXBhcmVDb250YWluZXIoKTtcblxuICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKCdib2R5JykudHJpZ2dlcigkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfSU5JVCkpO1xuICAgIH0gLy8gUHVibGljXG5cblxuICAgIHZhciBfcHJvdG8gPSBUb2FzdHMucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciB0b2FzdCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnPGRpdiBjbGFzcz1cInRvYXN0XCIgcm9sZT1cImFsZXJ0XCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgYXJpYS1hdG9taWM9XCJ0cnVlXCIvPicpO1xuICAgICAgdG9hc3QuZGF0YSgnYXV0b2hpZGUnLCB0aGlzLl9jb25maWcuYXV0b2hpZGUpO1xuICAgICAgdG9hc3QuZGF0YSgnYW5pbWF0aW9uJywgdGhpcy5fY29uZmlnLmZhZGUpO1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmNsYXNzKSB7XG4gICAgICAgIHRvYXN0LmFkZENsYXNzKHRoaXMuX2NvbmZpZy5jbGFzcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuZGVsYXkgJiYgdGhpcy5fY29uZmlnLmRlbGF5ICE9IDUwMCkge1xuICAgICAgICB0b2FzdC5kYXRhKCdkZWxheScsIHRoaXMuX2NvbmZpZy5kZWxheSk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0b2FzdEhlYWRlciA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnPGRpdiBjbGFzcz1cInRvYXN0LWhlYWRlclwiPicpO1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmltYWdlICE9IG51bGwpIHtcbiAgICAgICAgdmFyIHRvYXN0SW1hZ2UgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oJzxpbWcgLz4nKS5hZGRDbGFzcygncm91bmRlZCBtci0yJykuYXR0cignc3JjJywgdGhpcy5fY29uZmlnLmltYWdlKS5hdHRyKCdhbHQnLCB0aGlzLl9jb25maWcuaW1hZ2VBbHQpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuaW1hZ2VIZWlnaHQgIT0gbnVsbCkge1xuICAgICAgICAgIHRvYXN0SW1hZ2UuaGVpZ2h0KHRoaXMuX2NvbmZpZy5pbWFnZUhlaWdodCkud2lkdGgoJ2F1dG8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvYXN0SGVhZGVyLmFwcGVuZCh0b2FzdEltYWdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pY29uICE9IG51bGwpIHtcbiAgICAgICAgdG9hc3RIZWFkZXIuYXBwZW5kKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnPGkgLz4nKS5hZGRDbGFzcygnbXItMicpLmFkZENsYXNzKHRoaXMuX2NvbmZpZy5pY29uKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcudGl0bGUgIT0gbnVsbCkge1xuICAgICAgICB0b2FzdEhlYWRlci5hcHBlbmQoJF9fZGVmYXVsdFsnZGVmYXVsdCddKCc8c3Ryb25nIC8+JykuYWRkQ2xhc3MoJ21yLWF1dG8nKS5odG1sKHRoaXMuX2NvbmZpZy50aXRsZSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnN1YnRpdGxlICE9IG51bGwpIHtcbiAgICAgICAgdG9hc3RIZWFkZXIuYXBwZW5kKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnPHNtYWxsIC8+JykuaHRtbCh0aGlzLl9jb25maWcuc3VidGl0bGUpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5jbG9zZSA9PSB0cnVlKSB7XG4gICAgICAgIHZhciB0b2FzdENsb3NlID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKCc8YnV0dG9uIGRhdGEtZGlzbWlzcz1cInRvYXN0XCIgLz4nKS5hdHRyKCd0eXBlJywgJ2J1dHRvbicpLmFkZENsYXNzKCdtbC0yIG1iLTEgY2xvc2UnKS5hdHRyKCdhcmlhLWxhYmVsJywgJ0Nsb3NlJykuYXBwZW5kKCc8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPicpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudGl0bGUgPT0gbnVsbCkge1xuICAgICAgICAgIHRvYXN0Q2xvc2UudG9nZ2xlQ2xhc3MoJ21sLTIgbWwtYXV0bycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9hc3RIZWFkZXIuYXBwZW5kKHRvYXN0Q2xvc2UpO1xuICAgICAgfVxuXG4gICAgICB0b2FzdC5hcHBlbmQodG9hc3RIZWFkZXIpO1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmJvZHkgIT0gbnVsbCkge1xuICAgICAgICB0b2FzdC5hcHBlbmQoJF9fZGVmYXVsdFsnZGVmYXVsdCddKCc8ZGl2IGNsYXNzPVwidG9hc3QtYm9keVwiIC8+JykuaHRtbCh0aGlzLl9jb25maWcuYm9keSkpO1xuICAgICAgfVxuXG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZ2V0Q29udGFpbmVySWQoKSkucHJlcGVuZCh0b2FzdCk7XG4gICAgICB2YXIgJGJvZHkgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oJ2JvZHknKTtcbiAgICAgICRib2R5LnRyaWdnZXIoJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX0NSRUFURUQpKTtcbiAgICAgIHRvYXN0LnRvYXN0KCdzaG93Jyk7XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYXV0b3JlbW92ZSkge1xuICAgICAgICB0b2FzdC5vbignaGlkZGVuLmJzLnRvYXN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kZWxheSgyMDApLnJlbW92ZSgpO1xuICAgICAgICAgICRib2R5LnRyaWdnZXIoJF9fZGVmYXVsdFsnZGVmYXVsdCddLkV2ZW50KEVWRU5UX1JFTU9WRUQkMSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIF9wcm90by5fZ2V0Q29udGFpbmVySWQgPSBmdW5jdGlvbiBfZ2V0Q29udGFpbmVySWQoKSB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBPU0lUSU9OX1RPUF9SSUdIVCkge1xuICAgICAgICByZXR1cm4gU0VMRUNUT1JfQ09OVEFJTkVSX1RPUF9SSUdIVDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQT1NJVElPTl9UT1BfTEVGVCkge1xuICAgICAgICByZXR1cm4gU0VMRUNUT1JfQ09OVEFJTkVSX1RPUF9MRUZUO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBPU0lUSU9OX0JPVFRPTV9SSUdIVCkge1xuICAgICAgICByZXR1cm4gU0VMRUNUT1JfQ09OVEFJTkVSX0JPVFRPTV9SSUdIVDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQT1NJVElPTl9CT1RUT01fTEVGVCkge1xuICAgICAgICByZXR1cm4gU0VMRUNUT1JfQ09OVEFJTkVSX0JPVFRPTV9MRUZUO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX3ByZXBhcmVDb250YWluZXIgPSBmdW5jdGlvbiBfcHJlcGFyZUNvbnRhaW5lcigpIHtcbiAgICAgIGlmICgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZ2V0Q29udGFpbmVySWQoKSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSAkX19kZWZhdWx0WydkZWZhdWx0J10oJzxkaXYgLz4nKS5hdHRyKCdpZCcsIHRoaXMuX2dldENvbnRhaW5lcklkKCkucmVwbGFjZSgnIycsICcnKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQT1NJVElPTl9UT1BfUklHSFQpIHtcbiAgICAgICAgICBjb250YWluZXIuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9UT1BfUklHSFQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQT1NJVElPTl9UT1BfTEVGVCkge1xuICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhDTEFTU19OQU1FX1RPUF9MRUZUKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUE9TSVRJT05fQk9UVE9NX1JJR0hUKSB7XG4gICAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKENMQVNTX05BTUVfQk9UVE9NX1JJR0hUKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUE9TSVRJT05fQk9UVE9NX0xFRlQpIHtcbiAgICAgICAgICBjb250YWluZXIuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9CT1RUT01fTEVGVCk7XG4gICAgICAgIH1cblxuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oJ2JvZHknKS5hcHBlbmQoY29udGFpbmVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5maXhlZCkge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZ2V0Q29udGFpbmVySWQoKSkuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcy5fZ2V0Q29udGFpbmVySWQoKSkucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICB9XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBUb2FzdHMuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2Uob3B0aW9uLCBjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX29wdGlvbnMgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZXh0ZW5kKHt9LCBEZWZhdWx0JDksIGNvbmZpZyk7XG5cbiAgICAgICAgdmFyIHRvYXN0ID0gbmV3IFRvYXN0cygkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyksIF9vcHRpb25zKTtcblxuICAgICAgICBpZiAob3B0aW9uID09PSAnY3JlYXRlJykge1xuICAgICAgICAgIHRvYXN0W29wdGlvbl0oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBUb2FzdHM7XG4gIH0oKTtcbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJGJdID0gVG9hc3RzLl9qUXVlcnlJbnRlcmZhY2U7XG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJGJdLkNvbnN0cnVjdG9yID0gVG9hc3RzO1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJGJdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkYl0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkYjtcbiAgICByZXR1cm4gVG9hc3RzLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIFRvZG9MaXN0LmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgdmFyIE5BTUUkYyA9ICdUb2RvTGlzdCc7XG4gIHZhciBEQVRBX0tFWSRjID0gJ2x0ZS50b2RvbGlzdCc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkYyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJGNdO1xuICB2YXIgU0VMRUNUT1JfREFUQV9UT0dHTEUkNCA9ICdbZGF0YS13aWRnZXQ9XCJ0b2RvLWxpc3RcIl0nO1xuICB2YXIgQ0xBU1NfTkFNRV9UT0RPX0xJU1RfRE9ORSA9ICdkb25lJztcbiAgdmFyIERlZmF1bHQkYSA9IHtcbiAgICBvbkNoZWNrOiBmdW5jdGlvbiBvbkNoZWNrKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0sXG4gICAgb25VbkNoZWNrOiBmdW5jdGlvbiBvblVuQ2hlY2soaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIHZhciBUb2RvTGlzdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVG9kb0xpc3QoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH0gLy8gUHVibGljXG5cblxuICAgIHZhciBfcHJvdG8gPSBUb2RvTGlzdC5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGl0ZW0pIHtcbiAgICAgIGl0ZW0ucGFyZW50cygnbGknKS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX1RPRE9fTElTVF9ET05FKTtcblxuICAgICAgaWYgKCEkX19kZWZhdWx0WydkZWZhdWx0J10oaXRlbSkucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICAgIHRoaXMudW5DaGVjaygkX19kZWZhdWx0WydkZWZhdWx0J10oaXRlbSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hlY2soaXRlbSk7XG4gICAgfTtcblxuICAgIF9wcm90by5jaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGl0ZW0pIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5vbkNoZWNrLmNhbGwoaXRlbSk7XG4gICAgfTtcblxuICAgIF9wcm90by51bkNoZWNrID0gZnVuY3Rpb24gdW5DaGVjayhpdGVtKSB7XG4gICAgICB0aGlzLl9jb25maWcub25VbkNoZWNrLmNhbGwoaXRlbSk7XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9pbml0ID0gZnVuY3Rpb24gX2luaXQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgJHRvZ2dsZVNlbGVjdG9yID0gdGhpcy5fZWxlbWVudDtcbiAgICAgICR0b2dnbGVTZWxlY3Rvci5maW5kKCdpbnB1dDpjaGVja2JveDpjaGVja2VkJykucGFyZW50cygnbGknKS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX1RPRE9fTElTVF9ET05FKTtcbiAgICAgICR0b2dnbGVTZWxlY3Rvci5vbignY2hhbmdlJywgJ2lucHV0OmNoZWNrYm94JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIF90aGlzLnRvZ2dsZSgkX19kZWZhdWx0WydkZWZhdWx0J10oZXZlbnQudGFyZ2V0KSk7XG4gICAgICB9KTtcbiAgICB9IC8vIFN0YXRpY1xuICAgIDtcblxuICAgIFRvZG9MaXN0Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVkkYyk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX29wdGlvbnMgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uZXh0ZW5kKHt9LCBEZWZhdWx0JGEsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogZGF0YSk7XG5cbiAgICAgICAgdmFyIHBsdWdpbiA9IG5ldyBUb2RvTGlzdCgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyksIF9vcHRpb25zKTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoREFUQV9LRVkkYywgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBkYXRhKTtcblxuICAgICAgICBpZiAoY29uZmlnID09PSAnaW5pdCcpIHtcbiAgICAgICAgICBwbHVnaW5bY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRvZG9MaXN0O1xuICB9KCk7XG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgVG9kb0xpc3QuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ0KSk7XG4gIH0pO1xuICAvKipcbiAgICogalF1ZXJ5IEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJGNdID0gVG9kb0xpc3QuX2pRdWVyeUludGVyZmFjZTtcbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkY10uQ29uc3RydWN0b3IgPSBUb2RvTGlzdDtcblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSRjXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJGNdID0gSlFVRVJZX05PX0NPTkZMSUNUJGM7XG4gICAgcmV0dXJuIFRvZG9MaXN0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIFRyZWV2aWV3LmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgdmFyIE5BTUUkZCA9ICdUcmVldmlldyc7XG4gIHZhciBEQVRBX0tFWSRkID0gJ2x0ZS50cmVldmlldyc7XG4gIHZhciBFVkVOVF9LRVkkNyA9IFwiLlwiICsgREFUQV9LRVkkZDtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCRkID0gJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkZF07XG4gIHZhciBFVkVOVF9FWFBBTkRFRCQzID0gXCJleHBhbmRlZFwiICsgRVZFTlRfS0VZJDc7XG4gIHZhciBFVkVOVF9DT0xMQVBTRUQkNCA9IFwiY29sbGFwc2VkXCIgKyBFVkVOVF9LRVkkNztcbiAgdmFyIEVWRU5UX0xPQURfREFUQV9BUEkgPSBcImxvYWRcIiArIEVWRU5UX0tFWSQ3O1xuICB2YXIgU0VMRUNUT1JfTEkgPSAnLm5hdi1pdGVtJztcbiAgdmFyIFNFTEVDVE9SX0xJTksgPSAnLm5hdi1saW5rJztcbiAgdmFyIFNFTEVDVE9SX1RSRUVWSUVXX01FTlUgPSAnLm5hdi10cmVldmlldyc7XG4gIHZhciBTRUxFQ1RPUl9PUEVOID0gJy5tZW51LW9wZW4nO1xuICB2YXIgU0VMRUNUT1JfREFUQV9XSURHRVQkMiA9ICdbZGF0YS13aWRnZXQ9XCJ0cmVldmlld1wiXSc7XG4gIHZhciBDTEFTU19OQU1FX09QRU4kMiA9ICdtZW51LW9wZW4nO1xuICB2YXIgQ0xBU1NfTkFNRV9JU19PUEVOSU5HJDEgPSAnbWVudS1pcy1vcGVuaW5nJztcbiAgdmFyIENMQVNTX05BTUVfU0lERUJBUl9DT0xMQVBTRUQgPSAnc2lkZWJhci1jb2xsYXBzZSc7XG4gIHZhciBEZWZhdWx0JGIgPSB7XG4gICAgdHJpZ2dlcjogU0VMRUNUT1JfREFUQV9XSURHRVQkMiArIFwiIFwiICsgU0VMRUNUT1JfTElOSyxcbiAgICBhbmltYXRpb25TcGVlZDogMzAwLFxuICAgIGFjY29yZGlvbjogdHJ1ZSxcbiAgICBleHBhbmRTaWRlYmFyOiBmYWxzZSxcbiAgICBzaWRlYmFyQnV0dG9uU2VsZWN0b3I6ICdbZGF0YS13aWRnZXQ9XCJwdXNobWVudVwiXSdcbiAgfTtcbiAgLyoqXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICB2YXIgVHJlZXZpZXcgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyZWV2aWV3KGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfSAvLyBQdWJsaWNcblxuXG4gICAgdmFyIF9wcm90byA9IFRyZWV2aWV3LnByb3RvdHlwZTtcblxuICAgIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShcIlwiICsgU0VMRUNUT1JfTEkgKyBTRUxFQ1RPUl9PUEVOICsgXCIgXCIgKyBTRUxFQ1RPUl9UUkVFVklFV19NRU5VKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgICAgdGhpcy5fc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmV4cGFuZCA9IGZ1bmN0aW9uIGV4cGFuZCh0cmVldmlld01lbnUsIHBhcmVudExpKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgZXhwYW5kZWRFdmVudCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5FdmVudChFVkVOVF9FWFBBTkRFRCQzKTtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hY2NvcmRpb24pIHtcbiAgICAgICAgdmFyIG9wZW5NZW51TGkgPSBwYXJlbnRMaS5zaWJsaW5ncyhTRUxFQ1RPUl9PUEVOKS5maXJzdCgpO1xuICAgICAgICB2YXIgb3BlblRyZWV2aWV3ID0gb3Blbk1lbnVMaS5maW5kKFNFTEVDVE9SX1RSRUVWSUVXX01FTlUpLmZpcnN0KCk7XG4gICAgICAgIHRoaXMuY29sbGFwc2Uob3BlblRyZWV2aWV3LCBvcGVuTWVudUxpKTtcbiAgICAgIH1cblxuICAgICAgcGFyZW50TGkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9JU19PUEVOSU5HJDEpO1xuICAgICAgdHJlZXZpZXdNZW51LnN0b3AoKS5zbGlkZURvd24odGhpcy5fY29uZmlnLmFuaW1hdGlvblNwZWVkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBhcmVudExpLmFkZENsYXNzKENMQVNTX05BTUVfT1BFTiQyKTtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKF90aGlzLl9lbGVtZW50KS50cmlnZ2VyKGV4cGFuZGVkRXZlbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuZXhwYW5kU2lkZWJhcikge1xuICAgICAgICB0aGlzLl9leHBhbmRTaWRlYmFyKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5jb2xsYXBzZSA9IGZ1bmN0aW9uIGNvbGxhcHNlKHRyZWV2aWV3TWVudSwgcGFyZW50TGkpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgY29sbGFwc2VkRXZlbnQgPSAkX19kZWZhdWx0WydkZWZhdWx0J10uRXZlbnQoRVZFTlRfQ09MTEFQU0VEJDQpO1xuICAgICAgcGFyZW50TGkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9JU19PUEVOSU5HJDEgKyBcIiBcIiArIENMQVNTX05BTUVfT1BFTiQyKTtcbiAgICAgIHRyZWV2aWV3TWVudS5zdG9wKCkuc2xpZGVVcCh0aGlzLl9jb25maWcuYW5pbWF0aW9uU3BlZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKF90aGlzMi5fZWxlbWVudCkudHJpZ2dlcihjb2xsYXBzZWRFdmVudCk7XG4gICAgICAgIHRyZWV2aWV3TWVudS5maW5kKFNFTEVDVE9SX09QRU4gKyBcIiA+IFwiICsgU0VMRUNUT1JfVFJFRVZJRVdfTUVOVSkuc2xpZGVVcCgpO1xuICAgICAgICB0cmVldmlld01lbnUuZmluZChTRUxFQ1RPUl9PUEVOKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX09QRU4kMik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShldmVudCkge1xuICAgICAgdmFyICRyZWxhdGl2ZVRhcmdldCA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIHZhciAkcGFyZW50ID0gJHJlbGF0aXZlVGFyZ2V0LnBhcmVudCgpO1xuICAgICAgdmFyIHRyZWV2aWV3TWVudSA9ICRwYXJlbnQuZmluZChcIj4gXCIgKyBTRUxFQ1RPUl9UUkVFVklFV19NRU5VKTtcblxuICAgICAgaWYgKCF0cmVldmlld01lbnUuaXMoU0VMRUNUT1JfVFJFRVZJRVdfTUVOVSkpIHtcbiAgICAgICAgaWYgKCEkcGFyZW50LmlzKFNFTEVDVE9SX0xJKSkge1xuICAgICAgICAgIHRyZWV2aWV3TWVudSA9ICRwYXJlbnQucGFyZW50KCkuZmluZChcIj4gXCIgKyBTRUxFQ1RPUl9UUkVFVklFV19NRU5VKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdHJlZXZpZXdNZW51LmlzKFNFTEVDVE9SX1RSRUVWSUVXX01FTlUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgcGFyZW50TGkgPSAkcmVsYXRpdmVUYXJnZXQucGFyZW50cyhTRUxFQ1RPUl9MSSkuZmlyc3QoKTtcbiAgICAgIHZhciBpc09wZW4gPSBwYXJlbnRMaS5oYXNDbGFzcyhDTEFTU19OQU1FX09QRU4kMik7XG5cbiAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZSgkX19kZWZhdWx0WydkZWZhdWx0J10odHJlZXZpZXdNZW51KSwgcGFyZW50TGkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5leHBhbmQoJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRyZWV2aWV3TWVudSksIHBhcmVudExpKTtcbiAgICAgIH1cbiAgICB9IC8vIFByaXZhdGVcbiAgICA7XG5cbiAgICBfcHJvdG8uX3NldHVwTGlzdGVuZXJzID0gZnVuY3Rpb24gX3NldHVwTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBlbGVtZW50SWQgPSB0aGlzLl9lbGVtZW50LmF0dHIoJ2lkJykgIT09IHVuZGVmaW5lZCA/IFwiI1wiICsgdGhpcy5fZWxlbWVudC5hdHRyKCdpZCcpIDogJyc7XG4gICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10oZG9jdW1lbnQpLm9uKCdjbGljaycsIFwiXCIgKyBlbGVtZW50SWQgKyB0aGlzLl9jb25maWcudHJpZ2dlciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIF90aGlzMy50b2dnbGUoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fZXhwYW5kU2lkZWJhciA9IGZ1bmN0aW9uIF9leHBhbmRTaWRlYmFyKCkge1xuICAgICAgaWYgKCRfX2RlZmF1bHRbJ2RlZmF1bHQnXSgnYm9keScpLmhhc0NsYXNzKENMQVNTX05BTUVfU0lERUJBUl9DT0xMQVBTRUQpKSB7XG4gICAgICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLl9jb25maWcuc2lkZWJhckJ1dHRvblNlbGVjdG9yKS5QdXNoTWVudSgnZXhwYW5kJyk7XG4gICAgICB9XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBUcmVldmlldy5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5kYXRhKERBVEFfS0VZJGQpO1xuXG4gICAgICAgIHZhciBfb3B0aW9ucyA9ICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5leHRlbmQoe30sIERlZmF1bHQkYiwgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmRhdGEoKSk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUcmVldmlldygkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyksIF9vcHRpb25zKTtcbiAgICAgICAgICAkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuZGF0YShEQVRBX0tFWSRkLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcgPT09ICdpbml0Jykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRyZWV2aWV3O1xuICB9KCk7XG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG5cbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddKHdpbmRvdykub24oRVZFTlRfTE9BRF9EQVRBX0FQSSwgZnVuY3Rpb24gKCkge1xuICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXShTRUxFQ1RPUl9EQVRBX1dJREdFVCQyKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIFRyZWV2aWV3Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0WydkZWZhdWx0J10odGhpcyksICdpbml0Jyk7XG4gICAgfSk7XG4gIH0pO1xuICAvKipcbiAgICogalF1ZXJ5IEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJGRdID0gVHJlZXZpZXcuX2pRdWVyeUludGVyZmFjZTtcbiAgJF9fZGVmYXVsdFsnZGVmYXVsdCddLmZuW05BTUUkZF0uQ29uc3RydWN0b3IgPSBUcmVldmlldztcblxuICAkX19kZWZhdWx0WydkZWZhdWx0J10uZm5bTkFNRSRkXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5mbltOQU1FJGRdID0gSlFVRVJZX05PX0NPTkZMSUNUJGQ7XG4gICAgcmV0dXJuIFRyZWV2aWV3Ll9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgZXhwb3J0cy5DYXJkUmVmcmVzaCA9IENhcmRSZWZyZXNoO1xuICBleHBvcnRzLkNhcmRXaWRnZXQgPSBDYXJkV2lkZ2V0O1xuICBleHBvcnRzLkNvbnRyb2xTaWRlYmFyID0gQ29udHJvbFNpZGViYXI7XG4gIGV4cG9ydHMuRGlyZWN0Q2hhdCA9IERpcmVjdENoYXQ7XG4gIGV4cG9ydHMuRHJvcGRvd24gPSBEcm9wZG93bjtcbiAgZXhwb3J0cy5FeHBhbmRhYmxlVGFibGUgPSBFeHBhbmRhYmxlVGFibGU7XG4gIGV4cG9ydHMuRnVsbHNjcmVlbiA9IEZ1bGxzY3JlZW47XG4gIGV4cG9ydHMuSUZyYW1lID0gSUZyYW1lO1xuICBleHBvcnRzLkxheW91dCA9IExheW91dDtcbiAgZXhwb3J0cy5QdXNoTWVudSA9IFB1c2hNZW51O1xuICBleHBvcnRzLlNpZGViYXJTZWFyY2ggPSBTaWRlYmFyU2VhcmNoO1xuICBleHBvcnRzLlRvYXN0cyA9IFRvYXN0cztcbiAgZXhwb3J0cy5Ub2RvTGlzdCA9IFRvZG9MaXN0O1xuICBleHBvcnRzLlRyZWV2aWV3ID0gVHJlZXZpZXc7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkbWlubHRlLmpzLm1hcFxuIiwiLyoqXG4gKiBBZG1pbkxURSBEZW1vIE1lbnVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLVxuICogWW91IHNob3VsZCBub3QgdXNlIHRoaXMgZmlsZSBpbiBwcm9kdWN0aW9uLlxuICogVGhpcyBmaWxlIGlzIGZvciBkZW1vIHB1cnBvc2VzIG9ubHkuXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5cbihmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCdcblxuICB2YXIgJHNpZGViYXIgPSAkKCcuY29udHJvbC1zaWRlYmFyJylcbiAgdmFyICRjb250YWluZXIgPSAkKCc8ZGl2IC8+Jywge1xuICAgIGNsYXNzOiAncC0zIGNvbnRyb2wtc2lkZWJhci1jb250ZW50J1xuICB9KVxuXG4gICRzaWRlYmFyLmFwcGVuZCgkY29udGFpbmVyKVxuXG4gIHZhciBuYXZiYXJfZGFya19za2lucyA9IFtcbiAgICAnbmF2YmFyLXByaW1hcnknLFxuICAgICduYXZiYXItc2Vjb25kYXJ5JyxcbiAgICAnbmF2YmFyLWluZm8nLFxuICAgICduYXZiYXItc3VjY2VzcycsXG4gICAgJ25hdmJhci1kYW5nZXInLFxuICAgICduYXZiYXItaW5kaWdvJyxcbiAgICAnbmF2YmFyLXB1cnBsZScsXG4gICAgJ25hdmJhci1waW5rJyxcbiAgICAnbmF2YmFyLW5hdnknLFxuICAgICduYXZiYXItbGlnaHRibHVlJyxcbiAgICAnbmF2YmFyLXRlYWwnLFxuICAgICduYXZiYXItY3lhbicsXG4gICAgJ25hdmJhci1kYXJrJyxcbiAgICAnbmF2YmFyLWdyYXktZGFyaycsXG4gICAgJ25hdmJhci1ncmF5J1xuICBdXG5cbiAgdmFyIG5hdmJhcl9saWdodF9za2lucyA9IFtcbiAgICAnbmF2YmFyLWxpZ2h0JyxcbiAgICAnbmF2YmFyLXdhcm5pbmcnLFxuICAgICduYXZiYXItd2hpdGUnLFxuICAgICduYXZiYXItb3JhbmdlJ1xuICBdXG5cbiAgJGNvbnRhaW5lci5hcHBlbmQoXG4gICAgJzxoNT5DdXN0b21pemUgQWRtaW5MVEU8L2g1PjxociBjbGFzcz1cIm1iLTJcIi8+J1xuICApXG5cbiAgdmFyICRub19ib3JkZXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCcubWFpbi1oZWFkZXInKS5oYXNDbGFzcygnYm9yZGVyLWJvdHRvbS0wJyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5tYWluLWhlYWRlcicpLmFkZENsYXNzKCdib3JkZXItYm90dG9tLTAnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5yZW1vdmVDbGFzcygnYm9yZGVyLWJvdHRvbS0wJylcbiAgICB9XG4gIH0pXG4gIHZhciAkbm9fYm9yZGVyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCRub19ib3JkZXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+Tm8gTmF2YmFyIGJvcmRlcjwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkbm9fYm9yZGVyX2NvbnRhaW5lcilcblxuICB2YXIgJHRleHRfc21fYm9keV9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJ2JvZHknKS5oYXNDbGFzcygndGV4dC1zbScpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3RleHQtc20nKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3RleHQtc20nKVxuICAgIH1cbiAgfSlcbiAgdmFyICR0ZXh0X3NtX2JvZHlfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJHRleHRfc21fYm9keV9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5Cb2R5IHNtYWxsIHRleHQ8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHRleHRfc21fYm9keV9jb250YWluZXIpXG5cbiAgdmFyICR0ZXh0X3NtX2hlYWRlcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5tYWluLWhlYWRlcicpLmhhc0NsYXNzKCd0ZXh0LXNtJyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5tYWluLWhlYWRlcicpLmFkZENsYXNzKCd0ZXh0LXNtJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykucmVtb3ZlQ2xhc3MoJ3RleHQtc20nKVxuICAgIH1cbiAgfSlcbiAgdmFyICR0ZXh0X3NtX2hlYWRlcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkdGV4dF9zbV9oZWFkZXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+TmF2YmFyIHNtYWxsIHRleHQ8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHRleHRfc21faGVhZGVyX2NvbnRhaW5lcilcblxuICB2YXIgJHRleHRfc21fc2lkZWJhcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5uYXYtc2lkZWJhcicpLmhhc0NsYXNzKCd0ZXh0LXNtJyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLmFkZENsYXNzKCd0ZXh0LXNtJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ3RleHQtc20nKVxuICAgIH1cbiAgfSlcbiAgdmFyICR0ZXh0X3NtX3NpZGViYXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJHRleHRfc21fc2lkZWJhcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5TaWRlYmFyIG5hdiBzbWFsbCB0ZXh0PC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCR0ZXh0X3NtX3NpZGViYXJfY29udGFpbmVyKVxuXG4gIHZhciAkdGV4dF9zbV9mb290ZXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCcubWFpbi1mb290ZXInKS5oYXNDbGFzcygndGV4dC1zbScpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubWFpbi1mb290ZXInKS5hZGRDbGFzcygndGV4dC1zbScpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5tYWluLWZvb3RlcicpLnJlbW92ZUNsYXNzKCd0ZXh0LXNtJylcbiAgICB9XG4gIH0pXG4gIHZhciAkdGV4dF9zbV9mb290ZXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJHRleHRfc21fZm9vdGVyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPkZvb3RlciBzbWFsbCB0ZXh0PC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCR0ZXh0X3NtX2Zvb3Rlcl9jb250YWluZXIpXG5cbiAgdmFyICRmbGF0X3NpZGViYXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCcubmF2LXNpZGViYXInKS5oYXNDbGFzcygnbmF2LWZsYXQnKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykuYWRkQ2xhc3MoJ25hdi1mbGF0JylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ25hdi1mbGF0JylcbiAgICB9XG4gIH0pXG4gIHZhciAkZmxhdF9zaWRlYmFyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCRmbGF0X3NpZGViYXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+U2lkZWJhciBuYXYgZmxhdCBzdHlsZTwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkZmxhdF9zaWRlYmFyX2NvbnRhaW5lcilcblxuICB2YXIgJGxlZ2FjeV9zaWRlYmFyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnLm5hdi1zaWRlYmFyJykuaGFzQ2xhc3MoJ25hdi1sZWdhY3knKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykuYWRkQ2xhc3MoJ25hdi1sZWdhY3knKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5yZW1vdmVDbGFzcygnbmF2LWxlZ2FjeScpXG4gICAgfVxuICB9KVxuICB2YXIgJGxlZ2FjeV9zaWRlYmFyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCRsZWdhY3lfc2lkZWJhcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5TaWRlYmFyIG5hdiBsZWdhY3kgc3R5bGU8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJGxlZ2FjeV9zaWRlYmFyX2NvbnRhaW5lcilcblxuICB2YXIgJGNvbXBhY3Rfc2lkZWJhcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5uYXYtc2lkZWJhcicpLmhhc0NsYXNzKCduYXYtY29tcGFjdCcpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5hZGRDbGFzcygnbmF2LWNvbXBhY3QnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5yZW1vdmVDbGFzcygnbmF2LWNvbXBhY3QnKVxuICAgIH1cbiAgfSlcbiAgdmFyICRjb21wYWN0X3NpZGViYXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJGNvbXBhY3Rfc2lkZWJhcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5TaWRlYmFyIG5hdiBjb21wYWN0PC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRjb21wYWN0X3NpZGViYXJfY29udGFpbmVyKVxuXG4gIHZhciAkY2hpbGRfaW5kZW50X3NpZGViYXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCcubmF2LXNpZGViYXInKS5oYXNDbGFzcygnbmF2LWNoaWxkLWluZGVudCcpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5hZGRDbGFzcygnbmF2LWNoaWxkLWluZGVudCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLnJlbW92ZUNsYXNzKCduYXYtY2hpbGQtaW5kZW50JylcbiAgICB9XG4gIH0pXG4gIHZhciAkY2hpbGRfaW5kZW50X3NpZGViYXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJGNoaWxkX2luZGVudF9zaWRlYmFyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPlNpZGViYXIgbmF2IGNoaWxkIGluZGVudDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkY2hpbGRfaW5kZW50X3NpZGViYXJfY29udGFpbmVyKVxuXG4gIHZhciAkY2hpbGRfaGlkZV9zaWRlYmFyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnLm5hdi1zaWRlYmFyJykuaGFzQ2xhc3MoJ25hdi1jb2xsYXBzZS1oaWRlLWNoaWxkJyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLmFkZENsYXNzKCduYXYtY29sbGFwc2UtaGlkZS1jaGlsZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLnJlbW92ZUNsYXNzKCduYXYtY29sbGFwc2UtaGlkZS1jaGlsZCcpXG4gICAgfVxuICB9KVxuICB2YXIgJGNoaWxkX2hpZGVfc2lkZWJhcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkY2hpbGRfaGlkZV9zaWRlYmFyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPlNpZGViYXIgbmF2IGNoaWxkIGhpZGUgb24gY29sbGFwc2U8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJGNoaWxkX2hpZGVfc2lkZWJhcl9jb250YWluZXIpXG5cbiAgdmFyICRub19leHBhbmRfc2lkZWJhcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5tYWluLXNpZGViYXInKS5oYXNDbGFzcygnc2lkZWJhci1uby1leHBhbmQnKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm1haW4tc2lkZWJhcicpLmFkZENsYXNzKCdzaWRlYmFyLW5vLWV4cGFuZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5tYWluLXNpZGViYXInKS5yZW1vdmVDbGFzcygnc2lkZWJhci1uby1leHBhbmQnKVxuICAgIH1cbiAgfSlcbiAgdmFyICRub19leHBhbmRfc2lkZWJhcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkbm9fZXhwYW5kX3NpZGViYXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+TWFpbiBTaWRlYmFyIGRpc2FibGUgaG92ZXIvZm9jdXMgYXV0byBleHBhbmQ8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJG5vX2V4cGFuZF9zaWRlYmFyX2NvbnRhaW5lcilcblxuICB2YXIgJHRleHRfc21fYnJhbmRfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCcuYnJhbmQtbGluaycpLmhhc0NsYXNzKCd0ZXh0LXNtJyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5icmFuZC1saW5rJykuYWRkQ2xhc3MoJ3RleHQtc20nKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuYnJhbmQtbGluaycpLnJlbW92ZUNsYXNzKCd0ZXh0LXNtJylcbiAgICB9XG4gIH0pXG4gIHZhciAkdGV4dF9zbV9icmFuZF9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkdGV4dF9zbV9icmFuZF9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5CcmFuZCBzbWFsbCB0ZXh0PC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCR0ZXh0X3NtX2JyYW5kX2NvbnRhaW5lcilcblxuICB2YXIgJGRhcmtfbW9kZV9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJ2JvZHknKS5oYXNDbGFzcygnZGFyay1tb2RlJyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnZGFyay1tb2RlJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdkYXJrLW1vZGUnKVxuICAgIH1cbiAgfSlcbiAgdmFyICRkYXJrX21vZGVfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi00JyB9KS5hcHBlbmQoJGRhcmtfbW9kZV9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5EYXJrIE1vZGU8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJGRhcmtfbW9kZV9jb250YWluZXIpXG5cbiAgJGNvbnRhaW5lci5hcHBlbmQoJzxoNj5OYXZiYXIgVmFyaWFudHM8L2g2PicpXG5cbiAgdmFyICRuYXZiYXJfdmFyaWFudHMgPSAkKCc8ZGl2IC8+Jywge1xuICAgIGNsYXNzOiAnZC1mbGV4J1xuICB9KVxuICB2YXIgbmF2YmFyX2FsbF9jb2xvcnMgPSBuYXZiYXJfZGFya19za2lucy5jb25jYXQobmF2YmFyX2xpZ2h0X3NraW5zKVxuICB2YXIgJG5hdmJhcl92YXJpYW50c19jb2xvcnMgPSBjcmVhdGVTa2luQmxvY2sobmF2YmFyX2FsbF9jb2xvcnMsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcbiAgICB2YXIgJG1haW5faGVhZGVyID0gJCgnLm1haW4taGVhZGVyJylcbiAgICAkbWFpbl9oZWFkZXIucmVtb3ZlQ2xhc3MoJ25hdmJhci1kYXJrJykucmVtb3ZlQ2xhc3MoJ25hdmJhci1saWdodCcpXG4gICAgbmF2YmFyX2FsbF9jb2xvcnMuZm9yRWFjaChmdW5jdGlvbiAoY29sb3IpIHtcbiAgICAgICRtYWluX2hlYWRlci5yZW1vdmVDbGFzcyhjb2xvcilcbiAgICB9KVxuXG4gICAgaWYgKG5hdmJhcl9kYXJrX3NraW5zLmluZGV4T2YoY29sb3IpID4gLTEpIHtcbiAgICAgICRtYWluX2hlYWRlci5hZGRDbGFzcygnbmF2YmFyLWRhcmsnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkbWFpbl9oZWFkZXIuYWRkQ2xhc3MoJ25hdmJhci1saWdodCcpXG4gICAgfVxuXG4gICAgJG1haW5faGVhZGVyLmFkZENsYXNzKGNvbG9yKVxuICB9KVxuXG4gICRuYXZiYXJfdmFyaWFudHMuYXBwZW5kKCRuYXZiYXJfdmFyaWFudHNfY29sb3JzKVxuXG4gICRjb250YWluZXIuYXBwZW5kKCRuYXZiYXJfdmFyaWFudHMpXG5cbiAgdmFyIHNpZGViYXJfY29sb3JzID0gW1xuICAgICdiZy1wcmltYXJ5JyxcbiAgICAnYmctd2FybmluZycsXG4gICAgJ2JnLWluZm8nLFxuICAgICdiZy1kYW5nZXInLFxuICAgICdiZy1zdWNjZXNzJyxcbiAgICAnYmctaW5kaWdvJyxcbiAgICAnYmctbGlnaHRibHVlJyxcbiAgICAnYmctbmF2eScsXG4gICAgJ2JnLXB1cnBsZScsXG4gICAgJ2JnLWZ1Y2hzaWEnLFxuICAgICdiZy1waW5rJyxcbiAgICAnYmctbWFyb29uJyxcbiAgICAnYmctb3JhbmdlJyxcbiAgICAnYmctbGltZScsXG4gICAgJ2JnLXRlYWwnLFxuICAgICdiZy1vbGl2ZSdcbiAgXVxuXG4gIHZhciBhY2NlbnRfY29sb3JzID0gW1xuICAgICdhY2NlbnQtcHJpbWFyeScsXG4gICAgJ2FjY2VudC13YXJuaW5nJyxcbiAgICAnYWNjZW50LWluZm8nLFxuICAgICdhY2NlbnQtZGFuZ2VyJyxcbiAgICAnYWNjZW50LXN1Y2Nlc3MnLFxuICAgICdhY2NlbnQtaW5kaWdvJyxcbiAgICAnYWNjZW50LWxpZ2h0Ymx1ZScsXG4gICAgJ2FjY2VudC1uYXZ5JyxcbiAgICAnYWNjZW50LXB1cnBsZScsXG4gICAgJ2FjY2VudC1mdWNoc2lhJyxcbiAgICAnYWNjZW50LXBpbmsnLFxuICAgICdhY2NlbnQtbWFyb29uJyxcbiAgICAnYWNjZW50LW9yYW5nZScsXG4gICAgJ2FjY2VudC1saW1lJyxcbiAgICAnYWNjZW50LXRlYWwnLFxuICAgICdhY2NlbnQtb2xpdmUnXG4gIF1cblxuICB2YXIgc2lkZWJhcl9za2lucyA9IFtcbiAgICAnc2lkZWJhci1kYXJrLXByaW1hcnknLFxuICAgICdzaWRlYmFyLWRhcmstd2FybmluZycsXG4gICAgJ3NpZGViYXItZGFyay1pbmZvJyxcbiAgICAnc2lkZWJhci1kYXJrLWRhbmdlcicsXG4gICAgJ3NpZGViYXItZGFyay1zdWNjZXNzJyxcbiAgICAnc2lkZWJhci1kYXJrLWluZGlnbycsXG4gICAgJ3NpZGViYXItZGFyay1saWdodGJsdWUnLFxuICAgICdzaWRlYmFyLWRhcmstbmF2eScsXG4gICAgJ3NpZGViYXItZGFyay1wdXJwbGUnLFxuICAgICdzaWRlYmFyLWRhcmstZnVjaHNpYScsXG4gICAgJ3NpZGViYXItZGFyay1waW5rJyxcbiAgICAnc2lkZWJhci1kYXJrLW1hcm9vbicsXG4gICAgJ3NpZGViYXItZGFyay1vcmFuZ2UnLFxuICAgICdzaWRlYmFyLWRhcmstbGltZScsXG4gICAgJ3NpZGViYXItZGFyay10ZWFsJyxcbiAgICAnc2lkZWJhci1kYXJrLW9saXZlJyxcbiAgICAnc2lkZWJhci1saWdodC1wcmltYXJ5JyxcbiAgICAnc2lkZWJhci1saWdodC13YXJuaW5nJyxcbiAgICAnc2lkZWJhci1saWdodC1pbmZvJyxcbiAgICAnc2lkZWJhci1saWdodC1kYW5nZXInLFxuICAgICdzaWRlYmFyLWxpZ2h0LXN1Y2Nlc3MnLFxuICAgICdzaWRlYmFyLWxpZ2h0LWluZGlnbycsXG4gICAgJ3NpZGViYXItbGlnaHQtbGlnaHRibHVlJyxcbiAgICAnc2lkZWJhci1saWdodC1uYXZ5JyxcbiAgICAnc2lkZWJhci1saWdodC1wdXJwbGUnLFxuICAgICdzaWRlYmFyLWxpZ2h0LWZ1Y2hzaWEnLFxuICAgICdzaWRlYmFyLWxpZ2h0LXBpbmsnLFxuICAgICdzaWRlYmFyLWxpZ2h0LW1hcm9vbicsXG4gICAgJ3NpZGViYXItbGlnaHQtb3JhbmdlJyxcbiAgICAnc2lkZWJhci1saWdodC1saW1lJyxcbiAgICAnc2lkZWJhci1saWdodC10ZWFsJyxcbiAgICAnc2lkZWJhci1saWdodC1vbGl2ZSdcbiAgXVxuXG4gICRjb250YWluZXIuYXBwZW5kKCc8aDY+QWNjZW50IENvbG9yIFZhcmlhbnRzPC9oNj4nKVxuICB2YXIgJGFjY2VudF92YXJpYW50cyA9ICQoJzxkaXYgLz4nLCB7XG4gICAgY2xhc3M6ICdkLWZsZXgnXG4gIH0pXG4gICRjb250YWluZXIuYXBwZW5kKCRhY2NlbnRfdmFyaWFudHMpXG4gICRjb250YWluZXIuYXBwZW5kKGNyZWF0ZVNraW5CbG9jayhhY2NlbnRfY29sb3JzLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yID0gJCh0aGlzKS5kYXRhKCdjb2xvcicpXG4gICAgdmFyIGFjY2VudF9jbGFzcyA9IGNvbG9yXG4gICAgdmFyICRib2R5ID0gJCgnYm9keScpXG4gICAgYWNjZW50X2NvbG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChza2luKSB7XG4gICAgICAkYm9keS5yZW1vdmVDbGFzcyhza2luKVxuICAgIH0pXG5cbiAgICAkYm9keS5hZGRDbGFzcyhhY2NlbnRfY2xhc3MpXG4gIH0pKVxuXG4gICRjb250YWluZXIuYXBwZW5kKCc8aDY+RGFyayBTaWRlYmFyIFZhcmlhbnRzPC9oNj4nKVxuICB2YXIgJHNpZGViYXJfdmFyaWFudHNfZGFyayA9ICQoJzxkaXYgLz4nLCB7XG4gICAgY2xhc3M6ICdkLWZsZXgnXG4gIH0pXG4gICRjb250YWluZXIuYXBwZW5kKCRzaWRlYmFyX3ZhcmlhbnRzX2RhcmspXG4gICRjb250YWluZXIuYXBwZW5kKGNyZWF0ZVNraW5CbG9jayhzaWRlYmFyX2NvbG9ycywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb2xvciA9ICQodGhpcykuZGF0YSgnY29sb3InKVxuICAgIHZhciBzaWRlYmFyX2NsYXNzID0gJ3NpZGViYXItZGFyay0nICsgY29sb3IucmVwbGFjZSgnYmctJywgJycpXG4gICAgdmFyICRzaWRlYmFyID0gJCgnLm1haW4tc2lkZWJhcicpXG4gICAgc2lkZWJhcl9za2lucy5mb3JFYWNoKGZ1bmN0aW9uIChza2luKSB7XG4gICAgICAkc2lkZWJhci5yZW1vdmVDbGFzcyhza2luKVxuICAgIH0pXG5cbiAgICAkc2lkZWJhci5hZGRDbGFzcyhzaWRlYmFyX2NsYXNzKVxuICB9KSlcblxuICAkY29udGFpbmVyLmFwcGVuZCgnPGg2PkxpZ2h0IFNpZGViYXIgVmFyaWFudHM8L2g2PicpXG4gIHZhciAkc2lkZWJhcl92YXJpYW50c19saWdodCA9ICQoJzxkaXYgLz4nLCB7XG4gICAgY2xhc3M6ICdkLWZsZXgnXG4gIH0pXG4gICRjb250YWluZXIuYXBwZW5kKCRzaWRlYmFyX3ZhcmlhbnRzX2xpZ2h0KVxuICAkY29udGFpbmVyLmFwcGVuZChjcmVhdGVTa2luQmxvY2soc2lkZWJhcl9jb2xvcnMsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcbiAgICB2YXIgc2lkZWJhcl9jbGFzcyA9ICdzaWRlYmFyLWxpZ2h0LScgKyBjb2xvci5yZXBsYWNlKCdiZy0nLCAnJylcbiAgICB2YXIgJHNpZGViYXIgPSAkKCcubWFpbi1zaWRlYmFyJylcbiAgICBzaWRlYmFyX3NraW5zLmZvckVhY2goZnVuY3Rpb24gKHNraW4pIHtcbiAgICAgICRzaWRlYmFyLnJlbW92ZUNsYXNzKHNraW4pXG4gICAgfSlcblxuICAgICRzaWRlYmFyLmFkZENsYXNzKHNpZGViYXJfY2xhc3MpXG4gIH0pKVxuXG4gIHZhciBsb2dvX3NraW5zID0gbmF2YmFyX2FsbF9jb2xvcnNcbiAgJGNvbnRhaW5lci5hcHBlbmQoJzxoNj5CcmFuZCBMb2dvIFZhcmlhbnRzPC9oNj4nKVxuICB2YXIgJGxvZ29fdmFyaWFudHMgPSAkKCc8ZGl2IC8+Jywge1xuICAgIGNsYXNzOiAnZC1mbGV4J1xuICB9KVxuICAkY29udGFpbmVyLmFwcGVuZCgkbG9nb192YXJpYW50cylcbiAgdmFyICRjbGVhcl9idG4gPSAkKCc8YSAvPicsIHtcbiAgICBocmVmOiAnIydcbiAgfSkudGV4dCgnY2xlYXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHZhciAkbG9nbyA9ICQoJy5icmFuZC1saW5rJylcbiAgICBsb2dvX3NraW5zLmZvckVhY2goZnVuY3Rpb24gKHNraW4pIHtcbiAgICAgICRsb2dvLnJlbW92ZUNsYXNzKHNraW4pXG4gICAgfSlcbiAgfSlcbiAgJGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlU2tpbkJsb2NrKGxvZ29fc2tpbnMsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcbiAgICB2YXIgJGxvZ28gPSAkKCcuYnJhbmQtbGluaycpXG4gICAgbG9nb19za2lucy5mb3JFYWNoKGZ1bmN0aW9uIChza2luKSB7XG4gICAgICAkbG9nby5yZW1vdmVDbGFzcyhza2luKVxuICAgIH0pXG4gICAgJGxvZ28uYWRkQ2xhc3MoY29sb3IpXG4gIH0pLmFwcGVuZCgkY2xlYXJfYnRuKSlcblxuICBmdW5jdGlvbiBjcmVhdGVTa2luQmxvY2soY29sb3JzLCBjYWxsYmFjaykge1xuICAgIHZhciAkYmxvY2sgPSAkKCc8ZGl2IC8+Jywge1xuICAgICAgY2xhc3M6ICdkLWZsZXggZmxleC13cmFwIG1iLTMnXG4gICAgfSlcblxuICAgIGNvbG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgdmFyICRjb2xvciA9ICQoJzxkaXYgLz4nLCB7XG4gICAgICAgIGNsYXNzOiAodHlwZW9mIGNvbG9yID09PSAnb2JqZWN0JyA/IGNvbG9yLmpvaW4oJyAnKSA6IGNvbG9yKS5yZXBsYWNlKCduYXZiYXItJywgJ2JnLScpLnJlcGxhY2UoJ2FjY2VudC0nLCAnYmctJykgKyAnIGVsZXZhdGlvbi0yJ1xuICAgICAgfSlcblxuICAgICAgJGJsb2NrLmFwcGVuZCgkY29sb3IpXG5cbiAgICAgICRjb2xvci5kYXRhKCdjb2xvcicsIGNvbG9yKVxuXG4gICAgICAkY29sb3IuY3NzKHtcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzI1cHgnLFxuICAgICAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgICAgIG9wYWNpdHk6IDAuOCxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0pXG5cbiAgICAgICRjb2xvci5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY3NzKHsgb3BhY2l0eTogMSB9KS5yZW1vdmVDbGFzcygnZWxldmF0aW9uLTInKS5hZGRDbGFzcygnZWxldmF0aW9uLTQnKVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNzcyh7IG9wYWNpdHk6IDAuOCB9KS5yZW1vdmVDbGFzcygnZWxldmF0aW9uLTQnKS5hZGRDbGFzcygnZWxldmF0aW9uLTInKVxuICAgICAgfSlcblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICRjb2xvci5vbignY2xpY2snLCBjYWxsYmFjaylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICRibG9ja1xuICB9XG5cbiAgJCgnLnByb2R1Y3QtaW1hZ2UtdGh1bWInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGltYWdlX2VsZW1lbnQgPSAkKHRoaXMpLmZpbmQoJ2ltZycpXG4gICAgJCgnLnByb2R1Y3QtaW1hZ2UnKS5wcm9wKCdzcmMnLCAkKGltYWdlX2VsZW1lbnQpLmF0dHIoJ3NyYycpKVxuICAgICQoJy5wcm9kdWN0LWltYWdlLXRodW1iLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gIH0pXG59KShqUXVlcnkpXG4iXSwic291cmNlUm9vdCI6IiJ9