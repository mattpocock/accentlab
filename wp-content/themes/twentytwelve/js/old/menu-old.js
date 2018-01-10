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
		
		// Changes colour of certain sections in sound list
		if (arr[i] == "All Vowels" || arr[i] == "Fricatives" || arr[i] == "Plosives" || arr[i] == "Affricates" || arr[i] == "Nasals" || arr[i] == "Approximants" || arr[i] == "Short Vowels" || arr[i] == "Long Vowels" || arr[i] == "Diphthongs") {
			$('#formSound').append('<option style="background-color: #005689; color:white;">' + arr[i] + '</option>');
		} else {
			$('#formSound').append('<option>' + arr[i] + '</option>');
		}
		
	}
	
}