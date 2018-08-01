import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemplateQuizPage } from './template-quiz';

@NgModule({
  declarations: [
    TemplateQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(TemplateQuizPage),
  ],
})
export class TemplateQuizPageModule {}
