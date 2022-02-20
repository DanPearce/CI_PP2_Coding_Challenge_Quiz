//Document Get Area
const easyButton = document.getElementById('easy-btn');
const moderateButton = document.getElementById('moderate-btn');
const hardButton = document.getElementById('hard-btn');
const chooseDifficulty = document.getElementById('difficulty');
const getQuestion = document.getElementById('question');

//Event Listeners
easyButton.addEventListener('click', startGameEasy);
moderateButton.addEventListener('click', startGameModerate);
hardButton.addEventListener('click', startGameHard);

//Global Variables
let shuffleQuestions;
let currentQuestion;

//Functions
function startGameEasy(){
  console.log("Game Started!");
  easyButton.classList.add('hide');
  moderateButton.classList.add('hide');
  hardButton.classList.add('hide');
  chooseDifficulty.classList.add('hide');
  shuffleQuestions = questionsEasy.sort(() => Math.random() - .5);
  currentQuestion = 0;
}

function startGameModerate(){
  console.log("Game Started!");
}

function startGameHard(){
  console.log("Game Started!");
}

function nextQuestion(){

}

function showQuestion(){

}

function resetQuestion(){

}

function answerClicked(){

}

function setAnswerClickedClass(){

}

function removeAnswerClickedClass(){

}

function incrementScore(){

}

function incrementIncorrectScore(){

}