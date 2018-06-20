import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';

@IonicPage()
@Component({
  selector: 'page-notes-to-self',
  templateUrl: 'notes-to-self.html',
})
export class NotesToSelfPage {

  notes: Promise<Note[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private noteService: NoteService) {
  }


  ionViewWillEnter() {
    this.notes = this.getAllNotes();
  }

  addNote(){
    this.navCtrl.push(AddNotePage);
  }

  getAllNotes() {
    return this.noteService.getAllNotes();
  }
}
