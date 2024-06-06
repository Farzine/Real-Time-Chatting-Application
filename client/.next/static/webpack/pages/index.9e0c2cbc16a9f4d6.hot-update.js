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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo , currentChatUser  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [socketEvent, setSocketEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) {\n            router.push(\"/login\");\n        }\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        if (!currentUser) {\n            setRedirectLogin(true);\n        }\n        if (!userInfo && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.email)) {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            if (data === null || data === void 0 ? void 0 : data.data) {\n                const { id , name , email , profilePicture: profileImage , status  } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo) {\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_11__.io)(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.HOST);\n            socket.current.emit(\"add-user\", userInfo.id);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_SOCKET,\n                socket\n            });\n        }\n    }, [\n        userInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (socket.current && !socketEvent) {\n            socket.current.on(\"msg-recieve\", (data)=>{\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.ADD_MESSAGE,\n                    newMessage: {\n                        ...data.message\n                    }\n                });\n            });\n            setSocketEvent(true);\n        }\n    }, [\n        socket.current\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getMessages = async ()=>{\n            const { data: { messages  }  } = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.GET_MESSAGES_ROUTE, \"/\").concat(userInfo.id, \"/\").concat(currentChatUser.id));\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_MESSAGES,\n                messages\n            });\n        };\n        if (currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.id) {\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 95,\n                    columnNumber: 3\n                }, this),\n                currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 97,\n                    columnNumber: 23\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 97,\n                    columnNumber: 33\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n            lineNumber: 94,\n            columnNumber: 3\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"EkRl/rVU8RLLHMod00aBAn9r7yU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtnQkFDOUJrQztZQUNGO1FBQ0Q7UUFDQSxJQUFHM0IsNEJBQUFBLDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBaUJhLEVBQUUsRUFBQztZQUNyQmE7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDMUI7S0FBZ0I7SUFFcEIscUJBQU87a0JBQ1AsNEVBQUM4QjtZQUFJQyxXQUFVOzs4QkFDZiw4REFBQ2pELDBEQUFRQTs7Ozs7Z0JBRVBrQixnQ0FBa0IsOERBQUNOLG1EQUFJQTs7Ozt5Q0FBSyw4REFBQ1gsOENBQUtBOzs7O3dCQUFFOzs7Ozs7OztBQUl4QztHQXBGU2M7O1FBQ1FOLGtEQUFTQTtRQUNzQkMsbUVBQWdCQTs7O0tBRnZESztBQXNGVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluLmpzeD8yYTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGF0TGlzdCBmcm9tIFwiLi9DaGF0bGlzdC9DaGF0TGlzdFwiO1xuaW1wb3J0IEVtcHR5IGZyb20gXCIuL0VtcHR5XCI7XG5pbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZmlyZWJhc2VBdXRoIH0gZnJvbSBcIkAvdXRpbHMvRmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IENIRUNLX1VTRVJfUk9VVEUsIEdFVF9NRVNTQUdFU19ST1VURSwgSE9TVCB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWR1Y2VyQ2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xuaW1wb3J0IENoYXQgZnJvbSBcIi4vQ2hhdC9DaGF0XCI7XG5pbXBvcnQge2lvfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt7dXNlckluZm8sY3VycmVudENoYXRVc2VyfSxkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIGNvbnN0IFtyZWRpcmVjdExvZ2luLHNldFJlZGlyZWN0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc29ja2V0RXZlbnQsIHNldFNvY2tldEV2ZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYocmVkaXJlY3RMb2dpbil7XG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB9XG4gIH0sW3JlZGlyZWN0TG9naW5dKTtcblxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoZmlyZWJhc2VBdXRoLCBhc3luYyhjdXJyZW50VXNlcikgPT4ge1xuICAgIGlmICghY3VycmVudFVzZXIpIHtcbiAgICAgIHNldFJlZGlyZWN0TG9naW4odHJ1ZSk7XG4gICAgfVxuICAgIGlmKCF1c2VySW5mbyAmJiBjdXJyZW50VXNlcj8uZW1haWwpe1xuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChDSEVDS19VU0VSX1JPVVRFLHtlbWFpbDpjdXJyZW50VXNlci5lbWFpbH0pO1xuICAgICAgaWYoIWRhdGEuc3RhdHVzKXtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICB9XG4gICAgICBpZihkYXRhPy5kYXRhKXtcbiAgICAgIGNvbnN0IHtpZCxuYW1lLGVtYWlsLHByb2ZpbGVQaWN0dXJlOnByb2ZpbGVJbWFnZSxzdGF0dXN9PSBkYXRhLmRhdGE7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6cmVkdWNlckNhc2VzLlNFVF9VU0VSX0lORk8sXG4gICAgICAgIHVzZXJJbmZvOntcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHByb2ZpbGVJbWFnZSxcbiAgICAgICAgICBzdGF0dXMsXG4gICAgICAgIH0sXG4gICAgICB9KTsgXG4gICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZih1c2VySW5mbyl7XG4gICAgICBzb2NrZXQuY3VycmVudCA9IGlvKEhPU1QpO1xuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcImFkZC11c2VyXCIsdXNlckluZm8uaWQpO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOnJlZHVjZXJDYXNlcy5TRVRfU09DS0VULFxuICAgICAgICBzb2NrZXQsXG4gICAgICB9KTsgXG4gICAgfVxuICB9ICxbdXNlckluZm9dKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoc29ja2V0LmN1cnJlbnQgJiYgIXNvY2tldEV2ZW50KXtcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibXNnLXJlY2lldmVcIiwgKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6cmVkdWNlckNhc2VzLkFERF9NRVNTQUdFLFxuICAgICAgICAgIG5ld01lc3NhZ2U6e1xuICAgICAgICAgICAgLi4uZGF0YS5tZXNzYWdlLFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHNldFNvY2tldEV2ZW50KHRydWUpXG4gICAgfVxuICB9ICxbc29ja2V0LmN1cnJlbnRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3Qge2RhdGE6e21lc3NhZ2VzfX0gPSBhd2FpdCBheGlvcy5nZXQoYCR7R0VUX01FU1NBR0VTX1JPVVRFfS8ke3VzZXJJbmZvLmlkfS8ke2N1cnJlbnRDaGF0VXNlci5pZH1gKTtcbiAgICAgZGlzcGF0Y2goe1xuICAgICAgIHR5cGU6cmVkdWNlckNhc2VzLlNFVF9NRVNTQUdFUyxcbiAgICAgICBtZXNzYWdlcyxcbiAgICAgfSk7XG4gICAgfVxuICAgIGlmKGN1cnJlbnRDaGF0VXNlcj8uaWQpe1xuICAgICAgZ2V0TWVzc2FnZXMoKTtcbiAgICB9XG4gIH0gLFtjdXJyZW50Q2hhdFVzZXJdKTtcblxuICByZXR1cm4gPD5cbiAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1tYWluIGgtc2NyZWVuIHctc2NyZWVuIG1heC1oLXNjcmVlbiBtYXgtdy1mdWxsIG92ZXJmbG93LWhpZGRlblwiPiBcbiAgPENoYXRMaXN0Lz5cbiAge1xuICAgIGN1cnJlbnRDaGF0VXNlciA/IDxDaGF0Lz4gOiA8RW1wdHkvPlxuICB9XG4gIDwvZGl2PlxuICA8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDaGF0TGlzdCIsIkVtcHR5Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiZmlyZWJhc2VBdXRoIiwiYXhpb3MiLCJDSEVDS19VU0VSX1JPVVRFIiwiR0VUX01FU1NBR0VTX1JPVVRFIiwiSE9TVCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwidXNlU3RhdGVQcm92aWRlciIsInJlZHVjZXJDYXNlcyIsIkNoYXQiLCJpbyIsInVzZVJlZiIsIk1haW4iLCJyb3V0ZXIiLCJ1c2VySW5mbyIsImN1cnJlbnRDaGF0VXNlciIsImRpc3BhdGNoIiwicmVkaXJlY3RMb2dpbiIsInNldFJlZGlyZWN0TG9naW4iLCJzb2NrZXRFdmVudCIsInNldFNvY2tldEV2ZW50Iiwic29ja2V0IiwicHVzaCIsImN1cnJlbnRVc2VyIiwiZW1haWwiLCJkYXRhIiwicG9zdCIsInN0YXR1cyIsImlkIiwibmFtZSIsInByb2ZpbGVQaWN0dXJlIiwicHJvZmlsZUltYWdlIiwidHlwZSIsIlNFVF9VU0VSX0lORk8iLCJjdXJyZW50IiwiZW1pdCIsIlNFVF9TT0NLRVQiLCJvbiIsIkFERF9NRVNTQUdFIiwibmV3TWVzc2FnZSIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlcyIsIm1lc3NhZ2VzIiwiZ2V0IiwiU0VUX01FU1NBR0VTIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});