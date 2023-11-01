"use strict";
// 타입 별칭
// ex01-05.ts 복사
// 유니언 타입
(() => {
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
