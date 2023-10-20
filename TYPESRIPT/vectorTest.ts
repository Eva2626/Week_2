import { Vector } from "./vector";

let Vector1= new Vector(3,5); 
let Vector2= new Vector(3,5); 
Vector1.printVector(); 
Vector2.printVector()


console.log(Vector1.addVector(Vector2));

console.log(Vector1.subsVector(Vector2)); 

console.log(Vector1.multVector(Vector2)); 

console.log(Vector1.multNumberVector(4)); 
