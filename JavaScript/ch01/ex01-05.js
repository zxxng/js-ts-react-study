// 생성자 함수
var foo = new Object();
foo.name = 'lee';
foo['age'] = 30;
foo.job = 'student';
foo['merried'] = false;

console.log(foo['name'], foo.age, foo.job, foo['merried']);
console.log(typeof foo, foo);
