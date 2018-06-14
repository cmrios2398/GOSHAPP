import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoLibraryPage } from './video-library';

@NgModule({
  declarations: [
    VideoLibraryPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoLibraryPage),
  ],
})
export class VideoLibraryPageModule {}
