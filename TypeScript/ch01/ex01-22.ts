// ex01-21.ts 복사
(() => {
  const enum ClassName {
    JS = 'Javascript',
    TS = 'Typescript',
    REACT = 'React',
  }

  function getSchedule(subject: ClassName): string | undefined | void {
    if (ClassName.JS === subject) {
      return `${subject} 수업은 4일 교육 + 2일 프로젝트 입니다.`;
    } else if (ClassName.TS === subject) {
      return `${subject} 수업은 3일 교육 + 1일 프로젝트 입니다.`;
    }
  }
  const jsSchedule = getSchedule(ClassName.JS);
  const tsSchedule = getSchedule(ClassName.TS);

  console.log(jsSchedule, tsSchedule);
  // console.log(ClassName);
})();
