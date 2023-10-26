var sum = function (x, y, z) {
  return x + y + z;
};

// Function에 partial 기능 추가
// 3일동안 배운 내용 다 들어있다. 이번 과정에서 제일 어려운 코드
// prototype, this, arguments, 전개연산자, 고차함수(함수가 함수 리턴), apply, closure
Function.prototype.partial = function (/*...preArgs*/) {
  var preArgs = [...arguments]; // [20, 80]
  var fn = this; // sum()을 의미
  return function (/* 30 */) {
    // [20, 80, 30]
    var args = [...preArgs, ...arguments];
    // return fn(...args);
    return fn.apply(this, args);
  };
};

var sum100 = sum.partial(20, 80);
console.log(sum100(30), sum100(50));
