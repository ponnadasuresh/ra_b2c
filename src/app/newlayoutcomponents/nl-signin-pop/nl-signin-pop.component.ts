import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nl-signin-pop',
  templateUrl: './nl-signin-pop.component.html',
  styleUrls: ['./nl-signin-pop.component.scss']
})
export class NlSigninPopComponent implements OnInit {

  viewNumber : boolean = false;
  viewOtp : boolean = false;

  signIn = new FormGroup({
    number : new FormControl('',[Validators.required]),
    otp : new FormControl('',[Validators.required])
  })

  onSubmit(){
    console.log('submit works');
  }

  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
