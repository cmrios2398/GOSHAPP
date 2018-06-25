import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SafetyToolkitPage } from './safety-toolkit';

@NgModule({
  declarations: [
    SafetyToolkitPage,
  ],
  imports: [
    IonicPageModule.forChild(SafetyToolkitPage),
  ],
})
export class SafetyToolkitPageModule {}
