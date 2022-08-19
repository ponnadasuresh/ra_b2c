import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-nl-subscriptionplan',
  templateUrl: './nl-subscriptionplan.component.html',
  styleUrls: ['./nl-subscriptionplan.component.scss']
})
export class NlSubscriptionplanComponent implements OnInit {

  

  plans = [
    
    {
    name : "Monkey D Luffy",
    price : 300,
    accomodation : true,
    taxi : true,
    incidental : false,
    insurance : false,
    tow : true
  },

  {
    name : "Monkey D Garp",
    price : 100,
    accomodation : true,
    taxi : true,
    incidental : true,
    insurance : false,
    tow : true
  },

  {
    name : "Rocks D Xebec",
    price : 200,
    accomodation : true,
    taxi : true,
    incidental : false,
    insurance : true,
    tow : true
  },

  {
    name : "HawkEye Mihawk",
    price : 400,
    accomodation : true,
    taxi : true,
    incidental : false,
    insurance : false,
    tow : false
  }


];




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
        items: 2
      },
      940: {
        items: 3
      },

      1200: {
        items : 4
      }
    },
    nav: false
  }
  ngOnInit(): void {
  }

}
