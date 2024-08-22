const person =  {
    name : 'Bal Govind',
    age : 24,
    city : 'Lucknow'
};

const personName = person.name;

person.occupation = 'student';

person.printInfo = function () {
    console.log(`Hii, I'm ${this.name}.I'm ${this.age} years old and I live in ${this.city}`);   
};

person.printInfo();

