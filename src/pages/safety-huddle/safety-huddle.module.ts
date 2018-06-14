import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SafetyHuddlePage } from './safety-huddle';

@NgModule({
  declarations: [
    SafetyHuddlePage,
  ],
  imports: [
    IonicPageModule.forChild(SafetyHuddlePage),
  ],
})
export class SafetyHuddlePageModule {}
