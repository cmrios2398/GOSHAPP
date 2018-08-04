import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular/umd/navigation/nav-controller';


@Injectable()
export class VideoService {

    
  tutorials_keys = {};
  tutorials_list;
  // tutorials_list = [
  //   {
  //     key: 'vhp1',
  //     name: 'Vessel Health',
  //     description: 'Engagement video',
  //     id: 'LXChhaEAuJI'
  //   },
  //   {
  //     key: 'vhp2',
  //     name: 'Vessel Health',
  //     description: 'Education and training video',
  //     id: '5qQ09xz3hOo'
  //   },
  //   {
  //     key: 'sa',
  //     name: 'Situational Awareness',
  //     description: 'Situational Awareness for Everyone (SAFE)',
  //     id: 'UMVRgbN-AS0',
  //   },
  //   {
  //     key: 'phototherapy',
  //     name: 'Phototherapy',
  //     description: 'Preparing the baby for phototherapy training video',
  //     id: 'rm9tWpOZ-IY'
  //   },
  //   {
  //     key: 'babycheck',
  //     name: 'Baby check',
  //     description: 'How to conduct a newborn examination training video',
  //     id: 'IS8t2YaH6Jo'
  //   },
  //   {
  //     key: 'tracheostomy',
  //     name: 'Tracheostomy Support',
  //     description: 'Basic life support of babies and children with a tracheostomy training video',
  //     id: '5wd7KLo32fU'
  //   },
  //   {
  //     key: 'tracheostomytube',
  //     name: 'Changing a tracheostomy tube',
  //     description: "Tracheostomy elective tube change training video",
  //     id: "6vrYRKLhZSg"
  //   }
  // ];

    constructor(public http: HttpClient) {
      this.http.get('http://uclst.co.uk/wp-json/wp/v2/video_library').subscribe( data => {
        console.log(data);
        this.tutorials_list = data;
        // alert(this.videos);
        // this.tool = data[''];
        // this.safetyToolkitMore();
        // alert(this.tools);
        // alert(this.tutorials_list);
      })
      console.log('Hello VideoService Service');
        for(let i in this.tutorials_list){
          alert(this.tutorials_keys[this.tutorials_list[i].key])
            this.tutorials_keys[this.tutorials_list[i].key] = this.tutorials_list[i];
        }
        // alert(this.tutorials_list)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoLibraryPage');
  }
  
  
 

  
}
  
