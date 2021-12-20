import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IStoryAPIService } from '../Interface/IStoryAPIService';
import axios, { AxiosResponse } from "axios";
import { Story } from 'src/app/Models/story';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoryApiService implements IStoryAPIService {

  baseUrl: string = "https://hacker-news.firebaseio.com/v0/"
  topStoriesUrl: string = `${this.baseUrl}topstories.json`
  storyUrl: string = `${this.baseUrl}item/`

  constructor(private httpClient: HttpClient) 
  { 
  }

  getStory(id: string): Observable<any>
  {
    return this.httpClient.get<any>(this.storyUrl + id + '.json');
  }

  getStories(): Observable<number[]>
  {
    return this.httpClient.get<number[]>(this.topStoriesUrl);
  }

  getComments(subjectID: string): Observable<any[]> {
    throw new Error('Method not implemented.');
  }

  getComment(id: string): Observable<any> {
    return this.httpClient.get<any>(this.storyUrl + id + '.json');
  }
}
