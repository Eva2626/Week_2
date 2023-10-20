import { Book } from "./book";

export class Library {
    private books: Book[];
    private address: string;
    private manager: string;

    constructor(books: Book[], address: string, manager: string) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    //getters y setters para los atributos address

    public getAddress(): string {
        return this.address
    }
    public setAddress(newAdress: string): void {
        this.address = newAdress
    }
    //getters y setters para los atributos manager

    public getManager(): string {
        return this.manager
    }
    public setManager(newManager: string): void {
        this.manager = newManager
    }

    //Quiero que recorra el array de libros en plan: de uno en uno y que me salga el texto y que salga la estructura
    //como la de book. creo la variable text fuera del bucle for. text es = a book.to string () // book es la variable/valor
    // y pongo .tostring()con () para que me recorra uno por uno cada libro y cada libro me lo imprima. 
    //return fuera para que cada vuelta de otra vuelta al siguiente_***** y para comprobarlo llamamos a la funcion con un LOG. 
    //
    public toString() {
        let text = ""; 
        for (let book of this.books) {
            text += book.toString()
            };
            return text
        }
        
// getNumberOfBooks ():number.
// Devuelve el numero de libros de la biblioteca.
public getNumberOfBooks (){
    return this.books.length
}
// - findByAuthor (author:string):Book[].
// Devuelve los libros cuyo autor coincida con el nombre que se pasa como parámetro
// del método.

public findByAuthor (author:string):Book[]{
    let findAutor = this.books.filter ((book:Book)=> book.getAuthor() == author);
    return findAutor
}

}; 

