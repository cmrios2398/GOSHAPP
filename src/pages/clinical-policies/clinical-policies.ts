import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { Storage } from '@ionic/storage';
import { NotesToSelfPage } from '../notes-to-self/notes-to-self';



/**
 * Generated class for the ClinicalPoliciesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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


 notesToSelf(){
   this.navCtrl.push(NotesToSelfPage);
 }
}
