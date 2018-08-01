import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClinicalPoliciesPage } from './clinical-policies';

@NgModule({
  declarations: [
    ClinicalPoliciesPage,
  ],
  imports: [
    IonicPageModule.forChild(ClinicalPoliciesPage),
  ],
})
export class ClinicalPoliciesPageModule {}
