"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var mobileCollection_1 = require("./mobileCollection");
// 5. En otro fichero denominado mobileCollectionTest.ts importar la clase MobileCollection.
// 6. En dicho fichero crear 4 objetos de la clase Mobile y un array que los contenga.
// 7. Crear un objeto myCollection de la clase MobileCollection, asignarle el array que habéis creado
// previamente y comprobar todos sus métodos.
// 8. Subir los cambios a GitHub.
var mobile5 = new mobile_1.Mobile("iPhone", "Apple", "6S", "plateado", 500);
var mobile6 = new mobile_1.Mobile("13", "Xiaomi", "T 5G", "negro", 135);
var mobile7 = new mobile_1.Mobile("Galaxy", "Samsung", "A14", "azul", 1399);
var mobile8 = new mobile_1.Mobile("iPhone", "Apple", "13", "rojo", 1200);
var arrayMobiles = [mobile5, mobile6, mobile7, mobile8];
var myCollection = new mobileCollection_1.MobileCollection(arrayMobiles);
myCollection.setMobiles(arrayMobiles);
console.log(myCollection.getMobiles());
myCollection.setTotalPrice(2300);
console.log(myCollection.getTotalPrice()); // si funciona
console.log(myCollection.calculateTotalPrice());
myCollection.printCollection();
