//Document Get Area
const easyButton = document.getElementById('easy-btn');
const moderateButton = document.getElementById('moderate-btn');
const hardButton = document.getElementById('hard-btn');
const chooseDifficulty = document.getElementById('difficulty');
const getQuestion = document.getElementById('question');
const questionContainer = document.getElementById('question-container');
const answerButtonsDiv = document.getElementById('answer-btns');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const username = document.getElementById('username');
const usernameArea = document.getElementById('username-area');
const welcomeUser = document.getElementById('welcome-user');
const startButton = document.getElementById('start-btn');

//Event Listeners
easyButton.addEventListener('click', startGameEasy);
moderateButton.addEventListener('click', startGameModerate);
hardButton.addEventListener('click', startGameHard);
nextButton.addEventListener('click', () =>{
  currentQuestion++;
  nextQuestion();
})
restartButton.addEventListener('click', newGame);

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
  questionContainer.classList.remove('hide');
  nextQuestion();
}

function startGameModerate(){
  console.log("Game Started!");
  easyButton.classList.add('hide');
  moderateButton.classList.add('hide');
  hardButton.classList.add('hide');
  chooseDifficulty.classList.add('hide');
  shuffleQuestions = questionsModerate.sort(() => Math.random() - .5);
  currentQuestion = 0;
  questionContainer.classList.remove('hide');
  nextQuestion();
}

function startGameHard(){
  console.log("Game Started!");
  easyButton.classList.add('hide');
  moderateButton.classList.add('hide');
  hardButton.classList.add('hide');
  chooseDifficulty.classList.add('hide');
  shuffleQuestions = questionsHard.sort(() => Math.random() - .5);
  currentQuestion = 0;
  questionContainer.classList.remove('hide');
  nextQuestion();
}

function nextQuestion(){
  resetQuestion();
  showQuestion(shuffleQuestions[currentQuestion]);
}

function showQuestion(question){
  getQuestion.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('answer-btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', answerClicked);
    answerButtonsDiv.appendChild(button);
  })
}

function resetQuestion(){
  removeAnswerClickedClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsDiv.firstChild){
    answerButtonsDiv.removeChild(answerButtonsDiv.firstChild);
  }
}

function answerClicked(e){
  const selectedAnswer = e.target;
  const correct = selectedAnswer.dataset.correct;
  if (correct){
    incrementScore();
    console.log("Correct!")
  } else {
    incrementIncorrectScore();
    console.log("Whoops! Incorrect!")
  }
  setAnswerClickedClass(document.body, correct);
  Array.from(answerButtonsDiv.children).forEach(button =>{
    setAnswerClickedClass(button, button.dataset.correct);
  });
  if (shuffleQuestions.length > currentQuestion + 1){
    nextButton.classList.remove('hide');
  } else {
    console.log("Quiz Completed!");
    restartButton.classList.remove('hide');
  }
  disableAnswerButtons();
}

function setAnswerClickedClass(element, correct){
  removeAnswerClickedClass(element);
  if (correct){
    element.classList.add('correct');
  } else {
    element.classList.add('incorrect');
  }
}

function removeAnswerClickedClass(element){
  element.classList.remove('correct');
  element.classList.remove('incorrect');
}

function incrementScore(){
  let oldScore = parseInt(document.getElementById('correct-score').innerText);
  document.getElementById('correct-score').innerText = ++oldScore;
}

function incrementIncorrectScore(){
  let oldScore = parseInt(document.getElementById('incorrect-score').innerText);
  document.getElementById('incorrect-score').innerText = ++oldScore;
}

function newGame(){
  document.location.reload();
}

function disableAnswerButtons() {
  let disableButtons = document.getElementsByClassName('answer-btn');
  for (let i = 0; i < disableButtons.length; i++){
    disableButtons[i].disabled = true;
  }
}