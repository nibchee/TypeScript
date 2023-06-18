import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

//as cant instantiate abstarct class so removing it
//let myShape=new Shape(10,15);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(5, 10, 2, 3);


//declare an array of shapes... initially empty
let theShapes: Shape[] = [];

//add the shapes to the array
theShapes.push(myCircle);
//theShapes.push(myShape);
theShapes.push(myRectangle);

console.log(theShapes);


//iterating
for (let i of theShapes) {
    console.log(i.getInfo() + " Area is " + i.calculateArea());
    console.log();
}