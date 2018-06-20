import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { NotesToSelfPage } from '../notes-to-self/notes-to-self';

/**
 * Generated class for the SafetyToolkitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  notesToSelf(){
    this.navCtrl.push(NotesToSelfPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SafetyToolkitPage');
  }
}