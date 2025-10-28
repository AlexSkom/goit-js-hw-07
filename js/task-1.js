const categories = document.querySelector("#categories");

console.log("Number of categories: ", categories.children.length);

const items = document.querySelectorAll("li.item")

items.forEach(item => {
   console.log("Category: ", item.querySelector("h2").textContent);
   console.log("Elements: ", item.querySelector("ul").children.length) ;
})
