
import { Point } from "./point";
import { Triangle } from "./triangle";


//creo objetos point
let vertex1 = new Point(0, 0);
let vertex2 = new Point(3, 0);
let vertex3 = new Point(0, 4);

const myTriangle = new Triangle(vertex1, vertex2, vertex3);

// Probar el método calculateLengthSides()
let lados = myTriangle.calculateLengthSides();
console.log("Longitudes de los lados del triángulo:", lados);

