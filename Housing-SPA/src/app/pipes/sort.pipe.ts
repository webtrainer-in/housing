import { Pipe, PipeTransform } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>, args: any[]): any {
    if (value) {
      const sortField = args[0];
      const sortDirection = args[1];
      let modifier = 1;

      if (sortDirection === 'desc') {
        modifier = -1;
      }

      console.log('as ' + modifier );

      value.sort((a: any, b: any) => {
        if (a[sortField] < b[sortField]) {
          return -1 * modifier;
        } else if (a[sortField] > b[sortField]) {
          return 1 * modifier;
        } else {
          return 0;
        }
      });
      return value;
    }
  }
}
