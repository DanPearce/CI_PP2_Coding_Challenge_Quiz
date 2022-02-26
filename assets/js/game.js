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
const correctScore = document.getElementById('correct-score-div');
const incorrectScore = document.getElementById('incorrect-score-div');
const quizComplete = document.getElementById('quiz-complete');
const quizCompleteScore = document.getElementById('quiz-complete-score');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');
const percentage = document.getElementById('percentage');

//Event Listeners
easyButton.addEventListener('click', startGameEasy);
moderateButton.addEventListener('click', startGameModerate);
hardButton.addEventListener('click', startGameHard);
nextButton.addEventListener('click', () =>{
  currentQuestion++;
  nextQuestion();
  playClickAudio();
})
restartButton.addEventListener('click', newGame);
startButton.addEventListener('click', startGame);

//Global Variables
let shuffleQuestions;
let currentQuestion;
let regExp = /^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
let audioPlaying = true;
const maxQuestion = 10;
let questionValue = 0;

//Functions
function startGame(){
  if (username.value.match(regExp) && username.value != "" && username.value != null && username.value != undefined){
    usernameArea.classList.add('hide');
    chooseDifficulty.classList.remove('hide');
    easyButton.classList.remove('hide');
    moderateButton.classList.remove('hide');
    hardButton.classList.remove('hide');
    let user = username.value;
    welcomeUser.innerText = `Welcome ${user}, here's your chance to test your skills and knowledge in HTML, CSS and JavaScript!`;
  }

  if (!username.value.match(regExp)){
    username.setCustomValidity("Please ensure you are entering a username that ONLY contains letters or numbers, and is between 3-20 characters in length.");
  }
  playClickAudio();
}

function startGameEasy(){
  console.log("Game Started!");
  correctScore.classList.remove('hide');
  incorrectScore.classList.remove('hide');
  easyButton.classList.add('hide');
  moderateButton.classList.add('hide');
  hardButton.classList.add('hide');
  chooseDifficulty.classList.add('hide');
  welcomeUser.classList.add('hide');
  shuffleQuestions = questionsEasy.sort(() => Math.random() - .5);
  currentQuestion = 0;
  questionContainer.classList.remove('hide');
  playClickAudio();
  nextQuestion();
}

function startGameModerate(){
  console.log("Game Started!");
  correctScore.classList.remove('hide');
  incorrectScore.classList.remove('hide');
  easyButton.classList.add('hide');
  moderateButton.classList.add('hide');
  hardButton.classList.add('hide');
  chooseDifficulty.classList.add('hide');
  welcomeUser.classList.add('hide');
  shuffleQuestions = questionsModerate.sort(() => Math.random() - .5);
  currentQuestion = 0;
  questionContainer.classList.remove('hide');
  playClickAudio();
  nextQuestion();
}

function startGameHard(){
  console.log("Game Started!");
  correctScore.classList.remove('hide');
  incorrectScore.classList.remove('hide');
  easyButton.classList.add('hide');
  moderateButton.classList.add('hide');
  hardButton.classList.add('hide');
  chooseDifficulty.classList.add('hide');
  welcomeUser.classList.add('hide');
  shuffleQuestions = questionsHard.sort(() => Math.random() - .5);
  currentQuestion = 0;
  questionContainer.classList.remove('hide');
  playClickAudio();
  nextQuestion();
}

function questionProgressCounter(qV) {
  percentage.innerHTML = `${questionValue}%`
  questionValue++;
  progressBar.value = questionValue;
}

function nextQuestion(){
  resetQuestion();
  showQuestion(shuffleQuestions[currentQuestion]);
  questionProgressCounter(questionValue);
  playClickAudio();
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
    playCorrectAudio();
    incrementScore();
    console.log("Correct!")
  } else {
    playIncorrectAudio();
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
    questionContainer.classList.add('hide');
    answerButtonsDiv.classList.add('hide');
    quizComplete.classList.remove('hide');
    quizCompleteScore.classList.remove('hide');
    let scoreEnd = parseInt(document.getElementById('correct-score').innerText);
    let user = username.value;
    switch(scoreEnd){
      case 0:
        quizCompleteScore.innerText = `${scoreEnd}/10! Oh dear ${user}! Maybe some more revision would help!`;
        break;
      case 1:
        quizCompleteScore.innerText = `${scoreEnd}/10! Keep revising ${user}, and come back and try again!`;
        break;
      case 2:
        quizCompleteScore.innerText = `${scoreEnd}/10! I've seen worse ${user}! Keep trying!`;
        break;
      case 3:
        quizCompleteScore.innerText = `${scoreEnd}/10! I've seen worse ${user}! Keep on revising!`;
        break;
      case 4:
        quizCompleteScore.innerText = `${scoreEnd}/10! Keep on going ${user}! Maybe some more revision would help!`;
        break;
      case 5:
        quizCompleteScore.innerText = `${scoreEnd}/10! Half way there is better than no way there ${user}!`;
        break;
      case 6:
        quizCompleteScore.innerText = `${scoreEnd}/10 ${user}! Not too shabby young padawan!`;
        break;
      case 7:
        quizCompleteScore.innerText = `${scoreEnd}/10! That's more like it ${user}, keep on trying!`;
        break;
      case 8:
        quizCompleteScore.innerText = `${scoreEnd}/10! 2 off the mark ${user}! Not bad at all!`;
        break;
      case 9:
        quizCompleteScore.innerText = `${scoreEnd}/10! Almost there ${user}! Try again to see if you can remember the one you got wrong!`;
        break;
      case 10:
        quizCompleteScore.innerText = `${scoreEnd}/10! Well done ${user}! You must be an expert!`;
        break;
      default:
        quizCompleteScore.innerText = "Looks like our scoring system has broken! Please contact us to report this bug!";
    }
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
  playClickAudio();
  document.location.reload();
}

function disableAnswerButtons() {
  let disableButtons = document.getElementsByClassName('answer-btn');
  for (let i = 0; i < disableButtons.length; i++){
    disableButtons[i].disabled = true;
  }
}