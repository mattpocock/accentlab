// OPTIONS

var cmellonloc = 'cmellon.txt';
var poploc = 'popwords.txt';

var cmellontxt;
var popWordstxt;

var allWordData = [];
var fullWordTranslations = [];
var phonComparisons = [];
var allClusterData = [];
var colors = ["#ffea74", "#d374ff", "#ff749b","#a0ff74", "#9074ff", "#74c7ff", "#ffa778"];
var colorcount = 0;
var paragraphs = [];
var popped = false;
var prevLength = 0;

var readMoreText = "";
var paragraphTicker, paragraphInterval = 5;


var currentFuncList = "";

var consOptions = ["Fricatives", "/&#952/ - Think", "/&#240/ - This","All TH Sounds","/s/ - See", "/z/ - Is", "/f/ - Few", "/v/ - View", "/h/ - How", "/&#643/ - Show", "/&#658/ - Measure","Plosives","/p/ - Pie", "/b/ - Buy", "/t/ - Tie", "/d/ - Dye", "/k/ - Kite", "/g/ - Guy", "Affricates", "/t&#643/ - Chin", "/&#676/ - Joke", "Nasals","/m/ - May", "/n/ - No", "/&#331/ - Sing", "Approximants","Light L", "Dark L", "All L's", "All R Sounds", "Dropped R's", "Voiced R's", "/j/ - You", "/w/ - Why"];
var vowelOptions = ["Short Vowels", "/e/ - Set", "/&#618/ - Sit", "/&#650/ - Soot", "/&#652/ - Shut", "/&#601/ - Schwa", "/&#230/ - Sat","/&#594/ - Soft", "Long Vowels","/&#593&#720/ - Start","/i&#720/ - See", "/u&#720/ - Sue", "/&#604&#720/ - Sir", "/&#596&#720/ - Sore","Diphthongs", "/e&#618/ - Say", "/a&#618/ - Sigh", "/a&#650/ - Sound", "/&#601&#650/ - So", "/&#596&#618/ - Soy"];
var vowelMenuSounds = [["EH","IH","UH","AH0","ER0","AH1","AH2","AE","OH"],"EH","IH","UH",["AH1","AH2"],["AH0","ER0"],"AE","OH",["IY1","IY2","ER1","ER2","AA","UW","AO"],"AA",["IY1","IY2"],"UW",["ER1","ER2"],"AO",["AW","OW","AY","EY","OY"],"EY","AY","AW","OW","OY"];
var otherOptions = ["ST Rule","Linking Words","Open Jaw"];

