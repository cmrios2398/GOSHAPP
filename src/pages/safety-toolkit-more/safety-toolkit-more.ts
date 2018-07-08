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
  

  sections;
  slug;
  title;

  constructor(public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider, public http: HttpClient) {
    this.slug = this.navParams.get('slug');
    console.log(this.slug);
    
    this.title = this.navParams.get('title');
    // alert(this.title);
    console.log(this.title);

    this.wpApiProvider.getSTSpecific(this.slug).subscribe( data => {
      console.log(data);
      this.sections = data;
    })
  }



  

  notesToSelf(){
    this.navCtrl.push(NotesToSelfPage);
  }


}