import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortingUser'
})
export class SortingUserPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const items: any = value;

    return  items.sort((a, b) => {
      a = a[args];
      b = b[args];

      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }

      return 0;
    });
  }

}