var onPush = function(input, readMore) {
	
	colorcount = 0;
	
	if (!readMore) {
		
		var out = document.getElementById("output-txt"); // Clears output text
		out.innerHTML = "";
		$('#readmorebtn').css('display', 'inline-block');
		prevLength = 0;
		phonComparisons = [];
		fullWordTranslations = [];
		allWordData = [];
		allClusterData = [];
		$('#lowernewarticlebtn').css('display', 'none');
		paragraphs = [];
		paragraphTicker = paragraphInterval;
	}

	var prevParas = paragraphs.length;
	
	readMoreText = "";
	
	var inputArr = [];
	
	inputArr = breakDownText(input); // Breaks down text into individual words, ready for searching
	
	if (readMoreText == "") {
		$('#readmorebtn').css('display', 'none');
		$('#lowernewarticlebtn').css('display', 'inline-block');
		
	}
	
	//var out = document.getElementById("output-txt"); // Clears output text
	
	//$('#output-txt').css('opacity', '0');
	//out.innerHTML = "";
	
	var arrToAdd = searchInDictionary(inputArr);
	
	allWordData = allWordData.concat(arrToAdd);
	
	
	
	
	// Clusters
	
	
	
	function cluster (type, chars) {
    this.type = type;
    this.chars = chars;
	}
	
	
	for (var i = 0; i < inputArr.length; i++) { // Works out Letters for Clusters
		
		var toInput = [];
		var prevType = "start";
		var chars = "";
		var type = "";
		
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
					toInput.push(new cluster(type, chars));
					type = "vowel";
					chars = l;
					prevType = "vowel";
				}
				
			} else if (l == "/}" || l == "/{" || l == "/]" || l == "/[" || l == '"' || l == "\'" || l == "\n" || l == "\r\n" || l == "“" || l == "\“" || l == "\”" || l == "\’" || l == "-" || l == " " || l == ";" || l == "," || l == "." || l == ":" || l == "!" || l == "?" || l == "\'" || l == "(" || l == ")"){
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
			
			if (j == inputArr[i].length - 1) {
				toInput.push(new cluster(type, chars));
			}
			
			
			
		}
		
		allClusterData.push(toInput);
		
	}
	
	
	
	
	function comparison (phons, letters) {
    this.phons = phons;
    this.letters = letters;
	}
	
	// Compare allClusterData to allWordData
	
	for (var i = prevLength; i < allWordData.length; i++) { // Repeats Each Word
		
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
	
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	for (var i = prevLength; i < allWordData.length; i++) {
		
		if (i == paragraphs[prevParas]+1) {
			
			$( "#output-txt" ).append("<br><br><a></a>");
			prevParas++;
			i--;
			
		} else {
		
		$( "#output-txt" ).append(toInsert);
		
		var insideDiv = "";
		
		for (var j = 0; j < allClusterData[i].length; j++) { // Loops over all of the clusters to add
		
			var phonsToAdd = "";
			var found = false;
			
			for (var k = 0; k < phonComparisons[i].phons[j].length; k++) {
				phonsToAdd+= convert(phonComparisons[i].phons[j][k])
			};
			
			if (phonsToAdd == "" && !found) {
				phonsToAdd = "not found";
			} else if (phonsToAdd == ""){
				phonsToAdd = "silent";
			}
			
			var buttonFunc = "scanFor('"+ phonComparisons[i].phons[j][0] + "')";
			var buttonFunc2 = 'popDown('+i+','+j+');';
			var buttonFunc3 = "resetScans();";
			
			//<div class="popup" onfocusout="popDown('+prev+','+j+')" onmouseleave="popDown('+prev+','+j+')" id="popup'+prev+'-'+j+'">'+ allClusterData[i][j].chars + ' - /' + phonsToAdd + '/<br><button class="sound-btn" onclick='+ buttonFunc +'><i class="fa fa-search" aria-hidden="true"></i></button><button class="sound-btn" onclick='+ buttonFunc3 +'><i class="fa fa-undo" aria-hidden="true"></i></button></div>
			
			insideDiv += '<div class="cluster" onClick="popUp('+i+','+j+');" id="cluster'+i+'-'+j+'">' + allClusterData[i][j].chars + '</div>';
			
		}
		
		var toInsert = $('<span id="word' + i + '">' + insideDiv + '</span>')
			
		$( "#output-txt" ).append(toInsert);
		
		}
	}
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	$('#output-txt').animate({opacity: 1}, 1000);
	
	var p = currentFuncList;
	eval(currentFuncList);
	currentFuncList = p;
	
	prevLength = allWordData.length;
	
	
	
}

var breakDownText = function(input) {
	
	var word = "";
	
	var inputArr = [];
	
	
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
			
			paragraphs.push(inputArr.length+prevLength);
			inputArr.push("");
		} else { // Only thing left for it to be is a letter
			word += l;
		}
		
		// CLIP THE LENGTH EVERY 5 PARAGRAPHS AND ADD TO INPUTARR
		
		if (paragraphs.length > paragraphTicker-1) {
			
			readMoreText = input.slice(i, input.length);
			paragraphTicker+=paragraphInterval;
			
			
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
		
}

var searchInDictionary = function(inputArr) {
		
		var arrayToSend = [];
	
		for (var i = 0; i < inputArr.length; i++) {
			
				// CLEANS UP THE WORD READY FOR SEARCHING
				
				var cleanedResult = "";
				
				for (var s = 0; s < inputArr[i].length; s++) {
					
					var l = inputArr[i].charAt(s);
					
					if (l == "\"" || l == "\'" || l == "\n" || l == "\r\n" || l == "\r" || l == "“" || l == "\“" || l == "\”" || l == "\’" || l == "-" || l == " " || l == ";" || l == "," || l == "." || l == ":" || l == "!" || l == "?" || l == "\'" || l == "(" || l == ")") {
						
					} else {
						cleanedResult += l;
					}
					
				}
					
				// SEARCHES THE WORD IN THE DICTIONARY
				
				var loc = popWordstxt.search("\n" + cleanedResult.toUpperCase() + "  ");
				
				var result = "";
				
				if (loc > -1) {
					
					var l = "";
					var counter = 0;
					var startloc = loc + cleanedResult.length + 2;
					
					while (l != ";") {
						l = popWordstxt.charAt(startloc+counter);
						result += l;
						counter++;
					}
				
				} else {
					result = "NF";
				}
				
				if (result == "NF") {
					
				
				
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
				
				}
				
				// CONVERTS WHOLE STRING TO PHONETICS
				
				
				
				var t = mellonToPhonetics(result);
				
				fullWordTranslations.push(t[0]);
				arrayToSend.push(t[1]);
				
				
				
		
		}
		
		return arrayToSend;
	
	}

