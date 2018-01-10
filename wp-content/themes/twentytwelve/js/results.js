var allReportsArr = [];
var accentArr = [];


function takeTestPopUp() {
	$('<button>', {onclick: 'window.location.href = "/test/"'}).html("Take The Test!").appendTo(target);
}

//userOptions, push to allReportsArr

function buildResults(target, fullwidth) {
	
	for (var i = 0; i < linedescarr.length; i++) {
		
		var userbehav = userbehavarr[i];
		var desc = linedescarr[i];
		var title = titlearr[i];
		var order; //TODO: Fix the Order
		var slug = linkarr[i]+'-'+userbehav;
		var sound = linkarr[i];
		var accentcode = accentcodearr[i];
		
		var accid = 0;
		var accfound = false;
		
		for (var p = 0; p < accentArr.length; p++) {
			if (accentcode == accentArr[p]) {
				accfound = true;
				accid = p;
			}
		}
		
		if (!accfound) {
			accentArr.push(accentcode);
			allReportsArr.push([]);
			accid = accentArr.length-1;
		}
		
		var rl = new reportLine(desc, title, i, getFunction(sound), order, slug, sound, accentcode); //TODO: Fix FUNCS
		allReportsArr[accid].push(rl);
		
		
	}
	
	console.log(accentArr);
	
	// allReportsArr = reorder(allReportsArr); TODO: Sort out order
	
	for (var i = 0; i < accentArr.length; i++) {
		
		if (accentArr[i]=="pronun") {
			
			buildSection("General Articulation",
			"This is your most crucial section - it's pronunciation of general sounds of English.",
			i,
			'<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>',
			target,
			fullwidth,
			false,
			'un')
		
		} else if (accentArr[i] == "rp") {
			buildSection("Received Pronunciation",
			"Ra, ra, ra. Engerlaaaaand.",
			i,
			'<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>',
			target,
			fullwidth,
			false,
			'gb')
		} else if (accentArr[i] == "genam") {
			buildSection("General American",
			"Oh my gaaad. Yahhh.",
			i,
			'<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>', // TODO: Fix this to show flags
			target,
			fullwidth,
			false,
			'us')
		}
		
		for (var p = 0; p < allReportsArr[i].length; p++) {
			putInBlock(allReportsArr[i][p], '#section-container'+i, fullwidth);
		}
		
	}
	
	if (accentArr.length == 0) {
		buildSection("Empty Dashboard",
			"You haven't added anything to the dashboard yet! Why not take the test, or check out some of our accent breakdowns, and come back?",
			i,
			'<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>', // TODO: Fix this to show flags
			target,
			fullwidth,
			false,
			'gb')
	}
	
	
	
}

function reportLine (desc, title, domid, func, order, slug, sound, accentcode) {
	this.title = title;
	this.desc = desc;
	this.domid = domid;
	this.func = func;
	this.order = order;
	this.slug = slug;
	this.sound = sound;
	this.accentcode = accentcode;
}

function reorder(arr) {
	
	arr.sort(function(a, b) {
    return parseFloat(a.order) - parseFloat(b.order);
	});
	
	return arr;
	
}

function putInBlock(rl, container, fullwidth) {
	
	var id = rl.domid;
	
	var w;
	
	if (fullwidth) {
		w = "700px";
	} else {
		w = "500px";
	}
	
	$('<div>', {class: 'report-line', id: 'line-div'+id}).css('width',w).appendTo(container);
	$('<button>', {class: 'report-button practicebtn', onclick: 'practiceBtn("'+rl.func+'");'}).html("Practice").appendTo('#line-div'+id);
	$('<button>', {class: 'report-button learnbtn', onclick: 'learnBtn("'+rl.sound+'");'}).html("Learn").appendTo('#line-div'+id);
	$('<div>', {class: 'report-title', id: 'report-title-div'+id}).appendTo("#line-div"+id);
	$('<div>', {class: 'report-desc', id: 'report-desc-div'+id}).appendTo("#line-div"+id);
	$('<h3>', {class: 'report-desc-txt', id: 'report-desc-txt'+id}).html(rl.desc + '.').appendTo('#report-desc-div'+id);
	$('<h2>', {class: 'report-title-txt', id: 'report-title-txt'+id}).html(rl.title).appendTo('#report-title-div'+id);
	
	
}

function learnBtn(sound) {
	
	window.open('/'+ sound);
	
}

function buildSection(title, desc, id, icon, container, fullwidth, toptarget, flagcode) {
	
	var w = "";
	
	if (fullwidth) {
		w = "720px";
	} else {
		w = "520px";
	}
	
	var c;
	
	if (toptarget) {
		c = "section-container top-target";
	} else {
		c = "section-container";
	}
	
	$('<div>', {class: c, id:"section-container"+id}).css('width', w).appendTo(container);
	$('<p>', {class: 'sound-sym', id: 'sound-sym'}).html("<img src='/raw/img/"+flagcode+".svg'></img>").appendTo('#section-container'+id);
	$('<h1>', {class: "section-title"}).html(title).appendTo('#section-container'+id);
	$('<p>', {class: "section-desc"}).html(desc).appendTo('#section-container'+id);
}

function closeLearnSection() {
	$('#learnsection').hide();
	$('#blackscreen').hide();
}

function showLearnSection() {
	$('#learnsection').show();
	$('#blackscreen').show();
}



var practiceBtn = function (func) {
	
	if ($(document).attr('title') == 'Free Practice | AccentLab') {
		eval(func);
		closeLearnSection();
	} else {
		localStorage.setItem('func', func);
		window.location.href = "/practice";
	}
	
	
	
}