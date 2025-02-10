let startingMinutes = 25;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('timer');
playPause = document.getElementById('playPause');
shortBreak = document.getElementById('shortBreak');
longBreak = document.getElementById('longBreak');
pomo = document.getElementById('ptb');
restart = document.getElementById('restart');
var alarm1 = new Audio('alarm1.mp3');
const settings = document.getElementById('settings');
const settingsPopup = document.getElementById('settingsPopup');
const closeSettings = document.getElementById('closeSettings');


let timeStatus; // This will store the interval ID



// Settings button functionality
settings.addEventListener('click', () => {
    settingsPopup.style.display = 'flex';
});

// Restart button functionality
restart.addEventListener('click', () => {
    playPause.innerHTML = 'start';
    clearInterval(timeStatus); // Clear the interval
    timeStatus = null; // Reset the interval ID
    time = startingMinutes * 60; // Reset the time
    updateDisplay(); // Update the display
});

// Short break button functionality
shortBreak.addEventListener('click', () => {
    playPause.innerHTML = 'start';
    clearInterval(timeStatus);
    timeStatus = null;
    startingMinutes = 5;
    time = startingMinutes * 60;
    updateDisplay();
});

// Long break button functionality
longBreak.addEventListener('click', () => {
    playPause.innerHTML = 'start';
    clearInterval(timeStatus);
    timeStatus = null;
    startingMinutes = 10;
    time = startingMinutes * 60;
    updateDisplay();
});

// Pomodoro button functionality dd
pomo.addEventListener('click', () => {
    playPause.innerHTML = 'start';
    clearInterval(timeStatus);
    timeStatus = null;
    startingMinutes = 25;
    time = startingMinutes * 60;
    updateDisplay();
});
closeSettings.addEventListener('click', () => {
    settingsPopup.style.display = 'none';
});

// Play/Pause button functionality
playPause.addEventListener('click', () => {
    if (playPause.innerHTML === 'start' || playPause.innerHTML === 'play') {
        // Start the timer if it's not already running
        if (!timeStatus) {
            timeStatus = setInterval(updateTimer, 1000); // Store the interval ID
        }
        playPause.innerHTML = 'pause'; // Change button text to "pause"
    } else if (playPause.innerHTML === 'pause') {
        // Pause the timer if it's running
        if (timeStatus) {
            clearInterval(timeStatus); // Clear the interval using the stored ID
            timeStatus = null; // Reset the interval ID
        }
        playPause.innerHTML = 'play'; // Change button text to "play"
    }
});

// Update the timer display
function updateDisplay() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
}

// Update the timer logic
function updateTimer() {
    if (time < 0) {
        alarm1.play() // Play the alarm sound
        clearInterval(timeStatus); // Stop the timer when time reaches 0
        timeStatus = null;
        playPause.innerHTML = 'start'; // Reset the button text
        return; // Exit the function
    }


    updateDisplay(); // Update the display
    time--; // Decrement the time
}