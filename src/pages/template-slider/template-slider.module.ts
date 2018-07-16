import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemplateSliderPage } from './template-slider';

@NgModule({
  declarations: [
    TemplateSliderPage,
  ],
  imports: [
    IonicPageModule.forChild(TemplateSliderPage),
  ],
})
export class TemplateSliderPageModule {}
