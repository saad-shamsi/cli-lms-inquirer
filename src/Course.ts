import Student from "./Student.js";
import Instructor from "./instructor.js";
import { studentObj1 } from "./Student.js";
import { instructorObj1 } from "./instructor.js";
class Course {
  static count: number = 0;
  id: number;
  name: string;
  students: Student[] = [];
  instructor: Instructor[] = [];

  constructor(name: string) {
    this.name = name;
    this.id = ++Course.count;
  }
  addStudent(studnet: Student) {
    this.students.push(studnet);
  }
  setInstructor(instructor: Instructor) {
    this.instructor.push(instructor);
  }
}

export const courseObj = new Course("web2");
export const courseObj2 = new Course("web2");
export const courseObj3 = new Course("web2");
export const courseObj4 = new Course("web2");
courseObj.addStudent(studentObj1);
courseObj.setInstructor(instructorObj1);

export default Course;
