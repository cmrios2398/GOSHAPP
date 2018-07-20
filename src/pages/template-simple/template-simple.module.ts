import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemplateSimplePage } from './template-simple';

@NgModule({
  declarations: [
    TemplateSimplePage,
  ],
  imports: [
    IonicPageModule.forChild(TemplateSimplePage),
  ],
})
export class TemplateSimplePageModule {}
