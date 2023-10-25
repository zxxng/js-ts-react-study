// Function 생성자 함수 -> 잘 사용하지 않는다!
var add = new Function('x', 'y', 'return x + y;');

console.log(add(50, 60));
