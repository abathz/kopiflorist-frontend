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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/profile.tsx":
/*!***************************!*\
  !*** ./pages/profile.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var container_Common_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! container/Common/Header */ "./src/container/Common/Header.tsx");
/* harmony import */ var container_Common_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! container/Common/Footer */ "./src/container/Common/Footer.tsx");
/* harmony import */ var container_User_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! container/User/Profile */ "./src/container/User/Profile.tsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(container_Common_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(container_User_Profile__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(container_Common_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(/*! next-routes */ "next-routes");

module.exports = routes().add('home', '/', 'index').add('about', '/about', 'about').add('coffeetrip', '/coffee_trip', 'coffeetrip').add('/coffee_trip/:id', 'coffeetripdetail').add('/coffee_trip/:id/order', 'guestlistaddons').add('shop', '/shop', 'shop').add('/shop/:id/:slug', 'shopdetail').add('blog', '/blog', 'blog').add('/blog/:id/:slug', 'blogdetail').add('howtoorder', '/howtoorder', 'howtoorder').add('profile', '/profile', 'profile').add('editprofile', '/profile/edit', 'editprofile').add('review', '/review', 'review').add('cart', '/cart', 'cart').add('checkout', '/checkout', 'checkout').add('/verify/:hash', 'emailconfirmation');

/***/ }),

/***/ "./src/actions/AuthActions.ts":
/*!************************************!*\
  !*** ./src/actions/AuthActions.ts ***!
  \************************************/
/*! exports provided: updateDataSignUp, signUp, signIn, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDataSignUp", function() { return updateDataSignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/actions/types.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var updateDataSignUp = function updateDataSignUp(_ref) {
  var prop = _ref.prop,
      value = _ref.value;
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_DATA_SIGNUP"],
                  payload: {
                    prop: prop,
                    value: value
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var signUp = function signUp(newData) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var data, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = {
                  name: newData.name,
                  email: newData.email,
                  password: newData.password,
                  phone: newData.phone,
                  gender: newData.gender,
                  company_name: newData.company_name
                };
                _context2.prev = 1;
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/signup', querystring__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(data));

              case 4:
                res = _context2.sent;
                _context2.next = 7;
                return signUpSuccess(res);

              case 7:
                _context2.next = 13;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                _context2.next = 13;
                return signUpFailed(dispatch, _context2.t0);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 9]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
var signIn = function signIn(newData) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        var data, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = {
                  email: newData.email,
                  password: newData.password
                };
                _context3.prev = 1;
                _context3.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/signin', querystring__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(data));

              case 4:
                res = _context3.sent;
                _context3.next = 7;
                return signInSuccess(res);

              case 7:
                _context3.next = 13;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](1);
                _context3.next = 13;
                return signInFailed(_context3.t0);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 9]]);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};
var logout = function logout() {
  localStorage.clear();
  window.location.href = '/';
};

var signUpSuccess = function signUpSuccess(res) {
  localStorage.setItem('token', res.data.token);
  window.location.reload();
};

var signUpFailed = function signUpFailed(dispatch, err) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["SIGNUP_FAILED"],
    payload: err.response
  });
};

var signInSuccess = function signInSuccess(res) {
  localStorage.setItem('token', res.data.token);
  localStorage.setItem('email', res.data.user.email);
  window.location.reload();
};

var signInFailed = function signInFailed(err) {
  console.log(err.response);
};

/***/ }),

/***/ "./src/actions/BlogActions.ts":
/*!************************************!*\
  !*** ./src/actions/BlogActions.ts ***!
  \************************************/
/*! exports provided: getAllBlog, getBlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBlog", function() { return getAllBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlog", function() { return getBlog; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/actions/types.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var getAllBlog = function getAllBlog() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/blogs');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return getAllBlogSuccess(dispatch, res);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var getBlog = function getBlog(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/blog/".concat(id));

              case 2:
                res = _context2.sent;
                _context2.next = 5;
                return getBlogSuccess(dispatch, res);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

var getAllBlogSuccess = function getAllBlogSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_BLOG"],
    payload: res.data
  });
};

var getBlogSuccess = function getBlogSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_BLOG"],
    payload: res.data
  });
};

/***/ }),

/***/ "./src/actions/CartAndCheckoutActions.ts":
/*!***********************************************!*\
  !*** ./src/actions/CartAndCheckoutActions.ts ***!
  \***********************************************/
