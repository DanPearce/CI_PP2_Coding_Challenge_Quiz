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
  });
}

//Functions
/**
 * Loops through audioOff and audioOn depending on which setting the user has decided.
 */
function audioControl(){
  audioPlaying ? audioOff() : audioOn();
}

/**
 * Sets audioPlaying to true, so that audio can be heard and changes the sound icon.
 */
function audioOn(){
  audioPlaying = true;
  for (let i = 0; i < audioOffButton.length && audioOnButton.length; i++){
    audioOffButton[i].classList.add('hide');
    audioOnButton[i].classList.remove('hide');
  }
}

/**
 * Sets audioPlaying to false, so audio cannot be heard and changes the sound icon.
 */
function audioOff(){
  audioPlaying = false;
  for (let i = 0; i < audioOffButton.length && audioOnButton.length; i++){
    audioOffButton[i].classList.remove('hide');
    audioOnButton[i].classList.add('hide');
  }
  
}

/**
 * Checks whether audioPlaying is true, if true plays the correctAudio, else does not.
 */
function playCorrectAudio(){
  if (audioPlaying){
    correctAudio.play();
  } else {
    correctAudio.pause();
  }
}

/**
 * Checks whether audioPlaying is true, if true plays the incorrectAudio, else does not.
 */
function playIncorrectAudio(){
  if (audioPlaying){
    incorrectAudio.play();
  } else {
    incorrectAudio.pause();
  }
}

/**
 * Checks whether audioPlaying is true, if true plays the clickAudio, else does not.
 */
function playClickAudio(){
  if (audioPlaying){
    clickAudio.play();
  } else {
    clickAudio.pause();
  }
}