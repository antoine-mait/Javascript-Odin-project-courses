const add = function(a,b) {
 return a + b ;
};

const subtract = function(a,b) {
 return a - b ;	
};

const sum = function(array) {
  return array.reduce((total, num) => total + num, 0);
};

const multiply = function(array) {
  return array.reduce((product, num) => product * num, 1);
};

const divide = function(a,b) {
    return a / b ;
}

const power = function(a,b) {
 return a ** b ;
};

const factorial = function(n) {
  let result = 1;
  for (let i = 1; i <= n; i++){
    result *= i;
  }
 return result;	
};

const operate = function(operator , a , b){
    
}