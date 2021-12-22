import { Component, OnInit } from '@angular/core';
import { StoryService } from '../Core/Service/story.service';
import { Story } from '../Models/story';
import { Comment } from '../Models/comment';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {

  storyList: Story[]
  commentList: Comment[]

  constructor(private storyService: StoryService ) 
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
        console.log(this.storyList.length)
        this.storyList = storyList;
      })
  }

  // receiveComments(story: Story)
  // {
  //   this.storyService.getCommentsOfStory(story).subscribe(commentList =>
  //     {
  //       this.commentList = commentList;
  //       console.log(this.commentList[0])
  //     })
  // }

}
