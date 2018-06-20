import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-safety-toolkit',
  templateUrl: 'safety-toolkit.html',
})
export class SafetyToolkitPage {
  films: Observable<any>;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) { 
    this.films = this.httpClient.get('https://swapi.co/api/films');  
  }
 
  openDetails(film) {
    this.navCtrl.push('FilmDetailsPage', {film: film});
  }
}