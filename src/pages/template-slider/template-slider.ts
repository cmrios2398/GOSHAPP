import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { NotesToSelfPage } from '../notes-to-self/notes-to-self';
import { Storage } from '@ionic/storage';
import { ImageViewerController } from 'ionic-img-viewer';

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

  _imageViewerCtrl: ImageViewerController;

  sections;
  slug;
  title;
  images;
  public searchOpen = false;

  constructor(public storage: Storage, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider, imageViewerCtrl: ImageViewerController) {
   
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
        this.sections = data;
        this.storage.set('dataFrom' + this.slug, this.sections);
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
          this.sections = data;
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


  notesToSelf(){
    this.navCtrl.push(NotesToSelfPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplateSliderPage');
  }

}
