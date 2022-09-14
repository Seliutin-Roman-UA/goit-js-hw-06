const counter = document.querySelector("#value");

document
  .querySelector('[data-action="decrement"]')
  .addEventListener(
    "click",
    () => {counter.textContent = +counter.textContent - 1}
  );
document
  .querySelector('[data-action="increment"]')
  .addEventListener(
    "click",
    () => {counter.textContent = +counter.textContent + 1}
  );
