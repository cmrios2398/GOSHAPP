import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfectionControlPage } from './infection-control';

@NgModule({
  declarations: [
    InfectionControlPage,
  ],
  imports: [
    IonicPageModule.forChild(InfectionControlPage),
  ],
})
export class InfectionControlPageModule {}
