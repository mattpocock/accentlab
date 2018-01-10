function trackpage() {
	
	var slug = window.location.pathname;
	
	slug = slug.slice(1, slug.length-1);
	
	console.log(slug);
	
	jQuery.ajax({
		type: "POST",
		url: 'pagetracker.php',
		dataType: 'json',
		data: 	{userid: userId,
				slug:slug},

		success: function (obj, textstatus) {
					  if( !('error' in obj) ) {
						  
					  }
					  else {
						  console.log(obj.error);
					  }
				}
	});
	
}

$(window).ready(trackpage);