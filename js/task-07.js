const valueForFont = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

valueForFont.addEventListener("input", () => {
  text.style.fontSize = `${valueForFont.value}px`;
});

