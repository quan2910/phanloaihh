class Shape {
    color;
    filled
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
}
class Circle {
    color;
    radius;
    filled;
    constructor(color, radius, filled) {
        this.color = color;
        this.radius = radius;
        this.filled = filled;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
    getPerimeter() {
        return 2 * this.radius * Math.PI
    }
}
class Rectangle {
    width;
    length;
    color;
    filled;
    constructor(width, length, color, filled) {
        this.filled = filled;
        this.color = color;
        this.width = width;
        this.length = length;
    }
    getArea(){
        return this.width * this.length;
    }
    getPerimeter() {
        return 2 * (this.width + this.length)
    }
}
class Square {
    color;
    filled;
    side;
    constructor(color, filled, side) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
}
let shape = new Shape("red", false);
console(shape);
let circle = new Circle("indigo" , 3.5, false);
console.log(circle);
let rectangle = new Rectangle(2.5, 3.8, "orange", true);
console.log(rectangle);
let square = new Shape("yellow", true, 5.8)
console.log(square);

