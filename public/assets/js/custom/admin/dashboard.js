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
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var plugins_modules_jqvmap_jquery_vmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! plugins/modules/jqvmap/jquery.vmap */ "./src/assets/plugins/modules/jqvmap/jquery.vmap.js");
/* harmony import */ var plugins_modules_jqvmap_maps_jquery_vmap_world_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! plugins/modules/jqvmap/maps/jquery.vmap.world.js */ "./src/assets/plugins/modules/jqvmap/maps/jquery.vmap.world.js");
/* harmony import */ var plugins_modules_jqvmap_maps_jquery_vmap_world_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(plugins_modules_jqvmap_maps_jquery_vmap_world_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chart_chartjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart/chartjs.js */ "./src/assets/plugins/flexadmin/js/chart/chartjs.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var DemoDashboardEcommerce = /*#__PURE__*/function () {
  function DemoDashboardEcommerce() {
    _classCallCheck(this, DemoDashboardEcommerce);

    _defineProperty(this, "_applyChart", function () {
      var chart = new _chart_chartjs_js__WEBPACK_IMPORTED_MODULE_3__.default();
      chart.lineChart("dashboard-line-chartjs");
      chart.doughnutChart("dashboard-doughnut-chartjs");
      chart.progressBarChart("dashboard-progress-bar-chartjs");
      chart.barChart("dashboard-bar-chartjs");
    });

    _defineProperty(this, "_applyDataTable", function () {
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

    _defineProperty(this, "_applyMap", function () {
      var activeColor = window.colors.blue;
      var selectedCountries = ["us", "ru"];
      var colors = {
        us: activeColor,
        ru: activeColor,
        au: activeColor
      };
      $("#world_map").vectorMap(_defineProperty({
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

  _createClass(DemoDashboardEcommerce, [{
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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_19__);
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
  var mapData = JQVMap.maps[params.map];
  var mapPins;

  if (!mapData) {
    throw new Error('Invalid "' + params.map + '" map parameter. Please make sure you have loaded this map file in your HTML.');
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

  if (params.values) {
    this.values = params.values;
    this.setValues(params.values);
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
      map['set' + arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1)].apply(map, Array.prototype.slice.call(arguments, 2));
    } else if (typeof options === 'string' && typeof map[options] === 'function') {
      return map[options].apply(map, Array.prototype.slice.call(arguments, 1));
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
          this.bind(apiEvents[e] + '.jqvmap', defaultParams[e]);
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
  return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
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
  var map = this;
  this.container.find('.jqvmap-zoomin').click(function () {
    map.zoomIn();
  });
  this.container.find('.jqvmap-zoomout').click(function () {
    map.zoomOut();
  });
};

JQVMap.prototype.deselect = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];

  if (this.isSelected(cc)) {
    this.selectedRegions.splice(this.selectIndex(cc), 1);
    jQuery(this.container).trigger('regionDeselect.jqvmap', [cc]);
    path.currentFillColor = path.getOriginalFill();
    path.setFill(path.getOriginalFill());
  } else {
    for (var key in this.countries) {
      this.selectedRegions.splice(this.selectedRegions.indexOf(key), 1);
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
  var pins = this.container.find('.jqvmap-pin');
  var ret = {};
  jQuery.each(pins, function (index, pinObj) {
    pinObj = jQuery(pinObj);
    var cc = pinObj.attr('for').toLowerCase();
    var pinContent = pinObj.html();
    ret[cc] = pinContent;
  });
  return JSON.stringify(ret);
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
    self.isMovingTimeout = setTimeout(function () {
      self.isMoving = false;
    }, 100);
    return false;
  }).mouseout(function () {
    if (mouseDown && self.isMoving) {
      clearTimeout(self.isMovingTimeout);
      self.isMovingTimeout = setTimeout(function () {
        mouseDown = false;
        self.isMoving = false;
      }, 100);
      return false;
    }
  });
  jQuery(this.container).bind('touchmove', function (e) {
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
  jQuery(this.container).bind('touchstart', function () {
    lastTouchCount = 0;
  });
  jQuery(this.container).bind('touchend', function () {
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
    this.pinHandlers = true;

    var positionFix = function positionFix() {
      map.positionPins();
    };

    this.container.bind('zoomIn', positionFix).bind('zoomOut', positionFix).bind('drag', positionFix);
  }
};

JQVMap.prototype.positionPins = function () {
  var map = this;
  var pins = this.container.find('.jqvmap-pin');
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
  this.container.find('.jqvmap-pin').remove();
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

  if (this.values) {
    this.setValues(this.values);
  }
};

JQVMap.prototype.setScale = function (scale) {
  this.scale = scale;
  this.applyTransform();
};

JQVMap.prototype.setScaleColors = function (colors) {
  this.colorScale.setColors(colors);

  if (this.values) {
    this.setValues(this.values);
  }
};

JQVMap.prototype.setValues = function (values) {
  var max = 0,
      min = Number.MAX_VALUE,
      val;

  for (var cc in values) {
    cc = cc.toLowerCase();
    val = parseFloat(values[cc]);

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
    val = parseFloat(values[cc]);
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
    $slider.css('top', parseInt($slider.css('top'), 10) - sliderDelta);
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
    $slider.css('top', parseInt($slider.css('top'), 10) + sliderDelta);
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
      this.getElementsByTagName('fill')[0].opacity = parseInt(opacity * 100, 10) + '%';
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["commons/backend/admin/commonVendor","commons/backend/admin/commonCustomModules"], function() { return __webpack_exec__("./src/assets/js/custom/admin/dashboard/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGx1Z2lucy9mbGV4YWRtaW4vanMvZGFzaGJvYXJkX2Vjb21tZXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BsdWdpbnMvbW9kdWxlcy9qcXZtYXAvanF1ZXJ5LnZtYXAuanMiXSwibmFtZXMiOlsiRGVtb0Rhc2hib2FyZEVjb21tZXJjZSIsImNoYXJ0IiwiQ2hhcnRqcyIsImxpbmVDaGFydCIsImRvdWdobnV0Q2hhcnQiLCJwcm9ncmVzc0JhckNoYXJ0IiwiYmFyQ2hhcnQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRhYmxlIiwiJCIsIkRhdGFUYWJsZSIsInJlc3BvbnNpdmUiLCJwYWdlTGVuZ3RoIiwib3JkZXIiLCJjb2x1bW5EZWZzIiwidGFyZ2V0cyIsIm9yZGVyYWJsZSIsImFjdGl2ZUNvbG9yIiwid2luZG93IiwiY29sb3JzIiwiYmx1ZSIsInNlbGVjdGVkQ291bnRyaWVzIiwidXMiLCJydSIsImF1IiwidmVjdG9yTWFwIiwibWFwIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJPcGFjaXR5IiwiYm9yZGVyV2lkdGgiLCJjb2xvciIsImdyYXkiLCJlbmFibGVab29tIiwiaG92ZXJDb2xvciIsImhvdmVyT3BhY2l0eSIsIm5vcm1hbGl6ZUZ1bmN0aW9uIiwic2NhbGVDb2xvcnMiLCJzZWxlY3RlZENvbG9yIiwic2VsZWN0ZWRSZWdpb25zIiwic2hvd1Rvb2x0aXAiLCJfYXBwbHlDaGFydCIsIl9hcHBseURhdGFUYWJsZSIsIl9hcHBseU1hcCIsImluaXQiLCJWZWN0b3JDYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInBhcmFtcyIsIm1vZGUiLCJTVkdBbmdsZSIsImNyZWF0ZVN2Z05vZGUiLCJub2RlTmFtZSIsImNyZWF0ZUVsZW1lbnROUyIsInN2Z25zIiwibmFtZXNwYWNlcyIsInJ2bWwiLCJhZGQiLCJjcmVhdGVWbWxOb2RlIiwidGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJlIiwiY3JlYXRlU3R5bGVTaGVldCIsImFkZFJ1bGUiLCJjYW52YXMiLCJzdHlsZSIsInBvc2l0aW9uIiwic2V0U2l6ZSIsInByb3RvdHlwZSIsIkNvbG9yU2NhbGUiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwic2V0Q29sb3JzIiwic2V0Tm9ybWFsaXplRnVuY3Rpb24iLCJzZXRNaW4iLCJzZXRNYXgiLCJKUVZNYXAiLCJtYXBEYXRhIiwibWFwcyIsIm1hcFBpbnMiLCJFcnJvciIsIm11bHRpU2VsZWN0UmVnaW9uIiwiY29udGFpbmVyIiwiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdEhlaWdodCIsImhvdmVyQ29sb3JzIiwic2V0QmFja2dyb3VuZENvbG9yIiwicmVzaXplIiwialF1ZXJ5IiwibmV3V2lkdGgiLCJuZXdIZWlnaHQiLCJhcHBseVRyYW5zZm9ybSIsInJlc2l6ZUV2ZW50IiwiRXZlbnQiLCJ0cmlnZ2VyIiwicmVtb3ZlIiwicGluSGFuZGxlcnMiLCJwbGFjZVBpbnMiLCJwaW5zIiwiYXBwZW5kIiwibWFrZURyYWdnYWJsZSIsInJvb3RHcm91cCIsImNyZWF0ZUdyb3VwIiwiaW5kZXgiLCJtYXBJbmRleCIsImxhYmVsIiwiYWRkQ2xhc3MiLCJhcHBlbmRUbyIsImhpZGUiLCJ0ZXh0IiwiaHRtbCIsImNvdW50cmllcyIsImtleSIsInBhdGhzIiwicGF0aCIsImNyZWF0ZVBhdGgiLCJzZXRGaWxsIiwiaWQiLCJnZXRDb3VudHJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJkZWxlZ2F0ZSIsImNvbnRhaW5lclBhdGgiLCJ0YXJnZXQiLCJjb2RlIiwic3BsaXQiLCJwb3AiLCJsYWJlbFNob3dFdmVudCIsInJlZ2lvbk1vdXNlT3ZlckV2ZW50IiwidG9Mb3dlckNhc2UiLCJ0eXBlIiwibmFtZSIsImlzRGVmYXVsdFByZXZlbnRlZCIsImhpZ2hsaWdodCIsInNob3ciLCJsYWJlbFdpZHRoIiwibGFiZWxIZWlnaHQiLCJ1bmhpZ2hsaWdodCIsInJlZ2lvbkNsaWNrRXZlbnQiLCJ0YXJnZXRQYXRoIiwibWFwQ2xpY2tFdmVudCIsImtleVBhdGgiLCJjdXJyZW50RmlsbENvbG9yIiwiZ2V0T3JpZ2luYWxGaWxsIiwiaXNTZWxlY3RlZCIsImRlc2VsZWN0Iiwic2VsZWN0IiwibW91c2Vtb3ZlIiwiaXMiLCJsZWZ0IiwicGFnZVgiLCJ0b3AiLCJwYWdlWSIsImNzcyIsImFwcGVuZENoaWxkIiwiY29sb3JTY2FsZSIsInZhbHVlTWluIiwidmFsdWVNYXgiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJBcnJheSIsImsiLCJiaW5kWm9vbUJ1dHRvbnMiLCJwaW5Nb2RlIiwic2hvd0xhYmVscyIsInRvVXBwZXJDYXNlIiwidHJhbnNYIiwidHJhbnNZIiwic2NhbGUiLCJiYXNlVHJhbnNYIiwiYmFzZVRyYW5zWSIsImJhc2VTY2FsZSIsImNvdW50cmllc0NvbG9ycyIsImNvdW50cmllc0RhdGEiLCJ6b29tU3RlcCIsInpvb21NYXhTdGVwIiwiem9vbUN1clN0ZXAiLCJ4bGluayIsImFwaVBhcmFtcyIsImFwaUV2ZW50cyIsIm9uTGFiZWxTaG93Iiwib25Mb2FkIiwib25SZWdpb25PdmVyIiwib25SZWdpb25PdXQiLCJvblJlZ2lvbkNsaWNrIiwib25SZWdpb25TZWxlY3QiLCJvblJlZ2lvbkRlc2VsZWN0Iiwib25SZXNpemUiLCJmbiIsIm9wdGlvbnMiLCJkZWZhdWx0UGFyYW1zIiwiZGF0YSIsImFyZ3VtZW50cyIsImNoYXJBdCIsInN1YnN0ciIsImFwcGx5Iiwic2xpY2UiLCJjYWxsIiwiZXh0ZW5kIiwib3ZlcmZsb3ciLCJ1bmJpbmQiLCJiaW5kIiwibG9hZEV2ZW50IiwiYXJyYXlUb1JnYiIsImFyIiwicmdiIiwiZCIsImkiLCJsZW5ndGgiLCJ0b1N0cmluZyIsImdldENvbG9yIiwidmFsdWUiLCJub3JtYWxpemUiLCJsZW5ndGhlcyIsImZ1bGxMZW5ndGgiLCJsIiwidmVjdG9yTGVuZ3RoIiwidmVjdG9yU3VidHJhY3QiLCJwdXNoIiwiYyIsInZlY3RvclRvTnVtIiwidmVjdG9yQWRkIiwidmVjdG9yTXVsdCIsInJnYlRvQXJyYXkiLCJwYXJzZUludCIsIm1heCIsImNsZWFyTWF4VmFsdWUiLCJtaW4iLCJjbGVhck1pblZhbHVlIiwiZiIsIk1hdGgiLCJwb3ciLCJ2ZWN0b3IxIiwidmVjdG9yMiIsInZlY3RvciIsInJlc3VsdCIsInNxcnQiLCJudW0iLCJyb3VuZCIsIm1heFRyYW5zWCIsIm1heFRyYW5zWSIsIm1pblRyYW5zWCIsIm1pblRyYW5zWSIsImFwcGx5VHJhbnNmb3JtUGFyYW1zIiwiZmluZCIsImNsaWNrIiwiem9vbUluIiwiem9vbU91dCIsImNjIiwic3BsaWNlIiwic2VsZWN0SW5kZXgiLCJpbmRleE9mIiwiZ2V0UGluIiwicGluT2JqIiwiZ2V0UGluSWQiLCJnZXRQaW5zIiwicmV0IiwiZWFjaCIsImF0dHIiLCJwaW5Db250ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsInNldE9wYWNpdHkiLCJnZXRGaWxsIiwibW91c2VEb3duIiwib2xkUGFnZVgiLCJvbGRQYWdlWSIsInNlbGYiLCJpc01vdmluZyIsImlzTW92aW5nVGltZW91dCIsImxhc3RUb3VjaENvdW50IiwidG91Y2hDZW50ZXJYIiwidG91Y2hDZW50ZXJZIiwidG91Y2hTdGFydERpc3RhbmNlIiwidG91Y2hTdGFydFNjYWxlIiwidG91Y2hYIiwidG91Y2hZIiwiY2xlYXJUaW1lb3V0IiwibW91c2Vkb3duIiwibW91c2V1cCIsInNldFRpbWVvdXQiLCJtb3VzZW91dCIsIm9mZnNldCIsInRvdWNoZXMiLCJvcmlnaW5hbEV2ZW50IiwidHJhbnNmb3JtWE9sZCIsInRyYW5zZm9ybVlPbGQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFNjYWxlIiwicGluIiwicGluSW5kZXgiLCIkcGluIiwicG9zaXRpb25QaW5zIiwicG9zaXRpb25GaXgiLCJjb3VudHJ5SWQiLCJjb3VudHJ5T2JqIiwiYmJveCIsImdldEJCb3giLCJyb290Q29vcmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibWFwQ29vcmRzIiwiY29vcmRzIiwibWlkZGxlWCIsIngiLCJtaWRkbGVZIiwieSIsInJlbW92ZVBpbiIsInJlbW92ZVBpbnMiLCJyZXNldCIsImN1ckJhc2VTY2FsZSIsImFicyIsInNldFNjYWxlQ29sb3JzIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwidmFsIiwicGFyc2VGbG9hdCIsImlzTmFOIiwic2xpZGVyRGVsdGEiLCJpbm5lckhlaWdodCIsIiRzbGlkZXIiLCJjb29yZG9yaWdpbiIsImNvb3Jkc2l6ZSIsImlzUm9vdCIsIm5vZGUiLCJjb25maWciLCJnZXRBdHRyaWJ1dGUiLCJvcGFjaXR5IiwiZmlsbGNvbG9yIiwiZGVmYXVsdEZpbGxDb2xvciIsInN0cm9rZWQiLCJwYXRoU3ZnVG9WbWwiLCJvbiIsIm1hdHJpeCIsImZpbGwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImN4IiwiY3kiLCJjdHJseCIsImN0cmx5IiwicmVwbGFjZSIsInNlZ21lbnQiLCJsZXR0ZXIiLCJzaGlmdCIsImpvaW4iLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTs7SUFFTUEsc0I7Ozs7eUNBT1UsWUFBTTtBQUNsQixVQUFJQyxLQUFLLEdBQUcsSUFBSUMsc0RBQUosRUFBWjtBQUNBRCxXQUFLLENBQUNFLFNBQU4sQ0FBZ0Isd0JBQWhCO0FBQ0FGLFdBQUssQ0FBQ0csYUFBTixDQUFvQiw0QkFBcEI7QUFDQUgsV0FBSyxDQUFDSSxnQkFBTixDQUF1QixnQ0FBdkI7QUFDQUosV0FBSyxDQUFDSyxRQUFOLENBQWUsdUJBQWY7QUFDRCxLOzs2Q0FFaUIsWUFBTTtBQUN0QixVQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsQ0FBZDtB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QUdRLENBQXRDLEVBQXlDUixDQUFDLEVBQTFDLEVBQThDO0FBQzVDN0YsYUFBSyxDQUFDNkYsQ0FBRCxDQUFMLENBQVNrSCxTQUFULEdBQXFCbFIsS0FBSyxHQUFHLEdBQVIsR0FBY0MsTUFBbkM7QUFDQWtFLGFBQUssQ0FBQzZGLENBQUQsQ0FBTCxDQUFTN0ksS0FBVCxDQUFlbkIsS0FBZixHQUF1QkEsS0FBSyxHQUFHLElBQS9CO0FBQ0FtRSxhQUFLLENBQUM2RixDQUFELENBQUwsQ0FBUzdJLEtBQVQsQ0FBZWxCLE1BQWYsR0FBd0JBLE1BQU0sR0FBRyxJQUFqQztBQUNEOztBQUNELFdBQUtzRCxTQUFMLENBQWUyTixTQUFmLEdBQTJCbFIsS0FBSyxHQUFHLEdBQVIsR0FBY0MsTUFBekM7QUFDQSxXQUFLc0QsU0FBTCxDQUFlcEMsS0FBZixDQUFxQm5CLEtBQXJCLEdBQTZCQSxLQUFLLEdBQUcsSUFBckM7QUFDQSxXQUFLdUQsU0FBTCxDQUFlcEMsS0FBZixDQUFxQmxCLE1BQXJCLEdBQThCQSxNQUFNLEdBQUcsSUFBdkM7QUFDRDtBQUNGOztBQUNELE9BQUtELEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNELENBdkJELEMiLCJmaWxlIjoianMvY3VzdG9tL2FkbWluL2Rhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtuZ2VsbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJpbXBvcnQgXCJwbHVnaW5zL21vZHVsZXMvanF2bWFwL2pxdWVyeS52bWFwXCI7XG5pbXBvcnQgXCJwbHVnaW5zL21vZHVsZXMvanF2bWFwL21hcHMvanF1ZXJ5LnZtYXAud29ybGQuanNcIjtcbmltcG9ydCBDaGFydGpzIGZyb20gXCIuL2NoYXJ0L2NoYXJ0anMuanNcIjtcblxuY2xhc3MgRGVtb0Rhc2hib2FyZEVjb21tZXJjZSB7XG4gIGluaXQoKSB7XG4gICAgdGhpcy5fYXBwbHlDaGFydCgpO1xuICAgIHRoaXMuX2FwcGx5RGF0YVRhYmxlKCk7XG4gICAgdGhpcy5fYXBwbHlNYXAoKTtcbiAgfVxuXG4gIF9hcHBseUNoYXJ0ID0gKCkgPT4ge1xuICAgIGxldCBjaGFydCA9IG5ldyBDaGFydGpzKCk7XG4gICAgY2hhcnQubGluZUNoYXJ0KFwiZGFzaGJvYXJkLWxpbmUtY2hhcnRqc1wiKTtcbiAgICBjaGFydC5kb3VnaG51dENoYXJ0KFwiZGFzaGJvYXJkLWRvdWdobnV0LWNoYXJ0anNcIik7XG4gICAgY2hhcnQucHJvZ3Jlc3NCYXJDaGFydChcImRhc2hib2FyZC1wcm9ncmVzcy1iYXItY2hhcnRqc1wiKTtcbiAgICBjaGFydC5iYXJDaGFydChcImRhc2hib2FyZC1iYXItY2hhcnRqc1wiKTtcbiAgfTtcblxuICBfYXBwbHlEYXRhVGFibGUgPSAoKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVjb21tZXJjZS1kYXRhdGFibGVcIik7XG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IHRhYmxlID0gJChlbGVtZW50KS5EYXRhVGFibGUoe1xuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgIHBhZ2VMZW5ndGg6IDEwLFxuICAgICAgb3JkZXI6IFtdLFxuICAgICAgY29sdW1uRGVmczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGFyZ2V0czogXCJuby1zb3J0XCIsXG4gICAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH07XG5cbiAgX2FwcGx5TWFwID0gKCkgPT4ge1xuICAgIHZhciBhY3RpdmVDb2xvciA9IHdpbmRvdy5jb2xvcnMuYmx1ZTtcbiAgICB2YXIgc2VsZWN0ZWRDb3VudHJpZXMgPSBbXCJ1c1wiLCBcInJ1XCJdO1xuICAgIHZhciBjb2xvcnMgPSB7IHVzOiBhY3RpdmVDb2xvciwgcnU6IGFjdGl2ZUNvbG9yLCBhdTogYWN0aXZlQ29sb3IgfTtcbiAgICAkKFwiI3dvcmxkX21hcFwiKS52ZWN0b3JNYXAoe1xuICAgICAgbWFwOiBcIndvcmxkX2VuXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIGJvcmRlckNvbG9yOiBcIiM4MTgxODFcIixcbiAgICAgIGJvcmRlck9wYWNpdHk6IDAuMjUsXG4gICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIGNvbG9yOiB3aW5kb3cuY29sb3JzLmdyYXksXG4gICAgICBlbmFibGVab29tOiB0cnVlLFxuICAgICAgaG92ZXJDb2xvcjogXCIjY2NjXCIsXG4gICAgICBob3Zlck9wYWNpdHk6IG51bGwsXG4gICAgICBub3JtYWxpemVGdW5jdGlvbjogXCJsaW5lYXJcIixcbiAgICAgIHNjYWxlQ29sb3JzOiBbXCIjYjZkNmZmXCIsIFwiIzAwNWFjZVwiXSxcbiAgICAgIHNlbGVjdGVkQ29sb3I6IFwiI2M5ZGZhZlwiLFxuICAgICAgc2VsZWN0ZWRSZWdpb25zOiBudWxsLFxuICAgICAgc2hvd1Rvb2x0aXA6IHRydWUsXG4gICAgICBjb2xvcnM6IGNvbG9ycyxcbiAgICAgIGhvdmVyT3BhY2l0eTogMC43LFxuICAgIH0pO1xuICB9O1xufVxuXG5uZXcgRGVtb0Rhc2hib2FyZEVjb21tZXJjZSgpLmluaXQoKTtcbiIsIi8qIVxuICogSlFWTWFwOiBqUXVlcnkgVmVjdG9yIE1hcCBMaWJyYXJ5XG4gKiBAYXV0aG9yIEpRVk1hcCA8bWVAcGV0ZXJzY2htYWxmZWxkdC5jb20+XG4gKiBAdmVyc2lvbiAxLjUuMVxuICogQGxpbmsgaHR0cDovL2pxdm1hcC5jb21cbiAqIEBsaWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS9tYW5pZmVzdGludGVyYWN0aXZlL2pxdm1hcC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKiBAYnVpbGRkYXRlIDIwMTYvMDYvMDJcbiAqL1xuXG52YXIgVmVjdG9yQ2FudmFzID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIHBhcmFtcykge1xuICB0aGlzLm1vZGUgPSB3aW5kb3cuU1ZHQW5nbGUgPyAnc3ZnJyA6ICd2bWwnO1xuICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcblxuICBpZiAodGhpcy5tb2RlID09PSAnc3ZnJykge1xuICAgIHRoaXMuY3JlYXRlU3ZnTm9kZSA9IGZ1bmN0aW9uIChub2RlTmFtZSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh0aGlzLnN2Z25zLCBub2RlTmFtZSk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFkb2N1bWVudC5uYW1lc3BhY2VzLnJ2bWwpIHtcbiAgICAgICAgZG9jdW1lbnQubmFtZXNwYWNlcy5hZGQoJ3J2bWwnLCAndXJuOnNjaGVtYXMtbWljcm9zb2Z0LWNvbTp2bWwnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3JlYXRlVm1sTm9kZSA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCc8cnZtbDonICsgdGFnTmFtZSArICcgY2xhc3M9XCJydm1sXCI+Jyk7XG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuY3JlYXRlVm1sTm9kZSA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCc8JyArIHRhZ05hbWUgKyAnIHhtbG5zPVwidXJuOnNjaGVtYXMtbWljcm9zb2Z0LmNvbTp2bWxcIiBjbGFzcz1cInJ2bWxcIj4nKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuY3JlYXRlU3R5bGVTaGVldCgpLmFkZFJ1bGUoJy5ydm1sJywgJ2JlaGF2aW9yOnVybCgjZGVmYXVsdCNWTUwpJyk7XG4gIH1cblxuICBpZiAodGhpcy5tb2RlID09PSAnc3ZnJykge1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVTdmdOb2RlKCdzdmcnKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuY3JlYXRlVm1sTm9kZSgnZ3JvdXAnKTtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIH1cblxuICB0aGlzLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG59O1xuXG5WZWN0b3JDYW52YXMucHJvdG90eXBlID0ge1xuICBzdmduczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgbW9kZTogJ3N2ZycsXG4gIHdpZHRoOiAwLFxuICBoZWlnaHQ6IDAsXG4gIGNhbnZhczogbnVsbFxufTtcblxudmFyIENvbG9yU2NhbGUgPSBmdW5jdGlvbiAoY29sb3JzLCBub3JtYWxpemVGdW5jdGlvbiwgbWluVmFsdWUsIG1heFZhbHVlKSB7XG4gIGlmIChjb2xvcnMpIHtcbiAgICB0aGlzLnNldENvbG9ycyhjb2xvcnMpO1xuICB9XG4gIGlmIChub3JtYWxpemVGdW5jdGlvbikge1xuICAgIHRoaXMuc2V0Tm9ybWFsaXplRnVuY3Rpb24obm9ybWFsaXplRnVuY3Rpb24pO1xuICB9XG4gIGlmIChtaW5WYWx1ZSkge1xuICAgIHRoaXMuc2V0TWluKG1pblZhbHVlKTtcbiAgfVxuICBpZiAobWluVmFsdWUpIHtcbiAgICB0aGlzLnNldE1heChtYXhWYWx1ZSk7XG4gIH1cbn07XG5cbkNvbG9yU2NhbGUucHJvdG90eXBlID0ge1xuICBjb2xvcnM6IFtdXG59O1xuXG52YXIgSlFWTWFwID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG4gIHZhciBtYXAgPSB0aGlzO1xuICB2YXIgbWFwRGF0YSA9IEpRVk1hcC5tYXBzW3BhcmFtcy5tYXBdO1xuICB2YXIgbWFwUGlucztcblxuICBpZiggIW1hcERhdGEpe1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcIicgKyBwYXJhbXMubWFwICsgJ1wiIG1hcCBwYXJhbWV0ZXIuIFBsZWFzZSBtYWtlIHN1cmUgeW91IGhhdmUgbG9hZGVkIHRoaXMgbWFwIGZpbGUgaW4geW91ciBIVE1MLicpO1xuICB9XG5cbiAgdGhpcy5zZWxlY3RlZFJlZ2lvbnMgPSBbXTtcbiAgdGhpcy5tdWx0aVNlbGVjdFJlZ2lvbiA9IHBhcmFtcy5tdWx0aVNlbGVjdFJlZ2lvbjtcblxuICB0aGlzLmNvbnRhaW5lciA9IHBhcmFtcy5jb250YWluZXI7XG5cbiAgdGhpcy5kZWZhdWx0V2lkdGggPSBtYXBEYXRhLndpZHRoO1xuICB0aGlzLmRlZmF1bHRIZWlnaHQgPSBtYXBEYXRhLmhlaWdodDtcblxuICB0aGlzLmNvbG9yID0gcGFyYW1zLmNvbG9yO1xuICB0aGlzLnNlbGVjdGVkQ29sb3IgPSBwYXJhbXMuc2VsZWN0ZWRDb2xvcjtcbiAgdGhpcy5ob3ZlckNvbG9yID0gcGFyYW1zLmhvdmVyQ29sb3I7XG4gIHRoaXMuaG92ZXJDb2xvcnMgPSBwYXJhbXMuaG92ZXJDb2xvcnM7XG4gIHRoaXMuaG92ZXJPcGFjaXR5ID0gcGFyYW1zLmhvdmVyT3BhY2l0eTtcbiAgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IocGFyYW1zLmJhY2tncm91bmRDb2xvcik7XG5cbiAgdGhpcy53aWR0aCA9IHBhcmFtcy5jb250YWluZXIud2lkdGgoKTtcbiAgdGhpcy5oZWlnaHQgPSBwYXJhbXMuY29udGFpbmVyLmhlaWdodCgpO1xuXG4gIHRoaXMucmVzaXplKCk7XG5cbiAgalF1ZXJ5KHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmV3V2lkdGggPSBwYXJhbXMuY29udGFpbmVyLndpZHRoKCk7XG4gICAgdmFyIG5ld0hlaWdodCA9IHBhcmFtcy5jb250YWluZXIuaGVpZ2h0KCk7XG5cbiAgICBpZihuZXdXaWR0aCAmJiBuZXdIZWlnaHQpe1xuICAgICAgbWFwLndpZHRoID0gbmV3V2lkdGg7XG4gICAgICBtYXAuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgbWFwLnJlc2l6ZSgpO1xuICAgICAgbWFwLmNhbnZhcy5zZXRTaXplKG1hcC53aWR0aCwgbWFwLmhlaWdodCk7XG4gICAgICBtYXAuYXBwbHlUcmFuc2Zvcm0oKTtcblxuICAgICAgdmFyIHJlc2l6ZUV2ZW50ID0galF1ZXJ5LkV2ZW50KCdyZXNpemUuanF2bWFwJyk7XG4gICAgICBqUXVlcnkocGFyYW1zLmNvbnRhaW5lcikudHJpZ2dlcihyZXNpemVFdmVudCwgW25ld1dpZHRoLCBuZXdIZWlnaHRdKTtcblxuICAgICAgaWYobWFwUGlucyl7XG4gICAgICAgIGpRdWVyeSgnLmpxdm1hcC1waW4nKS5yZW1vdmUoKTtcbiAgICAgICAgbWFwLnBpbkhhbmRsZXJzID0gZmFsc2U7XG4gICAgICAgIG1hcC5wbGFjZVBpbnMobWFwUGlucy5waW5zLCBtYXBQaW5zLm1vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdGhpcy5jYW52YXMgPSBuZXcgVmVjdG9yQ2FudmFzKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBwYXJhbXMpO1xuICBwYXJhbXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmNhbnZhcy5jYW52YXMpO1xuXG4gIHRoaXMubWFrZURyYWdnYWJsZSgpO1xuXG4gIHRoaXMucm9vdEdyb3VwID0gdGhpcy5jYW52YXMuY3JlYXRlR3JvdXAodHJ1ZSk7XG5cbiAgdGhpcy5pbmRleCA9IEpRVk1hcC5tYXBJbmRleDtcbiAgdGhpcy5sYWJlbCA9IGpRdWVyeSgnPGRpdi8+JykuYWRkQ2xhc3MoJ2pxdm1hcC1sYWJlbCcpLmFwcGVuZFRvKGpRdWVyeSgnYm9keScpKS5oaWRlKCk7XG5cbiAgaWYgKHBhcmFtcy5lbmFibGVab29tKSB7XG4gICAgalF1ZXJ5KCc8ZGl2Lz4nKS5hZGRDbGFzcygnanF2bWFwLXpvb21pbicpLnRleHQoJysnKS5hcHBlbmRUbyhwYXJhbXMuY29udGFpbmVyKTtcbiAgICBqUXVlcnkoJzxkaXYvPicpLmFkZENsYXNzKCdqcXZtYXAtem9vbW91dCcpLmh0bWwoJyYjeDIyMTI7JykuYXBwZW5kVG8ocGFyYW1zLmNvbnRhaW5lcik7XG4gIH1cblxuICBtYXAuY291bnRyaWVzID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG1hcERhdGEucGF0aHMpIHtcbiAgICB2YXIgcGF0aCA9IHRoaXMuY2FudmFzLmNyZWF0ZVBhdGgoe1xuICAgICAgcGF0aDogbWFwRGF0YS5wYXRoc1trZXldLnBhdGhcbiAgICB9KTtcblxuICAgIHBhdGguc2V0RmlsbCh0aGlzLmNvbG9yKTtcbiAgICBwYXRoLmlkID0gbWFwLmdldENvdW50cnlJZChrZXkpO1xuICAgIG1hcC5jb3VudHJpZXNba2V5XSA9IHBhdGg7XG5cbiAgICBpZiAodGhpcy5jYW52YXMubW9kZSA9PT0gJ3N2ZycpIHtcbiAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdjbGFzcycsICdqcXZtYXAtcmVnaW9uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeShwYXRoKS5hZGRDbGFzcygnanF2bWFwLXJlZ2lvbicpO1xuICAgIH1cblxuICAgIGpRdWVyeSh0aGlzLnJvb3RHcm91cCkuYXBwZW5kKHBhdGgpO1xuICB9XG5cbiAgalF1ZXJ5KHBhcmFtcy5jb250YWluZXIpLmRlbGVnYXRlKHRoaXMuY2FudmFzLm1vZGUgPT09ICdzdmcnID8gJ3BhdGgnIDogJ3NoYXBlJywgJ21vdXNlb3ZlciBtb3VzZW91dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGNvbnRhaW5lclBhdGggPSBlLnRhcmdldCxcbiAgICAgIGNvZGUgPSBlLnRhcmdldC5pZC5zcGxpdCgnXycpLnBvcCgpLFxuICAgICAgbGFiZWxTaG93RXZlbnQgPSBqUXVlcnkuRXZlbnQoJ2xhYmVsU2hvdy5qcXZtYXAnKSxcbiAgICAgIHJlZ2lvbk1vdXNlT3ZlckV2ZW50ID0galF1ZXJ5LkV2ZW50KCdyZWdpb25Nb3VzZU92ZXIuanF2bWFwJyk7XG5cbiAgICBjb2RlID0gY29kZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKGUudHlwZSA9PT0gJ21vdXNlb3ZlcicpIHtcbiAgICAgIGpRdWVyeShwYXJhbXMuY29udGFpbmVyKS50cmlnZ2VyKHJlZ2lvbk1vdXNlT3ZlckV2ZW50LCBbY29kZSwgbWFwRGF0YS5wYXRoc1tjb2RlXS5uYW1lXSk7XG4gICAgICBpZiAoIXJlZ2lvbk1vdXNlT3ZlckV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIG1hcC5oaWdobGlnaHQoY29kZSwgY29udGFpbmVyUGF0aCk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLnNob3dUb29sdGlwKSB7XG4gICAgICAgIG1hcC5sYWJlbC50ZXh0KG1hcERhdGEucGF0aHNbY29kZV0ubmFtZSk7XG4gICAgICAgIGpRdWVyeShwYXJhbXMuY29udGFpbmVyKS50cmlnZ2VyKGxhYmVsU2hvd0V2ZW50LCBbbWFwLmxhYmVsLCBjb2RlXSk7XG5cbiAgICAgICAgaWYgKCFsYWJlbFNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgIG1hcC5sYWJlbC5zaG93KCk7XG4gICAgICAgICAgbWFwLmxhYmVsV2lkdGggPSBtYXAubGFiZWwud2lkdGgoKTtcbiAgICAgICAgICBtYXAubGFiZWxIZWlnaHQgPSBtYXAubGFiZWwuaGVpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWFwLnVuaGlnaGxpZ2h0KGNvZGUsIGNvbnRhaW5lclBhdGgpO1xuXG4gICAgICBtYXAubGFiZWwuaGlkZSgpO1xuICAgICAgalF1ZXJ5KHBhcmFtcy5jb250YWluZXIpLnRyaWdnZXIoJ3JlZ2lvbk1vdXNlT3V0Lmpxdm1hcCcsIFtjb2RlLCBtYXBEYXRhLnBhdGhzW2NvZGVdLm5hbWVdKTtcbiAgICB9XG4gIH0pO1xuXG4gIGpRdWVyeShwYXJhbXMuY29udGFpbmVyKS5kZWxlZ2F0ZSh0aGlzLmNhbnZhcy5tb2RlID09PSAnc3ZnJyA/ICdwYXRoJyA6ICdzaGFwZScsICdjbGljaycsIGZ1bmN0aW9uIChyZWdpb25DbGlja0V2ZW50KSB7XG5cbiAgICB2YXIgdGFyZ2V0UGF0aCA9IHJlZ2lvbkNsaWNrRXZlbnQudGFyZ2V0O1xuICAgIHZhciBjb2RlID0gcmVnaW9uQ2xpY2tFdmVudC50YXJnZXQuaWQuc3BsaXQoJ18nKS5wb3AoKTtcbiAgICB2YXIgbWFwQ2xpY2tFdmVudCA9IGpRdWVyeS5FdmVudCgncmVnaW9uQ2xpY2suanF2bWFwJyk7XG5cbiAgICBjb2RlID0gY29kZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgalF1ZXJ5KHBhcmFtcy5jb250YWluZXIpLnRyaWdnZXIobWFwQ2xpY2tFdmVudCwgW2NvZGUsIG1hcERhdGEucGF0aHNbY29kZV0ubmFtZV0pO1xuXG4gICAgaWYgKCAhcGFyYW1zLm11bHRpU2VsZWN0UmVnaW9uICYmICFtYXBDbGlja0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICBmb3IgKHZhciBrZXlQYXRoIGluIG1hcERhdGEucGF0aHMpIHtcbiAgICAgICAgbWFwLmNvdW50cmllc1trZXlQYXRoXS5jdXJyZW50RmlsbENvbG9yID0gbWFwLmNvdW50cmllc1trZXlQYXRoXS5nZXRPcmlnaW5hbEZpbGwoKTtcbiAgICAgICAgbWFwLmNvdW50cmllc1trZXlQYXRoXS5zZXRGaWxsKG1hcC5jb3VudHJpZXNba2V5UGF0aF0uZ2V0T3JpZ2luYWxGaWxsKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICggIW1hcENsaWNrRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIGlmIChtYXAuaXNTZWxlY3RlZChjb2RlKSkge1xuICAgICAgICBtYXAuZGVzZWxlY3QoY29kZSwgdGFyZ2V0UGF0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXAuc2VsZWN0KGNvZGUsIHRhcmdldFBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHBhcmFtcy5zaG93VG9vbHRpcCkge1xuICAgIHBhcmFtcy5jb250YWluZXIubW91c2Vtb3ZlKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAobWFwLmxhYmVsLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gZS5wYWdlWCAtIDE1IC0gbWFwLmxhYmVsV2lkdGg7XG4gICAgICAgIHZhciB0b3AgPSBlLnBhZ2VZIC0gMTUgLSBtYXAubGFiZWxIZWlnaHQ7XG5cbiAgICAgICAgaWYobGVmdCA8IDApIHtcbiAgICAgICAgICBsZWZ0ID0gZS5wYWdlWCArIDE1O1xuICAgICAgICB9XG4gICAgICAgIGlmKHRvcCA8IDApIHtcbiAgICAgICAgICB0b3AgPSBlLnBhZ2VZICsgMTU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXAubGFiZWwuY3NzKHtcbiAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgIHRvcDogdG9wXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdGhpcy5zZXRDb2xvcnMocGFyYW1zLmNvbG9ycyk7XG5cbiAgdGhpcy5jYW52YXMuY2FudmFzLmFwcGVuZENoaWxkKHRoaXMucm9vdEdyb3VwKTtcblxuICB0aGlzLmFwcGx5VHJhbnNmb3JtKCk7XG5cbiAgdGhpcy5jb2xvclNjYWxlID0gbmV3IENvbG9yU2NhbGUocGFyYW1zLnNjYWxlQ29sb3JzLCBwYXJhbXMubm9ybWFsaXplRnVuY3Rpb24sIHBhcmFtcy52YWx1ZU1pbiwgcGFyYW1zLnZhbHVlTWF4KTtcblxuICBpZiAocGFyYW1zLnZhbHVlcykge1xuICAgIHRoaXMudmFsdWVzID0gcGFyYW1zLnZhbHVlcztcbiAgICB0aGlzLnNldFZhbHVlcyhwYXJhbXMudmFsdWVzKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuc2VsZWN0ZWRSZWdpb25zKSB7XG4gICAgaWYgKHBhcmFtcy5zZWxlY3RlZFJlZ2lvbnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgZm9yKHZhciBrIGluIHBhcmFtcy5zZWxlY3RlZFJlZ2lvbnMpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QocGFyYW1zLnNlbGVjdGVkUmVnaW9uc1trXS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3QocGFyYW1zLnNlbGVjdGVkUmVnaW9ucy50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLmJpbmRab29tQnV0dG9ucygpO1xuXG4gIGlmKHBhcmFtcy5waW5zKSB7XG4gICAgbWFwUGlucyA9IHtcbiAgICAgIHBpbnM6IHBhcmFtcy5waW5zLFxuICAgICAgbW9kZTogcGFyYW1zLnBpbk1vZGVcbiAgICB9O1xuXG4gICAgdGhpcy5waW5IYW5kbGVycyA9IGZhbHNlO1xuICAgIHRoaXMucGxhY2VQaW5zKHBhcmFtcy5waW5zLCBwYXJhbXMucGluTW9kZSk7XG4gIH1cblxuICBpZihwYXJhbXMuc2hvd0xhYmVscyl7XG4gICAgdGhpcy5waW5IYW5kbGVycyA9IGZhbHNlO1xuXG4gICAgdmFyIHBpbnMgPSB7fTtcbiAgICBmb3IgKGtleSBpbiBtYXAuY291bnRyaWVzKXtcbiAgICAgIGlmICh0eXBlb2YgbWFwLmNvdW50cmllc1trZXldICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmKCAhcGFyYW1zLnBpbnMgfHwgIXBhcmFtcy5waW5zW2tleV0gKXtcbiAgICAgICAgICBwaW5zW2tleV0gPSBrZXkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcFBpbnMgPSB7XG4gICAgICBwaW5zOiBwaW5zLFxuICAgICAgbW9kZTogJ2NvbnRlbnQnXG4gICAgfTtcblxuICAgIHRoaXMucGxhY2VQaW5zKHBpbnMsICdjb250ZW50Jyk7XG4gIH1cblxuICBKUVZNYXAubWFwSW5kZXgrKztcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUgPSB7XG4gIHRyYW5zWDogMCxcbiAgdHJhbnNZOiAwLFxuICBzY2FsZTogMSxcbiAgYmFzZVRyYW5zWDogMCxcbiAgYmFzZVRyYW5zWTogMCxcbiAgYmFzZVNjYWxlOiAxLFxuICB3aWR0aDogMCxcbiAgaGVpZ2h0OiAwLFxuICBjb3VudHJpZXM6IHt9LFxuICBjb3VudHJpZXNDb2xvcnM6IHt9LFxuICBjb3VudHJpZXNEYXRhOiB7fSxcbiAgem9vbVN0ZXA6IDEuNCxcbiAgem9vbU1heFN0ZXA6IDQsXG4gIHpvb21DdXJTdGVwOiAxXG59O1xuXG5KUVZNYXAueGxpbmsgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG5KUVZNYXAubWFwSW5kZXggPSAxO1xuSlFWTWFwLm1hcHMgPSB7fTtcblxuKGZ1bmN0aW9uKCl7XG5cbiAgdmFyIGFwaVBhcmFtcyA9IHtcbiAgICBjb2xvcnM6IDEsXG4gICAgdmFsdWVzOiAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogMSxcbiAgICBzY2FsZUNvbG9yczogMSxcbiAgICBub3JtYWxpemVGdW5jdGlvbjogMSxcbiAgICBlbmFibGVab29tOiAxLFxuICAgIHNob3dUb29sdGlwOiAxLFxuICAgIGJvcmRlckNvbG9yOiAxLFxuICAgIGJvcmRlcldpZHRoOiAxLFxuICAgIGJvcmRlck9wYWNpdHk6IDEsXG4gICAgc2VsZWN0ZWRSZWdpb25zOiAxLFxuICAgIG11bHRpU2VsZWN0UmVnaW9uOiAxXG4gIH07XG5cbiAgdmFyIGFwaUV2ZW50cyA9IHtcbiAgICBvbkxhYmVsU2hvdzogJ2xhYmVsU2hvdycsXG4gICAgb25Mb2FkOiAnbG9hZCcsXG4gICAgb25SZWdpb25PdmVyOiAncmVnaW9uTW91c2VPdmVyJyxcbiAgICBvblJlZ2lvbk91dDogJ3JlZ2lvbk1vdXNlT3V0JyxcbiAgICBvblJlZ2lvbkNsaWNrOiAncmVnaW9uQ2xpY2snLFxuICAgIG9uUmVnaW9uU2VsZWN0OiAncmVnaW9uU2VsZWN0JyxcbiAgICBvblJlZ2lvbkRlc2VsZWN0OiAncmVnaW9uRGVzZWxlY3QnLFxuICAgIG9uUmVzaXplOiAncmVzaXplJ1xuICB9O1xuXG4gIGpRdWVyeS5mbi52ZWN0b3JNYXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgdmFyIGRlZmF1bHRQYXJhbXMgPSB7XG4gICAgICBtYXA6ICd3b3JsZF9lbicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTViZmRkJyxcbiAgICAgIGNvbG9yOiAnI2Y0ZjNmMCcsXG4gICAgICBob3ZlckNvbG9yOiAnI2M5ZGZhZicsXG4gICAgICBob3ZlckNvbG9yczoge30sXG4gICAgICBzZWxlY3RlZENvbG9yOiAnI2M5ZGZhZicsXG4gICAgICBzY2FsZUNvbG9yczogWycjYjZkNmZmJywgJyMwMDVhY2UnXSxcbiAgICAgIG5vcm1hbGl6ZUZ1bmN0aW9uOiAnbGluZWFyJyxcbiAgICAgIGVuYWJsZVpvb206IHRydWUsXG4gICAgICBzaG93VG9vbHRpcDogdHJ1ZSxcbiAgICAgIGJvcmRlckNvbG9yOiAnIzgxODE4MScsXG4gICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIGJvcmRlck9wYWNpdHk6IDAuMjUsXG4gICAgICBzZWxlY3RlZFJlZ2lvbnM6IG51bGwsXG4gICAgICBtdWx0aVNlbGVjdFJlZ2lvbjogZmFsc2VcbiAgICB9LCBtYXAgPSB0aGlzLmRhdGEoJ21hcE9iamVjdCcpO1xuXG4gICAgaWYgKG9wdGlvbnMgPT09ICdhZGRNYXAnKSB7XG4gICAgICBKUVZNYXAubWFwc1thcmd1bWVudHNbMV1dID0gYXJndW1lbnRzWzJdO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucyA9PT0gJ3NldCcgJiYgYXBpUGFyYW1zW2FyZ3VtZW50c1sxXV0pIHtcbiAgICAgIG1hcFsnc2V0JyArIGFyZ3VtZW50c1sxXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGFyZ3VtZW50c1sxXS5zdWJzdHIoMSldLmFwcGx5KG1hcCwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgJiZcbiAgICAgIHR5cGVvZiBtYXBbb3B0aW9uc10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBtYXBbb3B0aW9uc10uYXBwbHkobWFwLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgalF1ZXJ5LmV4dGVuZChkZWZhdWx0UGFyYW1zLCBvcHRpb25zKTtcbiAgICAgIGRlZmF1bHRQYXJhbXMuY29udGFpbmVyID0gdGhpcztcbiAgICAgIHRoaXMuY3NzKHsgcG9zaXRpb246ICdyZWxhdGl2ZScsIG92ZXJmbG93OiAnaGlkZGVuJyB9KTtcblxuICAgICAgbWFwID0gbmV3IEpRVk1hcChkZWZhdWx0UGFyYW1zKTtcblxuICAgICAgdGhpcy5kYXRhKCdtYXBPYmplY3QnLCBtYXApO1xuXG4gICAgICB0aGlzLnVuYmluZCgnLmpxdm1hcCcpO1xuXG4gICAgICBmb3IgKHZhciBlIGluIGFwaUV2ZW50cykge1xuICAgICAgICBpZiAoZGVmYXVsdFBhcmFtc1tlXSkge1xuICAgICAgICAgIHRoaXMuYmluZChhcGlFdmVudHNbZV0gKyAnLmpxdm1hcCcsIGRlZmF1bHRQYXJhbXNbZV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBsb2FkRXZlbnQgPSBqUXVlcnkuRXZlbnQoJ2xvYWQuanF2bWFwJyk7XG4gICAgICBqUXVlcnkoZGVmYXVsdFBhcmFtcy5jb250YWluZXIpLnRyaWdnZXIobG9hZEV2ZW50LCBtYXApO1xuXG4gICAgICByZXR1cm4gbWFwO1xuICAgIH1cbiAgfTtcblxufSkoalF1ZXJ5KTtcblxuQ29sb3JTY2FsZS5hcnJheVRvUmdiID0gZnVuY3Rpb24gKGFyKSB7XG4gIHZhciByZ2IgPSAnIyc7XG4gIHZhciBkO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyLmxlbmd0aDsgaSsrKSB7XG4gICAgZCA9IGFyW2ldLnRvU3RyaW5nKDE2KTtcbiAgICByZ2IgKz0gZC5sZW5ndGggPT09IDEgPyAnMCcgKyBkIDogZDtcbiAgfVxuICByZXR1cm4gcmdiO1xufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUuZ2V0Q29sb3IgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLm5vcm1hbGl6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbHVlID0gdGhpcy5ub3JtYWxpemUodmFsdWUpO1xuICB9XG5cbiAgdmFyIGxlbmd0aGVzID0gW107XG4gIHZhciBmdWxsTGVuZ3RoID0gMDtcbiAgdmFyIGw7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbG9ycy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBsID0gdGhpcy52ZWN0b3JMZW5ndGgodGhpcy52ZWN0b3JTdWJ0cmFjdCh0aGlzLmNvbG9yc1tpICsgMV0sIHRoaXMuY29sb3JzW2ldKSk7XG4gICAgbGVuZ3RoZXMucHVzaChsKTtcbiAgICBmdWxsTGVuZ3RoICs9IGw7XG4gIH1cblxuICB2YXIgYyA9ICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgLyBmdWxsTGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGhlcy5sZW5ndGg7IGkrKykge1xuICAgIGxlbmd0aGVzW2ldICo9IGM7XG4gIH1cblxuICBpID0gMDtcbiAgdmFsdWUgLT0gdGhpcy5taW5WYWx1ZTtcblxuICB3aGlsZSAodmFsdWUgLSBsZW5ndGhlc1tpXSA+PSAwKSB7XG4gICAgdmFsdWUgLT0gbGVuZ3RoZXNbaV07XG4gICAgaSsrO1xuICB9XG5cbiAgdmFyIGNvbG9yO1xuICBpZiAoaSA9PT0gdGhpcy5jb2xvcnMubGVuZ3RoIC0gMSkge1xuICAgIGNvbG9yID0gdGhpcy52ZWN0b3JUb051bSh0aGlzLmNvbG9yc1tpXSkudG9TdHJpbmcoMTYpO1xuICB9IGVsc2Uge1xuICAgIGNvbG9yID0gKHRoaXMudmVjdG9yVG9OdW0odGhpcy52ZWN0b3JBZGQodGhpcy5jb2xvcnNbaV0sIHRoaXMudmVjdG9yTXVsdCh0aGlzLnZlY3RvclN1YnRyYWN0KHRoaXMuY29sb3JzW2kgKyAxXSwgdGhpcy5jb2xvcnNbaV0pLCAodmFsdWUpIC8gKGxlbmd0aGVzW2ldKSkpKSkudG9TdHJpbmcoMTYpO1xuICB9XG5cbiAgd2hpbGUgKGNvbG9yLmxlbmd0aCA8IDYpIHtcbiAgICBjb2xvciA9ICcwJyArIGNvbG9yO1xuICB9XG4gIHJldHVybiAnIycgKyBjb2xvcjtcbn07XG5cbkNvbG9yU2NhbGUucmdiVG9BcnJheSA9IGZ1bmN0aW9uIChyZ2IpIHtcbiAgcmdiID0gcmdiLnN1YnN0cigxKTtcbiAgcmV0dXJuIFtwYXJzZUludChyZ2Iuc3Vic3RyKDAsIDIpLCAxNiksIHBhcnNlSW50KHJnYi5zdWJzdHIoMiwgMiksIDE2KSwgcGFyc2VJbnQocmdiLnN1YnN0cig0LCAyKSwgMTYpXTtcbn07XG5cbkNvbG9yU2NhbGUucHJvdG90eXBlLnNldENvbG9ycyA9IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb2xvcnNbaV0gPSBDb2xvclNjYWxlLnJnYlRvQXJyYXkoY29sb3JzW2ldKTtcbiAgfVxuICB0aGlzLmNvbG9ycyA9IGNvbG9ycztcbn07XG5cbkNvbG9yU2NhbGUucHJvdG90eXBlLnNldE1heCA9IGZ1bmN0aW9uIChtYXgpIHtcbiAgdGhpcy5jbGVhck1heFZhbHVlID0gbWF4O1xuICBpZiAodHlwZW9mIHRoaXMubm9ybWFsaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5tYXhWYWx1ZSA9IHRoaXMubm9ybWFsaXplKG1heCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5tYXhWYWx1ZSA9IG1heDtcbiAgfVxufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUuc2V0TWluID0gZnVuY3Rpb24gKG1pbikge1xuICB0aGlzLmNsZWFyTWluVmFsdWUgPSBtaW47XG5cbiAgaWYgKHR5cGVvZiB0aGlzLm5vcm1hbGl6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMubWluVmFsdWUgPSB0aGlzLm5vcm1hbGl6ZShtaW4pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubWluVmFsdWUgPSBtaW47XG4gIH1cbn07XG5cbkNvbG9yU2NhbGUucHJvdG90eXBlLnNldE5vcm1hbGl6ZUZ1bmN0aW9uID0gZnVuY3Rpb24gKGYpIHtcbiAgaWYgKGYgPT09ICdwb2x5bm9taWFsJykge1xuICAgIHRoaXMubm9ybWFsaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gTWF0aC5wb3codmFsdWUsIDAuMik7XG4gICAgfTtcbiAgfSBlbHNlIGlmIChmID09PSAnbGluZWFyJykge1xuICAgIGRlbGV0ZSB0aGlzLm5vcm1hbGl6ZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm5vcm1hbGl6ZSA9IGY7XG4gIH1cbiAgdGhpcy5zZXRNaW4odGhpcy5jbGVhck1pblZhbHVlKTtcbiAgdGhpcy5zZXRNYXgodGhpcy5jbGVhck1heFZhbHVlKTtcbn07XG5cbkNvbG9yU2NhbGUucHJvdG90eXBlLnZlY3RvckFkZCA9IGZ1bmN0aW9uICh2ZWN0b3IxLCB2ZWN0b3IyKSB7XG4gIHZhciB2ZWN0b3IgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZWN0b3IxLmxlbmd0aDsgaSsrKSB7XG4gICAgdmVjdG9yW2ldID0gdmVjdG9yMVtpXSArIHZlY3RvcjJbaV07XG4gIH1cbiAgcmV0dXJuIHZlY3Rvcjtcbn07XG5cbkNvbG9yU2NhbGUucHJvdG90eXBlLnZlY3Rvckxlbmd0aCA9IGZ1bmN0aW9uICh2ZWN0b3IpIHtcbiAgdmFyIHJlc3VsdCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmVjdG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0ICs9IHZlY3RvcltpXSAqIHZlY3RvcltpXTtcbiAgfVxuICByZXR1cm4gTWF0aC5zcXJ0KHJlc3VsdCk7XG59O1xuXG5Db2xvclNjYWxlLnByb3RvdHlwZS52ZWN0b3JNdWx0ID0gZnVuY3Rpb24gKHZlY3RvciwgbnVtKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZWN0b3IubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRbaV0gPSB2ZWN0b3JbaV0gKiBudW07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbkNvbG9yU2NhbGUucHJvdG90eXBlLnZlY3RvclN1YnRyYWN0ID0gZnVuY3Rpb24gKHZlY3RvcjEsIHZlY3RvcjIpIHtcbiAgdmFyIHZlY3RvciA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlY3RvcjEubGVuZ3RoOyBpKyspIHtcbiAgICB2ZWN0b3JbaV0gPSB2ZWN0b3IxW2ldIC0gdmVjdG9yMltpXTtcbiAgfVxuICByZXR1cm4gdmVjdG9yO1xufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUudmVjdG9yVG9OdW0gPSBmdW5jdGlvbiAodmVjdG9yKSB7XG4gIHZhciBudW0gPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlY3Rvci5sZW5ndGg7IGkrKykge1xuICAgIG51bSArPSBNYXRoLnJvdW5kKHZlY3RvcltpXSkgKiBNYXRoLnBvdygyNTYsIHZlY3Rvci5sZW5ndGggLSBpIC0gMSk7XG4gIH1cbiAgcmV0dXJuIG51bTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuYXBwbHlUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtYXhUcmFuc1gsIG1heFRyYW5zWSwgbWluVHJhbnNYLCBtaW5UcmFuc1k7XG4gIGlmICh0aGlzLmRlZmF1bHRXaWR0aCAqIHRoaXMuc2NhbGUgPD0gdGhpcy53aWR0aCkge1xuICAgIG1heFRyYW5zWCA9ICh0aGlzLndpZHRoIC0gdGhpcy5kZWZhdWx0V2lkdGggKiB0aGlzLnNjYWxlKSAvICgyICogdGhpcy5zY2FsZSk7XG4gICAgbWluVHJhbnNYID0gKHRoaXMud2lkdGggLSB0aGlzLmRlZmF1bHRXaWR0aCAqIHRoaXMuc2NhbGUpIC8gKDIgKiB0aGlzLnNjYWxlKTtcbiAgfSBlbHNlIHtcbiAgICBtYXhUcmFuc1ggPSAwO1xuICAgIG1pblRyYW5zWCA9ICh0aGlzLndpZHRoIC0gdGhpcy5kZWZhdWx0V2lkdGggKiB0aGlzLnNjYWxlKSAvIHRoaXMuc2NhbGU7XG4gIH1cblxuICBpZiAodGhpcy5kZWZhdWx0SGVpZ2h0ICogdGhpcy5zY2FsZSA8PSB0aGlzLmhlaWdodCkge1xuICAgIG1heFRyYW5zWSA9ICh0aGlzLmhlaWdodCAtIHRoaXMuZGVmYXVsdEhlaWdodCAqIHRoaXMuc2NhbGUpIC8gKDIgKiB0aGlzLnNjYWxlKTtcbiAgICBtaW5UcmFuc1kgPSAodGhpcy5oZWlnaHQgLSB0aGlzLmRlZmF1bHRIZWlnaHQgKiB0aGlzLnNjYWxlKSAvICgyICogdGhpcy5zY2FsZSk7XG4gIH0gZWxzZSB7XG4gICAgbWF4VHJhbnNZID0gMDtcbiAgICBtaW5UcmFuc1kgPSAodGhpcy5oZWlnaHQgLSB0aGlzLmRlZmF1bHRIZWlnaHQgKiB0aGlzLnNjYWxlKSAvIHRoaXMuc2NhbGU7XG4gIH1cblxuICBpZiAodGhpcy50cmFuc1kgPiBtYXhUcmFuc1kpIHtcbiAgICB0aGlzLnRyYW5zWSA9IG1heFRyYW5zWTtcbiAgfSBlbHNlIGlmICh0aGlzLnRyYW5zWSA8IG1pblRyYW5zWSkge1xuICAgIHRoaXMudHJhbnNZID0gbWluVHJhbnNZO1xuICB9XG4gIGlmICh0aGlzLnRyYW5zWCA+IG1heFRyYW5zWCkge1xuICAgIHRoaXMudHJhbnNYID0gbWF4VHJhbnNYO1xuICB9IGVsc2UgaWYgKHRoaXMudHJhbnNYIDwgbWluVHJhbnNYKSB7XG4gICAgdGhpcy50cmFuc1ggPSBtaW5UcmFuc1g7XG4gIH1cblxuICB0aGlzLmNhbnZhcy5hcHBseVRyYW5zZm9ybVBhcmFtcyh0aGlzLnNjYWxlLCB0aGlzLnRyYW5zWCwgdGhpcy50cmFuc1kpO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5iaW5kWm9vbUJ1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtYXAgPSB0aGlzO1xuICB0aGlzLmNvbnRhaW5lci5maW5kKCcuanF2bWFwLXpvb21pbicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgbWFwLnpvb21JbigpO1xuICB9KTtcbiAgdGhpcy5jb250YWluZXIuZmluZCgnLmpxdm1hcC16b29tb3V0JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICBtYXAuem9vbU91dCgpO1xuICB9KTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuZGVzZWxlY3QgPSBmdW5jdGlvbiAoY2MsIHBhdGgpIHtcbiAgY2MgPSBjYy50b0xvd2VyQ2FzZSgpO1xuICBwYXRoID0gcGF0aCB8fCBqUXVlcnkoJyMnICsgdGhpcy5nZXRDb3VudHJ5SWQoY2MpKVswXTtcblxuICBpZiAodGhpcy5pc1NlbGVjdGVkKGNjKSkge1xuICAgIHRoaXMuc2VsZWN0ZWRSZWdpb25zLnNwbGljZSh0aGlzLnNlbGVjdEluZGV4KGNjKSwgMSk7XG5cbiAgICBqUXVlcnkodGhpcy5jb250YWluZXIpLnRyaWdnZXIoJ3JlZ2lvbkRlc2VsZWN0Lmpxdm1hcCcsIFtjY10pO1xuICAgIHBhdGguY3VycmVudEZpbGxDb2xvciA9IHBhdGguZ2V0T3JpZ2luYWxGaWxsKCk7XG4gICAgcGF0aC5zZXRGaWxsKHBhdGguZ2V0T3JpZ2luYWxGaWxsKCkpO1xuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNvdW50cmllcykge1xuICAgICAgdGhpcy5zZWxlY3RlZFJlZ2lvbnMuc3BsaWNlKHRoaXMuc2VsZWN0ZWRSZWdpb25zLmluZGV4T2Yoa2V5KSwgMSk7XG4gICAgICB0aGlzLmNvdW50cmllc1trZXldLmN1cnJlbnRGaWxsQ29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgdGhpcy5jb3VudHJpZXNba2V5XS5zZXRGaWxsKHRoaXMuY29sb3IpO1xuICAgIH1cbiAgfVxufTtcblxuSlFWTWFwLnByb3RvdHlwZS5nZXRDb3VudHJ5SWQgPSBmdW5jdGlvbiAoY2MpIHtcbiAgcmV0dXJuICdqcXZtYXAnICsgdGhpcy5pbmRleCArICdfJyArIGNjO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5nZXRQaW4gPSBmdW5jdGlvbihjYyl7XG4gIHZhciBwaW5PYmogPSBqUXVlcnkoJyMnICsgdGhpcy5nZXRQaW5JZChjYykpO1xuICByZXR1cm4gcGluT2JqLmh0bWwoKTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuZ2V0UGluSWQgPSBmdW5jdGlvbiAoY2MpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0Q291bnRyeUlkKGNjKSArICdfcGluJztcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuZ2V0UGlucyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBwaW5zID0gdGhpcy5jb250YWluZXIuZmluZCgnLmpxdm1hcC1waW4nKTtcbiAgdmFyIHJldCA9IHt9O1xuICBqUXVlcnkuZWFjaChwaW5zLCBmdW5jdGlvbihpbmRleCwgcGluT2JqKXtcbiAgICBwaW5PYmogPSBqUXVlcnkocGluT2JqKTtcbiAgICB2YXIgY2MgPSBwaW5PYmouYXR0cignZm9yJykudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgcGluQ29udGVudCA9IHBpbk9iai5odG1sKCk7XG4gICAgcmV0W2NjXSA9IHBpbkNvbnRlbnQ7XG4gIH0pO1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmV0KTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuaGlnaGxpZ2h0ID0gZnVuY3Rpb24gKGNjLCBwYXRoKSB7XG4gIHBhdGggPSBwYXRoIHx8IGpRdWVyeSgnIycgKyB0aGlzLmdldENvdW50cnlJZChjYykpWzBdO1xuICBpZiAodGhpcy5ob3Zlck9wYWNpdHkpIHtcbiAgICBwYXRoLnNldE9wYWNpdHkodGhpcy5ob3Zlck9wYWNpdHkpO1xuICB9IGVsc2UgaWYgKHRoaXMuaG92ZXJDb2xvcnMgJiYgKGNjIGluIHRoaXMuaG92ZXJDb2xvcnMpKSB7XG4gICAgcGF0aC5jdXJyZW50RmlsbENvbG9yID0gcGF0aC5nZXRGaWxsKCkgKyAnJztcbiAgICBwYXRoLnNldEZpbGwodGhpcy5ob3ZlckNvbG9yc1tjY10pO1xuICB9IGVsc2UgaWYgKHRoaXMuaG92ZXJDb2xvcikge1xuICAgIHBhdGguY3VycmVudEZpbGxDb2xvciA9IHBhdGguZ2V0RmlsbCgpICsgJyc7XG4gICAgcGF0aC5zZXRGaWxsKHRoaXMuaG92ZXJDb2xvcik7XG4gIH1cbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuaXNTZWxlY3RlZCA9IGZ1bmN0aW9uKGNjKSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdEluZGV4KGNjKSA+PSAwO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5tYWtlRHJhZ2dhYmxlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbW91c2VEb3duID0gZmFsc2U7XG4gIHZhciBvbGRQYWdlWCwgb2xkUGFnZVk7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBzZWxmLmlzTW92aW5nID0gZmFsc2U7XG4gIHNlbGYuaXNNb3ZpbmdUaW1lb3V0ID0gZmFsc2U7XG5cbiAgdmFyIGxhc3RUb3VjaENvdW50O1xuICB2YXIgdG91Y2hDZW50ZXJYO1xuICB2YXIgdG91Y2hDZW50ZXJZO1xuICB2YXIgdG91Y2hTdGFydERpc3RhbmNlO1xuICB2YXIgdG91Y2hTdGFydFNjYWxlO1xuICB2YXIgdG91Y2hYO1xuICB2YXIgdG91Y2hZO1xuXG4gIHRoaXMuY29udGFpbmVyLm1vdXNlbW92ZShmdW5jdGlvbiAoZSkge1xuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgc2VsZi50cmFuc1ggLT0gKG9sZFBhZ2VYIC0gZS5wYWdlWCkgLyBzZWxmLnNjYWxlO1xuICAgICAgc2VsZi50cmFuc1kgLT0gKG9sZFBhZ2VZIC0gZS5wYWdlWSkgLyBzZWxmLnNjYWxlO1xuXG4gICAgICBzZWxmLmFwcGx5VHJhbnNmb3JtKCk7XG5cbiAgICAgIG9sZFBhZ2VYID0gZS5wYWdlWDtcbiAgICAgIG9sZFBhZ2VZID0gZS5wYWdlWTtcblxuICAgICAgc2VsZi5pc01vdmluZyA9IHRydWU7XG4gICAgICBpZiAoc2VsZi5pc01vdmluZ1RpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuaXNNb3ZpbmdUaW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5jb250YWluZXIudHJpZ2dlcignZHJhZycpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9KS5tb3VzZWRvd24oZnVuY3Rpb24gKGUpIHtcblxuICAgIG1vdXNlRG93biA9IHRydWU7XG4gICAgb2xkUGFnZVggPSBlLnBhZ2VYO1xuICAgIG9sZFBhZ2VZID0gZS5wYWdlWTtcblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9KS5tb3VzZXVwKGZ1bmN0aW9uICgpIHtcblxuICAgIG1vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgY2xlYXJUaW1lb3V0KHNlbGYuaXNNb3ZpbmdUaW1lb3V0KTtcbiAgICBzZWxmLmlzTW92aW5nVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5pc01vdmluZyA9IGZhbHNlO1xuICAgIH0sIDEwMCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgfSkubW91c2VvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgaWYobW91c2VEb3duICYmIHNlbGYuaXNNb3Zpbmcpe1xuXG4gICAgICBjbGVhclRpbWVvdXQoc2VsZi5pc01vdmluZ1RpbWVvdXQpO1xuICAgICAgc2VsZi5pc01vdmluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIHNlbGYuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgIH0sIDEwMCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xuXG4gIGpRdWVyeSh0aGlzLmNvbnRhaW5lcikuYmluZCgndG91Y2htb3ZlJywgZnVuY3Rpb24gKGUpIHtcblxuICAgIHZhciBvZmZzZXQ7XG4gICAgdmFyIHNjYWxlO1xuICAgIHZhciB0b3VjaGVzID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXM7XG4gICAgdmFyIHRyYW5zZm9ybVhPbGQ7XG4gICAgdmFyIHRyYW5zZm9ybVlPbGQ7XG5cbiAgICBpZiAodG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmIChsYXN0VG91Y2hDb3VudCA9PT0gMSkge1xuXG4gICAgICAgIGlmKHRvdWNoWCA9PT0gdG91Y2hlc1swXS5wYWdlWCAmJiB0b3VjaFkgPT09IHRvdWNoZXNbMF0ucGFnZVkpe1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYW5zZm9ybVhPbGQgPSBzZWxmLnRyYW5zWDtcbiAgICAgICAgdHJhbnNmb3JtWU9sZCA9IHNlbGYudHJhbnNZO1xuXG4gICAgICAgIHNlbGYudHJhbnNYIC09ICh0b3VjaFggLSB0b3VjaGVzWzBdLnBhZ2VYKSAvIHNlbGYuc2NhbGU7XG4gICAgICAgIHNlbGYudHJhbnNZIC09ICh0b3VjaFkgLSB0b3VjaGVzWzBdLnBhZ2VZKSAvIHNlbGYuc2NhbGU7XG5cbiAgICAgICAgc2VsZi5hcHBseVRyYW5zZm9ybSgpO1xuXG4gICAgICAgIGlmICh0cmFuc2Zvcm1YT2xkICE9PSBzZWxmLnRyYW5zWCB8fCB0cmFuc2Zvcm1ZT2xkICE9PSBzZWxmLnRyYW5zWSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuaXNNb3ZpbmcgPSB0cnVlO1xuICAgICAgICBpZiAoc2VsZi5pc01vdmluZ1RpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5pc01vdmluZ1RpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRvdWNoWCA9IHRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICB0b3VjaFkgPSB0b3VjaGVzWzBdLnBhZ2VZO1xuXG4gICAgfSBlbHNlIGlmICh0b3VjaGVzLmxlbmd0aCA9PT0gMikge1xuXG4gICAgICBpZiAobGFzdFRvdWNoQ291bnQgPT09IDIpIHtcbiAgICAgICAgc2NhbGUgPSBNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyh0b3VjaGVzWzBdLnBhZ2VYIC0gdG91Y2hlc1sxXS5wYWdlWCwgMikgK1xuICAgICAgICAgICAgTWF0aC5wb3codG91Y2hlc1swXS5wYWdlWSAtIHRvdWNoZXNbMV0ucGFnZVksIDIpXG4gICAgICAgICAgKSAvIHRvdWNoU3RhcnREaXN0YW5jZTtcblxuICAgICAgICBzZWxmLnNldFNjYWxlKFxuICAgICAgICAgIHRvdWNoU3RhcnRTY2FsZSAqIHNjYWxlLFxuICAgICAgICAgIHRvdWNoQ2VudGVyWCxcbiAgICAgICAgICB0b3VjaENlbnRlcllcbiAgICAgICAgKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgb2Zmc2V0ID0galF1ZXJ5KHNlbGYuY29udGFpbmVyKS5vZmZzZXQoKTtcbiAgICAgICAgaWYgKHRvdWNoZXNbMF0ucGFnZVggPiB0b3VjaGVzWzFdLnBhZ2VYKSB7XG4gICAgICAgICAgdG91Y2hDZW50ZXJYID0gdG91Y2hlc1sxXS5wYWdlWCArICh0b3VjaGVzWzBdLnBhZ2VYIC0gdG91Y2hlc1sxXS5wYWdlWCkgLyAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvdWNoQ2VudGVyWCA9IHRvdWNoZXNbMF0ucGFnZVggKyAodG91Y2hlc1sxXS5wYWdlWCAtIHRvdWNoZXNbMF0ucGFnZVgpIC8gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b3VjaGVzWzBdLnBhZ2VZID4gdG91Y2hlc1sxXS5wYWdlWSkge1xuICAgICAgICAgIHRvdWNoQ2VudGVyWSA9IHRvdWNoZXNbMV0ucGFnZVkgKyAodG91Y2hlc1swXS5wYWdlWSAtIHRvdWNoZXNbMV0ucGFnZVkpIC8gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b3VjaENlbnRlclkgPSB0b3VjaGVzWzBdLnBhZ2VZICsgKHRvdWNoZXNbMV0ucGFnZVkgLSB0b3VjaGVzWzBdLnBhZ2VZKSAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICB0b3VjaENlbnRlclggLT0gb2Zmc2V0LmxlZnQ7XG4gICAgICAgIHRvdWNoQ2VudGVyWSAtPSBvZmZzZXQudG9wO1xuICAgICAgICB0b3VjaFN0YXJ0U2NhbGUgPSBzZWxmLnNjYWxlO1xuXG4gICAgICAgIHRvdWNoU3RhcnREaXN0YW5jZSA9IE1hdGguc3FydChcbiAgICAgICAgICBNYXRoLnBvdyh0b3VjaGVzWzBdLnBhZ2VYIC0gdG91Y2hlc1sxXS5wYWdlWCwgMikgK1xuICAgICAgICAgIE1hdGgucG93KHRvdWNoZXNbMF0ucGFnZVkgLSB0b3VjaGVzWzFdLnBhZ2VZLCAyKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RUb3VjaENvdW50ID0gdG91Y2hlcy5sZW5ndGg7XG4gIH0pO1xuXG4gIGpRdWVyeSh0aGlzLmNvbnRhaW5lcikuYmluZCgndG91Y2hzdGFydCcsIGZ1bmN0aW9uICgpIHtcbiAgICBsYXN0VG91Y2hDb3VudCA9IDA7XG4gIH0pO1xuXG4gIGpRdWVyeSh0aGlzLmNvbnRhaW5lcikuYmluZCgndG91Y2hlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgbGFzdFRvdWNoQ291bnQgPSAwO1xuICB9KTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUucGxhY2VQaW5zID0gZnVuY3Rpb24ocGlucywgcGluTW9kZSl7XG4gIHZhciBtYXAgPSB0aGlzO1xuXG4gIGlmKCFwaW5Nb2RlIHx8IChwaW5Nb2RlICE9PSAnY29udGVudCcgJiYgcGluTW9kZSAhPT0gJ2lkJykpIHtcbiAgICBwaW5Nb2RlID0gJ2NvbnRlbnQnO1xuICB9XG5cbiAgaWYocGluTW9kZSA9PT0gJ2NvbnRlbnQnKSB7Ly90cmVhdCBwaW4gYXMgY29udGVudFxuICAgIGpRdWVyeS5lYWNoKHBpbnMsIGZ1bmN0aW9uKGluZGV4LCBwaW4pe1xuICAgICAgaWYoalF1ZXJ5KCcjJyArIG1hcC5nZXRDb3VudHJ5SWQoaW5kZXgpKS5sZW5ndGggPT09IDApe1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwaW5JbmRleCA9IG1hcC5nZXRQaW5JZChpbmRleCk7XG4gICAgICB2YXIgJHBpbiA9IGpRdWVyeSgnIycgKyBwaW5JbmRleCk7XG4gICAgICBpZigkcGluLmxlbmd0aCA+IDApe1xuICAgICAgICAkcGluLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgbWFwLmNvbnRhaW5lci5hcHBlbmQoJzxkaXYgaWQ9XCInICsgcGluSW5kZXggKyAnXCIgZm9yPVwiJyArIGluZGV4ICsgJ1wiIGNsYXNzPVwianF2bWFwLXBpblwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGVcIj4nICsgcGluICsgJzwvZGl2PicpO1xuICAgIH0pO1xuICB9IGVsc2UgeyAvL3RyZWF0IHBpbiBhcyBpZCBvZiBhbiBodG1sIGNvbnRlbnRcbiAgICBqUXVlcnkuZWFjaChwaW5zLCBmdW5jdGlvbihpbmRleCwgcGluKXtcbiAgICAgIGlmKGpRdWVyeSgnIycgKyBtYXAuZ2V0Q291bnRyeUlkKGluZGV4KSkubGVuZ3RoID09PSAwKXtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHBpbkluZGV4ID0gbWFwLmdldFBpbklkKGluZGV4KTtcbiAgICAgIHZhciAkcGluID0galF1ZXJ5KCcjJyArIHBpbkluZGV4KTtcbiAgICAgIGlmKCRwaW4ubGVuZ3RoID4gMCl7XG4gICAgICAgICRwaW4ucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBtYXAuY29udGFpbmVyLmFwcGVuZCgnPGRpdiBpZD1cIicgKyBwaW5JbmRleCArICdcIiBmb3I9XCInICsgaW5kZXggKyAnXCIgY2xhc3M9XCJqcXZtYXAtcGluXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZVwiPjwvZGl2PicpO1xuICAgICAgJHBpbi5hcHBlbmQoalF1ZXJ5KCcjJyArIHBpbikpO1xuICAgIH0pO1xuICB9XG5cbiAgdGhpcy5wb3NpdGlvblBpbnMoKTtcbiAgaWYoIXRoaXMucGluSGFuZGxlcnMpe1xuICAgIHRoaXMucGluSGFuZGxlcnMgPSB0cnVlO1xuICAgIHZhciBwb3NpdGlvbkZpeCA9IGZ1bmN0aW9uKCl7XG4gICAgICBtYXAucG9zaXRpb25QaW5zKCk7XG4gICAgfTtcbiAgICB0aGlzLmNvbnRhaW5lci5iaW5kKCd6b29tSW4nLCBwb3NpdGlvbkZpeClcbiAgICAgIC5iaW5kKCd6b29tT3V0JywgcG9zaXRpb25GaXgpXG4gICAgICAuYmluZCgnZHJhZycsIHBvc2l0aW9uRml4KTtcbiAgfVxufTtcblxuSlFWTWFwLnByb3RvdHlwZS5wb3NpdGlvblBpbnMgPSBmdW5jdGlvbigpe1xuICB2YXIgbWFwID0gdGhpcztcbiAgdmFyIHBpbnMgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcuanF2bWFwLXBpbicpO1xuICBqUXVlcnkuZWFjaChwaW5zLCBmdW5jdGlvbihpbmRleCwgcGluT2JqKXtcbiAgICBwaW5PYmogPSBqUXVlcnkocGluT2JqKTtcbiAgICB2YXIgY291bnRyeUlkID0gbWFwLmdldENvdW50cnlJZChwaW5PYmouYXR0cignZm9yJykudG9Mb3dlckNhc2UoKSk7XG4gICAgdmFyIGNvdW50cnlPYmogPSBqUXVlcnkoJyMnICsgY291bnRyeUlkKTtcbiAgICB2YXIgYmJveCA9IGNvdW50cnlPYmpbMF0uZ2V0QkJveCgpO1xuXG4gICAgdmFyIHNjYWxlID0gbWFwLnNjYWxlO1xuICAgIHZhciByb290Q29vcmRzID0gbWFwLmNhbnZhcy5yb290R3JvdXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIG1hcENvb3JkcyA9IG1hcC5jb250YWluZXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGNvb3JkcyA9IHtcbiAgICAgIGxlZnQ6IHJvb3RDb29yZHMubGVmdCAtIG1hcENvb3Jkcy5sZWZ0LFxuICAgICAgdG9wOiByb290Q29vcmRzLnRvcCAtIG1hcENvb3Jkcy50b3BcbiAgICB9O1xuXG4gICAgdmFyIG1pZGRsZVggPSAoYmJveC54ICogc2NhbGUpICsgKChiYm94LndpZHRoICogc2NhbGUpIC8gMik7XG4gICAgdmFyIG1pZGRsZVkgPSAoYmJveC55ICogc2NhbGUpICsgKChiYm94LmhlaWdodCAqIHNjYWxlKSAvIDIpO1xuXG4gICAgcGluT2JqLmNzcyh7XG4gICAgICBsZWZ0OiBjb29yZHMubGVmdCArIG1pZGRsZVggLSAocGluT2JqLndpZHRoKCkgLyAyKSxcbiAgICAgIHRvcDogY29vcmRzLnRvcCArIG1pZGRsZVkgLSAocGluT2JqLmhlaWdodCgpIC8gMilcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnJlbW92ZVBpbiA9IGZ1bmN0aW9uKGNjKSB7XG4gIGNjID0gY2MudG9Mb3dlckNhc2UoKTtcbiAgalF1ZXJ5KCcjJyArIHRoaXMuZ2V0UGluSWQoY2MpKS5yZW1vdmUoKTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUucmVtb3ZlUGlucyA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuY29udGFpbmVyLmZpbmQoJy5qcXZtYXAtcGluJykucmVtb3ZlKCk7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jb3VudHJpZXMpIHtcbiAgICB0aGlzLmNvdW50cmllc1trZXldLnNldEZpbGwodGhpcy5jb2xvcik7XG4gIH1cbiAgdGhpcy5zY2FsZSA9IHRoaXMuYmFzZVNjYWxlO1xuICB0aGlzLnRyYW5zWCA9IHRoaXMuYmFzZVRyYW5zWDtcbiAgdGhpcy50cmFuc1kgPSB0aGlzLmJhc2VUcmFuc1k7XG4gIHRoaXMuYXBwbHlUcmFuc2Zvcm0oKTtcbiAgdGhpcy56b29tQ3VyU3RlcCA9IDE7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGN1ckJhc2VTY2FsZSA9IHRoaXMuYmFzZVNjYWxlO1xuICBpZiAodGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0ID4gdGhpcy5kZWZhdWx0V2lkdGggLyB0aGlzLmRlZmF1bHRIZWlnaHQpIHtcbiAgICB0aGlzLmJhc2VTY2FsZSA9IHRoaXMuaGVpZ2h0IC8gdGhpcy5kZWZhdWx0SGVpZ2h0O1xuICAgIHRoaXMuYmFzZVRyYW5zWCA9IE1hdGguYWJzKHRoaXMud2lkdGggLSB0aGlzLmRlZmF1bHRXaWR0aCAqIHRoaXMuYmFzZVNjYWxlKSAvICgyICogdGhpcy5iYXNlU2NhbGUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuYmFzZVNjYWxlID0gdGhpcy53aWR0aCAvIHRoaXMuZGVmYXVsdFdpZHRoO1xuICAgIHRoaXMuYmFzZVRyYW5zWSA9IE1hdGguYWJzKHRoaXMuaGVpZ2h0IC0gdGhpcy5kZWZhdWx0SGVpZ2h0ICogdGhpcy5iYXNlU2NhbGUpIC8gKDIgKiB0aGlzLmJhc2VTY2FsZSk7XG4gIH1cbiAgdGhpcy5zY2FsZSAqPSB0aGlzLmJhc2VTY2FsZSAvIGN1ckJhc2VTY2FsZTtcbiAgdGhpcy50cmFuc1ggKj0gdGhpcy5iYXNlU2NhbGUgLyBjdXJCYXNlU2NhbGU7XG4gIHRoaXMudHJhbnNZICo9IHRoaXMuYmFzZVNjYWxlIC8gY3VyQmFzZVNjYWxlO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAoY2MsIHBhdGgpIHtcbiAgY2MgPSBjYy50b0xvd2VyQ2FzZSgpO1xuICBwYXRoID0gcGF0aCB8fCBqUXVlcnkoJyMnICsgdGhpcy5nZXRDb3VudHJ5SWQoY2MpKVswXTtcblxuICBpZiAoIXRoaXMuaXNTZWxlY3RlZChjYykpIHtcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdFJlZ2lvbikge1xuICAgICAgdGhpcy5zZWxlY3RlZFJlZ2lvbnMucHVzaChjYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRSZWdpb25zID0gW2NjXTtcbiAgICB9XG5cbiAgICBqUXVlcnkodGhpcy5jb250YWluZXIpLnRyaWdnZXIoJ3JlZ2lvblNlbGVjdC5qcXZtYXAnLCBbY2NdKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZENvbG9yICYmIHBhdGgpIHtcbiAgICAgIHBhdGguY3VycmVudEZpbGxDb2xvciA9IHRoaXMuc2VsZWN0ZWRDb2xvcjtcbiAgICAgIHBhdGguc2V0RmlsbCh0aGlzLnNlbGVjdGVkQ29sb3IpO1xuICAgIH1cbiAgfVxufTtcblxuSlFWTWFwLnByb3RvdHlwZS5zZWxlY3RJbmRleCA9IGZ1bmN0aW9uIChjYykge1xuICBjYyA9IGNjLnRvTG93ZXJDYXNlKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZFJlZ2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY2MgPT09IHRoaXMuc2VsZWN0ZWRSZWdpb25zW2ldKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5zZXRCYWNrZ3JvdW5kQ29sb3IgPSBmdW5jdGlvbiAoYmFja2dyb3VuZENvbG9yKSB7XG4gIHRoaXMuY29udGFpbmVyLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGJhY2tncm91bmRDb2xvcik7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnNldENvbG9ycyA9IGZ1bmN0aW9uIChrZXksIGNvbG9yKSB7XG4gIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgIHRoaXMuY291bnRyaWVzW2tleV0uc2V0RmlsbChjb2xvcik7XG4gICAgdGhpcy5jb3VudHJpZXNba2V5XS5zZXRBdHRyaWJ1dGUoJ29yaWdpbmFsJywgY29sb3IpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjb2xvcnMgPSBrZXk7XG5cbiAgICBmb3IgKHZhciBjb2RlIGluIGNvbG9ycykge1xuICAgICAgaWYgKHRoaXMuY291bnRyaWVzW2NvZGVdKSB7XG4gICAgICAgIHRoaXMuY291bnRyaWVzW2NvZGVdLnNldEZpbGwoY29sb3JzW2NvZGVdKTtcbiAgICAgICAgdGhpcy5jb3VudHJpZXNbY29kZV0uc2V0QXR0cmlidXRlKCdvcmlnaW5hbCcsIGNvbG9yc1tjb2RlXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnNldE5vcm1hbGl6ZUZ1bmN0aW9uID0gZnVuY3Rpb24gKGYpIHtcbiAgdGhpcy5jb2xvclNjYWxlLnNldE5vcm1hbGl6ZUZ1bmN0aW9uKGYpO1xuXG4gIGlmICh0aGlzLnZhbHVlcykge1xuICAgIHRoaXMuc2V0VmFsdWVzKHRoaXMudmFsdWVzKTtcbiAgfVxufTtcblxuSlFWTWFwLnByb3RvdHlwZS5zZXRTY2FsZSA9IGZ1bmN0aW9uIChzY2FsZSkge1xuICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gIHRoaXMuYXBwbHlUcmFuc2Zvcm0oKTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuc2V0U2NhbGVDb2xvcnMgPSBmdW5jdGlvbiAoY29sb3JzKSB7XG4gIHRoaXMuY29sb3JTY2FsZS5zZXRDb2xvcnMoY29sb3JzKTtcblxuICBpZiAodGhpcy52YWx1ZXMpIHtcbiAgICB0aGlzLnNldFZhbHVlcyh0aGlzLnZhbHVlcyk7XG4gIH1cbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICB2YXIgbWF4ID0gMCxcbiAgICBtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgIHZhbDtcblxuICBmb3IgKHZhciBjYyBpbiB2YWx1ZXMpIHtcbiAgICBjYyA9IGNjLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gcGFyc2VGbG9hdCh2YWx1ZXNbY2NdKTtcblxuICAgIGlmIChpc05hTih2YWwpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKHZhbCA+IG1heCkge1xuICAgICAgbWF4ID0gdmFsdWVzW2NjXTtcbiAgICB9XG4gICAgaWYgKHZhbCA8IG1pbikge1xuICAgICAgbWluID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtaW4gPT09IG1heCkge1xuICAgIG1heCsrO1xuICB9XG5cbiAgdGhpcy5jb2xvclNjYWxlLnNldE1pbihtaW4pO1xuICB0aGlzLmNvbG9yU2NhbGUuc2V0TWF4KG1heCk7XG5cbiAgdmFyIGNvbG9ycyA9IHt9O1xuICBmb3IgKGNjIGluIHZhbHVlcykge1xuICAgIGNjID0gY2MudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSBwYXJzZUZsb2F0KHZhbHVlc1tjY10pO1xuICAgIGNvbG9yc1tjY10gPSBpc05hTih2YWwpID8gdGhpcy5jb2xvciA6IHRoaXMuY29sb3JTY2FsZS5nZXRDb2xvcih2YWwpO1xuICB9XG4gIHRoaXMuc2V0Q29sb3JzKGNvbG9ycyk7XG4gIHRoaXMudmFsdWVzID0gdmFsdWVzO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS51bmhpZ2hsaWdodCA9IGZ1bmN0aW9uIChjYywgcGF0aCkge1xuICBjYyA9IGNjLnRvTG93ZXJDYXNlKCk7XG4gIHBhdGggPSBwYXRoIHx8IGpRdWVyeSgnIycgKyB0aGlzLmdldENvdW50cnlJZChjYykpWzBdO1xuICBwYXRoLnNldE9wYWNpdHkoMSk7XG4gIGlmIChwYXRoLmN1cnJlbnRGaWxsQ29sb3IpIHtcbiAgICBwYXRoLnNldEZpbGwocGF0aC5jdXJyZW50RmlsbENvbG9yKTtcbiAgfVxufTtcblxuSlFWTWFwLnByb3RvdHlwZS56b29tSW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtYXAgPSB0aGlzO1xuICB2YXIgc2xpZGVyRGVsdGEgPSAoalF1ZXJ5KCcjem9vbScpLmlubmVySGVpZ2h0KCkgLSA2ICogMiAtIDE1ICogMiAtIDMgKiAyIC0gNyAtIDYpIC8gKHRoaXMuem9vbU1heFN0ZXAgLSB0aGlzLnpvb21DdXJTdGVwKTtcblxuICBpZiAobWFwLnpvb21DdXJTdGVwIDwgbWFwLnpvb21NYXhTdGVwKSB7XG4gICAgbWFwLnRyYW5zWCAtPSAobWFwLndpZHRoIC8gbWFwLnNjYWxlIC0gbWFwLndpZHRoIC8gKG1hcC5zY2FsZSAqIG1hcC56b29tU3RlcCkpIC8gMjtcbiAgICBtYXAudHJhbnNZIC09IChtYXAuaGVpZ2h0IC8gbWFwLnNjYWxlIC0gbWFwLmhlaWdodCAvIChtYXAuc2NhbGUgKiBtYXAuem9vbVN0ZXApKSAvIDI7XG4gICAgbWFwLnNldFNjYWxlKG1hcC5zY2FsZSAqIG1hcC56b29tU3RlcCk7XG4gICAgbWFwLnpvb21DdXJTdGVwKys7XG5cbiAgICB2YXIgJHNsaWRlciA9IGpRdWVyeSgnI3pvb21TbGlkZXInKTtcblxuICAgICRzbGlkZXIuY3NzKCd0b3AnLCBwYXJzZUludCgkc2xpZGVyLmNzcygndG9wJyksIDEwKSAtIHNsaWRlckRlbHRhKTtcblxuICAgIG1hcC5jb250YWluZXIudHJpZ2dlcignem9vbUluJyk7XG4gIH1cbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuem9vbU91dCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1hcCA9IHRoaXM7XG4gIHZhciBzbGlkZXJEZWx0YSA9IChqUXVlcnkoJyN6b29tJykuaW5uZXJIZWlnaHQoKSAtIDYgKiAyIC0gMTUgKiAyIC0gMyAqIDIgLSA3IC0gNikgLyAodGhpcy56b29tTWF4U3RlcCAtIHRoaXMuem9vbUN1clN0ZXApO1xuXG4gIGlmIChtYXAuem9vbUN1clN0ZXAgPiAxKSB7XG4gICAgbWFwLnRyYW5zWCArPSAobWFwLndpZHRoIC8gKG1hcC5zY2FsZSAvIG1hcC56b29tU3RlcCkgLSBtYXAud2lkdGggLyBtYXAuc2NhbGUpIC8gMjtcbiAgICBtYXAudHJhbnNZICs9IChtYXAuaGVpZ2h0IC8gKG1hcC5zY2FsZSAvIG1hcC56b29tU3RlcCkgLSBtYXAuaGVpZ2h0IC8gbWFwLnNjYWxlKSAvIDI7XG4gICAgbWFwLnNldFNjYWxlKG1hcC5zY2FsZSAvIG1hcC56b29tU3RlcCk7XG4gICAgbWFwLnpvb21DdXJTdGVwLS07XG5cbiAgICB2YXIgJHNsaWRlciA9IGpRdWVyeSgnI3pvb21TbGlkZXInKTtcblxuICAgICRzbGlkZXIuY3NzKCd0b3AnLCBwYXJzZUludCgkc2xpZGVyLmNzcygndG9wJyksIDEwKSArIHNsaWRlckRlbHRhKTtcblxuICAgIG1hcC5jb250YWluZXIudHJpZ2dlcignem9vbU91dCcpO1xuICB9XG59O1xuXG5WZWN0b3JDYW52YXMucHJvdG90eXBlLmFwcGx5VHJhbnNmb3JtUGFyYW1zID0gZnVuY3Rpb24gKHNjYWxlLCB0cmFuc1gsIHRyYW5zWSkge1xuICBpZiAodGhpcy5tb2RlID09PSAnc3ZnJykge1xuICAgIHRoaXMucm9vdEdyb3VwLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgJ3NjYWxlKCcgKyBzY2FsZSArICcpIHRyYW5zbGF0ZSgnICsgdHJhbnNYICsgJywgJyArIHRyYW5zWSArICcpJyk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5yb290R3JvdXAuY29vcmRvcmlnaW4gPSAodGhpcy53aWR0aCAtIHRyYW5zWCkgKyAnLCcgKyAodGhpcy5oZWlnaHQgLSB0cmFuc1kpO1xuICAgIHRoaXMucm9vdEdyb3VwLmNvb3Jkc2l6ZSA9IHRoaXMud2lkdGggLyBzY2FsZSArICcsJyArIHRoaXMuaGVpZ2h0IC8gc2NhbGU7XG4gIH1cbn07XG5cblZlY3RvckNhbnZhcy5wcm90b3R5cGUuY3JlYXRlR3JvdXAgPSBmdW5jdGlvbiAoaXNSb290KSB7XG4gIHZhciBub2RlO1xuICBpZiAodGhpcy5tb2RlID09PSAnc3ZnJykge1xuICAgIG5vZGUgPSB0aGlzLmNyZWF0ZVN2Z05vZGUoJ2cnKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlID0gdGhpcy5jcmVhdGVWbWxOb2RlKCdncm91cCcpO1xuICAgIG5vZGUuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICBub2RlLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICBub2RlLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICBub2RlLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIG5vZGUuY29vcmRvcmlnaW4gPSAnMCAwJztcbiAgICBub2RlLmNvb3Jkc2l6ZSA9IHRoaXMud2lkdGggKyAnICcgKyB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChpc1Jvb3QpIHtcbiAgICB0aGlzLnJvb3RHcm91cCA9IG5vZGU7XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5WZWN0b3JDYW52YXMucHJvdG90eXBlLmNyZWF0ZVBhdGggPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHZhciBub2RlO1xuICBpZiAodGhpcy5tb2RlID09PSAnc3ZnJykge1xuICAgIG5vZGUgPSB0aGlzLmNyZWF0ZVN2Z05vZGUoJ3BhdGgnKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgnZCcsIGNvbmZpZy5wYXRoKTtcblxuICAgIGlmICh0aGlzLnBhcmFtcy5ib3JkZXJDb2xvciAhPT0gbnVsbCkge1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoaXMucGFyYW1zLmJvcmRlckNvbG9yKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFyYW1zLmJvcmRlcldpZHRoID4gMCkge1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIHRoaXMucGFyYW1zLmJvcmRlcldpZHRoKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJhbXMuYm9yZGVyT3BhY2l0eSA+IDApIHtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdzdHJva2Utb3BhY2l0eScsIHRoaXMucGFyYW1zLmJvcmRlck9wYWNpdHkpO1xuICAgIH1cblxuICAgIG5vZGUuc2V0RmlsbCA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBjb2xvcik7XG4gICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ29yaWdpbmFsJykgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ29yaWdpbmFsJywgY29sb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBub2RlLmdldEZpbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKTtcbiAgICB9O1xuXG4gICAgbm9kZS5nZXRPcmlnaW5hbEZpbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ29yaWdpbmFsJyk7XG4gICAgfTtcblxuICAgIG5vZGUuc2V0T3BhY2l0eSA9IGZ1bmN0aW9uIChvcGFjaXR5KSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZmlsbC1vcGFjaXR5Jywgb3BhY2l0eSk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBub2RlID0gdGhpcy5jcmVhdGVWbWxOb2RlKCdzaGFwZScpO1xuICAgIG5vZGUuY29vcmRvcmlnaW4gPSAnMCAwJztcbiAgICBub2RlLmNvb3Jkc2l6ZSA9IHRoaXMud2lkdGggKyAnICcgKyB0aGlzLmhlaWdodDtcbiAgICBub2RlLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG4gICAgbm9kZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgbm9kZS5maWxsY29sb3IgPSBKUVZNYXAuZGVmYXVsdEZpbGxDb2xvcjtcbiAgICBub2RlLnN0cm9rZWQgPSBmYWxzZTtcbiAgICBub2RlLnBhdGggPSBWZWN0b3JDYW52YXMucGF0aFN2Z1RvVm1sKGNvbmZpZy5wYXRoKTtcblxuICAgIHZhciBzY2FsZSA9IHRoaXMuY3JlYXRlVm1sTm9kZSgnc2tldycpO1xuICAgIHNjYWxlLm9uID0gdHJ1ZTtcbiAgICBzY2FsZS5tYXRyaXggPSAnMC4wMSwwLDAsMC4wMSwwLDAnO1xuICAgIHNjYWxlLm9mZnNldCA9ICcwLDAnO1xuXG4gICAgbm9kZS5hcHBlbmRDaGlsZChzY2FsZSk7XG5cbiAgICB2YXIgZmlsbCA9IHRoaXMuY3JlYXRlVm1sTm9kZSgnZmlsbCcpO1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQoZmlsbCk7XG5cbiAgICBub2RlLnNldEZpbGwgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICAgIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpbGwnKVswXS5jb2xvciA9IGNvbG9yO1xuICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCdvcmlnaW5hbCcpID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdvcmlnaW5hbCcsIGNvbG9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbm9kZS5nZXRGaWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpbGwnKVswXS5jb2xvcjtcbiAgICB9O1xuICAgIG5vZGUuZ2V0T3JpZ2luYWxGaWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdvcmlnaW5hbCcpO1xuICAgIH07XG4gICAgbm9kZS5zZXRPcGFjaXR5ID0gZnVuY3Rpb24gKG9wYWNpdHkpIHtcbiAgICAgIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpbGwnKVswXS5vcGFjaXR5ID0gcGFyc2VJbnQob3BhY2l0eSAqIDEwMCwgMTApICsgJyUnO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5WZWN0b3JDYW52YXMucHJvdG90eXBlLnBhdGhTdmdUb1ZtbCA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGN4ID0gMCwgY3kgPSAwLCBjdHJseCwgY3RybHk7XG5cbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvKFtNbUxsSGhWdkNjU3NdKSgoPzotPyg/OlxcZCspPyg/OlxcLlxcZCspPyw/XFxzPykrKS9nLCBmdW5jdGlvbiAoc2VnbWVudCwgbGV0dGVyLCBjb29yZHMpIHtcbiAgICBjb29yZHMgPSBjb29yZHMucmVwbGFjZSgvKFxcZCktL2csICckMSwtJykucmVwbGFjZSgvXFxzKy9nLCAnLCcpLnNwbGl0KCcsJyk7XG4gICAgaWYgKCFjb29yZHNbMF0pIHtcbiAgICAgIGNvb3Jkcy5zaGlmdCgpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gY29vcmRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29vcmRzW2ldID0gTWF0aC5yb3VuZCgxMDAgKiBjb29yZHNbaV0pO1xuICAgIH1cblxuICAgIHN3aXRjaCAobGV0dGVyKSB7XG4gICAgICBjYXNlICdtJzpcbiAgICAgICAgY3ggKz0gY29vcmRzWzBdO1xuICAgICAgICBjeSArPSBjb29yZHNbMV07XG4gICAgICAgIHJlc3VsdCA9ICd0JyArIGNvb3Jkcy5qb2luKCcsJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdNJzpcbiAgICAgICAgY3ggPSBjb29yZHNbMF07XG4gICAgICAgIGN5ID0gY29vcmRzWzFdO1xuICAgICAgICByZXN1bHQgPSAnbScgKyBjb29yZHMuam9pbignLCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbCc6XG4gICAgICAgIGN4ICs9IGNvb3Jkc1swXTtcbiAgICAgICAgY3kgKz0gY29vcmRzWzFdO1xuICAgICAgICByZXN1bHQgPSAncicgKyBjb29yZHMuam9pbignLCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIGN4ID0gY29vcmRzWzBdO1xuICAgICAgICBjeSA9IGNvb3Jkc1sxXTtcbiAgICAgICAgcmVzdWx0ID0gJ2wnICsgY29vcmRzLmpvaW4oJywnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2gnOlxuICAgICAgICBjeCArPSBjb29yZHNbMF07XG4gICAgICAgIHJlc3VsdCA9ICdyJyArIGNvb3Jkc1swXSArICcsMCc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdIJzpcbiAgICAgICAgY3ggPSBjb29yZHNbMF07XG4gICAgICAgIHJlc3VsdCA9ICdsJyArIGN4ICsgJywnICsgY3k7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd2JzpcbiAgICAgICAgY3kgKz0gY29vcmRzWzBdO1xuICAgICAgICByZXN1bHQgPSAncjAsJyArIGNvb3Jkc1swXTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ1YnOlxuICAgICAgICBjeSA9IGNvb3Jkc1swXTtcbiAgICAgICAgcmVzdWx0ID0gJ2wnICsgY3ggKyAnLCcgKyBjeTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICBjdHJseCA9IGN4ICsgY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSA0XTtcbiAgICAgICAgY3RybHkgPSBjeSArIGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gM107XG4gICAgICAgIGN4ICs9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMl07XG4gICAgICAgIGN5ICs9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIHJlc3VsdCA9ICd2JyArIGNvb3Jkcy5qb2luKCcsJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdDJzpcbiAgICAgICAgY3RybHggPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDRdO1xuICAgICAgICBjdHJseSA9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gM107XG4gICAgICAgIGN4ID0gY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAyXTtcbiAgICAgICAgY3kgPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICByZXN1bHQgPSAnYycgKyBjb29yZHMuam9pbignLCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncyc6XG4gICAgICAgIGNvb3Jkcy51bnNoaWZ0KGN5IC0gY3RybHkpO1xuICAgICAgICBjb29yZHMudW5zaGlmdChjeCAtIGN0cmx4KTtcbiAgICAgICAgY3RybHggPSBjeCArIGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gNF07XG4gICAgICAgIGN0cmx5ID0gY3kgKyBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDNdO1xuICAgICAgICBjeCArPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDJdO1xuICAgICAgICBjeSArPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICByZXN1bHQgPSAndicgKyBjb29yZHMuam9pbignLCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnUyc6XG4gICAgICAgIGNvb3Jkcy51bnNoaWZ0KGN5ICsgY3kgLSBjdHJseSk7XG4gICAgICAgIGNvb3Jkcy51bnNoaWZ0KGN4ICsgY3ggLSBjdHJseCk7XG4gICAgICAgIGN0cmx4ID0gY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSA0XTtcbiAgICAgICAgY3RybHkgPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDNdO1xuICAgICAgICBjeCA9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMl07XG4gICAgICAgIGN5ID0gY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgcmVzdWx0ID0gJ2MnICsgY29vcmRzLmpvaW4oJywnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG5cbiAgfSkucmVwbGFjZSgvei9nLCAnJyk7XG59O1xuXG5WZWN0b3JDYW52YXMucHJvdG90eXBlLnNldFNpemUgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICBpZiAodGhpcy5tb2RlID09PSAnc3ZnJykge1xuICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCk7XG4gICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgdGhpcy5jYW52YXMuY29vcmRzaXplID0gd2lkdGggKyAnICcgKyBoZWlnaHQ7XG4gICAgdGhpcy5jYW52YXMuY29vcmRvcmlnaW4gPSAnMCAwJztcbiAgICBpZiAodGhpcy5yb290R3JvdXApIHtcbiAgICAgIHZhciBwYXRocyA9IHRoaXMucm9vdEdyb3VwLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzaGFwZScpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYXRocy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcGF0aHNbaV0uY29vcmRzaXplID0gd2lkdGggKyAnICcgKyBoZWlnaHQ7XG4gICAgICAgIHBhdGhzW2ldLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICBwYXRoc1tpXS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgfVxuICAgICAgdGhpcy5yb290R3JvdXAuY29vcmRzaXplID0gd2lkdGggKyAnICcgKyBoZWlnaHQ7XG4gICAgICB0aGlzLnJvb3RHcm91cC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgIHRoaXMucm9vdEdyb3VwLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgfVxuICB9XG4gIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==