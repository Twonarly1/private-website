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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Skills */ \"./src/components/Skills.tsx\");\n/* harmony import */ var _components_Work__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Work */ \"./src/components/Work.tsx\");\n/* harmony import */ var _components_Achievements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Achievements */ \"./src/components/Achievements.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function(param) {\n    var projects = param.projects, repos = param.repos;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), resumeData = ref[0], setResumeData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetch(\"/resumeData.json\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setResumeData(data);\n        });\n    }, []);\n    console.log(\"projects\", projects);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto flex w-full flex-col items-center justify-center bg-pink-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"bhawkinson\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/two.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Work__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                projects: projects\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skills__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                //@ts-ignore\n                data: resumeData.resume\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Achievements__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                //@ts-ignore\n                data: resumeData.resume\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                //@ts-ignore\n                data: resumeData.main\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, _this);\n}, \"bZvTV4UWTy+ePeavylPDvbKzupU=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0QjtBQUNzQjtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBS1k7OztBQWdFckQsK0RBQWUsbUJBQW1DO1FBQWhDUyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsS0FBSyxTQUFMQSxLQUFLOztJQUMvQixJQUFvQ1AsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQTNFbEQsVUEyRW1CLEdBQW1CQSxHQUFZLEdBQS9CLEVBM0VuQixhQTJFa0MsR0FBSUEsR0FBWSxHQUFoQjtJQUVoQ0QsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RXLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUN0QkMsSUFBSSxDQUFDLFNBQUNDLEdBQUc7bUJBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO1NBQUEsQ0FBQyxDQUN6QkYsSUFBSSxDQUFDLFNBQUNHLElBQUksRUFBSztZQUNkTCxhQUFhLENBQUNLLElBQUksQ0FBQztTQUNwQixDQUFDO0tBQ0wsRUFBRSxFQUFFLENBQUM7SUFFTkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFVixRQUFRLENBQUM7SUFFakMscUJBQ0UsOERBQUNXLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHNFQUFzRTs7MEJBQ25GLDhEQUFDckIsa0RBQUk7O2tDQUNILDhEQUFDc0IsT0FBSztrQ0FBQyxZQUFVOzs7Ozs2QkFBUTtrQ0FDekIsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTs7Ozs7NkJBQUc7Ozs7OztxQkFDOUI7MEJBQ1AsOERBQUNyQiwwREFBTTs7OztxQkFBRzswQkFFViw4REFBQ0csd0RBQVE7Z0JBQUNFLFFBQVEsRUFBRUEsUUFBUTs7Ozs7cUJBQUk7MEJBQ2hDLDhEQUFDSCwwREFBTTtnQkFDTCxZQUFZO2dCQUNaVyxJQUFJLEVBQUVOLFVBQVUsQ0FBQ2UsTUFBTTs7Ozs7cUJBQ3ZCOzBCQUtGLDhEQUFDbEIsZ0VBQVk7Z0JBQ1gsWUFBWTtnQkFDWlMsSUFBSSxFQUFFTixVQUFVLENBQUNlLE1BQU07Ozs7O3FCQUN2QjswQkFLRiw4REFBQ3JCLDBEQUFNO2dCQUNMLFlBQVk7Z0JBQ1pZLElBQUksRUFBRU4sVUFBVSxDQUFDZ0IsSUFBSTs7Ozs7cUJBQ3JCOzs7Ozs7YUFDRSxDQUNQO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ta2lsbHMnXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Xb3JrJ1xuaW1wb3J0IHsgQWNoaWV2ZW1lbnQsIE1haW4sIFByb2plY3QgfSBmcm9tICcuLi8uLi90eXBpbmdzJ1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xuaW1wb3J0IHsgZmV0Y2hSZXBvcywgUmVwbyB9IGZyb20gJy4uL2NvcmUvZ2l0aHViJ1xuaW1wb3J0IEFjaGlldmVtZW50cyBmcm9tICcuLi9jb21wb25lbnRzL0FjaGlldmVtZW50cydcblxuaW50ZXJmYWNlIEFwcFByb3BzIHtcbiAgbWFpbjogTWFpbltdXG4gIGFjaGlldmVtZW50czogQWNoaWV2ZW1lbnRbXVxuICBwcm9qZWN0czogUHJvamVjdFtdXG4gIHJlcG9zOiB7XG4gICAgc3RhcnJlZFJlcG9zOiBSZXBvW11cbiAgICBjb250cmlidXRlZFJlcG9zOiBSZXBvW11cbiAgfVxuICBpbWFnZXM6IGFueVxufVxuXG5jb25zdCBpbWFnZXNBcnJheSA9IFtcbiAge1xuICAgIGlkOiAwLFxuICAgIGltYWdlOiAnL2ltYWdlcy9wb3J0Zm9saW8vcG9oLnBuZycsXG4gIH0sXG4gIHtcbiAgICBpZDogMSxcbiAgICBpbWFnZTogJy9pbWFnZXMvcG9ydGZvbGlvLzdzLmdpZicsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBpbWFnZTogJy9pbWFnZXMvcG9ydGZvbGlvL2luc3RhZ3JhbS5qcGVnJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGltYWdlOiAnL2ltYWdlcy9wb3J0Zm9saW8vd2luc29tZS10ZW5sZXkucG5nJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGltYWdlOiAnL2ltYWdlcy9wb3J0Zm9saW8vc3BlY3RvLWJsYWNrLnBuZycsXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICBpbWFnZTogJy9pbWFnZXMvcG9ydGZvbGlvL3NwZWN0by1ibGFjay5wbmcnLFxuICB9LFxuXVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnJylcbiAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IHJlZC5qc29uKClcblxuICBjb25zdCBbcHJvamVjdHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoUmVwb3MoY29uZmlnLmdpdGh1YlVzZXJuYW1lLCBjb25maWcuZ2l0aHViVG9rZW4pLFxuICBdKVxuXG4gIGNvbnN0IG5ld1Byb2plY3RzID0gcHJvamVjdHMuY29udHJpYnV0ZWRSZXBvcy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnByb2plY3QsXG4gICAgICBpbWFnZTogaW1hZ2VzQXJyYXlbaW5kZXhdLFxuICAgIH1cbiAgfSlcbiAgY29uc29sZS5sb2coJ3Byb2plY3RzJywgbmV3UHJvamVjdHMpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvamVjdHM6IG5ld1Byb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdCksXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxMCxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBwcm9qZWN0cywgcmVwb3MgfTogQXBwUHJvcHMpID0+IHtcbiAgY29uc3QgW3Jlc3VtZURhdGEsIHNldFJlc3VtZURhdGFdID0gdXNlU3RhdGUoe30pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnL3Jlc3VtZURhdGEuanNvbicpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0UmVzdW1lRGF0YShkYXRhKVxuICAgICAgfSlcbiAgfSwgW10pXG5cbiAgY29uc29sZS5sb2coJ3Byb2plY3RzJywgcHJvamVjdHMpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZmxleCB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXBpbmstMjAwXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPmJoYXdraW5zb248L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi90d28ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPFByb2plY3RzIHByb2plY3RzPXtwcm9qZWN0c30gLz5cbiAgICAgIDxTa2lsbHNcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGRhdGE9e3Jlc3VtZURhdGEucmVzdW1lfVxuICAgICAgLz5cbiAgICAgIHsvKiA8VGVzdGltb25pYWxzXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBkYXRhPXtyZXN1bWVEYXRhLnRlc3RpbW9uaWFsc31cbiAgICAgIC8+ICovfVxuICAgICAgPEFjaGlldmVtZW50c1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgZGF0YT17cmVzdW1lRGF0YS5yZXN1bWV9XG4gICAgICAvPlxuICAgICAgey8qIDxDb250YWN0XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBkYXRhPXtyZXN1bWVEYXRhLm1haW59XG4gICAgICAvPiAqL31cbiAgICAgIDxGb290ZXJcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGRhdGE9e3Jlc3VtZURhdGEubWFpbn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIkZvb3RlciIsIlNraWxscyIsIlByb2plY3RzIiwiQWNoaWV2ZW1lbnRzIiwicHJvamVjdHMiLCJyZXBvcyIsInJlc3VtZURhdGEiLCJzZXRSZXN1bWVEYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInJlc3VtZSIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});