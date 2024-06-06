import { AbstractControl, ValidatorFn } from '@angular/forms';

export function userValidate(control: AbstractControl): {[key: string]: any} | null {
    const names = /pareta/.test(control.value);
    return names?{'userInvalid': true}:null

}

// export function userOrEmailValidate(userInvalid: RegExp): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     const names = userInvalid.test(control.value);
//     const email = userInvalid.test(control.value);
//     return names || email ? { userOrEmailInvalid: true } : null;
//   };


// }

export function emailValidate(control: AbstractControl): {[key: string]: any} | null {
    const names = /tarun/.test(control.value);
    return names?{'userInvalid': true}:null

}

// export function notMatchValidotor(control: AbstractControl): {[key: string]: any} | null {
//   const name = control.get('name')?.value;
//   const email = control.get('email')?.value;

//   return name && email && name.value === email.value ? {'Match': true} : null;

// }