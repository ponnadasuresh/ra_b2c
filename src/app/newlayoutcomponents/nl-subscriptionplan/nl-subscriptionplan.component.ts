import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-nl-subscriptionplan',
  templateUrl: './nl-subscriptionplan.component.html',
  styleUrls: ['./nl-subscriptionplan.component.scss']
})
export class NlSubscriptionplanComponent implements OnInit {

  constructor() { }
  subscriptionplans: OwlOptions = {
    loop: true,
    autoplay:false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots:true,
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
        items: 3
      },
      940: {
        items: 4  
      }
    },
    nav: false
  }
  ngOnInit(): void {
  }

}
