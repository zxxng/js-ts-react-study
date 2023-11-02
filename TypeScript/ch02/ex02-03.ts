// ex02-02.ts 복사
(() => {
  interface IHighSchool {
    avg(): number;
  }

  class HighSchool implements IHighSchool {
    private kor: number;
    private eng: number;
    constructor(kor: number, eng: number) {
      this.kor = kor;
      this.eng = eng;
    }
    private sum(): number {
      return this.kor + this.eng;
    }
    avg(): number {
      return Math.round(this.sum() / 2) /*.toFixed(0)*/;
    }
  }
  var s1 = new HighSchool(100, 91);
  console.log('평균', s1.avg());

  // 잘못된 사용
  // s1.eng = 99;
  // console.log('평균', s1.sum() / 2);
})();
