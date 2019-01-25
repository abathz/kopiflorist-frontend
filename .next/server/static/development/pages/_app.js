module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reducers */ "./src/reducers/index.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_assets_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/assets/scss */ "./src/assets/scss/index.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(reducers__WEBPACK_IMPORTED_MODULE_5__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4___default.a));

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Kopi Florist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps)));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/actions/types.ts":
/*!******************************!*\
  !*** ./src/actions/types.ts ***!
  \******************************/
/*! exports provided: UPDATE_DATA_SIGNUP, SIGNUP_FAILED, UPDATE_DATA_SHOP, GET_ALL_PRODUCT, GET_PRODUCT, RESET_STATE_PRODUCT, UPDATE_DATA_PROFILE, GET_PROFILE, GET_USER_ADDRESSES, GET_USER_ADDRESS, GET_ALL_BLOG, GET_BLOG, UPDATE_DATA_CHECKOUT, GET_ALL_CART, GET_INFO_MY_CART, GET_ALL_PICKUP_METHOD, UPDATE_DATA_TRIP, ADD_DATA_GUEST, REMOVE_DATA_GUEST, GET_ALL_TRIP_PACKAGE, GET_TRIP_PACKAGE, GET_ALL_TRIP, GET_TRIP, INCREMENT_QUANTITY, DECREMENT_QUANTITY, RESET_STATE_RAJAONGKIR_ALL, RESET_STATE_RAJAONGKIR_COST, GET_ALL_PROVINCES, GET_ALL_CITIES, GET_DEIVERY_COST, GET_TRIP_REVIEWS, GET_USER_REVIEWS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_DATA_SIGNUP", function() { return UPDATE_DATA_SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_FAILED", function() { return SIGNUP_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_DATA_SHOP", function() { return UPDATE_DATA_SHOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_PRODUCT", function() { return GET_ALL_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT", function() { return GET_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_STATE_PRODUCT", function() { return RESET_STATE_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_DATA_PROFILE", function() { return UPDATE_DATA_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE", function() { return GET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_ADDRESSES", function() { return GET_USER_ADDRESSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_ADDRESS", function() { return GET_USER_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_BLOG", function() { return GET_ALL_BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BLOG", function() { return GET_BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_DATA_CHECKOUT", function() { return UPDATE_DATA_CHECKOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_CART", function() { return GET_ALL_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_INFO_MY_CART", function() { return GET_INFO_MY_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_PICKUP_METHOD", function() { return GET_ALL_PICKUP_METHOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_DATA_TRIP", function() { return UPDATE_DATA_TRIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_DATA_GUEST", function() { return ADD_DATA_GUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_DATA_GUEST", function() { return REMOVE_DATA_GUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_TRIP_PACKAGE", function() { return GET_ALL_TRIP_PACKAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TRIP_PACKAGE", function() { return GET_TRIP_PACKAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_TRIP", function() { return GET_ALL_TRIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TRIP", function() { return GET_TRIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_QUANTITY", function() { return INCREMENT_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_QUANTITY", function() { return DECREMENT_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_STATE_RAJAONGKIR_ALL", function() { return RESET_STATE_RAJAONGKIR_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_STATE_RAJAONGKIR_COST", function() { return RESET_STATE_RAJAONGKIR_COST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_PROVINCES", function() { return GET_ALL_PROVINCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_CITIES", function() { return GET_ALL_CITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DEIVERY_COST", function() { return GET_DEIVERY_COST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TRIP_REVIEWS", function() { return GET_TRIP_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_REVIEWS", function() { return GET_USER_REVIEWS; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = 'http://localhost:1337/api';
// AUTH
var UPDATE_DATA_SIGNUP = 'UPDATE_DATA_SIGNUP';
var SIGNUP_FAILED = 'SIGNUP_FAILED'; // SHOP

var UPDATE_DATA_SHOP = 'UPDATE_DATA_SHOP';
var GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
var GET_PRODUCT = 'GET_PRODUCT';
var RESET_STATE_PRODUCT = 'RESET_STATE_PRODUCT'; // PROFILE

var UPDATE_DATA_PROFILE = 'UPDATE_DATA_PROFILE';
var GET_PROFILE = 'GET_PROFILE';
var GET_USER_ADDRESSES = 'GET_USER_ADDRESSES';
var GET_USER_ADDRESS = 'GET_USER_ADDRESS'; // BLOG

var GET_ALL_BLOG = 'GET_ALL_BLOG';
var GET_BLOG = 'GET_BLOG'; // CART & CHECKOUT

var UPDATE_DATA_CHECKOUT = 'UPDATE_DATA_CHECKOUT';
var GET_ALL_CART = 'GET_ALL_CART';
var GET_INFO_MY_CART = 'GET_INFO_MY_CART';
var GET_ALL_PICKUP_METHOD = 'GET_ALL_PICKUP_METHOD'; // TRIP

var UPDATE_DATA_TRIP = 'UPDATE_DATA_TRIP';
var ADD_DATA_GUEST = 'ADD_DATA_GUEST';
var REMOVE_DATA_GUEST = 'REMOVE_DATA_GUEST';
var GET_ALL_TRIP_PACKAGE = 'GET_ALL_TRIP_PACKAGE';
var GET_TRIP_PACKAGE = 'GET_TRIP_PACKAGE';
var GET_ALL_TRIP = 'GET_ALL_TRIP';
var GET_TRIP = 'GET_TRIP';
var INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
var DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'; // RAJAONGKIR

var RESET_STATE_RAJAONGKIR_ALL = 'RESET_STATE_RAJAONGKIR_ALL';
var RESET_STATE_RAJAONGKIR_COST = 'RESET_STATE_RAJAONGKIR_COST';
var GET_ALL_PROVINCES = 'GET_ALL_PROVINCES';
var GET_ALL_CITIES = 'GET_ALL_CITIES';
var GET_DEIVERY_COST = 'GET_DEIVERY_COST'; // REVIEW TRIP

var GET_TRIP_REVIEWS = 'GET_TRIP_REVIEWS';
var GET_USER_REVIEWS = 'GET_USER_REVIEWS';

/***/ }),