/*! exports provided: updateDataCheckout, getInfoMyCart, getAllCart, getAllPickupMethod, createInvoice, deleteOrderProduct, deleteOrderTrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDataCheckout", function() { return updateDataCheckout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfoMyCart", function() { return getInfoMyCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCart", function() { return getAllCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPickupMethod", function() { return getAllPickupMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInvoice", function() { return createInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOrderProduct", function() { return deleteOrderProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOrderTrip", function() { return deleteOrderTrip; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/actions/types.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var idAddress;
var updateDataCheckout = function updateDataCheckout(_ref) {
  var prop = _ref.prop,
      value = _ref.value;
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_DATA_CHECKOUT"],
      payload: {
        prop: prop,
        value: value
      }
    });
  };
};
var getInfoMyCart = function getInfoMyCart() {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/my_cart', {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem('token'))
                  }
                });

              case 2:
                res = _context.sent;
                _context.next = 5;
                return getInfoMyCartSuccess(dispatch, res);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var getAllCart = function getAllCart() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var dataProduct, dataTrip;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/order_product', {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem('token'))
                  }
                });

              case 2:
                dataProduct = _context2.sent;
                _context2.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/order_trip', {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem('token'))
                  }
                });

              case 5:
                dataTrip = _context2.sent;
                _context2.next = 8;
                return getAllCartSuccess(dispatch, dataProduct, dataTrip);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
var getAllPickupMethod = function getAllPickupMethod() {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/pickup_method');

              case 2:
                res = _context3.sent;
                _context3.next = 5;
                return getAllPickupMethodSuccess(dispatch, res);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};
var createInvoice = function createInvoice(newData) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
        var dataAddress, _res, dataPayment, res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!newData.isAddressFill) {
                  _context4.next = 6;
                  break;
                }

                dataAddress = {
                  address: newData.address,
                  postal_code: newData.postal_code,
                  province_id: newData.province_id,
                  city_id: newData.city_id
                };
                _context4.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/address', querystring__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(dataAddress), {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem('token'))
                  }
                });

              case 4:
                _res = _context4.sent;
                idAddress = _res.data.address.id;

              case 6:
                dataPayment = {
                  address_id: idAddress || newData.address_id,
                  pickup_method_id: newData.pickup_method_id,
                  pickup_method_service: newData.pickup_method_service,
                  cart_id: newData.cart_id
                };
                _context4.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/invoice', querystring__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(dataPayment), {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem('token'))
                  }
                });

              case 9:
                res = _context4.sent;
                window.location.href = res.data.invoice.snap_url;

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};
var deleteOrderProduct = function deleteOrderProduct(idCartProduct) {
  return (
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete('/order_product', {
                headers: {
                  Authorization: "Bearer ".concat(localStorage.getItem('token'))
                },
                data: {
                  cart_product_id: idCartProduct
                }
              });

            case 2:
              _context5.next = 4;
              return deleteOrderProductSuccess();

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }))
  );
};
var deleteOrderTrip = function deleteOrderTrip(idCartTrip) {
  return (
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete('/order_trip', {
                headers: {
                  Authorization: "Bearer ".concat(localStorage.getItem('token'))
                },
                data: {
                  cart_trip_id: idCartTrip
                }
              });

            case 2:
              _context6.next = 4;
              return deleteOrderTripSuccess();

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }))
  );
};

var getInfoMyCartSuccess = function getInfoMyCartSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["GET_INFO_MY_CART"],
    payload: res.data
  });
};

var getAllCartSuccess = function getAllCartSuccess(dispatch, dataProduct, dataTrip) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["GET_ALL_CART"],
    payload: {
      dataProduct: dataProduct.data,
      dataTrip: dataTrip.data
    }
  });
};

var getAllPickupMethodSuccess = function getAllPickupMethodSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["GET_ALL_PICKUP_METHOD"],
    payload: res.data
  });
};

var deleteOrderProductSuccess = function deleteOrderProductSuccess() {
  window.location.reload();
};

var deleteOrderTripSuccess = function deleteOrderTripSuccess() {
  window.location.reload();
};

/***/ }),

/***/ "./src/actions/RajaongkirActions.ts":
/*!******************************************!*\
  !*** ./src/actions/RajaongkirActions.ts ***!
  \******************************************/
/*! exports provided: resetData, getAllProvince, getAllCities, getDeliveryCost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetData", function() { return resetData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProvince", function() { return getAllProvince; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCities", function() { return getAllCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeliveryCost", function() { return getDeliveryCost; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/actions/types.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var resetData = function resetData(state) {
  return function (dispatch) {
    if (state === 'all') dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["RESET_STATE_RAJAONGKIR_ALL"]
    });else if (state === 'cost') dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["RESET_STATE_RAJAONGKIR_COST"]
    });
  };
};
var getAllProvince = function getAllProvince() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/provinces');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return getAllProvinceSuccess(dispatch, res);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var getAllCities = function getAllCities(idProvince) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/cities?province_id=".concat(idProvince));

              case 2:
                res = _context2.sent;
                _context2.next = 5;
                return getAllCitiesSuccess(dispatch, res);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var getDeliveryCost = function getDeliveryCost(cartId, destination, courier) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/cost/".concat(cartId, "?destination=").concat(destination, "&courier=").concat(courier));

              case 2:
                res = _context3.sent;
                _context3.next = 5;
                return getDeliveryCostSuccess(dispatch, res);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

var getAllProvinceSuccess = function getAllProvinceSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_PROVINCES"],
    payload: res.data
  });
};

var getAllCitiesSuccess = function getAllCitiesSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_CITIES"],
    payload: res.data
  });
};

var getDeliveryCostSuccess = function getDeliveryCostSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_DEIVERY_COST"],
    payload: res.data.result[0]
  });
};

/***/ }),

/***/ "./src/actions/ReviewActions.ts":
/*!**************************************!*\
  !*** ./src/actions/ReviewActions.ts ***!
  \**************************************/
/*! exports provided: getUserReviews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserReviews", function() { return getUserReviews; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/actions/types.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var getUserReviews = function getUserReviews() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/my_reviews', {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem('token'))
                  }
                });

              case 2:
                res = _context.sent;
                getUserReviewsSuccess(dispatch, res);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

var getUserReviewsSuccess = function getUserReviewsSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_USER_REVIEWS"],
    payload: res.data
  });
};

/***/ }),

