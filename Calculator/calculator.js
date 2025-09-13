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

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", btnAction);
});

function btnAction(event) {
  const btn = event.target;
  console.info(btn.innerText);
  click.push(btn.innerText);
  
};

document.querySelector("#btn_equal").addEventListener("click", () => {
  operate();
});

function operate(){
  result.innerHTML = "";
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
    result.textContent = add(numberA , numberB);
  }
  else if (operatorSelected ==="-"){
    result.textContent = subtract(numberA , numberB);
  }
  else if (operatorSelected ==="*"){
    const arrayMultiply = [numberA, numberB]
    result.textContent = multiply(arrayMultiply);
  }
  else if (operatorSelected ==="/"){
    result.textContent = divide(numberA , numberB);
  }console.log(result.innerHTML);
  click.length = 0 ;
};

