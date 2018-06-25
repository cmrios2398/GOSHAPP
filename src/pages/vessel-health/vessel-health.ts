import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';

/**
 * Generated class for the VesselHealthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vessel-health',
  templateUrl: 'vessel-health.html',
})
export class VesselHealthPage {
  sections;

  constructor(public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider) { 
    this.wpApiProvider.getVesselHealth().subscribe( data => {
      console.log(data);
      this.sections = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VesselHealthPage');
  }

}
