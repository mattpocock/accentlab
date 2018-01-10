var userdata = "";
var usersArr = [];

var loadPresets = function(fullname) {
	
	userdata = "";
	usersArr = [];
	
	var presets = new XMLHttpRequest();
	presets.open('GET', 'userdata/users.txt');
	
	function listener () { // Where the magic happens
		
		userdata = presets.responseText;
		
		function user (name, id) {
			this.name = name;
			this.id = id;
		}
		
		var n = "";
		var id = "";
		
		// Loads users into Array
		
		for (var i = 0; i < userdata.length; i++) {
			
			if (userdata.charAt(i) == "\n" || userdata.charAt(i) == "\r" || userdata.charAt(i) == "\r\n") {
				
				id = userdata.slice(i+2, i+12);
				
				usersArr.push(new user(n, id));
				
				id, n = "";
				
				i = i + 13;
			} else {
				n+=userdata.charAt(i);
			}
			
		}
		
		// Checks if user is in the database
		
		var found = false;
		
		for (var i = 0; i < usersArr.length; i++) {
			if (fullname.toUpperCase() == usersArr[i].name) {
				
				presetsFound(usersArr[i].id); // Fires if user is found
				found = true;
			}
		}
		
		if (!found) {
			
		}
		
		
		
	}
	
	presets.addEventListener("load", listener);
	
	presets.send();
	
}

function presetsFound (id) {
	
	var client = new XMLHttpRequest();
	
	function listener() {
		console.log("Found!");
	}
	
	client.open('GET', 'userdata/idfiles/' + id + '.txt');
	client.addEventListener("load", listener);
	client.send();
	
}