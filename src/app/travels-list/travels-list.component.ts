import { Component, OnInit } from '@angular/core';
import { TravelsService }from "../shared/travels.service";


@Component({
  selector: 'app-travels-list',
  templateUrl: './travels-list.component.html',
  styleUrls: ['./travels-list.component.css']
})
export class TravelsListComponent implements OnInit {
	travelArray=[];
	showDeletedMessage : boolean;


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

  wantToDeleteElement($key){
     if(confirm("Are you sure you want to delete this record?")){
        this.travelService.deleteTravel($key);
        this.showDeletedMessage = true;
        setTimeout(()=> this.showDeletedMessage=false , 3000)
       }	
  }
}
