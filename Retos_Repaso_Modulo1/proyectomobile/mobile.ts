// 1. Trabajar en la rama repaso2, crear una nueva carpeta denominada mobileProject y
// crear el fichero mobile.ts. Dicho fichero debe contener la clase Mobile con los siguientes
// atributos privados:
// • name: string //trademark: string//model: string//color: string//price: number
// 2. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
export class Mobile {
    private name: string; //atributo
    private trademark: string; //atributo
    private model: string; //atributo
    private color: string; //atributo
    private price: number; //atributo

    constructor(name: string, trademark: string, model: string, color: string, price: number) { //Parametros de entrada = que los atributos
        this.name = name; // parametros mismos que abributos 
        this.trademark = trademark; // parametros mismos que abributos
        this.model = model; // parametros mismos que abributos
        this.color = color; // parametros mismos que abributos
        this.price = price; // parametros mismos que abributos

    }
    //Crear los métodos setters y getters para todos los atributos de la clase.

    public getName(): string {
        return this.name
    }
    public setName(newName: string): void {
        this.name = newName
    }
    //
    public getTrademark(): string {
        return this.trademark
    }
    public setTrademark(newTrademark: string): void {
        this.trademark = newTrademark
    }
    //
    public getModel(): string {
        return this.model
    }
    public setModel(newModel: string): void {
        this.model = newModel
    }
    //
    public getColor(): string {
        return this.color
    }
    public setColor(newColor: string): void {
        this.color = newColor
    }
    //
    public getPrice(): number {
        return this.price
    }
    public setPrice(newPrice: number): void {
        this.price = newPrice
    }
    public toString(): string { // me faltaba :string, ya que lo que devuelve es un string de este texto en concreto.
        return `
    · Name : ${this.name}
    · Trademark : ${this.trademark}
    · Model : ${this.model}
    · Color : ${this.color}
    · Price : ${this.price}  `
    };
}; 