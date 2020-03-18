import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetsPage } from './planets.page';

const routes: Routes = [
  {
    path: '',
    component: PlanetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetsPageRoutingModule {}
