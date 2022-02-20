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