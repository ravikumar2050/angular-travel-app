import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "./../../service/authentication.service";
import { Router, ActivatedRoute } from '@angular/router';
import { NavigateService } from 'src/app/service/navigate.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user ;
  constructor(private route : ActivatedRoute,private router:Router,public auth :AuthenticationService,private navigate:NavigateService) {
    if(this.auth.loggedIn()) {
      this.user = this.auth.getUserType();
    }
   }
   
  ngOnInit(): void {
  }

  onLogoutClick() {
    this.auth.logout();
    this.router.navigate(['/login'])
  	console.log("You are logged out");
  	return false;
  }


}
