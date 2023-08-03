class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  geName(name: string) {
    return name;
  }
}

const personObj = new Person("Hammad", 19);
export default Person;
