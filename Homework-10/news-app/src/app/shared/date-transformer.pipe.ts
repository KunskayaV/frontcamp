import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransformer'
})
export class DateTransformerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return (new Date(value)).toLocaleString('en-US', options);
  }

}
