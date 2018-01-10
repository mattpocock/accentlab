export var breakDownText = function(input, _GLOBAL) {
	
	var word = "",
	    inputArr = [];
	
	// BREAKS DOWN THE INPUT INTO INDIVIDUAL WORDS, PUTS THEM INTO INPUTARR[]
	
	for (var i = 0; i < input.length; i++) {
		
		var l = input.charAt(i);
		
		if (l == " ") {
			
			if (word !== "") { // Checks if it's not empty before clipping and pushing to array
				word+= l;
				inputArr.push(word);
				word = "";
			}
			
		} else if (l == "\n") {
			
			if (word != "") {
			
				word+= l;
				inputArr.push(word);
				word = "";
				
			}
			
			_GLOBAL.paragraphs.push(inputArr.length+_GLOBAL.prevLength);
			inputArr.push("");
		} else { // Only thing left for it to be is a letter
			word += l;
		}
		
		// CLIP THE LENGTH EVERY 5 PARAGRAPHS AND ADD TO INPUTARR
		
		if (_GLOBAL.paragraphs.length > _GLOBAL.paragraphTicker-1) {
			
			_GLOBAL.readMoreText = input.slice(i, input.length);
			_GLOBAL.paragraphTicker+=_GLOBAL.paragraphInterval;
			break;
			
		}
		
	}
	
	// I ASSUME THIS SORTS OUT THE LAST WORD ISSUES
	
	if (word !== "") {
				inputArr.push(word);
				word = "";
			}
			
	// BY THIS TIME, INPUTARR CONTAINS ALL WORDS AND ALL PUNCTUATION
	
	return inputArr;
		
}