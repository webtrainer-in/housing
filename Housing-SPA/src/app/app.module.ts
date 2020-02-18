import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, Injectable } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyResolver } from './property/add-property/property-resolver.service';
import { PropertyDetailResolver } from './resolvers/property-detail-resolver';
import { BsDropdownModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
// import {NgxGalleryModule} from 'ngx-gallery';
import { NgxGalleryModule } from '@kolkov/ngx-gallery'
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

@Injectable()
export class CustomHammerConfig extends HammerGestureConfig  {
  overrides = {
      pinch: { enable: false },
      rotate: { enable: false }
  };
}

const appRoutes: Routes = [
  { path: '', component: PropertyListComponent},
  { path: 'property-list/:SellRent', component: PropertyListComponent, resolve: {prp: PropertyResolver}},
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent, resolve: {prp: PropertyDetailResolver}},
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'user/dashboard', component: UserDashboardComponent },
  { path: 'user/login', component: UserLoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    NavbarComponent,
    UserRegisterComponent,
    FilterPipe,
    SortPipe,
    UserDashboardComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxGalleryModule,
    RouterModule.forRoot(appRoutes),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    // BsDatepickerModule.forRoot()
  ],
  providers: [
    HousingService, PropertyResolver, PropertyDetailResolver, AuthService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
