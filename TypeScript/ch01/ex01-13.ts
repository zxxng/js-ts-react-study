// index signature, string
(() => {
  interface User {
    name: string;
    email: string;
    age?: number;
    // phone?: string;
    // address?: string;
    // hobby?: string;
    // ...
    [info: string]: string | number | undefined;
  }

  var kim: User = {
    name: '김철수',
    email: 'kim@gamil.com',
    age: 30,
    phone: '010...',
    address: '서울시 ...',
    hobby: '독서',
  };

  var lee: User = {
    name: '이영희',
    email: 'lee@gmail.com',
  };

  console.log(kim, lee);
})();
