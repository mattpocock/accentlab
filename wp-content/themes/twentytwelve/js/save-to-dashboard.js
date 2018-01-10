function saveToDash(desc, title, linktxt, sym, accentcode, userbehav) {
		
	jQuery.ajax({
		type: "POST",
		url: '/js/userdatasender.php',
		data: {
			userid: userId,
			desc: desc,
			title: title,
			linktxt: linktxt,
			sym: sym,
			accentcode: accentcode,
			userbehav: userbehav
		},

		success: function (data) {
					
					if( data == "ok") {
						console.log("Hooray!");
					}
					else {
						
					}
			}
	});
		
}