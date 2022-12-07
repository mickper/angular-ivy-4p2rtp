import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  counter = 0;

  public toUppercase(name: string) {
    return name.toUpperCase();
  }

  public fibonnacci(n: number): number {
    if (n <= 1) {
      return n;
    }

    return this.fibonnacci(n - 1) + this.fibonnacci(n - 2);
  }
}
