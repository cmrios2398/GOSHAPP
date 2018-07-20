import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesToSelfPage } from '../../pages/notes-to-self/notes-to-self';
import { SafetyToolkitMorePage } from '../../pages/safety-toolkit-more/safety-toolkit-more';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { registerModuleFactory } from '../../../node_modules/@angular/core/src/linker/ng_module_factory_loader';
import { TemplateSliderPage } from '../../pages/template-slider/template-slider';
import { TemplateImagetopPage } from '../../pages/template-imagetop/template-imagetop';

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
  @Input('slug') slug: any;

  @Input('template') template: string;
  @Input('imagetop') imagetop: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer) {
    
      // this.safetyToolkitMore();
      // alert(this.tools);
      
      // alert(this.slug);
      // alert(this.template);
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


  template_router(slug,title,template,imagetop){
    
    if(template == "template-slider"){
      this.template_slider(slug,title); //SLIDER TEMPLATE
    }
    else if(template == "template-imagetop"){
      this.template_imagetop(slug,title,imagetop); //IMAGETOP TEMPLATE
    }
    else{
      this.safetyToolkitMore(slug,title); //DEFAULT TEMPLATE
    }
  }

  template_slider(slug,title){
    this.navCtrl.push(TemplateSliderPage, {slug: slug, title: title});
  }

  template_imagetop(slug,title,imagetop){
    this.navCtrl.push(TemplateImagetopPage, {slug: slug, title: title, imagetop: imagetop});
  }

  safetyToolkitMore(slug,title){
    // alert(title);
    this.navCtrl.push(SafetyToolkitMorePage, {slug: slug, title: title} );

  }


}
