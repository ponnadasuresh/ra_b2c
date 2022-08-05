import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NlSigninPopComponent } from './nl-signin-pop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NlSigninPopComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignInModule { }
