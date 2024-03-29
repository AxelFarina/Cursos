import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.services';

@Component({
	selector:'zapatillas',
	templateUrl: './zapatillas.component.html',
	providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit{
	public titulo: string = "Componente de zapatillas";
	public zapatillas!: Array<Zapatilla>;
	public marcas: String[];
	public color: String;
	public mi_marca: String;

	constructor(
		private _zapatillaService: ZapatillaService
		){
		this.mi_marca = "Fila";
		this.color = 'yellow';
		this.marcas = new Array();
	}

	ngOnInit(){
		this.zapatillas = this._zapatillaService.getZapatillas();
		alert(this._zapatillaService.getTexto());
		this.getMarcas();
	}

	getMarcas(){
		this.zapatillas.forEach((zapatilla, index) => {

			if(this.marcas.indexOf(zapatilla.marca) < 0){
				this.marcas.push(zapatilla.marca);
			}
			
			
		});

		console.log(this.marcas);
	}

	getMarca(){
		alert(this.mi_marca);
	}

	addMarca(){
		this.marcas.push(this.mi_marca);
	}

	borrarMarca(index: any){
		//delete this.marcas[index];
		this.marcas.splice(index, 2);
	}

	onBlur(){
		console.log("Has salido del input");
	}

	mostrarPalabra(){
		alert(this.mi_marca);
	}

}