import HolbertonCourse from './2-hbtn_course.js';

describe('HolbertonCourse', () => {
    // Test constructor
    test('constructor initializes attributes correctly', () => {
        const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
        expect(course._name).toBe('ES6');
        expect(course._length).toBe(1);
        expect(course._students).toEqual(['Bob', 'Jane']);
    });

    // Test name attribute
    test('name getter and setter', () => {
        const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
        expect(course.name).toBe('ES6');
        course.name = 'Python 101';
        expect(course.name).toBe('Python 101');
        expect(() => { course.name = 12 }).toThrow(TypeError);
    });

    // Test length attribute
    test('length getter and setter', () => {
        const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
        expect(course.length).toBe(1);
        course.length = 2;
        expect(course.length).toBe(2);
        expect(() => { course.length = 'two' }).toThrow(TypeError);
    });

    // Test students attribute
    test('students getter and setter', () => {
        const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
        expect(course.students).toEqual(['Bob', 'Jane']);
        course.students = ['Alice', 'John'];
        expect(course.students).toEqual(['Alice', 'John']);
        expect(() => { course.students = ['Alice', 123] }).toThrow(TypeError);
    });
});
