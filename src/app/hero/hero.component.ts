import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
	private heroHead: string;
	private  heroText: string;


  constructor() { 
  	this.heroHead="Best Trip Ever";
  	this.heroText="we provide white powder"
  }

  ngOnInit() {
  }

}
