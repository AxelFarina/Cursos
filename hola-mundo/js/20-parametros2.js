'use strict'

//Parametros REST y SPREAD 

function ListadoFrutas(fruta1,fruta2, ...resto_de_frutas){
	console.log("Fruta 1: ", fruta1);
	console.log("Fruta 2: ", fruta2);
	console.log(resto_de_frutas);
}

ListadoFrutas("Naranja","Pera","Melon","China","Sandia");

var frutas = ["Naranja","Pera"]
ListadoFrutas(...frutas,"Melon","China","Sandia");