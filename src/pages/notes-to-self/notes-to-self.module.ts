import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotesToSelfPage } from './notes-to-self';

@NgModule({
  declarations: [
    NotesToSelfPage,
  ],
  imports: [
    IonicPageModule.forChild(NotesToSelfPage),
  ],
})
export class NotesToSelfPageModule {}
