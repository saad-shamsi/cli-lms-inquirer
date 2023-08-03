import course from "./course.js";

class Department {
  name: string;
  courses: course[] = [];
  constructor(name: string) {
    this.name = name;
  }
  addCourse(course: course) {
    this.courses.push(course);
  }
}

const departmentObj = new Department("Department Of Art And Tech");