/***/ "./src/actions/ShopActions.ts":
/*!************************************!*\
  !*** ./src/actions/ShopActions.ts ***!
  \************************************/
/*! exports provided: updateDataShop, orderProduct, getAllProduct, getProduct, resetStateProduct, incrementQuantity, decrementQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDataShop", function() { return updateDataShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderProduct", function() { return orderProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProduct", function() { return getAllProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetStateProduct", function() { return resetStateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementQuantity", function() { return incrementQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementQuantity", function() { return decrementQuantity; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/actions/types.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var updateDataShop = function updateDataShop(_ref) {
  var prop = _ref.prop,
      value = _ref.value;
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_DATA_SHOP"],
      payload: {
        prop: prop,
        value: value
      }
    });
  };
};
var orderProduct = function orderProduct(newData) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = {
                  product_id: newData.id,
                  quantity: newData.quantity
                };
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/order_product', querystring__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(data), {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem('token'))
                  }
                });

              case 3:
                _context.next = 5;
                return orderProductSuccess();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var getAllProduct = function getAllProduct() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/products');

              case 2:
                res = _context2.sent;
                _context2.next = 5;
                return getAllProductSuccess(dispatch, res);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
var getProduct = function getProduct(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/product/".concat(id));

              case 2:
                res = _context3.sent;
                _context3.next = 5;
                return getProductSuccess(dispatch, res);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};
var resetStateProduct = function resetStateProduct() {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_3__["RESET_STATE_PRODUCT"]
                });

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};
var incrementQuantity = function incrementQuantity(id) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["INCREMENT_QUANTITY"],
      payload: id
    });
  };
};
var decrementQuantity = function decrementQuantity(id) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["DECREMENT_QUANTITY"],
      payload: id
    });
  };
};

var orderProductSuccess = function orderProductSuccess() {
  window.location.href = '/cart';
};

var getAllProductSuccess = function getAllProductSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["GET_ALL_PRODUCT"],
    payload: res.data
  });
};

var getProductSuccess = function getProductSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["GET_PRODUCT"],
    payload: res.data
  });
};

/***/ }),

/***/ "./src/actions/TripActions.ts":
/*!************************************!*\
  !*** ./src/actions/TripActions.ts ***!
  \************************************/
/*! exports provided: updateDataTrip, orderTrip, addDataGuest, removeDataGuest, getAllTripPackage, getTripPackage, getAllTrip, getTrip, getTripReviews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDataTrip", function() { return updateDataTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderTrip", function() { return orderTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDataGuest", function() { return addDataGuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDataGuest", function() { return removeDataGuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTripPackage", function() { return getAllTripPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTripPackage", function() { return getTripPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTrip", function() { return getAllTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrip", function() { return getTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTripReviews", function() { return getTripReviews; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./src/actions/types.ts");



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var updateDataTrip = function updateDataTrip(_ref) {
  var prop = _ref.prop,
      value = _ref.value;
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__["UPDATE_DATA_TRIP"],
      payload: {
        prop: prop,
        value: value
      }
    });
  };
};
var orderTrip = function orderTrip(newData) {
  return (
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = {
                trip_days_id: newData.trip_days_id,
                trip_allowed_package_id: newData.trip_allowed_package_id,
                trip_booked_participants: JSON.stringify(newData.guest_list) || ''
              };
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/order_trip', querystring__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(data), {
                headers: {
                  Authorization: "Bearer ".concat(localStorage.getItem('token'))
                }
              });

            case 3:
              lodash_map__WEBPACK_IMPORTED_MODULE_1___default()(newData.productAddOns,
              /*#__PURE__*/
              function () {
                var _ref3 = _asyncToGenerator(
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, index) {
                  var product;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          product = {
                            product_id: data.id,
                            quantity: data.quantity
                          };

                          if (!(product.quantity > 0)) {
                            _context.next = 4;
                            break;
                          }

                          _context.next = 4;
                          return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/order_product', querystring__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(product), {
                            headers: {
                              Authorization: "Bearer ".concat(localStorage.getItem('token'))
                            }
                          });

                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));

                return function (_x, _x2) {
                  return _ref3.apply(this, arguments);
                };
              }());

              _context2.next = 6;
              return orderTripSuccess();

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }))
  );
};
var addDataGuest = function addDataGuest(newData) {
  return function (dispatch) {
    var data = {
      name: newData.name,
      email: newData.email,
      food_preference: newData.food_preference,
      age: newData.age,
      phone: newData.phone
    };
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__["ADD_DATA_GUEST"],
      payload: data
    });
  };
};
var removeDataGuest = function removeDataGuest(id) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__["REMOVE_DATA_GUEST"],
      payload: id
    });
  };
};
var getAllTripPackage = function getAllTripPackage() {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/trip_package');

              case 2:
                res = _context3.sent;
                _context3.next = 5;
                return getAllTripPackageSuccess(dispatch, res);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};
var getTripPackage = function getTripPackage(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/trip_package/".concat(id));

              case 2:
                res = _context4.sent;
                _context4.next = 5;
                return getTripPackageSuccess(dispatch, res);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};
var getAllTrip = function getAllTrip() {
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/trips');

              case 2:
                res = _context5.sent;
                _context5.next = 5;
                return getAllTripSuccess(dispatch, res.data);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};
