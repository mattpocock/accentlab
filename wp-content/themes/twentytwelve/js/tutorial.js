var tutorialArr = 	["Welcome to the AccentLab practice tool - home of the world's smartest practice text. Let's learn how to use it.<br><br>Start by clicking on any word in the practice text.",
					"Every word is made of one sound after another, and the tool shows you which sounds go where.<br><br>Click on the <i class='fa fa-arrow-left' aria-hidden='true'></i> and <i class='fa fa-arrow-right' aria-hidden='true'></i> buttons to cycle through the sounds that make up the word.",
					"If you want to focus on a certain sound, the tool can highlight words in the text that contain it.<br><br>Pick one of the sounds with the arrows and press the <i class='fa fa-search' aria-hidden='true'></i> button to search for it.",
					"The words in the text that contain the sound have been highlighted.<br></br>Now, try undoing your highlights by pressing the <i class='fa fa-undo' aria-hidden='true'></i> button.",
					"You can even access your dashboard from the practice tool.<br><br>Press the <i class='fa fa-list' aria-hidden='true'></i> button in the blue menu at the bottom of the screen.",
					"The dashboard saves results from the test, and sounds that you save from reading articles on the site. <br><br>Press any of the 'Practice' buttons to see what happens.",
					"You'll notice that the words you need to focus on are now highlighted in the text. Time to get practicing!"];

var actionsArr = 	["Click any word in the practice text",
					"Press the <i class='fa fa-arrow-left' aria-hidden='true'></i> and <i class='fa fa-arrow-right' aria-hidden='true'></i> buttons.",
					"Choose a sound, then press the <i class='fa fa-search' aria-hidden='true'></i> button.",
					"Press the <i class='fa fa-undo' aria-hidden='true'></i> button.",
					"Press the <i class='fa fa-list' aria-hidden='true'></i> button on the blue bar.",
					"Press a 'Practice' button."]
					
var tutorialCounter = 0;
var buttonsPressed = 0;

function tutorialGoButton() {
	
	$('#tutorial').css('opacity', 1);
	$('#tutorial-blackscreen').css('opacity', 1);
	$('#tutorial').fadeTo(500, 0,function(){$('#tutorial').hide()});
	$('#tutorial-blackscreen').fadeTo(500, 0, function(){$('#tutorial-blackscreen').hide()});
}

function tutorialReturnButton() {
	$('#tutorial').css('opacity', 0);
	$('#tutorial').show();
	$('#tutorial-blackscreen').css('opacity', 0);
	$('#tutorial-blackscreen').show();
	$('#tutorial').fadeTo(500, 1);
	$('#tutorial-blackscreen').fadeTo(500, 1);
}

function nextTutorial() {
	
	$('#tutorial-action-txt').html(actionsArr[tutorialCounter]).show();
	
	
	$('#tutorial').css('opacity', 0);
	$('#tutorial').show();
	$('#tutorial-blackscreen').css('opacity', 0);
	$('#tutorial-blackscreen').show();
	$('#tutorial').fadeTo(500, 1);
	$('#tutorial-blackscreen').fadeTo(500, 1);
	
	$('#tutorial-txt').html(tutorialArr[tutorialCounter]);
	
	
	if (tutorialCounter == 0) {
		
		$(".cluster").click(function(){
		  nextTutorial();
		  
		});
	} else if (tutorialCounter == 1) {
		
		function phonsBtn() {
			buttonsPressed++;
			if (buttonsPressed > 2) {
				nextTutorial();
			}
		}
		
		$(".cluster").off("click");
		$('#phons-left-btn').click(phonsBtn);
		$('#phons-right-btn').click(phonsBtn);
		
	} else if (tutorialCounter == 2) {
		
		$('#phons-left-btn').off('click');
		$('#phons-right-btn').off('click');
		
		$('#mi-search-btn').click(function(){
			nextTutorial();
		});
		
	} else if (tutorialCounter == 3) {
		
		$('#mi-search-btn').off('click');
		
		$('#mi-screen-reset').click(nextTutorial);
		$('#lowermenu-reset').click(nextTutorial);
		
	} else if (tutorialCounter == 4) {
		$('#mi-screen-reset').off('click');
		$('#lowermenu-reset').off('click');
		
		$('#lowermenu-dashboard').click(nextTutorial);
	} else if (tutorialCounter == 5) {
		$('#lowermenu-dashboard').off('click');
		$('.practicebtn').click(nextTutorial);
	} else if (tutorialCounter == 6) {
		$('.practicebtn').off('click');
		tutorialCounter = 0;
		buttonsPressed = 0;
		$('#tutorial-action-txt').hide();
	}
	
	tutorialCounter++;
	
}

