const textSpan = document.querySelector("#year .copyright-text");
textSpan.textContent = `Copyright © ${new Date().getFullYear()} dema2101`;


const screen = document.querySelector(".mainScreen");
const smallScreen = document.querySelector(".smallScreen");
let number1 = "";
let operator = "";
let number2 = "";

operator=getOperator(screen);
getNumbers(screen);
getEqual();
deleteNumber(screen);










function getNumbers (screen){
const numbers = document.querySelectorAll(".numbers");
numbers.forEach(btn => {
    btn.addEventListener("click", ()=> {

    const check =btn.textContent;
    if(check==="."){

        if(operator ==="" && number1.includes(".")) return;
        if(operator !=="" && number2.includes(".")) return;
    }


if(operator===""){
        number1 += btn.textContent;
        screen.textContent = number1;
        if(number1==="0") number1 ="";
        console.log("number1:", number1);
        

} else {
        number2 += btn.textContent;
        screen.textContent = number2;
        console.log("number2:", number2);

}
    })})
}



function getOperator() {
const operators = document.querySelectorAll(".operators");

operators.forEach(btn => {
    btn.addEventListener("click", () => {
        operator = btn.textContent;
        if(number1 === "") number1="0";
        smallScreen.textContent = `${number1} ${operator}`;
        console.log("operator:", operator);
    });
});
  return operator;
}

function getEqual(){
    let rezultat=0;
    let finalize = document.getElementById("equal");
    finalize.addEventListener("click", ()=>{
        if(number2 ==="") return;
        switch (operator) {
            case "+":
                rezultat=sum(number1,number2);
                rezultat=Math.round(rezultat * 100) / 100
                break;

            case "-":
                rezultat=subtract(number1,number2);
                rezultat=Math.round(rezultat * 100) / 100
                break;
            
            case "×":
                rezultat=multiply(number1,number2);
                rezultat=Math.round(rezultat * 100) / 100
                break;

            case "÷":
                rezultat=divide(number1,number2);
                rezultat=Math.round(rezultat * 100) / 100
                break;
        }
        smallScreen.textContent="";
        screen.textContent=rezultat;
        if(rezultat===77) screen.textContent="ŠPIKIĆ THE GOAT";
        number1=`${rezultat}`;
        operator="";
        number2="";
    })
}









function sum(a,b){
    if(a=="." || a=="") a=0;
    if(b=="." || b=="") b=0;
    a=parseFloat(a);
    b=parseFloat(b);

    return a+b;
}

function subtract(a,b){
    if(a=="." || a=="") a=0;
    if(b=="." || b=="") b=0;
    a=parseFloat(a);
    b=parseFloat(b);

    return a-b;
}


function multiply(a,b){
    if(a=="." || a=="") a=0;
    if(b=="." || b=="") b=0;
    a=parseFloat(a);
    b=parseFloat(b);

    return a*b;
}

function divide(a,b){
    if(a=="." || a=="") a=0;
    if(b=="." || b=="") b=0;
    a=parseFloat(a);
    b=parseFloat(b);

    return a/b;
}



function deleteNumber(screen){
    const deleteBtn = document.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", ()=> {
        if(number2 ==="") {
            number1=number1.slice(0,-1);
            screen.textContent=`${number1}`;
        }
            else 
            {
                number2=number2.slice(0,-1);
                screen.textContent=`${number2}`;
            }        
        })
}