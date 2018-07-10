import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';

/**
 * Generated class for the IcuNewStartersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-icu-new-starters',
  templateUrl: 'icu-new-starters.html',
})
export class IcuNewStartersPage {

  tools;

  constructor(public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider) { 
    this.wpApiProvider.getICU().subscribe( data => {
      console.log(data);
      this.tools = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IcuNewStartersPage');
  }

}
