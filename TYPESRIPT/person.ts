export class Person {
    public name : string;
    public age : number; 
    private adress : string; 

        constructor(name : string, age : number, adress : string){
        this.name = name; 
        this.age = age;
        this.adress = adress; 
}
printName(){
    console.log("El nombre es " + this.name); 
}

yearOfBirth(currentYear:number){
    return currentYear - this.age
}

public getAdress():string{
    return this.adress
}
public setAdress (newAdress:string): void{
   this.adress = newAdress
        }

}; 
