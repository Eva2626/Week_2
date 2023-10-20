export class Book {
    private title: string;
    private npages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    constructor(title: string, npages: number, isbn: string, Author: string, Editorial: string) {
        this.title = title;
        this.npages = npages;
        this.isbn = isbn;
        this.author = Author;
        this.editorial = Editorial;
    }
    //metodos
    public getTitle(): string {
        return this.title
    }
    public setTitle(newTitle: string): void {
        this.title = newTitle
    }
    //metodos
    public getNpages(): number {
        return this.npages
    }
    public setNpages(newNpages: number): void {
        this.npages = newNpages
    }
    //metodos
    public getIsbn(): string {
        return this.isbn
    }
    public setIsbn(newIsbn: string): void {
        this.isbn = newIsbn
    }
    //metodos
    public getAuthor(): string {
        return this.author
    }
    public setAuthor(newAuthor: string): void {
        this.author = newAuthor
    }
    //metodos
    public getEditorial(): string {
        return this.editorial
    }
    public setEditorial(newEditorial: string): void {
        this.editorial = newEditorial
    }
    //metodos un string que imprima todo esto: 
    public toString() {
        return `Title - ${this.title}
    Numer of Pages - ${this.npages}
    ISBN - ${this.isbn}
    Author - ${this.author}
    Editorial - ${this.editorial}  `
    };
}