"use strict";
// RETO1//
// 1. Trabajar en la rama repaso4, crear una nueva carpeta denominada algebraProject y crear el
// fichero point.ts.
// 2. Dicho fichero debe contener la clase Point con los siguientes atributos privados:
// • x: number
// • y: number
// 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
// 4. Crear los métodos setters y getters para todos los atributos de la clase.
// Crear un método toString() que convierta a texto las coordenadas del punto. Debe devolver: “(x,y)”–
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x; //parametros
        this.y = y;
    }
    //metodos getters,setters y toString()
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (newX) {
        this.x = newX;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setY = function (newY) {
        this.y = newY;
    };
    Point.prototype.toString = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    // RETO2// 
    // 1. Crear un método denominado distanceToOrigin():number que devuelva la distancia del
    // punto al origen de coordenadas (0,0).
    // NOTA: Buscar en Google la formula para calcular la distancia.
    // 2. Crear un método denominado calculateDistance(anotherPoint:Point):number, que
    // devuelva la distancia entre el punto representado por la instancia actual del objeto y otra
    // instancia de Punto que se recibe como parámetro denominada anotherPoint.
    // NOTA: Buscar en Google la formula para calcular la distancia entre dos puntos.
    Point.prototype.distanceToOrigin = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var puntoX = anotherPoint.x - this.x;
        var puntoY = anotherPoint.y - this.y;
        return Math.sqrt(puntoX * puntoX + puntoY * puntoY);
    };
    //RETO 3//
    Point.prototype.calculateQuadrant = function () {
        var cuadrante = 0;
        if (this.x === 0 && this.y === 0) {
            cuadrante = 0;
        }
        else if (this.x > 0 && this.y > 0) {
            cuadrante = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            cuadrante = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            cuadrante = 3;
        }
        else {
            cuadrante = 4;
        }
        return cuadrante;
    };
    Point.prototype.calculateNearest = function (points) {
        var nearestPoint = points[0]; // guarda primera posicion del array que recibe x parametro 
        var nearestDistance = this.calculateDistance(points[0]); // calcula la distancia que hay hasta el punto nearest point
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) { // recorre el array de points
            var point = points_1[_i];
            var distance = this.calculateDistance(point); // calcula distancia de cada punto del array
            if (distance < nearestDistance) { // si la distancia es menor que la que se ha guardado en nearestDistancia
                nearestPoint = point; // guarada el punto mas cercano
                nearestDistance = distance; // guarda la distancia más cercana
            }
        }
        return nearestPoint;
    };
    return Point;
}());
exports.Point = Point;
;
