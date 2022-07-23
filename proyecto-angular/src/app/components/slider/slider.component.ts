import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

	@Input() anchura!: number;
	@Output() conseguirAutor = new EventEmitter();

	public autor: any;

  constructor(){
  	this.autor = {
  		nombre: "Axel Farina",
  		website: "victorroblesweb.es",
  		youtube: "Victor Robles Web"
  	};
  }

  ngOnInit(): void {


  	$("#logo").click(function(e:any){
  		e.preventDefault();

  		$("header").css("background","green")
  					.css("height","50px");
  	});

  	 $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: this.anchura
        });

  }

  lanzar(event:any){
  	this.conseguirAutor.emit(this.autor);
  }

}
