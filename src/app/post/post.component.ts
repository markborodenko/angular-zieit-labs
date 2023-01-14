import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../app.component";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post
  @Input() canBeRemoved: boolean = false;
  @Output() postid: EventEmitter<number> = new EventEmitter<number>()

  removePost() {
    this.postid.emit(this.post.id)
  }

  constructor(private activatedRoute: ActivatedRoute, private posts: PostsService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      let post = this.posts.getById(+param['id']);
      if (post === undefined) {
        return;
      }
      this.post = post;
    });
  }

  goToPosts() {
    this.router.navigate(['/posts'])
  }

  goTo4Post() {
    this.router.navigate(['/post', 44])
  }
}
