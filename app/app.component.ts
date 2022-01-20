import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <button (click)="change()">123</button>
  `,
})
export class AppComponent  { 
  name = 'Angular'; 
  change() {
    this.name += '1'
  }
}

