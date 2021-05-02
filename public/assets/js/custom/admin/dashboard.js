(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return require("moment"); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define(["moment"], factory);
	else if(typeof exports === 'object')
		exports["kngell"] = factory((function webpackLoadOptionalExternalModule() { try { return require("moment"); } catch(e) {} }()));
	else
		root["kngell"] = factory(root["moment"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_moment__) {
return (self["webpackChunkkngell"] = self["webpackChunkkngell"] || []).push([["js/custom/admin/dashboard"],{

/***/ "./src/assets/js/custom/admin/dashboard/index.js":
/*!*******************************************************!*\
  !*** ./src/assets/js/custom/admin/dashboard/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var plugins_flexadmin_js_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! plugins/flexadmin/js/dashboard_ecommerce */ "./src/assets/plugins/flexadmin/js/dashboard_ecommerce.js");


/***/ }),

/***/ "./src/assets/plugins/flexadmin/js/dashboard_ecommerce.js":
/*!****************************************************************!*\
  !*** ./src/assets/plugins/flexadmin/js/dashboard_ecommerce.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js");
/* harmony import */ var plugins_modules_jqvmap_jquery_vmap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! plugins/modules/jqvmap/jquery.vmap */ "./src/assets/plugins/modules/jqvmap/jquery.vmap.js");
/* harmony import */ var plugins_modules_jqvmap_maps_jquery_vmap_world_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! plugins/modules/jqvmap/maps/jquery.vmap.world.js */ "./src/assets/plugins/modules/jqvmap/maps/jquery.vmap.world.js");
/* harmony import */ var plugins_modules_jqvmap_maps_jquery_vmap_world_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(plugins_modules_jqvmap_maps_jquery_vmap_world_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chart_chartjs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart/chartjs.js */ "./src/assets/plugins/flexadmin/js/chart/chartjs.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");







var DemoDashboardEcommerce = /*#__PURE__*/function () {
  function DemoDashboardEcommerce() {
    (0,_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, DemoDashboardEcommerce);

    (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, "_applyChart", function () {
      var chart = new _chart_chartjs_js__WEBPACK_IMPORTED_MODULE_5__.default();
      chart.lineChart("dashboard-line-chartjs");
      chart.doughnutChart("dashboard-doughnut-chartjs");
      chart.progressBarChart("dashboard-progress-bar-chartjs");
      chart.barChart("dashboard-bar-chartjs");
    });

    (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, "_applyDataTable", function () {
      var element = document.getElementById("ecommerce-datatable");
      if (!element) return false;
      var table = $(element).DataTable({
        responsive: true,
        pageLength: 10,
        order: [],
        columnDefs: [{
          targets: "no-sort",
          orderable: false
        }]
      });
    });

    (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, "_applyMap", function () {
      var activeColor = window.colors.blue;
      var selectedCountries = ["us", "ru"];
      var colors = {
        us: activeColor,
        ru: activeColor,
        au: activeColor
      };
      $("#world_map").vectorMap((0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({
        map: "world_en",
        backgroundColor: "transparent",
        borderColor: "#818181",
        borderOpacity: 0.25,
        borderWidth: 1,
        color: window.colors.gray,
        enableZoom: true,
        hoverColor: "#ccc",
        hoverOpacity: null,
        normalizeFunction: "linear",
        scaleColors: ["#b6d6ff", "#005ace"],
        selectedColor: "#c9dfaf",
        selectedRegions: null,
        showTooltip: true,
        colors: colors
      }, "hoverOpacity", 0.7));
    });
  }

  (0,_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(DemoDashboardEcommerce, [{
    key: "init",
    value: function init() {
      this._applyChart();

      this._applyDataTable();

      this._applyMap();
    }
  }]);

  return DemoDashboardEcommerce;
}();

new DemoDashboardEcommerce().init();

/***/ }),

/***/ "./src/assets/plugins/modules/jqvmap/jquery.vmap.js":
/*!**********************************************************!*\
  !*** ./src/assets/plugins/modules/jqvmap/jquery.vmap.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/values */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/values.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/bind */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-timeout */ "./node_modules/@babel/runtime-corejs3/core-js-stable/set-timeout.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/parse-float */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-float.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_10__);
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");












/*!
 * JQVMap: jQuery Vector Map Library
 * @author JQVMap <me@peterschmalfeldt.com>
 * @version 1.5.1
 * @link http://jqvmap.com
 * @license https://github.com/manifestinteractive/jqvmap/blob/master/LICENSE
 * @builddate 2016/06/02
 */
var VectorCanvas = function VectorCanvas(width, height, params) {
  this.mode = window.SVGAngle ? 'svg' : 'vml';
  this.params = params;

  if (this.mode === 'svg') {
    this.createSvgNode = function (nodeName) {
      return document.createElementNS(this.svgns, nodeName);
    };
  } else {
    try {
      if (!document.namespaces.rvml) {
        document.namespaces.add('rvml', 'urn:schemas-microsoft-com:vml');
      }

      this.createVmlNode = function (tagName) {
        return document.createElement('<rvml:' + tagName + ' class="rvml">');
      };
    } catch (e) {
      this.createVmlNode = function (tagName) {
        return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
      };
    }

    document.createStyleSheet().addRule('.rvml', 'behavior:url(#default#VML)');
  }

  if (this.mode === 'svg') {
    this.canvas = this.createSvgNode('svg');
  } else {
    this.canvas = this.createVmlNode('group');
    this.canvas.style.position = 'absolute';
  }

  this.setSize(width, height);
};

VectorCanvas.prototype = {
  svgns: 'http://www.w3.org/2000/svg',
  mode: 'svg',
  width: 0,
  height: 0,
  canvas: null
};

var ColorScale = function ColorScale(colors, normalizeFunction, minValue, maxValue) {
  if (colors) {
    this.setColors(colors);
  }

  if (normalizeFunction) {
    this.setNormalizeFunction(normalizeFunction);
  }

  if (minValue) {
    this.setMin(minValue);
  }

  if (minValue) {
    this.setMax(maxValue);
  }
};

ColorScale.prototype = {
  colors: []
};

var JQVMap = function JQVMap(params) {
  params = params || {};
  var map = this;

  var mapData = JQVMap.maps[_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(params)];

  var mapPins;

  if (!mapData) {
    throw new Error('Invalid "' + _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(params) + '" map parameter. Please make sure you have loaded this map file in your HTML.');
  }

  this.selectedRegions = [];
  this.multiSelectRegion = params.multiSelectRegion;
  this.container = params.container;
  this.defaultWidth = mapData.width;
  this.defaultHeight = mapData.height;
  this.color = params.color;
  this.selectedColor = params.selectedColor;
  this.hoverColor = params.hoverColor;
  this.hoverColors = params.hoverColors;
  this.hoverOpacity = params.hoverOpacity;
  this.setBackgroundColor(params.backgroundColor);
  this.width = params.container.width();
  this.height = params.container.height();
  this.resize();
  jQuery(window).resize(function () {
    var newWidth = params.container.width();
    var newHeight = params.container.height();

    if (newWidth && newHeight) {
      map.width = newWidth;
      map.height = newHeight;
      map.resize();
      map.canvas.setSize(map.width, map.height);
      map.applyTransform();
      var resizeEvent = jQuery.Event('resize.jqvmap');
      jQuery(params.container).trigger(resizeEvent, [newWidth, newHeight]);

      if (mapPins) {
        jQuery('.jqvmap-pin').remove();
        map.pinHandlers = false;
        map.placePins(mapPins.pins, mapPins.mode);
      }
    }
  });
  this.canvas = new VectorCanvas(this.width, this.height, params);
  params.container.append(this.canvas.canvas);
  this.makeDraggable();
  this.rootGroup = this.canvas.createGroup(true);
  this.index = JQVMap.mapIndex;
  this.label = jQuery('<div/>').addClass('jqvmap-label').appendTo(jQuery('body')).hide();

  if (params.enableZoom) {
    jQuery('<div/>').addClass('jqvmap-zoomin').text('+').appendTo(params.container);
    jQuery('<div/>').addClass('jqvmap-zoomout').html('&#x2212;').appendTo(params.container);
  }

  map.countries = [];

  for (var key in mapData.paths) {
    var path = this.canvas.createPath({
      path: mapData.paths[key].path
    });
    path.setFill(this.color);
    path.id = map.getCountryId(key);
    map.countries[key] = path;

    if (this.canvas.mode === 'svg') {
      path.setAttribute('class', 'jqvmap-region');
    } else {
      jQuery(path).addClass('jqvmap-region');
    }

    jQuery(this.rootGroup).append(path);
  }

  jQuery(params.container).delegate(this.canvas.mode === 'svg' ? 'path' : 'shape', 'mouseover mouseout', function (e) {
    var containerPath = e.target,
        code = e.target.id.split('_').pop(),
        labelShowEvent = jQuery.Event('labelShow.jqvmap'),
        regionMouseOverEvent = jQuery.Event('regionMouseOver.jqvmap');
    code = code.toLowerCase();

    if (e.type === 'mouseover') {
      jQuery(params.container).trigger(regionMouseOverEvent, [code, mapData.paths[code].name]);

      if (!regionMouseOverEvent.isDefaultPrevented()) {
        map.highlight(code, containerPath);
      }

      if (params.showTooltip) {
        map.label.text(mapData.paths[code].name);
        jQuery(params.container).trigger(labelShowEvent, [map.label, code]);

        if (!labelShowEvent.isDefaultPrevented()) {
          map.label.show();
          map.labelWidth = map.label.width();
          map.labelHeight = map.label.height();
        }
      }
    } else {
      map.unhighlight(code, containerPath);
      map.label.hide();
      jQuery(params.container).trigger('regionMouseOut.jqvmap', [code, mapData.paths[code].name]);
    }
  });
  jQuery(params.container).delegate(this.canvas.mode === 'svg' ? 'path' : 'shape', 'click', function (regionClickEvent) {
    var targetPath = regionClickEvent.target;
    var code = regionClickEvent.target.id.split('_').pop();
    var mapClickEvent = jQuery.Event('regionClick.jqvmap');
    code = code.toLowerCase();
    jQuery(params.container).trigger(mapClickEvent, [code, mapData.paths[code].name]);

    if (!params.multiSelectRegion && !mapClickEvent.isDefaultPrevented()) {
      for (var keyPath in mapData.paths) {
        map.countries[keyPath].currentFillColor = map.countries[keyPath].getOriginalFill();
        map.countries[keyPath].setFill(map.countries[keyPath].getOriginalFill());
      }
    }

    if (!mapClickEvent.isDefaultPrevented()) {
      if (map.isSelected(code)) {
        map.deselect(code, targetPath);
      } else {
        map.select(code, targetPath);
      }
    }
  });

  if (params.showTooltip) {
    params.container.mousemove(function (e) {
      if (map.label.is(':visible')) {
        var left = e.pageX - 15 - map.labelWidth;
        var top = e.pageY - 15 - map.labelHeight;

        if (left < 0) {
          left = e.pageX + 15;
        }

        if (top < 0) {
          top = e.pageY + 15;
        }

        map.label.css({
          left: left,
          top: top
        });
      }
    });
  }

  this.setColors(params.colors);
  this.canvas.canvas.appendChild(this.rootGroup);
  this.applyTransform();
  this.colorScale = new ColorScale(params.scaleColors, params.normalizeFunction, params.valueMin, params.valueMax);

  if (_babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_1___default()(params)) {
    this.values = _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_1___default()(params);
    this.setValues(_babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_1___default()(params));
  }

  if (params.selectedRegions) {
    if (params.selectedRegions instanceof Array) {
      for (var k in params.selectedRegions) {
        this.select(params.selectedRegions[k].toLowerCase());
      }
    } else {
      this.select(params.selectedRegions.toLowerCase());
    }
  }

  this.bindZoomButtons();

  if (params.pins) {
    mapPins = {
      pins: params.pins,
      mode: params.pinMode
    };
    this.pinHandlers = false;
    this.placePins(params.pins, params.pinMode);
  }

  if (params.showLabels) {
    this.pinHandlers = false;
    var pins = {};

    for (key in map.countries) {
      if (typeof map.countries[key] !== 'function') {
        if (!params.pins || !params.pins[key]) {
          pins[key] = key.toUpperCase();
        }
      }
    }

    mapPins = {
      pins: pins,
      mode: 'content'
    };
    this.placePins(pins, 'content');
  }

  JQVMap.mapIndex++;
};

JQVMap.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,
  width: 0,
  height: 0,
  countries: {},
  countriesColors: {},
  countriesData: {},
  zoomStep: 1.4,
  zoomMaxStep: 4,
  zoomCurStep: 1
};
JQVMap.xlink = 'http://www.w3.org/1999/xlink';
JQVMap.mapIndex = 1;
JQVMap.maps = {};

(function () {
  var apiParams = {
    colors: 1,
    values: 1,
    backgroundColor: 1,
    scaleColors: 1,
    normalizeFunction: 1,
    enableZoom: 1,
    showTooltip: 1,
    borderColor: 1,
    borderWidth: 1,
    borderOpacity: 1,
    selectedRegions: 1,
    multiSelectRegion: 1
  };
  var apiEvents = {
    onLabelShow: 'labelShow',
    onLoad: 'load',
    onRegionOver: 'regionMouseOver',
    onRegionOut: 'regionMouseOut',
    onRegionClick: 'regionClick',
    onRegionSelect: 'regionSelect',
    onRegionDeselect: 'regionDeselect',
    onResize: 'resize'
  };

  jQuery.fn.vectorMap = function (options) {
    var defaultParams = {
      map: 'world_en',
      backgroundColor: '#a5bfdd',
      color: '#f4f3f0',
      hoverColor: '#c9dfaf',
      hoverColors: {},
      selectedColor: '#c9dfaf',
      scaleColors: ['#b6d6ff', '#005ace'],
      normalizeFunction: 'linear',
      enableZoom: true,
      showTooltip: true,
      borderColor: '#818181',
      borderWidth: 1,
      borderOpacity: 0.25,
      selectedRegions: null,
      multiSelectRegion: false
    },
        map = this.data('mapObject');

    if (options === 'addMap') {
      JQVMap.maps[arguments[1]] = arguments[2];
    } else if (options === 'set' && apiParams[arguments[1]]) {
      map['set' + arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1)].apply(map, _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default()(Array.prototype).call(arguments, 2));
    } else if (typeof options === 'string' && typeof map[options] === 'function') {
      return map[options].apply(map, _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default()(Array.prototype).call(arguments, 1));
    } else {
      jQuery.extend(defaultParams, options);
      defaultParams.container = this;
      this.css({
        position: 'relative',
        overflow: 'hidden'
      });
      map = new JQVMap(defaultParams);
      this.data('mapObject', map);
      this.unbind('.jqvmap');

      for (var e in apiEvents) {
        if (defaultParams[e]) {
          var _context;

          _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_3___default()(_context = this).call(_context, apiEvents[e] + '.jqvmap', defaultParams[e]);
        }
      }

      var loadEvent = jQuery.Event('load.jqvmap');
      jQuery(defaultParams.container).trigger(loadEvent, map);
      return map;
    }
  };
})(jQuery);

ColorScale.arrayToRgb = function (ar) {
  var rgb = '#';
  var d;

  for (var i = 0; i < ar.length; i++) {
    d = ar[i].toString(16);
    rgb += d.length === 1 ? '0' + d : d;
  }

  return rgb;
};

ColorScale.prototype.getColor = function (value) {
  if (typeof this.normalize === 'function') {
    value = this.normalize(value);
  }

  var lengthes = [];
  var fullLength = 0;
  var l;

  for (var i = 0; i < this.colors.length - 1; i++) {
    l = this.vectorLength(this.vectorSubtract(this.colors[i + 1], this.colors[i]));
    lengthes.push(l);
    fullLength += l;
  }

  var c = (this.maxValue - this.minValue) / fullLength;

  for (i = 0; i < lengthes.length; i++) {
    lengthes[i] *= c;
  }

  i = 0;
  value -= this.minValue;

  while (value - lengthes[i] >= 0) {
    value -= lengthes[i];
    i++;
  }

  var color;

  if (i === this.colors.length - 1) {
    color = this.vectorToNum(this.colors[i]).toString(16);
  } else {
    color = this.vectorToNum(this.vectorAdd(this.colors[i], this.vectorMult(this.vectorSubtract(this.colors[i + 1], this.colors[i]), value / lengthes[i]))).toString(16);
  }

  while (color.length < 6) {
    color = '0' + color;
  }

  return '#' + color;
};

ColorScale.rgbToArray = function (rgb) {
  rgb = rgb.substr(1);
  return [_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_4___default()(rgb.substr(0, 2), 16), _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_4___default()(rgb.substr(2, 2), 16), _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_4___default()(rgb.substr(4, 2), 16)];
};

ColorScale.prototype.setColors = function (colors) {
  for (var i = 0; i < colors.length; i++) {
    colors[i] = ColorScale.rgbToArray(colors[i]);
  }

  this.colors = colors;
};

ColorScale.prototype.setMax = function (max) {
  this.clearMaxValue = max;

  if (typeof this.normalize === 'function') {
    this.maxValue = this.normalize(max);
  } else {
    this.maxValue = max;
  }
};

ColorScale.prototype.setMin = function (min) {
  this.clearMinValue = min;

  if (typeof this.normalize === 'function') {
    this.minValue = this.normalize(min);
  } else {
    this.minValue = min;
  }
};

ColorScale.prototype.setNormalizeFunction = function (f) {
  if (f === 'polynomial') {
    this.normalize = function (value) {
      return Math.pow(value, 0.2);
    };
  } else if (f === 'linear') {
    delete this.normalize;
  } else {
    this.normalize = f;
  }

  this.setMin(this.clearMinValue);
  this.setMax(this.clearMaxValue);
};

ColorScale.prototype.vectorAdd = function (vector1, vector2) {
  var vector = [];

  for (var i = 0; i < vector1.length; i++) {
    vector[i] = vector1[i] + vector2[i];
  }

  return vector;
};

