// ex01-18.ts 복사
(() => {
  const JS = 'Javascript';
  const TS = 'Typescript';
  const REACT = 'React';

  function getSchedule(subject: string): string | undefined | void {
    // if (js = subject) { // 할당하는 대입연산자가 되었다.
    if (JS === subject) {
      return `${subject} 수업은 4일 교육 + 2일 프로젝트 입니다.`;
    } else if (TS === subject) {
      return `${subject} 수업은 3일 교육 + 1일 프로젝트 입니다.`;
    }
  }
  const jsSchedule = getSchedule(JS);
  const tsSchedule = getSchedule(TS);

  console.log(jsSchedule, tsSchedule);
})();
