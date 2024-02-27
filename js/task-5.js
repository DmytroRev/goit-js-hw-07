const color = document.querySelector("body");
const colorRgb = document.querySelector(".color")
const colorBtn = document.querySelector(".change-color")

colorBtn.addEventListener("click", handleClick);


function handleClick() {
  const result = color.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
return colorRgb.textContent = `${result}`
}