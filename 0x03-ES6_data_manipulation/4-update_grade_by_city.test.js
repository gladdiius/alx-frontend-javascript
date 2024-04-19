import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

jest.mock("./0-get_list_students.js");

describe("updateStudentGradeByCity function", () => {
  const mockStudents = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 85 },
    { id: 2, firstName: 'Alice', location: 'New York', grade: 90 },
    { id: 3, firstName: 'Bob', location: 'San Francisco', grade: 88 },
    { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 95 }
  ];

  getListStudents.mockReturnValue(mockStudents);

  it("should update grades for students in San Francisco", () => {
    const newGrades = [
      { studentId: 1, grade: 86 },
      { studentId: 5, grade: 97 }
    ];

    const result = updateStudentGradeByCity(mockStudents, "San Francisco", newGrades);

    expect(result).toContainEqual(
      { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 86 }
    );
    expect(result).toContainEqual(
      { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
    );
  });
});
