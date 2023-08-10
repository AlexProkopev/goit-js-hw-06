//* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const input = document.querySelector("#name-input");
const welcomeText = document.querySelector("#name-output");

const addWelcomeName = () =>
  input.value === ""
    ? (welcomeText.textContent = "Anonymous")
    : (welcomeText.textContent = input.value);

input.addEventListener("input", addWelcomeName);
