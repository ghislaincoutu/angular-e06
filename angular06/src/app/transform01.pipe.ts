import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'transform01',
    standalone: false
})
export class Transform01Pipe implements PipeTransform {

  transform(value: any) {
    console.log(value);
    return JSON.stringify(value, undefined, 4).replace(/ /g, '&nbsp;').replace(/\n/g, '<br/>');
  }

}
