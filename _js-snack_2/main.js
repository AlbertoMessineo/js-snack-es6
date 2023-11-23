'use strict';

const teams = [
    {
        nome: "A maggica",
        falli_ricevuti: 0,
        punti: 0,
    },
    {
        nome: "Milan",
        falli_ricevuti: 0,
        punti: 0,
    },
    {
        nome: "Inter",
        falli_ricevuti: 0,
        punti: 0,
    },

    {
        nome: "Napule'",
        falli_ricevuti: 0,
        punti: 0,
    },

    {
        nome: "Juventus",
        falli_ricevuti: 0,
        punti: 0,
    },
    {
        nome: "Lazio",
        falli_ricevuti: 0,
        punti: 0,
    },
    {
        nome: "Brescia",
        falli_ricevuti: 0,
        punti: 0,
    },

];

for (let i = 0; i < teams.length ; i++){
    let {nome} = teams[i];
    let {punti} = teams[i];
    let {falli_ricevuti} = teams[i];
    let points = teams[i].punti;
    let fauls = teams[i].falli_ricevuti;
    teams[i].punti = Math.floor(Math.random() * 50);
    teams[i].falli = Math.floor(Math.random() * 10);
    
    console.log(`Il numero di falli ricevuti per la squadra ${nome} è: ${ teams[i].falli}`);
    console.log(`il numero di punti totalizzati per la squadra ${nome} è: ${ teams[i].punti}`);
}
console.log(teams);

 