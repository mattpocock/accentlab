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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
       value: true
});
var convert = exports.convert = function convert(sym) {

       var res;

       switch (sym) {

              case "AA":
                     res = "&#593&#720";
                     break;
              case "AE":
                     res = "&#230";
                     break;
              case "AH0":
                     res = "&#601";
                     break;
              case "AH1":
                     res = "&#652";
                     break;
              case "AH2":
                     res = "&#652";
                     break;
              case "SH":
                     res = "&#643";
                     break;
              case "AO":
                     res = "&#596&#720";
                     break;

              case "OH":
                     res = "&#594";
                     break;

              case "AW":
                     res = "a&#650";
                     break;
              case "AY":
                     res = "a&#618";
                     break;
              case "B":
                     res = "b";
                     break;
              case "CH":
                     res = "t&#643";
                     break;
              case "D":
                     res = "d";
                     break;

              case "DH":
                     res = "&#240";
                     break;
              case "EH":
                     res = "e";
                     break;
              case "ER0":
                     res = "&#601";
                     break;
              case "ER1":
                     res = "&#604&#720";
                     break;
              case "ER2":
                     res = "&#604&#720";
                     break;
              case "EY":
                     res = "e&#618";
                     break;
              case "F":
                     res = "f";
                     break;

              case "G":
                     res = "g";
                     break;
              case "HH":
                     res = "h";
                     break;
              case "IH":
                     res = "&#618";
                     break;
              case "IY0":
                     res = "i";
                     break;
              case "IY1":
                     res = "i&#720";
                     break;
              case "IY2":
                     res = "i&#720";
                     break;
              case "JH":
                     res = "&#676";
                     break;

              case "K":
                     res = "k";
                     break;
              case "L":
                     res = "l";
                     break;
              case "M":
                     res = "m";
                     break;
              case "N":
                     res = "n";
                     break;
              case "NG":
                     res = "&#331";
                     break;

              case "OW":
                     res = "&#601&#650";
                     break;
              case "OY":
                     res = "&#596&#618";
                     break;
              case "P":
                     res = "p";
                     break;
              case "R":
                     res = "r";
                     break;
              case "S":
                     res = "s";
                     break;

              case "T":
                     res = "t";
                     break;
              case "TH":
                     res = "&#952";
                     break;
              case "UH":
                     res = "&#650";
                     break;
              case "UW":
                     res = "u&#720";
                     break;
              case "V":
                     res = "v";
                     break;

              case "W":
                     res = "w";
                     break;
              case "Y":
                     res = "j";
                     break;
              case "Z":
                     res = "z";
                     break;
              case "ZH":
                     res = "&#658";
                     break;
              default:
                     res = sym;
       }
       return res;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var _CONFIG = exports._CONFIG = {
	// Location of raw files
	cmellonLoc: '/accentlab/raw/cmellon.txt',
	// Colors of Highlights
	highlightColors: ["#ffea74", "#d374ff", "#ff749b", "#a0ff74", "#9074ff", "#74c7ff", "#ffa778"]

};

var _GLOBAL = exports._GLOBAL = {
	// Holds dictionary as string
	cmellonString: null,
	popWordsString: null,

	allWordData: [],
	fullWordTranslations: [],
	phonComparisons: [],
	allClusterData: [],

	colorCount: 0,

	paragraphs: [],
	// popped = false
	paragraphTicker: 5,
	paragraphInterval: 5,

	//
	prevLength: 0,
	readMoreText: "",

	// List of current functions applied to the text
	currentFuncList: ""
};

var MENU_CONFIG = exports.MENU_CONFIG = {
	consOptions: ["Fricatives", "/&#952/ - Think", "/&#240/ - This", "All TH Sounds", "/s/ - See", "/z/ - Is", "/f/ - Few", "/v/ - View", "/h/ - How", "/&#643/ - Show", "/&#658/ - Measure", "Plosives", "/p/ - Pie", "/b/ - Buy", "/t/ - Tie", "/d/ - Dye", "/k/ - Kite", "/g/ - Guy", "Affricates", "/t&#643/ - Chin", "/&#676/ - Joke", "Nasals", "/m/ - May", "/n/ - No", "/&#331/ - Sing", "Approximants", "Light L", "Dark L", "All L's", "All R Sounds", "Dropped R's", "Voiced R's", "/j/ - You", "/w/ - Why"],
	vowelOptions: ["Fricatives", "/&#952/ - Think", "/&#240/ - This", "All TH Sounds", "/s/ - See", "/z/ - Is", "/f/ - Few", "/v/ - View", "/h/ - How", "/&#643/ - Show", "/&#658/ - Measure", "Plosives", "/p/ - Pie", "/b/ - Buy", "/t/ - Tie", "/d/ - Dye", "/k/ - Kite", "/g/ - Guy", "Affricates", "/t&#643/ - Chin", "/&#676/ - Joke", "Nasals", "/m/ - May", "/n/ - No", "/&#331/ - Sing", "Approximants", "Light L", "Dark L", "All L's", "All R Sounds", "Dropped R's", "Voiced R's", "/j/ - You", "/w/ - Why"],
	vowelMenuSounds: [["EH", "IH", "UH", "AH0", "ER0", "AH1", "AH2", "AE", "OH"], "EH", "IH", "UH", ["AH1", "AH2"], ["AH0", "ER0"], "AE", "OH", ["IY1", "IY2", "ER1", "ER2", "AA", "UW", "AO"], "AA", ["IY1", "IY2"], "UW", ["ER1", "ER2"], "AO", ["AW", "OW", "AY", "EY", "OY"], "EY", "AY", "AW", "OW", "OY"],
	otherOptions: ["ST Rule", "Linking Words", "Open Jaw"]
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
       value: true
});
exports.checkIfVowel = checkIfVowel;
function checkIfVowel(sym) {

       var res;

       switch (sym) {

              case "AA":
                     res = true;
                     break;
              case "AE":
                     res = true;
                     break;
              case "AH0":
                     res = true;
                     break;
              case "AH1":
                     res = true;
                     break;
              case "AH2":
                     res = true;
                     break;
              case "SH":
                     res = false;
                     break;
              case "AO":
                     res = true;
                     break;

              case "OH":
                     res = true;
                     break;

              case "AW":
                     res = true;
                     break;
              case "AY":
                     res = true;
                     break;
              case "B":
                     res = false;
                     break;
              case "CH":
                     res = false;
                     break;
              case "D":
                     res = false;
                     break;

              case "DH":
                     res = false;
                     break;
              case "EH":
                     res = true;
                     break;
              case "ER0":
                     res = true;
                     break;
              case "ER1":
                     res = true;
                     break;
              case "ER2":
                     res = true;
                     break;
              case "EY":
                     res = true;
                     break;
              case "F":
                     res = false;
                     break;

              case "G":
                     res = false;
                     break;
              case "HH":
                     res = false;
                     break;
              case "IH":
                     res = true;
                     break;
              case "IY0":
                     res = true;
                     break;
              case "IY1":
                     res = true;
                     break;
              case "IY2":
                     res = true;
                     break;
              case "JH":
                     res = false;
                     break;

              case "K":
                     res = false;
                     break;
              case "L":
                     res = false;
                     break;
              case "M":
                     res = false;
                     break;
              case "N":
                     res = false;
                     break;
              case "NG":
                     res = false;
                     break;

              case "OW":
                     res = true;
                     break;
              case "OY":
                     res = true;
                     break;
              case "P":
                     res = false;
                     break;
              case "R":
                     res = false;
                     break;
              case "S":
                     res = false;
                     break;

              case "T":
                     res = false;
                     break;
              case "TH":
                     res = false;
                     break;
              case "UH":
                     res = true;
                     break;
              case "UW":
                     res = true;
                     break;
              case "V":
                     res = false;
                     break;

              case "W":
                     res = false;
                     break;
              case "Y":
                     res = false;
                     break;
              case "Z":
                     res = false;
                     break;
              case "ZH":
                     res = false;
                     break;
              case null:
                     res = null;
                     break;
              default:
                     res = false;
       }
       return res;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _practice = __webpack_require__(4);

var Practice = _interopRequireWildcard(_practice);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resetDash = resetDash;

var _globals = __webpack_require__(1);

var _mapClusters = __webpack_require__(5);

var _createClusters = __webpack_require__(6);

var _printToPage = __webpack_require__(7);

var _articleWorker = __webpack_require__(8);

var _searchInDictionary = __webpack_require__(9);

var _breakDownText = __webpack_require__(11);

var _getAudio = __webpack_require__(12);

var _checkIfVowel = __webpack_require__(2);

var _convert = __webpack_require__(0);

var _checkIfUnvoiFric = __webpack_require__(13);

var _checkIfUnvoiPlo = __webpack_require__(14);

var _renderDash = __webpack_require__(15);

var _globals2 = __webpack_require__(16);

/*	Where the magic happens.
 *	Takes in an input text, and a boolean.
 *	Boolean says if the user pressed 'read more' or not.
 */


// Checks
var onPush = function onPush(input, readMore) {

	// Resets colorcount
	_globals._GLOBAL.colorCount = 0;

	// If user presses 'New Article' (not 'Read More')
	if (!readMore) {
		// Clears output text
		var out = document.getElementById("output-txt");
		out.innerHTML = "";
		$('.loader').hide();

		// Displays the read more button
		$('#read-more-btn').css('display', 'inline-block');

		// Resets globals
		_globals._GLOBAL.prevLength = 0;
		_globals._GLOBAL.phonComparisons = [];
		_globals._GLOBAL.fullWordTranslations = [];
		_globals._GLOBAL.allWordData = [];
		_globals._GLOBAL.allClusterData = [];
		$('#lower-new-article-btn').css('display', 'none');
		_globals._GLOBAL.paragraphs = [];
		_globals._GLOBAL.paragraphTicker = _globals._GLOBAL.paragraphInterval;
	}

	// New Variables for this run
	var prevParas = _globals._GLOBAL.paragraphs.length;
	var inputArr = [];
	_globals._GLOBAL.readMoreText = "";

	// Breaks down text into individual words, ready for searching
	inputArr = (0, _breakDownText.breakDownText)(input, _globals._GLOBAL);

	// If there is no more text in the article, changes to new-article-btn
	if (_globals._GLOBAL.readMoreText === "") {
		$('#read-more-btn').css('display', 'none');
		$('#lower-new-article-btn').css('display', 'inline-block');
	}

	// Creates allWordData
	var arrToAdd = (0, _searchInDictionary.searchInDictionary)(inputArr, _globals._GLOBAL.cmellonString);
	_globals._GLOBAL.allWordData = _globals._GLOBAL.allWordData.concat(arrToAdd);

	// Fills allClusterData with cluster objects
	_globals._GLOBAL.allClusterData = _globals._GLOBAL.allClusterData.concat((0, _createClusters.createClusters)(inputArr));

	// Takes in allWordData and allClusterData, returns phonComparisons
	_globals._GLOBAL.phonComparisons = _globals._GLOBAL.phonComparisons.concat((0, _mapClusters.mapClusters)(_globals._GLOBAL.allWordData, _globals._GLOBAL.allClusterData, _globals._GLOBAL.prevLength));

	// Prints to Page

	(0, _printToPage.printToPage)(_globals._GLOBAL.prevLength, _globals._GLOBAL.allWordData, _globals._GLOBAL.paragraphs, prevParas, _globals._GLOBAL.phonComparisons, _globals._GLOBAL.allClusterData);

	console.log(_globals._GLOBAL.currentFuncList);
	var p = _globals._GLOBAL.currentFuncList;
	eval(_globals._GLOBAL.currentFuncList);
	_globals._GLOBAL.currentFuncList = p;

	_globals._GLOBAL.prevLength = _globals._GLOBAL.allWordData.length;
};

var changeColour = function changeColour(word, cluster, color) {
	$("#cluster" + word + "-" + cluster).css({ "background-color": color });
};

var startScan = function startScan(arrOfSyms, position) {

	var found = false;

	for (var i = 0; i < arrOfSyms.length; i++) {

		for (var o = 0; o < _globals._GLOBAL.phonComparisons.length; o++) {

			var res = scanWord(arrOfSyms[i], position, _globals._GLOBAL.phonComparisons[o]);

			if (res !== null) {
				changeColour(o, res, _globals._CONFIG.highlightColors[_globals._GLOBAL.colorCount]);
				found = true;
			}
		}
	}

	// If found, go to next colour
	if (found) {
		_globals._GLOBAL.colorCount++;
		if (_globals._GLOBAL.colorCount === _globals._CONFIG.highlightColors.length) {
			_globals._GLOBAL.colorCount = 0;
		}
	}

	var string = JSON.stringify(arrOfSyms);

	_globals._GLOBAL.currentFuncList += "startScan(" + string + ", '" + position + "');";
};

var scanWord = function scanWord(sym, position, word) {

	var res = null;

	// Iterates through each cluster
	for (var i = 0; i < word.phons.length; i++) {

		// Checks sounds at start
		if (position === "start") {
			if (word.phons[0][0] === sym) {
				res = i;
			};
			break;

			// Checks sounds at end
		} else if (position === "end") {

			for (var o = 0; o < word.phons.length; o++) {

				var next;
				if (word.phons[i][o + 1] !== undefined) {
					next = word.phons[i][o + 1];
				} else if (word.phons[i + 1] !== undefined) {
					next = word.phons[i + 1][0];
				} else {
					next = "";
				}

				if (word.phons[i][o] === sym & next === "") {
					res = i;
				};
			}

			// Checks if the sound is before a vowel
		} else if (position === "any") {
			for (var o = 0; o < word.phons.length; o++) {
				if (word.phons[i][o] === sym) {
					res = i;
				}
			}
		} else if (position === "beforeVowel") {

			for (var o = 0; o < word.phons.length; o++) {

				// Scans both the same cluster and the next one to see if
				// a sound is present. If false, returns 'NF'
				var next;
				if (word.phons[i][o + 1] !== undefined) {
					next = word.phons[i][o + 1];
				} else if (word.phons[i + 1] !== undefined) {
					next = word.phons[i + 1][0];
				} else {
					next = "NF";
				}

				if (word.phons[i][o] === sym && (0, _checkIfVowel.checkIfVowel)(next)) {
					res = i;
				}
			}

			// Checks if the sound is before a consonant, or 'no sound'
		} else if (position === "beforeNonVowel") {

			for (var o = 0; o < word.phons.length; o++) {

				var next;
				if (word.phons[i][o + 1] !== undefined) {
					next = word.phons[i][o + 1];
				} else if (word.phons[i + 1] !== undefined) {
					next = word.phons[i + 1][0];
				} else {
					next = "NF";
				}

				if (word.phons[i][o] === sym && next === "NF") {
					res = i;
				} else if (word.phons[i][o] === sym && !(0, _checkIfVowel.checkIfVowel)(next)) {
					res = i;
				}
			}
		} /*else if (position === "stRulePosition") {
    	for (var o = 0; o < word.phons.length; o++) {
    		var next;
    if (word.phons[i][o+1] !== undefined) {
    	next = word.phons[i][o+1];
    } else if (word.phons[i+1][0] !== undefined) {
    	next = word.phons[i+1][0];
    } else {
    	next = "NF"
    }
    		if (word.phons[i][o] === sym && next === "NF") {
    	res = i;
    } else if (word.phons[i][o] === sym && !checkIfVowel(next)) {
    	res = i;
    }
    	}
    } */
	}

	return res;
};

var resetScans = function resetScans() {

	_globals._GLOBAL.colorCount = 0;

	for (var i = 0; i < _globals._GLOBAL.phonComparisons.length; i++) {

		for (var j = 0; j < _globals._GLOBAL.phonComparisons[i].letters.length; j++) {

			$("#cluster" + i + "-" + j).css({ "background-color": "transparent" });
		}
	}

	for (var i = _globals._GLOBAL.currentFuncList.length - 2; i > -1; i--) {

		var c = _globals._GLOBAL.currentFuncList.charAt(i);

		if (c == ";") {
			_globals._GLOBAL.currentFuncList = _globals._GLOBAL.currentFuncList.slice(0, i + 1);

			break;
		} else if (i == 0) {
			_globals._GLOBAL.currentFuncList = "";
		}
	}

	var p = _globals._GLOBAL.currentFuncList;
	eval(_globals._GLOBAL.currentFuncList);
	_globals._GLOBAL.currentFuncList = p;
};

var sayWord = function sayWord(arr) {

	var audioArr = [];

	for (var j = 0; j < arr.phons.length; j++) {
		audioArr[j] = new Audio((0, _getAudio.getAudio)(arr.phons[j][0]));
	}

	for (var j = 0; j < audioArr.length - 1; j++) {
		var next = j + 1;
		(function (next, j, audioArr) {
			audioArr[j].addEventListener("ended", function () {
				audioArr[next].play();
			});
		});
	}

	audioArr[0].play();
};

var clearBox = function clearBox() {

	$('#input-txt').val('');
};

var showBox = function showBox() {
	$('#input-txt').css('display', 'block');
	$('#showBoxBtn').css('display', 'none');
	$('#convertBtn').css('display', 'inline-block').animate({ opacity: 1 }, 1000);
	$('#clearBtn').css('display', 'inline-block').animate({ opacity: 1 }, 1000);
	$('html, body').animate({
		scrollTop: $("#input-txt").offset().top - 50
	}, 1000);
};

var convertBtn = function convertBtn() {
	onPush(document.getElementById('input-txt').value, false);
	$('#input-txt').css('display', 'none');
	$('#convertBtn').css('display', 'none');
	$('#clearBtn').css('display', 'none');
};

var getArrayFromMenu = function getArrayFromMenu(menuArr) {

	var output = "";

	for (var i = 0; i < menuArr.length; i++) {

		output += '"' + vowelMenu("", i) + '",';
	}
};

function newArticle() {

	onPush(_articleWorker.articleData.articleArray[_articleWorker.articleData.articleCounter], false);

	_articleWorker.articleData.articleCounter++;
	if (_articleWorker.articleData.articleCounter === _articleWorker.articleData.articleArray.length) {
		_articleWorker.articleData.articleCounter = 0;
	}
}

// Event Handlers

function convertFunctionButtons() {

	// 'New Article' Button
	document.getElementById("lower-new-article-btn").onclick = function () {
		newArticle();
	};
	// 'Read More' Button
	document.getElementById('read-more-btn').onclick = function () {
		onPush(_globals._GLOBAL.readMoreText, true);
	};

	// Dashboard Search Buttons
	$('.dashboard__search-button').each(function (index) {
		this.onclick = function () {
			var position = $(this).prev().find(":selected").attr('val');
			var symArr = JSON.parse($(this).attr('symArr'));

			startScan(symArr, position);
		};
	});

	// Dashboard Save to Dash
	$('.dashboard__save-to-dash').each(function (index) {
		this.onclick = function () {
			var obj = JSON.parse($(this).attr('obj'));

			var pos = $(this).prev().prev().find(":selected").attr('val');

			var titleMod = $(this).prev().prev().find(":selected").html();

			obj.position = pos;
			obj.title += " - " + titleMod;

			_globals2.saved_to_dash.sections.push(obj);
			resetDash();
		};
	});

	// Dashboard Open Section Button
	$('.dashboard__open-section').each(function (index) {
		this.onclick = function () {
			var ul = $(this).next();
			if (ul.is(":visible")) {
				ul.slideUp();
			} else {
				ul.slideDown();
			}
		};
	});

	$('.saved-to-dash__search-button').each(function (index) {
		this.onclick = function () {
			var symArr = JSON.parse($(this).attr('symArr'));
			var position = $(this).attr('pos');

			startScan(symArr, position);
		};
	});

	$('.saved-to-dash__remove-button').each(function (index) {
		this.onclick = function () {
			var index = $(this).attr('index');

			_globals2.saved_to_dash.sections.splice(index, 1);
			resetDash();
		};
	});
}

function resetDash() {
	$('.practice-dashboard').html('').append($('<h1>').html('Dashboard'));
	(0, _renderDash.renderSaves)(_globals2.saved_to_dash);
	(0, _renderDash.renderDash)(_globals2.DASH_OPTIONS);
	convertFunctionButtons();
}

// Onload

window.onload = function () {

	var client = new XMLHttpRequest();
	client.open('GET', _globals._CONFIG.cmellonLoc);

	client.onreadystatechange = function () {

		_globals._GLOBAL.cmellonString = client.responseText;
	};

	client.addEventListener("load", function () {
		(0, _articleWorker.getArticles)();
	}.bind(this));
	client.send();

	_articleWorker.articleData.articleClient.addEventListener("load", function () {
		newArticle();
	});

	// Renders dashboard
	resetDash();

	//switchSoundList("Consonant");
	//sortDimensions();

	var f = localStorage.getItem('func');
	localStorage.removeItem("func");

	if (f !== null) {
		currentFuncList += f;
	}
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mapClusters = mapClusters;

var _checkIfVowel = __webpack_require__(2);

function mapClusters(allWordData, allClusterData, prevLength) {
    var res = [];

    for (var i = prevLength; i < allWordData.length; i++) {
        // Repeats Each Word

        var phons = [],
            letters = [],
            lastAnalysed = "start",
            phonsCount = 1,
            // 1 Because of glitch in AllWordData
        tempArr = [];

        for (var j = 0; j < allClusterData[i].length; j++) {
            // Repeats Each Cluster

            var letterType = allClusterData[i][j].type;

            if (letterType == "punc") {

                tempArr.push("");
                lastAnalysed = "punc";
                phons.push(tempArr);
                tempArr = [];
            } else if (letterType == "cons") {

                tempArr.push(cleanUndefined(allWordData[i][phonsCount]));
                phonsCount++;
                while (!(0, _checkIfVowel.checkIfVowel)(allWordData[i][phonsCount]) && phonsCount < allWordData[i].length) {
                    tempArr.push(cleanUndefined(allWordData[i][phonsCount]));
                    phonsCount++;
                }

                phons.push(tempArr);
                tempArr = [];

                lastAnalysed = "cons";
            } else if (letterType == "vowel") {

                tempArr.push(cleanUndefined(allWordData[i][phonsCount]));
                phonsCount++;
                while ((0, _checkIfVowel.checkIfVowel)(allWordData[i][phonsCount]) && phonsCount < allWordData[i].length) {
                    tempArr.push(cleanUndefined(allWordData[i][phonsCount]));
                    phonsCount++;
                }

                phons.push(tempArr);
                tempArr = [];
            }

            letters.push(allClusterData[i][j]);
        }

        res.push({
            phons: phons,
            letters: letters
        });
    }

    return res;
}

var cleanUndefined = function cleanUndefined(input) {
    if (input == null) {
        return "";
    } else {
        return input;
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createClusters = createClusters;
// Takes input from _GLOBAL.inputArr, returns cluster objects
function createClusters(inputArr) {

    var res = [];

    for (var i = 0; i < inputArr.length; i++) {
        var toInput = [],
            prevType = "start",
            chars = "",
            type = "";

        for (var j = 0; j < inputArr[i].length; j++) {

            var l = inputArr[i][j];

            if (l == "a" || l == "e" || l == "i" || l == "o" || l == "u" || l == "A" || l == "E" || l == "I" || l == "O" || l == "U" || l == "y" || l == "Y") {

                if (prevType == "start") {
                    type = "vowel";
                    chars = l;
                    prevType = "vowel";
                } else if (prevType == "vowel") {
                    chars += l;
                } else {
                    toInput.push({
                        type: type,
                        chars: chars
                    });
                    type = "vowel";
                    chars = l;
                    prevType = "vowel";
                }
            } else if (l == "/}" || l == "/{" || l == "/]" || l == "/[" || l == '"' || l == "\'" || l == "\n" || l == "\r\n" || l == "�" || l == "\�" || l == "\�" || l == "\�" || l == "-" || l == " " || l == ";" || l == "," || l == "." || l == ":" || l == "!" || l == "?" || l == "\'" || l == "(" || l == ")") {
                if (prevType == "start") {
                    type = "punc";
                    chars = l;
                    prevType = "punc";
                } else if (prevType == "punc") {
                    chars += l;
                } else {
                    toInput.push({
                        type: type,
                        chars: chars
                    });
                    type = "punc";
                    chars = l;
                    prevType = "punc";
                }
            } else {
                if (prevType == "start") {
                    type = "cons";
                    chars = l;
                    prevType = "cons";
                } else if (prevType == "cons") {
                    chars += l;
                } else {
                    toInput.push({
                        type: type,
                        chars: chars
                    });
                    type = "cons";
                    chars = l;
                    prevType = "cons";
                }
            }

            if (j == inputArr[i].length - 1) {
                toInput.push({
                    type: type,
                    chars: chars
                });
            }
        }

        res.push(toInput);
    }

    return res;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.printToPage = printToPage;

var _convert = __webpack_require__(0);

function printToPage(prevLength, allWordData, paragraphs, prevParas, phonComparisons, allClusterData) {

    for (var i = prevLength; i < allWordData.length; i++) {

        if (i == paragraphs[prevParas] + 1) {

            $("#output-txt").append("<br><br><a></a>");
            prevParas++;
            i--;
        } else {

            $("#output-txt").append(toInsert);

            var insideDiv = "";

            for (var j = 0; j < allClusterData[i].length; j++) {
                // Loops over all of the clusters to add

                var phonsToAdd = "";
                var found = false;

                for (var k = 0; k < phonComparisons[i].phons[j].length; k++) {
                    phonsToAdd += (0, _convert.convert)(phonComparisons[i].phons[j][k]);
                };

                if (phonsToAdd == "" && !found) {
                    phonsToAdd = "not found";
                } else if (phonsToAdd == "") {
                    phonsToAdd = "silent";
                }

                var buttonFunc = "scanFor('" + phonComparisons[i].phons[j][0] + "')";
                var buttonFunc2 = 'popDown(' + i + ',' + j + ');';
                var buttonFunc3 = "resetScans();";

                //<div class="popup" onfocusout="popDown('+prev+','+j+')" onmouseleave="popDown('+prev+','+j+')" id="popup'+prev+'-'+j+'">'+ allClusterData[i][j].chars + ' - /' + phonsToAdd + '/<br><button class="sound-btn" onclick='+ buttonFunc +'><i class="fa fa-search" aria-hidden="true"></i></button><button class="sound-btn" onclick='+ buttonFunc3 +'><i class="fa fa-undo" aria-hidden="true"></i></button></div>

                insideDiv += '<div class="cluster" onClick="popUp(' + i + ',' + j + ');" id="cluster' + i + '-' + j + '">' + allClusterData[i][j].chars + '</div>';
            }

            var toInsert = $('<span id="word' + i + '">' + insideDiv + '</span>');

            $("#output-txt").append(toInsert);
        }
    }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.articleData = undefined;
exports.getArticles = getArticles;
exports.articlesToArray = articlesToArray;
exports.shuffle = shuffle;

var _globals = __webpack_require__(1);

var articleData = exports.articleData = {

    // Article Worker Stuff
    allArticles: "",
    articleArray: [],
    articleCounter: 0,
    articlesLoc: '/accentlab/raw/articles.txt',
    articleClient: new XMLHttpRequest()

};

function getArticles() {

    articleData.articleClient.open('GET', articleData.articlesLoc);

    articleData.articleClient.onreadystatechange = function () {
        articleData.allArticles = articleData.articleClient.responseText;
        articlesToArray();
    };

    articleData.articleClient.send();
}

function articlesToArray() {

    var counter = 0;
    articleData.articleArray[counter] = "";

    for (var i = 0; i < articleData.allArticles.length; i++) {

        var c = articleData.allArticles.charAt(i);

        if (c == "/" && articleData.allArticles.charAt(i + 2) == "/") {
            // Checks for /// as indicator of new article
            i += 4;
            counter++;
            articleData.articleArray[counter] = "";
        } else {
            articleData.articleArray[counter] += c;
        }
    }

    articleData.articleArray = shuffle(articleData.articleArray);
}

function shuffle(array) {
    var tmp,
        current,
        top = array.length;
    if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }

    return array;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.searchInDictionary = undefined;

var _mellonToPhonetics = __webpack_require__(10);

var searchInDictionary = exports.searchInDictionary = function searchInDictionary(inputArr, cmellon) {

	var arrayToSend = [];

	for (var i = 0; i < inputArr.length; i++) {

		// CLEANS UP THE WORD READY FOR SEARCHING

		var cleanedResult = "";

		for (var s = 0; s < inputArr[i].length; s++) {

			var l = inputArr[i].charAt(s);

			if (l == "\"" || l == "\'" || l == "\n" || l == "\r\n" || l == "\r" || l == "�" || l == "\�" || l == "\�" || l == "\�" || l == "-" || l == " " || l == ";" || l == "," || l == "." || l == ":" || l == "!" || l == "?" || l == "\'" || l == "(" || l == ")") {
				// Do nothing
			} else {
				cleanedResult += l;
			}
		}

		var loc = cmellon.search("\n" + cleanedResult.toUpperCase() + "  ");

		var result = "";

		if (loc > -1) {

			var l = "";
			var counter = 0;
			var startloc = loc + cleanedResult.length + 2;

			while (l != ";") {
				l = cmellon.charAt(startloc + counter);
				result += l;
				counter++;
			}
		} else {
			result = "NF";
		}

		// CONVERTS WHOLE STRING TO PHONETICS


		var t = (0, _mellonToPhonetics.mellonToPhonetics)(result);

		arrayToSend.push(t[1]);
	}

	return arrayToSend;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mellonToPhonetics = undefined;

var _convert = __webpack_require__(0);

var mellonToPhonetics = exports.mellonToPhonetics = function mellonToPhonetics(str) {

	var res = "";

	var l;
	var sym = "";

	var tempArr = [];
	var arrayToSend = [];

	// Preps

	for (var i = 0; i < str.length; i++) {

		l = str.charAt(i);

		if (l == " ") {
			tempArr.push(sym);
			res += (0, _convert.convert)(sym);
			sym = "";
		} else if (l == ";") {
			tempArr.push(sym);
			res += (0, _convert.convert)(sym);
			sym = "";
		} else if (!isNaN(parseInt(l))) {
			// Checks if it's a number - THIS IS THE THING TO CHANGE TO REGISTER EMPHASIS
			if (sym == "ER" || sym == "IY" || sym == "AH") {
				sym += l;
			}
		} else {
			sym += l;
		}
	}

	if (str == "NF") {
		res = "not found";
	}

	//returns the full word translated to phonetics, and also the part ready to be pushed to fullWordTranslations[];
	return ["/" + res + "/", tempArr];
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var breakDownText = exports.breakDownText = function breakDownText(input, _GLOBAL) {

	var word = "",
	    inputArr = [];

	// BREAKS DOWN THE INPUT INTO INDIVIDUAL WORDS, PUTS THEM INTO INPUTARR[]

	for (var i = 0; i < input.length; i++) {

		var l = input.charAt(i);

		if (l == " ") {

			if (word !== "") {
				// Checks if it's not empty before clipping and pushing to array
				word += l;
				inputArr.push(word);
				word = "";
			}
		} else if (l == "\n") {

			if (word != "") {

				word += l;
				inputArr.push(word);
				word = "";
			}

			_GLOBAL.paragraphs.push(inputArr.length + _GLOBAL.prevLength);
			inputArr.push("");
		} else {
			// Only thing left for it to be is a letter
			word += l;
		}

		// CLIP THE LENGTH EVERY 5 PARAGRAPHS AND ADD TO INPUTARR

		if (_GLOBAL.paragraphs.length > _GLOBAL.paragraphTicker - 1) {

			_GLOBAL.readMoreText = input.slice(i, input.length);
			_GLOBAL.paragraphTicker += _GLOBAL.paragraphInterval;
			break;
		}
	}

	// I ASSUME THIS SORTS OUT THE LAST WORD ISSUES

	if (word !== "") {
		inputArr.push(word);
		word = "";
	}

	// BY THIS TIME, INPUTARR CONTAINS ALL WORDS AND ALL PUNCTUATION

	return inputArr;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
       value: true
});
var getAudio = exports.getAudio = function getAudio(sym) {

       var res;

       switch (sym) {

              case "AA":
                     res = "sounds/longah.mp3";
                     break;
              case "AE":
                     res = "sounds/ah.mp3";
                     break;
              case "AH0":
                     res = "sounds/schwa.mp3";
                     break;
              case "AH1":
                     res = "sounds/uh.mp3";
                     break;
              case "AH2":
                     res = "sounds/uh.mp3";
                     break;
              case "SH":
                     res = "sounds/shsound.mp3";
                     break;
              case "AO":
                     res = "sounds/or.mp3";
                     break;

              case "OH":
                     res = "sounds/oh.mp3";
                     break;

              case "AW":
                     res = "sounds/ow.mp3";
                     break;
              case "AY":
                     res = "sounds/igh.mp3";
                     break;
              case "B":
                     res = "sounds/bsound.mp3";
                     break;
              case "CH":
                     res = "sounds/chsound.mp3";
                     break;
              case "D":
                     res = "sounds/dsound.mp3";
                     break;

              case "DH":
                     res = "sounds/voicedth.mp3";
                     break;
              case "EH":
                     res = "sounds/eh.mp3";
                     break;
              case "ER0":
                     res = "sounds/schwa.mp3";
                     break;
              case "ER1":
                     res = "sounds/ur.mp3";
                     break;
              case "ER2":
                     res = "sounds/ur.mp3";
                     break;
              case "EY":
                     res = "sounds/ay.mp3";
                     break;
              case "F":
                     res = "sounds/fsound.mp3";
                     break;

              case "G":
                     res = "sounds/gsound.mp3";
                     break;
              case "HH":
                     res = "sounds/hsound.mp3";
                     break;
              case "IH":
                     res = "sounds/ih.mp3";
                     break;
              case "IY0":
                     res = "sounds/ee.mp3";
                     break;
              case "IY1":
                     res = "sounds/ee.mp3";
                     break;
              case "IY2":
                     res = "sounds/ee.mp3";
                     break;
              case "JH":
                     res = "sounds/jsound.mp3";
                     break;

              case "K":
                     res = "sounds/ksound.mp3";
                     break;
              case "L":
                     res = "sounds/lightl.mp3";
                     break;
              case "M":
                     res = "sounds/msound.mp3";
                     break;
              case "N":
                     res = "sounds/nsound.mp3";
                     break;
              case "NG":
                     res = "sounds/ngsound.mp3";
                     break;

              case "OW":
                     res = "sounds/o.mp3";
                     break;
              case "OY":
                     res = "sounds/oy.mp3";
                     break;
              case "P":
                     res = "sounds/psound.mp3";
                     break;
              case "R":
                     res = "sounds/rsound.mp3";
                     break;
              case "S":
                     res = "sounds/ssound.mp3";
                     break;

              case "T":
                     res = "sounds/tsound.mp3";
                     break;
              case "TH":
                     res = "sounds/unvoicedth.mp3";
                     break;
              case "UH":
                     res = "sounds/ouh.mp3";
                     break;
              case "UW":
                     res = "sounds/oo.mp3";
                     break;
              case "V":
                     res = "sounds/vsound.mp3";
                     break;

              case "W":
                     res = "sounds/wsound.mp3";
                     break;
              case "Y":
                     res = "sounds/ysound.mp3";
                     break;
              case "Z":
                     res = "sounds/zsound.mp3";
                     break;
              case "ZH":
                     res = "sounds/zhsound.mp3";
                     break;
              default:
                     res = sym;

       }

       return '/accentlab/raw/' + res;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var checkIfUnvoiFric = exports.checkIfUnvoiFric = function checkIfUnvoiFric(sym) {
    var res;

    switch (sym) {

        case "S":
            res = true;
            break;
        case "F":
            res = true;
            break;
        case "SH":
            res = true;
            break;
        case "TH":
            res = true;
            break;
        case "H":
            res = true;
        default:
            res = false;
    }
    return res;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
var checkIfUnvoiPlo = exports.checkIfUnvoiPlo = function checkIfUnvoiPlo(sym) {
		var res;

		switch (sym) {

				case "P":
						res = true;
						break;

				case "T":
						res = true;
						break;

				case "K":
						res = true;
						break;

				default:
						res = false;
		}
		return res;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderDash = renderDash;
exports.renderSaves = renderSaves;
// Takes a DASH_OPTIONS object
function renderDash(DASH_OPTIONS) {

    var dash = $('.practice-dashboard');

    for (var i = 0; i < DASH_OPTIONS.sections.length; i++) {

        var ul = $('<ul>').addClass('practice-dashboard__ul');

        $('<h3>').addClass('practice-dashboard__ul__title').html(DASH_OPTIONS.sections[i].title).appendTo(ul);
        $('<p>').addClass('practice-dashboard__ul__desc').html(DASH_OPTIONS.sections[i].desc).appendTo(ul);

        // Iterate over each subsection
        var subsections = DASH_OPTIONS.sections[i].subsections;

        for (var o = 0; o < subsections.length; o++) {

            $('<h4>').html(subsections[o].title).appendTo(ul);
            $('<p>').html(subsections[o].desc).appendTo(ul);
            $('<a>').addClass('dashboard__open-section').html('<i class="fa fa-caret-down" aria-hidden="true"></i>').appendTo(ul);

            var subUl = $('<ul>').addClass('subsection__ul').hide();

            // Iterate over each option in each subsection
            for (var p = 0; p < subsections[o].options.length; p++) {
                var li = $('<li>');

                $('<h5>').html(subsections[o].options[p].title).appendTo(li);

                var options = [{
                    val: "any",
                    text: "Any Position"
                }, {
                    val: "start",
                    text: "At Start"
                }, {
                    val: "end",
                    text: "At End"
                }, {
                    val: "beforeVowel",
                    text: "Before Vowel"
                }, {
                    val: "beforeNonVowel",
                    text: "Before Non-Vowel"
                }];

                var sel = $('<select>').addClass('dashboard__select').appendTo(li);

                if (subsections[o].options[p].positionArr === undefined) {
                    $(options).each(function (q) {

                        var o = $('<option>').attr('val', options[q].val).html(options[q].text);

                        o.appendTo(sel);
                    });
                } else {

                    $(subsections[o].options[i].positionArr).each(function (q) {
                        var obj = $('<option>').attr('val', subsections[o].options[p].positionArr[q]).html('N/A');

                        obj.appendTo(sel);
                    });
                }

                $('<a>').addClass('dashboard__search-button').attr('symArr', JSON.stringify(subsections[o].options[p].symArr)).html('<i class="fa fa-search" aria-hidden="true"></i>').appendTo(li);

                $('<a>').addClass('dashboard__save-to-dash').attr('obj', JSON.stringify(subsections[o].options[p])).html('<i class="fa fa-save" aria-hidden="true"></i>').appendTo(li);

                li.appendTo(subUl);
            }

            subUl.appendTo(ul);
        }

        ul.appendTo(dash);
    }
}

function renderSaves(saved_to_dash) {

    console.log("firing");

    var dash = $('.practice-dashboard');

    var ul = $('<ul>').addClass('practice-dashboard__ul');

    for (var i = 0; i < saved_to_dash.sections.length; i++) {

        $('<h3>').addClass('practice-dashboard__ul__title').html(saved_to_dash.sections[i].title).appendTo(ul);
        $('<a>').addClass('saved-to-dash__search-button').html('<i class="fa fa-search" aria-hidden="true"></i>').attr('symArr', JSON.stringify(saved_to_dash.sections[i].symArr)).attr('pos', saved_to_dash.sections[i].position).appendTo(ul);

        $('<a>').addClass('saved-to-dash__remove-button').html('<i class="fa fa-remove" aria-hidden="true"></i>').attr('index', i).appendTo(ul);
    }

    ul.appendTo(dash);
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var saved_to_dash = exports.saved_to_dash = {
	sections: []
};

var DASH_OPTIONS = exports.DASH_OPTIONS = {
	sections: [{
		title: "Vowels",
		desc: "A, E, I, O, and U.",
		subsections: []
	}, {
		title: "Consonants",
		desc: "The hard sounds, like 'S' and 'T' and 'F', which separate the vowels.",
		subsections: [{
			title: "Fricatives",
			desc: "Soft, dragged out sounds, like 'F' and 'SH'.",
			symArr: ["TH", "DH", "S", "Z", "F", "V", "HH", "SH", "ZH"],
			options: [{
				title: "The Unvoiced TH",
				symArr: ["TH"],
				phoneme: "/&#952/"
			}, {
				title: "The Voiced TH",
				symArr: ["DH"],
				phoneme: "/&#240/"
			}, {
				title: "All TH Sounds",
				symArr: ["TH", "DH"],
				phoneme: "/&#240/ & /&#952/"
			}, {
				title: "The S Sound",
				symArr: ["S"]
			}, {
				title: "The Z Sound",
				symArr: ["Z"]
			}, {
				title: "The F Sound",
				symArr: ["F"]
			}, {
				title: "The V Sound",
				symArr: ["V"]
			}, {
				title: "The H Sound",
				symArr: ["HH"]
			}, {
				title: "The /&#643/ Sound",
				symArr: ["SH"]
			}, {
				title: "The /&#658/ Sound",
				symArr: ["ZH"]
			}]
		}, {
			title: "Plosives",
			desc: "Hard, strong sounds like 'P' and 'B'",
			symArr: ["T", "D", "P", "B", "K", "G"],
			options: [{
				title: "The T Sound",
				symArr: ["T"]
			}, {
				title: "The D Sound",
				symArr: ["D"]
			}, {
				title: "The P Sound",
				symArr: ["P"]
			}, {
				title: "The B Sound",
				symArr: ["B"]
			}, {
				title: "The K Sound",
				symArr: ["K"]
			}, {
				title: "The G Sound",
				symArr: ["G"]
			}]
		}, {
			title: "Affricates",
			desc: "Two sounds: the CH and the J.",
			symArr: ["CH", "J"],
			options: [{
				title: "The CH Sound",
				symArr: ["CH"]
			}, {
				title: "The J Sound",
				symArr: ["J"]
			}]
		}, {
			title: "Nasals",
			desc: "The only three sounds in English which come through the nose.",
			symArr: ["M", "N", "NG"],
			options: [{
				title: "The M Sound",
				symArr: ["M"]
			}, {
				title: "The N Sound",
				symArr: ["N"]
			}, {
				title: "The NG Sound",
				symArr: ["NG"]
			}]
		}, {
			title: "Other",
			desc: "Sounds - like the R, L and Y - which don't fall neatly into another category.",
			options: [{
				title: "The Light L",
				symArr: ["L"],
				positionArr: ["beforeVowel"]
			}, {
				title: "The Dark L",
				symArr: ["L"],
				positionArr: ["beforeNonVowel"]
			}, {
				title: "All L Sounds",
				symArr: ["L"],
				positionArr: ["any"]
			}, {
				title: "The Voiced R",
				symArr: ['R', 'ER0', 'ER1', 'ER2'],
				positionArr: ["beforeVowel"]
			}, {
				title: "The Non-Rhotic R",
				symArr: ['R', 'ER0', 'ER1', 'ER2'],
				positionArr: ["beforeNonVowel"]
			}, {
				title: "All R Sounds",
				symArr: ['R', 'ER0', 'ER1', 'ER2'],
				positionArr: ["any"]
			}, {
				title: "The Y Sound",
				symArr: ["Y"]
			}, {
				title: "The W Sound",
				symArr: ["W"]
			}]
		}]
	}]
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map