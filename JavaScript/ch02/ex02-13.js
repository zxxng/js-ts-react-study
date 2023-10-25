function fn(n1, n2) {
  // console.log(n1, n2);
  // 모든 인자값의 합꼐를 출력
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(arguments);
  console.log('합계', sum);
}

fn();
fn(10);
fn(20, 30);
fn(40, 50, 60);
fn(234, 234, 234, 234, 234, 234, 234, 234, 234, 234, 234, 234, 234, 234, 234);
