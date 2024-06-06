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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [{ userInfo , currentChatUser  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [socketEvent, setSocketEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const socket = useRef();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) {\n            router.push(\"/login\");\n        }\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_5__.firebaseAuth, async (currentUser)=>{\n        if (!currentUser) {\n            setRedirectLogin(true);\n        }\n        if (!userInfo && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.email)) {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            if (data === null || data === void 0 ? void 0 : data.data) {\n                const { id , name , email , profilePicture: profileImage , status  } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo) {\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_11__.io)(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.HOST);\n            socket.current.emit(\"add-user\", userInfo.id);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_SOCKET,\n                socket\n            });\n        }\n    }, [\n        userInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (socket.current && !socketEvent) {\n            socket.current.on(\"msg-recieve\", (data)=>{\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.ADD_MESSAGE,\n                    newMessage\n                });\n            });\n            setSocketEvent(true);\n        }\n    }, [\n        socket.current\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getMessages = async ()=>{\n            const { data: { messages  }  } = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.GET_MESSAGES_ROUTE, \"/\").concat(userInfo.id, \"/\").concat(currentChatUser.id));\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_9__.reducerCases.SET_MESSAGES,\n                messages\n            });\n        };\n        if (currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.id) {\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 92,\n                    columnNumber: 3\n                }, this),\n                currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 23\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 33\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alfez\\\\NodeJsProject\\\\Real-Time-Chating-Application\\\\client\\\\src\\\\components\\\\Main.jsx\",\n            lineNumber: 91,\n            columnNumber: 3\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"EkRl/rVU8RLLHMod00aBAn9r7yU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_8__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0U7QUFDZjtBQUN1QjtBQUNHO0FBQzVCO0FBQ3FEO0FBQzlDO0FBQ087QUFDa0I7QUFDUDtBQUNwQjtBQUNLO0FBR3BDLFNBQVNnQixPQUFPOztJQUNkLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNLENBQUMsRUFBQ08sU0FBUSxFQUFDQyxnQkFBZSxFQUFDLEVBQUNDLFNBQVMsR0FBR1IsdUVBQWdCQTtJQUM5RCxNQUFNLENBQUNTLGVBQWNDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3ZELE1BQU0sQ0FBQ2EsYUFBYUMsZUFBZSxHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3BELE1BQU1lLFNBQVNDO0lBQ2Z6QixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBR29CLGVBQWM7WUFDZkosT0FBT1UsSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILEdBQUU7UUFBQ047S0FBYztJQUVqQmpCLGlFQUFrQkEsQ0FBQ0MsK0RBQVlBLEVBQUUsT0FBTXVCLGNBQWdCO1FBQ3JELElBQUksQ0FBQ0EsYUFBYTtZQUNoQk4saUJBQWlCLElBQUk7UUFDdkIsQ0FBQztRQUNELElBQUcsQ0FBQ0osWUFBWVUsQ0FBQUEsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhQyxLQUFLLEdBQUM7WUFDakMsTUFBTSxFQUFDQyxLQUFJLEVBQUMsR0FBRyxNQUFNeEIsbURBQVUsQ0FBQ0MsOERBQWdCQSxFQUFDO2dCQUFDc0IsT0FBTUQsWUFBWUMsS0FBSztZQUFBO1lBQ3pFLElBQUcsQ0FBQ0MsS0FBS0UsTUFBTSxFQUFDO2dCQUNkZixPQUFPVSxJQUFJLENBQUM7WUFDZCxDQUFDO1lBQ0QsSUFBR0csaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNQSxJQUFJLEVBQUM7Z0JBQ2QsTUFBTSxFQUFDRyxHQUFFLEVBQUNDLEtBQUksRUFBQ0wsTUFBSyxFQUFDTSxnQkFBZUMsYUFBWSxFQUFDSixPQUFNLEVBQUMsR0FBRUYsS0FBS0EsSUFBSTtnQkFDbkVWLFNBQVM7b0JBQ1BpQixNQUFLeEIsMEVBQTBCO29CQUMvQkssVUFBUzt3QkFDUGU7d0JBQ0FDO3dCQUNBTDt3QkFDQU87d0JBQ0FKO29CQUNGO2dCQUNGO1lBQ0YsQ0FBQztRQUNELENBQUM7SUFDSDtJQUVBL0IsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUdpQixVQUFTO1lBQ1ZPLE9BQU9jLE9BQU8sR0FBR3hCLHFEQUFFQSxDQUFDTixrREFBSUE7WUFDeEJnQixPQUFPYyxPQUFPLENBQUNDLElBQUksQ0FBQyxZQUFXdEIsU0FBU2UsRUFBRTtZQUMxQ2IsU0FBUztnQkFDUGlCLE1BQUt4Qix1RUFBdUI7Z0JBQzVCWTtZQUNGO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ1A7S0FBUztJQUdiakIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUd3QixPQUFPYyxPQUFPLElBQUksQ0FBQ2hCLGFBQVk7WUFDaENFLE9BQU9jLE9BQU8sQ0FBQ0csRUFBRSxDQUFDLGVBQWUsQ0FBQ1osT0FBUztnQkFDekNWLFNBQVM7b0JBQ1BpQixNQUFLeEIsd0VBQXdCO29CQUM3QitCO2dCQUNGO1lBQ0Y7WUFDQXBCLGVBQWUsSUFBSTtRQUNyQixDQUFDO0lBQ0gsR0FBRztRQUFDQyxPQUFPYyxPQUFPO0tBQUM7SUFFbkJ0QyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTTRDLGNBQWMsVUFBVztZQUMvQixNQUFNLEVBQUNmLE1BQUssRUFBQ2dCLFNBQVEsRUFBQyxHQUFDLEdBQUcsTUFBTXhDLGtEQUFTLENBQUMsR0FBeUJZLE9BQXRCVixnRUFBa0JBLEVBQUMsS0FBa0JXLE9BQWZELFNBQVNlLEVBQUUsRUFBQyxLQUFzQixPQUFuQmQsZ0JBQWdCYyxFQUFFO1lBQ25HYixTQUFTO2dCQUNQaUIsTUFBS3hCLHlFQUF5QjtnQkFDOUJpQztZQUNGO1FBQ0Q7UUFDQSxJQUFHM0IsNEJBQUFBLDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBaUJjLEVBQUUsRUFBQztZQUNyQlk7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDMUI7S0FBZ0I7SUFFcEIscUJBQU87a0JBQ1AsNEVBQUM4QjtZQUFJQyxXQUFVOzs4QkFDZiw4REFBQ2hELDBEQUFRQTs7Ozs7Z0JBRVBpQixnQ0FBa0IsOERBQUNMLG1EQUFJQTs7Ozt5Q0FBSyw4REFBQ1gsOENBQUtBOzs7O3dCQUFFOzs7Ozs7OztBQUl4QztHQWxGU2E7O1FBQ1FMLGtEQUFTQTtRQUNzQkMsbUVBQWdCQTs7O0tBRnZESTtBQW9GVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluLmpzeD8yYTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGF0TGlzdCBmcm9tIFwiLi9DaGF0bGlzdC9DaGF0TGlzdFwiO1xuaW1wb3J0IEVtcHR5IGZyb20gXCIuL0VtcHR5XCI7XG5pbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZmlyZWJhc2VBdXRoIH0gZnJvbSBcIkAvdXRpbHMvRmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IENIRUNLX1VTRVJfUk9VVEUsIEdFVF9NRVNTQUdFU19ST1VURSwgSE9TVCB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWR1Y2VyQ2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xuaW1wb3J0IENoYXQgZnJvbSBcIi4vQ2hhdC9DaGF0XCI7XG5pbXBvcnQge2lvfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuXG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbe3VzZXJJbmZvLGN1cnJlbnRDaGF0VXNlcn0sZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xuICBjb25zdCBbcmVkaXJlY3RMb2dpbixzZXRSZWRpcmVjdExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NvY2tldEV2ZW50LCBzZXRTb2NrZXRFdmVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNvY2tldCA9IHVzZVJlZigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHJlZGlyZWN0TG9naW4pe1xuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgfVxuICB9LFtyZWRpcmVjdExvZ2luXSk7XG5cbiAgb25BdXRoU3RhdGVDaGFuZ2VkKGZpcmViYXNlQXV0aCwgYXN5bmMoY3VycmVudFVzZXIpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRVc2VyKSB7XG4gICAgICBzZXRSZWRpcmVjdExvZ2luKHRydWUpO1xuICAgIH1cbiAgICBpZighdXNlckluZm8gJiYgY3VycmVudFVzZXI/LmVtYWlsKXtcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoQ0hFQ0tfVVNFUl9ST1VURSx7ZW1haWw6Y3VycmVudFVzZXIuZW1haWx9KTtcbiAgICAgIGlmKCFkYXRhLnN0YXR1cyl7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgICAgfVxuICAgICAgaWYoZGF0YT8uZGF0YSl7XG4gICAgICBjb25zdCB7aWQsbmFtZSxlbWFpbCxwcm9maWxlUGljdHVyZTpwcm9maWxlSW1hZ2Usc3RhdHVzfT0gZGF0YS5kYXRhO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOnJlZHVjZXJDYXNlcy5TRVRfVVNFUl9JTkZPLFxuICAgICAgICB1c2VySW5mbzp7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBwcm9maWxlSW1hZ2UsXG4gICAgICAgICAgc3RhdHVzLFxuICAgICAgICB9LFxuICAgICAgfSk7IFxuICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYodXNlckluZm8pe1xuICAgICAgc29ja2V0LmN1cnJlbnQgPSBpbyhIT1NUKTtcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJhZGQtdXNlclwiLHVzZXJJbmZvLmlkKTtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTpyZWR1Y2VyQ2FzZXMuU0VUX1NPQ0tFVCxcbiAgICAgICAgc29ja2V0LFxuICAgICAgfSk7IFxuICAgIH1cbiAgfSAsW3VzZXJJbmZvXSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHNvY2tldC5jdXJyZW50ICYmICFzb2NrZXRFdmVudCl7XG4gICAgICBzb2NrZXQuY3VycmVudC5vbihcIm1zZy1yZWNpZXZlXCIsIChkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOnJlZHVjZXJDYXNlcy5BRERfTUVTU0FHRSxcbiAgICAgICAgICBuZXdNZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgc2V0U29ja2V0RXZlbnQodHJ1ZSlcbiAgICB9XG4gIH0gLFtzb2NrZXQuY3VycmVudF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYygpID0+IHtcbiAgICBjb25zdCB7ZGF0YTp7bWVzc2FnZXN9fSA9IGF3YWl0IGF4aW9zLmdldChgJHtHRVRfTUVTU0FHRVNfUk9VVEV9LyR7dXNlckluZm8uaWR9LyR7Y3VycmVudENoYXRVc2VyLmlkfWApO1xuICAgICBkaXNwYXRjaCh7XG4gICAgICAgdHlwZTpyZWR1Y2VyQ2FzZXMuU0VUX01FU1NBR0VTLFxuICAgICAgIG1lc3NhZ2VzLFxuICAgICB9KTtcbiAgICB9XG4gICAgaWYoY3VycmVudENoYXRVc2VyPy5pZCl7XG4gICAgICBnZXRNZXNzYWdlcygpO1xuICAgIH1cbiAgfSAsW2N1cnJlbnRDaGF0VXNlcl0pO1xuXG4gIHJldHVybiA8PlxuICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLW1haW4gaC1zY3JlZW4gdy1zY3JlZW4gbWF4LWgtc2NyZWVuIG1heC13LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+IFxuICA8Q2hhdExpc3QvPlxuICB7XG4gICAgY3VycmVudENoYXRVc2VyID8gPENoYXQvPiA6IDxFbXB0eS8+XG4gIH1cbiAgPC9kaXY+XG4gIDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkNoYXRMaXN0IiwiRW1wdHkiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJmaXJlYmFzZUF1dGgiLCJheGlvcyIsIkNIRUNLX1VTRVJfUk9VVEUiLCJHRVRfTUVTU0FHRVNfUk9VVEUiLCJIT1NUIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZVByb3ZpZGVyIiwicmVkdWNlckNhc2VzIiwiQ2hhdCIsImlvIiwiTWFpbiIsInJvdXRlciIsInVzZXJJbmZvIiwiY3VycmVudENoYXRVc2VyIiwiZGlzcGF0Y2giLCJyZWRpcmVjdExvZ2luIiwic2V0UmVkaXJlY3RMb2dpbiIsInNvY2tldEV2ZW50Iiwic2V0U29ja2V0RXZlbnQiLCJzb2NrZXQiLCJ1c2VSZWYiLCJwdXNoIiwiY3VycmVudFVzZXIiLCJlbWFpbCIsImRhdGEiLCJwb3N0Iiwic3RhdHVzIiwiaWQiLCJuYW1lIiwicHJvZmlsZVBpY3R1cmUiLCJwcm9maWxlSW1hZ2UiLCJ0eXBlIiwiU0VUX1VTRVJfSU5GTyIsImN1cnJlbnQiLCJlbWl0IiwiU0VUX1NPQ0tFVCIsIm9uIiwiQUREX01FU1NBR0UiLCJuZXdNZXNzYWdlIiwiZ2V0TWVzc2FnZXMiLCJtZXNzYWdlcyIsImdldCIsIlNFVF9NRVNTQUdFUyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});