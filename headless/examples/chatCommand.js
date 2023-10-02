const room = HBInit({});

const prefixCommand = "!"; // the prefix of the command

room.onPlayerChat = function(player, message) {
    if(message.startsWith(prefixCommand)) {
        const splitMsg = message.substring(1).split(" "); // split message everySpace;
        const commandName = splitMsg[0]; // getCommandName, we can get arguments with splitMsg[1], splitMsg[2]...

        if(commandName == null)
            return false;

        switch(commandName.toLowerCase()) {
            case "test":
                room.sendAnnouncement("You just used !test command.", player.id, 0x0000FF)
                break;

            case "getplayer": {
                const playerFetchUsername = splitMsg[1];
                if(playerFetchUsername == null)
                {
                    room.sendAnnouncement(`Please set an argument.`, player.id, 0xFF0000 );
                    return false;
                }

                const playerFetch = room.getPlayerList().filter((player) => player.name.toLowerCase() == playerFetchUsername.toLowerCase());

                if(playerFetch[0] != null)
                    room.sendAnnouncement(`${playerFetch[0].name} is in room!`, player.id, 0x00FF00);
                else
                    room.sendAnnouncement(`${playerFetchUsername} is not in room!`, player.id, 0x0000FF);
                break;
            }

            default:
                room.sendAnnouncement("Invalid command!", player.id, 0xFF0000)
                break;
        }

        return false;
    }
}