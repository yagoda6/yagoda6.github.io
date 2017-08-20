'use strict';

/*
function multiply(param1, param2, param3) {
var result = param1 * param2 * param3;
    return result;
    
}

var wynik = multiply(3, 9, 10);
console.log(wynik);
*/

function multiply(param1) {
var iloczyn = 1;
    if (param1.length !=0) {
     for (var i = 0; i < param1.length; i++) {
        iloczyn *= param1[i];
    }
    
    else {
        iloczyn = 0;
    }
}

//var wynik = multiply(3, 9, 10);
console.log(multiply(tablic));


var funkcja = function () {
    return "wynik :)";
}

