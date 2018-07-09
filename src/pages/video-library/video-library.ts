import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoService } from '../../providers/video-service/video-service'
import { VideoPage } from '../video/video';


@IonicPage()
@Component({
  selector: 'page-video-library',
  templateUrl: 'video-library.html',
})
export class VideoLibraryPage {

  narrowed_tutorials;
  data;

  constructor(public navCtrl: NavController, public navParams: NavParams, private videoService: VideoService) {
    this.narrowed_tutorials = this.videoService.tutorials_list;
    this.data = {
      search: ''
    }
  }
  
  search(){
    alert("working");
    var searchedString = this.data.search.toLocaleLowerCase();

    if (searchedString == ''){
      this.narrowed_tutorials = this.videoService.tutorials_list;
      return; 
    }

    this.narrowed_tutorials = this.videoService.tutorials_list.filter(function(tutorial){
      if(tutorial.name.toLocaleLowerCase().indexOf(searchedString) > -1 || tutorial.description.toLocaleLowerCase().indexOf(searchedString) > -1){
        return true;
      }
        return false;
    })
  }

  viewVideo(key){
    this.navCtrl.push(VideoPage, {videokey: key} );

  }
  
}
