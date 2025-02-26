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

/***/ "./src/js/registration.ts":
/*!********************************!*\
  !*** ./src/js/registration.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar submitForm_1 = __webpack_require__(/*! ./submitForm */ \"./src/js/submitForm.ts\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    (0, submitForm_1.submitForm)('registrationForm', 'registrationBtn');\n});\n\n\n//# sourceURL=webpack:///./src/js/registration.ts?");

/***/ }),

/***/ "./src/js/submitForm.ts":
/*!******************************!*\
  !*** ./src/js/submitForm.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.submitForm = submitForm;\nvar input_1 = __webpack_require__(/*! ./utils/input */ \"./src/js/utils/input.ts\");\nvar checkPassword_1 = __webpack_require__(/*! ./utils/checkPassword */ \"./src/js/utils/checkPassword.ts\");\nvar loader_1 = __webpack_require__(/*! ./utils/loader */ \"./src/js/utils/loader.ts\");\nfunction submitForm(formSelector, buttonSelector) {\n    var form = document.getElementById(formSelector);\n    var button = document.getElementById(buttonSelector);\n    if (!form || !button) {\n        console.error(\"Форма или кнопка не найдены!\");\n        return;\n    }\n    button.addEventListener('click', function (e) {\n        e.preventDefault();\n        var isLoginValid = (0, input_1.validateInput)('.input-login', '.error');\n        var isEmailValid = (0, input_1.validateInput)('.input-email', '.email-error');\n        var isPasswordValid = (0, input_1.validateInput)('.input-password', '.password-error');\n        var isPasswordsMatch = (0, checkPassword_1.checkBothPasswords)('.input-password', '.input-repeated-password', '.repeated-error');\n        if (isLoginValid && isEmailValid && isPasswordValid && isPasswordsMatch) {\n            console.log(\"Форма успешно отправлена!\");\n            (0, loader_1.loader)('.loader', true);\n            setTimeout(function () {\n                window.location.href = '../accountPage.html';\n            }, 3000);\n        }\n        else {\n            console.log(\"Форма содержит ошибки!\");\n        }\n    });\n}\n\n\n//# sourceURL=webpack:///./src/js/submitForm.ts?");

/***/ }),

/***/ "./src/js/utils/checkPassword.ts":
/*!***************************************!*\
  !*** ./src/js/utils/checkPassword.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.checkBothPasswords = checkBothPasswords;\nfunction checkBothPasswords(passwordSelector, repeatedPasswordSelector, errorSelector) {\n    var password = document.querySelector(passwordSelector);\n    var repeatedPassword = document.querySelector(repeatedPasswordSelector);\n    var errorText = document.querySelector(errorSelector);\n    if (!errorText || !password || !repeatedPassword)\n        return false;\n    if (password.value.trim() === repeatedPassword.value.trim()) {\n        errorText.innerText = '';\n        return true;\n    }\n    else {\n        errorText.innerText = 'Пароли не совпадают';\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/checkPassword.ts?");

/***/ }),

/***/ "./src/js/utils/input.ts":
/*!*******************************!*\
  !*** ./src/js/utils/input.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.validateInput = validateInput;\nfunction validateInput(selector, errorSelector) {\n    var input = document.querySelector(selector);\n    var errorText = document.querySelector(errorSelector);\n    if (!input || !errorText) {\n        console.error(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \\u044D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442 \".concat(selector, \" \\u0438\\u043B\\u0438 \").concat(errorSelector, \" \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\"));\n        return false;\n    }\n    var loginRegex = /^[a-zA-Z0-9_-]{3,20}$/;\n    var passwordRegex = /^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;\n    var emailRegex = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|.(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n    var inputText = input.value.trim();\n    var isValid = false;\n    if (input.getAttribute('data-input') === 'login') {\n        if (!loginRegex.test(inputText)) {\n            errorText.innerText = \"Логин должен содержать от 3 до 20 символов, только латиницу, цифры, _ и -.\";\n        }\n        else {\n            errorText.innerText = '';\n            isValid = true;\n        }\n    }\n    else if (input.getAttribute('data-input') === 'email') {\n        if (!emailRegex.test(inputText)) {\n            errorText.innerText = \"Некорректный email\";\n        }\n        else {\n            errorText.innerText = \"\";\n            isValid = true;\n        }\n    }\n    else if (input.getAttribute('data-input') === 'password') {\n        if (!passwordRegex.test(inputText)) {\n            errorText.innerText = \"Пароль должен содержать минимум 8 символов, включая заглавные и строчные буквы, цифры и спецсимволы.\";\n        }\n        else {\n            errorText.innerText = \"\";\n            isValid = true;\n        }\n    }\n    return isValid;\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/input.ts?");

/***/ }),

/***/ "./src/js/utils/loader.ts":
/*!********************************!*\
  !*** ./src/js/utils/loader.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loader = loader;\nfunction loader(selector, isShown) {\n    var loader = document.querySelector(selector);\n    if (!loader) {\n        throw new Error('Elem is not found');\n    }\n    if (isShown) {\n        loader.style.display = 'block';\n    }\n    else {\n        loader.style.display = 'none';\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/loader.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/registration.ts");
/******/ 	
/******/ })()
;