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
    

  submit(){
    console.log("ksefhiseufh");
    console.log(this.submits);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
