(self["webpackChunkhost"] = self["webpackChunkhost"] || []).push([["src_bootstrap_js"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.1@react/index.js");
 // import NewList from './newList'

const RemoteNewList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_remote_NewList").then(__webpack_require__.t.bind(__webpack_require__, /*! remote/NewList */ "webpack/container/remote/remote/NewList", 23)));

const App = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "\u672C\u5730\u7EC4\u4EF6NewList"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
  fallback: "Loading NewList"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RemoteNewList, null)));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.1@react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/_react-dom@17.0.1@react-dom/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");



const dom = document.getElementById('root');
console.log(dom);
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, null), document.getElementById('root'));

/***/ })

}]);