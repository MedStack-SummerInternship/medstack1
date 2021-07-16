import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { HealthcareProductsComponent } from './healthcare-products/healthcare-products.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = []
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MedicinesComponent,
    HealthcareProductsComponent,
    SignUpComponent,
    CartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
