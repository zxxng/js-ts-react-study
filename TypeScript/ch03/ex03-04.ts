(() => {
  interface TodoInfoDetail {
    _id: number;
    title: string;
    content: string;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  type TodoRegist = Pick<TodoInfoDetail, 'title' | 'content'>;

  var todo1: TodoRegist = {
    title: '할일 1',
    content: '등록에 사용',
  };

  console.log(todo1);
})();
