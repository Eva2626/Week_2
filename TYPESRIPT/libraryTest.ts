import { Library } from "./library";
import { Book } from "./book";


let libro1 = new Book("El verano de los 80", 121, "0326-KL2023", "Dafne Lopez", "Planeta de libros");
let libro2 = new Book("La mama de Lucia", 220, "2547-kG298", "Ariadne Garcia", "Planeta de libros");
let libro3 = new Book("El Oso dormilon", 121, "5765-YJ098", "Alma Colmenero", "Planeta de libros");
let libro4 = new Book("La pantera negra", 321, "000-UY890", "Maria Martinez", "Planeta de libros");
let libro5 = new Book("El mono del platano", 450, "12345-PO1209", "Alma Colmenero", "Planeta de libros");

let libreria1 = new Library([libro1, libro2, libro3, libro4, libro5], "madrid", "managerrr");

console.log(libreria1.toString());
console.log (libreria1.getNumberOfBooks()); 
/////////////// no se como sacar el Autor. 
console.log (libreria1.findByAuthor("Alma Colmenero")); 