(() => {
  var div = document.querySelector('div');

  // non null assertion ->? 타입스크립트의 장점을 살릴 수 없다. 비추천
  // div!.innerHTML = 'hello';

  console.log(div);
  if (div !== null) {
    // 타입 가드
    div.innerHTML = 'hello';
  }
})();
