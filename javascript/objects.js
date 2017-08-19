'use strict';

var wojtek = {
    imie: "Wojtek",
    wzrost: 181,
    przedstawOsobe: function () {
        console.log("Cześć jestem " + this.imie + ", mam " + this.wzrost + " wzrostu");
    }
}


var kaja = {
    imie: "Kaja",
    wzrost: 160,
    przedstawOsobe: function () {
        console.log("Cześć jestem " + this.imie + ", mam " + this.wzrost + " wzrostu");
    }


}


wojtek.przedstawOsobe();

console.log(kaja.imie);
console.log(kaja.wzrost);
kaja.przedstawOsobe();
