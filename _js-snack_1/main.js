'use strict';

// Obj arrays creation
const bicycles = [
    {
        nome: 'Bianchi da corsa velocissima in turbo carbonio',
        peso_in_kg: '8',

    },
    {   
        nome: 'Cube un poco pesantuccia',
        peso_in_kg: '20',
    },
    {   
        nome: 'Atala in alluminio',
        peso_in_kg: '16',
    },
    {
        
        nome: 'Specialized in carbonio',
        peso_in_kg: '11',
    },
    {
        nome: 'Rose forcella in titanio ',
        peso_in_kg: '23',
    },
];


// for loop 
for ( let i = 0 ; i < bicycles.length - 1; i++){
    console.log(bicycles.nome[i]);
    console.log(bicycles.peso_in_kg[i]);
    const {peso_in_kg} = bicycles;
    console.log({peso_in_kg}[i]);



}