// 1. Guardar estos retos en un nuevo fichero.Ej: buclesWhile.ts

// 2. Realizar una función que te devuelva si existe un numero par en el array de números que
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)

// 3. Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)

// 4. Subir los cambios a GitHub.

//2//

function hasEven(myNums: number[]): void {
    let i: number = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            console.log("El número es par");
        } else {
            console.log("El número es impar");
        }
        i++;
    }
}
let myNums: number[] = [3, 5, 7, 4, 3, 2, 1];

hasEven(myNums);



//3//
function startWithM(myNames: string []): void {
    let i = 0; 
    while (i<myNames.length){
        if (myNames[i].charAt(0) == "M" ){///// saca el índice de un caracter !! 
            console.log (myNames[i] + " empieza en M")
        } else {
            console.log (myNames[i] + " no empieza por M")
        }
        i++
    }
}
let myNames = ["Maria", "Ana", "Monica", "Socorro"]
startWithM(myNames); 