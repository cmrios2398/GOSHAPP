import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NotesToSelfPage } from '../notes-to-self/notes-to-self';
import { SafetyToolkitMorePage } from '../safety-toolkit-more/safety-toolkit-more';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import 'rxjs/add/operator/map'
import { CacheService } from 'ionic-cache';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Generated class for the SafetyToolkitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-safety-toolkit',
  templateUrl: 'safety-toolkit.html',
})
export class SafetyToolkitPage {
  tools: Observable<any>;
  public searchOpen = false;
  // tool;


  constructor(private http: HttpClient, public navCtrl: NavController, public navParams: NavParams, private cache: CacheService, public wpApiProvider: WpApiProvider, private toastCtrl: ToastController) {
    // console.log(this.loadData());
    // this.tools = this.loadData();
    this.loadData();
    // let req = this.wpApiProvider.getSafetyToolkit()
    // .subscribe(res => {
    //   let toast = this.toastCtrl.create({
    //     message: 'Data loaded from server',
    //     duration: 2000
    //   })
    //   console.log(res);
    //   toast.present();
    //   this.tools = res;
    // })

    // this.tools = this.cache.loadFromObservable('safetyTools', req)

  }


  loadData(refresher?){


    let url = 'http://uclst.co.uk/wp-json/wp/v2/safety_toolkit'
    let req = this.http.get(url)
    .map(res => {
      let toast = this.toastCtrl.create({
        message: 'Data loaded from server.',
        duration: 2000
      })
      toast.present();
      return res;

    })

    if (refresher) {

    if(!this.wpApiProvider.isConnected()){
      let toast = this.toastCtrl.create({
        message: 'No connection - failed to retrieve from server.',
        duration: 2000
      })
      toast.present();
    }
      let delayType = 'all';
      this.tools = this.cache.loadFromDelayedObservable(url, req, undefined, undefined, delayType);

      this.tools.subscribe(data=> {
        refresher.complete();
      })
    } else {
      this.tools = this.cache.loadFromObservable(url, req);

    }

  }

  forceReload(refresher){
    this.loadData(refresher);
  }


  notesToSelf(){
    this.navCtrl.push(NotesToSelfPage);
  }


  // safetyToolkitMore(slug,title){
  //   // alert(toolLink);
  //   this.navCtrl.push(SafetyToolkitMorePage, {slug: slug, title: title});

  // }




}
