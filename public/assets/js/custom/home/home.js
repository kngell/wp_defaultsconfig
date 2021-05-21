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
return (self["webpackChunkkngell"] = self["webpackChunkkngell"] || []).push([["js/custom/home/home"],{

/***/ "./src/assets/js/core/waitfor.js":
/*!***************************************!*\
  !*** ./src/assets/js/core/waitfor.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ imagesLoaded; },
/* harmony export */   "waitForEl": function() { return /* binding */ waitForEl; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__);
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");








function imagesLoaded(selector) {
  return Promise.all(Array.from(selector).map(function (img) {
    if (img.complete) if (img.naturalHeight !== 0) return Promise.resolve();else return Promise.reject(img);
    return new Promise(function (resolve, reject) {
      img.addEventListener("load", resolve);
      img.addEventListener("error", function () {
        return reject(img);
      });
    });
  }));
}
var waitForEl = function waitForEl(selector, callback) {
  if (jQuery(selector).length) {
    callback();
  } else {
    setTimeout(function () {
      waitForEl(selector, callback);
    }, 100);
  }
};

/***/ }),

/***/ "./src/assets/js/custom/home/index.js":
/*!********************************************!*\
  !*** ./src/assets/js/custom/home/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var corejs_waitfor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! corejs/waitfor */ "./src/assets/js/core/waitfor.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Isotope = __webpack_require__(/*! isotope-layout */ "./node_modules/isotope-layout/js/isotope.js");

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


var Home = function Home(element) {
  var _this = this;

  _classCallCheck(this, Home);

  _defineProperty(this, "_init", function () {
    _this._setupVariables();

    _this._setupEvents();
  });

  _defineProperty(this, "_setupVariables", function () {
    _this.banner = _this.element.find("#banner-area");
    _this.topSale = _this.element.find("#top-sale");
    _this.specialPrice = _this.element.find("#special-price");
    _this.newPhone = _this.element.find("#new-phones");
    _this.blog = _this.element.find("#blog");
  });

  _defineProperty(this, "_setupEvents", function () {
    var phpPlugin = _this; //=======================================================================
    //Owl carousel
    //=======================================================================

    phpPlugin.banner.find(".owl-carousel").owlCarousel({
      dots: true,
      items: 1,
      autoplay: true
    }); //Top sales

    phpPlugin.topSale.find(".owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      margin: 15,
      responsive: responsive
    }); //new product

    phpPlugin.newPhone.find(".owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      margin: 15,
      responsive: responsive
    }); //blog

    phpPlugin.blog.find(".owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        }
      },
      center: true
    }); //=======================================================================
    //Isotope Filter
    //=======================================================================

    function special_price() {
      return new Promise(function (resolve, reject) {
        var gridIMG = phpPlugin.specialPrice.find(".grid .grid-item img");
        var elem = document.querySelector(".grid");
        (0,corejs_waitfor__WEBPACK_IMPORTED_MODULE_4__.default)(gridIMG).then(function () {
          resolve(new Isotope(elem, {
            itemSelector: ".grid-item",
            layoutMode: "masonry",
            masonry: {
              columnWidth: 0,
              isFitWidth: true
            }
          }));
        })["catch"](function () {
          return console.log("error image");
        });
      });
    }

    special_price().then(function (mod) {
      phpPlugin.specialPrice.find(".button-group").on("click", "button", function (e) {
        e.preventDefault();
        var filterValue = $(this).attr("data-filter");
        mod.arrange({
          filter: filterValue
        });
      });
    })["catch"](function (e) {
      return console.log(e);
    });
  });

  this.element = element;
};

document.addEventListener("DOMContentLoaded", function () {
  new Home($("#main-site"))._init();
});

/***/ }),

/***/ "./node_modules/desandro-matches-selector/matches-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/desandro-matches-selector/matches-selector.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));


/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ "./node_modules/fizzy-ui-utils/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/fizzy-ui-utils/utils.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! desandro-matches-selector/matches-selector */ "./node_modules/desandro-matches-selector/matches-selector.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( matchesSelector ) {
      return factory( window, matchesSelector );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));


/***/ }),

/***/ "./node_modules/get-size/get-size.js":
/*!*******************************************!*\
  !*** ./node_modules/get-size/get-size.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),

/***/ "./node_modules/isotope-layout/js/isotope.js":
/*!***************************************************!*\
  !*** ./node_modules/isotope-layout/js/isotope.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! outlayer/outlayer */ "./node_modules/outlayer/outlayer.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js"),
        __webpack_require__(/*! desandro-matches-selector/matches-selector */ "./node_modules/desandro-matches-selector/matches-selector.js"),
        __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
        __webpack_require__(/*! ./item */ "./node_modules/isotope-layout/js/item.js"),
        __webpack_require__(/*! ./layout-mode */ "./node_modules/isotope-layout/js/layout-mode.js"),
        // include default layout modes
        __webpack_require__(/*! ./layout-modes/masonry */ "./node_modules/isotope-layout/js/layout-modes/masonry.js"),
        __webpack_require__(/*! ./layout-modes/fit-rows */ "./node_modules/isotope-layout/js/layout-modes/fit-rows.js"),
        __webpack_require__(/*! ./layout-modes/vertical */ "./node_modules/isotope-layout/js/layout-modes/vertical.js")
      ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Outlayer, getSize, matchesSelector, utils, Item, LayoutMode ) {
        return factory( window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode );
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, Outlayer, getSize, matchesSelector, utils,
  Item, LayoutMode ) {

'use strict';

// -------------------------- vars -------------------------- //

var jQuery = window.jQuery;

// -------------------------- helpers -------------------------- //

var trim = String.prototype.trim ?
  function( str ) {
    return str.trim();
  } :
  function( str ) {
    return str.replace( /^\s+|\s+$/g, '' );
  };

// -------------------------- isotopeDefinition -------------------------- //

  // create an Outlayer layout class
  var Isotope = Outlayer.create( 'isotope', {
    layoutMode: 'masonry',
    isJQueryFiltering: true,
    sortAscending: true
  });

  Isotope.Item = Item;
  Isotope.LayoutMode = LayoutMode;

  var proto = Isotope.prototype;

  proto._create = function() {
    this.itemGUID = 0;
    // functions that sort items
    this._sorters = {};
    this._getSorters();
    // call super
    Outlayer.prototype._create.call( this );

    // create layout modes
    this.modes = {};
    // start filteredItems with all items
    this.filteredItems = this.items;
    // keep of track of sortBys
    this.sortHistory = [ 'original-order' ];
    // create from registered layout modes
    for ( var name in LayoutMode.modes ) {
      this._initLayoutMode( name );
    }
  };

  proto.reloadItems = function() {
    // reset item ID counter
    this.itemGUID = 0;
    // call super
    Outlayer.prototype.reloadItems.call( this );
  };

  proto._itemize = function() {
    var items = Outlayer.prototype._itemize.apply( this, arguments );
    // assign ID for original-order
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      item.id = this.itemGUID++;
    }
    this._updateItemsSortData( items );
    return items;
  };


  // -------------------------- layout -------------------------- //

  proto._initLayoutMode = function( name ) {
    var Mode = LayoutMode.modes[ name ];
    // set mode options
    // HACK extend initial options, back-fill in default options
    var initialOpts = this.options[ name ] || {};
    this.options[ name ] = Mode.options ?
      utils.extend( Mode.options, initialOpts ) : initialOpts;
    // init layout mode instance
    this.modes[ name ] = new Mode( this );
  };


  proto.layout = function() {
    // if first time doing layout, do all magic
    if ( !this._isLayoutInited && this._getOption('initLayout') ) {
      this.arrange();
      return;
    }
    this._layout();
  };

  // private method to be used in layout() & magic()
  proto._layout = function() {
    // don't animate first layout
    var isInstant = this._getIsInstant();
    // layout flow
    this._resetLayout();
    this._manageStamps();
    this.layoutItems( this.filteredItems, isInstant );

    // flag for initalized
    this._isLayoutInited = true;
  };

  // filter + sort + layout
  proto.arrange = function( opts ) {
    // set any options pass
    this.option( opts );
    this._getIsInstant();
    // filter, sort, and layout

    // filter
    var filtered = this._filter( this.items );
    this.filteredItems = filtered.matches;

    this._bindArrangeComplete();

    if ( this._isInstant ) {
      this._noTransition( this._hideReveal, [ filtered ] );
    } else {
      this._hideReveal( filtered );
    }

    this._sort();
    this._layout();
  };
  // alias to _init for main plugin method
  proto._init = proto.arrange;

  proto._hideReveal = function( filtered ) {
    this.reveal( filtered.needReveal );
    this.hide( filtered.needHide );
  };

  // HACK
  // Don't animate/transition first layout
  // Or don't animate/transition other layouts
  proto._getIsInstant = function() {
    var isLayoutInstant = this._getOption('layoutInstant');
    var isInstant = isLayoutInstant !== undefined ? isLayoutInstant :
      !this._isLayoutInited;
    this._isInstant = isInstant;
    return isInstant;
  };

  // listen for layoutComplete, hideComplete and revealComplete
  // to trigger arrangeComplete
  proto._bindArrangeComplete = function() {
    // listen for 3 events to trigger arrangeComplete
    var isLayoutComplete, isHideComplete, isRevealComplete;
    var _this = this;
    function arrangeParallelCallback() {
      if ( isLayoutComplete && isHideComplete && isRevealComplete ) {
        _this.dispatchEvent( 'arrangeComplete', null, [ _this.filteredItems ] );
      }
    }
    this.once( 'layoutComplete', function() {
      isLayoutComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'hideComplete', function() {
      isHideComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'revealComplete', function() {
      isRevealComplete = true;
      arrangeParallelCallback();
    });
  };

  // -------------------------- filter -------------------------- //

  proto._filter = function( items ) {
    var filter = this.options.filter;
    filter = filter || '*';
    var matches = [];
    var hiddenMatched = [];
    var visibleUnmatched = [];

    var test = this._getFilterTest( filter );

    // test each item
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      if ( item.isIgnored ) {
        continue;
      }
      // add item to either matched or unmatched group
      var isMatched = test( item );
      // item.isFilterMatched = isMatched;
      // add to matches if its a match
      if ( isMatched ) {
        matches.push( item );
      }
      // add to additional group if item needs to be hidden or revealed
      if ( isMatched && item.isHidden ) {
        hiddenMatched.push( item );
      } else if ( !isMatched && !item.isHidden ) {
        visibleUnmatched.push( item );
      }
    }

    // return collections of items to be manipulated
    return {
      matches: matches,
      needReveal: hiddenMatched,
      needHide: visibleUnmatched
    };
  };

  // get a jQuery, function, or a matchesSelector test given the filter
  proto._getFilterTest = function( filter ) {
    if ( jQuery && this.options.isJQueryFiltering ) {
      // use jQuery
      return function( item ) {
        return jQuery( item.element ).is( filter );
      };
    }
    if ( typeof filter == 'function' ) {
      // use filter as function
      return function( item ) {
        return filter( item.element );
      };
    }
    // default, use filter as selector string
    return function( item ) {
      return matchesSelector( item.element, filter );
    };
  };

  // -------------------------- sorting -------------------------- //

  /**
   * @params {Array} elems
   * @public
   */
  proto.updateSortData = function( elems ) {
    // get items
    var items;
    if ( elems ) {
      elems = utils.makeArray( elems );
      items = this.getItems( elems );
    } else {
      // update all items if no elems provided
      items = this.items;
    }

    this._getSorters();
    this._updateItemsSortData( items );
  };

  proto._getSorters = function() {
    var getSortData = this.options.getSortData;
    for ( var key in getSortData ) {
      var sorter = getSortData[ key ];
      this._sorters[ key ] = mungeSorter( sorter );
    }
  };

  /**
   * @params {Array} items - of Isotope.Items
   * @private
   */
  proto._updateItemsSortData = function( items ) {
    // do not update if no items
    var len = items && items.length;

    for ( var i=0; len && i < len; i++ ) {
      var item = items[i];
      item.updateSortData();
    }
  };

  // ----- munge sorter ----- //

  // encapsulate this, as we just need mungeSorter
  // other functions in here are just for munging
  var mungeSorter = ( function() {
    // add a magic layer to sorters for convienent shorthands
    // `.foo-bar` will use the text of .foo-bar querySelector
    // `[foo-bar]` will use attribute
    // you can also add parser
    // `.foo-bar parseInt` will parse that as a number
    function mungeSorter( sorter ) {
      // if not a string, return function or whatever it is
      if ( typeof sorter != 'string' ) {
        return sorter;
      }
      // parse the sorter string
      var args = trim( sorter ).split(' ');
      var query = args[0];
      // check if query looks like [an-attribute]
      var attrMatch = query.match( /^\[(.+)\]$/ );
      var attr = attrMatch && attrMatch[1];
      var getValue = getValueGetter( attr, query );
      // use second argument as a parser
      var parser = Isotope.sortDataParsers[ args[1] ];
      // parse the value, if there was a parser
      sorter = parser ? function( elem ) {
        return elem && parser( getValue( elem ) );
      } :
      // otherwise just return value
      function( elem ) {
        return elem && getValue( elem );
      };

      return sorter;
    }

    // get an attribute getter, or get text of the querySelector
    function getValueGetter( attr, query ) {
      // if query looks like [foo-bar], get attribute
      if ( attr ) {
        return function getAttribute( elem ) {
          return elem.getAttribute( attr );
        };
      }

      // otherwise, assume its a querySelector, and get its text
      return function getChildText( elem ) {
        var child = elem.querySelector( query );
        return child && child.textContent;
      };
    }

    return mungeSorter;
  })();

  // parsers used in getSortData shortcut strings
  Isotope.sortDataParsers = {
    'parseInt': function( val ) {
      return parseInt( val, 10 );
    },
    'parseFloat': function( val ) {
      return parseFloat( val );
    }
  };

  // ----- sort method ----- //

  // sort filteredItem order
  proto._sort = function() {
    if ( !this.options.sortBy ) {
      return;
    }
    // keep track of sortBy History
    var sortBys = utils.makeArray( this.options.sortBy );
    if ( !this._getIsSameSortBy( sortBys ) ) {
      // concat all sortBy and sortHistory, add to front, oldest goes in last
      this.sortHistory = sortBys.concat( this.sortHistory );
    }
    // sort magic
    var itemSorter = getItemSorter( this.sortHistory, this.options.sortAscending );
    this.filteredItems.sort( itemSorter );
  };

  // check if sortBys is same as start of sortHistory
  proto._getIsSameSortBy = function( sortBys ) {
    for ( var i=0; i < sortBys.length; i++ ) {
      if ( sortBys[i] != this.sortHistory[i] ) {
        return false;
      }
    }
    return true;
  };

  // returns a function used for sorting
  function getItemSorter( sortBys, sortAsc ) {
    return function sorter( itemA, itemB ) {
      // cycle through all sortKeys
      for ( var i = 0; i < sortBys.length; i++ ) {
        var sortBy = sortBys[i];
        var a = itemA.sortData[ sortBy ];
        var b = itemB.sortData[ sortBy ];
        if ( a > b || a < b ) {
          // if sortAsc is an object, use the value given the sortBy key
          var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;
          var direction = isAscending ? 1 : -1;
          return ( a > b ? 1 : -1 ) * direction;
        }
      }
      return 0;
    };
  }

  // -------------------------- methods -------------------------- //

  // get layout mode
  proto._mode = function() {
    var layoutMode = this.options.layoutMode;
    var mode = this.modes[ layoutMode ];
    if ( !mode ) {
      // TODO console.error
      throw new Error( 'No layout mode: ' + layoutMode );
    }
    // HACK sync mode's options
    // any options set after init for layout mode need to be synced
    mode.options = this.options[ layoutMode ];
    return mode;
  };

  proto._resetLayout = function() {
    // trigger original reset layout
    Outlayer.prototype._resetLayout.call( this );
    this._mode()._resetLayout();
  };

  proto._getItemLayoutPosition = function( item  ) {
    return this._mode()._getItemLayoutPosition( item );
  };

  proto._manageStamp = function( stamp ) {
    this._mode()._manageStamp( stamp );
  };

  proto._getContainerSize = function() {
    return this._mode()._getContainerSize();
  };

  proto.needsResizeLayout = function() {
    return this._mode().needsResizeLayout();
  };

  // -------------------------- adding & removing -------------------------- //

  // HEADS UP overwrites default Outlayer appended
  proto.appended = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded( items );
    // add to filteredItems
    this.filteredItems = this.filteredItems.concat( filteredItems );
  };

  // HEADS UP overwrites default Outlayer prepended
  proto.prepended = function( elems ) {
    var items = this._itemize( elems );
    if ( !items.length ) {
      return;
    }
    // start new layout
    this._resetLayout();
    this._manageStamps();
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded( items );
    // layout previous items
    this.layoutItems( this.filteredItems );
    // add to items and filteredItems
    this.filteredItems = filteredItems.concat( this.filteredItems );
    this.items = items.concat( this.items );
  };

  proto._filterRevealAdded = function( items ) {
    var filtered = this._filter( items );
    this.hide( filtered.needHide );
    // reveal all new items
    this.reveal( filtered.matches );
    // layout new items, no transition
    this.layoutItems( filtered.matches, true );
    return filtered.matches;
  };

  /**
   * Filter, sort, and layout newly-appended item elements
   * @param {Array or NodeList or Element} elems
   */
  proto.insert = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // append item elements
    var i, item;
    var len = items.length;
    for ( i=0; i < len; i++ ) {
      item = items[i];
      this.element.appendChild( item.element );
    }
    // filter new stuff
    var filteredInsertItems = this._filter( items ).matches;
    // set flag
    for ( i=0; i < len; i++ ) {
      items[i].isLayoutInstant = true;
    }
    this.arrange();
    // reset flag
    for ( i=0; i < len; i++ ) {
      delete items[i].isLayoutInstant;
    }
    this.reveal( filteredInsertItems );
  };

  var _remove = proto.remove;
  proto.remove = function( elems ) {
    elems = utils.makeArray( elems );
    var removeItems = this.getItems( elems );
    // do regular thing
    _remove.call( this, elems );
    // bail if no items to remove
    var len = removeItems && removeItems.length;
    // remove elems from filteredItems
    for ( var i=0; len && i < len; i++ ) {
      var item = removeItems[i];
      // remove item from collection
      utils.removeFrom( this.filteredItems, item );
    }
  };

  proto.shuffle = function() {
    // update random sortData
    for ( var i=0; i < this.items.length; i++ ) {
      var item = this.items[i];
      item.sortData.random = Math.random();
    }
    this.options.sortBy = 'random';
    this._sort();
    this._layout();
  };

  /**
   * trigger fn without transition
   * kind of hacky to have this in the first place
   * @param {Function} fn
   * @param {Array} args
   * @returns ret
   * @private
   */
  proto._noTransition = function( fn, args ) {
    // save transitionDuration before disabling
    var transitionDuration = this.options.transitionDuration;
    // disable transition
    this.options.transitionDuration = 0;
    // do it
    var returnValue = fn.apply( this, args );
    // re-enable transition for reveal
    this.options.transitionDuration = transitionDuration;
    return returnValue;
  };

  // ----- helper methods ----- //

  /**
   * getter method for getting filtered item elements
   * @returns {Array} elems - collection of item elements
   */
  proto.getFilteredItemElements = function() {
    return this.filteredItems.map( function( item ) {
      return item.element;
    });
  };

  // -----  ----- //

  return Isotope;

}));


/***/ }),

/***/ "./node_modules/isotope-layout/js/item.js":
/*!************************************************!*\
  !*** ./node_modules/isotope-layout/js/item.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Isotope Item
**/

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! outlayer/outlayer */ "./node_modules/outlayer/outlayer.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( Outlayer ) {
'use strict';

// -------------------------- Item -------------------------- //

// sub-class Outlayer Item
function Item() {
  Outlayer.Item.apply( this, arguments );
}

var proto = Item.prototype = Object.create( Outlayer.Item.prototype );

var _create = proto._create;
proto._create = function() {
  // assign id, used for original-order sorting
  this.id = this.layout.itemGUID++;
  _create.call( this );
  this.sortData = {};
};

proto.updateSortData = function() {
  if ( this.isIgnored ) {
    return;
  }
  // default sorters
  this.sortData.id = this.id;
  // for backward compatibility
  this.sortData['original-order'] = this.id;
  this.sortData.random = Math.random();
  // go thru getSortData obj and apply the sorters
  var getSortData = this.layout.options.getSortData;
  var sorters = this.layout._sorters;
  for ( var key in getSortData ) {
    var sorter = sorters[ key ];
    this.sortData[ key ] = sorter( this.element, this );
  }
};

var _destroy = proto.destroy;
proto.destroy = function() {
  // call super
  _destroy.apply( this, arguments );
  // reset display, #741
  this.css({
    display: ''
  });
};

return Item;

}));


/***/ }),

/***/ "./node_modules/isotope-layout/js/layout-mode.js":
/*!*******************************************************!*\
  !*** ./node_modules/isotope-layout/js/layout-mode.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Isotope LayoutMode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js"),
        __webpack_require__(/*! outlayer/outlayer */ "./node_modules/outlayer/outlayer.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( getSize, Outlayer ) {
  'use strict';

  // layout mode class
  function LayoutMode( isotope ) {
    this.isotope = isotope;
    // link properties
    if ( isotope ) {
      this.options = isotope.options[ this.namespace ];
      this.element = isotope.element;
      this.items = isotope.filteredItems;
      this.size = isotope.size;
    }
  }

  var proto = LayoutMode.prototype;

  /**
   * some methods should just defer to default Outlayer method
   * and reference the Isotope instance as `this`
  **/
  var facadeMethods = [
    '_resetLayout',
    '_getItemLayoutPosition',
    '_manageStamp',
    '_getContainerSize',
    '_getElementOffset',
    'needsResizeLayout',
    '_getOption'
  ];

  facadeMethods.forEach( function( methodName ) {
    proto[ methodName ] = function() {
      return Outlayer.prototype[ methodName ].apply( this.isotope, arguments );
    };
  });

  // -----  ----- //

  // for horizontal layout modes, check vertical size
  proto.needsVerticalResizeLayout = function() {
    // don't trigger if size did not change
    var size = getSize( this.isotope.element );
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var hasSizes = this.isotope.size && size;
    return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
  };

  // ----- measurements ----- //

  proto._getMeasurement = function() {
    this.isotope._getMeasurement.apply( this, arguments );
  };

  proto.getColumnWidth = function() {
    this.getSegmentSize( 'column', 'Width' );
  };

  proto.getRowHeight = function() {
    this.getSegmentSize( 'row', 'Height' );
  };

  /**
   * get columnWidth or rowHeight
   * segment: 'column' or 'row'
   * size 'Width' or 'Height'
  **/
  proto.getSegmentSize = function( segment, size ) {
    var segmentName = segment + size;
    var outerSize = 'outer' + size;
    // columnWidth / outerWidth // rowHeight / outerHeight
    this._getMeasurement( segmentName, outerSize );
    // got rowHeight or columnWidth, we can chill
    if ( this[ segmentName ] ) {
      return;
    }
    // fall back to item of first element
    var firstItemSize = this.getFirstItemSize();
    this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||
      // or size of container
      this.isotope.size[ 'inner' + size ];
  };

  proto.getFirstItemSize = function() {
    var firstItem = this.isotope.filteredItems[0];
    return firstItem && firstItem.element && getSize( firstItem.element );
  };

  // ----- methods that should reference isotope ----- //

  proto.layout = function() {
    this.isotope.layout.apply( this.isotope, arguments );
  };

  proto.getSize = function() {
    this.isotope.getSize();
    this.size = this.isotope.size;
  };

  // -------------------------- create -------------------------- //

  LayoutMode.modes = {};

  LayoutMode.create = function( namespace, options ) {

    function Mode() {
      LayoutMode.apply( this, arguments );
    }

    Mode.prototype = Object.create( proto );
    Mode.prototype.constructor = Mode;

    // default options
    if ( options ) {
      Mode.options = options;
    }

    Mode.prototype.namespace = namespace;
    // register in Isotope
    LayoutMode.modes[ namespace ] = Mode;

    return Mode;
  };

  return LayoutMode;

}));


/***/ }),

/***/ "./node_modules/isotope-layout/js/layout-modes/fit-rows.js":
/*!*****************************************************************!*\
  !*** ./node_modules/isotope-layout/js/layout-modes/fit-rows.js ***!
  \*****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * fitRows layout mode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ../layout-mode */ "./node_modules/isotope-layout/js/layout-mode.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( LayoutMode ) {
'use strict';

var FitRows = LayoutMode.create('fitRows');

var proto = FitRows.prototype;

proto._resetLayout = function() {
  this.x = 0;
  this.y = 0;
  this.maxY = 0;
  this._getMeasurement( 'gutter', 'outerWidth' );
};

proto._getItemLayoutPosition = function( item ) {
  item.getSize();

  var itemWidth = item.size.outerWidth + this.gutter;
  // if this element cannot fit in the current row
  var containerWidth = this.isotope.size.innerWidth + this.gutter;
  if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {
    this.x = 0;
    this.y = this.maxY;
  }

  var position = {
    x: this.x,
    y: this.y
  };

  this.maxY = Math.max( this.maxY, this.y + item.size.outerHeight );
  this.x += itemWidth;

  return position;
};

proto._getContainerSize = function() {
  return { height: this.maxY };
};

return FitRows;

}));


/***/ }),

/***/ "./node_modules/isotope-layout/js/layout-modes/masonry.js":
/*!****************************************************************!*\
  !*** ./node_modules/isotope-layout/js/layout-modes/masonry.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ../layout-mode */ "./node_modules/isotope-layout/js/layout-mode.js"),
        __webpack_require__(/*! masonry-layout/masonry */ "./node_modules/masonry-layout/masonry.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( LayoutMode, Masonry ) {
'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var MasonryMode = LayoutMode.create('masonry');

  var proto = MasonryMode.prototype;

  var keepModeMethods = {
    _getElementOffset: true,
    layout: true,
    _getMeasurement: true
  };

  // inherit Masonry prototype
  for ( var method in Masonry.prototype ) {
    // do not inherit mode methods
    if ( !keepModeMethods[ method ] ) {
      proto[ method ] = Masonry.prototype[ method ];
    }
  }

  var measureColumns = proto.measureColumns;
  proto.measureColumns = function() {
    // set items, used if measuring first item
    this.items = this.isotope.filteredItems;
    measureColumns.call( this );
  };

  // point to mode options for fitWidth
  var _getOption = proto._getOption;
  proto._getOption = function( option ) {
    if ( option == 'fitWidth' ) {
      return this.options.isFitWidth !== undefined ?
        this.options.isFitWidth : this.options.fitWidth;
    }
    return _getOption.apply( this.isotope, arguments );
  };

  return MasonryMode;

}));


/***/ }),

/***/ "./node_modules/isotope-layout/js/layout-modes/vertical.js":
/*!*****************************************************************!*\
  !*** ./node_modules/isotope-layout/js/layout-modes/vertical.js ***!
  \*****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * vertical layout mode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ../layout-mode */ "./node_modules/isotope-layout/js/layout-mode.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( LayoutMode ) {
'use strict';

var Vertical = LayoutMode.create( 'vertical', {
  horizontalAlignment: 0
});

var proto = Vertical.prototype;

proto._resetLayout = function() {
  this.y = 0;
};

proto._getItemLayoutPosition = function( item ) {
  item.getSize();
  var x = ( this.isotope.size.innerWidth - item.size.outerWidth ) *
    this.options.horizontalAlignment;
  var y = this.y;
  this.y += item.size.outerHeight;
  return { x: x, y: y };
};

proto._getContainerSize = function() {
  return { height: this.y };
};

return Vertical;

}));


/***/ }),

/***/ "./node_modules/masonry-layout/masonry.js":
/*!************************************************!*\
  !*** ./node_modules/masonry-layout/masonry.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! outlayer/outlayer */ "./node_modules/outlayer/outlayer.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( Outlayer, getSize ) {

'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));


/***/ }),

/***/ "./node_modules/outlayer/item.js":
/*!***************************************!*\
  !*** ./node_modules/outlayer/item.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));


/***/ }),

