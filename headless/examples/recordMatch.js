// Record match and download file

const room = HBInit({});


function handleGameStart() {
    room.startRecording(); // start recording match
}

function handleGameStop() {
    const recordData = room.stopRecording(); // stop recording match
    downloadFile(recordData, "record.hbr2"); // downloadFile
}

function downloadFile(data, fileName) {
    const blob = new Blob([data]); // create blob element with hbr2 data
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(function() {
        window.URL.revokeObjectURL(a);
    }, 1000);
}

room.onGameStart = handleGameStart
room.onGameStop = handleGameStop