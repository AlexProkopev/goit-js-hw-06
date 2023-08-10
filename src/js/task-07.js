//! Example 2

// const inputEl = document.getElementById("font-size-control");

// const text = document.getElementById("text");
// text.style.fontSize = `${inputEl.value}px`;

// const updateText = (event) => (text.style.fontSize = `${event.target.value}px`);

// inputEl.addEventListener("input", updateText);

//! Example 2

const inputEl = document.getElementById("font-size-control");

const text = document.getElementById("text");
text.style.fontSize = `${inputEl.value}px`;
text.style.color = `#5647${inputEl.value}`;

const updateText = (event) => {
  const valueInput = event.target.value;
  text.style.fontSize = `${valueInput}px`;
  text.style.color = `#${Math.floor(Math.random() * 9999)}${valueInput}`;
};

inputEl.addEventListener("input", updateText);
