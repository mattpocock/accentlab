// Declaring Variables

var phonHighlighted = 0;
var phonsTotal = 0;
var phonInFocus = "";
var wordSelected = "";
var wholeWord = "";
var soundOn = true;


var closeMIScreen = function() {
	$('#moreinfoscreen').css('display', 'none');
}

var openMIScreen = function() {
	$('#moreinfoscreen').css('display', 'inherit');
}

var highlightNewPhon = function() {
	
	if (phonHighlighted < 0) {
		phonHighlighted = phonsTotal-1;
	} else if (phonHighlighted > phonsTotal-1) {
		phonHighlighted = 0;
	}
	
	for (var i = 0; i < phonsTotal; i++) {
		$('#mi-phons-' + i).attr('class', 'phons-normal');
	}
	
	$('#mi-phons-' + phonHighlighted).addClass("phons-large");
	
	phonInFocus = allWordData[wordSelected][phonHighlighted+1];
	
	if (soundOn) {
	
		var audio = new Audio(getAudio(phonInFocus));
		audio.play();
		
	}
}

var toggleSound = function() {
	
	if (soundOn) {
		
		$('#mi-sound-btn').html('<i class="fa fa-volume-off" aria-hidden="true"></i>');
		soundOn = false;
		
	} else {
		
		$('#mi-sound-btn').html('<i class="fa fa-volume-up" aria-hidden="true"></i>');
		soundOn = true;
	}
	
}


var popUp = function(i, j) {
	
	openMIScreen();
	
	phonHighlighted = 0;
	phonsTotal = allWordData[i].length-1;
	wordSelected = i;
	
	$('#mi-phons-txt').html('');
	
	for (var k = 1; k < allWordData[i].length; k++) { // 1 because of AllWordData Glitch
		
		var n = $('<span>')
			.addClass("phons-normal")
			.attr('id', 'mi-phons-' + (k-1))
			.html(convert(allWordData[i][k]));
		
		$('#mi-phons-txt').append(n);
		
		
	}
	
	highlightNewPhon(phonHighlighted);
	
	
	var chars = "";
	
	for (var k = 0; k < allClusterData[i].length; k++) {
		chars+=allClusterData[i][k].chars;
	}
	
	wholeWord = chars;
	
	$('#mi-word-txt').html(chars);
	
	popped = true;
	
}

// Switch Statements

var findYouTube = function(sym) {
	
	var res;
	
		switch(sym) {
		
    case "AA":
        res = "https://www.youtube.com/watch?v=1F47WdIjn5U";
        break;
    case "AE":
        res = "https://www.youtube.com/watch?v=NavmTDkd8Z8";
        break;
	case "AH0":
        res = "&#601";
        break;
	case "AH1":
        res = "&#652";
        break;
	case "AH2":
        res = "&#652";
        break;
	case "SH":
		res = "&#643";
		break;
	case "AO":
        res = "&#596&#720";
        break;	
		
	case "AW":
        res = "a&#650";
        break;
	case "AY":
        res = "a&#618";
        break;
	case "B":
        res = "b";
        break;
	case "CH":
        res = "t&#643";
        break;
	case "D":
        res = "d";
        break;		
		
	case "DH":
        res = "&#240";
        break;
	case "EH":
        res = "e";
        break;
	case "ER0":
        res = "&#601r";
        break;
	case "ER1":
        res = "&#604r";
        break;
	case "ER2":
        res = "&#604r";
        break;
	case "EY":
        res = "e&#618";
        break;
	case "F":
        res = "f";
        break;
		
	case "G":
        res = "g";
        break;
	case "HH":
        res = "h";
        break;
	case "IH":
        res = "&#618";
        break;
	case "IY0":
        res = "https://www.youtube.com/watch?v=EuZa9-QbhG8";
        break;
	case "IY1":
        res = "https://www.youtube.com/watch?v=EuZa9-QbhG8";
        break;
	case "IY2":
        res = "https://www.youtube.com/watch?v=EuZa9-QbhG8";
        break;
	case "JH":
        res = "&#676";
        break;
		
	case "K":
        res = "k";
        break;
	case "L":
        res = "l";
        break;
	case "M":
        res = "m";
        break;
	case "N":
        res = "n";
        break;
	case "NG":
        res = "&#331";
        break;
		
	case "OW":
        res = "&#601&#650";
        break;
	case "OY":
        res = "&#596&#618";
        break;
	case "P":
        res = "p";
        break;
	case "R":
        res = "r";
        break;
	case "S":
        res = "s";
        break;
		
	case "T":
        res = "t";
        break;
	case "TH":
        res = "&#952";
        break;
	case "UH":
        res = "https://www.youtube.com/watch?v=5lOF-zRg8x0";
        break;
	case "UW":
        res = "https://www.youtube.com/watch?v=qPB0Ajjs7nE";
        break;
	case "V":
        res = "v";
        break;
		
	case "W":
        res = "w";
        break;
	case "Y":
        res = "j";
        break;
	case "Z":
        res = "z";
        break;
	case "ZH":
        res = "&#658";
        break;
    default:
        res = sym;
} 
	return res;
}