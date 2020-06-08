import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private auth : AuthenticationService , private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      let role ; 
      if(this.auth.loggedIn()) {
        role = this.auth.getUserType();
        if(route.data.expectedRole =='guest') {
          let path;
          if(role=='buyer'){
            path = '/user/'+ state.url;
          }
          else {
            path = '/agency/'+ state.url;
          }
          this.router.navigate([path]);
          return false;
        }
        else if(route.data.expectedRole.includes(role)){
          return true;
        } else {
          this.router.navigate(['/404']);
          return false;
        }
      } else {
        role = 'guest';
        if(route.data.expectedRole.includes(role)){
          return true;
        }
        else {
          this.router.navigate(['/404']);
          return false;
        }
      }
  }


  
}
