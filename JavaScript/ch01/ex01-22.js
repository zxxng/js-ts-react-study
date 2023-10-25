// TODO: hoisting 단원.
function sum(a, b = 0) {
  return a + b;
}
console.log(sum(10, 20));
console.log(sum(30));

// 구조 분해 할당과 같이 사용
// function sum2([x = 0, y = 0] = []) {
//   return x + y;
// }

// console.log(sum2([1, 2]));
// console.log(sum2());
// console.log(sum2([]));
// console.log(sum2([1]));

// TODO: IIFE pattern
(function sum([x = 0, y = 0] = []) {
  return x + y;
});

console.log(sum([1, 2]));
console.log(sum());
console.log(sum([]));
console.log(sum([1]));

// function sum(obj ={}) {
(function sum({ x = 0, y = 0 } = {}) {
  // if (obj !== undefined) 어쩌고 저쩌고
  return obj.x + obj.y;
});
console.log(sum());
console.log(sum({}));
console.log(sum({ x: 4 }));
console.log(sum({ x: 5, y: 6 }));
