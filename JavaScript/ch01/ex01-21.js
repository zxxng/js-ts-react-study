// 구조 분해 할당
var colors = ['yellow', 'green', 'blue'];
var [one, two, three, four] = colors;
console.log(one, two, three, four);

// React
// const countState = useState(0);
// console.log(countState[0]);
// countState[1](countState[0] + 1);

// const [getCount, setCount] = useState(0);
// console.log(count);
// setCount(count + 1);

// var { userName, userAge } = { userName: '김철수', userAge: 35 };
var kim = { userName: '김철수', userAge: 35 };

// 객체는 순서가 중요하지 않기 때문에, 순서가 바뀌어도 상관없다.
var { userAge: age, userName } = kim;
console.log(kim.userName, kim.userAge);

// 선언된 변수에 적용
var first, second;
[first, second] = [100, 200, 300];
console.log(first, second);

({ first, second } = { first: 'orange', second: 'green', third: 'yellow' });
console.log(first, second);

// 기본값 할당(undefined 대체)
// var { userName, userAge } = { userName: '이영희', userAge: 25 };
var { userName, userAge = 20 } = { userName: '이영희' };

console.log(userName, userAge);

// 변수명 변경과 기본값 할당
var { userName: accountName = '게스트', userAge: age = 20 } = {
  userName: '이영희',
};
console.log(userName, age);

// 변수값 교환
var a = 100;
var b = 200;
var temp = a;
a = b;
b = temp;
console.log(a, b);

// 변수값 교환(구조 분해 할당)
[a, b] = [b, a];
console.log(a, b);

// 복합 객체에서 사용
var userList = [
  {
    name: '김철수',
    age: 30,
    course: {
      name: '멋사 6기',
    },
  },
  {
    name: '이영희',
    age: 35,
    course: {
      name: '멋사 8기',
    },
  },
];

// 이름과 코스명만 출력
for (var elem of userList) {
  console.log(elem.name, elem.course.name);
}

// 구조 분해 할당
for (var {
  name,
  course: { name: courseName },
} of userList) {
  console.log(name, courseName);
}
