import { checkIfVowel } from "../checks/check-if-vowel";

export function mapClusters(allWordData, allClusterData, prevLength) {
    var res = [];

    for (var i = prevLength; i < allWordData.length; i++) { // Repeats Each Word
        
        var phons = [],
            letters = [],
            lastAnalysed = "start",
            phonsCount = 1, // 1 Because of glitch in AllWordData
            tempArr = [];
        
        for (var j = 0; j < allClusterData[i].length; j++) { // Repeats Each Cluster
        
            var letterType = allClusterData[i][j].type;
            
            
            if (letterType == "punc") {
                
                tempArr.push("");
                lastAnalysed = "punc";
                phons.push(tempArr);
                tempArr = [];
                
                
            } else if (letterType == "cons") {
                
                tempArr.push(cleanUndefined(allWordData[i][phonsCount]));
                phonsCount++;
                while (!checkIfVowel(allWordData[i][phonsCount]) 
                        && phonsCount < allWordData[i].length) {
                    tempArr.push(cleanUndefined(allWordData[i][phonsCount]));
                    phonsCount++;
                    
                }
                
                phons.push(tempArr);
                tempArr = [];
                
                
                lastAnalysed = "cons";
                
            } else if (letterType == "vowel") {
                
                tempArr.push(cleanUndefined(allWordData[i][phonsCount]));
                phonsCount++;
                while (checkIfVowel(allWordData[i][phonsCount]) && phonsCount < allWordData[i].length) {
                    tempArr.push(cleanUndefined(allWordData[i][phonsCount]));
                    phonsCount++;
                    
                }
                
                phons.push(tempArr);
                tempArr = [];
                
            }
            
            letters.push(allClusterData[i][j]);
            
        }
        
        res.push({
            phons: phons,
            letters: letters
        });
        
    }

    return res;

}

var cleanUndefined = function (input) {
	if (input == null) {
		return "";
	} else {
		return input;
	}
}