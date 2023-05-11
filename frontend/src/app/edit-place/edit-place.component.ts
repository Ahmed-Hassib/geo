import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../shared/services/places.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrls: ['./edit-place.component.css'],
})
export class EditPlaceComponent implements OnInit, AfterContentInit {
  // target id
  targetId: number;
  placeInfo: any;
  infoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private placesServices: PlacesService
  ) {
    this.targetId = Number(this.route.snapshot.paramMap.get('id'));

    this.infoForm = this.fb.group({
      name: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.placesServices.getPlaceDetails(this.targetId).subscribe((res) => {
      this.placeInfo = res;
    });

    // this.infoForm.setValue({
    //   name: this.placeInfo.name,
    //   latitude: this.placeInfo.latitude,
    //   longitude: this.placeInfo.longitude,
    // })
  }

  ngAfterContentInit(): void {
    console.log(this.placeInfo);
  }

  updatePlace() {}
}
