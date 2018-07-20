import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesToSelfPage } from '../notes-to-self/notes-to-self';
import { WpApiProvider } from '../../providers/wp-api/wp-api';

/**
 * Generated class for the TemplateImagetopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-template-imagetop',
  templateUrl: 'template-imagetop.html',
})
export class TemplateImagetopPage {

  sections;
  slug;
  title;
  imagetop;

  constructor(public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider) {
    this.slug = this.navParams.get('slug');
    console.log(this.slug);
    
    this.title = this.navParams.get('title');
    console.log(this.title);

    this.imagetop = this.navParams.get('imagetop');
    console.log(this.imagetop);

    this.wpApiProvider.getSTSpecific(this.slug).subscribe( data => {
      console.log(data);
      this.sections = data;
    })
  }

  notesToSelf(){
    this.navCtrl.push(NotesToSelfPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplateImagetopPage');
  }

}
