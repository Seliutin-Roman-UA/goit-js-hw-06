let categories = document.querySelector("#categories");
let childrenOfcategories = document.querySelector("#categories").children;
console.log(childrenOfcategories);
for (const node of childrenOfcategories) {
    console.log("Categories: ", node.children[0].textContent);
    console.log("Elements: ", node.children[1].children.length);
}
    