import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClinicalQualityProjectsPage } from './clinical-quality-projects';

@NgModule({
  declarations: [
    ClinicalQualityProjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClinicalQualityProjectsPage),
  ],
})
export class ClinicalQualityProjectsPageModule {}
