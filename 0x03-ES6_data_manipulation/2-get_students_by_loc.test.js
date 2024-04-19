import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

describe('getStudentsByLocation function', () => {

    // Test for valid input
    test('should return students with matching location', () => {
        const students = getListStudents();
        const expectedResult = [
            { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
            { id: 5, firstName: 'Serena', location: 'San Francisco' }
        ];
        expect(getStudentsByLocation(students, 'San Francisco')).toEqual(expectedResult);
    });

    // Test for invalid input: string
    test('should return empty array for non-array input (string)', () => {
        expect(getStudentsByLocation('elias', 'San Francisco')).toEqual([]);
    });

    // Test for invalid input: number
    test('should return empty array for non-array input (number)', () => {
        expect(getStudentsByLocation(3, 'San Francisco')).toEqual([]);
    });

    // Additional test cases can be added here for other scenarios if needed

});
