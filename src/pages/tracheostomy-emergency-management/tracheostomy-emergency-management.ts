import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TracheostomyEmergencyManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracheostomy-emergency-management',
  templateUrl: 'tracheostomy-emergency-management.html',
})
export class TracheostomyEmergencyManagementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TracheostomyEmergencyManagementPage');
  }

}
