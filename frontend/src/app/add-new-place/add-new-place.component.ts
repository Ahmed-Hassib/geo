import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-place',
  templateUrl: './add-new-place.component.html',
  styleUrls: ['./add-new-place.component.css'],
})
export class AddNewPlaceComponent {
  infoForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.infoForm = this.fb.group({
      name: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
    });
  }

  addNewPlace() {
    if (this.infoForm.valid) {
      this.http
        .post('http://localhost:8000/api/places/', this.infoForm.value)
        .subscribe((response) => {
          this.infoForm.setValue({
            name: '',
            latitude: '',
            longitude: '',
          });
        });
    }
  }
}
