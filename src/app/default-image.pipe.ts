import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return ('cv.gif');
    }
    return value;
  }

}
