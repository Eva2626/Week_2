import { Person } from "./person";
import { Contacts } from "./contacts";

let people1 = new Person ("Oscar", 38, "Avda de Madrid")
let people2 = new Person ("Ana", 20, "Rio Lozoya")

let contact1 = new Contacts (); 
contact1.people = [people1,people2]; 

contact1.printCalendar(); 