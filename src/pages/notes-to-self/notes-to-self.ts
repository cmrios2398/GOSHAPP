import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { ViewNotePage } from '../view-note/view-note';

@IonicPage()
@Component({
  selector: 'page-notes-to-self',
  templateUrl: 'notes-to-self.html',
})
export class NotesToSelfPage {

  private notes: Promise<Note[]>;
  private note: Note;

  constructor(public navCtrl: NavController, public navParams: NavParams, private noteService: NoteService) {
  }


  ionViewWillEnter() {
    this.notes = this.getAllNotes();
  }

  addNote(){
    this.navCtrl.push(AddNotePage);
  }

  getNote(createDate: number){
    this.noteService.getNote(createDate).then((n) => {
      this.note = n;
      this.navCtrl.push(ViewNotePage, { note: this.note });
    });
  }

  getAllNotes() {
    return this.noteService.getAllNotes();
  }
}
