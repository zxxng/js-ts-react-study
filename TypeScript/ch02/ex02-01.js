(() => {
  class HighSchool {
    constructor(kor, eng) {
      this.kor = kor;
      this.eng = eng;
    }
    sum() {
      return this.kor + this.eng;
    }
    avg() {
      return Math.round(this.sum() / 2) /*.toFixed(0)*/;
    }
  }
  var s1 = new HighSchool(100, 91);
  console.log('평균', s1.avg());

  // 잘못된 사용
  s1.eng = 99;
  console.log('평균', s1.sum() / 2);
})();
