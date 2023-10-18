class Person {

    constructor(nombre, apellido, ciudad, nacionalidad, altura, peso, colorOjos, colorPelo, yearOfBirth) {
        this.nombre = nombre
        this.apellido = apellido;
        this.ciudad = ciudad;
        this.nacionalidad = nacionalidad;
        this.altura = altura;
        this.peso = peso;
        this.colorOjos = colorOjos;
        this.colorPelo = colorPelo;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = []; 
    }
    calculoImc() {
        return this.peso / (this.altura * this.altura) * 10000
    };
    calculoEdad(anoActual){
        return anoActual - this.yearOfBirth
    }
    printAll(){
        console.log ("Su nombre es " + this.nombre, ", el apellido es " + this.apellido, ", su ciudad es " + this.ciudad, " y de nacionalidad " + this.nacionalidad, "; mide " + this.altura, "y pesa " + this.peso, "; tiene los ojos " + this.colorOjos, "y es " + this.colorPelo, "; nacio en " + this.yearOfBirth + ".");
        // console.log (`el nombre de la persona es : ${this.nombre}, el apellido es : ${this.apellido}, su ciudad es : ${this.ciudad}, la nacionalidad es : ${this.nacionalidad}, su altura es ${this.altura}, su peso es : {this.peso}, su color de ojos es ${this.colorOjos}, su color de pelo es ${this.colorPelo}, y su año de nacimiento es ${this.yearOfBirth}´);
    }
    printHobbies(){
        console.log ("Sus aficiones son" + this.hobbies + "."); 
        } 
    };



module.exports = {Person};