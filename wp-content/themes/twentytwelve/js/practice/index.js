import { _GLOBAL, _CONFIG, MENU_CONFIG } from './globals.js';
import { mapClusters } from './functions/map-clusters.js';
import { createClusters } from './functions/create-clusters.js';
import { printToPage } from './functions/print-to-page.js';
import { getArticles, articleData, articlesToArray, shuffle } from './article-worker.js';
import { searchInDictionary } from './functions/search-in-dictionary';
import { breakDownText } from './functions/break-down-text';
import { getAudio } from './functions/get-audio';

// Checks
import { checkIfVowel } from './checks/check-if-vowel';
import { convert } from './checks/convert';
import { checkIfUnvoiFric } from './checks/check-if-unvoi-fric';
import { checkIfUnvoiPlo } from './checks/check-if-unvoi-plo';
import { renderDash, renderSaves } from '../dashboard/render-dash.js';
import { DASH_OPTIONS, saved_to_dash } from '../dashboard/globals';

/*	Where the magic happens.
 *	Takes in an input text, and a boolean.
 *	Boolean says if the user pressed 'read more' or not.
 */
var onPush = function(input, readMore) {
	
	// Resets colorcount
	_GLOBAL.colorCount = 0;
	
	// If user presses 'New Article' (not 'Read More')
	if (!readMore) {
		// Clears output text
		var out = document.getElementById("output-txt"); 
		out.innerHTML = "";
		$('.loader').hide();

		// Displays the read more button
		$('#read-more-btn').css('display', 'inline-block');

		// Resets globals
		_GLOBAL.prevLength = 0;
		_GLOBAL.phonComparisons = [];
		_GLOBAL.fullWordTranslations = [];
		_GLOBAL.allWordData = [];
		_GLOBAL.allClusterData = [];
		$('#lower-new-article-btn').css('display', 'none');
		_GLOBAL.paragraphs = [];
		_GLOBAL.paragraphTicker = _GLOBAL.paragraphInterval;
	}

	// New Variables for this run
	var prevParas = _GLOBAL.paragraphs.length;
	var inputArr = [];
	_GLOBAL.readMoreText = "";

	// Breaks down text into individual words, ready for searching
	inputArr = breakDownText(input, _GLOBAL); 
	
	// If there is no more text in the article, changes to new-article-btn
	if (_GLOBAL.readMoreText === "") {
		$('#read-more-btn').css('display', 'none');
		$('#lower-new-article-btn').css('display', 'inline-block');
		
	}
	
	// Creates allWordData
	var arrToAdd = searchInDictionary(inputArr, _GLOBAL.cmellonString);
	_GLOBAL.allWordData = _GLOBAL.allWordData.concat(arrToAdd);
	
	// Fills allClusterData with cluster objects
	_GLOBAL.allClusterData = _GLOBAL.allClusterData.concat(createClusters(inputArr));
	
	// Takes in allWordData and allClusterData, returns phonComparisons
	_GLOBAL.phonComparisons = _GLOBAL.phonComparisons.concat(
		mapClusters(_GLOBAL.allWordData, _GLOBAL.allClusterData, _GLOBAL.prevLength)
	);
	
	// Prints to Page
	
	printToPage(_GLOBAL.prevLength, _GLOBAL.allWordData, _GLOBAL.paragraphs,
			prevParas, _GLOBAL.phonComparisons, _GLOBAL.allClusterData);
	
	console.log(_GLOBAL.currentFuncList);
	var p = _GLOBAL.currentFuncList;
	eval(_GLOBAL.currentFuncList);
	_GLOBAL.currentFuncList = p;
	
	_GLOBAL.prevLength = _GLOBAL.allWordData.length;
	
}

var changeColour = function(word,cluster,color) {
	$( "#cluster" + word + "-" + cluster ).css({"background-color": color});
}

var startScan = function(arrOfSyms, position) {

	var found = false;

	for (var i = 0; i < arrOfSyms.length; i++) {

		for (var o = 0; o < _GLOBAL.phonComparisons.length; o++) {

			var res = scanWord(arrOfSyms[i], position, _GLOBAL.phonComparisons[o]);

			if (res !== null) {
				changeColour(o, res, _CONFIG.highlightColors[_GLOBAL.colorCount]);
				found = true;
			}

		}

	}

	// If found, go to next colour
	if (found) {
		_GLOBAL.colorCount++;
		if (_GLOBAL.colorCount === _CONFIG.highlightColors.length) {
			_GLOBAL.colorCount = 0;
		}

	}

	var string = JSON.stringify(arrOfSyms);
		
		_GLOBAL.currentFuncList += "startScan("
									+ string 
									+ ", '"
									+ position
									+ "');";

}

