import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { EmailComposer } from '@ionic-native/email-composer'

@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {

  note: Note; 
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private noteService: NoteService,
    public emailComposer: EmailComposer) {
      this.note = this.navParams.get('note');
    }
    
    // subject=this.note.title;
    // body=this.note.content;
    // to='';

  deleteNote(createDate: number){
    this.noteService.deleteNote(createDate);
    this.navCtrl.pop();
  }

  send(){
    let email = {
      // to: this.to,
      cc: [],
      bcc: [],
      attachment: [],
      subject: this.note.title,
      body: this.note.content,
      isHtml: false,
      
    }
    this.emailComposer.open(email);
  }
}
