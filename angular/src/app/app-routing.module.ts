import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { HealthcareProductsComponent } from './healthcare-products/healthcare-products.component';

import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"cart",component:CartComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignUpComponent},
  {path:"medicines",component:MedicinesComponent},
  {path:"healthcare-products",component:HealthcareProductsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
