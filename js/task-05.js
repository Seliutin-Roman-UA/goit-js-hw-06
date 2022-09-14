const newName = document.querySelector("#name-output");
document
    .querySelector("#name-input")
    .addEventListener(
        "input",
        (event) => {newName.textContent = event.currentTarget.value});
