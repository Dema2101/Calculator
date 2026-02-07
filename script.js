const textSpan = document.querySelector("#year .copyright-text");
textSpan.textContent = `Copyright © ${new Date().getFullYear()} dema2101`;

const screen = document.querySelector(".mainScreen");
const smallScreen = document.querySelector(".smallScreen");
let number1 = "";
let operator = "";
let number2 = "";

getOperator();
getNumbers(screen);
getEqual();
deleteNumber(screen);
clearNumbers();

function getNumbers(screen) {
  const numbers = document.querySelectorAll(".numbers");
  numbers.forEach((btn) => {
    btn.addEventListener("click", () => {
      const check = btn.textContent;
      if (check === ".") {
        if (operator === "" && number1.includes(".")) return;
        if (operator !== "" && number2.includes(".")) return;
      }

      if (operator === "") {
        if (number1 === "0" && btn.textContent !== ".") number1 = "";
        if (number1.length >= 10 && btn.textContent !== ".") return;
        number1 += btn.textContent;
        screen.textContent = number1;
      } else {
        if (number2 === "0" && btn.textContent !== ".") number2 = "";
        if (number2.length >= 10 && btn.textContent !== ".") return;
        number2 += btn.textContent;
        screen.textContent = number2;
      }
    });
  });
}

function getOperator() {
  const operators = document.querySelectorAll(".operators");

  operators.forEach((btn) => {
    btn.addEventListener("click", () => {
      const op = btn.textContent;
      // spriječi "--" na početku brojeva
      if (op === "-" && operator === "" && number1 === "-") return;
      if (op === "-" && operator !== "" && number2 === "-") return;

      if (op === "-" && number1 === "" && operator === "") {
        number1 = "-";
        screen.textContent = number1;
        return;
      }

      if (op == "-" && number2 == "" && operator !== "") {
        number2 = "-";
        screen.textContent = number2;
        return;
      } else {
        if (operator !== "" && number2 === "") {
          return;
        }
        operator = op;
        if (number1 === "") number1 = "0";
        smallScreen.textContent = `${number1} ${operator}`;
        screen.textContent = "";
      }
    });
  });
  return operator;
}

function getEqual() {
  let rezultat = 0;
  let finalize = document.getElementById("equal");
  finalize.addEventListener("click", () => {
    if (number2 === "") return;
    switch (operator) {
      case "+":
        rezultat = sum(number1, number2);
        rezultat = Math.round(rezultat * 100) / 100;
        break;

      case "-":
        rezultat = subtract(number1, number2);
        rezultat = Math.round(rezultat * 100) / 100;
        break;

      case "×":
        rezultat = multiply(number1, number2);
        rezultat = Math.round(rezultat * 100) / 100;
        break;

      case "÷":
        rezultat = divide(number1, number2);
        rezultat = Math.round(rezultat * 100) / 100;

        break;
    }

    if (!Number.isFinite(rezultat)) {
      screen.textContent = "ERROR";
      smallScreen.textContent = "";
      number1 = "";
      operator = "";
      number2 = "";
      return;
    }

    const displayNumber2 =
      operator !== "" && number2.startsWith("-") ? `(${number2})` : number2;
    smallScreen.textContent = `${number1} ${operator} ${displayNumber2} =`;

    screen.textContent = rezultat;
    if (rezultat === 77) screen.textContent = "ŠPIKIĆ THE GOAT";
    number1 = `${rezultat}`;
    operator = "";
    number2 = "";
  });
}

function sum(a, b) {
  if (a == "." || a == "") a = 0;
  if (b == "." || b == "") b = 0;
  a = parseFloat(a);
  b = parseFloat(b);

  return a + b;
}

function subtract(a, b) {
  if (a == "." || a == "") a = 0;
  if (b == "." || b == "") b = 0;
  a = parseFloat(a);
  b = parseFloat(b);

  return a - b;
}

function multiply(a, b) {
  if (a == "." || a == "") a = 0;
  if (b == "." || b == "") b = 0;
  a = parseFloat(a);
  b = parseFloat(b);

  return a * b;
}

function divide(a, b) {
  if (a == "." || a == "") a = 0;
  if (b == "." || b == "") b = 0;

  a = parseFloat(a);
  b = parseFloat(b);

  return a / b;
}

function deleteNumber(screen) {
  const deleteBtn = document.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", () => {
    if (number2 === "") {
      number1 = number1.slice(0, -1);
      screen.textContent = `${number1}`;
    } else {
      number2 = number2.slice(0, -1);
      screen.textContent = `${number2}`;
    }
  });
}

function clearNumbers() {
  const clearBtn = document.querySelector(".clearBtn");
  clearBtn.addEventListener("click", () => {
    number1 = "";
    operator = "";
    number2 = "";
    screen.textContent = "";
    smallScreen.textContent = "";
  });
}
