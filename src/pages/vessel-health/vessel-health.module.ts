import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VesselHealthPage } from './vessel-health';

@NgModule({
  declarations: [
    VesselHealthPage,
  ],
  imports: [
    IonicPageModule.forChild(VesselHealthPage),
  ],
})
export class VesselHealthPageModule {}
