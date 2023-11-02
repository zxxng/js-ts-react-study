// ex01-19.ts 복사
(() => {
  // 읽기 전용으로 하고 싶다
  type Readonly = {
    // readonly JS: string;
    // readonly TS: string;
    // readonly REACT: string;
    readonly [language: string]: string;
  };

  const ClassName: Readonly = {
    JS: 'Javascript',
    TS: 'Typescript',
    REACT: 'React',
  };

  function getSchedule(subject: string): string | undefined | void {
    // if (ClassName.JS = subject) { // 할당하는 대입연산자가 되었다.
    if (ClassName.JS === subject) {
      return `${subject} 수업은 4일 교육 + 2일 프로젝트 입니다.`;
    } else if (ClassName.TS === subject) {
      return `${subject} 수업은 3일 교육 + 1일 프로젝트 입니다.`;
    }
  }
  const jsSchedule = getSchedule(ClassName.JS);
  const tsSchedule = getSchedule(ClassName.TS);

  console.log(jsSchedule, tsSchedule);
})();
