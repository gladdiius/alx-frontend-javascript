import Airport from './7-airport.js';

describe('Airport', () => {
    // Test constructor
    test('constructor initializes attributes correctly', () => {
        const airport = new Airport('San Francisco Airport', 'SFO');
        expect(airport._name).toBe('San Francisco Airport');
        expect(airport._code).toBe('SFO');
    });

    // Test name attribute getter
    test('name getter', () => {
        const airport = new Airport('San Francisco Airport', 'SFO');
        expect(airport.name).toBe('San Francisco Airport');
    });

    // Test code attribute getter
    test('code getter', () => {
        const airport = new Airport('San Francisco Airport', 'SFO');
        expect(airport.code).toBe('SFO');
    });

    // Test custom string representation
    test('toString method returns correct string representation', () => {
        const airport = new Airport('San Francisco Airport', 'SFO');
        expect(airport.toString()).toBe('[object SFO]');
    });
});