import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';
import { CommonModule } from '@angular/common';
import { TemplateDirective } from './validation_rule/template.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    FormBuilderComponent,
    DynamicFormComponent,
    TempleteDrivenFormComponent,
    TemplateDirective,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,CommonModule,FormsModule,RouterOutlet,RouterLink,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
