import concatArrays from './5-spread-operator';

test('two plus two is four', () => {
    expect(concatArrays(['a', 'b'], ['c', 'd'], 'Hello')).toEqual(
        ['a', 'b', 'c','d', 'H', 'e','l', 'l', 'o']);
   
 });