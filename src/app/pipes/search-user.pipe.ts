import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(items: any[], args?: any): any {
    if (!items.length) {return []; }
    if (!args) {return items; }

    args = args.toLowerCase();

    return items.filter(v => {
      return v.name.toLowerCase().includes(args);
    });
  }

}
