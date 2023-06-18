"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Shape_1 = require("./Shape");

var Circle_1 = require("./Circle");

var Rectangle_1 = require("./Rectangle");

var myShape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectangle = new Rectangle_1.Rectangle(5, 10, 2, 3); //declare an array of shapes... initially empty

var theShapes = []; //add the shapes to the array

theShapes.push(myCircle);
theShapes.push(myShape);
theShapes.push(myRectangle);
console.log(theShapes); //iterating

for (var _i = 0, _theShapes = theShapes; _i < _theShapes.length; _i++) {
  var i = _theShapes[_i];
  console.log(i.getInfo());
}