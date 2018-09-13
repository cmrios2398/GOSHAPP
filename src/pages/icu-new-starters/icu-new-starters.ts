import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
<<<<<<< HEAD
import { NotesToSelfPage } from '../notes-to-self/notes-to-self';
=======
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { Storage } from '@ionic/storage'


@IonicPage()
@Component({
  selector: 'page-icu-new-starters',
  templateUrl: 'icu-new-starters.html',
})
export class IcuNewStartersPage {

  tools;
  public searchOpen = false;


  constructor(public storage: Storage, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider) {
    this.loadData();
  }


  loadData(refresher?){

<<<<<<< HEAD
=======
  constructor(public storage: Storage, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider) { 
    this.loadData();
  }

   
  loadData(refresher?){
    
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
    if(this.wpApiProvider.isConnected() || navigator.onLine){
      this.wpApiProvider.getICU().subscribe( data => {
        console.log(data);
        this.tools = data;
        this.storage.set('dataFrom' + 'ICUNewStarters', this.tools);
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
        this.storage.get('dataFrom' + 'ICUNewStarters').then((data) => {
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
<<<<<<< HEAD
  }


  forceReload(refresher?){
    this.loadData(refresher)
    refresher.complete()
=======
  }

  
  forceReload(refresher?){
    this.loadData(refresher)
    refresher.complete()
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IcuNewStartersPage');
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
  }


  notesToSelf(){
    this.navCtrl.push(NotesToSelfPage);
  }



}
