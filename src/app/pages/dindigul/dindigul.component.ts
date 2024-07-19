import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/class/Place';
import { PlacesService } from 'src/app/service/places.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-dindigul',
  templateUrl: './dindigul.component.html',
  styleUrls: ['./dindigul.component.css'],
})
export class DindigulComponent implements OnInit {
  ngOnInit(): void {
    this.places = this._placesService.DindigulPlace();
  }

  constructor(
    private _placesService: PlacesService,
    private localStorageService: LocalStorageService
  ) {}
  places: Place[] = [];
  selectedplaceId: Array<number> = [];
  selectedPlace: Place = new Place();
  temp: Array<number> = [];

  savedNumbersToLocalStorage() {
    let savedNumbers = this.localStorageService.getNumbers();
    this.selectedplaceId.forEach((v) => {
      savedNumbers?.push(v);
    });
    this.selectedplaceId = [];

    this.localStorageService.saveNumbers(savedNumbers);
  }

  likedPlaces(place : Place) {
    place.isLiked = !place.isLiked
    console.log(this.temp);
    if (!this.temp.includes(place.id)) {
      this.temp.push(place.id);
      this.selectedplaceId.push(place.id);
      console.log(this.selectedplaceId);
      this.savedNumbersToLocalStorage();
    } else {
    }
  }

  
  openShareModal() {
    // Code to open modal
    let shareModal = document.getElementById('shareModal');
    if (shareModal) {
      shareModal.classList.add('show');
      shareModal.style.display = 'block';
    }
  }

  closeShareModal() {
    // Code to close modal
    let shareModal = document.getElementById('shareModal');
    if (shareModal) {
      shareModal.classList.remove('show');
      shareModal.style.display = 'none';
    }
  }

  @HostListener('document:click', ['$event'])
  public onClick(event: any): void {
    if (event.target.classList.contains('modal')) {
      this.closeShareModal();
    }
  }
}
