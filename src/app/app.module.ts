import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangelComponent } from './rectangel/rectangel.component';
import { CircleComponent } from './circle/circle.component';
import { ProductsComponent } from './products/products.component';
import { TableComponent } from './table/table.component';
import { CarsComponent } from './cars/cars.component';
import { MyntraComponent } from './myntra/myntra.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FourwheelerComponent } from './fourwheeler/fourwheeler.component';
import {HttpClientModule} from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { APIComponent } from './api/api.component';
import { PhotoComponent } from './photo/photo.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { DummydisplayComponent } from './dummydisplay/dummydisplay.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PagenotfoundComponent,
    HomeComponent,
    AboutComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangelComponent,
    CircleComponent,
    ProductsComponent,
    TableComponent,
    CarsComponent,
    MyntraComponent,
    VehiclesComponent,
    FourwheelerComponent,
    AccountsComponent,
    FlipkartComponent,
    MailComponent,
    APIComponent,
    PhotoComponent,
    AngularMaterialComponent,
    DummydisplayComponent,
    CreateCarComponent,
    CreateAccountFormComponent,
    CreateUserFormComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatBottomSheetModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
