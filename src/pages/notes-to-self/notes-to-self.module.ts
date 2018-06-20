import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotesToSelfPage } from './notes-to-self';
import { AddNotePage } from '../add-note/add-note';

@NgModule({
  declarations: [
    NotesToSelfPage,
    AddNotePage
  ],
  imports: [
    IonicPageModule.forChild(NotesToSelfPage),
  ],
})
export class NotesToSelfPageModule {}
