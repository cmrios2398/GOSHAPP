import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, NavController, NavParams, ToastController } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ImageViewerController } from 'ionic-img-viewer';

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

  _imageViewerCtrl: ImageViewerController;

  tools;
  slug;
  title;
  images;
  
  @ViewChild('slider') slider: Slides;

  slides = [
    {
       
      },
      {
       
      },
      {
       
      },
      {
       
      },
      {
       
      },
      {
        
      }
    ];
    constructor(public storage: Storage, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider, public http: HttpClient, imageViewerCtrl: ImageViewerController) {
      
      this._imageViewerCtrl = imageViewerCtrl;

      this.slug = this.navParams.get('slug');
      console.log(this.slug);
      
      this.title = this.navParams.get('title');
      // alert(this.title);
      console.log(this.title);
  
      this.loadData();
    }

    presentImage(myImage) {
      const imageViewer = this._imageViewerCtrl.create(myImage);
      imageViewer.present();
  
    }

    
  loadData(refresher?){
    
    if(this.wpApiProvider.isConnected() || navigator.onLine){
      this.wpApiProvider.getSTSpecific(this.slug).subscribe( data => {
        console.log(data);
        this.tools = data;
        this.storage.set('dataFrom' + this.slug, this.tools);
      })
      if(refresher){
      let toast = this.toastCtrl.create({
        message: 'Data loaded from server.',
        duration: 2000
      })
      toast.present();
    }
      }
      else{
        this.storage.get('dataFrom' + this.slug).then((data) => {
          this.tools = data;
        })
        if(refresher){
        let toast = this.toastCtrl.create({
          message: 'No connection - failed to retrieve from server.',
          duration: 2000
        })
        toast.present();
      }
      }
  }

  
  forceReload(refresher?){
    this.loadData(refresher)
    refresher.complete()
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
