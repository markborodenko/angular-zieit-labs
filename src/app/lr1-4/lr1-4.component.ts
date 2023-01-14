import {Component} from '@angular/core'
import {Post} from "../app.component";

@Component({
  selector: 'app-lr1-4',
  templateUrl: './lr1-4.component.html',
  styleUrls: ['./lr1-4.component.scss']
})
export class Lr14Component {
  titles: object = {text: '', searchType: ''};
  posts: Post[] = [
    {title: "React", text: "JavaScript-библиотека для создания пользовательских интерфейсов", id: 1},
    {
      title: "Angular",
      text: "Angular is an app-design framework and development platform for creating efficient and sophisticated single-page apps.",
      id: 2
    },
    {
      title: "Vue",
      text: "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces",
      id: 3
    },
    {title: "Node.js", text: "Node.js® — це JavaScript–оточення побудоване на JavaScript–рушієві Chrome V8.", id: 4}
  ];

  updatePosts({event}: { event: any }) {
    this.posts.unshift(event)
    this.updateIds()
  }

  removeIdPost(id: number) {
    this.posts = this.posts.filter((item) => item.id != id)
    this.updateIds()
  }

  updateIds() {
    this.posts.forEach((post, index) => {
      post.id = index + 1;
    });
  }

  onChangeSearch({event}: { event: any }) {
    console.log(event);
    this.titles = event
  }
}
