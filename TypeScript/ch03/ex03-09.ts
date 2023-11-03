(() => {
  // 기본 데이터 타입은 추론
  var name = 'kim';
  var age = 30;
  // var address; // any
  var address: string; // 선언을 먼저 할 경우는 타입을 지정하도록 한다.
  address = ' 경기도';

  interface Todo {
    title: string;
    content: string;
  }

  // 객체는 타입 별칭이나 인터페이스를 지정해야 안전하게 사용 가능
  var todo1: Todo = {
    title: '제목1',
    content: '내용1',
  };
})();
