var getFunction = function (sym) {
	
	var res;
	
	switch (sym) {
		
		case "b":
		res = "scanFor('B');"
		break;
		
		case "darkL":
		res = "darkLScan('L');"
		break;
		
		case "dh":
		res = "scanFor('DH');"
		break;
		
		case "dlat":
		res = "atEndScan('D');"
		break;
		
		case "nglat":
		res = "atEndScan('NG')"
		break;
		
		case "rdrop":
		res = "nonRhoticScan('R');"
		break;
		
		case "rvoi":
		res = "vowelAfterScan('R','ER0','ER1','ER2);"
		break;
		
		case "s":
		res = "scanFor('S');"
		break;
		
		case "sh":
		res = "scanFor('SH');"
		break;
		
		case "th":
		res = "scanFor('TH');"
		break;
		
		case "v":
		res = "scanFor('V');"
		break;
		
		case "zh":
		res = "scanFor('ZH');"
		break;
		
		case "w":
		res = "scanFor('W');"
		break;
		
		case "z":
		res = "scanFor('Z');"
		break;
		
	}
	
	return res;
	
}