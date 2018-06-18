import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';

/**
 * Generated class for the NotesToSelfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notes-to-self',
  templateUrl: 'notes-to-self.html',
})
export class NotesToSelfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addNote(){
    this.navCtrl.push(AddNotePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesToSelfPage');
  }

}
