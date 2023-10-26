﻿// ex03-04.js 복사
// 고등학교 성적관리 생성자 함수(총점과 평균 계산)
function HighSchool(kor, eng) {
  this.kor = kor;
  this.eng = eng;
}
HighSchool.prototype.sum = function () {
  return this.kor + this.eng;
};
HighSchool.prototype.avg = function () {
  return this.sum() / 2;
};

var s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());

// 대학교 성적관리 생성자 함수(총점, 평균, 학점 계산)
function College(kor, eng) {
  // this.kor = kor;
  // this.eng = eng;
  HighSchool.call(this, kor, eng);
}

// College가 HighSchool을 상속받는다.
inherite(HighSchool, College);

function inherite(Parent, Child) {
  // F 생성 이유 :  아무것도 없는것을 생성한다. -> 스쿨은 constructor 같이 생성되자나!
  // let F = function () {};
  // F.prototype = Parent.prototype;
  // Child.prototype = new F();
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

// 학점 계산
College.prototype.grade = function () {
  var grade = 'F';
  var avg = this.avg();
  if (avg >= 90) {
    grade = 'A';
  } else if (avg >= 80) {
    grade = 'B';
  } else if (avg >= 70) {
    grade = 'C';
  } else if (avg >= 60) {
    grade = 'D';
  }
  return grade;
};

var s2 = new College(80, 71);
console.log(s2.sum());
console.log(s2.avg());
console.log(s2.grade());
