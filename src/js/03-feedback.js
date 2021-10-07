import throttle from "lodash.throttle";

const inputNode = document.querySelector('.feedback-form');
const inputMail = document.querySelector('.feedback-form input');
const inputMessage = document.querySelector('.feedback-form textarea');
const inputButton = document.querySelector('.feedback-form button');

let loginInform = {};

const STORAGE_KEY = "feedback-form-state";

inputNode.addEventListener('input', throttle(inputText, 500));

inputButton.addEventListener('click', e => {
  e.preventDefault();
  console.log(loginInform);
  localStorage.removeItem(STORAGE_KEY);
  inputNode.reset();
  
} )
  

function inputText({ email, password }) {
  email = inputMail.value;
  password = inputMessage.value;

  loginInform.email = email;
  loginInform.password = password;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(loginInform))
}

if (localStorage.getItem(STORAGE_KEY)) {
  const parseObj  = JSON.parse(localStorage.getItem(STORAGE_KEY))
  inputMail.value = parseObj.email 
  inputTextarea.value = parseObj.password 
}