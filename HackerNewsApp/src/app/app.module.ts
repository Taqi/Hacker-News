import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { CommentComponent } from './comment/comment.component';
import { StoryComponent } from './story/story.component';
import { RouterModule, Routes } from '@angular/router';
import { routing }        from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    CommentComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
