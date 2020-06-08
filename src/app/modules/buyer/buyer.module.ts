import { PackageDetailsComponent } from './../../components/packagedetails/packagedetails.component';
import { PackageComponent } from './../../components/package/package.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { BuyerComponent } from './buyer.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerRoutingModule } from './buyer-routing.module'
import { HomeComponent } from 'src/app/components/home/home.component';
import { PurchaseComponent } from './components/purchase/purchase.component';

const appRoutes: Routes = [
  { path: '', component: BuyerComponent ,
    children:[
      { path:'', component: HomeComponent,},
      { path:'login',redirectTo:''},
      { path:'register',redirectTo:''},
      { path:'package',component:PackageComponent},
      { path:'checkout', component: PurchaseComponent,} ,
      { path:'packagedetail/:id',component:PackageDetailsComponent}
    ]
  },
]

@NgModule({
  declarations: [BuyerComponent],
  imports: [
    RouterModule.forChild(appRoutes),
    RouterModule,
    CommonModule,
    BuyerRoutingModule
  ],
})


export class BuyerModule {

 }
