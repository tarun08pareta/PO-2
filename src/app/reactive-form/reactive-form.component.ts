import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { userOrEmailValidate } from '../validation_rule/user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent implements OnInit, AfterViewInit {
  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('\\s*[a-zA-Z]+(\\s*[a-zA-Z]+)*\\s*'),
     
    ]),
    middleName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('\\s*[a-zA-Z]+(\\s*[a-zA-Z]+)*\\s*'),
    
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('\\s*[a-zA-Z]+(\\s*[a-zA-Z]+)*\\s*'),
    ]),
    fullName: new FormControl(''),
    dob: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required]),
    licenceNo: new FormControl(''),
    country: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    state: new FormControl(''),
    identityType: new FormControl(''),
    cardNo: new FormControl(''),
  });

  // get firstName() {
  //   return this.studentForm.get('firstName');
  // }
  ngOnInit(): void {
    this.studentForm.controls['firstName'].valueChanges.subscribe((value) => {
      console.log(value)
      this.createFullName();
    });
    this.studentForm.controls['middleName'].valueChanges.subscribe((value) => {
      // console.log(value)
      this.createFullName();
    });
    this.studentForm.controls['lastName'].valueChanges.subscribe((value) => {
      // console.log(value)
      this.createFullName();
    });
  }

  ngAfterViewInit(): void {
    this.studentForm.controls['dob'].valueChanges.subscribe((value) => {
      //  console.log(value)

      const selectDob = new Date(value);
      const dobYear = selectDob.getFullYear();
      const currentYear = new Date().getFullYear();
      const age = currentYear - dobYear;

      this.studentForm.controls['age'].setValue(age);

      if (age >= 18) {
        this.studentForm.controls['licenceNo'].setValidators([
          Validators.required,Validators.minLength(3),
          Validators.pattern('^[A-Z0-9]+$')
        ]);
      } else {
        this.studentForm.controls['licenceNo'].removeValidators([
          Validators.required,
        ]);
      }
    });

    this.studentForm.controls['country'].valueChanges.subscribe((value) => {
      // console.log(value)
      if (value === 'INDIA') {
        this.studentForm.controls['state'].setValidators([
       
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[A-Za-z]+$'),
        ]);
      } else {
        this.studentForm.controls['state'].removeValidators([
          Validators.required,
        ]);
      }
    });

    this.studentForm.controls['identityType'].valueChanges.subscribe(
      (value) => {
        //  console.log(value)
        if (value === 'AdhaarCard') {
          this.studentForm.controls['cardNo'].setValidators([
            Validators.required,
            Validators.pattern('^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$'),
          ]);
        } else {
          this.studentForm.controls['cardNo'].setValidators([
            Validators.required,
            Validators.pattern('^[A-Za-z]{5}[0-9]{4}[A-Za-z]$'),
          ]);
        }
      }
    );
  }

  createFullName() {
    const fullName =
      this.studentForm.controls['firstName'].value +
      ' ' +
      this.studentForm.controls['middleName'].value +
      ' ' +
      this.studentForm.controls['lastName'].value;

    this.studentForm.controls['fullName'].setValue(fullName);
  }

  addData()
  {
    
      console.log(this.studentForm.value)
      this.studentForm.reset();
    
  }


  resetButton()
  {
    this.studentForm.reset();
  }
}
