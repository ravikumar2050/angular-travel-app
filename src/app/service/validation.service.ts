import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }

  validateSearch(params) {
    var min = parseInt(params.min);
    var max = parseInt(params.max);
    if (min < 0 || max <= 0) {
      return false;
    }
    else if (max < min) {
      return false;
    }
    return true;
  }

  validateRegister(params) {
    if (params.firstname == undefined ||
      params.lastname == undefined ||
      params.mobileNumber == undefined ||
      params.email == undefined ||
      params.password == undefined ||
      params.role == undefined ||
      params.role == '' ||
      params.firstname == '' ||
      params.lastname == '' ||
      params.mobileNumber == '' ||
      params.email == '' ||
      params.password == '') {
        return {
         isValid: false,
         err: "Complete all the fields"
       }
     } 
      else {
        return {
          isValid: true,
           err: "All Ok"
        }
    }
  }

  
}
