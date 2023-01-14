import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostComponent} from './post/post.component';
import {PostFormComponent} from './post-form/post-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IpzDirective} from './directives/ipz.directive';
import {FilterPipe} from './pipes/filter.pipe';
import {PostsComponent} from "./posts/posts.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {AboutExtraComponent} from "./about-extra/about-extra.component";
import {Lr14Component} from "./lr1-4/lr1-4.component";
import {Lr5Component} from './lr5/lr5.component';
import {Lr6Component} from './lr6/lr6.component';
import {HttpClientModule} from '@angular/common/http';
import { FactorialComponent } from './factorial/factorial.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent,
    PostsComponent,
    HomeComponent,
    AboutComponent,
    AboutExtraComponent,
    Lr14Component,
    IpzDirective,
    FilterPipe,
    Lr5Component,
    Lr6Component,
    FactorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
