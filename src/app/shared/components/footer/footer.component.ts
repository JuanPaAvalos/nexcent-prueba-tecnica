import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public subscriptionMessage: string = '';

  public socialMedia = [
    {
      name: 'Instagram',
      image: 'assets/icons/footer/Social-1.webp',
      link: '',
    },
    {
      name: 'Basket Ball',
      image: 'assets/icons/footer/Social-2.webp',
      link: '',
    },
    {
      name: 'Twitter / X',
      image: 'assets/icons/footer/Social-3.webp',
      link: '',
    },
    {
      name: 'Youtube Channel',
      image: 'assets/icons/footer/Social-4.webp',
      link: '',
    },
  ];

  public myForm: FormGroup = this.formBuilder.group({
    email: [
      '',
      [
        Validators.pattern(this.validatorsSerice.emailPattern),
      ],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private validatorsSerice: ValidatorsService
  ) {}

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);

    this.subscriptionMessage = "You've successfully registered";
    this.myForm.reset();
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    return this.validatorsSerice.getFieldErrors(this.myForm, field);
  }
}
