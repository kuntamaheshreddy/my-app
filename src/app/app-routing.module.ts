import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangelComponent } from './rectangel/rectangel.component';
import { CircleComponent } from './circle/circle.component';
import { TableComponent } from './table/table.component';
import { CarsComponent } from './cars/cars.component';
import { MyntraComponent } from './myntra/myntra.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FourwheelerComponent } from './fourwheeler/fourwheeler.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { APIComponent } from './api/api.component';
import { PhotoComponent } from './photo/photo.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { AuthenticationGuard } from './authentication.guard';



const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:"", component:LoginComponent},

  {
    path:'dashboard', component:DashboardComponent, canActivate:[AuthenticationGuard], children:[
    {path:'home', component:HomeComponent}, 
    {path:'', component:HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'data-binding', component:DataBindingComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'rectangle', component:RectangelComponent},
    {path:'circle', component:CircleComponent},
    {path:'table', component:TableComponent},
    {path:'cars', component:CarsComponent},
    {path:'myntra',component:MyntraComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'fourwheeler',component:FourwheelerComponent},
    {path:'accounts', component:AccountsComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'mail',component:MailComponent},
    {path:'api',component:APIComponent},
    {path:'photo',component:PhotoComponent},
    {path:'angularmaterial', component:AngularMaterialComponent},
    {path:'createcar', component:CreateCarComponent},
    {path:'createaccountform',component:CreateAccountFormComponent},
    {path:'createuserform',component:CreateUserFormComponent}
    

  ]},

  {path:'**', component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
