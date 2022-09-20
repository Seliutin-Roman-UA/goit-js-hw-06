const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("В поле email или password не введено значение. Попробуйт еще раз");
    // event.currentTarget.reset();
    form.reset();
    email.focus();
    return;
  }

  const autorization = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log(" данные авторизации =", autorization);
  event.currentTarget.reset();
});