ColorScale.prototype.vectorLength = function (vector) {
  var result = 0;

  for (var i = 0; i < vector.length; i++) {
    result += vector[i] * vector[i];
  }

  return Math.sqrt(result);
};

ColorScale.prototype.vectorMult = function (vector, num) {
  var result = [];

  for (var i = 0; i < vector.length; i++) {
    result[i] = vector[i] * num;
  }

  return result;
};

ColorScale.prototype.vectorSubtract = function (vector1, vector2) {
  var vector = [];

  for (var i = 0; i < vector1.length; i++) {
    vector[i] = vector1[i] - vector2[i];
  }

  return vector;
};

ColorScale.prototype.vectorToNum = function (vector) {
  var num = 0;

  for (var i = 0; i < vector.length; i++) {
    num += Math.round(vector[i]) * Math.pow(256, vector.length - i - 1);
  }

  return num;
};

JQVMap.prototype.applyTransform = function () {
  var maxTransX, maxTransY, minTransX, minTransY;

  if (this.defaultWidth * this.scale <= this.width) {
    maxTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    minTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
  } else {
    maxTransX = 0;
    minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
  }

  if (this.defaultHeight * this.scale <= this.height) {
    maxTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    minTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
  } else {
    maxTransY = 0;
    minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
  }

  if (this.transY > maxTransY) {
    this.transY = maxTransY;
  } else if (this.transY < minTransY) {
    this.transY = minTransY;
  }

  if (this.transX > maxTransX) {
    this.transX = maxTransX;
  } else if (this.transX < minTransX) {
    this.transX = minTransX;
  }

  this.canvas.applyTransformParams(this.scale, this.transX, this.transY);
};

JQVMap.prototype.bindZoomButtons = function () {
  var _context2, _context3;

  var map = this;

  _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = this.container).call(_context2, '.jqvmap-zoomin').click(function () {
    map.zoomIn();
  });

  _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default()(_context3 = this.container).call(_context3, '.jqvmap-zoomout').click(function () {
    map.zoomOut();
  });
};

JQVMap.prototype.deselect = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];

  if (this.isSelected(cc)) {
    var _context4;

    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6___default()(_context4 = this.selectedRegions).call(_context4, this.selectIndex(cc), 1);

    jQuery(this.container).trigger('regionDeselect.jqvmap', [cc]);
    path.currentFillColor = path.getOriginalFill();
    path.setFill(path.getOriginalFill());
  } else {
    for (var key in this.countries) {
      var _context5, _context6;

      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6___default()(_context5 = this.selectedRegions).call(_context5, _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_7___default()(_context6 = this.selectedRegions).call(_context6, key), 1);

      this.countries[key].currentFillColor = this.color;
      this.countries[key].setFill(this.color);
    }
  }
};

JQVMap.prototype.getCountryId = function (cc) {
  return 'jqvmap' + this.index + '_' + cc;
};

JQVMap.prototype.getPin = function (cc) {
  var pinObj = jQuery('#' + this.getPinId(cc));
  return pinObj.html();
};

JQVMap.prototype.getPinId = function (cc) {
  return this.getCountryId(cc) + '_pin';
};

JQVMap.prototype.getPins = function () {
  var _context7;

  var pins = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default()(_context7 = this.container).call(_context7, '.jqvmap-pin');

  var ret = {};
  jQuery.each(pins, function (index, pinObj) {
    pinObj = jQuery(pinObj);
    var cc = pinObj.attr('for').toLowerCase();
    var pinContent = pinObj.html();
    ret[cc] = pinContent;
  });
  return _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_8___default()(ret);
};

JQVMap.prototype.highlight = function (cc, path) {
  path = path || jQuery('#' + this.getCountryId(cc))[0];

  if (this.hoverOpacity) {
    path.setOpacity(this.hoverOpacity);
  } else if (this.hoverColors && cc in this.hoverColors) {
    path.currentFillColor = path.getFill() + '';
    path.setFill(this.hoverColors[cc]);
  } else if (this.hoverColor) {
    path.currentFillColor = path.getFill() + '';
    path.setFill(this.hoverColor);
  }
};

JQVMap.prototype.isSelected = function (cc) {
  return this.selectIndex(cc) >= 0;
};

JQVMap.prototype.makeDraggable = function () {
  var _context8, _context9, _context10;

  var mouseDown = false;
  var oldPageX, oldPageY;
  var self = this;
  self.isMoving = false;
  self.isMovingTimeout = false;
  var lastTouchCount;
  var touchCenterX;
  var touchCenterY;
  var touchStartDistance;
  var touchStartScale;
  var touchX;
  var touchY;
  this.container.mousemove(function (e) {
    if (mouseDown) {
      self.transX -= (oldPageX - e.pageX) / self.scale;
      self.transY -= (oldPageY - e.pageY) / self.scale;
      self.applyTransform();
      oldPageX = e.pageX;
      oldPageY = e.pageY;
      self.isMoving = true;

      if (self.isMovingTimeout) {
        clearTimeout(self.isMovingTimeout);
      }

      self.container.trigger('drag');
    }

    return false;
  }).mousedown(function (e) {
    mouseDown = true;
    oldPageX = e.pageX;
    oldPageY = e.pageY;
    return false;
  }).mouseup(function () {
    mouseDown = false;
    clearTimeout(self.isMovingTimeout);
    self.isMovingTimeout = _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_9___default()(function () {
      self.isMoving = false;
    }, 100);
    return false;
  }).mouseout(function () {
    if (mouseDown && self.isMoving) {
      clearTimeout(self.isMovingTimeout);
      self.isMovingTimeout = _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_9___default()(function () {
        mouseDown = false;
        self.isMoving = false;
      }, 100);
      return false;
    }
  });

  _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_3___default()(_context8 = jQuery(this.container)).call(_context8, 'touchmove', function (e) {
    var offset;
    var scale;
    var touches = e.originalEvent.touches;
    var transformXOld;
    var transformYOld;

    if (touches.length === 1) {
      if (lastTouchCount === 1) {
        if (touchX === touches[0].pageX && touchY === touches[0].pageY) {
          return;
        }

        transformXOld = self.transX;
        transformYOld = self.transY;
        self.transX -= (touchX - touches[0].pageX) / self.scale;
        self.transY -= (touchY - touches[0].pageY) / self.scale;
        self.applyTransform();

        if (transformXOld !== self.transX || transformYOld !== self.transY) {
          e.preventDefault();
        }

        self.isMoving = true;

        if (self.isMovingTimeout) {
          clearTimeout(self.isMovingTimeout);
        }
      }

      touchX = touches[0].pageX;
      touchY = touches[0].pageY;
    } else if (touches.length === 2) {
      if (lastTouchCount === 2) {
        scale = Math.sqrt(Math.pow(touches[0].pageX - touches[1].pageX, 2) + Math.pow(touches[0].pageY - touches[1].pageY, 2)) / touchStartDistance;
        self.setScale(touchStartScale * scale, touchCenterX, touchCenterY);
        e.preventDefault();
      } else {
        offset = jQuery(self.container).offset();

        if (touches[0].pageX > touches[1].pageX) {
          touchCenterX = touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
        } else {
          touchCenterX = touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
        }

        if (touches[0].pageY > touches[1].pageY) {
          touchCenterY = touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
        } else {
          touchCenterY = touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
        }

        touchCenterX -= offset.left;
        touchCenterY -= offset.top;
        touchStartScale = self.scale;
        touchStartDistance = Math.sqrt(Math.pow(touches[0].pageX - touches[1].pageX, 2) + Math.pow(touches[0].pageY - touches[1].pageY, 2));
      }
    }

    lastTouchCount = touches.length;
  });

  _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_3___default()(_context9 = jQuery(this.container)).call(_context9, 'touchstart', function () {
    lastTouchCount = 0;
  });

  _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_3___default()(_context10 = jQuery(this.container)).call(_context10, 'touchend', function () {
    lastTouchCount = 0;
  });
};

JQVMap.prototype.placePins = function (pins, pinMode) {
  var map = this;

  if (!pinMode || pinMode !== 'content' && pinMode !== 'id') {
    pinMode = 'content';
  }

  if (pinMode === 'content') {
    //treat pin as content
    jQuery.each(pins, function (index, pin) {
      if (jQuery('#' + map.getCountryId(index)).length === 0) {
        return;
      }

      var pinIndex = map.getPinId(index);
      var $pin = jQuery('#' + pinIndex);

      if ($pin.length > 0) {
        $pin.remove();
      }

      map.container.append('<div id="' + pinIndex + '" for="' + index + '" class="jqvmap-pin" style="position:absolute">' + pin + '</div>');
    });
  } else {
    //treat pin as id of an html content
    jQuery.each(pins, function (index, pin) {
      if (jQuery('#' + map.getCountryId(index)).length === 0) {
        return;
      }

      var pinIndex = map.getPinId(index);
      var $pin = jQuery('#' + pinIndex);

      if ($pin.length > 0) {
        $pin.remove();
      }

      map.container.append('<div id="' + pinIndex + '" for="' + index + '" class="jqvmap-pin" style="position:absolute"></div>');
      $pin.append(jQuery('#' + pin));
    });
  }

  this.positionPins();

  if (!this.pinHandlers) {
    var _context11, _context12, _context13;

    this.pinHandlers = true;

    var positionFix = function positionFix() {
      map.positionPins();
    };

    _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_3___default()(_context11 = _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_3___default()(_context12 = _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_3___default()(_context13 = this.container).call(_context13, 'zoomIn', positionFix)).call(_context12, 'zoomOut', positionFix)).call(_context11, 'drag', positionFix);
  }
};

JQVMap.prototype.positionPins = function () {
  var _context14;

  var map = this;

  var pins = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default()(_context14 = this.container).call(_context14, '.jqvmap-pin');

  jQuery.each(pins, function (index, pinObj) {
    pinObj = jQuery(pinObj);
    var countryId = map.getCountryId(pinObj.attr('for').toLowerCase());
    var countryObj = jQuery('#' + countryId);
    var bbox = countryObj[0].getBBox();
    var scale = map.scale;
    var rootCoords = map.canvas.rootGroup.getBoundingClientRect();
    var mapCoords = map.container[0].getBoundingClientRect();
    var coords = {
      left: rootCoords.left - mapCoords.left,
      top: rootCoords.top - mapCoords.top
    };
    var middleX = bbox.x * scale + bbox.width * scale / 2;
    var middleY = bbox.y * scale + bbox.height * scale / 2;
    pinObj.css({
      left: coords.left + middleX - pinObj.width() / 2,
      top: coords.top + middleY - pinObj.height() / 2
    });
  });
};

JQVMap.prototype.removePin = function (cc) {
  cc = cc.toLowerCase();
  jQuery('#' + this.getPinId(cc)).remove();
};

JQVMap.prototype.removePins = function () {
  var _context15;

  _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default()(_context15 = this.container).call(_context15, '.jqvmap-pin').remove();
};

JQVMap.prototype.reset = function () {
  for (var key in this.countries) {
    this.countries[key].setFill(this.color);
  }

  this.scale = this.baseScale;
  this.transX = this.baseTransX;
  this.transY = this.baseTransY;
  this.applyTransform();
  this.zoomCurStep = 1;
};

JQVMap.prototype.resize = function () {
  var curBaseScale = this.baseScale;

  if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
    this.baseScale = this.height / this.defaultHeight;
    this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale);
  } else {
    this.baseScale = this.width / this.defaultWidth;
    this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale);
  }

  this.scale *= this.baseScale / curBaseScale;
  this.transX *= this.baseScale / curBaseScale;
  this.transY *= this.baseScale / curBaseScale;
};

JQVMap.prototype.select = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];

  if (!this.isSelected(cc)) {
    if (this.multiSelectRegion) {
      this.selectedRegions.push(cc);
    } else {
      this.selectedRegions = [cc];
    }

    jQuery(this.container).trigger('regionSelect.jqvmap', [cc]);

    if (this.selectedColor && path) {
      path.currentFillColor = this.selectedColor;
      path.setFill(this.selectedColor);
    }
  }
};

JQVMap.prototype.selectIndex = function (cc) {
  cc = cc.toLowerCase();

  for (var i = 0; i < this.selectedRegions.length; i++) {
    if (cc === this.selectedRegions[i]) {
      return i;
    }
  }

  return -1;
};

JQVMap.prototype.setBackgroundColor = function (backgroundColor) {
  this.container.css('background-color', backgroundColor);
};

JQVMap.prototype.setColors = function (key, color) {
  if (typeof key === 'string') {
    this.countries[key].setFill(color);
    this.countries[key].setAttribute('original', color);
  } else {
    var colors = key;

    for (var code in colors) {
      if (this.countries[code]) {
        this.countries[code].setFill(colors[code]);
        this.countries[code].setAttribute('original', colors[code]);
      }
    }
  }
};

JQVMap.prototype.setNormalizeFunction = function (f) {
  this.colorScale.setNormalizeFunction(f);

  if (_babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_1___default()(this)) {
    this.setValues(_babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_1___default()(this));
  }
};

JQVMap.prototype.setScale = function (scale) {
  this.scale = scale;
  this.applyTransform();
};

JQVMap.prototype.setScaleColors = function (colors) {
  this.colorScale.setColors(colors);

  if (_babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_1___default()(this)) {
    this.setValues(_babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_1___default()(this));
  }
};

JQVMap.prototype.setValues = function (values) {
  var max = 0,
      min = Number.MAX_VALUE,
      val;

  for (var cc in values) {
    cc = cc.toLowerCase();
    val = _babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_10___default()(values[cc]);

    if (isNaN(val)) {
      continue;
    }

    if (val > max) {
      max = values[cc];
    }

    if (val < min) {
      min = val;
    }
  }

  if (min === max) {
    max++;
  }

  this.colorScale.setMin(min);
  this.colorScale.setMax(max);
  var colors = {};

  for (cc in values) {
    cc = cc.toLowerCase();
    val = _babel_runtime_corejs3_core_js_stable_parse_float__WEBPACK_IMPORTED_MODULE_10___default()(values[cc]);
    colors[cc] = isNaN(val) ? this.color : this.colorScale.getColor(val);
  }

  this.setColors(colors);
  this.values = values;
};

JQVMap.prototype.unhighlight = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];
  path.setOpacity(1);

  if (path.currentFillColor) {
    path.setFill(path.currentFillColor);
  }
};

JQVMap.prototype.zoomIn = function () {
  var map = this;
  var sliderDelta = (jQuery('#zoom').innerHeight() - 6 * 2 - 15 * 2 - 3 * 2 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);

  if (map.zoomCurStep < map.zoomMaxStep) {
    map.transX -= (map.width / map.scale - map.width / (map.scale * map.zoomStep)) / 2;
    map.transY -= (map.height / map.scale - map.height / (map.scale * map.zoomStep)) / 2;
    map.setScale(map.scale * map.zoomStep);
    map.zoomCurStep++;
    var $slider = jQuery('#zoomSlider');
    $slider.css('top', _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_4___default()($slider.css('top'), 10) - sliderDelta);
    map.container.trigger('zoomIn');
  }
};

JQVMap.prototype.zoomOut = function () {
  var map = this;
  var sliderDelta = (jQuery('#zoom').innerHeight() - 6 * 2 - 15 * 2 - 3 * 2 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);

  if (map.zoomCurStep > 1) {
    map.transX += (map.width / (map.scale / map.zoomStep) - map.width / map.scale) / 2;
    map.transY += (map.height / (map.scale / map.zoomStep) - map.height / map.scale) / 2;
    map.setScale(map.scale / map.zoomStep);
    map.zoomCurStep--;
    var $slider = jQuery('#zoomSlider');
    $slider.css('top', _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_4___default()($slider.css('top'), 10) + sliderDelta);
    map.container.trigger('zoomOut');
  }
};

VectorCanvas.prototype.applyTransformParams = function (scale, transX, transY) {
  if (this.mode === 'svg') {
    this.rootGroup.setAttribute('transform', 'scale(' + scale + ') translate(' + transX + ', ' + transY + ')');
  } else {
    this.rootGroup.coordorigin = this.width - transX + ',' + (this.height - transY);
    this.rootGroup.coordsize = this.width / scale + ',' + this.height / scale;
  }
};

VectorCanvas.prototype.createGroup = function (isRoot) {
  var node;

  if (this.mode === 'svg') {
    node = this.createSvgNode('g');
  } else {
    node = this.createVmlNode('group');
    node.style.width = this.width + 'px';
    node.style.height = this.height + 'px';
    node.style.left = '0px';
    node.style.top = '0px';
    node.coordorigin = '0 0';
    node.coordsize = this.width + ' ' + this.height;
  }

  if (isRoot) {
    this.rootGroup = node;
  }

  return node;
};

VectorCanvas.prototype.createPath = function (config) {
  var node;

  if (this.mode === 'svg') {
    node = this.createSvgNode('path');
    node.setAttribute('d', config.path);

    if (this.params.borderColor !== null) {
      node.setAttribute('stroke', this.params.borderColor);
    }

    if (this.params.borderWidth > 0) {
      node.setAttribute('stroke-width', this.params.borderWidth);
      node.setAttribute('stroke-linecap', 'round');
      node.setAttribute('stroke-linejoin', 'round');
    }

    if (this.params.borderOpacity > 0) {
      node.setAttribute('stroke-opacity', this.params.borderOpacity);
    }

    node.setFill = function (color) {
      this.setAttribute('fill', color);

      if (this.getAttribute('original') === null) {
        this.setAttribute('original', color);
      }
    };

    node.getFill = function () {
      return this.getAttribute('fill');
    };

    node.getOriginalFill = function () {
      return this.getAttribute('original');
    };

    node.setOpacity = function (opacity) {
      this.setAttribute('fill-opacity', opacity);
    };
  } else {
    node = this.createVmlNode('shape');
    node.coordorigin = '0 0';
    node.coordsize = this.width + ' ' + this.height;
    node.style.width = this.width + 'px';
    node.style.height = this.height + 'px';
    node.fillcolor = JQVMap.defaultFillColor;
    node.stroked = false;
    node.path = VectorCanvas.pathSvgToVml(config.path);
    var scale = this.createVmlNode('skew');
    scale.on = true;
    scale.matrix = '0.01,0,0,0.01,0,0';
    scale.offset = '0,0';
    node.appendChild(scale);
    var fill = this.createVmlNode('fill');
    node.appendChild(fill);

    node.setFill = function (color) {
      this.getElementsByTagName('fill')[0].color = color;

      if (this.getAttribute('original') === null) {
        this.setAttribute('original', color);
      }
    };

    node.getFill = function () {
      return this.getElementsByTagName('fill')[0].color;
    };

    node.getOriginalFill = function () {
      return this.getAttribute('original');
    };

    node.setOpacity = function (opacity) {
      this.getElementsByTagName('fill')[0].opacity = _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_4___default()(opacity * 100, 10) + '%';
    };
  }

  return node;
};

