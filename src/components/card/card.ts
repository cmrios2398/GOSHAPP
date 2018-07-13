import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafetyToolkitMorePage } from '../../pages/safety-toolkit-more/safety-toolkit-more';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { registerModuleFactory } from '../../../node_modules/@angular/core/src/linker/ng_module_factory_loader';
import { TemplateSliderPage } from '../../pages/template-slider/template-slider';

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {

  text: string;

  @Input('title') title: string;
  @Input('slug') slug: any;
  @Input('template') template: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  template_router(slug,title,template){
    
    if(template == "template-slider"){
      this.template_slider(slug,title); //SLIDER TEMPLATE
    }
    else{
      this.safetyToolkitMore(slug,title); //DEFAULT TEMPLATE
    }
  }

  template_slider(slug,title){
    this.navCtrl.push(TemplateSliderPage, {slug: slug, title: title} );

  }

  safetyToolkitMore(slug,title){
    // alert(title);
    this.navCtrl.push(SafetyToolkitMorePage, {slug: slug, title: title} );

  }

}
