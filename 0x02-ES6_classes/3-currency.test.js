import Currency from './3-currency.js';

describe('Currency', () => {
    // Test constructor
    test('constructor initializes attributes correctly', () => {
        const currency = new Currency('$', 'Dollars');
        expect(currency._code).toBe('$');
        expect(currency._name).toBe('Dollars');
    });

    // Test code attribute
    test('code getter and setter', () => {
        const currency = new Currency('$', 'Dollars');
        expect(currency.code).toBe('$');
        currency.code = '€';
        expect(currency.code).toBe('€');
    });

    // Test name attribute
    test('name getter and setter', () => {
        const currency = new Currency('$', 'Dollars');
        expect(currency.name).toBe('Dollars');
        currency.name = 'Euros';
        expect(currency.name).toBe('Euros');
    });

    // Test displayFullCurrency method
    test('displayFullCurrency method', () => {
        const currency = new Currency('$', 'Dollars');
        expect(currency.displayFullCurrency()).toBe('Dollars ($)');
    });
});
