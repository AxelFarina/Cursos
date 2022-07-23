'use strict'

//LocalStorage

// Comprobar disponibilidad del localstorage

if(typeof(Storage) !== 'undefined'){
	console.log("Localstorage disponible");
}else{
	console.log("Incompatible con el localstorage");
}

// Guardar datos
localStorage.setItem("Titulo","Curso de Symfony de Victor Robles");

//Recuperar elemento
document.querySelector("#peliculas").innerHTML= localStorage.getItem("Titulo");

// Guardar objetos

var usuario = {
	nombre: 'Victor Robles',
	email: 'axelaaronfarina@gmail.com',
	web: 'victoroblesweb.es'
};

localStorage.setItem("usuario",JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(" "+userjs.web+" - "+userjs.nombre);

localStorage.removeItem("usuario");