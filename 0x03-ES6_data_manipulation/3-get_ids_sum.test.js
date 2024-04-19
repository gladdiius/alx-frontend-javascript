import getStudentIdsSum from "./3-get_ids_sum";

describe('getStudentIdsSum function', () => {

    // Test for valid input
    test('should return sum of student ids', () => {
        const students = [
            { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
            { id: 5, firstName: 'Serena', location: 'San Francisco' }
        ];
        expect(getStudentIdsSum(students)).toEqual(6); // 1 + 5 = 6
    });

    // Test for invalid input
    test('should return 0 for non-array input', () => {
        expect(getStudentIdsSum('invalid input')).toEqual([]);
    });

});
