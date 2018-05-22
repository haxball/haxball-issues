// This room will notify every time 10 in game seconds pass and also when the time limit has been reached.

var room = HBInit({});

var lastTimeNotified = 0;
var timeLimitReached = false;

function handleGameTick() {
	var scores = room.getScores()

	if ( scores.time > lastTimeNotified + 10 ) {
		lastTimeNotified = scores.time;
		room.sendChat("ten game seconds have passed")
	}

	if (!timeLimitReached && scores.time >= scores.timeLimit ) {
		timeLimitReached = true;
		room.sendChat("Time limit has been reached")
	}
}

function handleGameStart() {
	lastTimeNotified = 0;
	timeLimitReached = false;
}

room.onGameTick = handleGameTick;
room.onGameStart = handleGameStart;
