'use strict';




function ustawTlo(){ 
    document.getElementsByTagName('p')[0].style.backgroundColor = 'red';
    document.getElementsByTagName('p')[1].style.backgroundColor = 'blue';

}


document.getElementById('background')[0].onclick = ustawTlo;



