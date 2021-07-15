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
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _LoginForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginForm.module.css */ "./components/LoginForm.module.css");
/* harmony import */ var _LoginForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_4__);

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_3__.default, {
    centered: true,
    className: `${hasError ? 'animated shake' : ''}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
      children: "Packages"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: () => onSubmit(username, password),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        placeholder: "Email",
        type: "email",
        className: (_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),
        value: username,
        onChange: e => setUsername(e.target.value),
        autoFocus: true,
        ref: inputRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        placeholder: "Password",
        type: "password",
        className: (_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),
        value: password,
        onChange: e => setPassword(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        className: `${(_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit)} ${username.length && password.length ? (_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().submitActive) : ''}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_2__.ArrowRight, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
/* harmony import */ var _Packages_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Packages.module.css */ "./components/Packages.module.css");
/* harmony import */ var _Packages_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Packages_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\git\\pkg.nyc\\components\\Packages.js";


 // import LasershipIcon from './logos/lasership.png'
// import USPSIcon from './logos/usps.png'
// import UPSIcon from './logos/ups.png'
// import LaundryIcon from './logos/laundry.png'
// import PharmacyIcon from './logos/pharmacy.png'



const getIconPath = carrier => {
  carrier = carrier.toLowerCase();
  if (carrier.includes('lasership')) return LasershipIcon;
  if (carrier.includes('usps')) return USPSIcon;
  if (carrier.includes('ups')) return UPSIcon;
  if (carrier.includes('laundry')) return LaundryIcon;
  if (carrier.includes('pharmacy')) return PharmacyIcon;
};

const Packages = ({
  packages
}) => packages && packages.length > 0 ? packages.map(pkg => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__.default, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    className: (_Packages_module_css__WEBPACK_IMPORTED_MODULE_4___default().carrierIcon),
    src: getIconPath(pkg.carrier)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    className: (_Packages_module_css__WEBPACK_IMPORTED_MODULE_4___default().carrier),
    children: pkg.carrier
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    className: (_Packages_module_css__WEBPACK_IMPORTED_MODULE_4___default().date),
    children: pkg.date
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    className: (_Packages_module_css__WEBPACK_IMPORTED_MODULE_4___default().text),
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
/* harmony import */ var _Spinner_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Spinner.module.css */ "./components/Spinner.module.css");
/* harmony import */ var _Spinner_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Spinner_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\git\\pkg.nyc\\components\\Spinner.js";




const Spinner = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__.default, {
  centered: true,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Spinner_module_css__WEBPACK_IMPORTED_MODULE_3___default().spinner),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: (_Spinner_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),
      src: "octopus.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
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

const getStoredToken = () => typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;

