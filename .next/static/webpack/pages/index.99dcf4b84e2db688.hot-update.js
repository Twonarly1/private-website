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

/***/ "./src/components/List.tsx":
/*!*********************************!*\
  !*** ./src/components/List.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar SidebarRow = function(param) {\n    var Icon = param.Icon, src = param.src, title = param.title, onClick = param.onClick, content = param.content;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: function() {\n            return onClick === null || onClick === void 0 ? void 0 : onClick();\n        },\n        className: \"group:hover:font-bold group mx-auto flex w-[400px] items-center justify-between rounded-full px-6 py-[2px] transition-all duration-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    src,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"ml-2 text-base font-light text-gray-400 md:inline-flex lg:text-xl\",\n                        children: [\n                            title,\n                            \":\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/List.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/List.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"ml-2 mt-[2px] font-light text-gray-400 group-hover:font-bold\",\n                children: content\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/List.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/List.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_c = SidebarRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SidebarRow);\nvar _c;\n$RefreshReg$(_c, \"SidebarRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUEwRDtBQVUxRCxJQUFNQyxVQUFVLEdBQUcsZ0JBQW1EO1FBQWhEQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsR0FBRyxTQUFIQSxHQUFHLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsT0FBTyxTQUFQQSxPQUFPO0lBQ3RELHFCQUNFLDhEQUFDQyxLQUFHO1FBQ0ZGLE9BQU8sRUFBRTtZQUFNQSxPQUFBQSxPQUFPLGFBQVBBLE9BQU8sV0FBSSxHQUFYQSxLQUFBQSxDQUFXLEdBQVhBLE9BQU8sRUFBSTtTQUFBO1FBQzFCRyxTQUFTLEVBQUMsd0lBQXdJOzswQkFFbEosOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxNQUFNOztvQkFDbEJMLEdBQUc7b0JBQUUsR0FBRztrQ0FDVCw4REFBQ00sR0FBQzt3QkFBQ0QsU0FBUyxFQUFDLG1FQUFtRTs7NEJBQzdFSixLQUFLOzRCQUFDLEdBQ1Q7Ozs7Ozs2QkFBSTs7Ozs7O3FCQUNBOzBCQUNOLDhEQUFDSyxHQUFDO2dCQUFDRCxTQUFTLEVBQUMsOERBQThEOzBCQUN4RUYsT0FBTzs7Ozs7cUJBQ047Ozs7OzthQUNBLENBQ1A7Q0FDRjtBQWpCS0wsS0FBQUEsVUFBVTtBQW1CaEIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGlzdC50c3g/MmNkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgSW1nSFRNTEF0dHJpYnV0ZXMsIFNWR1Byb3BzIH0gZnJvbSAncmVhY3QnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIEljb24/OiAocHJvcHM6IFNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+KSA9PiBKU1guRWxlbWVudFxuICBzcmM6IHN0cmluZyB8IHVuZGVmaW5lZFxuICB0aXRsZTogc3RyaW5nXG4gIGNvbnRlbnQ6IGFueVxuICBvbkNsaWNrPzogKCkgPT4ge31cbn1cblxuY29uc3QgU2lkZWJhclJvdyA9ICh7IEljb24sIHNyYywgdGl0bGUsIG9uQ2xpY2ssIGNvbnRlbnQgfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrPy4oKX1cbiAgICAgIGNsYXNzTmFtZT1cImdyb3VwOmhvdmVyOmZvbnQtYm9sZCBncm91cCBteC1hdXRvIGZsZXggdy1bNDAwcHhdIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC1mdWxsIHB4LTYgcHktWzJweF0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAge3NyY317JyAnfVxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIHRleHQtYmFzZSBmb250LWxpZ2h0IHRleHQtZ3JheS00MDAgbWQ6aW5saW5lLWZsZXggbGc6dGV4dC14bFwiPlxuICAgICAgICAgIHt0aXRsZX06XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMiBtdC1bMnB4XSBmb250LWxpZ2h0IHRleHQtZ3JheS00MDAgZ3JvdXAtaG92ZXI6Zm9udC1ib2xkXCI+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJSb3dcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNpZGViYXJSb3ciLCJJY29uIiwic3JjIiwidGl0bGUiLCJvbkNsaWNrIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/List.tsx\n"));

/***/ })

});