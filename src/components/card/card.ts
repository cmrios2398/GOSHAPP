import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesToSelfPage } from '../../pages/notes-to-self/notes-to-self';
import { SafetyToolkitMorePage } from '../../pages/safety-toolkit-more/safety-toolkit-more';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { registerModuleFactory } from '../../../node_modules/@angular/core/src/linker/ng_module_factory_loader';
import { TemplateSliderPage } from '../../pages/template-slider/template-slider';
import { TemplateQuizPage } from '../../pages/template-quiz/template-quiz';
import { TemplateSlidesArrowsPage } from '../../pages/template-slides-arrows/template-slides-arrows';
import { TemplateSimplePage } from '../../pages/template-simple/template-simple';
import { TemplateImagetopPage } from '../../pages/template-imagetop/template-imagetop';
import { TemplateFlashcardPage } from '../../pages/template-flashcard/template-flashcard';
import { TemplateQuizScorePage } from '../../pages/template-quiz-score/template-quiz-score';
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
  @Input('template') template: any;
  @Input('imagetop') imagetop: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  template_router(slug,title,template, imagetop){
    if(template == "template-slider"){
      this.template_slider(slug,title); //SLIDER TEMPLATE
    }

    else if(template == "template-quiz"){
      this.template_quiz(slug,title); //QUIZ TEMPLATE
    }

    else if(template == "template-slides-arrows"){
      this.template_slides_arrows(slug,title); //SLIDES WITH ARROWS TEMPLATE
    }

    else if(template == "template-imagetop"){
      this.template_imagetop(slug,title,imagetop); //IMAGETOP TEMPLATE
    }

    else if(template == "template-simple"){
      this.template_simple(slug,title); //SIMPLE TEMPLATE
    }

    else if(template == "template-flashcard"){
      this.template_flashcard(slug,title); //FLASHCARD TEMPLATE
    }

    else if(template == "template-quiz-score"){
      this.template_quiz_score(slug,title); //QUIZ SCORE TEMPLATE
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

  template_quiz(slug,title){
    this.navCtrl.push(TemplateQuizPage, {slug: slug, title: title} );

  }

  template_slides_arrows(slug,title){
    this.navCtrl.push(TemplateSlidesArrowsPage, {slug: slug, title: title} );

  }

  template_simple(slug,title){
    this.navCtrl.push(TemplateSimplePage, {slug: slug, title: title} );

  }

  template_flashcard(slug,title){
    this.navCtrl.push(TemplateFlashcardPage, {slug: slug, title: title} );

  }

  template_quiz_score(slug,title){
    this.navCtrl.push(TemplateQuizScorePage, {slug: slug, title: title} );

  }
  


  safetyToolkitMore(slug,title){
    // alert(title);
    this.navCtrl.push(SafetyToolkitMorePage, {slug: slug, title: title} );

  }

}