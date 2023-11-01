(() => {
  // string
  var str: string = 'hello';

  // number
  var age: number = 30;

  // boolean
  var done: boolean = true;

  // object
  var todo: object = { title: 'Typescript 공부', done: false };

  // Array
  var items: Array<string> = ['JS공부', 'TS공부'];
  var todoList: string[] = ['JS 프로젝트', 'TS 프로젝트'];

  // tuple : 갯수가 지정되어 있고, 타입도 지정되어 있는 배열
  var users: [string, string] = ['김철수', '이영희'];
  // var users: [string, string] = ['김철수', 30];// error
  var user: [string, number] = ['김철수', 30];

  // any
  var userName: any = '이일구';
  userName = 219;

  // null
  var nullVal: null = null;

  // undefined
  var undefinedVal: undefined;

  console.log(
    str,
    age,
    done,
    todo,
    items,
    todoList,
    users,
    user,
    userName,
    nullVal,
    undefinedVal,
  );

  console.log(
    typeof str,
    typeof age,
    typeof done,
    typeof todo,
    typeof items,
    typeof todoList,
    typeof users,
    typeof user,
    typeof userName,
    typeof nullVal,
    typeof undefinedVal,
  );
})();
