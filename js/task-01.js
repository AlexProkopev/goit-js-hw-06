const categoryContainers  = document.querySelectorAll(".item")
const categoryHeadings  = document.querySelectorAll(`h2`)
const listItems  = document.querySelectorAll(`.item ul li`)

console.log(`Number of categories: ${categoryContainers.length} \n `)

categoryHeadings.forEach(element => {
    console.log(`Category: ${element.textContent}`)
    console.log(`Elements: ${element.nextElementSibling.querySelectorAll("li").length} \n `);
})