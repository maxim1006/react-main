import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FactoryComponent} from './factory.component';

@NgModule({
  declarations: [FactoryComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [FactoryComponent]
})
export class FactoryModule {
}
