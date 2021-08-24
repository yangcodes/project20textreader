const textDisplay = document.querySelector("#text");
const speedBtn = document.querySelector("#speed");
const readBtn = document.querySelector(".read");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
let currentChar;

//reading functionality
readBtn.addEventListener("click", function () {
  readText(textDisplay.value);
});

//pausing functionality
pauseBtn.addEventListener("click", pauseText);

//stopping functionality
stopBtn.addEventListener("click", stopText);

//speed input functionality
speedBtn.addEventListener("input", function () {
  stopText();
  readText(utterance.text.substring(currentChar));
});

const utterance = new SpeechSynthesisUtterance();
utterance.addEventListener("end", function () {
  textDisplay.disabled = false;
});
utterance.addEventListener("boundary", function (e) {
  currentChar = e.charIndex;
});
//read text function
function readText(testText) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }
  if (speechSynthesis.speaking) return;

  utterance.text = testText;
  utterance.rate = speedBtn.value || 1;
  textDisplay.disabled = true;
  speechSynthesis.speak(utterance);
}

//pauseText function
function pauseText() {
  if (speechSynthesis.speaking) speechSynthesis.pause();
}

//stopText functioon
function stopText() {
  //speechSynthesis.resume();
  speechSynthesis.cancel();
}
