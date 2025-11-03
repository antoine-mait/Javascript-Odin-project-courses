function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverseString(string){
   return string.split("").reverse().join("");
}

const calculator = {
  add: function(a, b) {
    return a + b;
  },
  
  subtract: function(a, b) {
    return a - b;
  },
  
  divide: function(a, b) {
    return a / b;
  },
  
  multiply: function(a, b) {
    return a * b;
  }
};

function caesarCipher(string, valueShift) {
  let caesarString = ""
  
  for (let i = 0; i < string.length; i++) {
    let element = string[i];
    
    // Check if it's a letter or punctuation/space
    let charCode = element.charCodeAt(0);
    
    // Check if it's not a letter (punctuation, space, etc.)
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))) {
      caesarString += element;
      continue;
    }
    
    let newValue;
    
    // Capital letter (A-Z: 65-90)
    if (charCode >= 65 && charCode <= 90) {
      newValue = charCode + valueShift;
      // Wrap around if needed
      if (newValue > 90) {
        newValue -= 26;
      }
    } 
    // Lowercase letter (a-z: 97-122)
    else if (charCode >= 97 && charCode <= 122) {
      newValue = charCode + valueShift;
      // Wrap around if needed
      if (newValue > 122) {
        newValue -= 26;
      }
    }
    
    let newChar = String.fromCharCode(newValue);
    caesarString += newChar;
  }
  
  return caesarString;
}

const analyzeArray = {
  average: function(array) {
    return  array.reduce((a, b) => a + b) / array.length;
  },
  min: function(array) {
    return Math.min(...array);
  },
  max: function(array) {
    return Math.max(...array);
  },
  length: function(array) {
    return array.length;
  }
};

module.exports = {
  calculator,
  capitalize,
  reverseString,
  caesarCipher, 
  analyzeArray
};