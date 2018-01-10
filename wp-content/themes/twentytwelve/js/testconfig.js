var idArr = [6,9,10,11,26,35,36,37,40,43,50,53,55];
//var optionsArr = [["na","v"],["na","drop","lightL"],["na","z","dhplo","v"],["na","drop"],["na","drop","n"],["na","rvoi","rtap"],["na","rtap","rweak","rretro"],["na","sh","th","sibilant"],["na", "s", "shretro"],["na","thplo","f","s"],["na", "b", "w"],["na","zhretro","z"],["na","v"],["na","zh"]];
//var wordsArr = ["Be","Call","Though","Kid","Going","Care","Wreck","Soy","Show","Thick","Voice","Measure","Way","Amazing"];
//var soundsArr = ["b","darkl","dh","dlat","nglat","rdrop","rvoi","s","sh","th","v","zh","w","z"];


function getCookies() {
	
	var cookieArray = [];
	
	for (var i = 0; i < idArr.length; i++) {
		var c = Cookies.get(soundsArr[i]);
		cookieArray.push(c);
	}
	return cookieArray;
	
}