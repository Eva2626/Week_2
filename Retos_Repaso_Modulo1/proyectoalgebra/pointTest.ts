import { Point } from "./point";

let puntoXY = new Point (3, 4); 

console.log(`Coordenadas: ${puntoXY.getX()}, ${puntoXY.getY()}`); // devuelve: Coordenadas: 2, 4
console.log (`Coordenadas en texto: ${puntoXY.toString()}`); // devuelve x,y juntas entre paréntesis : Coordenadas en texto: (2, 4)
console.log(puntoXY.calculateQuadrant());

//reto2//
let myPoint = new Point(3, 4);
console.log(myPoint.distanceToOrigin()); // Debería imprimir la distancia al origen (5)
let anotherPoint = new Point(1, 1);
console.log(myPoint.calculateDistance(anotherPoint)); // Debería imprimir la distancia entre los 2 puntos
//reto3//
console.log(myPoint.calculateQuadrant()); // Debería imprimir el cuadrante (1)
//reto4//
//let myPoint = new Point(3, 4);
let points = [new Point(1, 1), new Point(5, 5), new Point(-1, 0)];
let nearest = myPoint.calculateNearest(points);
console.log(nearest.toString()); // Debería imprimir el punto más cercano


