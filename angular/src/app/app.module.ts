import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { HealthcareProductsComponent } from './healthcare-products/healthcare-products.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CategoryComponent } from './category/category.component';
import { CardComponent } from './card/card.component';

const routes: Routes = []
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MedicinesComponent,
    HealthcareProductsComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    CategoryComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
