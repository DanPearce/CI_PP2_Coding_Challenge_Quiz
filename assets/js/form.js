//Document Get Functions
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const project = document.getElementById('project');
const submit = document.getElementById('submit'); 

function sendEmail(){
    emailjs.init("user_cv6MUQhR9JkAaQYC30WwK");
}

function emailSent(){

}