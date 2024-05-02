let count = 0;
let intervalId;

let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resumeButton = document.getElementById("resume");
let stopButton = document.getElementById("stop");
let countSpan = document.getElementById("count");

startButton.addEventListener("click", function () {
  intervalId = setInterval(function () {
    count++;
    countSpan.textContent = count;
  }, 1000);
  startButton.disabled = true;
  pauseButton.disabled = false;
});

pauseButton.addEventListener("click", function () {
  clearInterval(intervalId);
  pauseButton.disabled = true;
  resumeButton.disabled = false;
});

resumeButton.addEventListener("click", function () {
  intervalId = setInterval(function () {
    count++;
    countSpan.textContent = count;
  }, 1000);
  pauseButton.disabled = false;
  resumeButton.disabled = true;
});

stopButton.addEventListener("click", function () {
  clearInterval(intervalId);
  count = 0;
  countSpan.textContent = count;
  startButton.disabled = false;
  pauseButton.disabled = true;
  resumeButton.disabled = true;
});
