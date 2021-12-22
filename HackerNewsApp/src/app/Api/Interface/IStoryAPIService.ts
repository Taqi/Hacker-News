import { Observable } from "rxjs";
import { HNStory, HNComment } from "./HackerNewsApi";

export interface IStoryAPIService
{
    getStory(id: number): Observable<HNStory>;
    getTopStoryIds(numberOfStories: number): Observable<number[]>;
    getComment(id: string): Observable<HNComment>;
}