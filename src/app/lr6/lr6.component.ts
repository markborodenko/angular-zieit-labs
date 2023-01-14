import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs/operators";

export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-lr6',
  templateUrl: './lr6.component.html',
  styleUrls: ['./lr6.component.scss']
})
export class Lr6Component implements OnInit {
  posts: Todo[] = [];
  namePost = ''
  flagLoad = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadPost()
  }

  addPost() {
    if (!this.namePost.trim()) {
      return
    }
    const post: Todo = {
      title: this.namePost,
      completed: false
    }
    this.http.post('https://jsonplaceholder.typicode.com/todos/', post)
      .subscribe(res => {
        this.posts.unshift(post)
        this.sortResponse(this.posts)
      });
  }

  loadPost() {
    this.flagLoad = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .pipe(delay(1500))
      .subscribe(response => {
        this.sortResponse(response)
        this.posts = response;
        this.flagLoad = false;
      });
  }

  sortResponse(response: Todo[]) {
    response.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))

    return response
  }

  removePost(id?: number) {
    this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(() => {
        this.posts = this.posts.filter(item => item.id != id)
      });
  }

  completedPost(id?: number) {
    return this.http.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {completed: true})
      .subscribe((res) => {
        // @ts-ignore
        this.posts.find(item => item.id === res.id)!.completed = true
      })
  }

}
