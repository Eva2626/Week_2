export class Vector {
    private elements: number[];

    constructor(public n: number, public k: number,) {
        this.n = n;
        this.k = k;
        this.elements = [];
        //Este constructor tiene que crear el atributo elements formado por n números aleatorios entre 0 y k.
        for (let i = 0; i < this.n; i++) {
            this.elements.push(Math.floor(Math.random() * this.k));
        }
    }
    public printVector(): void {
        console.log(this.elements)
    }
    public addVector(v1: Vector): Vector {
        let suma: Vector = new Vector(0, 0); // suma crea obj vector, que va a guardar suma de los elementos
        for (let i = 0; i < v1.elements.length; i++) {//i=v1, v1.elements.len es el v1 que entra por param y lee el vector que nos lleva x param
            if (v1.elements.length == this.elements.length) {//revisa que los 2 arays sean de igual tamaño 
                suma.elements.push(v1.elements[i] + this.elements[i])//suma y devuelve resultado de v1 con array de elements del constructor
            }
        }
        return suma
    }

    public subsVector(v1: Vector): Vector {
        let resta: Vector = new Vector(0, 0);
        for (let i = 0; i < v1.elements.length; i++) {
            resta.elements.push(v1.elements[i] - this.elements[i])
        }
        return resta
    }

    public multVector (v1:Vector): Vector {
        let mult: Vector = new Vector (0,0); 
        for(let i=0; i<v1.elements.length; i++){
            mult.elements.push(v1.elements[i] * this.elements[i])
        }
        return mult
    }
    public multNumberVector (n:number): Vector {
        let multNumber:  Vector = new Vector(0,0);
        for (let i=0; i<this.elements.length; i++) {
            multNumber.elements.push(this.elements[i] * n ); 
        }
        return multNumber
}
}
//     • Metodos Públicos:

// - print(). Imprime por consola el vector.
// - add(v1:Vector):Vector. Realiza la suma de elements con v1.
// - subs(v1:Vector):Vector. Realiza la resta de elements con v1.
// - mult(v1:Vector):Vector. Realiza el producto de elements y v1.
// - multNumber(n:number):Vector. Realiza el producto entre elements y el número n.