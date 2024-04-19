import getListStudents from './0-get_list_students';

describe('getListStudents function', () => {
  it('should return an array of student objects', () => {
    const students = getListStudents();

    expect(Array.isArray(students)).toBe(true);
    expect(students.length).toBe(3);
    
    students.forEach(student => {
      expect(typeof student.id).toBe('number');
      expect(typeof student.firstName).toBe('string');
      expect(typeof student.location).toBe('string');
    });
  });

  it('should have the correct student data', () => {
    const students = getListStudents();

    expect(students).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]);
  });
});