/***/ "./src/assets/scss/index.ts":
/*!**********************************!*\
  !*** ./src/assets/scss/index.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.scss */ "./src/assets/scss/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/reducers/AuthReducer.ts":
/*!*************************************!*\
  !*** ./src/reducers/AuthReducer.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/types */ "./src/actions/types.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  phone: 0,
  gender: '',
  error: '',
  company_name: ''
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_DATA_SIGNUP"]:
      return _objectSpread({}, state, _defineProperty({}, action.payload.prop, action.payload.value));

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["SIGNUP_FAILED"]:
      return _objectSpread({}, state, {
        error: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/BlogReducer.ts":
/*!*************************************!*\
  !*** ./src/reducers/BlogReducer.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/types */ "./src/actions/types.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var INITIAL_STATE = {
  allBlog: [],
  detailBlog: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_BLOG"]:
      return _objectSpread({}, state, {
        allBlog: action.payload.data
      });

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_BLOG"]:
      return _objectSpread({}, state, {
        detailBlog: action.payload.data
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/CartAndCheckoutReducer.ts":
/*!************************************************!*\
  !*** ./src/reducers/CartAndCheckoutReducer.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/types */ "./src/actions/types.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var INITIAL_STATE = {
  coupon_code: '',
  dataProduct: [],
  dataTrip: [],
  myCart: {},
  allPickupMethod: [],
  address: '',
  province: 0,
  postal_code: '',
  city: 0,
  service: '',
  idAddress: 0
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_DATA_CHECKOUT"]:
      return _objectSpread({}, state, _defineProperty({}, action.payload.prop, action.payload.value));

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_CART"]:
      return _objectSpread({}, state, {
        dataProduct: action.payload.dataProduct,
        dataTrip: action.payload.dataTrip
      });

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_INFO_MY_CART"]:
      return _objectSpread({}, state, {
        myCart: action.payload.cart
      });

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_PICKUP_METHOD"]:
      return _objectSpread({}, state, {
        allPickupMethod: action.payload.data
      });

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["RESET_STATE_RAJAONGKIR_ALL"]:
      return _objectSpread({}, state, {
        postal_code: ''
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/RajaongkirReducer.ts":
/*!*******************************************!*\
  !*** ./src/reducers/RajaongkirReducer.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/types */ "./src/actions/types.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var INITIAL_STATE = {
  provinces: [],
  cities: [],
  deliveryCost: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_PROVINCES"]:
      return _objectSpread({}, state, {
        provinces: action.payload.provinces
      });

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_CITIES"]:
      return _objectSpread({}, state, {
        cities: action.payload.cities
      });

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_DEIVERY_COST"]:
      return _objectSpread({}, state, {
        deliveryCost: action.payload
      });

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["RESET_STATE_RAJAONGKIR_ALL"]:
      return _objectSpread({}, state, {
        cities: [],
        deliveryCost: []
      });

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["RESET_STATE_RAJAONGKIR_COST"]:
      return _objectSpread({}, state, {
        deliveryCost: []
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/ReviewReducer.ts":
/*!***************************************!*\
  !*** ./src/reducers/ReviewReducer.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/types */ "./src/actions/types.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var INITIAL_STATE = {
  userReviews: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_USER_REVIEWS"]:
      return _objectSpread({}, state, {
        userReviews: action.payload.trips
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/ShopReducer.ts":
/*!*************************************!*\
  !*** ./src/reducers/ShopReducer.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/types */ "./src/actions/types.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var INITIAL_STATE = {
  quantity: 0,
  allProduct: [],
  product: [],
  addOns: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_DATA_SHOP"]:
      return _objectSpread({}, state, _defineProperty({}, action.payload.prop, action.payload.value));

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_PRODUCT"]:
      action.payload.data.map(function (data) {
        var product = {
          name: data.name,
          quantity: 0,
          price: data.price
        };
        state.addOns.push(product);
      });
      return _objectSpread({}, state, {
        allProduct: action.payload.data
      });

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT"]:
      return _objectSpread({}, state, {
        product: action.payload.data
      });

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["INCREMENT_QUANTITY"]:
      state.addOns[action.payload].quantity += 1;
      return _objectSpread({}, state);

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["DECREMENT_QUANTITY"]:
      if (state.addOns[action.payload].quantity <= 0) {
        state.addOns[action.payload].quantity = 0;
        return _objectSpread({}, state);
      }

      state.addOns[action.payload].quantity -= 1;
      return _objectSpread({}, state);

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["RESET_STATE_PRODUCT"]:
      return _objectSpread({}, state, {
        product: []
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/TripReducer.ts":
/*!*************************************!*\
  !*** ./src/reducers/TripReducer.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/types */ "./src/actions/types.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var INITIAL_STATE = {
  name: '',
  email: '',
  food_preference: '',
  age: 0,
  phone: 0,
  group_size: '',
  price: 0,
  guest_list: 0,
  guestList: [],
  allTrip: [],
  tripDetail: [],
  allTripPackage: [],
  tripPackage: {},
  main_photo: '',
  other_photo: [],
  total_price: 0,
  tripReviews: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_DATA_TRIP"]:
      if (action.payload.prop === 'other_photo') {
        state.other_photo[action.payload.value.id] = action.payload.value.img;
        return _objectSpread({}, state);
      } else {
        return _objectSpread({}, state, _defineProperty({}, action.payload.prop, action.payload.value));
      }

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["ADD_DATA_GUEST"]:
      state.guestList.push(action.payload);
      return _objectSpread({}, state);

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_DATA_GUEST"]:
      state.guestList.splice(action.payload, 1);
      return _objectSpread({}, state);

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_TRIP"]:
      return _objectSpread({}, state, {
        allTrip: action.payload
      });

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_TRIP"]:
      action.payload.data.other_photo.map(function (data) {
        state.other_photo.push(data);
      });
      return _objectSpread({}, state, {
        tripDetail: action.payload.data,
        main_photo: action.payload.data.main_photo
      });

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_TRIP_PACKAGE"]:
      return _objectSpread({}, state, {
        allTripPackage: action.payload.data
      });

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_TRIP_PACKAGE"]:
      return _objectSpread({}, state, {
        tripPackage: action.payload.data
      });

    case actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_TRIP_REVIEWS"]:
      return _objectSpread({}, state, {
        tripReviews: action.payload.reviews
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/UserReducer.ts":
/*!*************************************!*\
  !*** ./src/reducers/UserReducer.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! actions/types */ "./src/actions/types.ts");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var INITIAL_STATE = {
  name: '',
  email: '',
  phone: 0,
  address: '',
  profile: {},
  city: '',
  province: '',
  postal_code: 0,
  city_id: 0,
  province_id: 0,
  userAddresses: [],
  editedUserAddress: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions_types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_DATA_PROFILE"]:
      if (action.payload.prop === 'userAddress') {
        if (action.payload.value.target.id === 'address') {
          state.editedUserAddress[action.payload.value.indexAddress].address = action.payload.value.target.value;
        } else if (action.payload.value.target.id === 'city') {
          state.editedUserAddress[action.payload.value.indexAddress].city_id = action.payload.value.city_id;
          state.editedUserAddress[action.payload.value.indexAddress].city = action.payload.value.target.value;
        } else if (action.payload.value.target.id === 'province') {
          state.editedUserAddress[action.payload.value.indexAddress].province_id = action.payload.value.province_id;
          state.editedUserAddress[action.payload.value.indexAddress].province = action.payload.value.target.value;
        } else if (action.payload.value.target.id === 'postal_code') {
          state.editedUserAddress[action.payload.value.indexAddress].postal_code = action.payload.value.target.value;
        }

        return _objectSpread({}, state);
      }

      return _objectSpread({}, state, _defineProperty({}, action.payload.prop, action.payload.value));

    case actions_types__WEBPACK_IMPORTED_MODULE_1__["GET_PROFILE"]:
      return _objectSpread({}, state, {
        profile: action.payload,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone
      });

    case actions_types__WEBPACK_IMPORTED_MODULE_1__["GET_USER_ADDRESSES"]:
      var _address = lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(action.payload.addresses, function (data) {
        return {
          id: data.id,
          address: data.address,
          city: data.city,
          province: data.province,
          postal_code: data.postal_code,
          city_id: data.city_id,
          province_id: data.province_id
        };
      });

      return _objectSpread({}, state, {
        userAddresses: action.payload.addresses,
        editedUserAddress: _address
      });

    case actions_types__WEBPACK_IMPORTED_MODULE_1__["GET_USER_ADDRESS"]:
      return _objectSpread({}, state, {
        address: action.payload.address.address,
        city: action.payload.address.city,
        postal_code: action.payload.address.postal_code,
        city_id: action.payload.address.city_id,
        province_id: action.payload.address.province_id
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/index.ts":
/*!*******************************!*\
  !*** ./src/reducers/index.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ShopReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopReducer */ "./src/reducers/ShopReducer.ts");
/* harmony import */ var _AuthReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthReducer */ "./src/reducers/AuthReducer.ts");
/* harmony import */ var _UserReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserReducer */ "./src/reducers/UserReducer.ts");
/* harmony import */ var _BlogReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlogReducer */ "./src/reducers/BlogReducer.ts");
/* harmony import */ var _CartAndCheckoutReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CartAndCheckoutReducer */ "./src/reducers/CartAndCheckoutReducer.ts");
/* harmony import */ var _TripReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TripReducer */ "./src/reducers/TripReducer.ts");
/* harmony import */ var _RajaongkirReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RajaongkirReducer */ "./src/reducers/RajaongkirReducer.ts");
/* harmony import */ var _ReviewReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ReviewReducer */ "./src/reducers/ReviewReducer.ts");









var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  shop: _ShopReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  auth: _AuthReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  user: _UserReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  blog: _BlogReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  cartcheckout: _CartAndCheckoutReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  trip: _TripReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  rajaongkir: _RajaongkirReducer__WEBPACK_IMPORTED_MODULE_7__["default"],
  review: _ReviewReducer__WEBPACK_IMPORTED_MODULE_8__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./pages/_app.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lodash/map":
/*!*****************************!*\
  !*** external "lodash/map" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/map");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map