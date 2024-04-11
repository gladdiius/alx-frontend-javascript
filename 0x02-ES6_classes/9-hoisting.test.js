import { HolbertonClass, StudentHolberton, listOfStudents } from './9-hoisting';

describe('StudentHolberton', () => {
    // Test constructor
    test('constructor initializes attributes correctly', () => {
        const holbertonClass = new HolbertonClass(2020, 'San Francisco');
        const student = new StudentHolberton('Guillaume', 'Salva', holbertonClass);
        expect(student._firstName).toBe('Guillaume');
        expect(student._lastName).toBe('Salva');
        expect(student._holbertonClass).toBe(holbertonClass);
    });

    // Test fullName getter
    test('fullName getter returns full name', () => {
        const holbertonClass = new HolbertonClass(2020, 'San Francisco');
        const student = new StudentHolberton('Guillaume', 'Salva', holbertonClass);
        expect(student.fullName).toBe('Guillaume Salva');
    });

    // Test holbertonClass getter
    test('holbertonClass getter returns Holberton class', () => {
        const holbertonClass = new HolbertonClass(2020, 'San Francisco');
        const student = new StudentHolberton('Guillaume', 'Salva', holbertonClass);
        expect(student.holbertonClass).toBe(holbertonClass);
    });

    // Test fullStudentDescription getter
    test('fullStudentDescription getter returns full student description', () => {
        const holbertonClass = new HolbertonClass(2020, 'San Francisco');
        const student = new StudentHolberton('Guillaume', 'Salva', holbertonClass);
        expect(student.fullStudentDescription).toBe('Guillaume Salva - 2020 - San Francisco');
    });
});

describe('listOfStudents', () => {
    // Test if listOfStudents array is populated correctly
    test('listOfStudents array is populated correctly', () => {
        expect(listOfStudents.length).toBe(5);
        // Add more tests here if needed
    });
});