const setStoredToken = token => typeof localStorage !== 'undefined' && (token === null ? localStorage.removeItem('token') : localStorage.setItem('token', token));

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
      lineNumber: 105,
      columnNumber: 9
    }, undefined) : isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }, undefined) : token === null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginForm__WEBPACK_IMPORTED_MODULE_4__.default, {
      onSubmit: login,
      hasError: isLoginError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Packages__WEBPACK_IMPORTED_MODULE_3__.default, {
      packages: packages
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Toolbar__WEBPACK_IMPORTED_MODULE_7__.default, {
      children: token !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToolbarItem__WEBPACK_IMPORTED_MODULE_8__.default, {
        title: "Sign off",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSignOutAlt,
        onClick: logout
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ "react-feather":
/*!********************************!*\
  !*** external "react-feather" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-feather");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wa2cvLi9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vcGtnLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vcGtnLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzIiwid2VicGFjazovL3BrZy8uL2NvbXBvbmVudHMvUGFja2FnZXMuanMiLCJ3ZWJwYWNrOi8vcGtnLy4vY29tcG9uZW50cy9TcGlubmVyLmpzIiwid2VicGFjazovL3BrZy8uL2NvbXBvbmVudHMvVG9vbGJhci5qcyIsIndlYnBhY2s6Ly9wa2cvLi9jb21wb25lbnRzL1Rvb2xiYXJJdGVtLmpzIiwid2VicGFjazovL3BrZy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3BrZy8uL2NvbXBvbmVudHMvQ2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovL3BrZy8uL2NvbXBvbmVudHMvTG9naW5Gb3JtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcGtnLy4vY29tcG9uZW50cy9NZXNzYWdlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcGtnLy4vY29tcG9uZW50cy9QYWNrYWdlcy5tb2R1bGUuY3NzIiwid2VicGFjazovL3BrZy8uL2NvbXBvbmVudHMvU3Bpbm5lci5tb2R1bGUuY3NzIiwid2VicGFjazovL3BrZy8uL2NvbXBvbmVudHMvVG9vbGJhci5tb2R1bGUuY3NzIiwid2VicGFjazovL3BrZy8uL2NvbXBvbmVudHMvVG9vbGJhckl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9wa2cvLi9zdHlsZXMvQXBwLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcGtnL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vcGtnL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vcGtnL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wa2cvZXh0ZXJuYWwgXCJyZWFjdC1mZWF0aGVyXCIiLCJ3ZWJwYWNrOi8vcGtnL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ2FyZCIsImNsYXNzTmFtZSIsImNlbnRlcmVkIiwiY2hpbGRyZW4iLCJzdHlsZXMiLCJMb2dpbkZvcm0iLCJoYXNFcnJvciIsIm9uU3VibWl0IiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImlucHV0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImZvY3VzIiwiZSIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwiTWVzc2FnZSIsInRleHQiLCJnZXRJY29uUGF0aCIsImNhcnJpZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiTGFzZXJzaGlwSWNvbiIsIlVTUFNJY29uIiwiVVBTSWNvbiIsIkxhdW5kcnlJY29uIiwiUGhhcm1hY3lJY29uIiwiUGFja2FnZXMiLCJwYWNrYWdlcyIsIm1hcCIsInBrZyIsImRhdGUiLCJTcGlubmVyIiwiVG9vbGJhciIsIlRvb2xiYXJJdGVtIiwidGl0bGUiLCJpY29uIiwib25DbGljayIsIk9LIiwiVU5BVVRIT1JJWkVEIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwiRVJST1JfTUVTU0FHRSIsImdldFN0b3JlZFRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldFN0b3JlZFRva2VuIiwidG9rZW4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImZldGNoUGFja2FnZXMiLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsIkhvbWUiLCJzZXRQYWNrYWdlcyIsInNldFRva2VuIiwic2V0RXJyb3IiLCJpc0xvZ2luRXJyb3IiLCJzZXRJc0xvZ2luRXJyb3IiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJsb2dvdXQiLCJsb2dpbiIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVmcmVzaFBhY2thZ2VzIiwiZmFTaWduT3V0QWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFDQyxXQUFEO0FBQVlDLFVBQVEsR0FBRyxLQUF2QjtBQUE4QkM7QUFBOUIsQ0FBRCxrQkFDWDtBQUNFLFdBQVMsRUFBRyxHQUFFQyw4REFBWSxJQUFHRixRQUFRLEdBQUdFLGtFQUFILEdBQXFCLEVBQUcsSUFDM0RILFNBQVMsSUFBSSxFQUNkLEVBSEg7QUFBQSxZQUtHRTtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUFVQSwrREFBZUgsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLE1BQU1LLFNBQVMsR0FBRyxDQUFDO0FBQUNDLFVBQUQ7QUFBV0M7QUFBWCxDQUFELEtBQTBCO0FBQzFDLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFFQSxRQUFNRyxRQUFRLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUF2QjtBQUVBQyxrREFBUyxDQUFDLE1BQU07QUFDZCxRQUFJVCxRQUFKLEVBQWM7QUFDWkcsaUJBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUcsaUJBQVcsQ0FBQyxFQUFELENBQVg7QUFFQSxVQUFJQyxRQUFRLENBQUNHLE9BQWIsRUFBc0JILFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsS0FBakI7QUFDdkI7QUFDRixHQVBRLEVBT04sQ0FBQ1gsUUFBRCxDQVBNLENBQVQ7QUFTQSxzQkFDRSw4REFBQywwQ0FBRDtBQUFNLFlBQVEs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Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQSwrRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJkLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBDYXJkID0gKHtjbGFzc05hbWUsIGNlbnRlcmVkID0gZmFsc2UsIGNoaWxkcmVufSkgPT4gKFxyXG4gIDxkaXZcclxuICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcmR9ICR7Y2VudGVyZWQgPyBzdHlsZXMuY2VudGVyZWQgOiAnJ30gJHtcclxuICAgICAgY2xhc3NOYW1lIHx8ICcnXHJcbiAgICB9YH1cclxuICA+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtBcnJvd1JpZ2h0fSBmcm9tICdyZWFjdC1mZWF0aGVyJ1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9naW5Gb3JtLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoe2hhc0Vycm9yLCBvblN1Ym1pdH0pID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaGFzRXJyb3IpIHtcclxuICAgICAgc2V0VXNlcm5hbWUoJycpXHJcbiAgICAgIHNldFBhc3N3b3JkKCcnKVxyXG5cclxuICAgICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKVxyXG4gICAgfVxyXG4gIH0sIFtoYXNFcnJvcl0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjZW50ZXJlZCBjbGFzc05hbWU9e2Ake2hhc0Vycm9yID8gJ2FuaW1hdGVkIHNoYWtlJyA6ICcnfWB9PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+UGFja2FnZXM8L3A+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoKSA9PiBvblN1Ym1pdCh1c2VybmFtZSwgcGFzc3dvcmQpfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnN1Ym1pdH0gJHtcclxuICAgICAgICAgICAgdXNlcm5hbWUubGVuZ3RoICYmIHBhc3N3b3JkLmxlbmd0aCA/IHN0eWxlcy5zdWJtaXRBY3RpdmUgOiAnJ1xyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFycm93UmlnaHQgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9DYXJkPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NZXNzYWdlLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBNZXNzYWdlID0gKHt0ZXh0fSkgPT4gKFxyXG4gIDxDYXJkIGNlbnRlcmVkPlxyXG4gICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e3RleHR9PC9wPlxyXG4gIDwvQ2FyZD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnXHJcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vTWVzc2FnZSdcclxuXHJcbi8vIGltcG9ydCBMYXNlcnNoaXBJY29uIGZyb20gJy4vbG9nb3MvbGFzZXJzaGlwLnBuZydcclxuLy8gaW1wb3J0IFVTUFNJY29uIGZyb20gJy4vbG9nb3MvdXNwcy5wbmcnXHJcbi8vIGltcG9ydCBVUFNJY29uIGZyb20gJy4vbG9nb3MvdXBzLnBuZydcclxuLy8gaW1wb3J0IExhdW5kcnlJY29uIGZyb20gJy4vbG9nb3MvbGF1bmRyeS5wbmcnXHJcbi8vIGltcG9ydCBQaGFybWFjeUljb24gZnJvbSAnLi9sb2dvcy9waGFybWFjeS5wbmcnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFja2FnZXMubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IGdldEljb25QYXRoID0gKGNhcnJpZXIpID0+IHtcclxuICBjYXJyaWVyID0gY2Fycmllci50b0xvd2VyQ2FzZSgpXHJcblxyXG4gIGlmIChjYXJyaWVyLmluY2x1ZGVzKCdsYXNlcnNoaXAnKSkgcmV0dXJuIExhc2Vyc2hpcEljb25cclxuICBpZiAoY2Fycmllci5pbmNsdWRlcygndXNwcycpKSByZXR1cm4gVVNQU0ljb25cclxuICBpZiAoY2Fycmllci5pbmNsdWRlcygndXBzJykpIHJldHVybiBVUFNJY29uXHJcbiAgaWYgKGNhcnJpZXIuaW5jbHVkZXMoJ2xhdW5kcnknKSkgcmV0dXJuIExhdW5kcnlJY29uXHJcbiAgaWYgKGNhcnJpZXIuaW5jbHVkZXMoJ3BoYXJtYWN5JykpIHJldHVybiBQaGFybWFjeUljb25cclxufVxyXG5cclxuY29uc3QgUGFja2FnZXMgPSAoe3BhY2thZ2VzfSkgPT5cclxuICBwYWNrYWdlcyAmJiBwYWNrYWdlcy5sZW5ndGggPiAwID8gKFxyXG4gICAgcGFja2FnZXMubWFwKChwa2cpID0+IChcclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5jYXJyaWVySWNvbn0gc3JjPXtnZXRJY29uUGF0aChwa2cuY2Fycmllcil9IC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2Fycmllcn0+e3BrZy5jYXJyaWVyfTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT57cGtnLmRhdGV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9Pntwa2cudGV4dH08L3A+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICkpXHJcbiAgKSA6IChcclxuICAgIDxNZXNzYWdlIHRleHQ9XCJObyBuZXcgcGFja2FnZXMhIPCfmJ5cIiAvPlxyXG4gIClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhY2thZ2VzXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TcGlubmVyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBTcGlubmVyID0gKCkgPT4gKFxyXG4gIDxDYXJkIGNlbnRlcmVkPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcGlubmVyfT5cclxuICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBzcmM9XCJvY3RvcHVzLnBuZ1wiIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L0NhcmQ+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXJcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Rvb2xiYXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFRvb2xiYXIgPSAoe2NoaWxkcmVufSkgPT4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b29sYmFyfT57Y2hpbGRyZW59PC9kaXY+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ub29sYmFySXRlbS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgVG9vbGJhckl0ZW0gPSAoe3RpdGxlLCBpY29uLCBvbkNsaWNrfSkgPT4gKFxyXG4gIDxzcGFuIHRpdGxlPXt0aXRsZX0gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgIDxGb250QXdlc29tZUljb24gaWNvbj17aWNvbn0gLz5cclxuICA8L3NwYW4+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXJJdGVtXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2ZhU2lnbk91dEFsdH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5cclxuaW1wb3J0IFBhY2thZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvUGFja2FnZXMnXHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nXHJcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvTWVzc2FnZSdcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TcGlubmVyJ1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICcuLi9jb21wb25lbnRzL1Rvb2xiYXInXHJcbmltcG9ydCBUb29sYmFySXRlbSBmcm9tICcuLi9jb21wb25lbnRzL1Rvb2xiYXJJdGVtJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQXBwLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBPSyA9IDIwMFxyXG5jb25zdCBVTkFVVEhPUklaRUQgPSA0MDFcclxuY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SID0gNTAwXHJcblxyXG5jb25zdCBFUlJPUl9NRVNTQUdFID0gJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyISDwn6SVJ1xyXG5cclxuY29uc3QgZ2V0U3RvcmVkVG9rZW4gPSAoKSA9PlxyXG4gIHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiBudWxsXHJcbmNvbnN0IHNldFN0b3JlZFRva2VuID0gKHRva2VuKSA9PlxyXG4gIHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgKHRva2VuID09PSBudWxsXHJcbiAgICA/IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXHJcbiAgICA6IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKSlcclxuXHJcbmNvbnN0IGZldGNoUGFja2FnZXMgPSBhc3luYyAodG9rZW4pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wa2cnLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YH0sXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IE9LKSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IHJlc3BvbnNlXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgoZXJyICYmIGVyci5zdGF0dXMpIHx8IElOVEVSTkFMX1NFUlZFUl9FUlJPUilcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3BhY2thZ2VzLCBzZXRQYWNrYWdlc10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoZ2V0U3RvcmVkVG9rZW4oKSlcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2lzTG9naW5FcnJvciwgc2V0SXNMb2dpbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgc2V0VG9rZW4obnVsbClcclxuICAgIHNldFN0b3JlZFRva2VuKG51bGwpXHJcbiAgfVxyXG5cclxuICBjb25zdCBsb2dpbiA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxvZ291dCgpXHJcbiAgICAgIHNldElzTG9naW5FcnJvcihmYWxzZSlcclxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZSwgcGFzc3dvcmR9KSxcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IFVOQVVUSE9SSVpFRCkge1xyXG4gICAgICAgIHNldElzTG9naW5FcnJvcih0cnVlKVxyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IE9LKSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCByZXNwb25zZS50ZXh0KClcclxuICAgICAgICBzZXRUb2tlbih0b2tlbilcclxuICAgICAgICBzZXRTdG9yZWRUb2tlbih0b2tlbilcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRFcnJvcihFUlJPUl9NRVNTQUdFKVxyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICBzZXRFcnJvcihFUlJPUl9NRVNTQUdFKVxyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZWZyZXNoUGFja2FnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0UGFja2FnZXMoYXdhaXQgZmV0Y2hQYWNrYWdlcyh0b2tlbikpXHJcbiAgICAgIH0gY2F0Y2ggKHN0YXR1cykge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IFVOQVVUSE9SSVpFRCkgbG9nb3V0KClcclxuICAgICAgICBlbHNlIHNldEVycm9yKEVSUk9SX01FU1NBR0UpXHJcbiAgICAgIH1cclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJlZnJlc2hQYWNrYWdlcygpXHJcbiAgfSwgW3Rva2VuXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXBwfT5cclxuICAgICAge2Vycm9yID8gKFxyXG4gICAgICAgIDxNZXNzYWdlIHRleHQ9e2Vycm9yfSAvPlxyXG4gICAgICApIDogaXNMb2FkaW5nID8gKFxyXG4gICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICkgOiB0b2tlbiA9PT0gbnVsbCA/IChcclxuICAgICAgICA8TG9naW5Gb3JtIG9uU3VibWl0PXtsb2dpbn0gaGFzRXJyb3I9e2lzTG9naW5FcnJvcn0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8UGFja2FnZXMgcGFja2FnZXM9e3BhY2thZ2VzfSAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAge3Rva2VuICE9PSBudWxsICYmIChcclxuICAgICAgICAgIDxUb29sYmFySXRlbSB0aXRsZT1cIlNpZ24gb2ZmXCIgaWNvbj17ZmFTaWduT3V0QWx0fSBvbkNsaWNrPXtsb2dvdXR9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Ub29sYmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJDYXJkX2NhcmRfX09uajE2XCIsXG5cdFwiY2VudGVyZWRcIjogXCJDYXJkX2NlbnRlcmVkX18xaWk4SFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5wdXRcIjogXCJMb2dpbkZvcm1faW5wdXRfXzNtVWtGXCIsXG5cdFwic3VibWl0XCI6IFwiTG9naW5Gb3JtX3N1Ym1pdF9fZWlKOERcIixcblx0XCJzdWJtaXRBY3RpdmVcIjogXCJMb2dpbkZvcm1fc3VibWl0QWN0aXZlX18xRllfd1wiLFxuXHRcInRpdGxlXCI6IFwiTG9naW5Gb3JtX3RpdGxlX19uWTJQaVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGV4dFwiOiBcIk1lc3NhZ2VfdGV4dF9fMjlkaDlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcnJpZXJJY29uXCI6IFwiUGFja2FnZXNfY2Fycmllckljb25fXzFGVXZkXCIsXG5cdFwiY2FycmllclwiOiBcIlBhY2thZ2VzX2NhcnJpZXJfX3pNZWZrXCIsXG5cdFwiZGF0ZVwiOiBcIlBhY2thZ2VzX2RhdGVfXzJRaXdiXCIsXG5cdFwidGV4dFwiOiBcIlBhY2thZ2VzX3RleHRfX0xHNUQ1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzcGlubmVyXCI6IFwiU3Bpbm5lcl9zcGlubmVyX18xWFRRQ1wiLFxuXHRcImljb25cIjogXCJTcGlubmVyX2ljb25fXzFpdTBkXCIsXG5cdFwic3dpbVwiOiBcIlNwaW5uZXJfc3dpbV9fM0ltM09cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRvb2xiYXJcIjogXCJUb29sYmFyX3Rvb2xiYXJfXzJCWmdSXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25cIjogXCJUb29sYmFySXRlbV9idXR0b25fXzFmay1mXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcHBcIjogXCJBcHBfYXBwX18yR3lHOFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1mZWF0aGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=