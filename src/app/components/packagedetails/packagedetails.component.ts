import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { PackagesService } from 'src/app/service/packagesservice.service';

@Component({
  selector: 'app-packagedetails',
  templateUrl: './packagedetails.component.html',
  styleUrls: ['./packagedetails.component.scss']
})
export class PackageDetailsComponent implements OnInit {

  packageId:String;
  package:any;
  quantity: number;
  msg: String;
  itinerary: any;
  inclusions: any;
  exclusions: any;
  descriptions: any;
  terms: any;

  constructor(private route:ActivatedRoute , private router:Router, private packageService:PackagesService, public auth:AuthenticationService) {
   }

  ngOnInit() {
    this.route.paramMap.subscribe((res)=>{
      this.packageId = res.get('id');
    });
    this.package = this.packageService.getPackageById(this.packageId);
    this.itinerary = this.package.itinerary.split("\n")
    this.inclusions = this.package.inclusions.split("\n")
    this.exclusions = this.package.exclusions.split("\n")
    this.terms = this.package.terms.split("\n")
    this.descriptions = this.package.description.split("\n")
  }

  onPurchaseClick() {
    let user = this.auth.getLoggedInBuyer();
    if(user){ 
      if(this.quantity){
        if(this.quantity!=0) {
          this.router.navigate(["../user/checkout"]);
        }else {
          this.msg = "Invalid Quantity" 
        }
      }
      else {
        this.msg = "Invalid Quantity"
      }
    } else {
      this.router.navigate(['/login'])
    }

  }
}
