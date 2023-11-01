// 객체 타입 선언
(() => {
  // type alias
  type User = { name: string; age: number };

  // 객체 생성
  var kim: { name: string; age: number } = { name: '김철수', age: 30 };
  console.log(kim);

  function printUser(user: User): void {
    console.log(user.name, user.age);
  }
  printUser(kim);
  // var result: string = printUser(kim);
})();
