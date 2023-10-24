// 1. Trabajar en la rama repaso2 dentro de la carpeta creada en el reto anterior crear el fichero
// mobileCollection.ts
// 2. Dicho fichero debe contener la clase MobileCollection con los siguientes atributos privados:
// • mobiles: Mobile[]
// • totalPrice: number
// 3. El constructor debe tener como parámetro de entrada el array de objetos de la clase Mobile.
// 4. Crear los métodos setters y getters para todos los atributos de la clase.
import { Mobile } from "./mobile";

export class MobileCollection {

    private mobiles: Mobile[]; // string de mobiles 
    private totalPrice: number;

    constructor(mobiles: Mobile[]) { // tambien se indica en el constructor 
        this.mobiles = mobiles;
        this.totalPrice = this.totalPrice;
        this.totalPrice = this.calculateTotalPrice();
    }

    public getMobiles(): Mobile[] { // no es string, tiene que dar resultado de : array de mobile[]
        return this.mobiles
    }
    public setMobiles(mobiles: Mobile[]): void { // no es string, ya que es un array de mobile[]
        this.mobiles = mobiles // no utilizamos new ya que viene de otra clase de mobiles que ya tenemos
    }
    public getTotalPrice(): number {
        return this.totalPrice
    }
    public setTotalPrice(totalPrice: number): void {//ojo, no es nuevo ya que lo coge de la lista de mobiles
        this.totalPrice = totalPrice
    }
    // Método para calcular el precio total
    public calculateTotalPrice(): number {
        let total: number = 0; //variable que acumula el total del precio
        for (let i = 0; i < this.mobiles.length; i++) {//ciclo que recorre array de moviles
            total += this.mobiles[i].getPrice()//hacemos un acumulador del precio de cada movil guardado en i
        }// y le aplicamos el método getPrice de la clase Mobile.
        return total // devolvemos el total acumulado
    };
    public printCollection(): void {
        console.log("This is all my mobiles: ")
        for (let i= 0 ; i<this.mobiles.length; i++) {
            console.log("\n" + "The characteristics of the mobile " + this.mobiles[i].getName() + " are :" + this.mobiles[i].toString());
        }
        console.log("Price overall: " + this.calculateTotalPrice());
    }
}