import { _ViewRepeaterOperation } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nl-grid',
  templateUrl: './nl-grid.component.html',
  styleUrls: ['./nl-grid.component.scss']
})
export class NlGridComponent implements OnInit {

  submits = new FormGroup({
    phone : new FormControl ("", [Validators.required]),
    otp : new FormControl ("", [Validators.required])
  });


  viewPhone : boolean = true;

  viewOtp: boolean = false;
    

  submit(){

    if(this.viewPhone==true)
    {
      console.log("otp field displayed")
      this.viewPhone=false;
      this.viewOtp=true;

    }
    else{
      console.log("values submitted");
      open("/aboutus");

    }
    
    

  }

  constructor() { }

  ngOnInit(): void {
  }

}
