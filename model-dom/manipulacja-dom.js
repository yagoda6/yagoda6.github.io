'use strict';

var mainHeader = document.getElementById('main-header');
//Przypisujemy naglowek strony do zmniennej

var tresc = mainHeader.innerHTML; // pobralismy tresci z naglowka
console.log(tresc);

mainHeader.innerHTML = "Treść nagłówka"; // dodajemy tresc do naglowka 

var link = document.getElementsByClassName('link')[0]; //Przypisujemy pierwszy link do zmiennej

console.log(link);
link.href = "http://akademia108.pl"; //nadpisujemy atrybut href w link

link.className = 'nowa-klasa' //Nadpisujemy nazwę klasy w linku

link.style.color = '#11aa22' //dodajemy styl


