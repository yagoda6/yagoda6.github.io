'use strict';

var istniejacyWezel = document.getElementById('parFirst') .children[3];

console.log(istniejacyWezel);

var newElement = document.createElement('p'); //stworz nowy element p

var newElementContent = document.createTextNode('To jest nowy paragraf'); //stworz nowy tekst dla elementu p

newElement.appendChild(newElementContent); //dodaj tekst do elementu p

console.log(newElement);

istniejacyWezel.appendChild(newElement); 