import Person from "./person.js";

class Instructor extends Person {
  private salary: number;
  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }
  courses: string[] = [];
  assignCourse(course: string) {
    this.courses.push(course);
  }
}

export const instructorObj1 = new Instructor("Zia Khan", 63, 1000000);
instructorObj1.assignCourse("WEB 3.0 & Metaverse Development");
export default Instructor;
