"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_getInputValue_js"],{

/***/ "./src/getInputValue.js":
/*!******************************!*\
  !*** ./src/getInputValue.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getInputValues)\n/* harmony export */ });\nfunction getInputValues(currentPriority) {\n    const title = document.getElementById(\"titleInput\").value;\n    const date = document.getElementById(\"dateInput\").value;\n    const description = document.getElementById(\"descriptionInput\").value;\n    return { title, date,  description, priority: currentPriority.charAt(0).toUpperCase() + currentPriority.slice(1) };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2V0SW5wdXRWYWx1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2V0SW5wdXRWYWx1ZS5qcz83NTg1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldElucHV0VmFsdWVzKGN1cnJlbnRQcmlvcml0eSkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZUlucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25JbnB1dFwiKS52YWx1ZTtcbiAgICByZXR1cm4geyB0aXRsZSwgZGF0ZSwgIGRlc2NyaXB0aW9uLCBwcmlvcml0eTogY3VycmVudFByaW9yaXR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY3VycmVudFByaW9yaXR5LnNsaWNlKDEpIH07XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/getInputValue.js\n");

/***/ })

}]);