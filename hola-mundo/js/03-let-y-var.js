'use strict'

//Pruebas con let y var

//Pruebas con Var
var numero = 40; // Valor 40
console.log(numero);

if(true){
	var numero = 50;
	console.log(numero); // Valor 50

}

console.log(numero); // Valor 50

//Pruebas con Let
var texto = "Curso JS victorroblesweb.es";
console.log(texto); //valor JS

if(true){
	let texto = "Curso Laravel 5 victorroblesweb.es";
	console.log(texto); //valor Laravel 5
} 

console.log(texto); //valor JS