"use strict";
// 객체 타입 선언
(() => {
    // 객체 생성
    var kim = { name: '김철수', age: 30 };
    console.log(kim);
    function printUser(user) {
        console.log(user.name, user.age);
    }
    printUser(kim);
    // var result: string = printUser(kim);
})();
