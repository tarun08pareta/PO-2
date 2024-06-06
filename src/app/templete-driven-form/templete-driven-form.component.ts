import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templete-driven-form',
  templateUrl: './templete-driven-form.component.html',
  styleUrl: './templete-driven-form.component.css'
})
export class TempleteDrivenFormComponent  {
  
  
 
 

  
  signup(data:any)
  {
    if((data.password) == (data.confirmPassword))
   {
    console.log("signup",data);
   }else{
   alert("password not match");
   }
  }
  
}
