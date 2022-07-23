'use strict'

/*
1.Pida 6 numeros por pantalla y los meta en un array
2.Mostrar todos los elementos del array en el cuerpo de la pagina y la consola
3.Ordenarlo y mostrarlo
4.Invertir su orden y mostrarlo
5.Mostrar cuantos elementos tiene el array
6.Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(se valorara el uso de funciones)
*/

function mostrarArray(elementos, textoCustom = ""){
	document.write("<h1>Contenido del Array "+textoCustom+"</h1>");
	document.write("<ul>");

elementos.forEach((elemento, index) => {
	document.write("<li>"+elemento+"</li>");
});
	document.write("<ul/>");
}



//var numeros = new Array(6);
var numeros = [];

//Pedir 6 numeros
for(var i = 0; i <= 5; i++){
	//numeros[i] = parseInt(prompt("Introduce un numero",0));
	numeros.push(parseInt(prompt("Introduce un numero",0)));

}
//Mostrar en el cuerpo de la pagina 
mostrarArray(numeros);


//Mostrar array por la consola
console.log(numeros);

//Ordenarlo Y Mostrarlo
numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, "Ordenados");

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, "Revertidos");


//Contar elementos
document.write("<h1>El array tiene "+numeros.length+" elementos</h1>");

//Busqueda 
var busqueda = parseInt(prompt("Busca un numero",0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion != -1){
	document.write("<hr/><h1>ENCONTRADO</h1>");
document.write("<h1>Posicion de la busqueda: "+posicion+"</h1><hr/>");
}else{
	document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>");
}


