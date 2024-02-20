const display = document.querySelector('.display-timer');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function displayTime() {
    display.textContent = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${milliseconds < 10 ? '0' + milliseconds : milliseconds}`;
}

function startTimer() {
    timer = setInterval(() => {
        milliseconds += 10;
        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
        }
        displayTime();
    }, 10);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    displayTime();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
