import { Observable } from "rxjs";
import { Story } from "src/app/Models/story";
import { Comment } from "src/app/Models/comment";

export interface IStoryService
{
    getStories(): Observable<Story[]>;
    getComments(storyID: number): Observable<Comment[]>;
}