'use strict'

var params = process.argv.slice(2);

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

var plantila = `
La suma es: ${numero1 + numero2}
La Resta: ${numero1 - numero2}
La multiplicacion: ${numero1 * numero2}
La division ${numero1 / numero2}
`;

console.log(plantila);

console.log("Hola mundo desde NodeJS");