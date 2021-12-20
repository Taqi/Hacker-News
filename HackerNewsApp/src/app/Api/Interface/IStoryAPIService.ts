import { Observable } from "rxjs";

export interface IStoryAPIService
{
    getStory(id: string): Observable<any>;
    getStories(): Observable<number[]>;
    getComments(subjectID: string): Observable<any[]>;
    getComment(id: string): Observable<any>;
}