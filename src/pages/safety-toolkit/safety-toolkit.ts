import { Component, ViewChild, Renderer  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesToSelfPage } from '../notes-to-self/notes-to-self';
import { SafetyToolkitMorePage } from '../safety-toolkit-more/safety-toolkit-more';
import { VesselHealthPage } from '../vessel-health/vessel-health';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
/**
 * Generated class for the SafetyToolkitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-safety-toolkit',
  templateUrl: 'safety-toolkit.html',
})
export class SafetyToolkitPage {
  tools;
  accordionExpanded = false;
  @ViewChild("cc") cardContent: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider, public renderer: Renderer) { 
    this.wpApiProvider.getSafetyToolkit().subscribe( data => {
      console.log(data);
      this.tools = data;
    })
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

  vesselHealth(){
    this.navCtrl.push(VesselHealthPage);
  }

  safetyToolkitMore(tool){
    this.navCtrl.push(SafetyToolkitMorePage, {tool: tool});
  }



 
}