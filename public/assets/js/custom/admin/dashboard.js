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

/***/ "./src/assets/plugins/flexadmin/js/chart/chartjs.js":
/*!**********************************************************!*\
  !*** ./src/assets/plugins/flexadmin/js/chart/chartjs.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chart_js_dist_Chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/dist/Chart */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js_dist_Chart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js_dist_Chart__WEBPACK_IMPORTED_MODULE_1__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Chartjs = /*#__PURE__*/function () {
  function Chartjs() {
    _classCallCheck(this, Chartjs);
  }

  _createClass(Chartjs, [{
    key: "doughnutChart",
    value: function doughnutChart(elementId) {
      var element = document.getElementById(elementId);
      if (!element) return false;
      new (chart_js_dist_Chart__WEBPACK_IMPORTED_MODULE_1___default())(element, {
        type: "doughnut",
        data: {
          labels: ["Direct", "Affilliate", "Sponsored", "Email"],
          datasets: [{
            label: "My First Dataset",
            data: [300, 50, 100, 30],
            backgroundColor: [window.colors.red, window.colors.blue, window.colors.green, window.colors.yellow]
          }]
        }
      });
    }
  }, {
    key: "lineChart",
    value: function lineChart(elementId) {
      var element = document.getElementById(elementId);
      if (!element) return false;
      new (chart_js_dist_Chart__WEBPACK_IMPORTED_MODULE_1___default())(element.getContext("2d"), {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "Affilliate",
            backgroundColor: window.colors.red,
            borderColor: window.colors.red,
            data: [0, 2, 5, 8, 10, 20, 25]
          }, {
            label: "Sponsored",
            backgroundColor: window.colors.green,
            borderColor: window.colors.green,
            data: [0, 4, 6, 10, 13, 25, 30]
          }, {
            label: "Email",
            backgroundColor: window.colors.blue,
            borderColor: window.colors.blue,
            data: [0, 6, 8, 15, 18, 30, 36]
          }, {
            label: "Direct",
            backgroundColor: window.colors.yellow,
            borderColor: window.colors.yellow,
            data: [0, 10, 17, 20, 30, 30, 45]
          }]
        },
        options: {}
      });
    }
  }, {
    key: "progressBarChart",
    value: function progressBarChart(elementId) {
      var element = document.getElementById(elementId);
      var progress = document.getElementById("animationProgress");
      if (!element) return false;
      var config = {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "This Year",
            fill: false,
            borderColor: window.colors.red,
            backgroundColor: window.colors.red,
            data: [100, 200, 500, 400, 100, 560, 700]
          }, {
            label: "Previous Year",
            fill: false,
            borderColor: window.colors.blue,
            backgroundColor: window.colors.blue,
            data: [50, 100, 200, 500, 800, 600, 300]
          }]
        },
        options: {
          animation: {
            duration: 2000
          }
        }
      };
      new (chart_js_dist_Chart__WEBPACK_IMPORTED_MODULE_1___default())(element.getContext("2d"), config);
    }
  }, {
    key: "barChart",
    value: function barChart(elementId) {
      var element = document.getElementById(elementId);
      if (!element) return false;
      var ctx = element.getContext("2d");
      var data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Actual",
          backgroundColor: window.colors.blue,
          borderColor: window.colors.blue,
          hoverBackgroundColor: window.colors.blue,
          hoverBorderColor: window.colors.blue,
          data: [55, 58, 70, 65, 57, 45, 38, 44, 77, 65, 91, 80],
          barPercentage: 0.7,
          categoryPercentage: 0.5
        }, {
          label: "Expect",
          backgroundColor: window.colors.gray,
          borderColor: window.colors.gray,
          hoverBackgroundColor: window.colors.gray,
          hoverBorderColor: window.colors.gray,
          data: [66, 53, 65, 72, 34, 55, 45, 64, 23, 76, 67, 77],
          barPercentage: 0.7,
          categoryPercentage: 0.5
        }]
      };
      var options = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: false,
              color: "rgba(0,0,0,0.06)"
            },
            stacked: false,
            ticks: {
              stepSize: 20
            }
          }],
          xAxes: [{
            stacked: false,
            gridLines: {
              color: "rgba(0,0,0,0.02)"
            }
          }]
        }
      };
      var config = {
        type: "bar",
        data: data,
        options: options
      };
      new (chart_js_dist_Chart__WEBPACK_IMPORTED_MODULE_1___default())(ctx, config);
    }
  }]);

  return Chartjs;
}();

/* harmony default export */ __webpack_exports__["default"] = (Chartjs);

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
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
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

/***/ "./src/assets/plugins/modules/jqvmap/maps/jquery.vmap.world.js":
/*!*********************************************************************!*\
  !*** ./src/assets/plugins/modules/jqvmap/maps/jquery.vmap.world.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/** Add World Map Data Points */
jQuery.fn.vectorMap('addMap', 'world_en', {
  "width": 950,
  "height": 550,
  "paths": {
    "id": {
      "path": "M781.68,324.4l-2.31,8.68l-12.53,4.23l-3.75-4.4l-1.82,0.5l3.4,13.12l5.09,0.57l6.79,2.57v2.57l3.11-0.57l4.53-6.27v-5.13l2.55-5.13l2.83,0.57l-3.4-7.13l-0.52-4.59L781.68,324.4L781.68,324.4M722.48,317.57l-0.28,2.28l6.79,11.41h1.98l14.15,23.67l5.66,0.57l2.83-8.27l-4.53-2.85l-0.85-4.56L722.48,317.57L722.48,317.57M789.53,349.11l2.26,2.77l-1.47,4.16v0.79h3.34l1.18-10.4l1.08,0.3l1.96,9.5l1.87,0.5l1.77-4.06l-1.77-6.14l-1.47-2.67l4.62-3.37l-1.08-1.49l-4.42,2.87h-1.18l-2.16-3.17l0.69-1.39l3.64-1.78l5.5,1.68l1.67-0.1l4.13-3.86l-1.67-1.68l-3.83,2.97h-2.46l-3.73-1.78l-2.65,0.1l-2.95,4.75l-1.87,8.22L789.53,349.11L789.53,349.11M814.19,330.5l-1.87,4.55l2.95,3.86h0.98l1.28-2.57l0.69-0.89l-1.28-1.39l-1.87-0.69L814.19,330.5L814.19,330.5M819.99,345.45l-4.03,0.89l-1.18,1.29l0.98,1.68l2.65-0.99l1.67-0.99l2.46,1.98l1.08-0.89l-1.96-2.38L819.99,345.45L819.99,345.45M753.17,358.32l-2.75,1.88l0.59,1.58l8.75,1.98l4.42,0.79l1.87,1.98l5.01,0.4l2.36,1.98l2.16-0.5l1.97-1.78l-3.64-1.68l-3.14-2.67l-8.16-1.98L753.17,358.32L753.17,358.32M781.77,366.93l-2.16,1.19l1.28,1.39l3.14-1.19L781.77,366.93L781.77,366.93M785.5,366.04l0.39,1.88l2.26,0.59l0.88-1.09l-0.98-1.49L785.5,366.04L785.5,366.04M790.91,370.99l-2.75,0.4l2.46,2.08h1.96L790.91,370.99L790.91,370.99M791.69,367.72l-0.59,1.19l4.42,0.69l3.44-1.98l-1.96-0.59l-3.14,0.89l-1.18-0.99L791.69,367.72L791.69,367.72M831.93,339.34l-4.17,0.47l-2.68,1.96l1.11,2.24l4.54,0.84v0.84l-2.87,2.33l1.39,4.85l1.39,0.09l1.2-4.76h2.22l0.93,4.66l10.83,8.96l0.28,7l3.7,4.01l1.67-0.09l0.37-24.72l-6.29-4.38l-5.93,4.01l-2.13,1.31l-3.52-2.24l-0.09-7.09L831.93,339.34L831.93,339.34z",
      "name": "Indonesia"
    },
    "pg": {
      "path": "M852.76,348.29l-0.37,24.44l3.52-0.19l4.63-5.41l3.89,0.19l2.5,2.24l0.83,6.9l7.96,4.2l2.04-0.75v-2.52l-6.39-5.32l-3.15-7.28l2.5-1.21l-1.85-4.01l-3.7-0.09l-0.93-4.29l-9.81-6.62L852.76,348.29L852.76,348.29M880.48,349l-0.88,1.25l4.81,4.26l0.66,2.5l1.31-0.15l0.15-2.57l-1.46-1.32L880.48,349L880.48,349M882.89,355.03l-0.95,0.22l-0.58,2.57l-1.82,1.18l-5.47,0.96l0.22,2.06l5.76-0.29l3.65-2.28l-0.22-3.97L882.89,355.03L882.89,355.03M889.38,359.51l1.24,3.45l2.19,2.13l0.66-0.59l-0.22-2.28l-2.48-3.01L889.38,359.51L889.38,359.51z",
      "name": "Papua New Guinea"
    },
    "mx": {
      "path": "M137.49,225.43l4.83,15.21l-2.25,1.26l0.25,3.02l4.25,3.27v6.05l5.25,5.04l-2.25-14.86l-3-9.83l0.75-6.8l2.5,0.25l1,2.27l-1,5.79l13,25.44v9.07l10.5,12.34l11.5,5.29l4.75-2.77l6.75,5.54l4-4.03l-1.75-4.54l5.75-1.76l1.75,1.01l1.75-1.76h2.75l5-8.82l-2.5-2.27l-9.75,2.27l-2.25,6.55l-5.75,1.01l-6.75-2.77l-3-9.57l2.27-12.07l-4.64-2.89l-2.21-11.59l-1.85-0.79l-3.38,3.43l-3.88-2.07l-1.52-7.73l-15.37-1.61l-7.94-5.97L137.49,225.43L137.49,225.43z",
      "name": "Mexico"
    },
    "ee": {
      "path": "M517.77,143.66l-5.6-0.2l-3.55,2.17l-0.05,1.61l2.3,2.17l7.15,1.21L517.77,143.66L517.77,143.66M506.76,147.64l-1.55-0.05l-0.9,0.91l0.65,0.96l1.55,0.1l0.8-1.16L506.76,147.64L506.76,147.64z",
      "name": "Estonia"
    },
    "dz": {
      "path": "M473.88,227.49l-4.08-1.37l-16.98,3.19l-3.7,2.81l2.26,11.67l-6.75,0.27l-4.06,6.53l-9.67,2.32l0.03,4.75l31.85,24.35l5.43,0.46l18.11-14.15l-1.81-2.28l-3.4-0.46l-2.04-3.42v-14.15l-1.36-1.37l0.23-3.65l-3.62-3.65l-0.45-3.88l1.58-1.14l-0.68-4.11L473.88,227.49L473.88,227.49z",
      "name": "Algeria"
    },
    "ma": {
      "path": "M448.29,232.28h-11.55l-2.26,5.02l-5.21,2.51l-4.3,11.64l-8.38,5.02l-11.77,19.39l11.55-0.23l0.45-5.7h2.94v-7.76h10.19l0.23-10.04l9.74-2.28l4.08-6.62l6.34-0.23L448.29,232.28L448.29,232.28z",
      "name": "Morocco"
    },
    "mr": {
      "path": "M404.9,276.66l2.18,2.85l-0.45,12.32l3.17-2.28l2.26-0.46l3.17,1.14l3.62,5.02l3.4-2.28l16.53-0.23l-4.08-27.61l4.38-0.02l-8.16-6.25l0.01,4.06l-10.33,0.01l-0.05,7.75l-2.97-0.01l-0.38,5.72L404.9,276.66L404.9,276.66z",
      "name": "Mauritania"
    },
    "sn": {
      "path": "M412.03,289.84L410.12,290.31L406.18,293.18L405.28,294.78L405,296.37L406.43,297.40L411.28,297.34L414.40,296.5L414.75,298.03L414.46,300.06L414.53,300.09L406.78,300.21L408.03,303.21L408.71,301.37L418,302.15L418.06,302.21L419.03,302.25L422,302.37L422.12,300.62L418.53,296.31L414.53,290.87L412.03,289.84z",
      "name": "Senegal"
    },
    "gm": {
      "path": "M406.89,298.34l-0.13,1.11l6.92-0.1l0.35-1.03l-0.15-1.04l-1.99,0.81L406.89,298.34L406.89,298.34z",
      "name": "Gambia"
    },
    "gw": {
      "path": "M408.6,304.53l1.4,2.77l3.93-3.38l0.04-1.04l-4.63-0.67L408.6,304.53L408.6,304.53z",
      "name": "Guinea-Bissau"
    },
    "gn": {
      "path": "M410.42,307.94l3.04,4.68l3.96-3.44l4.06-0.18l3.38,4.49l2.87,1.89l1.08-2.1l0.96-0.54l-0.07-4.62l-1.91-5.48l-5.86,0.65l-7.25-0.58l-0.04,1.86L410.42,307.94L410.42,307.94z",
      "name": "Guinea"
    },
    "sl": {
      "path": "M413.93,313.13l5.65,5.46l4.03-4.89l-2.52-3.95l-3.47,0.35L413.93,313.13L413.93,313.13z",
      "name": "Sierra Leone"
    },
    "lr": {
      "path": "M420.17,319.19l10.98,7.34l-0.26-5.56l-3.32-3.91l-3.24-2.87L420.17,319.19L420.17,319.19z",
      "name": "Liberia"
    },
    "ci": {
      "path": "M432.07,326.75l4.28-3.03l5.32-0.93l5.43,1.17l-2.77-4.19l-0.81-2.56l0.81-7.57l-4.85,0.23l-2.2-2.1l-4.62,0.12l-2.2,0.35l0.23,5.12l-1.16,0.47l-1.39,2.56l3.58,4.19L432.07,326.75L432.07,326.75z",
      "name": "Cote d'Ivoire"
    },
    "ml": {
      "path": "M419.46,295.84l3.08-2.11l17.12-0.1l-3.96-27.54l4.52-0.13l21.87,16.69l2.94,0.42l-1.11,9.28l-13.75,1.25l-10.61,7.92l-1.93,5.42l-7.37,0.31l-1.88-5.41l-5.65,0.4l0.22-1.77L419.46,295.84L419.46,295.84z",
      "name": "Mali"
    },
    "bf": {
      "path": "M450.59,294.28l3.64-0.29l5.97,8.44l-5.54,4.18l-4.01-1.03l-5.39,0.07l-0.87,3.16l-4.52,0.22l-1.24-1.69l1.6-5.14L450.59,294.28L450.59,294.28z",
      "name": "Burkina Faso"
    },
    "ne": {
      "path": "M460.89,302l2.55-0.06l2.3-3.45l3.86-0.69l4.11,2.51l8.77,0.25l6.78-2.76l2.55-2.19l0.19-2.88l4.73-4.77l1.25-10.53l-3.11-6.52l-7.96-1.94l-18.42,14.36l-2.61-0.25l-1.12,9.97l-9.4,0.94L460.89,302L460.89,302z",
      "name": "Niger"
    },
    "gh": {
      "path": "M444.34,317.05l1.12,2.63l2.92,4.58l1.62-0.06l4.42-2.51l-0.31-14.29l-3.42-1l-4.79,0.13L444.34,317.05L444.34,317.05z",
      "name": "Ghana"
    },
    "tg": {
      "path": "M455.22,321.25l2.68-1.57l-0.06-10.35l-1.74-2.82l-1.12,0.94L455.22,321.25L455.22,321.25z",
      "name": "Togo"
    },
    "bj": {
      "path": "M458.71,319.49h2.12l0.12-6.02l2.68-3.89l-0.12-6.77l-2.43-0.06l-4.17,3.26l1.74,3.32L458.71,319.49L458.71,319.49z",
      "name": "Benin"
    },
    "ng": {
      "path": "M461.57,319.37l3.92,0.19l4.73,5.27l2.3,0.63l1.8-0.88l2.74-0.38l0.93-3.82l3.73-2.45l4.04-0.19l7.4-13.61l-0.12-3.07l-3.42-2.63l-6.84,3.01l-9.15-0.13l-4.36-2.76l-3.11,0.69l-1.62,2.82l-0.12,7.96l-2.61,3.7L461.57,319.37L461.57,319.37z",
      "name": "Nigeria"
    },
    "tn": {
      "path": "M474.91,227.33l5.53-2.23l1.82,1.18l0.07,1.44l-0.85,1.11l0.13,1.97l0.85,0.46v3.54l-0.98,1.64l0.13,1.05l3.71,1.31l-2.99,4.65l-1.17-0.07l-0.2,3.74l-1.3,0.2l-1.11-0.98l0.26-3.8l-3.64-3.54l-0.46-3.08l1.76-1.38L474.91,227.33L474.91,227.33z",
      "name": "Tunisia"
    },
    "ly": {
      "path": "M480.05,248.03l1.56-0.26l0.46-3.6h0.78l3.19-5.24l7.87,2.29l2.15,3.34l7.74,3.54l4.03-1.7l-0.39-1.7l-1.76-1.7l0.2-1.18l2.86-2.42h5.66l2.15,2.88l4.55,0.66l0.59,36.89l-3.38-0.13l-20.42-10.62l-2.21,1.25l-8.39-2.1l-2.28-3.01l-3.32-0.46l-1.69-3.01L480.05,248.03L480.05,248.03z",
      "name": "Libya"
    },
    "eg": {
      "path": "M521.93,243.06l2.67,0.07l5.2,1.44l2.47,0.07l3.06-2.56h1.43l2.6,1.44h3.29l0.59-0.04l2.08,5.98l0.59,1.93l0.55,2.89l-0.98,0.72l-1.69-0.85l-1.95-6.36l-1.76-0.13l-0.13,2.16l1.17,3.74l9.37,11.6l0.2,4.98l-2.73,3.15L522.32,273L521.93,243.06L521.93,243.06z",
      "name": "Egypt"
    },
    "td": {
      "path": "M492.79,296l0.13-2.95l4.74-4.61l1.27-11.32l-3.16-6.04l2.21-1.13l21.4,11.15l-0.13,10.94l-3.77,3.21v5.64l2.47,4.78h-4.36l-7.22,7.14l-0.19,2.16l-5.33-0.07l-0.07,0.98l-3.04-0.4l-2.08-3.93l-1.56-0.77l0.2-1.2l1.96-1.5v-7.02l-2.71-0.42l-3.27-2.43L492.79,296L492.79,296L492.79,296z",
      "name": "Chad"
    },
    "sd": {
      "path": "M520.15,292.43l0.18-11.83l2.46,0.07l-0.28-6.57l25.8,0.23l3.69-3.72l7.96,12.73l-4.36,5.14v7.85l-6.86,14.75l-2.36,1.04l0.75,4.11h2.94l3.99,5.79l-3.2,0.41l-0.82,1.49l-0.08,2.15l-9.6-0.17l-0.98-1.49l-6.71-0.38l-12.32-12.68l1.23-0.74l0.33-2.98l-2.95-1.74l-2.69-5.31l0.15-4.94L520.15,292.43L520.15,292.43z",
      "name": "Sudan"
    },
    "cm": {
      "path": "M477.82,324.28l3.22,2.96l-0.23,4.58l17.66-0.41l1.44-1.62l-5.06-5.45l-0.75-1.97l3.22-6.03l-2.19-4l-1.84-0.99v-2.03l2.13-1.39l0.12-6.32l-1.69-0.19l-0.03,3.32l-7.42,13.85l-4.54,0.23l-3.11,2.14L477.82,324.28L477.82,324.28z",
      "name": "Cameroon"
    },
    "er": {
      "path": "M556.71,294.7l-0.25-5.89l3.96-4.62l1.07,0.82l1.95,6.52l9.36,6.97l-1.7,2.09l-6.85-5.89H556.71L556.71,294.7z",
      "name": "Eritrea"
    },
    "dj": {
      "path": "M571.48,301.54l-0.57,3.36l3.96-0.06l0.06-4.94l-1.45-0.89L571.48,301.54L571.48,301.54z",
      "name": "Djibouti"
    },
    "et": {
      "path": "M549.49,311.76l7.28-16.2l7.23,0.04l6.41,5.57l-0.45,4.59h4.97l0.51,2.76l8.04,4.81l4.96,0.25l-9.43,10.13l-12.95,3.99h-3.21l-5.72-4.88l-2.26-0.95l-4.38-6.45l-2.89,0.04l-0.34-2.96L549.49,311.76L549.49,311.76z",
      "name": "Ethiopia"
    },
    "so": {
      "path": "M575.74,305.04l4.08,2.78l1.21-0.06l10.13-3.48l1.15,3.71l-0.81,3.13l-2.19,1.74l-5.47-0.35l-7.83-4.81L575.74,305.04L575.74,305.04M591.97,304.05l4.37-1.68l1.55,0.93l-0.17,3.88l-4.03,11.48l-21.81,23.36l-2.53-1.74l-0.17-9.86l3.28-3.77l6.96-2.15l10.21-10.78l2.67-2.38l0.75-3.48L591.97,304.05L591.97,304.05z",
      "name": "Somalia"
    },
    "ye": {
      "path": "M599.62,299.65l2.13,2.38l2.88-1.74l1.04-0.35l-1.32-1.28l-2.53,0.75L599.62,299.65L599.62,299.65M571.99,289.23l1.44,4.28v4.18l3.46,3.14l24.38-9.93l0.23-2.73l-3.91-7.02l-9.81,3.13l-5.63,5.54l-6.53-3.86L571.99,289.23L571.99,289.23z",
      "name": "Yemen"
    },
    "cf": {
      "path": "M495.66,324.05l4.66,5.04l1.84-2.38l2.93,0.12l0.63-2.32l2.88-1.8l5.98,4.12l3.45-3.42l13.39,0.59L519,311.18l1.67-1.04l0.23-2.26l-2.82-1.33h-4.14l-6.67,6.61l-0.23,2.72l-5.29-0.17l-0.17,1.16l-3.45-0.35l-3.11,5.91L495.66,324.05L495.66,324.05z",
      "name": "Central African Republic"
    },
    "st": {
      "path": "M470.74,337.15l1.15-0.58l0.86,0.7l-0.86,1.33l-1.04-0.41L470.74,337.15L470.74,337.15M473.05,333.5l1.73-0.29l0.58,1.1l-0.86,0.93l-0.86-0.12L473.05,333.5L473.05,333.5z",
      "name": "Sao Tome and Principe"
    },
    "gq": {
      "path": "M476.84,327.41l-0.46,1.97l1.38,0.75l1.32-0.99l-0.46-2.03L476.84,327.41L476.84,327.41M480.99,332.69l-0.06,1.39l4.54,0.23l-0.06-1.57L480.99,332.69L480.99,332.69z",
      "name": "Equatorial Guinea"
    },
    "ga": {
      "path": "M486.39,332.63l-0.12,2.49l-5.64-0.12l-3.45,6.67l8.11,8.87l2.01-1.68l-0.06-1.74l-1.38-0.64v-1.22l3.11-1.97l2.76,2.09l3.05,0.06l-0.06-10.49l-4.83-0.23l-0.06-2.2L486.39,332.63L486.39,332.63z",
      "name": "Gabon"
    },
    "cg": {
      "path": "M491,332.52l-0.06,1.45l4.78,0.12l0.17,12.41l-4.37-0.12l-2.53-1.97l-1.96,1.1l-0.09,0.55l1.01,0.49l0.29,2.55l-2.7,2.32l0.58,1.22l2.99-2.32h1.44l0.46,1.39l1.9,0.81l6.1-5.16l-0.12-3.77l1.27-3.07l3.91-2.9l1.05-9.81l-2.78,0.01l-3.22,4.41L491,332.52L491,332.52z",
      "name": "Congo"
    },
    "ao": {
      "path": "M486.55,353.23l1.74,2.26l2.25-2.13l-0.66-2.21l-0.56-0.04L486.55,353.23L486.55,353.23M488.62,356.71l3.41,12.73l-0.08,4.02l-4.99,5.36l-0.75,8.71l19.2,0.17l6.24,2.26l5.15-0.67l-3-3.76l0.01-10.74l5.9-0.25v-4.19l-4.79-0.2l-0.96-9.92l-2.02,0.03l-1.09-0.98l-1.19,0.06l-1.58,3.06H502l-1.41-1.42l0.42-2.01l-1.66-2.43L488.62,356.71L488.62,356.71z",
      "name": "Angola"
    },
    "cd": {
      "path": "M489.38,355.71l10.31-0.18l2.09,2.97l-0.08,2.19l0.77,0.7h5.12l1.47-2.89h2.09l0.85,0.86l2.87-0.08l0.85,10.08l4.96,0.16v0.78l13.33,6.01l0.62,1.17h2.79l-0.31-4.22l-5.04-2.42l0.31-3.2l2.17-5.08l4.96-0.16l-4.26-14.14l0.08-6.01l6.74-10.54l0.08-1.48l-1.01-0.55l0.04-2.86l-1.23-0.11l-1.24-1.58l-20.35-0.92l-3.73,3.63l-6.11-4.02l-2.15,1.32l-1.56,13.13l-3.86,2.98l-1.16,2.64l0.21,3.91l-6.96,5.69l-1.85-0.84l0.25,1.09L489.38,355.71L489.38,355.71z",
      "name": "Congo"
    },
    "rw": {
      "path": "M537.82,339.9l2.81,2.59l-0.12,2.77l-4.36,0.09v-3.06L537.82,339.9L537.82,339.9z",
      "name": "Rwanda"
    },
    "bi": {
      "path": "M536.21,346.21l4.27-0.09l-1.11,3.74l-1.08,0.94h-1.32l-0.94-2.53L536.21,346.21L536.21,346.21z",
      "name": "Burundi"
    },
    "ug": {
      "path": "M538.3,339.09l3.03,2.84l1.9-1.21l5.14-0.84l0.88,0.09l0.33-1.95l2.9-6.1l-2.44-5.08l-7.91,0.05l-0.05,2.09l1.06,1.02l-0.16,2.09L538.3,339.09L538.3,339.09z",
      "name": "Uganda"
    },
    "ke": {
      "path": "M550.83,326.52l2.66,5.19l-3.19,6.69l-0.42,2.03l15.93,9.85l4.94-7.76l-2.5-2.03l-0.05-10.22l3.13-3.42l-4.99,1.66l-3.77,0.05l-5.9-4.98l-1.86-0.8l-3.45,0.32l-0.61,1.02L550.83,326.52L550.83,326.52z",
      "name": "Kenya"
    },
    "tz": {
      "path": "M550.57,371.42l17.47-2.14l-3.93-7.6l-0.21-7.28l1.27-3.48l-16.62-10.44l-5.21,0.86l-1.81,1.34l-0.16,3.05l-1.17,4.23l-1.22,1.45l-1.75,0.16l3.35,11.61l5.47,2.57l3.77,0.11L550.57,371.42L550.57,371.42z",
      "name": "Tanzania"
    },
    "zm": {
      "path": "M514.55,384.7l3.17,4.4l4.91,0.3l1.74,0.96l5.14,0.06l4.43-6.21l12.38-5.54l1.08-4.88l-1.44-6.99l-6.46-3.68l-4.31,0.3l-2.15,4.76l0.06,2.17l5.08,2.47l0.3,5.37l-4.37,0.24l-1.08-1.81l-12.14-5.18l-0.36,3.98l-5.74,0.18L514.55,384.7L514.55,384.7z",
      "name": "Zambia"
    },
    "mw": {
      "path": "M547.16,379.4l3.11,3.25l-0.06,4.16l0.6,1.75l4.13-4.46l-0.48-5.67l-2.21-1.69l-1.97-9.95l-3.41-0.12l1.55,7.17L547.16,379.4L547.16,379.4z",
      "name": "Malawi"
    },
    "mz": {
      "path": "M541.17,413.28l2.69,2.23l6.34-3.86l1.02-5.73v-9.46l10.17-8.32l1.74,0.06l6.16-5.91l-0.96-12.18L552,372.17l0.48,3.68l2.81,2.17l0.66,6.63l-5.5,5.37l-1.32-3.01l0.24-3.98l-3.17-3.44l-7.78,3.62l7.24,3.68l0.24,10.73l-4.79,7.11L541.17,413.28L541.17,413.28z",
      "name": "Mozambique"
    },
    "zw": {
      "path": "M524.66,392.3l8.97,10.13l6.88,1.75l4.61-7.23l-0.36-9.58l-7.48-3.86l-2.81,1.27l-4.19,6.39l-5.8-0.06L524.66,392.3L524.66,392.3z",
      "name": "Zimbabwe"
    },
    "na": {
      "path": "M496.55,421.96l3.35,0.24l1.97,1.99l4.67,0.06l1.14-13.26v-8.68l2.99-0.6l1.14-9.1l7.6-0.24l2.69-2.23l-4.55-0.18l-6.16,0.84l-6.64-2.41h-18.66l0.48,5.3l6.22,9.16l-1.08,4.7l0.06,2.47L496.55,421.96L496.55,421.96z",
      "name": "Namibia"
    },
    "bw": {
      "path": "M508.51,411.23l2.15,0.66l-0.3,6.15l2.21,0.3l5.08-4.58l6.1,0.66l1.62-4.1l7.72-7.05l-9.27-10.67l-0.12-1.75l-1.02-0.3l-2.81,2.59l-7.3,0.18l-1.02,9.1l-2.87,0.66L508.51,411.23L508.51,411.23z",
      "name": "Botswana"
    },
    "sz": {
      "path": "M540.87,414l-2.51,0.42l-1.08,2.95l1.92,1.75h2.33l1.97-2.83L540.87,414L540.87,414z",
      "name": "Swaziland"
    },
    "ls": {
      "path": "M527.41,425.39l3.05-2.35l1.44,0.06l1.74,2.17l-0.18,2.17l-2.93,1.08v0.84l-3.23-0.18l-0.78-2.35L527.41,425.39L527.41,425.39z",
      "name": "Lesotho"
    },
    "za": {
      "path": "M534.16,403.63l-7.9,7.3l-1.88,4.51l-6.26-0.78l-5.21,4.63l-3.46-0.34l0.28-6.4l-1.23-0.43l-0.86,13.09l-6.14-0.06l-1.85-2.18l-2.71-0.03l2.47,7.09l4.41,4.17l-3.15,3.67l2.04,4.6l4.72,1.8l3.76-3.2l10.77,0.06l0.77-0.96l4.78-0.84l16.17-16.1l-0.06-5.07l-1.73,2.24h-2.59l-3.15-2.64l1.6-3.98l2.75-0.56l-0.25-8.18L534.16,403.63L534.16,403.63z M530.37,422.13l1.51-0.06l2.45,2.66l-0.07,3.08l-2.87,1.45l-0.18,1.02l-4.38,0.05l-1.37-3.3l1.25-2.42L530.37,422.13L530.37,422.13z",
      "name": "South Africa"
    },
    "gl": {
      "path": "M321.13,50.07l-1.36,2.17l2.45,2.45l-1.09,2.45l3.54,4.62l4.35-1.36l5.71-0.54l6.53,7.07l4.35,11.69l-3.53,7.34l4.89-0.82l2.72,1.63l0.27,3.54l-5.98,0.27l3.26,3.26l4.08,0.82l-8.97,11.96l-1.09,7.34l1.9,5.98l-1.36,3.54l2.45,7.61l4.62,5.17l1.36-0.27l2.99-0.82l0.27,4.35l1.9,2.72l3.53-0.27l2.72-10.06l8.16-10.06l12.24-4.89l7.61-9.52l3.53,1.63h7.34l5.98-5.98l7.34-2.99l0.82-4.62l-4.62-4.08l-4.08-1.36l-2.18-5.71l5.17-2.99l8.16,4.35l2.72-2.99l-4.35-2.45l9.25-12.51l-1.63-5.44l-4.35-0.27l1.63-4.89l5.44-2.45l11.15-9.79l-3.26-3.53l-12.51,1.09l-6.53,6.53l3.81-8.43l-4.35-1.09l-2.45,4.35l-3.53-2.99l-9.79,1.09l2.72-4.35l16.04-0.54l-4.08-5.44l-17.4-3.26l-7.07,1.09l0.27,3.54l-7.34-2.45l0.27-2.45l-5.17,1.09l-1.09,2.72l5.44,1.9l-5.71,4.08l-4.08-4.62l-5.71-1.63l-0.82,4.35h-5.71l-2.18-4.62l-8.97-1.36l-4.89,2.45l-0.27,3.26l-6.25-0.82l-3.81,1.63l0.27,3.81v1.9l-7.07,1.36l-3.26-2.17l-2.18,3.53l3.26,3.54l6.8-0.82l0.54,2.18l-5.17,2.45L321.13,50.07L321.13,50.07M342.89,92.49l1.63,2.45l-0.82,2.99h-1.63l-2.18-2.45l0.54-1.9L342.89,92.49L342.89,92.49M410.87,85.69l4.62,1.36l-0.27,3.81l-4.89-2.45l-1.09-1.36L410.87,85.69L410.87,85.69z",
      "name": "Greenland"
    },
    "au": {
      "path": "M761.17,427.98l-0.35,25.38l-3.9,2.86l-0.35,2.5l5.32,3.57l13.13-2.5h6.74l2.48-3.58l14.9-2.86l10.64,3.22l-0.71,4.29l1.42,4.29l8.16-1.43l0.35,2.14l-5.32,3.93l1.77,1.43l3.9-1.43l-1.06,11.8l7.45,5.72l4.26-1.43l2.13,2.14l12.42-1.79l11.71-18.95l4.26-1.07l8.51-15.73l2.13-13.58l-5.32-6.79l2.13-1.43l-4.26-13.23l-4.61-3.22l0.71-17.87l-4.26-3.22l-1.06-10.01h-2.13l-7.1,23.59l-3.9,0.36l-8.87-8.94l4.97-13.23l-9.22-1.79l-10.29,2.86l-2.84,8.22l-4.61,1.07l-0.35-5.72l-18.8,11.44l0.35,4.29l-2.84,3.93h-7.1l-15.26,6.43L761.17,427.98L761.17,427.98M825.74,496.26l-1.77,7.15l0.35,5l5.32-0.36l6.03-9.29L825.74,496.26L825.74,496.26z",
      "name": "Australia"
    },
    "nz": {
      "path": "M913.02,481.96l1.06,11.8l-1.42,5.36l-5.32,3.93l0.35,4.65v5l1.42,1.79l14.55-12.51v-2.86h-3.55l-4.97-16.8L913.02,481.96L913.02,481.96M902.38,507.7l2.84,5.36l-7.81,7.51l-0.71,3.93l-5.32,0.71l-8.87,8.22l-8.16-3.93l-0.71-2.86l14.9-6.43L902.38,507.7L902.38,507.7z",
      "name": "New Zealand"
    },
    "nc": {
      "path": "M906.64,420.47l-0.35,1.79l4.61,6.43l2.48,1.07l0.35-2.5L906.64,420.47L906.64,420.47z",
      "name": "New Caledonia"
    },
    "my": {
      "path": "M764.14,332.92l3.02,3.49l11.58-4.01l2.29-8.84l5.16-0.37l4.72-3.42l-6.12-4.46l-1.4-2.45l-3.02,5.57l1.11,3.2l-1.84,2.67l-3.47-0.89l-8.41,6.17l0.22,3.57L764.14,332.92L764.14,332.92M732.71,315.45l2.01,4.51l0.45,5.86l2.69,4.17l6.49,3.94l2.46,0.23l-0.45-4.06l-2.13-5.18l-3.12-6.63l-0.26,1.16l-3.76-0.17l-2.7-3.88L732.71,315.45L732.71,315.45z",
      "name": "Malaysia"
    },
    "bn": {
      "path": "M779.77,319.25l-2.88,3.49l2.36,0.74l1.33-1.86L779.77,319.25L779.77,319.25z",
      "name": "Brunei Darussalam"
    },
    "tl": {
      "path": "M806.14,368.42l-5.11,4.26l0.49,1.09l2.16-0.4l2.55-2.38l5.01-0.69l-0.98-1.68L806.14,368.42L806.14,368.42z",
      "name": "Timor-Leste"
    },
    "sb": {
      "path": "M895.43,364.65l0.15,2.28l1.39,1.32l1.31-0.81l-1.17-2.43L895.43,364.65L895.43,364.65M897.18,370.31l-1.17,1.25l1.24,2.28l1.46,0.44l-0.07-1.54L897.18,370.31L897.18,370.31M900.03,368.99l1.02,2.5l1.97,2.35l1.09-1.76l-1.46-2.5L900.03,368.99L900.03,368.99M905.14,372.74l0.58,3.09l1.39,1.91l1.17-2.42L905.14,372.74L905.14,372.74M906.74,379.65l-0.51,0.88l1.68,2.21l1.17,0.07l-0.73-2.87L906.74,379.65L906.74,379.65M903.02,384.05l-1.75,0.81l1.53,2.13l1.31-0.74L903.02,384.05L903.02,384.05z",
      "name": "Solomon Islands"
    },
    "vu": {
      "path": "M920.87,397.22l-1.24,1.66l0.52,1.87l0.62,0.42l1.13-1.46L920.87,397.22L920.87,397.22M921.49,402.31l0.1,1.35l1.34,0.42l0.93-0.52l-0.93-1.46L921.49,402.31L921.49,402.31M923.45,414.37l-0.62,0.94l0.93,1.04l1.55-0.52L923.45,414.37L923.45,414.37z",
      "name": "Vanuatu"
    },
    "fj": {
      "path": "M948.62,412.29l-1.24,1.66l-0.1,1.87l1.44,1.46L948.62,412.29L948.62,412.29z",
      "name": "Fiji"
    },
    "ph": {
      "path": "M789.37,297.53l-0.86,1.64l-0.48,2.02l-4.78,6.07l0.29,1.25l2.01-0.29l6.21-6.94L789.37,297.53L789.37,297.53M797.11,295.22l-0.1,5.01l1.82,1.83l0.67,3.56l1.82,0.39l0.86-2.22l-1.43-1.06l-0.38-6.26L797.11,295.22L797.11,295.22M802.28,297.15l-0.1,4.43l1.05,1.73l1.82-2.12l-0.48-3.85L802.28,297.15L802.28,297.15M803.42,293.29l1.82,2.41l0.86,2.31h1.63l-0.29-3.95l-1.82-1.25L803.42,293.29L803.42,293.29M806.96,302.35l0.38,2.89l-3.35,2.7l-2.77,0.29l-2.96,3.18l0.1,1.45l2.77-0.87l1.91-1.25l1.63,4.14l2.87,2.02l1.15-0.39l1.05-1.25l-2.29-2.31l1.34-1.06l1.53,1.25l1.05-1.73l-1.05-2.12l-0.19-4.72L806.96,302.35L806.96,302.35M791.38,272.97l-2.58,1.83l-0.29,5.78l4.02,7.8l1.34,1.06l1.72-1.16l2.96,0.48l0.57,2.6l2.2,0.19l1.05-1.44l-1.34-1.83l-1.63-1.54l-3.44-0.38l-1.82-2.99l2.1-3.18l0.19-2.79l-1.43-3.56L791.38,272.97L791.38,272.97M792.72,290.21l0.76,2.7l1.34,0.87l0.96-1.25l-1.53-2.12L792.72,290.21L792.72,290.21z",
      "name": "Philippines"
    },
    "cn": {
      "path": "M759.83,270.17l-2.39,0.67l-1.72,2.12l1.43,2.79l2.1,0.19l2.39-2.12l0.57-2.79L759.83,270.17L759.83,270.17M670.4,170.07l-3.46,8.7l-4.77-0.25l-5.03,11.01l4.27,5.44l-8.8,12.15l-4.52-0.76l-3.02,3.8l0.75,2.28l3.52,0.25l1.76,4.05l3.52,0.76l10.81,13.93v7.09l5.28,3.29l5.78-1.01l7.29,4.3l8.8,2.53l4.27-0.51l4.78-0.51l10.05-6.58l3.27,0.51l1.25,2.97l2.77,0.83l3.77,5.57l-2.51,5.57l1.51,3.8l4.27,1.52l0.75,4.56l5.03,0.51l0.75-2.28l7.29-3.8l4.52,0.25l5.28,5.82l3.52-1.52l2.26,0.25l1.01,2.79l1.76,0.25l2.51-3.54l10.05-3.8l9.05-10.89l3.02-10.38l-0.25-6.84l-3.77-0.76l2.26-2.53l-0.5-4.05l-9.55-9.62v-4.81l2.76-3.54l2.76-1.27l0.25-2.79h-7.04l-1.26,3.8l-3.27-0.76l-4.02-4.3l2.51-6.58l3.52-3.8l3.27,0.25l-0.5,5.82l1.76,1.52l4.27-4.3l1.51-0.25l-0.5-3.29l4.02-4.81l3.02,0.25l1.76-5.57l2.06-1.09l0.21-3.47l-2-2.1l-0.17-5.48l3.85-0.25l-0.25-14.13l-2.7,1.62l-1.01,3.62l-4.51-0.01l-13.07-7.35l-9.44-11.38l-9.58-0.1l-2.44,2.12l3.1,7.1l-1.08,6.66l-3.86,1.6l-2.17-0.17l-0.16,6.59l2.26,0.51l4.02-1.77l5.28,2.53v2.53l-3.77,0.25l-3.02,6.58l-2.76,0.25l-9.8,12.91l-10.3,4.56l-7.04,0.51l-4.77-3.29l-6.79,3.55l-7.29-2.28l-1.76-4.81l-12.31-0.76l-6.53-10.63h-2.76l-2.22-4.93L670.4,170.07z",
      "name": "China"
    },
    "tw": {
      "path": "M787.46,248.31l-3.54,2.7l-0.19,5.2l3.06,3.56l0.76-0.67L787.46,248.31L787.46,248.31z",
      "name": "Taiwan"
    },
    "jp": {
      "path": "M803.23,216.42l-1.63,1.64l0.67,2.31l1.43,0.1l0.96,5.01l1.15,1.25l2.01-1.83l0.86-3.28l-2.49-3.56L803.23,216.42L803.23,216.42M812.03,213.15l-2.77,2.6l-0.1,2.99l0.67,0.87l3.73-3.18l-0.29-3.18L812.03,213.15L812.03,213.15M808.2,206.98l-4.88,5.59l0.86,1.35l2.39,0.29l4.49-3.47l3.16-0.58l2.87,3.37l2.2-0.77l0.86-3.28l4.11-0.1l4.02-4.82l-2.1-8l-0.96-4.24l2.1-1.73l-4.78-7.22l-1.24,0.1l-2.58,2.89v2.41l1.15,1.35l0.38,6.36l-2.96,3.66l-1.72-1.06l-1.34,2.99l-0.29,2.79l1.05,1.64l-0.67,1.25l-2.2-1.83h-1.53l-1.34,0.77L808.2,206.98L808.2,206.98M816.43,163.44l-1.53,1.35l0.77,2.89l1.34,1.35l-0.1,4.43l-1.72,0.67l-1.34,2.99l3.92,5.39l2.58-0.87l0.48-1.35l-2.77-2.5l1.72-2.22l1.82,0.29l1.43,1.54l0.1-3.18l3.92-3.18l2.2-0.58l-1.82-3.08l-0.86-1.35l-1.43,0.96l-1.24,1.54l-2.68-0.58l-2.77-1.83L816.43,163.44L816.43,163.44z",
      "name": "Japan"
    },
    "ru": {
      "path": "M506.61,151.72l-1.5-0.15l-2.7,3.23v1.51l0.9,0.35l1.75,0.05l2.9-2.37l0.4-0.81L506.61,151.72L506.61,151.72M830.86,160.45l-2.68,3.76l0.19,1.83l1.34-0.58l3.15-3.95L830.86,160.45L830.86,160.45M834.4,154.96l-0.96,2.6l0.1,1.73l1.63-1.06l1.53-3.08V154L834.4,154.96L834.4,154.96M840.04,132.03l-1.24,1.54l0.1,2.41l1.15-0.1l1.91-3.37L840.04,132.03L840.04,132.03M837.75,137.91v4.24l1.34,0.48l0.96-1.54v-3.27L837.75,137.91L837.75,137.91M798.64,122.59l-0.09,6.17l7.74,11.95l2.77,10.4l4.88,9.25l1.91,0.67l1.63-1.35l0.76-2.22l-6.98-7.61l0.19-3.95l1.53-0.67l0.38-2.31l-13.67-19.36L798.64,122.59L798.64,122.59M852.57,103.42l-1.91,0.19l1.15,1.64l2.39,1.64l0.67-0.77L852.57,103.42L852.57,103.42M856.29,104.58l0.29,1.64l2.96,0.87l0.29-1.16L856.29,104.58L856.29,104.58M547.82,38.79l1.72,0.69l-1.21,2.08v2.95l-2.58,1.56H543l-1.55-1.91l0.17-2.08l1.21-1.56h2.41L547.82,38.79L547.82,38.79M554.36,36.88v2.08l1.72,1.39l2.41-0.17l2.07-1.91v-1.39h-1.89l-1.55,0.52l-1.21-1.39L554.36,36.88L554.36,36.88M564.18,37.06l1.21,2.6l2.41,0.17l1.72-0.69l-0.86-2.43l-2.24-0.52L564.18,37.06L564.18,37.06M573.99,33.59l-1.89-0.35l-1.72,1.74l0.86,1.56l0.52,2.43l2.24-1.73l0.52-1.91L573.99,33.59L573.99,33.59M584.49,51.98l-0.52,2.43l-3.96,3.47l-8.44,1.91l-6.89,11.45l-1.21,3.3l6.89,1.74l1.03-4.16l2.07-6.42l5.34-2.78l4.48-3.47l3.27-1.39h1.72v-4.68L584.49,51.98L584.49,51.98M562.28,77.31l4.65,0.52l1.55,5.38l3.96,4.16l-1.38,2.78h-2.41l-2.24-2.6l-4.99-0.17l-2.07-2.78v-1.91l3.1-0.87L562.28,77.31L562.28,77.31M634.95,18.15l-2.24-1.39h-2.58l-0.52,1.56l-2.75,1.56l-2.07,0.69l-0.34,2.08l4.82,0.35L634.95,18.15L634.95,18.15M640.28,18.67l-1.21,2.6l-2.41-0.17l-3.79,2.78l-1.03,3.47h2.41l1.38-2.26l3.27,2.43l3.1-1.39l2.24-1.91l-0.86-2.95l-1.21-2.08L640.28,18.67L640.28,18.67M645.28,20.58l1.21,4.86l1.89,4.51l2.07-3.64l3.96-0.87v-2.6l-2.58-1.91L645.28,20.58L645.28,20.58M739.76,12.8l2.69,2.26l1.91-0.79l0.56-3.17L741,8.39l-2.58,1.7l-6.28,0.57v2.83l-6.62,0.11v4.63l7.74,5.76l2.02-1.47l-0.45-4.07l4.94-1.24l-1.01-1.92l-1.79-1.81L739.76,12.8L739.76,12.8M746.94,10.09l1.79,3.39l6.96-0.79l1.91-2.49l-0.45-2.15l-1.91-0.79l-1.79,1.36l-5.16,1.13L746.94,10.09L746.94,10.09M746.49,23.31l-3.48-0.9L741,24.56l-0.9,2.94l4.71-0.45l3.59-1.81L746.49,23.31L746.49,23.31M836.68,3.76l-2.92-0.9L830.4,4.1l-1.68,2.49l2.13,2.83l5.61-2.49l1.12-1.24L836.68,3.76L836.68,3.76M817.97,72.93l1.76,6.08l3.52,1.01l3.52-5.57l-2.01-3.8l0.75-3.29h5.28l-1.26,2.53l0.5,9.12l-7.54,18.74l0.75,4.05l-0.25,6.84l14.07,20.51l2.76,0.76l0.25-16.71l2.76-2.53l-3.02-6.58l2.51-2.79l-5.53-7.34l-3.02,0.25l-1-12.15l7.79-2.03l0.5-3.55l4.02-1.01l2.26,2.03l2.76-11.14l4.77-8.1l3.77-2.03l3.27,0.25v-3.8l-5.28-1.01l-7.29-6.08l3.52-4.05l-3.02-6.84l2.51-2.53l3.02,4.05l7.54,2.79l8.29,0.76l1.01-3.54l-4.27-4.3l4.77-6.58l-10.81-3.8l-2.76,5.57l-3.52-4.56l-19.85-6.84l-18.85,3.29l-2.76,1.52v1.52l4.02,2.03l-0.5,4.81l-7.29-3.04l-16.08,6.33l-2.76-5.82h-11.06l-5.03,5.32l-17.84-4.05l-16.33,3.29l-2.01,5.06l2.51,0.76l-0.25,3.8l-15.83,1.77l1.01,5.06l-14.58-2.53l3.52-6.58l-14.83-0.76l1.26,6.84l-4.77,2.28l-4.02-3.8l-16.33,2.79l-6.28,5.82l-0.25,3.54l-4.02,0.25l-0.5-4.05l12.82-11.14v-7.6l-8.29-2.28l-10.81,3.54l-4.52-4.56h-2.01l-2.51,5.06l2.01,2.28l-14.33,7.85l-12.31,9.37l-7.54,10.38v4.3l8.04,3.29l-4.02,3.04l-8.54-3.04l-3.52,3.04l-5.28-6.08l-1.01,2.28l5.78,18.23l1.51,0.51l4.02-2.03l2.01,1.52v3.29l-3.77-1.52l-2.26,1.77l1.51,3.29l-1.26,8.61l-7.79,0.76l-0.5-2.79l4.52-2.79l1.01-7.6l-5.03-6.58l-1.76-11.39l-8.04-1.27l-0.75,4.05l1.51,2.03l-3.27,2.79l1.26,7.6l4.77,2.03l1.01,5.57l-4.78-3.04l-12.31-2.28l-1.51,4.05l-9.8,3.54l-1.51-2.53l-12.82,7.09l-0.25,4.81l-5.03,0.76l1.51-3.54v-3.54l-5.03-1.77l-3.27,1.27l2.76,5.32l2.01,3.54v2.79l-3.77-0.76l-0.75-0.76l-3.77,4.05l2.01,3.54l-8.54-0.25l2.76,3.55l-0.75,1.52h-4.52l-3.27-2.28l-0.75-6.33l-5.28-2.03v-2.53l11.06,2.28l6.03,0.51l2.51-3.8l-2.26-4.05l-16.08-6.33l-5.55,1.38l-1.9,1.63l0.59,3.75l2.36,0.41l-0.55,5.9l7.28,17.1l-5.26,8.34l-0.36,1.88l2.67,1.88l-2.41,1.59l-1.6,0.03l0.3,7.35l2.21,3.13l0.03,3.04l2.83,0.26l4.33,1.65l4.58,6.3l0.05,1.66l-1.49,2.55l3.42-0.19l3.33,0.96l4.5,6.37l11.08,1.01l-0.48,7.58l-3.82,3.27l0.79,1.28l-3.77,4.05l-1,3.8l2.26,3.29l7.29,2.53l3.02-1.77l19.35,7.34l0.75-2.03l-4.02-3.8v-4.81l-2.51-0.76l0.5-4.05l4.02-4.81l-7.21-5.4l0.5-7.51l7.71-5.07l9.05,0.51l1.51,2.79l9.3,0.51l6.79-3.8l-3.52-3.8l0.75-7.09l17.59-8.61l13.53,6.1l4.52-4.05l13.32,12.66l10.05-1.01l3.52,3.54l9.55,1.01l6.28-8.61l8.04,3.55l4.27,0.76l4.27-3.8l-3.77-2.53l3.27-5.06l9.3,3.04l2.01,4.05l4.02,0.25l2.51-1.77l6.79-0.25l0.75,1.77l7.79,0.51l5.28-5.57l10.81,1.27l3.27-1.27l1-6.08l-3.27-7.34l3.27-2.79h10.3l9.8,11.65l12.56,7.09h3.77l0.5-3.04l4.52-2.79l0.5,16.46l-4.02,0.25v4.05l2.26,2.79l-0.42,3.62l1.67,0.69l1.01-2.53l1.51,0.51l1,1.01l4.52-1.01l4.52-13.17l0.5-16.46l-5.78-13.17l-7.29-8.86l-3.52,0.51v2.79l-8.54-3.29l3.27-7.09l2.76-18.74l11.56-3.54l5.53-3.54h6.03L805.86,96l1.51,2.53l5.28-5.57l3.02,0.25l-0.5-3.29l-4.78-1.01l3.27-11.9L817.97,72.93L817.97,72.93z",
      "name": "Russian Federation"
    },
    "us": {
      "path": "M69.17,53.35l3.46,6.47l2.22-0.5v-2.24L69.17,53.35L69.17,53.35M49.66,110.26l-0.17,3.01l2.16-0.5v-1.34L49.66,110.26L49.66,110.26M46.34,111.6l-4.32,2.18l0.67,2.34l1.66-1.34l3.32-1.51L46.34,111.6L46.34,111.6M28.39,114.44l-2.99-0.67l-0.5,1.34l0.33,2.51L28.39,114.44L28.39,114.44M22.07,114.28l-2.83-1.17l-1,1.84l1.83,1.84L22.07,114.28L22.07,114.28M12.27,111.6l-1.33-1.84l-1.33,0.5v2.51l1.5,1L12.27,111.6L12.27,111.6M1.47,99.71l1.66,1.17l-0.5,1.34H1.47V99.71L1.47,99.71M10,248.7l-0.14,2.33l2.04,1.37l1.22-1.09L10,248.7L10,248.7M15.29,252.13l-1.9,1.37l1.63,2.05l1.9-1.64L15.29,252.13L15.29,252.13M19.1,255.41l-1.63,2.19l0.54,1.37l2.31-1.09L19.1,255.41L19.1,255.41M21.81,259.65l-0.95,5.47l0.95,2.05l3.12-0.96l1.63-2.74l-3.4-3.15L21.81,259.65L21.81,259.65M271.05,281.06l-2.64-0.89l-2.12,1.33l1.06,1.24l3.61,0.53L271.05,281.06L271.05,281.06M93.11,44.89l-8.39,1.99l1.73,9.45l9.13,2.49l0.49,1.99L82.5,65.04l-7.65,12.68l2.71,13.43L82,94.13l3.46-3.23l0.99,1.99l-4.2,4.97l-16.29,7.46l-10.37,2.49l-0.25,3.73l23.94-6.96l9.87-2.74l9.13-11.19l10.12-6.71l-5.18,8.7l5.68,0.75l9.63-4.23l1.73,6.96l6.66,1.49l6.91,6.71l0.49,4.97l-0.99,1.24l1.23,4.72h1.73l0.25-7.96h1.97l0.49,19.64l4.94-4.23l-3.46-20.39h-5.18l-5.68-7.21l27.89-47.25l-27.64-21.63l-30.85,5.97l-1.23,9.45l6.66,3.98l-2.47,6.47L93.11,44.89L93.11,44.89M148.76,158.34l-1,4.02l-3.49-2.26h-1.74l-1,4.27l-12.21,27.36l3.24,23.84l3.99,2.01l0.75,6.53h8.22l7.97,6.02l15.69,1.51l1.74,8.03l2.49,1.76l3.49-3.51l2.74,1.25l2.49,11.54l4.23,2.76l3.49-6.53l10.71-7.78l6.97,3.26l5.98,0.5l0.25-3.76l12.45,0.25l2.49,2.76l0.5,6.27l-1.49,3.51l1.74,6.02h3.74l3.74-5.77l-1.49-2.76l-1.49-6.02l2.24-6.78l10.21-8.78l7.72-2.26l-1-7.28l10.71-11.55l10.71-1.76L272.8,199l10.46-6.02v-8.03l-1-0.5l-3.74,1.25l-0.5,4.92l-12.43,0.15l-9.74,6.47l-15.29,5l-2.44-2.99l6.94-10.5l-3.43-3.27l-2.33-4.44l-4.83-3.88l-5.25-0.44l-9.92-6.77L148.76,158.34L148.76,158.34z",
      "name": "United States of America"
    },
    "mu": {
      "path": "M613.01,398.99l-1.52,1.99l0.3,2.15l3.2-2.61L613.01,398.99L613.01,398.99z",
      "name": "Mauritius"
    },
    "re": {
      "path": "M607.38,402.37l-2.28,0.15l-0.15,1.99l1.52,0.31l2.28-1.07L607.38,402.37L607.38,402.37z",
      "name": "Reunion"
    },
    "mg": {
      "path": "M592.3,372.92l-2.13,5.06l-3.65,6.44l-6.39,0.46l-2.74,3.22l0.46,9.82l-3.96,4.6l0.46,7.82l3.35,3.83l3.96-0.46l3.96-2.92l-0.91-4.6l9.13-15.8l-1.83-1.99l1.83-3.83l1.98,0.61l0.61-1.53l-1.83-7.82l-1.07-3.22L592.3,372.92L592.3,372.92z",
      "name": "Madagascar"
    },
    "km": {
      "path": "M577.69,371.23l0.46,1.53l1.98,0.31l0.76-1.99L577.69,371.23L577.69,371.23M580.58,374.3l0.76,1.69h1.22l0.61-2.15L580.58,374.3L580.58,374.3z",
      "name": "Comoros"
    },
    "sc": {
      "path": "M602.35,358.34l-0.61,1.23l1.67,1.38l1.22-1.38L602.35,358.34L602.35,358.34M610.88,349.14l-1.83,1.23l1.37,2.15h1.83L610.88,349.14L610.88,349.14M611.64,354.51l-1.22,1.38l0.91,1.38l1.67,0.31l0.15-2.92L611.64,354.51L611.64,354.51z",
      "name": "Seychelles"
    },
    "mv": {
      "path": "M656.4,320.76l0.3,2.61l1.67,0.61l0.3-2.3L656.4,320.76L656.4,320.76M658.53,326.28l-0.15,3.22l1.22,0.61l1.07-2.15L658.53,326.28L658.53,326.28M658.84,332.57l-1.07,1.07l1.22,1.07l1.52-1.07L658.84,332.57L658.84,332.57z",
      "name": "Maldives"
    },
    "pt": {
      "path": "M372.64,217.02l-1.36,1.37l2.44,1.37l0.27-1.91L372.64,217.02L372.64,217.02M379.97,216.2l-1.63,1.09l1.36,1.09l2.17-0.55L379.97,216.2L379.97,216.2M381.05,220.03l-0.81,2.19l1.08,1.37l1.36-1.09L381.05,220.03L381.05,220.03M387.56,224.4l-0.54,1.37l0.81,0.82l2.17-1.37L387.56,224.4L387.56,224.4M408.18,236.42l-1.08,1.37l1.08,1.37l1.63-0.82L408.18,236.42L408.18,236.42M430.93,211.24l-0.62,8.65l-1.77,1.6l0.18,0.98l1.24,2.05l-0.8,2.5l1.33,0.45l3.1-0.36l-0.18-2.5l2.03-11.59l-0.44-1.6L430.93,211.24L430.93,211.24z",
      "name": "Portugal"
    },
    "es": {
      "path": "M415.62,253.73l-1.75,1.01l0.81,0.82L415.62,253.73L415.62,253.73M409.54,253.92l-2.17,0.55l1.08,1.64h1.63L409.54,253.92L409.54,253.92M404.38,252.28l-1.36,1.37l1.9,1.64l1.08-2.46L404.38,252.28L404.38,252.28M448.36,205h-12.74l-2.57-1.16l-1.24,0.09l-1.5,3.12l0.53,3.21l4.87,0.45l0.62,2.05l-2.12,11.95l0.09,2.14l3.45,1.87l3.98,0.27l7.96-1.96l3.89-4.9l0.09-4.99l6.9-6.24l0.35-2.76l-6.28-0.09L448.36,205L448.36,205M461.1,217.21l-1.59,0.54l0.35,1.43h2.3l0.97-1.07L461.1,217.21L461.1,217.21z",
      "name": "Spain"
    },
    "cv": {
      "path": "M387.56,290.54l-1.9,1.09l1.36,1.09l1.63-0.82L387.56,290.54L387.56,290.54M392.23,292.74l-1.24,1.1l0.88,1.63l2.12-0.95L392.23,292.74L392.23,292.74M389.52,295.83l-1.59,0.95l1.71,2.29l1.35-0.71L389.52,295.83L389.52,295.83z",
      "name": "Cape Verde"
    },
    "pf": {
      "path": "M27.25,402.68l-1.9-0.14l-0.14,1.78l1.49,0.96l1.77-1.09L27.25,402.68L27.25,402.68M33.77,404.6l-2.72,1.78l2.04,2.46l1.77-0.41l0.95-1.23L33.77,404.6L33.77,404.6z",
      "name": "French Polynesia"
    },
    "kn": {
      "path": "M276.6,283.37l-1.5,0.62l0.53,1.33l1.76-1.15l-0.35-0.36L276.6,283.37L276.6,283.37z",
      "name": "Saint Kitts and Nevis"
    },
    "ag": {
      "path": "M279.07,284.88l-0.88,1.87l1.06,1.42l1.32-1.15L279.07,284.88L279.07,284.88z",
      "name": "Antigua and Barbuda"
    },
    "dm": {
      "path": "M282.07,290.03l-1.06,0.98l0.79,1.6l1.5-0.44L282.07,290.03L282.07,290.03z",
      "name": "Dominica"
    },
    "lc": {
      "path": "M281.98,294.03l-0.71,1.51l1.15,1.24l1.5-0.8L281.98,294.03L281.98,294.03z",
      "name": "Saint Lucia"
    },
    "bb": {
      "path": "M282.07,297.85l-1.23,0.89l0.97,1.78l1.59-0.89L282.07,297.85L282.07,297.85z",
      "name": "Barbados"
    },
    "gd": {
      "path": "M280.57,301.31l-1.15,1.15l0.44,0.71h1.41l0.44-1.16L280.57,301.31L280.57,301.31z",
      "name": "Grenada"
    },
    "tt": {
      "path": "M282.24,304.78l-1.06,0.98l-1.15,0.18v1.42l2.12,1.95l0.88-1.42l0.53-1.6l-0.18-1.33L282.24,304.78L282.24,304.78z",
      "name": "Trinidad and Tobago"
    },
    "do": {
      "path": "M263.11,280.44l-5.29-3.46l-2.5-0.85l-0.84,6l0.88,1.69l1.15-1.33l3.35-0.89l2.91,0.62L263.11,280.44L263.11,280.44z",
      "name": "Dominican Republic"
    },
    "ht": {
      "path": "M250.86,275.38l3.44,0.36l-0.41,4.22l-0.34,2.22l-4.01-0.22l-0.71,1.07l-1.23-0.09l-0.44-2.31l4.23-0.35l-0.26-2.4l-1.94-0.8L250.86,275.38L250.86,275.38z",
      "name": "Haiti"
    },
    "fk": {
      "path": "M307.95,508.18l-2.63-0.29l-2.62,1.76l1.9,2.06L307.95,508.18L307.95,508.18M310.57,506.86l-0.87,2.79l-2.48,2.2l0.15,0.73l4.23-1.62l1.75-2.2L310.57,506.86L310.57,506.86z",
      "name": "Falkland Islands"
    },
    "is": {
      "path": "M406.36,117.31l-1.96-1.11l-2.64,1.67l-2.27,2.1l0.06,1.17l2.94,0.37l-0.18,2.1l-1.04,1.05l0.25,0.68l2.94,0.19v3.4l4.23,0.74l2.51,1.42l2.82,0.12l4.84-2.41l3.74-4.94l0.06-3.34l-2.27-1.92l-1.9-1.61l-0.86,0.62l-1.29,1.67l-1.47-0.19l-1.47-1.61l-1.9,0.18l-2.76,2.29l-1.66,1.79l-0.92-0.8l-0.06-1.98l0.92-0.62L406.36,117.31L406.36,117.31z",
      "name": "Iceland"
    },
    "no": {
      "path": "M488.26,53.96l-1.65-1.66l-3.66,1.78h-6.72L475.17,58l3.77,3.33l1.65-0.24l2.36-4.04l2,1.43l-1.42,2.85l-0.71,4.16l1.65,2.61l3.54-5.94l4.6-5.59l-1.77-1.54L488.26,53.96L488.26,53.96M490.26,46.83l-2.95,2.73l1.77,2.73h3.18l1.3,1.78l3.89,2.02l4.48-2.61l3.07-2.61l-1.06-2.14l-3.07-1.78l-2.24,2.02l-1.53-1.9l-1.18,0.12l-1.53,3.33l-2.24-2.26l-0.24-1.54L490.26,46.83L490.26,46.83M496.98,59.07l-2.36,2.14l-2,1.54l0.94,1.66l1.89,0.59l3.07-1.43l1.42-1.78l-1.3-2.14L496.98,59.07L496.98,59.07M515.46,102.14l2.02-1.48L517.3,99l-1.28-0.74l0.18-2.03h1.1v-1.11l-4.77-1.29l-7.15,0.74l-0.73,3.14L503,97.16l-1.1-1.85l-3.49,0.18L498.04,99l-1.65,0.74l-0.92-1.85l-7.34,5.91l1.47,1.66l-2.75,1.29l-6.24,12.38l-2.2,1.48l0.18,1.11l2.2,1.11l-0.55,2.4l-3.67-0.19l-1.1-1.29l-2.38,2.77l-1.47,1.11l-0.37,2.59l-1.28,0.74l-3.3,0.74l-1.65,5.18l1.1,8.5l1.28,3.88l1.47,1.48l3.3-0.18l4.77-4.62l1.83-3.14l0.55,4.62l3.12-5.54l0.18-15.53l2.54-1.6l0.76-8.57l7.7-11.09l3.67-1.29l1.65-2.03l5.5,1.29l2.75,1.66l0.92-4.62l4.59-2.77L515.46,102.14L515.46,102.14z",
      "name": "Norway"
    },
    "lk": {
      "path": "M680.54,308.05l0.25,2.72l0.25,1.98l-1.47,0.25l0.74,4.45l2.21,1.24l3.43-1.98l-0.98-4.69l0.25-1.73l-3.19-2.96L680.54,308.05L680.54,308.05z",
      "name": "Sri Lanka"
    },
    "cu": {
      "path": "M220.85,266.92v1.27l5.32,0.1l2.51-1.46l0.39,1.07l5.22,1.27l4.64,4.19l-1.06,1.46l0.19,1.66l3.87,0.97l3.87-1.75l1.74-1.75l-2.51-1.27l-12.95-7.6l-4.54-0.49L220.85,266.92L220.85,266.92z",
      "name": "Cuba"
    },
    "bs": {
      "path": "M239.61,259.13l-1.26-0.39l-0.1,2.43l1.55,1.56l1.06-1.56L239.61,259.13L239.61,259.13M242.12,262.93l-1.74,0.97l1.64,2.34l0.87-1.17L242.12,262.93L242.12,262.93M247.73,264.68l-1.84-0.1l0.19,1.17l1.35,1.95l1.16-1.27L247.73,264.68L247.73,264.68M246.86,262.35l-3-1.27l-0.58-3.02l1.16-0.49l1.16,2.34l1.16,0.88L246.86,262.35L246.86,262.35M243.96,256.21l-1.55-0.39l-0.29-1.95l-1.64-0.58l1.06-1.07l1.93,0.68l1.45,0.88L243.96,256.21L243.96,256.21z",
      "name": "Bahamas"
    },
    "jm": {
      "path": "M238.93,279.59l-3.48,0.88v0.97l2.03,1.17h2.13l1.35-1.56L238.93,279.59L238.93,279.59z",
      "name": "Jamaica"
    },
    "ec": {
      "path": "M230.2,335.85l-4.73,2.94l-0.34,4.36l-0.95,1.43l2.98,2.86l-1.29,1.41l0.3,3.6l5.33,1.27l8.07-9.55l-0.02-3.33l-3.87-0.25L230.2,335.85L230.2,335.85z",
      "name": "Ecuador"
    },
    "ca": {
      "path": "M203.73,35.89l0.22,4.02l-7.98,8.27l2,6.7l5.76-1.56l3.33-4.92l8.42-3.13l6.87-0.45l-5.32-5.81l-2.66,2.01l-2-0.67l-1.11-2.46l-2.44-2.46L203.73,35.89L203.73,35.89M214.15,24.05l-1.77,3.13l8.65,3.13l3.1-4.69l1.33,3.13h2.22l4.21-4.69l-5.1-1.34l-2-1.56l-2.66,2.68L214.15,24.05L214.15,24.05M229.23,30.31l-6.87,2.9v2.23l8.87,3.35l-2,2.23l1.33,2.9l5.54-2.46h4.66l2.22,3.57l3.77-3.8l-0.89-3.58l-3.1,1.12l-0.44-4.47l1.55-2.68h-1.55l-2.44,1.56l-1.11,0.89l0.67,3.13l-1.77,1.34l-2.66-0.22l-0.67-4.02L229.23,30.31L229.23,30.31M238.32,23.38l-0.67,2.23l4.21,2.01l3.1-1.79l-0.22-1.34L238.32,23.38L238.32,23.38M241.64,19.58l-3.1,1.12l0.22,1.56l6.87-0.45l-0.22-1.56L241.64,19.58L241.64,19.58M256.5,23.38l-0.44,1.56l-1.11,1.56v2.23l4.21-0.67l4.43,3.8h1.55v-3.8l-4.43-4.92L256.5,23.38L256.5,23.38M267.81,27.85l1.77,2.01l-1.55,2.68l1.11,2.9l4.88-2.68v-2.01l-2.88-3.35L267.81,27.85L267.81,27.85M274.24,22.71l0.22,3.57h5.99l1.55,1.34l-0.22,1.56l-5.32,0.67l3.77,5.14l5.1,0.89l7.09-3.13l-10.2-15.42l-3.1,2.01l0.22,2.68l-3.55-1.34L274.24,22.71L274.24,22.71M222.58,47.96l-8.42,2.23l-4.88,4.25l0.44,4.69l8.87,2.68l-2,4.47l-6.43-4.02l-1.77,3.35l4.21,2.9l-0.22,4.69l6.43,1.79l7.76-0.45l1.33-2.46l5.76,6.48l3.99-1.34l0.67-4.47l2.88,2.01l0.44-4.47l-3.55-2.23l0.22-14.07l-3.1-2.46L231.89,56L222.58,47.96L222.58,47.96M249.63,57.79l-2.88-1.34l-1.55,2.01l3.1,4.92l0.22,4.69l6.65-4.02v-5.81l2.44-2.46l-2.44-1.79h-3.99L249.63,57.79L249.63,57.79M263.82,55.78l-4.66,3.8l1.11,4.69h2.88l1.33-2.46l2,2.01l2-0.22l5.32-4.47L263.82,55.78L263.82,55.78M263.37,48.4l-1.11,2.23l4.88,1.79l1.33-2.01L263.37,48.4L263.37,48.4M260.49,39.91l-4.88,0.67l-2.88,2.68l5.32,0.22l-1.55,4.02l1.11,1.79l1.55-0.22l3.77-6.03L260.49,39.91L260.49,39.91M268.92,38.35l-2.66,0.89l0.44,3.57l4.43,2.9l0.22,2.23l-1.33,1.34l0.67,4.47l17.07,5.58l4.66,1.56l4.66-4.02l-5.54-4.47l-5.1,1.34l-7.09-0.67l-2.66-2.68l-0.67-7.37l-4.43-2.23L268.92,38.35L268.92,38.35M282.88,61.59L278,61.14l-5.76,2.23l-3.1,4.24l0.89,11.62l9.53,0.45l9.09,4.47l6.43,7.37l4.88-0.22l-1.33,6.92l-4.43,7.37l-4.88,2.23l-3.55-0.67l-1.77-1.56l-2.66,3.57l1.11,3.57l3.77,0.22l4.66-2.23l3.99,10.28l9.98,6.48l6.87-8.71l-5.76-9.38l3.33-3.8l4.66,7.82l8.42-7.37l-1.55-3.35l-5.76,1.79l-3.99-10.95l3.77-6.25l-7.54-8.04l-4.21,2.9l-3.99-8.71l-8.42,1.12l-2.22-10.5l-6.87,4.69l-0.67,5.81h-3.77l0.44-5.14L282.88,61.59L282.88,61.59M292.86,65.61l-1.77,1.79l1.55,2.46l7.32,0.89l-4.66-4.92L292.86,65.61L292.86,65.61M285.77,40.36v2.01l-4.88,1.12l1.33,2.23l5.54,2.23l6.21,0.67l4.43,3.13l4.43-2.46l-3.1-3.13h3.99l2.44-2.68l5.99-0.89v-1.34l-3.33-2.23l0.44-2.46l9.31,1.56l13.75-5.36l-5.1-1.56l1.33-1.79h10.64l1.77-1.79l-21.51-7.6l-5.1-1.79l-5.54,4.02l-6.21-5.14l-3.33-0.22l-0.67,4.25l-4.21-3.8l-4.88,1.56l0.89,2.46l7.32,1.56l-0.44,3.57l3.99,2.46l9.76-2.46l0.22,3.35l-7.98,3.8l-4.88-3.8l-4.43,0.45l4.43,6.26l-2.22,1.12l-3.33-2.9l-2.44,1.56l2.22,4.24h3.77l-0.89,4.02l-3.1-0.45l-3.99-4.25L285.77,40.36L285.77,40.36M266.01,101.85l-4.23,5.32l-0.26,5.86l3.7-2.13h4.49l3.17,2.93l2.91-2.4L266.01,101.85L266.01,101.85M317.52,171.05l-10.57,10.12l1.06,2.4l12.94,4.79l1.85-3.19l-1.06-5.32l-4.23,0.53l-2.38-2.66l3.96-3.99L317.52,171.05L317.52,171.05M158.22,48.66l1.99,3.01l1,4.02l4.98,1.25l3.49-3.76l2.99,1.51l8.47,0.75l5.98-2.51l1,8.28h3.49V57.7l3.49,0.25l8.72,10.29l5.73,3.51l-2.99,4.77l1.25,1.25L219,80.03l0.25,5.02l2.99,0.5l0.75-7.53l4.73-1.25l3.49,5.27l7.47,3.51l3.74,0.75l2.49-3.01l0.25-4.77l4.48-2.76l1.49,4.02l-3.99,7.03l0.5,3.51l2.24-3.51l4.48-4.02l0.25-5.27l-2.49-4.02l0.75-3.26l5.98-3.01l2.74,2.01l0.5,17.57l4.23-3.76l2.49,1.51l-3.49,6.02l4.48,1l6.48-10.04l5.48,5.77l-2.24,10.29l-5.48,3.01l-5.23-2.51l-9.46,2.01l1,3.26l-2.49,4.02l-7.72,1.76l-8.72,6.78l-7.72,10.29l-1,3.26l5.23,2.01l1.99,5.02l7.22,7.28l11.46,5.02l-2.49,11.54l-0.25,3.26l2.99,2.01l3.99-5.27l0.5-10.04l6.23-0.25l2.99-5.77l0.5-8.78l7.97-15.56l9.96,3.51l5.23,7.28l-2.24,7.28l3.99,2.26l9.71-6.53l2.74,17.82l8.97,10.79l0.25,5.52l-9.96,2.51l-4.73,5.02l-9.96-2.26l-4.98-0.25l-8.72,6.78l5.23-1.25l6.48-1.25l1.25,1.51l-1.74,5.52l0.25,5.02l2.99,2.01l2.99-0.75l1.5-2.26h1.99l-3.24,6.02l-6.23,0.25l-2.74,4.02h-3.49l-1-3.01l4.98-5.02l-5.98,2.01l-0.27-8.53l-1.72-1l-5.23,2.26l-0.5,4.27h-11.96l-10.21,7.03l-13.7,4.52l-1.49-2.01l6.9-10.3l-3.92-3.77l-2.49-4.78l-5.07-3.87l-5.44-0.45l-9.75-6.83l-70.71-11.62l-1.17-4.79l-6.48-6.02v-5.02l1-4.52l-0.5-2.51l-2.49-2.51l-0.5-4.02l6.48-4.52l-3.99-21.58l-5.48-0.25l-4.98-6.53L158.22,48.66L158.22,48.66M133.83,128.41l-1.7,3.26l0.59,2.31l1.11,0.69l-0.26,0.94l-1.19,0.34l0.34,3.43l1.28,1.29l1.02-1.11l-1.28-3.34l0.76-2.66l1.87-2.49l-1.36-2.31L133.83,128.41L133.83,128.41M139.45,147.95l-1.53,0.6l2.81,3.26l0.68,3.86l2.81,3l2.38-0.43v-3.94l-2.89-1.8L139.45,147.95L139.45,147.95z",
      "name": "Canada"
    },
    "gt": {
      "path": "M194.88,291.52l5.93,4.34l5.98-7.43l-1.02-1.54l-2.04-0.07v-4.35l-1.53-0.93l-4.63,1.38l1.77,4.08L194.88,291.52L194.88,291.52z",
      "name": "Guatemala"
    },
    "hn": {
      "path": "M207.55,288.78l9.24-0.35l2.74,3.26l-1.71-0.39l-3.29,0.14l-4.3,4.04l-1.84,4.09l-1.21-0.64l-0.01-4.48l-2.66-1.78L207.55,288.78L207.55,288.78z",
      "name": "Honduras"
    },
    "sv": {
      "path": "M201.65,296.27l4.7,2.34l-0.07-3.71l-2.41-1.47L201.65,296.27L201.65,296.27z",
      "name": "El Salvador"
    },
    "ni": {
      "path": "M217.74,292.11l2.19,0.44l0.07,4.49l-2.55,7.28l-6.87-0.68l-1.53-3.51l2.04-4.26l3.87-3.6L217.74,292.11L217.74,292.11z",
      "name": "Nicaragua"
    },
    "cr": {
      "path": "M217.38,304.98l1.39,2.72l1.13,1.5l-1.52,4.51l-2.9-2.04l-4.74-4.34v-2.87L217.38,304.98L217.38,304.98z",
      "name": "Costa Rica"
    },
    "pa": {
      "path": "M220.59,309.61l-1.46,4.56l4.82,1.25l2.99,0.59l0.51-3.53l3.21-1.62l2.85,1.47l1.12,1.79l1.36-0.16l1.07-3.25l-3.56-1.47l-2.7-1.47l-2.7,1.84l-3.21,1.62l-3.28-1.32L220.59,309.61L220.59,309.61z",
      "name": "Panama"
    },
    "co": {
      "path": "M253.73,299.78l-2.06-0.21l-13.62,11.23l-1.44,3.95l-1.86,0.21l0.83,8.73l-4.75,11.65l5.16,4.37l6.61,0.42l4.54,6.66l6.6,0.21l-0.21,4.99H256l2.68-9.15l-2.48-3.12l0.62-5.82l5.16-0.42l-0.62-13.52l-11.56-3.74l-2.68-7.28L253.73,299.78L253.73,299.78z",
      "name": "Colombia"
    },
    "ve": {
      "path": "M250.46,305.92l0.44,2.59l3.25,1.03l0.74-4.77l3.43-3.55l3.43,4.02l7.89,2.15l6.68-1.4l4.55,5.61l3.43,2.15l-3.76,5.73l1.26,4.34l-2.15,2.66l-2.23,1.87l-4.83-2.43l-1.11,1.12v3.46l3.53,1.68l-2.6,2.81l-2.6,2.81l-3.43-0.28l-3.45-3.79l-0.73-14.26l-11.78-4.02l-2.14-6.27L250.46,305.92L250.46,305.92z",
      "name": "Venezuela"
    },
    "gy": {
      "path": "M285.05,314.13l7.22,6.54l-2.87,3.32l-0.23,1.97l3.77,3.89l-0.09,3.74l-6.56,2.5l-3.93-5.31l0.84-6.38l-1.68-4.75L285.05,314.13L285.05,314.13z",
      "name": "Guyana"
    },
    "sr": {
      "path": "M293.13,321.14l2.04,1.87l3.16-1.96l2.88,0.09l-0.37,1.12l-1.21,2.52l-0.19,6.27l-5.75,2.34l0.28-4.02l-3.71-3.46l0.19-1.78L293.13,321.14L293.13,321.14z",
      "name": "Suriname"
    },
    "gf": {
      "path": "M302.13,321.8l5.85,3.65l-3.06,6.08l-1.11,1.4l-3.25-1.87l0.09-6.55L302.13,321.8L302.13,321.8z",
      "name": "French Guiana"
    },
    "pe": {
      "path": "M225.03,349.52l-1.94,1.96l0.13,3.13l16.94,30.88l17.59,11.34l2.72-4.56l0.65-10.03l-1.42-6.25l-4.79-8.08l-2.85,0.91l-1.29,1.43l-5.69-6.52l1.42-7.69l6.6-4.3l-0.52-4.04l-6.72-0.26l-3.49-5.86l-1.94-0.65l0.13,3.52l-8.66,10.29l-6.47-1.56L225.03,349.52L225.03,349.52z",
      "name": "Peru"
    },
    "bo": {
      "path": "M258.71,372.79l8.23-3.59l2.72,0.26l1.81,7.56l12.54,4.17l2.07,6.39l5.17,0.65l2.2,5.47l-1.55,4.95l-8.41,0.65l-3.1,7.95l-6.6-0.13l-2.07-0.39l-3.81,3.7l-1.88-0.18l-6.47-14.99l1.79-2.68l0.63-10.6l-1.6-6.31L258.71,372.79L258.71,372.79z",
      "name": "Bolivia"
    },
    "py": {
      "path": "M291.76,399.51l2.2,2.4l-0.26,5.08l6.34-0.39l4.79,6.13l-0.39,5.47l-3.1,4.69l-6.34,0.26l-0.26-2.61l1.81-4.3l-6.21-3.91h-5.17l-3.88-4.17l2.82-8.06L291.76,399.51L291.76,399.51z",
      "name": "Paraguay"
    },
    "uy": {
      "path": "M300.36,431.93l-2.05,2.19l0.85,11.78l6.44,1.87l8.19-8.21L300.36,431.93L300.36,431.93z",
      "name": "Uruguay"
    },
    "ar": {
      "path": "M305.47,418.2l1.94,1.82l-7.37,10.95l-2.59,2.87l0.9,12.51l5.69,6.91l-4.78,8.34l-3.62,1.56h-4.14l1.16,6.51l-6.47,2.22l1.55,5.47l-3.88,12.38l4.79,3.91l-2.59,6.38l-4.4,6.91l2.33,4.82l-5.69,0.91l-4.66-5.73l-0.78-17.85l-7.24-30.32l2.19-10.6l-4.66-13.55l3.1-17.59l2.85-3.39l-0.7-2.57l3.66-3.34l8.16,0.56l4.56,4.87l5.27,0.09l5.4,3.3l-1.59,3.72l0.38,3.76l7.65-0.36L305.47,418.2L305.47,418.2M288.92,518.79l0.26,5.73l4.4-0.39l3.75-2.48l-6.34-1.3L288.92,518.79L288.92,518.79z",
      "name": "Argentina"
    },
    "cl": {
      "path": "M285.04,514.1l-4.27,9.38l7.37,0.78l0.13-6.25L285.04,514.1L285.04,514.1M283.59,512.63l-3.21,3.55l-0.39,4.17l-6.21-3.52l-6.6-9.51l-1.94-3.39l2.72-3.52l-0.26-4.43l-3.1-1.3l-2.46-1.82l0.52-2.48l3.23-0.91l0.65-14.33l-5.04-2.87l-3.29-74.59l0.85-1.48l6.44,14.85l2.06,0.04l0.67,2.37l-2.74,3.32l-3.15,17.87l4.48,13.76l-2.07,10.42l7.3,30.64l0.77,17.92l5.23,6.05L283.59,512.63L283.59,512.63M262.28,475.14l-1.29,1.95l0.65,3.39l1.29,0.13l0.65-4.3L262.28,475.14L262.28,475.14z",
      "name": "Chile"
    },
    "br": {
      "path": "M314.24,438.85l6.25-12.02l0.23-10.1l11.66-7.52h6.53l5.13-8.69l0.93-16.68l-2.1-4.46l12.36-11.28l0.47-12.45l-16.79-8.22l-20.28-6.34l-9.56-0.94l2.57-5.4l-0.7-8.22l-2.09-0.69l-3.09,6.14l-1.62,2.03l-4.16-1.84l-13.99,4.93l-4.66-5.87l0.75-6.13l-4.4,4.48l-4.86-2.62l-0.49,0.69l0.01,2.13l4.19,2.25l-6.29,6.63l-3.97-0.04l-4.02-4.09l-4.55,0.14l-0.56,4.86l2.61,3.17l-3.08,9.87l-3.6,0.28l-5.73,3.62l-1.4,7.11l4.97,5.32l0.91-1.03l3.49-0.94l2.98,5.02l8.53-3.66l3.31,0.19l2.28,8.07l12.17,3.86l2.1,6.44l5.18,0.62l2.47,6.15l-1.67,5.47l2.18,2.86l-0.32,4.26l5.84-0.55l5.35,6.76l-0.42,4.75l3.17,2.68l-7.6,11.51L314.24,438.85L314.24,438.85z",
      "name": "Brazil"
    },
    "bz": {
      "path": "M204.56,282.4l-0.05,3.65h0.84l2.86-5.34h-1.94L204.56,282.4L204.56,282.4z",
      "name": "Belize"
    },
    "mn": {
      "path": "M673.8,170.17l5.82-7.72l6.99,3.23l4.75,1.27l5.82-5.34l-3.95-2.91l2.6-3.67l7.76,2.74l2.69,4.41l4.86,0.13l2.54-1.89l5.23-0.21l1.14,1.94l8.69,0.44l5.5-5.61l7.61,0.8l-0.44,7.64l3.33,0.76l4.09-1.86l4.33,2.14l-0.1,1.08l-3.14,0.09l-3.27,6.86l-2.54,0.25l-9.88,12.91l-10.09,4.45l-6.31,0.49l-5.24-3.38l-6.7,3.58l-6.6-2.05l-1.87-4.79l-12.5-0.88l-6.4-10.85l-3.11-0.2L673.8,170.17L673.8,170.17z",
      "name": "Mongolia"
    },
    "kp": {
      "path": "M778.28,194.27l1.84,0.77l0.56,6.44l3.65,0.21l3.44-4.03l-1.19-1.06l0.14-4.32l3.16-3.82l-1.61-2.9l1.05-1.2l0.58-3l-1.83-0.83l-1.56,0.79l-1.93,5.86l-3.12-0.27l-3.61,4.26L778.28,194.27L778.28,194.27z",
      "name": "North Korea"
    },
    "kr": {
      "path": "M788.34,198.2l6.18,5.04l1.05,4.88l-0.21,2.62l-3.02,3.4l-2.6,0.14l-2.95-6.37l-1.12-3.04l1.19-0.92l-0.28-1.27l-1.47-0.66L788.34,198.2L788.34,198.2z",
      "name": "South Korea"
    },
    "kz": {
      "path": "M576.69,188.62l4.1-1.75l4.58-0.16l0.32,7h-2.68l-2.05,3.34l2.68,4.45l3.95,2.23l0.36,2.55l1.45-0.48l1.34-1.59l2.21,0.48l1.11,2.23h2.84v-2.86l-1.74-5.09l-0.79-4.13l5.05-2.23l6.79,1.11l4.26,4.29l9.63-0.95l5.37,7.63l6.31,0.32l1.74-2.86l2.21-0.48l0.32-3.18l3.31-0.16l1.74,2.07l1.74-4.13l14.99,2.07l2.52-3.34l-4.26-5.25l5.68-12.4l4.58,0.32l3.16-7.63l-6.31-0.64l-3.63-3.5l-10,1.16l-12.88-12.45l-4.54,4.03l-13.77-6.25l-16.89,8.27l-0.47,5.88l3.95,4.61l-7.7,4.35l-9.99-0.22l-2.09-3.07l-7.83-0.43l-7.42,4.77l-0.16,6.52L576.69,188.62L576.69,188.62z",
      "name": "Kazakhstan"
    },
    "tm": {
      "path": "M593.85,207.59l-0.62,2.63h-4.15v3.56l4.46,2.94l-1.38,4.03v1.86l1.85,0.31l2.46-3.25l5.54-1.24l11.84,4.49l0.15,3.25l6.61,0.62l7.38-7.75l-0.92-2.48l-4.92-1.08l-13.84-8.99l-0.62-3.25h-5.23l-2.31,4.34h-2.31L593.85,207.59L593.85,207.59z",
      "name": "Turkmenistan"
    },
    "uz": {
      "path": "M628.92,219.06l3.08,0.16v-5.27l-2.92-1.7l4.92-6.2h2l2,2.33l5.23-2.01l-7.23-2.48l-0.28-1.5l-1.72,0.42l-1.69,2.94l-7.29-0.24l-5.35-7.57l-9.4,0.93l-4.48-4.44l-6.2-1.05l-4.5,1.83l2.61,8.68l0.03,2.92l1.9,0.04l2.33-4.44l6.2,0.08l0.92,3.41l13.29,8.82l5.14,1.18L628.92,219.06L628.92,219.06z",
      "name": "Uzbekistan"
    },
    "tj": {
      "path": "M630.19,211.84l4.11-5.1h1.55l0.54,1.14l-1.9,1.38v1.14l1.25,0.9l6.01,0.36l1.96-0.84l0.89,0.18l0.6,1.92l3.57,0.36l1.79,3.78l-0.54,1.14l-0.71,0.06l-0.71-1.44l-1.55-0.12l-2.68,0.36l-0.18,2.52l-2.68-0.18l0.12-3.18l-1.96-1.92l-2.98,2.46l0.06,1.62l-2.62,0.9h-1.55l0.12-5.58L630.19,211.84L630.19,211.84z",
      "name": "Tajikistan"
    },
    "kg": {
      "path": "M636.81,199.21l-0.31,2.53l0.25,1.56l8.7,2.92l-7.64,3.08l-0.87-0.72l-1.65,1.06l0.08,0.58l0.88,0.4l5.36,0.14l2.72-0.82l3.49-4.4l4.37,0.76l5.27-7.3l-14.1-1.92l-1.95,4.73l-2.46-2.64L636.81,199.21L636.81,199.21z",
      "name": "Kyrgyz Republic"
    },
    "af": {
      "path": "M614.12,227.05l1.59,12.46l3.96,0.87l0.37,2.24l-2.84,2.37l5.29,4.27l10.28-3.7l0.82-4.38l6.47-4.04l2.48-9.36l1.85-1.99l-1.92-3.34l6.26-3.87l-0.8-1.12l-2.89,0.18l-0.26,2.66l-3.88-0.04l-0.07-3.55l-1.25-1.49l-2.1,1.91l0.06,1.75l-3.17,1.2l-5.85-0.37l-7.6,7.96L614.12,227.05L614.12,227.05z",
      "name": "Afghanistan"
    },
    "pk": {
      "path": "M623.13,249.84l2.6,3.86l-0.25,1.99l-3.46,1.37l-0.25,3.24h3.96l1.36-1.12h7.54l6.8,5.98l0.87-2.87h5.07l0.12-3.61l-5.19-4.98l1.11-2.74l5.32-0.37l7.17-14.95l-3.96-3.11l-1.48-5.23l9.64-0.87l-5.69-8.1l-3.03-0.82l-1.24,1.5l-0.93,0.07l-5.69,3.61l1.86,3.12l-2.1,2.24l-2.6,9.59l-6.43,4.11l-0.87,4.49L623.13,249.84L623.13,249.84z",
      "name": "Pakistan"
    },
    "in": {
      "path": "M670.98,313.01l4.58-2.24l2.72-9.84l-0.12-12.08l15.58-16.82v-3.99l3.21-1.25l-0.12-4.61l-3.46-6.73l1.98-3.61l4.33,3.99l5.56,0.25v2.24l-1.73,1.87l0.37,1l2.97,0.12l0.62,3.36h0.87l2.23-3.99l1.11-10.46l3.71-2.62l0.12-3.61l-1.48-2.87l-2.35-0.12l-9.2,6.08l0.58,3.91l-6.46-0.02l-2.28-2.79l-1.24,0.16l0.42,3.88l-13.97-1l-8.66-3.86l-0.46-4.75l-5.77-3.58l-0.07-7.37l-3.96-4.53l-9.1,0.87l0.99,3.96l4.46,3.61l-7.71,15.78l-5.16,0.39l-0.85,1.9l5.08,4.7l-0.25,4.75l-5.19-0.08l-0.56,2.36l4.31-0.19l0.12,1.87l-3.09,1.62l1.98,3.74l3.83,1.25l2.35-1.74l1.11-3.11l1.36-0.62l1.61,1.62l-0.49,3.99l-1.11,1.87l0.25,3.24L670.98,313.01L670.98,313.01z",
      "name": "India"
    },
    "np": {
      "path": "M671.19,242.56l0.46,4.27l8.08,3.66l12.95,0.96l-0.49-3.13l-8.65-2.38l-7.34-4.37L671.19,242.56L671.19,242.56z",
      "name": "Nepal"
    },
    "bt": {
      "path": "M695.4,248.08l1.55,2.12l5.24,0.04l-0.53-2.9L695.4,248.08L695.4,248.08z",
      "name": "Bhutan"
    },
    "bd": {
      "path": "M695.57,253.11l-1.31,2.37l3.4,6.46l0.1,5.04l0.62,1.35l3.99,0.07l2.26-2.17l1.64,0.99l0.33,3.07l1.31-0.82l0.08-3.92l-1.1-0.13l-0.69-3.33l-2.78-0.1l-0.69-1.85l1.7-2.27l0.03-1.12h-4.94L695.57,253.11L695.57,253.11z",
      "name": "Bangladesh"
    },
    "mm": {
      "path": "M729.44,303.65l-2.77-4.44l2.01-2.82l-1.9-3.49l-1.79-0.34l-0.34-5.86l-2.68-5.19l-0.78,1.24l-1.79,3.04l-2.24,0.34l-1.12-1.47l-0.56-3.95l-1.68-3.16l-6.84-6.45l1.68-1.11l0.31-4.67l2.5-4.2l1.08-10.45l3.62-2.47l0.12-3.81l2.17,0.72l3.42,4.95l-2.54,5.44l1.71,4.27l4.23,1.66l0.77,4.65l5.68,0.88l-1.57,2.71l-7.16,2.82l-0.78,4.62l5.26,6.76l0.22,3.61l-1.23,1.24l0.11,1.13l3.92,5.75l0.11,5.97L729.44,303.65L729.44,303.65z",
      "name": "Myanmar"
    },
    "th": {
      "path": "M730.03,270.47l3.24,4.17v5.07l1.12,0.56l5.15-2.48l1.01,0.34l6.15,7.1l-0.22,4.85l-2.01-0.34l-1.79-1.13l-1.34,0.11l-2.35,3.94l0.45,2.14l1.9,1.01l-0.11,2.37l-1.34,0.68l-4.59-3.16v-2.82l-1.9-0.11l-0.78,1.24l-0.4,12.62l2.97,5.42l5.26,5.07l-0.22,1.47l-2.8-0.11l-2.57-3.83h-2.69l-3.36-2.71l-1.01-2.82l1.45-2.37l0.5-2.14l1.58-2.8l-0.07-6.44l-3.86-5.58l-0.16-0.68l1.25-1.26l-0.29-4.43l-5.14-6.51l0.6-3.75L730.03,270.47L730.03,270.47z",
      "name": "Thailand"
    },
    "kh": {
      "path": "M740.48,299.47l4.09,4.37l7.61-5.64l0.67-8.9l-3.93,2.71l-2.04-1.14l-2.77-0.37l-1.55-1.09l-0.75,0.04l-2.03,3.33l0.33,1.54l2.06,1.15l-0.25,3.13L740.48,299.47L740.48,299.47z",
      "name": "Cambodia"
    },
    "la": {
      "path": "M735.47,262.93l-2.42,1.23l-2.01,5.86l3.36,4.28l-0.56,4.73l0.56,0.23l5.59-2.71l7.5,8.38l-0.18,5.28l1.63,0.88l4.03-3.27l-0.33-2.59l-11.63-11.05l0.11-1.69l1.45-1.01l-1.01-2.82l-4.81-0.79L735.47,262.93L735.47,262.93z",
      "name": "Lao People's Democratic Republic"
    },
    "vn": {
      "path": "M745.06,304.45l1.19,1.87l0.22,2.14l3.13,0.34l3.8-5.07l3.58-1.01l1.9-5.18l-0.89-8.34l-3.69-5.07l-3.89-3.11l-4.95-8.5l3.55-5.94l-5.08-5.83l-4.07-0.18l-3.66,1.97l1.09,4.71l4.88,0.86l1.31,3.63l-1.72,1.12l0.11,0.9l11.45,11.2l0.45,3.29l-0.69,10.4L745.06,304.45L745.06,304.45z",
      "name": "Vietnam"
    },
    "ge": {
      "path": "M555.46,204.16l3.27,4.27l4.08,1.88l2.51-0.01l4.31-1.17l1.08-1.69l-12.75-4.77L555.46,204.16L555.46,204.16z",
      "name": "Georgia"
    },
    "am": {
      "path": "M569.72,209.89l4.8,6.26l-1.41,1.65l-3.4-0.59l-4.22-3.78l0.23-2.48L569.72,209.89L569.72,209.89z",
      "name": "Armenia"
    },
    "az": {
      "path": "M571.41,207.72l-1.01,1.72l4.71,6.18l1.64-0.53l2.7,2.83l1.17-4.96l2.93,0.47l-0.12-1.42l-4.82-4.22l-0.92,2.48L571.41,207.72L571.41,207.72z",
      "name": "Azerbaijan"
    },
    "ir": {
      "path": "M569.65,217.95l-1.22,1.27l0.12,2.01l1.52,2.13l5.39,5.9l-0.82,2.36h-0.94l-0.47,2.36l3.05,3.9l2.81,0.24l5.63,7.79l3.16,0.24l2.46,1.77l0.12,3.54l9.73,5.67h3.63l2.23-1.89l2.81-0.12l1.64,3.78l10.51,1.46l0.31-3.86l3.48-1.26l0.16-1.38l-2.77-3.78l-6.17-4.96l3.24-2.95l-0.23-1.3l-4.06-0.63l-1.72-13.7l-0.2-3.15l-11.01-4.21l-4.88,1.1l-2.73,3.35l-2.42-0.16l-0.7,0.59l-5.39-0.35l-6.8-4.96l-2.53-2.77l-1.16,0.28l-2.09,2.39L569.65,217.95L569.65,217.95z",
      "name": "Iran"
    },
    "tr": {
      "path": "M558.7,209.19l-2.23,2.36l-8.2-0.24l-4.92-2.95l-4.8-0.12l-5.51,3.9l-5.16,0.24l-0.47,2.95h-5.86l-2.34,2.13v1.18l1.41,1.18v1.3l-0.59,1.54l0.59,1.3l1.88-0.94l1.88,2.01l-0.47,1.42l-0.7,0.95l1.05,1.18l5.16,1.06l3.63-1.54v-2.24l1.76,0.35l4.22,2.48l4.57-0.71l1.99-1.89l1.29,0.47v2.13h1.76l1.52-2.95l13.36-1.42l5.83-0.71l-1.54-2.02l-0.03-2.73l1.17-1.4l-4.26-3.42l0.23-2.95h-2.34L558.7,209.19L558.7,209.19M523.02,209.7l-0.16,3.55l3.1-0.95l1.42-0.95l-0.42-1.54l-1.47-1.17L523.02,209.7L523.02,209.7z",
      "name": "Turkey"
    },
    "om": {
      "path": "M598.38,280.84l7.39-4.26l1.31-6.25l-1.62-0.93l0.67-6.7l1.41-0.82l1.51,2.37l8.99,4.7v2.61l-10.89,16.03l-5.01,0.17L598.38,280.84L598.38,280.84z",
      "name": "Oman"
    },
    "ae": {
      "path": "M594.01,264.94l0.87,3.48l9.86,0.87l0.69-7.14l1.9-1.04l0.52-2.61l-3.11,0.87l-3.46,5.23L594.01,264.94L594.01,264.94z",
      "name": "United Arab Emirates"
    },
    "qa": {
      "path": "M592.63,259.02l-0.52,4.01l1.54,1.17l1.4-0.13l0.52-5.05l-1.21-0.87L592.63,259.02L592.63,259.02z",
      "name": "Qatar"
    },
    "kw": {
      "path": "M583.29,247.17l-2.25-1.22l-1.56,1.57l0.17,3.14l3.63,1.39L583.29,247.17L583.29,247.17z",
      "name": "Kuwait"
    },
    "sa": {
      "path": "M584,253.24l7.01,9.77l2.26,1.8l1.01,4.38l10.79,0.85l1.22,0.64l-1.21,5.4l-7.09,4.18l-10.37,3.14l-5.53,5.4l-6.57-3.83l-3.98,3.48L566,279.4l-3.8-1.74l-1.38-2.09v-4.53l-13.83-16.72l-0.52-2.96h3.98l4.84-4.18l0.17-2.09l-1.38-1.39l2.77-2.26l5.88,0.35l10.03,8.36l5.92-0.27l0.38,1.46L584,253.24L584,253.24z",
      "name": "Saudi Arabia"
    },
    "sy": {
      "path": "M546.67,229.13l-0.35,2.54l2.82,1.18l-0.12,7.04l2.82-0.06l2.82-2.13l1.06-0.18l6.4-5.09l1.29-7.39l-12.79,1.3l-1.35,2.96L546.67,229.13L546.67,229.13z",
      "name": "Syrian Arab Republic"
    },
    "iq": {
      "path": "M564.31,225.03l-1.56,7.71l-6.46,5.38l0.41,2.54l6.31,0.43l10.05,8.18l5.62-0.16l0.15-1.89l2.06-2.21l2.88,1.63l0.38-0.36l-5.57-7.41l-2.64-0.16l-3.51-4.51l0.7-3.32l1.07-0.14l0.37-1.47l-4.78-5.03L564.31,225.03L564.31,225.03z",
      "name": "Iraq"
    },
    "jo": {
      "path": "M548.9,240.78l-2.46,8.58l-0.11,1.31h3.87l4.33-3.82l0.11-1.45l-1.77-1.81l3.17-2.63l-0.46-2.44l-0.87,0.2l-2.64,1.89L548.9,240.78L548.9,240.78z",
      "name": "Jordan"
    },
    "lb": {
      "path": "M546.2,232.44l0.06,1.95l-0.82,2.96l2.82,0.24l0.18-4.2L546.2,232.44L546.2,232.44z",
      "name": "Lebanon"
    },
    "il": {
      "path": "M545.32,238.06l-1.58,5.03l2.05,6.03l2.35-8.81v-1.89L545.32,238.06L545.32,238.06z",
      "name": "Israel"
    },
    "cy": {
      "path": "M543.21,229.84l1.23,0.89l-3.81,3.61l-1.82-0.06l-1.35-0.95l0.18-1.77l2.76-0.18L543.21,229.84L543.21,229.84z",
      "name": "Cyprus"
    },
    "gb": {
      "path": "M446.12,149.08l-1.83,2.77l0.73,1.11h4.22v1.85l-1.1,1.48l0.73,3.88l2.38,4.62l1.83,4.25l2.93,1.11l1.28,2.22l-0.18,2.03l-1.83,1.11l-0.18,0.92l1.28,0.74l-1.1,1.48l-2.57,1.11l-4.95-0.55l-7.71,3.51l-2.57-1.29l7.34-4.25l-0.92-0.55l-3.85-0.37l2.38-3.51l0.37-2.96l3.12-0.37l-0.55-5.73l-3.67-0.18l-1.1-1.29l0.18-4.25l-2.2,0.18l2.2-7.39l4.04-2.96L446.12,149.08L446.12,149.08M438.42,161.47l-3.3,0.37l-0.18,2.96l2.2,1.48l2.38-0.55l0.92-1.66L438.42,161.47L438.42,161.47z",
      "name": "United Kingdom"
    },
    "ie": {
      "path": "M439.51,166.55l-0.91,6l-8.07,2.96h-2.57l-1.83-1.29v-1.11l4.04-2.59l-1.1-2.22l0.18-3.14l3.49,0.18l1.6-3.76l-0.21,3.34l2.71,2.15L439.51,166.55L439.51,166.55z",
      "name": "Ireland"
    },
    "se": {
      "path": "M497.72,104.58l1.96,1.81h3.67l2.02,3.88l0.55,6.65l-4.95,3.51v3.51l-3.49,4.81l-2.02,0.18l-2.75,4.62l0.18,4.44l4.77,3.51l-0.37,2.03l-1.83,2.77l-2.75,2.4l0.18,7.95l-4.22,1.48l-1.47,3.14h-2.02l-1.1-5.54l-4.59-7.04l3.77-6.31l0.26-15.59l2.6-1.43l0.63-8.92l7.41-10.61L497.72,104.58L497.72,104.58M498.49,150.17l-2.11,1.67l1.06,2.45l1.87-1.82L498.49,150.17L498.49,150.17z",
      "name": "Sweden"
    },
    "fi": {
      "path": "M506.79,116.94l2.07,0.91l1.28,2.4l-1.28,1.66l-6.42,7.02l-1.1,3.7l1.47,5.36l4.95,3.7l6.6-3.14l5.32-0.74l4.95-7.95l-3.67-8.69l-3.49-8.32l0.55-5.36l-2.2-0.37l-0.57-3.91l-2.96-4.83l-3.28,2.27l-1.29,5.27l-3.48-2.09l-4.84-1.18l-1.08,1.26l1.86,1.68l3.39-0.06l2.73,4.41L506.79,116.94L506.79,116.94z",
      "name": "Finland"
    },
    "lv": {
      "path": "M518.07,151.37l-6.85-1.11l0.15,3.83l6.35,3.88l2.6-0.76l-0.15-2.92L518.07,151.37L518.07,151.37z",
      "name": "Latvia"
    },
    "lt": {
      "path": "M510.81,154.7l-2.15-0.05l-2.95,2.82h-2.5l0.15,3.53l-1.5,2.77l5.4,0.05l1.55-0.2l1.55,1.87l3.55-0.15l3.4-4.33l-0.2-2.57L510.81,154.7L510.81,154.7z",
      "name": "Lithuania"
    },
    "by": {
      "path": "M510.66,166.29l1.5,2.47l-0.6,1.97l0.1,1.56l0.55,1.87l3.1-1.76l3.85,0.1l2.7,1.11h6.85l2-4.79l1.2-1.81v-1.21l-4.3-6.05l-3.8-1.51l-3.1-0.35l-2.7,0.86l0.1,2.72l-3.75,4.74L510.66,166.29L510.66,166.29z",
      "name": "Belarus"
    },
    "pl": {
      "path": "M511.46,174.76l0.85,1.56l0.2,1.66l-0.7,1.61l-1.6,3.08l-1.35,0.61l-1.75-0.76l-1.05,0.05l-2.55,0.96l-2.9-0.86l-4.7-3.33l-4.6-2.47l-1.85-2.82l-0.35-6.65l3.6-3.13l4.7-1.56l1.75-0.2l-0.7,1.41l0.45,0.55l7.91,0.15l1.7-0.05l2.8,4.29l-0.7,1.76l0.3,2.07L511.46,174.76L511.46,174.76z",
      "name": "Poland"
    },
    "it": {
      "path": "M477.56,213.38l-2.65,1.34l0.35,5.17l2.12,0.36l1.59-1.52v-4.9L477.56,213.38L477.56,213.38M472.27,196.98l-0.62,1.57l0.17,1.71l2.39,2.79l3.76-0.13l8.3,9.64l5.18,1.5l3.06,2.89l0.73,6.59l1.64-0.96l1.42-3.59l-0.35-2.58l2.43-0.22l0.35-1.46l-6.85-3.28l-6.5-6.39l-2.59-3.82l-0.63-3.63l3.31-0.79l-0.85-2.39l-2.03-1.71l-1.75-0.08l-2.44,0.67l-2.3,3.22l-1.39,0.92l-2.15-1.32L472.27,196.98L472.27,196.98M492.44,223.02l-1.45-0.78l-4.95,0.78l0.17,1.34l4.45,2.24l0.67,0.73l1.17,0.17L492.44,223.02L492.44,223.02z",
      "name": "Italy"
    },
    "fr": {
      "path": "M477.83,206.96l-1.95,1.96l-0.18,1.78l1.59,0.98l0.62-0.09l0.35-2.59L477.83,206.96L477.83,206.96M460.4,178.7l-2.21,0.54l-4.42,4.81l-1.33,0.09l-1.77-1.25l-1.15,0.27l-0.88,2.76l-6.46,0.18l0.18,1.43l4.42,2.94l5.13,4.1l-0.09,4.9l-2.74,4.81l5.93,2.85l6.02,0.18l1.86-2.14l3.8,0.09l1.06,0.98l3.8-0.27l1.95-2.5l-2.48-2.94l-0.18-1.87l0.53-2.05l-1.24-1.78l-2.12,0.62l-0.27-1.6l4.69-5.17v-3.12l-3.1-1.78l-1.59-0.27L460.4,178.7L460.4,178.7z",
      "name": "France"
    },
    "nl": {
      "path": "M470.09,168.27l-4.53,2.23l0.96,0.87l0.1,2.23l-0.96-0.19l-1.06-1.65l-2.53,4.01l3.89,0.81l1.45,1.53l0.77,0.02l0.51-3.46l2.45-1.03L470.09,168.27L470.09,168.27z",
      "name": "Netherlands"
    },
    "be": {
      "path": "M461.61,176.52l-0.64,1.6l6.88,4.54l1.98,0.47l0.07-2.15l-1.73-1.94h-1.06l-1.45-1.65L461.61,176.52L461.61,176.52z",
      "name": "Belgium"
    },
    "de": {
      "path": "M471.14,167.88l3.57-0.58v-2.52l2.99-0.49l1.64,1.65l1.73,0.19l2.7-1.17l2.41,0.68l2.12,1.84l0.29,6.89l2.12,2.82l-2.79,0.39l-4.63,2.91l0.39,0.97l4.14,3.88l-0.29,1.94l-3.85,1.94l-3.57,0.1l-0.87,1.84h-1.83l-0.87-1.94l-3.18-0.78l-0.1-3.2l-2.7-1.84l0.29-2.33l-1.83-2.52l0.48-3.3l2.5-1.17L471.14,167.88L471.14,167.88z",
      "name": "Germany"
    },
    "dk": {
      "path": "M476.77,151.5l-4.15,4.59l-0.15,2.99l1.89,4.93l2.96-0.56l-0.37-4.03l2.04-2.28l-0.04-1.79l-1.44-3.73L476.77,151.5L476.77,151.5M481.44,159.64l-0.93-0.04l-1.22,1.12l0.15,1.75l2.89,0.08l0.15-1.98L481.44,159.64L481.44,159.64z",
      "name": "Denmark"
    },
    "ch": {
      "path": "M472.91,189.38l-4.36,4.64l0.09,0.47l1.79-0.56l1.61,2.24l2.72-0.96l1.88,1.46l0.77-0.44l2.32-3.64l-0.59-0.56l-2.29-0.06l-1.11-2.27L472.91,189.38L472.91,189.38z",
      "name": "Switzerland"
    },
    "cz": {
      "path": "M488.43,184.87h2.97h1.46l2.37,1.69l4.39-3.65l-4.26-3.04l-4.22-2.04l-2.89,0.52l-3.92,2.52L488.43,184.87L488.43,184.87z",
      "name": "Czech Republic"
    },
    "sk": {
      "path": "M495.84,187.13l0.69,0.61l0.09,1.04l7.63-0.17l5.64-2.43l-0.09-2.47l-1.08,0.48l-1.55-0.83l-0.95-0.04l-2.5,1l-3.4-0.82L495.84,187.13L495.84,187.13z",
      "name": "Slovakia"
    },
    "at": {
      "path": "M480.63,190.12l-0.65,1.35l0.56,0.96l2.33-0.48h1.98l2.15,1.82l4.57-0.83l3.36-2l0.86-1.35l-0.13-1.74l-3.02-2.26l-4.05,0.04l-0.34,2.3l-4.26,2.08L480.63,190.12L480.63,190.12z",
      "name": "Austria"
    },
    "hu": {
      "path": "M496.74,189.6l-1.16,1.82l0.09,2.78l1.85,0.95l5.69,0.17l7.93-6.68l0.04-1.48l-0.86-0.43l-5.73,2.6L496.74,189.6L496.74,189.6z",
      "name": "Hungary"
    },
    "si": {
      "path": "M494.8,191.99l-2.54,1.52l-4.74,1.04l0.95,2.74l3.32,0.04l3.06-2.56L494.8,191.99L494.8,191.99z",
      "name": "Slovenia"
    },
    "hr": {
      "path": "M495.62,195.16l-3.53,2.91h-3.58l-0.43,2.52l1.64,0.43l0.82-1.22l1.29,1.13l1.03,3.6l7.07,3.3l0.7-0.8l-7.17-7.4l0.73-1.35l6.81-0.26l0.69-2.17l-4.44,0.13L495.62,195.16L495.62,195.16z",
      "name": "Croatia"
    },
    "ba": {
      "path": "M494.8,198.94l-0.37,0.61l6.71,6.92l2.46-3.62l-0.09-1.43l-2.15-2.61L494.8,198.94L494.8,198.94z",
      "name": "Bosnia and Herzegovina"
    },
    "mt": {
      "path": "M492.61,230.47l-1.67,0.34l0.06,1.85l1.5,0.5l0.67-0.56L492.61,230.47L492.61,230.47z",
      "name": "Malta"
    },
    "ua": {
      "path": "M515.57,173.15l-2.9,1.63l0.72,3.08l-2.68,5.65l0.02,2.49l1.26,0.8l8.08,0.4l2.26-1.87l2.42,0.81l3.47,4.63l-2.54,4.56l3.02,0.88l3.95-4.55l2.26,0.41l2.1,1.46l-1.85,2.44l2.5,3.9h2.66l1.37-2.6l2.82-0.57l0.08-2.11l-5.24-0.81l0.16-2.27h5.08l5.48-4.39l2.42-2.11l0.4-6.66l-10.8-0.97l-4.43-6.25l-3.06-1.05l-3.71,0.16l-1.67,4.13l-7.6,0.1l-2.47-1.14L515.57,173.15L515.57,173.15z",
      "name": "Ukraine"
    },
    "md": {
      "path": "M520.75,187.71l3.1,4.77l-0.26,2.7l1.11,0.05l2.63-4.45l-3.16-3.92l-1.79-0.74L520.75,187.71L520.75,187.71z",
      "name": "Moldova"
    },
    "ro": {
      "path": "M512.18,187.6l-0.26,1.48l-5.79,4.82l4.84,7.1l3.1,2.17h5.58l1.84-1.54l2.47-0.32l1.84,1.11l3.26-3.71l-0.63-1.86l-3.31-0.85l-2.26-0.11l0.11-3.18l-3-4.72L512.18,187.6L512.18,187.6z",
      "name": "Romania"
    },
    "rs": {
      "path": "M505.55,194.54l-2.05,1.54h-1l-0.68,2.12l2.42,2.81l0.16,2.23l-3,4.24l0.42,1.27l1.74,0.32l1.37-1.86l0.74-0.05l1.26,1.22l3.84-1.17l-0.32-5.46L505.55,194.54L505.55,194.54z",
      "name": "Serbia"
    },
    "bg": {
      "path": "M511.44,202.39l0.16,4.98l1.68,3.5l6.31,0.11l2.84-2.01l2.79-1.11l-0.68-3.18l0.63-1.7l-1.42-0.74l-1.95,0.16l-1.53,1.54l-6.42,0.05L511.44,202.39L511.44,202.39z",
      "name": "Bulgaria"
    },
    "al": {
      "path": "M504.02,209.76v4.61l1.32,2.49l0.95-0.11l1.63-2.97l-0.95-1.33l-0.37-3.29l-1.26-1.17L504.02,209.76L504.02,209.76z",
      "name": "Albania"
    },
    "mk": {
      "path": "M510.92,208.01l-3.37,1.11l0.16,2.86l0.79,1.01l4-1.86L510.92,208.01L510.92,208.01z",
      "name": "Macedonia"
    },
    "gr": {
      "path": "M506.71,217.6l-0.11,1.33l4.63,2.33l2.21,0.85l-1.16,1.22l-2.58,0.26l-0.37,1.17l0.89,2.01l2.89,1.54l1.26,0.11l0.16-3.45l1.89-2.28l-5.16-6.1l0.68-2.07l1.21-0.05l1.84,1.48l1.16-0.58l0.37-2.07l5.42,0.05l0.21-3.18l-2.26,1.59l-6.63-0.16l-4.31,2.23L506.71,217.6L506.71,217.6M516.76,230.59l1.63,0.05l0.68,1.01h2.37l1.58-0.58l0.53,0.64l-1.05,1.38l-4.63,0.16l-0.84-1.11l-0.89-0.53L516.76,230.59L516.76,230.59z",
      "name": "Greece"
    }
  }
});

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
0,[["./src/assets/js/custom/admin/dashboard/index.js","commons/backend/admin/commonVendor","js/librairies/adminlib"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGx1Z2lucy9mbGV4YWRtaW4vanMvY2hhcnQvY2hhcnRqcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BsdWdpbnMvZmxleGFkbWluL2pzL2Rhc2hib2FyZF9lY29tbWVyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wbHVnaW5zL21vZHVsZXMvanF2bWFwL2pxdWVyeS52bWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGx1Z2lucy9tb2R1bGVzL2pxdm1hcC9tYXBzL2pxdWVyeS52bWFwLndvcmxkLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIl0sIm5hbWVzIjpbIkNoYXJ0anMiLCJlbGVtZW50SWQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkNoYXJ0IiwidHlwZSIsImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwid2luZG93IiwiY29sb3JzIiwicmVkIiwiYmx1ZSIsImdyZWVuIiwieWVsbG93IiwiZ2V0Q29udGV4dCIsImJvcmRlckNvbG9yIiwib3B0aW9ucyIsInByb2dyZXNzIiwiY29uZmlnIiwiZmlsbCIsImFuaW1hdGlvbiIsImR1cmF0aW9uIiwiY3R4IiwiaG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJob3ZlckJvcmRlckNvbG9yIiwiYmFyUGVyY2VudGFnZSIsImNhdGVnb3J5UGVyY2VudGFnZSIsImdyYXkiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwibGVnZW5kIiwiZGlzcGxheSIsInNjYWxlcyIsInlBeGVzIiwiZ3JpZExpbmVzIiwiY29sb3IiLCJzdGFja2VkIiwidGlja3MiLCJzdGVwU2l6ZSIsInhBeGVzIiwiRGVtb0Rhc2hib2FyZEVjb21tZXJjZSIsImNoYXJ0IiwibGluZUNoYXJ0IiwiZG91Z2hudXRDaGFydCIsInByb2dyZXNzQmFyQ2hhcnQiLCJiYXJDaGFydCIsInRhYmxlIiwiJCIsIkRhdGFUYWJsZSIsInJlc3BvbnNpdmUiLCJwYWdlTGVuZ3RoIiwib3JkZXIiLCJjb2x1bW5EZWZzIiwidGFyZ2V0cyIsIm9yZGVyYWJsZSIsImFjdGl2ZUNvbG9yIiwic2VsZWN0ZWRDb3VudHJpZXMiLCJ1cyIsInJ1IiwiYXUiLCJ2ZWN0b3JNYXAiLCJtYXAiLCJib3JkZXJPcGFjaXR5IiwiYm9yZGVyV2lkdGgiLCJlbmFibGVab29tIiwiaG92ZXJDb2xvciIsImhvdmVyT3BhY2l0eSIsIm5vcm1hbGl6ZUZ1bmN0aW9uIiwic2NhbGVDb2xvcnMiLCJzZWxlY3RlZENvbG9yIiwic2VsZWN0ZWRSZWdpb25zIiwic2hvd1Rvb2x0aXAiLCJfYXBwbHlDaGFydCIsIl9hcHBseURhdGFUYWJsZSIsIl9hcHBseU1hcCIsImluaXQiLCJWZWN0b3JDYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInBhcmFtcyIsIm1vZGUiLCJTVkdBbmdsZSIsImNyZWF0ZVN2Z05vZGUiLCJub2RlTmFtZSIsImNyZWF0ZUVsZW1lbnROUyIsInN2Z25zIiwibmFtZXNwYWNlcyIsInJ2bWwiLCJhZGQiLCJjcmVhdGVWbWxOb2RlIiwidGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJlIiwiY3JlYXRlU3R5bGVTaGVldCIsImFkZFJ1bGUiLCJjYW52YXMiLCJzdHlsZSIsInBvc2l0aW9uIiwic2V0U2l6ZSIsInByb3RvdHlwZSIsIkNvbG9yU2NhbGUiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwic2V0Q29sb3JzIiwic2V0Tm9ybWFsaXplRnVuY3Rpb24iLCJzZXRNaW4iLCJzZXRNYXgiLCJKUVZNYXAiLCJtYXBEYXRhIiwibWFwcyIsIm1hcFBpbnMiLCJFcnJvciIsIm11bHRpU2VsZWN0UmVnaW9uIiwiY29udGFpbmVyIiwiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdEhlaWdodCIsImhvdmVyQ29sb3JzIiwic2V0QmFja2dyb3VuZENvbG9yIiwicmVzaXplIiwialF1ZXJ5IiwibmV3V2lkdGgiLCJuZXdIZWlnaHQiLCJhcHBseVRyYW5zZm9ybSIsInJlc2l6ZUV2ZW50IiwiRXZlbnQiLCJ0cmlnZ2VyIiwicmVtb3ZlIiwicGluSGFuZGxlcnMiLCJwbGFjZVBpbnMiLCJwaW5zIiwiYXBwZW5kIiwibWFrZURyYWdnYWJsZSIsInJvb3RHcm91cCIsImNyZWF0ZUdyb3VwIiwiaW5kZXgiLCJtYXBJbmRleCIsImFkZENsYXNzIiwiYXBwZW5kVG8iLCJoaWRlIiwidGV4dCIsImh0bWwiLCJjb3VudHJpZXMiLCJrZXkiLCJwYXRocyIsInBhdGgiLCJjcmVhdGVQYXRoIiwic2V0RmlsbCIsImlkIiwiZ2V0Q291bnRyeUlkIiwic2V0QXR0cmlidXRlIiwiZGVsZWdhdGUiLCJjb250YWluZXJQYXRoIiwidGFyZ2V0IiwiY29kZSIsInNwbGl0IiwicG9wIiwibGFiZWxTaG93RXZlbnQiLCJyZWdpb25Nb3VzZU92ZXJFdmVudCIsInRvTG93ZXJDYXNlIiwibmFtZSIsImlzRGVmYXVsdFByZXZlbnRlZCIsImhpZ2hsaWdodCIsInNob3ciLCJsYWJlbFdpZHRoIiwibGFiZWxIZWlnaHQiLCJ1bmhpZ2hsaWdodCIsInJlZ2lvbkNsaWNrRXZlbnQiLCJ0YXJnZXRQYXRoIiwibWFwQ2xpY2tFdmVudCIsImtleVBhdGgiLCJjdXJyZW50RmlsbENvbG9yIiwiZ2V0T3JpZ2luYWxGaWxsIiwiaXNTZWxlY3RlZCIsImRlc2VsZWN0Iiwic2VsZWN0IiwibW91c2Vtb3ZlIiwiaXMiLCJsZWZ0IiwicGFnZVgiLCJ0b3AiLCJwYWdlWSIsImNzcyIsImFwcGVuZENoaWxkIiwiY29sb3JTY2FsZSIsInZhbHVlTWluIiwidmFsdWVNYXgiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJBcnJheSIsImsiLCJiaW5kWm9vbUJ1dHRvbnMiLCJwaW5Nb2RlIiwic2hvd0xhYmVscyIsInRvVXBwZXJDYXNlIiwidHJhbnNYIiwidHJhbnNZIiwic2NhbGUiLCJiYXNlVHJhbnNYIiwiYmFzZVRyYW5zWSIsImJhc2VTY2FsZSIsImNvdW50cmllc0NvbG9ycyIsImNvdW50cmllc0RhdGEiLCJ6b29tU3RlcCIsInpvb21NYXhTdGVwIiwiem9vbUN1clN0ZXAiLCJ4bGluayIsImFwaVBhcmFtcyIsImFwaUV2ZW50cyIsIm9uTGFiZWxTaG93Iiwib25Mb2FkIiwib25SZWdpb25PdmVyIiwib25SZWdpb25PdXQiLCJvblJlZ2lvbkNsaWNrIiwib25SZWdpb25TZWxlY3QiLCJvblJlZ2lvbkRlc2VsZWN0Iiwib25SZXNpemUiLCJmbiIsImRlZmF1bHRQYXJhbXMiLCJhcmd1bWVudHMiLCJjaGFyQXQiLCJzdWJzdHIiLCJhcHBseSIsInNsaWNlIiwiY2FsbCIsImV4dGVuZCIsIm92ZXJmbG93IiwidW5iaW5kIiwiYmluZCIsImxvYWRFdmVudCIsImFycmF5VG9SZ2IiLCJhciIsInJnYiIsImQiLCJpIiwibGVuZ3RoIiwidG9TdHJpbmciLCJnZXRDb2xvciIsInZhbHVlIiwibm9ybWFsaXplIiwibGVuZ3RoZXMiLCJmdWxsTGVuZ3RoIiwibCIsInZlY3Rvckxlbmd0aCIsInZlY3RvclN1YnRyYWN0IiwicHVzaCIsImMiLCJ2ZWN0b3JUb051bSIsInZlY3RvckFkZCIsInZlY3Rvck11bHQiLCJyZ2JUb0FycmF5IiwicGFyc2VJbnQiLCJtYXgiLCJjbGVhck1heFZhbHVlIiwibWluIiwiY2xlYXJNaW5WYWx1ZSIsImYiLCJNYXRoIiwicG93IiwidmVjdG9yMSIsInZlY3RvcjIiLCJ2ZWN0b3IiLCJyZXN1bHQiLCJzcXJ0IiwibnVtIiwicm91bmQiLCJtYXhUcmFuc1giLCJtYXhUcmFuc1kiLCJtaW5UcmFuc1giLCJtaW5UcmFuc1kiLCJhcHBseVRyYW5zZm9ybVBhcmFtcyIsImZpbmQiLCJjbGljayIsInpvb21JbiIsInpvb21PdXQiLCJjYyIsInNwbGljZSIsInNlbGVjdEluZGV4IiwiaW5kZXhPZiIsImdldFBpbiIsInBpbk9iaiIsImdldFBpbklkIiwiZ2V0UGlucyIsInJldCIsImVhY2giLCJhdHRyIiwicGluQ29udGVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRPcGFjaXR5IiwiZ2V0RmlsbCIsIm1vdXNlRG93biIsIm9sZFBhZ2VYIiwib2xkUGFnZVkiLCJzZWxmIiwiaXNNb3ZpbmciLCJpc01vdmluZ1RpbWVvdXQiLCJsYXN0VG91Y2hDb3VudCIsInRvdWNoQ2VudGVyWCIsInRvdWNoQ2VudGVyWSIsInRvdWNoU3RhcnREaXN0YW5jZSIsInRvdWNoU3RhcnRTY2FsZSIsInRvdWNoWCIsInRvdWNoWSIsImNsZWFyVGltZW91dCIsIm1vdXNlZG93biIsIm1vdXNldXAiLCJzZXRUaW1lb3V0IiwibW91c2VvdXQiLCJvZmZzZXQiLCJ0b3VjaGVzIiwib3JpZ2luYWxFdmVudCIsInRyYW5zZm9ybVhPbGQiLCJ0cmFuc2Zvcm1ZT2xkIiwicHJldmVudERlZmF1bHQiLCJzZXRTY2FsZSIsInBpbiIsInBpbkluZGV4IiwiJHBpbiIsInBvc2l0aW9uUGlucyIsInBvc2l0aW9uRml4IiwiY291bnRyeUlkIiwiY291bnRyeU9iaiIsImJib3giLCJnZXRCQm94Iiwicm9vdENvb3JkcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm1hcENvb3JkcyIsImNvb3JkcyIsIm1pZGRsZVgiLCJ4IiwibWlkZGxlWSIsInkiLCJyZW1vdmVQaW4iLCJyZW1vdmVQaW5zIiwicmVzZXQiLCJjdXJCYXNlU2NhbGUiLCJhYnMiLCJzZXRTY2FsZUNvbG9ycyIsIk51bWJlciIsIk1BWF9WQUxVRSIsInZhbCIsInBhcnNlRmxvYXQiLCJpc05hTiIsInNsaWRlckRlbHRhIiwiaW5uZXJIZWlnaHQiLCIkc2xpZGVyIiwiY29vcmRvcmlnaW4iLCJjb29yZHNpemUiLCJpc1Jvb3QiLCJub2RlIiwiZ2V0QXR0cmlidXRlIiwib3BhY2l0eSIsImZpbGxjb2xvciIsImRlZmF1bHRGaWxsQ29sb3IiLCJzdHJva2VkIiwicGF0aFN2Z1RvVm1sIiwib24iLCJtYXRyaXgiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImN4IiwiY3kiLCJjdHJseCIsImN0cmx5IiwicmVwbGFjZSIsInNlZ21lbnQiLCJsZXR0ZXIiLCJzaGlmdCIsImpvaW4iLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EsMEVBQTBFLE1BQU0sMEJBQTBCLEVBQUUsWUFBWSxFQUFFO0FBQzFIO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxNQUFNLDBCQUEwQixFQUFFLFlBQVksRUFBRTtBQUM3SDtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7O0lBRU1BLE87QUFDSixxQkFBYztBQUFBO0FBQUU7Ozs7V0FFaEIsdUJBQWNDLFNBQWQsRUFBeUI7QUFDdkIsVUFBSUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JILFNBQXhCLENBQWQ7QUFDQSxVQUFJLENBQUNDLE9BQUwsRUFBYyxPQUFPLEtBQVA7QUFDZCxVQUFJRyw0REFBSixDQUFVSCxPQUFWLEVBQW1CO0FBQ2pCSSxZQUFJLEVBQUUsVUFEVztBQUVqQkMsWUFBSSxFQUFFO0FBQ0pDLGdCQUFNLEVBQUUsQ0FBQyxRQUFELEVBQVcsWUFBWCxFQUF5QixXQUF6QixFQUFzQyxPQUF0QyxDQURKO0FBRUpDLGtCQUFRLEVBQUUsQ0FDUjtBQUNFQyxpQkFBSyxFQUFFLGtCQURUO0FBRUVILGdCQUFJLEVBQUUsQ0FBQyxHQUFELEVBQU0sRUFBTixFQUFVLEdBQVYsRUFBZSxFQUFmLENBRlI7QUFHRUksMkJBQWUsRUFBRSxDQUNmQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsR0FEQyxFQUVmRixNQUFNLENBQUNDLE1BQVAsQ0FBY0UsSUFGQyxFQUdmSCxNQUFNLENBQUNDLE1BQVAsQ0FBY0csS0FIQyxFQUlmSixNQUFNLENBQUNDLE1BQVAsQ0FBY0ksTUFKQztBQUhuQixXQURRO0FBRk47QUFGVyxPQUFuQjtBQWtCRDs7O1dBRUQsbUJBQVVoQixTQUFWLEVBQXFCO0FBQ25CLFVBQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCSCxT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ekQ7QUFBd3p6RCxVQUFLO0FBQUMsY0FBTyxrTEFBUjtBQUEyTCxjQUFPO0FBQWxNLEtBQTd6ekQ7QUFBMGcwRCxVQUFLO0FBQUMsY0FBTyx5S0FBUjtBQUFrTCxjQUFPO0FBQXpMLEtBQS9nMEQ7QUFBa3QwRCxVQUFLO0FBQUMsY0FBTyw4SkFBUjtBQUF1SyxjQUFPO0FBQTlLLEtBQXZ0MEQ7QUFBaTUwRCxVQUFLO0FBQUMsY0FBTyxpSEFBUjtBQUEwSCxjQUFPO0FBQWpJLEtBQXQ1MEQ7QUFBa2kxRCxVQUFLO0FBQUMsY0FBTyxtRkFBUjtBQUE0RixjQUFPO0FBQW5HLEtBQXZpMUQ7QUFBdXAxRCxVQUFLO0FBQUMsY0FBTyxnWkFBUjtBQUF5WixjQUFPO0FBQWhhO0FBQTVwMUQ7QUFBbEMsQ0FBMUMsRTs7Ozs7Ozs7Ozs7QUNEQSwrREFBK0Qsa0RBQWtELDZCQUE2QixTQUFTOztBQUV2SixvRCIsImZpbGUiOiJqcy9jdXN0b20vYWRtaW4vZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgoZnVuY3Rpb24gd2VicGFja0xvYWRPcHRpb25hbEV4dGVybmFsTW9kdWxlKCkgeyB0cnkgeyByZXR1cm4gcmVxdWlyZShcIm1vbWVudFwiKTsgfSBjYXRjaChlKSB7fSB9KCkpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIm1vbWVudFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrbmdlbGxcIl0gPSBmYWN0b3J5KChmdW5jdGlvbiB3ZWJwYWNrTG9hZE9wdGlvbmFsRXh0ZXJuYWxNb2R1bGUoKSB7IHRyeSB7IHJldHVybiByZXF1aXJlKFwibW9tZW50XCIpOyB9IGNhdGNoKGUpIHt9IH0oKSkpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtuZ2VsbFwiXSA9IGZhY3Rvcnkocm9vdFtcIm1vbWVudFwiXSk7XG59KShzZWxmLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21vbWVudF9fKSB7XG5yZXR1cm4gIiwiaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9kaXN0L0NoYXJ0XCI7XG5cbmNsYXNzIENoYXJ0anMge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZG91Z2hudXRDaGFydChlbGVtZW50SWQpIHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XG4gICAgbmV3IENoYXJ0KGVsZW1lbnQsIHtcbiAgICAgIHR5cGU6IFwiZG91Z2hudXRcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiBbXCJEaXJlY3RcIiwgXCJBZmZpbGxpYXRlXCIsIFwiU3BvbnNvcmVkXCIsIFwiRW1haWxcIl0sXG4gICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiTXkgRmlyc3QgRGF0YXNldFwiLFxuICAgICAgICAgICAgZGF0YTogWzMwMCwgNTAsIDEwMCwgMzBdLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgICAgIHdpbmRvdy5jb2xvcnMucmVkLFxuICAgICAgICAgICAgICB3aW5kb3cuY29sb3JzLmJsdWUsXG4gICAgICAgICAgICAgIHdpbmRvdy5jb2xvcnMuZ3JlZW4sXG4gICAgICAgICAgICAgIHdpbmRvdy5jb2xvcnMueWVsbG93LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGxpbmVDaGFydChlbGVtZW50SWQpIHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XG4gICAgbmV3IENoYXJ0KGVsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpLCB7XG4gICAgICB0eXBlOiBcImxpbmVcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgXCJKYW51YXJ5XCIsXG4gICAgICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgICAgIFwiTWFyY2hcIixcbiAgICAgICAgICBcIkFwcmlsXCIsXG4gICAgICAgICAgXCJNYXlcIixcbiAgICAgICAgICBcIkp1bmVcIixcbiAgICAgICAgICBcIkp1bHlcIixcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCJBZmZpbGxpYXRlXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdpbmRvdy5jb2xvcnMucmVkLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHdpbmRvdy5jb2xvcnMucmVkLFxuICAgICAgICAgICAgZGF0YTogWzAsIDIsIDUsIDgsIDEwLCAyMCwgMjVdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiU3BvbnNvcmVkXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdpbmRvdy5jb2xvcnMuZ3JlZW4sXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogd2luZG93LmNvbG9ycy5ncmVlbixcbiAgICAgICAgICAgIGRhdGE6IFswLCA0LCA2LCAxMCwgMTMsIDI1LCAzMF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCJFbWFpbFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB3aW5kb3cuY29sb3JzLmJsdWUsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogd2luZG93LmNvbG9ycy5ibHVlLFxuICAgICAgICAgICAgZGF0YTogWzAsIDYsIDgsIDE1LCAxOCwgMzAsIDM2XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkRpcmVjdFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB3aW5kb3cuY29sb3JzLnllbGxvdyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiB3aW5kb3cuY29sb3JzLnllbGxvdyxcbiAgICAgICAgICAgIGRhdGE6IFswLCAxMCwgMTcsIDIwLCAzMCwgMzAsIDQ1XSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJvZ3Jlc3NCYXJDaGFydChlbGVtZW50SWQpIHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gICAgdmFyIHByb2dyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltYXRpb25Qcm9ncmVzc1wiKTtcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTtcbiAgICBsZXQgY29uZmlnID0ge1xuICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogW1xuICAgICAgICAgIFwiSmFudWFyeVwiLFxuICAgICAgICAgIFwiRmVicnVhcnlcIixcbiAgICAgICAgICBcIk1hcmNoXCIsXG4gICAgICAgICAgXCJBcHJpbFwiLFxuICAgICAgICAgIFwiTWF5XCIsXG4gICAgICAgICAgXCJKdW5lXCIsXG4gICAgICAgICAgXCJKdWx5XCIsXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiVGhpcyBZZWFyXCIsXG4gICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiB3aW5kb3cuY29sb3JzLnJlZCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogd2luZG93LmNvbG9ycy5yZWQsXG4gICAgICAgICAgICBkYXRhOiBbMTAwLCAyMDAsIDUwMCwgNDAwLCAxMDAsIDU2MCwgNzAwXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlByZXZpb3VzIFllYXJcIixcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHdpbmRvdy5jb2xvcnMuYmx1ZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogd2luZG93LmNvbG9ycy5ibHVlLFxuICAgICAgICAgICAgZGF0YTogWzUwLCAxMDAsIDIwMCwgNTAwLCA4MDAsIDYwMCwgMzAwXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gICAgbmV3IENoYXJ0KGVsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpLCBjb25maWcpO1xuICB9XG5cbiAgYmFyQ2hhcnQoZWxlbWVudElkKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBjdHggPSBlbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGxhYmVsczogW1xuICAgICAgICBcIkphblwiLFxuICAgICAgICBcIkZlYlwiLFxuICAgICAgICBcIk1hclwiLFxuICAgICAgICBcIkFwclwiLFxuICAgICAgICBcIk1heVwiLFxuICAgICAgICBcIkp1blwiLFxuICAgICAgICBcIkp1bFwiLFxuICAgICAgICBcIkF1Z1wiLFxuICAgICAgICBcIlNlcFwiLFxuICAgICAgICBcIk9jdFwiLFxuICAgICAgICBcIk5vdlwiLFxuICAgICAgICBcIkRlY1wiLFxuICAgICAgXSxcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBY3R1YWxcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdpbmRvdy5jb2xvcnMuYmx1ZSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogd2luZG93LmNvbG9ycy5ibHVlLFxuICAgICAgICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiB3aW5kb3cuY29sb3JzLmJsdWUsXG4gICAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogd2luZG93LmNvbG9ycy5ibHVlLFxuICAgICAgICAgIGRhdGE6IFs1NSwgNTgsIDcwLCA2NSwgNTcsIDQ1LCAzOCwgNDQsIDc3LCA2NSwgOTEsIDgwXSxcbiAgICAgICAgICBiYXJQZXJjZW50YWdlOiAwLjcsXG4gICAgICAgICAgY2F0ZWdvcnlQZXJjZW50YWdlOiAwLjUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJFeHBlY3RcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdpbmRvdy5jb2xvcnMuZ3JheSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogd2luZG93LmNvbG9ycy5ncmF5LFxuICAgICAgICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiB3aW5kb3cuY29sb3JzLmdyYXksXG4gICAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogd2luZG93LmNvbG9ycy5ncmF5LFxuICAgICAgICAgIGRhdGE6IFs2NiwgNTMsIDY1LCA3MiwgMzQsIDU1LCA0NSwgNjQsIDIzLCA3NiwgNjcsIDc3XSxcbiAgICAgICAgICBiYXJQZXJjZW50YWdlOiAwLjcsXG4gICAgICAgICAgY2F0ZWdvcnlQZXJjZW50YWdlOiAwLjUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBzY2FsZXM6IHtcbiAgICAgICAgeUF4ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMCwwLDAsMC4wNilcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgIHN0ZXBTaXplOiAyMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgeEF4ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDAsMCwwLDAuMDIpXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH07XG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICB9O1xuICAgIG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRqcztcbiIsImltcG9ydCBcInBsdWdpbnMvbW9kdWxlcy9qcXZtYXAvanF1ZXJ5LnZtYXBcIjtcbmltcG9ydCBcInBsdWdpbnMvbW9kdWxlcy9qcXZtYXAvbWFwcy9qcXVlcnkudm1hcC53b3JsZC5qc1wiO1xuaW1wb3J0IENoYXJ0anMgZnJvbSBcIi4vY2hhcnQvY2hhcnRqcy5qc1wiO1xuXG5jbGFzcyBEZW1vRGFzaGJvYXJkRWNvbW1lcmNlIHtcbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9hcHBseUNoYXJ0KCk7XG4gICAgdGhpcy5fYXBwbHlEYXRhVGFibGUoKTtcbiAgICB0aGlzLl9hcHBseU1hcCgpO1xuICB9XG5cbiAgX2FwcGx5Q2hhcnQgPSAoKSA9PiB7XG4gICAgbGV0IGNoYXJ0ID0gbmV3IENoYXJ0anMoKTtcbiAgICBjaGFydC5saW5lQ2hhcnQoXCJkYXNoYm9hcmQtbGluZS1jaGFydGpzXCIpO1xuICAgIGNoYXJ0LmRvdWdobnV0Q2hhcnQoXCJkYXNoYm9hcmQtZG91Z2hudXQtY2hhcnRqc1wiKTtcbiAgICBjaGFydC5wcm9ncmVzc0JhckNoYXJ0KFwiZGFzaGJvYXJkLXByb2dyZXNzLWJhci1jaGFydGpzXCIpO1xuICAgIGNoYXJ0LmJhckNoYXJ0KFwiZGFzaGJvYXJkLWJhci1jaGFydGpzXCIpO1xuICB9O1xuXG4gIF9hcHBseURhdGFUYWJsZSA9ICgpID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWNvbW1lcmNlLWRhdGF0YWJsZVwiKTtcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTtcbiAgICBsZXQgdGFibGUgPSAkKGVsZW1lbnQpLkRhdGFUYWJsZSh7XG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgcGFnZUxlbmd0aDogMTAsXG4gICAgICBvcmRlcjogW10sXG4gICAgICBjb2x1bW5EZWZzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0YXJnZXRzOiBcIm5vLXNvcnRcIixcbiAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfTtcblxuICBfYXBwbHlNYXAgPSAoKSA9PiB7XG4gICAgdmFyIGFjdGl2ZUNvbG9yID0gd2luZG93LmNvbG9ycy5ibHVlO1xuICAgIHZhciBzZWxlY3RlZENvdW50cmllcyA9IFtcInVzXCIsIFwicnVcIl07XG4gICAgdmFyIGNvbG9ycyA9IHsgdXM6IGFjdGl2ZUNvbG9yLCBydTogYWN0aXZlQ29sb3IsIGF1OiBhY3RpdmVDb2xvciB9O1xuICAgICQoXCIjd29ybGRfbWFwXCIpLnZlY3Rvck1hcCh7XG4gICAgICBtYXA6IFwid29ybGRfZW5cIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgYm9yZGVyQ29sb3I6IFwiIzgxODE4MVwiLFxuICAgICAgYm9yZGVyT3BhY2l0eTogMC4yNSxcbiAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgY29sb3I6IHdpbmRvdy5jb2xvcnMuZ3JheSxcbiAgICAgIGVuYWJsZVpvb206IHRydWUsXG4gICAgICBob3ZlckNvbG9yOiBcIiNjY2NcIixcbiAgICAgIGhvdmVyT3BhY2l0eTogbnVsbCxcbiAgICAgIG5vcm1hbGl6ZUZ1bmN0aW9uOiBcImxpbmVhclwiLFxuICAgICAgc2NhbGVDb2xvcnM6IFtcIiNiNmQ2ZmZcIiwgXCIjMDA1YWNlXCJdLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogXCIjYzlkZmFmXCIsXG4gICAgICBzZWxlY3RlZFJlZ2lvbnM6IG51bGwsXG4gICAgICBzaG93VG9vbHRpcDogdHJ1ZSxcbiAgICAgIGNvbG9yczogY29sb3JzLFxuICAgICAgaG92ZXJPcGFjaXR5OiAwLjcsXG4gICAgfSk7XG4gIH07XG59XG5cbm5ldyBEZW1vRGFzaGJvYXJkRWNvbW1lcmNlKCkuaW5pdCgpO1xuIiwiLyohXG4gKiBKUVZNYXA6IGpRdWVyeSBWZWN0b3IgTWFwIExpYnJhcnlcbiAqIEBhdXRob3IgSlFWTWFwIDxtZUBwZXRlcnNjaG1hbGZlbGR0LmNvbT5cbiAqIEB2ZXJzaW9uIDEuNS4xXG4gKiBAbGluayBodHRwOi8vanF2bWFwLmNvbVxuICogQGxpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL21hbmlmZXN0aW50ZXJhY3RpdmUvanF2bWFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIEBidWlsZGRhdGUgMjAxNi8wNi8wMlxuICovXG5cbnZhciBWZWN0b3JDYW52YXMgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgcGFyYW1zKSB7XG4gIHRoaXMubW9kZSA9IHdpbmRvdy5TVkdBbmdsZSA/ICdzdmcnIDogJ3ZtbCc7XG4gIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuXG4gIGlmICh0aGlzLm1vZGUgPT09ICdzdmcnKSB7XG4gICAgdGhpcy5jcmVhdGVTdmdOb2RlID0gZnVuY3Rpb24gKG5vZGVOYW1lKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHRoaXMuc3ZnbnMsIG5vZGVOYW1lKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWRvY3VtZW50Lm5hbWVzcGFjZXMucnZtbCkge1xuICAgICAgICBkb2N1bWVudC5uYW1lc3BhY2VzLmFkZCgncnZtbCcsICd1cm46c2NoZW1hcy1taWNyb3NvZnQtY29tOnZtbCcpO1xuICAgICAgfVxuICAgICAgdGhpcy5jcmVhdGVWbWxOb2RlID0gZnVuY3Rpb24gKHRhZ05hbWUpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJzxydm1sOicgKyB0YWdOYW1lICsgJyBjbGFzcz1cInJ2bWxcIj4nKTtcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5jcmVhdGVWbWxOb2RlID0gZnVuY3Rpb24gKHRhZ05hbWUpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJzwnICsgdGFnTmFtZSArICcgeG1sbnM9XCJ1cm46c2NoZW1hcy1taWNyb3NvZnQuY29tOnZtbFwiIGNsYXNzPVwicnZtbFwiPicpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5jcmVhdGVTdHlsZVNoZWV0KCkuYWRkUnVsZSgnLnJ2bWwnLCAnYmVoYXZpb3I6dXJsKCNkZWZhdWx0I1ZNTCknKTtcbiAgfVxuXG4gIGlmICh0aGlzLm1vZGUgPT09ICdzdmcnKSB7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZVN2Z05vZGUoJ3N2ZycpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVWbWxOb2RlKCdncm91cCcpO1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgfVxuXG4gIHRoaXMuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbn07XG5cblZlY3RvckNhbnZhcy5wcm90b3R5cGUgPSB7XG4gIHN2Z25zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICBtb2RlOiAnc3ZnJyxcbiAgd2lkdGg6IDAsXG4gIGhlaWdodDogMCxcbiAgY2FudmFzOiBudWxsXG59O1xuXG52YXIgQ29sb3JTY2FsZSA9IGZ1bmN0aW9uIChjb2xvcnMsIG5vcm1hbGl6ZUZ1bmN0aW9uLCBtaW5WYWx1ZSwgbWF4VmFsdWUpIHtcbiAgaWYgKGNvbG9ycykge1xuICAgIHRoaXMuc2V0Q29sb3JzKGNvbG9ycyk7XG4gIH1cbiAgaWYgKG5vcm1hbGl6ZUZ1bmN0aW9uKSB7XG4gICAgdGhpcy5zZXROb3JtYWxpemVGdW5jdGlvbihub3JtYWxpemVGdW5jdGlvbik7XG4gIH1cbiAgaWYgKG1pblZhbHVlKSB7XG4gICAgdGhpcy5zZXRNaW4obWluVmFsdWUpO1xuICB9XG4gIGlmIChtaW5WYWx1ZSkge1xuICAgIHRoaXMuc2V0TWF4KG1heFZhbHVlKTtcbiAgfVxufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUgPSB7XG4gIGNvbG9yczogW11cbn07XG5cbnZhciBKUVZNYXAgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgdmFyIG1hcCA9IHRoaXM7XG4gIHZhciBtYXBEYXRhID0gSlFWTWFwLm1hcHNbcGFyYW1zLm1hcF07XG4gIHZhciBtYXBQaW5zO1xuXG4gIGlmKCAhbWFwRGF0YSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwiJyArIHBhcmFtcy5tYXAgKyAnXCIgbWFwIHBhcmFtZXRlci4gUGxlYXNlIG1ha2Ugc3VyZSB5b3UgaGF2ZSBsb2FkZWQgdGhpcyBtYXAgZmlsZSBpbiB5b3VyIEhUTUwuJyk7XG4gIH1cblxuICB0aGlzLnNlbGVjdGVkUmVnaW9ucyA9IFtdO1xuICB0aGlzLm11bHRpU2VsZWN0UmVnaW9uID0gcGFyYW1zLm11bHRpU2VsZWN0UmVnaW9uO1xuXG4gIHRoaXMuY29udGFpbmVyID0gcGFyYW1zLmNvbnRhaW5lcjtcblxuICB0aGlzLmRlZmF1bHRXaWR0aCA9IG1hcERhdGEud2lkdGg7XG4gIHRoaXMuZGVmYXVsdEhlaWdodCA9IG1hcERhdGEuaGVpZ2h0O1xuXG4gIHRoaXMuY29sb3IgPSBwYXJhbXMuY29sb3I7XG4gIHRoaXMuc2VsZWN0ZWRDb2xvciA9IHBhcmFtcy5zZWxlY3RlZENvbG9yO1xuICB0aGlzLmhvdmVyQ29sb3IgPSBwYXJhbXMuaG92ZXJDb2xvcjtcbiAgdGhpcy5ob3ZlckNvbG9ycyA9IHBhcmFtcy5ob3ZlckNvbG9ycztcbiAgdGhpcy5ob3Zlck9wYWNpdHkgPSBwYXJhbXMuaG92ZXJPcGFjaXR5O1xuICB0aGlzLnNldEJhY2tncm91bmRDb2xvcihwYXJhbXMuYmFja2dyb3VuZENvbG9yKTtcblxuICB0aGlzLndpZHRoID0gcGFyYW1zLmNvbnRhaW5lci53aWR0aCgpO1xuICB0aGlzLmhlaWdodCA9IHBhcmFtcy5jb250YWluZXIuaGVpZ2h0KCk7XG5cbiAgdGhpcy5yZXNpemUoKTtcblxuICBqUXVlcnkod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICAgIHZhciBuZXdXaWR0aCA9IHBhcmFtcy5jb250YWluZXIud2lkdGgoKTtcbiAgICB2YXIgbmV3SGVpZ2h0ID0gcGFyYW1zLmNvbnRhaW5lci5oZWlnaHQoKTtcblxuICAgIGlmKG5ld1dpZHRoICYmIG5ld0hlaWdodCl7XG4gICAgICBtYXAud2lkdGggPSBuZXdXaWR0aDtcbiAgICAgIG1hcC5oZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICBtYXAucmVzaXplKCk7XG4gICAgICBtYXAuY2FudmFzLnNldFNpemUobWFwLndpZHRoLCBtYXAuaGVpZ2h0KTtcbiAgICAgIG1hcC5hcHBseVRyYW5zZm9ybSgpO1xuXG4gICAgICB2YXIgcmVzaXplRXZlbnQgPSBqUXVlcnkuRXZlbnQoJ3Jlc2l6ZS5qcXZtYXAnKTtcbiAgICAgIGpRdWVyeShwYXJhbXMuY29udGFpbmVyKS50cmlnZ2VyKHJlc2l6ZUV2ZW50LCBbbmV3V2lkdGgsIG5ld0hlaWdodF0pO1xuXG4gICAgICBpZihtYXBQaW5zKXtcbiAgICAgICAgalF1ZXJ5KCcuanF2bWFwLXBpbicpLnJlbW92ZSgpO1xuICAgICAgICBtYXAucGluSGFuZGxlcnMgPSBmYWxzZTtcbiAgICAgICAgbWFwLnBsYWNlUGlucyhtYXBQaW5zLnBpbnMsIG1hcFBpbnMubW9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB0aGlzLmNhbnZhcyA9IG5ldyBWZWN0b3JDYW52YXModGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHBhcmFtcyk7XG4gIHBhcmFtcy5jb250YWluZXIuYXBwZW5kKHRoaXMuY2FudmFzLmNhbnZhcyk7XG5cbiAgdGhpcy5tYWtlRHJhZ2dhYmxlKCk7XG5cbiAgdGhpcy5yb290R3JvdXAgPSB0aGlzLmNhbnZhcy5jcmVhdGVHcm91cCh0cnVlKTtcblxuICB0aGlzLmluZGV4ID0gSlFWTWFwLm1hcEluZGV4O1xuICB0aGlzLmxhYmVsID0galF1ZXJ5KCc8ZGl2Lz4nKS5hZGRDbGFzcygnanF2bWFwLWxhYmVsJykuYXBwZW5kVG8oalF1ZXJ5KCdib2R5JykpLmhpZGUoKTtcblxuICBpZiAocGFyYW1zLmVuYWJsZVpvb20pIHtcbiAgICBqUXVlcnkoJzxkaXYvPicpLmFkZENsYXNzKCdqcXZtYXAtem9vbWluJykudGV4dCgnKycpLmFwcGVuZFRvKHBhcmFtcy5jb250YWluZXIpO1xuICAgIGpRdWVyeSgnPGRpdi8+JykuYWRkQ2xhc3MoJ2pxdm1hcC16b29tb3V0JykuaHRtbCgnJiN4MjIxMjsnKS5hcHBlbmRUbyhwYXJhbXMuY29udGFpbmVyKTtcbiAgfVxuXG4gIG1hcC5jb3VudHJpZXMgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gbWFwRGF0YS5wYXRocykge1xuICAgIHZhciBwYXRoID0gdGhpcy5jYW52YXMuY3JlYXRlUGF0aCh7XG4gICAgICBwYXRoOiBtYXBEYXRhLnBhdGhzW2tleV0ucGF0aFxuICAgIH0pO1xuXG4gICAgcGF0aC5zZXRGaWxsKHRoaXMuY29sb3IpO1xuICAgIHBhdGguaWQgPSBtYXAuZ2V0Q291bnRyeUlkKGtleSk7XG4gICAgbWFwLmNvdW50cmllc1trZXldID0gcGF0aDtcblxuICAgIGlmICh0aGlzLmNhbnZhcy5tb2RlID09PSAnc3ZnJykge1xuICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2pxdm1hcC1yZWdpb24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgalF1ZXJ5KHBhdGgpLmFkZENsYXNzKCdqcXZtYXAtcmVnaW9uJyk7XG4gICAgfVxuXG4gICAgalF1ZXJ5KHRoaXMucm9vdEdyb3VwKS5hcHBlbmQocGF0aCk7XG4gIH1cblxuICBqUXVlcnkocGFyYW1zLmNvbnRhaW5lcikuZGVsZWdhdGUodGhpcy5jYW52YXMubW9kZSA9PT0gJ3N2ZycgPyAncGF0aCcgOiAnc2hhcGUnLCAnbW91c2VvdmVyIG1vdXNlb3V0JywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgY29udGFpbmVyUGF0aCA9IGUudGFyZ2V0LFxuICAgICAgY29kZSA9IGUudGFyZ2V0LmlkLnNwbGl0KCdfJykucG9wKCksXG4gICAgICBsYWJlbFNob3dFdmVudCA9IGpRdWVyeS5FdmVudCgnbGFiZWxTaG93Lmpxdm1hcCcpLFxuICAgICAgcmVnaW9uTW91c2VPdmVyRXZlbnQgPSBqUXVlcnkuRXZlbnQoJ3JlZ2lvbk1vdXNlT3Zlci5qcXZtYXAnKTtcblxuICAgIGNvZGUgPSBjb2RlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAoZS50eXBlID09PSAnbW91c2VvdmVyJykge1xuICAgICAgalF1ZXJ5KHBhcmFtcy5jb250YWluZXIpLnRyaWdnZXIocmVnaW9uTW91c2VPdmVyRXZlbnQsIFtjb2RlLCBtYXBEYXRhLnBhdGhzW2NvZGVdLm5hbWVdKTtcbiAgICAgIGlmICghcmVnaW9uTW91c2VPdmVyRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgbWFwLmhpZ2hsaWdodChjb2RlLCBjb250YWluZXJQYXRoKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMuc2hvd1Rvb2x0aXApIHtcbiAgICAgICAgbWFwLmxhYmVsLnRleHQobWFwRGF0YS5wYXRoc1tjb2RlXS5uYW1lKTtcbiAgICAgICAgalF1ZXJ5KHBhcmFtcy5jb250YWluZXIpLnRyaWdnZXIobGFiZWxTaG93RXZlbnQsIFttYXAubGFiZWwsIGNvZGVdKTtcblxuICAgICAgICBpZiAoIWxhYmVsU2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgICAgbWFwLmxhYmVsLnNob3coKTtcbiAgICAgICAgICBtYXAubGFiZWxXaWR0aCA9IG1hcC5sYWJlbC53aWR0aCgpO1xuICAgICAgICAgIG1hcC5sYWJlbEhlaWdodCA9IG1hcC5sYWJlbC5oZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXAudW5oaWdobGlnaHQoY29kZSwgY29udGFpbmVyUGF0aCk7XG5cbiAgICAgIG1hcC5sYWJlbC5oaWRlKCk7XG4gICAgICBqUXVlcnkocGFyYW1zLmNvbnRhaW5lcikudHJpZ2dlcigncmVnaW9uTW91c2VPdXQuanF2bWFwJywgW2NvZGUsIG1hcERhdGEucGF0aHNbY29kZV0ubmFtZV0pO1xuICAgIH1cbiAgfSk7XG5cbiAgalF1ZXJ5KHBhcmFtcy5jb250YWluZXIpLmRlbGVnYXRlKHRoaXMuY2FudmFzLm1vZGUgPT09ICdzdmcnID8gJ3BhdGgnIDogJ3NoYXBlJywgJ2NsaWNrJywgZnVuY3Rpb24gKHJlZ2lvbkNsaWNrRXZlbnQpIHtcblxuICAgIHZhciB0YXJnZXRQYXRoID0gcmVnaW9uQ2xpY2tFdmVudC50YXJnZXQ7XG4gICAgdmFyIGNvZGUgPSByZWdpb25DbGlja0V2ZW50LnRhcmdldC5pZC5zcGxpdCgnXycpLnBvcCgpO1xuICAgIHZhciBtYXBDbGlja0V2ZW50ID0galF1ZXJ5LkV2ZW50KCdyZWdpb25DbGljay5qcXZtYXAnKTtcblxuICAgIGNvZGUgPSBjb2RlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBqUXVlcnkocGFyYW1zLmNvbnRhaW5lcikudHJpZ2dlcihtYXBDbGlja0V2ZW50LCBbY29kZSwgbWFwRGF0YS5wYXRoc1tjb2RlXS5uYW1lXSk7XG5cbiAgICBpZiAoICFwYXJhbXMubXVsdGlTZWxlY3RSZWdpb24gJiYgIW1hcENsaWNrRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIGZvciAodmFyIGtleVBhdGggaW4gbWFwRGF0YS5wYXRocykge1xuICAgICAgICBtYXAuY291bnRyaWVzW2tleVBhdGhdLmN1cnJlbnRGaWxsQ29sb3IgPSBtYXAuY291bnRyaWVzW2tleVBhdGhdLmdldE9yaWdpbmFsRmlsbCgpO1xuICAgICAgICBtYXAuY291bnRyaWVzW2tleVBhdGhdLnNldEZpbGwobWFwLmNvdW50cmllc1trZXlQYXRoXS5nZXRPcmlnaW5hbEZpbGwoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCAhbWFwQ2xpY2tFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgaWYgKG1hcC5pc1NlbGVjdGVkKGNvZGUpKSB7XG4gICAgICAgIG1hcC5kZXNlbGVjdChjb2RlLCB0YXJnZXRQYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hcC5zZWxlY3QoY29kZSwgdGFyZ2V0UGF0aCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAocGFyYW1zLnNob3dUb29sdGlwKSB7XG4gICAgcGFyYW1zLmNvbnRhaW5lci5tb3VzZW1vdmUoZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChtYXAubGFiZWwuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgdmFyIGxlZnQgPSBlLnBhZ2VYIC0gMTUgLSBtYXAubGFiZWxXaWR0aDtcbiAgICAgICAgdmFyIHRvcCA9IGUucGFnZVkgLSAxNSAtIG1hcC5sYWJlbEhlaWdodDtcblxuICAgICAgICBpZihsZWZ0IDwgMCkge1xuICAgICAgICAgIGxlZnQgPSBlLnBhZ2VYICsgMTU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodG9wIDwgMCkge1xuICAgICAgICAgIHRvcCA9IGUucGFnZVkgKyAxNTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcC5sYWJlbC5jc3Moe1xuICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgdG9wOiB0b3BcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0aGlzLnNldENvbG9ycyhwYXJhbXMuY29sb3JzKTtcblxuICB0aGlzLmNhbnZhcy5jYW52YXMuYXBwZW5kQ2hpbGQodGhpcy5yb290R3JvdXApO1xuXG4gIHRoaXMuYXBwbHlUcmFuc2Zvcm0oKTtcblxuICB0aGlzLmNvbG9yU2NhbGUgPSBuZXcgQ29sb3JTY2FsZShwYXJhbXMuc2NhbGVDb2xvcnMsIHBhcmFtcy5ub3JtYWxpemVGdW5jdGlvbiwgcGFyYW1zLnZhbHVlTWluLCBwYXJhbXMudmFsdWVNYXgpO1xuXG4gIGlmIChwYXJhbXMudmFsdWVzKSB7XG4gICAgdGhpcy52YWx1ZXMgPSBwYXJhbXMudmFsdWVzO1xuICAgIHRoaXMuc2V0VmFsdWVzKHBhcmFtcy52YWx1ZXMpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5zZWxlY3RlZFJlZ2lvbnMpIHtcbiAgICBpZiAocGFyYW1zLnNlbGVjdGVkUmVnaW9ucyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBmb3IodmFyIGsgaW4gcGFyYW1zLnNlbGVjdGVkUmVnaW9ucykge1xuICAgICAgICB0aGlzLnNlbGVjdChwYXJhbXMuc2VsZWN0ZWRSZWdpb25zW2tdLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdChwYXJhbXMuc2VsZWN0ZWRSZWdpb25zLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuYmluZFpvb21CdXR0b25zKCk7XG5cbiAgaWYocGFyYW1zLnBpbnMpIHtcbiAgICBtYXBQaW5zID0ge1xuICAgICAgcGluczogcGFyYW1zLnBpbnMsXG4gICAgICBtb2RlOiBwYXJhbXMucGluTW9kZVxuICAgIH07XG5cbiAgICB0aGlzLnBpbkhhbmRsZXJzID0gZmFsc2U7XG4gICAgdGhpcy5wbGFjZVBpbnMocGFyYW1zLnBpbnMsIHBhcmFtcy5waW5Nb2RlKTtcbiAgfVxuXG4gIGlmKHBhcmFtcy5zaG93TGFiZWxzKXtcbiAgICB0aGlzLnBpbkhhbmRsZXJzID0gZmFsc2U7XG5cbiAgICB2YXIgcGlucyA9IHt9O1xuICAgIGZvciAoa2V5IGluIG1hcC5jb3VudHJpZXMpe1xuICAgICAgaWYgKHR5cGVvZiBtYXAuY291bnRyaWVzW2tleV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYoICFwYXJhbXMucGlucyB8fCAhcGFyYW1zLnBpbnNba2V5XSApe1xuICAgICAgICAgIHBpbnNba2V5XSA9IGtleS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwUGlucyA9IHtcbiAgICAgIHBpbnM6IHBpbnMsXG4gICAgICBtb2RlOiAnY29udGVudCdcbiAgICB9O1xuXG4gICAgdGhpcy5wbGFjZVBpbnMocGlucywgJ2NvbnRlbnQnKTtcbiAgfVxuXG4gIEpRVk1hcC5tYXBJbmRleCsrO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZSA9IHtcbiAgdHJhbnNYOiAwLFxuICB0cmFuc1k6IDAsXG4gIHNjYWxlOiAxLFxuICBiYXNlVHJhbnNYOiAwLFxuICBiYXNlVHJhbnNZOiAwLFxuICBiYXNlU2NhbGU6IDEsXG4gIHdpZHRoOiAwLFxuICBoZWlnaHQ6IDAsXG4gIGNvdW50cmllczoge30sXG4gIGNvdW50cmllc0NvbG9yczoge30sXG4gIGNvdW50cmllc0RhdGE6IHt9LFxuICB6b29tU3RlcDogMS40LFxuICB6b29tTWF4U3RlcDogNCxcbiAgem9vbUN1clN0ZXA6IDFcbn07XG5cbkpRVk1hcC54bGluayA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJztcbkpRVk1hcC5tYXBJbmRleCA9IDE7XG5KUVZNYXAubWFwcyA9IHt9O1xuXG4oZnVuY3Rpb24oKXtcblxuICB2YXIgYXBpUGFyYW1zID0ge1xuICAgIGNvbG9yczogMSxcbiAgICB2YWx1ZXM6IDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiAxLFxuICAgIHNjYWxlQ29sb3JzOiAxLFxuICAgIG5vcm1hbGl6ZUZ1bmN0aW9uOiAxLFxuICAgIGVuYWJsZVpvb206IDEsXG4gICAgc2hvd1Rvb2x0aXA6IDEsXG4gICAgYm9yZGVyQ29sb3I6IDEsXG4gICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgYm9yZGVyT3BhY2l0eTogMSxcbiAgICBzZWxlY3RlZFJlZ2lvbnM6IDEsXG4gICAgbXVsdGlTZWxlY3RSZWdpb246IDFcbiAgfTtcblxuICB2YXIgYXBpRXZlbnRzID0ge1xuICAgIG9uTGFiZWxTaG93OiAnbGFiZWxTaG93JyxcbiAgICBvbkxvYWQ6ICdsb2FkJyxcbiAgICBvblJlZ2lvbk92ZXI6ICdyZWdpb25Nb3VzZU92ZXInLFxuICAgIG9uUmVnaW9uT3V0OiAncmVnaW9uTW91c2VPdXQnLFxuICAgIG9uUmVnaW9uQ2xpY2s6ICdyZWdpb25DbGljaycsXG4gICAgb25SZWdpb25TZWxlY3Q6ICdyZWdpb25TZWxlY3QnLFxuICAgIG9uUmVnaW9uRGVzZWxlY3Q6ICdyZWdpb25EZXNlbGVjdCcsXG4gICAgb25SZXNpemU6ICdyZXNpemUnXG4gIH07XG5cbiAgalF1ZXJ5LmZuLnZlY3Rvck1hcCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICB2YXIgZGVmYXVsdFBhcmFtcyA9IHtcbiAgICAgIG1hcDogJ3dvcmxkX2VuJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhNWJmZGQnLFxuICAgICAgY29sb3I6ICcjZjRmM2YwJyxcbiAgICAgIGhvdmVyQ29sb3I6ICcjYzlkZmFmJyxcbiAgICAgIGhvdmVyQ29sb3JzOiB7fSxcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjYzlkZmFmJyxcbiAgICAgIHNjYWxlQ29sb3JzOiBbJyNiNmQ2ZmYnLCAnIzAwNWFjZSddLFxuICAgICAgbm9ybWFsaXplRnVuY3Rpb246ICdsaW5lYXInLFxuICAgICAgZW5hYmxlWm9vbTogdHJ1ZSxcbiAgICAgIHNob3dUb29sdGlwOiB0cnVlLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjODE4MTgxJyxcbiAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgYm9yZGVyT3BhY2l0eTogMC4yNSxcbiAgICAgIHNlbGVjdGVkUmVnaW9uczogbnVsbCxcbiAgICAgIG11bHRpU2VsZWN0UmVnaW9uOiBmYWxzZVxuICAgIH0sIG1hcCA9IHRoaXMuZGF0YSgnbWFwT2JqZWN0Jyk7XG5cbiAgICBpZiAob3B0aW9ucyA9PT0gJ2FkZE1hcCcpIHtcbiAgICAgIEpRVk1hcC5tYXBzW2FyZ3VtZW50c1sxXV0gPSBhcmd1bWVudHNbMl07XG4gICAgfSBlbHNlIGlmIChvcHRpb25zID09PSAnc2V0JyAmJiBhcGlQYXJhbXNbYXJndW1lbnRzWzFdXSkge1xuICAgICAgbWFwWydzZXQnICsgYXJndW1lbnRzWzFdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYXJndW1lbnRzWzFdLnN1YnN0cigxKV0uYXBwbHkobWFwLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyAmJlxuICAgICAgdHlwZW9mIG1hcFtvcHRpb25zXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG1hcFtvcHRpb25zXS5hcHBseShtYXAsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBqUXVlcnkuZXh0ZW5kKGRlZmF1bHRQYXJhbXMsIG9wdGlvbnMpO1xuICAgICAgZGVmYXVsdFBhcmFtcy5jb250YWluZXIgPSB0aGlzO1xuICAgICAgdGhpcy5jc3MoeyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH0pO1xuXG4gICAgICBtYXAgPSBuZXcgSlFWTWFwKGRlZmF1bHRQYXJhbXMpO1xuXG4gICAgICB0aGlzLmRhdGEoJ21hcE9iamVjdCcsIG1hcCk7XG5cbiAgICAgIHRoaXMudW5iaW5kKCcuanF2bWFwJyk7XG5cbiAgICAgIGZvciAodmFyIGUgaW4gYXBpRXZlbnRzKSB7XG4gICAgICAgIGlmIChkZWZhdWx0UGFyYW1zW2VdKSB7XG4gICAgICAgICAgdGhpcy5iaW5kKGFwaUV2ZW50c1tlXSArICcuanF2bWFwJywgZGVmYXVsdFBhcmFtc1tlXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGxvYWRFdmVudCA9IGpRdWVyeS5FdmVudCgnbG9hZC5qcXZtYXAnKTtcbiAgICAgIGpRdWVyeShkZWZhdWx0UGFyYW1zLmNvbnRhaW5lcikudHJpZ2dlcihsb2FkRXZlbnQsIG1hcCk7XG5cbiAgICAgIHJldHVybiBtYXA7XG4gICAgfVxuICB9O1xuXG59KShqUXVlcnkpO1xuXG5Db2xvclNjYWxlLmFycmF5VG9SZ2IgPSBmdW5jdGlvbiAoYXIpIHtcbiAgdmFyIHJnYiA9ICcjJztcbiAgdmFyIGQ7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXIubGVuZ3RoOyBpKyspIHtcbiAgICBkID0gYXJbaV0udG9TdHJpbmcoMTYpO1xuICAgIHJnYiArPSBkLmxlbmd0aCA9PT0gMSA/ICcwJyArIGQgOiBkO1xuICB9XG4gIHJldHVybiByZ2I7XG59O1xuXG5Db2xvclNjYWxlLnByb3RvdHlwZS5nZXRDb2xvciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHRoaXMubm9ybWFsaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFsdWUgPSB0aGlzLm5vcm1hbGl6ZSh2YWx1ZSk7XG4gIH1cblxuICB2YXIgbGVuZ3RoZXMgPSBbXTtcbiAgdmFyIGZ1bGxMZW5ndGggPSAwO1xuICB2YXIgbDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29sb3JzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGwgPSB0aGlzLnZlY3Rvckxlbmd0aCh0aGlzLnZlY3RvclN1YnRyYWN0KHRoaXMuY29sb3JzW2kgKyAxXSwgdGhpcy5jb2xvcnNbaV0pKTtcbiAgICBsZW5ndGhlcy5wdXNoKGwpO1xuICAgIGZ1bGxMZW5ndGggKz0gbDtcbiAgfVxuXG4gIHZhciBjID0gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSAvIGZ1bGxMZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGVuZ3RoZXNbaV0gKj0gYztcbiAgfVxuXG4gIGkgPSAwO1xuICB2YWx1ZSAtPSB0aGlzLm1pblZhbHVlO1xuXG4gIHdoaWxlICh2YWx1ZSAtIGxlbmd0aGVzW2ldID49IDApIHtcbiAgICB2YWx1ZSAtPSBsZW5ndGhlc1tpXTtcbiAgICBpKys7XG4gIH1cblxuICB2YXIgY29sb3I7XG4gIGlmIChpID09PSB0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSB7XG4gICAgY29sb3IgPSB0aGlzLnZlY3RvclRvTnVtKHRoaXMuY29sb3JzW2ldKS50b1N0cmluZygxNik7XG4gIH0gZWxzZSB7XG4gICAgY29sb3IgPSAodGhpcy52ZWN0b3JUb051bSh0aGlzLnZlY3RvckFkZCh0aGlzLmNvbG9yc1tpXSwgdGhpcy52ZWN0b3JNdWx0KHRoaXMudmVjdG9yU3VidHJhY3QodGhpcy5jb2xvcnNbaSArIDFdLCB0aGlzLmNvbG9yc1tpXSksICh2YWx1ZSkgLyAobGVuZ3RoZXNbaV0pKSkpKS50b1N0cmluZygxNik7XG4gIH1cblxuICB3aGlsZSAoY29sb3IubGVuZ3RoIDwgNikge1xuICAgIGNvbG9yID0gJzAnICsgY29sb3I7XG4gIH1cbiAgcmV0dXJuICcjJyArIGNvbG9yO1xufTtcblxuQ29sb3JTY2FsZS5yZ2JUb0FycmF5ID0gZnVuY3Rpb24gKHJnYikge1xuICByZ2IgPSByZ2Iuc3Vic3RyKDEpO1xuICByZXR1cm4gW3BhcnNlSW50KHJnYi5zdWJzdHIoMCwgMiksIDE2KSwgcGFyc2VJbnQocmdiLnN1YnN0cigyLCAyKSwgMTYpLCBwYXJzZUludChyZ2Iuc3Vic3RyKDQsIDIpLCAxNildO1xufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUuc2V0Q29sb3JzID0gZnVuY3Rpb24gKGNvbG9ycykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbG9yc1tpXSA9IENvbG9yU2NhbGUucmdiVG9BcnJheShjb2xvcnNbaV0pO1xuICB9XG4gIHRoaXMuY29sb3JzID0gY29sb3JzO1xufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUuc2V0TWF4ID0gZnVuY3Rpb24gKG1heCkge1xuICB0aGlzLmNsZWFyTWF4VmFsdWUgPSBtYXg7XG4gIGlmICh0eXBlb2YgdGhpcy5ub3JtYWxpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLm1heFZhbHVlID0gdGhpcy5ub3JtYWxpemUobWF4KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm1heFZhbHVlID0gbWF4O1xuICB9XG59O1xuXG5Db2xvclNjYWxlLnByb3RvdHlwZS5zZXRNaW4gPSBmdW5jdGlvbiAobWluKSB7XG4gIHRoaXMuY2xlYXJNaW5WYWx1ZSA9IG1pbjtcblxuICBpZiAodHlwZW9mIHRoaXMubm9ybWFsaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5taW5WYWx1ZSA9IHRoaXMubm9ybWFsaXplKG1pbik7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5taW5WYWx1ZSA9IG1pbjtcbiAgfVxufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUuc2V0Tm9ybWFsaXplRnVuY3Rpb24gPSBmdW5jdGlvbiAoZikge1xuICBpZiAoZiA9PT0gJ3BvbHlub21pYWwnKSB7XG4gICAgdGhpcy5ub3JtYWxpemUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBNYXRoLnBvdyh2YWx1ZSwgMC4yKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKGYgPT09ICdsaW5lYXInKSB7XG4gICAgZGVsZXRlIHRoaXMubm9ybWFsaXplO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubm9ybWFsaXplID0gZjtcbiAgfVxuICB0aGlzLnNldE1pbih0aGlzLmNsZWFyTWluVmFsdWUpO1xuICB0aGlzLnNldE1heCh0aGlzLmNsZWFyTWF4VmFsdWUpO1xufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUudmVjdG9yQWRkID0gZnVuY3Rpb24gKHZlY3RvcjEsIHZlY3RvcjIpIHtcbiAgdmFyIHZlY3RvciA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlY3RvcjEubGVuZ3RoOyBpKyspIHtcbiAgICB2ZWN0b3JbaV0gPSB2ZWN0b3IxW2ldICsgdmVjdG9yMltpXTtcbiAgfVxuICByZXR1cm4gdmVjdG9yO1xufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUudmVjdG9yTGVuZ3RoID0gZnVuY3Rpb24gKHZlY3Rvcikge1xuICB2YXIgcmVzdWx0ID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZWN0b3IubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHQgKz0gdmVjdG9yW2ldICogdmVjdG9yW2ldO1xuICB9XG4gIHJldHVybiBNYXRoLnNxcnQocmVzdWx0KTtcbn07XG5cbkNvbG9yU2NhbGUucHJvdG90eXBlLnZlY3Rvck11bHQgPSBmdW5jdGlvbiAodmVjdG9yLCBudW0pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlY3Rvci5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdFtpXSA9IHZlY3RvcltpXSAqIG51bTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuQ29sb3JTY2FsZS5wcm90b3R5cGUudmVjdG9yU3VidHJhY3QgPSBmdW5jdGlvbiAodmVjdG9yMSwgdmVjdG9yMikge1xuICB2YXIgdmVjdG9yID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmVjdG9yMS5sZW5ndGg7IGkrKykge1xuICAgIHZlY3RvcltpXSA9IHZlY3RvcjFbaV0gLSB2ZWN0b3IyW2ldO1xuICB9XG4gIHJldHVybiB2ZWN0b3I7XG59O1xuXG5Db2xvclNjYWxlLnByb3RvdHlwZS52ZWN0b3JUb051bSA9IGZ1bmN0aW9uICh2ZWN0b3IpIHtcbiAgdmFyIG51bSA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmVjdG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgbnVtICs9IE1hdGgucm91bmQodmVjdG9yW2ldKSAqIE1hdGgucG93KDI1NiwgdmVjdG9yLmxlbmd0aCAtIGkgLSAxKTtcbiAgfVxuICByZXR1cm4gbnVtO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5hcHBseVRyYW5zZm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1heFRyYW5zWCwgbWF4VHJhbnNZLCBtaW5UcmFuc1gsIG1pblRyYW5zWTtcbiAgaWYgKHRoaXMuZGVmYXVsdFdpZHRoICogdGhpcy5zY2FsZSA8PSB0aGlzLndpZHRoKSB7XG4gICAgbWF4VHJhbnNYID0gKHRoaXMud2lkdGggLSB0aGlzLmRlZmF1bHRXaWR0aCAqIHRoaXMuc2NhbGUpIC8gKDIgKiB0aGlzLnNjYWxlKTtcbiAgICBtaW5UcmFuc1ggPSAodGhpcy53aWR0aCAtIHRoaXMuZGVmYXVsdFdpZHRoICogdGhpcy5zY2FsZSkgLyAoMiAqIHRoaXMuc2NhbGUpO1xuICB9IGVsc2Uge1xuICAgIG1heFRyYW5zWCA9IDA7XG4gICAgbWluVHJhbnNYID0gKHRoaXMud2lkdGggLSB0aGlzLmRlZmF1bHRXaWR0aCAqIHRoaXMuc2NhbGUpIC8gdGhpcy5zY2FsZTtcbiAgfVxuXG4gIGlmICh0aGlzLmRlZmF1bHRIZWlnaHQgKiB0aGlzLnNjYWxlIDw9IHRoaXMuaGVpZ2h0KSB7XG4gICAgbWF4VHJhbnNZID0gKHRoaXMuaGVpZ2h0IC0gdGhpcy5kZWZhdWx0SGVpZ2h0ICogdGhpcy5zY2FsZSkgLyAoMiAqIHRoaXMuc2NhbGUpO1xuICAgIG1pblRyYW5zWSA9ICh0aGlzLmhlaWdodCAtIHRoaXMuZGVmYXVsdEhlaWdodCAqIHRoaXMuc2NhbGUpIC8gKDIgKiB0aGlzLnNjYWxlKTtcbiAgfSBlbHNlIHtcbiAgICBtYXhUcmFuc1kgPSAwO1xuICAgIG1pblRyYW5zWSA9ICh0aGlzLmhlaWdodCAtIHRoaXMuZGVmYXVsdEhlaWdodCAqIHRoaXMuc2NhbGUpIC8gdGhpcy5zY2FsZTtcbiAgfVxuXG4gIGlmICh0aGlzLnRyYW5zWSA+IG1heFRyYW5zWSkge1xuICAgIHRoaXMudHJhbnNZID0gbWF4VHJhbnNZO1xuICB9IGVsc2UgaWYgKHRoaXMudHJhbnNZIDwgbWluVHJhbnNZKSB7XG4gICAgdGhpcy50cmFuc1kgPSBtaW5UcmFuc1k7XG4gIH1cbiAgaWYgKHRoaXMudHJhbnNYID4gbWF4VHJhbnNYKSB7XG4gICAgdGhpcy50cmFuc1ggPSBtYXhUcmFuc1g7XG4gIH0gZWxzZSBpZiAodGhpcy50cmFuc1ggPCBtaW5UcmFuc1gpIHtcbiAgICB0aGlzLnRyYW5zWCA9IG1pblRyYW5zWDtcbiAgfVxuXG4gIHRoaXMuY2FudmFzLmFwcGx5VHJhbnNmb3JtUGFyYW1zKHRoaXMuc2NhbGUsIHRoaXMudHJhbnNYLCB0aGlzLnRyYW5zWSk7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLmJpbmRab29tQnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1hcCA9IHRoaXM7XG4gIHRoaXMuY29udGFpbmVyLmZpbmQoJy5qcXZtYXAtem9vbWluJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICBtYXAuem9vbUluKCk7XG4gIH0pO1xuICB0aGlzLmNvbnRhaW5lci5maW5kKCcuanF2bWFwLXpvb21vdXQnKS5jbGljayhmdW5jdGlvbigpe1xuICAgIG1hcC56b29tT3V0KCk7XG4gIH0pO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5kZXNlbGVjdCA9IGZ1bmN0aW9uIChjYywgcGF0aCkge1xuICBjYyA9IGNjLnRvTG93ZXJDYXNlKCk7XG4gIHBhdGggPSBwYXRoIHx8IGpRdWVyeSgnIycgKyB0aGlzLmdldENvdW50cnlJZChjYykpWzBdO1xuXG4gIGlmICh0aGlzLmlzU2VsZWN0ZWQoY2MpKSB7XG4gICAgdGhpcy5zZWxlY3RlZFJlZ2lvbnMuc3BsaWNlKHRoaXMuc2VsZWN0SW5kZXgoY2MpLCAxKTtcblxuICAgIGpRdWVyeSh0aGlzLmNvbnRhaW5lcikudHJpZ2dlcigncmVnaW9uRGVzZWxlY3QuanF2bWFwJywgW2NjXSk7XG4gICAgcGF0aC5jdXJyZW50RmlsbENvbG9yID0gcGF0aC5nZXRPcmlnaW5hbEZpbGwoKTtcbiAgICBwYXRoLnNldEZpbGwocGF0aC5nZXRPcmlnaW5hbEZpbGwoKSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuY291bnRyaWVzKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkUmVnaW9ucy5zcGxpY2UodGhpcy5zZWxlY3RlZFJlZ2lvbnMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgIHRoaXMuY291bnRyaWVzW2tleV0uY3VycmVudEZpbGxDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICB0aGlzLmNvdW50cmllc1trZXldLnNldEZpbGwodGhpcy5jb2xvcik7XG4gICAgfVxuICB9XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLmdldENvdW50cnlJZCA9IGZ1bmN0aW9uIChjYykge1xuICByZXR1cm4gJ2pxdm1hcCcgKyB0aGlzLmluZGV4ICsgJ18nICsgY2M7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLmdldFBpbiA9IGZ1bmN0aW9uKGNjKXtcbiAgdmFyIHBpbk9iaiA9IGpRdWVyeSgnIycgKyB0aGlzLmdldFBpbklkKGNjKSk7XG4gIHJldHVybiBwaW5PYmouaHRtbCgpO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5nZXRQaW5JZCA9IGZ1bmN0aW9uIChjYykge1xuICByZXR1cm4gdGhpcy5nZXRDb3VudHJ5SWQoY2MpICsgJ19waW4nO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5nZXRQaW5zID0gZnVuY3Rpb24oKXtcbiAgdmFyIHBpbnMgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcuanF2bWFwLXBpbicpO1xuICB2YXIgcmV0ID0ge307XG4gIGpRdWVyeS5lYWNoKHBpbnMsIGZ1bmN0aW9uKGluZGV4LCBwaW5PYmope1xuICAgIHBpbk9iaiA9IGpRdWVyeShwaW5PYmopO1xuICAgIHZhciBjYyA9IHBpbk9iai5hdHRyKCdmb3InKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBwaW5Db250ZW50ID0gcGluT2JqLmh0bWwoKTtcbiAgICByZXRbY2NdID0gcGluQ29udGVudDtcbiAgfSk7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXQpO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5oaWdobGlnaHQgPSBmdW5jdGlvbiAoY2MsIHBhdGgpIHtcbiAgcGF0aCA9IHBhdGggfHwgalF1ZXJ5KCcjJyArIHRoaXMuZ2V0Q291bnRyeUlkKGNjKSlbMF07XG4gIGlmICh0aGlzLmhvdmVyT3BhY2l0eSkge1xuICAgIHBhdGguc2V0T3BhY2l0eSh0aGlzLmhvdmVyT3BhY2l0eSk7XG4gIH0gZWxzZSBpZiAodGhpcy5ob3ZlckNvbG9ycyAmJiAoY2MgaW4gdGhpcy5ob3ZlckNvbG9ycykpIHtcbiAgICBwYXRoLmN1cnJlbnRGaWxsQ29sb3IgPSBwYXRoLmdldEZpbGwoKSArICcnO1xuICAgIHBhdGguc2V0RmlsbCh0aGlzLmhvdmVyQ29sb3JzW2NjXSk7XG4gIH0gZWxzZSBpZiAodGhpcy5ob3ZlckNvbG9yKSB7XG4gICAgcGF0aC5jdXJyZW50RmlsbENvbG9yID0gcGF0aC5nZXRGaWxsKCkgKyAnJztcbiAgICBwYXRoLnNldEZpbGwodGhpcy5ob3ZlckNvbG9yKTtcbiAgfVxufTtcblxuSlFWTWFwLnByb3RvdHlwZS5pc1NlbGVjdGVkID0gZnVuY3Rpb24oY2MpIHtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0SW5kZXgoY2MpID49IDA7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLm1ha2VEcmFnZ2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtb3VzZURvd24gPSBmYWxzZTtcbiAgdmFyIG9sZFBhZ2VYLCBvbGRQYWdlWTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHNlbGYuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgc2VsZi5pc01vdmluZ1RpbWVvdXQgPSBmYWxzZTtcblxuICB2YXIgbGFzdFRvdWNoQ291bnQ7XG4gIHZhciB0b3VjaENlbnRlclg7XG4gIHZhciB0b3VjaENlbnRlclk7XG4gIHZhciB0b3VjaFN0YXJ0RGlzdGFuY2U7XG4gIHZhciB0b3VjaFN0YXJ0U2NhbGU7XG4gIHZhciB0b3VjaFg7XG4gIHZhciB0b3VjaFk7XG5cbiAgdGhpcy5jb250YWluZXIubW91c2Vtb3ZlKGZ1bmN0aW9uIChlKSB7XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBzZWxmLnRyYW5zWCAtPSAob2xkUGFnZVggLSBlLnBhZ2VYKSAvIHNlbGYuc2NhbGU7XG4gICAgICBzZWxmLnRyYW5zWSAtPSAob2xkUGFnZVkgLSBlLnBhZ2VZKSAvIHNlbGYuc2NhbGU7XG5cbiAgICAgIHNlbGYuYXBwbHlUcmFuc2Zvcm0oKTtcblxuICAgICAgb2xkUGFnZVggPSBlLnBhZ2VYO1xuICAgICAgb2xkUGFnZVkgPSBlLnBhZ2VZO1xuXG4gICAgICBzZWxmLmlzTW92aW5nID0gdHJ1ZTtcbiAgICAgIGlmIChzZWxmLmlzTW92aW5nVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5pc01vdmluZ1RpbWVvdXQpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLmNvbnRhaW5lci50cmlnZ2VyKCdkcmFnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH0pLm1vdXNlZG93bihmdW5jdGlvbiAoZSkge1xuXG4gICAgbW91c2VEb3duID0gdHJ1ZTtcbiAgICBvbGRQYWdlWCA9IGUucGFnZVg7XG4gICAgb2xkUGFnZVkgPSBlLnBhZ2VZO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH0pLm1vdXNldXAoZnVuY3Rpb24gKCkge1xuXG4gICAgbW91c2VEb3duID0gZmFsc2U7XG5cbiAgICBjbGVhclRpbWVvdXQoc2VsZi5pc01vdmluZ1RpbWVvdXQpO1xuICAgIHNlbGYuaXNNb3ZpbmdUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLmlzTW92aW5nID0gZmFsc2U7XG4gICAgfSwgMTAwKTtcblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9KS5tb3VzZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICBpZihtb3VzZURvd24gJiYgc2VsZi5pc01vdmluZyl7XG5cbiAgICAgIGNsZWFyVGltZW91dChzZWxmLmlzTW92aW5nVGltZW91dCk7XG4gICAgICBzZWxmLmlzTW92aW5nVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBtb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgc2VsZi5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgfSwgMTAwKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgalF1ZXJ5KHRoaXMuY29udGFpbmVyKS5iaW5kKCd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgdmFyIG9mZnNldDtcbiAgICB2YXIgc2NhbGU7XG4gICAgdmFyIHRvdWNoZXMgPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlcztcbiAgICB2YXIgdHJhbnNmb3JtWE9sZDtcbiAgICB2YXIgdHJhbnNmb3JtWU9sZDtcblxuICAgIGlmICh0b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaWYgKGxhc3RUb3VjaENvdW50ID09PSAxKSB7XG5cbiAgICAgICAgaWYodG91Y2hYID09PSB0b3VjaGVzWzBdLnBhZ2VYICYmIHRvdWNoWSA9PT0gdG91Y2hlc1swXS5wYWdlWSl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJhbnNmb3JtWE9sZCA9IHNlbGYudHJhbnNYO1xuICAgICAgICB0cmFuc2Zvcm1ZT2xkID0gc2VsZi50cmFuc1k7XG5cbiAgICAgICAgc2VsZi50cmFuc1ggLT0gKHRvdWNoWCAtIHRvdWNoZXNbMF0ucGFnZVgpIC8gc2VsZi5zY2FsZTtcbiAgICAgICAgc2VsZi50cmFuc1kgLT0gKHRvdWNoWSAtIHRvdWNoZXNbMF0ucGFnZVkpIC8gc2VsZi5zY2FsZTtcblxuICAgICAgICBzZWxmLmFwcGx5VHJhbnNmb3JtKCk7XG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybVhPbGQgIT09IHNlbGYudHJhbnNYIHx8IHRyYW5zZm9ybVlPbGQgIT09IHNlbGYudHJhbnNZKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5pc01vdmluZyA9IHRydWU7XG4gICAgICAgIGlmIChzZWxmLmlzTW92aW5nVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLmlzTW92aW5nVGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdG91Y2hYID0gdG91Y2hlc1swXS5wYWdlWDtcbiAgICAgIHRvdWNoWSA9IHRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgICB9IGVsc2UgaWYgKHRvdWNoZXMubGVuZ3RoID09PSAyKSB7XG5cbiAgICAgIGlmIChsYXN0VG91Y2hDb3VudCA9PT0gMikge1xuICAgICAgICBzY2FsZSA9IE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KHRvdWNoZXNbMF0ucGFnZVggLSB0b3VjaGVzWzFdLnBhZ2VYLCAyKSArXG4gICAgICAgICAgICBNYXRoLnBvdyh0b3VjaGVzWzBdLnBhZ2VZIC0gdG91Y2hlc1sxXS5wYWdlWSwgMilcbiAgICAgICAgICApIC8gdG91Y2hTdGFydERpc3RhbmNlO1xuXG4gICAgICAgIHNlbGYuc2V0U2NhbGUoXG4gICAgICAgICAgdG91Y2hTdGFydFNjYWxlICogc2NhbGUsXG4gICAgICAgICAgdG91Y2hDZW50ZXJYLFxuICAgICAgICAgIHRvdWNoQ2VudGVyWVxuICAgICAgICApO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBvZmZzZXQgPSBqUXVlcnkoc2VsZi5jb250YWluZXIpLm9mZnNldCgpO1xuICAgICAgICBpZiAodG91Y2hlc1swXS5wYWdlWCA+IHRvdWNoZXNbMV0ucGFnZVgpIHtcbiAgICAgICAgICB0b3VjaENlbnRlclggPSB0b3VjaGVzWzFdLnBhZ2VYICsgKHRvdWNoZXNbMF0ucGFnZVggLSB0b3VjaGVzWzFdLnBhZ2VYKSAvIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG91Y2hDZW50ZXJYID0gdG91Y2hlc1swXS5wYWdlWCArICh0b3VjaGVzWzFdLnBhZ2VYIC0gdG91Y2hlc1swXS5wYWdlWCkgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvdWNoZXNbMF0ucGFnZVkgPiB0b3VjaGVzWzFdLnBhZ2VZKSB7XG4gICAgICAgICAgdG91Y2hDZW50ZXJZID0gdG91Y2hlc1sxXS5wYWdlWSArICh0b3VjaGVzWzBdLnBhZ2VZIC0gdG91Y2hlc1sxXS5wYWdlWSkgLyAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvdWNoQ2VudGVyWSA9IHRvdWNoZXNbMF0ucGFnZVkgKyAodG91Y2hlc1sxXS5wYWdlWSAtIHRvdWNoZXNbMF0ucGFnZVkpIC8gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvdWNoQ2VudGVyWCAtPSBvZmZzZXQubGVmdDtcbiAgICAgICAgdG91Y2hDZW50ZXJZIC09IG9mZnNldC50b3A7XG4gICAgICAgIHRvdWNoU3RhcnRTY2FsZSA9IHNlbGYuc2NhbGU7XG5cbiAgICAgICAgdG91Y2hTdGFydERpc3RhbmNlID0gTWF0aC5zcXJ0KFxuICAgICAgICAgIE1hdGgucG93KHRvdWNoZXNbMF0ucGFnZVggLSB0b3VjaGVzWzFdLnBhZ2VYLCAyKSArXG4gICAgICAgICAgTWF0aC5wb3codG91Y2hlc1swXS5wYWdlWSAtIHRvdWNoZXNbMV0ucGFnZVksIDIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdFRvdWNoQ291bnQgPSB0b3VjaGVzLmxlbmd0aDtcbiAgfSk7XG5cbiAgalF1ZXJ5KHRoaXMuY29udGFpbmVyKS5iaW5kKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgIGxhc3RUb3VjaENvdW50ID0gMDtcbiAgfSk7XG5cbiAgalF1ZXJ5KHRoaXMuY29udGFpbmVyKS5iaW5kKCd0b3VjaGVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBsYXN0VG91Y2hDb3VudCA9IDA7XG4gIH0pO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5wbGFjZVBpbnMgPSBmdW5jdGlvbihwaW5zLCBwaW5Nb2RlKXtcbiAgdmFyIG1hcCA9IHRoaXM7XG5cbiAgaWYoIXBpbk1vZGUgfHwgKHBpbk1vZGUgIT09ICdjb250ZW50JyAmJiBwaW5Nb2RlICE9PSAnaWQnKSkge1xuICAgIHBpbk1vZGUgPSAnY29udGVudCc7XG4gIH1cblxuICBpZihwaW5Nb2RlID09PSAnY29udGVudCcpIHsvL3RyZWF0IHBpbiBhcyBjb250ZW50XG4gICAgalF1ZXJ5LmVhY2gocGlucywgZnVuY3Rpb24oaW5kZXgsIHBpbil7XG4gICAgICBpZihqUXVlcnkoJyMnICsgbWFwLmdldENvdW50cnlJZChpbmRleCkpLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHBpbkluZGV4ID0gbWFwLmdldFBpbklkKGluZGV4KTtcbiAgICAgIHZhciAkcGluID0galF1ZXJ5KCcjJyArIHBpbkluZGV4KTtcbiAgICAgIGlmKCRwaW4ubGVuZ3RoID4gMCl7XG4gICAgICAgICRwaW4ucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBtYXAuY29udGFpbmVyLmFwcGVuZCgnPGRpdiBpZD1cIicgKyBwaW5JbmRleCArICdcIiBmb3I9XCInICsgaW5kZXggKyAnXCIgY2xhc3M9XCJqcXZtYXAtcGluXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZVwiPicgKyBwaW4gKyAnPC9kaXY+Jyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7IC8vdHJlYXQgcGluIGFzIGlkIG9mIGFuIGh0bWwgY29udGVudFxuICAgIGpRdWVyeS5lYWNoKHBpbnMsIGZ1bmN0aW9uKGluZGV4LCBwaW4pe1xuICAgICAgaWYoalF1ZXJ5KCcjJyArIG1hcC5nZXRDb3VudHJ5SWQoaW5kZXgpKS5sZW5ndGggPT09IDApe1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcGluSW5kZXggPSBtYXAuZ2V0UGluSWQoaW5kZXgpO1xuICAgICAgdmFyICRwaW4gPSBqUXVlcnkoJyMnICsgcGluSW5kZXgpO1xuICAgICAgaWYoJHBpbi5sZW5ndGggPiAwKXtcbiAgICAgICAgJHBpbi5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIG1hcC5jb250YWluZXIuYXBwZW5kKCc8ZGl2IGlkPVwiJyArIHBpbkluZGV4ICsgJ1wiIGZvcj1cIicgKyBpbmRleCArICdcIiBjbGFzcz1cImpxdm1hcC1waW5cIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlXCI+PC9kaXY+Jyk7XG4gICAgICAkcGluLmFwcGVuZChqUXVlcnkoJyMnICsgcGluKSk7XG4gICAgfSk7XG4gIH1cblxuICB0aGlzLnBvc2l0aW9uUGlucygpO1xuICBpZighdGhpcy5waW5IYW5kbGVycyl7XG4gICAgdGhpcy5waW5IYW5kbGVycyA9IHRydWU7XG4gICAgdmFyIHBvc2l0aW9uRml4ID0gZnVuY3Rpb24oKXtcbiAgICAgIG1hcC5wb3NpdGlvblBpbnMoKTtcbiAgICB9O1xuICAgIHRoaXMuY29udGFpbmVyLmJpbmQoJ3pvb21JbicsIHBvc2l0aW9uRml4KVxuICAgICAgLmJpbmQoJ3pvb21PdXQnLCBwb3NpdGlvbkZpeClcbiAgICAgIC5iaW5kKCdkcmFnJywgcG9zaXRpb25GaXgpO1xuICB9XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnBvc2l0aW9uUGlucyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBtYXAgPSB0aGlzO1xuICB2YXIgcGlucyA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5qcXZtYXAtcGluJyk7XG4gIGpRdWVyeS5lYWNoKHBpbnMsIGZ1bmN0aW9uKGluZGV4LCBwaW5PYmope1xuICAgIHBpbk9iaiA9IGpRdWVyeShwaW5PYmopO1xuICAgIHZhciBjb3VudHJ5SWQgPSBtYXAuZ2V0Q291bnRyeUlkKHBpbk9iai5hdHRyKCdmb3InKS50b0xvd2VyQ2FzZSgpKTtcbiAgICB2YXIgY291bnRyeU9iaiA9IGpRdWVyeSgnIycgKyBjb3VudHJ5SWQpO1xuICAgIHZhciBiYm94ID0gY291bnRyeU9ialswXS5nZXRCQm94KCk7XG5cbiAgICB2YXIgc2NhbGUgPSBtYXAuc2NhbGU7XG4gICAgdmFyIHJvb3RDb29yZHMgPSBtYXAuY2FudmFzLnJvb3RHcm91cC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgbWFwQ29vcmRzID0gbWFwLmNvbnRhaW5lclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgY29vcmRzID0ge1xuICAgICAgbGVmdDogcm9vdENvb3Jkcy5sZWZ0IC0gbWFwQ29vcmRzLmxlZnQsXG4gICAgICB0b3A6IHJvb3RDb29yZHMudG9wIC0gbWFwQ29vcmRzLnRvcFxuICAgIH07XG5cbiAgICB2YXIgbWlkZGxlWCA9IChiYm94LnggKiBzY2FsZSkgKyAoKGJib3gud2lkdGggKiBzY2FsZSkgLyAyKTtcbiAgICB2YXIgbWlkZGxlWSA9IChiYm94LnkgKiBzY2FsZSkgKyAoKGJib3guaGVpZ2h0ICogc2NhbGUpIC8gMik7XG5cbiAgICBwaW5PYmouY3NzKHtcbiAgICAgIGxlZnQ6IGNvb3Jkcy5sZWZ0ICsgbWlkZGxlWCAtIChwaW5PYmoud2lkdGgoKSAvIDIpLFxuICAgICAgdG9wOiBjb29yZHMudG9wICsgbWlkZGxlWSAtIChwaW5PYmouaGVpZ2h0KCkgLyAyKVxuICAgIH0pO1xuICB9KTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUucmVtb3ZlUGluID0gZnVuY3Rpb24oY2MpIHtcbiAgY2MgPSBjYy50b0xvd2VyQ2FzZSgpO1xuICBqUXVlcnkoJyMnICsgdGhpcy5nZXRQaW5JZChjYykpLnJlbW92ZSgpO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5yZW1vdmVQaW5zID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5jb250YWluZXIuZmluZCgnLmpxdm1hcC1waW4nKS5yZW1vdmUoKTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGtleSBpbiB0aGlzLmNvdW50cmllcykge1xuICAgIHRoaXMuY291bnRyaWVzW2tleV0uc2V0RmlsbCh0aGlzLmNvbG9yKTtcbiAgfVxuICB0aGlzLnNjYWxlID0gdGhpcy5iYXNlU2NhbGU7XG4gIHRoaXMudHJhbnNYID0gdGhpcy5iYXNlVHJhbnNYO1xuICB0aGlzLnRyYW5zWSA9IHRoaXMuYmFzZVRyYW5zWTtcbiAgdGhpcy5hcHBseVRyYW5zZm9ybSgpO1xuICB0aGlzLnpvb21DdXJTdGVwID0gMTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY3VyQmFzZVNjYWxlID0gdGhpcy5iYXNlU2NhbGU7XG4gIGlmICh0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQgPiB0aGlzLmRlZmF1bHRXaWR0aCAvIHRoaXMuZGVmYXVsdEhlaWdodCkge1xuICAgIHRoaXMuYmFzZVNjYWxlID0gdGhpcy5oZWlnaHQgLyB0aGlzLmRlZmF1bHRIZWlnaHQ7XG4gICAgdGhpcy5iYXNlVHJhbnNYID0gTWF0aC5hYnModGhpcy53aWR0aCAtIHRoaXMuZGVmYXVsdFdpZHRoICogdGhpcy5iYXNlU2NhbGUpIC8gKDIgKiB0aGlzLmJhc2VTY2FsZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5iYXNlU2NhbGUgPSB0aGlzLndpZHRoIC8gdGhpcy5kZWZhdWx0V2lkdGg7XG4gICAgdGhpcy5iYXNlVHJhbnNZID0gTWF0aC5hYnModGhpcy5oZWlnaHQgLSB0aGlzLmRlZmF1bHRIZWlnaHQgKiB0aGlzLmJhc2VTY2FsZSkgLyAoMiAqIHRoaXMuYmFzZVNjYWxlKTtcbiAgfVxuICB0aGlzLnNjYWxlICo9IHRoaXMuYmFzZVNjYWxlIC8gY3VyQmFzZVNjYWxlO1xuICB0aGlzLnRyYW5zWCAqPSB0aGlzLmJhc2VTY2FsZSAvIGN1ckJhc2VTY2FsZTtcbiAgdGhpcy50cmFuc1kgKj0gdGhpcy5iYXNlU2NhbGUgLyBjdXJCYXNlU2NhbGU7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChjYywgcGF0aCkge1xuICBjYyA9IGNjLnRvTG93ZXJDYXNlKCk7XG4gIHBhdGggPSBwYXRoIHx8IGpRdWVyeSgnIycgKyB0aGlzLmdldENvdW50cnlJZChjYykpWzBdO1xuXG4gIGlmICghdGhpcy5pc1NlbGVjdGVkKGNjKSkge1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0UmVnaW9uKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkUmVnaW9ucy5wdXNoKGNjKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZFJlZ2lvbnMgPSBbY2NdO1xuICAgIH1cblxuICAgIGpRdWVyeSh0aGlzLmNvbnRhaW5lcikudHJpZ2dlcigncmVnaW9uU2VsZWN0Lmpxdm1hcCcsIFtjY10pO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkQ29sb3IgJiYgcGF0aCkge1xuICAgICAgcGF0aC5jdXJyZW50RmlsbENvbG9yID0gdGhpcy5zZWxlY3RlZENvbG9yO1xuICAgICAgcGF0aC5zZXRGaWxsKHRoaXMuc2VsZWN0ZWRDb2xvcik7XG4gICAgfVxuICB9XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnNlbGVjdEluZGV4ID0gZnVuY3Rpb24gKGNjKSB7XG4gIGNjID0gY2MudG9Mb3dlckNhc2UoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkUmVnaW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjYyA9PT0gdGhpcy5zZWxlY3RlZFJlZ2lvbnNbaV0pIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnNldEJhY2tncm91bmRDb2xvciA9IGZ1bmN0aW9uIChiYWNrZ3JvdW5kQ29sb3IpIHtcbiAgdGhpcy5jb250YWluZXIuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgYmFja2dyb3VuZENvbG9yKTtcbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuc2V0Q29sb3JzID0gZnVuY3Rpb24gKGtleSwgY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhpcy5jb3VudHJpZXNba2V5XS5zZXRGaWxsKGNvbG9yKTtcbiAgICB0aGlzLmNvdW50cmllc1trZXldLnNldEF0dHJpYnV0ZSgnb3JpZ2luYWwnLCBjb2xvcik7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNvbG9ycyA9IGtleTtcblxuICAgIGZvciAodmFyIGNvZGUgaW4gY29sb3JzKSB7XG4gICAgICBpZiAodGhpcy5jb3VudHJpZXNbY29kZV0pIHtcbiAgICAgICAgdGhpcy5jb3VudHJpZXNbY29kZV0uc2V0RmlsbChjb2xvcnNbY29kZV0pO1xuICAgICAgICB0aGlzLmNvdW50cmllc1tjb2RlXS5zZXRBdHRyaWJ1dGUoJ29yaWdpbmFsJywgY29sb3JzW2NvZGVdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkpRVk1hcC5wcm90b3R5cGUuc2V0Tm9ybWFsaXplRnVuY3Rpb24gPSBmdW5jdGlvbiAoZikge1xuICB0aGlzLmNvbG9yU2NhbGUuc2V0Tm9ybWFsaXplRnVuY3Rpb24oZik7XG5cbiAgaWYgKHRoaXMudmFsdWVzKSB7XG4gICAgdGhpcy5zZXRWYWx1ZXModGhpcy52YWx1ZXMpO1xuICB9XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnNldFNjYWxlID0gZnVuY3Rpb24gKHNjYWxlKSB7XG4gIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgdGhpcy5hcHBseVRyYW5zZm9ybSgpO1xufTtcblxuSlFWTWFwLnByb3RvdHlwZS5zZXRTY2FsZUNvbG9ycyA9IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgdGhpcy5jb2xvclNjYWxlLnNldENvbG9ycyhjb2xvcnMpO1xuXG4gIGlmICh0aGlzLnZhbHVlcykge1xuICAgIHRoaXMuc2V0VmFsdWVzKHRoaXMudmFsdWVzKTtcbiAgfVxufTtcblxuSlFWTWFwLnByb3RvdHlwZS5zZXRWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gIHZhciBtYXggPSAwLFxuICAgIG1pbiA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgdmFsO1xuXG4gIGZvciAodmFyIGNjIGluIHZhbHVlcykge1xuICAgIGNjID0gY2MudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSBwYXJzZUZsb2F0KHZhbHVlc1tjY10pO1xuXG4gICAgaWYgKGlzTmFOKHZhbCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAodmFsID4gbWF4KSB7XG4gICAgICBtYXggPSB2YWx1ZXNbY2NdO1xuICAgIH1cbiAgICBpZiAodmFsIDwgbWluKSB7XG4gICAgICBtaW4gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1pbiA9PT0gbWF4KSB7XG4gICAgbWF4Kys7XG4gIH1cblxuICB0aGlzLmNvbG9yU2NhbGUuc2V0TWluKG1pbik7XG4gIHRoaXMuY29sb3JTY2FsZS5zZXRNYXgobWF4KTtcblxuICB2YXIgY29sb3JzID0ge307XG4gIGZvciAoY2MgaW4gdmFsdWVzKSB7XG4gICAgY2MgPSBjYy50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHBhcnNlRmxvYXQodmFsdWVzW2NjXSk7XG4gICAgY29sb3JzW2NjXSA9IGlzTmFOKHZhbCkgPyB0aGlzLmNvbG9yIDogdGhpcy5jb2xvclNjYWxlLmdldENvbG9yKHZhbCk7XG4gIH1cbiAgdGhpcy5zZXRDb2xvcnMoY29sb3JzKTtcbiAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnVuaGlnaGxpZ2h0ID0gZnVuY3Rpb24gKGNjLCBwYXRoKSB7XG4gIGNjID0gY2MudG9Mb3dlckNhc2UoKTtcbiAgcGF0aCA9IHBhdGggfHwgalF1ZXJ5KCcjJyArIHRoaXMuZ2V0Q291bnRyeUlkKGNjKSlbMF07XG4gIHBhdGguc2V0T3BhY2l0eSgxKTtcbiAgaWYgKHBhdGguY3VycmVudEZpbGxDb2xvcikge1xuICAgIHBhdGguc2V0RmlsbChwYXRoLmN1cnJlbnRGaWxsQ29sb3IpO1xuICB9XG59O1xuXG5KUVZNYXAucHJvdG90eXBlLnpvb21JbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1hcCA9IHRoaXM7XG4gIHZhciBzbGlkZXJEZWx0YSA9IChqUXVlcnkoJyN6b29tJykuaW5uZXJIZWlnaHQoKSAtIDYgKiAyIC0gMTUgKiAyIC0gMyAqIDIgLSA3IC0gNikgLyAodGhpcy56b29tTWF4U3RlcCAtIHRoaXMuem9vbUN1clN0ZXApO1xuXG4gIGlmIChtYXAuem9vbUN1clN0ZXAgPCBtYXAuem9vbU1heFN0ZXApIHtcbiAgICBtYXAudHJhbnNYIC09IChtYXAud2lkdGggLyBtYXAuc2NhbGUgLSBtYXAud2lkdGggLyAobWFwLnNjYWxlICogbWFwLnpvb21TdGVwKSkgLyAyO1xuICAgIG1hcC50cmFuc1kgLT0gKG1hcC5oZWlnaHQgLyBtYXAuc2NhbGUgLSBtYXAuaGVpZ2h0IC8gKG1hcC5zY2FsZSAqIG1hcC56b29tU3RlcCkpIC8gMjtcbiAgICBtYXAuc2V0U2NhbGUobWFwLnNjYWxlICogbWFwLnpvb21TdGVwKTtcbiAgICBtYXAuem9vbUN1clN0ZXArKztcblxuICAgIHZhciAkc2xpZGVyID0galF1ZXJ5KCcjem9vbVNsaWRlcicpO1xuXG4gICAgJHNsaWRlci5jc3MoJ3RvcCcsIHBhcnNlSW50KCRzbGlkZXIuY3NzKCd0b3AnKSwgMTApIC0gc2xpZGVyRGVsdGEpO1xuXG4gICAgbWFwLmNvbnRhaW5lci50cmlnZ2VyKCd6b29tSW4nKTtcbiAgfVxufTtcblxuSlFWTWFwLnByb3RvdHlwZS56b29tT3V0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbWFwID0gdGhpcztcbiAgdmFyIHNsaWRlckRlbHRhID0gKGpRdWVyeSgnI3pvb20nKS5pbm5lckhlaWdodCgpIC0gNiAqIDIgLSAxNSAqIDIgLSAzICogMiAtIDcgLSA2KSAvICh0aGlzLnpvb21NYXhTdGVwIC0gdGhpcy56b29tQ3VyU3RlcCk7XG5cbiAgaWYgKG1hcC56b29tQ3VyU3RlcCA+IDEpIHtcbiAgICBtYXAudHJhbnNYICs9IChtYXAud2lkdGggLyAobWFwLnNjYWxlIC8gbWFwLnpvb21TdGVwKSAtIG1hcC53aWR0aCAvIG1hcC5zY2FsZSkgLyAyO1xuICAgIG1hcC50cmFuc1kgKz0gKG1hcC5oZWlnaHQgLyAobWFwLnNjYWxlIC8gbWFwLnpvb21TdGVwKSAtIG1hcC5oZWlnaHQgLyBtYXAuc2NhbGUpIC8gMjtcbiAgICBtYXAuc2V0U2NhbGUobWFwLnNjYWxlIC8gbWFwLnpvb21TdGVwKTtcbiAgICBtYXAuem9vbUN1clN0ZXAtLTtcblxuICAgIHZhciAkc2xpZGVyID0galF1ZXJ5KCcjem9vbVNsaWRlcicpO1xuXG4gICAgJHNsaWRlci5jc3MoJ3RvcCcsIHBhcnNlSW50KCRzbGlkZXIuY3NzKCd0b3AnKSwgMTApICsgc2xpZGVyRGVsdGEpO1xuXG4gICAgbWFwLmNvbnRhaW5lci50cmlnZ2VyKCd6b29tT3V0Jyk7XG4gIH1cbn07XG5cblZlY3RvckNhbnZhcy5wcm90b3R5cGUuYXBwbHlUcmFuc2Zvcm1QYXJhbXMgPSBmdW5jdGlvbiAoc2NhbGUsIHRyYW5zWCwgdHJhbnNZKSB7XG4gIGlmICh0aGlzLm1vZGUgPT09ICdzdmcnKSB7XG4gICAgdGhpcy5yb290R3JvdXAuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCAnc2NhbGUoJyArIHNjYWxlICsgJykgdHJhbnNsYXRlKCcgKyB0cmFuc1ggKyAnLCAnICsgdHJhbnNZICsgJyknKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJvb3RHcm91cC5jb29yZG9yaWdpbiA9ICh0aGlzLndpZHRoIC0gdHJhbnNYKSArICcsJyArICh0aGlzLmhlaWdodCAtIHRyYW5zWSk7XG4gICAgdGhpcy5yb290R3JvdXAuY29vcmRzaXplID0gdGhpcy53aWR0aCAvIHNjYWxlICsgJywnICsgdGhpcy5oZWlnaHQgLyBzY2FsZTtcbiAgfVxufTtcblxuVmVjdG9yQ2FudmFzLnByb3RvdHlwZS5jcmVhdGVHcm91cCA9IGZ1bmN0aW9uIChpc1Jvb3QpIHtcbiAgdmFyIG5vZGU7XG4gIGlmICh0aGlzLm1vZGUgPT09ICdzdmcnKSB7XG4gICAgbm9kZSA9IHRoaXMuY3JlYXRlU3ZnTm9kZSgnZycpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUgPSB0aGlzLmNyZWF0ZVZtbE5vZGUoJ2dyb3VwJyk7XG4gICAgbm9kZS5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xuICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuICAgIG5vZGUuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgIG5vZGUuc3R5bGUudG9wID0gJzBweCc7XG4gICAgbm9kZS5jb29yZG9yaWdpbiA9ICcwIDAnO1xuICAgIG5vZGUuY29vcmRzaXplID0gdGhpcy53aWR0aCArICcgJyArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKGlzUm9vdCkge1xuICAgIHRoaXMucm9vdEdyb3VwID0gbm9kZTtcbiAgfVxuICByZXR1cm4gbm9kZTtcbn07XG5cblZlY3RvckNhbnZhcy5wcm90b3R5cGUuY3JlYXRlUGF0aCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdmFyIG5vZGU7XG4gIGlmICh0aGlzLm1vZGUgPT09ICdzdmcnKSB7XG4gICAgbm9kZSA9IHRoaXMuY3JlYXRlU3ZnTm9kZSgncGF0aCcpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKCdkJywgY29uZmlnLnBhdGgpO1xuXG4gICAgaWYgKHRoaXMucGFyYW1zLmJvcmRlckNvbG9yICE9PSBudWxsKSB7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5wYXJhbXMuYm9yZGVyQ29sb3IpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJhbXMuYm9yZGVyV2lkdGggPiAwKSB7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgdGhpcy5wYXJhbXMuYm9yZGVyV2lkdGgpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhcmFtcy5ib3JkZXJPcGFjaXR5ID4gMCkge1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1vcGFjaXR5JywgdGhpcy5wYXJhbXMuYm9yZGVyT3BhY2l0eSk7XG4gICAgfVxuXG4gICAgbm9kZS5zZXRGaWxsID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGNvbG9yKTtcbiAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnb3JpZ2luYWwnKSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnb3JpZ2luYWwnLCBjb2xvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG5vZGUuZ2V0RmlsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZmlsbCcpO1xuICAgIH07XG5cbiAgICBub2RlLmdldE9yaWdpbmFsRmlsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnb3JpZ2luYWwnKTtcbiAgICB9O1xuXG4gICAgbm9kZS5zZXRPcGFjaXR5ID0gZnVuY3Rpb24gKG9wYWNpdHkpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmaWxsLW9wYWNpdHknLCBvcGFjaXR5KTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG5vZGUgPSB0aGlzLmNyZWF0ZVZtbE5vZGUoJ3NoYXBlJyk7XG4gICAgbm9kZS5jb29yZG9yaWdpbiA9ICcwIDAnO1xuICAgIG5vZGUuY29vcmRzaXplID0gdGhpcy53aWR0aCArICcgJyArIHRoaXMuaGVpZ2h0O1xuICAgIG5vZGUuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICBub2RlLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICBub2RlLmZpbGxjb2xvciA9IEpRVk1hcC5kZWZhdWx0RmlsbENvbG9yO1xuICAgIG5vZGUuc3Ryb2tlZCA9IGZhbHNlO1xuICAgIG5vZGUucGF0aCA9IFZlY3RvckNhbnZhcy5wYXRoU3ZnVG9WbWwoY29uZmlnLnBhdGgpO1xuXG4gICAgdmFyIHNjYWxlID0gdGhpcy5jcmVhdGVWbWxOb2RlKCdza2V3Jyk7XG4gICAgc2NhbGUub24gPSB0cnVlO1xuICAgIHNjYWxlLm1hdHJpeCA9ICcwLjAxLDAsMCwwLjAxLDAsMCc7XG4gICAgc2NhbGUub2Zmc2V0ID0gJzAsMCc7XG5cbiAgICBub2RlLmFwcGVuZENoaWxkKHNjYWxlKTtcblxuICAgIHZhciBmaWxsID0gdGhpcy5jcmVhdGVWbWxOb2RlKCdmaWxsJyk7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChmaWxsKTtcblxuICAgIG5vZGUuc2V0RmlsbCA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmlsbCcpWzBdLmNvbG9yID0gY29sb3I7XG4gICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ29yaWdpbmFsJykgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ29yaWdpbmFsJywgY29sb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBub2RlLmdldEZpbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmlsbCcpWzBdLmNvbG9yO1xuICAgIH07XG4gICAgbm9kZS5nZXRPcmlnaW5hbEZpbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ29yaWdpbmFsJyk7XG4gICAgfTtcbiAgICBub2RlLnNldE9wYWNpdHkgPSBmdW5jdGlvbiAob3BhY2l0eSkge1xuICAgICAgdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmlsbCcpWzBdLm9wYWNpdHkgPSBwYXJzZUludChvcGFjaXR5ICogMTAwLCAxMCkgKyAnJSc7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gbm9kZTtcbn07XG5cblZlY3RvckNhbnZhcy5wcm90b3R5cGUucGF0aFN2Z1RvVm1sID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgY3ggPSAwLCBjeSA9IDAsIGN0cmx4LCBjdHJseTtcblxuICByZXR1cm4gcGF0aC5yZXBsYWNlKC8oW01tTGxIaFZ2Q2NTc10pKCg/Oi0/KD86XFxkKyk/KD86XFwuXFxkKyk/LD9cXHM/KSspL2csIGZ1bmN0aW9uIChzZWdtZW50LCBsZXR0ZXIsIGNvb3Jkcykge1xuICAgIGNvb3JkcyA9IGNvb3Jkcy5yZXBsYWNlKC8oXFxkKS0vZywgJyQxLC0nKS5yZXBsYWNlKC9cXHMrL2csICcsJykuc3BsaXQoJywnKTtcbiAgICBpZiAoIWNvb3Jkc1swXSkge1xuICAgICAgY29vcmRzLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjb29yZHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb29yZHNbaV0gPSBNYXRoLnJvdW5kKDEwMCAqIGNvb3Jkc1tpXSk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChsZXR0ZXIpIHtcbiAgICAgIGNhc2UgJ20nOlxuICAgICAgICBjeCArPSBjb29yZHNbMF07XG4gICAgICAgIGN5ICs9IGNvb3Jkc1sxXTtcbiAgICAgICAgcmVzdWx0ID0gJ3QnICsgY29vcmRzLmpvaW4oJywnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ00nOlxuICAgICAgICBjeCA9IGNvb3Jkc1swXTtcbiAgICAgICAgY3kgPSBjb29yZHNbMV07XG4gICAgICAgIHJlc3VsdCA9ICdtJyArIGNvb3Jkcy5qb2luKCcsJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdsJzpcbiAgICAgICAgY3ggKz0gY29vcmRzWzBdO1xuICAgICAgICBjeSArPSBjb29yZHNbMV07XG4gICAgICAgIHJlc3VsdCA9ICdyJyArIGNvb3Jkcy5qb2luKCcsJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgY3ggPSBjb29yZHNbMF07XG4gICAgICAgIGN5ID0gY29vcmRzWzFdO1xuICAgICAgICByZXN1bHQgPSAnbCcgKyBjb29yZHMuam9pbignLCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaCc6XG4gICAgICAgIGN4ICs9IGNvb3Jkc1swXTtcbiAgICAgICAgcmVzdWx0ID0gJ3InICsgY29vcmRzWzBdICsgJywwJztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0gnOlxuICAgICAgICBjeCA9IGNvb3Jkc1swXTtcbiAgICAgICAgcmVzdWx0ID0gJ2wnICsgY3ggKyAnLCcgKyBjeTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3YnOlxuICAgICAgICBjeSArPSBjb29yZHNbMF07XG4gICAgICAgIHJlc3VsdCA9ICdyMCwnICsgY29vcmRzWzBdO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnVic6XG4gICAgICAgIGN5ID0gY29vcmRzWzBdO1xuICAgICAgICByZXN1bHQgPSAnbCcgKyBjeCArICcsJyArIGN5O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIGN0cmx4ID0gY3ggKyBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDRdO1xuICAgICAgICBjdHJseSA9IGN5ICsgY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAzXTtcbiAgICAgICAgY3ggKz0gY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAyXTtcbiAgICAgICAgY3kgKz0gY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgcmVzdWx0ID0gJ3YnICsgY29vcmRzLmpvaW4oJywnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0MnOlxuICAgICAgICBjdHJseCA9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gNF07XG4gICAgICAgIGN0cmx5ID0gY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAzXTtcbiAgICAgICAgY3ggPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDJdO1xuICAgICAgICBjeSA9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIHJlc3VsdCA9ICdjJyArIGNvb3Jkcy5qb2luKCcsJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzJzpcbiAgICAgICAgY29vcmRzLnVuc2hpZnQoY3kgLSBjdHJseSk7XG4gICAgICAgIGNvb3Jkcy51bnNoaWZ0KGN4IC0gY3RybHgpO1xuICAgICAgICBjdHJseCA9IGN4ICsgY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSA0XTtcbiAgICAgICAgY3RybHkgPSBjeSArIGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gM107XG4gICAgICAgIGN4ICs9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMl07XG4gICAgICAgIGN5ICs9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIHJlc3VsdCA9ICd2JyArIGNvb3Jkcy5qb2luKCcsJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdTJzpcbiAgICAgICAgY29vcmRzLnVuc2hpZnQoY3kgKyBjeSAtIGN0cmx5KTtcbiAgICAgICAgY29vcmRzLnVuc2hpZnQoY3ggKyBjeCAtIGN0cmx4KTtcbiAgICAgICAgY3RybHggPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDRdO1xuICAgICAgICBjdHJseSA9IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gM107XG4gICAgICAgIGN4ID0gY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAyXTtcbiAgICAgICAgY3kgPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICByZXN1bHQgPSAnYycgKyBjb29yZHMuam9pbignLCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcblxuICB9KS5yZXBsYWNlKC96L2csICcnKTtcbn07XG5cblZlY3RvckNhbnZhcy5wcm90b3R5cGUuc2V0U2l6ZSA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XG4gIGlmICh0aGlzLm1vZGUgPT09ICdzdmcnKSB7XG4gICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKTtcbiAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICB0aGlzLmNhbnZhcy5jb29yZHNpemUgPSB3aWR0aCArICcgJyArIGhlaWdodDtcbiAgICB0aGlzLmNhbnZhcy5jb29yZG9yaWdpbiA9ICcwIDAnO1xuICAgIGlmICh0aGlzLnJvb3RHcm91cCkge1xuICAgICAgdmFyIHBhdGhzID0gdGhpcy5yb290R3JvdXAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NoYXBlJyk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHBhdGhzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBwYXRoc1tpXS5jb29yZHNpemUgPSB3aWR0aCArICcgJyArIGhlaWdodDtcbiAgICAgICAgcGF0aHNbaV0uc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgIHBhdGhzW2ldLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgICB9XG4gICAgICB0aGlzLnJvb3RHcm91cC5jb29yZHNpemUgPSB3aWR0aCArICcgJyArIGhlaWdodDtcbiAgICAgIHRoaXMucm9vdEdyb3VwLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgdGhpcy5yb290R3JvdXAuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICB9XG4gIH1cbiAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbn07XG4iLCIvKiogQWRkIFdvcmxkIE1hcCBEYXRhIFBvaW50cyAqL1xualF1ZXJ5LmZuLnZlY3Rvck1hcCgnYWRkTWFwJywgJ3dvcmxkX2VuJywge1wid2lkdGhcIjo5NTAsXCJoZWlnaHRcIjo1NTAsXCJwYXRoc1wiOntcImlkXCI6e1wicGF0aFwiOlwiTTc4MS42OCwzMjQuNGwtMi4zMSw4LjY4bC0xMi41Myw0LjIzbC0zLjc1LTQuNGwtMS44MiwwLjVsMy40LDEzLjEybDUuMDksMC41N2w2Ljc5LDIuNTd2Mi41N2wzLjExLTAuNTdsNC41My02LjI3di01LjEzbDIuNTUtNS4xM2wyLjgzLDAuNTdsLTMuNC03LjEzbC0wLjUyLTQuNTlMNzgxLjY4LDMyNC40TDc4MS42OCwzMjQuNE03MjIuNDgsMzE3LjU3bC0wLjI4LDIuMjhsNi43OSwxMS40MWgxLjk4bDE0LjE1LDIzLjY3bDUuNjYsMC41N2wyLjgzLTguMjdsLTQuNTMtMi44NWwtMC44NS00LjU2TDcyMi40OCwzMTcuNTdMNzIyLjQ4LDMxNy41N003ODkuNTMsMzQ5LjExbDIuMjYsMi43N2wtMS40Nyw0LjE2djAuNzloMy4zNGwxLjE4LTEwLjRsMS4wOCwwLjNsMS45Niw5LjVsMS44NywwLjVsMS43Ny00LjA2bC0xLjc3LTYuMTRsLTEuNDctMi42N2w0LjYyLTMuMzdsLTEuMDgtMS40OWwtNC40MiwyLjg3aC0xLjE4bC0yLjE2LTMuMTdsMC42OS0xLjM5bDMuNjQtMS43OGw1LjUsMS42OGwxLjY3LTAuMWw0LjEzLTMuODZsLTEuNjctMS42OGwtMy44MywyLjk3aC0yLjQ2bC0zLjczLTEuNzhsLTIuNjUsMC4xbC0yLjk1LDQuNzVsLTEuODcsOC4yMkw3ODkuNTMsMzQ5LjExTDc4OS41MywzNDkuMTFNODE0LjE5LDMzMC41bC0xLjg3LDQuNTVsMi45NSwzLjg2aDAuOThsMS4yOC0yLjU3bDAuNjktMC44OWwtMS4yOC0xLjM5bC0xLjg3LTAuNjlMODE0LjE5LDMzMC41TDgxNC4xOSwzMzAuNU04MTkuOTksMzQ1LjQ1bC00LjAzLDAuODlsLTEuMTgsMS4yOWwwLjk4LDEuNjhsMi42NS0wLjk5bDEuNjctMC45OWwyLjQ2LDEuOThsMS4wOC0wLjg5bC0xLjk2LTIuMzhMODE5Ljk5LDM0NS40NUw4MTkuOTksMzQ1LjQ1TTc1My4xNywzNTguMzJsLTIuNzUsMS44OGwwLjU5LDEuNThsOC43NSwxLjk4bDQuNDIsMC43OWwxLjg3LDEuOThsNS4wMSwwLjRsMi4zNiwxLjk4bDIuMTYtMC41bDEuOTctMS43OGwtMy42NC0xLjY4bC0zLjE0LTIuNjdsLTguMTYtMS45OEw3NTMuMTcsMzU4LjMyTDc1My4xNywzNTguMzJNNzgxLjc3LDM2Ni45M2wtMi4xNiwxLjE5bDEuMjgsMS4zOWwzLjE0LTEuMTlMNzgxLjc3LDM2Ni45M0w3ODEuNzcsMzY2LjkzTTc4NS41LDM2Ni4wNGwwLjM5LDEuODhsMi4yNiwwLjU5bDAuODgtMS4wOWwtMC45OC0xLjQ5TDc4NS41LDM2Ni4wNEw3ODUuNSwzNjYuMDRNNzkwLjkxLDM3MC45OWwtMi43NSwwLjRsMi40NiwyLjA4aDEuOTZMNzkwLjkxLDM3MC45OUw3OTAuOTEsMzcwLjk5TTc5MS42OSwzNjcuNzJsLTAuNTksMS4xOWw0LjQyLDAuNjlsMy40NC0xLjk4bC0xLjk2LTAuNTlsLTMuMTQsMC44OWwtMS4xOC0wLjk5TDc5MS42OSwzNjcuNzJMNzkxLjY5LDM2Ny43Mk04MzEuOTMsMzM5LjM0bC00LjE3LDAuNDdsLTIuNjgsMS45NmwxLjExLDIuMjRsNC41NCwwLjg0djAuODRsLTIuODcsMi4zM2wxLjM5LDQuODVsMS4zOSwwLjA5bDEuMi00Ljc2aDIuMjJsMC45Myw0LjY2bDEwLjgzLDguOTZsMC4yOCw3bDMuNyw0LjAxbDEuNjctMC4wOWwwLjM3LTI0LjcybC02LjI5LTQuMzhsLTUuOTMsNC4wMWwtMi4xMywxLjMxbC0zLjUyLTIuMjRsLTAuMDktNy4wOUw4MzEuOTMsMzM5LjM0TDgzMS45MywzMzkuMzR6XCIsXCJuYW1lXCI6XCJJbmRvbmVzaWFcIn0sXCJwZ1wiOntcInBhdGhcIjpcIk04NTIuNzYsMzQ4LjI5bC0wLjM3LDI0LjQ0bDMuNTItMC4xOWw0LjYzLTUuNDFsMy44OSwwLjE5bDIuNSwyLjI0bDAuODMsNi45bDcuOTYsNC4ybDIuMDQtMC43NXYtMi41MmwtNi4zOS01LjMybC0zLjE1LTcuMjhsMi41LTEuMjFsLTEuODUtNC4wMWwtMy43LTAuMDlsLTAuOTMtNC4yOWwtOS44MS02LjYyTDg1Mi43NiwzNDguMjlMODUyLjc2LDM0OC4yOU04ODAuNDgsMzQ5bC0wLjg4LDEuMjVsNC44MSw0LjI2bDAuNjYsMi41bDEuMzEtMC4xNWwwLjE1LTIuNTdsLTEuNDYtMS4zMkw4ODAuNDgsMzQ5TDg4MC40OCwzNDlNODgyLjg5LDM1NS4wM2wtMC45NSwwLjIybC0wLjU4LDIuNTdsLTEuODIsMS4xOGwtNS40NywwLjk2bDAuMjIsMi4wNmw1Ljc2LTAuMjlsMy42NS0yLjI4bC0wLjIyLTMuOTdMODgyLjg5LDM1NS4wM0w4ODIuODksMzU1LjAzTTg4OS4zOCwzNTkuNTFsMS4yNCwzLjQ1bDIuMTksMi4xM2wwLjY2LTAuNTlsLTAuMjItMi4yOGwtMi40OC0zLjAxTDg4OS4zOCwzNTkuNTFMODg5LjM4LDM1OS41MXpcIixcIm5hbWVcIjpcIlBhcHVhIE5ldyBHdWluZWFcIn0sXCJteFwiOntcInBhdGhcIjpcIk0xMzcuNDksMjI1LjQzbDQuODMsMTUuMjFsLTIuMjUsMS4yNmwwLjI1LDMuMDJsNC4yNSwzLjI3djYuMDVsNS4yNSw1LjA0bC0yLjI1LTE0Ljg2bC0zLTkuODNsMC43NS02LjhsMi41LDAuMjVsMSwyLjI3bC0xLDUuNzlsMTMsMjUuNDR2OS4wN2wxMC41LDEyLjM0bDExLjUsNS4yOWw0Ljc1LTIuNzdsNi43NSw1LjU0bDQtNC4wM2wtMS43NS00LjU0bDUuNzUtMS43NmwxLjc1LDEuMDFsMS43NS0xLjc2aDIuNzVsNS04LjgybC0yLjUtMi4yN2wtOS43NSwyLjI3bC0yLjI1LDYuNTVsLTUuNzUsMS4wMWwtNi43NS0yLjc3bC0zLTkuNTdsMi4yNy0xMi4wN2wtNC42NC0yLjg5bC0yLjIxLTExLjU5bC0xLjg1LTAuNzlsLTMuMzgsMy40M2wtMy44OC0yLjA3bC0xLjUyLTcuNzNsLTE1LjM3LTEuNjFsLTcuOTQtNS45N0wxMzcuNDksMjI1LjQzTDEzNy40OSwyMjUuNDN6XCIsXCJuYW1lXCI6XCJNZXhpY29cIn0sXCJlZVwiOntcInBhdGhcIjpcIk01MTcuNzcsMTQzLjY2bC01LjYtMC4ybC0zLjU1LDIuMTdsLTAuMDUsMS42MWwyLjMsMi4xN2w3LjE1LDEuMjFMNTE3Ljc3LDE0My42Nkw1MTcuNzcsMTQzLjY2TTUwNi43NiwxNDcuNjRsLTEuNTUtMC4wNWwtMC45LDAuOTFsMC42NSwwLjk2bDEuNTUsMC4xbDAuOC0xLjE2TDUwNi43NiwxNDcuNjRMNTA2Ljc2LDE0Ny42NHpcIixcIm5hbWVcIjpcIkVzdG9uaWFcIn0sXCJkelwiOntcInBhdGhcIjpcIk00NzMuODgsMjI3LjQ5bC00LjA4LTEuMzdsLTE2Ljk4LDMuMTlsLTMuNywyLjgxbDIuMjYsMTEuNjdsLTYuNzUsMC4yN2wtNC4wNiw2LjUzbC05LjY3LDIuMzJsMC4wMyw0Ljc1bDMxLjg1LDI0LjM1bDUuNDMsMC40NmwxOC4xMS0xNC4xNWwtMS44MS0yLjI4bC0zLjQtMC40NmwtMi4wNC0zLjQydi0xNC4xNWwtMS4zNi0xLjM3bDAuMjMtMy42NWwtMy42Mi0zLjY1bC0wLjQ1LTMuODhsMS41OC0xLjE0bC0wLjY4LTQuMTFMNDczLjg4LDIyNy40OUw0NzMuODgsMjI3LjQ5elwiLFwibmFtZVwiOlwiQWxnZXJpYVwifSxcIm1hXCI6e1wicGF0aFwiOlwiTTQ0OC4yOSwyMzIuMjhoLTExLjU1bC0yLjI2LDUuMDJsLTUuMjEsMi41MWwtNC4zLDExLjY0bC04LjM4LDUuMDJsLTExLjc3LDE5LjM5bDExLjU1LTAuMjNsMC40NS01LjdoMi45NHYtNy43NmgxMC4xOWwwLjIzLTEwLjA0bDkuNzQtMi4yOGw0LjA4LTYuNjJsNi4zNC0wLjIzTDQ0OC4yOSwyMzIuMjhMNDQ4LjI5LDIzMi4yOHpcIixcIm5hbWVcIjpcIk1vcm9jY29cIn0sXCJtclwiOntcInBhdGhcIjpcIk00MDQuOSwyNzYuNjZsMi4xOCwyLjg1bC0wLjQ1LDEyLjMybDMuMTctMi4yOGwyLjI2LTAuNDZsMy4xNywxLjE0bDMuNjIsNS4wMmwzLjQtMi4yOGwxNi41My0wLjIzbC00LjA4LTI3LjYxbDQuMzgtMC4wMmwtOC4xNi02LjI1bDAuMDEsNC4wNmwtMTAuMzMsMC4wMWwtMC4wNSw3Ljc1bC0yLjk3LTAuMDFsLTAuMzgsNS43Mkw0MDQuOSwyNzYuNjZMNDA0LjksMjc2LjY2elwiLFwibmFtZVwiOlwiTWF1cml0YW5pYVwifSxcInNuXCI6e1wicGF0aFwiOlwiTTQxMi4wMywyODkuODRMNDEwLjEyLDI5MC4zMUw0MDYuMTgsMjkzLjE4TDQwNS4yOCwyOTQuNzhMNDA1LDI5Ni4zN0w0MDYuNDMsMjk3LjQwTDQxMS4yOCwyOTcuMzRMNDE0LjQwLDI5Ni41TDQxNC43NSwyOTguMDNMNDE0LjQ2LDMwMC4wNkw0MTQuNTMsMzAwLjA5TDQwNi43OCwzMDAuMjFMNDA4LjAzLDMwMy4yMUw0MDguNzEsMzAxLjM3TDQxOCwzMDIuMTVMNDE4LjA2LDMwMi4yMUw0MTkuMDMsMzAyLjI1TDQyMiwzMDIuMzdMNDIyLjEyLDMwMC42Mkw0MTguNTMsMjk2LjMxTDQxNC41MywyOTAuODdMNDEyLjAzLDI4OS44NHpcIixcIm5hbWVcIjpcIlNlbmVnYWxcIn0sXCJnbVwiOntcInBhdGhcIjpcIk00MDYuODksMjk4LjM0bC0wLjEzLDEuMTFsNi45Mi0wLjFsMC4zNS0xLjAzbC0wLjE1LTEuMDRsLTEuOTksMC44MUw0MDYuODksMjk4LjM0TDQwNi44OSwyOTguMzR6XCIsXCJuYW1lXCI6XCJHYW1iaWFcIn0sXCJnd1wiOntcInBhdGhcIjpcIk00MDguNiwzMDQuNTNsMS40LDIuNzdsMy45My0zLjM4bDAuMDQtMS4wNGwtNC42My0wLjY3TDQwOC42LDMwNC41M0w0MDguNiwzMDQuNTN6XCIsXCJuYW1lXCI6XCJHdWluZWEtQmlzc2F1XCJ9LFwiZ25cIjp7XCJwYXRoXCI6XCJNNDEwLjQyLDMwNy45NGwzLjA0LDQuNjhsMy45Ni0zLjQ0bDQuMDYtMC4xOGwzLjM4LDQuNDlsMi44NywxLjg5bDEuMDgtMi4xbDAuOTYtMC41NGwtMC4wNy00LjYybC0xLjkxLTUuNDhsLTUuODYsMC42NWwtNy4yNS0wLjU4bC0wLjA0LDEuODZMNDEwLjQyLDMwNy45NEw0MTAuNDIsMzA3Ljk0elwiLFwibmFtZVwiOlwiR3VpbmVhXCJ9LFwic2xcIjp7XCJwYXRoXCI6XCJNNDEzLjkzLDMxMy4xM2w1LjY1LDUuNDZsNC4wMy00Ljg5bC0yLjUyLTMuOTVsLTMuNDcsMC4zNUw0MTMuOTMsMzEzLjEzTDQxMy45MywzMTMuMTN6XCIsXCJuYW1lXCI6XCJTaWVycmEgTGVvbmVcIn0sXCJsclwiOntcInBhdGhcIjpcIk00MjAuMTcsMzE5LjE5bDEwLjk4LDcuMzRsLTAuMjYtNS41NmwtMy4zMi0zLjkxbC0zLjI0LTIuODdMNDIwLjE3LDMxOS4xOUw0MjAuMTcsMzE5LjE5elwiLFwibmFtZVwiOlwiTGliZXJpYVwifSxcImNpXCI6e1wicGF0aFwiOlwiTTQzMi4wNywzMjYuNzVsNC4yOC0zLjAzbDUuMzItMC45M2w1LjQzLDEuMTdsLTIuNzctNC4xOWwtMC44MS0yLjU2bDAuODEtNy41N2wtNC44NSwwLjIzbC0yLjItMi4xbC00LjYyLDAuMTJsLTIuMiwwLjM1bDAuMjMsNS4xMmwtMS4xNiwwLjQ3bC0xLjM5LDIuNTZsMy41OCw0LjE5TDQzMi4wNywzMjYuNzVMNDMyLjA3LDMyNi43NXpcIixcIm5hbWVcIjpcIkNvdGUgZCdJdm9pcmVcIn0sXCJtbFwiOntcInBhdGhcIjpcIk00MTkuNDYsMjk1Ljg0bDMuMDgtMi4xMWwxNy4xMi0wLjFsLTMuOTYtMjcuNTRsNC41Mi0wLjEzbDIxLjg3LDE2LjY5bDIuOTQsMC40MmwtMS4xMSw5LjI4bC0xMy43NSwxLjI1bC0xMC42MSw3LjkybC0xLjkzLDUuNDJsLTcuMzcsMC4zMWwtMS44OC01LjQxbC01LjY1LDAuNGwwLjIyLTEuNzdMNDE5LjQ2LDI5NS44NEw0MTkuNDYsMjk1Ljg0elwiLFwibmFtZVwiOlwiTWFsaVwifSxcImJmXCI6e1wicGF0aFwiOlwiTTQ1MC41OSwyOTQuMjhsMy42NC0wLjI5bDUuOTcsOC40NGwtNS41NCw0LjE4bC00LjAxLTEuMDNsLTUuMzksMC4wN2wtMC44NywzLjE2bC00LjUyLDAuMjJsLTEuMjQtMS42OWwxLjYtNS4xNEw0NTAuNTksMjk0LjI4TDQ1MC41OSwyOTQuMjh6XCIsXCJuYW1lXCI6XCJCdXJraW5hIEZhc29cIn0sXCJuZVwiOntcInBhdGhcIjpcIk00NjAuODksMzAybDIuNTUtMC4wNmwyLjMtMy40NWwzLjg2LTAuNjlsNC4xMSwyLjUxbDguNzcsMC4yNWw2Ljc4LTIuNzZsMi41NS0yLjE5bDAuMTktMi44OGw0LjczLTQuNzdsMS4yNS0xMC41M2wtMy4xMS02LjUybC03Ljk2LTEuOTRsLTE4LjQyLDE0LjM2bC0yLjYxLTAuMjVsLTEuMTIsOS45N2wtOS40LDAuOTRMNDYwLjg5LDMwMkw0NjAuODksMzAyelwiLFwibmFtZVwiOlwiTmlnZXJcIn0sXCJnaFwiOntcInBhdGhcIjpcIk00NDQuMzQsMzE3LjA1bDEuMTIsMi42M2wyLjkyLDQuNThsMS42Mi0wLjA2bDQuNDItMi41MWwtMC4zMS0xNC4yOWwtMy40Mi0xbC00Ljc5LDAuMTNMNDQ0LjM0LDMxNy4wNUw0NDQuMzQsMzE3LjA1elwiLFwibmFtZVwiOlwiR2hhbmFcIn0sXCJ0Z1wiOntcInBhdGhcIjpcIk00NTUuMjIsMzIxLjI1bDIuNjgtMS41N2wtMC4wNi0xMC4zNWwtMS43NC0yLjgybC0xLjEyLDAuOTRMNDU1LjIyLDMyMS4yNUw0NTUuMjIsMzIxLjI1elwiLFwibmFtZVwiOlwiVG9nb1wifSxcImJqXCI6e1wicGF0aFwiOlwiTTQ1OC43MSwzMTkuNDloMi4xMmwwLjEyLTYuMDJsMi42OC0zLjg5bC0wLjEyLTYuNzdsLTIuNDMtMC4wNmwtNC4xNywzLjI2bDEuNzQsMy4zMkw0NTguNzEsMzE5LjQ5TDQ1OC43MSwzMTkuNDl6XCIsXCJuYW1lXCI6XCJCZW5pblwifSxcIm5nXCI6e1wicGF0aFwiOlwiTTQ2MS41NywzMTkuMzdsMy45MiwwLjE5bDQuNzMsNS4yN2wyLjMsMC42M2wxLjgtMC44OGwyLjc0LTAuMzhsMC45My0zLjgybDMuNzMtMi40NWw0LjA0LTAuMTlsNy40LTEzLjYxbC0wLjEyLTMuMDdsLTMuNDItMi42M2wtNi44NCwzLjAxbC05LjE1LTAuMTNsLTQuMzYtMi43NmwtMy4xMSwwLjY5bC0xLjYyLDIuODJsLTAuMTIsNy45NmwtMi42MSwzLjdMNDYxLjU3LDMxOS4zN0w0NjEuNTcsMzE5LjM3elwiLFwibmFtZVwiOlwiTmlnZXJpYVwifSxcInRuXCI6e1wicGF0aFwiOlwiTTQ3NC45MSwyMjcuMzNsNS41My0yLjIzbDEuODIsMS4xOGwwLjA3LDEuNDRsLTAuODUsMS4xMWwwLjEzLDEuOTdsMC44NSwwLjQ2djMuNTRsLTAuOTgsMS42NGwwLjEzLDEuMDVsMy43MSwxLjMxbC0yLjk5LDQuNjVsLTEuMTctMC4wN2wtMC4yLDMuNzRsLTEuMywwLjJsLTEuMTEtMC45OGwwLjI2LTMuOGwtMy42NC0zLjU0bC0wLjQ2LTMuMDhsMS43Ni0xLjM4TDQ3NC45MSwyMjcuMzNMNDc0LjkxLDIyNy4zM3pcIixcIm5hbWVcIjpcIlR1bmlzaWFcIn0sXCJseVwiOntcInBhdGhcIjpcIk00ODAuMDUsMjQ4LjAzbDEuNTYtMC4yNmwwLjQ2LTMuNmgwLjc4bDMuMTktNS4yNGw3Ljg3LDIuMjlsMi4xNSwzLjM0bDcuNzQsMy41NGw0LjAzLTEuN2wtMC4zOS0xLjdsLTEuNzYtMS43bDAuMi0xLjE4bDIuODYtMi40Mmg1LjY2bDIuMTUsMi44OGw0LjU1LDAuNjZsMC41OSwzNi44OWwtMy4zOC0wLjEzbC0yMC40Mi0xMC42MmwtMi4yMSwxLjI1bC04LjM5LTIuMWwtMi4yOC0zLjAxbC0zLjMyLTAuNDZsLTEuNjktMy4wMUw0ODAuMDUsMjQ4LjAzTDQ4MC4wNSwyNDguMDN6XCIsXCJuYW1lXCI6XCJMaWJ5YVwifSxcImVnXCI6e1wicGF0aFwiOlwiTTUyMS45MywyNDMuMDZsMi42NywwLjA3bDUuMiwxLjQ0bDIuNDcsMC4wN2wzLjA2LTIuNTZoMS40M2wyLjYsMS40NGgzLjI5bDAuNTktMC4wNGwyLjA4LDUuOThsMC41OSwxLjkzbDAuNTUsMi44OWwtMC45OCwwLjcybC0xLjY5LTAuODVsLTEuOTUtNi4zNmwtMS43Ni0wLjEzbC0wLjEzLDIuMTZsMS4xNywzLjc0bDkuMzcsMTEuNmwwLjIsNC45OGwtMi43MywzLjE1TDUyMi4zMiwyNzNMNTIxLjkzLDI0My4wNkw1MjEuOTMsMjQzLjA2elwiLFwibmFtZVwiOlwiRWd5cHRcIn0sXCJ0ZFwiOntcInBhdGhcIjpcIk00OTIuNzksMjk2bDAuMTMtMi45NWw0Ljc0LTQuNjFsMS4yNy0xMS4zMmwtMy4xNi02LjA0bDIuMjEtMS4xM2wyMS40LDExLjE1bC0wLjEzLDEwLjk0bC0zLjc3LDMuMjF2NS42NGwyLjQ3LDQuNzhoLTQuMzZsLTcuMjIsNy4xNGwtMC4xOSwyLjE2bC01LjMzLTAuMDdsLTAuMDcsMC45OGwtMy4wNC0wLjRsLTIuMDgtMy45M2wtMS41Ni0wLjc3bDAuMi0xLjJsMS45Ni0xLjV2LTcuMDJsLTIuNzEtMC40MmwtMy4yNy0yLjQzTDQ5Mi43OSwyOTZMNDkyLjc5LDI5Nkw0OTIuNzksMjk2elwiLFwibmFtZVwiOlwiQ2hhZFwifSxcInNkXCI6e1wicGF0aFwiOlwiTTUyMC4xNSwyOTIuNDNsMC4xOC0xMS44M2wyLjQ2LDAuMDdsLTAuMjgtNi41N2wyNS44LDAuMjNsMy42OS0zLjcybDcuOTYsMTIuNzNsLTQuMzYsNS4xNHY3Ljg1bC02Ljg2LDE0Ljc1bC0yLjM2LDEuMDRsMC43NSw0LjExaDIuOTRsMy45OSw1Ljc5bC0zLjIsMC40MWwtMC44MiwxLjQ5bC0wLjA4LDIuMTVsLTkuNi0wLjE3bC0wLjk4LTEuNDlsLTYuNzEtMC4zOGwtMTIuMzItMTIuNjhsMS4yMy0wLjc0bDAuMzMtMi45OGwtMi45NS0xLjc0bC0yLjY5LTUuMzFsMC4xNS00Ljk0TDUyMC4xNSwyOTIuNDNMNTIwLjE1LDI5Mi40M3pcIixcIm5hbWVcIjpcIlN1ZGFuXCJ9LFwiY21cIjp7XCJwYXRoXCI6XCJNNDc3LjgyLDMyNC4yOGwzLjIyLDIuOTZsLTAuMjMsNC41OGwxNy42Ni0wLjQxbDEuNDQtMS42MmwtNS4wNi01LjQ1bC0wLjc1LTEuOTdsMy4yMi02LjAzbC0yLjE5LTRsLTEuODQtMC45OXYtMi4wM2wyLjEzLTEuMzlsMC4xMi02LjMybC0xLjY5LTAuMTlsLTAuMDMsMy4zMmwtNy40MiwxMy44NWwtNC41NCwwLjIzbC0zLjExLDIuMTRMNDc3LjgyLDMyNC4yOEw0NzcuODIsMzI0LjI4elwiLFwibmFtZVwiOlwiQ2FtZXJvb25cIn0sXCJlclwiOntcInBhdGhcIjpcIk01NTYuNzEsMjk0LjdsLTAuMjUtNS44OWwzLjk2LTQuNjJsMS4wNywwLjgybDEuOTUsNi41Mmw5LjM2LDYuOTdsLTEuNywyLjA5bC02Ljg1LTUuODlINTU2LjcxTDU1Ni43MSwyOTQuN3pcIixcIm5hbWVcIjpcIkVyaXRyZWFcIn0sXCJkalwiOntcInBhdGhcIjpcIk01NzEuNDgsMzAxLjU0bC0wLjU3LDMuMzZsMy45Ni0wLjA2bDAuMDYtNC45NGwtMS40NS0wLjg5TDU3MS40OCwzMDEuNTRMNTcxLjQ4LDMwMS41NHpcIixcIm5hbWVcIjpcIkRqaWJvdXRpXCJ9LFwiZXRcIjp7XCJwYXRoXCI6XCJNNTQ5LjQ5LDMxMS43Nmw3LjI4LTE2LjJsNy4yMywwLjA0bDYuNDEsNS41N2wtMC40NSw0LjU5aDQuOTdsMC41MSwyLjc2bDguMDQsNC44MWw0Ljk2LDAuMjVsLTkuNDMsMTAuMTNsLTEyLjk1LDMuOTloLTMuMjFsLTUuNzItNC44OGwtMi4yNi0wLjk1bC00LjM4LTYuNDVsLTIuODksMC4wNGwtMC4zNC0yLjk2TDU0OS40OSwzMTEuNzZMNTQ5LjQ5LDMxMS43NnpcIixcIm5hbWVcIjpcIkV0aGlvcGlhXCJ9LFwic29cIjp7XCJwYXRoXCI6XCJNNTc1Ljc0LDMwNS4wNGw0LjA4LDIuNzhsMS4yMS0wLjA2bDEwLjEzLTMuNDhsMS4xNSwzLjcxbC0wLjgxLDMuMTNsLTIuMTksMS43NGwtNS40Ny0wLjM1bC03LjgzLTQuODFMNTc1Ljc0LDMwNS4wNEw1NzUuNzQsMzA1LjA0TTU5MS45NywzMDQuMDVsNC4zNy0xLjY4bDEuNTUsMC45M2wtMC4xNywzLjg4bC00LjAzLDExLjQ4bC0yMS44MSwyMy4zNmwtMi41My0xLjc0bC0wLjE3LTkuODZsMy4yOC0zLjc3bDYuOTYtMi4xNWwxMC4yMS0xMC43OGwyLjY3LTIuMzhsMC43NS0zLjQ4TDU5MS45NywzMDQuMDVMNTkxLjk3LDMwNC4wNXpcIixcIm5hbWVcIjpcIlNvbWFsaWFcIn0sXCJ5ZVwiOntcInBhdGhcIjpcIk01OTkuNjIsMjk5LjY1bDIuMTMsMi4zOGwyLjg4LTEuNzRsMS4wNC0wLjM1bC0xLjMyLTEuMjhsLTIuNTMsMC43NUw1OTkuNjIsMjk5LjY1TDU5OS42MiwyOTkuNjVNNTcxLjk5LDI4OS4yM2wxLjQ0LDQuMjh2NC4xOGwzLjQ2LDMuMTRsMjQuMzgtOS45M2wwLjIzLTIuNzNsLTMuOTEtNy4wMmwtOS44MSwzLjEzbC01LjYzLDUuNTRsLTYuNTMtMy44Nkw1NzEuOTksMjg5LjIzTDU3MS45OSwyODkuMjN6XCIsXCJuYW1lXCI6XCJZZW1lblwifSxcImNmXCI6e1wicGF0aFwiOlwiTTQ5NS42NiwzMjQuMDVsNC42Niw1LjA0bDEuODQtMi4zOGwyLjkzLDAuMTJsMC42My0yLjMybDIuODgtMS44bDUuOTgsNC4xMmwzLjQ1LTMuNDJsMTMuMzksMC41OUw1MTksMzExLjE4bDEuNjctMS4wNGwwLjIzLTIuMjZsLTIuODItMS4zM2gtNC4xNGwtNi42Nyw2LjYxbC0wLjIzLDIuNzJsLTUuMjktMC4xN2wtMC4xNywxLjE2bC0zLjQ1LTAuMzVsLTMuMTEsNS45MUw0OTUuNjYsMzI0LjA1TDQ5NS42NiwzMjQuMDV6XCIsXCJuYW1lXCI6XCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIn0sXCJzdFwiOntcInBhdGhcIjpcIk00NzAuNzQsMzM3LjE1bDEuMTUtMC41OGwwLjg2LDAuN2wtMC44NiwxLjMzbC0xLjA0LTAuNDFMNDcwLjc0LDMzNy4xNUw0NzAuNzQsMzM3LjE1TTQ3My4wNSwzMzMuNWwxLjczLTAuMjlsMC41OCwxLjFsLTAuODYsMC45M2wtMC44Ni0wLjEyTDQ3My4wNSwzMzMuNUw0NzMuMDUsMzMzLjV6XCIsXCJuYW1lXCI6XCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIn0sXCJncVwiOntcInBhdGhcIjpcIk00NzYuODQsMzI3LjQxbC0wLjQ2LDEuOTdsMS4zOCwwLjc1bDEuMzItMC45OWwtMC40Ni0yLjAzTDQ3Ni44NCwzMjcuNDFMNDc2Ljg0LDMyNy40MU00ODAuOTksMzMyLjY5bC0wLjA2LDEuMzlsNC41NCwwLjIzbC0wLjA2LTEuNTdMNDgwLjk5LDMzMi42OUw0ODAuOTksMzMyLjY5elwiLFwibmFtZVwiOlwiRXF1YXRvcmlhbCBHdWluZWFcIn0sXCJnYVwiOntcInBhdGhcIjpcIk00ODYuMzksMzMyLjYzbC0wLjEyLDIuNDlsLTUuNjQtMC4xMmwtMy40NSw2LjY3bDguMTEsOC44N2wyLjAxLTEuNjhsLTAuMDYtMS43NGwtMS4zOC0wLjY0di0xLjIybDMuMTEtMS45N2wyLjc2LDIuMDlsMy4wNSwwLjA2bC0wLjA2LTEwLjQ5bC00LjgzLTAuMjNsLTAuMDYtMi4yTDQ4Ni4zOSwzMzIuNjNMNDg2LjM5LDMzMi42M3pcIixcIm5hbWVcIjpcIkdhYm9uXCJ9LFwiY2dcIjp7XCJwYXRoXCI6XCJNNDkxLDMzMi41MmwtMC4wNiwxLjQ1bDQuNzgsMC4xMmwwLjE3LDEyLjQxbC00LjM3LTAuMTJsLTIuNTMtMS45N2wtMS45NiwxLjFsLTAuMDksMC41NWwxLjAxLDAuNDlsMC4yOSwyLjU1bC0yLjcsMi4zMmwwLjU4LDEuMjJsMi45OS0yLjMyaDEuNDRsMC40NiwxLjM5bDEuOSwwLjgxbDYuMS01LjE2bC0wLjEyLTMuNzdsMS4yNy0zLjA3bDMuOTEtMi45bDEuMDUtOS44MWwtMi43OCwwLjAxbC0zLjIyLDQuNDFMNDkxLDMzMi41Mkw0OTEsMzMyLjUyelwiLFwibmFtZVwiOlwiQ29uZ29cIn0sXCJhb1wiOntcInBhdGhcIjpcIk00ODYuNTUsMzUzLjIzbDEuNzQsMi4yNmwyLjI1LTIuMTNsLTAuNjYtMi4yMWwtMC41Ni0wLjA0TDQ4Ni41NSwzNTMuMjNMNDg2LjU1LDM1My4yM000ODguNjIsMzU2LjcxbDMuNDEsMTIuNzNsLTAuMDgsNC4wMmwtNC45OSw1LjM2bC0wLjc1LDguNzFsMTkuMiwwLjE3bDYuMjQsMi4yNmw1LjE1LTAuNjdsLTMtMy43NmwwLjAxLTEwLjc0bDUuOS0wLjI1di00LjE5bC00Ljc5LTAuMmwtMC45Ni05LjkybC0yLjAyLDAuMDNsLTEuMDktMC45OGwtMS4xOSwwLjA2bC0xLjU4LDMuMDZINTAybC0xLjQxLTEuNDJsMC40Mi0yLjAxbC0xLjY2LTIuNDNMNDg4LjYyLDM1Ni43MUw0ODguNjIsMzU2LjcxelwiLFwibmFtZVwiOlwiQW5nb2xhXCJ9LFwiY2RcIjp7XCJwYXRoXCI6XCJNNDg5LjM4LDM1NS43MWwxMC4zMS0wLjE4bDIuMDksMi45N2wtMC4wOCwyLjE5bDAuNzcsMC43aDUuMTJsMS40Ny0yLjg5aDIuMDlsMC44NSwwLjg2bDIuODctMC4wOGwwLjg1LDEwLjA4bDQuOTYsMC4xNnYwLjc4bDEzLjMzLDYuMDFsMC42MiwxLjE3aDIuNzlsLTAuMzEtNC4yMmwtNS4wNC0yLjQybDAuMzEtMy4ybDIuMTctNS4wOGw0Ljk2LTAuMTZsLTQuMjYtMTQuMTRsMC4wOC02LjAxbDYuNzQtMTAuNTRsMC4wOC0xLjQ4bC0xLjAxLTAuNTVsMC4wNC0yLjg2bC0xLjIzLTAuMTFsLTEuMjQtMS41OGwtMjAuMzUtMC45MmwtMy43MywzLjYzbC02LjExLTQuMDJsLTIuMTUsMS4zMmwtMS41NiwxMy4xM2wtMy44NiwyLjk4bC0xLjE2LDIuNjRsMC4yMSwzLjkxbC02Ljk2LDUuNjlsLTEuODUtMC44NGwwLjI1LDEuMDlMNDg5LjM4LDM1NS43MUw0ODkuMzgsMzU1LjcxelwiLFwibmFtZVwiOlwiQ29uZ29cIn0sXCJyd1wiOntcInBhdGhcIjpcIk01MzcuODIsMzM5LjlsMi44MSwyLjU5bC0wLjEyLDIuNzdsLTQuMzYsMC4wOXYtMy4wNkw1MzcuODIsMzM5LjlMNTM3LjgyLDMzOS45elwiLFwibmFtZVwiOlwiUndhbmRhXCJ9LFwiYmlcIjp7XCJwYXRoXCI6XCJNNTM2LjIxLDM0Ni4yMWw0LjI3LTAuMDlsLTEuMTEsMy43NGwtMS4wOCwwLjk0aC0xLjMybC0wLjk0LTIuNTNMNTM2LjIxLDM0Ni4yMUw1MzYuMjEsMzQ2LjIxelwiLFwibmFtZVwiOlwiQnVydW5kaVwifSxcInVnXCI6e1wicGF0aFwiOlwiTTUzOC4zLDMzOS4wOWwzLjAzLDIuODRsMS45LTEuMjFsNS4xNC0wLjg0bDAuODgsMC4wOWwwLjMzLTEuOTVsMi45LTYuMWwtMi40NC01LjA4bC03LjkxLDAuMDVsLTAuMDUsMi4wOWwxLjA2LDEuMDJsLTAuMTYsMi4wOUw1MzguMywzMzkuMDlMNTM4LjMsMzM5LjA5elwiLFwibmFtZVwiOlwiVWdhbmRhXCJ9LFwia2VcIjp7XCJwYXRoXCI6XCJNNTUwLjgzLDMyNi41MmwyLjY2LDUuMTlsLTMuMTksNi42OWwtMC40MiwyLjAzbDE1LjkzLDkuODVsNC45NC03Ljc2bC0yLjUtMi4wM2wtMC4wNS0xMC4yMmwzLjEzLTMuNDJsLTQuOTksMS42NmwtMy43NywwLjA1bC01LjktNC45OGwtMS44Ni0wLjhsLTMuNDUsMC4zMmwtMC42MSwxLjAyTDU1MC44MywzMjYuNTJMNTUwLjgzLDMyNi41MnpcIixcIm5hbWVcIjpcIktlbnlhXCJ9LFwidHpcIjp7XCJwYXRoXCI6XCJNNTUwLjU3LDM3MS40MmwxNy40Ny0yLjE0bC0zLjkzLTcuNmwtMC4yMS03LjI4bDEuMjctMy40OGwtMTYuNjItMTAuNDRsLTUuMjEsMC44NmwtMS44MSwxLjM0bC0wLjE2LDMuMDVsLTEuMTcsNC4yM2wtMS4yMiwxLjQ1bC0xLjc1LDAuMTZsMy4zNSwxMS42MWw1LjQ3LDIuNTdsMy43NywwLjExTDU1MC41NywzNzEuNDJMNTUwLjU3LDM3MS40MnpcIixcIm5hbWVcIjpcIlRhbnphbmlhXCJ9LFwiem1cIjp7XCJwYXRoXCI6XCJNNTE0LjU1LDM4NC43bDMuMTcsNC40bDQuOTEsMC4zbDEuNzQsMC45Nmw1LjE0LDAuMDZsNC40My02LjIxbDEyLjM4LTUuNTRsMS4wOC00Ljg4bC0xLjQ0LTYuOTlsLTYuNDYtMy42OGwtNC4zMSwwLjNsLTIuMTUsNC43NmwwLjA2LDIuMTdsNS4wOCwyLjQ3bDAuMyw1LjM3bC00LjM3LDAuMjRsLTEuMDgtMS44MWwtMTIuMTQtNS4xOGwtMC4zNiwzLjk4bC01Ljc0LDAuMThMNTE0LjU1LDM4NC43TDUxNC41NSwzODQuN3pcIixcIm5hbWVcIjpcIlphbWJpYVwifSxcIm13XCI6e1wicGF0aFwiOlwiTTU0Ny4xNiwzNzkuNGwzLjExLDMuMjVsLTAuMDYsNC4xNmwwLjYsMS43NWw0LjEzLTQuNDZsLTAuNDgtNS42N2wtMi4yMS0xLjY5bC0xLjk3LTkuOTVsLTMuNDEtMC4xMmwxLjU1LDcuMTdMNTQ3LjE2LDM3OS40TDU0Ny4xNiwzNzkuNHpcIixcIm5hbWVcIjpcIk1hbGF3aVwifSxcIm16XCI6e1wicGF0aFwiOlwiTTU0MS4xNyw0MTMuMjhsMi42OSwyLjIzbDYuMzQtMy44NmwxLjAyLTUuNzN2LTkuNDZsMTAuMTctOC4zMmwxLjc0LDAuMDZsNi4xNi01LjkxbC0wLjk2LTEyLjE4TDU1MiwzNzIuMTdsMC40OCwzLjY4bDIuODEsMi4xN2wwLjY2LDYuNjNsLTUuNSw1LjM3bC0xLjMyLTMuMDFsMC4yNC0zLjk4bC0zLjE3LTMuNDRsLTcuNzgsMy42Mmw3LjI0LDMuNjhsMC4yNCwxMC43M2wtNC43OSw3LjExTDU0MS4xNyw0MTMuMjhMNTQxLjE3LDQxMy4yOHpcIixcIm5hbWVcIjpcIk1vemFtYmlxdWVcIn0sXCJ6d1wiOntcInBhdGhcIjpcIk01MjQuNjYsMzkyLjNsOC45NywxMC4xM2w2Ljg4LDEuNzVsNC42MS03LjIzbC0wLjM2LTkuNThsLTcuNDgtMy44NmwtMi44MSwxLjI3bC00LjE5LDYuMzlsLTUuOC0wLjA2TDUyNC42NiwzOTIuM0w1MjQuNjYsMzkyLjN6XCIsXCJuYW1lXCI6XCJaaW1iYWJ3ZVwifSxcIm5hXCI6e1wicGF0aFwiOlwiTTQ5Ni41NSw0MjEuOTZsMy4zNSwwLjI0bDEuOTcsMS45OWw0LjY3LDAuMDZsMS4xNC0xMy4yNnYtOC42OGwyLjk5LTAuNmwxLjE0LTkuMWw3LjYtMC4yNGwyLjY5LTIuMjNsLTQuNTUtMC4xOGwtNi4xNiwwLjg0bC02LjY0LTIuNDFoLTE4LjY2bDAuNDgsNS4zbDYuMjIsOS4xNmwtMS4wOCw0LjdsMC4wNiwyLjQ3TDQ5Ni41NSw0MjEuOTZMNDk2LjU1LDQyMS45NnpcIixcIm5hbWVcIjpcIk5hbWliaWFcIn0sXCJid1wiOntcInBhdGhcIjpcIk01MDguNTEsNDExLjIzbDIuMTUsMC42NmwtMC4zLDYuMTVsMi4yMSwwLjNsNS4wOC00LjU4bDYuMSwwLjY2bDEuNjItNC4xbDcuNzItNy4wNWwtOS4yNy0xMC42N2wtMC4xMi0xLjc1bC0xLjAyLTAuM2wtMi44MSwyLjU5bC03LjMsMC4xOGwtMS4wMiw5LjFsLTIuODcsMC42Nkw1MDguNTEsNDExLjIzTDUwOC41MSw0MTEuMjN6XCIsXCJuYW1lXCI6XCJCb3Rzd2FuYVwifSxcInN6XCI6e1wicGF0aFwiOlwiTTU0MC44Nyw0MTRsLTIuNTEsMC40MmwtMS4wOCwyLjk1bDEuOTIsMS43NWgyLjMzbDEuOTctMi44M0w1NDAuODcsNDE0TDU0MC44Nyw0MTR6XCIsXCJuYW1lXCI6XCJTd2F6aWxhbmRcIn0sXCJsc1wiOntcInBhdGhcIjpcIk01MjcuNDEsNDI1LjM5bDMuMDUtMi4zNWwxLjQ0LDAuMDZsMS43NCwyLjE3bC0wLjE4LDIuMTdsLTIuOTMsMS4wOHYwLjg0bC0zLjIzLTAuMThsLTAuNzgtMi4zNUw1MjcuNDEsNDI1LjM5TDUyNy40MSw0MjUuMzl6XCIsXCJuYW1lXCI6XCJMZXNvdGhvXCJ9LFwiemFcIjp7XCJwYXRoXCI6XCJNNTM0LjE2LDQwMy42M2wtNy45LDcuM2wtMS44OCw0LjUxbC02LjI2LTAuNzhsLTUuMjEsNC42M2wtMy40Ni0wLjM0bDAuMjgtNi40bC0xLjIzLTAuNDNsLTAuODYsMTMuMDlsLTYuMTQtMC4wNmwtMS44NS0yLjE4bC0yLjcxLTAuMDNsMi40Nyw3LjA5bDQuNDEsNC4xN2wtMy4xNSwzLjY3bDIuMDQsNC42bDQuNzIsMS44bDMuNzYtMy4ybDEwLjc3LDAuMDZsMC43Ny0wLjk2bDQuNzgtMC44NGwxNi4xNy0xNi4xbC0wLjA2LTUuMDdsLTEuNzMsMi4yNGgtMi41OWwtMy4xNS0yLjY0bDEuNi0zLjk4bDIuNzUtMC41NmwtMC4yNS04LjE4TDUzNC4xNiw0MDMuNjNMNTM0LjE2LDQwMy42M3ogTTUzMC4zNyw0MjIuMTNsMS41MS0wLjA2bDIuNDUsMi42NmwtMC4wNywzLjA4bC0yLjg3LDEuNDVsLTAuMTgsMS4wMmwtNC4zOCwwLjA1bC0xLjM3LTMuM2wxLjI1LTIuNDJMNTMwLjM3LDQyMi4xM0w1MzAuMzcsNDIyLjEzelwiLFwibmFtZVwiOlwiU291dGggQWZyaWNhXCJ9LFwiZ2xcIjp7XCJwYXRoXCI6XCJNMzIxLjEzLDUwLjA3bC0xLjM2LDIuMTdsMi40NSwyLjQ1bC0xLjA5LDIuNDVsMy41NCw0LjYybDQuMzUtMS4zNmw1LjcxLTAuNTRsNi41Myw3LjA3bDQuMzUsMTEuNjlsLTMuNTMsNy4zNGw0Ljg5LTAuODJsMi43MiwxLjYzbDAuMjcsMy41NGwtNS45OCwwLjI3bDMuMjYsMy4yNmw0LjA4LDAuODJsLTguOTcsMTEuOTZsLTEuMDksNy4zNGwxLjksNS45OGwtMS4zNiwzLjU0bDIuNDUsNy42MWw0LjYyLDUuMTdsMS4zNi0wLjI3bDIuOTktMC44MmwwLjI3LDQuMzVsMS45LDIuNzJsMy41My0wLjI3bDIuNzItMTAuMDZsOC4xNi0xMC4wNmwxMi4yNC00Ljg5bDcuNjEtOS41MmwzLjUzLDEuNjNoNy4zNGw1Ljk4LTUuOThsNy4zNC0yLjk5bDAuODItNC42MmwtNC42Mi00LjA4bC00LjA4LTEuMzZsLTIuMTgtNS43MWw1LjE3LTIuOTlsOC4xNiw0LjM1bDIuNzItMi45OWwtNC4zNS0yLjQ1bDkuMjUtMTIuNTFsLTEuNjMtNS40NGwtNC4zNS0wLjI3bDEuNjMtNC44OWw1LjQ0LTIuNDVsMTEuMTUtOS43OWwtMy4yNi0zLjUzbC0xMi41MSwxLjA5bC02LjUzLDYuNTNsMy44MS04LjQzbC00LjM1LTEuMDlsLTIuNDUsNC4zNWwtMy41My0yLjk5bC05Ljc5LDEuMDlsMi43Mi00LjM1bDE2LjA0LTAuNTRsLTQuMDgtNS40NGwtMTcuNC0zLjI2bC03LjA3LDEuMDlsMC4yNywzLjU0bC03LjM0LTIuNDVsMC4yNy0yLjQ1bC01LjE3LDEuMDlsLTEuMDksMi43Mmw1LjQ0LDEuOWwtNS43MSw0LjA4bC00LjA4LTQuNjJsLTUuNzEtMS42M2wtMC44Miw0LjM1aC01LjcxbC0yLjE4LTQuNjJsLTguOTctMS4zNmwtNC44OSwyLjQ1bC0wLjI3LDMuMjZsLTYuMjUtMC44MmwtMy44MSwxLjYzbDAuMjcsMy44MXYxLjlsLTcuMDcsMS4zNmwtMy4yNi0yLjE3bC0yLjE4LDMuNTNsMy4yNiwzLjU0bDYuOC0wLjgybDAuNTQsMi4xOGwtNS4xNywyLjQ1TDMyMS4xMyw1MC4wN0wzMjEuMTMsNTAuMDdNMzQyLjg5LDkyLjQ5bDEuNjMsMi40NWwtMC44MiwyLjk5aC0xLjYzbC0yLjE4LTIuNDVsMC41NC0xLjlMMzQyLjg5LDkyLjQ5TDM0Mi44OSw5Mi40OU00MTAuODcsODUuNjlsNC42MiwxLjM2bC0wLjI3LDMuODFsLTQuODktMi40NWwtMS4wOS0xLjM2TDQxMC44Nyw4NS42OUw0MTAuODcsODUuNjl6XCIsXCJuYW1lXCI6XCJHcmVlbmxhbmRcIn0sXCJhdVwiOntcInBhdGhcIjpcIk03NjEuMTcsNDI3Ljk4bC0wLjM1LDI1LjM4bC0zLjksMi44NmwtMC4zNSwyLjVsNS4zMiwzLjU3bDEzLjEzLTIuNWg2Ljc0bDIuNDgtMy41OGwxNC45LTIuODZsMTAuNjQsMy4yMmwtMC43MSw0LjI5bDEuNDIsNC4yOWw4LjE2LTEuNDNsMC4zNSwyLjE0bC01LjMyLDMuOTNsMS43NywxLjQzbDMuOS0xLjQzbC0xLjA2LDExLjhsNy40NSw1LjcybDQuMjYtMS40M2wyLjEzLDIuMTRsMTIuNDItMS43OWwxMS43MS0xOC45NWw0LjI2LTEuMDdsOC41MS0xNS43M2wyLjEzLTEzLjU4bC01LjMyLTYuNzlsMi4xMy0xLjQzbC00LjI2LTEzLjIzbC00LjYxLTMuMjJsMC43MS0xNy44N2wtNC4yNi0zLjIybC0xLjA2LTEwLjAxaC0yLjEzbC03LjEsMjMuNTlsLTMuOSwwLjM2bC04Ljg3LTguOTRsNC45Ny0xMy4yM2wtOS4yMi0xLjc5bC0xMC4yOSwyLjg2bC0yLjg0LDguMjJsLTQuNjEsMS4wN2wtMC4zNS01LjcybC0xOC44LDExLjQ0bDAuMzUsNC4yOWwtMi44NCwzLjkzaC03LjFsLTE1LjI2LDYuNDNMNzYxLjE3LDQyNy45OEw3NjEuMTcsNDI3Ljk4TTgyNS43NCw0OTYuMjZsLTEuNzcsNy4xNWwwLjM1LDVsNS4zMi0wLjM2bDYuMDMtOS4yOUw4MjUuNzQsNDk2LjI2TDgyNS43NCw0OTYuMjZ6XCIsXCJuYW1lXCI6XCJBdXN0cmFsaWFcIn0sXCJuelwiOntcInBhdGhcIjpcIk05MTMuMDIsNDgxLjk2bDEuMDYsMTEuOGwtMS40Miw1LjM2bC01LjMyLDMuOTNsMC4zNSw0LjY1djVsMS40MiwxLjc5bDE0LjU1LTEyLjUxdi0yLjg2aC0zLjU1bC00Ljk3LTE2LjhMOTEzLjAyLDQ4MS45Nkw5MTMuMDIsNDgxLjk2TTkwMi4zOCw1MDcuN2wyLjg0LDUuMzZsLTcuODEsNy41MWwtMC43MSwzLjkzbC01LjMyLDAuNzFsLTguODcsOC4yMmwtOC4xNi0zLjkzbC0wLjcxLTIuODZsMTQuOS02LjQzTDkwMi4zOCw1MDcuN0w5MDIuMzgsNTA3Ljd6XCIsXCJuYW1lXCI6XCJOZXcgWmVhbGFuZFwifSxcIm5jXCI6e1wicGF0aFwiOlwiTTkwNi42NCw0MjAuNDdsLTAuMzUsMS43OWw0LjYxLDYuNDNsMi40OCwxLjA3bDAuMzUtMi41TDkwNi42NCw0MjAuNDdMOTA2LjY0LDQyMC40N3pcIixcIm5hbWVcIjpcIk5ldyBDYWxlZG9uaWFcIn0sXCJteVwiOntcInBhdGhcIjpcIk03NjQuMTQsMzMyLjkybDMuMDIsMy40OWwxMS41OC00LjAxbDIuMjktOC44NGw1LjE2LTAuMzdsNC43Mi0zLjQybC02LjEyLTQuNDZsLTEuNC0yLjQ1bC0zLjAyLDUuNTdsMS4xMSwzLjJsLTEuODQsMi42N2wtMy40Ny0wLjg5bC04LjQxLDYuMTdsMC4yMiwzLjU3TDc2NC4xNCwzMzIuOTJMNzY0LjE0LDMzMi45Mk03MzIuNzEsMzE1LjQ1bDIuMDEsNC41MWwwLjQ1LDUuODZsMi42OSw0LjE3bDYuNDksMy45NGwyLjQ2LDAuMjNsLTAuNDUtNC4wNmwtMi4xMy01LjE4bC0zLjEyLTYuNjNsLTAuMjYsMS4xNmwtMy43Ni0wLjE3bC0yLjctMy44OEw3MzIuNzEsMzE1LjQ1TDczMi43MSwzMTUuNDV6XCIsXCJuYW1lXCI6XCJNYWxheXNpYVwifSxcImJuXCI6e1wicGF0aFwiOlwiTTc3OS43NywzMTkuMjVsLTIuODgsMy40OWwyLjM2LDAuNzRsMS4zMy0xLjg2TDc3OS43NywzMTkuMjVMNzc5Ljc3LDMxOS4yNXpcIixcIm5hbWVcIjpcIkJydW5laSBEYXJ1c3NhbGFtXCJ9LFwidGxcIjp7XCJwYXRoXCI6XCJNODA2LjE0LDM2OC40MmwtNS4xMSw0LjI2bDAuNDksMS4wOWwyLjE2LTAuNGwyLjU1LTIuMzhsNS4wMS0wLjY5bC0wLjk4LTEuNjhMODA2LjE0LDM2OC40Mkw4MDYuMTQsMzY4LjQyelwiLFwibmFtZVwiOlwiVGltb3ItTGVzdGVcIn0sXCJzYlwiOntcInBhdGhcIjpcIk04OTUuNDMsMzY0LjY1bDAuMTUsMi4yOGwxLjM5LDEuMzJsMS4zMS0wLjgxbC0xLjE3LTIuNDNMODk1LjQzLDM2NC42NUw4OTUuNDMsMzY0LjY1TTg5Ny4xOCwzNzAuMzFsLTEuMTcsMS4yNWwxLjI0LDIuMjhsMS40NiwwLjQ0bC0wLjA3LTEuNTRMODk3LjE4LDM3MC4zMUw4OTcuMTgsMzcwLjMxTTkwMC4wMywzNjguOTlsMS4wMiwyLjVsMS45NywyLjM1bDEuMDktMS43NmwtMS40Ni0yLjVMOTAwLjAzLDM2OC45OUw5MDAuMDMsMzY4Ljk5TTkwNS4xNCwzNzIuNzRsMC41OCwzLjA5bDEuMzksMS45MWwxLjE3LTIuNDJMOTA1LjE0LDM3Mi43NEw5MDUuMTQsMzcyLjc0TTkwNi43NCwzNzkuNjVsLTAuNTEsMC44OGwxLjY4LDIuMjFsMS4xNywwLjA3bC0wLjczLTIuODdMOTA2Ljc0LDM3OS42NUw5MDYuNzQsMzc5LjY1TTkwMy4wMiwzODQuMDVsLTEuNzUsMC44MWwxLjUzLDIuMTNsMS4zMS0wLjc0TDkwMy4wMiwzODQuMDVMOTAzLjAyLDM4NC4wNXpcIixcIm5hbWVcIjpcIlNvbG9tb24gSXNsYW5kc1wifSxcInZ1XCI6e1wicGF0aFwiOlwiTTkyMC44NywzOTcuMjJsLTEuMjQsMS42NmwwLjUyLDEuODdsMC42MiwwLjQybDEuMTMtMS40Nkw5MjAuODcsMzk3LjIyTDkyMC44NywzOTcuMjJNOTIxLjQ5LDQwMi4zMWwwLjEsMS4zNWwxLjM0LDAuNDJsMC45My0wLjUybC0wLjkzLTEuNDZMOTIxLjQ5LDQwMi4zMUw5MjEuNDksNDAyLjMxTTkyMy40NSw0MTQuMzdsLTAuNjIsMC45NGwwLjkzLDEuMDRsMS41NS0wLjUyTDkyMy40NSw0MTQuMzdMOTIzLjQ1LDQxNC4zN3pcIixcIm5hbWVcIjpcIlZhbnVhdHVcIn0sXCJmalwiOntcInBhdGhcIjpcIk05NDguNjIsNDEyLjI5bC0xLjI0LDEuNjZsLTAuMSwxLjg3bDEuNDQsMS40Nkw5NDguNjIsNDEyLjI5TDk0OC42Miw0MTIuMjl6XCIsXCJuYW1lXCI6XCJGaWppXCJ9LFwicGhcIjp7XCJwYXRoXCI6XCJNNzg5LjM3LDI5Ny41M2wtMC44NiwxLjY0bC0wLjQ4LDIuMDJsLTQuNzgsNi4wN2wwLjI5LDEuMjVsMi4wMS0wLjI5bDYuMjEtNi45NEw3ODkuMzcsMjk3LjUzTDc4OS4zNywyOTcuNTNNNzk3LjExLDI5NS4yMmwtMC4xLDUuMDFsMS44MiwxLjgzbDAuNjcsMy41NmwxLjgyLDAuMzlsMC44Ni0yLjIybC0xLjQzLTEuMDZsLTAuMzgtNi4yNkw3OTcuMTEsMjk1LjIyTDc5Ny4xMSwyOTUuMjJNODAyLjI4LDI5Ny4xNWwtMC4xLDQuNDNsMS4wNSwxLjczbDEuODItMi4xMmwtMC40OC0zLjg1TDgwMi4yOCwyOTcuMTVMODAyLjI4LDI5Ny4xNU04MDMuNDIsMjkzLjI5bDEuODIsMi40MWwwLjg2LDIuMzFoMS42M2wtMC4yOS0zLjk1bC0xLjgyLTEuMjVMODAzLjQyLDI5My4yOUw4MDMuNDIsMjkzLjI5TTgwNi45NiwzMDIuMzVsMC4zOCwyLjg5bC0zLjM1LDIuN2wtMi43NywwLjI5bC0yLjk2LDMuMThsMC4xLDEuNDVsMi43Ny0wLjg3bDEuOTEtMS4yNWwxLjYzLDQuMTRsMi44NywyLjAybDEuMTUtMC4zOWwxLjA1LTEuMjVsLTIuMjktMi4zMWwxLjM0LTEuMDZsMS41MywxLjI1bDEuMDUtMS43M2wtMS4wNS0yLjEybC0wLjE5LTQuNzJMODA2Ljk2LDMwMi4zNUw4MDYuOTYsMzAyLjM1TTc5MS4zOCwyNzIuOTdsLTIuNTgsMS44M2wtMC4yOSw1Ljc4bDQuMDIsNy44bDEuMzQsMS4wNmwxLjcyLTEuMTZsMi45NiwwLjQ4bDAuNTcsMi42bDIuMiwwLjE5bDEuMDUtMS40NGwtMS4zNC0xLjgzbC0xLjYzLTEuNTRsLTMuNDQtMC4zOGwtMS44Mi0yLjk5bDIuMS0zLjE4bDAuMTktMi43OWwtMS40My0zLjU2TDc5MS4zOCwyNzIuOTdMNzkxLjM4LDI3Mi45N003OTIuNzIsMjkwLjIxbDAuNzYsMi43bDEuMzQsMC44N2wwLjk2LTEuMjVsLTEuNTMtMi4xMkw3OTIuNzIsMjkwLjIxTDc5Mi43MiwyOTAuMjF6XCIsXCJuYW1lXCI6XCJQaGlsaXBwaW5lc1wifSxcImNuXCI6e1wicGF0aFwiOlwiTTc1OS44MywyNzAuMTdsLTIuMzksMC42N2wtMS43MiwyLjEybDEuNDMsMi43OWwyLjEsMC4xOWwyLjM5LTIuMTJsMC41Ny0yLjc5TDc1OS44MywyNzAuMTdMNzU5LjgzLDI3MC4xN002NzAuNCwxNzAuMDdsLTMuNDYsOC43bC00Ljc3LTAuMjVsLTUuMDMsMTEuMDFsNC4yNyw1LjQ0bC04LjgsMTIuMTVsLTQuNTItMC43NmwtMy4wMiwzLjhsMC43NSwyLjI4bDMuNTIsMC4yNWwxLjc2LDQuMDVsMy41MiwwLjc2bDEwLjgxLDEzLjkzdjcuMDlsNS4yOCwzLjI5bDUuNzgtMS4wMWw3LjI5LDQuM2w4LjgsMi41M2w0LjI3LTAuNTFsNC43OC0wLjUxbDEwLjA1LTYuNThsMy4yNywwLjUxbDEuMjUsMi45N2wyLjc3LDAuODNsMy43Nyw1LjU3bC0yLjUxLDUuNTdsMS41MSwzLjhsNC4yNywxLjUybDAuNzUsNC41Nmw1LjAzLDAuNTFsMC43NS0yLjI4bDcuMjktMy44bDQuNTIsMC4yNWw1LjI4LDUuODJsMy41Mi0xLjUybDIuMjYsMC4yNWwxLjAxLDIuNzlsMS43NiwwLjI1bDIuNTEtMy41NGwxMC4wNS0zLjhsOS4wNS0xMC44OWwzLjAyLTEwLjM4bC0wLjI1LTYuODRsLTMuNzctMC43NmwyLjI2LTIuNTNsLTAuNS00LjA1bC05LjU1LTkuNjJ2LTQuODFsMi43Ni0zLjU0bDIuNzYtMS4yN2wwLjI1LTIuNzloLTcuMDRsLTEuMjYsMy44bC0zLjI3LTAuNzZsLTQuMDItNC4zbDIuNTEtNi41OGwzLjUyLTMuOGwzLjI3LDAuMjVsLTAuNSw1LjgybDEuNzYsMS41Mmw0LjI3LTQuM2wxLjUxLTAuMjVsLTAuNS0zLjI5bDQuMDItNC44MWwzLjAyLDAuMjVsMS43Ni01LjU3bDIuMDYtMS4wOWwwLjIxLTMuNDdsLTItMi4xbC0wLjE3LTUuNDhsMy44NS0wLjI1bC0wLjI1LTE0LjEzbC0yLjcsMS42MmwtMS4wMSwzLjYybC00LjUxLTAuMDFsLTEzLjA3LTcuMzVsLTkuNDQtMTEuMzhsLTkuNTgtMC4xbC0yLjQ0LDIuMTJsMy4xLDcuMWwtMS4wOCw2LjY2bC0zLjg2LDEuNmwtMi4xNy0wLjE3bC0wLjE2LDYuNTlsMi4yNiwwLjUxbDQuMDItMS43N2w1LjI4LDIuNTN2Mi41M2wtMy43NywwLjI1bC0zLjAyLDYuNThsLTIuNzYsMC4yNWwtOS44LDEyLjkxbC0xMC4zLDQuNTZsLTcuMDQsMC41MWwtNC43Ny0zLjI5bC02Ljc5LDMuNTVsLTcuMjktMi4yOGwtMS43Ni00LjgxbC0xMi4zMS0wLjc2bC02LjUzLTEwLjYzaC0yLjc2bC0yLjIyLTQuOTNMNjcwLjQsMTcwLjA3elwiLFwibmFtZVwiOlwiQ2hpbmFcIn0sXCJ0d1wiOntcInBhdGhcIjpcIk03ODcuNDYsMjQ4LjMxbC0zLjU0LDIuN2wtMC4xOSw1LjJsMy4wNiwzLjU2bDAuNzYtMC42N0w3ODcuNDYsMjQ4LjMxTDc4Ny40NiwyNDguMzF6XCIsXCJuYW1lXCI6XCJUYWl3YW5cIn0sXCJqcFwiOntcInBhdGhcIjpcIk04MDMuMjMsMjE2LjQybC0xLjYzLDEuNjRsMC42NywyLjMxbDEuNDMsMC4xbDAuOTYsNS4wMWwxLjE1LDEuMjVsMi4wMS0xLjgzbDAuODYtMy4yOGwtMi40OS0zLjU2TDgwMy4yMywyMTYuNDJMODAzLjIzLDIxNi40Mk04MTIuMDMsMjEzLjE1bC0yLjc3LDIuNmwtMC4xLDIuOTlsMC42NywwLjg3bDMuNzMtMy4xOGwtMC4yOS0zLjE4TDgxMi4wMywyMTMuMTVMODEyLjAzLDIxMy4xNU04MDguMiwyMDYuOThsLTQuODgsNS41OWwwLjg2LDEuMzVsMi4zOSwwLjI5bDQuNDktMy40N2wzLjE2LTAuNThsMi44NywzLjM3bDIuMi0wLjc3bDAuODYtMy4yOGw0LjExLTAuMWw0LjAyLTQuODJsLTIuMS04bC0wLjk2LTQuMjRsMi4xLTEuNzNsLTQuNzgtNy4yMmwtMS4yNCwwLjFsLTIuNTgsMi44OXYyLjQxbDEuMTUsMS4zNWwwLjM4LDYuMzZsLTIuOTYsMy42NmwtMS43Mi0xLjA2bC0xLjM0LDIuOTlsLTAuMjksMi43OWwxLjA1LDEuNjRsLTAuNjcsMS4yNWwtMi4yLTEuODNoLTEuNTNsLTEuMzQsMC43N0w4MDguMiwyMDYuOThMODA4LjIsMjA2Ljk4TTgxNi40MywxNjMuNDRsLTEuNTMsMS4zNWwwLjc3LDIuODlsMS4zNCwxLjM1bC0wLjEsNC40M2wtMS43MiwwLjY3bC0xLjM0LDIuOTlsMy45Miw1LjM5bDIuNTgtMC44N2wwLjQ4LTEuMzVsLTIuNzctMi41bDEuNzItMi4yMmwxLjgyLDAuMjlsMS40MywxLjU0bDAuMS0zLjE4bDMuOTItMy4xOGwyLjItMC41OGwtMS44Mi0zLjA4bC0wLjg2LTEuMzVsLTEuNDMsMC45NmwtMS4yNCwxLjU0bC0yLjY4LTAuNThsLTIuNzctMS44M0w4MTYuNDMsMTYzLjQ0TDgxNi40MywxNjMuNDR6XCIsXCJuYW1lXCI6XCJKYXBhblwifSxcInJ1XCI6e1wicGF0aFwiOlwiTTUwNi42MSwxNTEuNzJsLTEuNS0wLjE1bC0yLjcsMy4yM3YxLjUxbDAuOSwwLjM1bDEuNzUsMC4wNWwyLjktMi4zN2wwLjQtMC44MUw1MDYuNjEsMTUxLjcyTDUwNi42MSwxNTEuNzJNODMwLjg2LDE2MC40NWwtMi42OCwzLjc2bDAuMTksMS44M2wxLjM0LTAuNThsMy4xNS0zLjk1TDgzMC44NiwxNjAuNDVMODMwLjg2LDE2MC40NU04MzQuNCwxNTQuOTZsLTAuOTYsMi42bDAuMSwxLjczbDEuNjMtMS4wNmwxLjUzLTMuMDhWMTU0TDgzNC40LDE1NC45Nkw4MzQuNCwxNTQuOTZNODQwLjA0LDEzMi4wM2wtMS4yNCwxLjU0bDAuMSwyLjQxbDEuMTUtMC4xbDEuOTEtMy4zN0w4NDAuMDQsMTMyLjAzTDg0MC4wNCwxMzIuMDNNODM3Ljc1LDEzNy45MXY0LjI0bDEuMzQsMC40OGwwLjk2LTEuNTR2LTMuMjdMODM3Ljc1LDEzNy45MUw4MzcuNzUsMTM3LjkxTTc5OC42NCwxMjIuNTlsLTAuMDksNi4xN2w3Ljc0LDExLjk1bDIuNzcsMTAuNGw0Ljg4LDkuMjVsMS45MSwwLjY3bDEuNjMtMS4zNWwwLjc2LTIuMjJsLTYuOTgtNy42MWwwLjE5LTMuOTVsMS41My0wLjY3bDAuMzgtMi4zMWwtMTMuNjctMTkuMzZMNzk4LjY0LDEyMi41OUw3OTguNjQsMTIyLjU5TTg1Mi41NywxMDMuNDJsLTEuOTEsMC4xOWwxLjE1LDEuNjRsMi4zOSwxLjY0bDAuNjctMC43N0w4NTIuNTcsMTAzLjQyTDg1Mi41NywxMDMuNDJNODU2LjI5LDEwNC41OGwwLjI5LDEuNjRsMi45NiwwLjg3bDAuMjktMS4xNkw4NTYuMjksMTA0LjU4TDg1Ni4yOSwxMDQuNThNNTQ3LjgyLDM4Ljc5bDEuNzIsMC42OWwtMS4yMSwyLjA4djIuOTVsLTIuNTgsMS41Nkg1NDNsLTEuNTUtMS45MWwwLjE3LTIuMDhsMS4yMS0xLjU2aDIuNDFMNTQ3LjgyLDM4Ljc5TDU0Ny44MiwzOC43OU01NTQuMzYsMzYuODh2Mi4wOGwxLjcyLDEuMzlsMi40MS0wLjE3bDIuMDctMS45MXYtMS4zOWgtMS44OWwtMS41NSwwLjUybC0xLjIxLTEuMzlMNTU0LjM2LDM2Ljg4TDU1NC4zNiwzNi44OE01NjQuMTgsMzcuMDZsMS4yMSwyLjZsMi40MSwwLjE3bDEuNzItMC42OWwtMC44Ni0yLjQzbC0yLjI0LTAuNTJMNTY0LjE4LDM3LjA2TDU2NC4xOCwzNy4wNk01NzMuOTksMzMuNTlsLTEuODktMC4zNWwtMS43MiwxLjc0bDAuODYsMS41NmwwLjUyLDIuNDNsMi4yNC0xLjczbDAuNTItMS45MUw1NzMuOTksMzMuNTlMNTczLjk5LDMzLjU5TTU4NC40OSw1MS45OGwtMC41MiwyLjQzbC0zLjk2LDMuNDdsLTguNDQsMS45MWwtNi44OSwxMS40NWwtMS4yMSwzLjNsNi44OSwxLjc0bDEuMDMtNC4xNmwyLjA3LTYuNDJsNS4zNC0yLjc4bDQuNDgtMy40N2wzLjI3LTEuMzloMS43MnYtNC42OEw1ODQuNDksNTEuOThMNTg0LjQ5LDUxLjk4TTU2Mi4yOCw3Ny4zMWw0LjY1LDAuNTJsMS41NSw1LjM4bDMuOTYsNC4xNmwtMS4zOCwyLjc4aC0yLjQxbC0yLjI0LTIuNmwtNC45OS0wLjE3bC0yLjA3LTIuNzh2LTEuOTFsMy4xLTAuODdMNTYyLjI4LDc3LjMxTDU2Mi4yOCw3Ny4zMU02MzQuOTUsMTguMTVsLTIuMjQtMS4zOWgtMi41OGwtMC41MiwxLjU2bC0yLjc1LDEuNTZsLTIuMDcsMC42OWwtMC4zNCwyLjA4bDQuODIsMC4zNUw2MzQuOTUsMTguMTVMNjM0Ljk1LDE4LjE1TTY0MC4yOCwxOC42N2wtMS4yMSwyLjZsLTIuNDEtMC4xN2wtMy43OSwyLjc4bC0xLjAzLDMuNDdoMi40MWwxLjM4LTIuMjZsMy4yNywyLjQzbDMuMS0xLjM5bDIuMjQtMS45MWwtMC44Ni0yLjk1bC0xLjIxLTIuMDhMNjQwLjI4LDE4LjY3TDY0MC4yOCwxOC42N002NDUuMjgsMjAuNThsMS4yMSw0Ljg2bDEuODksNC41MWwyLjA3LTMuNjRsMy45Ni0wLjg3di0yLjZsLTIuNTgtMS45MUw2NDUuMjgsMjAuNThMNjQ1LjI4LDIwLjU4TTczOS43NiwxMi44bDIuNjksMi4yNmwxLjkxLTAuNzlsMC41Ni0zLjE3TDc0MSw4LjM5bC0yLjU4LDEuN2wtNi4yOCwwLjU3djIuODNsLTYuNjIsMC4xMXY0LjYzbDcuNzQsNS43NmwyLjAyLTEuNDdsLTAuNDUtNC4wN2w0Ljk0LTEuMjRsLTEuMDEtMS45MmwtMS43OS0xLjgxTDczOS43NiwxMi44TDczOS43NiwxMi44TTc0Ni45NCwxMC4wOWwxLjc5LDMuMzlsNi45Ni0wLjc5bDEuOTEtMi40OWwtMC40NS0yLjE1bC0xLjkxLTAuNzlsLTEuNzksMS4zNmwtNS4xNiwxLjEzTDc0Ni45NCwxMC4wOUw3NDYuOTQsMTAuMDlNNzQ2LjQ5LDIzLjMxbC0zLjQ4LTAuOUw3NDEsMjQuNTZsLTAuOSwyLjk0bDQuNzEtMC40NWwzLjU5LTEuODFMNzQ2LjQ5LDIzLjMxTDc0Ni40OSwyMy4zMU04MzYuNjgsMy43NmwtMi45Mi0wLjlMODMwLjQsNC4xbC0xLjY4LDIuNDlsMi4xMywyLjgzbDUuNjEtMi40OWwxLjEyLTEuMjRMODM2LjY4LDMuNzZMODM2LjY4LDMuNzZNODE3Ljk3LDcyLjkzbDEuNzYsNi4wOGwzLjUyLDEuMDFsMy41Mi01LjU3bC0yLjAxLTMuOGwwLjc1LTMuMjloNS4yOGwtMS4yNiwyLjUzbDAuNSw5LjEybC03LjU0LDE4Ljc0bDAuNzUsNC4wNWwtMC4yNSw2Ljg0bDE0LjA3LDIwLjUxbDIuNzYsMC43NmwwLjI1LTE2LjcxbDIuNzYtMi41M2wtMy4wMi02LjU4bDIuNTEtMi43OWwtNS41My03LjM0bC0zLjAyLDAuMjVsLTEtMTIuMTVsNy43OS0yLjAzbDAuNS0zLjU1bDQuMDItMS4wMWwyLjI2LDIuMDNsMi43Ni0xMS4xNGw0Ljc3LTguMWwzLjc3LTIuMDNsMy4yNywwLjI1di0zLjhsLTUuMjgtMS4wMWwtNy4yOS02LjA4bDMuNTItNC4wNWwtMy4wMi02Ljg0bDIuNTEtMi41M2wzLjAyLDQuMDVsNy41NCwyLjc5bDguMjksMC43NmwxLjAxLTMuNTRsLTQuMjctNC4zbDQuNzctNi41OGwtMTAuODEtMy44bC0yLjc2LDUuNTdsLTMuNTItNC41NmwtMTkuODUtNi44NGwtMTguODUsMy4yOWwtMi43NiwxLjUydjEuNTJsNC4wMiwyLjAzbC0wLjUsNC44MWwtNy4yOS0zLjA0bC0xNi4wOCw2LjMzbC0yLjc2LTUuODJoLTExLjA2bC01LjAzLDUuMzJsLTE3Ljg0LTQuMDVsLTE2LjMzLDMuMjlsLTIuMDEsNS4wNmwyLjUxLDAuNzZsLTAuMjUsMy44bC0xNS44MywxLjc3bDEuMDEsNS4wNmwtMTQuNTgtMi41M2wzLjUyLTYuNThsLTE0LjgzLTAuNzZsMS4yNiw2Ljg0bC00Ljc3LDIuMjhsLTQuMDItMy44bC0xNi4zMywyLjc5bC02LjI4LDUuODJsLTAuMjUsMy41NGwtNC4wMiwwLjI1bC0wLjUtNC4wNWwxMi44Mi0xMS4xNHYtNy42bC04LjI5LTIuMjhsLTEwLjgxLDMuNTRsLTQuNTItNC41NmgtMi4wMWwtMi41MSw1LjA2bDIuMDEsMi4yOGwtMTQuMzMsNy44NWwtMTIuMzEsOS4zN2wtNy41NCwxMC4zOHY0LjNsOC4wNCwzLjI5bC00LjAyLDMuMDRsLTguNTQtMy4wNGwtMy41MiwzLjA0bC01LjI4LTYuMDhsLTEuMDEsMi4yOGw1Ljc4LDE4LjIzbDEuNTEsMC41MWw0LjAyLTIuMDNsMi4wMSwxLjUydjMuMjlsLTMuNzctMS41MmwtMi4yNiwxLjc3bDEuNTEsMy4yOWwtMS4yNiw4LjYxbC03Ljc5LDAuNzZsLTAuNS0yLjc5bDQuNTItMi43OWwxLjAxLTcuNmwtNS4wMy02LjU4bC0xLjc2LTExLjM5bC04LjA0LTEuMjdsLTAuNzUsNC4wNWwxLjUxLDIuMDNsLTMuMjcsMi43OWwxLjI2LDcuNmw0Ljc3LDIuMDNsMS4wMSw1LjU3bC00Ljc4LTMuMDRsLTEyLjMxLTIuMjhsLTEuNTEsNC4wNWwtOS44LDMuNTRsLTEuNTEtMi41M2wtMTIuODIsNy4wOWwtMC4yNSw0LjgxbC01LjAzLDAuNzZsMS41MS0zLjU0di0zLjU0bC01LjAzLTEuNzdsLTMuMjcsMS4yN2wyLjc2LDUuMzJsMi4wMSwzLjU0djIuNzlsLTMuNzctMC43NmwtMC43NS0wLjc2bC0zLjc3LDQuMDVsMi4wMSwzLjU0bC04LjU0LTAuMjVsMi43NiwzLjU1bC0wLjc1LDEuNTJoLTQuNTJsLTMuMjctMi4yOGwtMC43NS02LjMzbC01LjI4LTIuMDN2LTIuNTNsMTEuMDYsMi4yOGw2LjAzLDAuNTFsMi41MS0zLjhsLTIuMjYtNC4wNWwtMTYuMDgtNi4zM2wtNS41NSwxLjM4bC0xLjksMS42M2wwLjU5LDMuNzVsMi4zNiwwLjQxbC0wLjU1LDUuOWw3LjI4LDE3LjFsLTUuMjYsOC4zNGwtMC4zNiwxLjg4bDIuNjcsMS44OGwtMi40MSwxLjU5bC0xLjYsMC4wM2wwLjMsNy4zNWwyLjIxLDMuMTNsMC4wMywzLjA0bDIuODMsMC4yNmw0LjMzLDEuNjVsNC41OCw2LjNsMC4wNSwxLjY2bC0xLjQ5LDIuNTVsMy40Mi0wLjE5bDMuMzMsMC45Nmw0LjUsNi4zN2wxMS4wOCwxLjAxbC0wLjQ4LDcuNThsLTMuODIsMy4yN2wwLjc5LDEuMjhsLTMuNzcsNC4wNWwtMSwzLjhsMi4yNiwzLjI5bDcuMjksMi41M2wzLjAyLTEuNzdsMTkuMzUsNy4zNGwwLjc1LTIuMDNsLTQuMDItMy44di00LjgxbC0yLjUxLTAuNzZsMC41LTQuMDVsNC4wMi00LjgxbC03LjIxLTUuNGwwLjUtNy41MWw3LjcxLTUuMDdsOS4wNSwwLjUxbDEuNTEsMi43OWw5LjMsMC41MWw2Ljc5LTMuOGwtMy41Mi0zLjhsMC43NS03LjA5bDE3LjU5LTguNjFsMTMuNTMsNi4xbDQuNTItNC4wNWwxMy4zMiwxMi42NmwxMC4wNS0xLjAxbDMuNTIsMy41NGw5LjU1LDEuMDFsNi4yOC04LjYxbDguMDQsMy41NWw0LjI3LDAuNzZsNC4yNy0zLjhsLTMuNzctMi41M2wzLjI3LTUuMDZsOS4zLDMuMDRsMi4wMSw0LjA1bDQuMDIsMC4yNWwyLjUxLTEuNzdsNi43OS0wLjI1bDAuNzUsMS43N2w3Ljc5LDAuNTFsNS4yOC01LjU3bDEwLjgxLDEuMjdsMy4yNy0xLjI3bDEtNi4wOGwtMy4yNy03LjM0bDMuMjctMi43OWgxMC4zbDkuOCwxMS42NWwxMi41Niw3LjA5aDMuNzdsMC41LTMuMDRsNC41Mi0yLjc5bDAuNSwxNi40NmwtNC4wMiwwLjI1djQuMDVsMi4yNiwyLjc5bC0wLjQyLDMuNjJsMS42NywwLjY5bDEuMDEtMi41M2wxLjUxLDAuNTFsMSwxLjAxbDQuNTItMS4wMWw0LjUyLTEzLjE3bDAuNS0xNi40NmwtNS43OC0xMy4xN2wtNy4yOS04Ljg2bC0zLjUyLDAuNTF2Mi43OWwtOC41NC0zLjI5bDMuMjctNy4wOWwyLjc2LTE4Ljc0bDExLjU2LTMuNTRsNS41My0zLjU0aDYuMDNMODA1Ljg2LDk2bDEuNTEsMi41M2w1LjI4LTUuNTdsMy4wMiwwLjI1bC0wLjUtMy4yOWwtNC43OC0xLjAxbDMuMjctMTEuOUw4MTcuOTcsNzIuOTNMODE3Ljk3LDcyLjkzelwiLFwibmFtZVwiOlwiUnVzc2lhbiBGZWRlcmF0aW9uXCJ9LFwidXNcIjp7XCJwYXRoXCI6XCJNNjkuMTcsNTMuMzVsMy40Niw2LjQ3bDIuMjItMC41di0yLjI0TDY5LjE3LDUzLjM1TDY5LjE3LDUzLjM1TTQ5LjY2LDExMC4yNmwtMC4xNywzLjAxbDIuMTYtMC41di0xLjM0TDQ5LjY2LDExMC4yNkw0OS42NiwxMTAuMjZNNDYuMzQsMTExLjZsLTQuMzIsMi4xOGwwLjY3LDIuMzRsMS42Ni0xLjM0bDMuMzItMS41MUw0Ni4zNCwxMTEuNkw0Ni4zNCwxMTEuNk0yOC4zOSwxMTQuNDRsLTIuOTktMC42N2wtMC41LDEuMzRsMC4zMywyLjUxTDI4LjM5LDExNC40NEwyOC4zOSwxMTQuNDRNMjIuMDcsMTE0LjI4bC0yLjgzLTEuMTdsLTEsMS44NGwxLjgzLDEuODRMMjIuMDcsMTE0LjI4TDIyLjA3LDExNC4yOE0xMi4yNywxMTEuNmwtMS4zMy0xLjg0bC0xLjMzLDAuNXYyLjUxbDEuNSwxTDEyLjI3LDExMS42TDEyLjI3LDExMS42TTEuNDcsOTkuNzFsMS42NiwxLjE3bC0wLjUsMS4zNEgxLjQ3Vjk5LjcxTDEuNDcsOTkuNzFNMTAsMjQ4LjdsLTAuMTQsMi4zM2wyLjA0LDEuMzdsMS4yMi0xLjA5TDEwLDI0OC43TDEwLDI0OC43TTE1LjI5LDI1Mi4xM2wtMS45LDEuMzdsMS42MywyLjA1bDEuOS0xLjY0TDE1LjI5LDI1Mi4xM0wxNS4yOSwyNTIuMTNNMTkuMSwyNTUuNDFsLTEuNjMsMi4xOWwwLjU0LDEuMzdsMi4zMS0xLjA5TDE5LjEsMjU1LjQxTDE5LjEsMjU1LjQxTTIxLjgxLDI1OS42NWwtMC45NSw1LjQ3bDAuOTUsMi4wNWwzLjEyLTAuOTZsMS42My0yLjc0bC0zLjQtMy4xNUwyMS44MSwyNTkuNjVMMjEuODEsMjU5LjY1TTI3MS4wNSwyODEuMDZsLTIuNjQtMC44OWwtMi4xMiwxLjMzbDEuMDYsMS4yNGwzLjYxLDAuNTNMMjcxLjA1LDI4MS4wNkwyNzEuMDUsMjgxLjA2TTkzLjExLDQ0Ljg5bC04LjM5LDEuOTlsMS43Myw5LjQ1bDkuMTMsMi40OWwwLjQ5LDEuOTlMODIuNSw2NS4wNGwtNy42NSwxMi42OGwyLjcxLDEzLjQzTDgyLDk0LjEzbDMuNDYtMy4yM2wwLjk5LDEuOTlsLTQuMiw0Ljk3bC0xNi4yOSw3LjQ2bC0xMC4zNywyLjQ5bC0wLjI1LDMuNzNsMjMuOTQtNi45Nmw5Ljg3LTIuNzRsOS4xMy0xMS4xOWwxMC4xMi02LjcxbC01LjE4LDguN2w1LjY4LDAuNzVsOS42My00LjIzbDEuNzMsNi45Nmw2LjY2LDEuNDlsNi45MSw2LjcxbDAuNDksNC45N2wtMC45OSwxLjI0bDEuMjMsNC43MmgxLjczbDAuMjUtNy45NmgxLjk3bDAuNDksMTkuNjRsNC45NC00LjIzbC0zLjQ2LTIwLjM5aC01LjE4bC01LjY4LTcuMjFsMjcuODktNDcuMjVsLTI3LjY0LTIxLjYzbC0zMC44NSw1Ljk3bC0xLjIzLDkuNDVsNi42NiwzLjk4bC0yLjQ3LDYuNDdMOTMuMTEsNDQuODlMOTMuMTEsNDQuODlNMTQ4Ljc2LDE1OC4zNGwtMSw0LjAybC0zLjQ5LTIuMjZoLTEuNzRsLTEsNC4yN2wtMTIuMjEsMjcuMzZsMy4yNCwyMy44NGwzLjk5LDIuMDFsMC43NSw2LjUzaDguMjJsNy45Nyw2LjAybDE1LjY5LDEuNTFsMS43NCw4LjAzbDIuNDksMS43NmwzLjQ5LTMuNTFsMi43NCwxLjI1bDIuNDksMTEuNTRsNC4yMywyLjc2bDMuNDktNi41M2wxMC43MS03Ljc4bDYuOTcsMy4yNmw1Ljk4LDAuNWwwLjI1LTMuNzZsMTIuNDUsMC4yNWwyLjQ5LDIuNzZsMC41LDYuMjdsLTEuNDksMy41MWwxLjc0LDYuMDJoMy43NGwzLjc0LTUuNzdsLTEuNDktMi43NmwtMS40OS02LjAybDIuMjQtNi43OGwxMC4yMS04Ljc4bDcuNzItMi4yNmwtMS03LjI4bDEwLjcxLTExLjU1bDEwLjcxLTEuNzZMMjcyLjgsMTk5bDEwLjQ2LTYuMDJ2LTguMDNsLTEtMC41bC0zLjc0LDEuMjVsLTAuNSw0LjkybC0xMi40MywwLjE1bC05Ljc0LDYuNDdsLTE1LjI5LDVsLTIuNDQtMi45OWw2Ljk0LTEwLjVsLTMuNDMtMy4yN2wtMi4zMy00LjQ0bC00LjgzLTMuODhsLTUuMjUtMC40NGwtOS45Mi02Ljc3TDE0OC43NiwxNTguMzRMMTQ4Ljc2LDE1OC4zNHpcIixcIm5hbWVcIjpcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwifSxcIm11XCI6e1wicGF0aFwiOlwiTTYxMy4wMSwzOTguOTlsLTEuNTIsMS45OWwwLjMsMi4xNWwzLjItMi42MUw2MTMuMDEsMzk4Ljk5TDYxMy4wMSwzOTguOTl6XCIsXCJuYW1lXCI6XCJNYXVyaXRpdXNcIn0sXCJyZVwiOntcInBhdGhcIjpcIk02MDcuMzgsNDAyLjM3bC0yLjI4LDAuMTVsLTAuMTUsMS45OWwxLjUyLDAuMzFsMi4yOC0xLjA3TDYwNy4zOCw0MDIuMzdMNjA3LjM4LDQwMi4zN3pcIixcIm5hbWVcIjpcIlJldW5pb25cIn0sXCJtZ1wiOntcInBhdGhcIjpcIk01OTIuMywzNzIuOTJsLTIuMTMsNS4wNmwtMy42NSw2LjQ0bC02LjM5LDAuNDZsLTIuNzQsMy4yMmwwLjQ2LDkuODJsLTMuOTYsNC42bDAuNDYsNy44MmwzLjM1LDMuODNsMy45Ni0wLjQ2bDMuOTYtMi45MmwtMC45MS00LjZsOS4xMy0xNS44bC0xLjgzLTEuOTlsMS44My0zLjgzbDEuOTgsMC42MWwwLjYxLTEuNTNsLTEuODMtNy44MmwtMS4wNy0zLjIyTDU5Mi4zLDM3Mi45Mkw1OTIuMywzNzIuOTJ6XCIsXCJuYW1lXCI6XCJNYWRhZ2FzY2FyXCJ9LFwia21cIjp7XCJwYXRoXCI6XCJNNTc3LjY5LDM3MS4yM2wwLjQ2LDEuNTNsMS45OCwwLjMxbDAuNzYtMS45OUw1NzcuNjksMzcxLjIzTDU3Ny42OSwzNzEuMjNNNTgwLjU4LDM3NC4zbDAuNzYsMS42OWgxLjIybDAuNjEtMi4xNUw1ODAuNTgsMzc0LjNMNTgwLjU4LDM3NC4zelwiLFwibmFtZVwiOlwiQ29tb3Jvc1wifSxcInNjXCI6e1wicGF0aFwiOlwiTTYwMi4zNSwzNTguMzRsLTAuNjEsMS4yM2wxLjY3LDEuMzhsMS4yMi0xLjM4TDYwMi4zNSwzNTguMzRMNjAyLjM1LDM1OC4zNE02MTAuODgsMzQ5LjE0bC0xLjgzLDEuMjNsMS4zNywyLjE1aDEuODNMNjEwLjg4LDM0OS4xNEw2MTAuODgsMzQ5LjE0TTYxMS42NCwzNTQuNTFsLTEuMjIsMS4zOGwwLjkxLDEuMzhsMS42NywwLjMxbDAuMTUtMi45Mkw2MTEuNjQsMzU0LjUxTDYxMS42NCwzNTQuNTF6XCIsXCJuYW1lXCI6XCJTZXljaGVsbGVzXCJ9LFwibXZcIjp7XCJwYXRoXCI6XCJNNjU2LjQsMzIwLjc2bDAuMywyLjYxbDEuNjcsMC42MWwwLjMtMi4zTDY1Ni40LDMyMC43Nkw2NTYuNCwzMjAuNzZNNjU4LjUzLDMyNi4yOGwtMC4xNSwzLjIybDEuMjIsMC42MWwxLjA3LTIuMTVMNjU4LjUzLDMyNi4yOEw2NTguNTMsMzI2LjI4TTY1OC44NCwzMzIuNTdsLTEuMDcsMS4wN2wxLjIyLDEuMDdsMS41Mi0xLjA3TDY1OC44NCwzMzIuNTdMNjU4Ljg0LDMzMi41N3pcIixcIm5hbWVcIjpcIk1hbGRpdmVzXCJ9LFwicHRcIjp7XCJwYXRoXCI6XCJNMzcyLjY0LDIxNy4wMmwtMS4zNiwxLjM3bDIuNDQsMS4zN2wwLjI3LTEuOTFMMzcyLjY0LDIxNy4wMkwzNzIuNjQsMjE3LjAyTTM3OS45NywyMTYuMmwtMS42MywxLjA5bDEuMzYsMS4wOWwyLjE3LTAuNTVMMzc5Ljk3LDIxNi4yTDM3OS45NywyMTYuMk0zODEuMDUsMjIwLjAzbC0wLjgxLDIuMTlsMS4wOCwxLjM3bDEuMzYtMS4wOUwzODEuMDUsMjIwLjAzTDM4MS4wNSwyMjAuMDNNMzg3LjU2LDIyNC40bC0wLjU0LDEuMzdsMC44MSwwLjgybDIuMTctMS4zN0wzODcuNTYsMjI0LjRMMzg3LjU2LDIyNC40TTQwOC4xOCwyMzYuNDJsLTEuMDgsMS4zN2wxLjA4LDEuMzdsMS42My0wLjgyTDQwOC4xOCwyMzYuNDJMNDA4LjE4LDIzNi40Mk00MzAuOTMsMjExLjI0bC0wLjYyLDguNjVsLTEuNzcsMS42bDAuMTgsMC45OGwxLjI0LDIuMDVsLTAuOCwyLjVsMS4zMywwLjQ1bDMuMS0wLjM2bC0wLjE4LTIuNWwyLjAzLTExLjU5bC0wLjQ0LTEuNkw0MzAuOTMsMjExLjI0TDQzMC45MywyMTEuMjR6XCIsXCJuYW1lXCI6XCJQb3J0dWdhbFwifSxcImVzXCI6e1wicGF0aFwiOlwiTTQxNS42MiwyNTMuNzNsLTEuNzUsMS4wMWwwLjgxLDAuODJMNDE1LjYyLDI1My43M0w0MTUuNjIsMjUzLjczTTQwOS41NCwyNTMuOTJsLTIuMTcsMC41NWwxLjA4LDEuNjRoMS42M0w0MDkuNTQsMjUzLjkyTDQwOS41NCwyNTMuOTJNNDA0LjM4LDI1Mi4yOGwtMS4zNiwxLjM3bDEuOSwxLjY0bDEuMDgtMi40Nkw0MDQuMzgsMjUyLjI4TDQwNC4zOCwyNTIuMjhNNDQ4LjM2LDIwNWgtMTIuNzRsLTIuNTctMS4xNmwtMS4yNCwwLjA5bC0xLjUsMy4xMmwwLjUzLDMuMjFsNC44NywwLjQ1bDAuNjIsMi4wNWwtMi4xMiwxMS45NWwwLjA5LDIuMTRsMy40NSwxLjg3bDMuOTgsMC4yN2w3Ljk2LTEuOTZsMy44OS00LjlsMC4wOS00Ljk5bDYuOS02LjI0bDAuMzUtMi43NmwtNi4yOC0wLjA5TDQ0OC4zNiwyMDVMNDQ4LjM2LDIwNU00NjEuMSwyMTcuMjFsLTEuNTksMC41NGwwLjM1LDEuNDNoMi4zbDAuOTctMS4wN0w0NjEuMSwyMTcuMjFMNDYxLjEsMjE3LjIxelwiLFwibmFtZVwiOlwiU3BhaW5cIn0sXCJjdlwiOntcInBhdGhcIjpcIk0zODcuNTYsMjkwLjU0bC0xLjksMS4wOWwxLjM2LDEuMDlsMS42My0wLjgyTDM4Ny41NiwyOTAuNTRMMzg3LjU2LDI5MC41NE0zOTIuMjMsMjkyLjc0bC0xLjI0LDEuMWwwLjg4LDEuNjNsMi4xMi0wLjk1TDM5Mi4yMywyOTIuNzRMMzkyLjIzLDI5Mi43NE0zODkuNTIsMjk1LjgzbC0xLjU5LDAuOTVsMS43MSwyLjI5bDEuMzUtMC43MUwzODkuNTIsMjk1LjgzTDM4OS41MiwyOTUuODN6XCIsXCJuYW1lXCI6XCJDYXBlIFZlcmRlXCJ9LFwicGZcIjp7XCJwYXRoXCI6XCJNMjcuMjUsNDAyLjY4bC0xLjktMC4xNGwtMC4xNCwxLjc4bDEuNDksMC45NmwxLjc3LTEuMDlMMjcuMjUsNDAyLjY4TDI3LjI1LDQwMi42OE0zMy43Nyw0MDQuNmwtMi43MiwxLjc4bDIuMDQsMi40NmwxLjc3LTAuNDFsMC45NS0xLjIzTDMzLjc3LDQwNC42TDMzLjc3LDQwNC42elwiLFwibmFtZVwiOlwiRnJlbmNoIFBvbHluZXNpYVwifSxcImtuXCI6e1wicGF0aFwiOlwiTTI3Ni42LDI4My4zN2wtMS41LDAuNjJsMC41MywxLjMzbDEuNzYtMS4xNWwtMC4zNS0wLjM2TDI3Ni42LDI4My4zN0wyNzYuNiwyODMuMzd6XCIsXCJuYW1lXCI6XCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIn0sXCJhZ1wiOntcInBhdGhcIjpcIk0yNzkuMDcsMjg0Ljg4bC0wLjg4LDEuODdsMS4wNiwxLjQybDEuMzItMS4xNUwyNzkuMDcsMjg0Ljg4TDI3OS4wNywyODQuODh6XCIsXCJuYW1lXCI6XCJBbnRpZ3VhIGFuZCBCYXJidWRhXCJ9LFwiZG1cIjp7XCJwYXRoXCI6XCJNMjgyLjA3LDI5MC4wM2wtMS4wNiwwLjk4bDAuNzksMS42bDEuNS0wLjQ0TDI4Mi4wNywyOTAuMDNMMjgyLjA3LDI5MC4wM3pcIixcIm5hbWVcIjpcIkRvbWluaWNhXCJ9LFwibGNcIjp7XCJwYXRoXCI6XCJNMjgxLjk4LDI5NC4wM2wtMC43MSwxLjUxbDEuMTUsMS4yNGwxLjUtMC44TDI4MS45OCwyOTQuMDNMMjgxLjk4LDI5NC4wM3pcIixcIm5hbWVcIjpcIlNhaW50IEx1Y2lhXCJ9LFwiYmJcIjp7XCJwYXRoXCI6XCJNMjgyLjA3LDI5Ny44NWwtMS4yMywwLjg5bDAuOTcsMS43OGwxLjU5LTAuODlMMjgyLjA3LDI5Ny44NUwyODIuMDcsMjk3Ljg1elwiLFwibmFtZVwiOlwiQmFyYmFkb3NcIn0sXCJnZFwiOntcInBhdGhcIjpcIk0yODAuNTcsMzAxLjMxbC0xLjE1LDEuMTVsMC40NCwwLjcxaDEuNDFsMC40NC0xLjE2TDI4MC41NywzMDEuMzFMMjgwLjU3LDMwMS4zMXpcIixcIm5hbWVcIjpcIkdyZW5hZGFcIn0sXCJ0dFwiOntcInBhdGhcIjpcIk0yODIuMjQsMzA0Ljc4bC0xLjA2LDAuOThsLTEuMTUsMC4xOHYxLjQybDIuMTIsMS45NWwwLjg4LTEuNDJsMC41My0xLjZsLTAuMTgtMS4zM0wyODIuMjQsMzA0Ljc4TDI4Mi4yNCwzMDQuNzh6XCIsXCJuYW1lXCI6XCJUcmluaWRhZCBhbmQgVG9iYWdvXCJ9LFwiZG9cIjp7XCJwYXRoXCI6XCJNMjYzLjExLDI4MC40NGwtNS4yOS0zLjQ2bC0yLjUtMC44NWwtMC44NCw2bDAuODgsMS42OWwxLjE1LTEuMzNsMy4zNS0wLjg5bDIuOTEsMC42MkwyNjMuMTEsMjgwLjQ0TDI2My4xMSwyODAuNDR6XCIsXCJuYW1lXCI6XCJEb21pbmljYW4gUmVwdWJsaWNcIn0sXCJodFwiOntcInBhdGhcIjpcIk0yNTAuODYsMjc1LjM4bDMuNDQsMC4zNmwtMC40MSw0LjIybC0wLjM0LDIuMjJsLTQuMDEtMC4yMmwtMC43MSwxLjA3bC0xLjIzLTAuMDlsLTAuNDQtMi4zMWw0LjIzLTAuMzVsLTAuMjYtMi40bC0xLjk0LTAuOEwyNTAuODYsMjc1LjM4TDI1MC44NiwyNzUuMzh6XCIsXCJuYW1lXCI6XCJIYWl0aVwifSxcImZrXCI6e1wicGF0aFwiOlwiTTMwNy45NSw1MDguMThsLTIuNjMtMC4yOWwtMi42MiwxLjc2bDEuOSwyLjA2TDMwNy45NSw1MDguMThMMzA3Ljk1LDUwOC4xOE0zMTAuNTcsNTA2Ljg2bC0wLjg3LDIuNzlsLTIuNDgsMi4ybDAuMTUsMC43M2w0LjIzLTEuNjJsMS43NS0yLjJMMzEwLjU3LDUwNi44NkwzMTAuNTcsNTA2Ljg2elwiLFwibmFtZVwiOlwiRmFsa2xhbmQgSXNsYW5kc1wifSxcImlzXCI6e1wicGF0aFwiOlwiTTQwNi4zNiwxMTcuMzFsLTEuOTYtMS4xMWwtMi42NCwxLjY3bC0yLjI3LDIuMWwwLjA2LDEuMTdsMi45NCwwLjM3bC0wLjE4LDIuMWwtMS4wNCwxLjA1bDAuMjUsMC42OGwyLjk0LDAuMTl2My40bDQuMjMsMC43NGwyLjUxLDEuNDJsMi44MiwwLjEybDQuODQtMi40MWwzLjc0LTQuOTRsMC4wNi0zLjM0bC0yLjI3LTEuOTJsLTEuOS0xLjYxbC0wLjg2LDAuNjJsLTEuMjksMS42N2wtMS40Ny0wLjE5bC0xLjQ3LTEuNjFsLTEuOSwwLjE4bC0yLjc2LDIuMjlsLTEuNjYsMS43OWwtMC45Mi0wLjhsLTAuMDYtMS45OGwwLjkyLTAuNjJMNDA2LjM2LDExNy4zMUw0MDYuMzYsMTE3LjMxelwiLFwibmFtZVwiOlwiSWNlbGFuZFwifSxcIm5vXCI6e1wicGF0aFwiOlwiTTQ4OC4yNiw1My45NmwtMS42NS0xLjY2bC0zLjY2LDEuNzhoLTYuNzJMNDc1LjE3LDU4bDMuNzcsMy4zM2wxLjY1LTAuMjRsMi4zNi00LjA0bDIsMS40M2wtMS40MiwyLjg1bC0wLjcxLDQuMTZsMS42NSwyLjYxbDMuNTQtNS45NGw0LjYtNS41OWwtMS43Ny0xLjU0TDQ4OC4yNiw1My45Nkw0ODguMjYsNTMuOTZNNDkwLjI2LDQ2LjgzbC0yLjk1LDIuNzNsMS43NywyLjczaDMuMThsMS4zLDEuNzhsMy44OSwyLjAybDQuNDgtMi42MWwzLjA3LTIuNjFsLTEuMDYtMi4xNGwtMy4wNy0xLjc4bC0yLjI0LDIuMDJsLTEuNTMtMS45bC0xLjE4LDAuMTJsLTEuNTMsMy4zM2wtMi4yNC0yLjI2bC0wLjI0LTEuNTRMNDkwLjI2LDQ2LjgzTDQ5MC4yNiw0Ni44M000OTYuOTgsNTkuMDdsLTIuMzYsMi4xNGwtMiwxLjU0bDAuOTQsMS42NmwxLjg5LDAuNTlsMy4wNy0xLjQzbDEuNDItMS43OGwtMS4zLTIuMTRMNDk2Ljk4LDU5LjA3TDQ5Ni45OCw1OS4wN001MTUuNDYsMTAyLjE0bDIuMDItMS40OEw1MTcuMyw5OWwtMS4yOC0wLjc0bDAuMTgtMi4wM2gxLjF2LTEuMTFsLTQuNzctMS4yOWwtNy4xNSwwLjc0bC0wLjczLDMuMTRMNTAzLDk3LjE2bC0xLjEtMS44NWwtMy40OSwwLjE4TDQ5OC4wNCw5OWwtMS42NSwwLjc0bC0wLjkyLTEuODVsLTcuMzQsNS45MWwxLjQ3LDEuNjZsLTIuNzUsMS4yOWwtNi4yNCwxMi4zOGwtMi4yLDEuNDhsMC4xOCwxLjExbDIuMiwxLjExbC0wLjU1LDIuNGwtMy42Ny0wLjE5bC0xLjEtMS4yOWwtMi4zOCwyLjc3bC0xLjQ3LDEuMTFsLTAuMzcsMi41OWwtMS4yOCwwLjc0bC0zLjMsMC43NGwtMS42NSw1LjE4bDEuMSw4LjVsMS4yOCwzLjg4bDEuNDcsMS40OGwzLjMtMC4xOGw0Ljc3LTQuNjJsMS44My0zLjE0bDAuNTUsNC42MmwzLjEyLTUuNTRsMC4xOC0xNS41M2wyLjU0LTEuNmwwLjc2LTguNTdsNy43LTExLjA5bDMuNjctMS4yOWwxLjY1LTIuMDNsNS41LDEuMjlsMi43NSwxLjY2bDAuOTItNC42Mmw0LjU5LTIuNzdMNTE1LjQ2LDEwMi4xNEw1MTUuNDYsMTAyLjE0elwiLFwibmFtZVwiOlwiTm9yd2F5XCJ9LFwibGtcIjp7XCJwYXRoXCI6XCJNNjgwLjU0LDMwOC4wNWwwLjI1LDIuNzJsMC4yNSwxLjk4bC0xLjQ3LDAuMjVsMC43NCw0LjQ1bDIuMjEsMS4yNGwzLjQzLTEuOThsLTAuOTgtNC42OWwwLjI1LTEuNzNsLTMuMTktMi45Nkw2ODAuNTQsMzA4LjA1TDY4MC41NCwzMDguMDV6XCIsXCJuYW1lXCI6XCJTcmkgTGFua2FcIn0sXCJjdVwiOntcInBhdGhcIjpcIk0yMjAuODUsMjY2LjkydjEuMjdsNS4zMiwwLjFsMi41MS0xLjQ2bDAuMzksMS4wN2w1LjIyLDEuMjdsNC42NCw0LjE5bC0xLjA2LDEuNDZsMC4xOSwxLjY2bDMuODcsMC45N2wzLjg3LTEuNzVsMS43NC0xLjc1bC0yLjUxLTEuMjdsLTEyLjk1LTcuNmwtNC41NC0wLjQ5TDIyMC44NSwyNjYuOTJMMjIwLjg1LDI2Ni45MnpcIixcIm5hbWVcIjpcIkN1YmFcIn0sXCJic1wiOntcInBhdGhcIjpcIk0yMzkuNjEsMjU5LjEzbC0xLjI2LTAuMzlsLTAuMSwyLjQzbDEuNTUsMS41NmwxLjA2LTEuNTZMMjM5LjYxLDI1OS4xM0wyMzkuNjEsMjU5LjEzTTI0Mi4xMiwyNjIuOTNsLTEuNzQsMC45N2wxLjY0LDIuMzRsMC44Ny0xLjE3TDI0Mi4xMiwyNjIuOTNMMjQyLjEyLDI2Mi45M00yNDcuNzMsMjY0LjY4bC0xLjg0LTAuMWwwLjE5LDEuMTdsMS4zNSwxLjk1bDEuMTYtMS4yN0wyNDcuNzMsMjY0LjY4TDI0Ny43MywyNjQuNjhNMjQ2Ljg2LDI2Mi4zNWwtMy0xLjI3bC0wLjU4LTMuMDJsMS4xNi0wLjQ5bDEuMTYsMi4zNGwxLjE2LDAuODhMMjQ2Ljg2LDI2Mi4zNUwyNDYuODYsMjYyLjM1TTI0My45NiwyNTYuMjFsLTEuNTUtMC4zOWwtMC4yOS0xLjk1bC0xLjY0LTAuNThsMS4wNi0xLjA3bDEuOTMsMC42OGwxLjQ1LDAuODhMMjQzLjk2LDI1Ni4yMUwyNDMuOTYsMjU2LjIxelwiLFwibmFtZVwiOlwiQmFoYW1hc1wifSxcImptXCI6e1wicGF0aFwiOlwiTTIzOC45MywyNzkuNTlsLTMuNDgsMC44OHYwLjk3bDIuMDMsMS4xN2gyLjEzbDEuMzUtMS41NkwyMzguOTMsMjc5LjU5TDIzOC45MywyNzkuNTl6XCIsXCJuYW1lXCI6XCJKYW1haWNhXCJ9LFwiZWNcIjp7XCJwYXRoXCI6XCJNMjMwLjIsMzM1Ljg1bC00LjczLDIuOTRsLTAuMzQsNC4zNmwtMC45NSwxLjQzbDIuOTgsMi44NmwtMS4yOSwxLjQxbDAuMywzLjZsNS4zMywxLjI3bDguMDctOS41NWwtMC4wMi0zLjMzbC0zLjg3LTAuMjVMMjMwLjIsMzM1Ljg1TDIzMC4yLDMzNS44NXpcIixcIm5hbWVcIjpcIkVjdWFkb3JcIn0sXCJjYVwiOntcInBhdGhcIjpcIk0yMDMuNzMsMzUuODlsMC4yMiw0LjAybC03Ljk4LDguMjdsMiw2LjdsNS43Ni0xLjU2bDMuMzMtNC45Mmw4LjQyLTMuMTNsNi44Ny0wLjQ1bC01LjMyLTUuODFsLTIuNjYsMi4wMWwtMi0wLjY3bC0xLjExLTIuNDZsLTIuNDQtMi40NkwyMDMuNzMsMzUuODlMMjAzLjczLDM1Ljg5TTIxNC4xNSwyNC4wNWwtMS43NywzLjEzbDguNjUsMy4xM2wzLjEtNC42OWwxLjMzLDMuMTNoMi4yMmw0LjIxLTQuNjlsLTUuMS0xLjM0bC0yLTEuNTZsLTIuNjYsMi42OEwyMTQuMTUsMjQuMDVMMjE0LjE1LDI0LjA1TTIyOS4yMywzMC4zMWwtNi44NywyLjl2Mi4yM2w4Ljg3LDMuMzVsLTIsMi4yM2wxLjMzLDIuOWw1LjU0LTIuNDZoNC42NmwyLjIyLDMuNTdsMy43Ny0zLjhsLTAuODktMy41OGwtMy4xLDEuMTJsLTAuNDQtNC40N2wxLjU1LTIuNjhoLTEuNTVsLTIuNDQsMS41NmwtMS4xMSwwLjg5bDAuNjcsMy4xM2wtMS43NywxLjM0bC0yLjY2LTAuMjJsLTAuNjctNC4wMkwyMjkuMjMsMzAuMzFMMjI5LjIzLDMwLjMxTTIzOC4zMiwyMy4zOGwtMC42NywyLjIzbDQuMjEsMi4wMWwzLjEtMS43OWwtMC4yMi0xLjM0TDIzOC4zMiwyMy4zOEwyMzguMzIsMjMuMzhNMjQxLjY0LDE5LjU4bC0zLjEsMS4xMmwwLjIyLDEuNTZsNi44Ny0wLjQ1bC0wLjIyLTEuNTZMMjQxLjY0LDE5LjU4TDI0MS42NCwxOS41OE0yNTYuNSwyMy4zOGwtMC40NCwxLjU2bC0xLjExLDEuNTZ2Mi4yM2w0LjIxLTAuNjdsNC40MywzLjhoMS41NXYtMy44bC00LjQzLTQuOTJMMjU2LjUsMjMuMzhMMjU2LjUsMjMuMzhNMjY3LjgxLDI3Ljg1bDEuNzcsMi4wMWwtMS41NSwyLjY4bDEuMTEsMi45bDQuODgtMi42OHYtMi4wMWwtMi44OC0zLjM1TDI2Ny44MSwyNy44NUwyNjcuODEsMjcuODVNMjc0LjI0LDIyLjcxbDAuMjIsMy41N2g1Ljk5bDEuNTUsMS4zNGwtMC4yMiwxLjU2bC01LjMyLDAuNjdsMy43Nyw1LjE0bDUuMSwwLjg5bDcuMDktMy4xM2wtMTAuMi0xNS40MmwtMy4xLDIuMDFsMC4yMiwyLjY4bC0zLjU1LTEuMzRMMjc0LjI0LDIyLjcxTDI3NC4yNCwyMi43MU0yMjIuNTgsNDcuOTZsLTguNDIsMi4yM2wtNC44OCw0LjI1bDAuNDQsNC42OWw4Ljg3LDIuNjhsLTIsNC40N2wtNi40My00LjAybC0xLjc3LDMuMzVsNC4yMSwyLjlsLTAuMjIsNC42OWw2LjQzLDEuNzlsNy43Ni0wLjQ1bDEuMzMtMi40Nmw1Ljc2LDYuNDhsMy45OS0xLjM0bDAuNjctNC40N2wyLjg4LDIuMDFsMC40NC00LjQ3bC0zLjU1LTIuMjNsMC4yMi0xNC4wN2wtMy4xLTIuNDZMMjMxLjg5LDU2TDIyMi41OCw0Ny45NkwyMjIuNTgsNDcuOTZNMjQ5LjYzLDU3Ljc5bC0yLjg4LTEuMzRsLTEuNTUsMi4wMWwzLjEsNC45MmwwLjIyLDQuNjlsNi42NS00LjAydi01LjgxbDIuNDQtMi40NmwtMi40NC0xLjc5aC0zLjk5TDI0OS42Myw1Ny43OUwyNDkuNjMsNTcuNzlNMjYzLjgyLDU1Ljc4bC00LjY2LDMuOGwxLjExLDQuNjloMi44OGwxLjMzLTIuNDZsMiwyLjAxbDItMC4yMmw1LjMyLTQuNDdMMjYzLjgyLDU1Ljc4TDI2My44Miw1NS43OE0yNjMuMzcsNDguNGwtMS4xMSwyLjIzbDQuODgsMS43OWwxLjMzLTIuMDFMMjYzLjM3LDQ4LjRMMjYzLjM3LDQ4LjRNMjYwLjQ5LDM5LjkxbC00Ljg4LDAuNjdsLTIuODgsMi42OGw1LjMyLDAuMjJsLTEuNTUsNC4wMmwxLjExLDEuNzlsMS41NS0wLjIybDMuNzctNi4wM0wyNjAuNDksMzkuOTFMMjYwLjQ5LDM5LjkxTTI2OC45MiwzOC4zNWwtMi42NiwwLjg5bDAuNDQsMy41N2w0LjQzLDIuOWwwLjIyLDIuMjNsLTEuMzMsMS4zNGwwLjY3LDQuNDdsMTcuMDcsNS41OGw0LjY2LDEuNTZsNC42Ni00LjAybC01LjU0LTQuNDdsLTUuMSwxLjM0bC03LjA5LTAuNjdsLTIuNjYtMi42OGwtMC42Ny03LjM3bC00LjQzLTIuMjNMMjY4LjkyLDM4LjM1TDI2OC45MiwzOC4zNU0yODIuODgsNjEuNTlMMjc4LDYxLjE0bC01Ljc2LDIuMjNsLTMuMSw0LjI0bDAuODksMTEuNjJsOS41MywwLjQ1bDkuMDksNC40N2w2LjQzLDcuMzdsNC44OC0wLjIybC0xLjMzLDYuOTJsLTQuNDMsNy4zN2wtNC44OCwyLjIzbC0zLjU1LTAuNjdsLTEuNzctMS41NmwtMi42NiwzLjU3bDEuMTEsMy41N2wzLjc3LDAuMjJsNC42Ni0yLjIzbDMuOTksMTAuMjhsOS45OCw2LjQ4bDYuODctOC43MWwtNS43Ni05LjM4bDMuMzMtMy44bDQuNjYsNy44Mmw4LjQyLTcuMzdsLTEuNTUtMy4zNWwtNS43NiwxLjc5bC0zLjk5LTEwLjk1bDMuNzctNi4yNWwtNy41NC04LjA0bC00LjIxLDIuOWwtMy45OS04LjcxbC04LjQyLDEuMTJsLTIuMjItMTAuNWwtNi44Nyw0LjY5bC0wLjY3LDUuODFoLTMuNzdsMC40NC01LjE0TDI4Mi44OCw2MS41OUwyODIuODgsNjEuNTlNMjkyLjg2LDY1LjYxbC0xLjc3LDEuNzlsMS41NSwyLjQ2bDcuMzIsMC44OWwtNC42Ni00LjkyTDI5Mi44Niw2NS42MUwyOTIuODYsNjUuNjFNMjg1Ljc3LDQwLjM2djIuMDFsLTQuODgsMS4xMmwxLjMzLDIuMjNsNS41NCwyLjIzbDYuMjEsMC42N2w0LjQzLDMuMTNsNC40My0yLjQ2bC0zLjEtMy4xM2gzLjk5bDIuNDQtMi42OGw1Ljk5LTAuODl2LTEuMzRsLTMuMzMtMi4yM2wwLjQ0LTIuNDZsOS4zMSwxLjU2bDEzLjc1LTUuMzZsLTUuMS0xLjU2bDEuMzMtMS43OWgxMC42NGwxLjc3LTEuNzlsLTIxLjUxLTcuNmwtNS4xLTEuNzlsLTUuNTQsNC4wMmwtNi4yMS01LjE0bC0zLjMzLTAuMjJsLTAuNjcsNC4yNWwtNC4yMS0zLjhsLTQuODgsMS41NmwwLjg5LDIuNDZsNy4zMiwxLjU2bC0wLjQ0LDMuNTdsMy45OSwyLjQ2bDkuNzYtMi40NmwwLjIyLDMuMzVsLTcuOTgsMy44bC00Ljg4LTMuOGwtNC40MywwLjQ1bDQuNDMsNi4yNmwtMi4yMiwxLjEybC0zLjMzLTIuOWwtMi40NCwxLjU2bDIuMjIsNC4yNGgzLjc3bC0wLjg5LDQuMDJsLTMuMS0wLjQ1bC0zLjk5LTQuMjVMMjg1Ljc3LDQwLjM2TDI4NS43Nyw0MC4zNk0yNjYuMDEsMTAxLjg1bC00LjIzLDUuMzJsLTAuMjYsNS44NmwzLjctMi4xM2g0LjQ5bDMuMTcsMi45M2wyLjkxLTIuNEwyNjYuMDEsMTAxLjg1TDI2Ni4wMSwxMDEuODVNMzE3LjUyLDE3MS4wNWwtMTAuNTcsMTAuMTJsMS4wNiwyLjRsMTIuOTQsNC43OWwxLjg1LTMuMTlsLTEuMDYtNS4zMmwtNC4yMywwLjUzbC0yLjM4LTIuNjZsMy45Ni0zLjk5TDMxNy41MiwxNzEuMDVMMzE3LjUyLDE3MS4wNU0xNTguMjIsNDguNjZsMS45OSwzLjAxbDEsNC4wMmw0Ljk4LDEuMjVsMy40OS0zLjc2bDIuOTksMS41MWw4LjQ3LDAuNzVsNS45OC0yLjUxbDEsOC4yOGgzLjQ5VjU3LjdsMy40OSwwLjI1bDguNzIsMTAuMjlsNS43MywzLjUxbC0yLjk5LDQuNzdsMS4yNSwxLjI1TDIxOSw4MC4wM2wwLjI1LDUuMDJsMi45OSwwLjVsMC43NS03LjUzbDQuNzMtMS4yNWwzLjQ5LDUuMjdsNy40NywzLjUxbDMuNzQsMC43NWwyLjQ5LTMuMDFsMC4yNS00Ljc3bDQuNDgtMi43NmwxLjQ5LDQuMDJsLTMuOTksNy4wM2wwLjUsMy41MWwyLjI0LTMuNTFsNC40OC00LjAybDAuMjUtNS4yN2wtMi40OS00LjAybDAuNzUtMy4yNmw1Ljk4LTMuMDFsMi43NCwyLjAxbDAuNSwxNy41N2w0LjIzLTMuNzZsMi40OSwxLjUxbC0zLjQ5LDYuMDJsNC40OCwxbDYuNDgtMTAuMDRsNS40OCw1Ljc3bC0yLjI0LDEwLjI5bC01LjQ4LDMuMDFsLTUuMjMtMi41MWwtOS40NiwyLjAxbDEsMy4yNmwtMi40OSw0LjAybC03LjcyLDEuNzZsLTguNzIsNi43OGwtNy43MiwxMC4yOWwtMSwzLjI2bDUuMjMsMi4wMWwxLjk5LDUuMDJsNy4yMiw3LjI4bDExLjQ2LDUuMDJsLTIuNDksMTEuNTRsLTAuMjUsMy4yNmwyLjk5LDIuMDFsMy45OS01LjI3bDAuNS0xMC4wNGw2LjIzLTAuMjVsMi45OS01Ljc3bDAuNS04Ljc4bDcuOTctMTUuNTZsOS45NiwzLjUxbDUuMjMsNy4yOGwtMi4yNCw3LjI4bDMuOTksMi4yNmw5LjcxLTYuNTNsMi43NCwxNy44Mmw4Ljk3LDEwLjc5bDAuMjUsNS41MmwtOS45NiwyLjUxbC00LjczLDUuMDJsLTkuOTYtMi4yNmwtNC45OC0wLjI1bC04LjcyLDYuNzhsNS4yMy0xLjI1bDYuNDgtMS4yNWwxLjI1LDEuNTFsLTEuNzQsNS41MmwwLjI1LDUuMDJsMi45OSwyLjAxbDIuOTktMC43NWwxLjUtMi4yNmgxLjk5bC0zLjI0LDYuMDJsLTYuMjMsMC4yNWwtMi43NCw0LjAyaC0zLjQ5bC0xLTMuMDFsNC45OC01LjAybC01Ljk4LDIuMDFsLTAuMjctOC41M2wtMS43Mi0xbC01LjIzLDIuMjZsLTAuNSw0LjI3aC0xMS45NmwtMTAuMjEsNy4wM2wtMTMuNyw0LjUybC0xLjQ5LTIuMDFsNi45LTEwLjNsLTMuOTItMy43N2wtMi40OS00Ljc4bC01LjA3LTMuODdsLTUuNDQtMC40NWwtOS43NS02LjgzbC03MC43MS0xMS42MmwtMS4xNy00Ljc5bC02LjQ4LTYuMDJ2LTUuMDJsMS00LjUybC0wLjUtMi41MWwtMi40OS0yLjUxbC0wLjUtNC4wMmw2LjQ4LTQuNTJsLTMuOTktMjEuNThsLTUuNDgtMC4yNWwtNC45OC02LjUzTDE1OC4yMiw0OC42NkwxNTguMjIsNDguNjZNMTMzLjgzLDEyOC40MWwtMS43LDMuMjZsMC41OSwyLjMxbDEuMTEsMC42OWwtMC4yNiwwLjk0bC0xLjE5LDAuMzRsMC4zNCwzLjQzbDEuMjgsMS4yOWwxLjAyLTEuMTFsLTEuMjgtMy4zNGwwLjc2LTIuNjZsMS44Ny0yLjQ5bC0xLjM2LTIuMzFMMTMzLjgzLDEyOC40MUwxMzMuODMsMTI4LjQxTTEzOS40NSwxNDcuOTVsLTEuNTMsMC42bDIuODEsMy4yNmwwLjY4LDMuODZsMi44MSwzbDIuMzgtMC40M3YtMy45NGwtMi44OS0xLjhMMTM5LjQ1LDE0Ny45NUwxMzkuNDUsMTQ3Ljk1elwiLFwibmFtZVwiOlwiQ2FuYWRhXCJ9LFwiZ3RcIjp7XCJwYXRoXCI6XCJNMTk0Ljg4LDI5MS41Mmw1LjkzLDQuMzRsNS45OC03LjQzbC0xLjAyLTEuNTRsLTIuMDQtMC4wN3YtNC4zNWwtMS41My0wLjkzbC00LjYzLDEuMzhsMS43Nyw0LjA4TDE5NC44OCwyOTEuNTJMMTk0Ljg4LDI5MS41MnpcIixcIm5hbWVcIjpcIkd1YXRlbWFsYVwifSxcImhuXCI6e1wicGF0aFwiOlwiTTIwNy41NSwyODguNzhsOS4yNC0wLjM1bDIuNzQsMy4yNmwtMS43MS0wLjM5bC0zLjI5LDAuMTRsLTQuMyw0LjA0bC0xLjg0LDQuMDlsLTEuMjEtMC42NGwtMC4wMS00LjQ4bC0yLjY2LTEuNzhMMjA3LjU1LDI4OC43OEwyMDcuNTUsMjg4Ljc4elwiLFwibmFtZVwiOlwiSG9uZHVyYXNcIn0sXCJzdlwiOntcInBhdGhcIjpcIk0yMDEuNjUsMjk2LjI3bDQuNywyLjM0bC0wLjA3LTMuNzFsLTIuNDEtMS40N0wyMDEuNjUsMjk2LjI3TDIwMS42NSwyOTYuMjd6XCIsXCJuYW1lXCI6XCJFbCBTYWx2YWRvclwifSxcIm5pXCI6e1wicGF0aFwiOlwiTTIxNy43NCwyOTIuMTFsMi4xOSwwLjQ0bDAuMDcsNC40OWwtMi41NSw3LjI4bC02Ljg3LTAuNjhsLTEuNTMtMy41MWwyLjA0LTQuMjZsMy44Ny0zLjZMMjE3Ljc0LDI5Mi4xMUwyMTcuNzQsMjkyLjExelwiLFwibmFtZVwiOlwiTmljYXJhZ3VhXCJ9LFwiY3JcIjp7XCJwYXRoXCI6XCJNMjE3LjM4LDMwNC45OGwxLjM5LDIuNzJsMS4xMywxLjVsLTEuNTIsNC41MWwtMi45LTIuMDRsLTQuNzQtNC4zNHYtMi44N0wyMTcuMzgsMzA0Ljk4TDIxNy4zOCwzMDQuOTh6XCIsXCJuYW1lXCI6XCJDb3N0YSBSaWNhXCJ9LFwicGFcIjp7XCJwYXRoXCI6XCJNMjIwLjU5LDMwOS42MWwtMS40Niw0LjU2bDQuODIsMS4yNWwyLjk5LDAuNTlsMC41MS0zLjUzbDMuMjEtMS42MmwyLjg1LDEuNDdsMS4xMiwxLjc5bDEuMzYtMC4xNmwxLjA3LTMuMjVsLTMuNTYtMS40N2wtMi43LTEuNDdsLTIuNywxLjg0bC0zLjIxLDEuNjJsLTMuMjgtMS4zMkwyMjAuNTksMzA5LjYxTDIyMC41OSwzMDkuNjF6XCIsXCJuYW1lXCI6XCJQYW5hbWFcIn0sXCJjb1wiOntcInBhdGhcIjpcIk0yNTMuNzMsMjk5Ljc4bC0yLjA2LTAuMjFsLTEzLjYyLDExLjIzbC0xLjQ0LDMuOTVsLTEuODYsMC4yMWwwLjgzLDguNzNsLTQuNzUsMTEuNjVsNS4xNiw0LjM3bDYuNjEsMC40Mmw0LjU0LDYuNjZsNi42LDAuMjFsLTAuMjEsNC45OUgyNTZsMi42OC05LjE1bC0yLjQ4LTMuMTJsMC42Mi01LjgybDUuMTYtMC40MmwtMC42Mi0xMy41MmwtMTEuNTYtMy43NGwtMi42OC03LjI4TDI1My43MywyOTkuNzhMMjUzLjczLDI5OS43OHpcIixcIm5hbWVcIjpcIkNvbG9tYmlhXCJ9LFwidmVcIjp7XCJwYXRoXCI6XCJNMjUwLjQ2LDMwNS45MmwwLjQ0LDIuNTlsMy4yNSwxLjAzbDAuNzQtNC43N2wzLjQzLTMuNTVsMy40Myw0LjAybDcuODksMi4xNWw2LjY4LTEuNGw0LjU1LDUuNjFsMy40MywyLjE1bC0zLjc2LDUuNzNsMS4yNiw0LjM0bC0yLjE1LDIuNjZsLTIuMjMsMS44N2wtNC44My0yLjQzbC0xLjExLDEuMTJ2My40NmwzLjUzLDEuNjhsLTIuNiwyLjgxbC0yLjYsMi44MWwtMy40My0wLjI4bC0zLjQ1LTMuNzlsLTAuNzMtMTQuMjZsLTExLjc4LTQuMDJsLTIuMTQtNi4yN0wyNTAuNDYsMzA1LjkyTDI1MC40NiwzMDUuOTJ6XCIsXCJuYW1lXCI6XCJWZW5lenVlbGFcIn0sXCJneVwiOntcInBhdGhcIjpcIk0yODUuMDUsMzE0LjEzbDcuMjIsNi41NGwtMi44NywzLjMybC0wLjIzLDEuOTdsMy43NywzLjg5bC0wLjA5LDMuNzRsLTYuNTYsMi41bC0zLjkzLTUuMzFsMC44NC02LjM4bC0xLjY4LTQuNzVMMjg1LjA1LDMxNC4xM0wyODUuMDUsMzE0LjEzelwiLFwibmFtZVwiOlwiR3V5YW5hXCJ9LFwic3JcIjp7XCJwYXRoXCI6XCJNMjkzLjEzLDMyMS4xNGwyLjA0LDEuODdsMy4xNi0xLjk2bDIuODgsMC4wOWwtMC4zNywxLjEybC0xLjIxLDIuNTJsLTAuMTksNi4yN2wtNS43NSwyLjM0bDAuMjgtNC4wMmwtMy43MS0zLjQ2bDAuMTktMS43OEwyOTMuMTMsMzIxLjE0TDI5My4xMywzMjEuMTR6XCIsXCJuYW1lXCI6XCJTdXJpbmFtZVwifSxcImdmXCI6e1wicGF0aFwiOlwiTTMwMi4xMywzMjEuOGw1Ljg1LDMuNjVsLTMuMDYsNi4wOGwtMS4xMSwxLjRsLTMuMjUtMS44N2wwLjA5LTYuNTVMMzAyLjEzLDMyMS44TDMwMi4xMywzMjEuOHpcIixcIm5hbWVcIjpcIkZyZW5jaCBHdWlhbmFcIn0sXCJwZVwiOntcInBhdGhcIjpcIk0yMjUuMDMsMzQ5LjUybC0xLjk0LDEuOTZsMC4xMywzLjEzbDE2Ljk0LDMwLjg4bDE3LjU5LDExLjM0bDIuNzItNC41NmwwLjY1LTEwLjAzbC0xLjQyLTYuMjVsLTQuNzktOC4wOGwtMi44NSwwLjkxbC0xLjI5LDEuNDNsLTUuNjktNi41MmwxLjQyLTcuNjlsNi42LTQuM2wtMC41Mi00LjA0bC02LjcyLTAuMjZsLTMuNDktNS44NmwtMS45NC0wLjY1bDAuMTMsMy41MmwtOC42NiwxMC4yOWwtNi40Ny0xLjU2TDIyNS4wMywzNDkuNTJMMjI1LjAzLDM0OS41MnpcIixcIm5hbWVcIjpcIlBlcnVcIn0sXCJib1wiOntcInBhdGhcIjpcIk0yNTguNzEsMzcyLjc5bDguMjMtMy41OWwyLjcyLDAuMjZsMS44MSw3LjU2bDEyLjU0LDQuMTdsMi4wNyw2LjM5bDUuMTcsMC42NWwyLjIsNS40N2wtMS41NSw0Ljk1bC04LjQxLDAuNjVsLTMuMSw3Ljk1bC02LjYtMC4xM2wtMi4wNy0wLjM5bC0zLjgxLDMuN2wtMS44OC0wLjE4bC02LjQ3LTE0Ljk5bDEuNzktMi42OGwwLjYzLTEwLjZsLTEuNi02LjMxTDI1OC43MSwzNzIuNzlMMjU4LjcxLDM3Mi43OXpcIixcIm5hbWVcIjpcIkJvbGl2aWFcIn0sXCJweVwiOntcInBhdGhcIjpcIk0yOTEuNzYsMzk5LjUxbDIuMiwyLjRsLTAuMjYsNS4wOGw2LjM0LTAuMzlsNC43OSw2LjEzbC0wLjM5LDUuNDdsLTMuMSw0LjY5bC02LjM0LDAuMjZsLTAuMjYtMi42MWwxLjgxLTQuM2wtNi4yMS0zLjkxaC01LjE3bC0zLjg4LTQuMTdsMi44Mi04LjA2TDI5MS43NiwzOTkuNTFMMjkxLjc2LDM5OS41MXpcIixcIm5hbWVcIjpcIlBhcmFndWF5XCJ9LFwidXlcIjp7XCJwYXRoXCI6XCJNMzAwLjM2LDQzMS45M2wtMi4wNSwyLjE5bDAuODUsMTEuNzhsNi40NCwxLjg3bDguMTktOC4yMUwzMDAuMzYsNDMxLjkzTDMwMC4zNiw0MzEuOTN6XCIsXCJuYW1lXCI6XCJVcnVndWF5XCJ9LFwiYXJcIjp7XCJwYXRoXCI6XCJNMzA1LjQ3LDQxOC4ybDEuOTQsMS44MmwtNy4zNywxMC45NWwtMi41OSwyLjg3bDAuOSwxMi41MWw1LjY5LDYuOTFsLTQuNzgsOC4zNGwtMy42MiwxLjU2aC00LjE0bDEuMTYsNi41MWwtNi40NywyLjIybDEuNTUsNS40N2wtMy44OCwxMi4zOGw0Ljc5LDMuOTFsLTIuNTksNi4zOGwtNC40LDYuOTFsMi4zMyw0LjgybC01LjY5LDAuOTFsLTQuNjYtNS43M2wtMC43OC0xNy44NWwtNy4yNC0zMC4zMmwyLjE5LTEwLjZsLTQuNjYtMTMuNTVsMy4xLTE3LjU5bDIuODUtMy4zOWwtMC43LTIuNTdsMy42Ni0zLjM0bDguMTYsMC41Nmw0LjU2LDQuODdsNS4yNywwLjA5bDUuNCwzLjNsLTEuNTksMy43MmwwLjM4LDMuNzZsNy42NS0wLjM2TDMwNS40Nyw0MTguMkwzMDUuNDcsNDE4LjJNMjg4LjkyLDUxOC43OWwwLjI2LDUuNzNsNC40LTAuMzlsMy43NS0yLjQ4bC02LjM0LTEuM0wyODguOTIsNTE4Ljc5TDI4OC45Miw1MTguNzl6XCIsXCJuYW1lXCI6XCJBcmdlbnRpbmFcIn0sXCJjbFwiOntcInBhdGhcIjpcIk0yODUuMDQsNTE0LjFsLTQuMjcsOS4zOGw3LjM3LDAuNzhsMC4xMy02LjI1TDI4NS4wNCw1MTQuMUwyODUuMDQsNTE0LjFNMjgzLjU5LDUxMi42M2wtMy4yMSwzLjU1bC0wLjM5LDQuMTdsLTYuMjEtMy41MmwtNi42LTkuNTFsLTEuOTQtMy4zOWwyLjcyLTMuNTJsLTAuMjYtNC40M2wtMy4xLTEuM2wtMi40Ni0xLjgybDAuNTItMi40OGwzLjIzLTAuOTFsMC42NS0xNC4zM2wtNS4wNC0yLjg3bC0zLjI5LTc0LjU5bDAuODUtMS40OGw2LjQ0LDE0Ljg1bDIuMDYsMC4wNGwwLjY3LDIuMzdsLTIuNzQsMy4zMmwtMy4xNSwxNy44N2w0LjQ4LDEzLjc2bC0yLjA3LDEwLjQybDcuMywzMC42NGwwLjc3LDE3LjkybDUuMjMsNi4wNUwyODMuNTksNTEyLjYzTDI4My41OSw1MTIuNjNNMjYyLjI4LDQ3NS4xNGwtMS4yOSwxLjk1bDAuNjUsMy4zOWwxLjI5LDAuMTNsMC42NS00LjNMMjYyLjI4LDQ3NS4xNEwyNjIuMjgsNDc1LjE0elwiLFwibmFtZVwiOlwiQ2hpbGVcIn0sXCJiclwiOntcInBhdGhcIjpcIk0zMTQuMjQsNDM4Ljg1bDYuMjUtMTIuMDJsMC4yMy0xMC4xbDExLjY2LTcuNTJoNi41M2w1LjEzLTguNjlsMC45My0xNi42OGwtMi4xLTQuNDZsMTIuMzYtMTEuMjhsMC40Ny0xMi40NWwtMTYuNzktOC4yMmwtMjAuMjgtNi4zNGwtOS41Ni0wLjk0bDIuNTctNS40bC0wLjctOC4yMmwtMi4wOS0wLjY5bC0zLjA5LDYuMTRsLTEuNjIsMi4wM2wtNC4xNi0xLjg0bC0xMy45OSw0LjkzbC00LjY2LTUuODdsMC43NS02LjEzbC00LjQsNC40OGwtNC44Ni0yLjYybC0wLjQ5LDAuNjlsMC4wMSwyLjEzbDQuMTksMi4yNWwtNi4yOSw2LjYzbC0zLjk3LTAuMDRsLTQuMDItNC4wOWwtNC41NSwwLjE0bC0wLjU2LDQuODZsMi42MSwzLjE3bC0zLjA4LDkuODdsLTMuNiwwLjI4bC01LjczLDMuNjJsLTEuNCw3LjExbDQuOTcsNS4zMmwwLjkxLTEuMDNsMy40OS0wLjk0bDIuOTgsNS4wMmw4LjUzLTMuNjZsMy4zMSwwLjE5bDIuMjgsOC4wN2wxMi4xNywzLjg2bDIuMSw2LjQ0bDUuMTgsMC42MmwyLjQ3LDYuMTVsLTEuNjcsNS40N2wyLjE4LDIuODZsLTAuMzIsNC4yNmw1Ljg0LTAuNTVsNS4zNSw2Ljc2bC0wLjQyLDQuNzVsMy4xNywyLjY4bC03LjYsMTEuNTFMMzE0LjI0LDQzOC44NUwzMTQuMjQsNDM4Ljg1elwiLFwibmFtZVwiOlwiQnJhemlsXCJ9LFwiYnpcIjp7XCJwYXRoXCI6XCJNMjA0LjU2LDI4Mi40bC0wLjA1LDMuNjVoMC44NGwyLjg2LTUuMzRoLTEuOTRMMjA0LjU2LDI4Mi40TDIwNC41NiwyODIuNHpcIixcIm5hbWVcIjpcIkJlbGl6ZVwifSxcIm1uXCI6e1wicGF0aFwiOlwiTTY3My44LDE3MC4xN2w1LjgyLTcuNzJsNi45OSwzLjIzbDQuNzUsMS4yN2w1LjgyLTUuMzRsLTMuOTUtMi45MWwyLjYtMy42N2w3Ljc2LDIuNzRsMi42OSw0LjQxbDQuODYsMC4xM2wyLjU0LTEuODlsNS4yMy0wLjIxbDEuMTQsMS45NGw4LjY5LDAuNDRsNS41LTUuNjFsNy42MSwwLjhsLTAuNDQsNy42NGwzLjMzLDAuNzZsNC4wOS0xLjg2bDQuMzMsMi4xNGwtMC4xLDEuMDhsLTMuMTQsMC4wOWwtMy4yNyw2Ljg2bC0yLjU0LDAuMjVsLTkuODgsMTIuOTFsLTEwLjA5LDQuNDVsLTYuMzEsMC40OWwtNS4yNC0zLjM4bC02LjcsMy41OGwtNi42LTIuMDVsLTEuODctNC43OWwtMTIuNS0wLjg4bC02LjQtMTAuODVsLTMuMTEtMC4yTDY3My44LDE3MC4xN0w2NzMuOCwxNzAuMTd6XCIsXCJuYW1lXCI6XCJNb25nb2xpYVwifSxcImtwXCI6e1wicGF0aFwiOlwiTTc3OC4yOCwxOTQuMjdsMS44NCwwLjc3bDAuNTYsNi40NGwzLjY1LDAuMjFsMy40NC00LjAzbC0xLjE5LTEuMDZsMC4xNC00LjMybDMuMTYtMy44MmwtMS42MS0yLjlsMS4wNS0xLjJsMC41OC0zbC0xLjgzLTAuODNsLTEuNTYsMC43OWwtMS45Myw1Ljg2bC0zLjEyLTAuMjdsLTMuNjEsNC4yNkw3NzguMjgsMTk0LjI3TDc3OC4yOCwxOTQuMjd6XCIsXCJuYW1lXCI6XCJOb3J0aCBLb3JlYVwifSxcImtyXCI6e1wicGF0aFwiOlwiTTc4OC4zNCwxOTguMmw2LjE4LDUuMDRsMS4wNSw0Ljg4bC0wLjIxLDIuNjJsLTMuMDIsMy40bC0yLjYsMC4xNGwtMi45NS02LjM3bC0xLjEyLTMuMDRsMS4xOS0wLjkybC0wLjI4LTEuMjdsLTEuNDctMC42Nkw3ODguMzQsMTk4LjJMNzg4LjM0LDE5OC4yelwiLFwibmFtZVwiOlwiU291dGggS29yZWFcIn0sXCJrelwiOntcInBhdGhcIjpcIk01NzYuNjksMTg4LjYybDQuMS0xLjc1bDQuNTgtMC4xNmwwLjMyLDdoLTIuNjhsLTIuMDUsMy4zNGwyLjY4LDQuNDVsMy45NSwyLjIzbDAuMzYsMi41NWwxLjQ1LTAuNDhsMS4zNC0xLjU5bDIuMjEsMC40OGwxLjExLDIuMjNoMi44NHYtMi44NmwtMS43NC01LjA5bC0wLjc5LTQuMTNsNS4wNS0yLjIzbDYuNzksMS4xMWw0LjI2LDQuMjlsOS42My0wLjk1bDUuMzcsNy42M2w2LjMxLDAuMzJsMS43NC0yLjg2bDIuMjEtMC40OGwwLjMyLTMuMThsMy4zMS0wLjE2bDEuNzQsMi4wN2wxLjc0LTQuMTNsMTQuOTksMi4wN2wyLjUyLTMuMzRsLTQuMjYtNS4yNWw1LjY4LTEyLjRsNC41OCwwLjMybDMuMTYtNy42M2wtNi4zMS0wLjY0bC0zLjYzLTMuNWwtMTAsMS4xNmwtMTIuODgtMTIuNDVsLTQuNTQsNC4wM2wtMTMuNzctNi4yNWwtMTYuODksOC4yN2wtMC40Nyw1Ljg4bDMuOTUsNC42MWwtNy43LDQuMzVsLTkuOTktMC4yMmwtMi4wOS0zLjA3bC03LjgzLTAuNDNsLTcuNDIsNC43N2wtMC4xNiw2LjUyTDU3Ni42OSwxODguNjJMNTc2LjY5LDE4OC42MnpcIixcIm5hbWVcIjpcIkthemFraHN0YW5cIn0sXCJ0bVwiOntcInBhdGhcIjpcIk01OTMuODUsMjA3LjU5bC0wLjYyLDIuNjNoLTQuMTV2My41Nmw0LjQ2LDIuOTRsLTEuMzgsNC4wM3YxLjg2bDEuODUsMC4zMWwyLjQ2LTMuMjVsNS41NC0xLjI0bDExLjg0LDQuNDlsMC4xNSwzLjI1bDYuNjEsMC42Mmw3LjM4LTcuNzVsLTAuOTItMi40OGwtNC45Mi0xLjA4bC0xMy44NC04Ljk5bC0wLjYyLTMuMjVoLTUuMjNsLTIuMzEsNC4zNGgtMi4zMUw1OTMuODUsMjA3LjU5TDU5My44NSwyMDcuNTl6XCIsXCJuYW1lXCI6XCJUdXJrbWVuaXN0YW5cIn0sXCJ1elwiOntcInBhdGhcIjpcIk02MjguOTIsMjE5LjA2bDMuMDgsMC4xNnYtNS4yN2wtMi45Mi0xLjdsNC45Mi02LjJoMmwyLDIuMzNsNS4yMy0yLjAxbC03LjIzLTIuNDhsLTAuMjgtMS41bC0xLjcyLDAuNDJsLTEuNjksMi45NGwtNy4yOS0wLjI0bC01LjM1LTcuNTdsLTkuNCwwLjkzbC00LjQ4LTQuNDRsLTYuMi0xLjA1bC00LjUsMS44M2wyLjYxLDguNjhsMC4wMywyLjkybDEuOSwwLjA0bDIuMzMtNC40NGw2LjIsMC4wOGwwLjkyLDMuNDFsMTMuMjksOC44Mmw1LjE0LDEuMThMNjI4LjkyLDIxOS4wNkw2MjguOTIsMjE5LjA2elwiLFwibmFtZVwiOlwiVXpiZWtpc3RhblwifSxcInRqXCI6e1wicGF0aFwiOlwiTTYzMC4xOSwyMTEuODRsNC4xMS01LjFoMS41NWwwLjU0LDEuMTRsLTEuOSwxLjM4djEuMTRsMS4yNSwwLjlsNi4wMSwwLjM2bDEuOTYtMC44NGwwLjg5LDAuMThsMC42LDEuOTJsMy41NywwLjM2bDEuNzksMy43OGwtMC41NCwxLjE0bC0wLjcxLDAuMDZsLTAuNzEtMS40NGwtMS41NS0wLjEybC0yLjY4LDAuMzZsLTAuMTgsMi41MmwtMi42OC0wLjE4bDAuMTItMy4xOGwtMS45Ni0xLjkybC0yLjk4LDIuNDZsMC4wNiwxLjYybC0yLjYyLDAuOWgtMS41NWwwLjEyLTUuNThMNjMwLjE5LDIxMS44NEw2MzAuMTksMjExLjg0elwiLFwibmFtZVwiOlwiVGFqaWtpc3RhblwifSxcImtnXCI6e1wicGF0aFwiOlwiTTYzNi44MSwxOTkuMjFsLTAuMzEsMi41M2wwLjI1LDEuNTZsOC43LDIuOTJsLTcuNjQsMy4wOGwtMC44Ny0wLjcybC0xLjY1LDEuMDZsMC4wOCwwLjU4bDAuODgsMC40bDUuMzYsMC4xNGwyLjcyLTAuODJsMy40OS00LjRsNC4zNywwLjc2bDUuMjctNy4zbC0xNC4xLTEuOTJsLTEuOTUsNC43M2wtMi40Ni0yLjY0TDYzNi44MSwxOTkuMjFMNjM2LjgxLDE5OS4yMXpcIixcIm5hbWVcIjpcIkt5cmd5eiBSZXB1YmxpY1wifSxcImFmXCI6e1wicGF0aFwiOlwiTTYxNC4xMiwyMjcuMDVsMS41OSwxMi40NmwzLjk2LDAuODdsMC4zNywyLjI0bC0yLjg0LDIuMzdsNS4yOSw0LjI3bDEwLjI4LTMuN2wwLjgyLTQuMzhsNi40Ny00LjA0bDIuNDgtOS4zNmwxLjg1LTEuOTlsLTEuOTItMy4zNGw2LjI2LTMuODdsLTAuOC0xLjEybC0yLjg5LDAuMThsLTAuMjYsMi42NmwtMy44OC0wLjA0bC0wLjA3LTMuNTVsLTEuMjUtMS40OWwtMi4xLDEuOTFsMC4wNiwxLjc1bC0zLjE3LDEuMmwtNS44NS0wLjM3bC03LjYsNy45Nkw2MTQuMTIsMjI3LjA1TDYxNC4xMiwyMjcuMDV6XCIsXCJuYW1lXCI6XCJBZmdoYW5pc3RhblwifSxcInBrXCI6e1wicGF0aFwiOlwiTTYyMy4xMywyNDkuODRsMi42LDMuODZsLTAuMjUsMS45OWwtMy40NiwxLjM3bC0wLjI1LDMuMjRoMy45NmwxLjM2LTEuMTJoNy41NGw2LjgsNS45OGwwLjg3LTIuODdoNS4wN2wwLjEyLTMuNjFsLTUuMTktNC45OGwxLjExLTIuNzRsNS4zMi0wLjM3bDcuMTctMTQuOTVsLTMuOTYtMy4xMWwtMS40OC01LjIzbDkuNjQtMC44N2wtNS42OS04LjFsLTMuMDMtMC44MmwtMS4yNCwxLjVsLTAuOTMsMC4wN2wtNS42OSwzLjYxbDEuODYsMy4xMmwtMi4xLDIuMjRsLTIuNiw5LjU5bC02LjQzLDQuMTFsLTAuODcsNC40OUw2MjMuMTMsMjQ5Ljg0TDYyMy4xMywyNDkuODR6XCIsXCJuYW1lXCI6XCJQYWtpc3RhblwifSxcImluXCI6e1wicGF0aFwiOlwiTTY3MC45OCwzMTMuMDFsNC41OC0yLjI0bDIuNzItOS44NGwtMC4xMi0xMi4wOGwxNS41OC0xNi44MnYtMy45OWwzLjIxLTEuMjVsLTAuMTItNC42MWwtMy40Ni02LjczbDEuOTgtMy42MWw0LjMzLDMuOTlsNS41NiwwLjI1djIuMjRsLTEuNzMsMS44N2wwLjM3LDFsMi45NywwLjEybDAuNjIsMy4zNmgwLjg3bDIuMjMtMy45OWwxLjExLTEwLjQ2bDMuNzEtMi42MmwwLjEyLTMuNjFsLTEuNDgtMi44N2wtMi4zNS0wLjEybC05LjIsNi4wOGwwLjU4LDMuOTFsLTYuNDYtMC4wMmwtMi4yOC0yLjc5bC0xLjI0LDAuMTZsMC40MiwzLjg4bC0xMy45Ny0xbC04LjY2LTMuODZsLTAuNDYtNC43NWwtNS43Ny0zLjU4bC0wLjA3LTcuMzdsLTMuOTYtNC41M2wtOS4xLDAuODdsMC45OSwzLjk2bDQuNDYsMy42MWwtNy43MSwxNS43OGwtNS4xNiwwLjM5bC0wLjg1LDEuOWw1LjA4LDQuN2wtMC4yNSw0Ljc1bC01LjE5LTAuMDhsLTAuNTYsMi4zNmw0LjMxLTAuMTlsMC4xMiwxLjg3bC0zLjA5LDEuNjJsMS45OCwzLjc0bDMuODMsMS4yNWwyLjM1LTEuNzRsMS4xMS0zLjExbDEuMzYtMC42MmwxLjYxLDEuNjJsLTAuNDksMy45OWwtMS4xMSwxLjg3bDAuMjUsMy4yNEw2NzAuOTgsMzEzLjAxTDY3MC45OCwzMTMuMDF6XCIsXCJuYW1lXCI6XCJJbmRpYVwifSxcIm5wXCI6e1wicGF0aFwiOlwiTTY3MS4xOSwyNDIuNTZsMC40Niw0LjI3bDguMDgsMy42NmwxMi45NSwwLjk2bC0wLjQ5LTMuMTNsLTguNjUtMi4zOGwtNy4zNC00LjM3TDY3MS4xOSwyNDIuNTZMNjcxLjE5LDI0Mi41NnpcIixcIm5hbWVcIjpcIk5lcGFsXCJ9LFwiYnRcIjp7XCJwYXRoXCI6XCJNNjk1LjQsMjQ4LjA4bDEuNTUsMi4xMmw1LjI0LDAuMDRsLTAuNTMtMi45TDY5NS40LDI0OC4wOEw2OTUuNCwyNDguMDh6XCIsXCJuYW1lXCI6XCJCaHV0YW5cIn0sXCJiZFwiOntcInBhdGhcIjpcIk02OTUuNTcsMjUzLjExbC0xLjMxLDIuMzdsMy40LDYuNDZsMC4xLDUuMDRsMC42MiwxLjM1bDMuOTksMC4wN2wyLjI2LTIuMTdsMS42NCwwLjk5bDAuMzMsMy4wN2wxLjMxLTAuODJsMC4wOC0zLjkybC0xLjEtMC4xM2wtMC42OS0zLjMzbC0yLjc4LTAuMWwtMC42OS0xLjg1bDEuNy0yLjI3bDAuMDMtMS4xMmgtNC45NEw2OTUuNTcsMjUzLjExTDY5NS41NywyNTMuMTF6XCIsXCJuYW1lXCI6XCJCYW5nbGFkZXNoXCJ9LFwibW1cIjp7XCJwYXRoXCI6XCJNNzI5LjQ0LDMwMy42NWwtMi43Ny00LjQ0bDIuMDEtMi44MmwtMS45LTMuNDlsLTEuNzktMC4zNGwtMC4zNC01Ljg2bC0yLjY4LTUuMTlsLTAuNzgsMS4yNGwtMS43OSwzLjA0bC0yLjI0LDAuMzRsLTEuMTItMS40N2wtMC41Ni0zLjk1bC0xLjY4LTMuMTZsLTYuODQtNi40NWwxLjY4LTEuMTFsMC4zMS00LjY3bDIuNS00LjJsMS4wOC0xMC40NWwzLjYyLTIuNDdsMC4xMi0zLjgxbDIuMTcsMC43MmwzLjQyLDQuOTVsLTIuNTQsNS40NGwxLjcxLDQuMjdsNC4yMywxLjY2bDAuNzcsNC42NWw1LjY4LDAuODhsLTEuNTcsMi43MWwtNy4xNiwyLjgybC0wLjc4LDQuNjJsNS4yNiw2Ljc2bDAuMjIsMy42MWwtMS4yMywxLjI0bDAuMTEsMS4xM2wzLjkyLDUuNzVsMC4xMSw1Ljk3TDcyOS40NCwzMDMuNjVMNzI5LjQ0LDMwMy42NXpcIixcIm5hbWVcIjpcIk15YW5tYXJcIn0sXCJ0aFwiOntcInBhdGhcIjpcIk03MzAuMDMsMjcwLjQ3bDMuMjQsNC4xN3Y1LjA3bDEuMTIsMC41Nmw1LjE1LTIuNDhsMS4wMSwwLjM0bDYuMTUsNy4xbC0wLjIyLDQuODVsLTIuMDEtMC4zNGwtMS43OS0xLjEzbC0xLjM0LDAuMTFsLTIuMzUsMy45NGwwLjQ1LDIuMTRsMS45LDEuMDFsLTAuMTEsMi4zN2wtMS4zNCwwLjY4bC00LjU5LTMuMTZ2LTIuODJsLTEuOS0wLjExbC0wLjc4LDEuMjRsLTAuNCwxMi42MmwyLjk3LDUuNDJsNS4yNiw1LjA3bC0wLjIyLDEuNDdsLTIuOC0wLjExbC0yLjU3LTMuODNoLTIuNjlsLTMuMzYtMi43MWwtMS4wMS0yLjgybDEuNDUtMi4zN2wwLjUtMi4xNGwxLjU4LTIuOGwtMC4wNy02LjQ0bC0zLjg2LTUuNThsLTAuMTYtMC42OGwxLjI1LTEuMjZsLTAuMjktNC40M2wtNS4xNC02LjUxbDAuNi0zLjc1TDczMC4wMywyNzAuNDdMNzMwLjAzLDI3MC40N3pcIixcIm5hbWVcIjpcIlRoYWlsYW5kXCJ9LFwia2hcIjp7XCJwYXRoXCI6XCJNNzQwLjQ4LDI5OS40N2w0LjA5LDQuMzdsNy42MS01LjY0bDAuNjctOC45bC0zLjkzLDIuNzFsLTIuMDQtMS4xNGwtMi43Ny0wLjM3bC0xLjU1LTEuMDlsLTAuNzUsMC4wNGwtMi4wMywzLjMzbDAuMzMsMS41NGwyLjA2LDEuMTVsLTAuMjUsMy4xM0w3NDAuNDgsMjk5LjQ3TDc0MC40OCwyOTkuNDd6XCIsXCJuYW1lXCI6XCJDYW1ib2RpYVwifSxcImxhXCI6e1wicGF0aFwiOlwiTTczNS40NywyNjIuOTNsLTIuNDIsMS4yM2wtMi4wMSw1Ljg2bDMuMzYsNC4yOGwtMC41Niw0LjczbDAuNTYsMC4yM2w1LjU5LTIuNzFsNy41LDguMzhsLTAuMTgsNS4yOGwxLjYzLDAuODhsNC4wMy0zLjI3bC0wLjMzLTIuNTlsLTExLjYzLTExLjA1bDAuMTEtMS42OWwxLjQ1LTEuMDFsLTEuMDEtMi44MmwtNC44MS0wLjc5TDczNS40NywyNjIuOTNMNzM1LjQ3LDI2Mi45M3pcIixcIm5hbWVcIjpcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljXCJ9LFwidm5cIjp7XCJwYXRoXCI6XCJNNzQ1LjA2LDMwNC40NWwxLjE5LDEuODdsMC4yMiwyLjE0bDMuMTMsMC4zNGwzLjgtNS4wN2wzLjU4LTEuMDFsMS45LTUuMThsLTAuODktOC4zNGwtMy42OS01LjA3bC0zLjg5LTMuMTFsLTQuOTUtOC41bDMuNTUtNS45NGwtNS4wOC01LjgzbC00LjA3LTAuMThsLTMuNjYsMS45N2wxLjA5LDQuNzFsNC44OCwwLjg2bDEuMzEsMy42M2wtMS43MiwxLjEybDAuMTEsMC45bDExLjQ1LDExLjJsMC40NSwzLjI5bC0wLjY5LDEwLjRMNzQ1LjA2LDMwNC40NUw3NDUuMDYsMzA0LjQ1elwiLFwibmFtZVwiOlwiVmlldG5hbVwifSxcImdlXCI6e1wicGF0aFwiOlwiTTU1NS40NiwyMDQuMTZsMy4yNyw0LjI3bDQuMDgsMS44OGwyLjUxLTAuMDFsNC4zMS0xLjE3bDEuMDgtMS42OWwtMTIuNzUtNC43N0w1NTUuNDYsMjA0LjE2TDU1NS40NiwyMDQuMTZ6XCIsXCJuYW1lXCI6XCJHZW9yZ2lhXCJ9LFwiYW1cIjp7XCJwYXRoXCI6XCJNNTY5LjcyLDIwOS44OWw0LjgsNi4yNmwtMS40MSwxLjY1bC0zLjQtMC41OWwtNC4yMi0zLjc4bDAuMjMtMi40OEw1NjkuNzIsMjA5Ljg5TDU2OS43MiwyMDkuODl6XCIsXCJuYW1lXCI6XCJBcm1lbmlhXCJ9LFwiYXpcIjp7XCJwYXRoXCI6XCJNNTcxLjQxLDIwNy43MmwtMS4wMSwxLjcybDQuNzEsNi4xOGwxLjY0LTAuNTNsMi43LDIuODNsMS4xNy00Ljk2bDIuOTMsMC40N2wtMC4xMi0xLjQybC00LjgyLTQuMjJsLTAuOTIsMi40OEw1NzEuNDEsMjA3LjcyTDU3MS40MSwyMDcuNzJ6XCIsXCJuYW1lXCI6XCJBemVyYmFpamFuXCJ9LFwiaXJcIjp7XCJwYXRoXCI6XCJNNTY5LjY1LDIxNy45NWwtMS4yMiwxLjI3bDAuMTIsMi4wMWwxLjUyLDIuMTNsNS4zOSw1LjlsLTAuODIsMi4zNmgtMC45NGwtMC40NywyLjM2bDMuMDUsMy45bDIuODEsMC4yNGw1LjYzLDcuNzlsMy4xNiwwLjI0bDIuNDYsMS43N2wwLjEyLDMuNTRsOS43Myw1LjY3aDMuNjNsMi4yMy0xLjg5bDIuODEtMC4xMmwxLjY0LDMuNzhsMTAuNTEsMS40NmwwLjMxLTMuODZsMy40OC0xLjI2bDAuMTYtMS4zOGwtMi43Ny0zLjc4bC02LjE3LTQuOTZsMy4yNC0yLjk1bC0wLjIzLTEuM2wtNC4wNi0wLjYzbC0xLjcyLTEzLjdsLTAuMi0zLjE1bC0xMS4wMS00LjIxbC00Ljg4LDEuMWwtMi43MywzLjM1bC0yLjQyLTAuMTZsLTAuNywwLjU5bC01LjM5LTAuMzVsLTYuOC00Ljk2bC0yLjUzLTIuNzdsLTEuMTYsMC4yOGwtMi4wOSwyLjM5TDU2OS42NSwyMTcuOTVMNTY5LjY1LDIxNy45NXpcIixcIm5hbWVcIjpcIklyYW5cIn0sXCJ0clwiOntcInBhdGhcIjpcIk01NTguNywyMDkuMTlsLTIuMjMsMi4zNmwtOC4yLTAuMjRsLTQuOTItMi45NWwtNC44LTAuMTJsLTUuNTEsMy45bC01LjE2LDAuMjRsLTAuNDcsMi45NWgtNS44NmwtMi4zNCwyLjEzdjEuMThsMS40MSwxLjE4djEuM2wtMC41OSwxLjU0bDAuNTksMS4zbDEuODgtMC45NGwxLjg4LDIuMDFsLTAuNDcsMS40MmwtMC43LDAuOTVsMS4wNSwxLjE4bDUuMTYsMS4wNmwzLjYzLTEuNTR2LTIuMjRsMS43NiwwLjM1bDQuMjIsMi40OGw0LjU3LTAuNzFsMS45OS0xLjg5bDEuMjksMC40N3YyLjEzaDEuNzZsMS41Mi0yLjk1bDEzLjM2LTEuNDJsNS44My0wLjcxbC0xLjU0LTIuMDJsLTAuMDMtMi43M2wxLjE3LTEuNGwtNC4yNi0zLjQybDAuMjMtMi45NWgtMi4zNEw1NTguNywyMDkuMTlMNTU4LjcsMjA5LjE5TTUyMy4wMiwyMDkuN2wtMC4xNiwzLjU1bDMuMS0wLjk1bDEuNDItMC45NWwtMC40Mi0xLjU0bC0xLjQ3LTEuMTdMNTIzLjAyLDIwOS43TDUyMy4wMiwyMDkuN3pcIixcIm5hbWVcIjpcIlR1cmtleVwifSxcIm9tXCI6e1wicGF0aFwiOlwiTTU5OC4zOCwyODAuODRsNy4zOS00LjI2bDEuMzEtNi4yNWwtMS42Mi0wLjkzbDAuNjctNi43bDEuNDEtMC44MmwxLjUxLDIuMzdsOC45OSw0Ljd2Mi42MWwtMTAuODksMTYuMDNsLTUuMDEsMC4xN0w1OTguMzgsMjgwLjg0TDU5OC4zOCwyODAuODR6XCIsXCJuYW1lXCI6XCJPbWFuXCJ9LFwiYWVcIjp7XCJwYXRoXCI6XCJNNTk0LjAxLDI2NC45NGwwLjg3LDMuNDhsOS44NiwwLjg3bDAuNjktNy4xNGwxLjktMS4wNGwwLjUyLTIuNjFsLTMuMTEsMC44N2wtMy40Niw1LjIzTDU5NC4wMSwyNjQuOTRMNTk0LjAxLDI2NC45NHpcIixcIm5hbWVcIjpcIlVuaXRlZCBBcmFiIEVtaXJhdGVzXCJ9LFwicWFcIjp7XCJwYXRoXCI6XCJNNTkyLjYzLDI1OS4wMmwtMC41Miw0LjAxbDEuNTQsMS4xN2wxLjQtMC4xM2wwLjUyLTUuMDVsLTEuMjEtMC44N0w1OTIuNjMsMjU5LjAyTDU5Mi42MywyNTkuMDJ6XCIsXCJuYW1lXCI6XCJRYXRhclwifSxcImt3XCI6e1wicGF0aFwiOlwiTTU4My4yOSwyNDcuMTdsLTIuMjUtMS4yMmwtMS41NiwxLjU3bDAuMTcsMy4xNGwzLjYzLDEuMzlMNTgzLjI5LDI0Ny4xN0w1ODMuMjksMjQ3LjE3elwiLFwibmFtZVwiOlwiS3V3YWl0XCJ9LFwic2FcIjp7XCJwYXRoXCI6XCJNNTg0LDI1My4yNGw3LjAxLDkuNzdsMi4yNiwxLjhsMS4wMSw0LjM4bDEwLjc5LDAuODVsMS4yMiwwLjY0bC0xLjIxLDUuNGwtNy4wOSw0LjE4bC0xMC4zNywzLjE0bC01LjUzLDUuNGwtNi41Ny0zLjgzbC0zLjk4LDMuNDhMNTY2LDI3OS40bC0zLjgtMS43NGwtMS4zOC0yLjA5di00LjUzbC0xMy44My0xNi43MmwtMC41Mi0yLjk2aDMuOThsNC44NC00LjE4bDAuMTctMi4wOWwtMS4zOC0xLjM5bDIuNzctMi4yNmw1Ljg4LDAuMzVsMTAuMDMsOC4zNmw1LjkyLTAuMjdsMC4zOCwxLjQ2TDU4NCwyNTMuMjRMNTg0LDI1My4yNHpcIixcIm5hbWVcIjpcIlNhdWRpIEFyYWJpYVwifSxcInN5XCI6e1wicGF0aFwiOlwiTTU0Ni42NywyMjkuMTNsLTAuMzUsMi41NGwyLjgyLDEuMThsLTAuMTIsNy4wNGwyLjgyLTAuMDZsMi44Mi0yLjEzbDEuMDYtMC4xOGw2LjQtNS4wOWwxLjI5LTcuMzlsLTEyLjc5LDEuM2wtMS4zNSwyLjk2TDU0Ni42NywyMjkuMTNMNTQ2LjY3LDIyOS4xM3pcIixcIm5hbWVcIjpcIlN5cmlhbiBBcmFiIFJlcHVibGljXCJ9LFwiaXFcIjp7XCJwYXRoXCI6XCJNNTY0LjMxLDIyNS4wM2wtMS41Niw3LjcxbC02LjQ2LDUuMzhsMC40MSwyLjU0bDYuMzEsMC40M2wxMC4wNSw4LjE4bDUuNjItMC4xNmwwLjE1LTEuODlsMi4wNi0yLjIxbDIuODgsMS42M2wwLjM4LTAuMzZsLTUuNTctNy40MWwtMi42NC0wLjE2bC0zLjUxLTQuNTFsMC43LTMuMzJsMS4wNy0wLjE0bDAuMzctMS40N2wtNC43OC01LjAzTDU2NC4zMSwyMjUuMDNMNTY0LjMxLDIyNS4wM3pcIixcIm5hbWVcIjpcIklyYXFcIn0sXCJqb1wiOntcInBhdGhcIjpcIk01NDguOSwyNDAuNzhsLTIuNDYsOC41OGwtMC4xMSwxLjMxaDMuODdsNC4zMy0zLjgybDAuMTEtMS40NWwtMS43Ny0xLjgxbDMuMTctMi42M2wtMC40Ni0yLjQ0bC0wLjg3LDAuMmwtMi42NCwxLjg5TDU0OC45LDI0MC43OEw1NDguOSwyNDAuNzh6XCIsXCJuYW1lXCI6XCJKb3JkYW5cIn0sXCJsYlwiOntcInBhdGhcIjpcIk01NDYuMiwyMzIuNDRsMC4wNiwxLjk1bC0wLjgyLDIuOTZsMi44MiwwLjI0bDAuMTgtNC4yTDU0Ni4yLDIzMi40NEw1NDYuMiwyMzIuNDR6XCIsXCJuYW1lXCI6XCJMZWJhbm9uXCJ9LFwiaWxcIjp7XCJwYXRoXCI6XCJNNTQ1LjMyLDIzOC4wNmwtMS41OCw1LjAzbDIuMDUsNi4wM2wyLjM1LTguODF2LTEuODlMNTQ1LjMyLDIzOC4wNkw1NDUuMzIsMjM4LjA2elwiLFwibmFtZVwiOlwiSXNyYWVsXCJ9LFwiY3lcIjp7XCJwYXRoXCI6XCJNNTQzLjIxLDIyOS44NGwxLjIzLDAuODlsLTMuODEsMy42MWwtMS44Mi0wLjA2bC0xLjM1LTAuOTVsMC4xOC0xLjc3bDIuNzYtMC4xOEw1NDMuMjEsMjI5Ljg0TDU0My4yMSwyMjkuODR6XCIsXCJuYW1lXCI6XCJDeXBydXNcIn0sXCJnYlwiOntcInBhdGhcIjpcIk00NDYuMTIsMTQ5LjA4bC0xLjgzLDIuNzdsMC43MywxLjExaDQuMjJ2MS44NWwtMS4xLDEuNDhsMC43MywzLjg4bDIuMzgsNC42MmwxLjgzLDQuMjVsMi45MywxLjExbDEuMjgsMi4yMmwtMC4xOCwyLjAzbC0xLjgzLDEuMTFsLTAuMTgsMC45MmwxLjI4LDAuNzRsLTEuMSwxLjQ4bC0yLjU3LDEuMTFsLTQuOTUtMC41NWwtNy43MSwzLjUxbC0yLjU3LTEuMjlsNy4zNC00LjI1bC0wLjkyLTAuNTVsLTMuODUtMC4zN2wyLjM4LTMuNTFsMC4zNy0yLjk2bDMuMTItMC4zN2wtMC41NS01LjczbC0zLjY3LTAuMThsLTEuMS0xLjI5bDAuMTgtNC4yNWwtMi4yLDAuMThsMi4yLTcuMzlsNC4wNC0yLjk2TDQ0Ni4xMiwxNDkuMDhMNDQ2LjEyLDE0OS4wOE00MzguNDIsMTYxLjQ3bC0zLjMsMC4zN2wtMC4xOCwyLjk2bDIuMiwxLjQ4bDIuMzgtMC41NWwwLjkyLTEuNjZMNDM4LjQyLDE2MS40N0w0MzguNDIsMTYxLjQ3elwiLFwibmFtZVwiOlwiVW5pdGVkIEtpbmdkb21cIn0sXCJpZVwiOntcInBhdGhcIjpcIk00MzkuNTEsMTY2LjU1bC0wLjkxLDZsLTguMDcsMi45NmgtMi41N2wtMS44My0xLjI5di0xLjExbDQuMDQtMi41OWwtMS4xLTIuMjJsMC4xOC0zLjE0bDMuNDksMC4xOGwxLjYtMy43NmwtMC4yMSwzLjM0bDIuNzEsMi4xNUw0MzkuNTEsMTY2LjU1TDQzOS41MSwxNjYuNTV6XCIsXCJuYW1lXCI6XCJJcmVsYW5kXCJ9LFwic2VcIjp7XCJwYXRoXCI6XCJNNDk3LjcyLDEwNC41OGwxLjk2LDEuODFoMy42N2wyLjAyLDMuODhsMC41NSw2LjY1bC00Ljk1LDMuNTF2My41MWwtMy40OSw0LjgxbC0yLjAyLDAuMThsLTIuNzUsNC42MmwwLjE4LDQuNDRsNC43NywzLjUxbC0wLjM3LDIuMDNsLTEuODMsMi43N2wtMi43NSwyLjRsMC4xOCw3Ljk1bC00LjIyLDEuNDhsLTEuNDcsMy4xNGgtMi4wMmwtMS4xLTUuNTRsLTQuNTktNy4wNGwzLjc3LTYuMzFsMC4yNi0xNS41OWwyLjYtMS40M2wwLjYzLTguOTJsNy40MS0xMC42MUw0OTcuNzIsMTA0LjU4TDQ5Ny43MiwxMDQuNThNNDk4LjQ5LDE1MC4xN2wtMi4xMSwxLjY3bDEuMDYsMi40NWwxLjg3LTEuODJMNDk4LjQ5LDE1MC4xN0w0OTguNDksMTUwLjE3elwiLFwibmFtZVwiOlwiU3dlZGVuXCJ9LFwiZmlcIjp7XCJwYXRoXCI6XCJNNTA2Ljc5LDExNi45NGwyLjA3LDAuOTFsMS4yOCwyLjRsLTEuMjgsMS42NmwtNi40Miw3LjAybC0xLjEsMy43bDEuNDcsNS4zNmw0Ljk1LDMuN2w2LjYtMy4xNGw1LjMyLTAuNzRsNC45NS03Ljk1bC0zLjY3LTguNjlsLTMuNDktOC4zMmwwLjU1LTUuMzZsLTIuMi0wLjM3bC0wLjU3LTMuOTFsLTIuOTYtNC44M2wtMy4yOCwyLjI3bC0xLjI5LDUuMjdsLTMuNDgtMi4wOWwtNC44NC0xLjE4bC0xLjA4LDEuMjZsMS44NiwxLjY4bDMuMzktMC4wNmwyLjczLDQuNDFMNTA2Ljc5LDExNi45NEw1MDYuNzksMTE2Ljk0elwiLFwibmFtZVwiOlwiRmlubGFuZFwifSxcImx2XCI6e1wicGF0aFwiOlwiTTUxOC4wNywxNTEuMzdsLTYuODUtMS4xMWwwLjE1LDMuODNsNi4zNSwzLjg4bDIuNi0wLjc2bC0wLjE1LTIuOTJMNTE4LjA3LDE1MS4zN0w1MTguMDcsMTUxLjM3elwiLFwibmFtZVwiOlwiTGF0dmlhXCJ9LFwibHRcIjp7XCJwYXRoXCI6XCJNNTEwLjgxLDE1NC43bC0yLjE1LTAuMDVsLTIuOTUsMi44MmgtMi41bDAuMTUsMy41M2wtMS41LDIuNzdsNS40LDAuMDVsMS41NS0wLjJsMS41NSwxLjg3bDMuNTUtMC4xNWwzLjQtNC4zM2wtMC4yLTIuNTdMNTEwLjgxLDE1NC43TDUxMC44MSwxNTQuN3pcIixcIm5hbWVcIjpcIkxpdGh1YW5pYVwifSxcImJ5XCI6e1wicGF0aFwiOlwiTTUxMC42NiwxNjYuMjlsMS41LDIuNDdsLTAuNiwxLjk3bDAuMSwxLjU2bDAuNTUsMS44N2wzLjEtMS43NmwzLjg1LDAuMWwyLjcsMS4xMWg2Ljg1bDItNC43OWwxLjItMS44MXYtMS4yMWwtNC4zLTYuMDVsLTMuOC0xLjUxbC0zLjEtMC4zNWwtMi43LDAuODZsMC4xLDIuNzJsLTMuNzUsNC43NEw1MTAuNjYsMTY2LjI5TDUxMC42NiwxNjYuMjl6XCIsXCJuYW1lXCI6XCJCZWxhcnVzXCJ9LFwicGxcIjp7XCJwYXRoXCI6XCJNNTExLjQ2LDE3NC43NmwwLjg1LDEuNTZsMC4yLDEuNjZsLTAuNywxLjYxbC0xLjYsMy4wOGwtMS4zNSwwLjYxbC0xLjc1LTAuNzZsLTEuMDUsMC4wNWwtMi41NSwwLjk2bC0yLjktMC44NmwtNC43LTMuMzNsLTQuNi0yLjQ3bC0xLjg1LTIuODJsLTAuMzUtNi42NWwzLjYtMy4xM2w0LjctMS41NmwxLjc1LTAuMmwtMC43LDEuNDFsMC40NSwwLjU1bDcuOTEsMC4xNWwxLjctMC4wNWwyLjgsNC4yOWwtMC43LDEuNzZsMC4zLDIuMDdMNTExLjQ2LDE3NC43Nkw1MTEuNDYsMTc0Ljc2elwiLFwibmFtZVwiOlwiUG9sYW5kXCJ9LFwiaXRcIjp7XCJwYXRoXCI6XCJNNDc3LjU2LDIxMy4zOGwtMi42NSwxLjM0bDAuMzUsNS4xN2wyLjEyLDAuMzZsMS41OS0xLjUydi00LjlMNDc3LjU2LDIxMy4zOEw0NzcuNTYsMjEzLjM4TTQ3Mi4yNywxOTYuOThsLTAuNjIsMS41N2wwLjE3LDEuNzFsMi4zOSwyLjc5bDMuNzYtMC4xM2w4LjMsOS42NGw1LjE4LDEuNWwzLjA2LDIuODlsMC43Myw2LjU5bDEuNjQtMC45NmwxLjQyLTMuNTlsLTAuMzUtMi41OGwyLjQzLTAuMjJsMC4zNS0xLjQ2bC02Ljg1LTMuMjhsLTYuNS02LjM5bC0yLjU5LTMuODJsLTAuNjMtMy42M2wzLjMxLTAuNzlsLTAuODUtMi4zOWwtMi4wMy0xLjcxbC0xLjc1LTAuMDhsLTIuNDQsMC42N2wtMi4zLDMuMjJsLTEuMzksMC45MmwtMi4xNS0xLjMyTDQ3Mi4yNywxOTYuOThMNDcyLjI3LDE5Ni45OE00OTIuNDQsMjIzLjAybC0xLjQ1LTAuNzhsLTQuOTUsMC43OGwwLjE3LDEuMzRsNC40NSwyLjI0bDAuNjcsMC43M2wxLjE3LDAuMTdMNDkyLjQ0LDIyMy4wMkw0OTIuNDQsMjIzLjAyelwiLFwibmFtZVwiOlwiSXRhbHlcIn0sXCJmclwiOntcInBhdGhcIjpcIk00NzcuODMsMjA2Ljk2bC0xLjk1LDEuOTZsLTAuMTgsMS43OGwxLjU5LDAuOThsMC42Mi0wLjA5bDAuMzUtMi41OUw0NzcuODMsMjA2Ljk2TDQ3Ny44MywyMDYuOTZNNDYwLjQsMTc4LjdsLTIuMjEsMC41NGwtNC40Miw0LjgxbC0xLjMzLDAuMDlsLTEuNzctMS4yNWwtMS4xNSwwLjI3bC0wLjg4LDIuNzZsLTYuNDYsMC4xOGwwLjE4LDEuNDNsNC40MiwyLjk0bDUuMTMsNC4xbC0wLjA5LDQuOWwtMi43NCw0LjgxbDUuOTMsMi44NWw2LjAyLDAuMThsMS44Ni0yLjE0bDMuOCwwLjA5bDEuMDYsMC45OGwzLjgtMC4yN2wxLjk1LTIuNWwtMi40OC0yLjk0bC0wLjE4LTEuODdsMC41My0yLjA1bC0xLjI0LTEuNzhsLTIuMTIsMC42MmwtMC4yNy0xLjZsNC42OS01LjE3di0zLjEybC0zLjEtMS43OGwtMS41OS0wLjI3TDQ2MC40LDE3OC43TDQ2MC40LDE3OC43elwiLFwibmFtZVwiOlwiRnJhbmNlXCJ9LFwibmxcIjp7XCJwYXRoXCI6XCJNNDcwLjA5LDE2OC4yN2wtNC41MywyLjIzbDAuOTYsMC44N2wwLjEsMi4yM2wtMC45Ni0wLjE5bC0xLjA2LTEuNjVsLTIuNTMsNC4wMWwzLjg5LDAuODFsMS40NSwxLjUzbDAuNzcsMC4wMmwwLjUxLTMuNDZsMi40NS0xLjAzTDQ3MC4wOSwxNjguMjdMNDcwLjA5LDE2OC4yN3pcIixcIm5hbWVcIjpcIk5ldGhlcmxhbmRzXCJ9LFwiYmVcIjp7XCJwYXRoXCI6XCJNNDYxLjYxLDE3Ni41MmwtMC42NCwxLjZsNi44OCw0LjU0bDEuOTgsMC40N2wwLjA3LTIuMTVsLTEuNzMtMS45NGgtMS4wNmwtMS40NS0xLjY1TDQ2MS42MSwxNzYuNTJMNDYxLjYxLDE3Ni41MnpcIixcIm5hbWVcIjpcIkJlbGdpdW1cIn0sXCJkZVwiOntcInBhdGhcIjpcIk00NzEuMTQsMTY3Ljg4bDMuNTctMC41OHYtMi41MmwyLjk5LTAuNDlsMS42NCwxLjY1bDEuNzMsMC4xOWwyLjctMS4xN2wyLjQxLDAuNjhsMi4xMiwxLjg0bDAuMjksNi44OWwyLjEyLDIuODJsLTIuNzksMC4zOWwtNC42MywyLjkxbDAuMzksMC45N2w0LjE0LDMuODhsLTAuMjksMS45NGwtMy44NSwxLjk0bC0zLjU3LDAuMWwtMC44NywxLjg0aC0xLjgzbC0wLjg3LTEuOTRsLTMuMTgtMC43OGwtMC4xLTMuMmwtMi43LTEuODRsMC4yOS0yLjMzbC0xLjgzLTIuNTJsMC40OC0zLjNsMi41LTEuMTdMNDcxLjE0LDE2Ny44OEw0NzEuMTQsMTY3Ljg4elwiLFwibmFtZVwiOlwiR2VybWFueVwifSxcImRrXCI6e1wicGF0aFwiOlwiTTQ3Ni43NywxNTEuNWwtNC4xNSw0LjU5bC0wLjE1LDIuOTlsMS44OSw0LjkzbDIuOTYtMC41NmwtMC4zNy00LjAzbDIuMDQtMi4yOGwtMC4wNC0xLjc5bC0xLjQ0LTMuNzNMNDc2Ljc3LDE1MS41TDQ3Ni43NywxNTEuNU00ODEuNDQsMTU5LjY0bC0wLjkzLTAuMDRsLTEuMjIsMS4xMmwwLjE1LDEuNzVsMi44OSwwLjA4bDAuMTUtMS45OEw0ODEuNDQsMTU5LjY0TDQ4MS40NCwxNTkuNjR6XCIsXCJuYW1lXCI6XCJEZW5tYXJrXCJ9LFwiY2hcIjp7XCJwYXRoXCI6XCJNNDcyLjkxLDE4OS4zOGwtNC4zNiw0LjY0bDAuMDksMC40N2wxLjc5LTAuNTZsMS42MSwyLjI0bDIuNzItMC45NmwxLjg4LDEuNDZsMC43Ny0wLjQ0bDIuMzItMy42NGwtMC41OS0wLjU2bC0yLjI5LTAuMDZsLTEuMTEtMi4yN0w0NzIuOTEsMTg5LjM4TDQ3Mi45MSwxODkuMzh6XCIsXCJuYW1lXCI6XCJTd2l0emVybGFuZFwifSxcImN6XCI6e1wicGF0aFwiOlwiTTQ4OC40MywxODQuODdoMi45N2gxLjQ2bDIuMzcsMS42OWw0LjM5LTMuNjVsLTQuMjYtMy4wNGwtNC4yMi0yLjA0bC0yLjg5LDAuNTJsLTMuOTIsMi41Mkw0ODguNDMsMTg0Ljg3TDQ4OC40MywxODQuODd6XCIsXCJuYW1lXCI6XCJDemVjaCBSZXB1YmxpY1wifSxcInNrXCI6e1wicGF0aFwiOlwiTTQ5NS44NCwxODcuMTNsMC42OSwwLjYxbDAuMDksMS4wNGw3LjYzLTAuMTdsNS42NC0yLjQzbC0wLjA5LTIuNDdsLTEuMDgsMC40OGwtMS41NS0wLjgzbC0wLjk1LTAuMDRsLTIuNSwxbC0zLjQtMC44Mkw0OTUuODQsMTg3LjEzTDQ5NS44NCwxODcuMTN6XCIsXCJuYW1lXCI6XCJTbG92YWtpYVwifSxcImF0XCI6e1wicGF0aFwiOlwiTTQ4MC42MywxOTAuMTJsLTAuNjUsMS4zNWwwLjU2LDAuOTZsMi4zMy0wLjQ4aDEuOThsMi4xNSwxLjgybDQuNTctMC44M2wzLjM2LTJsMC44Ni0xLjM1bC0wLjEzLTEuNzRsLTMuMDItMi4yNmwtNC4wNSwwLjA0bC0wLjM0LDIuM2wtNC4yNiwyLjA4TDQ4MC42MywxOTAuMTJMNDgwLjYzLDE5MC4xMnpcIixcIm5hbWVcIjpcIkF1c3RyaWFcIn0sXCJodVwiOntcInBhdGhcIjpcIk00OTYuNzQsMTg5LjZsLTEuMTYsMS44MmwwLjA5LDIuNzhsMS44NSwwLjk1bDUuNjksMC4xN2w3LjkzLTYuNjhsMC4wNC0xLjQ4bC0wLjg2LTAuNDNsLTUuNzMsMi42TDQ5Ni43NCwxODkuNkw0OTYuNzQsMTg5LjZ6XCIsXCJuYW1lXCI6XCJIdW5nYXJ5XCJ9LFwic2lcIjp7XCJwYXRoXCI6XCJNNDk0LjgsMTkxLjk5bC0yLjU0LDEuNTJsLTQuNzQsMS4wNGwwLjk1LDIuNzRsMy4zMiwwLjA0bDMuMDYtMi41Nkw0OTQuOCwxOTEuOTlMNDk0LjgsMTkxLjk5elwiLFwibmFtZVwiOlwiU2xvdmVuaWFcIn0sXCJoclwiOntcInBhdGhcIjpcIk00OTUuNjIsMTk1LjE2bC0zLjUzLDIuOTFoLTMuNThsLTAuNDMsMi41MmwxLjY0LDAuNDNsMC44Mi0xLjIybDEuMjksMS4xM2wxLjAzLDMuNmw3LjA3LDMuM2wwLjctMC44bC03LjE3LTcuNGwwLjczLTEuMzVsNi44MS0wLjI2bDAuNjktMi4xN2wtNC40NCwwLjEzTDQ5NS42MiwxOTUuMTZMNDk1LjYyLDE5NS4xNnpcIixcIm5hbWVcIjpcIkNyb2F0aWFcIn0sXCJiYVwiOntcInBhdGhcIjpcIk00OTQuOCwxOTguOTRsLTAuMzcsMC42MWw2LjcxLDYuOTJsMi40Ni0zLjYybC0wLjA5LTEuNDNsLTIuMTUtMi42MUw0OTQuOCwxOTguOTRMNDk0LjgsMTk4Ljk0elwiLFwibmFtZVwiOlwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwifSxcIm10XCI6e1wicGF0aFwiOlwiTTQ5Mi42MSwyMzAuNDdsLTEuNjcsMC4zNGwwLjA2LDEuODVsMS41LDAuNWwwLjY3LTAuNTZMNDkyLjYxLDIzMC40N0w0OTIuNjEsMjMwLjQ3elwiLFwibmFtZVwiOlwiTWFsdGFcIn0sXCJ1YVwiOntcInBhdGhcIjpcIk01MTUuNTcsMTczLjE1bC0yLjksMS42M2wwLjcyLDMuMDhsLTIuNjgsNS42NWwwLjAyLDIuNDlsMS4yNiwwLjhsOC4wOCwwLjRsMi4yNi0xLjg3bDIuNDIsMC44MWwzLjQ3LDQuNjNsLTIuNTQsNC41NmwzLjAyLDAuODhsMy45NS00LjU1bDIuMjYsMC40MWwyLjEsMS40NmwtMS44NSwyLjQ0bDIuNSwzLjloMi42NmwxLjM3LTIuNmwyLjgyLTAuNTdsMC4wOC0yLjExbC01LjI0LTAuODFsMC4xNi0yLjI3aDUuMDhsNS40OC00LjM5bDIuNDItMi4xMWwwLjQtNi42NmwtMTAuOC0wLjk3bC00LjQzLTYuMjVsLTMuMDYtMS4wNWwtMy43MSwwLjE2bC0xLjY3LDQuMTNsLTcuNiwwLjFsLTIuNDctMS4xNEw1MTUuNTcsMTczLjE1TDUxNS41NywxNzMuMTV6XCIsXCJuYW1lXCI6XCJVa3JhaW5lXCJ9LFwibWRcIjp7XCJwYXRoXCI6XCJNNTIwLjc1LDE4Ny43MWwzLjEsNC43N2wtMC4yNiwyLjdsMS4xMSwwLjA1bDIuNjMtNC40NWwtMy4xNi0zLjkybC0xLjc5LTAuNzRMNTIwLjc1LDE4Ny43MUw1MjAuNzUsMTg3LjcxelwiLFwibmFtZVwiOlwiTW9sZG92YVwifSxcInJvXCI6e1wicGF0aFwiOlwiTTUxMi4xOCwxODcuNmwtMC4yNiwxLjQ4bC01Ljc5LDQuODJsNC44NCw3LjFsMy4xLDIuMTdoNS41OGwxLjg0LTEuNTRsMi40Ny0wLjMybDEuODQsMS4xMWwzLjI2LTMuNzFsLTAuNjMtMS44NmwtMy4zMS0wLjg1bC0yLjI2LTAuMTFsMC4xMS0zLjE4bC0zLTQuNzJMNTEyLjE4LDE4Ny42TDUxMi4xOCwxODcuNnpcIixcIm5hbWVcIjpcIlJvbWFuaWFcIn0sXCJyc1wiOntcInBhdGhcIjpcIk01MDUuNTUsMTk0LjU0bC0yLjA1LDEuNTRoLTFsLTAuNjgsMi4xMmwyLjQyLDIuODFsMC4xNiwyLjIzbC0zLDQuMjRsMC40MiwxLjI3bDEuNzQsMC4zMmwxLjM3LTEuODZsMC43NC0wLjA1bDEuMjYsMS4yMmwzLjg0LTEuMTdsLTAuMzItNS40Nkw1MDUuNTUsMTk0LjU0TDUwNS41NSwxOTQuNTR6XCIsXCJuYW1lXCI6XCJTZXJiaWFcIn0sXCJiZ1wiOntcInBhdGhcIjpcIk01MTEuNDQsMjAyLjM5bDAuMTYsNC45OGwxLjY4LDMuNWw2LjMxLDAuMTFsMi44NC0yLjAxbDIuNzktMS4xMWwtMC42OC0zLjE4bDAuNjMtMS43bC0xLjQyLTAuNzRsLTEuOTUsMC4xNmwtMS41MywxLjU0bC02LjQyLDAuMDVMNTExLjQ0LDIwMi4zOUw1MTEuNDQsMjAyLjM5elwiLFwibmFtZVwiOlwiQnVsZ2FyaWFcIn0sXCJhbFwiOntcInBhdGhcIjpcIk01MDQuMDIsMjA5Ljc2djQuNjFsMS4zMiwyLjQ5bDAuOTUtMC4xMWwxLjYzLTIuOTdsLTAuOTUtMS4zM2wtMC4zNy0zLjI5bC0xLjI2LTEuMTdMNTA0LjAyLDIwOS43Nkw1MDQuMDIsMjA5Ljc2elwiLFwibmFtZVwiOlwiQWxiYW5pYVwifSxcIm1rXCI6e1wicGF0aFwiOlwiTTUxMC45MiwyMDguMDFsLTMuMzcsMS4xMWwwLjE2LDIuODZsMC43OSwxLjAxbDQtMS44Nkw1MTAuOTIsMjA4LjAxTDUxMC45MiwyMDguMDF6XCIsXCJuYW1lXCI6XCJNYWNlZG9uaWFcIn0sXCJnclwiOntcInBhdGhcIjpcIk01MDYuNzEsMjE3LjZsLTAuMTEsMS4zM2w0LjYzLDIuMzNsMi4yMSwwLjg1bC0xLjE2LDEuMjJsLTIuNTgsMC4yNmwtMC4zNywxLjE3bDAuODksMi4wMWwyLjg5LDEuNTRsMS4yNiwwLjExbDAuMTYtMy40NWwxLjg5LTIuMjhsLTUuMTYtNi4xbDAuNjgtMi4wN2wxLjIxLTAuMDVsMS44NCwxLjQ4bDEuMTYtMC41OGwwLjM3LTIuMDdsNS40MiwwLjA1bDAuMjEtMy4xOGwtMi4yNiwxLjU5bC02LjYzLTAuMTZsLTQuMzEsMi4yM0w1MDYuNzEsMjE3LjZMNTA2LjcxLDIxNy42TTUxNi43NiwyMzAuNTlsMS42MywwLjA1bDAuNjgsMS4wMWgyLjM3bDEuNTgtMC41OGwwLjUzLDAuNjRsLTEuMDUsMS4zOGwtNC42MywwLjE2bC0wLjg0LTEuMTFsLTAuODktMC41M0w1MTYuNzYsMjMwLjU5TDUxNi43NiwyMzAuNTl6XCIsXCJuYW1lXCI6XCJHcmVlY2VcIn19fSk7XG4iLCJpZih0eXBlb2YgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9tb21lbnRfXyA9PT0gJ3VuZGVmaW5lZCcpIHsgdmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ21vbWVudCdcIik7IGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJzsgdGhyb3cgZTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbW9tZW50X187Il0sInNvdXJjZVJvb3QiOiIifQ==