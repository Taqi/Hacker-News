import { Component, OnInit } from '@angular/core';
import { StoryService } from '../Core/Service/story.service';
import { Story } from '../Models/story';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {

  storyList: Story[]

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
        this.storyList = storyList;
      })
  }

}
