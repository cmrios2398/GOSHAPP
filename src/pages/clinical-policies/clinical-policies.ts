import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
<<<<<<< HEAD
import { Storage } from '@ionic/storage';
import { NotesToSelfPage } from '../notes-to-self/notes-to-self';
=======
import { Storage } from '@ionic/storage'
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef

@IonicPage()
@Component({
  selector: 'page-clinical-policies',
  templateUrl: 'clinical-policies.html',
})
export class ClinicalPoliciesPage {

   tools;
   public searchOpen = false;

   constructor(public storage: Storage, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider) {
     this.loadData();
   }

   
  loadData(refresher?){
    
    if(this.wpApiProvider.isConnected() || navigator.onLine){
      this.wpApiProvider.getClinicalPolicies().subscribe( data => {
        console.log(data);
        this.tools = data;
        this.storage.set('dataFrom' + 'ClinicalPolicies', this.tools);
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
        this.storage.get('dataFrom' + 'ClinicalPolicies').then((data) => {
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

  loadData(refresher?){

    if(this.wpApiProvider.isConnected() || navigator.onLine){
      this.wpApiProvider.getClinicalPolicies().subscribe( data => {
        console.log(data);
        this.tools = data;
        this.storage.set('dataFrom' + 'ClinicalPolicies', this.tools);
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
        this.storage.get('dataFrom' + 'ClinicalPolicies').then((data) => {
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

  notesToSelf(){
    this.navCtrl.push(NotesToSelfPage);
  }
 }
