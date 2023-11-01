"use strict";
// 인터페이스
// ex01-09.ts 복사
(() => {
    // 변수에 타입 지정
    var kim = { name: '김철수', age: 30 };
    // 함수 매개 변수에 타입 지정
    var getAge = function (kim) {
        return kim.age;
    };
    // 함수의 리턴 타입 지정
    var createUser = function (name, age) {
        return { name, age };
    };
    var kim = createUser('김철수', 30);
    console.log(kim);
    console.log(getAge(kim));
})();
