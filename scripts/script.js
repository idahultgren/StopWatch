let timer = 0;
let isTimerRunning = false;
let intervalId; 
let lastTimerValue = 0;

updateTimerDisplay();

function resetTimer() {
  timer = 0;
  lastTimerValue = 0;
}

function startTimer() {
  if (!isTimerRunning) {
    isTimerRunning = true;

    intervalId = setInterval(() => {
      timer++;
      updateTimerDisplay();
    },1000);
  }
}

function stopTimer() {
  if (isTimerRunning) {
    isTimerRunning = false;
    clearInterval(intervalId);
    lastTimerValue = timer;
  }
}

function updateTimerDisplay() {
  const hours = Math.floor(timer / 3600).toString().padStart(2, '0');
  const minutes = Math.floor(timer/60).toString().padStart(2, '0');
  const seconds = (timer % 60).toString().padStart(2, '0');
  document.querySelector('.js-stopwatch-time')
    .innerHTML = `${hours}:${minutes}:${seconds}`;
}

document.querySelector('.js-start-timer-button')
  .addEventListener('click', () => {
    startTimer();
  });

document.querySelector('.js-stop-timer-button')
  .addEventListener('click', () => {
    stopTimer();
    updateTimerDisplay();
  });

document.querySelector('.js-reset-timer-button')
  .addEventListener('click', () => {
    resetTimer();
    updateTimerDisplay();
  });