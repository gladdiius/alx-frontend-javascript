import getListStudentIds from "./1-get_list_student_ids"
import getListStudents from "./0-get_list_students.js";


test('check if the func return an array',()=>{
    expect(getListStudentIds("hello")).toEqual([]);
    expect(getListStudentIds(getListStudents())).toEqual([ 1, 2, 5 ])

})