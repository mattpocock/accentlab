
var reportWord = function (word) {

	jQuery.ajax({
		type: "POST",
		url: 'report.php',
		dataType: 'json',
		data: {input: word},

		success: function (obj, textstatus) {
					  if( !('error' in obj) ) {
						  
					  }
					  else {
						  console.log(obj.error);
					  }
				}
	});
	
	alert("'" + word + "' successfully added to reported words.");

}