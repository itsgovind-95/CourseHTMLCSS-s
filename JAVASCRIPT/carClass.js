class Car {
    constructor (name, year, model){
        this.name = name;
        this.year = year;
        this.model = model;
    }

    carInfo(){
        console.log(`Name: ${this.name}, Year: ${this.year}, Model: ${this.model}`);
    }
    drive(){
        console.log(`${this.name} is driving`)
    }
}

const mycar = new Car("Honda XUV",2020, "EV");
mycar.carInfo();
mycar.drive();