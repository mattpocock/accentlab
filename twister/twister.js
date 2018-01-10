var thousandWords = ["afternoon","anything","anyway","apartment","appear","are","arm","away","bathroom","beautiful","bell","between","bother","cell","clothes","control","conversation","cover","drive","during","ever","every","everything","expression","eyebrow","favorite","ahead","along","arrive","avoid","behind","believe","bring","drove","either","even","evening","father","five","hang","happen","happy","hung","morning","rang","rather","something","teeth","easy","isn't","key","kick","meet","middle","sleep","slip","anger","answer","anymore","asleep","bar","blink","block","blonde","blue","box","class","drag","fact","fast","flash","than","thank","that","that's","the","their","them","then","there","there's","they","they'd","they're","thick","thing","think","third","though","thought","three","threw","throat","through","about","above","across","actually","admit","afraid","after","again","agree","air","all","almost","alone","already","alright","also","although","always","another","anyone","apparently","as","attack","aunt","back","ball","barely","because","black","book","both","breath","breathe","brother","burn","burst","call","calm","carefully","carry","case","caught","cause","chair","chase","close","completely","confuse","corner","couple","course","crack","daughter","death","definitely","does","done","drop","ear","early","easily","eat","else","enough","entire","especially","eventually","everyone","exactly","excuse","fall","family","fault","figure","fill","finally","fine","finger","fire","further","gently","gone","hair","hall","has","hear","heard","his","horse","house","however","hurry","hurt","I","I'd","I'll","I'm","I've","immediately","is","kill","know","laugh","learn","led","left","leg","less","let","long","look","lose","love","marry","mine","money","month","mother","mouth","myself","near","nearly","noise","none","nose","nothing","obviously","one","only","other","pack","pair","pause","people","phone","picture","please","pop","practically","probably","promise","quickly","quietly","raise","really","return","rose","search","sense","seriously","shook","shop","shove","show","simply","sister","slightly","slowly","small","softly","someone","song","sorry","stair","still","stop","strong","stuff","suddenly","suppose","surprise","talk","tall","themselves","these","this","those","throw","tiny","tire","tone","took","top","totally","truth","under","use","usually","walk","wall","was","water","wave","we've","whatever","will","with","worry","worse","wrong","yeah","year","yell","yes","yet"];
var thousandTranslations = [];

var currentSym;

var detectTwister = function(arr) {
	
	var counts = {};
	var symsFound = [];
	
	for (var i = 0; i < arr.length; i++) {
		
		for (var j = 1; j < arr[i].length; j++) {
			
			var num = arr[i][j];
			counts[num] = counts[num] ? counts[num] + 1 : 1;
			if (counts[num] === 1) {
				symsFound.push(num);
			}
			
		}
	}
	
	var highest = 0;
	var highestSym = "";
	
	for (var i = 0; i < symsFound.length; i++) {
		
		var t = counts[symsFound[i]];
		
		if (t > highest) {
			highest = t;
			highestSym = symsFound[i];
		}
		
	}
	
	var s = convert(highestSym);
	currentSym = highestSym;
	
	$("#twister-txt").html("With " + highest + " occurences, this is a /" + s + "/ tongue twister. Want to submit it?");
	
	var btn = $('<button/>')
				.addClass('sound-btn')
				.click(function() {submitTwister(currentSym);})
				.css('margin-top', '10')
				.html('Submit');
	
	
	$("#twister-txt").append(btn);
	
	
	if (thousandTranslations.length < 2) {thousandTranslations = searchInDictionary(thousandWords);};
	
	var wordIdeas = [];
	
	for (var i = 0; i < thousandTranslations.length; i++) {
		
		for (var j = 1; j < thousandTranslations[i].length; j++) {
			
			if (thousandTranslations[i][j] == highestSym) {
				wordIdeas.push(thousandWords[i]);
			}
			
		}
		
	}
	
	var words = "";
	
	for (var i = 0; i < wordIdeas.length; i++) {
		
		words += wordIdeas[i] + ", ";
		
	}
	
	$("#suggest-txt").html("Other words that might fit include " + words);
	
	$(".sidebar").css('border-left', '1px solid #005689');
	
}

var submitTwister = function(sym) {
	
	var input = document.getElementById("input-txt").value;
	
	$.ajax({
            url:"/phonetics/alltwisters/twister.php", //the page containing php script
            type: "post", //request type,
            dataType: 'json',
           data: {input: input, file:sym + ".txt"}
         });
	
	var allTwisters;
		 
	var client = new XMLHttpRequest();
		client.open('GET', '/phonetics/alltwisters/' + sym + '.txt');
		
		client.onload = function() {
			
		allTwisters = client.responseText;
		
		rankTwisters(allTwisters, currentSym);
		
		}
		
		client.send();
		
		
	
}


var rankTwisters = function(str, sym) {
	
	var arr = [];
	var temptxt = "";
	
	for (var i = 0; i < str.length; i++) {// Get Rid of New Lines, put in arr
		if (str.charAt(i) == "/" && str.charAt(i+2) == "/" ) {
			arr.push(temptxt);
			temptxt = "";
			i+=2;
		} else {
			temptxt+= str.charAt(i);
		}
	}

	var literalArr = [];
	var transArr = [];
	
	for (var i = 0; i < arr.length; i++) {
		
		literalArr[i] = breakDownText(arr[i]);
		transArr[i] = searchInDictionary(literalArr[i]);
	}
	
	var countsArr = [];
	var highest = 0;
	
	for (var i = 0; i < transArr.length; i++) { // All Tongue Twisters
	
		var c = 0;
	
		for (var j = 0; j < transArr[i].length; j++) { // Words in each twister
			
			for (var k = 0; k < transArr[i][j].length; k++) { // Each symbol in each word
				
				console.log(transArr[i][j][k]);
				
				if (transArr[i][j][k] == sym) {
				
					c++;
					countsArr[i] = c;
					
					if (c > highest) {
						highest = i;
					}
					
				
				}
				
			}
			
		}
	
	}
	
	console.log(transArr);
	
	console.log("'" + arr[highest] + "' is the winner, with " + countsArr[highest] + " occurences!");
	
}







