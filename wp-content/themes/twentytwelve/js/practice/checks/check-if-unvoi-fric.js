export var checkIfUnvoiFric = function(sym) {
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