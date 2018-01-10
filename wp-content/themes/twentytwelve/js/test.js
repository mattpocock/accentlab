var tCounter = 0;
var qCounter = 0;
var progressCounter = 0;
var qArray = ["Which is the correct pronunciation?","Now, which sounds the most like your accent?"];
var userdatafound;
var questionArr = [];
var testlength;


var userDataToSend = [];


var answerArray = [];

var cookieArray = [];

// Test Stuff

var beginTest = function() {
	
	for (var i = 0; i < idArr.length; i++) {
		
		//var userbehav = userOptions[idArr[i]-1]; TODO: CHECKS IF USER HAS TESTED, BUT USEROPTIONS DOES NOTHING RIGHT NOW
		
		//if (userbehav == undefined) {
			var obj = new testQuestion(soundsArr[i], wordsArr[i], optionsArr[i], idArr[i]);
			questionArr.push(obj);
		//}
		
	} 
	
	testlength = (questionArr.length) * 2;
	
	console.log(questionArr);
	
	if (questionArr.length < 2) {
		
		noTestNeededHandler();
		
	} else {
	
	changeButtons(questionArr[tCounter], tCounter);
	$('#complete-btn').attr('onclick', 'completeBtn();').html('Finish Early');
	$('#question-desc').html('');
	nextQuestion();
	
	}
}

var beginOverrideTest = function() {
	
	for (var i = 0; i < idArr.length; i++) {
		
		var obj = new testQuestion(soundsArr[i], wordsArr[i], optionsArr[i], idArr[i]);
		questionArr.push(obj);
		
	}
	
	testlength = (questionArr.length) * 2;
	
	changeButtons(questionArr[tCounter], tCounter);
	$('#complete-btn').attr('onclick', 'completeBtn();').html('Finish Early');
	$('#question-desc').html('');
	nextQuestion();
	
}

function testQuestion (sound, word, optionArr, id) {
	this.sound = sound;
	this.word = word;
	this.optionArr = optionArr;
	this.id = id;
}

var nextQuestion = function() {
	
	$('#question-txt').css('opacity', 0).css('left', '100px');
	$('#question-txt').html(qArray[qCounter]);
	$('#question-txt').animate({opacity: 1}, 1000);
	
	updatePercentage();
	
}

var reportAnswer = function(word, result, loc, id) {
	
	if(qCounter == 0) {
		qCounter++;
		progressCounter++;
		nextQuestion();
	} else if (qCounter == 1) {
		logUserData(word, result);
		qCounter = 0;
		tCounter++;
		progressCounter++;
		
		if (tCounter == questionArr.length) { // Tells the quiz to finish
			testFinished();
			updatePercentage();
		} else {
			nextQuestion();
			changeButtons(questionArr[tCounter], tCounter);
		}
		
	}
}

function noTestNeededHandler() {
	$('#question-desc').html("Looks like we know everything we need to about your accent. Unless you'd like to try taking the test again?");
	$('#complete-btn').html('Test Again').attr('onclick', 'beginOverrideTest();');
	$('#question-txt').html("You're all done!");
}

function testFinished() {
	
	$('#option-container').html('');
	
	$('#question-txt').css('opacity', 0).css('left', '100px');
	$('#question-txt').html("You're all done! Time to get your results!");
	$('#question-txt').animate({opacity: 1}, 1000);
	
	$('#complete-btn').html('Get Results');
	
}

function sendObject (id, result) {
	this.id = id;
	this.result = result;
}

function updatePercentage() {
	var percent = Math.ceil((progressCounter/testlength)*100);
	progressBar(percent);
}

function logUserData(id, resultid) {
	
	if (optionsArr[tCounter][resultid] != "na") { // Does not upload if you're fine at it.
	
		saveToDash(descArr[tCounter][resultid], titlesArr[tCounter], id, "SYM", "pronun", optionsArr[tCounter][resultid]); // TODO: FIX THE 'SYM' PORTION OF THIS LATER
	
	}
	
}

var playBtn = function(filename) {
	var sound = new Audio('/raw/badrecs/' + filename + '.mp3');
	sound.play();
	console.log("playing!");
}

var changeButtons = function(obj, count) {
	$('#option-container').html('');
	
	console.log(obj);
	
	obj.optionArr = shuffle(obj.optionArr);
	
	for (var i = 0; i < obj.optionArr.length; i++) {
		
		var buttonfunc = "reportAnswer('"+obj.sound+"',"+i+", "+i+", "+obj.id+");";
		
		$('<div>', {class: 'test-option', id: 'testOption'+i, width: (720/obj.optionArr.length)-24})
		.css('opacity', 0)
		//.hover(function(){$("#choose-btn"+i).css('border', '2px solid rgb(28,175,246)')}, function(){$('#choose-btn'+i).css('border-color','darkgray')})
		.appendTo('#option-container');
		$('<div>', {class: "play-button", id: "play-button" + i}).appendTo('#testOption' + i);
		$('<button>', {class: "play-button-btn", id: "play-button-btn" + i, onclick: "playBtn('"+obj.word+"-"+obj.optionArr[i]+"')"}).html('<i class="fa fa-volume-up" aria-hidden="true"></i>').appendTo("#play-button" + i);
		$('<div>', {class: "test-word", id: "test-word" + i}).appendTo('#testOption' + i);
		$('<h3>', {class: "test-word-txt"}).html(obj.word).appendTo('#test-word'+i);
		$('<button>', {class: "choose-btn", id: 'choose-btn'+ i, onclick: buttonfunc}).html("Choose").appendTo('#testOption'+i);
		
	}
	
	$('.test-option').animate({opacity: 1}, 1000);
}

var progressBar = function (percentage) {
	$('#progress-bar-inner').css('width', percentage+'%');
}

function shuffle(array) {
	  var tmp, current, top = array.length;
	  if(top) while(--top) {
		current = Math.floor(Math.random() * (top + 1));
		tmp = array[current];
		array[current] = array[top];
		array[top] = tmp;
	  }
	  return array;
	}
	
function completeBtn() {
	window.location.href = "/learn";
}

window.onload = function() {
	console.log(descArr);
}