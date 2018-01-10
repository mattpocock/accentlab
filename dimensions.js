




var barsPhone = function(width, height) {
	
	var h = height;
	var w = width;
	
	// Lower Bars
	
	$('#lowermenu')
		.css('width', 300)
		.css('height', h)
		.css('bottom', h/2);
		
	$('.lowermenubtn')
		.css('height', h)
		.css('font-size', h-30);
		
	$('#searchmenu')
		.css('height', (h*2)-10)
		.css('width', 340)
		.css('bottom', h/2)
		.css('border-radius',10);
	
	$('#searchmenu select')
		.css('height', h/2)
		.css('margin-bottom', h/4)
		.css('margin-top', h/4)
	//	.css('display', 'block')
	//	.css('float', 'left');
	
	$('#searchmenu button')
		.css('font-size', (h/2)-10)
		.css('height', h-10);
		
	//Main Divs
	
	$('.full-width')
		.css('width', w);
		
	$('.readmorebtn')
		.css('width', w)
		.css('margin-left', 0)
		.css('margin-right', 0)
		.css('margin-bottom', 150)
		.css('float', 'left');
		
	// More Info Div
	
	$('.doublesize')
		.css('width', 300);
		
	//Text
	
	$('#output-txt')
		.css('font-size', h/2)
		.css('line-height', h*(2/3) + 'px');
	
	$('#title-txt')
		.css('font-size', 40);
		
	$('#input-txt')
		.css('width', w);
	
}





var sortDimensions = function() {
	
	var w = $(window).width();
	
	if (w <= 480) {
		
		barsPhone(w, 60);
		
	} else if (w <= 960) {
		
		barsPhone(w, 60);
		
	}
	
}