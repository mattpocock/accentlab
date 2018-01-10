export var getAudio = function (sym) {
	
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
	
	return '/accentlab/raw/' + res;
	
}