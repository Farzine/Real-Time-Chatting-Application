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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo , currentChatUser  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const socket = useRef();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) {\n            router.push(\"/login\");\n        }\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        if (!currentUser) {\n            setRedirectLogin(true);\n        }\n        if (!userInfo && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.email)) {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            if (data === null || data === void 0 ? void 0 : data.data) {\n                const { id , name , email , profilePicture: profileImage , status  } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo) {\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_11__.io)(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.HOST);\n            socket.current.emit(\"add-user\", userInfo.id);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_SOCKET,\n                socket\n            });\n        }\n    }, [\n        userInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (socket.current) {}\n    }, [\n        socket.current\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getMessages = async ()=>{\n            const { data: { messages  }  } = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.GET_MESSAGES_ROUTE, \"/\").concat(userInfo.id, \"/\").concat(currentChatUser.id));\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_MESSAGES,\n                messages\n            });\n        };\n        if (currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.id) {\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 85,\n                    columnNumber: 3\n                }, this),\n                currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 23\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 33\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n            lineNumber: 84,\n            columnNumber: 3\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"lSSHhp8vroEZVps8GQ5T48fPhKo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7Ozs7Ozs7O0FBSXhDO0dBM0VTYTs7UUFDUUwsa0RBQVNBO1FBQ3NCQyxtRUFBZ0JBOzs7S0FGdkRJO0FBNkVULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW4uanN4PzJhODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXRMaXN0IGZyb20gXCIuL0NoYXRsaXN0L0NoYXRMaXN0XCI7XG5pbXBvcnQgRW1wdHkgZnJvbSBcIi4vRW1wdHlcIjtcbmltcG9ydCB7IG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBmaXJlYmFzZUF1dGggfSBmcm9tIFwiQC91dGlscy9GaXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQ0hFQ0tfVVNFUl9ST1VURSwgR0VUX01FU1NBR0VTX1JPVVRFLCBIT1NUIH0gZnJvbSBcIkAvdXRpbHMvQXBpUm91dGVzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IHJlZHVjZXJDYXNlcyB9IGZyb20gXCJAL2NvbnRleHQvY29uc3RhbnRzXCI7XG5pbXBvcnQgQ2hhdCBmcm9tIFwiLi9DaGF0L0NoYXRcIjtcbmltcG9ydCB7aW99IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5cblxuZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt7dXNlckluZm8sY3VycmVudENoYXRVc2VyfSxkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIGNvbnN0IFtyZWRpcmVjdExvZ2luLHNldFJlZGlyZWN0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzb2NrZXQgPSB1c2VSZWYoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihyZWRpcmVjdExvZ2luKXtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgIH1cbiAgfSxbcmVkaXJlY3RMb2dpbl0pO1xuXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZChmaXJlYmFzZUF1dGgsIGFzeW5jKGN1cnJlbnRVc2VyKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50VXNlcikge1xuICAgICAgc2V0UmVkaXJlY3RMb2dpbih0cnVlKTtcbiAgICB9XG4gICAgaWYoIXVzZXJJbmZvICYmIGN1cnJlbnRVc2VyPy5lbWFpbCl7XG4gICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KENIRUNLX1VTRVJfUk9VVEUse2VtYWlsOmN1cnJlbnRVc2VyLmVtYWlsfSk7XG4gICAgICBpZighZGF0YS5zdGF0dXMpe1xuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgIH1cbiAgICAgIGlmKGRhdGE/LmRhdGEpe1xuICAgICAgY29uc3Qge2lkLG5hbWUsZW1haWwscHJvZmlsZVBpY3R1cmU6cHJvZmlsZUltYWdlLHN0YXR1c309IGRhdGEuZGF0YTtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTpyZWR1Y2VyQ2FzZXMuU0VUX1VTRVJfSU5GTyxcbiAgICAgICAgdXNlckluZm86e1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgZW1haWwsXG4gICAgICAgICAgcHJvZmlsZUltYWdlLFxuICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgfSxcbiAgICAgIH0pOyBcbiAgICB9XG4gICAgfVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHVzZXJJbmZvKXtcbiAgICAgIHNvY2tldC5jdXJyZW50ID0gaW8oSE9TVCk7XG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiYWRkLXVzZXJcIix1c2VySW5mby5pZCk7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6cmVkdWNlckNhc2VzLlNFVF9TT0NLRVQsXG4gICAgICAgIHNvY2tldCxcbiAgICAgIH0pOyBcbiAgICB9XG4gIH0gLFt1c2VySW5mb10pO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihzb2NrZXQuY3VycmVudCl7XG4gICAgICBcbiAgICB9XG4gIH0gLFtzb2NrZXQuY3VycmVudF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYygpID0+IHtcbiAgICBjb25zdCB7ZGF0YTp7bWVzc2FnZXN9fSA9IGF3YWl0IGF4aW9zLmdldChgJHtHRVRfTUVTU0FHRVNfUk9VVEV9LyR7dXNlckluZm8uaWR9LyR7Y3VycmVudENoYXRVc2VyLmlkfWApO1xuICAgICBkaXNwYXRjaCh7XG4gICAgICAgdHlwZTpyZWR1Y2VyQ2FzZXMuU0VUX01FU1NBR0VTLFxuICAgICAgIG1lc3NhZ2VzLFxuICAgICB9KTtcbiAgICB9XG4gICAgaWYoY3VycmVudENoYXRVc2VyPy5pZCl7XG4gICAgICBnZXRNZXNzYWdlcygpO1xuICAgIH1cbiAgfSAsW2N1cnJlbnRDaGF0VXNlcl0pO1xuXG4gIHJldHVybiA8PlxuICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLW1haW4gaC1zY3JlZW4gdy1zY3JlZW4gbWF4LWgtc2NyZWVuIG1heC13LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+IFxuICA8Q2hhdExpc3QvPlxuICB7XG4gICAgY3VycmVudENoYXRVc2VyID8gPENoYXQvPiA6IDxFbXB0eS8+XG4gIH1cbiAgPC9kaXY+XG4gIDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkNoYXRMaXN0IiwiRW1wdHkiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJmaXJlYmFzZUF1dGgiLCJheGlvcyIsIkNIRUNLX1VTRVJfUk9VVEUiLCJHRVRfTUVTU0FHRVNfUk9VVEUiLCJIT1NUIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZVByb3ZpZGVyIiwicmVkdWNlckNhc2VzIiwiQ2hhdCIsImlvIiwiTWFpbiIsInJvdXRlciIsInVzZXJJbmZvIiwiY3VycmVudENoYXRVc2VyIiwiZGlzcGF0Y2giLCJyZWRpcmVjdExvZ2luIiwic2V0UmVkaXJlY3RMb2dpbiIsInNvY2tldCIsInVzZVJlZiIsInB1c2giLCJjdXJyZW50VXNlciIsImVtYWlsIiwiZGF0YSIsInBvc3QiLCJzdGF0dXMiLCJpZCIsIm5hbWUiLCJwcm9maWxlUGljdHVyZSIsInByb2ZpbGVJbWFnZSIsInR5cGUiLCJTRVRfVVNFUl9JTkZPIiwiY3VycmVudCIsImVtaXQiLCJTRVRfU09DS0VUIiwiZ2V0TWVzc2FnZXMiLCJtZXNzYWdlcyIsImdldCIsIlNFVF9NRVNTQUdFUyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});