export var _CONFIG = {
	// Location of raw files
	cmellonLoc : '/accentlab/raw/cmellon.txt',
	// Colors of Highlights
	highlightColors : ["#ffea74", "#d374ff", "#ff749b","#a0ff74", "#9074ff", "#74c7ff", "#ffa778"],

}

export var _GLOBAL = {
	// Holds dictionary as string
	cmellonString : null,
	popWordsString : null,

	allWordData: [],
	fullWordTranslations: [],
	phonComparisons: [],
	allClusterData: [],

	colorCount: 0,
	
	paragraphs: [],
	// popped = false
	paragraphTicker: 5,
	paragraphInterval: 5,
	
	//
	prevLength: 0,
	readMoreText: "",

	// List of current functions applied to the text
	currentFuncList: ""
}

export var MENU_CONFIG = {
	consOptions: ["Fricatives", "/&#952/ - Think", "/&#240/ - This",
			"All TH Sounds","/s/ - See", "/z/ - Is", "/f/ - Few", 
			"/v/ - View", "/h/ - How", "/&#643/ - Show", "/&#658/ - Measure",
			
			
			"Plosives",
			
			"/p/ - Pie", "/b/ - Buy", "/t/ - Tie", "/d/ - Dye", 
			"/k/ - Kite", "/g/ - Guy", "Affricates", "/t&#643/ - Chin", 
			"/&#676/ - Joke", "Nasals","/m/ - May", "/n/ - No", "/&#331/ - Sing", 
			"Approximants","Light L", "Dark L", "All L's", "All R Sounds",
			"Dropped R's", "Voiced R's", "/j/ - You", "/w/ - Why"],
	vowelOptions: ["Fricatives", "/&#952/ - Think", "/&#240/ - This","All TH Sounds",
			"/s/ - See", "/z/ - Is", "/f/ - Few", "/v/ - View", "/h/ - How",
			"/&#643/ - Show", "/&#658/ - Measure","Plosives","/p/ - Pie", "/b/ - Buy",
			"/t/ - Tie", "/d/ - Dye", "/k/ - Kite", "/g/ - Guy", "Affricates",
			"/t&#643/ - Chin", "/&#676/ - Joke", "Nasals","/m/ - May", "/n/ - No",
			"/&#331/ - Sing", "Approximants","Light L", "Dark L", "All L's",
			"All R Sounds", "Dropped R's", "Voiced R's", "/j/ - You", "/w/ - Why"],
	vowelMenuSounds: [["EH","IH","UH","AH0","ER0","AH1","AH2","AE","OH"],"EH","IH","UH",
			["AH1","AH2"],["AH0","ER0"],"AE","OH",["IY1","IY2","ER1","ER2","AA","UW","AO"],
			"AA",["IY1","IY2"],"UW",["ER1","ER2"],"AO",["AW","OW","AY","EY","OY"],"EY","AY",
			"AW","OW","OY"],
	otherOptions: ["ST Rule","Linking Words","Open Jaw"]
}