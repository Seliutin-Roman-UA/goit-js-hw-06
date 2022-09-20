const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const elemetsHTML = ingredients.map((el => {
  let elementHTML = document.createElement("li");
  elementHTML.textContent = el;
  elementHTML.className = "item";
  return elementHTML;
}))


list.append(...elemetsHTML);
