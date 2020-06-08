
import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/service/validation.service';
import { PackagesService } from 'src/app/service/packagesservice.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {
  packages: any;
  keyword: String;
  minPrice: Number;
  maxPrice: Number;
  sortBy: String;
  msg: String;
  showerror:Boolean;

  constructor(private packageService:PackagesService , private validation : ValidationService) { }

  ngOnInit(): void {
    this.packages  = this.packageService.getAllPackages();
  }

  onSearch(){
    let params = {
      key: this.keyword,
      min: this.minPrice,
      max: this.maxPrice,
      sortBy: this.sortBy
    }
    if(this.validation.validateSearch(params)){
      this.packages = this.packageService.searchPackages(params);
    }
    else {
      console.log("Wrong Search");
      this.showerror = true;
    }
  }

}
