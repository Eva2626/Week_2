const {contact} = require ("./contacts"); //exporto contact
const {Person} = require ("./person"); // exporto Person

let persona2 = new Person("Oscar", "Lopez", "Coruña", "Española" ,185, 70, "azul", "moreno", 1987); 
let persona1 = new Person("Ana", "Garcia", "Madrid", "Española" ,170, 70, "verde", "rubio", 1973); 
let persona3 = new Person("Eva", "Colmenero", "Valencia", "Española" ,163, 50, "verdoso", "peliroja", 1987); 

 persona1.hobbies = []

let contacto = new contact()//asi creamos objeto 
contacto.contacts = [persona1, persona2, persona3]; 

contacto.printPersons(); 

