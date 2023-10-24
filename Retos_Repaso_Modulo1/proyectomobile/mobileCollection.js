"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPrice;
        this.totalPrice = this.calculateTotalPrice();
    }
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles; // no utilizamos new ya que viene de otra clase de mobiles que ya tenemos
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileCollection.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    // Método para calcular el precio total
    MobileCollection.prototype.calculateTotalPrice = function () {
        var total = 0; //variable que acumula el total del precio
        for (var i = 0; i < this.mobiles.length; i++) { //ciclo que recorre array de moviles
            total += this.mobiles[i].getPrice(); //hacemos un acumulador del precio de cada movil guardado en i
        } // y le aplicamos el método getPrice de la clase Mobile.
        return total; // devolvemos el total acumulado
    };
    ;
    MobileCollection.prototype.printCollection = function () {
        console.log("This is all my mobiles: ");
        for (var i = 0; i < this.mobiles.length; i++) {
            console.log("\n" + "The characteristics of the mobile " + this.mobiles[i].getName() + " are :" + this.mobiles[i].toString());
        }
        console.log("Price overall: " + this.calculateTotalPrice());
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
