import { Component, Injectable } from '@angular/core';
import {AppService, Engine} from './app.service'


@Injectable()
class UsefulService {
}

@Injectable()
class NeedsService {
  constructor(public service: UsefulService) {}

  getLog() {
    console.log(this.service)
  }
}
@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <button (click)="change()">123</button>
  `,
  providers:  [
    // {provide: AppService, deps: [Engine]},
    // {provide: Engine, deps: []}
    //{provide: NeedsService, deps: [UsefulService]}, {provide: UsefulService, deps: []}
  ]
  //[, {provide: UsefulService, deps: []}]
})
export class AppComponent  { 
  constructor(
    private _AppService: AppService 
  ) {
    debugger
  }

  ngOnInit() {
    this._AppService.getLog()
  }
  name = 'Angular'; 
  change() {
    this.name += '1'
  }
}

