import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-nl-footercards',
  templateUrl: './nl-footercards.component.html',
  styleUrls: ['./nl-footercards.component.scss']
})
export class NlFootercardsComponent implements OnInit {

  footercard: OwlOptions = {
    loop: false,
    mouseDrag: false,
    autoplay:false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        loop: true,
      },
      400: {
        items: 1,
        loop: true,
        touchDrag: true,
      },
      740: {
        items: 4,
        loop: true,
      },
      940: {
        items: 5
      }
    },
  }

  constructor() { }

  ngOnInit(): void {
  }

}
