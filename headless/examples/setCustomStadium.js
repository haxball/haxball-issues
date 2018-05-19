
// Here I'm using javascript multiline template string literals (enclosed by ``)
// Otherwise one would need to remove the newline characters and escape the quotes as \"
var stadiumFileText = `{
	"name" : "Simple",
	
	"width" : 450,
	"height" : 250,
	
	"spawnDistance" : 200,
	
	"bg" : { "type" : "grass", "width" : 400, "height" : 200, "kickOffRadius" : 75, "cornerRadius" : 0 },

	"vertexes" : [
		{ "x" : -400, "y" : 200,  "trait" : "ballArea" },
		{ "x" : -400, "y" : 75,   "trait" : "ballArea" },
		{ "x" : -400, "y" : -75,  "trait" : "ballArea" },
		{ "x" : -400, "y" : -200, "trait" : "ballArea" },
		
		{ "x" : 400, "y" : 200,  "trait" : "ballArea" },
		{ "x" : 400, "y" : 75,   "trait" : "ballArea" },
		{ "x" : 400, "y" : -75,  "trait" : "ballArea" },
		{ "x" : 400, "y" : -200, "trait" : "ballArea" },
		
		{ "x" : 0, "y" :  250, "trait" : "kickOffBarrier" },
		{ "x" : 0, "y" :   75, "trait" : "kickOffBarrier" },
		{ "x" : 0, "y" :  -75, "trait" : "kickOffBarrier" },
		{ "x" : 0, "y" : -250, "trait" : "kickOffBarrier" }
	],
	
	"segments" : [
		{ "v0" : 0, "v1" : 1, "trait" : "ballArea" },
		{ "v0" : 2, "v1" : 3, "trait" : "ballArea" },
		{ "v0" : 4, "v1" : 5, "trait" : "ballArea" },
		{ "v0" : 6, "v1" : 7, "trait" : "ballArea" },
		{ "v0" : 1, "v1" : 2, "trait" : "goalNet" },
		{ "v0" : 6, "v1" : 5, "trait" : "goalNet" },
		{ "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier" },
		{ "v0" : 9, "v1" : 10, "trait" : "kickOffBarrier", "curve" : 180, "cGroup" : ["blueKO"] },
		{ "v0" : 9, "v1" : 10, "trait" : "kickOffBarrier", "curve" : -180, "cGroup" : ["redKO"] },
		{ "v0" : 10, "v1" : 11, "trait" : "kickOffBarrier" }
	],
	
	"goals" : [
		{ "p0" : [-400, 75], "p1" : [-400,-75], "team" : "red" },
		{ "p0" : [400, 75], "p1" : [400,-75], "team" : "blue" }
	],
	
	"discs" : [
		{ "pos" : [-400,  75], "trait" : "goalPost" },
		{ "pos" : [-400, -75], "trait" : "goalPost" },
		{ "pos" : [ 400,  75], "trait" : "goalPost" },
		{ "pos" : [ 400, -75], "trait" : "goalPost" }
	],
	
	"planes" : [
		{ "normal" : [0, 1], "dist" : -200, "trait" : "ballArea" },
		{ "normal" : [0,-1], "dist" : -200, "trait" : "ballArea" },
		{ "normal" : [ 0, 1], "dist" : -250, "bCoef" : 0.1 },
		{ "normal" : [ 0,-1], "dist" : -250, "bCoef" : 0.1 },
		{ "normal" : [ 1, 0], "dist" : -450, "bCoef" : 0.1 },
		{ "normal" : [-1, 0], "dist" : -450, "bCoef" : 0.1 }
	],
	
	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball"] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball"], "curve" : 110 }, 
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO", "blueKO"], "cMask" : ["red", "blue"] }
	}
}`

var room = HBInit({});
room.setCustomStadium(stadiumFileText);
