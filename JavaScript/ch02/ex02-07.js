// 표현식 방식의 함수 생성(기명함수)
var add = function sum(x, y) {
  return x + y;
};

console.log(add(30, 40));
// sum으로 선언하지 않았기 때문에 error
// console.log(sum(30, 40));
