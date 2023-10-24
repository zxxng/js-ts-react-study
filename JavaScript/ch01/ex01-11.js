var arr = [300, 400];
arr[2] = 500;
arr.unshift(200);
arr.unshift(100);
console.log(arr);

// 배열의 모든 요소 출력(for)
console.log('for');
for (var i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

// 배열의 모든 요소 출력(for-in) : key값 반환
console.log('for-in');
for (var i in arr) {
  console.log(i, arr[i]);
}
// for-in문은 배열의 순환에 적합하지 않다고 배웠는데 그 이유를 알 수 있을까요? -> 뒤에 객체에서 자세히!

// 배열의 모든 요소 출력(for-of) : value값 반환
console.log('for-of');
for (var i of arr) {
  console.log(i);
}

// 배열의 모든 요소 출력(forEach())
console.log('forEach()');
arr.forEach((e, i) => {
  console.log(i, e);
});
