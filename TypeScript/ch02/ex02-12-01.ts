(() => {
  interface TodoInfoDetail {
    _id: number;
    title: string;
    content: string;
    done: boolean;
    createAt: Date;
    updateAt: Date;
  }

  type TodoRegist = Pick<TodoInfoDetail, 'title' | 'content'>;
  type TodoInfo = Omit<TodoInfoDetail, 'createAt' | 'updateAt'>;
  type TodoList = Omit<TodoInfo, 'content'>;

  var todo1: TodoRegist = {
    title: '할일 1',
    content: '등록에 사용',
  };
  var todo2: TodoInfo = {
    _id: 2,
    title: '할일 2',
    content: '상세조회에 사용',
    done: true,
  };
  var todo3: TodoList = {
    _id: 3,
    title: '할일 3',
    done: true,
  };

  console.log(todo1, todo2, todo3);
})();
