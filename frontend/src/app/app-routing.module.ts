import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesListComponent } from './places-list/places-list.component';
import { AddNewPlaceComponent } from './add-new-place/add-new-place.component';
import { EditPlaceComponent } from './edit-place/edit-place.component';

const routes: Routes = [
  { path: 'places', component: PlacesListComponent },
  { path: 'add-place', component: AddNewPlaceComponent },
  { path: 'edit-place/:id', component: EditPlaceComponent },
  { path: '', redirectTo: '/places', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
