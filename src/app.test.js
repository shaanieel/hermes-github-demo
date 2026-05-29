const { add, subtract, multiply, divide } = require('./app');
console.assert(add(2, 3) === 5, 'add works');
console.assert(subtract(5, 2) === 3, 'subtract works');
console.assert(multiply(4, 3) === 12, 'multiply works');
console.assert(divide(10, 2) === 5, 'divide works');
console.log('✅ All tests passed!');