/***/ "./node_modules/outlayer/outlayer.js":
/*!*******************************************!*\
  !*** ./node_modules/outlayer/outlayer.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js"),
        __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
        __webpack_require__(/*! ./item */ "./node_modules/outlayer/item.js")
      ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["commons/frontend/commonVendor"], function() { return __webpack_exec__("./src/assets/js/custom/home/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29yZS93YWl0Zm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY3VzdG9tL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXYtZW1pdHRlci9ldi1lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maXp6eS11aS11dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2V0LXNpemUvZ2V0LXNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzb3RvcGUtbGF5b3V0L2pzL2lzb3RvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzb3RvcGUtbGF5b3V0L2pzL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvZml0LXJvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2Rlcy9tYXNvbnJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvdmVydGljYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hc29ucnktbGF5b3V0L21hc29ucnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL291dGxheWVyL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL291dGxheWVyL291dGxheWVyLmpzIl0sIm5hbWVzIjpbImltYWdlc0xvYWRlZCIsInNlbGVjdG9yIiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImltZyIsImNvbXBsZXRlIiwibmF0dXJhbEhlaWdodCIsInJlc29sdmUiLCJyZWplY3QiLCJhZGRFdmVudExpc3RlbmVyIiwid2FpdEZvckVsIiwiY2FsbGJhY2siLCJqUXVlcnkiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiSXNvdG9wZSIsInJlcXVpcmUiLCJyZXNwb25zaXZlIiwiaXRlbXMiLCJIb21lIiwiZWxlbWVudCIsIl9zZXR1cFZhcmlhYmxlcyIsIl9zZXR1cEV2ZW50cyIsImJhbm5lciIsImZpbmQiLCJ0b3BTYWxlIiwic3BlY2lhbFByaWNlIiwibmV3UGhvbmUiLCJibG9nIiwicGhwUGx1Z2luIiwib3dsQ2Fyb3VzZWwiLCJkb3RzIiwiYXV0b3BsYXkiLCJsb29wIiwibmF2IiwibWFyZ2luIiwiY2VudGVyIiwic3BlY2lhbF9wcmljZSIsImdyaWRJTUciLCJlbGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW1hZ2VMb2FkZWQiLCJ0aGVuIiwiaXRlbVNlbGVjdG9yIiwibGF5b3V0TW9kZSIsIm1hc29ucnkiLCJjb2x1bW5XaWR0aCIsImlzRml0V2lkdGgiLCJjb25zb2xlIiwibG9nIiwibW9kIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXJWYWx1ZSIsIiQiLCJhdHRyIiwiYXJyYW5nZSIsImZpbHRlciIsIl9pbml0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmUsU0FBU0EsWUFBVCxDQUFzQkMsUUFBdEIsRUFBZ0M7QUFDN0MsU0FBT0MsT0FBTyxDQUFDQyxHQUFSLENBQ0xDLEtBQUssQ0FBQ0MsSUFBTixDQUFXSixR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QTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsR0FBRztBQUNIOztBQUVBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7O0FDaFBEO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0JBQW9CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkJBQTZCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYzs7QUFFMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBLGdCQUFnQix1QkFBdUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLDZCQUE2QjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQSx5Q0FBeUM7O0FBRXpDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLENBQUMiLCJmaWxlIjoianMvY3VzdG9tL2hvbWUvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbWFnZXNMb2FkZWQoc2VsZWN0b3IpIHtcclxuICByZXR1cm4gUHJvbWlzZS5hbGwoXHJcbiAgICBBcnJheS5mcm9tKHNlbGVjdG9yKS5tYXAoKGltZykgPT4ge1xyXG4gICAgICBpZiAoaW1nLmNvbXBsZXRlKVxyXG4gICAgICAgIGlmIChpbWcubmF0dXJhbEhlaWdodCAhPT0gMCkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIFByb21pc2UucmVqZWN0KGltZyk7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHJlc29sdmUpO1xyXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKCkgPT4gcmVqZWN0KGltZykpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciB3YWl0Rm9yRWwgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNhbGxiYWNrKSB7XHJcbiAgaWYgKGpRdWVyeShzZWxlY3RvcikubGVuZ3RoKSB7XHJcbiAgICBjYWxsYmFjaygpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgd2FpdEZvckVsKHNlbGVjdG9yLCBjYWxsYmFjayk7XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxufTtcclxuIiwidmFyIElzb3RvcGUgPSByZXF1aXJlKFwiaXNvdG9wZS1sYXlvdXRcIik7XHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgMDoge1xyXG4gICAgaXRlbXM6IDEsXHJcbiAgfSxcclxuICA2MDA6IHtcclxuICAgIGl0ZW1zOiAzLFxyXG4gIH0sXHJcbiAgMTAwMDoge1xyXG4gICAgaXRlbXM6IDUsXHJcbiAgfSxcclxufTtcclxuaW1wb3J0IGltYWdlTG9hZGVkIGZyb20gXCJjb3JlanMvd2FpdGZvclwiO1xyXG5jbGFzcyBIb21lIHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuICBfaW5pdCA9ICgpID0+IHtcclxuICAgIHRoaXMuX3NldHVwVmFyaWFibGVzKCk7XHJcbiAgICB0aGlzLl9zZXR1cEV2ZW50cygpO1xyXG4gIH07XHJcbiAgX3NldHVwVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5iYW5uZXIgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNiYW5uZXItYXJlYVwiKTtcclxuICAgIHRoaXMudG9wU2FsZSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3RvcC1zYWxlXCIpO1xyXG4gICAgdGhpcy5zcGVjaWFsUHJpY2UgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNzcGVjaWFsLXByaWNlXCIpO1xyXG4gICAgdGhpcy5uZXdQaG9uZSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI25ldy1waG9uZXNcIik7XHJcbiAgICB0aGlzLmJsb2cgPSB0aGlzLmVsZW1lbnQuZmluZChcIiNibG9nXCIpO1xyXG4gIH07XHJcbiAgX3NldHVwRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgdmFyIHBocFBsdWdpbiA9IHRoaXM7XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvL093bCBjYXJvdXNlbFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcGhwUGx1Z2luLmJhbm5lci5maW5kKFwiLm93bC1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vVG9wIHNhbGVzXHJcbiAgICBwaHBQbHVnaW4udG9wU2FsZS5maW5kKFwiLm93bC1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgIG1hcmdpbjogMTUsXHJcbiAgICAgIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmUsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL25ldyBwcm9kdWN0XHJcbiAgICBwaHBQbHVnaW4ubmV3UGhvbmUuZmluZChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBtYXJnaW46IDE1LFxyXG4gICAgICByZXNwb25zaXZlOiByZXNwb25zaXZlLFxyXG4gICAgfSk7XHJcbiAgICAvL2Jsb2dcclxuICAgIHBocFBsdWdpbi5ibG9nLmZpbmQoXCIub3dsLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHsgaXRlbXM6IDEgfSxcclxuICAgICAgICA2MDA6IHsgaXRlbXM6IDMgfSxcclxuICAgICAgfSxcclxuICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9Jc290b3BlIEZpbHRlclxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgZnVuY3Rpb24gc3BlY2lhbF9wcmljZSgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB2YXIgZ3JpZElNRyA9IHBocFBsdWdpbi5zcGVjaWFsUHJpY2UuZmluZChcIi5ncmlkIC5ncmlkLWl0ZW0gaW1nXCIpO1xyXG4gICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkXCIpO1xyXG4gICAgICAgIGltYWdlTG9hZGVkKGdyaWRJTUcpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoXHJcbiAgICAgICAgICAgICAgbmV3IElzb3RvcGUoZWxlbSwge1xyXG4gICAgICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiBcIi5ncmlkLWl0ZW1cIixcclxuICAgICAgICAgICAgICAgIGxheW91dE1vZGU6IFwibWFzb25yeVwiLFxyXG4gICAgICAgICAgICAgICAgbWFzb25yeToge1xyXG4gICAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogMCxcclxuICAgICAgICAgICAgICAgICAgaXNGaXRXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS5sb2coXCJlcnJvciBpbWFnZVwiKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3BlY2lhbF9wcmljZSgpXHJcbiAgICAgIC50aGVuKChtb2QpID0+IHtcclxuICAgICAgICBwaHBQbHVnaW4uc3BlY2lhbFByaWNlXHJcbiAgICAgICAgICAuZmluZChcIi5idXR0b24tZ3JvdXBcIilcclxuICAgICAgICAgIC5vbihcImNsaWNrXCIsIFwiYnV0dG9uXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGZpbHRlclZhbHVlID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1maWx0ZXJcIik7XHJcbiAgICAgICAgICAgIG1vZC5hcnJhbmdlKHtcclxuICAgICAgICAgICAgICBmaWx0ZXI6IGZpbHRlclZhbHVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9O1xyXG59XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBuZXcgSG9tZSgkKFwiI21haW4tc2l0ZVwiKSkuX2luaXQoKTtcclxufSk7XHJcbiIsIi8qKlxuICogbWF0Y2hlc1NlbGVjdG9yIHYyLjAuMlxuICogbWF0Y2hlc1NlbGVjdG9yKCBlbGVtZW50LCAnLnNlbGVjdG9yJyApXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUsIHVudXNlZDogdHJ1ZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cbiAgJ3VzZSBzdHJpY3QnO1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lm1hdGNoZXNTZWxlY3RvciA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgbWF0Y2hlc01ldGhvZCA9ICggZnVuY3Rpb24oKSB7XG4gICAgdmFyIEVsZW1Qcm90byA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZTtcbiAgICAvLyBjaGVjayBmb3IgdGhlIHN0YW5kYXJkIG1ldGhvZCBuYW1lIGZpcnN0XG4gICAgaWYgKCBFbGVtUHJvdG8ubWF0Y2hlcyApIHtcbiAgICAgIHJldHVybiAnbWF0Y2hlcyc7XG4gICAgfVxuICAgIC8vIGNoZWNrIHVuLXByZWZpeGVkXG4gICAgaWYgKCBFbGVtUHJvdG8ubWF0Y2hlc1NlbGVjdG9yICkge1xuICAgICAgcmV0dXJuICdtYXRjaGVzU2VsZWN0b3InO1xuICAgIH1cbiAgICAvLyBjaGVjayB2ZW5kb3IgcHJlZml4ZXNcbiAgICB2YXIgcHJlZml4ZXMgPSBbICd3ZWJraXQnLCAnbW96JywgJ21zJywgJ28nIF07XG5cbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgICB2YXIgbWV0aG9kID0gcHJlZml4ICsgJ01hdGNoZXNTZWxlY3Rvcic7XG4gICAgICBpZiAoIEVsZW1Qcm90b1sgbWV0aG9kIF0gKSB7XG4gICAgICAgIHJldHVybiBtZXRob2Q7XG4gICAgICB9XG4gICAgfVxuICB9KSgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBtYXRjaGVzU2VsZWN0b3IoIGVsZW0sIHNlbGVjdG9yICkge1xuICAgIHJldHVybiBlbGVtWyBtYXRjaGVzTWV0aG9kIF0oIHNlbGVjdG9yICk7XG4gIH07XG5cbn0pKTtcbiIsIi8qKlxuICogRXZFbWl0dGVyIHYxLjEuMFxuICogTGlsJyBldmVudCBlbWl0dGVyXG4gKiBNSVQgTGljZW5zZVxuICovXG5cbi8qIGpzaGludCB1bnVzZWQ6IHRydWUsIHVuZGVmOiB0cnVlLCBzdHJpY3Q6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggZ2xvYmFsLCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgd2luZG93ICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EIC0gUmVxdWlyZUpTXG4gICAgZGVmaW5lKCBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlMgLSBCcm93c2VyaWZ5LCBXZWJwYWNrXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZ2xvYmFsLkV2RW1pdHRlciA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KCB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24oKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBFdkVtaXR0ZXIoKSB7fVxuXG52YXIgcHJvdG8gPSBFdkVtaXR0ZXIucHJvdG90eXBlO1xuXG5wcm90by5vbiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBzZXQgZXZlbnRzIGhhc2hcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IGxpc3RlbmVycyBhcnJheVxuICB2YXIgbGlzdGVuZXJzID0gZXZlbnRzWyBldmVudE5hbWUgXSA9IGV2ZW50c1sgZXZlbnROYW1lIF0gfHwgW107XG4gIC8vIG9ubHkgYWRkIG9uY2VcbiAgaWYgKCBsaXN0ZW5lcnMuaW5kZXhPZiggbGlzdGVuZXIgKSA9PSAtMSApIHtcbiAgICBsaXN0ZW5lcnMucHVzaCggbGlzdGVuZXIgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub25jZSA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhZGQgZXZlbnRcbiAgdGhpcy5vbiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAvLyBzZXQgb25jZSBmbGFnXG4gIC8vIHNldCBvbmNlRXZlbnRzIGhhc2hcbiAgdmFyIG9uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IG9uY2VMaXN0ZW5lcnMgb2JqZWN0XG4gIHZhciBvbmNlTGlzdGVuZXJzID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSB8fCB7fTtcbiAgLy8gc2V0IGZsYWdcbiAgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXSA9IHRydWU7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vZmYgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGxpc3RlbmVycy5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmVtaXRFdmVudCA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGFyZ3MgKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBjb3B5IG92ZXIgdG8gYXZvaWQgaW50ZXJmZXJlbmNlIGlmIC5vZmYoKSBpbiBsaXN0ZW5lclxuICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoMCk7XG4gIGFyZ3MgPSBhcmdzIHx8IFtdO1xuICAvLyBvbmNlIHN0dWZmXG4gIHZhciBvbmNlTGlzdGVuZXJzID0gdGhpcy5fb25jZUV2ZW50cyAmJiB0aGlzLl9vbmNlRXZlbnRzWyBldmVudE5hbWUgXTtcblxuICBmb3IgKCB2YXIgaT0wOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXVxuICAgIHZhciBpc09uY2UgPSBvbmNlTGlzdGVuZXJzICYmIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XG4gICAgaWYgKCBpc09uY2UgKSB7XG4gICAgICAvLyByZW1vdmUgbGlzdGVuZXJcbiAgICAgIC8vIHJlbW92ZSBiZWZvcmUgdHJpZ2dlciB0byBwcmV2ZW50IHJlY3Vyc2lvblxuICAgICAgdGhpcy5vZmYoIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgICAgIC8vIHVuc2V0IG9uY2UgZmxhZ1xuICAgICAgZGVsZXRlIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XG4gICAgfVxuICAgIC8vIHRyaWdnZXIgbGlzdGVuZXJcbiAgICBsaXN0ZW5lci5hcHBseSggdGhpcywgYXJncyApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5hbGxPZmYgPSBmdW5jdGlvbigpIHtcbiAgZGVsZXRlIHRoaXMuX2V2ZW50cztcbiAgZGVsZXRlIHRoaXMuX29uY2VFdmVudHM7XG59O1xuXG5yZXR1cm4gRXZFbWl0dGVyO1xuXG59KSk7XG4iLCIvKipcbiAqIEZpenp5IFVJIHV0aWxzIHYyLjAuN1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlLCBzdHJpY3Q6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLypqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKmdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3RvcidcbiAgICBdLCBmdW5jdGlvbiggbWF0Y2hlc1NlbGVjdG9yICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgbWF0Y2hlc1NlbGVjdG9yICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LmZpenp5VUlVdGlscyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cubWF0Y2hlc1NlbGVjdG9yXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgbWF0Y2hlc1NlbGVjdG9yICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHt9O1xuXG4vLyAtLS0tLSBleHRlbmQgLS0tLS0gLy9cblxuLy8gZXh0ZW5kcyBvYmplY3RzXG51dGlscy5leHRlbmQgPSBmdW5jdGlvbiggYSwgYiApIHtcbiAgZm9yICggdmFyIHByb3AgaW4gYiApIHtcbiAgICBhWyBwcm9wIF0gPSBiWyBwcm9wIF07XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG4vLyAtLS0tLSBtb2R1bG8gLS0tLS0gLy9cblxudXRpbHMubW9kdWxvID0gZnVuY3Rpb24oIG51bSwgZGl2ICkge1xuICByZXR1cm4gKCAoIG51bSAlIGRpdiApICsgZGl2ICkgJSBkaXY7XG59O1xuXG4vLyAtLS0tLSBtYWtlQXJyYXkgLS0tLS0gLy9cblxudmFyIGFycmF5U2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbi8vIHR1cm4gZWxlbWVudCBvciBub2RlTGlzdCBpbnRvIGFuIGFycmF5XG51dGlscy5tYWtlQXJyYXkgPSBmdW5jdGlvbiggb2JqICkge1xuICBpZiAoIEFycmF5LmlzQXJyYXkoIG9iaiApICkge1xuICAgIC8vIHVzZSBvYmplY3QgaWYgYWxyZWFkeSBhbiBhcnJheVxuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgLy8gcmV0dXJuIGVtcHR5IGFycmF5IGlmIHVuZGVmaW5lZCBvciBudWxsLiAjNlxuICBpZiAoIG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgaXNBcnJheUxpa2UgPSB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIHR5cGVvZiBvYmoubGVuZ3RoID09ICdudW1iZXInO1xuICBpZiAoIGlzQXJyYXlMaWtlICkge1xuICAgIC8vIGNvbnZlcnQgbm9kZUxpc3QgdG8gYXJyYXlcbiAgICByZXR1cm4gYXJyYXlTbGljZS5jYWxsKCBvYmogKTtcbiAgfVxuXG4gIC8vIGFycmF5IG9mIHNpbmdsZSBpbmRleFxuICByZXR1cm4gWyBvYmogXTtcbn07XG5cbi8vIC0tLS0tIHJlbW92ZUZyb20gLS0tLS0gLy9cblxudXRpbHMucmVtb3ZlRnJvbSA9IGZ1bmN0aW9uKCBhcnksIG9iaiApIHtcbiAgdmFyIGluZGV4ID0gYXJ5LmluZGV4T2YoIG9iaiApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGFyeS5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGdldFBhcmVudCAtLS0tLSAvL1xuXG51dGlscy5nZXRQYXJlbnQgPSBmdW5jdGlvbiggZWxlbSwgc2VsZWN0b3IgKSB7XG4gIHdoaWxlICggZWxlbS5wYXJlbnROb2RlICYmIGVsZW0gIT0gZG9jdW1lbnQuYm9keSApIHtcbiAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xuICAgIGlmICggbWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBzZWxlY3RvciApICkge1xuICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuICB9XG59O1xuXG4vLyAtLS0tLSBnZXRRdWVyeUVsZW1lbnQgLS0tLS0gLy9cblxuLy8gdXNlIGVsZW1lbnQgYXMgc2VsZWN0b3Igc3RyaW5nXG51dGlscy5nZXRRdWVyeUVsZW1lbnQgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgaWYgKCB0eXBlb2YgZWxlbSA9PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggZWxlbSApO1xuICB9XG4gIHJldHVybiBlbGVtO1xufTtcblxuLy8gLS0tLS0gaGFuZGxlRXZlbnQgLS0tLS0gLy9cblxuLy8gZW5hYmxlIC5vbnR5cGUgdG8gdHJpZ2dlciBmcm9tIC5hZGRFdmVudExpc3RlbmVyKCBlbGVtLCAndHlwZScgKVxudXRpbHMuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZmlsdGVyRmluZEVsZW1lbnRzIC0tLS0tIC8vXG5cbnV0aWxzLmZpbHRlckZpbmRFbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcywgc2VsZWN0b3IgKSB7XG4gIC8vIG1ha2UgYXJyYXkgb2YgZWxlbXNcbiAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gIHZhciBmZkVsZW1zID0gW107XG5cbiAgZWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgLy8gY2hlY2sgdGhhdCBlbGVtIGlzIGFuIGFjdHVhbCBlbGVtZW50XG4gICAgaWYgKCAhKCBlbGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgKSApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gYWRkIGVsZW0gaWYgbm8gc2VsZWN0b3JcbiAgICBpZiAoICFzZWxlY3RvciApIHtcbiAgICAgIGZmRWxlbXMucHVzaCggZWxlbSApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBmaWx0ZXIgJiBmaW5kIGl0ZW1zIGlmIHdlIGhhdmUgYSBzZWxlY3RvclxuICAgIC8vIGZpbHRlclxuICAgIGlmICggbWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBzZWxlY3RvciApICkge1xuICAgICAgZmZFbGVtcy5wdXNoKCBlbGVtICk7XG4gICAgfVxuICAgIC8vIGZpbmQgY2hpbGRyZW5cbiAgICB2YXIgY2hpbGRFbGVtcyA9IGVsZW0ucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKTtcbiAgICAvLyBjb25jYXQgY2hpbGRFbGVtcyB0byBmaWx0ZXJGb3VuZCBhcnJheVxuICAgIGZvciAoIHZhciBpPTA7IGkgPCBjaGlsZEVsZW1zLmxlbmd0aDsgaSsrICkge1xuICAgICAgZmZFbGVtcy5wdXNoKCBjaGlsZEVsZW1zW2ldICk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZmZFbGVtcztcbn07XG5cbi8vIC0tLS0tIGRlYm91bmNlTWV0aG9kIC0tLS0tIC8vXG5cbnV0aWxzLmRlYm91bmNlTWV0aG9kID0gZnVuY3Rpb24oIF9jbGFzcywgbWV0aG9kTmFtZSwgdGhyZXNob2xkICkge1xuICB0aHJlc2hvbGQgPSB0aHJlc2hvbGQgfHwgMTAwO1xuICAvLyBvcmlnaW5hbCBtZXRob2RcbiAgdmFyIG1ldGhvZCA9IF9jbGFzcy5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXTtcbiAgdmFyIHRpbWVvdXROYW1lID0gbWV0aG9kTmFtZSArICdUaW1lb3V0JztcblxuICBfY2xhc3MucHJvdG90eXBlWyBtZXRob2ROYW1lIF0gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGltZW91dCA9IHRoaXNbIHRpbWVvdXROYW1lIF07XG4gICAgY2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXNbIHRpbWVvdXROYW1lIF0gPSBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgIG1ldGhvZC5hcHBseSggX3RoaXMsIGFyZ3MgKTtcbiAgICAgIGRlbGV0ZSBfdGhpc1sgdGltZW91dE5hbWUgXTtcbiAgICB9LCB0aHJlc2hvbGQgKTtcbiAgfTtcbn07XG5cbi8vIC0tLS0tIGRvY1JlYWR5IC0tLS0tIC8vXG5cbnV0aWxzLmRvY1JlYWR5ID0gZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuICB2YXIgcmVhZHlTdGF0ZSA9IGRvY3VtZW50LnJlYWR5U3RhdGU7XG4gIGlmICggcmVhZHlTdGF0ZSA9PSAnY29tcGxldGUnIHx8IHJlYWR5U3RhdGUgPT0gJ2ludGVyYWN0aXZlJyApIHtcbiAgICAvLyBkbyBhc3luYyB0byBhbGxvdyBmb3Igb3RoZXIgc2NyaXB0cyB0byBydW4uIG1ldGFmaXp6eS9mbGlja2l0eSM0NDFcbiAgICBzZXRUaW1lb3V0KCBjYWxsYmFjayApO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgY2FsbGJhY2sgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gaHRtbEluaXQgLS0tLS0gLy9cblxuLy8gaHR0cDovL2phbWVzcm9iZXJ0cy5uYW1lL2Jsb2cvMjAxMC8wMi8yMi9zdHJpbmctZnVuY3Rpb25zLWZvci1qYXZhc2NyaXB0LXRyaW0tdG8tY2FtZWwtY2FzZS10by1kYXNoZWQtYW5kLXRvLXVuZGVyc2NvcmUvXG51dGlscy50b0Rhc2hlZCA9IGZ1bmN0aW9uKCBzdHIgKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSggLyguKShbQS1aXSkvZywgZnVuY3Rpb24oIG1hdGNoLCAkMSwgJDIgKSB7XG4gICAgcmV0dXJuICQxICsgJy0nICsgJDI7XG4gIH0pLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlO1xuLyoqXG4gKiBhbGxvdyB1c2VyIHRvIGluaXRpYWxpemUgY2xhc3NlcyB2aWEgW2RhdGEtbmFtZXNwYWNlXSBvciAuanMtbmFtZXNwYWNlIGNsYXNzXG4gKiBodG1sSW5pdCggV2lkZ2V0LCAnd2lkZ2V0TmFtZScgKVxuICogb3B0aW9ucyBhcmUgcGFyc2VkIGZyb20gZGF0YS1uYW1lc3BhY2Utb3B0aW9uc1xuICovXG51dGlscy5odG1sSW5pdCA9IGZ1bmN0aW9uKCBXaWRnZXRDbGFzcywgbmFtZXNwYWNlICkge1xuICB1dGlscy5kb2NSZWFkeSggZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRhc2hlZE5hbWVzcGFjZSA9IHV0aWxzLnRvRGFzaGVkKCBuYW1lc3BhY2UgKTtcbiAgICB2YXIgZGF0YUF0dHIgPSAnZGF0YS0nICsgZGFzaGVkTmFtZXNwYWNlO1xuICAgIHZhciBkYXRhQXR0ckVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJ1snICsgZGF0YUF0dHIgKyAnXScgKTtcbiAgICB2YXIganNEYXNoRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmpzLScgKyBkYXNoZWROYW1lc3BhY2UgKTtcbiAgICB2YXIgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGRhdGFBdHRyRWxlbXMgKVxuICAgICAgLmNvbmNhdCggdXRpbHMubWFrZUFycmF5KCBqc0Rhc2hFbGVtcyApICk7XG4gICAgdmFyIGRhdGFPcHRpb25zQXR0ciA9IGRhdGFBdHRyICsgJy1vcHRpb25zJztcbiAgICB2YXIgalF1ZXJ5ID0gd2luZG93LmpRdWVyeTtcblxuICAgIGVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgdmFyIGF0dHIgPSBlbGVtLmdldEF0dHJpYnV0ZSggZGF0YUF0dHIgKSB8fFxuICAgICAgICBlbGVtLmdldEF0dHJpYnV0ZSggZGF0YU9wdGlvbnNBdHRyICk7XG4gICAgICB2YXIgb3B0aW9ucztcbiAgICAgIHRyeSB7XG4gICAgICAgIG9wdGlvbnMgPSBhdHRyICYmIEpTT04ucGFyc2UoIGF0dHIgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnJvciApIHtcbiAgICAgICAgLy8gbG9nIGVycm9yLCBkbyBub3QgaW5pdGlhbGl6ZVxuICAgICAgICBpZiAoIGNvbnNvbGUgKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvciggJ0Vycm9yIHBhcnNpbmcgJyArIGRhdGFBdHRyICsgJyBvbiAnICsgZWxlbS5jbGFzc05hbWUgK1xuICAgICAgICAgICc6ICcgKyBlcnJvciApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGluaXRpYWxpemVcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBXaWRnZXRDbGFzcyggZWxlbSwgb3B0aW9ucyApO1xuICAgICAgLy8gbWFrZSBhdmFpbGFibGUgdmlhICQoKS5kYXRhKCduYW1lc3BhY2UnKVxuICAgICAgaWYgKCBqUXVlcnkgKSB7XG4gICAgICAgIGpRdWVyeS5kYXRhKCBlbGVtLCBuYW1lc3BhY2UsIGluc3RhbmNlICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfSk7XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxucmV0dXJuIHV0aWxzO1xuXG59KSk7XG4iLCIvKiFcbiAqIGdldFNpemUgdjIuMC4zXG4gKiBtZWFzdXJlIHNpemUgb2YgZWxlbWVudHNcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLyoganNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUsIHVudXNlZDogdHJ1ZSAqL1xuLyogZ2xvYmFscyBjb25zb2xlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qIGdsb2JhbHMgZGVmaW5lLCBtb2R1bGUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LmdldFNpemUgPSBmYWN0b3J5KCk7XG4gIH1cblxufSkoIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBnZXQgYSBudW1iZXIgZnJvbSBhIHN0cmluZywgbm90IGEgcGVyY2VudGFnZVxuZnVuY3Rpb24gZ2V0U3R5bGVTaXplKCB2YWx1ZSApIHtcbiAgdmFyIG51bSA9IHBhcnNlRmxvYXQoIHZhbHVlICk7XG4gIC8vIG5vdCBhIHBlcmNlbnQgbGlrZSAnMTAwJScsIGFuZCBhIG51bWJlclxuICB2YXIgaXNWYWxpZCA9IHZhbHVlLmluZGV4T2YoJyUnKSA9PSAtMSAmJiAhaXNOYU4oIG51bSApO1xuICByZXR1cm4gaXNWYWxpZCAmJiBudW07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgbG9nRXJyb3IgPSB0eXBlb2YgY29uc29sZSA9PSAndW5kZWZpbmVkJyA/IG5vb3AgOlxuICBmdW5jdGlvbiggbWVzc2FnZSApIHtcbiAgICBjb25zb2xlLmVycm9yKCBtZXNzYWdlICk7XG4gIH07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1lYXN1cmVtZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgbWVhc3VyZW1lbnRzID0gW1xuICAncGFkZGluZ0xlZnQnLFxuICAncGFkZGluZ1JpZ2h0JyxcbiAgJ3BhZGRpbmdUb3AnLFxuICAncGFkZGluZ0JvdHRvbScsXG4gICdtYXJnaW5MZWZ0JyxcbiAgJ21hcmdpblJpZ2h0JyxcbiAgJ21hcmdpblRvcCcsXG4gICdtYXJnaW5Cb3R0b20nLFxuICAnYm9yZGVyTGVmdFdpZHRoJyxcbiAgJ2JvcmRlclJpZ2h0V2lkdGgnLFxuICAnYm9yZGVyVG9wV2lkdGgnLFxuICAnYm9yZGVyQm90dG9tV2lkdGgnXG5dO1xuXG52YXIgbWVhc3VyZW1lbnRzTGVuZ3RoID0gbWVhc3VyZW1lbnRzLmxlbmd0aDtcblxuZnVuY3Rpb24gZ2V0WmVyb1NpemUoKSB7XG4gIHZhciBzaXplID0ge1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBpbm5lcldpZHRoOiAwLFxuICAgIGlubmVySGVpZ2h0OiAwLFxuICAgIG91dGVyV2lkdGg6IDAsXG4gICAgb3V0ZXJIZWlnaHQ6IDBcbiAgfTtcbiAgZm9yICggdmFyIGk9MDsgaSA8IG1lYXN1cmVtZW50c0xlbmd0aDsgaSsrICkge1xuICAgIHZhciBtZWFzdXJlbWVudCA9IG1lYXN1cmVtZW50c1tpXTtcbiAgICBzaXplWyBtZWFzdXJlbWVudCBdID0gMDtcbiAgfVxuICByZXR1cm4gc2l6ZTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2V0U3R5bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBnZXRTdHlsZSwgZ2V0IHN0eWxlIG9mIGVsZW1lbnQsIGNoZWNrIGZvciBGaXJlZm94IGJ1Z1xuICogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gKi9cbmZ1bmN0aW9uIGdldFN0eWxlKCBlbGVtICkge1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKCBlbGVtICk7XG4gIGlmICggIXN0eWxlICkge1xuICAgIGxvZ0Vycm9yKCAnU3R5bGUgcmV0dXJuZWQgJyArIHN0eWxlICtcbiAgICAgICcuIEFyZSB5b3UgcnVubmluZyB0aGlzIGNvZGUgaW4gYSBoaWRkZW4gaWZyYW1lIG9uIEZpcmVmb3g/ICcgK1xuICAgICAgJ1NlZSBodHRwczovL2JpdC5seS9nZXRzaXplYnVnMScgKTtcbiAgfVxuICByZXR1cm4gc3R5bGU7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNldHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBpc1NldHVwID0gZmFsc2U7XG5cbnZhciBpc0JveFNpemVPdXRlcjtcblxuLyoqXG4gKiBzZXR1cFxuICogY2hlY2sgaXNCb3hTaXplck91dGVyXG4gKiBkbyBvbiBmaXJzdCBnZXRTaXplKCkgcmF0aGVyIHRoYW4gb24gcGFnZSBsb2FkIGZvciBGaXJlZm94IGJ1Z1xuICovXG5mdW5jdGlvbiBzZXR1cCgpIHtcbiAgLy8gc2V0dXAgb25jZVxuICBpZiAoIGlzU2V0dXAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlzU2V0dXAgPSB0cnVlO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJveCBzaXppbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvKipcbiAgICogQ2hyb21lICYgU2FmYXJpIG1lYXN1cmUgdGhlIG91dGVyLXdpZHRoIG9uIHN0eWxlLndpZHRoIG9uIGJvcmRlci1ib3ggZWxlbXNcbiAgICogSUUxMSAmIEZpcmVmb3g8MjkgbWVhc3VyZXMgdGhlIGlubmVyLXdpZHRoXG4gICAqL1xuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5zdHlsZS53aWR0aCA9ICcyMDBweCc7XG4gIGRpdi5zdHlsZS5wYWRkaW5nID0gJzFweCAycHggM3B4IDRweCc7XG4gIGRpdi5zdHlsZS5ib3JkZXJTdHlsZSA9ICdzb2xpZCc7XG4gIGRpdi5zdHlsZS5ib3JkZXJXaWR0aCA9ICcxcHggMnB4IDNweCA0cHgnO1xuICBkaXYuc3R5bGUuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuXG4gIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoIGRpdiApO1xuICB2YXIgc3R5bGUgPSBnZXRTdHlsZSggZGl2ICk7XG4gIC8vIHJvdW5kIHZhbHVlIGZvciBicm93c2VyIHpvb20uIGRlc2FuZHJvL21hc29ucnkjOTI4XG4gIGlzQm94U2l6ZU91dGVyID0gTWF0aC5yb3VuZCggZ2V0U3R5bGVTaXplKCBzdHlsZS53aWR0aCApICkgPT0gMjAwO1xuICBnZXRTaXplLmlzQm94U2l6ZU91dGVyID0gaXNCb3hTaXplT3V0ZXI7XG5cbiAgYm9keS5yZW1vdmVDaGlsZCggZGl2ICk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdldFNpemUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gZ2V0U2l6ZSggZWxlbSApIHtcbiAgc2V0dXAoKTtcblxuICAvLyB1c2UgcXVlcnlTZWxldG9yIGlmIGVsZW0gaXMgc3RyaW5nXG4gIGlmICggdHlwZW9mIGVsZW0gPT0gJ3N0cmluZycgKSB7XG4gICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGVsZW0gKTtcbiAgfVxuXG4gIC8vIGRvIG5vdCBwcm9jZWVkIG9uIG5vbi1vYmplY3RzXG4gIGlmICggIWVsZW0gfHwgdHlwZW9mIGVsZW0gIT0gJ29iamVjdCcgfHwgIWVsZW0ubm9kZVR5cGUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gZ2V0U3R5bGUoIGVsZW0gKTtcblxuICAvLyBpZiBoaWRkZW4sIGV2ZXJ5dGhpbmcgaXMgMFxuICBpZiAoIHN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnICkge1xuICAgIHJldHVybiBnZXRaZXJvU2l6ZSgpO1xuICB9XG5cbiAgdmFyIHNpemUgPSB7fTtcbiAgc2l6ZS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gIHNpemUuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG5cbiAgdmFyIGlzQm9yZGVyQm94ID0gc2l6ZS5pc0JvcmRlckJveCA9IHN0eWxlLmJveFNpemluZyA9PSAnYm9yZGVyLWJveCc7XG5cbiAgLy8gZ2V0IGFsbCBtZWFzdXJlbWVudHNcbiAgZm9yICggdmFyIGk9MDsgaSA8IG1lYXN1cmVtZW50c0xlbmd0aDsgaSsrICkge1xuICAgIHZhciBtZWFzdXJlbWVudCA9IG1lYXN1cmVtZW50c1tpXTtcbiAgICB2YXIgdmFsdWUgPSBzdHlsZVsgbWVhc3VyZW1lbnQgXTtcbiAgICB2YXIgbnVtID0gcGFyc2VGbG9hdCggdmFsdWUgKTtcbiAgICAvLyBhbnkgJ2F1dG8nLCAnbWVkaXVtJyB2YWx1ZSB3aWxsIGJlIDBcbiAgICBzaXplWyBtZWFzdXJlbWVudCBdID0gIWlzTmFOKCBudW0gKSA/IG51bSA6IDA7XG4gIH1cblxuICB2YXIgcGFkZGluZ1dpZHRoID0gc2l6ZS5wYWRkaW5nTGVmdCArIHNpemUucGFkZGluZ1JpZ2h0O1xuICB2YXIgcGFkZGluZ0hlaWdodCA9IHNpemUucGFkZGluZ1RvcCArIHNpemUucGFkZGluZ0JvdHRvbTtcbiAgdmFyIG1hcmdpbldpZHRoID0gc2l6ZS5tYXJnaW5MZWZ0ICsgc2l6ZS5tYXJnaW5SaWdodDtcbiAgdmFyIG1hcmdpbkhlaWdodCA9IHNpemUubWFyZ2luVG9wICsgc2l6ZS5tYXJnaW5Cb3R0b207XG4gIHZhciBib3JkZXJXaWR0aCA9IHNpemUuYm9yZGVyTGVmdFdpZHRoICsgc2l6ZS5ib3JkZXJSaWdodFdpZHRoO1xuICB2YXIgYm9yZGVySGVpZ2h0ID0gc2l6ZS5ib3JkZXJUb3BXaWR0aCArIHNpemUuYm9yZGVyQm90dG9tV2lkdGg7XG5cbiAgdmFyIGlzQm9yZGVyQm94U2l6ZU91dGVyID0gaXNCb3JkZXJCb3ggJiYgaXNCb3hTaXplT3V0ZXI7XG5cbiAgLy8gb3ZlcndyaXRlIHdpZHRoIGFuZCBoZWlnaHQgaWYgd2UgY2FuIGdldCBpdCBmcm9tIHN0eWxlXG4gIHZhciBzdHlsZVdpZHRoID0gZ2V0U3R5bGVTaXplKCBzdHlsZS53aWR0aCApO1xuICBpZiAoIHN0eWxlV2lkdGggIT09IGZhbHNlICkge1xuICAgIHNpemUud2lkdGggPSBzdHlsZVdpZHRoICtcbiAgICAgIC8vIGFkZCBwYWRkaW5nIGFuZCBib3JkZXIgdW5sZXNzIGl0J3MgYWxyZWFkeSBpbmNsdWRpbmcgaXRcbiAgICAgICggaXNCb3JkZXJCb3hTaXplT3V0ZXIgPyAwIDogcGFkZGluZ1dpZHRoICsgYm9yZGVyV2lkdGggKTtcbiAgfVxuXG4gIHZhciBzdHlsZUhlaWdodCA9IGdldFN0eWxlU2l6ZSggc3R5bGUuaGVpZ2h0ICk7XG4gIGlmICggc3R5bGVIZWlnaHQgIT09IGZhbHNlICkge1xuICAgIHNpemUuaGVpZ2h0ID0gc3R5bGVIZWlnaHQgK1xuICAgICAgLy8gYWRkIHBhZGRpbmcgYW5kIGJvcmRlciB1bmxlc3MgaXQncyBhbHJlYWR5IGluY2x1ZGluZyBpdFxuICAgICAgKCBpc0JvcmRlckJveFNpemVPdXRlciA/IDAgOiBwYWRkaW5nSGVpZ2h0ICsgYm9yZGVySGVpZ2h0ICk7XG4gIH1cblxuICBzaXplLmlubmVyV2lkdGggPSBzaXplLndpZHRoIC0gKCBwYWRkaW5nV2lkdGggKyBib3JkZXJXaWR0aCApO1xuICBzaXplLmlubmVySGVpZ2h0ID0gc2l6ZS5oZWlnaHQgLSAoIHBhZGRpbmdIZWlnaHQgKyBib3JkZXJIZWlnaHQgKTtcblxuICBzaXplLm91dGVyV2lkdGggPSBzaXplLndpZHRoICsgbWFyZ2luV2lkdGg7XG4gIHNpemUub3V0ZXJIZWlnaHQgPSBzaXplLmhlaWdodCArIG1hcmdpbkhlaWdodDtcblxuICByZXR1cm4gc2l6ZTtcbn1cblxucmV0dXJuIGdldFNpemU7XG5cbn0pO1xuIiwiLyohXG4gKiBJc290b3BlIHYzLjAuNlxuICpcbiAqIExpY2Vuc2VkIEdQTHYzIGZvciBvcGVuIHNvdXJjZSB1c2VcbiAqIG9yIElzb3RvcGUgQ29tbWVyY2lhbCBMaWNlbnNlIGZvciBjb21tZXJjaWFsIHVzZVxuICpcbiAqIGh0dHBzOi8vaXNvdG9wZS5tZXRhZml6enkuY29cbiAqIENvcHlyaWdodCAyMDEwLTIwMTggTWV0YWZpenp5XG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICdvdXRsYXllci9vdXRsYXllcicsXG4gICAgICAgICdnZXQtc2l6ZS9nZXQtc2l6ZScsXG4gICAgICAgICdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3InLFxuICAgICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnLFxuICAgICAgICAnLi9pdGVtJyxcbiAgICAgICAgJy4vbGF5b3V0LW1vZGUnLFxuICAgICAgICAvLyBpbmNsdWRlIGRlZmF1bHQgbGF5b3V0IG1vZGVzXG4gICAgICAgICcuL2xheW91dC1tb2Rlcy9tYXNvbnJ5JyxcbiAgICAgICAgJy4vbGF5b3V0LW1vZGVzL2ZpdC1yb3dzJyxcbiAgICAgICAgJy4vbGF5b3V0LW1vZGVzL3ZlcnRpY2FsJ1xuICAgICAgXSxcbiAgICAgIGZ1bmN0aW9uKCBPdXRsYXllciwgZ2V0U2l6ZSwgbWF0Y2hlc1NlbGVjdG9yLCB1dGlscywgSXRlbSwgTGF5b3V0TW9kZSApIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgT3V0bGF5ZXIsIGdldFNpemUsIG1hdGNoZXNTZWxlY3RvciwgdXRpbHMsIEl0ZW0sIExheW91dE1vZGUgKTtcbiAgICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnb3V0bGF5ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJyksXG4gICAgICByZXF1aXJlKCdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yJyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICAgcmVxdWlyZSgnLi9pdGVtJyksXG4gICAgICByZXF1aXJlKCcuL2xheW91dC1tb2RlJyksXG4gICAgICAvLyBpbmNsdWRlIGRlZmF1bHQgbGF5b3V0IG1vZGVzXG4gICAgICByZXF1aXJlKCcuL2xheW91dC1tb2Rlcy9tYXNvbnJ5JyksXG4gICAgICByZXF1aXJlKCcuL2xheW91dC1tb2Rlcy9maXQtcm93cycpLFxuICAgICAgcmVxdWlyZSgnLi9sYXlvdXQtbW9kZXMvdmVydGljYWwnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuSXNvdG9wZSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuT3V0bGF5ZXIsXG4gICAgICB3aW5kb3cuZ2V0U2l6ZSxcbiAgICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3IsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICAgd2luZG93Lklzb3RvcGUuSXRlbSxcbiAgICAgIHdpbmRvdy5Jc290b3BlLkxheW91dE1vZGVcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBPdXRsYXllciwgZ2V0U2l6ZSwgbWF0Y2hlc1NlbGVjdG9yLCB1dGlscyxcbiAgSXRlbSwgTGF5b3V0TW9kZSApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2YXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBqUXVlcnkgPSB3aW5kb3cualF1ZXJ5O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciB0cmltID0gU3RyaW5nLnByb3RvdHlwZS50cmltID9cbiAgZnVuY3Rpb24oIHN0ciApIHtcbiAgICByZXR1cm4gc3RyLnRyaW0oKTtcbiAgfSA6XG4gIGZ1bmN0aW9uKCBzdHIgKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvXlxccyt8XFxzKyQvZywgJycgKTtcbiAgfTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaXNvdG9wZURlZmluaXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBjcmVhdGUgYW4gT3V0bGF5ZXIgbGF5b3V0IGNsYXNzXG4gIHZhciBJc290b3BlID0gT3V0bGF5ZXIuY3JlYXRlKCAnaXNvdG9wZScsIHtcbiAgICBsYXlvdXRNb2RlOiAnbWFzb25yeScsXG4gICAgaXNKUXVlcnlGaWx0ZXJpbmc6IHRydWUsXG4gICAgc29ydEFzY2VuZGluZzogdHJ1ZVxuICB9KTtcblxuICBJc290b3BlLkl0ZW0gPSBJdGVtO1xuICBJc290b3BlLkxheW91dE1vZGUgPSBMYXlvdXRNb2RlO1xuXG4gIHZhciBwcm90byA9IElzb3RvcGUucHJvdG90eXBlO1xuXG4gIHByb3RvLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLml0ZW1HVUlEID0gMDtcbiAgICAvLyBmdW5jdGlvbnMgdGhhdCBzb3J0IGl0ZW1zXG4gICAgdGhpcy5fc29ydGVycyA9IHt9O1xuICAgIHRoaXMuX2dldFNvcnRlcnMoKTtcbiAgICAvLyBjYWxsIHN1cGVyXG4gICAgT3V0bGF5ZXIucHJvdG90eXBlLl9jcmVhdGUuY2FsbCggdGhpcyApO1xuXG4gICAgLy8gY3JlYXRlIGxheW91dCBtb2Rlc1xuICAgIHRoaXMubW9kZXMgPSB7fTtcbiAgICAvLyBzdGFydCBmaWx0ZXJlZEl0ZW1zIHdpdGggYWxsIGl0ZW1zXG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAvLyBrZWVwIG9mIHRyYWNrIG9mIHNvcnRCeXNcbiAgICB0aGlzLnNvcnRIaXN0b3J5ID0gWyAnb3JpZ2luYWwtb3JkZXInIF07XG4gICAgLy8gY3JlYXRlIGZyb20gcmVnaXN0ZXJlZCBsYXlvdXQgbW9kZXNcbiAgICBmb3IgKCB2YXIgbmFtZSBpbiBMYXlvdXRNb2RlLm1vZGVzICkge1xuICAgICAgdGhpcy5faW5pdExheW91dE1vZGUoIG5hbWUgKTtcbiAgICB9XG4gIH07XG5cbiAgcHJvdG8ucmVsb2FkSXRlbXMgPSBmdW5jdGlvbigpIHtcbiAgICAvLyByZXNldCBpdGVtIElEIGNvdW50ZXJcbiAgICB0aGlzLml0ZW1HVUlEID0gMDtcbiAgICAvLyBjYWxsIHN1cGVyXG4gICAgT3V0bGF5ZXIucHJvdG90eXBlLnJlbG9hZEl0ZW1zLmNhbGwoIHRoaXMgKTtcbiAgfTtcblxuICBwcm90by5faXRlbWl6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IE91dGxheWVyLnByb3RvdHlwZS5faXRlbWl6ZS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgLy8gYXNzaWduIElEIGZvciBvcmlnaW5hbC1vcmRlclxuICAgIGZvciAoIHZhciBpPTA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG4gICAgICBpdGVtLmlkID0gdGhpcy5pdGVtR1VJRCsrO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVJdGVtc1NvcnREYXRhKCBpdGVtcyApO1xuICAgIHJldHVybiBpdGVtcztcbiAgfTtcblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGxheW91dCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIHByb3RvLl9pbml0TGF5b3V0TW9kZSA9IGZ1bmN0aW9uKCBuYW1lICkge1xuICAgIHZhciBNb2RlID0gTGF5b3V0TW9kZS5tb2Rlc1sgbmFtZSBdO1xuICAgIC8vIHNldCBtb2RlIG9wdGlvbnNcbiAgICAvLyBIQUNLIGV4dGVuZCBpbml0aWFsIG9wdGlvbnMsIGJhY2stZmlsbCBpbiBkZWZhdWx0IG9wdGlvbnNcbiAgICB2YXIgaW5pdGlhbE9wdHMgPSB0aGlzLm9wdGlvbnNbIG5hbWUgXSB8fCB7fTtcbiAgICB0aGlzLm9wdGlvbnNbIG5hbWUgXSA9IE1vZGUub3B0aW9ucyA/XG4gICAgICB1dGlscy5leHRlbmQoIE1vZGUub3B0aW9ucywgaW5pdGlhbE9wdHMgKSA6IGluaXRpYWxPcHRzO1xuICAgIC8vIGluaXQgbGF5b3V0IG1vZGUgaW5zdGFuY2VcbiAgICB0aGlzLm1vZGVzWyBuYW1lIF0gPSBuZXcgTW9kZSggdGhpcyApO1xuICB9O1xuXG5cbiAgcHJvdG8ubGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gaWYgZmlyc3QgdGltZSBkb2luZyBsYXlvdXQsIGRvIGFsbCBtYWdpY1xuICAgIGlmICggIXRoaXMuX2lzTGF5b3V0SW5pdGVkICYmIHRoaXMuX2dldE9wdGlvbignaW5pdExheW91dCcpICkge1xuICAgICAgdGhpcy5hcnJhbmdlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2xheW91dCgpO1xuICB9O1xuXG4gIC8vIHByaXZhdGUgbWV0aG9kIHRvIGJlIHVzZWQgaW4gbGF5b3V0KCkgJiBtYWdpYygpXG4gIHByb3RvLl9sYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBkb24ndCBhbmltYXRlIGZpcnN0IGxheW91dFxuICAgIHZhciBpc0luc3RhbnQgPSB0aGlzLl9nZXRJc0luc3RhbnQoKTtcbiAgICAvLyBsYXlvdXQgZmxvd1xuICAgIHRoaXMuX3Jlc2V0TGF5b3V0KCk7XG4gICAgdGhpcy5fbWFuYWdlU3RhbXBzKCk7XG4gICAgdGhpcy5sYXlvdXRJdGVtcyggdGhpcy5maWx0ZXJlZEl0ZW1zLCBpc0luc3RhbnQgKTtcblxuICAgIC8vIGZsYWcgZm9yIGluaXRhbGl6ZWRcbiAgICB0aGlzLl9pc0xheW91dEluaXRlZCA9IHRydWU7XG4gIH07XG5cbiAgLy8gZmlsdGVyICsgc29ydCArIGxheW91dFxuICBwcm90by5hcnJhbmdlID0gZnVuY3Rpb24oIG9wdHMgKSB7XG4gICAgLy8gc2V0IGFueSBvcHRpb25zIHBhc3NcbiAgICB0aGlzLm9wdGlvbiggb3B0cyApO1xuICAgIHRoaXMuX2dldElzSW5zdGFudCgpO1xuICAgIC8vIGZpbHRlciwgc29ydCwgYW5kIGxheW91dFxuXG4gICAgLy8gZmlsdGVyXG4gICAgdmFyIGZpbHRlcmVkID0gdGhpcy5fZmlsdGVyKCB0aGlzLml0ZW1zICk7XG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gZmlsdGVyZWQubWF0Y2hlcztcblxuICAgIHRoaXMuX2JpbmRBcnJhbmdlQ29tcGxldGUoKTtcblxuICAgIGlmICggdGhpcy5faXNJbnN0YW50ICkge1xuICAgICAgdGhpcy5fbm9UcmFuc2l0aW9uKCB0aGlzLl9oaWRlUmV2ZWFsLCBbIGZpbHRlcmVkIF0gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZVJldmVhbCggZmlsdGVyZWQgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zb3J0KCk7XG4gICAgdGhpcy5fbGF5b3V0KCk7XG4gIH07XG4gIC8vIGFsaWFzIHRvIF9pbml0IGZvciBtYWluIHBsdWdpbiBtZXRob2RcbiAgcHJvdG8uX2luaXQgPSBwcm90by5hcnJhbmdlO1xuXG4gIHByb3RvLl9oaWRlUmV2ZWFsID0gZnVuY3Rpb24oIGZpbHRlcmVkICkge1xuICAgIHRoaXMucmV2ZWFsKCBmaWx0ZXJlZC5uZWVkUmV2ZWFsICk7XG4gICAgdGhpcy5oaWRlKCBmaWx0ZXJlZC5uZWVkSGlkZSApO1xuICB9O1xuXG4gIC8vIEhBQ0tcbiAgLy8gRG9uJ3QgYW5pbWF0ZS90cmFuc2l0aW9uIGZpcnN0IGxheW91dFxuICAvLyBPciBkb24ndCBhbmltYXRlL3RyYW5zaXRpb24gb3RoZXIgbGF5b3V0c1xuICBwcm90by5fZ2V0SXNJbnN0YW50ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlzTGF5b3V0SW5zdGFudCA9IHRoaXMuX2dldE9wdGlvbignbGF5b3V0SW5zdGFudCcpO1xuICAgIHZhciBpc0luc3RhbnQgPSBpc0xheW91dEluc3RhbnQgIT09IHVuZGVmaW5lZCA/IGlzTGF5b3V0SW5zdGFudCA6XG4gICAgICAhdGhpcy5faXNMYXlvdXRJbml0ZWQ7XG4gICAgdGhpcy5faXNJbnN0YW50ID0gaXNJbnN0YW50O1xuICAgIHJldHVybiBpc0luc3RhbnQ7XG4gIH07XG5cbiAgLy8gbGlzdGVuIGZvciBsYXlvdXRDb21wbGV0ZSwgaGlkZUNvbXBsZXRlIGFuZCByZXZlYWxDb21wbGV0ZVxuICAvLyB0byB0cmlnZ2VyIGFycmFuZ2VDb21wbGV0ZVxuICBwcm90by5fYmluZEFycmFuZ2VDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIGxpc3RlbiBmb3IgMyBldmVudHMgdG8gdHJpZ2dlciBhcnJhbmdlQ29tcGxldGVcbiAgICB2YXIgaXNMYXlvdXRDb21wbGV0ZSwgaXNIaWRlQ29tcGxldGUsIGlzUmV2ZWFsQ29tcGxldGU7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBmdW5jdGlvbiBhcnJhbmdlUGFyYWxsZWxDYWxsYmFjaygpIHtcbiAgICAgIGlmICggaXNMYXlvdXRDb21wbGV0ZSAmJiBpc0hpZGVDb21wbGV0ZSAmJiBpc1JldmVhbENvbXBsZXRlICkge1xuICAgICAgICBfdGhpcy5kaXNwYXRjaEV2ZW50KCAnYXJyYW5nZUNvbXBsZXRlJywgbnVsbCwgWyBfdGhpcy5maWx0ZXJlZEl0ZW1zIF0gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5vbmNlKCAnbGF5b3V0Q29tcGxldGUnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlzTGF5b3V0Q29tcGxldGUgPSB0cnVlO1xuICAgICAgYXJyYW5nZVBhcmFsbGVsQ2FsbGJhY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLm9uY2UoICdoaWRlQ29tcGxldGUnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlzSGlkZUNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgIGFycmFuZ2VQYXJhbGxlbENhbGxiYWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5vbmNlKCAncmV2ZWFsQ29tcGxldGUnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlzUmV2ZWFsQ29tcGxldGUgPSB0cnVlO1xuICAgICAgYXJyYW5nZVBhcmFsbGVsQ2FsbGJhY2soKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmaWx0ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICBwcm90by5fZmlsdGVyID0gZnVuY3Rpb24oIGl0ZW1zICkge1xuICAgIHZhciBmaWx0ZXIgPSB0aGlzLm9wdGlvbnMuZmlsdGVyO1xuICAgIGZpbHRlciA9IGZpbHRlciB8fCAnKic7XG4gICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICB2YXIgaGlkZGVuTWF0Y2hlZCA9IFtdO1xuICAgIHZhciB2aXNpYmxlVW5tYXRjaGVkID0gW107XG5cbiAgICB2YXIgdGVzdCA9IHRoaXMuX2dldEZpbHRlclRlc3QoIGZpbHRlciApO1xuXG4gICAgLy8gdGVzdCBlYWNoIGl0ZW1cbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgaXRlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgaWYgKCBpdGVtLmlzSWdub3JlZCApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvLyBhZGQgaXRlbSB0byBlaXRoZXIgbWF0Y2hlZCBvciB1bm1hdGNoZWQgZ3JvdXBcbiAgICAgIHZhciBpc01hdGNoZWQgPSB0ZXN0KCBpdGVtICk7XG4gICAgICAvLyBpdGVtLmlzRmlsdGVyTWF0Y2hlZCA9IGlzTWF0Y2hlZDtcbiAgICAgIC8vIGFkZCB0byBtYXRjaGVzIGlmIGl0cyBhIG1hdGNoXG4gICAgICBpZiAoIGlzTWF0Y2hlZCApIHtcbiAgICAgICAgbWF0Y2hlcy5wdXNoKCBpdGVtICk7XG4gICAgICB9XG4gICAgICAvLyBhZGQgdG8gYWRkaXRpb25hbCBncm91cCBpZiBpdGVtIG5lZWRzIHRvIGJlIGhpZGRlbiBvciByZXZlYWxlZFxuICAgICAgaWYgKCBpc01hdGNoZWQgJiYgaXRlbS5pc0hpZGRlbiApIHtcbiAgICAgICAgaGlkZGVuTWF0Y2hlZC5wdXNoKCBpdGVtICk7XG4gICAgICB9IGVsc2UgaWYgKCAhaXNNYXRjaGVkICYmICFpdGVtLmlzSGlkZGVuICkge1xuICAgICAgICB2aXNpYmxlVW5tYXRjaGVkLnB1c2goIGl0ZW0gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXR1cm4gY29sbGVjdGlvbnMgb2YgaXRlbXMgdG8gYmUgbWFuaXB1bGF0ZWRcbiAgICByZXR1cm4ge1xuICAgICAgbWF0Y2hlczogbWF0Y2hlcyxcbiAgICAgIG5lZWRSZXZlYWw6IGhpZGRlbk1hdGNoZWQsXG4gICAgICBuZWVkSGlkZTogdmlzaWJsZVVubWF0Y2hlZFxuICAgIH07XG4gIH07XG5cbiAgLy8gZ2V0IGEgalF1ZXJ5LCBmdW5jdGlvbiwgb3IgYSBtYXRjaGVzU2VsZWN0b3IgdGVzdCBnaXZlbiB0aGUgZmlsdGVyXG4gIHByb3RvLl9nZXRGaWx0ZXJUZXN0ID0gZnVuY3Rpb24oIGZpbHRlciApIHtcbiAgICBpZiAoIGpRdWVyeSAmJiB0aGlzLm9wdGlvbnMuaXNKUXVlcnlGaWx0ZXJpbmcgKSB7XG4gICAgICAvLyB1c2UgalF1ZXJ5XG4gICAgICByZXR1cm4gZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgICAgIHJldHVybiBqUXVlcnkoIGl0ZW0uZWxlbWVudCApLmlzKCBmaWx0ZXIgKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICggdHlwZW9mIGZpbHRlciA9PSAnZnVuY3Rpb24nICkge1xuICAgICAgLy8gdXNlIGZpbHRlciBhcyBmdW5jdGlvblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgICAgICByZXR1cm4gZmlsdGVyKCBpdGVtLmVsZW1lbnQgKTtcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIGRlZmF1bHQsIHVzZSBmaWx0ZXIgYXMgc2VsZWN0b3Igc3RyaW5nXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgICAgcmV0dXJuIG1hdGNoZXNTZWxlY3RvciggaXRlbS5lbGVtZW50LCBmaWx0ZXIgKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNvcnRpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvKipcbiAgICogQHBhcmFtcyB7QXJyYXl9IGVsZW1zXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHByb3RvLnVwZGF0ZVNvcnREYXRhID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICAgIC8vIGdldCBpdGVtc1xuICAgIHZhciBpdGVtcztcbiAgICBpZiAoIGVsZW1zICkge1xuICAgICAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gICAgICBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoIGVsZW1zICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVwZGF0ZSBhbGwgaXRlbXMgaWYgbm8gZWxlbXMgcHJvdmlkZWRcbiAgICAgIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICB0aGlzLl9nZXRTb3J0ZXJzKCk7XG4gICAgdGhpcy5fdXBkYXRlSXRlbXNTb3J0RGF0YSggaXRlbXMgKTtcbiAgfTtcblxuICBwcm90by5fZ2V0U29ydGVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBnZXRTb3J0RGF0YSA9IHRoaXMub3B0aW9ucy5nZXRTb3J0RGF0YTtcbiAgICBmb3IgKCB2YXIga2V5IGluIGdldFNvcnREYXRhICkge1xuICAgICAgdmFyIHNvcnRlciA9IGdldFNvcnREYXRhWyBrZXkgXTtcbiAgICAgIHRoaXMuX3NvcnRlcnNbIGtleSBdID0gbXVuZ2VTb3J0ZXIoIHNvcnRlciApO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtcyB7QXJyYXl9IGl0ZW1zIC0gb2YgSXNvdG9wZS5JdGVtc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJvdG8uX3VwZGF0ZUl0ZW1zU29ydERhdGEgPSBmdW5jdGlvbiggaXRlbXMgKSB7XG4gICAgLy8gZG8gbm90IHVwZGF0ZSBpZiBubyBpdGVtc1xuICAgIHZhciBsZW4gPSBpdGVtcyAmJiBpdGVtcy5sZW5ndGg7XG5cbiAgICBmb3IgKCB2YXIgaT0wOyBsZW4gJiYgaSA8IGxlbjsgaSsrICkge1xuICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgIGl0ZW0udXBkYXRlU29ydERhdGEoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gLS0tLS0gbXVuZ2Ugc29ydGVyIC0tLS0tIC8vXG5cbiAgLy8gZW5jYXBzdWxhdGUgdGhpcywgYXMgd2UganVzdCBuZWVkIG11bmdlU29ydGVyXG4gIC8vIG90aGVyIGZ1bmN0aW9ucyBpbiBoZXJlIGFyZSBqdXN0IGZvciBtdW5naW5nXG4gIHZhciBtdW5nZVNvcnRlciA9ICggZnVuY3Rpb24oKSB7XG4gICAgLy8gYWRkIGEgbWFnaWMgbGF5ZXIgdG8gc29ydGVycyBmb3IgY29udmllbmVudCBzaG9ydGhhbmRzXG4gICAgLy8gYC5mb28tYmFyYCB3aWxsIHVzZSB0aGUgdGV4dCBvZiAuZm9vLWJhciBxdWVyeVNlbGVjdG9yXG4gICAgLy8gYFtmb28tYmFyXWAgd2lsbCB1c2UgYXR0cmlidXRlXG4gICAgLy8geW91IGNhbiBhbHNvIGFkZCBwYXJzZXJcbiAgICAvLyBgLmZvby1iYXIgcGFyc2VJbnRgIHdpbGwgcGFyc2UgdGhhdCBhcyBhIG51bWJlclxuICAgIGZ1bmN0aW9uIG11bmdlU29ydGVyKCBzb3J0ZXIgKSB7XG4gICAgICAvLyBpZiBub3QgYSBzdHJpbmcsIHJldHVybiBmdW5jdGlvbiBvciB3aGF0ZXZlciBpdCBpc1xuICAgICAgaWYgKCB0eXBlb2Ygc29ydGVyICE9ICdzdHJpbmcnICkge1xuICAgICAgICByZXR1cm4gc29ydGVyO1xuICAgICAgfVxuICAgICAgLy8gcGFyc2UgdGhlIHNvcnRlciBzdHJpbmdcbiAgICAgIHZhciBhcmdzID0gdHJpbSggc29ydGVyICkuc3BsaXQoJyAnKTtcbiAgICAgIHZhciBxdWVyeSA9IGFyZ3NbMF07XG4gICAgICAvLyBjaGVjayBpZiBxdWVyeSBsb29rcyBsaWtlIFthbi1hdHRyaWJ1dGVdXG4gICAgICB2YXIgYXR0ck1hdGNoID0gcXVlcnkubWF0Y2goIC9eXFxbKC4rKVxcXSQvICk7XG4gICAgICB2YXIgYXR0ciA9IGF0dHJNYXRjaCAmJiBhdHRyTWF0Y2hbMV07XG4gICAgICB2YXIgZ2V0VmFsdWUgPSBnZXRWYWx1ZUdldHRlciggYXR0ciwgcXVlcnkgKTtcbiAgICAgIC8vIHVzZSBzZWNvbmQgYXJndW1lbnQgYXMgYSBwYXJzZXJcbiAgICAgIHZhciBwYXJzZXIgPSBJc290b3BlLnNvcnREYXRhUGFyc2Vyc1sgYXJnc1sxXSBdO1xuICAgICAgLy8gcGFyc2UgdGhlIHZhbHVlLCBpZiB0aGVyZSB3YXMgYSBwYXJzZXJcbiAgICAgIHNvcnRlciA9IHBhcnNlciA/IGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICByZXR1cm4gZWxlbSAmJiBwYXJzZXIoIGdldFZhbHVlKCBlbGVtICkgKTtcbiAgICAgIH0gOlxuICAgICAgLy8gb3RoZXJ3aXNlIGp1c3QgcmV0dXJuIHZhbHVlXG4gICAgICBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgcmV0dXJuIGVsZW0gJiYgZ2V0VmFsdWUoIGVsZW0gKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBzb3J0ZXI7XG4gICAgfVxuXG4gICAgLy8gZ2V0IGFuIGF0dHJpYnV0ZSBnZXR0ZXIsIG9yIGdldCB0ZXh0IG9mIHRoZSBxdWVyeVNlbGVjdG9yXG4gICAgZnVuY3Rpb24gZ2V0VmFsdWVHZXR0ZXIoIGF0dHIsIHF1ZXJ5ICkge1xuICAgICAgLy8gaWYgcXVlcnkgbG9va3MgbGlrZSBbZm9vLWJhcl0sIGdldCBhdHRyaWJ1dGVcbiAgICAgIGlmICggYXR0ciApIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldEF0dHJpYnV0ZSggZWxlbSApIHtcbiAgICAgICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoIGF0dHIgKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gb3RoZXJ3aXNlLCBhc3N1bWUgaXRzIGEgcXVlcnlTZWxlY3RvciwgYW5kIGdldCBpdHMgdGV4dFxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldENoaWxkVGV4dCggZWxlbSApIHtcbiAgICAgICAgdmFyIGNoaWxkID0gZWxlbS5xdWVyeVNlbGVjdG9yKCBxdWVyeSApO1xuICAgICAgICByZXR1cm4gY2hpbGQgJiYgY2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBtdW5nZVNvcnRlcjtcbiAgfSkoKTtcblxuICAvLyBwYXJzZXJzIHVzZWQgaW4gZ2V0U29ydERhdGEgc2hvcnRjdXQgc3RyaW5nc1xuICBJc290b3BlLnNvcnREYXRhUGFyc2VycyA9IHtcbiAgICAncGFyc2VJbnQnOiBmdW5jdGlvbiggdmFsICkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KCB2YWwsIDEwICk7XG4gICAgfSxcbiAgICAncGFyc2VGbG9hdCc6IGZ1bmN0aW9uKCB2YWwgKSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCggdmFsICk7XG4gICAgfVxuICB9O1xuXG4gIC8vIC0tLS0tIHNvcnQgbWV0aG9kIC0tLS0tIC8vXG5cbiAgLy8gc29ydCBmaWx0ZXJlZEl0ZW0gb3JkZXJcbiAgcHJvdG8uX3NvcnQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoICF0aGlzLm9wdGlvbnMuc29ydEJ5ICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBrZWVwIHRyYWNrIG9mIHNvcnRCeSBIaXN0b3J5XG4gICAgdmFyIHNvcnRCeXMgPSB1dGlscy5tYWtlQXJyYXkoIHRoaXMub3B0aW9ucy5zb3J0QnkgKTtcbiAgICBpZiAoICF0aGlzLl9nZXRJc1NhbWVTb3J0QnkoIHNvcnRCeXMgKSApIHtcbiAgICAgIC8vIGNvbmNhdCBhbGwgc29ydEJ5IGFuZCBzb3J0SGlzdG9yeSwgYWRkIHRvIGZyb250LCBvbGRlc3QgZ29lcyBpbiBsYXN0XG4gICAgICB0aGlzLnNvcnRIaXN0b3J5ID0gc29ydEJ5cy5jb25jYXQoIHRoaXMuc29ydEhpc3RvcnkgKTtcbiAgICB9XG4gICAgLy8gc29ydCBtYWdpY1xuICAgIHZhciBpdGVtU29ydGVyID0gZ2V0SXRlbVNvcnRlciggdGhpcy5zb3J0SGlzdG9yeSwgdGhpcy5vcHRpb25zLnNvcnRBc2NlbmRpbmcgKTtcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMuc29ydCggaXRlbVNvcnRlciApO1xuICB9O1xuXG4gIC8vIGNoZWNrIGlmIHNvcnRCeXMgaXMgc2FtZSBhcyBzdGFydCBvZiBzb3J0SGlzdG9yeVxuICBwcm90by5fZ2V0SXNTYW1lU29ydEJ5ID0gZnVuY3Rpb24oIHNvcnRCeXMgKSB7XG4gICAgZm9yICggdmFyIGk9MDsgaSA8IHNvcnRCeXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICBpZiAoIHNvcnRCeXNbaV0gIT0gdGhpcy5zb3J0SGlzdG9yeVtpXSApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyByZXR1cm5zIGEgZnVuY3Rpb24gdXNlZCBmb3Igc29ydGluZ1xuICBmdW5jdGlvbiBnZXRJdGVtU29ydGVyKCBzb3J0QnlzLCBzb3J0QXNjICkge1xuICAgIHJldHVybiBmdW5jdGlvbiBzb3J0ZXIoIGl0ZW1BLCBpdGVtQiApIHtcbiAgICAgIC8vIGN5Y2xlIHRocm91Z2ggYWxsIHNvcnRLZXlzXG4gICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBzb3J0QnlzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICB2YXIgc29ydEJ5ID0gc29ydEJ5c1tpXTtcbiAgICAgICAgdmFyIGEgPSBpdGVtQS5zb3J0RGF0YVsgc29ydEJ5IF07XG4gICAgICAgIHZhciBiID0gaXRlbUIuc29ydERhdGFbIHNvcnRCeSBdO1xuICAgICAgICBpZiAoIGEgPiBiIHx8IGEgPCBiICkge1xuICAgICAgICAgIC8vIGlmIHNvcnRBc2MgaXMgYW4gb2JqZWN0LCB1c2UgdGhlIHZhbHVlIGdpdmVuIHRoZSBzb3J0Qnkga2V5XG4gICAgICAgICAgdmFyIGlzQXNjZW5kaW5nID0gc29ydEFzY1sgc29ydEJ5IF0gIT09IHVuZGVmaW5lZCA/IHNvcnRBc2NbIHNvcnRCeSBdIDogc29ydEFzYztcbiAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gaXNBc2NlbmRpbmcgPyAxIDogLTE7XG4gICAgICAgICAgcmV0dXJuICggYSA+IGIgPyAxIDogLTEgKSAqIGRpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBnZXQgbGF5b3V0IG1vZGVcbiAgcHJvdG8uX21vZGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGF5b3V0TW9kZSA9IHRoaXMub3B0aW9ucy5sYXlvdXRNb2RlO1xuICAgIHZhciBtb2RlID0gdGhpcy5tb2Rlc1sgbGF5b3V0TW9kZSBdO1xuICAgIGlmICggIW1vZGUgKSB7XG4gICAgICAvLyBUT0RPIGNvbnNvbGUuZXJyb3JcbiAgICAgIHRocm93IG5ldyBFcnJvciggJ05vIGxheW91dCBtb2RlOiAnICsgbGF5b3V0TW9kZSApO1xuICAgIH1cbiAgICAvLyBIQUNLIHN5bmMgbW9kZSdzIG9wdGlvbnNcbiAgICAvLyBhbnkgb3B0aW9ucyBzZXQgYWZ0ZXIgaW5pdCBmb3IgbGF5b3V0IG1vZGUgbmVlZCB0byBiZSBzeW5jZWRcbiAgICBtb2RlLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnNbIGxheW91dE1vZGUgXTtcbiAgICByZXR1cm4gbW9kZTtcbiAgfTtcblxuICBwcm90by5fcmVzZXRMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyB0cmlnZ2VyIG9yaWdpbmFsIHJlc2V0IGxheW91dFxuICAgIE91dGxheWVyLnByb3RvdHlwZS5fcmVzZXRMYXlvdXQuY2FsbCggdGhpcyApO1xuICAgIHRoaXMuX21vZGUoKS5fcmVzZXRMYXlvdXQoKTtcbiAgfTtcblxuICBwcm90by5fZ2V0SXRlbUxheW91dFBvc2l0aW9uID0gZnVuY3Rpb24oIGl0ZW0gICkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlKCkuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiggaXRlbSApO1xuICB9O1xuXG4gIHByb3RvLl9tYW5hZ2VTdGFtcCA9IGZ1bmN0aW9uKCBzdGFtcCApIHtcbiAgICB0aGlzLl9tb2RlKCkuX21hbmFnZVN0YW1wKCBzdGFtcCApO1xuICB9O1xuXG4gIHByb3RvLl9nZXRDb250YWluZXJTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGUoKS5fZ2V0Q29udGFpbmVyU2l6ZSgpO1xuICB9O1xuXG4gIHByb3RvLm5lZWRzUmVzaXplTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGUoKS5uZWVkc1Jlc2l6ZUxheW91dCgpO1xuICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFkZGluZyAmIHJlbW92aW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLy8gSEVBRFMgVVAgb3ZlcndyaXRlcyBkZWZhdWx0IE91dGxheWVyIGFwcGVuZGVkXG4gIHByb3RvLmFwcGVuZGVkID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICAgIHZhciBpdGVtcyA9IHRoaXMuYWRkSXRlbXMoIGVsZW1zICk7XG4gICAgaWYgKCAhaXRlbXMubGVuZ3RoICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBmaWx0ZXIsIGxheW91dCwgcmV2ZWFsIG5ldyBpdGVtc1xuICAgIHZhciBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5fZmlsdGVyUmV2ZWFsQWRkZWQoIGl0ZW1zICk7XG4gICAgLy8gYWRkIHRvIGZpbHRlcmVkSXRlbXNcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSB0aGlzLmZpbHRlcmVkSXRlbXMuY29uY2F0KCBmaWx0ZXJlZEl0ZW1zICk7XG4gIH07XG5cbiAgLy8gSEVBRFMgVVAgb3ZlcndyaXRlcyBkZWZhdWx0IE91dGxheWVyIHByZXBlbmRlZFxuICBwcm90by5wcmVwZW5kZWQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbWl6ZSggZWxlbXMgKTtcbiAgICBpZiAoICFpdGVtcy5sZW5ndGggKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHN0YXJ0IG5ldyBsYXlvdXRcbiAgICB0aGlzLl9yZXNldExheW91dCgpO1xuICAgIHRoaXMuX21hbmFnZVN0YW1wcygpO1xuICAgIC8vIGZpbHRlciwgbGF5b3V0LCByZXZlYWwgbmV3IGl0ZW1zXG4gICAgdmFyIGZpbHRlcmVkSXRlbXMgPSB0aGlzLl9maWx0ZXJSZXZlYWxBZGRlZCggaXRlbXMgKTtcbiAgICAvLyBsYXlvdXQgcHJldmlvdXMgaXRlbXNcbiAgICB0aGlzLmxheW91dEl0ZW1zKCB0aGlzLmZpbHRlcmVkSXRlbXMgKTtcbiAgICAvLyBhZGQgdG8gaXRlbXMgYW5kIGZpbHRlcmVkSXRlbXNcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBmaWx0ZXJlZEl0ZW1zLmNvbmNhdCggdGhpcy5maWx0ZXJlZEl0ZW1zICk7XG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zLmNvbmNhdCggdGhpcy5pdGVtcyApO1xuICB9O1xuXG4gIHByb3RvLl9maWx0ZXJSZXZlYWxBZGRlZCA9IGZ1bmN0aW9uKCBpdGVtcyApIHtcbiAgICB2YXIgZmlsdGVyZWQgPSB0aGlzLl9maWx0ZXIoIGl0ZW1zICk7XG4gICAgdGhpcy5oaWRlKCBmaWx0ZXJlZC5uZWVkSGlkZSApO1xuICAgIC8vIHJldmVhbCBhbGwgbmV3IGl0ZW1zXG4gICAgdGhpcy5yZXZlYWwoIGZpbHRlcmVkLm1hdGNoZXMgKTtcbiAgICAvLyBsYXlvdXQgbmV3IGl0ZW1zLCBubyB0cmFuc2l0aW9uXG4gICAgdGhpcy5sYXlvdXRJdGVtcyggZmlsdGVyZWQubWF0Y2hlcywgdHJ1ZSApO1xuICAgIHJldHVybiBmaWx0ZXJlZC5tYXRjaGVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaWx0ZXIsIHNvcnQsIGFuZCBsYXlvdXQgbmV3bHktYXBwZW5kZWQgaXRlbSBlbGVtZW50c1xuICAgKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEVsZW1lbnR9IGVsZW1zXG4gICAqL1xuICBwcm90by5pbnNlcnQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5hZGRJdGVtcyggZWxlbXMgKTtcbiAgICBpZiAoICFpdGVtcy5sZW5ndGggKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGFwcGVuZCBpdGVtIGVsZW1lbnRzXG4gICAgdmFyIGksIGl0ZW07XG4gICAgdmFyIGxlbiA9IGl0ZW1zLmxlbmd0aDtcbiAgICBmb3IgKCBpPTA7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCggaXRlbS5lbGVtZW50ICk7XG4gICAgfVxuICAgIC8vIGZpbHRlciBuZXcgc3R1ZmZcbiAgICB2YXIgZmlsdGVyZWRJbnNlcnRJdGVtcyA9IHRoaXMuX2ZpbHRlciggaXRlbXMgKS5tYXRjaGVzO1xuICAgIC8vIHNldCBmbGFnXG4gICAgZm9yICggaT0wOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBpdGVtc1tpXS5pc0xheW91dEluc3RhbnQgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmFycmFuZ2UoKTtcbiAgICAvLyByZXNldCBmbGFnXG4gICAgZm9yICggaT0wOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBkZWxldGUgaXRlbXNbaV0uaXNMYXlvdXRJbnN0YW50O1xuICAgIH1cbiAgICB0aGlzLnJldmVhbCggZmlsdGVyZWRJbnNlcnRJdGVtcyApO1xuICB9O1xuXG4gIHZhciBfcmVtb3ZlID0gcHJvdG8ucmVtb3ZlO1xuICBwcm90by5yZW1vdmUgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gICAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gICAgdmFyIHJlbW92ZUl0ZW1zID0gdGhpcy5nZXRJdGVtcyggZWxlbXMgKTtcbiAgICAvLyBkbyByZWd1bGFyIHRoaW5nXG4gICAgX3JlbW92ZS5jYWxsKCB0aGlzLCBlbGVtcyApO1xuICAgIC8vIGJhaWwgaWYgbm8gaXRlbXMgdG8gcmVtb3ZlXG4gICAgdmFyIGxlbiA9IHJlbW92ZUl0ZW1zICYmIHJlbW92ZUl0ZW1zLmxlbmd0aDtcbiAgICAvLyByZW1vdmUgZWxlbXMgZnJvbSBmaWx0ZXJlZEl0ZW1zXG4gICAgZm9yICggdmFyIGk9MDsgbGVuICYmIGkgPCBsZW47IGkrKyApIHtcbiAgICAgIHZhciBpdGVtID0gcmVtb3ZlSXRlbXNbaV07XG4gICAgICAvLyByZW1vdmUgaXRlbSBmcm9tIGNvbGxlY3Rpb25cbiAgICAgIHV0aWxzLnJlbW92ZUZyb20oIHRoaXMuZmlsdGVyZWRJdGVtcywgaXRlbSApO1xuICAgIH1cbiAgfTtcblxuICBwcm90by5zaHVmZmxlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gdXBkYXRlIHJhbmRvbSBzb3J0RGF0YVxuICAgIGZvciAoIHZhciBpPTA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgICAgaXRlbS5zb3J0RGF0YS5yYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMuc29ydEJ5ID0gJ3JhbmRvbSc7XG4gICAgdGhpcy5fc29ydCgpO1xuICAgIHRoaXMuX2xheW91dCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiB0cmlnZ2VyIGZuIHdpdGhvdXQgdHJhbnNpdGlvblxuICAgKiBraW5kIG9mIGhhY2t5IHRvIGhhdmUgdGhpcyBpbiB0aGUgZmlyc3QgcGxhY2VcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtBcnJheX0gYXJnc1xuICAgKiBAcmV0dXJucyByZXRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByb3RvLl9ub1RyYW5zaXRpb24gPSBmdW5jdGlvbiggZm4sIGFyZ3MgKSB7XG4gICAgLy8gc2F2ZSB0cmFuc2l0aW9uRHVyYXRpb24gYmVmb3JlIGRpc2FibGluZ1xuICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIC8vIGRpc2FibGUgdHJhbnNpdGlvblxuICAgIHRoaXMub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb24gPSAwO1xuICAgIC8vIGRvIGl0XG4gICAgdmFyIHJldHVyblZhbHVlID0gZm4uYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgICAvLyByZS1lbmFibGUgdHJhbnNpdGlvbiBmb3IgcmV2ZWFsXG4gICAgdGhpcy5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gIH07XG5cbiAgLy8gLS0tLS0gaGVscGVyIG1ldGhvZHMgLS0tLS0gLy9cblxuICAvKipcbiAgICogZ2V0dGVyIG1ldGhvZCBmb3IgZ2V0dGluZyBmaWx0ZXJlZCBpdGVtIGVsZW1lbnRzXG4gICAqIEByZXR1cm5zIHtBcnJheX0gZWxlbXMgLSBjb2xsZWN0aW9uIG9mIGl0ZW0gZWxlbWVudHNcbiAgICovXG4gIHByb3RvLmdldEZpbHRlcmVkSXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRJdGVtcy5tYXAoIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgICAgcmV0dXJuIGl0ZW0uZWxlbWVudDtcbiAgICB9KTtcbiAgfTtcblxuICAvLyAtLS0tLSAgLS0tLS0gLy9cblxuICByZXR1cm4gSXNvdG9wZTtcblxufSkpO1xuIiwiLyoqXG4gKiBJc290b3BlIEl0ZW1cbioqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKmdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICAgJ291dGxheWVyL291dGxheWVyJ1xuICAgICAgXSxcbiAgICAgIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ291dGxheWVyJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lklzb3RvcGUgPSB3aW5kb3cuSXNvdG9wZSB8fCB7fTtcbiAgICB3aW5kb3cuSXNvdG9wZS5JdGVtID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdy5PdXRsYXllclxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBPdXRsYXllciApIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSXRlbSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBzdWItY2xhc3MgT3V0bGF5ZXIgSXRlbVxuZnVuY3Rpb24gSXRlbSgpIHtcbiAgT3V0bGF5ZXIuSXRlbS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG59XG5cbnZhciBwcm90byA9IEl0ZW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggT3V0bGF5ZXIuSXRlbS5wcm90b3R5cGUgKTtcblxudmFyIF9jcmVhdGUgPSBwcm90by5fY3JlYXRlO1xucHJvdG8uX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBhc3NpZ24gaWQsIHVzZWQgZm9yIG9yaWdpbmFsLW9yZGVyIHNvcnRpbmdcbiAgdGhpcy5pZCA9IHRoaXMubGF5b3V0Lml0ZW1HVUlEKys7XG4gIF9jcmVhdGUuY2FsbCggdGhpcyApO1xuICB0aGlzLnNvcnREYXRhID0ge307XG59O1xuXG5wcm90by51cGRhdGVTb3J0RGF0YSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuaXNJZ25vcmVkICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBkZWZhdWx0IHNvcnRlcnNcbiAgdGhpcy5zb3J0RGF0YS5pZCA9IHRoaXMuaWQ7XG4gIC8vIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gIHRoaXMuc29ydERhdGFbJ29yaWdpbmFsLW9yZGVyJ10gPSB0aGlzLmlkO1xuICB0aGlzLnNvcnREYXRhLnJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XG4gIC8vIGdvIHRocnUgZ2V0U29ydERhdGEgb2JqIGFuZCBhcHBseSB0aGUgc29ydGVyc1xuICB2YXIgZ2V0U29ydERhdGEgPSB0aGlzLmxheW91dC5vcHRpb25zLmdldFNvcnREYXRhO1xuICB2YXIgc29ydGVycyA9IHRoaXMubGF5b3V0Ll9zb3J0ZXJzO1xuICBmb3IgKCB2YXIga2V5IGluIGdldFNvcnREYXRhICkge1xuICAgIHZhciBzb3J0ZXIgPSBzb3J0ZXJzWyBrZXkgXTtcbiAgICB0aGlzLnNvcnREYXRhWyBrZXkgXSA9IHNvcnRlciggdGhpcy5lbGVtZW50LCB0aGlzICk7XG4gIH1cbn07XG5cbnZhciBfZGVzdHJveSA9IHByb3RvLmRlc3Ryb3k7XG5wcm90by5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNhbGwgc3VwZXJcbiAgX2Rlc3Ryb3kuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAvLyByZXNldCBkaXNwbGF5LCAjNzQxXG4gIHRoaXMuY3NzKHtcbiAgICBkaXNwbGF5OiAnJ1xuICB9KTtcbn07XG5cbnJldHVybiBJdGVtO1xuXG59KSk7XG4iLCIvKipcbiAqIElzb3RvcGUgTGF5b3V0TW9kZVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnLFxuICAgICAgICAnb3V0bGF5ZXIvb3V0bGF5ZXInXG4gICAgICBdLFxuICAgICAgZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnZ2V0LXNpemUnKSxcbiAgICAgIHJlcXVpcmUoJ291dGxheWVyJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lklzb3RvcGUgPSB3aW5kb3cuSXNvdG9wZSB8fCB7fTtcbiAgICB3aW5kb3cuSXNvdG9wZS5MYXlvdXRNb2RlID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdy5nZXRTaXplLFxuICAgICAgd2luZG93Lk91dGxheWVyXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIGdldFNpemUsIE91dGxheWVyICkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gbGF5b3V0IG1vZGUgY2xhc3NcbiAgZnVuY3Rpb24gTGF5b3V0TW9kZSggaXNvdG9wZSApIHtcbiAgICB0aGlzLmlzb3RvcGUgPSBpc290b3BlO1xuICAgIC8vIGxpbmsgcHJvcGVydGllc1xuICAgIGlmICggaXNvdG9wZSApIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IGlzb3RvcGUub3B0aW9uc1sgdGhpcy5uYW1lc3BhY2UgXTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGlzb3RvcGUuZWxlbWVudDtcbiAgICAgIHRoaXMuaXRlbXMgPSBpc290b3BlLmZpbHRlcmVkSXRlbXM7XG4gICAgICB0aGlzLnNpemUgPSBpc290b3BlLnNpemU7XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3RvID0gTGF5b3V0TW9kZS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIHNvbWUgbWV0aG9kcyBzaG91bGQganVzdCBkZWZlciB0byBkZWZhdWx0IE91dGxheWVyIG1ldGhvZFxuICAgKiBhbmQgcmVmZXJlbmNlIHRoZSBJc290b3BlIGluc3RhbmNlIGFzIGB0aGlzYFxuICAqKi9cbiAgdmFyIGZhY2FkZU1ldGhvZHMgPSBbXG4gICAgJ19yZXNldExheW91dCcsXG4gICAgJ19nZXRJdGVtTGF5b3V0UG9zaXRpb24nLFxuICAgICdfbWFuYWdlU3RhbXAnLFxuICAgICdfZ2V0Q29udGFpbmVyU2l6ZScsXG4gICAgJ19nZXRFbGVtZW50T2Zmc2V0JyxcbiAgICAnbmVlZHNSZXNpemVMYXlvdXQnLFxuICAgICdfZ2V0T3B0aW9uJ1xuICBdO1xuXG4gIGZhY2FkZU1ldGhvZHMuZm9yRWFjaCggZnVuY3Rpb24oIG1ldGhvZE5hbWUgKSB7XG4gICAgcHJvdG9bIG1ldGhvZE5hbWUgXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIE91dGxheWVyLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdLmFwcGx5KCB0aGlzLmlzb3RvcGUsIGFyZ3VtZW50cyApO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIC0tLS0tICAtLS0tLSAvL1xuXG4gIC8vIGZvciBob3Jpem9udGFsIGxheW91dCBtb2RlcywgY2hlY2sgdmVydGljYWwgc2l6ZVxuICBwcm90by5uZWVkc1ZlcnRpY2FsUmVzaXplTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gZG9uJ3QgdHJpZ2dlciBpZiBzaXplIGRpZCBub3QgY2hhbmdlXG4gICAgdmFyIHNpemUgPSBnZXRTaXplKCB0aGlzLmlzb3RvcGUuZWxlbWVudCApO1xuICAgIC8vIGNoZWNrIHRoYXQgdGhpcy5zaXplIGFuZCBzaXplIGFyZSB0aGVyZVxuICAgIC8vIElFOCB0cmlnZ2VycyByZXNpemUgb24gYm9keSBzaXplIGNoYW5nZSwgc28gdGhleSBtaWdodCBub3QgYmVcbiAgICB2YXIgaGFzU2l6ZXMgPSB0aGlzLmlzb3RvcGUuc2l6ZSAmJiBzaXplO1xuICAgIHJldHVybiBoYXNTaXplcyAmJiBzaXplLmlubmVySGVpZ2h0ICE9IHRoaXMuaXNvdG9wZS5zaXplLmlubmVySGVpZ2h0O1xuICB9O1xuXG4gIC8vIC0tLS0tIG1lYXN1cmVtZW50cyAtLS0tLSAvL1xuXG4gIHByb3RvLl9nZXRNZWFzdXJlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXNvdG9wZS5fZ2V0TWVhc3VyZW1lbnQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICB9O1xuXG4gIHByb3RvLmdldENvbHVtbldpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nZXRTZWdtZW50U2l6ZSggJ2NvbHVtbicsICdXaWR0aCcgKTtcbiAgfTtcblxuICBwcm90by5nZXRSb3dIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdldFNlZ21lbnRTaXplKCAncm93JywgJ0hlaWdodCcgKTtcbiAgfTtcblxuICAvKipcbiAgICogZ2V0IGNvbHVtbldpZHRoIG9yIHJvd0hlaWdodFxuICAgKiBzZWdtZW50OiAnY29sdW1uJyBvciAncm93J1xuICAgKiBzaXplICdXaWR0aCcgb3IgJ0hlaWdodCdcbiAgKiovXG4gIHByb3RvLmdldFNlZ21lbnRTaXplID0gZnVuY3Rpb24oIHNlZ21lbnQsIHNpemUgKSB7XG4gICAgdmFyIHNlZ21lbnROYW1lID0gc2VnbWVudCArIHNpemU7XG4gICAgdmFyIG91dGVyU2l6ZSA9ICdvdXRlcicgKyBzaXplO1xuICAgIC8vIGNvbHVtbldpZHRoIC8gb3V0ZXJXaWR0aCAvLyByb3dIZWlnaHQgLyBvdXRlckhlaWdodFxuICAgIHRoaXMuX2dldE1lYXN1cmVtZW50KCBzZWdtZW50TmFtZSwgb3V0ZXJTaXplICk7XG4gICAgLy8gZ290IHJvd0hlaWdodCBvciBjb2x1bW5XaWR0aCwgd2UgY2FuIGNoaWxsXG4gICAgaWYgKCB0aGlzWyBzZWdtZW50TmFtZSBdICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBmYWxsIGJhY2sgdG8gaXRlbSBvZiBmaXJzdCBlbGVtZW50XG4gICAgdmFyIGZpcnN0SXRlbVNpemUgPSB0aGlzLmdldEZpcnN0SXRlbVNpemUoKTtcbiAgICB0aGlzWyBzZWdtZW50TmFtZSBdID0gZmlyc3RJdGVtU2l6ZSAmJiBmaXJzdEl0ZW1TaXplWyBvdXRlclNpemUgXSB8fFxuICAgICAgLy8gb3Igc2l6ZSBvZiBjb250YWluZXJcbiAgICAgIHRoaXMuaXNvdG9wZS5zaXplWyAnaW5uZXInICsgc2l6ZSBdO1xuICB9O1xuXG4gIHByb3RvLmdldEZpcnN0SXRlbVNpemUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZmlyc3RJdGVtID0gdGhpcy5pc290b3BlLmZpbHRlcmVkSXRlbXNbMF07XG4gICAgcmV0dXJuIGZpcnN0SXRlbSAmJiBmaXJzdEl0ZW0uZWxlbWVudCAmJiBnZXRTaXplKCBmaXJzdEl0ZW0uZWxlbWVudCApO1xuICB9O1xuXG4gIC8vIC0tLS0tIG1ldGhvZHMgdGhhdCBzaG91bGQgcmVmZXJlbmNlIGlzb3RvcGUgLS0tLS0gLy9cblxuICBwcm90by5sYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlzb3RvcGUubGF5b3V0LmFwcGx5KCB0aGlzLmlzb3RvcGUsIGFyZ3VtZW50cyApO1xuICB9O1xuXG4gIHByb3RvLmdldFNpemUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlzb3RvcGUuZ2V0U2l6ZSgpO1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuaXNvdG9wZS5zaXplO1xuICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNyZWF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIExheW91dE1vZGUubW9kZXMgPSB7fTtcblxuICBMYXlvdXRNb2RlLmNyZWF0ZSA9IGZ1bmN0aW9uKCBuYW1lc3BhY2UsIG9wdGlvbnMgKSB7XG5cbiAgICBmdW5jdGlvbiBNb2RlKCkge1xuICAgICAgTGF5b3V0TW9kZS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgfVxuXG4gICAgTW9kZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBwcm90byApO1xuICAgIE1vZGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTW9kZTtcblxuICAgIC8vIGRlZmF1bHQgb3B0aW9uc1xuICAgIGlmICggb3B0aW9ucyApIHtcbiAgICAgIE1vZGUub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuXG4gICAgTW9kZS5wcm90b3R5cGUubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgIC8vIHJlZ2lzdGVyIGluIElzb3RvcGVcbiAgICBMYXlvdXRNb2RlLm1vZGVzWyBuYW1lc3BhY2UgXSA9IE1vZGU7XG5cbiAgICByZXR1cm4gTW9kZTtcbiAgfTtcblxuICByZXR1cm4gTGF5b3V0TW9kZTtcblxufSkpO1xuIiwiLyoqXG4gKiBmaXRSb3dzIGxheW91dCBtb2RlXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICcuLi9sYXlvdXQtbW9kZSdcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnLi4vbGF5b3V0LW1vZGUnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93Lklzb3RvcGUuTGF5b3V0TW9kZVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBMYXlvdXRNb2RlICkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRml0Um93cyA9IExheW91dE1vZGUuY3JlYXRlKCdmaXRSb3dzJyk7XG5cbnZhciBwcm90byA9IEZpdFJvd3MucHJvdG90eXBlO1xuXG5wcm90by5fcmVzZXRMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy54ID0gMDtcbiAgdGhpcy55ID0gMDtcbiAgdGhpcy5tYXhZID0gMDtcbiAgdGhpcy5fZ2V0TWVhc3VyZW1lbnQoICdndXR0ZXInLCAnb3V0ZXJXaWR0aCcgKTtcbn07XG5cbnByb3RvLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24gPSBmdW5jdGlvbiggaXRlbSApIHtcbiAgaXRlbS5nZXRTaXplKCk7XG5cbiAgdmFyIGl0ZW1XaWR0aCA9IGl0ZW0uc2l6ZS5vdXRlcldpZHRoICsgdGhpcy5ndXR0ZXI7XG4gIC8vIGlmIHRoaXMgZWxlbWVudCBjYW5ub3QgZml0IGluIHRoZSBjdXJyZW50IHJvd1xuICB2YXIgY29udGFpbmVyV2lkdGggPSB0aGlzLmlzb3RvcGUuc2l6ZS5pbm5lcldpZHRoICsgdGhpcy5ndXR0ZXI7XG4gIGlmICggdGhpcy54ICE9PSAwICYmIGl0ZW1XaWR0aCArIHRoaXMueCA+IGNvbnRhaW5lcldpZHRoICkge1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gdGhpcy5tYXhZO1xuICB9XG5cbiAgdmFyIHBvc2l0aW9uID0ge1xuICAgIHg6IHRoaXMueCxcbiAgICB5OiB0aGlzLnlcbiAgfTtcblxuICB0aGlzLm1heFkgPSBNYXRoLm1heCggdGhpcy5tYXhZLCB0aGlzLnkgKyBpdGVtLnNpemUub3V0ZXJIZWlnaHQgKTtcbiAgdGhpcy54ICs9IGl0ZW1XaWR0aDtcblxuICByZXR1cm4gcG9zaXRpb247XG59O1xuXG5wcm90by5fZ2V0Q29udGFpbmVyU2l6ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4geyBoZWlnaHQ6IHRoaXMubWF4WSB9O1xufTtcblxucmV0dXJuIEZpdFJvd3M7XG5cbn0pKTtcbiIsIi8qIVxuICogTWFzb25yeSBsYXlvdXQgbW9kZVxuICogc3ViLWNsYXNzZXMgTWFzb25yeVxuICogaHR0cHM6Ly9tYXNvbnJ5LmRlc2FuZHJvLmNvbVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgICAnLi4vbGF5b3V0LW1vZGUnLFxuICAgICAgICAnbWFzb25yeS1sYXlvdXQvbWFzb25yeSdcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCcuLi9sYXlvdXQtbW9kZScpLFxuICAgICAgcmVxdWlyZSgnbWFzb25yeS1sYXlvdXQnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93Lklzb3RvcGUuTGF5b3V0TW9kZSxcbiAgICAgIHdpbmRvdy5NYXNvbnJ5XG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIExheW91dE1vZGUsIE1hc29ucnkgKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hc29ucnlEZWZpbml0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLy8gY3JlYXRlIGFuIE91dGxheWVyIGxheW91dCBjbGFzc1xuICB2YXIgTWFzb25yeU1vZGUgPSBMYXlvdXRNb2RlLmNyZWF0ZSgnbWFzb25yeScpO1xuXG4gIHZhciBwcm90byA9IE1hc29ucnlNb2RlLnByb3RvdHlwZTtcblxuICB2YXIga2VlcE1vZGVNZXRob2RzID0ge1xuICAgIF9nZXRFbGVtZW50T2Zmc2V0OiB0cnVlLFxuICAgIGxheW91dDogdHJ1ZSxcbiAgICBfZ2V0TWVhc3VyZW1lbnQ6IHRydWVcbiAgfTtcblxuICAvLyBpbmhlcml0IE1hc29ucnkgcHJvdG90eXBlXG4gIGZvciAoIHZhciBtZXRob2QgaW4gTWFzb25yeS5wcm90b3R5cGUgKSB7XG4gICAgLy8gZG8gbm90IGluaGVyaXQgbW9kZSBtZXRob2RzXG4gICAgaWYgKCAha2VlcE1vZGVNZXRob2RzWyBtZXRob2QgXSApIHtcbiAgICAgIHByb3RvWyBtZXRob2QgXSA9IE1hc29ucnkucHJvdG90eXBlWyBtZXRob2QgXTtcbiAgICB9XG4gIH1cblxuICB2YXIgbWVhc3VyZUNvbHVtbnMgPSBwcm90by5tZWFzdXJlQ29sdW1ucztcbiAgcHJvdG8ubWVhc3VyZUNvbHVtbnMgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBzZXQgaXRlbXMsIHVzZWQgaWYgbWVhc3VyaW5nIGZpcnN0IGl0ZW1cbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pc290b3BlLmZpbHRlcmVkSXRlbXM7XG4gICAgbWVhc3VyZUNvbHVtbnMuY2FsbCggdGhpcyApO1xuICB9O1xuXG4gIC8vIHBvaW50IHRvIG1vZGUgb3B0aW9ucyBmb3IgZml0V2lkdGhcbiAgdmFyIF9nZXRPcHRpb24gPSBwcm90by5fZ2V0T3B0aW9uO1xuICBwcm90by5fZ2V0T3B0aW9uID0gZnVuY3Rpb24oIG9wdGlvbiApIHtcbiAgICBpZiAoIG9wdGlvbiA9PSAnZml0V2lkdGgnICkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0ZpdFdpZHRoICE9PSB1bmRlZmluZWQgP1xuICAgICAgICB0aGlzLm9wdGlvbnMuaXNGaXRXaWR0aCA6IHRoaXMub3B0aW9ucy5maXRXaWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIF9nZXRPcHRpb24uYXBwbHkoIHRoaXMuaXNvdG9wZSwgYXJndW1lbnRzICk7XG4gIH07XG5cbiAgcmV0dXJuIE1hc29ucnlNb2RlO1xuXG59KSk7XG4iLCIvKipcbiAqIHZlcnRpY2FsIGxheW91dCBtb2RlXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICcuLi9sYXlvdXQtbW9kZSdcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCcuLi9sYXlvdXQtbW9kZScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICB3aW5kb3cuSXNvdG9wZS5MYXlvdXRNb2RlXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIExheW91dE1vZGUgKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBWZXJ0aWNhbCA9IExheW91dE1vZGUuY3JlYXRlKCAndmVydGljYWwnLCB7XG4gIGhvcml6b250YWxBbGlnbm1lbnQ6IDBcbn0pO1xuXG52YXIgcHJvdG8gPSBWZXJ0aWNhbC5wcm90b3R5cGU7XG5cbnByb3RvLl9yZXNldExheW91dCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnkgPSAwO1xufTtcblxucHJvdG8uX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCBpdGVtICkge1xuICBpdGVtLmdldFNpemUoKTtcbiAgdmFyIHggPSAoIHRoaXMuaXNvdG9wZS5zaXplLmlubmVyV2lkdGggLSBpdGVtLnNpemUub3V0ZXJXaWR0aCApICpcbiAgICB0aGlzLm9wdGlvbnMuaG9yaXpvbnRhbEFsaWdubWVudDtcbiAgdmFyIHkgPSB0aGlzLnk7XG4gIHRoaXMueSArPSBpdGVtLnNpemUub3V0ZXJIZWlnaHQ7XG4gIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcbn07XG5cbnByb3RvLl9nZXRDb250YWluZXJTaXplID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7IGhlaWdodDogdGhpcy55IH07XG59O1xuXG5yZXR1cm4gVmVydGljYWw7XG5cbn0pKTtcbiIsIi8qIVxuICogTWFzb25yeSB2NC4yLjJcbiAqIENhc2NhZGluZyBncmlkIGxheW91dCBsaWJyYXJ5XG4gKiBodHRwczovL21hc29ucnkuZGVzYW5kcm8uY29tXG4gKiBNSVQgTGljZW5zZVxuICogYnkgRGF2aWQgRGVTYW5kcm9cbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKmdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICAgJ291dGxheWVyL291dGxheWVyJyxcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJ1xuICAgICAgXSxcbiAgICAgIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ291dGxheWVyJyksXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5NYXNvbnJ5ID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdy5PdXRsYXllcixcbiAgICAgIHdpbmRvdy5nZXRTaXplXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIE91dGxheWVyLCBnZXRTaXplICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hc29ucnlEZWZpbml0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLy8gY3JlYXRlIGFuIE91dGxheWVyIGxheW91dCBjbGFzc1xuICB2YXIgTWFzb25yeSA9IE91dGxheWVyLmNyZWF0ZSgnbWFzb25yeScpO1xuICAvLyBpc0ZpdFdpZHRoIC0+IGZpdFdpZHRoXG4gIE1hc29ucnkuY29tcGF0T3B0aW9ucy5maXRXaWR0aCA9ICdpc0ZpdFdpZHRoJztcblxuICB2YXIgcHJvdG8gPSBNYXNvbnJ5LnByb3RvdHlwZTtcblxuICBwcm90by5fcmVzZXRMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdldFNpemUoKTtcbiAgICB0aGlzLl9nZXRNZWFzdXJlbWVudCggJ2NvbHVtbldpZHRoJywgJ291dGVyV2lkdGgnICk7XG4gICAgdGhpcy5fZ2V0TWVhc3VyZW1lbnQoICdndXR0ZXInLCAnb3V0ZXJXaWR0aCcgKTtcbiAgICB0aGlzLm1lYXN1cmVDb2x1bW5zKCk7XG5cbiAgICAvLyByZXNldCBjb2x1bW4gWVxuICAgIHRoaXMuY29sWXMgPSBbXTtcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5jb2xzOyBpKysgKSB7XG4gICAgICB0aGlzLmNvbFlzLnB1c2goIDAgKTtcbiAgICB9XG5cbiAgICB0aGlzLm1heFkgPSAwO1xuICAgIHRoaXMuaG9yaXpvbnRhbENvbEluZGV4ID0gMDtcbiAgfTtcblxuICBwcm90by5tZWFzdXJlQ29sdW1ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0Q29udGFpbmVyV2lkdGgoKTtcbiAgICAvLyBpZiBjb2x1bW5XaWR0aCBpcyAwLCBkZWZhdWx0IHRvIG91dGVyV2lkdGggb2YgZmlyc3QgaXRlbVxuICAgIGlmICggIXRoaXMuY29sdW1uV2lkdGggKSB7XG4gICAgICB2YXIgZmlyc3RJdGVtID0gdGhpcy5pdGVtc1swXTtcbiAgICAgIHZhciBmaXJzdEl0ZW1FbGVtID0gZmlyc3RJdGVtICYmIGZpcnN0SXRlbS5lbGVtZW50O1xuICAgICAgLy8gY29sdW1uV2lkdGggZmFsbCBiYWNrIHRvIGl0ZW0gb2YgZmlyc3QgZWxlbWVudFxuICAgICAgdGhpcy5jb2x1bW5XaWR0aCA9IGZpcnN0SXRlbUVsZW0gJiYgZ2V0U2l6ZSggZmlyc3RJdGVtRWxlbSApLm91dGVyV2lkdGggfHxcbiAgICAgICAgLy8gaWYgZmlyc3QgZWxlbSBoYXMgbm8gd2lkdGgsIGRlZmF1bHQgdG8gc2l6ZSBvZiBjb250YWluZXJcbiAgICAgICAgdGhpcy5jb250YWluZXJXaWR0aDtcbiAgICB9XG5cbiAgICB2YXIgY29sdW1uV2lkdGggPSB0aGlzLmNvbHVtbldpZHRoICs9IHRoaXMuZ3V0dGVyO1xuXG4gICAgLy8gY2FsY3VsYXRlIGNvbHVtbnNcbiAgICB2YXIgY29udGFpbmVyV2lkdGggPSB0aGlzLmNvbnRhaW5lcldpZHRoICsgdGhpcy5ndXR0ZXI7XG4gICAgdmFyIGNvbHMgPSBjb250YWluZXJXaWR0aCAvIGNvbHVtbldpZHRoO1xuICAgIC8vIGZpeCByb3VuZGluZyBlcnJvcnMsIHR5cGljYWxseSB3aXRoIGd1dHRlcnNcbiAgICB2YXIgZXhjZXNzID0gY29sdW1uV2lkdGggLSBjb250YWluZXJXaWR0aCAlIGNvbHVtbldpZHRoO1xuICAgIC8vIGlmIG92ZXJzaG9vdCBpcyBsZXNzIHRoYW4gYSBwaXhlbCwgcm91bmQgdXAsIG90aGVyd2lzZSBmbG9vciBpdFxuICAgIHZhciBtYXRoTWV0aG9kID0gZXhjZXNzICYmIGV4Y2VzcyA8IDEgPyAncm91bmQnIDogJ2Zsb29yJztcbiAgICBjb2xzID0gTWF0aFsgbWF0aE1ldGhvZCBdKCBjb2xzICk7XG4gICAgdGhpcy5jb2xzID0gTWF0aC5tYXgoIGNvbHMsIDEgKTtcbiAgfTtcblxuICBwcm90by5nZXRDb250YWluZXJXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIGNvbnRhaW5lciBpcyBwYXJlbnQgaWYgZml0IHdpZHRoXG4gICAgdmFyIGlzRml0V2lkdGggPSB0aGlzLl9nZXRPcHRpb24oJ2ZpdFdpZHRoJyk7XG4gICAgdmFyIGNvbnRhaW5lciA9IGlzRml0V2lkdGggPyB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSA6IHRoaXMuZWxlbWVudDtcbiAgICAvLyBjaGVjayB0aGF0IHRoaXMuc2l6ZSBhbmQgc2l6ZSBhcmUgdGhlcmVcbiAgICAvLyBJRTggdHJpZ2dlcnMgcmVzaXplIG9uIGJvZHkgc2l6ZSBjaGFuZ2UsIHNvIHRoZXkgbWlnaHQgbm90IGJlXG4gICAgdmFyIHNpemUgPSBnZXRTaXplKCBjb250YWluZXIgKTtcbiAgICB0aGlzLmNvbnRhaW5lcldpZHRoID0gc2l6ZSAmJiBzaXplLmlubmVyV2lkdGg7XG4gIH07XG5cbiAgcHJvdG8uX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0uZ2V0U2l6ZSgpO1xuICAgIC8vIGhvdyBtYW55IGNvbHVtbnMgZG9lcyB0aGlzIGJyaWNrIHNwYW5cbiAgICB2YXIgcmVtYWluZGVyID0gaXRlbS5zaXplLm91dGVyV2lkdGggJSB0aGlzLmNvbHVtbldpZHRoO1xuICAgIHZhciBtYXRoTWV0aG9kID0gcmVtYWluZGVyICYmIHJlbWFpbmRlciA8IDEgPyAncm91bmQnIDogJ2NlaWwnO1xuICAgIC8vIHJvdW5kIGlmIG9mZiBieSAxIHBpeGVsLCBvdGhlcndpc2UgdXNlIGNlaWxcbiAgICB2YXIgY29sU3BhbiA9IE1hdGhbIG1hdGhNZXRob2QgXSggaXRlbS5zaXplLm91dGVyV2lkdGggLyB0aGlzLmNvbHVtbldpZHRoICk7XG4gICAgY29sU3BhbiA9IE1hdGgubWluKCBjb2xTcGFuLCB0aGlzLmNvbHMgKTtcbiAgICAvLyB1c2UgaG9yaXpvbnRhbCBvciB0b3AgY29sdW1uIHBvc2l0aW9uXG4gICAgdmFyIGNvbFBvc01ldGhvZCA9IHRoaXMub3B0aW9ucy5ob3Jpem9udGFsT3JkZXIgP1xuICAgICAgJ19nZXRIb3Jpem9udGFsQ29sUG9zaXRpb24nIDogJ19nZXRUb3BDb2xQb3NpdGlvbic7XG4gICAgdmFyIGNvbFBvc2l0aW9uID0gdGhpc1sgY29sUG9zTWV0aG9kIF0oIGNvbFNwYW4sIGl0ZW0gKTtcbiAgICAvLyBwb3NpdGlvbiB0aGUgYnJpY2tcbiAgICB2YXIgcG9zaXRpb24gPSB7XG4gICAgICB4OiB0aGlzLmNvbHVtbldpZHRoICogY29sUG9zaXRpb24uY29sLFxuICAgICAgeTogY29sUG9zaXRpb24ueVxuICAgIH07XG4gICAgLy8gYXBwbHkgc2V0SGVpZ2h0IHRvIG5lY2Vzc2FyeSBjb2x1bW5zXG4gICAgdmFyIHNldEhlaWdodCA9IGNvbFBvc2l0aW9uLnkgKyBpdGVtLnNpemUub3V0ZXJIZWlnaHQ7XG4gICAgdmFyIHNldE1heCA9IGNvbFNwYW4gKyBjb2xQb3NpdGlvbi5jb2w7XG4gICAgZm9yICggdmFyIGkgPSBjb2xQb3NpdGlvbi5jb2w7IGkgPCBzZXRNYXg7IGkrKyApIHtcbiAgICAgIHRoaXMuY29sWXNbaV0gPSBzZXRIZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9O1xuXG4gIHByb3RvLl9nZXRUb3BDb2xQb3NpdGlvbiA9IGZ1bmN0aW9uKCBjb2xTcGFuICkge1xuICAgIHZhciBjb2xHcm91cCA9IHRoaXMuX2dldFRvcENvbEdyb3VwKCBjb2xTcGFuICk7XG4gICAgLy8gZ2V0IHRoZSBtaW5pbXVtIFkgdmFsdWUgZnJvbSB0aGUgY29sdW1uc1xuICAgIHZhciBtaW5pbXVtWSA9IE1hdGgubWluLmFwcGx5KCBNYXRoLCBjb2xHcm91cCApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbDogY29sR3JvdXAuaW5kZXhPZiggbWluaW11bVkgKSxcbiAgICAgIHk6IG1pbmltdW1ZLFxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2xTcGFuIC0gbnVtYmVyIG9mIGNvbHVtbnMgdGhlIGVsZW1lbnQgc3BhbnNcbiAgICogQHJldHVybnMge0FycmF5fSBjb2xHcm91cFxuICAgKi9cbiAgcHJvdG8uX2dldFRvcENvbEdyb3VwID0gZnVuY3Rpb24oIGNvbFNwYW4gKSB7XG4gICAgaWYgKCBjb2xTcGFuIDwgMiApIHtcbiAgICAgIC8vIGlmIGJyaWNrIHNwYW5zIG9ubHkgb25lIGNvbHVtbiwgdXNlIGFsbCB0aGUgY29sdW1uIFlzXG4gICAgICByZXR1cm4gdGhpcy5jb2xZcztcbiAgICB9XG5cbiAgICB2YXIgY29sR3JvdXAgPSBbXTtcbiAgICAvLyBob3cgbWFueSBkaWZmZXJlbnQgcGxhY2VzIGNvdWxkIHRoaXMgYnJpY2sgZml0IGhvcml6b250YWxseVxuICAgIHZhciBncm91cENvdW50ID0gdGhpcy5jb2xzICsgMSAtIGNvbFNwYW47XG4gICAgLy8gZm9yIGVhY2ggZ3JvdXAgcG90ZW50aWFsIGhvcml6b250YWwgcG9zaXRpb25cbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBncm91cENvdW50OyBpKysgKSB7XG4gICAgICBjb2xHcm91cFtpXSA9IHRoaXMuX2dldENvbEdyb3VwWSggaSwgY29sU3BhbiApO1xuICAgIH1cbiAgICByZXR1cm4gY29sR3JvdXA7XG4gIH07XG5cbiAgcHJvdG8uX2dldENvbEdyb3VwWSA9IGZ1bmN0aW9uKCBjb2wsIGNvbFNwYW4gKSB7XG4gICAgaWYgKCBjb2xTcGFuIDwgMiApIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbFlzWyBjb2wgXTtcbiAgICB9XG4gICAgLy8gbWFrZSBhbiBhcnJheSBvZiBjb2xZIHZhbHVlcyBmb3IgdGhhdCBvbmUgZ3JvdXBcbiAgICB2YXIgZ3JvdXBDb2xZcyA9IHRoaXMuY29sWXMuc2xpY2UoIGNvbCwgY29sICsgY29sU3BhbiApO1xuICAgIC8vIGFuZCBnZXQgdGhlIG1heCB2YWx1ZSBvZiB0aGUgYXJyYXlcbiAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkoIE1hdGgsIGdyb3VwQ29sWXMgKTtcbiAgfTtcblxuICAvLyBnZXQgY29sdW1uIHBvc2l0aW9uIGJhc2VkIG9uIGhvcml6b250YWwgaW5kZXguICM4NzNcbiAgcHJvdG8uX2dldEhvcml6b250YWxDb2xQb3NpdGlvbiA9IGZ1bmN0aW9uKCBjb2xTcGFuLCBpdGVtICkge1xuICAgIHZhciBjb2wgPSB0aGlzLmhvcml6b250YWxDb2xJbmRleCAlIHRoaXMuY29scztcbiAgICB2YXIgaXNPdmVyID0gY29sU3BhbiA+IDEgJiYgY29sICsgY29sU3BhbiA+IHRoaXMuY29scztcbiAgICAvLyBzaGlmdCB0byBuZXh0IHJvdyBpZiBpdGVtIGNhbid0IGZpdCBvbiBjdXJyZW50IHJvd1xuICAgIGNvbCA9IGlzT3ZlciA/IDAgOiBjb2w7XG4gICAgLy8gZG9uJ3QgbGV0IHplcm8tc2l6ZSBpdGVtcyB0YWtlIHVwIHNwYWNlXG4gICAgdmFyIGhhc1NpemUgPSBpdGVtLnNpemUub3V0ZXJXaWR0aCAmJiBpdGVtLnNpemUub3V0ZXJIZWlnaHQ7XG4gICAgdGhpcy5ob3Jpem9udGFsQ29sSW5kZXggPSBoYXNTaXplID8gY29sICsgY29sU3BhbiA6IHRoaXMuaG9yaXpvbnRhbENvbEluZGV4O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbDogY29sLFxuICAgICAgeTogdGhpcy5fZ2V0Q29sR3JvdXBZKCBjb2wsIGNvbFNwYW4gKSxcbiAgICB9O1xuICB9O1xuXG4gIHByb3RvLl9tYW5hZ2VTdGFtcCA9IGZ1bmN0aW9uKCBzdGFtcCApIHtcbiAgICB2YXIgc3RhbXBTaXplID0gZ2V0U2l6ZSggc3RhbXAgKTtcbiAgICB2YXIgb2Zmc2V0ID0gdGhpcy5fZ2V0RWxlbWVudE9mZnNldCggc3RhbXAgKTtcbiAgICAvLyBnZXQgdGhlIGNvbHVtbnMgdGhhdCB0aGlzIHN0YW1wIGFmZmVjdHNcbiAgICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5fZ2V0T3B0aW9uKCdvcmlnaW5MZWZ0Jyk7XG4gICAgdmFyIGZpcnN0WCA9IGlzT3JpZ2luTGVmdCA/IG9mZnNldC5sZWZ0IDogb2Zmc2V0LnJpZ2h0O1xuICAgIHZhciBsYXN0WCA9IGZpcnN0WCArIHN0YW1wU2l6ZS5vdXRlcldpZHRoO1xuICAgIHZhciBmaXJzdENvbCA9IE1hdGguZmxvb3IoIGZpcnN0WCAvIHRoaXMuY29sdW1uV2lkdGggKTtcbiAgICBmaXJzdENvbCA9IE1hdGgubWF4KCAwLCBmaXJzdENvbCApO1xuICAgIHZhciBsYXN0Q29sID0gTWF0aC5mbG9vciggbGFzdFggLyB0aGlzLmNvbHVtbldpZHRoICk7XG4gICAgLy8gbGFzdENvbCBzaG91bGQgbm90IGdvIG92ZXIgaWYgbXVsdGlwbGUgb2YgY29sdW1uV2lkdGggIzQyNVxuICAgIGxhc3RDb2wgLT0gbGFzdFggJSB0aGlzLmNvbHVtbldpZHRoID8gMCA6IDE7XG4gICAgbGFzdENvbCA9IE1hdGgubWluKCB0aGlzLmNvbHMgLSAxLCBsYXN0Q29sICk7XG4gICAgLy8gc2V0IGNvbFlzIHRvIGJvdHRvbSBvZiB0aGUgc3RhbXBcblxuICAgIHZhciBpc09yaWdpblRvcCA9IHRoaXMuX2dldE9wdGlvbignb3JpZ2luVG9wJyk7XG4gICAgdmFyIHN0YW1wTWF4WSA9ICggaXNPcmlnaW5Ub3AgPyBvZmZzZXQudG9wIDogb2Zmc2V0LmJvdHRvbSApICtcbiAgICAgIHN0YW1wU2l6ZS5vdXRlckhlaWdodDtcbiAgICBmb3IgKCB2YXIgaSA9IGZpcnN0Q29sOyBpIDw9IGxhc3RDb2w7IGkrKyApIHtcbiAgICAgIHRoaXMuY29sWXNbaV0gPSBNYXRoLm1heCggc3RhbXBNYXhZLCB0aGlzLmNvbFlzW2ldICk7XG4gICAgfVxuICB9O1xuXG4gIHByb3RvLl9nZXRDb250YWluZXJTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tYXhZID0gTWF0aC5tYXguYXBwbHkoIE1hdGgsIHRoaXMuY29sWXMgKTtcbiAgICB2YXIgc2l6ZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5tYXhZXG4gICAgfTtcblxuICAgIGlmICggdGhpcy5fZ2V0T3B0aW9uKCdmaXRXaWR0aCcpICkge1xuICAgICAgc2l6ZS53aWR0aCA9IHRoaXMuX2dldENvbnRhaW5lckZpdFdpZHRoKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpemU7XG4gIH07XG5cbiAgcHJvdG8uX2dldENvbnRhaW5lckZpdFdpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHVudXNlZENvbHMgPSAwO1xuICAgIC8vIGNvdW50IHVudXNlZCBjb2x1bW5zXG4gICAgdmFyIGkgPSB0aGlzLmNvbHM7XG4gICAgd2hpbGUgKCAtLWkgKSB7XG4gICAgICBpZiAoIHRoaXMuY29sWXNbaV0gIT09IDAgKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdW51c2VkQ29scysrO1xuICAgIH1cbiAgICAvLyBmaXQgY29udGFpbmVyIHRvIGNvbHVtbnMgdGhhdCBoYXZlIGJlZW4gdXNlZFxuICAgIHJldHVybiAoIHRoaXMuY29scyAtIHVudXNlZENvbHMgKSAqIHRoaXMuY29sdW1uV2lkdGggLSB0aGlzLmd1dHRlcjtcbiAgfTtcblxuICBwcm90by5uZWVkc1Jlc2l6ZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcmV2aW91c1dpZHRoID0gdGhpcy5jb250YWluZXJXaWR0aDtcbiAgICB0aGlzLmdldENvbnRhaW5lcldpZHRoKCk7XG4gICAgcmV0dXJuIHByZXZpb3VzV2lkdGggIT0gdGhpcy5jb250YWluZXJXaWR0aDtcbiAgfTtcblxuICByZXR1cm4gTWFzb25yeTtcblxufSkpO1xuIiwiLyoqXG4gKiBPdXRsYXllciBJdGVtXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggW1xuICAgICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJ1xuICAgICAgXSxcbiAgICAgIGZhY3RvcnlcbiAgICApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ2V2LWVtaXR0ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lk91dGxheWVyID0ge307XG4gICAgd2luZG93Lk91dGxheWVyLkl0ZW0gPSBmYWN0b3J5KFxuICAgICAgd2luZG93LkV2RW1pdHRlcixcbiAgICAgIHdpbmRvdy5nZXRTaXplXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIEV2RW1pdHRlciwgZ2V0U2l6ZSApIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0gaGVscGVycyAtLS0tLSAvL1xuXG5mdW5jdGlvbiBpc0VtcHR5T2JqKCBvYmogKSB7XG4gIGZvciAoIHZhciBwcm9wIGluIG9iaiApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcHJvcCA9IG51bGw7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDU1MzIHN1cHBvcnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG52YXIgdHJhbnNpdGlvblByb3BlcnR5ID0gdHlwZW9mIGRvY0VsZW1TdHlsZS50cmFuc2l0aW9uID09ICdzdHJpbmcnID9cbiAgJ3RyYW5zaXRpb24nIDogJ1dlYmtpdFRyYW5zaXRpb24nO1xudmFyIHRyYW5zZm9ybVByb3BlcnR5ID0gdHlwZW9mIGRvY0VsZW1TdHlsZS50cmFuc2Zvcm0gPT0gJ3N0cmluZycgP1xuICAndHJhbnNmb3JtJyA6ICdXZWJraXRUcmFuc2Zvcm0nO1xuXG52YXIgdHJhbnNpdGlvbkVuZEV2ZW50ID0ge1xuICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJ1xufVsgdHJhbnNpdGlvblByb3BlcnR5IF07XG5cbi8vIGNhY2hlIGFsbCB2ZW5kb3IgcHJvcGVydGllcyB0aGF0IGNvdWxkIGhhdmUgdmVuZG9yIHByZWZpeFxudmFyIHZlbmRvclByb3BlcnRpZXMgPSB7XG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtUHJvcGVydHksXG4gIHRyYW5zaXRpb246IHRyYW5zaXRpb25Qcm9wZXJ0eSxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uUHJvcGVydHkgKyAnRHVyYXRpb24nLFxuICB0cmFuc2l0aW9uUHJvcGVydHk6IHRyYW5zaXRpb25Qcm9wZXJ0eSArICdQcm9wZXJ0eScsXG4gIHRyYW5zaXRpb25EZWxheTogdHJhbnNpdGlvblByb3BlcnR5ICsgJ0RlbGF5J1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSXRlbSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBJdGVtKCBlbGVtZW50LCBsYXlvdXQgKSB7XG4gIGlmICggIWVsZW1lbnQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgLy8gcGFyZW50IGxheW91dCBjbGFzcywgaS5lLiBNYXNvbnJ5LCBJc290b3BlLCBvciBQYWNrZXJ5XG4gIHRoaXMubGF5b3V0ID0gbGF5b3V0O1xuICB0aGlzLnBvc2l0aW9uID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIHRoaXMuX2NyZWF0ZSgpO1xufVxuXG4vLyBpbmhlcml0IEV2RW1pdHRlclxudmFyIHByb3RvID0gSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5wcm90by5jb25zdHJ1Y3RvciA9IEl0ZW07XG5cbnByb3RvLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gdHJhbnNpdGlvbiBvYmplY3RzXG4gIHRoaXMuX3RyYW5zbiA9IHtcbiAgICBpbmdQcm9wZXJ0aWVzOiB7fSxcbiAgICBjbGVhbjoge30sXG4gICAgb25FbmQ6IHt9XG4gIH07XG5cbiAgdGhpcy5jc3Moe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gIH0pO1xufTtcblxuLy8gdHJpZ2dlciBzcGVjaWZpZWQgaGFuZGxlciBmb3IgZXZlbnQgdHlwZVxucHJvdG8uaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxucHJvdG8uZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbn07XG5cbi8qKlxuICogYXBwbHkgQ1NTIHN0eWxlcyB0byBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGVcbiAqL1xucHJvdG8uY3NzID0gZnVuY3Rpb24oIHN0eWxlICkge1xuICB2YXIgZWxlbVN0eWxlID0gdGhpcy5lbGVtZW50LnN0eWxlO1xuXG4gIGZvciAoIHZhciBwcm9wIGluIHN0eWxlICkge1xuICAgIC8vIHVzZSB2ZW5kb3IgcHJvcGVydHkgaWYgYXZhaWxhYmxlXG4gICAgdmFyIHN1cHBvcnRlZFByb3AgPSB2ZW5kb3JQcm9wZXJ0aWVzWyBwcm9wIF0gfHwgcHJvcDtcbiAgICBlbGVtU3R5bGVbIHN1cHBvcnRlZFByb3AgXSA9IHN0eWxlWyBwcm9wIF07XG4gIH1cbn07XG5cbiAvLyBtZWFzdXJlIHBvc2l0aW9uLCBhbmQgc2V0cyBpdFxucHJvdG8uZ2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSggdGhpcy5lbGVtZW50ICk7XG4gIHZhciBpc09yaWdpbkxlZnQgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5MZWZ0Jyk7XG4gIHZhciBpc09yaWdpblRvcCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpblRvcCcpO1xuICB2YXIgeFZhbHVlID0gc3R5bGVbIGlzT3JpZ2luTGVmdCA/ICdsZWZ0JyA6ICdyaWdodCcgXTtcbiAgdmFyIHlWYWx1ZSA9IHN0eWxlWyBpc09yaWdpblRvcCA/ICd0b3AnIDogJ2JvdHRvbScgXTtcbiAgdmFyIHggPSBwYXJzZUZsb2F0KCB4VmFsdWUgKTtcbiAgdmFyIHkgPSBwYXJzZUZsb2F0KCB5VmFsdWUgKTtcbiAgLy8gY29udmVydCBwZXJjZW50IHRvIHBpeGVsc1xuICB2YXIgbGF5b3V0U2l6ZSA9IHRoaXMubGF5b3V0LnNpemU7XG4gIGlmICggeFZhbHVlLmluZGV4T2YoJyUnKSAhPSAtMSApIHtcbiAgICB4ID0gKCB4IC8gMTAwICkgKiBsYXlvdXRTaXplLndpZHRoO1xuICB9XG4gIGlmICggeVZhbHVlLmluZGV4T2YoJyUnKSAhPSAtMSApIHtcbiAgICB5ID0gKCB5IC8gMTAwICkgKiBsYXlvdXRTaXplLmhlaWdodDtcbiAgfVxuICAvLyBjbGVhbiB1cCAnYXV0bycgb3Igb3RoZXIgbm9uLWludGVnZXIgdmFsdWVzXG4gIHggPSBpc05hTiggeCApID8gMCA6IHg7XG4gIHkgPSBpc05hTiggeSApID8gMCA6IHk7XG4gIC8vIHJlbW92ZSBwYWRkaW5nIGZyb20gbWVhc3VyZW1lbnRcbiAgeCAtPSBpc09yaWdpbkxlZnQgPyBsYXlvdXRTaXplLnBhZGRpbmdMZWZ0IDogbGF5b3V0U2l6ZS5wYWRkaW5nUmlnaHQ7XG4gIHkgLT0gaXNPcmlnaW5Ub3AgPyBsYXlvdXRTaXplLnBhZGRpbmdUb3AgOiBsYXlvdXRTaXplLnBhZGRpbmdCb3R0b207XG5cbiAgdGhpcy5wb3NpdGlvbi54ID0geDtcbiAgdGhpcy5wb3NpdGlvbi55ID0geTtcbn07XG5cbi8vIHNldCBzZXR0bGVkIHBvc2l0aW9uLCBhcHBseSBwYWRkaW5nXG5wcm90by5sYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbGF5b3V0U2l6ZSA9IHRoaXMubGF5b3V0LnNpemU7XG4gIHZhciBzdHlsZSA9IHt9O1xuICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luTGVmdCcpO1xuICB2YXIgaXNPcmlnaW5Ub3AgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5Ub3AnKTtcblxuICAvLyB4XG4gIHZhciB4UGFkZGluZyA9IGlzT3JpZ2luTGVmdCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcbiAgdmFyIHhQcm9wZXJ0eSA9IGlzT3JpZ2luTGVmdCA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gIHZhciB4UmVzZXRQcm9wZXJ0eSA9IGlzT3JpZ2luTGVmdCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cbiAgdmFyIHggPSB0aGlzLnBvc2l0aW9uLnggKyBsYXlvdXRTaXplWyB4UGFkZGluZyBdO1xuICAvLyBzZXQgaW4gcGVyY2VudGFnZSBvciBwaXhlbHNcbiAgc3R5bGVbIHhQcm9wZXJ0eSBdID0gdGhpcy5nZXRYVmFsdWUoIHggKTtcbiAgLy8gcmVzZXQgb3RoZXIgcHJvcGVydHlcbiAgc3R5bGVbIHhSZXNldFByb3BlcnR5IF0gPSAnJztcblxuICAvLyB5XG4gIHZhciB5UGFkZGluZyA9IGlzT3JpZ2luVG9wID8gJ3BhZGRpbmdUb3AnIDogJ3BhZGRpbmdCb3R0b20nO1xuICB2YXIgeVByb3BlcnR5ID0gaXNPcmlnaW5Ub3AgPyAndG9wJyA6ICdib3R0b20nO1xuICB2YXIgeVJlc2V0UHJvcGVydHkgPSBpc09yaWdpblRvcCA/ICdib3R0b20nIDogJ3RvcCc7XG5cbiAgdmFyIHkgPSB0aGlzLnBvc2l0aW9uLnkgKyBsYXlvdXRTaXplWyB5UGFkZGluZyBdO1xuICAvLyBzZXQgaW4gcGVyY2VudGFnZSBvciBwaXhlbHNcbiAgc3R5bGVbIHlQcm9wZXJ0eSBdID0gdGhpcy5nZXRZVmFsdWUoIHkgKTtcbiAgLy8gcmVzZXQgb3RoZXIgcHJvcGVydHlcbiAgc3R5bGVbIHlSZXNldFByb3BlcnR5IF0gPSAnJztcblxuICB0aGlzLmNzcyggc3R5bGUgKTtcbiAgdGhpcy5lbWl0RXZlbnQoICdsYXlvdXQnLCBbIHRoaXMgXSApO1xufTtcblxucHJvdG8uZ2V0WFZhbHVlID0gZnVuY3Rpb24oIHggKSB7XG4gIHZhciBpc0hvcml6b250YWwgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdob3Jpem9udGFsJyk7XG4gIHJldHVybiB0aGlzLmxheW91dC5vcHRpb25zLnBlcmNlbnRQb3NpdGlvbiAmJiAhaXNIb3Jpem9udGFsID9cbiAgICAoICggeCAvIHRoaXMubGF5b3V0LnNpemUud2lkdGggKSAqIDEwMCApICsgJyUnIDogeCArICdweCc7XG59O1xuXG5wcm90by5nZXRZVmFsdWUgPSBmdW5jdGlvbiggeSApIHtcbiAgdmFyIGlzSG9yaXpvbnRhbCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ2hvcml6b250YWwnKTtcbiAgcmV0dXJuIHRoaXMubGF5b3V0Lm9wdGlvbnMucGVyY2VudFBvc2l0aW9uICYmIGlzSG9yaXpvbnRhbCA/XG4gICAgKCAoIHkgLyB0aGlzLmxheW91dC5zaXplLmhlaWdodCApICogMTAwICkgKyAnJScgOiB5ICsgJ3B4Jztcbn07XG5cbnByb3RvLl90cmFuc2l0aW9uVG8gPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgdGhpcy5nZXRQb3NpdGlvbigpO1xuICAvLyBnZXQgY3VycmVudCB4ICYgeSBmcm9tIHRvcC9sZWZ0XG4gIHZhciBjdXJYID0gdGhpcy5wb3NpdGlvbi54O1xuICB2YXIgY3VyWSA9IHRoaXMucG9zaXRpb24ueTtcblxuICB2YXIgZGlkTm90TW92ZSA9IHggPT0gdGhpcy5wb3NpdGlvbi54ICYmIHkgPT0gdGhpcy5wb3NpdGlvbi55O1xuXG4gIC8vIHNhdmUgZW5kIHBvc2l0aW9uXG4gIHRoaXMuc2V0UG9zaXRpb24oIHgsIHkgKTtcblxuICAvLyBpZiBkaWQgbm90IG1vdmUgYW5kIG5vdCB0cmFuc2l0aW9uaW5nLCBqdXN0IGdvIHRvIGxheW91dFxuICBpZiAoIGRpZE5vdE1vdmUgJiYgIXRoaXMuaXNUcmFuc2l0aW9uaW5nICkge1xuICAgIHRoaXMubGF5b3V0UG9zaXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdHJhbnNYID0geCAtIGN1clg7XG4gIHZhciB0cmFuc1kgPSB5IC0gY3VyWTtcbiAgdmFyIHRyYW5zaXRpb25TdHlsZSA9IHt9O1xuICB0cmFuc2l0aW9uU3R5bGUudHJhbnNmb3JtID0gdGhpcy5nZXRUcmFuc2xhdGUoIHRyYW5zWCwgdHJhbnNZICk7XG5cbiAgdGhpcy50cmFuc2l0aW9uKHtcbiAgICB0bzogdHJhbnNpdGlvblN0eWxlLFxuICAgIG9uVHJhbnNpdGlvbkVuZDoge1xuICAgICAgdHJhbnNmb3JtOiB0aGlzLmxheW91dFBvc2l0aW9uXG4gICAgfSxcbiAgICBpc0NsZWFuaW5nOiB0cnVlXG4gIH0pO1xufTtcblxucHJvdG8uZ2V0VHJhbnNsYXRlID0gZnVuY3Rpb24oIHgsIHkgKSB7XG4gIC8vIGZsaXAgY29vcmlkaW5hdGVzIGlmIG9yaWdpbiBvbiByaWdodCBvciBib3R0b21cbiAgdmFyIGlzT3JpZ2luTGVmdCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpbkxlZnQnKTtcbiAgdmFyIGlzT3JpZ2luVG9wID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luVG9wJyk7XG4gIHggPSBpc09yaWdpbkxlZnQgPyB4IDogLXg7XG4gIHkgPSBpc09yaWdpblRvcCA/IHkgOiAteTtcbiAgcmV0dXJuICd0cmFuc2xhdGUzZCgnICsgeCArICdweCwgJyArIHkgKyAncHgsIDApJztcbn07XG5cbi8vIG5vbiB0cmFuc2l0aW9uICsgdHJhbnNmb3JtIHN1cHBvcnRcbnByb3RvLmdvVG8gPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgdGhpcy5zZXRQb3NpdGlvbiggeCwgeSApO1xuICB0aGlzLmxheW91dFBvc2l0aW9uKCk7XG59O1xuXG5wcm90by5tb3ZlVG8gPSBwcm90by5fdHJhbnNpdGlvblRvO1xuXG5wcm90by5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICB0aGlzLnBvc2l0aW9uLnggPSBwYXJzZUZsb2F0KCB4ICk7XG4gIHRoaXMucG9zaXRpb24ueSA9IHBhcnNlRmxvYXQoIHkgKTtcbn07XG5cbi8vIC0tLS0tIHRyYW5zaXRpb24gLS0tLS0gLy9cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGUgLSBDU1NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uVHJhbnNpdGlvbkVuZFxuICovXG5cbi8vIG5vbiB0cmFuc2l0aW9uLCBqdXN0IHRyaWdnZXIgY2FsbGJhY2tcbnByb3RvLl9ub25UcmFuc2l0aW9uID0gZnVuY3Rpb24oIGFyZ3MgKSB7XG4gIHRoaXMuY3NzKCBhcmdzLnRvICk7XG4gIGlmICggYXJncy5pc0NsZWFuaW5nICkge1xuICAgIHRoaXMuX3JlbW92ZVN0eWxlcyggYXJncy50byApO1xuICB9XG4gIGZvciAoIHZhciBwcm9wIGluIGFyZ3Mub25UcmFuc2l0aW9uRW5kICkge1xuICAgIGFyZ3Mub25UcmFuc2l0aW9uRW5kWyBwcm9wIF0uY2FsbCggdGhpcyApO1xuICB9XG59O1xuXG4vKipcbiAqIHByb3BlciB0cmFuc2l0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gYXJncyAtIGFyZ3VtZW50c1xuICogICBAcGFyYW0ge09iamVjdH0gdG8gLSBzdHlsZSB0byB0cmFuc2l0aW9uIHRvXG4gKiAgIEBwYXJhbSB7T2JqZWN0fSBmcm9tIC0gc3R5bGUgdG8gc3RhcnQgdHJhbnNpdGlvbiBmcm9tXG4gKiAgIEBwYXJhbSB7Qm9vbGVhbn0gaXNDbGVhbmluZyAtIHJlbW92ZXMgdHJhbnNpdGlvbiBzdHlsZXMgYWZ0ZXIgdHJhbnNpdGlvblxuICogICBAcGFyYW0ge0Z1bmN0aW9ufSBvblRyYW5zaXRpb25FbmQgLSBjYWxsYmFja1xuICovXG5wcm90by50cmFuc2l0aW9uID0gZnVuY3Rpb24oIGFyZ3MgKSB7XG4gIC8vIHJlZGlyZWN0IHRvIG5vblRyYW5zaXRpb24gaWYgbm8gdHJhbnNpdGlvbiBkdXJhdGlvblxuICBpZiAoICFwYXJzZUZsb2F0KCB0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbiApICkge1xuICAgIHRoaXMuX25vblRyYW5zaXRpb24oIGFyZ3MgKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX3RyYW5zaXRpb24gPSB0aGlzLl90cmFuc247XG4gIC8vIGtlZXAgdHJhY2sgb2Ygb25UcmFuc2l0aW9uRW5kIGNhbGxiYWNrIGJ5IGNzcyBwcm9wZXJ0eVxuICBmb3IgKCB2YXIgcHJvcCBpbiBhcmdzLm9uVHJhbnNpdGlvbkVuZCApIHtcbiAgICBfdHJhbnNpdGlvbi5vbkVuZFsgcHJvcCBdID0gYXJncy5vblRyYW5zaXRpb25FbmRbIHByb3AgXTtcbiAgfVxuICAvLyBrZWVwIHRyYWNrIG9mIHByb3BlcnRpZXMgdGhhdCBhcmUgdHJhbnNpdGlvbmluZ1xuICBmb3IgKCBwcm9wIGluIGFyZ3MudG8gKSB7XG4gICAgX3RyYW5zaXRpb24uaW5nUHJvcGVydGllc1sgcHJvcCBdID0gdHJ1ZTtcbiAgICAvLyBrZWVwIHRyYWNrIG9mIHByb3BlcnRpZXMgdG8gY2xlYW4gdXAgd2hlbiB0cmFuc2l0aW9uIGlzIGRvbmVcbiAgICBpZiAoIGFyZ3MuaXNDbGVhbmluZyApIHtcbiAgICAgIF90cmFuc2l0aW9uLmNsZWFuWyBwcm9wIF0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNldCBmcm9tIHN0eWxlc1xuICBpZiAoIGFyZ3MuZnJvbSApIHtcbiAgICB0aGlzLmNzcyggYXJncy5mcm9tICk7XG4gICAgLy8gZm9yY2UgcmVkcmF3LiBodHRwOi8vYmxvZy5hbGV4bWFjY2F3LmNvbS9jc3MtdHJhbnNpdGlvbnNcbiAgICB2YXIgaCA9IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgLy8gaGFjayBmb3IgSlNIaW50IHRvIGh1c2ggYWJvdXQgdW51c2VkIHZhclxuICAgIGggPSBudWxsO1xuICB9XG4gIC8vIGVuYWJsZSB0cmFuc2l0aW9uXG4gIHRoaXMuZW5hYmxlVHJhbnNpdGlvbiggYXJncy50byApO1xuICAvLyBzZXQgc3R5bGVzIHRoYXQgYXJlIHRyYW5zaXRpb25pbmdcbiAgdGhpcy5jc3MoIGFyZ3MudG8gKTtcblxuICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IHRydWU7XG5cbn07XG5cbi8vIGRhc2ggYmVmb3JlIGFsbCBjYXAgbGV0dGVycywgaW5jbHVkaW5nIGZpcnN0IGZvclxuLy8gV2Via2l0VHJhbnNmb3JtID0+IC13ZWJraXQtdHJhbnNmb3JtXG5mdW5jdGlvbiB0b0Rhc2hlZEFsbCggc3RyICkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC8oW0EtWl0pL2csIGZ1bmN0aW9uKCAkMSApIHtcbiAgICByZXR1cm4gJy0nICsgJDEudG9Mb3dlckNhc2UoKTtcbiAgfSk7XG59XG5cbnZhciB0cmFuc2l0aW9uUHJvcHMgPSAnb3BhY2l0eSwnICsgdG9EYXNoZWRBbGwoIHRyYW5zZm9ybVByb3BlcnR5ICk7XG5cbnByb3RvLmVuYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbigvKiBzdHlsZSAqLykge1xuICAvLyBIQUNLIGNoYW5naW5nIHRyYW5zaXRpb25Qcm9wZXJ0eSBkdXJpbmcgYSB0cmFuc2l0aW9uXG4gIC8vIHdpbGwgY2F1c2UgdHJhbnNpdGlvbiB0byBqdW1wXG4gIGlmICggdGhpcy5pc1RyYW5zaXRpb25pbmcgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gbWFrZSBgdHJhbnNpdGlvbjogZm9vLCBiYXIsIGJhemAgZnJvbSBzdHlsZSBvYmplY3RcbiAgLy8gSEFDSyB1bi1jb21tZW50IHRoaXMgd2hlbiBlbmFibGVUcmFuc2l0aW9uIGNhbiB3b3JrXG4gIC8vIHdoaWxlIGEgdHJhbnNpdGlvbiBpcyBoYXBwZW5pbmdcbiAgLy8gdmFyIHRyYW5zaXRpb25WYWx1ZXMgPSBbXTtcbiAgLy8gZm9yICggdmFyIHByb3AgaW4gc3R5bGUgKSB7XG4gIC8vICAgLy8gZGFzaC1pZnkgY2FtZWxDYXNlZCBwcm9wZXJ0aWVzIGxpa2UgV2Via2l0VHJhbnNpdGlvblxuICAvLyAgIHByb3AgPSB2ZW5kb3JQcm9wZXJ0aWVzWyBwcm9wIF0gfHwgcHJvcDtcbiAgLy8gICB0cmFuc2l0aW9uVmFsdWVzLnB1c2goIHRvRGFzaGVkQWxsKCBwcm9wICkgKTtcbiAgLy8gfVxuICAvLyBtdW5nZSBudW1iZXIgdG8gbWlsbGlzZWNvbmQsIHRvIG1hdGNoIHN0YWdnZXJcbiAgdmFyIGR1cmF0aW9uID0gdGhpcy5sYXlvdXQub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb247XG4gIGR1cmF0aW9uID0gdHlwZW9mIGR1cmF0aW9uID09ICdudW1iZXInID8gZHVyYXRpb24gKyAnbXMnIDogZHVyYXRpb247XG4gIC8vIGVuYWJsZSB0cmFuc2l0aW9uIHN0eWxlc1xuICB0aGlzLmNzcyh7XG4gICAgdHJhbnNpdGlvblByb3BlcnR5OiB0cmFuc2l0aW9uUHJvcHMsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICB0cmFuc2l0aW9uRGVsYXk6IHRoaXMuc3RhZ2dlckRlbGF5IHx8IDBcbiAgfSk7XG4gIC8vIGxpc3RlbiBmb3IgdHJhbnNpdGlvbiBlbmQgZXZlbnRcbiAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoIHRyYW5zaXRpb25FbmRFdmVudCwgdGhpcywgZmFsc2UgKTtcbn07XG5cbi8vIC0tLS0tIGV2ZW50cyAtLS0tLSAvL1xuXG5wcm90by5vbndlYmtpdFRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMub250cmFuc2l0aW9uZW5kKCBldmVudCApO1xufTtcblxucHJvdG8ub25vdHJhbnNpdGlvbmVuZCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdGhpcy5vbnRyYW5zaXRpb25lbmQoIGV2ZW50ICk7XG59O1xuXG4vLyBwcm9wZXJ0aWVzIHRoYXQgSSBtdW5nZSB0byBtYWtlIG15IGxpZmUgZWFzaWVyXG52YXIgZGFzaGVkVmVuZG9yUHJvcGVydGllcyA9IHtcbiAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zZm9ybSdcbn07XG5cbnByb3RvLm9udHJhbnNpdGlvbmVuZCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgLy8gZGlzcmVnYXJkIGJ1YmJsZWQgZXZlbnRzIGZyb20gY2hpbGRyZW5cbiAgaWYgKCBldmVudC50YXJnZXQgIT09IHRoaXMuZWxlbWVudCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIF90cmFuc2l0aW9uID0gdGhpcy5fdHJhbnNuO1xuICAvLyBnZXQgcHJvcGVydHkgbmFtZSBvZiB0cmFuc2l0aW9uZWQgcHJvcGVydHksIGNvbnZlcnQgdG8gcHJlZml4LWZyZWVcbiAgdmFyIHByb3BlcnR5TmFtZSA9IGRhc2hlZFZlbmRvclByb3BlcnRpZXNbIGV2ZW50LnByb3BlcnR5TmFtZSBdIHx8IGV2ZW50LnByb3BlcnR5TmFtZTtcblxuICAvLyByZW1vdmUgcHJvcGVydHkgdGhhdCBoYXMgY29tcGxldGVkIHRyYW5zaXRpb25pbmdcbiAgZGVsZXRlIF90cmFuc2l0aW9uLmluZ1Byb3BlcnRpZXNbIHByb3BlcnR5TmFtZSBdO1xuICAvLyBjaGVjayBpZiBhbnkgcHJvcGVydGllcyBhcmUgc3RpbGwgdHJhbnNpdGlvbmluZ1xuICBpZiAoIGlzRW1wdHlPYmooIF90cmFuc2l0aW9uLmluZ1Byb3BlcnRpZXMgKSApIHtcbiAgICAvLyBhbGwgcHJvcGVydGllcyBoYXZlIGNvbXBsZXRlZCB0cmFuc2l0aW9uaW5nXG4gICAgdGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO1xuICB9XG4gIC8vIGNsZWFuIHN0eWxlXG4gIGlmICggcHJvcGVydHlOYW1lIGluIF90cmFuc2l0aW9uLmNsZWFuICkge1xuICAgIC8vIGNsZWFuIHVwIHN0eWxlXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlWyBldmVudC5wcm9wZXJ0eU5hbWUgXSA9ICcnO1xuICAgIGRlbGV0ZSBfdHJhbnNpdGlvbi5jbGVhblsgcHJvcGVydHlOYW1lIF07XG4gIH1cbiAgLy8gdHJpZ2dlciBvblRyYW5zaXRpb25FbmQgY2FsbGJhY2tcbiAgaWYgKCBwcm9wZXJ0eU5hbWUgaW4gX3RyYW5zaXRpb24ub25FbmQgKSB7XG4gICAgdmFyIG9uVHJhbnNpdGlvbkVuZCA9IF90cmFuc2l0aW9uLm9uRW5kWyBwcm9wZXJ0eU5hbWUgXTtcbiAgICBvblRyYW5zaXRpb25FbmQuY2FsbCggdGhpcyApO1xuICAgIGRlbGV0ZSBfdHJhbnNpdGlvbi5vbkVuZFsgcHJvcGVydHlOYW1lIF07XG4gIH1cblxuICB0aGlzLmVtaXRFdmVudCggJ3RyYW5zaXRpb25FbmQnLCBbIHRoaXMgXSApO1xufTtcblxucHJvdG8uZGlzYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yZW1vdmVUcmFuc2l0aW9uU3R5bGVzKCk7XG4gIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCB0cmFuc2l0aW9uRW5kRXZlbnQsIHRoaXMsIGZhbHNlICk7XG4gIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG59O1xuXG4vKipcbiAqIHJlbW92ZXMgc3R5bGUgcHJvcGVydHkgZnJvbSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGVcbioqL1xucHJvdG8uX3JlbW92ZVN0eWxlcyA9IGZ1bmN0aW9uKCBzdHlsZSApIHtcbiAgLy8gY2xlYW4gdXAgdHJhbnNpdGlvbiBzdHlsZXNcbiAgdmFyIGNsZWFuU3R5bGUgPSB7fTtcbiAgZm9yICggdmFyIHByb3AgaW4gc3R5bGUgKSB7XG4gICAgY2xlYW5TdHlsZVsgcHJvcCBdID0gJyc7XG4gIH1cbiAgdGhpcy5jc3MoIGNsZWFuU3R5bGUgKTtcbn07XG5cbnZhciBjbGVhblRyYW5zaXRpb25TdHlsZSA9IHtcbiAgdHJhbnNpdGlvblByb3BlcnR5OiAnJyxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnJyxcbiAgdHJhbnNpdGlvbkRlbGF5OiAnJ1xufTtcblxucHJvdG8ucmVtb3ZlVHJhbnNpdGlvblN0eWxlcyA9IGZ1bmN0aW9uKCkge1xuICAvLyByZW1vdmUgdHJhbnNpdGlvblxuICB0aGlzLmNzcyggY2xlYW5UcmFuc2l0aW9uU3R5bGUgKTtcbn07XG5cbi8vIC0tLS0tIHN0YWdnZXIgLS0tLS0gLy9cblxucHJvdG8uc3RhZ2dlciA9IGZ1bmN0aW9uKCBkZWxheSApIHtcbiAgZGVsYXkgPSBpc05hTiggZGVsYXkgKSA/IDAgOiBkZWxheTtcbiAgdGhpcy5zdGFnZ2VyRGVsYXkgPSBkZWxheSArICdtcyc7XG59O1xuXG4vLyAtLS0tLSBzaG93L2hpZGUvcmVtb3ZlIC0tLS0tIC8vXG5cbi8vIHJlbW92ZSBlbGVtZW50IGZyb20gRE9NXG5wcm90by5yZW1vdmVFbGVtID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCB0aGlzLmVsZW1lbnQgKTtcbiAgLy8gcmVtb3ZlIGRpc3BsYXk6IG5vbmVcbiAgdGhpcy5jc3MoeyBkaXNwbGF5OiAnJyB9KTtcbiAgdGhpcy5lbWl0RXZlbnQoICdyZW1vdmUnLCBbIHRoaXMgXSApO1xufTtcblxucHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGp1c3QgcmVtb3ZlIGVsZW1lbnQgaWYgbm8gdHJhbnNpdGlvbiBzdXBwb3J0IG9yIG5vIHRyYW5zaXRpb25cbiAgaWYgKCAhdHJhbnNpdGlvblByb3BlcnR5IHx8ICFwYXJzZUZsb2F0KCB0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbiApICkge1xuICAgIHRoaXMucmVtb3ZlRWxlbSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHN0YXJ0IHRyYW5zaXRpb25cbiAgdGhpcy5vbmNlKCAndHJhbnNpdGlvbkVuZCcsIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlRWxlbSgpO1xuICB9KTtcbiAgdGhpcy5oaWRlKCk7XG59O1xuXG5wcm90by5yZXZlYWwgPSBmdW5jdGlvbigpIHtcbiAgZGVsZXRlIHRoaXMuaXNIaWRkZW47XG4gIC8vIHJlbW92ZSBkaXNwbGF5OiBub25lXG4gIHRoaXMuY3NzKHsgZGlzcGxheTogJycgfSk7XG5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLmxheW91dC5vcHRpb25zO1xuXG4gIHZhciBvblRyYW5zaXRpb25FbmQgPSB7fTtcbiAgdmFyIHRyYW5zaXRpb25FbmRQcm9wZXJ0eSA9IHRoaXMuZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eSgndmlzaWJsZVN0eWxlJyk7XG4gIG9uVHJhbnNpdGlvbkVuZFsgdHJhbnNpdGlvbkVuZFByb3BlcnR5IF0gPSB0aGlzLm9uUmV2ZWFsVHJhbnNpdGlvbkVuZDtcblxuICB0aGlzLnRyYW5zaXRpb24oe1xuICAgIGZyb206IG9wdGlvbnMuaGlkZGVuU3R5bGUsXG4gICAgdG86IG9wdGlvbnMudmlzaWJsZVN0eWxlLFxuICAgIGlzQ2xlYW5pbmc6IHRydWUsXG4gICAgb25UcmFuc2l0aW9uRW5kOiBvblRyYW5zaXRpb25FbmRcbiAgfSk7XG59O1xuXG5wcm90by5vblJldmVhbFRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2hlY2sgaWYgc3RpbGwgdmlzaWJsZVxuICAvLyBkdXJpbmcgdHJhbnNpdGlvbiwgaXRlbSBtYXkgaGF2ZSBiZWVuIGhpZGRlblxuICBpZiAoICF0aGlzLmlzSGlkZGVuICkge1xuICAgIHRoaXMuZW1pdEV2ZW50KCdyZXZlYWwnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBnZXQgc3R5bGUgcHJvcGVydHkgdXNlIGZvciBoaWRlL3JldmVhbCB0cmFuc2l0aW9uIGVuZFxuICogQHBhcmFtIHtTdHJpbmd9IHN0eWxlUHJvcGVydHkgLSBoaWRkZW5TdHlsZS92aXNpYmxlU3R5bGVcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbnByb3RvLmdldEhpZGVSZXZlYWxUcmFuc2l0aW9uRW5kUHJvcGVydHkgPSBmdW5jdGlvbiggc3R5bGVQcm9wZXJ0eSApIHtcbiAgdmFyIG9wdGlvblN0eWxlID0gdGhpcy5sYXlvdXQub3B0aW9uc1sgc3R5bGVQcm9wZXJ0eSBdO1xuICAvLyB1c2Ugb3BhY2l0eVxuICBpZiAoIG9wdGlvblN0eWxlLm9wYWNpdHkgKSB7XG4gICAgcmV0dXJuICdvcGFjaXR5JztcbiAgfVxuICAvLyBnZXQgZmlyc3QgcHJvcGVydHlcbiAgZm9yICggdmFyIHByb3AgaW4gb3B0aW9uU3R5bGUgKSB7XG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbnByb3RvLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gc2V0IGZsYWdcbiAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gIC8vIHJlbW92ZSBkaXNwbGF5OiBub25lXG4gIHRoaXMuY3NzKHsgZGlzcGxheTogJycgfSk7XG5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLmxheW91dC5vcHRpb25zO1xuXG4gIHZhciBvblRyYW5zaXRpb25FbmQgPSB7fTtcbiAgdmFyIHRyYW5zaXRpb25FbmRQcm9wZXJ0eSA9IHRoaXMuZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eSgnaGlkZGVuU3R5bGUnKTtcbiAgb25UcmFuc2l0aW9uRW5kWyB0cmFuc2l0aW9uRW5kUHJvcGVydHkgXSA9IHRoaXMub25IaWRlVHJhbnNpdGlvbkVuZDtcblxuICB0aGlzLnRyYW5zaXRpb24oe1xuICAgIGZyb206IG9wdGlvbnMudmlzaWJsZVN0eWxlLFxuICAgIHRvOiBvcHRpb25zLmhpZGRlblN0eWxlLFxuICAgIC8vIGtlZXAgaGlkZGVuIHN0dWZmIGhpZGRlblxuICAgIGlzQ2xlYW5pbmc6IHRydWUsXG4gICAgb25UcmFuc2l0aW9uRW5kOiBvblRyYW5zaXRpb25FbmRcbiAgfSk7XG59O1xuXG5wcm90by5vbkhpZGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNoZWNrIGlmIHN0aWxsIGhpZGRlblxuICAvLyBkdXJpbmcgdHJhbnNpdGlvbiwgaXRlbSBtYXkgaGF2ZSBiZWVuIHVuLWhpZGRlblxuICBpZiAoIHRoaXMuaXNIaWRkZW4gKSB7XG4gICAgdGhpcy5jc3MoeyBkaXNwbGF5OiAnbm9uZScgfSk7XG4gICAgdGhpcy5lbWl0RXZlbnQoJ2hpZGUnKTtcbiAgfVxufTtcblxucHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNzcyh7XG4gICAgcG9zaXRpb246ICcnLFxuICAgIGxlZnQ6ICcnLFxuICAgIHJpZ2h0OiAnJyxcbiAgICB0b3A6ICcnLFxuICAgIGJvdHRvbTogJycsXG4gICAgdHJhbnNpdGlvbjogJycsXG4gICAgdHJhbnNmb3JtOiAnJ1xuICB9KTtcbn07XG5cbnJldHVybiBJdGVtO1xuXG59KSk7XG4iLCIvKiFcbiAqIE91dGxheWVyIHYyLjEuMVxuICogdGhlIGJyYWlucyBhbmQgZ3V0cyBvZiBhIGxheW91dCBsaWJyYXJ5XG4gKiBNSVQgbGljZW5zZVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggW1xuICAgICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJyxcbiAgICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJyxcbiAgICAgICAgJy4vaXRlbSdcbiAgICAgIF0sXG4gICAgICBmdW5jdGlvbiggRXZFbWl0dGVyLCBnZXRTaXplLCB1dGlscywgSXRlbSApIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyLCBnZXRTaXplLCB1dGlscywgSXRlbSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdldi1lbWl0dGVyJyksXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICAgIHJlcXVpcmUoJy4vaXRlbScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5PdXRsYXllciA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyLFxuICAgICAgd2luZG93LmdldFNpemUsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICAgd2luZG93Lk91dGxheWVyLkl0ZW1cbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIsIGdldFNpemUsIHV0aWxzLCBJdGVtICkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLSB2YXJzIC0tLS0tIC8vXG5cbnZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG52YXIgalF1ZXJ5ID0gd2luZG93LmpRdWVyeTtcbnZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gT3V0bGF5ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXJzXG52YXIgR1VJRCA9IDA7XG4vLyBpbnRlcm5hbCBzdG9yZSBvZiBhbGwgT3V0bGF5ZXIgaW50YW5jZXNcbnZhciBpbnN0YW5jZXMgPSB7fTtcblxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudCwgU3RyaW5nfSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE91dGxheWVyKCBlbGVtZW50LCBvcHRpb25zICkge1xuICB2YXIgcXVlcnlFbGVtZW50ID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtZW50ICk7XG4gIGlmICggIXF1ZXJ5RWxlbWVudCApIHtcbiAgICBpZiAoIGNvbnNvbGUgKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCAnQmFkIGVsZW1lbnQgZm9yICcgKyB0aGlzLmNvbnN0cnVjdG9yLm5hbWVzcGFjZSArXG4gICAgICAgICc6ICcgKyAoIHF1ZXJ5RWxlbWVudCB8fCBlbGVtZW50ICkgKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZWxlbWVudCA9IHF1ZXJ5RWxlbWVudDtcbiAgLy8gYWRkIGpRdWVyeVxuICBpZiAoIGpRdWVyeSApIHtcbiAgICB0aGlzLiRlbGVtZW50ID0galF1ZXJ5KCB0aGlzLmVsZW1lbnQgKTtcbiAgfVxuXG4gIC8vIG9wdGlvbnNcbiAgdGhpcy5vcHRpb25zID0gdXRpbHMuZXh0ZW5kKCB7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0cyApO1xuICB0aGlzLm9wdGlvbiggb3B0aW9ucyApO1xuXG4gIC8vIGFkZCBpZCBmb3IgT3V0bGF5ZXIuZ2V0RnJvbUVsZW1lbnRcbiAgdmFyIGlkID0gKytHVUlEO1xuICB0aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlEID0gaWQ7IC8vIGV4cGFuZG9cbiAgaW5zdGFuY2VzWyBpZCBdID0gdGhpczsgLy8gYXNzb2NpYXRlIHZpYSBpZFxuXG4gIC8vIGtpY2sgaXQgb2ZmXG4gIHRoaXMuX2NyZWF0ZSgpO1xuXG4gIHZhciBpc0luaXRMYXlvdXQgPSB0aGlzLl9nZXRPcHRpb24oJ2luaXRMYXlvdXQnKTtcbiAgaWYgKCBpc0luaXRMYXlvdXQgKSB7XG4gICAgdGhpcy5sYXlvdXQoKTtcbiAgfVxufVxuXG4vLyBzZXR0aW5ncyBhcmUgZm9yIGludGVybmFsIHVzZSBvbmx5XG5PdXRsYXllci5uYW1lc3BhY2UgPSAnb3V0bGF5ZXInO1xuT3V0bGF5ZXIuSXRlbSA9IEl0ZW07XG5cbi8vIGRlZmF1bHQgb3B0aW9uc1xuT3V0bGF5ZXIuZGVmYXVsdHMgPSB7XG4gIGNvbnRhaW5lclN0eWxlOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgaW5pdExheW91dDogdHJ1ZSxcbiAgb3JpZ2luTGVmdDogdHJ1ZSxcbiAgb3JpZ2luVG9wOiB0cnVlLFxuICByZXNpemU6IHRydWUsXG4gIHJlc2l6ZUNvbnRhaW5lcjogdHJ1ZSxcbiAgLy8gaXRlbSBvcHRpb25zXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogJzAuNHMnLFxuICBoaWRkZW5TdHlsZToge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC4wMDEpJ1xuICB9LFxuICB2aXNpYmxlU3R5bGU6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9XG59O1xuXG52YXIgcHJvdG8gPSBPdXRsYXllci5wcm90b3R5cGU7XG4vLyBpbmhlcml0IEV2RW1pdHRlclxudXRpbHMuZXh0ZW5kKCBwcm90bywgRXZFbWl0dGVyLnByb3RvdHlwZSApO1xuXG4vKipcbiAqIHNldCBvcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICovXG5wcm90by5vcHRpb24gPSBmdW5jdGlvbiggb3B0cyApIHtcbiAgdXRpbHMuZXh0ZW5kKCB0aGlzLm9wdGlvbnMsIG9wdHMgKTtcbn07XG5cbi8qKlxuICogZ2V0IGJhY2t3YXJkcyBjb21wYXRpYmxlIG9wdGlvbiB2YWx1ZSwgY2hlY2sgb2xkIG5hbWVcbiAqL1xucHJvdG8uX2dldE9wdGlvbiA9IGZ1bmN0aW9uKCBvcHRpb24gKSB7XG4gIHZhciBvbGRPcHRpb24gPSB0aGlzLmNvbnN0cnVjdG9yLmNvbXBhdE9wdGlvbnNbIG9wdGlvbiBdO1xuICByZXR1cm4gb2xkT3B0aW9uICYmIHRoaXMub3B0aW9uc1sgb2xkT3B0aW9uIF0gIT09IHVuZGVmaW5lZCA/XG4gICAgdGhpcy5vcHRpb25zWyBvbGRPcHRpb24gXSA6IHRoaXMub3B0aW9uc1sgb3B0aW9uIF07XG59O1xuXG5PdXRsYXllci5jb21wYXRPcHRpb25zID0ge1xuICAvLyBjdXJyZW50TmFtZTogb2xkTmFtZVxuICBpbml0TGF5b3V0OiAnaXNJbml0TGF5b3V0JyxcbiAgaG9yaXpvbnRhbDogJ2lzSG9yaXpvbnRhbCcsXG4gIGxheW91dEluc3RhbnQ6ICdpc0xheW91dEluc3RhbnQnLFxuICBvcmlnaW5MZWZ0OiAnaXNPcmlnaW5MZWZ0JyxcbiAgb3JpZ2luVG9wOiAnaXNPcmlnaW5Ub3AnLFxuICByZXNpemU6ICdpc1Jlc2l6ZUJvdW5kJyxcbiAgcmVzaXplQ29udGFpbmVyOiAnaXNSZXNpemluZ0NvbnRhaW5lcidcbn07XG5cbnByb3RvLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gZ2V0IGl0ZW1zIGZyb20gY2hpbGRyZW5cbiAgdGhpcy5yZWxvYWRJdGVtcygpO1xuICAvLyBlbGVtZW50cyB0aGF0IGFmZmVjdCBsYXlvdXQsIGJ1dCBhcmUgbm90IGxhaWQgb3V0XG4gIHRoaXMuc3RhbXBzID0gW107XG4gIHRoaXMuc3RhbXAoIHRoaXMub3B0aW9ucy5zdGFtcCApO1xuICAvLyBzZXQgY29udGFpbmVyIHN0eWxlXG4gIHV0aWxzLmV4dGVuZCggdGhpcy5lbGVtZW50LnN0eWxlLCB0aGlzLm9wdGlvbnMuY29udGFpbmVyU3R5bGUgKTtcblxuICAvLyBiaW5kIHJlc2l6ZSBtZXRob2RcbiAgdmFyIGNhbkJpbmRSZXNpemUgPSB0aGlzLl9nZXRPcHRpb24oJ3Jlc2l6ZScpO1xuICBpZiAoIGNhbkJpbmRSZXNpemUgKSB7XG4gICAgdGhpcy5iaW5kUmVzaXplKCk7XG4gIH1cbn07XG5cbi8vIGdvZXMgdGhyb3VnaCBhbGwgY2hpbGRyZW4gYWdhaW4gYW5kIGdldHMgYnJpY2tzIGluIHByb3BlciBvcmRlclxucHJvdG8ucmVsb2FkSXRlbXMgPSBmdW5jdGlvbigpIHtcbiAgLy8gY29sbGVjdGlvbiBvZiBpdGVtIGVsZW1lbnRzXG4gIHRoaXMuaXRlbXMgPSB0aGlzLl9pdGVtaXplKCB0aGlzLmVsZW1lbnQuY2hpbGRyZW4gKTtcbn07XG5cblxuLyoqXG4gKiB0dXJuIGVsZW1lbnRzIGludG8gT3V0bGF5ZXIuSXRlbXMgdG8gYmUgdXNlZCBpbiBsYXlvdXRcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgSFRNTEVsZW1lbnR9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zIC0gY29sbGVjdGlvbiBvZiBuZXcgT3V0bGF5ZXIgSXRlbXNcbiAqL1xucHJvdG8uX2l0ZW1pemUgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG5cbiAgdmFyIGl0ZW1FbGVtcyA9IHRoaXMuX2ZpbHRlckZpbmRJdGVtRWxlbWVudHMoIGVsZW1zICk7XG4gIHZhciBJdGVtID0gdGhpcy5jb25zdHJ1Y3Rvci5JdGVtO1xuXG4gIC8vIGNyZWF0ZSBuZXcgT3V0bGF5ZXIgSXRlbXMgZm9yIGNvbGxlY3Rpb25cbiAgdmFyIGl0ZW1zID0gW107XG4gIGZvciAoIHZhciBpPTA7IGkgPCBpdGVtRWxlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGVsZW0gPSBpdGVtRWxlbXNbaV07XG4gICAgdmFyIGl0ZW0gPSBuZXcgSXRlbSggZWxlbSwgdGhpcyApO1xuICAgIGl0ZW1zLnB1c2goIGl0ZW0gKTtcbiAgfVxuXG4gIHJldHVybiBpdGVtcztcbn07XG5cbi8qKlxuICogZ2V0IGl0ZW0gZWxlbWVudHMgdG8gYmUgdXNlZCBpbiBsYXlvdXRcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgSFRNTEVsZW1lbnR9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zIC0gaXRlbSBlbGVtZW50c1xuICovXG5wcm90by5fZmlsdGVyRmluZEl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgcmV0dXJuIHV0aWxzLmZpbHRlckZpbmRFbGVtZW50cyggZWxlbXMsIHRoaXMub3B0aW9ucy5pdGVtU2VsZWN0b3IgKTtcbn07XG5cbi8qKlxuICogZ2V0dGVyIG1ldGhvZCBmb3IgZ2V0dGluZyBpdGVtIGVsZW1lbnRzXG4gKiBAcmV0dXJucyB7QXJyYXl9IGVsZW1zIC0gY29sbGVjdGlvbiBvZiBpdGVtIGVsZW1lbnRzXG4gKi9cbnByb3RvLmdldEl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5pdGVtcy5tYXAoIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIHJldHVybiBpdGVtLmVsZW1lbnQ7XG4gIH0pO1xufTtcblxuLy8gLS0tLS0gaW5pdCAmIGxheW91dCAtLS0tLSAvL1xuXG4vKipcbiAqIGxheXMgb3V0IGFsbCBpdGVtc1xuICovXG5wcm90by5sYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fcmVzZXRMYXlvdXQoKTtcbiAgdGhpcy5fbWFuYWdlU3RhbXBzKCk7XG5cbiAgLy8gZG9uJ3QgYW5pbWF0ZSBmaXJzdCBsYXlvdXRcbiAgdmFyIGxheW91dEluc3RhbnQgPSB0aGlzLl9nZXRPcHRpb24oJ2xheW91dEluc3RhbnQnKTtcbiAgdmFyIGlzSW5zdGFudCA9IGxheW91dEluc3RhbnQgIT09IHVuZGVmaW5lZCA/XG4gICAgbGF5b3V0SW5zdGFudCA6ICF0aGlzLl9pc0xheW91dEluaXRlZDtcbiAgdGhpcy5sYXlvdXRJdGVtcyggdGhpcy5pdGVtcywgaXNJbnN0YW50ICk7XG5cbiAgLy8gZmxhZyBmb3IgaW5pdGFsaXplZFxuICB0aGlzLl9pc0xheW91dEluaXRlZCA9IHRydWU7XG59O1xuXG4vLyBfaW5pdCBpcyBhbGlhcyBmb3IgbGF5b3V0XG5wcm90by5faW5pdCA9IHByb3RvLmxheW91dDtcblxuLyoqXG4gKiBsb2dpYyBiZWZvcmUgYW55IG5ldyBsYXlvdXRcbiAqL1xucHJvdG8uX3Jlc2V0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2V0U2l6ZSgpO1xufTtcblxuXG5wcm90by5nZXRTaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2l6ZSA9IGdldFNpemUoIHRoaXMuZWxlbWVudCApO1xufTtcblxuLyoqXG4gKiBnZXQgbWVhc3VyZW1lbnQgZnJvbSBvcHRpb24sIGZvciBjb2x1bW5XaWR0aCwgcm93SGVpZ2h0LCBndXR0ZXJcbiAqIGlmIG9wdGlvbiBpcyBTdHJpbmcgLT4gZ2V0IGVsZW1lbnQgZnJvbSBzZWxlY3RvciBzdHJpbmcsICYgZ2V0IHNpemUgb2YgZWxlbWVudFxuICogaWYgb3B0aW9uIGlzIEVsZW1lbnQgLT4gZ2V0IHNpemUgb2YgZWxlbWVudFxuICogZWxzZSB1c2Ugb3B0aW9uIGFzIGEgbnVtYmVyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lYXN1cmVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2l6ZSAtIHdpZHRoIG9yIGhlaWdodFxuICogQHByaXZhdGVcbiAqL1xucHJvdG8uX2dldE1lYXN1cmVtZW50ID0gZnVuY3Rpb24oIG1lYXN1cmVtZW50LCBzaXplICkge1xuICB2YXIgb3B0aW9uID0gdGhpcy5vcHRpb25zWyBtZWFzdXJlbWVudCBdO1xuICB2YXIgZWxlbTtcbiAgaWYgKCAhb3B0aW9uICkge1xuICAgIC8vIGRlZmF1bHQgdG8gMFxuICAgIHRoaXNbIG1lYXN1cmVtZW50IF0gPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBvcHRpb24gYXMgYW4gZWxlbWVudFxuICAgIGlmICggdHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJyApIHtcbiAgICAgIGVsZW0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvciggb3B0aW9uICk7XG4gICAgfSBlbHNlIGlmICggb3B0aW9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgKSB7XG4gICAgICBlbGVtID0gb3B0aW9uO1xuICAgIH1cbiAgICAvLyB1c2Ugc2l6ZSBvZiBlbGVtZW50LCBpZiBlbGVtZW50XG4gICAgdGhpc1sgbWVhc3VyZW1lbnQgXSA9IGVsZW0gPyBnZXRTaXplKCBlbGVtIClbIHNpemUgXSA6IG9wdGlvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBsYXlvdXQgYSBjb2xsZWN0aW9uIG9mIGl0ZW0gZWxlbWVudHNcbiAqIEBhcGkgcHVibGljXG4gKi9cbnByb3RvLmxheW91dEl0ZW1zID0gZnVuY3Rpb24oIGl0ZW1zLCBpc0luc3RhbnQgKSB7XG4gIGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXNGb3JMYXlvdXQoIGl0ZW1zICk7XG5cbiAgdGhpcy5fbGF5b3V0SXRlbXMoIGl0ZW1zLCBpc0luc3RhbnQgKTtcblxuICB0aGlzLl9wb3N0TGF5b3V0KCk7XG59O1xuXG4vKipcbiAqIGdldCB0aGUgaXRlbXMgdG8gYmUgbGFpZCBvdXRcbiAqIHlvdSBtYXkgd2FudCB0byBza2lwIG92ZXIgc29tZSBpdGVtc1xuICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXNcbiAqL1xucHJvdG8uX2dldEl0ZW1zRm9yTGF5b3V0ID0gZnVuY3Rpb24oIGl0ZW1zICkge1xuICByZXR1cm4gaXRlbXMuZmlsdGVyKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICByZXR1cm4gIWl0ZW0uaXNJZ25vcmVkO1xuICB9KTtcbn07XG5cbi8qKlxuICogbGF5b3V0IGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICogQHBhcmFtIHtCb29sZWFufSBpc0luc3RhbnRcbiAqL1xucHJvdG8uX2xheW91dEl0ZW1zID0gZnVuY3Rpb24oIGl0ZW1zLCBpc0luc3RhbnQgKSB7XG4gIHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoICdsYXlvdXQnLCBpdGVtcyApO1xuXG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSB7XG4gICAgLy8gbm8gaXRlbXMsIGVtaXQgZXZlbnQgd2l0aCBlbXB0eSBhcnJheVxuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBxdWV1ZSA9IFtdO1xuXG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIC8vIGdldCB4L3kgb2JqZWN0IGZyb20gbWV0aG9kXG4gICAgdmFyIHBvc2l0aW9uID0gdGhpcy5fZ2V0SXRlbUxheW91dFBvc2l0aW9uKCBpdGVtICk7XG4gICAgLy8gZW5xdWV1ZVxuICAgIHBvc2l0aW9uLml0ZW0gPSBpdGVtO1xuICAgIHBvc2l0aW9uLmlzSW5zdGFudCA9IGlzSW5zdGFudCB8fCBpdGVtLmlzTGF5b3V0SW5zdGFudDtcbiAgICBxdWV1ZS5wdXNoKCBwb3NpdGlvbiApO1xuICB9LCB0aGlzICk7XG5cbiAgdGhpcy5fcHJvY2Vzc0xheW91dFF1ZXVlKCBxdWV1ZSApO1xufTtcblxuLyoqXG4gKiBnZXQgaXRlbSBsYXlvdXQgcG9zaXRpb25cbiAqIEBwYXJhbSB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICogQHJldHVybnMge09iamVjdH0geCBhbmQgeSBwb3NpdGlvblxuICovXG5wcm90by5fZ2V0SXRlbUxheW91dFBvc2l0aW9uID0gZnVuY3Rpb24oIC8qIGl0ZW0gKi8gKSB7XG4gIHJldHVybiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG59O1xuXG4vKipcbiAqIGl0ZXJhdGUgb3ZlciBhcnJheSBhbmQgcG9zaXRpb24gZWFjaCBpdGVtXG4gKiBSZWFzb24gYmVpbmcgLSBzZXBhcmF0aW5nIHRoaXMgbG9naWMgcHJldmVudHMgJ2xheW91dCBpbnZhbGlkYXRpb24nXG4gKiB0aHggQHBhdWxfaXJpc2hcbiAqIEBwYXJhbSB7QXJyYXl9IHF1ZXVlXG4gKi9cbnByb3RvLl9wcm9jZXNzTGF5b3V0UXVldWUgPSBmdW5jdGlvbiggcXVldWUgKSB7XG4gIHRoaXMudXBkYXRlU3RhZ2dlcigpO1xuICBxdWV1ZS5mb3JFYWNoKCBmdW5jdGlvbiggb2JqLCBpICkge1xuICAgIHRoaXMuX3Bvc2l0aW9uSXRlbSggb2JqLml0ZW0sIG9iai54LCBvYmoueSwgb2JqLmlzSW5zdGFudCwgaSApO1xuICB9LCB0aGlzICk7XG59O1xuXG4vLyBzZXQgc3RhZ2dlciBmcm9tIG9wdGlvbiBpbiBtaWxsaXNlY29uZHMgbnVtYmVyXG5wcm90by51cGRhdGVTdGFnZ2VyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzdGFnZ2VyID0gdGhpcy5vcHRpb25zLnN0YWdnZXI7XG4gIGlmICggc3RhZ2dlciA9PT0gbnVsbCB8fCBzdGFnZ2VyID09PSB1bmRlZmluZWQgKSB7XG4gICAgdGhpcy5zdGFnZ2VyID0gMDtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5zdGFnZ2VyID0gZ2V0TWlsbGlzZWNvbmRzKCBzdGFnZ2VyICk7XG4gIHJldHVybiB0aGlzLnN0YWdnZXI7XG59O1xuXG4vKipcbiAqIFNldHMgcG9zaXRpb24gb2YgaXRlbSBpbiBET01cbiAqIEBwYXJhbSB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICogQHBhcmFtIHtOdW1iZXJ9IHggLSBob3Jpem9udGFsIHBvc2l0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0geSAtIHZlcnRpY2FsIHBvc2l0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzSW5zdGFudCAtIGRpc2FibGVzIHRyYW5zaXRpb25zXG4gKi9cbnByb3RvLl9wb3NpdGlvbkl0ZW0gPSBmdW5jdGlvbiggaXRlbSwgeCwgeSwgaXNJbnN0YW50LCBpICkge1xuICBpZiAoIGlzSW5zdGFudCApIHtcbiAgICAvLyBpZiBub3QgdHJhbnNpdGlvbiwganVzdCBzZXQgQ1NTXG4gICAgaXRlbS5nb1RvKCB4LCB5ICk7XG4gIH0gZWxzZSB7XG4gICAgaXRlbS5zdGFnZ2VyKCBpICogdGhpcy5zdGFnZ2VyICk7XG4gICAgaXRlbS5tb3ZlVG8oIHgsIHkgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBbnkgbG9naWMgeW91IHdhbnQgdG8gZG8gYWZ0ZXIgZWFjaCBsYXlvdXQsXG4gKiBpLmUuIHNpemUgdGhlIGNvbnRhaW5lclxuICovXG5wcm90by5fcG9zdExheW91dCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlc2l6ZUNvbnRhaW5lcigpO1xufTtcblxucHJvdG8ucmVzaXplQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpc1Jlc2l6aW5nQ29udGFpbmVyID0gdGhpcy5fZ2V0T3B0aW9uKCdyZXNpemVDb250YWluZXInKTtcbiAgaWYgKCAhaXNSZXNpemluZ0NvbnRhaW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHNpemUgPSB0aGlzLl9nZXRDb250YWluZXJTaXplKCk7XG4gIGlmICggc2l6ZSApIHtcbiAgICB0aGlzLl9zZXRDb250YWluZXJNZWFzdXJlKCBzaXplLndpZHRoLCB0cnVlICk7XG4gICAgdGhpcy5fc2V0Q29udGFpbmVyTWVhc3VyZSggc2l6ZS5oZWlnaHQsIGZhbHNlICk7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0cyB3aWR0aCBvciBoZWlnaHQgb2YgY29udGFpbmVyIGlmIHJldHVybmVkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBzaXplXG4gKiAgIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICogICBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gKi9cbnByb3RvLl9nZXRDb250YWluZXJTaXplID0gbm9vcDtcblxuLyoqXG4gKiBAcGFyYW0ge051bWJlcn0gbWVhc3VyZSAtIHNpemUgb2Ygd2lkdGggb3IgaGVpZ2h0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzV2lkdGhcbiAqL1xucHJvdG8uX3NldENvbnRhaW5lck1lYXN1cmUgPSBmdW5jdGlvbiggbWVhc3VyZSwgaXNXaWR0aCApIHtcbiAgaWYgKCBtZWFzdXJlID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGVsZW1TaXplID0gdGhpcy5zaXplO1xuICAvLyBhZGQgcGFkZGluZyBhbmQgYm9yZGVyIHdpZHRoIGlmIGJvcmRlciBib3hcbiAgaWYgKCBlbGVtU2l6ZS5pc0JvcmRlckJveCApIHtcbiAgICBtZWFzdXJlICs9IGlzV2lkdGggPyBlbGVtU2l6ZS5wYWRkaW5nTGVmdCArIGVsZW1TaXplLnBhZGRpbmdSaWdodCArXG4gICAgICBlbGVtU2l6ZS5ib3JkZXJMZWZ0V2lkdGggKyBlbGVtU2l6ZS5ib3JkZXJSaWdodFdpZHRoIDpcbiAgICAgIGVsZW1TaXplLnBhZGRpbmdCb3R0b20gKyBlbGVtU2l6ZS5wYWRkaW5nVG9wICtcbiAgICAgIGVsZW1TaXplLmJvcmRlclRvcFdpZHRoICsgZWxlbVNpemUuYm9yZGVyQm90dG9tV2lkdGg7XG4gIH1cblxuICBtZWFzdXJlID0gTWF0aC5tYXgoIG1lYXN1cmUsIDAgKTtcbiAgdGhpcy5lbGVtZW50LnN0eWxlWyBpc1dpZHRoID8gJ3dpZHRoJyA6ICdoZWlnaHQnIF0gPSBtZWFzdXJlICsgJ3B4Jztcbn07XG5cbi8qKlxuICogZW1pdCBldmVudENvbXBsZXRlIG9uIGEgY29sbGVjdGlvbiBvZiBpdGVtcyBldmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zIC0gT3V0bGF5ZXIuSXRlbXNcbiAqL1xucHJvdG8uX2VtaXRDb21wbGV0ZU9uSXRlbXMgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBpdGVtcyApIHtcbiAgdmFyIF90aGlzID0gdGhpcztcbiAgZnVuY3Rpb24gb25Db21wbGV0ZSgpIHtcbiAgICBfdGhpcy5kaXNwYXRjaEV2ZW50KCBldmVudE5hbWUgKyAnQ29tcGxldGUnLCBudWxsLCBbIGl0ZW1zIF0gKTtcbiAgfVxuXG4gIHZhciBjb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgaWYgKCAhaXRlbXMgfHwgIWNvdW50ICkge1xuICAgIG9uQ29tcGxldGUoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZG9uZUNvdW50ID0gMDtcbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICBkb25lQ291bnQrKztcbiAgICBpZiAoIGRvbmVDb3VudCA9PSBjb3VudCApIHtcbiAgICAgIG9uQ29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBiaW5kIGNhbGxiYWNrXG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0ub25jZSggZXZlbnROYW1lLCB0aWNrICk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBlbWl0cyBldmVudHMgdmlhIEV2RW1pdHRlciBhbmQgalF1ZXJ5IGV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSBuYW1lIG9mIGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIG9yaWdpbmFsIGV2ZW50XG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIC0gZXh0cmEgYXJndW1lbnRzXG4gKi9cbnByb3RvLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiggdHlwZSwgZXZlbnQsIGFyZ3MgKSB7XG4gIC8vIGFkZCBvcmlnaW5hbCBldmVudCB0byBhcmd1bWVudHNcbiAgdmFyIGVtaXRBcmdzID0gZXZlbnQgPyBbIGV2ZW50IF0uY29uY2F0KCBhcmdzICkgOiBhcmdzO1xuICB0aGlzLmVtaXRFdmVudCggdHlwZSwgZW1pdEFyZ3MgKTtcblxuICBpZiAoIGpRdWVyeSApIHtcbiAgICAvLyBzZXQgdGhpcy4kZWxlbWVudFxuICAgIHRoaXMuJGVsZW1lbnQgPSB0aGlzLiRlbGVtZW50IHx8IGpRdWVyeSggdGhpcy5lbGVtZW50ICk7XG4gICAgaWYgKCBldmVudCApIHtcbiAgICAgIC8vIGNyZWF0ZSBqUXVlcnkgZXZlbnRcbiAgICAgIHZhciAkZXZlbnQgPSBqUXVlcnkuRXZlbnQoIGV2ZW50ICk7XG4gICAgICAkZXZlbnQudHlwZSA9IHR5cGU7XG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoICRldmVudCwgYXJncyApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBqdXN0IHRyaWdnZXIgd2l0aCB0eXBlIGlmIG5vIGV2ZW50IGF2YWlsYWJsZVxuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCB0eXBlLCBhcmdzICk7XG4gICAgfVxuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBpZ25vcmUgJiBzdGFtcHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG4vKipcbiAqIGtlZXAgaXRlbSBpbiBjb2xsZWN0aW9uLCBidXQgZG8gbm90IGxheSBpdCBvdXRcbiAqIGlnbm9yZWQgaXRlbXMgZG8gbm90IGdldCBza2lwcGVkIGluIGxheW91dFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKi9cbnByb3RvLmlnbm9yZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbSggZWxlbSApO1xuICBpZiAoIGl0ZW0gKSB7XG4gICAgaXRlbS5pc0lnbm9yZWQgPSB0cnVlO1xuICB9XG59O1xuXG4vKipcbiAqIHJldHVybiBpdGVtIHRvIGxheW91dCBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqL1xucHJvdG8udW5pZ25vcmUgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW0oIGVsZW0gKTtcbiAgaWYgKCBpdGVtICkge1xuICAgIGRlbGV0ZSBpdGVtLmlzSWdub3JlZDtcbiAgfVxufTtcblxuLyoqXG4gKiBhZGRzIGVsZW1lbnRzIHRvIHN0YW1wc1xuICogQHBhcmFtIHtOb2RlTGlzdCwgQXJyYXksIEVsZW1lbnQsIG9yIFN0cmluZ30gZWxlbXNcbiAqL1xucHJvdG8uc3RhbXAgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGVsZW1zID0gdGhpcy5fZmluZCggZWxlbXMgKTtcbiAgaWYgKCAhZWxlbXMgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5zdGFtcHMgPSB0aGlzLnN0YW1wcy5jb25jYXQoIGVsZW1zICk7XG4gIC8vIGlnbm9yZVxuICBlbGVtcy5mb3JFYWNoKCB0aGlzLmlnbm9yZSwgdGhpcyApO1xufTtcblxuLyoqXG4gKiByZW1vdmVzIGVsZW1lbnRzIHRvIHN0YW1wc1xuICogQHBhcmFtIHtOb2RlTGlzdCwgQXJyYXksIG9yIEVsZW1lbnR9IGVsZW1zXG4gKi9cbnByb3RvLnVuc3RhbXAgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGVsZW1zID0gdGhpcy5fZmluZCggZWxlbXMgKTtcbiAgaWYgKCAhZWxlbXMgKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAvLyBmaWx0ZXIgb3V0IHJlbW92ZWQgc3RhbXAgZWxlbWVudHNcbiAgICB1dGlscy5yZW1vdmVGcm9tKCB0aGlzLnN0YW1wcywgZWxlbSApO1xuICAgIHRoaXMudW5pZ25vcmUoIGVsZW0gKTtcbiAgfSwgdGhpcyApO1xufTtcblxuLyoqXG4gKiBmaW5kcyBjaGlsZCBlbGVtZW50c1xuICogQHBhcmFtIHtOb2RlTGlzdCwgQXJyYXksIEVsZW1lbnQsIG9yIFN0cmluZ30gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gZWxlbXNcbiAqL1xucHJvdG8uX2ZpbmQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGlmICggIWVsZW1zICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBpZiBzdHJpbmcsIHVzZSBhcmd1bWVudCBhcyBzZWxlY3RvciBzdHJpbmdcbiAgaWYgKCB0eXBlb2YgZWxlbXMgPT0gJ3N0cmluZycgKSB7XG4gICAgZWxlbXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggZWxlbXMgKTtcbiAgfVxuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgcmV0dXJuIGVsZW1zO1xufTtcblxucHJvdG8uX21hbmFnZVN0YW1wcyA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLnN0YW1wcyB8fCAhdGhpcy5zdGFtcHMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuX2dldEJvdW5kaW5nUmVjdCgpO1xuXG4gIHRoaXMuc3RhbXBzLmZvckVhY2goIHRoaXMuX21hbmFnZVN0YW1wLCB0aGlzICk7XG59O1xuXG4vLyB1cGRhdGUgYm91bmRpbmdMZWZ0IC8gVG9wXG5wcm90by5fZ2V0Qm91bmRpbmdSZWN0ID0gZnVuY3Rpb24oKSB7XG4gIC8vIGdldCBib3VuZGluZyByZWN0IGZvciBjb250YWluZXIgZWxlbWVudFxuICB2YXIgYm91bmRpbmdSZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgdGhpcy5fYm91bmRpbmdSZWN0ID0ge1xuICAgIGxlZnQ6IGJvdW5kaW5nUmVjdC5sZWZ0ICsgc2l6ZS5wYWRkaW5nTGVmdCArIHNpemUuYm9yZGVyTGVmdFdpZHRoLFxuICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCArIHNpemUucGFkZGluZ1RvcCArIHNpemUuYm9yZGVyVG9wV2lkdGgsXG4gICAgcmlnaHQ6IGJvdW5kaW5nUmVjdC5yaWdodCAtICggc2l6ZS5wYWRkaW5nUmlnaHQgKyBzaXplLmJvcmRlclJpZ2h0V2lkdGggKSxcbiAgICBib3R0b206IGJvdW5kaW5nUmVjdC5ib3R0b20gLSAoIHNpemUucGFkZGluZ0JvdHRvbSArIHNpemUuYm9yZGVyQm90dG9tV2lkdGggKVxuICB9O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN0YW1wXG4qKi9cbnByb3RvLl9tYW5hZ2VTdGFtcCA9IG5vb3A7XG5cbi8qKlxuICogZ2V0IHgveSBwb3NpdGlvbiBvZiBlbGVtZW50IHJlbGF0aXZlIHRvIGNvbnRhaW5lciBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtPYmplY3R9IG9mZnNldCAtIGhhcyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b21cbiAqL1xucHJvdG8uX2dldEVsZW1lbnRPZmZzZXQgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdmFyIGJvdW5kaW5nUmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciB0aGlzUmVjdCA9IHRoaXMuX2JvdW5kaW5nUmVjdDtcbiAgdmFyIHNpemUgPSBnZXRTaXplKCBlbGVtICk7XG4gIHZhciBvZmZzZXQgPSB7XG4gICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgLSB0aGlzUmVjdC5sZWZ0IC0gc2l6ZS5tYXJnaW5MZWZ0LFxuICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCAtIHRoaXNSZWN0LnRvcCAtIHNpemUubWFyZ2luVG9wLFxuICAgIHJpZ2h0OiB0aGlzUmVjdC5yaWdodCAtIGJvdW5kaW5nUmVjdC5yaWdodCAtIHNpemUubWFyZ2luUmlnaHQsXG4gICAgYm90dG9tOiB0aGlzUmVjdC5ib3R0b20gLSBib3VuZGluZ1JlY3QuYm90dG9tIC0gc2l6ZS5tYXJnaW5Cb3R0b21cbiAgfTtcbiAgcmV0dXJuIG9mZnNldDtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJlc2l6ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBlbmFibGUgZXZlbnQgaGFuZGxlcnMgZm9yIGxpc3RlbmVyc1xuLy8gaS5lLiByZXNpemUgLT4gb25yZXNpemVcbnByb3RvLmhhbmRsZUV2ZW50ID0gdXRpbHMuaGFuZGxlRXZlbnQ7XG5cbi8qKlxuICogQmluZCBsYXlvdXQgdG8gd2luZG93IHJlc2l6aW5nXG4gKi9cbnByb3RvLmJpbmRSZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB0aGlzICk7XG4gIHRoaXMuaXNSZXNpemVCb3VuZCA9IHRydWU7XG59O1xuXG4vKipcbiAqIFVuYmluZCBsYXlvdXQgdG8gd2luZG93IHJlc2l6aW5nXG4gKi9cbnByb3RvLnVuYmluZFJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMgKTtcbiAgdGhpcy5pc1Jlc2l6ZUJvdW5kID0gZmFsc2U7XG59O1xuXG5wcm90by5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlc2l6ZSgpO1xufTtcblxudXRpbHMuZGVib3VuY2VNZXRob2QoIE91dGxheWVyLCAnb25yZXNpemUnLCAxMDAgKTtcblxucHJvdG8ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIC8vIGRvbid0IHRyaWdnZXIgaWYgc2l6ZSBkaWQgbm90IGNoYW5nZVxuICAvLyBvciBpZiByZXNpemUgd2FzIHVuYm91bmQuIFNlZSAjOVxuICBpZiAoICF0aGlzLmlzUmVzaXplQm91bmQgfHwgIXRoaXMubmVlZHNSZXNpemVMYXlvdXQoKSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmxheW91dCgpO1xufTtcblxuLyoqXG4gKiBjaGVjayBpZiBsYXlvdXQgaXMgbmVlZGVkIHBvc3QgbGF5b3V0XG4gKiBAcmV0dXJucyBCb29sZWFuXG4gKi9cbnByb3RvLm5lZWRzUmVzaXplTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzaXplID0gZ2V0U2l6ZSggdGhpcy5lbGVtZW50ICk7XG4gIC8vIGNoZWNrIHRoYXQgdGhpcy5zaXplIGFuZCBzaXplIGFyZSB0aGVyZVxuICAvLyBJRTggdHJpZ2dlcnMgcmVzaXplIG9uIGJvZHkgc2l6ZSBjaGFuZ2UsIHNvIHRoZXkgbWlnaHQgbm90IGJlXG4gIHZhciBoYXNTaXplcyA9IHRoaXMuc2l6ZSAmJiBzaXplO1xuICByZXR1cm4gaGFzU2l6ZXMgJiYgc2l6ZS5pbm5lcldpZHRoICE9PSB0aGlzLnNpemUuaW5uZXJXaWR0aDtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBhZGQgaXRlbXMgdG8gT3V0bGF5ZXIgaW5zdGFuY2VcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBPdXRsYXllci5JdGVtc1xuKiovXG5wcm90by5hZGRJdGVtcyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbWl6ZSggZWxlbXMgKTtcbiAgLy8gYWRkIGl0ZW1zIHRvIGNvbGxlY3Rpb25cbiAgaWYgKCBpdGVtcy5sZW5ndGggKSB7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuY29uY2F0KCBpdGVtcyApO1xuICB9XG4gIHJldHVybiBpdGVtcztcbn07XG5cbi8qKlxuICogTGF5b3V0IG5ld2x5LWFwcGVuZGVkIGl0ZW0gZWxlbWVudHNcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAqL1xucHJvdG8uYXBwZW5kZWQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciBpdGVtcyA9IHRoaXMuYWRkSXRlbXMoIGVsZW1zICk7XG4gIGlmICggIWl0ZW1zLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbGF5b3V0IGFuZCByZXZlYWwganVzdCB0aGUgbmV3IGl0ZW1zXG4gIHRoaXMubGF5b3V0SXRlbXMoIGl0ZW1zLCB0cnVlICk7XG4gIHRoaXMucmV2ZWFsKCBpdGVtcyApO1xufTtcblxuLyoqXG4gKiBMYXlvdXQgcHJlcGVuZGVkIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEVsZW1lbnR9IGVsZW1zXG4gKi9cbnByb3RvLnByZXBlbmRlZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbWl6ZSggZWxlbXMgKTtcbiAgaWYgKCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhZGQgaXRlbXMgdG8gYmVnaW5uaW5nIG9mIGNvbGxlY3Rpb25cbiAgdmFyIHByZXZpb3VzSXRlbXMgPSB0aGlzLml0ZW1zLnNsaWNlKDApO1xuICB0aGlzLml0ZW1zID0gaXRlbXMuY29uY2F0KCBwcmV2aW91c0l0ZW1zICk7XG4gIC8vIHN0YXJ0IG5ldyBsYXlvdXRcbiAgdGhpcy5fcmVzZXRMYXlvdXQoKTtcbiAgdGhpcy5fbWFuYWdlU3RhbXBzKCk7XG4gIC8vIGxheW91dCBuZXcgc3R1ZmYgd2l0aG91dCB0cmFuc2l0aW9uXG4gIHRoaXMubGF5b3V0SXRlbXMoIGl0ZW1zLCB0cnVlICk7XG4gIHRoaXMucmV2ZWFsKCBpdGVtcyApO1xuICAvLyBsYXlvdXQgcHJldmlvdXMgaXRlbXNcbiAgdGhpcy5sYXlvdXRJdGVtcyggcHJldmlvdXNJdGVtcyApO1xufTtcblxuLyoqXG4gKiByZXZlYWwgYSBjb2xsZWN0aW9uIG9mIGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5IG9mIE91dGxheWVyLkl0ZW1zfSBpdGVtc1xuICovXG5wcm90by5yZXZlYWwgPSBmdW5jdGlvbiggaXRlbXMgKSB7XG4gIHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoICdyZXZlYWwnLCBpdGVtcyApO1xuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgc3RhZ2dlciA9IHRoaXMudXBkYXRlU3RhZ2dlcigpO1xuICBpdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSwgaSApIHtcbiAgICBpdGVtLnN0YWdnZXIoIGkgKiBzdGFnZ2VyICk7XG4gICAgaXRlbS5yZXZlYWwoKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIGhpZGUgYSBjb2xsZWN0aW9uIG9mIGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5IG9mIE91dGxheWVyLkl0ZW1zfSBpdGVtc1xuICovXG5wcm90by5oaWRlID0gZnVuY3Rpb24oIGl0ZW1zICkge1xuICB0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKCAnaGlkZScsIGl0ZW1zICk7XG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBzdGFnZ2VyID0gdGhpcy51cGRhdGVTdGFnZ2VyKCk7XG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtLCBpICkge1xuICAgIGl0ZW0uc3RhZ2dlciggaSAqIHN0YWdnZXIgKTtcbiAgICBpdGVtLmhpZGUoKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIHJldmVhbCBpdGVtIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5fSwge0VsZW1lbnR9LCB7Tm9kZUxpc3R9IGl0ZW1zXG4gKi9cbnByb3RvLnJldmVhbEl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5nZXRJdGVtcyggZWxlbXMgKTtcbiAgdGhpcy5yZXZlYWwoIGl0ZW1zICk7XG59O1xuXG4vKipcbiAqIGhpZGUgaXRlbSBlbGVtZW50c1xuICogQHBhcmFtIHtBcnJheX0sIHtFbGVtZW50fSwge05vZGVMaXN0fSBpdGVtc1xuICovXG5wcm90by5oaWRlSXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCBlbGVtcyApO1xuICB0aGlzLmhpZGUoIGl0ZW1zICk7XG59O1xuXG4vKipcbiAqIGdldCBPdXRsYXllci5JdGVtLCBnaXZlbiBhbiBFbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICovXG5wcm90by5nZXRJdGVtID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIC8vIGxvb3AgdGhyb3VnaCBpdGVtcyB0byBnZXQgdGhlIG9uZSB0aGF0IG1hdGNoZXNcbiAgZm9yICggdmFyIGk9MDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgIGlmICggaXRlbS5lbGVtZW50ID09IGVsZW0gKSB7XG4gICAgICAvLyByZXR1cm4gaXRlbVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIGdldCBjb2xsZWN0aW9uIG9mIE91dGxheWVyLkl0ZW1zLCBnaXZlbiBFbGVtZW50c1xuICogQHBhcmFtIHtBcnJheX0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBPdXRsYXllci5JdGVtc1xuICovXG5wcm90by5nZXRJdGVtcyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gIHZhciBpdGVtcyA9IFtdO1xuICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbSggZWxlbSApO1xuICAgIGlmICggaXRlbSApIHtcbiAgICAgIGl0ZW1zLnB1c2goIGl0ZW0gKTtcbiAgICB9XG4gIH0sIHRoaXMgKTtcblxuICByZXR1cm4gaXRlbXM7XG59O1xuXG4vKipcbiAqIHJlbW92ZSBlbGVtZW50KHMpIGZyb20gaW5zdGFuY2UgYW5kIERPTVxuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBFbGVtZW50fSBlbGVtc1xuICovXG5wcm90by5yZW1vdmUgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciByZW1vdmVJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoIGVsZW1zICk7XG5cbiAgdGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyggJ3JlbW92ZScsIHJlbW92ZUl0ZW1zICk7XG5cbiAgLy8gYmFpbCBpZiBubyBpdGVtcyB0byByZW1vdmVcbiAgaWYgKCAhcmVtb3ZlSXRlbXMgfHwgIXJlbW92ZUl0ZW1zLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZW1vdmVJdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICBpdGVtLnJlbW92ZSgpO1xuICAgIC8vIHJlbW92ZSBpdGVtIGZyb20gY29sbGVjdGlvblxuICAgIHV0aWxzLnJlbW92ZUZyb20oIHRoaXMuaXRlbXMsIGl0ZW0gKTtcbiAgfSwgdGhpcyApO1xufTtcblxuLy8gLS0tLS0gZGVzdHJveSAtLS0tLSAvL1xuXG4vLyByZW1vdmUgYW5kIGRpc2FibGUgT3V0bGF5ZXIgaW5zdGFuY2VcbnByb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2xlYW4gdXAgZHluYW1pYyBzdHlsZXNcbiAgdmFyIHN0eWxlID0gdGhpcy5lbGVtZW50LnN0eWxlO1xuICBzdHlsZS5oZWlnaHQgPSAnJztcbiAgc3R5bGUucG9zaXRpb24gPSAnJztcbiAgc3R5bGUud2lkdGggPSAnJztcbiAgLy8gZGVzdHJveSBpdGVtc1xuICB0aGlzLml0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0uZGVzdHJveSgpO1xuICB9KTtcblxuICB0aGlzLnVuYmluZFJlc2l6ZSgpO1xuXG4gIHZhciBpZCA9IHRoaXMuZWxlbWVudC5vdXRsYXllckdVSUQ7XG4gIGRlbGV0ZSBpbnN0YW5jZXNbIGlkIF07IC8vIHJlbW92ZSByZWZlcmVuY2UgdG8gaW5zdGFuY2UgYnkgaWRcbiAgZGVsZXRlIHRoaXMuZWxlbWVudC5vdXRsYXllckdVSUQ7XG4gIC8vIHJlbW92ZSBkYXRhIGZvciBqUXVlcnlcbiAgaWYgKCBqUXVlcnkgKSB7XG4gICAgalF1ZXJ5LnJlbW92ZURhdGEoIHRoaXMuZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lc3BhY2UgKTtcbiAgfVxuXG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkYXRhIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogZ2V0IE91dGxheWVyIGluc3RhbmNlIGZyb20gZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcmV0dXJucyB7T3V0bGF5ZXJ9XG4gKi9cbk91dGxheWVyLmRhdGEgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgZWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbSApO1xuICB2YXIgaWQgPSBlbGVtICYmIGVsZW0ub3V0bGF5ZXJHVUlEO1xuICByZXR1cm4gaWQgJiYgaW5zdGFuY2VzWyBpZCBdO1xufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjcmVhdGUgT3V0bGF5ZXIgY2xhc3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBjcmVhdGUgYSBsYXlvdXQgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqL1xuT3V0bGF5ZXIuY3JlYXRlID0gZnVuY3Rpb24oIG5hbWVzcGFjZSwgb3B0aW9ucyApIHtcbiAgLy8gc3ViLWNsYXNzIE91dGxheWVyXG4gIHZhciBMYXlvdXQgPSBzdWJjbGFzcyggT3V0bGF5ZXIgKTtcbiAgLy8gYXBwbHkgbmV3IG9wdGlvbnMgYW5kIGNvbXBhdE9wdGlvbnNcbiAgTGF5b3V0LmRlZmF1bHRzID0gdXRpbHMuZXh0ZW5kKCB7fSwgT3V0bGF5ZXIuZGVmYXVsdHMgKTtcbiAgdXRpbHMuZXh0ZW5kKCBMYXlvdXQuZGVmYXVsdHMsIG9wdGlvbnMgKTtcbiAgTGF5b3V0LmNvbXBhdE9wdGlvbnMgPSB1dGlscy5leHRlbmQoIHt9LCBPdXRsYXllci5jb21wYXRPcHRpb25zICApO1xuXG4gIExheW91dC5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cbiAgTGF5b3V0LmRhdGEgPSBPdXRsYXllci5kYXRhO1xuXG4gIC8vIHN1Yi1jbGFzcyBJdGVtXG4gIExheW91dC5JdGVtID0gc3ViY2xhc3MoIEl0ZW0gKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZWNsYXJhdGl2ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIHV0aWxzLmh0bWxJbml0KCBMYXlvdXQsIG5hbWVzcGFjZSApO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGpRdWVyeSBicmlkZ2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBtYWtlIGludG8galF1ZXJ5IHBsdWdpblxuICBpZiAoIGpRdWVyeSAmJiBqUXVlcnkuYnJpZGdldCApIHtcbiAgICBqUXVlcnkuYnJpZGdldCggbmFtZXNwYWNlLCBMYXlvdXQgKTtcbiAgfVxuXG4gIHJldHVybiBMYXlvdXQ7XG59O1xuXG5mdW5jdGlvbiBzdWJjbGFzcyggUGFyZW50ICkge1xuICBmdW5jdGlvbiBTdWJDbGFzcygpIHtcbiAgICBQYXJlbnQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICB9XG5cbiAgU3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUGFyZW50LnByb3RvdHlwZSApO1xuICBTdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdWJDbGFzcztcblxuICByZXR1cm4gU3ViQ2xhc3M7XG59XG5cbi8vIC0tLS0tIGhlbHBlcnMgLS0tLS0gLy9cblxuLy8gaG93IG1hbnkgbWlsbGlzZWNvbmRzIGFyZSBpbiBlYWNoIHVuaXRcbnZhciBtc1VuaXRzID0ge1xuICBtczogMSxcbiAgczogMTAwMFxufTtcblxuLy8gbXVuZ2UgdGltZS1saWtlIHBhcmFtZXRlciBpbnRvIG1pbGxpc2Vjb25kIG51bWJlclxuLy8gJzAuNHMnIC0+IDQwXG5mdW5jdGlvbiBnZXRNaWxsaXNlY29uZHMoIHRpbWUgKSB7XG4gIGlmICggdHlwZW9mIHRpbWUgPT0gJ251bWJlcicgKSB7XG4gICAgcmV0dXJuIHRpbWU7XG4gIH1cbiAgdmFyIG1hdGNoZXMgPSB0aW1lLm1hdGNoKCAvKF5cXGQqXFwuP1xcZCopKFxcdyopLyApO1xuICB2YXIgbnVtID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzFdO1xuICB2YXIgdW5pdCA9IG1hdGNoZXMgJiYgbWF0Y2hlc1syXTtcbiAgaWYgKCAhbnVtLmxlbmd0aCApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBudW0gPSBwYXJzZUZsb2F0KCBudW0gKTtcbiAgdmFyIG11bHQgPSBtc1VuaXRzWyB1bml0IF0gfHwgMTtcbiAgcmV0dXJuIG51bSAqIG11bHQ7XG59XG5cbi8vIC0tLS0tIGZpbiAtLS0tLSAvL1xuXG4vLyBiYWNrIGluIGdsb2JhbFxuT3V0bGF5ZXIuSXRlbSA9IEl0ZW07XG5cbnJldHVybiBPdXRsYXllcjtcblxufSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==