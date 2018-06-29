import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesToSelfPage } from '../../pages/notes-to-self/notes-to-self';
import { SafetyToolkitMorePage } from '../../pages/safety-toolkit-more/safety-toolkit-more';
import { WpApiProvider } from '../../providers/wp-api/wp-api';

/**

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit {

  accordionExpanded = false;
  
  @ViewChild("cc") cardContent: any;
  @Input('title') title: string;
  @Input('icon') icon: any;
  @Input('slug') slug: string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer) {
    
      // this.safetyToolkitMore();
      // alert(this.tools);
      
      // alert(this.tool.title);
    
  }

  ngOnInit(){
    console.log(this.cardContent.nativeElement);
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 200ms, padding 200ms")
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

  safetyToolkitMore(slug){
    // alert(toolLink);
    this.navCtrl.push(SafetyToolkitMorePage, {slug: slug} );

  }


}
