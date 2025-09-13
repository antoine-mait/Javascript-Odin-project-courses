const add = function(a,b) {
 return a + b ;
};

const subtract = function(a,b) {
 return a - b ;	
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current)
};

const divide = function(a,b) {
    return a / b ;
}

const result = document.querySelector("#result");
const click=[];
let lastResult = null;

document.querySelectorAll("button:not(#clear)").forEach((button) => {
  button.addEventListener("click", btnAction);
});

document.querySelector("#clear").addEventListener("click", () => {
  click.length = 0;      
  result.textContent = 0; 
  lastResult = null;
});

function btnAction(event) {
  const btn = event.target;
  const value = btn.innerText;
 
  if (value === "=") {
    operate();
    return;
  }

  if ("+-*/".includes(value)) {
    const operatorIndex = click.findIndex(item => "+-*/".includes(item));
    if (operatorIndex >= 0 && click.length > operatorIndex + 1) {
        operate(); 
        click.length = 0;
        if (lastResult !== null) {
            click.push(lastResult.toString());
        }
      }

    if (click.length === 0 || "+-*/".includes(click[click.length - 1])) {
        return; 
    }
    click.push(value);

    const firstNumber = click.slice(0, -1).join(""); 
    result.textContent = lastResult ?? firstNumber;
    
    return;
  }
  click.push(value);

  const operatorIndex = click.findIndex(item => "+-*/".includes(item));
    if (operatorIndex === -1) {
    result.textContent = click.join("");
  } else {
    result.textContent = click.slice(operatorIndex + 1).join("");
  }
}

document.querySelector("#btn_equal").addEventListener("click", () => {
  operate();
});

function operate(){
  let numberA = "";
  let numberB = "";
  let operatorSelected = null;
  let operatorFound = false;

  click.forEach(item =>{
    if (item === "=") return;
    if("+-*/".includes(item)){
      operatorSelected= item;
      operatorFound= true;
    }else if (!operatorFound){
      numberA += item;
    }else{
      numberB += item;
    }
  })

  numberA = Number(numberA);
  numberB = Number(numberB);

  if(operatorSelected === "+"){
    lastResult = add(numberA , numberB);
  }
  else if (operatorSelected ==="-"){
    lastResult = subtract(numberA , numberB);
  }
  else if (operatorSelected ==="*"){
    const arrayMultiply = [numberA, numberB]
    lastResult = multiply(arrayMultiply);
  }
  else if (operatorSelected ==="/"){
    if (numberB === 0){
      lastResult = "Error"
    }else{
    lastResult = divide(numberA , numberB);
    }
  }
  result.textContent = parseFloat(lastResult.toFixed(8));
};

const keyMap = {
  "0": "#btn_0",
  "1": "#btn_1",
  "2": "#btn_2",
  "3": "#btn_3",
  "4": "#btn_4",
  "5": "#btn_5",
  "6": "#btn_6",
  "7": "#btn_7",
  "8": "#btn_8",
  "9": "#btn_9",
  "+": "#btn_plus",
  ".": "#btn_dot",
  "*": "#btn_multiply",
  "/": "#btn_divide",
  "-": "#btn_minus",
  "Enter": "#btn_equal",  
  "Delete": "#clear"  
};

document.addEventListener("keydown" , (event) => {
  const selector = keyMap[event.key];
  if (selector){
    document.querySelector(selector)?.click();
  } else{
    console.log("Can't find it")
  }
})