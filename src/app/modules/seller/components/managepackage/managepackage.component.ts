import { AuthenticationService } from './../../../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackagesService } from 'src/app/service/packagesservice.service';

@Component({
  selector: 'app-managepackage',
  templateUrl: './managepackage.component.html',
  styleUrls: ['./managepackage.component.scss']
})
export class ManagePackageComponent implements OnInit {

  constructor(private route:ActivatedRoute , private router:Router, private packageService:PackagesService, public auth:AuthenticationService) { }

  
  packageId:String;
  package:any;
  itinerary: any;
  inclusions: any;
  exclusions: any;
  descriptions: any;
  terms: any;
  showerror:String;

  ngOnInit(): void {
    this.route.paramMap.subscribe((res)=>{
      this.packageId = res.get('id');
    });
    this.package = this.packageService.getPackageById(this.packageId);
    this.package = this.packageService.getPackageById(this.packageId);
    this.itinerary = this.package.itinerary.split("\n")
    this.inclusions = this.package.inclusions.split("\n")
    this.exclusions = this.package.exclusions.split("\n")
    this.terms = this.package.terms.split("\n")
    this.descriptions = this.package.description.split("\n")
  }

  onDeleteClick(id) {
    console.log(id);
    this.packageService.deletePackage(id);
    this.router.navigate(['/']);
  }


}
