//! Example num 1

// const input = document.getElementById("validation-input");
// const inputDataLength = Number(input.getAttribute("data-length"));
// let valueInput = 0;

// input.addEventListener("input", () => (valueInput = input.value.length));

// const isValid = () =>
//   valueInput !== inputDataLength
//     ? (input.style.borderColor = "#f44336")
//     : (input.style.borderColor = "#4caf50");

// input.addEventListener("blur", isValid);

//! Example num 2

const input = document.getElementById("validation-input");
const inputDataLength = Number(input.getAttribute("data-length"));

const checkValues = (event) => {
  event.preventDefault();
  const ifTrue = event.target.value.length === inputDataLength;
  event.target.classList.toggle("valid", ifTrue);
  event.target.classList.toggle("invalid", !ifTrue);
};

input.addEventListener("blur", checkValues);


//! Example 3
// const input = document.getElementById("validation-input");
// const inputDataLength = Number(input.getAttribute("data-length"));

// const checkValues = (event) => {

//   if (event.target.value.length === inputDataLength) {
//       event.target.classList.remove("invalid")
//       event.target.classList.add("valid")
//   } else {
//       event.target.classList.remove("valid")
//       event.target.classList.add("invalid")
//   }
    
//     };

// input.addEventListener("blur", checkValues);