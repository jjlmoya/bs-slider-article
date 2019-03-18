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
/***/ (function(module, exports) {

eval("/**\n * BLOCK: bs-last-articles-zig-zag\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar MediaUpload = wp.editor.MediaUpload;\nvar _wp$components = wp.components,\n    SelectControl = _wp$components.SelectControl,\n    TextControl = _wp$components.TextControl;\nvar withSelect = wp.data.withSelect;\n\n\nregisterBlockType('bonseo/block-bs-slider-article', {\n\ttitle: __('Slider Article'),\n\ticon: 'slides',\n\tcategory: 'bonseo-blocks',\n\tkeywords: [__('slider-article'), __('BonSeo'), __('BonSeo Block')],\n\tedit: withSelect(function (select) {\n\t\tvar _select = select('core'),\n\t\t    getPostTypes = _select.getPostTypes;\n\n\t\treturn {\n\t\t\ttypes: getPostTypes()\n\t\t};\n\t})(function (props) {\n\t\tvar attributes = props.attributes,\n\t\t    className = props.className,\n\t\t    setAttributes = props.setAttributes;\n\n\t\tvar types = props.types;\n\t\tif (!props.types) {\n\t\t\treturn \"Loading...\";\n\t\t}\n\t\tfunction onImageSelect(imageObject) {\n\t\t\tsetAttributes({\n\t\t\t\tbackgroundImage: imageObject.sizes.full.url\n\t\t\t});\n\t\t};\n\t\tfunction drawImageButton(open) {\n\t\t\tvar html;\n\t\t\tif (attributes.backgroundImage) {\n\t\t\t\thtml = wp.element.createElement('img', { src: attributes.backgroundImage });\n\t\t\t} else {\n\t\t\t\thtml = \"Upload\";\n\t\t\t}\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\t'button',\n\t\t\t\t{ onClick: open },\n\t\t\t\thtml\n\t\t\t);\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'h2',\n\t\t\t\tnull,\n\t\t\t\t' Slider Block 3'\n\t\t\t),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__title',\n\t\t\t\tlabel: __('Encabezado del bloque:'),\n\t\t\t\tvalue: attributes.title,\n\t\t\t\tonChange: function onChange(title) {\n\t\t\t\t\treturn setAttributes({ title: title });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\tlabel: 'Tipo de Post',\n\t\t\t\tclassName: className + '__type',\n\t\t\t\tvalue: attributes.type,\n\t\t\t\toptions: types.map(function (type) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tlabel: type.name,\n\t\t\t\t\t\tvalue: type.slug\n\t\t\t\t\t};\n\t\t\t\t}),\n\t\t\t\tonChange: function onChange(type) {\n\t\t\t\t\treturn setAttributes({ type: type });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\tonSelect: onImageSelect,\n\t\t\t\ttype: 'image',\n\t\t\t\tvalue: attributes.backgroundImage,\n\t\t\t\trender: function render(_ref) {\n\t\t\t\t\tvar open = _ref.open;\n\t\t\t\t\treturn drawImageButton(open);\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t}),\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGJzLWxhc3QtYXJ0aWNsZXMtemlnLXphZ1xuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBNZWRpYVVwbG9hZCA9IHdwLmVkaXRvci5NZWRpYVVwbG9hZDtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgU2VsZWN0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlNlbGVjdENvbnRyb2wsXG4gICAgVGV4dENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5UZXh0Q29udHJvbDtcbnZhciB3aXRoU2VsZWN0ID0gd3AuZGF0YS53aXRoU2VsZWN0O1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdib25zZW8vYmxvY2stYnMtc2xpZGVyLWFydGljbGUnLCB7XG5cdHRpdGxlOiBfXygnU2xpZGVyIEFydGljbGUnKSxcblx0aWNvbjogJ3NsaWRlcycsXG5cdGNhdGVnb3J5OiAnYm9uc2VvLWJsb2NrcycsXG5cdGtleXdvcmRzOiBbX18oJ3NsaWRlci1hcnRpY2xlJyksIF9fKCdCb25TZW8nKSwgX18oJ0JvblNlbyBCbG9jaycpXSxcblx0ZWRpdDogd2l0aFNlbGVjdChmdW5jdGlvbiAoc2VsZWN0KSB7XG5cdFx0dmFyIF9zZWxlY3QgPSBzZWxlY3QoJ2NvcmUnKSxcblx0XHQgICAgZ2V0UG9zdFR5cGVzID0gX3NlbGVjdC5nZXRQb3N0VHlwZXM7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZXM6IGdldFBvc3RUeXBlcygpXG5cdFx0fTtcblx0fSkoZnVuY3Rpb24gKHByb3BzKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG5cdFx0dmFyIHR5cGVzID0gcHJvcHMudHlwZXM7XG5cdFx0aWYgKCFwcm9wcy50eXBlcykge1xuXHRcdFx0cmV0dXJuIFwiTG9hZGluZy4uLlwiO1xuXHRcdH1cblx0XHRmdW5jdGlvbiBvbkltYWdlU2VsZWN0KGltYWdlT2JqZWN0KSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBpbWFnZU9iamVjdC5zaXplcy5mdWxsLnVybFxuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRmdW5jdGlvbiBkcmF3SW1hZ2VCdXR0b24ob3Blbikge1xuXHRcdFx0dmFyIGh0bWw7XG5cdFx0XHRpZiAoYXR0cmlidXRlcy5iYWNrZ3JvdW5kSW1hZ2UpIHtcblx0XHRcdFx0aHRtbCA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IGF0dHJpYnV0ZXMuYmFja2dyb3VuZEltYWdlIH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aHRtbCA9IFwiVXBsb2FkXCI7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdidXR0b24nLFxuXHRcdFx0XHR7IG9uQ2xpY2s6IG9wZW4gfSxcblx0XHRcdFx0aHRtbFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnaDInLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnIFNsaWRlciBCbG9jayAzJ1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSArICdfX3RpdGxlJyxcblx0XHRcdFx0bGFiZWw6IF9fKCdFbmNhYmV6YWRvIGRlbCBibG9xdWU6JyksXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLnRpdGxlLFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodGl0bGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiB0aXRsZSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuXHRcdFx0XHRsYWJlbDogJ1RpcG8gZGUgUG9zdCcsXG5cdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lICsgJ19fdHlwZScsXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLnR5cGUsXG5cdFx0XHRcdG9wdGlvbnM6IHR5cGVzLm1hcChmdW5jdGlvbiAodHlwZSkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRsYWJlbDogdHlwZS5uYW1lLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHR5cGUuc2x1Z1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodHlwZSkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdHlwZTogdHlwZSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcblx0XHRcdFx0b25TZWxlY3Q6IG9uSW1hZ2VTZWxlY3QsXG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmJhY2tncm91bmRJbWFnZSxcblx0XHRcdFx0cmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoX3JlZikge1xuXHRcdFx0XHRcdHZhciBvcGVuID0gX3JlZi5vcGVuO1xuXHRcdFx0XHRcdHJldHVybiBkcmF3SW1hZ2VCdXR0b24ob3Blbik7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0KTtcblx0fSksXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);