var getTrip = function getTrip(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/trip/".concat(id));

              case 2:
                res = _context6.sent;
                _context6.next = 5;
                return getTripSuccess(dispatch, res);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};
var getTripReviews = function getTripReviews(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/trip/".concat(id, "/reviews"));

              case 2:
                res = _context7.sent;
                _context7.next = 5;
                return getTripReviewsSuccess(dispatch, res);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

var orderTripSuccess = function orderTripSuccess() {
  localStorage.removeItem('group_size');
  localStorage.removeItem('price_trip');
  window.location.href = '/cart';
};

var getAllTripPackageSuccess = function getAllTripPackageSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_4__["GET_ALL_TRIP_PACKAGE"],
    payload: res.data
  });
};

var getTripPackageSuccess = function getTripPackageSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_4__["GET_TRIP_PACKAGE"],
    payload: res.data
  });
};

var getAllTripSuccess = function getAllTripSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_4__["GET_ALL_TRIP"],
    payload: res.data
  });
};

var getTripSuccess = function getTripSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_4__["GET_TRIP"],
    payload: res.data
  });
};

var getTripReviewsSuccess = function getTripReviewsSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_4__["GET_TRIP_REVIEWS"],
    payload: res.data
  });
};

/***/ }),

/***/ "./src/actions/UserActions.ts":
/*!************************************!*\
  !*** ./src/actions/UserActions.ts ***!
  \************************************/
/*! exports provided: updateDataProfile, getProfile, createAddress, getUserAddresses, getUserAddress, editProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDataProfile", function() { return updateDataProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAddress", function() { return createAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAddresses", function() { return getUserAddresses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAddress", function() { return getUserAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editProfile", function() { return editProfile; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./src/actions/types.ts");
/* harmony import */ var _AuthActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthActions */ "./src/actions/AuthActions.ts");



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var updateDataProfile = function updateDataProfile(_ref) {
  var prop = _ref.prop,
      value = _ref.value;
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__["UPDATE_DATA_PROFILE"],
      payload: {
        prop: prop,
        value: value
      }
    });
  };
};
var getProfile = function getProfile() {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/profile', {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem('token'))
                  }
                });

              case 3:
                res = _context.sent;
                _context.next = 6;
                return getProfileSuccess(dispatch, res);

              case 6:
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

                if (_context.t0.response.status === 401) {
                  dispatch(Object(_AuthActions__WEBPACK_IMPORTED_MODULE_5__["logout"])());
                }

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var createAddress = function createAddress(newData) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/address', querystring__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(newData), {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem('token'))
                  }
                });

              case 2:
                _context2.next = 4;
                return createAddressSuccess();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
var getUserAddresses = function getUserAddresses() {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/address', {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem('token'))
                  }
                });

              case 2:
                res = _context3.sent;
                _context3.next = 5;
                return getUserAddressesSuccess(dispatch, res);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};
var getUserAddress = function getUserAddress(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/address/".concat(id), {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem('token'))
                  }
                });

              case 2:
                res = _context4.sent;
                _context4.next = 5;
                return getUserAddressSuccess(dispatch, res);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};
var editProfile = function editProfile(newData) {
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(dispatch) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                data = {
                  name: newData.name,
                  email: newData.email,
                  phone: newData.phone
                };
                _context6.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/edit_profile', querystring__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(data), {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem('token'))
                  }
                });

              case 3:
                _context6.next = 5;
                return lodash_map__WEBPACK_IMPORTED_MODULE_1___default()(newData.editedUserAddress,
                /*#__PURE__*/
                function () {
                  var _ref7 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(data, index) {
                    var address;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            address = {
                              address: data.address,
                              postal_code: data.postal_code,
                              city_id: data.city_id,
                              province_id: data.province_id
                            };
                            _context5.next = 3;
                            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("/address/".concat(data.id), querystring__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(address), {
                              headers: {
                                Authorization: "Bearer ".concat(localStorage.getItem('token'))
                              }
                            });

                          case 3:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, this);
                  }));

                  return function (_x6, _x7) {
                    return _ref7.apply(this, arguments);
                  };
                }());

              case 5:
                _context6.next = 7;
                return editProfileSuccess();

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

var getProfileSuccess = function getProfileSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_4__["GET_PROFILE"],
    payload: res.data.user
  });
};

var createAddressSuccess = function createAddressSuccess() {
  window.location.reload();
};

var getUserAddressesSuccess = function getUserAddressesSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_4__["GET_USER_ADDRESSES"],
    payload: res.data
  });
};

var getUserAddressSuccess = function getUserAddressSuccess(dispatch, res) {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_4__["GET_USER_ADDRESS"],
    payload: res.data
  });
};

var editProfileSuccess = function editProfileSuccess() {
  window.location.reload();
};

/***/ }),

/***/ "./src/actions/index.ts":
/*!******************************!*\
  !*** ./src/actions/index.ts ***!
  \******************************/
