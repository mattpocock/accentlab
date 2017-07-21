var cmellontxt;

var allWordData = [];
var noTransWords = [];
var fullWordTranslations = [];
var phonComparisons = [];
var allClusterData = [];
var colors = ["#ffea74", "#d374ff", "#ff749b","#a0ff74", "#9074ff", "#74c7ff", "#ffa778"];
var colorcount = 0;
var paragraphs = [];

var onPush = function() {
	
	allWordData = [];
	colorcount = 0;
	paragraphs = [];
	fullWordTranslations = [];
	
	var input = document.getElementById("input-txt").value;
	
	var inputArr = [];
	
	var word = "";
	
	// BREAKS DOWN THE INPUT INTO INDIVIDUAL WORDS, PUTS THEM INTO INPUTARR[]
	
	for (var i = 0; i < input.length; i++) {
		
		var l = input.charAt(i);
		
		if (l == " ") {
			
			if (word !== "") { // Checks if it's not empty before clipping and pushing to array
				word+= l;
				inputArr.push(word);
				word = "";
			}
			
		} else if (l == "\n") {
			
			if (word != "") {
			
				word+= l;
				inputArr.push(word);
				word = "";
				
			}
			
			paragraphs.push(inputArr.length);
			inputArr.push("");
		} else { // Only thing left for it to be is a letter
			word += l;
		}
		
	}
	
	if (word !== "") {
				inputArr.push(word);
				word = "";
			}
			
	// BY THIS TIME, INPUTARR CONTAINS ALL WORDS AND ALL PUNCTUATION
	
	noTransWords = [];
	
	noTransWords = inputArr;
	
	
	var out = document.getElementById("output-txt"); // Clears output text
	out.innerHTML = "";
	
	
	for (var i = 0; i < inputArr.length; i++) {
		
		
		/*if (i == paragraphs[paraCounter]) {
			
			$( "#output-txt" ).append("<br><br><a></a>");
			allWordData.push("");
			paraCounter++;
			
		} else { */
		
			// CLEANS UP THE WORD READY FOR SEARCHING
			
			var cleanedResult = "";
			
			for (var s = 0; s < inputArr[i].length; s++) {
				
				var l = inputArr[i].charAt(s);
				
				if (l == "\"" || l == "\'" || l == "\n" || l == "\r\n" || l == "“" || l == "\“" || l == "\”" || l == "\’" || l == "-" || l == " " || l == ";" || l == "," || l == "." || l == ":" || l == "!" || l == "?" || l == "\'" || l == "(" || l == ")") {
					
				} else {
					cleanedResult += l;
				}
				
			}
				
			// SEARCHES THE WORD IN THE DICTIONARY
			
			var loc = cmellontxt.search("\n" + cleanedResult.toUpperCase() + "  ");
			
			var result = "";
			
			if (loc > -1) {
				
				var l = "";
				var counter = 0;
				var startloc = loc + cleanedResult.length + 2;
				
				while (l != ";") {
					l = cmellontxt.charAt(startloc+counter);
					result += l;
					counter++;
				}
			
			} else {
				result = "NF";
			}
			
			// CONVERTS WHOLE STRING TO PHONETICS
			
			result = mellonToPhonetics(result);
			
			fullWordTranslations.push(result);
			
	
	}
	
	// Clusters
	
	allClusterData = [];
	
	function cluster (type, chars) {
    this.type = type;
    this.chars = chars;
	}
	
	
	for (var i = 0; i < noTransWords.length; i++) { // Works out Letters for Clusters
		
		var toInput = [];
		var prevType = "start";
		var chars = "";
		var type = "";
		
		for (var j = 0; j < noTransWords[i].length; j++) {
			
			var l = noTransWords[i][j];
			
			if (l == "a" || l == "e" || l == "i" || l == "o" || l == "u" || l == "A" || l == "E" || l == "I" || l == "O" || l == "U") {
				
				if (prevType == "start") {
					type = "vowel";
					chars = l;
					prevType = "vowel";
				} else if (prevType == "vowel") {
					chars += l;
				} else {
					toInput.push(new cluster(type, chars));
					type = "vowel";
					chars = l;
					prevType = "vowel";
				}
				
			} else if (l == "\"" || l == "\'" || l == "\n" || l == "\r\n" || l == "“" || l == "\“" || l == "\”" || l == "\’" || l == "-" || l == " " || l == ";" || l == "," || l == "." || l == ":" || l == "!" || l == "?" || l == "\'" || l == "(" || l == ")"){
				if (prevType == "start") {
					type = "punc";
					chars = l;
					prevType = "punc";
				} else if (prevType == "punc") {
					chars += l;
				} else {
					toInput.push(new cluster(type, chars));
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
					toInput.push(new cluster(type, chars));
					type = "cons";
					chars = l;
					prevType = "cons";
				}
			}
			
			if (j == noTransWords[i].length - 1) {
				toInput.push(new cluster(type, chars));
			}
			
			
			
		}
		
		allClusterData.push(toInput);
		
	}
	
	
	phonComparisons = [];
	
	function comparison (phons, letters) {
    this.phons = phons;
    this.letters = letters;
	}
	
	// Compare allClusterData to allWordData
	
	for (var i = 0; i < allClusterData.length; i++) { // Repeats Each Word
		
		var phons = [];
		var letters = [];
		var lastAnalysed = "start";
		var phonsCount = 1; // It's '1' because of a weird glitch in the AllWordData
		var tempArr = [];
		
		for (var j = 0; j < allClusterData[i].length; j++) { // Repeats Each Cluster
		
			var letterType = allClusterData[i][j].type;
			
			
			if (letterType == "punc") {
				
				tempArr.push("");
				lastAnalysed = "punc";
				phons.push(tempArr);
				tempArr = [];
				
				
			} else if (letterType == "cons") {
				
				tempArr.push(cleanUndefined(allWordData[i][phonsCount]));
				phonsCount++;
				while (!checkIfVowel(allWordData[i][phonsCount]) && phonsCount < allWordData[i].length) {
					tempArr.push(cleanUndefined(allWordData[i][phonsCount]));
					phonsCount++;
					
				}
				
				phons.push(tempArr);
				tempArr = [];
				
				
				lastAnalysed = "cons";
				
			} else if (letterType == "vowel") {
				
				tempArr.push(cleanUndefined(allWordData[i][phonsCount]));
				phonsCount++;
				while (checkIfVowel(allWordData[i][phonsCount]) && phonsCount < allWordData[i].length) {
					tempArr.push(cleanUndefined(allWordData[i][phonsCount]));
					phonsCount++;
					
				}
				
				phons.push(tempArr);
				tempArr = [];
				
			}
			
			letters.push(allClusterData[i][j]);
			
		}
		
		phonComparisons.push(new comparison(phons, letters));
		
		
		
	}
	
	
	
	// Prints to Page
	
	var paraCounter = 0;
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	for (var i = 0; i < allWordData.length; i++) {
		
		if (i == paragraphs[paraCounter]+1) {
			
			$( "#output-txt" ).append("<br><a></a>");
			paraCounter++;
			i--;
			
		} else {
		
		$( "#output-txt" ).append(toInsert);
		
		var insideDiv = "";
		
		for (var j = 0; j < allClusterData[i].length; j++) { // Loops over all of the clusters to add
		
			var phonsToAdd = "";
			var found = false;
			
			for (var k = 0; k < phonComparisons[i].phons[j].length; k++) {phonsToAdd+= convert(phonComparisons[i].phons[j][k])};
			
			if (phonsToAdd == "" && !found) {
				phonsToAdd = "not found";
			} else if (phonsToAdd == ""){
				phonsToAdd = "silent";
			}
		
			
			insideDiv += '<div class="cluster" onClick="popUp('+i+','+j+');" id="cluster'+i+'-'+j+'" onclick="highlight('+ i + ',' + j +')"><div class="popup" onmouseleave="popDown('+i+','+j+');" id="popup'+i+'-'+j+'">'+ allClusterData[i][j].chars + ' - /' + phonsToAdd + '/</div>' + allClusterData[i][j].chars + '</div>';
			
		}
		
		var toInsert = $('<span id="word' + i + '">' + insideDiv + '</span>');
			
		$( "#output-txt" ).append(toInsert);
		
		}
	}
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	console.log(allClusterData);
	
	
	
	//TODO: Work on detecting silent vowels
	
	
	
	
	
}

