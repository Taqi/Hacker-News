import { Pipe, PipeTransform } from '@angular/core';
import { TimeCalculationService } from '../services/time-calculation.service';

@Pipe({
  name: 'dateTransform'
})
export class DateTransformPipe implements PipeTransform {

  transform(datePosted: Date): unknown {
    return this.timeCalculation.timeElapsed(datePosted);
  }

  constructor(private timeCalculation: TimeCalculationService){

  }

}
