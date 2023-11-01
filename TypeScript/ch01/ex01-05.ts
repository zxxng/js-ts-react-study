// 유니언 타입
(() => {
  function logString(msg: string) {
    console.log(msg);
  }
  function logNumber(msg: number) {
    console.log(msg);
  }

  logString('hello');
  logNumber(10);

  function log(msg: string | number) {
    console.log(msg);
  }

  log('hello');
  log(777);

  var msg1: string | number = 'world';
  var msg2: number | string = 200;
  msg1 = 300;
  log(msg1);
  log(msg2);
})();
