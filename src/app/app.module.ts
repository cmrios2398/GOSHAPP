import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { SafetyToolkitPage } from '../pages/safety-toolkit/safety-toolkit';
import { IcuNewStartersPage } from '../pages/icu-new-starters/icu-new-starters';
import { ClinicalPoliciesPage } from '../pages/clinical-policies/clinical-policies';
import { ClinicalQualityProjectsPage } from '../pages/clinical-quality-projects/clinical-quality-projects';
import { VideoLibraryPage } from '../pages/video-library/video-library';
import { NotesToSelfPage } from '../pages/notes-to-self/notes-to-self';
import { SafetyToolkitMorePage } from '../pages/safety-toolkit-more/safety-toolkit-more';
import { TemplateSliderPage } from '../pages/template-slider/template-slider';
import { TemplateImagetopPage } from '../pages/template-imagetop/template-imagetop';
import { VideoPage } from '../pages/video/video';
import { TemplateSlidesArrowsPage } from '../pages/template-slides-arrows/template-slides-arrows';
import { TemplateQuizPage } from '../pages/template-quiz/template-quiz';
import { TemplateSimplePage } from '../pages/template-simple/template-simple';
import { InfectionControlPage } from '../pages/infection-control/infection-control';


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
import { VideoItemComponent } from '../components/video-item/video-item';

import { VideoService } from '../providers/video-service/video-service';
import { FlashCardComponent } from '../components/flash-card/flash-card';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    VideoLibraryPage,
    SafetyToolkitPage,
    IcuNewStartersPage,
    ClinicalQualityProjectsPage,
    ClinicalPoliciesPage,
    SafetyToolkitMorePage,
    NotesToSelfPage,
    AddNotePage,
    AccordionComponent,
    FlashCardComponent,
    AccordionMoreComponent,
    CardComponent,
    VideoItemComponent,
    ViewNotePage,
    VideoPage,
    TemplateSliderPage,
    TemplateImagetopPage,
    TemplateQuizPage,
    TemplateSlidesArrowsPage,
    TemplateSimplePage,
    InfectionControlPage
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
    ClinicalQualityProjectsPage,
    ClinicalPoliciesPage,
    SafetyToolkitMorePage,
    NotesToSelfPage,
    AddNotePage,
    ViewNotePage,
    VideoPage,
    TemplateSliderPage,
    TemplateImagetopPage,
    TemplateQuizPage,
    TemplateSlidesArrowsPage,
    TemplateSimplePage,
    InfectionControlPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteService,
    WpApiProvider,
    VideoService,

  ],
  
})
export class AppModule {}
