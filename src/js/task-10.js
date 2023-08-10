function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//! Вытягиваем из HTML что нужно

const divBoxesEl = document.getElementById("boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector("#controls input");

//! Создаём то количество элементов сколько нужно( аргументом принимаем значение из инпута, функция numFromInput), мне в голову пришёл только for, хотел бы узнать как можно не через for

const createBoxes = (amount) => {
  const isArrayElementDiv = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    isArrayElementDiv.push(
      `<div style="background-color: ${getRandomHexColor()}; width:${size}px; height:${size}px"></div>`
    );
    size += 10;
  }

  divBoxesEl.insertAdjacentHTML("beforeend", isArrayElementDiv.join(" "));
};

//! Вытягиваем значение инпута событием "input" и в будущем передаём как аргумент на событие клика в функцию createBoxes

const numFromInput = () =>  Number(input.value);

//! Добавление обработчиков

input.addEventListener("input", numFromInput);

btnCreate.addEventListener("click", () => {
  const amount = numFromInput();
  createBoxes(amount);
});

btnDestroy.addEventListener("click", () => {
  divBoxesEl.innerHTML = "";
});
