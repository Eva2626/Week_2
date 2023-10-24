"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var triangle_1 = require("./triangle");
//creo objetos point
var vertex1 = new point_1.Point(0, 0);
var vertex2 = new point_1.Point(3, 0);
var vertex3 = new point_1.Point(0, 4);
var myTriangle = new triangle_1.Triangle(vertex1, vertex2, vertex3);
// Probar el método calculateLengthSides()
var lados = myTriangle.calculateLengthSides();
console.log("Longitudes de los lados del triángulo:", lados);
// Aquí puedes realizar más pruebas y trabajar con la instancia myTriangle según tus necesidades.
