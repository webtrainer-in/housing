import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
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
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyResolver } from './property/add-property/property-resolver.service';
import { PropertyDetailResolver } from './resolvers/property-detail-resolver';
import {TabsModule, BsDropdownModule} from 'ngx-bootstrap';
import {NgxGalleryModule} from 'ngx-gallery';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './Services/auth.service';

export class CustomHammerConfig extends HammerGestureConfig  {
  overrides = {
      pinch: { enable: false },
      rotate: { enable: false }
  };
}

const appRoutes: Routes = [
  { path:'', component: PropertyListComponent},
  { path:'rent-property', component: PropertyListComponent, resolve: {prp: PropertyResolver}},
  { path:'add-property', component: AddPropertyComponent },
  { path:'property-detail/:id', component: PropertyDetailComponent, resolve: {prp:PropertyDetailResolver}}

];

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxGalleryModule,
    RouterModule.forRoot(appRoutes),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [
    HousingService, PropertyResolver, PropertyDetailResolver, AuthService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
