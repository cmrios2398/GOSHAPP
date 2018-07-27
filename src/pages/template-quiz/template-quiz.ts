import { Component, ViewChild } from '@angular/core';
import { AlertController, IonicPage, Slides, NavController, NavParams } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the TemplateQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-template-quiz',
  templateUrl: 'template-quiz.html',
})
export class TemplateQuizPage {

  questions;
  slug;
  title;
  images;
  
  @ViewChild('slider') slider: Slides;

  slides = [
    {
        title: 'Dream\'s Adventure',
        imageUrl: 'assets/img/lists/wishlist-1.jpg',
        songs: 2,
        private: false
      },
      {
        title: 'For the Weekend',
        imageUrl: 'assets/img/lists/wishlist-2.jpg',
        songs: 4,
        private: false
      },
      {
        title: 'Family Time',
        imageUrl: 'assets/img/lists/wishlist-3.jpg',
        songs: 5,
        private: true
      },
      {
        title: 'My Trip',
        imageUrl: 'assets/img/lists/wishlist-4.jpg',
        songs: 12,
        private: true
      },
      {
        title: 'My Trip',
        imageUrl: 'assets/img/lists/wishlist-4.jpg',
        songs: 12,
        private: true
      },
      {
        title: 'My Trip',
        imageUrl: 'assets/img/lists/wishlist-4.jpg',
        songs: 12,
        private: true
      }
    ];

    constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider, public http: HttpClient) {
      this.slug = this.navParams.get('slug');
      console.log(this.slug);
      
      this.title = this.navParams.get('title');
      // alert(this.title);
      console.log(this.title);
  
      this.wpApiProvider.getSTSpecific(this.slug).subscribe( data => {
        console.log(data);
        this.questions = data;
      })
    }


  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Excellent!',
      subTitle: 'Now move onto the next question...',
      buttons: ['Next']
    });
    alert.present();
}

wrongAlert() {
  const alert = this.alertCtrl.create({
    title: 'Think about this again',
    subTitle: 'Return to your step by step process for blood gas interpretation...',
    buttons: ['Return']
  });
  alert.present();
}


}
