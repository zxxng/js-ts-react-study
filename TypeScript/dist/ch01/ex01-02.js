"use strict";
/* eslint-disable @typescript-eslint/no-inferrable-types */
(() => {
    // string
    var str = 'hello';
    // number
    var age = 30;
    // boolean
    var done = true;
    // object
    var todo = { title: 'Typescript 공부', done: false };
    // Array
    var items = ['JS공부', 'TS공부'];
    var todoList = ['JS 프로젝트', 'TS 프로젝트'];
    // tuple : 갯수가 지정되어 있고, 타입도 지정되어 있는 배열
    var users = ['김철수', '이영희'];
    // var users: [string, string] = ['김철수', 30];// error
    var user = ['김철수', 30];
    // any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var userName = '이일구';
    userName = 219;
    // null
    var nullVal = null;
    // undefined
    var undefinedVal;
    console.log(str, age, done, todo, items, todoList, users, user, userName, nullVal, undefinedVal);
    console.log(typeof str, typeof age, typeof done, typeof todo, typeof items, typeof todoList, typeof users, typeof user, typeof userName, typeof nullVal, typeof undefinedVal);
})();
