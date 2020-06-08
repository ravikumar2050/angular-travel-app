import { Observable } from 'rxjs';
import { Http ,Headers } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { rejects } from 'assert';

//const fs = require('fs');

@Injectable()
export class AuthenticationService {

  private userInfo:any;
  private userType:string;
  private users: any[];
  currentUser;

  constructor(private http:Http) {  
    this.users= [
      {
      email: "ravi@gmail.com",
      firstname: "ravi",
      lastname: "kumar",
      mobileNumber: "96549284447",
      password: "123ravi",
      role: "buyer",
      type: "buyer"
    },
    {
      email: "sid@gmail.com",
      firstname: "sid",
      lastname: "kumar",
      mobileNumber: "96549284447",
      password: "123sid",
      role: "seller",
      type: "seller"
    }
    ]
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    this.http.get('http://localhost:30000/user', { headers: headers}).subscribe(res =>{
      try {
        this.currentUser = res.json();
        localStorage.setItem('user', JSON.stringify(this.currentUser));   
      } catch(err) {
        this.currentUser = null;
        localStorage.clear(); 
      }
  });
  }


  

  registerBuyer(params) {
    let buyerParams = params;
    buyerParams['type'] = 'buyer';
    if(!this.users)
      this.users = [buyerParams];
    else
      this.users.push(buyerParams);
    console.log("registered");
    console.log(this.users);
  }

  registerSeller(params) {
    let sellerParams = params;
    sellerParams['type'] = 'seller';
    if(!this.users)
      this.users = [sellerParams];
    else
      this.users.push(sellerParams);
    console.log("registered");
    console.log(this.users);
  }

  getUserType() {
    let user = this.currentAuthenticatedUser();
    if(user)
    return user.type;
    else 
    return null;
  }

  getLoggedInBuyer() {
    let user = this.currentAuthenticatedUser();
    if(user && user.type =="buyer")
    return user;
    else 
    return null;
  }

  getLoggedInSeller() {
    let user = this.currentAuthenticatedUser();
    if(user && user.type =="seller")
    return user;
    else 
    return null;
  }

  buyerLoggedIn() {
    if(this.currentAuthenticatedUser() && this.currentAuthenticatedUser().type =="buyer")
    return true;
    else 
    return false;
  }

  sellerLoggedIn(){
    if(this.currentAuthenticatedUser() && this.currentAuthenticatedUser().type =="seller")
    return true;
    else 
    return false;
  }

  loggedIn() {
    if(localStorage.getItem('user'))
      return true;
    else
      return false;
  }

  logIn(params) {
    console.log(params);
    let user = this.users.find((item)=>{
      return item && (item.email == params.username) && (item.password == params.password);
    })
    if(user) {
      console.log("found")
      this.currentUser = user;
      localStorage.setItem('user',JSON.stringify(this.currentUser));
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      this.http.post('http://localhost:30000/user', user, {headers: headers}).subscribe();
      return true;
    }
    else {
      console.log("not logged in");
      return false;
    }
  }

  private currentAuthenticatedUser(){
   if(localStorage.getItem('user'))
    return JSON.parse(localStorage.getItem('user'));
   else
    return null;
  }

  logout() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
      this.http.get('http://localhost:30000/delete', {headers: headers}).subscribe(res =>{
        console.log(res);
    });
    localStorage.clear();
    this.currentUser = null;
    return true;
  }
 
  deleteall() {
    this.users = null;
  }

}

// interface Users {
//   username:string,
//   firstname: string,
//   lastname: string,
//   mobileNumber: string,
//   email: string,
//   password:string,
//   role:string,
// }
