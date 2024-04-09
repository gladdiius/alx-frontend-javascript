import getFullBudgetObject from './9-getFullBudget.js';

describe('test object functions', () => {
    let fullBudget;

    beforeEach(() => {
        fullBudget = getFullBudgetObject(20, 50, 10);
    });

    it('should return income in euros', () => {
        expect(fullBudget.getIncomeInEuros(fullBudget.income)).toBe('20 euros');
    });

    it('should return income in dollars', () => {
        expect(fullBudget.getIncomeInDollars(fullBudget.income)).toBe('$20');
    });
});
