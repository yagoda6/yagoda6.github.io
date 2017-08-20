'use strict';

var jsonOsoby = {
    "osoby": [
        {
            imie: "krystian",
            nazwisko: "dziopa",
            wzrost: 180,
            zainteresowania: [
                {nazwa: "podroze"},
                {nazwa: "gotowanie"}
            ]
        },
        
        
                {
            imie: "krystian",
            nazwisko: "dziopa",
            wzrost: 180,
            zainteresowania: [
                {nazwa: "podroze"},
                {nazwa: "gotowanie"}
            ]
        },

        {
            imie: "krystian",
            nazwisko: "dziopa",
            wzrost: 180,
            zainteresowania: [
                {nazwa: "podroze"},
                {nazwa: "gotowanie"}
            ]
        }
        
    ]
    
}
    
console.log(jsonOsoby);
jsonOsoby.osoby[2].zainteresowania.forEach(function(e, i){
    console.log(e.nazwa);
});



    
    
    