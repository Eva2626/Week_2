// Guardar este reto en un nuevo fichero. Ej: invocacion.ts
// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si
// es par o impar la suma de los caracteres de cada uno de los siguientes arrays:
// • [“Casa”, “Coche”, “Ciudad”, “Cesta”]
// • [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
// • [“Venezuela”, “Veneno”, “Voltaje”]
// Para ello tendrás que exportar dichas funciones en los ficheros correspondientes.

import { add } from "./buclesfor";
import { isEven } from "./condicionales";

let array1 = ["Casa", "Coche", "Ciudad", "Cesta"]; 
let array2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let array3 = ["Venezuela", "Veneno", "Voltaje"];

let sumaArray1 = (add(array1)); 
let sumaArray2 = (add(array2)); 
let sumaArray3 = (add(array3));

console.log (sumaArray1); 
console.log (sumaArray2); 
console.log(sumaArray3);

isEven(sumaArray1); 
isEven(sumaArray2); 
isEven(sumaArray3); 



// console.log (add(juntarArrays())); // Llamo a la función.
