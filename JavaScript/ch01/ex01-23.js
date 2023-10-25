// 함수의 매개변수에 적용 (마지막 매개변수에만 사용 가능)
// function fn(a, b, ...restNumbers, c) {
// function fn(a, b, ...restNumbers, ...c) {
function fn(a, b, ...restNumbers) {
  console.log(a, b, restNumbers);
}

fn();
fn(1);
fn(2, 3);
fn(4, 5, 6);
fn(7, 8, 9, 10, 11);

// 구조 분해 할당에서 사용
var [first, second, ...rest] = [100, 200, 300, 400];
console.log(first, second, rest);

var user = {
  name: '김철수',
  age: 30,
  phone: '0102223333',
  address: '서울특별시 종로구 종로3길 17 D타워, 16-17층 (주)멋쟁이사자처럼',
};

var { name, age, ...etc } = user;
console.log(name, age, etc.phone, etc.address);
