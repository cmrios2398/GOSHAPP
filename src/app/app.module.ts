import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { SafetyToolkitPage } from '../pages/safety-toolkit/safety-toolkit';
import { IcuNewStartersPage } from '../pages/icu-new-starters/icu-new-starters';
import { VideoLibraryPage } from '../pages/video-library/video-library';
import { NotesToSelfPage } from '../pages/notes-to-self/notes-to-self';
import { SafetyToolkitMorePage } from '../pages/safety-toolkit-more/safety-toolkit-more';
import { VideoPage } from '../pages/video/video'
import { TemplateSliderPage } from '../pages/template-slider/template-slider'
import { TemplateImagetopPage } from '../pages/template-imagetop/template-imagetop'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { AddNotePage } from '../pages/add-note/add-note';
import { NoteService } from '../providers/note-service/note-service';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewNotePage } from '../pages/view-note/view-note';
import { EmailComposer } from '@ionic-native/email-composer'
import { WpApiProvider } from '../providers/wp-api/wp-api';
import { AccordionComponent } from '../components/accordion/accordion';
import { AccordionMoreComponent } from '../components/accordion-more/accordion-more';
import { CardComponent } from '../components/card/card';
import { VideoService } from '../providers/video-service/video-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    VideoLibraryPage,
    SafetyToolkitPage,
    IcuNewStartersPage,
    SafetyToolkitMorePage,
    NotesToSelfPage,
    AddNotePage,
    AccordionComponent,
    AccordionMoreComponent,
    CardComponent,
    ViewNotePage,
    VideoPage,
    TemplateSliderPage,
    TemplateImagetopPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    VideoLibraryPage,
    SafetyToolkitPage,
    IcuNewStartersPage,
    SafetyToolkitMorePage,
    NotesToSelfPage,
    AddNotePage,
    ViewNotePage,
    VideoPage,
    TemplateSliderPage,
    TemplateImagetopPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteService,
    WpApiProvider,
    VideoService,
    
  ]
})
export class AppModule {}
