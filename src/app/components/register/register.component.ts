import { AuthenticationService } from './../../service/authentication.service';
import { ValidationService } from 'src/app/service/validation.service';
import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  firstname: String;
  lastname: String;
  mobileNumber: String;
  email: String;
  password: String;
  msg:String;
  showerror: Boolean;
  role:String;


  constructor(private validate:ValidationService , private auth :AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  onRegisterSubmit() {
    let params = {
      firstname: this.firstname,
      lastname: this.lastname,
      mobileNumber: this.mobileNumber,
      email: this.email,
      password: this.password,
      role:this.role,
    }
    let check = this.validate.validateRegister(params);
    if(check.isValid) {
      if(params.role = 'buyer') {
        this.auth.registerBuyer(params);
        this.router.navigate(['/login'])
      }
      else {
        this.auth.registerSeller(params);
        this.router.navigate(['/login'])
      }
    } else {
      console.log("invalid params");
      this.msg = check.err;
      this.showerror = true;
    }
  }

}
