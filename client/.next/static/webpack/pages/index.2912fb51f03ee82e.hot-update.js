"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/common/MessageStatus.jsx":
/*!*************************************************!*\
  !*** ./src/components/common/MessageStatus.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\n\nfunction MessageStatus(param) {\n    let { messageStatus  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            messageStatus === \"sent\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsCheck, {\n                className: \" text-lg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\common\\\\MessageStatus.jsx\",\n                lineNumber: 6,\n                columnNumber: 32\n            }, this),\n            messageStatus === \"delivered\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsCheckAll, {\n                className: \" text-lg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\common\\\\MessageStatus.jsx\",\n                lineNumber: 7,\n                columnNumber: 37\n            }, this),\n            messageStatus === \"read\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsCheckAll, {\n                className: \"text-icon-ack text-lg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\common\\\\MessageStatus.jsx\",\n                lineNumber: 8,\n                columnNumber: 32\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = MessageStatus;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageStatus);\nvar _c;\n$RefreshReg$(_c, \"MessageStatus\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vTWVzc2FnZVN0YXR1cy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUMyQjtBQUVyRCxTQUFTRyxjQUFjLEtBQWUsRUFBRTtRQUFqQixFQUFDQyxjQUFhLEVBQUMsR0FBZjtJQUNyQixxQkFBTzs7WUFDTkEsa0JBQWtCLHdCQUFVLDhEQUFDSCxtREFBT0E7Z0JBQUNJLFdBQVU7Ozs7OztZQUMvQ0Qsa0JBQWtCLDZCQUFlLDhEQUFDRixzREFBVUE7Z0JBQUNHLFdBQVU7Ozs7OztZQUN2REQsa0JBQWtCLHdCQUFVLDhEQUFDRixzREFBVUE7Z0JBQUNHLFdBQVU7Ozs7Ozs7O0FBRXJEO0tBTlNGO0FBUVQsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL01lc3NhZ2VTdGF0dXMuanN4PzRhNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnNDaGVjaywgQnNDaGVja0FsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuXG5mdW5jdGlvbiBNZXNzYWdlU3RhdHVzKHttZXNzYWdlU3RhdHVzfSkge1xuICByZXR1cm4gPD5cbiAge21lc3NhZ2VTdGF0dXMgPT09IFwic2VudFwiICYmIDxCc0NoZWNrIGNsYXNzTmFtZT1cIiB0ZXh0LWxnXCIvPn1cbiAge21lc3NhZ2VTdGF0dXMgPT09IFwiZGVsaXZlcmVkXCIgJiYgPEJzQ2hlY2tBbGwgY2xhc3NOYW1lPVwiIHRleHQtbGdcIi8+fVxuICB7bWVzc2FnZVN0YXR1cyA9PT0gXCJyZWFkXCIgJiYgPEJzQ2hlY2tBbGwgY2xhc3NOYW1lPVwidGV4dC1pY29uLWFjayB0ZXh0LWxnXCIvPn1cbiAgPC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlU3RhdHVzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnNDaGVjayIsIkJzQ2hlY2tBbGwiLCJNZXNzYWdlU3RhdHVzIiwibWVzc2FnZVN0YXR1cyIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/MessageStatus.jsx\n"));

/***/ })

});