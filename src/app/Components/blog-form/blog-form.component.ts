import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  blogTitle:string = ''
  minTitleLength:number = 0;
  maxTitlestringLength:number = 90;
  description:string  = '';
  minDescriptionLength:number = 0;
  maxDescriptionLength:number = 300;
  mydata:[] = [];

  // myForm: FormGroup;

  constructor() { }

  blogTitleLen(){
    this.minTitleLength = this.blogTitle.length;
  }
  descriptionLen(){
    this.minDescriptionLength = this.description.length;
  }
  // submitForm(){
    
  // }
  ngOnInit(): void {

  }

}
