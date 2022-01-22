import { Injectable } from '@angular/core';

debugger
@Injectable({
  //providedIn: 'root',
})
export class AppService {
  constructor(
    private engine: Engine
  ) {

  }
  getLog() {
    this.engine.getLog()
  }
}

@Injectable({
  //providedIn: 'root',
})
export class Engine {
  getLog() {
    console.log('-----')
  }
}