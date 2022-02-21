const project = document.getElementById('project');
project.readOnly = true;

//Functions
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
  })
}

function emailSent(){

}