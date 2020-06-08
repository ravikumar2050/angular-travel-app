import { ManagePackageComponent } from './components/managepackage/managepackage.component';
import { AgencypackageComponent } from './components/agencypackage/agencypackage.component';
import { PagenotfoundComponent } from './../../components/pagenotfound/pagenotfound.component';
import { AddPackageComponent } from './components/addpackage/addpackage.component';




import { SellerComponent } from './seller.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { SellerRoutingModule } from './seller-routing.module';

const appRoutes: Routes = [
  { path: '', component: SellerComponent ,
    children:[
      { path:'', component: AgencypackageComponent,},
      { path:'add', component: AddPackageComponent },
      { path:':id',component:ManagePackageComponent}, 
      { path:'login', redirectTo: ''},
      { path:'register', redirectTo: ''},
      { path: '**', component: PagenotfoundComponent },
    ]
  },
]

@NgModule({
  declarations: [SellerComponent, AddPackageComponent, AgencypackageComponent,ManagePackageComponent],
  imports: [
    RouterModule.forChild(appRoutes),
    RouterModule,
    CommonModule,
    FormsModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
