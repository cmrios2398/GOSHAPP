import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoService } from '../../providers/video-service/video-service'
import { VideoPage } from '../video/video';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-video-library',
  templateUrl: 'video-library.html',
})
export class VideoLibraryPage {

  
  narrowed_tutorials = [];
  data;
  videos;

  @Input('key') key: string;
  @Input('id') id: string;
  @Input('description') description: string;
  @Input('name') name: string;

   constructor(public navCtrl: NavController, public navParams: NavParams, private videoService: VideoService, public http: HttpClient) {
    // this.narrowed_tutorials = this.videoService.tutorials_list;
    
        this.http.get('http://uclst.co.uk/wp-json/wp/v2/video_library').subscribe( data => {
          console.log(data);
          this.videos = data;
          // alert(this.videos);
          // this.tool = data[''];
          // this.safetyToolkitMore();
          // alert(this.tools);
        })
    // alert(this.videos)
    this.data = {
      search: ''
    }
    this.narrowed_tutorials = this.videos;
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
