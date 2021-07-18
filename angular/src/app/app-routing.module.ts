import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { HealthcareProductsComponent } from './healthcare-products/healthcare-products.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CategoryComponent } from './category/category.component';
import { CardComponent } from './card/card.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"cart",component:CartComponent},
  {path:"login",component:LoginComponent},
  {path:'user-profile/:name',component:UserProfileComponent},
  {path:"medicines",component:MedicinesComponent},
  {path:"register",component:RegisterComponent},
  {path:"medicines/:type",component:CategoryComponent},
  {path:"healthCare-products/:type",component:CardComponent},
  {path:"healthcare-products",component:HealthcareProductsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
