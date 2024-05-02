let count = 0;
let intervalId;

const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resumeButton = document.getElementById("resume");
const stopButton = document.getElementById("stop");
const countSpan = document.getElementById("count");

function incrementCount() {
  count++;
  countSpan.textContent = count;
}

function startCounting() {
  intervalId = setInterval(incrementCount, 1000);
  startButton.disabled = true;
  pauseButton.disabled = false;
}

function pauseCounting() {
  clearInterval(intervalId);
  pauseButton.disabled = true;
  resumeButton.disabled = false;
}

function resumeCounting() {
  intervalId = setInterval(incrementCount, 1000);
  pauseButton.disabled = false;
  resumeButton.disabled = true;
}

function stopCounting() {
  clearInterval(intervalId);
  count = 0;
  countSpan.textContent = count;
  startButton.disabled = false;
  pauseButton.disabled = true;
  resumeButton.disabled = true;
}

startButton.addEventListener("click", startCounting);
pauseButton.addEventListener("click", pauseCounting);
resumeButton.addEventListener("click", resumeCounting);
stopButton.addEventListener("click", stopCounting);
