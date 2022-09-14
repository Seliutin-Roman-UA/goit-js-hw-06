let checkInput = document.querySelector('#validation-input');


checkInput.addEventListener("blur", () => {

    if (checkInput.value.length === +checkInput.dataset.length) {
        checkInput.className = "valid";
    
    } else if (checkInput.value.length === 0) {
        checkInput.className = "";
        
    } else if (checkInput.value.length !== +checkInput.dataset.length) {
        checkInput.className = "invalid";
    }
});