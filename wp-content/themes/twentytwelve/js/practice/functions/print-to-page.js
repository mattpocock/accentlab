import { convert } from "../checks/convert";

export function printToPage(prevLength, allWordData, paragraphs, prevParas,
    phonComparisons, allClusterData) {

    for (var i = prevLength; i < allWordData.length; i++) {

        if (i == paragraphs[prevParas]+1) {
            
            $( "#output-txt" ).append("<br><br><a></a>");
            prevParas++;
            i--;
            
        } else {
        
            $( "#output-txt" ).append(toInsert);
            
            var insideDiv = "";
            
            for (var j = 0; j < allClusterData[i].length; j++) { // Loops over all of the clusters to add
            
                var phonsToAdd = "";
                var found = false;
                
                for (var k = 0; k < phonComparisons[i].phons[j].length; k++) {
                    phonsToAdd+= convert(phonComparisons[i].phons[j][k])
                };
                
                if (phonsToAdd == "" && !found) {
                    phonsToAdd = "not found";
                } else if (phonsToAdd == ""){
                    phonsToAdd = "silent";
                }
                
                var buttonFunc = "scanFor('"+ phonComparisons[i].phons[j][0] + "')";
                var buttonFunc2 = 'popDown('+i+','+j+');';
                var buttonFunc3 = "resetScans();";
                
                //<div class="popup" onfocusout="popDown('+prev+','+j+')" onmouseleave="popDown('+prev+','+j+')" id="popup'+prev+'-'+j+'">'+ allClusterData[i][j].chars + ' - /' + phonsToAdd + '/<br><button class="sound-btn" onclick='+ buttonFunc +'><i class="fa fa-search" aria-hidden="true"></i></button><button class="sound-btn" onclick='+ buttonFunc3 +'><i class="fa fa-undo" aria-hidden="true"></i></button></div>
                
                insideDiv += '<div class="cluster" onClick="popUp('+i+','+j+');" id="cluster'+i+'-'+j+'">'
                        + allClusterData[i][j].chars + '</div>';
                
            }
            
            var toInsert = $('<span id="word' + i + '">' + insideDiv + '</span>')
                
            $( "#output-txt" ).append(toInsert);
        
        }
    }
}