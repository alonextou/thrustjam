/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _boot = __webpack_require__(2);

	var _boot2 = _interopRequireDefault(_boot);

	var _preload = __webpack_require__(3);

	var _preload2 = _interopRequireDefault(_preload);

	var _title = __webpack_require__(4);

	var _title2 = _interopRequireDefault(_title);

	var _battle = __webpack_require__(5);

	var _battle2 = _interopRequireDefault(_battle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var WIDTH = 1200,
	    HEIGHT = 800,
	    RENDER_MODE = Phaser.AUTO,
	    CONTAINER = '',
	    GAME = new Phaser.Game(WIDTH, HEIGHT, RENDER_MODE, CONTAINER);

	GAME.state.add('boot', _boot2.default);
	GAME.state.add('preload', _preload2.default);
	GAME.state.add('title', _title2.default);
	GAME.state.add('battle', _battle2.default);

	GAME.state.start('boot');

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Boot = function () {
	    function Boot() {
	        _classCallCheck(this, Boot);
	    }

	    _createClass(Boot, [{
	        key: 'preload',
	        value: function preload() {}
	    }, {
	        key: 'create',
	        value: function create() {
	            this.game.input.maxPointers = 1;

	            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	            this.game.scale.setMinMax(120, 80, 1200, 800);
	            this.game.scale.pageAlignHorizontally = true;
	            this.game.scale.pageAlignVertically = true;
	            this.game.scale.refresh();

	            this.game.state.start('preload');
	        }
	    }]);

	    return Boot;
	}();

	exports.default = Boot;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var IMAGES_DIR = 'assets/images/';

	var Preload = function () {
	    function Preload() {
	        _classCallCheck(this, Preload);
	    }

	    _createClass(Preload, [{
	        key: 'preload',
	        value: function preload() {
	            var _this = this;

	            this.load.image('preloadLogo', 'assets/images/logo.png');

	            this.load.onLoadComplete.addOnce(function () {
	                return _this.game.state.start('title');
	            });
	        }
	    }, {
	        key: 'create',
	        value: function create() {
	            this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'preloadLogo');
	        }
	    }]);

	    return Preload;
	}();

	exports.default = Preload;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var startbtn;
	var startbg;

	var Title = function () {
		function Title() {
			_classCallCheck(this, Title);
		}

		_createClass(Title, [{
			key: 'preload',
			value: function preload() {

				this.game.load.spritesheet('button', 'assets/images/btn_start.png', 177, 51);
				this.load.image('preloadLogo', 'assets/images/logo.png');
			}
		}, {
			key: 'create',
			value: function create() {
				this.game.stage.backgroundColor = '#000';
				this.game.add.sprite(this.game.world.centerX - 222, 100, 'preloadLogo');
				startbtn = this.game.add.button(this.game.world.centerX - 88, this.game.height - 200, 'button', actionOnClick, this, 2, 1, 1);
				startbtn.onInputOver.add(over, this);
				startbtn.onInputOut.add(out, this);
				startbtn.onInputUp.add(up, this);

				function actionOnClick() {
					this.game.state.start('battle');
				}

				function up() {
					console.log('button up', arguments);
				}

				function over() {
					console.log('button over');
				}

				function out() {
					console.log('button out');
				}
			}
		}]);

		return Title;
	}();

	exports.default = Title;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
					value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Battle = function () {
					function Battle() {
									_classCallCheck(this, Battle);
					}

					_createClass(Battle, [{
									key: "create",
									value: function create() {

													var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
													var text = this.game.add.text(0, 100, "The battle begins...", style);
													text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
													text.setTextBounds(0, 100, 1200, 100);
									}
					}]);

					return Battle;
	}();

	exports.default = Battle;

/***/ }
/******/ ]);