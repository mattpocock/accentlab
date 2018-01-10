var allArticles;
var articleArray = [];
var articleCounter = 0;

var getArticles = function() {
	
	var articleclient = new XMLHttpRequest();
		articleclient.open('GET', 'articles.txt');
		
		articleclient.onreadystatechange = function() {
		allArticles = articleclient.responseText;
		articlesToArray();
		}
		
		articleclient.addEventListener("load", newArticle);
		
		articleclient.send();
}
		
var articlesToArray = function() {
		
	var counter = 0;
	articleArray[counter] = "";
		
	for (var i = 0; i < allArticles.length; i++) {
		
		var c = allArticles.charAt(i);
		
		if (c == "/" && allArticles.charAt(i+2) == "/") { // Checks for /// as indicator of new article
			i+=4;
			counter++;
			articleArray[counter] = "";
		} else {
			articleArray[counter] += c;
		}
		
	}
}

var newArticle = function() {
	
	$('html, body').animate({ scrollTop: 0 }, 'fast');
	onPush(articleArray[articleCounter], false);
	articleCounter++;
	if (articleCounter == articleArray.length) {
		articleCounter = 0;
	}
	
}