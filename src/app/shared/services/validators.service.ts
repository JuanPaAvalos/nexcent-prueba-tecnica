import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() { }

  public getFieldErrors(form: FormGroup, field: string): string | null {
    const errors = form.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field is required';
        case 'minlength':
          return `At least ${errors['minlength'].requiredLength} characters are required`;
        case 'min':
          return `A minimum value of ${errors['min'].min} is required`;
        case 'pattern':
          if(field == 'email') return `Enter a valid email`;
          return `Enter a valid item`;
        case 'notEqual':
          return `The field values are not equal`;
        default:
          return `ERROR NOT DEFINED`;
      }
    }

    return null
  }
}
