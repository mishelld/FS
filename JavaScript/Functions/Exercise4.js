function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
let calculator = { add: add, subtract: subtract };

const result1 = calculator.add(20, 1);
const result2 = calculator.subtract(30, 9);

console.log(calculator.add(result1, result2)); //should print 42
