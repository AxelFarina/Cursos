'use strict'

/*
Programa que pida 2 numeros y que nos diga cual es el mayor, el menor y si son iguales
PLUS: Si los numeros no son numeros o son iguales o menores a 0, nos los vuelva a pedir
*/


 var numero1 = parseInt(prompt("Ingrese el primer numero:", 0));
 var numero2 = parseInt(prompt("Ingrese el segundo numero:", 0));

 while(numero1 <=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){

  numero1 = parseInt(prompt("Ingrese el primer numero:", 0));
  numero2 = parseInt(prompt("Ingrese el segundo numero:", 0));

 }


 if(numero1 == numero2){
 	alert(numero1+" Es igual a "+numero2);
 }
 else if(numero1 > numero2){
 	alert(numero1+" Es mayor que "+numero2);
 }
 else if(numero1 < numero2){
 	alert(numero1+" Es menor que "+numero2);
 }
 else{
 	alert("Introduzca numeros correctos");
 }
 console.log(numero1,numero2);


 



