import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppService, Engine } from './app.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers:  [
    {provide: AppService, deps: [Engine]},
    {provide: Engine, deps: []}
    //{provide: NeedsService, deps: [UsefulService]}, {provide: UsefulService, deps: []}
  ]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);

