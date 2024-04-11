import Car from './10-car.js';

describe('Car', () => {
    // Test constructor
    test('constructor initializes attributes correctly', () => {
        const car = new Car('Nissan', 'Turbo', 'Pink');
        expect(car._brand).toBeUndefined();
        expect(car._motor).toBeUndefined();
        expect(car._color).toBeUndefined();
    });

    // Test cloneCar method
    test('cloneCar method creates a new Car object', () => {
        const car1 = new Car('Nissan', 'Turbo', 'Pink');
        const car2 = car1.cloneCar();
        expect(car2).toBeInstanceOf(Car);
    });
});
