import { Component, Input, Injectable, ViewChild } from '@angular/core';
import { NavParams } from '../../../node_modules/ionic-angular/umd/navigation/nav-params';
import { VideoService } from '../../providers/video-service/video-service';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { VideoPage } from '../../pages/video/video';
import { Nav, NavController } from '../../../node_modules/ionic-angular/';

/**
 * Generated class for the VideoItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'video-item',
  templateUrl: 'video-item.html'
})

export class VideoItemComponent {

  narrowed_tutorials;
  data;
  videos;

  @Input('key') key: string;
  @Input('id') id: string;
  @Input('description') description: string;
  @Input('name') name: string;
 

  constructor(private videoService: VideoService, private http: HttpClient, public navCtrl: NavController) {
    // this.narrowed_tutorials = this.videoService.tutorials_list;
    console.log('Hello VideoItemComponent Component');

        this.http.get('http://uclst.co.uk/wp-json/wp/v2/video_library').subscribe( data => {
          console.log(data);
          this.videos = data;
          // alert(this.videos);
          // this.tool = data[''];
          // this.safetyToolkitMore();
          // alert(this.tools);
        })
    this.data = {
      search: ''
    }
    this.narrowed_tutorials = this.videos;
  }
  

  search(){

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

  viewVideo(id,name,description){
    
    this.navCtrl.push(VideoPage, {id: id, name: name, description: description} );

  }
}
