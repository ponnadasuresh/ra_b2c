import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-default-component',
  templateUrl: './default-component.component.html',
  styleUrls: ['./default-component.component.scss']
})
export class DefaultComponentComponent implements OnInit {

  constructor() { }

  default: OwlOptions = {
    loop: true,
    mouseDrag: false,
    autoplay:true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  ngOnInit(): void {
  }

}
