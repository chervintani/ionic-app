import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmsPageRoutingModule } from './films-routing.module';

import { FilmsPage } from './films.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmsPageRoutingModule
  ],
  declarations: [FilmsPage]
})
export class FilmsPageModule {}
