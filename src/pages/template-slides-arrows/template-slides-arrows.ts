import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, NavController, NavParams } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the TemplateSlidesArrowsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-template-slides-arrows',
  templateUrl: 'template-slides-arrows.html',
})
export class TemplateSlidesArrowsPage {

  tools;
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
    constructor(public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider, public http: HttpClient) {
      this.slug = this.navParams.get('slug');
      console.log(this.slug);
      
      this.title = this.navParams.get('title');
      // alert(this.title);
      console.log(this.title);
  
      this.wpApiProvider.getSTSpecific(this.slug).subscribe( data => {
        console.log(data);
        this.tools = data;
      })
    }

    currentIndex = 0;

  nextSlide() {
    this.slider.slideNext();
  }

  previousSlide() {
    this.slider.slidePrev();
  }

  onSlideChanged() {
    this.currentIndex = this.slider.getActiveIndex();
     console.log('Slide changed! Current index is', this.currentIndex);
  }

}
