import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import axios, { AxiosResponse } from "axios";
import { Story } from 'src/app/Models/story';
import { HttpClient } from '@angular/common/http';
import { HNStory, HNComment } from './hn-story.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

export interface IStoryAPIService
{
    getStory(id: number): Observable<HNStory>;
    getTopStoryIds(numberOfStories: number): Observable<number[]>;
    getComment(id: string): Observable<HNComment>;
}

@Injectable({
  providedIn: 'root'
})
export class StoryApiService implements IStoryAPIService {

  constructor(private httpClient: HttpClient) 
  { 
  }

  getTopStoryIds(numberOfStories: number): Observable<number[]>
  {
    return this.httpClient.get<number[]>(`${environment.topStoriesUrl}`).pipe(
      map((resultingArray) => resultingArray.slice(0, numberOfStories))
    );
  }

  getStory(id: number): Observable<HNStory>
  {
    return this.httpClient.get<HNStory>(`${environment.BASE_ITEM_URL}/${id}.json`);
  }

  getComment(id: string): Observable<HNComment> {
    return this.httpClient.get<HNComment>(`${environment.BASE_ITEM_URL}/${id}.json`);
  }
}
