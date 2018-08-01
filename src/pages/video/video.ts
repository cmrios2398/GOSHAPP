import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoService } from '../../providers/video-service/video-service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  id;
  name;
  description;
  videourl;
  trustedVideoUrl: SafeResourceUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private videoService: VideoService, private domSanitizer: DomSanitizer) {
    // this.id = videoService.tutorials_keys[navParams.get('id')];
    this.id = this.navParams.get('id');
    this.name = this.navParams.get('name');
    this.description = this.navParams.get('description');
    this.videourl = "https://www.youtube.com/embed/" + this.id;
    
   
  }

  ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videourl);
}     
  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }


}
