const { add, subtract, multiply, divide, modulo } = require('./app');
console.assert(add(2, 3) === 5, 'add works');
console.assert(subtract(5, 2) === 3, 'subtract works');
console.assert(multiply(4, 3) === 12, 'multiply works');
console.assert(divide(10, 2) === 5, 'divide works');
console.assert(modulo(10, 3) === 1, 'modulo works');
console.assert(modulo(15, 5) === 0, 'modulo zero remainder works');
console.log('✅ All tests passed!');
