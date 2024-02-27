const controls = document.querySelector("#controls");
const boxContainer = document.querySelector("#boxes");
const dataCreate = document.querySelector("[data-create]");
const dataDestroy = document.querySelector("[data-destroy]");

dataCreate.addEventListener("click", handleCreate);
dataDestroy.addEventListener("click", handleDestroy);

function handleCreate() {
    const amount = Number(controls.querySelector('input').value);
    clearPreviousBoxes();
    createBoxes(amount); 
    clearInput(); 
}

function handleDestroy() {
    clearPreviousBoxes(); 
}

function clearPreviousBoxes() {
    boxContainer.innerHTML = '';
}

function createBoxes(amount) {
    if(amount >= 1 && amount <= 100) {
        for (let i = 0; i < amount; i++) {
            const box = document.createElement("div");
            const size = 30 + i * 10;
            box.style.width = `${size}px`;
            box.style.height = `${size}px`;
            box.style.backgroundColor = getRandomHexColor();
            boxContainer.appendChild(box);
        }
    }
return
}
function clearInput() {
    controls.querySelector('input').value = ''; 
}

function getRandomHexColor(){
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}