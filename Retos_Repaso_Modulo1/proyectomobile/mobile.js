"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
// 1. Trabajar en la rama repaso2, crear una nueva carpeta denominada mobileProject y
// crear el fichero mobile.ts. Dicho fichero debe contener la clase Mobile con los siguientes
// atributos privados:
// • name: string //trademark: string//model: string//color: string//price: number
// 2. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
var Mobile = /** @class */ (function () {
    function Mobile(name, trademark, model, color, price) {
        this.name = name; // parametros mismos que abributos 
        this.trademark = trademark; // parametros mismos que abributos
        this.model = model; // parametros mismos que abributos
        this.color = color; // parametros mismos que abributos
        this.price = price; // parametros mismos que abributos
    }
    //Crear los métodos setters y getters para todos los atributos de la clase.
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setName = function (newName) {
        this.name = newName;
    };
    //
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setTrademark = function (newTrademark) {
        this.trademark = newTrademark;
    };
    //
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setModel = function (newModel) {
        this.model = newModel;
    };
    //
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    //
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    Mobile.prototype.toString = function () {
        return "\n    \u00B7 Name : ".concat(this.name, "\n    \u00B7 Trademark : ").concat(this.trademark, "\n    \u00B7 Model : ").concat(this.model, "\n    \u00B7 Color : ").concat(this.color, "\n    \u00B7 Price : ").concat(this.price, "  ");
    };
    ;
    return Mobile;
}());
exports.Mobile = Mobile;
;
