import { convert } from "../checks/convert";

export var mellonToPhonetics = function(str) {
	
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
    
    //returns the full word translated to phonetics, and also the part ready to be pushed to fullWordTranslations[];
	return ["/" + res + "/", tempArr]; 
	
}