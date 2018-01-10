// Takes input from _GLOBAL.inputArr, returns cluster objects
export function createClusters(inputArr) {

    var res = [];

    for (var i = 0; i < inputArr.length; i++) { 
        var toInput = [],
            prevType = "start",
            chars = "",
            type = "";
        
        for (var j = 0; j < inputArr[i].length; j++) {
            
            var l = inputArr[i][j];
            
            if (l == "a" || l == "e" || l == "i" || l == "o"
                    || l == "u" || l == "A" || l == "E" ||
                    l == "I" || l == "O" || l == "U" ||
                    l == "y" || l == "Y") {
                
                if (prevType == "start") {
                    type = "vowel";
                    chars = l;
                    prevType = "vowel";
                } else if (prevType == "vowel") {
                    chars += l;
                } else {
                    toInput.push({
                        type: type,
                        chars: chars
                    });
                    type = "vowel";
                    chars = l;
                    prevType = "vowel";
                }
                
            } else if (l == "/}" || l == "/{" || l == "/]" || l == "/[" || l == '"' || l == "\'" || l == "\n" || l == "\r\n" || l == "�" || l == "\�" || l == "\�" || l == "\�" || l == "-" || l == " " || l == ";" || l == "," || l == "." || l == ":" || l == "!" || l == "?" || l == "\'" || l == "(" || l == ")"){
                if (prevType == "start") {
                    type = "punc";
                    chars = l;
                    prevType = "punc";
                } else if (prevType == "punc") {
                    chars += l;
                } else {
                    toInput.push({
                        type: type,
                        chars: chars
                    });
                    type = "punc";
                    chars = l;
                    prevType = "punc";
                }
            } else {
                if (prevType == "start") {
                    type = "cons";
                    chars = l;
                    prevType = "cons";
                } else if (prevType == "cons") {
                    chars += l;
                } else {
                    toInput.push({
                        type: type,
                        chars: chars
                    });
                    type = "cons";
                    chars = l;
                    prevType = "cons";
                }
            }
            
            if (j == inputArr[i].length - 1) {
                toInput.push({
                    type: type,
                    chars: chars
                });
            }
            
            
            
        }
        
        res.push(toInput);
        
    }

    return res;

}