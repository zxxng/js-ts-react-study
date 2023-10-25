// 함수의 결과 값으로 함수가 반환될 수 있다.
function foo() {
  console.log('foo 호출.');
  return function () {
    console.log('bar 호출.');
    return function () {
      console.log('baz 호출');
    };
  };
}

// 체인 방식 호출
foo()()();

var bar = foo();
var baz = bar();
baz();
