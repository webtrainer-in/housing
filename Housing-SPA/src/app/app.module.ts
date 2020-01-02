import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HousingService } from './Services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyResolver } from './property/add-property/property-resolver.service';

const appRoutes: Routes = [
  { path:'', component: PropertyListComponent},
  { path:'rent-property', component: PropertyListComponent, resolve: {prp: PropertyResolver}},
  { path:'add-property', component: AddPropertyComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService, PropertyResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
