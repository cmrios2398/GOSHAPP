import { Component, Input, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { AboutPage } from '../pages/about/about';
import { SafetyToolkitPage } from '../pages/safety-toolkit/safety-toolkit';
import { VideoLibraryPage } from '../pages/video-library/video-library';
import { NotesToSelfPage } from '../pages/notes-to-self/notes-to-self';
import { IcuNewStartersPage } from '../pages/icu-new-starters/icu-new-starters';
import { InfectionControlPage } from '../pages/infection-control/infection-control';
import { ClinicalPoliciesPage } from '../pages/clinical-policies/clinical-policies';
import { ClinicalQualityProjectsPage } from '../pages/clinical-quality-projects/clinical-quality-projects';

import { CacheService } from 'ionic-cache'

import { WpApiProvider } from '../providers/wp-api/wp-api';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
    tools;

  rootPage: any = HomePage;


  pages: Array<{title: string, component: any}>;
  activePage: any;

  constructor(public platform: Platform, public cache: CacheService, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'About', component: AboutPage},
      { title: 'Safety Toolkit', component: SafetyToolkitPage },
      { title: 'Video Library', component: VideoLibraryPage },
      { title: 'ICU-New Starters', component: IcuNewStartersPage },
      { title: 'Infection Control', component: InfectionControlPage },
      { title: 'Clinical Policies', component: ClinicalPoliciesPage},
      { title: 'Clinical Quality Projects', component: ClinicalQualityProjectsPage},
    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.cache.setDefaultTTL(60 * 60 *24); //24 hours
      this.cache.setOfflineInvalidate(false); 
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  //   this.wpApiProvider.getSidebar().subscribe( data => {
  //   console.log(data);
  //   this.tools = data;
  // })

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
