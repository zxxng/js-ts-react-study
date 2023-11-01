(() => {
  interface Todo {
    readonly _id: number;
    title: string;
    content: string;
    done?: boolean;
  }
  interface Toggle {
    // 꼭 param 이라고 지정할 필요는 없다
    (param: Todo): void;
  }

  var todo1: Todo = {
    _id: 1,
    title: '할일1',
    content: '인터페이스 사용.',
    done: false,
  };

  var todo2: Todo = {
    _id: 2,
    title: '할일2',
    content: '인터페이스 사용2',
  };

  var toggleFn: Toggle = function (todo: Todo): void {
    todo.done = !todo.done;
  };

  // todo1._id = 3;
  todo1.title = '집에가자';

  toggleFn(todo1);
  toggleFn(todo1);
  console.log(todo1, todo2);
})();
