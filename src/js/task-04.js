let counterValue = Number(document.querySelector("#value").textContent);
const listCounter = document.querySelector("#counter");
const btnFirst = listCounter.firstElementChild;
const btnLast = listCounter.lastElementChild;

const uppCounter = () => {
  document.querySelector("#value").textContent = counterValue;
};

const plus = () => {
  counterValue += 1;
  uppCounter();
};

const minus = () => {
  counterValue -= 1;

  if (counterValue < 0) {
    counterValue = 0;
    alert("Мешньше 0 нельзя");
  }
  uppCounter();
};

btnFirst.addEventListener(`click`, minus);
btnLast.addEventListener(`click`, plus);
