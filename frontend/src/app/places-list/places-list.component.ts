import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../shared/services/places.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css'],
})
export class PlacesListComponent implements OnInit {
  places: any;

  constructor(private placesServices: PlacesService) {}

  ngOnInit() {
    this.placesServices.getPlaces().subscribe((res) => {
      this.places = res;
    });
  }

  placeTrackBy(index: number, place: any) {
    return place.id;
  }

  deletePlace(id: number) {
    this.placesServices.deletePlace(id).subscribe((res) => {});
  }
}
