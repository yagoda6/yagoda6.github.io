'use strict'

function mnozenie(tablicaliczb) {
        var iloczyn = 1;
    tablicaliczb.forEach(
        function(element,index) {
        iloczyn *= element;
    }
        
        
    );
    

    


// element - dany element w tablicy, na ktorym obecnie znajduje sie petla (dla peirwszego obiegu jest to pierwszy element, dla drugiego obiegu drugi element tablicy itd.)

//index - index danego elementu w tablicy, na którym obecnie znajduje się pętla (dla pierwszego obiegu jest to index 0, dla drugiego obiegu jest to indeks 1) 
//index - index danego elementu w tablicy, na którym obecnie znajduje się pętla (dla pierwszego obiegu jest to index 0, dla drugiego obiegu jest to indeks 1) 
    

    
    return iloczyn;
    
    }
    
    var tablica = [4, 5, 10, 8];
    
    console.log(mnozenie(tablica));