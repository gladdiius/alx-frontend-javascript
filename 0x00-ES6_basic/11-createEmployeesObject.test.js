import createEmployeesObject from './11-createEmployeesObject.js';

test('returns the correct {...} object', () => {
    expect(createEmployeesObject("Software", [ "Bob", "Sylvie" ])).toEqual({ Software: [ 'Bob', 'Sylvie' ] });
});
