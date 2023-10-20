"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, adress) {
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
    Person.prototype.printName = function () {
        console.log("El nombre es " + this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return currentYear - this.age;
    };
    Person.prototype.getAdress = function () {
        return this.adress;
    };
    Person.prototype.setAdress = function (newAdress) {
        this.adress = newAdress;
    };
    return Person;
}());
exports.Person = Person;
;
