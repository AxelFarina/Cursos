// Interace
interface CamisetaBase{
	setColor(color);
	getColor();
}

// Decorador
function estampar(logo: string){
	return function(target: Function){
		target.prototype.estampacion = function():void{
			console.log('Camiseta estampada con el logo de: '+logo);
		}
	}
}


// Clase (molde del objeto)
@estampar("Gucci Gang")
class Camiseta implements CamisetaBase{

	// Propiedades (caracteristica del objeto)
	public color: string;
	public modelo: string;
	public marca: string;
	public talla: string;
	public precio: number;

	// Metodos (funciones o acciones del objeto)
	constructor(color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}

	public setColor(color){
	this.color = color;
	}

	public getColor(){
	return this.color
	}

}

// Clase hija
class Sudadera extends Camiseta{
	public capucha: boolean;

	setCapucha(capucha: boolean){
		this.capucha = capucha;
	}
	getCapucha():boolean{
		return this.capucha
	}
}


var camiseta = new Camiseta("Asdas","asdasdad","sfsd","asdasdas", 12);
console.log(camiseta);

camiseta.estampacion();

var sudadera_ad = new Sudadera("azul","nison","rptmd","XXXL",3000);
sudadera_ad.setCapucha(true);
sudadera_ad.setColor("Japones");

console.log(sudadera_ad);

