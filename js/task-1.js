const list = document.querySelectorAll(".item");

console.log('Number of categories:', list.length);

list.forEach(category => {
    const categoryName = category.querySelector("h2").textContent;
    console.log("Category:", categoryName);
    const categoryItems = category.querySelectorAll("ul li").length;
    console.log(categoryItems);
})