/*! exports provided: updateDataShop, orderProduct, getAllProduct, getProduct, resetStateProduct, incrementQuantity, decrementQuantity, updateDataSignUp, signUp, signIn, logout, updateDataProfile, getProfile, createAddress, getUserAddresses, getUserAddress, editProfile, getAllBlog, getBlog, updateDataCheckout, getInfoMyCart, getAllCart, getAllPickupMethod, createInvoice, deleteOrderProduct, deleteOrderTrip, updateDataTrip, orderTrip, addDataGuest, removeDataGuest, getAllTripPackage, getTripPackage, getAllTrip, getTrip, getTripReviews, resetData, getAllProvince, getAllCities, getDeliveryCost, getUserReviews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopActions */ "./src/actions/ShopActions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateDataShop", function() { return _ShopActions__WEBPACK_IMPORTED_MODULE_0__["updateDataShop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderProduct", function() { return _ShopActions__WEBPACK_IMPORTED_MODULE_0__["orderProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllProduct", function() { return _ShopActions__WEBPACK_IMPORTED_MODULE_0__["getAllProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return _ShopActions__WEBPACK_IMPORTED_MODULE_0__["getProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetStateProduct", function() { return _ShopActions__WEBPACK_IMPORTED_MODULE_0__["resetStateProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "incrementQuantity", function() { return _ShopActions__WEBPACK_IMPORTED_MODULE_0__["incrementQuantity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decrementQuantity", function() { return _ShopActions__WEBPACK_IMPORTED_MODULE_0__["decrementQuantity"]; });

/* harmony import */ var _AuthActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthActions */ "./src/actions/AuthActions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateDataSignUp", function() { return _AuthActions__WEBPACK_IMPORTED_MODULE_1__["updateDataSignUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return _AuthActions__WEBPACK_IMPORTED_MODULE_1__["signUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return _AuthActions__WEBPACK_IMPORTED_MODULE_1__["signIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return _AuthActions__WEBPACK_IMPORTED_MODULE_1__["logout"]; });

/* harmony import */ var _UserActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserActions */ "./src/actions/UserActions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateDataProfile", function() { return _UserActions__WEBPACK_IMPORTED_MODULE_2__["updateDataProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return _UserActions__WEBPACK_IMPORTED_MODULE_2__["getProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAddress", function() { return _UserActions__WEBPACK_IMPORTED_MODULE_2__["createAddress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserAddresses", function() { return _UserActions__WEBPACK_IMPORTED_MODULE_2__["getUserAddresses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserAddress", function() { return _UserActions__WEBPACK_IMPORTED_MODULE_2__["getUserAddress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "editProfile", function() { return _UserActions__WEBPACK_IMPORTED_MODULE_2__["editProfile"]; });

/* harmony import */ var _BlogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlogActions */ "./src/actions/BlogActions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllBlog", function() { return _BlogActions__WEBPACK_IMPORTED_MODULE_3__["getAllBlog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBlog", function() { return _BlogActions__WEBPACK_IMPORTED_MODULE_3__["getBlog"]; });

/* harmony import */ var _CartAndCheckoutActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CartAndCheckoutActions */ "./src/actions/CartAndCheckoutActions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateDataCheckout", function() { return _CartAndCheckoutActions__WEBPACK_IMPORTED_MODULE_4__["updateDataCheckout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInfoMyCart", function() { return _CartAndCheckoutActions__WEBPACK_IMPORTED_MODULE_4__["getInfoMyCart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllCart", function() { return _CartAndCheckoutActions__WEBPACK_IMPORTED_MODULE_4__["getAllCart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllPickupMethod", function() { return _CartAndCheckoutActions__WEBPACK_IMPORTED_MODULE_4__["getAllPickupMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInvoice", function() { return _CartAndCheckoutActions__WEBPACK_IMPORTED_MODULE_4__["createInvoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteOrderProduct", function() { return _CartAndCheckoutActions__WEBPACK_IMPORTED_MODULE_4__["deleteOrderProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteOrderTrip", function() { return _CartAndCheckoutActions__WEBPACK_IMPORTED_MODULE_4__["deleteOrderTrip"]; });

/* harmony import */ var _TripActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TripActions */ "./src/actions/TripActions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateDataTrip", function() { return _TripActions__WEBPACK_IMPORTED_MODULE_5__["updateDataTrip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderTrip", function() { return _TripActions__WEBPACK_IMPORTED_MODULE_5__["orderTrip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addDataGuest", function() { return _TripActions__WEBPACK_IMPORTED_MODULE_5__["addDataGuest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDataGuest", function() { return _TripActions__WEBPACK_IMPORTED_MODULE_5__["removeDataGuest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllTripPackage", function() { return _TripActions__WEBPACK_IMPORTED_MODULE_5__["getAllTripPackage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTripPackage", function() { return _TripActions__WEBPACK_IMPORTED_MODULE_5__["getTripPackage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllTrip", function() { return _TripActions__WEBPACK_IMPORTED_MODULE_5__["getAllTrip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTrip", function() { return _TripActions__WEBPACK_IMPORTED_MODULE_5__["getTrip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTripReviews", function() { return _TripActions__WEBPACK_IMPORTED_MODULE_5__["getTripReviews"]; });

/* harmony import */ var _RajaongkirActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RajaongkirActions */ "./src/actions/RajaongkirActions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetData", function() { return _RajaongkirActions__WEBPACK_IMPORTED_MODULE_6__["resetData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllProvince", function() { return _RajaongkirActions__WEBPACK_IMPORTED_MODULE_6__["getAllProvince"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllCities", function() { return _RajaongkirActions__WEBPACK_IMPORTED_MODULE_6__["getAllCities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDeliveryCost", function() { return _RajaongkirActions__WEBPACK_IMPORTED_MODULE_6__["getDeliveryCost"]; });

/* harmony import */ var _ReviewActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReviewActions */ "./src/actions/ReviewActions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserReviews", function() { return _ReviewActions__WEBPACK_IMPORTED_MODULE_7__["getUserReviews"]; });










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

/***/ "./src/container/Common/Footer.tsx":
/*!*****************************************!*\
  !*** ./src/container/Common/Footer.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! routes */ "./routes.js");
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(routes__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-footer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/coffeetrip"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Coffee Trip")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/shop"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Shop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/blog"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Blog")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/howtoorder"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "How To Order")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "text-white"
      }, "Our Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-os-reg text-white text-m"
      }, "Jl. Gamelan No.6a, RW.09", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Turangga, Lengkong", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Kota Bandung, Jawa Barat 40264")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.instagram.com/kopi_florist/",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/img/instagram.png"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/img/facebook.png"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://twitter.com/kopi_florist",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/img/twitter.png"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-os-reg text-white text-m"
      }, "+62 813-1375-5587")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-os-reg text-white text-m"
      }, "sampurasun@kopiflorist.id"))))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/container/Common/Header.tsx":
/*!*****************************************!*\
  !*** ./src/container/Common/Header.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! routes */ "./routes.js");
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ModalAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModalAuth */ "./src/container/Common/ModalAuth.tsx");
/* harmony import */ var actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions/index */ "./src/actions/index.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.state = {
      isOpen: false,
      modal: false,
      active: '',
      token: ''
    };
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.logout = _this.logout.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var token = localStorage.getItem('token');
      this.setState({
        active: window.location.pathname,
        token: token
      });

      if (token) {
        this.props.getProfile();
        this.props.getInfoMyCart();
      }
    }
  }, {
    key: "logout",
    value: function logout() {
      this.props.logout();
    }
  }, {
    key: "toggleModal",
    value: function toggleModal() {
      this.setState({
        modal: !this.state.modal
      });
    }
  }, {
    key: "renderDropdown",
    value: function renderDropdown() {
      var profile = this.props.profile;
      if (!profile) return '';

      if (this.state.token) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledDropdown"], {
          className: "ml-auto",
          nav: true,
          inNavbar: true
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
          nav: true,
          caret: true
        }, profile.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
          right: true
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          route: "profile"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "My Account")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          route: "review"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Review")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
          divider: true
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
          onMouseDown: this.logout
        }, "Sign Out")));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        onMouseDown: this.toggleModal
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Signin/Signup")));
    }
  }, {
    key: "render",
    value: function render() {
      var myCart = this.props.myCart;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        style: {
          marginTop: '10px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
        color: "none",
        light: true,
        expand: "md"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        route: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid logo",
        src: "/static/img/logo.png",
        alt: "Kopi Florist"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
        id: "dropdown"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledCollapse"], {
        toggler: "#dropdown",
        navbar: true,
        className: "text-hel-reg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
        className: "ml-4 mt-3",
        navbar: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        className: "pr-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        route: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        active: this.state.active.includes('/about')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "About")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        className: "pr-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        route: "/coffee_trip"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        active: this.state.active.includes('/coffee_trip')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Coffee Trip")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        className: "pr-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        route: "/shop"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        active: this.state.active.includes('/shop')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Shop")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        className: "pr-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        route: "/blog"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        active: this.state.active.includes('/blog')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Blog")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        className: "pr-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        route: "/howtoorder"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        active: this.state.active.includes('/howtoorder')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "How To Order"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
        className: "ml-auto mt-3",
        navbar: true
      }, this.state.token ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        route: "cart"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Cart(", myCart !== null ? myCart.item_count : 0, ")")))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), this.renderDropdown()))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          borderBottom: '1px solid #979797',
          marginTop: '10px',
          marginBottom: '50px'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModalAuth__WEBPACK_IMPORTED_MODULE_4__["default"], {
        modal: this.state.modal,
        toggleModal: this.toggleModal
      })));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var user = _ref.user,
      cartcheckout = _ref.cartcheckout;
  var profile = user.profile;
  var myCart = cartcheckout.myCart;
  return {
    profile: profile,
    myCart: myCart
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getProfile: actions_index__WEBPACK_IMPORTED_MODULE_5__["getProfile"],
  getInfoMyCart: actions_index__WEBPACK_IMPORTED_MODULE_5__["getInfoMyCart"],
  logout: actions_index__WEBPACK_IMPORTED_MODULE_5__["logout"]
})(Header));

/***/ }),

/***/ "./src/container/Common/ModalAuth.tsx":
/*!********************************************!*\
  !*** ./src/container/Common/ModalAuth.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! routes */ "./routes.js");
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions/index */ "./src/actions/index.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var ModalAuth =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalAuth, _Component);

  function ModalAuth(props) {
    var _this;

    _classCallCheck(this, ModalAuth);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalAuth).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputChange", function (e) {
      if (e.target.id === 'organization') {
        if (e.target.value === 'company') {
          _this.setState({
            organization: true
          });

          return;
        }

        if (e.target.value === 'personal') {
          _this.setState({
            organization: false
          });

          return;
        }
      }

      _this.props.updateDataSignUp({
        prop: e.target.id,
        value: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onRegisterSubmit", function (e) {
      e.preventDefault();
      var auth = _this.props.auth;

      if (auth.name !== '' && auth.email !== '' && auth.password !== '' && auth.phone !== 0 && auth.gender !== '') {
        if (_this.state.organization && auth.company_name !== '') {
          _this.props.signUp(_this.props.auth);

          return;
        }

        _this.props.signUp(_this.props.auth);

        return;
      }

      _this.setState({
        errorMessage: 'Please fill all blank field'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLoginSubmit", function (e) {
      e.preventDefault();
      var auth = _this.props.auth;

      if (auth.email !== '' && auth.password !== '') {
        _this.props.signIn(_this.props.auth);

        return;
      }

      _this.setState({
        errorMessage: 'Please fill all blank field'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeModal", function () {
      _this.setState(function (previousState) {
        return {
          register: !previousState.register
        };
      });
    });

    _this.state = {
      register: false,
      organization: false,
      errorMessage: '' // this.onInputChange = this.onInputChange.bind(this)
      // this.onRegisterSubmit = this.onRegisterSubmit.bind(this)
      // this.onLoginSubmit = this.onLoginSubmit.bind(this)
      // this.changeModal = this.changeModal.bind(this)

    };
    return _this;
  }

  _createClass(ModalAuth, [{
    key: "renderModalBody",
    value: function renderModalBody(register) {
      if (register) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], null, "Sign up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null, this.state.errorMessage !== '' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "alert alert-danger",
          role: "alert"
        }, this.state.errorMessage) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
          onSubmit: this.onRegisterSubmit
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
          for: "name"
        }, "Nama"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          type: "text",
          name: "name",
          id: "name",
          placeholder: "John Doe",
          autoFocus: true,
          onChange: this.onInputChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
          for: "organization"
        }, "Organization"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          type: "select",
          id: "organization",
          onChange: this.onInputChange
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "personal"
        }, "Personal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "company"
        }, "Company"))), this.state.organization ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
          for: "company_name"
        }, "Company Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          type: "text",
          name: "company_name",
          id: "company_name",
          onChange: this.onInputChange
        })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
          for: "email"
        }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          type: "email",
          name: "email",
          id: "email",
          placeholder: "example@mail.com",
          onChange: this.onInputChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
          for: "password"
        }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          type: "password",
          name: "password",
          id: "password",
          placeholder: "********",
          onChange: this.onInputChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
          for: "phone"
        }, "Phone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          type: "text",
          name: "phone",
          id: "phone",
          placeholder: "08xxxxxxxxxx",
          onChange: this.onInputChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
          for: "gender"
        }, "Gender"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          type: "select",
          id: "gender",
          onChange: this.onInputChange
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          defaultChecked: true
        }, "Select"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: 'male'
        }, "Male"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: 'female'
        }, "Female"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          className: "float-right pr-5 pl-5 button-yellow"
        }, "Sign Up")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "clearfix"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "float-right clearfix"
        }, "Have account? ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "text-black",
          onMouseDown: this.changeModal
        }, "Sign In"), " here")));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], null, "Sign in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null, this.state.errorMessage !== '' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "alert alert-danger",
          role: "alert"
        }, this.state.errorMessage) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
          onSubmit: this.onLoginSubmit
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
          for: "email"
        }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          type: "email",
          name: "email",
          id: "email",
          placeholder: "example@mail.com",
          autoFocus: true,
          onChange: this.onInputChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
          for: "password"
        }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          type: "password",
          name: "email",
          id: "password",
          placeholder: "********",
          onChange: this.onInputChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
          className: "clearfix mb-5"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          route: "#"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "float-right text-yellow"
        }, "Forgot Password"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          className: "float-right pr-5 pl-5 button-yellow"
        }, "Sign in")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "clearfix"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "float-right"
        }, "or ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "text-black",
          onMouseDown: this.changeModal
        }, "Sign Up"), " here"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "clearfix"
        })));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        isOpen: this.props.modal,
        toggle: this.props.toggleModal,
        contentClassName: "border-modal"
      }, this.renderModalBody(this.state.register));
    }
  }]);

  return ModalAuth;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  updateDataSignUp: actions_index__WEBPACK_IMPORTED_MODULE_4__["updateDataSignUp"],
  signUp: actions_index__WEBPACK_IMPORTED_MODULE_4__["signUp"],
  signIn: actions_index__WEBPACK_IMPORTED_MODULE_4__["signIn"]
})(ModalAuth));

