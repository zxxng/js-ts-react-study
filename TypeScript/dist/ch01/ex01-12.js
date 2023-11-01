"use strict";
(() => {
    var todo1 = {
        _id: 1,
        title: '할일1',
        content: '인터페이스 사용.',
        done: false,
    };
    var todo2 = {
        _id: 2,
        title: '할일2',
        content: '인터페이스 사용2',
    };
    var toggleFn = function (todo) {
        todo.done = !todo.done;
    };
    // todo1._id = 3;
    todo1.title = '집에가자';
    toggleFn(todo1);
    toggleFn(todo1);
    console.log(todo1, todo2);
})();
