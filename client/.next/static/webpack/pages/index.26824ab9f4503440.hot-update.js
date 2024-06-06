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

/***/ "./src/components/Main.jsx":
/*!*********************************!*\
  !*** ./src/components/Main.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo , currentChatUser  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const socket = useRef();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) {\n            router.push(\"/login\");\n        }\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        if (!currentUser) {\n            setRedirectLogin(true);\n        }\n        if (!userInfo && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.email)) {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            if (data === null || data === void 0 ? void 0 : data.data) {\n                const { id , name , email , profilePicture: profileImage , status  } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo) {\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_11__.io)(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.HOST);\n            socket.current.emit(\"add-user\", userInfo.id);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_SOCKET,\n                socket: socket.current\n            });\n        }\n    }, [\n        userInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getMessages = async ()=>{\n            const { data: { messages  }  } = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.GET_MESSAGES_ROUTE, \"/\").concat(userInfo.id, \"/\").concat(currentChatUser.id));\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_MESSAGES,\n                messages\n            });\n        };\n        if (currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.id) {\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 3\n                }, this),\n                currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 23\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 33\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n            lineNumber: 77,\n            columnNumber: 3\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"jS5pqMOiP5K5fZVYxeOFUVX8Ul4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluLmpzeD8yYTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGF0TGlzdCBmcm9tIFwiLi9DaGF0bGlzdC9DaGF0TGlzdFwiO1xuaW1wb3J0IEVtcHR5IGZyb20gXCIuL0VtcHR5XCI7XG5pbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZmlyZWJhc2VBdXRoIH0gZnJvbSBcIkAvdXRpbHMvRmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IENIRUNLX1VTRVJfUk9VVEUsIEdFVF9NRVNTQUdFU19ST1VURSwgSE9TVCB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWR1Y2VyQ2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xuaW1wb3J0IENoYXQgZnJvbSBcIi4vQ2hhdC9DaGF0XCI7XG5pbXBvcnQge2lvfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuXG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbe3VzZXJJbmZvLGN1cnJlbnRDaGF0VXNlcn0sZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xuICBjb25zdCBbcmVkaXJlY3RMb2dpbixzZXRSZWRpcmVjdExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYocmVkaXJlY3RMb2dpbil7XG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB9XG4gIH0sW3JlZGlyZWN0TG9naW5dKTtcblxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoZmlyZWJhc2VBdXRoLCBhc3luYyhjdXJyZW50VXNlcikgPT4ge1xuICAgIGlmICghY3VycmVudFVzZXIpIHtcbiAgICAgIHNldFJlZGlyZWN0TG9naW4odHJ1ZSk7XG4gICAgfVxuICAgIGlmKCF1c2VySW5mbyAmJiBjdXJyZW50VXNlcj8uZW1haWwpe1xuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChDSEVDS19VU0VSX1JPVVRFLHtlbWFpbDpjdXJyZW50VXNlci5lbWFpbH0pO1xuICAgICAgaWYoIWRhdGEuc3RhdHVzKXtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICB9XG4gICAgICBpZihkYXRhPy5kYXRhKXtcbiAgICAgIGNvbnN0IHtpZCxuYW1lLGVtYWlsLHByb2ZpbGVQaWN0dXJlOnByb2ZpbGVJbWFnZSxzdGF0dXN9PSBkYXRhLmRhdGE7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6cmVkdWNlckNhc2VzLlNFVF9VU0VSX0lORk8sXG4gICAgICAgIHVzZXJJbmZvOntcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHByb2ZpbGVJbWFnZSxcbiAgICAgICAgICBzdGF0dXMsXG4gICAgICAgIH0sXG4gICAgICB9KTsgXG4gICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZih1c2VySW5mbyl7XG4gICAgICBzb2NrZXQuY3VycmVudCA9IGlvKEhPU1QpO1xuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcImFkZC11c2VyXCIsdXNlckluZm8uaWQpO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOnJlZHVjZXJDYXNlcy5TRVRfU09DS0VULFxuICAgICAgICBzb2NrZXQ6c29ja2V0LmN1cnJlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH0gLFt1c2VySW5mb10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYygpID0+IHtcbiAgICBjb25zdCB7ZGF0YTp7bWVzc2FnZXN9fSA9IGF3YWl0IGF4aW9zLmdldChgJHtHRVRfTUVTU0FHRVNfUk9VVEV9LyR7dXNlckluZm8uaWR9LyR7Y3VycmVudENoYXRVc2VyLmlkfWApO1xuICAgICBkaXNwYXRjaCh7XG4gICAgICAgdHlwZTpyZWR1Y2VyQ2FzZXMuU0VUX01FU1NBR0VTLFxuICAgICAgIG1lc3NhZ2VzLFxuICAgICB9KTtcbiAgICB9XG4gICAgaWYoY3VycmVudENoYXRVc2VyPy5pZCl7XG4gICAgICBnZXRNZXNzYWdlcygpO1xuICAgIH1cbiAgfSAsW2N1cnJlbnRDaGF0VXNlcl0pO1xuXG4gIHJldHVybiA8PlxuICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLW1haW4gaC1zY3JlZW4gdy1zY3JlZW4gbWF4LWgtc2NyZWVuIG1heC13LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+IFxuICA8Q2hhdExpc3QvPlxuICB7XG4gICAgY3VycmVudENoYXRVc2VyID8gPENoYXQvPiA6IDxFbXB0eS8+XG4gIH1cbiAgPC9kaXY+XG4gIDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkNoYXRMaXN0IiwiRW1wdHkiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJmaXJlYmFzZUF1dGgiLCJheGlvcyIsIkNIRUNLX1VTRVJfUk9VVEUiLCJHRVRfTUVTU0FHRVNfUk9VVEUiLCJIT1NUIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZVByb3ZpZGVyIiwicmVkdWNlckNhc2VzIiwiQ2hhdCIsImlvIiwiTWFpbiIsInJvdXRlciIsInVzZXJJbmZvIiwiY3VycmVudENoYXRVc2VyIiwiZGlzcGF0Y2giLCJyZWRpcmVjdExvZ2luIiwic2V0UmVkaXJlY3RMb2dpbiIsInNvY2tldCIsInVzZVJlZiIsInB1c2giLCJjdXJyZW50VXNlciIsImVtYWlsIiwiZGF0YSIsInBvc3QiLCJzdGF0dXMiLCJpZCIsIm5hbWUiLCJwcm9maWxlUGljdHVyZSIsInByb2ZpbGVJbWFnZSIsInR5cGUiLCJTRVRfVVNFUl9JTkZPIiwiY3VycmVudCIsImVtaXQiLCJTRVRfU09DS0VUIiwiZ2V0TWVzc2FnZXMiLCJtZXNzYWdlcyIsImdldCIsIlNFVF9NRVNTQUdFUyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});