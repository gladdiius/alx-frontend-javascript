import Building from './5-building.js';

describe('Building', () => {
    // Test constructor
    test('constructor initializes attributes correctly', () => {
        const building = new Building(100);
        expect(building._sqft).toBe(100);
    });

    // Test sqft attribute getter
    test('sqft getter', () => {
        const building = new Building(100);
        expect(building.sqft).toBe(100);
    });

    // Test evacuationWarningMessage method
    test('evacuationWarningMessage throws error if not overridden', () => {
        const building = new Building(100);
        expect(() => building.evacuationWarningMessage()).toThrowError('Class extending Building must override evacuationWarningMessage');
    });
});
