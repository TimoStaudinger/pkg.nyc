(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.module.css */ "./components/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\git\\pkg.nyc\\components\\Card.js";



const Card = ({
  className,
  centered = false,
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: `${(_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().card)} ${centered ? (_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().centered) : ''} ${className || ''}`,
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _LoginForm_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginForm.module.css */ "./components/LoginForm.module.css");
/* harmony import */ var _LoginForm_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\git\\pkg.nyc\\components\\LoginForm.js";






const LoginForm = ({
  hasError,
  onSubmit
}) => {
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (hasError) {
      setUsername('');
      setPassword('');
      if (inputRef.current) inputRef.current.focus();
    }
  }, [hasError]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_4__.default, {
    centered: true,
    className: `${hasError ? 'animated shake' : ''}`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: () => onSubmit(username, password),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        placeholder: "Email",
        type: "email",
        className: (_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
        value: username,
        onChange: e => setUsername(e.target.value),
        autoFocus: true,
        ref: inputRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        placeholder: "Password",
        type: "password",
        className: (_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
        value: password,
        onChange: e => setPassword(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        className: `${(_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().submit)} ${username.length && password.length ? (_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().submitActive) : ''}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArrowRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/Message.js":
/*!*******************************!*\
  !*** ./components/Message.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _Message_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message.module.css */ "./components/Message.module.css");
/* harmony import */ var _Message_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Message_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\git\\pkg.nyc\\components\\Message.js";




const Message = ({
  text
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__.default, {
  centered: true,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    className: (_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().text),
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./components/Packages.js":
/*!********************************!*\
  !*** ./components/Packages.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message */ "./components/Message.js");
/* harmony import */ var _logos_lasership_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logos/lasership.png */ "./components/logos/lasership.png");
/* harmony import */ var _logos_usps_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logos/usps.png */ "./components/logos/usps.png");
/* harmony import */ var _logos_ups_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logos/ups.png */ "./components/logos/ups.png");
/* harmony import */ var _logos_laundry_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logos/laundry.png */ "./components/logos/laundry.png");
/* harmony import */ var _logos_pharmacy_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logos/pharmacy.png */ "./components/logos/pharmacy.png");
/* harmony import */ var _Packages_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Packages.module.css */ "./components/Packages.module.css");
/* harmony import */ var _Packages_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Packages_module_css__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\git\\pkg.nyc\\components\\Packages.js";










const getIconPath = carrier => {
  carrier = carrier.toLowerCase();
  if (carrier.includes('lasership')) return _logos_lasership_png__WEBPACK_IMPORTED_MODULE_4__.default;
  if (carrier.includes('usps')) return _logos_usps_png__WEBPACK_IMPORTED_MODULE_5__.default;
  if (carrier.includes('ups')) return _logos_ups_png__WEBPACK_IMPORTED_MODULE_6__.default;
  if (carrier.includes('laundry')) return _logos_laundry_png__WEBPACK_IMPORTED_MODULE_7__.default;
  if (carrier.includes('pharmacy')) return _logos_pharmacy_png__WEBPACK_IMPORTED_MODULE_8__.default;
};

const Packages = ({
  packages
}) => packages && packages.length > 0 ? packages.map(pkg => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__.default, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    className: (_Packages_module_css__WEBPACK_IMPORTED_MODULE_9___default().carrierIcon),
    src: getIconPath(pkg.carrier)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    className: (_Packages_module_css__WEBPACK_IMPORTED_MODULE_9___default().carrier),
    children: pkg.carrier
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    className: (_Packages_module_css__WEBPACK_IMPORTED_MODULE_9___default().date),
    children: pkg.date
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    className: (_Packages_module_css__WEBPACK_IMPORTED_MODULE_9___default().text),
    children: pkg.text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 27,
  columnNumber: 7
}, undefined)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Message__WEBPACK_IMPORTED_MODULE_3__.default, {
  text: "No new packages! \uD83D\uDE1E"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 35,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Packages);

/***/ }),

/***/ "./components/Spinner.js":
/*!*******************************!*\
  !*** ./components/Spinner.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _octopus_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./octopus.png */ "./components/octopus.png");
/* harmony import */ var _Spinner_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Spinner.module.css */ "./components/Spinner.module.css");
/* harmony import */ var _Spinner_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Spinner_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\git\\pkg.nyc\\components\\Spinner.js";





const Spinner = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__.default, {
  centered: true,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Spinner_module_css__WEBPACK_IMPORTED_MODULE_4___default().spinner),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: (_Spinner_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon),
      src: _octopus_png__WEBPACK_IMPORTED_MODULE_3__.default
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./components/Toolbar.js":
/*!*******************************!*\
  !*** ./components/Toolbar.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Toolbar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toolbar.module.css */ "./components/Toolbar.module.css");
/* harmony import */ var _Toolbar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Toolbar_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\git\\pkg.nyc\\components\\Toolbar.js";



const Toolbar = ({
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: (_Toolbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().toolbar),
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 33
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./components/ToolbarItem.js":
/*!***********************************!*\
  !*** ./components/ToolbarItem.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ToolbarItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToolbarItem.module.css */ "./components/ToolbarItem.module.css");
/* harmony import */ var _ToolbarItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ToolbarItem_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\git\\pkg.nyc\\components\\ToolbarItem.js";




const ToolbarItem = ({
  title,
  icon,
  onClick
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
  title: title,
  onClick: onClick,
  className: (_ToolbarItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: icon
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (ToolbarItem);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Packages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Packages */ "./components/Packages.js");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Message */ "./components/Message.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner.js");
/* harmony import */ var _components_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Toolbar */ "./components/Toolbar.js");
/* harmony import */ var _components_ToolbarItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ToolbarItem */ "./components/ToolbarItem.js");
/* harmony import */ var _styles_App_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/App.module.css */ "./styles/App.module.css");
/* harmony import */ var _styles_App_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_App_module_css__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\git\\pkg.nyc\\pages\\index.js";









const OK = 200;
const UNAUTHORIZED = 401;
const INTERNAL_SERVER_ERROR = 500;
const ERROR_MESSAGE = 'Oops, something went wrong. Please try again later! 🤕';

const getStoredToken = () => {
  var _ref;

  return (_ref = typeof localStorage !== 'undefined' && localStorage.getItem('token')) !== null && _ref !== void 0 ? _ref : null;
};

const setStoredToken = token => token === null ? localStorage.removeItem('token') : localStorage.setItem('token', token);

const fetchPackages = async token => {
  try {
    const response = await fetch('/api/pkg', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status === OK) {
      return await response.json();
    } else {
      throw response;
    }
  } catch (err) {
    console.error(err);
    return Promise.reject(err && err.status || INTERNAL_SERVER_ERROR);
  }
};

const Home = () => {
  const {
    0: packages,
    1: setPackages
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: token,
    1: setToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getStoredToken());
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: isLoginError,
    1: setIsLoginError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const logout = () => {
    setToken(null);
    setStoredToken(null);
  };

  const login = async (username, password) => {
    try {
      logout();
      setIsLoginError(false);
      setIsLoading(true);
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password
        })
      });

      if (response.status === UNAUTHORIZED) {
        setIsLoginError(true);
        setIsLoading(false);
      } else if (response.status === OK) {
        const token = await response.text();
        setToken(token);
        setStoredToken(token);
      } else {
        setError(ERROR_MESSAGE);
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
      setError(ERROR_MESSAGE);
      setIsLoading(false);
    }
  };

  const refreshPackages = async () => {
    if (token) {
      setIsLoading(true);

      try {
        setPackages(await fetchPackages(token));
      } catch (status) {
        if (status === UNAUTHORIZED) logout();else setError(ERROR_MESSAGE);
      }

      setIsLoading(false);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    refreshPackages();
  }, [token]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_App_module_css__WEBPACK_IMPORTED_MODULE_9___default().app),
    children: [error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Message__WEBPACK_IMPORTED_MODULE_5__.default, {
      text: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }, undefined) : isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }, undefined) : token === null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginForm__WEBPACK_IMPORTED_MODULE_4__.default, {
      onSubmit: login,
      hasError: isLoginError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Packages__WEBPACK_IMPORTED_MODULE_3__.default, {
      packages: packages
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Toolbar__WEBPACK_IMPORTED_MODULE_7__.default, {
      children: token !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToolbarItem__WEBPACK_IMPORTED_MODULE_8__.default, {
        title: "Sign off",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSignOutAlt,
        onClick: logout
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./components/logos/lasership.png":
/*!****************************************!*\
  !*** ./components/logos/lasership.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/components/logos/lasership.45a792d4d8ec5baa29a728966fc93b1a.png","height":1000,"width":1000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAtklEQVR4nG1PSwrCQAx9aTtgEdy5Er9YreBSryS4Ei8hHkG8kp+upAvFAwheYDqdmIzgygeP5CWPfKgY5B4ACVkYwPxLQUU2ZxgjaQCztWDriCJVYrgAXmKARoMYSTZTE2qZS+Vm65vLBaI0lRbwPJ1R7ndIhxO0xUS31dqbbgeUJIiEr/sD7+MBjVGOlvP/VrQQj3vgysHrCjnSI5bhIhRsK8DVX80guvan+mYAkValHt4UReAP6w1Cg2uepLYAAAAASUVORK5CYII="});

/***/ }),

/***/ "./components/logos/laundry.png":
/*!**************************************!*\
  !*** ./components/logos/laundry.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/components/logos/laundry.7b6d3f025e5ec5271832995e91ce9fb6.png","height":700,"width":700,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEXe6/L1vpD2vIr+qDL+qDH/pyz+pyj+piT/owD/oQDv+//w8/Xq9Pje6/Lj29fj29bc2tn4x6D3wJL0wJX0wJTpwKj1vpDovqf2vIv5uoDwq4fwq4b0rmz0rWz9qT3+qDH+pyj/ph3/phvtm2r/pgDtmmn/pQD/ogD/oQD/oAD/nwCDNw8bAAAACnRSTlP+/v7+/v7+/v7+LPRBhQAAAElJREFUeNoFQIURgCAAfFtMwMQAwSD2H9BDkZWJKrMCKZm7PnIKVtSU1sIisGqZKhbgebNvDfcgcfveWB2MHM9jkAa5ds9H9PUDp2MFZZTAcRIAAAAASUVORK5CYII="});

/***/ }),

/***/ "./components/logos/pharmacy.png":
/*!***************************************!*\
  !*** ./components/logos/pharmacy.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/components/logos/pharmacy.be5a3e7d70725c4c62de99ee356eec36.png","height":700,"width":700,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAhFBMVEWyyeaWyf+cxP6bxP+dw/2cw/6bw/6Xwv+Vw/+QwP/eAAD/6gDk2JH/1Tb+1wD+1gC/yNPDxMvDw8yXyv+ZyP+Wyf+Zx/+dxP2bxP+dw/2cw/6cw/2Tx/+bw/6Txv+Vw/+Rwv+QwP+mseasotOxmc2vmcztkADrjwDCb47kL0rcKADbJQDVySPwAAAAC3RSTlP+/v7+/v7+/v7+/hX5s3gAAABJSURBVHjaBUAHFkAgAP32ClEaiMgI97+fhzArcplGCTIQamOjsJGq6RZtsNK2vg6mIW1/P6/jSOP5/Eo/QBnNnN8FEmUmHojxB6lIBV39B5AdAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./components/logos/ups.png":
/*!**********************************!*\
  !*** ./components/logos/ups.png ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/components/logos/ups.ab4aec5e26ab0b5e411b98e0646524f6.png","height":1000,"width":1000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA20lEQVR42iXBPUtCYQCG4fs5H0hwIEMz+nCREFoCLaQh2hv7ew39DRfHiEraCiQqIswhjmVYWXR6nwavS516JeS59DADwMxpqwxZZieTibTXso8Pf1nKAm8fEfejyN2LmLsnKbqdwtF+QWO1oNtPddJNdf0Y0W4GhjkkgJ/HkYpBSnMjeLvxh0BnNwmZcALIAbc2C4UA05lIY6gu2kOjpAKMXkXvKnW9ZvUHMctlO38XC4B21qq28UE7UCubr2/x+QO984hSydLueiUES+MX6LTtJIbTS6m2ApL9D8Q/XzSzU7DkAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./components/logos/usps.png":
/*!***********************************!*\
  !*** ./components/logos/usps.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/components/logos/usps.df40afd97edeea18844d007bd1d5987c.png","height":1000,"width":1000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7UlEQVR42h2Pu2oCYRSET2UpWPoAlup6v7BomSaFpEkRCQR21zW2aXwA62CXNg+gbdKIgsSEEBCLJRJSS9AIotbfr3uK4cxhZopPslmXfN4zluWSTDqEf6nUolhsqZdczjPptGNs+97U6x0tRSI3JhZrmnAo4bJW69DtPjIcvjKfB6xWfwTBD7bdRkQumUw+MMYwGLzQ6z0xnX6yWHwTj98i0WiTzWarhdnsi/H4ncPhqFfkAmk0HhiN3lTL5S/r9T+73Z5+/xmRKySTcRG5plptk0o5oVclEncUCp5SUKn4WJbinhF9ymX/HComJ4lmk3X+1C9jAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./components/octopus.png":
/*!********************************!*\
  !*** ./components/octopus.png ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/components/octopus.432d11757bbae280388cb6a908ab9fab.png","height":128,"width":136,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABA0lEQVR42gVAu0rDUBj+/pNb2ySmxWiwKRKRUsRB0N3JIgougqMvoeLo7KCTIL6Ek5ujk5ODOGoHpYtICWnanNzOLzS5OlpGmXez8dvIcnv3INgo0nPRiSJq2J86p5NdVvWgtRBugeiEmcGG3WeZPHEWrwtYztBAbU0LdRjPJbIapQJtopI5SOwLkBaIWnpzaiXSXsFPUhqKkZKqDGp6oRDtpYfScA/8aJDH20P0fB8mZyU7wRnM5qMOOVMQ5iv9fp2uSgm9mkLpToda7QsAt9rljt8koW2AaGb8vbtCb4y5Lr6JNCKzUYnFm5cPLexfg1VZW8EeC/OYbH9Etnenddee/wHlkGUQpJiyjQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./components/Card.module.css":
/*!************************************!*\
  !*** ./components/Card.module.css ***!
  \************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"card": "Card_card__Onj16",
	"centered": "Card_centered__1ii8H"
};


/***/ }),

/***/ "./components/LoginForm.module.css":
/*!*****************************************!*\
  !*** ./components/LoginForm.module.css ***!
  \*****************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"input": "LoginForm_input__3mUkF",
	"submit": "LoginForm_submit__eiJ8D",
	"submitActive": "LoginForm_submitActive__1FY_w",
	"title": "LoginForm_title__nY2Pi"
};


/***/ }),

/***/ "./components/Message.module.css":
/*!***************************************!*\
  !*** ./components/Message.module.css ***!
  \***************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"text": "Message_text__29dh9"
};


/***/ }),

/***/ "./components/Packages.module.css":
/*!****************************************!*\
  !*** ./components/Packages.module.css ***!
  \****************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"carrierIcon": "Packages_carrierIcon__1FUvd",
	"carrier": "Packages_carrier__zMefk",
	"date": "Packages_date__2Qiwb",
	"text": "Packages_text__LG5D5"
};


/***/ }),

/***/ "./components/Spinner.module.css":
/*!***************************************!*\
  !*** ./components/Spinner.module.css ***!
  \***************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"spinner": "Spinner_spinner__1XTQC",
	"icon": "Spinner_icon__1iu0d",
	"swim": "Spinner_swim__3Im3O"
};


/***/ }),

/***/ "./components/Toolbar.module.css":
/*!***************************************!*\
  !*** ./components/Toolbar.module.css ***!
  \***************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"toolbar": "Toolbar_toolbar__2BZgR"
};


/***/ }),

/***/ "./components/ToolbarItem.module.css":
/*!*******************************************!*\
  !*** ./components/ToolbarItem.module.css ***!
  \*******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"button": "ToolbarItem_button__1fk-f"
};


/***/ }),

/***/ "./styles/App.module.css":
/*!*******************************!*\
  !*** ./styles/App.module.css ***!
  \*******************************/
/***/ (function(module) {

// Exports
module.exports = {
	"app": "App_app__2GyG8"
};


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wa2cvLi9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vcGtnLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vcGtnLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzIiwid2VicGFjazovL3BrZy8uL2NvbXBvbmVudHMvUGFja2FnZXMuanMiLCJ3ZWJwYWNrOi8vcGtnLy4vY29tcG9uZW50cy9TcGlubmVyLmpzIiwid2VicGFjazovL3BrZy8uL2NvbXBvbmVudHMvVG9vbGJhci5qcyIsIndlYnBhY2s6Ly9wa2cvLi9jb21wb25lbnRzL1Rvb2xiYXJJdGVtLmpzIiwid2VicGFjazovL3BrZy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3BrZy8uL2NvbXBvbmVudHMvbG9nb3MvbGFzZXJzaGlwLnBuZyIsIndlYnBhY2s6Ly9wa2cvLi9jb21wb25lbnRzL2xvZ29zL2xhdW5kcnkucG5nIiwid2VicGFjazovL3BrZy8uL2NvbXBvbmVudHMvbG9nb3MvcGhhcm1hY3kucG5nIiwid2VicGFjazovL3BrZy8uL2NvbXBvbmVudHMvbG9nb3MvdXBzLnBuZyIsIndlYnBhY2s6Ly9wa2cvLi9jb21wb25lbnRzL2xvZ29zL3VzcHMucG5nIiwid2VicGFjazovL3BrZy8uL2NvbXBvbmVudHMvb2N0b3B1cy5wbmciLCJ3ZWJwYWNrOi8vcGtnLy4vY29tcG9uZW50cy9DYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcGtnLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9wa2cvLi9jb21wb25lbnRzL01lc3NhZ2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9wa2cvLi9jb21wb25lbnRzL1BhY2thZ2VzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcGtnLy4vY29tcG9uZW50cy9TcGlubmVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcGtnLy4vY29tcG9uZW50cy9Ub29sYmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcGtnLy4vY29tcG9uZW50cy9Ub29sYmFySXRlbS5tb2R1bGUuY3NzIiwid2VicGFjazovL3BrZy8uL3N0eWxlcy9BcHAubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9wa2cvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly9wa2cvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly9wa2cvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BrZy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNhcmQiLCJjbGFzc05hbWUiLCJjZW50ZXJlZCIsImNoaWxkcmVuIiwic3R5bGVzIiwiTG9naW5Gb3JtIiwiaGFzRXJyb3IiLCJvblN1Ym1pdCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJpbnB1dFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJmb2N1cyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsImZhQXJyb3dSaWdodCIsIk1lc3NhZ2UiLCJ0ZXh0IiwiZ2V0SWNvblBhdGgiLCJjYXJyaWVyIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIkxhc2Vyc2hpcEljb24iLCJVU1BTSWNvbiIsIlVQU0ljb24iLCJMYXVuZHJ5SWNvbiIsIlBoYXJtYWN5SWNvbiIsIlBhY2thZ2VzIiwicGFja2FnZXMiLCJtYXAiLCJwa2ciLCJkYXRlIiwiU3Bpbm5lciIsIm9jdG9wdXMiLCJUb29sYmFyIiwiVG9vbGJhckl0ZW0iLCJ0aXRsZSIsImljb24iLCJvbkNsaWNrIiwiT0siLCJVTkFVVEhPUklaRUQiLCJJTlRFUk5BTF9TRVJWRVJfRVJST1IiLCJFUlJPUl9NRVNTQUdFIiwiZ2V0U3RvcmVkVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0U3RvcmVkVG9rZW4iLCJ0b2tlbiIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwiZmV0Y2hQYWNrYWdlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwiSG9tZSIsInNldFBhY2thZ2VzIiwic2V0VG9rZW4iLCJzZXRFcnJvciIsImlzTG9naW5FcnJvciIsInNldElzTG9naW5FcnJvciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImxvZ291dCIsImxvZ2luIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWZyZXNoUGFja2FnZXMiLCJmYVNpZ25PdXRBbHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUNDLFdBQUQ7QUFBWUMsVUFBUSxHQUFHLEtBQXZCO0FBQThCQztBQUE5QixDQUFELGtCQUNYO0FBQ0UsV0FBUyxFQUFHLEdBQUVDLDhEQUFZLElBQUdGLFFBQVEsR0FBR0Usa0VBQUgsR0FBcUIsRUFBRyxJQUMzREgsU0FBUyxJQUFJLEVBQ2QsRUFISDtBQUFBLFlBS0dFO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQVVBLCtEQUFlSCxJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLE1BQU1LLFNBQVMsR0FBRyxDQUFDO0FBQUNDLFVBQUQ7QUFBV0M7QUFBWCxDQUFELEtBQTBCO0FBQzFDLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFFQSxRQUFNRyxRQUFRLEdB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QUFBQSxlQURGO0FBbUJELENBN0VEOztBQStFQSwrREFBZVIsSUFBZixFOzs7Ozs7Ozs7Ozs7QUN6SEEsK0RBQWdCLENBQUMscUpBQXFKLHlVQUF5VSxFOzs7Ozs7Ozs7Ozs7QUNBL2UsK0RBQWdCLENBQUMsaUpBQWlKLGlaQUFpWixFOzs7Ozs7Ozs7Ozs7QUNBbmpCLCtEQUFnQixDQUFDLGtKQUFrSixxWkFBcVosRTs7Ozs7Ozs7Ozs7O0FDQXhqQiwrREFBZ0IsQ0FBQywrSUFBK0kseVhBQXlYLEU7Ozs7Ozs7Ozs7OztBQ0F6aEIsK0RBQWdCLENBQUMsZ0pBQWdKLGlaQUFpWixFOzs7Ozs7Ozs7Ozs7QUNBbGpCLCtEQUFnQixDQUFDLDJJQUEySSxpYkFBaWIsRTs7Ozs7Ozs7OztBQ0E3a0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBLCtEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NhcmQubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IENhcmQgPSAoe2NsYXNzTmFtZSwgY2VudGVyZWQgPSBmYWxzZSwgY2hpbGRyZW59KSA9PiAoXHJcbiAgPGRpdlxyXG4gICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZH0gJHtjZW50ZXJlZCA/IHN0eWxlcy5jZW50ZXJlZCA6ICcnfSAke1xyXG4gICAgICBjbGFzc05hbWUgfHwgJydcclxuICAgIH1gfVxyXG4gID5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQge2ZhQXJyb3dSaWdodH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9naW5Gb3JtLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoe2hhc0Vycm9yLCBvblN1Ym1pdH0pID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaGFzRXJyb3IpIHtcclxuICAgICAgc2V0VXNlcm5hbWUoJycpXHJcbiAgICAgIHNldFBhc3N3b3JkKCcnKVxyXG5cclxuICAgICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKVxyXG4gICAgfVxyXG4gIH0sIFtoYXNFcnJvcl0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjZW50ZXJlZCBjbGFzc05hbWU9e2Ake2hhc0Vycm9yID8gJ2FuaW1hdGVkIHNoYWtlJyA6ICcnfWB9PlxyXG4gICAgICB7LyogPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlBhY2thZ2VzPC9wPiAqL31cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9eygpID0+IG9uU3VibWl0KHVzZXJuYW1lLCBwYXNzd29yZCl9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc3VibWl0fSAke1xyXG4gICAgICAgICAgICB1c2VybmFtZS5sZW5ndGggJiYgcGFzc3dvcmQubGVuZ3RoID8gc3R5bGVzLnN1Ym1pdEFjdGl2ZSA6ICcnXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dSaWdodH0gLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9DYXJkPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NZXNzYWdlLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBNZXNzYWdlID0gKHt0ZXh0fSkgPT4gKFxyXG4gIDxDYXJkIGNlbnRlcmVkPlxyXG4gICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e3RleHR9PC9wPlxyXG4gIDwvQ2FyZD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnXHJcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vTWVzc2FnZSdcclxuXHJcbmltcG9ydCBMYXNlcnNoaXBJY29uIGZyb20gJy4vbG9nb3MvbGFzZXJzaGlwLnBuZydcclxuaW1wb3J0IFVTUFNJY29uIGZyb20gJy4vbG9nb3MvdXNwcy5wbmcnXHJcbmltcG9ydCBVUFNJY29uIGZyb20gJy4vbG9nb3MvdXBzLnBuZydcclxuaW1wb3J0IExhdW5kcnlJY29uIGZyb20gJy4vbG9nb3MvbGF1bmRyeS5wbmcnXHJcbmltcG9ydCBQaGFybWFjeUljb24gZnJvbSAnLi9sb2dvcy9waGFybWFjeS5wbmcnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFja2FnZXMubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IGdldEljb25QYXRoID0gKGNhcnJpZXIpID0+IHtcclxuICBjYXJyaWVyID0gY2Fycmllci50b0xvd2VyQ2FzZSgpXHJcblxyXG4gIGlmIChjYXJyaWVyLmluY2x1ZGVzKCdsYXNlcnNoaXAnKSkgcmV0dXJuIExhc2Vyc2hpcEljb25cclxuICBpZiAoY2Fycmllci5pbmNsdWRlcygndXNwcycpKSByZXR1cm4gVVNQU0ljb25cclxuICBpZiAoY2Fycmllci5pbmNsdWRlcygndXBzJykpIHJldHVybiBVUFNJY29uXHJcbiAgaWYgKGNhcnJpZXIuaW5jbHVkZXMoJ2xhdW5kcnknKSkgcmV0dXJuIExhdW5kcnlJY29uXHJcbiAgaWYgKGNhcnJpZXIuaW5jbHVkZXMoJ3BoYXJtYWN5JykpIHJldHVybiBQaGFybWFjeUljb25cclxufVxyXG5cclxuY29uc3QgUGFja2FnZXMgPSAoe3BhY2thZ2VzfSkgPT5cclxuICBwYWNrYWdlcyAmJiBwYWNrYWdlcy5sZW5ndGggPiAwID8gKFxyXG4gICAgcGFja2FnZXMubWFwKChwa2cpID0+IChcclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5jYXJyaWVySWNvbn0gc3JjPXtnZXRJY29uUGF0aChwa2cuY2Fycmllcil9IC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2Fycmllcn0+e3BrZy5jYXJyaWVyfTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT57cGtnLmRhdGV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9Pntwa2cudGV4dH08L3A+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICkpXHJcbiAgKSA6IChcclxuICAgIDxNZXNzYWdlIHRleHQ9XCJObyBuZXcgcGFja2FnZXMhIPCfmJ5cIiAvPlxyXG4gIClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhY2thZ2VzXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcclxuXHJcbmltcG9ydCBvY3RvcHVzIGZyb20gJy4vb2N0b3B1cy5wbmcnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TcGlubmVyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBTcGlubmVyID0gKCkgPT4gKFxyXG4gIDxDYXJkIGNlbnRlcmVkPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcGlubmVyfT5cclxuICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBzcmM9e29jdG9wdXN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L0NhcmQ+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXJcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Rvb2xiYXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFRvb2xiYXIgPSAoe2NoaWxkcmVufSkgPT4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b29sYmFyfT57Y2hpbGRyZW59PC9kaXY+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ub29sYmFySXRlbS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgVG9vbGJhckl0ZW0gPSAoe3RpdGxlLCBpY29uLCBvbkNsaWNrfSkgPT4gKFxyXG4gIDxzcGFuIHRpdGxlPXt0aXRsZX0gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgIDxGb250QXdlc29tZUljb24gaWNvbj17aWNvbn0gLz5cclxuICA8L3NwYW4+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXJJdGVtXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2ZhU2lnbk91dEFsdH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5cclxuaW1wb3J0IFBhY2thZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvUGFja2FnZXMnXHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nXHJcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvTWVzc2FnZSdcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TcGlubmVyJ1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICcuLi9jb21wb25lbnRzL1Rvb2xiYXInXHJcbmltcG9ydCBUb29sYmFySXRlbSBmcm9tICcuLi9jb21wb25lbnRzL1Rvb2xiYXJJdGVtJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQXBwLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBPSyA9IDIwMFxyXG5jb25zdCBVTkFVVEhPUklaRUQgPSA0MDFcclxuY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SID0gNTAwXHJcblxyXG5jb25zdCBFUlJPUl9NRVNTQUdFID0gJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyISDwn6SVJ1xyXG5cclxuY29uc3QgZ2V0U3RvcmVkVG9rZW4gPSAoKSA9PlxyXG4gICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkgPz8gbnVsbFxyXG5jb25zdCBzZXRTdG9yZWRUb2tlbiA9ICh0b2tlbikgPT5cclxuICB0b2tlbiA9PT0gbnVsbFxyXG4gICAgPyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxyXG4gICAgOiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcclxuXHJcbmNvbnN0IGZldGNoUGFja2FnZXMgPSBhc3luYyAodG9rZW4pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wa2cnLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YH0sXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IE9LKSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IHJlc3BvbnNlXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgoZXJyICYmIGVyci5zdGF0dXMpIHx8IElOVEVSTkFMX1NFUlZFUl9FUlJPUilcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3BhY2thZ2VzLCBzZXRQYWNrYWdlc10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoZ2V0U3RvcmVkVG9rZW4oKSlcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2lzTG9naW5FcnJvciwgc2V0SXNMb2dpbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgc2V0VG9rZW4obnVsbClcclxuICAgIHNldFN0b3JlZFRva2VuKG51bGwpXHJcbiAgfVxyXG5cclxuICBjb25zdCBsb2dpbiA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxvZ291dCgpXHJcbiAgICAgIHNldElzTG9naW5FcnJvcihmYWxzZSlcclxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZSwgcGFzc3dvcmR9KSxcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IFVOQVVUSE9SSVpFRCkge1xyXG4gICAgICAgIHNldElzTG9naW5FcnJvcih0cnVlKVxyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IE9LKSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCByZXNwb25zZS50ZXh0KClcclxuICAgICAgICBzZXRUb2tlbih0b2tlbilcclxuICAgICAgICBzZXRTdG9yZWRUb2tlbih0b2tlbilcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRFcnJvcihFUlJPUl9NRVNTQUdFKVxyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICBzZXRFcnJvcihFUlJPUl9NRVNTQUdFKVxyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZWZyZXNoUGFja2FnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0UGFja2FnZXMoYXdhaXQgZmV0Y2hQYWNrYWdlcyh0b2tlbikpXHJcbiAgICAgIH0gY2F0Y2ggKHN0YXR1cykge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IFVOQVVUSE9SSVpFRCkgbG9nb3V0KClcclxuICAgICAgICBlbHNlIHNldEVycm9yKEVSUk9SX01FU1NBR0UpXHJcbiAgICAgIH1cclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJlZnJlc2hQYWNrYWdlcygpXHJcbiAgfSwgW3Rva2VuXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXBwfT5cclxuICAgICAge2Vycm9yID8gKFxyXG4gICAgICAgIDxNZXNzYWdlIHRleHQ9e2Vycm9yfSAvPlxyXG4gICAgICApIDogaXNMb2FkaW5nID8gKFxyXG4gICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICkgOiB0b2tlbiA9PT0gbnVsbCA/IChcclxuICAgICAgICA8TG9naW5Gb3JtIG9uU3VibWl0PXtsb2dpbn0gaGFzRXJyb3I9e2lzTG9naW5FcnJvcn0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8UGFja2FnZXMgcGFja2FnZXM9e3BhY2thZ2VzfSAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAge3Rva2VuICE9PSBudWxsICYmIChcclxuICAgICAgICAgIDxUb29sYmFySXRlbSB0aXRsZT1cIlNpZ24gb2ZmXCIgaWNvbj17ZmFTaWduT3V0QWx0fSBvbkNsaWNrPXtsb2dvdXR9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Ub29sYmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvY29tcG9uZW50cy9sb2dvcy9sYXNlcnNoaXAuNDVhNzkyZDRkOGVjNWJhYTI5YTcyODk2NmZjOTNiMWEucG5nXCIsXCJoZWlnaHRcIjoxMDAwLFwid2lkdGhcIjoxMDAwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUF0a2xFUVZSNG5HMVBTd3JDUUF4OWFUdGdFZHk1RXI5WXJlQlNyeVM0RWk4aEhrRzhrcCt1cEF2RkF3aGVZRHFkbUl6Z3lnZVA1Q1dQZktnWTVCNEFDVmtZd1B4TFFVVTJaeGdqYVFDenRXRHJpQ0pWWXJnQVhtS0FSb01ZU1RaVEUycVpTK1ZtNjV2TEJhSTBsUmJ3UEoxUjduZEloeE8weFVTMzFkcWJiZ2VVSklpRXIvc0Q3K01CalZHT2x2UC9WclFRajN2Z3lzSHJDam5TSTViaEloUnNLOERWWDgwZ3V2YW4rbVlBa1ZhbEh0NFVSZUFQNncxQ2cydWVwTFlBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2NvbXBvbmVudHMvbG9nb3MvbGF1bmRyeS43YjZkM2YwMjVlNWVjNTI3MTgzMjk5NWU5MWNlOWZiNi5wbmdcIixcImhlaWdodFwiOjcwMCxcIndpZHRoXCI6NzAwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBTUFBQUR6MFU2NUFBQUFnVkJNVkVYZTYvTDF2cEQydklyK3FETCtxREgvcHl6K3B5aitwaVQvb3dEL29RRHYrLy93OC9YcTlQamU2L0xqMjlmajI5YmMydG40eDZEM3dKTDB3Slgwd0pUcHdLajF2cERvdnFmMnZJdjV1b0R3cTRmd3E0YjBybXowcld6OXFUMytxREgrcHlqL3BoMy9waHZ0bTJyL3BnRHRtbW4vcFFEL29nRC9vUUQvb0FEL253Q0ROdzhiQUFBQUNuUlNUbFArL3Y3Ky92NysvdjcrTFBSQmhRQUFBRWxKUkVGVWVOb0ZRSVVSZ0NBQWZGdE13TVFBd1NEMkg5QkRrWldKS3JNQ0tabTdQbklLVnRTVTFzSWlzR3FaS2hiZ2ViTnZEZmNnY2Z2ZVdCMk1ITTlqa0FhNWRzOUg5UFVEcDJNRlpaVEFjUklBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2NvbXBvbmVudHMvbG9nb3MvcGhhcm1hY3kuYmU1YTNlN2Q3MDcyNWM0YzYyZGU5OWVlMzU2ZWVjMzYucG5nXCIsXCJoZWlnaHRcIjo3MDAsXCJ3aWR0aFwiOjcwMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQU1BQUFEejBVNjVBQUFBaEZCTVZFV3l5ZWFXeWYrY3hQNmJ4UCtkdy8yY3cvNmJ3LzZYd3YrVncvK1F3UC9lQUFELzZnRGsySkgvMVRiKzF3RCsxZ0MveU5QRHhNdkR3OHlYeXYrWnlQK1d5ZitaeC8rZHhQMmJ4UCtkdy8yY3cvNmN3LzJUeC8rYncvNlR4ditWdy8rUnd2K1F3UCttc2Vhc290T3htYzJ2bWN6dGtBRHJqd0RDYjQ3a0wwcmNLQURiSlFEVnlTUHdBQUFBQzNSU1RsUCsvdjcrL3Y3Ky92NysvaFg1czNnQUFBQkpTVVJCVkhqYUJVQUhGa0FnQVAzMkNsRWFpTWdJOTcrZmh6QXJjcGxHQ1RJUWFtT2pzSkdxNlJadHNOSzJ2ZzZtSVcxL1A2L2pTT1A1L0VvL1FCbk5uTjhGRW1VbUhvanhCNmxJQlYzOUI1QWRBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvY29tcG9uZW50cy9sb2dvcy91cHMuYWI0YWVjNWUyNmFiMGI1ZTQxMWI5OGUwNjQ2NTI0ZjYucG5nXCIsXCJoZWlnaHRcIjoxMDAwLFwid2lkdGhcIjoxMDAwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUEyMGxFUVZSNDJpWEJQVXRDWVFDRzRmczVIMGh3SUVNeituQ1JFRm9DTGFRaDJodjdldzM5RFJmSGlFcmFDaVFxSXN3aGptVllXWFI2bndhdlM1MTZKZVM1OURBRHdNeHBxd3haWmllVGliVFhzbzhQZjFuS0FtOGZFZmVqeU4yTG1Mc25LYnFkd3RGK1FXTzFvTnRQZGRKTmRmMFkwVzRHaGpra2dKL0hrWXBCU25NamVMdnhoMEJuTndtWmNBTElBYmMyQzRVQTA1bElZNmd1MmtPanBBS01Ya1h2S25XOVp2VUhNY3RsTzM4WEM0QjIxcXEyOFVFN1VDdWJyMi94K1FPOTg0aFN5ZEx1ZWlVRVMrTVg2TFR0SkliVFM2bTJBcEw5RDhRL1h6U3pVN0RrQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2NvbXBvbmVudHMvbG9nb3MvdXNwcy5kZjQwYWZkOTdlZGVlYTE4ODQ0ZDAwN2JkMWQ1OTg3Yy5wbmdcIixcImhlaWdodFwiOjEwMDAsXCJ3aWR0aFwiOjEwMDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQTdVbEVRVlI0MmgyUHUyb0NZUlNFVDJVcFdQb0FsdXA2djdCb21TYUZwRWtSQ1FSMjF6VzJhWHdBNjJDWE5nK2diZEtJZ3NTRUVCQ0xKUkpTUzlBSW90YmZyM3VLNGN4aFpvcFBzbG1YZk40emx1V1NURHFFZjZuVW9saHNxWmRjempQcHRHTnMrOTdVNngwdFJTSTNKaFpybW5BbzRiSlc2OUR0UGpJY3ZqS2ZCNnhXZndUQkQ3YmRSa1F1bVV3K01NWXdHTHpRNnoweG5YNnlXSHdUajk4aTBXaVR6V2FyaGRuc2kvSDRuY1BocUZma0FtazBIaGlOM2xUTDVTL3I5VCs3M1o1Ky94bVJLeVNUY1JHNXBscHRrMG81b1ZjbEVuY1VDcDVTVUtuNFdKYmluaEY5eW1YL0hDb21KNGxtazNYKzFDOWpBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvY29tcG9uZW50cy9vY3RvcHVzLjQzMmQxMTc1N2JiYWUyODAzODhjYjZhOTA4YWI5ZmFiLnBuZ1wiLFwiaGVpZ2h0XCI6MTI4LFwid2lkdGhcIjoxMzYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQkEwbEVRVlI0MmdWQXUwckRVQmorL3BOYjJ5U214V2l3S1JLUlVzUkIwTjNKSWdvdWdxTXZvZUxvN0tDVElMNkVrNXVqazVPRE9Hb0hwWXRJQ1duYW5Oek9MelM1T2xwR21YZXo4ZHZJY252M0lOZ28wblBSaVNKcTJKODZwNU5kVnZXZ3RSQnVnZWlFbWNHRzNXZVpQSEVXcnd0WXp0QkFiVTBMZFJqUEpiSWFwUUp0b3BJNVNPd0xrQmFJV25wemFpWFNYc0ZQVWhxS2taS3FER3A2b1JEdHBZZlNjQS84YUpESDIwUDBmQjhtWnlVN3dSbk01cU1PT1ZNUTVpdjlmcDJ1U2dtOW1rTHBUb2RhN1FzQXQ5cmxqdDhrb1cyQWFHYjh2YnRDYjR5NUxyNkpOQ0t6VVluRm01Y1BMZXhmZzFWWlc4RWVDL09ZYkg5RXRuZW5kZGVlL3dIbGtHVVFwSml5alFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcIkNhcmRfY2FyZF9fT25qMTZcIixcblx0XCJjZW50ZXJlZFwiOiBcIkNhcmRfY2VudGVyZWRfXzFpaThIXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpbnB1dFwiOiBcIkxvZ2luRm9ybV9pbnB1dF9fM21Va0ZcIixcblx0XCJzdWJtaXRcIjogXCJMb2dpbkZvcm1fc3VibWl0X19laUo4RFwiLFxuXHRcInN1Ym1pdEFjdGl2ZVwiOiBcIkxvZ2luRm9ybV9zdWJtaXRBY3RpdmVfXzFGWV93XCIsXG5cdFwidGl0bGVcIjogXCJMb2dpbkZvcm1fdGl0bGVfX25ZMlBpXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0ZXh0XCI6IFwiTWVzc2FnZV90ZXh0X18yOWRoOVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2Fycmllckljb25cIjogXCJQYWNrYWdlc19jYXJyaWVySWNvbl9fMUZVdmRcIixcblx0XCJjYXJyaWVyXCI6IFwiUGFja2FnZXNfY2Fycmllcl9fek1lZmtcIixcblx0XCJkYXRlXCI6IFwiUGFja2FnZXNfZGF0ZV9fMlFpd2JcIixcblx0XCJ0ZXh0XCI6IFwiUGFja2FnZXNfdGV4dF9fTEc1RDVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNwaW5uZXJcIjogXCJTcGlubmVyX3NwaW5uZXJfXzFYVFFDXCIsXG5cdFwiaWNvblwiOiBcIlNwaW5uZXJfaWNvbl9fMWl1MGRcIixcblx0XCJzd2ltXCI6IFwiU3Bpbm5lcl9zd2ltX18zSW0zT1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidG9vbGJhclwiOiBcIlRvb2xiYXJfdG9vbGJhcl9fMkJaZ1JcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcIlRvb2xiYXJJdGVtX2J1dHRvbl9fMWZrLWZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFwcFwiOiBcIkFwcF9hcHBfXzJHeUc4XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==