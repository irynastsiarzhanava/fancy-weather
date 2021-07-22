/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/date.js":
/*!************************!*\
  !*** ./src/js/date.js ***!
  \************************/
/***/ (() => {

eval("var daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\nvar monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\nvar currentDate = document.getElementById('date');\nvar day1 = document.getElementById('day1');\nvar day2 = document.getElementById('day2');\nvar day3 = document.getElementById('day3');\n\nfunction getDate() {\n  var myDate = new Date();\n  var tomorrow = new Date();\n  tomorrow.setDate(tomorrow.getDate() + 1);\n  var afterTomorrow = new Date();\n  afterTomorrow.setDate(afterTomorrow.getDate() + 2);\n  var afterAfterTomorrow = new Date();\n  afterAfterTomorrow.setDate(afterAfterTomorrow.getDate() + 3);\n  var date = myDate.getDate();\n  var month = monthsList[myDate.getMonth() + 1];\n  var day = daysList[myDate.getDay()];\n  currentDate.innerHTML = \"\".concat(day, \" \").concat(date, \" \").concat(month);\n  day1.innerHTML = daysList[tomorrow.getDay()];\n  day2.innerHTML = daysList[afterTomorrow.getDay()];\n  day3.innerHTML = daysList[afterAfterTomorrow.getDay()];\n}\n\ngetDate();\n\n//# sourceURL=webpack://fancy-weather/./src/js/date.js?");

/***/ }),

/***/ "./src/js/forecast.js":
/*!****************************!*\
  !*** ./src/js/forecast.js ***!
  \****************************/
/***/ (() => {

eval("var tempForecastDay1 = document.getElementById('temp-forecast-day1');\nvar tempForecastDay2 = document.getElementById('temp-forecast-day2');\nvar tempForecastDay3 = document.getElementById('temp-forecast-day3');\nvar iconDay1 = document.getElementById('icon-day1');\nvar iconDay2 = document.getElementById('icon-day2');\nvar iconDay3 = document.getElementById('icon-day3');\n\nfunction getForecast() {\n  if (localStorage.getItem('location') !== null) {\n    var latitude = JSON.parse(window.localStorage.getItem('latitude'));\n    var longitude = JSON.parse(window.localStorage.getItem('longitude'));\n    fetch(\"https://api.openweathermap.org/data/2.5/onecall?lat=\".concat(latitude, \"&lon=\").concat(longitude, \"&exclude=current,minutely,hourly,alerts&appid=0a56a45096652a831cb6980d524fe081&units=metric\")).then(function (response) {\n      if (!response.ok) {\n        throw Error(response.statusText);\n      }\n\n      return response.json();\n    }).then(function (data) {\n      tempForecastDay1.innerHTML = Math.round(data.daily[1].temp.day);\n      tempForecastDay2.innerHTML = Math.round(data.daily[2].temp.day);\n      tempForecastDay3.innerHTML = Math.round(data.daily[3].temp.day);\n      var weatherIcon1 = data.daily[1].weather[0].icon;\n      var weatherIcon2 = data.daily[1].weather[0].icon;\n      var weatherIcon3 = data.daily[1].weather[0].icon;\n      iconDay1.setAttribute('src', \"http://openweathermap.org/img/w/\".concat(weatherIcon1, \".png\"));\n      iconDay2.setAttribute('src', \"http://openweathermap.org/img/w/\".concat(weatherIcon2, \".png\"));\n      iconDay3.setAttribute('src', \"http://openweathermap.org/img/w/\".concat(weatherIcon3, \".png\"));\n      localStorage.setItem('Forecast', JSON.stringify(data));\n    })[\"catch\"](function (error) {\n      return console.log('Looks like there was a problem with forecast data: ', error);\n    });\n  }\n}\n\ngetForecast();\n\n//# sourceURL=webpack://fancy-weather/./src/js/forecast.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_media_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/media.scss */ \"./src/sass/media.scss\");\n/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.js */ \"./src/js/location.js\");\n/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_location_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.js */ \"./src/js/date.js\");\n/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_date_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./time.js */ \"./src/js/time.js\");\n/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_time_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather.js */ \"./src/js/weather.js\");\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_weather_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _forecast_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forecast.js */ \"./src/js/forecast.js\");\n/* harmony import */ var _forecast_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_forecast_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map.js */ \"./src/js/map.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_map_js__WEBPACK_IMPORTED_MODULE_7__);\n/* eslint-disable import/extensions */\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://fancy-weather/./src/js/index.js?");

/***/ }),

