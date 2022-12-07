import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fibonnacci',
})
export class FibonnacciPipe implements PipeTransform {
  transform(value: number): any {
    return this.fibonnacci(value);
  }

  public fibonnacci(n: number): number {
    if (n <= 1) {
      return n;
    }

    return this.fibonnacci(n - 1) + this.fibonnacci(n - 2);
  }
}
