import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { StoryApiService } from 'src/app/Api/Service/hn-story-api.service';
import { Story } from 'src/app/Models/story';
import { Comment } from 'src/app/Models/comment';
import { IStoryService } from '../Interface/IStoryService';
import { HNStory } from 'src/app/Api/Service/hn-story.model';
import { HNComment } from 'src/app/Api/Service/hn-comment.model';

@Injectable({
  providedIn: 'root',
})
export class StoryService implements IStoryService {

  constructor(private storyApi: StoryApiService) {
  }

  getStories(): Observable<Story[]> 
  {
    //Get the stories from backend
    const storyIds$ = this.storyApi.getTopStoryIds(5);
    const hnStories$ = storyIds$.pipe(
      mergeMap((ids) => {
        const stories$ = ids.map((id) => this.storyApi.getStory(id));
        return forkJoin(stories$);
      })
    ); 

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
              hnStory.url,
              hnStory.kids
            )
        )
      )
    );
    return stories$;
  }

  getComments(story: Story): Observable<Comment[]> 
  {
    //Get observable of comments id
    const commentIds$ = of(story.commentsId);

    //Get an observable of array of HNComment
    const hnComments$ = commentIds$.pipe(
      mergeMap((ids) =>
      {
        const comments$ = ids.map((id) => this.storyApi.getComment(id));
        return forkJoin(comments$);
      })
    );
    
    //Cast/map HNComment to Comment
    const comments$ = hnComments$.pipe(
      map((hnComments) =>
        hnComments.map(
          (hnComment: HNComment) =>
            new Comment(
              hnComment.id,
              hnComment.text,
              hnComment.by,
              hnComment.time
            )
        )
      )
    );
    return comments$;
  }
}
