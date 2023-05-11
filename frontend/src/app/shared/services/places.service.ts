import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  // api variable
  api: string = 'http://127.0.0.1:8000/api/places';

  constructor(private http: HttpClient) {}

  getPlaces() {
    return this.http.get(`${this.api}/?formate=json`);
  }
  
  getPlaceDetails(id:number) {
    return this.http.get(`${this.api}/${id}/?formate=json`);
  }

  deletePlace(id: number) {
    return this.http.delete(`${this.api}/${id}/?formate=json`, );
  }
}
