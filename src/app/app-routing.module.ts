import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';

const routes: Routes = [
  {
    path:'reactive',
    component:ReactiveFormComponent
  },
  {
    path:'builder',
    component:FormBuilderComponent
  },
  {
    path:'dynamic',
    component:DynamicFormComponent
  },
  {
    path:'template',
    component:TempleteDrivenFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
