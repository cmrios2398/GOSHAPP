import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { NotesToSelfPage } from '../notes-to-self/notes-to-self';
import { SafetyToolkitMorePage } from '../safety-toolkit-more/safety-toolkit-more';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
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
  tools;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider) { 
    this.wpApiProvider.getSafetyToolkit().subscribe( data => {
      console.log(data);
      this.tools = data;
    })
  }

  notesToSelf(){
    this.navCtrl.push(NotesToSelfPage);
  }

  safetyToolkitMore(tool){
    this.navCtrl.push(SafetyToolkitMorePage, {tool: tool});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SafetyToolkitPage');
  }
}