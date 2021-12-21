export class Story
{
  storyID: string;
  title: string;
  authorName: string;
  date: string;
  commentsID: number[]
  comments: Comment[];
  totalPoints: number;
  selfUrl: string;

}
