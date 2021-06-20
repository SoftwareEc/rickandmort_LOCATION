import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationslistPage } from './locationslist.page';

const routes: Routes = [
  {
    path: '',
    component: LocationslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationslistPageRoutingModule {}
