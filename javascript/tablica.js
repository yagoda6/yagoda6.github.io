'use strict';

var imiona = ["Filip", "Paula", "Vik", "Bulba"];


console.log(imiona);

imiona[1] = "Paulina";

console.log(imiona);

var ileElementow = imiona.push("Geralt");
console.log(ileElementow);
console.log(imiona);

imiona.pop();
console.log(imiona);

imiona.unshift("Paula");
console.log(imiona);

imiona.shift();
console.log(imiona);

console.log( "Ilość elementów w tablicy: " + imiona.length );

console.log("++++++++++");
console.log(imiona);
console.log(imiona.join(" - "));

console.log(imiona.reverse());

imiona.sort();
console.log(imiona);


var imionaMeskie = ["Filip", "Vik"];
var zbiorImion = imionaMeskie.concat(imiona);
console.log(zbiorImion);
console.log("Tablica imiona meskie: " + imionaMeskie);

console.log(zbiorImion.indexOf("Vik"));

console.log(Array.isArray(zbiorImion));

console.log(zbiorImion.slice(2,5));
console.log(zbiorImion);

zbiorImion.splice(2,1);
console.log(zbiorImion);

console.log(zbiorImion.toString());
