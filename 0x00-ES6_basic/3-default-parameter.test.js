import getSumOfHoods from './3-default-parameter.js';
test('two plus two is four', () => {
    expect(getSumOfHoods(34)).toEqual(142);
    expect(getSumOfHoods(34, 3)).toEqual(56);
    expect(getSumOfHoods(34, 3, 4)).toEqual(41);
  });