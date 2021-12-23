import { Component, OnInit } from '@angular/core';
import { StoryService } from '../Core/Service/story.service';
import { Story } from '../Models/story';
import { Comment } from '../Models/comment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  storyList: Story[]
  commentList: Comment[]

  constructor(private storyService: StoryService, private router: Router ) 
  {
    this.storyList = [];
  }

  ngOnInit(): void 
  {
    this.receiveStories();
  }

  receiveStories()
  {
    this.storyService.getStories().subscribe(storyList =>
      {
        this.storyList = storyList;
      })
  }

  goToComments(story: Story)
  {
    this.router.navigate(['story', story.id]);
  }
}
