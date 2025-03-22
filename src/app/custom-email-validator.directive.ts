import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[customEmailValidator]', // Attribute selector
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomEmailValidatorDirective,
      multi: true,
    },
  ],
})
export class CustomEmailValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const valid = emailPattern.test(control.value);
    return valid ? null : { invalidEmail: true }; // Return error object if invalid
  }
}