import { mellonToPhonetics } from "./mellon-to-phonetics";

export var searchInDictionary = function(inputArr, cmellon) {
		
	var arrayToSend = [];

	for (var i = 0; i < inputArr.length; i++) {
		
		// CLEANS UP THE WORD READY FOR SEARCHING
		
		var cleanedResult = "";
		
		for (var s = 0; s < inputArr[i].length; s++) {
			
			var l = inputArr[i].charAt(s);
			
			if (l == "\"" || l == "\'" || l == "\n" || l == "\r\n" || l == "\r"
					|| l == "�" || l == "\�" || l == "\�" || l == "\�" ||
					l == "-" || l == " " || l == ";" || l == "," || l == "." ||
					l == ":" || l == "!" || l == "?" || l == "\'" || l == "(" || l == ")") {
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
				l = cmellon.charAt(startloc+counter);
				result += l;
				counter++;
			}
			
		} else {
				result = "NF";
			}
		
		
		// CONVERTS WHOLE STRING TO PHONETICS
		
		
		
		var t = mellonToPhonetics(result);
		
		arrayToSend.push(t[1]);		
	
	}
	
	return arrayToSend;

}