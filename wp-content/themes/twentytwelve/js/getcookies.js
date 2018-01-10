getFuncCookies = function() {
	
	var func = localStorage.getItem("func");
	localStorage.clear();
	
	if (func == null) {
		func = Cookies.get('func');
	}
	
	if (func != undefined) {
		
		eval(func);
		
	}
	
		updateCookies();
	
	
	
}