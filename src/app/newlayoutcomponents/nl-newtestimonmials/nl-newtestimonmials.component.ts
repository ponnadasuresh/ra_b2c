import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-nl-newtestimonmials',
  templateUrl: './nl-newtestimonmials.component.html',
  styleUrls: ['./nl-newtestimonmials.component.scss']
})
export class NlNewtestimonmialsComponent implements OnInit {

  constructor() { }
  testimonials: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }


  ngOnInit(): void {
  }

}
