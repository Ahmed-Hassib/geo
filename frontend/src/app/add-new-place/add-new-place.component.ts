import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlacesService } from '../shared/services/places.service';

@Component({
  selector: 'app-add-new-place',
  templateUrl: './add-new-place.component.html',
  styleUrls: ['./add-new-place.component.css'],
})
export class AddNewPlaceComponent {
  infoForm: FormGroup;
  message: string;

  constructor(private placeService: PlacesService, private fb: FormBuilder) {
    this.message = '';
    this.infoForm = this.fb.group({
      name: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
    });
  }

  addNewPlace() {
    if (this.infoForm.valid) {
      this.placeService.addPlace(this.infoForm.value).subscribe((response) => {
        this.message = 'data added successfully!';
        this.infoForm.setValue({
          name: '',
          latitude: '',
          longitude: '',
        });
      });

      setTimeout(() => {
        this.message = '';
      }, 5000);
    }
  }
}
