import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { VideoService } from '../../providers/video-service/video-service'
import { VideoPage } from '../video/video';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network'


@IonicPage()
@Component({
  selector: 'page-video-library',
  templateUrl: 'video-library.html',
})
export class VideoLibraryPage {


  narrowed_tutorials = [];
  data;
  videos;
  public searchOpen = false;

  @Input('key') key: string;
  @Input('id') id: string;
  @Input('description') description: string;
  @Input('name') name: string;


   constructor(public toastCtrl: ToastController, public storage: Storage, public navCtrl: NavController, public navParams: NavParams, private videoService: VideoService, public http: HttpClient) {
    // this.narrowed_tutorials = this.videoService.tutorials_list;


    // this._net.onConnect().subscribe(() => {
    //   this.http.get('http://uclst.co.uk/wp-json/wp/v2/video_library').subscribe( data => {
    //   console.log(data);
    //   this.videos = data;
    //   storage.set('http://uclst.co.uk/wp-json/wp/v2/video_library', this.videos);
    //   alert("worksTS")
    //  })
    // })

    // this.narrowed_tutorials = this.videos;


    // this._net.onDisconnect().subscribe(() => {
    //   this.http.get('http://uclst.co.uk/wp-json/wp/v2/video_library').subscribe( data => {
    //     console.log(data);
    //     this.videos = data;
    //   })})
    this.data = {
      search: ''
    }

    this.loadData();
}

  loadData(refresher?){

    if(this.videoService.isConnected() || navigator.onLine){
      this.http.get('http://uclst.co.uk/wp-json/wp/v2/video_library').subscribe( data => {
          console.log(data);
          this.videos = data;
          this.storage.set('videosKey', this.videos);
    })
    if(refresher){
    let toast = this.toastCtrl.create({
      message: 'Data loaded from server.',
      duration: 2000
    })
    toast.present();
  }
  }
    else {
      this.storage.get('videosKey').then((val) => {
        this.videos = val;
    }
    )
    if (refresher){
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


  search(){
    var searchedString = this.data.search.toLocaleLowerCase();


    if (searchedString == ''){
      this.videos = this.videoService.tutorials_list;
      return;
    }

    this.videos = this.videoService.tutorials_list.filter(function(tutorial){
      // alert(tutorial.video_name);
      if(tutorial.video_name.toLocaleLowerCase().indexOf(searchedString) > -1 || tutorial.video_description.toLocaleLowerCase().indexOf(searchedString) > -1){
        return true;
      }
        return false;
    })

  }
}
