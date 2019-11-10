import { Component, OnInit } from '@angular/core';
import {TravelsService} from '../shared/travels.service';


@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {

  constructor(private travelService: TravelsService) { }
	submitted: boolean;
	formControls = this.travelService.form.controls;
	showSuccessMessage: boolean;
  
  ngOnInit() {
  }	

onSubmit(){
	this.submitted=true;
	if(this.travelService.form.valid){
		if(this.travelService.form.get("$key").value == null){
			this.travelService.insertTravel(this.travelService.form.value);
			this.showSuccessMessage =true;
			setTimeout(()=> this.showSuccessMessage=false,3000);
			this.submitted=false;
			this.travelService.form.reset();
		}else{
			this.travelService.updateTravel(this.travelService.form.value);
			this.showSuccessMessage = true;
			setTimeout(()=> this.showSuccessMessage=false ,3000);
			this.submitted = false;
			this.travelService.form.reset();

		}
	}
}

}
