import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpackage',
  templateUrl: './addpackage.component.html',
  styleUrls: ['./addpackage.component.scss']
})
export class AddPackageComponent implements OnInit {
  
  showWithStatus: String;

  title: String;
  agency: String;
  description: String;
  duration: String;
  type: String;
  itinerary: String;
  inclusions: String;
  exclusions: String;
  terms: String;
  validityInDays: String;
  price: String;

  photo: File;

  tours: Array<any>;
  selectedTour: any;

  msg: String;
  constructor() { }

  ngOnInit(): void {
  }

}
