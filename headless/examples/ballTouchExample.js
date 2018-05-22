// This room script will notify every time a player touches the ball

var room = HBInit({});

var playersThatTouchedTheBall = new Set();

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

function handleGameTick() {
	var players = room.getPlayerList();
	var ballPosition = room.getBallPosition();
	var ballRadius = 10;
	var playerRadius = 15;
	var triggerDistance = ballRadius + playerRadius + 0.01;

	for (var i = 0; i < players.length; i++) { // Iterate over all the players
		var player = players[i];
		if ( player.position == null ) continue; // Skip players that don't have a position

		var distanceToBall = pointDistance(player.position, ballPosition);
		var hadTouchedTheBall = playersThatTouchedTheBall.has(player.id);

		// This check is here so that the event is only notified the first game tick in which the player is touching the ball.
		if ( !hadTouchedTheBall ) { 
			if ( distanceToBall < triggerDistance ) {
				room.sendChat(player.name + " touched the ball");
				playersThatTouchedTheBall.add(player.id);
			}
		}else{
			// If a player that had touched the ball moves away from the ball remove him from the set to allow the event to be notified again.
			if ( distanceToBall > triggerDistance + 4 ) {
				playersThatTouchedTheBall.delete(player.id);
			}
		}
	}
}

function handleGameStart() {
	playersThatTouchedTheBall.clear(); // Reset the set of players that reached the goal
}

room.onGameTick = handleGameTick;
room.onGameStart = handleGameStart;
