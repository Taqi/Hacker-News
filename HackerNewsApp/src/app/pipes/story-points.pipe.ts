import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'storyPoints'
})
export class StoryPointsPipe implements PipeTransform {

  transform(storyPoints: number): string {

    let pointSentence = "";
    
    if(storyPoints != 0)
      pointSentence = storyPoints > 1 ? (storyPoints + " points") : (storyPoints + " point");
      
    return pointSentence;
  }

}
