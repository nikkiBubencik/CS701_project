import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorName'
})
export class AuthorNamePipe implements PipeTransform {

  transform(value: Array<string>, ...args: unknown[]): unknown {
    if(!value) return '';
    let output: string = value.join(" | ");
    return output;
  }

}
