const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addItem = (arr) => {
  const list = document.getElementById("ingredients");
  const container = document.createDocumentFragment();

  arr.forEach((values) => {
    const el = document.createElement("li");
    container.append(el);
    el.classList.add("item");
    el.textContent = values;
  });

  list.appendChild(container);
};

addItem(ingredients)

