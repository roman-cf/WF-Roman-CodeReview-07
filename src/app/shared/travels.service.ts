import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators  } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";



@Injectable({
  providedIn: 'root'
})
export class TravelsService {

constructor(private firebase: AngularFireDatabase) { }
	travelList: AngularFireList<any>;

  form = new FormGroup({
     $key: new FormControl(null),
     title: new FormControl('',Validators.required),
     description: new FormControl('',Validators.required),
     picUrl: new FormControl(''),
     country: new FormControl('')
         });

  	getTravels(){
  		this.travelList = this.firebase.list("travels");
  		return this.travelList.snapshotChanges();
  	}

  	insertTravel(travels){
            this.travelList.push({
                title: travels.title,
                description: travels.description,
                country: travels.country,
                picUrl: travels.picUrl
            });
        }
    reInsertElements(travels){
  		this.form.setValue(travels);
  		window.scrollTo({ top: 400, left: 0, behavior: "smooth"})
  	}

  	updateTravel(travels){
  			this.travelList.update(travels.$key,{
                title: travels.title,
                description: travels.description,
                country: travels.country,
                picUrl: travels.picUrl
  			});
  	}
  	deleteTravel($key:string){
  		this.travelList.remove($key);
  	}
}
