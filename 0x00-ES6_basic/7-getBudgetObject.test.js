import getBudgetObject from './7-getBudgetObject.js';

test('return {..} object',() =>{
    expect(getBudgetObject(400, 700, 900)).toEqual({ income: 400, gdp: 700, capita: 900 })
});