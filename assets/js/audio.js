//Document Get Area
const correctAudio = new Audio('assets/audio/correct.mp3');
const incorrectAudio = new Audio('assets/audio/incorrect/wav');
const clickAudio = new Audio('assets/audio/click.wav');
const audioOffButton = document.getElementById('audio-off');
const audioOnButton = document.getElementById('audio-on');

//Event Listeners
audioOffButton.addEventListener('click', audioOff);
audioOnButton.addEventListener('click', audioOn);

//Functions
function audioControl(){
  audioPlaying ? audioOn : audioOff();
}

function audioOn(){
  audioPlaying = true;
  audioOnButton.classList.remove('hide');
  audioOffButton.classList.add('hide');
}

function audioOff(){
  audioPlaying = false;
  audioOnButton.classList.add('hide');
  audioOffButton.classList.remove('hide');
}

function playCorrectAudio(){

}

function playIncorrectAudio(){

}

function playClickAudio(){

}