const user = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");


user.addEventListener("input", handleInput)

function handleInput(){
    const userInput = user.value.trim();
    if(userInput === ""){
         userName.textContent = "Anonymous"
    } else {
        return userName.textContent = userInput
    }
}