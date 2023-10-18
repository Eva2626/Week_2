const {Person} = require ("./person"); 

let persona2 = new Person("Oscar", "Lopez", "Coruña", "Española" ,185, 70, "azul", "moreno", 1987); 
let persona1 = new Person("Ana", "Garcia", "Madrid", "Española" ,170, 70, "verde", "rubio", 1973); 
// console.log(persona1);
// console.log(persona1.calculoImc()); 
// cconsole.log(persona1.calculoEdad(2023))
persona1.printAll();
persona2.printAll(); 
persona1.hobbies = ["comer", "leer", "caminar"]; 
persona2.hobbies = [" correr"," sacar al perro"," escalar"];
persona1.printHobbies()
persona2.printHobbies()


