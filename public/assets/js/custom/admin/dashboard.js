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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGx1Z2lucy9mbGV4YWRtaW4vanMvZGFzaGJvYXJkX2Vjb21tZXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BsdWdpbnMvbW9kdWxlcy9qcXZtYXAvanF1ZXJ5LnZtYXAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiXSwibmFtZXMiOlsiRGVtb0Rhc2hib2FyZEVjb21tZXJjZSIsImNoYXJ0IiwiQ2hhcnRqcyIsImxpbmVDaGFydCIsImRvdWdobnV0Q2hhcnQiLCJwcm9ncmVzc0JhckNoYXJ0IiwiYmFyQ2hhcnQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRhYmxlIiwiJCIsIkRhdGFUYWJsZSIsInJlc3BvbnNpdmUiLCJwYWdlTGVuZ3RoIiwib3JkZXIiLCJjb2x1bW5EZWZzIiwidGFyZ2V0cyIsIm9yZGVyYWJsZSIsImFjdGl2ZUNvbG9yIiwid2luZG93IiwiY29sb3JzIiwiYmx1ZSIsInNlbGVjdGVkQ291bnRyaWVzIiwidXMiLCJydSIsImF1IiwidmVjdG9yTWFwIiwibWFwIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJPcGFjaXR5IiwiYm9yZGVyV2lkdGgiLCJjb2xvciIsImdyYXkiLCJlbmFibGVab29tIiwiaG92ZXJDb2xvciIsImhvdmVyT3BhY2l0eSIsIm5vcm1hbGl6ZUZ1bmN0aW9uIiwic2NhbGVDb2xvcnMiLCJzZWxlY3RlZENvbG9yIiwic2VsZWN0ZWRSZWdpb25zIiwic2hvd1Rvb2x0aXAiLCJfYXBwbHlDaGFydCIsIl9hcHBseURhdGFUYWJsZSIsIl9hcHBseU1hcCIsImluaXQiLCJWZWN0b3JDYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInBhcmFtcyIsIm1vZGUiLCJTVkdBbmdsZSIsImNyZWF0ZVN2Z05vZGUiLCJub2RlTmFtZSIsImNyZWF0ZUVsZW1lbnROUyIsInN2Z25zIiwibmFtZXNwYWNlcyIsInJ2bWwiLCJhZGQiLCJjcmVhdGVWbWxOb2RlIiwidGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJlIiwiY3JlYXRlU3R5bGVTaGVldCIsImFkZFJ1bGUiLCJjYW52YXMiLCJzdHlsZSIsInBvc2l0aW9uIiwic2V0U2l6ZSIsInByb3RvdHlwZSIsIkNvbG9yU2NhbGUiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwic2V0Q29sb3JzIiwic2V0Tm9ybWFsaXplRnVuY3Rpb24iLCJzZXRNaW4iLCJzZXRNYXgiLCJKUVZNYXAiLCJtYXBEYXRhIiwibWFwcyIsIm1hcFBpbnMiLCJFcnJvciIsIm11bHRpU2VsZWN0UmVnaW9uIiwiY29udGFpbmVyIiwiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdEhlaWdodCIsImhvdmVyQ29sb3JzIiwic2V0QmFja2dyb3VuZENvbG9yIiwicmVzaXplIiwialF1ZXJ5IiwibmV3V2lkdGgiLCJuZXdIZWlnaHQiLCJhcHBseVRyYW5zZm9ybSIsInJlc2l6ZUV2ZW50IiwiRXZlbnQiLCJ0cmlnZ2VyIiwicmVtb3ZlIiwicGluSGFuZGxlcnMiLCJwbGFjZVBpbnMiLCJwaW5zIiwiYXBwZW5kIiwibWFrZURyYWdnYWJsZSIsInJvb3RHcm91cCIsImNyZWF0ZUdyb3VwIiwiaW5kZXgiLCJtYXBJbmRleCIsImxhYmVsIiwiYWRkQ2xhc3MiLCJhcHBlbmRUbyIsImhpZGUiLCJ0ZXh0IiwiaHRtbCIsImNvdW50cmllcyIsImtleSIsInBhdGhzIiwicGF0aCIsImNyZWF0ZVBhdGgiLCJzZXRGaWxsIiwiaWQiLCJnZXRDb3VudHJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJkZWxlZ2F0ZSIsImNvbnRhaW5lclBhdGgiLCJ0YXJnZXQiLCJjb2RlIiwic3BsaXQiLCJwb3AiLCJsYWJlbFNob3dFdmVudCIsInJlZ2lvbk1vdXNlT3ZlckV2ZW50IiwidG9Mb3dlckNhc2UiLCJ0eXBlIiwibmFtZSIsImlzRGVmYXVsdFByZXZlbnRlZCIsImhpZ2hsaWdodCIsInNob3ciLCJsYWJlbFdpZHRoIiwibGFiZWxIZWlnaHQiLCJ1bmhpZ2hsaWdodCIsInJlZ2lvbkNsaWNrRXZlbnQiLCJ0YXJnZXRQYXRoIiwibWFwQ2xpY2tFdmVudCIsImtleVBhdGgiLCJjdXJyZW50RmlsbENvbG9yIiwiZ2V0T3JpZ2luYWxGaWxsIiwiaXNTZWxlY3RlZCIsImRlc2VsZWN0Iiwic2VsZWN0IiwibW91c2Vtb3ZlIiwiaXMiLCJsZWZ0IiwicGFnZVgiLCJ0b3AiLCJwYWdlWSIsImNzcyIsImFwcGVuZENoaWxkIiwiY29sb3JTY2FsZSIsInZhbHVlTWluIiwidmFsdWVNYXgiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJBcnJheSIsImsiLCJiaW5kWm9vbUJ1dHRvbnMiLCJwaW5Nb2RlIiwic2hvd0xhYmVscyIsInRvVXBwZXJDYXNlIiwidHJhbnNYIiwidHJhbnNZIiwic2NhbGUiLCJiYXNlVHJhbnNYIiwiYmFzZVRyYW5zWSIsImJhc2VTY2FsZSIsImNvdW50cmllc0NvbG9ycyIsImNvdW50cmllc0RhdGEiLCJ6b29tU3RlcCIsInpvb21NYXhTdGVwIiwiem9vbUN1clN0ZXAiLCJ4bGluayIsImFwaVBhcmFtcyIsImFwaUV2ZW50cyIsIm9uTGFiZWxTaG93Iiwib25Mb2FkIiwib25SZWdpb25PdmVyIiwib25SZWdpb25PdXQiLCJvblJlZ2lvbkNsaWNrIiwib25SZWdpb25TZWxlY3QiLCJvblJlZ2lvbkRlc2VsZWN0Iiwib25SZXNpemUiLCJmbiIsIm9wdGlvbnMiLCJkZWZhdWx0UGFyYW1zIiwiZGF0YSIsImFyZ3VtZW50cyIsImNoYXJBdCIsInN1YnN0ciIsImFwcGx5Iiwic2xpY2UiLCJjYWxsIiwiZXh0ZW5kIiwib3ZlcmZsb3ciLCJ1bmJpbmQiLCJiaW5kIiwibG9hZEV2ZW50IiwiYXJyYXlUb1JnYiIsImFyIiwicmdiIiwiZCIsImkiLCJsZW5ndGgiLCJ0b1N0cmluZyIsImdldENvbG9yIiwidmFsdWUiLCJub3JtYWxpemUiLCJsZW5ndGhlcyIsImZ1bGxMZW5ndGgiLCJsIiwidmVjdG9yTGVuZ3RoIiwidmVjdG9yU3VidHJhY3QiLCJwdXNoIiwiYyIsInZlY3RvclRvTnVtIiwidmVjdG9yQWRkIiwidmVjdG9yTXVsdCIsInJnYlRvQXJyYXkiLCJwYXJzZUludCIsIm1heCIsImNsZWFyTWF4VmFsdWUiLCJtaW4iLCJjbGVhck1pblZhbHVlIiwiZiIsIk1hdGgiLCJwb3ciLCJ2ZWN0b3IxIiwidmVjdG9yMiIsInZlY3RvciIsInJlc3VsdCIsInNxcnQiLCJudW0iLCJyb3VuZCIsIm1heFRyYW5zWCIsIm1heFRyYW5zWSIsIm1pblRyYW5zWCIsIm1pblRyYW5zWSIsImFwcGx5VHJhbnNmb3JtUGFyYW1zIiwiZmluZCIsImNsaWNrIiwiem9vbUluIiwiem9vbU91dCIsImNjIiwic3BsaWNlIiwic2VsZWN0SW5kZXgiLCJpbmRleE9mIiwiZ2V0UGluIiwicGluT2JqIiwiZ2V0UGluSWQiLCJnZXRQaW5zIiwicmV0IiwiZWFjaCIsImF0dHIiLCJwaW5Db250ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsInNldE9wYWNpdHkiLCJnZXRGaWxsIiwibW91c2VEb3duIiwib2xkUGFnZVgiLCJvbGRQYWdlWSIsInNlbGYiLCJpc01vdmluZyIsImlzTW92aW5nVGltZW91dCIsImxhc3RUb3VjaENvdW50IiwidG91Y2hDZW50ZXJYIiwidG91Y2hDZW50ZXJZIiwidG91Y2hTdGFydERpc3RhbmNlIiwidG91Y2hTdGFydFNjYWxlIiwidG91Y2hYIiwidG91Y2hZIiwiY2xlYXJUaW1lb3V0IiwibW91c2Vkb3duIiwibW91c2V1cCIsInNldFRpbWVvdXQiLCJtb3VzZW91dCIsIm9mZnNldCIsInRvdWNoZXMiLCJvcmlnaW5hbEV2ZW50IiwidHJhbnNmb3JtWE9sZCIsInRyYW5zZm9ybVlPbGQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFNjYWxlIiwicGluIiwicGluSW5kZXgiLCIkcGluIiwicG9zaXRpb25QaW5zIiwicG9zaXRpb25GaXgiLCJjb3VudHJ5SWQiLCJjb3VudHJ5T2JqIiwiYmJveCIsImdldEJCb3giLCJyb290Q29vcmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibWFwQ29vcmRzIiwiY29vcmRzIiwibWlkZGxlWCIsIngiLCJtaWRkbGVZIiwieSIsInJlbW92ZVBpbiIsInJlbW92ZVBpbnMiLCJyZXNldCIsImN1ckJhc2VTY2FsZSIsImFicyIsInNldFNjYWxlQ29sb3JzIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwidmFsIiwicGFyc2VGbG9hdCIsImlzTmFOIiwic2xpZGVyRGVsdGEiLCJpbm5lckhlaWdodCIsIiRzbGlkZXIiLCJjb29yZG9yaWdpbiIsImNvb3Jkc2l6ZSIsImlzUm9vdCIsIm5vZGUiLCJjb25maWciLCJnZXRBdHRyaWJ1dGUiLCJvcGFjaXR5IiwiZmlsbGNvbG9yIiwiZGVmYXVsdEZpbGxDb2xvciIsInN0cm9rZWQiLCJwYXRoU3ZnVG9WbWwiLCJvbiIsIm1hdHJpeCIsImZpbGwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImN4IiwiY3kiLCJjdHJseCIsImN0cmx5IiwicmVwbGFjZSIsInNlZ21lbnQiLCJsZXR0ZXIiLCJzaGlmdCIsImpvaW4iLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EsMEVBQTBFLE1BQU0sMEJBQTBCLEVBQUUsWUFBWSxFQUFFO0FBQzFIO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxNQUFNLDBCQUEwQixFQUFFLFlBQVksRUFBRTtBQUM3SDtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7O0lBRU1BLHNCOzs7O3lDQU9VLFlBQU07QUFDbEIsVUFBSUMsS0FBSyxHQUFHLElBQUlDLHNEQUFKLEVBQVo7QUFDQUQsV0FBSyxDQUFDRSxTQUFOLENBQWdCLHdCQUFoQjtBQUNBRixXQUFLLENBQUNHLGFBQU4sQ0FBb0IsNEJBQXBCO0FBQ0FILFdBQUssQ0FBQ0ksZ0JBQU4sQ0FBdUIsZ0NBQXZCO0FBQ0FKLFdB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QWYsQ0FBb0MsT0FBcEMsQ0FBWjs7QUFDQSxXQUFLLElBQUkvSCxDQUFDLEdBQUcsQ0FBUixFQUFXUSxDQUFDLEdBQUdyRyxLQUFLLENBQUM4RixNQUExQixFQUFrQ0QsQ0FBQyxHQUFHUSxDQUF0QyxFQUF5Q1IsQ0FBQyxFQUExQyxFQUE4QztBQUM1QzdGLGFBQUssQ0FBQzZGLENBQUQsQ0FBTCxDQUFTa0gsU0FBVCxHQUFxQmxSLEtBQUssR0FBRyxHQUFSLEdBQWNDLE1BQW5DO0FBQ0FrRSxhQUFLLENBQUM2RixDQUFELENBQUwsQ0FBUzdJLEtBQVQsQ0FBZW5CLEtBQWYsR0FBdUJBLEtBQUssR0FBRyxJQUEvQjtBQUNBbUUsYUFBSyxDQUFDNkYsQ0FBRCxDQUFMLENBQVM3SSxLQUFULENBQWVsQixNQUFmLEdBQXdCQSxNQUFNLEdBQUcsSUFBakM7QUFDRDs7QUFDRCxXQUFLc0QsU0FBTCxDQUFlMk4sU0FBZixHQUEyQmxSLEtBQUssR0FBRyxHQUFSLEdBQWNDLE1BQXpDO0FBQ0EsV0FBS3NELFNBQUwsQ0FBZXBDLEtBQWYsQ0FBcUJuQixLQUFyQixHQUE2QkEsS0FBSyxHQUFHLElBQXJDO0FBQ0EsV0FBS3VELFNBQUwsQ0FBZXBDLEtBQWYsQ0FBcUJsQixNQUFyQixHQUE4QkEsTUFBTSxHQUFHLElBQXZDO0FBQ0Q7QUFDRjs7QUFDRCxPQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDRCxDQXZCRCxDOzs7Ozs7Ozs7OztBQ2p2Q0EsK0RBQStELGtEQUFrRCw2QkFBNkIsU0FBUzs7QUFFdkosb0QiLCJmaWxlIjoianMvY3VzdG9tL2FkbWluL2Rhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKGZ1bmN0aW9uIHdlYnBhY2tMb2FkT3B0aW9uYWxFeHRlcm5hbE1vZHVsZSgpIHsgdHJ5IHsgcmV0dXJuIHJlcXVpcmUoXCJtb21lbnRcIik7IH0gY2F0Y2goZSkge30gfSgpKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJtb21lbnRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia25nZWxsXCJdID0gZmFjdG9yeSgoZnVuY3Rpb24gd2VicGFja0xvYWRPcHRpb25hbEV4dGVybmFsTW9kdWxlKCkgeyB0cnkgeyByZXR1cm4gcmVxdWlyZShcIm1vbWVudFwiKTsgfSBjYXRjaChlKSB7fSB9KCkpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KHJvb3RbXCJtb21lbnRcIl0pO1xufSkoc2VsZiwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9tb21lbnRfXykge1xucmV0dXJuICIsImltcG9ydCBcInBsdWdpbnMvbW9kdWxlcy9qcXZtYXAvanF1ZXJ5LnZtYXBcIjtcbmltcG9ydCBcInBsdWdpbnMvbW9kdWxlcy9qcXZtYXAvbWFwcy9qcXVlcnkudm1hcC53b3JsZC5qc1wiO1xuaW1wb3J0IENoYXJ0anMgZnJvbSBcIi4vY2hhcnQvY2hhcnRqcy5qc1wiO1xuXG5jbGFzcyBEZW1vRGFzaGJvYXJkRWNvbW1lcmNlIHtcbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9hcHBseUNoYXJ0KCk7XG4gICAgdGhpcy5fYXBwbHlEYXRhVGFibGUoKTtcbiAgICB0aGlzLl9hcHBseU1hcCgpO1xuICB9XG5cbiAgX2FwcGx5Q2hhcnQgPSAoKSA9PiB7XG4gICAgbGV0IGNoYXJ0ID0gbmV3IENoYXJ0anMoKTtcbiAgICBjaGFydC5saW5lQ2hhcnQoXCJkYXNoYm9hcmQtbGluZS1jaGFydGpzXCIpO1xuICAgIGNoYXJ0LmRvdWdobnV0Q2hhcnQoXCJkYXNoYm9hcmQtZG91Z2hudXQtY2hhcnRqc1wiKTtcbiAgICBjaGFydC5wcm9ncmVzc0JhckNoYXJ0KFwiZGFzaGJvYXJkLXByb2dyZXNzLWJhci1jaGFydGpzXCIpO1xuICAgIGNoYXJ0LmJhckNoYXJ0KFwiZGFzaGJvYXJkLWJhci1jaGFydGpzXCIpO1xuICB9O1xuXG4gIF9hcHBseURhdGFUYWJsZSA9ICgpID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWNvbW1lcmNlLWRhdGF0YWJsZVwiKTtcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTtcbiAgICBsZXQgdGFibGUgPSAkKGVsZW1lbnQpLkRhdGFUYWJsZSh7XG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgcGFnZUxlbmd0aDogMTAsXG4gICAgICBvcmRlcjogW10sXG4gICAgICBjb2x1bW5EZWZzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0YXJnZXRzOiBcIm5vLXNvcnRcIixcbiAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfTtcblxuICBfYXBwbHlNYXAgPSAoKSA9PiB7XG4gICAgdmFyIGFjdGl2ZUNvbG9yID0gd2luZG93LmNvbG9ycy5ibHVlO1xuICAgIHZhciBzZWxlY3RlZENvdW50cmllcyA9IFtcInVzXCIsIFwicnVcIl07XG4gICAgdmFyIGNvbG9ycyA9IHsgdXM6IGFjdGl2ZUNvbG9yLCBydTogYWN0aXZlQ29sb3IsIGF1OiBhY3RpdmVDb2xvciB9O1xuICAgICQoXCIjd29ybGRfbWFwXCIpLnZlY3Rvck1hcCh7XG4gICAgICBtYXA6IFwid29ybGRfZW5cIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgYm9yZGVyQ29sb3I6IFwiIzgxODE4MVwiLFxuICAgICAgYm9yZGVyT3BhY2l0eTogMC4yNSxcbiAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgY29sb3I6IHdpbmRvdy5jb2xvcnMuZ3JheSxcbiAgICAgIGVuYWJsZVpvb206IHRydWUsXG4gICAgICBob3ZlckNvbG9yOiBcIiNjY2NcIixcbiAgICAgIGhvdmVyT3BhY2l0eTogbnVsbCxcbiAgICAgIG5vcm1hbGl6ZUZ1bmN0aW9uOiBcImxpbmVhclwiLFxuICAgICAgc2NhbGVDb2xvcnM6IFtcIiNiNmQ2ZmZcIiwgXCIjMDA1YWNlXCJdLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogXCIjYzlkZmFmXCIsXG4gICAgICBzZWxlY3RlZFJlZ2lvbnM6IG51bGwsXG4gICAgICBzaG93VG9vbHRpcDogdHJ1ZSxcbiAgICAgIGNvbG9yczogY29sb3JzLFxuICAgICAgaG92ZXJPcGFjaXR5OiAwLjcsXG4gICAgfSk7XG4gIH07XG59XG5cbm5ldyBEZW1vRGFzaGJvYXJkRWNvbW1lcmNlKCkuaW5pdCgpO1xuIiwiLyohXG4gKiBKUVZNYXA6IGpRdWVyeSBWZWN0b3IgTWFwIExpYnJhcnlcbiAqIEBhdXRob3IgSlFWTWFwIDxtZUBwZXRlcnNjaG1hbGZlbGR0LmNvbT5cbiAqIEB2ZXJzaW9uIDEuNS4xXG4gKiBAbGluayBodHRwOi8vanF2bWFwLmNvbVxuICogQGxpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL21hbmlmZXN0aW50ZXJhY3RpdmUvanF2bWFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIEBidWlsZGRhdGUgMjAxNi8wNi8wMlxuICovXG5cbnZhciBWZWN0b3JDYW52YXMgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgcGFyYW1zKSB7XG4gIHRoaXMubW9kZSA9IHdpbmRvdy5TVkdBbmdsZSA/ICdzdmcnIDogJ3ZtbCc7XG4gIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuXG4gIGlmICh0aGlzLm1vZGUgPT09ICdzdmcnKSB7XG4gICAgdGhpcy5jcmVhdGVTdmdOb2RlID0gZnVuY3Rpb24gKG5vZGVOYW1lKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHRoaXMuc3ZnbnMsIG5vZGVOYW1lKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWRvY3VtZW50Lm5hbWVzcGFjZXMucnZtbCkge1xuICAgICAgICBkb2N1bWVudC5uYW1lc3BhY2VzLmFkZCgncnZtbCcsICd1cm46c2NoZW1hcy1taWNyb3NvZnQtY29tOnZtbCcpO1xuICAgICAgfVxuICAgICAgdGhpcy5jcmVhdGVWbWxOb2RlID0gZnVuY3Rpb24gKHRhZ05hbWUpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJzxydm1sOicgKyB0YWdOYW1lICsgJyBjbGFzcz1cInJ2bWxcIj4nKTtcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5jcmVhdGVWbWxOb2RlID0gZnVuY3Rpb24gKHRhZ05hbWUpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJzwnICsgdGFnTmFtZSArICcgeG1sbnM9XCJ1cm46c2NoZW1hcy1taWNyb3NvZnQuY29tOnZtbFwiIGNsYXNzPVwicnZtbFwiPicpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5jcmVhdGVTdHlsZVNoZWV0KCkuYWRkUnVsZSgnLnJ2bWwnLCAnYmVoYXZpb3I6dXJsKCNkZWZhdWx0I1ZNTCknKTtcbiAgfVxuXG4gIGlmICh0aGlzLm1vZGUgPT09ICdzdmcnKSB7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZVN2Z05vZGUoJ3N2ZycpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVWbWxOb2RlKCdncm91cCcpO1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgfVxuXG4gIHRoaXMuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbn07XG5cblZlY3RvckNhbnZhcy5wcm90b3R5cGUgPSB7XG4gIHN2Z25zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICBtb2RlOiAnc3ZnJyxcbiAgd2lkdGg6IDAsXG4gIGhlaWdodDogMCxcbiAgY2FudmFzOiBudWxsXG59O1xuXG52YXIgQ29sb3JTY2FsZSA9IGZ1bmN0aW9uIChjb2xvcnMsIG5vcm1hbGl6ZUZ1bmN0aW9uLCBtaW5WYWx1ZSwgbWF4VmFsdWUpIHtcbiAgaWYgKGNvbG9ycykge1xuICAgIHRoaXMuc2V0Q29sb3JzKGNvbG9ycyk7XG4gIH1cbiAgaWYgKG5vcm1hbGl6ZUZ1bmN0aW9uKSB7XG4gICAgdGhpcy5zZXROb3JtYWxpemVGdW5jdGlvbihub3JtYWxpemVGdW5jdGlvbik7XG4gIH1cbiAgaWYgKG1pblZhbHVlKSB7XG4gICAgdGhpcy5zZXRNaW4obWluVmFsdWUpO1xuICB9XG4gIGlmIChtaW5WYWx1ZSkge1xuICAgIHRoaXMuc2V0TWF4KG1heFZhbHVlKTtcbiAgfVxufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUgPSB7XG4gIGNvbG9yczogW11cbn07XG5cbnZhciBKUVZNYXAgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgdmFyIG1hcCA9IHRoaXM7XG4gIHZhciBtYXBEYXRhID0gSlFWTWFwLm1hcHNbcGFyYW1zLm1hcF07XG4gIHZhciBtYXBQaW5zO1xuXG4gIGlmKCAhbWFwRGF0YSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwiJyArIHBhcmFtcy5tYXAgKyAnXCIgbWFwIHBhcmFtZXRlci4gUGxlYXNlIG1ha2Ugc3VyZSB5b3UgaGF2ZSBsb2FkZWQgdGhpcyBtYXAgZmlsZSBpbiB5b3VyIEhUTUwuJyk7XG4gIH1cblxuICB0aGlzLnNlbGVjdGVkUmVnaW9ucyA9IFtdO1xuICB0aGlzLm11bHRpU2VsZWN0UmVnaW9uID0gcGFyYW1zLm11bHRpU2VsZWN0UmVnaW9uO1xuXG4gIHRoaXMuY29udGFpbmVyID0gcGFyYW1zLmNvbnRhaW5lcjtcblxuICB0aGlzLmRlZmF1bHRXaWR0aCA9IG1hcERhdGEud2lkdGg7XG4gIHRoaXMuZGVmYXVsdEhlaWdodCA9IG1hcERhdGEuaGVpZ2h0O1xuXG4gIHRoaXMuY29sb3IgPSBwYXJhbXMuY29sb3I7XG4gIHRoaXMuc2VsZWN0ZWRDb2xvciA9IHBhcmFtcy5zZWxlY3RlZENvbG9yO1xuICB0aGlzLmhvdmVyQ29sb3IgPSBwYXJhbXMuaG92ZXJDb2xvcjtcbiAgdGhpcy5ob3ZlckNvbG9ycyA9IHBhcmFtcy5ob3ZlckNvbG9ycztcbiAgdGhpcy5ob3Zlck9wYWNpdHkgPSBwYXJhbXMuaG92ZXJPcGFjaXR5O1xuICB0aGlzLnNldEJhY2tncm91bmRDb2xvcihwYXJhbXMuYmFja2dyb3VuZENvbG9yKTtcblxuICB0aGlzLndpZHRoID0gcGFyYW1zLmNvbnRhaW5lci53aWR0aCgpO1xuICB0aGlzLmhlaWdodCA9IHBhcmFtcy5jb250YWluZXIuaGVpZ2h0KCk7XG5cbiAgdGhpcy5yZXNpemUoKTtcblxuICBqUXVlcnkod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICAgIHZhciBuZXdXaWR0aCA9IHBhcmFtcy5jb250YWluZXIud2lkdGgoKTtcbiAgICB2YXIgbmV3SGVpZ2h0ID0gcGFyYW1zLmNvbnRhaW5lci5oZWlnaHQoKTtcblxuICAgIGlmKG5ld1dpZHRoICYmIG5ld0hlaWdodCl7XG4gICAgICBtYXAud2lkdGggPSBuZXdXaWR0aDtcbiAgICAgIG1hcC5oZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICBtYXAucmVzaXplKCk7XG4gICAgICBtYXAuY2FudmFzLnNldFNpemUobWFwLndpZHRoLCBtYXAuaGVpZ2h0KTtcbiAgICAgIG1hcC5hcHBseVRyYW5zZm9ybSgpO1xuXG4gICAgICB2YXIgcmVzaXplRXZlbnQgPSBqUXVlcnkuRXZlbnQoJ3Jlc2l6ZS5qcXZtYXAnKTtcbiAgICAgIGpRdWVyeShwYXJhbXMuY29udGFpbmVyKS50cmlnZ2VyKHJlc2l6ZUV2ZW50LCBbbmV3V2lkdGgsIG5ld0hlaWdodF0pO1xuXG4gICAgICBpZihtYXBQaW5zKXtcbiAgICAgICAgalF1ZXJ5KCcuanF2bWFwLXBpbicpLnJlbW92ZSgpO1xuICAgICAgICBtYXAucGluSGFuZGxlcnMgPSBmYWxzZTtcbiAgICAgICAgbWFwLnBsYWNlUGlucyhtYXBQaW5zLnBpbnMsIG1hcFBpbnMubW9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB0aGlzLmNhbnZhcyA9IG5ldyBWZWN0b3JDYW52YXModGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHBhcmFtcyk7XG4gIHBhcmFtcy5jb250YWluZXIuYXBwZW5kKHRoaXMuY2FudmFzLmNhbnZhcyk7XG5cbiAgdGhpcy5tYWtlRHJhZ2dhYmxlKCk7XG5cbiAgdGhpcy5yb290R3JvdXAgPSB0aGlzLmNhbnZhcy5jcmVhdGVHcm91cCh0cnVlKTtcblxuICB0aGlzLmluZGV4ID0gSlFWTWFwLm1hcEluZGV4O1xuICB0aGlzLmxhYmVsID0galF1ZXJ5KCc8ZGl2Lz4nKS5hZGRDbGFzcygnanF2bWFwLWxhYmVsJykuYXBwZW5kVG8oalF1ZXJ5KCdib2R5JykpLmhpZGUoKTtcblxuICBpZiAocGFyYW1zLmVuYWJsZVpvb20pIHtcbiAgICBqUXVlcnkoJzxkaXYvPicpLmFkZENsYXNzKCdqcXZtYXAtem9vbWluJykudGV4dCgnKycpLmFwcGVuZFRvKHBhcmFtcy5jb250YWluZXIpO1xuICAgIGpRdWVyeSgnPGRpdi8+JykuYWRkQ2xhc3MoJ2pxdm1hcC16b29tb3V0JykuaHRtbCgnJiN4MjIxMjsnKS5hcHBlbmRUbyhwYXJhbXMuY29udGFpbmVyKTtcbiAgfVxuXG4gIG1hcC5jb3VudHJpZXMgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gbWFwRGF0YS5wYXRocykge1xuICAgIHZhciBwYXRoID0gdGhpcy5jYW52YXMuY3JlYXRlUGF0aCh7XG4gICAgICBwYXRoOiBtYXBEYXRhLnBhdGhzW2tleV0ucGF0aFxuICAgIH0pO1xuXG4gICAgcGF0aC5zZXRGaWxsKHRoaXMuY29sb3IpO1xuICAgIHBhdGguaWQgPSBtYXAuZ2V0Q291bnRyeUlkKGtleSk7XG4gICAgbWFwLmNvdW50cmllc1trZXldID0gcGF0aDtcblxuICAgIGlmICh0aGlzLmNhbnZhcy5tb2RlID09PSAnc3ZnJykge1xuICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2pxdm1hcC1yZWdpb24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgalF1ZXJ5KHBhdGgpLmFkZENsYXNzKCdqcXZtYXAtcmVnaW9uJyk7XG4gICAgfVxuXG4gICAgalF1ZXJ5KHRoaXMucm9vdEdyb3VwKS5hcHBlbmQocGF0aCk7XG4gIH1cblxuICBqUXVlcnkocGFyYW1zLmNvbnRhaW5lcikuZGVsZWdhdGUodGhpcy5jYW52YXMubW9kZSA9PT0gJ3N2ZycgPyAncGF0aCcgOiAnc2hhcGUnLCAnbW91c2VvdmVyIG1vdXNlb3V0JywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgY29udGFpbmVyUGF0aCA9IGUudGFyZ2V0LFxuICAgICAgY29kZSA9IGUudGFyZ2V0LmlkLnNwbGl0KCdfJykucG9wKCksXG4gICAgICBsYWJlbFNob3dFdmVudCA9IGpRdWVyeS5FdmVudCgnbGFiZWxTaG93Lmpxdm1hcCcpLFxuICAgICAgcmVnaW9uTW91c2VPdmVyRXZlbnQgPSBqUXVlcnkuRXZlbnQoJ3JlZ2lvbk1vdXNlT3Zlci5qcXZtYXAnKTtcblxuICAgIGNvZGUgPSBjb2RlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAoZS50eXBlID09PSAnbW91c2VvdmVyJykge1xuICAgICAgalF1ZXJ5KHBhcmFtcy5jb250YWluZXIpLnRyaWdnZXIocmVnaW9uTW91c2VPdmVyRXZlbnQsIFtjb2RlLCBtYXBEYXRhLnBhdGhzW2NvZGVdLm5hbWVdKTtcbiAgICAgIGlmICghcmVnaW9uTW91c2VPdmVyRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgbWFwLmhpZ2hsaWdodChjb2RlLCBjb250YWluZXJQYXRoKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMuc2hvd1Rvb2x0aXApIHtcbiAgICAgICAgbWFwLmxhYmVsLnRleHQobWFwRGF0YS5wYXRoc1tjb2RlXS5uYW1lKTtcbiAgICAgICAgalF1ZXJ5KHBhcmFtcy5jb250YWluZXIpLnRyaWdnZXIobGFiZWxTaG93RXZlbnQsIFttYXAubGFiZWwsIGNvZGVdKTtcblxuICAgICAgICBpZiAoIWxhYmVsU2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgICAgbWFwLmxhYmVsLnNob3coKTtcbiAgICAgICAgICBtYXAubGFiZWxXaWR0aCA9IG1hcC5sYWJlbC53aWR0aCgpO1xuICAgICAgICAgIG1hcC5sYWJlbEhlaWdodCA9IG1hcC5sYWJlbC5oZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXAudW5oaWdobGlnaHQoY29kZSwgY29udGFpbmVyUGF0aCk7XG5cbiAgICAgIG1hcC5sYWJlbC5oaWRlKCk7XG4gICAgICBqUXVlcnkocGFyYW1zLmNvbnRhaW5lcikudHJpZ2dlcigncmVnaW9uTW91c2VPdXQuanF2bWFwJywgW2NvZGUsIG1hcERhdGEucGF0aHNbY29kZV0ubmFtZV0pO1xuICAgIH1cbiAgfSk7XG5cbiAgalF1ZXJ5KHBhcmFtcy5jb250YWluZXIpLmRlbGVnYXRlKHRoaXMuY2FudmFzLm1vZGUgPT09ICdzdmcnID8gJ3BhdGgnIDogJ3NoYXBlJywgJ2NsaWNrJywgZnVuY3Rpb24gKHJlZ2lvbkNsaWNrRXZlbnQpIHtcblxuICAgIHZhciB0YXJnZXRQYXRoID0gcmVnaW9uQ2xpY2tFdmVudC50YXJnZXQ7XG4gICAgdmFyIGNvZGUgPSByZWdpb25DbGlja0V2ZW50LnRhcmdldC5pZC5zcGxpdCgnXycpLnBvcCgpO1xuICAgIHZhciBtYXBDbGlja0V2ZW50ID0galF1ZXJ5LkV2ZW50KCdyZWdpb25DbGljay5qcXZtYXAnKTtcblxuICAgIGNvZGUgPSBjb2RlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBqUXVlcnkocGFyYW1zLmNvbnRhaW5lcikudHJpZ2dlcihtYXBDbGlja0V2ZW50LCBbY29kZSwgbWFwRGF0YS5wYXRoc1tjb2RlXS5uYW1lXSk7XG5cbiAgICBpZiAoICFwYXJhbXMubXVsdGlTZWxlY3RSZWdpb24gJiYgIW1hcENsaWNrRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIGZvciAodmFyIGtleVBhdGggaW4gbWFwRGF0YS5wYXRocykge1xuICAgICAgICBtYXAuY291bnRyaWVzW2tleVBhdGhdLmN1cnJlbnRGaWxsQ29sb3IgPSBtYXAuY291bnRyaWVzW2tleVBhdGhdLmdldE9yaWdpbmFsRmlsbCgpO1xuICAgICAgICBtYXAuY291bnRyaWVzW2tleVBhdGhdLnNldEZpbGwobWFwLmNvdW50cmllc1trZXlQYXRoXS5nZXRPcmlnaW5hbEZpbGwoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCAhbWFwQ2xpY2tFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgaWYgKG1hcC5pc1NlbGVjdGVkKGNvZGUpKSB7XG4gICAgICAgIG1hcC5kZXNlbGVjdChjb2RlLCB0YXJnZXRQYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hcC5zZWxlY3QoY29kZSwgdGFyZ2V0UGF0aCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAocGFyYW1zLnNob3dUb29sdGlwKSB7XG4gICAgcGFyYW1zLmNvbnRhaW5lci5tb3VzZW1vdmUoZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChtYXAubGFiZWwuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgdmFyIGxlZnQgPSBlLnBhZ2VYIC0gMTUgLSBtYXAubGFiZWxXaWR0aDtcbiAgICAgICAgdmFyIHRvcCA9IGUucGFnZVkgLSAxNSAtIG1hcC5sYWJlbEhlaWdodDtcblxuICAgICAgICBpZihsZWZ0IDwgMCkge1xuICAgICAgICAgIGxlZnQgPSBlLnBhZ2VYICsgMTU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodG9wIDwgMCkge1xuICAgICAgICAgIHRvcCA9IGUucGFnZVkgKyAxNTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcC5sYWJlbC5jc3Moe1xuICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgdG9wOiB0b3BcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0aGlzLnNldENvbG9ycyhwYXJhbXMuY29sb3JzKTtcblxuICB0aGlzLmNhbnZhcy5jYW52YXMuYXBwZW5kQ2hpbGQodGhpcy5yb290R3JvdXApO1xuXG4gIHRoaXMuYXBwbHlUcmFuc2Zvcm0oKTtcblxuICB0aGlzLmNvbG9yU2NhbGUgPSBuZXcgQ29sb3JTY2FsZShwYXJhbXMuc2NhbGVDb2xvcnMsIHBhcmFtcy5ub3JtYWxpemVGdW5jdGlvbiwgcGFyYW1zLnZhbHVlTWluLCBwYXJhbXMudmFsdWVNYXgpO1xuXG4gIGlmIChwYXJhbXMudmFsdWVzKSB7XG4gICAgdGhpcy52YWx1ZXMgPSBwYXJhbXMudmFsdWVzO1xuICAgIHRoaXMuc2V0VmFsdWVzKHBhcmFtcy52YWx1ZXMpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5zZWxlY3RlZFJlZ2lvbnMpIHtcbiAgICBpZiAocGFyYW1zLnNlbGVjdGVkUmVnaW9ucyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBmb3IodmFyIGsgaW4gcGFyYW1zLnNlbGVjdGVkUmVnaW9ucykge1xuICAgICAgICB0aGlzLnNlbGVjdChwYXJhbXMuc2VsZWN0ZWRSZWdpb25zW2tdLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdChwYXJhbXMuc2VsZWN0ZWRSZWdpb25zLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuYmluZFpvb21CdXR0b25zKCk7XG5cbiAgaWYocGFyYW1zLnBpbnMpIHtcbiAgICBtYXBQaW5zID0ge1xuICAgICAgcGluczogcGFyYW1zLnBpbnMsXG4gICAgICBtb2RlOiBwYXJhbXMucGluTW9kZVxuICAgIH07XG5cbiAgICB0aGlzLnBpbkhhbmRsZXJzID0gZmFsc2U7XG4gICAgdGhpcy5wbGFjZVBpbnMocGFyYW1zLnBpbnMsIHBhcmFtcy5waW5Nb2RlKTtcbiAgfVxuXG4gIGlmKHBhcmFtcy5zaG93TGFiZWxzKXtcbiAgICB0aGlzLnBpbkhhbmRsZXJzID0gZmFsc2U7XG5cbiAgICB2YXIgcGlucyA9IHt9O1xuICAgIGZvciAoa2V5IGluIG1hcC5jb3VudHJpZXMpe1xuICAgICAgaWYgKHR5cGVvZiBtYXAuY291bnRyaWVzW2tleV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYoICFwYXJhbXMucGlucyB8fCAhcGFyYW1zLnBpbnNba2V5XSApe1xuICAgICAgICAgIHBpbnNba2V5XSA9IGtleS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwUGlucyA9IHtcbiAgICAgIHBpbnM6IHBpbnMsXG4gICAgICBtb2RlOiAnY29udGVudCdcbiAgICB9O1xuXG4gICAgdGhpcy5wbGFjZVBpbnMocGlucywgJ2NvbnRlbnQnKTtcbiAgfVxuXG4gIEpRVk1hcC5tYXBJbmRleCsrO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZSA9IHtcbiAgdHJhbnNYOiAwLFxuICB0cmFuc1k6IDAsXG4gIHNjYWxlOiAxLFxuICBiYXNlVHJhbnNYOiAwLFxuICBiYXNlVHJhbnNZOiAwLFxuICBiYXNlU2NhbGU6IDEsXG4gIHdpZHRoOiAwLFxuICBoZWlnaHQ6IDAsXG4gIGNvdW50cmllczoge30sXG4gIGNvdW50cmllc0NvbG9yczoge30sXG4gIGNvdW50cmllc0RhdGE6IHt9LFxuICB6b29tU3RlcDogMS40LFxuICB6b29tTWF4U3RlcDogNCxcbiAgem9vbUN1clN0ZXA6IDFcbn07XG5cbkpRVk1hcC54bGluayA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJztcbkpRVk1hcC5tYXBJbmRleCA9IDE7XG5KUVZNYXAubWFwcyA9IHt9O1xuXG4oZnVuY3Rpb24oKXtcblxuICB2YXIgYXBpUGFyYW1zID0ge1xuICAgIGNvbG9yczogMSxcbiAgICB2YWx1ZXM6IDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiAxLFxuICAgIHNjYWxlQ29sb3JzOiAxLFxuICAgIG5vcm1hbGl6ZUZ1bmN0aW9uOiAxLFxuICAgIGVuYWJsZVpvb206IDEsXG4gICAgc2hvd1Rvb2x0aXA6IDEsXG4gICAgYm9yZGVyQ29sb3I6IDEsXG4gICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgYm9yZGVyT3BhY2l0eTogMSxcbiAgICBzZWxlY3RlZFJlZ2lvbnM6IDEsXG4gICAgbXVsdGlTZWxlY3RSZWdpb246IDFcbiAgfTtcblxuICB2YXIgYXBpRXZlbnRzID0ge1xuICAgIG9uTGFiZWxTaG93OiAnbGFiZWxTaG93JyxcbiAgICBvbkxvYWQ6ICdsb2FkJyxcbiAgICBvblJlZ2lvbk92ZXI6ICdyZWdpb25Nb3VzZU92ZXInLFxuICAgIG9uUmVnaW9uT3V0OiAncmVnaW9uTW91c2VPdXQnLFxuICAgIG9uUmVnaW9uQ2xpY2s6ICdyZWdpb25DbGljaycsXG4gICAgb25SZWdpb25TZWxlY3Q6ICdyZWdpb25TZWxlY3QnLFxuICAgIG9uUmVnaW9uRGVzZWxlY3Q6ICdyZWdpb25EZXNlbGVjdCcsXG4gICAgb25SZXNpemU6ICdyZXNpemUnXG4gIH07XG5cbiAgalF1ZXJ5LmZuLnZlY3Rvck1hcCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICB2YXIgZGVmYXVsdFBhcmFtcyA9IHtcbiAgICAgIG1hcDogJ3dvcmxkX2VuJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhNWJmZGQnLFxuICAgICAgY29sb3I6ICcjZjRmM2YwJyxcbiAgICAgIGhvdmVyQ29sb3I6ICcjYzlkZmFmJyxcbiAgICAgIGhvdmVyQ29sb3JzOiB7fSxcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjYzlkZmFmJyxcbiAgICAgIHNjYWxlQ29sb3JzOiBbJyNiNmQ2ZmYnLCAnIzAwNWFjZSddLFxuICAgICAgbm9ybWFsaXplRnVuY3Rpb246ICdsaW5lYXInLFxuICAgICAgZW5hYmxlWm9vbTogdHJ1ZSxcbiAgICAgIHNob3dUb29sdGlwOiB0cnVlLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjODE4MTgxJyxcbiAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgYm9yZGVyT3BhY2l0eTogMC4yNSxcbiAgICAgIHNlbGVjdGVkUmVnaW9uczogbnVsbCxcbiAgICAgIG11bHRpU2VsZWN0UmVnaW9uOiBmYWxzZVxuICAgIH0sIG1hcCA9IHRoaXMuZGF0YSgnbWFwT2JqZWN0Jyk7XG5cbiAgICBpZiAob3B0aW9ucyA9PT0gJ2FkZE1hcCcpIHtcbiAgICAgIEpRVk1hcC5tYXBzW2FyZ3VtZW50c1sxXV0gPSBhcmd1bWVudHNbMl07XG4gICAgfSBlbHNlIGlmIChvcHRpb25zID09PSAnc2V0JyAmJiBhcGlQYXJhbXNbYXJndW1lbnRzWzFdXSkge1xuICAgICAgbWFwWydzZXQnICsgYXJndW1lbnRzWzFdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYXJndW1lbnRzWzFdLnN1YnN0cigxKV0uYXBwbHkobWFwLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyAmJlxuICAgICAgdHlwZW9mIG1hcFtvcHRpb25zXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG1hcFtvcHRpb25zXS5hcHBseShtYXAsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBqUXVlcnkuZXh0ZW5kKGRlZmF1bHRQYXJhbXMsIG9wdGlvbnMpO1xuICAgICAgZGVmYXVsdFBhcmFtcy5jb250YWluZXIgPSB0aGlzO1xuICAgICAgdGhpcy5jc3MoeyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH0pO1xuXG4gICAgICBtYXAgPSBuZXcgSlFWTWFwKGRlZmF1bHRQYXJhbXMpO1xuXG4gICAgICB0aGlzLmRhdGEoJ21hcE9iamVjdCcsIG1hcCk7XG5cbiAgICAgIHRoaXMudW5iaW5kKCcuanF2bWFwJyk7XG5cbiAgICAgIGZvciAodmFyIGUgaW4gYXBpRXZlbnRzKSB7XG4gICAgICAgIGlmIChkZWZhdWx0UGFyYW1zW2VdKSB7XG4gICAgICAgICAgdGhpcy5iaW5kKGFwaUV2ZW50c1tlXSArICcuanF2bWFwJywgZGVmYXVsdFBhcmFtc1tlXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGxvYWRFdmVudCA9IGpRdWVyeS5FdmVudCgnbG9hZC5qcXZtYXAnKTtcbiAgICAgIGpRdWVyeShkZWZhdWx0UGFyYW1zLmNvbnRhaW5lcikudHJpZ2dlcihsb2FkRXZlbnQsIG1hcCk7XG5cbiAgICAgIHJldHVybiBtYXA7XG4gICAgfVxuICB9O1xuXG59KShqUXVlcnkpO1xuXG5Db2xvclNjYWxlLmFycmF5VG9SZ2IgPSBmdW5jdGlvbiAoYXIpIHtcbiAgdmFyIHJnYiA9ICcjJztcbiAgdmFyIGQ7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXIubGVuZ3RoOyBpKyspIHtcbiAgICBkID0gYXJbaV0udG9TdHJpbmcoMTYpO1xuICAgIHJnYiArPSBkLmxlbmd0aCA9PT0gMSA/ICcwJyArIGQgOiBkO1xuICB9XG4gIHJldHVybiByZ2I7XG59O1xuXG5Db2xvclNjYWxlLnByb3RvdHlwZS5nZXRDb2xvciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHRoaXMubm9ybWFsaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFsdWUgPSB0aGlzLm5vcm1hbGl6ZSh2YWx1ZSk7XG4gIH1cblxuICB2YXIgbGVuZ3RoZXMgPSBbXTtcbiAgdmFyIGZ1bGxMZW5ndGggPSAwO1xuICB2YXIgbDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29sb3JzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGwgPSB0aGlzLnZlY3Rvckxlbmd0aCh0aGlzLnZlY3RvclN1YnRyYWN0KHRoaXMuY29sb3JzW2kgKyAxXSwgdGhpcy5jb2xvcnNbaV0pKTtcbiAgICBsZW5ndGhlcy5wdXNoKGwpO1xuICAgIGZ1bGxMZW5ndGggKz0gbDtcbiAgfVxuXG4gIHZhciBjID0gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSAvIGZ1bGxMZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGVuZ3RoZXNbaV0gKj0gYztcbiAgfVxuXG4gIGkgPSAwO1xuICB2YWx1ZSAtPSB0aGlzLm1pblZhbHVlO1xuXG4gIHdoaWxlICh2YWx1ZSAtIGxlbmd0aGVzW2ldID49IDApIHtcbiAgICB2YWx1ZSAtPSBsZW5ndGhlc1tpXTtcbiAgICBpKys7XG4gIH1cblxuICB2YXIgY29sb3I7XG4gIGlmIChpID09PSB0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSB7XG4gICAgY29sb3IgPSB0aGlzLnZlY3RvclRvTnVtKHRoaXMuY29sb3JzW2ldKS50b1N0cmluZygxNik7XG4gIH0gZWxzZSB7XG4gICAgY29sb3IgPSAodGhpcy52ZWN0b3JUb051bSh0aGlzLnZlY3RvckFkZCh0aGlzLmNvbG9yc1tpXSwgdGhpcy52ZWN0b3JNdWx0KHRoaXMudmVjdG9yU3VidHJhY3QodGhpcy5jb2xvcnNbaSArIDFdLCB0aGlzLmNvbG9yc1tpXSksICh2YWx1ZSkgLyAobGVuZ3RoZXNbaV0pKSkpKS50b1N0cmluZygxNik7XG4gIH1cblxuICB3aGlsZSAoY29sb3IubGVuZ3RoIDwgNikge1xuICAgIGNvbG9yID0gJzAnICsgY29sb3I7XG4gIH1cbiAgcmV0dXJuICcjJyArIGNvbG9yO1xufTtcblxuQ29sb3JTY2FsZS5yZ2JUb0FycmF5ID0gZnVuY3Rpb24gKHJnYikge1xuICByZ2IgPSByZ2Iuc3Vic3RyKDEpO1xuICByZXR1cm4gW3BhcnNlSW50KHJnYi5zdWJzdHIoMCwgMiksIDE2KSwgcGFyc2VJbnQocmdiLnN1YnN0cigyLCAyKSwgMTYpLCBwYXJzZUludChyZ2Iuc3Vic3RyKDQsIDIpLCAxNildO1xufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUuc2V0Q29sb3JzID0gZnVuY3Rpb24gKGNvbG9ycykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbG9yc1tpXSA9IENvbG9yU2NhbGUucmdiVG9BcnJheShjb2xvcnNbaV0pO1xuICB9XG4gIHRoaXMuY29sb3JzID0gY29sb3JzO1xufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUuc2V0TWF4ID0gZnVuY3Rpb24gKG1heCkge1xuICB0aGlzLmNsZWFyTWF4VmFsdWUgPSBtYXg7XG4gIGlmICh0eXBlb2YgdGhpcy5ub3JtYWxpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLm1heFZhbHVlID0gdGhpcy5ub3JtYWxpemUobWF4KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm1heFZhbHVlID0gbWF4O1xuICB9XG59O1xuXG5Db2xvclNjYWxlLnByb3RvdHlwZS5zZXRNaW4gPSBmdW5jdGlvbiAobWluKSB7XG4gIHRoaXMuY2xlYXJNaW5WYWx1ZSA9IG1pbjtcblxuICBpZiAodHlwZW9mIHRoaXMubm9ybWFsaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5taW5WYWx1ZSA9IHRoaXMubm9ybWFsaXplKG1pbik7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5taW5WYWx1ZSA9IG1pbjtcbiAgfVxufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUuc2V0Tm9ybWFsaXplRnVuY3Rpb24gPSBmdW5jdGlvbiAoZikge1xuICBpZiAoZiA9PT0gJ3BvbHlub21pYWwnKSB7XG4gICAgdGhpcy5ub3JtYWxpemUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBNYXRoLnBvdyh2YWx1ZSwgMC4yKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKGYgPT09ICdsaW5lYXInKSB7XG4gICAgZGVsZXRlIHRoaXMubm9ybWFsaXplO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubm9ybWFsaXplID0gZjtcbiAgfVxuICB0aGlzLnNldE1pbih0aGlzLmNsZWFyTWluVmFsdWUpO1xuICB0aGlzLnNldE1heCh0aGlzLmNsZWFyTWF4VmFsdWUpO1xufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUudmVjdG9yQWRkID0gZnVuY3Rpb24gKHZlY3RvcjEsIHZlY3RvcjIpIHtcbiAgdmFyIHZlY3RvciA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlY3RvcjEubGVuZ3RoOyBpKyspIHtcbiAgICB2ZWN0b3JbaV0gPSB2ZWN0b3IxW2ldICsgdmVjdG9yMltpXTtcbiAgfVxuICByZXR1cm4gdmVjdG9yO1xufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUudmVjdG9yTGVuZ3RoID0gZnVuY3Rpb24gKHZlY3Rvcikge1xuICB2YXIgcmVzdWx0ID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZWN0b3IubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHQgKz0gdmVjdG9yW2ldICogdmVjdG9yW2ldO1xuICB9XG4gIHJldHVybiBNYXRoLnNxcnQocmVzdWx0KTtcbn07XG5cbkNvbG9yU2NhbGUucHJvdG90eXBlLnZlY3Rvck11bHQgPSBmdW5jdGlvbiAodmVjdG9yLCBudW0pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlY3Rvci5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdFtpXSA9IHZlY3RvcltpXSAqIG51bTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUudmVjdG9yU3VidHJhY3QgPSBmdW5jdGlvbiAodmVjdG9yMSwgdmVjdG9yMikge1xuICB2YXIgdmVjdG9yID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmVjdG9yMS5sZW5ndGg7IGkrKykge1xuICAgIHZlY3RvcltpXSA9IHZlY3RvcjFbaV0gLSB2ZWN0b3IyW2ldO1xuICB9XG4gIHJldHVybiB2ZWN0b3I7XG59O1xuXG5Db2xvclNjYWxlLnByb3RvdHlwZS52ZWN0b3JUb051bSA9IGZ1bmN0aW9uICh2ZWN0b3IpIHtcbiAgdmFyIG51bSA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmVjdG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgbnVtICs9IE1hdGgucm91bmQodmVjdG9yW2ldKSAqIE1hdGgucG93KDI1NiwgdmVjdG9yLmxlbmd0aCAtIGkgLSAxKTtcbiAgfVxuICByZXR1cm4gbnVtO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5hcHBseVRyYW5zZm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1heFRyYW5zWCwgbWF4VHJhbnNZLCBtaW5UcmFuc1gsIG1pblRyYW5zWTtcbiAgaWYgKHRoaXMuZGVmYXVsdFdpZHRoICogdGhpcy5zY2FsZSA8PSB0aGlzLndpZHRoKSB7XG4gICAgbWF4VHJhbnNYID0gKHRoaXMud2lkdGggLSB0aGlzLmRlZmF1bHRXaWR0aCAqIHRoaXMuc2NhbGUpIC8gKDIgKiB0aGlzLnNjYWxlKTtcbiAgICBtaW5UcmFuc1ggPSAodGhpcy53aWR0aCAtIHRoaXMuZGVmYXVsdFdpZHRoICogdGhpcy5zY2FsZSkgLyAoMiAqIHRoaXMuc2NhbGUpO1xuICB9IGVsc2Uge1xuICAgIG1heFRyYW5zWCA9IDA7XG4gICAgbWluVHJhbnNYID0gKHRoaXMud2lkdGggLSB0aGlzLmRlZmF1bHRXaWR0aCAqIHRoaXMuc2NhbGUpIC8gdGhpcy5zY2FsZTtcbiAgfVxuXG4gIGlmICh0aGlzLmRlZmF1bHRIZWlnaHQgKiB0aGlzLnNjYWxlIDw9IHRoaXMuaGVpZ2h0KSB7XG4gICAgbWF4VHJhbnNZID0gKHRoaXMuaGVpZ2h0IC0gdGhpcy5kZWZhdWx0SGVpZ2h0ICogdGhpcy5zY2FsZSkgLyAoMiAqIHRoaXMuc2NhbGUpO1xuICAgIG1pblRyYW5zWSA9ICh0aGlzLmhlaWdodCAtIHRoaXMuZGVmYXVsdEhlaWdodCAqIHRoaXMuc2NhbGUpIC8gKDIgKiB0aGlzLnNjYWxlKTtcbiAgfSBlbHNlIHtcbiAgICBtYXhUcmFuc1kgPSAwO1xuICAgIG1pblRyYW5zWSA9ICh0aGlzLmhlaWdodCAtIHRoaXMuZGVmYXVsdEhlaWdodCAqIHRoaXMuc2NhbGUpIC8gdGhpcy5zY2FsZTtcbiAgfVxuXG4gIGlmICh0aGlzLnRyYW5zWSA+IG1heFRyYW5zWSkge1xuICAgIHRoaXMudHJhbnNZID0gbWF4VHJhbnNZO1xuICB9IGVsc2UgaWYgKHRoaXMudHJhbnNZIDwgbWluVHJhbnNZKSB7XG4gICAgdGhpcy50cmFuc1kgPSBtaW5UcmFuc1k7XG4gIH1cbiAgaWYgKHRoaXMudHJhbnNYID4gbWF4VHJhbnNYKSB7XG4gICAgdGhpcy50cmFuc1ggPSBtYXhUcmFuc1g7XG4gIH0gZWxzZSBpZiAodGhpcy50cmFuc1ggPCBtaW5UcmFuc1gpIHtcbiAgICB0aGlzLnRyYW5zWCA9IG1pblRyYW5zWDtcbiAgfVxuXG4gIHRoaXMuY2FudmFzLmFwcGx5VHJhbnNmb3JtUGFyYW1zKHRoaXMuc2NhbGUsIHRoaXMudHJhbnNYLCB0aGlzLnRyYW5zWSk7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLmJpbmRab29tQnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1hcCA9IHRoaXM7XG4gIHRoaXMuY29udGFpbmVyLmZpbmQoJy5qcXZtYXAtem9vbWluJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICBtYXAuem9vbUluKCk7XG4gIH0pO1xuICB0aGlzLmNvbnRhaW5lci5maW5kKCcuanF2bWFwLXpvb21vdXQnKS5jbGljayhmdW5jdGlvbigpe1xuICAgIG1hcC56b29tT3V0KCk7XG4gIH0pO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5kZXNlbGVjdCA9IGZ1bmN0aW9uIChjYywgcGF0aCkge1xuICBjYyA9IGNjLnRvTG93ZXJDYXNlKCk7XG4gIHBhdGggPSBwYXRoIHx8IGpRdWVyeSgnIycgKyB0aGlzLmdldENvdW50cnlJZChjYykpWzBdO1xuXG4gIGlmICh0aGlzLmlzU2VsZWN0ZWQoY2MpKSB7XG4gICAgdGhpcy5zZWxlY3RlZFJlZ2lvbnMuc3BsaWNlKHRoaXMuc2VsZWN0SW5kZXgoY2MpLCAxKTtcblxuICAgIGpRdWVyeSh0aGlzLmNvbnRhaW5lcikudHJpZ2dlcigncmVnaW9uRGVzZWxlY3QuanF2bWFwJywgW2NjXSk7XG4gICAgcGF0aC5jdXJyZW50RmlsbENvbG9yID0gcGF0aC5nZXRPcmlnaW5hbEZpbGwoKTtcbiAgICBwYXRoLnNldEZpbGwocGF0aC5nZXRPcmlnaW5hbEZpbGwoKSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuY291bnRyaWVzKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkUmVnaW9ucy5zcGxpY2UodGhpcy5zZWxlY3RlZFJlZ2lvbnMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgIHRoaXMuY291bnRyaWVzW2tleV0uY3VycmVudEZpbGxDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICB0aGlzLmNvdW50cmllc1trZXldLnNldEZpbGwodGhpcy5jb2xvcik7XG4gICAgfVxuICB9XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLmdldENvdW50cnlJZCA9IGZ1bmN0aW9uIChjYykge1xuICByZXR1cm4gJ2pxdm1hcCcgKyB0aGlzLmluZGV4ICsgJ18nICsgY2M7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLmdldFBpbiA9IGZ1bmN0aW9uKGNjKXtcbiAgdmFyIHBpbk9iaiA9IGpRdWVyeSgnIycgKyB0aGlzLmdldFBpbklkKGNjKSk7XG4gIHJldHVybiBwaW5PYmouaHRtbCgpO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5nZXRQaW5JZCA9IGZ1bmN0aW9uIChjYykge1xuICByZXR1cm4gdGhpcy5nZXRDb3VudHJ5SWQoY2MpICsgJ19waW4nO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5nZXRQaW5zID0gZnVuY3Rpb24oKXtcbiAgdmFyIHBpbnMgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcuanF2bWFwLXBpbicpO1xuICB2YXIgcmV0ID0ge307XG4gIGpRdWVyeS5lYWNoKHBpbnMsIGZ1bmN0aW9uKGluZGV4LCBwaW5PYmope1xuICAgIHBpbk9iaiA9IGpRdWVyeShwaW5PYmopO1xuICAgIHZhciBjYyA9IHBpbk9iai5hdHRyKCdmb3InKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBwaW5Db250ZW50ID0gcGluT2JqLmh0bWwoKTtcbiAgICByZXRbY2NdID0gcGluQ29udGVudDtcbiAgfSk7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXQpO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5oaWdobGlnaHQgPSBmdW5jdGlvbiAoY2MsIHBhdGgpIHtcbiAgcGF0aCA9IHBhdGggfHwgalF1ZXJ5KCcjJyArIHRoaXMuZ2V0Q291bnRyeUlkKGNjKSlbMF07XG4gIGlmICh0aGlzLmhvdmVyT3BhY2l0eSkge1xuICAgIHBhdGguc2V0T3BhY2l0eSh0aGlzLmhvdmVyT3BhY2l0eSk7XG4gIH0gZWxzZSBpZiAodGhpcy5ob3ZlckNvbG9ycyAmJiAoY2MgaW4gdGhpcy5ob3ZlckNvbG9ycykpIHtcbiAgICBwYXRoLmN1cnJlbnRGaWxsQ29sb3IgPSBwYXRoLmdldEZpbGwoKSArICcnO1xuICAgIHBhdGguc2V0RmlsbCh0aGlzLmhvdmVyQ29sb3JzW2NjXSk7XG4gIH0gZWxzZSBpZiAodGhpcy5ob3ZlckNvbG9yKSB7XG4gICAgcGF0aC5jdXJyZW50RmlsbENvbG9yID0gcGF0aC5nZXRGaWxsKCkgKyAnJztcbiAgICBwYXRoLnNldEZpbGwodGhpcy5ob3ZlckNvbG9yKTtcbiAgfVxufTtcblxuSlFWTWFwLnByb3RvdHlwZS5pc1NlbGVjdGVkID0gZnVuY3Rpb24oY2MpIHtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0SW5kZXgoY2MpID49IDA7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLm1ha2VEcmFnZ2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtb3VzZURvd24gPSBmYWxzZTtcbiAgdmFyIG9sZFBhZ2VYLCBvbGRQYWdlWTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHNlbGYuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgc2VsZi5pc01vdmluZ1RpbWVvdXQgPSBmYWxzZTtcblxuICB2YXIgbGFzdFRvdWNoQ291bnQ7XG4gIHZhciB0b3VjaENlbnRlclg7XG4gIHZhciB0b3VjaENlbnRlclk7XG4gIHZhciB0b3VjaFN0YXJ0RGlzdGFuY2U7XG4gIHZhciB0b3VjaFN0YXJ0U2NhbGU7XG4gIHZhciB0b3VjaFg7XG4gIHZhciB0b3VjaFk7XG5cbiAgdGhpcy5jb250YWluZXIubW91c2Vtb3ZlKGZ1bmN0aW9uIChlKSB7XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBzZWxmLnRyYW5zWCAtPSAob2xkUGFnZVggLSBlLnBhZ2VYKSAvIHNlbGYuc2NhbGU7XG4gICAgICBzZWxmLnRyYW5zWSAtPSAob2xkUGFnZVkgLSBlLnBhZ2VZKSAvIHNlbGYuc2NhbGU7XG5cbiAgICAgIHNlbGYuYXBwbHlUcmFuc2Zvcm0oKTtcblxuICAgICAgb2xkUGFnZVggPSBlLnBhZ2VYO1xuICAgICAgb2xkUGFnZVkgPSBlLnBhZ2VZO1xuXG4gICAgICBzZWxmLmlzTW92aW5nID0gdHJ1ZTtcbiAgICAgIGlmIChzZWxmLmlzTW92aW5nVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5pc01vdmluZ1RpbWVvdXQpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLmNvbnRhaW5lci50cmlnZ2VyKCdkcmFnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH0pLm1vdXNlZG93bihmdW5jdGlvbiAoZSkge1xuXG4gICAgbW91c2VEb3duID0gdHJ1ZTtcbiAgICBvbGRQYWdlWCA9IGUucGFnZVg7XG4gICAgb2xkUGFnZVkgPSBlLnBhZ2VZO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH0pLm1vdXNldXAoZnVuY3Rpb24gKCkge1xuXG4gICAgbW91c2VEb3duID0gZmFsc2U7XG5cbiAgICBjbGVhclRpbWVvdXQoc2VsZi5pc01vdmluZ1RpbWVvdXQpO1xuICAgIHNlbGYuaXNNb3ZpbmdUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLmlzTW92aW5nID0gZmFsc2U7XG4gICAgfSwgMTAwKTtcblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9KS5tb3VzZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICBpZihtb3VzZURvd24gJiYgc2VsZi5pc01vdmluZyl7XG5cbiAgICAgIGNsZWFyVGltZW91dChzZWxmLmlzTW92aW5nVGltZW91dCk7XG4gICAgICBzZWxmLmlzTW92aW5nVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBtb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgc2VsZi5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgfSwgMTAwKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgalF1ZXJ5KHRoaXMuY29udGFpbmVyKS5iaW5kKCd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgdmFyIG9mZnNldDtcbiAgICB2YXIgc2NhbGU7XG4gICAgdmFyIHRvdWNoZXMgPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlcztcbiAgICB2YXIgdHJhbnNmb3JtWE9sZDtcbiAgICB2YXIgdHJhbnNmb3JtWU9sZDtcblxuICAgIGlmICh0b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaWYgKGxhc3RUb3VjaENvdW50ID09PSAxKSB7XG5cbiAgICAgICAgaWYodG91Y2hYID09PSB0b3VjaGVzWzBdLnBhZ2VYICYmIHRvdWNoWSA9PT0gdG91Y2hlc1swXS5wYWdlWSl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJhbnNmb3JtWE9sZCA9IHNlbGYudHJhbnNYO1xuICAgICAgICB0cmFuc2Zvcm1ZT2xkID0gc2VsZi50cmFuc1k7XG5cbiAgICAgICAgc2VsZi50cmFuc1ggLT0gKHRvdWNoWCAtIHRvdWNoZXNbMF0ucGFnZVgpIC8gc2VsZi5zY2FsZTtcbiAgICAgICAgc2VsZi50cmFuc1kgLT0gKHRvdWNoWSAtIHRvdWNoZXNbMF0ucGFnZVkpIC8gc2VsZi5zY2FsZTtcblxuICAgICAgICBzZWxmLmFwcGx5VHJhbnNmb3JtKCk7XG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybVhPbGQgIT09IHNlbGYudHJhbnNYIHx8IHRyYW5zZm9ybVlPbGQgIT09IHNlbGYudHJhbnNZKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5pc01vdmluZyA9IHRydWU7XG4gICAgICAgIGlmIChzZWxmLmlzTW92aW5nVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLmlzTW92aW5nVGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdG91Y2hYID0gdG91Y2hlc1swXS5wYWdlWDtcbiAgICAgIHRvdWNoWSA9IHRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgICB9IGVsc2UgaWYgKHRvdWNoZXMubGVuZ3RoID09PSAyKSB7XG5cbiAgICAgIGlmIChsYXN0VG91Y2hDb3VudCA9PT0gMikge1xuICAgICAgICBzY2FsZSA9IE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KHRvdWNoZXNbMF0ucGFnZVggLSB0b3VjaGVzWzFdLnBhZ2VYLCAyKSArXG4gICAgICAgICAgICBNYXRoLnBvdyh0b3VjaGVzWzBdLnBhZ2VZIC0gdG91Y2hlc1sxXS5wYWdlWSwgMilcbiAgICAgICAgICApIC8gdG91Y2hTdGFydERpc3RhbmNlO1xuXG4gICAgICAgIHNlbGYuc2V0U2NhbGUoXG4gICAgICAgICAgdG91Y2hTdGFydFNjYWxlICogc2NhbGUsXG4gICAgICAgICAgdG91Y2hDZW50ZXJYLFxuICAgICAgICAgIHRvdWNoQ2VudGVyWVxuICAgICAgICApO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBvZmZzZXQgPSBqUXVlcnkoc2VsZi5jb250YWluZXIpLm9mZnNldCgpO1xuICAgICAgICBpZiAodG91Y2hlc1swXS5wYWdlWCA+IHRvdWNoZXNbMV0ucGFnZVgpIHtcbiAgICAgICAgICB0b3VjaENlbnRlclggPSB0b3VjaGVzWzFdLnBhZ2VYICsgKHRvdWNoZXNbMF0ucGFnZVggLSB0b3VjaGVzWzFdLnBhZ2VYKSAvIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG91Y2hDZW50ZXJYID0gdG91Y2hlc1swXS5wYWdlWCArICh0b3VjaGVzWzFdLnBhZ2VYIC0gdG91Y2hlc1swXS5wYWdlWCkgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvdWNoZXNbMF0ucGFnZVkgPiB0b3VjaGVzWzFdLnBhZ2VZKSB7XG4gICAgICAgICAgdG91Y2hDZW50ZXJZID0gdG91Y2hlc1sxXS5wYWdlWSArICh0b3VjaGVzWzBdLnBhZ2VZIC0gdG91Y2hlc1sxXS5wYWdlWSkgLyAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvdWNoQ2VudGVyWSA9IHRvdWNoZXNbMF0ucGFnZVkgKyAodG91Y2hlc1sxXS5wYWdlWSAtIHRvdWNoZXNbMF0ucGFnZVkpIC8gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvdWNoQ2VudGVyWCAtPSBvZmZzZXQubGVmdDtcbiAgICAgICAgdG91Y2hDZW50ZXJZIC09IG9mZnNldC50b3A7XG4gICAgICAgIHRvdWNoU3RhcnRTY2FsZSA9IHNlbGYuc2NhbGU7XG5cbiAgICAgICAgdG91Y2hTdGFydERpc3RhbmNlID0gTWF0aC5zcXJ0KFxuICAgICAgICAgIE1hdGgucG93KHRvdWNoZXNbMF0ucGFnZVggLSB0b3VjaGVzWzFdLnBhZ2VYLCAyKSArXG4gICAgICAgICAgTWF0aC5wb3codG91Y2hlc1swXS5wYWdlWSAtIHRvdWNoZXNbMV0ucGFnZVksIDIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdFRvdWNoQ291bnQgPSB0b3VjaGVzLmxlbmd0aDtcbiAgfSk7XG5cbiAgalF1ZXJ5KHRoaXMuY29udGFpbmVyKS5iaW5kKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgIGxhc3RUb3VjaENvdW50ID0gMDtcbiAgfSk7XG5cbiAgalF1ZXJ5KHRoaXMuY29udGFpbmVyKS5iaW5kKCd0b3VjaGVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBsYXN0VG91Y2hDb3VudCA9IDA7XG4gIH0pO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5wbGFjZVBpbnMgPSBmdW5jdGlvbihwaW5zLCBwaW5Nb2RlKXtcbiAgdmFyIG1hcCA9IHRoaXM7XG5cbiAgaWYoIXBpbk1vZGUgfHwgKHBpbk1vZGUgIT09ICdjb250ZW50JyAmJiBwaW5Nb2RlICE9PSAnaWQnKSkge1xuICAgIHBpbk1vZGUgPSAnY29udGVudCc7XG4gIH1cblxuICBpZihwaW5Nb2RlID09PSAnY29udGVudCcpIHsvL3RyZWF0IHBpbiBhcyBjb250ZW50XG4gICAgalF1ZXJ5LmVhY2gocGlucywgZnVuY3Rpb24oaW5kZXgsIHBpbil7XG4gICAgICBpZihqUXVlcnkoJyMnICsgbWFwLmdldENvdW50cnlJZChpbmRleCkpLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHBpbkluZGV4ID0gbWFwLmdldFBpbklkKGluZGV4KTtcbiAgICAgIHZhciAkcGluID0galF1ZXJ5KCcjJyArIHBpbkluZGV4KTtcbiAgICAgIGlmKCRwaW4ubGVuZ3RoID4gMCl7XG4gICAgICAgICRwaW4ucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBtYXAuY29udGFpbmVyLmFwcGVuZCgnPGRpdiBpZD1cIicgKyBwaW5JbmRleCArICdcIiBmb3I9XCInICsgaW5kZXggKyAnXCIgY2xhc3M9XCJqcXZtYXAtcGluXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZVwiPicgKyBwaW4gKyAnPC9kaXY+Jyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7IC8vdHJlYXQgcGluIGFzIGlkIG9mIGFuIGh0bWwgY29udGVudFxuICAgIGpRdWVyeS5lYWNoKHBpbnMsIGZ1bmN0aW9uKGluZGV4LCBwaW4pe1xuICAgICAgaWYoalF1ZXJ5KCcjJyArIG1hcC5nZXRDb3VudHJ5SWQoaW5kZXgpKS5sZW5ndGggPT09IDApe1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcGluSW5kZXggPSBtYXAuZ2V0UGluSWQoaW5kZXgpO1xuICAgICAgdmFyICRwaW4gPSBqUXVlcnkoJyMnICsgcGluSW5kZXgpO1xuICAgICAgaWYoJHBpbi5sZW5ndGggPiAwKXtcbiAgICAgICAgJHBpbi5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIG1hcC5jb250YWluZXIuYXBwZW5kKCc8ZGl2IGlkPVwiJyArIHBpbkluZGV4ICsgJ1wiIGZvcj1cIicgKyBpbmRleCArICdcIiBjbGFzcz1cImpxdm1hcC1waW5cIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlXCI+PC9kaXY+Jyk7XG4gICAgICAkcGluLmFwcGVuZChqUXVlcnkoJyMnICsgcGluKSk7XG4gICAgfSk7XG4gIH1cblxuICB0aGlzLnBvc2l0aW9uUGlucygpO1xuICBpZighdGhpcy5waW5IYW5kbGVycyl7XG4gICAgdGhpcy5waW5IYW5kbGVycyA9IHRydWU7XG4gICAgdmFyIHBvc2l0aW9uRml4ID0gZnVuY3Rpb24oKXtcbiAgICAgIG1hcC5wb3NpdGlvblBpbnMoKTtcbiAgICB9O1xuICAgIHRoaXMuY29udGFpbmVyLmJpbmQoJ3pvb21JbicsIHBvc2l0aW9uRml4KVxuICAgICAgLmJpbmQoJ3pvb21PdXQnLCBwb3NpdGlvbkZpeClcbiAgICAgIC5iaW5kKCdkcmFnJywgcG9zaXRpb25GaXgpO1xuICB9XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnBvc2l0aW9uUGlucyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBtYXAgPSB0aGlzO1xuICB2YXIgcGlucyA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5qcXZtYXAtcGluJyk7XG4gIGpRdWVyeS5lYWNoKHBpbnMsIGZ1bmN0aW9uKGluZGV4LCBwaW5PYmope1xuICAgIHBpbk9iaiA9IGpRdWVyeShwaW5PYmopO1xuICAgIHZhciBjb3VudHJ5SWQgPSBtYXAuZ2V0Q291bnRyeUlkKHBpbk9iai5hdHRyKCdmb3InKS50b0xvd2VyQ2FzZSgpKTtcbiAgICB2YXIgY291bnRyeU9iaiA9IGpRdWVyeSgnIycgKyBjb3VudHJ5SWQpO1xuICAgIHZhciBiYm94ID0gY291bnRyeU9ialswXS5nZXRCQm94KCk7XG5cbiAgICB2YXIgc2NhbGUgPSBtYXAuc2NhbGU7XG4gICAgdmFyIHJvb3RDb29yZHMgPSBtYXAuY2FudmFzLnJvb3RHcm91cC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgbWFwQ29vcmRzID0gbWFwLmNvbnRhaW5lclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgY29vcmRzID0ge1xuICAgICAgbGVmdDogcm9vdENvb3Jkcy5sZWZ0IC0gbWFwQ29vcmRzLmxlZnQsXG4gICAgICB0b3A6IHJvb3RDb29yZHMudG9wIC0gbWFwQ29vcmRzLnRvcFxuICAgIH07XG5cbiAgICB2YXIgbWlkZGxlWCA9IChiYm94LnggKiBzY2FsZSkgKyAoKGJib3gud2lkdGggKiBzY2FsZSkgLyAyKTtcbiAgICB2YXIgbWlkZGxlWSA9IChiYm94LnkgKiBzY2FsZSkgKyAoKGJib3guaGVpZ2h0ICogc2NhbGUpIC8gMik7XG5cbiAgICBwaW5PYmouY3NzKHtcbiAgICAgIGxlZnQ6IGNvb3Jkcy5sZWZ0ICsgbWlkZGxlWCAtIChwaW5PYmoud2lkdGgoKSAvIDIpLFxuICAgICAgdG9wOiBjb29yZHMudG9wICsgbWlkZGxlWSAtIChwaW5PYmouaGVpZ2h0KCkgLyAyKVxuICAgIH0pO1xuICB9KTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUucmVtb3ZlUGluID0gZnVuY3Rpb24oY2MpIHtcbiAgY2MgPSBjYy50b0xvd2VyQ2FzZSgpO1xuICBqUXVlcnkoJyMnICsgdGhpcy5nZXRQaW5JZChjYykpLnJlbW92ZSgpO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5yZW1vdmVQaW5zID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5jb250YWluZXIuZmluZCgnLmpxdm1hcC1waW4nKS5yZW1vdmUoKTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGtleSBpbiB0aGlzLmNvdW50cmllcykge1xuICAgIHRoaXMuY291bnRyaWVzW2tleV0uc2V0RmlsbCh0aGlzLmNvbG9yKTtcbiAgfVxuICB0aGlzLnNjYWxlID0gdGhpcy5iYXNlU2NhbGU7XG4gIHRoaXMudHJhbnNYID0gdGhpcy5iYXNlVHJhbnNYO1xuICB0aGlzLnRyYW5zWSA9IHRoaXMuYmFzZVRyYW5zWTtcbiAgdGhpcy5hcHBseVRyYW5zZm9ybSgpO1xuICB0aGlzLnpvb21DdXJTdGVwID0gMTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY3VyQmFzZVNjYWxlID0gdGhpcy5iYXNlU2NhbGU7XG4gIGlmICh0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQgPiB0aGlzLmRlZmF1bHRXaWR0aCAvIHRoaXMuZGVmYXVsdEhlaWdodCkge1xuICAgIHRoaXMuYmFzZVNjYWxlID0gdGhpcy5oZWlnaHQgLyB0aGlzLmRlZmF1bHRIZWlnaHQ7XG4gICAgdGhpcy5iYXNlVHJhbnNYID0gTWF0aC5hYnModGhpcy53aWR0aCAtIHRoaXMuZGVmYXVsdFdpZHRoICogdGhpcy5iYXNlU2NhbGUpIC8gKDIgKiB0aGlzLmJhc2VTY2FsZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5iYXNlU2NhbGUgPSB0aGlzLndpZHRoIC8gdGhpcy5kZWZhdWx0V2lkdGg7XG4gICAgdGhpcy5iYXNlVHJhbnNZID0gTWF0aC5hYnModGhpcy5oZWlnaHQgLSB0aGlzLmRlZmF1bHRIZWlnaHQgKiB0aGlzLmJhc2VTY2FsZSkgLyAoMiAqIHRoaXMuYmFzZVNjYWxlKTtcbiAgfVxuICB0aGlzLnNjYWxlICo9IHRoaXMuYmFzZVNjYWxlIC8gY3VyQmFzZVNjYWxlO1xuICB0aGlzLnRyYW5zWCAqPSB0aGlzLmJhc2VTY2FsZSAvIGN1ckJhc2VTY2FsZTtcbiAgdGhpcy50cmFuc1kgKj0gdGhpcy5iYXNlU2NhbGUgLyBjdXJCYXNlU2NhbGU7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChjYywgcGF0aCkge1xuICBjYyA9IGNjLnRvTG93ZXJDYXNlKCk7XG4gIHBhdGggPSBwYXRoIHx8IGpRdWVyeSgnIycgKyB0aGlzLmdldENvdW50cnlJZChjYykpWzBdO1xuXG4gIGlmICghdGhpcy5pc1NlbGVjdGVkKGNjKSkge1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0UmVnaW9uKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkUmVnaW9ucy5wdXNoKGNjKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZFJlZ2lvbnMgPSBbY2NdO1xuICAgIH1cblxuICAgIGpRdWVyeSh0aGlzLmNvbnRhaW5lcikudHJpZ2dlcigncmVnaW9uU2VsZWN0Lmpxdm1hcCcsIFtjY10pO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkQ29sb3IgJiYgcGF0aCkge1xuICAgICAgcGF0aC5jdXJyZW50RmlsbENvbG9yID0gdGhpcy5zZWxlY3RlZENvbG9yO1xuICAgICAgcGF0aC5zZXRGaWxsKHRoaXMuc2VsZWN0ZWRDb2xvcik7XG4gICAgfVxuICB9XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnNlbGVjdEluZGV4ID0gZnVuY3Rpb24gKGNjKSB7XG4gIGNjID0gY2MudG9Mb3dlckNhc2UoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkUmVnaW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjYyA9PT0gdGhpcy5zZWxlY3RlZFJlZ2lvbnNbaV0pIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnNldEJhY2tncm91bmRDb2xvciA9IGZ1bmN0aW9uIChiYWNrZ3JvdW5kQ29sb3IpIHtcbiAgdGhpcy5jb250YWluZXIuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgYmFja2dyb3VuZENvbG9yKTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuc2V0Q29sb3JzID0gZnVuY3Rpb24gKGtleSwgY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhpcy5jb3VudHJpZXNba2V5XS5zZXRGaWxsKGNvbG9yKTtcbiAgICB0aGlzLmNvdW50cmllc1trZXldLnNldEF0dHJpYnV0ZSgnb3JpZ2luYWwnLCBjb2xvcik7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNvbG9ycyA9IGtleTtcblxuICAgIGZvciAodmFyIGNvZGUgaW4gY29sb3JzKSB7XG4gICAgICBpZiAodGhpcy5jb3VudHJpZXNbY29kZV0pIHtcbiAgICAgICAgdGhpcy5jb3VudHJpZXNbY29kZV0uc2V0RmlsbChjb2xvcnNbY29kZV0pO1xuICAgICAgICB0aGlzLmNvdW50cmllc1tjb2RlXS5zZXRBdHRyaWJ1dGUoJ29yaWdpbmFsJywgY29sb3JzW2NvZGVdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuc2V0Tm9ybWFsaXplRnVuY3Rpb24gPSBmdW5jdGlvbiAoZikge1xuICB0aGlzLmNvbG9yU2NhbGUuc2V0Tm9ybWFsaXplRnVuY3Rpb24oZik7XG5cbiAgaWYgKHRoaXMudmFsdWVzKSB7XG4gICAgdGhpcy5zZXRWYWx1ZXModGhpcy52YWx1ZXMpO1xuICB9XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnNldFNjYWxlID0gZnVuY3Rpb24gKHNjYWxlKSB7XG4gIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgdGhpcy5hcHBseVRyYW5zZm9ybSgpO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5zZXRTY2FsZUNvbG9ycyA9IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgdGhpcy5jb2xvclNjYWxlLnNldENvbG9ycyhjb2xvcnMpO1xuXG4gIGlmICh0aGlzLnZhbHVlcykge1xuICAgIHRoaXMuc2V0VmFsdWVzKHRoaXMudmFsdWVzKTtcbiAgfVxufTtcblxuSlFWTWFwLnByb3RvdHlwZS5zZXRWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gIHZhciBtYXggPSAwLFxuICAgIG1pbiA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgdmFsO1xuXG4gIGZvciAodmFyIGNjIGluIHZhbHVlcykge1xuICAgIGNjID0gY2MudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSBwYXJzZUZsb2F0KHZhbHVlc1tjY10pO1xuXG4gICAgaWYgKGlzTmFOKHZhbCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAodmFsID4gbWF4KSB7XG4gICAgICBtYXggPSB2YWx1ZXNbY2NdO1xuICAgIH1cbiAgICBpZiAodmFsIDwgbWluKSB7XG4gICAgICBtaW4gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1pbiA9PT0gbWF4KSB7XG4gICAgbWF4Kys7XG4gIH1cblxuICB0aGlzLmNvbG9yU2NhbGUuc2V0TWluKG1pbik7XG4gIHRoaXMuY29sb3JTY2FsZS5zZXRNYXgobWF4KTtcblxuICB2YXIgY29sb3JzID0ge307XG4gIGZvciAoY2MgaW4gdmFsdWVzKSB7XG4gICAgY2MgPSBjYy50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHBhcnNlRmxvYXQodmFsdWVzW2NjXSk7XG4gICAgY29sb3JzW2NjXSA9IGlzTmFOKHZhbCkgPyB0aGlzLmNvbG9yIDogdGhpcy5jb2xvclNjYWxlLmdldENvbG9yKHZhbCk7XG4gIH1cbiAgdGhpcy5zZXRDb2xvcnMoY29sb3JzKTtcbiAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnVuaGlnaGxpZ2h0ID0gZnVuY3Rpb24gKGNjLCBwYXRoKSB7XG4gIGNjID0gY2MudG9Mb3dlckNhc2UoKTtcbiAgcGF0aCA9IHBhdGggfHwgalF1ZXJ5KCcjJyArIHRoaXMuZ2V0Q291bnRyeUlkKGNjKSlbMF07XG4gIHBhdGguc2V0T3BhY2l0eSgxKTtcbiAgaWYgKHBhdGguY3VycmVudEZpbGxDb2xvcikge1xuICAgIHBhdGguc2V0RmlsbChwYXRoLmN1cnJlbnRGaWxsQ29sb3IpO1xuICB9XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnpvb21JbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1hcCA9IHRoaXM7XG4gIHZhciBzbGlkZXJEZWx0YSA9IChqUXVlcnkoJyN6b29tJykuaW5uZXJIZWlnaHQoKSAtIDYgKiAyIC0gMTUgKiAyIC0gMyAqIDIgLSA3IC0gNikgLyAodGhpcy56b29tTWF4U3RlcCAtIHRoaXMuem9vbUN1clN0ZXApO1xuXG4gIGlmIChtYXAuem9vbUN1clN0ZXAgPCBtYXAuem9vbU1heFN0ZXApIHtcbiAgICBtYXAudHJhbnNYIC09IChtYXAud2lkdGggLyBtYXAuc2NhbGUgLSBtYXAud2lkdGggLyAobWFwLnNjYWxlICogbWFwLnpvb21TdGVwKSkgLyAyO1xuICAgIG1hcC50cmFuc1kgLT0gKG1hcC5oZWlnaHQgLyBtYXAuc2NhbGUgLSBtYXAuaGVpZ2h0IC8gKG1hcC5zY2FsZSAqIG1hcC56b29tU3RlcCkpIC8gMjtcbiAgICBtYXAuc2V0U2NhbGUobWFwLnNjYWxlICogbWFwLnpvb21TdGVwKTtcbiAgICBtYXAuem9vbUN1clN0ZXArKztcblxuICAgIHZhciAkc2xpZGVyID0galF1ZXJ5KCcjem9vbVNsaWRlcicpO1xuXG4gICAgJHNsaWRlci5jc3MoJ3RvcCcsIHBhcnNlSW50KCRzbGlkZXIuY3NzKCd0b3AnKSwgMTApIC0gc2xpZGVyRGVsdGEpO1xuXG4gICAgbWFwLmNvbnRhaW5lci50cmlnZ2VyKCd6b29tSW4nKTtcbiAgfVxufTtcblxuSlFWTWFwLnByb3RvdHlwZS56b29tT3V0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbWFwID0gdGhpcztcbiAgdmFyIHNsaWRlckRlbHRhID0gKGpRdWVyeSgnI3pvb20nKS5pbm5lckhlaWdodCgpIC0gNiAqIDIgLSAxNSAqIDIgLSAzICogMiAtIDcgLSA2KSAvICh0aGlzLnpvb21NYXhTdGVwIC0gdGhpcy56b29tQ3VyU3RlcCk7XG5cbiAgaWYgKG1hcC56b29tQ3VyU3RlcCA+IDEpIHtcbiAgICBtYXAudHJhbnNYICs9IChtYXAud2lkdGggLyAobWFwLnNjYWxlIC8gbWFwLnpvb21TdGVwKSAtIG1hcC53aWR0aCAvIG1hcC5zY2FsZSkgLyAyO1xuICAgIG1hcC50cmFuc1kgKz0gKG1hcC5oZWlnaHQgLyAobWFwLnNjYWxlIC8gbWFwLnpvb21TdGVwKSAtIG1hcC5oZWlnaHQgLyBtYXAuc2NhbGUpIC8gMjtcbiAgICBtYXAuc2V0U2NhbGUobWFwLnNjYWxlIC8gbWFwLnpvb21TdGVwKTtcbiAgICBtYXAuem9vbUN1clN0ZXAtLTtcblxuICAgIHZhciAkc2xpZGVyID0galF1ZXJ5KCcjem9vbVNsaWRlcicpO1xuXG4gICAgJHNsaWRlci5jc3MoJ3RvcCcsIHBhcnNlSW50KCRzbGlkZXIuY3NzKCd0b3AnKSwgMTApICsgc2xpZGVyRGVsdGEpO1xuXG4gICAgbWFwLmNvbnRhaW5lci50cmlnZ2VyKCd6b29tT3V0Jyk7XG4gIH1cbn07XG5cblZlY3RvckNhbnZhcy5wcm90b3R5cGUuYXBwbHlUcmFuc2Zvcm1QYXJhbXMgPSBmdW5jdGlvbiAoc2NhbGUsIHRyYW5zWCwgdHJhbnNZKSB7XG4gIGlmICh0aGlzLm1vZGUgPT09ICdzdmcnKSB7XG4gICAgdGhpcy5yb290R3JvdXAuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCAnc2NhbGUoJyArIHNjYWxlICsgJykgdHJhbnNsYXRlKCcgKyB0cmFuc1ggKyAnLCAnICsgdHJhbnNZICsgJyknKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJvb3RHcm91cC5jb29yZG9yaWdpbiA9ICh0aGlzLndpZHRoIC0gdHJhbnNYKSArICcsJyArICh0aGlzLmhlaWdodCAtIHRyYW5zWSk7XG4gICAgdGhpcy5yb290R3JvdXAuY29vcmRzaXplID0gdGhpcy53aWR0aCAvIHNjYWxlICsgJywnICsgdGhpcy5oZWlnaHQgLyBzY2FsZTtcbiAgfVxufTtcblxuVmVjdG9yQ2FudmFzLnByb3RvdHlwZS5jcmVhdGVHcm91cCA9IGZ1bmN0aW9uIChpc1Jvb3QpIHtcbiAgdmFyIG5vZGU7XG4gIGlmICh0aGlzLm1vZGUgPT09ICdzdmcnKSB7XG4gICAgbm9kZSA9IHRoaXMuY3JlYXRlU3ZnTm9kZSgnZycpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUgPSB0aGlzLmNyZWF0ZVZtbE5vZGUoJ2dyb3VwJyk7XG4gICAgbm9kZS5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xuICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuICAgIG5vZGUuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgIG5vZGUuc3R5bGUudG9wID0gJzBweCc7XG4gICAgbm9kZS5jb29yZG9yaWdpbiA9ICcwIDAnO1xuICAgIG5vZGUuY29vcmRzaXplID0gdGhpcy53aWR0aCArICcgJyArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKGlzUm9vdCkge1xuICAgIHRoaXMucm9vdEdyb3VwID0gbm9kZTtcbiAgfVxuICByZXR1cm4gbm9kZTtcbn07XG5cblZlY3RvckNhbnZhcy5wcm90b3R5cGUuY3JlYXRlUGF0aCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdmFyIG5vZGU7XG4gIGlmICh0aGlzLm1vZGUgPT09ICdzdmcnKSB7XG4gICAgbm9kZSA9IHRoaXMuY3JlYXRlU3ZnTm9kZSgncGF0aCcpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKCdkJywgY29uZmlnLnBhdGgpO1xuXG4gICAgaWYgKHRoaXMucGFyYW1zLmJvcmRlckNvbG9yICE9PSBudWxsKSB7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5wYXJhbXMuYm9yZGVyQ29sb3IpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJhbXMuYm9yZGVyV2lkdGggPiAwKSB7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgdGhpcy5wYXJhbXMuYm9yZGVyV2lkdGgpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhcmFtcy5ib3JkZXJPcGFjaXR5ID4gMCkge1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1vcGFjaXR5JywgdGhpcy5wYXJhbXMuYm9yZGVyT3BhY2l0eSk7XG4gICAgfVxuXG4gICAgbm9kZS5zZXRGaWxsID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGNvbG9yKTtcbiAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnb3JpZ2luYWwnKSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnb3JpZ2luYWwnLCBjb2xvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG5vZGUuZ2V0RmlsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZmlsbCcpO1xuICAgIH07XG5cbiAgICBub2RlLmdldE9yaWdpbmFsRmlsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnb3JpZ2luYWwnKTtcbiAgICB9O1xuXG4gICAgbm9kZS5zZXRPcGFjaXR5ID0gZnVuY3Rpb24gKG9wYWNpdHkpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmaWxsLW9wYWNpdHknLCBvcGFjaXR5KTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG5vZGUgPSB0aGlzLmNyZWF0ZVZtbE5vZGUoJ3NoYXBlJyk7XG4gICAgbm9kZS5jb29yZG9yaWdpbiA9ICcwIDAnO1xuICAgIG5vZGUuY29vcmRzaXplID0gdGhpcy53aWR0aCArICcgJyArIHRoaXMuaGVpZ2h0O1xuICAgIG5vZGUuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICBub2RlLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICBub2RlLmZpbGxjb2xvciA9IEpRVk1hcC5kZWZhdWx0RmlsbENvbG9yO1xuICAgIG5vZGUuc3Ryb2tlZCA9IGZhbHNlO1xuICAgIG5vZGUucGF0aCA9IFZlY3RvckNhbnZhcy5wYXRoU3ZnVG9WbWwoY29uZmlnLnBhdGgpO1xuXG4gICAgdmFyIHNjYWxlID0gdGhpcy5jcmVhdGVWbWxOb2RlKCdza2V3Jyk7XG4gICAgc2NhbGUub24gPSB0cnVlO1xuICAgIHNjYWxlLm1hdHJpeCA9ICcwLjAxLDAsMCwwLjAxLDAsMCc7XG4gICAgc2NhbGUub2Zmc2V0ID0gJzAsMCc7XG5cbiAgICBub2RlLmFwcGVuZENoaWxkKHNjYWxlKTtcblxuICAgIHZhciBmaWxsID0gdGhpcy5jcmVhdGVWbWxOb2RlKCdmaWxsJyk7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChmaWxsKTtcblxuICAgIG5vZGUuc2V0RmlsbCA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmlsbCcpWzBdLmNvbG9yID0gY29sb3I7XG4gICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ29yaWdpbmFsJykgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ29yaWdpbmFsJywgY29sb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBub2RlLmdldEZpbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmlsbCcpWzBdLmNvbG9yO1xuICAgIH07XG4gICAgbm9kZS5nZXRPcmlnaW5hbEZpbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ29yaWdpbmFsJyk7XG4gICAgfTtcbiAgICBub2RlLnNldE9wYWNpdHkgPSBmdW5jdGlvbiAob3BhY2l0eSkge1xuICAgICAgdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmlsbCcpWzBdLm9wYWNpdHkgPSBwYXJzZUludChvcGFjaXR5ICogMTAwLCAxMCkgKyAnJSc7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gbm9kZTtcbn07XG5cblZlY3RvckNhbnZhcy5wcm90b3R5cGUucGF0aFN2Z1RvVm1sID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgY3ggPSAwLCBjeSA9IDAsIGN0cmx4LCBjdHJseTtcblxuICByZXR1cm4gcGF0aC5yZXBsYWNlKC8oW01tTGxIaFZ2Q2NTc10pKCg/Oi0/KD86XFxkKyk/KD86XFwuXFxkKyk/LD9cXHM/KSspL2csIGZ1bmN0aW9uIChzZWdtZW50LCBsZXR0ZXIsIGNvb3Jkcykge1xuICAgIGNvb3JkcyA9IGNvb3Jkcy5yZXBsYWNlKC8oXFxkKS0vZywgJyQxLC0nKS5yZXBsYWNlKC9cXHMrL2csICcsJykuc3BsaXQoJywnKTtcbiAgICBpZiAoIWNvb3Jkc1swXSkge1xuICAgICAgY29vcmRzLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjb29yZHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb29yZHNbaV0gPSBNYXRoLnJvdW5kKDEwMCAqIGNvb3Jkc1tpXSk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChsZXR0ZXIpIHtcbiAgICAgIGNhc2UgJ20nOlxuICAgICAgICBjeCArPSBjb29yZHNbMF07XG4gICAgICAgIGN5ICs9IGNvb3Jkc1sxXTtcbiAgICAgICAgcmVzdWx0ID0gJ3QnICsgY29vcmRzLmpvaW4oJywnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ00nOlxuICAgICAgICBjeCA9IGNvb3Jkc1swXTtcbiAgICAgICAgY3kgPSBjb29yZHNbMV07XG4gICAgICAgIHJlc3VsdCA9ICdtJyArIGNvb3Jkcy5qb2luKCcsJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdsJzpcbiAgICAgICAgY3ggKz0gY29vcmRzWzBdO1xuICAgICAgICBjeSArPSBjb29yZHNbMV07XG4gICAgICAgIHJlc3VsdCA9ICdyJyArIGNvb3Jkcy5qb2luKCcsJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgY3ggPSBjb29yZHNbMF07XG4gICAgICAgIGN5ID0gY29vcmRzWzFdO1xuICAgICAgICByZXN1bHQgPSAnbCcgKyBjb29yZHMuam9pbignLCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaCc6XG4gICAgICAgIGN4ICs9IGNvb3Jkc1swXTtcbiAgICAgICAgcmVzdWx0ID0gJ3InICsgY29vcmRzWzBdICsgJywwJztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0gnOlxuICAgICAgICBjeCA9IGNvb3Jkc1swXTtcbiAgICAgICAgcmVzdWx0ID0gJ2wnICsgY3ggKyAnLCcgKyBjeTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3YnOlxuICAgICAgICBjeSArPSBjb29yZHNbMF07XG4gICAgICAgIHJlc3VsdCA9ICdyMCwnICsgY29vcmRzWzBdO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnVic6XG4gICAgICAgIGN5ID0gY29vcmRzWzBdO1xuICAgICAgICByZXN1bHQgPSAnbCcgKyBjeCArICcsJyArIGN5O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIGN0cmx4ID0gY3ggKyBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDRdO1xuICAgICAgICBjdHJseSA9IGN5ICsgY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAzXTtcbiAgICAgICAgY3ggKz0gY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAyXTtcbiAgICAgICAgY3kgKz0gY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgcmVzdWx0ID0gJ3YnICsgY29vcmRzLmpvaW4oJywnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0MnOlxuICAgICAgICBjdHJseCA9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gNF07XG4gICAgICAgIGN0cmx5ID0gY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAzXTtcbiAgICAgICAgY3ggPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDJdO1xuICAgICAgICBjeSA9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIHJlc3VsdCA9ICdjJyArIGNvb3Jkcy5qb2luKCcsJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzJzpcbiAgICAgICAgY29vcmRzLnVuc2hpZnQoY3kgLSBjdHJseSk7XG4gICAgICAgIGNvb3Jkcy51bnNoaWZ0KGN4IC0gY3RybHgpO1xuICAgICAgICBjdHJseCA9IGN4ICsgY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSA0XTtcbiAgICAgICAgY3RybHkgPSBjeSArIGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gM107XG4gICAgICAgIGN4ICs9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMl07XG4gICAgICAgIGN5ICs9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIHJlc3VsdCA9ICd2JyArIGNvb3Jkcy5qb2luKCcsJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdTJzpcbiAgICAgICAgY29vcmRzLnVuc2hpZnQoY3kgKyBjeSAtIGN0cmx5KTtcbiAgICAgICAgY29vcmRzLnVuc2hpZnQoY3ggKyBjeCAtIGN0cmx4KTtcbiAgICAgICAgY3RybHggPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDRdO1xuICAgICAgICBjdHJseSA9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gM107XG4gICAgICAgIGN4ID0gY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAyXTtcbiAgICAgICAgY3kgPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICByZXN1bHQgPSAnYycgKyBjb29yZHMuam9pbignLCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcblxuICB9KS5yZXBsYWNlKC96L2csICcnKTtcbn07XG5cblZlY3RvckNhbnZhcy5wcm90b3R5cGUuc2V0U2l6ZSA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XG4gIGlmICh0aGlzLm1vZGUgPT09ICdzdmcnKSB7XG4gICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKTtcbiAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICB0aGlzLmNhbnZhcy5jb29yZHNpemUgPSB3aWR0aCArICcgJyArIGhlaWdodDtcbiAgICB0aGlzLmNhbnZhcy5jb29yZG9yaWdpbiA9ICcwIDAnO1xuICAgIGlmICh0aGlzLnJvb3RHcm91cCkge1xuICAgICAgdmFyIHBhdGhzID0gdGhpcy5yb290R3JvdXAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NoYXBlJyk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHBhdGhzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBwYXRoc1tpXS5jb29yZHNpemUgPSB3aWR0aCArICcgJyArIGhlaWdodDtcbiAgICAgICAgcGF0aHNbaV0uc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgIHBhdGhzW2ldLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgICB9XG4gICAgICB0aGlzLnJvb3RHcm91cC5jb29yZHNpemUgPSB3aWR0aCArICcgJyArIGhlaWdodDtcbiAgICAgIHRoaXMucm9vdEdyb3VwLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgdGhpcy5yb290R3JvdXAuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICB9XG4gIH1cbiAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbn07XG4iLCJpZih0eXBlb2YgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9tb21lbnRfXyA9PT0gJ3VuZGVmaW5lZCcpIHsgdmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ21vbWVudCdcIik7IGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJzsgdGhyb3cgZTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbW9tZW50X187Il0sInNvdXJjZVJvb3QiOiIifQ==