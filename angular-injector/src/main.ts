import {Injector, Injectable} from 'angular2/angular2'

var jasmineEnv = jasmine.getEnv();

debugger
@Injectable()
class Engine {
  constructor() {
    debugger
  }
}

@Injectable()
class Car {
 constructor(public engine:Engine) {
   debugger
 }
}

describe("Injector.instantiateResolved", () => {
  it("should work", () => {
    debugger
    var injector = Injector.resolveAndCreate([Engine]);
    var carBinding = Injector.resolve([Car])[0];
    
    var car = injector.instantiateResolved(carBinding);
    expect(car.engine).toBe(injector.get(Engine));
    expect(car).not.toBe(injector.instantiateResolved(carBinding));
  });
});

jasmineEnv.execute();