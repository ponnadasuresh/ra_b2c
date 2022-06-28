import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

  titlestringLength = 0;
  maxTitlestringLength = 90;
  blogTitle = ''

  constructor() { }


  ngOnInit(): void {
  }

}
