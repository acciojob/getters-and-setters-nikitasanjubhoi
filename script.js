// Person class with getter and setter
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for age (optional, since you want to check age after setting)
  get age() {
    return this._age;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }
}

// Student class extending Person
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher class extending Person
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
const person = new Person("John", 25);
console.log(person.name); // John
person.age = 30;
console.log(person.age); // 30

const student = new Student("Alice", 22);
student.study(); // Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Bob is teaching
