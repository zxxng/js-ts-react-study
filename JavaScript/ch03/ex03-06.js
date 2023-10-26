// ex03-05.js 복사
// 고등학교 성적관리 생성자 함수(총점과 평균 계산)
// (function () {})();
class HighSchool {
  constructor(kor, eng) {
    this.kor = kor;
    this.eng = eng;
  }
  // 순수 함수에는 static 사용
  // 매개변수에만 의존하는 거니까, 굳이 의존성을 안둬도..
  static getTotal() {
    return 100;
  }
  // 하이 함수는 this의 영향을 받기 때문에 static 하지말자
  sum() {
    return this.kor + this.eng;
  }
  avg() {
    return this.sum() / 2;
  }
}

var s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());

// 대학교 성적관리 생성자 함수(총점, 평균, 학점 계산)
class College extends HighSchool {
  constructor(kor, eng) {
    super(kor, eng);
  }
  // 학점 계산
  grade() {
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
  }
}

var s2 = new College(80, 71);
console.log(s2.sum());
console.log(s2.avg());
console.log(s2.grade());
