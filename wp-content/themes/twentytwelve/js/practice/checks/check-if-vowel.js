export function checkIfVowel(sym) {
	
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