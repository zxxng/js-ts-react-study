// ex02-15.js 복사
var count = 0;
var counter = {
  count: 0,
  visit: function () {
    // 방문자를 한명 증가시킨다.
    this.count++; // this = counter
    // 화살표 함수는 this 전달이 되지 않는다.
    var visit2 = () => {
      this.count++; // this = conuter
    };
    visit2();
  },
};

counter.visit();
counter.visit();
console.log('합계', counter.count);

// var a = () => {
console.log(this); // window
// }
