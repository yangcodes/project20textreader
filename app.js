const textDisplay = document.querySelector("#text");
const speedBtn = document.querySelector("#speed");
const readBtn = document.querySelector(".read");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");

//reading functionality
readBtn.addEventListener("click", function () {
  readText(textDisplay.value);
});

const utterance = new SpeechSynthesisUtterance();

//read text function
function readText(testText) {
  utterance.text = testText;
  utterance.rate = speedBtn.value || 1;
  textDisplay.disabled = true;
  speechSynthesis.speak(utterance);
}
