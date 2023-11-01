(() => {
  // TODO: 에러나 경고가 발생하는 부분에 적절한 타입 선언

  let todoItems: Todo[] = [];

  // api
  function fetchTodoItems() {
    const todos: Todo[] = [
      { id: 1, title: '안녕', done: false },
      { id: 2, title: '타입', done: false },
      { id: 3, title: '스크립트', done: false },
    ];
    return todos;
  }

  // TODO: Todo Type 지정
  type Todo = { id: number; title: string; done: boolean };

  // crud methods
  function fetchTodos(): Todo[] {
    const todos = fetchTodoItems();
    return todos;
  }

  function addTodo(todo: Todo): void {
    todoItems.push(todo);
  }

  function deleteTodo(index: number): void {
    todoItems.splice(index, 1);
  }

  function completeTodo(index: number, todo: Todo): void {
    todo.done = true;
    todoItems.splice(index, 1, todo);
  }

  // business logic
  function logFirstTodo(): Todo {
    return todoItems[0];
  }

  function showCompleted(): Todo[] {
    return todoItems.filter((item) => item.done);
  }

  function addTwoTodoItems(todo1: Todo, todo2: Todo): void {
    // TODO: addTodo() 함수를 두 번 호출하여 todoItems에 할일 2개 추가
    addTodo(todo1);
    addTodo(todo2);

    const first = logFirstTodo();
    console.log('first : \n', first, '\n');

    deleteTodo(4);
    completeTodo(3, todoItems[3]);

    const result = showCompleted();
    console.log('result: \n', result, '\n');
  }

  // 1. Todo 목록을 가져온다.
  todoItems = fetchTodos();
  // 2. 2개의 Todo를 등록한다.
  const todo1: Todo = { id: 4, title: '리액트까지', done: false };
  const todo2: Todo = { id: 5, title: '가보자고', done: false };
  addTwoTodoItems(todo1, todo2);

  console.log('todoItems : \n', todoItems, '\n');
})();
