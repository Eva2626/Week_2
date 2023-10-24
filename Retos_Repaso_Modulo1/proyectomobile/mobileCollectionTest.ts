import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

// 5. En otro fichero denominado mobileCollectionTest.ts importar la clase MobileCollection.
    // 6. En dicho fichero crear 4 objetos de la clase Mobile y un array que los contenga.
    // 7. Crear un objeto myCollection de la clase MobileCollection, asignarle el array que habéis creado
    // previamente y comprobar todos sus métodos.
// 8. Subir los cambios a GitHub.

let mobile5 = new Mobile("iPhone", "Apple", "6S", "plateado", 500);
let mobile6= new Mobile("13", "Xiaomi", "T 5G", "negro", 135);
let mobile7= new Mobile("Galaxy", "Samsung", "A14", "azul", 1399);
let mobile8 = new Mobile("iPhone", "Apple", "13", "rojo", 1200);

let arrayMobiles: Mobile []= [mobile5, mobile6, mobile7, mobile8]; 

let myCollection = new MobileCollection (arrayMobiles);
myCollection.setMobiles(arrayMobiles); 
console.log(myCollection.getMobiles()); 

myCollection.setTotalPrice(2300);
console.log(myCollection.getTotalPrice()); // si funciona

console.log (myCollection.calculateTotalPrice()); 

myCollection.printCollection(); 

