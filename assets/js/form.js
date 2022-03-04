//Document Get Variables
const form = document.getElementsByTagName('form')[0];
const formSent = document.getElementById('form-sent');

//Functions
/**
 * Initiates the emailJS script and sends the content of the form to my account via their service.
 */
window.onload = function sendEmail(){
  document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();
    emailjs.init("user_cv6MUQhR9JkAaQYC30WwK");
    emailjs.sendForm('danpearcesoftware', 'template_q6jr6d9', this)
    .then(function(){
      console.log('Email Sent Successfully');
    }), function(error){
      console.log('Failed..', error);
    }
    emailSent();
  });
}

/**
 * Removes the form from the screen and loads the 'sent' section to display to the user that their message has been sent.
 */
function emailSent(){
  form.classList.add('hide');
  formSent.classList.remove('hide');
  document.body.classList.add('sent');
}
