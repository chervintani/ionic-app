import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ApiService} from '../../services/api.service'
@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  constructor(private nav: NavController, private api: ApiService) { }

  ngOnInit() {
    this.api.getData().subscribe(data => {
      console.log(data);
      
    })
  }

  openDetails(){
    this.nav.navigateForward('tabs/films/42')
  }

  goToPlanets(){
    this.nav.navigateRoot('tabs/planets')
  }
}
