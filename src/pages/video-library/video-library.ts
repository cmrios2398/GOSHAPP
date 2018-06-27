import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoLibraryPage');
  }


  tutorials_list = [
    {
      key: 'vhp1',
      name: 'Vessel Health',
      description: 'Engagement video',
      id: 'LXChhaEAuJI'
    },
    {
      key: 'vhp2',
      name: 'Vessel Health',
      description: 'Education and training video',
      id: '5qQ09xz3hOo'
    },
    {
      key: 'sa',
      name: 'Situational Awareness',
      description: 'Situational Awareness for Everyone (SAFE)',
      id: 'UMVRgbN-AS0',
    },
    {
      key: 'phototherapy',
      name: 'Phototherapy',
      description: 'Preparing the baby for phototherapy training video',
      id: 'rm9tWpOZ-IY'
    },
    {
      key: 'babycheck',
      name: 'Baby check',
      description: 'How to conduct a newborn examination training video',
      id: 'IS8t2YaH6Jo'
    },
    {
      key: 'tracheostomy',
      name: 'Tracheostomy Support',
      description: 'Basic life support of babies and children with a tracheostomy training video',
      id: '5wd7KLo32fU'
    },
    {
      key: 'tracheostomytube',
      name: 'Changing a tracheostomy tube',
      description: "Tracheostomy elective tube change training video",
      id: "6vrYRKLhZSg"
    }
  ];
  
  tutorials_keys = {};

  // for (var i=0;i<tutorials_list.length;i++){
  //   tutorials_keys[tutorials_list[i].key] = tutorials_list[i];
  // }

// return {
//     list: tutorials_list,
//     keys: tutorials_keys

}
