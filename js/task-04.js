const counter = document.querySelector("#value");
let counterValue = 0;

document
  .querySelector('[data-action="decrement"]')
  .addEventListener("click", () => {
    counter.textContent = --counterValue;
  });
document
  .querySelector('[data-action="increment"]')
  .addEventListener("click", () => {
    counter.textContent = ++counterValue;
  });
