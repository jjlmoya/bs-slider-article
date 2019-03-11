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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, __webpack_exports__) {

"use strict";
eval("/**\n * BLOCK: bs-last-articles-zig-zag\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar TextControl = wp.components.TextControl;\nvar MediaUpload = wp.editor.MediaUpload;\n\nregisterBlockType('bonseo/block-bs-slider-article', {\n\ttitle: __('Slider Article'),\n\ticon: 'slides',\n\tcategory: 'bonseo-blocks',\n\tkeywords: [__('slider-article'), __('BonSeo'), __('BonSeo Block')],\n\tedit: function edit(_ref) {\n\t\tvar posts = _ref.posts,\n\t\t    className = _ref.className,\n\t\t    attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes;\n\n\t\tfunction onImageSelect(imageObject) {\n\t\t\tsetAttributes({\n\t\t\t\tbackgroundImage: imageObject.sizes.full.url\n\t\t\t});\n\t\t};\n\n\t\tfunction drawImageButton(open) {\n\t\t\tvar html;\n\t\t\tif (attributes.backgroundImage) {\n\t\t\t\thtml = wp.element.createElement('img', { src: attributes.backgroundImage });\n\t\t\t} else {\n\t\t\t\thtml = \"Upload\";\n\t\t\t}\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\t'button',\n\t\t\t\t{ onClick: open },\n\t\t\t\thtml\n\t\t\t);\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'h2',\n\t\t\t\tnull,\n\t\t\t\t' Slider Block'\n\t\t\t),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__title',\n\t\t\t\tlabel: __('Encabezado del bloque:'),\n\t\t\t\tvalue: attributes.title,\n\t\t\t\tonChange: function onChange(title) {\n\t\t\t\t\treturn setAttributes({ title: title });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\tonSelect: onImageSelect,\n\t\t\t\ttype: 'image',\n\t\t\t\tvalue: attributes.backgroundImage,\n\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\treturn drawImageButton(open);\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t},\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGJzLWxhc3QtYXJ0aWNsZXMtemlnLXphZ1xuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBUZXh0Q29udHJvbCA9IHdwLmNvbXBvbmVudHMuVGV4dENvbnRyb2w7XG52YXIgTWVkaWFVcGxvYWQgPSB3cC5lZGl0b3IuTWVkaWFVcGxvYWQ7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdib25zZW8vYmxvY2stYnMtc2xpZGVyLWFydGljbGUnLCB7XG5cdHRpdGxlOiBfXygnU2xpZGVyIEFydGljbGUnKSxcblx0aWNvbjogJ3NsaWRlcycsXG5cdGNhdGVnb3J5OiAnYm9uc2VvLWJsb2NrcycsXG5cdGtleXdvcmRzOiBbX18oJ3NsaWRlci1hcnRpY2xlJyksIF9fKCdCb25TZW8nKSwgX18oJ0JvblNlbyBCbG9jaycpXSxcblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIHBvc3RzID0gX3JlZi5wb3N0cyxcblx0XHQgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG5cdFx0ICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBfcmVmLnNldEF0dHJpYnV0ZXM7XG5cblx0XHRmdW5jdGlvbiBvbkltYWdlU2VsZWN0KGltYWdlT2JqZWN0KSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBpbWFnZU9iamVjdC5zaXplcy5mdWxsLnVybFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGRyYXdJbWFnZUJ1dHRvbihvcGVuKSB7XG5cdFx0XHR2YXIgaHRtbDtcblx0XHRcdGlmIChhdHRyaWJ1dGVzLmJhY2tncm91bmRJbWFnZSkge1xuXHRcdFx0XHRodG1sID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogYXR0cmlidXRlcy5iYWNrZ3JvdW5kSW1hZ2UgfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRodG1sID0gXCJVcGxvYWRcIjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2J1dHRvbicsXG5cdFx0XHRcdHsgb25DbGljazogb3BlbiB9LFxuXHRcdFx0XHRodG1sXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdoMicsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdCcgU2xpZGVyIEJsb2NrJ1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSArICdfX3RpdGxlJyxcblx0XHRcdFx0bGFiZWw6IF9fKCdFbmNhYmV6YWRvIGRlbCBibG9xdWU6JyksXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLnRpdGxlLFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodGl0bGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiB0aXRsZSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcblx0XHRcdFx0b25TZWxlY3Q6IG9uSW1hZ2VTZWxlY3QsXG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmJhY2tncm91bmRJbWFnZSxcblx0XHRcdFx0cmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoX3JlZjIpIHtcblx0XHRcdFx0XHR2YXIgb3BlbiA9IF9yZWYyLm9wZW47XG5cdFx0XHRcdFx0cmV0dXJuIGRyYXdJbWFnZUJ1dHRvbihvcGVuKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQpO1xuXHR9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);