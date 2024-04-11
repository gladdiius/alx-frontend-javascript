import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

describe('Pricing', () => {
    // Test constructor
    test('constructor initializes attributes correctly', () => {
        const currency = new Currency('EUR', 'Euro');
        const pricing = new Pricing(100, currency);
        expect(pricing._amount).toBe(100);
        expect(pricing._currency).toBe(currency);
    });

    // Test amount attribute
    test('amount getter and setter', () => {
        const pricing = new Pricing(100, new Currency('EUR', 'Euro'));
        expect(pricing.amount).toBe(100);
        pricing.amount = 200;
        expect(pricing.amount).toBe(200);
    });

    // Test currency attribute
    test('currency getter and setter', () => {
        const currency1 = new Currency('EUR', 'Euro');
        const currency2 = new Currency('USD', 'Dollar');
        const pricing = new Pricing(100, currency1);
        expect(pricing.currency).toBe(currency1);
        pricing.currency = currency2;
        expect(pricing.currency).toBe(currency2);
    });

    // Test displayFullPrice method
    test('displayFullPrice method', () => {
        const currency = new Currency('EUR', 'Euro');
        const pricing = new Pricing(100, currency);
        expect(pricing.displayFullPrice()).toBe('100 Euro (EUR)');
    });

    // Test convertPrice static method
    test('convertPrice static method', () => {
        expect(Pricing.convertPrice(100, 0.9)).toBe(90);
        expect(Pricing.convertPrice(100, 1.1)).toBe(110);
    });
});
