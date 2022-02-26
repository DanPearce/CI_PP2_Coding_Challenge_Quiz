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
  }).catch(error => {
    console.log(error);
    advice.innerText = "Our random advice machine appears to be broken! Please report this! So instead our advice is simply stay out of trouble!"
  });
}