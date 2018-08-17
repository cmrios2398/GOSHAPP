import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { Storage } from '@ionic/storage'


@IonicPage()
@Component({
  selector: 'page-icu-new-starters',
  templateUrl: 'icu-new-starters.html',
})
export class IcuNewStartersPage {

  tools;


  constructor(public storage: Storage, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider) { 
    this.loadData();
  }

   
  loadData(refresher?){
    
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
  }

  
  forceReload(refresher?){
    this.loadData(refresher)
    refresher.complete()
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IcuNewStartersPage');
  }

}
