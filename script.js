/* script.js */
let timer;
let elapsedSeconds = 0;
let isRunning = false;

function formatTime(seconds) {
    let hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
    let mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    let secs = (seconds % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
    document.getElementById("display").innerText = formatTime(elapsedSeconds);
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            elapsedSeconds++;
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    elapsedSeconds = 0;
    updateDisplay();
}
