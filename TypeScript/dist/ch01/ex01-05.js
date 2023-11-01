"use strict";
// 유니언 타입
(() => {
    function logString(msg) {
        console.log(msg);
    }
    function logNumber(msg) {
        console.log(msg);
    }
    logString('hello');
    logNumber(10);
    function log(msg) {
        console.log(msg);
    }
    log('hello');
    log(777);
    var msg1 = 'world';
    var msg2 = 200;
    msg1 = 300;
    log(msg1);
    log(msg2);
})();