/***/ "./src/js/location.js":
/*!****************************!*\
  !*** ./src/js/location.js ***!
  \****************************/
/***/ (() => {

eval("var country = document.getElementById('country');\nvar city = document.getElementById('city');\nvar latitude = document.getElementById('latitude');\nvar longitude = document.getElementById('longitude');\n\nfunction getLocation() {\n  fetch('https://geolocation-db.com/json/').then(function (response) {\n    if (!response.ok) {\n      throw Error(response.statusText);\n    }\n\n    return response.json();\n  }).then(function (data) {\n    country.innerHTML = data.country_name;\n    city.innerHTML = data.city;\n    latitude.innerHTML = data.latitude;\n    longitude.innerHTML = data.longitude;\n    localStorage.setItem('location', JSON.stringify(data));\n    localStorage.setItem('latitude', JSON.stringify(data.latitude));\n    localStorage.setItem('longitude', JSON.stringify(data.longitude));\n  })[\"catch\"](function (error) {\n    return console.log('Looks like there was a problem with location data: ', error);\n  });\n} // eslint-disable-next-line no-unused-vars\n\n\ngetLocation();\n\n//# sourceURL=webpack://fancy-weather/./src/js/location.js?");

/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/***/ (() => {

eval("/* eslint-disable object-shorthand */\n\n/* eslint-disable prefer-template */\n\n/* eslint-disable func-names */\n\n/* eslint-disable no-undef */\nmapboxgl.accessToken = 'pk.eyJ1IjoidmVyYXNpYXZrYSIsImEiOiJja3JkaXk1N3k1Y2k5Mm9xcDNiNnJhZ3czIn0.VVSKa_qR-1yqHrKVi7XE0w';\nvar latitude = JSON.parse(window.localStorage.getItem('latitude'));\nvar longitude = JSON.parse(window.localStorage.getItem('longitude'));\nvar map = new mapboxgl.Map({\n  container: 'map',\n  style: 'mapbox://styles/mapbox/streets-v11',\n  center: [\"\".concat(longitude), \"\".concat(latitude)],\n  zoom: 8\n});\n/* Given a query in the form \"lng, lat\" or \"lat, lng\"\n* returns the matching geographic coordinate(s)\n* as search results in carmen geojson format,\n* https://github.com/mapbox/carmen/blob/master/carmen-geojson.md */\n\nvar coordinatesGeocoder = function coordinatesGeocoder(query) {\n  // Match anything which looks like\n  // decimal degrees coordinate pair.\n  var matches = query.match(/^[ ]*(?:Lat: )?(-?\\d+\\.?\\d*)[, ]+(?:Lng: )?(-?\\d+\\.?\\d*)[ ]*$/i);\n\n  if (!matches) {\n    return null;\n  }\n\n  function coordinateFeature(lng, lat) {\n    return {\n      center: [lng, lat],\n      geometry: {\n        type: 'Point',\n        coordinates: [lng, lat]\n      },\n      place_name: 'Lat: ' + lat + ' Lng: ' + lng,\n      place_type: ['coordinate'],\n      properties: {},\n      type: 'Feature'\n    };\n  }\n\n  var coord1 = Number(matches[1]);\n  var coord2 = Number(matches[2]);\n  var geocodes = [];\n\n  if (coord1 < -90 || coord1 > 90) {\n    // must be lng, lat\n    geocodes.push(coordinateFeature(coord1, coord2));\n  }\n\n  if (coord2 < -90 || coord2 > 90) {\n    // must be lat, lng\n    geocodes.push(coordinateFeature(coord2, coord1));\n  }\n\n  if (geocodes.length === 0) {\n    // else could be either lng, lat or lat, lng\n    geocodes.push(coordinateFeature(coord1, coord2));\n    geocodes.push(coordinateFeature(coord2, coord1));\n  }\n\n  return geocodes;\n}; // Add the control to the map.\n\n\nmap.addControl(new MapboxGeocoder({\n  accessToken: mapboxgl.accessToken,\n  localGeocoder: coordinatesGeocoder,\n  zoom: 4,\n  placeholder: 'Try: Minsk',\n  mapboxgl: mapboxgl\n}));\n\n//# sourceURL=webpack://fancy-weather/./src/js/map.js?");

/***/ }),

/***/ "./src/js/time.js":
/*!************************!*\
  !*** ./src/js/time.js ***!
  \************************/
/***/ (() => {

eval("var currentTime = document.getElementById('time');\n\nfunction getTime() {\n  var myTime = new Date();\n  var hours = myTime.getHours();\n  var minutes = myTime.getMinutes();\n\n  if (hours.toString().length === 1) {\n    hours = \"0\".concat(hours);\n  }\n\n  if (minutes.toString().length === 1) {\n    minutes = \"0\".concat(minutes);\n  }\n\n  currentTime.innerHTML = \"    \".concat(hours, \":\").concat(minutes);\n  setInterval(getTime, 60000);\n}\n\ngetTime();\n\n//# sourceURL=webpack://fancy-weather/./src/js/time.js?");

/***/ }),

/***/ "./src/js/weather.js":
/*!***************************!*\
  !*** ./src/js/weather.js ***!
  \***************************/
/***/ (() => {

eval("var temp = document.getElementById('temp');\nvar feelsLike = document.getElementById('feels-like');\nvar wind = document.getElementById('wind');\nvar humidity = document.getElementById('humidity');\nvar icon = document.getElementById('icon');\nvar desctiption = document.getElementById('desc');\n\nfunction getWeather() {\n  if (localStorage.getItem('location') !== null) {\n    var latitude = JSON.parse(window.localStorage.getItem('latitude'));\n    var longitude = JSON.parse(window.localStorage.getItem('longitude'));\n    fetch(\"http://api.openweathermap.org/data/2.5/weather?lat=\".concat(latitude, \"&lon=\").concat(longitude, \"&appid=0a56a45096652a831cb6980d524fe081&units=metric\")).then(function (response) {\n      if (!response.ok) {\n        throw Error(response.statusText);\n      }\n\n      return response.json();\n    }).then(function (data) {\n      temp.innerHTML = Math.round(data.main.temp);\n      feelsLike.innerHTML = Math.round(data.main.feels_like);\n      wind.innerHTML = Math.round(data.wind.speed);\n      humidity.innerHTML = data.main.humidity;\n      var weatherIcon = data.weather[0].icon;\n      desctiption.innerHTML = data.weather[0].description;\n      icon.setAttribute('src', \"http://openweathermap.org/img/w/\".concat(weatherIcon, \".png\"));\n      localStorage.setItem('Weather', JSON.stringify(data));\n    })[\"catch\"](function (error) {\n      return console.log('Looks like there was a problem with weather data: ', error);\n    });\n  }\n}\n\ngetWeather();\n\n//# sourceURL=webpack://fancy-weather/./src/js/weather.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/media.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/media.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@media only screen and (min-width: 568px) {\\n  main .weather {\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n  }\\n  main .weather .overcast {\\n    margin-top: 70px;\\n  }\\n  main .weather .overcast h4 {\\n    display: none;\\n  }\\n  main .forecast {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n  }\\n  main .forecast h4 {\\n    flex-basis: auto;\\n    width: 100%;\\n    margin-bottom: 80px;\\n  }\\n  main .forecast > div {\\n    position: relative;\\n    text-align: left;\\n    margin-right: 20px;\\n  }\\n  main .forecast > div > span {\\n    position: absolute;\\n    bottom: 55px;\\n    left: 0;\\n  }\\n  main .forecast > div > p {\\n    margin: 0;\\n  }\\n  main #map {\\n    height: 500px;\\n  }\\n}\\n@media only screen and (min-width: 768px) {\\n  body {\\n    font-size: 25px;\\n  }\\n\\n  header {\\n    flex-direction: row;\\n  }\\n  header .input-group {\\n    max-width: 400px;\\n    margin-left: auto;\\n    order: 2;\\n  }\\n  header .refresh, header .dropdown {\\n    margin-right: 10px;\\n  }\\n\\n  main .weather {\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    justify-content: space-around;\\n  }\\n  main .weather .location {\\n    text-align: left;\\n  }\\n  main .weather .location > div {\\n    justify-content: flex-start;\\n  }\\n  main .weather .overcast {\\n    text-align: left;\\n    margin-top: 115px;\\n  }\\n  main .forecast {\\n    justify-content: space-around;\\n  }\\n}\\n@media only screen and (min-width: 1024px) {\\n  body {\\n    font-size: 25px;\\n  }\\n\\n  main {\\n    height: 100vh;\\n  }\\n  main section {\\n    box-sizing: border-box;\\n    padding: 10px;\\n    margin-bottom: 1%;\\n  }\\n  main .weather {\\n    position: relative;\\n    flex-direction: row;\\n    flex: 0 0 40%;\\n    width: 65%;\\n    justify-content: flex-start;\\n  }\\n  main .weather .location {\\n    text-align: left;\\n  }\\n  main .weather .location > div {\\n    justify-content: flex-start;\\n  }\\n  main .weather .overcast {\\n    text-align: left;\\n    margin: 0;\\n    position: absolute;\\n    bottom: 50px;\\n    right: 100px;\\n  }\\n  main .forecast {\\n    flex: 0;\\n    width: 65%;\\n    justify-content: space-around;\\n  }\\n  main .map-block {\\n    flex: 0 0 68%;\\n    display: flex;\\n    flex-direction: column;\\n    width: 33%;\\n    margin: 0;\\n    margin-left: auto;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://fancy-weather/./src/sass/media.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_bg_forest_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/bg_forest.jpg */ \"./src/images/bg_forest.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_bg_forest_jpg__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Josefin Sans\\\", sans-serif;\\n  text-align: center;\\n  font-size: 25px;\\n  color: #ffffff;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\nheader {\\n  display: flex;\\n  margin: 0 5%;\\n  flex-direction: column;\\n  max-width: 1420px;\\n}\\nheader .dropdown-toggle, header .dropdown-menu {\\n  width: 100%;\\n}\\nheader > * {\\n  margin: 2% 0;\\n}\\nheader .btn {\\n  background: rgba(0, 0, 0, 0.7);\\n  color: #ffffff;\\n  border: 1px solid #ffffff;\\n}\\nheader .btn:hover {\\n  background: rgba(0, 0, 0, 0.95);\\n  color: #ffffff;\\n  border: 1px solid #0d6efd;\\n}\\n\\nmain {\\n  display: flex;\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  margin: 2% 5% 0 5%;\\n}\\nmain h1 {\\n  font-size: 50px;\\n}\\nmain section {\\n  border-radius: 25px;\\n  background: rgba(0, 0, 0, 0.5);\\n  padding: 10px 0;\\n  margin-bottom: 20px;\\n}\\nmain h1, main h4 {\\n  text-transform: uppercase;\\n  font-weight: 700;\\n}\\nmain p, main figure {\\n  margin: 0;\\n}\\nmain .weather {\\n  display: flex;\\n  flex-direction: column;\\n}\\nmain .weather .location > div {\\n  display: flex;\\n  justify-content: center;\\n  flex-direction: row;\\n}\\nmain .weather .location > div > * {\\n  margin-bottom: 0;\\n}\\nmain .weather .location img {\\n  width: 100px;\\n  height: 100px;\\n}\\nmain .weather .location .temp {\\n  font-size: 70px;\\n}\\nmain .weather .location .desc {\\n  position: relative;\\n  bottom: 20px;\\n}\\nmain .weather .overcast {\\n  margin-top: 30px;\\n}\\nmain .forecast > div {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n}\\nmain .forecast > div > p {\\n  margin: 0 20px;\\n}\\nmain .map-block {\\n  padding-top: 30px;\\n  font-size: 20px;\\n  text-align: right;\\n}\\nmain .map-block > div {\\n  width: 90%;\\n  margin: 0 auto;\\n}\\nmain .map-block #map {\\n  height: 300px;\\n  border-radius: 25px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://fancy-weather/./src/sass/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://fancy-weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://fancy-weather/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/sass/media.scss":
/*!*****************************!*\
  !*** ./src/sass/media.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_media_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./media.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/media.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_media_scss__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_media_scss__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_media_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_media_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://fancy-weather/./src/sass/media.scss?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://fancy-weather/./src/sass/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://fancy-weather/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://fancy-weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://fancy-weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://fancy-weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/images/bg_forest.jpg":
/*!**********************************!*\
  !*** ./src/images/bg_forest.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a35768db282ad62adfa0.jpg\";\n\n//# sourceURL=webpack://fancy-weather/./src/images/bg_forest.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;