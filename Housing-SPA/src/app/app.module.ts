import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { PropertyCardComponent } from './property-card/property-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    PropertyCardComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
