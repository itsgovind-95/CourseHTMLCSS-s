class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
      introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age}`);
    }
  }
  
  const person1 = new Person("John", 30);
  person1.introduce();