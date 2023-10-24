import { Mobile } from "./mobile";

let mobile1 = new Mobile("iPhone", "Apple", "6S", "plateado", 500);

console.log(mobile1.getName());
console.log(mobile1.getTrademark());
console.log(mobile1.getModel());
console.log(mobile1.getColor());
console.log(mobile1.getPrice());

//set espera parametro dentro, indicamos y lo cambia
mobile1.setName("iPhone 6S") // le meto un parámetro nuevo a set para acceder al privado 
console.log(mobile1.getName()); // y lo tengo que imprimir con get para ver el cambio 

mobile1.setTrademark("Manzana")
console.log(mobile1.getTrademark());

mobile1.setModel("catorce")
console.log(mobile1.getModel());

mobile1.setColor("rojo mate")
console.log(mobile1.getColor());

mobile1.setPrice(420)
console.log(mobile1.getPrice());

// Crear tres objetos de la clase Mobile en el fichero mobileTest.ts.
// 3. Crear un array denominado myMobiles en el fichero mobileTest.ts que tendrá los tres
// objetos creados en el punto 2.

let mobileA = new Mobile("13", "Xiaomi", "T 5G", "negro", 135);
let mobileB = new Mobile("Galaxy", "Samsung", "A14", "azul", 1399);
let mobileC = new Mobile("iPhone", "Apple", "13", "rojo", 1200);
let mymobiles = [mobileA, mobileB, mobileC]; 

console.log(mymobiles.toString()); 