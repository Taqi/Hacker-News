export class Story
{
  constructor(

  public storyID: number,
  public title: string,
  public authorName: string,
  public date: number,
  //public comment$s: Observable <Comment>[],
  public totalPoints: number,
  public selfUrl: string){}

}

//research parameter property