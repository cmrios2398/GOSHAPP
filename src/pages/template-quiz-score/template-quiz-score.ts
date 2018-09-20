import { Component, ViewChild } from '@angular/core';
import { AlertController, IonicPage, Slides, NavController, NavParams, ToastController,  } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage'

/**
 * Generated class for the TemplateQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-template-quiz-score',
  templateUrl: 'template-quiz-score.html',
})
export class TemplateQuizScorePage {

  @ViewChild(Slides) slides: Slides;

  answeredFinally: boolean = false;
	
	// Our total score counter
	score: number = 0;

  questions: any;
  
  selectFirst: boolean;
	selectSecond: boolean;
	selectThird: boolean;
  selectFourth: boolean;

  alert: boolean;
  
	
  
  slug;
  title;
  images;
  
 


    constructor(public toastCtrl: ToastController, public storage: Storage, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider, public http: HttpClient) {
      this.slug = this.navParams.get('slug');
      console.log(this.slug);
      
      this.title = this.navParams.get('title');
      // alert(this.title);
      console.log(this.title);
  
      this.loadData();
    }

    
  loadData(refresher?){
    
    if(this.wpApiProvider.isConnected() || navigator.onLine){
      this.wpApiProvider.getSTSpecific(this.slug).subscribe( data => {
        console.log(data);
        this.questions = data;
        this.storage.set('dataFrom' + this.slug, this.questions);
      })
      if(refresher){
      let toast = this.toastCtrl.create({
        message: 'Data loaded from server.',
        duration: 2000
      })
      toast.present();
    }
      }
      else{
        this.storage.get('dataFrom' + this.slug).then((data) => {
          this.questions = data;
        })
        if(refresher){
        let toast = this.toastCtrl.create({
          message: 'No connection - failed to retrieve from server.',
          duration: 2000
        })
        toast.present();
      }
      }
  }

  
  forceReload(refresher?){
    this.loadData(refresher)
    refresher.complete()
  }
  
  changeSlide(){
    this.slides.lockSwipes(false);
		this.slides.slideNext();
		this.slides.lockSwipes(true);
  }
  

  
  checkAllFalse() {
		this.selectFirst = false;
		this.selectSecond = false;
		this.selectThird = false;
		this.selectFourth = false;
  }
  
	selectAnswer(question, selection, choice){

		if (selection == "first") {
			this.checkAllFalse();
      this.selectFirst = true;
      this.answeredFinally = true;
      if (question.correct == "first")
      {
        this.score++;
      }
      
		}

		else if (selection == "second") {
			this.checkAllFalse();
      this.selectSecond = true;
      this.answeredFinally = true;
      if (question.correct == "second")
      {
        this.score++;
      }
		}

		else if (selection == "third") {
			this.checkAllFalse();
      this.selectThird = true;
      this.answeredFinally = true;
      if (question.correct == "third")
      {
        this.score++;
      }
		}

		else if (selection == "fourth") {
			this.checkAllFalse();
      this.selectFourth = true;
      this.answeredFinally = true;
      if (question.correct == "fourth")
      {
        this.score++;
      }
		}



		setTimeout(() => {
			this.answeredFinally = false;
			this.changeSlide();
			this.checkAllFalse();
		}, 1000);
	}
  
  restartQuiz(){
    this.score = 0;
		this.slides.lockSwipes(false);
		this.slides.slideTo(1, 1000);
		this.slides.lockSwipes(true);
	}
  



}
