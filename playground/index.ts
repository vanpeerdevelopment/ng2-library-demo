/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Ng2LibraryDemoModule }  from 'ng2-library-demo';

@Component({
  selector: 'app',
  template: `<sample-component></sample-component> <lib-comp [opts]="['pls', 'werk', 'nu']"></lib-comp>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, Ng2LibraryDemoModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
