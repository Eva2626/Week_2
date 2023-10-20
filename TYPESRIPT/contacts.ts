import { Person } from "./person";

export class Contacts {
    public people : Person[];

        constructor(){
        this.people = []; 
}
printCalendar(){

    for (let people of this.people)
    console.log(people); 
}
};

