const btnElem = document.querySelector("button");
btnElem.classList.add("js-btn");
const formElem = document.querySelector(".login-form")
formElem.addEventListener("submit", event => {
event.preventDefault();
const emailElem = event.target.elements.email.value.trim();
const passwordElem = event.target.elements.password.value.trim();
if(emailElem === "" || passwordElem ==="") {
   return alert("All form fields must be filled in")
}
const objData = {
    email: emailElem,
    password: passwordElem,
};
console.log(objData);
formElem.reset();
});