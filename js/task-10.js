function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

btnCreate.addEventListener("click", () => {
  createDiv(+document.querySelector("#controls input").value);
});

btnDestroy.addEventListener("click", () => {
  for (const i of document.querySelectorAll("#boxes > div")) {
    i.remove();
  }
});

function createDiv(amountOfDiv) {
  console.log(" amountOfDiv= ", 2 * amountOfDiv);
  for (let i = 1; i <= amountOfDiv; i++) {
    console.log(" i = ", i);
    const newDiv = document.createElement("div");
    newDiv.style.width = 30 + (i - 1) * 10 + "px";
    newDiv.style.height = 30 + (i - 1) * 10 + "px";
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.lineHeight = 30 + (i - 1) * 10 + "px";
    newDiv.textContent = i;
    document.querySelector("#boxes").append(newDiv);
  }
}
