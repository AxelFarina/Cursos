import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	public widthSlider!: number;
	public anchuraToSlider!: number;
	public autor!:any;
	@ViewChild('textos', {static: true}) textos?: ElementRef;

  constructor() { }

  ngOnInit(): void {
  	var opcion_clasica = (document.querySelector('#texto')!.innerHTML);
  	if(this.textos){
      console.log(this.textos.nativeElement.textContent);
  	}
  }

  cargarSlider(){
  	this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
  	this.anchuraToSlider = NaN;
  }

  getAutor(event:any){
  	this.autor = event;
  }

}
