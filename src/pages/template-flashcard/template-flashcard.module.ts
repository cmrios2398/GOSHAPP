import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemplateFlashcardPage } from './template-flashcard';

@NgModule({
  declarations: [
    TemplateFlashcardPage,
  ],
  imports: [
    IonicPageModule.forChild(TemplateFlashcardPage),
  ],
})
export class TemplateFlashcardPageModule {}
