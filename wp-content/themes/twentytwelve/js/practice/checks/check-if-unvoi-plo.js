export var checkIfUnvoiPlo = function(sym) {
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