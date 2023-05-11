import { AfterContentInit, Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../shared/services/places.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrls: ['./edit-place.component.css'],
})
export class EditPlaceComponent implements OnInit {
  // target id
  targetId: number;
  placeInfo: any;
  infoForm: FormGroup;
  errMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private placesServices: PlacesService,
    private ngZone: NgZone,
    private router: Router
  ) {
    // get place id
    this.targetId = Number(this.route.snapshot.paramMap.get('id'));

    // initial value for place info
    this.placeInfo = [];

    // initialize form group
    this.infoForm = this.fb.group({
      name: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.placesServices.getPlaceDetails(this.targetId).subscribe(
      (res) => {
        // assign result to the interface
        this.placeInfo = res;
        // assign values to form inputs
        this.infoForm.setValue({
          name: this.placeInfo['name'],
          latitude: this.placeInfo['latitude'],
          longitude: this.placeInfo['longitude'],
        });
      },
      (err) => {
        // assign error message
        this.errMessage = err.message;
      }
    );
  }

  updatePlace() {
    this.placesServices
      .updatePlace(this.targetId, this.infoForm.value)
      .subscribe(
        (res) => {
          setTimeout(() => {
            this.ngZone.run(() => this.router.navigateByUrl('/places'));
          }, 1000);
        },
        (err) => {
          this.errMessage = err.message;
        }
      );
  }
}
