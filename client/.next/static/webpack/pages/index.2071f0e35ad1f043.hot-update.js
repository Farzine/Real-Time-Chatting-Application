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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo , currentChatUser  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    con;\n    const socket = useRef();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) {\n            router.push(\"/login\");\n        }\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        if (!currentUser) {\n            setRedirectLogin(true);\n        }\n        if (!userInfo && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.email)) {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            if (data === null || data === void 0 ? void 0 : data.data) {\n                const { id , name , email , profilePicture: profileImage , status  } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo) {\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_11__.io)(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.HOST);\n            socket.current.emit(\"add-user\", userInfo.id);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_SOCKET,\n                socket\n            });\n        }\n    }, [\n        userInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (socket.current) {}\n    }, [\n        socket.current\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getMessages = async ()=>{\n            const { data: { messages  }  } = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.GET_MESSAGES_ROUTE, \"/\").concat(userInfo.id, \"/\").concat(currentChatUser.id));\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_MESSAGES,\n                messages\n            });\n        };\n        if (currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.id) {\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 3\n                }, this),\n                currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 88,\n                    columnNumber: 23\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 88,\n                    columnNumber: 33\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n            lineNumber: 85,\n            columnNumber: 3\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"lSSHhp8vroEZVps8GQ5T48fPhKo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0E7Ozs7d0JBQUU7Ozs7Ozs7O0FBSXhDO0dBNUVTYTs7UUFDUUwsa0RBQVNBO1FBQ3NCQyxtRUFBZ0JBOzs7S0FGdkRJO0FBOEVULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW4uanN4PzJhODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXRMaXN0IGZyb20gXCIuL0NoYXRsaXN0L0NoYXRMaXN0XCI7XG5pbXBvcnQgRW1wdHkgZnJvbSBcIi4vRW1wdHlcIjtcbmltcG9ydCB7IG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBmaXJlYmFzZUF1dGggfSBmcm9tIFwiQC91dGlscy9GaXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQ0hFQ0tfVVNFUl9ST1VURSwgR0VUX01FU1NBR0VTX1JPVVRFLCBIT1NUIH0gZnJvbSBcIkAvdXRpbHMvQXBpUm91dGVzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IHJlZHVjZXJDYXNlcyB9IGZyb20gXCJAL2NvbnRleHQvY29uc3RhbnRzXCI7XG5pbXBvcnQgQ2hhdCBmcm9tIFwiLi9DaGF0L0NoYXRcIjtcbmltcG9ydCB7aW99IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5cblxuZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt7dXNlckluZm8sY3VycmVudENoYXRVc2VyfSxkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIGNvbnN0IFtyZWRpcmVjdExvZ2luLHNldFJlZGlyZWN0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25cbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYocmVkaXJlY3RMb2dpbil7XG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB9XG4gIH0sW3JlZGlyZWN0TG9naW5dKTtcblxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoZmlyZWJhc2VBdXRoLCBhc3luYyhjdXJyZW50VXNlcikgPT4ge1xuICAgIGlmICghY3VycmVudFVzZXIpIHtcbiAgICAgIHNldFJlZGlyZWN0TG9naW4odHJ1ZSk7XG4gICAgfVxuICAgIGlmKCF1c2VySW5mbyAmJiBjdXJyZW50VXNlcj8uZW1haWwpe1xuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChDSEVDS19VU0VSX1JPVVRFLHtlbWFpbDpjdXJyZW50VXNlci5lbWFpbH0pO1xuICAgICAgaWYoIWRhdGEuc3RhdHVzKXtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICB9XG4gICAgICBpZihkYXRhPy5kYXRhKXtcbiAgICAgIGNvbnN0IHtpZCxuYW1lLGVtYWlsLHByb2ZpbGVQaWN0dXJlOnByb2ZpbGVJbWFnZSxzdGF0dXN9PSBkYXRhLmRhdGE7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6cmVkdWNlckNhc2VzLlNFVF9VU0VSX0lORk8sXG4gICAgICAgIHVzZXJJbmZvOntcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHByb2ZpbGVJbWFnZSxcbiAgICAgICAgICBzdGF0dXMsXG4gICAgICAgIH0sXG4gICAgICB9KTsgXG4gICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZih1c2VySW5mbyl7XG4gICAgICBzb2NrZXQuY3VycmVudCA9IGlvKEhPU1QpO1xuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcImFkZC11c2VyXCIsdXNlckluZm8uaWQpO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOnJlZHVjZXJDYXNlcy5TRVRfU09DS0VULFxuICAgICAgICBzb2NrZXQsXG4gICAgICB9KTsgXG4gICAgfVxuICB9ICxbdXNlckluZm9dKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoc29ja2V0LmN1cnJlbnQpe1xuICAgICAgXG4gICAgfVxuICB9ICxbc29ja2V0LmN1cnJlbnRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3Qge2RhdGE6e21lc3NhZ2VzfX0gPSBhd2FpdCBheGlvcy5nZXQoYCR7R0VUX01FU1NBR0VTX1JPVVRFfS8ke3VzZXJJbmZvLmlkfS8ke2N1cnJlbnRDaGF0VXNlci5pZH1gKTtcbiAgICAgZGlzcGF0Y2goe1xuICAgICAgIHR5cGU6cmVkdWNlckNhc2VzLlNFVF9NRVNTQUdFUyxcbiAgICAgICBtZXNzYWdlcyxcbiAgICAgfSk7XG4gICAgfVxuICAgIGlmKGN1cnJlbnRDaGF0VXNlcj8uaWQpe1xuICAgICAgZ2V0TWVzc2FnZXMoKTtcbiAgICB9XG4gIH0gLFtjdXJyZW50Q2hhdFVzZXJdKTtcblxuICByZXR1cm4gPD5cbiAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1tYWluIGgtc2NyZWVuIHctc2NyZWVuIG1heC1oLXNjcmVlbiBtYXgtdy1mdWxsIG92ZXJmbG93LWhpZGRlblwiPiBcbiAgPENoYXRMaXN0Lz5cbiAge1xuICAgIGN1cnJlbnRDaGF0VXNlciA/IDxDaGF0Lz4gOiA8RW1wdHkvPlxuICB9XG4gIDwvZGl2PlxuICA8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDaGF0TGlzdCIsIkVtcHR5Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiZmlyZWJhc2VBdXRoIiwiYXhpb3MiLCJDSEVDS19VU0VSX1JPVVRFIiwiR0VUX01FU1NBR0VTX1JPVVRFIiwiSE9TVCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwidXNlU3RhdGVQcm92aWRlciIsInJlZHVjZXJDYXNlcyIsIkNoYXQiLCJpbyIsIk1haW4iLCJyb3V0ZXIiLCJ1c2VySW5mbyIsImN1cnJlbnRDaGF0VXNlciIsImRpc3BhdGNoIiwicmVkaXJlY3RMb2dpbiIsInNldFJlZGlyZWN0TG9naW4iLCJjb24iLCJzb2NrZXQiLCJ1c2VSZWYiLCJwdXNoIiwiY3VycmVudFVzZXIiLCJlbWFpbCIsImRhdGEiLCJwb3N0Iiwic3RhdHVzIiwiaWQiLCJuYW1lIiwicHJvZmlsZVBpY3R1cmUiLCJwcm9maWxlSW1hZ2UiLCJ0eXBlIiwiU0VUX1VTRVJfSU5GTyIsImN1cnJlbnQiLCJlbWl0IiwiU0VUX1NPQ0tFVCIsImdldE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJnZXQiLCJTRVRfTUVTU0FHRVMiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});