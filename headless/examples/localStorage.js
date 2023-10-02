// Use localStorage for save data

const room = HBInit({});

let usersData = (getStorage("users") != null) ? getStorage("users") : {};

function getStorage(key) {
    const item = localStorage.getItem(key); // get an item in localStorage browser
    if(item == null)
        return null;

    return JSON.parse(item);
}

function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value)); // set an item in localStorage browser
}

room.onPlayerJoin = function(player) {
    let playerData = usersData[player.auth];

    if(playerData != null)
        playerData.countJoinRoom++;
    else
        usersData[player.auth] = playerData = { id: player.id, name: player.name, auth: player.auth, countJoinRoom: 1};

    setStorage("users", usersData); // Save users data
    console.log(`${playerData.name} has joined the room ${playerData.countJoinRoom} times.`)
}