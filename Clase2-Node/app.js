

//Modulo nativo
let fs = require ('fs');

//console.log(fs)

//Modulo de tercero -> npm install

let moment = require('moment')
//console.log(moment)

//Modulo Propio 
let calculadora = require('./calculadora/calculadora')
//console.log(calculadora)

console.log(calculadora.multiplicar(2,4));
console.log(calculadora.sumar(2,4));