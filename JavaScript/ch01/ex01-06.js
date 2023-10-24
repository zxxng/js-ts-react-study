// JSON 표기법
var foo = {
  name: 'lee',
  age: 35,
  job: 'teacher',
  merried: true,
};

console.log(foo['name'], foo.age, foo.job, foo['merried']);
console.log(typeof foo, foo);

// 객체를 문자열로 변환
var strFoo = JSON.stringify(foo);
console.log(typeof strFoo, strFoo);

// 문자열을 객체로 변환
var objFoo = JSON.parse(strFoo);
console.log(typeof objFoo, objFoo, objFoo.age);
