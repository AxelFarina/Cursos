import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	public tittle: string;
	public subtitle: string;
	public email: string; 

  constructor() {
  	this.tittle = "Axel Fariña";
  	this.subtitle = "Desarrollador Web y formador";
  	this.email = "axelaaronfarina@gmail.com";
  }

  ngOnInit(): void {
  }

}
