"use strict";
// 1. Trabajar en la rama repaso1 .En una carpeta nueva. Ej: retos1. Guarda estos retos en un
// fichero .js Ej: condicionales.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
// 2. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.
// La fecha de nacimiento vendrá indicada por dos números: dia y mes.
// La cabecera de la función : function zodiac(day, month)
// 3. Realizar un procedimiento que dado el nombre de un país te imprima en que continente
// estás. (Max 5 países por continente). Cabecera : function continent(country)
// 4. Realizar una función que te imprima por consola el siguiente mensaje:
// - “El numero es par”, si el numero introducido como parámetro de entrada es par
// - “El numero es impar”, si el numero introducido como parámetro de entrada es impar
// 5. La cabecera de la función tendrá el siguiente aspecto: function isEven(number)
// 6. Subir los cambios a GitHub.
//2//
function zodiac(day, month) {
    var signo;
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        signo = "Aries";
    }
    else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        signo = "Tauro";
    }
    else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        signo = "Géminis";
    }
    else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        signo = "Cáncer";
    }
    else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        signo = "Leo";
    }
    else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        signo = "Virgo";
    }
    else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        signo == "Libra";
    }
    else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        signo = "Escorpio";
    }
    else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        signo = "Sagitario";
    }
    else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        signo = "Capricornio";
    }
    else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        signo = "Acuario";
    }
    else {
        signo = "Piscis";
    }
    return signo;
}
var zodiacResult = zodiac(26, 3);
console.log("El signo de este zodiaco es : " + zodiacResult + "!");
//3//
function continent(country) {
    if (country == "Afganistan" || country == "Armenia") {
        console.log("Asia");
    }
    else if (country == "Burundi" || country == "Kenia") {
        console.log("Africa");
    }
    else if (country == "Bahamas" || country == "Canada") {
        console.log("América del Norte");
    }
    else if (country == "Brasil" || country == "Colombia") {
        console.log("América del Sur");
    }
    else if (country == "Italia" || country == "Dinamarca") {
        console.log("Europa");
    }
    else if (country == "Nueva Zelanda" || country == "Australia") {
        console.log("Oceanía");
    }
    else {
        console.log("Antártida: unico continente que no tiene paises");
    }
}
console.log(continent("Nueva Zelanda")); //para llamar a la funcion =>  
//4//5//
function isEven(number) {
    if (number % 2 === 0) {
        console.log("El número es par");
    }
    else {
        console.log("El número es impar");
    }
}
exports.isEven = isEven;
var number = 77;
isEven(number);
