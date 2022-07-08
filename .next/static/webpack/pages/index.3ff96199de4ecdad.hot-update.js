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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Skills */ \"./src/components/Skills.tsx\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Projects */ \"./src/components/Projects.tsx\");\n/* harmony import */ var _components_Achievements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Achievements */ \"./src/components/Achievements.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function(param) {\n    var repos = param.repos;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), resumeData = ref[0], setResumeData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"/resumeData.json\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setResumeData(data);\n        });\n    }, []);\n    console.log(\"data\", repos);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto flex w-full flex-col items-center bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                //@ts-ignore\n                data: resumeData.portfolio\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skills__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                //@ts-ignore\n                data: resumeData.main\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Achievements__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                //@ts-ignore\n                data: resumeData.main\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-24 md:grid-cols-2 md:gap-32\",\n                children: [\n                    repos.starredRepos.map(function(repo) {\n                        return repo.name;\n                    }),\n                    repos.contributedRepos.map(function(repo) {\n                        return repo.name;\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-32\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n}, \"bZvTV4UWTy+ePeavylPDvbKzupU=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDa0Q7QUFDVDtBQUNBO0FBQ0E7QUFDSTtBQUlROzs7QUFpQ3JELCtEQUFlLG1CQUF5QjtRQUF0QlEsS0FBSyxTQUFMQSxLQUFLOztJQUNyQixJQUFvQ04sR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQTNDbEQsVUEyQ21CLEdBQW1CQSxHQUFZLEdBQS9CLEVBM0NuQixhQTJDa0MsR0FBSUEsR0FBWSxHQUFoQjtJQUVoQ0QsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RVLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUN0QkMsSUFBSSxDQUFDLFNBQUNDLEdBQUc7bUJBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO1NBQUEsQ0FBQyxDQUN6QkYsSUFBSSxDQUFDLFNBQUNHLElBQUksRUFBSztZQUNkTCxhQUFhLENBQUNLLElBQUksQ0FBQztTQUNwQixDQUFDO0tBQ0wsRUFBRSxFQUFFLENBQUM7SUFFTkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxFQUFFVCxLQUFLLENBQUM7SUFFMUIscUJBQ0UsOERBQUNVLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHVEQUF1RDs7MEJBQ3BFLDhEQUFDaEIsMERBQU07Ozs7cUJBQUc7MEJBQ1YsOERBQUNHLDREQUFRO2dCQUNQLFlBQVk7Z0JBQ1pTLElBQUksRUFBRU4sVUFBVSxDQUFDVyxTQUFTOzs7OztxQkFDMUI7MEJBQ0YsOERBQUNmLDBEQUFNO2dCQUNMLFlBQVk7Z0JBQ1pVLElBQUksRUFBRU4sVUFBVSxDQUFDWSxJQUFJOzs7OztxQkFDckI7MEJBQ0YsOERBQUNkLGdFQUFZO2dCQUNYLFlBQVk7Z0JBQ1pRLElBQUksRUFBRU4sVUFBVSxDQUFDWSxJQUFJOzs7OztxQkFDckI7MEJBRUYsOERBQUNILEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxrREFBa0Q7O29CQUM5RFgsS0FBSyxDQUFDYyxZQUFZLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxJQUFJOytCQUFLQSxJQUFJLENBQUNDLElBQUk7cUJBQUEsQ0FBQztvQkFDM0NqQixLQUFLLENBQUNrQixnQkFBZ0IsQ0FBQ0gsR0FBRyxDQUFDLFNBQUNDLElBQUk7K0JBQUtBLElBQUksQ0FBQ0MsSUFBSTtxQkFBQSxDQUFDOzs7Ozs7cUJBQzVDOzBCQUNOLDhEQUFDUCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsT0FBTzswQkFDcEIsNEVBQUNmLDBEQUFNOzs7O3lCQUFHOzs7OztxQkFDTjs7Ozs7O2FBQ0YsQ0FDUDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgU2tpbGxzIGZyb20gJy4uL2NvbXBvbmVudHMvU2tpbGxzJ1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdHMnXG5pbXBvcnQgeyBBY2hpZXZlbWVudCwgTWFpbiwgUHJvamVjdCwgUmVwbyB9IGZyb20gJy4uLy4uL3R5cGluZ3MnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnXG5pbXBvcnQgeyBmZXRjaFJlcG9zIH0gZnJvbSAnLi4vY29yZS9naXRodWInXG5pbXBvcnQgQWNoaWV2ZW1lbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvQWNoaWV2ZW1lbnRzJ1xuaW1wb3J0IHsgR2l0SHViQWN0aXZpdHkgfSBmcm9tICcuLi9jb21wb25lbnRzL0dpdGh1YkFjdGl2aXR5J1xuXG5pbnRlcmZhY2UgQXBwUHJvcHMge1xuICBtYWluOiBNYWluW11cbiAgYWNoaWV2ZW1lbnRzOiBBY2hpZXZlbWVudFtdXG4gIHByb2plY3RzOiBQcm9qZWN0W11cbiAgb3RoZXJQcm9qZWN0czogUHJvamVjdFxuXG4gIHJlcG9zOiB7XG4gICAgc3RhcnJlZFJlcG9zOiBSZXBvW11cbiAgICBjb250cmlidXRlZFJlcG9zOiBSZXBvW11cbiAgfVxuXG4gIGltYWdlczogYW55XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBzdGFycmVkUmVwb3MsIGNvbnRyaWJ1dGVkUmVwb3MgfSA9IGF3YWl0IGZldGNoUmVwb3MoXG4gICAgY29uZmlnLmdpdGh1YlVzZXJuYW1lLFxuICAgIGNvbmZpZy5naXRodWJUb2tlblxuICApXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHJlcG9zOiB7XG4gICAgICAgIHN0YXJyZWRSZXBvcyxcbiAgICAgICAgY29udHJpYnV0ZWRSZXBvcyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxMCxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoeyByZXBvcyB9OiBBcHBQcm9wcykgPT4ge1xuICBjb25zdCBbcmVzdW1lRGF0YSwgc2V0UmVzdW1lRGF0YV0gPSB1c2VTdGF0ZSh7fSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCcvcmVzdW1lRGF0YS5qc29uJylcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRSZXN1bWVEYXRhKGRhdGEpXG4gICAgICB9KVxuICB9LCBbXSlcblxuICBjb25zb2xlLmxvZygnZGF0YScsIHJlcG9zKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggdy1mdWxsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBiZy1ncmF5LTEwMFwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPFByb2plY3RzXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBkYXRhPXtyZXN1bWVEYXRhLnBvcnRmb2xpb31cbiAgICAgIC8+XG4gICAgICA8U2tpbGxzXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBkYXRhPXtyZXN1bWVEYXRhLm1haW59XG4gICAgICAvPlxuICAgICAgPEFjaGlldmVtZW50c1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgZGF0YT17cmVzdW1lRGF0YS5tYWlufVxuICAgICAgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC0yNCBtZDpncmlkLWNvbHMtMiBtZDpnYXAtMzJcIj5cbiAgICAgICAge3JlcG9zLnN0YXJyZWRSZXBvcy5tYXAoKHJlcG8pID0+IHJlcG8ubmFtZSl9XG4gICAgICAgIHtyZXBvcy5jb250cmlidXRlZFJlcG9zLm1hcCgocmVwbykgPT4gcmVwby5uYW1lKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zMlwiPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkZXIiLCJGb290ZXIiLCJTa2lsbHMiLCJQcm9qZWN0cyIsIkFjaGlldmVtZW50cyIsInJlcG9zIiwicmVzdW1lRGF0YSIsInNldFJlc3VtZURhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJwb3J0Zm9saW8iLCJtYWluIiwic3RhcnJlZFJlcG9zIiwibWFwIiwicmVwbyIsIm5hbWUiLCJjb250cmlidXRlZFJlcG9zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});