import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts = [];

   constructor(public navCtrl: NavController, public navParams: NavParams) {
   }


    ionViewDidLoad() {
       this.posts = [
         {
           name: 'Clinical guidelines',
           image: 'http://via.placeholder.com/144x144'
         },
         {
           name: 'New Starters',
           image: 'http://via.placeholder.com/144x144'
         },
         {
           name: 'Video & resources',
           image: 'http://via.placeholder.com/144x144'
         },
         {
           name: 'Divisional info',
           image: 'http://via.placeholder.com/144x144'
         },
         {
           name: 'What\'s new',
           image: 'http://via.placeholder.com/144x144'
         },
         {
           name: 'My Notes',
           image: 'http://via.placeholder.com/144x144'
         }
       ];
     }

   }
