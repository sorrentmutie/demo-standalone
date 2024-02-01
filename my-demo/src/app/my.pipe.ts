import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'my',
  standalone: true
})
export class MyPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
