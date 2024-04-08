import returnHowManyArguments from './4-rest-parameter.js';

test('two plus two is four', () => {
    expect(returnHowManyArguments("one")).toEqual(1);
    expect(returnHowManyArguments("one", "two", 3, "4th")).toEqual(4);
 });