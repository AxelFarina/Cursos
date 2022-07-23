'use strict'
/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/
/*
document.write("<h1>De "+numero1+" a "+numero2+" estan estos numeros:</h1>")
for(var i = numero1; i <= numero2; i++){
			document.write(i+"<br/>");
}
*/

var numero1 = parseInt(prompt("Introduzca el primero numero",0));
var numero2 = parseInt(prompt("Introduzca el segundo numero",0));

document.write("<h1>De "+numero1+" a "+numero2+" estan estos numeros:</h1>")
if(numero1 > numero2){
	for(var i = numero1; i <= numero2; i--){
		document.write(i+"<br/>");
	}
}else if(numero1 < numero2){
	for(var i = numero2; i >= numero1; i--){
		document.write(i+"<br/>");
	}
}else{
	console.log("Keep trying ma friend");
}