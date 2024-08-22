class Shape {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }

    getArea(){
        
    }
    getPerimeter(){

    }
}

class Rectangle extends Shape {
    constructor(color, name, length, width) {
        super(color , name);
        this.length = length;
        this.width = width;
    }

    getArea(length, width){
        return this.length * this.width;
    }

    getPerimeter(length, width){
        return 2 * (this.length + this.width);
    }
}
let rectangle = new Rectangle("Blue","Rectangle",4, 3);
const resultArea = rectangle.getArea();
console.log(`Shape is ${rectangle.name}. \n length : ${rectangle.length} \n width : ${rectangle.width} \n Area is ${resultArea}`);
const resultPeri = rectangle.getPerimeter();
console.log(`Shape is ${rectangle.name}. \n length : ${rectangle.length} \n width : ${rectangle.width} \n Perimeter is ${resultPeri}`);