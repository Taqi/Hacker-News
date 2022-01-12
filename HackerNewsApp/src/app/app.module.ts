import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { StoryComponent } from './story/story.component';
import { RouterModule, Routes } from '@angular/router';
import { routing }        from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateTransformPipe } from './pipes/date-transform.pipe';
import { CommentsLengthPipe } from './pipes/comments-length.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    StoryComponent,
    NavbarComponent,
    LogoComponent,
    SearchComponent,
    DateTransformPipe,
    CommentsLengthPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
