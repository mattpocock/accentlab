export function sendToMySql(saved_to_dash) {
    
    jQuery.ajax({
        type: "POST",
		url: './send-to-mysql.php',
        data: JSON.stringify(saved_to_dash),
        contentType: "application/json",

		success: function (data) {
					
					if( data == "ok") {
						console.log("Hooray!");
					}
					else {
						
					}
			}
	});

}