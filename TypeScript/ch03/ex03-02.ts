(() => {
  interface Todo {
    _id: string;
    title: string;
    content?: string;
  }

  const todo1: Required<Todo> = {
    _id: '1',
    title: '제목1',
    content: '내용1',
  };

  console.log(todo1);
})();
