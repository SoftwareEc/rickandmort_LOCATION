import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationslistPageRoutingModule } from './locationslist-routing.module';

import { LocationslistPage } from './locationslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationslistPageRoutingModule
  ],
  declarations: [LocationslistPage]
})
export class LocationslistPageModule {}
