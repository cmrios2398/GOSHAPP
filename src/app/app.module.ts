import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SafetyToolkitPage } from '../pages/safety-toolkit/safety-toolkit';
import { VideoLibraryPage } from '../pages/video-library/video-library';
import { NotesToSelfPage } from '../pages/notes-to-self/notes-to-self';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VideoLibraryPage,
    SafetyToolkitPage,
    NotesToSelfPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VideoLibraryPage,
    SafetyToolkitPage,
    NotesToSelfPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
