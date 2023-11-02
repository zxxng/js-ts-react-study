(() => {
  interface Dropdown<T> {
    value: T;
    selected: boolean;
  }

  function createDropdown<T>(list: Dropdown<T>[]): string {
    let result = '<select>';
    list.forEach((city) => {
      result += `<option ${city.selected ? 'selected' : ''}>${
        city.value
      }</option>`;
    });
    return (result += '</select>');
  }

  var cityList: Dropdown<string>[] = [
    { value: '서울시', selected: false },
    { value: '인천시', selected: true },
    { value: '광주시', selected: false },
  ];

  var zipcodeList: Dropdown<number>[] = [
    { value: 12345, selected: false },
    { value: 33808, selected: false },
    { value: 56799, selected: false },
  ];

  const cityTag = createDropdown<string>(cityList);
  const zipTag = createDropdown<number>(zipcodeList);
  console.log(cityTag);
  console.log(zipTag);
})();
