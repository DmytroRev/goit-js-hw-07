const form = document.querySelector(".login-form");

form.addEventListener("submit", handleInput);

function handleInput(event) {
    event.preventDefault();

    const emailInput = form.elements["email"];
    const passwordInput = form.elements["password"];

    const resultEmail = emailInput.value.trim();
    const resultPassword = passwordInput.value.trim();

    if (resultEmail === "" || resultPassword === "") {
        alert("All form fields must be filled in");
    } else {
        const formData = {
            email: resultEmail,
            password: resultPassword
        };
        console.log(formData);
    }
}

