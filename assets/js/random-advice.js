//Document Get Variables
const advice = document.getElementById('advice');

//Functions
/**
 * On screen load, the API is called using fetch, we then take from the data we recieved the json file of which has the 'slip'
 * and 'advice'. We then take this and add this to the innerText of the advice p on index.html. If an error occours this is logged
 * and also displayed to the user.
 */
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