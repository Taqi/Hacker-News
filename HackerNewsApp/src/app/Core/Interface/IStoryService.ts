import { Observable } from "rxjs";
import { Story } from "src/app/Models/story";

export interface IStoryService
{
    getStories(): Observable<Story[]>;
}