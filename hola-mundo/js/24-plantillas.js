'use strict'

// Plantillas de texto

var nombre = prompt("Mete tu nombre");
var apellidos = prompt("Mete tu apellido");

//let texto = "Mi nombre es "+nombre+" <br/> y mis apellidos son "+apellidos;
var texto = `

		<h1>Hola que tal</h1>
		<h3>Mi nombre es: ${nombre}</h3>
		<h3>Mis Apellidos son: ${apellidos}</h3>



`;


document.write(texto); 