VectorCanvas.prototype.pathSvgToVml = function (path) {
  var result = '';
  var cx = 0,
      cy = 0,
      ctrlx,
      ctrly;
  return path.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g, function (segment, letter, coords) {
    coords = coords.replace(/(\d)-/g, '$1,-').replace(/\s+/g, ',').split(',');

    if (!coords[0]) {
      coords.shift();
    }

    for (var i = 0, l = coords.length; i < l; i++) {
      coords[i] = Math.round(100 * coords[i]);
    }

    switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        result = 't' + coords.join(',');
        break;

      case 'M':
        cx = coords[0];
        cy = coords[1];
        result = 'm' + coords.join(',');
        break;

      case 'l':
        cx += coords[0];
        cy += coords[1];
        result = 'r' + coords.join(',');
        break;

      case 'L':
        cx = coords[0];
        cy = coords[1];
        result = 'l' + coords.join(',');
        break;

      case 'h':
        cx += coords[0];
        result = 'r' + coords[0] + ',0';
        break;

      case 'H':
        cx = coords[0];
        result = 'l' + cx + ',' + cy;
        break;

      case 'v':
        cy += coords[0];
        result = 'r0,' + coords[0];
        break;

      case 'V':
        cy = coords[0];
        result = 'l' + cx + ',' + cy;
        break;

      case 'c':
        ctrlx = cx + coords[coords.length - 4];
        ctrly = cy + coords[coords.length - 3];
        cx += coords[coords.length - 2];
        cy += coords[coords.length - 1];
        result = 'v' + coords.join(',');
        break;

      case 'C':
        ctrlx = coords[coords.length - 4];
        ctrly = coords[coords.length - 3];
        cx = coords[coords.length - 2];
        cy = coords[coords.length - 1];
        result = 'c' + coords.join(',');
        break;

      case 's':
        coords.unshift(cy - ctrly);
        coords.unshift(cx - ctrlx);
        ctrlx = cx + coords[coords.length - 4];
        ctrly = cy + coords[coords.length - 3];
        cx += coords[coords.length - 2];
        cy += coords[coords.length - 1];
        result = 'v' + coords.join(',');
        break;

      case 'S':
        coords.unshift(cy + cy - ctrly);
        coords.unshift(cx + cx - ctrlx);
        ctrlx = coords[coords.length - 4];
        ctrly = coords[coords.length - 3];
        cx = coords[coords.length - 2];
        cy = coords[coords.length - 1];
        result = 'c' + coords.join(',');
        break;

      default:
        break;
    }

    return result;
  }).replace(/z/g, '');
};

