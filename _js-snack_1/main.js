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

const bikeWeights = [];
// for loop 
for ( let i = 0 ; i < bicycles.length; i++){
    const {peso_in_kg} = bicycles[i];
    let bikeWeight = bicycles[i].peso_in_kg;
    console.log(bikeWeight);
    bikeWeights.push(bikeWeight);
}
console.log(bikeWeights);
const minValue = Math.min(...bikeWeights);
    
console.log(`Il peso minore è ${minValue}`);

const main = document.querySelector('main');
const domElement = document.createElement('div');

const domElementContent = `
<p> Il peso minore tra le bici è ${minValue} chilogrammi, ...piuttosto leggera!</p>`;
domElement.innerHTML = domElementContent;
main.append(domElement);
