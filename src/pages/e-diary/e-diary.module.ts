import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EDiaryPage } from './e-diary';

@NgModule({
  declarations: [
    EDiaryPage,
  ],
  imports: [
    IonicPageModule.forChild(EDiaryPage),
  ],
})
export class EDiaryPageModule {}
