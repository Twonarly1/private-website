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

/***/ "./src/components/Achievements.tsx":
/*!*****************************************!*\
  !*** ./src/components/Achievements.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List */ \"./src/components/List.tsx\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Achievements = function(param) {\n    var data = param.data;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showMore = ref[0], setShowMore = ref[1];\n    if (data) {\n        var ref1;\n        var certificates = (ref1 = data.certificates) === null || ref1 === void 0 ? void 0 : ref1.map(function(certificate) {\n            var src = \"/images/certificates/\" + certificate.src;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" md:h-40\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: certificate.url,\n                            //@ts-ignore\n                            name: certificate.name,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: certificate.name,\n                                src: src,\n                                className: \"mx-auto h-fit w-fit rounded-lg object-cover shadow-md \"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"\",\n                            children: [\n                                \" \",\n                                certificate.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)\n            }, certificate.name, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"resume\",\n        className: \"mb-24 w-full max-w-5xl p-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-3 pt-32\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-4xl font-bold\",\n                        children: \"Achievements\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-2xl text-gray-600\",\n                        children: \"Certifications and more...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto gap-6 space-y-6 p-3 pt-6 md:grid md:grid-cols-2 md:space-y-0\",\n                children: certificates\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-orange-300 mt-6 flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    imagePath: \"/images/achievements/certificate.svg\",\n                    title: \"Registered\",\n                    content: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this);\n};\n_s(Achievements, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Achievements;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Achievements);\nvar _c;\n$RefreshReg$(_c, \"Achievements\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BY2hpZXZlbWVudHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUF1QztBQUNSOztBQVEvQixJQUFNRyxZQUFZLEdBQUcsZ0JBQWM7UUFBWEMsSUFBSSxTQUFKQSxJQUFJOztJQUMxQixJQUFnQ0gsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF4Q0ksUUFBUSxHQUFpQkosR0FBZSxHQUFoQyxFQUFFSyxXQUFXLEdBQUlMLEdBQWUsR0FBbkI7SUFDNUIsSUFBSUcsSUFBSSxFQUFFO1lBQ1dBLElBQWlCO1FBQXBDLElBQUlHLFlBQVksR0FBR0gsQ0FBQUEsSUFBaUIsR0FBakJBLElBQUksQ0FBQ0csWUFBWSxjQUFqQkgsSUFBaUIsV0FBSyxHQUF0QkEsS0FBQUEsQ0FBc0IsR0FBdEJBLElBQWlCLENBQUVJLEdBQUcsQ0FBQyxTQUFVQyxXQUFXLEVBQUU7WUFDL0QsSUFBSUMsR0FBRyxHQUFHLHVCQUF1QixHQUFHRCxXQUFXLENBQUNDLEdBQUc7WUFDbkQscUJBQ0UsOERBQUNDLEtBQUc7Z0JBQXdCQyxTQUFTLEVBQUMsVUFBVTswQkFDOUMsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxFQUFFOztzQ0FDZiw4REFBQ0MsR0FBQzs0QkFDQUMsSUFBSSxFQUFFTCxXQUFXLENBQUNNLEdBQUc7NEJBQ3JCLFlBQVk7NEJBQ1pDLElBQUksRUFBRVAsV0FBVyxDQUFDTyxJQUFJO3NDQUV0Qiw0RUFBQ0MsS0FBRztnQ0FDRkMsR0FBRyxFQUFFVCxXQUFXLENBQUNPLElBQUk7Z0NBQ3JCTixHQUFHLEVBQUVBLEdBQUc7Z0NBQ1JFLFNBQVMsRUFBQyx3REFDWDs7Ozs7b0NBQ0M7Ozs7O2dDQUNBO3NDQUNKLDhEQUFDTyxJQUFFOzRCQUFDUCxTQUFTLEVBQUMsRUFBRTs7Z0NBQUMsR0FBQztnQ0FBQ0gsV0FBVyxDQUFDTyxJQUFJOzs7Ozs7Z0NBQU07Ozs7Ozt3QkFDckM7ZUFmRVAsV0FBVyxDQUFDTyxJQUFJOzs7O29CQWdCcEIsQ0FDUDtTQUNGLENBQUM7S0FDSDtJQUNELHFCQUNFLDhEQUFDTCxLQUFHO1FBQUNTLEVBQUUsRUFBQyxRQUFRO1FBQUNSLFNBQVMsRUFBQyw0QkFBNEI7OzBCQUNyRCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFdBQVc7O2tDQUN4Qiw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLG9CQUFvQjtrQ0FBQyxjQUFZOzs7Ozs2QkFBTTtrQ0FDdEQsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyx3QkFBd0I7a0NBQUMsNEJBQTBCOzs7Ozs2QkFBTTs7Ozs7O3FCQUNwRTswQkFDTiw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHNFQUFzRTswQkFDbEZMLFlBQVk7Ozs7O3FCQUNUOzBCQUNOLDhEQUFDSSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsd0NBQXdDOzBCQUNyRCw0RUFBQ1YsNkNBQVU7b0JBQ1RtQixTQUFTLEVBQUMsc0NBQXNDO29CQUNoREMsS0FBSyxFQUFDLFlBQVk7b0JBQ2xCQyxPQUFPLEVBQUMsRUFBRTs7Ozs7eUJBQ1Y7Ozs7O3FCQUNFOzs7Ozs7YUFVRixDQUNQO0NBQ0Y7R0FyREtwQixZQUFZO0FBQVpBLEtBQUFBLFlBQVk7QUF1RGxCLCtEQUFlQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FjaGlldmVtZW50cy50c3g/MjE5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTaWRlYmFyUm93IGZyb20gJy4vTGlzdCdcbmltcG9ydCB7IEJhZGdlQ2hlY2tJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xuXG5pbXBvcnQgQnJpZWZjYXNlIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvYWNoaWV2ZW1lbnRzL2JyaWVmY2FzZS5zdmcnXG5pbXBvcnQgTG9jayBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2FjaGlldmVtZW50cy9sb2NrLnN2ZydcbmltcG9ydCBDZXJ0aWZpY2F0ZSBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2FjaGlldmVtZW50cy9jZXJ0aWZpY2F0ZS5zdmcnXG5pbXBvcnQgVHJvcGh5IGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvYWNoaWV2ZW1lbnRzL3Ryb3BoeS5zdmcnXG5cbmNvbnN0IEFjaGlldmVtZW50cyA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCBbc2hvd01vcmUsIHNldFNob3dNb3JlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBpZiAoZGF0YSkge1xuICAgIHZhciBjZXJ0aWZpY2F0ZXMgPSBkYXRhLmNlcnRpZmljYXRlcz8ubWFwKGZ1bmN0aW9uIChjZXJ0aWZpY2F0ZSkge1xuICAgICAgdmFyIHNyYyA9ICcvaW1hZ2VzL2NlcnRpZmljYXRlcy8nICsgY2VydGlmaWNhdGUuc3JjXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17Y2VydGlmaWNhdGUubmFtZX0gY2xhc3NOYW1lPVwiIG1kOmgtNDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17Y2VydGlmaWNhdGUudXJsfVxuICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgbmFtZT17Y2VydGlmaWNhdGUubmFtZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGFsdD17Y2VydGlmaWNhdGUubmFtZX1cbiAgICAgICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIGgtZml0IHctZml0IHJvdW5kZWQtbGcgb2JqZWN0LWNvdmVyIHNoYWRvdy1tZFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIlwiPiB7Y2VydGlmaWNhdGUubmFtZX08L2g1PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9KVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cInJlc3VtZVwiIGNsYXNzTmFtZT1cIm1iLTI0IHctZnVsbCBtYXgtdy01eGwgcC0zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBwdC0zMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZFwiPkFjaGlldmVtZW50czwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS02MDBcIj5DZXJ0aWZpY2F0aW9ucyBhbmQgbW9yZS4uLjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZ2FwLTYgc3BhY2UteS02IHAtMyBwdC02IG1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTIgbWQ6c3BhY2UteS0wXCI+XG4gICAgICAgIHtjZXJ0aWZpY2F0ZXN9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtMzAwIG10LTYgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPFNpZGViYXJSb3dcbiAgICAgICAgICBpbWFnZVBhdGg9XCIvaW1hZ2VzL2FjaGlldmVtZW50cy9jZXJ0aWZpY2F0ZS5zdmdcIlxuICAgICAgICAgIHRpdGxlPVwiUmVnaXN0ZXJlZFwiXG4gICAgICAgICAgY29udGVudD1cIlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHQtMjRcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy14cyByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcHgtMiBweS0xIHRleHQtZ3JheS04MDBcIlxuICAgICAgICAgIGRhdGEtc3BsaXRiZWUtZXZlbnQ9XCJUb2dnbGUgQWNoaWV2ZW1lbnRzXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9yZSghc2hvd01vcmUpfVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3dNb3JlID8gJ1Nob3cgbGVzcyDihpEnIDogJ1Nob3cgbW9yZSDihpMnfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2hpZXZlbWVudHNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU2lkZWJhclJvdyIsIkFjaGlldmVtZW50cyIsImRhdGEiLCJzaG93TW9yZSIsInNldFNob3dNb3JlIiwiY2VydGlmaWNhdGVzIiwibWFwIiwiY2VydGlmaWNhdGUiLCJzcmMiLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwiaHJlZiIsInVybCIsIm5hbWUiLCJpbWciLCJhbHQiLCJoNSIsImlkIiwiaW1hZ2VQYXRoIiwidGl0bGUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Achievements.tsx\n"));

/***/ })

});