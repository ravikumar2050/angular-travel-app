import { AuthenticationService } from './../../../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { PackagesService } from 'src/app/service/packagesservice.service';

@Component({
  selector: 'app-agencypackage',
  templateUrl: './agencypackage.component.html',
  styleUrls: ['./agencypackage.component.scss']
})
export class AgencypackageComponent implements OnInit {

  packages: any;
  constructor(private packageService : PackagesService) {
    this.packages = packageService.getSellerPackages();
    console.log(this.packages);
   }

  ngOnInit(): void {
  }

}
