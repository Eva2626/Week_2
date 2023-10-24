"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var puntoXY = new point_1.Point(3, 4);
console.log("Coordenadas: ".concat(puntoXY.getX(), ", ").concat(puntoXY.getY())); // devuelve: Coordenadas: 2, 4
console.log("Coordenadas en texto: ".concat(puntoXY.toString())); // devuelve x,y juntas entre paréntesis : Coordenadas en texto: (2, 4)
console.log(puntoXY.calculateQuadrant());
//reto2//
var myPoint = new point_1.Point(3, 4);
console.log(myPoint.distanceToOrigin()); // Debería imprimir la distancia al origen (5)
var anotherPoint = new point_1.Point(1, 1);
console.log(myPoint.calculateDistance(anotherPoint)); // Debería imprimir la distancia entre los 2 puntos
//reto3//
console.log(myPoint.calculateQuadrant()); // Debería imprimir el cuadrante (1)
//reto4//
//let myPoint = new Point(3, 4);
var points = [new point_1.Point(1, 1), new point_1.Point(5, 5), new point_1.Point(-1, 0)];
var nearest = myPoint.calculateNearest(points);
console.log(nearest.toString()); // Debería imprimir el punto más cercano
