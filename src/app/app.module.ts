
import { AuthenticationService } from './service/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PackagesService } from  './service/packagesservice.service';
import { PackageComponent } from './components/package/package.component';
import { ValidationService } from './service/validation.service';
import { PackageDetailsComponent } from './components/packagedetails/packagedetails.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { GuardGuard } from './service/guard.guard';
import { PurchaseComponent } from './modules/buyer/components/purchase/purchase.component';




const appRoutes: Routes = [
  { path: '', 
    children: [
      { path: '', component: HomeComponent,canActivate: [GuardGuard], data: { expectedRole: ['guest'] } },
      { path: 'user', loadChildren:() => import('./modules/buyer/buyer.module').then(m => m.BuyerModule), canActivate: [GuardGuard], data: { expectedRole: ['buyer'] }},
      { path: 'agency', loadChildren:() => import('./modules/seller/seller.module').then(m => m.SellerModule),canActivate: [GuardGuard], data: { expectedRole: ['seller'] }},
    ]
  },
  { path: 'package', component: PackageComponent,canActivate: [GuardGuard], data: { expectedRole: ['guest'] }}, 
  
  { path: 'packagedetail/:id', component: PackageDetailsComponent }, 
  { path: 'login', component: LoginComponent, canActivate: [GuardGuard], data: { expectedRole: ['guest'] }},
  { path: 'register', component: RegisterComponent ,canActivate: [GuardGuard], data: { expectedRole: ['guest'] } },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PackageComponent,
    PackageDetailsComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    PurchaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers:[PackagesService,AuthenticationService,ValidationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
