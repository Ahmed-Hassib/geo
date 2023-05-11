import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlacesService } from './services/places.service';
import { DataSharingService } from './services/data-sharing.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<RouterModule> {
    return {
      ngModule: SharedModule,
      providers: [PlacesService, DataSharingService],
    };
  }
}
