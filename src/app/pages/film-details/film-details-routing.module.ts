import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmDetailsPage } from './film-details.page';

const routes: Routes = [
  {
    path: '',
    component: FilmDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmDetailsPageRoutingModule {}
