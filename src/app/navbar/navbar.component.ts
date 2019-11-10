import { Component, OnInit } from '@angular/core';
import { TravelsService }from "../shared/travels.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	private projectName:string;

  constructor(private travelService: TravelsService) { 
  	this.projectName = "Travel Agency";

  }

  ngOnInit() {
  }

}
