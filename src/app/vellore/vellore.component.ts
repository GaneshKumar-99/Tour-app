import { Component, OnInit } from '@angular/core';
import { Place } from '../class/Place';
import { PlacesService } from '../service/places.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-vellore',
  templateUrl: './vellore.component.html',
  styleUrls: ['./vellore.component.css'],
})
export class VelloreComponent implements OnInit {
  constructor(
    private placesService: PlacesService,
    private localstorageservice: LocalStorageService
  ) {}
  chennaiplaces: Place[] = [];
  places: Place[] = [];

  kanchipuramplaces: Place[] = [];

  selectedpalces: Place[] = [];
  likedchennaiplaces: Place[] = [];
  likedchennaiIds: Array<number> = [];

  ngOnInit(): void {
    this.chennaiplaces = this.placesService.ChennaiPlace();
    this.kanchipuramplaces = this.placesService.KanchipuramPlace();
    this.places = this.chennaiplaces.concat(this.kanchipuramplaces)
    this.getNumbersFromLocalStorage();
    this.getdata();
    
  }

  getNumbersFromLocalStorage(): void {
    const savedNumbers = this.localstorageservice.getNumbers();
    if (savedNumbers) {
      this.likedchennaiIds = savedNumbers;
    }
    console.log('ids', this.likedchennaiIds);
  }

  getdata() {
    this.places.forEach((v) => {
      this.likedchennaiIds.forEach((v1) => {
        if (v.id == v1) {
          this.selectedpalces.push(v);
        }
      });
    });
  }
}