var mellonToPhonetics = function(str) {
	
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
			res += convert(sym);
			sym = "";
		} else if (l == ";") {
			tempArr.push(sym);
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
	
	return ["/" + res + "/", tempArr]; //returns the full word translated to phonetics, and also the part ready to be pushed to fullWordTranslations[];
	
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
}

var changeColour = function(i,p,color) {
	$( "#cluster" + i + "-" + p ).css({"background-color": color});
}

var scanVowels = function() {
	var found = false;
	var numberFound = 0;
	
	for (var i = 0; i < phonComparisons.length; i++) {
		
		for (var p = 0; p < phonComparisons[i].phons.length; p++) {
			
			for (var q = 0; q < phonComparisons[i].phons[p].length; q++) {
			
				if (checkIfVowel(phonComparisons[i].phons[p][q])) {
					
					changeColour(i,p,colors[colorcount]);
				
				found = true;
				numberFound++;
				
				}
			
			}
			
		}
		
	}
	
	//TODO: Do REVERSE
	if (found) {colorcount++;};
	
	
	
}

// ALL SCANS

var scanFor = function(sym, sym2, sym3, sym4, sym5, sym6, sym7, sym8, sym9, sym10) {
	
	if (sym != "") {
	
	currentFuncList += "scanFor('" + sym + "', '" + sym2 + "', '" + sym3 + "', '" + sym4 + "', '" + sym5 + "', '" + sym6 + "', '" + sym7 + "', '" + sym8 + "', '" + sym9 + "', '" + sym10 + "');";
	
	var found = false;
	var numberFound = 0;
	
	for (var i = 0; i < phonComparisons.length; i++) {
		
		for (var p = 0; p < phonComparisons[i].phons.length; p++) {
			
			for (var q = 0; q < phonComparisons[i].phons[p].length; q++) {
				
				
			
				if (phonComparisons[i].phons[p][q] == sym || phonComparisons[i].phons[p][q] == sym2 || phonComparisons[i].phons[p][q] == sym3 || phonComparisons[i].phons[p][q] == sym4 || phonComparisons[i].phons[p][q] == sym5 || phonComparisons[i].phons[p][q] == sym6 || phonComparisons[i].phons[p][q] == sym7 || phonComparisons[i].phons[p][q] == sym8 || phonComparisons[i].phons[p][q] == sym9 || phonComparisons[i].phons[p][q] == sym10) {
					
					changeColour(i,p,colors[colorcount]);
				
				found = true;
				numberFound++;
				
				}
			
			}
			
		}
		
	}
	
	//TODO: Do REVERSE
	if (found) {colorcount++;};
	
	}
}

var scanVowelsAtStart = function() {
	
	currentFuncList += "scanVowelsAtStart();";
	
	var found = false;
	var numberFound = 0;
	
	for (var i = 0; i < phonComparisons.length; i++) {
		
		for (var p = 0; p < phonComparisons[i].phons.length; p++) {
			
			for (var q = 0; q < phonComparisons[i].phons[p].length; q++) {
			
				if (checkIfVowel(phonComparisons[i].phons[p][q]) && p == 0) {
					
					changeColour(i,p,colors[colorcount]);
				
				found = true;
				numberFound++;
				
				}
			
			}
			
		}
		
	}
	
	//TODO: Do REVERSE
	if (found) {colorcount++;};
	
}

