import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {PostsComponent} from "./posts/posts.component";
import {Lr14Component} from "./lr1-4/lr1-4.component";
import {PostComponent} from "./post/post.component";
import {Lr5Component} from "./lr5/lr5.component";
import {Lr6Component} from "./lr6/lr6.component";
import {FactorialComponent} from "./factorial/factorial.component";

const router: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'lr1-4', component: Lr14Component},
  {path: 'lr5', component: Lr5Component},
  {path: 'lr6', component: Lr6Component},
  {path: 'factorial', component: FactorialComponent},
  {path: 'post/:id', component: PostComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
