import { Person } from "./person";

let person1 = new Person("Oscar", 38, "Avda de Madrid"); 

person1.printName(); 
console.log(person1.yearOfBirth(2023)); 
console.log (person1.getAdress());

let newAdress = person1.getAdress();

person1.setAdress("Rio Lozoya");
console.log(person1.getAdress());
