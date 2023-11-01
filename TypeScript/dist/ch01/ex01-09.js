"use strict";
// 인터페이스
// ex01-07.ts 복사
(() => {
    // 객체 생성
    var kim = { name: '김철수', age: 30 };
    function printUser(user) {
        console.log(user.name, user.age);
    }
    printUser(kim);
})();