var nonRhoticScan = function(sym) {
	
	currentFuncList += "nonRhoticScan('"+sym+"');";
	
	var found = false;
	
	for (var i = 0; i < phonComparisons.length; i++) {
		
		for (var p = 0; p < phonComparisons[i].phons.length; p++) {
			
			for (var j = 0; j < phonComparisons[i].phons[p].length; j++) {
			
				if (phonComparisons[i].phons[p][j] == sym || phonComparisons[i].phons[p][j] == "ER0" || phonComparisons[i].phons[p][j] == "ER1" || phonComparisons[i].phons[p][j] == "ER2") {
					
					if (phonComparisons[i].phons[p][j+1] != null && !checkIfVowel(phonComparisons[i].phons[p][j+1])) { // Checks if next is a consonant
						changeColour(i,p,colors[colorcount]);
						
						found = true;
					} else if (phonComparisons[i].phons[p+1] == "" && !checkIfVowel(phonComparisons[i].phons[p][j+1])) { // Checks if it's at the end, not perfect on 'y' endings
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

var vowelAfterScan = function(sym) {
	
	currentFuncList += "vowelAfterScan('" + sym + "');";
	
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

var stRuleScan = function() {
	
	currentFuncList += "stRuleScan();";
	
	var found = false;
	
	for (var i = 0; i < phonComparisons.length; i++) {
		
		for (var p = 0; p < phonComparisons[i].phons.length; p++) {
			
			for (var j = 0; j < phonComparisons[i].phons[p].length; j++) {
				
				if (checkIfUnvoiFric(phonComparisons[i].phons[p][j])) {
					
					if (checkIfUnvoiPlo(phonComparisons[i].phons[p][j+1])) { // Checks if there's an unvoiced plosive in the first pocket of phonetics
						
						if (checkIfVowel(phonComparisons[i].phons[p][j+2]) || (phonComparisons[i].phons[p][j+2] == null && checkIfVowel(phonComparisons[i].phons[p+1][0]))) {
						
							changeColour(i,p,colors[colorcount]);
							found = true;
						}
						
					} else if (phonComparisons[i].phons[p][j+1] == null && checkIfUnvoiPlo(phonComparisons[i].phons[p+1][0])) {
						
						if (checkIfVowel(phonComparisons[i].phons[p+1][1]) && phonComparisons[i].phons[p+1][1] == null) {
						
							changeColour(i,p,colors[colorcount]);
							found = true;
						}
						
					}
				
				}
				
			}
			
		}
		
	}
	
	//TODO: Do REVERSE
	if (found) {colorcount++;};
	
}

var checkIfUnvoiFric = function(sym) {
	var res;
	
		switch(sym) {
		
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
}

var checkIfUnvoiPlo = function(sym) {
	var res;
	
		switch(sym) {
		
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
}

var atEndScan = function(sym1, sym2, sym3, sym4, sym5, sym6, sym7, sym8, sym9, sym10) {
	
	currentFuncList += "atEndScan('" + sym1 + "', '" + sym2 + "', '" + sym3 + "', '" + sym4 + "', '" + sym5 + "', '" + sym6 + "', '" + sym7 + "', '" + sym8 + "', '" + sym9 + "', '" + sym10 + "');";
	
	var numberFound = 0;
	
	var found = false;
	
	for (var i = 0; i < phonComparisons.length; i++) {
		
		for (var p = 0; p < phonComparisons[i].phons.length; p++) {
			
			for (var j = 0; j < phonComparisons[i].phons[p].length; j++) {
				
				if (phonComparisons[i].phons[p][j] == sym1 || phonComparisons[i].phons[p][j] == sym2 || phonComparisons[i].phons[p][j] == sym3 || phonComparisons[i].phons[p][j] == sym4 || phonComparisons[i].phons[p][j] == sym5 || phonComparisons[i].phons[p][j] == sym6 || phonComparisons[i].phons[p][j] == sym7 || phonComparisons[i].phons[p][j] == sym8 || phonComparisons[i].phons[p][j] == sym9 || phonComparisons[i].phons[p][j] == sym10) {
								
					if (phonComparisons[i].phons[p][j+1] == null && phonComparisons[i].phons[p+1] == "") {
						changeColour(i,phonComparisons[i].letters.length-2,colors[colorcount]);
						
						found = true;
						numberFound++;
						
					}
				
				}
				
			}
			
		}
		
	}
	
	//TODO: Do REVERSE
	if (found) {colorcount++;};
	
}

var darkLScan = function(sym) {
	
	currentFuncList += "darkLScan('" + sym + "');";
	
	var numberFound = 0;
	
	var found = false;
	
	for (var i = 0; i < phonComparisons.length; i++) {
		
		for (var p = 0; p < phonComparisons[i].phons.length; p++) {
				
			for (var j = 0; j < phonComparisons[i].phons[p].length; j++) {
				
				if (phonComparisons[i].phons[p][j] == sym) {
					
					if (phonComparisons[i].phons[p][j+1] != null && !checkIfVowel(phonComparisons[i].phons[p][j+1])) { // Checks if next is a consonant
						changeColour(i,p,colors[colorcount]);
						
						found = true;
						numberFound++;
					} else if (phonComparisons[i].phons[p+1] == "" && !checkIfVowel(phonComparisons[i].phons[p][j+1])) { // Checks if it's at the end, not perfect on 'y' endings
						changeColour(i,p,colors[colorcount]);
						
						found = true;
						numberFound++;
						
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

var resetScans = function() {
	
	colorcount = 0;
	
	for (var i = 0; i < phonComparisons.length; i++) {
		
		for (var j = 0; j < phonComparisons[i].letters.length; j++) {
		
			$( "#cluster" + i + "-" + j ).css({"background-color": "transparent"});
		
		}
		
	}
	
	for (var i = currentFuncList.length-2; i > -1; i--) {
		
		var c = currentFuncList.charAt(i);
		
		if (c == ";") {
			currentFuncList = currentFuncList.slice(0, i+1);

			break;
		} else if (i == 0) {
			currentFuncList = "";
		}
		
	}
	
	
	
	var p = currentFuncList;
	eval(currentFuncList);
	currentFuncList = p;

}

var highlight = function(i, j) {
	
	$( "#cluster" + i + "-" + j ).css({"background-color": colors[colorcount]});
	
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
		})(j);
		
		
	}
	
	
	audioArr[0].play();
	
}



var popDown = function (i, j) {
	
		
		
		
	
}

var getAudio = function (sym) {
	
	var res;
	
		switch(sym) {
		
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
	
	return res;
	
}

var menuListener = function () {
	
	$( "#formType" ).change(function() {
	switchSoundList($('#formType').find(":selected").text());
	
});
	
}

var switchSoundList = function (txt) {
	
	var arr;
	
	if (txt == "Consonant") {
		arr = consOptions;
	} else if (txt == "Vowel") {
		arr = vowelOptions;
	} else {
		arr = otherOptions;
	}
	
	$('#formSound').find('option').remove().end();
	
	for (var i = 0; i < arr.length; i++) {
		
		if (arr[i] == "All Vowels" || arr[i] == "Fricatives" || arr[i] == "Plosives" || arr[i] == "Affricates" || arr[i] == "Nasals" || arr[i] == "Approximants" || arr[i] == "Short Vowels" || arr[i] == "Long Vowels" || arr[i] == "Diphthongs") {
			$('#formSound').append('<option style="background-color: #005689; color:white;">' + arr[i] + '</option>');
		} else {
			$('#formSound').append('<option>' + arr[i] + '</option>');
		}
		
	}
	
}

var searchButtonPressed = function () {
	
	var sound = $('#formSound').find(":selected").text();
	var index = $('#formSound').prop('selectedIndex');
	var type = $('#formType').find(":selected").text();
	var pos = $('#formPosition').find(":selected").text();
	
	var exception = checkExceptions(sound);
	
	if (!exception) {
		
		var t ;
		
		if (type == "Consonant") {
			t = consonantMenu(sound, index);
		} else if (type == "Vowel") {
			t = vowelMenuSounds[index];
		}
		
		var sym1, sym2, sym3, sym4, sym5, sym6, sym7, sym8, sym9, sym10;
		if (t.constructor === Array) {
			sym1 = t[0];
			sym2 = t[1];
			sym3 = t[2];
			sym4 = t[3];
			sym5 = t[4];
			sym6 = t[5];
			sym7 = t[6];
			sym8 = t[7];
			sym9 = t[8];
			sym10 = t[9];
		} else {
			sym1 = t;
		}
	
		if (pos == "Any Position") {
			scanFor(sym1, sym2, sym3, sym4, sym5, sym6, sym7, sym8, sym9, sym10);
		} else if (pos == "At Start") {
			alert("Scanning at Start is not quite coded yet.");
		} else {
			atEndScan(sym1, sym2, sym3, sym4, sym5, sym6, sym7, sym8, sym9, sym10);
		}
	}
	
}

var checkExceptions = function(txt) {
	var res = false;
	
	switch (txt) {
		case "Light L":
		vowelAfterScan('L');
		res = true;
		break;
		
		case "Dark L":
		darkLScan('L');
		res = true;
		break;
		
		case "Dropped R's":
		nonRhoticScan('R');
		res = true;
		break;
		
		case "Voiced R's":
		vowelAfterScan('R', 'ER0', 'ER1', 'ER2');
		res = true;
		break;
		
		case "All Vowels":
		scanVowelsAtStart();
		res = true;
		break;
		
		case "ST Rule":
		stRuleScan();
		res = true;
		break;
		
		case "Open Jaw":
		scanFor("AA","AE","OH","AW");
		res = true;
		break;
		
		case "Linking Words":
		scanVowelsAtStart();
		res = true;
		break;
		
		default:
		res = false;
		
	}
	
	return res;
}

var consonantMenu = function(txt, index) {
	
	var res;
	
	switch (index) {
		
		case 0:
		res = ["F", "V","TH", "DH", "S", "Z", "HH", "SH", "ZH"];
		break;
		
		case 1:
		res = "TH";
		break;
		
		case 2:
		res = "DH";
		break; 
		
		case 3:
		res = ["TH", "DH"];
		break;
		
		case 4:
		res = "S";
		break;
		
		case 5:
		res = "Z";
		break;
		
		case 6:
		res = "F";
		break;
		
		case 7:
		res = "V";
		break;
		
		case 8:
		res = "HH";
		break;
		
		case 9:
		res = "SH";
		break;
		
		case 10:
		res = "ZH";
		break;
		
		case 11:
		res = ["P", "B","T", "D", "K", "G"];
		break;
		
		case 12:
		res = "P";
		break;
		
		case 13:
		res = "B";
		break;
		
		case 14:
		res = "T";
		break;
		
		case 15:
		res = "D";
		break;
		
		case 16:
		res = "K";
		break;
		
		case 17:
		res = "G";
		break;
		
		case 19:
		res = "CH";
		break;
		
		case 20:
		res = "JH";
		break;
		
		case 22:
		res = "M";
		break;
		
		case 23:
		res = "N";
		break;
		
		case 24:
		res = "NG";
		break;
		
		case 32:
		res = "Y";
		break;
		
		case 33:
		res = "W";
		break;
		
		case 29:
		res = "R";
		break;
		
		case 28:
		res = "L";
		break;
		
		default:
		res = undefined;
		alert(txt + " can't be searched for yet! Try something else.");
	}
	
	return res;
	
}

var clearBox = function () {
	
	$('#input-txt').val('');
	
}

var showBox = function () {
	$('html, body').animate({ scrollTop: 0 }, 'fast');
	$('#input-txt').css('display', 'block');
	$('#showBoxBtn').css('display', 'none');
	$('#convertBtn').css('display', 'inline-block').animate({opacity: 1}, 1000);
	$('#clearBtn').css('display', 'inline-block').animate({opacity: 1}, 1000);
}

// One-time functions

var getPopWords = function() {
			
	var popWordClient = new XMLHttpRequest();
	popWordClient.open('GET', poploc);
	
	popWordClient.onreadystatechange = function() {
		popWordstxt = popWordClient.responseText;
		
	}
	
	popWordClient.addEventListener("load", getArticles);

	popWordClient.send();
	
}

var getArrayFromMenu = function (menuArr) {
	
	var output = "";
	
	for (var i = 0; i < menuArr.length; i++) {
		
		output += '"' + vowelMenu("",i) + '",';
		
	}
	
	
	
}

// Onload

window.onload = function() {
	
		var client = new XMLHttpRequest();
		client.open('GET', cmellonloc);
		
		client.onreadystatechange = function() {
			
			cmellontxt = client.responseText;
		}
		
		client.addEventListener("load", getPopWords);

		
		client.send();

		menuListener();
		
		switchSoundList("Consonant");
		sortDimensions();

		
//		setTimeout(newArticle, 100);
		
}