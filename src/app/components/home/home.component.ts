import { PackagesService } from './../../service/packagesservice.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { Subscription } from "rxjs";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  packages;
 // subscribe : Subscription;
  constructor(private router: Router , private packageService :PackagesService,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.packages  = this.packageService.getHomePagePackages();
  }

  onStartBrowsing() {
    this.router.navigate(['package'],{relativeTo:this.route});
  }

}
