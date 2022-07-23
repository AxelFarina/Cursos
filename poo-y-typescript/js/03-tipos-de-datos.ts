type loqmedlagana = string | number;

// String 
let cadena: loqmedlagana = "Axel Fariña";
cadena = 22;

// Number
let numero: number = 12;

// Boleano
let verdadero_falso: boolean = true;

// Any 
let cualquiera: any = "hola";

// Arrays
let lenguajes: Array<string> = ["PHP","JS","CSS"];

// Let vs Var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
	let numero1 = 44;
	var numero2 = 55;

	console.log(numero1,numero2);
}
console.log(numero1,numero2);


console.log(cadena,numero,verdadero_falso,cualquiera,lenguajes);