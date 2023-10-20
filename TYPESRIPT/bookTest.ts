import { Book } from "./book";

let libro1 = new Book("El verano de los 80", 121, "0326-KL2023", "Dafne Lopez", "Planeta de libros");

console.log (libro1.getAuthor());
console.log(libro1.getEditorial()); 
console.log(libro1.getIsbn());
console.log(libro1.getNpages()); 
console.log(libro1.getTitle()); 

//set espera parametro dentro, indicamos y lo cambia
console.log(libro1.setAuthor("Juana Mnez"));

console.log (libro1.toString()); 
