import { keyframes } from '@angular/animations';
import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appTemplate]',
  providers:[{provide:NG_VALIDATORS,useExisting:TemplateDirective,multi:true}]
})
export class TemplateDirective implements Validator {

  @Input('appTemplate') nameNotAllow!:string ;
  
  validate(control: AbstractControl): {[key:string]:any} | null {
    const notAllow= new RegExp(this.nameNotAllow).test(control.value)
    return notAllow?{'appNameNotAllow':true}:null
  }
 


}
