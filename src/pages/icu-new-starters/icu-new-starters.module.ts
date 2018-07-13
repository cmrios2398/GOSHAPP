import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IcuNewStartersPage } from './icu-new-starters';

@NgModule({
  declarations: [
    IcuNewStartersPage,
  ],
  imports: [
    IonicPageModule.forChild(IcuNewStartersPage),
  ],
})
export class IcuNewStartersPageModule {}
