import { _GLOBAL } from "./globals";

export const articleData = {

    // Article Worker Stuff
	allArticles: "",
	articleArray: [],
    articleCounter: 0,
    articlesLoc : '/accentlab/raw/articles.txt',
    articleClient : new XMLHttpRequest()

}


export function getArticles() {
    
    articleData.articleClient.open('GET', articleData.articlesLoc);
    
    articleData.articleClient.onreadystatechange = function() {
        articleData.allArticles = articleData.articleClient.responseText;
        articlesToArray();
    }
    
    articleData.articleClient.send();
    
}
        
export function articlesToArray() {
        
    var counter = 0;
    articleData.articleArray[counter] = "";
        
    for (var i = 0; i < articleData.allArticles.length; i++) {
        
        var c = articleData.allArticles.charAt(i);
        
        if (c == "/" && articleData.allArticles.charAt(i+2) == "/") { // Checks for /// as indicator of new article
            i+=4;
            counter++;
            articleData.articleArray[counter] = "";
        } else {
            articleData.articleArray[counter] += c;
        }
        
    }
    
    articleData.articleArray = shuffle(articleData.articleArray);
}

export function shuffle(array) {
        var tmp, current, top = array.length;
        if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
        }

        return array;

}