VectorCanvas.prototype.setSize = function (width, height) {
  if (this.mode === 'svg') {
    this.canvas.setAttribute('width', width);
    this.canvas.setAttribute('height', height);
  } else {
    this.canvas.style.width = width + 'px';
    this.canvas.style.height = height + 'px';
    this.canvas.coordsize = width + ' ' + height;
    this.canvas.coordorigin = '0 0';

    if (this.rootGroup) {
      var paths = this.rootGroup.getElementsByTagName('shape');

      for (var i = 0, l = paths.length; i < l; i++) {
        paths[i].coordsize = width + ' ' + height;
        paths[i].style.width = width + 'px';
        paths[i].style.height = height + 'px';
      }

      this.rootGroup.coordsize = width + ' ' + height;
      this.rootGroup.style.width = width + 'px';
      this.rootGroup.style.height = height + 'px';
    }
  }

  this.width = width;
  this.height = height;
};

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_moment__ === 'undefined') { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;

/***/ })

},
0,[["./src/assets/js/custom/admin/dashboard/index.js","commons/backend/admin/commonVendor","commons/backend/admin/commonCustomModules","js/librairies/adminlib"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGx1Z2lucy9mbGV4YWRtaW4vanMvZGFzaGJvYXJkX2Vjb21tZXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BsdWdpbnMvbW9kdWxlcy9qcXZtYXAvanF1ZXJ5LnZtYXAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiXSwibmFtZXMiOlsiRGVtb0Rhc2hib2FyZEVjb21tZXJjZSIsImNoYXJ0IiwiQ2hhcnRqcyIsImxpbmVDaGFydCIsImRvdWdobnV0Q2hhcnQiLCJwcm9ncmVzc0JhckNoYXJ0IiwiYmFyQ2hhcnQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRhYmxlIiwiJCIsIkRhdGFUYWJsZSIsInJlc3BvbnNpdmUiLCJwYWdlTGVuZ3RoIiwib3JkZXIiLCJjb2x1bW5EZWZzIiwidGFyZ2V0cyIsIm9yZGVyYWJsZSIsImFjdGl2ZUNvbG9yIiwid2luZG93IiwiY29sb3JzIiwiYmx1ZSIsInNlbGVjdGVkQ291bnRyaWVzIiwidXMiLCJydSIsImF1IiwidmVjdG9yTWFwIiwibWFwIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJPcGFjaXR5IiwiYm9yZGVyV2lkdGgiLCJjb2xvciIsImdyYXkiLCJlbmFibGVab29tIiwiaG92ZXJDb2xvciIsImhvdmVyT3BhY2l0eSIsIm5vcm1hbGl6ZUZ1bmN0aW9uIiwic2NhbGVDb2xvcnMiLCJzZWxlY3RlZENvbG9yIiwic2VsZWN0ZWRSZWdpb25zIiwic2hvd1Rvb2x0aXAiLCJfYXBwbHlDaGFydCIsIl9hcHBseURhdGFUYWJsZSIsIl9hcHBseU1hcCIsImluaXQiLCJWZWN0b3JDYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInBhcmFtcyIsIm1vZGUiLCJTVkdBbmdsZSIsImNyZWF0ZVN2Z05vZGUiLCJub2RlTmFtZSIsImNyZWF0ZUVsZW1lbnROUyIsInN2Z25zIiwibmFtZXNwYWNlcyIsInJ2bWwiLCJhZGQiLCJjcmVhdGVWbWxOb2RlIiwidGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJlIiwiY3JlYXRlU3R5bGVTaGVldCIsImFkZFJ1bGUiLCJjYW52YXMiLCJzdHlsZSIsInBvc2l0aW9uIiwic2V0U2l6ZSIsInByb3RvdHlwZSIsIkNvbG9yU2NhbGUiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwic2V0Q29sb3JzIiwic2V0Tm9ybWFsaXplRnVuY3Rpb24iLCJzZXRNaW4iLCJzZXRNYXgiLCJKUVZNYXAiLCJtYXBEYXRhIiwibWFwcyIsIm1hcFBpbnMiLCJFcnJvciIsIm11bHRpU2VsZWN0UmVnaW9uIiwiY29udGFpbmVyIiwiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdEhlaWdodCIsImhvdmVyQ29sb3JzIiwic2V0QmFja2dyb3VuZENvbG9yIiwicmVzaXplIiwialF1ZXJ5IiwibmV3V2lkdGgiLCJuZXdIZWlnaHQiLCJhcHBseVRyYW5zZm9ybSIsInJlc2l6ZUV2ZW50IiwiRXZlbnQiLCJ0cmlnZ2VyIiwicmVtb3ZlIiwicGluSGFuZGxlcnMiLCJwbGFjZVBpbnMiLCJwaW5zIiwiYXBwZW5kIiwibWFrZURyYWdnYWJsZSIsInJvb3RHcm91cCIsImNyZWF0ZUdyb3VwIiwiaW5kZXgiLCJtYXBJbmRleCIsImxhYmVsIiwiYWRkQ2xhc3MiLCJhcHBlbmRUbyIsImhpZGUiLCJ0ZXh0IiwiaHRtbCIsImNvdW50cmllcyIsImtleSIsInBhdGhzIiwicGF0aCIsImNyZWF0ZVBhdGgiLCJzZXRGaWxsIiwiaWQiLCJnZXRDb3VudHJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJkZWxlZ2F0ZSIsImNvbnRhaW5lclBhdGgiLCJ0YXJnZXQiLCJjb2RlIiwic3BsaXQiLCJwb3AiLCJsYWJlbFNob3dFdmVudCIsInJlZ2lvbk1vdXNlT3ZlckV2ZW50IiwidG9Mb3dlckNhc2UiLCJ0eXBlIiwibmFtZSIsImlzRGVmYXVsdFByZXZlbnRlZCIsImhpZ2hsaWdodCIsInNob3ciLCJsYWJlbFdpZHRoIiwibGFiZWxIZWlnaHQiLCJ1bmhpZ2hsaWdodCIsInJlZ2lvbkNsaWNrRXZlbnQiLCJ0YXJnZXRQYXRoIiwibWFwQ2xpY2tFdmVudCIsImtleVBhdGgiLCJjdXJyZW50RmlsbENvbG9yIiwiZ2V0T3JpZ2luYWxGaWxsIiwiaXNTZWxlY3RlZCIsImRlc2VsZWN0Iiwic2VsZWN0IiwibW91c2Vtb3ZlIiwiaXMiLCJsZWZ0IiwicGFnZVgiLCJ0b3AiLCJwYWdlWSIsImNzcyIsImFwcGVuZENoaWxkIiwiY29sb3JTY2FsZSIsInZhbHVlTWluIiwidmFsdWVNYXgiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJBcnJheSIsImsiLCJiaW5kWm9vbUJ1dHRvbnMiLCJwaW5Nb2RlIiwic2hvd0xhYmVscyIsInRvVXBwZXJDYXNlIiwidHJhbnNYIiwidHJhbnNZIiwic2NhbGUiLCJiYXNlVHJhbnNYIiwiYmFzZVRyYW5zWSIsImJhc2VTY2FsZSIsImNvdW50cmllc0NvbG9ycyIsImNvdW50cmllc0RhdGEiLCJ6b29tU3RlcCIsInpvb21NYXhTdGVwIiwiem9vbUN1clN0ZXAiLCJ4bGluayIsImFwaVBhcmFtcyIsImFwaUV2ZW50cyIsIm9uTGFiZWxTaG93Iiwib25Mb2FkIiwib25SZWdpb25PdmVyIiwib25SZWdpb25PdXQiLCJvblJlZ2lvbkNsaWNrIiwib25SZWdpb25TZWxlY3QiLCJvblJlZ2lvbkRlc2VsZWN0Iiwib25SZXNpemUiLCJmbiIsIm9wdGlvbnMiLCJkZWZhdWx0UGFyYW1zIiwiZGF0YSIsImFyZ3VtZW50cyIsImNoYXJBdCIsInN1YnN0ciIsImFwcGx5IiwiY2FsbCIsImV4dGVuZCIsIm92ZXJmbG93IiwidW5iaW5kIiwibG9hZEV2ZW50IiwiYXJyYXlUb1JnYiIsImFyIiwicmdiIiwiZCIsImkiLCJsZW5ndGgiLCJ0b1N0cmluZyIsImdldENvbG9yIiwidmFsdWUiLCJub3JtYWxpemUiLCJsZW5ndGhlcyIsImZ1bGxMZW5ndGgiLCJsIiwidmVjdG9yTGVuZ3RoIiwidmVjdG9yU3VidHJhY3QiLCJwdXNoIiwiYyIsInZlY3RvclRvTnVtIiwidmVjdG9yQWRkIiwidmVjdG9yTXVsdCIsInJnYlRvQXJyYXkiLCJtYXgiLCJjbGVhck1heFZhbHVlIiwibWluIiwiY2xlYXJNaW5WYWx1ZSIsImYiLCJNYXRoIiwicG93IiwidmVjdG9yMSIsInZlY3RvcjIiLCJ2ZWN0b3IiLCJyZXN1bHQiLCJzcXJ0IiwibnVtIiwicm91bmQiLCJtYXhUcmFuc1giLCJtYXhUcmFuc1kiLCJtaW5UcmFuc1giLCJtaW5UcmFuc1kiLCJhcHBseVRyYW5zZm9ybVBhcmFtcyIsImNsaWNrIiwiem9vbUluIiwiem9vbU91dCIsImNjIiwic2VsZWN0SW5kZXgiLCJnZXRQaW4iLCJwaW5PYmoiLCJnZXRQaW5JZCIsImdldFBpbnMiLCJyZXQiLCJlYWNoIiwiYXR0ciIsInBpbkNvbnRlbnQiLCJzZXRPcGFjaXR5IiwiZ2V0RmlsbCIsIm1vdXNlRG93biIsIm9sZFBhZ2VYIiwib2xkUGFnZVkiLCJzZWxmIiwiaXNNb3ZpbmciLCJpc01vdmluZ1RpbWVvdXQiLCJsYXN0VG91Y2hDb3VudCIsInRvdWNoQ2VudGVyWCIsInRvdWNoQ2VudGVyWSIsInRvdWNoU3RhcnREaXN0YW5jZSIsInRvdWNoU3RhcnRTY2FsZSIsInRvdWNoWCIsInRvdWNoWSIsImNsZWFyVGltZW91dCIsIm1vdXNlZG93biIsIm1vdXNldXAiLCJtb3VzZW91dCIsIm9mZnNldCIsInRvdWNoZXMiLCJvcmlnaW5hbEV2ZW50IiwidHJhbnNmb3JtWE9sZCIsInRyYW5zZm9ybVlPbGQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFNjYWxlIiwicGluIiwicGluSW5kZXgiLCIkcGluIiwicG9zaXRpb25QaW5zIiwicG9zaXRpb25GaXgiLCJjb3VudHJ5SWQiLCJjb3VudHJ5T2JqIiwiYmJveCIsImdldEJCb3giLCJyb290Q29vcmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibWFwQ29vcmRzIiwiY29vcmRzIiwibWlkZGxlWCIsIngiLCJtaWRkbGVZIiwieSIsInJlbW92ZVBpbiIsInJlbW92ZVBpbnMiLCJyZXNldCIsImN1ckJhc2VTY2FsZSIsImFicyIsInNldFNjYWxlQ29sb3JzIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwidmFsIiwiaXNOYU4iLCJzbGlkZXJEZWx0YSIsImlubmVySGVpZ2h0IiwiJHNsaWRlciIsImNvb3Jkb3JpZ2luIiwiY29vcmRzaXplIiwiaXNSb290Iiwibm9kZSIsImNvbmZpZyIsImdldEF0dHJpYnV0ZSIsIm9wYWNpdHkiLCJmaWxsY29sb3IiLCJkZWZhdWx0RmlsbENvbG9yIiwic3Ryb2tlZCIsInBhdGhTdmdUb1ZtbCIsIm9uIiwibWF0cml4IiwiZmlsbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3giLCJjeSIsImN0cmx4IiwiY3RybHkiLCJyZXBsYWNlIiwic2VnbWVudCIsImxldHRlciIsInNoaWZ0Iiwiam9pbiIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSwwRUFBMEUsTUFBTSwwQkFBMEIsRUFBRSxZQUFZLEVBQUU7QUFDMUg7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLE1BQU0sMEJBQTBCLEVBQUUsWUFBWSxFQUFFO0FBQzdIO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTs7SUFFTUEsc0I7Ozs7Z0hBT1UsWUFBTTtBQUNsQixVQUFJQyxLQUFLLEdBQUcsSUFBSUMsc0RBQUosRUFBWjtBQUNBRCxXQUFLLENBQUNFLFNBQU4sQ0FBZ0Isd0JBQWhCO0FBQ0FGLFdBQUssQ0FBQ0csYUFBTixDQUFvQiw0QkFBcEI7QUFDQUgsV0FBSyxDQUFDSSxnQkFBTixDQUF1QixnQ0FBdkI7QUFDQUosV0FBSyxDQUFDSyxRQUFOLENBQWUsdUJBQWY7QUFDRCxLOztvSEFFaUIsWUFBTTtBQUN0QixVQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsQ0FBZDtB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LFNBQWYsR0FBMkJ4USxLQUFLLEdBQUcsR0FBUixHQUFjQyxNQUF6QztBQUNBLFdBQUtzRCxTQUFMLENBQWVwQyxLQUFmLENBQXFCbkIsS0FBckIsR0FBNkJBLEtBQUssR0FBRyxJQUFyQztBQUNBLFdBQUt1RCxTQUFMLENBQWVwQyxLQUFmLENBQXFCbEIsTUFBckIsR0FBOEJBLE1BQU0sR0FBRyxJQUF2QztBQUNEO0FBQ0Y7O0FBQ0QsT0FBS0QsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0QsQ0F2QkQsQzs7Ozs7Ozs7Ozs7QUNqdkNBLCtEQUErRCxrREFBa0QsNkJBQTZCLFNBQVM7O0FBRXZKLG9EIiwiZmlsZSI6ImpzL2N1c3RvbS9hZG1pbi9kYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KChmdW5jdGlvbiB3ZWJwYWNrTG9hZE9wdGlvbmFsRXh0ZXJuYWxNb2R1bGUoKSB7IHRyeSB7IHJldHVybiByZXF1aXJlKFwibW9tZW50XCIpOyB9IGNhdGNoKGUpIHt9IH0oKSkpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibW9tZW50XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKGZ1bmN0aW9uIHdlYnBhY2tMb2FkT3B0aW9uYWxFeHRlcm5hbE1vZHVsZSgpIHsgdHJ5IHsgcmV0dXJuIHJlcXVpcmUoXCJtb21lbnRcIik7IH0gY2F0Y2goZSkge30gfSgpKSk7XG5cdGVsc2Vcblx0XHRyb290W1wia25nZWxsXCJdID0gZmFjdG9yeShyb290W1wibW9tZW50XCJdKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbW9tZW50X18pIHtcbnJldHVybiAiLCJpbXBvcnQgXCJwbHVnaW5zL21vZHVsZXMvanF2bWFwL2pxdWVyeS52bWFwXCI7XG5pbXBvcnQgXCJwbHVnaW5zL21vZHVsZXMvanF2bWFwL21hcHMvanF1ZXJ5LnZtYXAud29ybGQuanNcIjtcbmltcG9ydCBDaGFydGpzIGZyb20gXCIuL2NoYXJ0L2NoYXJ0anMuanNcIjtcblxuY2xhc3MgRGVtb0Rhc2hib2FyZEVjb21tZXJjZSB7XG4gIGluaXQoKSB7XG4gICAgdGhpcy5fYXBwbHlDaGFydCgpO1xuICAgIHRoaXMuX2FwcGx5RGF0YVRhYmxlKCk7XG4gICAgdGhpcy5fYXBwbHlNYXAoKTtcbiAgfVxuXG4gIF9hcHBseUNoYXJ0ID0gKCkgPT4ge1xuICAgIGxldCBjaGFydCA9IG5ldyBDaGFydGpzKCk7XG4gICAgY2hhcnQubGluZUNoYXJ0KFwiZGFzaGJvYXJkLWxpbmUtY2hhcnRqc1wiKTtcbiAgICBjaGFydC5kb3VnaG51dENoYXJ0KFwiZGFzaGJvYXJkLWRvdWdobnV0LWNoYXJ0anNcIik7XG4gICAgY2hhcnQucHJvZ3Jlc3NCYXJDaGFydChcImRhc2hib2FyZC1wcm9ncmVzcy1iYXItY2hhcnRqc1wiKTtcbiAgICBjaGFydC5iYXJDaGFydChcImRhc2hib2FyZC1iYXItY2hhcnRqc1wiKTtcbiAgfTtcblxuICBfYXBwbHlEYXRhVGFibGUgPSAoKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVjb21tZXJjZS1kYXRhdGFibGVcIik7XG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IHRhYmxlID0gJChlbGVtZW50KS5EYXRhVGFibGUoe1xuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgIHBhZ2VMZW5ndGg6IDEwLFxuICAgICAgb3JkZXI6IFtdLFxuICAgICAgY29sdW1uRGVmczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGFyZ2V0czogXCJuby1zb3J0XCIsXG4gICAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH07XG5cbiAgX2FwcGx5TWFwID0gKCkgPT4ge1xuICAgIHZhciBhY3RpdmVDb2xvciA9IHdpbmRvdy5jb2xvcnMuYmx1ZTtcbiAgICB2YXIgc2VsZWN0ZWRDb3VudHJpZXMgPSBbXCJ1c1wiLCBcInJ1XCJdO1xuICAgIHZhciBjb2xvcnMgPSB7IHVzOiBhY3RpdmVDb2xvciwgcnU6IGFjdGl2ZUNvbG9yLCBhdTogYWN0aXZlQ29sb3IgfTtcbiAgICAkKFwiI3dvcmxkX21hcFwiKS52ZWN0b3JNYXAoe1xuICAgICAgbWFwOiBcIndvcmxkX2VuXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIGJvcmRlckNvbG9yOiBcIiM4MTgxODFcIixcbiAgICAgIGJvcmRlck9wYWNpdHk6IDAuMjUsXG4gICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIGNvbG9yOiB3aW5kb3cuY29sb3JzLmdyYXksXG4gICAgICBlbmFibGVab29tOiB0cnVlLFxuICAgICAgaG92ZXJDb2xvcjogXCIjY2NjXCIsXG4gICAgICBob3Zlck9wYWNpdHk6IG51bGwsXG4gICAgICBub3JtYWxpemVGdW5jdGlvbjogXCJsaW5lYXJcIixcbiAgICAgIHNjYWxlQ29sb3JzOiBbXCIjYjZkNmZmXCIsIFwiIzAwNWFjZVwiXSxcbiAgICAgIHNlbGVjdGVkQ29sb3I6IFwiI2M5ZGZhZlwiLFxuICAgICAgc2VsZWN0ZWRSZWdpb25zOiBudWxsLFxuICAgICAgc2hvd1Rvb2x0aXA6IHRydWUsXG4gICAgICBjb2xvcnM6IGNvbG9ycyxcbiAgICAgIGhvdmVyT3BhY2l0eTogMC43LFxuICAgIH0pO1xuICB9O1xufVxuXG5uZXcgRGVtb0Rhc2hib2FyZEVjb21tZXJjZSgpLmluaXQoKTtcbiIsIi8qIVxuICogSlFWTWFwOiBqUXVlcnkgVmVjdG9yIE1hcCBMaWJyYXJ5XG4gKiBAYXV0aG9yIEpRVk1hcCA8bWVAcGV0ZXJzY2htYWxmZWxkdC5jb20+XG4gKiBAdmVyc2lvbiAxLjUuMVxuICogQGxpbmsgaHR0cDovL2pxdm1hcC5jb21cbiAqIEBsaWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS9tYW5pZmVzdGludGVyYWN0aXZlL2pxdm1hcC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKiBAYnVpbGRkYXRlIDIwMTYvMDYvMDJcbiAqL1xuXG52YXIgVmVjdG9yQ2FudmFzID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIHBhcmFtcykge1xuICB0aGlzLm1vZGUgPSB3aW5kb3cuU1ZHQW5nbGUgPyAnc3ZnJyA6ICd2bWwnO1xuICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcblxuICBpZiAodGhpcy5tb2RlID09PSAnc3ZnJykge1xuICAgIHRoaXMuY3JlYXRlU3ZnTm9kZSA9IGZ1bmN0aW9uIChub2RlTmFtZSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh0aGlzLnN2Z25zLCBub2RlTmFtZSk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFkb2N1bWVudC5uYW1lc3BhY2VzLnJ2bWwpIHtcbiAgICAgICAgZG9jdW1lbnQubmFtZXNwYWNlcy5hZGQoJ3J2bWwnLCAndXJuOnNjaGVtYXMtbWljcm9zb2Z0LWNvbTp2bWwnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3JlYXRlVm1sTm9kZSA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCc8cnZtbDonICsgdGFnTmFtZSArICcgY2xhc3M9XCJydm1sXCI+Jyk7XG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuY3JlYXRlVm1sTm9kZSA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCc8JyArIHRhZ05hbWUgKyAnIHhtbG5zPVwidXJuOnNjaGVtYXMtbWljcm9zb2Z0LmNvbTp2bWxcIiBjbGFzcz1cInJ2bWxcIj4nKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuY3JlYXRlU3R5bGVTaGVldCgpLmFkZFJ1bGUoJy5ydm1sJywgJ2JlaGF2aW9yOnVybCgjZGVmYXVsdCNWTUwpJyk7XG4gIH1cblxuICBpZiAodGhpcy5tb2RlID09PSAnc3ZnJykge1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVTdmdOb2RlKCdzdmcnKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuY3JlYXRlVm1sTm9kZSgnZ3JvdXAnKTtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIH1cblxuICB0aGlzLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG59O1xuXG5WZWN0b3JDYW52YXMucHJvdG90eXBlID0ge1xuICBzdmduczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgbW9kZTogJ3N2ZycsXG4gIHdpZHRoOiAwLFxuICBoZWlnaHQ6IDAsXG4gIGNhbnZhczogbnVsbFxufTtcblxudmFyIENvbG9yU2NhbGUgPSBmdW5jdGlvbiAoY29sb3JzLCBub3JtYWxpemVGdW5jdGlvbiwgbWluVmFsdWUsIG1heFZhbHVlKSB7XG4gIGlmIChjb2xvcnMpIHtcbiAgICB0aGlzLnNldENvbG9ycyhjb2xvcnMpO1xuICB9XG4gIGlmIChub3JtYWxpemVGdW5jdGlvbikge1xuICAgIHRoaXMuc2V0Tm9ybWFsaXplRnVuY3Rpb24obm9ybWFsaXplRnVuY3Rpb24pO1xuICB9XG4gIGlmIChtaW5WYWx1ZSkge1xuICAgIHRoaXMuc2V0TWluKG1pblZhbHVlKTtcbiAgfVxuICBpZiAobWluVmFsdWUpIHtcbiAgICB0aGlzLnNldE1heChtYXhWYWx1ZSk7XG4gIH1cbn07XG5cbkNvbG9yU2NhbGUucHJvdG90eXBlID0ge1xuICBjb2xvcnM6IFtdXG59O1xuXG52YXIgSlFWTWFwID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG4gIHZhciBtYXAgPSB0aGlzO1xuICB2YXIgbWFwRGF0YSA9IEpRVk1hcC5tYXBzW3BhcmFtcy5tYXBdO1xuICB2YXIgbWFwUGlucztcblxuICBpZiggIW1hcERhdGEpe1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcIicgKyBwYXJhbXMubWFwICsgJ1wiIG1hcCBwYXJhbWV0ZXIuIFBsZWFzZSBtYWtlIHN1cmUgeW91IGhhdmUgbG9hZGVkIHRoaXMgbWFwIGZpbGUgaW4geW91ciBIVE1MLicpO1xuICB9XG5cbiAgdGhpcy5zZWxlY3RlZFJlZ2lvbnMgPSBbXTtcbiAgdGhpcy5tdWx0aVNlbGVjdFJlZ2lvbiA9IHBhcmFtcy5tdWx0aVNlbGVjdFJlZ2lvbjtcblxuICB0aGlzLmNvbnRhaW5lciA9IHBhcmFtcy5jb250YWluZXI7XG5cbiAgdGhpcy5kZWZhdWx0V2lkdGggPSBtYXBEYXRhLndpZHRoO1xuICB0aGlzLmRlZmF1bHRIZWlnaHQgPSBtYXBEYXRhLmhlaWdodDtcblxuICB0aGlzLmNvbG9yID0gcGFyYW1zLmNvbG9yO1xuICB0aGlzLnNlbGVjdGVkQ29sb3IgPSBwYXJhbXMuc2VsZWN0ZWRDb2xvcjtcbiAgdGhpcy5ob3ZlckNvbG9yID0gcGFyYW1zLmhvdmVyQ29sb3I7XG4gIHRoaXMuaG92ZXJDb2xvcnMgPSBwYXJhbXMuaG92ZXJDb2xvcnM7XG4gIHRoaXMuaG92ZXJPcGFjaXR5ID0gcGFyYW1zLmhvdmVyT3BhY2l0eTtcbiAgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IocGFyYW1zLmJhY2tncm91bmRDb2xvcik7XG5cbiAgdGhpcy53aWR0aCA9IHBhcmFtcy5jb250YWluZXIud2lkdGgoKTtcbiAgdGhpcy5oZWlnaHQgPSBwYXJhbXMuY29udGFpbmVyLmhlaWdodCgpO1xuXG4gIHRoaXMucmVzaXplKCk7XG5cbiAgalF1ZXJ5KHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmV3V2lkdGggPSBwYXJhbXMuY29udGFpbmVyLndpZHRoKCk7XG4gICAgdmFyIG5ld0hlaWdodCA9IHBhcmFtcy5jb250YWluZXIuaGVpZ2h0KCk7XG5cbiAgICBpZihuZXdXaWR0aCAmJiBuZXdIZWlnaHQpe1xuICAgICAgbWFwLndpZHRoID0gbmV3V2lkdGg7XG4gICAgICBtYXAuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgbWFwLnJlc2l6ZSgpO1xuICAgICAgbWFwLmNhbnZhcy5zZXRTaXplKG1hcC53aWR0aCwgbWFwLmhlaWdodCk7XG4gICAgICBtYXAuYXBwbHlUcmFuc2Zvcm0oKTtcblxuICAgICAgdmFyIHJlc2l6ZUV2ZW50ID0galF1ZXJ5LkV2ZW50KCdyZXNpemUuanF2bWFwJyk7XG4gICAgICBqUXVlcnkocGFyYW1zLmNvbnRhaW5lcikudHJpZ2dlcihyZXNpemVFdmVudCwgW25ld1dpZHRoLCBuZXdIZWlnaHRdKTtcblxuICAgICAgaWYobWFwUGlucyl7XG4gICAgICAgIGpRdWVyeSgnLmpxdm1hcC1waW4nKS5yZW1vdmUoKTtcbiAgICAgICAgbWFwLnBpbkhhbmRsZXJzID0gZmFsc2U7XG4gICAgICAgIG1hcC5wbGFjZVBpbnMobWFwUGlucy5waW5zLCBtYXBQaW5zLm1vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdGhpcy5jYW52YXMgPSBuZXcgVmVjdG9yQ2FudmFzKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBwYXJhbXMpO1xuICBwYXJhbXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmNhbnZhcy5jYW52YXMpO1xuXG4gIHRoaXMubWFrZURyYWdnYWJsZSgpO1xuXG4gIHRoaXMucm9vdEdyb3VwID0gdGhpcy5jYW52YXMuY3JlYXRlR3JvdXAodHJ1ZSk7XG5cbiAgdGhpcy5pbmRleCA9IEpRVk1hcC5tYXBJbmRleDtcbiAgdGhpcy5sYWJlbCA9IGpRdWVyeSgnPGRpdi8+JykuYWRkQ2xhc3MoJ2pxdm1hcC1sYWJlbCcpLmFwcGVuZFRvKGpRdWVyeSgnYm9keScpKS5oaWRlKCk7XG5cbiAgaWYgKHBhcmFtcy5lbmFibGVab29tKSB7XG4gICAgalF1ZXJ5KCc8ZGl2Lz4nKS5hZGRDbGFzcygnanF2bWFwLXpvb21pbicpLnRleHQoJysnKS5hcHBlbmRUbyhwYXJhbXMuY29udGFpbmVyKTtcbiAgICBqUXVlcnkoJzxkaXYvPicpLmFkZENsYXNzKCdqcXZtYXAtem9vbW91dCcpLmh0bWwoJyYjeDIyMTI7JykuYXBwZW5kVG8ocGFyYW1zLmNvbnRhaW5lcik7XG4gIH1cblxuICBtYXAuY291bnRyaWVzID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG1hcERhdGEucGF0aHMpIHtcbiAgICB2YXIgcGF0aCA9IHRoaXMuY2FudmFzLmNyZWF0ZVBhdGgoe1xuICAgICAgcGF0aDogbWFwRGF0YS5wYXRoc1trZXldLnBhdGhcbiAgICB9KTtcblxuICAgIHBhdGguc2V0RmlsbCh0aGlzLmNvbG9yKTtcbiAgICBwYXRoLmlkID0gbWFwLmdldENvdW50cnlJZChrZXkpO1xuICAgIG1hcC5jb3VudHJpZXNba2V5XSA9IHBhdGg7XG5cbiAgICBpZiAodGhpcy5jYW52YXMubW9kZSA9PT0gJ3N2ZycpIHtcbiAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdjbGFzcycsICdqcXZtYXAtcmVnaW9uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeShwYXRoKS5hZGRDbGFzcygnanF2bWFwLXJlZ2lvbicpO1xuICAgIH1cblxuICAgIGpRdWVyeSh0aGlzLnJvb3RHcm91cCkuYXBwZW5kKHBhdGgpO1xuICB9XG5cbiAgalF1ZXJ5KHBhcmFtcy5jb250YWluZXIpLmRlbGVnYXRlKHRoaXMuY2FudmFzLm1vZGUgPT09ICdzdmcnID8gJ3BhdGgnIDogJ3NoYXBlJywgJ21vdXNlb3ZlciBtb3VzZW91dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGNvbnRhaW5lclBhdGggPSBlLnRhcmdldCxcbiAgICAgIGNvZGUgPSBlLnRhcmdldC5pZC5zcGxpdCgnXycpLnBvcCgpLFxuICAgICAgbGFiZWxTaG93RXZlbnQgPSBqUXVlcnkuRXZlbnQoJ2xhYmVsU2hvdy5qcXZtYXAnKSxcbiAgICAgIHJlZ2lvbk1vdXNlT3ZlckV2ZW50ID0galF1ZXJ5LkV2ZW50KCdyZWdpb25Nb3VzZU92ZXIuanF2bWFwJyk7XG5cbiAgICBjb2RlID0gY29kZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKGUudHlwZSA9PT0gJ21vdXNlb3ZlcicpIHtcbiAgICAgIGpRdWVyeShwYXJhbXMuY29udGFpbmVyKS50cmlnZ2VyKHJlZ2lvbk1vdXNlT3ZlckV2ZW50LCBbY29kZSwgbWFwRGF0YS5wYXRoc1tjb2RlXS5uYW1lXSk7XG4gICAgICBpZiAoIXJlZ2lvbk1vdXNlT3ZlckV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIG1hcC5oaWdobGlnaHQoY29kZSwgY29udGFpbmVyUGF0aCk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLnNob3dUb29sdGlwKSB7XG4gICAgICAgIG1hcC5sYWJlbC50ZXh0KG1hcERhdGEucGF0aHNbY29kZV0ubmFtZSk7XG4gICAgICAgIGpRdWVyeShwYXJhbXMuY29udGFpbmVyKS50cmlnZ2VyKGxhYmVsU2hvd0V2ZW50LCBbbWFwLmxhYmVsLCBjb2RlXSk7XG5cbiAgICAgICAgaWYgKCFsYWJlbFNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgIG1hcC5sYWJlbC5zaG93KCk7XG4gICAgICAgICAgbWFwLmxhYmVsV2lkdGggPSBtYXAubGFiZWwud2lkdGgoKTtcbiAgICAgICAgICBtYXAubGFiZWxIZWlnaHQgPSBtYXAubGFiZWwuaGVpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWFwLnVuaGlnaGxpZ2h0KGNvZGUsIGNvbnRhaW5lclBhdGgpO1xuXG4gICAgICBtYXAubGFiZWwuaGlkZSgpO1xuICAgICAgalF1ZXJ5KHBhcmFtcy5jb250YWluZXIpLnRyaWdnZXIoJ3JlZ2lvbk1vdXNlT3V0Lmpxdm1hcCcsIFtjb2RlLCBtYXBEYXRhLnBhdGhzW2NvZGVdLm5hbWVdKTtcbiAgICB9XG4gIH0pO1xuXG4gIGpRdWVyeShwYXJhbXMuY29udGFpbmVyKS5kZWxlZ2F0ZSh0aGlzLmNhbnZhcy5tb2RlID09PSAnc3ZnJyA/ICdwYXRoJyA6ICdzaGFwZScsICdjbGljaycsIGZ1bmN0aW9uIChyZWdpb25DbGlja0V2ZW50KSB7XG5cbiAgICB2YXIgdGFyZ2V0UGF0aCA9IHJlZ2lvbkNsaWNrRXZlbnQudGFyZ2V0O1xuICAgIHZhciBjb2RlID0gcmVnaW9uQ2xpY2tFdmVudC50YXJnZXQuaWQuc3BsaXQoJ18nKS5wb3AoKTtcbiAgICB2YXIgbWFwQ2xpY2tFdmVudCA9IGpRdWVyeS5FdmVudCgncmVnaW9uQ2xpY2suanF2bWFwJyk7XG5cbiAgICBjb2RlID0gY29kZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgalF1ZXJ5KHBhcmFtcy5jb250YWluZXIpLnRyaWdnZXIobWFwQ2xpY2tFdmVudCwgW2NvZGUsIG1hcERhdGEucGF0aHNbY29kZV0ubmFtZV0pO1xuXG4gICAgaWYgKCAhcGFyYW1zLm11bHRpU2VsZWN0UmVnaW9uICYmICFtYXBDbGlja0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICBmb3IgKHZhciBrZXlQYXRoIGluIG1hcERhdGEucGF0aHMpIHtcbiAgICAgICAgbWFwLmNvdW50cmllc1trZXlQYXRoXS5jdXJyZW50RmlsbENvbG9yID0gbWFwLmNvdW50cmllc1trZXlQYXRoXS5nZXRPcmlnaW5hbEZpbGwoKTtcbiAgICAgICAgbWFwLmNvdW50cmllc1trZXlQYXRoXS5zZXRGaWxsKG1hcC5jb3VudHJpZXNba2V5UGF0aF0uZ2V0T3JpZ2luYWxGaWxsKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICggIW1hcENsaWNrRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIGlmIChtYXAuaXNTZWxlY3RlZChjb2RlKSkge1xuICAgICAgICBtYXAuZGVzZWxlY3QoY29kZSwgdGFyZ2V0UGF0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXAuc2VsZWN0KGNvZGUsIHRhcmdldFBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHBhcmFtcy5zaG93VG9vbHRpcCkge1xuICAgIHBhcmFtcy5jb250YWluZXIubW91c2Vtb3ZlKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAobWFwLmxhYmVsLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gZS5wYWdlWCAtIDE1IC0gbWFwLmxhYmVsV2lkdGg7XG4gICAgICAgIHZhciB0b3AgPSBlLnBhZ2VZIC0gMTUgLSBtYXAubGFiZWxIZWlnaHQ7XG5cbiAgICAgICAgaWYobGVmdCA8IDApIHtcbiAgICAgICAgICBsZWZ0ID0gZS5wYWdlWCArIDE1O1xuICAgICAgICB9XG4gICAgICAgIGlmKHRvcCA8IDApIHtcbiAgICAgICAgICB0b3AgPSBlLnBhZ2VZICsgMTU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXAubGFiZWwuY3NzKHtcbiAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgIHRvcDogdG9wXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdGhpcy5zZXRDb2xvcnMocGFyYW1zLmNvbG9ycyk7XG5cbiAgdGhpcy5jYW52YXMuY2FudmFzLmFwcGVuZENoaWxkKHRoaXMucm9vdEdyb3VwKTtcblxuICB0aGlzLmFwcGx5VHJhbnNmb3JtKCk7XG5cbiAgdGhpcy5jb2xvclNjYWxlID0gbmV3IENvbG9yU2NhbGUocGFyYW1zLnNjYWxlQ29sb3JzLCBwYXJhbXMubm9ybWFsaXplRnVuY3Rpb24sIHBhcmFtcy52YWx1ZU1pbiwgcGFyYW1zLnZhbHVlTWF4KTtcblxuICBpZiAocGFyYW1zLnZhbHVlcykge1xuICAgIHRoaXMudmFsdWVzID0gcGFyYW1zLnZhbHVlcztcbiAgICB0aGlzLnNldFZhbHVlcyhwYXJhbXMudmFsdWVzKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuc2VsZWN0ZWRSZWdpb25zKSB7XG4gICAgaWYgKHBhcmFtcy5zZWxlY3RlZFJlZ2lvbnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgZm9yKHZhciBrIGluIHBhcmFtcy5zZWxlY3RlZFJlZ2lvbnMpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QocGFyYW1zLnNlbGVjdGVkUmVnaW9uc1trXS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3QocGFyYW1zLnNlbGVjdGVkUmVnaW9ucy50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLmJpbmRab29tQnV0dG9ucygpO1xuXG4gIGlmKHBhcmFtcy5waW5zKSB7XG4gICAgbWFwUGlucyA9IHtcbiAgICAgIHBpbnM6IHBhcmFtcy5waW5zLFxuICAgICAgbW9kZTogcGFyYW1zLnBpbk1vZGVcbiAgICB9O1xuXG4gICAgdGhpcy5waW5IYW5kbGVycyA9IGZhbHNlO1xuICAgIHRoaXMucGxhY2VQaW5zKHBhcmFtcy5waW5zLCBwYXJhbXMucGluTW9kZSk7XG4gIH1cblxuICBpZihwYXJhbXMuc2hvd0xhYmVscyl7XG4gICAgdGhpcy5waW5IYW5kbGVycyA9IGZhbHNlO1xuXG4gICAgdmFyIHBpbnMgPSB7fTtcbiAgICBmb3IgKGtleSBpbiBtYXAuY291bnRyaWVzKXtcbiAgICAgIGlmICh0eXBlb2YgbWFwLmNvdW50cmllc1trZXldICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmKCAhcGFyYW1zLnBpbnMgfHwgIXBhcmFtcy5waW5zW2tleV0gKXtcbiAgICAgICAgICBwaW5zW2tleV0gPSBrZXkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcFBpbnMgPSB7XG4gICAgICBwaW5zOiBwaW5zLFxuICAgICAgbW9kZTogJ2NvbnRlbnQnXG4gICAgfTtcblxuICAgIHRoaXMucGxhY2VQaW5zKHBpbnMsICdjb250ZW50Jyk7XG4gIH1cblxuICBKUVZNYXAubWFwSW5kZXgrKztcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUgPSB7XG4gIHRyYW5zWDogMCxcbiAgdHJhbnNZOiAwLFxuICBzY2FsZTogMSxcbiAgYmFzZVRyYW5zWDogMCxcbiAgYmFzZVRyYW5zWTogMCxcbiAgYmFzZVNjYWxlOiAxLFxuICB3aWR0aDogMCxcbiAgaGVpZ2h0OiAwLFxuICBjb3VudHJpZXM6IHt9LFxuICBjb3VudHJpZXNDb2xvcnM6IHt9LFxuICBjb3VudHJpZXNEYXRhOiB7fSxcbiAgem9vbVN0ZXA6IDEuNCxcbiAgem9vbU1heFN0ZXA6IDQsXG4gIHpvb21DdXJTdGVwOiAxXG59O1xuXG5KUVZNYXAueGxpbmsgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG5KUVZNYXAubWFwSW5kZXggPSAxO1xuSlFWTWFwLm1hcHMgPSB7fTtcblxuKGZ1bmN0aW9uKCl7XG5cbiAgdmFyIGFwaVBhcmFtcyA9IHtcbiAgICBjb2xvcnM6IDEsXG4gICAgdmFsdWVzOiAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogMSxcbiAgICBzY2FsZUNvbG9yczogMSxcbiAgICBub3JtYWxpemVGdW5jdGlvbjogMSxcbiAgICBlbmFibGVab29tOiAxLFxuICAgIHNob3dUb29sdGlwOiAxLFxuICAgIGJvcmRlckNvbG9yOiAxLFxuICAgIGJvcmRlcldpZHRoOiAxLFxuICAgIGJvcmRlck9wYWNpdHk6IDEsXG4gICAgc2VsZWN0ZWRSZWdpb25zOiAxLFxuICAgIG11bHRpU2VsZWN0UmVnaW9uOiAxXG4gIH07XG5cbiAgdmFyIGFwaUV2ZW50cyA9IHtcbiAgICBvbkxhYmVsU2hvdzogJ2xhYmVsU2hvdycsXG4gICAgb25Mb2FkOiAnbG9hZCcsXG4gICAgb25SZWdpb25PdmVyOiAncmVnaW9uTW91c2VPdmVyJyxcbiAgICBvblJlZ2lvbk91dDogJ3JlZ2lvbk1vdXNlT3V0JyxcbiAgICBvblJlZ2lvbkNsaWNrOiAncmVnaW9uQ2xpY2snLFxuICAgIG9uUmVnaW9uU2VsZWN0OiAncmVnaW9uU2VsZWN0JyxcbiAgICBvblJlZ2lvbkRlc2VsZWN0OiAncmVnaW9uRGVzZWxlY3QnLFxuICAgIG9uUmVzaXplOiAncmVzaXplJ1xuICB9O1xuXG4gIGpRdWVyeS5mbi52ZWN0b3JNYXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgdmFyIGRlZmF1bHRQYXJhbXMgPSB7XG4gICAgICBtYXA6ICd3b3JsZF9lbicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTViZmRkJyxcbiAgICAgIGNvbG9yOiAnI2Y0ZjNmMCcsXG4gICAgICBob3ZlckNvbG9yOiAnI2M5ZGZhZicsXG4gICAgICBob3ZlckNvbG9yczoge30sXG4gICAgICBzZWxlY3RlZENvbG9yOiAnI2M5ZGZhZicsXG4gICAgICBzY2FsZUNvbG9yczogWycjYjZkNmZmJywgJyMwMDVhY2UnXSxcbiAgICAgIG5vcm1hbGl6ZUZ1bmN0aW9uOiAnbGluZWFyJyxcbiAgICAgIGVuYWJsZVpvb206IHRydWUsXG4gICAgICBzaG93VG9vbHRpcDogdHJ1ZSxcbiAgICAgIGJvcmRlckNvbG9yOiAnIzgxODE4MScsXG4gICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIGJvcmRlck9wYWNpdHk6IDAuMjUsXG4gICAgICBzZWxlY3RlZFJlZ2lvbnM6IG51bGwsXG4gICAgICBtdWx0aVNlbGVjdFJlZ2lvbjogZmFsc2VcbiAgICB9LCBtYXAgPSB0aGlzLmRhdGEoJ21hcE9iamVjdCcpO1xuXG4gICAgaWYgKG9wdGlvbnMgPT09ICdhZGRNYXAnKSB7XG4gICAgICBKUVZNYXAubWFwc1thcmd1bWVudHNbMV1dID0gYXJndW1lbnRzWzJdO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucyA9PT0gJ3NldCcgJiYgYXBpUGFyYW1zW2FyZ3VtZW50c1sxXV0pIHtcbiAgICAgIG1hcFsnc2V0JyArIGFyZ3VtZW50c1sxXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGFyZ3VtZW50c1sxXS5zdWJzdHIoMSldLmFwcGx5KG1hcCwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgJiZcbiAgICAgIHR5cGVvZiBtYXBbb3B0aW9uc10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBtYXBbb3B0aW9uc10uYXBwbHkobWFwLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgalF1ZXJ5LmV4dGVuZChkZWZhdWx0UGFyYW1zLCBvcHRpb25zKTtcbiAgICAgIGRlZmF1bHRQYXJhbXMuY29udGFpbmVyID0gdGhpcztcbiAgICAgIHRoaXMuY3NzKHsgcG9zaXRpb246ICdyZWxhdGl2ZScsIG92ZXJmbG93OiAnaGlkZGVuJyB9KTtcblxuICAgICAgbWFwID0gbmV3IEpRVk1hcChkZWZhdWx0UGFyYW1zKTtcblxuICAgICAgdGhpcy5kYXRhKCdtYXBPYmplY3QnLCBtYXApO1xuXG4gICAgICB0aGlzLnVuYmluZCgnLmpxdm1hcCcpO1xuXG4gICAgICBmb3IgKHZhciBlIGluIGFwaUV2ZW50cykge1xuICAgICAgICBpZiAoZGVmYXVsdFBhcmFtc1tlXSkge1xuICAgICAgICAgIHRoaXMuYmluZChhcGlFdmVudHNbZV0gKyAnLmpxdm1hcCcsIGRlZmF1bHRQYXJhbXNbZV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBsb2FkRXZlbnQgPSBqUXVlcnkuRXZlbnQoJ2xvYWQuanF2bWFwJyk7XG4gICAgICBqUXVlcnkoZGVmYXVsdFBhcmFtcy5jb250YWluZXIpLnRyaWdnZXIobG9hZEV2ZW50LCBtYXApO1xuXG4gICAgICByZXR1cm4gbWFwO1xuICAgIH1cbiAgfTtcblxufSkoalF1ZXJ5KTtcblxuQ29sb3JTY2FsZS5hcnJheVRvUmdiID0gZnVuY3Rpb24gKGFyKSB7XG4gIHZhciByZ2IgPSAnIyc7XG4gIHZhciBkO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyLmxlbmd0aDsgaSsrKSB7XG4gICAgZCA9IGFyW2ldLnRvU3RyaW5nKDE2KTtcbiAgICByZ2IgKz0gZC5sZW5ndGggPT09IDEgPyAnMCcgKyBkIDogZDtcbiAgfVxuICByZXR1cm4gcmdiO1xufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUuZ2V0Q29sb3IgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLm5vcm1hbGl6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbHVlID0gdGhpcy5ub3JtYWxpemUodmFsdWUpO1xuICB9XG5cbiAgdmFyIGxlbmd0aGVzID0gW107XG4gIHZhciBmdWxsTGVuZ3RoID0gMDtcbiAgdmFyIGw7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbG9ycy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBsID0gdGhpcy52ZWN0b3JMZW5ndGgodGhpcy52ZWN0b3JTdWJ0cmFjdCh0aGlzLmNvbG9yc1tpICsgMV0sIHRoaXMuY29sb3JzW2ldKSk7XG4gICAgbGVuZ3RoZXMucHVzaChsKTtcbiAgICBmdWxsTGVuZ3RoICs9IGw7XG4gIH1cblxuICB2YXIgYyA9ICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgLyBmdWxsTGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGhlcy5sZW5ndGg7IGkrKykge1xuICAgIGxlbmd0aGVzW2ldICo9IGM7XG4gIH1cblxuICBpID0gMDtcbiAgdmFsdWUgLT0gdGhpcy5taW5WYWx1ZTtcblxuICB3aGlsZSAodmFsdWUgLSBsZW5ndGhlc1tpXSA+PSAwKSB7XG4gICAgdmFsdWUgLT0gbGVuZ3RoZXNbaV07XG4gICAgaSsrO1xuICB9XG5cbiAgdmFyIGNvbG9yO1xuICBpZiAoaSA9PT0gdGhpcy5jb2xvcnMubGVuZ3RoIC0gMSkge1xuICAgIGNvbG9yID0gdGhpcy52ZWN0b3JUb051bSh0aGlzLmNvbG9yc1tpXSkudG9TdHJpbmcoMTYpO1xuICB9IGVsc2Uge1xuICAgIGNvbG9yID0gKHRoaXMudmVjdG9yVG9OdW0odGhpcy52ZWN0b3JBZGQodGhpcy5jb2xvcnNbaV0sIHRoaXMudmVjdG9yTXVsdCh0aGlzLnZlY3RvclN1YnRyYWN0KHRoaXMuY29sb3JzW2kgKyAxXSwgdGhpcy5jb2xvcnNbaV0pLCAodmFsdWUpIC8gKGxlbmd0aGVzW2ldKSkpKSkudG9TdHJpbmcoMTYpO1xuICB9XG5cbiAgd2hpbGUgKGNvbG9yLmxlbmd0aCA8IDYpIHtcbiAgICBjb2xvciA9ICcwJyArIGNvbG9yO1xuICB9XG4gIHJldHVybiAnIycgKyBjb2xvcjtcbn07XG5cbkNvbG9yU2NhbGUucmdiVG9BcnJheSA9IGZ1bmN0aW9uIChyZ2IpIHtcbiAgcmdiID0gcmdiLnN1YnN0cigxKTtcbiAgcmV0dXJuIFtwYXJzZUludChyZ2Iuc3Vic3RyKDAsIDIpLCAxNiksIHBhcnNlSW50KHJnYi5zdWJzdHIoMiwgMiksIDE2KSwgcGFyc2VJbnQocmdiLnN1YnN0cig0LCAyKSwgMTYpXTtcbn07XG5cbkNvbG9yU2NhbGUucHJvdG90eXBlLnNldENvbG9ycyA9IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb2xvcnNbaV0gPSBDb2xvclNjYWxlLnJnYlRvQXJyYXkoY29sb3JzW2ldKTtcbiAgfVxuICB0aGlzLmNvbG9ycyA9IGNvbG9ycztcbn07XG5cbkNvbG9yU2NhbGUucHJvdG90eXBlLnNldE1heCA9IGZ1bmN0aW9uIChtYXgpIHtcbiAgdGhpcy5jbGVhck1heFZhbHVlID0gbWF4O1xuICBpZiAodHlwZW9mIHRoaXMubm9ybWFsaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5tYXhWYWx1ZSA9IHRoaXMubm9ybWFsaXplKG1heCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5tYXhWYWx1ZSA9IG1heDtcbiAgfVxufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUuc2V0TWluID0gZnVuY3Rpb24gKG1pbikge1xuICB0aGlzLmNsZWFyTWluVmFsdWUgPSBtaW47XG5cbiAgaWYgKHR5cGVvZiB0aGlzLm5vcm1hbGl6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMubWluVmFsdWUgPSB0aGlzLm5vcm1hbGl6ZShtaW4pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubWluVmFsdWUgPSBtaW47XG4gIH1cbn07XG5cbkNvbG9yU2NhbGUucHJvdG90eXBlLnNldE5vcm1hbGl6ZUZ1bmN0aW9uID0gZnVuY3Rpb24gKGYpIHtcbiAgaWYgKGYgPT09ICdwb2x5bm9taWFsJykge1xuICAgIHRoaXMubm9ybWFsaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gTWF0aC5wb3codmFsdWUsIDAuMik7XG4gICAgfTtcbiAgfSBlbHNlIGlmIChmID09PSAnbGluZWFyJykge1xuICAgIGRlbGV0ZSB0aGlzLm5vcm1hbGl6ZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm5vcm1hbGl6ZSA9IGY7XG4gIH1cbiAgdGhpcy5zZXRNaW4odGhpcy5jbGVhck1pblZhbHVlKTtcbiAgdGhpcy5zZXRNYXgodGhpcy5jbGVhck1heFZhbHVlKTtcbn07XG5cbkNvbG9yU2NhbGUucHJvdG90eXBlLnZlY3RvckFkZCA9IGZ1bmN0aW9uICh2ZWN0b3IxLCB2ZWN0b3IyKSB7XG4gIHZhciB2ZWN0b3IgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZWN0b3IxLmxlbmd0aDsgaSsrKSB7XG4gICAgdmVjdG9yW2ldID0gdmVjdG9yMVtpXSArIHZlY3RvcjJbaV07XG4gIH1cbiAgcmV0dXJuIHZlY3Rvcjtcbn07XG5cbkNvbG9yU2NhbGUucHJvdG90eXBlLnZlY3Rvckxlbmd0aCA9IGZ1bmN0aW9uICh2ZWN0b3IpIHtcbiAgdmFyIHJlc3VsdCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmVjdG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0ICs9IHZlY3RvcltpXSAqIHZlY3RvcltpXTtcbiAgfVxuICByZXR1cm4gTWF0aC5zcXJ0KHJlc3VsdCk7XG59O1xuXG5Db2xvclNjYWxlLnByb3RvdHlwZS52ZWN0b3JNdWx0ID0gZnVuY3Rpb24gKHZlY3RvciwgbnVtKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZWN0b3IubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRbaV0gPSB2ZWN0b3JbaV0gKiBudW07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbkNvbG9yU2NhbGUucHJvdG90eXBlLnZlY3RvclN1YnRyYWN0ID0gZnVuY3Rpb24gKHZlY3RvcjEsIHZlY3RvcjIpIHtcbiAgdmFyIHZlY3RvciA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlY3RvcjEubGVuZ3RoOyBpKyspIHtcbiAgICB2ZWN0b3JbaV0gPSB2ZWN0b3IxW2ldIC0gdmVjdG9yMltpXTtcbiAgfVxuICByZXR1cm4gdmVjdG9yO1xufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUudmVjdG9yVG9OdW0gPSBmdW5jdGlvbiAodmVjdG9yKSB7XG4gIHZhciBudW0gPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlY3Rvci5sZW5ndGg7IGkrKykge1xuICAgIG51bSArPSBNYXRoLnJvdW5kKHZlY3RvcltpXSkgKiBNYXRoLnBvdygyNTYsIHZlY3Rvci5sZW5ndGggLSBpIC0gMSk7XG4gIH1cbiAgcmV0dXJuIG51bTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuYXBwbHlUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtYXhUcmFuc1gsIG1heFRyYW5zWSwgbWluVHJhbnNYLCBtaW5UcmFuc1k7XG4gIGlmICh0aGlzLmRlZmF1bHRXaWR0aCAqIHRoaXMuc2NhbGUgPD0gdGhpcy53aWR0aCkge1xuICAgIG1heFRyYW5zWCA9ICh0aGlzLndpZHRoIC0gdGhpcy5kZWZhdWx0V2lkdGggKiB0aGlzLnNjYWxlKSAvICgyICogdGhpcy5zY2FsZSk7XG4gICAgbWluVHJhbnNYID0gKHRoaXMud2lkdGggLSB0aGlzLmRlZmF1bHRXaWR0aCAqIHRoaXMuc2NhbGUpIC8gKDIgKiB0aGlzLnNjYWxlKTtcbiAgfSBlbHNlIHtcbiAgICBtYXhUcmFuc1ggPSAwO1xuICAgIG1pblRyYW5zWCA9ICh0aGlzLndpZHRoIC0gdGhpcy5kZWZhdWx0V2lkdGggKiB0aGlzLnNjYWxlKSAvIHRoaXMuc2NhbGU7XG4gIH1cblxuICBpZiAodGhpcy5kZWZhdWx0SGVpZ2h0ICogdGhpcy5zY2FsZSA8PSB0aGlzLmhlaWdodCkge1xuICAgIG1heFRyYW5zWSA9ICh0aGlzLmhlaWdodCAtIHRoaXMuZGVmYXVsdEhlaWdodCAqIHRoaXMuc2NhbGUpIC8gKDIgKiB0aGlzLnNjYWxlKTtcbiAgICBtaW5UcmFuc1kgPSAodGhpcy5oZWlnaHQgLSB0aGlzLmRlZmF1bHRIZWlnaHQgKiB0aGlzLnNjYWxlKSAvICgyICogdGhpcy5zY2FsZSk7XG4gIH0gZWxzZSB7XG4gICAgbWF4VHJhbnNZID0gMDtcbiAgICBtaW5UcmFuc1kgPSAodGhpcy5oZWlnaHQgLSB0aGlzLmRlZmF1bHRIZWlnaHQgKiB0aGlzLnNjYWxlKSAvIHRoaXMuc2NhbGU7XG4gIH1cblxuICBpZiAodGhpcy50cmFuc1kgPiBtYXhUcmFuc1kpIHtcbiAgICB0aGlzLnRyYW5zWSA9IG1heFRyYW5zWTtcbiAgfSBlbHNlIGlmICh0aGlzLnRyYW5zWSA8IG1pblRyYW5zWSkge1xuICAgIHRoaXMudHJhbnNZID0gbWluVHJhbnNZO1xuICB9XG4gIGlmICh0aGlzLnRyYW5zWCA+IG1heFRyYW5zWCkge1xuICAgIHRoaXMudHJhbnNYID0gbWF4VHJhbnNYO1xuICB9IGVsc2UgaWYgKHRoaXMudHJhbnNYIDwgbWluVHJhbnNYKSB7XG4gICAgdGhpcy50cmFuc1ggPSBtaW5UcmFuc1g7XG4gIH1cblxuICB0aGlzLmNhbnZhcy5hcHBseVRyYW5zZm9ybVBhcmFtcyh0aGlzLnNjYWxlLCB0aGlzLnRyYW5zWCwgdGhpcy50cmFuc1kpO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5iaW5kWm9vbUJ1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtYXAgPSB0aGlzO1xuICB0aGlzLmNvbnRhaW5lci5maW5kKCcuanF2bWFwLXpvb21pbicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgbWFwLnpvb21JbigpO1xuICB9KTtcbiAgdGhpcy5jb250YWluZXIuZmluZCgnLmpxdm1hcC16b29tb3V0JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICBtYXAuem9vbU91dCgpO1xuICB9KTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuZGVzZWxlY3QgPSBmdW5jdGlvbiAoY2MsIHBhdGgpIHtcbiAgY2MgPSBjYy50b0xvd2VyQ2FzZSgpO1xuICBwYXRoID0gcGF0aCB8fCBqUXVlcnkoJyMnICsgdGhpcy5nZXRDb3VudHJ5SWQoY2MpKVswXTtcblxuICBpZiAodGhpcy5pc1NlbGVjdGVkKGNjKSkge1xuICAgIHRoaXMuc2VsZWN0ZWRSZWdpb25zLnNwbGljZSh0aGlzLnNlbGVjdEluZGV4KGNjKSwgMSk7XG5cbiAgICBqUXVlcnkodGhpcy5jb250YWluZXIpLnRyaWdnZXIoJ3JlZ2lvbkRlc2VsZWN0Lmpxdm1hcCcsIFtjY10pO1xuICAgIHBhdGguY3VycmVudEZpbGxDb2xvciA9IHBhdGguZ2V0T3JpZ2luYWxGaWxsKCk7XG4gICAgcGF0aC5zZXRGaWxsKHBhdGguZ2V0T3JpZ2luYWxGaWxsKCkpO1xuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNvdW50cmllcykge1xuICAgICAgdGhpcy5zZWxlY3RlZFJlZ2lvbnMuc3BsaWNlKHRoaXMuc2VsZWN0ZWRSZWdpb25zLmluZGV4T2Yoa2V5KSwgMSk7XG4gICAgICB0aGlzLmNvdW50cmllc1trZXldLmN1cnJlbnRGaWxsQ29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgdGhpcy5jb3VudHJpZXNba2V5XS5zZXRGaWxsKHRoaXMuY29sb3IpO1xuICAgIH1cbiAgfVxufTtcblxuSlFWTWFwLnByb3RvdHlwZS5nZXRDb3VudHJ5SWQgPSBmdW5jdGlvbiAoY2MpIHtcbiAgcmV0dXJuICdqcXZtYXAnICsgdGhpcy5pbmRleCArICdfJyArIGNjO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5nZXRQaW4gPSBmdW5jdGlvbihjYyl7XG4gIHZhciBwaW5PYmogPSBqUXVlcnkoJyMnICsgdGhpcy5nZXRQaW5JZChjYykpO1xuICByZXR1cm4gcGluT2JqLmh0bWwoKTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuZ2V0UGluSWQgPSBmdW5jdGlvbiAoY2MpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0Q291bnRyeUlkKGNjKSArICdfcGluJztcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuZ2V0UGlucyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBwaW5zID0gdGhpcy5jb250YWluZXIuZmluZCgnLmpxdm1hcC1waW4nKTtcbiAgdmFyIHJldCA9IHt9O1xuICBqUXVlcnkuZWFjaChwaW5zLCBmdW5jdGlvbihpbmRleCwgcGluT2JqKXtcbiAgICBwaW5PYmogPSBqUXVlcnkocGluT2JqKTtcbiAgICB2YXIgY2MgPSBwaW5PYmouYXR0cignZm9yJykudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgcGluQ29udGVudCA9IHBpbk9iai5odG1sKCk7XG4gICAgcmV0W2NjXSA9IHBpbkNvbnRlbnQ7XG4gIH0pO1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmV0KTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuaGlnaGxpZ2h0ID0gZnVuY3Rpb24gKGNjLCBwYXRoKSB7XG4gIHBhdGggPSBwYXRoIHx8IGpRdWVyeSgnIycgKyB0aGlzLmdldENvdW50cnlJZChjYykpWzBdO1xuICBpZiAodGhpcy5ob3Zlck9wYWNpdHkpIHtcbiAgICBwYXRoLnNldE9wYWNpdHkodGhpcy5ob3Zlck9wYWNpdHkpO1xuICB9IGVsc2UgaWYgKHRoaXMuaG92ZXJDb2xvcnMgJiYgKGNjIGluIHRoaXMuaG92ZXJDb2xvcnMpKSB7XG4gICAgcGF0aC5jdXJyZW50RmlsbENvbG9yID0gcGF0aC5nZXRGaWxsKCkgKyAnJztcbiAgICBwYXRoLnNldEZpbGwodGhpcy5ob3ZlckNvbG9yc1tjY10pO1xuICB9IGVsc2UgaWYgKHRoaXMuaG92ZXJDb2xvcikge1xuICAgIHBhdGguY3VycmVudEZpbGxDb2xvciA9IHBhdGguZ2V0RmlsbCgpICsgJyc7XG4gICAgcGF0aC5zZXRGaWxsKHRoaXMuaG92ZXJDb2xvcik7XG4gIH1cbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuaXNTZWxlY3RlZCA9IGZ1bmN0aW9uKGNjKSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdEluZGV4KGNjKSA+PSAwO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5tYWtlRHJhZ2dhYmxlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbW91c2VEb3duID0gZmFsc2U7XG4gIHZhciBvbGRQYWdlWCwgb2xkUGFnZVk7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBzZWxmLmlzTW92aW5nID0gZmFsc2U7XG4gIHNlbGYuaXNNb3ZpbmdUaW1lb3V0ID0gZmFsc2U7XG5cbiAgdmFyIGxhc3RUb3VjaENvdW50O1xuICB2YXIgdG91Y2hDZW50ZXJYO1xuICB2YXIgdG91Y2hDZW50ZXJZO1xuICB2YXIgdG91Y2hTdGFydERpc3RhbmNlO1xuICB2YXIgdG91Y2hTdGFydFNjYWxlO1xuICB2YXIgdG91Y2hYO1xuICB2YXIgdG91Y2hZO1xuXG4gIHRoaXMuY29udGFpbmVyLm1vdXNlbW92ZShmdW5jdGlvbiAoZSkge1xuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgc2VsZi50cmFuc1ggLT0gKG9sZFBhZ2VYIC0gZS5wYWdlWCkgLyBzZWxmLnNjYWxlO1xuICAgICAgc2VsZi50cmFuc1kgLT0gKG9sZFBhZ2VZIC0gZS5wYWdlWSkgLyBzZWxmLnNjYWxlO1xuXG4gICAgICBzZWxmLmFwcGx5VHJhbnNmb3JtKCk7XG5cbiAgICAgIG9sZFBhZ2VYID0gZS5wYWdlWDtcbiAgICAgIG9sZFBhZ2VZID0gZS5wYWdlWTtcblxuICAgICAgc2VsZi5pc01vdmluZyA9IHRydWU7XG4gICAgICBpZiAoc2VsZi5pc01vdmluZ1RpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuaXNNb3ZpbmdUaW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5jb250YWluZXIudHJpZ2dlcignZHJhZycpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9KS5tb3VzZWRvd24oZnVuY3Rpb24gKGUpIHtcblxuICAgIG1vdXNlRG93biA9IHRydWU7XG4gICAgb2xkUGFnZVggPSBlLnBhZ2VYO1xuICAgIG9sZFBhZ2VZID0gZS5wYWdlWTtcblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9KS5tb3VzZXVwKGZ1bmN0aW9uICgpIHtcblxuICAgIG1vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgY2xlYXJUaW1lb3V0KHNlbGYuaXNNb3ZpbmdUaW1lb3V0KTtcbiAgICBzZWxmLmlzTW92aW5nVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5pc01vdmluZyA9IGZhbHNlO1xuICAgIH0sIDEwMCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgfSkubW91c2VvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgaWYobW91c2VEb3duICYmIHNlbGYuaXNNb3Zpbmcpe1xuXG4gICAgICBjbGVhclRpbWVvdXQoc2VsZi5pc01vdmluZ1RpbWVvdXQpO1xuICAgICAgc2VsZi5pc01vdmluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIHNlbGYuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgIH0sIDEwMCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xuXG4gIGpRdWVyeSh0aGlzLmNvbnRhaW5lcikuYmluZCgndG91Y2htb3ZlJywgZnVuY3Rpb24gKGUpIHtcblxuICAgIHZhciBvZmZzZXQ7XG4gICAgdmFyIHNjYWxlO1xuICAgIHZhciB0b3VjaGVzID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXM7XG4gICAgdmFyIHRyYW5zZm9ybVhPbGQ7XG4gICAgdmFyIHRyYW5zZm9ybVlPbGQ7XG5cbiAgICBpZiAodG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmIChsYXN0VG91Y2hDb3VudCA9PT0gMSkge1xuXG4gICAgICAgIGlmKHRvdWNoWCA9PT0gdG91Y2hlc1swXS5wYWdlWCAmJiB0b3VjaFkgPT09IHRvdWNoZXNbMF0ucGFnZVkpe1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYW5zZm9ybVhPbGQgPSBzZWxmLnRyYW5zWDtcbiAgICAgICAgdHJhbnNmb3JtWU9sZCA9IHNlbGYudHJhbnNZO1xuXG4gICAgICAgIHNlbGYudHJhbnNYIC09ICh0b3VjaFggLSB0b3VjaGVzWzBdLnBhZ2VYKSAvIHNlbGYuc2NhbGU7XG4gICAgICAgIHNlbGYudHJhbnNZIC09ICh0b3VjaFkgLSB0b3VjaGVzWzBdLnBhZ2VZKSAvIHNlbGYuc2NhbGU7XG5cbiAgICAgICAgc2VsZi5hcHBseVRyYW5zZm9ybSgpO1xuXG4gICAgICAgIGlmICh0cmFuc2Zvcm1YT2xkICE9PSBzZWxmLnRyYW5zWCB8fCB0cmFuc2Zvcm1ZT2xkICE9PSBzZWxmLnRyYW5zWSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuaXNNb3ZpbmcgPSB0cnVlO1xuICAgICAgICBpZiAoc2VsZi5pc01vdmluZ1RpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5pc01vdmluZ1RpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRvdWNoWCA9IHRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICB0b3VjaFkgPSB0b3VjaGVzWzBdLnBhZ2VZO1xuXG4gICAgfSBlbHNlIGlmICh0b3VjaGVzLmxlbmd0aCA9PT0gMikge1xuXG4gICAgICBpZiAobGFzdFRvdWNoQ291bnQgPT09IDIpIHtcbiAgICAgICAgc2NhbGUgPSBNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyh0b3VjaGVzWzBdLnBhZ2VYIC0gdG91Y2hlc1sxXS5wYWdlWCwgMikgK1xuICAgICAgICAgICAgTWF0aC5wb3codG91Y2hlc1swXS5wYWdlWSAtIHRvdWNoZXNbMV0ucGFnZVksIDIpXG4gICAgICAgICAgKSAvIHRvdWNoU3RhcnREaXN0YW5jZTtcblxuICAgICAgICBzZWxmLnNldFNjYWxlKFxuICAgICAgICAgIHRvdWNoU3RhcnRTY2FsZSAqIHNjYWxlLFxuICAgICAgICAgIHRvdWNoQ2VudGVyWCxcbiAgICAgICAgICB0b3VjaENlbnRlcllcbiAgICAgICAgKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgb2Zmc2V0ID0galF1ZXJ5KHNlbGYuY29udGFpbmVyKS5vZmZzZXQoKTtcbiAgICAgICAgaWYgKHRvdWNoZXNbMF0ucGFnZVggPiB0b3VjaGVzWzFdLnBhZ2VYKSB7XG4gICAgICAgICAgdG91Y2hDZW50ZXJYID0gdG91Y2hlc1sxXS5wYWdlWCArICh0b3VjaGVzWzBdLnBhZ2VYIC0gdG91Y2hlc1sxXS5wYWdlWCkgLyAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvdWNoQ2VudGVyWCA9IHRvdWNoZXNbMF0ucGFnZVggKyAodG91Y2hlc1sxXS5wYWdlWCAtIHRvdWNoZXNbMF0ucGFnZVgpIC8gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b3VjaGVzWzBdLnBhZ2VZID4gdG91Y2hlc1sxXS5wYWdlWSkge1xuICAgICAgICAgIHRvdWNoQ2VudGVyWSA9IHRvdWNoZXNbMV0ucGFnZVkgKyAodG91Y2hlc1swXS5wYWdlWSAtIHRvdWNoZXNbMV0ucGFnZVkpIC8gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b3VjaENlbnRlclkgPSB0b3VjaGVzWzBdLnBhZ2VZICsgKHRvdWNoZXNbMV0ucGFnZVkgLSB0b3VjaGVzWzBdLnBhZ2VZKSAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICB0b3VjaENlbnRlclggLT0gb2Zmc2V0LmxlZnQ7XG4gICAgICAgIHRvdWNoQ2VudGVyWSAtPSBvZmZzZXQudG9wO1xuICAgICAgICB0b3VjaFN0YXJ0U2NhbGUgPSBzZWxmLnNjYWxlO1xuXG4gICAgICAgIHRvdWNoU3RhcnREaXN0YW5jZSA9IE1hdGguc3FydChcbiAgICAgICAgICBNYXRoLnBvdyh0b3VjaGVzWzBdLnBhZ2VYIC0gdG91Y2hlc1sxXS5wYWdlWCwgMikgK1xuICAgICAgICAgIE1hdGgucG93KHRvdWNoZXNbMF0ucGFnZVkgLSB0b3VjaGVzWzFdLnBhZ2VZLCAyKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RUb3VjaENvdW50ID0gdG91Y2hlcy5sZW5ndGg7XG4gIH0pO1xuXG4gIGpRdWVyeSh0aGlzLmNvbnRhaW5lcikuYmluZCgndG91Y2hzdGFydCcsIGZ1bmN0aW9uICgpIHtcbiAgICBsYXN0VG91Y2hDb3VudCA9IDA7XG4gIH0pO1xuXG4gIGpRdWVyeSh0aGlzLmNvbnRhaW5lcikuYmluZCgndG91Y2hlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgbGFzdFRvdWNoQ291bnQgPSAwO1xuICB9KTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUucGxhY2VQaW5zID0gZnVuY3Rpb24ocGlucywgcGluTW9kZSl7XG4gIHZhciBtYXAgPSB0aGlzO1xuXG4gIGlmKCFwaW5Nb2RlIHx8IChwaW5Nb2RlICE9PSAnY29udGVudCcgJiYgcGluTW9kZSAhPT0gJ2lkJykpIHtcbiAgICBwaW5Nb2RlID0gJ2NvbnRlbnQnO1xuICB9XG5cbiAgaWYocGluTW9kZSA9PT0gJ2NvbnRlbnQnKSB7Ly90cmVhdCBwaW4gYXMgY29udGVudFxuICAgIGpRdWVyeS5lYWNoKHBpbnMsIGZ1bmN0aW9uKGluZGV4LCBwaW4pe1xuICAgICAgaWYoalF1ZXJ5KCcjJyArIG1hcC5nZXRDb3VudHJ5SWQoaW5kZXgpKS5sZW5ndGggPT09IDApe1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwaW5JbmRleCA9IG1hcC5nZXRQaW5JZChpbmRleCk7XG4gICAgICB2YXIgJHBpbiA9IGpRdWVyeSgnIycgKyBwaW5JbmRleCk7XG4gICAgICBpZigkcGluLmxlbmd0aCA+IDApe1xuICAgICAgICAkcGluLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgbWFwLmNvbnRhaW5lci5hcHBlbmQoJzxkaXYgaWQ9XCInICsgcGluSW5kZXggKyAnXCIgZm9yPVwiJyArIGluZGV4ICsgJ1wiIGNsYXNzPVwianF2bWFwLXBpblwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGVcIj4nICsgcGluICsgJzwvZGl2PicpO1xuICAgIH0pO1xuICB9IGVsc2UgeyAvL3RyZWF0IHBpbiBhcyBpZCBvZiBhbiBodG1sIGNvbnRlbnRcbiAgICBqUXVlcnkuZWFjaChwaW5zLCBmdW5jdGlvbihpbmRleCwgcGluKXtcbiAgICAgIGlmKGpRdWVyeSgnIycgKyBtYXAuZ2V0Q291bnRyeUlkKGluZGV4KSkubGVuZ3RoID09PSAwKXtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHBpbkluZGV4ID0gbWFwLmdldFBpbklkKGluZGV4KTtcbiAgICAgIHZhciAkcGluID0galF1ZXJ5KCcjJyArIHBpbkluZGV4KTtcbiAgICAgIGlmKCRwaW4ubGVuZ3RoID4gMCl7XG4gICAgICAgICRwaW4ucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBtYXAuY29udGFpbmVyLmFwcGVuZCgnPGRpdiBpZD1cIicgKyBwaW5JbmRleCArICdcIiBmb3I9XCInICsgaW5kZXggKyAnXCIgY2xhc3M9XCJqcXZtYXAtcGluXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZVwiPjwvZGl2PicpO1xuICAgICAgJHBpbi5hcHBlbmQoalF1ZXJ5KCcjJyArIHBpbikpO1xuICAgIH0pO1xuICB9XG5cbiAgdGhpcy5wb3NpdGlvblBpbnMoKTtcbiAgaWYoIXRoaXMucGluSGFuZGxlcnMpe1xuICAgIHRoaXMucGluSGFuZGxlcnMgPSB0cnVlO1xuICAgIHZhciBwb3NpdGlvbkZpeCA9IGZ1bmN0aW9uKCl7XG4gICAgICBtYXAucG9zaXRpb25QaW5zKCk7XG4gICAgfTtcbiAgICB0aGlzLmNvbnRhaW5lci5iaW5kKCd6b29tSW4nLCBwb3NpdGlvbkZpeClcbiAgICAgIC5iaW5kKCd6b29tT3V0JywgcG9zaXRpb25GaXgpXG4gICAgICAuYmluZCgnZHJhZycsIHBvc2l0aW9uRml4KTtcbiAgfVxufTtcblxuSlFWTWFwLnByb3RvdHlwZS5wb3NpdGlvblBpbnMgPSBmdW5jdGlvbigpe1xuICB2YXIgbWFwID0gdGhpcztcbiAgdmFyIHBpbnMgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcuanF2bWFwLXBpbicpO1xuICBqUXVlcnkuZWFjaChwaW5zLCBmdW5jdGlvbihpbmRleCwgcGluT2JqKXtcbiAgICBwaW5PYmogPSBqUXVlcnkocGluT2JqKTtcbiAgICB2YXIgY291bnRyeUlkID0gbWFwLmdldENvdW50cnlJZChwaW5PYmouYXR0cignZm9yJykudG9Mb3dlckNhc2UoKSk7XG4gICAgdmFyIGNvdW50cnlPYmogPSBqUXVlcnkoJyMnICsgY291bnRyeUlkKTtcbiAgICB2YXIgYmJveCA9IGNvdW50cnlPYmpbMF0uZ2V0QkJveCgpO1xuXG4gICAgdmFyIHNjYWxlID0gbWFwLnNjYWxlO1xuICAgIHZhciByb290Q29vcmRzID0gbWFwLmNhbnZhcy5yb290R3JvdXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIG1hcENvb3JkcyA9IG1hcC5jb250YWluZXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGNvb3JkcyA9IHtcbiAgICAgIGxlZnQ6IHJvb3RDb29yZHMubGVmdCAtIG1hcENvb3Jkcy5sZWZ0LFxuICAgICAgdG9wOiByb290Q29vcmRzLnRvcCAtIG1hcENvb3Jkcy50b3BcbiAgICB9O1xuXG4gICAgdmFyIG1pZGRsZVggPSAoYmJveC54ICogc2NhbGUpICsgKChiYm94LndpZHRoICogc2NhbGUpIC8gMik7XG4gICAgdmFyIG1pZGRsZVkgPSAoYmJveC55ICogc2NhbGUpICsgKChiYm94LmhlaWdodCAqIHNjYWxlKSAvIDIpO1xuXG4gICAgcGluT2JqLmNzcyh7XG4gICAgICBsZWZ0OiBjb29yZHMubGVmdCArIG1pZGRsZVggLSAocGluT2JqLndpZHRoKCkgLyAyKSxcbiAgICAgIHRvcDogY29vcmRzLnRvcCArIG1pZGRsZVkgLSAocGluT2JqLmhlaWdodCgpIC8gMilcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnJlbW92ZVBpbiA9IGZ1bmN0aW9uKGNjKSB7XG4gIGNjID0gY2MudG9Mb3dlckNhc2UoKTtcbiAgalF1ZXJ5KCcjJyArIHRoaXMuZ2V0UGluSWQoY2MpKS5yZW1vdmUoKTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUucmVtb3ZlUGlucyA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuY29udGFpbmVyLmZpbmQoJy5qcXZtYXAtcGluJykucmVtb3ZlKCk7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jb3VudHJpZXMpIHtcbiAgICB0aGlzLmNvdW50cmllc1trZXldLnNldEZpbGwodGhpcy5jb2xvcik7XG4gIH1cbiAgdGhpcy5zY2FsZSA9IHRoaXMuYmFzZVNjYWxlO1xuICB0aGlzLnRyYW5zWCA9IHRoaXMuYmFzZVRyYW5zWDtcbiAgdGhpcy50cmFuc1kgPSB0aGlzLmJhc2VUcmFuc1k7XG4gIHRoaXMuYXBwbHlUcmFuc2Zvcm0oKTtcbiAgdGhpcy56b29tQ3VyU3RlcCA9IDE7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGN1ckJhc2VTY2FsZSA9IHRoaXMuYmFzZVNjYWxlO1xuICBpZiAodGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0ID4gdGhpcy5kZWZhdWx0V2lkdGggLyB0aGlzLmRlZmF1bHRIZWlnaHQpIHtcbiAgICB0aGlzLmJhc2VTY2FsZSA9IHRoaXMuaGVpZ2h0IC8gdGhpcy5kZWZhdWx0SGVpZ2h0O1xuICAgIHRoaXMuYmFzZVRyYW5zWCA9IE1hdGguYWJzKHRoaXMud2lkdGggLSB0aGlzLmRlZmF1bHRXaWR0aCAqIHRoaXMuYmFzZVNjYWxlKSAvICgyICogdGhpcy5iYXNlU2NhbGUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuYmFzZVNjYWxlID0gdGhpcy53aWR0aCAvIHRoaXMuZGVmYXVsdFdpZHRoO1xuICAgIHRoaXMuYmFzZVRyYW5zWSA9IE1hdGguYWJzKHRoaXMuaGVpZ2h0IC0gdGhpcy5kZWZhdWx0SGVpZ2h0ICogdGhpcy5iYXNlU2NhbGUpIC8gKDIgKiB0aGlzLmJhc2VTY2FsZSk7XG4gIH1cbiAgdGhpcy5zY2FsZSAqPSB0aGlzLmJhc2VTY2FsZSAvIGN1ckJhc2VTY2FsZTtcbiAgdGhpcy50cmFuc1ggKj0gdGhpcy5iYXNlU2NhbGUgLyBjdXJCYXNlU2NhbGU7XG4gIHRoaXMudHJhbnNZICo9IHRoaXMuYmFzZVNjYWxlIC8gY3VyQmFzZVNjYWxlO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAoY2MsIHBhdGgpIHtcbiAgY2MgPSBjYy50b0xvd2VyQ2FzZSgpO1xuICBwYXRoID0gcGF0aCB8fCBqUXVlcnkoJyMnICsgdGhpcy5nZXRDb3VudHJ5SWQoY2MpKVswXTtcblxuICBpZiAoIXRoaXMuaXNTZWxlY3RlZChjYykpIHtcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdFJlZ2lvbikge1xuICAgICAgdGhpcy5zZWxlY3RlZFJlZ2lvbnMucHVzaChjYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRSZWdpb25zID0gW2NjXTtcbiAgICB9XG5cbiAgICBqUXVlcnkodGhpcy5jb250YWluZXIpLnRyaWdnZXIoJ3JlZ2lvblNlbGVjdC5qcXZtYXAnLCBbY2NdKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZENvbG9yICYmIHBhdGgpIHtcbiAgICAgIHBhdGguY3VycmVudEZpbGxDb2xvciA9IHRoaXMuc2VsZWN0ZWRDb2xvcjtcbiAgICAgIHBhdGguc2V0RmlsbCh0aGlzLnNlbGVjdGVkQ29sb3IpO1xuICAgIH1cbiAgfVxufTtcblxuSlFWTWFwLnByb3RvdHlwZS5zZWxlY3RJbmRleCA9IGZ1bmN0aW9uIChjYykge1xuICBjYyA9IGNjLnRvTG93ZXJDYXNlKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZFJlZ2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY2MgPT09IHRoaXMuc2VsZWN0ZWRSZWdpb25zW2ldKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5zZXRCYWNrZ3JvdW5kQ29sb3IgPSBmdW5jdGlvbiAoYmFja2dyb3VuZENvbG9yKSB7XG4gIHRoaXMuY29udGFpbmVyLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGJhY2tncm91bmRDb2xvcik7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnNldENvbG9ycyA9IGZ1bmN0aW9uIChrZXksIGNvbG9yKSB7XG4gIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgIHRoaXMuY291bnRyaWVzW2tleV0uc2V0RmlsbChjb2xvcik7XG4gICAgdGhpcy5jb3VudHJpZXNba2V5XS5zZXRBdHRyaWJ1dGUoJ29yaWdpbmFsJywgY29sb3IpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjb2xvcnMgPSBrZXk7XG5cbiAgICBmb3IgKHZhciBjb2RlIGluIGNvbG9ycykge1xuICAgICAgaWYgKHRoaXMuY291bnRyaWVzW2NvZGVdKSB7XG4gICAgICAgIHRoaXMuY291bnRyaWVzW2NvZGVdLnNldEZpbGwoY29sb3JzW2NvZGVdKTtcbiAgICAgICAgdGhpcy5jb3VudHJpZXNbY29kZV0uc2V0QXR0cmlidXRlKCdvcmlnaW5hbCcsIGNvbG9yc1tjb2RlXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnNldE5vcm1hbGl6ZUZ1bmN0aW9uID0gZnVuY3Rpb24gKGYpIHtcbiAgdGhpcy5jb2xvclNjYWxlLnNldE5vcm1hbGl6ZUZ1bmN0aW9uKGYpO1xuXG4gIGlmICh0aGlzLnZhbHVlcykge1xuICAgIHRoaXMuc2V0VmFsdWVzKHRoaXMudmFsdWVzKTtcbiAgfVxufTtcblxuSlFWTWFwLnByb3RvdHlwZS5zZXRTY2FsZSA9IGZ1bmN0aW9uIChzY2FsZSkge1xuICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gIHRoaXMuYXBwbHlUcmFuc2Zvcm0oKTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuc2V0U2NhbGVDb2xvcnMgPSBmdW5jdGlvbiAoY29sb3JzKSB7XG4gIHRoaXMuY29sb3JTY2FsZS5zZXRDb2xvcnMoY29sb3JzKTtcblxuICBpZiAodGhpcy52YWx1ZXMpIHtcbiAgICB0aGlzLnNldFZhbHVlcyh0aGlzLnZhbHVlcyk7XG4gIH1cbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICB2YXIgbWF4ID0gMCxcbiAgICBtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgIHZhbDtcblxuICBmb3IgKHZhciBjYyBpbiB2YWx1ZXMpIHtcbiAgICBjYyA9IGNjLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gcGFyc2VGbG9hdCh2YWx1ZXNbY2NdKTtcblxuICAgIGlmIChpc05hTih2YWwpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKHZhbCA+IG1heCkge1xuICAgICAgbWF4ID0gdmFsdWVzW2NjXTtcbiAgICB9XG4gICAgaWYgKHZhbCA8IG1pbikge1xuICAgICAgbWluID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtaW4gPT09IG1heCkge1xuICAgIG1heCsrO1xuICB9XG5cbiAgdGhpcy5jb2xvclNjYWxlLnNldE1pbihtaW4pO1xuICB0aGlzLmNvbG9yU2NhbGUuc2V0TWF4KG1heCk7XG5cbiAgdmFyIGNvbG9ycyA9IHt9O1xuICBmb3IgKGNjIGluIHZhbHVlcykge1xuICAgIGNjID0gY2MudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSBwYXJzZUZsb2F0KHZhbHVlc1tjY10pO1xuICAgIGNvbG9yc1tjY10gPSBpc05hTih2YWwpID8gdGhpcy5jb2xvciA6IHRoaXMuY29sb3JTY2FsZS5nZXRDb2xvcih2YWwpO1xuICB9XG4gIHRoaXMuc2V0Q29sb3JzKGNvbG9ycyk7XG4gIHRoaXMudmFsdWVzID0gdmFsdWVzO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS51bmhpZ2hsaWdodCA9IGZ1bmN0aW9uIChjYywgcGF0aCkge1xuICBjYyA9IGNjLnRvTG93ZXJDYXNlKCk7XG4gIHBhdGggPSBwYXRoIHx8IGpRdWVyeSgnIycgKyB0aGlzLmdldENvdW50cnlJZChjYykpWzBdO1xuICBwYXRoLnNldE9wYWNpdHkoMSk7XG4gIGlmIChwYXRoLmN1cnJlbnRGaWxsQ29sb3IpIHtcbiAgICBwYXRoLnNldEZpbGwocGF0aC5jdXJyZW50RmlsbENvbG9yKTtcbiAgfVxufTtcblxuSlFWTWFwLnByb3RvdHlwZS56b29tSW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtYXAgPSB0aGlzO1xuICB2YXIgc2xpZGVyRGVsdGEgPSAoalF1ZXJ5KCcjem9vbScpLmlubmVySGVpZ2h0KCkgLSA2ICogMiAtIDE1ICogMiAtIDMgKiAyIC0gNyAtIDYpIC8gKHRoaXMuem9vbU1heFN0ZXAgLSB0aGlzLnpvb21DdXJTdGVwKTtcblxuICBpZiAobWFwLnpvb21DdXJTdGVwIDwgbWFwLnpvb21NYXhTdGVwKSB7XG4gICAgbWFwLnRyYW5zWCAtPSAobWFwLndpZHRoIC8gbWFwLnNjYWxlIC0gbWFwLndpZHRoIC8gKG1hcC5zY2FsZSAqIG1hcC56b29tU3RlcCkpIC8gMjtcbiAgICBtYXAudHJhbnNZIC09IChtYXAuaGVpZ2h0IC8gbWFwLnNjYWxlIC0gbWFwLmhlaWdodCAvIChtYXAuc2NhbGUgKiBtYXAuem9vbVN0ZXApKSAvIDI7XG4gICAgbWFwLnNldFNjYWxlKG1hcC5zY2FsZSAqIG1hcC56b29tU3RlcCk7XG4gICAgbWFwLnpvb21DdXJTdGVwKys7XG5cbiAgICB2YXIgJHNsaWRlciA9IGpRdWVyeSgnI3pvb21TbGlkZXInKTtcblxuICAgICRzbGlkZXIuY3NzKCd0b3AnLCBwYXJzZUludCgkc2xpZGVyLmNzcygndG9wJyksIDEwKSAtIHNsaWRlckRlbHRhKTtcblxuICAgIG1hcC5jb250YWluZXIudHJpZ2dlcignem9vbUluJyk7XG4gIH1cbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuem9vbU91dCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1hcCA9IHRoaXM7XG4gIHZhciBzbGlkZXJEZWx0YSA9IChqUXVlcnkoJyN6b29tJykuaW5uZXJIZWlnaHQoKSAtIDYgKiAyIC0gMTUgKiAyIC0gMyAqIDIgLSA3IC0gNikgLyAodGhpcy56b29tTWF4U3RlcCAtIHRoaXMuem9vbUN1clN0ZXApO1xuXG4gIGlmIChtYXAuem9vbUN1clN0ZXAgPiAxKSB7XG4gICAgbWFwLnRyYW5zWCArPSAobWFwLndpZHRoIC8gKG1hcC5zY2FsZSAvIG1hcC56b29tU3RlcCkgLSBtYXAud2lkdGggLyBtYXAuc2NhbGUpIC8gMjtcbiAgICBtYXAudHJhbnNZICs9IChtYXAuaGVpZ2h0IC8gKG1hcC5zY2FsZSAvIG1hcC56b29tU3RlcCkgLSBtYXAuaGVpZ2h0IC8gbWFwLnNjYWxlKSAvIDI7XG4gICAgbWFwLnNldFNjYWxlKG1hcC5zY2FsZSAvIG1hcC56b29tU3RlcCk7XG4gICAgbWFwLnpvb21DdXJTdGVwLS07XG5cbiAgICB2YXIgJHNsaWRlciA9IGpRdWVyeSgnI3pvb21TbGlkZXInKTtcblxuICAgICRzbGlkZXIuY3NzKCd0b3AnLCBwYXJzZUludCgkc2xpZGVyLmNzcygndG9wJyksIDEwKSArIHNsaWRlckRlbHRhKTtcblxuICAgIG1hcC5jb250YWluZXIudHJpZ2dlcignem9vbU91dCcpO1xuICB9XG59O1xuXG5WZWN0b3JDYW52YXMucHJvdG90eXBlLmFwcGx5VHJhbnNmb3JtUGFyYW1zID0gZnVuY3Rpb24gKHNjYWxlLCB0cmFuc1gsIHRyYW5zWSkge1xuICBpZiAodGhpcy5tb2RlID09PSAnc3ZnJykge1xuICAgIHRoaXMucm9vdEdyb3VwLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgJ3NjYWxlKCcgKyBzY2FsZSArICcpIHRyYW5zbGF0ZSgnICsgdHJhbnNYICsgJywgJyArIHRyYW5zWSArICcpJyk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5yb290R3JvdXAuY29vcmRvcmlnaW4gPSAodGhpcy53aWR0aCAtIHRyYW5zWCkgKyAnLCcgKyAodGhpcy5oZWlnaHQgLSB0cmFuc1kpO1xuICAgIHRoaXMucm9vdEdyb3VwLmNvb3Jkc2l6ZSA9IHRoaXMud2lkdGggLyBzY2FsZSArICcsJyArIHRoaXMuaGVpZ2h0IC8gc2NhbGU7XG4gIH1cbn07XG5cblZlY3RvckNhbnZhcy5wcm90b3R5cGUuY3JlYXRlR3JvdXAgPSBmdW5jdGlvbiAoaXNSb290KSB7XG4gIHZhciBub2RlO1xuICBpZiAodGhpcy5tb2RlID09PSAnc3ZnJykge1xuICAgIG5vZGUgPSB0aGlzLmNyZWF0ZVN2Z05vZGUoJ2cnKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlID0gdGhpcy5jcmVhdGVWbWxOb2RlKCdncm91cCcpO1xuICAgIG5vZGUuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICBub2RlLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICBub2RlLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICBub2RlLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIG5vZGUuY29vcmRvcmlnaW4gPSAnMCAwJztcbiAgICBub2RlLmNvb3Jkc2l6ZSA9IHRoaXMud2lkdGggKyAnICcgKyB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChpc1Jvb3QpIHtcbiAgICB0aGlzLnJvb3RHcm91cCA9IG5vZGU7XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5WZWN0b3JDYW52YXMucHJvdG90eXBlLmNyZWF0ZVBhdGggPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHZhciBub2RlO1xuICBpZiAodGhpcy5tb2RlID09PSAnc3ZnJykge1xuICAgIG5vZGUgPSB0aGlzLmNyZWF0ZVN2Z05vZGUoJ3BhdGgnKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgnZCcsIGNvbmZpZy5wYXRoKTtcblxuICAgIGlmICh0aGlzLnBhcmFtcy5ib3JkZXJDb2xvciAhPT0gbnVsbCkge1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoaXMucGFyYW1zLmJvcmRlckNvbG9yKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFyYW1zLmJvcmRlcldpZHRoID4gMCkge1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIHRoaXMucGFyYW1zLmJvcmRlcldpZHRoKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJhbXMuYm9yZGVyT3BhY2l0eSA+IDApIHtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdzdHJva2Utb3BhY2l0eScsIHRoaXMucGFyYW1zLmJvcmRlck9wYWNpdHkpO1xuICAgIH1cblxuICAgIG5vZGUuc2V0RmlsbCA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBjb2xvcik7XG4gICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ29yaWdpbmFsJykgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ29yaWdpbmFsJywgY29sb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBub2RlLmdldEZpbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKTtcbiAgICB9O1xuXG4gICAgbm9kZS5nZXRPcmlnaW5hbEZpbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ29yaWdpbmFsJyk7XG4gICAgfTtcblxuICAgIG5vZGUuc2V0T3BhY2l0eSA9IGZ1bmN0aW9uIChvcGFjaXR5KSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZmlsbC1vcGFjaXR5Jywgb3BhY2l0eSk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBub2RlID0gdGhpcy5jcmVhdGVWbWxOb2RlKCdzaGFwZScpO1xuICAgIG5vZGUuY29vcmRvcmlnaW4gPSAnMCAwJztcbiAgICBub2RlLmNvb3Jkc2l6ZSA9IHRoaXMud2lkdGggKyAnICcgKyB0aGlzLmhlaWdodDtcbiAgICBub2RlLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG4gICAgbm9kZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgbm9kZS5maWxsY29sb3IgPSBKUVZNYXAuZGVmYXVsdEZpbGxDb2xvcjtcbiAgICBub2RlLnN0cm9rZWQgPSBmYWxzZTtcbiAgICBub2RlLnBhdGggPSBWZWN0b3JDYW52YXMucGF0aFN2Z1RvVm1sKGNvbmZpZy5wYXRoKTtcblxuICAgIHZhciBzY2FsZSA9IHRoaXMuY3JlYXRlVm1sTm9kZSgnc2tldycpO1xuICAgIHNjYWxlLm9uID0gdHJ1ZTtcbiAgICBzY2FsZS5tYXRyaXggPSAnMC4wMSwwLDAsMC4wMSwwLDAnO1xuICAgIHNjYWxlLm9mZnNldCA9ICcwLDAnO1xuXG4gICAgbm9kZS5hcHBlbmRDaGlsZChzY2FsZSk7XG5cbiAgICB2YXIgZmlsbCA9IHRoaXMuY3JlYXRlVm1sTm9kZSgnZmlsbCcpO1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQoZmlsbCk7XG5cbiAgICBub2RlLnNldEZpbGwgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICAgIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpbGwnKVswXS5jb2xvciA9IGNvbG9yO1xuICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCdvcmlnaW5hbCcpID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdvcmlnaW5hbCcsIGNvbG9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbm9kZS5nZXRGaWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpbGwnKVswXS5jb2xvcjtcbiAgICB9O1xuICAgIG5vZGUuZ2V0T3JpZ2luYWxGaWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdvcmlnaW5hbCcpO1xuICAgIH07XG4gICAgbm9kZS5zZXRPcGFjaXR5ID0gZnVuY3Rpb24gKG9wYWNpdHkpIHtcbiAgICAgIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpbGwnKVswXS5vcGFjaXR5ID0gcGFyc2VJbnQob3BhY2l0eSAqIDEwMCwgMTApICsgJyUnO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5WZWN0b3JDYW52YXMucHJvdG90eXBlLnBhdGhTdmdUb1ZtbCA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGN4ID0gMCwgY3kgPSAwLCBjdHJseCwgY3RybHk7XG5cbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvKFtNbUxsSGhWdkNjU3NdKSgoPzotPyg/OlxcZCspPyg/OlxcLlxcZCspPyw/XFxzPykrKS9nLCBmdW5jdGlvbiAoc2VnbWVudCwgbGV0dGVyLCBjb29yZHMpIHtcbiAgICBjb29yZHMgPSBjb29yZHMucmVwbGFjZSgvKFxcZCktL2csICckMSwtJykucmVwbGFjZSgvXFxzKy9nLCAnLCcpLnNwbGl0KCcsJyk7XG4gICAgaWYgKCFjb29yZHNbMF0pIHtcbiAgICAgIGNvb3Jkcy5zaGlmdCgpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gY29vcmRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29vcmRzW2ldID0gTWF0aC5yb3VuZCgxMDAgKiBjb29yZHNbaV0pO1xuICAgIH1cblxuICAgIHN3aXRjaCAobGV0dGVyKSB7XG4gICAgICBjYXNlICdtJzpcbiAgICAgICAgY3ggKz0gY29vcmRzWzBdO1xuICAgICAgICBjeSArPSBjb29yZHNbMV07XG4gICAgICAgIHJlc3VsdCA9ICd0JyArIGNvb3Jkcy5qb2luKCcsJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdNJzpcbiAgICAgICAgY3ggPSBjb29yZHNbMF07XG4gICAgICAgIGN5ID0gY29vcmRzWzFdO1xuICAgICAgICByZXN1bHQgPSAnbScgKyBjb29yZHMuam9pbignLCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbCc6XG4gICAgICAgIGN4ICs9IGNvb3Jkc1swXTtcbiAgICAgICAgY3kgKz0gY29vcmRzWzFdO1xuICAgICAgICByZXN1bHQgPSAncicgKyBjb29yZHMuam9pbignLCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIGN4ID0gY29vcmRzWzBdO1xuICAgICAgICBjeSA9IGNvb3Jkc1sxXTtcbiAgICAgICAgcmVzdWx0ID0gJ2wnICsgY29vcmRzLmpvaW4oJywnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2gnOlxuICAgICAgICBjeCArPSBjb29yZHNbMF07XG4gICAgICAgIHJlc3VsdCA9ICdyJyArIGNvb3Jkc1swXSArICcsMCc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdIJzpcbiAgICAgICAgY3ggPSBjb29yZHNbMF07XG4gICAgICAgIHJlc3VsdCA9ICdsJyArIGN4ICsgJywnICsgY3k7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd2JzpcbiAgICAgICAgY3kgKz0gY29vcmRzWzBdO1xuICAgICAgICByZXN1bHQgPSAncjAsJyArIGNvb3Jkc1swXTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ1YnOlxuICAgICAgICBjeSA9IGNvb3Jkc1swXTtcbiAgICAgICAgcmVzdWx0ID0gJ2wnICsgY3ggKyAnLCcgKyBjeTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICBjdHJseCA9IGN4ICsgY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSA0XTtcbiAgICAgICAgY3RybHkgPSBjeSArIGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gM107XG4gICAgICAgIGN4ICs9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMl07XG4gICAgICAgIGN5ICs9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIHJlc3VsdCA9ICd2JyArIGNvb3Jkcy5qb2luKCcsJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdDJzpcbiAgICAgICAgY3RybHggPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDRdO1xuICAgICAgICBjdHJseSA9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gM107XG4gICAgICAgIGN4ID0gY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAyXTtcbiAgICAgICAgY3kgPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICByZXN1bHQgPSAnYycgKyBjb29yZHMuam9pbignLCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncyc6XG4gICAgICAgIGNvb3Jkcy51bnNoaWZ0KGN5IC0gY3RybHkpO1xuICAgICAgICBjb29yZHMudW5zaGlmdChjeCAtIGN0cmx4KTtcbiAgICAgICAgY3RybHggPSBjeCArIGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gNF07XG4gICAgICAgIGN0cmx5ID0gY3kgKyBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDNdO1xuICAgICAgICBjeCArPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDJdO1xuICAgICAgICBjeSArPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICByZXN1bHQgPSAndicgKyBjb29yZHMuam9pbignLCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnUyc6XG4gICAgICAgIGNvb3Jkcy51bnNoaWZ0KGN5ICsgY3kgLSBjdHJseSk7XG4gICAgICAgIGNvb3Jkcy51bnNoaWZ0KGN4ICsgY3ggLSBjdHJseCk7XG4gICAgICAgIGN0cmx4ID0gY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSA0XTtcbiAgICAgICAgY3RybHkgPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDNdO1xuICAgICAgICBjeCA9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMl07XG4gICAgICAgIGN5ID0gY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgcmVzdWx0ID0gJ2MnICsgY29vcmRzLmpvaW4oJywnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG5cbiAgfSkucmVwbGFjZSgvei9nLCAnJyk7XG59O1xuXG5WZWN0b3JDYW52YXMucHJvdG90eXBlLnNldFNpemUgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICBpZiAodGhpcy5tb2RlID09PSAnc3ZnJykge1xuICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCk7XG4gICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgdGhpcy5jYW52YXMuY29vcmRzaXplID0gd2lkdGggKyAnICcgKyBoZWlnaHQ7XG4gICAgdGhpcy5jYW52YXMuY29vcmRvcmlnaW4gPSAnMCAwJztcbiAgICBpZiAodGhpcy5yb290R3JvdXApIHtcbiAgICAgIHZhciBwYXRocyA9IHRoaXMucm9vdEdyb3VwLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzaGFwZScpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYXRocy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcGF0aHNbaV0uY29vcmRzaXplID0gd2lkdGggKyAnICcgKyBoZWlnaHQ7XG4gICAgICAgIHBhdGhzW2ldLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICBwYXRoc1tpXS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgfVxuICAgICAgdGhpcy5yb290R3JvdXAuY29vcmRzaXplID0gd2lkdGggKyAnICcgKyBoZWlnaHQ7XG4gICAgICB0aGlzLnJvb3RHcm91cC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgIHRoaXMucm9vdEdyb3VwLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgfVxuICB9XG4gIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuIiwiaWYodHlwZW9mIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbW9tZW50X18gPT09ICd1bmRlZmluZWQnKSB7IHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdtb21lbnQnXCIpOyBlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7IHRocm93IGU7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21vbWVudF9fOyJdLCJzb3VyY2VSb290IjoiIn0=