//Document Get Variables
const correctAudio = new Audio('assets/audio/correct.mp3');
const incorrectAudio = new Audio('assets/audio/incorrect.wav');
const clickAudio = new Audio('assets/audio/click.wav');
const audioOnButton = document.getElementsByClassName('audio-on');
const audioOffButton = document.getElementsByClassName('audio-off');

//Global Variables
let audioControls = document.getElementsByClassName('audio-controls');
for (let i = 0; i < audioControls.length; i++){
  audioControls[i].addEventListener('click', () =>{
    audioControl();
  })
}

//Functions
function audioControl(){
  audioPlaying ? audioOff() : audioOn();
}

function audioOn(){
  audioPlaying = true;
  for (let i = 0; i < audioOffButton.length && audioOnButton.length; i++){
    audioOffButton[i].classList.add('hide');
    audioOnButton[i].classList.remove('hide');
  }
}

function audioOff(){
  audioPlaying = false;
  for (let i = 0; i < audioOffButton.length && audioOnButton.length; i++){
    audioOffButton[i].classList.remove('hide');
    audioOnButton[i].classList.add('hide');
  }
  
}

function playCorrectAudio(){
  if (audioPlaying){
    correctAudio.play();
  } else {
    correctAudio.pause();
  }
}

function playIncorrectAudio(){
  if (audioPlaying){
    incorrectAudio.play();
  } else {
    incorrectAudio.pause();
  }
}

function playClickAudio(){
  if (audioPlaying){
    clickAudio.play();
  } else {
    clickAudio.pause();
  }
}