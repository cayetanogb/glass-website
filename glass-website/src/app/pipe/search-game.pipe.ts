import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchGame'
})
export class SearchGamePipe implements PipeTransform {

  transform(value: any, input: any): any {
    
    if (input) {
      return value.filter(item => item.name.indexOf(input) !== -1);
    } else {
      return value;
    }
  }

}
