import Person from "./person.js";

class Student extends Person {
  rollNumber: string;
  courses: string[] = [];
  constructor(name: string, age: number, rollNumber: string) {
    super(name, age);
    this.rollNumber = rollNumber;
  }

  registerForCourses(course: string) {
    this.courses.push(course);
  }
}

export const studentObj1 = new Student("Afzal", 18, "roll1");
studentObj1.registerForCourses("WMD");
export default Student;
