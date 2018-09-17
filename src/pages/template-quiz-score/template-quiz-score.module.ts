import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemplateQuizScorePage } from './template-quiz-score';

@NgModule({
  declarations: [
    TemplateQuizScorePage,
  ],
  imports: [
    IonicPageModule.forChild(TemplateQuizScorePage),
  ],
})
export class TemplateQuizScorePageModule {}
