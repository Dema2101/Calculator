const textSpan = document.querySelector("#year .copyright-text");
textSpan.textContent = `Copyright © ${new Date().getFullYear()} dema2101`;


const screen = document.querySelector(".screen");
let number1 = "";
let operator = "";
let number2 = "";



operator=getOperator(screen);
getNumbers(screen);

function getNumbers (screen){
const numbers = document.querySelectorAll(".numbers");
numbers.forEach(btn => {
    btn.addEventListener("click", ()=> {

if(operator===""){

        number1 += btn.textContent;
        screen.textContent = number1;
        console.log("number1:", number1);


} else {
        number2 += btn.textContent;
        screen.textContent = number2;
        console.log("number2:", number2);

}
    })})
}



function getOperator(screen) {
const operators = document.querySelectorAll(".operators");

operators.forEach(btn => {
    btn.addEventListener("click", () => {
        operator = btn.textContent;
        screen.textContent = operator;
        console.log("operator:", operator);
    });
});


  return operator;
}


















function sum(){

}

function subtract(){

}

function multiply(){

}

function divide(){

}


