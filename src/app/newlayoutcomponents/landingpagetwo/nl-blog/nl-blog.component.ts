import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-nl-blog',
  templateUrl: './nl-blog.component.html',
  styleUrls: ['./nl-blog.component.scss']
})
export class NlBlogComponent implements OnInit {

  constructor() { }

  blog: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots:true,
    navSpeed: 700,
    // navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }


  ngOnInit(): void {
  }

}
