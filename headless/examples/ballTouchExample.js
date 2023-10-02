// This room script will notify every time a player touches the ball

const room = HBInit({});

const playersThatTouchedTheBall = new Set();

function pointDistance(p1, p2) {
	const d1 = p1.x - p2.x;
	const d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

function handleGameTick() {
	const players = room.getPlayerList();
	const ballPosition = room.getBallPosition();
	const ballRadius = 10;
	const playerRadius = 15;
	const triggerDistance = ballRadius + playerRadius + 0.01;

	players.forEach((player) => { // Iterate over all the players
		const player = players[i];
		if (player.position == null) return; // Skip players that don't have a position

		const distanceToBall = pointDistance(player.position, ballPosition);
		const hadTouchedTheBall = playersThatTouchedTheBall.has(player.id);

		// This check is here so that the event is only notified the first game tick in which the player is touching the ball.
		if (!hadTouchedTheBall) { 
			if (distanceToBall < triggerDistance) {
				room.sendChat(player.name + " touched the ball");
				playersThatTouchedTheBall.add(player.id);
			}
		} else {
			// If a player that had touched the ball moves away from the ball remove him from the set to allow the event to be notified again.
			if (distanceToBall > triggerDistance + 4) {
				playersThatTouchedTheBall.delete(player.id);
			}
		}
	})
}

function handleGameStart() {
	playersThatTouchedTheBall.clear(); // Reset the set of players that reached the goal
}

room.onGameTick = handleGameTick;
room.onGameStart = handleGameStart;
