import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoService } from '../../providers/video-service/video-service'

/**
 * Generated class for the VideoLibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-library',
  templateUrl: 'video-library.html',
})
export class VideoLibraryPage {

  narrowed_tutorials;
  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }
  // constructor(public navCtrl: NavController, public navParams: NavParams, private videoService: VideoService) {
  // }
  constructor(public navCtrl: NavController, public navParams: NavParams, private videoService: VideoService) {
    this.narrowed_tutorials = this.videoService.tutorials_list;
  }
  
  
}