var scanCustom = function() {
	
	var sym = $('#custom-txt').val().toUpperCase();
	scanFor(sym);
	
	$('#custom-txt').val('');
}

var mellonToPhonetics = function(str) {
	
	var res = "";
	
	var l;
	var sym = "";
	
	// This function also sends the data to the main allWordData[]
	
	var arrayToSend = [];
	
	// Preps
	
	for (var i = 0; i < str.length; i++) {
		
		l = str.charAt(i);
		
		if (l == " ") {
			arrayToSend.push(sym);
			res += convert(sym);
			sym = "";
		} else if (l == ";") {
			arrayToSend.push(sym);
			res += convert(sym);
			sym = "";
		} else if (!isNaN(parseInt(l))) { // Checks if it's a number - THIS IS THE THING TO CHANGE TO REGISTER EMPHASIS
			if (sym == "ER" || sym == "IY" || sym == "AH") {
				sym+=l;
			}
		} else {
			sym+=l;
		}
		
	}
	
	if (str == "NF") {
		res = "not found";
	}
	
	allWordData.push(arrayToSend);
	
	return "/" + res + "/";
	
}

var cleanUndefined = function (input) {
	if (input == null) {
		return "";
	} else {
		return input;
	}
}

var convert = function(sym) {
	
	var res;
	
		switch(sym) {
		
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
        res = "&#601r";
        break;
	case "ER1":
        res = "&#604r";
        break;
	case "ER2":
        res = "&#604r";
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
}

var changeColour = function(i,p,color) {
	$( "#cluster" + i + "-" + p ).css({"background-color": color});
}

var scanFor = function(sym, sym2, sym3, sym4, sym5, sym6, sym7, sym8, sym9, sym10) {
	var found = false;
	
	for (var i = 0; i < phonComparisons.length; i++) {
		
		for (var p = 0; p < phonComparisons[i].phons.length; p++) {
			
			for (var q = 0; q < phonComparisons[i].phons[p].length; q++) {
				
				
			
				if (phonComparisons[i].phons[p][q] == sym || phonComparisons[i].phons[p][q] == sym2 || phonComparisons[i].phons[p][q] == sym3 || phonComparisons[i].phons[p][q] == sym4 || phonComparisons[i].phons[p][q] == sym5 || phonComparisons[i].phons[p][q] == sym6 || phonComparisons[i].phons[p][q] == sym7 || phonComparisons[i].phons[p][q] == sym8 || phonComparisons[i].phons[p][q] == sym9 || phonComparisons[i].phons[p][q] == sym10) {
					
					changeColour(i,p,colors[colorcount]);
				
				found = true;
				
				}
			
			}
			
		}
		
	}
	
	//TODO: Do REVERSE
	if (found) {colorcount++;};
}

var nonRhoticScan = function(sym) {
	
	var found = false;
	
	for (var i = 0; i < phonComparisons.length; i++) {
		
		for (var p = 0; p < phonComparisons[i].phons.length; p++) {
			
			for (var j = 0; j < phonComparisons[i].phons[p].length; j++) {
			
				if (phonComparisons[i].phons[p][j] == sym || phonComparisons[i].phons[p][j] == "ER0" || phonComparisons[i].phons[p][j] == "ER1" || phonComparisons[i].phons[p][j] == "ER2") {
					
					if (phonComparisons[i].phons[p][j+1] != null && !checkIfVowel(phonComparisons[i].phons[p][j+1])) { // Checks if next is a consonant
						changeColour(i,p,colors[colorcount]);
						console.log("1 - " + allWordData[i]);
						found = true;
					} else if (phonComparisons[i].phons[p+1] == "" && !checkIfVowel(phonComparisons[i].phons[p][j+1])) { // Checks if it's at the end, not perfect on 'y' endings
						changeColour(i,p,colors[colorcount]);
						console.log("2 - " + allWordData[i]);
						found = true;
						
					}

				
				}
				
			}
			
		}
		
	}
	
	//TODO: Do REVERSE
	if (found) {colorcount++;};
	
}

var vowelAfterScan = function(sym) {
	
	var found = false;
	
	for (var i = 0; i < phonComparisons.length; i++) {
		
		for (var p = 0; p < phonComparisons[i].phons.length; p++) {
			
			for (var j = 0; j < phonComparisons[i].phons[p].length; j++) {
				
				if (phonComparisons[i].phons[p][j] == sym) {
					
					if (checkIfVowel(phonComparisons[i].phons[p][j+1]) || (phonComparisons[i].phons[p][j+1] == null && checkIfVowel(phonComparisons[i].phons[p+1][0]))) { // Checks if there's a vowel in the next pocket of phonetics
						changeColour(i,p,colors[colorcount]);
						found = true;
						
					}
				
				}
				
			}
			
		}
		
	}
	
	//TODO: Do REVERSE
	if (found) {colorcount++;};
	
}

var atEndScan = function(sym) {
	
	var found = false;
	
	for (var i = 0; i < phonComparisons.length; i++) {
		
		for (var p = 0; p < phonComparisons[i].phons.length; p++) {
			
			for (var j = 0; j < phonComparisons[i].phons[p].length; j++) {
				
				if (phonComparisons[i].phons[p][j] == sym) {
								
					if (phonComparisons[i].phons[p][j+1] == null && phonComparisons[i].phons[p+1] == "") {
						changeColour(i,phonComparisons[i].letters.length-2,colors[colorcount]);
						console.log(allWordData[i] + ", Next In Cluster: " + phonComparisons[i].phons[p][j+1] + ", Next Cluster: " + phonComparisons[i].phons[p][j+1]);
						found = true;
						
					}
				
				}
				
			}
			
		}
		
	}
	
	//TODO: Do REVERSE
	if (found) {colorcount++;};
	
}

var darkLScan = function(sym) {
	
	var found = false;
	
	for (var i = 0; i < phonComparisons.length; i++) {
		
		for (var p = 0; p < phonComparisons[i].phons.length; p++) {
				
			for (var j = 0; j < phonComparisons[i].phons[p].length; j++) {
				
				if (phonComparisons[i].phons[p][j] == sym) {
					
					if (phonComparisons[i].phons[p][j+1] != null && !checkIfVowel(phonComparisons[i].phons[p][j+1])) { // Checks if next is a consonant
						changeColour(i,p,colors[colorcount]);
						console.log("1 - " + allWordData[i]);
						found = true;
					} else if (phonComparisons[i].phons[p+1] == "" && !checkIfVowel(phonComparisons[i].phons[p][j+1])) { // Checks if it's at the end, not perfect on 'y' endings
						changeColour(i,p,colors[colorcount]);
						console.log("2 - " + allWordData[i]);
						found = true;
						
					}
				
				}
				
			}
		
		}
		
	}
	
	if (found) {colorcount++;};
	
}

var checkIfVowel = function(sym) {
	
	var res;
	
		switch(sym) {
		
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
        res = true;
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

var resetScans = function() {
	
	colorcount = 0;
	
	for (var i = 0; i < allWordData.length; i++) {
		
		for (var j = 0; j < allClusterData[i].length; j++) {
		
			$( "#cluster" + i + "-" + j ).css({"background-color": "transparent"});
		
		}
		
	}

}

var highlight = function(i, j) {
	
	$( "#cluster" + i + "-" + j ).css({"background-color": colors[colorcount]});
	
}

var popUp = function(i, j) {
	
	$( "#popup" + i + "-" + j ).css({"visibility": "visible", "opacity": 1});
	console.log(phonComparisons[i].phons[j]);
	
}

var popDown = function (i, j) {
	
	$( "#popup" + i + "-" + j ).css({"visibility": "invisible", "opacity": 0});
	
}

window.onload = function() {
	
		var client = new XMLHttpRequest();
		client.open('GET', '/phonetics/cmellon.txt');
		
		client.onreadystatechange = function() {
		cmellontxt = client.responseText;
		}
		
		client.send();
		
		onPush();
}