/***/ }),

/***/ "./src/container/User/Profile.tsx":
/*!****************************************!*\
  !*** ./src/container/User/Profile.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/filter */ "lodash/filter");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! routes */ "./routes.js");
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! actions/index */ "./src/actions/index.ts");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var MyAccount =
/*#__PURE__*/
function (_Component) {
  _inherits(MyAccount, _Component);

  function MyAccount(props) {
    var _this;

    _classCallCheck(this, MyAccount);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyAccount).call(this, props));
    _this.state = {
      isFormShow: false,
      active: ''
    };
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onAddAddressClicked = _this.onAddAddressClicked.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onAddressSubmit = _this.onAddressSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MyAccount, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        active: window.location.pathname
      });
      this.props.getProfile();
      this.props.getUserAddresses();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(e) {
      if (e.target.id === 'province') {
        var province = lodash_filter__WEBPACK_IMPORTED_MODULE_1___default()(this.props.provinces, function (data) {
          if (data.province_id === e.target.value) return data;
        });

        this.props.getAllCities(Number(province[0].province_id));
        this.props.updateDataProfile({
          prop: 'province_id',
          value: Number(province[0].province_id)
        });
        this.props.updateDataProfile({
          prop: 'postal_code',
          value: 0
        });
      }

      if (e.target.id === 'city') {
        var city = lodash_filter__WEBPACK_IMPORTED_MODULE_1___default()(this.props.cities, function (data) {
          if (data.city_id === e.target.value) return data;
        });

        this.props.updateDataProfile({
          prop: 'city_id',
          value: Number(city[0].city_id)
        });
      }

      if (e.target.id === 'address' || e.target.id === 'postal_code') {
        this.props.updateDataProfile({
          prop: e.target.id,
          value: e.target.value
        });
      }
    }
  }, {
    key: "onAddAddressClicked",
    value: function onAddAddressClicked() {
      this.setState(function (prevState) {
        return {
          isFormShow: !prevState.isFormShow
        };
      });
      this.props.getAllProvince();
    }
  }, {
    key: "onAddressSubmit",
    value: function onAddressSubmit(e) {
      e.preventDefault();
      var user = this.props.user;
      var data = {
        address: user.address,
        postal_code: user.postal_code,
        city_id: user.city_id,
        province_id: user.province_id
      };
      this.props.createAddress(data);
    }
  }, {
    key: "renderProvinces",
    value: function renderProvinces() {
      var provinces = this.props.provinces;
      return lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(provinces, function (data) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
          key: data.province_id,
          value: data.province_id
        }, data.province);
      });
    }
  }, {
    key: "renderCities",
    value: function renderCities() {
      var cities = this.props.cities;
      return lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(cities, function (data, index) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
          key: index,
          value: data.city_id
        }, data.type, " ", data.city_name);
      });
    }
  }, {
    key: "renderFormAddress",
    value: function renderFormAddress() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        onSubmit: this.onAddressSubmit,
        className: "mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: "6"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
        for: "address"
      }, "Address"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        type: "text",
        id: "address",
        onChange: this.onInputChange
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: "6"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
        for: "province"
      }, "Province"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        type: "select",
        id: "province",
        onChange: this.onInputChange
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
        defaultChecked: true
      }), this.renderProvinces()))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: "6"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
        for: "city"
      }, "City"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        type: "select",
        id: "city",
        onChange: this.onInputChange
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
        defaultChecked: true
      }), this.renderCities()))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: "6"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
        for: "postal_code"
      }, "Postal Code"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        type: "number",
        id: "postal_code",
        onChange: this.onInputChange
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: "button-yellow"
      }, "Add"));
    }
  }, {
    key: "render",
    value: function render() {
      var profile = this.props.profile;
      if (!profile) return '';
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: "10"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "text-reg-95 text-black text-xl"
      }, "My Account")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: "2"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        route: "editprofile"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: "button-yellow"
      }, "Edit Profile")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: "3"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        className: "list-profile"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        route: "profile"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        className: this.state.active.includes('/profile') ? 'text-yellow' : ''
      }, "Account")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "Order History"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: "5"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "text-m text-hel-reg"
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "text-ml text-os-reg text-black-light"
      }, profile.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "text-m text-hel-reg"
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "text-ml text-os-reg text-black-light"
      }, profile.email), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "text-m text-hel-reg"
      }, "Phone"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "text-ml text-os-reg text-black-light"
      }, profile.phone), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "text-m text-hel-reg"
      }, "Address"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], null, lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(profile.address, function (data, index) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroupItem"], {
          key: index,
          className: "text-ml text-os-reg text-black-light"
        }, "".concat(data.address, ", ").concat(data.city, ", ").concat(data.province, ", ").concat(data.postal_code));
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: "text-s text-os-reg mt-2 button-yellow",
        onMouseDown: this.onAddAddressClicked
      }, this.state.isFormShow ? 'Cancel' : '+ Add Address'), this.state.isFormShow ? this.renderFormAddress() : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null))));
    }
  }]);

  return MyAccount;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var user = _ref.user,
      rajaongkir = _ref.rajaongkir;
  var profile = user.profile;
  var provinces = rajaongkir.provinces,
      cities = rajaongkir.cities;
  return {
    user: user,
    profile: profile,
    provinces: provinces,
    cities: cities
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  getProfile: actions_index__WEBPACK_IMPORTED_MODULE_6__["getProfile"],
  getUserAddresses: actions_index__WEBPACK_IMPORTED_MODULE_6__["getUserAddresses"],
  getAllProvince: actions_index__WEBPACK_IMPORTED_MODULE_6__["getAllProvince"],
  getAllCities: actions_index__WEBPACK_IMPORTED_MODULE_6__["getAllCities"],
  updateDataProfile: actions_index__WEBPACK_IMPORTED_MODULE_6__["updateDataProfile"],
  createAddress: actions_index__WEBPACK_IMPORTED_MODULE_6__["createAddress"]
})(MyAccount));

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/profile.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/profile.tsx */"./pages/profile.tsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lodash/filter":
/*!********************************!*\
  !*** external "lodash/filter" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/filter");

/***/ }),

/***/ "lodash/map":
/*!*****************************!*\
  !*** external "lodash/map" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/map");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

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

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=profile.js.map