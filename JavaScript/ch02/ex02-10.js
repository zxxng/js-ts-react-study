var arr = [10, 20, 30];

// 각 요소의 제곱값으로 구성된 새로운 배열 생성
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
  arr2.push(arr[i] ** 2);
}

// ECMA5
var arr2 = [];
arr.forEach(function (e) {
  arr2.push(e ** 2);
});

// ECMA6
var arr2 = arr.map(function (e) {
  return e ** 2;
});

// ECMA6 arrow function
var arr2 = [];
arr.forEach((e) => {
  arr2.push(e ** 2);
});

// 각 요소의 제곱값으로 구성된 새로운 배열 생성
var arr2 = arr.map((e) => e ** 2);

console.log(arr2);
