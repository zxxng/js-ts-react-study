(() => {
  interface Todo {
    title: string;
    content: string;
  }

  const todo1: Readonly<Todo> = {
    title: '할일1',
    content: '내용1',
  };

  // todo1.title = '수정1';
  console.log(todo1);
})();
