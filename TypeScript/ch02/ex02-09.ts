(() => {
  interface CityDropdown {
    value: string;
    selected: boolean;
  }

  interface ZipcodeDropdown {
    value: number;
    selected: boolean;
  }

  function createDropdown1(list: CityDropdown[]): string {
    let result = '<select>';
    list.forEach((city) => {
      result += `<option ${city.selected ? 'selected' : ''}>${
        city.value
      }</option>`;
    });
    return (result += '</select>');
  }
  function createDropdown2(list: ZipcodeDropdown[]): string {
    let result = '<select>';
    list.forEach((city) => {
      result += `<option ${city.selected ? 'selected' : ''}>${
        city.value
      }</option>`;
    });
    return (result += '</select>');
  }

  var cityList: CityDropdown[] = [
    { value: '서울시', selected: false },
    { value: '인천시', selected: true },
    { value: '광주시', selected: false },
  ];

  var zipcodeList: ZipcodeDropdown[] = [
    { value: 12345, selected: false },
    { value: 33808, selected: false },
    { value: 56799, selected: false },
  ];

  const cityTag = createDropdown1(cityList);
  const zipTag = createDropdown2(zipcodeList);
  console.log(cityTag);
  console.log(zipTag);
})();
