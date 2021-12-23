import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { StoryComponent } from './story/story.component';

const appRoutes: Routes = [

  { path: 'story/:storyID', component: CommentComponent},
  { path: 'story', component: StoryComponent},
  { path: '', component: StoryComponent, pathMatch: 'full'},
  
];

export const routing = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });
