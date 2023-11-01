"use strict";
// 클래스의 타입 지정에 인터페이스 사용
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
            return this.sum() / 2;
        }
    }
    const kim = new HighSchool(100, 90);
    console.log(kim.sum(), kim.avg());
})();
