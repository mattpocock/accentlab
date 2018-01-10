export var convert = function(sym) {
	
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