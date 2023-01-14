import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  title = ''
  text = ''
  searchingText = ''
  styleToggle = false

  @Output() addPostUser: EventEmitter<Post> = new EventEmitter<Post>()
  @Output() searchObject = new EventEmitter<object>()

  @ViewChild('myInputText', {static: false}) myinputText: ElementRef
  @ViewChild('myInputTitle', {static: false}) myinputTitle: ElementRef

  constructor() {
  }

  ngOnInit() {
  }

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.addPostUser.emit(post)

      this.text = ''
      this.title = ''
    }
  }

  onLoadDefault() {
    this.styleToggle = !this.styleToggle
    if (this.styleToggle) {
      this.myinputText.nativeElement.style.color = "red"
      this.myinputTitle.nativeElement.style.fontWeight = "bold"
    } else {
      this.myinputText.nativeElement.style.color = 'black'
      this.myinputTitle.nativeElement.style.fontWeight = "normal"

    }
  }

  search(text: string, searchType: string) {
    this.searchObject.emit({text: text, searchType: searchType})
  }
}
