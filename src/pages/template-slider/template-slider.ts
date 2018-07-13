import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { NotesToSelfPage } from '../notes-to-self/notes-to-self';

/**
 * Generated class for the TemplateSliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-template-slider',
  templateUrl: 'template-slider.html',
})
export class TemplateSliderPage {
  sections;
  slug;
  title;
  images;

  constructor(public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplateSliderPage');
  }

}
