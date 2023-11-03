// ex03-18.ts 복사
(() => {
  const kim: User = {
    name: '김철수',
    age: 30,
    nickname: '철슈',
  };

  const lee: UnkonwnUser = {
    name: '이영희',
    age: '비공개',
  };

  const hong: Admin = {
    name: '홍길동',
  };

  function printUser(user: User | UnkonwnUser | Admin) {
    // // User 타입일 경우 나이 출력
    // if ('age' in user && typeof user.age === 'number') {
    //   console.log((user as User).nickname);
    // }
    if (isUser(user)) {
      console.log(user.nickname);
    }
  }

  function isUser(user: User | UnkonwnUser | Admin): user is User {
    return typeof (user as User).age === 'number';
  }

  printUser(kim);
  printUser(lee);
  printUser(hong);
})();
