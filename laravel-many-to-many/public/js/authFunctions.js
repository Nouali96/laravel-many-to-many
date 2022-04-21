/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/functionsJS/authFunctions.js":
/*!***************************************************!*\
  !*** ./resources/js/functionsJS/authFunctions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// inizio gestione mostra/nascondi password 
// resources/views/auth/login.blade.php
// resources/views/auth/register.blade.php
// inizio password
var hiddenPassword = document.querySelector(".mJS_password_hidden");
var showedPassword = document.querySelector(".mJS_password_showed");
var inputTypePassword = document.getElementById("password"); //visualizzo l'icona per mostrare/nascondere la password solo se la input contiene qualcosa

inputTypePassword.addEventListener("input", function (e) {
  if (inputTypePassword.value.length > 0) {
    hiddenPassword.classList.replace("d-none", "d-block");
  } else {
    hiddenPassword.classList.replace("d-block", "d-none");
  }
}); //funzioni di listen per le icone di nascondi/mostra password

hiddenPassword.addEventListener("click", function (event) {
  hiddenPassword.classList.replace("d-block", "d-none");
  showedPassword.classList.replace("d-none", "d-block");
  inputTypePassword.type = "text";
});
showedPassword.addEventListener("click", function (event) {
  hiddenPassword.classList.replace("d-none", "d-block");
  showedPassword.classList.replace("d-block", "d-none");
  inputTypePassword.type = "password";
}); // fine password
// momentaneamente commentato perchè ritorna un errore quando sono nella pagina di login 
// (resources/views/auth/login.blade.php) perchè non trova password-login
// // inizio password-confirm
//     const hiddenPasswordConfirm = document.querySelector(".mJS_password_confirm_hidden");
//     const showedPasswordConfirm = document.querySelector(".mJS_password_confirm_showed");
//     const inputTypePasswordConfirm = document.getElementById("password-confirm");
//     //visualizzo l'icona per mostrare/nascondere la password solo se la input contiene qualcosa
//         inputTypePasswordConfirm.addEventListener("input", function(e){
//             if(inputTypePasswordConfirm.value.length > 0){
//                 hiddenPasswordConfirm.classList.replace("d-none","d-block");
//             }else{
//                 hiddenPasswordConfirm.classList.replace("d-block","d-none");
//             }
//         });
//     //funzioni di listen per le icone di nascondi/mostra password
//         hiddenPasswordConfirm.addEventListener("click", function(event){
//             hiddenPasswordConfirm.classList.replace("d-block","d-none");
//             showedPasswordConfirm.classList.replace("d-none", "d-block");
//             inputTypePasswordConfirm.type="text";
//         })
//         showedPasswordConfirm.addEventListener("click", function(event){
//             hiddenPasswordConfirm.classList.replace("d-none","d-block");
//             showedPasswordConfirm.classList.replace("d-block", "d-none");
//             inputTypePasswordConfirm.type="password";
//         })    
// // fine password-confirm
// fine gestione mostra/nascondi password
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

/***/ }),

/***/ 3:
/*!*********************************************************!*\
  !*** multi ./resources/js/functionsJS/authFunctions.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MAMP\htdocs\laravel-many-to-many\laravel-many-to-many\laravel-many-to-many\resources\js\functionsJS\authFunctions.js */"./resources/js/functionsJS/authFunctions.js");


/***/ })

/******/ });