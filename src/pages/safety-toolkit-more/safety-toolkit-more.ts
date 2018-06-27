import { Component, ViewChild, OnInit, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesToSelfPage } from '../notes-to-self/notes-to-self';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SafetyToolkitMorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-safety-toolkit-more',
  templateUrl: 'safety-toolkit-more.html',
})
export class SafetyToolkitMorePage {
  tool;
  sections;
 

  constructor(public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider, public http: HttpClient) {
    this.tool = this.navParams.get('tool');
    console.log(this.tool);

    this.http.get('http://uclst.co.uk/wp-json/wp/v2/vessel-health').subscribe( data => {
      console.log(data);
      this.sections = data;
    })
  }



  

  notesToSelf(){
    this.navCtrl.push(NotesToSelfPage);
  }


}