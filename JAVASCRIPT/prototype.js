function car (model, year) {
    this.model = model;
    this.year = year;
};
let c1 = new car("Mustang", 1964);
let c2 = new car("Corolla", 1996)

car.prototype.color = "Red";

car.prototype.drive = function () {
    console.log(`Driving ${this.model}`);
}

console.log(`${c1.model} color : ${c1.color}`);
console.log(`${c2.model} color: ${c2.color}`);

c1.drive();
c2.drive();