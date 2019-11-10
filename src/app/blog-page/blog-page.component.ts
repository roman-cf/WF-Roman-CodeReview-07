import { Component, OnInit } from '@angular/core';
import { TravelsService }from "../shared/travels.service";


@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
	travelArray=[];

  constructor(private travelService: TravelsService) { }

  ngOnInit() {
  	this.travelService.getTravels().subscribe(
				(list) => {
					this.travelArray = list.map( (item) => {
						return {
							$key : item.key,
							...item.payload.val()
						}
					})
				});;
  }
}
