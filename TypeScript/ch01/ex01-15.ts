// 인터페이스 상속의 계층 구조
// ex01-14.ts 복사
(function () {
  interface Todo {
    title: string;
    content: string;
  }

  interface TodoInfo extends Todo {
    // title: string;
    // content: string;
    readonly _id: number;
    done?: boolean;
  }

  interface TodoInfoTime extends TodoInfo {
    // 생성자 함수도 타입으로 지정 가능
    createdAt: Date;
    updateAt: Date;
  }

  var todo1: Todo = {
    title: '할일1',
    content: '등록할 때 사용',
  };

  var todo2: TodoInfo = {
    _id: 2,
    title: '할일2',
    content: '상세 조회에 사용',
  };

  var todo3: TodoInfoTime = {
    _id: 3,
    title: '할일3',
    content: '시간을 포함한 상세 조회에 사용',
    done: true,
    createdAt: new Date(),
    updateAt: new Date(),
  };

  console.log(todo1, todo2, todo3);
})();