var scanWord = function(sym, position, word) {

	var res = null;

	// Iterates through each cluster
	for (var i = 0; i < word.phons.length; i++) {

		// Checks sounds at start
		if (position === "start") {
			if (word.phons[0][0] === sym) {res = i};
			break;

		// Checks sounds at end
		} else if (position === "end") {

			for (var o = 0; o < word.phons.length; o++) {

				var next;
					if (word.phons[i][o+1] !== undefined) {
						next = word.phons[i][o+1];
					} else if (word.phons[i+1] !== undefined) {
						next = word.phons[i+1][0];
					} else {
						next = ""
					}

				if (word.phons[i][o] === sym & next === "") {res = i};

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
				if (word.phons[i][o+1] !== undefined) {
					next = word.phons[i][o+1];
				} else if (word.phons[i+1] !== undefined) {
					next = word.phons[i+1][0];
				} else {
					next = "NF"
				}

				if (word.phons[i][o] === sym && checkIfVowel(next)) {
					res = i;
				}

			}
		
		// Checks if the sound is before a consonant, or 'no sound'
		} else if (position === "beforeNonVowel") {

			for (var o = 0; o < word.phons.length; o++) {

				var next;
				if (word.phons[i][o+1] !== undefined) {
					next = word.phons[i][o+1];
				} else if (word.phons[i+1] !== undefined) {
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

}

var resetScans = function() {
	
	_GLOBAL.colorCount = 0;
	
	for (var i = 0; i < _GLOBAL.phonComparisons.length; i++) {
		
		for (var j = 0; j < _GLOBAL.phonComparisons[i].letters.length; j++) {
		
			$( "#cluster" + i + "-" + j ).css({"background-color": "transparent"});
		
		}
		
	}
	
	for (var i = _GLOBAL.currentFuncList.length-2; i > -1; i--) {
		
		var c = _GLOBAL.currentFuncList.charAt(i);
		
		if (c == ";") {
			_GLOBAL.currentFuncList = _GLOBAL.currentFuncList.slice(0, i+1);

			break;
		} else if (i == 0) {
			_GLOBAL.currentFuncList = "";
		}
		
	}

	var p = _GLOBAL.currentFuncList;
	eval(_GLOBAL.currentFuncList);
	_GLOBAL.currentFuncList = p;

}

var sayWord = function (arr) {
	
	var audioArr = [];
	
	for (var j = 0; j < arr.phons.length; j++) {
		audioArr[j] = new Audio(getAudio(arr.phons[j][0]));
	}
	
	for (var j = 0; j < audioArr.length-1; j++) {
		var next = j+1;
		(function(next, j, audioArr) {
        audioArr[j].addEventListener("ended", function () {
			audioArr[next].play();
         })
		})
		
		
	}
	
	
	audioArr[0].play();
	
}

var clearBox = function () {
	
	$('#input-txt').val('');
	
}

var showBox = function () {
	$('#input-txt').css('display', 'block');
	$('#showBoxBtn').css('display', 'none');
	$('#convertBtn').css('display', 'inline-block').animate({opacity: 1}, 1000);
	$('#clearBtn').css('display', 'inline-block').animate({opacity: 1}, 1000);
	$('html, body').animate({
				scrollTop: $("#input-txt").offset().top - 50
			}, 1000);
}

var convertBtn = function () {
	onPush(document.getElementById('input-txt').value, false);
	$('#input-txt').css('display', 'none');
	$('#convertBtn').css('display', 'none');
	$('#clearBtn').css('display', 'none');
}

var getArrayFromMenu = function (menuArr) {
	
	var output = "";
	
	for (var i = 0; i < menuArr.length; i++) {
		
		output += '"' + vowelMenu("",i) + '",';
		
	}
	
}

function newArticle() {
	
	onPush(articleData.articleArray[articleData.articleCounter], false);

	articleData.articleCounter++;
	if (articleData.articleCounter === articleData.articleArray.length) {
	    articleData.articleCounter = 0;
	}
	
}

// Event Handlers

function convertFunctionButtons() {

	// 'New Article' Button
	document.getElementById("lower-new-article-btn").onclick = function() { 
		newArticle();
	};
	// 'Read More' Button
	document.getElementById('read-more-btn').onclick = function() {
		onPush(_GLOBAL.readMoreText, true);
	};

	// Dashboard Search Buttons
	$('.dashboard__search-button').each(function(index) {
		this.onclick = function() {
			var position = $(this).prev().find(":selected").attr('val');
			var symArr = JSON.parse($(this).attr('symArr'));
			
			startScan(symArr, position);
			
		}
	})

	// Dashboard Save to Dash
	$('.dashboard__save-to-dash').each(function(index) {
		this.onclick = function() {
			var obj = JSON.parse($(this).attr('obj'));

			var pos = $(this).prev().prev().find(":selected").attr('val');

			var titleMod = $(this).prev().prev().find(":selected").html();


			obj.position = pos;
			obj.title += " - " + titleMod;
			
			saved_to_dash.sections.push(obj);
			resetDash();
			
		}
	})



	// Dashboard Open Section Button
	$('.dashboard__open-section').each(function(index) {
		this.onclick = function() {
			var ul = $(this).next();
			if (ul.is(":visible")) {
				ul.slideUp();
			} else {
				ul.slideDown();
			}
		}
	})

	$('.saved-to-dash__search-button').each(function(index) {
		this.onclick = function() {
			var symArr = JSON.parse($(this).attr('symArr'));
			var position = $(this).attr('pos');

			startScan(symArr, position);
		}
	})

	$('.saved-to-dash__remove-button').each(function(index) {
		this.onclick = function() {
			var index = $(this).attr('index');

			saved_to_dash.sections.splice(index, 1);
			resetDash();
			
		}
	})

}

export function resetDash() {
    $('.practice-dashboard').html('').append(
        $('<h1>').html('Dashboard')
    )
    renderSaves(saved_to_dash);
	renderDash(DASH_OPTIONS);
	convertFunctionButtons();
}

// Onload

window.onload = function() {

	var client = new XMLHttpRequest();
	client.open('GET', _CONFIG.cmellonLoc);
	
	client.onreadystatechange = function() {
		
		_GLOBAL.cmellonString = client.responseText;
	}
	
	client.addEventListener("load", function() {
		getArticles();
	}.bind(this));
	client.send();


	articleData.articleClient.addEventListener("load", function() {
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
	
}