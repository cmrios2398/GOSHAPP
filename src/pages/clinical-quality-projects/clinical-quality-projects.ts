import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { Storage } from '@ionic/storage'
import { NotesToSelfPage } from '../notes-to-self/notes-to-self';

@IonicPage()
@Component({
  selector: 'page-clinical-quality-projects',
  templateUrl: 'clinical-quality-projects.html',
})
export class ClinicalQualityProjectsPage {

   tools;

   constructor(public storage: Storage, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider) {
     this.loadData();
   }


  loadData(refresher?){

    if(this.wpApiProvider.isConnected() || navigator.onLine){
      this.wpApiProvider.getClinicalQualityProjects().subscribe( data => {
        console.log(data);
        this.tools = data;
        this.storage.set('dataFrom' + 'CQProjects', this.tools);
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
        this.storage.get('dataFrom' + 'CQProjects').then((data) => {
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

  notesToSelf(){
    this.navCtrl.push(NotesToSelfPage);
  }

  forceReload(refresher?){
    this.loadData(refresher)
    refresher.complete()
  }



 }
