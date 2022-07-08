"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/work",{

/***/ "./src/pages/work.tsx":
/*!****************************!*\
  !*** ./src/pages/work.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Work; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction Work() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), works = ref[0], setWorks = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetch(\"/resumeData.json\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setWorks(data.portfolio.projects);\n        });\n    }, []);\n    var allProjects = works.map(function(projects) {\n        var projectImage = \"images/portfolio/\" + projects.image;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"rounded-lg border bg-white shadow-lg\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"\",\n                href: projects.url,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-items-center overflow-hidden rounded-t-lg p-6 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: projectImage,\n                            alt: projects.title,\n                            className: \"relative h-60 w-full object-cover\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/work.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/work.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-1 flex-col justify-between rounded-b-lg border-t p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-semibold text-gray-800 group-hover:text-gray-700\",\n                                children: projects.title\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/work.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-sans text-sm font-light text-gray-500\",\n                                children: projects.description\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/work.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/work.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/work.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        }, projects.title, false, {\n            fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/work.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-5xl p-3 pt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl font-bold\",\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/work.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-2xl text-gray-600\",\n                            children: \"My Contributions\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/work.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3\",\n                            children: allProjects\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/work.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/work.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/work.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/work.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Work, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Work;\nvar _c;\n$RefreshReg$(_c, \"Work\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvd29yay50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFDRTs7QUFtQjVCLFNBQVNHLElBQUksR0FBRzs7SUFDN0IsSUFBMEJELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFyQnhDLEtBcUJjLEdBQWNBLEdBQVksR0FBMUIsRUFyQmQsUUFxQndCLEdBQUlBLEdBQVksR0FBaEI7SUFFdEJELGdEQUFTLENBQUMsV0FBTTtRQUNkSyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FDdEJDLElBQUksQ0FBQyxTQUFDQyxHQUFHO21CQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRTtTQUFBLENBQUMsQ0FDekJGLElBQUksQ0FBQyxTQUFDRyxJQUFJLEVBQUs7WUFDZEwsUUFBUSxDQUFDSyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDO1NBQ2xDLENBQUM7S0FDTCxFQUFFLEVBQUUsQ0FBQztJQUVOLElBQU1DLFdBQVcsR0FBR1QsS0FBSyxDQUFDVSxHQUFHLENBQUMsU0FBVUYsUUFBUSxFQUFFO1FBQ2hELElBQUlHLFlBQVksR0FBRyxtQkFBbUIsR0FBR0gsUUFBUSxDQUFDSSxLQUFLO1FBQ3ZELHFCQUNFLDhEQUFDQyxLQUFHO1lBRUZDLFNBQVMsRUFBQyxzQ0FBc0M7c0JBRWhELDRFQUFDQyxHQUFDO2dCQUFDRCxTQUFTLEVBQUMsRUFBRTtnQkFBQ0UsSUFBSSxFQUFFUixRQUFRLENBQUNTLEdBQUc7O2tDQUNoQyw4REFBQ0osS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLHdEQUF3RDtrQ0FDckUsNEVBQUNJLEtBQUc7NEJBQ0ZDLEdBQUcsRUFBRVIsWUFBWTs0QkFDakJTLEdBQUcsRUFBRVosUUFBUSxDQUFDYSxLQUFLOzRCQUNuQlAsU0FBUyxFQUFDLG1DQUFtQzs7Ozs7Z0NBQzdDOzs7Ozs0QkFDRTtrQ0FDTiw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGdFQUFnRTs7MENBQzdFLDhEQUFDRCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsdURBQXVEOzBDQUNuRU4sUUFBUSxDQUFDYSxLQUFLOzs7OztvQ0FDWDswQ0FDTiw4REFBQ1IsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLDRDQUE0QzswQ0FDeEROLFFBQVEsQ0FBQ2MsV0FBVzs7Ozs7b0NBQ2pCOzs7Ozs7NEJBQ0Y7Ozs7OztvQkFDSjtXQW5CQ2QsUUFBUSxDQUFDYSxLQUFLOzs7O2dCQW9CZixDQUNQO0tBQ0YsQ0FBQztJQUNGLHFCQUNFOzswQkFDRSw4REFBQ1IsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLG9CQUFvQjswQkFDakMsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxLQUFLOztzQ0FDbEIsOERBQUNTLElBQUU7NEJBQUNULFNBQVMsRUFBQyxvQkFBb0I7c0NBQUMsVUFBUTs7Ozs7Z0NBQUs7c0NBQ2hELDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsd0JBQXdCO3NDQUFDLGtCQUFnQjs7Ozs7Z0NBQU07c0NBQzlELDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsNENBQTRDO3NDQUN4REwsV0FBVzs7Ozs7Z0NBQ1I7Ozs7Ozt3QkFDRjs7Ozs7b0JBQ0Y7MEJBQ04sOERBQUNiLDBEQUFNOzs7O29CQUFHOztvQkFDVCxDQUNKO0NBQ0Y7R0FwRHVCRyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3dvcmsudHN4P2EyOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBbGxQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL0FsbFByb2plY3RzJ1xuaW1wb3J0IHsgTWFpbiwgQWNoaWV2ZW1lbnQsIFByb2plY3QsIFJlcG8gfSBmcm9tICcuLi8uLi90eXBpbmdzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbnRlcmZhY2UgQXBwUHJvcHMge1xuICBtYWluOiBNYWluW11cbiAgYWNoaWV2ZW1lbnRzOiBBY2hpZXZlbWVudFtdXG4gIHByb2plY3RzOiBQcm9qZWN0W11cbiAgb3RoZXJQcm9qZWN0czogUHJvamVjdFxuXG4gIHJlcG9zOiB7XG4gICAgc3RhcnJlZFJlcG9zOiBSZXBvW11cbiAgICBjb250cmlidXRlZFJlcG9zOiBSZXBvW11cbiAgfVxuXG4gIGltYWdlczogYW55XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmsoKSB7XG4gIGNvbnN0IFt3b3Jrcywgc2V0V29ya3NdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnL3Jlc3VtZURhdGEuanNvbicpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0V29ya3MoZGF0YS5wb3J0Zm9saW8ucHJvamVjdHMpXG4gICAgICB9KVxuICB9LCBbXSlcblxuICBjb25zdCBhbGxQcm9qZWN0cyA9IHdvcmtzLm1hcChmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgICB2YXIgcHJvamVjdEltYWdlID0gJ2ltYWdlcy9wb3J0Zm9saW8vJyArIHByb2plY3RzLmltYWdlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtwcm9qZWN0cy50aXRsZX1cbiAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYmctd2hpdGUgc2hhZG93LWxnXCJcbiAgICAgID5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiXCIgaHJlZj17cHJvamVjdHMudXJsfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktaXRlbXMtY2VudGVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLXQtbGcgcC02IFwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e3Byb2plY3RJbWFnZX1cbiAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0cy50aXRsZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC02MCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC1iLWxnIGJvcmRlci10IHAtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDAgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICB7cHJvamVjdHMudGl0bGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtc20gZm9udC1saWdodCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgIHtwcm9qZWN0cy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNXhsIHAtMyBwdC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZFwiPlByb2plY3RzPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS02MDBcIj5NeSBDb250cmlidXRpb25zPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTQgc206Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICAgIHthbGxQcm9qZWN0c31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkZvb3RlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiV29yayIsIndvcmtzIiwic2V0V29ya3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInBvcnRmb2xpbyIsInByb2plY3RzIiwiYWxsUHJvamVjdHMiLCJtYXAiLCJwcm9qZWN0SW1hZ2UiLCJpbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwidXJsIiwiaW1nIiwic3JjIiwiYWx0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/work.tsx\n");

/***/ })

});