import { Component, HostListener, OnInit } from '@angular/core';
import { Place } from 'src/app/class/Place';
import { PlacesService } from 'src/app/service/places.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-thoothukudi',
  templateUrl: './thoothukudi.component.html',
  styleUrls: ['./thoothukudi.component.css'],
})
export class ThoothukudiComponent implements OnInit {
  ngOnInit(): void {
    this.places = this.placesService.ThoothukudiPlace();
  }

  constructor(
    private placesService: PlacesService,
    private localStorageService: LocalStorageService
  ) {}

  places: Place[] = [];
  selectedPlaceid: Array<number> = [];
  selectedPlace: Place = new Place();
  temp: Array<number> = [];

  saveNumbersToLocalStorage() {
    let savedNumbers = this.localStorageService.getNumbers();
    this.selectedPlaceid.forEach((v) => {
      savedNumbers?.push(v);
    });
    this.selectedPlaceid = [];

    this.localStorageService.saveNumbers(savedNumbers);
  }

  likedPlaces(place: Place) {
    place.isLiked = !place.isLiked;
    console.log(this.temp);
    if (!this.temp.includes(place.id)) {
      this.temp.push(place.id);
      this.selectedPlaceid.push(place.id);
      console.log(this.selectedPlaceid);
      this.saveNumbersToLocalStorage();
    } else {
    }
  }

  openShareModal() {
    let shareModal = document.getElementById('shareModal');
    if (shareModal) {
      shareModal.classList.add('show');
      shareModal.style.display = 'block';
    }
  }

  closeShareModal() {
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
