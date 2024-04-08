import taskBlock from './1-block-scoped.js';


test('two plus two is four', () => {
    expect(taskBlock()).toEqual([ false, true ]);
  });