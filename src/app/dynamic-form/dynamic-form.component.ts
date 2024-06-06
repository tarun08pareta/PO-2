import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import{ emailValidate, userValidate}  from '../validation_rule/user'
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {

  dynamicForm!:FormGroup
  // courseForm: any;
  newSkillControl = new FormControl('');
  constructor(private formBuilder:FormBuilder){
    this.dynamicForm = this.formBuilder.group({
      // name: ['', [Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$'),userValidate]],
      name: ['', [Validators.required, Validators.minLength(3),Validators.pattern('\\s*[a-zA-Z]+(\\s*[a-zA-Z]+)*\\s*'),userValidate]],
      email: ['', [Validators.required, Validators.email,emailValidate]],
      course: ['', Validators.required],
      gender: ['', Validators.required],
      skills: this.formBuilder.array([
       
      ]),
      
    });
  }
  get skills() {
    return this.dynamicForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.formBuilder.control(this.newSkillControl.value));
    this.newSkillControl.reset()
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    if(this.dynamicForm.valid)
      {
        console.log(this.dynamicForm.value);
        
      }else{
        alert('Form is invalid')
      }
  }

}
