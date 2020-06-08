import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit ,OnChanges {
  email: String;
	password: String;
	msg: String;

  constructor(private auth : AuthenticationService, private router : Router) { }
  ngOnChanges(){
    if(this.auth.loggedIn()) {
      let userType = this.auth.getUserType();
      if(userType =='buyer'){
        this.router.navigate['/user'];
      }
      else {
        this.router.navigate['/agency']
      }
    }
  }

  ngOnInit(): void {

  }

  onLoginSubmit(){
    let creds = {
      username:this.email,
      password:this.password
    }
    if(this.auth.logIn(creds)) {
      let role = this.auth.getUserType();
      if(role == 'buyer') {
        this.router.navigate(['/user']);
      } else {
        this.router.navigate(['/agency']);
      }
    }
  }
}
