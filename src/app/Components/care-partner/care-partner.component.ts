import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-care-partner',
  templateUrl: './care-partner.component.html',
  styleUrls: ['./care-partner.component.scss']
})
export class CarePartnerComponent implements OnInit {

  constructor() { }
  carepatnerOption: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots:false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
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
