var scanFor = function(sym, sym2, sym3, sym4, sym5, sym6, sym7, sym8, sym9, sym10) {
	
	if (sym !== "") {
	
		currentFuncList += "scanFor('" + sym + "', '" + sym2 + "', '" + sym3
				+ "', '" + sym4 + "', '" + sym5 + "', '" + sym6 + "', '" + sym7
				+ "', '" + sym8 + "', '" + sym9 + "', '" + sym10 + "');";
		
		var found = false;
		var numberFound = 0;
		
		for (var i = 0; i < phonComparisons.length; i++) {
			
			for (var p = 0; p < phonComparisons[i].phons.length; p++) {
				
				for (var q = 0; q < phonComparisons[i].phons[p].length; q++) {
				
					if (phonComparisons[i].phons[p][q] == sym || phonComparisons[i].phons[p][q] == sym2 || 
								phonComparisons[i].phons[p][q] == sym3 || phonComparisons[i].phons[p][q] == sym4 ||
								phonComparisons[i].phons[p][q] == sym5 || phonComparisons[i].phons[p][q] == sym6 ||
								phonComparisons[i].phons[p][q] == sym7 || phonComparisons[i].phons[p][q] == sym8 ||
								phonComparisons[i].phons[p][q] == sym9 || phonComparisons[i].phons[p][q] == sym10) {
						
						changeColour(i,p,_CONFIG.colors[colorcount]);
					
						found = true;
						numberFound++;
					
					}
				
				}
				
			}
			
		}

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
					
					changeColour(i,p,_CONFIG.colors[colorcount]);
				
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
						changeColour(i,p,_CONFIG.colors[colorcount]);
						
						found = true;
					} else if (phonComparisons[i].phons[p+1] == "" && !checkIfVowel(phonComparisons[i].phons[p][j+1])) { // Checks if it's at the end, not perfect on 'y' endings
						changeColour(i,p,_CONFIG.colors[colorcount]);
						
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
						changeColour(i,p,_CONFIG.colors[colorcount]);
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
						
							changeColour(i,p,_CONFIG.colors[colorcount]);
							found = true;
						}
						
					} else if (phonComparisons[i].phons[p][j+1] == null && checkIfUnvoiPlo(phonComparisons[i].phons[p+1][0])) {
						
						if (checkIfVowel(phonComparisons[i].phons[p+1][1]) && phonComparisons[i].phons[p+1][1] == null) {
						
							changeColour(i,p,_CONFIG.colors[colorcount]);
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

var atEndScan = function(sym1, sym2, sym3, sym4, sym5, sym6, sym7, sym8, sym9, sym10) {
	
	currentFuncList += "atEndScan('" + sym1 + "', '" + sym2 + "', '" + sym3 + "', '" + sym4 + "', '" + sym5 + "', '" + sym6 + "', '" + sym7 + "', '" + sym8 + "', '" + sym9 + "', '" + sym10 + "');";
	
	
	var numberFound = 0;
	
	var found = false;
	
	for (var i = 0; i < phonComparisons.length; i++) {
		
		for (var p = 0; p < phonComparisons[i].phons.length; p++) {
			
			for (var j = 0; j < phonComparisons[i].phons[p].length; j++) {
				
				if (phonComparisons[i].phons[p][j] == sym1 || phonComparisons[i].phons[p][j] == sym2 || phonComparisons[i].phons[p][j] == sym3 || phonComparisons[i].phons[p][j] == sym4 || phonComparisons[i].phons[p][j] == sym5 || phonComparisons[i].phons[p][j] == sym6 || phonComparisons[i].phons[p][j] == sym7 || phonComparisons[i].phons[p][j] == sym8 || phonComparisons[i].phons[p][j] == sym9 || phonComparisons[i].phons[p][j] == sym10) {
								
					if (phonComparisons[i].phons[p][j+1] == null && phonComparisons[i].phons[p+1] == "") {
						changeColour(i,phonComparisons[i].letters.length-2,_CONFIG.colors[colorcount]);
						
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
						changeColour(i,p,_CONFIG.colors[colorcount]);
						
						found = true;
						numberFound++;
					} else if (phonComparisons[i].phons[p+1] == "" && !checkIfVowel(phonComparisons[i].phons[p][j+1])) { // Checks if it's at the end, not perfect on 'y' endings
						changeColour(i,p,_CONFIG.colors[colorcount]);
						
						found = true;
						numberFound++;
						
					}
				
				}
				
			}
		
		}
		
	}
	
	if (found) {colorcount++;};
	
	
}

var scanVowels = function() {
	var found = false;
	var numberFound = 0;
	
	for (var i = 0; i < phonComparisons.length; i++) {
		
		for (var p = 0; p < phonComparisons[i].phons.length; p++) {
			
			for (var q = 0; q < phonComparisons[i].phons[p].length; q++) {
			
				if (checkIfVowel(phonComparisons[i].phons[p][q])) {
					
					changeColour(i,p,_CONFIG.colors[colorcount]);
				
				found = true;
				numberFound++;
				
				}
			
			}
			
		}
		
	}
	
	//TODO: Do REVERSE
	if (found) {colorcount++;};
	
}