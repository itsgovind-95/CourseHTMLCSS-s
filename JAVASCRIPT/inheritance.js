class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  class Student extends Person {
    constructor(name, age, major) {
      super(name, age);
      this.major = major;
    }
  
    introduce() {
      super.introduce();
      console.log(`I am studying ${this.major}.`);
    }
  }
  
  const john = new Student("John", 20, "Computer Science");
  john.introduce();