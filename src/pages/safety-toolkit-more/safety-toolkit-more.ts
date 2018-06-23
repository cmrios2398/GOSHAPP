import { Component, ViewChild, OnInit, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesToSelfPage } from '../notes-to-self/notes-to-self';

/**
 * Generated class for the SafetyToolkitMorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-safety-toolkit-more',
  templateUrl: 'safety-toolkit-more.html',
})
export class SafetyToolkitMorePage implements OnInit{
  tool;
  accordionExpanded = false;
  @ViewChild("cc") cardContent: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer) {
    this.tool = this.navParams.get('tool');
    console.log(this.tool);
  }

  ngOnInit(){
    console.log(this.cardContent.nativeElement);
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 300ms, padding 300ms")
  }

  toggleAccordion() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height" , "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding" , "0px 16px");
    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "1000px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding" , "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
  }

  notesToSelf(){
    this.navCtrl.push(NotesToSelfPage);
  }


}