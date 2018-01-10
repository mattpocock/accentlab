export var saved_to_dash = {
	sections : []
}

export var DASH_OPTIONS = {
	sections: [
		{
			title: "Vowels",
			desc: "A, E, I, O, and U.",
			subsections: []
		},
		{
			title: "Consonants",
			desc: "The hard sounds, like 'S' and 'T' and 'F', which separate the vowels.",
			subsections: [
				{
					title: "Fricatives",
					desc: "Soft, dragged out sounds, like 'F' and 'SH'.",
					symArr: ["TH", "DH", "S", "Z", "F", "V", "HH", "SH", "ZH"],
					options: [
						{
							title: "The Unvoiced TH",
							symArr: ["TH"],
							phoneme: "/&#952/"
						},
						{
							title: "The Voiced TH",
							symArr: ["DH"],
							phoneme: "/&#240/"
						},
						{
							title: "All TH Sounds",
							symArr: ["TH", "DH"],
							phoneme: "/&#240/ & /&#952/"
						},
						{
							title: "The S Sound",
							symArr: ["S"],
						},
						{
							title: "The Z Sound",
							symArr: ["Z"]
						},
						{
							title: "The F Sound",
							symArr: ["F"]
						},
						{
							title: "The V Sound",
							symArr: ["V"]
						},
						{
							title: "The H Sound",
							symArr: ["HH"]
						},
						{
							title: "The /&#643/ Sound",
							symArr: ["SH"]
						},
						{
							title: "The /&#658/ Sound",
							symArr: ["ZH"]
						}
					]
				},
				{
					title: "Plosives",
					desc: "Hard, strong sounds like 'P' and 'B'",
					symArr: ["T", "D", "P", "B", "K", "G"],
					options: [
						{
							title: "The T Sound",
							symArr: ["T"]
						},
						{
							title: "The D Sound",
							symArr: ["D"]
						},
						{
							title: "The P Sound",
							symArr: ["P"]
						},
						{
							title: "The B Sound",
							symArr: ["B"]
						},
						{
							title: "The K Sound",
							symArr: ["K"]
						},
						{
							title: "The G Sound",
							symArr: ["G"]
						}
					]
				},
				{
					title: "Affricates",
					desc: "Two sounds: the CH and the J.",
					symArr: ["CH", "J"],
					options: [
						{
							title: "The CH Sound",
							symArr: ["CH"]
						},
						{
							title: "The J Sound",
							symArr: ["J"]
						}
					]
				},
				{
					title: "Nasals",
					desc: "The only three sounds in English which come through the nose.",
					symArr: ["M", "N", "NG"],
					options: [
						{
							title: "The M Sound",
							symArr: ["M"]
						},
						{
							title: "The N Sound",
							symArr: ["N"]
						},
						{
							title: "The NG Sound",
							symArr: ["NG"]
						}
					]
				},
				{
					title: "Other",
					desc: "Sounds - like the R, L and Y - which don't fall neatly into another category.",
					options: [
						{
							title: "The Light L",
							symArr: ["L"],
							positionArr: ["beforeVowel"]
						},
						{
							title: "The Dark L",
							symArr: ["L"],
							positionArr: ["beforeNonVowel"]
						},
						{
							title: "All L Sounds",
							symArr: ["L"],
							positionArr: ["any"]
						},
						{
							title: "The Voiced R",
							symArr: ['R', 'ER0', 'ER1', 'ER2'],
							positionArr: ["beforeVowel"]
						},
						{
							title: "The Non-Rhotic R",
							symArr: ['R', 'ER0', 'ER1', 'ER2'],
							positionArr: ["beforeNonVowel"]
						},
						{
							title: "All R Sounds",
							symArr: ['R', 'ER0', 'ER1', 'ER2'],
							positionArr: ["any"]
						},
						{
							title: "The Y Sound",
							symArr: ["Y"]
						},
						{
							title: "The W Sound",
							symArr: ["W"]
						}
					]
				}
			]
		}
	]
}