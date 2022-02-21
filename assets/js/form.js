//Document Get Functions
const submit = document.getElementById('submit'); 

submit.addEventListener('submit', sendEmail);

//Functions
function sendEmail(){
  preventDefault();
  emailjs.init("user_cv6MUQhR9JkAaQYC30WwK");
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const project = document.getElementById('project');
  emailjs.send('service_i7kt59p', 'service_i7kt59p', this)
}

function emailSent(){

}