/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/profilePage.ts":
/*!*******************************!*\
  !*** ./src/js/profilePage.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar tabs_1 = __webpack_require__(/*! ./utils/tabs */ \"./src/js/utils/tabs.ts\");\nvar profilesTabHandler_1 = __webpack_require__(/*! ./utils/profilesTabHandler */ \"./src/js/utils/profilesTabHandler.ts\");\n(0, tabs_1.hideTabs)('.content-tab');\n(0, tabs_1.showTab)('.content-tab');\n(0, profilesTabHandler_1.profileTabsHandler)('.profile-list-link', '.content-tab');\n\n\n//# sourceURL=webpack:///./src/js/profilePage.ts?");

/***/ }),

/***/ "./src/js/utils/profilesTabHandler.ts":
/*!********************************************!*\
  !*** ./src/js/utils/profilesTabHandler.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.profileTabsHandler = profileTabsHandler;\nfunction profileTabsHandler(selector, tabSelector) {\n    var tabLinks = document.querySelectorAll(selector);\n    var tabContent = document.querySelectorAll(tabSelector);\n    if (tabLinks.length === 0) {\n        console.error('err');\n    }\n    if (tabContent.length === 0) {\n        console.error('err');\n    }\n    tabLinks.forEach(function (link, index) {\n        link.addEventListener('click', function (e) {\n            e.preventDefault();\n            tabContent.forEach(function (tab) { return tab.style.display = 'none'; });\n            tabLinks.forEach(function (link) { return link.classList.remove('active'); });\n            tabContent[index].style.display = 'block';\n            link.classList.add('active');\n        });\n    });\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/profilesTabHandler.ts?");

/***/ }),

/***/ "./src/js/utils/tabs.ts":
/*!******************************!*\
  !*** ./src/js/utils/tabs.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.showTab = showTab;\nexports.hideTabs = hideTabs;\nfunction showTab(selector) {\n    var contentToShow = document.querySelectorAll(selector);\n    contentToShow[0].style.display = 'block';\n}\nfunction hideTabs(selector) {\n    var contentToHide = document.querySelectorAll(selector);\n    contentToHide.forEach(function (elem) {\n        elem.style.display = 'none';\n    });\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/tabs.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/profilePage.ts");
/******/ 	
/******/ })()
;