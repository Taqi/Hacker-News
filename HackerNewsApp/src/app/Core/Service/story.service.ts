import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { StoryApiService } from 'src/app/Api/Service/hn-story-api.service';
import { Story } from 'src/app/Models/story';
import { Comment } from 'src/app/Models/comment';
import { IStoryService } from '../Interface/IStoryService';
import { HNStory } from 'src/app/Api/Service/hn-story.model';

@Injectable({
  providedIn: 'root',
})
export class StoryService implements IStoryService {
  storyList: Story[];
  hnStoryList: HNStory[];
  commentList: Comment[];

  constructor(private storyApi: StoryApiService) {
    this.storyList = [];
    this.hnStoryList = [];
    this.commentList = [];
  }

  getStories(): Observable<Story[]> {
    //Get the stories from backend
    const storyIds$ = this.storyApi.getTopStoryIds(5);
    const hnStories$ = storyIds$.pipe(
      mergeMap((ids) => {
        const stories$ = ids.map((id) => this.storyApi.getStory(id));
        return forkJoin(stories$);
      })
    ); //This is an observable of HNStory, but need to return an array of HNStory instead

    //We have an observable of an observable of a hnStory, but we should have an observable of an array of hnStory

    //Cast/map the HNStory to Story
    const stories$ = hnStories$.pipe(
      map((hnStories) =>
        hnStories.map(
          (hnStory: HNStory) =>
            new Story(
              hnStory.id,
              hnStory.title,
              hnStory.by,
              hnStory.time,
              hnStory.score,
              hnStory.url
            )
        )
      )
    );
    return stories$;
  }

  // private subscribeToStories()
  // {
  //   this.storyApi.getTopStoryIds().subscribe((response: number[]) =>
  //   {
  //     //Only take first 5 stories
  //     let topStoriesID = response.slice(0, 5);

  //     //Get info for each story
  //     topStoriesID.forEach((id: number) =>
  //     {
  //       let newStory = new Story();

  //       this.storyApi.getStory(id.toString()).subscribe((response: any) =>
  //       {
  //         newStory.storyID = response.id;
  //         newStory.title = response.title;
  //         newStory.authorName = response.by;
  //         newStory.totalPoints = response.score;
  //         newStory.selfUrl = response.url;
  //         newStory.commentsID = response.kids;
  //         const date = new Date(response.time*1000);
  //         newStory.date = date.toLocaleDateString();

  //         // commentIDs.forEach((id: number) =>
  //         // {
  //         //   this.storyService.getComment(id.toString()).subscribe((response: any) =>
  //         //   {
  //         //     //console.log(response.text)
  //         //     newStory.comments = response.text;
  //         //   });

  //         // });

  //         this.storyList.push(newStory);
  //         //this.subscribeToComments()
  //       });
  //     });
  //   });

  //   // this.storyService.getStories().pipe(
  //   //   map((result1: any) => this.storyService.getStory(result1)),
  //   // )
  //   // .subscribe((response: any) =>
  //   //   {
  //   //     console.log(response[0]);
  //   //   })

  // }

  // subscribeToComments()
  // {
  //   this.storyList.forEach((story, index) =>
  //   {
  //     let commentList: Comment[]

  //     story.commentsID.forEach(ID =>
  //       {
  //         this.storyService.getComment(ID.toString()).subscribe((response: any) =>
  //         {
  //           let newComment = new Comment();
  //           newComment.commentID = response.id;
  //           newComment.authorName = response.by;
  //           newComment.message = response.text;
  //           const date = new Date(response.time*1000);
  //           newComment.date = date.toLocaleDateString();

  //           commentList.push(newComment)
  //         })
  //       })
  //       //this.storyList[index].comments = commentList;
  //   })
  // }

  // subscribeToComments(story: Story)
  // {
  //   story.commentsID.forEach(ID =>
  //     {
  //       this.storyApi.getComment(ID.toString()).subscribe((response: any) =>
  //       {
  //         let newComment = new Comment();
  //         newComment.commentID = response.id;
  //         newComment.authorName = response.by;
  //         newComment.message = response.text;
  //         const date = new Date(response.time*1000);
  //         newComment.date = date.toLocaleDateString();

  //         this.commentList.push(newComment)
  //         console.log(newComment)
  //       })
  //     })
  //   //return of(this.commentList);
  // }

  // getCommentsOfStory(story: Story): Observable<Comment[]>
  // {
  //   this.subscribeToComments(story)
  //   return of(this.commentList);
  // }
}
