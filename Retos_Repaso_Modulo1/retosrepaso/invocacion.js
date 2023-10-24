"use strict";
// Guardar este reto en un nuevo fichero. Ej: invocacion.ts
// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si
// es par o impar la suma de los caracteres de cada uno de los siguientes arrays:
// • [“Casa”, “Coche”, “Ciudad”, “Cesta”]
// • [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
// • [“Venezuela”, “Veneno”, “Voltaje”]
// Para ello tendrás que exportar dichas funciones en los ficheros correspondientes.
Object.defineProperty(exports, "__esModule", { value: true });
var buclesfor_1 = require("./buclesfor");
var condicionales_1 = require("./condicionales");
var array1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var array2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
var array3 = ["Venezuela", "Veneno", "Voltaje"];
var sumaArray1 = ((0, buclesfor_1.add)(array1));
var sumaArray2 = ((0, buclesfor_1.add)(array2));
var sumaArray3 = ((0, buclesfor_1.add)(array3));
console.log(sumaArray1);
console.log(sumaArray2);
console.log(sumaArray3);
(0, condicionales_1.isEven)(sumaArray1);
(0, condicionales_1.isEven)(sumaArray2);
(0, condicionales_1.isEven)(sumaArray3);
// console.log (add(juntarArrays())); // Llamo a la función.
