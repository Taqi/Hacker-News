import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commentsLength'
})
export class CommentsLengthPipe implements PipeTransform {

  transform(commentSize: number): string {

    let commentSentence = "discuss";

    if(commentSize != 0)
      commentSentence = commentSize > 1 ? (commentSize + " comments") : (commentSize + " comment");
      
    return commentSentence;
  }

}
