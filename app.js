const textDisplay = document.querySelector("#text");
const speedBtn = document.querySelector("#speed");
const readBtn = document.querySelector(".read");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");

//reading functionality
readBtn.addEventListener("click", function () {
  readText(textDisplay.value);
});
//pausing functionality
pauseBtn.addEventListener("click", pauseText);

const utterance = new SpeechSynthesisUtterance();
utterance.addEventListener("end", function () {
  textDisplay.disabled = false;
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
