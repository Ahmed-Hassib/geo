import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlacesListComponent } from './places-list/places-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { AddNewPlaceComponent } from './add-new-place/add-new-place.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { EditPlaceComponent } from './edit-place/edit-place.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlacesListComponent,
    AddNewPlaceComponent,
    EditPlaceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
