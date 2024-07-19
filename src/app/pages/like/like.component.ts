import { Component, HostListener, OnInit } from '@angular/core';
import { Place } from '../../class/Place';
import { PlacesService } from '../../service/places.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {

  constructor(
    private placesService: PlacesService,
    private localstorageservice: LocalStorageService
  ) {}
  places: Place[] = [];
  selectedpalces: Place[] = [];
  likedchennaiplaces: Place[] = [];
  likedchennaiIds: Array<number> = [];

  chennaiplaces: Place[] = [];
  kanchipuramplaces: Place[] = [];
  thanjavurplaces: Place[] = [];
  coimbatoreplaces: Place[] = [];
  coonorplaces: Place[] = [];
  dindigulplaces: Place[] = [];
  maduraiplaces: Place[] = [];
  nagapattinamplaces: Place[] = [];
  nilgiriplaces: Place[] = [];
  salemplaces: Place[] = [];
  thiruvannamalaiplaces: Place[] = [];
  velloreplaces: Place[] = [];
  thoothukudiplaces: Place[] = [];

  ngOnInit(): void {
    this.chennaiplaces = this.placesService.ChennaiPlace();
    this.kanchipuramplaces = this.placesService.KanchipuramPlace();
    this.thanjavurplaces = this.placesService.ThanjavurPlace();
    this.coimbatoreplaces = this.placesService.CovaiPlace();
    this.coonorplaces = this.placesService.CoonoorPlace();
    this.dindigulplaces = this.placesService.DindigulPlace();
    this.maduraiplaces = this.placesService.MaduraiPlace();
    this.nagapattinamplaces = this.placesService.NagapattinamPlace();
    this.nilgiriplaces = this.placesService.NilgiriPlace();
    this.salemplaces = this.placesService.SalemPlace();
    this.thiruvannamalaiplaces = this.placesService.ThiruvannamalaiPlace();
    this.velloreplaces = this.placesService.VellorePlace();
    this.thoothukudiplaces = this.placesService.ThoothukudiPlace();

    this.places = this.chennaiplaces.concat(
      this.kanchipuramplaces,
      this.thanjavurplaces,
      this.coimbatoreplaces,
      this.coonorplaces,
      this.dindigulplaces,
      this.maduraiplaces,
      this.nagapattinamplaces,
      this.nilgiriplaces,
      this.salemplaces,
      this.thiruvannamalaiplaces,
      this.velloreplaces,
      this.thoothukudiplaces,
    );
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
