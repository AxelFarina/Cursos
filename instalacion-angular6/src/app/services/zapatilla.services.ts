import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
	public zapatillas: Array<Zapatilla>;


	constructor(){
		this.zapatillas = [
			new Zapatilla('nike jordan','nike','blanco',80, true),
			new Zapatilla('adidas runner','adidas','negro',160, false),
			new Zapatilla('nike jordan','nike','blanco',80, true),
			new Zapatilla('adidas runner','adidas','negro',160, false)
		];
	}

	getTexto(){
		return "Hola mundo desde un servicio";
	}

	getZapatillas(): Array<Zapatilla>{
		return this.zapatillas;
	}

}