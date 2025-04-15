import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/class/Place';
import { PlacesService } from 'src/app/service/places.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-ariyalur',
  templateUrl: './ariyalur.component.html',
  styleUrls: ['./ariyalur.component.css']
})
export class AriyalurComponent implements OnInit {
  
  ngOnInit(): void {
   this.places = this.placesService.AriyalurPlace() 
  }

  constructor(
    private placesService : PlacesService,
    private localStorageService : LocalStorageService
  ){}

  places: Place[] = [];
  selectedplaceId: Array<number>=[];
  selectedplace : Place = new Place();
  temp: Array<number>=[];

  likedPlaces(place: Place){
    place.isLiked  =!place.isLiked;
    console.log(this.temp);
    if(!this.temp.includes(place.id)){
      this.temp.push(place.id);
      this.selectedplaceId.push(place.id)
      console.log(this.selectedplaceId);
      this.saveNumbersToLocalStorage();
    }else{}
    
  }

  saveNumbersToLocalStorage(){
    let savedNumbers = this.localStorageService.getNumbers();
    this.selectedplaceId.forEach((v)=>{
      savedNumbers?.push(v);
    })
    this.selectedplaceId=[];

    this.localStorageService.saveNumbers(savedNumbers)
  }


}
