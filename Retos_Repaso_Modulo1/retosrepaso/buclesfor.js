"use strict";
//-------------------------dudas-----------------------------------
//-------------------------dudas-----------------------------------
//-------------------------dudas-----------------------------------
//problema con el de words, no lo entiendo, no se que pasa
//-------------------------dudas-----------------------------------
//-------------------------dudas-----------------------------------
//-------------------------dudas-----------------------------------
// 1. Guardar estos retos en un nuevo fichero. Ej: buclesFor.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
// 2. Realizar una función que imprima los números impares existentes hasta el número
// indicado como parámetro de entrada.Cabecera de la funcion : function evenNumbers(num)
// 3. Realizar una función que como parámetro de entrada reciba un array de strings y como
// salida devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función : function myRevert(myArr)
// 4. Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función : function isRainbow(colors)
// 5. Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array. Cabecera de la funcion : function add(myWords)
// 6. Subir los cambios a GitHub.
//2//
function evenNumbers(num) {
    for (var i = 0; i < 1; i++) {
        if (num % 2 !== 0) {
            console.log("Este número es impar");
        }
        else {
            console.log("Este número es par");
        }
    }
}
var num = 18;
evenNumbers(num);
//3//
var myArr = ["un", "dos", "tres"];
function myRevert(myArr) {
    var arrayReves = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
        arrayReves.push(myArr[i]);
    }
    return arrayReves;
}
var arrayReves = myRevert(myArr);
console.log(arrayReves);
// //4//
// function isRainbow(colors: string[]): void {
//     for (let i = 0; i < colors.length; i++) {
//         if (colors[i] == "rojo") {
//             console.log(colors[i] + " está dentro del arco iris" + "!");
//         } else if (colors[i] == "naranja") {
//             console.log(colors[i] + " está dentro del arco iris" + "!");
//         } else if (colors[i] == "amarillo") {
//             console.log(colors[i] + " está dentro del arco iris" + "!");
//         } else if (colors[i] == "verde") {
//             console.log(colors[i] + " está dentro del arco iris" + "!");
//         } else if (colors[i] == "cian") {
//             console.log(colors[i] + " está dentro del arco iris" + "!");
//         } else if (colors[i] == "azul") {
//             console.log(colors[i] + " está dentro del arco iris" + "!");
//         } else if (colors[i] == "violeta") {
//             console.log(colors[i] + " está dentro del arco iris" + "!");
//         } else {
//             console.log(colors[i] + " no es un color del arco iris" + "!");
//         }
//     }
// };
// let colors: string[] = ["rojo", "negro"];
// isRainbow(colors);
function isRainbow(colors) {
    var rainbowColores = ["rojo", "naranja", "amarillo", "verde", "cian", "azul", "violeta"];
    for (var i = 0; i < colors.length; i++) {
        if (rainbowColores.indexOf(colors[i]) != -1) { // [] de rainbowColores.indexOf devuelve 1 indice si lo encuentra, y si no devuelve -1
            console.log("Está dentro del arcoiris " + colors[i]);
        }
        else {
            console.log("no está dentro del arcoiris " + colors[i]);
        }
    }
}
var colors = ["rojo", "negro"];
isRainbow(colors);
//5//
function add(myWords) {
    var caracteresFrase = 0; // Declarar e inicializar la variable caracteresFrase
    for (var i = 0; i < myWords.length; i++) {
        caracteresFrase += myWords[i].length;
    }
    return caracteresFrase;
}
exports.add = add;
var myWords = ["hola, que tal, estoy en la biblioteca", "hola", "que tal"];
console.log(add(myWords)); // Llamo a la función.
