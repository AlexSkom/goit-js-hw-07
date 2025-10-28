const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", fn);
function fn(){
    output.textContent = input.value.trim() === "" ? output.textContent = "Anonymous": input.value.trim();
}