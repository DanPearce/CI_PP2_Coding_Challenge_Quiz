//Document Get Variables
const advice = document.getElementById('advice');

//Functions
window.onload = function getRandomAdvice(){
  fetch('https://api.adviceslip.com/advice')
  .then(res => {
    return res.json();
  }).then(adviceJson => {
    const randomAdvice = adviceJson.slip;
    advice.innerText = randomAdvice.advice;
  });
}