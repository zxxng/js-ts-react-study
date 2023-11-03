// ex03-13.ts 복사
(() => {
  // {}로 타입이 추론됨
  var todo1 = {} as Todo;
  todo1.title = '할일1';

  // { title: string }로 타입이 추론됨
  var todo2 = {
    title: '할일2',
  } as Todo;
  todo2.content = '내용2';

  var todo3 = {
    title: '할일3',
    content: '내용3',
  };
  todo3.content = '수정3';

  // 처음부터 타입스크립트로 만들었다면...
  interface Todo {
    title: string;
    content: string;
  }

  const todo4: Pick<Todo, 'title'> = {
    title: '할일4',
  };

  console.log(todo1, todo2, todo3);
})();
