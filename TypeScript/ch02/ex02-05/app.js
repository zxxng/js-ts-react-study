var data = { a: 10, b: 20 };

// import MyMath, { sum, substract } from './math.js';
// function sum(a, b) {
//   return a + b;
// }
// console.log(1, sum(data));
// console.log(1, substract(data));
// console.log(1, MyMath.divide(data));

import * as MyMath from './math.js';

console.log(1, MyMath.sum(data));
console.log(1, MyMath.substract(data));
console.log(1, MyMath.divide(data));

// export default { sum };
