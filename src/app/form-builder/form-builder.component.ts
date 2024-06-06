import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userValidate } from '../validation_rule/user';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css',
})
export class FormBuilderComponent {
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }
  myForm!: FormGroup;
  createForm() {
    this.myForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z]+$'),
          // userOrEmailValidate(/tarun/)
          userValidate
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
      }),
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);

      this.myForm.reset();
    } else {
      alert('Form is invalid');
    }
  }
}
