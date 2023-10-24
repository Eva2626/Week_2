// RETO1//
// 1. Trabajar en la rama repaso4, crear una nueva carpeta denominada algebraProject y crear el
// fichero point.ts.
// 2. Dicho fichero debe contener la clase Point con los siguientes atributos privados:
// • x: number
// • y: number
// 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
// 4. Crear los métodos setters y getters para todos los atributos de la clase.
// Crear un método toString() que convierta a texto las coordenadas del punto. Debe devolver: “(x,y)”–

export class Point {
    private x: number; //atributos
    private y: number;

    constructor(x: number, y: number) {
        this.x = x; //parametros
        this.y = y;
    }
//metodos getters,setters y toString()
    public getX(): number {
        return this.x
    }
    public setX(newX: number): void {
        this.x = newX
    }

    public getY(): number {
        return this.y
    }
    public setY(newY: number): void {
        this.y = newY
    }

    public toString(): string {
        return `(${this.x}, ${this.y})`;
    } 
    
// RETO2// 
// 1. Crear un método denominado distanceToOrigin():number que devuelva la distancia del
// punto al origen de coordenadas (0,0).
// NOTA: Buscar en Google la formula para calcular la distancia.
// 2. Crear un método denominado calculateDistance(anotherPoint:Point):number, que
// devuelva la distancia entre el punto representado por la instancia actual del objeto y otra
// instancia de Punto que se recibe como parámetro denominada anotherPoint.
// NOTA: Buscar en Google la formula para calcular la distancia entre dos puntos.
    
    public distanceToOrigin(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    public calculateDistance(anotherPoint: Point): number {
        let puntoX = anotherPoint.x - this.x;
        let puntoY = anotherPoint.y - this.y;
        return Math.sqrt(puntoX * puntoX + puntoY * puntoY)
    }

//RETO 3//
    public calculateQuadrant(): number {
        let cuadrante: number = 0
        if (this.x === 0 && this.y === 0) {
            cuadrante = 0;
        } else if (this.x > 0 && this.y > 0) {
            cuadrante = 1;
        } else if (this.x < 0 && this.y > 0) {
            cuadrante = 2;
        } else if (this.x < 0 && this.y < 0) {
            cuadrante = 3;
        } else {
            cuadrante = 4;
        }
        return cuadrante;
    }

    calculateNearest(points: Point[]): Point {
        let nearestPoint = points[0]; // guarda primera posicion del array que recibe x parametro 
        let nearestDistance = this.calculateDistance(points[0]); // calcula la distancia que hay hasta el punto nearest point
        for (const point of points) { // recorre el array de points
            const distance = this.calculateDistance(point);// calcula distancia de cada punto del array
            if (distance < nearestDistance) { // si la distancia es menor que la que se ha guardado en nearestDistancia
                nearestPoint = point; // guarada el punto mas cercano
                nearestDistance = distance; // guarda la distancia más cercana
            }
        }
        return nearestPoint;
    }
}; 

