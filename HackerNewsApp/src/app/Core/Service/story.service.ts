import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StoryApiService } from 'src/app/Api/Service/story-api.service';
import { Story } from 'src/app/Models/story';
import { IStoryService } from '../Interface/IStoryService';

@Injectable({
  providedIn: 'root'
})
export class StoryService implements IStoryService {

  storyList: Story[]

  constructor(private storyService: StoryApiService) 
  { 
    this.storyList = [];
    this.subscribeToStories();
  }

  subscribeToStories()
  {
    this.storyService.getStories().subscribe((response: number[]) => 
    {
      //Only take first 5 stories
      let topStoriesID = response.slice(0, 5); 

      //Get info for each story
      topStoriesID.forEach((id: number) => 
      {
        let newStory = new Story();

        this.storyService.getStory(id.toString()).subscribe((response: any) => 
        {
          newStory.storyID = response.id;
          newStory.title = response.title;
          newStory.authorName = response.by;
          newStory.date = response.time;
          newStory.totalPoints = response.score;
          newStory.selfUrl = response.url;
          //newStory.comments = response
          //console.log(response.kids)

          // this.storyService.getComment(response.kids.toString()).subscribe((response: any) => 
          // {
          //   console.log(response.text)
          // });

          this.storyList.push(newStory);
        });
      });
    });

    // this.storyService.getStories().pipe(
    //   map((result1: any) => this.storyService.getStory(result1)),
    // )
    // .subscribe((response: any) =>
    //   {
    //     console.log(response[0]);
    //   })

  }
  
  getStories(): Observable<Story[]> 
  {
    return of(this.storyList);
  }

}
