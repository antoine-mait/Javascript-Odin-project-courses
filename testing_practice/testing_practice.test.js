
const {
  calculator,
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray
} = require('./testing_practice');

test('capitalize', () => {
  expect(capitalize("throne")).toBe("Throne");
});

test('reverse String', () => {
  expect(reverseString("throne")).toBe("enorht");
});

// Calculator test
test('adds two numbers', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('subtracts two numbers', () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test('divides two numbers', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('multiplies two numbers', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

// Cipher test
test('Test cipher wrapping', () => {
  expect(caesarCipher("xyz",3)).toBe("abc");
});

test('Test cipher Letter case', () => {
  expect(caesarCipher("heLLo",3)).toBe("khOOr");
});

test('Test cipher wrapping', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

// analyze array test
const array = [1,8,3,4,2,6]
test('Average', () => {
  expect(analyzeArray.average(array)).toBe(4);
});
test('min', () => {
  expect(analyzeArray.min(array)).toBe(1);
});
test('max', () => {
  expect(analyzeArray.max(array)).toBe(8);
});
test('length', () => {
  expect(analyzeArray.length(array)).toBe(6);
});