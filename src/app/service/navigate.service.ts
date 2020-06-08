import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private auth:AuthenticationService,private router:Router) { }

  redirect(url) {
    if(this.auth.loggedIn()) {
      let path;
      let user = this.auth.getUserType();
      if(user=='buyer'){
        if(url=='login' || url=='register') {
          url='';
        }
        path = '/user'+url;
      }
      else {
        if(url=='login' || url=='register') {
          url='';
        }
        path = '/agency'+url;
      }
      this.router.navigate([path]);
    }
    else{
    this.router.navigate([url]);
    }
  }

}
