import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Place } from 'src/app/Place';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  // api variable
  api: string = 'http://127.0.0.1:8000/api/places';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  addPlace(data: Place): Observable<any> {
    return this.http.post(`${this.api}/`, data);
  }

  getPlaces() {
    return this.http.get(`${this.api}/?formate=json`);
  }

  getPlaceDetails(id: number) {
    return this.http.get(`${this.api}/${id}/?formate=json`);
  }

  deletePlace(id: number) {
    return this.http.delete(`${this.api}/${id}/?formate=json`);
  }

  updatePlace(id: number, data: Place) {
    let url = `${this.api}/${id}/`;
    return this.http.put(url, data);
  }
}
